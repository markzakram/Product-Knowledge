import type { Angkatan } from '@/lib/skema';
import { tahapApplied } from './t1-applied';
import { tahapScreening } from './t2-screening';
import { tahapTesOnline } from './t3-tes-online';
import { tahapOnlineInterview } from './t4-online-interview';
import { tahapInterviewUser } from './t5-interview-user';
import { tahapMcu } from './t6-mcu';
import { tahapYudisium } from './t7-yudisium';
import { tahapHired } from './t8-hired';

export const pertadate2026: Angkatan = {
  kode: '2026',
  nama: 'Pertadate 2026',
  tahun: 2026,
  status: 'indikasi',
  ringkasan:
    'Delapan tahap dari pengajuan lamaran sampai penempatan. Hanya Tes Online ' +
    'yang punya materi pembelajaran, dan strukturnya masih rekonstruksi riset.',
  diperbarui: '2026-09-22',
  tahapan: [
    tahapApplied,
    tahapScreening,
    tahapTesOnline,
    tahapOnlineInterview,
    tahapInterviewUser,
    tahapMcu,
    tahapYudisium,
    tahapHired,
  ],
  sumber: [
    {
      jenis: 'internal',
      judul: 'RISET DAN EVALUASI PERTADATE',
      tanggalAkses: '2026-09-22',
      keandalan: 'asumsi',
      catatan: 'Dokumen Product Management, Agustus 2026. Struktur tes disusun dari analisis psikotes vendor, bukan pengumuman resmi Pertamina.',
    },
    {
      jenis: 'internal',
      judul: 'BUMN - Mapping Tes Online Pertadate Pertamina',
      tanggalAkses: '2026-09-22',
      keandalan: 'asumsi',
      catatan: 'Sheet-nya berlabel "BELUM FIX, MASIH PROSES DI RISET".',
    },
  ],
};
