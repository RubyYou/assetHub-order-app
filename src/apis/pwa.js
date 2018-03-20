
import store from '../store/index'
import idb from 'idb'

// progressive web app api,
// this is used process caching and managing offline services
class PwaAPI {

    constructor () {
        this._online = false
        this._dbPromise = null

        this._registerServiceWorker ()
        this._registerConnectionListener ()
        this._registerIndexDB ()
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
        window.addEventListener ('online',  this._onlineService.bind (this))
        window.addEventListener ('offline', this._offlineService.bind (this))
    }

    _offlineService () {
        this._updateOnlineStatus ()
        const info = Object.assign ({}, store.state.allMessages, store.state.forms)

        this._dbPromise.then (db => {
            console.log ('db open')
            const tx = db.transaction ('data', 'readwrite')
            const store = tx.objectStore ('data')

            store.put (info).then (() => {
                console.log ('DB Promise done')
            })

            // Promise.all ( datas.map (data => store.put (data)))
            //     .catch(() => {
            //         tx.abort();
            //         throw Error('Data were not added to the store');
            //     })
        })
    }

    _onlineService () {
        this._updateOnlineStatus ()
        // remove stuff in indexDB and access remotely
    }

    _updateOnlineStatus () {
        this._online = navigator.onLine
        console.log ('_registerConnectionListener', this._online)
    }

    _registerIndexDB () {
        if (!('indexedDB' in window)) { return }
        // this is a promise
        this._dbPromise = idb.open('runtime-data', 1, db => {
            db.createObjectStore('data')
        })
    }
}

export default new PwaAPI ();