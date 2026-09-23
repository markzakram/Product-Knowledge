import type { Angkatan } from '@/lib/skema';
import { tahapTesPotensi } from './t1-tes-potensi';
import { tahapPsikotes } from './t2-psikotes';
import { tahapBahasaInggris } from './t3-bahasa-inggris';

/**
 * LPS 2025.
 *
 * Disusun dari tiga kategori tryout Markaz, masing-masing 20 paket dengan
 * susunan yang sama: "Tahap 1 LPS Tes Potensi", "Tahap 2 LPS Tes Psikotes",
 * dan "Tahap 3 LPS Tes Bahasa Inggris". Tahun 2025 diambil dari tanggal
 * pembuatan paketnya (Juli 2025).
 */
export const lps2025: Angkatan = {
  kode: '2025',
  nama: 'Rekrutmen 2025',
  tahun: 2025,
  status: 'indikasi',
  ringkasan:
    'Tiga tahap tes: Tes Potensi (hubungan kata, angka, gabungan bagian, ' +
    'abstrak), Psikotes, lalu Tes Bahasa Inggris.',
  diperbarui: '2026-09-23',
  tahapan: [tahapTesPotensi, tahapPsikotes, tahapBahasaInggris],
  sumber: [
    {
      jenis: 'internal',
      judul: 'Markaz — paket tryout LPS, Tahap 1 sampai 3',
      tanggalAkses: '2026-09-23',
      keandalan: 'asumsi',
      catatan:
        'Struktur dan jumlah soal diturunkan dari susunan paket tryout, bukan ' +
        'dari dokumen kurikulum atau pengumuman resmi.',
    },
  ],
};
