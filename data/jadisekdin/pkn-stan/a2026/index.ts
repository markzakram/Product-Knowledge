import type { Angkatan } from '@/lib/skema';
import { skd2026 } from '../../bersama/skd-2026';
import { tahapAdministrasi } from './t1-administrasi';
import { tahapLanjutan } from './t3-lanjutan';

/** SPMB PKN STAN 2026. SKD dirujuk dari bersama/skd-2026, tidak disalin. */
export const pknStan2026: Angkatan = {
  kode: '2026',
  nama: 'SPMB 2026',
  tahun: 2026,
  status: 'terkonfirmasi',
  ringkasan:
    'Tiga tahap: administrasi, SKD, lalu Seleksi Lanjutan yang menggabungkan ' +
    'TPA, TBI, psikologi, kesehatan, dan kebugaran dalam satu rangkaian.',
  diperbarui: '2026-09-22',
  tahapan: [tahapAdministrasi, skd2026, tahapLanjutan],
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
