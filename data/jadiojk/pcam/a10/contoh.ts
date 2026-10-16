import type { Kelompok } from '@/lib/skema';

/**
 * Contoh soal PCAM 10 OJK, Tahap 1 (Tes Potensi Dasar), dari BAB V dokumen riset
 * "JadiOJK - Riset PCAM dan MLE OJK 2026" (Product Management, Oktober 2026):
 * 5.1.1 Kemampuan Umum (24 soal) dan 5.1.2 Penalaran Numerik (8 soal).
 *
 * Ditulis tangan, BUKAN keluaran skrip/ke-data.mjs.
 *
 * Dokumen riset hanya memuat soal dan pilihan jawaban (dan tangkapan layar soal
 * interaktif). Kunci dan pembahasan TIDAK ada di sumber, jadi semuanya disusun
 * ulang dari soalnya: dihitung (soal numerik dan interaktif) atau dianalisis
 * polanya (soal figural). Karena itu semua soal berstatus 'draft'; jangan
 * dinaikkan ke 'direview' atau 'final' sebelum diperiksa tim akademik.
 *
 * Nomor soal berurutan per subtes. Urutan dan label di dokumen riset:
 *   Kemampuan Umum    1-2 Verbal; 3-18 Numerik (soal cerita 3-8, tabel 9-17,
 *                     grafik batang 18); 19-24 Figural
 *   Penalaran Numerik 1-2 Bar Chart; 3-4 Table; 5-6 Line Graph; 7-8 Pie Chart
 *
 * Gambar ada di public/gambar/jadiojk/ dengan nama pcam10-tpd-<ku|pn>-<nomor>-<bagian>.
 * Tiga tangkapan layar di dokumen riset sudah memperlihatkan jawabannya (Bar Chart
 * soal 2, Line Graph soal 2, Pie Chart soal 2), jadi dipasang di pembahasan, bukan
 * di soal, supaya mode latihan tidak membocorkan jawaban.
 */

