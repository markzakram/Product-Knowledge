import type { Kelompok } from '@/lib/skema';

/**
 * Contoh soal rekrutmen LPS 2025, dari paket tryout Markaz Tahap 1 sampai 3.
 *
 * Paket sumber: "1 Tryout Tes Potensi" (ID 4629), "1 Tryout Psikotes" (ID 4649), "1 Tryout Tes Bahasa Inggris" (ID 4789).
 *
 * Dihasilkan oleh skrip/ke-data.mjs, lalu boleh disunting tangan.
 * Status sengaja 'direview', bukan 'final': isinya berasal dari bank soal
 * produksi dan belum diperiksa ulang untuk keperluan etalase.
 */
/** 5 soal dari lesson "Hubungan Kata". */
export const contohHubunganKata: Kelompok[] = [
  {
    soal: [
    {
      nomor: 1,
      tipe: 'pg',
      pertanyaan: `Murid : Buku : Perpustakaan = ______ : ______ : ______`,
      opsi: [
        { label: 'A', teks: `Anak : Kelereng : Rumah` },
        { label: 'B', teks: `Nasabah : Uang : Bank` },
        { label: 'C', teks: `Orang tua : Anak : Ibu` },
        { label: 'D', teks: `Pembeli : Makanan : Gudang` },
        { label: 'E', teks: `Dosen : Mahasiswa : Kuliah` },
      ],
      kunci: 'B',
      pembahasan: `Pembahasan:
Murid membaca buku di perpustakaan, sedangkan nasabah menabung uang di bank.
Jawaban: B`,
      status: 'direview',
    },
    {
      nomor: 2,
      tipe: 'pg',
      pertanyaan: `Karbondioksida : paru-paru = … : kulit`,
      opsi: [
        { label: 'A', teks: `Rambut` },
        { label: 'B', teks: `Darah` },
        { label: 'C', teks: `Halus` },
        { label: 'D', teks: `Tebal` },
        { label: 'E', teks: `Keringat` },
      ],
      kunci: 'E',
      pembahasan: `Jawaban: E
Pembahasan:
Karbondioksida dikeluarkan dari paru-paru
Maka keringat dikeluarkan dari kulit`,
      status: 'direview',
    },
    {
      nomor: 3,
      tipe: 'pg',
      pertanyaan: `Lokomotif : Kereta Api = … : …`,
      opsi: [
        { label: 'A', teks: `Pasar : Niaga` },
        { label: 'B', teks: `Tentara : Pasukan` },
        { label: 'C', teks: `Dokar : Kusir` },
        { label: 'D', teks: `Intensitas : Frekuensi` },
        { label: 'E', teks: `Kuda : Andong` },
      ],
      kunci: 'E',
      pembahasan: `Jawaban : E
Lokomotif menarik kereta api sebagaimana kuda menarik andong`,
      status: 'direview',
    },
    {
      nomor: 4,
      tipe: 'pg',
      pertanyaan: `TINGGI : DALAM = AWAN : …`,
      opsi: [
        { label: 'A', teks: `Matahari` },
        { label: 'B', teks: `Pohon` },
        { label: 'C', teks: `Tiang listrik` },
        { label: 'D', teks: `Minyak tanah` },
        { label: 'E', teks: `Batu-batuan` },
      ],
      kunci: 'E',
      pembahasan: `Jawaban: E
Pembahasan:
Tinggi – rendah, luar – dalam
Jadi cari yang berada tinggi : berada di dalam
Awan sudah tinggi berada diatas, maka yang berada didalam adalah batu-batuan (Jawaban E)`,
      status: 'direview',
    },
    {
      nomor: 5,
      tipe: 'pg',
      pertanyaan: `Hujan : Kekeringan = ______ : ______`,
      opsi: [
        { label: 'A', teks: `Api : Kebakaran` },
        { label: 'B', teks: `Penuh : Sesak` },
        { label: 'C', teks: `Panas : Api` },
        { label: 'D', teks: `Lampu : Gelap` },
        { label: 'E', teks: `Angin : Dingin` },
      ],
      kunci: 'D',
      pembahasan: `Pembahasan:
Akibat tidak ada hujan adalah kekeringan, sedangkan akibat tidak ada lampu adalah gelap.
Jawaban: D`,
      status: 'direview',
    },
    ],
  },
];

/** 5 soal dari lesson "Angka". */
export const contohAngka: Kelompok[] = [
  {
    soal: [
    {
      nomor: 1,
      tipe: 'pg',
      pertanyaan: `Jika 45% dari suatu bilangan adalah 135, maka bilangan tersebut adalah . . .`,
      opsi: [
        { label: 'A', teks: `280` },
        { label: 'B', teks: `290` },
        { label: 'C', teks: `300` },
        { label: 'D', teks: `310` },
        { label: 'E', teks: `320` },
      ],
      kunci: 'C',
      pembahasan: `Jawaban: C
Pembahasan:
45% = 135 → 1% = 135 ÷ 45 = 3
100% = 100 × 3 = 300
Jawaban yang benar adalah C. 300`,
      status: 'direview',
    },
    {
      nomor: 2,
      tipe: 'pg',
      pertanyaan: `Diketahui:
P | Q
16 + 31−4 × 7 | 6 + 11 + (−7) × (−3)
Manakah hubungan yang benar antara kuantitas P dan Q berikut berdasarkan informasi yang diberikan?`,
      opsi: [
        { label: 'A', teks: `P > 3Q` },
        { label: 'B', teks: `3P < ¹⁄₂Q` },
        { label: 'C', teks: `4P < ³⁄₂Q` },
        { label: 'D', teks: `P < 2Q` },
        { label: 'E', teks: `Hubungan P dan Q tidak dapat ditentukan` },
      ],
      kunci: 'D',
      pembahasan: `Jawaban: D. P < 2Q
Pembahasan:
Menentukan nilai P
P | = | 16 + 31−4 × 7
| = | 16 + 31−28
| = | 19
Menentukan nilai Q
Q | = | 6 + 11 + (−7) × (−3)
| = | 6 + 11 + 21
| = | 38
Menentukan perbandingan nilai P dan Q
P:Q | = | 19:38
| = | ¹⁹⁄₁₉:³⁸⁄₁₉
| = | 1:2
Gunakan nilai perbandingan tersebut untuk menentukan hubungan yang benar antara kuantitas P dan Q, maka didapatkan yang benar adalah P < 2Q.`,
      status: 'direview',
    },
    {
      nomor: 3,
      tipe: 'pg',
      pertanyaan: `1, 2, 4, 8, 16, …`,
      opsi: [
        { label: 'A', teks: `30` },
        { label: 'B', teks: `32` },
        { label: 'C', teks: `34` },
        { label: 'D', teks: `36` },
        { label: 'E', teks: `38` },
      ],
      kunci: 'B',
      pembahasan: `Jawaban: B
Pembahasan:
1, 2, 4, 8, 16, …
Beda suku ke-1 dan suku ke-2 adalah 1.
Beda suku ke-2 dan suku ke-3 diperoleh dari beda sebelumnya dikalikan 2 yaitu 1 x 2 = 2. Jadi suku ke-3 adalah 4.
Beda suku ke-3 dan suku ke-4 diperoleh dari beda sebelumnya dikalikan 2 yaitu 2 x 2 = 4. Jadi suku ke-4 adalah 8.
Beda suku ke-4 dan suku ke-5 diperoleh dari beda sebelumnya dikalikan 2 yaitu 4 x 2 = 8. Jadi suku ke-5 adalah 16.
Beda suku ke-5 dan suku ke-6 diperoleh dari beda sebelumnya dikalikan 2 yaitu 8 x 2 = 16. Jadi suku ke-6 adalah 32.
Dengan demikian, suku selanjutnya = 32`,
      status: 'direview',
    },
    {
      nomor: 4,
      tipe: 'pg',
      pertanyaan: `Jika 3 pekerja dapat menyelesaikan suatu pekerjaan dalam 18 hari, maka 6 pekerja akan menyelesaikan pekerjaan yang sama dalam waktu . . .`,
      opsi: [
        { label: 'A', teks: `6 hari` },
        { label: 'B', teks: `8 hari` },
        { label: 'C', teks: `9 hari` },
        { label: 'D', teks: `10 hari` },
        { label: 'E', teks: `12 hari` },
      ],
      kunci: 'C',
      pembahasan: `Jawaban: C
Pembahasan:
Total kerja = 3 × 18 = 54 orang-hari
6 pekerja → 54 ÷ 6 = 9 hari`,
      status: 'direview',
    },
    {
      nomor: 5,
      tipe: 'pg',
      pertanyaan: `Sekodi kaos dibeli oleh Pak Rudi dari grosir dengan Rp980.000,00. la akan menjual setiap kaos tersebut dengan keuntungan sebesar 18 %. Namun ia ingin memberikan diskon sebesar 30% untuk menarik pembeli, dengan tetap mendapat keuntungan yang sama. Maka harga yang harus ia pasang adalah ....`,
      opsi: [
        { label: 'A', teks: `Rp96.400,00` },
        { label: 'B', teks: `Rp 90.500,00` },
        { label: 'C', teks: `Rp87.200,00` },
        { label: 'D', teks: `Rp82.600,00` },
        { label: 'E', teks: `Rp75.800,00` },
      ],
      kunci: 'D',
      pembahasan: `Jawaban :D
Pembahasan :
Harga sekodi kaos: 980.000
Harga satuan kaos: 980.000: 20=49.000
Persentase keuntungan: 18 %
Persentase diskon:30 %
Harga yang harus dipasang:(100% + 18%)/100% × 100%/(100%−30%) × 49.000
Harga yang harus dipasang:118%/100% × 100%/70% × 49.000
Harga yang harus dipasang:¹¹⁸⁄₇₀ × 49.000
Harga yang harus dipasang
⟦gambar:gambar/jadiojk/a98c1b0bbd327897ded3e1a13556bb88-07d3c0dc.webp⟧
Maka yang harus dipasang adalah 82.600`,
      status: 'direview',
    },
    ],
  },
];

