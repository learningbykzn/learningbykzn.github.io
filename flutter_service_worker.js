'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "47502b2a112149ab08415f18209e7a7c",
"index.html": "09bd78bbe651d325fb831da8ee056204",
"/": "09bd78bbe651d325fb831da8ee056204",
"main.dart.js": "65cf27a306c4d3f6dc582916c663fb53",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "dea8d7eb9bd22429003579296d1535b6",
"icons/Icon-192.png": "c9c5de947d470f6a5c2218ad620e8218",
"icons/Icon-maskable-192.png": "c9c5de947d470f6a5c2218ad620e8218",
"icons/Icon-maskable-512.png": "3c6dba0c45ee77304cc4d2011f2f8bbd",
"icons/Icon-512.png": "3c6dba0c45ee77304cc4d2011f2f8bbd",
"manifest.json": "8200e9f916d71067a661706aae238f02",
".git/config": "378cea4733284bffc6934ea3a3074c80",
".git/objects/59/2afc46ebfd1eeb2a0fff803ebb5b9b1840e4eb": "70ba68d084be404d05b29af3d82ab8d9",
".git/objects/92/58fb67782bb7b556d8e35d26eaee4169f37341": "286e404c08cc814c966812ce3490fbd0",
".git/objects/66/e018946c1321139ca6c8ed31d53ed38d7343fb": "6408a69fd503a78c395603687a7c8b70",
".git/objects/50/41af1c03465a6bd9297c34d24f51a244842f1c": "bc42c587f5117d0eb1d46eeecc2e9826",
".git/objects/04/a2ba5a24b079e0b0994ce037d21f55afd33b88": "339499e7dff7432b5773dba17f8d5999",
".git/objects/6a/c72a009f17552a829975774f0868a869987bc9": "4b71fb7e207e841435b30e7d11609a16",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/32/5b188c2b947d1e10ede99db1854e5932519952": "11d8afdac0923611bb3a2309225152ab",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/56/959770561fd8f75c636753e36dc181c712437e": "6259182060bad737a0b8b2f0e1b8e3ba",
".git/objects/3d/aa00cfacfa96812b4b68af018e7a190e05d507": "3d2b24840e9885dad47265a4fab49e9d",
".git/objects/0b/dbc3a38234aa71066e6cc9403eeb511aec282e": "8ab9548c0fb8ab04f5bc170e3f165724",
".git/objects/0e/9a8176c5f4a67aca40571be2755a2b17d1d52d": "53c5b20e82bbc3efa7d361272c144add",
".git/objects/9c/1f29705345af345a01f39af0c86057116a2f19": "8cbbd1afa81adbdb87ce587605e7c0d3",
".git/objects/b2/0957cc7ff8314dae3518f00e4d20d8e0607c24": "2b05925ca6a2ea3879ddb09d877e1db7",
".git/objects/bd/730baed52dc00ea8c2c66731956345da63bf76": "a6cca17ca20309205a3d908380a1b03d",
".git/objects/bc/919f35356827f1247efebb99ba5c88f0fc93c6": "b89c4255710433628daadc3ba698a60b",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/051e3742bec9a8964f14aff4b4019ad3a474eb": "2a66c40ea939fcf616f3f2f11132b4b0",
".git/objects/c7/540f649abf0369907c7de4ede1c9c1bbe43074": "b91d50a86a7ec3955609556bf569c5ee",
".git/objects/c7/0b100a3e931a84b061489fea2779cfe28d73d3": "d5a961ea0cfdacc644ec611b7760e28e",
".git/objects/c9/fbf0f9586665ed08cd6e5b87c84f11ac2c18a4": "5f0c608732df9fc05a6a1a365ce796e0",
".git/objects/f2/0a58f306d4d22679aebd62f6865cccb6033e31": "1799c377edde7e2de046c8b9176d51fd",
".git/objects/f2/db2672b8190d5151bf5c197f1796d18823c39b": "73674879bb5f45c52601ba86bdb86311",
".git/objects/e4/774472084ddb5fb6ae13450986d56d9b7a5f34": "d68a8b7cae55fcafcaa6d176b457cc11",
".git/objects/fe/76b9b6652182db66b320eb26b3d2931fb77235": "29150685495cb94de37edf052f3d0a74",
".git/objects/c1/1ef841d3256e267363c1b356ea1e9685b24484": "e2a1b966bcaf74be5036b464138876c9",
".git/objects/4e/1cd267220549722fc3298f0d64860abec7c981": "84b2b299d6215857bae137a5fc1fd479",
".git/objects/27/b5f633ae5a43b67163867f9b5f55ae671e6104": "227b3b301ea682f190e9ebf8972b8ef7",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/16/22994f6d56847041a6f62f4588f11a42cc391c": "2bb3d0ef0c3804a01e988905fd51e730",
".git/objects/45/31ef65ff4440e024355ae3c9c1da22749354ff": "dd9a1295a61a2ef1af02f76f8f1e8663",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/28/9d99929d8ac84d678d037d50e57ca19edecc9b": "1c8cb46a68ed7f0393460080b4506347",
".git/objects/28/1b93b98a1524788175ce8ff8fcac2e71c48973": "84133e5a5169a0c71eaebf3135a1da72",
".git/objects/28/4f13a0f0c2020894bce5ea81882ad4a690addb": "7b6330afcb3d4dac0c532a5ba4fe4555",
".git/objects/21/63fc3063a57d07e14f0302e729cf2fe8d17518": "48640e91500033ecad07d79eebecdddb",
".git/objects/81/1c9785de9fdbe3acee5cff762aaa7800ff2851": "f091d8d6598121066a64b05e6335b6f5",
".git/objects/72/80bdddbc17dfe709057953d0753e5ffd0f0f2e": "ba56b40d645a0f16807ab3de83ab0ea1",
".git/objects/9f/09260e8f30356daef8a9ac8b32b327fa9df6e4": "3b540f6c602b619418f9613a319d8c8d",
".git/objects/6b/f184ddd65a9a028c4de09fbace33bc476100a4": "dc7202e070632d78428e9640ef6176be",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/98/8e6a4a2b92a80d6ed1a265cf5ac5527b7408c6": "29e1028aa66057253a98c39433829937",
".git/objects/53/a0e4e94b3d192424ee4725145078bd0f93d56b": "aef6cef3fe7fd69ad5649ce880f43d04",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/08/c9c09081a48f242221a3719d21450b1011bd71": "b317bc332d92d89d309a84256afc2362",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/63/5617846362a4fd9c583396ee824486e6d7bf66": "299db24ba0c7bb47721e825476a24a21",
".git/objects/64/ef84c145cf08f0aa62e6d7c0bfb1f3a4793da9": "7539ad00be877f89cb3f0d65fa8b4184",
".git/objects/64/791704584338f9f84d69f91f880118e96bc632": "9a7bfcccacbed6db76f6b749f0f4eb3e",
".git/objects/90/1e2ffc385295905b544d496c2a520ee7a66268": "77da6a2fdde016adc769133c9cffd636",
".git/objects/b8/22d5c227f0e47be17e4a884dc3264ecaa1a1af": "0f51305f17a93550368943ec83f086bb",
".git/objects/dd/5d12458a0deae75b278b71dfa966fd4ad192a3": "9cef17bc04024093061aa8ac46f1eb03",
".git/objects/b6/7359f07bfdfae23c4ae2f081811219e3556bfb": "ab024443775012f0f030218c50cb7d3b",
".git/objects/a9/ba5868054425d6399a3c4a909ca319d86e020f": "8196f3262a70a4d127222b26e3f06d09",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/db/bda9207fe6d39068092b22bd41d75820504aa5": "bc971936b6f08cc970cbe22315a676ad",
".git/objects/b0/fb5650340b28079c80e340a85a7edfc68dbf03": "2ea891323cb9c98682fbd2bfaf824e20",
".git/objects/a6/260c56238047c425df068e9c620e3d6527790f": "2d35537bc4f306d70085c8d3848adeaa",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/f7/46e2cd53fa194ac672bb232017cda647bf72b5": "90c32c452f89e411e137a512f654be09",
".git/objects/e8/0104ce40329f2d3747e4ffd3e9a6388050567a": "ec34dd23391ce793ce94ca31a60675ec",
".git/objects/ff/90da39284a67f6a40f4199a01dd17f4e005afb": "532bed4a7fdc7b8df671ede9e15e4d72",
".git/objects/c5/e96cc687690e74a589ad6bd5476062ac99657b": "84c90811f1e5e269c24c2dfd0cc4d4d0",
".git/objects/c2/500190c7ae7b43ea86b3506ea51b84c21ff960": "daa057a966ec8111088de6554842d32e",
".git/objects/e9/ccc6498718b67a7cf89d9905eb57c926f79954": "9ee70f70fc4f95cf233f089be321ad61",
".git/objects/f1/e5122e757c36d464d0df123ec47e86118488a8": "365837d230a504ebd408f8ce392b64d1",
".git/objects/46/e991abd32f1b13ef05c11cf3dfd1254181690a": "caae6280e5f53f5e37c636e1eb70629e",
".git/objects/2c/15925112ca0bf9520c0b2cbc77f5871ca9cb57": "f119cae9256bd43fbda63922fc2db1e3",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/54a4feb0601048b98cb27d40bb4d611e14bfb4": "97d1a4e9d9d0f3fd864348fa77cb13d8",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/1b/c38ab6b2864c619c9e48b394808ec6b24d2c6f": "c3b44496e26ca2e7724fe843e7a5a889",
".git/objects/77/2f8476801666137855726003aa98cf97fc81b6": "aa46d944c560fadac35753ecd1c63761",
".git/objects/48/5026b8f5c9fdb877033a9c1840105051b76623": "f6ac4c3261b4b257ef988e6131b1b9da",
".git/objects/70/30437c884674177fed0f2c58977a169584e15b": "862c55224702ca269e3bd149f4ef1dfe",
".git/objects/4f/047db9a0e2df65099bbd7173951f3c80b7129e": "dd215cce10edebcd47a1554f1b98cd31",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/85/0438c57f682d615f9b33c9564a42aab1e61a41": "a4f72337ac8a6efcf20e77e70cfe4f12",
".git/objects/71/aad807dbc574624fbc67787a817570f078e3c8": "d891f090af18e063a9720ad1df20cf70",
".git/objects/71/1b00fd78143c50dc9021be3e2a6018666ed17d": "58216b321067456172e3be5f7cf1a43a",
".git/objects/2b/9b305101b3364d3c8c25e7346a1cc578025fb8": "5ae7f92566e2f9e71d7587e2f49d6788",
".git/objects/7a/dca754feec57d8a26d8c6f06116acdeefeee3f": "d5f5080299a9634fed1743939cafbab1",
".git/objects/7a/c08c8c7510096074e9736b3b2bbdf2f8c6be0c": "7ba4299bc76eb8eeaa5d7a682eafc430",
".git/objects/22/7b354f0484206e2c19a9a28a10c8bcd140a3e0": "63b6636ee989448c4cf5d8625117c438",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f744ca3a4c458cc3888306172494809f",
".git/logs/refs/heads/main": "f744ca3a4c458cc3888306172494809f",
".git/logs/refs/remotes/origin/main": "aab0a18acc1c68ef5108db16d5f71d90",
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
".git/refs/heads/main": "bf031279dc23fea91966db2b6580106f",
".git/refs/remotes/origin/main": "bf031279dc23fea91966db2b6580106f",
".git/index": "8baa30d11a281ba7d640a9e4be65e428",
".git/COMMIT_EDITMSG": "1aa6c517b5c2353591640975f241d4a4",
"assets/AssetManifest.json": "dac50f294edced2bb97d1cfc1bf1a69b",
"assets/NOTICES": "85e762ebaf4d3845ab580a969a7f37ba",
"assets/FontManifest.json": "ac3f70900a17dc2eb8830a3e27c653c3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/html_editor_enhanced/assets/plugins/summernote-at-mention/summernote-at-mention.js": "8d1a7c753cf1a4cd0058e31fa1e5376e",
"assets/packages/html_editor_enhanced/assets/summernote-lite-dark.css": "3f3cb618d1d51e3e6d0d4cce469b991b",
"assets/packages/html_editor_enhanced/assets/summernote.html": "8ce8915ee5696d3c568e94911eb0d9bf",
"assets/packages/html_editor_enhanced/assets/jquery.min.js": "b61aa6e2d68d21b3546b5b418bf0e9c3",
"assets/packages/html_editor_enhanced/assets/summernote-no-plugins.html": "89ca56cd85a91f1dc39f5413204e24d0",
"assets/packages/html_editor_enhanced/assets/font/summernote.ttf": "82fa597f29de41cd41a7c402bcf09ba5",
"assets/packages/html_editor_enhanced/assets/font/summernote.eot": "f4a47ce92c02ef70fc848508f4cec94a",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.css": "570da368f96dc6433b8a1006c425ca7d",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.js": "4fe75f9b35f43da141d60d6a697db1c1",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "c17d858d09fb1c596ef0adbf08872086",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "6d8ab59254a120b76bf53f167e809470",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/image/learnease-logo.png": "3c95f88d910bb6f55e3d23990b25539d",
"assets/assets/image/default-image.png": "753c11dee464891a74e23636c72ef44c",
"assets/assets/image/cover_4.png": "1e9cccbf5033d4968c186bd1605d4284",
"assets/assets/image/cover_5.png": "0153435a8fc16077cb7a7408909a271d",
"assets/assets/image/cover_2.png": "45c22dcc57d255eccfb32ddf9f6d04e2",
"assets/assets/image/cover_3.png": "a5849a20e1acd194b0e4fdbe29e388c8",
"assets/assets/image/cover_1.png": "3632de0617542bafeeea8c83f820c16b",
"assets/assets/icon/slider.png": "1a95818c928c1719c37bcbb4681c1aa1",
"assets/assets/icon/plus.png": "89eb9e0620078956870dd8f16917aca0",
"assets/assets/icon/category.png": "5fac2e621598eade8431daf0fca42483",
"assets/assets/icon/students.png": "95360243ecca07a1b0f60228200401df",
"assets/assets/icon/enrollment.png": "5d67af655c60529eabd54959c220568b",
"assets/assets/icon/discount.png": "ab7bcb89a0a3ce69fdaac3f01d9742c8",
"assets/assets/icon/drawer.png": "d9072f413b398633187e3f5d1116d2a0",
"assets/assets/icon/courses.png": "75666b680981b1a1d4179c31d88fe1d9",
"assets/assets/icon/review.png": "17b20009b15e80c6429ccd0e90afd863",
"assets/assets/icon/sections.png": "9338484a8b5821b2ff5192c1ae23f21e",
"assets/assets/icon/arrow.png": "55bc8d779b30773fb800dcf302285708",
"assets/assets/icon/film.png": "045f699a9f5e123f9a1c2a052dce9182",
"assets/assets/icon/profile.png": "5396b67a5f016e95886ba4cb4a8ba303",
"assets/assets/icon/pdf.png": "49d4041b8e7e375f3e2950a9738bc59b",
"assets/assets/icon/rating.png": "60a4d731d6432cb29f5978163d95dcae",
"assets/assets/icon/image.png": "740b20ab34b1f4822e245cd279a0fcb4",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
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
