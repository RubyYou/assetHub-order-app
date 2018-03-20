module.exports = {
    globDirectory: './www/',
    globPatterns: [
      '**/*.{html,js,css}'
    ],
    swDest: './www/sw.js',
    clientsClaim: true,
    //clientsClaim instructs the latest service worker to take control of all clients as soon as it's activated
    skipWaiting: true,
    // skipWaiting instructs the latest service worker to activate as soon as it enters the waiting phase
    maximumFileSizeToCacheInBytes: 105000000,
    runtimeCaching: [{
      urlPattern: new RegExp('https://water-safety-construction.firebaseio.com'),
      handler: 'staleWhileRevalidate'
    }]
};