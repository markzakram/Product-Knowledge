import type { Tahapan } from '@/lib/skema';
import { contohVerbal, contohKuantitatif, contohPenalaran } from './contoh';

export const tahapTpa: Tahapan = {
  kode: 'tpa',
  nama: 'Tes Potensi Akademik',
  status: 'indikasi',
  subtes: [
    {
      kode: 'verbal',
      nama: 'Verbal',
      jumlahSoal: 90,
      waktuMenit: 60,
      penilaian: `Skor mentah adalah jumlah jawaban benar (0–90). Skor subtes dihitung dengan rumus \\(S = 50 + 10 \\times \\frac{X - \\mu}{\\sigma}\\), dengan X skor mentah, μ = 47,15 (rata-rata skor mentah), dan σ = 15,15 (simpangan baku), lalu dibatasi pada rentang 20–80. Angka μ dan σ adalah hasil rekonstruksi riset, belum dikonfirmasi penyelenggara.`,
      contoh: contohVerbal,
    },
    {
      kode: 'kuantitatif',
      nama: 'Kuantitatif',
      jumlahSoal: 90,
      waktuMenit: 60,
      penilaian: `Skor mentah adalah jumlah jawaban benar (0–90). Skor subtes dihitung dengan rumus \\(S = 50 + 10 \\times \\frac{X - \\mu}{\\sigma}\\), dengan X skor mentah, μ = 41,99 (rata-rata skor mentah), dan σ = 20,83 (simpangan baku), lalu dibatasi pada rentang 20–80. Angka μ dan σ adalah hasil rekonstruksi riset, belum dikonfirmasi penyelenggara.`,
      contoh: contohKuantitatif,
    },
    {
      kode: 'penalaran',
      nama: 'Penalaran',
      jumlahSoal: 70,
      waktuMenit: 60,
      penilaian: `Skor mentah adalah jumlah jawaban benar (0–70). Skor subtes dihitung dengan rumus \\(S = 50 + 10 \\times \\frac{X - \\mu}{\\sigma}\\), dengan X skor mentah, μ = 31,37 (rata-rata skor mentah), dan σ = 11,76 (simpangan baku), lalu dibatasi pada rentang 20–80. Angka μ dan σ adalah hasil rekonstruksi riset, belum dikonfirmasi penyelenggara.`,
      contoh: contohPenalaran,
    },
  ],
};
