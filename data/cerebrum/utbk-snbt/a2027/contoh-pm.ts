import type { Kelompok } from '@/lib/skema';

/**
 * Contoh soal Penalaran Matematika (PM) UTBK-SNBT 2027.
 *
 * Sumber: dokumen internal "Contoh Soal UTBK" (bagian PM, 98 soal; dua soal dinding ditulis "SOAL 11" dan
 * "SOAL 12" dengan huruf kapital, jadi pencarian "Soal N" biasa hanya menemukan 96). Dokumen itu TIDAK
 * memuat kunci dan pembahasan, jadi semuanya disusun ulang dan berstatus 'draft' sampai diperiksa tim
 * akademik. Setiap soal hitungan dihitung ulang dengan Python (hitungan langsung, pencarian lengkap
 * untuk peluang dan kombinatorika, simulasi bulan demi bulan untuk barisan).
 *
 * Nomor di sumber ada yang kembar dalam satu submateri (mis. dua "no. 16" pada Peluang, dua "no. 10" pada
 * Geometri), jadi soal yang dilewati ditulis dengan nama konteksnya.
 *
 * 37 soal dipasang; 61 soal sumber tidak dimasukkan:
 *   - 28 karena datanya keliru atau kuncinya ambigu:
 *       Bilangan: Femi no. 2 (satuan "m" atau "km" tidak jelas), kulkas no. 5 (total Januari sampai April
 *       6.480 tidak ada di pilihan);
 *       Peluang: RT panitia no. 14 (delapan jabatan tidak mungkin berasal dari tiga RT yang berbeda) dan
 *       no. 16 pertama (kunci naif menghitung wakil dari 26 orang tanpa memperhitungkan sekretaris
 *       perempuan; hitungan benar 93.508.800 tidak ada di pilihan);
 *       Geometri: jembatan no. 3 (kalimat soal rusak: "perbandingan luas segitiga AP : PC") dan no. 4 (hasil
 *       akar 97 tidak ada di pilihan); taman segitiga no. 7 (hasil 10 akar 2 tidak ada di pilihan) dan no. 8
 *       (tanpa pilihan jawaban); taman lingkaran no. 10 pertama (tanpa pilihan jawaban, jari-jari lintasan
 *       tidak dinyatakan); dinding no. 11 (menurut kalimat soal hasilnya 550 menit, tidak ada di pilihan;
 *       400 menit hanya bila syarat "dicat putih dulu" diabaikan) dan no. 12 (hasilnya 220 dm, sedangkan
 *       pilihan bersatuan cm); stadion no. 15 (kecepatan x tidak diketahui) dan no. 16 (dengan jari-jari
 *       lintasan 90 m dari jarak lampu, hasilnya 2100 pi K, tidak ada di pilihan);
 *       Statistika: sampah no. 1 (hasil negatif) dan no. 4 (perbandingan tidak tertentu); kota no. 5, 7, 8
 *       (perlu asumsi bahwa tiap jenis sampah terbagi proporsional ke tiap tempat pembuangan, yang tidak
 *       dinyatakan); taman bermain no. 13 (arah pergeseran akibat hujan tidak diketahui); tinggi badan
 *       no. 17 (data berkelompok, jumlah siswa di atas rata-rata tidak dapat ditentukan), no. 19 (median
 *       165,5 tidak ada di pilihan), no. 20 (tafsir ganda: tinggi 155 dibaca 155 atau 155,5);
 *       Aljabar: toko TEKS 4 no. 3 (5 kayu, 4 tembok, 4 besi tidak tertentu dari dua persamaan) dan perahu
 *       no. 12 (baris keempat tanpa soal);
 *       Aritmatika Sosial: ponsel no. 3 (18 kali angsuran tidak ada di pilihan 19 sampai 23) dan no. 4 (teks
 *       rusak); Ari no. 8 (jawabannya bulan ke-12, tidak ada di pilihan 5 sampai 9) dan no. 10 (1.387.500
 *       tidak ada di pilihan);
 *   - 7 karena kembar: Peluang no. 5 (soal no. 3 dengan Q = 1/3), no. 12 (versi pilihan ganda no. 2) dan
 *     no. 19 (sama dengan no. 3, pilihan rusak); Aljabar TEKS 16 no. 5, 6, 8 (sama dengan soal toko TEKS 4
 *     no. 1, 2, 4); Aritmatika Sosial kapal no. 6 (sama dengan no. 5);
 *   - 26 yang sah tetapi tidak dipilih (batas sekitar lima sampai tujuh soal per submateri dan variasi tipe
 *     soal): Bilangan no. 6 (kulkas) dan no. 9 (Paramecium); Peluang no. 2, 6, 8, 9, 11, 13, 15, 17 (dua
 *     soal Wayan) dan 20; Geometri taman segitiga no. 5 dan 6, lahan no. 13 pertama, stadion no. 17, 18,
 *     19; Statistika kota no. 6, taman bermain no. 10 dan 11, tabel perusahaan no. 15, tinggi badan no. 18;
 *     Aljabar Nysa no. 5, abon no. 10, toko TEKS 16 no. 7.
 * Tabel di sumber ditulis ulang sebagai teks; judul kolom tabel Perusahaan X yang bergeser di sumber dibaca
 * sebagai manajer (baru, mengundurkan diri) lalu teknisi (baru, mengundurkan diri). Salah ketik jelas di
 * sumber diperbaiki (mis. "parjang" menjadi "panjang", "took" menjadi "toko", "ZZ unit" menjadi "unit",
 * "kecepetan" menjadi "kecepatan"). Dua kalimat sumber yang rusak ditulis ulang agar utuh: aturan kenaikan
 * produksi kulkas ("setengah kenaikan produksi dari menjadi kenaikan sebelumnya" menjadi "kenaikan produksi
 * menjadi setengah dari kenaikan sebelumnya") dan daftar interval lama bermain di taman (interval 28-37
 * ditambahkan, mengikuti tabel).
 */
