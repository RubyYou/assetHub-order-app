/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.0.1/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "img/icons/icon_114x114.png",
    "revision": "79f019f90cd614d5948dbab9aa37f643"
  },
  {
    "url": "img/icons/icon_144x144.png",
    "revision": "317df7a91bd5dffe62e1718c4063a669"
  },
  {
    "url": "img/icons/icon_57x57.png",
    "revision": "56546e9fdc2b66a947932dfbf63d909e"
  },
  {
    "url": "img/icons/icon_72x72.png",
    "revision": "0237b98e5883247e25c109fd6a6d1dd4"
  },
  {
    "url": "img/map.png",
    "revision": "b2f8b3146988a4818fe2744de5022d17"
  },
  {
    "url": "img/startup/320x460.png",
    "revision": "02c954591dd6fc22c1bec3e4ebb7e93b"
  },
  {
    "url": "img/startup/320x460@2x.png",
    "revision": "12369d36abbed093ca4bba94e3f5f093"
  },
  {
    "url": "img/startup/384x502@2x.png",
    "revision": "b72519fa63f1c3898eec6594af118ee0"
  },
  {
    "url": "img/startup/384x502@4x.png",
    "revision": "2e606466f5489d7982fd65fe984fdfab"
  },
  {
    "url": "img/startup/512x374@2x.png",
    "revision": "82080a160ed8abc3daa9b72e617b4bf7"
  },
  {
    "url": "img/startup/512x374@4x.png",
    "revision": "85e175a8caecea9c81258dcc84d98a2b"
  },
  {
    "url": "img/startup/640x1096.png",
    "revision": "2cc7a790d948a81e004b95271f892d5d"
  },
  {
    "url": "img/user.png",
    "revision": "ec6ae4324768e2c3f9d258c93470c16e"
  },
  {
    "url": "index.html",
    "revision": "7fcfdb4f7f77d9018e2774fb87f1a2ba"
  },
  {
    "url": "js/build.js",
    "revision": "48a1126ed36b970b8aef9a96d4334748"
  },
  {
    "url": "js/echarts-all.js",
    "revision": "7209476e49874839e712842940c29add"
  },
  {
    "url": "fonts/Framework7Icons-Regular.eot",
    "revision": "c0087d4d5ddd32ec52f1859b42956db6"
  },
  {
    "url": "fonts/Framework7Icons-Regular.ttf",
    "revision": "4348368ab857cb57b18e1a87ba8ff284"
  },
  {
    "url": "fonts/Framework7Icons-Regular.woff",
    "revision": "2e9a0313ed02aed1e206340feb36ec5c"
  },
  {
    "url": "fonts/Framework7Icons-Regular.woff2",
    "revision": "ae8767ca8ecf4b090af58eff5dd6d3a7"
  },
  {
    "url": "css/app.css",
    "revision": "2177bfa3b519aee33c7929c434198a05"
  },
  {
    "url": "css/build.css",
    "revision": "446898d1fbc012d20a73794e17b6eb89"
  },
  {
    "url": "css/framework7-icons.css",
    "revision": "d447b786918f2e9e42353d83fb3580cc"
  },
  {
    "url": "css/framework7.ios.min.css",
    "revision": "7950c3ba8bcc016a606a07386fdeef94"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