/** 5 soal dari lesson "Gabungan Bagian". */
export const contohGabunganBagian: Kelompok[] = [
  {
    soal: [
    {
      nomor: 1,
      tipe: 'pg',
      pertanyaan: `Semua kursi terbuat dari kayu jati.
Semua kayu jati bersifat tahan lama.
Sebagian kayu jati berwarna hitam
Kesimpulan yang benar adalah …`,
      opsi: [
        { label: 'A', teks: `Semua kursi bersifat tahan lama.` },
        { label: 'B', teks: `Semua kursi berwarna hitam.` },
        { label: 'C', teks: `Sebagian kursi berwarna hitam.` },
        { label: 'D', teks: `Sebagian kursi tahan lama berwarna hitam.` },
        { label: 'E', teks: `Tidak dapat disimpulkan` },
      ],
      kunci: 'D',
      pembahasan: `Jawaban:
D. Sebagian kursi tahan lama berwarna hitam.
Pembahasan:
Berdasarkan premis bahwa semua kursi terbuat dari kayu dan semua kayu jati bersifat tahan lama, maka dapat disimpulkan semua kursi bersifat tahan lama. Kemudian sebagian kayu jati berwarna hitam. Maka kesimpulannya adalah dapat kita tuliskan semua menjadi, sebagian kursi tahan lama berwarna hitam.`,
      status: 'direview',
    },
    {
      nomor: 2,
      tipe: 'pg',
      pertanyaan: `Peralatan elektronik di rumah Kirana sering rusak sehingga menghambat pekerjaannya. Ketika penggunaan listrik di rumah terus digunakan secara berlebih, maka tegangan listrik sering berfluktuasi. Keadaan dimana tegangan listrik sering naik dan turun, mengakibatkan terjadinya korsleting yang merusak banyak peralatan elektronik.
Kesimpulan yang sesuai berdasarkan pernyataan- pernyataan di atas adalah....`,
      opsi: [
        { label: 'A', teks: `Apabila pekerjaan Kirana tidak terhambat, maka penggunaan listrik tidak digunakan secara berlebih` },
        { label: 'B', teks: `Apabila pekerjaan Kirana terhambat, maka penggunaan listrik digunakan secara berlebih` },
        { label: 'C', teks: `Apabila penggunaan listrik tidak digunakan secara berlebih, maka pekerjaan Kirana tidak terhambat` },
        { label: 'D', teks: `Kirana harus menaikkan daya listrik di rumahnya` },
        { label: 'E', teks: `Kirana harus memperbaiki cara penggunaan listrik di rumahnya` },
      ],
      kunci: 'A',
      pembahasan: `Jawaban: A. Apabila pekerjaan Kirana tidak terhambat, maka penggunaan listrik tidak digunakan secara berlebih
Pembahasan
Pemisalan:
p: peralatan elektronik rusak
q: pekerjaan terhambat
r: listrik terus digunakan secara berlebih
s: tegangan listrik sering berfluktuasi
Diketahui:
Premis 1: Jika peralatan elektronik di rumah Kirana rusak, maka pekerjaan terhambat (p→q)
Premis 2: Jika listrik terus digunakan secara berlebih, maka tegangan listrik sering berfluktuasi (r→s)
Premis 3: Jika tegangan listrik sering naik dan turun (berfluktuasi), maka peralatan elektronik rusak (s→p)
Penarikan kesimpulan dari premis 2, 3 dan 1:
Premis 2 : r→s
Premis 3 : s→p
Premis 1 : p→q
Kesimpulan : r→q
Dimana r→q ekuivalen dengan ~q→~r.
Jadi simpulan yang sesuai adalah apabila pekerjaan Kirana tidak terhambat (~q), maka penggunaan listrik tidak digunakan secara berlebih (~r).`,
      status: 'direview',
    },
    {
      nomor: 3,
      tipe: 'pg',
      pertanyaan: `P1 = Semua mobil cepat dipamerkan dalam showroom.
P2 = Semua mobil cepat di showroom tersebut tidak berwarna ungu.
P3 = Dani membeli mobil cepat berwarna ungu.
Kesimpulan dari ketiga premis tersebut adalah …`,
      opsi: [
        { label: 'A', teks: `Dani tidak membeli mobil di showroom lain.` },
        { label: 'B', teks: `Dani membeli mobil yang tidak ada di showroom tersebut.` },
        { label: 'C', teks: `Dani membeli mobil yang tidak cepat di showroom tersebut.` },
        { label: 'D', teks: `Dani membeli mobil berwarna ungu di showroom tersebut.` },
        { label: 'E', teks: `Dani membeli mobil cepat dan berwarna ungu di showroom tersebut.` },
      ],
      kunci: 'B',
      pembahasan: `Jawaban: B. Dani membeli mobil yang tidak ada di showroom tersebut.
Pembahasan:
Opsi A salah, tidak ada bahasan tentang showroom lain.
Opsi B benar, mobil cepat berwarna ungu tidak ada di showroom tersebut.
Opsi C salah, mobil di showroom pasti cepat.
Opsi D salah, tidak ada mobil berwarna ungu di showroom tersebut.
Opsi E salah, tidak ada mobil cepat dan berwarna ungu di showroom tersebut.`,
      status: 'direview',
    },
    {
      nomor: 4,
      tipe: 'pg',
      pertanyaan: `Cermati data artikel jurnal berikut:
Judul artikel: Pengaruh Media Sosial terhadap Perilaku Remaja
Penulis: Sinta Andini.
Nama jurnal: Jurnal Komunikasi Massa
Volume: 5
Nomor: 2
Tahun: 2022
Halaman: 112-125
Manakah penulisan daftar pustaka yang paling tepat berdasarkan data di atas?`,
      opsi: [
        { label: 'A', teks: `Andini, S. (2022). Pengaruh Media Sosial terhadap Perilaku Remaja. Jurnal Komunikasi Massa, 5(2): 112-125.` },
        { label: 'B', teks: `Andini, S. (2022). Jurnal Komunikasi Massa, 5(2): 112-125. Pengaruh Media Sosial terhadap Perilaku Remaja.` },
        { label: 'C', teks: `Andini, S. Pengaruh Media Sosial terhadap Perilaku Remaja. Jurnal Komunikasi Massa. (2022). 5(2): 112-125.` },
        { label: 'D', teks: `Andini, S. 2022. 112-125. Jurnal Komunikasi Massa. 5(2). Pengaruh Media Sosial terhadap Perilaku Remaja.` },
        { label: 'E', teks: `Andini, S. Jurnal Komunikasi Massa. 2022. 5(2): 112-125. Pengaruh Media Sosial terhadap Perilaku Remaja.` },
      ],
      kunci: 'A',
      pembahasan: `Jawaban: A
Pembahasan: Ingat! Format penulisan daftar pustaka yang sering digunakan: Nama penulis (dibalik, diikuti inisial nama depan dan tengah). Tahun penerbitan (dalam kurung). Judul artikel. Nama jurnal (dicetak miring). Volume (nomor terbitan), jika ada. Halaman artikel.`,
      status: 'direview',
    },
    {
      nomor: 5,
      tipe: 'pg',
      pertanyaan: `Sebuah lagu yang diciptakan dengan jujur pasti sampai di hati pendengarnya.
Ketika sebuah lagu sampai di hati pendengarnya, lagu tersebut akan laku di pasaran.
Lagu yang diciptakan Nadia tidak menyentuh hati pendengarnya.
Kesimpulan yang tepat berdasarkan tiga pernyataan di atas adalah....`,
      opsi: [
        { label: 'A', teks: `Lagu Nadia tidak laku di pasaran.` },
        { label: 'B', teks: `Lagu Nadia diciptakan dengan kejujuran.` },
        { label: 'C', teks: `Lagu Nadia tidak tecipta dari keresahannya yang orisinal.` },
        { label: 'D', teks: `Nadia bukanlah pencipta lagu yang berhasil.` },
        { label: 'E', teks: `Lagu yang diciptakan Nadia tidak memiliki kualitas musik yang baik.` },
      ],
      kunci: 'C',
      pembahasan: `Jawaban: C. Lagu Nadia tidak tecipta dari keresahannya yang orisinal.
Pembahasan:
Pemisalan:
p: sebuah lagu diciptakan dengan jujur
q: sampai di hati pendengar
r: lagu akan laku di pasaran
Diketahui pernyataan- pernyataan sebagai berikut:
1. Jika sebuah lagu diciptakan dengan jujur, maka sampai di hati pendengar (p→q).
2. Jika lagu sampai di hati pendengar, lagu akan laku di pasaran (q→r).
3. Lagu yang diciptakan Nadia tidak menyentuh hati pendengarnya (~q).
Penarikan kesimpulan dari pernyataan 1 dan 3:
Pernyataan 1: p → q
Pernyataan 3: ~q
Kesimpulan : ~p
Penarikan kesimpulan dari pernyataan 2 dan 3:
Pernyataan 2: q → r
Pernyataan 3: ~q
Kesimpulan : TIDAK ADA KESIMPULAN YANG VALID
Jadi, kesimpulan yang tepat adalah lagu Nadia tidak tecipta dari keresahannya yang orisinal (tidak diciptakan dengan jujur ≅ ~p).`,
      status: 'direview',
    },
    ],
  },
];

