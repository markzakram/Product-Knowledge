import type { Angkatan } from '@/lib/skema';
import { tahapSkd } from './t2-skd';

/**
 * SKD Sekolah Kedinasan 2026.
 *
 * Satu SKD dipakai semua sekolah kedinasan, jadi ia tes sendiri; IPDN dan PKN
 * STAN hanya menyimpan seleksi lanjutannya. Nomor tahap mengikuti alur resmi:
 * tahap 1 seleksi administrasi di tiap sekolah, SKD tahap 2 (`nomorAwal: 2`),
 * seleksi lanjutan mulai tahap 3.
 */
export const skdKedinasan2026: Angkatan = {
  kode: '2026',
  nama: 'SKD 2026',
  tahun: 2026,
  nomorAwal: 2,
  status: 'terkonfirmasi',
  ringkasan:
    'Tiga subtes dikerjakan serentak dalam satu sesi 100 menit. Dipakai semua ' +
    'sekolah kedinasan; seleksi lanjutan ada di tesnya sendiri.',
  diperbarui: '2026-10-19',
  info: [
    {
      tipe: 'pendahuluan',
      judul: 'Nomor tahap',
      isi:
        'Nomor tahap mengikuti alur seleksi sekolah kedinasan. Tahap 1 adalah seleksi ' +
        'administrasi di tiap sekolah, SKD adalah tahap 2, dan seleksi lanjutan masing-masing ' +
        'sekolah dimulai dari tahap 3. Halaman ini hanya memuat SKD, jadi penomorannya dimulai ' +
        'dari Tahap 2. Seleksi administrasi dan seleksi lanjutan dijelaskan di tes tiap sekolah, ' +
        'mis. Seleksi Lanjutan IPDN dan Seleksi Lanjutan PKN STAN.',
    },
  ],
  tahapan: [tahapSkd],
  sumber: [
    {
      jenis: 'internal',
      judul: 'JadiSekdin - Riset dan Kurikulum Sekolah Kedinasan SKD',
      tanggalAkses: '2026-09-22',
      keandalan: 'resmi',
      catatan: 'Dokumen Product Management, April 2026.',
    },
    {
      jenis: 'internal',
      judul: 'Mapping ASN',
      tanggalAkses: '2026-09-22',
      keandalan: 'resmi',
      catatan: 'Sumber angka mapping tryout SKD (kolom tersedia).',
    },
    {
      jenis: 'internal',
      judul: 'Markaz - paket tryout "01 TO SEKOLAH KEDINASAN 2023"',
      tanggalAkses: '2026-09-22',
      keandalan: 'asumsi',
      catatan:
        'Sumber contoh soal nomor 3 dan seterusnya, berstatus direview (belum diperiksa ulang ' +
        'untuk etalase). Bukan sumber ketentuan SKD.',
    },
  ],
};
