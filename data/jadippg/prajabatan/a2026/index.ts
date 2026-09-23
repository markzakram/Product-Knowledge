import type { Angkatan } from '@/lib/skema';
import { tahapTesSubstantif } from './t1-tes-substantif';

/**
 * PPG Prajabatan 2026.
 *
 * Kategori tryout "Tryout PPG Prajabatan 2026" di Markaz berisi DUA seri:
 * lima paket berlabel "Archieve" (Literasi 30, Numerasi 30) dan sepuluh paket
 * "Tryout Tes Substantif PPG Prajabatan" (Literasi 15, Numerasi 15). Yang
 * dipakai seri kedua — seri yang diarsipkan bukan susunan yang berlaku.
 *
 * Hanya tes substantif yang ditulis, karena hanya itu yang punya tryout.
 */
export const prajabatan2026: Angkatan = {
  kode: '2026',
  nama: 'Seleksi 2026',
  tahun: 2026,
  status: 'indikasi',
  ringkasan:
    'Yang tercatat baru tes substantif: literasi dan numerasi, masing-masing ' +
    '15 soal di paket tryout.',
  diperbarui: '2026-09-23',
  tahapan: [tahapTesSubstantif],
  sumber: [
    {
      jenis: 'internal',
      judul: 'Markaz — paket tryout "Tryout PPG Prajabatan 2026", seri "Tryout Tes Substantif PPG Prajabatan"',
      tanggalAkses: '2026-09-23',
      keandalan: 'asumsi',
      catatan:
        'Struktur dan jumlah soal diturunkan dari susunan paket tryout, bukan ' +
        'dari dokumen kurikulum atau pengumuman resmi.',
    },
  ],
};