/** 5 soal dari lesson "Abstrak". */
export const contohAbstrak: Kelompok[] = [
  {
    soal: [
    {
      nomor: 1,
      tipe: 'pg',
      pertanyaan: `Tentukanlah gambar yang tepat untuk menggantikan tanda tanya "?", sehingga kedua pasangan gambar di bawah ini memiliki hubungan yang serupa.
⟦gambar:gambar/jadiojk/b21bffd6661d3ff3f925fab832f689e7-a0d29036.png⟧
⟦gambar:gambar/jadiojk/43d3dc1f259ecbaab7d0bd2cfa91a90f-7d8a8257.png⟧`,
      kunci: 'E',
      pembahasan: `Jawaban: E.
Pembahasan:
Pada pasangan gambar yang sudah ada, berlaku hubungan sebagai berikut:
⟦gambar:gambar/jadiojk/c5b876f9f715e691bcf2e3dfea3e21b9-011967d5.png⟧
Dengan mengaplikasikan hubungan yang sama, maka didapatkan:
⟦gambar:gambar/jadiojk/d10be370d80612289919118f2a766074-2b0f6b5e.png⟧`,
      status: 'direview',
    },
    {
      nomor: 2,
      tipe: 'pg',
      pertanyaan: `Tentukanlah satu gambar di bawah ini yang memiliki perbedaan tertentu (berbeda pola) dengan empat gambar lainnya!
⟦gambar:gambar/jadiojk/1547e1cd6d1e1c3cb8fcf6424510f26c-ca32f1d7.png⟧`,
      kunci: 'E',
      pembahasan: `Jawaban: E.
⟦gambar:gambar/jadiojk/e3402e466f768e0e5afee213221826ba-894802d5.png⟧
Pembahasan:
Posisi setiap unsur pada gambar (A), (B), (C) dan (D) adalah sama, satu gambar adalah hasil perputaran dari gambar lainnya. Sedangkan, posisi unsur di gambar (E) berbeda dengan gambar lainnya.
Perhatikan posisi unsur berikut:
⟦gambar:gambar/jadiojk/2f26735c764f8a3ce01a787d49d19dc0-c4af264f.png⟧`,
      status: 'direview',
    },
    {
      nomor: 3,
      tipe: 'pg',
      pertanyaan: `⟦gambar:gambar/jadiojk/6c8a59c46f8809e03ae5317854f4bba7-37a523aa.webp⟧`,
      kunci: 'C',
      pembahasan: `Jawaban: C.
Pembahasan:
Terdapat pola pengurangan 2 buah kotak secara berurutan, sehingga jawaban yang tepat untuk pola selanjutnya adalah C.`,
      status: 'direview',
    },
    {
      nomor: 4,
      tipe: 'pg',
      pertanyaan: `Temukan pola selanjutnya!
⟦gambar:gambar/jadiojk/4c1695a17c3e52d7bd4098a47f83c395-f1190149.png⟧`,
      kunci: 'B',
      pembahasan: `Jawaban: B
Pembahasan:
⟦gambar:gambar/jadiojk/6791280a295d5fda1c05731097fc3128-161f295f.png⟧`,
      status: 'direview',
    },
    {
      nomor: 5,
      tipe: 'pg',
      pertanyaan: `Manakah gambar yang tidak memiliki kesamaan?
⟦gambar:gambar/jadiojk/6a8caababe95d142721865698a9f6b64-02462391.png⟧`,
      kunci: 'B',
      pembahasan: `Jawaban: B
Pembahasan:
Gambar B memiliki perbedaan dibandingkan gambar lainnya, karena kedua kotak yang ada pada gambar B memiliki jumlah titik yang sama-sama genap, sementara gambar lain memiliki kedua kotak dengan jumlah titik ganjil dan genap.`,
      status: 'direview',
    },
    ],
  },
];

