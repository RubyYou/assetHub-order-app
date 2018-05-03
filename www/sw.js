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
    "url": "data/areaA/map.png",
    "revision": "b2f8b3146988a4818fe2744de5022d17"
  },
  {
    "url": "data/areaB/process.png",
    "revision": "929f8d6cb501b1d62ad5478cabe39664"
  },
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
    "revision": "efc31e3cf981c870179042eaaba6f450"
  },
  {
    "url": "js/build.js",
    "revision": "2aaa4ce705d7cb959daf8c1f3f89b0c9"
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
    "url": "data/account-config.json",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "data/areaA/charts.json",
    "revision": "1db6fa73b589c8a36d55125d78f0bad8"
  },
  {
    "url": "data/areaA/db-config.json",
    "revision": "1e559813a4a5f7876d26e7e21677177e"
  },
  {
    "url": "data/areaA/forms.json",
    "revision": "3da62b4b8b109628e0bc55ff59ed0e65"
  },
  {
    "url": "data/areaA/posts.json",
    "revision": "2535453795db39044d1f09df95c2c945"
  },
  {
    "url": "data/areaB/charts.json",
    "revision": "3584480f62cfe27bad91c49c15c8b862"
  },
  {
    "url": "data/areaB/db-config.json",
    "revision": "532dd98c6eb5a2ca7110059d635582ec"
  },
  {
    "url": "data/areaB/forms.json",
    "revision": "08bda572a33637bb754d63b32aafa431"
  },
  {
    "url": "data/areaB/posts.json",
    "revision": "1bfdd73ef602deb8250dcc0141569a46"
  },
  {
    "url": "data/areaC/charts.json",
    "revision": "df11ff5075fa3b06cca42f413342fb2e"
  },
  {
    "url": "data/areaC/db-config.json",
    "revision": "8364a84b01f03f0372c4f19135c43f54"
  },
  {
    "url": "data/areaC/forms.json",
    "revision": "ae181e7bc737b5a1b5b0d7f08e2d88eb"
  },
  {
    "url": "data/areaC/posts.json",
    "revision": "113ec87827ac93b8264ddb4a80d9486c"
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
