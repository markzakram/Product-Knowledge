import type { Angkatan } from '@/lib/skema';
import { tahapTpd } from './t1-tes-potensi-dasar';
import { tahapTku } from './t2-tes-kemampuan-umum';
import { tahapKepribadian } from './t3-tes-kepribadian';

/**
 * PCAM 9.
 *
 * Disusun dari paket tryout Markaz, bukan dari dokumen kurikulum:
 *   Tahap 1  "TAHAP 1 PCAM 9 - TES POTENSI DASAR", seri "Tes Potensi Dasar"
 *   Tahap 2  "TAHAP 2 PCAM 9 - TKU (TBI & OJK)",
 *            "TAHAP 2 PCAM 9 - TKU INTERAKTIF (PENALARAN DEDUKTIF & INDUKTIF)",
 *            "TAHAP 2 PCAM 9 - TKU (PENALARAN INDUKTIF NON INTERAKTIF)"
 *   Tahap 3  "TAHAP 3 PCAM 9 - TES KEPRIBADIAN"
 *
 * Tahun 2025 diambil dari tanggal pembuatan paketnya (November–Desember
 * 2025). Markaz tidak mencatat tahun seleksinya sendiri.
 *
 * Waktu pengerjaan sengaja tidak diisi: kolom templat waktu di Markaz tidak
 * bisa dijadikan acuan durasi ujian sungguhan.
 */
export const pcam9: Angkatan = {
  kode: '9',
  nama: 'PCAM 9',
  tahun: 2025,
  status: 'indikasi',
  ringkasan:
    'Tiga tahap tes: Tes Potensi Dasar, Tes Kemampuan Umum (bahasa Inggris, ' +
    'sektor jasa keuangan, dan penalaran), lalu Tes Kepribadian. Tryout Tahap 1 ' +
    'PCAM 10 sudah tersedia di Markaz dengan susunan yang sama.',
  diperbarui: '2026-09-23',
  tahapan: [tahapTpd, tahapTku, tahapKepribadian],
  sumber: [
    {
      jenis: 'internal',
      judul: 'Markaz — paket tryout PCAM 9, Tahap 1 sampai 3',
      tanggalAkses: '2026-09-23',
      keandalan: 'asumsi',
      catatan:
        'Struktur dan jumlah soal diturunkan dari susunan paket tryout, bukan ' +
        'dari dokumen kurikulum atau pengumuman resmi.',
    },
    {
      jenis: 'internal',
      judul: 'Markaz — paket tryout "TAHAP 1 TES POTENSI DASAR PCAM 10"',
      tanggalAkses: '2026-09-23',
      keandalan: 'asumsi',
      catatan: 'Pembanding: susunan Tahap 1 PCAM 10 (Februari 2026) sama dengan PCAM 9.',
    },
  ],
};
