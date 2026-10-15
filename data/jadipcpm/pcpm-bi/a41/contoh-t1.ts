import type { Kelompok } from '@/lib/skema';

/**
 * Contoh soal PCPM 41 Seleksi Potensi Dasar, cuplikan dari bank soal pejuang.berkarirbi.id
 * (Booster dan Tryout).
 *
 * Dihasilkan oleh skrip/impor-berkarirbi.mjs dan DITIMPA setiap skrip dijalankan:
 * suntingan tangan di berkas ini hilang. Dipasang ke subtes lewat t1-seleksi-potensi-dasar.ts
 * (di `contoh:`, sesudah contoh tulisan tangan); nama ekspornya jangan diubah.
 * Status 'direview': belum diperiksa ulang untuk keperluan etalase.
 */
/** 10 soal "Verbal" dari 5 paket Booster dan Tryout. */
export const contohVerbalBerkarir: Kelompok[] = [
  {
    stimulus: { isi: `Markas komando melakukan audit teknis terhadap tujuh unit kendaraan taktis (rantis) dari Divisi Kavaleri, yaitu M, N, O, P, Q, R, dan S. Tiga rantis di antaranya menggunakan mesin diesel, dua rantis menggunakan mesin hibrida, dan sisanya menggunakan mesin turbin. Unit O dan P dikonfirmasi menggunakan mesin diesel, sedangkan Q dan R menggunakan mesin hibrida. Hanya O dan P yang memiliki status "Perbaikan Berat", sementara sisanya berstatus "Siap Tempur". Semua unit yang menggunakan mesin hibrida dilarang ditempatkan di Hanggar Utama, sementara untuk unit bermesin diesel hanya O yang tidak ditempatkan di Hanggar Utama, dan empat rantis sisanya wajib ditempatkan di Hanggar Utama.` },
    soal: [
    {
      nomor: 3,
      tipe: 'benar_salah',
      pertanyaan: `Jika salah satu rantis bermesin turbin berstatus Siap Tempur adalah unit S, maka rantis bermesin diesel yang ditempatkan di Hanggar Utama berjumlah tepat dua unit.`,
      opsi: [
        { label: 'A', teks: `Benar` },
        { label: 'B', teks: `Salah` },
        { label: 'C', teks: `Tidak Dapat Ditentukan` },
      ],
      kunci: `A`,
      pembahasan: `⟦gambar:gambar/jadipcpm/818144ce167f29c0-256a.png⟧`,
      status: 'direview',
    },
    {
      nomor: 4,
      tipe: 'benar_salah',
      pertanyaan: `Jika rantis N dikonfirmasi merupakan unit bermesin turbin, maka rantis M sudah pasti merupakan unit bermesin diesel.`,
      opsi: [
        { label: 'A', teks: `Benar` },
        { label: 'B', teks: `Salah` },
        { label: 'C', teks: `Tidak Dapat Ditentukan` },
      ],
      kunci: `B`,
      pembahasan: `⟦gambar:gambar/jadipcpm/10b27f90a6605aea-256b.png⟧`,
      status: 'direview',
    },
    ],
  },
  {
    stimulus: { isi: `Sebuah transaksi digital harus melewati lima protokol keamanan (Alpha, Bravo, Charlie, Delta, dan Echo) sebelum masuk ke dalam blockchain. Transaksi memiliki dua status "Unverified" (Belum Terverifikasi) atau "Verified" (Terverifikasi).

Aturan Operasi:
1. Protokol Bravo adalah pintu masuk pertama dan secara otomatis memberikan status awal "Unverified".
2. Protokol Echo berada di urutan tepat setelah Bravo. Protokol ini akan membalikkan status (dari "Unverified" menjadi "Verified", atau sebaliknya).
3. Protokol Delta berada di urutan keempat. Protokol ini memiliki aturan unik: Status keluar akan menjadi "Verified" hanya jika protokol sebelumnya (urutan ketiga) memberikan status "Unverified". Jika tidak, status tetap sama.
4. Protokol Alpha berada di urutan terakhir dan merupakan syarat mutlak. Transaksi hanya bisa diproses jika masuk dengan status "Verified". Jika masuk sebagai "Unverified", transaksi hangus (Gagal).
5. Protokol Charlie berada di urutan ketiga. Protokol ini tidak mengubah status apa pun yang diterimanya (status masuk = status keluar).` },
    soal: [
    {
      nomor: 5,
      tipe: 'benar_salah',
      pertanyaan: `Jika status awal adalah Verified, maka transaksi akan lolos masuk ke dalam blockchain`,
      opsi: [
        { label: 'A', teks: `Benar` },
        { label: 'B', teks: `Salah` },
        { label: 'C', teks: `Tidak Dapat Ditentukan` },
      ],
      kunci: `A`,
      pembahasan: `⟦gambar:gambar/jadipcpm/56d28f46535e4ab3-274a.png⟧`,
      status: 'direview',
    },
    {
      nomor: 6,
      tipe: 'benar_salah',
      pertanyaan: `Jika Protokol Bravo dinonaktifkan sehingga status awal transaksi ditentukan oleh sistem enkripsi luar, maka transaksi dipastikan gagal masuk ke blockchain.`,
      opsi: [
        { label: 'A', teks: `Benar` },
        { label: 'B', teks: `Salah` },
        { label: 'C', teks: `Tidak Dapat Ditentukan` },
      ],
      kunci: `B`,
      pembahasan: `⟦gambar:gambar/jadipcpm/de54b5a198041cd0-274b.png⟧`,
      status: 'direview',
    },
    ],
  },
  {
    stimulus: { isi: `Dalam rangka audit tahunan, lima auditor (Andi, Beni, Cici, Doni, dan Eli) ditugaskan untuk memeriksa dua departemen berbeda: Departemen Pajak dan Departemen SDM. Audit dilakukan selama lima hari (Senin sampai Jumat) dengan dua sesi setiap harinya (Pagi dan Siang). Setiap auditor harus mempresentasikan kedua laporan departemen tersebut pada waktu yang berbeda.
Informasi yang diketahui:
1. Andi memeriksa Departemen Pajak pada hari Senin pagi.
2. Departemen SDM oleh Eli dijadwalkan tepat satu hari setelah Departemen SDM oleh Andi.
3. Sesi Siang pada hari Rabu khusus untuk pemeriksaan Departemen Pajak.
4. Doni memeriksa Departemen SDM pada hari Jumat siang.
5. Sesi Pagi hari Selasa dan Kamis selalu diisi oleh pemeriksaan Departemen Pajak.
6. Cici memeriksa Departemen Pajak pada hari yang sama dengan Doni memeriksa Departemen SDM.
7. Pemeriksaan Departemen SDM oleh Beni dilakukan pada hari Selasa siang.
8. Andi memeriksa Departemen SDM dua hari sebelum Doni memeriksa Departemen SDM.
9. Cici memeriksa Departemen SDM pada hari Senin siang.
10. Laporan Departemen Pajak oleh Eli dan Beni harus dijadwalkan pada hari Selasa atau Kamis pagi secara bergantian.` },
    soal: [
    {
      nomor: 7,
      tipe: 'benar_salah',
      pertanyaan: `Eli mempresentasikan laporan Departemen Pajak pada hari Kamis pagi.`,
      opsi: [
        { label: 'A', teks: `Benar` },
        { label: 'B', teks: `Salah` },
        { label: 'C', teks: `Tidak Dapat Ditentukan` },
      ],
      kunci: `C`,
      pembahasan: `⟦gambar:gambar/jadipcpm/0865e258d7ab1506-251a.png⟧`,
      status: 'direview',
    },
    {
      nomor: 8,
      tipe: 'benar_salah',
      pertanyaan: `Departemen SDM oleh Cici dan Departemen Pajak oleh Andi dilakukan pada hari yang sama.`,
      opsi: [
        { label: 'A', teks: `Benar` },
        { label: 'B', teks: `Salah` },
        { label: 'C', teks: `Tidak Dapat Ditentukan` },
      ],
      kunci: `A`,
      pembahasan: `⟦gambar:gambar/jadipcpm/6c94b4b38ae85335-251b.png⟧`,
      status: 'direview',
    },
    ],
  },
  {
    stimulus: { isi: `Empat orang aktivis, yaitu Gani, Hesti, Indra, dan Juna, mengikuti seleksi untuk menjadi Koordinator Lapangan. Ada tiga aspek yang dinilai: Manajemen Konflik, Perencanaan Anggaran, dan Komunikasi Publik.

Aturan Seleksi:
1. Peringkat diberikan dari 1 (terbaik) hingga 4 (terendah). Tidak ada peringkat yang sama untuk aspek yang sama.
2. Kandidat dinyatakan LULUS jika:
- Tidak memiliki Peringkat 4 di aspek apa pun.
- Memiliki setidaknya satu aspek di Peringkat 1.
3. Indra meraih Peringkat 1 di Perencanaan Anggaran, namun ia berada di posisi terendah pada Komunikasi Publik.
4. Gani memiliki peringkat yang sama untuk Manajemen Konflik dan Perencanaan Anggaran.
5. Peringkat Komunikasi Publik Hesti lebih baik daripada Juna, tetapi lebih rendah daripada Gani.
6. Pada Manajemen Konflik, Juna berada tepat satu peringkat di atas Indra.
7. Peringkat Perencanaan Anggaran Hesti adalah 4.
8. Peringkat Manajemen Konflik Gani bukan yang terbaik, tapi bukan yang terburuk.` },
    soal: [
    {
      nomor: 9,
      tipe: 'benar_salah',
      pertanyaan: `Juna dikategorikan tidak lolos`,
      opsi: [
        { label: 'A', teks: `Benar` },
        { label: 'B', teks: `Salah` },
        { label: 'C', teks: `Tidak Dapat Ditentukan` },
      ],
      kunci: `C`,
      pembahasan: `⟦gambar:gambar/jadipcpm/8274d81148d341b3-297a.png⟧`,
      status: 'direview',
    },
    {
      nomor: 10,
      tipe: 'benar_salah',
      pertanyaan: `Gani atau Hesti dinyatakan lolos`,
      opsi: [
        { label: 'A', teks: `Benar` },
        { label: 'B', teks: `Salah` },
        { label: 'C', teks: `Tidak Dapat Ditentukan` },
      ],
      kunci: `A`,
      pembahasan: `⟦gambar:gambar/jadipcpm/fc7d20a3b431315f-297b.png⟧`,
      status: 'direview',
    },
    ],
  },
  {
    stimulus: { isi: `Sebuah tim pengembang sedang membagi tugas untuk mengerjakan lima modul keamanan yang wajib dikerjakan oleh semua tim, yaitu Firewall, Gateway, Hybrid-access, Identity-check, dan Journaling. Tim membagi beban kerja ke dalam tiga tim kecil: Tim Alfa, Tim Beta, dan Tim Gamma.

Aturan Penugasan:
1. Setiap tim mengerjakan jumlah modul yang berbeda, antara 2 sampai 4 modul.
2. Tim Gamma mengerjakan modul paling banyak, sedangkan Tim Alfa mengerjakan modul paling sedikit.
3. Modul Identity-check adalah modul inti yang wajib dikerjakan oleh semua tim.
4. Jika suatu tim mengerjakan modul Firewall, maka tim tersebut juga harus mengerjakan modul Journaling.
5. Modul Hybrid-access hanya boleh dikerjakan oleh tim yang mengerjakan tepat 3 modul atau lebih.
6. Jika suatu tim mengerjakan modul Gateway, maka tim tersebut tidak boleh mengerjakan modul Firewall.
7. Modul Journaling tidak boleh dikerjakan oleh Tim Alfa.
8. Modul Gateway wajib dikerjakan oleh Tim Beta.` },
    soal: [
    {
      nomor: 11,
      tipe: 'benar_salah',
      pertanyaan: `Tim Beta mengerjakan modul Gateway atau Journaling`,
      opsi: [
        { label: 'A', teks: `Benar` },
        { label: 'B', teks: `Salah` },
        { label: 'C', teks: `Tidak Dapat Ditentukan` },
      ],
      kunci: `A`,
      pembahasan: `⟦gambar:gambar/jadipcpm/3b31286aa7558d72-287a.png⟧`,
      status: 'direview',
    },
    {
      nomor: 12,
      tipe: 'benar_salah',
      pertanyaan: `Tim Gamma mengerjakan modul Gateway`,
      opsi: [
        { label: 'A', teks: `Benar` },
        { label: 'B', teks: `Salah` },
        { label: 'C', teks: `Tidak Dapat Ditentukan` },
      ],
      kunci: `B`,
      pembahasan: `⟦gambar:gambar/jadipcpm/4dcb6974d2713e9a-287b.png⟧`,
      status: 'direview',
    },
    ],
  },
];

