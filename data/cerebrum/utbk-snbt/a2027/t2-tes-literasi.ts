import type { Tahapan } from '@/lib/skema';
import { contohLBI } from './contoh-lbi';
import { contohPM } from './contoh-pm';

/**
 * Tes Literasi UTBK-SNBT 2027.
 *
 * Disusun dari "Kurikulum UTBK-SNBT 2027" (Product Management Cerebrum, September 2026): nama
 * subtes, jumlah soal, dan waktu dari tabel Materi Pembelajaran (bagian 2.1), strategi tiap subtes
 * dari bagian 2.1.2, dan tipe soal dari BAB IV. Contoh soal dari dokumen "Contoh Soal UTBK".
 *
 * Literasi Bahasa Inggris sengaja tanpa contoh: dokumen "Contoh Soal UTBK" tidak memuat soal
 * Literasi Bahasa Inggris (dokumen referensi lain hanya rujukan bentuk dan tidak disalin).
 */

const PENILAIAN =
  'Skor dilaporkan per subtes, bukan hanya satu nilai rata-rata. Pilihan ganda: jawaban benar ' +
  'menambah poin, sedangkan jawaban salah dan tidak diisi tidak mengurangi poin. Kurikulum tidak ' +
  'menjelaskan cara menghitung skor majemuk kompleks dan isian singkat. Bobot tiap subtes untuk ' +
  'tiap program studi tidak dipublikasikan.';

