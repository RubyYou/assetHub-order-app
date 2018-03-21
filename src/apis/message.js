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
        // online login
        if (Utils.isOnline()) {
            this._messagesDB = firebase.database ().ref (db.messages);
            this._getDefaultMessages () // Use do while
        } else {
            // offline login
            IndexDB.get('allMessages').then(allMessages => {
                allMessages.map (item => {
                    store.commit ('setMessagesByDate', {date: item.date, messages: item.messages})
                })
            });
        }
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
            store.commit ('setMessagesByDate', {date: dbDate, messages: items})
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
        if (!Utils.isOnline()) {
            this._saveToIndexDB ({date: today, data: data})
            // TODO: need to tell user he is offline
        } else  {
            this._messagesDB.child (today).push (data)
        }
    }
    // this also need to happen
    async reconnect () {
        const tempMessages = await IndexDB.get ('tempMessages')
        const isTempExist = tempMessages && Object.keys (tempMessages).length > 0
        console.log (tempMessages)
        if (!isTempExist) { return }

        this._messagesDB.child (tempMessages.date).push (tempMessages.data)
        // clear message if has any
    }

    _saveToIndexDB (payload) {
        // clone the exist one
        IndexDB.set ('tempMessages', payload)
    }
}

export default new MessageAPI ();