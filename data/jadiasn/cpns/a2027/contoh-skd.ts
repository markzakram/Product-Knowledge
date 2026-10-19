import type { Kelompok } from '@/lib/skema';

/**
 * Contoh soal SKD: satu paket penuh 110 soal dari SKD Generator (TWK 30, TIU 35, TKP 45).
 *
 * Dipakai bersama oleh SKD CPNS 2027 (data/jadiasn/cpns/a2027) dan SKD Sekolah Kedinasan 2026
 * (data/jadisekdin/skd/a2026): kedua angkatan mengimpor berkas ini, jadi paketnya SATU dan SAMA.
 * Ditulis sekali di sini, bukan disalin; gambar figural tetap di public/gambar/jadiasn/.
 *
 * Sumber: data/tryout-reference.json (312 contoh tryout 2027 yang diterima di SKD Generator, dari
 * 12 dokumen tim) dan data/skd-mapping.json (Mapping SKD 2027, kuota paket 1). Pemilihan memakai
 * kuota baris berkuota mapping: TWK 6 soal per materi (Bahasa Negara 1 soal tiap chapter), TIU
 * verbal 11, numerik 16, dan figural 8, TKP 8/8/8/7/7/7. Rotasi paket 1 dipakai untuk Kecukupan
 * Data (Aljabar: Operasi Aljabar dan Persamaan; Bilangan: Jenis dan Sifat; Soal Cerita: Geometri,
 * Perbandingan Senilai dan Berbalik, Aljabar). Soal diurut per materi lalu per tingkat; nomor
 * berurutan 1 sampai 30, 1 sampai 35, dan 1 sampai 45 di tiap subtes. Di atas tiap soal ada
 * komentar rujukan ke berkas sumbernya.
 *
 * Seleksi deterministik: seed "PK-SKD-2027-PAKET-1"; di dalam tiap materi, soal diacak dengan seed itu lalu
 * diambil menurut target tingkat (mudah/sedang/sulit) yang seimbang. Tidak dipilih: 10 soal yang
 * pembahasannya memuat gambar docx yang tidak ikut ke data (tiga Deret Angka 2 dan 3 Towew, tiga
 * Rute dan Jalur, dua Logika Pernyataan, satu Urutan dan Peringkat, satu Susunan dan Posisi) dan
 * TKP Nynda soal 1 (alasan opsi D tidak sesuai di sumbernya).
 *
 * Pengisi kekosongan: tryout generator tidak punya contoh analogi 2 kata, deret angka 1 Towew
 * (ketiga contoh deretnya bergambar dan gambarnya tidak ikut), maupun figural. Kesepuluh soal itu
 * (1 analogi, 1 deret, 8 figural) diambil dari contoh TIU riset CPNS 2027 ("Contoh Soal TIU SKD
 * 2027") yang sudah ada di Product Knowledge, lengkap dengan gambarnya, dan tetap berstatus
 * 'direview' seperti sebelumnya. Dokumen itu tidak menulis tingkat kesulitan, jadi kesepuluhnya
 * tanpa `tingkat`.
 *
 * Konversi: `answer` (indeks 0) menjadi huruf; `difficulty` menjadi `tingkat` ("hots" ditulis
 * 'sulit'); `pembahasan` = penjelasan + alasan opsi yang tidak generik (alasan baku "Penjelasan per
 * pilihan tidak dipisahkan dalam sumber" dan "Pilihan ini sesuai dengan konsep" dibuang) + "Cara
 * cepat" bila ada tip. Pecahan dan pangkat notasi Word (pembilang, penyebut, dan pangkat dalam
 * kurung) ditulis LaTeX, tabel soal dan tabel
 * pembahasan ditulis sebagai rumus array LaTeX, angka tebal matematis diganti angka biasa, dan
 * angka bercoret ditulis \cancel. TKP bertipe 'skala': `kunci` adalah opsi berskor 5, skor 1 sampai
 * 5 tiap opsi ada di pembahasan. Akhiran "(Aspek)" di stem TKP dokumen sumber (label kategori,
 * mis. "(Pelayanan Publik)") dibuang karena aspeknya sudah menjadi judul kelompok. Satu salah ketik
 * yang jelas diperbaiki ("bukan bukan" di soal TWK 3); selebihnya teks sumber utuh.
 *
 * Status 'draft': isinya hasil dokumen tim generator dan belum ditelaah untuk etalase.
 */
