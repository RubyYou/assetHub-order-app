import store from '../store/index'
import { accountInfo, remoteConfig } from '../utils/db-config'
import Utils from '../utils/utils'
import TimeUtils from '../utils/time-utils'
import { SocketAPI } from './index'

const db = remoteConfig.database
// const yesterday = TimeUtils.substractDayToDBFormate(1)
// const dayBefore = TimeUtils.substractDayToDBFormate(2) // use do while loop
const today = TimeUtils.substractDayToDBFormate(0)

// message get into store's formate
// messages : [
//    { date: 2018-03-17, messages: [{}]}
//    { date: 2018-03-16, messages: [{}, {}]}
//    { date: 2018-03-15, messages: [{}, {}]}
// ]

class MessageAPI {

    constructor() {
        this._daysInChat = 3
    }

    init () {
        // this._messagesDB = firebase.database ().ref (db.messages);
        this._getDefaultMessages() // use do while
    }

    _getDefaultMessages () {
        // this._getDayMessage (dayBefore, 'once')
        // this._getDayMessage (yesterday, 'once')
        this._getDayMessage(today) // listen to the  today's change
    }

    _getDayMessage (date, callback) {
        SocketAPI.getMessages(date)
        callback && callback()

        // console.assert (eventType)
        // console.assert (callback == undefined || typeof callback === 'function')

        // const dbRef = this._messagesDB.child (dbDate)
        // dbRef[eventType] ('value', (snapshots) => {
        //     let items = [];
        //     if (!snapshots.exists ()) { return }

        //     snapshots.forEach( snap => {
        //         let data = Object.assign ({}, snap.val(), {key: snap.key});
        //         items.push (data)
        //     });
        //     store.commit ('setMessagesByDate', {date: dbDate, messages: items})
        //     callback && callback ()
        // })
    }

    getPrevious () {
        const aDayBefore = TimeUtils.substractDayToDBFormate(this._daysInChat)
        const callback = () => { this._daysInChat++ }
        this._getDayMessage(aDayBefore, callback)
    }

    submit (payload) {
        const data = Object.assign({}, payload, {
            username: store.state.userInfo.username,
            time: new Date().getTime().toString(),
            messageDate: today
        })
        SocketAPI.sendMessage(data)
        // this._messagesDB.child (today).push (data)
    }
}

export default new MessageAPI();