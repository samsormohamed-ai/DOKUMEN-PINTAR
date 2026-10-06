/* Service worker ringkas: simpan kulit aplikasi (ikon & halaman pembalut) supaya ia
   dibuka pantas dari skrin utama. Data sistem sentiasa diambil terus dari Apps Script. */
const CACHE = 'fail-bk-v1';
const SHELL = ['./', './index.html', './manifest.webmanifest', './favicon.png',
  './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return; // Apps Script & Google: terus ke rangkaian
  // Rangkaian dahulu (supaya perubahan pautan web app cepat berkuat kuasa), cache jika luar talian
  e.respondWith(
    fetch(e.request).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy));
      return res;
    }).catch(() => caches.match(e.request).then(r => r || caches.match('./index.html')))
  );
});
