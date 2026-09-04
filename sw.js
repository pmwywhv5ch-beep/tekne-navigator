const VERSION='24.1';
const APP_CACHE=`tekne-navigator-app-v${VERSION}`;
const RUNTIME_CACHE=`tekne-navigator-runtime-v${VERSION}`;
const APP_ASSETS=['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png','./sw.js'];
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(APP_CACHE).then(c=>c.addAll(APP_ASSETS)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==APP_CACHE&&k!==RUNTIME_CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
function cacheable(url){return /(^https:\/\/unpkg\.com\/|tile\.openstreetmap\.org|server\.arcgisonline\.com|opentopomap\.org|ows\.emodnet-bathymetry\.eu)/.test(url)}
self.addEventListener('fetch',event=>{
  const req=event.request;
  if(req.method!=='GET')return;
  const url=req.url;
  if(cacheable(url)){
    event.respondWith(caches.match(req).then(cached=>cached||fetch(req,{mode:'no-cors'}).then(res=>{const copy=res.clone();caches.open(RUNTIME_CACHE).then(c=>c.put(req,copy));return res}).catch(()=>cached)));
    return;
  }
  if(new URL(url).origin===self.location.origin){
    event.respondWith(caches.match(req).then(cached=>cached||fetch(req).then(res=>{if(res.ok){const copy=res.clone();caches.open(RUNTIME_CACHE).then(c=>c.put(req,copy));}return res}).catch(()=>caches.match('./index.html'))));
  }
});
