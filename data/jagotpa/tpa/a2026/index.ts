import type { Angkatan } from '@/lib/skema';
import { tahapTpa } from './t1-tpa';

/**
 * TPA bukan seleksi berangkatan, jadi "angkatan" di sini adalah FORMAT soal
 * yang berlaku: susunan tryout "Tes Potensi Akademik Part 2" (Juni 2026).
 * Susunan itu sama persis dengan Part 1 (Februari 2026), jadi dianggap stabil.
 */
export const tpa2026: Angkatan = {
  kode: '2026',
  nama: 'Format 2026',
  tahun: 2026,
  status: 'indikasi',
  ringkasan:
    'Satu sesi tes berisi tiga subtes: Verbal, Kuantitatif, dan Penalaran, ' +
    'total 250 soal di paket tryout.',
  diperbarui: '2026-09-23',
  tahapan: [tahapTpa],
  sumber: [
    {
      jenis: 'internal',
      judul: 'Markaz — paket tryout "Tes Potensi Akademik Part 2" dan "Part 1"',
      tanggalAkses: '2026-09-23',
      keandalan: 'asumsi',
      catatan:
        'Struktur dan jumlah soal diturunkan dari susunan paket tryout, bukan ' +
        'dari dokumen kurikulum atau pengumuman resmi.',
    },
  ],
};
