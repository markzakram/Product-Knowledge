/**
 * Versi build: potongan hash commit di Vercel, waktu build di lokal. Dipakai
 * service worker sebagai versi cache (?v= di public/sw.js), jadi setiap deploy
 * memakai cache baru dan salinan offline dari build lama dibuang.
 */
const VERSI_BUILD = (process.env.VERCEL_GIT_COMMIT_SHA || Date.now().toString(36)).slice(0, 12);

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: { NEXT_PUBLIC_VERSI_BUILD: VERSI_BUILD },
  async headers() {
    return [
      {
        // Browser harus selalu memeriksa versi terbaru service worker. Bila
        // sw.js ikut di-cache HTTP, perbaikan pada logika cache-nya bisa
        // tertahan berjam-jam di perangkat pengguna.
        source: '/sw.js',
        headers: [
          { key: 'Content-Type', value: 'application/javascript; charset=utf-8' },
          { key: 'Cache-Control', value: 'no-cache, no-store, must-revalidate' },
          { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self'" },
        ],
      },
    ];
  },
};
export default nextConfig;
