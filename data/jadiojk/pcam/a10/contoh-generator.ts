import type { Kelompok } from '@/lib/skema';

/**
 * Contoh soal PCAM 10 OJK, Tahap 1 (Tes Potensi Dasar), dari satu paket buatan
 * Tes OJK Generator Tahap 1 (bank v23, benih 2026, paket 1): 12 soal Kemampuan
 * Umum dan 10 soal Penalaran Numerik. Menggantikan 32 contoh dari BAB V dokumen riset.
 *
 * Soal bentukan generator, bukan soal ujian sungguhan dan bukan salinan dokumen
 * riset. Tiap butir dihitung ulang oleh validator generator (22 dari 22 lulus,
 * tanpa butir kembar), tetapi belum ditelaah tim akademik, jadi semuanya berstatus
 * 'draft'; jangan dinaikkan ke 'direview' atau 'final' sebelum ditelaah.
 *
 * Ditulis dengan skrip sekali pakai, BUKAN keluaran skrip/ke-data.mjs. Nomor soal
 * mengikuti urutan paket:
 *   Kemampuan Umum    1-3 Verbal; 4-5 Soal cerita; 6-7 Tabel; 8 Grafik batang;
 *                     9-12 Figural (serial dan matriks)
 *   Penalaran Numerik 1-2 Bar Chart; 3-4 Table; 5-6 Badges; 7-8 Line Graph; 9-10 Pie Chart
 *
 * Gambar ada di public/gambar/jadiojk/ dengan nama
 * pcam10-tpd-gen-<ku|pn>-<nomor>-<bagian>. Gambar kondisi akhir (kunci) soal
 * interaktif dipasang di pembahasan, bukan di soal, supaya mode latihan tidak
 * membocorkan jawaban.
 *
 * Soal interaktif tidak bisa digeser di sini, jadi jawabannya diketik sebagai isian
 * singkat yang pendek (angka atau huruf berurutan, format jawabannya tertulis di
 * soal) supaya dinilai otomatis di simulasi. Table 2 opsi memakai PG kategori.
 * Badges (Logical Ranking) dijawab dengan nomor lencana tiap nama; pembahasannya
 * memuat teks langkah dan satu gambar urutan final.
 */