export const contohPM: Kelompok[] = [
  // ── Bilangan ──────────────────────────────────────────────────────────────
  {
    stimulus: {
      judul: 'Latihan Lari Lintas Alam Femi',
      isi: `Femi mulai berlatih untuk mengikuti lomba lari lintas alam sejauh 8 km dengan berlari setiap pekan selama 28 pekan. Femi mengawali latihan dengan berlari sejauh 2,3 km pada pekan pertama. Setiap pekan setelah itu dia berlari 250 m lebih jauh dari pekan sebelumnya sampai dia berlari melampaui jarak sesungguhnya untuk dapat menyelesaikan panjang lintasan lari lintas alam. Setiap pekan setelah itu dia menyelesaikan lintasan tanpa menambah jarak.`,
    },
    soal: [
      // contoh hal. 43, Bilangan no. 1
      {
        nomor: 1,
        tipe: 'pg',
        pertanyaan: `Jika \\(\\ell_n\\) menyatakan panjang lintasan yang ditempuh Femi pada pekan ke-\\(n\\), \\(\\ell_n = \\cdots\\)`,
        opsi: [
          { label: 'A', teks: `\\(0,25n + 2,05,\\ n = 1, 2, \\ldots, 28\\)` },
          { label: 'B', teks: `\\(0,25n + 2,05,\\ n = 1, 2, \\ldots, 24\\)` },
          { label: 'C', teks: `\\(0,25n + 2,3,\\ n = 0, 1, 2, \\ldots, 28\\)` },
          { label: 'D', teks: `\\(0,2n + 2,3,\\ n = 0, 1, 2, \\ldots, 24\\)` },
          { label: 'E', teks: `\\(0,2n + 2,1,\\ n = 1, 2, \\ldots, 28\\)` },
        ],
        kunci: 'B',
        pembahasan: `Submateri: Bilangan.
Pekan pertama 2,3 km dan tiap pekan berikutnya bertambah 0,25 km, jadi \\(\\ell_n = 2,3 + 0,25\\,(n - 1) = 0,25n + 2,05\\) selama jaraknya belum melampaui 8 km.
\\(0,25n + 2,05 > 8\\) terjadi saat \\(n > 23,8\\). Jadi pada pekan ke-24 jarak pertama kali melampaui 8 km: \\(0,25 \\times 24 + 2,05 = 8,05\\) km. Setelah itu jaraknya tetap 8,05 km.
Rumus \\(0,25n + 2,05\\) hanya berlaku untuk \\(n = 1, 2, \\ldots, 24\\) (opsi B). Opsi A memakai rumus yang sama sampai \\(n = 28\\), padahal pada pekan ke-28 rumus itu memberi 9,05 km, sedangkan jarak sudah tidak bertambah lagi.
Opsi C dan D memberi \\(\\ell_1 = 2,55\\) dan \\(\\ell_1 = 2,5\\) (seharusnya 2,3). Opsi E memberi \\(\\ell_2 = 2,5\\) (seharusnya 2,55).
Jawaban: B`,
        status: 'draft',
      },
      // contoh hal. 44, Bilangan no. 3
      {
        nomor: 2,
        tipe: 'pg',
        pertanyaan: `Jika pada pekan ke-10, ke-13, dan ke-17 Femi tidak dapat melakukan latihan, jumlah jarak yang Femi tempuh sampai pekan ke-18 adalah … km.`,
        opsi: [
          { label: 'A', teks: `51,90` },
          { label: 'B', teks: `57,20` },
          { label: 'C', teks: `58,20` },
          { label: 'D', teks: `63,50` },
          { label: 'E', teks: `79,65` },
        ],
        kunci: 'D',
        pembahasan: `Submateri: Bilangan.
Sampai pekan ke-18 jaraknya masih bertambah: \\(\\ell_n = 0,25n + 2,05\\), jadi \\(\\ell_1 = 2,3\\) dan \\(\\ell_{18} = 6,55\\).
Jumlah pekan ke-1 sampai ke-18 jika tidak ada yang libur \\(= \\frac{18}{2}\\,(2,3 + 6,55) = 79,65\\) km.
Jarak pekan yang tidak dilatih: \\(\\ell_{10} = 4,55\\), \\(\\ell_{13} = 5,3\\), dan \\(\\ell_{17} = 6,3\\), jumlahnya 16,15 km.
Jarak yang ditempuh \\(= 79,65 - 16,15 = 63,5\\) km. (Opsi E, 79,65 km, adalah hasil jika tidak ada pekan libur.)
Jawaban: D`,
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      judul: 'Produksi Kulkas dengan Strategi Adaptif',
      isi: `Sebuah perusahaan produksi kulkas mencatat bahwa pada Januari 2022 jumlah produksinya adalah 1.500 unit, sedangkan pada Februari 2022 meningkat menjadi 1.580 unit.
Manajemen menyatakan bahwa kenaikan produksi tidak selalu tetap, melainkan mengikuti strategi adaptif: Jika permintaan stabil, produksi naik dengan selisih yang sama seperti bulan sebelumnya. Namun, jika total produksi sudah melampaui 5.000 unit secara kumulatif, maka mulai bulan berikutnya kenaikan produksi menjadi setengah dari kenaikan sebelumnya (dibulatkan ke bawah jika perlu).`,
    },
    soal: [
      // contoh hal. 44, Bilangan no. 4
      {
        nomor: 3,
        tipe: 'pg',
        pertanyaan: `Diasumsikan permintaan pasar stabil hingga April, dan setelah itu aturan penyesuaian mulai berlaku jika syarat terpenuhi. Produksi bulan Maret 2022 adalah ...`,
        opsi: [
          { label: 'A', teks: `1.620` },
          { label: 'B', teks: `1.640` },
          { label: 'C', teks: `1.660` },
          { label: 'D', teks: `1.680` },
          { label: 'E', teks: `1.700` },
        ],
        kunci: 'C',
        pembahasan: `Submateri: Bilangan.
Kenaikan dari Januari ke Februari \\(= 1.580 - 1.500 = 80\\) unit.
Permintaan stabil, jadi kenaikan bulan Maret sama dengan bulan sebelumnya: \\(1.580 + 80 = 1.660\\) unit.
(Total Januari sampai Maret \\(= 1.500 + 1.580 + 1.660 = 4.740\\) unit, belum melampaui 5.000, jadi aturan penyesuaian belum berlaku.)
Jawaban: C`,
        status: 'draft',
      },
      // contoh hal. 45, Bilangan no. 7
      {
        nomor: 4,
        tipe: 'pg',
        pertanyaan: `Manakah pernyataan berikut yang BENAR?`,
        opsi: [
          { label: 'A', teks: `Produksi selalu membentuk barisan aritmetika sampai Juni` },
          { label: 'B', teks: `Setelah melewati 5.000 unit, produksi menjadi konstan` },
          { label: 'C', teks: `Kenaikan produksi setelah April lebih kecil dibanding sebelumnya` },
          { label: 'D', teks: `Total produksi Mei lebih kecil dari April` },
          { label: 'E', teks: `Tidak ada perubahan pola` },
        ],
        kunci: 'C',
        pembahasan: `Submateri: Bilangan.
Produksi: Januari 1.500; Februari 1.580; Maret 1.660; April 1.740 (kenaikan 80 per bulan, permintaan stabil). Total Januari sampai April \\(= 6.480\\) unit, sudah melampaui 5.000.
Mulai bulan berikutnya kenaikan menjadi setengahnya: Mei \\(= 1.740 + 40 = 1.780\\), Juni \\(= 1.780 + 20 = 1.800\\). Kenaikan tiap bulan: 80, 80, 80, 40, 20.
(A) salah: kenaikannya tidak tetap setelah April, jadi bukan barisan aritmetika sampai Juni. (B) salah: produksi tetap naik (40, lalu 20). (C) benar: kenaikan setelah April (40 dan 20) lebih kecil daripada kenaikan sebelumnya (80). (D) salah: produksi Mei (1.780) lebih besar daripada April (1.740). (E) salah: pola kenaikannya berubah setelah April.
Jawaban: C`,
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      judul: 'Pengamatan Paramecium',
      isi: `Seorang peneliti melakukan pengamatan terhadap 50 Paramecium sejak pukul 07.00. Paramecium tersebut membelah diri menjadi 2 kali lipat dari sebelumnya setiap setengah jam dengan pembelahan pertama terjadi pada pukul 07.30. Namun sejak pembelahan pada pukul 10.00, setelah proses pembelahan selesai, 0,25 dari banyaknya paramecium yang ada, langsung menjadi tidak aktif (inaktif).`,
    },
    soal: [
      // contoh hal. 45-46, Bilangan no. 8
      {
        nomor: 5,
        tipe: 'pg',
        pertanyaan: `Berapa banyak paramecium pada pukul 09.30?`,
        opsi: [
          { label: 'A', teks: `12.800` },
          { label: 'B', teks: `6.400` },
          { label: 'C', teks: `8.400` },
          { label: 'D', teks: `1.600` },
          { label: 'E', teks: `3.200` },
        ],
        kunci: 'D',
        pembahasan: `Submateri: Bilangan.
Jumlah menjadi 2 kali lipat setiap setengah jam, dimulai dari 50 pada pukul 07.00:
07.30 → 100; 08.00 → 200; 08.30 → 400; 09.00 → 800; 09.30 → 1.600.
Sampai pukul 09.30 belum ada yang menjadi tidak aktif (itu baru mulai setelah pembelahan pukul 10.00). Jadi jumlahnya 1.600.
Jawaban: D`,
        status: 'draft',
      },
      // contoh hal. 46, Bilangan no. 10
      {
        nomor: 6,
        tipe: 'pg',
        pertanyaan: `Total paramecium yang tidak aktif sejak awal pengamatan hingga pembelahan pada pukul 12:00 adalah...`,
        opsi: [
          { label: 'A', teks: `3.000` },
          { label: 'B', teks: `5.500` },
          { label: 'C', teks: `8.750` },
          { label: 'D', teks: `9.000` },
          { label: 'E', teks: `10.550` },
        ],
        kunci: 'E',
        pembahasan: `Submateri: Bilangan.
Anggaplah paramecium yang sudah tidak aktif tidak membelah lagi, dan 0,25 dihitung dari paramecium yang aktif setelah pembelahan. Dari 1.600 pada pukul 09.30:
10.00: 1.600 membelah menjadi 3.200; tidak aktif baru 800; aktif 2.400.
10.30: 2.400 membelah menjadi 4.800; tidak aktif baru 1.200; aktif 3.600.
11.00: 3.600 membelah menjadi 7.200; tidak aktif baru 1.800; aktif 5.400.
11.30: 5.400 membelah menjadi 10.800; tidak aktif baru 2.700; aktif 8.100.
12.00: 8.100 membelah menjadi 16.200; tidak aktif baru 4.050; aktif 12.150.
Total tidak aktif \\(= 800 + 1.200 + 1.800 + 2.700 + 4.050 = 10.550\\).
Jawaban: E`,
        status: 'draft',
      },
    ],
  },
  // ── Peluang dan Kombinatorika ─────────────────────────────────────────────
  {
    soal: [
      // contoh hal. 46, Peluang dan Kombinatorika no. 1
      {
        nomor: 7,
        tipe: 'isian_singkat',
        pertanyaan: `Banyaknya permutasi enam digit dari angka 1, 2, 3, 4, 5, 7 dengan syarat digit-digit genap tidak berdampingan adalah ....`,
        kunci: '480',
        pembahasan: `Submateri: Peluang dan Kombinatorika.
Keenam angka dipakai semuanya. Angka genapnya 2 dan 4, angka ganjilnya 1, 3, 5, 7.
Semua permutasi: \\(6! = 720\\). Permutasi dengan 2 dan 4 berdampingan: anggap "24" atau "42" satu blok, sehingga \\(2 \\times 5! = 240\\).
Yang digit genapnya tidak berdampingan \\(= 720 - 240 = 480\\).
(Cara lain: susun 4 angka ganjil dulu, \\(4! = 24\\); lalu tempatkan 2 angka genap pada 5 celah yang tersedia, \\(5 \\times 4 = 20\\). Hasilnya \\(24 \\times 20 = 480\\).)
Jawaban: 480`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      // contoh hal. 47, Peluang dan Kombinatorika no. 3
      {
        nomor: 8,
        tipe: 'pg',
        pertanyaan: `Dipilih secara acak satu bilangan dua digit yang kedua digitnya berbeda dan ganjil.
Berdasarkan informasi yang diberikan, manakah hubungan antara kuantitas \\(P\\) dan \\(Q\\) berikut yang benar?
Kuantitas \\(P\\): Peluang digit puluhan lebih dari digit satuan
Kuantitas \\(Q\\): 0,5`,
        opsi: [
          { label: 'A', teks: `Kuantitas \\(P\\) lebih dari atau sama dengan 2 kali kuantitas \\(Q\\)` },
          { label: 'B', teks: `Kuantitas \\(P\\) lebih dari kuantitas \\(Q\\) tetapi kurang dari 2 kali kuantitas \\(Q\\)` },
          { label: 'C', teks: `Kuantitas \\(P\\) sama dengan kuantitas \\(Q\\)` },
          { label: 'D', teks: `Kuantitas \\(P\\) kurang dari kuantitas \\(Q\\)` },
          { label: 'E', teks: `Tidak dapat ditentukan hubungan antara kuantitas \\(P\\) dan \\(Q\\)` },
        ],
        kunci: 'C',
        pembahasan: `Submateri: Peluang dan Kombinatorika.
Digit ganjil: 1, 3, 5, 7, 9. Bilangan dua digit yang kedua digitnya ganjil dan berbeda: \\(5 \\times 4 = 20\\) bilangan.
Yang digit puluhannya lebih dari digit satuannya: dari 2 digit ganjil yang berbeda, tepat satu urutan memenuhi, jadi banyaknya \\(\\binom{5}{2} = 10\\).
\\(P = \\frac{10}{20} = 0,5 = Q\\). Jadi \\(P\\) sama dengan \\(Q\\).
Jawaban: C`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      // contoh hal. 47, Peluang dan Kombinatorika no. 4
      {
        nomor: 9,
        tipe: 'pg',
        pertanyaan: `Dari huruf-huruf penyusun kata MATEMATIKA, akan disusun sebuah kata yang tidak harus memiliki makna. Huruf pertama dan terakhir setiap kata yang disusun adalah huruf M.
Berdasarkan informasi yang diberikan, manakah hubungan antara kuantitas \\(P\\) dan \\(Q\\) berikut yang benar?
Kuantitas \\(P\\): Banyak kata yang dibentuk
Kuantitas \\(Q\\): 3.000`,
        opsi: [
          { label: 'A', teks: `Kuantitas \\(P\\) lebih dari atau sama dengan 2 kali kuantitas \\(Q\\)` },
          { label: 'B', teks: `Kuantitas \\(P\\) lebih dari kuantitas \\(Q\\) tetapi kurang dari 2 kali kuantitas \\(Q\\)` },
          { label: 'C', teks: `Kuantitas \\(P\\) sama dengan kuantitas \\(Q\\)` },
          { label: 'D', teks: `Kuantitas \\(P\\) kurang dari kuantitas \\(Q\\)` },
          { label: 'E', teks: `Tidak dapat ditentukan hubungan antara kuantitas \\(P\\) dan \\(Q\\)` },
        ],
        kunci: 'B',
        pembahasan: `Submateri: Peluang dan Kombinatorika.
MATEMATIKA terdiri atas 10 huruf: M (2), A (3), T (2), E (1), I (1), K (1).
Kedua huruf M ditempatkan di ujung (pertama dan terakhir). Sisanya 8 huruf: A (3), T (2), E, I, K.
Banyak susunan \\(= \\frac{8!}{3!\\,2!} = \\frac{40.320}{12} = 3.360\\), jadi \\(P = 3.360\\).
\\(Q = 3.000\\). Karena \\(3.000 < P < 6.000 = 2Q\\), \\(P\\) lebih dari \\(Q\\) tetapi kurang dari 2 kali \\(Q\\).
Jawaban: B`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      // contoh hal. 48, Peluang dan Kombinatorika no. 7
      {
        nomor: 10,
        tipe: 'pg',
        pertanyaan: `Dalam sebuah kotak terdapat 5 bola biru, 4 bola merah, dan 3 bola kuning.
Tiga bola diambil sekaligus secara acak tanpa pengembalian.
Peluang terambil tepat 1 bola biru dan setidaknya 1 bola merah adalah ....`,
        opsi: [
          { label: 'A', teks: `\\(\\frac{7}{22}\\)` },
          { label: 'B', teks: `\\(\\frac{9}{22}\\)` },
          { label: 'C', teks: `\\(\\frac{5}{11}\\)` },
          { label: 'D', teks: `\\(\\frac{6}{11}\\)` },
          { label: 'E', teks: `\\(\\frac{1}{2}\\)` },
        ],
        kunci: 'B',
        pembahasan: `Submateri: Peluang dan Kombinatorika.
Semua cara mengambil 3 dari 12 bola: \\(\\binom{12}{3} = 220\\).
Kejadian "tepat 1 biru dan sekurang-kurangnya 1 merah" terjadi dengan dua cara:
- 1 biru, 1 merah, 1 kuning: \\(5 \\times 4 \\times 3 = 60\\) cara.
- 1 biru, 2 merah: \\(5 \\times \\binom{4}{2} = 5 \\times 6 = 30\\) cara.
Total 90 cara. Peluangnya \\(\\frac{90}{220} = \\frac{9}{22}\\).
Jawaban: B`,
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      judul: 'Peternakan Ayam',
      isi: `Di sebuah peternakan, terdapat 16 ayam putih dan 14 ayam hitam, dengan rincian sebagai berikut:
• 16 ayam putih, terdiri dari 10 betina dan 6 jantan
• 14 ayam hitam terdiri dari 4 betina dan 10 jantan`,
    },
    soal: [
      // contoh hal. 49, Peluang dan Kombinatorika no. 10
      {
        nomor: 11,
        tipe: 'pg',
        pertanyaan: `Jika diketahui bahwa dari 2 ayam yang dipilih, minimal 1 ayam betina, maka peluang bahwa kedua ayam tersebut betina adalah...`,
        opsi: [
          { label: 'A', teks: `\\(\\frac{5}{14}\\)` },
          { label: 'B', teks: `\\(\\frac{7}{18}\\)` },
          { label: 'C', teks: `\\(\\frac{10}{21}\\)` },
          { label: 'D', teks: `\\(\\frac{15}{28}\\)` },
          { label: 'E', teks: `\\(\\frac{13}{45}\\)` },
        ],
        kunci: 'E',
        pembahasan: `Submateri: Peluang dan Kombinatorika.
Seluruhnya ada 30 ayam: betina \\(= 10 + 4 = 14\\), jantan \\(= 6 + 10 = 16\\).
Dua ayam dipilih dari 30: \\(\\binom{30}{2} = 435\\) cara.
Minimal 1 betina = semua cara dikurangi cara tanpa betina (2 jantan): \\(435 - \\binom{16}{2} = 435 - 120 = 315\\).
Kedua ayam betina: \\(\\binom{14}{2} = 91\\).
Peluang bersyarat \\(= \\frac{91}{315} = \\frac{13}{45}\\).
Jawaban: E`,
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      judul: 'Burung Jalak Wayan',
      isi: `Wayan punya 11 burung jalak putih dan 10 jalak naren, semuanya berbeda.
4 teman Wayan, yaitu Ahmad, Budi, Candra, dan Sanu, bertamu di rumah Wayan dan masing-masing akan diberi 1 burung. Mereka boleh memilih berbeda.`,
    },
    soal: [
      // contoh hal. 50, Peluang dan Kombinatorika no. 16 (kedua)
      {
        nomor: 12,
        tipe: 'pg',
        pertanyaan: `Jika keempat teman Wayan memilih burung secara acak, peluang Ahmad mendapat jalak putih atau Budi mendapat burung jalak naren adalah:`,
        opsi: [
          { label: 'A', teks: `\\(\\frac{49}{63}\\)` },
          { label: 'B', teks: `\\(\\frac{31}{42}\\)` },
          { label: 'C', teks: `\\(\\frac{40}{63}\\)` },
          { label: 'D', teks: `\\(\\frac{25}{42}\\)` },
          { label: 'E', teks: `\\(\\frac{25}{63}\\)` },
        ],
        kunci: 'B',
        pembahasan: `Submateri: Peluang dan Kombinatorika.
Setiap teman mendapat satu burung, dan setiap burung hanya diberikan kepada satu teman (21 burung: 11 putih, 10 naren).
\\(P(\\text{Ahmad putih}) = \\frac{11}{21}\\) dan \\(P(\\text{Budi naren}) = \\frac{10}{21}\\).
\\(P(\\text{Ahmad putih dan Budi naren}) = \\frac{11}{21} \\times \\frac{10}{20} = \\frac{11}{42}\\).
\\(P(\\text{Ahmad putih atau Budi naren}) = \\frac{11}{21} + \\frac{10}{21} - \\frac{11}{42} = 1 - \\frac{11}{42} = \\frac{31}{42}\\).
Jawaban: B`,
        status: 'draft',
      },
      // contoh hal. 51, Peluang dan Kombinatorika no. 18
      {
        nomor: 13,
        tipe: 'pg',
        pertanyaan: `Peluang Candra atau Sanu mendapat naren dengan syarat Budi mendapat putih adalah:`,
        opsi: [
          { label: 'A', teks: `\\(\\frac{31}{38}\\)` },
          { label: 'B', teks: `\\(\\frac{29}{38}\\)` },
          { label: 'C', teks: `\\(\\frac{15}{19}\\)` },
          { label: 'D', teks: `\\(\\frac{10}{19}\\)` },
          { label: 'E', teks: `\\(\\frac{2}{20}\\)` },
        ],
        kunci: 'B',
        pembahasan: `Submateri: Peluang dan Kombinatorika.
Setiap burung hanya diberikan kepada satu teman. Jika Budi mendapat putih, tersisa 20 burung: 10 putih dan 10 naren.
Peluang "Candra atau Sanu mendapat naren" \\(= 1 - P(\\text{keduanya putih})\\).
\\(P(\\text{Candra dan Sanu putih}) = \\frac{10}{20} \\times \\frac{9}{19} = \\frac{90}{380} = \\frac{9}{38}\\).
Peluang yang ditanyakan \\(= 1 - \\frac{9}{38} = \\frac{29}{38}\\).
Jawaban: B`,
        status: 'draft',
      },
    ],
  },
  // ── Geometri ──────────────────────────────────────────────────────────────
  {
    stimulus: {
      judul: 'Jembatan Penyeberangan Berbentuk Trapesium',
      isi: `Sebuah jembatan penyeberangan dilihat dari samping memiliki bentuk trapesium \\(ABCD\\), dengan \\(AB\\) pada lantai jembatan dan \\(CD\\) pada rangka bagian atas jembatan. Untuk menguatkan struktur jembatan, dipasang diagonal \\(AC\\) dan \\(BD\\) yang berpotongan di titik \\(P\\).
⟦gambar:gambar/cerebrum/utbk2027-pm-geometri-jembatan.png⟧`,
    },
    soal: [
      // contoh hal. 52, Geometri no. 1
      {
        nomor: 14,
        tipe: 'pg',
        pertanyaan: `Diketahui bahwa \\(AB = 12\\) meter dan \\(CD = 6\\) meter. Jika \\(AD = BC\\) dan tinggi jembatan 4 meter, panjang \\(AD\\) adalah ... meter.`,
        opsi: [
          { label: 'A', teks: `5` },
          { label: 'B', teks: `6` },
          { label: 'C', teks: `7` },
          { label: 'D', teks: `8` },
          { label: 'E', teks: `9` },
        ],
        kunci: 'A',
        pembahasan: `Submateri: Geometri.
\\(AD = BC\\) berarti trapesium sama kaki. Selisih panjang alas \\(AB - CD = 12 - 6 = 6\\) m, jadi di setiap sisi ada bagian mendatar \\(\\frac{6}{2} = 3\\) m.
Tinggi jembatan 4 m, sehingga kaki \\(AD = \\sqrt{3^{2} + 4^{2}} = \\sqrt{25} = 5\\) m.
Jawaban: A`,
        status: 'draft',
      },
      // contoh hal. 52-53, Geometri no. 2
      {
        nomor: 15,
        tipe: 'pg',
        pertanyaan: `Sebuah jembatan memiliki bentuk trapesium \\(ABCD\\) dengan \\(AB \\parallel CD\\), panjang \\(AB = 14\\ \\text{m}\\) dan \\(CD = 8\\ \\text{m}\\). Tinggi trapesium adalah \\(6\\ \\text{m}\\). Diagonal \\(AC\\) dan \\(BD\\) berpotongan di \\(P\\). Perbandingan luas segitiga \\(APB\\) dan \\(CPD\\) adalah…`,
        opsi: [
          { label: 'A', teks: `\\(1 : 1\\)` },
          { label: 'B', teks: `\\(7 : 4\\)` },
          { label: 'C', teks: `\\(2 : 1\\)` },
          { label: 'D', teks: `\\(14 : 8\\)` },
          { label: 'E', teks: `\\(49 : 16\\)` },
        ],
        kunci: 'E',
        pembahasan: `Submateri: Geometri.
\\(AB \\parallel CD\\), jadi sudut-sudut yang bersesuaian pada segitiga \\(APB\\) dan \\(CPD\\) sama besar, sehingga kedua segitiga sebangun.
Perbandingan sisi yang bersesuaian \\(AB : CD = 14 : 8 = 7 : 4\\).
Perbandingan luas dua segitiga sebangun sama dengan kuadrat perbandingan sisinya: \\(7^{2} : 4^{2} = 49 : 16\\).
Jawaban: E`,
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      judul: 'Lahan Persegi dan Taman Segitiga',
      isi: `Sebuah lahan berbentuk persegi berukuran \\(40\\ \\text{cm} \\times 40\\ \\text{cm}\\) akan dibuat beberapa taman berbentuk segitiga siku-siku sama kaki. Segitiga pertama (\\(T_1\\)) memiliki kaki \\(40\\ \\text{cm}\\) dan menempati setengah dari persegi. Sisa area kemudian digunakan untuk membuat segitiga kedua (\\(T_2\\)) dengan panjang kaki setengah dari \\(T_1\\), yaitu \\(20\\ \\text{cm}\\). Proses ini berlanjut ke segitiga berikutnya (\\(T_3\\), \\(T_4\\), dan seterusnya), di mana setiap segitiga baru memiliki ukuran sisi kaki setengah dari segitiga sebelumnya dan ditempatkan pada sisa area yang semakin kecil, mengikuti sisi miring atau sisi tegak segitiga sebelumnya. Analisis panjang sisi miring dan luas sisa lahan diperlukan untuk memahami pola ini.
⟦gambar:gambar/cerebrum/utbk2027-pm-geometri-lahan-segitiga.png⟧`,
    },
    soal: [
      // contoh hal. 58, Geometri no. 12 (lahan)
      {
        nomor: 16,
        tipe: 'pg',
        pertanyaan: `Jika area segitiga pertama (\\(T_1\\)) dan segitiga kedua (\\(T_2\\)) digunakan untuk area tanaman, berapakah luas sisa lahan persegi yang tidak terpakai?`,
        opsi: [
          { label: 'A', teks: `\\(400\\ \\text{cm}^{2}\\)` },
          { label: 'B', teks: `\\(600\\ \\text{cm}^{2}\\)` },
          { label: 'C', teks: `\\(800\\ \\text{cm}^{2}\\)` },
          { label: 'D', teks: `\\(1.000\\ \\text{cm}^{2}\\)` },
          { label: 'E', teks: `\\(1.200\\ \\text{cm}^{2}\\)` },
        ],
        kunci: 'B',
        pembahasan: `Submateri: Geometri.
Luas lahan \\(= 40 \\times 40 = 1.600\\ \\text{cm}^{2}\\).
Luas \\(T_1 = \\frac{1}{2} \\times 40 \\times 40 = 800\\ \\text{cm}^{2}\\) dan luas \\(T_2 = \\frac{1}{2} \\times 20 \\times 20 = 200\\ \\text{cm}^{2}\\). Yang dipakai: \\(800 + 200 = 1.000\\ \\text{cm}^{2}\\).
Luas sisa \\(= 1.600 - 1.000 = 600\\ \\text{cm}^{2}\\).
Jawaban: B`,
        status: 'draft',
      },
      // contoh hal. 58-59, Geometri no. 13 (lahan)
      {
        nomor: 17,
        tipe: 'pg_kategori',
        pertanyaan: `Berdasarkan pola fraktal segitiga tersebut, tentukan kebenaran pernyataan berikut.`,
        opsi: [
          { label: 'A', teks: `Luas segitiga ketiga (\\(T_3\\)) adalah \\(50\\ \\text{cm}^{2}\\)` },
          { label: 'B', teks: `Luas segitiga ketiga (\\(T_3\\)) adalah \\(50\\ \\text{cm}^{3}\\)` },
          { label: 'C', teks: `Keliling segitiga ketiga (\\(T_3\\)) adalah \\(\\left(20 + 10\\sqrt{2}\\right)\\ \\text{cm}\\).` },
        ],
        kategori: ['Benar', 'Salah'],
        kunci: 'Benar, Salah, Benar',
        pembahasan: `Submateri: Geometri.
Kaki segitiga: \\(T_1 = 40\\), \\(T_2 = 20\\), \\(T_3 = 10\\) cm.
A. Luas \\(T_3 = \\frac{1}{2} \\times 10 \\times 10 = 50\\ \\text{cm}^{2}\\). Benar.
B. Luas selalu berdimensi cm persegi; \\(\\text{cm}^{3}\\) adalah satuan volume. Salah.
C. Sisi miring \\(T_3 = 10\\sqrt{2}\\) cm, jadi keliling \\(= 10 + 10 + 10\\sqrt{2} = 20 + 10\\sqrt{2}\\) cm. Benar.
Jawaban: A. Benar; B. Salah; C. Benar`,
        status: 'draft',
      },
      // contoh hal. 59, Geometri no. 14 (lahan)
      {
        nomor: 18,
        tipe: 'pg',
        pertanyaan: `Berapakah perbandingan panjang sisi miring segitiga kedua (\\(T_2\\)) terhadap sisi miring segitiga keempat (\\(T_4\\))?`,
        opsi: [
          { label: 'A', teks: `\\(2 : 1\\)` },
          { label: 'B', teks: `\\(4 : 1\\)` },
          { label: 'C', teks: `\\(8 : 1\\)` },
          { label: 'D', teks: `\\(16 : 1\\)` },
          { label: 'E', teks: `\\(32 : 1\\)` },
        ],
        kunci: 'B',
        pembahasan: `Submateri: Geometri.
Kaki tiap segitiga setengah dari sebelumnya: \\(T_2 = 20\\), \\(T_3 = 10\\), \\(T_4 = 5\\) cm.
Sisi miring segitiga siku-siku sama kaki \\(= \\text{kaki} \\times \\sqrt{2}\\), jadi sisi miringnya sebanding dengan kakinya.
Perbandingan sisi miring \\(T_2 : T_4 = 20\\sqrt{2} : 5\\sqrt{2} = 4 : 1\\).
Jawaban: B`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      // contoh hal. 56, Geometri no. 9 (taman)
      {
        nomor: 19,
        tipe: 'pg',
        pertanyaan: `Sebuah taman kecil berbentuk lingkaran yang memiliki tiga lapisan seperti gambar berikut. Diketahui jarak pohon \\(A\\) ke pohon \\(B\\) adalah \\(130\\ \\text{cm}\\) dan \\(\\angle ACB = 90^{\\circ}\\)
⟦gambar:gambar/cerebrum/utbk2027-pm-geometri-taman-lingkaran.png⟧
Diameter taman seluruhnya adalah…`,
        opsi: [
          { label: 'A', teks: `\\(95\\ \\text{cm}\\)` },
          { label: 'B', teks: `\\(125\\ \\text{cm}\\)` },
          { label: 'C', teks: `\\(50\\ \\text{cm}\\)` },
          { label: 'D', teks: `\\(160\\ \\text{cm}\\)` },
          { label: 'E', teks: `\\(190\\ \\text{cm}\\)` },
        ],
        kunci: 'E',
        pembahasan: `Submateri: Geometri.
Titik \\(A\\), \\(B\\), dan \\(C\\) terletak pada lingkaran terdalam, dan \\(\\angle ACB = 90^{\\circ}\\) adalah sudut keliling yang menghadap \\(AB\\). Sudut keliling \\(90^{\\circ}\\) berarti \\(AB\\) adalah diameter lingkaran terdalam: 130 cm, jadi jari-jarinya 65 cm.
Dua lapisan di luarnya masing-masing selebar 20 cm dan 10 cm (sesuai keterangan pada gambar).
Jari-jari taman seluruhnya \\(= 65 + 20 + 10 = 95\\) cm, jadi diameternya \\(2 \\times 95 = 190\\) cm.
(Opsi A, 95 cm, adalah jari-jarinya, bukan diameternya.)
Jawaban: E`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      // contoh hal. 56-57, Geometri no. 10 (dinding)
      {
        nomor: 20,
        tipe: 'pg',
        pertanyaan: `Dinding salah satu sisi ruang tengah berbentuk persegi seperti pada gambar berikut:
⟦gambar:gambar/cerebrum/utbk2027-pm-geometri-dinding-petak.png⟧
Jika biaya pengecatan total adalah Rp160.000,00 dan biaya pengecatan daerah yang diarsir adalah dua kali biaya pengecatan daerah yang putih maka biaya pengecatan untuk satu petak daerah yang diarsir adalah…`,
        opsi: [
          { label: 'A', teks: `Rp2.000,00` },
          { label: 'B', teks: `Rp4.000,00` },
          { label: 'C', teks: `Rp6.000,00` },
          { label: 'D', teks: `Rp8.000,00` },
          { label: 'E', teks: `Rp10.000,00` },
        ],
        kunci: 'A',
        pembahasan: `Submateri: Geometri.
Hitung petak pada gambar: \\(10 \\times 10 = 100\\) petak. Dari luar ke dalam berupa cincin: abu-abu 36 petak, putih 28, abu-abu 20, putih 12, dan 4 petak abu-abu di tengah. Jadi petak berarsir (abu-abu) \\(= 36 + 20 + 4 = 60\\) dan petak putih \\(= 28 + 12 = 40\\).
Kalimat soal dibaca per petak: biaya satu petak berarsir dua kali biaya satu petak putih. Misalkan biaya satu petak putih \\(= x\\), maka satu petak berarsir \\(= 2x\\).
Biaya total: \\(60 \\times 2x + 40 \\times x = 160x = 160.000\\), jadi \\(x = 1.000\\) dan biaya satu petak berarsir \\(= 2x = \\text{Rp}2.000\\).
(Jika dibaca sebagai "total biaya daerah berarsir sama dengan dua kali total biaya daerah putih", biaya per petak berarsir \\(\\approx\\) Rp1.777,78, yang tidak ada di pilihan.)
Jawaban: A`,
        status: 'draft',
      },
    ],
  },
  // ── Statistika dan Interpretasi Data ──────────────────────────────────────
  {
    stimulus: {
      judul: 'Pengelolaan Sampah Suatu Daerah',
      isi: `Dalam rangka meningkatkan efektivitas pengelolaan lingkungan, telah dilakukan pendataan terhadap jumlah sampah yang dihasilkan selama satu minggu pada suatu daerah. Setiap jenis sampah dan metode pengelolaannya dikelompokkan dalam lima kategori seperti tampak pada diagram berikut. Jumlah sampah yang dihasilkan masyarakat daerah tersebut pada bulan September 2024 adalah 120 ton. Setiap jenis sampah diasumsikan hanya masuk ke salah satu kategori pengelolaan.
⟦gambar:gambar/cerebrum/utbk2027-pm-statistika-sampah.png⟧
Isi diagram (ditranskripsikan dari gambar). Jenis Sampah: Organik 40%, Plastik 20%, Kertas 15%, Kaca 10%, Logam 15%. Jenis Pengelolaan: Buang TPA 40%, Pembakaran 20%, Pengomposan 10%, Gunakan Kembali 15%, dan Daur Ulang (sisanya).`,
    },
    soal: [
      // contoh hal. 63, Statistika dan Interpretasi Data no. 2
      {
        nomor: 21,
        tipe: 'pg',
        pertanyaan: `Diketahui total sampah adalah 120 ton. Jika 50% dari sampah plastik dibakar dan sisanya digunakan kembali, maka jumlah sampah plastik yang digunakan kembali adalah…ton`,
        opsi: [
          { label: 'A', teks: `6` },
          { label: 'B', teks: `8` },
          { label: 'C', teks: `10` },
          { label: 'D', teks: `12` },
          { label: 'E', teks: `15` },
        ],
        kunci: 'D',
        pembahasan: `Submateri: Statistika dan Interpretasi Data.
Sampah plastik \\(= 20\\%\\) dari 120 ton \\(= 24\\) ton (diagram Jenis Sampah).
50% dibakar, jadi \\(50\\% \\times 24 = 12\\) ton, dan sisanya \\(24 - 12 = 12\\) ton digunakan kembali.
Jawaban: D`,
        status: 'draft',
      },
      // contoh hal. 63, Statistika dan Interpretasi Data no. 3
      {
        nomor: 22,
        tipe: 'pg',
        pertanyaan: `Jika seluruh sampah yang dikomposkan berasal dari sampah organik, berapakah persentase sampah organik yang tidak dikomposkan?`,
        opsi: [
          { label: 'A', teks: `50%` },
          { label: 'B', teks: `60%` },
          { label: 'C', teks: `75%` },
          { label: 'D', teks: `80%` },
          { label: 'E', teks: `90%` },
        ],
        kunci: 'C',
        pembahasan: `Submateri: Statistika dan Interpretasi Data.
Sampah organik \\(= 40\\%\\) dari 120 ton \\(= 48\\) ton (diagram Jenis Sampah).
Sampah yang dikomposkan \\(= 10\\%\\) dari 120 ton \\(= 12\\) ton (diagram Jenis Pengelolaan), seluruhnya organik.
Bagian organik yang dikomposkan \\(= \\frac{12}{48} = 25\\%\\), jadi yang tidak dikomposkan \\(= 100\\% - 25\\% = 75\\%\\).
Jawaban: C`,
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      judul: 'Lama Bermain Anak di Taman',
      isi: `Di sebuah taman bermain anak-anak, diadakan sebuah penelitian mengenai lamanya waktu bermain anak-anak di lokasi tersebut. Waktu bermain pertama adalah 10 hingga 17 menit, kedua 18 hingga 27 menit, ketiga 28 hingga 37 menit, keempat 38 hingga 47 menit, dan yang terakhir adalah 48 hingga 57 menit. Ternyata waktu lama bermain anak-anak di tempat tersebut dipengaruhi oleh faktor cuaca. Total anak yang bermain di pagi hari adalah 40 anak dan total anak yang bermain di sore hari sama besarnya dengan total anak di pagi hari.
Lama bermain (menit) | Jam pagi (banyak anak) | Jam sore (banyak anak)
10-17 | 7 | 4
18-27 | 18 | 10
28-37 | 10 | 13
38-47 | 2 | 6
48-57 | 3 | 7
Total | 40 | 40`,
    },
    soal: [
      // contoh hal. 66, Statistika dan Interpretasi Data no. 9
      {
        nomor: 23,
        tipe: 'pg',
        pertanyaan: `Perbandingan banyak anak yang bermain lebih dari 37 menit pada pagi dan sore adalah…`,
        opsi: [
          { label: 'A', teks: `6 : 11` },
          { label: 'B', teks: `7 : 12` },
          { label: 'C', teks: `5 : 13` },
          { label: 'D', teks: `4 : 10` },
          { label: 'E', teks: `3 : 8` },
        ],
        kunci: 'C',
        pembahasan: `Submateri: Statistika dan Interpretasi Data.
Lebih dari 37 menit berarti interval 38-47 dan 48-57.
Pagi: \\(2 + 3 = 5\\) anak. Sore: \\(6 + 7 = 13\\) anak.
Perbandingan pagi : sore \\(= 5 : 13\\).
Jawaban: C`,
        status: 'draft',
      },
      // contoh hal. 67, Statistika dan Interpretasi Data no. 12
      {
        nomor: 24,
        tipe: 'pg',
        pertanyaan: `Rata-rata waktu bermain anak pada jam pagi adalah…`,
        opsi: [
          { label: 'A', teks: `23,15 menit` },
          { label: 'B', teks: `24,23 menit` },
          { label: 'C', teks: `25,82 menit` },
          { label: 'D', teks: `26,67 menit` },
          { label: 'E', teks: `27,76 menit` },
        ],
        kunci: 'D',
        pembahasan: `Submateri: Statistika dan Interpretasi Data.
Pakai titik tengah tiap interval: 10-17 \\(\\to\\) 13,5; 18-27 \\(\\to\\) 22,5; 28-37 \\(\\to\\) 32,5; 38-47 \\(\\to\\) 42,5; 48-57 \\(\\to\\) 52,5.
Rata-rata pagi \\(= \\frac{7(13,5) + 18(22,5) + 10(32,5) + 2(42,5) + 3(52,5)}{40} = \\frac{94,5 + 405 + 325 + 85 + 157,5}{40} = \\frac{1.067}{40} \\approx 26,67\\) menit.
Jawaban: D`,
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      judul: 'Karyawan Perusahaan X',
      isi: `Tabel berikut menunjukkan banyaknya karyawan baru dan karyawan yang mengundurkan diri pada dua jenis jabatan di Perusahaan X, yaitu teknisi dan manajer. Perusahaan tersebut berdiri sejak tahun 2018. Total karyawan, termasuk teknisi dan manajer pada awal pendirian adalah 450 dan bertambah 50 orang setiap tahunnya.
Tahun | Manajer: baru | Manajer: mengundurkan diri | Teknisi: baru | Teknisi: mengundurkan diri
2018 | 26 | - | 120 | -
2019 | 20 | 12 | 27 | 12
2020 | 18 | 9 | 24 | 13
2021 | 15 | 9 | 24 | 10
2022 | 16 | 7 | 26 | 10`,
    },
    soal: [
      // contoh hal. 68, Statistika dan Interpretasi Data no. 14
      {
        nomor: 25,
        tipe: 'pg',
        pertanyaan: `Tahun ketika selisih jumlah manajer dan teknisi kurang dari 110 adalah...
(1) 2018
(2) 2019
(3) 2020
(4) 2021`,
        opsi: [
          { label: 'A', teks: `Pilihan (1), (2), dan (3)` },
          { label: 'B', teks: `Pilihan (1) dan (3)` },
          { label: 'C', teks: `Pilihan (2) dan (4)` },
          { label: 'D', teks: `Pilihan (4) saja` },
          { label: 'E', teks: `Semua benar` },
        ],
        kunci: 'A',
        pembahasan: `Submateri: Statistika dan Interpretasi Data.
Jumlah manajer dan teknisi pada akhir tiap tahun dihitung kumulatif: karyawan baru ditambahkan dan yang mengundurkan diri dikurangkan.
Manajer: 2018 \\(= 26\\); 2019 \\(= 26 + 20 - 12 = 34\\); 2020 \\(= 34 + 18 - 9 = 43\\); 2021 \\(= 43 + 15 - 9 = 49\\).
Teknisi: 2018 \\(= 120\\); 2019 \\(= 120 + 27 - 12 = 135\\); 2020 \\(= 135 + 24 - 13 = 146\\); 2021 \\(= 146 + 24 - 10 = 160\\).
Selisih teknisi dan manajer: 2018 \\(= 94\\); 2019 \\(= 101\\); 2020 \\(= 103\\); 2021 \\(= 111\\).
Selisih kurang dari 110 terjadi pada 2018, 2019, dan 2020, yaitu pilihan (1), (2), dan (3).
Jawaban: A`,
        status: 'draft',
      },
      // contoh hal. 69, Statistika dan Interpretasi Data no. 16
      {
        nomor: 26,
        tipe: 'pg',
        pertanyaan: `Pada tahun 2021, proporsi jumlah manajer perusahaan terhadap jumlah karyawan perusahaan adalah…`,
        opsi: [
          { label: 'A', teks: `8,2%` },
          { label: 'B', teks: `11,3%` },
          { label: 'C', teks: `13,5%` },
          { label: 'D', teks: `16,2%` },
          { label: 'E', teks: `24,5%` },
        ],
        kunci: 'A',
        pembahasan: `Submateri: Statistika dan Interpretasi Data.
Jumlah manajer pada akhir 2021 \\(= 26 + (20 - 12) + (18 - 9) + (15 - 9) = 49\\).
Total karyawan 2021: 450 pada 2018 dan bertambah 50 orang tiap tahun, jadi \\(450 + 3 \\times 50 = 600\\).
Proporsi manajer \\(= \\frac{49}{600} \\times 100\\% \\approx 8,2\\%\\).
Jawaban: A`,
        status: 'draft',
      },
    ],
  },
  // ── Aljabar & Fungsi ──────────────────────────────────────────────────────
  {
    stimulus: {
      judul: 'Harga Cat di Toko Bangunan',
      isi: `Di suatu toko bangunan harga jual 2 kaleng cat kayu, 3 kaleng cat tembok, dan 1 kaleng cat besi adalah Rp318.000,00, sementara harga jual 1 kaleng cat kayu dan 2 kaleng cat besi adalah Rp102.000,00.`,
    },
    soal: [
      // contoh hal. 70-71, Aljabar & Fungsi no. 1 (toko bangunan)
      {
        nomor: 27,
        tipe: 'pg',
        pertanyaan: `Jika Pak Tono membeli 1 kaleng cat kayu, 1 kaleng cat tembok, dan 1 kaleng cat besi di toko tersebut, ia harus membayar sebanyak ....`,
        opsi: [
          { label: 'A', teks: `Rp128.000,00` },
          { label: 'B', teks: `Rp132.000,00` },
          { label: 'C', teks: `Rp136.000,00` },
          { label: 'D', teks: `Rp140.000,00` },
          { label: 'E', teks: `Rp144.000,00` },
        ],
        kunci: 'D',
        pembahasan: `Submateri: Aljabar & Fungsi.
Misalkan harga 1 kaleng cat kayu \\(= k\\), cat tembok \\(= t\\), cat besi \\(= b\\) (rupiah).
Diketahui \\(2k + 3t + b = 318.000\\) dan \\(k + 2b = 102.000\\).
Jumlahkan kedua persamaan: \\(3k + 3t + 3b = 420.000\\), sehingga \\(k + t + b = 140.000\\).
Jawaban: D`,
        status: 'draft',
      },
      // contoh hal. 71, Aljabar & Fungsi no. 2 (toko bangunan)
      {
        nomor: 28,
        tipe: 'pg',
        pertanyaan: `Selisih harga 1 kaleng cat tembok dengan 1 kaleng cat besi adalah ....`,
        opsi: [
          { label: 'A', teks: `Rp40.000,00` },
          { label: 'B', teks: `Rp38.000,00` },
          { label: 'C', teks: `Rp36.000,00` },
          { label: 'D', teks: `Rp34.000,00` },
          { label: 'E', teks: `Rp32.000,00` },
        ],
        kunci: 'B',
        pembahasan: `Submateri: Aljabar & Fungsi.
Dengan \\(2k + 3t + b = 318.000\\) dan \\(k + 2b = 102.000\\): kurangkan persamaan pertama dengan dua kali persamaan kedua.
\\((2k + 3t + b) - 2(k + 2b) = 318.000 - 204.000\\), sehingga \\(3t - 3b = 114.000\\).
Jadi \\(t - b = 38.000\\).
Jawaban: B`,
        status: 'draft',
      },
      // contoh hal. 71, Aljabar & Fungsi no. 4 (toko bangunan)
      {
        nomor: 29,
        tipe: 'pg',
        pertanyaan: `Jika harga cat naik, kenaikan harga cat kayu per kaleng adalah \\(\\frac{1}{2}\\) kali kenaikan harga cat tembok per kaleng. Harga cat besi tidak mengalami kenaikan. Jika selisih harga cat tembok dan cat besi per kaleng sekarang Rp48.000,00, maka kenaikan harga cat tembok per kaleng adalah ....`,
        opsi: [
          { label: 'A', teks: `Rp8.000,00` },
          { label: 'B', teks: `Rp9.000,00` },
          { label: 'C', teks: `Rp10.000,00` },
          { label: 'D', teks: `Rp11.000,00` },
          { label: 'E', teks: `Rp12.000,00` },
        ],
        kunci: 'C',
        pembahasan: `Submateri: Aljabar & Fungsi.
Sebelum harga naik, selisih harga cat tembok dan cat besi \\(t - b = 38.000\\) (dari \\(3t - 3b = 318.000 - 2 \\times 102.000 = 114.000\\)).
Setelah naik, selisihnya Rp48.000. Harga cat besi tidak naik, jadi seluruh tambahan selisih berasal dari kenaikan harga cat tembok: \\(48.000 - 38.000 = 10.000\\).
Informasi bahwa kenaikan cat kayu \\(\\frac{1}{2}\\) kali kenaikan cat tembok tidak diperlukan untuk menjawab.
Jawaban: C`,
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      judul: 'Paket Abon Bu Rina',
      isi: `Bu Rina memiliki usaha abon dengan tiga varian: ayam, sapi, dan ikan. Untuk promosi, ia membuat beberapa paket penjualan dengan harga sebagai berikut:
• Paket A terdiri dari 3 kg abon ayam, 2 kg abon sapi, dan 1 kg abon ikan seharga Rp440.000
• Paket B terdiri dari 2 kg abon ayam, 2 kg abon sapi, dan 1 kg abon ikan seharga Rp350.000
Selain itu, Bu Rina menyatakan bahwa: Harga abon sapi lebih mahal Rp10.000 dari abon ikan. Harga abon ayam lebih mahal dari abon sapi.`,
    },
    soal: [
      // contoh hal. 72-73, Aljabar & Fungsi no. 9 (abon)
      {
        nomor: 30,
        tipe: 'pg',
        pertanyaan: `Jika seseorang membeli 1 kg abon ayam, 1 kg abon sapi, dan 1 kg abon ikan, maka total harga yang harus dibayar adalah ...`,
        opsi: [
          { label: 'A', teks: `Rp170.000` },
          { label: 'B', teks: `Rp180.000` },
          { label: 'C', teks: `Rp190.000` },
          { label: 'D', teks: `Rp200.000` },
          { label: 'E', teks: `Rp210.000` },
        ],
        kunci: 'D',
        pembahasan: `Submateri: Aljabar & Fungsi.
Misalkan harga 1 kg abon ayam \\(= a\\), sapi \\(= s\\), ikan \\(= i\\) (dalam rupiah). Paket A dikurangi Paket B: \\((3 - 2)\\,a = 440.000 - 350.000\\), jadi \\(a = 90.000\\). Dari Paket B, \\(2s + i = 350.000 - 2 \\times 90.000 = 170.000\\); karena \\(s = i + 10.000\\), maka \\(2(i + 10.000) + i = 170.000\\), jadi \\(i = 50.000\\) dan \\(s = 60.000\\).
Total 1 kg abon ayam, 1 kg abon sapi, dan 1 kg abon ikan \\(= 90.000 + 60.000 + 50.000 = 200.000\\) rupiah.
Jawaban: D`,
        status: 'draft',
      },
      // contoh hal. 73, Aljabar & Fungsi no. 11 (abon)
      {
        nomor: 31,
        tipe: 'pg',
        pertanyaan: `Bu Rina membuat paket baru yang terdiri dari abon ayam dan abon ikan saja dengan harga Rp460.000. Jika perbandingan berat ayam : ikan adalah 2 : 1, maka berat total paket tersebut adalah ...`,
        opsi: [
          { label: 'A', teks: `2 kg` },
          { label: 'B', teks: `3 kg` },
          { label: 'C', teks: `4 kg` },
          { label: 'D', teks: `5 kg` },
          { label: 'E', teks: `6 kg` },
        ],
        kunci: 'E',
        pembahasan: `Submateri: Aljabar & Fungsi.
Misalkan harga 1 kg abon ayam \\(= a\\), sapi \\(= s\\), ikan \\(= i\\) (dalam rupiah). Paket A dikurangi Paket B: \\((3 - 2)\\,a = 440.000 - 350.000\\), jadi \\(a = 90.000\\). Dari Paket B, \\(2s + i = 350.000 - 2 \\times 90.000 = 170.000\\); karena \\(s = i + 10.000\\), maka \\(2(i + 10.000) + i = 170.000\\), jadi \\(i = 50.000\\) dan \\(s = 60.000\\).
Misalkan berat abon ikan dalam paket baru \\(= x\\) kg, maka berat abon ayam \\(= 2x\\) kg.
Harga paket: \\(90.000 \\times 2x + 50.000 \\times x = 230.000x = 460.000\\), jadi \\(x = 2\\).
Berat total paket \\(= 2x + x = 3x = 6\\) kg.
Jawaban: E`,
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      judul: 'Perahu Motor di Sungai',
      isi: `Sebuah perahu motor, yang melaju dengan kecepatan \\(x\\ \\text{mil/jam}\\) di air tenang, melaju di sebuah sungai yang kecepatan arusnya \\(y\\ \\text{mil/jam}\\) dengan \\(y < x\\).`,
    },
    soal: [
      // contoh hal. 74, Aljabar & Fungsi no. 13 (perahu)
      {
        nomor: 32,
        tipe: 'pg',
        pertanyaan: `Jika kecepatan perahu adalah \\(8\\ \\frac{\\text{mil}}{\\text{jam}}\\) dan kecepatan air adalah \\(2\\ \\frac{\\text{mil}}{\\text{jam}}\\) maka waktu (jam) yang dibutuhkan oleh perahu untuk bergerak ke hilir sejauh 20 mil jika motor perahu tersebut mati setelah menempuh jarak 15 mil adalah …jam.`,
        opsi: [
          { label: 'A', teks: `4` },
          { label: 'B', teks: `4,5` },
          { label: 'C', teks: `5` },
          { label: 'D', teks: `6` },
          { label: 'E', teks: `6,5` },
        ],
        kunci: 'A',
        pembahasan: `Submateri: Aljabar & Fungsi.
Ke arah hilir dengan motor menyala, kecepatan perahu \\(= 8 + 2 = 10\\) mil/jam. Jarak 15 mil ditempuh dalam \\(\\frac{15}{10} = 1,5\\) jam.
Setelah motor mati, perahu hanya terbawa arus dengan kecepatan 2 mil/jam. Sisa jarak \\(20 - 15 = 5\\) mil ditempuh dalam \\(\\frac{5}{2} = 2,5\\) jam.
Total waktu \\(= 1,5 + 2,5 = 4\\) jam.
Jawaban: A`,
        status: 'draft',
      },
    ],
  },
  // ── Aritmatika Sosial (Persentase, HPP, Bunga, Diskon, Laba dan Rugi) ─────
  {
    stimulus: {
      judul: 'Cicilan Ponsel di Toko',
      isi: `Pada suatu toko ponsel, harga resmi ponsel merek X adalah Rp10.000.000,00 dan toko memberi diskon 20%. Ponsel tersebut juga dapat dibeli dengan angsuran setiap bulan (besar sama, mulai bulan kedua), dikenakan bunga tunggal 6% per tahun, dan uang muka minimal 10% dari harga resmi. Toko juga menjual antigores dengan harga Rp150.000,00 dan casing ponsel dengan harga Rp90.000,00.`,
    },
    soal: [
      // contoh hal. 74, Aritmatika Sosial no. 1 (ponsel)
      {
        nomor: 33,
        tipe: 'pg',
        pertanyaan: `Pak Budi ingin membeli ponsel X dengan mengangsur. Ia juga ingin membeli antigores, casing, dan nomor perdana beserta pulsanya. Jika ia membawa uang Rp1.500.000,00, uang yang dapat digunakan untuk membeli nomor perdana beserta pulsanya maksimal adalah ... ribu rupiah.`,
        opsi: [
          { label: 'A', teks: `240` },
          { label: 'B', teks: `250` },
          { label: 'C', teks: `260` },
          { label: 'D', teks: `270` },
          { label: 'E', teks: `280` },
        ],
        kunci: 'C',
        pembahasan: `Submateri: Aritmatika Sosial (Persentase, HPP, Bunga, Diskon, Laba dan Rugi).
Angsuran dimulai bulan kedua, jadi yang dibayar saat ini hanya uang muka, antigores, dan casing.
Uang muka minimal \\(= 10\\%\\) dari harga resmi \\(= 10\\% \\times\\) Rp10.000.000 \\(=\\) Rp1.000.000.
Pengeluaran sekarang \\(=\\) Rp1.000.000 \\(+\\) Rp150.000 \\(+\\) Rp90.000 \\(=\\) Rp1.240.000.
Sisa uang \\(=\\) Rp1.500.000 \\(-\\) Rp1.240.000 \\(=\\) Rp260.000, yaitu 260 ribu rupiah.
Jawaban: C`,
        status: 'draft',
      },
      // contoh hal. 75, Aritmatika Sosial no. 2 (ponsel)
      {
        nomor: 34,
        tipe: 'pg',
        pertanyaan: `Jika Pak Budi membeli ponsel dengan uang muka minimal dan mengangsur sebanyak 20 kali, angsuran yang dibayarkan adalah ... ribu rupiah`,
        opsi: [
          { label: 'A', teks: `350` },
          { label: 'B', teks: `385` },
          { label: 'C', teks: `405` },
          { label: 'D', teks: `425` },
          { label: 'E', teks: `495` },
        ],
        kunci: 'B',
        pembahasan: `Submateri: Aritmatika Sosial (Persentase, HPP, Bunga, Diskon, Laba dan Rugi).
Harga setelah diskon 20% \\(= 80\\% \\times\\) Rp10.000.000 \\(=\\) Rp8.000.000. Uang muka minimal \\(=\\) Rp1.000.000, jadi pokok utang \\(=\\) Rp7.000.000.
Bunga tunggal 6% per tahun untuk 20 bulan \\(=\\) Rp7.000.000 \\(\\times 6\\% \\times \\frac{20}{12} =\\) Rp700.000.
Yang diangsur \\(=\\) Rp7.000.000 \\(+\\) Rp700.000 \\(=\\) Rp7.700.000, dibagi 20 kali \\(=\\) Rp385.000 per angsuran, yaitu 385 ribu rupiah.
Jawaban: B`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      // contoh hal. 75-76, Aritmatika Sosial no. 5 (kapal)
      {
        nomor: 35,
        tipe: 'pg',
        pertanyaan: `Sebuah kapal tanker pengangkut minyak berbendera Indonesia sedang melintasi Selat Hormuz dengan panjang jalur pelayaran 160 km. Dalam kondisi normal, kapal melaju dengan kecepatan 20 km/jam. Namun, karena situasi darurat, kapal dipacu hingga kecepatan 32 km/jam.
Diketahui bahwa pada kecepatan normal, kapal mengonsumsi 1.300 liter solar per jam. Saat kecepatan darurat, penggunaan bahan bakar menjadi dua kali lipat lebih boros per jamnya.
Harga solar industri saat ini adalah Rp20.000 per liter. Karena berada di zona konflik, asuransi perjalanan kapal naik sebesar 25% dari total biaya bahan bakar yang dikeluarkan. Jika kapal menggunakan kecepatan darurat, berapakah total biaya (Bahan Bakar + Asuransi) yang harus dibayar?`,
        opsi: [
          { label: 'A', teks: `Rp200.000.000` },
          { label: 'B', teks: `Rp250.000.000` },
          { label: 'C', teks: `Rp300.000.000` },
          { label: 'D', teks: `Rp225.000.000` },
          { label: 'E', teks: `Rp325.000.000` },
        ],
        kunci: 'E',
        pembahasan: `Submateri: Aritmatika Sosial (Persentase, HPP, Bunga, Diskon, Laba dan Rugi).
Waktu tempuh dengan kecepatan darurat \\(= \\frac{160}{32} = 5\\) jam.
Konsumsi solar saat darurat dua kali lipat: \\(2 \\times 1.300 = 2.600\\) liter per jam, jadi total solar \\(= 5 \\times 2.600 = 13.000\\) liter.
Biaya bahan bakar \\(= 13.000 \\times\\) Rp20.000 \\(=\\) Rp260.000.000.
Asuransi \\(= 25\\% \\times\\) Rp260.000.000 \\(=\\) Rp65.000.000.
Total biaya \\(=\\) Rp260.000.000 \\(+\\) Rp65.000.000 \\(=\\) Rp325.000.000.
Jawaban: E`,
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      judul: 'Simpanan Ari dan Biaya Penyimpanan',
      isi: `Ari menyimpan uang pada suatu lembaga penyimpanan tanpa bunga. Setiap akhir bulan, lembaga tersebut mengenakan biaya penyimpanan 0,05% dari simpanan yang ada. Setiap bulan, Ari selalu menambahkan sejumlah uang sehingga jumlah simpanannya satu juta rupiah lebih banyak dari simpanan pada awal bulan sebelumnya. Diketahui pada awal bulan pertama Ari menyimpan sebesar 100 juta rupiah.`,
    },
    soal: [
      // contoh hal. 76, Aritmatika Sosial no. 7 (Ari)
      {
        nomor: 36,
        tipe: 'pg',
        pertanyaan: `Besar uang yang ditambah Ari pada awal bulan ke-5 adalah…`,
        opsi: [
          { label: 'A', teks: `Rp1.051.000` },
          { label: 'B', teks: `Rp1.051.500` },
          { label: 'C', teks: `Rp1.052.000` },
          { label: 'D', teks: `Rp1.052.500` },
          { label: 'E', teks: `Rp1.053.000` },
        ],
        kunci: 'B',
        pembahasan: `Submateri: Aritmatika Sosial (Persentase, HPP, Bunga, Diskon, Laba dan Rugi).
Simpanan pada awal bulan ke-\\(n\\) (setelah penambahan) adalah \\(100\\) juta \\(+ (n - 1) \\times 1\\) juta: bulan 1 \\(= 100\\) juta; bulan 2 \\(= 101\\) juta; bulan 3 \\(= 102\\) juta; bulan 4 \\(= 103\\) juta; bulan 5 \\(= 104\\) juta.
Pada akhir bulan ke-4, simpanan 103 juta dikenai biaya 0,05%, yaitu Rp51.500, sehingga sisanya Rp102.948.500.
Agar awal bulan ke-5 menjadi 104 juta, Ari menambah Rp104.000.000 \\(-\\) Rp102.948.500 \\(=\\) Rp1.051.500.
Jawaban: B`,
        status: 'draft',
      },
      // contoh hal. 77, Aritmatika Sosial no. 9 (Ari)
      {
        nomor: 37,
        tipe: 'pg',
        pertanyaan: `Total biaya penyimpanan selama 10 bulan pertama adalah…`,
        opsi: [
          { label: 'A', teks: `Rp414.000` },
          { label: 'B', teks: `Rp468.000` },
          { label: 'C', teks: `Rp500.000` },
          { label: 'D', teks: `Rp522.500` },
          { label: 'E', teks: `Rp577.500` },
        ],
        kunci: 'D',
        pembahasan: `Submateri: Aritmatika Sosial (Persentase, HPP, Bunga, Diskon, Laba dan Rugi).
Simpanan yang dikenai biaya pada akhir bulan ke-\\(n\\) adalah \\(100 + (n - 1)\\) juta rupiah. Untuk 10 bulan pertama: 100, 101, ..., 109 juta.
Jumlahnya \\(= 10 \\times 100 + (0 + 1 + \\cdots + 9) = 1.000 + 45 = 1.045\\) juta \\(=\\) Rp1.045.000.000.
Total biaya \\(= 0,05\\% \\times\\) Rp1.045.000.000 \\(=\\) Rp522.500.
Jawaban: D`,
        status: 'draft',
      },
    ],
  },
];
