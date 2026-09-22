import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { NAMA_COOKIE } from '@/lib/sesi';

export async function GET(req: Request) {
  (await cookies()).delete(NAMA_COOKIE);
  return NextResponse.redirect(new URL('/masuk', req.url));
}