export const tahapLiterasi: Tahapan = {
  kode: 'literasi',
  nama: 'Tes Literasi',
  mode: 'offline',
  deskripsi:
    'Kelompok kedua UTBK-SNBT: tiga subtes, 70 soal, 105 menit (Literasi Bahasa Indonesia 30 soal ' +
    'dalam 42,5 menit, Literasi Bahasa Inggris 20 soal dalam 20 menit, Penalaran Matematika 20 soal ' +
    'dalam 42,5 menit). Dikerjakan dengan komputer di Pusat UTBK tanpa jeda dari TPS; "offline" di ' +
    'sini berarti tatap muka di lokasi tes. Strukturnya proyeksi dari framework resmi 2026.',
  status: 'indikasi',
  subtes: [
    {
      kode: 'lbi',
      nama: 'Literasi dalam Bahasa Indonesia (LBI)',
      jumlahSoal: 30,
      waktuMenit: 42.5,
      formatKetentuan: `30 soal dalam 42,5 menit (rata-rata sekitar 85 detik per soal). Framework 2026 menekankan kemampuan menemukan, memahami, menilai, dan merefleksi informasi dalam teks dengan konteks saintek, sosial humaniora, dan personal. Stimulus didistribusikan ke berbagai konteks: saintek (kimia, fisika, biologi), sosial humaniora (ekonomi, sejarah, sosiogeografi), dan personal (apresiasi sastra). Latihan tidak hanya menguji informasi eksplisit, tetapi juga inferensi, evaluasi informasi, hubungan antargagasan, dan refleksi terhadap isi teks.

Tipe soal: pilihan ganda, dan majemuk kompleks yang sering muncul pada soal berbacaan.

Strategi menurut kurikulum: gabungkan strategi membaca dengan penguasaan karakter domain teks. Pada teks panjang, buat pemetaan singkat fungsi tiap bagian bacaan (topik utama, argumen, data pendukung, hubungan sebab-akibat, simpulan) supaya bisa kembali ke bagian yang relevan tanpa membaca ulang seluruh teks.`,
      penilaian: PENILAIAN,
      catatan:
        'Kunci dan pembahasan menunggu tim akademik. Delapan contoh soal berasal dari dokumen "Contoh ' +
        'Soal UTBK" (bagian LBI, 8 soal; semuanya dipasang) yang tidak memuat kunci dan pembahasan; ' +
        'kunci dan pembahasannya disusun ulang oleh tim dan berstatus draft. Beberapa soal di sumber ' +
        'menguji pengetahuan sains dan sejarah, bukan semata kemampuan membaca. Sumber menyebut puisi ' +
        'di salah satu soal sebagai "Tanda-Tanda" karya Taufiq Ismail, tetapi lariknya tidak ditemukan ' +
        'di puisi Taufiq Ismail yang judulnya mirip, jadi judul dan nama penyairnya tidak ditampilkan ' +
        'sampai tim riset memberi sumbernya.',
      materi: [
        {
          nama: 'Menggali dan mengungkapkan informasi teks personal inspiratif',
          catatan: 'menentukan inti bacaan; menyimpulkan isi bacaan',
        },
        {
          nama: 'Memadukan informasi dan menafsirkan makna teks umum',
          catatan: 'menentukan makna kontekstual kata; menentukan tema dalam teks sastra',
        },
        {
          nama: 'Menginterpretasi makna dan proses dalam teks eksplanatif dan sastra',
          catatan:
            'menemukan tema dalam teks sastra; menemukan nilai dalam teks sastra; menentukan unsur ' +
            'proses dalam bacaan eksplanatif',
        },
        {
          nama: 'Mengevaluasi kelengkapan, akurasi, dan opini dalam teks ulasan',
          catatan:
            'menentukan unsur sebab-akibat bacaan eksplanatif; kelengkapan paparan kekhasan objek ' +
            'bahasan; keakuratan paparan kelebihan dan kekurangan objek bahasan; ketepatan opini atas ' +
            'objek bahasan dalam bacaan ulasan',
        },
        {
          nama: 'Menganalisis dan mengevaluasi koherensi argumen dalam teks argumentatif',
          catatan:
            'gagasan pendirian yang relevan atau tidak relevan dengan isi bacaan; fakta atau data yang ' +
            'relevan atau tidak relevan dengan gagasan pendirian; simpulan yang relevan atau tidak ' +
            'relevan dengan gagasan pendirian dan fakta atau data; inferensi meyakinkan dalam bacaan ' +
            'argumentatif',
        },
      ],
      contoh: contohLBI,
    },
    {
      kode: 'lbe',
      nama: 'Literasi dalam Bahasa Inggris (LBE)',
      jumlahSoal: 20,
      waktuMenit: 20,
      formatKetentuan: `20 soal dalam 20 menit (rata-rata sekitar 60 detik per soal). Karena waktu relatif terbatas, bedakan membaca untuk memperoleh gambaran umum dan membaca untuk menemukan informasi spesifik. Pada latihan awal, fokus pada pemahaman teks dan kosakata kontekstual; setelah akurasi terbentuk, arahkan latihan pada kecepatan membaca dan ketepatan menemukan bukti tekstual.

Domain stimulus mengikuti karakter framework literasi: konteks saintek, sosial humaniora, dan personal. Kemampuan yang dilatih: skimming, scanning, identifying specific information, inference, synonym and referent, tone and attitude, paraphrase, dan synthesizing information.`,
      penilaian: PENILAIAN,
      catatan:
        'Belum ada contoh soal. Dokumen "Contoh Soal UTBK" tidak memuat soal Literasi Bahasa Inggris, ' +
        'jadi subtes ini baru berisi kisi-kisi dari kurikulum.',
      materi: [
        { nama: 'Skimming dan scanning' },
        { nama: 'General information' },
        { nama: 'Synonym and referent' },
        { nama: 'Inference' },
        { nama: 'Specific information' },
        { nama: 'Tone and attitude' },
        { nama: 'Paraphrase' },
        { nama: 'Synthesizing information' },
        { nama: 'Scientific literacy' },
      ],
    },
    {
      kode: 'pm',
      nama: 'Penalaran Matematika (PM)',
      jumlahSoal: 20,
      waktuMenit: 42.5,
      formatKetentuan: `20 soal dalam 42,5 menit (rata-rata sekitar 127,5 detik, atau 2 menit 7,5 detik, per soal). Waktu yang lebih panjang menunjukkan soal dapat menuntut analisis yang lebih kompleks daripada hitungan langsung: peserta menerjemahkan informasi kontekstual menjadi model matematika, menentukan konsep yang relevan, menghitung, lalu menginterpretasikan hasilnya sesuai konteks.

Cakupan: penggunaan konsep matematika untuk mengatasi masalah dalam sebuah konteks, dan penggunaan pengalaman di dalam kelas untuk mengatasi masalah, dalam lingkup bilangan, peluang dan kombinatorika, geometri, statistika dan interpretasi data, aljabar dan fungsi, serta aritmatika sosial.

Tipe soal: pilihan ganda, majemuk kompleks (mis. pernyataan benar atau salah), dan isian singkat. Contoh tampilan isian singkat, jawaban diketik langsung:
⟦gambar:gambar/cerebrum/utbk2027-tipe-isian-pm.png⟧

Tahapan pengerjaan menurut kurikulum: identifikasi informasi, tentukan yang ditanyakan, bentuk model matematika, pilih konsep, lakukan penyelesaian, lalu interpretasikan hasil.`,
      penilaian: PENILAIAN,
      catatan:
        'Kunci dan pembahasan menunggu tim akademik. 37 contoh soal berasal dari dokumen "Contoh Soal ' +
        'UTBK" (bagian PM, 98 soal) yang tidak memuat kunci dan pembahasan; kunci dan pembahasannya ' +
        'disusun ulang oleh tim, setiap hitungan dicek ulang dengan Python (hitungan langsung, ' +
        'pencarian lengkap untuk peluang, simulasi bulan demi bulan untuk barisan), dan berstatus ' +
        'draft. 61 soal sumber tidak dimasukkan: 28 karena datanya keliru atau kuncinya ambigu, 7 ' +
        'karena kembar, dan 26 sah tetapi tidak dipilih demi batas jumlah soal per submateri.',
      materi: [
        {
          nama: 'Bilangan',
          catatan: 'representasi, sifat urutan, operasi bilangan, pola barisan',
        },
        { nama: 'Peluang dan kombinatorika' },
        { nama: 'Geometri', catatan: 'bangun geometri, pengukuran, dan penalaran spasial' },
        { nama: 'Statistika dan interpretasi data' },
        { nama: 'Aljabar dan fungsi' },
        { nama: 'Aritmatika sosial', catatan: 'persentase, HPP, bunga, diskon, laba dan rugi' },
      ],
      contoh: contohPM,
    },
  ],
};
