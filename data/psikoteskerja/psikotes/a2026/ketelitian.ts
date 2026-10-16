import type { Kelompok, Subtes } from '@/lib/skema';

/**
 * Tes Ketelitian: 90 soal, 2 menit, jawaban S (sama) atau T (tidak sama).
 *
 * Dibuat dari draft prototipe PROTOTIPE-KETELITIAN.html (folder Draft Prototype, diubah
 * 27 Agustus 2026) dan PAKET-SOAL-KETELITIAN-01.json (paket KTL-20260827). Contoh: 12 soal
 * dari paket itu (tiap jenis stimulus pada tiap tingkat kesulitan). Kunci diperiksa terhadap
 * perbandingan string; pembahasan mengikuti format G.1 mapping. Boleh disunting tangan.
 */
const contoh: Kelompok[] = [
  {
    soal: [
      {
        nomor: 2,
        tipe: 'pg',
        pertanyaan: `Jenis soal: Huruf/Kata
Kolom 1: Sensor
Kolom 2: Sinsor`,
        opsi: [
          { label: 'S', teks: 'Kedua susunan sama' },
          { label: 'T', teks: 'Kedua susunan tidak sama' },
        ],
        kunci: 'T',
        pembahasan: `Jawaban: T
Pembahasan:
Kolom 1: Sensor
Kolom 2: Sinsor
Kedua tulisan berbeda pada karakter ke 2 (e dan i). Oleh karena itu, jawabannya adalah T.
Bentuk perbedaan: satu karakter diganti.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 3,
        tipe: 'pg',
        pertanyaan: `Jenis soal: Simbol Campuran
Kolom 1: QYGV99;);
Kolom 2: QYGV99;);`,
        opsi: [
          { label: 'S', teks: 'Kedua susunan sama' },
          { label: 'T', teks: 'Kedua susunan tidak sama' },
        ],
        kunci: 'S',
        pembahasan: `Jawaban: S
Pembahasan:
Kolom 1: QYGV99;);
Kolom 2: QYGV99;);
Kedua tulisan sama persis, yaitu QYGV99;);. Oleh karena itu, jawabannya adalah S.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 4,
        tipe: 'pg',
        pertanyaan: `Jenis soal: Alfanumerik
Kolom 1: Jua418914
Kolom 2: Jua418914`,
        opsi: [
          { label: 'S', teks: 'Kedua susunan sama' },
          { label: 'T', teks: 'Kedua susunan tidak sama' },
        ],
        kunci: 'S',
        pembahasan: `Jawaban: S
Pembahasan:
Kolom 1: Jua418914
Kolom 2: Jua418914
Kedua tulisan sama persis, yaitu Jua418914. Oleh karena itu, jawabannya adalah S.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 6,
        tipe: 'pg',
        pertanyaan: `Jenis soal: Angka
Kolom 1: 65588040
Kolom 2: 65888040`,
        opsi: [
          { label: 'S', teks: 'Kedua susunan sama' },
          { label: 'T', teks: 'Kedua susunan tidak sama' },
        ],
        kunci: 'T',
        pembahasan: `Jawaban: T
Pembahasan:
Kolom 1: 65588040
Kolom 2: 65888040
Kedua tulisan berbeda pada karakter ke 3 (5 dan 8). Oleh karena itu, jawabannya adalah T.
Bentuk perbedaan: satu karakter diganti.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 31,
        tipe: 'pg',
        pertanyaan: `Jenis soal: Huruf/Kata
Kolom 1: Tasikmalaya
Kolom 2: TasikmalaYa`,
        opsi: [
          { label: 'S', teks: 'Kedua susunan sama' },
          { label: 'T', teks: 'Kedua susunan tidak sama' },
        ],
        kunci: 'T',
        pembahasan: `Jawaban: T
Pembahasan:
Kolom 1: Tasikmalaya
Kolom 2: TasikmalaYa
Kedua tulisan berbeda pada karakter ke 10 (y dan Y). Oleh karena itu, jawabannya adalah T.
Bentuk perbedaan: huruf besar-kecil berbeda.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 32,
        tipe: 'pg',
        pertanyaan: `Jenis soal: Angka
Kolom 1: 8887700000
Kolom 2: 8887700500`,
        opsi: [
          { label: 'S', teks: 'Kedua susunan sama' },
          { label: 'T', teks: 'Kedua susunan tidak sama' },
        ],
        kunci: 'T',
        pembahasan: `Jawaban: T
