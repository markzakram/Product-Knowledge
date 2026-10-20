import type { Kelompok } from '@/lib/skema';

/**
 * Contoh soal Tes Psikologi PT KAI, dari dokumen "JadiBUMN - Riset Psikologi PT KAI"
 * (BAB II Contoh Soal).
 *
 * Penanda gambar ⟦gambar:...⟧ dipasang apa adanya di tempat gambarnya muncul di riset:
 * rumus dan angka pada Tes Hitung Cepat serta Matematika Umum memang berupa gambar di
 * riset, begitu juga soal Tes Bangun Ruang. Berkasnya ada di public/gambar/jadibumn/;
 * nama berkas berakhiran nomor urut gambar di riset (kai-psikologi-NNN).
 *
 * Kunci dan pembahasan diambil dari riset, kecuali Tes Bangun Ruang: riset hanya memuat
 * gambar soalnya, tanpa kunci dan pembahasan, sehingga keduanya disusun dari membaca
 * gambar (lihat catatan di tiap soalnya). Semua soal berstatus 'draft'.
 *
 * Tes EPPS, Pauli, Wartegg, DAP, dan Baum di riset hanya berupa tautan ke dokumen
 * "AllPlatform - Riset Tes Psikologi"; contoh soalnya dipakai ulang dari Psikotes Kerja
 * (lihat t3-psikologi.ts).
 */