/** 10 soal "Numerical" dari 10 paket Booster dan Tryout. */
export const contohNumerikBerkarir: Kelompok[] = [
  {
    soal: [
    {
      nomor: 2,
      tipe: 'isian_singkat',
      pertanyaan: `⟦gambar:gambar/jadipcpm/9925003175331563-513.png⟧`,
      kunci: `223`,
      pembahasan: `⟦gambar:gambar/jadipcpm/10bb5301d7dcf398-513x.png⟧`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 3,
      tipe: 'isian_singkat',
      pertanyaan: `⟦gambar:gambar/jadipcpm/6f9c62a3442c6f50-408.png⟧`,
      kunci: `924`,
      pembahasan: `⟦gambar:gambar/jadipcpm/1bebd08094df9107-408x.png⟧`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 4,
      tipe: 'isian_singkat',
      pertanyaan: `⟦gambar:gambar/jadipcpm/b07b6c405e4a32d4-538.png⟧`,
      kunci: `259`,
      pembahasan: `⟦gambar:gambar/jadipcpm/f9158aac5e4f56a4-538x.png⟧`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 5,
      tipe: 'isian_singkat',
      pertanyaan: `⟦gambar:gambar/jadipcpm/2b7212c8efaec6d1-423.png⟧`,
      kunci: `122`,
      pembahasan: `⟦gambar:gambar/jadipcpm/70c1223c1f615fa3-423x.png⟧`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 6,
      tipe: 'isian_singkat',
      pertanyaan: `⟦gambar:gambar/jadipcpm/dacd92843cfbbd67-563.png⟧`,
      kunci: `65`,
      pembahasan: `⟦gambar:gambar/jadipcpm/fd7261e517f2c83f-563x.png⟧`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 7,
      tipe: 'isian_singkat',
      pertanyaan: `⟦gambar:gambar/jadipcpm/bba120493cea4ef7-438.png⟧`,
      kunci: `27`,
      pembahasan: `⟦gambar:gambar/jadipcpm/b9beacda8cceace8-438x.png⟧`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 8,
      tipe: 'isian_singkat',
      pertanyaan: `⟦gambar:gambar/jadipcpm/a32198e603ae2015-588.png⟧`,
      kunci: `84`,
      pembahasan: `⟦gambar:gambar/jadipcpm/2c331cd10e1bd903-588x.png⟧`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 9,
      tipe: 'isian_singkat',
      pertanyaan: `⟦gambar:gambar/jadipcpm/dcda09bdda83fe62-453.png⟧`,
      kunci: `44`,
      pembahasan: `⟦gambar:gambar/jadipcpm/e2893da134a84934-453x.png⟧`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 10,
      tipe: 'isian_singkat',
      pertanyaan: `⟦gambar:gambar/jadipcpm/492ab401ea8aaabd-613.png⟧`,
      kunci: `21`,
      pembahasan: `⟦gambar:gambar/jadipcpm/bea53547af99c101-613x.png⟧`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 11,
      tipe: 'isian_singkat',
      pertanyaan: `⟦gambar:gambar/jadipcpm/017a3db623831ed1-468.png⟧`,
      kunci: `370`,
      pembahasan: `⟦gambar:gambar/jadipcpm/e0281ca8577c362e-468x.png⟧`,
      status: 'direview',
    },
    ],
  },
];