Pembahasan:
Kolom 1: 8887700000
Kolom 2: 8887700500
Kedua tulisan berbeda pada karakter ke 8 (0 dan 5). Oleh karena itu, jawabannya adalah T.
Bentuk perbedaan: satu karakter diganti.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 33,
        tipe: 'pg',
        pertanyaan: `Jenis soal: Simbol Campuran
Kolom 1: 89?,WE669co
Kolom 2: 89?,WE669co`,
        opsi: [
          { label: 'S', teks: 'Kedua susunan sama' },
          { label: 'T', teks: 'Kedua susunan tidak sama' },
        ],
        kunci: 'S',
        pembahasan: `Jawaban: S
Pembahasan:
Kolom 1: 89?,WE669co
Kolom 2: 89?,WE669co
Kedua tulisan sama persis, yaitu 89?,WE669co. Oleh karena itu, jawabannya adalah S.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 53,
        tipe: 'pg',
        pertanyaan: `Jenis soal: Alfanumerik
Kolom 1: sbx225GLY8
Kolom 2: sbx252GLY8`,
        opsi: [
          { label: 'S', teks: 'Kedua susunan sama' },
          { label: 'T', teks: 'Kedua susunan tidak sama' },
        ],
        kunci: 'T',
        pembahasan: `Jawaban: T
Pembahasan:
Kolom 1: sbx225GLY8
Kolom 2: sbx252GLY8
Kedua tulisan berbeda pada karakter ke 5 (2 dan 5) dan ke 6 (5 dan 2). Oleh karena itu, jawabannya adalah T.
Bentuk perbedaan: dua karakter bersebelahan bertukar posisi.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 66,
        tipe: 'pg',
        pertanyaan: `Jenis soal: Simbol Campuran
Kolom 1: @2Z[q88$~~2G,,m99
Kolom 2: @2Z[q88$~2~G,,m99`,
        opsi: [
          { label: 'S', teks: 'Kedua susunan sama' },
          { label: 'T', teks: 'Kedua susunan tidak sama' },
        ],
        kunci: 'T',
        pembahasan: `Jawaban: T
Pembahasan:
Kolom 1: @2Z[q88$~~2G,,m99
Kolom 2: @2Z[q88$~2~G,,m99
Kedua tulisan berbeda pada karakter ke 10 (~ dan 2) dan ke 11 (2 dan ~). Oleh karena itu, jawabannya adalah T.
Bentuk perbedaan: dua karakter bersebelahan bertukar posisi.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      {
        nomor: 69,
        tipe: 'pg',
        pertanyaan: `Jenis soal: Alfanumerik
Kolom 1: qq4EA35vv1PF8e11
Kolom 2: qq4EA35vv1PF8e11`,
        opsi: [
          { label: 'S', teks: 'Kedua susunan sama' },
          { label: 'T', teks: 'Kedua susunan tidak sama' },
        ],
        kunci: 'S',
        pembahasan: `Jawaban: S
