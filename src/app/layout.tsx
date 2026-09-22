import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import './globals.css';
import { NAMA_COOKIE, cookieSah, gerbangAktif } from '@/lib/sesi';
import { PemilihTema, SKRIP_TEMA } from './tema';

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
              Product Knowledge
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