/** 5 soal dari lesson "Psikotes 1". */
export const contohPsikotes1: Kelompok[] = [
  {
    soal: [
    {
      nomor: 1,
      tipe: 'skala',
      pertanyaan: `Saya lebih memilih fokus pada kinerja kerja saya daripada membiarkan kekhawatiran pribadi memengaruhi saya.`,
      opsi: [
        { label: 'A', teks: `Sangat Setuju` },
        { label: 'B', teks: `Setuju` },
        { label: 'C', teks: `Netral` },
        { label: 'D', teks: `Tidak Setuju` },
        { label: 'E', teks: `Sangat Tidak Setuju` },
      ],
      kunci: 'A',
      pembahasan: `Jawaban yang paling tepat adalah sangat setuju. Jawaban ini akan mendapatkan poin paling tinggi yaitu 5 poin karena menunjukkan kita memiliki komitmen terhadap profesionalisme dan kemampuan untuk memisahkan masalah pribadi dari tanggung jawab kerja, memastikan bahwa kinerja kerja tetap pada tingkat yang tinggi.
Sementara, pilihan-pilihan yang lainnya akan mendapatkan nilai 4 poin (setuju), 3 poin (netral), 2 poin (tidak setuju), dan 1 poin (sangat tidak setuju) karena semua pilihan ini menunjukkan bahwa kita kurang atau tidak memahami pentingnya untuk memisahkan kekhawatiran pribadi dari pekerjaan memungkinkan kita untuk tetap objektif, fokus, dan efektif dalam menjalankan tugas dan tanggung jawab profesional.`,
      status: 'direview',
    },
    {
      nomor: 2,
      tipe: 'skala',
      pertanyaan: `Saya biasanya merasa rileks saat berkomunikasi dengan rekan kerja, bahkan jika saya belum mengenal mereka dengan baik.`,
      opsi: [
        { label: 'A', teks: `Sangat Setuju` },
        { label: 'B', teks: `Setuju` },
        { label: 'C', teks: `Netral` },
        { label: 'D', teks: `Tidak Setuju` },
        { label: 'E', teks: `Sangat Tidak Setuju` },
      ],
      kunci: 'A',
      pembahasan: `Jawaban yang paling tepat adalah sangat setuju. Jawaban ini akan mendapatkan poin paling tinggi yaitu 5 poin karena menunjukkan kita memiliki keterampilan interpersonal yang kuat dan mampu membangun hubungan yang positif dengan berbagai orang, bahkan dalam situasi yang mungkin menantang.
Sementara, pilihan-pilihan yang lainnya akan mendapatkan nilai 4 poin (setuju), 3 poin (netral), 2 poin (tidak setuju), dan 1 poin (sangat tidak setuju) karena semua pilihan ini menunjukkan bahwa kita kurang atau tidak memahami pentingnya kemampuan komunikasi, sikap yang terbuka, dan kemampuan untuk membaca situasi dengan baik.`,
      status: 'direview',
    },
    {
      nomor: 3,
      tipe: 'skala',
      pertanyaan: `Saya lebih suka mendengarkan orang lain daripada berbicara.`,
      opsi: [
        { label: 'A', teks: `Sangat Setuju` },
        { label: 'B', teks: `Setuju` },
        { label: 'C', teks: `Netral` },
        { label: 'D', teks: `Tidak Setuju` },
        { label: 'E', teks: `Sangat Tidak Setuju` },
      ],
      kunci: 'A',
      pembahasan: `Jawaban yang paling tepat adalah sangat setuju. Jawaban ini akan mendapatkan poin paling tinggi yaitu 5 poin karena menunjukkan kalau kita adalah pendengar yang baik, memanfaatkan kesempatan untuk belajar dari orang lain, dan menghindari konflik dengan memahami dengan baik apa yang disampaikan orang lain.
Sementara, pilihan-pilihan yang lainnya akan mendapatkan nilai 4 poin (setuju), 3 poin (netral), 2 poin (tidak setuju), dan 1 poin (sangat tidak setuju) karena semua pilihan ini menunjukkan bahwa kita belum atau tidak memahami sepenuhnya pentingnya mendengarkan orang lain dengan penuh perhatian yang dapat membantu membangun hubungan yang lebih baik dengan orang lain.`,
      status: 'direview',
    },
    {
      nomor: 4,
      tipe: 'skala',
      pertanyaan: `Kemampuan saya dalam berkomunikasi jauh lebih efektif dalam kelompok kecil daripada dalam kelompok besar.`,
      opsi: [
        { label: 'A', teks: `Sangat Setuju` },
        { label: 'B', teks: `Setuju` },
        { label: 'C', teks: `Netral` },
        { label: 'D', teks: `Tidak Setuju` },
        { label: 'E', teks: `Sangat Tidak Setuju` },
      ],
      kunci: 'E',
      pembahasan: `Jawaban yang paling tepat adalah sangat tidak setuju. Jawaban ini akan mendapatkan poin paling tinggi yaitu 5 poin karena hal ini menunjukkan bahwa kita merasa dapat menyampaikan pesan secara lebih luas dan efisien, atau karena kita menikmati dinamika dan energi yang hadir dalam situasi tersebut
Sementara, pilihan-pilihan yang lainnya akan mendapatkan nilai 4 poin (tidak setuju), 3 poin (netral), 2 poin (setuju), dan 1 poin (sangat setuju) karena menunjukkan bahwa kita kurang atau tidak memahami pentingnya kemampuan untuk mengelola interaksi skala besar dan kepercayaan diri dalam berbicara atau mempresentasikan ide-ide di depan banyak orang.`,
      status: 'direview',
    },
    {
      nomor: 5,
      tipe: 'skala',
      pertanyaan: `Saya memilih untuk tetap terhubung dengan urusan pekerjaan di rumah dengan aktif menerima pesan singkat dan panggilan telepon.`,
      opsi: [
        { label: 'A', teks: `Sangat Setuju` },
        { label: 'B', teks: `Setuju` },
        { label: 'C', teks: `Netral` },
        { label: 'D', teks: `Tidak Setuju` },
        { label: 'E', teks: `Sangat Tidak Setuju` },
      ],
      kunci: 'A',
      pembahasan: `Jawaban yang paling tepat adalah sangat setuju. Jawaban ini akan mendapatkan poin paling tinggi yaitu 5 poin karena menunjukkan kita memiliki tingkat keterlibatan dan komitmen yang tinggi terhadap pekerjaan.
Sementara, pilihan-pilihan yang lainnya akan mendapatkan nilai 4 poin (setuju), 3 poin (netral), 2 poin (tidak setuju), dan 1 poin (sangat tidak setuju) karena semua pilihan ini menunjukkan bahwa kita kurang atau tidak memahami pentingnya dedikasi terhadap tugas dan tanggung jawab pekerjaan, namun penting juga untuk menjaga keseimbangan antara kehidupan kerja dan kehidupan pribadi untuk mencegah kelelahan.`,
      status: 'direview',
    },
    ],
  },
];

