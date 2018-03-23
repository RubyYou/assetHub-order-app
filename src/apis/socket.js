import SockeyIoClient from 'socket.io-client'
import store from '../store/index'
import { remoteConfig } from "../utils/db-config";
import { FormAPI } from './index'
class SocketAPI {

    constructor() {
        this.socket = null
        this.account = null
        this.userName = null
        this.roomName = null
        this.formName = null
    }

    init () {
        this.socket = SockeyIoClient.connect(remoteConfig.api.socket)
        this._registerData()
        this.socket.emit('join', this.userData)

        this.socket.on('setTodayFormDB', data => {
            console.log('setTodayFormDB', data)
            FormAPI.setTodayFormDB()
        })

        this.socket.on('getDayMessage', data => {
            console.log(data)
        })
    }

    createNewForm (formvalues) {
        this.state = store.getters.getUserInfo
        this.insertData = {
            userName: this.state.userName,
            roomName: this.state.roomName,
            formName: this.state.formName,
            formvalues: formvalues
        }
        this.socket.emit('createNewForm', this.insertData)
    }

    updateOldForm (key, formvalues) {
        this.state = store.getters.getUserInfo
        this.updateData = {
            userName: this.state.userName,
            roomName: this.state.roomName,
            formName: this.state.formName,
            formvalues: formvalues,
            key: key
        }
        this.socket.emit('updateOldForm', this.updateData)
    }

    sendMessage (message) {
        this.state = store.getters.getUserInfo
        this.messageData = {
            userName: this.state.userName,
            roomName: this.state.roomName,
            message: message
        }
        this.socket.emit('sendMessage', this.messageData)
    }

    getMessages () {

    }

    _registerData () {
        this.state = store.getters.getUserInfo
        this.userData = {
            account: this.state.account,
            username: this.state.username,
            roomName: this.state.roomName,
            formName: this.state.formName
        }
    }
}

export default new SocketAPI();