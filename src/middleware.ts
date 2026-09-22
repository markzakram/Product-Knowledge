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

export const config = {
  matcher: ['/((?!masuk|_next/static|_next/image|favicon.ico|gambar).*)'],
};
