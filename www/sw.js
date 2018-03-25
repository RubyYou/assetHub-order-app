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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "css/app.css",
    "revision": "2177bfa3b519aee33c7929c434198a05"
  },
  {
    "url": "css/build.css",
    "revision": "752f257825d77f6e8a192a4f2bf3d343"
  },
  {
    "url": "css/framework7-icons.css",
    "revision": "d447b786918f2e9e42353d83fb3580cc"
  },
  {
    "url": "css/framework7.ios.colors.min.css",
    "revision": "165de837ecb495d83781ac96a871fb9f"
  },
  {
    "url": "css/framework7.ios.min.css",
    "revision": "7950c3ba8bcc016a606a07386fdeef94"
  },
  {
    "url": "css/framework7.material.colors.min.css",
    "revision": "f39185b60a97699e940282ef14e9efab"
  },
  {
    "url": "css/framework7.material.min.css",
    "revision": "fb1d983fdd086a2b5df39ee5b0b3d796"
  },
  {
    "url": "img/icons/icon-128.png",
    "revision": "c53bae65078938a678267efb21454811"
  },
  {
    "url": "img/icons/icon-256.png",
    "revision": "6f042e521e4b4b9c5e0d610113298649"
  },
  {
    "url": "img/icons/icon-48.png",
    "revision": "967b80ffef2a99d090229cf0fbd9f6ea"
  },
  {
    "url": "img/icons/icon-512.png",
    "revision": "0aef130ed2cf6bd2384fb3d919cf8755"
  },
  {
    "url": "img/icons/icon-72.png",
    "revision": "6f06a2accc69151d7cc9e39138c8a29c"
  },
  {
    "url": "img/icons/startup-screen-1242x2208.png",
    "revision": "02ed7dee6fcb4245c3ab30f747b5aa64"
  },
  {
    "url": "img/icons/startup-screen-640x920.png",
    "revision": "848cd7c0c63f4ca31dcf4825c491864f"
  },
  {
    "url": "img/icons/startup-screen-768x1004.png",
    "revision": "211b69a71c36f0a19371afac0eaf4fb3"
  },
  {
    "url": "img/map.png",
    "revision": "b2f8b3146988a4818fe2744de5022d17"
  },
  {
    "url": "img/user.png",
    "revision": "ec6ae4324768e2c3f9d258c93470c16e"
  },
  {
    "url": "index.html",
    "revision": "88c529da31431d925073d001aef75c96"
  },
  {
    "url": "js/build.js",
    "revision": "2d26ece5671e4e46a4714ef5235960f6"
  },
  {
    "url": "js/echarts-all.js",
    "revision": "7209476e49874839e712842940c29add"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
