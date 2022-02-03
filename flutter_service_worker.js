'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "749557b9563358a5ebe4e4605530dd9b",
"index.html": "c6bae42ad01e1d086ce0a5bbc87e6baf",
"/": "c6bae42ad01e1d086ce0a5bbc87e6baf",
"main.dart.js": "a8a90ed8f0eb9e6d322217228346fdde",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e6aaa8bbe1665ae9e04280b146f22582",
"assets/AssetManifest.json": "b666b384ed1f16a8f87330a76d80a385",
"assets/NOTICES": "9266004c9df4fa403c471c46b0e49855",
"assets/FontManifest.json": "1e88f37d6a3c9dc65e12e265c07cf369",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/group9.png": "05ee26723cf8bda81cf8e1c9958bc456",
"assets/assets/images/group17@2x.png": "ede7cd1682d5e88c94e7a5c70ec6af3e",
"assets/assets/images/group74@2x.png": "49520aa56ab83c53dd10a0839e5bd254",
"assets/assets/images/bitmap@2x.png": "6f3d5f3b964318e6ac39ff3e0941c3bd",
"assets/assets/images/group9@3x%25202.png": "2c76384fc260d8ba85eba2c5dcdbc047",
"assets/assets/images/group9@2x%25202.png": "622a6b6261ec5f15da59cdc0b5e44201",
"assets/assets/images/bitmap@2x%25202.png": "b276b9b2f61757463895a93f5555b60d",
"assets/assets/images/bitmap@3x%25202.png": "1c8d945b0ba7a42e6ff65518014e5ec1",
"assets/assets/images/bitmap@3x%25203.png": "be937b7dd22d00b5e0e7214de3e657aa",
"assets/assets/images/bitmap@2x%25203.png": "2b22e8a50f6e70e316534632787add93",
"assets/assets/images/group2@3x.png": "40c17d441f2e557b5c484dcf3ba56035",
"assets/assets/images/group2@2x.png": "c6f77cbb8a3d12ddea68218a09b7b70e",
"assets/assets/images/group46.png": "b04924abbb274b677f10d16a6bd6ce8b",
"assets/assets/images/group71Copy8.png": "5a6ab94a9cb2bf591a895c52ffcc5e01",
"assets/assets/images/group16%25202.png": "66d957dd044b34e803de185890162dcb",
"assets/assets/images/group74Copy.png": "1cf4fd0e6e9faba475c607458c696302",
"assets/assets/images/bitmap@3x.png": "7ebb3178787c9784ee2486e3136fdd31",
"assets/assets/images/group.png": "a2011cc1f290c0cc31d4a5b9ed6bad47",
"assets/assets/images/bitmap@3x%25204.png": "2547cb1a675c5a62549a175dde90d013",
"assets/assets/images/bitmap@2x%25204.png": "f4655f460d107d83ca52cbcd8602b5e8",
"assets/assets/images/group74@3x.png": "ed6e2da9c7a05ed58c016b051fad969d",
"assets/assets/images/group17@3x.png": "ac40da1cc2bee7b3f00c21399e3d6114",
"assets/assets/images/group5%25202.png": "b35fadf7bee639c4f1fd9fb09ba5b246",
"assets/assets/images/group71Copy8@2x%25203.png": "04e87eb6c543f4a5a319bf1766fbed02",
"assets/assets/images/group71Copy8@3x%25203.png": "90599c3e11c40dd59b77ed43845659ff",
"assets/assets/images/golf_course.jpeg": "cd9951b0fb318dc4092e586e4fb92916",
"assets/assets/images/group@3x.png": "abf2eedefe20aa803247f020e0238257",
"assets/assets/images/group71Copy5@3x.png": "4bffaf8861e01857e69cc0468167202f",
"assets/assets/images/group4@3x.png": "7d8007f5a4f58e1022102dbd171bcc64",
"assets/assets/images/group22.png": "def55cc41e9299ed9183e283f1e18965",
"assets/assets/images/group71Copy7@2x.png": "1f6f020c08136fed9711826c50118fde",
"assets/assets/images/group71Copy8@3x%25202.png": "38765d9e14f1d2ae02035867bcacaabc",
"assets/assets/images/group71Copy8@2x%25202.png": "8f75e05a8a5c44ed16d1cf614508dbec",
"assets/assets/images/group13Copy2@2x.png": "7d03500052e937058ec6895fb61451d9",
"assets/assets/images/group13@3x.png": "5cbde74069879f6419bc92cec8b6eba8",
"assets/assets/images/group71Copy8%25204.png": "e46502b8f1fbe0971ae1557f6fb5b396",
"assets/assets/images/group35@2x.png": "d55e31aab08cf56ab6525a673424186a",
"assets/assets/images/group60@2x.png": "39369d268d05f8349ab92a14434c6354",
"assets/assets/images/group71Copy8%25205.png": "84b6588a0bb81668ad30fe928181631f",
"assets/assets/images/group46@3x.png": "369d32218bfe21dad58a5f527d36cf64",
"assets/assets/images/group35.png": "31ef2f538f03d8f756a5d6f430cf7824",
"assets/assets/images/group71Copy8@3x%25205.png": "d790476a278ee1db8e2696dbd681e839",
"assets/assets/images/group71Copy8@2x%25205.png": "b90b1c6cb25eb4d767272745d16a51f0",
"assets/assets/images/group46@2x.png": "c3142c001194782c255c898a12fb4f7b",
"assets/assets/images/group60@3x.png": "c5efd66ec660852a4b4405b08a62d87e",
"assets/assets/images/group35@3x.png": "736fb844db59d4455cfbdb2dd7cb6fa8",
"assets/assets/images/group13@2x.png": "7f3a9f3d41a5aaa15caa8cd9cfdaa631",
"assets/assets/images/group13Copy2@3x.png": "4978117401cb385bbfc4006b0266f4e6",
"assets/assets/images/group13Copy2.png": "324f1fe8e67b194e2edbb1704e67c924",
"assets/assets/images/group71Copy8@2x%25204.png": "8f75e05a8a5c44ed16d1cf614508dbec",
"assets/assets/images/group71Copy8@3x%25204.png": "38765d9e14f1d2ae02035867bcacaabc",
"assets/assets/images/group71Copy7@3x.png": "ca41a5843ea8bd2771c75f5b00b515e6",
"assets/assets/images/group71Copy8%25202.png": "e46502b8f1fbe0971ae1557f6fb5b396",
"assets/assets/images/group71Copy8%25203.png": "40bea37d73d26f4f2f945aa1e183a731",
"assets/assets/images/group4@2x.png": "d984a0de8d55872303aefe1c78408644",
"assets/assets/images/group71Copy5@2x.png": "e070bd5f98d210af81d953179cfc67cb",
"assets/assets/images/group@2x.png": "424a414c2783efe19a9b2209ef9a8a60",
"assets/assets/images/group74Copy@3x.png": "a96be7e46db2b2bce805cd9b296a7b0d",
"assets/assets/images/group16.png": "abb761fa673076de1b6ebfe2202016d5",
"assets/assets/images/bitmap%25203.png": "a6ecaf6fe3938346de38d7b7c6ee709c",
"assets/assets/images/bitmap%25202.png": "224ec2100f2c45b9a60f3deca4c2e6ac",
"assets/assets/images/group46Copy@2x.png": "bf185af5261cd06a35474508186aa764",
"assets/assets/images/group17.png": "ceaef2c60714a08fdb23f752a85517ce",
"assets/assets/images/group13Copy@2x.png": "e95f07ebb2b4dd377bad47d284db77c4",
"assets/assets/images/group35Copy@2x.png": "2d5442935ba12ac0bc8d3b099b719e0f",
"assets/assets/images/group60Copy@2x.png": "336abfb93380a5f9a86afb5f5ff2c8da",
"assets/assets/images/group22@3x.png": "36ba50f1a4fdc909094413f57c734304",
"assets/assets/images/group16@2x.png": "b049cde76881df0236be7ebb64d3c64f",
"assets/assets/images/group16@3x.png": "df9ff113df04005ec499e64cf8bbb2fa",
"assets/assets/images/group2%25202.png": "91352fe1c1c8272da4844dcb232f1faa",
"assets/assets/images/group22@2x.png": "fb1819c87f057a7c0f371b97cfc06f94",
"assets/assets/images/group10.png": "cfbe722c1ce34928b0d5498cae2b76cd",
"assets/assets/images/group5@2x%25202.png": "449d2a659dc7148b4eb0fb7afbdbb9f8",
"assets/assets/images/group5@3x%25202.png": "fbc610dcb3565b5b47fefe35fb59e4f7",
"assets/assets/images/group16@3x%25202.png": "2de1b5b4f15e3e05734755e688ed261d",
"assets/assets/images/group16@2x%25202.png": "b7fa600d2e662557cc860ced3bac4313",
"assets/assets/images/bitmap%25204.png": "f492fc443b1e98d1860ca9707b193b1b",
"assets/assets/images/group60Copy@3x.png": "a5a7e4898ed633ca0360934cadbbd3c8",
"assets/assets/images/group35Copy@3x.png": "92076fdfd8f7e4ddea104154fcd4e302",
"assets/assets/images/group13Copy@3x.png": "3d7ca80fed9cc21e5bddd39804fff721",
"assets/assets/images/group13.png": "1538bb04547db7ea81397e08f7197741",
"assets/assets/images/group46Copy@3x.png": "db4b2edd03df55eb60ebc21e26ec323f",
"assets/assets/images/group74Copy@2x.png": "a17d08bb7b123400cfa7c9b246b89e1d",
"assets/assets/images/group10@2x.png": "21340d690b53333e2ab1e9d4d0455f55",
"assets/assets/images/group71Copy7.png": "f8eebbd59d5049f4483668a6b3ca9ba9",
"assets/assets/images/group71Copy6.png": "f950d98107352d43b7cdd32e69643765",
"assets/assets/images/group35Copy.png": "d1ff3cd5bbcb303fe7357f2f48823e7a",
"assets/assets/images/group60.png": "906a4a17b8ecf5ce049aace0f5d58726",
"assets/assets/images/group74.png": "e24461f951158e014a1761b4e4b1b425",
"assets/assets/images/group9%25202.png": "05ee26723cf8bda81cf8e1c9958bc456",
"assets/assets/images/group71Copy6@2x.png": "2032fed817a47a65e354c4f368b0b2bb",
"assets/assets/images/group71Copy4.png": "bb47999b05c2dac42714f8fd18b4179e",
"assets/assets/images/group13Copy.png": "3073f5df285b50acb87b3f8f1f8632a1",
"assets/assets/images/group7@2x.png": "f7bc06224149442ee68f83e4abb41d0c",
"assets/assets/images/group9@3x.png": "2c76384fc260d8ba85eba2c5dcdbc047",
"assets/assets/images/group71Copy8@3x.png": "167a31c99a037620ff3a0e6f5564ecfc",
"assets/assets/images/group71Copy5.png": "d0ea10dccb70dbe39fad6f365b607085",
"assets/assets/images/group2@3x%25202.png": "40c17d441f2e557b5c484dcf3ba56035",
"assets/assets/images/group2@2x%25202.png": "c6f77cbb8a3d12ddea68218a09b7b70e",
"assets/assets/images/group2.png": "91352fe1c1c8272da4844dcb232f1faa",
"assets/assets/images/group5@3x.png": "45fd844e7536d7610a8cabcdad7dc146",
"assets/assets/images/group71Copy4@3x.png": "3fe9b6eaaf8c85e3de39bef3ece1292c",
"assets/assets/images/group71Copy4@2x.png": "ef1f830cf4607f49d71fad46fb78e70e",
"assets/assets/images/group5@2x.png": "ff2ab6c4c221d050dbe0f10b40ef3875",
"assets/assets/images/group60Copy.png": "5ff06015ccc2ba2026d202df1ab9a5f5",
"assets/assets/images/group71Copy8@2x.png": "3b55b57d88d7cce955ccd007e69c89a9",
"assets/assets/images/group9@2x.png": "622a6b6261ec5f15da59cdc0b5e44201",
"assets/assets/images/bitmap.png": "1ad8022099aa99202a7f1cb80e56db57",
"assets/assets/images/group7@3x.png": "c6c468390feb08421d85a26c96b3e381",
"assets/assets/images/group71Copy6@3x.png": "b0e24b1f3fd3b529a4c3940f372327b8",
"assets/assets/images/group7.png": "2cef62858e7fba68da8427ef463c1882",
"assets/assets/images/group5.png": "1442648ad86dd7739775819f2f492aa9",
"assets/assets/images/group10@3x.png": "533ff16c50bdb0b91859f2b2c1e39039",
"assets/assets/images/group46Copy.png": "2bc440186ba74af90e0b081f909b749b",
"assets/assets/images/group4.png": "020ba4a2f3e627cb1e6e872df0f1db5d",
"assets/assets/fonts/tway_air.ttf": "28adcfe441262b5218c8706783c50f65",
"assets/assets/fonts/AppleSDGothicNeo-Medium.ttf": "5e06e7fe8d94425df23fe7bfb52fd6f6",
"assets/assets/fonts/AppleSDGothicNeoB.ttf": "018066fbccbce3cc4bbba5d3ac4f1033",
"assets/assets/fonts/AppleSDGothicNeoR.ttf": "85ba110e6b8d4c2e961f21ef648d27ea",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
