import type { Kelompok, Subtes } from '@/lib/skema';

/**
 * Big Five Personality Test (OCEAN): 44 pernyataan skala Likert 5 titik, 15 menit.
 *
 * Dibuat dari draft prototipe PROTOTIPE-BIG-FIVE.html (folder Draft Prototype, diubah
 * 5 Oktober 2026): bank 44 butir (BANK), peta dimensi, aturan reverse, definisi dan
 * penafsiran dimensi. Contoh: 10 butir asli (butir 1-9 dan 35; dua butir per dimensi,
 * termasuk butir reverse). Boleh disunting tangan.
 *
 * Butir kepribadian tidak punya jawaban benar: tanpaKunci, dan cara skornya di pembahasan.
 * Status draft: belum diperiksa ulang untuk keperluan etalase.
 */
const contoh: Kelompok[] = [
  {
    soal: [
      {
        nomor: 1,
        tipe: 'skala',
        pertanyaan: `Saya adalah orang yang suka ngobrol dengan orang lain

Seberapa setuju Anda bahwa pernyataan ini menggambarkan diri Anda?`,
        opsi: [
          { label: 'STS', teks: 'Sangat Tidak Setuju' },
          { label: 'TS', teks: 'Tidak Setuju' },
          { label: 'N', teks: 'Netral' },
          { label: 'S', teks: 'Setuju' },
          { label: 'SS', teks: 'Sangat Setuju' },
        ],
        kunci: '',
        tanpaKunci: true,
        pembahasan: `Dimensi: Extraversion (E). Butir searah: nilai pilihan dipakai apa adanya.
Skor: STS = 1, TS = 2, N = 3, S = 4, SS = 5.
Asal teks: tabel Contoh Soal pada dokumen sumber (butir 1-25).`,
        status: 'draft',
      },
      {
        nomor: 2,
        tipe: 'skala',
        pertanyaan: `Saya cenderung mencari kesalahan orang lain

Seberapa setuju Anda bahwa pernyataan ini menggambarkan diri Anda?`,
        opsi: [
          { label: 'STS', teks: 'Sangat Tidak Setuju' },
          { label: 'TS', teks: 'Tidak Setuju' },
          { label: 'N', teks: 'Netral' },
          { label: 'S', teks: 'Setuju' },
          { label: 'SS', teks: 'Sangat Setuju' },
        ],
        kunci: '',
        tanpaKunci: true,
        pembahasan: `Dimensi: Agreeableness (A). Butir reverse: nilai pilihan dibalik (6 - nilai pilihan).
Skor: STS = 5, TS = 4, N = 3, S = 2, SS = 1.
Asal teks: tabel Contoh Soal pada dokumen sumber (butir 1-25).`,
        status: 'draft',
      },
      {
        nomor: 3,
        tipe: 'skala',
        pertanyaan: `Saya selalu menyelesaikan tugas dengan tuntas

Seberapa setuju Anda bahwa pernyataan ini menggambarkan diri Anda?`,
        opsi: [
          { label: 'STS', teks: 'Sangat Tidak Setuju' },
          { label: 'TS', teks: 'Tidak Setuju' },
          { label: 'N', teks: 'Netral' },
          { label: 'S', teks: 'Setuju' },
          { label: 'SS', teks: 'Sangat Setuju' },
        ],
        kunci: '',
        tanpaKunci: true,
        pembahasan: `Dimensi: Conscientiousness (C). Butir searah: nilai pilihan dipakai apa adanya.
Skor: STS = 1, TS = 2, N = 3, S = 4, SS = 5.
Asal teks: tabel Contoh Soal pada dokumen sumber (butir 1-25).`,
        status: 'draft',
      },
      {
        nomor: 4,
        tipe: 'skala',
        pertanyaan: `Saya kadang merasa jiwa saya galau dan tertekan

Seberapa setuju Anda bahwa pernyataan ini menggambarkan diri Anda?`,
        opsi: [
          { label: 'STS', teks: 'Sangat Tidak Setuju' },
          { label: 'TS', teks: 'Tidak Setuju' },
          { label: 'N', teks: 'Netral' },
          { label: 'S', teks: 'Setuju' },
          { label: 'SS', teks: 'Sangat Setuju' },
        ],
        kunci: '',
        tanpaKunci: true,
        pembahasan: `Dimensi: Neuroticism (N). Butir searah: nilai pilihan dipakai apa adanya.
Skor: STS = 1, TS = 2, N = 3, S = 4, SS = 5.
Asal teks: tabel Contoh Soal pada dokumen sumber (butir 1-25).`,
        status: 'draft',
      },
      {
        nomor: 5,
        tipe: 'skala',
        pertanyaan: `Saya orang yang suka memunculkan ide-ide baru dan segar

Seberapa setuju Anda bahwa pernyataan ini menggambarkan diri Anda?`,
        opsi: [
          { label: 'STS', teks: 'Sangat Tidak Setuju' },
          { label: 'TS', teks: 'Tidak Setuju' },
          { label: 'N', teks: 'Netral' },
          { label: 'S', teks: 'Setuju' },
          { label: 'SS', teks: 'Sangat Setuju' },
        ],
        kunci: '',
        tanpaKunci: true,
        pembahasan: `Dimensi: Openness to Experience (O). Butir searah: nilai pilihan dipakai apa adanya.
Skor: STS = 1, TS = 2, N = 3, S = 4, SS = 5.
Asal teks: tabel Contoh Soal pada dokumen sumber (butir 1-25).`,
        status: 'draft',
      },
      {
        nomor: 6,
        tipe: 'skala',
        pertanyaan: `Saya orang yang cenderung pendiam

Seberapa setuju Anda bahwa pernyataan ini menggambarkan diri Anda?`,
        opsi: [
          { label: 'STS', teks: 'Sangat Tidak Setuju' },
          { label: 'TS', teks: 'Tidak Setuju' },
          { label: 'N', teks: 'Netral' },
          { label: 'S', teks: 'Setuju' },
          { label: 'SS', teks: 'Sangat Setuju' },
        ],
        kunci: '',
        tanpaKunci: true,
        pembahasan: `Dimensi: Extraversion (E). Butir reverse: nilai pilihan dibalik (6 - nilai pilihan).
Skor: STS = 5, TS = 4, N = 3, S = 2, SS = 1.
Asal teks: tabel Contoh Soal pada dokumen sumber (butir 1-25).`,
        status: 'draft',
      },
      {
        nomor: 7,
        tipe: 'skala',
        pertanyaan: `Saya termasuk ringan tangan dan suka membantu orang lain

Seberapa setuju Anda bahwa pernyataan ini menggambarkan diri Anda?`,
        opsi: [
          { label: 'STS', teks: 'Sangat Tidak Setuju' },
          { label: 'TS', teks: 'Tidak Setuju' },
          { label: 'N', teks: 'Netral' },
          { label: 'S', teks: 'Setuju' },
          { label: 'SS', teks: 'Sangat Setuju' },
        ],
        kunci: '',
        tanpaKunci: true,
        pembahasan: `Dimensi: Agreeableness (A). Butir searah: nilai pilihan dipakai apa adanya.
Skor: STS = 1, TS = 2, N = 3, S = 4, SS = 5.
Asal teks: tabel Contoh Soal pada dokumen sumber (butir 1-25).`,
        status: 'draft',
      },
      {
        nomor: 8,
        tipe: 'skala',
        pertanyaan: `Saya kadang-kadang bertindak ceroboh

Seberapa setuju Anda bahwa pernyataan ini menggambarkan diri Anda?`,
        opsi: [
          { label: 'STS', teks: 'Sangat Tidak Setuju' },
          { label: 'TS', teks: 'Tidak Setuju' },
          { label: 'N', teks: 'Netral' },
          { label: 'S', teks: 'Setuju' },
          { label: 'SS', teks: 'Sangat Setuju' },
        ],
        kunci: '',
        tanpaKunci: true,
        pembahasan: `Dimensi: Conscientiousness (C). Butir reverse: nilai pilihan dibalik (6 - nilai pilihan).
Skor: STS = 5, TS = 4, N = 3, S = 2, SS = 1.
Asal teks: tabel Contoh Soal pada dokumen sumber (butir 1-25).`,
        status: 'draft',
      },
      {
        nomor: 9,
        tipe: 'skala',
        pertanyaan: `Saya orang yang santai dan mampu mengelola stress dengan baik

Seberapa setuju Anda bahwa pernyataan ini menggambarkan diri Anda?`,
        opsi: [
          { label: 'STS', teks: 'Sangat Tidak Setuju' },
          { label: 'TS', teks: 'Tidak Setuju' },
          { label: 'N', teks: 'Netral' },
          { label: 'S', teks: 'Setuju' },
          { label: 'SS', teks: 'Sangat Setuju' },
        ],
        kunci: '',
        tanpaKunci: true,
        pembahasan: `Dimensi: Neuroticism (N). Butir reverse: nilai pilihan dibalik (6 - nilai pilihan).
Skor: STS = 5, TS = 4, N = 3, S = 2, SS = 1.
Asal teks: tabel Contoh Soal pada dokumen sumber (butir 1-25).`,
        status: 'draft',
      },
      {
        nomor: 35,
        tipe: 'skala',
        pertanyaan: `Saya lebih menyukai pekerjaan yang bersifat rutin

Seberapa setuju Anda bahwa pernyataan ini menggambarkan diri Anda?`,
        opsi: [
          { label: 'STS', teks: 'Sangat Tidak Setuju' },
          { label: 'TS', teks: 'Tidak Setuju' },
          { label: 'N', teks: 'Netral' },
          { label: 'S', teks: 'Setuju' },
          { label: 'SS', teks: 'Sangat Setuju' },
        ],
        kunci: '',
        tanpaKunci: true,
        pembahasan: `Dimensi: Openness to Experience (O). Butir reverse: nilai pilihan dibalik (6 - nilai pilihan).
Skor: STS = 5, TS = 4, N = 3, S = 2, SS = 1.
Asal teks: Form Scribd 544007455 (butir 26-44).`,
        status: 'draft',
      },
    ],
  },
];

