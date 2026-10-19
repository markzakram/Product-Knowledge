import type { Kelompok } from '@/lib/skema';

/**
 * Contoh soal PCAM 10 OJK, Tahap 1 (Tes Potensi Dasar), dari satu paket buatan
 * Tes OJK Generator Tahap 1 (bank v2, benih 2026, paket 1): 12 soal Kemampuan
 * Umum dan 10 soal Penalaran Numerik. Menggantikan 32 contoh dari BAB V dokumen riset.
 *
 * Soal bentukan generator, bukan soal ujian sungguhan dan bukan salinan dokumen
 * riset. Tiap butir dihitung ulang oleh validator generator (22 dari 22 lulus,
 * tanpa butir kembar), tetapi belum ditelaah tim akademik, jadi semuanya berstatus
 * 'draft'; jangan dinaikkan ke 'direview' atau 'final' sebelum ditelaah.
 *
 * Ditulis dengan skrip sekali pakai, BUKAN keluaran skrip/ke-data.mjs. Nomor soal
 * mengikuti urutan paket:
 *   Kemampuan Umum    1-2 Verbal; 3-4 Soal cerita; 5-7 Tabel; 8 Grafik batang;
 *                     9-12 Figural (serial dan matriks)
 *   Penalaran Numerik 1-3 Bar Chart; 4-6 Table; 7-8 Line Graph; 9-10 Pie Chart
 *
 * Gambar ada di public/gambar/jadiojk/ dengan nama
 * pcam10-tpd-gen-<ku|pn>-<nomor>-<bagian>. Gambar kondisi akhir (kunci) soal
 * interaktif dipasang di pembahasan, bukan di soal, supaya mode latihan tidak
 * membocorkan jawaban.
 */

