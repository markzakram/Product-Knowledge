import type { Angkatan } from '@/lib/skema';
import { skd2026 } from '../../bersama/skd-2026';
import { tahapAdministrasi } from './t1-administrasi';
import { tahapTkbi } from './t3-tkbi';
import { tahapKesehatan1 } from './t4-kesehatan-1';
import { tahapPsikologi } from './t5-psikologi';
import { tahapPenentuanAkhir } from './t6-penentuan-akhir';

/**
 * SPCP IPDN 2026.
 *
 * SKD tidak ditulis ulang di sini, melainkan dirujuk dari bersama/skd-2026.
 * Kalau ketentuan SKD berubah, cukup satu file yang disunting dan semua
 * sekolah kedinasan ikut berubah.
 */
export const ipdn2026: Angkatan = {
  kode: '2026',
  nama: 'SPCP 2026',
  tahun: 2026,
  status: 'terkonfirmasi',
  ringkasan:
    'Enam tahap. SKD dipakai bersama seluruh sekolah kedinasan; tahap lanjutan ' +
    'khas IPDN dimulai dari TKBI.',
  diperbarui: '2026-09-22',
  tahapan: [
    tahapAdministrasi,
    skd2026,
    tahapTkbi,
    tahapKesehatan1,
    tahapPsikologi,
    tahapPenentuanAkhir,
  ],
  sumber: [
    {
      jenis: 'internal',
      judul: 'JadiSekdin - Riset dan Kurikulum Seleksi Lanjutan IPDN',
      tanggalAkses: '2026-09-22',
      keandalan: 'resmi',
      catatan: 'Dokumen Product Management, September 2026.',
    },
    {
      jenis: 'internal',
      judul: 'Sekdin - Mapping Seleksi Lanjutan',
      tanggalAkses: '2026-09-22',
      keandalan: 'resmi',
      catatan: 'Sumber angka tryout, latsol, dan ketersediaan SIADU.',
    },
  ],
};
