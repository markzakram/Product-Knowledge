import type { Tahapan } from '@/lib/skema';

/**
 * Seleksi Tingkat Pusat.
 *
 * Riset menyebut tingkat pusat umumnya berisi pemeriksaan lanjutan, tetapi
 * penulis sumber sekunder tidak mengikuti proses sampai tahap ini, sehingga
 * susunan tes pusat tidak ditetapkan.
 */
export const tahapSeleksiPusat: Tahapan = {
  kode: 'seleksi-pusat',
  nama: 'Seleksi Tingkat Pusat',
  deskripsi: 'Pengujian lanjutan bagi peserta yang lolos tingkat daerah. Susunan tes pusat belum dipublikasikan dan tidak boleh ditebak.',
  status: 'coming_soon',
  subtes: [],
};
