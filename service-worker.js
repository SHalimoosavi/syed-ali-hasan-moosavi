const CACHE_NAME =
"sahm-hq-v1";

const urlsToCache = [

"/syed-ali-hasan-moosavi/",
"/syed-ali-hasan-moosavi/index.html",
"/syed-ali-hasan-moosavi/offline.html",
"/syed-ali-hasan-moosavi/assets/css/main.css",
"/syed-ali-hasan-moosavi/assets/js/main.js"

];

/* =========================================
   INSTALL
========================================= */

self.addEventListener(
"install",
event=>{

event.waitUntil(

caches.open(CACHE_NAME)
.then(cache=>{

return cache.addAll(
urlsToCache
);

})

);

self.skipWaiting();

}
);

/* =========================================
   ACTIVATE
========================================= */

self.addEventListener(
"activate",
event=>{

event.waitUntil(

caches.keys().then(keys=>{

return Promise.all(

keys.map(key=>{

if(key !== CACHE_NAME){

return caches.delete(key);

}

})

);

})

);

self.clients.claim();

}
);

/* =========================================
   FETCH
========================================= */

self.addEventListener(
"fetch",
event=>{

event.respondWith(

fetch(event.request)

.then(response=>{

const responseClone =
response.clone();

caches.open(CACHE_NAME)
.then(cache=>{

cache.put(
event.request,
responseClone
);

});

return response;

})

.catch(()=>{

return caches.match(
event.request
)

.then(response=>{

return response ||
caches.match(
"/syed-ali-hasan-moosavi/offline.html"
);

});

})

);

});