/** 2.1.1 dan 2.1.2 Tes Verbal: dua kata yang dipilih dari lima pilihan (Multiple Choice Multiple Answer). */
export const contohVerbal: Kelompok[] = [
  {
    soal: [
      {
        nomor: 1,
        tipe: 'pg_kompleks',
        pertanyaan: `Sinonim. Pilihlah dua kata yang memiliki arti sama atau paling dekat.`,
        opsi: [
          { label: 'A', teks: `Seri` },
          { label: 'B', teks: `Kalah` },
          { label: 'C', teks: `Juara` },
          { label: 'D', teks: `Kampiun` },
          { label: 'E', teks: `Grup` },
        ],
        kunci: 'C, D',
        pembahasan: `Kata juara dan kampiun memiliki makna yang sama, yaitu orang atau pihak yang menjadi pemenang dalam suatu pertandingan atau perlombaan. Oleh karena itu, jawaban yang tepat adalah C dan D.`,
        status: 'draft',
      },
      {
        nomor: 2,
        tipe: 'pg_kompleks',
        pertanyaan: `Sinonim. Pilihlah dua kata yang memiliki arti sama atau paling dekat.`,
        opsi: [
          { label: 'A', teks: `Kontras` },
          { label: 'B', teks: `Berbeda` },
          { label: 'C', teks: `Serupa` },
          { label: 'D', teks: `Bercahaya` },
          { label: 'E', teks: `Gelas` },
        ],
        kunci: 'A, B',
        pembahasan: `Kata kontras dan berbeda memiliki makna yang paling dekat. Kata kontras menunjukkan perbedaan yang terlihat jelas atau mencolok, sedangkan berbeda berarti tidak sama. Oleh karena itu, jawaban yang tepat adalah A dan B.`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      {
        nomor: 3,
        tipe: 'pg_kompleks',
        pertanyaan: `Antonim. Pilihlah dua kata yang maknanya saling bertentangan.`,
        opsi: [
          { label: 'A', teks: `Mangku` },
          { label: 'B', teks: `Daku` },
          { label: 'C', teks: `Kakak` },
          { label: 'D', teks: `Engkau` },
          { label: 'E', teks: `Nenek` },
        ],
        kunci: 'B, D',
        pembahasan: `Kata daku berarti aku atau orang pertama, sedangkan engkau (pilihan D) adalah orang kedua atau lawan bicara. Dalam penggunaan kata ganti, keduanya menunjukkan pihak yang berlawanan, yaitu pembicara dan lawan bicara. Oleh karena itu, jawaban yang dimaksud adalah B dan D.`,
        status: 'draft',
      },
      {
        nomor: 4,
        tipe: 'pg_kompleks',
        pertanyaan: `Antonim. Pilihlah dua kata yang maknanya saling bertentangan.`,
        opsi: [
          { label: 'A', teks: `Jazirah` },
          { label: 'B', teks: `Selat` },
          { label: 'C', teks: `Danau` },
          { label: 'D', teks: `Teluk` },
          { label: 'E', teks: `Nusa` },
        ],
        kunci: 'A, D',
        pembahasan: `Jazirah adalah daratan yang sebagian besar sisinya dikelilingi oleh perairan, sedangkan teluk adalah bagian perairan yang menjorok ke daratan dan sebagian besar sisinya dikelilingi oleh daratan. Keduanya menunjukkan bentuk geografis yang berkebalikan. Oleh karena itu, jawaban yang tepat adalah A dan D.`,
        status: 'draft',
      },
    ],
  },
];

/** 2.2 Tes Hitung Cepat: soal dan opsi berupa gambar di riset. */
export const contohHitungCepat: Kelompok[] = [
  {
    soal: [
      {
        nomor: 1,
        tipe: 'pg',
        pertanyaan: `⟦gambar:gambar/jadibumn/f8e3e680c5e709c7-kai-psikologi-002.png⟧`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jadibumn/4051d44267e812af-kai-psikologi-003.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jadibumn/59fdea0dd80fad99-kai-psikologi-004.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jadibumn/7b4cd9e1f2795108-kai-psikologi-005.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jadibumn/212c46b5aa6708f6-kai-psikologi-006.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jadibumn/4b2b8b4d4ab0367d-kai-psikologi-007.png⟧` },
        ],
        kunci: 'A',
        pembahasan: `Kerjakan operasi di dalam tanda kurung terlebih dahulu.
⟦gambar:gambar/jadibumn/b9c46c14076e3d14-kai-psikologi-008.png⟧
Kemudian, kalikan hasilnya dengan ⟦gambar:gambar/jadibumn/f56a94a735c66afa-kai-psikologi-009.png⟧.
⟦gambar:gambar/jadibumn/e662afbfdd610775-kai-psikologi-010.png⟧
Jadi, jawaban yang tepat adalah A.`,
        status: 'draft',
      },
      {
        nomor: 2,
        tipe: 'pg',
        pertanyaan: `⟦gambar:gambar/jadibumn/964ecf0d8967d19e-kai-psikologi-011.png⟧`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jadibumn/c77c822f4f390efb-kai-psikologi-012.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jadibumn/507ac29c152236e1-kai-psikologi-013.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jadibumn/7a761ee3cc8f75b4-kai-psikologi-014.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jadibumn/9c11c24a6c32845c-kai-psikologi-015.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jadibumn/212c6a63ab33be5f-kai-psikologi-016.png⟧` },
        ],
        kunci: 'A',
        pembahasan: `Jumlahkan ⟦gambar:gambar/jadibumn/afbfd5cd4056eb78-kai-psikologi-017.png⟧ dengan ⟦gambar:gambar/jadibumn/de33e6bb7f8c3f36-kai-psikologi-018.png⟧ terlebih dahulu.
⟦gambar:gambar/jadibumn/36cabaf189ea55ba-kai-psikologi-019.png⟧
Kemudian, kurangi hasilnya dengan ⟦gambar:gambar/jadibumn/0c6f81a58b6912c4-kai-psikologi-020.png⟧.
⟦gambar:gambar/jadibumn/98dbe42fefe9f2fb-kai-psikologi-021.png⟧
Karena ⟦gambar:gambar/jadibumn/196b97b393ab129f-kai-psikologi-022.png⟧, jawaban yang tepat adalah A.`,
        status: 'draft',
      },
    ],
  },
];

