import type { Tahapan } from '@/lib/skema';

/**
 * Seleksi Lanjutan PKN STAN, diikuti peserta yang lulus SKD.
 *
 * TPA, TBI, dan Tes Psikologi dilaksanakan dalam satu rangkaian. Tes Kesehatan
 * dan Tes Kebugaran bukan tes tertulis, jadi tidak punya bank soal.
 */
export const tahapLanjutan: Tahapan = {
  kode: 'lanjutan',
  nama: 'Seleksi Lanjutan',
  mode: 'offline',
  deskripsi:
    'Terdiri dari Tes Potensi Akademik, Tes Bahasa Inggris, Tes Psikologi, ' +
    'Tes Kesehatan, dan Tes Kebugaran.',
  status: 'terkonfirmasi',
  subtes: [
    {
      kode: 'tpa-verbal',
      nama: 'TPA - Verbal',
      jumlahSoal: 40,
      waktuMenit: 45,
      penilaian: 'Nilai subtes = (soal benar / total soal) x 100. Bobot TPA terhadap nilai akhir 42 persen.',
      materi: [
        { nama: 'Sinonim' },
        { nama: 'Antonim' },
        { nama: 'Analogi', catatan: '2 kata dan 3 kata' },
        { nama: 'Pemahaman bacaan' },
        { nama: 'Silogisme', catatan: '2 premis dan logika kuantor' },
        { nama: 'Analitis', catatan: 'Distribusi dan kategori, jadwal, logika pernyataan' },
      ],
      mapping: [
        { tipe: 'tryout', paket: 10, soalPerPaket: 40, dibutuhkan: 400, status: 'berjalan',
          catatan: 'Sebagian bank soal berbagi dengan JadiASN.' },
        { tipe: 'latsol', paket: 5, soalPerPaket: 10, dibutuhkan: 50, status: 'berjalan' },
      ],
    },
    {
      kode: 'tpa-numerik',
      nama: 'TPA - Numerik',
      jumlahSoal: 36,
      mapping: [
        { tipe: 'tryout', paket: 10, soalPerPaket: 36, dibutuhkan: 360, status: 'berjalan' },
        { tipe: 'latsol', paket: 5, soalPerPaket: 10, dibutuhkan: 50, status: 'berjalan' },
      ],
    },
    {
      kode: 'tpa-figural',
      nama: 'TPA - Figural',
      jumlahSoal: 40,
      catatan: 'Soal figural membutuhkan gambar; berkasnya belum ada di repo.',
      mapping: [
        { tipe: 'tryout', paket: 10, soalPerPaket: 40, dibutuhkan: 400, status: 'berjalan' },
        { tipe: 'latsol', paket: 5, soalPerPaket: 10, dibutuhkan: 50, status: 'berjalan' },
      ],
    },
    {
      kode: 'tbi-structure',
      nama: 'TBI - Structure and Written Expression',
      jumlahSoal: 25,
      mapping: [
        { tipe: 'tryout', paket: 10, soalPerPaket: 25, dibutuhkan: 250, status: 'berjalan' },
        { tipe: 'latsol', paket: 5, soalPerPaket: 10, dibutuhkan: 50, status: 'berjalan' },
      ],
    },
    {
      kode: 'tbi-reading',
      nama: 'TBI - Reading Comprehension',
      jumlahSoal: 35,
      mapping: [
        { tipe: 'tryout', paket: 10, soalPerPaket: 35, dibutuhkan: 350, status: 'berjalan' },
        { tipe: 'latsol', paket: 5, soalPerPaket: 10, dibutuhkan: 50, status: 'berjalan' },
      ],
    },
    {
      kode: 'psikologi',
      nama: 'Tes Psikologi',
      formatKetentuan:
        'Subtes 1 mengukur resiliency, emotion regulation, consciousness, dan academic self efficacy.',
      catatan: 'Rincian jumlah soal dan waktu belum ada di dokumen sumber.',
    },
    {
      kode: 'kesehatan',
      nama: 'Tes Kesehatan',
      formatKetentuan:
        'Tinggi badan, berat badan, tekanan darah, tekanan nadi, mata, dan kulit termasuk tato dan tindik.',
      catatan: 'Bukan tes tertulis, tidak ada bank soal.',
    },
    {
      kode: 'kebugaran',
      nama: 'Tes Kebugaran',
      formatKetentuan: 'Lari 12 menit mengelilingi lintasan dan shuttle run.',
      catatan: 'Bukan tes tertulis, tidak ada bank soal.',
    },
  ],
};