/** 12 soal Kemampuan Umum: verbal, numerik, dan figural. */
export const contohKemampuanUmum: Kelompok[] = [
  // ── Verbal (Verbal Reasoning) ──────────────────────────────────────────
  {
    stimulus: {
      judul: 'Hutan Mangrove',
      isi: `Hutan mangrove tumbuh di wilayah pasang surut sepanjang pantai tropis. Manfaat hutan mangrove dapat dibedakan menjadi dua golongan, yaitu manfaat ekologis dan manfaat ekonomi. Manfaat ekologis mencakup pencegahan abrasi dan peredaman gelombang, sedangkan penjualan hasil olahan buah mangrove tergolong manfaat ekonomi. Para ahli lingkungan menilai pelestariannya sama pentingnya dengan pelestarian hutan di daratan. Akar mangrove yang rapat menambah endapan lumpur di pesisir. Endapan lumpur yang bertambah pada gilirannya memperluas daratan pantai. Pengukuran di sejumlah kawasan membuktikan bahwa hutan mangrove menyimpan karbon berlipat-lipat lebih banyak daripada hutan daratan dengan luas yang sama. Buah dan daun mangrove tertentu dapat diolah menjadi berbagai produk, seperti teh herbal, keripik, dan sirup. Sebagian bibit yang ditanam relawan lima tahun lalu kini sudah setinggi orang dewasa. Kelestariannya kini terancam oleh sejumlah persoalan, antara lain alih fungsi lahan menjadi tambak, minimnya dana perawatan, dan penebangan liar. Bantuan perahu hanya diberikan kepada kelompok nelayan yang menjaga kawasan mangrove seluas sekurang-kurangnya 14 hektare.`,
    },
    soal: [
      {
        nomor: 1,
        tipe: 'benar_salah',
        pertanyaan: `Hutan mangrove telah terbukti menyimpan karbon berlipat-lipat lebih banyak daripada hutan daratan dengan luas yang sama.`,
        opsi: [
          { label: 'A', teks: `Benar` },
          { label: 'B', teks: `Salah` },
          { label: 'C', teks: `Tidak Diketahui` },
        ],
        kunci: 'A',
        pembahasan: `Jenis soal: Verbal (Verbal Reasoning).
Bacaan menyebut: "Pengukuran di sejumlah kawasan membuktikan bahwa hutan mangrove menyimpan karbon berlipat-lipat lebih banyak daripada hutan daratan dengan luas yang sama".
Bacaan menyebut hal itu sudah terbukti. Pernyataan itu sesuai dengan bacaan.
Jadi pernyataan tersebut BENAR.
Jawaban: A (Benar)`,
        tingkat: 'sedang',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      judul: 'Pinjaman Daring',
      isi: `Pinjaman daring kian diminati karena pengajuannya cukup dilakukan melalui aplikasi di ponsel. Kemudahan itu ibarat pisau bermata dua bagi masyarakat. Pinjaman daring terbagi menjadi dua jenis, yaitu pinjaman produktif dan pinjaman konsumtif. Pinjaman produktif mencakup modal kerja warung, pembelian alat usaha, dan pembiayaan stok barang dagangan, sedangkan biaya liburan keluarga tergolong pinjaman konsumtif. Saat mengajukan pinjaman, calon peminjam diminta menyiapkan beberapa dokumen, seperti nomor rekening bank, surat keterangan usaha, dan foto diri. Penyelenggara berizin hanya boleh mengakses lokasi, mikrofon, dan kamera pada ponsel peminjam. Bunga harian yang tinggi mempercepat pembengkakan utang. Data penyaluran membuktikan bahwa pinjaman daring telah menjangkau banyak pelaku usaha kecil yang tidak memiliki agunan. Sebagian peminjam bahkan memakai pinjaman baru untuk menutup pinjaman lama. Kenaikan limit pinjaman hanya diberikan kepada peminjam yang telah melunasi sekurang-kurangnya 2 pinjaman tepat waktu. Masyarakat juga masih menghadapi sejumlah masalah, antara lain biaya tersembunyi dalam perjanjian, iklan yang menyesatkan, dan kebocoran data pribadi.`,
    },
    soal: [
      {
        nomor: 2,
        tipe: 'benar_salah',
        pertanyaan: `Pada prinsipnya, pinjaman daring dapat menjangkau pelaku usaha kecil yang tidak memiliki agunan.`,
        opsi: [
          { label: 'A', teks: `Benar` },
          { label: 'B', teks: `Salah` },
          { label: 'C', teks: `Tidak Diketahui` },
        ],
        kunci: 'A',
        pembahasan: `Jenis soal: Verbal (Verbal Reasoning).
Bacaan menyebut: "Data penyaluran membuktikan bahwa pinjaman daring telah menjangkau banyak pelaku usaha kecil yang tidak memiliki agunan".
Bacaan menyebut hal itu sudah terbukti; yang sudah terbukti tentu juga mungkin terjadi.
Jadi pernyataan tersebut BENAR.
Jawaban: A (Benar)`,
        tingkat: 'mudah',
        status: 'draft',
      },
    ],
  },

  // ── Numerik: soal cerita ───────────────────────────────────────────────
  {
    stimulus: {
      isi: `Dalam satu pekan, Cheryl dapat menjual 24 unit Seri Lite dan 20 unit Seri Pro, Mark dapat menjual 27 unit Seri Lite dan 20 unit Seri Pro, sedangkan Laura dapat menjual 23 unit Seri Lite dan 18 unit Seri Pro.`,
    },
    soal: [
      {
        nomor: 3,
        tipe: 'pg',
        pertanyaan: `Jika harga setiap unit Seri Lite adalah $35,75 dan setiap unit Seri Pro adalah $52,75, berapa selisih pendapatan penjualan antara penjual dengan pendapatan tertinggi dan penjual dengan pendapatan terendah?`,
        opsi: [
          { label: 'A', teks: `$107,25` },
          { label: 'B', teks: `$124,25` },
          { label: 'C', teks: `$141,25` },
          { label: 'D', teks: `$195,75` },
          { label: 'E', teks: `$248,50` },
        ],
        kunci: 'E',
        pembahasan: `Jenis soal: Soal Cerita - Aritmatika Keuangan.
Pendapatan Cheryl = 24 × $35,75 + 20 × $52,75 = $858,00 + $1.055,00 = $1.913,00.
Pendapatan Mark = 27 × $35,75 + 20 × $52,75 = $965,25 + $1.055,00 = $2.020,25 (tertinggi).
Pendapatan Laura = 23 × $35,75 + 18 × $52,75 = $822,25 + $949,50 = $1.771,75 (terendah).
Selisih = $2.020,25 - $1.771,75 = $248,50.
Pilihan lain yang menjebak:
• A ($107,25): membandingkan pendapatan tertinggi dengan yang menengah, bukan yang terendah.
• B ($124,25): membagi dua selisih yang benar.
• C ($141,25): membandingkan pendapatan menengah dengan yang terendah.
• D ($195,75): salah menjumlahkan satu unit produk pada salah satu penjual.
Jawaban: E ($248,50)`,
        tingkat: 'sedang',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      isi: `Survei terhadap 85 peserta pelatihan mencatat bahwa 32 peserta mengikuti kelas spreadsheet dan 48 peserta mengikuti kelas presentasi. 17 peserta mengikuti kedua kelas tersebut.`,
    },
    soal: [
      {
        nomor: 4,
        tipe: 'pg',
        pertanyaan: `Berapa peserta yang tidak mengikuti satu pun dari kedua kelas?`,
        opsi: [
          { label: 'A', teks: `5 peserta` },
          { label: 'B', teks: `13,2 peserta` },
          { label: 'C', teks: `16 peserta` },
          { label: 'D', teks: `22 peserta` },
          { label: 'E', teks: `80 peserta` },
        ],
        kunci: 'D',
        pembahasan: `Jenis soal: Gabungan dan irisan dua kelompok.
Peserta yang mengikuti setidaknya satu kelas = jumlah kelas spreadsheet + jumlah kelas presentasi - peserta kedua kelas.
Gabungan = 32 + 48 - 17 = 63 peserta.
Tidak mengikuti kelas = 85 - 63 = 22.
Pilihan lain yang menjebak:
• A (5 peserta): tidak mengoreksi irisan kedua kelas.
• B (13,2 peserta): kurang 8,8 dari jawaban yang benar: salah hitung pada salah satu langkah penyelesaian.
• C (16 peserta): hanya mengambil selisih jumlah kedua kelas.
• E (80 peserta): menghitung peserta kedua kelas dua kali.
Jawaban: D (22 peserta)`,
        tingkat: 'mudah',
        status: 'draft',
      },
    ],
  },

  // ── Numerik: tabel ─────────────────────────────────────────────────────
  {
    stimulus: {
      judul: 'Tabel · Staf dan Teknologi Informasi',
      isi: `⟦gambar:gambar/jadiojk/pcam10-tpd-gen-ku-05-tabel.png⟧`,
    },
    soal: [
      {
        nomor: 5,
        tipe: 'pg',
        pertanyaan: `Berapa perbandingan antara komputer untuk pengarsipan dan komputer untuk pengolahan kata di Delta Media?`,
        opsi: [
          { label: 'A', teks: `3:7` },
          { label: 'B', teks: `7:3` },
          { label: 'C', teks: `41:15` },
          { label: 'D', teks: `44:15` },
          { label: 'E', teks: `10:3` },
        ],
        kunci: 'B',
        pembahasan: `Jenis soal: Tabel - Bilangan dan Perbandingan.
Pada kolom Delta Media, komputer untuk pengarsipan = 14 dan komputer untuk pengolahan kata = 6.
Perbandingan 14 : 6 = 7 : 3 (kedua bilangan dibagi 2).
Pilihan lain yang menjebak:
• A (3:7): urutan perbandingan terbalik (komputer untuk pengolahan kata dibanding komputer untuk pengarsipan).
• C (41:15): lebih 0,4 dari jawaban yang benar: salah hitung pada salah satu langkah penyelesaian.
• D (44:15): lebih 0,6 dari jawaban yang benar: salah hitung pada salah satu langkah penyelesaian.
• E (10:3): membandingkan jumlah kedua bagian dengan salah satunya.
Jawaban: B (7:3)`,
        tingkat: 'mudah',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      judul: 'Tabel · Hasil Produksi ABC Products Inc.',
      isi: `⟦gambar:gambar/jadiojk/pcam10-tpd-gen-ku-06-tabel.png⟧`,
    },
    soal: [
      {
        nomor: 6,
        tipe: 'pg',
        pertanyaan: `Jika metode produksi baru memungkinkan biaya tenaga kerja Produk C turun menjadi $6,13 per unit sekaligus meningkatkan produksi maksimum menjadi 200 unit per bulan, berapa persentase kenaikan laba perusahaan dari produk tersebut?`,
        opsi: [
          { label: 'A', teks: `32%` },
          { label: 'B', teks: `67%` },
          { label: 'C', teks: `120%` },
          { label: 'D', teks: `130%` },
          { label: 'E', teks: `220%` },
        ],
        kunci: 'C',
        pembahasan: `Jenis soal: Tabel - Aritmatika Keuangan.
Produk C sebelumnya: biaya per unit = $7,57 + $1,94 + $0,14 = $9,65; laba per unit = $14,15 - $9,65 = $4,50. Dengan produksi maksimum 120 unit, laba = 120 × $4,50 = $540.
Metode baru: biaya per unit = $6,13 + $1,94 + $0,14 = $8,21; laba per unit = $14,15 - $8,21 = $5,94. Dengan 200 unit, laba = 200 × $5,94 = $1.188.
Kenaikan laba = ($1.188 - $540) ÷ $540 × 100% = 120%.
Pilihan lain yang menjebak:
• A (32%): hanya membandingkan laba per unit, tanpa memperhitungkan perubahan jumlah produksi.
• B (67%): hanya memperhitungkan kenaikan produksi maksimum.
• D (130%): lebih 10 dari jawaban yang benar: salah hitung pada salah satu langkah penyelesaian.
• E (220%): menjawab laba baru sebagai persen dari laba lama (220%), bukan kenaikannya.
Jawaban: C (120%)`,
        tingkat: 'sedang',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      judul: 'Tabel · Profil Pekerjaan Sarjana dan Non-Sarjana, Distrik Semarang',
      isi: `⟦gambar:gambar/jadiojk/pcam10-tpd-gen-ku-07-tabel.png⟧`,
    },
    soal: [
      {
        nomor: 7,
        tipe: 'pg',
        pertanyaan: `Kira-kira berapa persentase dari seluruh sarjana dan non-sarjana yang bekerja di sektor Transportasi?`,
        opsi: [
          { label: 'A', teks: `19%` },
          { label: 'B', teks: `22%` },
          { label: 'C', teks: `25%` },
          { label: 'D', teks: `41%` },
          { label: 'E', teks: `46%` },
        ],
        kunci: 'B',
        pembahasan: `Jenis soal: Tabel - Bilangan dan Perbandingan.
Sektor Transportasi: sarjana 381.000 + non-sarjana 468.000 = 849.000 orang.
Seluruh sarjana dan non-sarjana: 2.046.000 + 1.845.000 = 3.891.000 orang.
Persentase = 849.000 ÷ 3.891.000 × 100% = 21,8%, kira-kira 22%.
Pilihan lain yang menjebak:
• A (19%): hanya menghitung porsi kelompok sarjana.
• C (25%): hanya menghitung porsi kelompok non-sarjana.
• D (41%): membagi jumlah kedua kelompok dengan jumlah sarjana saja.
• E (46%): membagi jumlah kedua kelompok dengan jumlah non-sarjana saja.
Jawaban: B (22%)`,
        tingkat: 'sedang',
        status: 'draft',
      },
    ],
  },

  // ── Numerik: grafik batang ─────────────────────────────────────────────
  {
    stimulus: {
      judul: 'Grafik Batang · Pendapatan dan Biaya Usaha',
      isi: `⟦gambar:gambar/jadiojk/pcam10-tpd-gen-ku-08-grafik.png⟧
Grafik mencatat pendapatan dan seluruh biaya rutin usaha rekaan, dalam juta rupiah.`,
    },
    soal: [
      {
        nomor: 8,
        tipe: 'pg',
        pertanyaan: `Berapa persentase laba gabungan terhadap pendapatan gabungan keempat bulan? Bulatkan sampai dua angka di belakang koma.`,
        opsi: [
          { label: 'A', teks: `23,31 %` },
          { label: 'B', teks: `31,08 %` },
          { label: 'C', teks: `45,1 %` },
          { label: 'D', teks: `68,92 %` },
          { label: 'E', teks: `2.500 %` },
        ],
        kunci: 'B',
        pembahasan: `Jenis soal: Laba dan margin dari dua seri batang.
Pendapatan periode yang ditanyakan = 1480 juta rupiah; biaya rutinnya = 1020 juta rupiah.
Laba sebelum beban tambahan = 1480 - 1020 = 460 juta rupiah.
Persentase laba terhadap pendapatan = 460 ÷ 1480 × 100% = 31,08%.
Pilihan lain yang menjebak:
• A (23,31 %): kurang 7,7711 dari jawaban yang benar: salah hitung pada salah satu langkah penyelesaian.
• C (45,1 %): menggunakan biaya sebagai dasar persentase atau mengabaikan biaya.
• D (68,92 %): menjawab biaya, bukan laba.
• E (2.500 %): menambahkan biaya alih-alih menguranginya.
Jawaban: B (31,08 %)`,
        tingkat: 'sedang',
        status: 'draft',
      },
    ],
  },

  // ── Figural ────────────────────────────────────────────────────────────
  {
    soal: [
      {
        nomor: 9,
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
Bagian bawah tiap kotak adalah kode perubahan. Setiap belah ketupat mewakili satu bagian gambar atas: bila abu-abu, bagian itu berubah dengan cara yang sama setiap kali dibanding kotak sebelumnya; bila putih, bagian itu tetap. Kotak pertama adalah keadaan awal (ketiga belah ketupatnya putih).
• Belah ketupat atas abu-abu pada kotak 4, dan hanya pada kotak itu arah panah berubah: panah berputar 90 derajat berlawanan arah jarum jam.
• Belah ketupat tengah abu-abu pada kotak 3, dan hanya pada kotak itu letak penanda berubah: penanda pindah ke sisi berikutnya berlawanan arah jarum jam.
• Belah ketupat bawah abu-abu pada kotak 2, dan hanya pada kotak itu warna lingkaran berubah: warna keempat lingkaran berpindah satu pojok berlawanan arah jarum jam.
Kotak kelima: belah ketupat tengah abu-abu, atas dan bawah putih. Dari kotak keempat: penanda pindah ke sisi berikutnya berlawanan arah jarum jam; bagian lain tetap.
Hasilnya: lingkaran (kiri atas, kanan atas, kanan bawah, kiri bawah) abu-abu, hitam, putih, abu-abu; panah ke kiri; penanda di sisi atas.
Pilihan lain yang menjebak:
• A: warna lingkaran ikut berubah padahal belah ketupat bawah pada kotak kelima putih.
• B: arah panah ikut berubah padahal belah ketupat atas pada kotak kelima putih.
• C: perubahan yang ditandai belah ketupat tengah (penanda pindah ke sisi berikutnya berlawanan arah jarum jam) tidak dilakukan.
• E: letak penanda berubah ke arah sebaliknya (seharusnya penanda pindah ke sisi berikutnya berlawanan arah jarum jam).
Jawaban: D`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 10,
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
        pembahasan: `Jenis soal: Figural Serial - The Next Box (bentuk berputar).
Kita perhatikan keseluruhan gambar dari kotak ke kotak. Aturan yang berlaku:
• seluruh objek diputar 30 derajat searah jarum jam pada setiap kotak;
Meneruskan aturan itu ke kotak kelima, gambar yang tepat adalah opsi E.
Pilihan lain yang menjebak:
• A: sudut tali busur ke-3 terhadap unsur lain berbeda: ia masih menempel pada tempat yang sama tetapi arahnya berubah.
• B: putarannya kurang satu langkah: gambar ini masih pada sudut kotak keempat, padahal setiap kotak bertambah 30 derajat.
• C: putarannya kelebihan satu langkah, yaitu 60 derajat dari kotak keempat, bukan 30 derajat.
• D: gambarnya merupakan bayangan cermin dari lanjutan yang benar; deret ini hanya berputar, tidak pernah tercermin.
Jawaban: E`,
        tingkat: 'sulit',
        status: 'draft',
      },
      {
        nomor: 11,
        tipe: 'pg',
        pertanyaan: `⟦gambar:gambar/jadiojk/pcam10-tpd-gen-ku-11-soal.png⟧
Gunakan gambar di bagian atas untuk menentukan jawaban yang benar dari pilihan di bawah. Pilih jawaban yang menggantikan tanda tanya. Jika tidak ada tanda tanya, pilih jawaban yang merupakan kelanjutan dari urutan tersebut.`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-gen-ku-11-a.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-gen-ku-11-b.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-gen-ku-11-c.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-gen-ku-11-d.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-gen-ku-11-e.png⟧` },
        ],
        kunci: 'C',
        pembahasan: `Jenis soal: Figural Matriks - Kotak 3x3.
Setiap kanal pada kotak mengikuti satu aturan. Aturan yang terbaca dari delapan kotak yang terlihat:
• Titik di pangkal panah: kotak ketiga pada tiap baris ada titik bila tepat satu dari dua kotak pertamanya bertitik.
• Letak kotak kecil di pojok: setiap baris dan setiap kolom memuat ketiga nilai (kanan-atas, kiri-bawah, kanan-bawah) tepat satu kali.
• Jumlah kotak kecil: jumlah kotak kecil pada tiap baris selalu 5.
• Warna wadah: setiap baris dan setiap kolom memuat ketiga nilai (putih, hitam, abu-abu) tepat satu kali.
Kotak yang hilang berada pada baris 3, kolom 2. Menerapkan setiap aturan padanya memberi: tanpa titik, kanan-atas, 1, putih.
Pilihan lain yang menjebak:
• A: warna wadah abu-abu padahal seharusnya putih.
• B: jumlah kotak kecil 3 padahal seharusnya 1.
• D: warna wadah abu-abu padahal seharusnya putih; titik di pangkal panah dengan titik padahal seharusnya tanpa titik.
• E: titik di pangkal panah dengan titik padahal seharusnya tanpa titik.
Jawaban: C`,
        tingkat: 'sulit',
        status: 'draft',
      },
      {
        nomor: 12,
        tipe: 'pg',
        pertanyaan: `⟦gambar:gambar/jadiojk/pcam10-tpd-gen-ku-12-soal.png⟧
Gunakan gambar di bagian atas untuk menentukan jawaban yang benar dari pilihan di bawah. Pilih jawaban yang menggantikan tanda tanya. Jika tidak ada tanda tanya, pilih jawaban yang merupakan kelanjutan dari urutan tersebut.`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-gen-ku-12-a.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-gen-ku-12-b.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-gen-ku-12-c.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-gen-ku-12-d.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jadiojk/pcam10-tpd-gen-ku-12-e.png⟧` },
        ],
        kunci: 'A',
        pembahasan: `Jenis soal: Figural Matriks - Kotak 5x6.
Ada dua aturan yang berlaku bersamaan: aturan bentuk dan aturan warna.
Aturan bentuk: setiap kolom memuat segitiga, persegi, segi enam, dan lingkaran masing-masing satu kali, ditambah satu segi enam lagi (lihat kolom yang lengkap, misalnya kolom 1 dan 2). Bentuk kotak yang hilang adalah bentuk yang belum lengkap di kolomnya:
• Kolom 4 sudah memuat segitiga, persegi, segi enam dan segi enam, jadi kurang lingkaran.
• Kolom 5 sudah memuat segitiga, segi enam, segi enam dan lingkaran, jadi kurang persegi.
• Kolom 6 sudah memuat segitiga, persegi, segi enam dan segi enam, jadi kurang lingkaran.
Aturan warna: warna bergantian per baris menurut golongan bentuk: pada baris 2, 4 persegi dan segi enam hitam dan segitiga dan lingkaran putih; pada baris 1, 3, 5 sebaliknya (segitiga dan lingkaran hitam, persegi dan segi enam putih). Baris 2 termasuk baris yang persegi dan segi enam hitam.
Jadi potongan yang hilang (dari kiri ke kanan): lingkaran putih, persegi hitam, lingkaran putih.
Pilihan lain yang menjebak:
• B: kotak ke-3 berbentuk segi enam, padahal kolom 6 yang belum lengkap adalah lingkaran.
• C: kotak ke-2 berbentuk lingkaran, padahal kolom 5 yang belum lengkap adalah persegi.
• D: bentuk kotak ke-1 dan ke-2 tertukar, padahal kolom 5 masih kekurangan persegi dan kolom 4 kekurangan lingkaran.
• E: bentuknya benar tetapi semua warnanya terbalik.
Jawaban: A`,
        tingkat: 'sedang',
        status: 'draft',
      },
    ],
  },
];

/**
 * 10 soal Penalaran Numerik: tes interaktif. Jawabannya berupa kondisi akhir grafik
 * atau pilihan per tab, jadi tipenya isian singkat dan kuncinya berupa teks.
 */
export const contohPenalaranNumerik: Kelompok[] = [
  // ── Bar Chart ──────────────────────────────────────────────────────────
  {
    stimulus: {
      judul: 'Pendapatan Penjualan · Bar Chart',
      isi: `Pendapatan penjualan berasal dari dua wilayah, yaitu wilayah Timur dan wilayah Barat.
Kuartal 1: total pendapatan penjualan = $120 juta; pendapatan penjualan wilayah Timur menyumbang 70% dari total.
Kuartal 2: total pendapatan penjualan turun $40 juta dibandingkan Kuartal 1.
Kuartal 2: pendapatan penjualan wilayah Timur menyumbang 25% dari total pendapatan penjualan pada Kuartal 2.
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-01-awal.png⟧`,
    },
    soal: [
      {
        nomor: 1,
        tipe: 'isian_singkat',
        pertanyaan: `Atur total pendapatan penjualan dan persentase pendapatan penjualan wilayah Timur serta pendapatan penjualan wilayah Barat untuk setiap kuartal.`,
        kunci: `Kuartal 1: total $120 juta, Wilayah Timur 70% ($84 juta), Wilayah Barat 30% ($36 juta). Kuartal 2: total $80 juta, Wilayah Timur 25% ($20 juta), Wilayah Barat 75% ($60 juta).`,
        pembahasan: `Jenis soal: Bar Chart (tes interaktif).
Kuartal 1: total pendapatan penjualan $120 juta; pendapatan penjualan wilayah Timur $84 juta = 70%; pendapatan penjualan wilayah Barat = $120 juta - $84 juta = $36 juta = 30%.
Kuartal 2: total pendapatan penjualan turun $40 juta, jadi $120 juta - $40 juta = $80 juta.
Pendapatan penjualan wilayah Timur 25% dari $80 juta = $20 juta; pendapatan penjualan wilayah Barat = $80 juta - $20 juta = $60 juta (75%).
Kondisi akhir: Kuartal 1 total $120 juta (Wilayah Timur 70%, Wilayah Barat 30%); Kuartal 2 total $80 juta (Wilayah Timur 25%, Wilayah Barat 75%).
Tampilan awal: Kuartal 1 total $120 juta (sudah sesuai) dan Kuartal 2 total $60 juta, keduanya berpembagian 50% / 50%. Atur yang belum sama dengan kondisi akhir di atas.
Jawaban: Kuartal 1: total $120 juta, Wilayah Timur 70% ($84 juta), Wilayah Barat 30% ($36 juta). Kuartal 2: total $80 juta, Wilayah Timur 25% ($20 juta), Wilayah Barat 75% ($60 juta).
Kondisi akhir (kunci):
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-01-kunci.png⟧`,
        tingkat: 'sulit',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      judul: 'Dana Kelolaan Reksa Dana · Bar Chart',
      isi: `Dana kelolaan sebuah manajer investasi terbagi menjadi reksa dana pasar uang dan reksa dana saham.
Kuartal 1: total dana kelolaan = $400 juta; dana kelolaan reksa dana pasar uang = $140 juta.
Kuartal 2: total dana kelolaan turun 25%.
Kuartal 2: dana kelolaan reksa dana pasar uang menyumbang 15% dari total dana kelolaan pada Kuartal 2.
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-02-awal.png⟧`,
    },
    soal: [
      {
        nomor: 2,
        tipe: 'isian_singkat',
        pertanyaan: `Atur total dana kelolaan dan persentase dana kelolaan reksa dana pasar uang serta dana kelolaan reksa dana saham untuk setiap kuartal.`,
        kunci: `Kuartal 1: total $400 juta, Pasar uang 35% ($140 juta), Saham 65% ($260 juta). Kuartal 2: total $300 juta, Pasar uang 15% ($45 juta), Saham 85% ($255 juta).`,
        pembahasan: `Jenis soal: Bar Chart (tes interaktif).
Kuartal 1: total dana kelolaan $400 juta; dana kelolaan reksa dana pasar uang $140 juta = 35%; dana kelolaan reksa dana saham = $400 juta - $140 juta = $260 juta = 65%.
Kuartal 2: total dana kelolaan turun 25%, jadi $400 juta × 0,75 = $300 juta.
Dana kelolaan reksa dana pasar uang 15% dari $300 juta = $45 juta; dana kelolaan reksa dana saham = $300 juta - $45 juta = $255 juta (85%).
Kondisi akhir: Kuartal 1 total $400 juta (Pasar uang 35%, Saham 65%); Kuartal 2 total $300 juta (Pasar uang 15%, Saham 85%).
Tampilan awal: Kuartal 1 total $400 juta (sudah sesuai) dan Kuartal 2 total $270 juta, keduanya berpembagian 50% / 50%. Atur yang belum sama dengan kondisi akhir di atas.
Jawaban: Kuartal 1: total $400 juta, Pasar uang 35% ($140 juta), Saham 65% ($260 juta). Kuartal 2: total $300 juta, Pasar uang 15% ($45 juta), Saham 85% ($255 juta).
Kondisi akhir (kunci):
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-02-kunci.png⟧`,
        tingkat: 'sedang',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      judul: 'Dana Pihak Ketiga · Bar Chart',
      isi: `Dana pihak ketiga sebuah bank terdiri dari dana giro dan dana tabungan.
Semester 1: total dana pihak ketiga = $320 juta; dana giro = $48 juta.
Semester 2: total dana pihak ketiga turun $140 juta dibandingkan Semester 1.
Semester 2: dana giro menyumbang 55% dari total dana pihak ketiga pada Semester 2.
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-03-awal.png⟧`,
    },
    soal: [
      {
        nomor: 3,
        tipe: 'isian_singkat',
        pertanyaan: `Atur total dana pihak ketiga dan persentase dana giro serta dana tabungan untuk setiap semester.`,
        kunci: `Semester 1: total $320 juta, Giro 15% ($48 juta), Tabungan 85% ($272 juta). Semester 2: total $180 juta, Giro 55% ($99 juta), Tabungan 45% ($81 juta).`,
        pembahasan: `Jenis soal: Bar Chart (tes interaktif).
Semester 1: total dana pihak ketiga $320 juta; dana giro $48 juta = 15%; dana tabungan = $320 juta - $48 juta = $272 juta = 85%.
Semester 2: total dana pihak ketiga turun $140 juta, jadi $320 juta - $140 juta = $180 juta.
Dana giro 55% dari $180 juta = $99 juta; dana tabungan = $180 juta - $99 juta = $81 juta (45%).
Kondisi akhir: Semester 1 total $320 juta (Giro 15%, Tabungan 85%); Semester 2 total $180 juta (Giro 55%, Tabungan 45%).
Tampilan awal: Semester 1 total $320 juta (sudah sesuai) dan Semester 2 total $220 juta, keduanya berpembagian 50% / 50%. Atur yang belum sama dengan kondisi akhir di atas.
Jawaban: Semester 1: total $320 juta, Giro 15% ($48 juta), Tabungan 85% ($272 juta). Semester 2: total $180 juta, Giro 55% ($99 juta), Tabungan 45% ($81 juta).
Kondisi akhir (kunci):
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-03-kunci.png⟧`,
        tingkat: 'sedang',
        status: 'draft',
      },
    ],
  },

  // ── Table ──────────────────────────────────────────────────────────────
  {
    stimulus: {
      judul: 'Komisi · Table (4 opsi)',
      isi: `Ketentuan penentuan komisi yang diperoleh:
• Penjualan bersih per minggu = penjualan per minggu dikurangi pembatalan per minggu, dengan 5 hari kerja per minggu.
• Rata-rata nilai penjualan = total pendapatan per minggu dibagi penjualan bersih per minggu.
• Jika rata-rata nilai penjualan kurang dari £41: tanpa komisi.
• Jika rata-rata nilai penjualan £41 atau lebih, tetapi kurang dari £101: 3%.
• Jika rata-rata nilai penjualan £101 atau lebih, tetapi kurang dari £161: 6%.
• Jika rata-rata nilai penjualan £161 atau lebih: 10%.`,
    },
    soal: [
      {
        nomor: 4,
        tipe: 'isian_singkat',
        pertanyaan: `Tentukan kategori komisi yang tepat untuk setiap karyawan. Setiap tabel di bawah mewakili tampilan tabel ketika tab nama tersebut dipilih.

Tab Orang A
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-04-tab-a.png⟧
A. Tanpa komisi
B. 3%
C. 6%
D. 10%

Tab Orang B
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-04-tab-b.png⟧
A. Tanpa komisi
B. 3%
C. 6%
D. 10%

Tab Orang C
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-04-tab-c.png⟧
A. Tanpa komisi
B. 3%
C. 6%
D. 10%

Tab Orang D
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-04-tab-d.png⟧
A. Tanpa komisi
B. 3%
C. 6%
D. 10%`,
        kunci: `Orang A: 3%. Orang B: 10%. Orang C: Tanpa komisi. Orang D: 6%.`,
        pembahasan: `Jenis soal: Table, 3-4 opsi (satu tab per orang).
Pembatalan per minggu = pembatalan per hari × 5 hari kerja. Penjualan bersih = penjualan per minggu - pembatalan per minggu. Rata-rata nilai penjualan = total pendapatan ÷ penjualan bersih.
• Orang A: pembatalan 3 × 5 = 15; penjualan bersih 51 - 15 = 36; rata-rata £1.680 ÷ 36 = £46,67 → 3% (B).
• Orang B: pembatalan 2 × 5 = 10; penjualan bersih 44 - 10 = 34; rata-rata £6.660 ÷ 34 = £195,88 → 10% (D).
• Orang C: pembatalan 1 × 5 = 5; penjualan bersih 40 - 5 = 35; rata-rata £280 ÷ 35 = £8 → Tanpa komisi (A).
• Orang D: pembatalan 3 × 5 = 15; penjualan bersih 56 - 15 = 41; rata-rata £6.100 ÷ 41 = £148,78 → 6% (C).
Jawaban: Orang A: 3%. Orang B: 10%. Orang C: Tanpa komisi. Orang D: 6%.
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
  {
    stimulus: {
      judul: 'Penyaluran Kredit · Table (2 opsi)',
      isi: `Target penyaluran kredit kuartal tercapai apabila:
• Total penyaluran kredit selama tiga bulan sekurang-kurangnya $95.000, DAN
• Rata-rata penyaluran kredit yang dicapai pada kuartal tersebut sekurang-kurangnya 50% di atas rata-rata target.`,
    },
    soal: [
      {
        nomor: 5,
        tipe: 'isian_singkat',
        pertanyaan: `Tentukan apakah setiap orang mencapai target penyaluran kredit kuartalnya. Setiap tabel di bawah mewakili tampilan tabel ketika tab nama tersebut dipilih.

Tab Orang A
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-05-tab-a.png⟧
A. Mencapai target
B. Tidak mencapai target

Tab Orang B
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-05-tab-b.png⟧
A. Mencapai target
B. Tidak mencapai target

Tab Orang C
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-05-tab-c.png⟧
A. Mencapai target
B. Tidak mencapai target

Tab Orang D
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-05-tab-d.png⟧
A. Mencapai target
B. Tidak mencapai target`,
        kunci: `Orang A: Mencapai target. Orang B: Tidak mencapai target. Orang C: Tidak mencapai target. Orang D: Mencapai target.`,
        pembahasan: `Jenis soal: Table, 2 opsi (satu tab per orang).
Syarat 1: total penyaluran kredit ≥ $95.000. Syarat 2: total penyaluran kredit ≥ 150% × total target (rata-rata 50% di atas target sama artinya dengan total 50% di atas total target, karena jumlah bulannya sama). Keduanya harus terpenuhi.
• Orang A: $19.500 + $16.500 + $69.000 = $105.000; total target = $9.000 + $7.500 + $25.500 = $42.000; batas syarat 2 = 1,5 × $42.000 = $63.000. Syarat 1 terpenuhi, syarat 2 terpenuhi: Mencapai target.
• Orang B: $24.000 + $23.000 + $40.000 = $87.000; total target = $14.000 + $14.000 + $23.000 = $51.000; batas syarat 2 = 1,5 × $51.000 = $76.500. Syarat 1 tidak terpenuhi, syarat 2 terpenuhi: Tidak mencapai target.
• Orang C: $39.000 + $44.000 + $13.500 = $96.500; total target = $36.500 + $23.000 + $20.000 = $79.500; batas syarat 2 = 1,5 × $79.500 = $119.250. Syarat 1 terpenuhi, syarat 2 tidak terpenuhi: Tidak mencapai target.
• Orang D: $42.000 + $33.500 + $23.500 = $99.000; total target = $4.000 + $11.500 + $9.500 = $25.000; batas syarat 2 = 1,5 × $25.000 = $37.500. Syarat 1 terpenuhi, syarat 2 terpenuhi: Mencapai target.
Jawaban: Orang A: Mencapai target. Orang B: Tidak mencapai target. Orang C: Tidak mencapai target. Orang D: Mencapai target.
Kondisi akhir tiap tab (kunci):
Tab Orang A
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-05-kunci-a.png⟧
Tab Orang B
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-05-kunci-b.png⟧
Tab Orang C
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-05-kunci-c.png⟧
Tab Orang D
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-05-kunci-d.png⟧`,
        tingkat: 'mudah',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      judul: 'Bonus Petugas Kredit · Table (3 opsi)',
      isi: `Ketentuan penentuan bonus yang diperoleh:
• Penjualan bersih per minggu = pengajuan per minggu dikurangi pembatalan per minggu, dengan 6 hari kerja per minggu.
• Rata-rata nilai penjualan = total pendapatan per minggu dibagi penjualan bersih per minggu.
• Jika rata-rata nilai penjualan kurang dari €45: tanpa bonus.
• Jika rata-rata nilai penjualan €45 atau lebih, tetapi kurang dari €85: 5%.
• Jika rata-rata nilai penjualan €85 atau lebih: 10%.`,
    },
    soal: [
      {
        nomor: 6,
        tipe: 'isian_singkat',
        pertanyaan: `Tentukan kategori bonus yang tepat untuk setiap petugas. Setiap tabel di bawah mewakili tampilan tabel ketika tab nama tersebut dipilih.

Tab Orang A
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-06-tab-a.png⟧
A. Tanpa bonus
B. 5%
C. 10%

Tab Orang B
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-06-tab-b.png⟧
A. Tanpa bonus
B. 5%
C. 10%

Tab Orang C
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-06-tab-c.png⟧
A. Tanpa bonus
B. 5%
C. 10%

Tab Orang D
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-06-tab-d.png⟧
A. Tanpa bonus
B. 5%
C. 10%`,
        kunci: `Orang A: 5%. Orang B: 5%. Orang C: Tanpa bonus. Orang D: 10%.`,
        pembahasan: `Jenis soal: Table, 3-4 opsi (satu tab per orang).
Pembatalan per minggu = pembatalan per hari × 6 hari kerja. Penjualan bersih = penjualan per minggu - pembatalan per minggu. Rata-rata nilai penjualan = total pendapatan ÷ penjualan bersih.
• Orang A: pembatalan 1 × 6 = 6; penjualan bersih 44 - 6 = 38; rata-rata €2.640 ÷ 38 = €69,47 → 5% (B).
• Orang B: pembatalan 5 × 6 = 30; penjualan bersih 70 - 30 = 40; rata-rata €2.710 ÷ 40 = €67,75 → 5% (B).
• Orang C: pembatalan 4 × 6 = 24; penjualan bersih 65 - 24 = 41; rata-rata €790 ÷ 41 = €19,27 → Tanpa bonus (A).
• Orang D: pembatalan 4 × 6 = 24; penjualan bersih 55 - 24 = 31; rata-rata €3.710 ÷ 31 = €119,68 → 10% (C).
Jawaban: Orang A: 5%. Orang B: 5%. Orang C: Tanpa bonus. Orang D: 10%.
Kondisi akhir tiap tab (kunci):
Tab Orang A
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-06-kunci-a.png⟧
Tab Orang B
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-06-kunci-b.png⟧
Tab Orang C
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-06-kunci-c.png⟧
Tab Orang D
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-06-kunci-d.png⟧`,
        tingkat: 'mudah',
        status: 'draft',
      },
    ],
  },

  // ── Line Graph ─────────────────────────────────────────────────────────
  {
    stimulus: {
      judul: 'Area Cakupan · Line Graph',
      isi: `Pada bulan Juli, sebuah perusahaan telepon seluler memiliki area cakupan seluas 6.250 mil persegi. Perusahaan tersebut berencana memperluas area cakupan sebesar 450 mil persegi per bulan.
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-07-awal.png⟧`,
    },
    soal: [
      {
        nomor: 7,
        tipe: 'isian_singkat',
        pertanyaan: `Gambarkan area cakupan (dalam mil persegi) untuk setiap bulan.`,
        kunci: `Agu 6.700; Sep 7.150; Okt 7.600; Nov 8.950; Des 9.400.`,
        pembahasan: `Jenis soal: Line Graph (tes interaktif).
Nilai awal = 6.250 mil persegi. Perubahan tiap titik = +450.
• Agu: 6.250 + 450 = 6.700.
• Sep: 6.700 + 450 = 7.150.
• Okt: 7.150 + 450 = 7.600.
• Nov: 7.600 + 450 + 900 = 8.950.
• Des: 8.950 + 450 = 9.400.
Kelima titik digeser ke nilai-nilai ini sehingga garis tersambung dari Agu sampai Des.
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
      judul: 'Persediaan dengan Jadwal Bergantian · Line Graph',
      isi: `Sebuah gudang mencatat persediaan barang pada akhir hari. Pada akhir Senin terdapat 6.350 unit. Pada Selasa dan Kamis masing-masing masuk 190 unit. Pada Rabu dan Jumat masing-masing keluar 130 unit. Tidak ada perubahan persediaan lainnya.
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-08-awal.png⟧`,
    },
    soal: [
      {
        nomor: 8,
        tipe: 'isian_singkat',
        pertanyaan: `Gambarkan nilai pada akhir setiap hari sesuai keterangan.`,
        kunci: `Senin 6.350; Selasa 6.540; Rabu 6.410; Kamis 6.600; Jumat 6.470 unit.`,
        pembahasan: `Jenis soal: Arus masuk dan keluar bergantian.
Titik Senin adalah persediaan awal 6350 unit.
Selasa dan Kamis: tambahkan 190 unit ke saldo hari sebelumnya. Rabu dan Jumat: kurangi 130 unit.
Urutan saldo akhir Senin sampai Jumat: 6.350, 6.540, 6.410, 6.600, 6.470 unit.
Jawaban: Senin 6.350; Selasa 6.540; Rabu 6.410; Kamis 6.600; Jumat 6.470 unit.
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
      judul: 'Pesanan Toko Daring · Pie Chart (1 informasi kosong)',
      isi: `Sebuah toko daring menerima 20.000 pesanan dalam satu bulan. Pesanan dikelompokkan menjadi kemeja (biru), celana (hijau), jaket (jingga), dan topi (merah).
Jumlah pesanan jaket adalah 29 kali jumlah pesanan topi.
Jumlah pesanan celana adalah 19 kali jumlah pesanan topi.
Jumlah pesanan kemeja sama dengan jumlah pesanan topi.
Jumlah pesanan topi tidak disebutkan.
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-09-awal.png⟧`,
    },
    soal: [
      {
        nomor: 9,
        tipe: 'isian_singkat',
        pertanyaan: `Sesuaikan diagram lingkaran untuk menunjukkan persentase tiap kelompok pesanan.`,
        kunci: `Kemeja 2% (400); Celana 38% (7.600); Jaket 58% (11.600); Topi 2% (400).`,
        pembahasan: `Jenis soal: Pie Chart (1 informasi kosong).
Misalkan jumlah pesanan topi = p. Maka kemeja = p, celana = 19p, jaket = 29p, topi = p.
Jumlah seluruhnya: p + 19p + 29p + p = 50p = 20.000, sehingga p = 400.
kemeja = 400 (2%); celana = 7.600 (38%); jaket = 11.600 (58%); topi = 400 (2%).
Jawaban: Kemeja 2% (400); Celana 38% (7.600); Jaket 58% (11.600); Topi 2% (400).
Kondisi akhir (kunci):
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-09-kunci.png⟧`,
        tingkat: 'mudah',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      judul: 'Peserta Pelatihan · Pie Chart (informasi penuh)',
      isi: `Sebuah lembaga pelatihan memiliki 20 peserta yang tersebar di empat kelas.
Jumlah peserta Kelas Manajemen Risiko adalah 3 kali jumlah peserta Kelas Akuntansi.
Kelas Akuntansi memiliki 2 peserta lebih banyak daripada Kelas Audit.
Kelas Perpajakan memiliki 2 peserta.
Kelas Audit memiliki jumlah peserta yang sama dengan Kelas Perpajakan.
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-10-awal.png⟧`,
    },
    soal: [
      {
        nomor: 10,
        tipe: 'isian_singkat',
        pertanyaan: `Sesuaikan diagram lingkaran untuk menunjukkan proporsi peserta pada setiap kelas.`,
        kunci: `Kelas Akuntansi 20% (4); Kelas Perpajakan 10% (2); Kelas Audit 10% (2); Kelas Manajemen Risiko 60% (12).`,
        pembahasan: `Jenis soal: Pie Chart (informasi penuh).
Kelas Perpajakan = 2.
Kelas Audit = Kelas Perpajakan = 2.
Kelas Akuntansi = Kelas Audit + 2 = 2 + 2 = 4.
Kelas Manajemen Risiko = 3 × Kelas Akuntansi = 3 × 4 = 12.
Jumlah = 4 + 2 + 2 + 12 = 20 (cocok dengan jumlah yang diketahui).
Persentase = jumlah ÷ 20: Kelas Akuntansi 20%, Kelas Perpajakan 10%, Kelas Audit 10%, Kelas Manajemen Risiko 60%.
Jawaban: Kelas Akuntansi 20% (4); Kelas Perpajakan 10% (2); Kelas Audit 10% (2); Kelas Manajemen Risiko 60% (12).
Kondisi akhir (kunci):
⟦gambar:gambar/jadiojk/pcam10-tpd-gen-pn-10-kunci.png⟧`,
        tingkat: 'sedang',
        status: 'draft',
      },
    ],
  },
];
