'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "66f26e8bee555999b94ae30783af148d",
"version.json": "b95591b52f213f5a944a8997dab2fef2",
"index.html": "9d31889890a687ff203dc8669bea81af",
"/": "9d31889890a687ff203dc8669bea81af",
"main.dart.js": "e226033ea01f91b99e7ffe6a41bbc867",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "aad5c614e942a5c76a20ae99194580ff",
".git/config": "4191beeac04010c0458c65b807dc5f15",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/67/92aa0a4bcee74fe9bfb1e31158c119a7ee54f6": "eb8924501931197c194c070934824c00",
".git/objects/93/2f3cf4b0734e42ba589c47fe7f10a9ba80aa51": "4fc1d81f9bb6907ad53c6384262cb0d0",
".git/objects/94/8ccaba25ba65840f51b1aa8e7de8cd63d503f5": "5e57ec97243f3b92c9ace0be6c8f741c",
".git/objects/5a/106c6900117cbbf072b284f866e67e66dca2cf": "edf3fc4170524951261b32118e1e21b8",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/be/9e8e86384222b4cb422b7883dd9eeb39ff709c": "679d10fbcfe6576954c4d7f92a891842",
".git/objects/da/0d5aa44a8c93eda469f7a99ed8feac32d5b19d": "25d25e93b491abda0b2b909e7485f4d1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/8128adaad90d2fd7cdabe7b36eaaaed0d3a25b": "3d15963af0d77c1cd40702fb7c18fa93",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/885c090756ae52d6a7c6cc8aa43bad4c5cb760": "a83dcc4c451c0e7591f01432447ff601",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/ca/0fed98c6e93fa6e2f34c436fdcc0e26f4b4ff7": "7993b976d5a198b146dbdd7a86994722",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/fe/ba23bc1b986c5a9d2b4deb62d9562cb3897afe": "0aa600f5cefb6ba49d0feb67fe9dd3d6",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/c1/da3e62c06892a4cb89fdf2bab360f3d09c70f5": "d2315499db84ed7a12f06a625f92919d",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/20/fbcf3cd567019608715258ea46f3e1adf7b4a3": "472e3be03dca4cbe8c15af6e16fcf193",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/87/11847360e9e3cc657a9a8bd4dc88976f94a677": "cbfa02c5faa33a15dc55e50c8cf387cd",
".git/objects/74/207e59fe65cbf76fd5f71cf93b3aeeb975d071": "780178eb4e00ee1958734861b9c00fa1",
".git/objects/28/42ecd572a2b5b10bcf9bbaeb334082e6463f37": "937a897677475e4d94192576f651e491",
".git/objects/8a/4fd0636192ab094c8ad0d956c29f3fc408b6b1": "e9847d70fdde0a35de7c9413a50c0631",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/72/66463de0dfd976ac68210d19fc2ad123a2bb94": "43220dde1c58f178dfe18ae458642673",
".git/objects/2f/335aa57ce81a3cb49f5b2c0b4790e27558deef": "b6ff07c9dfad8d5a8004101e04ed712a",
".git/objects/43/1823921705ee60b1e00f7bdf192842b74e56a9": "3554e0a84e6e7b32f525c09c28107eae",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/07/28c8c5bd10c7ae01ee552e23f3ff8c739169a1": "f68d60789b176ef7e6d81f0487164678",
".git/objects/91/8898751fcb937efe43483422aad23a2b0f1075": "1c513922630ed24e88e52bb2daf3a58e",
".git/objects/65/a08efba815acdfebbd5a75af9a8d16a1a3ac33": "d4a636ca046b2bf7a71f650c6f21ddf8",
".git/objects/65/0391e9ff574d3d388045703139386d64abcc65": "7b8e2e02d6337afea65490a6ec8f4a10",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/53/9fec0b2a2da770b5c6a1e2a98de48a547dfb21": "18fa1d4379e8a4296f44d15899205e15",
".git/objects/5b/08594a170a246ceb13768631f5379ec3f8619f": "f3aef9a61402579fc72c5d901dc7fd8f",
".git/objects/01/df80a4cb120bddacc3044bac45faa141935322": "39eebd221c8f1a66716421bb6ef88252",
".git/objects/6c/b480efc0589615160fc14de9b5586cac54d9e1": "d48959f2406f120682bf037f380b24bb",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a0/0d9c99476b4a786811a42841eb65c7c93a7fc0": "278570d12b51ebb2272670f416ec95ff",
".git/objects/a7/1c7e9caec6e128d92b49c05e9ca4bbb999c175": "d0ecdcddff06a6ac16fd6b9ec4253550",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/5d217964277230192a72cb3a02a6e8a019f73d": "e809b710e8fa36ec6a92844cad159abc",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/ff/247e01c2e1005fc667292e38a052222aac9428": "6b58cca5f0d833f87d1519caa31d081d",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/f8/42e70e1f01b47acfa0a1a6cae17e190e035d78": "60f9a31f5982df483dbbfc22e72b02bd",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/4f/b7289acd16b4facc405117cd799346ab997736": "506d35b62679c8d57a504c8d07912e0b",
".git/objects/71/a1f9e70b91fe7c48b64d1ae6fb984b390b594d": "f92bdc3dc8ed24bea3bb2d65b9fe1116",
".git/objects/2e/03187a7db1d6c0227c45d331bca207d1932a8a": "75ba0a587f12416e9763e31a0d8bf251",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/14/7b41e4ebb2256ae23ebc1fdf6cf80e0c257929": "2285aa24928481f9e2ed79e5cc3c505f",
".git/objects/25/a2dba2a77cea92da3470ea8dad626e4d2924bb": "ec578ef62b64eafbb6ab3e02bac4249c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "45ce8b1daef052acc30f72b1d2445e0f",
".git/logs/refs/heads/main": "647d103b054d54ef98c87ff967b836cd",
".git/logs/refs/remotes/origin/main": "27473578cd517386759aefbee8e1e4d4",
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
".git/refs/heads/main": "492f6d775f8424fbb256558e28c3898e",
".git/refs/remotes/origin/main": "492f6d775f8424fbb256558e28c3898e",
".git/index": "60f3a033442bffecfd6073a1d95cf18c",
".git/COMMIT_EDITMSG": "9d67f233814aadc5d983bc7711cc1b72",
"assets/AssetManifest.json": "7e5871543d20e346f4c6afa31c429d66",
"assets/NOTICES": "fde0b5dc972fea2e41062fc9288dd02c",
"assets/FontManifest.json": "483d852a660c09cb9f5110b4c3237359",
"assets/AssetManifest.bin.json": "65f9be3f69c3ad4c3fc9cdfdfac2e656",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "cb3ebc7120caa33f687b2c4024d7ab56",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/assets/videos/horizontal/color/sky1_h.mp4": "ab0822c8b0b63f291dbf93bc639743b8",
"assets/assets/videos/vertical/color/sky1.mp4": "ab0822c8b0b63f291dbf93bc639743b8",
"assets/assets/videos/vertical/color/sky2.mp4": "bfdaffab266b475d74532b1c55c60c76",
"assets/assets/videos/vertical/color/sky3.mp4": "2031f5f74b4bb5dffeae04ff3ff019ad",
"assets/assets/videos/vertical/mono/sky4.mp4": "775eaca4d246aea8449c10db79514abb",
"assets/assets/audio/music.m4a": "520a1d921e63df44ed4eacde7803c139",
"assets/assets/audio/ambient.m4a": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/fonts/Raleway-Italic-VariableFont_wght.ttf": "b1a78a97b6858e2f1034339edc3a71bf",
"assets/assets/fonts/Raleway-VariableFont_wght.ttf": "8e6eb72257cc3a1746fa1ed974407b70",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
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
