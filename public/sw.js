/*
 * Service worker Product Knowledge.
 *
 * Tugasnya dua: membuat aplikasi bisa dipasang dan tetap terbaca tanpa sinyal.
 * Halaman yang pernah dibuka disimpan dan disajikan ulang saat offline;
 * halaman yang belum pernah dibuka diganti halaman "Sedang offline".
 *
 * Strategi per jenis permintaan:
 *   - Halaman: JARINGAN DULU. Isi data berubah lewat deploy, jadi yang tampil
 *     saat online harus selalu versi terbaru. Cache hanya cadangan offline,
 *     atau bila jaringan tidak menjawab dalam 4 detik.
 *   - /_next/static, gambar, logo, ikon, fon: CACHE DULU. Isinya hanya bisa
 *     berubah lewat deploy, dan setiap deploy memakai cache baru (lihat versi
 *     di bawah) — jadi yang tersimpan tidak pernah basi, dan gambar tidak
 *     diunduh ulang setiap kali tampil.
 *   - /masuk, /keluar, /unduh: TIDAK PERNAH disimpan.
 *
 * Isi aplikasi ini rahasia (di balik PIN). Karena itu:
 *   - yang disimpan hanya jawaban utuh 200 dari server sendiri; pengalihan ke
 *     /masuk (sesi habis) tidak pernah masuk cache;
 *   - membuka /keluar MENGHAPUS semua salinan, supaya isinya tidak bisa
 *     dibaca lagi dari perangkat ini tanpa PIN.
 *
 * Versi cache diambil dari parameter ?v= saat pendaftaran (ID build). Setiap
 * deploy memakai cache baru dan yang lama dihapus, sehingga halaman offline
 * tidak pernah tercampur dengan aset dari build lain.
 */
const VERSI = new URL(self.location.href).searchParams.get('v') || 'dev';
const AWALAN = 'pk-';
const CACHE = AWALAN + VERSI;

const JANGAN_DISIMPAN = /^\/(masuk|keluar|unduh)(\/|$)/;
const ASET_TETAP = /^\/_next\/static\//;
const GAMBAR = /^\/(gambar|logo|pwa)\/|\.(png|jpe?g|webp|gif|svg|ico|woff2?)$/i;
const BATAS_JARINGAN_MS = 4000;

const HALAMAN_OFFLINE = `<!doctype html>
<html lang="id">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Sedang offline — Product Knowledge</title>
<style>
  :root { color-scheme: light dark; --latar: #f9f8f5; --kartu: #ffffff; --garis: #e2ded6;
    --teks: #13271b; --teks-2: #5f6b62; --aksen: #04773c; --di-aksen: #ffffff; }
  @media (prefers-color-scheme: dark) { :root { --latar: #101613; --kartu: #18201b; --garis: #2a372f;
    --teks: #e8ece9; --teks-2: #93a198; --aksen: #3ed07c; --di-aksen: #10241f; } }
  * { box-sizing: border-box; }
  body { margin: 0; min-height: 100vh; display: grid; place-items: center; padding: 16px;
    background: var(--latar); color: var(--teks);
    font: 16px/1.55 'Segoe UI', system-ui, -apple-system, sans-serif; }
  main { width: 100%; max-width: 420px; background: var(--kartu); border: 1px solid var(--garis);
    border-radius: 16px; padding: 28px 22px; text-align: center; }
  img { width: 56px; height: 56px; }
  h1 { font-size: 20px; margin: 12px 0 6px; }
  p { color: var(--teks-2); margin: 0 0 20px; }
  .tombol { display: inline-flex; align-items: center; justify-content: center; min-height: 44px;
    padding: 0 18px; margin: 4px; border-radius: 10px; border: 1px solid var(--aksen);
    background: var(--aksen); color: var(--di-aksen); font: inherit; font-weight: 600;
    text-decoration: none; cursor: pointer; }
  .sekunder { background: transparent; color: var(--aksen); border-color: var(--garis); }
</style>
</head>
<body>
<main>
  <img src="/pwa/ikon-192.png" alt="">
  <h1>Sedang offline</h1>
  <p>Halaman ini belum pernah dibuka di perangkat ini, jadi belum tersimpan untuk dibaca tanpa sinyal. Halaman yang pernah dibuka tetap bisa dibaca.</p>
  <button class="tombol" type="button" onclick="location.reload()">Coba lagi</button>
  <a class="tombol sekunder" href="/">Ke beranda</a>
</main>
</body>
</html>`;

