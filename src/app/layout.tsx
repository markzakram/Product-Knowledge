import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import './globals.css';
import { NAMA_COOKIE, cookieSah, gerbangAktif } from '@/lib/sesi';

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
    <html lang="id">
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
            </nav>
          </div>
        </header>
        <div className="bingkai">{children}</div>
      </body>
    </html>
  );
}
