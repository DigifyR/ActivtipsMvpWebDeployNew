'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ae12c47054ff7d250a61b28886c869b3",
"assets/AssetManifest.bin.json": "1409f0e337722dc2b424aa81d233b9c0",
"assets/AssetManifest.json": "a9605d363a8f437bc039a1323681efcb",
"assets/assets/icons/distance.png": "23ef627f4cf3518f2d0e9a93ec34f0ba",
"assets/assets/icons/saad.png": "6791cdd672fb9c006d48c8c0615963de",
"assets/assets/icons/upload.png": "5a26ee72e68d936daf194a3020963385",
"assets/assets/images/clean.png": "7c795986538be03ba493fe2365676c9e",
"assets/assets/images/img.png": "18fcdbe7adac741e4340ce6a867b0fbb",
"assets/assets/images/login.png": "f54287b159a605a13dd50400e0d03ea1",
"assets/assets/images/msgImg.png": "4f90698e20d1419d706799449b161f09",
"assets/assets/images/no-data.png": "6802c1284642824393349f45c1a4b03f",
"assets/assets/images/noImage.png": "5b7987ec0917b5b1e99ae21087105eb3",
"assets/assets/images/photo.png": "57ad8f12d0c7cc65c14012597a412ff2",
"assets/assets/logo/logo.png": "5afb439c4b6466bb1ae5b354af5d10bb",
"assets/assets/svg_icons/account.svg": "cd14d525c5c9b5d804804b3157f7caf0",
"assets/assets/svg_icons/activity.svg": "427f526e237206428b8c486225dd37d1",
"assets/assets/svg_icons/arrow.svg": "b75095ec5f5b3fb3945e3d772c62b63f",
"assets/assets/svg_icons/arrowDown.svg": "37a08894184e5ca9031cebd1fa9ba151",
"assets/assets/svg_icons/arrowUp.svg": "c8950cb39835769a8b67ec80e184b9b7",
"assets/assets/svg_icons/arrow_far.svg": "6ffc98a8c1417d68d954ad73260b427b",
"assets/assets/svg_icons/attached.svg": "84e0b24f21fab431d5cb77b78d5c1693",
"assets/assets/svg_icons/booking.svg": "31464bafa7bc3bb0eaecbb118bad7e4a",
"assets/assets/svg_icons/calendar.svg": "984d4899abb30f51de0b9320ddfd71f7",
"assets/assets/svg_icons/close.svg": "7934082ad941f75219e1e52b1bdac0b2",
"assets/assets/svg_icons/contest.svg": "14a3364120414ca87b51e268c9ecdd3e",
"assets/assets/svg_icons/coupon.svg": "5a225280c31e23311d873b8d16bbfd3f",
"assets/assets/svg_icons/dash.svg": "d11108e619201423646ea3fde714995c",
"assets/assets/svg_icons/delete.svg": "d9a1024a62fea4bc19671f654a3ca4c5",
"assets/assets/svg_icons/down.svg": "38dc4128b857b47b59885fe0fddd9e92",
"assets/assets/svg_icons/drop_down.svg": "6ffc98a8c1417d68d954ad73260b427b",
"assets/assets/svg_icons/earning.svg": "8dc3cf2f8e2fa319e588cfc978afe29f",
"assets/assets/svg_icons/eye.svg": "b6eeccec279c03e728982c74d0eb9a5c",
"assets/assets/svg_icons/filter.svg": "07630c1471f570e01d3f93026f4f7d58",
"assets/assets/svg_icons/logout.svg": "5f714336cb347bf52f76cf67268d05f6",
"assets/assets/svg_icons/menu.svg": "11c93077cb0846c2424866dfd5c3516c",
"assets/assets/svg_icons/more.svg": "752bd81d5502fef6183439331e7bc714",
"assets/assets/svg_icons/notification.svg": "3441e1c3cb43e0916f3306a1b3947c52",
"assets/assets/svg_icons/pending.svg": "68135ba9150f7c66cfecce87ccb844d0",
"assets/assets/svg_icons/profile.svg": "86b42a1757df022d87c7f0ac39d518a7",
"assets/assets/svg_icons/sale.svg": "406d119c21109657962cda7c1573dc1a",
"assets/assets/svg_icons/search.svg": "8f14a8899ad6187b4474dd536fefe847",
"assets/assets/svg_icons/send.svg": "28580ecd0d7c1b4c7b84337fccb05f2f",
"assets/assets/svg_icons/settings.svg": "5a449f87d1fea969a859c548c73ce898",
"assets/assets/svg_icons/Star.svg": "09d78bff721895b544d3fc0145299978",
"assets/assets/svg_icons/wallet.svg": "3cdd0c720f048a988319ccb18e97b5a2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "bcbc4e4579da31bdb4e1ae092613035b",
"assets/NOTICES": "e9288dc952210eff2cc3387f9e293e55",
"assets/packages/awesome_snackbar_content/assets/back.svg": "ba1c3aebba280f23f5509bd42dab958d",
"assets/packages/awesome_snackbar_content/assets/bubbles.svg": "1df6817bf509ee4e615fe821bc6dabd9",
"assets/packages/awesome_snackbar_content/assets/types/failure.svg": "cb9e759ee55687836e9c1f20480dd9c8",
"assets/packages/awesome_snackbar_content/assets/types/help.svg": "7fb350b5c30bde7deeb3160f591461ff",
"assets/packages/awesome_snackbar_content/assets/types/success.svg": "6e273a8f41cd45839b2e3a36747189ac",
"assets/packages/awesome_snackbar_content/assets/types/warning.svg": "cfcc5fcb570129febe890f2e117615e0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.ico": "64a301b3dc351769e3bc9954be59f942",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "5fa012390a308e822ba3ecfc5c16a86e",
"icons/Icon-192.png": "5afb439c4b6466bb1ae5b354af5d10bb",
"icons/Icon-512.png": "5afb439c4b6466bb1ae5b354af5d10bb",
"icons/Icon-maskable-192.png": "5afb439c4b6466bb1ae5b354af5d10bb",
"icons/Icon-maskable-512.png": "5afb439c4b6466bb1ae5b354af5d10bb",
"index.html": "d36262fefbc2a9193c5bf2e639d649ac",
"/": "d36262fefbc2a9193c5bf2e639d649ac",
"main.dart.js": "e303bb39540cfb7cd273439b8aadad5a",
"manifest.json": "d363ff5c5fe84cdad8cd0527bd5a4cd6",
"version.json": "669e61596666b5b7bba64d87d1ccb278"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
