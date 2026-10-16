import type { Tahapan } from '@/lib/skema';

/**
 * Tes Kemampuan Umum PCAM 10 (Tahap 2). Sengaja tanpa subtes dan tanpa contoh:
 * dokumen riset menandai tahap ini "masih dalam proses riset". Angka sementara
 * di tabel materinya (bagian 3.1) hanya dicatat di deskripsi.
 */
export const tahapTku: Tahapan = {
  kode: 'tku',
  nama: 'Tes Kemampuan Umum (TKU)',
  deskripsi:
    'Belum lengkap: dokumen riset menandai Tahap 2 "masih dalam proses riset". ' +
    'Rancangan sementara di tabel materinya (angka belum final): Tes Penalaran Induktif ' +
    '(interactive test) 15 soal 18 menit; Tes Penalaran Deduktif (interactive test) 12 soal ' +
    '18 menit; Tes Kemampuan Bahasa Inggris (pilihan ganda) 30 soal 25 menit; Tes ' +
    'Pengetahuan Sektor Jasa Keuangan (pilihan ganda) 50 soal 60 menit. Khusus jalur MLE, ' +
    'bisa ada tambahan tes kemampuan bidang tergantung kebijakan penyelenggara.',
  status: 'coming_soon',
  subtes: [],
};
