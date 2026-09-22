import type { Tahapan } from '@/lib/skema';

/**
 * Tes Psikologi PT KAI — satu-satunya tahapan yang punya materi pembelajaran.
 *
 * Status 'indikasi', bukan 'terkonfirmasi'. Dokumen risetnya menulis terus
 * terang: "Jenis subtes, jumlah soal, dan alokasi waktu dapat berbeda pada
 * setiap tahun dan periode rekrutmen. Namun, rincian berikut menggambarkan
 * pola yang paling sering digunakan." Menandainya terkonfirmasi berarti
 * menyampaikan pola sebagai kepastian.
 *
 * Angka mapping hanya dicantumkan untuk subtes yang bisa dibaca tanpa ragu
 * dari "BUMN - Mapping Psikotes PT.KAI.xlsx". Sel gabungan di sheet itu
 * membuat sebagian baris tidak bisa dipetakan otomatis dengan yakin, dan
 * angka yang meragukan lebih baik dikosongkan daripada salah.
 */
export const tahapPsikologi: Tahapan = {
  kode: 'psikologi',
  nama: 'Tes Psikologi',
  mode: 'offline',
  deskripsi: `Materi pembelajaran JadiBUMN untuk PT KAI berfokus pada tahapan ini.

Catatan dari dokumen riset: jenis subtes, jumlah soal, dan alokasi waktu dapat berbeda tiap tahun dan periode rekrutmen. Rincian di bawah adalah pola yang paling sering digunakan.

Tes Hitung Cepat dan Tes Matematika Umum kadang hanya salah satu yang diujikan.`,
  status: 'indikasi',
  subtes: [
    {
      kode: 'verbal',
      nama: 'Tes Verbal',
      jumlahSoal: 50,
      waktuMenit: 7,
      formatKetentuan: 'Multiple Choice Multiple Answer.',
      penilaian: '(jumlah benar / jumlah soal) x 100',
      materi: [{ nama: 'Sinonim' }, { nama: 'Antonim' }],
      mapping: [
        { tipe: 'tryout', paket: 10, soalPerPaket: 50, dibutuhkan: 500, tersedia: 300, status: 'berjalan' },
      ],
    },
    {
      kode: 'hitung-cepat',
      nama: 'Tes Hitung Cepat',
      jumlahSoal: 25,
      waktuMenit: 7,
      formatKetentuan: 'Perhitungan sederhana: kali, bagi, tambah, kurang (Kabataku).',
      penilaian: '(jumlah benar / jumlah soal) x 100',
      catatan: 'Kadang hanya salah satu antara Hitung Cepat dan Matematika Umum yang diujikan.',
      materi: [{ nama: 'Kabataku', catatan: 'Tingkat kesulitan mudah sampai sedang' }],
      mapping: [
        { tipe: 'tryout', paket: 10, soalPerPaket: 25, dibutuhkan: 250, tersedia: 175, status: 'berjalan' },
      ],
    },
    {
      kode: 'matematika-umum',
      nama: 'Tes Matematika Umum',
      jumlahSoal: 25,
      waktuMenit: 7,
      formatKetentuan: 'Soal cerita.',
      penilaian: '(jumlah benar / jumlah soal) x 100',
      catatan: 'Kadang hanya salah satu antara Hitung Cepat dan Matematika Umum yang diujikan.',
      materi: [
        { nama: 'Aljabar' },
        { nama: 'Usia' },
        { nama: 'Rata-rata' },
      ],
      mapping: [
        { tipe: 'tryout', paket: 10, soalPerPaket: 25, dibutuhkan: 250, tersedia: 175, status: 'berjalan' },
      ],
    },
    {
      kode: 'bangun-ruang',
      nama: 'Tes Bangun Ruang',
      jumlahSoal: 50,
      waktuMenit: 7,
      formatKetentuan: 'Jaring-jaring bangun ruang acak.',
      catatan: 'Soal berbentuk gambar; berkas gambarnya belum ada di repo.',
      mapping: [
        { tipe: 'tryout', paket: 10, soalPerPaket: 50, dibutuhkan: 500, tersedia: 300, status: 'berjalan' },
      ],
    },
    {
      kode: 'ketelitian',
      nama: 'Tes Ketelitian',
      jumlahSoal: 90,
      waktuMenit: 2,
      mapping: [
        { tipe: 'tryout', paket: 10, soalPerPaket: 90, dibutuhkan: 900, tersedia: 950, status: 'selesai' },
      ],
    },
    {
      kode: 'deskripsi-diri',
      nama: 'Tes Deskripsi Diri',
      waktuMenit: 10,
      formatKetentuan: 'Uraian bebas, bukan pilihan ganda.',
      catatan: 'Tidak punya bank soal; jumlah soal tidak berlaku.',
    },
    {
      kode: 'epps',
      nama: 'Edwards Personal Preference Schedule (EPPS)',
      jumlahSoal: 225,
      waktuMenit: 40,
      formatKetentuan: 'Inventori kepribadian berpasangan, tidak ada jawaban benar atau salah.',
    },
    {
      kode: 'pauli',
      nama: 'Tes Pauli',
      waktuMenit: 60,
      formatKetentuan: 'Penjumlahan berantai, sekitar 2.000 operasi. Dinilai dari kecepatan, ketelitian, dan konsistensi.',
      catatan: 'Jumlah soal tidak tetap karena formatnya lembar kerja, bukan butir soal.',
    },
    {
      kode: 'wartegg',
      nama: 'Tes Wartegg',
      waktuMenit: 15,
      formatKetentuan: '8 kotak gambar yang harus dilanjutkan peserta.',
      catatan: 'Tes proyektif, tidak punya bank soal.',
    },
    {
      kode: 'dap-baum',
      nama: 'Tes Draw A Person (DAP) dan Tes Baum',
      waktuMenit: 10,
      formatKetentuan: 'Menggambar orang dan pohon.',
      catatan: 'Tes proyektif, tidak punya bank soal.',
    },
  ],
};
