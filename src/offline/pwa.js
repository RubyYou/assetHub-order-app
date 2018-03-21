
import store from '../store/index'
import IndexDB from './indexDB'
import { FormAPI, MessageAPI } from '../apis/index'
// progressive web app api,
// this is used process caching and managing offline services
class PwaController {

    constructor () {
        this._online = false
        this._dbPromise = null

        this._registerServiceWorker ()
        this._registerConnectionListener ()
    }

    _registerServiceWorker () {
        if ('serviceWorker' in navigator) {
            window.addEventListener ('load', () => {
                navigator.serviceWorker.register('sw.js').then(registration => {
                    console.log('SW registered: ', registration);
                }).catch(registrationError => {
                    console.log('SW registration failed: ', registrationError);
                });
            });
        }
    }

    _registerConnectionListener () {
        window.addEventListener ('online', this._onlineService.bind (this))
        window.addEventListener ('offline', this._offlineService.bind (this))
    }

    _offlineService () {
        this._updateOnlineStatus ()

        // shallow clone
        const allMessages = JSON.parse (JSON.stringify (store.getters.messages))
        const forms = JSON.parse (JSON.stringify (store.getters.todayForms))

        IndexDB.set ('allMessages', allMessages )
        IndexDB.set ('forms', forms )
    }

    async _onlineService () {
        this._updateOnlineStatus ()
        // remove stuff indexDB and so allow it to access remotely
        await FormAPI.reconnect ()
        await MessageAPI.reconnect ()
    }

    _updateOnlineStatus () {
        this._online = navigator.onLine
        console.log ('_registerConnectionListener', this._online)
    }

}

export default new PwaController ();