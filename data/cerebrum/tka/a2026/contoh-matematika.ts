import type { Kelompok } from '@/lib/skema';

/**
 * Contoh soal TKA SMA 2026, mata uji Matematika: 20 soal dari BAB V (5.1) laporan
 * "Laporan TKA SMA Tahun 2026" (Product Management PT Cerebrum Edukanesia
 * Nusantara, Juni 2026).
 *
 * Ditulis tangan, BUKAN keluaran skrip/ke-data.mjs.
 *
 * Asal tiap bagian:
 *   - soal, opsi, kunci, dan tingkat kesulitan: dari dokumen (kolom "Jawaban" dan
 *     "Tingkat Kesulitan"), nomor soal sama dengan nomor di dokumen;
 *   - pembahasan: TIDAK ada di dokumen, jadi disusun ulang dan dihitung ulang
 *     (dicek dengan Python). Karena itu semua soal berstatus 'draft'; jangan
 *     dinaikkan ke 'direview' atau 'final' sebelum diperiksa tim akademik.
 *
 * Pemetaan tipe soal: PG = 'pg'; PGK Kategori = 'pg_kategori' (kunci per
 * pernyataan menurut urutan opsi); PGK MCMA = 'pg_kompleks' (kunci berisi semua
 * huruf yang benar). Isi dokumen: 14 PG, 4 PGK Kategori (3, 6, 10, 12), 2 PGK
 * MCMA (7, 18).
 *
 * Teks soal mengikuti dokumen apa adanya, kecuali satu koreksi: Soal 10 di
 * dokumen tertulis "BC sejajar DC", padahal gambarnya (juga gambar di dokumen)
 * menunjukkan AB sejajar DC. Ditulis "AB sejajar DC".
 *
 * Gambar ada di public/gambar/cerebrum/ dengan nama tka-mat-<nomor>-<bagian>.
 * Semua gambar soal berasal dari dokumen; tidak ada yang memperlihatkan jawaban,
 * jadi semuanya dipasang di soal. Rumus diketik ulang sebagai LaTeX.
 */
