import type { Angkatan } from '@/lib/skema';
import { tahapUkpppg } from './t1-ukpppg';

/**
 * PPG Dalam Jabatan 2026.
 *
 * Susunan tryout UKPPPG di Markaz BERUBAH di tengah tahun. Paket 1–5
 * (Februari 2026) berisi Pedagogik 30 dan SJT 20; paket 6–15 (Juli 2026)
 * berisi Pedagogik 35 dan SJT 30. Yang ditulis susunan Juli, karena itu yang
 * terbaru dan dipakai paket aktif 6–10. Paket 11–15 masih nonaktif saat
 * dibaca, jadi tidak dijadikan acuan.
 */
export const dalamJabatan2026: Angkatan = {
  kode: '2026',
  nama: 'UKPPPG 2026',
  tahun: 2026,
  status: 'indikasi',
  ringkasan:
    'Yang tercatat baru tes objektif UKPPPG: Pedagogik 35 soal dan Situational ' +
    'Judgement Test 30 soal. Paket tryout sebelum Juli 2026 masih memakai ' +
    'susunan 30 dan 20 soal.',
  diperbarui: '2026-09-23',
  tahapan: [tahapUkpppg],
  sumber: [
    {
      jenis: 'internal',
      judul: 'Markaz — paket tryout "Tryout PPG Dalam Jabatan 2026" nomor 6–10',
      tanggalAkses: '2026-09-23',
      keandalan: 'asumsi',
      catatan:
        'Struktur dan jumlah soal diturunkan dari susunan paket tryout, bukan ' +
        'dari dokumen kurikulum atau pengumuman resmi.',
    },
  ],
};
