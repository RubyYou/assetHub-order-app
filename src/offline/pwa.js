
import store from '../store/index'
import IndexDB from './indexDB'
import { FormAPI, MessageAPI } from '../apis/index'
// progressive web app api,
// this is used process caching // This is for OFFLINE static caching
class PwaController {

    constructor () {
        this._online = false
        this._registerServiceWorker ()
        //this._registerConnectionListener ()
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
        } else  {
            alert ('there is no offline service') // manually doing cachine
        }
    }
}

export default new PwaController ();