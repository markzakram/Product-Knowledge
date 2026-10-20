import type { Platform } from '@/lib/skema';
import { cerebrum } from './cerebrum';
import { jadiasn } from './jadiasn';
import { jadibumn } from './jadibumn';
import { jadiojk } from './jadiojk';
import { jadipcpm } from './jadipcpm';
import { jadippg } from './jadippg';
import { jadipppk } from './jadipppk';
import { jadiprajurit } from './jadiprajurit';
import { jadisekdin } from './jadisekdin';
import { jagotpa } from './jagotpa';
import { psikoteskerja } from './psikoteskerja';

/**
 * Seluruh isi Product Knowledge, termasuk platform yang disembunyikan.
 *
 * Folder di bawah data/ mengikuti hierarkinya:
 *   data/<platform>/<tes>/<angkatan>/<tahapan>.ts
 *
 * Menambah angkatan = buat foldernya, tulis satu file per tahapan, daftarkan
 * di index angkatan, lalu naik sampai ke sini. Compiler memeriksa bentuknya;
 * PR memeriksa isinya.
 *
 * Urutan di daftar ini adalah urutan tampilnya di beranda.
 *
 * Halaman pembaca TIDAK membaca daftar ini, melainkan PLATFORM di bawahnya.
 * Daftar lengkap ini hanya dipakai pemeriksa isi (periksaIsi, periksaRumus) dan
 * Cek Data, supaya data platform yang disembunyikan tetap diperiksa.
 */
export const SEMUA_PLATFORM: Platform[] = [
  cerebrum,
  jadiasn,
  jadipppk,
  jadibumn,
  jadisekdin,
  { kode: 'JADIBEASISWA', nama: 'JadiBeasiswa', slug: 'jadibeasiswa', logo: 'logo/icon-jadibeasiswa.png', tampil: false, tes: [] },
  jadiojk,
  jadipcpm,
  jadiprajurit,
  { kode: 'JADIPOLISI', nama: 'JadiPolisi', slug: 'jadipolisi', logo: 'logo/icon-jadipolisi.png', tampil: false, tes: [] },
  jagotpa,
  jadippg,
  psikoteskerja,
];

/**
 * Platform yang tampil di halaman pembaca: SEMUA_PLATFORM tanpa yang diberi
 * `tampil: false` (aplikasinya belum siap). Beranda, halaman platform, tes,
 * angkatan, dan subtes, simulasi, pencarian, banding, dashboard, dan
 * kelengkapan semuanya membaca daftar ini lewat lib/data.ts, dan rute platform
 * yang disembunyikan 404. Untuk menampilkannya lagi, hapus `tampil: false` di
 * objek platformnya.
 */
export const PLATFORM: Platform[] = SEMUA_PLATFORM.filter((p) => p.tampil !== false);