/** 5 soal dari lesson "Psikotes 2". */
export const contohPsikotes2: Kelompok[] = [
  {
    soal: [
    {
      nomor: 1,
      tipe: 'skala',
      pertanyaan: `Ketika diberikan perintah oleh atasan yang menurut saya kurang berpengalaman dan kurang saya sukai, maka saya akan.....`,
      opsi: [
        { label: 'A', teks: `Tetap menjalankan perintah selama hal tersebut baik` },
        { label: 'B', teks: `Merasa tidak perlu menaatinya` },
        { label: 'C', teks: `Melakukan perintah dengan setengah hati` },
        { label: 'D', teks: `Membalasnya dengan tidak hadir di pertemuan selanjutnya` },
        { label: 'E', teks: `Mengajak rekan-rekan kerja untuk mengajukan petisi` },
      ],
      kunci: 'A',
      pembahasan: `Jawaban:
A: 5 poin
B: 3 poin
C: 4 poin
D: 1 poin
E: 2 poin
Pembahasan: Indikator dalam soal ini berkaitan dengan perilaku profesional di lingkungan kerja
• Opsi A 5 poin karena menunjukkan perilaku profesionalisme di lingkungan kerja dimana melaksanakan tugas menjadi kewajiban pekerja, meskipun dalam kegiatannya diperintah oleh atasan yang kurang disukai
• Opsi B 3 poin karena tidak menunjukkan perilaku profesionalisme di lingkungan kerja dan mencerminkan perilaku yang tidak menghargai atasan
• Opsi C 4 poin karena masih menunjukkan wujud perilaku profesionalisme dalam lingkungan kerja, meskipun dalam pelaksanaannya hanya dilakukan setengah hati dan kurang bersemangat
• Opsi D 1 poin karena tidak mencerminkan perilaku profesionalisme dan merupakan sikap yang menunjukkan pembangkangan dan tidak menghargai atasan
• Opsi E 2 poin karena menunjukkan ketidak profesionalan dalam bekerja, dimana dia mempengaruhi rekan kerja yang lain untuk ikut membenci dan melakukan penolakan terhadap atasan tersebut`,
      status: 'direview',
    },
    {
      nomor: 2,
      tipe: 'skala',
      pertanyaan: `Anda bekerja sebagai tenaga kesehatan di rumah sakit pemerintah. Suatu hari, ada seorang ibu yang anaknya sakit perut dan mual. Ibu tersebut menyela antrean dan membuat keributan karena merasa pelayanan di rumah sakit terlalu lama dan ingin anaknya segera mendapat perawatan dokter tanpa menghiraukan pasien lain. Bagaimana anda menyikapi hal ini?`,
      opsi: [
        { label: 'A', teks: `Mendengar komplain Ibu tersebut dan melayaninya supaya anaknya segera diperiksa oleh dokter` },
        { label: 'B', teks: `Memanggil security untuk menenangkan Ibu tersebut dan anaknya di luar rumah sakit karena membuat keributan` },
        { label: 'C', teks: `Menegur Ibu tersebut supaya antre seperti yang lain dan memberikan arahan bahwa pelayanan harus dilakukan sesuai prosedur` },
        { label: 'D', teks: `Membiarkan Ibu dan anaknya menjadi perhatian pasien lain supaya berhenti dengan sendirinya` },
        { label: 'E', teks: `Meminta teman anda yang juga tenaga kesehatan untuk membantu anda memberikan pengertian pada Ibu tersebut` },
      ],
      kunci: 'C',
      pembahasan: `Jawaban:
A: 2 poin
B: 3 poin
C: 5 poin
D: 1 poin
E: 4 poin
Pembahasan: Indikator dalam soal ini berkaitan dengan tanggung jawab.
• Opsi A 2 poin karena mendengar komplain itu penting tetapi pasien lain juga sama pentingnya dan harus memprioritaskan pasien yang benar-benar darurat.
• Opsi B 3 poin karena penanganan pasien pertama kali harus dilakukan oleh petugas yang bertanggungjawab kecuali jika keributan sudah tidak bisa dilerai dan harus memanggil security.
• Opsi C 5 poin karena sebagai petugas yang bertanggungjawab saat itu sudah sebaiknya memberikan pengertian dan menegur apabila wali pasien tidak tertib prosedur.
• Opsi D 1 poin karena membiarkan wali dan pasien menjadi tontonan publik saat terjadi keributan tidaklah layak dan melalaikan tugas.
• Opsi E 4 poin karena sesama rekan kerja harus bisa saling membantu selama tidak menganggu tugas lain yang sedang dikerjakan.`,
      status: 'direview',
    },
    {
      nomor: 3,
      tipe: 'skala',
      pertanyaan: `Saya bekerja dikantor yang rata - rata karyawannya sering kali pulang setelah atasan meninggalkan tempat padahal belum waktunya jam pulang kantor...`,
      opsi: [
        { label: 'A', teks: `Saya akan menegur mereka dengan baik dan memberi contoh datang pulang sebelum jam pula` },
        { label: 'B', teks: `Pulang duluan merupakan hak masing - masing` },
        { label: 'C', teks: `Bersikap seenaknya memang sudah budaya di lingkungan itu` },
        { label: 'D', teks: `Saya akan melaporkan kepada atasan langsung` },
        { label: 'E', teks: `Saya membiarkan kebiasaan mereka` },
      ],
      kunci: 'A',
      pembahasan: `Jawaban:
A: 5 poin
B: 2 poin
C: 3 poin
D: 4 poin
E: 1 poin
Pembahasan : Indikator dalam soal ini berkaitan dengan tanggungjawab dalam menyelesaikan tugas.
Opsi A 5 poin jika ada suatu perilaku yang kurang baik dari rekan kerja kita alangkah baiknya kita tegur sebagai bentuk kepedulian dan kita beri contoh yang baik.
Opsi B 2 poin karena sebagai bentuk kepedulian kita terhadap tempat kerja, sebaiknya kita memberikan teguran kepada mereka.
Opsi C 3 poin karena membiarkan budaya kerja yang buruk bagi lingkungan kerja akan memberikan dampak bagi tempat kerja dan pada akhirnya berdampak pada pola kerja anda.
Opsi D 4 poin karena apabila anda langsung melaporkannya kepada atasan, belum tentu atasan anda akan memberikan kompromi dan toleransi sehingga dapat mengorbankan karir rekan kerja anda dan keluarga Nya.
Opsi E 1 poin karena sebagai bentuk kepedulian kita terhadap tempat kerja, kita tidak boleh membiarkan budaya kerja yang kurang baik menjadi kebiasaan.`,
      status: 'direview',
    },
    {
      nomor: 4,
      tipe: 'skala',
      pertanyaan: `Saat rapat dan evaluasi bulanan, rekan Anda mendapat kritikan dan atasan menjadikannya sebagai contoh yang tidak baik. Sayangnya, rekan tersebut sedang tidak ada di tempat sehingga ia tidak tahu jika dirinya menjadi pusat perhatian selama rapat. Atasan meminta supaya saat hadir nanti, ia diminta datang menemuinya langsung. Apa yang akan Anda lakukan?`,
      opsi: [
        { label: 'A', teks: `Menyampaikan pada rekan saya tersebut bahwa atasan memintanya bertemu` },
        { label: 'B', teks: `Menyampaikan bahwa saat rapat, ia mendapat beberapa teguran dan diminta menghadap atasan langsung` },
        { label: 'C', teks: `Menyampaikan bahwa dirinya menjadi pusat perhatian saat dirinya tidak menghadiri rapat` },
        { label: 'D', teks: `Tidak mengatakan apa-apa karena khawatir hal tersebut menjadi beban baginya` },
        { label: 'E', teks: `Mengajaknya bicara santai dan menyinggung soal dirinya yang tidak hadir saat rapat` },
      ],
      kunci: 'B',
      pembahasan: `Jawaban:
A: 4 poin
B: 5 poin
C: 2 poin
D: 1 poin
E: 3 poin
Pembahasan: Indikator dalam soal ini berkaitan dengan menyampaikan pesan dengan cara yang baik dan bisa diterima.
• A 4 poin karena mau memberitahu rekan Anda, tapi hanya sekedar tentang dipanggil atasan. Harusnya disertakan penjelasan supaya rekan Anda tahu alasan pastinya.
• B 5 poin karena menyampaikan sesuai kondisi dan alasan apa adanya bahwa ia mendapat kritik sehingga harus menghadap atasan langsung.
• C 2 poin karena penyampaiannya kurang lengkap dan bisa saja rekan Anda punya pikiran lain mengapa dirinya jadi pusat perhatian.
• D 1 poin karena sekalipun ada rasa sungkan, tetap harus disampaikan pesannya setidaknya dengan cara yang menurut Anda benar.
• E 3 poin karena terkesan cara yang lebih ramah, tapi kurang detail penyampaian pesannya.`,
      status: 'direview',
    },
    {
      nomor: 5,
      tipe: 'skala',
      pertanyaan: `Laptop milik teman kuliah Anda sedang diservis, akibatnya ia tidak bisa membuat laporan tugas tepat waktu dan ia mengatakan akan mengerjakannya di warnet. Di sisi lain, Anda memiliki satu laptop lain yang tidak terpakai. Bagaimana sikap Anda?`,
      opsi: [
        { label: 'A', teks: `Jika teman saya ingin mengerjakan laporan tugas di warnet maka biarkan saja karena itu pilihannya` },
        { label: 'B', teks: `Menanyakan apakah teman saya butuh laptop atau tidak untuk mengerjakan laporan tugas` },
        { label: 'C', teks: `Memberitahunya bahwa ia bisa mengerjakan tugas menggunakan laptop saya yang lain agar lebih efisien` },
        { label: 'D', teks: `Mengatakan bahwa saya akan membantu mengerjakan laporan tugasnya` },
        { label: 'E', teks: `Mengatakan bahwa ia bisa meminjam laptop saya jika saya sudah selesai dengan laporan tugas` },
      ],
      kunci: 'C',
      pembahasan: `Jawaban:
A: 1 poin
B: 4 poin
C: 5 poin
D: 2 poin
E: 3 poin
Pembahasan: Indikator dalam soal ini berkaitan dengan mengoptimalkan sumber daya yang ada untuk penyelesaian tugas.
• A 1 poin karena bersikap apatis dan tidak mau memberikan bantuan padahal Anda mampu membantunya.
• B 4 poin karena boleh bertanya supaya tidak sungkan, tapi baiknya langsung pada intinya karena ia memang membutuhkan laptop.
• C 5 poin karena bersedia membantu teman dengan mengoptimalkan sumber daya laptop yang Anda punya demi tugas kuliah.
• D 2 poin karena membantu di sini tidak jelas bagaimana caranya dan apa yang akan dilakukan.
• E 3 poin karena mau membantu, tapi bisa saja langsung meminjamkan laptop lain agar pengerjaannya efektif dan efisien.`,
      status: 'direview',
    },
    ],
  },
];

