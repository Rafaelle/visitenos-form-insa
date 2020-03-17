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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
<<<<<<< 8e507d49be28921351ab5d334443a25150148918
  "/visitenos-form-insa/precache-manifest.1c1c368a56bdae6ce1b6e9422031df8f.js"
=======
  "/react-pages/precache-manifest.69e9c035659910e04993387d1c71b452.js"
>>>>>>> Updates
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

<<<<<<< 8e507d49be28921351ab5d334443a25150148918
workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/visitenos-form-insa/index.html"), {
=======
workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/react-pages/index.html"), {
>>>>>>> Updates
  
  blacklist: [/^\/_/,/\/[^/?]+\.[^/]+$/],
});
