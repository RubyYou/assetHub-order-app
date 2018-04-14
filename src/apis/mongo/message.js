import store from '../../store/index'
import { accountInfo, remoteConfig } from '../../utils/db-config'
import Utils from '../../utils/utils'
import TimeUtils from '../../utils/time-utils'
import { SocketAPI } from '../index'
import IndexDB from '../../offline/indexDB' // change to controller

const daybefore = TimeUtils.substractDayToDBFormate(2)
const yesterday = TimeUtils.substractDayToDBFormate(1)
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
        Utils.isOnline () ? this._connectRemoteDB() : this._getContentFromIndexDB()
        this._registerService()
    }

    _connectRemoteDB () {
        this._getDayMessage(daybefore)
        this._getDayMessage(yesterday)
        this._getDayMessage(today)
    }

    _getContentFromIndexDB () {
        IndexDB.get('allMessages').then(allMessages => {
            allMessages.map(item => {
                store.commit('setMessagesByDate', { date: item.date, messages: item.messages })
            })
        });
    }

    _getDayMessage (date, callback) {
        SocketAPI.getMessages(date)
        callback && callback()
    }

    _registerService () {
        window.addEventListener('online', this._online.bind(this))
        window.addEventListener('offline', this._offline.bind(this))
    }

    async _online () {
        this._connectRemoteDB()
        //alert ('use remote service, delete offline stuff')
        const tempMessages = await IndexDB.get('tempMessages')
        const isTempExist = tempMessages && tempMessages.length > 0

        if (!isTempExist) { return }

        tempMessages.map(message => {
            SocketAPI.sendMessage(message.data)
        })

        IndexDB.delete('tempMessages')
        IndexDB.delete('allMessages') // normal one
    }

    _offline () {
        //alert ('start offline storage')
        const allMessages = JSON.parse(JSON.stringify(store.getters.messages))
        IndexDB.set('allMessages', allMessages)
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
            createDate: today
        })
        // this has to change to message Date
        if (Utils.isOnline()) {
            SocketAPI.sendMessage(data)
        } else {
            store.commit('setPendingMessage', { date: today, message: data }) // this should show pending
            this._saveToIndexDB({ date: today, data: data })
        }
    }

    async _saveToIndexDB (payload) {
        const tempMessages = await IndexDB.get('tempMessages')
        let tempMessagesClone = []
        if (tempMessages && tempMessages.length > 0) {
            tempMessagesClone = tempMessages.slice(0)
        }
        tempMessagesClone.push(payload)
        IndexDB.set('tempMessages', tempMessagesClone)
    }
}

export default new MessageAPI();