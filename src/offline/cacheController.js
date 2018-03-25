
// progressive web app api,
// this is used process caching // This is for OFFLINE static caching
class CacheController {

    constructor() {
        // this._registerServiceWorker ()
    }

    _registerServiceWorker () {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('sw.js').then(registration => {
                    console.log('SW registered: ', registration);
                }).catch(registrationError => {
                    console.log('SW registration failed: ', registrationError);
                });
            });
        } else {
            // use window.applicationCache
            alert('本機器目前不支援線下使用中') // manually doing cachine
        }
    }
}

export default new CacheController();