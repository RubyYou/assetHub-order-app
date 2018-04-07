
// progressive web app api,
// this is used process caching // This is for OFFLINE static caching
class CacheController {

    constructor () {
        // if ('serviceWorker' in navigator) {
        //     this._registerServiceWorker ()
        // } else {
        //     this._registerApplicationCache ()
        // }
    }

    _registerServiceWorker () {
        window.addEventListener ('load', () => {
            navigator.serviceWorker.register('sw.js').then(registration => {
                console.log('SW registered: ', registration);
            }).catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
        });
    }

    _registerApplicationCache () {
        window.applicationCache.addEventListener('updateready', () => {
            if (window.applicationCache.status === window.applicationCache.UPDATEREADY) {
                console.log ('new version, swap cache')
                window.applicationCache.swapCache();
            }
        });
    }
}

export default new CacheController();