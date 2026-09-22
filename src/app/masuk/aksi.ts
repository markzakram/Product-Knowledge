'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { NAMA_COOKIE, buatCookie, pinBenar } from '@/lib/sesi';

export async function masuk(_: { galat?: string } | null, form: FormData) {
  const pin = String(form.get('pin') ?? '');
  const lanjut = String(form.get('lanjut') ?? '/') || '/';

  if (!pinBenar(pin)) return { galat: 'PIN salah.' };

  (await cookies()).set(NAMA_COOKIE, await buatCookie(), {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 30 * 86400,
  });

  // Hanya menerima jalur internal, supaya parameter lanjut tidak bisa dipakai
  // mengarahkan orang ke situs lain setelah masuk.
  redirect(lanjut.startsWith('/') && !lanjut.startsWith('//') ? lanjut : '/');
}
