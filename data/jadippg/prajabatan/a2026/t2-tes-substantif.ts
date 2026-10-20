import type { Tahapan } from '@/lib/skema';
import { contohLiterasi, contohNumerasi } from './contoh';

/**
 * Ketentuan nilai ditulis SATU kali di dokumen riset, pada baris Literasi,
 * sedangkan baris Numerasi dan Penguasaan Konten kosong (sel digabung).
 * Karena itu teks yang sama dipakai ketiga subtes.
 */
const PENILAIAN =
  'Bobot soal benar 5. Bobot soal salah atau kosong 0. Dokumen menandai bobot ini dengan catatan ' +
  '"prediksi atau educated guess". Dokumen menuliskan ketentuan ini satu kali untuk seluruh tes substantif.';

export const tahapTesSubstantif: Tahapan = {
  kode: 'tes-substantif',
  nama: 'Tes Substantif',
  mode: 'offline',
  deskripsi: `Tahap II: tes substantif untuk menyeleksi kompetensi bidang studi serta literasi dan numerasi, yaitu Tes Penguasaan Bidang dan Tes Kemampuan Dasar Literasi dan Numerasi. Dilaksanakan secara luring di Tempat Uji Kompetensi (TUK) yang ditunjuk, memakai aplikasi Computer Assisted Test (CAT).

Materinya: Tes Kemampuan Dasar Literasi (15 soal, 30 menit), Tes Kemampuan Dasar Numerasi (15 soal, 30 menit), dan Tes Penguasaan Konten sesuai bidang studi yang dipilih (70 soal, 90 menit).`,
  status: 'terkonfirmasi',
  subtes: [
    {
      kode: 'literasi',
      nama: 'Literasi',
      jumlahSoal: 15,
      waktuMenit: 30,
      formatKetentuan:
        'Tipe soal menurut dokumen kurikulum: pilihan ganda, pilihan ganda kompleks, pilihan ganda ' +
        'tabel, mencocokkan, dan isian singkat. Di tryout Markaz soalnya berbasis bacaan; selain ' +
        'pilihan ganda, ada soal tabel: peserta menandai Setuju atau Tidak Setuju untuk tiap pernyataan.',
      penilaian: PENILAIAN,
      catatan:
        'Contoh di sini hanya soal pilihan ganda. Tabel pernyataan pada soal ' +
        'tabel tidak tersimpan sebagai teks di Markaz, jadi tidak bisa disalin ulang. ' +
        'Tautan Panduan Soal Literasi ada di bagian Sumber.',
      materi: [
        { nama: 'Menentukan inti bacaan, ide pokok, dan gagasan utama' },
        { nama: 'Menemukan informasi tersurat, detail penting, dan kata kunci' },
        { nama: 'Menyimpulkan, menafsirkan, dan memprediksi isi bacaan' },
        { nama: 'Menganalisis hubungan antarkalimat, antarparagraf, dan struktur teks' },
        { nama: 'Menafsirkan bahasa, unsur, dan nilai dalam teks' },
        { nama: 'Mengevaluasi kelengkapan, kelogisan, kredibilitas, dan penyajian teks' },
      ],
      contoh: contohLiterasi,
    },
    {
      kode: 'numerasi',
      nama: 'Numerasi',
      jumlahSoal: 15,
      waktuMenit: 30,
      formatKetentuan:
        'Berupa soal wacana dalam kehidupan sehari-hari; satu wacana digunakan untuk beberapa soal.',
      penilaian: PENILAIAN,
      catatan: 'Tautan Panduan Soal Numerasi ada di bagian Sumber.',
      materi: [
        { nama: 'Bilangan dan Operasi' },
        { nama: 'Rasio dan Proporsi' },
        { nama: 'Aljabar' },
        { nama: 'Pola dan Barisan' },
        { nama: 'Geometri dan Pengukuran' },
        { nama: 'Data dan Statistika' },
        { nama: 'Peluang' },
        { nama: 'Aritmatika Sosial' },
      ],
      contoh: contohNumerasi,
    },
    {
      kode: 'penguasaan-konten',
      nama: 'Penguasaan Konten',
      jumlahSoal: 70,
      waktuMenit: 90,
      formatKetentuan:
        'Soal sesuai penguasaan konten bidang studi yang dipilih pendaftar (daftar bidang studi ada ' +
        'di informasi seleksi).',
      penilaian: PENILAIAN,
      catatan:
        'Belum ada contoh soal: dokumen riset tidak memuat contoh soal per bidang studi, dan paket ' +
        'tryout Markaz yang dipakai hanya berisi literasi dan numerasi.',
    },
  ],
};
