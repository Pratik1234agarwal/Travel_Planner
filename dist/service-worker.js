if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,c,i)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const r={uri:location.origin+a.slice(1)};return Promise.all(c.map(a=>{switch(a){case"exports":return s;case"module":return r;default:return e(a)}})).then(e=>{const a=i(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-1bbb3e0e"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"./index.html",revision:"e9bf692f36cddca200a8dcb5b2df354b"},{url:"23b928aa5019b40dfd55f72f2952663d.png",revision:"88211fa3f1fbce5e9dbe856624c9eb38"},{url:"4a31b2e7a0e5c0cb993659608166af34.jpg",revision:"54186286e5091d0889cc56babf3888ff"},{url:"773438beeadd15d0c4a599305688e38e.jpg",revision:"013b5f9acba963f680381f8008270bd6"},{url:"9c3f222b4839151e37d1caba30b50534.jpg",revision:"b732878b90ab99957abba447a64e27d1"},{url:"assets/android-chrome-144x144.png",revision:"b016272df74bbea044bdcec62a5c4e39"},{url:"assets/android-chrome-192x192.png",revision:"1444557fcc00ae936c53684b5018bcd5"},{url:"assets/android-chrome-256x256.png",revision:"7e138277f9e6b46b5a9982cdb93b20b1"},{url:"assets/android-chrome-36x36.png",revision:"a0659c68772ca67818ac013b1a839361"},{url:"assets/android-chrome-384x384.png",revision:"b9b5a21a9ed8180c90cc58914dd58b94"},{url:"assets/android-chrome-48x48.png",revision:"8c1c84885f7d6fab476b148dce647433"},{url:"assets/android-chrome-512x512.png",revision:"7e18ffeeb6f9c0af2829f6bc2c46877c"},{url:"assets/android-chrome-72x72.png",revision:"530258697dfc5700e356fca2f2fd2f80"},{url:"assets/android-chrome-96x96.png",revision:"8b5df12ea81a875dc1c4dea3ed40d114"},{url:"assets/apple-touch-icon-1024x1024.png",revision:"d4c0fd70d04022c009706e63381dca70"},{url:"assets/apple-touch-icon-114x114.png",revision:"b4c5c9bab2d97c05b15d36c71d56ed85"},{url:"assets/apple-touch-icon-120x120.png",revision:"6d94f1da8fa043c725e6e0c4e71c831c"},{url:"assets/apple-touch-icon-144x144.png",revision:"345f078af278ebf69f1b52dba036388d"},{url:"assets/apple-touch-icon-152x152.png",revision:"8e9b4eec45be31c4a57e9d2644b3e12a"},{url:"assets/apple-touch-icon-167x167.png",revision:"f02d083368d588bf6ee3dbc7f9026fb2"},{url:"assets/apple-touch-icon-180x180.png",revision:"1a6620014e80b44f82bae3bbf71f55d8"},{url:"assets/apple-touch-icon-57x57.png",revision:"b18c30dcd762dc00685b6f1cec8607d0"},{url:"assets/apple-touch-icon-60x60.png",revision:"cc7eda3e81418d40a3b924944c31b36e"},{url:"assets/apple-touch-icon-72x72.png",revision:"ac30668b67775f9dc5ac45f04937ce82"},{url:"assets/apple-touch-icon-76x76.png",revision:"650c3157d96455efa55a153aec1a604f"},{url:"assets/apple-touch-icon-precomposed.png",revision:"1a6620014e80b44f82bae3bbf71f55d8"},{url:"assets/apple-touch-icon.png",revision:"1a6620014e80b44f82bae3bbf71f55d8"},{url:"assets/apple-touch-startup-image-1125x2436.png",revision:"1e6c51e0bacf3bb2b1f4a6aeffb5b5c9"},{url:"assets/apple-touch-startup-image-1136x640.png",revision:"fc1c7e1d4c9af7ba312eaf0a2e42e3b2"},{url:"assets/apple-touch-startup-image-1242x2208.png",revision:"5d23141a5e0d3aef91616a258402dfbf"},{url:"assets/apple-touch-startup-image-1242x2688.png",revision:"f261d2c0f3fcdf85aa0e466fc1fbaf10"},{url:"assets/apple-touch-startup-image-1334x750.png",revision:"f1d6c60e034ec2ac26645a8835ca5ab6"},{url:"assets/apple-touch-startup-image-1536x2048.png",revision:"b2c0857e8d21f5e01e2145614eb186eb"},{url:"assets/apple-touch-startup-image-1620x2160.png",revision:"b7b3b1c1c9fb86c3b9022f46f98aba4a"},{url:"assets/apple-touch-startup-image-1668x2224.png",revision:"4c8074e79cff2c68f0ba831f9ec3a79f"},{url:"assets/apple-touch-startup-image-1668x2388.png",revision:"4a4100c1d1a0bed9e43e62ad899c56f4"},{url:"assets/apple-touch-startup-image-1792x828.png",revision:"5e224a938cc975148735f937970ff63e"},{url:"assets/apple-touch-startup-image-2048x1536.png",revision:"a7d45349a0b078d17b8ef67c075e5b85"},{url:"assets/apple-touch-startup-image-2048x2732.png",revision:"4196f01cd0592f354b8c5d148d9d23ae"},{url:"assets/apple-touch-startup-image-2160x1620.png",revision:"a5e4df8a3e0922ce7e82a3e7765ee177"},{url:"assets/apple-touch-startup-image-2208x1242.png",revision:"b5515ca9e2b460a385813884da41a2d0"},{url:"assets/apple-touch-startup-image-2224x1668.png",revision:"ba95cc56b43f408f7a9e928b8eb130ad"},{url:"assets/apple-touch-startup-image-2388x1668.png",revision:"e093f2c6140602ad04862d58ef785af2"},{url:"assets/apple-touch-startup-image-2436x1125.png",revision:"3bbadcf9b9e95cc6289a4c8496e80269"},{url:"assets/apple-touch-startup-image-2688x1242.png",revision:"7f1dfad3aa7baa1a3d25a7ede70bcb22"},{url:"assets/apple-touch-startup-image-2732x2048.png",revision:"c36963696a60609c4791f2f8d5d1d43f"},{url:"assets/apple-touch-startup-image-640x1136.png",revision:"2f67cb540e0eed49b8fb2934e1c3b7c0"},{url:"assets/apple-touch-startup-image-750x1334.png",revision:"80dd99afb55fa45183197c4114254b74"},{url:"assets/apple-touch-startup-image-828x1792.png",revision:"10d85c1690211762e614fd57d6fbef00"},{url:"assets/browserconfig.xml",revision:"1a0cb11489931ba8794020c6ae510b48"},{url:"assets/coast-228x228.png",revision:"737fb08356dfa7ecdf5ddceae1644bd5"},{url:"assets/favicon-16x16.png",revision:"bc5c2b88490be50200d054ec513d8a7f"},{url:"assets/favicon-32x32.png",revision:"4b26bec1adac913f7b0e420b15abeeb0"},{url:"assets/favicon-48x48.png",revision:"8c1c84885f7d6fab476b148dce647433"},{url:"assets/favicon.ico",revision:"df7f9cf1bca39a266f41d86eaa14e1e4"},{url:"assets/firefox_app_128x128.png",revision:"e55f934f1fa9bc440c0f562534397654"},{url:"assets/firefox_app_512x512.png",revision:"2cb3ec8166093f7e161e73c3e405ab1f"},{url:"assets/firefox_app_60x60.png",revision:"7da61eb375a5a24284f7f38fb18caee2"},{url:"assets/manifest.json",revision:"ac9dc11e67933c3bc4cca7ccc054a6d0"},{url:"assets/manifest.webapp",revision:"566e3ddbd393c819e6a096a1b33e3cd0"},{url:"assets/mstile-144x144.png",revision:"b016272df74bbea044bdcec62a5c4e39"},{url:"assets/mstile-150x150.png",revision:"e7e6d709004bb1b6c7c7bf71a38a817c"},{url:"assets/mstile-310x150.png",revision:"fce756178bdbc5e0dc7c502f3d444bda"},{url:"assets/mstile-310x310.png",revision:"be6c20ed58a68f734c595e209ac6ce8f"},{url:"assets/mstile-70x70.png",revision:"5b3a3d6e93b132ce00fbe8a965a24b82"},{url:"assets/yandex-browser-50x50.png",revision:"f1827b304c522c568d384da252f542da"},{url:"assets/yandex-browser-manifest.json",revision:"4ba7e0641e7d56eda53480dfa142bf66"},{url:"main.css",revision:"b5b6998816e86f3923d8d3e3b6a7db90"},{url:"main.js",revision:"6a19575ce1e2173793575c98a8620ab9"},{url:"main.js.LICENSE.txt",revision:"44a2db6a46fe2f265bc352aadcb79a4c"}],{})}));