/** 5 soal dari lesson "Structure and Written Expression". */
export const contohStructure: Kelompok[] = [
  {
    soal: [
    {
      nomor: 1,
      tipe: 'pg',
      pertanyaan: `Terry Sawchuk, often regarded _______ the greatest goalie in hockey, won four Stanley Cups and four Vezina Trophies over his 21-year career.`,
      opsi: [
        { label: 'A', teks: `for` },
        { label: 'B', teks: `of` },
        { label: 'C', teks: `as` },
        { label: 'D', teks: `by` },
      ],
      kunci: 'C',
      pembahasan: `Jawaban: C
Penjelasan:
Kalimat di atas menjelaskan Terry Sawchuk digambarkan sebagai sesuatu seperti tertulis di often regarded _______ the greatest goalie in hockey. Sehingga kata depan yang tepat adalah as.
• for tidak sesuai dengan konteks kalimat karena kata depan of menjelaskan sebuah alasan.
• of tidak sesuai karena dapat mengubah arti kalimat.
• as sesuai dengan konteks kalimat karena dapat menggambarkan subjek dalam kalimat.
• by tidak sesuai dengan konteks kalimat. By menunjukkan sebuah hal dijelaskan oleh orang lain.`,
      status: 'direview',
    },
    {
      nomor: 2,
      tipe: 'pg',
      pertanyaan: `At one and a half years old Killian did _____ his mother, entirely under his own steam.`,
      opsi: [
        { label: 'A', teks: `a five-hour hike with` },
        { label: 'B', teks: `the five-hours hike with` },
        { label: 'C', teks: `a five-hours hike by` },
        { label: 'D', teks: `the five-hours hike by` },
      ],
      kunci: 'A',
      pembahasan: `Jawaban: A. a five-hour hike with
Pembahasan:
A. a five-hour hike with
• "a five-hour hike" adalah frasa yang benar. "Five-hour" digunakan sebagai compound adjective dan tetap berbentuk tunggal.
• "with his mother" bermakna bahwa Killian melakukan pendakian bersama ibunya.
• Kalimat menjadi: "At one and a half years old Killian did a five-hour hike with his mother, entirely under his own steam."`,
      status: 'direview',
    },
    {
      nomor: 3,
      tipe: 'pg',
      pertanyaan: `Despite ........ the seminar, the students were unable to understand the complex topic.`,
      opsi: [
        { label: 'A', teks: `attending` },
        { label: 'B', teks: `attended` },
        { label: 'C', teks: `attend` },
        { label: 'D', teks: `have attended` },
      ],
      kunci: 'A',
      pembahasan: `Untuk melengkapi kalimat ini, kita perlu memilih bentuk yang tepat untuk digunakan dengan "despite," yang diikuti oleh gerund (bentuk -ing dari kata kerja) untuk menunjukkan bahwa sesuatu dilakukan meskipun ada kesulitan atau hasil yang tidak diinginkan.
Mari kita bahas masing-masing opsi:
Pilihan A (attending) benar karena "attending" adalah bentuk gerund dari kata kerja "attend" dan cocok untuk digunakan setelah "despite" untuk menunjukkan tindakan yang dilakukan meskipun ada hasil yang tidak diinginkan.
Pilihan B (attended) salah karena "attended" adalah bentuk past simple, yang tidak sesuai setelah "despite" yang memerlukan gerund.
Pilihan C (attend) salah karena "attend" adalah bentuk infinitif yang tidak sesuai setelah "despite."
Pilihan D (have attended) salah karena "have attended" adalah bentuk perfect tense yang juga tidak sesuai setelah "despite."`,
      status: 'direview',
    },
    {
      nomor: 4,
      tipe: 'pg',
      pertanyaan: `Since they had no opportunity to learn each other's languages, they developed a make-shift language called a pidgin _____ copied from the language of the landowner.`,
      opsi: [
        { label: 'A', teks: `which strings are words` },
        { label: 'B', teks: `whose words are strings of` },
        { label: 'C', teks: `are strings of that words` },
        { label: 'D', teks: `that are strings of words` },
      ],
      kunci: 'D',
      pembahasan: `Jawaban: D. that are strings of words
Pembahasan:
Opsi D [BENAR] karena merupakan bentuk Adjective Clause yang sesuai untuk menjelaskan noun ‘pidgin’, conjunction + verb + complement (that are strings of words).
Opsi A [SALAH] karena merupakan adjective clause yang tidak sesuai untuk menjelaskan noun ‘pidgin’.
Opsi B [SALAH] karena menggunakan conjunction whose yang bermakna kepemilikan.
Opsi C [SALAH] karena merupakan struktur adjective clause yang tidak sesuai.`,
      status: 'direview',
    },
    {
      nomor: 5,
      tipe: 'pg',
      pertanyaan: `The tutor has had some problems deciding__________`,
      opsi: [
        { label: 'A', teks: `When to the students they shall return the final papers` },
        { label: 'B', teks: `When are they going to return to the students the final papers` },
        { label: 'C', teks: `When they should return the final papers to the students` },
        { label: 'D', teks: `The time when the final papers they should return for the students` },
      ],
      kunci: 'C',
      pembahasan: `Opsi A (salah)
Kata “to the students” bukan merupakan penulisan grammar yang tepat, kata to seharusnya dihilangkan lalu konstruksi kalimat juga tidak tepat
Opsi B (salah)
Penggunaan “are they going to” terbalik seharusnya “they are going to”
Opsi C (benar)
Susunan kalimat tepat, grammar ditulis dengan benar
Opsi D (salah)
Penempatan “for the students” di akhir kalimat seharusnya bukan menggunakan for tetapi to`,
      status: 'direview',
    },
    ],
  },
];