/** 2.3 Tes Matematika Umum: soal cerita; sebagian angka dan seluruh langkah hitung berupa gambar di riset. */
export const contohMatematikaUmum: Kelompok[] = [
  {
    soal: [
      {
        nomor: 1,
        tipe: 'pg',
        pertanyaan: `Usia Andi adalah tiga kali usia Budi. Tujuh tahun kemudian, usia Andi menjadi dua kali usia Budi. Berapakah usia Andi?`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jadibumn/bc142b9363a50916-kai-psikologi-023.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jadibumn/bc9382b84b18de86-kai-psikologi-024.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jadibumn/9dfa233f003519f4-kai-psikologi-025.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jadibumn/03dbd3aff42490b2-kai-psikologi-026.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jadibumn/dc72aa8e3fd7d57f-kai-psikologi-027.png⟧` },
        ],
        kunci: 'D',
        pembahasan: `Misalkan usia Budi saat ini adalah ⟦gambar:gambar/jadibumn/5888139df22a6da5-kai-psikologi-028.png⟧ tahun. Usia Andi adalah tiga kali usia Budi sehingga:
⟦gambar:gambar/jadibumn/40af62cd75c9a163-kai-psikologi-029.png⟧
Tujuh tahun kemudian, usia Andi menjadi dua kali usia Budi.
⟦gambar:gambar/jadibumn/9b2e6abf2a37aaea-kai-psikologi-030.png⟧
⟦gambar:gambar/jadibumn/4ca05d334c585026-kai-psikologi-031.png⟧
⟦gambar:gambar/jadibumn/610aa08b3045f33d-kai-psikologi-032.png⟧
Usia Andi saat ini adalah:
⟦gambar:gambar/jadibumn/9beab187358e3a37-kai-psikologi-033.png⟧
Jadi, jawaban yang tepat adalah D.`,
        status: 'draft',
      },
      {
        nomor: 2,
        tipe: 'pg',
        pertanyaan: `Seorang pedagang membeli ⟦gambar:gambar/jadibumn/db5c9939869e8994-kai-psikologi-034.png⟧ kodi buku gambar seharga ⟦gambar:gambar/jadibumn/d274700aa6f541a0-kai-psikologi-035.png⟧. Kemudian, ia menjual buku gambar tersebut per ⟦gambar:gambar/jadibumn/d9b121856d4090db-kai-psikologi-036.png⟧ lusin dan memperoleh keuntungan ⟦gambar:gambar/jadibumn/ce40ffe6f4165484-kai-psikologi-037.png⟧ per lusin. Berapakah total keuntungan yang didapat pedagang tersebut?`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jadibumn/f0490d1f28612808-kai-psikologi-038.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jadibumn/001f12f32b21441e-kai-psikologi-039.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jadibumn/d5b5935f303a35d5-kai-psikologi-040.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jadibumn/e5f1876254c62fa2-kai-psikologi-041.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jadibumn/45f9981ff4f98f0b-kai-psikologi-042.png⟧` },
        ],
        kunci: 'D',
        pembahasan: `Satu kodi terdiri atas ⟦gambar:gambar/jadibumn/68cb3fe90b84801d-kai-psikologi-043.png⟧ buah. Jumlah seluruh buku gambar adalah:
⟦gambar:gambar/jadibumn/3fa2d5e5bebda217-kai-psikologi-044.png⟧
Satu lusin terdiri atas ⟦gambar:gambar/jadibumn/f56a94a735c66afa-kai-psikologi-045.png⟧ buah. Jumlah lusin yang dapat dijual adalah:
⟦gambar:gambar/jadibumn/685498481aa60629-kai-psikologi-046.png⟧
Keuntungan setiap lusin adalah ⟦gambar:gambar/jadibumn/ce40ffe6f4165484-kai-psikologi-047.png⟧. Total keuntungan pedagang adalah:
⟦gambar:gambar/jadibumn/eb785f23c13d6caa-kai-psikologi-048.png⟧
Jadi, jawaban yang tepat adalah D.`,
        status: 'draft',
      },
      {
        nomor: 3,
        tipe: 'pg',
        pertanyaan: `Reza berangkat kerja pukul ⟦gambar:gambar/jadibumn/149840f95a17aced-kai-psikologi-049.png⟧ menggunakan sepeda motor dengan kecepatan tetap. Reza menempuh jarak ⟦gambar:gambar/jadibumn/db5c9939869e8994-kai-psikologi-050.png⟧ km dalam waktu ⟦gambar:gambar/jadibumn/c659ebfb489fe65d-kai-psikologi-051.png⟧ menit. Pada pukul berapa ia sampai di kantornya apabila jarak yang harus ditempuh adalah ⟦gambar:gambar/jadibumn/03dbd3aff42490b2-kai-psikologi-052.png⟧ km?`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jadibumn/3cfc30c4bed31cf2-kai-psikologi-053.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jadibumn/21d7a1c76dc19ba6-kai-psikologi-054.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jadibumn/3ec51004950f8836-kai-psikologi-055.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jadibumn/870ad226f9913d0c-kai-psikologi-056.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jadibumn/9df8a60ba4345d91-kai-psikologi-057.png⟧` },
        ],
        kunci: 'B',
        pembahasan: `Waktu yang diperlukan untuk menempuh jarak ⟦gambar:gambar/jadibumn/03dbd3aff42490b2-kai-psikologi-058.png⟧ km dapat dihitung dengan perbandingan senilai.
⟦gambar:gambar/jadibumn/370dca01479cce90-kai-psikologi-059.png⟧
⟦gambar:gambar/jadibumn/ce6606efc8f86a9b-kai-psikologi-060.png⟧
⟦gambar:gambar/jadibumn/93351e2bd9e3e34e-kai-psikologi-061.png⟧
Reza berangkat pukul ⟦gambar:gambar/jadibumn/149840f95a17aced-kai-psikologi-062.png⟧. Setelah menempuh perjalanan selama ⟦gambar:gambar/jadibumn/835afabc7a3b6c21-kai-psikologi-063.png⟧ menit, waktu kedatangannya adalah:
⟦gambar:gambar/jadibumn/1ff79e223129efa4-kai-psikologi-064.png⟧
Jadi, jawaban yang tepat adalah B.`,
        status: 'draft',
      },
      {
        nomor: 4,
        tipe: 'pg',
        pertanyaan: `Seorang peternak memiliki persediaan bahan makanan bagi ⟦gambar:gambar/jadibumn/a1bbc3bcd955525d-kai-psikologi-065.png⟧ ekor ayam selama ⟦gambar:gambar/jadibumn/c2558825064e98b0-kai-psikologi-066.png⟧ hari. Jika ia menjual ⟦gambar:gambar/jadibumn/68cb3fe90b84801d-kai-psikologi-067.png⟧ ekor ayam, bahan makanan tersebut akan habis dalam waktu berapa hari?`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jadibumn/9e649f5967a0f737-kai-psikologi-068.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jadibumn/475f1582d561caee-kai-psikologi-069.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jadibumn/7afc8d2ef2d7ae5f-kai-psikologi-070.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jadibumn/4f4beb795de64705-kai-psikologi-071.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jadibumn/25c4c7de935e3f72-kai-psikologi-072.png⟧` },
        ],
        kunci: 'A',
        pembahasan: `Setelah ⟦gambar:gambar/jadibumn/68cb3fe90b84801d-kai-psikologi-073.png⟧ ekor ayam dijual, jumlah ayam yang tersisa adalah:
⟦gambar:gambar/jadibumn/b7215933321d6349-kai-psikologi-074.png⟧
Jumlah ayam dan lama persediaan makanan merupakan perbandingan berbalik nilai. Semakin sedikit jumlah ayam, semakin lama makanan tersebut akan habis.
⟦gambar:gambar/jadibumn/7b9faf53688709c1-kai-psikologi-075.png⟧
⟦gambar:gambar/jadibumn/e46386791bc0fcca-kai-psikologi-076.png⟧
⟦gambar:gambar/jadibumn/c5dcde2f07e37145-kai-psikologi-077.png⟧
Jadi, jawaban yang tepat adalah A.`,
        status: 'draft',
      },
    ],
  },
];

