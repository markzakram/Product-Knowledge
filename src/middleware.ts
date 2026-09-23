import { NextResponse, type NextRequest } from 'next/server';
import { NAMA_COOKIE, cookieSah, gerbangAktif } from '@/lib/sesi';

/**
 * Gerbang di depan semua halaman.
 *
 * Aplikasi ini sepenuhnya baca-saja, jadi tugas middleware cuma satu: menjaga
 * isinya tidak terbuka ke siapa pun yang kebetulan punya tautannya.
 */
export async function middleware(req: NextRequest) {
  if (!gerbangAktif()) return NextResponse.next();
  if (await cookieSah(req.cookies.get(NAMA_COOKIE)?.value)) return NextResponse.next();

  const ke = new URL('/masuk', req.url);
  ke.searchParams.set('lanjut', req.nextUrl.pathname + req.nextUrl.search);
  return NextResponse.redirect(ke);
}

/**
 * Jalur yang DIBIARKAN LEWAT tanpa PIN.
 *
 * Halaman /masuk sendiri memakai logo, favicon, dan manifest. Kalau ketiganya
 * ikut dikunci, permintaannya dialihkan ke /masuk dan halaman login tampil
 * dengan logo rusak serta favicon hilang — gerbangnya terlihat seperti
 * merusak situs justru saat ia bekerja dengan benar.
 *
 * Yang dibebaskan hanya aset visual yang memang tidak rahasia: logo platform,
 * favicon, dan manifest PWA. Isi yang rahasia — halaman soal, /unduh, dan
 * berkas lain di public/ — tetap terkunci.
 */
export const config = {
  matcher: [
    // Nama berkas dan /masuk diberi batas (?:$|/) supaya yang lolos hanya jalur
    // itu PERSIS. Tanpa batas, lookahead cuma mencocokkan awalan: /masuk-admin
    // atau /manifest.jsonx di masa depan ikut terbuka tanpa PIN.
    '/((?!(?:masuk|favicon\\.ico|icon\\.png|apple-icon\\.png|manifest\\.json)(?:$|/)|_next/static/|_next/image|logo/|gambar/).*)',
  ],
};
