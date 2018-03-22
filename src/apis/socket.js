import SockeyIoClient from 'socket.io-client'
import store from '../store/index'
import { remoteConfig } from "../utils/db-config";

class SocketAPI {

    constructor() {
        this.socket = null
        this.account = null
        this.userName = null
        this.roomName = null
        this.chatNode = null
    }

    init () {
        this.socket = SockeyIoClient.connect(remoteConfig.api.socket)
        this._registerData()
        this.socket.emit('join', this.userData)
    }

    _registerData () {
        this.state = store.getters.getUserInfo
        this.userData = {
            account: this.state.account,
            username: this.state.username,
            roomName: this.state.roomName
        }
    }
}

export default new SocketAPI();