/**
 * 2.4 Tes Bangun Ruang. Gambar soal di riset memuat bangun atau jaring-jaringnya sekaligus
 * kalimat soal dan kelima pilihan (A sampai E), jadi `opsi` dikosongkan: huruf pilihan
 * diturunkan otomatis dan kunci ditulis berupa huruf.
 *
 * Riset tidak memberi kunci maupun pembahasan. Keduanya DISUSUN dari membaca gambar,
 * bukan dari riset, sehingga perlu dicek tim akademik sebelum dipakai sebagai acuan.
 */
export const contohBangunRuang: Kelompok[] = [
  {
    soal: [
      {
        nomor: 1,
        tipe: 'pg',
        pertanyaan: `⟦gambar:gambar/jadibumn/a344b1c57080404d-kai-psikologi-078.png⟧`,
        kunci: 'B',
        pembahasan: `Kunci dan pembahasan ini disusun dari membaca gambar soal, bukan dari dokumen riset.

Jaring-jaring terdiri atas satu pita tujuh bidang yang dibatasi lipatan dan dua bidang tutup yang masing-masing berlekuk huruf V di tengah sisi luarnya. Kedua lekuk V sama bentuknya dan terletak tepat di tengah, dengan bahu kiri dan kanan yang sama lebar. Setelah dilipat, terbentuk balok dengan alur V yang simetris di bagian atasnya.
- A tidak sesuai: sisi baloknya miring dan alurnya tidak simetris karena salah satu dindingnya tegak.
- C dan D tidak sesuai: alur V hanya memiliki bahu di satu sisi, sedangkan sisi lainnya langsung berupa dinding alur.
- E tidak sesuai: lekukannya bukan alur V yang simetris.
Jadi, jawaban yang tepat adalah B.`,
        status: 'draft',
      },
      {
        nomor: 2,
        tipe: 'pg',
        pertanyaan: `⟦gambar:gambar/jadibumn/cc3a253848914249-kai-psikologi-079.png⟧`,
        kunci: 'D',
        pembahasan: `Kunci dan pembahasan ini disusun dari membaca gambar soal, bukan dari dokumen riset.

Kubus pada soal memperlihatkan tiga bidang yang bertemu di satu sudut: bidang depan bergambar belah ketupat hitam, bidang kiri bergambar pita diagonal hitam, dan bidang bawah bergambar segitiga hitam bertangkai (segitiga yang alasnya di tepi bidang dan garis lurus dari ujungnya sampai tepi seberang). Pada jaring-jaring yang benar, ketiga bidang itu harus saling bersebelahan dengan syarat berikut.
1. Alas segitiga menempel pada sisi yang berbatasan dengan bidang belah ketupat.
2. Ujung pita diagonal yang runcing berada di sudut tempat ketiga bidang bertemu, menempel pada sisi yang berbatasan dengan bidang belah ketupat. Ujungnya yang tebal berada di sudut seberangnya.
- A tidak sesuai: alas segitiga tidak berbatasan dengan bidang belah ketupat.
- B tidak sesuai: pita diagonal terbalik, ujung tebalnya berada di sudut pertemuan tiga bidang.
- C tidak sesuai: pita diagonal tercermin sehingga ujung runcingnya tidak berada di sudut pertemuan tiga bidang.
- E tidak sesuai: tidak ada bidang belah ketupat.
Jadi, jawaban yang tepat adalah D.`,
        status: 'draft',
      },
    ],
  },
];

