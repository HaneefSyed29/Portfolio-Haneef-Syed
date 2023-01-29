'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "cc1fa9cce5af273c0909d105387fee89",
"favicon.ico": "b260f6691057c659da949099cafa8496",
"index.html": "4764daef2d41542d7b4a3dd9476bf934",
"/": "4764daef2d41542d7b4a3dd9476bf934",
"main.dart.js": "6be13b1122b2062cf895cfedbf58f37a",
"flutter.js": "5b6f16e9d38514f0770c0490705c069e",
"README.md": "a6301a3f6770f0de970ee39b659ea378",
"icons/Icon-192.png": "de928ccf50d668e228fbdc4a7c77b7f1",
"icons/Icon-512.png": "4b4a4fab13fa3d350f7e67d10c00e3d9",
"manifest.json": "6fd7ea7f7ac4bee4223b9f531525df23",
".git/config": "024a1ba5db51c76ca1cf6c44477a0db4",
".git/objects/61/1b9da0a9b99dde1794b02ec0b4bcc45ca4e6ff": "e0e472d493c694ca6a5304266361671f",
".git/objects/95/b218652570b265b3ae72e4052bee87b97a43ec": "1525ad98bc01b0e2c90fd956df781130",
".git/objects/66/5e33fa774df42c31c6a7fe71af4c9cd28c24da": "8ba27d1e893eebeb69d20d63e424bdc7",
".git/objects/35/eb1ddfbbc029bcab630581847471d7f238ec53": "b69277a8e391674b63a06b70141a9094",
".git/objects/56/9b54cce9e6ee7c48b582dd6cfbadeaa196f1e4": "cb04e251e1b4465ec111c53bb7faf50b",
".git/objects/93/d4cdf02b7253860efc96b3d4a8f07f7b2f14d4": "225cc553e18bbd78fd90b61ac793ece1",
".git/objects/ad/524ab119896a155a7ad87f1326e1387c576663": "b418dfd7cb2b69b683c32ae177f26aeb",
".git/objects/da/3f15d40f22af2aeb0dac88b7b45d33c14f54e4": "33d1c2541219fe8dc7f540010e2d8c94",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "6c33f0e88a71d9ba8563eab3ee932f04",
".git/objects/d8/1191a30d3d6ea851fdb1ae26eccd9166986947": "46b1ba417bad9b8f8285111334a0a839",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/3b76b54c1f81faf9dda6c5f8206fb18cc64a2f": "ec6003d80d565ca6fe06fb6c9363e09f",
".git/objects/eb/3f57be780277ff2ed529754533e68e25c9fdfa": "572f245e3fcd576235a66497edb7742a",
".git/objects/f2/cdb5ed6d50084299dd851f2a7476ed52c54bf6": "6f06459a9547781687053bb5369e596e",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/fb/f99b98af46064cb7bec4d7663cc01fe956c8b3": "354bfee5f8d927d9cf82383dddd2a5cd",
".git/objects/ed/762cd1d734e4587d9e4081e166e05c33f5aeb7": "ee32b0a3b1e64bb2f09356afc4c09f10",
".git/objects/27/7a289a457655fbb7ae31ad2ea918489cbbd79a": "4a4f7b3e99e1bdc36f8b61d1f30ca7c1",
".git/objects/29/497ed24316a845b64dc51f96cc17c7108b82e2": "bf2fef44351c62daffff586a81a9b59f",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/1f/c6e141dd5560e8afe19c8cc3315b76d6ddccc3": "52b415c9c93f8849d83137d8e47f3728",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/4c/4dd2769479ceffd04904530500a05ebd3b4faf": "53670edc313119959922809292925121",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "39554bb11371007e021a7fb3361ecd47",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/07/595c19bff99537173efef42b97ad85b75cf4df": "97d44c89b8528968846bdff4d61b089f",
".git/objects/31/f66067ab2fd4b6e626a0300244ca9e687269ec": "5b09982c4ed9fe56a5ccf0e02a8896e0",
".git/objects/31/c13a38451f8138478d91abc811a31eb6a92274": "742b172f8a5f52a0acc56c5785748b5f",
".git/objects/98/3284220c0f4280e3d211f1b278057e4ba7962d": "0dd8b785e2691785e0ef22ccb93c4164",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/5e/4946f4bc96da2ff5fa16dd0ec93c120bc8b216": "b0e2d59add716555fcee566cd0e6d8ef",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/63/9900d13c6182e452e33a3bd638e70a0146c785": "488924a8ec51457535ebf377a60e23c8",
".git/objects/63/b98df88e3f3a10996e7fe42fd4d8d2c74298a9": "9555c17fc04cb18d7f8bbb818288a465",
".git/objects/64/6542204cf5db3f5145443f67858370ed2bdd22": "ca7cfdc5d040a311ef2034b5e358e790",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/a7/7492c522f4de1cf74abf8d4af515f25fd88fb3": "3fbfc3f50cc1dac624eac88bf42a8fa6",
".git/objects/d5/ce9163494460e654e7808d886429d9c66b0054": "182ce28138ebe3152dbdecb75294a8b6",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/428ee67aa7e588f13323f790ccb6d057c4513a": "d2c6de87e3382014ef9fd9aa2230157b",
".git/objects/ea/2a8e8879c5a64bdb9130655ad580b067ff39ce": "c34c2e9736ec5658db9bcd090c03a155",
".git/objects/e1/ea93d3977ec66b35b8e76e0e348d533636b6c6": "bac837b8631ef599e6b1ffa48b478dc0",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/e0/3429856e3bbe041f68e2e81ba26dd7fee05455": "939adeea9353a7a2965a9b609196bef6",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/48/da4490e3e5b5498e1a1789cd6054af391094ba": "fdc97f5e62b9312615f4ff892f0dc293",
".git/objects/48/bae00343346cc1a6ec6f40d0ae68c80ced28f0": "23b703df5faa0ab7152ae6f9e663ac21",
".git/objects/48/63ab4ca365599350d166452c11be02fcf10adb": "59e37d7e1f9a217ec150ba997dd3560d",
".git/objects/1e/54460b569dec799bb317dd0d4b52066e11f4c8": "14b0d737c02ee7885454416244d5cba2",
".git/objects/12/3a23d714f4ba147d049cec0751ac9927415813": "fd4e32d5e60bcbe0ca39ea3c7a5a440c",
".git/objects/85/1c9844efd8a0392616d895f2da27f21c79865b": "df76285b56c3d1d2687d825bde078b67",
".git/objects/85/0119e6b6a683d35535feecdc0dbae7614c35ea": "70d4ed8096ad92a277706cc741f483dc",
".git/objects/71/c3b37286513dbcb6b87f9a0a1150d16fea4da7": "84493dbd6710381a6c5c54fd784f63b2",
".git/objects/82/2b0bd3db227c8cee9cc1f8883de16b10acc8ad": "cc1e649c007a0d46ebadf983d19b5dfa",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/78/dc29e8837d28dd30e856a5e524566c5ca79b4e": "11c673cfc3310634faa613a303d258c9",
".git/objects/13/0c87d94e71b0062b07a0a3d3d519d9c15613f1": "b8f72e26f6af8dd8ef003079a691d587",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "da938ceb26b52a935960ee1213e958bb",
".git/logs/refs/heads/main": "5d8e36713642374d82b7094b1d793b69",
".git/logs/refs/remotes/origin/main": "d838d8a78c1fd148a4f682b62d673aaa",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "3132a4b372e8c70b9f69b1fc91ec7e14",
".git/refs/remotes/origin/main": "3132a4b372e8c70b9f69b1fc91ec7e14",
".git/index": "db715ea7b7ec4cf3364454688d49586d",
".git/COMMIT_EDITMSG": "b31e5a3283316e50993eccb7db07f8c9",
"assets/AssetManifest.json": "7e43ae18d5e6da1ac7e626523161704a",
"assets/NOTICES": "ef2d5292fa305d5e9e110563287512af",
"assets/FontManifest.json": "047745f18d766afa39e802001f6956d3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/shaders/ink_sparkle.frag": "891b2a93933c60fe24172d13f9a8b13b",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/project5.png": "debb1f5488b8a718419bf25afbfd0127",
"assets/assets/images/project4.png": "88685704faa53fadab50a8cb5fb9d71e",
"assets/assets/images/project6.png": "367880f750419593344ee8cdc677f122",
"assets/assets/images/project3.png": "36859efecdbe033447565dbee94efe98",
"assets/assets/images/project2.png": "c1a41aa955146c67fa91a4838acf40c0",
"assets/assets/images/project1.png": "c26dec2d694137db047b653d5431364e",
"assets/assets/images/profile.png": "6097eac9e7011c30d52c033ede1f555d",
"assets/assets/fonts/DMSerifDisplay-Regular.ttf": "359da22031d8335655a8cd93fc979eab",
"assets/assets/fonts/Barlow-Regular.otf": "8198537e317a22b04d6f47bcae94066a",
"assets/assets/fonts/DancingScript-VariableFont_wght.ttf": "a49cf406017aaf0eef1d4800794b4b15",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
".idea/vcs.xml": "8c9c0403ab0f6457841c605f08a3340c",
".idea/workspace.xml": "c45dab68d51755fb9251a8fd24449b0c",
".idea/modules.xml": "1eb3b065c55895e347308e50cd717dee",
".idea/web.iml": "52db5efd0fe9f576a1302b8c4b5eac6c",
".idea/misc.xml": "e6b023077aa4876dbe12734108325458"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