/** Hanya jawaban utuh dari server sendiri. Pengalihan (mis. ke /masuk) tidak disimpan. */
function bolehDisimpan(res) {
  return !!res && res.status === 200 && !res.redirected && res.type === 'basic';
}

async function hapusSemua() {
  const semua = await caches.keys();
  await Promise.all(semua.filter((k) => k.startsWith(AWALAN)).map((k) => caches.delete(k)));
}

const tunda = (ms) => new Promise((selesai) => setTimeout(() => selesai(null), ms));

self.addEventListener('install', (event) => {
  // Beranda dan ikon disimpan sejak awal supaya aplikasi yang dibuka tanpa
  // sinyal tidak langsung jatuh ke halaman offline. Gagal (mis. sesi PIN belum
  // ada) tidak boleh menggagalkan pemasangan.
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    for (const jalur of ['/', '/pwa/ikon-192.png']) {
      try {
        const res = await fetch(jalur, { credentials: 'same-origin' });
        if (bolehDisimpan(res)) await cache.put(jalur, res);
      } catch {
        /* offline saat pemasangan: lewati */
      }
    }
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const semua = await caches.keys();
    await Promise.all(semua.filter((k) => k.startsWith(AWALAN) && k !== CACHE).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  if (url.pathname === '/keluar') {
    event.waitUntil(hapusSemua());
    return;
  }
  if (req.method !== 'GET' || JANGAN_DISIMPAN.test(url.pathname)) return;
  // Navigasi sisi-klien Next.js (payload RSC dan prefetch) tidak disimpan.
  // Saat offline, router Next beralih ke navigasi biasa, yang dilayani cache
  // halaman di bawah.
  if (req.headers.get('RSC') === '1' || url.searchParams.has('_rsc')) return;

  if (req.mode === 'navigate') event.respondWith(halaman(event, req, url));
  else if (ASET_TETAP.test(url.pathname) || GAMBAR.test(url.pathname)) event.respondWith(cacheDulu(req));
});

/** Ambil dari jaringan dan simpan salinannya; penyimpanan ditunggu event. */
function ambilDanSimpan(event, req, kunci) {
  let simpan = Promise.resolve();
  const jaringan = fetch(req).then((res) => {
    if (bolehDisimpan(res)) {
      const salinan = res.clone();
      simpan = caches.open(CACHE).then((c) => c.put(kunci, salinan));
    }
    return res;
  });
  event.waitUntil(jaringan.then(() => simpan, () => {}));
  return jaringan;
}

async function halaman(event, req, url) {
  const kunci = url.origin + url.pathname + url.search;
  const jaringan = ambilDanSimpan(event, req, kunci);
  const tersimpan = await caches.match(kunci, { cacheName: CACHE, ignoreVary: true });
  if (!tersimpan) {
    try {
      return await jaringan;
    } catch {
      return new Response(HALAMAN_OFFLINE, {
        headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' },
      });
    }
  }
  try {
    return (await Promise.race([jaringan, tunda(BATAS_JARINGAN_MS)])) || tersimpan;
  } catch {
    return tersimpan;
  }
}

async function cacheDulu(req) {
  const cache = await caches.open(CACHE);
  const ada = await cache.match(req, { ignoreVary: true });
  if (ada) return ada;
  const res = await fetch(req);
  if (bolehDisimpan(res)) await cache.put(req, res.clone());
  return res;
}
