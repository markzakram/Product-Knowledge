import type { Tahapan } from '@/lib/skema';
import { contohPedagogik, contohSjt } from './contoh';

export const tahapUkpppg: Tahapan = {
  kode: 'ukpppg',
  nama: 'Ujian Tertulis UKPPPG',
  deskripsi:
    'Ujian tertulis pada Ujian Kompetensi Peserta PPG (UKPPPG) untuk Guru Tertentu 2026 Tahap 2. ' +
    'Terdiri atas tes objektif (Pedagogical Content Knowledge dan Situational Judgement Test) ' +
    'serta tes subjektif.',
  status: 'terkonfirmasi',
  subtes: [
    {
      kode: 'pedagogik',
      nama: 'Pedagogical Content Knowledge (PCK)',
      jumlahSoal: 35,
      waktuMenit: 120,
      formatKetentuan:
        'Tes objektif yang mengukur penguasaan materi dan strategi pembelajaran. Waktu 120 menit ' +
        'tertulis satu kali di dokumen, pada baris PCK; baris SJT tidak punya angka waktu sendiri, ' +
        'jadi 120 menit tampaknya berlaku untuk PCK dan SJT sekaligus. ' +
        'Tiga bentuk soal di tryout Markaz: pilihan ganda satu jawaban, pilihan ' +
        'jamak ("pilih semua jawaban yang benar"), dan tabel.',
      penilaian:
        'Bobot soal benar 5. Bobot soal salah atau kosong 0. Dokumen menandai bobot ini dengan ' +
        'catatan "prediksi atau educated guess".',
      catatan:
        'Disebut "Pedagogik" di tryout Markaz. Paket tryout sebelum Juli 2026 berisi 30 soal. ' +
        'Contoh di sini hanya pilihan ganda satu jawaban: kunci soal pilihan jamak dan tabel tidak ' +
        'tersimpan di kolom kunci Markaz.',
      contoh: contohPedagogik,
    },
    {
      kode: 'sjt',
      nama: 'Situational Judgement Test (SJT)',
      jumlahSoal: 30,
      formatKetentuan:
        'Tes objektif yang menilai kemampuan guru dalam mengambil keputusan berdasarkan konteks ' +
        'pembelajaran. Soal situasi kelas dengan lima pilihan tindakan. Di tryout Markaz tiap ' +
        'pilihan diberi skor 1 sampai 5; tidak ada jawaban salah, yang ada ' +
        'jawaban berskor tertinggi. Waktu pengerjaan: lihat keterangan waktu pada PCK.',
      penilaian: 'Bobot soal berupa rentang nilai 1 sampai 5.',
      catatan:
        'Paket tryout sebelum Juli 2026 berisi 20 soal. Tautan Panduan Soal SJT ada di bagian Sumber.',
      contoh: contohSjt,
    },
    {
      kode: 'tes-subjektif',
      nama: 'Tes Subjektif',
      jumlahSoal: 1,
      waktuMenit: 30,
      formatKetentuan:
        'Berbentuk studi kasus, untuk mengukur kompetensi dalam melakukan refleksi dalam ' +
        'melaksanakan tugas sebagai pendidik.',
      penilaian: 'Tipe soal: uraian reflektif. Dokumen tidak menyebut bobot nilainya.',
      catatan: 'Belum ada contoh soal: dokumen riset dan tryout Markaz yang dipakai tidak memuatnya.',
      materi: [
        { nama: 'Mengidentifikasi masalah yang pernah dihadapi' },
        { nama: 'Upaya mengatasi masalah yang dihadapi' },
        { nama: 'Hasil dari upaya yang dilakukan' },
        {
          nama: 'Pengalaman berharga',
          catatan: 'Pengalaman yang bisa digunakan untuk meningkatkan diri dalam melaksanakan tugas keprofesian guru.',
        },
      ],
    },
  ],
};
