import firebase from 'firebase'
import store from '../store/index'
import { accountInfo, remoteConfig } from '../utils/db-config'
import Utils from '../utils/utils'
import TimeUtils from '../utils/time-utils'
import moment from 'moment'

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
            console.log ('offline, getInfo from IndexDB or localstorage');
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
        const aDayBefore = TimeUtils.substractDayToDBFormate (this._daysInChat)
        const callback = () => { this._daysInChat ++ }
        this._getDayMessage (aDayBefore, 'once', callback)
    }

    submit (payload) {
        const data = Object.assign({}, payload, {
            username: store.state.userInfo.username,
            time : new Date ().getTime ()
        })
        this._messagesDB.child (today).push (data)
    }
}

export default new MessageAPI ();