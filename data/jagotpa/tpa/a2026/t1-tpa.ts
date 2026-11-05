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
      formatKetentuan: `Pilihan ganda A–E, 60 menit per subtes.`,
      penilaian: `Skor mentah adalah jumlah jawaban benar (0–90). Skor subtes dihitung dengan rumus \\(S = 50 + 10 \\times \\frac{X - \\mu}{\\sigma}\\), dengan X skor mentah, μ = 47,15 (rata-rata skor mentah), dan σ = 15,15 (simpangan baku), lalu dibatasi pada rentang 20–80. Angka μ dan σ adalah hasil rekonstruksi riset, belum dikonfirmasi penyelenggara.`,
      materi: [
        {
          nama: `Sinonim`,
          catatan: `35 soal per paket tryout`,
        },
        {
          nama: `Antonim`,
          catatan: `15 soal per paket tryout`,
        },
        {
          nama: `Analogi`,
          catatan: `25 soal per paket tryout (lengkapi pasangan 13, pilih pasangan 12)`,
        },
        {
          nama: `Pemahaman Bacaan`,
          catatan: `15 soal per paket tryout (bacaan pendek 5, bacaan panjang 10)`,
        },
      ],
      mapping: [
        {
          tipe: 'tryout',
          paket: 10,
          soalPerPaket: 90,
          dibutuhkan: 900,
          tersedia: 900,
          status: 'berjalan',
          catatan: `Seed JAGOTPA-2026, batch 10to5latol (TPA Generator). Uji impor SiAdu belum dilakukan.`,
        },
        {
          tipe: 'latsol',
          paket: 5,
          soalPerPaket: 18,
          dibutuhkan: 90,
          tersedia: 90,
          status: 'berjalan',
          catatan: `Seed JAGOTPA-2026, batch 10to5latol (TPA Generator). Uji impor SiAdu belum dilakukan.`,
        },
      ],
      contoh: contohVerbal,
    },
    {
      kode: 'kuantitatif',
      nama: 'Kuantitatif',
      jumlahSoal: 90,
      waktuMenit: 60,
      formatKetentuan: `Pilihan ganda A–E, 60 menit per subtes.`,
      penilaian: `Skor mentah adalah jumlah jawaban benar (0–90). Skor subtes dihitung dengan rumus \\(S = 50 + 10 \\times \\frac{X - \\mu}{\\sigma}\\), dengan X skor mentah, μ = 41,99 (rata-rata skor mentah), dan σ = 20,83 (simpangan baku), lalu dibatasi pada rentang 20–80. Angka μ dan σ adalah hasil rekonstruksi riset, belum dikonfirmasi penyelenggara.`,
      materi: [
        {
          nama: `Hitung Menghitung`,
          catatan: `25 soal per paket tryout`,
        },
        {
          nama: `Deret Bilangan`,
          catatan: `25 soal per paket tryout`,
        },
        {
          nama: `Komparasi Kuantitatif`,
          catatan: `25 soal per paket tryout`,
        },
        {
          nama: `Soal Cerita`,
          catatan: `15 soal per paket tryout`,
        },
      ],
      mapping: [
        {
          tipe: 'tryout',
          paket: 10,
          soalPerPaket: 90,
          dibutuhkan: 900,
          tersedia: 900,
          status: 'berjalan',
          catatan: `Seed JAGOTPA-2026, batch 10to5latol (TPA Generator). Uji impor SiAdu belum dilakukan.`,
        },
        {
          tipe: 'latsol',
          paket: 5,
          soalPerPaket: 18,
          dibutuhkan: 90,
          tersedia: 90,
          status: 'berjalan',
          catatan: `Seed JAGOTPA-2026, batch 10to5latol (TPA Generator). Uji impor SiAdu belum dilakukan.`,
        },
      ],
      contoh: contohKuantitatif,
    },
    {
      kode: 'penalaran',
      nama: 'Penalaran',
      jumlahSoal: 70,
      waktuMenit: 60,
      formatKetentuan: `Pilihan ganda A–E, 60 menit per subtes.`,
      penilaian: `Skor mentah adalah jumlah jawaban benar (0–70). Skor subtes dihitung dengan rumus \\(S = 50 + 10 \\times \\frac{X - \\mu}{\\sigma}\\), dengan X skor mentah, μ = 31,37 (rata-rata skor mentah), dan σ = 11,76 (simpangan baku), lalu dibatasi pada rentang 20–80. Angka μ dan σ adalah hasil rekonstruksi riset, belum dikonfirmasi penyelenggara.`,
      materi: [
        {
          nama: `Verbal Silogisme`,
          catatan: `15 soal per paket tryout`,
        },
        {
          nama: `Verbal Analitis`,
          catatan: `15 soal per paket tryout`,
        },
        {
          nama: `Rotasi Kubus`,
          catatan: `5 soal per paket tryout`,
        },
        {
          nama: `Visualisasi Kubus`,
          catatan: `5 soal per paket tryout`,
        },
        {
          nama: `Jaring-jaring Kubus`,
          catatan: `5 soal per paket tryout`,
        },
        {
          nama: `Kotak 3x3`,
          catatan: `15 soal per paket tryout`,
        },
        {
          nama: `The Next Box`,
          catatan: `10 soal per paket tryout`,
        },
      ],
      mapping: [
        {
          tipe: 'tryout',
          paket: 10,
          soalPerPaket: 70,
          dibutuhkan: 700,
          tersedia: 700,
          status: 'berjalan',
          catatan: `Seed JAGOTPA-2026, batch 10to5latol (TPA Generator). Uji impor SiAdu belum dilakukan.`,
        },
        {
          tipe: 'latsol',
          paket: 5,
          soalPerPaket: 14,
          dibutuhkan: 70,
          tersedia: 70,
          status: 'berjalan',
          catatan: `Seed JAGOTPA-2026, batch 10to5latol (TPA Generator). Uji impor SiAdu belum dilakukan.`,
        },
      ],
      contoh: contohPenalaran,
    },
  ],
};
