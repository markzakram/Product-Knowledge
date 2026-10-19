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
  async redirects() {
    return [
      // JadiSekdin dipecah jadi tiga tes (skd, ipdn, pkn-stan): SKD tidak lagi di
      // bawah IPDN dan PKN STAN. Tautan lama ke subtes SKD (dan simulasinya)
      // dialihkan. Hanya tahapan `skd` yang ikut; rute seleksi lanjutan (tkbi,
      // psikologi, lanjutan, dan seterusnya) tetap di sekolahnya masing-masing.
      // Simulasi tingkat angkatan SENGAJA tidak dialihkan: begitu seleksi
      // lanjutan punya contoh soal, /jadisekdin/ipdn/2026/simulasi harus jadi
      // simulasi IPDN sendiri, dan pengalihan di sini akan menutupinya diam-diam.
      {
        source: '/jadisekdin/:sekolah(ipdn|pkn-stan)/2026/skd/:path*',
        destination: '/jadisekdin/skd/2026/skd/:path*',
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
