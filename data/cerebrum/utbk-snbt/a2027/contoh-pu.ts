import type { Kelompok } from '@/lib/skema';

/**
 * Contoh soal Penalaran Umum (PU) UTBK-SNBT 2027.
 *
 * Sumber (dokumen internal tim, lihat sumber di index.ts angkatan):
 *   - "Penalaran Induktif": 16 soal LENGKAP dengan kunci dan pembahasan (nomor sumber 1-16). Kunci dan
 *     pembahasannya dari dokumen itu, status 'direview'. Soal sumber nomor 12 berlabel Penalaran Deduktif -
 *     Silogisme, jadi dipasang di bagian Deduktif.
 *   - "Contoh Soal UTBK" (bagian Penalaran Umum, 55 soal): soal TANPA kunci dan pembahasan. 21 soal dipasang
 *     dengan kunci dan pembahasan yang disusun ulang (dianalisis dengan tabel kebenaran atau dihitung ulang
 *     dengan Python), status 'draft' sampai diperiksa tim akademik. 14 soal materi Penalaran Induktif
 *     (Generalisasi, Analogi, Hubungan Kausalitas, Kesesuaian Pernyataan) tidak dipasang dari sini karena
 *     dokumen "Penalaran Induktif" memuat versi lengkapnya dengan kunci dan pembahasan. 20 soal lain tidak
 *     dimasukkan:
 *       * 10 karena kuncinya ambigu atau datanya keliru: Silogisme no. 1 (pilihan B dan D sama-sama sah),
 *         Modus Ponens no. 1-4 (lebih dari satu pilihan sama-sama sah), Modus Tollens no. 2 (kalimat premis
 *         rusak) dan no. 7 (pilihan C juga benar secara materi), Tabel dan Grafik no. 2 (tanpa pertanyaan)
 *         dan no. 3 (88% dari 40 guru = 35,2 tidak ada di pilihan, judul tabel juga salah), Pola Barisan
 *         no. 1 (pola 9, 27, 23, 69, 65 memberi 191, sedangkan keterangan "hari ke-3 = 11" memberi 83);
 *       * 10 karena kembar dengan soal lain (isi sama, atau hanya ceritanya yang diganti): Modus Tollens
 *         no. 5-6, Argumen Berantai no. 6-8, dan lima soal Kompilasi.
 *   - "Kurikulum UTBK-SNBT 2027" BAB IV (Contoh Soal 2, tipe majemuk kompleks): satu soal kertas berpetak 8 x 8
 *     (Ya/Tidak, tipe pg_kategori) tanpa kunci di sumber; kunci dan pembahasannya disusun ulang (draft).
 *
 * Nomor di sini berurutan menurut kisi-kisi (Induktif, Deduktif, Kuantitatif); nomor sumber ditulis di
 * komentar tiap soal. Salah ketik yang jelas di sumber diperbaiki (mis. "Bip kopi" menjadi "Biji kopi",
 * "lwan" menjadi "Iwan", "Kelompok 8" menjadi "Kelompok B", "menjawab pernyataan" menjadi "menjawab
 * pertanyaan").
 */