Pembahasan:
Kolom 1: qq4EA35vv1PF8e11
Kolom 2: qq4EA35vv1PF8e11
Kedua tulisan sama persis, yaitu qq4EA35vv1PF8e11. Oleh karena itu, jawabannya adalah S.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      {
        nomor: 75,
        tipe: 'pg',
        pertanyaan: `Jenis soal: Huruf/Kata
Kolom 1: Perkeretaapian Nasional
Kolom 2: PerkeretaapianN asional`,
        opsi: [
          { label: 'S', teks: 'Kedua susunan sama' },
          { label: 'T', teks: 'Kedua susunan tidak sama' },
        ],
        kunci: 'T',
        pembahasan: `Jawaban: T
Pembahasan:
Kolom 1: Perkeretaapian Nasional
Kolom 2: PerkeretaapianN asional
Kedua tulisan berbeda pada karakter ke 15 (spasi dan N) dan ke 16 (N dan spasi). Oleh karena itu, jawabannya adalah T.
Bentuk perbedaan: letak spasi bergeser.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      {
        nomor: 82,
        tipe: 'pg',
        pertanyaan: `Jenis soal: Angka
Kolom 1: 233337777002229852
Kolom 2: 233337777002229852`,
        opsi: [
          { label: 'S', teks: 'Kedua susunan sama' },
          { label: 'T', teks: 'Kedua susunan tidak sama' },
        ],
        kunci: 'S',
        pembahasan: `Jawaban: S
Pembahasan:
Kolom 1: 233337777002229852
Kolom 2: 233337777002229852
Kedua tulisan sama persis, yaitu 233337777002229852. Oleh karena itu, jawabannya adalah S.`,
        tingkat: 'sulit',
        status: 'draft',
      },
    ],
  },
];

export const ketelitian: Subtes = {
  kode: 'ketelitian',
  nama: 'Tes Ketelitian',
  jumlahSoal: 90,
  waktuMenit: 2,
  formatKetentuan: `Dua susunan karakter ditampilkan berdampingan (Kolom 1 dan Kolom 2), satu soal per layar. Bila keduanya sama persis, peserta memilih S (sama). Bila ada satu saja karakter yang berbeda, peserta memilih T (tidak sama), termasuk perbedaan huruf besar-kecil dan spasi. Setelah memilih, layar langsung pindah ke nomor berikutnya. Pintasan papan tuts: S atau 1 untuk S, T atau 2 untuk T.

90 soal dalam 2 menit (judul mapping: "90 Soal - 2 Menit"), kira-kira 1,33 detik per soal. Waktu berjalan sejak soal pertama tampil dan tidak berhenti di tengah tes. Soal disusun dari yang mudah ke yang sulit; peserta diminta bekerja secepat mungkin tanpa mengorbankan ketelitian.

Susunan soal: tiga blok berurutan masing-masing 30 soal (nomor 1-30 mudah, 31-60 sedang, 61-90 sulit). Tiap blok berisi 12 soal huruf/kata, 6 angka, 6 alfanumerik, dan 6 simbol campuran, dengan urutan jenis diacak penuh. Kesulitan naik lewat panjang stimulus (relatif pendek sampai panjang/padat), kompleksitas dan kemiripan karakter, posisi perbedaan (mudah ditemukan sampai di tengah atau akhir), pengulangan karakter, dan pertukaran posisi karakter.

Tangkapan layar prototipe:
⟦gambar:gambar/psikoteskerja/ketelitian-awal.webp⟧
Layar pembuka: 90 soal, waktu 2:00, pilihan S / T, dan cara menjawab.
⟦gambar:gambar/psikoteskerja/ketelitian-mengerjakan.webp⟧
Saat mengerjakan: Kolom 1 dan Kolom 2 berdampingan, tombol S dan T, dan hitung mundur.`,
  penilaian: `Kunci bersifat mutlak: dua susunan identik berarti S, selain itu T. Pembandingan dilakukan per posisi karakter (karakter ke-i Kolom 1 dengan karakter ke-i Kolom 2), sehingga dua karakter bersebelahan yang bertukar posisi menghasilkan dua posisi berbeda.

Mapping tidak menetapkan rumus skor, bobot per tingkat kesulitan, pengurangan untuk jawaban salah, maupun nilai ambang. Prototipe karena itu hanya menampilkan cacahan mentah: benar, salah, tidak dijawab, akurasi (benar dibagi terjawab), detik per soal, serta rincian per jenis soal dan per tingkat kesulitan. Soal yang tidak sempat dijawab dicatat kosong, bukan salah.

Format pembahasan (ketentuan G.1 mapping): Jawaban, Pembahasan, Kolom 1, Kolom 2, lalu kalimat kesimpulan. Pada jawaban T, karakter sejajar yang berbeda diberi warna merah di dokumen pembahasan (tidak ada keterangan instruksional tentang pewarnaan; di halaman ini perbedaan ditulis dalam kalimat kesimpulan).

Tangkapan layar hasil di prototipe (90 soal dijawab otomatis untuk ilustrasi):
⟦gambar:gambar/psikoteskerja/ketelitian-hasil.webp⟧
Layar hasil: cacahan benar/salah/kosong, akurasi, rincian per jenis dan per tingkat, lalu tinjauan jawaban.`,
  catatan: `Perlu dikonfirmasi ke pemilik materi: "2 Menit" untuk 90 soal berarti 1,33 detik per soal. Apakah itu batas seluruh tes, batas per blok (jadi 6 menit total), atau salah ketik? Prototipe memakai 120 detik apa adanya. Porsi jawaban S dan T tidak diatur mapping (paket contoh ini memakai 45 S dan 45 T). Sumber: Mapping Ketelitian PT KAI.

Contoh di bawah diambil dari paket soal PAKET-SOAL-KETELITIAN-01 (paketId KTL-20260827, 90 soal bangkitan pembangkit soal prototipe, seed 20260827).`,
  materi: [
    {
      nama: 'Huruf/Kata (36 soal)',
      catatan: 'Stimulus berupa huruf, satu kata, atau maksimal dua kata. Cakupannya dapat sangat luas, misalnya nama orang/tokoh, nama kota, negara, wilayah, istilah sains, teknologi, sejarah, geografi, profesi, benda, organisasi/lembaga, serta istilah umum lainnya. Ketelitian diuji melalui kesamaan susunan huruf, ejaan, spasi, dan posisi setiap karakter.',
    },
    {
      nama: 'Angka (18 soal)',
      catatan: 'Stimulus berupa deretan angka. Ketelitian diuji dengan membandingkan setiap digit pada posisi yang sama, termasuk perubahan satu digit atau pertukaran posisi digit.',
    },
    {
      nama: 'Alfanumerik (18 soal)',
      catatan: 'Stimulus berupa kombinasi huruf dan angka dalam satu rangkaian. Peserta perlu membandingkan dua jenis karakter sekaligus sehingga beban pemindaian lebih tinggi daripada stimulus satu jenis.',
    },
    {
      nama: 'Simbol Campuran (18 soal)',
      catatan: 'Stimulus berupa kombinasi huruf, angka, dan/atau simbol khusus. Peserta harus memperhatikan bentuk, urutan, dan posisi setiap karakter secara sangat teliti.',
    },
  ],
  contoh,
};