/** 24 soal dari "5.1.1 Kemampuan Umum": verbal, numerik, dan figural. */
export const contohKemampuanUmum: Kelompok[] = [
  // ── Verbal (Verbal Reasoning) ──────────────────────────────────────────
  {
    stimulus: {
      isi: `Ada dua kategori dalam penerbangan sipil, yaitu penerbangan umum dan transportasi udara terjadwal. Penerbangan umum mencakup penerbangan pribadi dan komersial, namun tidak termasuk aktivitas penerbangan terjadwal. Penerbangan umum memiliki potensi yang sangat besar untuk mengubah cara orang bepergian menjadi lebih baik. Diperkenalkannya pesawat baru yang sangat ringan, yang memiliki biaya operasional lebih rendah, berarti secara teori orang dapat menggunakan ribuan bandara di seluruh dunia untuk lebih mendekati tujuan yang mereka pilih daripada jika melakukan perjalanan dengan penerbangan tradisional yang terjadwal. Penerbangan umum dapat juga diperluas ke sejumlah bidang, seperti jurnalisme, pekerjaan polisi, penerbangan medis darurat, penyemprotan tanaman dari udara, dan berbagai aktivitas udara lainnya. Namun demikian, memang ada hambatan signifikan, seperti harga pesawat dan pelatihan yang luar biasa mahal bagi kebanyakan orang serta persepsi masyarakat umum bahwa keselamatan pesawat kecil pribadi tidak baik.`,
    },
    soal: [
      {
        nomor: 1,
        tipe: 'benar_salah',
        pertanyaan: `Kemajuan dalam penerbangan umum dapat digunakan oleh layanan medis.`,
        opsi: [
          { label: 'A', teks: `Benar` },
          { label: 'B', teks: `Salah` },
          { label: 'C', teks: `Tidak Diketahui` },
        ],
        kunci: 'A',
        pembahasan: `Jenis soal: Verbal (Verbal Reasoning).
Bacaan menyebut bahwa penerbangan umum dapat diperluas ke sejumlah bidang, termasuk penerbangan medis darurat. Jadi penerbangan umum memang dapat dimanfaatkan oleh layanan medis, dan pernyataan itu BENAR.
Jawaban: A`,
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      isi: `Kebijakan upah minimum, yang pertama kali diperkenalkan dalam industri jasa dan menyebabkan penurunan dalam eksploitasi karyawan, merupakan hasil temuan dari sejumlah studi. Studi tersebut menegaskan bahwa upah minimum nasional adalah parameter penting dalam keamanan karyawan, dan para pelaku kampanye ini memperoleh sokongan penting dari serikat pekerja. Hal ini memberikan dukungan yang diperlukan untuk mendorong program-program Hubungan Ketenagakerjaan di banyak sektor pertanian dan industri, yang puncaknya adalah pembentukan Komisi Bayaran Rendah. Hal ini vital dalam mengajak kolaborasi dari perusahaan-perusahaan besar yang sebelumnya sudah menolak tuntutan untuk memperbaiki kestabilan pendapatan.`,
    },
    soal: [
      {
        nomor: 2,
        tipe: 'benar_salah',
        pertanyaan: `Eksploitasi karyawan merupakan isu penting bagi kebanyakan serikat pekerja.`,
        opsi: [
          { label: 'A', teks: `Benar` },
          { label: 'B', teks: `Salah` },
          { label: 'C', teks: `Tidak Diketahui` },
        ],
        kunci: 'C',
        pembahasan: `Jenis soal: Verbal (Verbal Reasoning).
Bacaan hanya menyebut bahwa kebijakan upah minimum menurunkan eksploitasi karyawan dan bahwa para pelaku kampanye memperoleh sokongan penting dari serikat pekerja. Bacaan tidak menyatakan bahwa eksploitasi karyawan adalah isu penting bagi kebanyakan serikat pekerja. Pernyataan itu tidak dapat dipastikan benar atau salah dari bacaan, jadi jawabannya TIDAK DIKETAHUI.
Jawaban: C`,
        status: 'draft',
      },
    ],
  },

  // ── Numerik: soal cerita ───────────────────────────────────────────────
  {
    soal: [
      {
        nomor: 3,
        tipe: 'pg',
        pertanyaan: `Seorang pembuat kue mengisi gelas takar dengan 3/4 cangkir air. Ia menuangkan 1/2 dari air tersebut ke dalam adonan, kemudian menumpahkan 1/8 cangkir air ke lantai.
Berapa banyak air yang harus ditambahkan ke sisa air dalam gelas agar jumlahnya menjadi 50% lebih banyak daripada jumlah air mula-mula?`,
        opsi: [
          { label: 'A', teks: `1/8 cangkir` },
          { label: 'B', teks: `3/8 cangkir` },
          { label: 'C', teks: `1/4 cangkir` },
          { label: 'D', teks: `1/2 cangkir` },
          { label: 'E', teks: `7/8 cangkir` },
        ],
        kunci: 'E',
        pembahasan: `Jenis soal: Soal Cerita - Bilangan dan Perbandingan.
Air mula-mula = 3/4 cangkir.
Dituang ke adonan = 1/2 × 3/4 = 3/8 cangkir, sisa 3/4 - 3/8 = 3/8 cangkir.
Tumpah 1/8 cangkir, sisa 3/8 - 1/8 = 2/8 = 1/4 cangkir.
Jumlah yang diinginkan = 50% lebih banyak dari mula-mula = 3/4 × 1,5 = 9/8 cangkir.
Air yang harus ditambahkan = 9/8 - 1/4 = 9/8 - 2/8 = 7/8 cangkir.
Jawaban: E`,
        status: 'draft',
      },
      {
        nomor: 4,
        tipe: 'pg',
        pertanyaan: `Jack dapat mengetik 80 kata per menit ketika mulai mengikuti kursus mengetik. Dua minggu setelah kursus dimulai, kecepatan mengetiknya meningkat 3%. Pada akhir kursus, Jack dapat mengetik seluruh dokumen yang terdiri atas 1.680 kata dalam 20 menit.
Berapa persentase peningkatan kecepatan mengetiknya dari awal hingga akhir kursus?`,
        opsi: [
          { label: 'A', teks: `3%` },
          { label: 'B', teks: `4%` },
          { label: 'C', teks: `5%` },
          { label: 'D', teks: `6%` },
          { label: 'E', teks: `7%` },
        ],
        kunci: 'C',
        pembahasan: `Jenis soal: Soal Cerita - Bilangan dan Perbandingan.
Kecepatan akhir = 1.680 kata ÷ 20 menit = 84 kata per menit.
Peningkatan dari awal (80 kata per menit) = (84 - 80) ÷ 80 × 100% = 5%.
Informasi kenaikan 3% setelah dua minggu tidak diperlukan, karena yang ditanya adalah peningkatan dari awal hingga akhir kursus.
Jawaban: C`,
        status: 'draft',
      },
      {
        nomor: 5,
        tipe: 'pg',
        pertanyaan: `Tiga karung gandum, dua karung jagung, dan satu karung oat memiliki berat yang sama dengan satu karung gandum, satu karung jagung, dan lima karung oat.
Jika dua karung jagung dan satu karung oat memiliki berat 26 pon, sedangkan satu karung jagung memiliki berat 10 pon, berapa berat satu karung gandum?`,
        opsi: [
          { label: 'A', teks: `4 pon` },
          { label: 'B', teks: `5 pon` },
          { label: 'C', teks: `6 pon` },
          { label: 'D', teks: `7 pon` },
          { label: 'E', teks: `8 pon` },
        ],
        kunci: 'D',
        pembahasan: `Jenis soal: Soal Cerita - Aljabar Dasar.
Misalkan berat satu karung gandum = g, jagung = j, dan oat = o.
3g + 2j + o = g + j + 5o, sehingga 2g + j = 4o.
Dari 2j + o = 26 dan j = 10: o = 26 - 20 = 6 pon.
Maka 2g + 10 = 4 × 6 = 24, jadi g = 7 pon.
Cek: 3(7) + 2(10) + 6 = 47 dan 7 + 10 + 5(6) = 47.
Jawaban: D`,
        status: 'draft',
      },
      {
        nomor: 6,
        tipe: 'pg',
        pertanyaan: `Jason mempertimbangkan untuk membeli mesin baru untuk membuat peralatan makan plastik. Mesin tersebut menghasilkan 1.000 buah peralatan makan dalam dua jam. Satu kotak berisi 50 buah dan dijual seharga $3,00.
Jika harga mesin $9.000 dan mesin beroperasi selama 24 jam sehari, berapa hari yang diperlukan agar hasil penjualan peralatan makan cukup untuk menutup harga mesin?`,
        opsi: [
          { label: 'A', teks: `2,5 hari` },
          { label: 'B', teks: `7,5 hari` },
          { label: 'C', teks: `15 hari` },
          { label: 'D', teks: `12,5 hari` },
          { label: 'E', teks: `18 hari` },
        ],
        kunci: 'D',
        pembahasan: `Jenis soal: Soal Cerita - Laju dan Waktu.
Mesin menghasilkan 1.000 buah dalam 2 jam = 500 buah per jam, jadi 500 × 24 = 12.000 buah per hari.
12.000 buah ÷ 50 buah per kotak = 240 kotak per hari, dengan penjualan 240 × $3,00 = $720 per hari.
Waktu untuk menutup harga mesin = $9.000 ÷ $720 = 12,5 hari.
Jawaban: D`,
        status: 'draft',
      },
      {
        nomor: 7,
        tipe: 'pg',
        pertanyaan: `Perusahaan XYZ membeli mesin baru pada bulan Maret seharga $50.000 dan menggunakan labanya untuk melunasi harga mesin tersebut. Laba pada bulan Maret adalah $7.876.
Jika laba setiap bulan meningkat 2% dibandingkan bulan sebelumnya, pada bulan apa harga mesin akan lunas seluruhnya?`,
        opsi: [
          { label: 'A', teks: `Juni` },
          { label: 'B', teks: `Juli` },
          { label: 'C', teks: `Agustus` },
          { label: 'D', teks: `September` },
          { label: 'E', teks: `Oktober` },
        ],
        kunci: 'D',
        pembahasan: `Jenis soal: Soal Cerita - Aritmatika Keuangan.
Laba bulanan dimulai dari $7.876 pada bulan Maret dan dikali 1,02 (naik 2%) tiap bulan berikutnya. Laba yang terkumpul sampai akhir tiap bulan:
• Maret: $7.876,00
• April: $15.909,52
• Mei: $24.103,71
• Juni: $32.461,78
• Juli: $40.987,02
• Agustus: $49.682,76 (masih kurang dari $50.000)
• September: $58.552,42 (sudah melampaui $50.000)
Harga mesin lunas seluruhnya pada bulan September.
Jawaban: D`,
        status: 'draft',
      },
      {
        nomor: 8,
        tipe: 'pg',
        pertanyaan: `Dalam satu minggu, James dapat menjual 15 unit Produk A dan 16 unit Produk B, Sally dapat menjual 25 unit Produk A dan 10 unit Produk B, sedangkan Andre dapat menjual 18 unit Produk A dan 13 unit Produk B.
Jika harga setiap unit Produk A adalah $35,75 dan setiap unit Produk B adalah $42,25, berapa selisih pendapatan penjualan antara penjual dengan pendapatan tertinggi dan penjual dengan pendapatan terendah?`,
        opsi: [
          { label: 'A', teks: `$91,00` },
          { label: 'B', teks: `$97,50` },
          { label: 'C', teks: `$104,00` },
          { label: 'D', teks: `$119,50` },
          { label: 'E', teks: `$123,50` },
        ],
        kunci: 'E',
        pembahasan: `Jenis soal: Soal Cerita - Aritmatika Keuangan.
Pendapatan James = 15 × $35,75 + 16 × $42,25 = $536,25 + $676,00 = $1.212,25.
Pendapatan Sally = 25 × $35,75 + 10 × $42,25 = $893,75 + $422,50 = $1.316,25 (tertinggi).
Pendapatan Andre = 18 × $35,75 + 13 × $42,25 = $643,50 + $549,25 = $1.192,75 (terendah).
Selisih = $1.316,25 - $1.192,75 = $123,50.
Jawaban: E`,
        status: 'draft',
      },
    ],
  },

  // ── Numerik: tabel dan grafik batang ───────────────────────────────────
  {
    stimulus: {
      judul: 'Tabel · Staf dan Teknologi Informasi',
      isi: `⟦gambar:gambar/jadiojk/pcam10-tpd-ku-09-tabel.png⟧`,
    },
    soal: [
      {
        nomor: 9,
        tipe: 'pg',
        pertanyaan: `Berapa perbandingan antara komputer untuk pengarsipan dan untuk pengolahan kata di Provo Publishers?`,
        opsi: [
          { label: 'A', teks: `1:7` },
          { label: 'B', teks: `1:6` },
          { label: 'C', teks: `1:2` },
          { label: 'D', teks: `7:1` },
          { label: 'E', teks: `14:1` },
        ],
        kunci: 'A',
        pembahasan: `Jenis soal: Tabel - Bilangan dan Perbandingan.
Di kolom Provo Publishers, jumlah komputer untuk pengarsipan = 8 dan untuk pengolahan kata = 56.
Perbandingan 8 : 56 = 1 : 7 (kedua bilangan dibagi 8).
Jawaban: A`,
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      judul: 'Tabel · Profil Pekerjaan Sarjana dan Non-Sarjana, Distrik Tartleton',
      isi: `⟦gambar:gambar/jadiojk/pcam10-tpd-ku-10-12-tabel.png⟧`,
    },
    soal: [
      {
        nomor: 10,
        tipe: 'pg',
        pertanyaan: `Kira-kira berapa persentase dari sarjana dan non-sarjana yang merupakan wiraswastawan?`,
        opsi: [
          { label: 'A', teks: `10%` },
          { label: 'B', teks: `14%` },
          { label: 'C', teks: `17%` },
          { label: 'D', teks: `22%` },
          { label: 'E', teks: `23%` },
        ],
        kunci: 'B',
        pembahasan: `Jenis soal: Tabel - Bilangan dan Perbandingan.
Wiraswasta: sarjana 210.000 + non-sarjana 198.000 = 408.000 orang.
Seluruh sarjana dan non-sarjana: 2.100.000 + 900.000 = 3.000.000 orang.
Persentase = 408.000 ÷ 3.000.000 × 100% = 13,6%, kira-kira 14%.
Jawaban: B`,
        status: 'draft',
      },
      {
        nomor: 11,
        tipe: 'pg',
        pertanyaan: `Jika diperkirakan jumlah sarjana yang bekerja di sektor Kesehatan tiap tahunnya turun sebesar 20% sementara jumlah non-sarjana diperkirakan tetap sama, berapa tahun yang dibutuhkan karyawan non-sarjana untuk melampaui jumlah karyawan sarjana di sektor Kesehatan?`,
        opsi: [
          { label: 'A', teks: `1` },
          { label: 'B', teks: `2` },
          { label: 'C', teks: `3` },
          { label: 'D', teks: `4` },
          { label: 'E', teks: `5` },
        ],
        kunci: 'C',
        pembahasan: `Jenis soal: Tabel - Persentase dan Pertumbuhan.
Sektor Kesehatan: sarjana 315.000, non-sarjana 162.000 (tetap). Jumlah sarjana turun 20% per tahun, artinya dikali 0,8:
• Tahun ke-1: 252.000
• Tahun ke-2: 201.600
• Tahun ke-3: 161.280
Baru pada tahun ke-3 jumlah sarjana (161.280) turun di bawah non-sarjana (162.000).
Jawaban: C`,
        status: 'draft',
      },
      {
        nomor: 12,
        tipe: 'pg',
        pertanyaan: `Jika jumlah sarjana yang bekerja di sektor Pendidikan tetap sama sementara jumlah non-sarjana naik sebesar 15% per tahun, berapa tahun yang dibutuhkan jumlah non-sarjana untuk melampaui jumlah sarjana yang bekerja di sektor Pendidikan?`,
        opsi: [
          { label: 'A', teks: `3` },
          { label: 'B', teks: `4` },
          { label: 'C', teks: `5` },
          { label: 'D', teks: `6` },
          { label: 'E', teks: `7` },
        ],
        kunci: 'E',
        pembahasan: `Jenis soal: Tabel - Persentase dan Pertumbuhan.
Sektor Pendidikan: sarjana 294.000 (tetap), non-sarjana 117.000 naik 15% per tahun, artinya dikali 1,15:
• Tahun ke-5: ≈ 235.329
• Tahun ke-6: ≈ 270.628 (masih di bawah 294.000)
• Tahun ke-7: ≈ 311.222 (sudah melampaui 294.000)
Jawaban: E`,
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      judul: 'Tabel · Biaya Produksi per Lini Produk dan Bulan',
      isi: `⟦gambar:gambar/jadiojk/pcam10-tpd-ku-13-14-tabel.png⟧`,
    },
    soal: [
      {
        nomor: 13,
        tipe: 'pg',
        pertanyaan: `Berapa selisih biaya rata-rata per mesin yang digunakan antara Lini A dan Lini C pada bulan Agustus?`,
        opsi: [
          { label: 'A', teks: `22` },
          { label: 'B', teks: `51` },
          { label: 'C', teks: `5.912` },
          { label: 'D', teks: `430.000` },
          { label: 'E', teks: `107.650` },
        ],
        kunci: 'C',
        pembahasan: `Jenis soal: Tabel - Rata-rata.
Biaya total tiap lini = unit yang dihasilkan (tabel dalam ribuan) × biaya rata-rata per unit. Biaya per mesin = biaya total ÷ jumlah mesin.
Agustus, Lini A: 505.000 × $0,62 = $313.100; dibagi 37 mesin = ≈ $8.462,16 per mesin.
Agustus, Lini C: 935.000 × $0,45 = $420.750; dibagi 165 mesin = $2.550 per mesin.
Selisih = $8.462,16 - $2.550,00 ≈ $5.912.
Jawaban: C`,
        status: 'draft',
      },
      {
        nomor: 14,
        tipe: 'pg',
        pertanyaan: `Berapa biaya rata-rata per mesin yang digunakan di seluruh lini pada bulan Juni?`,
        opsi: [
          { label: 'A', teks: `875` },
          { label: 'B', teks: `3.520` },
          { label: 'C', teks: `3.537` },
          { label: 'D', teks: `4.752` },
          { label: 'E', teks: `4.985` },
        ],
        kunci: 'B',
        pembahasan: `Jenis soal: Tabel - Rata-rata.
Juni, biaya total tiap lini = unit (ribuan) × biaya rata-rata per unit:
• Lini A: 201.000 × $0,62 = $124.620 (25 mesin)
• Lini B: 308.000 × $0,54 = $166.320 (35 mesin)
• Lini C: 214.000 × $0,45 = $96.300 (50 mesin)
Biaya total = $387.240; jumlah mesin = 25 + 35 + 50 = 110.
Biaya rata-rata per mesin seluruh lini = $387.240 ÷ 110 ≈ $3.520.
Opsi D (4.752) dan E (4.985) adalah biaya per mesin Lini B dan Lini A saja, bukan seluruh lini.
Jawaban: B`,
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      judul: 'Tabel · Hasil Produksi ABC Products Inc.',
      isi: `⟦gambar:gambar/jadiojk/pcam10-tpd-ku-15-tabel.png⟧
Terjemahan label tabel: hasil produksi ABC Products Inc.; produk; harga jual per unit; produksi maksimum¹; total biaya per unit; biaya tenaga kerja; biaya bahan baku; biaya pengiriman. ¹Produksi maksimum adalah jumlah unit terbanyak yang dapat diproduksi dalam satu bulan.
Tabel menunjukkan data produksi rata-rata tiga produk selama satu bulan terakhir. Selisih antara harga jual dan total biaya merupakan laba perusahaan untuk setiap unit.`,
    },
    soal: [
      {
        nomor: 15,
        tipe: 'pg',
        pertanyaan: `Jika metode produksi baru memungkinkan biaya tenaga kerja Produk C turun menjadi $3,45 per unit sekaligus meningkatkan produksi maksimum menjadi 250 unit per bulan, berapa persentase kenaikan laba perusahaan dari produk tersebut?`,
        opsi: [
          { label: 'A', teks: `119%` },
          { label: 'B', teks: `200%` },
          { label: 'C', teks: `252%` },
          { label: 'D', teks: `288%` },
          { label: 'E', teks: `322%` },
        ],
        kunci: 'B',
        pembahasan: `Jenis soal: Tabel - Aritmatika Keuangan.
Produk C sebelumnya: biaya per unit = $7,25 + $2,65 + $0,10 = $10,00; laba per unit = $12,50 - $10,00 = $2,50. Dengan produksi maksimum 210 unit, laba = 210 × $2,50 = $525.
Metode baru: biaya per unit = $3,45 + $2,65 + $0,10 = $6,20; laba per unit = $12,50 - $6,20 = $6,30. Dengan 250 unit, laba = 250 × $6,30 = $1.575.
Kenaikan laba = ($1.575 - $525) ÷ $525 × 100% = 200%.
Jawaban: B`,
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      judul: 'Tabel · Data Penjualan ABC RV Sales',
      isi: `⟦gambar:gambar/jadiojk/pcam10-tpd-ku-16-tabel.png⟧
Terjemahan label tabel: data penjualan ABC RV Sales; model RV; harga jual; laba¹; bonus garansi²; unit terjual; jumlah garansi. ¹Persentase harga jual yang menjadi laba ABC RV Sales. ²Persentase harga jual yang diberikan kepada ABC RV Sales untuk setiap garansi yang terjual.
Tabel menunjukkan penjualan ABC RV Sales selama satu tahun kalender. Baru-baru ini, gangguan komputer menyebabkan perusahaan kehilangan catatan jumlah unit model Lumberman yang terjual selama tahun tersebut.`,
    },
    soal: [
      {
        nomor: 16,
        tipe: 'pg',
        pertanyaan: `Jika pemilik mengetahui bahwa total laba perusahaan, termasuk bonus garansi, adalah $363.570 untuk tahun tersebut, berapa unit Lumberman yang terjual?`,
        opsi: [
          { label: 'A', teks: `15` },
          { label: 'B', teks: `16` },
          { label: 'C', teks: `18` },
          { label: 'D', teks: `23` },
          { label: 'E', teks: `35` },
        ],
        kunci: 'C',
        pembahasan: `Jenis soal: Tabel - Aljabar Dasar.
Treeline: laba 22% × $39.000 = $8.580 per unit × 14 unit = $120.120. Bonus garansi 9% × $39.000 = $3.510 × 7 garansi = $24.570.
Lumberman: bonus garansi 8% × $48.000 = $3.840 × 12 garansi = $46.080. Laba per unit 20% × $48.000 = $9.600; misalkan terjual x unit, labanya 9.600x.
Total laba: $120.120 + $24.570 + $46.080 + 9.600x = $363.570, sehingga 9.600x = $172.800 dan x = 18 unit.
Jawaban: C`,
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      judul: 'Tabel · Harga Tangki Ikan, Tropical Fish Tanks Ltd',
      isi: `⟦gambar:gambar/jadiojk/pcam10-tpd-ku-17-tabel.png⟧`,
    },
    soal: [
      {
        nomor: 17,
        tipe: 'pg',
        pertanyaan: `Untuk tangki ikan terbesar di Tropical Fish Tanks Ltd, berapa harga satu sentimeter kubik?`,
        opsi: [
          { label: 'A', teks: `£0,0004` },
          { label: 'B', teks: `£0,002` },
          { label: 'C', teks: `£0,02` },
          { label: 'D', teks: `£239,47` },
          { label: 'E', teks: `£478,93` },
        ],
        kunci: 'A',
        pembahasan: `Jenis soal: Tabel - Pengukuran dan Konversi Satuan.
Tangki terbesar: tinggi 1,25 m dan lebar 1,50 m, harga £449. Menurut catatan tabel, semua tangki berkedalaman 0,5 m.
Volume = 1,25 × 1,50 × 0,5 = 0,9375 m³ = 937.500 cm³ (1 m³ = 1.000.000 cm³).
Harga per cm³ = £449 ÷ 937.500 ≈ £0,00048, paling dekat dengan £0,0004 (opsi A).
Opsi E (£478,93) adalah harga per meter kubik, bukan per sentimeter kubik.
Jawaban: A`,
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      judul: 'Grafik Batang · Motor yang Diproduksi menurut Tim Produksi',
      isi: `⟦gambar:gambar/jadiojk/pcam10-tpd-ku-18-grafik.png⟧
Terjemahan label grafik: jumlah motor yang diproduksi menurut tim produksi; sumbu vertikal menunjukkan jumlah motor; sumbu horizontal menunjukkan tim produksi.
Sebanyak 25% motor dari Tim Produksi A mengalami cacat, 6% dari Tim Produksi B mengalami cacat, 9% dari Tim Produksi C mengalami cacat, 15% dari Tim Produksi D mengalami cacat, dan 13% dari Tim Produksi E mengalami cacat.`,
    },
    soal: [
      {
        nomor: 18,
        tipe: 'pg',
        pertanyaan: `Tim produksi mana yang menghasilkan motor tanpa cacat paling banyak?`,
        opsi: [
          { label: 'A', teks: `Tim A` },
          { label: 'B', teks: `Tim B` },
          { label: 'C', teks: `Tim C` },
          { label: 'D', teks: `Tim D` },
          { label: 'E', teks: `Tim E` },
        ],
        kunci: 'D',
        pembahasan: `Jenis soal: Grafik Batang - Persentase dan Perbandingan.
Jumlah motor dari grafik: A 4.500; B 2.500; C 3.500; D 4.000; E 3.000. Motor tanpa cacat = jumlah × (100% - persen cacat):
• Tim A: 4.500 × 75% = 3.375
• Tim B: 2.500 × 94% = 2.350
• Tim C: 3.500 × 91% = 3.185
• Tim D: 4.000 × 85% = 3.400
• Tim E: 3.000 × 87% = 2.610
Terbanyak: Tim D. Tim A memproduksi paling banyak motor, tetapi 25% cacat membuat motor mulusnya berada di urutan kedua.
Jawaban: D`,
        status: 'draft',
      },
    ],
  },

  // ── Figural ────────────────────────────────────────────────────────────
  {
    soal: [
      {
        nomor: 19,
        tipe: 'pg',
        pertanyaan: `⟦gambar:gambar/jadiojk/pcam10-tpd-ku-19-soal.png⟧
Gunakan gambar di bagian atas untuk menentukan jawaban yang benar dari pilihan di bawah. Pilih jawaban yang menggantikan tanda tanya. Jika tidak ada tanda tanya, pilih jawaban yang merupakan kelanjutan dari urutan tersebut.`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-ku-19-a.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-ku-19-b.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-ku-19-c.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-ku-19-d.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-ku-19-e.png⟧` },
        ],
        kunci: 'C',
        pembahasan: `Jenis soal: Figural Serial - The Next Box.
Pola pada deret lingkaran:
• Arah panah berputar 90° searah jarum jam tiap langkah: kanan, bawah, kiri, atas, kanan, lalu bawah.
• Warna latar berulang tiap tiga langkah: abu-abu, putih, putih, abu-abu, putih, lalu putih.
• Titik hitam hanya ada di langkah ganjil (1, 3, 5), jadi langkah genap (2, 4, 6) tanpa titik.
Pengganti tanda tanya (langkah ke-6): latar putih, panah ke bawah, tanpa titik.
Jawaban: C`,
        status: 'draft',
      },
      {
        nomor: 20,
        tipe: 'pg',
        pertanyaan: `⟦gambar:gambar/jadiojk/pcam10-tpd-ku-20-soal.png⟧
Gunakan gambar di bagian atas untuk menentukan jawaban yang benar dari pilihan di bawah. Pilih jawaban yang menggantikan tanda tanya. Jika tidak ada tanda tanya, pilih jawaban yang merupakan kelanjutan dari urutan tersebut.`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-ku-20-a.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-ku-20-b.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-ku-20-c.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-ku-20-d.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-ku-20-e.png⟧` },
        ],
        kunci: 'C',
        pembahasan: `Jenis soal: Figural Matriks - Kotak 5x5.
Setiap baris dan setiap kolom berisi kelima simbol (hati, lingkaran, persegi, segitiga, bintang) tepat satu kali. Sel bertanda tanya terdiri dari dua kotak: baris ke-4 dan baris ke-5 pada kolom ke-3.
• Kolom ke-3 sudah berisi persegi, hati, dan bintang, jadi sisanya segitiga dan lingkaran.
• Baris ke-4 (bintang, persegi, ?, hati, lingkaran) belum punya segitiga, jadi kotak atas = segitiga.
• Baris ke-5 (segitiga, bintang, ?, persegi, hati) belum punya lingkaran, jadi kotak bawah = lingkaran.
Jawaban: C (segitiga di atas, lingkaran di bawah)`,
        status: 'draft',
      },
      {
        nomor: 21,
        tipe: 'pg',
        pertanyaan: `⟦gambar:gambar/jadiojk/pcam10-tpd-ku-21-soal.png⟧
Gunakan gambar di bagian atas untuk menentukan jawaban yang benar dari pilihan di bawah. Pilih jawaban yang menggantikan tanda tanya. Jika tidak ada tanda tanya, pilih jawaban yang merupakan kelanjutan dari urutan tersebut.`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-ku-21-a.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-ku-21-b.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-ku-21-c.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-ku-21-d.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-ku-21-e.png⟧` },
        ],
        kunci: 'D',
        pembahasan: `Jenis soal: Figural Matriks - Kotak 5x6.
Tanda tanya mewakili empat kotak sekaligus, yaitu baris ke-4 kolom 1 sampai 4. Dua pola berjalan bersamaan:
• Warna mengikuti baris. Baris ganjil (1, 3, 5): segitiga dan lingkaran berwarna putih, persegi dan segi-enam berwarna hitam. Baris genap (2, 4): kebalikannya, persegi dan segi-enam putih, segitiga dan lingkaran hitam.
• Isi tiap kolom selalu sama: satu segitiga, satu lingkaran, satu segi-enam, dan dua persegi (terlihat jelas di kolom 5 dan 6 yang lengkap). Bentuk yang belum ada di baris ke-4 pada kolom 1 sampai 4 berturut-turut adalah persegi, lingkaran, segitiga, dan segi-enam.
Dengan warna baris genap, urutannya menjadi persegi putih, lingkaran hitam, segitiga hitam, segi-enam putih.
Jawaban: D`,
        status: 'draft',
      },
      {
        nomor: 22,
        tipe: 'pg',
        pertanyaan: `⟦gambar:gambar/jadiojk/pcam10-tpd-ku-22-soal.png⟧
Gunakan gambar di bagian atas untuk menentukan jawaban yang benar dari pilihan di bawah. Pilih jawaban yang menggantikan tanda tanya. Jika tidak ada tanda tanya, pilih jawaban yang merupakan kelanjutan dari urutan tersebut.`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-ku-22-a.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-ku-22-b.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-ku-22-c.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-ku-22-d.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-ku-22-e.png⟧` },
        ],
        kunci: 'E',
        pembahasan: `Jenis soal: Figural Matriks - Kotak 2x2 Bersekat.
Kotak besar terdiri dari empat segitiga sudut (di pojok) dan empat segitiga tengah (membentuk belah ketupat). Yang kosong adalah segitiga sudut kiri-bawah. Pola yang terbaca:
• Bentuk mengikuti kolom: kolom kiri berisi lingkaran (segitiga sudut) dan bentuk daun (segitiga tengah), kolom kanan berisi persegi (sudut) dan bentuk busur (tengah). Jadi bentuk yang hilang adalah lingkaran, dan hanya B dan E yang berbentuk lingkaran.
• Tiap bentuk dibagi dua oleh satu garis diagonal, dan tiap belahan punya pola isi (garis miring, garis tegak, garis datar, hitam, bertitik, putih berbintang, hitam berlingkaran putih, putih berbalok hitam). Bergerak searah jarum jam dari satu segitiga ke segitiga berikutnya, satu belahan ikut berpindah dengan diputar 90° berlawanan arah jarum jam, sedangkan belahan lainnya diganti pola baru.
• Rangkaian yang dimulai dari segitiga tengah kiri-atas (putih berbintang + hitam) berlanjut ke sudut kanan-atas (putih berbintang + hitam berlingkaran putih), lalu tengah kanan-bawah (hitam berlingkaran putih + bertitik). Belahan bertitik ikut berpindah ke segitiga sudut kiri-bawah (di sisi kanan-bawah), sedangkan belahan hitam berlingkaran putih kembali menjadi hitam polos seperti di awal rangkaian.
Hasilnya lingkaran dengan belahan kiri-atas hitam dan belahan kanan-bawah bertitik.
Jawaban: E
Catatan: ini soal figural yang paling rumit. Analisis pola di atas disusun tim, bukan dari dokumen riset, dan kuncinya paling perlu diperiksa ulang oleh tim akademik.`,
        status: 'draft',
      },
      {
        nomor: 23,
        tipe: 'pg',
        pertanyaan: `⟦gambar:gambar/jadiojk/pcam10-tpd-ku-23-soal.png⟧
Gunakan gambar di bagian atas untuk menentukan jawaban yang benar dari pilihan di bawah. Pilih jawaban yang menggantikan tanda tanya. Jika tidak ada tanda tanya, pilih jawaban yang merupakan kelanjutan dari urutan tersebut.`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-ku-23-a.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-ku-23-b.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-ku-23-c.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-ku-23-d.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-ku-23-e.png⟧` },
        ],
        kunci: 'A',
        pembahasan: `Jenis soal: Figural Matriks - Kotak 3x3.
Tiap kotak berisi enam simbol (persegi, lingkaran putih, lingkaran hitam) yang sebagian dihubungkan garis. Pada delapan kotak yang terlihat, jumlah garis mendatar selalu sama dengan jumlah lingkaran hitam. Contohnya kotak kiri-bawah punya 3 lingkaran hitam dan 3 garis mendatar, kotak kanan-bawah punya 2 dan 2. Kotak yang hilang harus mengikuti pola yang sama:
• A: 2 lingkaran hitam dan 2 garis mendatar (sesuai).
• B dan E: 1 lingkaran hitam dan tanpa garis mendatar (hanya garis tegak).
• C: 1 lingkaran hitam dan 3 garis mendatar.
• D: 1 lingkaran hitam dan 2 garis mendatar.
Pendukung lain: pada kotak sebelah kirinya dan sebelah kanannya, dua simbol dalam tiap pasangan (baris) selalu berbeda, dan hanya A yang juga demikian.
Jawaban: A`,
        status: 'draft',
      },
      {
        nomor: 24,
        tipe: 'pg',
        pertanyaan: `⟦gambar:gambar/jadiojk/pcam10-tpd-ku-24-soal.png⟧
Gunakan gambar di bagian atas untuk menentukan jawaban yang benar dari pilihan di bawah. Pilih jawaban yang menggantikan tanda tanya. Jika tidak ada tanda tanya, pilih jawaban yang merupakan kelanjutan dari urutan tersebut.`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-ku-24-a.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-ku-24-b.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-ku-24-c.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-ku-24-d.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-ku-24-e.png⟧` },
        ],
        kunci: 'A',
        pembahasan: `Jenis soal: Figural Serial - The Next Double Box.
Pilihan jawaban hanya melengkapi kotak atas; kotak bawah (tiga belah ketupat) sudah tersedia di kotak ke-5. Pola kotak atas:
• Panah: atas, bawah, kiri, kanan, lalu kembali ke atas pada kotak ke-5.
• Persegi kecil di tepi kotak: kiri, atas, kanan, atas, lalu kembali ke kiri (bergerak bolak-balik).
• Persegi besar yang membingkai satu lingkaran: tidak ada, di kiri-atas, tidak ada, di kiri-bawah, lalu tidak ada pada kotak ke-5.
• Warna lingkaran: selalu satu hitam, sedangkan jumlah abu-abu dan putih bergantian: 1 abu-abu + 2 putih, 2 abu-abu + 1 putih, 1 abu-abu + 2 putih, 2 abu-abu + 1 putih, lalu 1 abu-abu + 2 putih pada kotak ke-5. Lingkaran kiri-bawah bergantian putih dan abu-abu (putih, abu-abu, putih, abu-abu, lalu putih).
Hanya A yang memenuhi semuanya: panah ke atas, persegi kecil di kiri, tanpa persegi besar, lingkaran kiri-atas putih, kanan-atas abu-abu, kiri-bawah putih, kanan-bawah hitam. B (panah ke bawah), C dan D (dua lingkaran abu-abu), D juga persegi kecilnya di kanan, serta E (persegi besar dan dua lingkaran hitam) melanggar salah satu pola.
Jawaban: A`,
        status: 'draft',
      },
    ],
  },
];

/**
 * 8 soal dari "5.1.2 Penalaran Numerik": tes interaktif. Jawabannya berupa
 * kondisi akhir grafik atau pilihan per tab, jadi tipenya isian singkat dan
 * kuncinya berupa teks.
 */
export const contohPenalaranNumerik: Kelompok[] = [
  // ── Bar Chart ──────────────────────────────────────────────────────────
  {
    stimulus: {
      judul: 'Asuransi · Bar Chart',
      isi: `• Biaya asuransi mencakup biaya yang ditanggung sendiri dan premi.
• Tahun 1: total biaya = $1.500; biaya yang ditanggung sendiri = $300.
• Tahun 2: total biaya naik 20%; premi naik 20%.
⟦gambar:gambar/jadiojk/pcam10-tpd-pn-01-soal.png⟧`,
    },
    soal: [
      {
        nomor: 1,
        tipe: 'isian_singkat',
        pertanyaan: `Atur total biaya asuransi dan persentase biaya yang ditanggung sendiri serta premi.`,
        kunci: `Tahun 1: total $1.500, ditanggung sendiri 20% ($300), premi 80% ($1.200). Tahun 2: total $1.800, ditanggung sendiri 20% ($360), premi 80% ($1.440).`,
        pembahasan: `Jenis soal: Bar Chart (tes interaktif).
Tahun 1: total $1.500; biaya yang ditanggung sendiri $300 = 20%; premi = $1.500 - $300 = $1.200 = 80%.
Tahun 2: total naik 20%, jadi $1.500 × 1,2 = $1.800. Premi naik 20%, jadi $1.200 × 1,2 = $1.440. Biaya yang ditanggung sendiri = $1.800 - $1.440 = $360, yaitu 20% dari $1.800.
Pada tampilan awal di gambar soal, kedua batang masih berpembagian 50% / 50% (Tahun 1 = 1500, Tahun 2 = 1000), dan harus diatur ke nilai di atas.`,
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      judul: 'Pendapatan Penjualan · Bar Chart',
      isi: `• Total pendapatan penjualan pada Kuartal 1 adalah $120 juta.
• Total pendapatan penjualan pada Kuartal 2 turun $10 juta dibandingkan Kuartal 1.
• Pendapatan penjualan wilayah Timur pada Kuartal 1 adalah $78 juta.
• Pendapatan penjualan wilayah Barat meningkat $46 juta dari Kuartal 1 ke Kuartal 2.`,
    },
    soal: [
      {
        nomor: 2,
        tipe: 'isian_singkat',
        pertanyaan: `Atur pendapatan penjualan per kuartal dalam satuan juta serta persentase kontribusi wilayah Timur dan Barat.`,
        kunci: `Kuartal 1: total $120 juta, Timur 65% ($78 juta), Barat 35% ($42 juta). Kuartal 2: total $110 juta, Timur 20% ($22 juta), Barat 80% ($88 juta).`,
        pembahasan: `Jenis soal: Bar Chart (tes interaktif).
Kuartal 1: total $120 juta; Timur $78 juta = 65%; Barat = $120 - $78 = $42 juta = 35%.
Kuartal 2: total = $120 - $10 = $110 juta; Barat = $42 + $46 = $88 juta = 80%; Timur = $110 - $88 = $22 juta = 20%.
Tangkapan layar di dokumen riset sudah memperlihatkan kondisi akhir ini (batang Kuartal 1 = 120 dengan 65% / 35%, batang Kuartal 2 = 110 dengan 20% / 80%):
⟦gambar:gambar/jadiojk/pcam10-tpd-pn-02-jawaban.png⟧`,
        status: 'draft',
      },
    ],
  },

  // ── Table ──────────────────────────────────────────────────────────────
  {
    stimulus: {
      judul: 'Penjualan · Table (2 opsi)',
      isi: `Target penjualan kuartal tercapai apabila:
• Total penjualan selama tiga bulan sekurang-kurangnya €75.000, DAN
• Rata-rata pendapatan penjualan yang dicapai pada kuartal tersebut adalah 50% di atas target.`,
    },
    soal: [
      {
        nomor: 3,
        tipe: 'isian_singkat',
        pertanyaan: `Tentukan apakah setiap orang mencapai target penjualan kuartalnya.
Setiap tabel di bawah mewakili tampilan tabel ketika tab nama tersebut dipilih.

Tab Orang A
⟦gambar:gambar/jadiojk/pcam10-tpd-pn-03-orang-a.png⟧
A. Mencapai target
B. Tidak mencapai target

Tab Orang B
⟦gambar:gambar/jadiojk/pcam10-tpd-pn-03-orang-b.png⟧
A. Mencapai target
B. Tidak mencapai target

Tab Orang C
⟦gambar:gambar/jadiojk/pcam10-tpd-pn-03-orang-c.png⟧
A. Mencapai target
B. Tidak mencapai target

Tab Orang D
⟦gambar:gambar/jadiojk/pcam10-tpd-pn-03-orang-d.png⟧
A. Mencapai target
B. Tidak mencapai target`,
        kunci: `Orang A: Mencapai target. Orang B: Tidak mencapai target. Orang C: Tidak mencapai target. Orang D: Tidak mencapai target.`,
        pembahasan: `Jenis soal: Table, 2 opsi (satu tab per orang).
Target per bulan: Juli €20.000, Agustus €15.000, September €35.000, jadi target tiga bulan €70.000. "Rata-rata 50% di atas target" berarti total tiga bulan minimal 1,5 × €70.000 = €105.000 (rata-rata €35.000 per bulan).
• Orang A: €23.000 + €38.000 + €47.000 = €108.000, atau 54,3% di atas target. Kedua syarat terpenuhi: Mencapai target.
• Orang B: €19.000 + €22.000 + €34.000 = €75.000. Syarat total tepat terpenuhi, tetapi hanya 7,1% di atas target: Tidak mencapai target.
• Orang C: €23.000 + €15.500 + €36.000 = €74.500, kurang dari €75.000: Tidak mencapai target.
• Orang D: €34.500 + €21.500 + €48.500 = €104.500. Syarat total terpenuhi, tetapi hanya 49,3% di atas target (kurang €500 dari €105.000): Tidak mencapai target.
Catatan: tangkapan layar tab Orang D di dokumen riset menampilkan Goal Status "Met". Hitungan di atas tidak mendukungnya, kecuali "rata-rata di atas target" dibaca sebagai rata-rata persentase kelebihan per bulan (72,5%, 43,3%, dan 38,6%; rata-ratanya 51,5%), yang membuat Orang D mencapai target. Mohon dikonfirmasi tim akademik.`,
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      judul: 'Komisi · Table (3-4 opsi)',
      isi: `Komisi penjualan ditentukan berdasarkan ketentuan berikut:
• Jumlah penjualan bersih per minggu = penjualan per minggu dikurangi pembatalan per minggu, dengan 5 hari kerja per minggu.
• Rata-rata nilai penjualan dihitung dari total pendapatan per minggu dibagi jumlah penjualan bersih per minggu.
• Jika rata-rata nilai penjualan £0–£40, tidak ada komisi.
• Jika rata-rata nilai penjualan £41–£100, komisi sebesar 5%.
• Jika rata-rata nilai penjualan £101 atau lebih, komisi sebesar 10%.`,
    },
    soal: [
      {
        nomor: 4,
        tipe: 'isian_singkat',
        pertanyaan: `Tentukan kategori komisi yang tepat untuk setiap karyawan.
Keterangan tabel: Total revenue per week = total pendapatan per minggu; Sales per week = penjualan per minggu; Average cancellations per day = rata-rata pembatalan per hari; Commission Earned = komisi yang diperoleh.

Tab Orang A
⟦gambar:gambar/jadiojk/pcam10-tpd-pn-04-orang-a.png⟧
A. Tanpa komisi
B. 5%
C. 10%

Tab Orang B
⟦gambar:gambar/jadiojk/pcam10-tpd-pn-04-orang-b.png⟧
A. Tanpa komisi
B. 5%
C. 10%

Tab Orang C
⟦gambar:gambar/jadiojk/pcam10-tpd-pn-04-orang-c.png⟧
A. Tanpa komisi
B. 5%
C. 10%

Tab Orang D
⟦gambar:gambar/jadiojk/pcam10-tpd-pn-04-orang-d.png⟧
A. Tanpa komisi
B. 5%
C. 10%`,
        kunci: `Orang A: Tanpa komisi. Orang B: 5%. Orang C: 10%. Orang D: Tanpa komisi.`,
        pembahasan: `Jenis soal: Table, 3-4 opsi (satu tab per orang).
Pembatalan per minggu = pembatalan per hari × 5 hari kerja. Penjualan bersih = penjualan per minggu - pembatalan per minggu. Rata-rata nilai penjualan = total pendapatan ÷ penjualan bersih.
• Orang A: pembatalan 2 × 5 = 10; penjualan bersih 20 - 10 = 10; rata-rata £390 ÷ 10 = £39, masuk £0–£40: Tanpa komisi (A).
• Orang B: pembatalan 1 × 5 = 5; penjualan bersih 15 - 5 = 10; rata-rata £670 ÷ 10 = £67, masuk £41–£100: komisi 5% (B).
• Orang C: pembatalan 4 × 5 = 20; penjualan bersih 31 - 20 = 11; rata-rata £1.440 ÷ 11 ≈ £130,91, masuk £101 atau lebih: komisi 10% (C).
• Orang D: pembatalan 5 × 5 = 25; penjualan bersih 55 - 25 = 30; rata-rata £1.120 ÷ 30 ≈ £37,33, masuk £0–£40: Tanpa komisi (A).`,
        status: 'draft',
      },
    ],
  },

  // ── Line Graph ─────────────────────────────────────────────────────────
  {
    stimulus: {
      judul: 'Area Cakupan · Line Graph',
      isi: `Pada bulan Februari, sebuah perusahaan telepon seluler memiliki area cakupan seluas 5.000 mil persegi. Perusahaan tersebut berencana memperluas area cakupan sebesar 250 mil persegi per bulan.
⟦gambar:gambar/jadiojk/pcam10-tpd-pn-05-soal.png⟧`,
    },
    soal: [
      {
        nomor: 5,
        tipe: 'isian_singkat',
        pertanyaan: `Gambarkan cakupan dalam satuan ribuan untuk setiap bulan.`,
        kunci: `Maret 5.250; April 5.500; Mei 5.750; Juni 6.000; Juli 6.250 (mil persegi).`,
        pembahasan: `Jenis soal: Line Graph (tes interaktif).
Februari: 5.000 mil persegi. Tiap bulan bertambah 250 mil persegi:
• Maret: 5.250
• April: 5.500
• Mei: 5.750
• Juni: 6.000
• Juli: 6.250
Kelima titik (Mar sampai Jul pada sumbu bulan) diseret ke nilai-nilai ini sehingga garis naik lurus dengan kemiringan tetap.`,
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      judul: 'Nilai Rekening Saham · Line Graph',
      isi: `Cheryl menginvestasikan $1.000 pada hari Senin. Setiap hari setelahnya, nilai saham meningkat sebesar 1% dari nilai awalnya. Pada hari Rabu, ia dikenai biaya administrasi sebesar $10.`,
    },
    soal: [
      {
        nomor: 6,
        tipe: 'isian_singkat',
        pertanyaan: `Gambarkan nilai rekening saham pada akhir setiap hari.`,
        kunci: `Senin $1.000; Selasa $1.010; Rabu $1.010; Kamis $1.020; Jumat $1.030.`,
        pembahasan: `Jenis soal: Line Graph (tes interaktif).
Kenaikan harian = 1% dari nilai awal $1.000 = $10. Grafik memuat lima hari, Senin sampai Jumat:
• Senin: $1.000
• Selasa: $1.000 + $10 = $1.010
• Rabu: naik $10 lalu dikenai biaya administrasi $10, jadi tetap $1.010
• Kamis: $1.010 + $10 = $1.020
• Jumat: $1.020 + $10 = $1.030
Tangkapan layar di dokumen riset sudah memperlihatkan kondisi akhir ini (garis naik dari $1.000 pada Senin ke $1.030 pada Jumat, mendatar antara Selasa dan Rabu):
⟦gambar:gambar/jadiojk/pcam10-tpd-pn-06-jawaban.png⟧`,
        status: 'draft',
      },
    ],
  },

  // ── Pie Chart ──────────────────────────────────────────────────────────
  {
    stimulus: {
      judul: 'Informasi · Pie Chart (informasi penuh)',
      isi: `Sekelompok 20 karyawan menjadi sukarelawan untuk merencanakan sebuah acara.
• Komite Makanan: Memiliki 1 sukarelawan lebih banyak daripada Komite Tempat.
• Komite Dekorasi: Memiliki jumlah sukarelawan yang sama dengan Komite Tempat.
• Komite Pemasaran: Memiliki 1 sukarelawan lebih sedikit daripada Komite Dekorasi.
• Komite Tempat: Memiliki 5 sukarelawan.
⟦gambar:gambar/jadiojk/pcam10-tpd-pn-07-soal.png⟧`,
    },
    soal: [
      {
        nomor: 7,
        tipe: 'isian_singkat',
        pertanyaan: `Sesuaikan diagram lingkaran untuk menunjukkan proporsi sukarelawan pada setiap komite.`,
        kunci: `Komite Makanan 30% (6 orang); Komite Dekorasi 25% (5 orang); Komite Tempat 25% (5 orang); Komite Pemasaran 20% (4 orang).`,
        pembahasan: `Jenis soal: Pie Chart (informasi penuh).
Komite Tempat = 5 orang. Komite Makanan = 5 + 1 = 6. Komite Dekorasi = sama dengan Tempat = 5. Komite Pemasaran = Dekorasi - 1 = 4. Total 6 + 5 + 5 + 4 = 20 (cocok dengan 20 karyawan).
Persentase = jumlah ÷ 20: Makanan 30%, Dekorasi 25%, Tempat 25%, Pemasaran 20%.
Pada tampilan awal di gambar soal, diagram masih terbagi empat sama besar (25% semua) dan harus disesuaikan.`,
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      judul: 'Bingkai Foto · Pie Chart (1 informasi kosong)',
      isi: `Sebuah produsen menghasilkan 100.000 bingkai foto. Kategorinya adalah bingkai kayu (biru), logam (hijau), batu (merah), dan plastik (jingga).
• Bingkai Kayu: Jumlah bingkai kayu adalah 11 kali jumlah bingkai plastik.
• Bingkai Logam: Jumlah bingkai logam adalah 7 kali jumlah bingkai plastik.
• Bingkai Batu: Jumlah bingkai batu sama dengan jumlah bingkai plastik.
• Bingkai Plastik: (kosong)`,
    },
    soal: [
      {
        nomor: 8,
        tipe: 'isian_singkat',
        pertanyaan: `Sesuaikan diagram lingkaran untuk menunjukkan persentase setiap jenis bingkai.`,
        kunci: `Kayu 55% (55.000); Logam 35% (35.000); Batu 5% (5.000); Plastik 5% (5.000).`,
        pembahasan: `Jenis soal: Pie Chart (1 informasi kosong).
Misalkan jumlah bingkai plastik = p. Maka batu = p, logam = 7p, kayu = 11p. Total p + p + 7p + 11p = 20p = 100.000, jadi p = 5.000.
Plastik 5.000 = 5%; Batu 5.000 = 5%; Logam 35.000 = 35%; Kayu 55.000 = 55%.
Tangkapan layar di dokumen riset sudah memperlihatkan kondisi akhir ini (biru 55%, hijau 35%, jingga 5%, merah 5%):
⟦gambar:gambar/jadiojk/pcam10-tpd-pn-08-jawaban.png⟧`,
        status: 'draft',
      },
    ],
  },
];
