/* Service worker — Expedição Carretera Austral (offline-first) */
const CACHE = 'carretera-austral-v51';
const ASSETS = [
  'app.html', 'index.html',
  'mapa.html', 'roteiro.html', 'roteiros.html', 'novo-roteiro.html', 'custos.html', 'logistica.html',
  'postos.html', 'oficinas.html', 'senasa.html', 'fronteiras.html',
  'documentacao.html', 'checklist.html', 'camping.html', 'catalogo.html',
  'estilo-doc.css', 'dados.js', 'roteiros.js', 'servicos.js', 'app-shared.js', 'image-slot.js', 'geo.js',
  'servicos.html',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-180.png',
  'icons/icon-192-maskable.png', 'icons/icon-512-maskable.png',
  'scenes/lago.svg','scenes/glaciar.svg','scenes/picos.svg','scenes/costa.svg',
  'scenes/marmore.svg','scenes/rio.svg','scenes/termas.svg','scenes/bosque.svg',
  'scenes/vulcao.svg','scenes/cascata.svg','scenes/vila.svg','scenes/estepe.svg',
  'manifest.webmanifest'
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then((c) => Promise.allSettled(ASSETS.map((u) => c.add(u))))
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  // network-first for the Leaflet map tiles & CDN; cache-first for local app shell
  const url = new URL(req.url);
  const isLocal = url.origin === self.location.origin;
  if (isLocal) {
    // network-first for local app shell: fresh when online, cache fallback offline
    e.respondWith(
      fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy)).catch(()=>{});
        return res;
      }).catch(() => caches.match(req).then((hit) => hit || caches.match('app.html')))
    );
  } else {
    // fonts / tiles: try cache, then network, and stash a copy
    e.respondWith(
      caches.match(req).then((hit) => hit || fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy)).catch(()=>{});
        return res;
      }).catch(() => hit))
    );
  }
});
