import SockeyIoClient from 'socket.io-client'
import store from '../store/index'
import { remoteConfig } from "./db-config";

class Socket {
    constructor() {
        this.socket = null
        this.account = null
        this.userName = null
        this.roomName = null
    }
    init () {

    }
}

// regeister socket
export default Socket = new Socket()