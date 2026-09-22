'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { NAMA_COOKIE, buatCookie, pinBenar } from '@/lib/sesi';

export async function masuk(_: { galat?: string } | null, form: FormData) {
  const pin = String(form.get('pin') ?? '');
  const lanjut = String(form.get('lanjut') ?? '/') || '/';

  if (!pinBenar(pin)) return { galat: 'PIN salah.' };

  // PIN_SALT yang belum diisi membuat cookie tidak bisa ditandatangani. Tanpa
  // penanganan ini gejalanya membingungkan: PIN benar, tapi tetap tidak masuk.
  let cookie: string;
  try {
    cookie = await buatCookie();
  } catch {
    return {
      galat:
        'PIN benar, tapi PIN_SALT belum diisi di environment variable. ' +
        'Isi PIN_SALT dengan teks acak minimal 16 karakter, lalu deploy ulang.',
    };
  }

  (await cookies()).set(NAMA_COOKIE, cookie, {
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