export const contohPenalaranUmum: Kelompok[] = [
  // ── Penalaran Induktif - Generalisasi ─────────────────────────────────────
  {
    soal: [
      // induktif no. 1
      {
        nomor: 1,
        tipe: 'pg',
        pertanyaan: `Beberapa siswa yang jarang hadir rapat menyelesaikan tugas tepat waktu. Sebagian siswa yang sering hadir rapat menyelesaikan tugas tidak tepat waktu. Berdasarkan pengamatan tersebut, manakah kesimpulan yang PALING TEPAT?`,
        opsi: [
          { label: 'A', teks: `Semua siswa yang sering hadir rapat tidak menyelesaikan tugas tepat waktu.` },
          { label: 'B', teks: `Siswa yang jarang hadir rapat wajib menyelesaikan tugas dengan konsisten.` },
          { label: 'C', teks: `Siswa yang jarang hadir rapat tidak memahami pentingnya menyelesaikan tugas tepat waktu.` },
          { label: 'D', teks: `Frekuensi kehadiran rapat tidak selalu menentukan ketepatan waktu penyelesaian tugas.` },
          { label: 'E', teks: `Semua siswa yang sering hadir rapat konsisten menyelesaikan tugas tepat waktu.` },
        ],
        kunci: 'D',
        pembahasan: `Submateri: Penalaran Induktif - Generalisasi.
Generalisasi induktif menarik simpulan berdasarkan pengamatan sejumlah anggota kelompok. Pada soal ini, sebagian siswa yang jarang mengikuti rapat menyelesaikan tugas tepat waktu, sedangkan sebagian siswa yang sering mengikuti rapat justru terlambat. Kedua temuan menunjukkan bahwa frekuensi kehadiran tidak dapat digunakan sebagai penentu yang selalu berlaku untuk ketepatan penyelesaian tugas.

Kata ‘beberapa’ dan ‘sebagian’ tidak sama dengan ‘semua’. Pengamatan tersebut menggugurkan anggapan mutlak bahwa siswa yang sering hadir pasti tepat waktu atau siswa yang jarang hadir pasti terlambat. Namun, data tidak cukup untuk menyatakan bahwa sama sekali tidak terdapat hubungan statistik antara kehadiran dan ketepatan waktu. Karena itu, simpulan pada pilihan D menggunakan pembatas ‘tidak selalu’.

Analisis Opsi:
A. Tidak tepat karena kata “semua” menggeneralisasi kondisi yang hanya diamati pada sebagian siswa.
B. Tidak tepat karena menyatakan kewajiban atau aturan, bukan simpulan dari hasil pengamatan.
C. Tidak tepat karena kemampuan memahami pentingnya ketepatan waktu tidak dijelaskan dalam premis.
D. Tepat karena dua pengamatan menunjukkan bahwa tingkat kehadiran rapat tidak selalu menentukan ketepatan pengumpulan tugas.
E. Tidak tepat karena bertentangan dengan informasi bahwa sebagian siswa yang sering hadir justru terlambat.

Kesimpulan:
Jawaban yang tepat adalah D. Frekuensi kehadiran rapat tidak selalu menentukan ketepatan waktu penyelesaian tugas.`,
        tingkat: 'sedang',
        status: 'direview',
      },
    ],
  },
  // ── Penalaran Induktif - Analogi ──────────────────────────────────────────
  {
    soal: [
      // induktif no. 2
      {
        nomor: 2,
        tipe: 'pg',
        pertanyaan: `Menurut X, kemandirian adalah kemampuan untuk membuat keputusan penting dalam hidupnya dan menanggung konsekuensinya tanpa melibatkan pihak lain. Menurut Y, kemandirian adalah kondisi di mana seseorang telah mampu memenuhi kebutuhan dasarnya melalui usahanya sendiri tanpa bergantung pada bantuan orang lain. Apa kesamaan mendasar antara pendapat X dan Y mengenai konsep kemandirian?`,
        opsi: [
          { label: 'A', teks: `Kemandirian dapat dicapai setelah seseorang berhasil mengambil sebuah keputusan.` },
          { label: 'B', teks: `Kemandirian terutama terkait dengan kemampuan finansial dan ekonomi seseorang.` },
          { label: 'C', teks: `Kemandirian adalah kemampuan individu untuk bertindak secara mandiri dan tidak bergantung pada pihak lain.` },
          { label: 'D', teks: `Kemandirian adalah sebuah proses untuk membebaskan diri dari pertolongan pihak lain.` },
          { label: 'E', teks: `Kemandirian mendorong seseorang dapat merealisasikan apa yang dicita-citakannya.` },
        ],
        kunci: 'C',
        pembahasan: `Submateri: Penalaran Induktif - Analogi.
Analogi konseptual mengidentifikasi prinsip yang sama dari dua pandangan meskipun keduanya menyoroti aspek berbeda. X menjelaskan kemandirian sebagai kemampuan mengambil keputusan dan bertanggung jawab atas konsekuensinya. Y menjelaskan kemandirian sebagai kemampuan memenuhi kebutuhan dasar melalui usaha sendiri.

Persamaan kedua pandangan terletak pada kemampuan individu bertindak dengan mengandalkan diri sendiri. Frasa ‘tanpa melibatkan pihak lain’ pada X dan ‘tanpa bergantung pada bantuan orang lain’ pada Y menunjukkan prinsip tersebut. Pilihan C merangkum kedua pendapat tanpa membatasinya hanya pada keputusan, keuangan, atau pencapaian cita-cita.

Analisis Opsi:
A. Tidak tepat karena hanya membahas tindakan mengambil keputusan dan mengabaikan tanggung jawab serta pemenuhan kebutuhan.
B. Tidak tepat karena membatasi kemandirian pada keuangan, padahal X tidak membahas kemampuan ekonomi.
C. Tepat karena merangkum prinsip mengandalkan kemampuan diri sendiri dalam kedua definisi.
D. Kurang tepat karena kedua pendapat menjelaskan kemampuan atau kondisi, bukan proses melepaskan pertolongan.
E. Tidak tepat karena pencapaian cita-cita tidak dibahas dalam salah satu pendapat.

Kesimpulan:
Jawaban yang tepat adalah C. Kedua pendapat menekankan kemampuan individu untuk bertindak tanpa bergantung pada pihak lain.`,
        tingkat: 'mudah',
        status: 'direview',
      },
    ],
  },
  // ── Penalaran Induktif - Hubungan Kausalitas ──────────────────────────────
  {
    soal: [
      // induktif no. 3
      {
        nomor: 3,
        tipe: 'pg',
        pertanyaan: `Pada akhir latihan fisik intensif, sebagian peserta pelatihan X mengalami penurunan ketahanan fisik. Hal ini terjadi ketika panitia tidak memberikan kesempatan istirahat yang cukup. Penurunan ketahanan fisik juga terjadi ketika panitia menjadwalkan kegiatan olahraga secara rutin. Berdasarkan pernyataan di atas, manakah simpulan berikut yang PALING TEPAT?`,
        opsi: [
          { label: 'A', teks: `Penjadwalan kegiatan olahraga rutin pada awal kegiatan akan menurunkan ketahanan fisik.` },
          { label: 'B', teks: `Pada akhir sesi latihan fisik intensif peserta terbiasa mengalami penurunan ketahanan fisik.` },
          { label: 'C', teks: `Kurangnya kesempatan istirahat dan penjadwalan olahraga rutin sama-sama berkaitan dengan penurunan ketahanan fisik peserta.` },
          { label: 'D', teks: `Pada awal sesi latihan fisik intensif banyak yang tidak mengalami penurunan ketahanan fisik.` },
          { label: 'E', teks: `Penurunan ketahanan fisik menyebabkan panitia menjadwalkan olahraga secara rutin.` },
        ],
        kunci: 'C',
        pembahasan: `Submateri: Penalaran Induktif - Hubungan Kausalitas.
Hubungan kausalitas perlu dibedakan dari kejadian yang hanya muncul bersamaan. Bacaan menyebut penurunan ketahanan fisik pada sebagian peserta di akhir latihan intensif. Kejadian itu diamati ketika kesempatan istirahat kurang memadai dan ketika kegiatan olahraga dijadwalkan secara rutin.

Kesimpulan yang didukung bacaan adalah bahwa kedua kondisi tersebut berkaitan dengan penurunan ketahanan fisik. Belum ada data yang menentukan besarnya pengaruh masing-masing kondisi atau membuktikan salah satunya sebagai penyebab tunggal. Pilihan C tepat karena mempertahankan dua kondisi sebagaimana dinyatakan serta tidak membalik arah hubungan peristiwa.

Analisis Opsi:
A. Tidak tepat karena awal kegiatan tidak dijelaskan dan kata “akan” memberi kepastian yang tidak terbukti.
B. Tidak tepat karena bacaan hanya menyebut sebagian peserta, bukan kebiasaan umum.
C. Tepat karena mempertahankan dua kondisi yang sama-sama dikaitkan dengan penurunan ketahanan.
D. Tidak tepat karena tidak ada data mengenai keadaan peserta pada awal latihan.
E. Tidak tepat karena membalik arah hubungan: jadwal olahraga disebut sebagai kondisi, bukan akibat penurunan ketahanan.

Kesimpulan:
Jawaban yang tepat adalah C. Kurangnya istirahat dan penjadwalan olahraga rutin sama-sama dikaitkan dengan penurunan ketahanan fisik.`,
        tingkat: 'sedang',
        status: 'direview',
      },
    ],
  },
  {
    soal: [
      // induktif no. 4
      {
        nomor: 4,
        tipe: 'pg',
        pertanyaan: `Penelitian menunjukkan bahwa peningkatan motivasi pekerja dipengaruhi oleh kualitas atasan dalam mengarahkan bawahan. Oleh karena itu, sebuah perusahaan mengadakan program pendampingan bagi para manajer. Dalam periode yang sama, jumlah ide perbaikan yang diajukan karyawan perusahaan tersebut meningkat tajam. Berdasarkan informasi di atas, manakah yang paling mungkin terjadi terkait meningkatnya jumlah ide perbaikan pada karyawan?`,
        opsi: [
          { label: 'A', teks: `Atasan turut menyusun peraturan yang membebaskan pekerja dalam berekspresi.` },
          { label: 'B', teks: `Perusahaan mendukung pendanaan maksimal untuk pelatihan bagi semua pegawainya.` },
          { label: 'C', teks: `Perusahaan memusatkan diri pada pengembangan kompetensi kepemimpinan para atasan.` },
          { label: 'D', teks: `Pengelolaan perusahaan melakukan proses perekrutan yang transparan.` },
          { label: 'E', teks: `Perusahaan memberikan peringatan kepada pekerja agar bekerja lebih giat.` },
        ],
        kunci: 'C',
        pembahasan: `Submateri: Penalaran Induktif - Hubungan Kausalitas.
Penelitian dalam bacaan menyatakan bahwa kualitas pengarahan atasan berpengaruh terhadap motivasi pekerja. Perusahaan kemudian melaksanakan program pendampingan bagi manajer. Tindakan tersebut secara langsung menunjukkan perhatian perusahaan pada pengembangan kemampuan manajer dalam mengarahkan bawahan.

Pada periode yang sama, jumlah ide perbaikan yang diajukan karyawan meningkat. Program pendampingan dapat menjadi salah satu penjelasan yang masuk akal melalui kemungkinan perbaikan kualitas pengarahan dan motivasi. Akan tetapi, kesamaan waktu tidak dengan sendirinya membuktikan hubungan sebab-akibat. Pilihan C paling kuat karena menjelaskan tindakan yang benar-benar didukung informasi bacaan, bukan kebijakan lain yang tidak disebutkan.

Analisis Opsi:
A. Tidak tepat karena peraturan kebebasan berekspresi tidak disebut sebagai tindakan perusahaan.
B. Tidak tepat karena pendampingan ditujukan bagi manajer, bukan pelatihan semua pegawai dengan pendanaan maksimal.
C. Tepat karena program pendampingan manajer paling langsung mencerminkan pengembangan kompetensi kepemimpinan para atasan.
D. Tidak tepat karena tidak terdapat data tentang kebijakan perekrutan perusahaan.
E. Tidak tepat karena pemberian peringatan kepada pekerja tidak disebut dan berbeda dari pendampingan manajer.

Kesimpulan:
Jawaban yang tepat adalah C. Pendampingan manajer menunjukkan fokus perusahaan pada pengembangan kompetensi kepemimpinan atasan.`,
        tingkat: 'sedang',
        status: 'direview',
      },
    ],
  },
  {
    soal: [
      // induktif no. 5
      {
        nomor: 5,
        tipe: 'pg',
        pertanyaan: `Sebuah organisasi meluncurkan program beasiswa Pendidikan untuk anak-anak dari keluarga tidak mampu guna mengurangi kesenjangan pada akses Pendidikan yang lebih baik. Pada awal peluncuran program tersebut disambut hangat oleh masyarakat dengan jumlah pendaftar yang tinggi. Namun, beberapa bulan kemudian jumlah pendaftar mulai menurun drastis meskipun organisasi terus melakukan promosi aktif. Penurunan mulai terlihat setelah organisasi mengumumkan rincian cakupan bantuan, sementara ketentuan lain tidak berubah. Manakah pernyataan yang PALING TEPAT yang menjelaskan fenomena penurunan pendaftar ini?`,
        opsi: [
          { label: 'A', teks: `Program ini menyebabkan peningkatan biaya hidup keluarga penerima beasiswa karena berfokus pada Pendidikan formal.` },
          { label: 'B', teks: `Pemerintah memberikan subsidi bantuan Pendidikan ke sekolah-sekolah lain di daerah tersebut.` },
          { label: 'C', teks: `Pendaftar yang sebelumnya terdaftar memiliki keterbatasan akademik sehingga tidak dapat mengikuti program.` },
          { label: 'D', teks: `Organisasi nirlaba tersebut memberikan kualifikasi dan prasyarat berupa nilai rapor pada mata pelajaran inti.` },
          { label: 'E', teks: `Pada awalnya, masyarakat mengira bahwa program ini akan memberikan beasiswa penuh tanpa syarat tambahan.` },
        ],
        kunci: 'E',
        pembahasan: `Submateri: Penalaran Induktif - Hubungan Kausalitas.
Penalaran kausalitas digunakan untuk memilih penjelasan yang paling sesuai dengan perubahan yang diamati. Program beasiswa semula menarik banyak pendaftar. Setelah rincian cakupan bantuan diumumkan, jumlah pendaftar menurun meskipun promosi tetap berlangsung dan ketentuan lain tidak berubah.

Urutan peristiwa tersebut mendukung dugaan bahwa sebagian masyarakat mengubah keputusannya setelah mengetahui cakupan bantuan yang sebenarnya. Apabila calon pendaftar semula mengharapkan beasiswa penuh tanpa persyaratan tambahan, pengumuman rincian program dapat mengurangi minat mereka. Pilihan E paling sesuai dengan perubahan informasi yang disebutkan; faktor lain seperti subsidi pemerintah atau nilai rapor tidak dinyatakan berubah pada waktu tersebut.

Analisis Opsi:
A. Tidak tepat karena tidak ada bukti program menaikkan biaya hidup keluarga penerima.
B. Kurang tepat karena subsidi di sekolah lain tidak dinyatakan terjadi pada saat penurunan pendaftar.
C. Kurang tepat karena kemampuan akademik pendaftar lama tidak menjelaskan secara langsung perubahan minat pendaftar baru.
D. Kurang tepat karena tidak ada informasi tentang penerapan syarat nilai rapor yang baru.
E. Paling tepat karena dapat menjelaskan perbedaan antara harapan awal masyarakat dan cakupan beasiswa setelah rincian diumumkan.

Kesimpulan:
Jawaban yang tepat adalah E. Perbedaan harapan awal dan cakupan bantuan merupakan penjelasan yang paling sesuai dengan informasi waktu dalam soal.`,
        tingkat: 'sedang',
        status: 'direview',
      },
    ],
  },
  {
    soal: [
      // induktif no. 6
      {
        nomor: 6,
        tipe: 'pg',
        pertanyaan: `Seorang peneliti mengadakan program “Pintar Bersama” yang bertujuan agar frekuensi berbagi pengetahuan kepada temannya meningkat. Setelah program selesai, kelompok yang mengikuti program tersebut lebih sering berbagi pengetahuan dibandingkan kelompok murid yang tidak mengikuti. Peneliti menyimpulkan bahwa program tersebut berkontribusi pada peningkatan frekuensi perilaku berbagi pengetahuan murid. Informasi yang perlu ditambahkan agar kesimpulan tersebut TEPAT adalah ...`,
        opsi: [
          { label: 'A', teks: `Data demografi yang lengkap mengenai kelompok murid yang mengikuti program dan yang tidak mengikuti program.` },
          { label: 'B', teks: `Rincian mengenai ruang lingkup materi program apakah hanya sesuai untuk murid pada kelompok tertentu atau tidak.` },
          { label: 'C', teks: `Motivasi siswa ketika mengikuti program apakah dari kemauannya sendiri atau karena kewajiban dari sekolah.` },
          { label: 'D', teks: `Jumlah murid yang antusias selama mengikuti sesi-sesi yang ada dalam program yang diselenggarakan tersebut.` },
          { label: 'E', teks: `Kesamaan frekuensi perilaku berbagi pengetahuan pada kedua kelompok murid sebelum program.` },
        ],
        kunci: 'E',
        pembahasan: `Submateri: Penalaran Induktif - Hubungan Kausalitas.
Untuk menilai dugaan pengaruh suatu program, perbedaan hasil antarkelompok setelah program perlu dibandingkan dengan keadaan sebelum program. Kelompok yang mengikuti ‘Pintar Bersama’ lebih sering berbagi pengetahuan daripada kelompok pembanding sesudah program selesai. Namun, perbedaan ini mungkin telah ada sebelum intervensi dilakukan.

Informasi bahwa kedua kelompok memiliki frekuensi berbagi yang relatif sama sebelum program memperkuat dugaan bahwa selisih setelah program berhubungan dengan pelaksanaannya. Itulah alasan pilihan E paling relevan. Kesetaraan awal tetap belum mengendalikan seluruh faktor perancu, sehingga kesimpulan yang wajar adalah adanya dukungan terhadap kontribusi program, bukan bukti sebab tunggal atau peningkatan tingkat pengetahuan yang tidak diukur.

Analisis Opsi:
A. Kurang tepat karena karakteristik demografi saja tidak menunjukkan apakah perilaku awal kedua kelompok setara.
B. Kurang tepat karena ruang lingkup materi tidak mengukur kondisi sebelum dan setelah program.
C. Relevan sebagai faktor kemungkinan, tetapi tidak menggantikan data perbandingan hasil awal.
D. Tidak tepat karena antusiasme peserta tidak sama dengan frekuensi berbagi pengetahuan.
E. Tepat karena frekuensi berbagi yang sebanding sebelum program memperkuat perbandingan hasil setelahnya.

Kesimpulan:
Jawaban yang tepat adalah E. Kesamaan kondisi awal kedua kelompok merupakan informasi paling relevan untuk memperkuat dugaan kontribusi program.`,
        tingkat: 'sulit',
        status: 'direview',
      },
    ],
  },
  // ── Penalaran Induktif - Kesesuaian Pernyataan ────────────────────────────
  {
    soal: [
      // induktif no. 7
      {
        nomor: 7,
        tipe: 'pg',
        pertanyaan: `Bel pulang sekolah sudah berbunyi sejak tadi. Jemputan Iwan hari ini terlambat. Iwan tidak bisa pulang tepat waktu hari ini dan harus menunggu meskipun ada kemungkinan penjemputnya segera datang. Selain itu, Iwan juga belum menelepon orang tua penjemputannya untuk memberi kabar mengenai keterlambatan ini. Dalam situasi tersebut, apa simpulan yang PALING TEPAT mengenai kondisi Iwan?`,
        opsi: [
          { label: 'A', teks: `Iwan sudah menelepon orang tua penjemputannya dan ia bisa pulang tepat waktu hari ini.` },
          { label: 'B', teks: `Iwan belum menelepon orang tua penjemputannya dan ia tidak bisa pulang tepat waktu hari ini.` },
          { label: 'C', teks: `Jemputan Iwan tidak datang terlambat dan ia belum menelepon orang tua.` },
          { label: 'D', teks: `Iwan sudah menelepon orang tua penjemputannya dan ia tidak bisa pulang tepat waktu hari ini.` },
          { label: 'E', teks: `Jemputan Iwan tidak jadi datang terlambat dan ia bisa pulang tepat waktu hari ini.` },
        ],
        kunci: 'B',
        pembahasan: `Submateri: Penalaran Induktif - Kesesuaian Pernyataan.
Kesimpulan harus membedakan fakta yang dinyatakan secara pasti dari kemungkinan yang belum terjadi. Bacaan memastikan bahwa jemputan Iwan terlambat, Iwan tidak dapat pulang tepat waktu, dan Iwan belum menghubungi orang tua yang menjemputnya.

Pernyataan bahwa penjemput mungkin segera datang hanya menyebut kemungkinan berikutnya dan tidak menghapus keterlambatan yang sudah terjadi. Pilihan B merupakan gabungan dua fakta eksplisit, yaitu belum menelepon dan tidak dapat pulang tepat waktu. Pilihan lain mengubah status yang sudah dinyatakan atau memperlakukan kemungkinan sebagai kenyataan.

Analisis Opsi:
A. Salah karena Iwan belum menelepon dan sudah tidak dapat pulang tepat waktu.
B. Benar karena menggabungkan dua fakta yang disebut langsung dalam soal.
C. Salah karena jemputan Iwan dinyatakan terlambat.
D. Salah karena mengubah informasi “belum menelepon” menjadi “sudah menelepon”.
E. Salah karena keterlambatan telah terjadi dan tidak otomatis hilang walaupun penjemput akan datang.

Kesimpulan:
Jawaban yang tepat adalah B. Iwan belum menelepon pihak penjemput dan tidak dapat pulang tepat waktu.`,
        tingkat: 'mudah',
        status: 'direview',
      },
    ],
  },
  {
    soal: [
      // induktif no. 8
      {
        nomor: 8,
        tipe: 'pg',
        pertanyaan: `Keluarga Iwan akan menggunakan dua jenis transportasi untuk liburan tahun ini. Dua jenis tersebut adalah kereta api untuk perjalanan antarkota dan mobil untuk perjalanan dalam kota. Penggunaan transportasi tersebut juga bergantung pada kondisi nenek. Jika nenek Iwan ikut berlibur, mereka akan menggunakan pesawat. Jika keluarga Iwan tidak jadi naik kereta dan mobil saat liburan, pernyataan di bawah ini yang PALING TEPAT adalah ...`,
        opsi: [
          { label: 'A', teks: `Keluarga Iwan tidak jadi naik kereta api dan menggunakan mobil.` },
          { label: 'B', teks: `Jika nenek ikut berlibur, mereka akan menggunakan pesawat.` },
          { label: 'C', teks: `Keluarga Iwan tidak naik kereta api dan menggunakan mobil.` },
          { label: 'D', teks: `Nenek tidak ikut berlibur dan keluarga Iwan menggunakan mobil.` },
          { label: 'E', teks: `Jika keluarga Iwan naik kereta api, nenek tidak ikut berlibur.` },
        ],
        kunci: 'B',
        pembahasan: `Submateri: Penalaran Induktif - Kesesuaian Pernyataan.
Pernyataan bersyarat menyatakan bahwa apabila suatu kondisi terpenuhi, akibat yang ditentukan akan berlaku. Misalkan \\(p\\) = ‘nenek ikut berlibur’ dan \\(q\\) = ‘keluarga menggunakan pesawat’. Premisnya adalah \\(p \\rightarrow q\\). Pernyataan tersebut tidak dengan sendirinya memastikan bahwa \\(p\\) benar.

Informasi lain menyebut rencana penggunaan kereta api dan mobil dibatalkan. Pembatalan tersebut tidak memastikan keikutsertaan nenek dan tidak menetapkan pilihan moda pengganti. Karena itu, satu-satunya pernyataan yang pasti sesuai dengan teks adalah implikasi \\(p \\rightarrow q\\) sebagaimana dicantumkan dalam pilihan B. Soal ini menguji kesesuaian pernyataan bersyarat, bukan keberhasilan menarik akibat dari fakta keikutsertaan nenek.

Analisis Opsi:
A. Salah karena mobil dinyatakan batal digunakan.
B. Benar sebagai pernyataan bersyarat yang sama dengan informasi soal.
C. Salah karena tetap menyatakan keluarga menggunakan mobil.
D. Salah karena tidak ada kepastian nenek tidak ikut dan mobil dibatalkan.
E. Tidak dapat ditarik dari premis karena penggunaan kereta api tidak membuktikan ketidakhadiran nenek.

Kesimpulan:
Jawaban yang tepat adalah B. Implikasi tentang keikutsertaan nenek dan penggunaan pesawat dinyatakan langsung dalam premis.`,
        tingkat: 'mudah',
        status: 'direview',
      },
    ],
  },
  {
    soal: [
      // induktif no. 9
      {
        nomor: 9,
        tipe: 'pg',
        pertanyaan: `Kehangatan interpersonal seseorang meningkatkan kepuasannya dalam melakukan hubungan pertemanan. Kepuasan tersebut tercermin melalui sikap saling menghargai. Di sisi lain, tingkat kepercayaan antar teman memengaruhi kuatnya pengaruh kehangatan interpersonal terhadap kepuasan hubungan antarteman. Manakah dari pernyataan berikut yang PALING TEPAT?`,
        opsi: [
          { label: 'A', teks: `Seseorang dengan kehangatan interpersonal tinggi tetap merasa puas dalam pertemanan meskipun tingkat kepercayaannya kepada teman rendah.` },
          { label: 'B', teks: `Kepuasan dalam pertemanan dapat meningkatkan kehangatan interpersonal ketika tingkat kepercayaan antarteman tinggi.` },
          { label: 'C', teks: `Kekuatan hubungan kehangatan interpersonal terhadap kepuasan pertemanan bergantung pada tingkat kepercayaan antarteman.` },
          { label: 'D', teks: `Kepercayaan antarteman hanya memengaruhi sikap saling menghargai, tetapi tidak memengaruhi kehangatan interpersonal.` },
          { label: 'E', teks: `Seseorang yang menunjukkan sikap saling menghargai merasa puas dalam pertemanan meskipun kurang mendapat kepercayaan dari teman.` },
        ],
        kunci: 'C',
        pembahasan: `Submateri: Penalaran Induktif - Kesesuaian Pernyataan.
Bacaan menyatakan bahwa kehangatan interpersonal memengaruhi kepuasan dalam pertemanan. Sementara itu, kepercayaan antarteman menentukan kuat atau lemahnya pengaruh kehangatan tersebut terhadap kepuasan. Dalam kajian hubungan antarvariabel, faktor yang mengubah kekuatan hubungan disebut variabel moderator.

Peran moderator tidak berarti bahwa orang yang hangat pasti puas pada setiap tingkat kepercayaan, dan tidak berarti pula bahwa kepuasan menyebabkan kehangatan. Pilihan C tepat karena menyatakan hubungan kehangatan dan kepuasan bergantung pada tingkat kepercayaan, tanpa menetapkan hasil individual atau arah pengaruh yang tidak dijelaskan.

Analisis Opsi:
A. Tidak dapat dipastikan karena tingkat kepercayaan memengaruhi kuatnya pengaruh kehangatan.
B. Salah karena membalik arah pengaruh yang dinyatakan dalam soal.
C. Benar karena secara langsung menyatakan peran kepercayaan dalam memoderasi hubungan kehangatan dan kepuasan.
D. Salah karena bacaan tidak membatasi kepercayaan hanya pada sikap menghargai.
E. Tidak dapat dipastikan karena sikap menghargai tidak menjamin tingkat kepuasan tertentu ketika kepercayaan rendah.

Kesimpulan:
Jawaban yang tepat adalah C. Tingkat kepercayaan memoderasi hubungan kehangatan interpersonal dengan kepuasan pertemanan.`,
        tingkat: 'sedang',
        status: 'direview',
      },
    ],
  },
  {
    soal: [
      // induktif no. 10
      {
        nomor: 10,
        tipe: 'pg',
        pertanyaan: `Kerja sama adalah kesediaan individu untuk berkontribusi dan berkoordinasi dengan orang lain guna mencapai tujuan bersama secara efektif. Manakah dari pernyataan berikut yang PALING TEPAT dengan definisi kerja sama?`,
        opsi: [
          { label: 'A', teks: `Dalam penyelesaian proyek, Adi menyesuaikan cara kerjanya agar selaras dengan rekan lain untuk mendapatkan hasil sesuai target.` },
          { label: 'B', teks: `Dalam rapat, Rina menyampaikan pendapatnya secara rinci dan berfokus pada hasil pribadi yang ingin dicapai.` },
          { label: 'C', teks: `Dalam diskusi kelompok, Sinta mendengarkan pendapat anggota dan memberikan apresiasi serta mengikuti keputusan kelompok.` },
          { label: 'D', teks: `Dalam proyek kelompok, Deni harus menunjukkan kemampuan terbaiknya tanpa banyak menyesuaikan diri dengan kerja tim.` },
          { label: 'E', teks: `Ketika rekannya kesulitan, Lia memberikan semangat agar tetap percaya diri untuk menyelesaikan tugas hingga akhir.` },
        ],
        kunci: 'A',
        pembahasan: `Submateri: Penalaran Induktif - Kesesuaian Pernyataan.
Definisi kerja sama memuat tiga unsur: kontribusi, koordinasi dengan orang lain, dan pencapaian tujuan bersama. Contoh yang paling sesuai harus memperlihatkan ketiga unsur tersebut, bukan hanya sikap baik terhadap rekan kerja.

Adi menyesuaikan cara kerjanya dengan rekan satu proyek agar hasil bersama mencapai target. Tindakan itu menunjukkan penyesuaian kontribusi dan koordinasi menuju tujuan kelompok. Mendengarkan keputusan atau memberi semangat merupakan perilaku positif, tetapi tidak dengan sendirinya menjelaskan kontribusi kerja yang terkoordinasi. Oleh karena itu, pilihan A paling lengkap memenuhi definisi.

Analisis Opsi:
A. Benar karena tindakan Adi mencerminkan koordinasi cara kerja untuk mencapai target kelompok.
B. Salah karena berfokus pada hasil pribadi, bukan tujuan bersama.
C. Menunjukkan sikap positif, tetapi kontribusi kerja yang terkoordinasi belum dijelaskan.
D. Salah karena menonjolkan prestasi individu tanpa menyesuaikan diri dengan tim.
E. Merupakan dukungan moral yang baik, tetapi belum menunjukkan koordinasi kontribusi pekerjaan.

Kesimpulan:
Jawaban yang tepat adalah A. Tindakan Adi memenuhi unsur kontribusi, koordinasi, dan tujuan bersama.`,
        tingkat: 'mudah',
        status: 'direview',
      },
    ],
  },
  {
    soal: [
      // induktif no. 11
      {
        nomor: 11,
        tipe: 'pg',
        pertanyaan: `Bima telah satu tahun menggantikan saudaranya mengelola penginapan keluarga di daerah wisata. Sejak awal, tingkat keluar-masuk staf pelayanan tamu cukup tinggi sehingga pada akhir pekan dan masa liburan, jumlah staf sering tidak mencukupi. Akibatnya, respon terhadap permintaan tamu menjadi lambat dan banyak tamu yang enggan untuk kembali. Bima
mempertimbangkan untuk membagi lebih banyak tugas kepada staf yang tersisa, tetapi ia khawatir mereka menolak. Tanpa dapat menambah staf atau jam kerja pada saat itu, strategi yang PALING EFEKTIF untuk menjaga kelancaran layanan selama giliran kerja yang sedang berlangsung adalah ...`,
        opsi: [
          { label: 'A', teks: `Memberhentikan sistem kontrak kerja pegawai yang memuat aturan jam kerja minimal.` },
          { label: 'B', teks: `Meminta staf yang tidak sedang bertugas untuk bekerja pada masa liburan dan akhir pekan.` },
          { label: 'C', teks: `Menyesuaikan prioritas layanan berdasarkan jenis permintaan tamu untuk menjaga kelancaran operasional.` },
          { label: 'D', teks: `Mengalihkan sebagian tugas layanan kepada staf administrasi untuk mempercepat penanganan permintaan tamu.` },
          { label: 'E', teks: `Menyederhanakan prosedur layanan agar setiap permintaan tamu dapat ditangani dalam waktu singkat.` },
        ],
        kunci: 'C',
        pembahasan: `Submateri: Penalaran Induktif - Kesesuaian Pernyataan.
Permasalahan utama penginapan ialah keterbatasan staf pada saat permintaan layanan tinggi, sehingga respons menjadi lambat. Soal menegaskan bahwa Bima perlu bertindak pada giliran kerja yang sedang berlangsung tanpa menambah staf atau jam kerja. Dengan demikian, strategi harus dapat diterapkan menggunakan kapasitas yang tersedia.

Pengaturan prioritas berdasarkan jenis dan urgensi permintaan tamu memungkinkan staf menangani kebutuhan penting lebih dahulu. Langkah ini tidak menghilangkan penyebab pergantian staf secara permanen, tetapi paling relevan untuk mempertahankan layanan dalam jangka pendek. Perubahan kontrak, pemanggilan staf di luar jadwal, pengalihan tugas, atau perubahan prosedur memiliki kendala penerapan yang lebih besar pada kondisi tersebut.

Analisis Opsi:
A. Tidak tepat karena perubahan kontrak tidak menyelesaikan antrean pada giliran kerja yang sedang berjalan.
B. Tidak tepat karena meminta staf lain bekerja bertentangan dengan batasan tidak menambah jam kerja.
C. Tepat karena mengatur layanan menurut prioritas dapat langsung memaksimalkan staf yang tersedia.
D. Kurang tepat karena staf administrasi belum tentu siap menangani layanan tamu dan diperlukan pengalihan tugas.
E. Kurang tepat karena perubahan prosedur belum tentu dapat dilakukan segera tanpa menurunkan mutu layanan.

Kesimpulan:
Jawaban yang tepat adalah C. Pengaturan prioritas paling sesuai untuk menjaga layanan dengan kapasitas staf yang tersedia.`,
        tingkat: 'sedang',
        status: 'direview',
      },
    ],
  },
  {
    soal: [
      // induktif no. 13
      {
        nomor: 12,
        tipe: 'pg',
        pertanyaan: `Penerbangan pesawat Rina sudah dijadwalkan berangkat sejak pagi. Cuaca hari ini buruk dan menyebabkan delay. Rina tidak bisa berangkat tepat waktu hari ini dan harus menunggu meskipun ada kemungkinan cuaca membaik. Selain itu, Rina juga belum memberitahu temannya tentang keterlambatan penerbangannya ini. Dalam situasi tersebut, apa simpulan yang PALING TEPAT mengenai kondisi Rina?`,
        opsi: [
          { label: 'A', teks: `Rina sudah memberitahu temannya dan ia bisa berangkat tepat waktu hari ini` },
          { label: 'B', teks: `Rina belum memberitahu temannya dan ia tidak bisa berangkat tepat waktu hari ini` },
          { label: 'C', teks: `Cuaca membaik dan Rina belum memberitahu temannya` },
          { label: 'D', teks: `Rina sudah memberitahu temannya dan ia tidak bisa berangkat tepat waktu hari ini` },
          { label: 'E', teks: `Cuaca tidak jadi buruk dan Rina bisa berangkat tepat waktu hari ini` },
        ],
        kunci: 'B',
        pembahasan: `Submateri: Penalaran Induktif - Kesesuaian Pernyataan.
Bacaan memberikan tiga fakta: cuaca buruk telah menyebabkan keterlambatan penerbangan, Rina tidak dapat berangkat tepat waktu, dan Rina belum memberitahu temannya. Keterangan bahwa cuaca mungkin membaik hanyalah kemungkinan mengenai keadaan selanjutnya.

Kemungkinan perbaikan cuaca tidak mengubah fakta bahwa penerbangan sudah terlambat. Demikian pula, kata ‘belum’ tidak dapat ditafsirkan sebagai ‘sudah’ tanpa informasi tambahan. Pilihan B menggabungkan dua fakta yang dinyatakan secara eksplisit dan tidak menambahkan asumsi.

Analisis Opsi:
A. Salah karena Rina belum memberi tahu teman dan penerbangan sudah terlambat.
B. Benar karena kedua informasi dinyatakan secara jelas dalam teks.
C. Belum dapat dipastikan karena membaiknya cuaca baru merupakan kemungkinan.
D. Salah karena status menghubungi teman masih “belum”, bukan “sudah”.
E. Salah karena cuaca buruk sudah menyebabkan keterlambatan.

Kesimpulan:
Jawaban yang tepat adalah B. Rina belum memberi tahu temannya dan penerbangannya sudah mengalami keterlambatan.`,
        tingkat: 'mudah',
        status: 'direview',
      },
    ],
  },
  {
    soal: [
      // induktif no. 14
      {
        nomor: 13,
        tipe: 'pg',
        pertanyaan: `Keluarga Lina akan menggunakan dua jenis transportasi untuk liburan tahun ini. Dua jenis tersebut adalah kapal laut untuk perjalanan antar pulau dan bus untuk perjalanan dalam kota. Penggunaan transportasi tersebut juga bergantung pada kondisi kakek Lina. Jika kakek Lina ikut berlibur, mereka akan menggunakan pesawat. Jika keluarga Lina tidak jadi naik kapal laut dan bus saat liburan, pernyataan dibawah ini yang PALING TEPAT adalah?`,
        opsi: [
          { label: 'A', teks: `Keluarga Lina tidak jadi naik kapal laut dan menggunakan bus` },
          { label: 'B', teks: `Jika kakek ikut berlibur, mereka akan menggunakan pesawat` },
          { label: 'C', teks: `Keluarga Lina tidak naik kapal laut dan menggunakan bus` },
          { label: 'D', teks: `Kakek tidak ikut berlibur dan keluarga Lina menggunakan bus` },
          { label: 'E', teks: `Jika keluarga Lina naik kapal laut, kakek tidak ikut berlibur` },
        ],
        kunci: 'B',
        pembahasan: `Submateri: Penalaran Induktif - Kesesuaian Pernyataan.
Misalkan:
\\(p\\) = kakek ikut berlibur
\\(q\\) = keluarga menggunakan pesawat

Informasi bersyarat pada bacaan dapat ditulis \\(p \\rightarrow q\\). Pernyataan ini menyebut apa yang terjadi apabila kakek ikut, tetapi tidak menyatakan apakah kakek benar-benar ikut.

Pembatalan penggunaan kapal laut dan bus merupakan fakta lain yang tidak cukup untuk membuktikan \\(p\\) ataupun \\(\\neg p\\). Pilihan B tepat karena tetap menyatakan premis bersyarat \\(p \\rightarrow q\\). Penarikan simpulan mengenai keikutsertaan kakek atau penggunaan bus sesudah dibatalkan memerlukan informasi tambahan.

Analisis Opsi:
A. Salah karena bus telah dibatalkan. Bus tidak jadi digunakan, maka kalimat yang menyatakan tetap menggunakan bus tidak sesuai.
B. Benar karena mengulang implikasi yang dinyatakan secara eksplisit.
C. Salah karena tetap menganggap keluarga menggunakan bus.
D. Salah karena tidak diketahui kakek ikut atau tidak, sementara bus dibatalkan.
E. Tidak dapat disimpulkan karena hubungan kapal laut dan keikutsertaan kakek tidak dinyatakan.

Kesimpulan:
Jawaban yang tepat adalah B. Hubungan bersyarat mengenai kakek dan pesawat adalah pernyataan yang didukung oleh bacaan.`,
        tingkat: 'mudah',
        status: 'direview',
      },
    ],
  },
  // ── Penalaran Induktif - Analitik (Urutan dan Posisi) ─────────────────────
  {
    soal: [
      // induktif no. 15
      {
        nomor: 14,
        tipe: 'pg',
        pertanyaan: `Seorang koordinator harus mengatur jadwal presentasi lima siswa, yaitu Fajar, Lani, Raka, Sinta, dan Dimas, dari hari Senin sampai Jumat. Setiap siswa mendapat satu hari presentasi.
Raka tidak dapat presentasi pada hari Senin atau Selasa.
Dimas harus presentasi tepat sehari setelah Sinta.
Lani presentasi pada hari Selasa.
Fajar presentasi dua hari sebelum Raka.
Siapakah yang presentasi pada hari Senin?`,
        opsi: [
          { label: 'A', teks: `Raka` },
          { label: 'B', teks: `Sinta` },
          { label: 'C', teks: `Dimas` },
          { label: 'D', teks: `Lani` },
          { label: 'E', teks: `Fajar` },
        ],
        kunci: 'E',
        pembahasan: `Submateri: Penalaran Induktif - Analitik (Urutan dan Posisi).
Penalaran urutan dan posisi menuntut pemenuhan seluruh syarat secara bersamaan. Lani telah ditetapkan pada Selasa. Karena Fajar harus dua hari sebelum Raka dan Raka tidak boleh Senin atau Selasa, pasangan yang mungkin ialah Fajar Senin–Raka Rabu, Fajar Selasa–Raka Kamis, atau Fajar Rabu–Raka Jumat.

Pasangan Selasa–Kamis gugur karena Selasa telah ditempati Lani. Pasangan Rabu–Jumat juga gugur karena hari tersisa untuk Sinta dan Dimas adalah Senin dan Kamis, padahal Dimas harus tepat sehari setelah Sinta. Dengan demikian, Fajar dijadwalkan Senin dan Raka Rabu. Sinta dan Dimas berturut-turut mendapat Kamis dan Jumat. Susunan ini memenuhi seluruh ketentuan, sehingga jawaban E benar.

Analisis Opsi:
A. Salah karena Raka harus presentasi pada hari Rabu setelah pasangan hari diuji.
B. Salah karena Sinta harus presentasi pada hari Kamis agar Dimas dapat sehari sesudahnya.
C. Salah karena Dimas mendapat giliran Jumat. Dimas mengikuti Sinta pada hari Jumat, bukan Senin.
D. Salah karena Lani sudah ditetapkan hari Selasa.
E. Benar karena Fajar harus Senin agar Raka Rabu dan Sinta–Dimas tetap berurutan Kamis– Jumat.

Kesimpulan:
Jawaban yang tepat adalah E. Fajar mendapat jadwal presentasi pada hari Senin.`,
        tingkat: 'sedang',
        status: 'direview',
      },
    ],
  },
  // ── Penalaran Induktif - Analitik (Bahasa Buatan) ─────────────────────────
  {
    soal: [
      // induktif no. 16
      {
        nomor: 15,
        tipe: 'pg',
        pertanyaan: `Sebuah kelompok rahasia memiliki sistem bahasa sendiri. Beberapa contoh kalimat mereka:
Kami belajar membaca = lufa sokri tami
Saya tidak belajar = nufa gomito sokri
Kamu membaca buku = koti tami lirus
Mereka belajar = ruma sokri
Berdasarkan informasi tersebut, bagaimana penulisan dalam bahasa buatan untuk kalimat "Mereka tidak membaca buku"?`,
        opsi: [
          { label: 'A', teks: `nufa koti tami lirus` },
          { label: 'B', teks: `lufa gomito tami lirus` },
          { label: 'C', teks: `koti gomito lirus tami` },
          { label: 'D', teks: `ruma gomito tami lirus` },
          { label: 'E', teks: `koti gomito sokri tami` },
        ],
        kunci: 'D',
        pembahasan: `Submateri: Penalaran Induktif - Analitik (Bahasa Buatan).
Bahasa buatan dianalisis dengan mencocokkan kata yang muncul berulang dalam pasangan kalimat. Dari ‘Kami belajar membaca’ dan ‘Saya tidak belajar’, kata ‘belajar’ sepadan dengan sokri. Dari kalimat pertama dan ‘Kamu membaca buku’, kata ‘membaca’ sepadan dengan tami.

Padanan yang tersisa dapat ditentukan: kami = lufa, saya = nufa, tidak = gomito, kamu = koti, dan buku = lirus. Contoh ‘Mereka belajar = ruma sokri’ menunjukkan bahwa mereka = ruma. Karena itu, ‘Mereka tidak membaca buku’ dituliskan ruma gomito tami lirus. Pilihan D merupakan satu-satunya opsi yang memiliki keempat padanan tersebut secara tepat.

Analisis Opsi:
A. Salah karena nufa berarti “saya”, bukan “mereka”, dan susunannya tidak memuat kata “tidak” dengan tepat.
B. Salah karena lufa berarti “kami”, bukan “mereka”.
C. Salah karena koti berarti “kamu”, bukan “mereka”.
D. Benar karena ruma = mereka, gomito = tidak, tami = membaca, dan lirus = buku.
E. Salah karena koti berarti “kamu” dan sokri berarti “belajar”.

Kesimpulan:
Jawaban yang tepat adalah D. Padanan kalimat yang tepat adalah ruma gomito tami lirus.`,
        tingkat: 'sedang',
        status: 'direview',
      },
    ],
  },
  // ── Penalaran Deduktif - Silogisme ────────────────────────────────────────
  {
    soal: [
      // induktif no. 12
      {
        nomor: 16,
        tipe: 'pg',
        pertanyaan: `Semua penderita hipertensi sangat dianjurkan untuk mengurangi asupan garam dan makanan olahan kemasan guna menjaga stabilitas tekanan darah. Langkah preventif ini penting untuk mencegah komplikasi kardiovaskular yang fatal, seperti serangan jantung. Ibu Dina baru saja didiagnosis menderita hipertensi oleh dokter setelah mengalami gejala sakit kepala parah dan menjalani pemeriksaan medis secara menyeluruh. Berdasarkan informasi di atas, manakah simpulan yang PALING TEPAT?`,
        opsi: [
          { label: 'A', teks: `Ibu Dina akan terhindar dari komplikasi serangan jantung jika ia hanya mengonsumsi makanan tanpa garam.` },
          { label: 'B', teks: `Makanan olahan kemasan adalah satu-satunya penyebab utama Ibu Dina mengalami gejala sakit kepala parah.` },
          { label: 'C', teks: `Ibu Dina tidak dianjurkan untuk mengonsumsi makanan apa pun selain makanan segar agar hipertensinya sembuh total.` },
          { label: 'D', teks: `Ibu Dina sangat dianjurkan untuk mengurangi asupan garam dan makanan olahan kemasan.` },
          { label: 'E', teks: `Ibu Dina pasti akan mengalami komplikasi kardiovaskular jika tidak mengikuti anjuran tersebut.` },
        ],
        kunci: 'D',
        pembahasan: `Submateri: Penalaran Deduktif - Silogisme.
Soal menerapkan silogisme dari aturan umum kepada satu anggota kelompok. Misalkan \\(H(x)\\) berarti ‘\\(x\\) merupakan penderita hipertensi’ dan \\(A(x)\\) berarti ‘\\(x\\) dianjurkan mengurangi garam dan makanan olahan kemasan’. Premisnya adalah \\(\\forall x\\,(H(x) \\rightarrow A(x))\\). Fakta bahwa Ibu Dina menderita hipertensi dinyatakan sebagai \\(H(\\text{Dina})\\).

Karena Ibu Dina merupakan anggota kelompok yang tercakup dalam aturan umum, berlaku \\(A(\\text{Dina})\\). Dengan kata lain, anjuran mengurangi garam dan makanan olahan kemasan juga berlaku bagi Ibu Dina. Premis tidak menjamin bahwa mengikuti anjuran pasti mencegah setiap komplikasi atau menyembuhkan penyakit sepenuhnya. Oleh karena itu, pilihan D merupakan penerapan aturan yang tepat.

Analisis Opsi:
A. Salah karena pembatasan asupan garam tidak menjamin terhindar dari seluruh komplikasi.
B. Salah karena soal tidak menetapkan makanan kemasan sebagai satu-satunya penyebab sakit kepala.
C. Salah karena larangan total makanan lain dan kesembuhan total tidak disebut dalam premis.
D. Benar karena Ibu Dina termasuk kelompok penderita hipertensi yang memperoleh anjuran tersebut.
E. Salah karena peningkatan risiko tidak sama dengan komplikasi yang pasti terjadi.

Kesimpulan:
Jawaban yang tepat adalah D. Anjuran umum bagi penderita hipertensi berlaku pula untuk Ibu Dina.`,
        tingkat: 'mudah',
        status: 'direview',
      },
    ],
  },
  // ── Penalaran Deduktif - Modus Tollens ────────────────────────────────────
  {
    soal: [
      // contoh hal. 5, Modus Tollens no. 1
      {
        nomor: 17,
        tipe: 'pg',
        pertanyaan: `Jika sebuah proyek konstruksi masuk dalam kategori “Prioritas Nasional”, maka seluruh pekerjanya wajib memiliki sertifikasi K3 tingkat lanjut.
Diketahui bahwa proyek pembangunan jembatan di Desa Sukamaju tidak mewajibkan sebagian pekerjanya memiliki sertifikasi K3 tingkat lanjut.
Berdasarkan teks di atas, simpulan yang benar adalah…`,
        opsi: [
          { label: 'A', teks: `Proyek pembangunan jembatan di Desa Sukamaju bukan kategori Prioritas Nasional.` },
          { label: 'B', teks: `Proyek pembangunan jembatan di Desa Sukamaju adalah proyek skala kecil.` },
          { label: 'C', teks: `Tidak ada pekerja di proyek Desa Sukamaju yang memiliki sertifikasi K3 tingkat lanjut.` },
          { label: 'D', teks: `Jika seluruh pekerja memiliki sertifikasi, maka proyek itu adalah Prioritas Nasional.` },
          { label: 'E', teks: `Proyek Prioritas Nasional mungkin membolehkan sebagian pekerja tanpa sertifikasi dalam kondisi tertentu.` },
        ],
        kunci: 'A',
        pembahasan: `Submateri: Penalaran Deduktif - Modus Tollens.
Premis: jika proyek berkategori Prioritas Nasional, maka seluruh pekerjanya wajib bersertifikasi K3 tingkat lanjut.
Fakta: proyek jembatan di Desa Sukamaju tidak mewajibkan sebagian pekerjanya bersertifikasi, jadi akibat "seluruh pekerja wajib bersertifikasi" tidak terpenuhi.
Modus tollens: kalau akibatnya tidak terjadi, syaratnya pasti tidak terpenuhi. Jadi proyek itu bukan kategori Prioritas Nasional.
Opsi D membalik premis (menegaskan konsekuensi), jadi bukan simpulan yang sah. Opsi B dan C tidak punya dasar di teks, dan opsi E bertentangan dengan premis.
Jawaban: A`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      // contoh hal. 6, Modus Tollens no. 3
      {
        nomor: 18,
        tipe: 'pg',
        pertanyaan: `Televisi di rumah Jono perlu diperbaiki karena sudah rusak. Jono sudah membuat rencana untuk mendatangkan teknisi ke rumahnya. Namun, jika teknisi membatalkan janjinya untuk datang ke rumah Jono, televisi tidak bisa diperbaiki karena Jono tidak bisa melakukannya sendiri. Selain itu, anaknya sedang mengerjakan tugas sekolah sehingga tidak bisa membantu. Jika rencana Jono berjalan lancar, kesimpulan yang PALING TEPAT adalah …`,
        opsi: [
          { label: 'A', teks: `Anak Jono tidak bisa membantu dan teknisi menepati janjinya.` },
          { label: 'B', teks: `Teknisi membatalkan janjinya dan televisi Jono tidak bisa diperbaiki.` },
          { label: 'C', teks: `Televisi Jono tidak bisa diperbaiki dan anak Jono tidak bisa membantu` },
          { label: 'D', teks: `Anak Jono bisa membantu Jono untuk memperbaiki televisi di rumahnya` },
          { label: 'E', teks: `Televisi Jono berhasil diperbaiki meskipun teknisi membatalkan janjinya` },
        ],
        kunci: 'A',
        pembahasan: `Submateri: Penalaran Deduktif - Modus Tollens.
Premis: jika teknisi membatalkan janjinya, televisi tidak bisa diperbaiki. Fakta lain: anak Jono sedang tidak bisa membantu.
"Rencana Jono berjalan lancar" berarti teknisi datang, yaitu tidak membatalkan janjinya. Jadi dua hal berlaku bersamaan: anak Jono tidak bisa membantu dan teknisi menepati janjinya.
Opsi B bertentangan dengan "rencana berjalan lancar". Opsi C memuat "televisi tidak bisa diperbaiki", padahal syarat premis (teknisi membatalkan) tidak terjadi. Opsi D bertentangan dengan fakta. Opsi E bertentangan dengan premis.
Jawaban: A`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      // contoh hal. 6, Modus Tollens no. 4
      {
        nomor: 19,
        tipe: 'pg',
        pertanyaan: `Tim barista dari Kafe X mengikuti lomba tahunan untuk menentukan kopi dengan rasa dan aroma terbaik. Mereka bisa menang berdasarkan dua hal. Pertama, jika mereka menggunakan biji kopi premium, rasa akan enak. Kedua, jika mesin kopi bekerja dengan baik, aroma kopi akan kuat. Berdasarkan pengalaman dari lomba-lomba sebelumnya, jika rasa kopi enak atau aromanya kuat, juri akan memberikan tanda tangan dengan memberikan tepuk tangan. Pada saat itu, setelah lomba berakhir, juri tidak memberikan tepuk tangan. Berdasarkan informasi di atas, kesimpulan yang PALING TEPAT adalah …`,
        opsi: [
          { label: 'A', teks: `Biji kopi premium digunakan dan mesin kopi bekerja dengan baik.` },
          { label: 'B', teks: `Biji kopi bukan premium atau mesin kopi tidak bekerja dengan baik.` },
          { label: 'C', teks: `Rasa kopi premiumnya enak, tetapi aromanya tidak terlalu kuat.` },
          { label: 'D', teks: `Biji kopinya premium, tetapi rasanya tidak enak dan aromanya tidak kuat.` },
          { label: 'E', teks: `Biji kopi bukan premium, tetapi mesin kopi bekerja dengan baik` },
        ],
        kunci: 'B',
        pembahasan: `Submateri: Penalaran Deduktif - Modus Tollens.
Rantai syarat: biji kopi premium, maka rasa enak; mesin kopi baik, maka aroma kuat; rasa enak atau aroma kuat, maka juri bertepuk tangan.
Fakta: juri tidak bertepuk tangan. Dengan modus tollens, rasa kopi tidak enak dan aroma tidak kuat. Dengan modus tollens lagi: biji kopi bukan premium (karena kalau premium, rasanya enak) dan mesin kopi tidak bekerja dengan baik (karena kalau baik, aromanya kuat).
Jadi "biji kopi bukan premium atau mesin kopi tidak bekerja dengan baik" pasti benar (opsi B). Opsi A, C, D, dan E memuat bagian yang bertentangan dengan simpulan di atas.
Jawaban: B`,
        status: 'draft',
      },
    ],
  },
  // ── Penalaran Deduktif - Argumen Berantai (Memperkuat/Memperlemah) ────────
  {
    soal: [
      // contoh hal. 7, Argumen Berantai no. 1
      {
        nomor: 20,
        tipe: 'pg',
        pertanyaan: `Tim layanan pelanggan mencatat rata-rata waktu penyelesaian tiket. Pada Maret, rata-rata 48 jam. Mulai awal April, tim memakai template balasan untuk pertanyaan berulang. Akhir April, rata-rata turun menjadi 36 jam. Manajer menyimpulkan penurunan terutama karena template.
Informasi tambahan manakah yang jika benar akan PALING MELEMAHKAN kesimpulan manajer?`,
        opsi: [
          { label: 'A', teks: `Pada April, tim menerima lebih sedikit tiket dibanding Maret.` },
          { label: 'B', teks: `Setelah template digunakan, beberapa staf merasa pekerjaan lebih mudah.` },
          { label: 'C', teks: `Tim lain yang tidak menggunakan template juga mengalami penurunan waktu serupa.` },
          { label: 'D', teks: `Akhir April, skor kepuasan pelanggan meningkat dibanding Maret.` },
          { label: 'E', teks: `Template hanya dipakai untuk tiket yang paling sering muncul.` },
        ],
        kunci: 'C',
        pembahasan: `Submateri: Penalaran Deduktif - Argumen Berantai (Memperkuat/Memperlemah).
Kesimpulan manajer bersifat sebab-akibat: template adalah penyebab utama turunnya waktu penyelesaian. Informasi yang paling melemahkan adalah yang menunjukkan penurunan terjadi juga tanpa template.
Opsi C menyebut tim lain yang tidak memakai template turun serupa, jadi penurunan itu kemungkinan besar karena faktor umum, bukan template. Ini bukti pembanding yang paling kuat.
Opsi A juga menawarkan penyebab lain (tiket lebih sedikit), tetapi pengaruhnya pada waktu penyelesaian harus diandaikan lebih dulu, jadi lebih lemah dari C. Opsi B dan D tidak menyentuh hubungan sebab-akibatnya, dan opsi E tidak melemahkan (template dipakai untuk tiket yang paling sering muncul, sehingga pengaruhnya masuk akal).
Jawaban: C`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      // contoh hal. 7, Argumen Berantai no. 2
      {
        nomor: 21,
        tipe: 'pg',
        pertanyaan: `Jika seorang nasabah memiliki saldo rata-rata di atas Rp500 juta, maka ia berhak mendapatkan layanan Priority Banking atau voucher belanja eksekutif setiap bulan. Bapak Santoso tercatat memiliki saldo rata-rata Rp750 juta di bank tersebut. Namun, pada bulan ini pihak bank menyatakan bahwa Bapak Santoso tidak mendapatkan voucher belanja eksekutif.
Berdasarkan teks di atas, simpulan yang pasti benar adalah…`,
        opsi: [
          { label: 'A', teks: `Bapak Santoso mendapatkan layanan Priority Banking.` },
          { label: 'B', teks: `Bapak Santoso mungkin mendapatkan layanan Priority Banking jika ia mengajukan permohonan.` },
          { label: 'C', teks: `Bapak Santoso tidak berhak atas hadiah apa pun dari bank karena sistem error.` },
          { label: 'D', teks: `Jika Bapak Santoso mendapatkan voucher belanja, maka saldonya pasti di bawah Rp500 juta.` },
          { label: 'E', teks: `Bapak Santoso mendapatkan layanan Priority Banking dan voucher belanja eksekutif sekaligus.` },
        ],
        kunci: 'A',
        pembahasan: `Submateri: Penalaran Deduktif - Argumen Berantai (Memperkuat/Memperlemah).
Premis: saldo rata-rata di atas Rp500 juta, maka berhak atas Priority Banking atau voucher belanja. Saldo Pak Santoso Rp750 juta, jadi ia berhak atas salah satunya.
Bank menyatakan ia tidak mendapat voucher, maka yang tersisa adalah Priority Banking (silogisme disjungtif).
Opsi B menambah syarat "mengajukan permohonan" yang tidak ada di teks. Opsi C dan E bertentangan dengan teks. Opsi D tidak mengikuti dari premis: teks tidak membatasi voucher untuk saldo rendah, dan saldo Pak Santoso justru Rp750 juta.
Jawaban: A`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      // contoh hal. 7-8, Argumen Berantai no. 3
      {
        nomor: 22,
        tipe: 'pg',
        pertanyaan: `Iwan menanam pohon mangga di halaman rumahnya. Di dalam buku panduan penanaman pohon mangga, disebutkan jika ia memberi pupuk kompos secara teratur dan menyiram pohon mangga setiap hari pohon tersebut akan tumbuh dengan subur. Kesuburan pohon mangga adalah kunci keberhasilan pembuahan. Buku panduan itu juga menuliskan bahwa jika tumbuh dengan subur, pohon mangga akan menghasilkan banyak buah. Berdasarkan pernyataan di atas, kesimpulan yang PALING TEPAT adalah …`,
        opsi: [
          { label: 'A', teks: `Jika Iwan memberi pupuk secara teratur dan menyiram pohon mangga setiap hari, pohon tersebut akan menghasilkan banyak buah.` },
          { label: 'B', teks: `Jika pohon mangga menghasilkan banyak buah, pohon tersebut tumbuh dengan subur di halaman rumahnya.` },
          { label: 'C', teks: `Iwan memberi pupuk kompos secara teratur dan rajin menyiram pohon mangganya setiap hari.` },
          { label: 'D', teks: `Jika pohon mangga tumbuh dengan subur di halaman rumahnya, Iwan memberi pupuk secara teratur dan menyiramnya.` },
          { label: 'E', teks: `Iwan tidak memberi pupuk secara teratur dan tidak menyiram pohon mangga setiap hari sehingga pohon tersebut tidak tumbuh dengan subur.` },
        ],
        kunci: 'A',
        pembahasan: `Submateri: Penalaran Deduktif - Argumen Berantai (Memperkuat/Memperlemah).
Dua premis berantai: (1) pupuk teratur dan siram setiap hari, maka pohon subur; (2) pohon subur, maka banyak buah.
Digabung (silogisme hipotetik): pupuk teratur dan siram setiap hari, maka pohon menghasilkan banyak buah. Itulah opsi A.
Opsi B dan D membalik arah premis (menegaskan konsekuensi). Opsi C menyatakan syaratnya sudah terpenuhi padahal teks tidak mengatakannya. Opsi E menyangkal syarat lalu menyimpulkan akibatnya tidak terjadi (menyangkal anteseden), dan itu tidak sah.
Jawaban: A`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      // contoh hal. 8, Argumen Berantai no. 4
      {
        nomor: 23,
        tipe: 'pg',
        pertanyaan: `Pemerintah Daerah X meluncurkan program Sekolah Inovatif yang bertujuan untuk meningkatkan kualitas pembelajaran berbasis teknologi di seluruh daerah. Pemerintah berjanji, jika sekolah-sekolah di daerah berhasil menyusun kurikulum inovatif sesuai standar nasional, sekolah-sekolah tersebut akan mendapatkan pelatihan guru atau bantuan perangkat digital. Pernyataan tersebut menunjukkan bahwa penyusunan kurikulum inovatif merupakan indikator utama komitmen sekolah terhadap pembaruan pendidikan. Selain itu pemerintah juga menyatakan jika sekolah sudah mendapatkan pelatihan guru atau bantuan perangkat digital, sekolah tersebut akan dikategorikan sebagai sekolah maju sehingga sekolah tersebut berpeluang menjadi sekolah percontohan dalam penerapan teknologi dan inovasi pendidikan di daerahnya. Berdasarkan pernyataan Pemerintah Daerah X, apa kesimpulan yang PALING TEPAT?`,
        opsi: [
          { label: 'A', teks: `Sekolah bisa menjadi percontohan meskipun tidak pernah mendapat pelatihan guru atau bantuan perangkat digital.` },
          { label: 'B', teks: `Sekolah yang gurunya tidak mendapatkan pelatihan tidak bisa dikategorikan ke dalam sekolah maju.` },
          { label: 'C', teks: `Jika sekolah menggunakan perangkat digital, sekolah tersebut berhasil menyusun kurikulum inovatif.` },
          { label: 'D', teks: `Jika berhasil menyusun kurikulum inovatif sesuai standar nasional, sekolah tersebut dikelompokkan sebagai sekolah maju.` },
          { label: 'E', teks: `Sekolah yang bukan sekolah maju tidak menjalankan program pembelajaran berbasis teknologi` },
        ],
        kunci: 'D',
        pembahasan: `Submateri: Penalaran Deduktif - Argumen Berantai (Memperkuat/Memperlemah).
Premis 1: berhasil menyusun kurikulum inovatif, maka mendapat pelatihan guru atau bantuan perangkat digital.
Premis 2: mendapat pelatihan guru atau bantuan perangkat digital, maka dikategorikan sekolah maju.
Digabung: berhasil menyusun kurikulum inovatif, maka dikelompokkan sebagai sekolah maju (opsi D).
Opsi A tidak punya dasar di teks. Opsi B keliru karena syaratnya "pelatihan guru ATAU bantuan perangkat digital", jadi sekolah tanpa pelatihan guru masih bisa menjadi sekolah maju lewat bantuan perangkat digital. Opsi C membalik premis. Opsi E tidak disimpulkan dari teks.
Jawaban: D`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      // contoh hal. 8, Argumen Berantai no. 5
      {
        nomor: 24,
        tipe: 'pg',
        pertanyaan: `Dalam kegiatan praktikum biologi, Kelompok A ditugaskan untuk meneliti struktur daun, sedangkan Kelompok B meneliti jenis mikroorganisme di air. Guru menyampaikan aturan, yaitu jika Kelompok A berhasil menyusun laporan penelitian tentang struktur daun, mereka harus melakukan uji lanjutan di laboratorium. Sementara itu, jika Kelompok B berhasil mengamati mikroorganisme dengan tepat, mereka diperbolehkan melakukan presentasi hasil minggu depan. Guru menambahkan bahwa jika salah satu dari kedua kelompok berhasil menyelesaikan tugas awalnya, siswa kelas Biologi tersebut akan diundang untuk mengikuti kompetisi penelitian sekolah. Setelah menjadi peserta kompetisi, paling tidak, salah satu kegiatan lanjutan akan terjadi, yaitu Kelompok A melakukan uji lanjutan atau Kelompok B mempresentasikan hasil minggu depan. Ternyata salah satu dari kedua kelompok berhasil menyelesaikan tugas awalnya. Berdasarkan keadaan tersebut, manakah kesimpulan yang PALING TEPAT?`,
        opsi: [
          { label: 'A', teks: `Kelompok A melakukan uji lanjutan atau Kelompok B boleh mempresentasikan hasilnya.` },
          { label: 'B', teks: `Kelompok A atau Kelompok B tidak berhasil mengikuti kompetisi penelitian.` },
          { label: 'C', teks: `Kelompok A wajib melakukan uji lanjutan karena mereka telah menyusun laporan.` },
          { label: 'D', teks: `Kelompok B mempresentasikan hasilnya karena mereka berhasil melakukan pengamatan.` },
          { label: 'E', teks: `Kegiatan praktikum biologi diadakan untuk kelas Biologi yang dipersiapkan untuk mengikuti kompetisi.` },
        ],
        kunci: 'A',
        pembahasan: `Submateri: Penalaran Deduktif - Argumen Berantai (Memperkuat/Memperlemah).
Salah satu kelompok berhasil menyelesaikan tugas awalnya, maka kelas Biologi diundang ke kompetisi penelitian (premis ketiga).
Setelah menjadi peserta kompetisi, pasti terjadi paling tidak salah satu kegiatan lanjutan: Kelompok A melakukan uji lanjutan atau Kelompok B mempresentasikan hasil (premis keempat). Itulah opsi A.
Opsi B bertentangan dengan rantai di atas. Opsi C dan D mengandaikan kelompok tertentu yang berhasil, padahal hanya diketahui "salah satu dari kedua kelompok". Opsi E tidak disimpulkan dari teks.
Jawaban: A`,
        status: 'draft',
      },
    ],
  },
  // ── Penalaran Deduktif - Mengafirmasi Konsekuensi ─────────────────────────
  {
    soal: [
      // contoh hal. 9-10, Mengafirmasi Konsekuensi no. 1
      {
        nomor: 25,
        tipe: 'pg',
        pertanyaan: `Pakar manajemen sumber daya manusia sedang mengevaluasi kebijakan sistem kerja yang ideal. Dari hasil evaluasi, diperoleh informasi sebagai berikut:
• Jika perusahaan menerapkan sistem kerja jarak jauh, maka karyawan memiliki fleksibilitas waktu yang tinggi.
• Jika karyawan memiliki fleksibilitas waktu yang tinggi, maka tingkat stres pekerja menurun drastis.
• Jika tingkat stres pekerja menurun drastis, maka produktivitas perusahaan meningkat pesat.
Namun, dalam laporan performa kuartal terakhir, statistik menunjukkan bahwa produktivitas perusahaan saat ini stagnan dan tidak mengalami peningkatan.
Berdasarkan informasi tersebut, manakah kesimpulan yang PASTI BENAR?`,
        opsi: [
          { label: 'A', teks: `Perusahaan mewajibkan seluruh karyawan bekerja di kantor setiap hari.` },
          { label: 'B', teks: `Tingkat stres pekerja di perusahaan tersebut saat ini sangat tinggi.` },
          { label: 'C', teks: `Karyawan memilih untuk tidak menggunakan fleksibilitas waktu yang diberikan.` },
          { label: 'D', teks: `Penurunan tingkat stres pekerja tidak ada hubungannya dengan peningkatan produktivitas.` },
          { label: 'E', teks: `Perusahaan tidak menerapkan sistem kerja jarak jauh.` },
        ],
        kunci: 'E',
        pembahasan: `Submateri: Penalaran Deduktif - Mengafirmasi Konsekuensi.
Rantai: kerja jarak jauh, maka fleksibilitas waktu tinggi; fleksibilitas tinggi, maka stres turun drastis; stres turun drastis, maka produktivitas meningkat pesat.
Fakta: produktivitas stagnan (tidak meningkat pesat). Dari belakang ke depan (modus tollens berantai): stres tidak turun drastis, fleksibilitas waktu tidak tinggi, dan perusahaan tidak menerapkan sistem kerja jarak jauh. Itulah opsi E.
Opsi A, B, dan C menambahkan hal yang tidak ada di premis (wajib ke kantor, stres "sangat tinggi", karyawan memilih tidak memakai fleksibilitas). Opsi D bertentangan dengan premis.
Jawaban: E`,
        status: 'draft',
      },
    ],
  },
  // ── Penalaran Kuantitatif - Operasi Bilangan ──────────────────────────────
  {
    soal: [
      // contoh hal. 10, Operasi Bilangan no. 1
      {
        nomor: 26,
        tipe: 'isian_singkat',
        pertanyaan: `\\(3x^{2} = \\frac{6}{y}\\) dan \\(xy = 2\\). Nilai dari \\(3x\\) adalah…`,
        kunci: '3',
        pembahasan: `Submateri: Penalaran Kuantitatif - Operasi Bilangan.
Kalikan kedua ruas persamaan pertama dengan \\(y\\): \\(3x^{2}y = 6\\).
Tuliskan \\(3x^{2}y = 3x \\cdot (xy)\\). Karena \\(xy = 2\\), maka \\(3x \\cdot 2 = 6\\), sehingga \\(x = 1\\) dan \\(3x = 3\\).
Cek: \\(y = 2\\), \\(3x^{2} = 3\\), dan \\(\\frac{6}{y} = 3\\).
Jawaban: 3`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      // contoh hal. 10, Operasi Bilangan no. 2
      {
        nomor: 27,
        tipe: 'isian_singkat',
        pertanyaan: `\\(x^{3} = \\frac{54}{y^{2}}\\) dan \\(xy = 3\\). Nilai dari \\(2x\\) adalah…`,
        kunci: '12',
        pembahasan: `Submateri: Penalaran Kuantitatif - Operasi Bilangan.
Kalikan kedua ruas persamaan pertama dengan \\(y^{2}\\): \\(x^{3}y^{2} = 54\\).
Tuliskan \\(x^{3}y^{2} = x \\cdot (xy)^{2}\\). Karena \\(xy = 3\\), maka \\(x \\cdot 9 = 54\\), sehingga \\(x = 6\\) dan \\(2x = 12\\).
Cek: \\(y = \\frac{3}{6} = 0,5\\); \\(x^{3} = 216\\) dan \\(\\frac{54}{y^{2}} = \\frac{54}{0,25} = 216\\).
Jawaban: 12`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      // contoh hal. 10, Operasi Bilangan no. 3
      {
        nomor: 28,
        tipe: 'isian_singkat',
        pertanyaan: `Jika \\(x^{2}y - 3xy = 10\\) dan \\(xy = 2\\), maka nilai dari \\(x\\) adalah…`,
        kunci: '8',
        pembahasan: `Submateri: Penalaran Kuantitatif - Operasi Bilangan.
\\(x^{2}y = x \\cdot (xy) = 2x\\) dan \\(3xy = 3 \\cdot 2 = 6\\).
Persamaannya menjadi \\(2x - 6 = 10\\), sehingga \\(2x = 16\\) dan \\(x = 8\\).
Cek: \\(y = \\frac{2}{8} = 0,25\\); \\(x^{2}y = 64 \\times 0,25 = 16\\) dan \\(16 - 6 = 10\\).
Jawaban: 8`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      // contoh hal. 10, Operasi Bilangan no. 4
      {
        nomor: 29,
        tipe: 'pg',
        pertanyaan: `Jika \\(6x^{2}y = 12\\) dan \\(xy = 3\\), maka \\(y = \\ldots\\).`,
        opsi: [
          { label: 'A', teks: `\\(3\\frac{1}{4}\\)` },
          { label: 'B', teks: `\\(3\\frac{3}{4}\\)` },
          { label: 'C', teks: `\\(4\\frac{1}{2}\\)` },
          { label: 'D', teks: `\\(4\\frac{2}{3}\\)` },
          { label: 'E', teks: `\\(5\\frac{1}{3}\\)` },
        ],
        kunci: 'C',
        pembahasan: `Submateri: Penalaran Kuantitatif - Operasi Bilangan.
\\(6x^{2}y = 6x \\cdot (xy) = 6x \\cdot 3 = 18x = 12\\), sehingga \\(x = \\frac{2}{3}\\).
Maka \\(y = \\frac{3}{x} = \\frac{3}{2/3} = \\frac{9}{2} = 4\\frac{1}{2}\\).
Jawaban: C`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      // contoh hal. 10, Operasi Bilangan no. 5
      {
        nomor: 30,
        tipe: 'pg',
        pertanyaan: `Pompa P menyelesaikan pengurasan kolam tiap 18 menit sekali dan pompa O tiap 24 menit sekali. Kedua pompa mulai bekerja pukul 10.00. Pada pukul berapa keduanya menyelesaikan pengurasan kolam pada waktu yang sama untuk pertama kalinya sejak mulai bekerja?`,
        opsi: [
          { label: 'A', teks: `10.48` },
          { label: 'B', teks: `10.54` },
          { label: 'C', teks: `11.00` },
          { label: 'D', teks: `11.12` },
          { label: 'E', teks: `11.18` },
        ],
        kunci: 'D',
        pembahasan: `Submateri: Penalaran Kuantitatif - Operasi Bilangan.
Waktu keduanya selesai bersamaan untuk pertama kalinya adalah KPK dari 18 dan 24 menit.
\\(18 = 2 \\times 3^{2}\\) dan \\(24 = 2^{3} \\times 3\\), sehingga KPK = \\(2^{3} \\times 3^{2} = 72\\) menit.
10.00 ditambah 72 menit (1 jam 12 menit) = 11.12.
Jawaban: D`,
        status: 'draft',
      },
    ],
  },
  // ── Penalaran Kuantitatif - Persentase dan Proporsi ───────────────────────
  {
    soal: [
      // contoh hal. 10, Persentase dan Proporsi no. 1
      {
        nomor: 31,
        tipe: 'pg',
        pertanyaan: `Berdasarkan hasil sensus penduduk RT 01 desa X, sejumlah 0,50 dari \\(\\frac{3}{5}\\) total penduduk adalah 30 orang.
Berapakah 75% dari total penduduk RT 01 desa X?`,
        opsi: [
          { label: 'A', teks: `85` },
          { label: 'B', teks: `75` },
          { label: 'C', teks: `65` },
          { label: 'D', teks: `60` },
          { label: 'E', teks: `50` },
        ],
        kunci: 'B',
        pembahasan: `Submateri: Penalaran Kuantitatif - Persentase dan Proporsi.
\\(0,50 \\times \\frac{3}{5} = 0,3\\), jadi 30% dari total penduduk = 30 orang.
Total penduduk = \\(30 \\div 0,3 = 100\\) orang.
75% dari total penduduk = \\(0,75 \\times 100 = 75\\).
Jawaban: B`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      // contoh hal. 11, Persentase dan Proporsi no. 2
      {
        nomor: 32,
        tipe: 'pg',
        pertanyaan: `Kelas A terdiri dari 60% siswa perempuan dan sisanya laki-laki. Setiap siswa menggunakan 1 meja. Sebanyak 40% meja berwarna biru, sisanya merah. Jika separuh siswa perempuan menggunakan meja merah, berapa persen meja biru dari total meja di kelas yang bisa digunakan siswa laki-laki?`,
        opsi: [
          { label: 'A', teks: `5` },
          { label: 'B', teks: `10` },
          { label: 'C', teks: `20` },
          { label: 'D', teks: `30` },
          { label: 'E', teks: `50` },
        ],
        kunci: 'B',
        pembahasan: `Submateri: Penalaran Kuantitatif - Persentase dan Proporsi.
Misalkan ada 100 siswa, jadi ada 100 meja: 60 siswa perempuan, 40 siswa laki-laki, 40 meja biru, dan 60 meja merah.
Separuh siswa perempuan (30 orang) memakai meja merah, jadi 30 siswa perempuan lainnya memakai meja biru.
Meja biru yang masih bisa dipakai siswa laki-laki = 40 - 30 = 10 meja, yaitu 10 dari 100 meja = 10%.
(Dibandingkan dengan 40 meja untuk siswa laki-laki hasilnya 25%, tetapi pertanyaan menanyakan persentase dari total meja di kelas, dan 25% bukan pilihan.)
Jawaban: B`,
        status: 'draft',
      },
    ],
  },
  // ── Penalaran Kuantitatif - Soal Cerita ───────────────────────────────────
  {
    soal: [
      // contoh hal. 11, Soal Cerita no. 1
      {
        nomor: 33,
        tipe: 'isian_singkat',
        pertanyaan: `Diketahui untuk membuat 2 patung gajah dan 3 patung banteng selesai dalam 8 jam. Sedangkan untuk membuat 1 patung gajah dan 2 patung banteng selesai dalam 5 jam. Waktu yang dibutuhkan untuk membuat 4 patung gajah dan 1 patung banteng adalah ........ jam.`,
        kunci: '6',
        pembahasan: `Submateri: Penalaran Kuantitatif - Soal Cerita.
Misalkan waktu membuat 1 patung gajah \\(= g\\) jam dan 1 patung banteng \\(= b\\) jam.
\\(2g + 3b = 8\\) dan \\(g + 2b = 5\\). Kalikan persamaan kedua dengan 2: \\(2g + 4b = 10\\).
Kurangkan dengan persamaan pertama: \\(b = 2\\). Maka \\(g = 5 - 2 \\times 2 = 1\\).
Waktu untuk 4 gajah dan 1 banteng = \\(4 \\times 1 + 2 = 6\\) jam.
Jawaban: 6`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      // contoh hal. 11, Soal Cerita no. 2
      {
        nomor: 34,
        tipe: 'isian_singkat',
        pertanyaan: `Diketahui waktu untuk membuat 3 patung lumba-lumba dan 2 patung bebek adalah 12 jam. Sedangkan untuk membuat 2 patung lumba-lumba dan 1 patung bebek selesai dalam 7 jam. Waktu yang dibutuhkan untuk membuat 1 patung lumba-lumba dan 4 patung bebek adalah .... jam.`,
        kunci: '14',
        pembahasan: `Submateri: Penalaran Kuantitatif - Soal Cerita.
Misalkan waktu 1 patung lumba-lumba \\(= l\\) jam dan 1 patung bebek \\(= b\\) jam.
\\(3l + 2b = 12\\) dan \\(2l + b = 7\\). Kalikan persamaan kedua dengan 2: \\(4l + 2b = 14\\).
Kurangkan dengan persamaan pertama: \\(l = 2\\). Maka \\(b = 7 - 2 \\times 2 = 3\\).
Waktu untuk 1 lumba-lumba dan 4 bebek = \\(2 + 4 \\times 3 = 14\\) jam.
Jawaban: 14`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      // contoh hal. 11, Soal Cerita no. 3
      {
        nomor: 35,
        tipe: 'pg',
        pertanyaan: `Harga total dua bidang tanah di Daerah A dan Daerah B saat ini adalah Rp400 juta. Empat tahun yang lalu harga tanah di Daerah B adalah 3 kali lipat harga tanah di Daerah A. Jika setiap tanah mengalami kenaikan harga yang sama setiap tahun, yaitu Rp5 juta, berapakah harga tanah di Daerah B saat ini?`,
        opsi: [
          { label: 'A', teks: `Rp90 juta` },
          { label: 'B', teks: `Rp95 juta` },
          { label: 'C', teks: `Rp250 juta` },
          { label: 'D', teks: `Rp270 juta` },
          { label: 'E', teks: `Rp290 juta` },
        ],
        kunci: 'E',
        pembahasan: `Submateri: Penalaran Kuantitatif - Soal Cerita.
Selama 4 tahun setiap tanah naik \\(4 \\times\\) Rp5 juta = Rp20 juta.
Empat tahun lalu total harga kedua tanah = Rp400 juta - 2 \\(\\times\\) Rp20 juta = Rp360 juta.
Saat itu harga B = 3 kali harga A, jadi A = Rp360 juta \\(\\div 4\\) = Rp90 juta dan B = Rp270 juta.
Harga B saat ini = Rp270 juta + Rp20 juta = Rp290 juta.
Jawaban: E`,
        status: 'draft',
      },
    ],
  },
  // ── Penalaran Kuantitatif - Tabel dan Grafik ──────────────────────────────
  {
    soal: [
      // contoh hal. 11, Tabel dan Grafik no. 1
      {
        nomor: 36,
        tipe: 'pg',
        pertanyaan: `Tabel berikut menunjukkan persentase nilai ujian olahraga lima siswa dalam dua jenis cabang olahraga: lari jarak menengah, dan lompat jauh. Angka dalam tanda kurung menunjukkan nilai maksimum yang dapat dicapai pada masing-masing cabang.
Atlet | Lari (120) | Lompat Jauh (80)
K | 85% | 70%
L | 95% | 60%
M | 80% | 80%
N | 90% | 80%
O | 88% | 75%
Siapa yang memperoleh skor total tertinggi?`,
        opsi: [
          { label: 'A', teks: `K` },
          { label: 'B', teks: `L` },
          { label: 'C', teks: `M` },
          { label: 'D', teks: `N` },
          { label: 'E', teks: `O` },
        ],
        kunci: 'D',
        pembahasan: `Submateri: Penalaran Kuantitatif - Tabel dan Grafik.
Skor = persentase \\(\\times\\) nilai maksimum, dijumlahkan untuk dua cabang.
K: \\(0,85 \\times 120 + 0,70 \\times 80 = 102 + 56 = 158\\)
L: \\(0,95 \\times 120 + 0,60 \\times 80 = 114 + 48 = 162\\)
M: \\(0,80 \\times 120 + 0,80 \\times 80 = 96 + 64 = 160\\)
N: \\(0,90 \\times 120 + 0,80 \\times 80 = 108 + 64 = 172\\)
O: \\(0,88 \\times 120 + 0,75 \\times 80 = 105,6 + 60 = 165,6\\)
Skor tertinggi dimiliki N.
Jawaban: D`,
        status: 'draft',
      },
    ],
  },
  // ── Penalaran Kuantitatif - Kecukupan Data ────────────────────────────────
  {
    soal: [
      // contoh hal. 12-13, Kecukupan Data no. 1
      {
        nomor: 37,
        tipe: 'pg',
        pertanyaan: `Pompa A dan B digunakan untuk mengisi tandon berukuran sama. Pernyataan:
i. Pompa B dan Pompa A jika digunakan bersama dapat mengisi tandon dalam 40 menit.
ii. Laju aliran Pompa A adalah 1,2 kali laju aliran Pompa B.
Berdasarkan informasi yang diberikan, apakah Pompa A lebih cepat mengisi tandon daripada Pompa B?`,
        opsi: [
          { label: 'A', teks: `Pernyataan (i) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (ii) SAJA tidak cukup.` },
          { label: 'B', teks: `Pernyataan (ii) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (i) SAJA tidak cukup.` },
          { label: 'C', teks: `DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.` },
          { label: 'D', teks: `SALAH SATU dari pernyataan SAJA cukup untuk menjawab pertanyaan.` },
          { label: 'E', teks: `Pernyataan (i) dan pernyataan (ii) TIDAK CUKUP untuk menjawab pertanyaan.` },
        ],
        kunci: 'B',
        pembahasan: `Submateri: Penalaran Kuantitatif - Kecukupan Data.
Yang ditanyakan hanya perbandingan kecepatan Pompa A dan Pompa B.
Pernyataan (ii): laju A = 1,2 kali laju B, jadi laju A lebih besar dan A lebih cepat mengisi tandon. Pernyataan (ii) saja sudah cukup.
Pernyataan (i) hanya memberi waktu pengisian saat kedua pompa bekerja bersama (40 menit). Itu tidak membedakan laju A dan B, jadi pernyataan (i) saja tidak cukup.
Jawaban: B`,
        status: 'draft',
      },
    ],
  },
  // ── Penalaran Kuantitatif - Pola Barisan ──────────────────────────────────
  {
    soal: [
      // kurikulum hal. 20-21, BAB IV Tipe Soal Majemuk Kompleks, Contoh Soal 2
      {
        nomor: 38,
        tipe: 'pg_kategori',
        pertanyaan: `Kertas berpetak memiliki ukuran 8 × 8 petak. Pada baris pertama, petak pertama, yaitu paling kiri ditulis dengan 1, petak kedua bilangan 2, petak ketiga bilangan 4, petak keempat bilangan 8, demikian seterusnya sampai petak kedelapan ditulis bilangan 128. Pola baris kedua mengikuti pola baris pertama yang dimulai dengan bilangan 256 dan seterusnya sampai baris ke-8.
Pilihlah Ya atau Tidak untuk setiap pernyataan yang sesuai.`,
        opsi: [
          { label: 'A', teks: `Bilangan pada petak ke-3 baris ke-2 adalah 512` },
          { label: 'B', teks: `Jumlah bilangan pada petak pertama sampai ke-5 baris pertama adalah 31` },
          { label: 'C', teks: `Bilangan pada baris ke-8 petak ke-8 adalah \\(2^{64}\\)` },
        ],
        kategori: ['Ya', 'Tidak'],
        kunci: 'Tidak, Ya, Tidak',
        pembahasan: `Submateri: Penalaran Kuantitatif - Pola Barisan.
Bilangan tiap petak dua kali bilangan petak sebelumnya, dan pola itu berlanjut ke baris berikutnya (baris kedua dimulai 256, yaitu \\(2 \\times 128\\)). Jadi petak ke-\\(k\\) pada baris ke-\\(r\\) bernilai \\(2^{8(r-1) + (k-1)}\\).
A. Baris ke-2: petak ke-1 \\(= 256\\), petak ke-2 \\(= 512\\), petak ke-3 \\(= 1.024\\). Bilangan 512 ada pada petak ke-2, bukan petak ke-3. Tidak.
B. Baris pertama petak ke-1 sampai ke-5: \\(1 + 2 + 4 + 8 + 16 = 31\\). Ya.
C. Baris ke-8 petak ke-8: \\(2^{8 \\times 7 + 7} = 2^{63}\\), bukan \\(2^{64}\\). Tidak.
Jawaban: A. Tidak; B. Ya; C. Tidak`,
        status: 'draft',
      },
    ],
  },
];
