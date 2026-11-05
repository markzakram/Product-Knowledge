import type { Kelompok } from '@/lib/skema';

/**
 * Contoh soal SKD: satu paket penuh 110 soal dari SKD Generator (TWK 30, TIU 35, TKP 45).
 *
 * Dipakai bersama oleh SKD CPNS 2027 (data/jadiasn/cpns/a2027) dan SKD Sekolah Kedinasan 2026
 * (data/jadisekdin/skd/a2026): kedua angkatan mengimpor berkas ini, jadi paketnya SATU dan SAMA.
 * Ditulis sekali di sini, bukan disalin; gambar (figural dan acuan deret) ada di public/gambar/jadiasn/.
 *
 * Dibuat ulang 2026-11-05 dari SKD Generator (G:\Ali\code\SKD Generator, HEAD 3d4e92e, plus
 * perubahan yang belum di-commit) dengan perintah:
 *   npm run generate -- --profile tryout-2027 --twk accepted --tkp accepted --tiu accepted
 *     --paket 1 --seed PK-SKD-2027-PAKET-2
 * Diambil paket pertama (110 soal) dan validasi generator lulus (110 soal diperiksa, 0 galat,
 * 0 duplikat). Pembahasan diambil lewat fungsi runtime generator (explanationOf), jadi pembahasan
 * TIU revisi 3 Nov dan koreksi TWK ikut. Kunci dan urutan opsi mengikuti keluaran generator.
 *
 * Asal soal. TWK (30): contoh tryout 2027 yang diterima di generator (dokumen tim akademik).
 * TIU (35): 21 contoh tryout (16 numerik, 3 argumen, 2 susunan dan posisi) dan 14 variasi yang
 * dibangkitkan mesin generator (5 silogisme, 1 analogi dua kata, dan 8 figural). Variasi mesin
 * dan figural belum ditelaah ahli. TKP (45): kasus orisinal data/tkp-kasus (bank TKP generator),
 * dengan skor 1 sampai 5 rubrik latihan, bukan contoh dokumen tryout.
 *
 * Konversi: `answer` (indeks 0) menjadi huruf; `difficulty` menjadi `tingkat` ("hots" ditulis
 * 'sulit'); `pembahasan` = pembahasan generator. Penanda tebal, coret, dan warna dibuang
 * (Product Knowledge hanya menampilkan teks, gambar, dan rumus). Pecahan notasi Word "(a)/(b)"
 * ditulis \frac, tabel soal dan tabel pembahasan ditulis sebagai rumus array LaTeX, dan diagram
 * pembahasan figural digambar sebagai PNG. TKP bertipe 'skala': `kunci` adalah opsi berskor 5,
 * skor 1 sampai 5 tiap opsi ada di pembahasan. Soal diurut per materi lalu per tingkat; nomor
 * berurutan 1 sampai 30, 1 sampai 35, dan 1 sampai 45 di tiap subtes. Di atas tiap soal ada
 * komentar rujukan ke butir sumbernya.
 *
 * Status 'draft': isi hasil generator dan belum ditelaah untuk etalase.
 */

/** 30 soal TWK. */
export const contohGeneratorTwk: Kelompok[] = [
  {
    stimulus: { judul: `Nasionalisme` },
    soal: [
      // tryout-ref-05-01 · Tri_Paket 3 TWK SKD 2027_Done Input.docx, soal 1
      {
        nomor: 1,
        lesson: 'Nasionalisme',
        tipe: 'pg',
        pertanyaan: `Selama bertahun-tahun, petani di sebuah kabupaten di wilayah perbatasan membeli bibit dan pupuk dari negara tetangga. Sekelompok pemuda setempat kemudian membangun pembibitan dan produksi pupuk organik berbahan baku lokal. Hasilnya, kebutuhan pertanian di daerah itu kini dapat dipenuhi tanpa bergantung pada pasokan luar negeri.
Unsur nasionalisme yang paling menonjol dari tindakan para pemuda tersebut adalah ….`,
        opsi: [
          { label: 'A', teks: `Kepedulian sosial` },
          { label: 'B', teks: `Persatuan` },
          { label: 'C', teks: `Kemandirian` },
          { label: 'D', teks: `Identitas nasional` },
          { label: 'E', teks: `Cinta tanah air` },
        ],
        kunci: 'C',
        pembahasan: `Konsep dalam soal menekankan kemandirian nasional, yaitu kemampuan memenuhi kebutuhan menggunakan sumber daya dan kapasitas sendiri sehingga ketergantungan terhadap pihak luar berkurang. Para pemuda membangun produksi bibit dan pupuk berbahan baku lokal hingga kebutuhan pertanian tidak lagi bergantung pada pasokan negara tetangga. Keberhasilan memenuhi kebutuhan secara mandiri menjadi indikator utama. Opsi yang paling tepat adalah C, karena menekankan kemampuan masyarakat mengelola sumber daya dan memenuhi kebutuhan sendiri.
Alasan opsi salah:
A. Kepedulian sosial berkaitan dengan perhatian terhadap kesejahteraan masyarakat, tetapi bukan unsur yang paling menonjol dalam kasus.
B. Persatuan menekankan kebersamaan berbagai kelompok untuk mencapai tujuan bersama, sedangkan kasus berfokus pada kemampuan produksi lokal.
D. Identitas nasional mengacu pada jati diri dan karakteristik bangsa, seperti bahasa, budaya, dan simbol negara.
E. Cinta tanah air merupakan konsep yang lebih luas, sedangkan indikator spesifik dalam soal adalah berkurangnya ketergantungan pada pihak asing.
Cara cepat: Tanyakan kemampuan apa yang dicapai warga dalam kasus, lalu bandingkan dengan pengertian tiap unsur nasionalisme, termasuk unsur yang tampak mirip.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      // tryout-ref-04-06 · Tri_Paket 2 TWK SKD 2027_Done Input.docx, soal 6
      {
        nomor: 2,
        lesson: 'Nasionalisme',
        tipe: 'pg',
        pertanyaan: `Provinsi A dan B mengelola pasar ikan bersama untuk memperkuat perdagangan antardaerah. Provinsi A memasok 65% volume ikan, sedangkan provinsi B memasok 35%.
Hasil evaluasi menunjukkan bahwa alokasi slot lelang sudah sebanding dengan kebutuhan transaksi kedua provinsi. Namun, sebagian nelayan kecil B tetap kesulitan mengikuti lelang karena aturan pemesanan memberikan kesempatan lebih awal kepada pedagang yang mampu memesan banyak slot sekaligus. Aturan ini juga berlaku bagi koperasi atau kelompok yang memesan dalam jumlah besar.
Pemerintah ingin menjaga kelancaran perdagangan kedua provinsi dan memperbaiki kesempatan nelayan kecil tanpa mengubah alokasi yang telah sesuai kebutuhan.
Kebijakan yang paling mencerminkan nasionalisme dalam kerja sama ekonomi antardaerah adalah ....`,
        opsi: [
          { label: 'A', teks: `Subsidi biaya reservasi bagi kelompok nelayan kecil` },
          { label: 'B', teks: `Pelatihan pemesanan dan pendampingan akses bagi nelayan kecil` },
          { label: 'C', teks: `Pengaturan batas reservasi awal bagi seluruh peserta lelang` },
          { label: 'D', teks: `Penambahan sementara kuota provinsi B` },
          { label: 'E', teks: `Penguatan koperasi pemasaran untuk reservasi slot bersama` },
        ],
        kunci: 'C',
        pembahasan: `Konsep yang digunakan adalah nasionalisme yang mengutamakan kepentingan bersama serta kerja sama ekonomi yang memberikan kesempatan adil bagi masyarakat antardaerah. Stimulus menyatakan bahwa jumlah slot telah sesuai kebutuhan. Masalahnya terletak pada aturan pemesanan yang memberi keunggulan waktu kepada pemesan dalam jumlah besar. Opsi yang paling tepat adalah C, karena mengubah aturan penyebab ketimpangan dan berlaku sama bagi seluruh peserta. Dengan batas reservasi awal, pemesan kecil memiliki kesempatan yang lebih setara tanpa mengubah alokasi kedua provinsi.
Alasan opsi salah:
A. Bantuan biaya menekan beban transaksi, tetapi tidak mengatasi prioritas waktu pemesanan yang tidak setara.
B. Pelatihan dan pendampingan membantu nelayan menggunakan sistem, tetapi tidak mengubah hak pemesanan awal yang menjadi sumber hambatan.
D. Penambahan kuota B tidak diperlukan karena jumlah slot telah sesuai kebutuhan. Hambatan sebenarnya berada pada mekanisme pemesanan.
E. Reservasi kolektif dapat meningkatkan posisi tawar nelayan, tetapi tetap tunduk pada aturan keunggulan waktu bagi pemesan jumlah besar sehingga hambatan utama tidak berubah.
Cara cepat: Periksa apakah masalah berasal dari jumlah slot atau aturan akses. Jika jumlahnya sudah sesuai, pilih kebijakan yang memperbaiki aturan penyebab ketimpangan tanpa merugikan kerja sama kedua daerah.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tryout-ref-04-03 · Tri_Paket 2 TWK SKD 2027_Done Input.docx, soal 3
      {
        nomor: 3,
        lesson: 'Nasionalisme',
        tipe: 'pg',
        pertanyaan: `Pemerintah daerah ingin meningkatkan kontribusi industri tenun lokal terhadap perekonomian nasional. Kelompok perajin telah memperoleh permintaan ekspor, tetapi belum mampu memenuhi standar ketahanan warna secara konsisten. Hasil uji menunjukkan bahwa ketidakkonsistenan terjadi karena takaran bahan pewarna dan lama perendaman berbeda pada setiap perajin, bukan karena kualitas bahan. Sebagian besar perajin menggunakan teknik pewarnaan tradisional yang menjadi ciri khas produk daerah.
Pemerintah mempunyai dana untuk satu program dengan tiga sasaran berikut.
(1) Meningkatkan kemampuan produk memenuhi standar pembeli internasional.
(2) Mempertahankan keterlibatan perajin lokal dalam proses produksi.
(3) Menjaga identitas budaya tenun sebagai bagian dari kekayaan Indonesia.
Lima program yang diusulkan sama-sama diperkirakan dapat meningkatkan mutu, tetapi memiliki pendekatan dan konsekuensi berbeda.
Kebijakan yang paling sesuai dengan nasionalisme ekonomi berdasarkan ketiga sasaran tersebut adalah ....`,
        opsi: [
          { label: 'A', teks: `Pembakuan prosedur pewarnaan bersama ahli berbasis teknik khas perajin` },
          { label: 'B', teks: `Pengujian mutu rutin di setiap sentra dan pendampingan pemilahan hasil tenun` },
          { label: 'C', teks: `Kemitraan dengan industri besar dalam pengujian mutu dan pemasaran ekspor` },
          { label: 'D', teks: `Modernisasi alat celup perajin disertai pelatihan dan pengawasan mutu` },
          { label: 'E', teks: `Pembinaan teknik tradisional dan pengujian daya tahan warna produk akhir` },
        ],
        kunci: 'A',
        pembahasan: `Konsep dalam soal ini menekankan nasionalisme ekonomi, yaitu memperkuat daya saing produk dalam negeri tanpa menyingkirkan pelaku usaha lokal dan identitas budaya bangsa. Hasil uji menunjukkan bahwa masalah mutu bersumber dari takaran bahan pewarna dan lama perendaman yang berbeda antarperajin, bukan dari bahan, sedangkan teknik pewarnaan tradisional adalah ciri khas yang harus dipertahankan. Program yang tepat harus menyentuh penyebab itu dan memenuhi ketiga sasaran sekaligus: mutu ekspor, keterlibatan perajin, dan identitas tenun. Opsi yang paling tepat adalah A, yaitu pembakuan prosedur pewarnaan bersama ahli berbasis teknik khas perajin, karena program ini menyeragamkan takaran dan lama pewarnaan di semua perajin, membiarkan perajin tetap menjadi pelaku produksi, dan tidak mengganti teknik tradisionalnya.
Alasan opsi salah:
B. Pengujian dan pemilahan hanya menyaring produk yang sudah jadi; perbedaan takaran dan lama pewarnaan antarperajin tetap tidak diperbaiki.
C. Kemitraan dengan industri besar membantu pengujian dan pemasaran, tetapi tidak menyentuh proses pewarnaan dan berisiko menggeser kendali produksi dari perajin lokal.
D. Alat celup modern dapat menyeragamkan proses, tetapi menggeser teknik pewarnaan tradisional yang menjadi ciri khas sehingga sasaran menjaga identitas budaya tidak terpenuhi.
E. Pembinaan teknik tradisional menjaga identitas dan pengujian produk akhir mengukur hasil, tetapi perbedaan takaran dan lama pewarnaan antarperajin belum dibakukan.
Cara cepat: Tentukan dulu penyebab masalah mutu menurut hasil uji, lalu periksa setiap program: apakah program itu menyentuh penyebab tersebut dan apakah ketiga sasaran tetap terpenuhi.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tryout-ref-05-05 · Tri_Paket 3 TWK SKD 2027_Done Input.docx, soal 5
      {
        nomor: 4,
        lesson: 'Nasionalisme',
        tipe: 'pg',
        pertanyaan: `Pada awal abad ke-20, muncul organisasi Budi Utomo yang berupaya memajukan masyarakat melalui pendidikan dan pengembangan kemampuan kaum terpelajar. Kehadirannya menjadi salah satu tonggak perkembangan pergerakan nasional Indonesia.
Perubahan paling mendasar dalam pola perjuangan bangsa yang ditandai lahirnya Budi Utomo adalah ....`,
        opsi: [
          { label: 'A', teks: `Peralihan dari perlawanan fisik kedaerahan ke perjuangan melalui perkumpulan modern` },
          { label: 'B', teks: `Peralihan dari organisasi kaum priayi ke organisasi massa rakyat lintas daerah` },
          { label: 'C', teks: `Peralihan dari organisasi kooperatif ke organisasi nonkooperatif terhadap penjajah` },
          { label: 'D', teks: `Peralihan dari perjuangan bersenjata ke jalur perundingan dan diplomasi internasional` },
          { label: 'E', teks: `Peralihan dari organisasi pemuda kedaerahan ke ikrar persatuan se-Nusantara` },
        ],
        kunci: 'A',
        pembahasan: `Konsep dalam soal ini menekankan makna Budi Utomo (20 Mei 1908) sebagai tonggak Kebangkitan Nasional. Sebelum 1908, perlawanan terhadap penjajah umumnya berupa perlawanan fisik yang bersifat kedaerahan dan bergantung pada tokoh setempat, sehingga mudah dipatahkan. Budi Utomo memperkenalkan cara baru, yaitu perjuangan melalui perkumpulan modern yang memiliki pengurus, anggota, dan program kerja, terutama di bidang pendidikan dan kebudayaan. Peralihan lain dalam pilihan memang terjadi dalam sejarah pergerakan, tetapi ditandai oleh tonggak yang berbeda: Sarekat Islam, PNI, masa diplomasi 1945–1949, dan Sumpah Pemuda. Opsi yang paling tepat adalah A, yaitu peralihan dari perlawanan fisik kedaerahan ke perjuangan melalui perkumpulan modern, karena perubahan bentuk perjuangan inilah yang dimulai dengan lahirnya Budi Utomo.
Alasan opsi salah:
B. Budi Utomo sendiri dipimpin kaum priayi dan terpelajar. Organisasi yang menjangkau massa rakyat luas baru menonjol pada Sarekat Islam.
C. Budi Utomo bersikap kooperatif. Sikap nonkooperatif terhadap pemerintah kolonial menonjol pada organisasi yang lebih kemudian, seperti PNI.
D. Perjuangan melalui perundingan dan diplomasi internasional menonjol pada masa mempertahankan kemerdekaan 1945–1949, bukan pada masa Budi Utomo.
E. Peralihan dari organisasi pemuda kedaerahan ke ikrar persatuan adalah makna Sumpah Pemuda 1928. Pada awalnya Budi Utomo masih berfokus pada masyarakat Jawa dan Madura.
Cara cepat: Bedakan dulu ciri perjuangan sebelum dan sesudah tahun 1908, lalu cocokkan setiap peralihan dalam pilihan dengan tonggak sejarah yang benar-benar menandainya.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tryout-ref-05-02 · Tri_Paket 3 TWK SKD 2027_Done Input.docx, soal 2
      {
        nomor: 5,
        lesson: 'Nasionalisme',
        tipe: 'pg',
        pertanyaan: `Sebuah platform digital kepemudaan menemukan bahwa sebagian besar penggunanya hanya berinteraksi dengan pemuda dari daerah yang sama. Pengelola ingin membangun jejaring nasional yang lebih kuat tanpa menghilangkan kekhasan budaya setiap daerah.
Kebijakan yang paling mencerminkan semangat Sumpah Pemuda adalah ….`,
        opsi: [
          { label: 'A', teks: `Menyelenggarakan kompetisi konten budaya antardaerah dengan penilaian juri nasional.` },
          { label: 'B', teks: `Mengajak pengguna dari berbagai daerah menggarap proyek bersama dalam bahasa Indonesia.` },
          { label: 'C', teks: `Mengembangkan pusat dokumentasi digital berisi ragam budaya daerah se-Indonesia.` },
          { label: 'D', teks: `Memperluas kegiatan komunitas daring berdasarkan kesamaan minat dan hobi pengguna.` },
          { label: 'E', teks: `Menyelenggarakan festival budaya daring dengan penampilan setiap daerah secara bergantian.` },
        ],
        kunci: 'B',
        pembahasan: `Konsep dalam soal ini menekankan semangat Sumpah Pemuda 1928, yaitu kesadaran pemuda dari berbagai daerah sebagai satu bangsa dengan bahasa Indonesia sebagai bahasa persatuan. Bahasa persatuan tidak menghapus bahasa dan budaya daerah, tetapi menjadi sarana yang mempertemukan pemuda yang berbeda latar. Masalah di platform bukan kurangnya informasi budaya, melainkan pengguna yang hanya berinteraksi dengan pemuda sedaerah. Kebijakan yang tepat harus mempertemukan pengguna lintas daerah dalam kegiatan nyata tanpa menyeragamkan budaya mereka. Opsi yang paling tepat adalah B, yaitu mengajak pengguna dari berbagai daerah menggarap proyek bersama dalam bahasa Indonesia, karena kebijakan ini langsung memecah kebiasaan berinteraksi sedaerah, memakai bahasa persatuan sebagai penghubung, dan tetap memberi ruang bagi latar budaya setiap anggota.
Alasan opsi salah:
A. Kompetisi konten budaya menumbuhkan kebanggaan daerah, tetapi peserta tetap bersaing dalam kelompok daerahnya masing-masing sehingga interaksi lintas daerah tidak terbangun.
C. Pusat dokumentasi melestarikan pengetahuan budaya, tetapi hanya menyediakan informasi dan tidak mengubah pola interaksi pengguna yang terbatas pada daerahnya.
D. Kegiatan berdasarkan minat memperluas pergaulan, tetapi tidak memastikan pengguna dari daerah berbeda bertemu dan tidak terkait dengan kesadaran sebagai satu bangsa.
E. Festival bergiliran mengenalkan keberagaman, tetapi pengguna hanya menonton penampilan daerah lain tanpa bekerja sama satu sama lain.
Cara cepat: Rumuskan dulu masalah utama platform dengan kalimat sendiri, lalu uji setiap pilihan: apakah pilihan itu mengubah pola interaksi pengguna dan sejalan dengan isi ikrar Sumpah Pemuda.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tryout-ref-04-02 · Tri_Paket 2 TWK SKD 2027_Done Input.docx, soal 2
      {
        nomor: 6,
        lesson: 'Nasionalisme',
        tipe: 'pg',
        pertanyaan: `Pada masa pergerakan nasional, sejumlah perkumpulan pemuda dari berbagai daerah membentuk forum kerja sama. Organisasi tersebut tetap menyelenggarakan kegiatan kebudayaan masing-masing, tetapi mulai menyusun agenda perjuangan bersama.
Dalam perkembangannya, muncul perbedaan mengenai penggunaan dana kegiatan. Sebagian organisasi mengutamakan program bagi anggota daerahnya, sedangkan organisasi lain mengusulkan penggunaan dana untuk kegiatan bersama yang melibatkan pemuda dari berbagai daerah. Setelah melalui musyawarah, seluruh organisasi menyepakati pendanaan program lintas daerah, meskipun sebagian rencana kegiatan masing-masing harus ditunda.
Berdasarkan perkembangan nasionalisme Indonesia, makna utama keputusan tersebut adalah ....`,
        opsi: [
          { label: 'A', teks: `Keberlanjutan pendanaan bersama` },
          { label: 'B', teks: `Penguatan sistem perwakilan` },
          { label: 'C', teks: `Solidaritas antarlembaga kedaerahan` },
          { label: 'D', teks: `Penguatan mekanisme musyawarah` },
          { label: 'E', teks: `Perluasan kesadaran kebangsaan` },
        ],
        kunci: 'E',
        pembahasan: `Nasionalisme Indonesia berkembang melalui proses tumbuhnya kesadaran sebagai satu bangsa, yang mempunyai kepentingan dan cita-cita bersama. Materi perkembangan nasionalisme menjelaskan bahwa pada awal Kebangkitan Nasional, sejumlah gerakan masih memiliki keterikatan kuat dengan kelompok atau lingkungan tertentu. Seiring berkembangnya gerakan kebangsaan, kesadaran tersebut meluas hingga melampaui identitas kedaerahan. Hal penting dalam stimulus bukan sekadar terbentuknya forum, terselenggaranya musyawarah, atau adanya dana bersama. Bukti utama perubahan ikatan kebangsaan justru terlihat ketika organisasi bersedia menunda sebagian kepentingan kelompoknya untuk mendukung kegiatan bersama lintas daerah. Tindakan tersebut menunjukkan bahwa organisasi tidak lagi menjadikan kepentingan daerah sebagai satu-satunya dasar pengambilan keputusan. Opsi yang paling tepat adalah E, karena menghubungkan keputusan konkret organisasi dengan perkembangan nasionalisme, yaitu kesediaan menempatkan tujuan kebangsaan bersama di atas kepentingan kelompok ketika keduanya harus diprioritaskan.
Alasan opsi salah:
A. Pendanaan bersama dapat memperkuat solidaritas dan keberlanjutan kegiatan. Akan tetapi, opsi ini lebih menekankan manfaat pengelolaan sumber daya daripada perubahan orientasi dari kepentingan daerah menuju kepentingan bangsa.
B. Kesepakatan perwakilan memperlihatkan perkembangan hubungan organisasi. Namun, mekanisme perwakilan merupakan sarana pengambilan keputusan, sedangkan inti perubahan nasionalisme terletak pada tujuan kebangsaan yang menjadi dasar keputusan tersebut.
C. Kerja sama antardaerah memang dapat meningkatkan manfaat kegiatan dan hubungan organisasi. Namun, perluasan manfaat merupakan dampak kerja sama, sedangkan pertanyaan meminta makna perubahan ikatan kebangsaan yang terlihat dari kesediaan organisasi menyesuaikan kepentingannya.
D. Musyawarah merupakan mekanisme yang digunakan untuk mengambil keputusan. Namun, keberhasilan musyawarah tidak dengan sendirinya menunjukkan nasionalisme apabila hasilnya tidak mencerminkan komitmen terhadap kepentingan kebangsaan bersama.
Cara cepat: Dalam soal tentang perkembangan nasionalisme, identifikasi tindakan yang menunjukkan pergeseran prioritas dari kepentingan kelompok menuju kepentingan bangsa. Jangan terkecoh oleh opsi yang hanya menjelaskan sarana, seperti forum, musyawarah, pendanaan, atau kerja sama. Perhatikan apakah tindakan tersebut menunjukkan perubahan kesadaran dan komitmen kebangsaan.`,
        tingkat: 'sedang',
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
        lesson: 'Integritas',
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
Alasan opsi salah:
A. Jujur berkaitan dengan tidak berbohong dan tidak mengambil yang bukan haknya, sedangkan stem tidak memuat penggunaan harta atau fasilitas yang bukan milik pejabat tersebut.
B. Mandiri menekankan tidak bergantung pada bantuan orang lain dalam menyelesaikan pekerjaan, sedangkan stem tidak membahas ketergantungan.
D. Disiplin menekankan ketaatan pada aturan dan ketepatan waktu, sedangkan stem tidak menyebut aturan, jadwal, atau tenggat.
E. Kerja Keras menekankan kegigihan dan pantang menyerah menghadapi kesulitan, sedangkan stem menonjolkan pola konsumsi, bukan etos kerja.
Cara cepat: Pisahkan perilaku yang berkaitan dengan gaya hidup dari perilaku yang berkaitan dengan kerja atau kejujuran, lalu cocokkan dengan pengertian tiap nilai antikorupsi.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      // tryout-ref-05-08 · Tri_Paket 3 TWK SKD 2027_Done Input.docx, soal 8
      {
        nomor: 8,
        lesson: 'Integritas',
        tipe: 'pg',
        pertanyaan: `Seorang auditor menemukan perbedaan antara laporan penggunaan dana bantuan pendidikan dan bukti transaksi yang tersedia. Sebagian transaksi telah terverifikasi, sedangkan beberapa transaksi lain masih memerlukan klarifikasi dari pihak terkait.
Kepala instansi meminta laporan disampaikan sesuai tenggat karena keterlambatan dapat menghambat pencairan bantuan berikutnya. Pedoman audit memperbolehkan penyampaian laporan sementara, tetapi mewajibkan setiap temuan dan transaksi yang belum terverifikasi dicatat secara terpisah serta ditindaklanjuti melalui permintaan klarifikasi resmi.
Tindakan yang paling mencerminkan integritas auditor dalam situasi tersebut adalah ....`,
        opsi: [
          { label: 'A', teks: `Menyampaikan laporan sementara sesuai tenggat, memisahkan transaksi yang belum terverifikasi, dan menjadwalkan klarifikasinya pada audit berikutnya.` },
          { label: 'B', teks: `Meminta perpanjangan tenggat, memisahkan transaksi yang belum terverifikasi, dan mengajukan permintaan klarifikasi resmi kepada pihak terkait.` },
          { label: 'C', teks: `Mengirim laporan tepat waktu, menyajikan transaksi yang belum terverifikasi di bagian khusus, dan meminta klarifikasi tertulis dari pihak terkait.` },
          { label: 'D', teks: `Menyampaikan laporan sementara sesuai tenggat, menggabungkan seluruh transaksi dalam satu daftar, dan meminta klarifikasi resmi atas selisihnya.` },
          { label: 'E', teks: `Menyampaikan laporan berisi transaksi yang sudah terverifikasi dan menyimpan catatan transaksi lainnya dalam kertas kerja auditor.` },
        ],
        kunci: 'C',
        pembahasan: `Konsep dalam soal ini menekankan integritas auditor: laporan harus jujur tentang status setiap temuan, tepat waktu, dan dapat dipertanggungjawabkan. Pedoman audit sudah memberi jalan keluar atas tekanan tenggat, yaitu laporan sementara boleh disampaikan asalkan setiap transaksi yang belum terverifikasi dicatat terpisah dan segera ditindaklanjuti melalui permintaan klarifikasi resmi. Ketiga syarat itu berlaku bersamaan. Tindakan yang hanya memenuhi dua di antaranya, misalnya meminta perpanjangan, menggabungkan semua transaksi dalam satu daftar, atau menunda klarifikasi ke audit berikutnya, belum mencerminkan integritas yang utuh. Opsi yang paling tepat adalah C, yaitu mengirim laporan tepat waktu, menyajikan transaksi yang belum terverifikasi di bagian khusus, dan meminta klarifikasi tertulis dari pihak terkait, karena tindakan itu memenuhi tenggat sekaligus seluruh kewajiban pedoman audit.
Alasan opsi salah:
A. Laporan tepat waktu dan pemisahan transaksi sudah sesuai pedoman, tetapi klarifikasi yang dijadwalkan pada audit berikutnya berarti transaksi yang belum terverifikasi tidak ditindaklanjuti dalam pemeriksaan yang sedang berjalan.
B. Pemisahan transaksi dan permintaan klarifikasi resmi sudah benar, tetapi perpanjangan tenggat tidak diperlukan karena pedoman membolehkan laporan sementara, dan keterlambatan dapat menghambat pencairan bantuan berikutnya.
D. Laporan tepat waktu dan permintaan klarifikasi resmi sudah benar, tetapi menggabungkan seluruh transaksi dalam satu daftar mengaburkan beda antara transaksi yang sudah dan belum terverifikasi, padahal pedoman mewajibkan pencatatan terpisah.
E. Laporan hanya memuat transaksi terverifikasi, sedangkan transaksi lain disimpan di kertas kerja internal tanpa permintaan klarifikasi, jadi temuan itu tidak tampak dalam laporan dan tidak ditindaklanjuti.
Cara cepat: Uraikan isi pedoman audit menjadi beberapa syarat terpisah, lalu uji setiap pilihan langkah demi langkah dan cari langkah yang menyimpang dari salah satu syarat itu.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tryout-ref-04-10 · Tri_Paket 2 TWK SKD 2027_Done Input.docx, soal 10
      {
        nomor: 9,
        lesson: 'Integritas',
        tipe: 'pg',
        pertanyaan: `Pimpinan unit sedang memeriksa laporan capaian layanan. Dua kesalahan pengetikan telah diperbaiki berdasarkan dokumen sumber dan memiliki jejak audit.
Namun, target layanan dalam sistem berubah dari 90% menjadi 80% setelah seorang staf menerima arahan lisan dari pejabat atasan. Pedoman instansi menetapkan bahwa perubahan target hanya berlaku setelah memperoleh persetujuan tertulis.
Laporan harus disampaikan sebelum persetujuan tersebut diperoleh. Pimpinan diperbolehkan menambahkan catatan klarifikasi pada laporan.
Keputusan yang paling mencerminkan integritas adalah ....`,
        opsi: [
          { label: 'A', teks: `Pertahankan dua koreksi, gunakan target 90%, dan abaikan perubahan 80% di sistem` },
          { label: 'B', teks: `Pertahankan dua koreksi, gunakan target 90%, dan jelaskan usulan 80% dalam laporan` },
          { label: 'C', teks: `Pertahankan dua koreksi, gunakan target 80%, dan catat persetujuan yang masih diproses` },
          { label: 'D', teks: `Kembalikan dua koreksi ke angka awal, gunakan target 90%, dan catat usulan 80%` },
          { label: 'E', teks: `Pertahankan dua koreksi, catat usulan 80%, dan tunda laporan sampai target disahkan` },
        ],
        kunci: 'B',
        pembahasan: `Konsep dalam soal ini menekankan integritas sebagai kejujuran dan akuntabilitas data: laporan hanya memuat angka yang sah, tetapi perubahan yang belum sah tidak disembunyikan. Dua koreksi salah ketik sudah sah karena didasarkan pada dokumen sumber dan memiliki jejak audit; ketentuan persetujuan tertulis hanya berlaku bagi perubahan target. Target 80% belum berlaku karena baru berupa arahan lisan, sehingga target yang dipakai tetap 90%. Laporan harus disampaikan sebelum persetujuan diperoleh, dan pedoman membolehkan catatan klarifikasi, sehingga perubahan di sistem dapat dijelaskan tanpa diberlakukan. Inti integritas di sini adalah memilah perubahan menurut keabsahannya, lalu menyampaikan semuanya secara terbuka dan tepat waktu. Opsi yang paling tepat adalah B, yaitu mempertahankan dua koreksi, memakai target 90%, dan menjelaskan usulan 80% dalam laporan, karena laporan tetap tepat waktu, hanya memuat angka yang sah, dan perbedaan target di sistem diungkap secara terbuka.
Alasan opsi salah:
A. Target 90% dan dua koreksi sudah tepat, tetapi perubahan target di sistem dibiarkan tanpa penjelasan. Pembaca laporan tidak mengetahui adanya arahan yang belum sah, padahal pedoman menyediakan catatan klarifikasi.
C. Target 80% belum berlaku karena baru berupa arahan lisan, sedangkan pedoman mensyaratkan persetujuan tertulis. Mencatat bahwa persetujuan sedang diproses tidak membuat target itu sah.
D. Persetujuan tertulis hanya disyaratkan untuk perubahan target. Koreksi salah ketik sudah berbukti dan berjejak audit, sehingga mengembalikannya justru memasukkan lagi kesalahan ke laporan.
E. Laporan wajib disampaikan sebelum persetujuan diperoleh, dan target 90% masih berlaku. Penundaan melanggar ketentuan waktu meskipun usulan 80% sudah dicatat.
Cara cepat: Pilah setiap perubahan dalam laporan menurut statusnya, yaitu sudah sah atau belum, lalu bandingkan pilihan berdasarkan ketentuan pedoman, tenggat laporan, dan kewenangan yang diberikan kepada pimpinan.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tryout-ref-04-07 · Tri_Paket 2 TWK SKD 2027_Done Input.docx, soal 7
      {
        nomor: 10,
        lesson: 'Integritas',
        tipe: 'pg',
        pertanyaan: `Panitia penerimaan barang pemerintah memeriksa 50 komputer. Hasil pemeriksaan menunjukkan 46 unit memenuhi spesifikasi kontrak, sedangkan empat unit memiliki kapasitas memori lebih rendah.
Kontrak memperbolehkan penerimaan bertahap dan pembayaran hanya atas unit yang telah sah diterima. Penyedia menyatakan akan mengganti empat unit dalam 14 hari.
Panitia harus menyusun dokumen penerimaan yang dapat dipertanggungjawabkan tanpa menunda penggunaan barang yang telah memenuhi persyaratan.
Keputusan yang paling tepat adalah ....`,
        opsi: [
          { label: 'A', teks: `Menerima 46 unit dan mencatat empat ketidaksesuaian` },
          { label: 'B', teks: `Mencatat 50 unit tiba dan membayar 46 unit tanpa berita acara penerimaan` },
          { label: 'C', teks: `Menerima 46 unit dan menyerahkan status sisanya` },
          { label: 'D', teks: `Menerima 46 unit, menunda laporan sisanya` },
          { label: 'E', teks: `Menunda seluruh penerimaan hingga penggantian` },
        ],
        kunci: 'A',
        pembahasan: `Konsep yang digunakan adalah kejujuran, tanggung jawab, dan akuntabilitas. Sebanyak 46 komputer telah memenuhi persyaratan, sedangkan empat unit belum sesuai. Karena kontrak mengizinkan penerimaan bertahap, panitia tidak perlu menunda seluruh proses. Opsi yang paling tepat adalah A, karena memproses barang yang sesuai sekaligus mendokumentasikan ketidaksesuaian empat unit untuk ditindaklanjuti. Dengan demikian, dokumen penerimaan mencerminkan kondisi sebenarnya.
Alasan opsi salah:
B. Pencatatan kedatangan 50 unit memang benar sebagai informasi logistik, tetapi pembayaran harus didasarkan pada penerimaan sah. Opsi ini justru melewatkan berita acara penerimaan dan pencatatan ketidaksesuaian empat unit.
C. Koordinasi dengan pejabat pengadaan dapat dilakukan, tetapi panitia tetap perlu mencatat status keempat unit secara jelas, bukan hanya menyerahkan penentuannya.
D. Penerimaan 46 unit tepat, tetapi hasil pemeriksaan empat unit lainnya harus dicatat segera, bukan menunggu penggantian selesai.
E. Penundaan seluruh penerimaan mengabaikan mekanisme penerimaan bertahap yang diperbolehkan.
Cara cepat: Identifikasi barang yang memenuhi kontrak, kemudian periksa apakah hasil pemeriksaan dan penerimaan dicatat secara benar. Jangan menunda pencatatan ketidaksesuaian hanya karena penyedia berjanji melakukan penggantian.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tryout-ref-05-07 · Tri_Paket 3 TWK SKD 2027_Done Input.docx, soal 7
      {
        nomor: 11,
        lesson: 'Integritas',
        tipe: 'pg',
        pertanyaan: `Seorang kepala daerah mengetahui bahwa perusahaan milik kerabat dekatnya mengikuti tender pembangunan fasilitas kesehatan. Perusahaan tersebut memenuhi seluruh persyaratan dan menawarkan harga yang kompetitif. Kepala daerah tidak pernah memberikan instruksi untuk memenangkan perusahaan tersebut, tetapi masih memiliki kewenangan dalam pengawasan proyek.
Tindakan yang paling mencerminkan integritas pejabat publik adalah ….`,
        opsi: [
          { label: 'A', teks: `Memastikan seluruh peserta tender memperoleh informasi dan kesempatan yang sama sejak awal.` },
          { label: 'B', teks: `Menugaskan panitia independen menilai penawaran sambil tetap mengawasi langsung proses tender.` },
          { label: 'C', teks: `Meminta auditor internal meninjau seluruh dokumen tender sebelum pemenang diumumkan.` },
          { label: 'D', teks: `Mengungkapkan konflik kepentingan secara resmi dan menarik diri dari proses tender.` },
          { label: 'E', teks: `Mewajibkan publikasi hasil penilaian seluruh peserta tender melalui laman resmi daerah.` },
        ],
        kunci: 'D',
        pembahasan: `Konsep dalam soal ini menekankan penanganan konflik kepentingan sebagai inti integritas pejabat publik. Konflik kepentingan sudah ada walaupun belum terjadi kecurangan: hubungan keluarga dengan peserta tender dan kewenangan pengawasan yang masih dipegang cukup untuk menimbulkan keraguan atas objektivitas. Undang-Undang Nomor 30 Tahun 2014 tentang Administrasi Pemerintahan melarang pejabat yang berpotensi memiliki konflik kepentingan menetapkan atau melakukan keputusan, dan pedoman penanganan benturan kepentingan (Permenpan-RB Nomor 37 Tahun 2012) menuntut pengungkapan serta penarikan diri. Opsi yang paling tepat adalah D, yaitu mengungkapkan konflik kepentingan secara resmi dan menarik diri dari proses tender, karena hanya langkah ini yang menghapus pengaruh hubungan keluarga dari pengawasan dan keputusan, bukan sekadar menambah lapisan pemeriksaan.
Alasan opsi salah:
A. Kesetaraan informasi adalah prinsip pengadaan yang baik, tetapi kepala daerah tetap memegang kewenangan atas tender yang diikuti perusahaan kerabatnya.
B. Panitia independen membantu objektivitas penilaian, tetapi pengawasan langsung oleh kepala daerah justru mempertahankan keterlibatan pihak yang berkonflik.
C. Pemeriksaan auditor internal menambah kontrol, tetapi tidak mengubah posisi kepala daerah yang masih berwenang atas proses tender.
E. Publikasi hasil penilaian meningkatkan transparansi, tetapi tidak menghilangkan kewenangan kepala daerah atas tender yang diikuti kerabatnya.
Cara cepat: Pisahkan tiga hal dalam kasus, yaitu hubungan pribadi, kewenangan yang masih dimiliki, dan tahap proses, lalu nilai apakah setiap pilihan menghapus pengaruh hubungan itu atau sekadar menambah lapisan pemeriksaan.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      // tryout-ref-05-12 · Tri_Paket 3 TWK SKD 2027_Done Input.docx, soal 12
      {
        nomor: 12,
        lesson: 'Integritas',
        tipe: 'pg',
        pertanyaan: `Seorang ketua panitia seleksi menemukan kesalahan pencatatan skor peserta yang berpotensi mengubah peringkat akhir. Hasil seleksi belum diumumkan, tetapi sebagian anggota panitia mengusulkan agar koreksi dilakukan tanpa dokumentasi tambahan karena kesalahan tersebut dianggap hanya persoalan teknis.
Keputusan yang paling mencerminkan integritas dalam proses seleksi adalah ….`,
        opsi: [
          { label: 'A', teks: `Mengoreksi skor sesuai lembar jawaban dan menyimpan daftar skor terbaru dalam arsip resmi panitia.` },
          { label: 'B', teks: `Mengoreksi skor peserta di sekitar batas kelulusan dan mencatat perubahannya dalam risalah rapat panitia.` },
          { label: 'C', teks: `Meminta pengawas seleksi memeriksa kesalahan pencatatan dan memastikan tidak ada peserta yang dirugikan.` },
          { label: 'D', teks: `Membetulkan skor sesuai bukti serta mencatat setiap perubahan dan alasannya dalam arsip panitia.` },
          { label: 'E', teks: `Menunda pengumuman sampai seluruh anggota panitia menyetujui hasil perhitungan ulang.` },
        ],
        kunci: 'D',
        pembahasan: `Konsep dalam soal ini menekankan akuntabilitas dan keterlacakan sebagai bagian dari integritas penyelenggara seleksi. Ketua panitia menemukan kesalahan pencatatan skor yang dapat mengubah peringkat, sementara sebagian anggota ingin memperbaikinya tanpa dokumentasi karena dianggap persoalan teknis. Koreksi wajib dilakukan untuk semua skor yang salah karena menyangkut hak peserta, tetapi angka yang benar saja belum cukup: setiap perubahan pada data seleksi harus dapat ditelusuri, yaitu skor mana yang diubah dan berdasarkan bukti apa. Menyimpan daftar skor terbaru, meminta pengawas memeriksa, atau menunggu persetujuan seluruh panitia tidak meninggalkan jejak perubahan semacam itu. Opsi yang paling tepat adalah D, yaitu membetulkan skor sesuai bukti serta mencatat setiap perubahan dan alasannya dalam arsip panitia, karena langkah itu menolak koreksi diam-diam dan membuat hasil seleksi dapat dipertanggungjawabkan bila kelak dipersoalkan.
Alasan opsi salah:
A. Skor memang dibetulkan dan daftarnya diarsipkan, tetapi daftar terbaru hanya menimpa angka lama tanpa jejak tentang apa yang diubah dan mengapa; ini sama saja dengan koreksi tanpa dokumentasi yang diusulkan sebagian anggota.
B. Perubahan memang dicatat, tetapi koreksi yang terbatas pada peserta di sekitar batas kelulusan membiarkan skor peserta lain tetap salah, padahal kesalahan itu dapat mengubah peringkat siapa pun.
C. Kehadiran pengawas menambah objektivitas, tetapi pemeriksaan itu belum meninggalkan catatan tentang skor yang diubah dan dasar perubahannya.
E. Persetujuan seluruh panitia tidak menggantikan bukti dan catatan koreksi, dan menunda pengumuman saja tidak membuat perubahan skor dapat ditelusuri.
Cara cepat: Bedakan hasil akhir yang benar dari proses koreksi yang dapat dipertanggungjawabkan, lalu periksa apakah setiap pilihan memenuhi keduanya untuk semua peserta.`,
        tingkat: 'sulit',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Bela Negara` },
    soal: [
      // tryout-ref-03-11 · Nynda_Paket 1 TWK SKD 2027_Done Input.docx, soal 11
      {
        nomor: 13,
        lesson: 'Bela Negara',
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
Alasan opsi salah:
A. Cinta tanah air menekankan rasa memiliki, bangga, dan menjaga wilayah serta kekayaan Indonesia, bukan kesiapan fisik dan psikis.
B. Sadar berbangsa dan bernegara menekankan pemahaman hak dan kewajiban serta kepatuhan pada hukum, bukan kesiapan diri dan keterampilan dasar.
C. Setia pada Pancasila menekankan keyakinan terhadap Pancasila sebagai ideologi dan dasar negara, bukan kebugaran ataupun ketangguhan mental.
E. Rela berkorban menekankan kesediaan menyerahkan waktu, tenaga, dan harta bagi kepentingan bangsa, bukan kesiapan fisik dan psikis yang dimiliki sejak awal.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      // tryout-ref-04-17 · Tri_Paket 2 TWK SKD 2027_Done Input.docx, soal 17
      {
        nomor: 14,
        lesson: 'Bela Negara',
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
        pembahasan: `Konsep yang digunakan adalah kemampuan awal bela negara dan kesiapsiagaan menghadapi ancaman nonmiliter. Kemampuan awal bela negara mencakup kesiapan psikis dan fisik. Dalam konteks sekolah di wilayah rawan bencana, keterampilan pertolongan pertama dan evakuasi merupakan contoh kemampuan praktis yang mendukung kesiapsiagaan. Hasil evaluasi menunjukkan bahwa hanya 70% peserta program Q mampu memperagakan keterampilan secara mandiri. Artinya, masih terdapat peserta yang membutuhkan penguatan. Opsi yang paling tepat adalah C, karena secara langsung meningkatkan keterampilan yang diperlukan ketika menghadapi keadaan darurat.
Alasan opsi salah:
A. Kepedulian sosial penting dalam bela negara, tetapi belum meningkatkan kemampuan melakukan tindakan darurat secara mandiri.
B. Pengetahuan dan kepedulian saling mendukung, tetapi tidak menggantikan latihan keterampilan.
D. Ketiga program memang bermanfaat, tetapi prioritas pembinaan perlu didasarkan pada kebutuhan peserta yang ditemukan dalam evaluasi.
E. Penguatan pengetahuan bermanfaat, tetapi masalah yang diidentifikasi adalah kemampuan praktik.
Cara cepat: Tentukan aspek bela negara yang belum dikuasai. Pilih program yang secara langsung mengembangkan aspek tersebut.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      // tryout-ref-03-07 · Nynda_Paket 1 TWK SKD 2027_Done Input.docx, soal 7
      {
        nomor: 15,
        lesson: 'Bela Negara',
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
Alasan opsi salah:
A. Cinta tanah air menekankan rasa memiliki dan menjaga wilayah serta lingkungan Indonesia, bukan pembelaan dasar negara dari paham pengganti.
B. Sadar berbangsa dan bernegara menekankan kesadaran dan partisipasi sebagai warga negara secara umum, sedangkan stem secara khusus menyoal upaya mengganti dasar negara.
D. Tidak ada pengorbanan waktu, tenaga, atau harta yang menjadi fokus tindakan mahasiswa tersebut.
E. Kemampuan awal bela negara menekankan kesiapan fisik, psikis, dan kecerdasan, bukan keteguhan pada ideologi negara.
Cara cepat: Tentukan apa yang sedang dipertahankan tokoh dalam kasus, lalu cocokkan dengan pengertian tiap nilai dasar bela negara dan bedakan nilai yang mirip dari objek yang dibela.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      // tryout-ref-05-17 · Tri_Paket 3 TWK SKD 2027_Done Input.docx, soal 17
      {
        nomor: 16,
        lesson: 'Bela Negara',
        tipe: 'pg',
        pertanyaan: `Sebuah kabupaten di wilayah perbatasan mengalami keterbatasan fasilitas kesehatan, pendidikan, dan jaringan komunikasi. Akibatnya, sebagian masyarakat lebih sering memanfaatkan layanan dari negara tetangga. Kondisi tersebut menimbulkan kekhawatiran mengenai melemahnya keterikatan masyarakat terhadap Indonesia.
Strategi bela negara yang paling tepat untuk mengatasi persoalan tersebut adalah ….`,
        opsi: [
          { label: 'A', teks: `Memperkuat pengawasan perbatasan dan membangun koordinasi keamanan dengan aparat setempat.` },
          { label: 'B', teks: `Memperluas jangkauan layanan publik dasar di kabupaten tersebut secara bertahap dan berkelanjutan.` },
          { label: 'C', teks: `Mengembangkan program pendidikan wawasan kebangsaan tentang identitas nasional bagi masyarakat setempat.` },
          { label: 'D', teks: `Mendorong pengembangan usaha lokal dan perluasan peluang ekonomi bagi masyarakat perbatasan.` },
          { label: 'E', teks: `Menjalin kerja sama lintas batas dengan negara tetangga dalam pemanfaatan fasilitas layanan yang sudah ada.` },
        ],
        kunci: 'B',
        pembahasan: `Konsep dalam soal ini menekankan bela negara nonmiliter di wilayah perbatasan, yaitu menjaga keterikatan warga pada NKRI dengan menghadirkan negara dalam kebutuhan sehari-hari mereka. Kabupaten dalam kasus kekurangan fasilitas kesehatan, pendidikan, dan jaringan komunikasi, sehingga warga memakai layanan negara tetangga dan keterikatan mereka pada Indonesia dikhawatirkan melemah. Strategi yang tepat harus menyentuh penyebab itu, bukan hanya gejalanya. Opsi yang paling tepat adalah B, yaitu memperluas jangkauan layanan publik dasar secara bertahap dan berkelanjutan, karena langkah itu menghapus alasan warga bergantung pada negara tetangga dan membuat mereka merasakan langsung kehadiran negara.
Alasan opsi salah:
A. Pengawasan perbatasan penting bagi kedaulatan, tetapi tidak menjawab penyebab warga beralih ke layanan negara tetangga, yaitu terbatasnya fasilitas dasar.
C. Pendidikan kebangsaan dapat memperkuat pemahaman identitas, tetapi tidak memenuhi kebutuhan layanan yang membuat warga bergantung pada negara tetangga.
D. Peluang ekonomi bermanfaat, tetapi tidak menyelesaikan keterbatasan fasilitas kesehatan, pendidikan, dan jaringan komunikasi.
E. Memanfaatkan fasilitas negara tetangga justru mempertahankan ketergantungan yang menjadi sumber kekhawatiran, bukan memperkuat layanan nasional.
Cara cepat: Tentukan dahulu penyebab warga beralih ke layanan negara tetangga, lalu periksa apakah setiap strategi menghilangkan penyebab itu atau hanya menangani akibatnya.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tryout-ref-03-10 · Nynda_Paket 1 TWK SKD 2027_Done Input.docx, soal 10
      {
        nomor: 17,
        lesson: 'Bela Negara',
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
        pembahasan: `Konsep dalam soal ini menekankan ketahanan nasional berdasarkan Pancagatra, yang mencakup ideologi, politik, ekonomi, sosial budaya, serta pertahanan dan keamanan. Ketahanan wilayah perbatasan tidak cukup dibangun melalui penguatan satu bidang. Pemerintah perlu mempertimbangkan hubungan antara ketahanan ekonomi, akses informasi nasional, dan pelestarian budaya masyarakat. Stimulus menunjukkan tiga permasalahan yang saling berkaitan. Ketergantungan terhadap kebutuhan pokok dari negara tetangga disebabkan lemahnya distribusi produk dalam negeri. Dominasi siaran asing terjadi karena keterbatasan infrastruktur penyiaran nasional. Sementara itu, melemahnya pengetahuan generasi muda mengenai budaya daerah berkaitan dengan berkurangnya kegiatan pelestarian budaya. Opsi yang paling tepat adalah A, karena mengatasi ketiga penyebab tersebut secara langsung. Penguatan distribusi produk lokal meningkatkan akses masyarakat terhadap barang dalam negeri. Perluasan siaran nasional memperbaiki keterjangkauan informasi, sedangkan pendidikan budaya daerah membantu menjaga keberlanjutan identitas budaya antargenerasi.
Alasan opsi salah:
B. Subsidi kebutuhan pokok dapat meringankan beban masyarakat, sedangkan layanan informasi dan festival budaya memiliki manfaat positif. Namun, subsidi tidak secara langsung memperbaiki distribusi produk dalam negeri. Festival tahunan juga belum menjamin keberlanjutan pembelajaran budaya bagi generasi muda.
C. Pembangunan pasar perbatasan dapat meningkatkan kegiatan ekonomi dan literasi media membantu masyarakat menyikapi informasi secara kritis. Namun, pembangunan pasar belum tentu memperbaiki distribusi kebutuhan pokok, sedangkan literasi media tidak secara langsung mengatasi keterbatasan infrastruktur siaran nasional.
D. Koperasi perdagangan dapat memperkuat posisi pelaku ekonomi lokal dan pertunjukan budaya memperluas apresiasi masyarakat. Namun, siaran kebangsaan belum tentu menjangkau masyarakat apabila keterbatasan infrastruktur penyiaran tidak diperbaiki. Pertunjukan budaya juga belum menjamin adanya proses pewarisan pengetahuan kepada generasi muda.
E. Infrastruktur perdagangan dapat memperlancar mobilitas barang, sedangkan media digital dan dukungan komunitas seni dapat memberikan manfaat sosial budaya. Namun, penyediaan informasi digital belum tentu menjangkau masyarakat yang mengalami keterbatasan akses siaran, sementara dukungan komunitas seni tidak secara khusus memastikan pendidikan budaya berlangsung secara berkelanjutan.
Cara cepat: Dalam soal kebijakan terpadu berbasis Pancagatra, identifikasi penyebab setiap masalah, kemudian bandingkan apakah program yang ditawarkan benar-benar mengatasi penyebab tersebut. Jangan hanya memilih opsi karena memuat banyak program positif.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      // tryout-ref-04-13 · Tri_Paket 2 TWK SKD 2027_Done Input.docx, soal 13
      {
        nomor: 18,
        lesson: 'Bela Negara',
        tipe: 'pg',
        pertanyaan: `Pemerintah kabupaten perbatasan menyiapkan dana khusus untuk dua program peningkatan ketahanan masyarakat selama enam bulan.
Hasil evaluasi menunjukkan bahwa persediaan obat esensial di beberapa puskesmas sering terputus sehingga layanan kesehatan terhenti. Selain itu, radio komunikasi antarpos penanggulangan bencana tidak berfungsi dalam dua simulasi terakhir sehingga koordinasi evakuasi terganggu.
Pemerintah juga mencatat kekurangan guru dan keterbatasan transportasi desa. Namun, kedua masalah tersebut telah memperoleh penanganan melalui program reguler yang sedang berjalan.
Dengan mempertimbangkan ancaman nonmiliter terhadap keselamatan masyarakat, pasangan program yang paling tepat diprioritaskan adalah ....`,
        opsi: [
          { label: 'A', teks: `Distribusi obat dan transportasi kesehatan` },
          { label: 'B', teks: `Kesiapsiagaan bencana dan fasilitas pendidikan` },
          { label: 'C', teks: `Fasilitas kesehatan dan transportasi desa` },
          { label: 'D', teks: `Komunikasi darurat dan latihan evakuasi` },
          { label: 'E', teks: `Rantai pasok obat dan komunikasi darurat` },
        ],
        kunci: 'E',
        pembahasan: `Konsep yang digunakan adalah ketahanan masyarakat terhadap ancaman nonmiliter. Gangguan kesehatan dan komunikasi darurat dapat menghambat perlindungan masyarakat, terutama ketika terjadi bencana. Opsi yang paling tepat adalah E, karena menyelesaikan dua penyebab gangguan yang telah terbukti, yaitu terputusnya persediaan obat dan tidak berfungsinya komunikasi darurat.
Alasan opsi salah:
A. Transportasi kesehatan dapat membantu pelayanan, tetapi tidak menyelesaikan kegagalan radio komunikasi.
B. Kesiapsiagaan penting, tetapi fasilitas pendidikan bukan penyebab gangguan mendesak yang disebutkan.
C. Fasilitas kesehatan dapat mendukung layanan, tetapi tidak secara khusus memperbaiki rantai pasok obat maupun komunikasi darurat. Transportasi juga sudah mendapat penanganan reguler.
D. Pelatihan evakuasi bermanfaat, tetapi belum memperbaiki kekosongan obat.
Cara cepat: Bedakan gangguan utama dari program pendukung. Pilih dua tindakan yang langsung memperbaiki penyebab gangguan terhadap keselamatan masyarakat.`,
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
        lesson: 'Pilar Negara',
        tipe: 'pg',
        pertanyaan: `Pemerintah daerah memiliki anggaran terbatas untuk memberikan bantuan pendidikan. Hasil pendataan menunjukkan bahwa wilayah A memiliki lebih banyak siswa yang kesulitan mengakses sekolah akibat jarak dan biaya transportasi, sedangkan wilayah B memiliki jumlah siswa lebih sedikit dan akses pendidikan yang relatif memadai.
Kebijakan yang paling sesuai dengan prinsip keadilan sosial Pancasila adalah ….`,
        opsi: [
          { label: 'A', teks: `Membagi anggaran bantuan dengan jumlah yang sama besar kepada kedua wilayah tersebut.` },
          { label: 'B', teks: `Menetapkan besaran bantuan setiap wilayah berdasarkan jumlah sekolah yang ada di wilayah itu.` },
          { label: 'C', teks: `Memprioritaskan bantuan bagi sekolah dengan pencapaian akademik tinggi di kedua wilayah.` },
          { label: 'D', teks: `Mengalokasikan bantuan berdasarkan usulan pimpinan tiap wilayah sesuai prioritas pembangunan masing-masing.` },
          { label: 'E', teks: `Mengalokasikan bantuan berdasarkan tingkat kebutuhan dan hambatan siswa yang terverifikasi.` },
        ],
        kunci: 'E',
        pembahasan: `Konsep dalam soal ini menekankan sila kelima Pancasila, “Keadilan sosial bagi seluruh rakyat Indonesia”, yang tidak selalu berarti membagi sama rata. Anggaran pemerintah daerah terbatas. Data menunjukkan wilayah A memiliki lebih banyak siswa yang terhambat jarak dan biaya transportasi, sementara akses pendidikan di wilayah B relatif memadai. Adil dalam keadaan ini berarti memberi dukungan sesuai kebutuhan agar setiap siswa memperoleh kesempatan pendidikan yang layak. Opsi yang paling tepat adalah E, yaitu mengalokasikan bantuan berdasarkan tingkat kebutuhan dan hambatan siswa yang terverifikasi, karena dasar alokasi itu sejalan dengan tujuan bantuan dan data yang tersedia, sekaligus dapat dipertanggungjawabkan.
Alasan opsi salah:
A. Pembagian sama besar mencerminkan kesamaan nominal, tetapi mengabaikan perbedaan kondisi kedua wilayah sehingga siswa yang paling terhambat tidak mendapat dukungan memadai.
B. Jumlah sekolah tidak menggambarkan hambatan jarak dan biaya transportasi yang dialami siswa.
C. Prestasi akademik adalah ukuran hasil belajar, bukan dasar yang tepat ketika tujuan bantuan adalah mengatasi kesenjangan akses.
D. Usulan tiap wilayah berguna untuk perencanaan, tetapi tanpa data kebutuhan yang terverifikasi, alokasinya belum tentu menyasar siswa yang paling membutuhkan.
Cara cepat: Bandingkan dahulu kondisi kedua wilayah dalam data, lalu uji setiap pilihan: dasar pembagian apa yang dipakai dan apakah dasar itu sesuai dengan tujuan bantuan.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tryout-ref-05-23 · Tri_Paket 3 TWK SKD 2027_Done Input.docx, soal 23
      {
        nomor: 20,
        lesson: 'Pilar Negara',
        tipe: 'pg',
        pertanyaan: `Sebuah komunitas pendidikan memberikan bantuan belajar kepada anak-anak dari keluarga kurang mampu. Salah satu pengurus mengusulkan agar seluruh penerima bantuan mengikuti kegiatan keagamaan tertentu sebagai bagian dari pembinaan karakter.
Pengurus lain menilai bahwa pembinaan karakter tetap penting, tetapi pemberian bantuan tidak seharusnya membatasi kebebasan agama penerima.
Keputusan yang paling sesuai dengan sila pertama Pancasila adalah ….`,
        opsi: [
          { label: 'A', teks: `Mewajibkan penerima bantuan mengikuti pembinaan kerohanian lintas agama yang menekankan nilai moral universal.` },
          { label: 'B', teks: `Memisahkan hak atas bantuan dari kegiatan agama dan membuka pembinaan keagamaan bagi penerima yang berminat.` },
          { label: 'C', teks: `Meminta persetujuan keluarga sebelum menetapkan kegiatan keagamaan tertentu sebagai bagian program bantuan.` },
          { label: 'D', teks: `Menjadikan kegiatan keagamaan tertentu bersifat sukarela, tetapi mendahulukan bantuan bagi anak yang mengikutinya.` },
          { label: 'E', teks: `Mengganti kegiatan keagamaan tertentu dengan doa bersama menurut satu tata cara sebelum setiap sesi belajar.` },
        ],
        kunci: 'B',
        pembahasan: `Konsep dalam soal ini menekankan sila pertama Pancasila, Ketuhanan Yang Maha Esa, yang mencakup penghormatan terhadap kebebasan menjalankan ibadah sesuai agama dan kepercayaan masing-masing serta sikap tidak memaksakan suatu agama kepada orang lain. Jaminan konstitusionalnya ada dalam Pasal 29 ayat (2) UUD 1945, tetapi soal ini meminta sudut pandang nilai sila pertama. Komunitas memberi bantuan belajar kepada anak dari keluarga kurang mampu, lalu muncul usulan agar semua penerima wajib mengikuti kegiatan keagamaan tertentu. Mengaitkan bantuan dengan kegiatan agama, baik sebagai kewajiban, syarat persetujuan, prioritas, maupun tata cara ibadah yang diseragamkan, menjadikan kebutuhan ekonomi alat tekanan, meskipun tujuannya pembinaan karakter. Opsi yang paling tepat adalah B, yaitu memisahkan hak atas bantuan dari kegiatan agama dan membuka pembinaan keagamaan bagi penerima yang berminat, karena bantuan tetap diterima tanpa memandang keyakinan, sementara tujuan pembinaan tercapai bagi yang bersedia.
Alasan opsi salah:
A. Pembinaan lintas agama tampak inklusif, tetapi tetap diwajibkan bagi penerima bantuan, jadi kegiatan kerohanian masih menjadi syarat memperoleh bantuan.
C. Persetujuan keluarga tidak sepenuhnya bebas ketika anak bergantung pada bantuan, dan kegiatan keagamaan tertentu tetap menjadi bagian program bantuan.
D. Sebutan sukarela kehilangan maknanya jika anak yang ikut didahulukan menerima bantuan; keterkaitan itu tetap menekan keluarga yang berbeda keyakinan.
E. Doa bersama dengan satu tata cara tetap memaksakan bentuk ibadah tertentu kepada penerima yang berbeda agama, padahal sila pertama menghormati cara beribadah masing-masing.
Cara cepat: Tentukan dahulu hal yang diperselisihkan para pengurus, lalu periksa apakah setiap pilihan benar-benar menyelesaikan persoalan itu atau hanya mengubah bentuk kegiatannya.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tryout-ref-03-21 · Nynda_Paket 1 TWK SKD 2027_Done Input.docx, soal 21
      {
        nomor: 21,
        lesson: 'Pilar Negara',
        tipe: 'pg',
        pertanyaan: `Salah satu butir pengamalan sila ke-4 Pancasila berbunyi “menerima dan melaksanakan hasil musyawarah dengan iktikad baik dan rasa tanggung jawab”. Sikap yang paling tepat mencerminkan butir tersebut adalah …`,
        opsi: [
          { label: 'A', teks: `Sinta menggalang donasi bagi korban gempa di negara lain melalui lembaga kemanusiaan.` },
          { label: 'B', teks: `Bu Ratna mengajak tetangga yang berbeda agama bekerja sama membersihkan lingkungan rumah ibadah.` },
          { label: 'C', teks: `Rudi mengajari tetangganya membuat kerajinan anyaman hingga mampu membuka usaha sendiri.` },
          { label: 'D', teks: `Andi mengajak pemuda dari berbagai suku di kampungnya mendirikan sanggar yang menampilkan seni daerah.` },
          { label: 'E', teks: `Pak Darto tetap membayar iuran jalan yang disepakati rapat warga meski usulannya ditolak.` },
        ],
        kunci: 'E',
        pembahasan: `Konsep dalam soal ini menekankan penerapan butir pengamalan sila ke-4, Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan, khususnya sikap setelah keputusan bersama diambil. Butir yang dikutip menuntut setiap peserta musyawarah tetap menjalankan keputusan bersama dengan iktikad baik, termasuk ketika pendapat pribadinya tidak diterima. Inti nilai kerakyatan di sini adalah kesediaan melaksanakan kesepakatan bersama secara bertanggung jawab tanpa memaksakan pendapat sendiri. Opsi yang paling tepat adalah E, karena Pak Darto tetap membayar iuran sesuai kesepakatan rapat warga walaupun usulannya ditolak.
Alasan opsi salah:
A. Menggalang donasi bagi korban bencana di negara lain mencerminkan sila ke-2, yaitu gemar melakukan kegiatan kemanusiaan dan merasa bagian dari seluruh umat manusia.
B. Bekerja sama dengan pemeluk agama lain mencerminkan butir sila ke-1 tentang hormat-menghormati dan bekerja sama antarpemeluk agama.
C. Mengajari keterampilan hingga orang lain mampu berusaha sendiri mencerminkan butir sila ke-5, yaitu suka menolong orang lain agar dapat berdiri sendiri.
D. Menghimpun pemuda lintas suku dalam kegiatan seni mencerminkan butir sila ke-3 tentang mengembangkan persatuan atas dasar Bhinneka Tunggal Ika.
Cara cepat: Ubah butir pengamalan dalam soal menjadi perilaku konkret, lalu cari tindakan yang benar-benar menjalankan butir itu, bukan tindakan baik lain yang bersumber dari sila yang berbeda.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tryout-ref-04-19 · Tri_Paket 2 TWK SKD 2027_Done Input.docx, soal 19
      {
        nomor: 22,
        lesson: 'Pilar Negara',
        tipe: 'pg',
        pertanyaan: `Sebuah museum pendidikan menyiapkan pameran tentang pembentukan Pancasila sebagai dasar negara.
Tim kurator mengumpulkan dokumen pidato 1 Juni 1945, Piagam Jakarta 22 Juni 1945, hasil pembahasan BPUPKI, dan keputusan PPKI 18 Agustus 1945.
Dalam rapat, sebagian anggota ingin memberikan penjelasan yang sama terhadap seluruh dokumen karena semuanya berkontribusi terhadap pembentukan dasar negara. Anggota lain menilai bahwa perbedaan fungsi dokumen justru perlu dijelaskan agar pengunjung memahami proses musyawarah dan pengesahan.
Keputusan tim yang paling mencerminkan penerapan nilai Pancasila adalah ....`,
        opsi: [
          { label: 'A', teks: `Menyusun alur akhir pengesahan dengan pusat perhatian pada keputusan PPKI` },
          { label: 'B', teks: `Menguraikan kesepakatan Piagam Jakarta sebagai puncak seluruh perumusan` },
          { label: 'C', teks: `Menempatkan semua dokumen pada fungsi historis yang dianggap sama` },
          { label: 'D', teks: `Menguraikan fungsi historis tiap dokumen dan kompromi perumusannya` },
          { label: 'E', teks: `Mengadakan dialog mengenai tokoh utama dan pengaruhnya pada keputusan` },
        ],
        kunci: 'D',
        pembahasan: `Konsep yang digunakan adalah penerapan nilai musyawarah dan persatuan dalam proses perumusan Pancasila. Setiap dokumen mempunyai peran historis yang penting, tetapi statusnya berbeda. Penyampaian gagasan, perumusan kompromi, pembahasan rancangan, dan pengesahan konstitusi merupakan bagian yang saling berkaitan. Opsi yang paling tepat adalah D, karena tidak menyamakan kedudukan dokumen, tetapi tetap menghargai kontribusi seluruh proses sebagai hasil musyawarah dan kompromi.
Alasan opsi salah:
A. Penekanan pada keputusan PPKI memang menjelaskan pengesahan, tetapi kurang menggambarkan proses perumusan dan kompromi sebelumnya.
B. Piagam Jakarta menunjukkan proses kesepakatan penting, tetapi tidak dapat diperlakukan sebagai satu-satunya puncak tanpa menjelaskan pengesahan 18 Agustus 1945.
C. Menyeragamkan penjelasan seluruh dokumen memang dapat membuat pameran sederhana, tetapi mengaburkan perbedaan fungsi historis dokumen dan proses pengesahan.
E. Diskusi tentang tokoh membantu memahami kontribusi individu, tetapi belum menjamin pengunjung memahami fungsi masing-masing dokumen dan proses musyawarah.
Cara cepat: Pilih tindakan yang menjaga ketepatan sejarah sekaligus menunjukkan penerapan nilai musyawarah dan persatuan.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tryout-ref-04-22 · Tri_Paket 2 TWK SKD 2027_Done Input.docx, soal 22
      {
        nomor: 23,
        lesson: 'Pilar Negara',
        tipe: 'pg',
        pertanyaan: `Dua komunitas budaya mengajukan penggunaan aula kecamatan pada waktu yang sama.
Komunitas A akan menyelenggarakan ritual budaya yang pelaksanaannya terikat pada hari tertentu dan membutuhkan waktu tiga jam. Komunitas B akan mengadakan lokakarya kebudayaan selama tiga jam dengan menghadirkan narasumber yang masih dapat menyesuaikan jadwal satu hari.
Waktu penggunaan aula pada hari tersebut hanya cukup bagi salah satu kegiatan. Kecamatan memiliki aula alternatif dengan kapasitas dan fasilitas setara pada hari berikutnya, dan komunitas B menyatakan dapat memindahkan kegiatan jika keputusan disepakati bersama. Kedua komunitas memiliki hak yang sama untuk mengakses fasilitas publik.
Pemerintah kecamatan harus menentukan penggunaan aula dengan tetap menghormati kebutuhan setiap komunitas.
Kebijakan yang paling mencerminkan prinsip Bhinneka Tunggal Ika adalah ....`,
        opsi: [
          { label: 'A', teks: `Pemindahan ritual ke aula setara esok hari atas mufakat` },
          { label: 'B', teks: `Pemindahan lokakarya ke aula setara esok hari atas keputusan camat` },
          { label: 'C', teks: `Pembagian waktu aula secara sama bagi ritual dan lokakarya atas mufakat` },
          { label: 'D', teks: `Pemindahan lokakarya ke aula setara esok hari atas mufakat` },
          { label: 'E', teks: `Undian penggunaan aula antara ritual dan lokakarya atas mufakat` },
        ],
        kunci: 'D',
        pembahasan: `Konsep dalam soal ini menekankan Bhinneka Tunggal Ika, semboyan pada lambang negara (Pasal 36A UUD 1945), dalam layanan publik: menghormati perbedaan kebutuhan setiap kelompok budaya sambil menjamin hak yang sama atas fasilitas negara. Ritual komunitas A terikat pada hari tertentu, sedangkan lokakarya komunitas B dapat bergeser satu hari. Waktu aula hanya cukup untuk satu kegiatan, aula pengganti dengan fasilitas setara tersedia esok hari, dan komunitas B bersedia pindah bila keputusan disepakati bersama. Perlakuan yang adil di sini bukan membagi waktu secara identik atau menyerahkannya pada undian, melainkan menyesuaikan solusi dengan sifat kebutuhan masing-masing melalui kesepakatan. Opsi yang paling tepat adalah D, yaitu pemindahan lokakarya ke aula setara esok hari atas mufakat, karena kedua kegiatan tetap terlaksana dengan fasilitas setara, syarat kesediaan komunitas B dipenuhi, dan tidak ada komunitas yang dikorbankan.
Alasan opsi salah:
A. Kesepakatan dan aula setara sudah ada, tetapi yang dipindahkan justru ritual yang pelaksanaannya terikat pada hari tertentu. Memindahkannya berarti mengabaikan kebutuhan khas komunitas A.
B. Lokakarya memang kegiatan yang dapat bergeser, tetapi keputusan camat secara sepihak mengabaikan syarat komunitas B, yang hanya bersedia pindah bila keputusan disepakati bersama.
C. Pembagian waktu yang sama tampak adil, tetapi waktu aula pada hari itu hanya cukup untuk satu kegiatan tiga jam, sehingga tidak ada kegiatan yang dapat terlaksana utuh.
E. Undian tampak netral, tetapi memperlakukan dua kebutuhan yang berbeda seolah-olah sama. Ritual bisa kehilangan harinya, padahal tersedia aula pengganti yang memungkinkan kedua kegiatan berlangsung.
Cara cepat: Catat dahulu fakta pembatas dalam kasus, yaitu kegiatan mana yang terikat waktu, mana yang dapat bergeser, fasilitas apa yang tersedia, dan syarat apa yang diajukan komunitas, lalu periksa apakah setiap pilihan sesuai dengan semua fakta itu.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tryout-ref-03-22 · Nynda_Paket 1 TWK SKD 2027_Done Input.docx, soal 22
      {
        nomor: 24,
        lesson: 'Pilar Negara',
        tipe: 'pg',
        pertanyaan: `Dalam pembahasan rancangan APBD, sebuah DPRD kabupaten menerima usulan agar porsi belanja pendidikan diturunkan hingga di bawah 20 persen. Alasan usulan itu adalah pemerintah pusat telah menyediakan dana pendidikan yang besar melalui APBN. Berdasarkan Pasal 31 UUD 1945, penilaian yang paling tepat terhadap usulan tersebut adalah …`,
        opsi: [
          { label: 'A', teks: `Usulan itu dapat diterima selama anggaran pendidikan dalam APBN sudah memenuhi batas minimal.` },
          { label: 'B', teks: `Usulan itu dapat diterima apabila disetujui gubernur sebagai wakil pemerintah pusat.` },
          { label: 'C', teks: `Usulan itu sah apabila ditetapkan bersama dalam peraturan daerah tentang APBD.` },
          { label: 'D', teks: `Usulan itu tidak sejalan dengan batas minimal yang juga mengikat penyusunan APBD.` },
          { label: 'E', teks: `Usulan itu cukup diputuskan melalui musyawarah antara DPRD dan kepala daerah.` },
        ],
        kunci: 'D',
        pembahasan: `Konsep dalam soal ini menekankan kedudukan Pasal 31 ayat (4) UUD 1945 sebagai norma konstitusi yang mengikat penyusunan anggaran negara dan daerah. Pasal 31 ayat (4) menyatakan bahwa negara memprioritaskan anggaran pendidikan sekurang-kurangnya dua puluh persen dari APBN serta dari APBD untuk memenuhi kebutuhan penyelenggaraan pendidikan nasional. Inti ketentuan konstitusi di sini adalah kewajiban batas minimal anggaran pendidikan melekat pada masing-masing anggaran, yaitu APBN dan APBD, sehingga tidak dapat dialihkan dari satu tingkat pemerintahan ke tingkat lainnya. Opsi yang paling tepat adalah D, karena besarnya dana pendidikan dalam APBN tidak menghapus kewajiban daerah memenuhi batas minimal dua puluh persen dalam APBD.
Alasan opsi salah:
A. Pasal 31 ayat (4) menyebut APBN serta APBD, sehingga pemenuhan batas minimal di APBN tidak menggugurkan kewajiban yang sama dalam APBD.
B. Persetujuan gubernur sebagai wakil pemerintah pusat tidak dapat mengesampingkan ketentuan UUD.
C. Perda tentang APBD berada di bawah UUD dalam hierarki peraturan perundang-undangan dan tidak boleh bertentangan dengannya.
E. Musyawarah merupakan cara mengambil keputusan, bukan dasar untuk menyimpangi batas minimal yang ditetapkan konstitusi.
Cara cepat: Pastikan lebih dahulu pihak yang diikat oleh ketentuan pasal itu, lalu uji alasan yang ditawarkan setiap pilihan terhadap bunyi ketentuannya.`,
        tingkat: 'sulit',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Bahasa Negara > Ide pokok atau gagasan utama` },
    soal: [
      // tryout-ref-02-01 · Dhea_TWK (Bahasa Negara)_Done Input.docx, soal 1
      {
        nomor: 25,
        lesson: 'Bahasa Negara > Ide pokok atau gagasan utama',
        tipe: 'pg',
        pertanyaan: `Pemerintah kota memperluas layanan administrasi melalui aplikasi digital. Namun, sebagian warga lanjut usia belum terbiasa mengunggah dokumen dan memantau permohonan secara daring. Untuk membantu mereka, pemerintah menyediakan petugas pendamping di kantor kelurahan. Warga tetap mengajukan permohonan melalui sistem yang sama, tetapi memperoleh bantuan sesuai kebutuhan. Dengan demikian, perluasan layanan digital disertai dukungan agar kelompok yang mengalami kesulitan tetap dapat mengakses pelayanan.
Ide pokok paragraf tersebut adalah ....`,
        opsi: [
          { label: 'A', teks: `Keterbatasan keterampilan digital warga lanjut usia memengaruhi kecepatan pengurusan dokumen.` },
          { label: 'B', teks: `Kantor kelurahan menjadi tempat pendampingan warga dalam mengunggah dokumen administrasi.` },
          { label: 'C', teks: `Kesamaan sistem pengajuan diperlukan untuk menyeragamkan pelayanan administrasi masyarakat.` },
          { label: 'D', teks: `Perluasan layanan digital disertai pendampingan untuk menjaga keterjangkauan pelayanan.` },
          { label: 'E', teks: `Petugas pendamping membantu pemerintah memantau permohonan administrasi secara daring.` },
        ],
        kunci: 'D',
        pembahasan: `Paragraf membahas perluasan layanan digital yang disertai pendampingan bagi warga yang kesulitan menggunakannya. Kalimat tentang warga lanjut usia, petugas pendamping, dan bantuan pengajuan merupakan penjelas gagasan tersebut. Opsi yang paling tepat adalah D.
Alasan opsi salah:
A. Hanya mengambil bagian tertentu dari paragraf.
B. Hanya mengambil bagian tertentu dari paragraf.
C. Menekankan penyeragaman sistem, padahal fokusnya adalah keterjangkauan pelayanan.
E. Menggeser fungsi pendamping dari membantu warga menjadi membantu pemerintah memantau permohonan.
Cara cepat: Tentukan gagasan yang mencakup keseluruhan paragraf, bukan hanya kelompok warga atau satu tindakan pendampingan.`,
        tingkat: 'sedang',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Bahasa Negara > Simpulan paragraf` },
    soal: [
      // tryout-ref-02-04 · Dhea_TWK (Bahasa Negara)_Done Input.docx, soal 4
      {
        nomor: 26,
        lesson: 'Bahasa Negara > Simpulan paragraf',
        tipe: 'pg',
        pertanyaan: `Sebuah kantor mengganti formulir permohonan dengan versi yang lebih singkat. Setelah satu bulan, rata-rata waktu pengisian berkurang dari dua belas menit menjadi delapan menit. Meskipun demikian, jumlah formulir yang harus dikembalikan untuk diperbaiki tidak banyak berubah. Pemeriksaan petugas menunjukkan bahwa kesalahan masih sering terjadi pada bagian persyaratan yang menggunakan istilah teknis tanpa penjelasan.
Simpulan yang paling tepat adalah ....`,
        opsi: [
          { label: 'A', teks: `Penggunaan istilah teknis merupakan penyebab berkurangnya waktu pengisian formulir permohonan.` },
          { label: 'B', teks: `Penyederhanaan formulir mempercepat pengisian, tetapi belum banyak mengurangi kebutuhan perbaikan.` },
          { label: 'C', teks: `Pemangkasan jumlah pertanyaan meningkatkan kecepatan sekaligus ketepatan pengisian formulir.` },
          { label: 'D', teks: `Formulir yang lebih singkat membuat pemohon mengabaikan bagian persyaratan yang harus dilengkapi.` },
          { label: 'E', teks: `Penambahan penjelasan istilah teknis telah mengurangi kesalahan pengisian formulir permohonan.` },
        ],
        kunci: 'B',
        pembahasan: `Dua hasil utama evaluasi adalah waktu pengisian berkurang dan jumlah formulir yang memerlukan perbaikan relatif tetap. Opsi B merangkum keduanya tanpa menambahkan informasi. Opsi yang paling tepat adalah B.
Alasan opsi salah:
A. Menghubungkan istilah teknis dengan penurunan waktu tanpa dasar.
C. Bertentangan dengan hasil pemeriksaan kesalahan.
D. Mengasumsikan perilaku mengabaikan persyaratan.
E. Menyatakan tindakan dan hasil yang belum terjadi dalam teks.
Cara cepat: Bandingkan dua hasil evaluasi, yakni waktu pengisian dan kesalahan formulir. Hindari simpulan yang mengabaikan salah satunya.`,
        tingkat: 'sedang',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Bahasa Negara > Kalimat efektif dan tidak efektif` },
    soal: [
      // tryout-ref-03-30 · Nynda_Paket 1 TWK SKD 2027_Done Input.docx, soal 30
      {
        nomor: 27,
        lesson: 'Bahasa Negara > Kalimat efektif dan tidak efektif',
        tipe: 'pg',
        pertanyaan: `Perhatikan kalimat berikut.
“Kegiatan posyandu bulan ini meliputi penimbangan balita, memberikan imunisasi, dan penyuluhan gizi bagi para ibu-ibu.”
Perbaikan yang paling tepat untuk kalimat tersebut adalah …`,
        opsi: [
          { label: 'A', teks: `Kegiatan posyandu bulan ini meliputi penimbangan balita, pemberian imunisasi, dan penyuluhan gizi bagi para ibu-ibu.` },
          { label: 'B', teks: `Kegiatan posyandu bulan ini meliputi: penimbangan balita, pemberian imunisasi, dan penyuluhan gizi bagi para ibu.` },
          { label: 'C', teks: `Kegiatan posyandu bulan ini meliputi penimbangan balita, pemberian imunisasi, dan penyuluhan gizi bagi para ibu.` },
          { label: 'D', teks: `Kegiatan posyandu bulan ini meliputi menimbang balita, pemberian imunisasi, dan penyuluhan gizi bagi para ibu.` },
          { label: 'E', teks: `Kegiatan daripada posyandu bulan ini meliputi penimbangan balita, pemberian imunisasi, dan penyuluhan gizi bagi para ibu.` },
        ],
        kunci: 'C',
        pembahasan: `Konsep dalam soal ini menekankan dua ciri kalimat efektif sekaligus, yaitu kesejajaran dan kehematan. Kalimat asli memuat perincian yang tidak sejajar karena “memberikan” berbentuk verba di antara nomina “penimbangan” dan “penyuluhan”. Kalimat itu juga memuat pleonasme karena “para” sudah menyatakan jamak sehingga bentuk ulang “ibu-ibu” mubazir. Inti kaidah di sini adalah bahwa unsur perincian harus berbentuk sama dan penanda jamak tidak boleh dinyatakan dua kali (TBBI, kesejajaran dan kehematan). Opsi yang paling tepat adalah C, karena opsi itu mengubah “memberikan” menjadi “pemberian” dan “para ibu-ibu” menjadi “para ibu” tanpa menimbulkan kesalahan baru.
Alasan opsi salah:
A. Kesejajaran sudah diperbaiki, tetapi pleonasme “para ibu-ibu” masih tersisa.
B. Tanda titik dua dipakai sesudah verba “meliputi”, padahal perincian itu merupakan bagian kalimat (EYD V, Penggunaan Tanda Baca, tanda titik dua).
D. “menimbang” berbentuk verba sehingga perincian menjadi tidak sejajar dengan “pemberian” dan “penyuluhan”.
E. Kata “daripada” disisipkan di antara “kegiatan” dan “posyandu”, padahal kedua kata itu cukup dirangkai langsung.
Cara cepat: Periksa kesejajaran bentuk unsur perincian dan kehematan kata, lalu pastikan perbaikan yang dipilih tidak menimbulkan kesalahan baru di bagian lain kalimat.`,
        tingkat: 'sulit',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Bahasa Negara > Kata baku dan tidak baku` },
    soal: [
      // tryout-ref-02-08 · Dhea_TWK (Bahasa Negara)_Done Input.docx, soal 8
      {
        nomor: 28,
        lesson: 'Bahasa Negara > Kata baku dan tidak baku',
        tipe: 'pg',
        pertanyaan: `Pengelola layanan kesehatan akan memasang pengumuman berikut.
Petugas menghimbau warga agar antri dengan tertib di depan apotik.
Pengumuman itu perlu disunting agar seluruh katanya menggunakan bentuk baku.
Hasil penyuntingan yang tepat adalah ....`,
        opsi: [
          { label: 'A', teks: `Petugas mengimbau warga agar antre dengan tertib di depan apotik.` },
          { label: 'B', teks: `Petugas mengimbau warga agar antre dengan tertib di depan apotek.` },
          { label: 'C', teks: `Petugas menghimbau warga agar antre dengan tertib di depan apotek.` },
          { label: 'D', teks: `Petugas mengimbau warga agar antri dengan tertib di depan apotek.` },
          { label: 'E', teks: `Petugas menghimbau warga agar antri dengan tertib di depan apotek.` },
        ],
        kunci: 'B',
        pembahasan: `Bentuk baku yang diperlukan adalah mengimbau, antre, dan apotek. Kata mengimbau dibentuk dari kata dasar imbau, bukan himbau. Opsi yang paling tepat adalah B.
Alasan opsi salah:
A. Masih menggunakan apotik.
C. Masih menggunakan menghimbau.
D. Menggunakan antri.
E. Mengandung dua bentuk tidak baku, yaitu menghimbau dan antri.
Cara cepat: Perhatikan bentuk baku mengimbau, antre, dan apotek. Satu bentuk tidak baku saja membuat opsi tidak tepat.`,
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
        lesson: 'Bahasa Negara > Penulisan tanda baca',
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
        pembahasan: `Pada opsi A, “Pemohon menyiapkan tiga dokumen” merupakan pernyataan lengkap yang diikuti perincian sehingga tepat menggunakan titik dua. Titik koma memisahkan klausa tentang pemohon dan klausa tentang petugas yang berkedudukan setara. Opsi yang paling tepat adalah A.
Alasan opsi salah:
B. Memisahkan verba menyiapkan dari objeknya dengan titik dua.
C. Menukar penggunaan titik dua dan titik koma.
D. Tidak tepat dalam menandai perincian sederhana dan batas antarklausa.
E. Menempatkan titik dua sebelum klausa yang bukan perincian dari bagian sebelumnya.
Cara cepat: Titik dua memperkenalkan perincian setelah pernyataan lengkap, sedangkan titik koma dapat memisahkan klausa setara.`,
        tingkat: 'sedang',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Bahasa Negara > Penulisan Ejaan Bahasa Indonesia yang Disempurnakan (EYD)` },
    soal: [
      // tryout-ref-03-27 · Nynda_Paket 1 TWK SKD 2027_Done Input.docx, soal 27
      {
        nomor: 30,
        lesson: 'Bahasa Negara > Penulisan Ejaan Bahasa Indonesia yang Disempurnakan (EYD)',
        tipe: 'pg',
        pertanyaan: `(1) Desa itu memasang panel surya di balai warga, sekolah, dan pos kesehatan pada awal tahun ini. (2) Listrik dari panel tersebut dipakai untuk kegiatan siang hari, sedangkan sisanya disimpan dalam baterai cadangan milik desa. (3) Kepala desa menyebutkan bahwa biaya listrik bulanan balai warga kini turun hampir separuh dibandingkan tahun lalu. (4) Oleh karena itu pemerintah desa berencana menambah panel surya di rumah warga yang belum terjangkau jaringan listrik. (5) Jika cuaca mendung selama beberapa hari, petugas mengatur pemakaian listrik agar layanan kesehatan tetap berjalan.
Penggunaan tanda baca yang keliru terdapat pada kalimat nomor …`,
        opsi: [
          { label: 'A', teks: `(1)` },
          { label: 'B', teks: `(2)` },
          { label: 'C', teks: `(3)` },
          { label: 'D', teks: `(4)` },
          { label: 'E', teks: `(5)` },
        ],
        kunci: 'D',
        pembahasan: `Konsep dalam soal ini menekankan penerapan kaidah tanda koma pada EYD V, Penggunaan Tanda Baca, tanda koma. Kalimat (4) diawali ungkapan penghubung antarkalimat “Oleh karena itu”, yang menurut EYD V harus diikuti tanda koma. Inti kaidah di sini adalah membedakan ungkapan penghubung antarkalimat, yang selalu diikuti koma, dari konjungsi lain yang penggunaan komanya diatur tersendiri. Opsi yang paling tepat adalah D, karena kalimat (4) seharusnya ditulis “Oleh karena itu, pemerintah desa berencana …”.
Alasan opsi salah:
A. Koma pada perincian “balai warga, sekolah, dan pos kesehatan” sesuai dengan contoh perincian tiga unsur dalam EYD V.
B. Koma memang dipakai sebelum konjungsi “sedangkan” dalam kalimat majemuk setara.
C. Koma tidak dipakai di antara predikat “menyebutkan” dan klausa “bahwa” yang menjadi bagian kalimat.
E. Koma memang dipakai sesudah anak kalimat “Jika cuaca mendung selama beberapa hari” yang mendahului induk kalimat.
Cara cepat: Periksa tiap kalimat terhadap kaidah tanda baca EYD V, terutama pada awal kalimat, di antara klausa, dan pada perincian, lalu tentukan kalimat yang melanggar kaidah.`,
        tingkat: 'sulit',
        status: 'draft',
      },
    ],
  },
];

/** 35 soal TIU. */
export const contohGeneratorTiu: Kelompok[] = [
  {
    stimulus: { judul: `Verbal > Silogisme > 3 Premis` },
    soal: [
      // tryout-pattern-map-13-0-0-0 · Variasi baru dari pola tryout diterima; Mapping SKD 2027.xlsx, baris 13
      {
        nomor: 1,
        lesson: 'Verbal > Silogisme > 3 Premis',
        tipe: 'pg',
        pertanyaan: `Pesanan Wulan yang dikemas dengan bahan pelindung memiliki pembayaran terverifikasi. Pesanan Wulan yang berada dalam antrean proses dikemas dengan bahan pelindung. Pesanan Wulan tidak masuk antrean proses.
Apa yang dapat disimpulkan mengenai kebenaran pernyataan bahwa pesanan Wulan memiliki pembayaran terverifikasi?`,
        opsi: [
          { label: 'A', teks: `Tidak dapat disimpulkan berdasarkan ketiga premis tersebut.` },
          { label: 'B', teks: `Pesanan Wulan tidak memiliki pembayaran terverifikasi dan tidak masuk antrean proses.` },
          { label: 'C', teks: `Pesanan Wulan memiliki pembayaran terverifikasi.` },
          { label: 'D', teks: `Pesanan Wulan tidak memiliki pembayaran terverifikasi.` },
          { label: 'E', teks: `Pesanan Wulan yang berada di luar antrean proses memiliki pembayaran terverifikasi.` },
        ],
        kunci: 'A',
        pembahasan: `Premis 1: Pesanan Wulan yang dikemas dengan bahan pelindung memiliki pembayaran terverifikasi.
Premis 2: Pesanan Wulan yang berada dalam antrean proses dikemas dengan bahan pelindung.
Premis 3: Pesanan Wulan tidak masuk antrean proses.

\\(p\\): Pesanan Wulan masuk antrean proses
\\(q\\): Pesanan Wulan dikemas dengan bahan pelindung
\\(r\\): Pesanan Wulan memiliki pembayaran terverifikasi

Langkah 1 (Premis 2 + 1):
Premis 2: \\(p \\to q\\)
Premis 1: \\(q \\to r\\)
Gunakan hukum Silogisme
Kesimpulan (Premis 4): \\(p \\to r\\)

Langkah 2 (Premis 4 + 3):
Premis 4: \\(p \\to r\\)
Premis 3: \\(\\neg p\\)
Premis 4 dan 3 tidak masuk ke rumus silogisme manapun sehingga tidak dapat disimpulkan.
Kesimpulan: Tidak dapat disimpulkan
Jawaban: Tidak dapat disimpulkan`,
        tingkat: 'sedang',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Verbal > Silogisme > 2 Premis - Narasi` },
    soal: [
      // tryout-pattern-map-14-0-0-0 · Contoh 57 (N2-03) pada Blueprint Silogisme Tanpa Logika Kuantor, Bagian B (tulisan tim akademik).
      {
        nomor: 2,
        lesson: 'Verbal > Silogisme > 2 Premis - Narasi',
        tipe: 'pg',
        pertanyaan: `Pemeriksaan daftar persetujuan penelaah untuk katalog pameran memperlihatkan naskah milik Hana tidak tercantum di dalamnya pada pengajuan katalog yang dibahas. Naskah katalog pameran milik Hana dengan status siap dicetak tercakup dalam daftar persetujuan penelaah untuk katalog yang akan digunakan pada pameran tersebut.
Simpulan yang pasti benar berdasarkan ketentuan tersebut adalah ….`,
        opsi: [
          { label: 'A', teks: `Naskah Hana siap dicetak dan tidak tercantum dalam daftar persetujuan penelaah.` },
          { label: 'B', teks: `Naskah katalog pameran milik Hana tidak memiliki status siap dicetak.` },
          { label: 'C', teks: `Status siap dicetak melekat pada naskah katalog pameran milik Hana.` },
          { label: 'D', teks: `Nama naskah katalog milik Hana tercantum dalam daftar persetujuan penelaah.` },
          { label: 'E', teks: `Proses pencetakan naskah katalog pameran milik Hana sudah dimulai.` },
        ],
        kunci: 'B',
        pembahasan: `Premis 1: Pemeriksaan daftar persetujuan penelaah untuk katalog pameran memperlihatkan naskah milik Hana tidak tercantum di dalamnya pada pengajuan katalog yang dibahas.
Premis 2: Naskah katalog pameran milik Hana dengan status siap dicetak tercakup dalam daftar persetujuan penelaah untuk katalog yang akan digunakan pada pameran tersebut.

\\(p\\): Naskah katalog pameran milik Hana berstatus siap dicetak
\\(q\\): Naskah katalog pameran milik Hana tercantum dalam daftar persetujuan penelaah

Premis 1: \\(\\neg q\\)
Premis 2: \\(p \\to q\\)
Gunakan Modus Tollens
Kesimpulan: \\(\\neg p\\)
Jawaban: Naskah katalog pameran milik Hana tidak memiliki status siap dicetak

Analisis setiap opsi
\\(r\\): Proses pencetakan naskah katalog pameran milik Hana sudah dimulai
Notasi tambahan ini hanya memetakan isi opsi dan tidak menjadi premis soal.
A. Naskah Hana siap dicetak dan tidak tercantum dalam daftar persetujuan penelaah.
→ \\(p \\land \\neg q\\) — Opsi menggabungkan dua keadaan tetapi sedikitnya satu bagiannya bertentangan dengan hasil penalaran. Gabungan itu tidak dapat menjadi kesimpulan. (bukan kesimpulan yang dicari)

B. Naskah katalog pameran milik Hana tidak memiliki status siap dicetak.
→ \\(\\neg p\\) — Maknanya sama dengan hasil penalaran langsung. Ketiadaan naskah dalam daftar menolak status siap dicetak. Keadaan proses pencetakan tidak diberikan. (kesimpulan yang dicari)

C. Status siap dicetak melekat pada naskah katalog pameran milik Hana.
→ \\(p\\) — Pernyataan ini berlawanan dengan keadaan yang dipastikan oleh premis dan hasil penerapan modus. (bukan kesimpulan yang dicari)

D. Nama naskah katalog milik Hana tercantum dalam daftar persetujuan penelaah.
→ \\(q\\) — Pernyataan ini berlawanan dengan keadaan yang dipastikan oleh premis dan hasil penerapan modus. (bukan kesimpulan yang dicari)

E. Proses pencetakan naskah katalog pameran milik Hana sudah dimulai.
→ \\(r\\) — Opsi menyatakan keadaan tambahan yang berbeda dari status atau hak dalam premis. Keadaan tambahan tersebut belum diketahui dari bacaan. (bukan kesimpulan yang dicari)`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tryout-pattern-map-14-0-1-0 · Contoh 60 (N2-06) pada Blueprint Silogisme Tanpa Logika Kuantor, Bagian B (tulisan tim akademik).
      {
        nomor: 3,
        lesson: 'Verbal > Silogisme > 2 Premis - Narasi',
        tipe: 'pg',
        pertanyaan: `Catatan pendaftaran Lala untuk kegiatan praktik komunitas menunjukkan dirinya tidak mengikuti kelas fotografi pada kegiatan praktik komunitas yang dibahas. Dalam kegiatan praktik komunitas yang sedang dijadwalkan Lala mengikuti kelas fotografi atau tidak menggunakan tripod miliknya pada kegiatan praktik yang dibahas tersebut.
Simpulan yang pasti benar berdasarkan ketentuan tersebut adalah ….`,
        opsi: [
          { label: 'A', teks: `Lala membawa tripod miliknya ke tempat kegiatan praktik komunitas tersebut.` },
          { label: 'B', teks: `Kelas fotografi merupakan kegiatan praktik komunitas yang diikuti Lala.` },
          { label: 'C', teks: `Tripod milik Lala digunakan dalam kegiatan praktik komunitas yang dibahas.` },
          { label: 'D', teks: `Lala tidak mengikuti kelas fotografi dan menggunakan tripodnya dalam kegiatan tersebut.` },
          { label: 'E', teks: `Penggunaan tripod milik Lala tidak berlangsung dalam kegiatan praktik komunitas tersebut.` },
        ],
        kunci: 'E',
        pembahasan: `Premis 1: Catatan pendaftaran Lala untuk kegiatan praktik komunitas menunjukkan dirinya tidak mengikuti kelas fotografi pada kegiatan praktik komunitas yang dibahas.
Premis 2: Dalam kegiatan praktik komunitas yang sedang dijadwalkan Lala mengikuti kelas fotografi atau tidak menggunakan tripod miliknya pada kegiatan praktik yang dibahas tersebut.

\\(p\\): Lala mengikuti kelas fotografi dalam kegiatan praktik komunitas
\\(q\\): Lala menggunakan tripod miliknya dalam kegiatan praktik komunitas

Premis 1: \\(\\neg p\\)
Premis 2: \\(p \\lor \\neg q\\)
Gunakan Silogisme Disjungtif
Kesimpulan: \\(\\neg q\\)
Jawaban: Penggunaan tripod milik Lala tidak berlangsung dalam kegiatan praktik komunitas tersebut

Analisis setiap opsi
\\(r\\): Lala membawa tripod miliknya ke tempat kegiatan praktik komunitas tersebut
Notasi tambahan ini hanya memetakan isi opsi dan tidak menjadi premis soal.
A. Lala membawa tripod miliknya ke tempat kegiatan praktik komunitas tersebut.
→ \\(r\\) — Opsi menyatakan keadaan tambahan yang berbeda dari status atau hak dalam premis. Keadaan tambahan tersebut belum diketahui dari bacaan. (bukan kesimpulan yang dicari)

B. Kelas fotografi merupakan kegiatan praktik komunitas yang diikuti Lala.
→ \\(p\\) — Pernyataan ini berlawanan dengan keadaan yang dipastikan oleh premis dan hasil penerapan modus. (bukan kesimpulan yang dicari)

C. Tripod milik Lala digunakan dalam kegiatan praktik komunitas yang dibahas.
→ \\(q\\) — Pernyataan ini berlawanan dengan keadaan yang dipastikan oleh premis dan hasil penerapan modus. (bukan kesimpulan yang dicari)

D. Lala tidak mengikuti kelas fotografi dan menggunakan tripodnya dalam kegiatan tersebut.
→ \\(\\neg p \\land q\\) — Opsi menggabungkan dua keadaan tetapi sedikitnya satu bagiannya bertentangan dengan hasil penalaran. Gabungan itu tidak dapat menjadi kesimpulan. (bukan kesimpulan yang dicari)

E. Penggunaan tripod milik Lala tidak berlangsung dalam kegiatan praktik komunitas tersebut.
→ \\(\\neg q\\) — Maknanya sama dengan hasil penalaran langsung. Atau dibaca inklusif. Membawa tripod berbeda dari menggunakan tripod dan tidak dapat dijadikan kesimpulan. (kesimpulan yang dicari)`,
        tingkat: 'sedang',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Verbal > Silogisme > 3 Premis - Narasi` },
    soal: [
      // tryout-pattern-map-15-0-0-0 · Contoh 63 (N3-01) pada Blueprint Silogisme Tanpa Logika Kuantor, Bagian B (tulisan tim akademik).
      {
        nomor: 4,
        lesson: 'Verbal > Silogisme > 3 Premis - Narasi',
        tipe: 'pg',
        pertanyaan: `Kirana dengan pendaftaran yang disahkan oleh pengelola memiliki hak membuka kalender sesi praktik pada akun pelatihan kerajinan untuk kegiatan yang sedang dibahas dalam ketentuan pendaftaran tersebut. Kirana dalam kedudukannya sebagai pemilik hak membuka kalender sesi praktik tercakup dalam pemilik hak memilih satu sesi praktik pada kalender akun pelatihan tersebut. Pendaftaran pelatihan kerajinan milik Kirana untuk kegiatan yang sedang dibahas telah disahkan oleh pengelola dalam catatan pendaftaran kegiatan tersebut.
Simpulan yang pasti benar berdasarkan ketentuan tersebut adalah ….`,
        opsi: [
          { label: 'A', teks: `Kirana tidak berhak memilih satu sesi praktik dalam kalender akun pelatihan tersebut.` },
          { label: 'B', teks: `Kirana telah menetapkan satu sesi praktik melalui kalender dalam akun pelatihan tersebut.` },
          { label: 'C', teks: `Pemilihan satu sesi praktik dalam kalender akun pelatihan termasuk hak Kirana.` },
          { label: 'D', teks: `Hak membuka kalender sesi praktik pada akun pelatihan tidak dimiliki Kirana.` },
          { label: 'E', teks: `Pendaftaran pelatihan kerajinan milik Kirana tidak disahkan oleh pengelola kegiatan.` },
        ],
        kunci: 'C',
        pembahasan: `Premis 1: Kirana dengan pendaftaran yang disahkan oleh pengelola memiliki hak membuka kalender sesi praktik pada akun pelatihan kerajinan untuk kegiatan yang sedang dibahas dalam ketentuan pendaftaran tersebut.
Premis 2: Kirana dalam kedudukannya sebagai pemilik hak membuka kalender sesi praktik tercakup dalam pemilik hak memilih satu sesi praktik pada kalender akun pelatihan tersebut.
Premis 3: Pendaftaran pelatihan kerajinan milik Kirana untuk kegiatan yang sedang dibahas telah disahkan oleh pengelola dalam catatan pendaftaran kegiatan tersebut.

\\(p\\): Pendaftaran pelatihan kerajinan milik Kirana disahkan oleh pengelola
\\(q\\): Kirana memiliki hak membuka kalender sesi praktik pada akun pelatihan
\\(r\\): Kirana berhak memilih satu sesi praktik dalam kalender akun pelatihan

Langkah 1 (Premis 1 + 3):
Premis 1: \\(p \\to q\\)
Premis 3: \\(p\\)
Gunakan Modus Ponens
Kesimpulan (Premis 4): \\(q\\)

Langkah 2 (Premis 2 + 4):
Premis 2: \\(q \\to r\\)
Premis 4: \\(q\\)
Gunakan Modus Ponens
Kesimpulan: \\(r\\)
Jawaban: Pemilihan satu sesi praktik dalam kalender akun pelatihan termasuk hak Kirana

Analisis setiap opsi
\\(s\\): Kirana telah menetapkan satu sesi praktik melalui kalender dalam akun pelatihan tersebut
Notasi tambahan ini hanya memetakan isi opsi dan tidak menjadi premis soal.
A. Kirana tidak berhak memilih satu sesi praktik dalam kalender akun pelatihan tersebut.
→ \\(\\neg r\\) — Pernyataan ini berlawanan dengan keadaan yang dipastikan oleh premis dan hasil penerapan modus. (bukan kesimpulan yang dicari)

B. Kirana telah menetapkan satu sesi praktik melalui kalender dalam akun pelatihan tersebut.
→ \\(s\\) — Opsi menyatakan keadaan tambahan yang berbeda dari status atau hak dalam premis. Keadaan tambahan tersebut belum diketahui dari bacaan. (bukan kesimpulan yang dicari)

C. Pemilihan satu sesi praktik dalam kalender akun pelatihan termasuk hak Kirana.
→ \\(r\\) — Maknanya sama dengan hasil penalaran langsung. Dua hak yang berbeda menjadi \\(q\\) dan \\(r\\). Memilih sesi secara aktual tidak menjadi salah satu akibat yang dinyatakan. (kesimpulan yang dicari)

D. Hak membuka kalender sesi praktik pada akun pelatihan tidak dimiliki Kirana.
→ \\(\\neg q\\) — Pernyataan ini berlawanan dengan keadaan yang dipastikan oleh premis dan hasil penerapan modus. (bukan kesimpulan yang dicari)

E. Pendaftaran pelatihan kerajinan milik Kirana tidak disahkan oleh pengelola kegiatan.
→ \\(\\neg p\\) — Pernyataan ini berlawanan dengan keadaan yang dipastikan oleh premis dan hasil penerapan modus. (bukan kesimpulan yang dicari)`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tryout-pattern-map-15-0-1-0 · Contoh 65 (N3-03) pada Blueprint Silogisme Tanpa Logika Kuantor, Bagian B (tulisan tim akademik).
      {
        nomor: 5,
        lesson: 'Verbal > Silogisme > 3 Premis - Narasi',
        tipe: 'pg',
        pertanyaan: `Berkas usulan program P18 yang diterima dalam penelaahan administrasi berada dalam cakupan daftar penelaahan isi untuk usulan program pada periode pengajuan yang dibahas. Berkas usulan program P18 yang tercantum dalam daftar penelaahan isi pada periode pengajuan tersebut memiliki nomor agenda penelaahan menurut ketentuan penelaahan usulan. Berkas usulan program P18 bernomor agenda penelaahan merupakan bagian dari arsip penelaahan program untuk periode pengajuan yang menjadi pokok pembahasan dalam pengelolaan berkas tersebut.
Hubungan yang pasti mengikuti ketentuan tersebut adalah ….`,
        opsi: [
          { label: 'A', teks: `Berkas P18 yang diterima dalam penelaahan administrasi tercakup dalam arsip penelaahan program pada periode yang dibahas.` },
          { label: 'B', teks: `Berkas P18 dalam arsip penelaahan program termasuk berkas yang diterima dalam penelaahan administrasi pada periode yang dibahas.` },
          { label: 'C', teks: `Berkas P18 yang diterima dalam penelaahan administrasi berada di luar arsip penelaahan program pada periode yang dibahas.` },
          { label: 'D', teks: `Berkas P18 yang tidak diterima dalam penelaahan administrasi berada di luar arsip penelaahan program pada periode yang dibahas.` },
          { label: 'E', teks: `Berkas P18 bernomor agenda penelaahan termasuk berkas yang diterima dalam penelaahan administrasi pada periode yang dibahas.` },
        ],
        kunci: 'A',
        pembahasan: `Premis 1: Berkas usulan program P18 yang diterima dalam penelaahan administrasi berada dalam cakupan daftar penelaahan isi untuk usulan program pada periode pengajuan yang dibahas.
Premis 2: Berkas usulan program P18 yang tercantum dalam daftar penelaahan isi pada periode pengajuan tersebut memiliki nomor agenda penelaahan menurut ketentuan penelaahan usulan.
Premis 3: Berkas usulan program P18 bernomor agenda penelaahan merupakan bagian dari arsip penelaahan program untuk periode pengajuan yang menjadi pokok pembahasan dalam pengelolaan berkas tersebut.

\\(p\\): Berkas usulan program P18 diterima dalam penelaahan administrasi
\\(q\\): Berkas usulan program P18 tercantum dalam daftar penelaahan isi
\\(r\\): Berkas usulan program P18 memperoleh nomor agenda penelaahan
\\(s\\): Berkas usulan program P18 tercakup dalam arsip penelaahan program

Langkah 1 (Premis 1 + 2):
Premis 1: \\(p \\to q\\)
Premis 2: \\(q \\to r\\)
Gunakan hukum Silogisme
Kesimpulan (Premis 4): \\(p \\to r\\)

Langkah 2 (Premis 4 + 3):
Premis 4: \\(p \\to r\\)
Premis 3: \\(r \\to s\\)
Gunakan hukum Silogisme
Kesimpulan: \\(p \\to s\\)
Jawaban: Berkas P18 yang diterima dalam penelaahan administrasi tercakup dalam arsip penelaahan program pada periode yang dibahas

Analisis setiap opsi
A. Berkas P18 yang diterima dalam penelaahan administrasi tercakup dalam arsip penelaahan program pada periode yang dibahas.
→ \\(p \\to s\\) — Maknanya sama dengan hasil penalaran langsung. Kunci tetap \\(p\\) menuju \\(s\\). Tidak ada konversi kunci menjadi kontraposisi atau disjungsi. (kesimpulan yang dicari)

B. Berkas P18 dalam arsip penelaahan program termasuk berkas yang diterima dalam penelaahan administrasi pada periode yang dibahas.
→ \\(s \\to p\\) — Arah hubungan dibalik. Ketentuan dari keadaan awal menuju hasil akhir tidak membuktikan hubungan sebaliknya. (bukan kesimpulan yang dicari)

C. Berkas P18 yang diterima dalam penelaahan administrasi berada di luar arsip penelaahan program pada periode yang dibahas.
→ \\(p \\to \\neg s\\) — Hubungan yang ditawarkan memakai kondisi atau hasil yang tidak dijamin oleh rangkaian premis. Pernyataan ini masih dapat salah saat seluruh premis benar. (bukan kesimpulan yang dicari)

D. Berkas P18 yang tidak diterima dalam penelaahan administrasi berada di luar arsip penelaahan program pada periode yang dibahas.
→ \\(\\neg p \\to \\neg s\\) — Opsi menyangkal keadaan awal lalu ikut menyangkal hasil akhir. Penyangkalan anteseden tidak membenarkan penyangkalan konsekuen. (bukan kesimpulan yang dicari)

E. Berkas P18 bernomor agenda penelaahan termasuk berkas yang diterima dalam penelaahan administrasi pada periode yang dibahas.
→ \\(r \\to p\\) — Hubungan yang ditawarkan memakai kondisi atau hasil yang tidak dijamin oleh rangkaian premis. Pernyataan ini masih dapat salah saat seluruh premis benar. (bukan kesimpulan yang dicari)`,
        tingkat: 'sedang',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Verbal > Analogi > 2 Kata` },
    soal: [
      // tryout-pattern-map-16-0-0-0 · Variasi terhitung mengikuti mapping 2 Kata; acuan: Mapping SKD 2027.xlsx (contoh analogi dua kata belum disertakan)
      {
        nomor: 6,
        lesson: 'Verbal > Analogi > 2 Kata',
        tipe: 'pg',
        pertanyaan: `Uang : Bank = … : …`,
        opsi: [
          { label: 'A', teks: `Indah : Elok` },
          { label: 'B', teks: `Jati : Pohon` },
          { label: 'C', teks: `Buku : Perpustakaan` },
          { label: 'D', teks: `Es : Beku` },
          { label: 'E', teks: `Hujan deras : Banjir` },
        ],
        kunci: 'C',
        pembahasan: `Kata "uang" dan "bank" memiliki hubungan benda dan tempat penyimpanannya: uang disimpan atau berada di bank.
Pola yang sama terdapat pada opsi C, yaitu "buku" dan "perpustakaan": buku disimpan atau berada di perpustakaan, dengan arah hubungan yang sama (benda → tempat).

A: Indah : Elok: hubungan sinonim (sama makna), saling bersamaan makna; tidak sepadan, karena indah bersamaan makna dengan elok, jadi hubungannya bukan benda dan tempat penyimpanannya.
B: Jati : Pohon: hubungan anggota dan kategorinya, anggota → kategori; tidak sepadan, karena jati termasuk jenis pohon, jadi hubungannya bukan benda dan tempat penyimpanannya.
C: Buku : Perpustakaan: hubungan benda dan tempat penyimpanannya, benda → tempat; sepadan, karena buku disimpan atau berada di perpustakaan, sama seperti pada soal (uang disimpan atau berada di bank).
D: Es : Beku: hubungan benda dan sifatnya, benda → sifat; tidak sepadan, karena es memiliki sifat beku, jadi hubungannya bukan benda dan tempat penyimpanannya.
E: Hujan deras : Banjir: hubungan sebab dan akibat, sebab → akibat; tidak sepadan, karena hujan deras menyebabkan banjir, jadi hubungannya bukan benda dan tempat penyimpanannya.`,
        tingkat: 'mudah',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Verbal > Analitis > Memperkuat/Memperlemah Argumen` },
    soal: [
      // tryout-ref-10-01 · Andika_Verbal Analitis - Memperkuat_Memperlemah_Ready to Input.docx, soal 1
      {
        nomor: 7,
        lesson: 'Verbal > Analitis > Memperkuat/Memperlemah Argumen',
        tipe: 'pg',
        pertanyaan: `Perpustakaan kelurahan memasang label warna yang sama pada punggung buku dan rak sesuai jenis bacaannya. Pengelola berpendapat bahwa label tersebut membantu pengunjung mengembalikan buku ke rak yang tepat. Dengan demikian, waktu yang dibutuhkan petugas untuk menata ulang buku akan berkurang.
Temuan manakah yang paling MEMPERKUAT pendapat pengelola?`,
        opsi: [
          { label: 'A', teks: `Petugas tetap menata ulang rak setiap sore, termasuk memeriksa urutan buku dan merapikan buku yang dipinjam pengunjung.` },
          { label: 'B', teks: `Jumlah buku yang salah rak menurun setelah pelabelan, sedangkan jumlah pengunjung dan buku yang dikembalikan relatif tetap.` },
          { label: 'C', teks: `Pengunjung lebih mudah mengenali jenis bacaan melalui warna label, tetapi belum diketahui apakah mereka mengembalikan buku ke rak yang sesuai.` },
          { label: 'D', teks: `Buku yang dikembalikan kini dicatat lebih rinci sehingga petugas mengetahui peminjamnya, meskipun tempat pengembalian buku tidak tercantum dalam catatan tersebut.` },
          { label: 'E', teks: `Pengunjung menilai susunan rak lebih menarik setelah diberi label, tetapi penilaian itu tidak mencakup ketepatan pengembalian atau waktu penataan buku.` },
        ],
        kunci: 'B',
        pembahasan: `Alasan pengelola adalah bahwa kecocokan warna memudahkan pengembalian buku. Kesimpulannya, pekerjaan menata ulang akan berkurang. Opsi B memberikan bukti pada penghubung kedua gagasan tersebut: lebih sedikit buku berada di rak yang salah. Jumlah pengunjung dan buku yang relatif tetap membuat penurunan itu tidak sekadar disebabkan berkurangnya aktivitas perpustakaan. Karena buku yang perlu dipindahkan lebih sedikit, perkiraan berkurangnya waktu penataan menjadi lebih masuk akal. Bukti ini memperkuat kesimpulan tanpa harus membuktikan bahwa label merupakan satu-satunya penyebab.

Cara cepat: Cari bukti yang menghubungkan tindakan dengan hasil yang diklaim, bukan informasi yang hanya membahas tempat atau objek yang sama.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      // tryout-ref-10-02 · Andika_Verbal Analitis - Memperkuat_Memperlemah_Ready to Input.docx, soal 2
      {
        nomor: 8,
        lesson: 'Verbal > Analitis > Memperkuat/Memperlemah Argumen',
        tipe: 'pg',
        pertanyaan: `Sebuah sanggar menyediakan rekaman pelafalan untuk peserta kelas bahasa daerah. Peserta diminta mendengarkan rekaman, mengucapkan kata yang sama, lalu membandingkan suara mereka dengan contoh. Pengajar memperkirakan latihan ini dapat meningkatkan ketepatan pelafalan karena peserta lebih mudah mengenali dan memperbaiki bunyi yang mereka ucapkan secara keliru.
Jika benar, informasi tambahan manakah yang paling MEMPERKUAT mekanisme dalam argumen tersebut?`,
        opsi: [
          { label: 'A', teks: `Peserta dapat mengakses rekaman setiap hari, tetapi catatan penggunaan belum membedakan kegiatan mendengarkan contoh dari kegiatan membandingkan ucapan sendiri.` },
          { label: 'B', teks: `Peserta menghafal lebih banyak kosakata setelah latihan, sedangkan tes yang digunakan hanya menilai arti kata tanpa memeriksa ketepatan pelafalannya.` },
          { label: 'C', teks: `Peserta menganggap suara pada rekaman mudah didengar, tetapi sebagian tetap tidak mengetahui bagian ucapan mereka yang berbeda dari contoh.` },
          { label: 'D', teks: `Peserta mengenali perbedaan bunyi dengan contoh dan mengurangi kesalahan yang sama pada percobaan berikutnya tanpa koreksi langsung dari pengajar.` },
          { label: 'E', teks: `Pengajar menilai rekaman sesuai dengan materi kelas, meskipun belum memeriksa apakah peserta mampu menggunakan contoh tersebut untuk memperbaiki pelafalan.` },
        ],
        kunci: 'D',
        pembahasan: `Argumen tidak sekadar menyatakan bahwa rekaman tersedia, tetapi menjelaskan proses perbaikannya: mendengar contoh, mengenali kesalahan, lalu memperbaiki ucapan. Opsi D menunjukkan bahwa dua tahap penting itu benar-benar berlangsung. Peserta dapat membedakan bunyi dan menggunakan perbedaan tersebut untuk memperbaiki percobaan selanjutnya. Informasi ini mendukung mekanisme yang dipakai pengajar untuk memperkirakan peningkatan ketepatan pelafalan.

Cara cepat: Untuk argumen yang menjelaskan suatu proses, cari informasi yang membuktikan bahwa tahap penghubung menuju hasil memang bekerja.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tryout-ref-10-09 · Andika_Verbal Analitis - Memperkuat_Memperlemah_Ready to Input.docx, soal 9
      {
        nomor: 9,
        lesson: 'Verbal > Analitis > Memperkuat/Memperlemah Argumen',
        tipe: 'pg',
        pertanyaan: `Sebuah kantor perizinan melaporkan bahwa rata-rata waktu dari berkas dinyatakan lengkap hingga izin diterbitkan turun dari 18 hari menjadi 10 hari setelah prosedur baru diterapkan. Kepala kantor menggunakan data itu untuk menyimpulkan bahwa rata-rata seluruh waktu yang dihabiskan pemohon sejak pertama menyerahkan berkas hingga menerima izin kini lebih singkat.
Informasi manakah yang paling MEMPERLEMAH kesimpulan kepala kantor tentang waktu keseluruhan yang dihabiskan pemohon?`,
        opsi: [
          { label: 'A', teks: `Catatan waktu sesudah berkas lengkap dihasilkan sistem otomatis, sehingga penurunan durasi tahap itu tidak bergantung pada perkiraan petugas atau ingatan pemohon.` },
          { label: 'B', teks: `Sebagian besar izin diterbitkan paling lama 10 hari setelah berkas lengkap, dan petugas memeriksa pencapaian batas waktu itu setiap bulan.` },
          { label: 'C', teks: `Jumlah izin yang diterbitkan setiap bulan bertambah setelah prosedur baru diberlakukan, sementara jumlah petugas pada tahap penerbitan izin tetap sama.` },
          { label: 'D', teks: `Petugas menyelesaikan pemeriksaan akhir lebih cepat setelah dokumen pendukung dipindai, sehingga rata-rata waktu pada tahap tersebut turun dibandingkan prosedur sebelumnya.` },
          { label: 'E', teks: `Pada kelompok pemohon yang sama di setiap periode, waktu sejak penyerahan pertama hingga berkas dinyatakan lengkap rata-rata naik dari 2 menjadi 12 hari.` },
        ],
        kunci: 'E',
        pembahasan: `Data yang dikutip kepala kantor hanya mengukur tahap setelah berkas lengkap, sedangkan kesimpulannya menyangkut seluruh waktu sejak penyerahan pertama. Opsi E melengkapi tahap yang tidak dihitung. Sebelumnya, rata-rata waktu keseluruhan adalah 2 + 18 = 20 hari. Pada prosedur baru, rata-ratanya menjadi 12 + 10 = 22 hari. Karena rata-rata kedua tahap dihitung pada kelompok pemohon yang sama dalam setiap periode, rata-rata waktu total dapat diperoleh dengan menjumlahkan rata-rata kedua tahap tersebut. Tahap penerbitan memang lebih cepat, tetapi tambahan waktu pada tahap kelengkapan berkas lebih besar daripada penghematannya. Dengan demikian, kesimpulan bahwa seluruh waktu pemohon lebih singkat justru bertentangan dengan informasi lengkap.

Cara cepat: Periksa apakah data mengukur seluruh hal yang disebut dalam kesimpulan. Perbaikan satu tahap dapat tertutup oleh memburuknya tahap lain.`,
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
        lesson: 'Verbal > Analitis > Susunan & Posisi',
        tipe: 'pg',
        pertanyaan: `Enam berkas milik Ardi, Beni, Caca, Dini, Ega, dan Fina disusun berjajar pada rak bernomor 1 sampai 6 dari kiri ke kanan. Berkas Caca berada di posisi keempat. Berkas Beni berada tepat di sebelah kiri berkas Caca. Berkas Fina berada tepat di sebelah kanan berkas Caca. Berkas Ardi berada di sebelah kiri berkas Beni. Berkas Dini berada tepat di sebelah kanan berkas Ardi. Berkas Ega berada di sebelah kanan berkas Fina.
Berkas siapa yang berada pada posisi kedua?`,
        opsi: [
          { label: 'A', teks: `Ardi` },
          { label: 'B', teks: `Beni` },
          { label: 'C', teks: `Dini` },
          { label: 'D', teks: `Fina` },
          { label: 'E', teks: `Ega` },
        ],
        kunci: 'C',
        pembahasan: `Berkas Caca berada di posisi keempat dari kiri. Informasi ini menjadi patokan karena posisinya sudah pasti dan tidak bergantung pada berkas lain. Berkas Beni berada tepat di sebelah kiri berkas Caca. Kata “tepat” berarti tidak ada berkas lain di antara keduanya, sehingga berkas Beni menempati posisi ketiga. Dengan alasan yang sama, berkas Fina yang tepat di sebelah kanan berkas Caca berada di posisi kelima.
Berkas Ega berada di sebelah kanan berkas Fina. Karena berkas Fina sudah menempati posisi kelima dan rak hanya memiliki enam tempat, satu-satunya tempat di sebelah kanannya adalah posisi keenam. Maka posisi keenam ditempati berkas Ega.
Posisi ketiga sampai keenam sudah terisi berkas Beni, Caca, Fina, dan Ega. Posisi yang tersisa adalah posisi pertama dan kedua untuk berkas Ardi dan berkas Dini. Berkas Ardi berada di sebelah kiri berkas Beni, dan berkas Dini tepat di sebelah kanan berkas Ardi. Jika berkas Ardi ditempatkan di posisi kedua, berkas Dini harus berada di posisi ketiga yang sudah diisi berkas Beni. Karena itu, berkas Ardi berada di posisi pertama dan berkas Dini di posisi kedua.
Susunan berkas dari kiri ke kanan adalah berkas Ardi, Dini, Beni, Caca, Fina, dan Ega. Dengan demikian, berkas yang berada pada posisi kedua adalah berkas Dini.
\\(\\def\\arraystretch{1.4}\\begin{array}{|c|c|c|c|c|c|} \\hline \\textbf{Posisi 1} & \\textbf{Posisi 2} & \\textbf{Posisi 3} & \\textbf{Posisi 4} & \\textbf{Posisi 5} & \\textbf{Posisi 6} \\\\ \\hline \\text{Ardi} & \\text{Dini} & \\text{Beni} & \\text{Caca} & \\text{Fina} & \\text{Ega} \\\\ \\hline \\end{array}\\)
Jadi, jawaban yang benar adalah C.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      // tryout-ref-11-02 · Uma - Verbal Analitis_Done Input.docx, soal 2
      {
        nomor: 11,
        lesson: 'Verbal > Analitis > Susunan & Posisi',
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
Salah satu susunan yang memenuhi syarat
\\(\\def\\arraystretch{1.4}\\begin{array}{|c|c|c|} \\hline \\textbf{Baris} & \\textbf{Kiri} & \\textbf{Kanan} \\\\ \\hline 1 & \\text{Gani} & \\text{Hira} \\\\ \\hline 2 & \\text{Intan} & \\text{Joko} \\\\ \\hline 3 & \\text{Kila} & \\text{Luki} \\\\ \\hline 4 & \\text{Mira} & \\text{Nando} \\\\ \\hline \\end{array}\\)
Yang pasti hanya baris setiap peserta. Kursi kiri dan kanan pada setiap baris dapat bertukar: Gani dan Hira (Intan ikut berpindah karena selalu tepat di belakang Gani, sehingga Intan dan Joko juga bertukar), Kila dan Luki, serta Mira dan Nando.
Jadi, jawaban yang benar adalah E.`,
        tingkat: 'sulit',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Numerik > Berhitung > Operasi Hitung - Dasar` },
    soal: [
      // tryout-ref-00-01 · Andika - Numerik SKD 2027_Ready to Input.docx, soal 1 · subtopik sumber: Operasi Hitung - Pecahan Sederhana (diterima di baris mapping Operasi Hitung - Dasar)
      {
        nomor: 12,
        lesson: 'Numerik > Berhitung > Operasi Hitung - Dasar',
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
=0,2`,
        tingkat: 'mudah',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Numerik > Berhitung > Perkalian Setara` },
    soal: [
      // tryout-ref-00-05 · Andika - Numerik SKD 2027_Ready to Input.docx, soal 5
      {
        nomor: 13,
        lesson: 'Numerik > Berhitung > Perkalian Setara',
        tipe: 'pg',
        pertanyaan: `Pengelola gudang menyusun dua rencana pengemasan. Jumlah barang pada setiap rencana dihitung dari banyaknya paket dikalikan isi setiap paket. Manakah pasangan rencana yang memuat jumlah barang yang sama?`,
        opsi: [
          { label: 'A', teks: `36×1200 dibandingkan dengan 48×1400` },
          { label: 'B', teks: `28×1350 dibandingkan dengan 35×1260` },
          { label: 'C', teks: `44×1230 dibandingkan dengan 33×1630` },
          { label: 'D', teks: `42×1600 dibandingkan dengan 56×1170` },
          { label: 'E', teks: `32×1470 dibandingkan dengan 42×1120` },
        ],
        kunci: 'E',
        pembahasan: `Eliminasi 0 secara berseberangan di setiap opsi:
Yang dimaksud dengan “berseberangan” adalah pada dua hasil perkalian yang sedang dibandingkan. Hilangkan satu nol di akhir salah satu faktor pada sisi kiri dan satu nol di akhir salah satu faktor pada sisi kanan secara berpasangan. Secara matematis, langkah ini membagi kedua hasil perkalian dengan 10, sehingga kesetaraan keduanya tetap terjaga. Untuk dua pasang nol, kedua hasil dibagi dengan 100. Hanya nol di akhir bilangan yang boleh dihilangkan, dengan jumlah yang sama pada kedua sisi.
Contoh: 32 × 1470 dibandingkan dengan 42 × 1120 dapat disederhanakan menjadi 32 × 147 dibandingkan dengan 42 × 112 dengan membagi kedua hasil perkalian dengan 10.
Penyederhanaan setiap opsi:
A. 36×1200 dibandingkan dengan 48×1400→36×12 dibandingkan dengan 48×14
B. 28×1350 dibandingkan dengan 35×1260→28×135 dibandingkan dengan 35×126
C. 44×1230 dibandingkan dengan 33×1630→44×123 dibandingkan dengan 33×163
D. 42×1600 dibandingkan dengan 56×1170→42×160 dibandingkan dengan 56×117
E. 32×1470 dibandingkan dengan 42×1120→32×147 dibandingkan dengan 42×112
Periksa digit terakhir dari perkalian digit terakhir.
Digit terakhir hanya menyaring. Jika digit terakhir kedua hasil kali berbeda, kedua hasil kali pasti tidak sama. Jika digit terakhirnya sama, kesamaan belum terbukti, sehingga perkalian penuh tetap harus dihitung.
A. 36×12 dibandingkan dengan 48×14
36×12→6×2=12 (Digit terakhir adalah 2)
48×14→8×4=32 (Digit terakhir adalah 2)
Digit terakhirnya sama, tetapi kesamaan belum terbukti. Lakukan perkalian penuh.
36×12=432
48×14=672
Hasil berbeda: 432 ≠ 672. Lanjutkan ke opsi selanjutnya.
B. 28×135 dibandingkan dengan 35×126
28×135→8×5=40 (Digit terakhir adalah 0)
35×126→5×6=30 (Digit terakhir adalah 0)
Digit terakhirnya sama, tetapi kesamaan belum terbukti. Lakukan perkalian penuh.
28×135=3780
35×126=4410
Hasil berbeda: 3780 ≠ 4410. Lanjutkan ke opsi selanjutnya.
C. 44×123 dibandingkan dengan 33×163
44×123→4×3=12 (Digit terakhir adalah 2)
33×163→3×3=9 (Digit terakhir adalah 9)
Karena digit terakhirnya berbeda, kedua hasil kali pasti tidak sama: 44×123 ≠ 33×163. Lanjutkan ke opsi selanjutnya.
D. 42×160 dibandingkan dengan 56×117
42×160→2×0=0 (Digit terakhir adalah 0)
56×117→6×7=42 (Digit terakhir adalah 2)
Karena digit terakhirnya berbeda, kedua hasil kali pasti tidak sama: 42×160 ≠ 56×117. Lanjutkan ke opsi selanjutnya.
E. 32×147 dibandingkan dengan 42×112
32×147→2×7=14 (Digit terakhir adalah 4)
42×112→2×2=4 (Digit terakhir adalah 4)
Digit terakhirnya sama, tetapi kesamaan belum terbukti. Lakukan perkalian penuh.
32×147=4704
42×112=4704
Hasilnya sama: 4704 = 4704. Jadi, jawabannya adalah E.`,
        tingkat: 'sulit',
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
        lesson: 'Numerik > Berhitung > Pembagian Setara',
        tipe: 'pg',
        pertanyaan: `Dari lima pasangan operasi di bawah ini, tentukan pasangan yang kedua hasil pembagiannya bernilai sama.`,
        opsi: [
          { label: 'A', teks: `2430÷35 dibandingkan dengan 1680÷25` },
          { label: 'B', teks: `1800÷45 dibandingkan dengan 1200÷30` },
          { label: 'C', teks: `1540÷28 dibandingkan dengan 2340÷39` },
          { label: 'D', teks: `1890÷42 dibandingkan dengan 1740÷36` },
          { label: 'E', teks: `2160÷54 dibandingkan dengan 2730÷63` },
        ],
        kunci: 'B',
        pembahasan: `Ubah setiap pembagian menjadi perkalian setara dengan perkalian silang:
A. 2430÷35 dibandingkan dengan 1680÷25
Uji apakah \\(\\frac{2430}{35}=\\frac{1680}{25}\\):
⇔2430×25=1680×35
→2430×25 dibandingkan dengan 1680×35
B. 1800÷45 dibandingkan dengan 1200÷30
Uji apakah \\(\\frac{1800}{45}=\\frac{1200}{30}\\):
⇔1800×30=1200×45
→1800×30 dibandingkan dengan 1200×45
C. 1540÷28 dibandingkan dengan 2340÷39
Uji apakah \\(\\frac{1540}{28}=\\frac{2340}{39}\\):
⇔1540×39=2340×28
→1540×39 dibandingkan dengan 2340×28
D. 1890÷42 dibandingkan dengan 1740÷36
Uji apakah \\(\\frac{1890}{42}=\\frac{1740}{36}\\):
⇔1890×36=1740×42
→1890×36 dibandingkan dengan 1740×42
E. 2160÷54 dibandingkan dengan 2730÷63
Uji apakah \\(\\frac{2160}{54}=\\frac{2730}{63}\\):
⇔2160×63=2730×54
→2160×63 dibandingkan dengan 2730×54
Eliminasi 0 secara berseberangan di setiap opsi:
Yang dimaksud dengan “berseberangan” adalah pada dua hasil perkalian yang sedang dibandingkan. Hilangkan satu nol di akhir salah satu faktor pada sisi kiri dan satu nol di akhir salah satu faktor pada sisi kanan secara berpasangan. Secara matematis, langkah ini membagi kedua hasil perkalian dengan 10, sehingga kesetaraan keduanya tetap terjaga. Untuk dua pasang nol, kedua hasil dibagi dengan 100. Hanya nol di akhir bilangan yang boleh dihilangkan, dengan jumlah yang sama pada kedua sisi.
Contoh setelah perkalian silang: 1800 × 30 dibandingkan dengan 1200 × 45 menjadi 18 × 30 dibandingkan dengan 12 × 45; kedua hasil perkalian dibagi dengan 100.
Pada soal pembagian, penyederhanaan ini dilakukan terhadap hasil perkalian silang yang sudah dibentuk di atas.
Penyederhanaan setiap opsi:
A. 2430×25 dibandingkan dengan 1680×35→243×25 dibandingkan dengan 168×35
B. 1800×30 dibandingkan dengan 1200×45→18×30 dibandingkan dengan 12×45
C. 1540×39 dibandingkan dengan 2340×28→154×39 dibandingkan dengan 234×28
D. 1890×36 dibandingkan dengan 1740×42→189×36 dibandingkan dengan 174×42
E. 2160×63 dibandingkan dengan 2730×54→216×63 dibandingkan dengan 273×54
Periksa digit terakhir dari perkalian digit terakhir.
Digit terakhir hanya menyaring. Jika digit terakhir kedua hasil kali berbeda, kedua hasil kali pasti tidak sama. Jika digit terakhirnya sama, kesamaan belum terbukti, sehingga perkalian penuh tetap harus dihitung.
A. 243×25 dibandingkan dengan 168×35
243×25→3×5=15 (Digit terakhir adalah 5)
168×35→8×5=40 (Digit terakhir adalah 0)
Karena digit terakhirnya berbeda, kedua hasil kali pasti tidak sama: 243×25 ≠ 168×35. Lanjutkan ke opsi selanjutnya.
B. 18×30 dibandingkan dengan 12×45
18×30→8×0=0 (Digit terakhir adalah 0)
12×45→2×5=10 (Digit terakhir adalah 0)
Digit terakhirnya sama, tetapi kesamaan belum terbukti. Lakukan perkalian penuh.
18×30=540
12×45=540
Hasilnya sama: 540 = 540. Jadi, jawabannya adalah B.`,
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
        lesson: 'Numerik > Kecukupan Data > Aljabar - Operasi Aljabar',
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
      // tryout-ref-00-12 · Andika - Numerik SKD 2027_Ready to Input.docx, soal 12 · subtopik sumber: Aljabar - Persamaan (diterima di baris mapping Aljabar - Operasi Aljabar)
      {
        nomor: 16,
        lesson: 'Numerik > Kecukupan Data > Aljabar - Operasi Aljabar',
        tipe: 'pg',
        pertanyaan: `Diketahui x merupakan bilangan real. Berapakah nilai x?
(1) 5x−8=47.
(2) x^(2)=121.
Pilihlah informasi yang cukup untuk menjawab pertanyaan tersebut.`,
        opsi: [
          { label: 'A', teks: `Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi (2) saja tidak cukup.` },
          { label: 'B', teks: `Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi (1) saja tidak cukup.` },
          { label: 'C', teks: `KEDUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.` },
          { label: 'D', teks: `Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan (2) SAJA cukup.` },
          { label: 'E', teks: `Pernyataan (1) dan (2) TIDAK CUKUP untuk menjawab pertanyaan.` },
        ],
        kunci: 'A',
        pembahasan: `Pernyataan (1):
5x−8=47
5x=55
x=11
Pernyataan (1) menghasilkan satu nilai x yang unik. Pernyataan (1) SAJA cukup.
Pernyataan (2):
x^(2)=121
x=±11
Masih terdapat dua kemungkinan nilai x, yaitu 11 atau −11. Pernyataan (2) SAJA tidak cukup.
Jadi, jawaban yang benar adalah A.`,
        tingkat: 'mudah',
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
        lesson: 'Numerik > Kecukupan Data > Bilangan - Jenis dan Sifat Bilangan',
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
    stimulus: { judul: `Numerik > Kecukupan Data > Soal Cerita - Aljabar` },
    soal: [
      // tryout-ref-00-21 · Andika - Numerik SKD 2027_Ready to Input.docx, soal 21 · subtopik sumber: Soal Cerita - Geometri (diterima di baris mapping Soal Cerita - Aljabar)
      {
        nomor: 18,
        lesson: 'Numerik > Kecukupan Data > Soal Cerita - Aljabar',
        tipe: 'pg',
        pertanyaan: `Sebuah ruang pamer berbentuk persegi akan dipasangi karpet. Berapakah luas lantai ruang pamer tersebut?
(1) Panjang salah satu sisi ruang pamer adalah 14 meter.
(2) Lebar ruang pamer tersebut adalah 14 meter.
Pilihlah informasi yang cukup untuk menjawab pertanyaan tersebut.`,
        opsi: [
          { label: 'A', teks: `Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi (2) saja tidak cukup.` },
          { label: 'B', teks: `Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi (1) saja tidak cukup.` },
          { label: 'C', teks: `KEDUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.` },
          { label: 'D', teks: `Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan (2) SAJA cukup.` },
          { label: 'E', teks: `Pernyataan (1) dan (2) TIDAK CUKUP untuk menjawab pertanyaan.` },
        ],
        kunci: 'D',
        pembahasan: `Diketahui ruang pamer berbentuk persegi. Luas persegi dihitung dengan rumus:
L=s×s
dengan s merupakan panjang sisi persegi.
Pernyataan (1):
Panjang salah satu sisi ruang pamer adalah 14 meter.
s=14
L=s×s
L=14×14
L=196 m²
Pernyataan (1) SAJA cukup.
Pernyataan (2):
Lebar ruang pamer adalah 14 meter. Pada persegi, seluruh sisinya sama panjang, sehingga:
s=14
L=s×s
L=14×14
L=196 m²
Pernyataan (2) SAJA cukup.
Masing-masing pernyataan secara terpisah cukup. Jadi, jawaban yang benar adalah D.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      // tryout-ref-00-25 · Andika - Numerik SKD 2027_Ready to Input.docx, soal 25 · subtopik sumber: Soal Cerita - Perbandingan Senilai dan Berbalik (diterima di baris mapping Soal Cerita - Aljabar)
      {
        nomor: 19,
        lesson: 'Numerik > Kecukupan Data > Soal Cerita - Aljabar',
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
      // tryout-ref-00-19 · Andika - Numerik SKD 2027_Ready to Input.docx, soal 19
      {
        nomor: 20,
        lesson: 'Numerik > Kecukupan Data > Soal Cerita - Aljabar',
        tipe: 'pg',
        pertanyaan: `Sebuah pusat pelatihan menyediakan dua jenis layanan, yaitu Kelas Tatap Muka dan Kelas Daring. Setiap tiket berlaku untuk satu peserta. Perhatikan tabel berikut.
\\(\\def\\arraystretch{1.4}\\begin{array}{|l|l|l|} \\hline \\textbf{Jenis Peserta} & \\textbf{Harga/Tiket} & \\textbf{Jumlah Tiket Terjual} \\\\ \\hline \\text{Kelas Tatap Muka} & \\text{Rp120.000} & \\text{m} \\\\ \\hline \\text{Kelas Daring} & \\text{Rp60.000} & \\text{n} \\\\ \\hline \\end{array}\\)
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
Contoh: m=100 dan n=120 memberi P=120.000(100)+60.000(120)=19.200.000, sedangkan m=80 dan n=140 memberi P=120.000(80)+60.000(140)=18.000.000. Keduanya memenuhi m+n=220, tetapi pendapatannya berbeda.
Pernyataan (1) SAJA tidak cukup.
Pernyataan (2):
n=m+60
Selisih jumlah peserta diketahui, tetapi jumlah peserta masing-masing layanan belum diketahui secara pasti.
Contoh: m=20 dan n=80 memberi P=120.000(20)+60.000(80)=7.200.000, sedangkan m=80 dan n=140 memberi P=18.000.000. Keduanya memenuhi n=m+60, tetapi pendapatannya berbeda.
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
      // tryout-ref-00-30 · Andika - Numerik SKD 2027_Ready to Input.docx, soal 30 · subtopik sumber: Deret Angka - 3 Towew (diterima di baris mapping Deret Angka - 1 Towew)
      {
        nomor: 21,
        lesson: 'Numerik > Deret Bilangan > Deret Angka - 3 Towew',
        tipe: 'pg',
        pertanyaan: `6,9,8,6,12,9,6,15,10,…`,
        opsi: [
          { label: 'A', teks: `5` },
          { label: 'B', teks: `9` },
          { label: 'C', teks: `12` },
          { label: 'D', teks: `18` },
          { label: 'E', teks: `6` },
        ],
        kunci: 'E',
        pembahasan: `⟦gambar:gambar/jadiasn/cpns2027-tiu-deret-angka-3-towew-s01-acuan-1.png⟧
↓ ↓ ↑ artinya 3 towew
3 towew berarti deret tersusun atas 3 larik berselang: suku ke-1, 4, 7, … membentuk larik ke-1; suku ke-2, 5, 8, … membentuk larik ke-2; suku ke-3, 6, 9, … membentuk larik ke-3.
Pola yang terlihat:
⟦gambar:gambar/jadiasn/cpns2027-tiu-deret-angka-3-towew-s01-acuan-2.png⟧

Suku yang ditanyakan berada pada larik ke-1. Larik ke-1 memiliki pola tetap, yaitu 6, 6, 6, sehingga suku berikutnya adalah 6.
Jadi, jawaban yang benar adalah E.`,
        tingkat: 'mudah',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Numerik > Deret Bilangan > Matriks Deret` },
    soal: [
      // tryout-ref-00-32 · Andika - Numerik SKD 2027_Ready to Input.docx, soal 32
      {
        nomor: 22,
        lesson: 'Numerik > Deret Bilangan > Matriks Deret',
        tipe: 'pg',
        pertanyaan: `Bilangan berapakah yang tepat untuk menggantikan x pada tabel berikut?
\\(\\def\\arraystretch{1.4}\\begin{array}{|c|c|c|} \\hline -18 & 9 & 28 \\\\ \\hline -11 & 5 & 22 \\\\ \\hline -4 & \\text{x} & 16 \\\\ \\hline \\end{array}\\)`,
        opsi: [
          { label: 'A', teks: `1` },
          { label: 'B', teks: `−1` },
          { label: 'C', teks: `3` },
          { label: 'D', teks: `5` },
          { label: 'E', teks: `9` },
        ],
        kunci: 'A',
        pembahasan: `Perhatikan bilangan pada tabel, bilangan tersebut memiliki pola sebagai berikut.
Setiap kolom mengikuti perubahan yang tetap dari atas ke bawah: bertambah pada kolom pertama dan berkurang pada dua kolom lainnya.
Periksa aturan itu pada dua kolom yang lengkap lebih dahulu:
Kolom pertama: −18+7=−11;−11+7=−4 (sesuai dengan tabel).
Kolom ketiga: 28−6=22;22−6=16 (sesuai dengan tabel).
Aturan itu berlaku pada kedua kolom contoh, sehingga dapat diterapkan pada kolom yang memuat x:
Kolom kedua: 9−4=5;5−4=x.
Maka, diperoleh x=5−4=1.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      // tryout-ref-00-35 · Andika - Numerik SKD 2027_Ready to Input.docx, soal 35
      {
        nomor: 23,
        lesson: 'Numerik > Deret Bilangan > Matriks Deret',
        tipe: 'pg',
        pertanyaan: `Dengan menerapkan pola yang konsisten pada setiap baris, tentukan nilai x dalam tabel berikut.
\\(\\def\\arraystretch{1.4}\\begin{array}{|c|c|c|} \\hline 7 & 16 & 33 \\\\ \\hline 9 & 23 & 58 \\\\ \\hline 8 & 19 & \\text{x} \\\\ \\hline \\end{array}\\)`,
        opsi: [
          { label: 'A', teks: `41` },
          { label: 'B', teks: `43` },
          { label: 'C', teks: `44` },
          { label: 'D', teks: `45` },
          { label: 'E', teks: `47` },
        ],
        kunci: 'D',
        pembahasan: `Perhatikan bilangan pada tabel, bilangan tersebut memiliki pola sebagai berikut.
Pada setiap baris, bilangan ketiga merupakan kuadrat bilangan pertama dikurangi bilangan kedua.
Periksa aturan itu pada dua baris yang lengkap lebih dahulu:
Baris pertama: 7^(2)−16=49−16=33 (sesuai dengan tabel).
Baris kedua: 9^(2)−23=81−23=58 (sesuai dengan tabel).
Aturan itu berlaku pada kedua baris contoh, sehingga dapat diterapkan pada baris yang memuat x:
Baris ketiga: 8^(2)−19=64−19=x.
Maka, diperoleh x=64−19=45.`,
        tingkat: 'sulit',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Numerik > Deret Bilangan > Pola Bilangan Tabel` },
    soal: [
      // tryout-ref-00-42 · Andika - Numerik SKD 2027_Ready to Input.docx, soal 42
      {
        nomor: 24,
        lesson: 'Numerik > Deret Bilangan > Pola Bilangan Tabel',
        tipe: 'pg',
        pertanyaan: `Perhatikan tabel berikut!
\\(\\def\\arraystretch{1.4}\\begin{array}{|c|c|} \\hline \\textbf{Urutan ke-} & \\textbf{Nilai} \\\\ \\hline 1 & 2 \\\\ \\hline 2 & 6 \\\\ \\hline 4 & 54 \\\\ \\hline 6 & \\text{?} \\\\ \\hline 7 & 1458 \\\\ \\hline \\end{array}\\)
Bilangan manakah yang melengkapi nilai pada urutan ke-6 sesuai pola hubungan dalam tabel?`,
        opsi: [
          { label: 'A', teks: `162` },
          { label: 'B', teks: `324` },
          { label: 'C', teks: `432` },
          { label: 'D', teks: `486` },
          { label: 'E', teks: `1458` },
        ],
        kunci: 'D',
        pembahasan: `Misalkan \\(U_{n}\\) adalah nilai pada urutan ke-\\(n\\), dengan \\(n\\) menyatakan nomor urutan.
Perhatikan hubungan antara urutan dan nilainya.
• \\(U_{1}=2\\times 3^{1-1}=2\\times 1=2\\)
• \\(U_{2}=2\\times 3^{2-1}=2\\times 3=6\\)
• \\(U_{4}=2\\times 3^{4-1}=2\\times 27=54\\)
• \\(U_{7}=2\\times 3^{7-1}=2\\times 729=1458\\)
Maka pola yang digunakan adalah:
\\(U_{n}=2\\times 3^{n-1}\\)
\\(U_{6}=2\\times 3^{6-1}=2\\times 243=486\\)
Jadi, \\(U_{6}=486\\).`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tryout-ref-00-40 · Andika - Numerik SKD 2027_Ready to Input.docx, soal 40
      {
        nomor: 25,
        lesson: 'Numerik > Deret Bilangan > Pola Bilangan Tabel',
        tipe: 'pg',
        pertanyaan: `Perhatikan tabel berikut!
\\(\\def\\arraystretch{1.4}\\begin{array}{|c|c|} \\hline \\textbf{Urutan ke-} & \\textbf{Nilai} \\\\ \\hline 2 & 2 \\\\ \\hline 5 & 20 \\\\ \\hline 9 & 72 \\\\ \\hline 15 & \\text{?} \\\\ \\hline 21 & 420 \\\\ \\hline \\end{array}\\)
Tanda tanya pada urutan ke-15 harus diganti dengan bilangan ....`,
        opsi: [
          { label: 'A', teks: `196` },
          { label: 'B', teks: `200` },
          { label: 'C', teks: `210` },
          { label: 'D', teks: `225` },
          { label: 'E', teks: `240` },
        ],
        kunci: 'C',
        pembahasan: `Misalkan \\(U_{n}\\) adalah nilai pada urutan ke-\\(n\\), dengan \\(n\\) menyatakan nomor urutan.
Perhatikan hubungan antara urutan dan nilainya.
• \\(U_{2}=2^{2}-2=4-2=2\\)
• \\(U_{5}=5^{2}-5=25-5=20\\)
• \\(U_{9}=9^{2}-9=81-9=72\\)
• \\(U_{21}=21^{2}-21=441-21=420\\)
Maka pola yang digunakan adalah:
\\(U_{n}=n^{2}-n\\)
\\(U_{15}=15^{2}-15=225-15=210\\)
Jadi, \\(U_{15}=210\\).`,
        tingkat: 'sedang',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Numerik > Soal Cerita > Tabel Pernyataan - Kombinasi Pernyataan` },
    soal: [
      // tryout-ref-00-43 · Andika - Numerik SKD 2027_Ready to Input.docx, soal 43
      {
        nomor: 26,
        lesson: 'Numerik > Soal Cerita > Tabel Pernyataan - Kombinasi Pernyataan',
        tipe: 'pg',
        pertanyaan: `Daftar harga satuan menu di sebuah kedai adalah sebagai berikut. Seluruh pembelian dikenai harga sesuai tabel tanpa biaya tambahan.
\\(\\def\\arraystretch{1.4}\\begin{array}{|c|c|} \\hline \\textbf{Menu} & \\textbf{Harga} \\\\ \\hline \\text{Teh} & \\text{Rp8.000} \\\\ \\hline \\text{Kopi} & \\text{Rp12.000} \\\\ \\hline \\text{Roti} & \\text{Rp10.000} \\\\ \\hline \\text{Puding} & \\text{Rp7.000} \\\\ \\hline \\end{array}\\)
Pernyataan:
(1) Nara membeli 2 teh dan 1 roti dengan total harga Rp26.000.
(2) Aldi membeli 1 kopi dan 2 puding dengan total harga Rp25.000.
(3) Mira membeli 2 roti dan 1 puding dengan total harga Rp27.000.
(4) Danu membeli 3 teh dan 1 kopi dengan total harga Rp35.000.
Kombinasi yang memuat seluruh pernyataan benar adalah ....`,
        opsi: [
          { label: 'A', teks: `1 dan 2` },
          { label: 'B', teks: `2 dan 3` },
          { label: 'C', teks: `1 dan 4` },
          { label: 'D', teks: `1 dan 3` },
          { label: 'E', teks: `1, 3, dan 4` },
        ],
        kunci: 'D',
        pembahasan: `Harga satuan pada tabel berlaku untuk semua pembelian tanpa biaya tambahan. Periksa setiap pernyataan dengan menjumlahkan banyak barang × harga satuannya. Tabel berikut menunjukkan nilai yang seharusnya, bukan hanya status benar/salah.
\\(\\def\\arraystretch{1.4}\\begin{array}{|l|l|l|l|} \\hline \\textbf{No.} & \\textbf{Hitungan (rupiah)} & \\textbf{Klaim} & \\textbf{Status} \\\\ \\hline (1) & 2 \\times  8.000 + 10.000 = 26.000 & \\text{Rp26.000} & \\textbf{Benar} \\\\ \\hline (2) & 12.000 + 2 \\times  7.000 = 26.000 & \\text{Rp25.000} & \\text{Salah} \\\\ \\hline (3) & 2 \\times  10.000 + 7.000 = 27.000 & \\text{Rp27.000} & \\textbf{Benar} \\\\ \\hline (4) & 3 \\times  8.000 + 12.000 = 36.000 & \\text{Rp35.000} & \\text{Salah} \\\\ \\hline \\end{array}\\)
Pernyataan (1) benar karena 2 × 8.000 + 10.000 = 26.000 rupiah. Pernyataan (2) salah karena 12.000 + 2 × 7.000 = 26.000 rupiah, selisih Rp1.000 lebih tinggi daripada klaim. Pernyataan (3) benar karena 2 × 10.000 + 7.000 = 27.000 rupiah. Pernyataan (4) salah karena 3 × 8.000 + 12.000 = 36.000 rupiah, selisih Rp1.000 lebih tinggi daripada klaim.
Eliminasi opsi:
A memuat (2) yang salah dan belum memuat (3).
B memuat (2) yang salah dan belum memuat (1).
C memuat (4) yang salah dan belum memuat (3).
D memuat tepat seluruh pernyataan benar, yaitu (1) dan (3).
E memuat tambahan (4) yang salah.
Jadi, jawaban yang benar adalah D.

Cara cepat: Uji pernyataan yang paling membedakan pilihan untuk eliminasi awal, lalu pastikan opsi akhir memuat seluruh pernyataan benar tanpa tambahan pernyataan salah.`,
        tingkat: 'mudah',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Numerik > Soal Cerita > Tabel Pernyataan - Kombinasi Optimal` },
    soal: [
      // tryout-ref-00-48 · Andika - Numerik SKD 2027_Ready to Input.docx, soal 48
      {
        nomor: 27,
        lesson: 'Numerik > Soal Cerita > Tabel Pernyataan - Kombinasi Optimal',
        tipe: 'pg',
        pertanyaan: `Sebuah persemaian akan membeli baki untuk menempatkan bibit. Tersedia tiga jenis baki dengan kapasitas dan harga berikut.
\\(\\def\\arraystretch{1.4}\\begin{array}{|c|c|c|} \\hline \\textbf{Jenis Baki} & \\textbf{Kapasitas} & \\textbf{Biaya} \\\\ \\hline \\text{A} & \\text{12 bibit} & \\text{Rp7.000} \\\\ \\hline \\text{B} & \\text{20 bibit} & \\text{Rp11.000} \\\\ \\hline \\text{C} & \\text{30 bibit} & \\text{Rp16.000} \\\\ \\hline \\end{array}\\)
Dengan ketentuan:
(1) Total biaya pembelian tidak melebihi Rp70.000.
(2) Jumlah baki yang dibeli paling banyak 6 buah.
(3) Baki C tersedia paling banyak 2 buah; baki A dan B tersedia sesuai kebutuhan.
Di antara pilihan berikut, kombinasi yang menampung bibit terbanyak dan memenuhi seluruh ketentuan adalah ....`,
        opsi: [
          { label: 'A', teks: `6 baki B` },
          { label: 'B', teks: `1 baki A, 4 baki B, dan 1 baki C` },
          { label: 'C', teks: `2 baki A, 2 baki B, dan 2 baki C` },
          { label: 'D', teks: `1 baki A, 3 baki B, dan 2 baki C` },
          { label: 'E', teks: `3 baki A dan 3 baki C` },
        ],
        kunci: 'C',
        pembahasan: `Tiga ketentuan harus dipenuhi sekaligus: biaya paling banyak Rp70.000, jumlah baki paling banyak 6, dan baki C paling banyak 2 buah. Di antara opsi yang memenuhi semuanya, dipilih kapasitas terbesar.
\\(\\def\\arraystretch{1.4}\\begin{array}{|l|l|l|l|l|} \\hline \\textbf{Opsi} & \\textbf{Kombinasi baki} & \\textbf{Kapasitas (bibit)} & \\textbf{Biaya (rupiah)} & \\textbf{Kelayakan} \\\\ \\hline \\text{A} & \\text{6 baki B} & 6 \\times  20 = 120 & 6 \\times  11.000 = 66.000 & \\text{Layak} \\\\ \\hline \\text{B} & \\text{1 baki A, 4 baki B, dan 1 baki C} & 12 + 4 \\times  20 + 30 = 122 & 7.000 + 4 \\times  11.000 + 16.000 = 67.000 & \\text{Layak} \\\\ \\hline \\text{C} & \\text{2 baki A, 2 baki B, dan 2 baki C} & 2 \\times  12 + 2 \\times  20 + 2 \\times  30 = 124 & 2 \\times  7.000 + 2 \\times  11.000 + 2 \\times  16.000 = 68.000 & \\textbf{Layak; kapasitas terbesar} \\\\ \\hline \\text{D} & \\text{1 baki A, 3 baki B, dan 2 baki C} & 12 + 3 \\times  20 + 2 \\times  30 = 132 & 7.000 + 3 \\times  11.000 + 2 \\times  16.000 = 72.000 & \\text{Melebihi anggaran} \\\\ \\hline \\text{E} & \\text{3 baki A dan 3 baki C} & 3 \\times  12 + 3 \\times  30 = 126 & 3 \\times  7.000 + 3 \\times  16.000 = 69.000 & \\text{Baki C lebih dari 2} \\\\ \\hline \\end{array}\\)
Semua opsi memakai 6 baki. D dan E menampung lebih banyak bibit daripada C, tetapi melanggar ketentuan: D memerlukan biaya Rp72.000, melebihi anggaran Rp70.000, dan E memerlukan 3 baki C, padahal hanya tersedia 2. Di antara opsi yang layak (A, B, dan C), kapasitas terbesar adalah 124 bibit pada C.
Biaya per bibit (A sekitar Rp583, B Rp550, C sekitar Rp533) membantu melihat efisiensi, tetapi bukan dasar jawaban karena jumlah baki dan stok baki C dibatasi.
Jadi, jawaban yang benar adalah C.

Cara cepat: Coret opsi yang melanggar salah satu ketentuan (anggaran, jumlah baki, atau stok baki C), lalu pilih kapasitas terbesar di antara opsi yang tersisa. Jangan memilih hanya dari kapasitas terbesar atau biaya per bibit.`,
        tingkat: 'sulit',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Figural > Bangun Datar > Figural Analogi` },
    soal: [
      // tryout-pattern-map-50-0-0-0 · Variasi terhitung mengikuti mapping Figural Analogi; acuan: mesin figural proyek dan mapping 2027
      {
        nomor: 28,
        lesson: 'Figural > Bangun Datar > Figural Analogi',
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
        kunci: 'A',
        pembahasan: `Berdasarkan pasangan gambar yang diketahui, didapatkan hubungan sebagai berikut:
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-analogi-s01-pembahasan-1.png⟧

Hubungan yang berlaku: seluruh gambar diputar 45° berlawanan arah jarum jam.

Dengan mengaplikasikan hubungan yang sama, didapatkan:
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-analogi-s01-pembahasan-2.png⟧

Gambar yang dihasilkan memiliki bangun pembingkai (lingkaran), bangun di tengah (segi lima runcing) runcing ke kiri berwarna putih, bangun kecil di bawah (lingkaran) berwarna abu-abu, dan panah kecil di atas (panah) menunjuk ke atas berwarna hitam.
Jadi, jawaban yang benar adalah A.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tryout-pattern-map-50-0-1-0 · Variasi terhitung mengikuti mapping Figural Analogi; acuan: mesin figural proyek dan mapping 2027
      {
        nomor: 29,
        lesson: 'Figural > Bangun Datar > Figural Analogi',
        tipe: 'pg',
        pertanyaan: `Tentukanlah gambar yang tepat untuk menggantikan tanda tanya "?", sehingga kedua pasangan gambar di bawah ini memiliki hubungan yang serupa.
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-analogi-s02-soal.png⟧`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-analogi-s02-opsi-a.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-analogi-s02-opsi-b.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-analogi-s02-opsi-c.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-analogi-s02-opsi-d.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-analogi-s02-opsi-e.png⟧` },
        ],
        kunci: 'D',
        pembahasan: `Berdasarkan pasangan gambar yang diketahui, didapatkan hubungan sebagai berikut:
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-analogi-s02-pembahasan-1.png⟧

Hubungan yang berlaku terdiri atas 2 aturan:
1. Seluruh gambar diputar 90° searah jarum jam.
2. Bangun kecil di kiri (lingkaran) dihilangkan.

Dengan mengaplikasikan hubungan yang sama, didapatkan:
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-analogi-s02-pembahasan-2.png⟧

Gambar yang dihasilkan memiliki bangun pembingkai (persegi), bangun di tengah (panah) menunjuk ke kiri berwarna hitam, dan panah kecil di bawah (panah) menunjuk ke bawah berwarna hitam.
Jadi, jawaban yang benar adalah D.`,
        tingkat: 'sedang',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Figural > Bangun Datar > Figural Ketidaksamaan` },
    soal: [
      // tryout-pattern-map-51-0-0-0 · Variasi terhitung mengikuti mapping Figural Ketidaksamaan; acuan: mesin figural proyek dan mapping 2027
      {
        nomor: 30,
        lesson: 'Figural > Bangun Datar > Figural Ketidaksamaan',
        tipe: 'pg',
        pertanyaan: `Manakah gambar yang memiliki prinsip, pola, atau karakteristik yang berbeda dibandingkan gambar lainnya?`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-ketidaksamaan-s01-opsi-a.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-ketidaksamaan-s01-opsi-b.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-ketidaksamaan-s01-opsi-c.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-ketidaksamaan-s01-opsi-d.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-ketidaksamaan-s01-opsi-e.png⟧` },
        ],
        kunci: 'E',
        pembahasan: `Hitung banyaknya bangun berwarna hitam pada setiap gambar:
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-ketidaksamaan-s01-pembahasan-1.png⟧

Empat gambar memuat jumlah bangun hitam genap (2, 4, 6, 8), sedangkan satu gambar memuat 5 bangun hitam, yaitu jumlah ganjil. Banyaknya bangun putih atau abu-abu dan susunan letaknya berbeda-beda pada tiap gambar dan tidak menentukan kelompok.
Jadi, gambar yang berbeda adalah gambar dengan jumlah bangun hitam ganjil.
Jadi, jawaban yang benar adalah E.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tryout-pattern-map-51-0-1-0 · Variasi terhitung mengikuti mapping Figural Ketidaksamaan; acuan: mesin figural proyek dan mapping 2027
      {
        nomor: 31,
        lesson: 'Figural > Bangun Datar > Figural Ketidaksamaan',
        tipe: 'pg',
        pertanyaan: `Manakah gambar yang memiliki prinsip, pola, atau karakteristik yang berbeda dibandingkan gambar lainnya?`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-ketidaksamaan-s02-opsi-a.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-ketidaksamaan-s02-opsi-b.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-ketidaksamaan-s02-opsi-c.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-ketidaksamaan-s02-opsi-d.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-ketidaksamaan-s02-opsi-e.png⟧` },
        ],
        kunci: 'B',
        pembahasan: `Hitung banyaknya bangun berwarna hitam pada setiap gambar:
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-ketidaksamaan-s02-pembahasan-1.png⟧

Empat gambar memuat jumlah bangun hitam ganjil (1, 3, 7, 9), sedangkan satu gambar memuat 2 bangun hitam, yaitu jumlah genap. Banyaknya bangun putih atau abu-abu dan susunan letaknya berbeda-beda pada tiap gambar dan tidak menentukan kelompok.
Jadi, gambar yang berbeda adalah gambar dengan jumlah bangun hitam genap.
Jadi, jawaban yang benar adalah B.`,
        tingkat: 'sedang',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Figural > Bangun Datar > Figural Serial` },
    soal: [
      // tryout-pattern-map-52-0-0-0 · Variasi terhitung mengikuti mapping Figural Serial; acuan: mesin figural proyek dan mapping 2027
      {
        nomor: 32,
        lesson: 'Figural > Bangun Datar > Figural Serial',
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
        kunci: 'C',
        pembahasan: `Berlaku pola sebagai berikut:
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-serial-s01-pembahasan-1.png⟧

Terdapat 3 aturan yang berjalan bersamaan dari kotak ke kotak:
1. Bangun di tengah berputar 90° berlawanan arah jarum jam pada setiap kotak.
2. Warna bangun di tengah bergeser maju satu langkah pada siklus putih, abu-abu, hitam pada setiap kotak.
3. Bangun kecil di tepi berpindah 45° searah jarum jam mengelilingi pusat gambar pada setiap kotak.
Meneruskan semua aturan itu ke kotak berikutnya (kotak ke-6): bangun di tengah (segi lima runcing) runcing ke kanan atas, bangun di tengah (segi lima runcing) berwarna hitam dan bangun kecil di tepi (bulan sabit) berada di kiri atas dan terbuka ke kiri bawah. Bagian lain tidak berubah.
Jadi, jawaban yang benar adalah C.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      // tryout-pattern-map-52-0-1-0 · Variasi terhitung mengikuti mapping Figural Serial; acuan: mesin figural proyek dan mapping 2027
      {
        nomor: 33,
        lesson: 'Figural > Bangun Datar > Figural Serial',
        tipe: 'pg',
        pertanyaan: `Tentukanlah gambar yang tepat untuk menggantikan tanda tanya "?" pada seri gambar di bawah ini!
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-serial-s02-soal.png⟧`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-serial-s02-opsi-a.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-serial-s02-opsi-b.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-serial-s02-opsi-c.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-serial-s02-opsi-d.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-serial-s02-opsi-e.png⟧` },
        ],
        kunci: 'E',
        pembahasan: `Berlaku pola sebagai berikut:
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-serial-s02-pembahasan-1.png⟧

Terdapat 4 aturan yang berjalan bersamaan dari kotak ke kotak:
1. Bangun di tengah berputar 45° searah jarum jam pada setiap kotak.
2. Warna bangun di tengah berganti-ganti antara putih dan hitam.
3. Batang yang melintang di tengah berputar 90° berlawanan arah jarum jam pada setiap kotak.
4. Warna bulatan kecil di sudut bergeser maju satu langkah pada siklus putih, abu-abu, hitam pada setiap kotak.
Batang tidak berarah, sehingga kedudukan yang berselisih 180° tampak sama: putaran 90° berlawanan arah jarum jam tampak sama dengan putaran 90° searah jarum jam. Pembahasan ini memakai arah putaran pada aturan.
Meneruskan semua aturan itu ke kotak bertanda tanya (kotak ke-4): bangun di tengah (trapesium) sisi pendek ke kiri atas, bangun di tengah (trapesium) berwarna hitam, batang yang melintang di tengah terputar 3 × 90° = 270° berlawanan arah jarum jam dari kedudukannya pada kotak pertama, sehingga batang tampak miring dari kiri atas ke kanan bawah, dan bulatan kecil di sudut (lingkaran) berwarna putih. Bagian lain tidak berubah.
Jadi, jawaban yang benar adalah E.`,
        tingkat: 'sulit',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Figural > Bangun Datar > Figural Matriks (Kotak 3x3)` },
    soal: [
      // tryout-pattern-map-53-0-0-0 · Variasi terhitung mengikuti mapping Figural Matriks (Kotak 3x3); acuan: mesin figural proyek dan mapping 2027
      {
        nomor: 34,
        lesson: 'Figural > Bangun Datar > Figural Matriks (Kotak 3x3)',
        tipe: 'pg',
        pertanyaan: `Tentukanlah gambar yang tepat untuk menggantikan tanda tanya "?" pada susunan gambar di bawah ini!
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s01-soal.png⟧`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s01-opsi-a.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s01-opsi-b.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s01-opsi-c.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s01-opsi-d.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s01-opsi-e.png⟧` },
        ],
        kunci: 'B',
        pembahasan: `Perhatikan bangun di tengah pada masing-masing kotak (yang dilingkari merah). Aturannya:
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s01-pembahasan-1.png⟧
• Bangun di tengah berputar 45° searah jarum jam pada setiap kolom dan 90° berlawanan arah jarum jam pada setiap baris.
• Warna bangun di tengah sama pada setiap baris.

Sekarang perhatikan bangun kecil di sudut pada masing-masing kotak (yang dilingkari merah). Aturannya:
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s01-pembahasan-2.png⟧
• Warna bangun kecil di sudut sama pada setiap kolom.

Dengan menggabungkan seluruh aturan, kotak yang hilang memuat bangun di tengah (bulan sabit) terbuka ke kiri berwarna putih dan bangun kecil di sudut (bintang bersudut empat) berwarna putih.
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s01-pembahasan-3.png⟧

Jadi, jawaban yang benar adalah B.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tryout-pattern-map-53-0-1-0 · Variasi terhitung mengikuti mapping Figural Matriks (Kotak 3x3); acuan: mesin figural proyek dan mapping 2027
      {
        nomor: 35,
        lesson: 'Figural > Bangun Datar > Figural Matriks (Kotak 3x3)',
        tipe: 'pg',
        pertanyaan: `Tentukanlah gambar yang tepat untuk menggantikan tanda tanya "?" pada susunan gambar di bawah ini!
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s02-soal.png⟧`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s02-opsi-a.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s02-opsi-b.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s02-opsi-c.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s02-opsi-d.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s02-opsi-e.png⟧` },
        ],
        kunci: 'D',
        pembahasan: `Perhatikan bangun di tengah pada masing-masing kotak (yang dilingkari merah). Aturannya:
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s02-pembahasan-1.png⟧
• Setiap baris dan setiap kolom memuat ketiga bentuk bangun di tengah (segitiga, belah ketupat, dan persegi) tepat satu kali.
• Setiap baris dan setiap kolom memuat ketiga warna bangun di tengah (putih, abu-abu, dan hitam) tepat satu kali.

Sekarang perhatikan bangun kecil di sudut pada masing-masing kotak (yang dilingkari merah). Aturannya:
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s02-pembahasan-2.png⟧
• Setiap baris dan setiap kolom memuat ketiga bentuk bangun kecil di sudut (lingkaran, belah ketupat, dan segienam) tepat satu kali.
• Warna bangun kecil di sudut sama pada setiap kolom.

Sekarang perhatikan batang di kanan pada masing-masing kotak (yang dilingkari merah). Aturannya:
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s02-pembahasan-3.png⟧
• Warna batang di kanan sama pada setiap baris.
• Batang di kanan berputar 45° searah jarum jam pada setiap kolom.

Dengan menggabungkan seluruh aturan, kotak yang hilang memuat bangun di tengah (belah ketupat) berwarna putih, bangun kecil di sudut (segienam) berwarna putih, dan batang di kanan berwarna abu-abu.
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s02-pembahasan-4.png⟧

Jadi, jawaban yang benar adalah D.`,
        tingkat: 'sulit',
        status: 'draft',
      },
    ],
  },
];

/** 45 soal TKP berskala. */
export const contohGeneratorTkp: Kelompok[] = [
  {
    stimulus: { judul: `Pelayanan Publik` },
    soal: [
      // tkp-kasus-pp-08 · kasus orisinal data/tkp-kasus (bank TKP generator)
      {
        nomor: 1,
        lesson: 'Pelayanan Publik',
        tipe: 'skala',
        pertanyaan: `Anda anggota tim penerima permohonan bantuan usaha mikro. Batas penerimaan berkas ditutup kemarin pukul 16.00 dan berlaku sama bagi setiap pemohon. Pagi ini seorang pemilik warung datang dengan berkas lengkap, mengaku lupa tanggalnya, dan memohon berkasnya diterima karena modalnya menipis. Tidak ada gangguan layanan pada hari batas itu. Anda tidak berwenang memperpanjang tenggat, sedangkan gelombang penerimaan berikutnya dibuka bulan depan. Sikap Anda yang paling tepat adalah ...`,
        opsi: [
          { label: 'A', teks: `Meminta pemohon datang kembali besok pagi, lalu memberi tahu rekan bahwa tenggat kemungkinan masih dilonggarkan.` },
          { label: 'B', teks: `Menjelaskan bahwa berkas melewati tenggat dan ditolak, lalu mencatat nama pemohon untuk gelombang penerimaan berikutnya.` },
          { label: 'C', teks: `Mengubah tanggal terima berkas pada daftar penerimaan menjadi kemarin, lalu meneruskannya ke seleksi bantuan usaha.` },
          { label: 'D', teks: `Menjelaskan bahwa tenggat berlaku sama, lalu menyampaikan jadwal gelombang berikutnya beserta kelengkapannya.` },
          { label: 'E', teks: `Menyarankan pemohon mengajukan surat keberatan kepada pimpinan, lalu menyampaikan bahwa hasilnya belum dapat dipastikan.` },
        ],
        kunci: 'D',
        pembahasan: `Konsep yang digunakan: Kesetaraan perlakuan dan kepastian standar layanan.
Kata kunci: tenggat berlaku sama, berkas lengkap, lupa tanggal, tanpa gangguan layanan, gelombang berikutnya.
Opsi D (5 poin) paling tepat karena penjelasan bahwa tenggat berlaku sama menjaga keadilan bagi pemohon yang tepat waktu, dan informasi jadwal gelombang berikutnya memberi pemilik warung jalan keluar yang sah. Ia dapat menyiapkan diri tanpa harapan keliru.
Pembahasan opsi lain:
A (2 poin) meminta pemohon datang besok sambil menyebut tenggat kemungkinan masih dilonggarkan menumbuhkan harapan tanpa dasar, padahal Anda tidak berwenang memperpanjang tenggat. Pemohon dapat menyiapkan diri dengan perkiraan yang keliru.
B (4 poin) penolakan yang jelas dan pencatatan nama menunjukkan kepedulian. Namun pemohon belum diberi tahu jadwal gelombang berikutnya maupun kelengkapan yang perlu disiapkan, sehingga ia belum mendapat jalan keluar yang konkret.
C (1 poin) mengubah tanggal terima memalsukan daftar penerimaan dan melanggar batas yang berlaku sama bagi setiap pemohon. Pemohon lain yang tepat waktu dirugikan, dan Anda menanggung akibat pemalsuan catatan itu.
E (3 poin) surat keberatan memang dapat diajukan dan Anda sudah menyampaikan bahwa hasilnya belum pasti. Namun tidak ada gangguan layanan pada hari batas yang mendukungnya, sehingga langkah ini mengarahkan pemohon pada pengecualian yang tidak punya dasar.
Cara cepat: Tanyakan apakah ada keadaan yang membenarkan pengecualian, dan siapa lagi yang terdampak jika pengecualian itu diberikan.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      // tkp-kasus-pp-21 · kasus orisinal data/tkp-kasus (bank TKP generator)
      {
        nomor: 2,
        lesson: 'Pelayanan Publik',
        tipe: 'skala',
        pertanyaan: `Anda melayani pendaftaran bantuan pangan di stan layanan yang dibuka di balai warga. Seorang bapak datang dengan suara tinggi karena namanya tidak ada dalam daftar penerima, padahal tetangganya terdaftar. Setelah Anda periksa, namanya belum masuk karena pendataan di kelurahannya belum diperbarui. Ia mengancam akan mengunggah kemarahannya di media sosial, dan beberapa warga mulai memperhatikan. Anda berwenang menerima pengajuan sanggah untuk diteruskan ke kelurahan. Sikap Anda adalah ...`,
        opsi: [
          { label: 'A', teks: `Meminta bapak itu menenangkan diri dahulu, lalu melayani warga berikutnya sampai ia siap berbicara lagi.` },
          { label: 'B', teks: `Menjelaskan hasil pemeriksaan data kepadanya secara rinci, lalu menerima pengajuan sanggahnya untuk diteruskan ke kelurahan.` },
          { label: 'C', teks: `Memasukkan namanya ke daftar penerima di stan, lalu memperbaiki datanya di kelurahan setelah acara selesai.` },
          { label: 'D', teks: `Meminta maaf atas ketidaknyamanan, lalu mencatat keluhan bapak itu untuk disampaikan ke kelurahan akhir pekan ini.` },
          { label: 'E', teks: `Menerima pengajuan sanggah untuk diteruskan ke kelurahan, lalu menyampaikan bahwa unggahan di media sosial tidak mempercepat proses.` },
        ],
        kunci: 'B',
        pembahasan: `Konsep yang digunakan: Pelayanan prima terhadap pengguna yang marah, yaitu empati yang disertai penyelesaian dalam kewenangan.
Kata kunci: daftar penerima, pendataan kelurahan belum diperbarui, suara tinggi, ancaman media sosial, pengajuan sanggah.
Opsi B (5 poin) paling tepat karena penjelasan hasil pemeriksaan tentang pendataan kelurahan yang belum diperbarui menjawab pertanyaan bapak itu, dan penerimaan sanggah yang Anda berwenang teruskan membuat haknya diproses. Ancaman unggahan tidak menggeser prosedur.
Pembahasan opsi lain:
A (2 poin) menyuruh bapak itu menenangkan diri menunda penerimaan sanggah dan menempatkan kemarahannya sebagai kesalahan warga. Haknya tetap dapat diproses nanti, tetapi tidak ada langkah yang menjawab kebutuhannya saat ini.
C (1 poin) memasukkan nama ke daftar penerima sebelum data diverifikasi melanggar aturan pendataan dan memberi insentif bagi ancaman unggahan. Penerima lain yang terdata sesuai prosedur dirugikan oleh data yang belum diperiksa.
D (3 poin) permintaan maaf meredakan suasana dan keluhannya dicatat. Namun sanggah yang Anda berwenang terima tidak diajukan, dan keluhan baru sampai ke kelurahan akhir pekan ini sehingga proses haknya tertunda.
E (4 poin) sanggah diterima dan diteruskan sehingga haknya diproses, tetapi jawaban tentang unggahan terdengar defensif dan tidak mengakui kekecewaannya. Hasil pemeriksaan data juga belum dijelaskan kepadanya.
Cara cepat: Dengarkan keluhan pengguna lebih dulu, lalu lihat bagian mana dari masalahnya yang dapat Anda selesaikan di tempat.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      // tkp-kasus-pp-06 · kasus orisinal data/tkp-kasus (bank TKP generator)
      {
        nomor: 3,
        lesson: 'Pelayanan Publik',
        tipe: 'skala',
        pertanyaan: `Anda pegawai baru yang bertugas bersama tim layanan keliling di balai desa. Rekan senior yang biasa menangani verifikasi data kependudukan mendadak sakit dan pulang, sedangkan pelatihan yang baru Anda ikuti hanya mencakup penerimaan berkas. Seorang warga meminta pembaruan data keluarga yang harus diverifikasi petugas bersertifikat. Berkas yang sudah dicatat langsung masuk antrean verifikasi. Kepala tim dapat dihubungi lewat telepon dan dapat menunjuk petugas dari kantor yang tiba dalam satu jam. Apa yang sebaiknya Anda lakukan?`,
        opsi: [
          { label: 'A', teks: `Meminta kepala tim mengirim petugas verifikasi pengganti, lalu mempersilakan warga duduk sampai petugas tiba.` },
          { label: 'B', teks: `Memberi tahu warga bahwa Anda baru bertugas pada penerimaan berkas, lalu melayani warga lain yang siap.` },
          { label: 'C', teks: `Menerima dan mencatat berkas tersebut, lalu meminta kepala tim mengirim petugas bersertifikat untuk memeriksanya.` },
          { label: 'D', teks: `Memverifikasi data memakai panduan yang pernah Anda baca, lalu mencatat pembaruan data keluarga itu sebagai berkas selesai.` },
          { label: 'E', teks: `Menyarankan warga membawa berkas ke kantor kecamatan terdekat, lalu memberi tahu kepala tim tentang kendala di lapangan.` },
        ],
        kunci: 'C',
        pembahasan: `Konsep yang digunakan: Kompetensi dan batas kewenangan dalam pelayanan, yaitu mengerjakan yang sesuai pelatihan dan menghubungkan pengguna dengan pihak yang tepat.
Kata kunci: pegawai baru, pelatihan penerimaan berkas, petugas bersertifikat, antrean verifikasi, kepala tim.
Opsi C (5 poin) paling tepat karena berkas yang diterima dan dicatat sekarang langsung masuk antrean verifikasi, sedangkan verifikasinya diserahkan kepada petugas bersertifikat yang dapat tiba dalam satu jam. Pekerjaan sesuai pelatihan Anda dikerjakan, sedangkan yang di luar kompetensi tidak Anda ambil sendiri.
Pembahasan opsi lain:
A (4 poin) meminta pengganti ke kepala tim sudah tepat karena verifikasi harus oleh petugas bersertifikat. Namun berkas warga belum dicatat sehingga belum masuk antrean verifikasi, dan satu jam sebelum pengganti tiba tidak dipakai untuk memprosesnya.
B (2 poin) melayani warga lain memang memanfaatkan waktu, tetapi kebutuhan warga yang meminta pembaruan tidak diteruskan kepada petugas verifikasi mana pun. Berkasnya tidak dicatat, sehingga tidak ada langkah yang menjawab kebutuhannya.
D (1 poin) memverifikasi data tanpa sertifikasi melampaui pelatihan Anda yang hanya mencakup penerimaan berkas. Kesalahan pada data keluarga dapat merugikan warga dalam pengurusan dokumen berikutnya.
E (3 poin) mengirim warga ke kantor kecamatan menjaga ketentuan verifikasi dan kepala tim diberi tahu. Namun petugas pengganti dapat tiba dalam satu jam, sehingga warga menanggung perjalanan dan berkasnya belum dicatat.
Cara cepat: Ukur kemampuan dan kewenangan Anda lebih dulu, lalu cari langkah yang tetap memajukan kebutuhan warga di dalam batas itu.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      // tkp-kasus-pp-09 · kasus orisinal data/tkp-kasus (bank TKP generator)
      {
        nomor: 4,
        lesson: 'Pelayanan Publik',
        tipe: 'skala',
        pertanyaan: `Lift di kantor layanan perizinan rusak sejak pagi dan baru selesai diperbaiki sore hari. Seorang pengguna kursi roda datang untuk mengambil izin yang sudah selesai di loket lantai dua. Anda koordinator loket yang berwenang mengatur lokasi layanan di unit Anda, dan prosedur membolehkan penyerahan dokumen di meja informasi lantai satu setelah identitas pemohon diperiksa. Rekan Anda di lantai dua sedang melayani antrean. Apa langkah Anda yang paling tepat?`,
        opsi: [
          { label: 'A', teks: `Meminta pengguna kembali setelah lift diperbaiki sore ini, lalu menyiapkan dokumennya agar langsung diserahkan.` },
          { label: 'B', teks: `Membawa dokumen izin ke meja informasi lantai satu, lalu menyerahkannya setelah identitas pengguna cocok dengan berkas.` },
          { label: 'C', teks: `Meminta dua pengunjung mengangkat kursi roda menaiki tangga, lalu melayani pengguna di loket lantai dua.` },
          { label: 'D', teks: `Meminta rekan di lantai dua mengantar dokumen ke meja informasi, lalu meminta petugas meja itu menyerahkannya.` },
          { label: 'E', teks: `Menyarankan pengguna membuat surat kuasa kepada keluarganya, lalu menyerahkan dokumen setelah kuasa itu diverifikasi.` },
        ],
        kunci: 'B',
        pembahasan: `Konsep yang digunakan: Akses layanan bagi penyandang disabilitas saat fasilitas terganggu.
Kata kunci: lift rusak, pengguna kursi roda, loket lantai dua, meja informasi lantai satu, lokasi layanan, identitas pemohon.
Opsi B (5 poin) paling tepat karena menurunkan layanan ke lantai satu sesuai prosedur menyelesaikan kebutuhan pengguna kursi roda hari ini tanpa mengubah syarat identitas. Hambatan lift diatasi oleh petugas, bukan dipindahkan kepada pengguna.
Pembahasan opsi lain:
A (3 poin) menyiapkan dokumen agar langsung diserahkan membantu, tetapi pengguna kursi roda tetap harus kembali setelah lift diperbaiki. Padahal prosedur membolehkan penyerahan dokumen di lantai satu sekarang.
C (1 poin) mengangkat kursi roda menaiki tangga membahayakan keselamatan dan martabat pengguna serta melibatkan pengunjung yang tidak terlatih. Hambatan lift tidak diatasi, hanya diganti menjadi risiko cedera, padahal penyerahan dokumen di lantai satu diizinkan prosedur.
D (4 poin) meja informasi lantai satu memang boleh menyerahkan dokumen dan koordinator berwenang mengatur lokasi, tetapi dokumen berpindah melalui dua orang dan rekan yang sedang melayani antrean harus meninggalkan loketnya. Layanan menjadi lebih lambat dan rantai penyerahan lebih panjang daripada koordinator yang membawa sendiri.
E (2 poin) surat kuasa membebani pengguna dan keluarga dengan pengurusan baru karena kerusakan lift yang bukan kesalahan mereka. Cara ini tidak membahayakan pengguna, tetapi menambah langkah penyerahan dokumen yang sebenarnya tidak diperlukan.
Cara cepat: Cari tahu bagian layanan mana yang terhambat dan siapa yang sebaiknya menanggung hambatan itu.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      // tkp-kasus-pp-13 · kasus orisinal data/tkp-kasus (bank TKP generator)
      {
        nomor: 5,
        lesson: 'Pelayanan Publik',
        tipe: 'skala',
        pertanyaan: `Anda koordinator layanan perizinan daring. Setelah Anda menambah dua petugas penjawab telepon, jumlah panggilan yang menanyakan status permohonan tetap tinggi pada setiap awal pekan. Catatan panggilan menunjukkan sebagian besar penelepon tidak menerima pemberitahuan status karena pesan hanya dikirim lewat SMS ke nomor yang diisi saat mendaftar, dan banyak nomor itu sudah tidak aktif. Aplikasi sudah punya halaman cek status mandiri yang jarang dipakai, dan surel pemohon juga tercatat saat mendaftar. Langkah Anda yang paling tepat adalah ...`,
        opsi: [
          { label: 'A', teks: `Mengirim pemberitahuan status lewat surel kepada penelepon pekan ini, lalu memantau jumlah panggilan pekan depan.` },
          { label: 'B', teks: `Menambah satu petugas lagi pada jalur telepon, lalu memantau jumlah panggilan pada setiap awal pekan.` },
          { label: 'C', teks: `Meminta petugas menyatakan pesan sudah terkirim dan nomor adalah urusan pemohon, lalu mengakhiri panggilan telepon.` },
          { label: 'D', teks: `Menambah pemberitahuan lewat surel yang tercatat saat mendaftar, lalu meminta pemohon memperbarui nomor saat masuk akun.` },
          { label: 'E', teks: `Mengumumkan halaman cek status di laman utama, lalu meminta petugas telepon mengarahkan penelepon ke halaman itu.` },
        ],
        kunci: 'D',
        pembahasan: `Konsep yang digunakan: Perbaikan layanan berkelanjutan yang menyentuh penyebab masalah.
Kata kunci: penambahan petugas telepon, pemberitahuan SMS, nomor tidak aktif, surel pemohon, cek status mandiri.
Opsi D (5 poin) paling tepat karena penyebab panggilan adalah pemberitahuan yang hanya lewat SMS ke nomor lama, sehingga pemberitahuan lewat surel yang tercatat dan pembaruan nomor langsung mengubah cara pemberitahuan sampai ke pemohon. Perbaikan menyasar akar masalah, bukan kapasitas telepon.
Pembahasan opsi lain:
A (3 poin) surel kepada penelepon pekan ini menjawab mereka yang sudah menanyakan status, memakai surel yang memang tercatat. Namun pemohon lain tetap menerima SMS ke nomor lama dan nomor itu belum diperbarui, sehingga panggilan awal pekan akan berulang.
B (2 poin) menambah petugas telepon mengulang perbaikan yang sebelumnya sudah dicoba dan tidak menurunkan panggilan. Catatan panggilan menunjuk penyebab pada pemberitahuan SMS, bukan pada jumlah penjawab.
C (1 poin) menyatakan pesan sudah terkirim dan menyerahkan pemeriksaan nomor kepada pemohon memindahkan beban kegagalan layanan kepada pengguna. Penelepon yang tidak mendapat pemberitahuan ditinggalkan tanpa bantuan.
E (4 poin) halaman cek status yang sudah ada membuat pemohon dapat memeriksa sendiri dan mengurangi panggilan. Namun pemberitahuan tetap hanya lewat SMS ke nomor lama, sehingga pemohon yang tidak membuka halaman itu tetap tidak menerima kabar.
Cara cepat: Telusuri penyebab masalah dari catatan yang tersedia, lalu bandingkan setiap usulan dengan penyebab itu.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tkp-kasus-pp-11 · kasus orisinal data/tkp-kasus (bank TKP generator)
      {
        nomor: 6,
        lesson: 'Pelayanan Publik',
        tipe: 'skala',
        pertanyaan: `Anda penghubung perusahaan jasa pengiriman yang bermitra dengan dinas perizinan untuk mengantar izin usaha. Pagi ini kurir Anda melapor bahwa izin milik Bu Rahma diserahkan kepada pemilik toko di sebelahnya yang namanya mirip, dan toko itu sudah membukanya. Kontrak kemitraan mengharuskan penghubung perusahaan melapor kepada penghubung dinas pada hari yang sama bila dokumen salah antar, sedangkan dinas yang menerbitkan ulang izin. Kurir masih berada di sekitar toko dan harus berangkat ke alamat berikutnya setengah jam lagi. Bagaimana Anda menanganinya?`,
        opsi: [
          { label: 'A', teks: `Melapor kepada penghubung dinas beserta kronologi, lalu meminta dinas menentukan cara menarik dokumen itu.` },
          { label: 'B', teks: `Meminta pemilik toko mengantar dokumen itu ke rumah Bu Rahma, lalu melapor kepada penghubung dinas pada sore hari.` },
          { label: 'C', teks: `Meminta kurir menarik kembali dokumen itu dengan berita acara, lalu melapor kepada penghubung dinas beserta kronologi.` },
          { label: 'D', teks: `Mencatat kejadian sebagai insiden internal perusahaan, lalu memberi tahu dinas hanya bila Bu Rahma mengeluh.` },
          { label: 'E', teks: `Meminta kurir menarik kembali dokumen itu dengan berita acara, lalu meminta kurir tersebut menelepon petugas jaga dinas.` },
        ],
        kunci: 'C',
        pembahasan: `Konsep yang digunakan: Pemulihan layanan atas kesalahan yang sudah berdampak kepada pihak ketiga dalam kemitraan.
Kata kunci: salah antar, izin sudah dibuka, kontrak kemitraan, laporan hari yang sama, penghubung dinas.
Opsi C (5 poin) paling tepat karena dokumen yang sudah dibuka perlu segera ditarik dengan berita acara selama kurir masih di sekitar toko, sedangkan laporan beserta kronologi kepada dinas dibuat sekarang sesuai kontrak agar dinas dapat menilai perlunya penerbitan ulang. Kedua hal itu dapat Anda kerjakan sendiri.
Pembahasan opsi lain:
A (3 poin) laporan kepada dinas dibuat pada hari yang sama sesuai kontrak, tetapi dokumen yang sudah dibuka tetap berada di toko ketika kurir harus berangkat setengah jam lagi. Cara menariknya baru ditentukan dinas, sehingga peluang menarik dokumen itu ikut menyempit.
B (2 poin) laporan kepada dinas tetap dibuat pada hari yang sama dan dokumen akan sampai ke pemiliknya. Namun dokumen yang sudah dibuka berpindah lagi lewat orang yang tidak berkepentingan, sehingga perusahaan tidak mengendalikan pengantarannya dan kurir yang berada di lokasi tidak dipakai.
D (1 poin) mencatat sebagai insiden internal menunda laporan hingga ada keluhan, padahal kontrak mengharuskan laporan pada hari yang sama. Dokumen yang sudah dibuka juga tidak ditarik, dan dinas tidak dapat menilai perlunya penerbitan ulang.
E (4 poin) kurir yang menarik dokumen mengetahui kejadiannya, dan telepon kepada petugas jaga dapat dilakukan sebelum ia berangkat. Namun kontrak menunjuk penghubung perusahaan sebagai pelapor kepada penghubung dinas, sehingga laporan kurir kepada petugas jaga tidak melalui saluran yang disepakati dan kronologi dari sisi perusahaan dapat tidak lengkap.
Cara cepat: Pisahkan apa yang dapat Anda lakukan sendiri sekarang dari apa yang menjadi kewajiban kepada pihak lain, lalu urutkan.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tkp-kasus-pp-14 · kasus orisinal data/tkp-kasus (bank TKP generator)
      {
        nomor: 7,
        lesson: 'Pelayanan Publik',
        tipe: 'skala',
        pertanyaan: `Dalam rapat unit, Anda sebagai kepala unit layanan memaparkan rencana mengganti nomor antrean kertas dengan pendaftaran lewat aplikasi mulai bulan depan. Petugas senior yang lama melayani lansia keberatan karena banyak lansia belum memiliki ponsel pintar. Sepertiga pengguna loket berusia di atas enam puluh tahun, tetapi belum ada data berapa yang benar-benar tidak dapat mendaftar, sebab sebagian datang bersama keluarga. Unit hanya punya tiga loket, tidak cukup untuk dua jalur antrean tetap. Langkah Anda yang paling tepat adalah ...`,
        opsi: [
          { label: 'A', teks: `Meminta petugas senior menyiapkan pengguna lansia memakai aplikasi, lalu menerapkan rencana sesuai jadwal bulan depan.` },
          { label: 'B', teks: `Meminta petugas senior memetakan hambatan lansia, lalu menguji aplikasi dalam percobaan berpendampingan.` },
          { label: 'C', teks: `Menghentikan nomor antrean kertas mulai bulan depan, lalu meminta keberatan petugas senior dicatat sebagai masukan.` },
          { label: 'D', teks: `Membatalkan rencana aplikasi untuk tahun ini, lalu meninjau ulang kebutuhan lansia pada rapat tahun depan.` },
          { label: 'E', teks: `Menerapkan aplikasi bagi pengguna yang siap, lalu mempertahankan nomor kertas bagi lansia pada jalur terpisah.` },
        ],
        kunci: 'B',
        pembahasan: `Konsep yang digunakan: Pelayanan inklusif dalam perubahan, yaitu menguji perubahan bersama pihak yang paling terdampak.
Kata kunci: pendaftaran lewat aplikasi, keberatan petugas senior, ponsel pintar, sepertiga pengguna lansia, belum ada data, tiga loket.
Opsi B (5 poin) paling tepat karena keberatan petugas senior didasari pengalaman melayani lansia yang mencakup sepertiga pengguna, sedangkan data berapa yang benar-benar tidak dapat mendaftar belum ada. Pemetaan hambatan dan percobaan berpendampingan menjawab ketidakpastian itu sebelum akses lansia ditutup.
Pembahasan opsi lain:
A (4 poin) persiapan pengguna lansia membantu dan petugas senior dilibatkan. Namun rencana tetap berjalan bulan depan sebelum diketahui berapa lansia yang benar-benar tidak dapat mendaftar, sehingga hambatan mereka belum dipetakan.
C (1 poin) menghentikan nomor kertas menutup akses lansia yang belum memiliki ponsel pintar, padahal mereka sepertiga pengguna loket. Keberatan petugas senior hanya dicatat sebagai masukan dan tidak mengubah rencana.
D (2 poin) membatalkan rencana untuk tahun ini mengabaikan arah layanan digital dan peluang memperbaiki antrean. Lansia tidak dirugikan sekarang, tetapi kebutuhan mereka baru ditinjau setahun kemudian.
E (3 poin) nomor kertas menjaga akses lansia dan aplikasi tetap berjalan bagi pengguna yang siap. Namun unit hanya punya tiga loket sehingga dua jalur tidak dapat dijaga, dan jalur terpisah dibuat sebelum diketahui berapa lansia yang membutuhkannya.
Cara cepat: Perlakukan keberatan sebagai informasi yang perlu diuji, lalu lihat kapasitas unit yang tersedia untuk setiap usulan.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tkp-kasus-pp-10 · kasus orisinal data/tkp-kasus (bank TKP generator)
      {
        nomor: 8,
        lesson: 'Pelayanan Publik',
        tipe: 'skala',
        pertanyaan: `Seorang pemohon izin usaha menerima dua perkiraan waktu: pusat panggilan dinas menyebut tiga hari kerja, sedangkan petugas loket menyebut tujuh hari kerja. Ia menghubungi Anda, anggota tim informasi layanan, karena akan menyerahkan izin itu kepada bank akhir pekan depan. Status berkasnya dalam verifikasi dan dinyatakan lengkap kemarin, sedangkan maklumat pelayanan menetapkan standar lima hari kerja sejak berkas lengkap. Anda dapat melihat status berkas, tetapi tidak dapat mempercepatnya. Sikap Anda adalah ...`,
        opsi: [
          { label: 'A', teks: `Menghubungi petugas loket untuk memastikan lama proses lima hari kerja itu, lalu menyampaikan hasilnya kepada pemohon.` },
          { label: 'B', teks: `Menyampaikan perkiraan tiga hari kerja dari pusat panggilan, lalu menyarankan pemohon menghubungi dinas lagi pekan depan.` },
          { label: 'C', teks: `Meminta maaf atas informasi yang berbeda, lalu menyampaikan bahwa penyelesaian mengacu pada maklumat lima hari kerja.` },
          { label: 'D', teks: `Menyarankan pemohon menemui petugas verifikasi di luar jam layanan, lalu meminta berkas didahulukan.` },
          { label: 'E', teks: `Menyampaikan batas lima hari kerja beserta tanggalnya, lalu menunjukkan kanal untuk memantau statusnya.` },
        ],
        kunci: 'E',
        pembahasan: `Konsep yang digunakan: Keterbukaan dan kepastian waktu layanan saat informasi bertentangan.
Kata kunci: dua perkiraan waktu, maklumat pelayanan, lima hari kerja, berkas lengkap kemarin, status berkas.
Opsi E (5 poin) paling tepat karena standar lima hari kerja sejak berkas dinyatakan lengkap kemarin menghasilkan tanggal yang dapat dipertanggungjawabkan, dan kanal pemantauan memberi pemohon cara memeriksa sendiri sebelum menyerahkan izin kepada bank. Perbedaan informasi ditutup dengan data yang sama.
Pembahasan opsi lain:
A (3 poin) memastikan ke loket sebelum menjawab terasa hati-hati, tetapi maklumat lima hari kerja dan status berkas yang dapat Anda lihat sudah cukup untuk menjawab sekarang. Pemohon menanti jawaban dan berisiko menerima angka tujuh hari yang tidak sesuai maklumat.
B (2 poin) perkiraan tiga hari kerja dari pusat panggilan tidak sesuai maklumat yang menetapkan lima hari kerja sejak berkas lengkap. Pemohon dapat salah merencanakan penyerahan izin kepada bank akhir pekan depan, dan baru diminta menghubungi dinas lagi ketika tenggat itu dekat.
C (4 poin) permintaan maaf dan rujukan pada maklumat lima hari kerja sudah memberi acuan yang benar. Namun pemohon yang akan menyerahkan izin kepada bank akhir pekan depan belum diberi tanggal dan kanal pemantauan, sehingga ia masih harus menghitung dan memeriksa sendiri.
D (1 poin) meminta berkas didahulukan lewat petugas verifikasi memberi keistimewaan di luar antrean yang berlaku dan merugikan pemohon lain. Pertemuan di luar jam layanan juga mengaburkan akuntabilitas proses verifikasi dan tidak mengubah standar lima hari kerja.
Cara cepat: Periksa lebih dulu informasi tertulis dan data yang dapat Anda lihat sendiri sebelum memilih angka mana yang disampaikan.`,
        tingkat: 'sedang',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Jejaring Kerja` },
    soal: [
      // tkp-kasus-jk-22 · kasus orisinal data/tkp-kasus (bank TKP generator)
      {
        nomor: 9,
        lesson: 'Jejaring Kerja',
        tipe: 'skala',
        pertanyaan: `Anda warga yang aktif di karang taruna dan mengenal seorang kepala seksi di dinas pekerjaan umum karena pernah sekelas. Ketua RT meminta Anda menitipkan proposal perbaikan jalan kampung langsung kepada kenalan itu agar didahulukan. Dinas hanya menerima proposal lewat loket dan menelaahnya menurut urutan masuk, dan proposal itu belum ditandatangani lurah. Anda tidak punya wewenang atas telaah proposal. Sikap Anda yang paling tepat adalah ...`,
        opsi: [
          { label: 'A', teks: `Mengantar proposal ke loket dinas bersama ketua RT sambil menanyakan kelengkapan berkas kepada petugas loket.` },
          { label: 'B', teks: `Menjelaskan kepada ketua RT bahwa proposal masuk lewat loket sambil membantu melengkapi tanda tangan lurah.` },
          { label: 'C', teks: `Menyampaikan kepada ketua RT bahwa proposal harus lewat loket sambil menyarankannya bertanya kepada petugas loket.` },
          { label: 'D', teks: `Menanyakan syarat proposal jalan kepada kenalan di dinas sambil mencatat jawabannya untuk ketua RT.` },
          { label: 'E', teks: `Menitipkan proposal langsung kepada kenalan di dinas pekerjaan umum sambil meminta ia mendahulukan proposal kampung.` },
        ],
        kunci: 'B',
        pembahasan: `Konsep yang digunakan: Menolak penggunaan relasi untuk mendahului proposal lain sambil membantu lewat jalur resmi.
Kata kunci: titipan kepada kenalan, kepala seksi, penerimaan lewat loket, urutan masuk, belum ditandatangani lurah.
Opsi B (5 poin) paling tepat karena dinas hanya menerima proposal lewat loket menurut urutan masuk, sehingga menitipkan kepada kenalan tidak sesuai jalur. Melengkapi tanda tangan lurah tanpa menunggu diminta petugas menjawab kebutuhan kampung tanpa mendahului proposal lain.
Pembahasan opsi lain:
A (4 poin) proposal masuk lewat loket sesuai urutan masuk, sehingga tidak ada pengusul lain yang dirugikan. Kelengkapan baru ditanyakan di loket tanpa inisiatif menyiapkannya lebih dulu, sehingga kekurangan tanda tangan lurah baru ketahuan di sana dan ketua RT harus bolak-balik.
C (3 poin) penyampaian itu benar dan tidak memakai kedekatan. Proposal yang belum ditandatangani lurah tidak dibantu dilengkapi, padahal Anda dapat membantu sebelum proposal masuk ke loket.
D (2 poin) syarat proposal diperoleh cepat lewat kedekatan, tetapi dinas hanya menerima proposal lewat loket. Petugas loket tetap menjadi jalur yang berlaku, sehingga cara ini menyelesaikan di luar prosedur walau tidak merugikan pengusul lain.
E (1 poin) dinas menelaah proposal menurut urutan masuk, sehingga meminta kenalan mendahulukan proposal kampung melanggar urutan dan merugikan pengusul lain. Kedekatan teman sekelas menjadi jalur istimewa yang tidak dimiliki warga lain.
Cara cepat: Bedakan menolong lewat jalur yang berlaku dari memakai kedekatan, lalu lihat apa yang masih dapat Anda sumbangkan.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      // tkp-kasus-jk-02 · kasus orisinal data/tkp-kasus (bank TKP generator)
      {
        nomor: 10,
        lesson: 'Jejaring Kerja',
        tipe: 'skala',
        pertanyaan: `Anda pelaksana yang menggabungkan data penerima bantuan dari dua unit dalam satu lembar kerja bersama. Unit pertama menulis nama kecamatan secara lengkap, sedangkan unit kedua memakai kode singkatan, sehingga penjumlahan per kecamatan terpecah menjadi dua baris. Pedoman data dinas menetapkan penulisan nama kecamatan secara lengkap. Kedua unit akan memakai lembar kerja itu bulan depan. Apa keputusan Anda yang paling tepat?`,
        opsi: [
          { label: 'A', teks: `Mengubah kode singkatan menjadi nama lengkap pada baris yang sudah terpecah, lalu menjumlahkan ulang data per kecamatan.` },
          { label: 'B', teks: `Menyeragamkan penulisan kecamatan sesuai pedoman pada data kedua unit, lalu memasang daftar pilihan nama baku di lembar kerja.` },
          { label: 'C', teks: `Meminta kepala kedua unit bertemu untuk memilih format penulisan kecamatan, lalu menggabungkan data sesuai keputusan bersama itu.` },
          { label: 'D', teks: `Menggabungkan data sesuai tulisan masing-masing unit, lalu memberi catatan bahwa jumlah per kecamatan mungkin ganda.` },
          { label: 'E', teks: `Mengubah angka satu kecamatan agar jumlah total sama dengan laporan bulan lalu, lalu menandai data sebagai sudah selesai.` },
        ],
        kunci: 'B',
        pembahasan: `Konsep yang digunakan: Menyelaraskan standar data lintas unit berdasarkan pedoman yang berlaku.
Kata kunci: nama kecamatan lengkap, kode singkatan, penjumlahan terpecah, pedoman data dinas, lembar kerja bersama.
Opsi B (5 poin) paling tepat karena pedoman data dinas sudah menetapkan penulisan lengkap, sehingga penyeragaman pada data kedua unit menyatukan baris kecamatan yang terpecah. Daftar pilihan nama baku mencegah perbedaan penulisan terulang ketika kedua unit memakai lembar kerja bulan depan.
Pembahasan opsi lain:
A (4 poin) perbaikan baris yang terpecah membuat jumlah per kecamatan benar untuk bulan ini. Penulisan pada data kedua unit dan pada lembar kerja tidak diubah, sehingga baris terpecah muncul lagi saat data bulan depan dimasukkan.
C (3 poin) pertemuan kepala unit memberi kesepakatan, tetapi pedoman data dinas sudah menetapkan penulisan lengkap. Penggabungan data tertahan untuk keputusan yang jawabannya sudah ada.
D (2 poin) catatan peringatan memberi tahu pembaca tentang masalah penjumlahan. Akan tetapi baris kecamatan tetap terpecah dan pedoman penulisan tidak dipakai, sehingga pembaca harus memperbaiki hitungan sendiri.
E (1 poin) mengubah angka demi kecocokan total memalsukan data penerima yang sebenarnya. Perbedaan penulisan kecamatan tetap ada dan hasil gabungan menyesatkan siapa pun yang memakainya.
Cara cepat: Bandingkan standar yang sudah ada dengan cara tiap unit bekerja, lalu lihat siapa yang akan memanfaatkan hasilnya kelak.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      // tkp-kasus-jk-04 · kasus orisinal data/tkp-kasus (bank TKP generator)
      {
        nomor: 11,
        lesson: 'Jejaring Kerja',
        tipe: 'skala',
        pertanyaan: `Anda koordinator forum lintas unit di sebuah dinas. Unit survei menargetkan hasil akhir survei pada akhir bulan, sedangkan unit kebijakan membutuhkan data survei pada tanggal 15 untuk menyusun rancangan peraturan. Tim survei menyatakan hasil antara dapat dibuka setelah pengumpulan data selesai pada tanggal 12. Forum ini memfasilitasi dan tidak berwenang memerintah salah satu unit. Kedua kepala unit bersedia hadir pada pertemuan minggu ini. Tindakan Anda yang paling tepat adalah ...`,
        opsi: [
          { label: 'A', teks: `Meminta tim survei membuka hasil antara pada tanggal 12 bagi unit kebijakan, lalu memberi tahu kepala unit kebijakan.` },
          { label: 'B', teks: `Memerintahkan unit survei menyerahkan hasil akhir pada tanggal 15, lalu melaporkan penolakannya kepada pimpinan.` },
          { label: 'C', teks: `Menyusun daftar kebutuhan data kedua unit secara tertulis, lalu mengundang kedua kepala unit pada pertemuan bulanan forum.` },
          { label: 'D', teks: `Mempertemukan kedua kepala unit untuk menyepakati hasil antara dan tanggal serah terima, lalu mencatat penanggung jawab.` },
          { label: 'E', teks: `Menyampaikan keluhan unit kebijakan kepada unit survei lewat pesan singkat, lalu meminta keduanya menyelesaikannya sendiri.` },
        ],
        kunci: 'D',
        pembahasan: `Konsep yang digunakan: Menyelaraskan keluaran antarunit yang saling bergantung melalui fasilitasi, bukan perintah.
Kata kunci: hasil akhir bulan, kebutuhan tanggal 15, hasil antara, pengumpulan data tanggal 12, tidak berwenang memerintah, kedua kepala unit.
Opsi D (5 poin) paling tepat karena kedua target sah, sehingga pertemuan bersama mencari irisan: hasil antara tersedia tanggal 12 dapat menutup kebutuhan tanggal 15 tanpa memaksa unit survei. Tanggal serah terima dan penanggung jawab yang dicatat mencegah janji tidak jelas.
Pembahasan opsi lain:
A (4 poin) hasil antara yang dibuka pada tanggal 12 dapat menutup kebutuhan data unit kebijakan pada tanggal 15, dan kepala unit kebijakan diberi tahu. Namun tanggal serah terima dan penanggung jawab tidak disepakati, sedangkan kepala unit survei tidak diajak bicara.
B (1 poin) forum ini memfasilitasi dan tidak berwenang memerintah salah satu unit, sehingga perintah menyerahkan hasil akhir pada tanggal 15 melampaui perannya. Pelaporan penolakan memperburuk hubungan sebelum kedua kepala unit sempat dipertemukan, padahal hasil antara tersedia tanggal 12.
C (3 poin) daftar kebutuhan membuat pembicaraan nanti lebih terarah dan forum tetap bekerja. Pertemuan bulanan menggeser pembicaraan dari minggu ini, padahal kedua kepala unit bersedia hadir sekarang dan tanggal 15 sudah dekat.
E (2 poin) pesan singkat meneruskan keluhan unit kebijakan, tetapi tidak ada penengah dan tidak ada kesepakatan. Peran forum untuk memfasilitasi kedua unit diserahkan kembali kepada mereka tanpa bantuan.
Cara cepat: Pikirkan kebutuhan sah masing-masing pihak, dan siapa yang tidak berhak memerintah salah satunya.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tkp-kasus-jk-21 · kasus orisinal data/tkp-kasus (bank TKP generator)
      {
        nomor: 12,
        lesson: 'Jejaring Kerja',
        tipe: 'skala',
        pertanyaan: `Anda pegawai baru yang membantu panitia pelatihan internal. Panitia membutuhkan narasumber tentang pengelolaan arsip, dan Anda mengenal seorang pejabat di instansi lain yang menguasainya karena ia kenalan keluarga Anda. Pejabat itu belum mengetahui kebutuhan pelatihan, dan dua calon narasumber lain yang dikenal panitia juga tersedia. Prosedur panitia mengharuskan undangan narasumber dikirim lewat surat resmi dari unit, dan anggaran honor narasumber sudah tersedia. Menetapkan narasumber bukan wewenang Anda. Apa yang paling tepat Anda lakukan?`,
        opsi: [
          { label: 'A', teks: `Mengungkapkan hubungan keluarga Anda dengan pejabat itu kepada panitia, lalu mengusulkan agar unit mengundangnya secara resmi.` },
          { label: 'B', teks: `Meminta unit mengirim surat undangan resmi kepada pejabat itu, lalu memberi tahu panitia bahwa narasumber sudah diundang.` },
          { label: 'C', teks: `Meminta panitia mencari narasumber lain yang tidak Anda kenal secara pribadi, lalu mengirim surat undangan resmi.` },
          { label: 'D', teks: `Mengajak pejabat itu lewat pesan pribadi ke ponselnya, lalu memberi tahu panitia setelah ia menyatakan setuju.` },
          { label: 'E', teks: `Menetapkan pejabat itu sebagai narasumber atas keputusan Anda sendiri, lalu meminta honornya dibayarkan dari dana panitia.` },
        ],
        kunci: 'A',
        pembahasan: `Konsep yang digunakan: Memanfaatkan relasi pribadi secara etis dengan mengungkapkan hubungan kepada pihak yang memutuskan dan mengikuti prosedur.
Kata kunci: kenalan keluarga, pengelolaan arsip, dua calon narasumber lain, surat resmi, bukan wewenang.
Opsi A (5 poin) paling tepat karena pejabat itu kenalan keluarga Anda dan dua calon narasumber lain juga tersedia, sehingga hubungan itu diungkapkan agar panitia menilainya secara terbuka. Usulan agar unit mengundang secara resmi mengikuti prosedur undangan lewat surat resmi dan tidak memberi jalur istimewa.
Pembahasan opsi lain:
B (4 poin) surat undangan resmi dari unit sesuai prosedur panitia dan anggaran honor tersedia. Hubungan keluarga Anda dengan pejabat itu tidak diungkapkan, dan panitia baru mengetahui nama narasumber setelah undangan terkirim, sehingga panitia tidak sempat menimbang dua calon lain.
C (3 poin) mencari narasumber yang tidak dikenal menghindari konflik kepentingan, dan prosedur undangan resmi dijalankan. Pejabat yang menguasai pengelolaan arsip tetap relevan dan dapat dinilai panitia bila hubungan keluarga diungkapkan, sehingga calon yang layak ikut tersingkir.
D (2 poin) pesan pribadi menghubungkan Anda dengan pejabat yang menguasai arsip. Sementara itu, undangan narasumber harus lewat surat resmi dari unit, sehingga kesediaan yang diperoleh di luar prosedur dapat tidak diakui panitia.
E (1 poin) Anda pegawai baru dan tidak berwenang menetapkan narasumber atau membayar honor. Kedekatan keluarga menjadi dasar keputusan, bukan kebutuhan pelatihan dan prosedur undangan resmi dari unit.
Cara cepat: Siapa yang memutuskan, dan apa yang perlu diketahui orang itu tentang kedekatan Anda dengan calon?`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tkp-kasus-jk-24 · kasus orisinal data/tkp-kasus (bank TKP generator)
      {
        nomor: 13,
        lesson: 'Jejaring Kerja',
        tipe: 'skala',
        pertanyaan: `Anda koordinator panitia acara penyuluhan sebuah dinas. Dalam rapat panitia yang sedang berlangsung, sponsor swasta menawarkan dana yang menutup kekurangan anggaran, dengan syarat materi acara menyebut produknya dipilih dinas. Lima dari tujuh anggota panitia setuju menerima karena dana kurang, sedangkan seorang anggota keberatan dan merasa pendapatnya diabaikan. Aturan dinas membolehkan sponsor mencantumkan logo, tetapi melarang pernyataan bahwa produk dipilih dinas. Apa yang sebaiknya Anda lakukan sebagai koordinator?`,
        opsi: [
          { label: 'A', teks: `Menerima dana sponsor hanya untuk satu sesi acara, lalu menyampaikan bahwa pernyataan produk dipilih dinas tidak dapat dimuat.` },
          { label: 'B', teks: `Mengundang perwakilan sponsor ke rapat panitia berikutnya, lalu membahas syarat itu bersama panitia.` },
          { label: 'C', teks: `Mengakhiri pembicaraan dengan sponsor itu dalam rapat panitia, lalu mencari dana dari pihak lain yang lebih mudah diatur.` },
          { label: 'D', teks: `Meminta anggota yang keberatan menjelaskan alasannya, lalu mengajukan penawaran balik berisi logo saja kepada sponsor.` },
          { label: 'E', teks: `Menerima syarat sponsor sesuai suara terbanyak panitia, lalu mencantumkan pernyataan produk dipilih dinas dalam materi.` },
        ],
        kunci: 'D',
        pembahasan: `Konsep yang digunakan: Menjaga independensi dalam kemitraan dan hak anggota minoritas ketika mayoritas ingin menerima syarat sponsor.
Kata kunci: sponsor swasta, produk dipilih dinas, kekurangan anggaran, lima dari tujuh anggota, anggota keberatan, logo sponsor.
Opsi D (5 poin) paling tepat karena anggota yang keberatan didengar sehingga suara minoritas tidak tertutup keputusan lima dari tujuh anggota. Penawaran yang hanya memuat logo sesuai aturan dinas dan masih menutup kebutuhan dana dengan sponsor.
Pembahasan opsi lain:
A (4 poin) dana untuk satu sesi mengurangi kekurangan anggaran tanpa menyalahi aturan tentang pernyataan produk. Kekurangan dana pada sesi lain tetap terbuka dan logo yang dibolehkan aturan dinas tidak dimanfaatkan, sehingga hanya sebagian kebutuhan panitia yang tertutup.
B (3 poin) pembahasan bersama sponsor dan panitia dapat menghasilkan jalan tengah. Rapat berikutnya menunda pembicaraan padahal rapat panitia sedang berlangsung dan aturan dinas sudah menyatakan batas pernyataan produk, sehingga penawaran balik dapat disusun sekarang.
C (2 poin) penolakan menjaga aturan dinas tentang pernyataan produk. Namun sponsor tidak diajak membicarakan logo yang dibolehkan, dan lima anggota panitia yang membutuhkan dana kehilangan peluang tanpa upaya menegosiasikannya.
E (1 poin) aturan dinas melarang pernyataan bahwa produk dipilih dinas, sehingga suara terbanyak tidak dapat membenarkannya. Pendapat anggota yang keberatan diabaikan dan independensi dinas terhadap sponsor terlanggar.
Cara cepat: Suara siapa yang belum didengar, dan apa yang dibolehkan aturan sebelum Anda memutuskan?`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tkp-kasus-jk-19 · kasus orisinal data/tkp-kasus (bank TKP generator)
      {
        nomor: 14,
        lesson: 'Jejaring Kerja',
        tipe: 'skala',
        pertanyaan: `Anda kepala unit analisis yang menerima laporan mingguan dari tim lapangan di bidang lain. Laporan itu terlambat tiga minggu berturut-turut, dan analisis unit Anda ikut tertunda. Setelah bertanya sepintas, Anda tahu satu petugas lapangan menangani dua kecamatan karena rekannya cuti panjang. Petugas di unit Anda ada yang punya waktu luang dan paham data lapangan. Pembagian petugas ditetapkan kepala bidang tim lapangan, dan Anda hanya dapat mengusulkan. Langkah apa yang paling tepat Anda ambil?`,
        opsi: [
          { label: 'A', teks: `Meminta kepala bidang menambah petugas baru bagi tim lapangan, lalu memantau pengiriman laporan mingguan.` },
          { label: 'B', teks: `Mengirim pengingat tenggat laporan kepada petugas lapangan setiap pekan, lalu mencatat keterlambatannya dalam rekap unit.` },
          { label: 'C', teks: `Menyusun analisis sementara dari data yang masuk, lalu menandai bagian yang belum dilengkapi tim lapangan.` },
          { label: 'D', teks: `Menanyakan kendala kepada petugas lapangan itu, lalu mengusulkan kepada kepala bidang bantuan petugas unit Anda.` },
          { label: 'E', teks: `Menyimpulkan petugas lapangan itu kurang disiplin, lalu meminta kepala bidang menggantinya dengan petugas lain.` },
        ],
        kunci: 'D',
        pembahasan: `Konsep yang digunakan: Menangani masalah berulang pada pekerjaan lintas tim dengan menelusuri penyebab dan mengusulkan bantuan sesuai wewenang.
Kata kunci: terlambat tiga minggu, analisis tertunda, dua kecamatan, cuti panjang, waktu luang, kepala bidang.
Opsi D (5 poin) paling tepat karena keterlambatan tiga minggu berulang karena satu petugas menangani dua kecamatan, sehingga menanyakan kendalanya memastikan penyebab. Usulan bantuan petugas unit Anda kepada kepala bidang menyentuh penyebab dan tetap dalam batas Anda yang hanya mengusulkan.
Pembahasan opsi lain:
A (4 poin) penambahan petugas baru menyasar beban dua kecamatan dan pembagian petugas memang ada pada kepala bidang. Di sisi lain, petugas baru perlu waktu belajar dan kendala tim lapangan belum ditanyakan, padahal petugas unit Anda punya waktu luang dan paham data lapangan.
B (2 poin) pengingat tenggat dan pencatatan keterlambatan menjaga jejak di unit Anda. Penyebab keterlambatan, yaitu satu petugas menangani dua kecamatan, tidak disentuh, sehingga laporan tetap terlambat pada minggu berikutnya.
C (3 poin) analisis sementara melindungi hasil unit Anda dari tertundanya laporan tim lapangan. Pekerjaan itu hanya menutup sebagian kebutuhan karena penyebab keterlambatan, yaitu beban dua kecamatan pada satu petugas, tidak ditangani.
E (1 poin) kesimpulan tentang disiplin diambil sebelum penyebab keterlambatan diperiksa, padahal satu petugas menangani dua kecamatan. Penggantian petugas tidak mengurangi beban dua kecamatan dan merugikan petugas yang sudah bekerja.
Cara cepat: Apa yang membuat keterlambatan itu terus berulang dari sudut pihak yang mengerjakan, dan siapa yang dapat memperbaikinya?`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tkp-kasus-jk-11 · kasus orisinal data/tkp-kasus (bank TKP generator)
      {
        nomor: 15,
        lesson: 'Jejaring Kerja',
        tipe: 'skala',
        pertanyaan: `Anda penghubung instansi dengan pemerintah desa yang baru menjadi mitra kegiatan penyuluhan. Kepala desa terbiasa menyepakati kegiatan lewat telepon dan merasa permintaan surat resmi bernada tidak percaya. Kepala desa menyatakan tidak berkeberatan mengikuti cara kerja lain bila alasannya jelas. Prosedur instansi mensyaratkan setiap kesepakatan kegiatan tertulis agar anggarannya dapat dicairkan. Anda dapat mengusulkan cara kerja yang disepakati kedua pihak, dan kegiatan pertama berlangsung bulan depan. Apa langkah Anda yang paling tepat?`,
        opsi: [
          { label: 'A', teks: `Menelepon kepala desa untuk menyepakati kegiatan, lalu mengirim surat singkat sebagai catatan kesepakatannya.` },
          { label: 'B', teks: `Mengirim surat resmi berisi rincian kegiatan kepada kepala desa, lalu menjelaskan bahwa prosedur instansi menuntutnya.` },
          { label: 'C', teks: `Menyepakati kegiatan lewat telepon saja, lalu mengajukan pencairan anggaran dengan catatan lisan.` },
          { label: 'D', teks: `Menerima kesepakatan lewat telepon dari kepala desa, lalu menyusun sendiri catatan tertulis untuk berkas instansi.` },
          { label: 'E', teks: `Mengganti mitra kegiatan dengan desa tetangga yang terbiasa memakai surat, lalu mengajukan perubahan itu kepada atasan.` },
        ],
        kunci: 'A',
        pembahasan: `Konsep yang digunakan: Menata mekanisme kerja sama dengan mitra baru yang menghormati kebiasaannya sekaligus memenuhi prosedur.
Kata kunci: kebiasaan lewat telepon, surat resmi, nada tidak percaya, alasan jelas, kesepakatan tertulis, pencairan anggaran.
Opsi A (5 poin) paling tepat karena percakapan telepon menghormati kebiasaan kepala desa dan menggali kebutuhan kegiatan. Surat singkat setelahnya memenuhi prosedur kesepakatan tertulis, sehingga anggaran dapat dicairkan tanpa surat resmi terasa sebagai tanda tidak percaya.
Pembahasan opsi lain:
B (4 poin) surat resmi memenuhi syarat kesepakatan tertulis agar anggaran dapat dicairkan. Namun kepala desa menerimanya sebagai tanda tidak percaya sebelum sempat berbicara, sehingga kesalahpahaman tentang surat tetap tertinggal.
C (1 poin) prosedur instansi mensyaratkan kesepakatan tertulis, sehingga pencairan anggaran berdasarkan catatan lisan melanggar aturan. Kepala desa pun dapat dirugikan bila kegiatan dipersoalkan kemudian.
D (3 poin) catatan tertulis di berkas instansi memberi dasar pencairan anggaran, dan telepon menghormati kebiasaan kepala desa. Manfaatnya hanya sampai ke instansi karena kepala desa tidak memegang catatan itu, sehingga kesepakatan belum menjadi pegangan kedua pihak.
E (2 poin) desa tetangga mungkin cocok dengan prosedur instansi. Akan tetapi Anda menghindari kepala desa tanpa mencoba menyelaraskan cara kerja, padahal anggaran dan kesepakatan tertulis masih dapat dipenuhi bersama desa itu.
Cara cepat: Cermati kebiasaan mitra dan syarat prosedur, lalu lihat apakah keduanya dapat dipenuhi sekaligus.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tkp-kasus-jk-23 · kasus orisinal data/tkp-kasus (bank TKP generator)
      {
        nomor: 16,
        lesson: 'Jejaring Kerja',
        tipe: 'skala',
        pertanyaan: `Anda anggota tim yang menyusun kajian bersama seorang rekan dari unit lain untuk dilaporkan kepada pimpinan. Menurut catatan pembagian tugas pada rapat awal, Anda menyusun tiga dari empat bagian kajian. Rekan itu dekat dengan kepala bidang dan menyatakan bahwa namanya akan ditulis sebagai penyusun utama. Urutan nama penyusun ditetapkan kepala bidang, dan Anda hanya dapat mengusulkan. Laporan akan dikirim pekan depan. Tindakan Anda yang paling tepat adalah ...`,
        opsi: [
          { label: 'A', teks: `Mengusulkan sesuai catatan kepada kepala bidang tanpa memberi tahu rekan itu, lalu melanjutkan penyusunan kajian.` },
          { label: 'B', teks: `Menerima urutan nama rekan itu, lalu meminta kepala bidang mencantumkan bagian yang Anda susun sendiri.` },
          { label: 'C', teks: `Menunjukkan bukti kontribusi kepada rekan itu, lalu mengusulkan urutan nama kepada kepala bidang.` },
          { label: 'D', teks: `Memendam kekecewaan itu agar hubungan kerja tetap baik, lalu menyerahkan bagian Anda sebagai bahan laporan.` },
          { label: 'E', teks: `Menulis nama Anda sebagai penyusun utama pada naskah kajian, lalu mengirim naskah itu kepada pimpinan.` },
        ],
        kunci: 'C',
        pembahasan: `Konsep yang digunakan: Menjaga pengakuan kontribusi secara terbuka dan adil dengan menghormati pihak yang berwenang menetapkan.
Kata kunci: catatan pembagian tugas, tiga dari empat bagian, penyusun utama, dekat dengan kepala bidang, urutan nama penyusun.
Opsi C (5 poin) paling tepat karena catatan pembagian tugas menjadi bukti yang terbuka bagi rekan, sehingga perbedaan kontribusi dibicarakan langsung lebih dahulu. Karena urutan nama ditetapkan kepala bidang, usulan kepadanya menjaga pengakuan tanpa Anda mengambil keputusan sendiri.
Pembahasan opsi lain:
A (4 poin) usulan sesuai catatan pembagian tugas menjaga pengakuan kontribusi lewat pihak yang menetapkannya. Rekan itu tidak diajak membicarakan catatan lebih dahulu, sehingga ia mengetahui usulan dari kepala bidang dan hubungan kerja menjadi renggang.
B (3 poin) pencantuman bagian yang Anda susun memberi sedikit pengakuan atas kontribusi. Urutan nama yang menempatkan rekan sebagai penyusun utama tidak dipersoalkan, padahal catatan pembagian tugas menunjukkan tiga dari empat bagian berasal dari Anda.
D (2 poin) menjaga hubungan kerja memang penting. Namun kontribusi tiga dari empat bagian kajian tidak diakui dan urutan nama yang keliru dibiarkan sampai laporan dikirim.
E (1 poin) mengubah urutan nama padahal penetapannya ada pada kepala bidang mengambil keputusan yang bukan hak Anda. Perebutan pengakuan berubah menjadi klaim sendiri, dan hubungan dengan rekan serta kepala bidang rusak.
Cara cepat: Rekam kerja apa yang dapat dilihat bersama, dan siapa yang berhak memutuskan pengakuannya?`,
        tingkat: 'sedang',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Sosial Budaya` },
    soal: [
      // tkp-kasus-sb-06 · kasus orisinal data/tkp-kasus (bank TKP generator)
      {
        nomor: 17,
        lesson: 'Sosial Budaya',
        tipe: 'skala',
        pertanyaan: `Anda warga yang baru pindah ke sebuah kampung. Pada pertemuan warga, Anda menyapa seorang sesepuh dengan sebutan akrab yang biasa Anda pakai kepada kenalan sebaya, lalu beberapa warga terdiam. Seorang tetangga kemudian memberi tahu Anda dengan ramah bahwa di kampung itu sesepuh biasa disapa dengan sebutan yang lebih hormat. Sesepuh tersebut masih berada di balai pertemuan dan tampak tidak marah. Apa tindakan Anda yang paling tepat?`,
        opsi: [
          { label: 'A', teks: `Meminta maaf kepada sesepuh di balai sebelum pertemuan bubar, lalu menanyakan sebutan yang pantas untuk menyapa.` },
          { label: 'B', teks: `Meminta tetangga menyampaikan maaf kepada sesepuh itu hari ini, lalu memakai sebutan yang hormat mulai pertemuan berikutnya.` },
          { label: 'C', teks: `Memakai sebutan yang hormat mulai sekarang, lalu menyampaikan maaf kepada sesepuh bila bertemu lagi di jalan.` },
          { label: 'D', teks: `Meninggalkan balai pertemuan lebih awal, lalu menghindari sesepuh itu pada setiap pertemuan berikutnya.` },
          { label: 'E', teks: `Menanyakan kepada warga di balai mengapa tidak ada yang mengingatkan, lalu menyebut kebiasaan kampung terlalu kaku.` },
        ],
        kunci: 'A',
        pembahasan: `Konsep yang digunakan: Adaptasi dalam masyarakat majemuk, yaitu mengakui dan memperbaiki kesalahan tata krama kecil secara langsung kepada pihak yang bersangkutan.
Kata kunci: sesepuh, sebutan akrab, warga terdiam, sebutan yang lebih hormat, balai pertemuan.
Opsi A (5 poin) paling tepat karena sesepuh masih berada di balai, sehingga permintaan maaf dan pertanyaan tentang sebutan yang pantas dapat disampaikan langsung. Kesalahan kecil itu diperbaiki di hadapan orang yang disapa, bukan melalui orang lain.
Pembahasan opsi lain:
B (4 poin) permohonan maaf melalui tetangga sampai kepada sesepuh hari ini, dan Anda memakai sebutan yang benar sesudahnya. Namun sesepuh masih berada di balai, sehingga maaf yang dapat disampaikan sendiri dititipkan kepada orang lain.
C (3 poin) memakai sebutan yang hormat sudah memperbaiki kebiasaan Anda, dan maaf akan disampaikan. Namun sesepuh masih berada di balai dan dapat ditemui sekarang, sedangkan maaf digantungkan pada pertemuan kebetulan sehingga bisa tidak pernah terucap.
D (2 poin) menghindar membuat kesalahan sapaan tidak pernah diluruskan, dan sesepuh dapat mengira Anda tidak peduli. Tetangga sudah memberi tahu sebutan yang biasa dipakai warga, tetapi informasi itu tidak dimanfaatkan.
E (1 poin) menyalahkan warga atas kesalahan sapaan Anda dan menyebut kebiasaan kampung kaku menyudutkan mereka di depan sesepuh. Tetangga yang memberi tahu dengan ramah justru diabaikan, dan hubungan Anda dengan warga memburuk.
Cara cepat: Siapa yang berhak menerima perbaikan, dan apakah ia masih dapat dijumpai sekarang?`,
        tingkat: 'mudah',
        status: 'draft',
      },
      // tkp-kasus-sb-10 · kasus orisinal data/tkp-kasus (bank TKP generator)
      {
        nomor: 18,
        lesson: 'Sosial Budaya',
        tipe: 'skala',
        pertanyaan: `Anda pegawai baru yang akan ditempatkan di kantor layanan pada wilayah dengan bahasa dan adat yang belum Anda kenal. Sebelum berangkat, Anda mengikuti pelatihan orientasi dua hari. Panitia menyediakan sesi tanya jawab dengan seorang tokoh masyarakat dari wilayah itu dan modul tertulis tentang ungkapan dasar bahasa setempat. Seorang peserta lain pernah bertugas di wilayah itu. Waktu belajar terbatas, dan modul itu tidak membahas kebiasaan sehari-hari warga. Apa langkah Anda yang paling tepat?`,
        opsi: [
          { label: 'A', teks: `Mempelajari modul ungkapan dasar sampai hafal, lalu mencoba memakainya saat bertemu warga di wilayah penugasan.` },
          { label: 'B', teks: `Menanyakan kebiasaan warga kepada peserta yang pernah bertugas di wilayah itu, lalu menambahkannya pada catatan modul.` },
          { label: 'C', teks: `Melewatkan sesi tanya jawab karena akan belajar langsung di lapangan, lalu menyelesaikan tugas pelatihan lainnya.` },
          { label: 'D', teks: `Menyiapkan pertanyaan seputar kebiasaan warga sehari-hari, lalu menanyakannya kepada tokoh masyarakat pada sesi itu.` },
          { label: 'E', teks: `Menyimpulkan kebiasaan warga wilayah itu dari cerita yang pernah didengar, lalu menyusun cara bekerja berdasarkan kesimpulan itu.` },
        ],
        kunci: 'D',
        pembahasan: `Konsep yang digunakan: Adaptasi dalam masyarakat majemuk, yaitu belajar tentang kebiasaan setempat dari sumber yang tepat sebelum bertugas.
Kata kunci: adat belum dikenal, sesi tanya jawab, tokoh masyarakat, modul ungkapan dasar, kebiasaan sehari-hari, waktu terbatas.
Opsi D (5 poin) paling tepat karena modul hanya memuat ungkapan dasar, sehingga pertanyaan tentang kebiasaan sehari-hari warga mengisi bagian yang belum dibahas. Tokoh masyarakat tersedia pada sesi itu, dan waktu belajar yang terbatas terpakai pada hal yang paling dibutuhkan.
Pembahasan opsi lain:
A (3 poin) ungkapan dasar bermanfaat untuk menyapa warga, dan mencobanya di lapangan melatih keterampilan itu. Namun modul tidak membahas kebiasaan sehari-hari warga, sehingga kebutuhan memahami tata cara belum dijawab.
B (4 poin) peserta yang pernah bertugas memberi gambaran nyata kebiasaan warga, dan hasilnya menambah catatan modul. Namun informasinya berasal dari pengalaman satu orang, sedangkan tokoh masyarakat dari wilayah itu tersedia pada sesi tanya jawab, sehingga langkahnya kurang langsung.
C (2 poin) melewatkan sesi berarti melepas kesempatan bertanya kepada tokoh masyarakat sebelum bertugas. Belajar di lapangan dengan bekal seadanya membuat kesalahan tata cara lebih mungkin terjadi, sedangkan modul tidak membahas kebiasaan sehari-hari warga.
E (1 poin) menyimpulkan kebiasaan dari cerita yang pernah didengar menganggap warga wilayah itu seragam dan dapat menimbulkan salah paham. Tokoh masyarakat yang dapat ditanya langsung dan modul tertulis tidak dimanfaatkan.
Cara cepat: Bagian mana dari kebutuhan Anda yang belum ditutup bahan yang ada, dan siapa yang paling tepat melengkapinya?`,
        tingkat: 'mudah',
        status: 'draft',
      },
      // tkp-kasus-sb-08 · kasus orisinal data/tkp-kasus (bank TKP generator)
      {
        nomor: 19,
        lesson: 'Sosial Budaya',
        tipe: 'skala',
        pertanyaan: `Anda staf dinas kebudayaan yang menjadi penghubung dengan sebuah sanggar kesenian tradisional. Pengurus sanggar ingin mengiringi pertunjukan dengan alat musik modern agar menarik penonton muda, sedangkan sebagian penabuh muda menolak karena khawatir irama khas pertunjukan itu hilang. Keduanya bersedia bertemu bila diundang, dan pertunjukan berikutnya baru berlangsung dua bulan lagi. Anda hanya berwenang mengusulkan, bukan memutuskan format pertunjukan. Langkah Anda yang paling tepat adalah ...`,
        opsi: [
          { label: 'A', teks: `Membiarkan penabuh muda dan pengurus menyelesaikan perbedaannya sendiri, lalu menawarkan bantuan dinas bila diminta.` },
          { label: 'B', teks: `Menetapkan format pertunjukan gabungan atas nama dinas, lalu meminta sanggar segera melaksanakannya.` },
          { label: 'C', teks: `Menemui salah seorang penabuh muda untuk menanyakan keberatannya, lalu menyampaikannya kepada pengurus secara terpisah.` },
          { label: 'D', teks: `Mengundang penabuh muda mendengarkan contoh rekaman iringan modern, lalu bertemu mereka untuk mencatat tanggapannya.` },
          { label: 'E', teks: `Mempertemukan pengurus dan penabuh muda dalam satu pertemuan, lalu mencatat unsur yang disepakati tetap dipertahankan.` },
        ],
        kunci: 'E',
        pembahasan: `Konsep yang digunakan: Pelestarian dan perubahan budaya melalui dialog, yaitu mempertemukan pihak yang berbeda pandangan dan mencatat unsur yang perlu dijaga.
Kata kunci: sanggar kesenian tradisional, alat musik modern, penabuh muda, irama khas, bersedia bertemu, hanya berwenang mengusulkan.
Opsi E (5 poin) paling tepat karena pertemuan langsung memberi pengurus dan penabuh muda kesempatan menjelaskan alasan masing-masing, dan keduanya bersedia hadir. Catatan unsur yang dipertahankan, seperti irama khas, menjadi dasar usulan yang dapat Anda teruskan tanpa memutuskan format sendiri.
Pembahasan opsi lain:
A (2 poin) menawarkan bantuan hanya bila diminta membiarkan perbedaan antara penabuh muda dan pengurus sanggar membesar, padahal keduanya bersedia bertemu bila diundang. Penonton muda yang menjadi tujuan pengurus juga tidak bertambah.
B (1 poin) Anda hanya berwenang mengusulkan, sehingga menetapkan format atas nama dinas melampaui peran dan menekan sanggar. Keberatan penabuh muda tentang irama khas tidak didengar.
C (3 poin) seorang penabuh muda dapat menjelaskan keberatan tentang irama khas, dan keberatannya diteruskan kepada pengurus. Namun penabuh muda lain dan pengurus belum bertemu langsung padahal keduanya bersedia bertemu bila diundang.
D (4 poin) rekaman memberi penabuh muda gambaran nyata dan pertemuan mencatat tanggapan mereka. Namun pengurus sanggar belum berkesempatan menjelaskan alasan rencananya langsung kepada penabuh muda, sehingga hanya satu pihak yang didengar dan bergerak.
Cara cepat: Apakah pihak yang berbeda pandangan sudah saling mendengar alasan masing-masing?`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tkp-kasus-sb-05 · kasus orisinal data/tkp-kasus (bank TKP generator)
      {
        nomor: 20,
        lesson: 'Sosial Budaya',
        tipe: 'skala',
        pertanyaan: `Anda petugas desa yang mengatur pemakaian balai warga. Pada Kamis malam pukul 19.00, kelompok latihan tari sudah tercatat memakai aula sejak dua minggu lalu. Ketua kelompok pengajian anak datang ke loket dan meminta aula pada jam yang sama karena anggotanya baru pulang bekerja pada waktu itu. Pengajian beranggotakan sekitar dua belas orang, sedangkan ruang pertemuan kecil di balai itu kosong dan cukup untuk jumlah tersebut. Apa yang sebaiknya Anda lakukan?`,
        opsi: [
          { label: 'A', teks: `Mengajukan pembagian jam aula kepada pengurus balai, lalu mengabarkan hasilnya kepada ketua kelompok tari dan pengajian.` },
          { label: 'B', teks: `Memberikan aula kepada kelompok pengajian karena ketuanya tetangga Anda, lalu meminta kelompok tari berlatih di ruang pertemuan kecil.` },
          { label: 'C', teks: `Menyarankan kelompok pengajian mencari tempat lain di luar balai, lalu mencatat permintaan mereka untuk jadwal bulan depan.` },
          { label: 'D', teks: `Mencocokkan catatan jam pemakaian aula, lalu menawarkan ruang pertemuan kecil kepada pengajian sebelum pukul 19.00.` },
          { label: 'E', teks: `Menawarkan ruang pertemuan kecil kepada pengajian malam itu, lalu memberi tahu kelompok tari setelah kegiatan selesai.` },
        ],
        kunci: 'D',
        pembahasan: `Konsep yang digunakan: Penyelesaian benturan penggunaan fasilitas bersama secara adil, yaitu menghormati hak yang tercatat sambil mencari jalan bagi kebutuhan pihak lain.
Kata kunci: aula sudah tercatat, kelompok latihan tari, pengajian anak, jam yang sama, ruang pertemuan kecil, dua belas orang.
Opsi D (5 poin) paling tepat karena catatan menunjukkan kelompok tari lebih dahulu memakai aula sehingga haknya terjaga, sedangkan ruang pertemuan kecil yang kosong dan cukup menjawab kebutuhan pengajian pada jam yang sama. Kedua kelompok terlayani tanpa mengubah jadwal siapa pun.
Pembahasan opsi lain:
A (3 poin) pengajuan kepada pengurus balai menjaga keadilan dan hasilnya akan disampaikan kepada kedua kelompok. Namun ruang pertemuan kecil kosong dan cukup untuk pengajian, sehingga kepastian untuk malam itu tertunda sampai pengurus menjawab.
B (1 poin) mendahulukan pengajian karena kedekatan pribadi membatalkan pemakaian aula yang sudah tercatat bagi kelompok tari sejak dua minggu lalu. Menyuruh kelompok tari pindah ke ruang pertemuan kecil mengorbankan hak mereka yang mencatat lebih dahulu, dan kepercayaan warga pada pengelolaan balai rusak.
C (2 poin) menyuruh pengajian mencari tempat lain memindahkan beban kepada ketuanya, padahal ruang pertemuan kecil di balai kosong dan cukup. Catatan untuk bulan depan tidak menjawab kebutuhan kelompok yang baru pulang bekerja pada malam itu.
E (4 poin) ruang pertemuan kecil menjawab kebutuhan pengajian dan aula tetap tersedia bagi kelompok tari. Namun kelompok tari baru diberi tahu sesudah kegiatan selesai dan catatan pemakaian tidak dicocokkan lebih dahulu, sehingga pihak yang tercatat lebih dahulu terlewat dari keputusan yang menyangkut haknya.
Cara cepat: Hak siapa yang sudah lebih dahulu berlaku, dan siapa yang perlu mengetahui keputusan yang diambil?`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tkp-kasus-sb-19 · kasus orisinal data/tkp-kasus (bank TKP generator)
      {
        nomor: 21,
        lesson: 'Sosial Budaya',
        tipe: 'skala',
        pertanyaan: `Anda kepala seksi pemberdayaan masyarakat di kecamatan dan memimpin musyawarah perencanaan desa. Musyawarah biasanya dimulai pukul 20.00 di balai desa, dan sebagian besar yang hadir laki-laki. Sejumlah perempuan menyampaikan bahwa mereka sulit hadir malam hari karena mengurus anak, tetapi dapat hadir pukul 16.00. Laki-laki pekerja ladang juga dapat hadir pada jam itu. Balai desa memiliki ruang yang dapat dipakai bermain anak. Keputusan apa yang paling tepat Anda ambil?`,
        opsi: [
          { label: 'A', teks: `Mempertahankan musyawarah pada malam hari, lalu mengadakan sesi siang khusus bagi perempuan untuk menampung usul mereka.` },
          { label: 'B', teks: `Menyediakan ruang bermain anak di balai pada musyawarah malam, lalu membacakan usul tertulis dari kotak usul.` },
          { label: 'C', teks: `Memindahkan musyawarah ke pukul 16.00, lalu menyediakan ruang bermain anak di balai selama musyawarah berlangsung.` },
          { label: 'D', teks: `Meminta kepala desa mengajak perempuan hadir malam hari, lalu menilai kehadiran pada musyawarah berikutnya.` },
          { label: 'E', teks: `Menyimpulkan perempuan kurang tertarik pada urusan desa, lalu menyusun usul program dari peserta yang hadir saja.` },
        ],
        kunci: 'C',
        pembahasan: `Konsep yang digunakan: Partisipasi setara dan perlindungan kelompok yang tersisih akibat mekanisme rapat, dengan menilai beberapa cara yang sama-sama membuka ruang.
Kata kunci: musyawarah pukul 20.00, perempuan mengurus anak, hadir pukul 16.00, pekerja ladang, ruang bermain anak.
Opsi C (5 poin) paling tepat karena pukul 16.00 dapat dihadiri perempuan maupun laki-laki pekerja ladang, dan ruang bermain anak mengurangi hambatan mengurus anak. Perempuan ikut berbicara dan memutuskan dalam musyawarah yang sama tanpa membuat forum terpisah.
Pembahasan opsi lain:
A (4 poin) sesi siang memberi perempuan ruang menyampaikan usul dan dukungan terhadap kebutuhan mereka nyata. Namun usul itu dibicarakan terpisah dari musyawarah malam yang memutuskan, sehingga mereka tetap tidak ikut menentukan hasil perencanaan desa.
B (3 poin) ruang bermain anak membantu sebagian perempuan hadir malam hari, dan kotak usul menampung usul yang tidak dapat disampaikan langsung. Namun pukul 20.00 tetap menyulitkan mereka mengurus anak, sedangkan pukul 16.00 yang memungkinkan mereka hadir tidak dimanfaatkan.
D (2 poin) ajakan kepada perempuan tidak mengubah penyebab mereka tidak hadir, yaitu mengurus anak pada pukul 20.00. Sebagai pemimpin musyawarah Anda dapat menetapkan waktunya, tetapi hal itu diserahkan kepada kepala desa dan hasilnya baru dinilai pada musyawarah berikutnya.
E (1 poin) menyimpulkan perempuan kurang tertarik memperlakukan mereka sebagai kelompok seragam padahal mereka menyampaikan hambatan nyata. Usul program disusun dari peserta yang hadir, sehingga kebutuhan perempuan tidak masuk perencanaan desa.
Cara cepat: Apakah cara yang dipakai membuat pihak yang terhambat ikut memutuskan, atau hanya didengar?`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tkp-kasus-sb-14 · kasus orisinal data/tkp-kasus (bank TKP generator)
      {
        nomor: 22,
        lesson: 'Sosial Budaya',
        tipe: 'skala',
        pertanyaan: `Anda staf dinas yang menjadi penghubung antara tim survei dan sebuah desa adat. Tim dijadwalkan mengambil data di kawasan hutan desa pada Senin, padahal menurut pemangku adat kawasan itu tertutup bagi orang luar sampai Rabu selama masa larangan adat. Pemangku adat bersedia mengantar tim ke sisi desa yang tidak dilarang. Laporan akhir bulan harus memuat data hutan dan sisi desa, dan ketua tim ingin jadwal tidak berubah. Anda hanya berwenang mengusulkan kepada ketua tim. Langkah Anda yang paling tepat adalah ...`,
        opsi: [
          { label: 'A', teks: `Mengusulkan survei diundur sampai masa larangan berakhir, lalu menyampaikan alasannya kepada ketua tim survei.` },
          { label: 'B', teks: `Mengusulkan tim memakai Senin sampai Rabu untuk sisi desa, lalu meminta ketua tim menghubungi pemangku adat soal hutan.` },
          { label: 'C', teks: `Memastikan sisi desa yang boleh dimasuki kepada pemangku adat, lalu mengusulkan survei bertahap kepada ketua tim.` },
          { label: 'D', teks: `Meminta pemangku adat membuka kawasan hutan pada Senin, lalu menjanjikan tim akan menjaga batas yang ditunjuk.` },
          { label: 'E', teks: `Mengikuti tim memasuki kawasan hutan pada Senin sesuai jadwal, lalu mencatat larangan adat dalam laporan survei.` },
        ],
        kunci: 'C',
        pembahasan: `Konsep yang digunakan: Norma adat sebagai pembatas kegiatan dinas dan pencarian jalan yang menjaga tujuan kedua pihak.
Kata kunci: desa adat, masa larangan adat, tertutup sampai Rabu, pemangku adat, sisi desa, laporan akhir bulan.
Opsi C (5 poin) paling tepat karena pemangku adat bersedia mengantar tim ke sisi desa yang tidak dilarang, sehingga batas yang boleh dimasuki dipastikan dari sumbernya. Usulan survei bertahap, sisi desa pada Senin dan hutan setelah Rabu, memenuhi laporan akhir bulan yang memuat kedua data dan menghormati larangan adat.
Pembahasan opsi lain:
A (3 poin) mengundur survei menghormati larangan adat dan alasannya disampaikan kepada ketua tim. Namun pemangku adat bersedia mengantar tim ke sisi desa yang tidak dilarang, sehingga pengambilan data yang dapat dikerjakan pada Senin ikut tertunda.
B (4 poin) senin sampai Rabu dipakai untuk sisi desa sehingga larangan adat dihormati, dan ketua tim menghubungi pemangku adat soal hutan. Namun jadwal hutan belum diusulkan dan Anda sendiri belum memastikannya kepada pemangku adat, sehingga laporan akhir bulan yang memuat kedua data bergantung pada tindak lanjut ketua tim.
D (2 poin) meminta pemangku adat membuka kawasan pada masa larangan menuntut mereka mengubah ketentuan adat demi tenggat laporan tim. Janji menjaga batas tidak menggantikan penghormatan terhadap larangan yang berlaku bagi orang luar.
E (1 poin) memasuki kawasan yang tertutup pada masa larangan mengabaikan ketentuan adat yang sudah disampaikan pemangku adat. Mencatat larangan dalam laporan tidak memperbaiki pelanggaran yang sudah terjadi dan merusak kepercayaan desa.
Cara cepat: Bagian pekerjaan mana yang tidak dapat berjalan sekarang, dan bagian mana yang dapat?`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tkp-kasus-sb-16 · kasus orisinal data/tkp-kasus (bank TKP generator)
      {
        nomor: 23,
        lesson: 'Sosial Budaya',
        tipe: 'skala',
        pertanyaan: `Anda pelaksana di kantor desa wisata yang menyusun brosur bagi pengunjung. Setelah separuh dari seribu brosur dibagikan, seorang warga menyampaikan bahwa brosur menyebut upacara adat desa sebagai hiburan yang boleh difoto kapan saja, padahal pemangku adat meminta pengunjung tidak memotret pada bagian tertentu upacara. Sisa brosur masih ada di kantor. Pemangku adat bersedia memeriksa naskah. Tindakan apa yang paling tepat Anda ambil?`,
        opsi: [
          { label: 'A', teks: `Menarik sisa brosur dari meja pengunjung, lalu mencetak ulang dengan kalimat yang lebih netral sebelum dibagikan lagi.` },
          { label: 'B', teks: `Mencoret kalimat yang keliru pada sisa brosur dengan pulpen, lalu meminta naskah baru diperiksa pemangku adat bulan depan.` },
          { label: 'C', teks: `Memasang papan larangan memotret di lokasi upacara, lalu tetap membagikan sisa brosur lama kepada pengunjung.` },
          { label: 'D', teks: `Meminta pemangku adat memeriksa naskah koreksi, lalu menukar brosur lama dengan naskah yang sudah diperiksa.` },
          { label: 'E', teks: `Tetap membagikan sisa brosur sesuai naskah awal, lalu mencatat keberatan warga sebagai masukan untuk cetakan tahun depan.` },
        ],
        kunci: 'D',
        pembahasan: `Konsep yang digunakan: Pemulihan atas kesalahan yang menyinggung makna budaya, yaitu memperbaiki naskah bersama pihak yang memahami maknanya dan menjangkau penerima yang sudah terdampak.
Kata kunci: separuh brosur dibagikan, boleh difoto kapan saja, tidak memotret bagian tertentu, sisa brosur, pemangku adat.
Opsi D (5 poin) paling tepat karena pemangku adat memeriksa naskah koreksi sehingga penyebutan upacara sesuai dengan maknanya. Brosur lama, baik sisa di kantor maupun yang sudah dipegang pengunjung, ditukar dengan naskah yang sudah diperiksa sehingga keterangan tentang memotret dibetulkan.
Pembahasan opsi lain:
A (4 poin) menarik sisa brosur menghentikan penyebaran keterangan keliru, dan cetak ulang dengan kalimat netral memperbaiki naskah sebelum dibagikan lagi. Namun naskah belum diperiksa pemangku adat dan pengunjung yang sudah menerima brosur lama belum dihubungi, sehingga koreksinya belum menjangkau mereka.
B (3 poin) mencoret kalimat pada sisa brosur menghentikan kesalahan yang paling nyata, dan naskah baru akan diperiksa pemangku adat. Namun pemangku adat bersedia memeriksa naskah sekarang, sehingga perbaikan yang layak menunggu satu bulan.
C (2 poin) papan larangan mengurangi pelanggaran di lokasi, tetapi sisa brosur lama tetap menyebut upacara sebagai hiburan yang boleh difoto. Penyebab kesalahan pada naskah brosur tidak disentuh sama sekali.
E (1 poin) membagikan sisa brosur yang diketahui keliru mengabaikan permintaan pemangku adat agar pengunjung tidak memotret pada bagian tertentu. Keberatan warga hanya dicatat untuk tahun depan, sehingga pengunjung terus menerima keterangan yang menyesatkan.
Cara cepat: Siapa yang memahami makna yang disinggung, dan siapa yang sudah memegang keterangan keliru?`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tkp-kasus-sb-20 · kasus orisinal data/tkp-kasus (bank TKP generator)
      {
        nomor: 24,
        lesson: 'Sosial Budaya',
        tipe: 'skala',
        pertanyaan: `Anda warga yang ikut dalam panitia pertunjukan tradisi tahunan kampung. Banyak perantau ingin menyaksikan acara itu, dan sebagian pemuda panitia mengusulkan siaran langsung di media sosial. Para sesepuh keberatan karena hanya bagian pertunjukan yang boleh disaksikan orang di luar warga, tetapi mereka bersedia menunjukkan bagian yang boleh disiarkan. Keputusan akhir ada pada panitia, dan Anda hanya dapat mengusulkan. Usul apa yang paling tepat Anda sampaikan?`,
        opsi: [
          { label: 'A', teks: `Mengusulkan unggahan rekaman pertunjukan setelah acara selesai, lalu meminta sesepuh menyetujui hasil akhirnya.` },
          { label: 'B', teks: `Menanyakan kepada pemuda panitia bagian yang layak disiarkan, lalu mengusulkan siaran langsung sesuai pendapat mereka.` },
          { label: 'C', teks: `Mengusulkan acara disiarkan dari awal sampai akhir agar perantau tidak ketinggalan, lalu meminta sesepuh menyesuaikan diri.` },
          { label: 'D', teks: `Menyiarkan acara secara langsung dari ponsel Anda, lalu menjelaskan alasannya kepada sesepuh setelah acara selesai.` },
          { label: 'E', teks: `Menanyakan kepada sesepuh bagian yang boleh disiarkan, lalu mengusulkan siaran langsung pada bagian itu.` },
        ],
        kunci: 'E',
        pembahasan: `Konsep yang digunakan: Pelestarian dan perubahan bentuk dengan menilai beberapa cara yang sama-sama berusaha mengakomodasi dua kepentingan.
Kata kunci: perantau, siaran langsung, sesepuh keberatan, bagian pertunjukan, boleh disiarkan.
Opsi E (5 poin) paling tepat karena sesepuh bersedia menunjukkan bagian yang boleh disiarkan, sehingga batas bagian pertunjukan yang boleh disaksikan orang luar dihormati. Siaran langsung pada bagian itu menjawab keinginan perantau untuk menonton saat acara berlangsung.
Pembahasan opsi lain:
A (4 poin) rekaman yang disetujui sesepuh menghormati batas bagian yang boleh disaksikan, dan perantau tetap dapat menonton. Namun perantau tidak menyaksikan pertunjukan saat berlangsung, sedangkan sesepuh bersedia menunjukkan bagian yang boleh disiarkan langsung.
B (3 poin) pemuda panitia memahami kebutuhan siaran dan perantau, dan usulan disusun dari pendapat mereka. Namun batas bagian yang boleh disaksikan orang luar ditentukan sesepuh, yang belum ditanya, sehingga siaran dapat melewati batas itu.
C (2 poin) siaran dari awal sampai akhir menjawab keinginan perantau, tetapi meminta sesepuh menyesuaikan diri menuntut mereka melepas batas yang mereka jaga. Bagian yang boleh disiarkan menurut sesepuh tidak dibahas sebelum perubahan diminta.
D (1 poin) keputusan akhir ada pada panitia dan Anda hanya dapat mengusulkan, sehingga menyiarkan sendiri melampaui peran. Penjelasan setelah acara tidak dapat menarik kembali bagian yang sudah disaksikan orang di luar warga.
Cara cepat: Siapa yang menentukan batas, dan apakah keinginan pihak lain tetap dapat terjawab dalam batas itu?`,
        tingkat: 'sedang',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Teknologi Informasi dan Komunikasi` },
    soal: [
      // tkp-kasus-tik-07 · kasus orisinal data/tkp-kasus (bank TKP generator)
      {
        nomor: 25,
        lesson: 'Teknologi Informasi dan Komunikasi',
        tipe: 'skala',
        pertanyaan: `Anda warga yang memakai aplikasi layanan kependudukan di ponsel. Sebuah pesan singkat dari nomor tak dikenal mengaku dari layanan kependudukan dan menyatakan akun Anda akan ditutup hari ini, kecuali Anda memasukkan kode verifikasi melalui tautan di pesan itu. Pengumuman di aplikasi resmi menyebutkan bahwa kode verifikasi hanya dimasukkan di dalam aplikasi, yang juga menyediakan kanal pengaduan. Anda belum membuka tautan itu, dan status akun dapat Anda lihat langsung di aplikasi. Bagaimana sikap Anda terhadap pesan itu?`,
        opsi: [
          { label: 'A', teks: `Meneruskan pesan itu ke grup warga sekitar, lalu meminta tetangga berhati-hati terhadap tautannya.` },
          { label: 'B', teks: `Membuka tautan itu di ponsel Anda untuk memastikan halamannya, lalu memasukkan kode bila tampak resmi.` },
          { label: 'C', teks: `Menghapus pesan itu dari ponsel Anda, lalu memblokir nomor pengirimnya lewat pengaturan pesan di ponsel.` },
          { label: 'D', teks: `Memeriksa status akun langsung di aplikasi resmi, lalu melaporkan penipuan itu kepada pengelola layanan resmi.` },
          { label: 'E', teks: `Menyimpan tangkapan layar pesan itu sebagai bukti kiriman, lalu memeriksa status akun langsung di aplikasi resmi.` },
        ],
        kunci: 'D',
        pembahasan: `Konsep yang digunakan: Pencegahan penipuan digital dan pelaporan lewat kanal resmi, tanpa menguji pesan secara langsung.
Kata kunci: nomor tak dikenal, akun ditutup hari ini, kode verifikasi, tautan di pesan, pengumuman aplikasi resmi, kanal pengaduan.
Opsi D (5 poin) paling tepat karena status akun diperiksa langsung di aplikasi sehingga kebenaran ancaman penutupan dapat dipastikan, dan tautan tidak dibuka. Laporan melalui kanal pengaduan aplikasi memungkinkan layanan menangani pesan yang mengaku dari layanan kependudukan itu.
Pembahasan opsi lain:
A (2 poin) meneruskan pesan ke grup warga menyebarkan tautan yang meminta kode verifikasi kepada lebih banyak orang. Niat memperingatkan tetangga tidak mengurangi risiko bahwa ada yang membukanya sebelum membaca pengumuman aplikasi.
B (1 poin) membuka tautan untuk memastikan halamannya dapat mencuri kode verifikasi dan akses akun Anda. Pengumuman aplikasi sudah menyatakan bahwa kode hanya dimasukkan di dalam aplikasi, sehingga pengujian itu tidak diperlukan.
C (3 poin) menghapus pesan dan memblokir nomor pengirim mengurangi risiko Anda membuka tautan tanpa sengaja. Namun status akun belum diperiksa di aplikasi dan pesan tidak sampai ke layanan, sehingga penipuan serupa tetap dapat menjangkau warga lain.
E (4 poin) tangkapan layar menyimpan bukti pesan yang mengaku dari layanan kependudukan, dan status akun diperiksa langsung di aplikasi. Namun layanan tidak menerima laporan tentang pesan itu, sehingga penanganan terhadap pengirimnya tidak berjalan.
Cara cepat: Perhatikan sumber pesan, isi pengumuman resmi, dan bagian yang dapat Anda periksa sendiri.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      // tkp-kasus-tik-04 · kasus orisinal data/tkp-kasus (bank TKP generator)
      {
        nomor: 26,
        lesson: 'Teknologi Informasi dan Komunikasi',
        tipe: 'skala',
        pertanyaan: `Anda petugas loket pendaftaran di sebuah puskesmas. Sistem pendaftaran daring berhenti bekerja sejak pagi dan menurut teknisi baru pulih sekitar dua jam lagi, sementara belasan pasien sudah mengantre. Prosedur cadangan puskesmas mengizinkan pendaftaran dengan formulir kertas, yang datanya harus dimasukkan ulang ke sistem setelah pulih. Anda tidak dapat memperbaiki sistem itu, dan data pasien tidak boleh dibagikan di luar petugas pendaftaran. Bagaimana Anda menangani pendaftaran pasien?`,
        opsi: [
          { label: 'A', teks: `Mencatat pasien pada formulir kertas sesuai prosedur cadangan, lalu memberi tahu pasien bahwa datanya dimasukkan ulang.` },
          { label: 'B', teks: `Mendaftarkan pasien lewat formulir kertas yang diizinkan prosedur, lalu memasukkan datanya begitu layanan pulih.` },
          { label: 'C', teks: `Menanyakan kepada teknisi kepastian waktu pulih sistem, lalu menentukan cara pendaftaran pasien sesudah mendapat jawaban.` },
          { label: 'D', teks: `Menghentikan pendaftaran sementara dan meminta pasien kembali setelah sistem pulih, lalu mencatat nama pasien yang sudah datang.` },
          { label: 'E', teks: `Mencatat data pasien di grup pesan petugas agar mudah dimasukkan kembali, lalu menghapus pesan itu setelah sistem pulih.` },
        ],
        kunci: 'B',
        pembahasan: `Konsep yang digunakan: Kesinambungan layanan memakai prosedur cadangan yang sah dan menyinkronkan data setelah sistem pulih.
Kata kunci: sistem berhenti, pulih dua jam, belasan pasien, prosedur cadangan, formulir kertas, data pasien.
Opsi B (5 poin) paling tepat karena formulir kertas yang diizinkan prosedur cadangan membuat pasien yang mengantre tetap terdaftar, dan datanya dimasukkan ulang begitu layanan pulih sehingga prosedur cadangan dijalankan sampai tuntas. Anda tidak dapat memperbaiki sistem, jadi pendaftaran dan pemasukan ulang itu menjadi bagian yang dapat Anda kerjakan.
Pembahasan opsi lain:
A (4 poin) formulir kertas sesuai prosedur cadangan melayani pasien yang sudah mengantre, dan pasien diberi tahu bahwa datanya dimasukkan ulang. Namun pemasukan ulang itu baru dijanjikan dan belum dikerjakan, sehingga prosedur cadangan belum dijalankan sampai tuntas.
C (3 poin) bertanya kepada teknisi menunjukkan kehati-hatian dan masih menghasilkan cara pendaftaran. Namun prosedur cadangan sudah mengizinkan formulir kertas, sehingga pendaftaran dapat dimulai sekarang tanpa menunggu kepastian waktu pulih.
D (2 poin) menghentikan pendaftaran membuat belasan pasien pulang tanpa terdaftar, padahal prosedur cadangan mengizinkan formulir kertas. Pencatatan nama pasien yang sudah datang membantu, tetapi pelayanan baru berjalan setelah sistem pulih.
E (1 poin) grup pesan memudahkan data pasien dimasukkan kembali. Namun data pasien tidak boleh dibagikan di luar petugas pendaftaran, sedangkan formulir kertas sesuai prosedur cadangan sudah mengizinkan pencatatan yang aman.
Cara cepat: Perhatikan perkiraan lama gangguan, cara yang diizinkan, dan jenis data yang tercatat.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      // tkp-kasus-tik-09 · kasus orisinal data/tkp-kasus (bank TKP generator)
      {
        nomor: 27,
        lesson: 'Teknologi Informasi dan Komunikasi',
        tipe: 'skala',
        pertanyaan: `Anda pegawai baru di dinas pertanian dan baru menyelesaikan kunjungan penyuluhan di tiga desa. Untuk merapikan laporan, Anda memakai asisten AI yang disetujui kantor. Hasilnya enak dibaca, tetapi menyebut peserta sebanyak 84 orang padahal catatan lapangan Anda mencatat 48 orang, dan memuat satu kegiatan demonstrasi yang tidak ada di catatan itu. Catatan lapangan asli masih ada di tas Anda, dan laporan harus dikirim kepada koordinator sore ini. Apa langkah Anda yang paling tepat?`,
        opsi: [
          { label: 'A', teks: `Meminta koordinator memperpanjang tenggat sampai besok, lalu menulis ulang laporan dari awal berdasarkan catatan lapangan.` },
          { label: 'B', teks: `Merapikan ulang laporan dengan asisten AI lain yang lebih baru, lalu membandingkan angkanya dengan hasil pertama.` },
          { label: 'C', teks: `Mencocokkan angka dan kegiatan pada hasil itu dengan catatan lapangan, lalu mengirim laporan setelah selisih dikoreksi.` },
          { label: 'D', teks: `Mengoreksi angka dan kegiatan dalam laporan sesuai catatan lapangan, lalu mengirimnya sore ini dan menyimpan temuan selisih untuk diri sendiri.` },
          { label: 'E', teks: `Mengirim laporan hasil asisten AI itu kepada koordinator, lalu memeriksa angkanya pada catatan lapangan setelah terkirim.` },
        ],
        kunci: 'C',
        pembahasan: `Konsep yang digunakan: Penggunaan AI disertai pemeriksaan hasil oleh manusia dan sumber tepercaya.
Kata kunci: asisten AI, peserta 84 orang, catatan lapangan 48 orang, kegiatan demonstrasi, laporan sore ini.
Opsi C (5 poin) paling tepat karena pencocokan terhadap catatan lapangan menemukan jumlah peserta 48 orang dan kegiatan demonstrasi yang tidak ada, sehingga laporan dikoreksi sebelum dikirim sore ini. Anda yang bertanggung jawab atas isi laporan, bukan asisten AI.
Pembahasan opsi lain:
A (3 poin) meminta tambahan waktu menunjukkan kehati-hatian, dan penulisan ulang dari catatan lapangan menghasilkan laporan yang benar. Namun catatan asli masih ada dan pencocokan dapat dilakukan sebelum laporan dikirim sore ini, sehingga tenggat tidak perlu bergeser.
B (2 poin) asisten AI lain belum dinilai kebutuhan dan keamanannya oleh kantor, dan hasilnya tetap berupa keluaran yang belum dicek. Membandingkan angkanya dengan hasil pertama tidak menjawab selisih antara laporan dan catatan lapangan, yaitu 84 orang dan 48 orang.
D (4 poin) angka dan kegiatan dikoreksi sesuai catatan lapangan sehingga laporan benar sebelum dikirim sore ini. Namun koordinator tidak mengetahui bahwa hasil asisten AI menyebut 84 orang padahal catatan lapangan mencatat 48 orang, sehingga kekeliruan asisten tidak ikut dievaluasi.
E (1 poin) laporan terkirim sebelum angka 84 orang dan kegiatan demonstrasi yang tidak ada dicek terhadap catatan lapangan. Pemeriksaan setelah terkirim terlambat, sebab koordinator sudah menerima isi laporan yang keliru.
Cara cepat: Perhatikan perbedaan isi dengan dokumen asli, tenggat pengiriman, dan peran Anda atas isinya.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      // tkp-kasus-tik-12 · kasus orisinal data/tkp-kasus (bank TKP generator)
      {
        nomor: 28,
        lesson: 'Teknologi Informasi dan Komunikasi',
        tipe: 'skala',
        pertanyaan: `Anda kepala sebuah unit pelayanan yang memiliki tiga seksi. Kantor pusat telah menetapkan bahwa aplikasi persuratan lama ditutup pada akhir kuartal dan setiap unit beralih ke aplikasi baru. Baru satu seksi yang sudah lancar memakai aplikasi baru, sedangkan dua seksi lain masih sering salah mengirim surat. Anda dapat mengatur jadwal kerja seksi, dan pusat menyediakan dua sesi pelatihan untuk unit Anda. Langkah Anda yang paling tepat adalah ...`,
        opsi: [
          { label: 'A', teks: `Meminta kantor pusat memundurkan penutupan aplikasi lama, lalu menyusun pelatihan setelah tanggal baru ditetapkan.` },
          { label: 'B', teks: `Memerintahkan ketiga seksi beralih besok pagi, lalu menilai kedisiplinan seksi dari jumlah surat salah kirim.` },
          { label: 'C', teks: `Memakai dua sesi pelatihan untuk dua seksi yang belum lancar, lalu menugaskan pendamping dari seksi yang sudah lancar.` },
          { label: 'D', teks: `Mengalihkan seksi yang sudah lancar lebih dahulu, lalu meminta kantor pusat menambah sesi pelatihan bagi dua seksi lain.` },
          { label: 'E', teks: `Membagikan panduan pusat kepada dua seksi yang belum lancar, lalu memeriksa kemajuan mereka setiap pekan.` },
        ],
        kunci: 'C',
        pembahasan: `Konsep yang digunakan: Pengelolaan transisi sistem dengan penerapan bertahap, pendampingan, dan pemanfaatan dukungan yang tersedia ketika kemampuan pengguna tidak merata.
Kata kunci: aplikasi persuratan lama, akhir kuartal, satu seksi lancar, salah mengirim surat, dua sesi pelatihan, jadwal kerja seksi.
Opsi C (5 poin) paling tepat karena dua sesi pelatihan dari pusat dipakai untuk dua seksi yang belum lancar, dan pendamping dari seksi yang sudah lancar membantu mereka menjelang penutupan aplikasi lama pada akhir kuartal. Peralihan tetap sesuai jadwal pusat dan tidak mengganggu pengiriman surat.
Pembahasan opsi lain:
A (2 poin) kantor pusat memang dapat menimbang penundaan penutupan aplikasi lama, tetapi unit Anda sudah memiliki dua sesi pelatihan yang dapat dipakai sekarang. Keputusan dialihkan kepada pusat, sedangkan dua seksi yang belum lancar tidak terbantu sampai tanggal baru ditetapkan.
B (1 poin) memerintahkan ketiga seksi beralih esok hari membiarkan dua seksi yang belum lancar beralih padahal pelatihan yang tersedia belum dipakai. Menilai kedisiplinan dari surat salah kirim memindahkan kegagalan peralihan menjadi kesalahan seksi.
D (4 poin) peralihan bertahap dimulai dari seksi yang lancar sehingga unit tidak berhenti, dan permintaan pelatihan tambahan memperhatikan kebutuhan dua seksi lain. Namun dua sesi pelatihan yang sudah disediakan pusat belum dipakai, sehingga dua seksi itu menunggu tambahan yang belum pasti.
E (3 poin) panduan pusat memberi acuan bagi dua seksi yang belum lancar, dan pemeriksaan tiap pekan menjaga perkembangan terpantau. Namun dua sesi pelatihan dari pusat belum dipakai dan belum ada pendamping, sehingga kebiasaan salah mengirim surat sulit berubah menjelang penutupan aplikasi lama pada akhir kuartal.
Cara cepat: Perhatikan kesiapan tiap seksi, dukungan yang sudah tersedia, dan tenggat yang ditetapkan pusat.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tkp-kasus-tik-23 · kasus orisinal data/tkp-kasus (bank TKP generator)
      {
        nomor: 29,
        lesson: 'Teknologi Informasi dan Komunikasi',
        tipe: 'skala',
        pertanyaan: `Anda pegawai baru di sebuah dinas. Surel dari alamat yang sangat mirip dengan alamat kepala dinas meminta Anda dan dua rekan mengisi daftar gaji melalui sebuah tautan hari ini. Salah satu rekan di ruangan Anda baru saja memasukkan kata sandi akunnya pada halaman dari tautan itu, sedangkan rekan lainnya hampir membukanya. Tim keamanan informasi hanya menangani laporan yang masuk melalui formulir pada intranet. Anda tidak berwenang memblokir akun maupun mengatur sistem surel. Tindakan Anda yang paling tepat adalah ...`,
        opsi: [
          { label: 'A', teks: `Mengirim ulang surel itu kepada pegawai lain di unit Anda sebagai peringatan, lalu meminta mereka tidak mengisi tautannya hari ini.` },
          { label: 'B', teks: `Melaporkan surel itu melalui formulir intranet, lalu mencantumkan nama rekan yang memasukkan kata sandi pada laporan.` },
          { label: 'C', teks: `Membuka tautan dari surel itu di komputer kantor untuk menilai halamannya, lalu menyampaikan hasilnya kepada rekan.` },
          { label: 'D', teks: `Meminta rekan yang terpapar mengganti kata sandi dan rekan lain berhenti mengakses tautan, lalu melapor lewat formulir intranet.` },
          { label: 'E', teks: `Memeriksa keaslian surel itu kepada kepala dinas lewat nomor dikenal, lalu melapor lewat formulir bila terbukti palsu.` },
        ],
        kunci: 'D',
        pembahasan: `Konsep yang digunakan: Penanganan insiden phishing yang sudah menimbulkan paparan, yaitu melindungi akun yang terpapar, menghentikan paparan baru, dan melapor lewat jalur yang ditetapkan.
Kata kunci: alamat mirip kepala dinas, tautan daftar gaji, kata sandi dimasukkan, rekan hampir membuka, formulir intranet.
Opsi D (5 poin) paling tepat karena rekan yang sudah memasukkan kata sandi segera mengubahnya sehingga akunnya terlindungi, dan rekan yang hampir membuka tautan dihentikan sebelum terlambat. Laporan melalui formulir intranet menyampaikan surel itu kepada tim keamanan yang hanya menangani laporan lewat jalur itu.
Pembahasan opsi lain:
A (2 poin) peringatan kepada pegawai lain dimaksudkan melindungi mereka, tetapi surel yang diteruskan membawa tautan yang sama kepada lebih banyak orang. Rekan yang sudah memasukkan kata sandi tidak ditolong, dan tim keamanan belum menerima laporan lewat formulir intranet.
B (4 poin) laporan melalui formulir intranet sampai kepada tim keamanan beserta nama rekan yang sudah memasukkan kata sandi. Namun perlindungan akun rekan itu bergantung pada tim keamanan, padahal Anda dapat memintanya mengubah kata sandi sekarang dan menghentikan rekan lain membuka tautan.
C (1 poin) membuka tautan di komputer kantor menjalankan risiko pada perangkat Anda sendiri, padahal satu rekan sudah memasukkan kata sandi dan rekan lain hampir membukanya. Hasil pengujian tidak menggantikan laporan kepada tim keamanan melalui formulir intranet.
E (3 poin) menghubungi kepala dinas lewat nomor yang dikenal adalah cara aman untuk memeriksa keaslian surel. Namun satu rekan sudah memasukkan kata sandi dan rekan lain hampir membuka tautan, sehingga pemeriksaan dahulu menunda perlindungan akun dan laporan kepada tim keamanan.
Cara cepat: Perhatikan siapa yang sudah menjadi korban, siapa yang masih dapat dicegah, dan jalur lapor yang diterima tim keamanan.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tkp-kasus-tik-15 · kasus orisinal data/tkp-kasus (bank TKP generator)
      {
        nomor: 30,
        lesson: 'Teknologi Informasi dan Komunikasi',
        tipe: 'skala',
        pertanyaan: `Anda penghubung dinas sosial untuk sebuah desa mitra penyaluran bantuan. Daftar penerima di dinas memuat 412 nama, sedangkan daftar yang dipegang desa memuat 374 nama, sehingga ada selisih 38 nama. Penyaluran dilakukan dua pekan lagi. Anda dapat melihat daftar kedua pihak beserta dokumen pendukung masing-masing, tetapi penetapan daftar akhir berada pada kepala bidang di dinas. Langkah Anda yang paling tepat adalah ...`,
        opsi: [
          { label: 'A', teks: `Meminta pihak desa mengirim dokumen pendukung 38 nama itu ke dinas hari ini, lalu meneruskan daftar selisihnya kepada kepala bidang.` },
          { label: 'B', teks: `Mencocokkan 38 nama itu dengan dokumen pembuktian kedua pihak, lalu menyerahkan selisih beserta bukti kepada kepala bidang.` },
          { label: 'C', teks: `Menanyakan kepada kepala bidang daftar mana yang dipakai penyaluran, lalu menunjukkan pencocokan dokumen setelah ada jawaban.` },
          { label: 'D', teks: `Memberi tahu desa bahwa 38 nama selisih akan menerima bantuan, lalu menyiapkan penyaluran sesuai daftar dinas.` },
          { label: 'E', teks: `Menghapus 38 nama selisih dari daftar dinas agar sama dengan daftar desa, lalu menetapkannya sebagai daftar akhir.` },
        ],
        kunci: 'B',
        pembahasan: `Konsep yang digunakan: Penyelesaian data yang bertentangan antarmitra dengan menelusuri bukti dan menyerahkan keputusan kepada pemilik kewenangan.
Kata kunci: selisih 38 nama, daftar dinas dan desa, dokumen pendukung, penyaluran dua pekan lagi, penetapan daftar akhir, kepala bidang.
Opsi B (5 poin) paling tepat karena pencocokan 38 nama dengan dokumen pendukung kedua pihak menunjukkan nama mana yang berhak, dan daftar selisih beserta bukti sampai kepada kepala bidang yang menetapkan daftar akhir. Anda menyerahkan bukti dan tidak menetapkan daftar.
Pembahasan opsi lain:
A (4 poin) dokumen pendukung dari desa memang perlu dilihat dinas, dan daftar selisih sampai kepada kepala bidang. Namun Anda sudah dapat melihat dokumen kedua pihak, sehingga meminta desa mengirimnya menambah perantara dan memperlambat penyaluran dua pekan lagi.
C (3 poin) bertanya kepada kepala bidang menghormati penetapan daftar akhir. Namun dokumen pendukung kedua pihak sudah dapat Anda lihat, sehingga pencocokan 38 nama dapat dimulai sekarang dan hasilnya menjadi bahan jawaban.
D (2 poin) memberi tahu desa bahwa 38 nama akan menerima bantuan menyampaikan hal yang belum ditetapkan kepala bidang. Desa dapat menyiapkan penyaluran menurut daftar dinas yang masih berselisih dengan daftar desa.
E (1 poin) menghapus 38 nama dan menetapkan daftar akhir melampaui peran Anda, karena penetapan daftar akhir berada pada kepala bidang. Nama yang dihapus sebelum dokumen pendukung dicocokkan dapat kehilangan hak bantuan.
Cara cepat: Perhatikan asal tiap daftar, dokumen yang dapat Anda lihat, dan pemegang keputusan akhir.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tkp-kasus-tik-20 · kasus orisinal data/tkp-kasus (bank TKP generator)
      {
        nomor: 31,
        lesson: 'Teknologi Informasi dan Komunikasi',
        tipe: 'skala',
        pertanyaan: `Anda anggota tim lapangan yang akan mensurvei calon penerima bantuan hari Kamis. Daftar calon penerima beserta alamatnya disimpan di folder bersama milik bagian data dan dibagikan melalui tautan yang dapat dibuka siapa pun yang memilikinya. Enam anggota tim lapangan memakai tautan itu karena belum terdaftar di sistem penyimpanan, yang dapat memberi akses atas nama lewat surel kerja. Aturan kantor melarang data calon penerima disimpan di akun pribadi. Hanya bagian data yang dapat mengubah pengaturan folder, dan bagian itu pernah mengganti tautan tanpa pemberitahuan sehingga survei terhenti. Bagaimana sikap Anda?`,
        opsi: [
          { label: 'A', teks: `Melaporkan tautan terbuka itu kepada kepala bagian data, lalu meminta kepala bagian mengganti pengaturan.` },
          { label: 'B', teks: `Meminta bagian data mengganti tautan terbuka dengan akses atas nama, lalu mengirim daftar nama dan surel rekan satu tim.` },
          { label: 'C', teks: `Menyalin daftar calon penerima ke akun penyimpanan pribadi Anda, lalu membagikan salinannya kepada tim lapangan.` },
          { label: 'D', teks: `Tetap memakai tautan itu untuk survei hari Kamis, lalu mengingatkan bagian data mengganti tautan setelah survei.` },
          { label: 'E', teks: `Meminta bagian data membuat tautan berbatas waktu sampai survei selesai, lalu membagikannya kepada enam anggota tim lapangan.` },
        ],
        kunci: 'B',
        pembahasan: `Konsep yang digunakan: Privasi tanpa menghambat kerja yang sah, yaitu mengganti akses terbuka dengan akses yang dikenali bagi pihak yang berhak.
Kata kunci: alamat calon penerima, tautan terbuka, belum terdaftar, akses atas nama, surel kerja, survei Kamis.
Opsi B (5 poin) paling tepat karena akses atas nama bagi anggota tim lapangan menutup tautan terbuka yang memungkinkan siapa pun melihat alamat calon penerima, dan tiap anggota tetap dapat membuka data untuk survei hari Kamis. Bagian data yang dapat mengubah pengaturan folder menerima daftar nama dan surel yang diperlukan.
Pembahasan opsi lain:
A (3 poin) kepala bagian data memang dapat memerintahkan pergantian pengaturan folder, dan tautan terbuka dilaporkan. Namun Anda belum menyampaikan kebutuhan tim lapangan kepada bagian data, sehingga pengaturan dapat berubah tanpa pemberitahuan lagi dan survei hari Kamis terganggu.
C (1 poin) menyimpan daftar di akun pribadi melanggar aturan kantor dan memindahkan alamat calon penerima ke tempat yang tidak dikendalikan kantor. Tim lapangan memang mendapat data untuk survei hari Kamis, tetapi tautan terbuka dan pengaturan folder tidak berubah.
D (2 poin) survei hari Kamis tetap berjalan, tetapi tautan terbuka tetap memungkinkan siapa pun melihat alamat calon penerima sampai survei selesai. Mengingatkan bagian data setelah survei membiarkan paparan berlangsung, padahal bagian data yang dapat mengubah pengaturan folder dapat dihubungi sekarang.
E (4 poin) tautan berbatas waktu membuat alamat calon penerima tidak terbuka selamanya dan tim lapangan tetap dapat bekerja sampai survei hari Kamis selesai. Namun siapa pun yang memperoleh tautan selama waktu itu tetap dapat melihat alamat calon penerima, sehingga paparan hanya dipersempit dan tidak ditutup.
Cara cepat: Perhatikan siapa yang dapat melihat data sekarang, kebutuhan kerja tim, dan siapa pemegang pengaturan.`,
        tingkat: 'sedang',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Profesionalisme` },
    soal: [
      // tkp-kasus-prof-07 · kasus orisinal data/tkp-kasus (bank TKP generator)
      {
        nomor: 32,
        lesson: 'Profesionalisme',
        tipe: 'skala',
        pertanyaan: `Anda petugas pendata di sebuah desa terpencil. Sekarang pukul 15.30. Laporan harian wajib diunggah lewat aplikasi sebelum pukul 17.00, tetapi sejak siang jaringan seluler terputus dan baru aktif di kantor kecamatan, sekitar satu jam perjalanan dari lokasi Anda. Data warga hari ini sudah Anda catat di buku lapangan. Aturan dinas membolehkan laporan susulan paling lambat esok pagi bila kendala jaringan dilaporkan lewat telepon kepada koordinator, yang menerima laporan kendala sampai pukul 18.00. Apa langkah Anda yang paling tepat?`,
        opsi: [
          { label: 'A', teks: `Meminta rekan di kantor kecamatan mengisi laporan hari ini berdasarkan perkiraan Anda, lalu mengunggahnya sebelum pukul 17.00.` },
          { label: 'B', teks: `Merapikan catatan di buku lapangan hingga pukul 16.30, lalu berangkat ke kantor kecamatan untuk melapor dan mengirim laporan.` },
          { label: 'C', teks: `Mencatat data di buku lapangan, lalu mengunggah laporan beberapa hari sekaligus saat jaringan di desa sudah pulih.` },
          { label: 'D', teks: `Mengunggah laporan setibanya di kantor kecamatan, lalu meminta rekan di sana menyampaikan kendala jaringan kepada koordinator.` },
          { label: 'E', teks: `Pergi ke kantor kecamatan yang jaringannya aktif untuk mengirim isi buku catatan, lalu menelepon koordinator untuk melaporkan kendala jaringan.` },
        ],
        kunci: 'E',
        pembahasan: `Konsep yang digunakan: Disiplin waktu dan kesinambungan pelaporan saat sarana terganggu.
Kata kunci: unggah sebelum pukul 17.00, jaringan seluler terputus, kantor kecamatan satu jam, buku lapangan, laporan susulan, laporan kendala sampai pukul 18.00.
Opsi E (5 poin) paling tepat karena dari pukul 15.30 kantor kecamatan dapat dicapai sebelum batas pukul 17.00, sehingga laporan terkirim tepat waktu. Kendala jaringan Anda laporkan sendiri lewat telepon kepada koordinator sebelum pukul 18.00 sesuai aturan dinas.
Pembahasan opsi lain:
A (1 poin) laporan yang diisi dari perkiraan tidak cocok dengan data warga di buku lapangan, sehingga angkanya tidak dapat dipertanggungjawabkan walau tepat waktu. Aturan dinas sebenarnya membolehkan laporan susulan esok pagi bila kendala jaringan dilaporkan.
B (3 poin) kendala tetap dilaporkan lewat telepon sebelum pukul 18.00 dan laporan terkirim sebagai susulan. Dari pukul 15.30 Anda dapat tiba sebelum pukul 17.00, tetapi merapikan catatan lebih dulu membuat laporan harian terlambat padahal data sudah lengkap.
C (2 poin) buku lapangan menjaga data warga hari ini, tetapi laporan digeser beberapa hari padahal aturan dinas hanya membolehkan susulan esok pagi. Koordinator juga tidak menerima laporan kendala sampai pukul 18.00.
D (4 poin) laporan terkirim sebelum pukul 17.00 dari kantor kecamatan, dan kabar kendala sampai kepada koordinator lewat telepon sebelum pukul 18.00. Kendala tidak Anda sampaikan sendiri, jadi koordinator menerimanya lewat rekan dan tidak dapat langsung menanyai Anda.
Cara cepat: Apa yang masih mungkin dicapai sebelum batas, dan siapa yang perlu menerima kabar langsung dari Anda?`,
        tingkat: 'mudah',
        status: 'draft',
      },
      // tkp-kasus-prof-03 · kasus orisinal data/tkp-kasus (bank TKP generator)
      {
        nomor: 33,
        lesson: 'Profesionalisme',
        tipe: 'skala',
        pertanyaan: `Anda penghubung unit Anda dengan sebuah lembaga pelatihan mitra. Kemarin mitra meminta daftar nama peserta untuk mencetak sertifikat, paling lambat Jumat siang, dan Anda berjanji mengirimnya kemarin sore. Jumat pagi Anda sadar daftar itu belum dikirim karena terlewat dalam kesibukan, sedangkan mitra belum menghubungi Anda. Daftar nama sudah tersedia di berkas unit, dan sertifikat itu dijadwalkan dibagikan pada acara penutupan akhir pekan. Bagaimana sikap Anda?`,
        opsi: [
          { label: 'A', teks: `Mencatat permintaan itu pada daftar pekerjaan pekan ini, lalu baru mengirim daftar nama pada Jumat sore.` },
          { label: 'B', teks: `Mengirim daftar nama beserta nomor identitas peserta sekarang, lalu menjelaskan bahwa data itu sekalian disiapkan.` },
          { label: 'C', teks: `Memasukkan daftar nama ke surel balasan untuk mitra sekarang, lalu mencatat keterlambatan pada berkas kerja unit.` },
          { label: 'D', teks: `Memberi tahu kepala unit bahwa daftar terlambat, lalu mengirim daftar itu sesuai arahannya.` },
          { label: 'E', teks: `Mengirim daftar nama itu sekarang, lalu menjelaskan kepada mitra penyebab keterlambatan pengirimannya.` },
        ],
        kunci: 'E',
        pembahasan: `Konsep yang digunakan: Tanggung jawab memulihkan komitmen yang terlewat dengan tindakan langsung dan keterbukaan kepada mitra.
Kata kunci: janji kemarin sore, paling lambat Jumat siang, terlewat dalam kesibukan, mitra belum menghubungi, daftar nama tersedia.
Opsi E (5 poin) paling tepat karena daftar nama yang sudah tersedia langsung sampai kepada mitra sebelum batas Jumat siang, dan penjelasan penyebab keterlambatan memulihkan kepercayaan mereka. Anda memegang janji sendiri tanpa menunggu ditanya.
Pembahasan opsi lain:
A (2 poin) batas pengiriman adalah Jumat siang, sedangkan daftar nama baru dikirim Jumat sore, akibatnya janji Anda terlewat. Pencetakan sertifikat mitra ikut mundur padahal acara penutupan sudah terjadwal akhir pekan.
B (1 poin) mitra hanya meminta daftar nama untuk mencetak sertifikat, yang berarti nomor identitas peserta yang ikut terkirim membuka data pribadi di luar kebutuhan mitra. Daftar tiba sebelum Jumat siang, tetapi data peserta tersebar kepada pihak yang tidak memerlukannya.
C (4 poin) mitra menerima daftar nama lewat surel sebelum Jumat siang, dan keterlambatan tercatat pada berkas kerja unit. Penjelasan tentang janji yang terlewat belum sampai kepada mitra, sehingga kepercayaan mereka belum pulih.
D (3 poin) kepala unit mengetahui kelalaian itu dan daftar nama tetap dikirim. Daftar sudah tersedia di berkas unit dan Anda sebagai penghubung dapat mengirimnya sendiri, akibatnya arahan hanya memperpendek waktu sebelum Jumat siang.
Cara cepat: Apa yang masih dapat dikerjakan hari ini, dan siapa yang sedang bergantung pada janji Anda?`,
        tingkat: 'mudah',
        status: 'draft',
      },
      // tkp-kasus-prof-09 · kasus orisinal data/tkp-kasus (bank TKP generator)
      {
        nomor: 34,
        lesson: 'Profesionalisme',
        tipe: 'skala',
        pertanyaan: `Anda panitia pendaftaran pada pelatihan dua hari yang diadakan kantor. Daftar hadir dipakai untuk menerbitkan sertifikat dan menghitung jam pelatihan setiap pegawai. Hari ini Dimas, rekan dekat Anda, pulang pukul 11.00 karena urusan keluarga, padahal sesi baru selesai pukul 16.00. Sebelum pergi ia meminta Anda memarafkan kolom kehadirannya hingga sore agar jam pelatihannya tidak dikurangi. Koordinator pelatihan menetapkan jam pegawai yang izin berdasarkan keterangan tertulis yang masuk sebelum daftar hadir ditutup pukul 16.00. Sikap Anda adalah ...`,
        opsi: [
          { label: 'A', teks: `Menolak memarafkan kolom sore itu, lalu menyarankan Dimas mengirim keterangan izin kepada koordinator sebelum pukul 16.00.` },
          { label: 'B', teks: `Mencatat jam pulang Dimas yang sebenarnya pada daftar hadir, lalu menolak memarafkan kolom sore itu.` },
          { label: 'C', teks: `Melaporkan permintaan Dimas kepada kepala bagian kepegawaian, lalu menolak memarafkan kolom kehadirannya.` },
          { label: 'D', teks: `Mengosongkan kolom kehadiran Dimas, lalu menutup daftar hadir pukul 16.00 dan tidak memberi tahu siapa pun.` },
          { label: 'E', teks: `Memarafkan kolom kehadiran Dimas hingga pukul 16.00, lalu menyampaikan kepada koordinator bahwa ia hadir penuh.` },
        ],
        kunci: 'A',
        pembahasan: `Konsep yang digunakan: Integritas profesional saat rekan dekat meminta Anda menyimpang dari standar.
Kata kunci: daftar hadir, sertifikat dan jam pelatihan, Dimas pulang pukul 11.00, memarafkan kolom kehadiran, rekan dekat, keterangan tertulis sebelum pukul 16.00.
Opsi A (5 poin) paling tepat karena daftar hadir menjadi dasar sertifikat dan jam pelatihan, yang berarti kehadiran Dimas hanya tercatat sampai pukul 11.00. Keterangan izin sebelum pukul 16.00 membuka jalan agar koordinator menetapkan jam pelatihannya secara sah.
Pembahasan opsi lain:
B (4 poin) jam pulang Dimas tercatat sesuai kenyataan pada daftar hadir yang menjadi dasar sertifikat. Dimas tidak diberi tahu bahwa keterangan izin masih dapat masuk sebelum pukul 16.00, sehingga jam pelatihannya berkurang tanpa upaya yang sah.
C (3 poin) penolakan menjaga keakuratan daftar hadir, dan kepala bagian kepegawaian dapat mengetahui permintaan itu. Dimas baru mengajukan permintaan sekali dan belum diberi tahu jalur izin, akibatnya laporan melompati pembicaraan langsung.
D (2 poin) kolom yang kosong menjaga keakuratan daftar hadir, tetapi Dimas dan koordinator tidak mengetahui bahwa keterangan izin masih dapat masuk sebelum pukul 16.00. Jam pelatihan Dimas berkurang tanpa upaya apa pun dari Anda.
E (1 poin) paraf pada kolom sore mencatat kehadiran yang tidak terjadi pada daftar yang menjadi dasar sertifikat dan jam pelatihan. Dimas pulang pukul 11.00, dan keterangan kepada koordinator menutup jalur izin yang sah.
Cara cepat: Untuk apa catatan resmi itu dipakai oleh pihak lain, dan jalan sah apa yang masih terbuka bagi rekan Anda?`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tkp-kasus-prof-18 · kasus orisinal data/tkp-kasus (bank TKP generator)
      {
        nomor: 35,
        lesson: 'Profesionalisme',
        tipe: 'skala',
        pertanyaan: `Anda kepala unit pendaftaran di sebuah dinas. Dalam tiga bulan terakhir, kesalahan penulisan nomor identitas pada formulir pemohon muncul empat kali, dan dua kali di antaranya sudah ditangani dengan mengingatkan petugas. Data menunjukkan keempat kesalahan terjadi pada formulir cetak lama yang kolom nomornya tidak berpetak, sedangkan formulir berpetak yang baru dipakai di dua loket tidak menimbulkan kesalahan. Stok formulir berpetak tersedia di gudang unit. Bagaimana Anda menindaklanjutinya?`,
        opsi: [
          { label: 'A', teks: `Mengulang peringatan kepada petugas pada apel pagi, lalu mencatat kesalahan berikutnya pada daftar pantauan.` },
          { label: 'B', teks: `Mengganti formulir lama dengan yang berpetak di setiap loket, lalu memantau kesalahan selama dua bulan.` },
          { label: 'C', teks: `Menambah pemeriksaan nomor identitas oleh petugas kedua di setiap loket, lalu mengevaluasinya pada akhir tahun.` },
          { label: 'D', teks: `Memakai formulir berpetak di loket yang sudah menggunakannya, lalu mengganti formulir lama di loket lain secara bertahap.` },
          { label: 'E', teks: `Memberi sanksi kepada petugas yang terakhir salah menulis, lalu memakai formulir lama sampai stoknya habis.` },
        ],
        kunci: 'B',
        pembahasan: `Konsep yang digunakan: Penyelesaian masalah yang menyentuh akar penyebab dan dipantau hasilnya.
Kata kunci: kesalahan nomor identitas, empat kali, dua kali diingatkan, formulir cetak lama, kolom tidak berpetak, stok formulir berpetak.
Opsi B (5 poin) paling tepat karena data menunjukkan kesalahan hanya terjadi pada formulir yang kolom nomornya tidak berpetak, sehingga mengganti formulir di setiap loket menyentuh penyebabnya. Pemantauan dua bulan membuktikan bahwa perbaikan itu bekerja.
Pembahasan opsi lain:
A (2 poin) peringatan sudah dua kali diberikan dan kesalahan tetap muncul, yang berarti mengulanginya tidak menyentuh penyebab. Daftar pantauan hanya mencatat kesalahan pada formulir lama yang kolom nomornya tidak berpetak.
C (3 poin) petugas kedua menangkap sebagian kesalahan nomor identitas. Formulir lama yang kolom nomornya tidak berpetak tetap dipakai, dan evaluasi akhir tahun terlalu jauh untuk kesalahan yang muncul tiap bulan.
D (4 poin) formulir berpetak sudah terbukti tidak menimbulkan kesalahan di dua loket, dan formulir lama di loket lain diganti secara bertahap. Penggantian belum menjangkau setiap loket sekarang dan belum disertai pemantauan hasil, jadi perbaikan penyebab baru separuh jalan.
E (1 poin) sanksi memindahkan kegagalan formulir menjadi kesalahan seorang petugas, padahal empat kesalahan terjadi pada formulir yang sama. Formulir lama yang kolom nomornya tidak berpetak tetap dipakai sehingga kesalahan berikutnya hampir pasti terjadi.
Cara cepat: Kapan masalah muncul dan kapan tidak, dan apakah perbaikan terdahulu menyentuh sebabnya?`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tkp-kasus-prof-17 · kasus orisinal data/tkp-kasus (bank TKP generator)
      {
        nomor: 36,
        lesson: 'Profesionalisme',
        tipe: 'skala',
        pertanyaan: `Anda koordinator tim penyusun laporan di sebuah dinas. Pimpinan menetapkan format laporan baru berbasis lembar kerja bersama mulai bulan depan. Bu Wati, rekan senior yang paling teliti, keberatan karena data tahun-tahun lalu tersimpan di format lama dan ia khawatir riwayat angka tidak terbaca. Dua anggota lain ingin segera beralih. Anda dapat mengatur cara tim mencoba format baru, sedangkan tanggal berlakunya tetap. Keputusan Anda adalah ...`,
        opsi: [
          { label: 'A', teks: `Menggali alasan keberatan Bu Wati secara terbuka, lalu menguji format baru pada satu laporan percobaan sebelum tanggal berlaku.` },
          { label: 'B', teks: `Mengumumkan uji format baru pada satu laporan kepada tim, lalu meminta masukan setelah laporan selesai.` },
          { label: 'C', teks: `Menyampaikan bahwa tanggal berlaku format baru tetap, lalu menyiapkan pelatihan format baru bagi tim.` },
          { label: 'D', teks: `Meminta Bu Wati membuktikan sendiri bahwa riwayat data tidak hilang, lalu memutuskan format berdasarkan jawabannya.` },
          { label: 'E', teks: `Menyebut keberatan Bu Wati sebagai penghambat pada rapat tim, lalu meminta anggota lain beralih ke format baru.` },
        ],
        kunci: 'A',
        pembahasan: `Konsep yang digunakan: Adaptasi terhadap perubahan dengan menggali penolakan dan menguji perubahan secara terkendali.
Kata kunci: format laporan baru, keberatan Bu Wati, data format lama, riwayat angka tidak terbaca, tanggal berlaku tetap, cara tim mencoba.
Opsi A (5 poin) paling tepat karena keberatan Bu Wati tentang riwayat data punya dasar nyata yang perlu didengar, dan uji pada satu laporan membuktikan apakah format baru terbaca sebelum berlaku bulan depan. Tanggal berlaku tetap terpenuhi.
Pembahasan opsi lain:
B (4 poin) uji pada satu laporan diumumkan kepada tim dan masukan dikumpulkan setelahnya, yang berarti tim siap sebelum format baru berlaku. Alasan keberatan Bu Wati belum dibahas lebih dulu, sehingga ia belum merasa didengar.
C (3 poin) pelatihan membantu tim beralih sebelum tanggal berlaku yang tetap. Keberatan Bu Wati tentang riwayat data tidak mendapat jalan keluar, padahal Anda dapat mengatur cara tim mencoba format baru.
D (2 poin) bu Wati paling mengenal data lama, akibatnya ia mampu menilai keamanan format baru. Beban membuktikannya berpindah kepadanya, padahal Anda yang dapat mengatur cara tim mencoba format itu sebelum tanggal berlaku.
E (1 poin) menyebut keberatan Bu Wati sebagai penghambat di depan rapat mempermalukan rekan senior yang keberatannya berdasar. Format baru berjalan, tetapi persoalan riwayat data tidak dibahas dan hubungan kerja rusak.
Cara cepat: Apa dasar kekhawatiran yang disampaikan, dan bagian perubahan mana yang dapat dijajaki lebih dulu?`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tkp-kasus-prof-21 · kasus orisinal data/tkp-kasus (bank TKP generator)
      {
        nomor: 37,
        lesson: 'Profesionalisme',
        tipe: 'skala',
        pertanyaan: `Anda petugas penyuluh di sebuah puskesmas. Sekarang pukul 08.00. Penyuluhan imunisasi di balai desa pukul 09.00 sudah diumumkan kepada warga, tetapi kepala puskesmas meminta revisi laporan imunisasi yang harus terkirim kepada dinas kesehatan sebelum pukul 12.00. Revisi itu hanya dapat dikerjakan dari berkas di komputer Anda dan memerlukan sekitar dua jam, sedangkan menyiapkan bahan untuk Mbak Dewi memerlukan setengah jam. Kepala puskesmas membolehkan petugas meminta bantuan sesama penyuluh, dan Mbak Dewi dapat menggantikan penyuluhan bila diberi bahan. Apa langkah Anda yang paling tepat?`,
        opsi: [
          { label: 'A', teks: `Memberi penyuluhan sesuai jadwal, lalu meminta kepala puskesmas memperpanjang batas kirim laporan imunisasi.` },
          { label: 'B', teks: `Mengerjakan revisi laporan lebih dulu, lalu memberi tahu warga di balai desa bahwa penyuluhan imunisasi ditunda.` },
          { label: 'C', teks: `Mengirim revisi laporan imunisasi sebelum angka dicocokkan dengan berkas, lalu berangkat memberi penyuluhan sesuai jadwal.` },
          { label: 'D', teks: `Mengabari kepala puskesmas bahwa Mbak Dewi menggantikan penyuluhan, lalu mengirim bahan penyuluhan kepada Mbak Dewi.` },
          { label: 'E', teks: `Meminta Mbak Dewi menggantikan penyuluhan dengan bahan Anda, lalu meminta laporan hasilnya setelah revisi itu.` },
        ],
        kunci: 'E',
        pembahasan: `Konsep yang digunakan: Pengelolaan dua tanggung jawab melalui bantuan rekan yang diizinkan, dengan tanggung jawab hasil tetap pada pemilik tugas.
Kata kunci: penyuluhan pukul 09.00, sudah diumumkan, revisi laporan sebelum pukul 12.00, revisi dua jam, bahan setengah jam, Mbak Dewi.
Opsi E (5 poin) paling tepat karena bahan siap dalam setengah jam sehingga Mbak Dewi dapat menggantikan penyuluhan pukul 09.00, dan revisi laporan imunisasi terkirim sebelum pukul 12.00. Laporan hasil penyuluhan menjaga tanggung jawab Anda atas pertanyaan warga.
Pembahasan opsi lain:
A (3 poin) penyuluhan terlaksana sesuai pengumuman kepada warga, dan perpanjangan batas kiriman dapat diminta. Mbak Dewi dapat menggantikan penyuluhan, sehingga batas laporan dikorbankan padahal bantuan yang diizinkan tersedia.
B (2 poin) laporan imunisasi terkirim sebelum pukul 12.00, tetapi warga yang sudah datang ke balai desa pukul 09.00 kehilangan penyuluhan yang diumumkan. Mbak Dewi dapat menggantikan bila diberi bahan, akibatnya penutupan itu sebenarnya dapat dihindari.
C (1 poin) revisi dikirim sebelum angka dicocokkan dengan berkas di komputer Anda, yang berarti dinas kesehatan menerima laporan yang belum teruji. Penyuluhan terlaksana, tetapi laporan imunisasi tidak dapat dipertanggungjawabkan.
D (4 poin) kepala puskesmas mengetahui pergantian itu dan Mbak Dewi menerima bahan penyuluhan sebelum pukul 09.00, sehingga warga tetap mendapat penyuluhan. Hasil penyuluhan tidak kembali kepada Anda, akibatnya pertanyaan warga yang belum terjawab belum dapat ditindaklanjuti.
Cara cepat: Kewajiban mana yang harus Anda pegang sendiri, dan mana yang dapat dijalankan orang lain dengan bekal cukup?`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tkp-kasus-prof-15 · kasus orisinal data/tkp-kasus (bank TKP generator)
      {
        nomor: 38,
        lesson: 'Profesionalisme',
        tipe: 'skala',
        pertanyaan: `Anda pegawai baru di tim pemeriksa dokumen sebuah dinas. Dalam draf laporan Anda mencatat satu temuan: sebagian berkas hibah tidak memuat tanda tangan penerima, dan berkas pendukungnya lengkap. Ketua tim, Pak Arif, meminta temuan itu tidak dicantumkan pekan ini karena ia akan memperbaikinya bulan depan. Laporan dikirim kepada inspektur pekan ini, dan hanya ketua tim yang dapat mengubah isi laporan akhir. Anda hanya dapat mengusulkan perubahan. Bagaimana sebaiknya Anda menanggapi?`,
        opsi: [
          { label: 'A', teks: `Mempertahankan temuan itu pada draf laporan, lalu melaporkan permintaan Pak Arif langsung kepada inspektur.` },
          { label: 'B', teks: `Menyusun laporan tanpa temuan itu sesuai permintaan Pak Arif, lalu menyimpan berkas pendukungnya untuk bulan depan.` },
          { label: 'C', teks: `Mengeluarkan temuan itu beserta berkas pendukungnya dari draf, lalu mengirim draf laporan kepada Pak Arif hari ini.` },
          { label: 'D', teks: `Menegaskan temuan itu didukung berkas, lalu mengusulkan pencantuman bersama rencana perbaikan Pak Arif.` },
          { label: 'E', teks: `Mendiskusikan dengan Pak Arif alasan permintaannya, lalu meminta keputusan tertulis tentang temuan sebelum laporan dikirim.` },
        ],
        kunci: 'D',
        pembahasan: `Konsep yang digunakan: Integritas dan keberanian menyampaikan temuan di bawah tekanan atasan langsung.
Kata kunci: temuan berkas hibah, tanda tangan penerima, berkas pendukung lengkap, perbaikan bulan depan, laporan kepada inspektur.
Opsi D (5 poin) paling tepat karena berkas yang lengkap menjaga temuan tetap tercantum, dan rencana perbaikan Pak Arif memberinya ruang menunjukkan penanganan kepada inspektur. Anda mengusulkan perubahan sesuai peran, bukan mengubah laporan akhir sendiri.
Pembahasan opsi lain:
A (3 poin) temuan tetap tercantum dan inspektur berhak mengetahui permintaan itu. Pak Arif belum Anda ajak membahas rencana perbaikannya, sehingga laporan langsung kepada inspektur melompati pembicaraan dengan ketua tim.
B (2 poin) berkas pendukung temuan tersimpan dan Pak Arif berjanji memperbaikinya, tetapi inspektur menerima laporan pekan ini tanpa temuan yang sudah terbukti. Tanggung jawab Anda sebagai pemeriksa dilepaskan karena ketua tim memintanya.
C (1 poin) pengeluaran temuan dan berkas pendukungnya menghilangkan bukti yang sudah lengkap, dan laporan yang sampai kepada inspektur tidak menggambarkan keadaan sebenarnya. Pak Arif memang meminta, tetapi Anda ikut melepaskannya.
E (4 poin) diskusi membuka alasan Pak Arif, dan keputusan tertulis meninggalkan jejak sebelum laporan dikirim kepada inspektur pekan ini. Usul mencantumkan temuan bersama rencana perbaikan belum Anda sampaikan, akibatnya peran Anda sebagai pemeriksa baru terisi separuh.
Cara cepat: Siapa yang memegang keputusan akhir atas laporan itu, dan sejauh mana peran Anda dalam menyampaikan pendapat?`,
        tingkat: 'sedang',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Anti Radikalisme` },
    soal: [
      // tkp-kasus-ar-10 · kasus orisinal data/tkp-kasus (bank TKP generator)
      {
        nomor: 39,
        lesson: 'Anti Radikalisme',
        tipe: 'skala',
        pertanyaan: `Anda warga yang menjadi anggota panitia peringatan hari kemerdekaan tingkat RW, di bawah pembinaan ketua RW. Dalam rapat, mayoritas panitia menyetujui iuran dua kali lipat bagi warga pendatang dengan alasan mereka belum lama tinggal di sana. Biaya kegiatan dihitung sama untuk setiap rumah, dan keputusan itu belum diumumkan kepada warga. Anda tidak setuju, tetapi belum bersuara dalam rapat. Ketua panitia masih menerima usulan perbaikan keputusan. Sikap Anda yang paling tepat adalah ...`,
        opsi: [
          { label: 'A', teks: `Menyampaikan keberatan kepada ketua RW di atas panitia, lalu meminta ketua RW membatalkan keputusan panitia.` },
          { label: 'B', teks: `Mencatat ketidaksetujuan Anda atas iuran warga pendatang di buku pribadi, lalu mengikuti keputusan panitia.` },
          { label: 'C', teks: `Menyetujui keputusan itu pada rapat berikutnya, lalu menagih iuran lipat dua kepada warga pendatang.` },
          { label: 'D', teks: `Mengusulkan iuran yang sama bagi tiap rumah menurut biaya acara, lalu meminta keputusan itu ditinjau sebelum diumumkan.` },
          { label: 'E', teks: `Menyampaikan usulan iuran yang sama kepada ketua panitia lewat pesan pribadi, lalu meminta ketua membawanya ke rapat.` },
        ],
        kunci: 'D',
        pembahasan: `Konsep yang digunakan: Perlindungan hak kelompok kecil dalam keputusan mayoritas dan pengembalian keputusan pada kriteria yang relevan.
Kata kunci: iuran dua kali lipat, warga pendatang, biaya sama tiap rumah, belum diumumkan, ketua panitia menerima usulan.
Opsi D (5 poin) paling tepat karena biaya kegiatan dihitung sama untuk setiap rumah, sehingga iuran yang sama menjadi dasar yang adil bagi warga pendatang dan warga lain. Karena keputusan belum diumumkan dan ketua panitia masih menerima usulan, peninjauan dapat dilakukan sebelum merugikan warga.
Pembahasan opsi lain:
A (3 poin) ketua RW membina panitia dan dapat menilai keputusan yang membedakan warga pendatang. Namun keberatan langsung kepada ketua RW melompati ketua panitia yang masih menerima usulan perbaikan, sehingga panitia tidak diberi kesempatan memperbaiki keputusannya lebih dahulu.
B (2 poin) catatan pribadi tidak sampai kepada panitia, sehingga keputusan tentang iuran bagi warga pendatang berjalan tanpa keberatan. Mengikuti keputusan mayoritas yang membedakan warga membuat Anda ikut menjalankannya.
C (1 poin) menyetujui dan menagih iuran lipat dua menjalankan keputusan yang membedakan warga pendatang padahal biaya kegiatan sama untuk setiap rumah. Anda ikut membuat warga itu menanggung beban lebih berat hanya karena statusnya.
E (4 poin) usulan iuran yang sama kepada ketua panitia sesuai dengan biaya kegiatan setiap rumah. Namun usulan lewat pesan pribadi bergantung pada ketua untuk membawanya ke rapat, sehingga mayoritas panitia tidak mendengarnya langsung dari Anda.
Cara cepat: Perhatikan dasar perbedaan perlakuan itu dan apakah masih ada kesempatan untuk memperbaikinya.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      // tkp-kasus-ar-09 · kasus orisinal data/tkp-kasus (bank TKP generator)
      {
        nomor: 40,
        lesson: 'Anti Radikalisme',
        tipe: 'skala',
        pertanyaan: `Anda anggota tim yang baru ditunjuk memoderasi forum diskusi kebijakan internal kantor. Beberapa diskusi sebelumnya memanas dan pernah muncul komentar yang menyerang pribadi. Anda belum pernah memoderasi forum, dan pedoman forum belum ada. Unit TIK membuka pelatihan moderasi forum pekan ini bagi pegawai yang ditunjuk, sedangkan penetapan pedoman menjadi urusan pimpinan, yang menerima usulan dari moderator. Langkah Anda yang paling tepat adalah ...`,
        opsi: [
          { label: 'A', teks: `Membaca panduan moderasi forum dari situs lain, lalu menerapkannya pada diskusi pertama yang Anda pimpin.` },
          { label: 'B', teks: `Mengikuti pelatihan moderasi dari unit TIK, lalu mengajukan pedoman forum kepada pimpinan.` },
          { label: 'C', teks: `Mempelajari materi pelatihan unit TIK, lalu memoderasi forum berdasarkan materi itu dan pertimbangan sendiri.` },
          { label: 'D', teks: `Menempelkan imbauan menjaga bahasa di halaman forum, lalu membuka diskusi kebijakan seperti biasa.` },
          { label: 'E', teks: `Menutup kolom komentar forum diskusi itu, lalu melarang peserta membahas kebijakan yang memicu perdebatan.` },
        ],
        kunci: 'B',
        pembahasan: `Konsep yang digunakan: Pengembangan kemampuan moderasi untuk membedakan kritik kebijakan dari serangan pribadi.
Kata kunci: baru ditunjuk, diskusi memanas, komentar menyerang pribadi, pedoman belum ada, pelatihan moderasi unit TIK, usulan dari moderator.
Opsi B (5 poin) paling tepat karena pelatihan moderasi dari unit TIK yang dibuka pekan ini menjawab ketidakmampuan Anda memoderasi forum yang sering memanas. Karena pimpinan menerima usulan pedoman dari moderator, materi pelatihan dapat dipakai menyusun pedoman yang membedakan kritik kebijakan dari serangan pribadi.
Pembahasan opsi lain:
A (3 poin) panduan dari situs lain memberi gambaran umum tentang moderasi forum. Namun materi itu tidak disesuaikan dengan pedoman dan kebiasaan kantor, dan pelatihan moderasi dari unit TIK pekan ini belum dimanfaatkan.
C (4 poin) mempelajari materi pelatihan membekali Anda menghadapi diskusi yang memanas. Namun pedoman forum belum ada dan Anda tidak mengikuti pelatihannya, sehingga penilaian komentar bergantung pada pertimbangan sendiri dan dapat berbeda dari diskusi ke diskusi.
D (2 poin) imbauan menjaga bahasa di halaman forum tidak mengubah cara forum dimoderasi. Komentar yang menyerang pribadi tetap dapat muncul karena pedoman belum ada dan Anda belum mengikuti pelatihan moderasi.
E (1 poin) menutup kolom komentar dan melarang pembahasan kebijakan yang memicu perdebatan membungkam kritik yang sah di forum diskusi kebijakan. Pimpinan belum menerima usulan pedoman, sehingga larangan itu hanya keputusan moderator.
Cara cepat: Perhatikan bekal apa yang sudah tersedia dan siapa yang dapat menetapkan aturan main diskusi itu.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      // tkp-kasus-ar-05 · kasus orisinal data/tkp-kasus (bank TKP generator)
      {
        nomor: 41,
        lesson: 'Anti Radikalisme',
        tipe: 'skala',
        pertanyaan: `Anda petugas loket pengurusan izin usaha. Seorang pemohon yang sudah mengambil nomor antrean melihat nama dan mendengar logat Anda, lalu meminta dilayani petugas lain karena menurutnya orang dari daerah Anda tidak dapat dipercaya. Berkasnya lengkap, loket sebelah melayani izin yang sama dengan standar yang sama, dan permohonannya dapat Anda selesaikan di loket ini. Antrean di belakangnya mulai panjang. Tindakan Anda yang paling tepat adalah ...`,
        opsi: [
          { label: 'A', teks: `Memanggil kepala seksi ke loket untuk menangani pemohon itu, lalu menyampaikan kepada pemohon bahwa keputusan ada pada kepala seksi.` },
          { label: 'B', teks: `Menyuruh pemohon itu mengambil nomor antrean baru di loket sebelah, lalu melayani pemohon berikutnya di loket ini.` },
          { label: 'C', teks: `Menolak melayani pemohon itu karena ucapannya, lalu mencatat berkasnya sebagai permohonan yang telah ditolak.` },
          { label: 'D', teks: `Menyampaikan bahwa setiap pemohon dilayani petugas sesuai nomor antreannya, lalu memproses izinnya dengan standar yang sama.` },
          { label: 'E', teks: `Memproses berkas pemohon itu sesuai urutan antrean, lalu mencatat ucapannya pada lembar keluhan di loket.` },
        ],
        kunci: 'D',
        pembahasan: `Konsep yang digunakan: Pelayanan tanpa diskriminasi ketika pengguna menolak petugas karena identitas.
Kata kunci: nomor antrean, nama dan logat, tidak dapat dipercaya, berkas lengkap, standar yang sama.
Opsi D (5 poin) paling tepat karena pelayanan menurut nomor antrean berlaku sama bagi setiap pemohon, dan asal daerah petugas bukan alasan untuk memindahkan berkas. Karena loket sebelah menerapkan standar yang sama dan permohonannya dapat Anda selesaikan, berkas diproses tanpa mengorbankan antrean lain.
Pembahasan opsi lain:
A (3 poin) memanggil kepala seksi membawa permintaan pemohon itu ke tingkat lebih tinggi sebelum Anda menjelaskan standar layanan yang sama. Pemohon diberi tahu bahwa keputusan ada pada kepala seksi, padahal permohonannya dapat Anda selesaikan di loket ini.
B (2 poin) menyuruh pemohon mengambil nomor baru memindahkan permintaan karena asal daerah kepada petugas lain dan membuatnya kembali ke belakang antrean. Loket sebelah memang melayani izin yang sama, tetapi permohonannya tetap dapat Anda selesaikan.
C (1 poin) menolak melayani pemohon karena ucapannya menutup haknya atas layanan, padahal berkasnya lengkap dan dapat Anda selesaikan di loket ini. Penolakan itu membalas ucapan dengan cara yang merugikan pemohon.
E (4 poin) berkas pemohon diproses sesuai urutan antrean sehingga haknya terlayani. Namun ucapan tentang asal daerah Anda hanya dicatat pada lembar keluhan, dan pemohon tidak mendengar bahwa permintaannya tidak dapat dituruti.
Cara cepat: Perhatikan apa yang menjadi hak pengguna dan apa yang hanya menjadi alasan pribadinya.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      // tkp-kasus-ar-04 · kasus orisinal data/tkp-kasus (bank TKP generator)
      {
        nomor: 42,
        lesson: 'Anti Radikalisme',
        tipe: 'skala',
        pertanyaan: `Anda warga yang menerima pesan berantai di grup percakapan lingkungan. Pesan itu menyebut alamat sebuah rumah kontrakan warga pendatang dan mengajak warga berkumpul di sana malam ini untuk mengusir penghuninya secara paksa. Belum ada yang menanggapi, padahal waktu berkumpul tinggal tiga jam lagi dan belasan anggota grup sudah membacanya. Anda tidak mengenal pengirimnya, dan ketua RT dapat dihubungi lewat telepon. Apa yang sebaiknya Anda lakukan?`,
        opsi: [
          { label: 'A', teks: `Meneruskan pesan itu kepada beberapa tetangga dekat, lalu meminta mereka berhati-hati terhadap pengirimnya.` },
          { label: 'B', teks: `Melaporkan pesan itu ke kepolisian beserta tangkapan layarnya, lalu menghubungi ketua RT.` },
          { label: 'C', teks: `Meminta tetangga yang bekerja di kelurahan melaporkan pesan itu, lalu menyimpan tangkapan layarnya sebagai bukti.` },
          { label: 'D', teks: `Datang ke alamat itu malam ini bersama beberapa warga untuk menghadang kerumunan, lalu menyuruh mereka bubar.` },
          { label: 'E', teks: `Datang ke kepolisian setempat membawa tangkapan layar pesan itu, lalu menyimpan salinannya di tempat aman.` },
        ],
        kunci: 'B',
        pembahasan: `Konsep yang digunakan: Respons warga terhadap ajakan kekerasan yang menyebut sasaran, tempat, dan waktu, yaitu melapor kepada pihak berwenang dan tidak menghadapinya sendiri.
Kata kunci: pesan berantai, alamat rumah kontrakan, warga pendatang, mengusir secara paksa, tiga jam lagi, ketua RT.
Opsi B (5 poin) paling tepat karena pesan itu menyebut alamat dan waktu berkumpul malam ini untuk mengusir penghuninya, sehingga ancaman terhadap warga pendatang bersifat spesifik dan dekat. Laporan kepada kepolisian beserta tangkapan layar membuka penanganan resmi, sedangkan ketua RT yang dihubungi lewat telepon dapat memberi tahu warga dan penghuni rumah.
Pembahasan opsi lain:
A (2 poin) meneruskan pesan yang menyebut alamat rumah warga pendatang menambah jumlah orang yang membaca ajakan berkumpul dan mengusir penghuninya. Peringatan terhadap pengirim tidak melindungi penghuni rumah dan tidak melibatkan pihak yang dapat bertindak malam ini.
C (3 poin) tetangga yang bekerja di kelurahan dapat meneruskan laporan, dan tangkapan layar tetap tersimpan. Namun penghuni rumah kontrakan warga pendatang bergantung pada orang lain yang belum tentu bertindak sebelum warga berkumpul malam ini, padahal Anda dapat melapor sendiri.
D (1 poin) datang bersama warga lain ke alamat itu untuk menghadang kerumunan menempatkan Anda berhadapan dengan orang yang berniat mengusir penghuninya. Perintah bubar tanpa petugas dapat memicu kekerasan malam ini.
E (4 poin) datang ke kepolisian membawa tangkapan layar membuka penanganan resmi atas ajakan mengusir penghuni rumah. Namun ketua RT yang dapat dihubungi lewat telepon tidak diberi tahu, sehingga warga dan penghuni rumah belum mendapat peringatan dari lingkungan.
Cara cepat: Perhatikan seberapa dekat waktu kejadian dan siapa yang dapat bertindak paling cepat dari tempat Anda.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      // tkp-kasus-ar-18 · kasus orisinal data/tkp-kasus (bank TKP generator)
      {
        nomor: 43,
        lesson: 'Anti Radikalisme',
        tipe: 'skala',
        pertanyaan: `Anda penghubung kelurahan dengan paguyuban warga untuk rencana pembangunan pos layanan. Paguyuban mengirim surat keberatan yang memuat alasan sah, yaitu pos akan mengurangi lahan parkir warga. Namun satu kalimat di surat itu menyatakan warga akan menutup paksa lokasi dengan massa pada Senin pagi bila rencana tidak dibatalkan. Pengamanan lokasi diatur bersama aparat keamanan setempat. Keputusan rencana ada di tangan lurah, dan Anda hanya dapat memberi usulan. Tindakan Anda yang paling tepat adalah ...`,
        opsi: [
          { label: 'A', teks: `Menyampaikan alasan keberatan dan kalimat ancaman itu kepada lurah, lalu mengusulkan peninjauan ulang lokasi pos.` },
          { label: 'B', teks: `Memberi tahu pengurus paguyuban bahwa rencana akan dibatalkan, lalu meminta mereka tidak menutup lokasi.` },
          { label: 'C', teks: `Menyebut paguyuban warga itu kelompok pengacau dalam laporan kepada lurah, lalu mengusulkan suratnya diabaikan.` },
          { label: 'D', teks: `Mengundang pengurus paguyuban warga bertemu di kelurahan membahas keberatan, lalu melaporkan kalimat ancaman itu kepada lurah.` },
          { label: 'E', teks: `Melaporkan ancaman itu kepada aparat keamanan, lalu menyampaikan keberatan sah warga dan usul peninjauan ulang kepada lurah.` },
        ],
        kunci: 'E',
        pembahasan: `Konsep yang digunakan: Membedakan keberatan warga yang sah dari ancaman pemaksaan dalam satu surat, dan menangani keduanya menurut risiko dan wewenang.
Kata kunci: surat keberatan, lahan parkir warga, alasan sah, menutup paksa dengan massa, Senin pagi, aparat keamanan.
Opsi E (5 poin) paling tepat karena kalimat ancaman menutup paksa lokasi dengan massa pada Senin pagi memuat pemaksaan, sehingga dilaporkan langsung kepada aparat keamanan yang mengatur pengamanan lokasi. Karena Anda hanya dapat memberi usulan, alasan lahan parkir yang sah dan usul peninjauan ulang disampaikan kepada lurah yang memutuskan, sehingga keberatan warga tidak hilang di balik ancaman itu.
Pembahasan opsi lain:
A (4 poin) alasan lahan parkir yang sah dan kalimat ancaman menutup paksa lokasi dengan massa pada Senin pagi sampai kepada lurah, dan peninjauan lokasi dapat meredakan keberatan. Namun aparat keamanan yang mengatur pengamanan lokasi tidak diberi tahu, sehingga perlindungan lokasi bergantung pada lurah.
B (2 poin) keputusan rencana ada di tangan lurah, sehingga memberi tahu paguyuban bahwa rencana akan dibatalkan adalah janji yang tidak dapat Anda penuhi. Kalimat ancaman menutup lokasi dengan massa juga tidak dilaporkan.
C (1 poin) menyebut paguyuban kelompok pengacau dari satu kalimat ancaman mengabaikan alasan lahan parkir yang sah. Mengusulkan surat diabaikan menutup jalan dialog dan membuat keberatan warga tidak pernah ditinjau.
D (3 poin) mengundang pengurus paguyuban membahas keberatan membuka dialog tentang lahan parkir. Namun kalimat ancaman menutup lokasi dengan massa pada Senin pagi baru dilaporkan kepada lurah setelah pertemuan, sehingga pelaporan ancaman tertunda dan aparat keamanan belum diberi tahu.
Cara cepat: Perhatikan bagian surat yang berupa pendapat dan bagian yang berupa pemaksaan, lalu waktu yang tersisa.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tkp-kasus-ar-21 · kasus orisinal data/tkp-kasus (bank TKP generator)
      {
        nomor: 44,
        lesson: 'Anti Radikalisme',
        tipe: 'skala',
        pertanyaan: `Anda pimpinan unit yang memimpin rapat penyusunan tim proyek tahunan. Rapat itu dihadiri dua belas anggota tim. Mayoritas anggota mengusulkan seorang rekan tidak diikutkan karena ia aktif di sebuah komunitas yang dianggap kurang cocok dengan budaya kerja tim. Penilaian kinerja rekan itu tercatat baik, dan tidak ada laporan pelanggaran tentangnya. Anda berwenang menetapkan susunan tim. Beberapa anggota mendukung usulan itu karena merasa lebih nyaman bekerja bersama. Keputusan Anda yang paling tepat adalah ...`,
        opsi: [
          { label: 'A', teks: `Menetapkan susunan tim berdasarkan kinerja, lalu menegaskan bahwa keanggotaan komunitas bukan kriteria.` },
          { label: 'B', teks: `Memasukkan rekan itu ke tim berdasarkan kinerjanya, lalu membahas keberatan anggota secara pribadi satu per satu.` },
          { label: 'C', teks: `Meminta pimpinan di atas Anda memutuskan susunan tim, lalu menjalankan keputusan tersebut.` },
          { label: 'D', teks: `Menyerahkan susunan tim kepada hasil pemungutan suara anggota, lalu mencatat hasilnya sebagai keputusan rapat.` },
          { label: 'E', teks: `Menyetujui usulan mayoritas anggota itu, lalu meminta rekan tersebut mengundurkan diri dari proyek tahunan.` },
        ],
        kunci: 'A',
        pembahasan: `Konsep yang digunakan: Perlindungan hak seorang anggota dalam keputusan mayoritas yang berbasis identitas komunitas, dan pengembalian keputusan pada kriteria pekerjaan.
Kata kunci: usulan mayoritas, aktif di komunitas, budaya kerja tim, kinerja tercatat baik, tanpa laporan pelanggaran, susunan tim.
Opsi A (5 poin) paling tepat karena kinerja rekan itu tercatat baik dan tidak ada laporan pelanggaran, sehingga keanggotaan di komunitas bukan dasar yang relevan menyusun tim. Anda berwenang menetapkan susunan tim, dan penegasan di depan dua belas anggota mengembalikan keputusan pada kriteria kinerja.
Pembahasan opsi lain:
B (4 poin) memasukkan rekan itu berdasarkan kinerja menjaga haknya, dan pembicaraan pribadi dapat meredakan keberatan anggota. Namun kriteria penyusunan tim tidak dinyatakan kepada rapat yang dihadiri dua belas anggota, sehingga usulan serupa dapat muncul kembali terhadap anggota lain.
C (3 poin) pimpinan di atas Anda dapat memutuskan berdasarkan kinerja rekan itu yang tercatat baik. Namun Anda berwenang menetapkan susunan tim, dan penyerahan itu membiarkan usulan mayoritas karena komunitas belum dijawab di rapat.
D (2 poin) menyerahkan susunan tim kepada pemungutan suara melepaskan wewenang Anda menetapkan susunan tim. Mayoritas anggota yang sudah mengusulkan menyingkirkan rekan itu menentukan nasibnya, padahal kinerjanya tercatat baik.
E (1 poin) menyetujui usulan mayoritas dan meminta rekan itu mengundurkan diri menyingkirkannya dari proyek karena komunitasnya, padahal kinerjanya tercatat baik dan tidak ada laporan pelanggaran. Hak rekan itu atas kesempatan berkontribusi tertutup.
Cara cepat: Perhatikan hal apa yang berkaitan dengan pekerjaan dan hal apa yang hanya soal kenyamanan sebagian orang.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      // tkp-kasus-ar-20 · kasus orisinal data/tkp-kasus (bank TKP generator)
      {
        nomor: 45,
        lesson: 'Anti Radikalisme',
        tipe: 'skala',
        pertanyaan: `Anda penghubung dinas sosial dengan relawan di posko bantuan banjir. Pembagian paket dilakukan menurut daftar dinas yang disusun dari tingkat kerusakan rumah. Sekelompok warga setempat tiba-tiba menghadang penerima dari kampung lain dan menuntut paket diberikan lebih dahulu kepada warga sekampung. Antrean berhenti hampir setengah jam dan suasana mulai tegang. Anda hanya dapat mengusulkan cara pembagian, sedangkan komandan posko berada di tenda dan memutuskan setelah mendengar usulan. Apa langkah Anda yang paling tepat?`,
        opsi: [
          { label: 'A', teks: `Menyarankan agar pembagian dilanjutkan dengan pengawalan petugas, lalu mencatat penghadangan itu sebagai laporan.` },
          { label: 'B', teks: `Meminta komandan posko menghubungi dinas untuk memutuskan, lalu menyarankan pembagian dilanjutkan sesuai jawaban dinas.` },
          { label: 'C', teks: `Mengusulkan agar pembagian paket dihentikan hari ini, lalu meminta penerima dari kampung lain kembali besok pagi.` },
          { label: 'D', teks: `Mengusulkan komandan posko menjelaskan dasar daftar kepada perwakilan mereka, lalu mengusulkan pembagian dilanjutkan dengan pengawalan.` },
          { label: 'E', teks: `Memberikan paket bantuan kepada warga sekampung lebih dahulu, lalu menyusun ulang daftar penerima di tempat.` },
        ],
        kunci: 'D',
        pembahasan: `Konsep yang digunakan: Memulihkan layanan bantuan yang terhenti oleh penolakan berbasis asal kampung, dengan tetap memakai dasar yang adil dan menghormati batas peran penghubung.
Kata kunci: posko bantuan banjir, daftar dinas, tingkat kerusakan rumah, menghadang penerima, antrean berhenti setengah jam, komandan posko.
Opsi D (5 poin) paling tepat karena daftar dinas disusun menurut kerusakan rumah, sehingga penjelasan dasarnya kepada perwakilan warga menjawab tuntutan tanpa mengubah daftar. Karena Anda hanya mengusulkan dan komandan posko yang memutuskan, usulan melanjutkan pembagian dengan pengawalan memulihkan antrean yang berhenti hampir setengah jam.
Pembahasan opsi lain:
A (4 poin) saran melanjutkan pembagian dengan pengawalan petugas memulihkan layanan bagi penerima dari kampung lain, dan penghadangan tercatat. Namun warga setempat yang menghadang tidak mendengar dasar daftar menurut kerusakan rumah, sehingga penghadangan dapat terulang.
B (3 poin) menghubungi dinas dapat menguatkan dasar daftar. Namun antrean yang sudah berhenti hampir setengah jam tertahan lebih lama, padahal komandan posko dapat memutuskan cara pembagian setelah mendengar usulan sekarang.
C (2 poin) menghentikan pembagian hari ini membuat penerima dari kampung lain kembali besok dengan kebutuhan yang belum terpenuhi. Kerugian itu masih dapat dipulihkan, tetapi dasar daftar menurut kerusakan rumah tidak dijelaskan kepada warga setempat.
E (1 poin) memberikan paket kepada warga sekampung lebih dahulu menyimpang dari daftar dinas dan merugikan penerima yang kerusakannya lebih parah. Menyusun ulang daftar di tempat tidak dapat dipertanggungjawabkan oleh Anda yang hanya mengusulkan.
Cara cepat: Perhatikan siapa yang memegang keputusan di lokasi dan apa yang membuat tuntutan itu muncul.`,
        tingkat: 'sedang',
        status: 'draft',
      },
    ],
  },
];