export const bigFive: Subtes = {
  kode: 'big-five',
  nama: 'Big Five Personality Test',
  jumlahSoal: 44,
  waktuMenit: 15,
  formatKetentuan: `44 pernyataan tentang diri sendiri, ditampilkan satu per layar. Untuk tiap pernyataan peserta memilih seberapa setuju ia bahwa pernyataan itu menggambarkan dirinya, pada skala 5 pilihan: STS (Sangat Tidak Setuju), TS (Tidak Setuju), N (Netral), S (Setuju), SS (Sangat Setuju).

Tidak ada jawaban benar atau salah: yang diukur adalah kecenderungan, bukan kemampuan. Petunjuk di layar:
- Jawab sesuai keadaan sekarang, bukan yang dianggap seharusnya.
- Jawab konsisten: beberapa pernyataan maknanya mirip tetapi disusun terbalik.
- Pilih Netral hanya bila benar-benar tidak condong ke mana pun.
- Gunakan SS dan STS dengan bijak; menjawab Sangat Setuju untuk hampir semua pernyataan membuat pola jawaban terlihat tidak realistis.
- Seluruh 44 pernyataan harus terisi.

Waktu 15 menit, dihitung sejak pernyataan pertama tampil. Bila waktu habis, lembar ditutup dan jawaban yang sudah terisi dikirim otomatis (perilaku ini usulan prototipe, bukan ketentuan sumber).

Tangkapan layar prototipe:
⟦gambar:gambar/psikoteskerja/big-five-awal.webp⟧
Layar awal: ringkasan tes (44 pernyataan, 5 dimensi, 15 menit, 5 pilihan jawaban) dan penegasan bahwa tidak ada jawaban benar atau salah.
⟦gambar:gambar/psikoteskerja/big-five-mengerjakan.webp⟧
Saat mengerjakan: satu pernyataan per layar dengan lima pilihan, bilah kemajuan, dan panel navigasi butir.`,
  penilaian: `Skoring murni aritmatika, tanpa tabel norma dan tanpa penilaian manusia:
1. Tiap pilihan diberi nilai 1 sampai 5: STS = 1, TS = 2, N = 3, S = 4, SS = 5.
2. Butir reverse (16 dari 44, ditandai R pada peta di bawah) dibalik: nilai = 6 - nilai pilihan. Pilihan Netral tetap bernilai 3.
3. Nilai butir dijumlahkan per dimensi.
4. Persentase = skor dimensi / skor maksimum dimensi x 100%. Skor maksimum = 5 x jumlah butir dimensi (Extraversion 40, Agreeableness 45, Conscientiousness 45, Neuroticism 40, Openness to Experience 50).

Peta butir per dimensi (R = reverse):
Extraversion (Ekstraversi), 8 butir (skor maks. 40): 1, 6R, 11, 16, 21R, 26, 31R, 36
Agreeableness (Keramahan), 9 butir (skor maks. 45): 2R, 7, 12R, 17, 22, 27R, 32, 37R, 42
Conscientiousness (Kehati-hatian), 9 butir (skor maks. 45): 3, 8R, 13, 18R, 23R, 28, 33, 38, 43R
Neuroticism (Neurotisisme), 8 butir (skor maks. 40): 4, 9R, 14, 19, 24R, 29, 34R, 39
Openness to Experience (Keterbukaan), 10 butir (skor maks. 50): 5, 10, 15, 20, 25, 30, 35R, 40, 41R, 44

Kelima dimensi berdiri sendiri: di prototipe hasilnya tidak dijumlahkan menjadi satu skor total dan tidak disajikan sebagai peringkat. Layar hasil peserta hanya menampilkan penafsiran tiap dimensi (tanpa skor, persentase, atau batang); skor dan persentase hanya untuk tampilan psikolog atau admin. Penafsiran tiap dimensi ada di bagian Materi.

Tangkapan layar hasil di prototipe:
⟦gambar:gambar/psikoteskerja/big-five-hasil.webp⟧
Layar hasil peserta: penafsiran tiap dimensi untuk skor tinggi dan skor rendah.`,
  catatan: `Belum ditetapkan di sumber: (1) ambang kategori tinggi / sedang / rendah. Sumber memakai istilah itu tetapi tidak pernah menyebut angka pemisahnya, jadi prototipe tidak mencetak label kategori dan menampilkan kedua kutub penafsiran berdampingan. (2) Batas kewajaran pola jawaban: sumber menyebut "terlalu sering memilih Netral" dan "hindari Sangat Setuju untuk hampir semua pernyataan" tanpa angka. (3) Perlakuan butir yang kosong saat waktu habis.

Skor Neuroticism yang tinggi adalah sinyal negatif, kebalikan dari empat dimensi lain; jangan diwarnai dengan anggapan "tinggi = baik".

Teks butir 1-25 berasal dari tabel Contoh Soal dokumen sumber, butir 26-44 dari Form Scribd 544007455; kunci dimensi dan reverse mengikuti tabel Cara Menghitung Hasil pada form itu. Kalau ada selisih, prototipe memakai rumus dokumen (skor maksimum = 5 x jumlah butir), bukan angka cetakan Form Scribd.`,
  materi: [
    {
      nama: 'Extraversion (Ekstraversi), 8 butir',
      catatan: 'Kecenderungan dalam bersosialisasi atau berinteraksi dengan orang lain, cenderung suka ngobrol dan extrovert. Bila skor tinggi: Individu dengan skor yang tinggi pada extraversion, cenderung penuh dengan kasih sayang, periang, banyak bicara, suka berkumpul dan menyukai kesenangan, sehingga menjadikan ia sangat mudah bergaul, energik, ambisius, workaholic serta ramah dengan orang lain. Bila skor rendah: Sebaliknya jika skor extraversion rendah akan terjadi perilaku yang berdiam diri, pasif dan kurang mampu mengungkapkan perasaan.',
    },
    {
      nama: 'Agreeableness (Keramahan), 9 butir',
      catatan: 'Kecenderungan untuk mematuhi atau mengikuti norma yang ada dalam kelompok, mencari harmoni, menghindari konflik, mudah membangun empati pada orang lain, serta ringan tangan membantu orang lain. Bila skor tinggi: Skor agreeableness yang tinggi menandakan kecenderungan memiliki kepercayaan penuh, dermawan, suka mengalah, penerima dan baik hati dan menghindari konflik. Bila skor rendah: Sedangkan skor yang rendah menunjukkan mudah curiga, kikir, tidak ramah, mudah tersinggung dan kurang kooperatif.',
    },
    {
      nama: 'Conscientiousness (Kehati-hatian), 9 butir',
      catatan: 'Kecenderungan untuk teratur dan disiplin dalam mencapai tujuan; memiliki ketekunan dan konsistensi untuk mengerjakan sebuah pekerjaan. Bila skor tinggi: Conscientiousness digambarkan dengan individu yang patuh, terkontrol, teratur, berfokus pada pencapaian dan disiplin. Mereka pekerja keras, cermat, tepat waktu dan tekun. Bila skor rendah: Sebaliknya pada skor yang rendah cenderung tidak teratur, lalai, pemalas dan tidak memiliki tujuan serta mudah menyerah ketika menemukan kesulitan dalam tugas-tugasnya.',
    },
    {
      nama: 'Neuroticism (Neurotisisme), 8 butir',
      catatan: 'Kecenderungan dalam menghadapi emosi negatif yang dirasakan, kecenderungan seseorang untuk mudah berubah suasana hatinya (moody); mudah stress dan terlalu khawatir dengan banyak hal. Bila skor tinggi: Individu yang memiliki skor tinggi pada neuroticism cenderung mengalami kecemasan, temperamental, mengasihi diri sendiri, emosional dan rentan terhadap gangguan stres. Bila skor rendah: Seseorang yang memiliki skor neuroticism yang rendah akan lebih gembira dan puas terhadap hidup, tenang dan tidak mudah emosional.',
    },
    {
      nama: 'Openness to Experience (Keterbukaan), 10 butir',
      catatan: 'Kecenderungan untuk terbuka terhadap pengalaman, gagasan-gagasan baru, imajinatif, dan ide-ide baru. Bila skor tinggi: Karakter openness yang tinggi biasanya bercirikan individu yang mudah dalam melakukan penyesuaian terhadap situasi atau ide baru, mudah bertoleransi. Bila skor rendah: Sedangkan pada skor openness yang rendah digambarkan dengan individu yang berpikiran sempit, konservatif dan tidak menyukai adanya perbedaan.',
    },
  ],
  contoh,
};
