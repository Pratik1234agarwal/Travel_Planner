if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise(async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()})),r.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},r=(r,i)=>{Promise.all(r.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(r)};self.define=(r,s,c)=>{i[r]||(i[r]=Promise.resolve().then(()=>{let i={};const n={uri:location.origin+r.slice(1)};return Promise.all(s.map(r=>{switch(r){case"exports":return i;case"module":return n;default:return e(r)}})).then(e=>{const r=c(...e);return i.default||(i.default=r),i})}))}}define("./service-worker.js",["./workbox-1bbb3e0e"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"./index.html",revision:"43ec3302071639a06fdc2334f70e51c6"},{url:"4a31b2e7a0e5c0cb993659608166af34.jpg",revision:"54186286e5091d0889cc56babf3888ff"},{url:"773438beeadd15d0c4a599305688e38e.jpg",revision:"013b5f9acba963f680381f8008270bd6"},{url:"9c3f222b4839151e37d1caba30b50534.jpg",revision:"b732878b90ab99957abba447a64e27d1"},{url:"main.css",revision:"0443c3d91daa4d30beed5c0487a9c967"},{url:"main.js",revision:"c2c90005438bc6c19ad0e70713f30859"},{url:"main.js.LICENSE.txt",revision:"e5fae1917876bc9d1ce7413e3fab487a"}],{})}));
