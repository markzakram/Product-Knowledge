import type { Angkatan } from '@/lib/skema';
import { tahapLanjutan } from './t3-lanjutan';

/**
 * SPMB PKN STAN 2026: seleksi lanjutan, diikuti peserta yang lulus SKD.
 *
 * Seleksi administrasi (tahap 1) dijelaskan di informasi seleksi, dan SKD
 * (tahap 2) ada di tes "SKD Sekolah Kedinasan". Karena itu tahapannya bernomor
 * tahap 3 (`nomorAwal: 3`), sama dengan nama berkasnya.
 */
export const pknStan2026: Angkatan = {
  kode: '2026',
  nama: 'SPMB 2026',
  tahun: 2026,
  nomorAwal: 3,
  status: 'terkonfirmasi',
  ringkasan:
    'Satu tahap seleksi lanjutan (Tahap 3) yang menggabungkan TPA, TBI, psikologi, kesehatan, ' +
    'dan kebugaran dalam satu rangkaian. Seleksi administrasi dan alur lengkap ada di informasi ' +
    'seleksi; SKD ada di tes SKD Sekolah Kedinasan.',
  diperbarui: '2026-10-19',
  info: [
    {
      tipe: 'pendahuluan',
      judul: 'Alur seleksi lengkap',
      isi: `1. Seleksi Administrasi (di PKN STAN).
2. Seleksi Kompetensi Dasar (SKD), dipakai semua sekolah kedinasan; lihat tes SKD Sekolah Kedinasan 2026 di JadiSekdin.
3. Seleksi Lanjutan PKN STAN: Tes Potensi Akademik, Tes Bahasa Inggris, Tes Psikologi, Tes Kesehatan, dan Tes Kebugaran.
Di halaman ini Seleksi Lanjutan tercatat sebagai Tahap 3, mengikuti alur resmi.`,
    },
    {
      tipe: 'persyaratan',
      judul: 'Seleksi Administrasi',
      isi: `- Tahap 1 dari alur seleksi, dilakukan online.
- Verifikasi berkas pendaftaran SPMB PKN STAN. Peserta yang lolos berhak mengikuti SKD.`,
    },
  ],
  tahapan: [tahapLanjutan],
  sumber: [
    {
      jenis: 'internal',
      judul: 'JadiSekdin - Riset dan Kurikulum Seleksi Lanjutan PKN STAN',
      tanggalAkses: '2026-09-22',
      keandalan: 'resmi',
      catatan: 'Dokumen Product Management, September 2026.',
    },
    {
      jenis: 'resmi',
      judul: 'Pengumuman SPMB PM Tahun 2026',
      tanggalAkses: '2026-09-22',
      keandalan: 'resmi',
    },
  ],
};
