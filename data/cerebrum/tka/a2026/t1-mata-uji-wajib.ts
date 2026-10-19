import type { Tahapan } from '@/lib/skema';
import { contohMatematika } from './contoh-matematika';
import { contohBahasaIndonesia } from './contoh-bahasa-indonesia';
import { contohBahasaInggris } from './contoh-bahasa-inggris';

/**
 * Mata uji wajib TKA SMA 2026: Matematika, Bahasa Indonesia, Bahasa Inggris.
 *
 * Disusun dari "Laporan TKA SMA Tahun 2026" (Product Management PT Cerebrum
 * Edukanesia Nusantara, Juni 2026):
 *   - fokus mata uji dari BAB II (2.1);
 *   - jumlah soal dan kisi-kisi dari Matriks Asesmen Mata Pelajaran Wajib (BAB II);
 *   - tipe soal dan cara penilaian dari BAB IV;
 *   - contoh soal dari BAB V (20 soal per mata uji).
 *
 * Urutan subtes mengikuti BAB V (Matematika, Bahasa Indonesia, Bahasa Inggris).
 * Dokumen sendiri tidak konsisten: BAB II mengurutkan Bahasa Indonesia, Bahasa
 * Inggris, Matematika, dan persyaratan peserta menyebut Bahasa Indonesia,
 * Matematika, Bahasa Inggris.
 *
 * Waktu pengerjaan sengaja tidak diisi: kolom "Banyak Soal dan Waktu Pengerjaan"
 * di matriks hanya berisi jumlah soal. Bobot poin PGK Kategori dan PGK MCMA juga
 * tidak disebut.
 */

const penilaianTka =
  'Menurut dokumen (BAB IV): Pilihan Ganda, jawaban benar menambah 1 poin, sedangkan jawaban ' +
  'salah dan tidak diisi tidak mengurangi poin. PGK Kategori dinilai per baris atau pernyataan, ' +
  'dan peserta tetap mendapat poin parsial bila hanya sebagian pernyataan yang dijawab benar. ' +
  'PGK MCMA memberi poin penuh hanya bila semua opsi yang benar dipilih; bila hanya sebagian, ' +
  'poin dianggap kurang atau salah. Dokumen tidak menyebut bobot poin PGK Kategori dan MCMA, ' +
  'rumus skor akhir, atau skala nilai.';

