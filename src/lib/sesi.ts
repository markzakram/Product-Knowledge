/**
 * Gerbang akses: satu PIN, semua pengunjung hanya melihat.
 *
 * Penyuntingan data tidak lagi lewat aplikasi, melainkan lewat perubahan kode
 * dan PR - jadi tidak ada peran Editor di sini, dan tidak ada yang perlu
 * dicatat sebagai "siapa mengubah apa". Riwayat git yang memegang itu.
 *
 * PIN ini menjaga isi (contoh soal, riset kompetitif) dari mata luar, bukan
 * membedakan hak. Ia tidak bisa dicabut per orang: kalau ada yang keluar dari
 * tim, PIN harus diganti untuk semua.
 *
 * Memakai Web Crypto (bukan node:crypto) supaya bisa dipanggil dari middleware
 * yang berjalan di runtime Edge.
 */

export const NAMA_COOKIE = 'pk_sesi';
const UMUR_HARI = 30;

const enc = new TextEncoder();

function b64url(buf: ArrayBuffer): string {
  const bytes = new Uint8Array(buf);
  let s = '';
  for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

/** Mengembalikan ArrayBuffer, bukan Uint8Array, supaya cocok dengan BufferSource. */
function dariB64url(s: string): ArrayBuffer {
  const p = s.replace(/-/g, '+').replace(/_/g, '/');
  const bin = atob(p + '='.repeat((4 - (p.length % 4)) % 4));
  const buf = new ArrayBuffer(bin.length);
  const view = new Uint8Array(buf);
  for (let i = 0; i < bin.length; i++) view[i] = bin.charCodeAt(i);
  return buf;
}

async function kunci(): Promise<CryptoKey> {
  const rahasia = process.env.PIN_SALT ?? '';
  if (rahasia.length < 16) throw new Error('PIN_SALT belum diisi (minimal 16 karakter).');
  return crypto.subtle.importKey(
    'raw', enc.encode(rahasia), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign', 'verify'],
  );
}

export async function buatCookie(): Promise<string> {
  const exp = Math.floor(Date.now() / 1000) + UMUR_HARI * 86400;
  const isi = b64url(enc.encode(String(exp)).buffer as ArrayBuffer);
  const tanda = b64url(await crypto.subtle.sign('HMAC', await kunci(), enc.encode(isi)));
  return `${isi}.${tanda}`;
}

export async function cookieSah(nilai: string | undefined): Promise<boolean> {
  if (!nilai || !nilai.includes('.')) return false;
  const [isi, tanda] = nilai.split('.');
  try {
    const sah = await crypto.subtle.verify('HMAC', await kunci(), dariB64url(tanda), enc.encode(isi));
    if (!sah) return false;
    const exp = Number(new TextDecoder().decode(dariB64url(isi)));
    return Number.isFinite(exp) && exp * 1000 > Date.now();
  } catch {
    return false;
  }
}

/** Gerbang mati kalau PIN kosong - hanya untuk jalan di lokal. */
export const gerbangAktif = () => Boolean(process.env.VIEW_PIN);

/**
 * Membandingkan dua teks dalam waktu tetap, supaya lamanya proses tidak
 * membocorkan berapa banyak karakter awal yang sudah benar.
 */
export function pinBenar(pin: string): boolean {
  const asli = process.env.VIEW_PIN ?? '';
  if (!asli || pin.length !== asli.length) return false;
  let beda = 0;
  for (let i = 0; i < pin.length; i++) beda |= pin.charCodeAt(i) ^ asli.charCodeAt(i);
  return beda === 0;
}
