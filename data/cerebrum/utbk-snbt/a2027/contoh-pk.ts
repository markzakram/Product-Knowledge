import type { Kelompok } from '@/lib/skema';

/**
 * Contoh soal Pengetahuan Kuantitatif (PK) UTBK-SNBT 2027.
 *
 * Sumber: dokumen internal "Contoh Soal UTBK" (bagian PK, 71 soal). Dokumen itu TIDAK memuat kunci dan
 * pembahasan, jadi semuanya disusun ulang dan berstatus 'draft' sampai diperiksa tim akademik. Setiap
 * soal hitungan dihitung ulang dengan Python (aljabar dengan pencarian nilai, teka-teki kisi dan kuadrat
 * ajaib dengan pencarian lengkap, hitungan bangun dengan koordinat).
 *
 * 48 soal dipasang; 23 soal sumber tidak dimasukkan:
 *   - 13 karena datanya keliru atau kuncinya ambigu:
 *       Bilangan no. 3 (untuk a negatif, a^2 selalu positif sehingga tidak pernah terkecil), no. 6 (kisi
 *       tidak konsisten: 2 + 3 tidak sama dengan -1), no. 10 (ekspresi tanpa tanda sama dengan), no. 16
 *       (K # L x L bernilai 9 atau 45, keduanya ada di pilihan);
 *       Geometri no. 3 (gambar tidak cukup jelas untuk menentukan x);
 *       Eksponen no. 1 (klaim yang dibuktikan tidak benar: ruas kiri bernilai 59,049, bukan 25);
 *       Relasi dan Fungsi no. 1 (a + b = 31/3, tidak ada di pilihan), no. 6 (a tidak tertentu karena
 *       b(2a - 3) = 9 punya banyak solusi), no. 8 (kuantitas P dan Q tidak diberikan), no. 9 (pilihan A dan D
 *       sama);
 *       Fungsi & Invers no. 1 (hasilnya 2 akar 3, tidak ada di pilihan);
 *       Trigonometri no. 2 (limit tak hingga: "tak hingga" dan "tidak ada limit" sama-sama dapat
 *       dipertahankan);
 *       Matriks no. 2 (hasilnya negatif, tidak ada di pilihan 5 sampai 9);
 *   - 4 karena kembar: Bilangan no. 5 dan no. 17 (kisi yang sama dengan no. 4, hanya urutan Q # P atau
 *     bentuk pilihan ganda), Bilangan no. 13 (sama dengan no. 1 dalam bentuk pilihan ganda, pilihan D dan E
 *     sama), dan Persamaan Aljabar no. 3 (sama dengan Penalaran Umum, Operasi Bilangan no. 2);
 *   - 6 yang sah tetapi tidak dipilih (batas sekitar lima sampai tujuh soal per submateri dan variasi tipe
 *     soal): Bilangan no. 7, 8, 11, 14; Pola dan Barisan no. 5; Relasi dan Fungsi no. 4.
 * Salah ketik jelas di sumber diperbaiki. Syarat "theta derajat < 20 < 90 derajat" di Trigonometri no. 1
 * dibaca "0 derajat < 2 theta < 90 derajat".
 *
 * Dua angka di sumber diganti atas persetujuan user (15 Okt 2026). Keduanya memang tertulis begitu di PDF
 * sumber (bukan salah baca ekstraksi), dan hanya nilai pengganti itu yang membuat soalnya punya jawaban:
 *   - Perbandingan Senilai no. 1-3: "141 jam" menjadi "11 jam". Dengan 141 jam, waktu membuat satu patung
 *     banteng negatif. Dengan 11 jam, satu patung gajah 1 jam dan satu patung banteng 3 jam; 11 adalah
 *     satu-satunya bilangan bulat yang membuat ketiga soal punya jawaban di pilihan.
 *   - Geometri no. 1: panjang busur MN "7" menjadi "pi". Pernyataan (1) dan (2) selalu benar, jadi
 *     jawabannya harus A atau E. A mustahil karena (3) benar memaksa (4) benar. Hanya busur pi (sudut MON
 *     60 derajat) yang membuat salah satu pilihan benar, yaitu E.
 */
