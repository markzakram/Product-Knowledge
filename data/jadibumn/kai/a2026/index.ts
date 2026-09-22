import type { Angkatan } from '@/lib/skema';
import { tahapAdministrasi } from './t1-administrasi';
import { tahapKesehatanAwal } from './t2-kesehatan-awal';
import { tahapPsikologi } from './t3-psikologi';
import { tahapWawancara } from './t4-wawancara';
import { tahapKesehatanAkhir } from './t5-kesehatan-akhir';

export const kai2026: Angkatan = {
  kode: '2026',
  nama: 'Rekrutmen 2026',
  tahun: 2026,
  status: 'indikasi',
  ringkasan:
    'Lima tahap. Hanya Tes Psikologi yang punya materi pembelajaran; ' +
    'tahapan lain berupa administrasi, kesehatan, dan wawancara.',
  diperbarui: '2026-09-22',
  tahapan: [
    tahapAdministrasi,
    tahapKesehatanAwal,
    tahapPsikologi,
    tahapWawancara,
    tahapKesehatanAkhir,
  ],
  sumber: [
    {
      jenis: 'internal',
      judul: 'RISET DAN EVALUASI REKRUTMEN PT KAI',
      tanggalAkses: '2026-09-22',
      keandalan: 'alumni',
      catatan: 'Dokumen Product Management, Juli 2026. Rincian subtes disusun dari pola yang paling sering muncul, bukan pengumuman resmi.',
    },
    {
      jenis: 'internal',
      judul: 'BUMN - Mapping Psikotes PT.KAI',
      tanggalAkses: '2026-09-22',
      keandalan: 'resmi',
      catatan: 'Sumber angka tryout dan ketersediaan SIADU.',
    },
  ],
};
