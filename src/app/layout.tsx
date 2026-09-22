import type { Metadata, Viewport } from 'next';
import { cookies } from 'next/headers';
import './globals.css';
import { NAMA_COOKIE, cookieSah, gerbangAktif } from '@/lib/sesi';
import { PemilihTema, SKRIP_TEMA } from './tema';
import pkg from '../../package.json';
import { PintasanCari } from './pintasan';

export const metadata: Metadata = {
  title: 'Product Knowledge',
  description:
    'Informasi seleksi lintas platform: tahapan, subtes, materi, mapping produksi konten, dan contoh soal.',
};

/**
 * Dideklarasikan lewat export `viewport`, bukan <meta> manual — kalau ditulis
 * manual, Next tetap menyuntikkan miliknya sendiri dan halaman berakhir punya
 * dua tag viewport yang saling bertentangan.
 */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f9f8f5' },
    { media: '(prefers-color-scheme: dark)', color: '#101613' },
  ],
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const masuk = gerbangAktif()
    ? await cookieSah((await cookies()).get(NAMA_COOKIE)?.value)
    : false;

  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/logo/pk-mark.png" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="ProductKnowledge" />
        {/* "default", bukan "black-translucent": yang terakhir menaruh isi di
            bawah bilah status iOS dan seluruh header harus digeser sendiri. */}
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Menyetel tema sebelum paint, supaya mode gelap tidak berkedip putih. */}
        <script dangerouslySetInnerHTML={{ __html: SKRIP_TEMA }} />
      </head>
      <body>
        <PintasanCari />
        <header className="kepala">
          <div className="kepala-isi">
            <a href="/" className="merek">
              {/* Mark saja, bukan lockup: wordmark logo berwarna teal gelap
                  di atas latar transparan, jadi ia hilang di mode gelap.
                  Teksnya dirender HTML supaya ikut tema dan tetap tajam. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="merek-mark" src="/logo/pk-mark.png" alt="" aria-hidden />
              <span className="merek-teks">
                <span className="merek-baris">
                  Product <span className="merek-tipis">Knowledge</span>
                  {/* Versi dibaca dari package.json, bukan diketik di sini —
                      supaya tidak ada dua sumber yang bisa berbeda. */}
                  <span className="merek-versi">v{pkg.version}</span>
                </span>
                <span className="merek-divisi">Divisi Produk</span>
              </span>
            </a>
            <form className="cari" action="/cari">
              <input
                id="kotak-cari"
                type="search"
                name="q"
                placeholder="Cari ambang batas, subtes, materi, soal…"
                aria-label="Cari"
                autoComplete="off"
              />
              <kbd className="cari-kunci" aria-hidden>/</kbd>
            </form>
            <nav className="nav">
              <a href="/banding">Banding</a>
              <a href="/dashboard">Dashboard</a>
              <a href="/cek-data">Cek Data</a>
              {masuk && <a href="/keluar">Keluar</a>}
              <PemilihTema />
            </nav>
          </div>
        </header>
        <div className="bingkai">{children}</div>

        {/* Nav bawah hanya tampil di ponsel. Header jadi ringkas, dan tautan
            utama berada di jangkauan jempol alih-alih di ujung atas layar. */}
        <nav className="nav-bawah" aria-label="Navigasi utama">
          <a href="/">
            <span aria-hidden>▦</span>
            Platform
          </a>
          <a href="/cari">
            <span aria-hidden>⌕</span>
            Cari
          </a>
          <a href="/banding">
            <span aria-hidden>⇄</span>
            Banding
          </a>
          <a href="/dashboard">
            <span aria-hidden>▤</span>
            Dashboard
          </a>
          <a href="/cek-data">
            <span aria-hidden>✓</span>
            Cek Data
          </a>
        </nav>
      </body>
    </html>
  );
}