/** 5 soal dari lesson "Error Recognition". */
export const contohErrorRecognition: Kelompok[] = [
  {
    soal: [
    {
      nomor: 1,
      tipe: 'pg',
      pertanyaan: `Find the error
She suggested (A) that we should meet (B) in front of (C) the library before 9 AM (D).`,
      opsi: [
        { label: 'A', teks: `She suggested` },
        { label: 'B', teks: `should meet` },
        { label: 'C', teks: `in front of` },
        { label: 'D', teks: `before 9 AM` },
      ],
      kunci: 'B',
      pembahasan: `Jawaban: (B) we should meet
Pembahasan: Setelah kata kerja "suggested", biasanya diikuti oleh bentuk dasar kata kerja tanpa "should".
(A) She suggested: benar sesuai subject-verb agreement
(C) in front of: frasa yang benar
(D) before 9 AM: preposisi waktu benar`,
      status: 'direview',
    },
    {
      nomor: 2,
      tipe: 'pg',
      pertanyaan: `⟦gambar:gambar/jadiojk/4375415388ca78b831d315a70a15da5c-65d90d3e.png⟧`,
      opsi: [
        { label: 'A', teks: `A` },
        { label: 'B', teks: `Water` },
        { label: 'C', teks: `Flood` },
        { label: 'D', teks: `In` },
      ],
      kunci: 'C',
      pembahasan: `Jawaban benar: C - Flood
Soal di atas merupakan sebuah kalimat dengan Present Perfect Tense ditandai dengan penggunaan “Has” setelah subject “A large amount of water”. Maka jawaban C: Flood merupakan bentuk kata kerja yang salah, semestinya bentuk kata kerjanya itu ialah V3 “Flooded”.
Jawaban A: A merupakan artikel yang tepat dalam konteks kalimat di atas karena merujuk kepada sejumlah air yang banyak.
Jawaban B: Water adalah bentuk yang sesuai dengan konteks kalimat di atas yaitu sebagai bagian dari subject kalimat.
Jawaban D: In adalah bentuk preposisi yang sesuai yang di ikuti nama negara Wales di Britania Raya.`,
      status: 'direview',
    },
    {
      nomor: 3,
      tipe: 'pg',
      pertanyaan: `She should making(A) the cake carefully before(B) she sells(C) it to her customer(D).`,
      opsi: [
        { label: 'A', teks: `making` },
        { label: 'B', teks: `before` },
        { label: 'C', teks: `sells` },
        { label: 'D', teks: `customer` },
      ],
      kunci: 'A',
      pembahasan: `Jawaban A salah karena penggunaan should (modals) selalu diikuti oleh V1 sehingga kata “making” seharusnya ditulis dalam bentuk “make”
Jawaban B benar karena penggunaan kata before menerangkan “sebelum” pada 2 kata kerja yang ada di satu kalimat
Jawaban C benar karena untuk subject she/he/it + Verb (+s/es/ies)
Jawaban D benar karena kata “to her customer” merupakan object dari kalimat`,
      status: 'direview',
    },
    {
      nomor: 4,
      tipe: 'pg',
      pertanyaan: `Visitors can choose(A) either a flaky croissant and(B) a decadent chocolate eclair to indulge(C) their(D) sweet cravings.`,
      opsi: [
        { label: 'A', teks: `can choose` },
        { label: 'B', teks: `and` },
        { label: 'C', teks: `indulge` },
        { label: 'D', teks: `their` },
      ],
      kunci: 'B',
      pembahasan: `Jawaban: B
Penjelasan:
Kata "either" biasanya dipasangkan dengan "or" untuk menunjukkan pilihan di antara dua hal. Namun, dalam kalimat ini, "either" dipasangkan dengan "and" pada bagian (B), yang tidak sesuai secara tata bahasa.Seharusnya bagian (B) berbunyi or untuk melengkapi pasangan yang benar dengan "either," sehingga pilihan menjadi either a flaky croissant or a decadent chocolate eclair.Jawaban yang benar: Bagian yang salah adalah (B)`,
      status: 'direview',
    },
    {
      nomor: 5,
      tipe: 'pg',
      pertanyaan: `Despite of (A) his lack of (B) experience in the field, he was offered the job due to (C) his exceptional (D) qualifications.`,
      opsi: [
        { label: 'A', teks: `Despite of` },
        { label: 'B', teks: `lack of` },
        { label: 'C', teks: `due to` },
        { label: 'D', teks: `his exceptional` },
      ],
      kunci: 'A',
      pembahasan: `A. Frasa "despite of" salah secara gramatikal. Kata "despite" tidak memerlukan "of" setelahnya. Kata yang benar adalah "despite" saja.
B. Frasa "lack of" benar secara gramatikal. Frasa ini digunakan dengan benar untuk menunjukkan kekurangan dalam pengalaman.
C. Frasa "due to" benar secara gramatikal. Frasa ini digunakan untuk menunjukkan alasan atau sebab dan digunakan dengan benar dalam konteks ini (dia tetap ditawari pekerjaan, alasan: kualifikasi/keahlian dia luar biasa).
D. Kata "exceptional" benar secara gramatikal. Kata ini adalah kata sifat yang memodifikasi kata benda "qualifications" ? digunakan dengan benar untuk menggambarkan kualifikasi yang luar biasa.`,
      status: 'direview',
    },
    ],
  },
];

