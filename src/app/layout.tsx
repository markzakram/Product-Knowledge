import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import './globals.css';
import { NAMA_COOKIE, cookieSah, gerbangAktif } from '@/lib/sesi';
import { PemilihTema, SKRIP_TEMA } from './tema';
import pkg from '../../package.json';

export const metadata: Metadata = {
  title: 'Product Knowledge',
  description:
    'Informasi seleksi lintas platform: tahapan, subtes, materi, mapping produksi konten, dan contoh soal.',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const masuk = gerbangAktif()
    ? await cookieSah((await cookies()).get(NAMA_COOKIE)?.value)
    : false;

  return (
    <html lang="id" suppressHydrationWarning>
      <head>
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
                type="search"
                name="q"
                placeholder="Cari platform, tahapan, subtes, materi, soal…"
                aria-label="Cari"
              />
            </form>
            <nav className="nav">
              <a href="/dashboard">Dashboard</a>
              <a href="/cek-data">Cek Data</a>
              {masuk && <a href="/keluar">Keluar</a>}
              <PemilihTema />
            </nav>
          </div>
        </header>
        <div className="bingkai">{children}</div>
      </body>
    </html>
  );
}