/** 10 soal "Digit Symbol" dari 10 paket Booster dan Tryout. */
export const contohDigitSimbolBerkarir: Kelompok[] = [
  {
    soal: [
    {
      nomor: 1,
      tipe: 'pg',
      pertanyaan: `⟦gambar:gambar/jadipcpm/6cac7f4c0f1c1b0a-28.png⟧`,
      opsi: [
        { label: 'A', teks: `E I F G H C A J D` },
        { label: 'B', teks: `E A C G H F I J D` },
        { label: 'C', teks: `E I C D H F A J G` },
        { label: 'D', teks: `E I C G H F A J D` },
        { label: 'E', teks: `E I C G H F A B D` },
      ],
      kunci: `D`,
      pembahasan: `Jawaban yang benar: E I C G H F A J D.`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 2,
      tipe: 'pg',
      pertanyaan: `⟦gambar:gambar/jadipcpm/b384e12af7643083-1072.png⟧`,
      opsi: [
        { label: 'A', teks: `B G J I H C D E A` },
        { label: 'B', teks: `J G B I H C D E A` },
        { label: 'C', teks: `B G J I H D C E A` },
        { label: 'D', teks: `B G J I H C D A E` },
        { label: 'E', teks: `B G J I C H D E A` },
      ],
      kunci: `A`,
      pembahasan: `Jawaban yang benar: B G J I H C D E A.`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 3,
      tipe: 'pg',
      pertanyaan: `⟦gambar:gambar/jadipcpm/df6fef9951c5d399-82.png⟧`,
      opsi: [
        { label: 'A', teks: `H E I D C` },
        { label: 'B', teks: `H G A I D` },
        { label: 'C', teks: `H E D F A` },
        { label: 'D', teks: `H D E F A` },
        { label: 'E', teks: `H G A F D` },
      ],
      kunci: `C`,
      pembahasan: `Jawaban yang benar: H E D F A.`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 4,
      tipe: 'pg',
      pertanyaan: `⟦gambar:gambar/jadipcpm/81d7b07b5a20ca65-982.png⟧`,
      opsi: [
        { label: 'A', teks: `G J F C B` },
        { label: 'B', teks: `D J F C B` },
        { label: 'C', teks: `G J C F B` },
        { label: 'D', teks: `G F J C B` },
        { label: 'E', teks: `G J F B C` },
      ],
      kunci: `A`,
      pembahasan: `Jawaban yang benar: G J F C B.`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 5,
      tipe: 'pg',
      pertanyaan: `⟦gambar:gambar/jadipcpm/9ef8eecce8c8c3f1-136.png⟧`,
      opsi: [
        { label: 'A', teks: `E F J C G D A H I` },
        { label: 'B', teks: `E F B J I G A C D` },
        { label: 'C', teks: `E H J C G D A F I` },
        { label: 'D', teks: `E F B H C A G I D` },
        { label: 'E', teks: `E F B D I G A C J` },
      ],
      kunci: `D`,
      pembahasan: `Jawaban yang benar: E F B H C A G I D.`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 6,
      tipe: 'pg',
      pertanyaan: `⟦gambar:gambar/jadipcpm/35fcc7a759fcb28d-964.png⟧`,
      opsi: [
        { label: 'A', teks: `B J A F I H C D G` },
        { label: 'B', teks: `B J F A D H C I G` },
        { label: 'C', teks: `B C F A I H J D G` },
        { label: 'D', teks: `J B F A I H C D G` },
        { label: 'E', teks: `B J F A I H C D G` },
      ],
      kunci: `E`,
      pembahasan: `Jawaban yang benar: B J F A I H C D G.`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 7,
      tipe: 'pg',
      pertanyaan: `⟦gambar:gambar/jadipcpm/14adf1f377d73be5-190.png⟧`,
      opsi: [
        { label: 'A', teks: `B C E A I` },
        { label: 'B', teks: `B G E A I` },
        { label: 'C', teks: `B G A E I` },
        { label: 'D', teks: `B C I E A` },
        { label: 'E', teks: `B G I A E` },
      ],
      kunci: `C`,
      pembahasan: `Jawaban yang benar: B G A E I.`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 8,
      tipe: 'pg',
      pertanyaan: `⟦gambar:gambar/jadipcpm/f93b50e7c8fcde57-874.png⟧`,
      opsi: [
        { label: 'A', teks: `E G I B F` },
        { label: 'B', teks: `E B G I F` },
        { label: 'C', teks: `F G B I E` },
        { label: 'D', teks: `E G B C F` },
        { label: 'E', teks: `E G B I F` },
      ],
      kunci: `E`,
      pembahasan: `Jawaban yang benar: E G B I F.`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 9,
      tipe: 'pg',
      pertanyaan: `⟦gambar:gambar/jadipcpm/c579ef3bc3f87d21-244.png⟧`,
      opsi: [
        { label: 'A', teks: `G D A J F I B C E` },
        { label: 'B', teks: `G J F D A I E H B` },
        { label: 'C', teks: `G J A D F I E B H` },
        { label: 'D', teks: `G D F J E I B C H` },
        { label: 'E', teks: `G J F D E I H B C` },
      ],
      kunci: `B`,
      pembahasan: `Jawaban yang benar: G J F D A I E H B.`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 10,
      tipe: 'pg',
      pertanyaan: `⟦gambar:gambar/jadipcpm/8d2d1765c049d1c8-856.png⟧`,
      opsi: [
        { label: 'A', teks: `I E C H A D G F J` },
        { label: 'B', teks: `I E C H D A F G J` },
        { label: 'C', teks: `I E C H A D F G J` },
        { label: 'D', teks: `E I C H A D F G J` },
        { label: 'E', teks: `I E C H A D F J G` },
      ],
      kunci: `C`,
      pembahasan: `Jawaban yang benar: I E C H A D F G J.`,
      status: 'direview',
    },
    ],
  },
];