/** 12 soal Kemampuan Umum: verbal, numerik, dan figural. */
export const contohKemampuanUmum: Kelompok[] = [
  // ── Verbal (Verbal Reasoning) ──────────────────────────────────────────
  {
    stimulus: {
      judul: `Keamanan Akun Digital`,
      isi: `Makin banyak urusan sehari-hari kini dilakukan lewat akun digital, mulai dari berkirim surat hingga mengelola tabungan. Akibatnya, akun yang jatuh ke tangan orang lain dapat dipakai untuk berbagai tindak kejahatan. Cara memastikan bahwa yang masuk benar-benar pemilik akun juga beragam. Kode dari aplikasi autentikator lebih aman daripada kode melalui pesan singkat maupun pertanyaan keamanan. Verifikasi dua langkah menekan jumlah pembobolan akun karena kata sandi saja tidak lagi cukup untuk masuk. Setiap pembobolan akun pada gilirannya menambah kerugian pengguna. Sebagian pengguna bahkan memakai kata sandi yang sama untuk beberapa akun sekaligus. Di sisi lain, pengamanan akun masih menghadapi tantangan, antara lain kelengahan saat membagikan kode verifikasi dan kebiasaan menyimpan kata sandi di catatan ponsel. Karena itu, kebiasaan kecil pengguna sering kali sama pentingnya dengan teknologi pengaman yang dipakai.`,
    },
    soal: [
      {
        nomor: 1,
        lesson: 'Verbal',
        tipe: 'benar_salah',
        pertanyaan: `Ada pengguna yang memakai kata sandi yang sama untuk beberapa akun sekaligus.`,
        opsi: [
          { label: 'A', teks: `Benar` },
          { label: 'B', teks: `Salah` },
          { label: 'C', teks: `Tidak Diketahui` },
        ],
        kunci: 'A',
        pembahasan: `Jenis soal: Verbal (Verbal Reasoning).
(1) Makin banyak urusan sehari-hari kini dilakukan lewat akun digital, mulai dari berkirim surat hingga mengelola tabungan.
(2) Akibatnya, akun yang jatuh ke tangan orang lain dapat dipakai untuk berbagai tindak kejahatan.
(3) Cara memastikan bahwa yang masuk benar-benar pemilik akun juga beragam.
(4) Kode dari aplikasi autentikator lebih aman daripada kode melalui pesan singkat maupun pertanyaan keamanan.
(5) Verifikasi dua langkah menekan jumlah pembobolan akun karena kata sandi saja tidak lagi cukup untuk masuk.
(6) Setiap pembobolan akun pada gilirannya menambah kerugian pengguna.
(7) Sebagian pengguna bahkan memakai kata sandi yang sama untuk beberapa akun sekaligus.
(8) Di sisi lain, pengamanan akun masih menghadapi tantangan, antara lain kelengahan saat membagikan kode verifikasi dan kebiasaan menyimpan kata sandi di catatan ponsel.
(9) Karena itu, kebiasaan kecil pengguna sering kali sama pentingnya dengan teknologi pengaman yang dipakai.
Penjelasan singkat
Perhatikan kalimat (7). "Sebagian" berarti sekurang-kurangnya ada yang demikian. Pernyataan itu sesuai dengan bacaan. Jadi, jawabannya Benar.
Cara Cepat: Bandingkan cakupan kata pada kalimat (7) dengan pernyataan: "sebagian", "sebagian besar", "semua", dan "tidak semua" menyatakan hal yang berbeda.
Jawaban: A (Benar)`,
        tingkat: 'mudah',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      judul: `Audit Energi Gedung`,
      isi: `Audit energi adalah pemeriksaan menyeluruh atas cara sebuah gedung memakai listrik dan bahan bakar. Hasilnya membantu pengelola memutuskan perbaikan mana yang paling perlu didahulukan. Audit energi dibedakan menjadi dua tingkat, yaitu audit awal dan audit rinci. Yang tergolong audit awal antara lain pengamatan keliling gedung, penelaahan tagihan listrik, dan wawancara dengan teknisi gedung, tetapi tidak termasuk pengukuran beban tiap panel listrik. Pemakaian listrik di gedung perkantoran tidak terbagi rata. Di gedung perkantoran, pendingin ruangan menyerap listrik lebih banyak daripada penerangan maupun peralatan kantor. Pemantauan di empat gedung perkantoran menunjukkan bahwa penjadwalan ulang jam operasi pendingin menurunkan tagihan listrik bulanan. Secara teori, meter listrik di setiap lantai memungkinkan lonjakan pemakaian ditemukan dalam hitungan jam, tetapi kemampuan itu belum terbukti di gedung yang sudah memasangnya. Namun, tidak semua penghuni gedung mengatur suhu pendingin ruangan sesuai anjuran. Karena itu, audit energi kini dipandang sebagai langkah awal setiap upaya penghematan di gedung.`,
    },
    soal: [
      {
        nomor: 2,
        lesson: 'Verbal',
        tipe: 'benar_salah',
        pertanyaan: `Pada prinsipnya, meter listrik di setiap lantai memungkinkan lonjakan pemakaian ditemukan lebih awal.`,
        opsi: [
          { label: 'A', teks: `Benar` },
          { label: 'B', teks: `Salah` },
          { label: 'C', teks: `Tidak Diketahui` },
        ],
        kunci: 'A',
        pembahasan: `Jenis soal: Verbal (Verbal Reasoning).
(1) Audit energi adalah pemeriksaan menyeluruh atas cara sebuah gedung memakai listrik dan bahan bakar.
(2) Hasilnya membantu pengelola memutuskan perbaikan mana yang paling perlu didahulukan.
(3) Audit energi dibedakan menjadi dua tingkat, yaitu audit awal dan audit rinci.
(4) Yang tergolong audit awal antara lain pengamatan keliling gedung, penelaahan tagihan listrik, dan wawancara dengan teknisi gedung, tetapi tidak termasuk pengukuran beban tiap panel listrik.
(5) Pemakaian listrik di gedung perkantoran tidak terbagi rata.
(6) Di gedung perkantoran, pendingin ruangan menyerap listrik lebih banyak daripada penerangan maupun peralatan kantor.
(7) Pemantauan di empat gedung perkantoran menunjukkan bahwa penjadwalan ulang jam operasi pendingin menurunkan tagihan listrik bulanan.
(8) Secara teori, meter listrik di setiap lantai memungkinkan lonjakan pemakaian ditemukan dalam hitungan jam, tetapi kemampuan itu belum terbukti di gedung yang sudah memasangnya.
(9) Namun, tidak semua penghuni gedung mengatur suhu pendingin ruangan sesuai anjuran.
(10) Karena itu, audit energi kini dipandang sebagai langkah awal setiap upaya penghematan di gedung.
Penjelasan singkat
Perhatikan kalimat (8). Bacaan menyebut hal itu mungkin terjadi ("secara teori"), dan pernyataan juga hanya menyebut kemungkinannya. Jadi, jawabannya Benar.
Cara Cepat: Cocokkan status pada kalimat (8): kemungkinan secara teori, sudah terbukti, atau dinyatakan belum terbukti. Status yang tidak disebut tidak boleh ditambahkan.
Jawaban: A (Benar)`,
        tingkat: 'mudah',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      judul: `Pengelolaan Arsip Digital`,
      isi: `Banyak kantor kini mengalihkan dokumen kertasnya ke dalam bentuk digital agar lebih mudah disimpan dan dicari. Pekerjaan ini menuntut ketelitian, sebab dokumen yang salah simpan hampir sama sulitnya ditemukan dengan dokumen yang hilang. Penamaan berkas yang seragam mempercepat pencarian dokumen. Pencarian dokumen yang cepat pada gilirannya mengurangi salinan ganda, karena pegawai tidak perlu membuat ulang dokumen yang sulit ditemukan. Pengamatan di tiga kantor cabang menunjukkan bahwa pelatihan singkat bagi pegawai menurunkan jumlah dokumen yang salah simpan. Secara teori, peralihan ke arsip digital dapat memangkas kebutuhan ruang penyimpanan hingga sepersepuluhnya, tetapi angka itu belum terbukti di kantor-kantor yang sudah beralih. Kantor juga perlu memilih media cadangan yang tepat untuk penyimpanan jangka panjang. Untuk penyimpanan jangka panjang, pita magnetik lebih tahan lama daripada cakram optik, sedangkan cakram optik lebih tahan lama daripada cakram keras eksternal. Pada akhirnya, arsip yang tertata memudahkan kantor mempertanggungjawabkan pekerjaannya.`,
    },
    soal: [
      {
        nomor: 3,
        lesson: 'Verbal',
        tipe: 'benar_salah',
        pertanyaan: `Cakram keras eksternal lebih tahan lama daripada pita magnetik.`,
        opsi: [
          { label: 'A', teks: `Benar` },
          { label: 'B', teks: `Salah` },
          { label: 'C', teks: `Tidak Diketahui` },
        ],
        kunci: 'B',
        pembahasan: `Jenis soal: Verbal (Verbal Reasoning).
(1) Banyak kantor kini mengalihkan dokumen kertasnya ke dalam bentuk digital agar lebih mudah disimpan dan dicari.
(2) Pekerjaan ini menuntut ketelitian, sebab dokumen yang salah simpan hampir sama sulitnya ditemukan dengan dokumen yang hilang.
(3) Penamaan berkas yang seragam mempercepat pencarian dokumen.
(4) Pencarian dokumen yang cepat pada gilirannya mengurangi salinan ganda, karena pegawai tidak perlu membuat ulang dokumen yang sulit ditemukan.
(5) Pengamatan di tiga kantor cabang menunjukkan bahwa pelatihan singkat bagi pegawai menurunkan jumlah dokumen yang salah simpan.
(6) Secara teori, peralihan ke arsip digital dapat memangkas kebutuhan ruang penyimpanan hingga sepersepuluhnya, tetapi angka itu belum terbukti di kantor-kantor yang sudah beralih.
(7) Kantor juga perlu memilih media cadangan yang tepat untuk penyimpanan jangka panjang.
(8) Untuk penyimpanan jangka panjang, pita magnetik lebih tahan lama daripada cakram optik, sedangkan cakram optik lebih tahan lama daripada cakram keras eksternal.
(9) Pada akhirnya, arsip yang tertata memudahkan kantor mempertanggungjawabkan pekerjaannya.
Penjelasan singkat
Perhatikan kalimat (8). Dari kedua perbandingan itu: pita magnetik lebih tahan lama daripada cakram optik, dan cakram optik lebih tahan lama daripada cakram keras eksternal. Jadi pita magnetik lebih tahan lama daripada cakram keras eksternal. Pernyataan menyebut kebalikannya, jadi bertentangan dengan bacaan. Jadi, jawabannya Salah.
Cara Cepat: Susun urutan perbandingan pada kalimat (8), lalu cocokkan posisi "cakram keras eksternal" dan "pita magnetik" dengan arah perbandingan dalam pernyataan.
Jawaban: B (Salah)`,
        tingkat: 'sedang',
        status: 'draft',
      },
    ],
  },
  // ── Numerik: soal cerita ───────────────────────────────────────────────
  {
    stimulus: {
      isi: `Dalam suatu simulasi tabungan, bunga tunggal sebesar 12% per tahun dihitung dari setoran awal, dengan satu tahun sama dengan 12 bulan. Dana disimpan selama 17 bulan tanpa setoran atau penarikan tambahan dan tanpa pajak. Setoran awal adalah $6.000 dan tidak ada biaya administrasi.`,
    },
    soal: [
      {
        nomor: 4,
        lesson: 'Soal Cerita',
        tipe: 'pg',
        pertanyaan: `Berapa bunga yang diperoleh selama periode tersebut?`,
        opsi: [
          { label: 'A', teks: `$12.240` },
          { label: 'B', teks: `$7.020` },
          { label: 'C', teks: `$1.105,83` },
          { label: 'D', teks: `$1.020` },
          { label: 'E', teks: `$720` },
        ],
        kunci: 'D',
        pembahasan: `Jenis soal: Bunga tunggal, saldo, dan setoran awal.
Diketahui
Suku bunga tunggal r = 12% per tahun; lama simpan 17 bulan; tanpa setoran, penarikan, atau pajak.
Setoran awal P = $6.000; tidak ada biaya administrasi. Bunga dilambangkan I.
Ditanyakan
Bunga selama 17 bulan (I).
Pengerjaan
Bunga tunggal dihitung dari setoran awal saja: bunga = setoran awal × suku bunga per tahun × lama simpan (dalam tahun). Karena 1 tahun = 12 bulan:
\\(t = \\frac{17}{12}\\ \\text{tahun}\\)
\\(I = P \\times r \\times t\\)
\\(I = \\$6.000 \\times 12\\% \\times \\frac{17}{12} = \\$1.020\\)
Kesimpulan
Jadi, bunga yang diperoleh adalah $1.020. Jawaban: D.
Pilihan lain yang menjebak:
• A ($12.240): menganggap suku bunga tahunan sebagai bunga per bulan: $6.000 × 12% × 17 = $12.240
• B ($7.020): menjawab saldo akhir, bukan bunganya: $6.000 + $1.020 = $7.020
• C ($1.105,83): menghitung bunga majemuk bulanan, padahal bunganya tunggal: $6.000 × ((1 + 12%/12)^17 - 1) = $1.105,83
• E ($720): memakai bunga setahun penuh: $6.000 × 12% = $720
Jawaban: D ($1.020)`,
        tingkat: 'mudah',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      isi: `Mark memindai 76 barang per menit di hari pertama menjadi kasir. Pada akhir bulan, Mark memindai 1.710 barang dalam 15 menit.`,
    },
    soal: [
      {
        nomor: 5,
        lesson: 'Soal Cerita',
        tipe: 'pg',
        pertanyaan: `Berapa persentase peningkatan kecepatan memindainya dari hari pertama hingga akhir bulan?`,
        opsi: [
          { label: 'A', teks: `33,3%` },
          { label: 'B', teks: `38%` },
          { label: 'C', teks: `50%` },
          { label: 'D', teks: `66,7%` },
          { label: 'E', teks: `150%` },
        ],
        kunci: 'C',
        pembahasan: `Jenis soal: Soal Cerita - Bilangan dan Perbandingan.
Diketahui
Kecepatan awal: 76 barang per menit.
Pada akhir bulan: 1.710 barang diselesaikan dalam 15 menit.
Ditanyakan
Persentase peningkatan kecepatan dari hari pertama hingga akhir bulan.
Pengerjaan
Kecepatan akhir = banyak barang yang diselesaikan dibagi lama pengerjaannya:
\\(v_{\\text{akhir}} = \\frac{1.710}{15} = 114\\ \\text{barang per menit}\\)
Persentase kenaikan selalu dihitung terhadap kecepatan awal, yaitu 76 barang per menit:
\\(\\text{kenaikan} = \\frac{v_{\\text{akhir}} - v_{\\text{awal}}}{v_{\\text{awal}}} \\times 100\\%\\)
\\(\\text{kenaikan} = \\frac{114 - 76}{76} \\times 100\\% = \\frac{38}{76} \\times 100\\% = 50\\%\\)
Kesimpulan
Jadi, kecepatannya meningkat 50% dari hari pertama hingga akhir bulan. Jawaban: C.
Pilihan lain yang menjebak:
• A (33,3%): menghitung kenaikan terhadap kecepatan akhir, bukan terhadap kecepatan awal: (114 - 76) ÷ 114 × 100% = 33,3%
• B (38%): menulis selisih kecepatan (barang per menit) sebagai persentase: 114 - 76 = 38%
• D (66,7%): membandingkan kecepatan awal dengan kecepatan akhir: 76 ÷ 114 × 100% = 66,7%
• E (150%): menjawab kecepatan akhir sebagai persen dari kecepatan awal, padahal yang ditanya kenaikannya: 114 ÷ 76 × 100% = 150%
Jawaban: C (50%)`,
        tingkat: 'mudah',
        status: 'draft',
      },
    ],
  },
  // ── Numerik: tabel ─────────────────────────────────────────────────────
  {
    stimulus: {
      judul: `Tabel · Hasil Produksi ABC Products Inc.`,
      isi: `⟦gambar:gambar/jadiojk/pcam10-tpd-gen-ku-06-tabel.png⟧
Anggap setiap bulan produksi selalu mencapai produksi maksimum dan seluruh unit terjual, baik sebelum maupun sesudah metode baru diterapkan.`,
    },
    soal: [
      {
        nomor: 6,
        lesson: 'Tabel',
        tipe: 'pg',
        pertanyaan: `Jika metode produksi baru memungkinkan biaya tenaga kerja Produk C turun menjadi $6,13 per unit sekaligus meningkatkan produksi maksimum menjadi 200 unit per bulan, berapa persentase kenaikan laba perusahaan dari produk tersebut?`,
        opsi: [
          { label: 'A', teks: `19%` },
          { label: 'B', teks: `32%` },
          { label: 'C', teks: `55%` },
          { label: 'D', teks: `67%` },
          { label: 'E', teks: `120%` },
        ],
        kunci: 'E',
        pembahasan: `Jenis soal: Tabel - Aritmatika Keuangan.
Diketahui
Kolom Produk C: harga jual per unit $14,15, produksi maksimum 120 unit, biaya tenaga kerja $7,57, biaya bahan baku $1,94, biaya pengiriman $0,14 (total biaya per unit $9,65).
Metode baru: biaya tenaga kerja $6,13 per unit dan produksi maksimum 200 unit per bulan.
Produksi selalu mencapai produksi maksimum dan seluruh unit terjual.
Ditanyakan
Persentase kenaikan laba bulanan dari Produk C.
Pengerjaan
Laba per unit = harga jual - total biaya per unit; laba bulanan = laba per unit × produksi maksimum (semua unit terjual).
Sebelum metode baru:
\\(\\text{laba per unit} = \\$14{,}15 - (\\$7{,}57 + \\$1{,}94 + \\$0{,}14) = \\$14{,}15 - \\$9{,}65 = \\$4{,}50\\)
\\(\\text{laba lama} = 120 \\times \\$4{,}50 = \\$540\\)
Sesudah metode baru (biaya bahan baku dan pengiriman tetap):
\\(\\text{laba per unit baru} = \\$14{,}15 - (\\$6{,}13 + \\$1{,}94 + \\$0{,}14) = \\$14{,}15 - \\$8{,}21 = \\$5{,}94\\)
\\(\\text{laba baru} = 200 \\times \\$5{,}94 = \\$1.188\\)
Persentase kenaikan dihitung terhadap laba lama:
\\(\\text{kenaikan} = \\frac{\\$1.188 - \\$540}{\\$540} \\times 100\\% = \\frac{\\$648}{\\$540} \\times 100\\% = 120\\%\\)
Kesimpulan
Jadi, laba perusahaan dari Produk C naik 120%. Jawaban: E.
Pilihan lain yang menjebak:
• A (19%): menghitung penurunan biaya tenaga kerja, bukan kenaikan laba: ($7,57 - $6,13) ÷ $7,57 × 100% = 19%
• B (32%): hanya membandingkan laba per unit, tanpa memperhitungkan perubahan jumlah produksi: ($5,94 - $4,50) ÷ $4,50 × 100% = 32%
• C (55%): menghitung kenaikan terhadap laba baru, bukan terhadap laba lama: ($1.188 - $540) ÷ $1.188 × 100% = 54,5% ≈ 55%
• D (67%): hanya memperhitungkan kenaikan produksi maksimum: (200 - 120) ÷ 120 × 100% = 66,7% ≈ 67%
Jawaban: E (120%)`,
        tingkat: 'sedang',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      judul: `Tabel · Staf dan Teknologi Informasi`,
      isi: `⟦gambar:gambar/jadiojk/pcam10-tpd-gen-ku-07-tabel.png⟧`,
    },
    soal: [
      {
        nomor: 7,
        lesson: 'Tabel',
        tipe: 'pg',
        pertanyaan: `Berapa perbandingan antara komputer untuk pengarsipan dan komputer untuk pengolahan kata di Delta Media?`,
        opsi: [
          { label: 'A', teks: `9:8` },
          { label: 'B', teks: `8:9` },
          { label: 'C', teks: `8:17` },
          { label: 'D', teks: `13:36` },
          { label: 'E', teks: `1:9` },
        ],
        kunci: 'B',
        pembahasan: `Jenis soal: Tabel - Bilangan dan Perbandingan.
Diketahui
Kolom Delta Media, baris "Jumlah komputer untuk pengarsipan": 136.
Kolom Delta Media, baris "Jumlah komputer untuk pengolahan kata": 153.
Ditanyakan
Perbandingan komputer untuk pengarsipan terhadap komputer untuk pengolahan kata di Delta Media, dalam bentuk paling sederhana.
Pengerjaan
Perbandingan ditulis menurut urutan yang ditanyakan (komputer untuk pengarsipan lebih dahulu):
\\(\\text{komputer untuk pengarsipan} : \\text{komputer untuk pengolahan kata} = 136 : 153\\)
FPB dari 136 dan 153 adalah 17, jadi kedua bilangan dibagi 17:
\\(136 : 153 = \\frac{136}{17} : \\frac{153}{17} = 8 : 9\\)
Kesimpulan
Jadi, perbandingan komputer untuk pengarsipan dan komputer untuk pengolahan kata di Delta Media adalah 8:9. Jawaban: B.
Pilihan lain yang menjebak:
• A (9:8): urutan perbandingan terbalik (komputer untuk pengolahan kata dibanding komputer untuk pengarsipan): 153 : 136 = 9:8
• C (8:17): membandingkan komputer untuk pengarsipan dengan jumlah keduanya: 136 : (136 + 153) = 8:17
• D (13:36): membaca kolom Contenti News, bukan Delta Media: 26 : 72 = 13:36
• E (1:9): membandingkan selisih keduanya dengan komputer untuk pengolahan kata: (153 - 136) : 153 = 1:9
Jawaban: B (8:9)`,
        tingkat: 'sedang',
        status: 'draft',
      },
    ],
  },
  // ── Numerik: grafik batang ─────────────────────────────────────────────
  {
    stimulus: {
      isi: `⟦gambar:gambar/jadiojk/pcam10-tpd-gen-ku-08-grafik.png⟧
Grafik mencatat pendapatan dan seluruh biaya rutin sebuah usaha rekaan, dalam dolar.`,
    },
    soal: [
      {
        nomor: 8,
        lesson: 'Grafik Batang',
        tipe: 'pg',
        pertanyaan: `Berapa persentase laba gabungan terhadap pendapatan gabungan keempat bulan? Bulatkan sampai dua angka di belakang koma.`,
        opsi: [
          { label: 'A', teks: `20,9%` },
          { label: 'B', teks: `34,58%` },
          { label: 'C', teks: `35,18%` },
          { label: 'D', teks: `52,86%` },
          { label: 'E', teks: `65,42%` },
        ],
        kunci: 'B',
        pembahasan: `Jenis soal: Laba dan margin dari dua seri batang.
Diketahui
Seri Pendapatan: Jan $27.000, Feb $29.000, Mar $16.000, Apr $35.000.
Seri Biaya rutin: Jan $16.000, Feb $20.000, Mar $10.000, Apr $24.000.
Ditanyakan
Persentase laba gabungan terhadap pendapatan gabungan keempat bulan, dibulatkan sampai dua angka di belakang koma.
Pengerjaan
Laba = pendapatan - biaya.
Jumlahkan batang tiap seri untuk keempat bulan:
\\(\\text{pendapatan} = \\$27.000 + \\$29.000 + \\$16.000 + \\$35.000 = \\$107.000\\)
\\(\\text{biaya rutin} = \\$16.000 + \\$20.000 + \\$10.000 + \\$24.000 = \\$70.000\\)
\\(\\text{laba} = \\$107.000 - \\$70.000 = \\$37.000\\)
Persentase laba dihitung terhadap pendapatan:
\\(\\text{persentase laba} = \\frac{\\text{laba}}{\\text{pendapatan}} \\times 100\\% = \\frac{\\$37.000}{\\$107.000} \\times 100\\% \\approx 34{,}58\\%\\)
Kesimpulan
Jadi, persentase laba gabungan terhadap pendapatan kira-kira 34,58%. Jawaban: B.
Pilihan lain yang menjebak:
• A (20,9%): membagi laba dengan jumlah pendapatan dan biaya: $37.000 ÷ ($107.000 + $70.000) × 100% = 20,9%
• C (35,18%): merata-ratakan persentase laba tiap bulan tanpa bobot pendapatan: (40,74% + 31,03% + 37,5% + 31,43%) ÷ 4 = 35,18%
• D (52,86%): memakai biaya sebagai dasar persentase: $37.000 ÷ $70.000 × 100% = 52,86%
• E (65,42%): menghitung persentase biaya terhadap pendapatan: $70.000 ÷ $107.000 × 100% = 65,42%
Jawaban: B (34,58%)`,
        tingkat: 'sedang',
        status: 'draft',
      },
    ],
  },
  // ── Figural: serial dan matriks ────────────────────────────────────────
  {
    soal: [
      {
        nomor: 9,
        lesson: 'Figural > Serial',
        tipe: 'pg',
        pertanyaan: `⟦gambar:gambar/jadiojk/pcam10-tpd-gen-ku-09-soal.png⟧
Gunakan gambar di bagian atas untuk menentukan jawaban yang benar dari pilihan di bawah. Pilih jawaban yang menggantikan tanda tanya. Jika tidak ada tanda tanya, pilih jawaban yang merupakan kelanjutan dari urutan tersebut.`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-gen-ku-09-a.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-gen-ku-09-b.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-gen-ku-09-c.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-gen-ku-09-d.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-gen-ku-09-e.png⟧` },
        ],
        kunci: 'D',
        pembahasan: `Jenis soal: Figural Serial - The Next Double Box.
Bagian bawah tiap kotak adalah kode perubahan. Setiap belah ketupat mewakili satu bagian gambar atas: bila abu-abu, bagian itu berubah dengan cara yang sama setiap kali dibanding kotak sebelumnya; bila putih, bagian itu tetap. Kotak pertama adalah keadaan awal (ketiga belah ketupatnya putih). Gambar 1 memasangkan tiap belah ketupat dengan bagian yang diaturnya beserta contoh perubahannya dari deret soal.
• Belah ketupat atas abu-abu pada kotak 3, dan hanya pada kotak itu warna lingkaran berubah: warna keempat lingkaran berpindah satu pojok berlawanan arah jarum jam.
• Belah ketupat tengah abu-abu pada kotak 3 dan 4, dan hanya pada kotak-kotak itu arah panah berubah: panah berbalik arah.
• Belah ketupat bawah abu-abu pada kotak 2 dan 4, dan hanya pada kotak-kotak itu letak penanda berubah: penanda pindah ke sisi berikutnya searah jarum jam.
• Letak bingkai tidak pernah berubah.
Pada kotak 3 dan 4 ada lebih dari satu belah ketupat abu-abu sekaligus, jadi beberapa bagian berubah bersamaan; arti tiap belah ketupat tetap dapat dipisahkan karena pola abu-abunya pada kotak 2-4 berbeda-beda.
Gambar 2 menerapkan kode kotak kelima pada kotak keempat. Kotak kelima: belah ketupat atas dan tengah abu-abu, bawah putih. Dari kotak keempat: warna keempat lingkaran berpindah satu pojok berlawanan arah jarum jam dan panah berbalik arah (dilingkari warna yang sama dengan belah ketupatnya); letak penanda dan letak bingkai tetap.
Hasilnya: lingkaran (kiri atas, kanan atas, kanan bawah, kiri bawah) abu-abu, hitam, putih, putih; panah ke atas; penanda di sisi bawah; bingkai pada lingkaran kanan atas.
Gambar 1. Arti tiap belah ketupat
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-ku-09-bahas-1.png⟧
Gambar 2. Kotak 4 → kotak 5
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-ku-09-bahas-2.png⟧
Pilihan lain yang menjebak:
• A: perubahan yang ditandai belah ketupat atas (warna keempat lingkaran berpindah satu pojok berlawanan arah jarum jam) tidak dilakukan
• B: sama persis dengan kotak keempat, padahal kotak kelima memuat belah ketupat abu-abu
• C: bingkai ikut berpindah, padahal letak bingkai tidak pernah berubah pada deret ini
• E: perubahan yang ditandai belah ketupat tengah (panah berbalik arah) tidak dilakukan
Jawaban: D`,
        tingkat: 'sedang',
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      {
        nomor: 10,
        lesson: 'Figural > Serial',
        tipe: 'pg',
        pertanyaan: `⟦gambar:gambar/jadiojk/pcam10-tpd-gen-ku-10-soal.png⟧
Gunakan gambar di bagian atas untuk menentukan jawaban yang benar dari pilihan di bawah. Pilih jawaban yang menggantikan tanda tanya. Jika tidak ada tanda tanya, pilih jawaban yang merupakan kelanjutan dari urutan tersebut.`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-gen-ku-10-a.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-gen-ku-10-b.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-gen-ku-10-c.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-gen-ku-10-d.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-gen-ku-10-e.png⟧` },
        ],
        kunci: 'E',
        pembahasan: `Jenis soal: Figural Serial - The Next Box (corak berganti mengikuti siklus).
Setiap kotak berisi lingkaran dengan belah ketupat di dalamnya: belah ketupat itu terbagi menjadi 4 segitiga dalam dan cincin di luarnya terbagi menjadi 4 bagian; tiap bagian berisi satu corak. Bagian-bagian itu membentuk dua lapis: segitiga dalam dan bagian cincin luar. Bagian dinomori searah jarum jam seperti pada Gambar 2.
• Setiap segitiga dalam berganti corak mengikuti urutan tetap bergaris miring naik ke kanan → bergaris tegak → hitam penuh → kembali ke bergaris miring naik ke kanan. Setiap kotak, tiap segitiga dalam maju satu langkah pada urutan itu; yang berbeda hanya titik awalnya. Contohnya segitiga dalam nomor 1: hitam penuh (kotak 1), bergaris miring naik ke kanan (kotak 2), bergaris tegak (kotak 3), hitam penuh (kotak 4).
• Corak bagian cincin luar tidak berganti, tetapi berpindah 1 bagian searah jarum jam setiap kotak. Contohnya corak hitam penuh berada di bagian cincin luar nomor 3 (kotak 1), 4 (kotak 2), 1 (kotak 3), dan 2 (kotak 4).
Gambar 1 memperlihatkan urutan corak segitiga dalam. Gambar 2 menerapkan kedua aturan pada kotak 4: segitiga dalam maju satu langkah pada urutan coraknya dan bagian cincin luar berpindah 1 bagian searah jarum jam.
Jadi kotak berikutnya: segitiga dalam 1 bergaris miring naik ke kanan, 2 bergaris tegak, 3 hitam penuh, 4 hitam penuh; bagian cincin luar 1 berkotak-kotak, 2 berkotak-kotak miring, 3 hitam penuh, 4 putih berbintang.
Gambar 1. Urutan corak yang berulang
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-ku-10-bahas-1.png⟧
Gambar 2. Kotak 4 menjadi kotak 5
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-ku-10-bahas-2.png⟧
Pilihan lain yang menjebak:
• A: Corak bagian cincin luar berpindah ke arah sebaliknya (berlawanan arah jarum jam).
• B: Corak segitiga dalam berganti mundur pada urutannya.
• C: Corak bagian cincin luar tidak ikut berpindah; masih sama dengan kotak 4.
• D: Segitiga dalam nomor 1 tidak ikut berganti; seharusnya menjadi bergaris miring naik ke kanan, bukan tetap hitam penuh.
Jawaban: E`,
        tingkat: 'sulit',
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      {
        nomor: 11,
        lesson: 'Figural > Matriks',
        tipe: 'pg',
        pertanyaan: `⟦gambar:gambar/jadiojk/pcam10-tpd-gen-ku-11-soal.png⟧
Pilih gambar yang tepat untuk menggantikan tanda tanya.`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-gen-ku-11-a.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-gen-ku-11-b.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-gen-ku-11-c.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-gen-ku-11-d.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-gen-ku-11-e.png⟧` },
        ],
        kunci: 'C',
        pembahasan: `Jenis soal: Figural Matriks - Kotak 3x3.
Lima bentuk yang sama selalu ada di setiap kotak. Urutan melingkarnya tetap; posisinya bergeser 1 tempat searah jarum jam setiap berpindah satu kolom ke kanan, dan 1 tempat setiap berpindah satu baris ke bawah.
Bentuk yang dihitamkan mengikuti siklus tersendiri pada urutan belah ketupat, segi enam, bintang, segitiga, lingkaran: maju 3 bentuk per kolom dan 4 bentuk per baris.
Terapkan aturan posisi dan aturan isian pada kotak yang hilang secara terpisah.
Gambar 1 menerapkan pola tersebut pada bagian yang kosong; jawaban ditandai dengan bingkai hijau.
Gambar 1. Penerapan pola pada jawaban
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-ku-11-bahas-1.png⟧
Pilihan lain yang menjebak:
• A: Susunan objek bergeser ke posisi yang tidak sesuai dengan baris dan kolom lainnya.
• B: Susunan objek bergeser ke posisi yang tidak sesuai dengan baris dan kolom lainnya.
• D: Susunan objek bergeser ke posisi yang tidak sesuai dengan baris dan kolom lainnya.
• E: Posisi objek benar, tetapi objek yang berwarna hitam tidak mengikuti siklus isian.
Jawaban: C`,
        tingkat: 'sulit',
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      {
        nomor: 12,
        lesson: 'Figural > Matriks',
        tipe: 'pg',
        pertanyaan: `⟦gambar:gambar/jadiojk/pcam10-tpd-gen-ku-12-soal.png⟧
Pilih gambar yang tepat untuk menggantikan tanda tanya. Urutan simbol pada pilihan mengikuti nomor pada posisi kosong.`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-gen-ku-12-a.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-gen-ku-12-b.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-gen-ku-12-c.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-gen-ku-12-d.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-gen-ku-12-e.png⟧` },
        ],
        kunci: 'A',
        pembahasan: `Jenis soal: Figural Matriks - Kotak 5x6.
Setiap baris memuat 6 bentuk dengan susunan yang bergeser 1 posisi ke kiri dari baris sebelumnya. Bentuk yang melewati ujung kembali ke sisi lainnya.
Setiap bentuk mempertahankan isiannya pada seluruh matriks. Kolom yang hilang diisi dengan meneruskan urutan dari simbol di kiri dan kanannya.
Pengecekan dilakukan pada seluruh posisi kosong; semua simbol harus memenuhi aturan bentuk dan warna.
Gambar 1 menerapkan pola tersebut pada bagian yang kosong; jawaban ditandai dengan bingkai hijau.
Isi jawaban dibaca dari atas ke bawah, mengikuti nomor pada posisi kosong: 1. segitiga hitam; 2. belah ketupat hitam; 3. persegi hitam; 4. segi enam kosong; 5. bintang kosong.
Gambar 1. Penerapan pola pada jawaban
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-ku-12-bahas-1.png⟧
Pilihan lain yang menjebak:
• B: Bentuk pada posisi 1 tidak meneruskan pergeseran baris.
• C: Isian pada posisi 1 melanggar pola warna.
• D: Bentuk sesuai, tetapi isian hitam dan kosong terbalik.
• E: Urutan simbol tidak sesuai dengan nomor posisi kosong.
Jawaban: A`,
        tingkat: 'sedang',
        status: 'draft',
      },
    ],
  },
];

/**
 * 10 soal Penalaran Numerik: tes interaktif. Jawabannya berupa kondisi akhir grafik,
 * pilihan per tab, atau nomor lencana, ditulis sebagai isian singkat yang pendek.
 */
export const contohPenalaranNumerik: Kelompok[] = [
  // ── Bar Chart ──────────────────────────────────────────────────────────
  {
    stimulus: {
      judul: `Pendapatan Penjualan · Bar Chart`,
      isi: `Pendapatan penjualan berasal dari dua wilayah, yaitu wilayah Timur dan wilayah Barat.
Kuartal 1: total pendapatan penjualan = $200.000; pendapatan penjualan wilayah Timur menyumbang 75% dari total.
Kuartal 2: pendapatan penjualan wilayah Timur naik 40% dibandingkan Kuartal 1.
Kuartal 2: pendapatan penjualan wilayah Barat meningkat $40.000 dari Kuartal 1 ke Kuartal 2.
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-01-awal.png⟧`,
    },
    soal: [
      {
        nomor: 1,
        lesson: 'Bar Chart',
        tipe: 'isian_singkat',
        pertanyaan: `Atur total pendapatan penjualan dan persentase pendapatan penjualan wilayah Timur serta pendapatan penjualan wilayah Barat untuk setiap kuartal.
Format jawaban: empat bilangan dipisah spasi, tanpa tanda $, tanda % maupun titik ribuan, berurutan: total Kuartal 1, persentase Wilayah Timur Kuartal 1, total Kuartal 2, persentase Wilayah Timur Kuartal 2 (persentase Wilayah Barat adalah sisanya).`,
        kunci: '200000 75 300000 70',
        pembahasan: `Jenis soal: Bar Chart (tes interaktif): kedua bagian berubah, total periode kedua dicari.
Diketahui
Kuartal 1: total pendapatan penjualan = $200.000; pendapatan penjualan wilayah Timur menyumbang 75% dari total.
Kuartal 2: pendapatan penjualan wilayah Timur naik 40% dibandingkan Kuartal 1.
Kuartal 2: pendapatan penjualan wilayah Barat meningkat $40.000 dari Kuartal 1 ke Kuartal 2.
Total diatur dengan kelipatan $10.000 dan persentase dengan kelipatan 1%.
Ditanyakan
Total pendapatan penjualan setiap kuartal serta persentase pendapatan penjualan wilayah Timur dan pendapatan penjualan wilayah Barat pada Kuartal 1 dan Kuartal 2.
Pengerjaan
Persentase sebuah bagian selalu dihitung terhadap total pada periode yang sama:
\\(\\text{persentase bagian} = \\frac{\\text{nilai bagian}}{\\text{total}} \\times 100\\%\\)
Kuartal 1: pendapatan penjualan wilayah Timur menyumbang 75% dari total $200.000, lalu pendapatan penjualan wilayah Barat adalah sisanya.
\\(\\text{Wilayah Timur Kuartal 1} = 75\\% \\times \\$200.000 = \\$150.000\\)
\\(\\text{Wilayah Barat Kuartal 1} = \\$200.000 - \\$150.000 = \\$50.000\\)
Persentase pendapatan penjualan wilayah Barat diperoleh dari pembagian dengan total Kuartal 1:
\\(\\text{persentase Wilayah Barat Kuartal 1} = \\frac{50.000}{200.000} \\times 100\\% = 25\\%\\)
Kuartal 2: pendapatan penjualan wilayah Timur naik 40% (dikalikan 100% ditambah 40%), sedangkan pendapatan penjualan wilayah Barat meningkat $40.000.
\\(\\text{Wilayah Timur Kuartal 2} = \\$150.000 \\times (100\\% + 40\\%) = \\$150.000 \\times 1{,}4 = \\$210.000\\)
\\(\\text{Wilayah Barat Kuartal 2} = \\$50.000 + \\$40.000 = \\$90.000\\)
Total Kuartal 2 tidak disebut langsung, jadi dihitung dari jumlah kedua bagian:
\\(\\text{Total Kuartal 2} = \\$210.000 + \\$90.000 = \\$300.000\\)
Kedua bagian dibagi dengan total Kuartal 2:
\\(\\text{persentase Wilayah Timur Kuartal 2} = \\frac{210.000}{300.000} \\times 100\\% = 70\\%\\)
\\(\\text{persentase Wilayah Barat Kuartal 2} = \\frac{90.000}{300.000} \\times 100\\% = 30\\%\\)
Kesimpulan
Atur batang Kuartal 1 ke $200.000 dengan pembagian Wilayah Timur 75% / Wilayah Barat 25%.
Atur batang Kuartal 2 ke $300.000 dengan pembagian Wilayah Timur 70% / Wilayah Barat 30%.
Tampilan awal: Kuartal 1 total $200.000 (sudah sesuai) dan Kuartal 2 total $130.000, keduanya berpembagian 50% / 50%. Atur yang belum sama dengan kondisi akhir di atas.
Isian pada simulasi (total, persentase Wilayah Timur, total, persentase Wilayah Timur): 200000 75 300000 70
Jawaban: Kuartal 1: total $200.000, Wilayah Timur 75% ($150.000), Wilayah Barat 25% ($50.000). Kuartal 2: total $300.000, Wilayah Timur 70% ($210.000), Wilayah Barat 30% ($90.000).
Kondisi akhir (kunci):
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-01-kunci.png⟧`,
        tingkat: 'sulit',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      judul: `Dana Kelolaan Reksa Dana · Bar Chart`,
      isi: `Dana kelolaan sebuah manajer investasi terbagi menjadi reksa dana pasar uang dan reksa dana saham.
Kuartal 1: total dana kelolaan = $330.000; dana kelolaan reksa dana pasar uang menyumbang 20% dari total.
Kuartal 2: total dana kelolaan naik $30.000 dibandingkan Kuartal 1.
Kuartal 2: dana kelolaan reksa dana saham turun 25% dibandingkan Kuartal 1.
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-02-awal.png⟧`,
    },
    soal: [
      {
        nomor: 2,
        lesson: 'Bar Chart',
        tipe: 'isian_singkat',
        pertanyaan: `Atur total dana kelolaan dan persentase dana kelolaan reksa dana pasar uang serta dana kelolaan reksa dana saham untuk setiap kuartal.
Format jawaban: empat bilangan dipisah spasi, tanpa tanda $, tanda % maupun titik ribuan, berurutan: total Kuartal 1, persentase Pasar uang Kuartal 1, total Kuartal 2, persentase Pasar uang Kuartal 2 (persentase Saham adalah sisanya).`,
        kunci: '330000 20 360000 45',
        pembahasan: `Jenis soal: Bar Chart (tes interaktif): satu bagian berubah sekian persen, bagian lain dicari.
Diketahui
Kuartal 1: total dana kelolaan = $330.000; dana kelolaan reksa dana pasar uang menyumbang 20% dari total.
Kuartal 2: total dana kelolaan naik $30.000 dibandingkan Kuartal 1.
Kuartal 2: dana kelolaan reksa dana saham turun 25% dibandingkan Kuartal 1.
Total diatur dengan kelipatan $10.000 dan persentase dengan kelipatan 1%.
Ditanyakan
Total dana kelolaan setiap kuartal serta persentase dana kelolaan reksa dana pasar uang dan dana kelolaan reksa dana saham pada Kuartal 1 dan Kuartal 2.
Pengerjaan
Persentase sebuah bagian selalu dihitung terhadap total pada periode yang sama:
\\(\\text{persentase bagian} = \\frac{\\text{nilai bagian}}{\\text{total}} \\times 100\\%\\)
Kuartal 1: dana kelolaan reksa dana pasar uang menyumbang 20% dari total $330.000, lalu dana kelolaan reksa dana saham adalah sisanya.
\\(\\text{Pasar uang Kuartal 1} = 20\\% \\times \\$330.000 = \\$66.000\\)
\\(\\text{Saham Kuartal 1} = \\$330.000 - \\$66.000 = \\$264.000\\)
Persentase dana kelolaan reksa dana saham diperoleh dari pembagian dengan total Kuartal 1:
\\(\\text{persentase Saham Kuartal 1} = \\frac{264.000}{330.000} \\times 100\\% = 80\\%\\)
Kuartal 2: total dana kelolaan naik $30.000 dibandingkan Kuartal 1.
\\(\\text{Total Kuartal 2} = \\$330.000 + \\$30.000 = \\$360.000\\)
Dana kelolaan reksa dana saham turun 25% dibandingkan Kuartal 1, lalu dana kelolaan reksa dana pasar uang adalah sisa total Kuartal 2.
\\(\\text{Saham Kuartal 2} = \\$264.000 \\times (100\\% - 25\\%) = \\$264.000 \\times 0{,}75 = \\$198.000\\)
\\(\\text{Pasar uang Kuartal 2} = \\$360.000 - \\$198.000 = \\$162.000\\)
Kedua bagian dibagi dengan total Kuartal 2:
\\(\\text{persentase Pasar uang Kuartal 2} = \\frac{162.000}{360.000} \\times 100\\% = 45\\%\\)
\\(\\text{persentase Saham Kuartal 2} = \\frac{198.000}{360.000} \\times 100\\% = 55\\%\\)
Kesimpulan
Atur batang Kuartal 1 ke $330.000 dengan pembagian Pasar uang 20% / Saham 80%.
Atur batang Kuartal 2 ke $360.000 dengan pembagian Pasar uang 45% / Saham 55%.
Tampilan awal: Kuartal 1 total $330.000 (sudah sesuai) dan Kuartal 2 total $220.000, keduanya berpembagian 50% / 50%. Atur yang belum sama dengan kondisi akhir di atas.
Isian pada simulasi (total, persentase Pasar uang, total, persentase Pasar uang): 330000 20 360000 45
Jawaban: Kuartal 1: total $330.000, Pasar uang 20% ($66.000), Saham 80% ($264.000). Kuartal 2: total $360.000, Pasar uang 45% ($162.000), Saham 55% ($198.000).
Kondisi akhir (kunci):
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-02-kunci.png⟧`,
        tingkat: 'sedang',
        status: 'draft',
      },
    ],
  },
  // ── Table ──────────────────────────────────────────────────────────────
  {
    stimulus: {
      judul: `Insentif Agen Asuransi · Table (3 opsi)`,
      isi: `Ketentuan penentuan insentif yang diperoleh:
• Polis bersih per minggu = polis terjual per minggu dikurangi polis batal per minggu, dengan 5 hari kerja per minggu. Angka polis terjual per minggu pada tabel belum dikurangi polis batal.
• Rata-rata premi per polis bersih = total premi per minggu dibagi polis bersih per minggu.
• Jika rata-rata premi per polis bersih kurang dari $41: tanpa insentif.
• Jika rata-rata premi per polis bersih $41 atau lebih, tetapi kurang dari $101: 5%.
• Jika rata-rata premi per polis bersih $101 atau lebih: 10%.`,
    },
    soal: [
      {
        nomor: 3,
        lesson: 'Table',
        tipe: 'isian_singkat',
        pertanyaan: `Tentukan kategori insentif yang tepat untuk setiap agen. Setiap tabel di bawah mewakili tampilan tabel ketika tab nama tersebut dipilih.

Tab Orang A
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-03-tab-a.png⟧

Tab Orang B
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-03-tab-b.png⟧

Tab Orang C
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-03-tab-c.png⟧

Tab Orang D
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-03-tab-d.png⟧

Pilihan untuk setiap tab:
A. Tanpa insentif
B. 5%
C. 10%

Format jawaban: satu huruf pilihan untuk tiap tab, berurutan Orang A, Orang B, Orang C, Orang D, ditulis berurutan tanpa spasi.`,
        kunci: 'BACB',
        pembahasan: `Jenis soal: Table, 3-4 opsi (satu tab per orang).
Diketahui
Setiap tab memuat total premi per minggu (dalam dolar), polis terjual per minggu sebelum pembatalan, dan rata-rata polis batal per hari; satu minggu terdiri dari 5 hari kerja.
Batas kategori menurut rata-rata premi per polis bersih: $41 dan $101 (lihat ketentuan).
Ditanyakan
Kategori insentif yang tepat untuk Orang A, Orang B, Orang C, dan Orang D.
Pengerjaan
Rumus yang dipakai untuk setiap orang:
\\(\\text{polis batal per minggu} = \\text{polis batal per hari} \\times 5\\)
\\(\\text{polis bersih} = \\text{polis terjual per minggu} - \\text{polis batal per minggu}\\)
\\(\\text{rata-rata premi per polis bersih} = \\frac{\\text{total premi per minggu}}{\\text{polis bersih}}\\)
Hasil rata-rata lalu dicocokkan dengan selang kategori pada ketentuan.
Orang A:
\\(\\text{polis batal per minggu} = 3 \\times 5 = 15\\)
\\(\\text{polis bersih} = 24 - 15 = 9\\)
\\(\\text{rata-rata premi per polis bersih} = \\frac{\\$830}{9} \\approx \\$92{,}22\\)
\\(\\$41 \\le \\$92{,}22 < \\$101 \\to \\text{insentif }5\\%\\)
Orang B:
\\(\\text{polis batal per minggu} = 4 \\times 5 = 20\\)
\\(\\text{polis bersih} = 54 - 20 = 34\\)
\\(\\text{rata-rata premi per polis bersih} = \\frac{\\$1.030}{34} \\approx \\$30{,}29\\)
\\(\\$30{,}29 < \\$41 \\to \\text{tanpa insentif}\\)
Orang C:
\\(\\text{polis batal per minggu} = 1 \\times 5 = 5\\)
\\(\\text{polis bersih} = 35 - 5 = 30\\)
\\(\\text{rata-rata premi per polis bersih} = \\frac{\\$5.170}{30} \\approx \\$172{,}33\\)
\\(\\$172{,}33 \\ge \\$101 \\to \\text{insentif }10\\%\\)
Orang D:
\\(\\text{polis batal per minggu} = 3 \\times 5 = 15\\)
\\(\\text{polis bersih} = 51 - 15 = 36\\)
\\(\\text{rata-rata premi per polis bersih} = \\frac{\\$2.620}{36} \\approx \\$72{,}78\\)
\\(\\$41 \\le \\$72{,}78 < \\$101 \\to \\text{insentif }5\\%\\)
Kesimpulan
Pilih B (5%) pada tab Orang A; A (Tanpa insentif) pada tab Orang B; C (10%) pada tab Orang C; B (5%) pada tab Orang D.
Isian pada simulasi (Orang A, Orang B, Orang C, Orang D): BACB
Jawaban: Orang A: 5%. Orang B: Tanpa insentif. Orang C: 10%. Orang D: 5%.
Kondisi akhir tiap tab (kunci):
Tab Orang A
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-03-kunci-a.png⟧
Tab Orang B
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-03-kunci-b.png⟧
Tab Orang C
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-03-kunci-c.png⟧
Tab Orang D
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-03-kunci-d.png⟧`,
        tingkat: 'sedang',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      judul: `Penjualan · Table (2 opsi)`,
      isi: `Target penjualan kuartal tercapai apabila:
• Total penjualan selama tiga bulan sekurang-kurangnya $95.000, DAN
• Rata-rata penjualan selama kuartal tersebut sekurang-kurangnya 25% lebih tinggi daripada rata-rata target penjualan pada tiga bulan yang sama.`,
    },
    soal: [
      {
        nomor: 4,
        lesson: 'Table',
        tipe: 'pg_kategori',
        pertanyaan: `Tentukan apakah setiap orang mencapai target penjualan kuartalnya. Setiap tabel di bawah mewakili tampilan tabel ketika tab nama tersebut dipilih.

Tab Orang A
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-04-tab-a.png⟧

Tab Orang B
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-04-tab-b.png⟧

Tab Orang C
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-04-tab-c.png⟧

Tab Orang D
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-04-tab-d.png⟧

Untuk setiap orang, tentukan kategorinya.`,
        opsi: [
          { label: 'A', teks: `Orang A` },
          { label: 'B', teks: `Orang B` },
          { label: 'C', teks: `Orang C` },
          { label: 'D', teks: `Orang D` },
        ],
        kategori: ['Mencapai target', 'Tidak mencapai target'],
        kunci: 'Tidak mencapai target, Mencapai target, Tidak mencapai target, Tidak mencapai target',
        pembahasan: `Jenis soal: Table, 2 opsi (satu tab per orang).
Diketahui
Syarat 1: total penjualan selama tiga bulan sekurang-kurangnya $95.000.
Syarat 2: rata-rata penjualan sekurang-kurangnya 25% lebih tinggi daripada rata-rata target penjualan pada tiga bulan yang sama.
Kedua syarat harus terpenuhi. Data penjualan dan target bulan Juli, Agustus, dan September tiap orang ada pada tab Orang A sampai Orang D.
Ditanyakan
Apakah setiap orang mencapai target atau tidak mencapai target penjualan kuartal.
Pengerjaan
Jumlahkan data tiga bulan untuk setiap orang:
\\(\\text{total penjualan} = \\text{penjualan Juli} + \\text{penjualan Agustus} + \\text{penjualan September}\\)
Sekurang-kurangnya 25% lebih tinggi berarti sekurang-kurangnya target dikalikan faktor berikut:
\\(100\\% + 25\\% = 125\\% = 1{,}25\\)
Kedua rata-rata dibagi dengan banyak bulan yang sama (3), jadi syarat 2 cukup diperiksa dengan total:
\\(\\frac{\\text{total penjualan}}{3} \\ge 1{,}25 \\times \\frac{\\text{total target penjualan}}{3} \\to \\text{total penjualan} \\ge 1{,}25 \\times \\text{total target penjualan}\\)
Orang A:
\\(\\text{total penjualan} = \\$19.500 + \\$24.500 + \\$52.500 = \\$96.500\\)
\\(\\text{total target penjualan} = \\$44.500 + \\$32.500 + \\$18.000 = \\$95.000\\)
\\(\\text{batas syarat 2} = 1{,}25 \\times \\$95.000 = \\$118.750\\)
\\(\\text{syarat 1: }\\$96.500 \\ge \\$95.000 \\to \\text{terpenuhi}\\)
\\(\\text{syarat 2: }\\$96.500 < \\$118.750 \\to \\text{tidak terpenuhi}\\)
Orang A: syarat 2 tidak terpenuhi, jadi tidak mencapai target.
Orang B:
\\(\\text{total penjualan} = \\$30.500 + \\$31.000 + \\$50.000 = \\$111.500\\)
\\(\\text{total target penjualan} = \\$27.000 + \\$13.500 + \\$27.000 = \\$67.500\\)
\\(\\text{batas syarat 2} = 1{,}25 \\times \\$67.500 = \\$84.375\\)
\\(\\text{syarat 1: }\\$111.500 \\ge \\$95.000 \\to \\text{terpenuhi}\\)
\\(\\text{syarat 2: }\\$111.500 \\ge \\$84.375 \\to \\text{terpenuhi}\\)
Orang B: kedua syarat terpenuhi, jadi mencapai target.
Orang C:
\\(\\text{total penjualan} = \\$34.000 + \\$29.000 + \\$27.000 = \\$90.000\\)
\\(\\text{total target penjualan} = \\$12.000 + \\$5.500 + \\$15.000 = \\$32.500\\)
\\(\\text{batas syarat 2} = 1{,}25 \\times \\$32.500 = \\$40.625\\)
\\(\\text{syarat 1: }\\$90.000 < \\$95.000 \\to \\text{tidak terpenuhi}\\)
\\(\\text{syarat 2: }\\$90.000 \\ge \\$40.625 \\to \\text{terpenuhi}\\)
Orang C: syarat 1 tidak terpenuhi, jadi tidak mencapai target.
Orang D:
\\(\\text{total penjualan} = \\$28.500 + \\$49.000 + \\$25.000 = \\$102.500\\)
\\(\\text{total target penjualan} = \\$40.000 + \\$47.000 + \\$16.000 = \\$103.000\\)
\\(\\text{batas syarat 2} = 1{,}25 \\times \\$103.000 = \\$128.750\\)
\\(\\text{syarat 1: }\\$102.500 \\ge \\$95.000 \\to \\text{terpenuhi}\\)
\\(\\text{syarat 2: }\\$102.500 < \\$128.750 \\to \\text{tidak terpenuhi}\\)
Orang D: syarat 2 tidak terpenuhi, jadi tidak mencapai target.
Kesimpulan
Pilih B (Tidak mencapai target) pada tab Orang A; A (Mencapai target) pada tab Orang B; B (Tidak mencapai target) pada tab Orang C; B (Tidak mencapai target) pada tab Orang D.
Jawaban: Orang A: Tidak mencapai target. Orang B: Mencapai target. Orang C: Tidak mencapai target. Orang D: Tidak mencapai target.
Kondisi akhir tiap tab (kunci):
Tab Orang A
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-04-kunci-a.png⟧
Tab Orang B
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-04-kunci-b.png⟧
Tab Orang C
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-04-kunci-c.png⟧
Tab Orang D
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-04-kunci-d.png⟧`,
        tingkat: 'sulit',
        status: 'draft',
      },
    ],
  },
  // ── Badges (Logical Ranking) ───────────────────────────────────────────
  {
    stimulus: {
      judul: `Laba penjualan bulanan`,
      isi: `Nama hewan menandai usaha penjualan paket pakan untuk jenis hewan tersebut.
Unit: paket pakan untuk jenis hewan tersebut. Nominal dalam USD ($).
Kelinci: Menjual 4.000 unit/bulan dengan laba $1,00/unit.
Bebek: Menjual 10.000 unit/bulan dengan laba $2,50/unit.
Anjing: Menjual 3.000 unit/bulan dengan laba $3,00/unit.
Panda: Menjual 8.000 unit/bulan dengan laba $1,00/unit.
Zebra: Menjual 11.000 unit/bulan dengan laba $1,50/unit.
Harimau: Menjual 9.000 unit/bulan dengan laba $2,00/unit.`,
    },
    soal: [
      {
        nomor: 5,
        lesson: 'Badges',
        tipe: 'isian_singkat',
        pertanyaan: `Pasangkan lencana 1 sampai 6 berdasarkan laba penjualan rata-rata per bulan, dari terbesar ke terkecil.
Format jawaban: nomor lencana tiap nama dipisah spasi, sesuai urutan nama berikut: Kelinci, Bebek, Anjing, Panda, Zebra, Harimau.`,
        kunci: '6 1 4 5 3 2',
        pembahasan: `Diketahui
Nama hewan menandai usaha penjualan paket pakan untuk jenis hewan tersebut.
Unit: paket pakan untuk jenis hewan tersebut. Nominal dalam USD ($).
Ditanyakan
Pasangkan lencana 1 sampai 6 berdasarkan laba penjualan rata-rata per bulan, dari terbesar ke terkecil.
Pengerjaan
Hitung laba bulanan setiap unit dengan mengalikan jumlah unit terjual per bulan dan laba per unit.
\\(\\text{laba bulanan} = \\text{unit terjual per bulan} \\times \\text{laba per unit}\\)
Jumlah unit dan laba per unit sudah diketahui. Kolom laba bulanan masih kosong.
Langkah 1: kalikan 4.000 unit per bulan dengan laba $1,00 per unit untuk Kelinci.
\\(\\text{laba bulanan} = 4.000 \\times \\$1 = \\$4.000\\)
Hasil Kelinci: $4.000,00.
Langkah 2: kalikan 10.000 unit per bulan dengan laba $2,50 per unit untuk Bebek.
\\(\\text{laba bulanan} = 10.000 \\times \\$2{,}5 = \\$25.000\\)
Hasil Bebek: $25.000,00.
Langkah 3: kalikan 3.000 unit per bulan dengan laba $3,00 per unit untuk Anjing.
\\(\\text{laba bulanan} = 3.000 \\times \\$3 = \\$9.000\\)
Hasil Anjing: $9.000,00.
Langkah 4: kalikan 8.000 unit per bulan dengan laba $1,00 per unit untuk Panda.
\\(\\text{laba bulanan} = 8.000 \\times \\$1 = \\$8.000\\)
Hasil Panda: $8.000,00.
Langkah 5: kalikan 11.000 unit per bulan dengan laba $1,50 per unit untuk Zebra.
\\(\\text{laba bulanan} = 11.000 \\times \\$1{,}5 = \\$16.500\\)
Hasil Zebra: $16.500,00.
Langkah 6: kalikan 9.000 unit per bulan dengan laba $2,00 per unit untuk Harimau.
\\(\\text{laba bulanan} = 9.000 \\times \\$2 = \\$18.000\\)
Hasil Harimau: $18.000,00.
Semua laba bulanan unit sudah dihitung. Urutkan dari nilai terbesar hingga terkecil, lalu pasangkan lencana 1 sampai 6.
Kesimpulan
1. Bebek; 2. Harimau; 3. Zebra; 4. Anjing; 5. Panda; 6. Kelinci.
Isian pada simulasi (nomor lencana Kelinci, Bebek, Anjing, Panda, Zebra, Harimau): 6 1 4 5 3 2
Jawaban: 1. Bebek; 2. Harimau; 3. Zebra; 4. Anjing; 5. Panda; 6. Kelinci.
Urutan final:
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-05-kunci.png⟧`,
        tingkat: 'mudah',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      judul: `Peringkat total waktu perawatan seluruh kelompok`,
      isi: `Setiap nama mewakili kelompok tanaman.
Satu hari kerja terdiri atas 8 jam.
Eukaliptus: Memerlukan 5 hari kerja.
Bambu: Memerlukan 24 jam.
Mawar: 9 jam lebih lama dari Bambu.
Cemara: Memerlukan 45 jam.
Kaktus: 12 jam lebih lama dari Eukaliptus.
Dahlia: Memerlukan 43 jam.`,
    },
    soal: [
      {
        nomor: 6,
        lesson: 'Badges',
        tipe: 'isian_singkat',
        pertanyaan: `Pasangkan lencana 1 sampai 6 berdasarkan total waktu perawatan seluruh kelompok dalam jam, dari terkecil ke terbesar.
Format jawaban: nomor lencana tiap nama dipisah spasi, sesuai urutan nama berikut: Eukaliptus, Bambu, Mawar, Cemara, Kaktus, Dahlia.`,
        kunci: '3 1 2 5 6 4',
        pembahasan: `Diketahui
Setiap nama mewakili kelompok tanaman.
Satu hari kerja terdiri atas 8 jam.
Semua petunjuk pada kartu nama digunakan bersama.
Ditanyakan
Pasangkan lencana 1 sampai 6 berdasarkan total waktu perawatan seluruh kelompok dalam jam, dari terkecil ke terbesar.
Pengerjaan
Samakan seluruh waktu ke jam. Kerjakan nilai rujukan sebelum menghitung nama yang bergantung padanya.
\\(\\text{waktu dalam jam} = \\text{hari kerja} \\times \\text{jam per hari}\\)
Isi waktu setiap nama setelah membaca petunjuknya. Semua batang akan memakai satuan jam.
Langkah 1: Waktu kerja Eukaliptus adalah 5 hari kerja.
\\(\\text{waktu kerja} = 5 \\times 8 = 40\\)
Hasil Eukaliptus: 40 jam.
Langkah 2: Waktu kerja Bambu adalah 24 jam.
\\(\\text{waktu kerja} = 24\\)
Hasil Bambu: 24 jam.
Langkah 3: Waktu kerja Mawar sama dengan waktu kerja Bambu, ditambah 9 jam. Gunakan nilai waktu kerja Bambu yang sudah dihitung.
\\(\\text{waktu kerja} = 1 \\times 24 + 9 = 33\\)
Hasil Mawar: 33 jam.
Langkah 4: Waktu kerja Cemara adalah 45 jam.
\\(\\text{waktu kerja} = 45\\)
Hasil Cemara: 45 jam.
Langkah 5: Waktu kerja Kaktus sama dengan waktu kerja Eukaliptus, ditambah 12 jam. Gunakan nilai waktu kerja Eukaliptus yang sudah dihitung.
\\(\\text{waktu kerja} = 1 \\times 40 + 12 = 52\\)
Hasil Kaktus: 52 jam.
Langkah 6: Waktu kerja Dahlia adalah 43 jam.
\\(\\text{waktu kerja} = 43\\)
Hasil Dahlia: 43 jam.
Semua waktu sudah dalam jam. Urutkan dari waktu paling singkat hingga paling lama, lalu pasangkan lencana 1 sampai 6.
Kesimpulan
1. Bambu; 2. Mawar; 3. Eukaliptus; 4. Dahlia; 5. Cemara; 6. Kaktus.
Isian pada simulasi (nomor lencana Eukaliptus, Bambu, Mawar, Cemara, Kaktus, Dahlia): 3 1 2 5 6 4
Jawaban: 1. Bambu; 2. Mawar; 3. Eukaliptus; 4. Dahlia; 5. Cemara; 6. Kaktus.
Urutan final:
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-06-kunci.png⟧`,
        tingkat: 'mudah',
        status: 'draft',
      },
    ],
  },
  // ── Line Graph ─────────────────────────────────────────────────────────
  {
    stimulus: {
      judul: `Area Cakupan · Line Graph`,
      isi: `Pada bulan Juli, sebuah perusahaan telepon seluler memiliki area cakupan seluas 6.250 mil persegi. Perusahaan tersebut berencana memperluas area cakupan sebesar 450 mil persegi per bulan. Pada bulan November, perusahaan juga mengambil alih jaringan operator lain seluas 900 mil persegi.
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-07-awal.png⟧`,
    },
    soal: [
      {
        nomor: 7,
        lesson: 'Line Graph',
        tipe: 'isian_singkat',
        pertanyaan: `Gambarkan area cakupan (dalam mil persegi) untuk setiap bulan.
Format jawaban: 5 bilangan dipisah spasi, tanpa titik ribuan dan tanpa satuan, berurutan: Agu, Sep, Okt, Nov, Des.`,
        kunci: '6700 7150 7600 8950 9400',
        pembahasan: `Jenis soal: Line Graph (tes interaktif): perubahan tetap per bulan dan satu kejadian sekali-jadi.
Diketahui
Nilai awal pada bulan Juli: 6.250 mil persegi (sebelum titik pertama, Agu).
Perubahan rutin: bertambah 450 mil persegi setiap bulan.
Kejadian sekali-jadi pada bulan November: bertambah 900 mil persegi di luar perubahan rutin.
Ditanyakan
Nilai pada setiap titik grafik, yaitu Agu, Sep, Okt, Nov, dan Des.
Pengerjaan
Setiap titik dihitung dari nilai titik sebelumnya:
\\(\\text{nilai titik} = \\text{nilai titik sebelumnya} \\pm \\text{perubahan rutin} \\pm \\text{kejadian sekali-jadi}\\)
Kejadian pada Nov dihitung sekali pada titik itu; pengaruhnya terbawa ke titik-titik sesudahnya.
\\(\\text{Agu} = 6.250 + 450 = 6.700\\)
\\(\\text{Sep} = 6.700 + 450 = 7.150\\)
\\(\\text{Okt} = 7.150 + 450 = 7.600\\)
\\(\\text{Nov} = 7.600 + 450 + 900 = 8.950\\)
\\(\\text{Des} = 8.950 + 450 = 9.400\\)
Kesimpulan
Geser titik Agu ke 6.700 mil persegi, Sep ke 7.150 mil persegi, Okt ke 7.600 mil persegi, Nov ke 8.950 mil persegi, dan Des ke 9.400 mil persegi, sehingga garis tersambung dari Agu sampai Des.
Isian pada simulasi (Agu, Sep, Okt, Nov, Des): 6700 7150 7600 8950 9400
Jawaban: Agu 6.700; Sep 7.150; Okt 7.600; Nov 8.950; Des 9.400.
Kondisi akhir (kunci):
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-07-kunci.png⟧`,
        tingkat: 'sedang',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      judul: `Nilai Rekening Saham · Line Graph`,
      isi: `Hendra menanamkan $6.000 pada hari Senin. Setiap hari setelahnya, nilai saham menurun sebesar 6% dari nilai awalnya. Pada hari Kamis, ia dikenai biaya administrasi sebesar $720.
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-08-awal.png⟧`,
    },
    soal: [
      {
        nomor: 8,
        lesson: 'Line Graph',
        tipe: 'isian_singkat',
        pertanyaan: `Gambarkan nilai rekening saham pada akhir setiap hari.
Format jawaban: 5 bilangan dipisah spasi, tanpa titik ribuan dan tanpa satuan, berurutan: Senin, Selasa, Rabu, Kamis, Jumat.`,
        kunci: '6000 5640 5280 4200 3840',
        pembahasan: `Jenis soal: Line Graph (tes interaktif): penurunan persen dari nilai awal dan satu kejadian sekali-jadi.
Diketahui
Nilai awal pada hari Senin: $6.000 (titik pertama).
Perubahan rutin: turun 6% dari nilai awal setiap hari (bukan dari nilai hari sebelumnya).
Kejadian sekali-jadi pada hari Kamis: berkurang $720 di luar perubahan rutin.
Ditanyakan
Nilai pada setiap titik grafik, yaitu Senin, Selasa, Rabu, Kamis, dan Jumat.
Pengerjaan
Setiap titik dihitung dari nilai titik sebelumnya:
\\(\\text{nilai titik} = \\text{nilai titik sebelumnya} \\pm \\text{perubahan rutin} \\pm \\text{kejadian sekali-jadi}\\)
Perubahan harian selalu dihitung dari nilai awal, jadi besarnya sama setiap hari:
\\(\\text{perubahan harian} = 6\\% \\times \\$6.000 = \\$360\\)
Kejadian pada Kamis dihitung sekali pada titik itu; pengaruhnya terbawa ke titik-titik sesudahnya.
Titik Senin adalah nilai awal:
\\(\\text{Senin} = \\$6.000\\)
\\(\\text{Selasa} = \\$6.000 - \\$360 = \\$5.640\\)
\\(\\text{Rabu} = \\$5.640 - \\$360 = \\$5.280\\)
\\(\\text{Kamis} = \\$5.280 - \\$360 - \\$720 = \\$4.200\\)
\\(\\text{Jumat} = \\$4.200 - \\$360 = \\$3.840\\)
Kesimpulan
Geser titik Senin ke $6.000, Selasa ke $5.640, Rabu ke $5.280, Kamis ke $4.200, dan Jumat ke $3.840, sehingga garis tersambung dari Senin sampai Jumat.
Isian pada simulasi (Senin, Selasa, Rabu, Kamis, Jumat): 6000 5640 5280 4200 3840
Jawaban: Senin $6.000; Selasa $5.640; Rabu $5.280; Kamis $4.200; Jumat $3.840.
Kondisi akhir (kunci):
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-08-kunci.png⟧`,
        tingkat: 'sedang',
        status: 'draft',
      },
    ],
  },
  // ── Pie Chart ──────────────────────────────────────────────────────────
  {
    stimulus: {
      judul: `Pesanan Toko Daring · Pie Chart (1 informasi kosong)`,
      isi: `Sebuah toko daring menerima 50.000 pesanan dalam satu bulan. Pesanan dikelompokkan menjadi kemeja (biru), celana (hijau), jaket (jingga), dan topi (merah).
Pesanan Kemeja: (dikosongkan, jumlahnya dicari)
Pesanan Celana: Jumlah pesanan celana sama dengan jumlah pesanan kemeja.
Pesanan Jaket: Jumlah pesanan jaket adalah 8 kali jumlah pesanan kemeja.
Pesanan Topi: Jumlah pesanan topi adalah 15 kali jumlah pesanan kemeja.
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-09-awal.png⟧`,
    },
    soal: [
      {
        nomor: 9,
        lesson: 'Pie Chart',
        tipe: 'isian_singkat',
        pertanyaan: `Sesuaikan diagram lingkaran untuk menunjukkan persentase tiap kelompok pesanan.
Format jawaban: 4 bilangan bulat dipisah spasi, tanpa tanda %, berurutan: Pesanan kemeja, Pesanan celana, Pesanan jaket, Pesanan topi.`,
        kunci: '4 4 32 60',
        pembahasan: `Jenis soal: Pie Chart (1 informasi kosong).
Diketahui
Jumlah seluruh pesanan: 50.000.
Jumlah pesanan jaket adalah 8 kali jumlah pesanan kemeja.
Jumlah pesanan topi adalah 15 kali jumlah pesanan kemeja.
Jumlah pesanan celana sama dengan jumlah pesanan kemeja.
Kotak Pesanan Kemeja kosong, jadi jumlah pesanan kemeja harus dicari dari jumlah seluruhnya.
Ditanyakan
Persentase setiap kategori (kemeja, celana, jaket, topi) pada diagram lingkaran, dalam kelipatan 1%.
Pengerjaan
Persentase tiap irisan adalah jumlah kategorinya dibagi jumlah seluruhnya:
\\(\\text{persentase} = \\frac{\\text{jumlah}}{\\text{total}} \\times 100\\%\\)
Misalkan jumlah pesanan kemeja adalah p, lalu nyatakan kategori lain dalam p:
\\(\\text{Pesanan Kemeja} = p\\)
\\(\\text{Pesanan Jaket} = 8 \\times \\text{Pesanan Kemeja} = 8 \\times p = 8p\\)
\\(\\text{Pesanan Topi} = 15 \\times \\text{Pesanan Kemeja} = 15 \\times p = 15p\\)
\\(\\text{Pesanan Celana} = \\text{Pesanan Kemeja} = p\\)
Jumlah keempat kategori sama dengan jumlah seluruhnya:
\\(p + p + 8p + 15p = 50.000\\)
\\(25p = 50.000\\)
\\(p = \\frac{50.000}{25} = 2.000\\)
Substitusikan p ke setiap kategori:
\\(\\text{Pesanan Kemeja} = p = 2.000\\)
\\(\\text{Pesanan Celana} = p = 2.000\\)
\\(\\text{Pesanan Jaket} = 8 \\times 2.000 = 16.000\\)
\\(\\text{Pesanan Topi} = 15 \\times 2.000 = 30.000\\)
Ubah setiap jumlah menjadi persentase dengan total 50.000:
\\(\\text{persentase Pesanan Kemeja} = \\frac{2.000}{50.000} \\times 100\\% = 4\\%\\)
\\(\\text{persentase Pesanan Celana} = \\frac{2.000}{50.000} \\times 100\\% = 4\\%\\)
\\(\\text{persentase Pesanan Jaket} = \\frac{16.000}{50.000} \\times 100\\% = 32\\%\\)
\\(\\text{persentase Pesanan Topi} = \\frac{30.000}{50.000} \\times 100\\% = 60\\%\\)
Keempat persentase berjumlah 100%:
\\(4\\% + 4\\% + 32\\% + 60\\% = 100\\%\\)
Kesimpulan
Atur irisan Pesanan Kemeja ke 4%, Pesanan Celana ke 4%, Pesanan Jaket ke 32%, dan Pesanan Topi ke 60%.
Isian pada simulasi (Pesanan kemeja, Pesanan celana, Pesanan jaket, Pesanan topi): 4 4 32 60
Jawaban: Kemeja 4% (2.000); Celana 4% (2.000); Jaket 32% (16.000); Topi 60% (30.000).
Kondisi akhir (kunci):
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-09-kunci.png⟧`,
        tingkat: 'mudah',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      judul: `Peserta Pelatihan · Pie Chart (informasi penuh)`,
      isi: `Sebuah lembaga pelatihan memiliki 20 peserta yang tersebar di empat kelas.
Kelas Akuntansi: Memiliki 2 peserta lebih banyak daripada Kelas Audit.
Kelas Perpajakan: Memiliki 2 peserta.
Kelas Audit: Memiliki jumlah peserta yang sama dengan Kelas Perpajakan.
Kelas Manajemen Risiko: Jumlah pesertanya 3 kali jumlah peserta Kelas Akuntansi.
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-10-awal.png⟧`,
    },
    soal: [
      {
        nomor: 10,
        lesson: 'Pie Chart',
        tipe: 'isian_singkat',
        pertanyaan: `Sesuaikan diagram lingkaran untuk menunjukkan proporsi peserta pada setiap kelas.
Format jawaban: 4 bilangan bulat dipisah spasi, tanpa tanda %, berurutan: Kelas Akuntansi, Kelas Perpajakan, Kelas Audit, Kelas Manajemen Risiko.`,
        kunci: '20 10 10 60',
        pembahasan: `Jenis soal: Pie Chart (informasi penuh).
Diketahui
Jumlah seluruh peserta: 20.
Kelas Perpajakan memiliki 2 peserta.
Kelas Audit memiliki jumlah peserta yang sama dengan Kelas Perpajakan.
Kelas Akuntansi memiliki 2 peserta lebih banyak daripada Kelas Audit.
Jumlah peserta Kelas Manajemen Risiko adalah 3 kali jumlah peserta Kelas Akuntansi.
Ditanyakan
Persentase setiap kategori (Kelas Akuntansi, Kelas Perpajakan, Kelas Audit, Kelas Manajemen Risiko) pada diagram lingkaran, dalam kelipatan 1%.
Pengerjaan
Persentase tiap irisan adalah jumlah kategorinya dibagi jumlah seluruhnya:
\\(\\text{persentase} = \\frac{\\text{jumlah}}{\\text{total}} \\times 100\\%\\)
Jumlah tiap kategori dihitung lebih dahulu dari keterangan, mulai dari kategori yang jumlahnya diketahui:
\\(\\text{Kelas Perpajakan} = 2\\)
\\(\\text{Kelas Audit} = \\text{Kelas Perpajakan} = 2\\)
\\(\\text{Kelas Akuntansi} = \\text{Kelas Audit} + 2 = 2 + 2 = 4\\)
\\(\\text{Kelas Manajemen Risiko} = 3 \\times \\text{Kelas Akuntansi} = 3 \\times 4 = 12\\)
Periksa bahwa jumlah keempat kategori sama dengan jumlah seluruhnya:
\\(4 + 2 + 2 + 12 = 20\\)
Ubah setiap jumlah menjadi persentase dengan total 20:
\\(\\text{persentase Kelas Akuntansi} = \\frac{4}{20} \\times 100\\% = 20\\%\\)
\\(\\text{persentase Kelas Perpajakan} = \\frac{2}{20} \\times 100\\% = 10\\%\\)
\\(\\text{persentase Kelas Audit} = \\frac{2}{20} \\times 100\\% = 10\\%\\)
\\(\\text{persentase Kelas Manajemen Risiko} = \\frac{12}{20} \\times 100\\% = 60\\%\\)
Keempat persentase berjumlah 100%:
\\(20\\% + 10\\% + 10\\% + 60\\% = 100\\%\\)
Kesimpulan
Atur irisan Kelas Akuntansi ke 20%, Kelas Perpajakan ke 10%, Kelas Audit ke 10%, dan Kelas Manajemen Risiko ke 60%.
Isian pada simulasi (Kelas Akuntansi, Kelas Perpajakan, Kelas Audit, Kelas Manajemen Risiko): 20 10 10 60
Jawaban: Kelas Akuntansi 20% (4); Kelas Perpajakan 10% (2); Kelas Audit 10% (2); Kelas Manajemen Risiko 60% (12).
Kondisi akhir (kunci):
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-10-kunci.png⟧`,
        tingkat: 'sedang',
        status: 'draft',
      },
    ],
  },
];