/**
 * 2.10 Tes Ketelitian: dua susunan karakter dibandingkan, jawaban S (sama) atau T (tidak sama).
 * Pilihan di riset ditulis "A. S" dan "B. T"; di sini hurufnya langsung S dan T, mengikuti
 * Tes Ketelitian di Psikotes Kerja.
 */
export const contohKetelitian: Kelompok[] = [
  {
    soal: [
      {
        nomor: 1,
        tipe: 'pg',
        pertanyaan: `Kolom 1: Robert Pattinson
Kolom 2: Robert Pattinson`,
        opsi: [
          { label: 'S', teks: `Kedua susunan sama` },
          { label: 'T', teks: `Kedua susunan tidak sama` },
        ],
        kunci: 'S',
        pembahasan: `Kedua tulisan sama persis, yaitu Robert Pattinson. Oleh karena itu, jawabannya adalah S.`,
        status: 'draft',
      },
      {
        nomor: 2,
        tipe: 'pg',
        pertanyaan: `Kolom 1: Kot65465345
Kolom 2: Kot65466345`,
        opsi: [
          { label: 'S', teks: `Kedua susunan sama` },
          { label: 'T', teks: `Kedua susunan tidak sama` },
        ],
        kunci: 'T',
        pembahasan: `Kedua tulisan berbeda pada bagian angka, yaitu 65465345 dan 65466345. Oleh karena itu, jawabannya adalah T.`,
        status: 'draft',
      },
      {
        nomor: 3,
        tipe: 'pg',
        pertanyaan: `Kolom 1: 6^T%$F7(34!H#
Kolom 2: 6^T%$F7(34!H#`,
        opsi: [
          { label: 'S', teks: `Kedua susunan sama` },
          { label: 'T', teks: `Kedua susunan tidak sama` },
        ],
        kunci: 'S',
        pembahasan: `Kedua susunan huruf, angka, dan simbol sama persis, yaitu 6^T%$F7(34!H#. Oleh karena itu, jawabannya adalah S.`,
        status: 'draft',
      },
    ],
  },
];