export const contohPK: Kelompok[] = [
  // ── Bilangan & Operasi Bilangan ───────────────────────────────────────────
  {
    soal: [
      // contoh hal. 15, Bilangan & Operasi Bilangan no. 1
      {
        nomor: 1,
        tipe: 'isian_singkat',
        pertanyaan: `Hasil perkalian tiga bilangan prima berbeda \\(a\\), \\(b\\), dan \\(c\\) adalah 182.
Nilai \\(a + b + c\\) adalah....`,
        kunci: '22',
        pembahasan: `Submateri: Bilangan & Operasi Bilangan.
Faktorkan 182: \\(182 = 2 \\times 91 = 2 \\times 7 \\times 13\\). Ketiganya bilangan prima yang berbeda.
Maka \\(a + b + c = 2 + 7 + 13 = 22\\).
Jawaban: 22`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      // contoh hal. 15, Bilangan & Operasi Bilangan no. 2
      {
        nomor: 2,
        tipe: 'pg',
        pertanyaan: `Banyaknya bilangan genap positif kurang dari 30 yang memiliki sisa 2 atau 3 jika dibagi 5 adalah \\(k\\).
Berdasarkan informasi yang diberikan, manakah hubungan antara kuantitas \\(P\\) dan \\(Q\\) berikut yang benar?
Kuantitas \\(P\\): \\(k\\)
Kuantitas \\(Q\\): 6`,
        opsi: [
          { label: 'A', teks: `Kuantitas \\(P\\) lebih dari atau sama dengan 2 kali kuantitas \\(Q\\)` },
          { label: 'B', teks: `Kuantitas \\(P\\) lebih dari kuantitas \\(Q\\) tetapi kurang dari 2 kali kuantitas \\(Q\\)` },
          { label: 'C', teks: `Kuantitas \\(P\\) sama dengan kuantitas \\(Q\\)` },
          { label: 'D', teks: `Kuantitas \\(P\\) kurang dari kuantitas \\(Q\\)` },
          { label: 'E', teks: `Tidak dapat ditentukan hubungan antara kuantitas \\(P\\) dan \\(Q\\)` },
        ],
        kunci: 'C',
        pembahasan: `Submateri: Bilangan & Operasi Bilangan.
Bilangan genap positif kurang dari 30: 2, 4, 6, ..., 28. Yang bersisa 2 jika dibagi 5: 2, 12, 22. Yang bersisa 3 jika dibagi 5: 8, 18, 28.
Jadi \\(k = 6\\) (yaitu 2, 8, 12, 18, 22, 28).
Kuantitas \\(P = k = 6\\) dan kuantitas \\(Q = 6\\), jadi \\(P\\) sama dengan \\(Q\\).
Jawaban: C`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      // contoh hal. 16, Bilangan & Operasi Bilangan no. 4
      {
        nomor: 3,
        tipe: 'isian_singkat',
        pertanyaan: `Bilangan bulat \\(P\\) dan \\(Q\\) tertentu memenuhi dua persamaan mendatar (dibaca dari kiri ke kanan) dan dua persamaan menurun serta tanda operasi aritmatika berikut.
⟦gambar:gambar/cerebrum/utbk2027-pk-bilangan-04-grid.png⟧
Jika tanda \\(\\Delta\\) bisa diganti (+, −, ×, ÷). Tentukan nilai \\(P \\,\\Delta\\, Q = \\cdots\\) (isi dengan bilangan bulat)`,
        kunci: '-5',
        pembahasan: `Submateri: Bilangan & Operasi Bilangan.
Baca kisi: persamaan mendatar teratas \\(6 \\div P = 2\\), kolom kiri \\(6 + 2 = Q\\), kolom kanan \\(2\\ \\Delta\\ 3 = -1\\), dan persamaan mendatar terbawah \\(Q\\ \\Delta\\ 9 = -1\\).
Dari \\(6 \\div P = 2\\) diperoleh \\(P = 3\\). Dari kolom kiri, \\(Q = 6 + 2 = 8\\).
Kolom kanan \\(2\\ \\Delta\\ 3 = -1\\) hanya dipenuhi oleh pengurangan (\\(2 - 3 = -1\\)), jadi \\(\\Delta\\) adalah "−". Cek persamaan terbawah: \\(8 - 9 = -1\\) (cocok).
Maka \\(P \\,\\Delta\\, Q = 3 - 8 = -5\\).
Jawaban: -5`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      // contoh hal. 17, Bilangan & Operasi Bilangan no. 9
      {
        nomor: 4,
        tipe: 'pg',
        pertanyaan: `Didefinisikan dua operasi biner sebagai berikut:
\\(p \\star q = \\frac{p + q}{2}\\),
\\(p \\blacksquare q = (p \\star q) + pq\\)
Diketahui
\\(P = (2 \\blacksquare 4)\\)
\\(Q = 12\\)
Manakah hubungan yang benar antara kuantitas \\(P\\) dan \\(Q\\)?`,
        opsi: [
          { label: 'A', teks: `\\(P < Q\\)` },
          { label: 'B', teks: `\\(P = Q\\)` },
          { label: 'C', teks: `\\(P > Q\\)` },
          { label: 'D', teks: `\\(P = 2Q\\)` },
          { label: 'E', teks: `Tidak dapat ditentukan` },
        ],
        kunci: 'A',
        pembahasan: `Submateri: Bilangan & Operasi Bilangan.
\\(2 \\star 4 = \\frac{2 + 4}{2} = 3\\).
\\(2 \\blacksquare 4 = (2 \\star 4) + 2 \\cdot 4 = 3 + 8 = 11\\), jadi \\(P = 11\\).
\\(Q = 12\\), sehingga \\(P < Q\\).
Jawaban: A`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      // contoh hal. 18, Bilangan & Operasi Bilangan no. 12
      {
        nomor: 5,
        tipe: 'pg',
        pertanyaan: `Untuk bilangan real \\(a\\) tertentu, di antara tiga bilangan \\(a\\), \\(a^{2}\\), dan \\(\\sqrt{|a|}\\), apakah \\(a\\) merupakan bilangan terkecil?
Putuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut.
(1) \\(a < -2\\)
(2) \\(-\\frac{1}{3} < a < 0\\)`,
        opsi: [
          { label: 'A', teks: `Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup.` },
          { label: 'B', teks: `Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup.` },
          { label: 'C', teks: `DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU saja tidak cukup.` },
          { label: 'D', teks: `Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup.` },
          { label: 'E', teks: `Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan.` },
        ],
        kunci: 'D',
        pembahasan: `Submateri: Bilangan & Operasi Bilangan.
Untuk \\(a\\) negatif, \\(a^{2}\\) dan \\(\\sqrt{|a|}\\) selalu positif, sedangkan \\(a\\) negatif. Jadi \\(a\\) pasti yang terkecil dari ketiganya.
Pernyataan (1) \\(a < -2\\) menjamin \\(a\\) negatif, sehingga jawaban pertanyaan adalah "ya". Pernyataan (2) \\(-\\frac{1}{3} < a < 0\\) juga menjamin \\(a\\) negatif, sehingga jawabannya juga "ya".
Jadi masing-masing pernyataan SAJA sudah cukup.
Jawaban: D`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      // contoh hal. 18-19, Bilangan & Operasi Bilangan no. 15
      {
        nomor: 6,
        tipe: 'pg',
        pertanyaan: `Bilangan bulat \\(V\\) dan \\(W\\) memenuhi dua persamaan mendatar (dibaca dari kiri ke kanan) dan dua persamaan menurun untuk suatu operasi aritmatika # berikut:
⟦gambar:gambar/cerebrum/utbk2027-pk-bilangan-15-grid.png⟧
Jika # merupakan +, −, ×, atau ÷, nilai \\(V \\# W\\) adalah ....`,
        opsi: [
          { label: 'A', teks: `7` },
          { label: 'B', teks: `8` },
          { label: 'C', teks: `9` },
          { label: 'D', teks: `10` },
          { label: 'E', teks: `11` },
        ],
        kunci: 'E',
        pembahasan: `Submateri: Bilangan & Operasi Bilangan.
Baca kisi: baris atas \\(V - 1 = 8\\), kolom kanan \\(8 \\times W = 16\\), kolom kiri \\(V \\# 5 = 14\\), dan baris bawah \\(14 \\# 2 = 16\\).
Dari baris atas, \\(V = 9\\). Dari kolom kanan, \\(W = 2\\).
Kolom kiri \\(9 \\# 5 = 14\\) hanya dipenuhi oleh penjumlahan, jadi \\(\\#\\) adalah "+". Cek baris bawah: \\(14 + 2 = 16\\) (cocok).
Maka \\(V \\# W = 9 + 2 = 11\\).
Jawaban: E`,
        status: 'draft',
      },
    ],
  },
  // ── Perbandingan Senilai dan Tak Senilai ──────────────────────────────────
  {
    stimulus: {
      judul: 'Pembuatan Patung Gajah dan Banteng',
      isi: `Diketahui untuk membuat 2 patung gajah dan 3 patung banteng selesai dalam 11 jam. Sedangkan untuk membuat 1 patung gajah dan 2 patung banteng selesai dalam 7 jam.`,
    },
    soal: [
      // contoh hal. 19, Perbandingan Senilai dan Tak Senilai no. 1 (sumber menulis "141 jam", lihat komentar kepala)
      {
        nomor: 7,
        tipe: 'pg',
        pertanyaan: `Waktu yang dibutuhkan untuk membuat 4 patung gajah dan 1 patung banteng adalah .... jam.`,
        opsi: [
          { label: 'A', teks: `5` },
          { label: 'B', teks: `6` },
          { label: 'C', teks: `7` },
          { label: 'D', teks: `8` },
          { label: 'E', teks: `9` },
        ],
        kunci: 'C',
        pembahasan: `Submateri: Perbandingan Senilai dan Tak Senilai.
Misalkan waktu membuat 1 patung gajah \\(g\\) jam dan 1 patung banteng \\(b\\) jam. Dari keterangan soal: \\(2g + 3b = 11\\) dan \\(g + 2b = 7\\).
Kalikan persamaan kedua dengan 2: \\(2g + 4b = 14\\). Kurangi dengan persamaan pertama: \\(b = 3\\). Maka \\(g = 7 - 2 \\times 3 = 1\\).
Waktu membuat 4 patung gajah dan 1 patung banteng \\(= 4 \\times 1 + 3 = 7\\) jam.
Jawaban: C`,
        status: 'draft',
      },
      // contoh hal. 20, Perbandingan Senilai dan Tak Senilai no. 2 (sumber menulis "141 jam")
      {
        nomor: 8,
        tipe: 'pg',
        pertanyaan: `Waktu yang dibutuhkan untuk membuat 3 patung gajah dan 2 patung banteng adalah .... jam.`,
        opsi: [
          { label: 'A', teks: `8` },
          { label: 'B', teks: `9` },
          { label: 'C', teks: `10` },
          { label: 'D', teks: `11` },
          { label: 'E', teks: `12` },
        ],
        kunci: 'B',
        pembahasan: `Submateri: Perbandingan Senilai dan Tak Senilai.
Misalkan waktu membuat 1 patung gajah \\(g\\) jam dan 1 patung banteng \\(b\\) jam. Dari keterangan soal: \\(2g + 3b = 11\\) dan \\(g + 2b = 7\\).
Dari persamaan kedua, \\(g = 7 - 2b\\). Substitusikan ke persamaan pertama: \\(2(7 - 2b) + 3b = 11\\), jadi \\(14 - b = 11\\) dan \\(b = 3\\). Maka \\(g = 1\\).
Waktu membuat 3 patung gajah dan 2 patung banteng \\(= 3 \\times 1 + 2 \\times 3 = 9\\) jam.
Jawaban: B`,
        status: 'draft',
      },
      // contoh hal. 20, Perbandingan Senilai dan Tak Senilai no. 3 (sumber menulis "141 jam")
      {
        nomor: 9,
        tipe: 'pg',
        pertanyaan: `Selisih waktu pembuatan 1 patung banteng dan 1 patung gajah adalah .... jam.`,
        opsi: [
          { label: 'A', teks: `1` },
          { label: 'B', teks: `2` },
          { label: 'C', teks: `3` },
          { label: 'D', teks: `4` },
          { label: 'E', teks: `5` },
        ],
        kunci: 'B',
        pembahasan: `Submateri: Perbandingan Senilai dan Tak Senilai.
Misalkan waktu membuat 1 patung gajah \\(g\\) jam dan 1 patung banteng \\(b\\) jam. Dari keterangan soal: \\(2g + 3b = 11\\) dan \\(g + 2b = 7\\).
Eliminasi \\(g\\): \\(2(g + 2b) - (2g + 3b) = 14 - 11\\), jadi \\(b = 3\\) dan \\(g = 7 - 2 \\times 3 = 1\\).
Selisih waktunya \\(= b - g = 3 - 1 = 2\\) jam.
Jawaban: B`,
        status: 'draft',
      },
    ],
  },
  // ── Pola & Barisan ────────────────────────────────────────────────────────
  {
    soal: [
      // contoh hal. 20, Pola & Barisan no. 1
      {
        nomor: 10,
        tipe: 'pg',
        pertanyaan: `Suatu barisan geometri memiliki rasio \\(-3\\) dan suku ke-5 barisan tersebut sama dengan 1.
Berdasarkan informasi yang diberikan, manakah dari pernyataan berikut yang benar?
(1) Suku ke-1 barisan negatif.
(2) Suku ke-9 barisan positif.
(3) Hasil penjumlahan dua suku barisan yang berurutan negatif.
(4) Hasil perkalian dua suku barisan yang berurutan negatif.`,
        opsi: [
          { label: 'A', teks: `(1), (2), dan (3) SAJA` },
          { label: 'B', teks: `(1) dan (3) SAJA` },
          { label: 'C', teks: `(2) dan (4) SAJA` },
          { label: 'D', teks: `(4) SAJA` },
          { label: 'E', teks: `SEMUA PILIHAN` },
        ],
        kunci: 'C',
        pembahasan: `Submateri: Pola & Barisan.
Suku ke-5: \\(U_5 = U_1 \\cdot (-3)^{4} = 81\\,U_1 = 1\\), jadi \\(U_1 = \\frac{1}{81}\\) (positif). Pernyataan (1) salah.
Suku ke-9: \\(U_9 = U_5 \\cdot (-3)^{4} = 81\\) (positif). Pernyataan (2) benar.
Karena rasio negatif, tanda suku berganti-ganti. Penjumlahan dua suku berurutan: \\(U_n + U_{n+1} = U_n(1 - 3) = -2U_n\\). Hasilnya negatif hanya jika \\(U_n\\) positif, jadi tidak selalu negatif. Pernyataan (3) salah.
Perkalian dua suku berurutan: \\(U_n \\cdot U_{n+1} = -3\\,U_n^{2}\\), selalu negatif. Pernyataan (4) benar.
Yang benar: (2) dan (4) saja.
Jawaban: C`,
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      judul: 'Pulau Paradis dan Tiga Dindingnya',
      isi: `Sebuah pulau bernama Paradis dikelilingi oleh tiga dinding besar yang melingkar, dinding tersebut memiliki sebuah nama, yaitu Sina, Rose, Maria. Perbandingan jari-jari tembok tersebut secara berturut-turut adalah \\(R_1 : R_2 : R_3 = 2 : 5 : 8\\). Di sisi luar setiap tembok, terdapat empat distrik yang berbentuk setengah lingkaran (lihat gambar). Perbandingan jari-jari distrik secara berturut-turut adalah \\(r_1 : r_2 : r_3 = 1 : 4 : 5\\).
⟦gambar:gambar/cerebrum/utbk2027-pk-pola-02-paradis.png⟧`,
    },
    soal: [
      // contoh hal. 20-21, Pola & Barisan no. 2
      {
        nomor: 11,
        tipe: 'pg',
        pertanyaan: `Selisih antara jari-jari Dinding Maria dan Dinding Sina adalah \\(60\\ \\text{km}\\).
Jari-jari dari ketiga tembok tersebut secara berturut-turut`,
        opsi: [
          { label: 'A', teks: `\\(R_1, R_2, R_3 = 30, 40, 50\\)` },
          { label: 'B', teks: `\\(R_1, R_2, R_3 = 60, 150, 240\\)` },
          { label: 'C', teks: `\\(R_1, R_2, R_3 = 40, 100, 160\\)` },
          { label: 'D', teks: `\\(R_1, R_2, R_3 = 80, 200, 320\\)` },
          { label: 'E', teks: `\\(R_1, R_2, R_3 = 20, 50, 80\\)` },
        ],
        kunci: 'E',
        pembahasan: `Submateri: Pola & Barisan.
Perbandingan jari-jari tembok \\(R_1 : R_2 : R_3 = 2 : 5 : 8\\). Dinding Maria adalah \\(R_3\\) (terluar) dan Dinding Sina adalah \\(R_1\\) (terdalam).
Selisihnya: \\(R_3 - R_1 = (8 - 2)\\) bagian \\(= 6\\) bagian \\(= 60\\ \\text{km}\\), jadi 1 bagian \\(= 10\\ \\text{km}\\).
\\(R_1 = 20\\), \\(R_2 = 50\\), \\(R_3 = 80\\) km.
Jawaban: E`,
        status: 'draft',
      },
      // contoh hal. 21, Pola & Barisan no. 3
      {
        nomor: 12,
        tipe: 'pg',
        pertanyaan: `Jika jari-jari distrik pada luar Dinding Maria adalah \\(15\\ \\text{km}\\), luas dari seluruh distrik adalah...\\(\\ \\text{km}^{2}\\)`,
        opsi: [
          { label: 'A', teks: `\\(567\\pi\\)` },
          { label: 'B', teks: `\\(756\\pi\\)` },
          { label: 'C', teks: `\\(432\\pi\\)` },
          { label: 'D', teks: `\\(667\\pi\\)` },
          { label: 'E', teks: `\\(824\\pi\\)` },
        ],
        kunci: 'B',
        pembahasan: `Submateri: Pola & Barisan.
Distrik pada luar Dinding Maria adalah \\(r_3 = 15\\). Perbandingan \\(r_1 : r_2 : r_3 = 1 : 4 : 5\\), jadi 1 bagian \\(= 3\\) dan \\(r_1 = 3\\), \\(r_2 = 12\\), \\(r_3 = 15\\) (km).
Setiap dinding memiliki 4 distrik berbentuk setengah lingkaran. Luas keempatnya \\(= 4 \\times \\frac{1}{2}\\pi r^{2} = 2\\pi r^{2}\\).
Luas seluruh distrik \\(= 2\\pi\\,(3^{2} + 12^{2} + 15^{2}) = 2\\pi\\,(9 + 144 + 225) = 2\\pi \\times 378 = 756\\pi\\ \\text{km}^{2}\\).
Jawaban: B`,
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      judul: 'Lingkaran Pola yang Semakin Mengecil',
      isi: `Diketahui barisan angka \\(40, 24, 16, 12\\) merupakan ukuran jari-jari lingkaran pola berturut-turut yang semakin mengecil ke dalam pusatnya.
⟦gambar:gambar/cerebrum/utbk2027-pk-pola-04-lingkaran-pola.png⟧`,
    },
    soal: [
      // contoh hal. 21, Pola & Barisan no. 4
      {
        nomor: 13,
        tipe: 'pg',
        pertanyaan: `Jari-jari lingkaran pola ke-6 adalah…`,
        opsi: [
          { label: 'A', teks: `10` },
          { label: 'B', teks: `9` },
          { label: 'C', teks: `8` },
          { label: 'D', teks: `12` },
          { label: 'E', teks: `11` },
        ],
        kunci: 'B',
        pembahasan: `Submateri: Pola & Barisan.
Selisih antarsuku: \\(24 - 40 = -16\\), \\(16 - 24 = -8\\), \\(12 - 16 = -4\\). Setiap selisih tinggal separuh dari selisih sebelumnya: \\(-16, -8, -4, -2, -1, \\ldots\\).
Jari-jari ke-5 \\(= 12 - 2 = 10\\), ke-6 \\(= 10 - 1 = 9\\).
(Rumus lain yang sama: \\(U_n = 8 + \\frac{32}{2^{n-1}}\\), sehingga \\(U_6 = 8 + 1 = 9\\).)
Jawaban: B`,
        status: 'draft',
      },
      // contoh hal. 22, Pola & Barisan no. 6
      {
        nomor: 14,
        tipe: 'pg',
        pertanyaan: `Hitunglah keliling lingkaran pola ke-5!`,
        opsi: [
          { label: 'A', teks: `\\(20\\pi\\)` },
          { label: 'B', teks: `\\(24\\pi\\)` },
          { label: 'C', teks: `\\(18\\pi\\)` },
          { label: 'D', teks: `\\(22\\pi\\)` },
          { label: 'E', teks: `\\(10\\pi\\)` },
        ],
        kunci: 'A',
        pembahasan: `Submateri: Pola & Barisan.
Selisih antarsuku berturut-turut separuhnya: \\(-16, -8, -4, -2\\), jadi jari-jari ke-5 \\(= 12 - 2 = 10\\).
Keliling lingkaran \\(= 2\\pi r = 2\\pi \\times 10 = 20\\pi\\).
Jawaban: A`,
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      judul: 'Latihan Lari Dita',
      isi: `Dita berlatih lari selama beberapa pekan. Pada pekan pertama ia berlari \\(2,4\\ \\text{km}\\). Setiap pekan berikutnya ia menambah jarak \\(0,35\\ \\text{km}\\) sampai pertama kali mencapai atau melampaui \\(7,3\\ \\text{km}\\). Setelah itu, setiap pekan ia tetap berlari \\(7,3\\ \\text{km}\\).`,
    },
    soal: [
      // contoh hal. 22, Pola & Barisan no. 7
      {
        nomor: 15,
        tipe: 'pg',
        pertanyaan: `Pada pekan ke berapakah Dita pertama kali berlari penuh \\(7,3\\ \\text{km}\\)?`,
        opsi: [
          { label: 'A', teks: `12` },
          { label: 'B', teks: `13` },
          { label: 'C', teks: `14` },
          { label: 'D', teks: `15` },
          { label: 'E', teks: `16` },
        ],
        kunci: 'D',
        pembahasan: `Submateri: Pola & Barisan.
Jarak pada pekan ke-\\(n\\): \\(2,4 + 0,35\\,(n - 1)\\) km, selama belum mencapai 7,3 km.
Mencapai 7,3 km: \\(0,35\\,(n - 1) = 7,3 - 2,4 = 4,9\\), jadi \\(n - 1 = 14\\) dan \\(n = 15\\).
Pada pekan ke-15 jaraknya tepat 7,3 km, jadi pekan ke-15 adalah pekan pertama Dita berlari penuh 7,3 km.
Jawaban: D`,
        status: 'draft',
      },
      // contoh hal. 22-23, Pola & Barisan no. 8
      {
        nomor: 16,
        tipe: 'pg',
        pertanyaan: `Jika selama 20 pekan Dita tidak berlatih pada pekan ke-5, ke-12, dan ke-17, maka jumlah jarak yang ditempuh Dita sampai akhir pekan ke-20 adalah ....`,
        opsi: [
          { label: 'A', teks: `\\(89,85\\ \\text{km}\\)` },
          { label: 'B', teks: `\\(90,55\\ \\text{km}\\)` },
          { label: 'C', teks: `\\(91,90\\ \\text{km}\\)` },
          { label: 'D', teks: `\\(93,25\\ \\text{km}\\)` },
          { label: 'E', teks: `\\(94,60\\ \\text{km}\\)` },
        ],
        kunci: 'C',
        pembahasan: `Submateri: Pola & Barisan.
Pekan ke-1 sampai ke-15 membentuk barisan aritmetika \\(2,4; 2,75; \\ldots; 7,3\\). Jumlahnya \\(= \\frac{15}{2}\\,(2,4 + 7,3) = 72,75\\) km.
Pekan ke-16 sampai ke-20 (5 pekan) masing-masing 7,3 km, jadi \\(5 \\times 7,3 = 36,5\\) km. Jumlah jika tidak ada yang libur: \\(72,75 + 36,5 = 109,25\\) km.
Jarak yang tidak ditempuh: pekan ke-5 \\(= 2,4 + 4 \\times 0,35 = 3,8\\) km; pekan ke-12 \\(= 2,4 + 11 \\times 0,35 = 6,25\\) km; pekan ke-17 \\(= 7,3\\) km. Totalnya \\(17,35\\) km.
Jarak yang ditempuh \\(= 109,25 - 17,35 = 91,90\\) km. (Soal ini menghitung pekan libur sebagai jarak 0 tanpa menggeser urutan pekan.)
Jawaban: C`,
        status: 'draft',
      },
    ],
  },
  // ── Aritmatika Sosial ─────────────────────────────────────────────────────
  {
    soal: [
      // contoh hal. 23, Aritmatika Sosial no. 1
      {
        nomor: 17,
        tipe: 'pg',
        pertanyaan: `Sebuah toko menawarkan pembelian gawai tanpa uang muka dengan skema cicilan menurun: cicilan pertama Rp1.600.000,00, cicilan kedua Rp1.450.000,00, cicilan ketiga Rp1.300.000,00, dan seterusnya berkurang tetap Rp150.000,00 sampai cicilan terakhir Rp100.000,00. Harga resmi gawai tersebut adalah Rp10.000.000,00.
Harga total jika membeli dengan skema cicilan tersebut dibandingkan harga resmi adalah ...`,
        opsi: [
          { label: 'A', teks: `lebih murah Rp650.000,00` },
          { label: 'B', teks: `lebih murah Rp350.000,00` },
          { label: 'C', teks: `sama dengan harga resmi` },
          { label: 'D', teks: `lebih mahal Rp350.000,00` },
          { label: 'E', teks: `lebih mahal Rp650.000,00` },
        ],
        kunci: 'A',
        pembahasan: `Submateri: Aritmatika Sosial.
Cicilan membentuk barisan aritmetika: 1.600.000; 1.450.000; 1.300.000; ...; 100.000 dengan beda -150.000.
Banyak cicilan: \\(n = \\frac{1.600.000 - 100.000}{150.000} + 1 = 11\\).
Jumlah seluruh cicilan \\(= \\frac{n}{2}\\,(U_1 + U_n) = \\frac{11}{2} \\times (1.600.000 + 100.000) = 9.350.000\\).
Harga resmi Rp10.000.000, jadi skema cicilan lebih murah Rp10.000.000 - Rp9.350.000 = Rp650.000.
Jawaban: A`,
        status: 'draft',
      },
    ],
  },
  // ── Statistika ────────────────────────────────────────────────────────────
  {
    soal: [
      // contoh hal. 23, Statistika no. 1
      {
        nomor: 18,
        tipe: 'pg',
        pertanyaan: `Data \\(4, 6, 7, 7, 9, 11, x\\) memiliki rata-rata 8.
Perhatikan pernyataan berikut.
(1) Nilai \\(x\\) adalah 12.
(2) Median data tersebut adalah 7.
(3) Modus data tersebut hanya satu, yaitu 7.
(4) Jangkauan data tersebut adalah 8.
Banyak pernyataan yang benar adalah ....`,
        opsi: [
          { label: 'A', teks: `1` },
          { label: 'B', teks: `2` },
          { label: 'C', teks: `3` },
          { label: 'D', teks: `4` },
          { label: 'E', teks: `Tidak ada` },
        ],
        kunci: 'D',
        pembahasan: `Submateri: Statistika.
Rata-rata 8 dari 7 data, jadi jumlah data \\(= 8 \\times 7 = 56\\). Jumlah enam data yang diketahui \\(= 4 + 6 + 7 + 7 + 9 + 11 = 44\\), jadi \\(x = 56 - 44 = 12\\). Pernyataan (1) benar.
Data terurut: 4, 6, 7, 7, 9, 11, 12. Median adalah data ke-4, yaitu 7. Pernyataan (2) benar.
Angka 7 muncul dua kali dan angka lain satu kali, jadi modusnya hanya 7. Pernyataan (3) benar.
Jangkauan \\(= 12 - 4 = 8\\). Pernyataan (4) benar.
Keempat pernyataan benar.
Jawaban: D`,
        status: 'draft',
      },
    ],
  },
  // ── Sistem Persamaan & Pertidaksamaan Linear ──────────────────────────────
  {
    soal: [
      // contoh hal. 23-24, Sistem Persamaan & Pertidaksamaan Linear no. 1
      {
        nomor: 19,
        tipe: 'pg',
        pertanyaan: `Perhatikan gambar
⟦gambar:gambar/cerebrum/utbk2027-pk-spl-01-kuadrat-ajaib.png⟧
Diketahui bahwa jumlah bilangan pada setiap baris, setiap kolom, dan setiap diagonal bernilai sama. Jika semua kotak terisi dengan angka 1 sampai 9, maka bilangan yang tepat untuk menggantikan \\(y\\) adalah ...`,
        opsi: [
          { label: 'A', teks: `5` },
          { label: 'B', teks: `6` },
          { label: 'C', teks: `7` },
          { label: 'D', teks: `8` },
          { label: 'E', teks: `9` },
        ],
        kunci: 'D',
        pembahasan: `Submateri: Sistem Persamaan & Pertidaksamaan Linear.
Baris atas berjumlah \\(2 + 7 + 6 = 15\\), jadi setiap baris, kolom, dan diagonal berjumlah 15.
Kolom tengah: \\(7 + x + 3 = 15\\), jadi \\(x = 5\\).
Diagonal kanan atas ke kiri bawah: \\(6 + 5 + (\\text{kotak kiri bawah}) = 15\\), jadi kotak kiri bawah \\(= 4\\).
Baris bawah: \\(4 + 3 + y = 15\\), jadi \\(y = 8\\).
Cek: kolom kanan \\(6 + 1 + 8 = 15\\), kolom kiri \\(2 + 9 + 4 = 15\\), baris tengah \\(9 + 5 + 1 = 15\\), diagonal utama \\(2 + 5 + 8 = 15\\). Semua kotak terisi angka 1 sampai 9 tanpa pengulangan.
Jawaban: D`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      // contoh hal. 24, Sistem Persamaan & Pertidaksamaan Linear no. 2
      {
        nomor: 20,
        tipe: 'pg',
        pertanyaan: `Bu Rina memiliki usaha abon dengan tiga varian: ayam, sapi, dan ikan. Untuk promosi, ia membuat beberapa paket penjualan dengan harga sebagai berikut:
Paket A terdiri dari 3 kg abon ayam, 2 kg abon sapi, dan 1 kg abon ikan seharga Rp440.000
Paket B terdiri dari 2 kg abon ayam, 2 kg abon sapi, dan 1 kg abon ikan seharga Rp350.000
Selain itu, Bu Rina menyatakan bahwa: Harga abon sapi lebih mahal Rp10.000 dari abon ikan. Harga abon ayam lebih mahal dari abon sapi.
Seorang pelanggan ingin menganalisis harga satuan dan kombinasi pembelian terbaik. Selisih harga antara 1 kg abon ayam dan 1 kg abon sapi adalah ...`,
        opsi: [
          { label: 'A', teks: `Rp10.000` },
          { label: 'B', teks: `Rp15.000` },
          { label: 'C', teks: `Rp20.000` },
          { label: 'D', teks: `Rp25.000` },
          { label: 'E', teks: `Rp30.000` },
        ],
        kunci: 'E',
        pembahasan: `Submateri: Sistem Persamaan & Pertidaksamaan Linear.
Misalkan harga 1 kg abon ayam \\(= a\\), sapi \\(= s\\), ikan \\(= i\\) (dalam rupiah).
Paket A dikurangi Paket B: \\((3 - 2)\\,a = 440.000 - 350.000\\), jadi \\(a = 90.000\\).
Paket B: \\(2a + 2s + i = 350.000\\), jadi \\(2s + i = 350.000 - 180.000 = 170.000\\).
Karena \\(s = i + 10.000\\): \\(2(i + 10.000) + i = 170.000\\), jadi \\(i = 50.000\\) dan \\(s = 60.000\\).
Selisih harga ayam dan sapi \\(= 90.000 - 60.000 = \\text{Rp}30.000\\).
Jawaban: E`,
        status: 'draft',
      },
    ],
  },
  // ── Geometri ──────────────────────────────────────────────────────────────
  {
    soal: [
      // contoh hal. 24, Geometri no. 1 (sumber menulis panjang busur MN "7", lihat komentar kepala)
      {
        nomor: 21,
        tipe: 'pg',
        pertanyaan: `Luas daerah lingkaran dengan pusat \\(O\\) adalah \\(9\\pi\\). Titik \\(M\\) dan \\(N\\) terletak pada lingkaran tersebut sehingga panjang busur \\(MN\\) adalah \\(\\pi\\).
⟦gambar:gambar/cerebrum/utbk2027-pk-geometri-01-busur.png⟧
Berdasarkan informasi yang diberikan, manakah dari pernyataan berikut yang benar?
(1) Jari-jari lingkaran tersebut adalah 3.
(2) Keliling lingkaran tersebut adalah \\(6\\pi\\).
(3) Luas juring \\(MON\\) adalah \\(\\frac{3}{2}\\pi\\).
(4) \\(\\angle MON = 60^{\\circ}\\).`,
        opsi: [
          { label: 'A', teks: `(1), (2), dan (3) SAJA` },
          { label: 'B', teks: `(1) dan (3) SAJA` },
          { label: 'C', teks: `(2) dan (4) SAJA` },
          { label: 'D', teks: `(4) SAJA` },
          { label: 'E', teks: `SEMUA PILIHAN` },
        ],
        kunci: 'E',
        pembahasan: `Submateri: Geometri.
Luas lingkaran \\(\\pi r^{2} = 9\\pi\\), jadi \\(r = 3\\). Pernyataan (1) benar.
Keliling lingkaran \\(= 2\\pi r = 6\\pi\\). Pernyataan (2) benar.
Panjang busur \\(MN = \\frac{\\angle MON}{360^{\\circ}} \\times 6\\pi = \\pi\\), jadi \\(\\angle MON = \\frac{1}{6} \\times 360^{\\circ} = 60^{\\circ}\\). Pernyataan (4) benar.
Luas juring \\(MON = \\frac{60^{\\circ}}{360^{\\circ}} \\times 9\\pi = \\frac{3}{2}\\pi\\). Pernyataan (3) benar.
Keempat pernyataan benar.
Jawaban: E`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      // contoh hal. 24-25, Geometri no. 2
      {
        nomor: 22,
        tipe: 'pg',
        pertanyaan: `Suatu lingkaran berpusat di \\(O\\) memiliki jari-jari \\(14\\ \\text{cm}\\). Sudut pusat \\(\\angle AOB = 120^{\\circ}\\).
⟦gambar:gambar/cerebrum/utbk2027-pk-geometri-02-juring.png⟧
Jika keliling lingkaran dinyatakan dalam \\(\\pi\\), maka selisih antara panjang busur \\(AB\\) dan panjang tali busur \\(AB\\) adalah ....`,
        opsi: [
          { label: 'A', teks: `\\(\\frac{14\\pi}{3} - 14\\sqrt{3}\\)` },
          { label: 'B', teks: `\\(\\frac{28\\pi}{3} - 14\\sqrt{3}\\)` },
          { label: 'C', teks: `\\(\\frac{28\\pi}{3} - 7\\sqrt{3}\\)` },
          { label: 'D', teks: `\\(\\frac{14\\pi}{3} - 7\\sqrt{3}\\)` },
          { label: 'E', teks: `\\(\\frac{56\\pi}{3} - 14\\sqrt{3}\\)` },
        ],
        kunci: 'B',
        pembahasan: `Submateri: Geometri.
Panjang busur \\(AB = \\frac{120^{\\circ}}{360^{\\circ}} \\times 2\\pi \\times 14 = \\frac{1}{3} \\times 28\\pi = \\frac{28\\pi}{3}\\) cm.
Tali busur \\(AB\\): segitiga \\(AOB\\) sama kaki dengan \\(OA = OB = 14\\) dan sudut puncak \\(120^{\\circ}\\). Maka \\(AB = 2 \\times 14 \\times \\sin 60^{\\circ} = 2 \\times 14 \\times \\frac{\\sqrt{3}}{2} = 14\\sqrt{3}\\) cm.
Selisihnya \\(= \\frac{28\\pi}{3} - 14\\sqrt{3}\\).
Jawaban: B`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      // contoh hal. 25-26, Geometri no. 4
      {
        nomor: 23,
        tipe: 'pg',
        pertanyaan: `Perhatikan bangun pada bidang koordinat berikut.
⟦gambar:gambar/cerebrum/utbk2027-pk-geometri-04-segitiga-koordinat.png⟧
Banyak segitiga yang terbentuk pada bangun tersebut adalah ....`,
        opsi: [
          { label: 'A', teks: `6` },
          { label: 'B', teks: `7` },
          { label: 'C', teks: `8` },
          { label: 'D', teks: `9` },
          { label: 'E', teks: `10` },
        ],
        kunci: 'C',
        pembahasan: `Submateri: Geometri.
Bangun berupa persegi panjang dengan titik sudut \\((1, 3)\\), \\((4, 3)\\), \\((4, 1)\\), \\((1, 1)\\) dan kedua diagonalnya yang berpotongan di titik tengah.
Segitiga kecil (satu sisi persegi panjang dan dua setengah diagonal): atas, bawah, kiri, dan kanan, yaitu 4 segitiga.
Segitiga besar (dua sisi persegi panjang dan satu diagonal penuh): tiap diagonal membagi persegi panjang menjadi 2 segitiga, jadi \\(2 \\times 2 = 4\\) segitiga.
Banyak segitiga \\(= 4 + 4 = 8\\).
Jawaban: C`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      // contoh hal. 26, Geometri no. 5
      {
        nomor: 24,
        tipe: 'pg',
        pertanyaan: `Perhatikan gambar!
⟦gambar:gambar/cerebrum/utbk2027-pk-geometri-05-persegi-pqrs.png⟧
\\(PQRS\\) adalah persegi dengan panjang sisi \\(8\\ \\text{cm}\\) dan \\(PQU\\) adalah segitiga sama sisi.
Besar sudut \\(\\angle PTQ = \\ldots\\)`,
        opsi: [
          { label: 'A', teks: `\\(30^{\\circ}\\)` },
          { label: 'B', teks: `\\(45^{\\circ}\\)` },
          { label: 'C', teks: `\\(60^{\\circ}\\)` },
          { label: 'D', teks: `\\(75^{\\circ}\\)` },
          { label: 'E', teks: `\\(90^{\\circ}\\)` },
        ],
        kunci: 'D',
        pembahasan: `Submateri: Geometri.
Segitiga \\(PQU\\) sama sisi, jadi \\(\\angle UPQ = 60^{\\circ}\\), dan \\(T\\) terletak pada garis \\(PU\\) sehingga \\(\\angle TPQ = 60^{\\circ}\\).
Diagonal persegi \\(SQ\\) membentuk sudut \\(45^{\\circ}\\) dengan sisi \\(PQ\\), jadi \\(\\angle TQP = 45^{\\circ}\\).
Pada segitiga \\(PTQ\\): \\(\\angle PTQ = 180^{\\circ} - 60^{\\circ} - 45^{\\circ} = 75^{\\circ}\\).
Jawaban: D`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      // contoh hal. 26, Geometri no. 6
      {
        nomor: 25,
        tipe: 'pg',
        pertanyaan: `⟦gambar:gambar/cerebrum/utbk2027-pk-geometri-06-belah-ketupat.png⟧
Diketahui sebuah belah ketupat \\(PQRS\\) dengan panjang kelilingnya adalah \\(40\\ \\text{cm}\\). Titik \\(O\\) merupakan titik potong diagonal \\(PR\\) dan \\(QS\\). Jika panjang diagonal \\(PR = 16\\ \\text{cm}\\), maka jarak titik \\(O\\) ke sisi \\(QR\\) adalah ...`,
        opsi: [
          { label: 'A', teks: `\\(2,4\\ \\text{cm}\\)` },
          { label: 'B', teks: `\\(2,5\\ \\text{cm}\\)` },
          { label: 'C', teks: `\\(3,6\\ \\text{cm}\\)` },
          { label: 'D', teks: `\\(4,2\\ \\text{cm}\\)` },
          { label: 'E', teks: `\\(4,8\\ \\text{cm}\\)` },
        ],
        kunci: 'E',
        pembahasan: `Submateri: Geometri.
Keliling 40 cm, jadi sisi belah ketupat \\(= 40 \\div 4 = 10\\) cm. Diagonal \\(PR = 16\\) cm, jadi \\(OR = 8\\) cm.
Diagonal belah ketupat berpotongan tegak lurus. Pada segitiga siku-siku \\(ROQ\\): \\(OQ = \\sqrt{10^{2} - 8^{2}} = 6\\) cm.
Jarak titik \\(O\\) ke sisi \\(QR\\) adalah tinggi segitiga \\(ROQ\\) terhadap sisi miring \\(QR\\): \\(\\frac{OR \\times OQ}{QR} = \\frac{8 \\times 6}{10} = 4,8\\) cm.
Jawaban: E`,
        status: 'draft',
      },
    ],
  },
  // ── FPB & KPK ─────────────────────────────────────────────────────────────
  {
    soal: [
      // contoh hal. 26-27, FPB & KPK no. 1
      {
        nomor: 26,
        tipe: 'pg',
        pertanyaan: `Kuantitas \\(P\\) adalah FPB dari
\\(25^{2} - 5\\) dan \\(45 \\times 35\\).
Kuantitas \\(Q\\) adalah banyak faktor positif dari 45.
Pilih hubungan yang benar antara \\(P\\) dan \\(Q\\).`,
        opsi: [
          { label: 'A', teks: `\\(P\\) lebih besar atau sama dengan 2 kali \\(Q\\)` },
          { label: 'B', teks: `\\(P\\) lebih besar dari \\(Q\\), tetapi kurang dari 2 kali \\(Q\\)` },
          { label: 'C', teks: `\\(P = Q\\)` },
          { label: 'D', teks: `\\(P < Q\\)` },
          { label: 'E', teks: `Tidak dapat ditentukan hubungan antara \\(P\\) dan \\(Q\\)` },
        ],
        kunci: 'D',
        pembahasan: `Submateri: FPB & KPK.
\\(25^{2} - 5 = 620 = 2^{2} \\times 5 \\times 31\\) dan \\(45 \\times 35 = 1.575 = 3^{2} \\times 5^{2} \\times 7\\). Faktor prima yang sama hanya 5, jadi FPB-nya 5 dan \\(P = 5\\).
\\(45 = 3^{2} \\times 5\\), banyak faktor positifnya \\((2 + 1)(1 + 1) = 6\\), jadi \\(Q = 6\\).
\\(P = 5 < Q = 6\\).
Jawaban: D`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      // contoh hal. 27, FPB & KPK no. 2
      {
        nomor: 27,
        tipe: 'pg',
        pertanyaan: `Kuantitas \\(P\\) adalah KPK dari
\\(2^{3} \\cdot 3^{2}\\) dan \\(2^{2} \\cdot 3 \\cdot 5\\).
Kuantitas \\(Q\\) adalah
\\(2 \\times \\text{FPB}\\) dari 180 dan 240.
Pilih hubungan yang benar antara \\(P\\) dan \\(Q\\).`,
        opsi: [
          { label: 'A', teks: `\\(P\\) lebih besar atau sama dengan 2 kali \\(Q\\)` },
          { label: 'B', teks: `\\(P\\) lebih besar dari \\(Q\\), tetapi kurang dari 2 kali \\(Q\\)` },
          { label: 'C', teks: `\\(P = Q\\)` },
          { label: 'D', teks: `\\(P < Q\\)` },
          { label: 'E', teks: `Tidak dapat ditentukan hubungan antara \\(P\\) dan \\(Q\\)` },
        ],
        kunci: 'A',
        pembahasan: `Submateri: FPB & KPK.
KPK diambil dari semua faktor prima dengan pangkat terbesar: \\(P = 2^{3} \\cdot 3^{2} \\cdot 5 = 360\\).
\\(180 = 2^{2} \\cdot 3^{2} \\cdot 5\\) dan \\(240 = 2^{4} \\cdot 3 \\cdot 5\\). FPB-nya \\(2^{2} \\cdot 3 \\cdot 5 = 60\\), jadi \\(Q = 2 \\times 60 = 120\\).
\\(2Q = 240\\) dan \\(P = 360 \\ge 240\\), jadi \\(P\\) lebih besar atau sama dengan 2 kali \\(Q\\).
Jawaban: A`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      // contoh hal. 27, FPB & KPK no. 3
      {
        nomor: 28,
        tipe: 'pg',
        pertanyaan: `Kuantitas \\(P\\) adalah banyak faktor persekutuan positif dari
\\(2^{4} \\cdot 3^{2} \\cdot 5\\) dan \\(2^{3} \\cdot 3^{3} \\cdot 5^{2}\\).
Kuantitas \\(Q\\) adalah
\\(\\frac{\\text{FPB dari } 540 \\text{ dan } 360}{6}\\).
Pilih hubungan yang benar antara \\(P\\) dan \\(Q\\).`,
        opsi: [
          { label: 'A', teks: `\\(P\\) lebih besar atau sama dengan 2 kali \\(Q\\)` },
          { label: 'B', teks: `\\(P\\) lebih besar dari \\(Q\\), tetapi kurang dari 2 kali \\(Q\\)` },
          { label: 'C', teks: `\\(P = Q\\)` },
          { label: 'D', teks: `\\(P < Q\\)` },
          { label: 'E', teks: `Tidak dapat ditentukan hubungan antara \\(P\\) dan \\(Q\\)` },
        ],
        kunci: 'D',
        pembahasan: `Submateri: FPB & KPK.
FPB kedua bilangan \\(= 2^{3} \\cdot 3^{2} \\cdot 5\\). Faktor persekutuan positif adalah faktor dari FPB: banyaknya \\((3 + 1)(2 + 1)(1 + 1) = 24\\), jadi \\(P = 24\\).
\\(540 = 2^{2} \\cdot 3^{3} \\cdot 5\\) dan \\(360 = 2^{3} \\cdot 3^{2} \\cdot 5\\). FPB-nya \\(2^{2} \\cdot 3^{2} \\cdot 5 = 180\\), jadi \\(Q = \\frac{180}{6} = 30\\).
\\(P = 24 < Q = 30\\).
Jawaban: D`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      // contoh hal. 27, FPB & KPK no. 4
      {
        nomor: 29,
        tipe: 'pg',
        pertanyaan: `Perhatikan bilangan-bilangan berikut:
\\(84, 126, 210, 315\\).
Berdasarkan bilangan-bilangan tersebut, tinjau pernyataan berikut:
(1) 6 adalah faktor persekutuan semua bilangan.
(2) 7 adalah faktor persekutuan semua bilangan.
(3) 14 merupakan faktor persekutuan 84, 126, dan 210, tetapi bukan faktor 315.
(4) FPB keempat bilangan tersebut adalah 21.
Pernyataan yang benar adalah ....`,
        opsi: [
          { label: 'A', teks: `(1) dan (2) SAJA` },
          { label: 'B', teks: `(2) dan (3) SAJA` },
          { label: 'C', teks: `(2), (3), dan (4) SAJA` },
          { label: 'D', teks: `(1), (3), dan (4) SAJA` },
          { label: 'E', teks: `SEMUA pernyataan benar` },
        ],
        kunci: 'C',
        pembahasan: `Submateri: FPB & KPK.
Faktorisasi: \\(84 = 2^{2} \\cdot 3 \\cdot 7\\); \\(126 = 2 \\cdot 3^{2} \\cdot 7\\); \\(210 = 2 \\cdot 3 \\cdot 5 \\cdot 7\\); \\(315 = 3^{2} \\cdot 5 \\cdot 7\\).
(1) 6 tidak habis membagi 315 (bilangan ganjil), jadi salah.
(2) 7 habis membagi keempat bilangan, jadi benar.
(3) 14 membagi 84, 126, dan 210 tetapi tidak membagi 315 (ganjil), jadi benar.
(4) FPB \\(= 3 \\times 7 = 21\\), jadi benar.
Yang benar: (2), (3), dan (4) saja.
Jawaban: C`,
        status: 'draft',
      },
    ],
  },
  // ── Eksponen & Logaritma ──────────────────────────────────────────────────
  {
    soal: [
      // contoh hal. 28, Eksponen & Logaritma no. 2
      {
        nomor: 30,
        tipe: 'pg',
        pertanyaan: `Sisa pembagian bilangan \\(2^{2026}\\) oleh 10 adalah ....`,
        opsi: [
          { label: 'A', teks: `2` },
          { label: 'B', teks: `4` },
          { label: 'C', teks: `6` },
          { label: 'D', teks: `8` },
          { label: 'E', teks: `9` },
        ],
        kunci: 'B',
        pembahasan: `Submateri: Eksponen & Logaritma.
Angka satuan pangkat dua berulang dengan periode 4: \\(2^{1} = 2\\), \\(2^{2} = 4\\), \\(2^{3} = 8\\), \\(2^{4} = 16\\) (satuan 6), lalu kembali 2, 4, 8, 6, dan seterusnya.
\\(2026 = 4 \\times 506 + 2\\), jadi angka satuan \\(2^{2026}\\) sama dengan angka satuan \\(2^{2}\\), yaitu 4.
Sisa pembagian oleh 10 adalah angka satuannya, yaitu 4.
Jawaban: B`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      // contoh hal. 28, Eksponen & Logaritma no. 3
      {
        nomor: 31,
        tipe: 'pg',
        pertanyaan: `Jika \\(27^{x-1} = 9^{x+1}\\), maka nilai \\(2x + 3\\) adalah ....`,
        opsi: [
          { label: 'A', teks: `9` },
          { label: 'B', teks: `10` },
          { label: 'C', teks: `11` },
          { label: 'D', teks: `12` },
          { label: 'E', teks: `13` },
        ],
        kunci: 'E',
        pembahasan: `Submateri: Eksponen & Logaritma.
\\(27 = 3^{3}\\) dan \\(9 = 3^{2}\\), jadi \\(3^{3(x-1)} = 3^{2(x+1)}\\).
Eksponennya sama: \\(3x - 3 = 2x + 2\\), sehingga \\(x = 5\\).
\\(2x + 3 = 2(5) + 3 = 13\\).
Jawaban: E`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      // contoh hal. 29, Eksponen & Logaritma no. 4
      {
        nomor: 32,
        tipe: 'pg',
        pertanyaan: `Jika \\(p\\) dan \\(q\\) adalah bilangan bulat positif yang memenuhi \\(\\sqrt[3]{25 \\times 49 \\times p} = q\\), nilai terkecil dari \\(p + q\\) sama dengan...`,
        opsi: [
          { label: 'A', teks: `98` },
          { label: 'B', teks: `70` },
          { label: 'C', teks: `68` },
          { label: 'D', teks: `50` },
          { label: 'E', teks: `35` },
        ],
        kunci: 'B',
        pembahasan: `Submateri: Eksponen & Logaritma.
\\(25 \\times 49 = 5^{2} \\times 7^{2}\\). Agar \\(5^{2} \\times 7^{2} \\times p\\) menjadi pangkat tiga sempurna, \\(p\\) paling kecil \\(= 5 \\times 7 = 35\\), karena \\(5^{2} \\times 7^{2} \\times 35 = 5^{3} \\times 7^{3} = 35^{3}\\).
Maka \\(q = \\sqrt[3]{35^{3}} = 35\\) dan \\(p + q = 35 + 35 = 70\\).
Nilai \\(p\\) yang lebih besar (mis. \\(35 \\times 8 = 280\\)) memberi \\(q\\) dan jumlah yang lebih besar, jadi 70 adalah yang terkecil.
Jawaban: B`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      // contoh hal. 29, Eksponen & Logaritma no. 5
      {
        nomor: 33,
        tipe: 'pg',
        pertanyaan: `Berapakah sisa \\(2^{18} + 2^{4}\\) jika dibagi dengan \\(2^{7}\\)?`,
        opsi: [
          { label: 'A', teks: `0` },
          { label: 'B', teks: `1` },
          { label: 'C', teks: `2` },
          { label: 'D', teks: `3` },
          { label: 'E', teks: `16` },
        ],
        kunci: 'E',
        pembahasan: `Submateri: Eksponen & Logaritma.
\\(2^{18} = 2^{7} \\times 2^{11}\\), jadi \\(2^{18}\\) habis dibagi \\(2^{7}\\) (sisa 0).
\\(2^{4} = 16\\) lebih kecil dari \\(2^{7} = 128\\), jadi sisanya 16.
Sisa pembagian \\(2^{18} + 2^{4}\\) oleh \\(2^{7}\\) adalah \\(0 + 16 = 16\\).
Jawaban: E`,
        status: 'draft',
      },
    ],
  },
  // ── Relasi dan Fungsi ─────────────────────────────────────────────────────
  {
    soal: [
      // contoh hal. 29, Relasi dan Fungsi no. 2
      {
        nomor: 34,
        tipe: 'pg',
        pertanyaan: `Untuk bilangan real \\(p\\) dan \\(q\\) tertentu pada grafik fungsi \\(f(x) = x^{2} - qx + 11\\) melalui \\((3, 2)\\), \\((p, 6)\\) dan \\((p + 4, 6)\\).
Nilai \\(2p + q\\) adalah ...`,
        opsi: [
          { label: 'A', teks: `5` },
          { label: 'B', teks: `6` },
          { label: 'C', teks: `7` },
          { label: 'D', teks: `8` },
          { label: 'E', teks: `10` },
        ],
        kunci: 'D',
        pembahasan: `Submateri: Relasi dan Fungsi.
Titik \\((3, 2)\\): \\(9 - 3q + 11 = 2\\), jadi \\(q = 6\\) dan \\(f(x) = x^{2} - 6x + 11\\).
Titik-titik dengan \\(y = 6\\): \\(x^{2} - 6x + 11 = 6\\), jadi \\(x^{2} - 6x + 5 = 0\\) dan \\(x = 1\\) atau \\(x = 5\\).
Titik \\((p, 6)\\) dan \\((p + 4, 6)\\) berjarak 4 satuan pada sumbu-\\(x\\), yaitu \\(x = 1\\) dan \\(x = 5\\), jadi \\(p = 1\\).
\\(2p + q = 2(1) + 6 = 8\\).
Jawaban: D`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      // contoh hal. 29, Relasi dan Fungsi no. 3
      {
        nomor: 35,
        tipe: 'pg',
        pertanyaan: `Untuk bilangan real \\(a\\) dan \\(b\\) tertentu pada grafik fungsi \\(g(x) = ax^{2} - 4x + 6\\) melalui \\((b - 1, 4)\\), \\((2, 6)\\) dan \\((b + 2, 22)\\).
Tentukan nilai \\(a + b = \\ldots\\)`,
        opsi: [
          { label: 'A', teks: `3` },
          { label: 'B', teks: `4` },
          { label: 'C', teks: `6` },
          { label: 'D', teks: `9` },
          { label: 'E', teks: `11` },
        ],
        kunci: 'B',
        pembahasan: `Submateri: Relasi dan Fungsi.
Titik \\((2, 6)\\): \\(4a - 8 + 6 = 6\\), jadi \\(a = 2\\) dan \\(g(x) = 2x^{2} - 4x + 6\\).
Titik \\((b - 1, 4)\\): \\(2(b-1)^{2} - 4(b-1) + 6 = 4\\), jadi \\(2b^{2} - 8b + 8 = 0\\), yaitu \\((b - 2)^{2} = 0\\) dan \\(b = 2\\).
Cek titik \\((b + 2, 22) = (4, 22)\\): \\(2(16) - 16 + 6 = 22\\) (cocok).
\\(a + b = 2 + 2 = 4\\).
Jawaban: B`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      // contoh hal. 30, Relasi dan Fungsi no. 5
      {
        nomor: 36,
        tipe: 'pg',
        pertanyaan: `Diketahui fungsi \\(g(x) = x^{2} + bx\\).
Jika \\(g(b + 1) = g(b) + g(1) + 4\\), dengan \\(b\\) bilangan positif, nilai \\(b\\) sama dengan...`,
        opsi: [
          { label: 'A', teks: `1` },
          { label: 'B', teks: `2` },
          { label: 'C', teks: `3` },
          { label: 'D', teks: `4` },
          { label: 'E', teks: `5` },
        ],
        kunci: 'B',
        pembahasan: `Submateri: Relasi dan Fungsi.
\\(g(b + 1) = (b + 1)^{2} + b(b + 1) = 2b^{2} + 3b + 1\\).
\\(g(b) = b^{2} + b \\cdot b = 2b^{2}\\) dan \\(g(1) = 1 + b\\).
Persamaan: \\(2b^{2} + 3b + 1 = 2b^{2} + (1 + b) + 4\\), sehingga \\(2b = 4\\) dan \\(b = 2\\).
Jawaban: B`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      // contoh hal. 30, Relasi dan Fungsi no. 7
      {
        nomor: 37,
        tipe: 'pg',
        pertanyaan: `Diketahui fungsi
\\(f(x) = \\begin{cases} x + 5, & x \\le -1 \\\\ 2x + 1, & -1 < x \\le 2 \\\\ \\dfrac{x + 4}{x - 1}, & x > 2 \\end{cases}\\)
Nilai \\(2f(-2) + f(1) + f(4)\\) adalah…`,
        opsi: [
          { label: 'A', teks: `\\(\\frac{31}{3}\\)` },
          { label: 'B', teks: `\\(\\frac{34}{3}\\)` },
          { label: 'C', teks: `\\(\\frac{35}{3}\\)` },
          { label: 'D', teks: `\\(\\frac{37}{3}\\)` },
          { label: 'E', teks: `\\(\\frac{40}{3}\\)` },
        ],
        kunci: 'C',
        pembahasan: `Submateri: Relasi dan Fungsi.
\\(f(-2)\\): \\(-2 \\le -1\\), jadi \\(f(-2) = -2 + 5 = 3\\).
\\(f(1)\\): \\(-1 < 1 \\le 2\\), jadi \\(f(1) = 2(1) + 1 = 3\\).
\\(f(4)\\): \\(4 > 2\\), jadi \\(f(4) = \\frac{4 + 4}{4 - 1} = \\frac{8}{3}\\).
\\(2f(-2) + f(1) + f(4) = 6 + 3 + \\frac{8}{3} = \\frac{27 + 8}{3} = \\frac{35}{3}\\).
Jawaban: C`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      // contoh hal. 31, Relasi dan Fungsi no. 10
      {
        nomor: 38,
        tipe: 'pg',
        pertanyaan: `Sebuah bola dijatuhkan dari ketinggian tertentu dengan fungsi ketinggian \\(h(t) = a(t - 6)^{2}\\). Dimana \\(h\\) adalah ketinggian dalam meter dan \\(t\\) waktu dalam detik. Jika ketinggian bola pada detik ke-2 adalah 32 m, ketinggian awal bola adalah ... m`,
        opsi: [
          { label: 'A', teks: `24` },
          { label: 'B', teks: `28` },
          { label: 'C', teks: `32` },
          { label: 'D', teks: `56` },
          { label: 'E', teks: `72` },
        ],
        kunci: 'E',
        pembahasan: `Submateri: Relasi dan Fungsi.
Pada detik ke-2: \\(h(2) = a(2 - 6)^{2} = 16a = 32\\), jadi \\(a = 2\\).
Ketinggian awal adalah ketinggian saat \\(t = 0\\): \\(h(0) = 2(0 - 6)^{2} = 2 \\times 36 = 72\\) m.
Jawaban: E`,
        status: 'draft',
      },
    ],
  },
  // ── Fungsi & Invers ───────────────────────────────────────────────────────
  {
    soal: [
      // contoh hal. 31, Fungsi & Invers no. 2
      {
        nomor: 39,
        tipe: 'pg',
        pertanyaan: `Diketahui \\(f(x) = 2x - 3\\) dan \\(g(x) = \\frac{x + 1}{2}\\).
Nilai \\((f^{-1} \\circ g^{-1})(4)\\) adalah ....`,
        opsi: [
          { label: 'A', teks: `3` },
          { label: 'B', teks: `4` },
          { label: 'C', teks: `5` },
          { label: 'D', teks: `6` },
          { label: 'E', teks: `7` },
        ],
        kunci: 'C',
        pembahasan: `Submateri: Fungsi & Invers.
Invers \\(g\\): \\(y = \\frac{x + 1}{2}\\), maka \\(x = 2y - 1\\), jadi \\(g^{-1}(y) = 2y - 1\\) dan \\(g^{-1}(4) = 7\\).
Invers \\(f\\): \\(y = 2x - 3\\), maka \\(x = \\frac{y + 3}{2}\\), jadi \\(f^{-1}(7) = 5\\).
\\((f^{-1} \\circ g^{-1})(4) = f^{-1}(g^{-1}(4)) = f^{-1}(7) = 5\\).
Jawaban: C`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      // contoh hal. 32, Fungsi & Invers no. 3
      {
        nomor: 40,
        tipe: 'pg',
        pertanyaan: `Diketahui fungsi \\(f(x) = 2x - 3\\) dan \\(g(x) = 4x\\). Tentukan nilai dari \\((f^{-1} \\circ g^{-1})(4) = \\ldots\\).`,
        opsi: [
          { label: 'A', teks: `1` },
          { label: 'B', teks: `2` },
          { label: 'C', teks: `3` },
          { label: 'D', teks: `4` },
          { label: 'E', teks: `5` },
        ],
        kunci: 'B',
        pembahasan: `Submateri: Fungsi & Invers.
\\(g^{-1}(y) = \\frac{y}{4}\\), jadi \\(g^{-1}(4) = 1\\).
\\(f^{-1}(y) = \\frac{y + 3}{2}\\), jadi \\(f^{-1}(1) = \\frac{1 + 3}{2} = 2\\).
\\((f^{-1} \\circ g^{-1})(4) = f^{-1}(g^{-1}(4)) = f^{-1}(1) = 2\\).
Jawaban: B`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      // contoh hal. 32, Fungsi & Invers no. 4
      {
        nomor: 41,
        tipe: 'pg',
        pertanyaan: `Diketahui \\(f(x) = x + 5\\) dan \\(g(x) = x^{2} + 1\\) dengan \\(x \\ge 0\\). Nilai \\(g^{-1}(f(5)) = \\ldots\\).`,
        opsi: [
          { label: 'A', teks: `2` },
          { label: 'B', teks: `3` },
          { label: 'C', teks: `4` },
          { label: 'D', teks: `5` },
          { label: 'E', teks: `6` },
        ],
        kunci: 'B',
        pembahasan: `Submateri: Fungsi & Invers.
\\(f(5) = 5 + 5 = 10\\).
\\(g^{-1}(10)\\) adalah nilai \\(x \\ge 0\\) yang memenuhi \\(x^{2} + 1 = 10\\), yaitu \\(x^{2} = 9\\) dan \\(x = 3\\) (akar negatif tidak dipakai karena \\(x \\ge 0\\)).
Jadi \\(g^{-1}(f(5)) = 3\\).
Jawaban: B`,
        status: 'draft',
      },
    ],
  },
  // ── Trigonometri ──────────────────────────────────────────────────────────
  {
    soal: [
      // contoh hal. 32, Trigonometri no. 1
      {
        nomor: 42,
        tipe: 'pg',
        pertanyaan: `Diketahui \\(\\sin 2\\theta = \\frac{1}{4}\\sqrt{7}\\) dengan \\(0^{\\circ} < 2\\theta < 90^{\\circ}\\), pernyataan berikut yang benar adalah…
(1) \\(\\sin\\theta = \\frac{1}{4}\\sqrt{2}\\)
(2) \\(\\cos\\theta = \\frac{1}{4}\\sqrt{14}\\)
(3) \\(\\sin\\theta - \\cos\\theta = \\frac{1}{4}\\left(\\sqrt{2} - \\sqrt{14}\\right)\\)
(4) \\(\\sin\\theta + \\cos\\theta = \\frac{\\sqrt{2}}{4}\\left(1 - \\sqrt{14}\\right)\\)`,
        opsi: [
          { label: 'A', teks: `(1), (2), dan (3)` },
          { label: 'B', teks: `(1) dan (3)` },
          { label: 'C', teks: `(2) dan (4)` },
          { label: 'D', teks: `(4) saja` },
          { label: 'E', teks: `Semua pilihan` },
        ],
        kunci: 'A',
        pembahasan: `Submateri: Trigonometri.
Karena \\(0^{\\circ} < 2\\theta < 90^{\\circ}\\), \\(\\cos 2\\theta = \\sqrt{1 - \\frac{7}{16}} = \\frac{3}{4}\\) (positif).
\\(\\sin^{2}\\theta = \\frac{1 - \\cos 2\\theta}{2} = \\frac{1}{8}\\), jadi \\(\\sin\\theta = \\frac{\\sqrt{2}}{4}\\). Pernyataan (1) benar.
\\(\\cos^{2}\\theta = \\frac{1 + \\cos 2\\theta}{2} = \\frac{7}{8}\\), jadi \\(\\cos\\theta = \\frac{\\sqrt{14}}{4}\\). Pernyataan (2) benar.
(3) \\(\\sin\\theta - \\cos\\theta = \\frac{\\sqrt{2} - \\sqrt{14}}{4}\\), benar.
(4) \\(\\sin\\theta + \\cos\\theta = \\frac{\\sqrt{2} + \\sqrt{14}}{4} = \\frac{\\sqrt{2}}{4}\\left(1 + \\sqrt{7}\\right)\\), bukan \\(\\frac{\\sqrt{2}}{4}\\left(1 - \\sqrt{14}\\right)\\) (yang bernilai negatif), jadi salah.
Yang benar: (1), (2), dan (3).
Jawaban: A`,
        status: 'draft',
      },
    ],
  },
  // ── Persamaan Aljabar ─────────────────────────────────────────────────────
  {
    soal: [
      // contoh hal. 32-33, Persamaan Aljabar no. 1
      {
        nomor: 43,
        tipe: 'pg',
        pertanyaan: `Diketahui \\(x^{2} = \\frac{9}{y}\\) dan \\(xy = 3\\). Nilai dari \\(x\\) adalah ....`,
        opsi: [
          { label: 'A', teks: `1` },
          { label: 'B', teks: `2` },
          { label: 'C', teks: `3` },
          { label: 'D', teks: `4` },
          { label: 'E', teks: `5` },
        ],
        kunci: 'C',
        pembahasan: `Submateri: Persamaan Aljabar.
Kalikan persamaan pertama dengan \\(y\\): \\(x^{2}y = 9\\).
Karena \\(x^{2}y = x \\cdot (xy) = 3x\\), maka \\(3x = 9\\) dan \\(x = 3\\).
Cek: \\(y = \\frac{3}{3} = 1\\) dan \\(x^{2} = 9 = \\frac{9}{1}\\).
Jawaban: C`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      // contoh hal. 33, Persamaan Aljabar no. 2
      {
        nomor: 44,
        tipe: 'pg',
        pertanyaan: `Diketahui \\(x^{2} = \\frac{18}{y}\\) dan \\(xy = 6\\). Nilai dari \\(2x\\) adalah ....`,
        opsi: [
          { label: 'A', teks: `4` },
          { label: 'B', teks: `6` },
          { label: 'C', teks: `8` },
          { label: 'D', teks: `10` },
          { label: 'E', teks: `12` },
        ],
        kunci: 'B',
        pembahasan: `Submateri: Persamaan Aljabar.
Kalikan persamaan pertama dengan \\(y\\): \\(x^{2}y = 18\\).
Karena \\(x^{2}y = x \\cdot (xy) = 6x\\), maka \\(6x = 18\\), jadi \\(x = 3\\) dan \\(2x = 6\\).
Cek: \\(y = \\frac{6}{3} = 2\\) dan \\(x^{2} = 9 = \\frac{18}{2}\\).
Jawaban: B`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      // contoh hal. 33, Persamaan Aljabar no. 4
      {
        nomor: 45,
        tipe: 'pg',
        pertanyaan: `Jika \\(x^{2} - 3xy = 10\\) dan \\(xy = 2\\), dengan \\(x\\) bilangan positif, maka nilai \\(x\\) adalah ....`,
        opsi: [
          { label: 'A', teks: `2` },
          { label: 'B', teks: `3` },
          { label: 'C', teks: `4` },
          { label: 'D', teks: `5` },
          { label: 'E', teks: `6` },
        ],
        kunci: 'C',
        pembahasan: `Submateri: Persamaan Aljabar.
\\(3xy = 3 \\times 2 = 6\\), jadi \\(x^{2} - 6 = 10\\) dan \\(x^{2} = 16\\).
Karena \\(x\\) bilangan positif, \\(x = 4\\).
Cek: \\(y = \\frac{2}{4} = 0,5\\) dan \\(x^{2} - 3xy = 16 - 6 = 10\\).
Jawaban: C`,
        status: 'draft',
      },
    ],
  },
  // ── Persamaan dan Pertidaksamaan Nilai Mutlak ─────────────────────────────
  {
    soal: [
      // contoh hal. 33, Persamaan dan Pertidaksamaan Nilai Mutlak no. 1
      {
        nomor: 46,
        tipe: 'pg',
        pertanyaan: `Semua nilai \\(x\\) yang memenuhi pertidaksamaan
\\(|2x - 5| > |x + 1|\\)
dapat dituliskan sebagai
\\(x < m\\) atau \\(x > n\\).
Nilai \\(3m + n\\) adalah ....`,
        opsi: [
          { label: 'A', teks: `8` },
          { label: 'B', teks: `9` },
          { label: 'C', teks: `10` },
          { label: 'D', teks: `11` },
          { label: 'E', teks: `12` },
        ],
        kunci: 'C',
        pembahasan: `Submateri: Persamaan dan Pertidaksamaan Nilai Mutlak.
Kedua ruas tidak negatif, jadi boleh dikuadratkan: \\((2x - 5)^{2} > (x + 1)^{2}\\).
\\((2x - 5)^{2} - (x + 1)^{2} > 0\\), sehingga \\((2x - 5 - x - 1)(2x - 5 + x + 1) > 0\\), yaitu \\((x - 6)(3x - 4) > 0\\).
Akar-akarnya \\(x = \\frac{4}{3}\\) dan \\(x = 6\\). Karena koefisien \\(x^{2}\\) positif, penyelesaiannya \\(x < \\frac{4}{3}\\) atau \\(x > 6\\).
Jadi \\(m = \\frac{4}{3}\\) dan \\(n = 6\\), sehingga \\(3m + n = 4 + 6 = 10\\).
Jawaban: C`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      // contoh hal. 33, Persamaan dan Pertidaksamaan Nilai Mutlak no. 2
      {
        nomor: 47,
        tipe: 'pg',
        pertanyaan: `Banyak bilangan bulat \\(x\\) yang memenuhi \\(|x - 3| \\le 4\\) adalah ....`,
        opsi: [
          { label: 'A', teks: `7` },
          { label: 'B', teks: `8` },
          { label: 'C', teks: `9` },
          { label: 'D', teks: `10` },
          { label: 'E', teks: `11` },
        ],
        kunci: 'C',
        pembahasan: `Submateri: Persamaan dan Pertidaksamaan Nilai Mutlak.
\\(|x - 3| \\le 4\\) berarti \\(-4 \\le x - 3 \\le 4\\), sehingga \\(-1 \\le x \\le 7\\).
Bilangan bulatnya: -1, 0, 1, 2, 3, 4, 5, 6, 7, yaitu 9 bilangan.
Jawaban: C`,
        status: 'draft',
      },
    ],
  },
  // ── Matriks ───────────────────────────────────────────────────────────────
  {
    soal: [
      // contoh hal. 34, Matriks no. 1
      {
        nomor: 48,
        tipe: 'pg',
        pertanyaan: `Jika \\(A = \\begin{pmatrix} 3 & 2 \\\\ 1 & x \\end{pmatrix}\\) dan \\(\\det(A) = 10\\), maka nilai \\(x\\) adalah ....`,
        opsi: [
          { label: 'A', teks: `3` },
          { label: 'B', teks: `4` },
          { label: 'C', teks: `5` },
          { label: 'D', teks: `6` },
          { label: 'E', teks: `7` },
        ],
        kunci: 'B',
        pembahasan: `Submateri: Matriks.
Determinan matriks \\(2 \\times 2\\): \\(\\det(A) = 3 \\cdot x - 2 \\cdot 1 = 3x - 2\\).
\\(3x - 2 = 10\\), jadi \\(3x = 12\\) dan \\(x = 4\\).
Jawaban: B`,
        status: 'draft',
      },
    ],
  },
];
