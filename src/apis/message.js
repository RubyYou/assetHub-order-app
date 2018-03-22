import firebase from 'firebase'
import store from '../store/index'
import { accountInfo, remoteConfig } from '../utils/db-config'
import Utils from '../utils/utils'
import TimeUtils from '../utils/time-utils'
import moment from 'moment'
import IndexDB from '../offline/indexDB' // change to controller

const db = remoteConfig.database
const yesterday = TimeUtils.substractDayToDBFormate (1)
const dayBefore = TimeUtils.substractDayToDBFormate (2)
const today = TimeUtils.substractDayToDBFormate (0)

// message get into store's formate
// messages : [
//    { date: 2018-03-17, messages: [{}]}
//    { date: 2018-03-16, messages: [{}, {}]}
//    { date: 2018-03-15, messages: [{}, {}]}
// ]

class MessageAPI {

    constructor () {
        this._daysInChat = 3
    }

    init () {
        // online messages
        if (Utils.isOnline ()) {
            this._connectRemoteDB ()
        } else {
            this._getContentFromIndexDB ()
        }

        this._registerService ()
    }

    _getContentFromIndexDB () {
        IndexDB.get('allMessages').then(allMessages => {
            allMessages.map (item => {
                store.commit ('setMessagesByDate', { date: item.date, messages: item.messages})
            })
        });
    }

    _registerService () {
        window.addEventListener ('online', this._online.bind (this))
        window.addEventListener ('offline', this._offline.bind (this))
    }

    async _online () {
        this._connectRemoteDB ()

        const tempMessages = await IndexDB.get ('tempMessages')
        const isTempExist = tempMessages && tempMessages.length > 0

        if (!isTempExist) { return }

        tempMessages.map (message => {
            this._messagesDB.child (message.date).push (message.data)
        })

        IndexDB.delete ('tempMessages')
        IndexDB.delete ('allMessages') // normal one
    }

    _offline () {
        const allMessages = JSON.parse (JSON.stringify (store.getters.messages))
        IndexDB.set ('allMessages', allMessages )
    }

    _connectRemoteDB () {
        this._messagesDB = firebase.database ().ref (db.messages);
        this._getDefaultMessages ()
    }

    _getDefaultMessages () {
        this._getDayMessage (dayBefore, 'once')
        this._getDayMessage (yesterday, 'once')
        this._getDayMessage (today, 'on') // listen to the  today's change
    }

    _getDayMessage (dbDate, eventType, callback) {
        console.assert (eventType)
        console.assert (callback == undefined || typeof callback === 'function')

        const dbRef = this._messagesDB.child (dbDate)
        dbRef[eventType] ('value', (snapshots) => {
            let items = [];
            if (!snapshots.exists ()) { return }

            snapshots.forEach( snap => {
                let data = Object.assign ({}, snap.val(), {key: snap.key});
                items.push (data)
            });
            store.commit ('setMessagesByDate', { date: dbDate, messages: items })
            callback && callback ()
        })
    }

    getPrevious () {
        if (!Utils.isOnline()) { return }
        const aDayBefore = TimeUtils.substractDayToDBFormate (this._daysInChat)
        const callback = () => { this._daysInChat ++ }
        this._getDayMessage (aDayBefore, 'once', callback)
    }

    submit (payload) {
        const data = Object.assign({}, payload, {
            username: store.state.userInfo.username,
            time : new Date ().getTime ()
        })

        if (Utils.isOnline()) {
            this._messagesDB.child (today).push (data)
        } else  {
            store.commit ('setPendingMessage', { date: today, message: data }) // this should show pending
            this._saveToIndexDB ({date: today, data: data})
            console.log (data)
        }
    }

    async _saveToIndexDB (payload) {
        const tempMessages = await IndexDB.get ('tempMessages')
        let tempMessagesClone = []
        if (tempMessages && tempMessages.length > 0) {
            tempMessagesClone = tempMessages.slice (0)
        }

        tempMessagesClone.push (payload)
        //console.log ('tempMessagesClone', tempMessagesClone)
        IndexDB.set ('tempMessages', tempMessagesClone)
    }
}

export default new MessageAPI ();