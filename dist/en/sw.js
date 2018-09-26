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

importScripts("workbox-v3.6.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-c488b4fc9bcf21a667b6.js"
  },
  {
    "url": "app-d270aa6ac6d8a1b976d9.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-5bab0e952f18171f9071.js"
  },
  {
    "url": "index.html",
    "revision": "7c0d9afb9054199d1928be726c139be3"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "af8f4a443cd31c15d459578e58f7c6cc"
  },
  {
    "url": "component---src-pages-index-jsx.82f53270ac66e98aebb5.css"
  },
  {
    "url": "component---src-pages-index-jsx-1f48eded26a33ba76648.js"
  },
  {
    "url": "0-230c143d4ac337fa7000.js"
  },
  {
    "url": "static/d/806/path---index-6a9-B9yCCoplXuRY3HXdvrzy8KCj5vg.json",
    "revision": "a95b4c4750115376027c77ec412cd77c"
  },
  {
    "url": "component---src-pages-404-js.82f53270ac66e98aebb5.css"
  },
  {
    "url": "component---src-pages-404-js-6c64511bb83eb9535150.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "a9741b18d3adcb7d1473ccc265cf24df"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/en/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});