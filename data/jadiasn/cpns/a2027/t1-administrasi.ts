import type { Tahapan } from '@/lib/skema';

/**
 * Seleksi Administrasi CPNS 2027.
 *
 * Deskripsi mengikuti riset 2027 (tahapan CASN dan persyaratan umum).
 * `mode` disalin dari a2026: riset 2027 tidak membahasnya.
 */
export const tahapAdministrasi: Tahapan = {
  kode: 'administrasi',
  nama: 'Seleksi Administrasi',
  mode: 'online',
  deskripsi:
    'Pemeriksaan kesesuaian persyaratan dan dokumen pendaftaran dengan ketentuan yang berlaku. ' +
    'Persyaratan umum mengacu PERMENPANRB No. 6 Tahun 2024 Pasal 23, termasuk batas usia menurut ' +
    'kategori pelamar (lihat Informasi Seleksi). Menurut urutan tahapan di riset, peserta yang ' +
    'lolos administrasi mengikuti SKD.',
  status: 'indikasi',
  subtes: [],
};