export const tahapWajib: Tahapan = {
  kode: 'mata-uji-wajib',
  nama: 'Mata Uji Wajib',
  deskripsi:
    'Tiga mata uji wajib yang harus diikuti semua peserta: Matematika (25 soal), Bahasa Indonesia ' +
    '(30 soal), dan Bahasa Inggris (30 soal). Tes berbasis komputer (ANBK) dengan aplikasi peramban ' +
    'ujian. Tiga tipe soal: Pilihan Ganda, PGK Kategori, dan PGK MCMA. Waktu pengerjaan tiap mata uji ' +
    'tidak tercantum di dokumen.',
  status: 'indikasi',
  subtes: [
    {
      kode: 'matematika',
      nama: 'Matematika',
      jumlahSoal: 25,
      formatKetentuan:
        'Mata uji wajib. Mengukur kemampuan murid memahami fakta, konsep, prinsip, dan prosedur ' +
        'matematika, serta menerapkan pengetahuan matematika untuk menyelesaikan masalah (problem ' +
        'solving). Lima elemen materi: Bilangan; Aljabar; Geometri dan Pengukuran; Trigonometri; Data ' +
        'dan Peluang.\n\n' +
        'Tipe soal TKA SMA: Pilihan Ganda (PG; opsi A sampai E, satu jawaban benar), PGK Kategori ' +
        '(tiap pernyataan dikategorikan, mis. Benar atau Salah), dan PGK MCMA (pilih semua jawaban yang ' +
        'benar). Dua puluh contoh Matematika di dokumen terdiri atas 14 PG, 4 PGK Kategori, dan 2 PGK ' +
        'MCMA.\n\n' +
        'Contoh tampilan PGK Kategori (tabel pernyataan dengan kolom Benar dan Salah; BAB IV, soal yang ' +
        'sama dengan Soal 10):\n' +
        '⟦gambar:gambar/cerebrum/tka-format-pgk-kategori.png⟧\n' +
        'Contoh tampilan PGK MCMA (kotak centang, pilih semua yang benar; BAB IV, soal yang sama dengan ' +
        'Soal 7):\n' +
        '⟦gambar:gambar/cerebrum/tka-format-pgk-mcma.png⟧\n' +
        'Jumlah soal 25 dari matriks asesmen (BAB II). Waktu pengerjaan tidak tercantum: kolom "Banyak ' +
        'Soal dan Waktu Pengerjaan" hanya berisi jumlah soal.',
      penilaian:
        `${penilaianTka}\n\n` +
        `Rekonstruksi riset (indikasi, bukan rumus resmi): ` +
        `\\(\\text{Skor} = 200 + \\frac{600}{1 + e^{-a(x - b)}}\\), dengan \\(x = \\ln\\left(\\frac{C}{W}\\right)\\) ` +
        `dari jumlah benar dan jumlah soal per tingkat (lihat info Rumus skor). ` +
        `Untuk Matematika, \\(a = 0,554383143\\) dan \\(b = 0,725824388\\). ` +
        `Jumlah soal per tingkat TKA 2026 belum tersedia. Cara memasukkan poin parsial PGK Kategori ` +
        `ke jumlah benar belum dibahas riset.`,
      catatan:
        'Contoh soal: 20 soal dari BAB V (5.1). Kunci semua soal dan tingkat kesulitannya dari dokumen. ' +
        'Dokumen tidak memuat pembahasan, jadi pembahasan di halaman ini disusun ulang dan dihitung ulang ' +
        'dengan Python; semua soal berstatus draft sampai diperiksa tim akademik.\n' +
        'Tiga contoh di BAB IV (4.1) sama dengan Soal 1, Soal 10, dan Soal 7, jadi tidak dimasukkan dua kali.\n' +
        'Soal 10: dokumen menulis "BC sejajar DC", padahal gambarnya (juga di dokumen) menunjukkan AB ' +
        'sejajar DC; ditulis "AB sejajar DC". Salah ketik lain dibiarkan seperti di sumber: "(kwh)" di Soal 7, ' +
        '"dari dari" di Soal 18, dan "Berapakah berapa banyak" di Soal 19.\n' +
        'Matriks Matematika di BAB II terpotong di akhir: butir terakhir Data dan Peluang berhenti di kata ' +
        '"Aturan". Label materi pada contoh soal (BAB V) memakai pengelompokan sendiri yang tidak sama ' +
        'persis dengan elemen di matriks.',
      materi: [
        {
          nama: 'Bilangan · Bilangan Real',
          catatan:
            'jenis dan sifat bilangan; operasi bilangan (penjumlahan, pengurangan, perkalian, pembagian, ' +
            'dan gabungannya) beserta sifat komutatif, asosiatif, dan distributif. Batasan: bilangan real, ' +
            'termasuk bilangan asli berpangkat bilangan bulat atau bilangan pecahan',
        },
        {
          nama: 'Aljabar · Persamaan dan Pertidaksamaan Linear',
          catatan:
            'sistem persamaan linear multivariabel; sistem pertidaksamaan linear multivariabel; program ' +
            'linear. Batasan: maksimum tiga variabel',
        },
        {
          nama: 'Aljabar · Fungsi',
          catatan:
            'domain, kodomain, daerah hasil (range), dan representasi fungsi linear, kuadrat, dan rasional ' +
            'dalam berbagai bentuk; invers fungsi dan representasinya; fungsi komposisi dan ' +
            'representasinya. Batasan: identifikasi fungsi secara analitis dan grafis',
        },
        {
          nama: 'Aljabar · Barisan dan Deret',
          catatan:
            'barisan dan deret aritmetika; barisan dan deret geometri. Batasan: penerapannya termasuk ' +
            'masalah pertumbuhan, peluruhan, bunga tunggal, dan bunga majemuk',
        },
        {
          nama: 'Geometri dan Pengukuran · Objek Geometri',
          catatan:
            'hubungan dua sudut, dua garis, dan dua bidang; hubungan objek geometri pada bangun datar dan ' +
            'bangun ruang; kesebangunan atau kekongruenan bangun datar; teorema Pythagoras',
        },
        {
          nama: 'Geometri dan Pengukuran · Transformasi Geometri',
          catatan: 'translasi, refleksi, rotasi, dan dilatasi, serta komposisinya, dari titik',
        },
        {
          nama: 'Geometri dan Pengukuran · Pengukuran',
          catatan:
            'keliling dan luas bangun datar; volume dan luas permukaan bangun ruang; jarak dua objek geometri',
        },
        {
          nama: 'Geometri dan Pengukuran · Batasan',
          catatan:
            'satu catatan yang dipakai bersama untuk tiga sub-elemen di atas: bangun datar meliputi ' +
            'segitiga, segi empat, lingkaran, dan bangun datar gabungan segitiga dan lingkaran; bangun ' +
            'ruang meliputi bangun ruang beraturan dengan sisi datar dan lengkung; jarak dua objek ' +
            'geometri meliputi jarak dua titik, dua garis, dua bidang, titik dan garis, serta titik dan bidang',
        },
        {
          nama: 'Trigonometri · Perbandingan Trigonometri',
          catatan: 'sinus, kosinus, tangen, kotangen, sekan, dan kosekan',
        },
        {
          nama: 'Data dan Peluang · Data',
          catatan:
            'penyajian data dalam bentuk diagram batang, diagram garis, diagram lingkaran, grafik, tabel, ' +
            'dan bentuk visual; ukuran pemusatan dan penyebaran data tunggal dan data kelompok; "Aturan ..." ' +
            '(kalimat terpotong di dokumen sumber)',
        },
      ],
      contoh: contohMatematika,
    },
    {
      kode: 'bahasa-indonesia',
      nama: 'Bahasa Indonesia',
      jumlahSoal: 30,
      formatKetentuan:
        'Mata uji wajib. Berfokus pada satu keterampilan berbahasa, yaitu membaca, karena membaca adalah ' +
        'keterampilan utama yang menjadi fondasi untuk terus belajar dan bekerja di era teknologi yang ' +
        'berubah dan berkembang sangat cepat. Tiga kompetensi: Pemahaman Tekstual, Pemahaman ' +
        'Inferensial, serta Evaluasi dan Apresiasi.\n\n' +
        'Tipe soal: PG (opsi A sampai E), PGK Kategori (Benar/Salah, Tepat/Tidak Tepat, atau ' +
        'Setuju/Tidak Setuju), dan PGK MCMA. Dua puluh contoh Bahasa Indonesia di dokumen terdiri atas ' +
        '9 PG, 6 PGK Kategori, dan 5 PGK MCMA. Soalnya berbasis bacaan (fiksi dan nonfiksi); enam bacaan ' +
        'dipakai bersama oleh beberapa soal. Tampilan tiap tipe soal sama seperti di subtes Matematika.\n\n' +
        'Jumlah soal 30 dari matriks asesmen (BAB II). Waktu pengerjaan tidak tercantum: kolom "Banyak ' +
        'Soal dan Waktu Pengerjaan" hanya berisi jumlah soal.',
      penilaian:
        `${penilaianTka}\n\n` +
        `Rekonstruksi riset (indikasi, bukan rumus resmi): ` +
        `\\(\\text{Skor} = 200 + \\frac{600}{1 + e^{-a(x - b)}}\\), dengan \\(x = \\ln\\left(\\frac{C}{W}\\right)\\) ` +
        `dari jumlah benar dan jumlah soal per tingkat (lihat info Rumus skor). ` +
        `Untuk Bahasa Indonesia, \\(a = 0,720288328\\) dan \\(b = -0,693499101\\). ` +
        `Jumlah soal per tingkat TKA 2026 belum tersedia. Cara memasukkan poin parsial PGK Kategori ` +
        `ke jumlah benar belum dibahas riset.`,
      catatan:
        'Contoh soal: 20 soal dari BAB V (5.2). Kunci semua soal, tingkat kesulitan, dan label materinya ' +
        'dari dokumen. Dokumen tidak memuat pembahasan, jadi pembahasan di halaman ini disusun ulang dari ' +
        'bacaannya; semua soal berstatus draft sampai diperiksa tim akademik.\n' +
        'Soal yang memakai bacaan sama dikelompokkan di bawah satu stimulus (di dokumen bacaannya diulang ' +
        'di tiap soal), jadi urutan tampil per bacaan dengan nomor soal tetap sama dengan dokumen.\n' +
        'Kejanggalan di sumber: Soal 4 tidak punya kalimat pertanyaan (ditandai dengan kurung siku); opsi B ' +
        'Soal 12 terpotong; salah ketik dibiarkan ("musin" di Soal 7, "kleasifikasi" di Soal 10). Satu ' +
        'perbaikan penyuntingan: di bacaan "Seragam" kalimat "...mulai menangis dan menggigil..." terbelah ' +
        'oleh titik dan pergantian halaman di dokumen, dan di sini disambung kembali.\n' +
        'Kunci yang perlu dicek tim akademik: Soal 13 butir B (kunci "Tidak Tepat" tampak bertentangan ' +
        'dengan teks), dan lebih ringan Soal 10 butir B serta Soal 3 butir B.',
      materi: [
        {
          nama: 'Pemahaman Tekstual · Kata serapan',
          catatan: 'mengidentifikasi penggunaan kata serapan dari bahasa daerah/asing dalam berbagai bidang',
        },
        {
          nama: 'Pemahaman Tekstual · Latar, karakter, fenomena',
          catatan:
            'mengidentifikasi latar, karakter, dan/atau fenomena berdasarkan kosakata yang digunakan dalam ' +
            'teks fiksi atau nonfiksi',
        },
        {
          nama: 'Pemahaman Tekstual · Kerangka atau bagan',
          catatan: 'menyusun kerangka atau bagan berdasarkan bagian-bagian penting dalam teks',
        },
        {
          nama: 'Pemahaman Inferensial · Ide pokok, tokoh, peristiwa, latar, konflik, nilai',
          catatan:
            'menyimpulkan ide pokok, gagasan pendukung, tokoh, peristiwa, latar, konflik, atau nilai-nilai ' +
            'dalam teks',
        },
        {
          nama: 'Pemahaman Inferensial · Hubungan makna',
          catatan: 'menjelaskan hubungan makna antarkalimat dan/atau antarparagraf dalam teks',
        },
        {
          nama: 'Pemahaman Inferensial · Prediksi lanjutan atau akhir',
          catatan: 'memprediksi lanjutan atau akhir uraian/cerita berdasarkan bagian tertentu dalam teks',
        },
        {
          nama: 'Evaluasi dan Apresiasi · Relevansi dengan kehidupan sehari-hari',
          catatan: 'menilai relevansi peristiwa dalam teks dengan kehidupan sehari-hari',
        },
        {
          nama: 'Evaluasi dan Apresiasi · Keakuratan informasi',
          catatan: 'menilai keakuratan, kesesuaian, kecukupan, atau ketepatan informasi dalam teks',
        },
        {
          nama: 'Evaluasi dan Apresiasi · Ketepatan bahasa',
          catatan: 'menilai ketepatan dan kesesuaian penggunaan bahasa dalam teks',
        },
        {
          nama: 'Evaluasi dan Apresiasi · Bagian teks fiksi',
          catatan:
            'menilai ketepatan bagian teks untuk menggambarkan karakter, peristiwa, atau latar dalam teks fiksi',
        },
        {
          nama: 'Evaluasi dan Apresiasi · Respons emosional',
          catatan: 'menyimpulkan respons emosional terhadap unsur puisi, prosa, dan drama',
        },
      ],
      contoh: contohBahasaIndonesia,
    },
    {
      kode: 'bahasa-inggris',
      nama: 'Bahasa Inggris',
      jumlahSoal: 30,
      formatKetentuan:
        'Mata uji wajib. Mengukur keterampilan membaca beragam jenis teks berbahasa Inggris dalam ' +
        'berbagai situasi komunikasi sehari-hari, vokasional, dan akademik. Tiga kompetensi: Pemahaman ' +
        'Tekstual, Pemahaman Inferensial, serta Evaluasi dan Apresiasi.\n\n' +
        'Tipe soal: PG (opsi A sampai E), PGK Kategori (mis. Preparation/Breaks, ' +
        'Conservation/Relaxation, Similarity/Difference), dan PGK MCMA. Dua puluh contoh Bahasa Inggris ' +
        'di dokumen terdiri atas 8 PG, 3 PGK Kategori, dan 9 PGK MCMA. Soal dan opsinya berbahasa Inggris; ' +
        'bahan soal berupa teks dan satu infografis yang dipakai lima soal. Tampilan tiap tipe soal sama ' +
        'seperti di subtes Matematika.\n\n' +
        'Jumlah soal 30 dari matriks asesmen (BAB II). Waktu pengerjaan tidak tercantum: kolom "Banyak ' +
        'Soal dan Waktu Pengerjaan" hanya berisi jumlah soal.',
      penilaian:
        `${penilaianTka}\n\n` +
        `Rekonstruksi riset (indikasi, bukan rumus resmi): ` +
        `\\(\\text{Skor} = 200 + \\frac{600}{1 + e^{-a(x - b)}}\\), dengan \\(x = \\ln\\left(\\frac{C}{W}\\right)\\) ` +
        `dari jumlah benar dan jumlah soal per tingkat (lihat info Rumus skor). ` +
        `Untuk Bahasa Inggris, \\(a = 0,883536407\\) dan \\(b = 1,088043921\\). ` +
        `Ini hasil paling longgar di antara mata uji wajib, jadi hanya pendekatan. ` +
        `Jumlah soal per tingkat TKA 2026 belum tersedia. Cara memasukkan poin parsial PGK Kategori ` +
        `ke jumlah benar belum dibahas riset.`,
      catatan:
        'Contoh soal: 20 soal dari BAB V (5.3). Kunci semua soal, tingkat kesulitan, dan label materinya ' +
        'dari dokumen. Dokumen tidak memuat pembahasan, jadi pembahasan di halaman ini disusun ulang dari ' +
        'bacaannya (dalam bahasa Indonesia); semua soal berstatus draft sampai diperiksa tim akademik.\n' +
        'Soal yang memakai bahan sama dikelompokkan di bawah satu stimulus (di dokumen bacaannya diulang di ' +
        'tiap soal), jadi urutan tampil per bahan dengan nomor soal tetap sama dengan dokumen.\n' +
        'Soal 8 dan Soal 20 di dokumen identik (pertanyaan, opsi, dan kunci sama). Judul kolom tabel Soal 5 ' +
        'di dokumen tertulis "Conversation" (salah ketik; pertanyaannya "Conservation").\n' +
        'Kunci yang perlu dicek tim akademik: Soal 13 butir C (kunci "Difference" tampak janggal karena ' +
        'teks menyebut keduanya sama-sama melamar sang putri), dan lebih ringan Soal 10 (opsi C dan E juga ' +
        'masuk akal sebagai pesan cerita).',
      materi: [
        {
          nama: 'Pemahaman Tekstual · Menemukan/mengidentifikasi informasi',
          catatan:
            'mampu menemukan atau mengidentifikasi informasi penting yang disebutkan secara eksplisit dalam teks',
        },
        {
          nama: 'Pemahaman Tekstual · Mengklasifikasi',
          catatan:
            'mampu mengelompokkan orang, benda, tempat, atau peristiwa dalam teks berdasarkan kategori tertentu',
        },
        {
          nama: 'Pemahaman Tekstual · Membuat kerangka',
          catatan: 'mampu menyusun poin-poin utama dari teks dalam bentuk kerangka atau daftar',
        },
        {
          nama: 'Pemahaman Tekstual · Meringkas',
          catatan: 'mampu menyajikan kembali isi teks secara ringkas dengan mengutip bagian penting',
        },
        {
          nama: 'Pemahaman Tekstual · Mensintesis',
          catatan:
            'mampu menggabungkan informasi dari sumber lain untuk mendapatkan pemahaman yang lebih ' +
            'komprehensif tentang suatu isu atau topik',
        },
        {
          nama: 'Pemahaman Inferensial · Menyimpulkan detail pendukung',
          catatan:
            'mampu menentukan fakta tambahan yang membuat teks lebih informatif, menarik, atau persuasif',
        },
        {
          nama: 'Pemahaman Inferensial · Menyimpulkan topik, makna, target pembaca, pesan moral',
          catatan:
            'menyimpulkan topik, ide pokok/gagasan utama, makna, target pembaca, tujuan penulisan teks, atau ' +
            'pesan moral yang tidak secara eksplisit dinyatakan dalam teks',
        },
        {
          nama: 'Pemahaman Inferensial · Menyimpulkan urutan kejadian',
          catatan: 'mampu memperkirakan isi selanjutnya dari teks',
        },
        {
          nama: 'Pemahaman Inferensial · Menyimpulkan perbandingan',
          catatan:
            'mampu menyimpulkan persamaan atau perbedaan antara tokoh, waktu, tempat, benda, atau gagasan dalam teks',
        },
        {
          nama: 'Pemahaman Inferensial · Menyimpulkan hubungan sebab-akibat',
          catatan:
            'mampu menafsirkan hubungan/kaitan antara gagasan/tindakan satu dan lainnya yang dinyatakan dalam teks',
        },
        {
          nama: 'Pemahaman Inferensial · Menyimpulkan karakter tokoh',
          catatan:
            'mampu menyimpulkan sifat atau kepribadian tokoh berdasarkan petunjuk eksplisit dalam teks',
        },
        {
          nama: 'Pemahaman Inferensial · Memprediksi hasil cerita',
          catatan: 'mampu memprediksi akhir cerita setelah membaca bagian awal',
        },
        {
          nama: 'Evaluasi dan Apresiasi · Menilai realitas atau fantasi',
          catatan:
            'mampu menganalisis peristiwa dalam teks dapat terjadi dalam kehidupan nyata berdasarkan ' +
            'pengalaman dan pengetahuan pribadi',
        },
        {
          nama: 'Evaluasi dan Apresiasi · Menilai fakta atau opini',
          catatan:
            'mampu menilai fakta/opini yang diberikan penulis untuk mendukung pendapatnya berdasarkan bukti ' +
            'atau sekadar berusaha mempengaruhi pembaca',
        },
        {
          nama: 'Evaluasi dan Apresiasi · Menilai kecukupan dan validitas informasi',
          catatan:
            'menilai kesesuaian, kelengkapan, keakuratan informasi dalam teks (dengan membandingkannya ' +
            'dengan sumber lain)',
        },
        {
          nama: 'Evaluasi dan Apresiasi · Menilai kesesuaian',
          catatan:
            'mampu menentukan bagian teks yang paling sesuai untuk menggambarkan karakter utama atau aspek ' +
            'lain dari bacaan',
        },
        {
          nama: 'Evaluasi dan Apresiasi · Menanggapi isi teks',
          catatan:
            'mampu mengungkapkan perasaan/kesan/pendapat terhadap bacaan, seperti ketertarikan, kebosanan, ' +
            'kegembiraan, ketakutan, kebencian, atau kesenangan',
        },
      ],
      contoh: contohBahasaInggris,
    },
  ],
};