/**
 * 2.5 Tes Deskripsi Diri: contoh jawaban Kelebihan dan Kekurangan (bagian 9, 20 poin) dari riset.
 * Nomor 10 dan 11 melanjutkan sembilan bagian yang dipakai ulang dari Psikotes Kerja.
 * Uraian bebas, tidak ada kunci; riset menyebutnya "contoh jawaban", bukan jawaban yang dinilai.
 */
export const contohKelebihanKekurangan: Kelompok[] = [
  {
    soal: [
      {
        nomor: 10,
        tipe: 'uraian',
        pertanyaan: `Contoh jawaban bagian 9: Kelebihan Diri
Tuliskan kelebihan yang menggambarkan dirimu berdasarkan kondisi dan pengalaman sebenarnya, satu poin pada setiap kolom jawaban.`,
        kunci: '',
        tanpaKunci: true,
        pembahasan: `Tidak ada kunci atau skor. Berikut contoh jawaban kelebihan dari riset PT KAI (sebagian dari 20 poin; hanya ilustrasi, bukan jawaban yang harus ditiru):
1. Saya adalah orang yang teliti, sehingga dipercaya menjadi bendahara kelas.
2. Saya ingin menjadi masinis yang andal.
3. Saya orang yang jarang telat karena disiplin dan menghargai waktu.
4. Saya orang yang aktif memberikan pendapat saat diskusi.
5. Saya sering mengevaluasi pekerjaan setelah menyelesaikannya.
6. Saya selalu aktif berkontribusi dalam setiap tugas kelompok.
7. Saya senang belajar hal baru karena saya senang mengembangkan keterampilan dan pengetahuan.
8. Saya percaya setiap tantangan adalah kesempatan untuk belajar dan berkembang.
9. Saya mampu bersikap tenang dan tidak terburu-buru.`,
        status: 'draft',
      },
      {
        nomor: 11,
        tipe: 'uraian',
        pertanyaan: `Contoh jawaban bagian 9: Kekurangan Diri
Tuliskan kekurangan yang menggambarkan dirimu berdasarkan kondisi dan pengalaman sebenarnya, satu poin pada setiap kolom jawaban.`,
        kunci: '',
        tanpaKunci: true,
        pembahasan: `Tidak ada kunci atau skor. Berikut contoh jawaban kekurangan dari riset PT KAI (sebagian dari 20 poin; hanya ilustrasi, bukan jawaban yang harus ditiru):
1. Saya terlalu perfeksionis, sehingga pekerjaan terlalu lama karena detail kecil.
2. Saya kurang sabaran, karena ingin pekerjaan selesai dengan cepat.
3. Saya masih asing dengan sebagian besar istilah perkeretaapian.
4. Saya tidak memiliki kemampuan Bahasa Inggris yang lancar.
5. Saya termasuk orang yang kurang rapi.
6. Saya terkadang lupa dengan nama rekan sendiri.`,
        status: 'draft',
      },
    ],
  },
];
