import Vue from "vue";
import VueSocketio from "vue-socket.io";
import { remoteConfig } from "./db-config";

class Socket {
    constructor() {
        this.vueSocketio = VueSocketio;
        this.socketUrl = remoteConfig.api.socket;
    }
    init () {
        Vue.use(this.vueSocketio, this.socketUrl);
    }
}

// regeister socket
export default Socket = new Socket()