/** 10 soal "Diagrammatical" dari 10 paket Booster dan Tryout. */
export const contohDiagrammaticalBerkarir: Kelompok[] = [
  {
    soal: [
    {
      nomor: 1,
      tipe: 'pg',
      pertanyaan: `⟦gambar:gambar/jadipcpm/ec50378b967aab5f-163.png⟧`,
      opsi: [
        { label: 'A', teks: `Set X` },
        { label: 'B', teks: `Set Y` },
        { label: 'C', teks: `Bukan Keduanya` },
      ],
      kunci: `C`,
      pembahasan: `Set X memiliki 2 bangun yang berbeda. Setiap bangun yang kecil sama dengan sejumlah sisi bangun yang besar dikurangi satu berwarna hitam dan putih.

Set Y memiliki 2 bangun yang berbeda. Setiap bangun yang kecil memiliki jumlah yang sama dengan sisi bangun yang besar berwarna hitam.

Dengan demikian, jawaban dari soal tersebut adalah Tidak keduanya, karena meskipun figure tersebut menunjukan bintang yang berjumlah dua, sama dengan sisi bangun yang besar, yaitu berjumlah dua (Set Y), tetapi bangun kecil yang mengitari berwarna putih.`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 2,
      tipe: 'pg',
      pertanyaan: `⟦gambar:gambar/jadipcpm/947b0bdcd440e29b-8.png⟧`,
      opsi: [
        { label: 'A', teks: `Set X` },
        { label: 'B', teks: `Set Y` },
        { label: 'C', teks: `Bukan Keduanya` },
      ],
      kunci: `A`,
      pembahasan: `Set X memiliki 2 aturan, yaitu setiap bentuk lingkaran dalam kotak yang berada di posisi pinggir akan berhadapan dengan bentuk setengah lingakaran di luar kotak. Posisi kotak tengah menentukan warna setengah lingkaran, jika posisi kotak tengah merupakan bentuk X maka bentuk setengah lingkaran berwarna hitam. Sedangkan jika posisi kotak tengah berbentuk O maka bentuk setengah lingkaran berwarna putih.

Set Y memiliki 2 aturan, yaitu setiap bentuk lingkaran dalam kotak yang berada di posisi pinggir akan berhadapan dengan bentuk setengah lingakaran di luar kotak. Posisi kotak tengah menentukan warna setengah lingkaran, jika posisi kotak tengah merupakan bentuk X maka bentuk setengah lingkaran berwarna hitam-putih. Sedangkan jika posisi kotak tengah berbentuk O maka bentuk setengah lingkaran berwarna hitam.

Dengan demikian  jawaban yang benar  adalah Set X. Karena figure tersebut menunjukkan posisi kotak tengah yang bentuk O dan warna setengah lingkaran diluar kotak adalah putih, hal ini mengakibatkan syarat Set X terpenuhi.`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 3,
      tipe: 'pg',
      pertanyaan: `⟦gambar:gambar/jadipcpm/1d33d12cc8012208-188.png⟧`,
      opsi: [
        { label: 'A', teks: `Set X` },
        { label: 'B', teks: `Set Y` },
        { label: 'C', teks: `Bukan Keduanya` },
      ],
      kunci: `C`,
      pembahasan: `Set X berisi bangun yang bersifat reflektif secara vertikal.

Set Y berisi bangun yang bersifat reflektif secara horizontal.

Dengan demikian, jawaban dari soal tersebut adalah tidak keduanya, tidak menunjukkan sifat reflektif, baik secara vertikal maupun horizontal.`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 4,
      tipe: 'pg',
      pertanyaan: `⟦gambar:gambar/jadipcpm/61f4cef041c3ad15-23.png⟧`,
      opsi: [
        { label: 'A', teks: `Set X` },
        { label: 'B', teks: `Set Y` },
        { label: 'C', teks: `Bukan Keduanya` },
      ],
      kunci: `A`,
      pembahasan: `Set X memiliki 2 bangun segitiga lancip
Set Y memiliki 2 bangun segitiga siku-siku

Dengan demikian, jawaban yang benar adalah Set X. Karena figure tersebut menunjukkan dua bangun segitiga lancip.`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 5,
      tipe: 'pg',
      pertanyaan: `⟦gambar:gambar/jadipcpm/915943bc8bae0d98-213.png⟧`,
      opsi: [
        { label: 'A', teks: `Set X` },
        { label: 'B', teks: `Set Y` },
        { label: 'C', teks: `Bukan Keduanya` },
      ],
      kunci: `B`,
      pembahasan: `Set X:
- jumlah bangun di luar persegi sama dengan jumlah kotak dengan warna terbanyak di dalam persegi.

Set Y:
- jumlah bangun di luar persegi satu lebih banyak dari jumlah kotak warna hitam di dalam persegi.

Maka jawaban soal tersebut adalah Set Y, karena figure menunjukkan dua kotak hitam dan dua kotak putih dengan simbol lingkaran.`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 6,
      tipe: 'pg',
      pertanyaan: `⟦gambar:gambar/jadipcpm/69852104e8612128-38.png⟧`,
      opsi: [
        { label: 'A', teks: `Set X` },
        { label: 'B', teks: `Set Y` },
        { label: 'C', teks: `Bukan Keduanya` },
      ],
      kunci: `A`,
      pembahasan: `Set X memiliki aturan bahwa panah yang menunjuk kearah atas dan bawah, maka terdapat 1 bintang berwarna putih. Sedangkan panah yang menunjuk kearah samping, maka terdapat 2 bintang berwarna putih.
Set Y memiliki aturan bahwa panah yang menunjuk kearah atas dan bawah, maka bentuk bintang berwarna putih. Sedangkan panah yang menunjuk kearah samping, maka bentuk bintang berwarna hitam.

Dengan demikian jawaban dari nomor 38 adalah Set X. Karena panah menunjukkan arah samping dan memiliki 2 bintang berwarna putih.`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 7,
      tipe: 'pg',
      pertanyaan: `⟦gambar:gambar/jadipcpm/14d2f41d1081ce92-238.png⟧`,
      opsi: [
        { label: 'A', teks: `Set X` },
        { label: 'B', teks: `Set Y` },
        { label: 'C', teks: `Bukan Keduanya` },
      ],
      kunci: `A`,
      pembahasan: `Set X memiliki 2 segitiga abu-abu, 2 segitiga putih, dan 4 segitiga hitam.

Set Y memiliki 2 segitiga putih, 3 segitiga abu-abu, dan 3 segitiga hitam.

Maka jawaban dari soal tersebut adalah Set X, karena memiliki ketentuan yang sama dengan jumlah dan warna bangun segitiga pada set X.`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 8,
      tipe: 'pg',
      pertanyaan: `⟦gambar:gambar/jadipcpm/d3c3f23c2ad0708f-53.png⟧`,
      opsi: [
        { label: 'A', teks: `Set X` },
        { label: 'B', teks: `Set Y` },
        { label: 'C', teks: `Bukan Keduanya` },
      ],
      kunci: `A`,
      pembahasan: `Set X memiliki 2 bentuk bangun yang sama dari total 3 jumlah bentuk bangun.
Set Y tidak memiliki bentuk bangun yang sama secara keseluruhan.

Dengan demikian figure tersebut menunjukan ada dua bentuk bangun segi enam dan satu bentuk lingkaran sehingga  jawaban yang benar adalah Set X.`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 9,
      tipe: 'pg',
      pertanyaan: `⟦gambar:gambar/jadipcpm/880abc78961aca58-263.png⟧`,
      opsi: [
        { label: 'A', teks: `Set X` },
        { label: 'B', teks: `Set Y` },
        { label: 'C', teks: `Bukan Keduanya` },
      ],
      kunci: `C`,
      pembahasan: `Set X: Dalam setiap kotak terdapat dua segitiga siku-siku yang arahnya sama. Masing-masing segitiga memiliki sebuah titik di atasnya. Jika segitiga mengarah ke atas, simbol rumah berada pada kotak bagian atas; demikian pula sebaliknya (jika segitiga mengarah ke bawah, simbol rumah berada di kotak bawah).

Set Y: Dalam setiap kotak terdapat dua segitiga siku-siku yang arahnya saling berlawanan  atau berhadapan. Jika arah segitiga berlawanan, simbol rumah berada pada kotak bagian bawah; jika segitiga benar-benar berhadapan, simbol rumah berada pada kotak bagian atas. Pada setiap kotak segitiga juga terdapat titik dan tanda panah yang menunjuk ke simbol daun.

Dengan demikian, jawaban dari soal diatas adalah Tidak keduanya, karena tidak ada titik pada masing-masing kotak segitiga.`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 10,
      tipe: 'pg',
      pertanyaan: `⟦gambar:gambar/jadipcpm/12761a456797b442-68.png⟧`,
      opsi: [
        { label: 'A', teks: `Set X` },
        { label: 'B', teks: `Set Y` },
        { label: 'C', teks: `Bukan Keduanya` },
      ],
      kunci: `A`,
      pembahasan: `Set X memiliki aturan bahwa setiap kotak terdiri atas 3 atau 4 bangun/elemen yang dapat sama maupun berbeda.

Set Y memiliki aturan bahwa setiap kotak memuat satu lingkaran berwarna hitam ditambah 3 atau 4 bangun/elemen lain yang dapat sama maupun berbeda.

Dengan demikian, jawabanyang benar adalah Set X, karena figure tersebut menampilkan variasi bangun yang sama dengan kotak paling kanan Set Y dikurangi 1 lingkaran hitam.`,
      status: 'direview',
    },
    ],
  },
];