export const contohMatematika: Kelompok[] = [
  // ── 1. Aljabar dan Fungsi ──────────────────────────────────────────────
  {
    soal: [
      {
        nomor: 1,
        tipe: 'pg',
        tingkat: 'sedang',
        pertanyaan: `Harga 3 buah buku dan 2 buah penggaris Rp18.000,00. Jika harga sebuah buku Rp1.000,00 lebih mahal dari sebuah penggaris, harga 2 buah buku dan 5 buah penggaris adalah ....`,
        opsi: [
          { label: 'A', teks: `Rp19.000,00` },
          { label: 'B', teks: `Rp23.000,00` },
          { label: 'C', teks: `Rp25.000,00` },
          { label: 'D', teks: `Rp27.000,00` },
          { label: 'E', teks: `Rp30.000,00` },
        ],
        kunci: 'B',
        pembahasan: `Materi: Aljabar dan Fungsi · Sistem Persamaan Linear Multivariabel.
Misalkan harga sebuah buku = \\(b\\) dan sebuah penggaris = \\(p\\). Dari soal: \\(3b + 2p = 18.000\\) dan \\(b = p + 1.000\\).
Substitusi: \\(3(p + 1.000) + 2p = 18.000\\), sehingga \\(5p = 15.000\\), \\(p = 3.000\\), dan \\(b = 4.000\\).
Harga 2 buku dan 5 penggaris = 2 × 4.000 + 5 × 3.000 = 8.000 + 15.000 = Rp23.000,00.
Jawaban: B`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      {
        nomor: 2,
        tipe: 'pg',
        tingkat: 'sedang',
        pertanyaan: `Perhatikan gambar berikut.
⟦gambar:gambar/cerebrum/tka-mat-02-grafik.png⟧
Daerah yang memenuhi sistem pertidaksamaan linear
\\(x + y \\le 4;\\; x + 3y \\ge 6;\\; x \\ge 0;\\; y \\ge 0\\)
adalah ....`,
        opsi: [
          { label: 'A', teks: `I` },
          { label: 'B', teks: `II` },
          { label: 'C', teks: `III` },
          { label: 'D', teks: `IV` },
          { label: 'E', teks: `V` },
        ],
        kunci: 'B',
        pembahasan: `Materi: Aljabar dan Fungsi · Sistem Pertidaksamaan Linear Multivariabel.
Dari gambar, garis \\(x + y = 4\\) memotong sumbu di (0, 4) dan (4, 0), sedangkan garis \\(x + 3y = 6\\) memotong sumbu di (0, 2) dan (6, 0). Keduanya berpotongan di (3, 1).
Syarat \\(x \\ge 0\\) dan \\(y \\ge 0\\) menyingkirkan daerah V (di kiri sumbu Y). Uji satu titik tiap daerah:
• Daerah I, titik (1, 1): \\(x + 3y = 4\\), tidak memenuhi \\(x + 3y \\ge 6\\).
• Daerah II, titik (0,5; 3): \\(x + y = 3,5 \\le 4\\) dan \\(x + 3y = 9,5 \\ge 6\\), memenuhi keduanya.
• Daerah III, titik (3, 3): \\(x + y = 6\\), tidak memenuhi \\(x + y \\le 4\\).
• Daerah IV, titik (5; 0,3): \\(x + y = 5,3\\) dan \\(x + 3y = 5,9\\), tidak memenuhi keduanya.
Jadi daerah penyelesaiannya adalah II.
Jawaban: B`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      {
        nomor: 3,
        tipe: 'pg_kategori',
        tingkat: 'sulit',
        pertanyaan: `Mirna akan memproduksi dua jenis kue dengan modal Rp8.000.000,00. Biaya produksi kue bolu sebesar Rp15.000,00 per kotak dan dijual dengan laba 40%. Sedangkan biaya produksi kue brownies sebesar Rp20.000,00 per kotak dan dijual dengan laba 35%. Setiap harinya, Mirna dapat memproduksi paling banyak 500 kotak kue.

Apabila Mirna ingin memperoleh keuntungan maksimum, tentukan Benar atau Salah untuk setiap pernyataan berikut!`,
        opsi: [
          { label: 'A', teks: `Mirna harus memproduksi 200 kotak kue bolu.` },
          { label: 'B', teks: `Mirna harus memproduksi kue brownies lebih banyak.` },
          { label: 'C', teks: `Keuntungan maksimum yang dapat diperoleh Mirna adalah Rp3.100.000,00.` },
        ],
        kategori: ['Benar', 'Salah'],
        kunci: 'Salah, Salah, Benar',
        pembahasan: `Materi: Aljabar dan Fungsi · Program Linear. Tipe: PGK Kategori.
Misalkan \\(x\\) = kotak kue bolu dan \\(y\\) = kotak kue brownies. Laba per kotak: bolu 40% × 15.000 = 6.000; brownies 35% × 20.000 = 7.000.
Kendala: modal \\(15.000x + 20.000y \\le 8.000.000\\), yaitu \\(3x + 4y \\le 1.600\\); produksi \\(x + y \\le 500\\); \\(x \\ge 0\\), \\(y \\ge 0\\). Fungsi tujuan: \\(L = 6.000x + 7.000y\\).
Titik sudut daerah layak: (0, 0), (500, 0), (0, 400), dan (400, 100), yaitu perpotongan \\(3x + 4y = 1.600\\) dengan \\(x + y = 500\\).
Laba: (500, 0) = 3.000.000; (0, 400) = 2.800.000; (400, 100) = 2.400.000 + 700.000 = 3.100.000 (maksimum).
A. Salah: kue bolu harus 400 kotak, bukan 200.
B. Salah: brownies hanya 100 kotak, lebih sedikit daripada bolu.
C. Benar: laba maksimum Rp3.100.000,00.
Jawaban: A. Salah; B. Salah; C. Benar`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      {
        nomor: 4,
        tipe: 'pg',
        tingkat: 'sedang',
        pertanyaan: `Diketahui fungsi \\(f(x) = \\sqrt{2x + 3}\\), dengan \\(x \\ge -\\frac{3}{2}\\). Jika \\(f^{-1}(x)\\) adalah invers dari fungsi \\(f(x)\\), nilai dari \\(f^{-1}(3)\\)...`,
        opsi: [
          { label: 'A', teks: `6` },
          { label: 'B', teks: `3` },
          { label: 'C', teks: `\\(\\frac{3}{2}\\)` },
          { label: 'D', teks: `\\(-\\frac{1}{2}\\)` },
          { label: 'E', teks: `\\(-1\\)` },
        ],
        kunci: 'B',
        pembahasan: `Materi: Aljabar dan Fungsi · Invers Fungsi.
\\(f^{-1}(3)\\) adalah nilai \\(x\\) yang membuat \\(f(x) = 3\\).
\\(\\sqrt{2x + 3} = 3\\). Kuadratkan kedua ruas: \\(2x + 3 = 9\\), sehingga \\(x = 3\\). Nilai ini memenuhi syarat \\(x \\ge -\\frac{3}{2}\\).
Jadi \\(f^{-1}(3) = 3\\).
Jawaban: B`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      {
        nomor: 5,
        tipe: 'pg',
        tingkat: 'sedang',
        pertanyaan: `Fungsi \\(f : R \\to R\\) dan \\(g : R \\to R\\). Jika \\(g(x) = x - 1\\) dan \\((f \\circ g)(x) = x^3 - 4x\\), nilai dari \\(f(2)\\) = ....`,
        opsi: [
          { label: 'A', teks: `9` },
          { label: 'B', teks: `13` },
          { label: 'C', teks: `15` },
          { label: 'D', teks: `17` },
          { label: 'E', teks: `25` },
        ],
        kunci: 'C',
        pembahasan: `Materi: Aljabar dan Fungsi · Fungsi Komposisi.
\\((f \\circ g)(x) = f(g(x)) = f(x - 1) = x^3 - 4x\\). Untuk mendapatkan \\(f(2)\\), pilih \\(x\\) yang membuat \\(x - 1 = 2\\), yaitu \\(x = 3\\).
\\(f(2) = 3^3 - 4(3) = 27 - 12 = 15\\).
Cek lewat bentuk umumnya: \\(f(t) = (t + 1)^3 - 4(t + 1) = t^3 + 3t^2 - t - 3\\), sehingga \\(f(2) = 8 + 12 - 2 - 3 = 15\\).
Jawaban: C`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      {
        nomor: 6,
        tipe: 'pg_kategori',
        tingkat: 'sulit',
        pertanyaan: `Fungsi didefinisikan oleh \\(f(x) = 4(x^2 - 8x + 12)\\)
Tentukan Benar atau Salah pada setiap pernyataan berikut yang terkait dengan grafik fungsi \\(f\\) !`,
        opsi: [
          { label: 'A', teks: `Grafik fungsi \\(f\\) terbuka ke atas.` },
          { label: 'B', teks: `Grafik fungsi \\(f\\) memotong garis \\(y = -18\\)` },
          { label: 'C', teks: `Grafik fungsi \\(f\\) tidak melalui kuadran tiga.` },
        ],
        kategori: ['Benar', 'Salah'],
        kunci: 'Benar, Salah, Benar',
        pembahasan: `Materi: Aljabar dan Fungsi · Grafik Fungsi. Tipe: PGK Kategori.
Bentuk puncak: \\(f(x) = 4x^2 - 32x + 48 = 4(x - 4)^2 - 16\\). Koefisien \\(x^2\\) = 4 (positif), titik puncak (4, −16), dan memotong sumbu X di \\(x = 2\\) dan \\(x = 6\\).
A. Benar: koefisien \\(x^2\\) positif, jadi parabola terbuka ke atas.
B. Salah: nilai minimum \\(f\\) adalah −16, jadi grafik tidak pernah mencapai \\(y = -18\\). Cek: \\(f(x) = -18\\) memberi \\(4x^2 - 32x + 66 = 0\\) dengan diskriminan \\(32^2 - 4 \\cdot 4 \\cdot 66 = -32 < 0\\), tanpa akar real.
C. Benar: untuk \\(x < 0\\), \\(x^2 - 8x + 12 > 0\\), sehingga \\(f(x) > 0\\) (grafik di kuadran II). Tidak ada titik dengan \\(x < 0\\) dan \\(y < 0\\), jadi grafik tidak melalui kuadran III.
Jawaban: A. Benar; B. Salah; C. Benar`,
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      isi: `Tagihan listrik bulanan di sebuah apartemen dihitung berdasarkan jumlah energi listrik (dalam kWh) yang digunakan. Apartemen tersebut masih menggunakan meteran listrik yang berbeda dari penggunaan token.

Biaya tagihan listrik dihitung dengan rumus:
\\(f(x) = 1.350x + 25.000\\)

Keterangan:
\\(f(x)\\) : total tagihan listrik (dalam rupiah)
\\(x\\) : jumlah pemakaian energi listrik (kwh)

Andi merupakan salah satu penghuni apartemen tersebut yang menerima tagihan pembayaran listrik seperti terlihat pada gambar berikut:
⟦gambar:gambar/cerebrum/tka-mat-07-tagihan.png⟧`,
    },
    soal: [
      {
        nomor: 7,
        tipe: 'pg_kompleks',
        tingkat: 'sulit',
        pertanyaan: `Dia menyadari bahwa penggunaan listrik sebulan terakhir lebih dari penggunaan listrik biasanya.

Berdasarkan informasi tersebut, biasanya berapa besar penggunaan listrik di apartemen Andi?

Pilihlah jawaban yang benar! Jawaban benar lebih dari satu.`,
        opsi: [
          { label: 'A', teks: `85 kWh` },
          { label: 'B', teks: `90 kWh` },
          { label: 'C', teks: `100 kWh` },
          { label: 'D', teks: `120 kWh` },
          { label: 'E', teks: `137 kWh` },
        ],
        kunci: 'A, B',
        pembahasan: `Materi: Aljabar dan Fungsi · Invers Fungsi Kontekstual (dalam Konteks Tagihan Listrik). Tipe: PGK MCMA.
Tagihan di gambar adalah Rp160.000,00. Pemakaian bulan terakhir dicari dengan membalik fungsi: \\(1.350x + 25.000 = 160.000\\), sehingga \\(1.350x = 135.000\\) dan \\(x = 100\\) kWh. (Bentuk inversnya: \\(x = \\frac{f(x) - 25.000}{1.350}\\).)
Pemakaian bulan terakhir lebih banyak daripada biasanya, jadi pemakaian biasa harus kurang dari 100 kWh. Hanya 85 kWh (tagihan Rp139.750,00) dan 90 kWh (Rp146.500,00) yang memenuhi.
100 kWh sama dengan pemakaian bulan terakhir (bukan "kurang dari"), sedangkan 120 kWh dan 137 kWh lebih besar daripadanya.
Jawaban: A, B`,
        status: 'draft',
      },
    ],
  },

  // ── 2. Baris dan Deret ─────────────────────────────────────────────────
  {
    soal: [
      {
        nomor: 8,
        tipe: 'pg',
        tingkat: 'sulit',
        pertanyaan: `Seorang peneliti melakukan pengamatan terhadap bakteri tertentu. Setiap \\(\\frac{1}{2}\\) hari bakteri membelah diri menjadi dua. Pada awal pengamatan terdapat 2 bakteri. Jika setiap 2 hari \\(\\frac{1}{4}\\) dari jumlah bakteri mati, banyaknya bakteri setelah tiga hari adalah…`,
        opsi: [
          { label: 'A', teks: `48 bakteri` },
          { label: 'B', teks: `64 bakteri` },
          { label: 'C', teks: `96 bakteri` },
          { label: 'D', teks: `128 bakteri` },
          { label: 'E', teks: `192 bakteri` },
        ],
        kunci: 'C',
        pembahasan: `Materi: Baris dan Deret · Barisan dan Deret Geometri.
Pembelahan terjadi tiap 0,5 hari, jadi dalam 2 hari ada 4 kali pembelahan: \\(2 \\times 2^4 = 32\\) bakteri. Pada hari ke-2, \\(\\frac{1}{4}\\) bakteri mati, tersisa \\(\\frac{3}{4} \\times 32 = 24\\).
Dari hari ke-2 sampai hari ke-3 ada 2 kali pembelahan lagi: \\(24 \\times 2^2 = 96\\).
Urutan pembelahan dan kematian di hari ke-2 tidak mengubah hasil karena keduanya perkalian: \\(2 \\times 2^6 \\times \\frac{3}{4} = 96\\).
Jawaban: C`,
        status: 'draft',
      },
    ],
  },

  // ── 3. Geometri dan Pengukuran ─────────────────────────────────────────
  {
    soal: [
      {
        nomor: 9,
        tipe: 'pg',
        tingkat: 'sulit',
        pertanyaan: `Dari selembar karton berbentuk persegi yang berukuran sisi 30 cm akan dibuat kotak tanpa tutup, dengan cara menggunting empat persegi di setiap pojok karton, seperti pada gambar. Volume kotak terbesar yang dapat dibuat adalah…
⟦gambar:gambar/cerebrum/tka-mat-09-karton.png⟧`,
        opsi: [
          { label: 'A', teks: `2.000 cm³` },
          { label: 'B', teks: `3.000 cm³` },
          { label: 'C', teks: `4.000 cm³` },
          { label: 'D', teks: `5.000 cm³` },
          { label: 'E', teks: `6.000 cm³` },
        ],
        kunci: 'A',
        pembahasan: `Materi: Geometri dan Pengukuran · Volume Bangun Ruang.
Misalkan sisi persegi yang digunting di tiap pojok = \\(x\\) cm. Alas kotak berukuran \\((30 - 2x) \\times (30 - 2x)\\) dan tingginya \\(x\\), sehingga \\(V(x) = x(30 - 2x)^2\\) dengan \\(0 < x < 15\\).
\\(V'(x) = (30 - 2x)^2 - 4x(30 - 2x) = (30 - 2x)(30 - 6x)\\). \\(V'(x) = 0\\) memberi \\(x = 5\\) (\\(x = 15\\) tidak dipakai karena alas habis).
\\(V(5) = 5 \\times 20^2 = 2.000\\) cm³. Volume naik sampai \\(x = 5\\) lalu turun, jadi 2.000 cm³ adalah yang terbesar.
Jawaban: A`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      {
        nomor: 10,
        tipe: 'pg_kategori',
        tingkat: 'sedang',
        pertanyaan: `Pada trapesium berikut, \\(AD = BC\\), \\(\\overline{AB}\\) sejajar \\(\\overline{DC}\\), \\(AB > DC\\), \\(\\angle BAD = 70^\\circ\\), dan \\(\\angle ABD = 30^\\circ\\)
⟦gambar:gambar/cerebrum/tka-mat-10-trapesium.png⟧
Tentukan Benar atau Salah untuk setiap pernyataan berikut terkait dengan besar sudut pada trapesium \\(ABCD\\)!`,
        opsi: [
          { label: 'A', teks: `\\(\\angle BCD = 110^\\circ\\)` },
          { label: 'B', teks: `\\(\\angle CBD = 40^\\circ\\)` },
          { label: 'C', teks: `\\(\\angle BDC = 40^\\circ\\)` },
        ],
        kategori: ['Benar', 'Salah'],
        kunci: 'Benar, Benar, Salah',
        pembahasan: `Materi: Geometri dan Pengukuran · Hubungan Sudut dan Garis. Tipe: PGK Kategori.
Catatan teks: di dokumen tertulis \\(\\overline{BC}\\) sejajar \\(\\overline{DC}\\), tetapi gambar menandai AB sejajar DC dan syarat \\(AB > DC\\) hanya bermakna untuk sisi sejajar. Di sini ditulis AB sejajar DC.
Karena \\(AD = BC\\) dan \\(AB \\parallel DC\\), trapesium ini sama kaki, sehingga \\(\\angle ABC = \\angle BAD = 70^\\circ\\).
\\(\\angle CBD = \\angle ABC - \\angle ABD = 70^\\circ - 30^\\circ = 40^\\circ\\).
\\(\\angle BCD = 180^\\circ - \\angle ABC = 110^\\circ\\) (sudut dalam sepihak).
\\(\\angle BDC = \\angle ABD = 30^\\circ\\) (sudut dalam berseberangan). Cek di segitiga BCD: \\(40^\\circ + 110^\\circ + 30^\\circ = 180^\\circ\\).
A. Benar. B. Benar. C. Salah: \\(\\angle BDC = 30^\\circ\\), bukan \\(40^\\circ\\).
Jawaban: A. Benar; B. Benar; C. Salah`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      {
        nomor: 11,
        tipe: 'pg',
        tingkat: 'sulit',
        pertanyaan: `⟦gambar:gambar/cerebrum/tka-mat-11-trapesium-siku.png⟧
Pada trapesium siku-siku tersebut, \\(AB = 3\\) dan \\(AD \\le BC\\). Apakah keliling trapesium tersebut lebih dari 25?
Putuskan apakah dengan tambahan informasi Pernyataan (1) dan Pernyataan (2) berikut cukup untuk menjawab pertanyaan tersebut!
(1) Luas trapesium ABCD = 24.
(2) BC = 10 dan CD = 5.`,
        opsi: [
          { label: 'A', teks: `Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi Pernyataan (2) SAJA tidak cukup.` },
          { label: 'B', teks: `Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi Pernyataan (1) SAJA tidak cukup.` },
          { label: 'C', teks: `DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.` },
          { label: 'D', teks: `Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan Pernyataan (2) SAJA cukup.` },
          { label: 'E', teks: `Pernyataan (1) dan Pernyataan (2) tidak cukup untuk menjawab pertanyaan.` },
        ],
        kunci: 'B',
        pembahasan: `Materi: Geometri dan Pengukuran · Keliling dan Luas Bangun Datar. Tipe: PG (kecukupan data).
Trapesium siku-siku ABCD dengan tinggi \\(AB = 3\\) dan sisi sejajar AD dan BC. Misalkan \\(d = BC - AD \\ge 0\\); maka \\(CD = \\sqrt{3^2 + d^2}\\) dan keliling \\(= 3 + AD + BC + CD\\).
Pernyataan (1): luas \\(= \\frac{AD + BC}{2} \\times 3 = 24\\), sehingga \\(AD + BC = 16\\) dan keliling \\(= 19 + \\sqrt{9 + d^2}\\). Nilainya bergantung pada \\(d\\): untuk \\(d = 0\\) kelilingnya 22 (tidak lebih dari 25), sedangkan untuk \\(d = 8\\) (BC = 12, AD = 4) kelilingnya \\(19 + \\sqrt{73} \\approx 27,5\\) (lebih dari 25). Jawabannya tidak pasti, jadi (1) saja tidak cukup.
Pernyataan (2): \\(BC = 10\\) dan \\(CD = 5\\), sehingga \\(d = \\sqrt{5^2 - 3^2} = 4\\) dan \\(AD = 6\\). Keliling \\(= 3 + 6 + 10 + 5 = 24\\), tidak lebih dari 25. Jawabannya pasti ("tidak"), jadi (2) saja cukup.
Jawaban: B`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      {
        nomor: 12,
        tipe: 'pg_kategori',
        tingkat: 'sedang',
        pertanyaan: `Pak Andi akan mempresentasikan desain gedung berukuran 60 cm × 60 cm menggunakan proyektor ke layar berukuran 2,4 meter × 1,8 meter yang dipasang di depan ruang rapat (orientasi horizontal). Proyektor menghasilkan pembesaran proporsional tergantung jaraknya dari layar.

Pak Andi menempatkan proyektor dengan jarak yang menghasilkan skala pembesaran seperti terlihat pada gambar berikut:
⟦gambar:gambar/cerebrum/tka-mat-12-proyektor.png⟧
Bagaimanakah tampilan desain gedung di layar?
Tentukan Benar atau Salah pada setiap pernyataan berikut!`,
        opsi: [
          { label: 'A', teks: `Perbandingan ukuran tampilan desain di layar adalah 1 : 1.` },
          { label: 'B', teks: `Ukuran panjang dan lebar tampilan desain pada layar adalah lebih dari 1 meter.` },
          { label: 'C', teks: `Terdapat bagian gambar asli desain yang terpotong dalam tampilan pada layar.` },
        ],
        kategori: ['Benar', 'Salah'],
        kunci: 'Benar, Benar, Salah',
        pembahasan: `Materi: Geometri dan Pengukuran · Transformasi Geometri (dilatasi). Tipe: PGK Kategori.
Gambar menunjukkan jarak proyektor ke layar 3 meter dan skala pembesaran 0,6 × jarak (m), jadi skalanya 0,6 × 3 = 1,8 kali. Desain 60 cm × 60 cm menjadi 108 cm × 108 cm (1,08 m × 1,08 m).
A. Benar: pembesaran proporsional (faktor yang sama untuk panjang dan lebar), jadi tampilan tetap persegi dengan perbandingan panjang : lebar = 1 : 1. (Pernyataan ini dibaca sebagai perbandingan sisi tampilan, bukan perbandingan dengan ukuran asli, yang 1,8 : 1.)
B. Benar: 1,08 m lebih dari 1 meter.
C. Salah: layar berukuran 2,4 m × 1,8 m, lebih besar daripada 1,08 m × 1,08 m pada kedua arah, jadi tidak ada bagian desain yang terpotong.
Jawaban: A. Benar; B. Benar; C. Salah`,
        status: 'draft',
      },
    ],
  },

  // ── 4. Trigonometri ────────────────────────────────────────────────────
  {
    soal: [
      {
        nomor: 13,
        tipe: 'pg',
        tingkat: 'sedang',
        pertanyaan: `Diketahui \\(\\sin A = \\frac{1}{a}\\), \\(A\\) adalah sudut tumpul. Nilai \\(\\cos A\\) = ...`,
        opsi: [
          { label: 'A', teks: `\\(\\frac{a}{\\sqrt{a^2 + 1}}\\)` },
          { label: 'B', teks: `\\(\\frac{1}{\\sqrt{a^2 + 1}}\\)` },
          { label: 'C', teks: `\\(\\frac{\\sqrt{a^2 - 1}}{a}\\)` },
          { label: 'D', teks: `\\(-\\frac{\\sqrt{a^2 - 1}}{a}\\)` },
          { label: 'E', teks: `\\(-\\frac{\\sqrt{a^2 + 1}}{a}\\)` },
        ],
        kunci: 'D',
        pembahasan: `Materi: Trigonometri · Perbandingan Trigonometri Sudut Tumpul.
\\(\\sin A = \\frac{1}{a}\\) berarti sisi depan = 1 dan sisi miring = \\(a\\), sehingga sisi samping = \\(\\sqrt{a^2 - 1}\\) (Pythagoras). Besar kosinusnya \\(\\frac{\\sqrt{a^2 - 1}}{a}\\).
Sudut tumpul (antara 90° dan 180°) berada di kuadran II, tempat nilai kosinus negatif. Jadi \\(\\cos A = -\\frac{\\sqrt{a^2 - 1}}{a}\\).
Cek dengan identitas: \\(\\cos A = -\\sqrt{1 - \\sin^2 A} = -\\sqrt{1 - \\frac{1}{a^2}} = -\\frac{\\sqrt{a^2 - 1}}{a}\\).
Jawaban: D`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      {
        nomor: 14,
        tipe: 'pg',
        tingkat: 'sedang',
        pertanyaan: `Suatu tangga dengan panjang 6 meter disandarkan pada dinding vertikal. Sudut yang dibentuk tangga dengan lantai adalah \\(60^\\circ\\).
⟦gambar:gambar/cerebrum/tka-mat-14-tangga.png⟧
Tinggi dinding yang disentuh ujung atas tangga adalah…`,
        opsi: [
          { label: 'A', teks: `3 meter` },
          { label: 'B', teks: `\\(3\\sqrt{2}\\) meter` },
          { label: 'C', teks: `\\(3\\sqrt{3}\\) meter` },
          { label: 'D', teks: `\\(4\\sqrt{2}\\) meter` },
          { label: 'E', teks: `\\(4\\sqrt{3}\\) meter` },
        ],
        kunci: 'C',
        pembahasan: `Materi: Trigonometri · Aplikasi Perbandingan Trigonometri.
Tangga adalah sisi miring (6 m) dan membentuk sudut \\(60^\\circ\\) dengan lantai. Tinggi yang dicapai ujung atas tangga adalah sisi depan sudut itu:
\\(\\text{tinggi} = 6 \\sin 60^\\circ = 6 \\times \\frac{1}{2}\\sqrt{3} = 3\\sqrt{3}\\) meter (sekitar 5,2 m).
Jawaban: C`,
        status: 'draft',
      },
    ],
  },

  // ── 5. Statistika dan Peluang ──────────────────────────────────────────
  {
    soal: [
      {
        nomor: 15,
        tipe: 'pg',
        tingkat: 'sedang',
        pertanyaan: `Diagram batang berikut menunjukkan produksi pakaian yang dikelola Bu Rahmi selama tahun 2020 dari bulan Januari sampai bulan Desember.
⟦gambar:gambar/cerebrum/tka-mat-15-diagram-batang.png⟧
Peningkatan tertinggi jumlah produksi pakaian Bu Rahmi terjadi pada bulan…`,
        opsi: [
          { label: 'A', teks: `April` },
          { label: 'B', teks: `Juni` },
          { label: 'C', teks: `Juli` },
          { label: 'D', teks: `September` },
          { label: 'E', teks: `November` },
        ],
        kunci: 'E',
        pembahasan: `Materi: Statistika dan Peluang · Penyajian dan Interpretasi Data.
Produksi tiap bulan menurut diagram: Jan 122, Feb 136, Mar 112, Apr 151, Mei 18, Jun 81, Jul 133, Agt 150, Sept 166, Okt 87, Nov 153, Des 131.
Perubahan dari bulan sebelumnya: Feb +14, Mar −24, Apr +39, Mei −133, Jun +63, Jul +52, Agt +17, Sept +16, Okt −79, Nov +66, Des −22.
Peningkatan terbesar adalah +66 pada bulan November (153 − 87), mengalahkan Juni (+63). Yang ditanyakan adalah kenaikan dibanding bulan sebelumnya, bukan produksi tertinggi (September, 166).
Jawaban: E`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      {
        nomor: 16,
        tipe: 'pg',
        tingkat: 'sedang',
        pertanyaan: `Perhatikan data pada tabel nilai hasil ulangan matematika kelas XI SMA Z. Modus dari data tersebut adalah…
⟦gambar:gambar/cerebrum/tka-mat-16-tabel-data.png⟧`,
        opsi: [
          { label: 'A', teks: `64,0` },
          { label: 'B', teks: `64,5` },
          { label: 'C', teks: `65,0` },
          { label: 'D', teks: `65,5` },
          { label: 'E', teks: `66,0` },
        ],
        kunci: 'C',
        pembahasan: `Materi: Statistika dan Peluang · Modus Data Kelompok.
Data pada tabel (nilai: frekuensi): 58–60: 2; 61–63: 6; 64–66: 9; 67–69: 6; 70–72: 4; 73–75: 3.
Frekuensi terbesar (9) ada di kelas 64–66, jadi itu kelas modus. Tepi bawah \\(L = 64 - 0,5 = 63,5\\); panjang kelas \\(p = 3\\); selisih frekuensi dengan kelas sebelumnya \\(d_1 = 9 - 6 = 3\\) dan dengan kelas sesudahnya \\(d_2 = 9 - 6 = 3\\).
\\(Mo = L + \\frac{d_1}{d_1 + d_2} \\cdot p = 63,5 + \\frac{3}{3 + 3} \\cdot 3 = 63,5 + 1,5 = 65,0\\).
Jawaban: C`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      {
        nomor: 17,
        tipe: 'pg',
        tingkat: 'sedang',
        pertanyaan: `Sekolah P akan mengirim 2 perwakilan grup band untuk Pentas Musik Nusantara pada peringatan Hari Sumpah Pemuda. Sekolah tersebut memiliki 6 grup band putra dan 4 grup band putri. Berdasarkan penilaian, kemampuan grup band tersebut merata sehingga penentuan kedua perwakilan grup band dilakukan dengan cara mengambil secara acak satu persatu. Peluang terambil grup band putra pada pengambilan pertama dan grup band putri pada pengambilan kedua adalah ....`,
        opsi: [
          { label: 'A', teks: `\\(\\frac{1}{5}\\)` },
          { label: 'B', teks: `\\(\\frac{6}{25}\\)` },
          { label: 'C', teks: `\\(\\frac{4}{15}\\)` },
          { label: 'D', teks: `\\(\\frac{2}{5}\\)` },
          { label: 'E', teks: `\\(\\frac{13}{25}\\)` },
        ],
        kunci: 'C',
        pembahasan: `Materi: Statistika dan Peluang · Peluang Kejadian Majemuk.
Jumlah grup band = 6 + 4 = 10. Dua perwakilan berbeda diambil satu per satu (tanpa pengembalian).
Pengambilan pertama putra: \\(\\frac{6}{10}\\). Setelah itu tersisa 9 grup (5 putra, 4 putri), jadi peluang putri di pengambilan kedua \\(\\frac{4}{9}\\).
\\(P = \\frac{6}{10} \\times \\frac{4}{9} = \\frac{24}{90} = \\frac{4}{15}\\).
Jawaban: C`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      {
        nomor: 18,
        tipe: 'pg_kompleks',
        tingkat: 'sulit',
        pertanyaan: `Rata-rata nilai ulangan 17 murid dari skala 100 adalah 83. Ada 3 murid yang mengikuti ujian susulan sehingga rata-rata nilai ulangan dari 20 murid menjadi 82.

Tentukan semua pernyataan berikut yang benar terkait dengan nilai ketiga murid yang mengikuti ujian susulan! Jawaban benar lebih dari satu.`,
        opsi: [
          { label: 'A', teks: `Jumlah nilai ketiga murid yang mengikuti ujian susulan adalah 229.` },
          { label: 'B', teks: `Rata-rata nilai ketiga murid yang mengikuti ujian susulan lebih dari 70.` },
          { label: 'C', teks: `Nilai terendah dari ketiga murid yang mengikuti ujian susulan tidak kurang dari 29.` },
          { label: 'D', teks: `Nilai tertinggi dari ketiga murid yang mengikuti ujian susulan lebih dari 76.` },
          { label: 'E', teks: `Jangkauan data nilai ketiga murid yang mengikuti ujian susulan lebih dari dari 72.` },
        ],
        kunci: 'A, B, C, D',
        pembahasan: `Materi: Statistika dan Peluang · Rata-rata dan Penyebaran Data. Tipe: PGK MCMA.
Jumlah nilai 17 murid = 17 × 83 = 1.411. Jumlah nilai 20 murid = 20 × 82 = 1.640. Jumlah nilai 3 murid susulan = 1.640 − 1.411 = 229.
A. Benar: jumlahnya 229.
B. Benar: rata-ratanya 229 ÷ 3 ≈ 76,3, lebih dari 70.
C. Benar: nilai maksimum pada skala 100. Bila dua murid mendapat 100, murid ketiga mendapat 229 − 200 = 29, jadi nilai terendah tidak mungkin kurang dari 29.
D. Benar: nilai tertinggi paling sedikit sama dengan rata-rata (≈ 76,3), jadi pasti lebih dari 76.
E. Tidak pasti benar: jangkauan bisa sangat kecil, mis. nilai 76, 76, dan 77 berjumlah 229 dengan jangkauan 1. Pernyataan ini tidak berlaku untuk semua kemungkinan nilai.
Jawaban: A, B, C, D`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      {
        nomor: 19,
        tipe: 'pg',
        tingkat: 'sedang',
        pertanyaan: `Luki adalah panitia bazar di sekolahnya. Dia mendapat tugas dari ketua pelaksana untuk membuat kupon. Dia ingin di setiap kupon memiliki kode akses yang unik. Kode akses kupon bazar itu memiliki lima karakter dengan format sebagai berikut:
⟦gambar:gambar/cerebrum/tka-mat-19-format-kode.png⟧
dengan A, B, dan C menyatakan huruf, serta X dan Y menyatakan angka. Tidak boleh ada angka dan huruf yang diulang. Berapakah berapa banyak kode akses berbeda yang dapat dibuat?`,
        opsi: [
          { label: 'A', teks: `1.263.600` },
          { label: 'B', teks: `1.352.000` },
          { label: 'C', teks: `1.404.000` },
          { label: 'D', teks: `1.423.656` },
          { label: 'E', teks: `1.757.600` },
        ],
        kunci: 'C',
        pembahasan: `Materi: Statistika dan Peluang · Aturan Pencacahan.
Format A X B Y C: tiga posisi huruf (A, B, C) dan dua posisi angka (X, Y), tanpa huruf atau angka yang diulang.
Huruf: 26 × 25 × 24 = 15.600 cara. Angka: 10 × 9 = 90 cara.
Banyak kode = 15.600 × 90 = 1.404.000.
Pengecoh E (1.757.600 = 26³ × 10²) muncul bila huruf dan angka boleh berulang.
Jawaban: C`,
        status: 'draft',
      },
    ],
  },

  // ── 6. Bilangan ────────────────────────────────────────────────────────
  {
    soal: [
      {
        nomor: 20,
        tipe: 'pg',
        tingkat: 'sedang',
        pertanyaan: `\\(\\frac{1}{4} + \\frac{7}{4} \\times \\frac{8}{21} = \\ldots\\)`,
        opsi: [
          { label: 'A', teks: `\\(\\frac{8}{21}\\)` },
          { label: 'B', teks: `\\(\\frac{8}{11}\\)` },
          { label: 'C', teks: `\\(\\frac{11}{12}\\)` },
          { label: 'D', teks: `\\(\\frac{16}{21}\\)` },
          { label: 'E', teks: `\\(2\\frac{8}{21}\\)` },
        ],
        kunci: 'C',
        pembahasan: `Materi: Bilangan · Operasi Campuran Bilangan Rasional.
Perkalian dikerjakan lebih dulu: \\(\\frac{7}{4} \\times \\frac{8}{21} = \\frac{56}{84} = \\frac{2}{3}\\).
Lalu \\(\\frac{1}{4} + \\frac{2}{3} = \\frac{3}{12} + \\frac{8}{12} = \\frac{11}{12}\\).
Pengecoh D (\\(\\frac{16}{21}\\)) muncul bila penjumlahan dikerjakan lebih dulu: \\(\\left(\\frac{1}{4} + \\frac{7}{4}\\right) \\times \\frac{8}{21} = 2 \\times \\frac{8}{21}\\).
Jawaban: C`,
        status: 'draft',
      },
    ],
  },
];