/** 30 soal TWK: Nasionalisme, Integritas, Bela Negara, Pilar Negara (6 soal), dan Bahasa Negara (6 soal, 1 per chapter). */
export const contohGeneratorTwk: Kelompok[] = [
  {
    stimulus: { judul: `Nasionalisme` },
    soal: [
      // tryout-ref-03-03 · Nynda_Paket 1 TWK SKD 2027_Done Input.docx, soal 3
      {
        nomor: 1,
        tipe: 'pg',
        pertanyaan: `Sebuah daerah memiliki potensi hasil laut yang melimpah, tetapi sebagian besar hasil tangkapannya dijual sebagai bahan mentah ke luar negeri. Untuk meningkatkan kemampuan ekonomi daerah, pemerintah setempat bekerja sama dengan nelayan dan pelaku usaha membangun industri pengolahan hasil laut. Produk yang dihasilkan kemudian dipasarkan ke berbagai wilayah Indonesia sehingga masyarakat memperoleh manfaat ekonomi yang lebih besar dari sumber daya yang dimiliki.
Unsur nasionalisme yang paling menonjol dalam upaya tersebut adalah ....`,
        opsi: [
          { label: 'A', teks: `Cinta tanah air melalui pengutamaan produk hasil daerah sendiri` },
          { label: 'B', teks: `Kemandirian melalui pengembangan kemampuan mengolah sumber daya lokal` },
          { label: 'C', teks: `Persatuan melalui kerja sama pemerintah dengan masyarakat pesisir` },
          { label: 'D', teks: `Kepedulian sosial melalui peningkatan kesejahteraan masyarakat nelayan` },
          { label: 'E', teks: `Identitas nasional melalui pengenalan kekayaan hasil laut Indonesia` },
        ],
        kunci: 'B',
        pembahasan: `Konsep dalam soal ini menekankan unsur kemandirian dalam nasionalisme, yaitu kemampuan masyarakat atau bangsa mengelola potensi dan sumber daya yang dimiliki untuk menghasilkan nilai tambah serta memperkuat kemampuan ekonomi sendiri.
Dalam kasus tersebut, daerah yang sebelumnya hanya menjual hasil laut sebagai bahan mentah mulai mengembangkan industri pengolahan. Upaya ini menunjukkan peningkatan kemampuan masyarakat dalam memanfaatkan sumber daya lokal sehingga tidak hanya bergantung pada penjualan bahan mentah.
Opsi B paling tepat karena tindakan utama dalam soal adalah membangun kemampuan pengolahan sumber daya lokal untuk meningkatkan kemandirian ekonomi daerah.

Pembahasan Opsi Salah:
Opsi A salah: Cinta tanah air dapat diwujudkan melalui dukungan terhadap produk dalam negeri. Namun, fokus utama kasus bukan pengutamaan konsumsi produk lokal, melainkan peningkatan kemampuan mengolah sumber daya.
Opsi C salah: Persatuan tercermin dalam kerja sama pemerintah dan masyarakat. Akan tetapi, kerja sama tersebut merupakan sarana untuk mengembangkan industri, bukan unsur nasionalisme yang paling menonjol.
Opsi D salah: Kepedulian sosial berkaitan dengan perhatian terhadap kesejahteraan masyarakat. Peningkatan pendapatan nelayan merupakan dampak positif, tetapi bukan inti tindakan yang digambarkan.
Opsi E salah: Identitas nasional berkaitan dengan karakteristik dan jati diri bangsa. Meskipun hasil laut merupakan kekayaan Indonesia, kasus tidak menekankan penguatan simbol atau identitas nasional.

Cara cepat: Perhatikan tindakan utama dalam kasus. Apabila masyarakat meningkatkan kemampuan mengolah dan memanfaatkan sumber daya sendiri untuk memperkuat perekonomian, unsur nasionalisme yang paling tepat adalah kemandirian.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tryout-ref-04-04 · Tri_Paket 2 TWK SKD 2027_Done Input.docx, soal 4
      {
        nomor: 2,
        tipe: 'pg',
        pertanyaan: `Forum warga yang terdiri atas masyarakat dari berbagai daerah sedang mempersiapkan peringatan kemerdekaan. Dalam rapat sebelumnya, usulan dari warga yang telah lama tinggal lebih sering dipertimbangkan, sedangkan gagasan dari warga yang baru bergabung jarang dibahas meskipun berkaitan dengan kebutuhan kegiatan.
Untuk memperbaiki keadaan tersebut, forum akan memilih koordinator baru. Panitia ingin memastikan pemilihan tidak hanya menghasilkan pemimpin yang mampu mengelola program, tetapi juga memperkuat rasa kebersamaan seluruh warga.
Mekanisme yang paling tepat untuk mencapai tujuan tersebut adalah ....`,
        opsi: [
          { label: 'A', teks: `Seleksi oleh perwakilan warga lama dan baru` },
          { label: 'B', teks: `Pemilihan tokoh berpengalaman setempat` },
          { label: 'C', teks: `Seleksi kompetensi dengan komitmen pelibatan warga setara` },
          { label: 'D', teks: `Musyawarah berdasarkan dukungan warga` },
          { label: 'E', teks: `Pemungutan suara berdasarkan program calon` },
        ],
        kunci: 'C',
        pembahasan: `Nasionalisme Indonesia menekankan persatuan masyarakat yang memiliki latar belakang beragam. Dalam kehidupan bermasyarakat, nilai tersebut dapat diterapkan melalui penghargaan terhadap kontribusi setiap warga tanpa membedakan daerah asal atau lama tinggal.
Masalah utama dalam stimulus adalah ketimpangan kesempatan menyampaikan dan mempertimbangkan gagasan. Warga yang lebih lama tinggal lebih sering mendapat perhatian, sedangkan usulan warga baru kurang dipertimbangkan meskipun relevan.
Karena itu, pemilihan koordinator harus memperbaiki dua hal, yaitu kualitas kepemimpinan dan kesempatan berpartisipasi.
Opsi C paling tepat karena kompetensi calon dinilai bersama komitmen melibatkan warga lama dan baru secara setara dalam penyusunan kegiatan. Dengan demikian, kriteria pemimpin berkaitan langsung dengan masalah dominasi gagasan dalam forum.
Dengan demikian, persatuan diwujudkan melalui kerja sama dan keterlibatan nyata, bukan hanya melalui keterwakilan simbolis.

Pembahasan Opsi Salah:
Opsi A salah: Keterwakilan warga lama dan baru dalam tim seleksi memperluas partisipasi pemilih, tetapi belum menetapkan kemampuan dan komitmen calon mengelola kegiatan secara inklusif.
Opsi B salah: Pemahaman kebiasaan lingkungan dapat membantu pelaksanaan kegiatan. Namun, menjadikannya dasar utama pemilihan belum memperbaiki kesempatan bagi warga lain untuk berkontribusi dalam pengambilan keputusan.
Opsi D salah: Musyawarah lintas kelompok mendukung pengambilan keputusan bersama. Akan tetapi, kemampuan memperoleh dukungan belum tentu menunjukkan kemampuan mengelola program dan memastikan kesempatan berpartisipasi yang setara.
Opsi E salah: Pemungutan suara dan presentasi program dapat meningkatkan keterbukaan pemilihan. Namun, mekanisme tersebut belum memastikan bahwa usulan warga baru akan mendapat ruang yang setara dalam proses penyusunan kegiatan.

Cara cepat: Identifikasi masalah utama dalam stimulus. Jika persoalannya adalah gagasan sebagian kelompok kurang dipertimbangkan, pilih mekanisme yang menjamin penilaian objektif sekaligus memperbaiki keterlibatan kelompok tersebut dalam proses pengambilan keputusan.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tryout-ref-05-05 · Tri_Paket 3 TWK SKD 2027_Done Input.docx, soal 5
      {
        nomor: 3,
        tipe: 'pg',
        pertanyaan: `Pada awal abad ke-20, muncul organisasi Budi Utomo yang berupaya memajukan masyarakat melalui pendidikan dan pengembangan kemampuan kaum terpelajar. Kehadirannya menjadi salah satu tonggak perkembangan pergerakan nasional Indonesia.
Perubahan paling mendasar dalam pola perjuangan bangsa yang ditandai lahirnya Budi Utomo adalah ....`,
        opsi: [
          { label: 'A', teks: `Menandai peralihan dari perlawanan kedaerahan ke organisasi modern` },
          { label: 'B', teks: `Menunjukkan bahwa pendidikan menjadi sarana penting bagi kemajuan masyarakat.` },
          { label: 'C', teks: `Memperlihatkan meningkatnya peran kaum terpelajar dalam kehidupan sosial masyarakat.` },
          { label: 'D', teks: `Mendorong kerja sama antarkelompok masyarakat melalui kegiatan pendidikan dan kebudayaan.` },
          { label: 'E', teks: `Membuka ruang bagi pengembangan kesadaran masyarakat mengenai pentingnya kemajuan bersama.` },
        ],
        kunci: 'A',
        pembahasan: `Budi Utomo yang berdiri pada 20 Mei 1908 merupakan salah satu tonggak perkembangan perjuangan melalui organisasi modern.
Pergerakan bangsa yang sebelumnya banyak berlangsung melalui perjuangan lokal dan perlawanan fisik mulai berkembang menggunakan organisasi modern sebagai sarana perjuangan.
Opsi A paling tepat karena menunjukkan perubahan pola perjuangan dari perlawanan kedaerahan menjadi organisasi modern yang terorganisasi.

Pembahasan Opsi Salah:
Opsi B salah: Pendidikan memang menjadi perhatian Budi Utomo, tetapi hanya menggambarkan salah satu bidang kegiatannya.
Opsi C salah: Kaum terpelajar berperan penting, tetapi opsi ini tidak menjelaskan perubahan bentuk perjuangan nasional.
Opsi D salah: Kerja sama masyarakat merupakan manfaat organisasi, tetapi bukan perubahan pola perjuangan.
Opsi E salah: Kesadaran akan kemajuan masyarakat berkaitan dengan tujuan organisasi, tetapi belum menunjukkan perkembangan pola perjuangan.

Cara cepat: Pada soal Budi Utomo, perhatikan frasa perubahan pola perjuangan: dari perlawanan kedaerahan menuju organisasi modern.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tryout-ref-05-03 · Tri_Paket 3 TWK SKD 2027_Done Input.docx, soal 3
      {
        nomor: 4,
        tipe: 'pg',
        pertanyaan: `Setelah Agresi Militer Belanda II, Belanda berusaha meyakinkan dunia internasional bahwa Republik Indonesia tidak lagi memiliki kekuatan politik maupun militer. Serangan Umum 1 Maret 1949 menunjukkan bahwa TNI masih mampu melaksanakan operasi terorganisasi di Yogyakarta.
Jika dikaitkan dengan strategi perjuangan mempertahankan kemerdekaan, makna paling penting dari peristiwa tersebut adalah ….`,
        opsi: [
          { label: 'A', teks: `Menunjukkan kemampuan TNI mempertahankan struktur organisasi dalam menghadapi tekanan militer Belanda.` },
          { label: 'B', teks: `Memperkuat semangat perlawanan masyarakat melalui keberhasilan operasi militer di wilayah yang dikuasai Belanda.` },
          { label: 'C', teks: `Membuktikan bahwa kekuatan militer Indonesia tetap dapat menjalankan operasi sekalipun menghadapi keterbatasan persenjataan.` },
          { label: 'D', teks: `Memperlihatkan bahwa perjuangan bersenjata dapat memperkuat posisi politik dan diplomasi Indonesia di tingkat internasional.` },
          { label: 'E', teks: `Menegaskan pentingnya penguasaan wilayah strategis sebagai dasar mempertahankan keberadaan pemerintahan nasional.` },
        ],
        kunci: 'D',
        pembahasan: `Serangan Umum 1 Maret 1949 memiliki arti strategis secara militer, politik, dan diplomatik. Operasi tersebut menunjukkan bahwa Republik Indonesia masih memiliki kemampuan melakukan perlawanan terorganisasi.
Keberhasilan operasi memperlemah klaim Belanda bahwa Republik Indonesia telah kehilangan kekuatannya. Hal ini turut memperkuat posisi Indonesia dalam memperjuangkan pengakuan kedaulatan.
Opsi D paling tepat karena menjelaskan hubungan strategis antara keberhasilan militer dengan perjuangan politik dan diplomasi.

Pembahasan Opsi Salah:
Opsi A salah: Kemampuan organisasi TNI memang terlihat, tetapi belum menggambarkan dampak strategis yang lebih luas.
Opsi B salah: Peningkatan semangat rakyat merupakan dampak penting, tetapi bukan keseluruhan makna strategis peristiwa tersebut.
Opsi C salah: Kemampuan operasi di tengah keterbatasan merupakan aspek militer, sedangkan soal meminta makna bagi keseluruhan perjuangan.
Opsi E salah: Wilayah strategis penting, tetapi Serangan Umum 1 Maret tidak bertujuan mempertahankan penguasaan Yogyakarta secara permanen.

Cara cepat: Apabila stimulus menekankan klaim Belanda di dunia internasional dan keberhasilan perlawanan TNI, hubungkan perjuangan militer dengan penguatan diplomasi.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      // tryout-ref-04-03 · Tri_Paket 2 TWK SKD 2027_Done Input.docx, soal 3
      {
        nomor: 5,
        tipe: 'pg',
        pertanyaan: `Pemerintah daerah ingin meningkatkan kontribusi industri tenun lokal terhadap perekonomian nasional. Kelompok perajin telah memperoleh permintaan ekspor, tetapi belum mampu memenuhi standar ketahanan warna secara konsisten. Hasil uji menunjukkan bahwa ketidakkonsistenan terjadi karena takaran bahan pewarna dan lama perendaman berbeda pada setiap perajin, bukan karena kualitas bahan. Sebagian besar perajin menggunakan teknik pewarnaan tradisional yang menjadi ciri khas produk daerah.
Pemerintah mempunyai dana untuk satu program dengan tiga sasaran berikut.
(1) Meningkatkan kemampuan produk memenuhi standar pembeli internasional.
(2) Mempertahankan keterlibatan perajin lokal dalam proses produksi.
(3) Menjaga identitas budaya tenun sebagai bagian dari kekayaan Indonesia.
Lima program yang diusulkan sama-sama diperkirakan dapat meningkatkan mutu, tetapi memiliki pendekatan dan konsekuensi berbeda.
Kebijakan yang paling sesuai dengan nasionalisme ekonomi berdasarkan ketiga sasaran tersebut adalah ....`,
        opsi: [
          { label: 'A', teks: `Standardisasi takaran dan lama pewarnaan bersama ahli dengan uji teknik khas perajin` },
          { label: 'B', teks: `Pengujian mutu rutin dan pendampingan pemilahan hasil tenun` },
          { label: 'C', teks: `Kemitraan industri untuk menguji mutu dan menjaga pasar ekspor` },
          { label: 'D', teks: `Modernisasi alat perajin dengan pelatihan dan pengawasan mutu` },
          { label: 'E', teks: `Pembinaan teknik tradisional dan pengujian daya tahan warna produk akhir` },
        ],
        kunci: 'A',
        pembahasan: `Nasionalisme ekonomi dalam konteks soal ini diwujudkan melalui kebijakan yang memperkuat kemampuan produk lokal bersaing, mempertahankan kontribusi pelaku usaha dalam negeri, dan menjaga kekayaan budaya bangsa.
Ketiga sasaran harus dipertimbangkan secara bersamaan. Sasaran pertama menuntut ketahanan warna yang konsisten. Sasaran kedua menghendaki perajin lokal tetap menjadi pelaku utama produksi. Sasaran ketiga menghendaki teknik khas tenun tidak dihilangkan demi memenuhi permintaan pasar.
Penyebab masalah adalah takaran dan lama pewarnaan yang berbeda antarperajin. Opsi A paling tepat karena menstandarkan kedua hal tersebut bersama ahli, sedangkan teknik khas perajin tetap dijadikan dasar pengujian. Dengan demikian mutu meningkat, perajin tetap menjalankan produksi, dan karakter budaya terjaga.
Kebijakan tersebut tidak sekadar mengejar peningkatan ekspor, tetapi juga memperkuat kemampuan dan peran pelaku usaha lokal secara berkelanjutan.

Pembahasan Opsi Salah:
Opsi B salah: Pengujian dan pemilahan hasil tenun memperbaiki seleksi produk, tetapi tidak memperbaiki secara langsung konsistensi proses pewarnaan yang menjadi masalah utama.
Opsi C salah: Kemitraan industri bermanfaat untuk pengujian mutu dan perluasan pasar, tetapi belum memastikan proses produksi tetap dikuasai perajin atau teknik khas tetap digunakan.
Opsi D salah: Modernisasi dan pelatihan dapat meningkatkan mutu, tetapi penggantian alat tidak otomatis menjaga ciri tradisional metode pewarnaan.
Opsi E salah: Pembinaan teknik tradisional dan pengujian produk akhir menjaga budaya dan mengukur hasil, tetapi belum menstandarkan takaran dan lama pewarnaan yang menyebabkan ketidakkonsistenan.

Cara cepat: Jika stimulus memberikan beberapa sasaran kebijakan, periksa apakah pilihan jawaban memenuhi setiap sasaran dan menyentuh penyebab masalahnya. Jangan memilih kebijakan yang hanya mengukur hasil atau hanya unggul pada satu sasaran.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      // tryout-ref-04-05 · Tri_Paket 2 TWK SKD 2027_Done Input.docx, soal 5
      {
        nomor: 6,
        tipe: 'pg',
        pertanyaan: `Sebuah museum daerah akan menyelenggarakan pameran sejarah perdagangan antarpulau untuk menumbuhkan rasa kebangsaan pengunjung melalui pemahaman tentang kontribusi daerah dalam perkembangan Nusantara.
Hasil penelitian menunjukkan bahwa pelabuhan setempat berperan sebagai tempat pengumpulan komoditas dari daerah sekitarnya. Arsip transaksi juga mencatat hubungan perdagangan dengan sejumlah wilayah lain. Namun, belum ditemukan bukti yang cukup untuk menyatakan bahwa pelabuhan tersebut lebih penting daripada pelabuhan lainnya.
Tim kurator mempertimbangkan lima pendekatan penyajian pameran. Pendekatan yang paling tepat untuk menumbuhkan rasa kebangsaan tanpa mengabaikan bukti sejarah adalah ....`,
        opsi: [
          { label: 'A', teks: `Kajian dampak sosial perdagangan` },
          { label: 'B', teks: `Kronologi dan pemeringkatan pengaruh antarpelabuhan` },
          { label: 'C', teks: `Pemetaan asal komoditas Nusantara` },
          { label: 'D', teks: `Peran pelabuhan sebagai simpul perdagangan berdasarkan arsip transaksi` },
          { label: 'E', teks: `Narasi kejayaan pelabuhan sebagai pusat perdagangan Nusantara` },
        ],
        kunci: 'D',
        pembahasan: `Nasionalisme Indonesia mencakup penghargaan terhadap sejarah dan kebudayaan daerah sebagai bagian dari perjalanan bangsa. Penghargaan tersebut tidak boleh dibangun dengan klaim yang tidak didukung bukti.
Dalam stimulus, dua fakta telah didukung bukti, yaitu peran pelabuhan dalam pengumpulan komoditas dan adanya transaksi dengan wilayah lain. Perbandingan tingkat kepentingan antarpelabuhan belum didukung bukti.
Opsi D paling tepat karena menyajikan kontribusi lokal berdasarkan arsip yang ada sekaligus memperlihatkan keterhubungan daerah dengan wilayah lain dalam jaringan perdagangan Nusantara. Pengunjung memahami peran daerah sebagai bagian dari bangsa tanpa menerima klaim keunggulan yang belum terbukti.

Pembahasan Opsi Salah:
Opsi A salah: Perubahan sosial merupakan topik pameran yang relevan. Namun, stimulus belum memberikan bukti yang cukup untuk menyimpulkan pengaruh perdagangan terhadap hubungan sosial masyarakat.
Opsi B salah: Kronologi berguna untuk pameran, tetapi pemeringkatan pengaruh pelabuhan memerlukan bukti pembanding yang tidak tersedia.
Opsi C salah: Pemetaan asal komoditas dapat menjelaskan keragaman sumber daya Nusantara, tetapi lebih menekankan asal barang daripada peran pelabuhan lokal yang menjadi fokus pameran.
Opsi E salah: Narasi kejayaan dapat menumbuhkan kebanggaan, tetapi menyatakan pelabuhan sebagai pusat perdagangan Nusantara merupakan klaim yang belum didukung bukti.

Cara cepat: Identifikasi fakta yang benar-benar tersedia dalam stimulus. Pilih narasi yang menjelaskan kontribusi daerah dan keterhubungannya dengan wilayah lain tanpa menambahkan klaim yang belum didukung bukti.`,
        tingkat: 'sulit',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Integritas` },
    soal: [
      // tryout-ref-03-13 · Nynda_Paket 1 TWK SKD 2027_Done Input.docx, soal 13
      {
        nomor: 7,
        tipe: 'pg',
        pertanyaan: `Seorang kepala seksi yang penghasilannya tergolong tinggi tetap memakai sepeda motor lamanya untuk berangkat kerja. Ia menggelar resepsi pernikahan anaknya di rumah dengan tamu terbatas dan hanya membeli barang ketika benar-benar dibutuhkan. Dalam sembilan nilai antikorupsi KPK, perilaku tersebut paling tepat mencerminkan nilai …`,
        opsi: [
          { label: 'A', teks: `Jujur` },
          { label: 'B', teks: `Mandiri` },
          { label: 'C', teks: `Sederhana` },
          { label: 'D', teks: `Disiplin` },
          { label: 'E', teks: `Kerja keras` },
        ],
        kunci: 'C',
        pembahasan: `Konsep dalam soal ini menekankan pengenalan nilai antikorupsi dari penanda gaya hidup seorang pejabat, menggunakan framework sembilan nilai antikorupsi KPK. Kepala seksi dalam stem mampu hidup lebih mewah, tetapi tetap memakai kendaraan lama, menggelar resepsi di rumah dengan tamu terbatas, dan membeli barang sesuai kebutuhan. Inti integritas di sini adalah gaya hidup wajar dan bersahaja yang mendahulukan kebutuhan daripada keinginan. Gaya hidup seperti ini menutup salah satu penyebab internal korupsi, yaitu gaya hidup konsumtif. Opsi yang paling tepat adalah C, karena ketiga penanda di stem (tidak boros, tidak bermewah-mewah, dan membeli sesuai kebutuhan) persis merupakan indikator nilai Sederhana.

Pembahasan Opsi Salah:
Opsi A salah karena Jujur berkaitan dengan tidak berbohong dan tidak mengambil yang bukan haknya, sedangkan stem tidak memuat penggunaan harta atau fasilitas yang bukan milik pejabat tersebut.
Opsi B salah karena Mandiri menekankan tidak bergantung pada bantuan orang lain dalam menyelesaikan pekerjaan, sedangkan stem tidak membahas ketergantungan.
Opsi D salah karena Disiplin menekankan ketaatan pada aturan dan ketepatan waktu, sedangkan stem tidak menyebut aturan, jadwal, atau tenggat.
Opsi E salah karena Kerja Keras menekankan kegigihan dan pantang menyerah menghadapi kesulitan, sedangkan stem menonjolkan pola konsumsi, bukan etos kerja.

Cara cepat: Apabila soal menyebut “mampu hidup mewah tetapi memilih tidak boros dan membeli sesuai kebutuhan”, maka jawabannya mengarah ke “Sederhana”.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      // tryout-ref-03-15 · Nynda_Paket 1 TWK SKD 2027_Done Input.docx, soal 15
      {
        nomor: 8,
        tipe: 'pg',
        pertanyaan: `Seorang petugas pemeriksa kelengkapan izin usaha mengatakan kepada pemohon bahwa berkasnya tidak akan diproses jika pemohon tidak menyerahkan uang Rp2.000.000 di luar biaya resmi. Pemohon yang khawatir usahanya terhambat akhirnya menyerahkan uang tersebut. Menurut pengelompokan tindak pidana korupsi dalam UU 31/1999 jo. UU 20/2001, perbuatan petugas tersebut paling tepat dikategorikan sebagai …`,
        opsi: [
          { label: 'A', teks: `Suap-menyuap` },
          { label: 'B', teks: `Gratifikasi` },
          { label: 'C', teks: `Penggelapan dalam jabatan` },
          { label: 'D', teks: `Perbuatan curang` },
          { label: 'E', teks: `Pemerasan` },
        ],
        kunci: 'E',
        pembahasan: `Konsep dalam soal ini menekankan klasifikasi perbuatan menurut tujuh kelompok tindak pidana korupsi dalam UU 31/1999 jo. UU 20/2001 sebagaimana dipetakan KPK. Unsur pembeda dalam stem ada dua. Pertama, inisiatif datang dari petugas, bukan dari pemohon. Kedua, pemohon tidak punya pilihan karena layanan yang menjadi haknya diancam tidak diproses. Inti integritas di sini adalah larangan menyalahgunakan kekuasaan jabatan untuk memaksa warga memberikan sesuatu. Opsi yang paling tepat adalah E, karena pegawai negeri yang menyalahgunakan kekuasaannya untuk memaksa seseorang memberikan atau membayar sesuatu termasuk kelompok pemerasan (Pasal 12 huruf e, f, dan g), dan pemohon dalam hal ini berposisi sebagai korban.

Pembahasan Opsi Salah:
Opsi A salah karena suap mensyaratkan kesepakatan sukarela atau tawaran dari pemberi, sedangkan stem menunjukkan pemohon menyerahkan uang di bawah tekanan petugas.
Opsi B salah karena gratifikasi adalah pemberian yang datang dari pemberi tanpa paksaan, sedangkan stem memuat permintaan disertai ancaman dari pegawai.
Opsi C salah karena penggelapan dalam jabatan menyangkut uang atau barang yang sudah dikuasai pegawai karena jabatannya, sedangkan uang dalam stem berasal dari pemohon.
Opsi D salah karena perbuatan curang menurut Pasal 7 dan Pasal 12 huruf h berkaitan dengan kecurangan pemborong, pengawas proyek, rekanan, atau penggunaan tanah negara, bukan pungutan dalam layanan perizinan.

Cara cepat: Apabila soal menyebut “pegawai mensyaratkan pembayaran di luar biaya resmi dan mengancam layanan tidak diproses”, maka jawabannya mengarah ke “Pemerasan”.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tryout-ref-04-11 · Tri_Paket 2 TWK SKD 2027_Done Input.docx, soal 11
      {
        nomor: 9,
        tipe: 'pg',
        pertanyaan: `Seorang petugas pelayanan menyatakan kepada pemohon bahwa berkas izin yang telah memenuhi seluruh persyaratan tidak akan diproses sebelum pemohon menyerahkan uang tambahan di luar tarif resmi. Karena membutuhkan izin tersebut segera, pemohon akhirnya memberikan uang yang diminta.
Dalam konteks integritas pelayanan publik, unsur yang paling menentukan bahwa tindakan petugas mengarah pada pemerasan terkait jabatan adalah ....`,
        opsi: [
          { label: 'A', teks: `Permintaan biaya di luar tarif resmi` },
          { label: 'B', teks: `Perubahan persyaratan demi keuntungan pribadi` },
          { label: 'C', teks: `Penyimpangan prosedur pembayaran layanan` },
          { label: 'D', teks: `Pemaksaan pembayaran melalui ancaman penahanan layanan` },
          { label: 'E', teks: `Pemanfaatan jabatan untuk keuntungan pribadi` },
        ],
        kunci: 'D',
        pembahasan: `Konsep yang digunakan adalah penyalahgunaan kewenangan dan pemerasan terkait jabatan.
Unsur pembeda utamanya adalah adanya pemaksaan melalui penyalahgunaan kekuasaan jabatan. Petugas mengancam tidak memproses berkas yang telah memenuhi persyaratan apabila pemohon tidak menyerahkan uang tambahan.
Opsi D paling tepat karena memuat hubungan antara kewenangan, ancaman, dan pembayaran yang dipaksakan.

Pembahasan Opsi Salah:
Opsi A salah: Pembayaran di luar tarif resmi merupakan penyimpangan, tetapi tidak selalu disertai ancaman.
Opsi B salah: Perubahan persyaratan untuk keuntungan pribadi menunjukkan penyalahgunaan kewenangan, tetapi belum menegaskan adanya pemaksaan terhadap pemohon.
Opsi C salah: Penyalahgunaan prosedur dapat menjadi bagian dari pemerasan, tetapi belum menjelaskan unsur ancaman yang menjadi pembeda utama.
Opsi E salah: Keuntungan pribadi dapat muncul dalam berbagai bentuk penyalahgunaan jabatan, tetapi belum secara khusus menunjukkan pemaksaan.

Cara cepat: Bedakan pungutan tidak resmi dengan pemerasan terkait jabatan. Fokus pada tindakan menggunakan kekuasaan jabatan untuk memaksa pemohon menyerahkan uang.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tryout-ref-05-08 · Tri_Paket 3 TWK SKD 2027_Done Input.docx, soal 8
      {
        nomor: 10,
        tipe: 'pg',
        pertanyaan: `Seorang auditor menemukan perbedaan antara laporan penggunaan dana bantuan pendidikan dan bukti transaksi yang tersedia. Sebagian transaksi telah terverifikasi, sedangkan beberapa transaksi lain masih memerlukan klarifikasi dari pihak terkait.
Kepala instansi meminta laporan disampaikan sesuai tenggat karena keterlambatan dapat menghambat pencairan bantuan berikutnya. Pedoman audit memperbolehkan penyampaian laporan sementara, tetapi mewajibkan setiap temuan dan transaksi yang belum terverifikasi dicatat secara terpisah serta ditindaklanjuti melalui permintaan klarifikasi resmi.
Tindakan yang paling mencerminkan integritas auditor dalam situasi tersebut adalah ....`,
        opsi: [
          { label: 'A', teks: `Menyampaikan laporan berdasarkan bukti yang tersedia dengan mencatat transaksi yang belum terverifikasi untuk diperiksa pada audit berikutnya.` },
          { label: 'B', teks: `Meminta perpanjangan waktu pemeriksaan agar seluruh transaksi dapat diklarifikasi sebelum laporan disampaikan kepada pimpinan.` },
          { label: 'C', teks: `Menyampaikan laporan sementara dengan memisahkan transaksi yang belum terverifikasi serta mengajukan klarifikasi resmi terhadap seluruh temuan yang belum terselesaikan.` },
          { label: 'D', teks: `Berkoordinasi dengan tim keuangan untuk mempercepat kelengkapan bukti dan melakukan penyesuaian laporan berdasarkan dokumen yang telah diterima.` },
          { label: 'E', teks: `Menyampaikan hasil pemeriksaan yang telah terverifikasi kepada pimpinan dan merekomendasikan perbaikan prosedur pencatatan pada periode berikutnya.` },
        ],
        kunci: 'C',
        pembahasan: `Integritas auditor menuntut kejujuran, objektivitas, ketelitian, dan akuntabilitas dalam menyampaikan hasil pemeriksaan. Auditor harus memastikan bahwa laporan mencerminkan kondisi yang sebenarnya, termasuk transaksi yang belum memiliki bukti memadai.
Dalam stimulus, terdapat dua tuntutan yang harus dipenuhi, yaitu penyampaian laporan sesuai tenggat dan kewajiban mencatat serta menindaklanjuti seluruh temuan yang belum terselesaikan.
Opsi C paling tepat karena auditor menyampaikan laporan sementara sesuai ketentuan, membedakan transaksi berdasarkan status verifikasinya, dan tetap mengajukan klarifikasi resmi terhadap transaksi yang belum dapat dipastikan.

Pembahasan Opsi Salah:
Opsi A salah: Menyampaikan laporan berdasarkan bukti yang tersedia merupakan tindakan yang tepat. Namun, menunda pemeriksaan transaksi yang belum terverifikasi hingga audit berikutnya tidak sesuai dengan kewajiban tindak lanjut melalui klarifikasi resmi.
Opsi B salah: Meminta tambahan waktu dapat meningkatkan kelengkapan pemeriksaan. Namun, laporan sementara sudah diperbolehkan sehingga penundaan bukan pilihan paling tepat dalam situasi tersebut.
Opsi D salah: Koordinasi dengan tim keuangan membantu mempercepat pengumpulan bukti. Namun, penyesuaian laporan belum cukup apabila tidak disertai pemisahan status transaksi dan tindak lanjut resmi terhadap temuan yang belum terselesaikan.
Opsi E salah: Menyampaikan hasil yang telah terverifikasi dan merekomendasikan perbaikan prosedur merupakan tindakan positif. Namun, pilihan tersebut belum menjamin seluruh transaksi yang masih dipersoalkan dicatat dan ditindaklanjuti dalam pemeriksaan berjalan.

Cara cepat: Dalam soal integritas auditor, perhatikan tiga unsur utama, yaitu keakuratan laporan, transparansi status verifikasi, dan tindak lanjut temuan. Pilih tindakan yang memenuhi ketiganya sesuai ketentuan yang berlaku.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      // tryout-ref-05-09 · Tri_Paket 3 TWK SKD 2027_Done Input.docx, soal 9
      {
        nomor: 11,
        tipe: 'pg',
        pertanyaan: `Seorang pejabat pengadaan mengetahui bahwa penyedia barang telah mengirimkan peralatan sesuai jadwal, tetapi beberapa unit tidak memenuhi spesifikasi teknis dalam kontrak. Penyedia menawarkan penggantian unit dalam waktu dekat dan meminta agar berita acara penerimaan tetap ditandatangani untuk menghindari keterlambatan pembayaran.
Keputusan yang paling mencerminkan integritas pejabat pengadaan adalah ….`,
        opsi: [
          { label: 'A', teks: `Meminta penyedia menandatangani komitmen penggantian barang sebelum menyetujui pembayaran sesuai tahapan kontrak.` },
          { label: 'B', teks: `Mencatat ketidaksesuaian secara resmi dan menunda persetujuan penerimaan atas unit yang belum memenuhi spesifikasi hingga diperbaiki sesuai ketentuan.` },
          { label: 'C', teks: `Melakukan pemeriksaan tambahan bersama tim teknis dan memberikan waktu kepada penyedia untuk menyelesaikan penggantian barang.` },
          { label: 'D', teks: `Meminta penyedia menyampaikan jadwal penggantian tertulis untuk menjadi dasar evaluasi penyelesaian pekerjaan.` },
          { label: 'E', teks: `Menyampaikan ketidaksesuaian kepada pimpinan dan meminta arahan mengenai kelanjutan proses administrasi penerimaan.` },
        ],
        kunci: 'B',
        pembahasan: `Integritas dalam pengadaan pemerintah mengharuskan pejabat menjalankan kewenangan berdasarkan fakta dan ketentuan kontrak.
Berita acara penerimaan harus mencerminkan kondisi sebenarnya. Permintaan penyedia agar dokumen ditandatangani sebelum barang memenuhi spesifikasi dapat menimbulkan catatan administrasi yang tidak sesuai dengan keadaan nyata.
Opsi B paling tepat karena menggabungkan pencatatan ketidaksesuaian, pengendalian administrasi, dan kewajiban memenuhi spesifikasi sebelum penerimaan disetujui.

Pembahasan Opsi Salah:
Opsi A salah: Komitmen penggantian merupakan bentuk tanggung jawab penyedia, tetapi janji perbaikan tidak otomatis membuktikan bahwa barang telah memenuhi persyaratan.
Opsi C salah: Pemeriksaan tambahan merupakan tindakan relevan, tetapi belum menegaskan bahwa penerimaan atas barang yang tidak sesuai tidak boleh disahkan terlebih dahulu.
Opsi D salah: Jadwal penggantian membantu pengawasan, tetapi tidak cukup untuk memastikan keabsahan proses penerimaan.
Opsi E salah: Konsultasi kepada pimpinan dapat dilakukan, tetapi tanggung jawab pejabat untuk mencatat kondisi sebenarnya tetap harus dijalankan.

Cara cepat: Apabila terdapat perbedaan antara kondisi aktual dan dokumen resmi, integritas mengharuskan dokumen mencerminkan fakta, bukan janji perbaikan.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      // tryout-ref-04-08 · Tri_Paket 2 TWK SKD 2027_Done Input.docx, soal 8
      {
        nomor: 12,
        tipe: 'pg',
        pertanyaan: `Tim seleksi beasiswa pemerintah telah menyelesaikan penilaian administratif. Seorang anggota tim kemudian mengetahui bahwa salah satu peserta merupakan rekan bisnisnya dalam usaha yang masih aktif.
Peserta memenuhi seluruh persyaratan. Anggota tim tersebut belum memberikan skor substansi, tetapi telah ikut memeriksa kelengkapan administrasi peserta bersama petugas lain.
Pedoman seleksi mewajibkan pengungkapan konflik kepentingan, mengizinkan pemeriksaan ulang bila diperlukan, dan menyediakan penilai pengganti.
Tindakan yang paling tepat adalah ....`,
        opsi: [
          { label: 'A', teks: `Ungkap konflik dan minta persetujuan peserta` },
          { label: 'B', teks: `Alihkan skor tetapi pertahankan tugas administrasi` },
          { label: 'C', teks: `Lakukan pengesahan kolektif dan lanjutkan penilaian` },
          { label: 'D', teks: `Ungkap konflik, tinjau administrasi, alihkan penilaian` },
          { label: 'E', teks: `Gunakan rubrik terbuka dan lanjutkan penilaian` },
        ],
        kunci: 'D',
        pembahasan: `Integritas menuntut penilai mengungkap hubungan bisnis dan memastikan keputusan tidak dipengaruhi kepentingan pribadi.
Opsi D tepat karena pemeriksaan yang sudah melibatkan penilai terkait ditinjau secara independen, sementara penilaian berikutnya diserahkan kepada penilai yang tidak memiliki konflik.
Pemeriksaan ulang bukan berarti peserta bersalah atau otomatis didiskualifikasi. Tujuannya memastikan proses berjalan objektif.

Pembahasan Opsi Salah:
Opsi A salah: Persetujuan peserta tidak menggantikan tanggung jawab institusi mengelola konflik kepentingan.
Opsi B salah: Penilai masih memiliki peran yang dapat memengaruhi proses administratif.
Opsi C salah: Pengesahan kolektif tidak menjamin independensi jika penilai terkait tetap terlibat.
Opsi E salah: Rubrik yang dipublikasikan tidak menghapus hubungan bisnis.

Cara cepat: Pisahkan tiga hal, yaitu kelayakan peserta, konflik kepentingan penilai, dan perlunya pemeriksaan independen terhadap tahapan yang sudah dilakukan.`,
        tingkat: 'sulit',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Bela Negara` },
    soal: [
      // tryout-ref-03-07 · Nynda_Paket 1 TWK SKD 2027_Done Input.docx, soal 7
      {
        nomor: 13,
        tipe: 'pg',
        pertanyaan: `Seorang mahasiswa di wilayah perbatasan laut diajak bergabung dengan sebuah kelompok daring yang menyebarkan gagasan untuk mengganti dasar negara dengan paham transnasional. Ia menolak ajakan itu, lalu menginisiasi diskusi rutin di organisasi kampusnya tentang kedudukan dasar negara sebagai konsensus final para pendiri bangsa. Nilai dasar bela negara yang paling menonjol dari sikap mahasiswa tersebut adalah ....`,
        opsi: [
          { label: 'A', teks: `Cinta tanah air` },
          { label: 'B', teks: `Sadar berbangsa dan bernegara` },
          { label: 'C', teks: `Setia pada Pancasila` },
          { label: 'D', teks: `Rela berkorban` },
          { label: 'E', teks: `Kemampuan awal bela negara` },
        ],
        kunci: 'C',
        pembahasan: `Konsep dalam soal ini menekankan nilai dasar bela negara sebagaimana dirumuskan dalam UU Nomor 23 Tahun 2019 tentang Pengelolaan Sumber Daya Nasional untuk Pertahanan Negara, yang menjabarkan hak dan kewajiban warga negara untuk ikut serta dalam upaya pembelaan negara menurut Pasal 27 ayat (3) UUD 1945. Dalam stem, mahasiswa menghadapi ancaman nonmiliter berupa ajakan mengganti dasar negara dengan paham transnasional, lalu menolaknya dan menguatkan pemahaman teman-temannya bahwa dasar negara merupakan konsensus final. Inti setia pada Pancasila di sini adalah keteguhan mempertahankan Pancasila sebagai ideologi dan dasar negara dari setiap upaya penggantian. Opsi yang paling tepat adalah C, karena tindakan yang ditonjolkan adalah penolakan terhadap paham pengganti dasar negara sekaligus penguatan keyakinan pada dasar negara yang sah.

Pembahasan Opsi Salah:
Opsi A salah karena cinta tanah air menekankan rasa memiliki dan menjaga wilayah serta lingkungan Indonesia, bukan pembelaan dasar negara dari paham pengganti.
Opsi B salah karena sadar berbangsa dan bernegara menekankan kesadaran dan partisipasi sebagai warga negara secara umum, sedangkan stem secara khusus menyoal upaya mengganti dasar negara.
Opsi D salah karena tidak ada pengorbanan waktu, tenaga, atau harta yang menjadi fokus tindakan mahasiswa tersebut.
Opsi E salah karena kemampuan awal bela negara menekankan kesiapan fisik, psikis, dan kecerdasan, bukan keteguhan pada ideologi negara.

Cara cepat: Apabila soal menyebut “menolak paham yang ingin mengganti dasar negara”, maka jawabannya mengarah ke “Setia pada Pancasila”.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      // tryout-ref-03-11 · Nynda_Paket 1 TWK SKD 2027_Done Input.docx, soal 11
      {
        nomor: 14,
        tipe: 'pg',
        pertanyaan: `Dalam sesi pelatihan dasar CPNS, fasilitator menjelaskan bahwa Undang-Undang Nomor 23 Tahun 2019 tentang Pengelolaan Sumber Daya Nasional untuk Pertahanan Negara memuat lima nilai dasar bela negara. Fasilitator kemudian meminta peserta menyebutkan nilai yang menekankan kesiapan fisik, kesiapan psikis, serta keterampilan dasar warga negara untuk ikut serta membela negara. Nilai dasar bela negara yang dimaksud adalah …`,
        opsi: [
          { label: 'A', teks: `Cinta tanah air` },
          { label: 'B', teks: `Sadar berbangsa dan bernegara` },
          { label: 'C', teks: `Setia pada Pancasila sebagai ideologi negara` },
          { label: 'D', teks: `Kemampuan awal bela negara` },
          { label: 'E', teks: `Rela berkorban untuk bangsa dan negara` },
        ],
        kunci: 'D',
        pembahasan: `Konsep dalam soal ini menekankan lima nilai dasar bela negara sebagaimana dirumuskan dalam UU Nomor 23 Tahun 2019 tentang PSDN, yaitu cinta tanah air, sadar berbangsa dan bernegara, setia pada Pancasila sebagai ideologi negara, rela berkorban untuk bangsa dan negara, serta kemampuan awal bela negara. Dalam konteks pelatihan dasar CPNS, fasilitator menyoroti nilai yang berkaitan dengan kesiapan diri warga negara, baik secara fisik (sehat, tangkas, bugar) maupun psikis (disiplin, ulet, mampu bekerja keras), ditambah keterampilan dasar yang dibutuhkan untuk ikut serta membela negara. Inti kemampuan awal bela negara di sini adalah modal kesiapan pribadi yang memungkinkan warga negara berkontribusi nyata ketika dibutuhkan negara. Opsi yang paling tepat adalah D, karena hanya nilai kemampuan awal bela negara yang secara khusus memuat unsur kesiapan fisik, kesiapan psikis, dan keterampilan dasar.

Pembahasan Opsi Salah:
Opsi A salah karena cinta tanah air menekankan rasa memiliki, bangga, dan menjaga wilayah serta kekayaan Indonesia, bukan kesiapan fisik dan psikis.
Opsi B salah karena sadar berbangsa dan bernegara menekankan pemahaman hak dan kewajiban serta kepatuhan pada hukum, bukan kesiapan diri dan keterampilan dasar.
Opsi C salah karena setia pada Pancasila menekankan keyakinan terhadap Pancasila sebagai ideologi dan dasar negara, bukan kebugaran ataupun ketangguhan mental.
Opsi E salah karena rela berkorban menekankan kesediaan menyerahkan waktu, tenaga, dan harta bagi kepentingan bangsa, bukan kesiapan fisik dan psikis yang dimiliki sejak awal.

Cara cepat: Apabila soal menyebut “kesiapan fisik, kesiapan psikis, dan keterampilan dasar”, maka jawabannya mengarah ke “Kemampuan awal bela negara”.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      // tryout-ref-04-17 · Tri_Paket 2 TWK SKD 2027_Done Input.docx, soal 17
      {
        nomor: 15,
        tipe: 'pg',
        pertanyaan: `Sekolah di wilayah rawan bencana menyelenggarakan tiga program pembinaan bela negara.
Program P memberikan pemahaman mengenai prosedur menghadapi keadaan darurat, dengan 90% peserta lulus tes pengetahuan.
Program Q melatih pertolongan pertama dan evakuasi, dengan 70% peserta mampu memperagakan keterampilan secara mandiri.
Program R mengembangkan kepedulian kemanusiaan, dengan 95% peserta berpartisipasi dalam kegiatan bantuan bagi masyarakat terdampak bencana.
Sekolah menemukan bahwa sebagian peserta masih membutuhkan bimbingan ketika mengikuti simulasi keadaan darurat. Pada periode berikutnya, sekolah ingin meningkatkan kemampuan awal bela negara yang berkaitan dengan kesiapsiagaan praktis.
Keputusan yang paling tepat adalah ....`,
        opsi: [
          { label: 'A', teks: `Perluasan aksi sosial pada program R` },
          { label: 'B', teks: `Penggabungan program P dan R` },
          { label: 'C', teks: `Latihan praktik lanjutan pada program Q` },
          { label: 'D', teks: `Pembagian porsi merata pada tiga program` },
          { label: 'E', teks: `Penguatan teori pada program P` },
        ],
        kunci: 'C',
        pembahasan: `Konsep yang digunakan adalah kemampuan awal bela negara dan kesiapsiagaan menghadapi ancaman nonmiliter.
Kemampuan awal bela negara mencakup kesiapan psikis dan fisik. Dalam konteks sekolah di wilayah rawan bencana, keterampilan pertolongan pertama dan evakuasi merupakan contoh kemampuan praktis yang mendukung kesiapsiagaan.
Hasil evaluasi menunjukkan bahwa hanya 70% peserta program Q mampu memperagakan keterampilan secara mandiri. Artinya, masih terdapat peserta yang membutuhkan penguatan.
Opsi C tepat karena secara langsung meningkatkan keterampilan yang diperlukan ketika menghadapi keadaan darurat.

Pembahasan Opsi Salah:
Opsi A salah: Kepedulian sosial penting dalam bela negara, tetapi belum meningkatkan kemampuan melakukan tindakan darurat secara mandiri.
Opsi B salah: Pengetahuan dan kepedulian saling mendukung, tetapi tidak menggantikan latihan keterampilan.
Opsi D salah: Ketiga program memang bermanfaat, tetapi prioritas pembinaan perlu didasarkan pada kebutuhan peserta yang ditemukan dalam evaluasi.
Opsi E salah: Penguatan pengetahuan bermanfaat, tetapi masalah yang diidentifikasi adalah kemampuan praktik.

Cara cepat: Tentukan aspek bela negara yang belum dikuasai. Pilih program yang secara langsung mengembangkan aspek tersebut.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tryout-ref-05-15 · Tri_Paket 3 TWK SKD 2027_Done Input.docx, soal 15
      {
        nomor: 16,
        tipe: 'pg',
        pertanyaan: `Warga sebuah kawasan permukiman menghadapi peningkatan gangguan keamanan. Pengurus lingkungan membentuk jadwal ronda secara bergiliran, melibatkan warga sesuai kemampuan, dan menjalin koordinasi dengan aparat keamanan setempat.
Arti penting bela negara dalam kegiatan tersebut adalah ….`,
        opsi: [
          { label: 'A', teks: `Menumbuhkan keberanian warga dalam menghadapi gangguan keamanan di lingkungan tempat tinggal.` },
          { label: 'B', teks: `Meningkatkan kedisiplinan masyarakat dalam menjalankan kegiatan keamanan yang telah disepakati.` },
          { label: 'C', teks: `Memperkuat hubungan sosial melalui kegiatan bersama yang dilaksanakan secara rutin.` },
          { label: 'D', teks: `Meningkatkan kesiapsiagaan masyarakat untuk menghadapi kemungkinan gangguan keamanan.` },
          { label: 'E', teks: `Membangun kesadaran bahwa menjaga keamanan lingkungan merupakan tanggung jawab bersama sesuai peran masing-masing.` },
        ],
        kunci: 'E',
        pembahasan: `Salah satu bentuk bela negara dalam kehidupan masyarakat adalah kesadaran untuk ikut menjaga keamanan dan ketertiban sesuai kemampuan dan tanggung jawab masing-masing.
Dalam kasus ini, warga melaksanakan ronda secara teratur dan berkoordinasi dengan aparat. Kegiatan tersebut menunjukkan bahwa menjaga keamanan bukan hanya tanggung jawab aparat, melainkan juga memerlukan partisipasi warga.
Opsi E paling tepat karena menekankan kesadaran tanggung jawab bersama sebagai inti bela negara dalam kehidupan sehari-hari.

Pembahasan Opsi Salah:
Opsi A salah: Keberanian dapat berkembang melalui kegiatan keamanan, tetapi tidak menjadi aspek utama yang digambarkan.
Opsi B salah: Kedisiplinan merupakan bagian dari pelaksanaan ronda, tetapi fokus soal adalah keterlibatan warga menjaga keamanan bersama.
Opsi C salah: Hubungan sosial dapat meningkat, tetapi kegiatan tersebut memiliki tujuan utama menjaga keamanan lingkungan.
Opsi D salah: Kesiapsiagaan merupakan manfaat penting, tetapi belum menekankan kesadaran warga untuk berkontribusi sesuai perannya.

Cara cepat: Jika stimulus memuat ronda, partisipasi warga, dan koordinasi dengan aparat, fokus pada kesadaran bela negara dan tanggung jawab bersama menjaga keamanan.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tryout-ref-05-13 · Tri_Paket 3 TWK SKD 2027_Done Input.docx, soal 13
      {
        nomor: 17,
        tipe: 'pg',
        pertanyaan: `Sebuah instansi pemerintah mengalami serangan siber yang mengganggu sistem pelayanan administrasi kependudukan. Seorang warga yang memiliki keahlian keamanan informasi menawarkan bantuan kepada tim penanganan insiden. Ia kemudian dilibatkan secara resmi untuk membantu mengidentifikasi kerentanan dan memulihkan sistem.
Makna bela negara yang paling tepat dari tindakan warga tersebut adalah ….`,
        opsi: [
          { label: 'A', teks: `Partisipasi masyarakat dalam mempercepat pemulihan kualitas pelayanan publik melalui pemanfaatan teknologi.` },
          { label: 'B', teks: `Penggunaan kompetensi profesional warga untuk meningkatkan efektivitas sistem informasi milik pemerintah.` },
          { label: 'C', teks: `Kontribusi warga sesuai keahlian dalam menghadapi ancaman nonmiliter yang mengganggu kepentingan negara.` },
          { label: 'D', teks: `Kerja sama masyarakat dan pemerintah dalam mengembangkan sistem administrasi yang lebih aman.` },
          { label: 'E', teks: `Penerapan tanggung jawab sosial melalui pemberian bantuan teknis kepada lembaga pelayanan masyarakat.` },
        ],
        kunci: 'C',
        pembahasan: `Bela negara merupakan sikap dan tindakan warga negara yang dilandasi kecintaan kepada NKRI serta kesadaran berbangsa dan bernegara.
Bela negara tidak terbatas pada pertahanan militer, tetapi juga mencakup kontribusi menghadapi ancaman nonmiliter, seperti serangan siber, gangguan ekonomi, bencana, dan ancaman terhadap ketahanan nasional.
Dalam soal, keahlian keamanan informasi digunakan untuk membantu menghadapi serangan siber terhadap layanan pemerintah.
Opsi C paling tepat karena menghubungkan kemampuan profesional warga dengan upaya menghadapi ancaman nonmiliter yang mengganggu kepentingan negara.

Pembahasan Opsi Salah:
Opsi A salah: Pemulihan pelayanan merupakan hasil yang positif, tetapi belum menjelaskan dimensi ancaman terhadap negara.
Opsi B salah: Kompetensi profesional diperlukan, tetapi fokusnya lebih pada peningkatan efektivitas sistem daripada penanggulangan ancaman nasional.
Opsi D salah: Kerja sama pemerintah dan masyarakat memang terjadi, tetapi bukan prinsip bela negara yang paling spesifik dalam kasus.
Opsi E salah: Tanggung jawab sosial merupakan nilai positif, tetapi tidak menunjukkan secara langsung peran keahlian warga dalam menghadapi ancaman nonmiliter.

Cara cepat: Jika warga menggunakan keahlian tertentu untuk mengatasi serangan siber, ancaman pangan, atau gangguan kepentingan nasional, hubungkan dengan bela negara menghadapi ancaman nonmiliter.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      // tryout-ref-03-10 · Nynda_Paket 1 TWK SKD 2027_Done Input.docx, soal 10
      {
        nomor: 18,
        tipe: 'pg',
        pertanyaan: `Sebuah kabupaten di perbatasan darat menghadapi tiga kondisi. Pertama, warga lebih banyak membeli kebutuhan pokok dari negara tetangga. Kedua, siaran televisi negara tetangga lebih mudah diakses daripada siaran nasional. Ketiga, sebagian generasi muda mulai asing dengan budaya daerahnya sendiri.
Hasil evaluasi menunjukkan bahwa ketergantungan ekonomi terjadi karena distribusi produk dalam negeri belum merata. Keterbatasan infrastruktur penyiaran nasional menyebabkan informasi dalam negeri sulit dijangkau, sedangkan berkurangnya kegiatan pendidikan budaya turut melemahkan pengetahuan generasi muda terhadap tradisi daerah.
Pemerintah daerah memiliki anggaran terbatas dan diminta menyusun program terpadu berbasis Pancagatra untuk memperkuat ketahanan wilayah secara berkelanjutan.
Rancangan program yang paling tepat adalah ....`,
        opsi: [
          { label: 'A', teks: `Memperkuat distribusi produk lokal, memperluas siaran nasional, dan mengembangkan pendidikan budaya daerah.` },
          { label: 'B', teks: `Memberikan subsidi kebutuhan pokok, menyediakan layanan informasi nasional, dan menyelenggarakan festival budaya tahunan.` },
          { label: 'C', teks: `Membangun pasar perbatasan, meningkatkan literasi media, dan memperluas promosi kesenian daerah.` },
          { label: 'D', teks: `Mengembangkan koperasi perdagangan, meningkatkan siaran kebangsaan, dan memperbanyak pertunjukan budaya lokal.` },
          { label: 'E', teks: `Memperbaiki infrastruktur perdagangan, menyediakan informasi melalui media digital, dan mendukung komunitas seni daerah.` },
        ],
        kunci: 'A',
        pembahasan: `Konsep dalam soal ini menekankan ketahanan nasional berdasarkan Pancagatra, yang mencakup ideologi, politik, ekonomi, sosial budaya, serta pertahanan dan keamanan.
Ketahanan wilayah perbatasan tidak cukup dibangun melalui penguatan satu bidang. Pemerintah perlu mempertimbangkan hubungan antara ketahanan ekonomi, akses informasi nasional, dan pelestarian budaya masyarakat.
Stimulus menunjukkan tiga permasalahan yang saling berkaitan. Ketergantungan terhadap kebutuhan pokok dari negara tetangga disebabkan lemahnya distribusi produk dalam negeri. Dominasi siaran asing terjadi karena keterbatasan infrastruktur penyiaran nasional. Sementara itu, melemahnya pengetahuan generasi muda mengenai budaya daerah berkaitan dengan berkurangnya kegiatan pelestarian budaya.
Opsi A paling tepat karena mengatasi ketiga penyebab tersebut secara langsung. Penguatan distribusi produk lokal meningkatkan akses masyarakat terhadap barang dalam negeri. Perluasan siaran nasional memperbaiki keterjangkauan informasi, sedangkan pendidikan budaya daerah membantu menjaga keberlanjutan identitas budaya antargenerasi.

Pembahasan Opsi Salah:
Opsi B salah: Subsidi kebutuhan pokok dapat meringankan beban masyarakat, sedangkan layanan informasi dan festival budaya memiliki manfaat positif. Namun, subsidi tidak secara langsung memperbaiki distribusi produk dalam negeri. Festival tahunan juga belum menjamin keberlanjutan pembelajaran budaya bagi generasi muda.
Opsi C salah: Pembangunan pasar perbatasan dapat meningkatkan kegiatan ekonomi dan literasi media membantu masyarakat menyikapi informasi secara kritis. Namun, pembangunan pasar belum tentu memperbaiki distribusi kebutuhan pokok, sedangkan literasi media tidak secara langsung mengatasi keterbatasan infrastruktur siaran nasional.
Opsi D salah: Koperasi perdagangan dapat memperkuat posisi pelaku ekonomi lokal dan pertunjukan budaya memperluas apresiasi masyarakat. Namun, siaran kebangsaan belum tentu menjangkau masyarakat apabila keterbatasan infrastruktur penyiaran tidak diperbaiki. Pertunjukan budaya juga belum menjamin adanya proses pewarisan pengetahuan kepada generasi muda.
Opsi E salah: Infrastruktur perdagangan dapat memperlancar mobilitas barang, sedangkan media digital dan dukungan komunitas seni dapat memberikan manfaat sosial budaya. Namun, penyediaan informasi digital belum tentu menjangkau masyarakat yang mengalami keterbatasan akses siaran, sementara dukungan komunitas seni tidak secara khusus memastikan pendidikan budaya berlangsung secara berkelanjutan.

Cara cepat: Dalam soal kebijakan terpadu berbasis Pancagatra, identifikasi penyebab setiap masalah, kemudian bandingkan apakah program yang ditawarkan benar-benar mengatasi penyebab tersebut. Jangan hanya memilih opsi karena memuat banyak program positif.`,
        tingkat: 'sulit',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Pilar Negara` },
    soal: [
      // tryout-ref-05-19 · Tri_Paket 3 TWK SKD 2027_Done Input.docx, soal 19
      {
        nomor: 19,
        tipe: 'pg',
        pertanyaan: `Pemerintah daerah memiliki anggaran terbatas untuk memberikan bantuan pendidikan. Hasil pendataan menunjukkan bahwa wilayah A memiliki lebih banyak siswa yang kesulitan mengakses sekolah akibat jarak dan biaya transportasi, sedangkan wilayah B memiliki jumlah siswa lebih sedikit dan akses pendidikan yang relatif memadai.
Kebijakan yang paling sesuai dengan prinsip keadilan sosial Pancasila adalah ….`,
        opsi: [
          { label: 'A', teks: `Membagi tambahan anggaran secara sama kepada kedua wilayah agar setiap daerah memperoleh dukungan yang setara.` },
          { label: 'B', teks: `Menetapkan bantuan berdasarkan jumlah sekolah agar lembaga pendidikan memperoleh dukungan yang proporsional.` },
          { label: 'C', teks: `Memprioritaskan sekolah dengan pencapaian akademik tinggi agar tambahan anggaran memberikan hasil yang mudah diukur.` },
          { label: 'D', teks: `Memberikan alokasi tambahan berdasarkan usulan pemerintah daerah setelah mempertimbangkan prioritas pembangunan masing-masing.` },
          { label: 'E', teks: `Mengalokasikan bantuan berdasarkan kebutuhan siswa dan hambatan akses yang terverifikasi dengan mekanisme evaluasi yang transparan.` },
        ],
        kunci: 'E',
        pembahasan: `Sila kelima Pancasila, Keadilan Sosial bagi Seluruh Rakyat Indonesia, menekankan perlakuan yang adil dan kesempatan yang layak bagi seluruh masyarakat.
Keadilan sosial tidak selalu berarti memberikan jumlah bantuan yang sama kepada setiap wilayah. Perbedaan kondisi dan kebutuhan masyarakat harus menjadi pertimbangan kebijakan.
Dalam stimulus, wilayah A memiliki hambatan pendidikan yang lebih besar. Oleh karena itu, alokasi tambahan seharusnya mempertimbangkan kebutuhan siswa, keterbatasan akses, dan penggunaan dana yang dapat dipertanggungjawabkan.
Opsi E paling tepat karena menerapkan keadilan berdasarkan kebutuhan nyata serta memastikan transparansi evaluasi.

Pembahasan Opsi Salah:
Opsi A salah: Pembagian dana sama besar mencerminkan kesamaan nominal, tetapi belum tentu menghasilkan kesempatan pendidikan yang setara.
Opsi B salah: Jumlah sekolah dapat menjadi indikator kebutuhan, tetapi tidak secara langsung menggambarkan hambatan akses siswa.
Opsi C salah: Prestasi akademik merupakan indikator hasil pembelajaran, tetapi bukan dasar utama ketika tujuan bantuan adalah mengatasi kesenjangan akses pendidikan.
Opsi D salah: Usulan pemerintah daerah penting dalam perencanaan, tetapi masih membutuhkan dasar kebutuhan yang objektif dan terverifikasi.

Cara cepat: Dalam soal sila kelima, bedakan pemerataan jumlah bantuan dengan keadilan berdasarkan kebutuhan. Jika kondisi masyarakat tidak sama, alokasi yang adil dapat berbeda.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tryout-ref-04-21 · Tri_Paket 2 TWK SKD 2027_Done Input.docx, soal 21
      {
        nomor: 20,
        tipe: 'pg',
        pertanyaan: `Sejumlah warga menilai ketentuan dalam undang-undang baru membatasi hak yang dijamin UUD 1945. Pemerintah berpendapat bahwa pembatasan tersebut diperlukan untuk mencapai tujuan kebijakan publik.
Dalam waktu bersamaan, terdapat perkara di pengadilan yang berkaitan dengan penerapan undang-undang tersebut. Sebagian pihak berpendapat bahwa pengujian konstitusionalitas undang-undang harus menunggu putusan perkara konkret, sedangkan pihak lain mengusulkan pengujian melalui lembaga yang berwenang.
Penilaian yang paling tepat berdasarkan sistem ketatanegaraan Indonesia adalah ....`,
        opsi: [
          { label: 'A', teks: `KY menilai dugaan pelanggaran hak, pengadilan menunggu hasilnya` },
          { label: 'B', teks: `Pengadilan menuntaskan perkara sebelum permohonan uji UU ke MK` },
          { label: 'C', teks: `MA menguji norma UU, pengadilan menerapkan putusannya` },
          { label: 'D', teks: `DPR merevisi UU terlebih dahulu, pengadilan melanjutkan perkara` },
          { label: 'E', teks: `MK menguji undang-undang, pengadilan mengadili perkara` },
        ],
        kunci: 'E',
        pembahasan: `Konsep yang digunakan adalah pembagian kewenangan lembaga negara dalam pengujian peraturan perundang-undangan.
Pasal 24C ayat (1) UUD 1945 memberikan kewenangan kepada Mahkamah Konstitusi untuk menguji undang-undang terhadap UUD 1945.
Sementara itu, Mahkamah Agung berwenang menguji peraturan perundang-undangan di bawah undang-undang.
Opsi E tepat karena membedakan pengujian konstitusionalitas norma undang-undang dari penyelesaian perkara konkret yang berkaitan dengan penerapannya.

Pembahasan Opsi Salah:
Opsi A salah: KY memiliki fungsi terkait kehormatan, keluhuran martabat, dan perilaku hakim, bukan pengujian undang-undang terhadap UUD.
Opsi B salah: Tidak terdapat syarat umum bahwa seluruh perkara konkret harus selesai sebelum permohonan pengujian undang-undang diajukan ke MK.
Opsi C salah: MA memiliki kewenangan pengujian peraturan di bawah undang-undang, bukan pengujian undang-undang terhadap UUD 1945.
Opsi D salah: DPR dan Presiden berperan dalam pembentukan undang-undang, tetapi tidak menjadi pemutus pengujian konstitusionalitas yang merupakan kewenangan MK.

Cara cepat: Identifikasi objek dan batu uji. Jika undang-undang diuji terhadap UUD 1945, kewenangannya berada pada Mahkamah Konstitusi.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tryout-ref-04-20 · Tri_Paket 2 TWK SKD 2027_Done Input.docx, soal 20
      {
        nomor: 21,
        tipe: 'pg',
        pertanyaan: `Panitia kegiatan bersih sungai di suatu kecamatan melibatkan warga dari berbagai daerah yang telah lama tinggal di lingkungan tersebut.
Salah satu koordinator mengusulkan agar seluruh tugas lapangan diberikan kepada warga kelahiran setempat, sedangkan warga pendatang hanya menangani administrasi karena dianggap kurang memahami kondisi sungai.
Padahal, beberapa warga pendatang berpengalaman dalam pengelolaan lingkungan, sementara sebagian warga setempat baru pertama kali mengikuti kegiatan. Panitia ingin membagi tugas secara adil dan tetap menjaga kerja sama.
Berdasarkan prinsip Bhinneka Tunggal Ika, pembagian tugas yang paling tepat adalah ....`,
        opsi: [
          { label: 'A', teks: `Membagi tugas menurut asal kelompok agar koordinasi lebih mudah` },
          { label: 'B', teks: `Menunjuk warga setempat sebagai penanggung jawab seluruh pekerjaan lapangan` },
          { label: 'C', teks: `Mengundi seluruh posisi agar setiap warga mendapat kesempatan yang sama` },
          { label: 'D', teks: `Menyerahkan penugasan kepada perwakilan setiap komunitas tanpa meninjau pengalaman peserta` },
          { label: 'E', teks: `Menentukan tugas berdasarkan kemampuan dan kebutuhan bersama tanpa membedakan asal warga` },
        ],
        kunci: 'E',
        pembahasan: `Konsep yang digunakan adalah Bhinneka Tunggal Ika, yaitu persatuan dalam keberagaman dengan penghargaan setara terhadap kontribusi setiap warga.
Keberagaman daerah asal tidak menentukan kemampuan seseorang untuk berkontribusi. Penugasan sebaiknya memperhatikan pengalaman, keselamatan, dan kebutuhan kegiatan.
Warga setempat dan pendatang sama-sama dapat berpartisipasi. Membatasi tugas hanya berdasarkan asal daerah justru mengabaikan kecakapan yang relevan.
Opsi E tepat karena menjadikan kemampuan dan tujuan bersama sebagai dasar pembagian kerja tanpa mendiskriminasi peserta menurut daerah asalnya.

Pembahasan Opsi Salah:
Opsi A salah: Pengelompokan berdasarkan daerah asal mungkin terlihat mudah, tetapi mempertahankan pemisahan dan mengabaikan kemampuan masing-masing warga.
Opsi B salah: Pengetahuan warga setempat dapat membantu pelaksanaan, tetapi status kelahiran bukan jaminan kecakapan memimpin seluruh pekerjaan lapangan.
Opsi C salah: Pengundian memberi peluang yang sama secara formal, tetapi tidak mempertimbangkan keterampilan yang diperlukan untuk keamanan dan efektivitas tugas.
Opsi D salah: Perwakilan komunitas dapat membantu koordinasi, tetapi pembagian tugas masih tidak didasarkan pada kemampuan peserta dan kebutuhan lapangan.

Cara cepat: Prinsip Bhinneka Tunggal Ika menekankan kerja sama tanpa membedakan asal. Pilih pembagian tugas berdasarkan kemampuan dan tujuan bersama, bukan identitas kelompok.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tryout-ref-03-24 · Nynda_Paket 1 TWK SKD 2027_Done Input.docx, soal 24
      {
        nomor: 22,
        tipe: 'pg',
        pertanyaan: `Dalam sebuah forum perencanaan pembangunan, seorang peserta berpendapat bahwa perairan di antara pulau-pulau Indonesia merupakan pemisah antarwilayah. Karena itu, menurutnya, pembangunan cukup dipusatkan pada pulau-pulau besar. Berdasarkan Wawasan Nusantara sebagai cara pandang yang dikukuhkan dalam Pasal 25A UUD 1945, penilaian yang paling tepat terhadap pendapat tersebut adalah …`,
        opsi: [
          { label: 'A', teks: `Pendapat tersebut sesuai dengan Pasal 25A yang menempatkan pulau-pulau besar sebagai pusat wilayah negara.` },
          { label: 'B', teks: `Pendapat tersebut sesuai dengan prinsip otonomi daerah yang memberi setiap pulau kewenangan mengelola perairannya sendiri.` },
          { label: 'C', teks: `Pendapat tersebut bertentangan dengan pandangan bahwa laut antarpulau merupakan penghubung yang menyatukan wilayah negara.` },
          { label: 'D', teks: `Pendapat tersebut baru bertentangan dengan Wawasan Nusantara apabila pembangunan di pulau-pulau kecil dihentikan sama sekali.` },
          { label: 'E', teks: `Pendapat tersebut berada di luar cakupan Wawasan Nusantara yang hanya mengatur batas wilayah daratan negara.` },
        ],
        kunci: 'C',
        pembahasan: `Konsep dalam soal ini menekankan Wawasan Nusantara sebagai cara pandang bangsa Indonesia yang mengutamakan persatuan dan kesatuan wilayah serta bangsa. Sejak Deklarasi Djuanda 13 Desember 1957, laut di antara pulau-pulau dipandang sebagai bagian wilayah Indonesia. Prinsip negara kepulauan ini kemudian diakui dalam UNCLOS 1982 dan dikukuhkan dalam Pasal 25A UUD 1945, yang menyatakan Indonesia sebagai negara kepulauan berciri Nusantara. Inti Wawasan Nusantara di sini adalah keutuhan Nusantara: daratan dan perairan merupakan satu kesatuan politik, ekonomi, sosial budaya, dan pertahanan keamanan, sehingga laut berfungsi menghubungkan, bukan memisahkan. Opsi yang paling tepat adalah C, karena pendapat peserta forum bertumpu pada anggapan laut sebagai pemisah, dan anggapan itulah yang ditolak oleh Wawasan Nusantara.

Pembahasan Opsi Salah:
Opsi A salah karena Pasal 25A tidak menempatkan pulau besar sebagai pusat wilayah, melainkan menegaskan Indonesia sebagai negara kepulauan berciri Nusantara yang utuh.
Opsi B salah karena otonomi daerah adalah pembagian kewenangan pemerintahan dalam kerangka Pasal 18, bukan dasar untuk memandang perairan sebagai milik terpisah setiap pulau.
Opsi D salah karena pertentangan dengan Wawasan Nusantara sudah terjadi sejak laut dipandang sebagai pemisah, tidak bergantung pada dihentikannya pembangunan di pulau kecil.
Opsi E salah karena Wawasan Nusantara justru menegaskan perairan di antara pulau sebagai bagian wilayah negara, sehingga cakupannya tidak terbatas pada daratan.

Cara cepat: Apabila soal menyebut “perairan antarpulau sebagai pemisah wilayah”, maka jawabannya mengarah ke “bertentangan dengan Wawasan Nusantara, laut adalah penghubung dan pemersatu”.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      // tryout-ref-04-23 · Tri_Paket 2 TWK SKD 2027_Done Input.docx, soal 23
      {
        nomor: 23,
        tipe: 'pg',
        pertanyaan: `Pemerintah sebuah provinsi berencana menjalin kerja sama promosi pariwisata dengan pemerintah daerah di negara lain.
Rencana kerja sama mencakup promosi destinasi, pertukaran informasi pariwisata, dan pengembangan kapasitas pelaku usaha lokal.
Dalam pembahasan, sebagian anggota DPRD mengusulkan agar gubernur sekaligus menandatangani perjanjian diplomatik yang mengatur hubungan resmi antara Indonesia dan negara mitra. Mereka berpendapat bahwa kerja sama tersebut merupakan bagian dari otonomi daerah sehingga dapat dilaksanakan secara mandiri.
Pemerintah provinsi ingin tetap mengembangkan kerja sama internasional tanpa melampaui kewenangannya.
Penilaian yang paling tepat berdasarkan prinsip NKRI adalah ....`,
        opsi: [
          { label: 'A', teks: `Kesepakatan diplomatik daerah dapat dilakukan khusus untuk sektor pariwisata` },
          { label: 'B', teks: `Otonomi daerah mencakup pengaturan sendiri hubungan resmi antarnegara` },
          { label: 'C', teks: `Kerja sama pariwisata daerah mengikuti ketentuan pusat, diplomasi tetap urusan pusat` },
          { label: 'D', teks: `Kerja sama pariwisata dan diplomasi berjalan dengan persetujuan DPRD` },
          { label: 'E', teks: `Semua kegiatan promosi luar negeri dilaksanakan langsung pemerintah pusat` },
        ],
        kunci: 'C',
        pembahasan: `Konsep yang digunakan adalah NKRI, otonomi daerah, dan pembagian kewenangan pemerintahan.
Indonesia merupakan negara kesatuan. Pemerintah daerah mempunyai kewenangan mengelola urusan pemerintahan sesuai ketentuan otonomi daerah, tetapi tidak memiliki kewenangan diplomatik yang berdiri sendiri seperti negara berdaulat.
Dalam UU Nomor 23 Tahun 2014 tentang Pemerintahan Daerah, politik luar negeri termasuk urusan pemerintahan absolut yang menjadi kewenangan pemerintah pusat.
Namun, pemerintah daerah dapat melakukan kerja sama dengan lembaga atau pemerintah daerah di luar negeri dalam bidang tertentu, termasuk promosi potensi daerah, dengan mengikuti persyaratan yang berlaku dan memperoleh persetujuan pemerintah pusat.
Opsi C tepat karena membedakan kerja sama daerah yang diperbolehkan dan kewenangan hubungan diplomatik formal.

Pembahasan Opsi Salah:
Opsi A salah: Tujuan pariwisata tidak memberikan kewenangan kepada pemerintah daerah untuk membuat perjanjian diplomatik antarnegara secara mandiri.
Opsi B salah: Otonomi daerah bukan kewenangan menjalankan politik luar negeri secara independen; kewenangan diplomatik berada pada pemerintah pusat.
Opsi D salah: Persetujuan DPRD tidak menggantikan ketentuan kewenangan pemerintah pusat dalam hubungan luar negeri.
Opsi E salah: Tidak seluruh promosi wisata di luar negeri harus dilaksanakan langsung oleh pemerintah pusat. Kerja sama daerah tertentu diperbolehkan sesuai ketentuan.

Cara cepat: Bedakan kewenangan kerja sama daerah dengan kewenangan diplomatik negara. Otonomi daerah tidak berarti pemerintah daerah mempunyai kedaulatan internasional sendiri.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      // tryout-ref-05-23 · Tri_Paket 3 TWK SKD 2027_Done Input.docx, soal 23
      {
        nomor: 24,
        tipe: 'pg',
        pertanyaan: `Sebuah komunitas pendidikan memberikan bantuan belajar kepada anak-anak dari keluarga kurang mampu. Salah satu pengurus mengusulkan agar seluruh penerima bantuan mengikuti kegiatan keagamaan tertentu sebagai bagian dari pembinaan karakter.
Pengurus lain menilai bahwa pembinaan karakter tetap penting, tetapi pemberian bantuan tidak seharusnya membatasi kebebasan agama penerima.
Keputusan yang paling sesuai dengan sila pertama Pancasila adalah ….`,
        opsi: [
          { label: 'A', teks: `Menyelenggarakan pembinaan karakter dengan menyediakan materi keagamaan yang disesuaikan dengan kelompok penerima bantuan.` },
          { label: 'B', teks: `Memberikan bantuan pendidikan tanpa syarat keikutsertaan dalam kegiatan agama tertentu serta menyediakan kegiatan pembinaan keagamaan secara sukarela sesuai keyakinan masing-masing.` },
          { label: 'C', teks: `Meminta persetujuan keluarga sebelum menetapkan kegiatan pembinaan agama yang menjadi bagian dari program bantuan.` },
          { label: 'D', teks: `Membentuk program pembinaan kerohanian bersama yang menekankan nilai moral universal untuk seluruh penerima bantuan.` },
          { label: 'E', teks: `Memberikan pilihan kegiatan pembinaan karakter dengan mempertimbangkan ketersediaan pembimbing keagamaan di lingkungan komunitas.` },
        ],
        kunci: 'B',
        pembahasan: `Sila pertama Pancasila, Ketuhanan Yang Maha Esa, menekankan kehidupan berketuhanan yang disertai penghormatan terhadap kebebasan beragama dan berkeyakinan.
Dalam kasus ini, bantuan pendidikan diberikan kepada keluarga kurang mampu. Kebutuhan pendidikan tidak seharusnya dijadikan dasar untuk memaksakan keikutsertaan dalam kegiatan keagamaan tertentu.
Opsi B paling tepat karena memisahkan hak memperoleh bantuan pendidikan dari kewajiban mengikuti kegiatan agama tertentu, sekaligus tetap menyediakan kesempatan pembinaan keagamaan yang bersifat sukarela.

Pembahasan Opsi Salah:
Opsi A salah: Penyesuaian materi agama dapat menghormati keragaman, tetapi belum menjamin kegiatan tersebut bersifat sukarela dan tidak menjadi syarat bantuan.
Opsi C salah: Persetujuan keluarga merupakan hal penting, tetapi tidak otomatis menjadikan syarat keagamaan dalam pemberian bantuan sesuai dengan prinsip kebebasan beragama.
Opsi D salah: Pembinaan nilai moral universal dapat memberikan manfaat, tetapi belum secara tegas menyelesaikan persoalan kewajiban kegiatan keagamaan.
Opsi E salah: Penyediaan pilihan kegiatan merupakan tindakan positif, tetapi keputusan masih bergantung pada ketersediaan pembimbing dan belum memastikan bahwa kegiatan tidak menjadi syarat pemberian bantuan.

Cara cepat: Jika soal menggabungkan bantuan publik dengan kegiatan agama, periksa apakah kebijakan menghormati kebebasan beragama, kesetaraan, dan prinsip tanpa paksaan.`,
        tingkat: 'sulit',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Bahasa Negara > Ide pokok atau gagasan utama` },
    soal: [
      // tryout-ref-03-25 · Nynda_Paket 1 TWK SKD 2027_Done Input.docx, soal 25
      {
        nomor: 25,
        tipe: 'pg',
        pertanyaan: `(1) Diversifikasi pangan berbasis bahan lokal dapat memperkuat ketahanan pangan keluarga di daerah yang bergantung pada beras. (2) Sagu, jagung, dan umbi-umbian tumbuh baik di banyak wilayah sehingga keluarga dapat memperolehnya tanpa harus membeli dari luar daerah. (3) Ketika harga beras naik, keluarga yang terbiasa mengolah pangan lokal tidak terlalu terbebani karena memiliki pilihan makanan pokok lain. (4) Selain itu, kandungan serat pada umbi-umbian dan jagung membantu keluarga memenuhi kebutuhan gizi yang lebih beragam setiap hari.
Ide pokok paragraf tersebut adalah …`,
        opsi: [
          { label: 'A', teks: `Sagu, jagung, dan umbi-umbian mudah diperoleh keluarga tanpa membeli dari luar daerah.` },
          { label: 'B', teks: `Keluarga yang terbiasa mengolah pangan lokal tidak terlalu terbebani kenaikan harga beras.` },
          { label: 'C', teks: `Pangan lokal berperan memperkuat ketahanan pangan keluarga yang bergantung pada beras.` },
          { label: 'D', teks: `Kandungan serat umbi-umbian dan jagung membantu keluarga memenuhi kebutuhan gizi beragam.` },
          { label: 'E', teks: `Pangan lokal dapat sepenuhnya menggantikan beras sebagai makanan pokok di semua daerah.` },
        ],
        kunci: 'C',
        pembahasan: `Konsep dalam soal ini menekankan identifikasi kalimat utama pada paragraf deduktif, yaitu paragraf yang kalimat utamanya berada di awal lalu dijelaskan oleh kalimat sesudahnya. Kalimat (1) menyatakan bahwa diversifikasi pangan lokal dapat memperkuat ketahanan pangan keluarga. Kalimat (2) sampai (4) memberi rincian berupa ketersediaan bahan, ketahanan terhadap kenaikan harga beras, dan manfaat gizi. Inti ide pokok di sini adalah pernyataan umum pada kalimat (1) yang didukung oleh semua kalimat penjelas. Opsi yang paling tepat adalah C, karena opsi itu memparafrasekan kalimat (1) tanpa menambah atau mengurangi cakupannya.

Pembahasan Opsi Salah:
Opsi A salah karena hanya merangkum kalimat (2), yaitu rincian tentang ketersediaan bahan pangan lokal.
Opsi B salah karena hanya merangkum kalimat (3), yaitu contoh manfaat ketika harga beras naik.
Opsi D salah karena hanya merangkum kalimat (4), yaitu rincian tambahan tentang manfaat gizi.
Opsi E salah karena melampaui teks; paragraf tidak menyatakan bahwa pangan lokal menggantikan beras sepenuhnya di semua daerah.

Cara cepat: Apabila soal menyebut “ide pokok” dan kalimat pertama paling umum sementara kalimat berikutnya berisi rincian, contoh, atau penanda “Selain itu”, maka jawabannya mengarah ke “parafrase kalimat pertama”.`,
        tingkat: 'sedang',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Bahasa Negara > Simpulan paragraf` },
    soal: [
      // tryout-ref-03-28 · Nynda_Paket 1 TWK SKD 2027_Done Input.docx, soal 28
      {
        nomor: 26,
        tipe: 'pg',
        pertanyaan: `(1) Nelayan di sebuah desa pesisir dahulu menjual hasil tangkapan langsung kepada tengkulak dengan harga yang ditentukan sepihak. (2) Setelah membentuk koperasi, mereka menyimpan ikan di ruang pendingin bersama dan menjual hasil tangkapan secara berkelompok. (3) Ikan yang tetap segar selama beberapa hari memungkinkan koperasi menunggu harga yang lebih baik di pasar kota. (4) Pendapatan sebagian besar anggota koperasi meningkat, tetapi nelayan yang belum bergabung masih bergantung pada tengkulak.
Simpulan yang paling dapat dipertanggungjawabkan berdasarkan paragraf tersebut adalah …`,
        opsi: [
          { label: 'A', teks: `Pengelolaan hasil tangkapan melalui koperasi dapat membantu nelayan memperoleh harga jual lebih baik.` },
          { label: 'B', teks: `Seluruh nelayan di desa pesisir itu pasti memperoleh pendapatan lebih tinggi setelah koperasi didirikan.` },
          { label: 'C', teks: `Koperasi nelayan mampu menghapus ketergantungan warga desa pesisir pada tengkulak.` },
          { label: 'D', teks: `Ruang pendingin bersama perlu dibangun di setiap desa pesisir di seluruh Indonesia.` },
          { label: 'E', teks: `Ikan yang disimpan di ruang pendingin tetap segar selama beberapa hari.` },
        ],
        kunci: 'A',
        pembahasan: `Konsep dalam soal ini menekankan penilaian terhadap simpulan berpola sebab-akibat yang tidak memakai penanda simpulan. Paragraf menyajikan rangkaian: harga semula ditentukan sepihak oleh tengkulak (kalimat 1), nelayan lalu menyimpan dan menjual ikan bersama melalui koperasi (kalimat 2), ikan yang tetap segar memberi kesempatan menunggu harga lebih baik (kalimat 3), dan pendapatan sebagian besar anggota meningkat (kalimat 4). Inti kaidah di sini adalah bahwa simpulan harus mengintegrasikan seluruh isi paragraf dengan cakupan dan kepastian yang sama dengan teks, tanpa melampauinya. Opsi yang paling tepat adalah A, karena opsi itu merangkum hubungan antara koperasi dan perbaikan harga dengan modalitas “dapat” yang sesuai dengan data “sebagian besar anggota”.

Pembahasan Opsi Salah:
Opsi B salah karena teks hanya menyebut “sebagian besar anggota” dan menyatakan nelayan nonanggota masih bergantung pada tengkulak, sehingga “seluruh” dan “pasti” tidak didukung.
Opsi C salah karena kalimat (4) justru menyatakan bahwa nelayan yang belum bergabung masih bergantung pada tengkulak.
Opsi D salah karena teks hanya membahas satu desa dan tidak memuat saran pembangunan di seluruh Indonesia.
Opsi E salah karena hanya mengulang rincian kalimat (3) dan tidak mengintegrasikan isi paragraf secara utuh.

Cara cepat: Apabila soal menyebut “simpulan yang paling dapat dipertanggungjawabkan”, maka jawabannya mengarah ke “pernyataan yang merangkum seluruh rangkaian sebab-akibat dengan kuantor dan modalitas sehalus teks”.`,
        tingkat: 'sulit',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Bahasa Negara > Kalimat efektif dan tidak efektif` },
    soal: [
      // tryout-ref-02-06 · Dhea_TWK (Bahasa Negara)_Done Input.docx, soal 6
      {
        nomor: 27,
        tipe: 'pg',
        pertanyaan: `Dalam laporan evaluasi tertulis kalimat berikut.
Evaluasi dilakukan untuk mengidentifikasi hambatan, pengukuran waktu pelayanan, dan merumuskan perbaikan.
Penyunting diminta memperbaiki kesejajaran bentuk pada perincian tujuan evaluasi.
Perbaikan yang paling tepat adalah ....`,
        opsi: [
          { label: 'A', teks: `Evaluasi dilakukan untuk identifikasi hambatan, mengukur waktu pelayanan, dan perumusan perbaikan.` },
          { label: 'B', teks: `Evaluasi dilakukan untuk mengidentifikasi hambatan, waktu pelayanan diukur, dan merumuskan perbaikan.` },
          { label: 'C', teks: `Evaluasi dilakukan untuk mengidentifikasi hambatan, pengukuran waktu pelayanan, dan perumusan perbaikan.` },
          { label: 'D', teks: `Evaluasi dilakukan untuk identifikasi hambatan, pengukuran waktu pelayanan, dan merumuskan perbaikan.` },
          { label: 'E', teks: `Evaluasi dilakukan untuk mengidentifikasi hambatan, mengukur waktu pelayanan, dan merumuskan perbaikan.` },
        ],
        kunci: 'E',
        pembahasan: `Opsi E menggunakan tiga verba aktif yang sejajar, yaitu mengidentifikasi, mengukur, dan merumuskan. Ketiganya menyatakan tujuan evaluasi dengan struktur yang konsisten.

Pembahasan Opsi Salah:
Opsi A, C, dan D mencampurkan verba dengan nomina seperti identifikasi, pengukuran, dan perumusan. Opsi B mencampurkan verba aktif dengan klausa pasif waktu pelayanan diukur. Ketidaksejajaran tersebut membuat susunan perincian kurang efektif.

Cara cepat: Pada perincian tujuan dengan kata untuk, pastikan bentuk unsur-unsurnya sejajar, misalnya sama-sama verba aktif.`,
        tingkat: 'mudah',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Bahasa Negara > Kata baku dan tidak baku` },
    soal: [
      // tryout-ref-02-07 · Dhea_TWK (Bahasa Negara)_Done Input.docx, soal 7
      {
        nomor: 28,
        tipe: 'pg',
        pertanyaan: `Seorang pegawai menyiapkan laporan kegiatan berikut.
Tim melakukan analisa terhadap aktifitas pelayanan untuk memperkirakan resiko keterlambatan.
Penyunting hanya diminta mengganti kata tidak baku tanpa mengubah susunan kalimat.
Hasil penyuntingan yang tepat adalah ....`,
        opsi: [
          { label: 'A', teks: `Tim melakukan analisis terhadap aktifitas pelayanan untuk memperkirakan risiko keterlambatan.` },
          { label: 'B', teks: `Tim melakukan analisa terhadap aktivitas pelayanan untuk memperkirakan risiko keterlambatan.` },
          { label: 'C', teks: `Tim melakukan analisis terhadap aktivitas pelayanan untuk memperkirakan resiko keterlambatan.` },
          { label: 'D', teks: `Tim melakukan analisis terhadap aktivitas pelayanan untuk memperkirakan risiko keterlambatan.` },
          { label: 'E', teks: `Tim melakukan analisa terhadap aktifitas pelayanan untuk memperkirakan risiko keterlambatan.` },
        ],
        kunci: 'D',
        pembahasan: `Bentuk baku ketiga kata tersebut adalah analisis, aktivitas, dan risiko. Opsi D menggunakan seluruh bentuk baku itu.

Pembahasan Opsi Salah:
Opsi A masih menggunakan aktifitas, opsi B menggunakan analisa, dan opsi C menggunakan resiko. Opsi E masih memuat dua bentuk tidak baku, yaitu analisa dan aktifitas.

Cara cepat: Periksa semua kata yang diuji dan pilih opsi yang membakukan ketiganya sekaligus.`,
        tingkat: 'mudah',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Bahasa Negara > Penulisan tanda baca` },
    soal: [
      // tryout-ref-02-09 · Dhea_TWK (Bahasa Negara)_Done Input.docx, soal 9
      {
        nomor: 29,
        tipe: 'pg',
        pertanyaan: `Sebuah kantor menyiapkan petunjuk pendaftaran. Petunjuk itu menyebutkan tiga dokumen persyaratan, lalu menjelaskan bahwa petugas akan memeriksa dokumen setelah menerimanya. Penyunting diminta menggunakan titik dua untuk memperkenalkan perincian dan titik koma untuk memisahkan dua klausa setara.
Kalimat yang memenuhi ketentuan tersebut adalah ....`,
        opsi: [
          { label: 'A', teks: `Pemohon menyiapkan tiga dokumen: kartu identitas, surat pengantar, dan formulir pendaftaran; petugas memeriksa kelengkapannya setelah dokumen diterima.` },
          { label: 'B', teks: `Pemohon menyiapkan: kartu identitas, surat pengantar, dan formulir pendaftaran; petugas memeriksa kelengkapannya setelah dokumen diterima.` },
          { label: 'C', teks: `Pemohon menyiapkan tiga dokumen; kartu identitas, surat pengantar, dan formulir pendaftaran: petugas memeriksa kelengkapannya setelah dokumen diterima.` },
          { label: 'D', teks: `Pemohon menyiapkan tiga dokumen: kartu identitas; surat pengantar; dan formulir pendaftaran, petugas memeriksa kelengkapannya setelah dokumen diterima.` },
          { label: 'E', teks: `Pemohon menyiapkan tiga dokumen, kartu identitas, surat pengantar, dan formulir pendaftaran: petugas memeriksa kelengkapannya setelah dokumen diterima.` },
        ],
        kunci: 'A',
        pembahasan: `Pada opsi A, “Pemohon menyiapkan tiga dokumen” merupakan pernyataan lengkap yang diikuti perincian sehingga tepat menggunakan titik dua. Titik koma memisahkan klausa tentang pemohon dan klausa tentang petugas yang berkedudukan setara.

Pembahasan Opsi Salah:
Opsi B salah: memisahkan verba menyiapkan dari objeknya dengan titik dua.
Opsi C salah: menukar penggunaan titik dua dan titik koma.
Opsi D salah: tidak tepat dalam menandai perincian sederhana dan batas antarklausa.
Opsi E salah: menempatkan titik dua sebelum klausa yang bukan perincian dari bagian sebelumnya.

Cara cepat: Titik dua memperkenalkan perincian setelah pernyataan lengkap, sedangkan titik koma dapat memisahkan klausa setara.`,
        tingkat: 'sedang',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Bahasa Negara > Penulisan Ejaan Bahasa Indonesia yang Disempurnakan (EYD)` },
    soal: [
      // tryout-ref-02-11 · Dhea_TWK (Bahasa Negara)_Done Input.docx, soal 11
      {
        nomor: 30,
        tipe: 'pg',
        pertanyaan: `Seorang petugas mencatat bahwa dokumen telah melalui pemeriksaan di ruang administrasi sebelum dipindahkan menuju kantor pusat. Catatan tersebut akan dimasukkan ke dalam laporan resmi.
Kalimat yang tepat dalam membedakan penulisan kata depan dan imbuhan adalah ....`,
        opsi: [
          { label: 'A', teks: `Dokumen diperiksa diruang administrasi sebelum dikirim ke kantor pusat.` },
          { label: 'B', teks: `Dokumen di periksa di ruang administrasi sebelum dikirim ke kantor pusat.` },
          { label: 'C', teks: `Dokumen diperiksa di ruang administrasi sebelum di kirim ke kantor pusat.` },
          { label: 'D', teks: `Dokumen diperiksa di ruang administrasi sebelum dikirim kekantor pusat.` },
          { label: 'E', teks: `Dokumen diperiksa di ruang administrasi sebelum dikirim ke kantor pusat.` },
        ],
        kunci: 'E',
        pembahasan: `Pada diperiksa dan dikirim, di- merupakan imbuhan pembentuk verba pasif sehingga ditulis serangkai. Pada di ruang dan ke kantor, di dan ke menunjukkan tempat atau arah sehingga ditulis terpisah sebagai kata depan.

Pembahasan Opsi Salah:
Opsi A salah: keliru menulis diruang.
Opsi B salah: memisahkan imbuhan pada di periksa.
Opsi C salah: memisahkan imbuhan pada di kirim.
Opsi D salah: merangkaikan kata depan dengan kata berikutnya menjadi kekantor.

Cara cepat: Bedakan di- sebagai imbuhan verba pasif yang dirangkai dan di atau ke sebagai kata depan yang dipisah.`,
        tingkat: 'mudah',
        status: 'draft',
      },
    ],
  },
];

/** 35 soal TIU: verbal 11, numerik 16, dan figural 8 (bergambar). */
export const contohGeneratorTiu: Kelompok[] = [
  {
    stimulus: { judul: `Verbal > Silogisme > 3 Premis` },
    soal: [
      // tryout-ref-09-13 · Andika - Verbal Silogisme SKD 2027_Ready to Input.docx, soal 13
      {
        nomor: 1,
        tipe: 'pg',
        pertanyaan: `Kelulusan unit pompa dalam uji ketahanan menjamin perolehan izin penggunaan operasional. Perolehan izin penggunaan operasional membebaskan unit pompa dari kewajiban pengujian ulang. Unit pompa K lolos uji ketahanan.
Kesimpulan yang pasti benar berdasarkan ketiga pernyataan tersebut adalah ....`,
        opsi: [
          { label: 'A', teks: `Kewajiban mengikuti pengujian ulang masih berlaku bagi unit pompa K.` },
          { label: 'B', teks: `Izin penggunaan operasional tidak diperoleh oleh unit pompa K.` },
          { label: 'C', teks: `Pengujian ulang bukan merupakan kewajiban yang harus dijalani unit pompa K.` },
          { label: 'D', teks: `Meskipun memperoleh izin operasional, unit pompa K tetap wajib menjalani pengujian ulang.` },
          { label: 'E', teks: `Kelulusan dalam uji ketahanan tidak terpenuhi pada unit pompa K.` },
        ],
        kunci: 'C',
        pembahasan: `Premis 1: Kelulusan unit pompa dalam uji ketahanan menjamin perolehan izin penggunaan operasional.
Premis 2: Perolehan izin penggunaan operasional membebaskan unit pompa dari kewajiban pengujian ulang.
Premis 3: Unit pompa K lolos uji ketahanan.
Aturan pada dua pernyataan pertama diterapkan pada unit pompa K. Semua variabel berikut merujuk pada unit tersebut.
p: Unit pompa K lolos uji ketahanan.
q: Unit pompa K memperoleh izin penggunaan operasional.
r: Unit pompa K wajib mengikuti pengujian ulang.
Pembebasan dari kewajiban pengujian ulang berarti ¬r. Pernyataan tersebut tidak menyatakan bahwa pengujian ulang dilarang atau bahwa pengujian ulang tidak pernah dilakukan.
• Langkah 1 (Premis 1 + 3):
Premis 1: p → q
Premis 3: p
Gunakan Modus Ponens.
Kesimpulan (Premis 4): q
• Langkah 2 (Premis 2 + 4):
Premis 2: q → ¬r
Premis 4: q
Gunakan Modus Ponens.
Kesimpulan: ¬r
Jawaban: Pengujian ulang bukan merupakan kewajiban yang harus dijalani unit pompa K.

Pembahasan Setiap Opsi:
Opsi A: r. Opsi ini menyatakan adanya kewajiban, sedangkan hasil penalaran menyatakan pembebasan dari kewajiban tersebut. (bukan kesimpulan yang dicari)
Opsi B: ¬q. Premis 1 dan Premis 3 menghasilkan q, sehingga penyangkalan izin operasional bertentangan dengan hasil langkah pertama. (bukan kesimpulan yang dicari)
Opsi C: ¬r. Tidak memiliki kewajiban pengujian ulang bermakna sama dengan dibebaskan dari kewajiban tersebut, sesuai hasil dua penerapan Modus Ponens. (kesimpulan yang dicari)
Opsi D: q ∧ r. Bagian q benar, tetapi bagian r bertentangan dengan ¬r. Kata “tetapi” tetap menghubungkan dua proposisi yang keduanya harus benar. (bukan kesimpulan yang dicari)
Opsi E: ¬p. Pernyataan ini menyangkal kelulusan unit pompa K yang telah dinyatakan pada Premis 3. (bukan kesimpulan yang dicari)`,
        tingkat: 'sulit',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Verbal > Silogisme > 2 Premis - Narasi` },
    soal: [
      // tryout-ref-09-03 · Andika - Verbal Silogisme SKD 2027_Ready to Input.docx, soal 3
      {
        nomor: 2,
        tipe: 'pg',
        pertanyaan: `Pada usaha pengolahan pangan, petugas menata persediaan yang menunggu pengiriman kepada pelanggan dengan menempatkan di gudang kering setiap olahan yang tidak memerlukan penyimpanan dingin, sesuai pengaturan tempat penyimpanan bagi kelompok olahan tersebut. Dalam pengemasan persediaan yang disimpan pada tempat itu, petugas menggunakan kemasan berlapis penghalang uap air untuk setiap olahan yang ditempatkan di gudang kering, sebagai bentuk pengemasan yang diterapkan usaha tersebut pada produk dalam kelompok penyimpanan itu.
Berdasarkan narasi tersebut, kesimpulan yang pasti benar adalah ....`,
        opsi: [
          { label: 'A', teks: `Penggunaan kemasan berlapis penghalang uap air menjamin olahan tersebut tidak memerlukan penyimpanan dingin.` },
          { label: 'B', teks: `Penempatan olahan di gudang kering menunjukkan bahwa penyimpanan dingin tidak diperlukan untuk olahan tersebut.` },
          { label: 'C', teks: `Kebutuhan penyimpanan dingin menjamin olahan tersebut tidak menggunakan kemasan berlapis penghalang uap air.` },
          { label: 'D', teks: `Kemasan berlapis penghalang uap air hanya digunakan oleh olahan yang ditempatkan di gudang kering.` },
          { label: 'E', teks: `Olahan tanpa kebutuhan penyimpanan dingin dipastikan menggunakan kemasan berlapis penghalang uap air.` },
        ],
        kunci: 'E',
        pembahasan: `Premis 1: Pada usaha pengolahan pangan, petugas menata persediaan yang menunggu pengiriman kepada pelanggan dengan menempatkan di gudang kering setiap olahan yang tidak memerlukan penyimpanan dingin, sesuai pengaturan tempat penyimpanan bagi kelompok olahan tersebut.
Premis 2: Dalam pengemasan persediaan yang disimpan pada tempat itu, petugas menggunakan kemasan berlapis penghalang uap air untuk setiap olahan yang ditempatkan di gudang kering, sebagai bentuk pengemasan yang diterapkan usaha tersebut pada produk dalam kelompok penyimpanan itu.
p: Olahan pangan tidak memerlukan penyimpanan dingin.
q: Olahan pangan ditempatkan di gudang kering.
r: Olahan pangan menggunakan kemasan berlapis penghalang uap air.
Premis 1: p → q
Premis 2: q → r
Gunakan hukum Silogisme. Terpenuhinya p menjamin q, sedangkan q menjamin r; hubungan ini berlaku untuk subjek yang sama.
Kesimpulan: p → r
Jawaban: Olahan tanpa kebutuhan penyimpanan dingin dipastikan menggunakan kemasan berlapis penghalang uap air.

Pembahasan Setiap Opsi:
Opsi A: r → p. Hubungan r → p membalik arah hasil silogisme; terpenuhinya r tidak membuktikan p. (bukan kesimpulan yang dicari)
Opsi B: q → p. Hubungan q → p membalik Premis 1. Terpenuhinya q tidak membuktikan p. (bukan kesimpulan yang dicari)
Opsi C: ¬p → ¬r. Hubungan ¬p → ¬r menolak anteseden. Tanpa p, r tetap mungkin terpenuhi melalui keadaan lain. (bukan kesimpulan yang dicari)
Opsi D: r → q. Hubungan r → q membalik Premis 2. Terpenuhinya r tidak membuktikan q. (bukan kesimpulan yang dicari)
Opsi E: p → r. Hubungan ini diperoleh melalui kedua premis yang relevan. (kesimpulan yang dicari)`,
        tingkat: 'sulit',
        status: 'draft',
      },
      // tryout-ref-09-01 · Andika - Verbal Silogisme SKD 2027_Ready to Input.docx, soal 1
      {
        nomor: 3,
        tipe: 'pg',
        pertanyaan: `Untuk menyusun penawaran keramik kepada pembeli luar negeri, pengelola bengkel memasukkan ke dalam katalog ekspor setiap produk yang telah lolos pemeriksaan ketahanan, sebagai bagian dari pendataan produk yang ditawarkan melalui layanan penjualan ekspor bengkel tersebut. Petugas pengelola pesanan kemudian memberikan kode pelacakan khusus kepada setiap produk yang masuk katalog ekspor, agar pencatatan produk dalam penawaran kepada pembeli luar negeri dapat dilakukan dengan menggunakan pengenal produk pada sistem pesanan bengkel.
Berdasarkan narasi tersebut, kesimpulan yang pasti benar adalah ....`,
        opsi: [
          { label: 'A', teks: `Kepemilikan kode pelacakan khusus menjamin produk keramik telah lolos pemeriksaan ketahanan.` },
          { label: 'B', teks: `Tidak lolosnya produk keramik dalam pemeriksaan ketahanan menjamin produk tersebut tidak memperoleh kode pelacakan khusus.` },
          { label: 'C', teks: `Kelulusan produk keramik dalam pemeriksaan ketahanan menjamin perolehan kode pelacakan khusus.` },
          { label: 'D', teks: `Masuknya produk keramik ke katalog ekspor menunjukkan bahwa produk tersebut telah lolos pemeriksaan ketahanan.` },
          { label: 'E', teks: `Pemberian kode pelacakan khusus menjamin produk keramik telah dimasukkan ke dalam katalog ekspor.` },
        ],
        kunci: 'C',
        pembahasan: `Premis 1: Untuk menyusun penawaran keramik kepada pembeli luar negeri, pengelola bengkel memasukkan ke dalam katalog ekspor setiap produk yang telah lolos pemeriksaan ketahanan, sebagai bagian dari pendataan produk yang ditawarkan melalui layanan penjualan ekspor bengkel tersebut.
Premis 2: Petugas pengelola pesanan kemudian memberikan kode pelacakan khusus kepada setiap produk yang masuk katalog ekspor, agar pencatatan produk dalam penawaran kepada pembeli luar negeri dapat dilakukan dengan menggunakan pengenal produk pada sistem pesanan bengkel.
p: Produk keramik lolos pemeriksaan ketahanan.
q: Produk keramik masuk katalog ekspor.
r: Produk keramik memperoleh kode pelacakan khusus.
Premis 1: p → q
Premis 2: q → r
Gunakan hukum Silogisme. Terpenuhinya p menjamin q, sedangkan q menjamin r; hubungan ini berlaku untuk subjek yang sama.
Kesimpulan: p → r
Jawaban: Kelulusan produk keramik dalam pemeriksaan ketahanan menjamin perolehan kode pelacakan khusus.

Pembahasan Setiap Opsi:
Opsi A: r → p. Hubungan r → p membalik arah hasil silogisme; terpenuhinya r tidak membuktikan p. (bukan kesimpulan yang dicari)
Opsi B: ¬p → ¬r. Hubungan ¬p → ¬r menolak anteseden. Tanpa p, r tetap mungkin terpenuhi melalui keadaan lain. (bukan kesimpulan yang dicari)
Opsi C: p → r. Hubungan ini diperoleh melalui kedua premis yang relevan. (kesimpulan yang dicari)
Opsi D: q → p. Hubungan q → p membalik Premis 1. Terpenuhinya q tidak membuktikan p. (bukan kesimpulan yang dicari)
Opsi E: r → q. Hubungan r → q membalik Premis 2. Terpenuhinya r tidak membuktikan q. (bukan kesimpulan yang dicari)`,
        tingkat: 'sulit',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Verbal > Silogisme > 3 Premis - Narasi` },
    soal: [
      // tryout-ref-09-10 · Andika - Verbal Silogisme SKD 2027_Ready to Input.docx, soal 10
      {
        nomor: 4,
        tipe: 'pg',
        pertanyaan: `Dalam menyiapkan pendataan karya untuk pameran seni, pengelola memasukkan ke dalam daftar pameran setiap karya yang lolos seleksi kuratorial, sebagai bagian dari pencatatan karya yang digunakan dalam pengelolaan penyelenggaraan pameran seni tersebut. Meja pembagian panduan pengunjung ditempatkan di dekat pintu masuk ruang pamer. Untuk menyusun katalog karya pada pameran itu, pengelola memberikan nomor katalog kepada setiap karya yang masuk daftar pameran, sehingga karya dalam daftar tersebut mendapatkan nomor identitas pada pencatatan katalog yang digunakan dalam penyelenggaraan pameran. Pada penyusunan bahan bacaan untuk pengunjung, pengelola mencantumkan dalam panduan pengunjung setiap karya yang mendapat nomor katalog, sehingga karya dengan nomor tersebut dimuat dalam panduan yang digunakan pengunjung selama mengikuti pameran seni.
Berdasarkan narasi tersebut, kesimpulan yang pasti benar adalah ....`,
        opsi: [
          { label: 'A', teks: `Panduan pengunjung hanya mencantumkan karya yang dinyatakan lolos seleksi kuratorial.` },
          { label: 'B', teks: `Ketidaklulusan dalam seleksi kuratorial menjamin karya tidak dicantumkan dalam panduan pengunjung.` },
          { label: 'C', teks: `Keberhasilan karya melewati seleksi kuratorial menjamin pencantumannya dalam panduan pengunjung.` },
          { label: 'D', teks: `Daftar pameran hanya memuat karya yang telah dinyatakan lolos seleksi kuratorial.` },
          { label: 'E', teks: `Nomor katalog dipastikan dimiliki oleh karya yang dicantumkan dalam panduan pengunjung.` },
        ],
        kunci: 'C',
        pembahasan: `Premis 1: Dalam menyiapkan pendataan karya untuk pameran seni, pengelola memasukkan ke dalam daftar pameran setiap karya yang lolos seleksi kuratorial, sebagai bagian dari pencatatan karya yang digunakan dalam pengelolaan penyelenggaraan pameran seni tersebut.
Premis 2: Untuk menyusun katalog karya pada pameran itu, pengelola memberikan nomor katalog kepada setiap karya yang masuk daftar pameran, sehingga karya dalam daftar tersebut mendapatkan nomor identitas pada pencatatan katalog yang digunakan dalam penyelenggaraan pameran.
Premis 3: Pada penyusunan bahan bacaan untuk pengunjung, pengelola mencantumkan dalam panduan pengunjung setiap karya yang mendapat nomor katalog, sehingga karya dengan nomor tersebut dimuat dalam panduan yang digunakan pengunjung selama mengikuti pameran seni.
Kalimat “Meja pembagian panduan pengunjung ditempatkan di dekat pintu masuk ruang pamer.” merupakan informasi pengecoh karena letak meja pembagian tidak menentukan seleksi, pendataan, atau pencantuman karya dalam panduan. Kalimat ini tidak dijadikan variabel logis dan tidak digunakan dalam penarikan kesimpulan.
p: Karya lolos seleksi kuratorial.
q: Karya masuk daftar pameran.
r: Karya mendapat nomor katalog.
s: Karya dicantumkan dalam panduan pengunjung.
• Langkah 1 (Premis 1 + 2):
Premis 1: p → q
Premis 2: q → r
Gunakan hukum Silogisme.
Kesimpulan (Premis 4): p → r
• Langkah 2 (Premis 4 + 3):
Premis 4: p → r
Premis 3: r → s
Gunakan hukum Silogisme. Terpenuhinya p menjamin r, sedangkan r menjamin s.
Kesimpulan: p → s
Jawaban: Keberhasilan karya melewati seleksi kuratorial menjamin pencantumannya dalam panduan pengunjung.

Pembahasan Setiap Opsi:
Opsi A: s → p. Hubungan s → p membalik arah rangkaian implikasi. Terpenuhinya s tidak membuktikan p. (bukan kesimpulan yang dicari)
Opsi B: ¬p → ¬s. Hubungan ¬p → ¬s menolak anteseden. Ketiadaan p tidak mengharuskan ketiadaan s. (bukan kesimpulan yang dicari)
Opsi C: p → s. Hasil ini diperoleh melalui dua langkah penalaran di atas. (kesimpulan yang dicari)
Opsi D: q → p. Hubungan q → p membalik Premis 1. Terpenuhinya q tidak membuktikan p. (bukan kesimpulan yang dicari)
Opsi E: s → r. Hubungan s → r membalik Premis 3. Terpenuhinya s tidak membuktikan r. (bukan kesimpulan yang dicari)`,
        tingkat: 'sulit',
        status: 'draft',
      },
      // tryout-ref-09-07 · Andika - Verbal Silogisme SKD 2027_Ready to Input.docx, soal 7
      {
        nomor: 5,
        tipe: 'pg',
        pertanyaan: `Dalam mengatur pemakaian taman bersama untuk acara komunitas, pengurus mencantumkan dalam agenda kawasan setiap kegiatan yang memperoleh persetujuan penggunaan taman, sebagai bagian dari pencatatan kegiatan komunitas yang diselenggarakan melalui layanan penggunaan taman tersebut. Pada pengaturan pemakaian panggung untuk acara komunitas, pengurus memberikan jadwal penggunaan panggung kepada setiap kegiatan yang masuk agenda kawasan, sehingga kegiatan dalam agenda itu mendapatkan alokasi jadwal pemakaian panggung pada pengelolaan fasilitas taman. Untuk pengelolaan fasilitas listrik pada pelaksanaan acara, pengurus menyediakan akses listrik panggung bagi setiap kegiatan yang mendapat jadwal penggunaan panggung, sebagai akses pemakaian listrik yang diberikan melalui layanan fasilitas panggung di taman bersama tersebut.
Berdasarkan narasi tersebut, kesimpulan yang pasti benar adalah ....`,
        opsi: [
          { label: 'A', teks: `Akses listrik panggung hanya diperoleh oleh kegiatan yang mendapat persetujuan penggunaan taman.` },
          { label: 'B', teks: `Ketiadaan persetujuan penggunaan taman menjamin kegiatan tersebut tidak memperoleh akses listrik panggung.` },
          { label: 'C', teks: `Pencantuman kegiatan dalam agenda kawasan menunjukkan bahwa persetujuan penggunaan taman telah diperoleh.` },
          { label: 'D', teks: `Persetujuan penggunaan taman yang diperoleh kegiatan menjamin perolehan akses listrik panggung bagi kegiatan tersebut.` },
          { label: 'E', teks: `Perolehan akses listrik panggung menunjukkan bahwa kegiatan telah mendapat jadwal penggunaan panggung.` },
        ],
        kunci: 'D',
        pembahasan: `Premis 1: Dalam mengatur pemakaian taman bersama untuk acara komunitas, pengurus mencantumkan dalam agenda kawasan setiap kegiatan yang memperoleh persetujuan penggunaan taman, sebagai bagian dari pencatatan kegiatan komunitas yang diselenggarakan melalui layanan penggunaan taman tersebut.
Premis 2: Pada pengaturan pemakaian panggung untuk acara komunitas, pengurus memberikan jadwal penggunaan panggung kepada setiap kegiatan yang masuk agenda kawasan, sehingga kegiatan dalam agenda itu mendapatkan alokasi jadwal pemakaian panggung pada pengelolaan fasilitas taman.
Premis 3: Untuk pengelolaan fasilitas listrik pada pelaksanaan acara, pengurus menyediakan akses listrik panggung bagi setiap kegiatan yang mendapat jadwal penggunaan panggung, sebagai akses pemakaian listrik yang diberikan melalui layanan fasilitas panggung di taman bersama tersebut.
p: Kegiatan komunitas memperoleh persetujuan penggunaan taman.
q: Kegiatan komunitas masuk agenda kawasan.
r: Kegiatan komunitas mendapat jadwal penggunaan panggung.
s: Kegiatan komunitas memperoleh akses listrik panggung.
• Langkah 1 (Premis 1 + 2):
Premis 1: p → q
Premis 2: q → r
Gunakan hukum Silogisme.
Kesimpulan (Premis 4): p → r
• Langkah 2 (Premis 4 + 3):
Premis 4: p → r
Premis 3: r → s
Gunakan hukum Silogisme. Terpenuhinya p menjamin r, sedangkan r menjamin s.
Kesimpulan: p → s
Jawaban: Persetujuan penggunaan taman yang diperoleh kegiatan menjamin perolehan akses listrik panggung bagi kegiatan tersebut.

Pembahasan Setiap Opsi:
Opsi A: s → p. Hubungan s → p membalik arah rangkaian implikasi. Terpenuhinya s tidak membuktikan p. (bukan kesimpulan yang dicari)
Opsi B: ¬p → ¬s. Hubungan ¬p → ¬s menolak anteseden. Ketiadaan p tidak mengharuskan ketiadaan s. (bukan kesimpulan yang dicari)
Opsi C: q → p. Hubungan q → p membalik Premis 1. Terpenuhinya q tidak membuktikan p. (bukan kesimpulan yang dicari)
Opsi D: p → s. Hasil ini diperoleh melalui dua langkah penalaran di atas. (kesimpulan yang dicari)
Opsi E: s → r. Hubungan s → r membalik Premis 3. Terpenuhinya s tidak membuktikan r. (bukan kesimpulan yang dicari)`,
        tingkat: 'sulit',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Verbal > Analogi > 2 Kata` },
    soal: [
      // contoh TIU riset CPNS 2027 ("Contoh Soal TIU SKD 2027"), dipertahankan dari angkatan sebelumnya: Analogi 2 kata; tidak ada di tryout generator
      {
        nomor: 6,
        tipe: 'pg',
        pertanyaan: `Cepat : Lambat = ... : ...`,
        opsi: [
          { label: 'A', teks: `Awal : Akhir` },
          { label: 'B', teks: `Keras : Batu` },
          { label: 'C', teks: `Panjang : Jalan` },
          { label: 'D', teks: `Tinggi : Gedung` },
          { label: 'E', teks: `Manis : Gula` },
        ],
        kunci: 'A',
        pembahasan: `Kata "cepat" dan "lambat" memiliki hubungan antonim atau berlawanan makna. Pola yang sama terdapat pada opsi A, yaitu "awal" dan "akhir" yang juga merupakan pasangan kata berlawanan makna.`,
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Verbal > Analitis > Memperkuat/Memperlemah Argumen` },
    soal: [
      // tryout-ref-10-06 · Andika_Verbal Analitis - Memperkuat_Memperlemah_Ready to Input.docx, soal 6
      {
        nomor: 7,
        tipe: 'pg',
        pertanyaan: `Pengelola kantin mengganti wadah makan sekali pakai dengan kotak yang dapat digunakan berulang kali. Ia memperkirakan perubahan ini akan mengurangi jumlah kemasan sekali pakai yang dibuang setiap hari, karena makanan tidak lagi disajikan langsung dalam wadah sekali pakai.
Kondisi manakah yang paling MEMPERLEMAH perkiraan tersebut?`,
        opsi: [
          { label: 'A', teks: `Setiap kotak tetap diberi pelapis sekali pakai; jumlah pelapis yang dibuang sama dengan jumlah wadah sekali pakai sebelumnya.` },
          { label: 'B', teks: `Sebagian pengunjung membawa makanan pulang, tetapi mereka menggunakan kotak baru yang dapat dikembalikan dan tidak diberi kemasan tambahan oleh petugas kantin.` },
          { label: 'C', teks: `Pencucian kotak meningkatkan pemakaian air kantin karena petugas harus membersihkan seluruh kotak setiap selesai digunakan pengunjung.` },
          { label: 'D', teks: `Biaya membeli kotak baru melebihi biaya wadah lama pada bulan pertama, tetapi kotak tersebut masih digunakan kembali pada bulan-bulan sesudahnya.` },
          { label: 'E', teks: `Jumlah pembeli bertambah setelah pergantian wadah, tetapi petugas memastikan bahwa setiap pembeli tetap menerima makanan dalam kotak yang dapat dipakai ulang.` },
        ],
        kunci: 'A',
        pembahasan: `Kesimpulan menyangkut jumlah kemasan sekali pakai yang dibuang, bukan sekadar jenis wadah luar yang dipakai. Opsi A menunjukkan bahwa fungsi kemasan sekali pakai tetap dipertahankan dalam bentuk pelapis. Karena jumlah pelapis yang dibuang sama dengan jumlah wadah sebelumnya, penggantian kotak tidak menghasilkan pengurangan jumlah kemasan sekali pakai sebagaimana diperkirakan. Hal ini menyerang hubungan antara tindakan dan hasil yang diklaim. Informasi tersebut tidak harus membuktikan bahwa semua manfaat kotak baru hilang.

Pembahasan Opsi Salah:
Opsi B salah: tidak menunjukkan penggunaan kemasan sekali pakai pengganti karena kotak dapat dikembalikan dan tidak diberi kemasan tambahan.
Opsi C salah: mengungkap dampak pada pemakaian air, sedangkan kesimpulan secara khusus menyangkut jumlah kemasan sekali pakai yang dibuang.
Opsi D salah: membahas biaya pembelian, bukan jumlah kemasan yang dibuang.
Opsi E salah: menunjukkan bertambahnya pembeli, tetapi tanpa informasi tentang penggunaan kemasan sekali pakai, dampaknya terhadap kesimpulan belum dapat dipastikan.

Cara cepat: Cocokkan ukuran hasil dalam kesimpulan dengan keadaan sebenarnya. Perubahan bentuk sarana belum tentu mengurangi hal yang ingin dikurangi.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      // tryout-ref-10-07 · Andika_Verbal Analitis - Memperkuat_Memperlemah_Ready to Input.docx, soal 7
      {
        nomor: 8,
        tipe: 'pg',
        pertanyaan: `Pengelola komunitas baca menemukan bahwa anggota yang memakai aplikasi pencatat bacaan membaca lebih sering daripada anggota yang tidak memakainya. Ia menyimpulkan bahwa penggunaan aplikasi tersebut meningkatkan kebiasaan membaca. Berdasarkan kesimpulan itu, ia menganjurkan semua anggota memasang aplikasi agar frekuensi membaca mereka meningkat.
Temuan manakah yang paling MEMPERLEMAH kesimpulan bahwa aplikasi tersebut menyebabkan peningkatan frekuensi membaca?`,
        opsi: [
          { label: 'A', teks: `Aplikasi menyediakan pengingat membaca dan catatan kemajuan, sehingga pengguna dapat menentukan target serta melihat jumlah buku yang telah mereka baca setiap bulan.` },
          { label: 'B', teks: `Beberapa anggota yang jarang membaca belum tertarik memasang aplikasi, tetapi alasan penolakan mereka dan perubahan frekuensi membacanya belum ditelusuri oleh pengelola.` },
          { label: 'C', teks: `Pengguna aplikasi memilih jenis bacaan yang berbeda dari nonpengguna; sebagian menyukai novel, sedangkan lainnya lebih sering membaca biografi.` },
          { label: 'D', teks: `Pengguna sudah lebih sering membaca sebelum memasang aplikasi; frekuensinya tetap setelah pemasangan, dan kebiasaan lama itulah yang mendorong mereka menggunakannya.` },
          { label: 'E', teks: `Sebagian anggota menggunakan aplikasi hanya untuk mencatat buku selesai dibaca, sementara anggota lainnya juga memakai pengingat dan fitur penentuan target bulanan.` },
        ],
        kunci: 'D',
        pembahasan: `Kesimpulan menganggap aplikasi menyebabkan kebiasaan membaca meningkat. Namun, perbedaan antara pengguna dan nonpengguna juga dapat muncul karena arah hubungan yang terbalik: anggota yang sudah rajin membaca lebih terdorong memakai aplikasi. Opsi D memberikan bukti langsung bagi kemungkinan tersebut. Perbedaan frekuensi sudah ada sebelum pemasangan, tidak meningkat sesudahnya, dan kebiasaan membaca yang lebih dahulu terbentuk mendorong penggunaan aplikasi. Dengan demikian, perbedaan yang diamati pengelola tidak cukup untuk menyimpulkan bahwa aplikasi menyebabkan peningkatan. Temuan ini melemahkan kesimpulan kausal tanpa menyatakan bahwa aplikasi mustahil bermanfaat bagi siapa pun.

Pembahasan Opsi Salah:
Opsi A salah: menjelaskan fitur yang mungkin membantu kebiasaan membaca, sehingga tidak melemahkan arah hubungan yang diklaim.
Opsi B salah: memberi petunjuk tentang perbedaan minat antarkelompok, tetapi belum menunjukkan urutan waktu atau penyebab perbedaan frekuensi membaca.
Opsi C salah: menyebut perbedaan jenis bacaan tanpa membuktikan pengaruhnya terhadap ukuran hasil yang digunakan.
Opsi E salah: menjelaskan variasi pemakaian fitur, tetapi belum menunjukkan apakah frekuensi membaca meningkat akibat aplikasi.

Cara cepat: Periksa urutan waktunya: apakah tindakan menghasilkan kebiasaan, atau kebiasaan yang sudah ada justru mendorong seseorang melakukan tindakan?`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tryout-ref-10-04 · Andika_Verbal Analitis - Memperkuat_Memperlemah_Ready to Input.docx, soal 4
      {
        nomor: 9,
        tipe: 'pg',
        pertanyaan: `Dalam uji coba di Desa Lestari, petani menerima pesan singkat tentang waktu penyiraman yang disesuaikan dengan kelembapan tanah. Penggunaan air menurun tanpa penurunan hasil panen. Dinas pertanian ingin menerapkan program serupa di Desa Harapan dan memperkirakan manfaat yang sama. Perkiraan itu didasarkan pada keberhasilan uji coba di Desa Lestari.
Informasi manakah yang paling MEMPERKUAT kesimpulan bahwa manfaat uji coba dapat diterapkan di desa sasaran?`,
        opsi: [
          { label: 'A', teks: `Hasil panen awal kedua desa hampir sama, tetapi komoditas dan kemampuan tanah menahan air berbeda, sehingga kebutuhan penyiramannya belum tentu sebanding.` },
          { label: 'B', teks: `Petani Desa Harapan terbiasa membaca pesan dinas, tetapi belum diketahui apakah mereka dapat mengubah penyiraman pada waktu yang dianjurkan.` },
          { label: 'C', teks: `Tanah kedua desa memiliki kelembapan serupa saat diperiksa, tetapi pemeriksaan itu hanya sekali dan jenis tanaman yang dibudidayakan tidak dibandingkan.` },
          { label: 'D', teks: `Sistem irigasi kedua desa sama-sama dapat diatur, tetapi pasokan air Desa Harapan sering terputus pada waktu yang dianjurkan untuk penyiraman.` },
          { label: 'E', teks: `Tanaman, sifat tanah, dan pengaturan irigasi kedua desa sebanding; petani desa sasaran dapat menerima serta menjalankan anjuran penyiraman pada waktu yang ditentukan.` },
        ],
        kunci: 'E',
        pembahasan: `Kesimpulan menggunakan analogi: keberhasilan di satu lokasi diperkirakan dapat terjadi di lokasi lain. Kekuatan analogi bergantung pada kesamaan faktor yang menentukan keberhasilan, bukan pada sembarang kemiripan. Opsi E mencakup kondisi pertanian yang memengaruhi kebutuhan air serta kemampuan petani menjalankan anjuran. Kesamaan tersebut mengurangi risiko bahwa hasil uji coba hanya berlaku karena keadaan khusus Desa Lestari. Karena faktor penting dan cara penerapannya sebanding, perkiraan manfaat di Desa Harapan menjadi lebih kuat.

Pembahasan Opsi Salah:
Opsi A salah: memakai kesamaan hasil panen sebagai dasar analogi, padahal kebutuhan air dapat berbeda karena tanaman dan tanahnya berbeda.
Opsi B salah: mendukung penerimaan informasi saja dan belum memastikan bahwa anjuran dapat dilaksanakan.
Opsi C salah: hanya memberikan kesamaan kondisi sesaat tanpa membandingkan faktor kebutuhan air secara memadai.
Opsi D salah: menunjukkan kesamaan sarana, tetapi gangguan pasokan air dapat menghambat pelaksanaan anjuran.

Cara cepat: Uji analogi melalui kesamaan faktor penyebab dan syarat pelaksanaannya. Kemiripan lokasi atau kegiatan saja belum cukup.`,
        tingkat: 'sulit',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Verbal > Analitis > Susunan & Posisi` },
    soal: [
      // tryout-ref-11-01 · Uma - Verbal Analitis_Done Input.docx, soal 1
      {
        nomor: 10,
        tipe: 'pg',
        pertanyaan: `Enam berkas milik Ardi, Beni, Caca, Dini, Ega, dan Fina disusun berjajar pada rak bernomor 1 sampai 6 dari kiri ke kanan. Caca berada di posisi keempat. Beni berada tepat di sebelah kiri Caca. Fina berada tepat di sebelah kanan Caca. Ardi berada di sebelah kiri Beni. Dini berada tepat di sebelah kanan Ardi. Ega berada di sebelah kanan Fina.
Siapakah yang berada pada posisi kedua?`,
        opsi: [
          { label: 'A', teks: `Ardi` },
          { label: 'B', teks: `Beni` },
          { label: 'C', teks: `Dini` },
          { label: 'D', teks: `Fina` },
          { label: 'E', teks: `Ega` },
        ],
        kunci: 'C',
        pembahasan: `Caca diketahui berada di posisi keempat dari kiri. Informasi ini menjadi patokan karena posisi Caca sudah pasti dan tidak bergantung pada berkas lain. Beni berada tepat di sebelah kiri Caca. Kata “tepat” berarti tidak ada berkas di antara keduanya, sehingga Beni harus menempati posisi ketiga. Dengan alasan yang sama, Fina yang tepat di sebelah kanan Caca harus berada di posisi kelima.
Ega berada di sebelah kanan Fina. Karena Fina sudah menempati posisi kelima dan rak hanya memiliki enam tempat, satu-satunya tempat di sebelah kanan Fina adalah posisi keenam. Maka posisi keenam ditempati Ega.
Empat tempat terakhir yang sudah terisi adalah Beni pada posisi ketiga, Caca pada posisi keempat, Fina pada posisi kelima, dan Ega pada posisi keenam. Posisi yang tersisa adalah posisi pertama dan kedua untuk Ardi dan Dini. Diketahui Ardi berada di sebelah kiri Beni dan Dini tepat di sebelah kanan Ardi. Jika Ardi ditempatkan di posisi kedua, Dini harus berada di posisi ketiga yang sudah diisi Beni. Karena itu Ardi harus berada di posisi pertama dan Dini di posisi kedua.
Susunan lengkap dari kiri ke kanan adalah Ardi, Dini, Beni, Caca, Fina, dan Ega. Dengan demikian, berkas yang menempati posisi kedua adalah Dini.
\\(\\def\\arraystretch{1.4}\\begin{array}{|l|l|l|l|l|l|} \\hline \\textbf{Posisi 1} & \\textbf{Posisi 2} & \\textbf{Posisi 3} & \\textbf{Posisi 4} & \\textbf{Posisi 5} & \\textbf{Posisi 6} \\\\ \\hline \\text{Ardi} & \\text{Dini} & \\text{Beni} & \\text{Caca} & \\text{Fina} & \\text{Ega} \\\\ \\hline \\end{array}\\)
Jadi, jawaban yang benar adalah C.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      // tryout-ref-11-02 · Uma - Verbal Analitis_Done Input.docx, soal 2
      {
        nomor: 11,
        tipe: 'pg',
        pertanyaan: `Delapan peserta, yaitu Gani, Hira, Intan, Joko, Kila, Luki, Mira, dan Nando, duduk pada empat baris. Setiap baris terdiri atas kursi kiri dan kanan. Gani dan Hira duduk di baris pertama. Intan duduk tepat di belakang Gani. Joko duduk di samping Intan. Kila dan Luki duduk bersama pada baris ketiga. Mira tidak duduk di baris pertama, kedua, maupun ketiga.
Siapakah yang duduk satu baris dengan Mira?`,
        opsi: [
          { label: 'A', teks: `Kila` },
          { label: 'B', teks: `Joko` },
          { label: 'C', teks: `Luki` },
          { label: 'D', teks: `Intan` },
          { label: 'E', teks: `Nando` },
        ],
        kunci: 'E',
        pembahasan: `Setiap baris terdiri atas dua kursi, yaitu kursi kiri dan kursi kanan. Karena Gani dan Hira duduk di baris pertama, kedua kursi baris pertama telah terisi dan tidak dapat ditempati peserta lain.
Intan duduk tepat di belakang Gani. Artinya, Intan berada di baris kedua pada kolom kursi yang sama dengan Gani. Joko duduk di samping Intan, sehingga Joko menempati satu kursi lain di baris kedua. Dengan demikian, baris kedua juga sudah penuh.
Kila dan Luki duduk bersama di baris ketiga. Karena terdapat tepat dua kursi dalam setiap baris, baris ketiga diisi oleh Kila dan Luki tanpa menyisakan kursi kosong.
Mira tidak duduk pada baris pertama, kedua, maupun ketiga. Dari empat baris yang tersedia, pilihan satu-satunya bagi Mira adalah baris keempat. Peserta yang telah ditempatkan adalah Gani, Hira, Intan, Joko, Kila, Luki, dan Mira. Satu-satunya peserta yang belum ditempatkan adalah Nando. Kursi kedua di baris keempat harus ditempati Nando.
Susunan tersebut juga memenuhi jumlah keseluruhan delapan peserta dalam empat baris. Jadi, orang yang pasti satu baris dengan Mira adalah Nando.
\\(\\def\\arraystretch{1.4}\\begin{array}{|c|l|l|} \\hline \\textbf{Baris} & \\textbf{Kiri} & \\textbf{Kanan} \\\\ \\hline 1 & \\text{Gani} & \\text{Hira} \\\\ \\hline 2 & \\text{Intan} & \\text{Joko} \\\\ \\hline 3 & \\text{Kila} & \\text{Luki} \\\\ \\hline 4 & \\text{Mira} & \\text{Nando} \\\\ \\hline \\end{array}\\)
Jadi, jawaban yang benar adalah E.`,
        tingkat: 'sulit',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Numerik > Berhitung > Operasi Hitung - Dasar` },
    soal: [
      // tryout-ref-00-01 · Andika - Numerik SKD 2027_Ready to Input.docx, soal 1
      {
        nomor: 12,
        tipe: 'pg',
        pertanyaan: `Hasil dari \\(\\frac{3}{8}+\\frac{1}{8}-\\frac{3}{10}\\) adalah …`,
        opsi: [
          { label: 'A', teks: `0,2` },
          { label: 'B', teks: `0,1` },
          { label: 'C', teks: `0,4` },
          { label: 'D', teks: `0,5` },
          { label: 'E', teks: `0,8` },
        ],
        kunci: 'A',
        pembahasan: `\\(\\frac{3}{8}+\\frac{1}{8}-\\frac{3}{10}\\)
\\(=\\frac{3\\times 5}{8\\times 5}+\\frac{1\\times 5}{8\\times 5}-\\frac{3\\times 4}{10\\times 4}\\)
\\(=\\frac{15}{40}+\\frac{5}{40}-\\frac{12}{40}\\)
\\(=\\frac{8}{40}\\)
\\(=\\frac{1}{5}\\)
\\(=0,2\\)`,
        tingkat: 'mudah',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Numerik > Berhitung > Perkalian Setara` },
    soal: [
      // tryout-ref-00-04 · Andika - Numerik SKD 2027_Ready to Input.docx, soal 4
      {
        nomor: 13,
        tipe: 'pg',
        pertanyaan: `Penyedia katering membandingkan jumlah kotak dan banyaknya porsi makanan per kotak. Pasangan susunan yang menghasilkan jumlah porsi keseluruhan yang sama adalah …`,
        opsi: [
          { label: 'A', teks: `24×730 sama dengan 35×460` },
          { label: 'B', teks: `27×540 sama dengan 36×410` },
          { label: 'C', teks: `28×600 sama dengan 24×700` },
          { label: 'D', teks: `32×450 sama dengan 36×430` },
          { label: 'E', teks: `44×360 sama dengan 48×340` },
        ],
        kunci: 'C',
        pembahasan: `Eliminasi 0 secara berseberangan di setiap opsi:
Yang dimaksud dengan “berseberangan” adalah pada dua hasil perkalian yang sedang dibandingkan. Hilangkan satu nol di akhir salah satu faktor pada sisi kiri dan satu nol di akhir salah satu faktor pada sisi kanan secara berpasangan. Secara matematis, langkah ini membagi kedua hasil perkalian dengan 10, sehingga kesetaraan keduanya tetap terjaga. Untuk dua pasang nol, kedua hasil dibagi dengan 100. Hanya nol di akhir bilangan yang boleh dihilangkan, dengan jumlah yang sama pada kedua sisi.
Contoh: 28 × 600 dibandingkan dengan 24 × 700 dapat disederhanakan menjadi 28 × 6 dibandingkan dengan 24 × 7 dengan membagi kedua hasil perkalian dengan 100.
Penyederhanaan setiap opsi:
A. \\(24\\times 73\\cancel{0}\\text{ sama dengan }35\\times 46\\cancel{0}\\to 24\\times 73\\text{ sama dengan }35\\times 46\\)
B. \\(27\\times 54\\cancel{0}\\text{ sama dengan }36\\times 41\\cancel{0}\\to 27\\times 54\\text{ sama dengan }36\\times 41\\)
C. \\(28\\times 6\\cancel{0}\\cancel{0}\\text{ sama dengan }24\\times 7\\cancel{0}\\cancel{0}\\to 28\\times 6\\text{ sama dengan }24\\times 7\\)
D. \\(32\\times 45\\cancel{0}\\text{ sama dengan }36\\times 43\\cancel{0}\\to 32\\times 45\\text{ sama dengan }36\\times 43\\)
E. \\(44\\times 36\\cancel{0}\\text{ sama dengan }48\\times 34\\cancel{0}\\to 44\\times 36\\text{ sama dengan }48\\times 34\\)
Periksa digit terakhir dari perkalian digit terakhir.
Jika hasil digit terakhirnya sama, maka lanjutkan pengerjaan. Jika tidak sama, maka lanjutkan ke opsi berikutnya.
A. 24×73 sama dengan 35×46
24×73→4×3=12 (Digit terakhir adalah 2)
35×46→5×6=30 (Digit terakhir adalah 0)
Karena digit terakhirnya berbeda, maka lanjutkan ke opsi selanjutnya.
B. 27×54 sama dengan 36×41
27×54→7×4=28 (Digit terakhir adalah 8)
36×41→6×1=6 (Digit terakhir adalah 6)
Karena digit terakhirnya berbeda, maka lanjutkan ke opsi selanjutnya.
C. 28×6 sama dengan 24×7
28×6→8×6=48 (Digit terakhir adalah 8)
24×7→4×7=28 (Digit terakhir adalah 8)
Karena digit terakhirnya sama, maka lakukan perkalian penuhnya.
28×6=168
24×7=168
Hasilnya sama. Jadi, jawabannya adalah C.`,
        tingkat: 'sedang',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Numerik > Berhitung > Pembagian Setara` },
    soal: [
      // tryout-ref-00-08 · Andika - Numerik SKD 2027_Ready to Input.docx, soal 8
      {
        nomor: 14,
        tipe: 'pg',
        pertanyaan: `Dari lima pasangan operasi di bawah ini, tentukan pasangan yang kedua hasil pembagiannya bernilai sama.`,
        opsi: [
          { label: 'A', teks: `2430÷35 sama dengan 1680÷25` },
          { label: 'B', teks: `1800÷45 sama dengan 1200÷30` },
          { label: 'C', teks: `1540÷28 sama dengan 2340÷39` },
          { label: 'D', teks: `1890÷42 sama dengan 1740÷36` },
          { label: 'E', teks: `2160÷54 sama dengan 2730÷63` },
        ],
        kunci: 'B',
        pembahasan: `Ubah setiap pembagian menjadi perkalian setara dengan perkalian silang:
A. 2430÷35 sama dengan 1680÷25
\\(\\frac{2430}{35}=\\frac{1680}{25}\\)
\\(\\Leftrightarrow 2430\\times 25=1680\\times 35\\)
\\(\\to 2430\\times 25\\text{ sama dengan }1680\\times 35\\)
B. 1800÷45 sama dengan 1200÷30
\\(\\frac{1800}{45}=\\frac{1200}{30}\\)
\\(\\Leftrightarrow 1800\\times 30=1200\\times 45\\)
\\(\\to 1800\\times 30\\text{ sama dengan }1200\\times 45\\)
C. 1540÷28 sama dengan 2340÷39
\\(\\frac{1540}{28}=\\frac{2340}{39}\\)
\\(\\Leftrightarrow 1540\\times 39=2340\\times 28\\)
\\(\\to 1540\\times 39\\text{ sama dengan }2340\\times 28\\)
D. 1890÷42 sama dengan 1740÷36
\\(\\frac{1890}{42}=\\frac{1740}{36}\\)
\\(\\Leftrightarrow 1890\\times 36=1740\\times 42\\)
\\(\\to 1890\\times 36\\text{ sama dengan }1740\\times 42\\)
E. 2160÷54 sama dengan 2730÷63
\\(\\frac{2160}{54}=\\frac{2730}{63}\\)
\\(\\Leftrightarrow 2160\\times 63=2730\\times 54\\)
\\(\\to 2160\\times 63\\text{ sama dengan }2730\\times 54\\)
Eliminasi 0 secara berseberangan di setiap opsi:
Yang dimaksud dengan “berseberangan” adalah pada dua hasil perkalian yang sedang dibandingkan. Hilangkan satu nol di akhir salah satu faktor pada sisi kiri dan satu nol di akhir salah satu faktor pada sisi kanan secara berpasangan. Secara matematis, langkah ini membagi kedua hasil perkalian dengan 10, sehingga kesetaraan keduanya tetap terjaga. Untuk dua pasang nol, kedua hasil dibagi dengan 100. Hanya nol di akhir bilangan yang boleh dihilangkan, dengan jumlah yang sama pada kedua sisi.
Contoh setelah perkalian silang: 1800 × 30 dibandingkan dengan 1200 × 45 menjadi 18 × 30 dibandingkan dengan 12 × 45; kedua hasil perkalian dibagi dengan 100.
Pada soal pembagian, penyederhanaan ini dilakukan terhadap hasil perkalian silang yang sudah dibentuk di atas.
Penyederhanaan setiap opsi:
A. \\(243\\cancel{0}\\times 25\\text{ sama dengan }168\\cancel{0}\\times 35\\to 243\\times 25\\text{ sama dengan }168\\times 35\\)
B. \\(18\\cancel{0}\\cancel{0}\\times 30\\text{ sama dengan }12\\cancel{0}\\cancel{0}\\times 45\\to 18\\times 30\\text{ sama dengan }12\\times 45\\)
C. \\(154\\cancel{0}\\times 39\\text{ sama dengan }234\\cancel{0}\\times 28\\to 154\\times 39\\text{ sama dengan }234\\times 28\\)
D. \\(189\\cancel{0}\\times 36\\text{ sama dengan }174\\cancel{0}\\times 42\\to 189\\times 36\\text{ sama dengan }174\\times 42\\)
E. \\(216\\cancel{0}\\times 63\\text{ sama dengan }273\\cancel{0}\\times 54\\to 216\\times 63\\text{ sama dengan }273\\times 54\\)
Periksa digit terakhir dari perkalian digit terakhir.
Jika hasil digit terakhirnya sama, maka lanjutkan pengerjaan. Jika tidak sama, maka lanjutkan ke opsi berikutnya.
A. 243×25 sama dengan 168×35
243×25→3×5=15 (Digit terakhir adalah 5)
168×35→8×5=40 (Digit terakhir adalah 0)
Karena digit terakhirnya berbeda, maka lanjutkan ke opsi selanjutnya.
B. 18×30 sama dengan 12×45
18×30→8×0=0 (Digit terakhir adalah 0)
12×45→2×5=10 (Digit terakhir adalah 0)
Karena digit terakhirnya sama, maka lakukan perkalian penuhnya.
18×30=540
12×45=540
Hasilnya sama. Jadi, jawabannya adalah B.`,
        tingkat: 'sedang',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Numerik > Kecukupan Data > Aljabar - Operasi Aljabar` },
    soal: [
      // tryout-ref-00-10 · Andika - Numerik SKD 2027_Ready to Input.docx, soal 10
      {
        nomor: 15,
        tipe: 'pg',
        pertanyaan: `Diketahui dua bilangan positif A dan B. Tentukan apakah A lebih besar daripada B!
(1) A+B=480.
(2) A−B=80.
Pilihlah informasi yang cukup untuk menjawab pertanyaan tersebut.`,
        opsi: [
          { label: 'A', teks: `Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi (2) saja tidak cukup.` },
          { label: 'B', teks: `Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi (1) saja tidak cukup.` },
          { label: 'C', teks: `KEDUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.` },
          { label: 'D', teks: `Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan (2) SAJA cukup.` },
          { label: 'E', teks: `Pernyataan (1) dan (2) TIDAK CUKUP untuk menjawab pertanyaan.` },
        ],
        kunci: 'B',
        pembahasan: `Diketahui A dan B merupakan bilangan positif.
Pernyataan (1):
A+B=480
Informasi tersebut belum dapat menentukan hubungan A dan B.
Misalnya, A=280 dan B=200, sehingga A>B. Namun, A=200 dan B=280 juga memenuhi pernyataan tersebut dan menghasilkan A<B.
Jadi, pernyataan (1) SAJA tidak cukup.
Pernyataan (2):
A−B=80
Karena 80>0, diperoleh:
A−B>0
A>B
Hubungan A dan B dapat diketahui secara pasti. Jadi, pernyataan (2) SAJA cukup.
Jadi, jawaban yang benar adalah B.`,
        tingkat: 'mudah',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Numerik > Kecukupan Data > Aljabar - Persamaan` },
    soal: [
      // tryout-ref-00-13 · Andika - Numerik SKD 2027_Ready to Input.docx, soal 13
      {
        nomor: 16,
        tipe: 'pg',
        pertanyaan: `Diketahui x merupakan bilangan real. Tentukan nilai x!
(1) \\(x^{2}=64\\).
(2) x<0.
Pilihlah informasi yang cukup untuk menjawab pertanyaan tersebut.`,
        opsi: [
          { label: 'A', teks: `Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi (2) saja tidak cukup.` },
          { label: 'B', teks: `Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi (1) saja tidak cukup.` },
          { label: 'C', teks: `KEDUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.` },
          { label: 'D', teks: `Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan (2) SAJA cukup.` },
          { label: 'E', teks: `Pernyataan (1) dan (2) TIDAK CUKUP untuk menjawab pertanyaan.` },
        ],
        kunci: 'C',
        pembahasan: `Pernyataan (1):
\\(x^{2}=64\\)
x=±8
Terdapat dua kemungkinan nilai x, yaitu 8 atau −8, sehingga pernyataan (1) SAJA tidak cukup.
Pernyataan (2):
x<0
Pernyataan ini hanya menunjukkan bahwa x negatif. Nilai x dapat berupa −8, −3, atau bilangan negatif lainnya. Pernyataan (2) SAJA tidak cukup.
Pernyataan (1) dan (2) bersama-sama:
x=±8
x<0
x=−8
Kedua informasi menghasilkan satu nilai x yang unik. Jadi, kedua pernyataan BERSAMA-SAMA cukup, tetapi masing-masing pernyataan SAJA tidak cukup. Jawaban yang benar adalah C.`,
        tingkat: 'sedang',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Numerik > Kecukupan Data > Bilangan - Jenis dan Sifat Bilangan` },
    soal: [
      // tryout-ref-00-16 · Andika - Numerik SKD 2027_Ready to Input.docx, soal 16
      {
        nomor: 17,
        tipe: 'pg',
        pertanyaan: `Diketahui n merupakan bilangan bulat positif. Apakah n merupakan bilangan prima?
(1) n merupakan bilangan ganjil yang lebih besar dari 14.
(2) n memiliki tepat dua faktor positif, yaitu 1 dan n.
Pilihlah informasi yang cukup untuk menjawab pertanyaan tersebut.`,
        opsi: [
          { label: 'A', teks: `Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi (2) saja tidak cukup.` },
          { label: 'B', teks: `Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi (1) saja tidak cukup.` },
          { label: 'C', teks: `KEDUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.` },
          { label: 'D', teks: `Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan (2) SAJA cukup.` },
          { label: 'E', teks: `Pernyataan (1) dan (2) TIDAK CUKUP untuk menjawab pertanyaan.` },
        ],
        kunci: 'B',
        pembahasan: `Pernyataan (1):
Bilangan ganjil yang lebih besar dari 14 belum tentu prima. Contohnya, n=17 merupakan bilangan prima, sedangkan n=21 bukan bilangan prima.
Pernyataan (1) SAJA tidak cukup.
Pernyataan (2):
Bilangan bulat positif yang memiliki tepat dua faktor positif, yaitu 1 dan dirinya sendiri, merupakan bilangan prima. Dengan demikian, n pasti prima.
Pernyataan (2) SAJA cukup.
Jadi, jawaban yang benar adalah B.`,
        tingkat: 'mudah',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Numerik > Kecukupan Data > Soal Cerita - Geometri` },
    soal: [
      // tryout-ref-00-22 · Andika - Numerik SKD 2027_Ready to Input.docx, soal 22
      {
        nomor: 18,
        tipe: 'pg',
        pertanyaan: `Sebuah taman berbentuk persegi panjang memiliki panjang lebih besar daripada lebarnya. Berapakah luas taman tersebut?
(1) Keliling taman adalah 64 meter.
(2) Panjang taman 8 meter lebih besar daripada lebarnya.
Pilihlah informasi yang cukup untuk menjawab pertanyaan tersebut.`,
        opsi: [
          { label: 'A', teks: `Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi (2) saja tidak cukup.` },
          { label: 'B', teks: `Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi (1) saja tidak cukup.` },
          { label: 'C', teks: `KEDUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.` },
          { label: 'D', teks: `Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan (2) SAJA cukup.` },
          { label: 'E', teks: `Pernyataan (1) dan (2) TIDAK CUKUP untuk menjawab pertanyaan.` },
        ],
        kunci: 'C',
        pembahasan: `Misalkan panjang taman p dan lebarnya l, dengan p>l>0. Luas taman adalah L=p×l.
Pernyataan (1):
2(p+l)=64
p+l=32
Pasangan p=20, l=12 menghasilkan luas 240 m², sedangkan p=18, l=14 menghasilkan luas 252 m². Keduanya memiliki keliling 64 meter.
Pernyataan (1) SAJA tidak cukup.
Pernyataan (2):
p−l=8
Pasangan p=20, l=12 menghasilkan luas 240 m², sedangkan p=16, l=8 menghasilkan luas 128 m². Keduanya memiliki selisih panjang dan lebar sebesar 8 meter.
Pernyataan (2) SAJA tidak cukup.
Pernyataan (1) dan (2) bersama-sama:
p+l=32
p−l=8
Jumlahkan kedua persamaan:
2p=40
p=20
l=32−20=12
L=20×12=240 m²
Luas taman diketahui secara tunggal. Jadi, kedua pernyataan BERSAMA-SAMA cukup, tetapi masing-masing pernyataan SAJA tidak cukup. Jawaban yang benar adalah C.`,
        tingkat: 'sedang',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Numerik > Kecukupan Data > Soal Cerita - Perbandingan Senilai dan Berbalik` },
    soal: [
      // tryout-ref-00-25 · Andika - Numerik SKD 2027_Ready to Input.docx, soal 25
      {
        nomor: 19,
        tipe: 'pg',
        pertanyaan: `Perhatikan tabel berikut. Kelompok mesin A dan kelompok mesin B digunakan untuk menyelesaikan target pesanan masing-masing.
\\(\\def\\arraystretch{1.4}\\begin{array}{|l|l|l|} \\hline \\textbf{Kelompok Mesin} & \\textbf{Jumlah Mesin} & \\textbf{Waktu Produksi} \\\\ \\hline \\text{Kelompok mesin A} & \\text{8 mesin} & \\text{20 jam} \\\\ \\hline \\text{Kelompok mesin B} & \\text{x mesin} & \\text{t jam} \\\\ \\hline \\end{array}\\)
Laju produksi setiap mesin sama dan tetap. Apakah kelompok mesin B dapat menyelesaikan target pesanannya dalam waktu maksimal 10 jam?
(1) Kelompok mesin B terdiri dari 16 mesin.
(2) Target pesanan kelompok B sama dengan target pesanan kelompok mesin A.
Pilihlah informasi yang cukup untuk menjawab pertanyaan tersebut.`,
        opsi: [
          { label: 'A', teks: `Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi (2) saja tidak cukup.` },
          { label: 'B', teks: `Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi (1) saja tidak cukup.` },
          { label: 'C', teks: `KEDUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.` },
          { label: 'D', teks: `Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan (2) SAJA cukup.` },
          { label: 'E', teks: `Pernyataan (1) dan (2) TIDAK CUKUP untuk menjawab pertanyaan.` },
        ],
        kunci: 'C',
        pembahasan: `Pernyataan (1):
Kelompok mesin B terdiri dari 16 mesin, tetapi target pesanannya belum diketahui. Jumlah mesin saja belum menentukan waktu penyelesaian target tersebut.
Sebagai contoh, target yang sama dengan A dapat diselesaikan dalam 10 jam, sedangkan target dua kali target A memerlukan 20 jam. Jawaban terhadap batas waktu dapat berbeda.
Pernyataan (1) SAJA tidak cukup.
Pernyataan (2):
Target pesanan kelompok B sama dengan target pesanan kelompok mesin A, tetapi jumlah mesin B belum diketahui. Karena laju produksi setiap mesin sama dan targetnya sama, jumlah mesin dikalikan waktu produksi harus tetap: x × t = 8 × 20 = 160, sehingga t = 160/x jam.
Jika kelompok B memiliki 8 mesin, waktu yang diperlukan adalah 160/8 = 20 jam, sehingga batas maksimal 10 jam tidak terpenuhi. Jika kelompok B memiliki 16 mesin, waktunya 160/16 = 10 jam, sehingga batas waktu terpenuhi. Pernyataan (2) saja memungkinkan jawaban ya maupun tidak.
Pernyataan (2) SAJA tidak cukup.
Pernyataan (1) dan (2) bersama-sama:
Pernyataan (1) memberikan jumlah mesin B, yaitu 16 mesin. Pernyataan (2) menyatakan bahwa target pesanan kedua kelompok sama. Gunakan perbandingan berbalik nilai:
\\(t=\\frac{8\\times 20}{16}\\)
\\(t=\\frac{160}{16}\\)
t=10
Karena 10≤10, kelompok mesin B dapat menyelesaikan target dalam waktu maksimal 10 jam. Pernyataan (1) dan (2) BERSAMA-SAMA cukup, tetapi masing-masing pernyataan SAJA tidak cukup. Jadi, jawaban yang benar adalah C.`,
        tingkat: 'sedang',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Numerik > Kecukupan Data > Soal Cerita - Aljabar` },
    soal: [
      // tryout-ref-00-19 · Andika - Numerik SKD 2027_Ready to Input.docx, soal 19
      {
        nomor: 20,
        tipe: 'pg',
        pertanyaan: `Sebuah pusat pelatihan menyediakan dua jenis layanan, yaitu Kelas Tatap Muka dan Kelas Daring. Setiap tiket berlaku untuk satu peserta. Perhatikan tabel berikut.
\\(\\def\\arraystretch{1.4}\\begin{array}{|l|l|c|} \\hline \\textbf{Jenis Peserta} & \\textbf{Harga/Tiket} & \\textbf{Jumlah Tiket Terjual} \\\\ \\hline \\text{Kelas Tatap Muka} & \\text{Rp120.000} & \\text{m} \\\\ \\hline \\text{Kelas Daring} & \\text{Rp60.000} & \\text{n} \\\\ \\hline \\end{array}\\)
Berapakah total pendapatan dari pendaftaran seluruh peserta pelatihan?
(1) Jumlah peserta kelas tatap muka dan kelas daring adalah 220 peserta.
(2) Jumlah peserta kelas daring 60 peserta lebih banyak daripada peserta kelas tatap muka.
Pilihlah informasi yang cukup untuk menjawab pertanyaan tersebut.`,
        opsi: [
          { label: 'A', teks: `Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi (2) saja tidak cukup.` },
          { label: 'B', teks: `Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi (1) saja tidak cukup.` },
          { label: 'C', teks: `KEDUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.` },
          { label: 'D', teks: `Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan (2) SAJA cukup.` },
          { label: 'E', teks: `Pernyataan (1) dan (2) TIDAK CUKUP untuk menjawab pertanyaan.` },
        ],
        kunci: 'C',
        pembahasan: `Diketahui:
Total pendapatan: P=120.000m+60.000n.
Pernyataan (1):
m+n=220
Pernyataan ini belum cukup karena terdapat banyak kemungkinan jumlah peserta pada setiap jenis layanan. Harga kedua layanan berbeda, sehingga total pendapatan juga dapat berbeda.
Pernyataan (1) SAJA tidak cukup.
Pernyataan (2):
n=m+60
Selisih jumlah peserta diketahui, tetapi jumlah peserta masing-masing layanan belum diketahui secara pasti.
Pernyataan (2) SAJA tidak cukup.
Pernyataan (1) dan (2) bersama-sama:
m+n=220
n=m+60
Substitusi:
m+(m+60)=220
2m+60=220
2m=160
m=80
Maka:
n=80+60=140
Pendapatan total:
P=120.000(80)+60.000(140)
P=9.600.000+8.400.000
P=18.000.000
Jadi, kedua pernyataan bersama-sama cukup untuk menentukan total pendapatan sebesar Rp18.000.000, tetapi masing-masing pernyataan saja tidak cukup. Jawaban yang benar adalah C.`,
        tingkat: 'sulit',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Numerik > Deret Bilangan > Deret Angka - 1 Towew` },
    soal: [
      // contoh TIU riset CPNS 2027 ("Contoh Soal TIU SKD 2027"), dipertahankan dari angkatan sebelumnya: Deret Angka - 1 Towew; tidak ada di tryout generator
      {
        nomor: 21,
        tipe: 'pg',
        pertanyaan: `2, 4, 6, 8, 10, ...`,
        opsi: [
          { label: 'A', teks: `11` },
          { label: 'B', teks: `12` },
          { label: 'C', teks: `13` },
          { label: 'D', teks: `14` },
          { label: 'E', teks: `16` },
        ],
        kunci: 'B',
        pembahasan: `⟦gambar:gambar/jadiasn/cpns2027-tiu-deret-angka-1-towew-s01-pembahasan-1.png⟧

\\(\\def\\arraystretch{1.4}\\begin{array}{|c|c|} \\hline \\uparrow \\uparrow \\uparrow \\text{ atau }\\downarrow \\downarrow \\downarrow  & \\text{1 Towew} \\\\ \\hline \\uparrow \\downarrow \\uparrow \\text{ atau }\\downarrow \\uparrow \\downarrow  & \\text{2 Towew} \\\\ \\hline \\uparrow \\uparrow \\downarrow \\text{ atau }\\downarrow \\downarrow \\uparrow  & \\text{3 Towew} \\\\ \\hline \\end{array}\\)

↑ ↑ ↑ artinya 1 towew

Pola yang terlihat:
⟦gambar:gambar/jadiasn/cpns2027-tiu-deret-angka-1-towew-s01-pembahasan-2.png⟧

Pola tambahannya tetap, yaitu +2. Maka suku berikutnya adalah 10 + 2 = 12.
Jadi, jawaban yang benar adalah B.`,
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Numerik > Deret Bilangan > Matriks Deret` },
    soal: [
      // tryout-ref-00-31 · Andika - Numerik SKD 2027_Ready to Input.docx, soal 31
      {
        nomor: 22,
        tipe: 'pg',
        pertanyaan: `Tentukan nilai x yang melengkapi pola bilangan pada tabel berikut.
\\(\\def\\arraystretch{1.4}\\begin{array}{|c|c|c|} \\hline 7 & 18 & 31 \\\\ \\hline 12 & 25 & 40 \\\\ \\hline 17 & 32 & \\text{x} \\\\ \\hline \\end{array}\\)`,
        opsi: [
          { label: 'A', teks: `45` },
          { label: 'B', teks: `47` },
          { label: 'C', teks: `49` },
          { label: 'D', teks: `51` },
          { label: 'E', teks: `53` },
        ],
        kunci: 'C',
        pembahasan: `Perhatikan bilangan pada tabel, bilangan tersebut memiliki pola sebagai berikut.
Bilangan pada setiap kolom bertambah dengan selisih tetap dari atas ke bawah.
Kolom pertama: 7+5=12;12+5=17.
Kolom kedua: 18+7=25;25+7=32.
Kolom ketiga: 31+9=40;40+9=x.
Maka, diperoleh x=40+9=49.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      // tryout-ref-00-36 · Andika - Numerik SKD 2027_Ready to Input.docx, soal 36
      {
        nomor: 23,
        tipe: 'pg',
        pertanyaan: `Angka pada setiap baris memiliki hubungan yang sama. Berapakah nilai yang harus mengisi x?
\\(\\def\\arraystretch{1.4}\\begin{array}{|c|c|c|} \\hline 5 & 9 & 16 \\\\ \\hline 8 & 21 & 43 \\\\ \\hline 7 & \\text{x} & 31 \\\\ \\hline \\end{array}\\)`,
        opsi: [
          { label: 'A', teks: `18` },
          { label: 'B', teks: `16` },
          { label: 'C', teks: `17` },
          { label: 'D', teks: `20` },
          { label: 'E', teks: `22` },
        ],
        kunci: 'A',
        pembahasan: `Perhatikan bilangan pada tabel, bilangan tersebut memiliki pola sebagai berikut.
Bilangan ketiga diperoleh dari kuadrat bilangan pertama, kemudian dikurangi bilangan kedua pada baris yang sama.
Baris pertama: \\(5^{2}-9=25-9=16\\).
Baris kedua: \\(8^{2}-21=64-21=43\\).
Baris ketiga: \\(7^{2}-x=31\\).
Maka, diperoleh 49−x=31;x=49−31=18.`,
        tingkat: 'sulit',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Numerik > Deret Bilangan > Pola Bilangan Tabel` },
    soal: [
      // tryout-ref-00-37 · Andika - Numerik SKD 2027_Ready to Input.docx, soal 37
      {
        nomor: 24,
        tipe: 'pg',
        pertanyaan: `Perhatikan tabel berikut!
\\(\\def\\arraystretch{1.4}\\begin{array}{|c|c|} \\hline \\textbf{Urutan ke-} & \\textbf{Nilai} \\\\ \\hline 1 & 2 \\\\ \\hline 4 & 14 \\\\ \\hline 9 & 34 \\\\ \\hline 17 & \\text{?} \\\\ \\hline 23 & 90 \\\\ \\hline \\end{array}\\)
Perubahan nilai mengikuti pola yang sama. Nilai pada urutan ke-17 adalah ....`,
        opsi: [
          { label: 'A', teks: `62` },
          { label: 'B', teks: `64` },
          { label: 'C', teks: `68` },
          { label: 'D', teks: `66` },
          { label: 'E', teks: `70` },
        ],
        kunci: 'D',
        pembahasan: `Misalkan \\(U_{n}\\) adalah nilai pada urutan ke-n, dengan n menyatakan nomor urutan.
Perhatikan hubungan antara urutan dan nilainya.
• \\(U_{1}=4(1)-2=4-2=2\\)
• \\(U_{4}=4(4)-2=16-2=14\\)
• \\(U_{9}=4(9)-2=36-2=34\\)
• \\(U_{23}=4(23)-2=92-2=90\\)
Maka pola yang digunakan adalah:
\\(U_{n}=4\\times n-2\\)
\\(U_{17}=4(17)-2=68-2=66\\)
Jadi, \\(U_{17}=66\\).`,
        tingkat: 'mudah',
        status: 'draft',
      },
      // tryout-ref-00-41 · Andika - Numerik SKD 2027_Ready to Input.docx, soal 41
      {
        nomor: 25,
        tipe: 'pg',
        pertanyaan: `Perhatikan tabel berikut!
\\(\\def\\arraystretch{1.4}\\begin{array}{|c|c|} \\hline \\textbf{Urutan ke-} & \\textbf{Nilai} \\\\ \\hline 1 & 3 \\\\ \\hline 3 & 12 \\\\ \\hline 5 & 48 \\\\ \\hline 8 & \\text{?} \\\\ \\hline 10 & 1536 \\\\ \\hline \\end{array}\\)
Dengan mempertahankan pola perubahan yang sama, nilai yang diperoleh pada urutan ke-8 adalah ....`,
        opsi: [
          { label: 'A', teks: `384` },
          { label: 'B', teks: `192` },
          { label: 'C', teks: `256` },
          { label: 'D', teks: `512` },
          { label: 'E', teks: `768` },
        ],
        kunci: 'A',
        pembahasan: `Misalkan \\(U_{n}\\) adalah nilai pada urutan ke-n, dengan n menyatakan nomor urutan.
Perhatikan hubungan antara urutan dan nilainya.
• \\(U_{1}=3\\times 2^{1-1}=3\\times 1=3\\)
• \\(U_{3}=3\\times 2^{3-1}=3\\times 4=12\\)
• \\(U_{5}=3\\times 2^{5-1}=3\\times 16=48\\)
• \\(U_{10}=3\\times 2^{10-1}=3\\times 512=1536\\)
Maka pola yang digunakan adalah:
\\(U_{n}=3\\times 2^{n-1}\\)
\\(U_{8}=3\\times 2^{8-1}=3\\times 128=384\\)
Jadi, \\(U_{8}=384\\).`,
        tingkat: 'sulit',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Numerik > Soal Cerita > Tabel Pernyataan - Kombinasi Pernyataan` },
    soal: [
      // tryout-ref-00-44 · Andika - Numerik SKD 2027_Ready to Input.docx, soal 44
      {
        nomor: 26,
        tipe: 'pg',
        pertanyaan: `Data peserta kegiatan lingkungan di tiga RW tercatat pada tabel berikut. Setiap peserta hanya terdaftar pada satu kegiatan.
\\(\\def\\arraystretch{1.4}\\begin{array}{|l|c|c|c|} \\hline \\textbf{Kegiatan} & \\textbf{RW 01} & \\textbf{RW 02} & \\textbf{RW 03} \\\\ \\hline \\text{Bank sampah} & 18 & 15 & 12 \\\\ \\hline \\text{Kebun warga} & 9 & 12 & 14 \\\\ \\hline \\text{Daur ulang} & 11 & 8 & 9 \\\\ \\hline \\text{Kerajinan} & 7 & 10 & 9 \\\\ \\hline \\end{array}\\)
Pernyataan:
(1) Total peserta RW 01 sama dengan total peserta RW 02.
(2) Jumlah peserta daur ulang dari ketiga RW adalah 28 orang.
(3) RW 03 memiliki peserta kebun warga terbanyak.
(4) Selisih total peserta RW 02 dan RW 03 adalah 2 orang.
Kombinasi yang memuat seluruh pernyataan benar adalah ....`,
        opsi: [
          { label: 'A', teks: `1 dan 2` },
          { label: 'B', teks: `1, 2, dan 3` },
          { label: 'C', teks: `2, 3, dan 4` },
          { label: 'D', teks: `1, 3, dan 4` },
          { label: 'E', teks: `1, 2, 3, dan 4` },
        ],
        kunci: 'B',
        pembahasan: `(1) RW 01: 18+9+11+7=45 orang.
RW 02: 15+12+8+10=45 orang. Kedua total sama, benar.
(2) Daur ulang: 11+8+9=28 orang, benar.
(3) Kebun warga: 14>12>9; RW 03 terbanyak, benar.
(4) RW 03: 12+14+9+9=44 orang.
Selisih: 45−44=1≠2 orang, salah; coret C, D, dan E.
Benar: 1, 2, dan 3. Opsi A tidak memuat pernyataan (3), sehingga kombinasi lengkap terdapat pada opsi B.`,
        tingkat: 'sedang',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Numerik > Soal Cerita > Tabel Pernyataan - Kombinasi Optimal` },
    soal: [
      // tryout-ref-00-46 · Andika - Numerik SKD 2027_Ready to Input.docx, soal 46
      {
        nomor: 27,
        tipe: 'pg',
        pertanyaan: `Sebanyak 264 peserta akan mengikuti kunjungan edukasi. Panitia dapat menggunakan lebih dari satu bus untuk setiap jenis berikut.
\\(\\def\\arraystretch{1.4}\\begin{array}{|l|l|} \\hline \\textbf{Jenis Bus} & \\textbf{Kapasitas} \\\\ \\hline \\text{Bus A} & \\text{32 orang} \\\\ \\hline \\text{Bus B} & \\text{44 orang} \\\\ \\hline \\text{Bus C} & \\text{60 orang} \\\\ \\hline \\end{array}\\)
Dengan ketentuan:
(1) Seluruh peserta memperoleh tempat duduk.
(2) Jumlah kursi kosong dari seluruh bus yang digunakan tidak lebih dari 12 kursi.
Kombinasi bus yang memenuhi kedua ketentuan tersebut adalah ....`,
        opsi: [
          { label: 'A', teks: `2 bus A dan 3 bus C` },
          { label: 'B', teks: `3 bus A dan 3 bus C` },
          { label: 'C', teks: `3 bus A, 2 bus B, dan 2 bus C` },
          { label: 'D', teks: `3 bus A, 1 bus B, dan 2 bus C` },
          { label: 'E', teks: `2 bus A, 1 bus B, dan 3 bus C` },
        ],
        kunci: 'B',
        pembahasan: `Periksa total kapasitas setiap pilihan.
A. 2(32)+3(60)=244 kursi.
Kapasitas tidak cukup untuk 264 peserta.
B. 3(32)+3(60)=276 kursi.
Kursi kosong: 276−264=12 kursi. Memenuhi batas 12 kursi kosong.
C. 3(32)+2(44)+2(60)=304 kursi.
Kursi kosong: 304−264=40 kursi. Melebihi batas 12 kursi kosong.
D. 3(32)+1(44)+2(60)=260 kursi.
Kapasitas tidak cukup untuk 264 peserta.
E. 2(32)+1(44)+3(60)=288 kursi.
Kursi kosong: 288−264=24 kursi. Melebihi batas 12 kursi kosong.
Jadi, kombinasi yang memenuhi seluruh ketentuan adalah 3 bus A dan 3 bus C pada opsi B.`,
        tingkat: 'sedang',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Figural > Figural Analogi` },
    soal: [
      // contoh TIU riset CPNS 2027 ("Contoh Soal TIU SKD 2027"), dipertahankan dari angkatan sebelumnya: Figural analogi; tidak ada di tryout generator
      {
        nomor: 28,
        tipe: 'pg',
        pertanyaan: `Tentukanlah gambar yang tepat untuk menggantikan tanda tanya "?", sehingga kedua pasangan gambar di bawah ini memiliki hubungan yang serupa.
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-analogi-s01-soal.png⟧`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-analogi-s01-opsi-a.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-analogi-s01-opsi-b.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-analogi-s01-opsi-c.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-analogi-s01-opsi-d.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-analogi-s01-opsi-e.png⟧` },
        ],
        kunci: 'D',
        pembahasan: `Berdasarkan pasangan gambar yang diketahui, didapatkan hubungan sebagai berikut:
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-analogi-s01-pembahasan-1.png⟧

Dengan mengaplikasikan hubungan yang sama, didapatkan:
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-analogi-s01-pembahasan-2.png⟧`,
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Figural > Figural Ketidaksamaan` },
    soal: [
      // contoh TIU riset CPNS 2027 ("Contoh Soal TIU SKD 2027"), dipertahankan dari angkatan sebelumnya: Figural ketidaksamaan; tidak ada di tryout generator
      {
        nomor: 29,
        tipe: 'pg',
        pertanyaan: `Manakah gambar yang memiliki prinsip, pola, atau karakteristik yang berbeda dibandingkan gambar lainnya?
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-ketidaksamaan-s01-soal.png⟧`,
        opsi: [
          { label: 'A', teks: `A` },
          { label: 'B', teks: `B` },
          { label: 'C', teks: `C` },
          { label: 'D', teks: `D` },
          { label: 'E', teks: `E` },
        ],
        kunci: 'C',
        pembahasan: `Kita perhatikan keseluruhan gambar. Perhatikan:
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-ketidaksamaan-s01-pembahasan-1.png⟧

Objek diputar-putar dan urutan objek-objek sama. Bisa lihat urutan objek searah jarum jam yaitu kotak, bulan, lingkaran, segitiga. Maka yang berbeda adalah
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-ketidaksamaan-s01-pembahasan-2.png⟧`,
        status: 'direview',
      },
      // contoh TIU riset CPNS 2027 ("Contoh Soal TIU SKD 2027"), dipertahankan dari angkatan sebelumnya: Figural ketidaksamaan; tidak ada di tryout generator
      {
        nomor: 30,
        tipe: 'pg',
        pertanyaan: `Manakah gambar yang memiliki prinsip, pola, atau karakteristik yang berbeda dibandingkan gambar lainnya?
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-ketidaksamaan-s04-soal.png⟧`,
        opsi: [
          { label: 'A', teks: `A` },
          { label: 'B', teks: `B` },
          { label: 'C', teks: `C` },
          { label: 'D', teks: `D` },
          { label: 'E', teks: `E` },
        ],
        kunci: 'E',
        pembahasan: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-ketidaksamaan-s04-pembahasan-1.png⟧

Berdasarkan jumlah sisinya, gambar A berpasangan dengan gambar C dan gambar B berpasangan dengan gambar D. Sedangkan gambar E tidak berpasangan.
Jadi yang berbeda adalah gambar E.`,
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Figural > Figural Serial` },
    soal: [
      // contoh TIU riset CPNS 2027 ("Contoh Soal TIU SKD 2027"), dipertahankan dari angkatan sebelumnya: Figural serial; tidak ada di tryout generator
      {
        nomor: 31,
        tipe: 'pg',
        pertanyaan: `Tentukanlah gambar berikutnya dari seri gambar di bawah ini!
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-serial-s01-soal.png⟧`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-serial-s01-opsi-a.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-serial-s01-opsi-b.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-serial-s01-opsi-c.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-serial-s01-opsi-d.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-serial-s01-opsi-e.png⟧` },
        ],
        kunci: 'A',
        pembahasan: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-serial-s01-soal.png⟧

⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-serial-s01-pembahasan-2.png⟧
1. Berputar 90 derajat searah jarum jam
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-serial-s01-pembahasan-3.png⟧
2. Berputar 90 derajat berlawanan arah jarum jam
3. Objek lingkaran dan objek lingkaran berubah warna dari putih ke hitam, dari hitam ke putih

Maka jawabannya A`,
        status: 'direview',
      },
      // contoh TIU riset CPNS 2027 ("Contoh Soal TIU SKD 2027"), dipertahankan dari angkatan sebelumnya: Figural serial; tidak ada di tryout generator
      {
        nomor: 32,
        tipe: 'pg',
        pertanyaan: `Tentukanlah gambar berikutnya dari seri gambar di bawah ini!
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-serial-s02-soal.png⟧`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-serial-s02-opsi-a.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-serial-s02-opsi-b.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-serial-s02-opsi-c.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-serial-s02-opsi-d.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-serial-s02-opsi-e.png⟧` },
        ],
        kunci: 'A',
        pembahasan: `Terdapat dua pola jumlah objek yang berjalan secara bersamaan.
Jumlah bintang berkurang satu pada setiap kotak: 4, 3, 2, 1, sehingga kotak kelima tidak memiliki bintang.
Jumlah bulan sabit bertambah dua pada setiap kotak: 0, 2, 4, 6, sehingga kotak kelima memiliki 8 bulan sabit.

Opsi A menampilkan 8 bulan sabit tanpa bintang. Jadi, jawaban yang benar adalah A.`,
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Figural > Figural Matriks (Kotak 3x3)` },
    soal: [
      // contoh TIU riset CPNS 2027 ("Contoh Soal TIU SKD 2027"), dipertahankan dari angkatan sebelumnya: Figural matriks; tidak ada di tryout generator
      {
        nomor: 33,
        tipe: 'pg',
        pertanyaan: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s01-soal.png⟧`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s01-opsi-a.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s01-opsi-b.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s01-opsi-c.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s01-opsi-d.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s01-opsi-e.png⟧` },
        ],
        kunci: 'B',
        pembahasan: `Setiap baris dan kolom memiliki bangun datar bintang, lingkaran besar, lingkaran kecil, segitiga, dan persegi panjang. Masing-masing bangun datar bergesar searah jarum jam. Bangun datar yang berwarna hitam pada masing-masing kotak mengikuti pola berikut:
Lingkaran kecil → Segitiga → Persegi panjang → Bintang → Lingkaran besar`,
        status: 'direview',
      },
      // contoh TIU riset CPNS 2027 ("Contoh Soal TIU SKD 2027"), dipertahankan dari angkatan sebelumnya: Figural matriks; tidak ada di tryout generator
      {
        nomor: 34,
        tipe: 'pg',
        pertanyaan: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s02-soal.png⟧`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s02-opsi-a.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s02-opsi-b.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s02-opsi-c.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s02-opsi-d.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s02-opsi-e.png⟧` },
        ],
        kunci: 'A',
        pembahasan: `Perhatikan bahwa jumlah unsur merupakan bilangan-bilangan prima berurutan, sebagai berikut:
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s02-pembahasan-1.png⟧`,
        status: 'direview',
      },
      // contoh TIU riset CPNS 2027 ("Contoh Soal TIU SKD 2027"), dipertahankan dari angkatan sebelumnya: Figural matriks; tidak ada di tryout generator
      {
        nomor: 35,
        tipe: 'pg',
        pertanyaan: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s04-soal.png⟧`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s04-opsi-a.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s04-opsi-b.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s04-opsi-c.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s04-opsi-d.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s04-opsi-e.png⟧` },
        ],
        kunci: 'D',
        pembahasan: `Perhatikan baris pertama:
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s04-pembahasan-1.png⟧

Perhatikan baris kedua:
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s04-pembahasan-2.png⟧

Maka baris ketiga:
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s04-pembahasan-3.png⟧`,
        status: 'direview',
      },
    ],
  },
];

/** 45 soal TKP berskala: Pelayanan Publik, Jejaring Kerja, Sosial Budaya (8 soal), TIK, Profesionalisme, Anti Radikalisme (7 soal). */
export const contohGeneratorTkp: Kelompok[] = [
  {
    stimulus: { judul: `Pelayanan Publik` },
    soal: [
      // tryout-ref-08-05 · Wil - TKP 2_Done Input.docx, soal 5
      {
        nomor: 1,
        tipe: 'skala',
        pertanyaan: `Warga datang ke loket kependudukan dengan brosur persyaratan lama. Papan layanan sudah diperbarui, tetapi brosur di meja dan laman daring masih memuat aturan sebelumnya. Warga khawatir harus datang kembali. Tindakan Anda adalah ...`,
        opsi: [
          { label: 'A', teks: `Mengirim syarat terbaru kepada pengurus lingkungan agar diteruskan kepada warga, sementara pemohon yang datang diminta mengikuti informasi di papan.` },
          { label: 'B', teks: `Mengganti selebaran di meja serta menjelaskan syarat terbaru kepada pemohon, lalu menyerahkan pembaruan laman kepada pengelola tanpa mengecek hasilnya.` },
          { label: 'C', teks: `Menunjuk papan layanan sebagai rujukan utama dan menyediakan bantuan petugas bagi pengunjung yang masih ragu terhadap berkas yang perlu dibawa.` },
          { label: 'D', teks: `Menyamakan informasi pada brosur, papan, dan laman layanan dengan ketentuan berlaku, sambil membantu warga yang telah menerima versi lama.` },
          { label: 'E', teks: `Menerima berkas berdasarkan selebaran lama lebih dahulu untuk mempercepat antrean, kemudian meminta pelengkapan setelah petugas melakukan pemeriksaan.` },
        ],
        kunci: 'D',
        pembahasan: `Konsep yang digunakan: Kepastian pelayanan, konsistensi informasi publik, dan orientasi kebutuhan pengguna.
Kata kunci: Persyaratan lama, informasi berbeda, pembaruan kanal, kepastian pelayanan.
Opsi D (5 poin) paling tepat karena mengatasi perbedaan informasi yang menjadi sumber kebingungan masyarakat. Penyelarasan brosur, papan pengumuman, dan laman daring membuat pengguna memperoleh persyaratan yang sama melalui berbagai saluran. Bantuan kepada warga yang telah menerima informasi lama juga mencegah mereka dirugikan oleh kesalahan komunikasi instansi.

Pembahasan setiap opsi:
A (2 poin) karena memperluas penyampaian informasi melalui pengurus lingkungan, tetapi perbedaan antara saluran resmi masih dibiarkan dan warga yang datang harus menentukan sendiri informasi yang digunakan.
B (4 poin) karena memperbaiki informasi di meja layanan dan membantu pemohon secara langsung, tetapi tidak memastikan pembaruan laman daring telah selesai sehingga potensi kesalahpahaman belum seluruhnya teratasi.
C (3 poin) karena menyediakan sumber informasi yang benar dan bantuan petugas, tetapi selebaran lama serta informasi daring yang tidak sesuai masih berpotensi digunakan masyarakat.
D (5 poin): Paling tepat; alasannya ada pada penjelasan di atas.
E (1 poin) karena berusaha mempercepat penerimaan berkas, tetapi penggunaan persyaratan yang diketahui sudah tidak berlaku berisiko menimbulkan ketidakpastian proses dan pekerjaan ulang bagi pemohon.

Cara cepat: Apabila informasi pelayanan berbeda antarsaluran, perbaiki sumber informasinya secara konsisten. Memberikan penjelasan kepada satu pemohon belum cukup jika informasi yang keliru masih tersedia.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tryout-ref-07-04 · Wil - TKP 1_Done Input.docx, soal 4
      {
        nomor: 2,
        tipe: 'skala',
        pertanyaan: `Seusai forum kekeringan, warga meminta kepastian tentang usulan titik distribusi air bersih. Notulen tersedia, tetapi laporan dinas hanya memuat jumlah peserta dan topik diskusi. Tindakan Anda adalah ...`,
        opsi: [
          { label: 'A', teks: `Mengirim usulan ke unit yang disebut dalam forum dan memberikan kontak unit tersebut sehingga setiap warga dapat meminta penjelasan sendiri.` },
          { label: 'B', teks: `Merangkum keputusan awal forum dan menerbitkannya melalui kanal resmi, lalu memberi penjelasan lanjutan saat pembahasan berikutnya selesai.` },
          { label: 'C', teks: `Menyusun daftar seluruh usulan untuk diteruskan kepada pimpinan dan mengumumkan bahwa masukan telah dicatat sebagai bahan keputusan.` },
          { label: 'D', teks: `Mengarsipkan usulan berdasarkan topik serta memasukkannya ke laporan capaian sehingga pelaksanaan dialog tercatat dalam evaluasi tahunan.` },
          { label: 'E', teks: `Memetakan usulan ke unit berwenang dan menyampaikan keputusan, alasan, serta cara memantau perkembangan kepada warga melalui kanal resmi.` },
        ],
        kunci: 'E',
        pembahasan: `Konsep yang digunakan: Partisipasi masyarakat, akuntabilitas pengaduan, dan keterbukaan tindak lanjut
Kata kunci: Forum dialog, aspirasi warga, tindak lanjut, kepastian
Opsi E (5 poin) paling tepat karena usulan masyarakat bukan sekadar angka kehadiran atau lampiran laporan. Respons paling baik menghubungkan aspirasi dengan unit yang mampu mengambil keputusan serta membuka informasi hasil dan status pelaksanaannya. Warga memperoleh alasan, kanal pemantauan, dan kepastian tanpa harus mengulang pengaduan kepada banyak unit.

Pembahasan setiap opsi:
A (2 poin) karena usulan sampai kepada unit terkait, tetapi tanggung jawab mencari tanggapan justru dipindahkan kembali kepada warga.
B (4 poin) karena putusan awal diumumkan secara terbuka, tetapi akses pemantauan belum tersedia sehingga warga masih harus menunggu forum berikutnya.
C (3 poin) karena usulan dicatat dan diteruskan, tetapi konfirmasi penerimaan belum menjelaskan keputusan ataupun perkembangan penanganannya.
D (1 poin) karena dokumentasi kegiatan terpenuhi, tetapi kebutuhan masyarakat akan respons nyata tidak tertangani.
E (5 poin): Paling tepat; alasannya ada pada penjelasan di atas.

Cara cepat: Pilih tindak lanjut yang menghubungkan aspirasi dengan keputusan dan menyediakan cara memantau hasil, bukan sekadar mencatat partisipasi.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tryout-ref-08-06 · Wil - TKP 2_Done Input.docx, soal 6
      {
        nomor: 3,
        tipe: 'skala',
        pertanyaan: `Seorang warga dengan hambatan pendengaran tiba di layanan pajak. Layar antrean tidak menampilkan nomor, sedangkan panggilan hanya melalui pengeras suara. Ia ingin menunggu sesuai giliran secara mandiri tanpa pendamping. Tindakan Anda adalah ...`,
        opsi: [
          { label: 'A', teks: `Menuliskan nomor dan perkiraan giliran warga pada kertas, lalu menawarkan bantuan petugas untuk memanggilnya secara pribadi saat nomornya mendekat.` },
          { label: 'B', teks: `Memasang informasi panggilan visual pada loket dan mengecek tampilan nomor pada layar antrean, sehingga warga dapat mengikuti nomor gilirannya tanpa pendamping.` },
          { label: 'C', teks: `Mengarahkan warga duduk di dekat loket dan memperhatikan petugas yang memanggil secara lisan agar ia tetap dapat mengikuti antrean sesuai urutan.` },
          { label: 'D', teks: `Memberikan prioritas langsung kepada warga untuk menghindari kesulitan mengikuti panggilan suara, tanpa memeriksa pengaturan antrean yang tersedia.` },
          { label: 'E', teks: `Menyediakan pendamping khusus bagi warga selama menunggu agar tidak terlewat panggilan, meskipun warga sebelumnya menyampaikan ingin mandiri.` },
        ],
        kunci: 'B',
        pembahasan: `Konsep yang digunakan: Pelayanan inklusif, akses yang setara, akomodasi layak, dan penghormatan martabat.
Kata kunci: Hambatan pendengaran, antrean suara, akses mandiri, informasi visual.
Opsi B (5 poin) paling tepat karena menyediakan akses setara melalui perubahan cara informasi disampaikan kepada pengguna. Warga menyampaikan keinginan mengikuti antrean secara mandiri, sehingga bantuan perlu menjaga otonominya. Perbaikan tampilan visual juga bermanfaat untuk pengguna lain tanpa mengubah keadilan urutan antrean.

Pembahasan setiap opsi:
A (4 poin) karena memberi solusi praktis yang menghormati urutan, tetapi masih bergantung pada pemanggilan khusus dan belum memperbaiki akses umum.
B (5 poin): Paling tepat; alasannya ada pada penjelasan di atas.
C (3 poin) karena berusaha mempertahankan antrean reguler, tetapi panggilan lisan tetap tidak dapat diakses warga tersebut.
D (1 poin) karena membantu warga mendapat layanan segera, tetapi menerapkan prioritas tanpa kebutuhan yang diverifikasi serta tidak memperbaiki hambatan informasi.
E (2 poin) karena menawarkan dukungan langsung, tetapi tidak menghormati kebutuhan untuk mandiri dan tidak memperbaiki sistem panggilan.

Cara cepat: Akomodasi yang baik menyelesaikan hambatan akses sambil menghormati pilihan dan kemandirian pengguna.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tryout-ref-06-07 · Nynda - TKP 1_Done Input.docx, soal 7
      {
        nomor: 4,
        tipe: 'skala',
        pertanyaan: `Ketika antrean padat, seorang tokoh masyarakat meminta kerabatnya didahulukan karena harus segera menghadiri rapat desa. Kerabat tersebut tidak termasuk kelompok prioritas dan beberapa warga telah menunggu cukup lama. Tokoh itu dikenal sering membantu kegiatan instansi. Sikap Anda yang paling tepat adalah ...`,
        opsi: [
          { label: 'A', teks: `Menanyakan persetujuan warga yang sedang antre sebelum memutuskan apakah kerabat tokoh dapat memperoleh giliran lebih awal.` },
          { label: 'B', teks: `Meminta penanggung jawab loket menangani permintaan tokoh agar keputusan memiliki dasar kewenangan yang lebih tinggi.` },
          { label: 'C', teks: `Menjelaskan kriteria prioritas dan mengarahkan kerabat tokoh mengikuti urutan yang berlaku tanpa menawarkan pilihan layanan lainnya.` },
          { label: 'D', teks: `Mendahulukan kerabat tokoh tersebut sebagai bentuk penghargaan, lalu menjelaskan kepada warga lain bahwa ia memiliki agenda desa.` },
          { label: 'E', teks: `Menjelaskan bahwa agenda rapat bukan kriteria prioritas dan menawarkan kanal layanan lain tanpa mengubah urutan antrean.` },
        ],
        kunci: 'E',
        pembahasan: `Konsep yang digunakan: Kesetaraan layanan dengan menolak favoritisme secara santun dan menawarkan solusi yang berlaku bagi semua pengguna
Kata kunci: tokoh masyarakat, kerabat, antrean, kelompok prioritas, kesetaraan, alternatif layanan
Opsi E (5 Poin) paling tepat karena urutan dan kriteria prioritas tetap diberlakukan secara konsisten. Penjelasan santun menjaga hubungan, sedangkan pilihan layanan lain membantu kebutuhan waktu tanpa mengambil hak warga yang lebih dahulu antre.
Kontribusi sosial seseorang tidak dapat dijadikan dasar memperoleh perlakuan khusus dalam pelayanan publik.

Pembahasan setiap opsi:
A (2 poin): Meminta persetujuan warga terlihat demokratis, tetapi menempatkan mereka dalam tekanan sosial dan tetap menyimpang dari aturan prioritas.
B (3 poin): Melibatkan penanggung jawab menunjukkan kehati-hatian, tetapi aturan sudah jelas sehingga eskalasi hanya menunda antrean.
C (4 poin): Menjelaskan kriteria dan mempertahankan antrean merupakan tindakan yang benar, tetapi belum membantu kebutuhan waktu melalui alternatif yang tersedia.
D (1 poin): Menghargai kontribusi tokoh tampak menjaga hubungan, tetapi mendahulukan kerabatnya merupakan favoritisme dan merugikan warga lain.
E (5 poin): Paling tepat; alasannya ada pada penjelasan di atas.

Cara cepat: Tolak perlakuan khusus berdasarkan kedekatan, jelaskan aturan, dan tawarkan alternatif yang tersedia bagi semua warga.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      // tryout-ref-06-03 · Nynda - TKP 1_Done Input.docx, soal 3
      {
        nomor: 5,
        tipe: 'skala',
        pertanyaan: `Menjelang loket tutup, seorang lansia dari desa terpencil datang mengurus dokumen bantuan. Satu surat pendukung belum tercetak, tetapi datanya tersedia pada sistem instansi dan petugas berwenang masih berada di kantor. Pemohon mengatakan sulit kembali dalam waktu dekat. Sikap Anda adalah ...`,
        opsi: [
          { label: 'A', teks: `Meminta petugas yang menguasai data memverifikasi surat tersebut dan mencetaknya agar permohonan dapat dituntaskan hari itu.` },
          { label: 'B', teks: `Mencatat permohonan, memeriksa data bersama petugas terkait, dan memberikan layanan prioritas ketika lansia itu datang pada hari kerja berikutnya.` },
          { label: 'C', teks: `Meminta pemohon mencari tempat pencetakan terdekat sebelum loket tutup agar petugas tidak mengakses data di luar tugasnya.` },
          { label: 'D', teks: `Memberikan nomor antrean prioritas untuk hari berikutnya serta menjelaskan bahwa kelengkapan berkas tetap menjadi tanggung jawab pemohon.` },
          { label: 'E', teks: `Menerima berkas yang ada dan meminta lansia mengirimkan surat pendukung melalui pesan pribadi setelah kembali ke desanya.` },
        ],
        kunci: 'A',
        pembahasan: `Konsep yang digunakan: Akomodasi yang wajar bagi kelompok rentan tanpa mengurangi kelengkapan dan kewenangan verifikasi
Kata kunci: lansia, desa terpencil, berkas kurang, data internal, petugas berwenang, SOP
Opsi A (5 Poin) paling tepat karena hambatan pemohon diatasi menggunakan data dan petugas yang sah, sementara persyaratan tetap dipenuhi. Bantuan pencetakan merupakan akomodasi yang wajar, bukan penghapusan syarat atau perlakuan istimewa yang melanggar aturan.
Tindakan tersebut mempertimbangkan jarak, usia, dan waktu tanpa mengorbankan akurasi dokumen.

Pembahasan setiap opsi:
A (5 poin): Paling tepat; alasannya ada pada penjelasan di atas.
B (4 poin): Verifikasi melalui petugas berwenang sudah tepat, tetapi penundaan pencetakan tidak diperlukan karena sumber daya masih tersedia.
C (1 poin): Meminta pencetakan di luar menjaga batas tugas secara kaku, tetapi memindahkan beban kepada lansia dan mengabaikan akses internal yang sah.
D (3 poin): Antrean prioritas mengurangi waktu tunggu berikutnya, tetapi pemohon tetap harus menempuh perjalanan lagi padahal solusi sah tersedia saat itu.
E (2 poin): Menerima pengiriman melalui pesan pribadi tampak memudahkan, tetapi berisiko pada keamanan data dan tidak mengikuti kanal resmi.

Cara cepat: Berikan akomodasi yang wajar kepada kelompok rentan tanpa menghapus persyaratan atau melampaui kewenangan.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      // tryout-ref-06-06 · Nynda - TKP 1_Done Input.docx, soal 6
      {
        nomor: 6,
        tipe: 'skala',
        pertanyaan: `Listrik padam ketika antrean sedang padat sehingga layar nomor dan komputer loket tidak berfungsi. Formulir kertas serta daftar antrean cadangan tersedia, sementara transaksi yang memerlukan verifikasi pusat tidak dapat diselesaikan. Sejumlah warga mulai mempertanyakan kepastian layanan. Langkah Anda adalah ...`,
        opsi: [
          { label: 'A', teks: `Membagikan formulir kertas kepada seluruh warga agar mereka tetap memiliki kegiatan sambil menunggu pasokan listrik kembali normal.` },
          { label: 'B', teks: `Menutup sementara loket untuk mencegah kesalahan pencatatan dan meminta warga memantau pengumuman pembukaan melalui media sosial.` },
          { label: 'C', teks: `Mengaktifkan antrean manual dan memproses layanan yang aman dilakukan, disertai pencatatan untuk verifikasi lanjutan.` },
          { label: 'D', teks: `Memprioritaskan warga yang urusannya tidak membutuhkan pembayaran, lalu meminta warga lain mengambil nomor antrean baru setelah listrik menyala.` },
          { label: 'E', teks: `Mengumumkan gangguan, memanggil antrean secara manual, memeriksa seluruh berkas, dan menyimpan hasilnya sampai sistem dapat digunakan kembali.` },
        ],
        kunci: 'C',
        pembahasan: `Konsep yang digunakan: Keandalan layanan saat infrastruktur terganggu melalui komunikasi, antrean cadangan, pemilahan proses, dan pencatatan tindak lanjut
Kata kunci: listrik padam, antrean manual, layanan dasar, verifikasi pusat, pencatatan
Opsi C (5 Poin) paling tepat karena layanan yang tidak bergantung pada listrik tetap berjalan, sedangkan proses yang tertunda dicatat agar dapat dilanjutkan dengan tertib. Pengumuman kondisi dan penggunaan antrean manual menjaga kepastian serta urutan warga.
Petugas tidak memaksakan transaksi yang membutuhkan verifikasi pusat dan tidak menghentikan seluruh layanan hanya karena sebagian sistem tidak tersedia.

Pembahasan setiap opsi:
A (2 poin): Formulir kertas memanfaatkan waktu tunggu, tetapi tanpa pengaturan antrean dan pemilahan proses belum menjamin layanan berjalan.
B (1 poin): Penutupan mencegah kesalahan, tetapi terlalu luas karena sejumlah layanan masih dapat dilakukan secara manual.
C (5 poin): Paling tepat; alasannya ada pada penjelasan di atas.
D (3 poin): Memilah layanan yang tidak membutuhkan pembayaran cukup membantu, tetapi nomor antrean baru dapat menghilangkan urutan dan membebani warga.
E (4 poin): Antrean manual dan pemeriksaan berkas merupakan langkah baik, tetapi menahan semua hasil mengurangi manfaat prosedur cadangan.

Cara cepat: Saat fasilitas utama gagal, jalankan fungsi yang masih aman, jaga urutan, dan catat proses yang harus ditindaklanjuti.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      // tryout-ref-06-05 · Nynda - TKP 1_Done Input.docx, soal 5
      {
        nomor: 7,
        tipe: 'skala',
        pertanyaan: `Saat Anda sedang menjelaskan koreksi berkas kepada seorang warga, atasan menelepon dan meminta laporan penting segera dibawa ke ruangannya. Di loket sebelah terdapat rekan yang dapat melanjutkan pelayanan, tetapi ia juga sedang menyelesaikan satu permohonan. Tindakan Anda adalah ...`,
        opsi: [
          { label: 'A', teks: `Meminta izin kepada warga, memberi tahu perkiraan waktu, menyelesaikan urusan atasan, dan kembali melanjutkan layanan tanpa pergantian petugas.` },
          { label: 'B', teks: `Mengabaikan panggilan sementara sampai pelayanan warga selesai agar urutan komunikasi tidak terputus oleh urusan kedinasan lain.` },
          { label: 'C', teks: `Mengirim pesan kepada atasan bahwa laporan akan diserahkan setelah antrean selesai, tanpa menanyakan batas waktu yang sebenarnya dibutuhkan.` },
          { label: 'D', teks: `Memastikan urgensi panggilan, menuntaskan bagian kritis penjelasan, dan menyerahkan layanan kepada rekan dengan informasi utuh.` },
          { label: 'E', teks: `Mengakhiri penjelasan kepada warga dan segera menemui atasan, kemudian kembali ke loket untuk melanjutkan pelayanan dari awal.` },
        ],
        kunci: 'D',
        pembahasan: `Konsep yang digunakan: Menjaga kesinambungan pelayanan ketika muncul tugas kedinasan mendesak melalui klarifikasi dan serah terima yang akuntabel
Kata kunci: panggilan atasan, warga sedang dilayani, urgensi, bagian kritis, serah terima
Opsi D (5 Poin) paling tepat karena petugas memastikan tingkat urgensi perintah, tidak memutus penjelasan pada bagian yang dapat menimbulkan kesalahan, dan melakukan serah terima yang jelas. Kepentingan atasan ditangani tanpa membiarkan warga mengulang proses.
Koordinasi dengan rekan dilakukan setelah permohonan yang sedang ditanganinya selesai atau pada titik yang aman, sehingga tidak memindahkan gangguan kepada pemohon lain.

Pembahasan setiap opsi:
A (4 poin): Meminta izin dan menjaga satu petugas menangani kasus merupakan langkah baik, tetapi membuat warga menunggu walaupun serah terima dapat dilakukan.
B (3 poin): Menyelesaikan pelayanan menjaga fokus kepada warga, tetapi mengabaikan panggilan tanpa memastikan urgensinya dapat menghambat tugas penting.
C (1 poin): Memberi kabar kepada atasan lebih baik daripada diam, tetapi menetapkan penundaan tanpa klarifikasi urgensi tidak cukup akuntabel.
D (5 poin): Paling tepat; alasannya ada pada penjelasan di atas.
E (2 poin): Segera memenuhi panggilan menunjukkan kepatuhan, tetapi memutus pelayanan dan membuat warga mengulang proses tanpa kepastian.

Cara cepat: Klarifikasi urgensi, tuntaskan bagian kritis, dan lakukan serah terima lengkap agar kedua tugas tetap berjalan.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      // tryout-ref-07-02 · Wil - TKP 1_Done Input.docx, soal 2
      {
        nomor: 8,
        tipe: 'skala',
        pertanyaan: `Seorang wali murid mengeluhkan petugas puskesmas yang membacakan data kesehatan anak dengan suara keras saat pendaftaran imunisasi campak. Orang lain di antrean mendengarnya dan warga meminta kejadian itu tidak terulang, tetapi tetap berharap dilayani hari ini. Sebagai petugas penerima keluhan, respons Anda adalah ...`,
        opsi: [
          { label: 'A', teks: `Menempatkan rekan sebagai pengganti petugas pendaftaran dan memberikan nomor pengaduan agar warga bisa memantau respons layanan.` },
          { label: 'B', teks: `Mengajak warga berbicara di tempat yang lebih tenang dan meneruskan pendaftarannya, lalu mengingatkan rekan secara pribadi tentang kerahasiaan.` },
          { label: 'C', teks: `Memindahkan percakapan ke area privat, memastikan pendaftaran dilanjutkan dan menyalurkan keluhan melalui mekanisme yang menjaga kerahasiaan.` },
          { label: 'D', teks: `Mengarahkan warga mengisi formulir pengaduan resmi dan memberi tahu bahwa tanggapan akan tersedia setelah petugas penanggung jawab memeriksanya.` },
          { label: 'E', teks: `Meminta warga mengulangi data yang sebelumnya disebutkan di depan antrean sehingga kesalahan petugas lain dapat dibandingkan dengan berkas.` },
        ],
        kunci: 'C',
        pembahasan: `Konsep yang digunakan: Pelayanan prima, perlindungan privasi, pemulihan kepercayaan, penanganan keluhan
Kata kunci: Data pribadi terdengar, keluhan, privasi, pemulihan layanan
Opsi C (5 poin) paling tepat karena petugas perlu melindungi warga dari paparan lanjutan, melanjutkan kebutuhan pendaftaran, dan memastikan keluhan masuk alur penanganan yang bertanggung jawab. Dengan demikian, hak warga dipulihkan saat itu juga dan unit mempunyai dasar untuk mencegah pengulangan.

Pembahasan setiap opsi:
A (3 poin) karena jalur keluhan tersedia dan petugas berganti, namun kekhawatiran tentang paparan data pribadi belum ditangani secara langsung.
B (4 poin) karena privasi warga dan kelanjutan layanan telah diperhatikan, tetapi teguran informal belum menjamin unit mengevaluasi kesalahan yang terjadi.
C (5 poin): Paling tepat; alasannya ada pada penjelasan di atas.
D (2 poin) karena pengaduan diarahkan ke prosedur resmi, tetapi kebutuhan warga yang sedang dilayani tidak mendapatkan solusi saat itu.
E (1 poin) karena pemeriksaan peristiwa diupayakan, tetapi meminta data pribadi diulangi di ruang terbuka memperluas paparan yang dikeluhkan.

Cara cepat: Pada keluhan kerahasiaan, amankan situasi sekarang, tetap layani kebutuhan warga, dan catat tindak lanjut unit.`,
        tingkat: 'sulit',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Jejaring Kerja` },
    soal: [
      // tryout-ref-08-11 · Wil - TKP 2_Done Input.docx, soal 11
      {
        nomor: 9,
        tipe: 'skala',
        pertanyaan: `Puskesmas dan kelurahan mendata warga lanjut usia, tetapi belum membagi tugas pembaruan alamat. Akibatnya satu warga tercatat di dua wilayah. Anda menjadi penghubung kedua instansi. Tindakan Anda adalah ...`,
        opsi: [
          { label: 'A', teks: `Menunjuk puskesmas menjadi pemegang data utama karena paling sering bertemu lansia, sementara kelurahan diminta menyampaikan informasi pendukung.` },
          { label: 'B', teks: `Membiarkan kedua unit menggunakan daftar masing-masing dan menyatukannya menjelang laporan akhir agar tidak menambah rapat koordinasi.` },
          { label: 'C', teks: `Menawarkan diri memperbarui semua perubahan alamat untuk sementara agar kedua unit dapat menjalankan tugas utamanya tanpa menambah koordinasi.` },
          { label: 'D', teks: `Mengirim ringkasan tujuan program kepada kedua unit dan meminta masing-masing menyampaikan perubahan alamat ketika ditemukan dalam pekerjaannya.` },
          { label: 'E', teks: `Mengajak wakil dua unit menetapkan pembagian peran, jadwal pembaruan, dan cara konfirmasi perubahan alamat yang dapat diakses penanggung jawab.` },
        ],
        kunci: 'E',
        pembahasan: `Konsep yang digunakan: Prinsip jejaring kerja, integritas kemitraan, dan tujuan bersama.
Kata kunci: Puskesmas, kelurahan, pembagian peran, perubahan alamat, tanggung jawab.
Opsi E (5 poin) paling tepat karena membangun hubungan kerja berdasarkan tujuan bersama dan tanggung jawab yang jelas. Menyepakati siapa melakukan pembaruan dan bagaimana konfirmasi dilakukan mencegah data berbeda antarlembaga. Kerja sama tidak cukup hanya dilandasi niat baik tanpa mekanisme pelaksanaan.

Pembahasan setiap opsi:
A (2 poin) karena memperjelas penanggung jawab tunggal, tetapi keputusan dibuat sepihak tanpa menyepakati kebutuhan kedua lembaga.
B (1 poin) karena mengurangi pertemuan, tetapi membiarkan perbedaan data berkembang sampai pelaporan akhir.
C (3 poin) karena menunjukkan inisiatif membantu, tetapi menjadikan satu orang titik ketergantungan dan menghilangkan pembagian tugas antarlembaga.
D (4 poin) karena menyatukan pemahaman mengenai tujuan, tetapi tanggung jawab pemutakhiran tetap tidak jelas.
E (5 poin): Paling tepat; alasannya ada pada penjelasan di atas.

Cara cepat: Hubungan kerja produktif membutuhkan tujuan, pembagian peran, dan mekanisme informasi yang disepakati.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tryout-ref-08-15 · Wil - TKP 2_Done Input.docx, soal 15
      {
        nomor: 10,
        tipe: 'skala',
        pertanyaan: `Oki baru bertugas dalam tim lintas kabupaten. Notulen memakai singkatan yang berbeda dari istilah unit asalnya, sehingga tugas lapangan terlihat tumpang tindih. Rekan menyarankan mengikuti istilah yang paling sering dipakai. Langkah Oki adalah ...`,
        opsi: [
          { label: 'A', teks: `Mengerjakan seluruh tugas yang tampak tercantum pada namanya agar tidak ada pekerjaan tertinggal meski sebagian kemungkinan telah menjadi tanggung jawab rekan lain.` },
          { label: 'B', teks: `Meminta klarifikasi arti singkatan dan pembagian tugas melalui komunikasi tim, lalu membagikan ringkasan agar pekerjaan tidak tumpang tindih.` },
          { label: 'C', teks: `Memilih tugas yang paling mirip dengan pekerjaan rutin di unit asal dan menyampaikan pilihan tersebut agar rekan lain dapat menyesuaikan.` },
          { label: 'D', teks: `Menandai bagian notulen yang membingungkan dan menunggu koordinator selesai rapat sebelum mengambil tugas yang berpotensi ganda.` },
          { label: 'E', teks: `Menghubungi satu rekan yang paling berpengalaman untuk menafsirkan notulen dan mulai mengerjakan tugas sesuai penjelasan yang diperoleh.` },
        ],
        kunci: 'B',
        pembahasan: `Konsep yang digunakan: Koordinasi dan berbagi informasi, klarifikasi peran, serta akurasi komunikasi.
Kata kunci: Notulen berbeda, singkatan, peran ganda, klarifikasi terbuka.
Opsi B (5 poin) paling tepat karena menempatkan klarifikasi sebagai sarana memastikan tanggung jawab bersama, bukan persoalan pribadi pegawai baru. Ringkasan hasil konfirmasi mengurangi interpretasi berbeda di antara anggota tim. Langkah ini tepat tanpa menunggu seluruh anggota bertemu langsung.

Pembahasan setiap opsi:
A (1 poin) karena menunjukkan kesediaan bekerja, tetapi dapat menggandakan pekerjaan dan mengaburkan tanggung jawab anggota lain.
B (5 poin): Paling tepat; alasannya ada pada penjelasan di atas.
C (2 poin) karena memberi tahu pilihan tugas, tetapi pembagian ditentukan berdasarkan kebiasaan pribadi bukan kebutuhan tim.
D (3 poin) karena mencegah tugas tertukar, tetapi menunda pekerjaan yang dapat diperjelas melalui anggota tim lainnya.
E (4 poin) karena berinisiatif mencari bantuan dari rekan berpengalaman, tetapi hasil penafsiran belum dikonfirmasi dan disebarkan ke seluruh tim.

Cara cepat: Komunikasi efektif menghasilkan pemahaman kolektif yang tercatat, bukan sekadar penafsiran individual.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tryout-ref-07-09 · Wil - TKP 1_Done Input.docx, soal 9
      {
        nomor: 11,
        tipe: 'skala',
        pertanyaan: `Dinas kesehatan dan sekolah akan mengadakan penyuluhan keamanan pangan MBG. Poster hanya mencantumkan dinas sehingga orang tua tidak mengetahui peran serta kontak sekolah. Anda menjadi penghubung kedua instansi. Respons Anda adalah ...`,
        opsi: [
          { label: 'A', teks: `Menyebut satu instansi sebagai penyelenggara utama agar pengumuman terlihat sederhana, lalu meminta pihak lain mendukung pelaksanaan.` },
          { label: 'B', teks: `Meminta sekolah membagikan pengumuman sendiri supaya wali murid memahami perannya, sementara materi awal dinas tetap digunakan.` },
          { label: 'C', teks: `Menambahkan kedua logo pada poster yang beredar dan mengirim pemberitahuan kepada sekolah bahwa materi promosi sudah diperbaiki.` },
          { label: 'D', teks: `Mempertahankan poster yang sudah beredar karena informasi jadwalnya benar, kemudian menjelaskan pembagian peran saat kegiatan dimulai.` },
          { label: 'E', teks: `Menyelaraskan peran dan kontak kedua instansi, lalu menyebarkan informasi kegiatan yang diperbarui melalui saluran masing-masing.` },
        ],
        kunci: 'E',
        pembahasan: `Konsep yang digunakan: Kesetaraan kemitraan, komunikasi publik, pengakuan peran, tujuan bersama
Kata kunci: Dinas, sekolah, logo, peran mitra, kontak bantuan
Opsi E (5 poin) paling tepat karena kemitraan membutuhkan kejelasan tanggung jawab yang dapat dipahami penerima layanan. Menyepakati peran dan kontak sebelum publikasi mencegah kebingungan serta membangun kepercayaan antarinstansi. Bukan jumlah logo semata yang menentukan kualitas komunikasi, melainkan informasi praktis tentang siapa bertanggung jawab.

Pembahasan setiap opsi:
A (1 poin) karena pengumuman disederhanakan dengan menghilangkan kontribusi mitra, sehingga hubungan kerja kurang adil dan kontak menjadi kabur.
B (3 poin) karena sekolah diberi ruang berkomunikasi, tetapi informasi terpisah berpotensi berbeda dan membuat warga menentukan sendiri pihak yang tepat.
C (4 poin) karena kedua instansi sudah terlihat dalam poster, tetapi saluran bantuan dan rincian peran masih belum diperjelas kepada orang tua.
D (2 poin) karena pelaksanaan kegiatan tidak berubah, tetapi ketidakjelasan informasi dibiarkan sampai peserta hadir di lokasi.
E (5 poin): Paling tepat; alasannya ada pada penjelasan di atas.

Cara cepat: Dalam kerja sama, perjelas peran dan jalur informasi bersama, bukan sekadar menampilkan identitas lembaga.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tryout-ref-06-14 · Nynda - TKP 1_Done Input.docx, soal 14
      {
        nomor: 12,
        tipe: 'skala',
        pertanyaan: `Unit Anda memiliki metode analisis otomatis yang mempercepat laporan. Cabang lain meminta modul dan pelatihan, sementara tim Anda sedang menghadapi tenggat rutin. Metode tersebut menggunakan data contoh yang harus disamarkan sebelum dibagikan. Kepala unit mendukung transfer pengetahuan selama pekerjaan utama tidak terganggu. Langkah Anda adalah ...`,
        opsi: [
          { label: 'A', teks: `Mengirim modul yang sudah ada dan meminta cabang mempelajarinya sendiri, kemudian menjawab pertanyaan jika tim Anda memiliki waktu.` },
          { label: 'B', teks: `Menolak sementara permintaan pelatihan dan menyarankan cabang mengajukannya kembali setelah periode pelaporan unit Anda selesai.` },
          { label: 'C', teks: `Membagi penyusunan materi kepada tim sekarang dan menjalankan pelatihan segera agar cabang dapat menikmati manfaat metode lebih cepat.` },
          { label: 'D', teks: `Memberikan akses rekaman penggunaan metode serta membuka forum pertanyaan tertulis agar cabang dapat belajar tanpa sesi langsung.` },
          { label: 'E', teks: `Menjadwalkan sesi setelah tenggat, menyiapkan data contoh yang aman, dan menunjuk kontak pendamping untuk tahap penerapan awal.` },
        ],
        kunci: 'E',
        pembahasan: `Konsep yang digunakan: Transfer pengetahuan yang terencana dengan perlindungan data, dukungan penerapan, dan pengelolaan beban kerja
Kata kunci: modul, pelatihan, tenggat, data samaran, pendampingan
Opsi E (5 Poin) paling tepat karena pengetahuan dibagikan pada waktu yang tidak mengganggu pekerjaan utama, menggunakan data yang aman, dan disertai pendampingan penerapan. Cabang memperoleh dukungan sampai tahap penggunaan awal, bukan hanya materi pasif.
Jadwal yang jelas juga lebih kolaboratif daripada menunda tanpa kepastian atau memaksakan pelatihan saat kapasitas tim terbatas.

Pembahasan setiap opsi:
A (3 poin): Modul memungkinkan belajar mandiri, tetapi dukungan bergantung pada waktu luang dan keamanan data contoh belum dipastikan.
B (1 poin): Penundaan melindungi tenggat unit, tetapi cabang tidak memperoleh jadwal atau persiapan yang dapat segera dimulai.
C (2 poin): Pelatihan segera mempercepat manfaat, tetapi berisiko mengganggu tenggat dan membebani tim pada saat yang tidak tepat.
D (4 poin): Rekaman dan forum tertulis efisien serta cukup membantu, tetapi belum menyediakan pendampingan pada tahap penerapan nyata.
E (5 poin): Paling tepat; alasannya ada pada penjelasan di atas.

Cara cepat: Berbagi pengetahuan harus memiliki jadwal, materi yang aman, dan dukungan penerapan tanpa mengorbankan tugas utama.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      // tryout-ref-07-15 · Wil - TKP 1_Done Input.docx, soal 15
      {
        nomor: 13,
        tipe: 'skala',
        pertanyaan: `Menjelang pelaksanaan pasar murah serentak, unit perhubungan mengirim jadwal pengaturan jalan kepada kecamatan. Aparat pengatur lalu lintas kemudian mengirim revisi rute melalui surat resmi, tetapi versi lama terlanjur tersebar di sejumlah grup relawan. Anda menjadi penghubung informasi. Tindakan Anda adalah ...`,
        opsi: [
          { label: 'A', teks: `Menyebarkan surat revisi melalui kanal tim yang biasa digunakan dan meminta koordinator lapangan memperhatikan perubahan rute.` },
          { label: 'B', teks: `Menunggu rapat koordinasi sore untuk membandingkan dua surat sebelum mengirimkan rute yang dipilih kepada petugas lapangan.` },
          { label: 'C', teks: `Memastikan revisi sah, menyebarkan satu versi rute yang berlaku, dan meminta tiap koordinator mengonfirmasi penerimaannya.` },
          { label: 'D', teks: `Membiarkan tiap unit memilih versi yang diterimanya sendiri sehingga perubahan mendadak tidak mengacaukan persiapan tiap petugas.` },
          { label: 'E', teks: `Mengikuti jadwal awal karena sudah lebih dahulu disebarkan, lalu mencatat perbedaan untuk dibahas dalam laporan kegiatan.` },
        ],
        kunci: 'C',
        pembahasan: `Konsep yang digunakan: Komunikasi lintas unit, kendali versi informasi, tanggung jawab koordinasi
Kata kunci: Jadwal rute, surat revisi, petugas lapangan, konfirmasi
Opsi C (5 poin) paling tepat karena kendali versi penting ketika perubahan akan memengaruhi tindakan bersama. Sebelum menyiarkan ulang informasi, keabsahan dan waktu berlakunya perlu dipastikan. Konfirmasi penerimaan mengurangi risiko petugas di lapangan memakai petunjuk yang tidak lagi berlaku.

Pembahasan setiap opsi:
A (4 poin) karena revisi dibagikan ke kanal yang lazim sehingga banyak petugas mengetahuinya, tetapi belum ada kepastian siapa yang sudah menerima perubahan.
B (3 poin) karena perbandingan surat direncanakan, namun menunggu sampai sore membiarkan informasi yang keliru beredar selama persiapan.
C (5 poin): Paling tepat; alasannya ada pada penjelasan di atas.
D (1 poin) karena otonomi unit tampak mempermudah, tetapi penggunaan rute berbeda dalam satu kegiatan mengacaukan koordinasi bersama.
E (2 poin) karena jadwal pertama dipertahankan demi stabilitas, padahal informasi resmi terbaru mungkin mengubah pengaturan keselamatan.

Cara cepat: Perubahan lintas instansi membutuhkan satu versi informasi yang sah dan bukti bahwa pelaksana telah menerimanya.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      // tryout-ref-07-14 · Wil - TKP 1_Done Input.docx, soal 14
      {
        nomor: 14,
        tipe: 'skala',
        pertanyaan: `Pada penyusunan rute evakuasi karhutla, perangkat pemetaan memilih jalan terpendek, sedangkan tim lapangan menemukan beberapa ruas tidak dapat dilalui pengguna kursi roda. Rute harus diumumkan besok dan waktu perjalanan tetap menjadi pertimbangan keselamatan. Tim berbeda pendapat mengenai kriteria yang perlu didahulukan. Keputusan Anda adalah ...`,
        opsi: [
          { label: 'A', teks: `Menggabungkan kedua daftar rute dan menyarankan pengguna memilih sendiri jalur yang dianggap paling sesuai dengan keadaan mereka.` },
          { label: 'B', teks: `Menyerahkan keputusan rute kepada satu tim sehingga proses lebih cepat, kemudian menampung catatan keberatan tim lainnya pada evaluasi berikutnya.` },
          { label: 'C', teks: `Menjadikan akses kursi roda syarat utama dan menghitung waktu tempuh ulang hanya untuk jalur yang dapat diakses seluruh kelompok warga yang dievakuasi.` },
          { label: 'D', teks: `Menguji pilihan rute terhadap waktu tempuh dan aksesibilitas kemudian mencatat dasar penilaian bersama tim.` },
          { label: 'E', teks: `Menggunakan hasil perhitungan tim pemetaan karena datanya terukur dan meminta petugas lapangan membantu pengguna yang mengalami hambatan.` },
        ],
        kunci: 'D',
        pembahasan: `Konsep yang digunakan: Kolaborasi multidisipliner, pemilihan kriteria, keselamatan dan aksesibilitas
Kata kunci: Rute evakuasi, jarak, kursi roda, dua data valid, keputusan tim
Opsi D (5 poin) paling tepat karena dua sumber data tidak perlu diperlakukan sebagai saling meniadakan. Rute perlu diuji terhadap keselamatan, waktu tempuh, dan aksesibilitas untuk berbagai pengguna. Keputusan terdokumentasi memberi dasar yang jelas mengapa pilihan tertentu diambil serta apa keterbatasan yang masih harus dikelola.

Pembahasan setiap opsi:
A (3 poin) karena pengguna diberi pilihan luas, namun tanggung jawab menyediakan rute yang layak dan aman justru dilepaskan kepada individu.
B (1 poin) karena keputusan dipercepat dengan mengabaikan keahlian salah satu tim yang dapat mengubah kelayakan jalur.
C (4 poin) karena hak pengguna berkebutuhan akses sudah dijaga dalam pemilihan jalur, tetapi keseluruhan pilihan belum diuji menurut kedua kriteria sejak awal.
D (5 poin): Paling tepat; alasannya ada pada penjelasan di atas.
E (2 poin) karena pengukuran jarak dimanfaatkan, tetapi hambatan mobilitas dipindahkan menjadi masalah bantuan lapangan bukan bagian dari desain.

Cara cepat: Saat dua unit membawa bukti yang berbeda, gabungkan kriteria yang relevan lalu uji opsi, bukan memilih siapa yang paling meyakinkan.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      // tryout-ref-08-16 · Wil - TKP 2_Done Input.docx, soal 16
      {
        nomor: 15,
        tipe: 'skala',
        pertanyaan: `Tim kesehatan melatih kader di daerah yang angkutan umumnya terbatas. Unit materi meminta praktik lebih lama, sedangkan peserta harus pulang sebelum kendaraan terakhir. Anggaran tidak tersedia untuk penginapan. Praktik menjadi syarat kompetensi, tetapi sebagian teori bisa dipelajari mandiri. Kedua unit perlu menyepakati rancangan yang aman tanpa menurunkan hasil belajar. Keputusan Anda adalah ...`,
        opsi: [
          { label: 'A', teks: `Mempertahankan rancangan praktik panjang dan menyediakan surat keterangan untuk peserta yang terlambat pulang agar target pembelajaran tidak berkurang.` },
          { label: 'B', teks: `Mengutamakan waktu pulang peserta dan mengganti hampir seluruh praktik dengan panduan tertulis untuk mengurangi ketergantungan pada perjalanan.` },
          { label: 'C', teks: `Menyepakati sesi praktik inti sampai sebelum angkutan terakhir, tetapi belum menentukan cara menguasai kompetensi yang belum terlatih.` },
          { label: 'D', teks: `Menentukan praktik esensial dengan kedua unit sesuai batas jam angkutan dan menyepakati tindak lanjut agar kompetensi tetap tercapai.` },
          { label: 'E', teks: `Menyerahkan kepada unit materi penentuan durasi belajar dan memberi unit lapangan kewenangan memulangkan peserta lebih awal sesuai kondisi.` },
        ],
        kunci: 'D',
        pembahasan: `Konsep yang digunakan: Kolaborasi, pemecahan konflik, dan kesepakatan berdasarkan bukti.
Kata kunci: Kompetensi wajib, angkutan terakhir, keterbatasan anggaran, kompromi berbasis tujuan.
Opsi D (5 poin) paling tepat karena tidak membagi waktu secara mekanis, tetapi menilai kebutuhan substantif kedua unit. Praktik inti tetap diselenggarakan saat peserta dapat hadir, sedangkan kegiatan lanjutan dirancang dengan bukti penguasaan. Kesepakatan berbasis tujuan memberi solusi yang dapat dilaksanakan tanpa mengorbankan keselamatan perjalanan.

Pembahasan setiap opsi:
A (1 poin) karena mempertahankan isi belajar, tetapi surat tidak mengatasi ketiadaan angkutan pulang dan menambah beban peserta.
B (2 poin) karena melindungi keterjangkauan perjalanan, tetapi menghilangkan latihan praktik yang dibutuhkan peserta.
C (4 poin) karena telah melindungi kepulangan peserta dan mempertahankan praktik utama, tetapi tidak menyiapkan tindak lanjut untuk kompetensi yang belum cukup dilatih.
D (5 poin): Paling tepat; alasannya ada pada penjelasan di atas.
E (3 poin) karena memberikan ruang kepada kedua unit, tetapi menghasilkan pelaksanaan tidak seragam dan tujuan pelatihan tidak pasti.

Cara cepat: Dalam konflik kepentingan tim, rancang solusi berdasarkan tujuan wajib dan batas nyata, bukan sekadar membagi dua usulan.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      // tryout-ref-06-12 · Nynda - TKP 1_Done Input.docx, soal 12
      {
        nomor: 16,
        tipe: 'skala',
        pertanyaan: `Sebagai ketua tim lintas divisi, Anda melihat seorang anggota dua kali terlambat menyerahkan pekerjaan dan jarang merespons grup. Bagian tugasnya menjadi penghambat pekerjaan anggota lain. Dalam percakapan singkat, ia mengaku belum memahami perangkat analisis yang baru digunakan tim. Tindakan Anda adalah ...`,
        opsi: [
          { label: 'A', teks: `Memberi pendampingan dengan target perbaikan terukur sebelum mengevaluasi kebutuhan penyesuaian peran anggota tersebut.` },
          { label: 'B', teks: `Membahas keterlambatan dalam rapat tim agar anggota lain memahami penyebab hambatan dan dapat menawarkan bantuan sesuai kapasitas.` },
          { label: 'C', teks: `Memberikan panduan penggunaan perangkat dan meminta anggota tersebut melaporkan kemajuannya langsung kepada Anda setiap hari.` },
          { label: 'D', teks: `Mengalihkan seluruh tugasnya kepada anggota yang sudah menguasai perangkat dan memberinya pekerjaan administratif sampai proyek selesai.` },
          { label: 'E', teks: `Menyampaikan catatan kinerjanya kepada atasan divisi agar pembinaan dilakukan oleh pihak yang memiliki kewenangan kepegawaian.` },
        ],
        kunci: 'A',
        pembahasan: `Konsep yang digunakan: Pembinaan anggota tim melalui target terukur, dukungan kompetensi, pemantauan, dan penyesuaian berbasis hasil
Kata kunci: anggota pasif, perangkat baru, target perbaikan, pendampingan, pemantauan
Opsi A (5 Poin) paling tepat karena ketua menangani akar keterlambatan melalui dukungan kompetensi sekaligus menetapkan tanggung jawab yang terukur. Pemantauan memberi bukti untuk menilai apakah peran perlu disesuaikan.
Anggota memperoleh kesempatan memperbaiki kontribusi tanpa membuat pekerjaan tim terus bergantung pada harapan yang tidak terpantau.

Pembahasan setiap opsi:
A (5 poin): Paling tepat; alasannya ada pada penjelasan di atas.
B (3 poin): Bantuan tim dapat mempercepat pemulihan, tetapi membahas kelemahan individu di forum terbuka berisiko mengurangi rasa aman.
C (4 poin): Panduan dan laporan harian membantu pembelajaran, tetapi target hasil dan evaluasi penyesuaian peran belum disepakati bersama.
D (2 poin): Pengalihan tugas melindungi tenggat, tetapi terlalu cepat mengurangi peran anggota dan tidak mengembangkan kemampuan yang dibutuhkan.
E (1 poin): Atasan divisi memiliki kewenangan pembinaan, tetapi eskalasi dilakukan sebelum ketua mencoba dukungan dan pengelolaan kinerja langsung.

Cara cepat: Hadapi kontribusi yang lemah dengan mencari penyebab, menetapkan target, memberi dukungan, dan menilai hasilnya.`,
        tingkat: 'sulit',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Sosial Budaya` },
    soal: [
      // tryout-ref-08-23 · Wil - TKP 2_Done Input.docx, soal 23
      {
        nomor: 17,
        tipe: 'skala',
        pertanyaan: `Ratri melatih warga dari dua dusun. Mereka memakai istilah lokal berbeda untuk arah angin, sehingga beberapa peserta salah mengikuti petunjuk meskipun semua bersedia berlatih bersama. Respons Ratri yang paling tepat adalah ...`,
        opsi: [
          { label: 'A', teks: `Menyelenggarakan penjelasan terpisah untuk masing-masing dusun dengan istilah mereka, lalu menggabungkan peserta kembali saat latihan berakhir.` },
          { label: 'B', teks: `Mengutamakan istilah dalam panduan dan meminta perwakilan kedua dusun membantu peserta lain yang masih sulit memahaminya selama latihan.` },
          { label: 'C', teks: `Membagikan daftar arti istilah yang digunakan kedua dusun setelah pelatihan sehingga peserta bisa mempelajarinya tanpa mengubah susunan kegiatan.` },
          { label: 'D', teks: `Mengajak peserta menyepakati padanan istilah lokal dengan kosakata dalam panduan, lalu memakainya secara konsisten selama latihan bersama.` },
          { label: 'E', teks: `Meminta beberapa peserta menjelaskan istilah lokal, lalu menyesuaikan penjelasan lisan agar kedua kelompok lebih memahami petunjuk latihan.` },
        ],
        kunci: 'D',
        pembahasan: `Konsep yang digunakan: Adaptasi sosial budaya, komunikasi lintas budaya, dan penghargaan terhadap keberagaman.
Kata kunci: Perbedaan istilah, dua dusun, komunikasi, adaptasi, kesepahaman.
Opsi D (5 poin) paling tepat karena menghargai penggunaan istilah lokal sekaligus membangun pemahaman bersama. Penyepakatan padanan istilah memungkinkan kedua dusun mengikuti petunjuk latihan yang sama tanpa mengabaikan keragaman bahasa. Penggunaan istilah yang konsisten juga mengurangi kesalahan selama kegiatan berlangsung.

Pembahasan setiap opsi:
A (1 poin) karena menyesuaikan penjelasan menurut dusun, tetapi membuat koordinasi bersama tetap menggunakan dua acuan yang berbeda.
B (3 poin) karena menjaga keseragaman istilah dan menyediakan pendamping, tetapi belum membangun kesepahaman dua kelompok.
C (2 poin) karena memberi bahan belajar, tetapi setelah pelatihan sehingga kesalahan pemahaman saat latihan tidak segera diatasi.
D (5 poin): Paling tepat; alasannya ada pada penjelasan di atas.
E (4 poin) karena melibatkan peserta untuk menjelaskan istilah lokal, tetapi belum menyepakati satu padanan yang konsisten bagi kedua dusun.

Cara cepat: Saat muncul perbedaan bahasa, hormati kebiasaan masing-masing dan bangun kesepahaman yang dapat digunakan bersama.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tryout-ref-07-17 · Wil - TKP 1_Done Input.docx, soal 17
      {
        nomor: 18,
        tipe: 'skala',
        pertanyaan: `Pameran sejarah pasar tradisional disiapkan bersamaan dengan gerakan pangan murah. Narasi menyebut pedagang berasal dari satu komunitas, tetapi arsip menunjukkan beberapa kelompok turut berperan. Apa tindakan Anda sebagai penyusun pameran?`,
        opsi: [
          { label: 'A', teks: `Mengubah kalimat menjadi pernyataan umum mengenai keberagaman pedagang tanpa menyebut kelompok maupun rincian bukti sejarahnya.` },
          { label: 'B', teks: `Menyimpan keterangan lama sebagai naskah pembuka dan menambahkan catatan kecil bahwa pedagang juga datang dari kelompok berbeda.` },
          { label: 'C', teks: `Menjelaskan kontribusi beberapa komunitas sesuai bukti arsip dengan bahasa ringkas, lalu memeriksa pemahaman pengunjung pameran.` },
          { label: 'D', teks: `Menampilkan satu komunitas dominan dengan menambahkan foto perayaan kelompok lain untuk menghadirkan kesan kebudayaan yang beragam.` },
          { label: 'E', teks: `Menghapus seluruh uraian asal pedagang dari pameran supaya tidak timbul perdebatan mengenai komunitas yang pernah berkontribusi.` },
        ],
        kunci: 'C',
        pembahasan: `Konsep yang digunakan: Keberagaman sosial budaya, representasi adil, ketepatan informasi
Kata kunci: Sejarah pasar, komunitas pedagang, arsip, narasi inklusif.
Opsi C (5 poin) paling tepat karena pameran harus menghormati kontribusi berbagai komunitas berdasarkan bukti, bukan membangun narasi tunggal yang mengecualikan pihak lain. Kalimat ringkas dapat tetap akurat, dan uji keterbacaan membantu memastikan pesan dipahami pengunjung.

Pembahasan setiap opsi:
A (4 poin) karena narasi menjadi lebih netral dan tidak mengistimewakan satu kelompok, tetapi nilai sejarah konkret hilang sehingga pengunjung mendapat informasi terbatas.
B (3 poin) karena kelompok lain mulai disebut, tetapi penempatan sebagai catatan kecil masih membuat narasi utama kurang seimbang terhadap bukti.
C (5 poin): Paling tepat; alasannya ada pada penjelasan di atas.
D (2 poin) karena foto menampilkan keragaman, tetapi teks pokok tetap menyatakan klaim tunggal yang bertentangan dengan arsip.
E (1 poin) karena potensi perselisihan dihindari dengan menghapus informasi, padahal bukti memungkinkan penjelasan sejarah yang inklusif.

Cara cepat: Perbedaan sosial budaya sebaiknya direpresentasikan berdasar bukti dan dengan bahasa yang tetap mudah dipahami.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tryout-ref-08-18 · Wil - TKP 2_Done Input.docx, soal 18
      {
        nomor: 19,
        tipe: 'skala',
        pertanyaan: `Dua kelompok warga memiliki kegiatan rutin pada hari berbeda. Undangan dialog kelurahan hanya menawarkan satu hari, tetapi keduanya ingin ikut menyampaikan masukan langsung. Sebagai panitia, sikap Anda adalah ...`,
        opsi: [
          { label: 'A', teks: `Menetapkan hari yang tercantum pada undangan awal, tetapi menyediakan ringkasan hasil dialog bagi warga yang tidak dapat menghadiri pertemuan.` },
          { label: 'B', teks: `Mengarahkan kelompok yang lebih sedikit anggotanya menyesuaikan jadwal agar forum dapat diikuti mayoritas tanpa perlu perubahan persiapan.` },
          { label: 'C', teks: `Mengadakan forum hanya dengan peserta yang dapat hadir dan menjadikan kehadiran sebagai tanda bahwa mereka telah mewakili kebutuhan seluruh warga.` },
          { label: 'D', teks: `Mengirim ulang undangan dengan dua pilihan hari dan meminta kedua kelompok menentukan sendiri perwakilan yang paling mungkin hadir pada salah satu hari.` },
          { label: 'E', teks: `Mendengarkan kebutuhan waktu kedua kelompok dan menawarkan beberapa pilihan jadwal, kemudian menyepakati hari dialog yang memungkinkan keduanya hadir.` },
        ],
        kunci: 'E',
        pembahasan: `Konsep yang digunakan: Keberagaman sosial budaya, partisipasi, dan pemahaman fungsi sosial masyarakat.
Kata kunci: Kebiasaan kelompok, jadwal dialog, kesempatan partisipasi, kesetaraan.
Opsi E (5 poin) paling tepat karena mengakui bahwa kebiasaan sosial yang berbeda dapat memengaruhi kehadiran warga. Informasi dari kedua kelompok perlu menjadi dasar pemilihan waktu, bukan dugaan penyelenggara. Kesepakatan jadwal membuat kesempatan partisipasi lebih setara.

Pembahasan setiap opsi:
A (3 poin) karena menyampaikan hasil kepada yang absen, tetapi tidak membuka ruang kontribusi mereka sebelum keputusan dibuat.
B (2 poin) karena mengutamakan kemudahan mayoritas, tetapi memindahkan beban adaptasi hanya kepada kelompok lebih kecil.
C (1 poin) karena memudahkan penyelenggaraan, tetapi menyimpulkan keterwakilan berdasarkan kehadiran tanpa memastikan kelompok lain didengar.
D (4 poin) karena memberi fleksibilitas melalui dua pilihan, tetapi penentuan wakil belum tentu mencerminkan kesempatan warga secara luas.
E (5 poin): Paling tepat; alasannya ada pada penjelasan di atas.

Cara cepat: Saat tradisi atau kebiasaan berbeda, cari pengaturan bersama yang membuka kesempatan berpartisipasi secara setara.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tryout-ref-06-19 · Nynda - TKP 1_Done Input.docx, soal 19
      {
        nomor: 20,
        tipe: 'skala',
        pertanyaan: `Tim Anda menghadapi tenggat laporan pada hari yang sama dengan perayaan keagamaan seorang rekan. Ia telah meminta izin jauh hari, tetapi satu anggota lain mendadak sakit sehingga jadwal piket menjadi kosong. Bagian rekan tersebut sudah selesai dan hanya diperlukan petugas untuk memantau pengiriman laporan. Sikap Anda adalah ...`,
        opsi: [
          { label: 'A', teks: `Meminta rekan tersebut tetap piket sampai laporan terkirim, kemudian memberinya waktu pengganti untuk menjalankan kegiatan keagamaan lain.` },
          { label: 'B', teks: `Mengizinkan rekan pergi dan membagi pemantauan kepada seluruh anggota tanpa mengubah pembagian tugas lain yang sudah ditetapkan.` },
          { label: 'C', teks: `Mengatur pengganti piket secara sukarela dan memastikan panduan pemantauan tersedia agar izin rekan tetap dapat digunakan.` },
          { label: 'D', teks: `Menyampaikan kondisi tim kepada rekan tersebut dan membiarkannya menentukan sendiri apakah akan membatalkan izin atau tidak.` },
          { label: 'E', teks: `Meminta atasan menetapkan petugas pengganti agar keputusan tidak menimbulkan keberatan di antara anggota tim lainnya.` },
        ],
        kunci: 'C',
        pembahasan: `Konsep yang digunakan: Penghormatan hak beribadah melalui pengaturan kerja yang sukarela, jelas, dan menjaga kesinambungan tugas
Kata kunci: hari besar keagamaan, izin, piket kosong, pengganti sukarela, panduan pemantauan
Opsi C (5 Poin) paling tepat karena izin yang telah direncanakan tetap dihormati dan kebutuhan tim dipenuhi melalui penggantian yang disepakati. Panduan kerja mencegah petugas pengganti kehilangan informasi penting.
Solusi tidak menempatkan rekan pada tekanan untuk memilih antara keyakinan dan tugas yang sebenarnya dapat dialihkan secara wajar.

Pembahasan setiap opsi:
A (1 poin): Tugas tetap terjaga, tetapi waktu pengganti tidak selalu setara dengan kesempatan menjalankan perayaan pada hari yang telah ditentukan.
B (4 poin): Membagi pemantauan menjaga izin rekan, tetapi penambahan tugas tanpa kesepakatan dapat membebani anggota lain secara tidak adil.
C (5 poin): Paling tepat; alasannya ada pada penjelasan di atas.
D (3 poin): Memberi pilihan tampak menghargai rekan, tetapi kondisi tim dapat membuatnya merasa terpaksa membatalkan haknya sendiri.
E (2 poin): Keputusan atasan memberi dasar formal, tetapi eskalasi dilakukan sebelum tim mencoba pengaturan sukarela yang sederhana.

Cara cepat: Hormati kebutuhan ibadah dengan penggantian yang disepakati dan serah terima yang membuat pekerjaan tetap berjalan.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      // tryout-ref-06-21 · Nynda - TKP 1_Done Input.docx, soal 21
      {
        nomor: 21,
        tipe: 'skala',
        pertanyaan: `Dalam rapat tim multietnis, tiga anggota beberapa kali menggunakan bahasa daerah saat membahas rincian pekerjaan. Anggota lain tidak memahami percakapan dan melewatkan satu perubahan pembagian tugas. Ketiga anggota tersebut mengaku terbawa kebiasaan, bukan bermaksud menutup informasi. Sebagai moderator, Anda ...`,
        opsi: [
          { label: 'A', teks: `Mengingatkan penggunaan Bahasa Indonesia untuk pembahasan kerja dan mengulang perubahan tugas agar seluruh anggota memberi konfirmasi.` },
          { label: 'B', teks: `Membahas masalah itu secara pribadi setelah rapat dan mengirim ringkasan tertulis kepada anggota yang tidak memahami bahasa daerah.` },
          { label: 'C', teks: `Meminta salah satu anggota yang memahami kedua bahasa menjadi penerjemah selama rapat agar percakapan tetap terasa alami.` },
          { label: 'D', teks: `Meminta mereka menerjemahkan setiap percakapan daerah setelah selesai agar anggota lain dapat mengikuti pembahasan yang telah berlangsung.` },
          { label: 'E', teks: `Mencatat aturan penggunaan bahasa dalam notulen dan membiarkan rapat berlanjut supaya teguran tidak mengganggu suasana tim.` },
        ],
        kunci: 'A',
        pembahasan: `Konsep yang digunakan: Komunikasi inklusif dalam forum resmi melalui bahasa bersama dan konfirmasi pemahaman seluruh anggota
Kata kunci: tim multietnis, bahasa daerah, informasi kerja, Bahasa Indonesia, konfirmasi tugas
Opsi A (5 Poin) paling tepat karena hambatan komunikasi dihentikan pada saat terjadi dan informasi penting diulang untuk memastikan kesamaan pemahaman. Pengingat berlaku pada forum kerja, bukan melarang penggunaan bahasa daerah di luar konteks tersebut.
Konfirmasi anggota diperlukan karena satu perubahan tugas sudah terlewat, sehingga sekadar mengubah bahasa untuk pembahasan berikutnya belum cukup.

Pembahasan setiap opsi:
A (5 poin): Paling tepat; alasannya ada pada penjelasan di atas.
B (2 poin): Pendekatan pribadi menjaga perasaan anggota, tetapi koreksi setelah rapat terlambat untuk mencegah salah pemahaman saat keputusan dibuat.
C (3 poin): Penerjemah membuat isi dapat dipahami, tetapi menciptakan ketergantungan padahal seluruh anggota dapat memakai bahasa bersama.
D (4 poin): Terjemahan membantu anggota lain, tetapi informasi baru diterima setelah percakapan berlangsung dan partisipasi tetap tidak setara.
E (1 poin): Pencatatan aturan memberi rujukan, tetapi membiarkan rapat berjalan mempertahankan hambatan yang sudah menimbulkan kesalahan informasi.

Cara cepat: Dalam forum resmi, gunakan bahasa yang dipahami semua pihak dan ulangi keputusan bila ada anggota yang sempat tertinggal.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      // tryout-ref-07-20 · Wil - TKP 1_Done Input.docx, soal 20
      {
        nomor: 22,
        tipe: 'skala',
        pertanyaan: `Unit pelatihan kerja membuka kelas pemulihan ekonomi pascakekeringan bagi pemuda penyandang disabilitas dan peserta lain. Beberapa instruktur mengusulkan pemisahan seluruh praktik karena memperkirakan ritme belajar berbeda, meski kebutuhan individu dan alat belum diperiksa. Kelas harus dimulai minggu depan. Tindakan Anda adalah ...`,
        opsi: [
          { label: 'A', teks: `Memberikan pilihan pembelajaran bersama atau mandiri tanpa pemeriksaan kebutuhan alat, sehingga seluruh peserta menentukan bentuk yang mereka inginkan.` },
          { label: 'B', teks: `Mengadakan pembelajaran bersama dengan penyesuaian alat dan dukungan sesuai kebutuhan individu, sambil memantau capaian keterampilan secara setara.` },
          { label: 'C', teks: `Menetapkan satu metode dan alat yang sama bagi semua peserta supaya penilaian terlihat konsisten dan waktu kegiatan tidak bertambah.` },
          { label: 'D', teks: `Meminta peserta yang memerlukan penyesuaian mengikuti kelas berikutnya setelah alat khusus tersedia lengkap, sementara kelas sekarang berjalan.` },
          { label: 'E', teks: `Menggabungkan peserta pada bagian teori, lalu menyiapkan praktik terpisah untuk kelompok disabilitas agar instruktur dapat mengatur kecepatan.` },
        ],
        kunci: 'B',
        pembahasan: `Konsep yang digunakan: Inklusivitas, akomodasi sesuai kebutuhan, hak memilih, hasil belajar
Kata kunci: Kelas keterampilan, disabilitas, alat praktik, penyesuaian, kesetaraan
Opsi B (5 poin) paling tepat karena tujuan pelatihan ialah penguasaan keterampilan bagi semua peserta, bukan penyeragaman cara belajar. Pembelajaran bersama dapat tetap berjalan ketika alat dan dukungan disesuaikan berdasarkan kebutuhan nyata dan capaian dinilai dengan kriteria kompetensi yang setara.

Pembahasan setiap opsi:
A (3 poin) karena peserta mendapat otonomi memilih cara belajar, tetapi hambatan alat tidak dipetakan sehingga pilihan bisa tidak benar-benar dapat diakses.
B (5 poin): Paling tepat; alasannya ada pada penjelasan di atas.
C (2 poin) karena aturan terlihat sama untuk semua, tetapi kebutuhan akomodasi yang sah tidak diperhatikan dan sebagian peserta dirugikan.
D (1 poin) karena ketersediaan alat dipertimbangkan, tetapi partisipasi ditunda tanpa mencoba akomodasi yang mungkin diterapkan sekarang.
E (4 poin) karena sebagian kegiatan tetap inklusif serta instruktur memperhatikan tempo, tetapi pemisahan seluruh praktik didasarkan pada kategori kelompok, bukan kebutuhan individu.

Cara cepat: Keadilan pelatihan berarti tujuan kompetensi setara dengan dukungan yang sesuai kebutuhan, bukan semua peserta harus memakai cara identik.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      // tryout-ref-08-21 · Wil - TKP 2_Done Input.docx, soal 21
      {
        nomor: 23,
        tipe: 'skala',
        pertanyaan: `Maruli mendampingi alokasi kios saat renovasi pasar. Pesan berantai menuduh pedagang pendatang akan mendapat tempat lebih sedikit meski keputusan belum dibuat. Pedagang lama meminta prioritas berdasarkan masa berdagang, sementara pedagang baru menuntut kesempatan setara. Musyawarah berlangsung besok dan ketegangan meningkat. Maruli harus meluruskan informasi serta menjaga proses yang adil. Tindakan Maruli adalah ...`,
        opsi: [
          { label: 'A', teks: `Menyusun daftar pembagian kios berdasarkan usulan mayoritas pedagang yang hadir agar isu cepat selesai meskipun kriteria resmi belum disepakati.` },
          { label: 'B', teks: `Meminta pedagang menunggu musyawarah resmi sambil menyebarkan klarifikasi singkat bahwa dokumen kios belum final agar kabar yang beredar tidak berkembang.` },
          { label: 'C', teks: `Mendorong tokoh pasar menyelesaikan ketegangan secara informal dan membiarkan tim teknis bekerja sehingga proses renovasi tidak terhambat perdebatan.` },
          { label: 'D', teks: `Mengundang perwakilan pedagang lama lebih dahulu untuk memperoleh dukungan terhadap rancangan, kemudian menyampaikan hasilnya kepada pendatang.` },
          { label: 'E', teks: `Mengklarifikasi bahwa pembagian kios belum ditetapkan dan membuka pembahasan kriteria alokasi yang setara, seraya mendengar pedagang lama dan pendatang.` },
        ],
        kunci: 'E',
        pembahasan: `Konsep yang digunakan: Resolusi konflik sosial, keterbukaan, serta musyawarah yang adil.
Kata kunci: Rumor alokasi kios, pedagang pendatang, kriteria, ketegangan, konsultasi.
Opsi E (5 poin) paling tepat karena memisahkan rumor dari fakta yang dapat diverifikasi sekaligus membangun proses penetapan yang dapat dipercaya semua pihak. Informasi tentang kriteria perlu disampaikan sebelum keputusan final agar masukan tidak sekadar formalitas. Akses yang setara membantu mencegah ketegangan berkembang menjadi diskriminasi.

Pembahasan setiap opsi:
A (1 poin) karena mempercepat keputusan berdasarkan suara mayoritas, tetapi tidak menjamin hak seluruh pedagang ataupun dasar alokasi yang adil.
B (4 poin) karena meredakan rumor dengan fakta bahwa rancangan belum final, tetapi belum membuka pembahasan tentang kriteria dan kesempatan memberi masukan.
C (2 poin) karena menghindari perdebatan terbuka, tetapi menyerahkan penanganan ketegangan pada tokoh informal tanpa kejelasan informasi resmi.
D (3 poin) karena berusaha membangun dukungan awal, tetapi konsultasi hanya kepada sebagian pedagang dapat menambah kecurigaan kelompok lain.
E (5 poin): Paling tepat; alasannya ada pada penjelasan di atas.

Cara cepat: Pada konflik berbasis kabar berantai, validasi fakta dan proses keputusan terbuka lebih penting daripada sekadar meredam percakapan.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      // tryout-ref-08-24 · Wil - TKP 2_Done Input.docx, soal 24
      {
        nomor: 24,
        tipe: 'skala',
        pertanyaan: `Dua kampung memakai nama lokal berbeda untuk satu jalan wisata; peta pemerintah menggunakan nama administratif. Pengunjung sering salah arah akibat petunjuk lisan tidak cocok dengan papan. Tim desa ingin menghargai identitas lokal dan menjaga petunjuk akurat. Sikap Anda adalah ...`,
        opsi: [
          { label: 'A', teks: `Menyepakati pemakaian dua sebutan lokal secara bergantian pada papan di lokasi berbeda dan meminta petugas wisata menjelaskan keterkaitannya.` },
          { label: 'B', teks: `Menerapkan nama administratif saja karena sudah memiliki dasar dokumen resmi, lalu memberikan penjelasan lisan ketika wisatawan mengalami kebingungan.` },
          { label: 'C', teks: `Mengutamakan sebutan kampung yang paling banyak dihuni penduduk untuk memperpendek tulisan serta memudahkan pembuatan papan petunjuk.` },
          { label: 'D', teks: `Mencantumkan nama administratif dan dua sebutan lokal yang telah dikonfirmasi pada papan arah di setiap persimpangan utama secara konsisten.` },
          { label: 'E', teks: `Mengganti seluruh nama administratif pada papan menjadi sebutan lokal yang paling terkenal agar wisatawan lebih dekat dengan kebiasaan masyarakat.` },
        ],
        kunci: 'D',
        pembahasan: `Konsep yang digunakan: Resolusi konflik sosial, keterbukaan, serta musyawarah yang adil.
Kata kunci: Nama jalan, dua kampung, identitas lokal, rujukan administratif, wisatawan.
Opsi D (5 poin) paling tepat karena menghormati penggunaan nama lokal tanpa menyingkirkan rujukan administratif yang dibutuhkan untuk kepastian lokasi. Konfirmasi kepada dua kampung menghindarkan kesan bahwa salah satu identitas lebih diutamakan. Petunjuk menjadi berguna bagi penduduk dan pendatang.

Pembahasan setiap opsi:
A (4 poin) karena mengakui kedua sebutan, tetapi pergantian nama antar-papan tanpa rujukan bersama bisa membingungkan pengunjung.
B (3 poin) karena menjaga akurasi administratif, tetapi melewatkan kebutuhan wisatawan memahami sebutan yang digunakan warga setempat.
C (2 poin) karena mengutamakan keterbacaan, tetapi jumlah penduduk bukan dasar yang tepat untuk menyingkirkan identitas kampung lain.
D (5 poin): Paling tepat; alasannya ada pada penjelasan di atas.
E (1 poin) karena mempermudah pengenalan lokal, tetapi mengganti nama resmi secara sepihak berisiko menimbulkan ketidakpastian lokasi.

Cara cepat: Satukan rujukan resmi dengan pengetahuan masyarakat jika keduanya diperlukan untuk pelayanan yang jelas dan inklusif.`,
        tingkat: 'sulit',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Teknologi Informasi dan Komunikasi` },
    soal: [
      // tryout-ref-07-27 · Wil - TKP 1_Done Input.docx, soal 27
      {
        nomor: 25,
        tipe: 'skala',
        pertanyaan: `Kantor memakai templat otomatis untuk surat koordinasi karhutla. Dua ASN belum memahami cara mengganti tanggal dan lokasi, padahal modul tersedia dan undangan harus siap sore ini. Respons Anda adalah ...`,
        opsi: [
          { label: 'A', teks: `Memperagakan satu surat di lingkungan uji dan membagikan contoh yang dapat ditiru peserta, tetapi tidak memeriksa kemampuan mereka secara mandiri.` },
          { label: 'B', teks: `Menyarankan mereka memakai surat manual sampai fitur otomatis lebih familiar karena kekeliruan tanggal bisa memengaruhi undangan resmi.` },
          { label: 'C', teks: `Membagikan modul latihan dan meminta mereka mengikuti petunjuk mandiri, sambil menawarkan konsultasi apabila nanti mengalami hambatan.` },
          { label: 'D', teks: `Membuatkan semua surat selama masa adaptasi sehingga rekan tetap produktif sambil menyaksikan bagaimana templat otomatis digunakan.` },
          { label: 'E', teks: `Mendampingi mereka berlatih di lingkungan uji sampai dapat mengubah kolom penting sendiri kemudian menunjukkan petunjuk yang bisa dibaca ulang.` },
        ],
        kunci: 'E',
        pembahasan: `Konsep yang digunakan: Adaptasi teknologi, penguatan kemandirian, pelatihan berbasis praktik
Kata kunci: Templat undangan karhutla, pelatihan mandiri, pengaturan tanggal dan tempat.
Opsi E (5 poin) paling tepat karena kendala terletak pada keterampilan sederhana yang dapat dilatih tanpa risiko terhadap surat resmi. Praktik langsung dan petunjuk ulang membantu rekan menguasai fitur, bukan terus bergantung pada bantuan orang lain.

Pembahasan setiap opsi:
A (4 poin) karena contoh dikerjakan dengan benar dan tersedia sebagai rujukan, tetapi kemampuan rekan memakai fitur belum dipastikan melalui praktik mandiri.
B (1 poin) karena kesalahan sementara dihindari, tetapi alat latihan yang aman tidak dimanfaatkan dan proses adaptasi justru ditunda.
C (3 poin) karena modul dan bantuan tersedia, namun hambatan yang sudah diketahui belum dibantu langsung dalam latihan.
D (2 poin) karena pekerjaan tetap berjalan, tetapi tugas dikerjakan oleh orang lain sehingga proses belajar rekan menjadi pasif.
E (5 poin): Paling tepat; alasannya ada pada penjelasan di atas.

Cara cepat: Gunakan lingkungan aman untuk membangun kemampuan mandiri, bukan hanya membagikan modul atau mengambil alih tugas.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tryout-ref-08-29 · Wil - TKP 2_Done Input.docx, soal 29
      {
        nomor: 26,
        tipe: 'skala',
        pertanyaan: `Kantor mulai memakai aplikasi surat-menyurat baru. Sebagian pegawai kesulitan mencari menu dan menyimpan berkas saat uji coba, sedangkan surat penting tetap harus diproses tepat waktu. Tindakan Anda adalah ...`,
        opsi: [
          { label: 'A', teks: `Menawarkan untuk mengerjakan surat mereka selama masa uji coba agar pelayanan kantor tidak melambat ketika aplikasi baru dikenalkan.` },
          { label: 'B', teks: `Membantu rekan mempraktikkan surat rutin lewat aplikasi baru dan menyusun panduan dari kendala selama uji coba.` },
          { label: 'C', teks: `Mengirim tautan panduan resmi beserta jadwal pendampingan, lalu meminta rekan mempelajarinya sendiri sesuai waktu yang tersedia.` },
          { label: 'D', teks: `Mengusulkan kepada pimpinan untuk menunda penggantian aplikasi sampai setiap pegawai menyatakan siap tanpa batas waktu tertentu untuk pelaksanaan.` },
          { label: 'E', teks: `Menganjurkan rekan tetap memakai aplikasi lama pada sebagian besar tugas karena sudah terbiasa dan mempelajari sistem baru saat pekerjaan berkurang.` },
        ],
        kunci: 'B',
        pembahasan: `Konsep yang digunakan: Adaptasi teknologi, pembelajaran bertahap, dan manajemen perubahan.
Kata kunci: Aplikasi baru, pegawai kesulitan, uji coba, pendampingan, pembelajaran.
Opsi B (5 poin) paling tepat karena menjadikan adaptasi teknologi sebagai proses latihan bersama yang relevan dengan pekerjaan. Petunjuk praktis dan pencatatan kesulitan membantu pegawai belajar bertahap. Dukungan tidak berarti mengambil alih seluruh tugas mereka.

Pembahasan setiap opsi:
A (3 poin) karena menjaga kelancaran pekerjaan sementara, tetapi membuat ketergantungan dan menghambat rekan menguasai aplikasi.
B (5 poin): Paling tepat; alasannya ada pada penjelasan di atas.
C (4 poin) karena mengarahkan rekan kepada fasilitas belajar yang tersedia, tetapi belum membantu menerjemahkan panduan ke tugas harian.
D (2 poin) karena menghormati kesiapan pegawai, tetapi penundaan tanpa rencana dapat menghambat transisi seluruh kantor.
E (1 poin) karena mengurangi tekanan belajar, tetapi menunda adaptasi hingga mendekati penghentian sistem lama.

Cara cepat: Adaptasi efektif memadukan latihan pada tugas nyata, dukungan rekan, dan pencatatan kendala untuk perbaikan.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tryout-ref-08-28 · Wil - TKP 2_Done Input.docx, soal 28
      {
        nomor: 27,
        tipe: 'skala',
        pertanyaan: `Uji aplikasi pelaporan berhasil di kantor pusat, tetapi petugas lapangan sulit mengirim data di daerah bersinyal lemah. Laporan kertas akan dihentikan bulan depan. Migrasi penuh berisiko menghilangkan catatan lapangan, sementara penundaan total menghambat unit yang siap. Anda harus menjaga data dan menentukan transisi yang proporsional antarwilayah. Keputusan Anda adalah ...`,
        opsi: [
          { label: 'A', teks: `Mengeluarkan wilayah sulit sinyal dari pelaporan rutin sementara waktu agar penilaian keberhasilan aplikasi baru tidak terganggu oleh kendala teknis.` },
          { label: 'B', teks: `Mengarahkan petugas lapangan datang ke kantor terdekat yang memiliki jaringan pada akhir setiap kegiatan dan menyediakan daftar kantor yang dapat digunakan.` },
          { label: 'C', teks: `Menerapkan aplikasi serentak sesuai keputusan pimpinan, tetapi memberikan toleransi keterlambatan khusus kepada petugas yang bekerja di wilayah sulit sinyal.` },
          { label: 'D', teks: `Mengusulkan uji coba bertahap di wilayah sulit sinyal dengan prosedur pelaporan sementara yang sah dan indikator kesiapan sebelum aplikasi dipakai penuh.` },
          { label: 'E', teks: `Mempertahankan semua laporan cetak sampai jaringan membaik karena kegagalan di wilayah tertentu menunjukkan aplikasi belum layak dipakai di seluruh instansi.` },
        ],
        kunci: 'D',
        pembahasan: `Konsep yang digunakan: Adaptasi teknologi, pembelajaran bertahap, dan manajemen perubahan.
Kata kunci: Aplikasi pelaporan, pusat berhasil, sinyal terbatas, penerapan serentak, fase uji.
Opsi D (5 poin) paling tepat karena menilai keberhasilan teknologi berdasarkan seluruh kondisi pengguna, bukan hanya pegawai kantor pusat. Mekanisme alternatif yang sah menjaga pelaporan berjalan sambil mengumpulkan data tentang kendala nyata. Target transisi ditentukan dari hasil uji, bukan hanya batas waktu administratif.

Pembahasan setiap opsi:
A (1 poin) karena meningkatkan angka keberhasilan di atas kertas, tetapi menghilangkan pelaporan wilayah yang justru memerlukan dukungan khusus.
B (3 poin) karena menyediakan titik jaringan alternatif, tetapi perjalanan tambahan dapat mengganggu pekerjaan dan belum tentu memungkinkan di semua wilayah.
C (4 poin) karena mematuhi kebijakan dan mengurangi tekanan tenggat, tetapi belum menyediakan cara agar laporan tetap masuk ketika konektivitas tidak tersedia.
D (5 poin): Paling tepat; alasannya ada pada penjelasan di atas.
E (2 poin) karena melindungi layanan lapangan, tetapi menunda seluruh modernisasi tanpa menguji jalur penerapan yang memungkinkan.

Cara cepat: Perubahan teknologi harus diuji pada kondisi pengguna paling terbatas, dengan alternatif dan ukuran keberhasilan yang jelas.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      // tryout-ref-06-27 · Nynda - TKP 1_Done Input.docx, soal 27
      {
        nomor: 28,
        tipe: 'skala',
        pertanyaan: `Server pelayanan mengalami gangguan ketika antrean sedang padat. Tim TIK meminta contoh waktu kejadian dan pesan galat untuk penelusuran. SOP menyediakan formulir cadangan, tetapi transaksi baru boleh disahkan setelah sistem pulih. Warga membutuhkan kepastian mengenai berkas yang sudah diserahkan. Tindakan Anda adalah ...`,
        opsi: [
          { label: 'A', teks: `Memprioritaskan pencatatan warga dengan kebutuhan mendesak dan meminta pemohon lain kembali setelah sistem dinyatakan normal.` },
          { label: 'B', teks: `Mengumumkan gangguan kepada warga serta membagikan nomor kontak layanan agar mereka dapat menanyakan perkembangan secara berkala.` },
          { label: 'C', teks: `Mengirim laporan gangguan kepada tim TIK dan meminta warga menunggu sampai tersedia perkiraan waktu pemulihan sistem.` },
          { label: 'D', teks: `Menerima seluruh berkas secara manual dan mengesahkan transaksi berdasarkan kelengkapan dokumen agar antrean tetap bergerak.` },
          { label: 'E', teks: `Mencatat detail galat untuk tim TIK sambil memakai formulir cadangan dan tanda terima sebagai jejak tindak lanjut.` },
        ],
        kunci: 'E',
        pembahasan: `Konsep yang digunakan: Penanganan gangguan sistem melalui pelaporan teknis terstruktur, prosedur cadangan, dan jejak tindak lanjut
Kata kunci: server down, pesan galat, tim TIK, formulir cadangan, tanda terima
Opsi E (5 Poin) paling tepat karena tim TIK memperoleh informasi yang diperlukan untuk diagnosis dan layanan tetap berjalan melalui mekanisme cadangan. Tanda terima memberi bukti bahwa berkas telah diterima serta akan dilanjutkan setelah sistem pulih.
Petugas tidak mengesahkan transaksi di luar sistem, sehingga kesinambungan layanan tetap sejalan dengan batas kewenangan.

Pembahasan setiap opsi:
A (2 poin): Prioritas kebutuhan mendesak cukup responsif, tetapi pemohon lain dibebani untuk kembali padahal formulir cadangan tersedia.
B (4 poin): Pengumuman dan nomor kontak memberi informasi, tetapi belum mencatat berkas atau menyediakan jejak tindak lanjut individual.
C (3 poin): Pelaporan kepada tim TIK sudah tepat, tetapi warga dibiarkan menunggu tanpa pencatatan cadangan atau bukti penerimaan.
D (1 poin): Pengesahan manual mempercepat antrean, tetapi melampaui SOP karena transaksi harus menunggu sistem kembali berfungsi.
E (5 poin): Paling tepat; alasannya ada pada penjelasan di atas.

Cara cepat: Saat sistem gagal, kirim detail teknis, aktifkan prosedur cadangan, dan berikan bukti tindak lanjut kepada pengguna.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      // tryout-ref-07-30 · Wil - TKP 1_Done Input.docx, soal 30
      {
        nomor: 29,
        tipe: 'skala',
        pertanyaan: `Tim komunikasi memakai AI untuk menyusun edaran pendaftaran layanan digital. Draf memuat kewajiban mengunggah dokumen identitas ke situs yang belum ada dalam ketentuan instansi, sedangkan edaran harus terbit hari ini. Tim menyatakan kalimat itu berasal dari alat otomatis, bukan dari keputusan manusia. Sebagai pemeriksa substansi, Anda harus menjaga batas kewenangan dan ketepatan informasi. Tindakan Anda adalah ...`,
        opsi: [
          { label: 'A', teks: `Mengirim surat berdasarkan draf AI dengan menambahkan catatan bahwa pegawai boleh meminta klarifikasi mengenai ketentuan yang tercantum.` },
          { label: 'B', teks: `Menyerahkan keputusan sepenuhnya kepada tim komunikasi karena mereka bertanggung jawab atas bahasa dan penerbitan surat dinas.` },
          { label: 'C', teks: `Menahan edaran, menguji dasar aturan bersama unit berwenang dan menyusun ulang hanya ketentuan yang sah sebelum dokumen disetujui untuk diedarkan.` },
          { label: 'D', teks: `Menghapus klaim yang tidak ditemukan sumbernya, lalu meminta unit terkait meninjau isi lain yang masih relevan sebelum penetapan edaran.` },
          { label: 'E', teks: `Mengirim edaran sementara dengan catatan bahwa pegawai dapat melaporkan kesalahan isi melalui saluran umpan balik kantor.` },
        ],
        kunci: 'C',
        pembahasan: `Konsep yang digunakan: Etika penggunaan AI, verifikasi regulasi, kewenangan, keamanan data
Kata kunci: AI penyusun surat, dasar aturan tak ditemukan, dokumen identitas, publikasi
Opsi C (5 poin) paling tepat karena draf hasil AI tidak membuktikan adanya dasar kewajiban administratif. Klaim yang meminta dokumen identitas memiliki dampak serius bila keliru. Sebelum diterbitkan, dasar hukumnya harus diverifikasi dengan pihak berwenang dan naskah diperbaiki sesuai ketentuan yang benar.

Pembahasan setiap opsi:
A (1 poin) karena klarifikasi dibuka setelah penyebaran, tetapi pegawai dapat telanjur mengikuti klaim yang tidak didukung aturan.
B (2 poin) karena peran tim komunikasi diakui, namun akurasi norma dan dasar kewenangan tidak bisa dialihkan hanya karena mereka menerbitkan surat.
C (5 poin): Paling tepat; alasannya ada pada penjelasan di atas.
D (4 poin) karena ketentuan tanpa sumber dihapus dan peninjauan substansi dilakukan, tetapi verifikasi terhadap ketentuan yang mungkin tetap berlaku belum secara eksplisit diarahkan ke unit yang berwenang.
E (3 poin) karena penerbitan sementara mempercepat informasi, tetapi kewajiban yang belum terverifikasi dapat segera memengaruhi perilaku pegawai.

Cara cepat: Perlakukan keluaran AI sebagai draf yang harus diverifikasi, khususnya ketika memuat kewajiban dan data pribadi.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      // tryout-ref-06-25 · Nynda - TKP 1_Done Input.docx, soal 25
      {
        nomor: 30,
        tipe: 'skala',
        pertanyaan: `Instansi mulai memakai aplikasi terpadu dan menghentikan pencatatan manual dalam dua minggu. Beberapa pegawai senior masih kesulitan melakukan migrasi data, sedangkan panduan resmi hanya berupa video panjang. Anda telah memahami fungsi dasar aplikasi, tetapi juga memiliki target kerja harian. Tindakan Anda adalah ...`,
        opsi: [
          { label: 'A', teks: `Membantu memasukkan data milik pegawai senior sampai masa transisi selesai agar pekerjaan unit tidak mengalami keterlambatan.` },
          { label: 'B', teks: `Menyarankan pegawai senior menonton kembali video resmi serta mencatat bagian yang belum dipahami untuk ditanyakan kepada unit TIK.` },
          { label: 'C', teks: `Mengumpulkan pertanyaan rekan dan meneruskannya kepada pengelola aplikasi supaya jawaban teknis tersedia bagi seluruh pegawai.` },
          { label: 'D', teks: `Membuat panduan singkat dari fungsi yang sering digunakan dan mengadakan sesi latihan terjadwal tanpa mengabaikan target kerja tim.` },
          { label: 'E', teks: `Meminta pimpinan memperpanjang penggunaan cara manual bagi pegawai yang belum mahir sampai pelatihan resmi diselenggarakan.` },
        ],
        kunci: 'D',
        pembahasan: `Konsep yang digunakan: Adaptasi sistem baru melalui pembelajaran mandiri, penyederhanaan panduan, dan pendampingan yang membangun kemandirian
Kata kunci: aplikasi terpadu, migrasi data, pegawai senior, panduan singkat, sesi latihan
Opsi D (5 Poin) paling tepat karena bantuan disusun berdasarkan kebutuhan nyata dan diberikan secara terjadwal sehingga rekan belajar menggunakan sistem sendiri. Target kerja tetap dijaga melalui pengaturan waktu.
Pendampingan tidak berubah menjadi pengambilalihan pekerjaan, sementara transisi digital tetap mengikuti batas waktu instansi.

Pembahasan setiap opsi:
A (2 poin): Mengambil alih input menjaga kecepatan sementara, tetapi membuat rekan bergantung dan tidak meningkatkan kemampuan penggunaan aplikasi.
B (3 poin): Video dan pencatatan pertanyaan mendukung belajar mandiri, tetapi belum mengatasi kesulitan penggunaan yang membutuhkan praktik langsung.
C (4 poin): Pengumpulan pertanyaan menghasilkan informasi bersama, tetapi belum memastikan rekan mampu menerapkan jawaban pada pekerjaannya.
D (5 poin): Paling tepat; alasannya ada pada penjelasan di atas.
E (1 poin): Perpanjangan cara manual memberi waktu belajar, tetapi menghambat integrasi dan membuat proses ganda yang tidak diperlukan.

Cara cepat: Dukung transisi teknologi dengan latihan praktis yang membuat pengguna mandiri tanpa mengabaikan pekerjaan utama.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      // tryout-ref-08-30 · Wil - TKP 2_Done Input.docx, soal 30
      {
        nomor: 31,
        tipe: 'skala',
        pertanyaan: `Anda menyatukan laporan persediaan obat dari tiga puskesmas. Dua unit memakai sistem daring, sedangkan satu mengirim lembar kerja mingguan dengan format tanggal berbeda. Rekap menunjukkan selisih stok yang bisa mengganggu pemesanan obat bulan depan. Tindakan Anda adalah ...`,
        opsi: [
          { label: 'A', teks: `Menggunakan laporan sistem daring sebagai rujukan utama, sementara berkas mingguan dilampirkan untuk pemeriksaan akhir.` },
          { label: 'B', teks: `Mewajibkan unit yang memakai spreadsheet mengganti perangkat pelaporannya sebelum laporan dapat digabung dengan dua sistem daring.` },
          { label: 'C', teks: `Meminta tiga puskesmas mengecek contoh transaksi dan menyamakan format tanggal sebelum rekap stok digabung dan selisihnya dikonfirmasi.` },
          { label: 'D', teks: `Mengubah semua tanggal ke format yang sama menggunakan aplikasi, kemudian mengirimkan hasil penggabungan beserta catatan mengenai sumber data.` },
          { label: 'E', teks: `Menyusun total persediaan tanpa memperhatikan tanggal penerimaan agar laporan dapat dikirim cepat, lalu memeriksa periode transaksi bila ada selisih.` },
        ],
        kunci: 'C',
        pembahasan: `Konsep yang digunakan: Penggunaan TIK yang tepat guna, validasi data, dan integrasi informasi.
Kata kunci: Persediaan obat, format tanggal, integrasi data, validasi contoh transaksi.
Opsi C (5 poin) paling tepat karena memastikan kesamaan format bermakna sama sebelum data digabung. Konversi otomatis dapat menghasilkan tanggal keliru jika asal format tidak dikenali dengan benar. Konfirmasi bersama unit sumber menjaga ketepatan stok dan keputusan distribusi.

Pembahasan setiap opsi:
A (3 poin) karena mengutamakan data daring yang lebih cepat, tetapi tidak membuktikan data dari unit ketiga kurang akurat.
B (2 poin) karena mendorong pembaruan perangkat, tetapi menjadikan pilihan teknologi sebagai syarat tanpa menyelesaikan kesalahan format yang ada.
C (5 poin): Paling tepat; alasannya ada pada penjelasan di atas.
D (4 poin) karena memanfaatkan otomasi dan transparansi sumber, tetapi konversi tanpa uji contoh dapat tetap menghasilkan tanggal salah.
E (1 poin) karena mempercepat angka total, tetapi menghilangkan informasi waktu yang diperlukan untuk menelusuri pergerakan persediaan.

Cara cepat: Saat menggabungkan sistem berbeda, periksa arti dan mutu data sebelum mempercepat proses pengolahannya.`,
        tingkat: 'sulit',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Profesionalisme` },
    soal: [
      // tryout-ref-07-38 · Wil - TKP 1_Done Input.docx, soal 38
      {
        nomor: 32,
        tipe: 'skala',
        pertanyaan: `Seorang pemasok yang masih dinilai menyerahkan bingkisan makanan kepada Anda dan dua pemeriksa lain sebagai tanda terima kasih. Hasil penilaian diumumkan besok. Tim belum menyepakati cara menangani pemberian tersebut. Sikap Anda adalah ...`,
        opsi: [
          { label: 'A', teks: `Membagikan bingkisan kepada seluruh petugas agar tidak dinikmati sendiri, kemudian melanjutkan pemeriksaan berkas seperti biasa.` },
          { label: 'B', teks: `Meminta arahan pimpinan tanpa menerima bingkisan terlebih dahulu, tetapi menunda penolakan tegas sampai rapat tim selesai.` },
          { label: 'C', teks: `Menolak pemberian sambil menjelaskan batas etis, tetapi tidak meneruskan informasi kepada pengelola pengendalian gratifikasi unit.` },
          { label: 'D', teks: `Mengembalikan bingkisan setelah hasil penilaian diumumkan, sambil menyimpannya dalam lemari unit agar tidak dipakai secara pribadi.` },
          { label: 'E', teks: `Menolak bingkisan dan mencatat kejadian dalam mekanisme pengendalian gratifikasi agar tim menangani tawaran serupa secara konsisten.` },
        ],
        kunci: 'E',
        pembahasan: `Konsep yang digunakan: Integritas ASN, penolakan gratifikasi terkait jabatan, dan pengendalian konflik kepentingan.
Kata kunci: Hadiah dari peserta dinilai, penolakan, independensi, pencatatan unit.
Opsi E (5 poin) paling tepat karena hadiah dari pihak yang sedang dinilai terkait dengan jabatan dan berpotensi menimbulkan konflik kepentingan. Penolakan menjaga independensi penilaian, sedangkan pencatatan melalui mekanisme internal memungkinkan unit mengetahui pendekatan kepada lebih dari satu pemeriksa. Pelaporan kejadian penolakan merupakan penguatan pengendalian unit, bukan pembenaran untuk menerima bingkisan.

Pembahasan setiap opsi:
A (1 poin) karena manfaat dibagikan kepada banyak orang, tetapi pemberian dari pihak yang dinilai tetap diterima dan dapat menimbulkan kesan keberpihakan.
B (3 poin) karena bingkisan belum diterima dan kehati-hatian terlihat, tetapi keputusan penolakan yang semestinya dapat dilakukan saat itu justru ditunda.
C (4 poin) karena pemberian sudah ditolak secara tegas, tetapi pendekatan kepada beberapa pemeriksa belum dicatat untuk pengendalian yang konsisten di tingkat unit.
D (2 poin) karena bingkisan tidak digunakan, tetapi tetap berada dalam penguasaan tim pada saat peserta masih berkepentingan terhadap hasil penilaian.
E (5 poin): Paling tepat; alasannya ada pada penjelasan di atas.

Cara cepat: Ketika pemberi masih berkepentingan pada hasil penilaian, tolak pemberian dan gunakan prosedur pengendalian unit yang relevan.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tryout-ref-08-34 · Wil - TKP 2_Done Input.docx, soal 34
      {
        nomor: 33,
        tipe: 'skala',
        pertanyaan: `Anda ikut menilai penawaran jasa cetak buku panduan kantor. Salah satu peserta merupakan usaha kerabat dekat Anda, tetapi tidak ada permintaan perlakuan khusus. Penilaian belum dimulai. Tindakan Anda adalah ...`,
        opsi: [
          { label: 'A', teks: `Memberi nilai lebih rendah kepada penawaran kerabat untuk menunjukkan bahwa hubungan pribadi tidak memengaruhi keputusan panitia pengadaan.` },
          { label: 'B', teks: `Mengajukan cuti dari seluruh pekerjaan kantor sampai pengadaan selesai, agar tidak muncul dugaan bahwa Anda memengaruhi keputusan panitia.` },
          { label: 'C', teks: `Tidak ikut menilai penawaran kerabat dan tetap memeriksa peserta lain, lalu memberitahukan pembagian kerja tersebut kepada rekan satu panitia.` },
          { label: 'D', teks: `Menyampaikan hubungan keluarga kepada ketua panitia sejak awal dan mengikuti penetapan resmi mengenai peran Anda dalam proses penilaian.` },
          { label: 'E', teks: `Menjelaskan hubungan keluarga kepada sesama penilai lalu meminta mereka menilai berkas kerabat, berdasarkan kesepakatan informal di tim.` },
        ],
        kunci: 'D',
        pembahasan: `Konsep yang digunakan: Integritas, objektivitas, transparansi, dan pengelolaan konflik kepentingan.
Kata kunci: Hubungan keluarga, penilaian penawaran, potensi konflik kepentingan, keterbukaan, objektivitas.
Opsi D (5 poin) paling tepat karena hubungan keluarga dengan salah satu penawar merupakan potensi konflik kepentingan yang perlu diungkapkan sebelum penilaian dilakukan. Pengungkapan kepada ketua panitia memungkinkan penanganan yang sah, terdokumentasi, dan sesuai pembagian kewenangan. Tindakan tersebut melindungi objektivitas proses, meskipun kerabat tidak pernah meminta perlakuan khusus.

Pembahasan setiap opsi:
A (1 poin) karena bertujuan menunjukkan ketidakberpihakan, tetapi memberikan nilai lebih rendah secara sengaja merupakan manipulasi penilaian yang merugikan peserta pengadaan.
B (2 poin) karena berupaya menghindari pengaruh hubungan pribadi, tetapi meninggalkan seluruh pekerjaan kantor merupakan respons berlebihan terhadap konflik kepentingan yang sebenarnya dapat dikelola secara proporsional.
C (3 poin) karena mengurangi keterlibatan dalam pemeriksaan penawaran kerabat, tetapi penyesuaian tugas dilakukan atas keputusan sendiri tanpa penanganan konflik kepentingan melalui penanggung jawab panitia.
D (5 poin): Paling tepat; alasannya ada pada penjelasan di atas.
E (4 poin) karena mengungkap hubungan keluarga kepada rekan penilai dan mengalihkan pemeriksaan penawaran kerabat, tetapi kesepakatan informal belum memberikan kepastian bahwa penanganan konflik telah ditetapkan secara resmi.

Cara cepat: Apabila terdapat hubungan pribadi dengan pihak yang dinilai, utamakan keterbukaan dan pengelolaan konflik melalui kewenangan yang tepat. Menghindari keterlibatan secara sepihak belum menjamin proses yang akuntabel.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tryout-ref-06-36 · Nynda - TKP 1_Done Input.docx, soal 36
      {
        nomor: 34,
        tipe: 'skala',
        pertanyaan: `Instansi menetapkan format analisis baru berbasis perangkat lunak yang belum Anda kuasai. Draf pertama Anda mendapat kritik tajam karena kurang mendalam, sedangkan pelatihan resmi belum tersedia. Revisi harus selesai dalam lima hari dan seorang analis dari unit lain bersedia memberi arahan singkat. Langkah Anda adalah ...`,
        opsi: [
          { label: 'A', teks: `Membagi revisi dengan rekan yang lebih menguasai perangkat lunak sambil mempelajari langkah yang mereka gunakan pada pekerjaan tersebut.` },
          { label: 'B', teks: `Menjelaskan kepada pimpinan bahwa kualitas draf dipengaruhi belum adanya pelatihan lalu meminta tambahan waktu untuk belajar.` },
          { label: 'C', teks: `Mengubah kritik menjadi rencana belajar mandiri dengan arahan analis dan pengujian hasil revisi sebelum diserahkan.` },
          { label: 'D', teks: `Meminta contoh laporan analis tersebut dan menyesuaikan isi draf Anda dengan formatnya agar revisi selesai lebih cepat.` },
          { label: 'E', teks: `Memperbaiki bagian yang dikritik berdasarkan petunjuk pimpinan dan menunda pembelajaran perangkat lunak sampai pelatihan tersedia.` },
        ],
        kunci: 'C',
        pembahasan: `Konsep yang digunakan: Respons profesional terhadap kritik melalui identifikasi kekurangan, pembelajaran mandiri, konsultasi, dan pemeriksaan kualitas
Kata kunci: format baru, kritik, modul, konsultasi ahli, uji hasil
Opsi C (5 Poin) paling tepat karena kritik diterjemahkan menjadi kebutuhan perbaikan yang jelas dan diikuti pembelajaran dari beberapa sumber. Pengujian hasil memastikan revisi tidak hanya tampak sesuai format, tetapi juga lebih akurat.
Peserta menerima evaluasi tanpa defensif sekaligus membangun kemampuan yang dapat digunakan pada pekerjaan berikutnya.

Pembahasan setiap opsi:
A (4 poin): Kolaborasi dan pengamatan langkah rekan mendukung pembelajaran, tetapi tanggung jawab revisi terbagi dan pemeriksaan mandiri belum jelas.
B (1 poin): Keterbatasan pelatihan merupakan konteks yang benar, tetapi fokus pada alasan belum menunjukkan upaya belajar yang tersedia.
C (5 poin): Paling tepat; alasannya ada pada penjelasan di atas.
D (2 poin): Contoh laporan mempercepat pemahaman, tetapi meniru format belum memastikan peserta menguasai metode atau menghasilkan analisis yang sesuai data.
E (3 poin): Perbaikan sesuai petunjuk menyelesaikan kebutuhan saat ini, tetapi ketergantungan pada arahan akan berulang karena kompetensi tidak dikembangkan.

Cara cepat: Terima kritik sebagai data perbaikan, pelajari kesenjangan kemampuan, dan uji hasil sebelum menyerahkan ulang.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      // tryout-ref-06-33 · Nynda - TKP 1_Done Input.docx, soal 33
      {
        nomor: 35,
        tipe: 'skala',
        pertanyaan: `Setelah mengirim laporan kinerja bulanan, Anda menemukan rumus yang salah sehingga capaian unit terlihat lebih tinggi dari kondisi sebenarnya. Atasan belum menyadarinya dan laporan akan digunakan dalam rapat dua jam lagi. Anda telah menghitung angka yang benar dan mengetahui bagian yang terdampak. Langkah Anda adalah ...`,
        opsi: [
          { label: 'A', teks: `Mengirim versi baru kepada atasan dengan catatan bahwa terdapat pembaruan data tanpa menjelaskan sumber perubahan perhitungan.` },
          { label: 'B', teks: `Menunggu rapat selesai untuk memastikan apakah angka tersebut benar-benar dipakai sebelum mengakui kesalahan perhitungan.` },
          { label: 'C', teks: `Memperbaiki file pada penyimpanan bersama tanpa pemberitahuan agar atasan menggunakan angka terbaru saat rapat dimulai.` },
          { label: 'D', teks: `Memberi tahu atasan tentang kesalahan dan dampaknya sambil menyerahkan versi koreksi yang telah diperiksa sebelum rapat.` },
          { label: 'E', teks: `Menghubungi rekan penyedia data untuk mengonfirmasi angka lalu meminta atasan menunda pembahasan sampai pemeriksaan lengkap selesai.` },
        ],
        kunci: 'D',
        pembahasan: `Konsep yang digunakan: Pertanggungjawaban kesalahan melalui pengungkapan segera, penjelasan dampak, koreksi, dan pemeriksaan sebelum penggunaan
Kata kunci: rumus salah, capaian unit, rapat, pengakuan, versi koreksi
Opsi D (5 Poin) paling tepat karena kesalahan disampaikan sebelum memengaruhi keputusan dan disertai solusi yang siap digunakan. Penjelasan dampak membantu atasan memahami perubahan angka serta menentukan tindakan pada rapat.
Mengakui kekeliruan secara terbuka menjaga keterlacakan dokumen dan mencegah koreksi diam-diam menimbulkan kebingungan versi.

Pembahasan setiap opsi:
A (2 poin): Versi baru memperbaiki angka, tetapi penjelasan yang tidak lengkap mengaburkan kesalahan serta dampaknya.
B (1 poin): Menunggu memastikan dampak aktual, tetapi membiarkan informasi yang diketahui salah berpotensi dipakai dalam rapat.
C (3 poin): Koreksi cepat mencegah penggunaan angka salah, tetapi perubahan tanpa pemberitahuan menghilangkan jejak dan dapat membingungkan pengguna dokumen.
D (5 poin): Paling tepat; alasannya ada pada penjelasan di atas.
E (4 poin): Konfirmasi tambahan menunjukkan kehati-hatian, tetapi sumber kesalahan sudah ditemukan dan penundaan rapat belum tentu diperlukan.

Cara cepat: Jika menemukan kesalahan penting, laporkan sebelum dipakai dan sertakan koreksi yang sudah diperiksa.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      // tryout-ref-06-37 · Nynda - TKP 1_Done Input.docx, soal 37
      {
        nomor: 36,
        tipe: 'skala',
        pertanyaan: `Seorang teman dekat di luar instansi meminta informasi mengenai peserta yang lolos tahap awal pengadaan sebelum pengumuman resmi. Ia mengaku hanya ingin menyiapkan dokumen dan berjanji tidak menyebarkannya. Anda memiliki akses ke data tersebut karena menjadi anggota sekretariat seleksi. Respons Anda adalah ...`,
        opsi: [
          { label: 'A', teks: `Menjelaskan bahwa informasi belum dapat dibagikan, tetapi memberi petunjuk apakah posisi temannya cukup aman berdasarkan hasil sementara.` },
          { label: 'B', teks: `Meminta teman mengirim pertanyaan tertulis ke instansi sehingga Anda dapat menjawabnya setelah memperoleh persetujuan ketua tim.` },
          { label: 'C', teks: `Memberikan penjelasan umum tentang tahapan berikutnya tanpa menyebut nama peserta agar teman dapat melakukan persiapan awal.` },
          { label: 'D', teks: `Menegaskan batas kerahasiaan dan menyarankan penggunaan sumber publik yang dapat diakses setara oleh calon penyedia.` },
          { label: 'E', teks: `Tidak menanggapi permintaan tersebut dan mengurangi komunikasi dengan teman sampai pengumuman resmi selesai dilakukan.` },
        ],
        kunci: 'D',
        pembahasan: `Konsep yang digunakan: Kerahasiaan jabatan melalui penolakan yang jelas dan penggunaan kanal informasi resmi yang setara
Kata kunci: teman dekat, data seleksi, belum diumumkan, rahasia, kanal resmi
Opsi D (5 Poin) paling tepat karena informasi yang belum diumumkan tidak dibagikan dalam bentuk apa pun dan teman tetap memperoleh rujukan yang sah. Kedekatan pribadi tidak mengubah hak akses terhadap data seleksi.
Respons tegas dan santun menjaga kerahasiaan tanpa memutus hubungan pribadi atau memberikan sinyal yang dapat dimanfaatkan.

Pembahasan setiap opsi:
A (1 poin): Tidak menyebut data langsung tampak berhati-hati, tetapi petunjuk hasil sementara tetap membocorkan informasi rahasia.
B (3 poin): Pertanyaan tertulis menciptakan jejak dan meminta persetujuan, tetapi peserta tetap diarahkan melalui hubungan pribadi alih-alih kanal resmi yang setara.
C (4 poin): Informasi umum relatif aman dan cukup membantu, tetapi perlu dipastikan benar-benar sudah tersedia untuk publik sebelum disampaikan secara pribadi.
D (5 poin): Paling tepat; alasannya ada pada penjelasan di atas.
E (2 poin): Tidak memberi informasi menjaga kerahasiaan, tetapi menghindari komunikasi tidak menjelaskan batas etika atau kanal yang benar.

Cara cepat: Jaga informasi belum publik dan arahkan semua pihak pada kanal resmi tanpa memberi petunjuk pribadi.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      // tryout-ref-07-34 · Wil - TKP 1_Done Input.docx, soal 34
      {
        nomor: 37,
        tipe: 'skala',
        pertanyaan: `Setelah tugas lapangan memantau distribusi air pada masa kemarau, Anda menyadari aplikasi presensi mencatat waktu pulang setengah jam terlalu cepat akibat koneksi terputus. Catatan kunjungan dan berita acara menunjukkan pekerjaan selesai sesuai jadwal. Penilaian kehadiran segera dikunci. Sikap Anda adalah ...`,
        opsi: [
          { label: 'A', teks: `Mengajukan koreksi melalui prosedur yang berlaku dengan bukti pelaksanaan tugas, lalu memberi tahu pengelola presensi sebelum rekap ditutup.` },
          { label: 'B', teks: `Menghubungi pengelola presensi dan menjelaskan kekeliruan secara terbuka, kemudian meminta arahan mengenai bukti yang perlu diajukan.` },
          { label: 'C', teks: `Meminta rekan mengubah jam pada file rekap bersama sehingga waktu kerja sesuai kenyataan, kemudian mengabarkan koreksi itu kepada operator.` },
          { label: 'D', teks: `Menambahkan jam kerja yang kurang pada hari berikutnya di aplikasi sehingga jumlah bulanan sama tanpa mengubah catatan hari yang bermasalah.` },
          { label: 'E', teks: `Mengisi penjelasan pada kolom catatan kegiatan dan membiarkan angka presensi tetap tercatat sambil menunggu pemeriksaan rutin.` },
        ],
        kunci: 'A',
        pembahasan: `Konsep yang digunakan: Disiplin administrasi, pembetulan catatan, bukti objektif, akuntabilitas
Kata kunci: Presensi salah, koneksi terputus, bukti tugas, koreksi
Opsi A (5 poin) paling tepat karena kesalahan administrasi dapat diperbaiki secara resmi ketika bukti yang memadai tersedia. Pengajuan sebelum penutupan rekap disertai dokumen pendukung memastikan catatan sesuai kenyataan serta perubahan dapat diaudit. Perbaikan informal tanpa kewenangan justru membuat arsip tidak dapat dipertanggungjawabkan.

Pembahasan setiap opsi:
A (5 poin): Paling tepat; alasannya ada pada penjelasan di atas.
B (4 poin) karena pengelola diberi informasi segera dan bukti akan disiapkan, tetapi permohonan koreksi formal belum diajukan sebelum tenggat.
C (2 poin) karena angka berusaha disesuaikan dengan kejadian sebenarnya, tetapi perubahan dilakukan oleh pihak yang belum tentu berwenang melalui file bersama.
D (1 poin) karena jumlah jam dibuat terlihat seimbang, tetapi mencatat kerja pada hari lain tidak mengoreksi fakta kehadiran yang keliru.
E (3 poin) karena keterangan pribadi tersedia, namun angka rekap tetap salah dan tindak lanjut diserahkan pada pemeriksaan mendatang.

Cara cepat: Koreksi catatan kerja dilakukan melalui mekanisme resmi dengan bukti, bukan dengan memindahkan jam atau mengubah berkas bersama.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      // tryout-ref-07-35 · Wil - TKP 1_Done Input.docx, soal 35
      {
        nomor: 38,
        tipe: 'skala',
        pertanyaan: `Saat serah terima pengaduan keamanan pangan MBG, catatan kasus pengaduan seorang orang tua belum memuat hasil pemeriksaan unit teknis. Petugas pengganti akan bertugas besok dan warga meminta pembaruan. Anda harus memastikan pelayanan berlanjut tanpa mengarang status yang belum diketahui. Tindakan Anda adalah ...`,
        opsi: [
          { label: 'A', teks: `Menjelaskan status kasus kepada petugas pengganti secara lisan dan memberi warga kontak unit teknis untuk menanyakan perkembangannya.` },
          { label: 'B', teks: `Melengkapi status kasus yang akurat dan menyerahkannya kepada pengganti disertai tindak lanjut serta rencana informasi bagi warga.` },
          { label: 'C', teks: `Meminta petugas pengganti mempelajari riwayat aplikasi dan meneruskan kasus berdasarkan catatan yang sudah tersimpan dalam sistem.` },
          { label: 'D', teks: `Menutup status kasus sebagai selesai di aplikasi karena dokumen sudah diteruskan kepada unit teknis, lalu meminta warga menghubungi kembali.` },
          { label: 'E', teks: `Menahan berkas sampai jawaban unit teknis tiba sehingga petugas pengganti menerima persoalan yang telah selesai dan mudah ditutup.` },
        ],
        kunci: 'B',
        pembahasan: `Konsep yang digunakan: Akuntabilitas serah terima, kesinambungan layanan, dokumentasi status
Kata kunci: Pengaduan MBG, pergantian petugas, status kasus, kesinambungan layanan.
Opsi B (5 poin) paling tepat karena pergantian petugas tidak boleh membuat warga mengulang penjelasan atau kehilangan kepastian layanan. Catatan status yang akurat dan serah terima yang jelas memastikan petugas penerima mengetahui tindakan berikutnya serta cara memberi kabar kepada warga.

Pembahasan setiap opsi:
A (4 poin) karena petugas baru memperoleh penjelasan langsung dan warga mendapat kontak, tetapi sistem belum diperbaiki sehingga riwayat bersama tetap tidak lengkap.
B (5 poin): Paling tepat; alasannya ada pada penjelasan di atas.
C (3 poin) karena riwayat tersedia dan petugas diminta meneruskan layanan, tetapi bagian penting yang diketahui kosong tidak dilengkapi oleh petugas sebelumnya.
D (1 poin) karena status dibuat selesai meski jawaban teknis belum tersedia, sehingga catatan dan kepastian kepada warga menjadi keliru.
E (2 poin) karena keinginan menyerahkan kasus lengkap dapat dipahami, namun menahan berkas menghambat kelanjutan pekerjaan ketika pergantian shift sudah tersedia.

Cara cepat: Serah terima tugas harus mencakup status nyata, tindak lanjut dan penanggung jawab yang dapat memberi kepastian kepada warga.`,
        tingkat: 'sulit',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Anti Radikalisme` },
    soal: [
      // tryout-ref-08-40 · Wil - TKP 2_Done Input.docx, soal 40
      {
        nomor: 39,
        tipe: 'skala',
        pertanyaan: `Dalam rapat anggaran, seorang warga mempertanyakan ketimpangan pembangunan. Egi bertugas sebagai moderator. Seorang rekannya menganggap kritik tersebut sikap anti-pemerintah dan ingin menghentikan sesi tanya jawab, meski peserta tertib. Sebagai moderator, tindakan Egi adalah ...`,
        opsi: [
          { label: 'A', teks: `Menyarankan warga menyampaikan kritik hanya melalui kepala desa karena pernyataan terbuka dapat menimbulkan kesalahpahaman terhadap pemerintah.` },
          { label: 'B', teks: `Mengajak peserta mendiskusikan kritik dan bukti anggaran secara terbuka tanpa menganggap perbedaan pendapat sebagai sikap anti-pemerintah.` },
          { label: 'C', teks: `Menyarankan warga menyerahkan kritik tertulis setelah rapat agar tidak terjadi perbedaan pendapat di hadapan peserta lainnya.` },
          { label: 'D', teks: `Mempersilakan warga berbicara sampai selesai dan menyampaikan bahwa semua pendapat akan dicatat tanpa perlu dibahas dalam rapat yang sama.` },
          { label: 'E', teks: `Mendukung penutupan sesi agar rapat tetap tertib dan menawarkan penjelasan anggaran kepada warga yang bersangkutan secara terpisah.` },
        ],
        kunci: 'B',
        pembahasan: `Konsep yang digunakan: Penghormatan hak, kebebasan menyampaikan kritik, dan penolakan diskriminasi.
Kata kunci: Kritik anggaran, kebebasan berpendapat, rapat damai, moderasi.
Opsi B (5 poin) paling tepat karena memisahkan kritik terhadap anggaran dari tuduhan ketidakloyalan politik. Meminta bukti dan mengarahkan pembahasan pada substansi memberi kesempatan peserta menilai keberatan warga secara adil sambil tetap menjaga ketertiban forum.

Pembahasan setiap opsi:
A (2 poin) karena berusaha menjaga komunikasi, tetapi membatasi hak berbicara hanya melalui satu tokoh yang belum tentu mewakili warga.
B (5 poin): Paling tepat; alasannya ada pada penjelasan di atas.
C (3 poin) karena menyediakan saluran formal, tetapi membatasi kontribusi langsung pada rapat tanpa alasan keselamatan atau ketertiban yang cukup.
D (4 poin) karena memberi kesempatan mengutarakan pandangan, tetapi tidak menghubungkan kritik dengan pembahasan kebijakan yang sedang berlangsung.
E (1 poin) karena menjaga kelancaran rapat, tetapi menutup kesempatan menyampaikan kritik yang sah sebelum masalah dipahami.

Cara cepat: Pisahkan kritik damai yang sah dari ajakan diskriminatif atau ancaman. Jangan menilai orang hanya dari ketidaksetujuannya.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tryout-ref-07-39 · Wil - TKP 1_Done Input.docx, soal 39
      {
        nomor: 40,
        tipe: 'skala',
        pertanyaan: `Dalam rapat penanganan karhutla, ASN mengkritik pembagian fasilitas lapangan. Rekannya menuduh kritik itu ekstrem hanya karena berbeda dari keputusan pimpinan. Sebagai moderator, tindakan Anda adalah ...`,
        opsi: [
          { label: 'A', teks: `Menilai substansi kritik berdasarkan bukti dan mengingatkan tim bahwa perbedaan pendapat bukan ekstremisme.` },
          { label: 'B', teks: `Meminta perdebatan dihentikan sementara sehingga ketegangan mereda dan seluruh peserta dapat melanjutkan agenda kantor dengan tertib.` },
          { label: 'C', teks: `Memberi kesempatan pegawai menjelaskan kritik dengan bukti dan merangkum hal-hal yang relevan dengan kebijakan fasilitas.` },
          { label: 'D', teks: `Melarang pegawai itu hadir dalam diskusi berikutnya sampai ia menyatakan setuju terhadap keputusan pimpinan mengenai ruang kerja.` },
          { label: 'E', teks: `Mencatat kritik sebagai potensi masalah kedisiplinan karena penyampaian yang keras dinilai dapat mengganggu keharmonisan unit.` },
        ],
        kunci: 'A',
        pembahasan: `Konsep yang digunakan: Pembedaan kritik sah dan ekstremisme, kebebasan berpendapat bertanggung jawab
Kata kunci: Kritik karhutla, kebebasan berpendapat, tuduhan ekstrem, pemeriksaan fakta.
Opsi A (5 poin) paling tepat karena kritik terhadap keputusan organisasi merupakan bagian dari diskusi yang sehat selama tidak mengarah pada intimidasi atau diskriminasi. Penilaian perlu didasarkan pada isi dan perilaku nyata, bukan sekadar ketidaksetujuan dengan pimpinan. Diskusi tetap dapat diarahkan pada fakta.

Pembahasan setiap opsi:
A (5 poin): Paling tepat; alasannya ada pada penjelasan di atas.
B (3 poin) karena ketegangan dapat turun, namun masalah kesalahpahaman terhadap kritik dan stigma pada pegawai belum diselesaikan.
C (4 poin) karena penjelasan kritik diberi ruang dan diskusi kembali pada isi kebijakan, tetapi tuduhan ekstremisme yang tidak berdasar belum dikoreksi.
D (1 poin) karena kebebasan berbeda pendapat ditiadakan melalui syarat menyetujui pimpinan sehingga praktik kerja menjadi diskriminatif.
E (2 poin) karena ketertiban dikedepankan, tetapi kritik yang sah diperlakukan sebagai indikasi pelanggaran tanpa bukti perilaku merugikan.

Cara cepat: Nilai isi dan tindakan berdasarkan bukti. Kritik tajam tidak identik dengan radikalisme.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tryout-ref-08-42 · Wil - TKP 2_Done Input.docx, soal 42
      {
        nomor: 41,
        tipe: 'skala',
        pertanyaan: `Unggahan berulang di grup masyarakat mengajak mengucilkan kelompok tertentu. Sejumlah warga mulai terintimidasi, tetapi identitas pengunggah belum pasti dan belum ada bukti ancaman fisik. Tim ingin menghapus konten tanpa catatan atau mengumumkan identitas akun. Anda harus melindungi warga, mencegah penyebaran, dan memeriksa fakta sebelum mengambil tindakan lanjutan. Tindakan Anda adalah ...`,
        opsi: [
          { label: 'A', teks: `Menyerahkan seluruh tangkapan layar kepada banyak anggota tim sehingga mereka dapat menilai sendiri apakah akun tersebut perlu ditindaklanjuti.` },
          { label: 'B', teks: `Menyampaikan imbauan umum agar saling menghormati sambil meminta anggota menunda perdebatan sampai informasi diperiksa secara terbatas.` },
          { label: 'C', teks: `Membatasi penayangan unggahan dan meminta klarifikasi terbatas kepada pengelola akun, tetapi belum menilai dampak yang dirasakan warga.` },
          { label: 'D', teks: `Membatasi penyebaran unggahan dan menjaga bukti seperlunya, lalu menilai pola serta dampaknya dengan pengelola kanal untuk melindungi warga.` },
          { label: 'E', teks: `Menetapkan akun sebagai kelompok berbahaya berdasarkan laporan awal dan meminta semua pegawai menjauhi orang yang pernah terhubung dengan akun itu.` },
        ],
        kunci: 'D',
        pembahasan: `Konsep yang digunakan: Identifikasi propaganda diskriminatif berdasarkan isi, konteks, dan pola bukti.
Kata kunci: Pola unggahan berulang, ajakan pengucilan, ajakan diskriminatif, bukti, risiko.
Opsi D (5 poin) paling tepat karena penghentian penyebaran mengurangi paparan konten diskriminatif yang sedang berlangsung. Bukti dijaga seperlunya untuk pemeriksaan pola dan konteks tanpa menyebarkan identitas akun yang belum terverifikasi. Koordinasi dengan pengelola kanal membantu melindungi warga terdampak secara proporsional.

Pembahasan setiap opsi:
A (2 poin) karena mendorong penilaian rekan, tetapi menyebarkan konten dan identitas secara luas tanpa kebutuhan memperbesar risiko.
B (3 poin) karena mengedepankan ketenangan dan penghormatan, tetapi imbauan umum tidak menghentikan unggahan bermasalah atau menjawab kondisi warga yang telah merasa terintimidasi.
C (4 poin) karena mengurangi paparan unggahan dan melakukan klarifikasi, tetapi belum menilai pola berulang maupun dampaknya terhadap warga yang menjadi sasaran.
D (5 poin): Paling tepat; alasannya ada pada penjelasan di atas.
E (1 poin) karena bermaksud mencegah paparan, tetapi memberi label kolektif tanpa penilaian yang memadai dan merugikan orang berdasarkan hubungan sosial.

Cara cepat: Hentikan paparan diskriminatif dan periksa bukti secara proporsional tanpa menuduh identitas yang belum terbukti.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      // tryout-ref-07-45 · Wil - TKP 1_Done Input.docx, soal 45
      {
        nomor: 42,
        tipe: 'skala',
        pertanyaan: `Pada forum pemuda tentang tanggapan masyarakat terhadap kekeringan, salah satu kelompok mengusulkan semua pembicara menandatangani larangan mengkritik kebijakan pemerintah daerah. Mereka menganggap cara itu menjaga persatuan dan mencegah provokasi, tetapi forum sedianya membuka dialog kebijakan yang konstruktif. Sebagai pendamping dinas, tindakan Anda adalah ...`,
        opsi: [
          { label: 'A', teks: `Melarang ancaman serta diskriminasi di forum, sekaligus tetap melindungi kritik gagasan secara bertanggung jawab.` },
          { label: 'B', teks: `Melarang kehadiran kelompok yang paling sering mengkritik demi menjamin peserta lain merasa nyaman mengikuti seluruh acara diskusi.` },
          { label: 'C', teks: `Meminta semua pembicara menyepakati larangan kritik selama kegiatan, lalu menawarkan pembahasan perbedaan pandangan pada forum terpisah.` },
          { label: 'D', teks: `Membatasi topik pembicaraan pada kegiatan sosial yang tidak menyinggung pandangan komunitas agar forum berjalan tanpa perdebatan sensitif.` },
          { label: 'E', teks: `Mewajibkan pembicara menyertakan bukti saat mengkritik dan meminta moderator menegur serangan pribadi tanpa menghapus hak berbeda pendapat.` },
        ],
        kunci: 'A',
        pembahasan: `Konsep yang digunakan: Moderasi proporsional, toleransi perbedaan, pencegahan intimidasi
Kata kunci: Forum pemuda, kritik gagasan, larangan diskriminasi, moderator
Opsi A (5 poin) paling tepat karena aturan forum harus melindungi orang dari ancaman dan perlakuan diskriminatif tanpa menutup diskusi atas ide. Batas berbasis perilaku dapat diterapkan konsisten kepada semua peserta, sehingga pengelola tidak menyamakan kritik dengan intoleransi atau memberi hak veto pada suatu kelompok.

Pembahasan setiap opsi:
A (5 poin): Paling tepat; alasannya ada pada penjelasan di atas.
B (1 poin) karena kenyamanan sebagian peserta dijaga dengan pengecualian kelompok yang kritis tanpa bukti perilaku yang melanggar.
C (2 poin) karena forum tampak tertib karena kritik dilarang, tetapi kebebasan menilai gagasan dibatasi secara berlebihan.
D (3 poin) karena ketegangan mungkin berkurang, namun penghindaran topik menghilangkan fungsi forum sebagai tempat dialog atas perbedaan pandangan.
E (4 poin) karena kualitas kritik didorong dan serangan pribadi ditangani, tetapi aturan belum secara eksplisit mencakup diskriminasi atau ancaman yang mungkin tidak berupa serangan personal.

Cara cepat: Tetapkan batas pada ancaman dan diskriminasi, bukan pada keberadaan kritik atau pandangan berbeda.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      // tryout-ref-08-41 · Wil - TKP 2_Done Input.docx, soal 41
      {
        nomor: 43,
        tipe: 'skala',
        pertanyaan: `Hilda memimpin diskusi publik layanan inklusif. Narasumber berencana mengajak peserta menjauhi warga yang tidak sepaham, meskipun materi belum disampaikan. Nama narasumber sudah tercantum dan acara besok. Panitia terbelah: sebagian ingin membiarkan demi kebebasan berpendapat, sebagian meminta pembatalan tanpa klarifikasi. Hilda harus menjaga dialog sekaligus mencegah ajakan diskriminatif. Keputusannya adalah ...`,
        opsi: [
          { label: 'A', teks: `Mengirim panduan sikap saling menghormati kepada seluruh narasumber dan mengarahkan moderator menanggapi pernyataan yang melanggar saat diskusi berlangsung.` },
          { label: 'B', teks: `Membiarkan narasumber menyampaikan seluruh materinya agar peserta dapat menilai sendiri, lalu menyediakan sesi tanya jawab untuk mengoreksi pandangan yang muncul.` },
          { label: 'C', teks: `Membatalkan seluruh diskusi dan menjadwalkannya ulang tanpa berkomunikasi dengan narasumber karena satu materi berisiko menimbulkan penolakan.` },
          { label: 'D', teks: `Memindahkan narasumber tersebut ke sesi tertutup bersama peserta yang sepakat dengannya agar acara utama tetap berlangsung tanpa polemik.` },
          { label: 'E', teks: `Mengklarifikasi materi dengan narasumber sebelum forum dan menetapkan batas diskusi nondiskriminatif, serta menyiapkan pengganti jika ajakan pengucilan bertahan.` },
        ],
        kunci: 'E',
        pembahasan: `Konsep yang digunakan: Pencegahan intoleransi, klarifikasi, penolakan diskriminasi, dan dialog proporsional.
Kata kunci: Narasumber, ajakan pengucilan, acara besok, batas diskusi, klarifikasi.
Opsi E (5 poin) paling tepat karena mencegah potensi diskriminasi sebelum acara sambil menjaga ruang diskusi yang sehat. Klarifikasi materi membedakan kritik yang boleh diperdebatkan dari ajakan mengucilkan orang. Batas yang dinyatakan jelas serta rencana penggantian proporsional jika materi bermasalah dipertahankan.

Pembahasan setiap opsi:
A (4 poin) karena menetapkan pedoman dan kesiapan moderator, tetapi membiarkan risiko materi baru ditangani ketika sudah disampaikan kepada publik.
B (3 poin) karena menjaga kesempatan berdiskusi, tetapi menempatkan koreksi setelah ajakan pengucilan terlanjur didengar peserta.
C (2 poin) karena memprioritaskan pencegahan, tetapi pembatalan seluruh kegiatan tanpa klarifikasi atau alternatif tidak proporsional.
D (1 poin) karena mencegah polemik di acara utama, tetapi menyediakan ruang bagi ajakan pengucilan tanpa koreksi substansi.
E (5 poin): Paling tepat; alasannya ada pada penjelasan di atas.

Cara cepat: Batas diskusi harus jelas sebelum acara, dengan klarifikasi dan langkah pengganti jika materi tetap diskriminatif.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      // tryout-ref-06-43 · Nynda - TKP 1_Done Input.docx, soal 43
      {
        nomor: 44,
        tipe: 'skala',
        pertanyaan: `Di lingkungan tempat tinggal, sebuah kelompok mengadakan pertemuan tertutup. Seorang tetangga yang pernah hadir mengatakan materi pertemuan menolak simbol negara dan mendorong permusuhan terhadap kelompok lain. Anda tidak pernah mengikuti pertemuan dan belum memiliki bukti selain cerita tersebut. Sikap Anda adalah ...`,
        opsi: [
          { label: 'A', teks: `Menyampaikan peringatan di grup lingkungan agar warga menghindari kelompok tersebut sampai aparat melakukan pemeriksaan.` },
          { label: 'B', teks: `Memeriksa informasi awal melalui sumber yang wajar sebelum berkonsultasi secara rahasia dengan pihak berwenang setempat.` },
          { label: 'C', teks: `Mendatangi pertemuan dengan alasan ingin bergabung agar dapat merekam materi dan memperoleh bukti yang lebih kuat.` },
          { label: 'D', teks: `Mengajak pengurus lingkungan berdialog terbuka dengan pimpinan kelompok untuk menanyakan tujuan kegiatan mereka.` },
          { label: 'E', teks: `Mengabaikan cerita sampai ada tindakan nyata karena pertemuan tertutup dan pandangan berbeda belum membuktikan pelanggaran.` },
        ],
        kunci: 'B',
        pembahasan: `Konsep yang digunakan: Deteksi dini yang aman melalui verifikasi terbatas dan konsultasi rahasia tanpa penyusupan atau tuduhan publik
Kata kunci: pertemuan tertutup, informasi awal, verifikasi wajar, konsultasi rahasia, pihak berwenang
Opsi B (5 Poin) paling tepat karena informasi awal tidak langsung dianggap sebagai fakta, tetapi juga tidak diabaikan. Verifikasi dilakukan sebatas sumber yang wajar dan konsultasi diserahkan kepada pihak yang memiliki kewenangan menilai risiko.
Peserta menghindari penyusupan, penyebaran tuduhan, dan tindakan yang dapat membahayakan diri atau warga lain.

Pembahasan setiap opsi:
A (2 poin): Peringatan bermaksud melindungi lingkungan, tetapi tuduhan publik berdasarkan satu cerita dapat memicu stigma dan konflik.
B (5 poin): Paling tepat; alasannya ada pada penjelasan di atas.
C (1 poin): Rekaman dapat menjadi bukti, tetapi penyusupan berisiko bagi keselamatan dan melampaui peran warga biasa.
D (4 poin): Dialog terbuka dapat memberi klarifikasi dan cukup konstruktif, tetapi berisiko bila dugaan permusuhan benar serta belum melibatkan penilaian pihak berwenang.
E (3 poin): Kehati-hatian terhadap kabar belum terverifikasi itu penting, tetapi pola yang dilaporkan cukup serius untuk dikonsultasikan secara aman.

Cara cepat: Pada indikasi awal, verifikasi secara terbatas dan konsultasikan secara rahasia tanpa menyusup atau menuduh di ruang publik.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      // tryout-ref-07-43 · Wil - TKP 1_Done Input.docx, soal 43
      {
        nomor: 45,
        tipe: 'skala',
        pertanyaan: `Panitia literasi digital pemerintah menerima proposal pelatihan pemuda dari kelompok yang memakai logo dan nama mirip lembaga resmi. Mereka menawarkan pembinaan gratis untuk menangkal hoaks, tetapi situs rujukannya tidak terverifikasi dan meminta data calon peserta. Sebelum bekerja sama, tindakan Anda adalah ...`,
        opsi: [
          { label: 'A', teks: `Menolak dan melabeli penyelenggara sebagai kelompok radikal berdasarkan kemiripan logo dan penggunaan kanal pribadi tanpa bukti tambahan.` },
          { label: 'B', teks: `Menerima pembinaan awal sebagai uji coba terbatas karena belum ada konten yang terbukti melanggar ketentuan pelatihan.` },
          { label: 'C', teks: `Memeriksa legalitas serta identitas penyelenggara melalui sumber independen dan menahan undangan peserta sampai hasil verifikasi jelas.` },
          { label: 'D', teks: `Menghubungi kontak proposal dan meminta identitas penyelenggara serta contoh materi sebelum memutuskan apakah kerja sama akan diteruskan.` },
          { label: 'E', teks: `Menunda publikasi poster kerja sama sambil meminta panitia lain membaca proposal untuk menilai apakah bahasanya terdengar meyakinkan.` },
        ],
        kunci: 'C',
        pembahasan: `Konsep yang digunakan: Kewaspadaan informasi, verifikasi identitas mitra, respons berbasis bukti
Kata kunci: Logo mirip, pengurus tidak jelas, undangan, verifikasi independen
Opsi C (5 poin) paling tepat karena situasi memuat tanda yang memerlukan pemeriksaan, tetapi belum membuktikan suatu paham atau pelanggaran. Identitas dan kewenangan mitra harus diverifikasi lewat jalur independen sebelum peserta diarahkan masuk ke kanal tertutup. Dengan demikian, panitia melindungi peserta tanpa membuat tuduhan yang tidak didukung bukti.

Pembahasan setiap opsi:
A (1 poin) karena pencegahan dilakukan melalui penolakan, namun label radikal disematkan tanpa bukti perilaku atau isi ajakan yang relevan.
B (2 poin) karena uji coba dianggap cara memperoleh bukti, tetapi peserta sudah diundang sebelum kredibilitas mitra ditetapkan.
C (5 poin): Paling tepat; alasannya ada pada penjelasan di atas.
D (4 poin) karena penyelenggara dimintai keterangan dan materi, tetapi verifikasi masih bergantung pada pernyataan sumber yang sedang diperiksa.
E (3 poin) karena publikasi ditahan sehingga risiko undangan berkurang, namun evaluasi bahasa secara subjektif tidak menggantikan pemeriksaan identitas dan legalitas.

Cara cepat: Indikasi mencurigakan adalah alasan memverifikasi, bukan alasan langsung memberi cap radikal.`,
        tingkat: 'sulit',
        status: 'draft',
      },
    ],
  },
];