/** 5 soal dari lesson "Reading Comprehension". */
export const contohReading: Kelompok[] = [
  {
    soal: [
    {
      nomor: 1,
      tipe: 'pg',
      pertanyaan: `Hiemstra collected 15 abandoned coot nests from around Amsterdam. In the nest with the most extended and most dateable history, researchers spent slow hours dissecting the nest layer by layer, examining each piece of trash for clues to its age, such as expiration dates or old logos. Once they completed their stratigraphy, they compared the dates they thought nest-building had occurred with Google Street View images, first available in 2008, from the nest locations. “I was studying all the garbage so intensely, especially McDonald’s,” which contributed a significant portion of the dateable trash, Hiemstra said.
Their plastic-based nesting timeline matched up with street imagery. In one year, they could see a coot on the nest; in another, the nest was built up with plastic, and people sitting nearby were eating food with disposable packaging. That gave Hiemstra confidence that his inferences about nesting patterns were accurate.
What can be inferred about McDonald’s trash in the nests?`,
      opsi: [
        { label: 'A', teks: `It was the only trash found in the nests.` },
        { label: 'B', teks: `It attracted coots to build nests.` },
        { label: 'C', teks: `It caused damage to the nests.` },
        { label: 'D', teks: `It helped determine the age of the nests.` },
      ],
      kunci: 'D',
      pembahasan: `Jawaban: D
Penjelasan:
Pada paragraf pertama, McDonald’s disebut sebagai penyumbang besar dari “dateable trash” (sampah yang bisa ditentukan tanggalnya), artinya sampah McDonald’s membantu menentukan usia sarang.`,
      status: 'direview',
    },
    {
      nomor: 2,
      tipe: 'pg',
      pertanyaan: `The tiger mosquito is normally found in Southeast Asia, where moisture and heat create the perfect breeding grounds. But they’re now spreading across Europe thanks to climate change. Black with white stripes, the mosquito bites during the day — unlike other types of mosquito, which typically do so around dawn and dusk — and is most often found in urban areas and near water sources. They don’t just leave an itchy bump, either — these mosquitos have the potential to spread diseases such as dengue fever, eastern equine encephalitis, chikungunya, and zika.
The first sighting of tiger mosquitos in Europe was in Albania in 1979, where they remained for over a decade. Now, they’re found in more than a dozen European countries, including Italy, France, Germany, Spain, Croatia and Portugal, and are expected to become a problem on UK soil within the next 15 years — they’ve already been detected here in small numbers. According to the European Centre for Disease Prevention and Control (ECDPC), it’s the most invasive mosquito species in the world.
But it’s not the only mosquito to watch. Another report from the ECDPC suggests the yellow fever mosquito (Aedes aegypti), capable of spreading dengue fever and more, has been found in Cyprus, while the common house mosquito (Culex pipiens), known to spread West Nile virus, is found in every European country bar Iceland and the Faroe Islands. According to the ECDPC, there were 130 dengue cases across Europe in 2023, compared to just over 70 for the 10-year period before.
Source: National Geographic
Why is the tiger mosquito likely to become a problem in the UK within the next 15 years?`,
      opsi: [
        { label: 'A', teks: `Due to its ability to spread diseases.` },
        { label: 'B', teks: `Because it is already present in large numbers.` },
        { label: 'C', teks: `Because of the UK's climate change.` },
        { label: 'D', teks: `Due to its high reproductive rate.` },
      ],
      kunci: 'C',
      pembahasan: `Pembahasan:
Jawaban benar: Opsi C
Opsi C benar karena perubahan iklim di Inggris kemungkinan memungkinkan nyamuk harimau untuk berkembang biak dan menyebar di negara tersebut.
Opsi A salah karena teks menyebutkan bahwa meskipun nyamuk harimau dapat menyebarkan penyakit, masalah utamanya adalah perubahan iklim yang mendukung penyebarannya.
Opsi D salah karena teks tidak menyebutkan tingkat reproduksi nyamuk harimau sebagai alasan utama masalah di Inggris.
Opsi B salah karena nyamuk harimau saat ini hanya ditemukan dalam jumlah kecil di Inggris, bukan dalam jumlah besar.`,
      status: 'direview',
    },
    {
      nomor: 3,
      tipe: 'pg',
      pertanyaan: `Retreats aside, travellers can curate their explorative trips to the Blue Zone regions. Incorporating a few days in Okinawa while adventuring around Japan, for example, will reveal a place where people are living long lives, and where rates of chronic illnesses like heart disease and dementia are impressively low.
Diet plays a huge role in the longevity of its residents. Most meals in Okinawa are made up largely of vegetables, with one in particular — the beni imo (Okinawan purple sweet potato) — playing a starring role. This unassuming vegetable is packed with powerful antioxidants called anthocyanins, which give it its vibrant colour. And it’s readily available on the island.
Closer to home, another option for a Blue Zone trip takes travellers to the Greek island of Ikaria. Located in the eastern Aegean, about 30 miles off the coast of Turkey, its 8,500 or so residents have some of the longest life expectancies in the world. It’s said one in three Ikarians live past 90.
Just like in Okinawa, diet is key to Ikarians’ successful living. Food on the island is almost always locally grown, foraged and fresh, and most locals have their gardens with fruits, vegetables and herbs. Many also make their wine, which is consumed in moderation. “A glass or two never hurt anyone,” says Thea, adding: “We enjoy our wine, but we tend to drink it with food or with company rather than in bars or at home alone.”
Which of the following can be inferred about the role of diet in Blue Zones?`,
      opsi: [
        { label: 'A', teks: `A plant-based diet may contribute to longer life.` },
        { label: 'B', teks: `Blue Zone residents do not eat any meat.` },
        { label: 'C', teks: `Processed foods are commonly consumed in Blue Zones.` },
        { label: 'D', teks: `Blue Zone residents follow a strict vegan diet.` },
      ],
      kunci: 'A',
      pembahasan: `Jawaban: A
Pembahasan:
Paragraf kedua dan keempat menyebutkan bahwa makanan di Okinawa dan Ikaria didominasi oleh sayuran, buah-buahan, dan hasil pertanian lokal. Ini menunjukkan bahwa pola makan berbasis tumbuhan dapat berkontribusi pada umur panjang.`,
      status: 'direview',
    },
    {
      nomor: 4,
      tipe: 'pg',
      pertanyaan: `The French photographer Henri Cartier-Bresson (1908–2004) was a pioneer of modern street photography and is regarded as the “father of photojournalism.” Celebrated for the candid shots he took of everyday life in Paris, as well as for his photo-reporting around the world, he remains one of the most respected photographers of the twentieth century. His early life as an artist was not devoted to photography, however. When he was 19 years old, Cartier-Bresson began studying at the studio of Cubist painter and sculptor André Lhote. There, he learned to be a painter. He was educated in art theory and composition, and he discovered an interest in both modern and Renaissance art.
Meanwhile, throughout the 1920s, photography continued to develop as an art form, and in 1930, Cartier-Bresson became inspired by a photograph taken by Hungarian photographer Martin Munkacsi. In the photograph, titled “Three Boys at Lake Tanganyika,” three young boys play in Lake Tanganyika, an expansive, freshwater lake that touches four countries on the African continent: Tanzania, the Democratic Republic of the Congo, Burundi, and Zambia. In the photo, the boys splash in the surf. The image features their silhouettes against the lake’s foaming waves. It is a joyful scene. Cartier-Bresson credited the photograph with leading him to turn away from painting in order to focus on photography. He said of the picture, “I suddenly understood that photography can fix eternity in a moment.”
Cartier-Bresson then acquired a German camera with a 50-millimeter (50-mm) lens—relatively small compared to the lenses used by professional photographers today. Despite having many opportunities to use a larger, more complex lens over the course of his career, Cartier-Bresson preferred his 50-mm lens for several reasons. The most important of these was that with this lens, he was able to shoot without being conspicuous, which he resisted for fear of being seen as showing off. It allowed him to capture moments he might not have captured otherwise, as people often did not notice him shooting.
He also had a strong preference for shooting in black and white, believing that the myriad printing options available when shooting with color distorted the image he was seeing with his eyes. For this reason, he only shot in color when obliged to. In general, he bemoaned photography’s trend toward focusing on ever-advancing processing techniques, believing that the fetishizing1 of these techniques distracted people from what the art was truly about: seeing and capturing.
Images à la Sauvette (The Decisi ve Moment in the English edition), a book featuring over 100 of Cartier-Bresson’s photographs, was published in 1952 with a cover drawn specifically for the book by renowned French painter Henri Matisse. The book quickly became a classic in the canon of literature on photography. Alongside the portfolio of his images in the book, Cartier-Bresson authored a 4,500-word introduction on his photographic philosophy. This introduction to the book is often referenced today in treatises and essays on the art and history of the photograph—in particular, the portions in which he elaborates on the book’s title. To Cartier-Bresson, photography was about capturing in “a fraction of a second … the significance of an event.” In a 1971 interview, Cartier-Bresson described the art as an act of affirmation. He rejected many similar titles in favor of The Decisive Moment, including A pas de Loup, which means “tiptoeing,” a reference to how he, as a photographer, approached his subjects.
When Cartier-Bresson died in 2004, he had established a global reputation as one of the greatest photographers of all time. Yet, despite this fame, he was extremely timid and often shunned publicity. Thus, while he is revered for the photos he captured of faces around the world, he himself was rarely recognized. (Source: Manhattan Prep, TOEFL ® 5 lb. Book of Practice Problems)
Paragraph 1 implies that prior to the 1920s,`,
      opsi: [
        { label: 'A', teks: `most artists in France studied painting rather than other media.` },
        { label: 'B', teks: `paintings were less abstract than they generally are today.` },
        { label: 'C', teks: `modern street photography was likely not a well-established art form.` },
        { label: 'D', teks: `Henri Cartier-Bresson was already emerging as a talented photojournalist.` },
      ],
      kunci: 'C',
      pembahasan: `Jawaban: C
Pembahasan: Soal ini tricky, karena tidak ada referensi langsung ke tahun 1920-an dalam teks tersebut. Namun, ada tanggal dan tahun yang menjadi titik acuan untuk mengambil kesimpulan. Kalimat 1 paragraf 1 menyebutkan bawah Cartier-Bresson lahir pada 1908. Lalu, kalimat 4 menyebutkan bahwa “When he was 19 years old, Cartier-Bresson began studying…” Artinya, 19 tahun setelah 1908 adalah 1927. Menurut kalimat 1, Cartier-Bresson adalah “pelopor” fotografi jalanan modern. Artinya, dia adalah salah satu fotografer pertama yang melakukan praktik ini. Jadi, kecil kemungkinannya fotografi jalanan modern sudah ada sebelum tahun 1920-an.`,
      status: 'direview',
    },
    {
      nomor: 5,
      tipe: 'pg',
      pertanyaan: `Linen is yarn, thread, or fabric made from the stem fibers of flax, one of the oldest cultivated plants. Because the plant is grown in temperate climates, its production is limited. Archeological evidence shows that flax was used for making ropes and fishing nets in Switzerland over 10.000 years ago. Ancient Egyptians used flax more than any other fiber for making linen, which was employed in the manufacture of a diverse array of other materials. When the use of linen spread from the Mediterranean to Europe, linen became second only to wool as the most prevalent material for fabric, primarily because the spindle was no longer the sole device used for winding thread. It was during that time that the spinning wheel replaced the spindle and distaff for twisting and winding the fax fibers. By the end of the seventeenth century, a spinning wheel for linen was a fixture in almost every European and North American household.
Linen is relatively scarce now because the process of weaving flax fabric is comparatively work- and timeconsuming. Upon harvesting, flax must be hackled to separate the linen fibers from the tow. Then the fibers are soaked and dried. Bundling the gleaned fiber precedes raking and thinning. The latter are essential steps since unravelling the fibrous mass of stems can facilitate winding. After the threads have been spun, they are laid on a loom and woven into the finished product, known as linen. As is the case with some other natural fibers, such as silk and wool, the price of linen fabric is rather high, and it is not as easy to care for as fabrics made of synthetic rayon, acetate, and viscose.
The author of the passage implies that currently, linen is NOT as prevalent as`,
      opsi: [
        { label: 'A', teks: `Wool` },
        { label: 'B', teks: `Silk` },
        { label: 'C', teks: `Synthetic fibers` },
        { label: 'D', teks: `Woven textiles` },
      ],
      kunci: 'C',
      pembahasan: `Penulis paragraph mengimplikasikan bahwa linen tidak sama dengan
‘As is the case with some other natural fibers, such as silk and wool, the price of linen fabric is rather high, and it is not as easy to care for as fabrics made of synthetic rayon, acetate, and viscos’
Disebutkan bahwa linen tidak semudah perawatan dengan kain yang terbuat dari bahan sintetis seperti rayon, asetat, dan viscose
Opsi A (salah)
wol
Opsi B (salah)
sutra
Opsi C (benar)
Kain sintetis
Opsi D (salah)
Tekstil yang dijahit`,
      status: 'direview',
    },
    ],
  },
];
