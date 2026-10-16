import type { Kelompok } from '@/lib/skema';

/**
 * Contoh soal TWK untuk SKD CPNS 2027, dari "JadiASN - Riset Seleksi CPNS 2027"
 * (Product Management, Oktober 2026), BAB V butir 5.1.
 *
 * Isinya 40 soal: 8 per materi (Nasionalisme, Integritas, Bela Negara, Pilar
 * Negara, Bahasa Negara), diurutkan seperti di riset. Nomor soal di sini
 * berurutan 1 sampai 40 di seluruh subtes; di riset nomornya mulai dari 1
 * lagi di tiap materi (Nasionalisme 1-8 = nomor 1-8, Integritas 1-8 = nomor
 * 9-16, Bela Negara 1-8 = nomor 17-24, Pilar Negara 1-8 = nomor 25-32,
 * Bahasa Negara 1-8 = nomor 33-40).
 *
 * Tingkat kesulitan mengikuti riset: Mudah, Sedang, Sulit, dan HOTS. Skema
 * hanya punya mudah/sedang/sulit, jadi soal HOTS ditulis 'sulit' dan kata
 * HOTS-nya ditaruh di baris pertama pembahasan.
 *
 * Teks disalin dari riset tanpa diringkas. Yang diubah hanya salah ketik yang
 * jelas: karateristik, berdualat, menunjukan, diantara, tanda hubung khusus,
 * dan dua kesalahan label opsi di pembahasan (Pilar Negara 8 dan Bela Negara 3).
 * Dua soal (Nasionalisme 4 dan Bahasa Negara 5) tidak punya pembahasan di
 * riset; pembahasannya diisi draf yang diberi tanda dan berstatus 'draft'.
 *
 * Bela Negara 5 (nomor 21) memakai teks soal, opsi, dan kunci yang sama dengan
 * Bela Negara 1 (nomor 17); hanya pembahasan dan tingkatnya yang berbeda,
 * kemungkinan salah salin di riset. Soal itu diberi catatan tim di baris
 * pertama pembahasan dan berstatus 'draft' sampai ada pengganti dari tim riset.
 *
 * Status 'direview': belum ditinjau ulang untuk keperluan etalase.
 * TIU dan TKP tidak punya soal di riset (hanya merujuk PDF terpisah); contoh soalnya ada di
 * contoh-tiu.ts dan contoh-tkp.ts.
 */
export const contohTwk: Kelompok[] = [
  {
    stimulus: { judul: `Nasionalisme` },
    soal: [
      {
        nomor: 1,
        tipe: 'pg',
        pertanyaan: `Pada awal abad ke-20, muncul berbagai organisasi pergerakan di Indonesia seperti Budi Utomo, Sarekat Islam, dan Perhimpunan Indonesia. Puncak dari kesadaran untuk bersatu sebagai satu bangsa, satu tanah air, dan satu bahasa diwujudkan melalui sebuah peristiwa penting yang menjadi simbol kebangkitan nasionalisme Indonesia. Berdasarkan uraian tersebut, peristiwa yang menjadi tonggak lahirnya nasionalisme Indonesia adalah…`,
        opsi: [
          { label: 'A', teks: `Proklamasi Kemerdekaan` },
          { label: 'B', teks: `Kongres Pemuda II dan Sumpah Pemuda 1928` },
          { label: 'C', teks: `Reformasi 1998` },
          { label: 'D', teks: `Pembentukan BPUPKI` },
          { label: 'E', teks: `Gerakan Non-Blok` },
        ],
        kunci: 'B',
        pembahasan: `Konsep: Kebangkitan nasional dan Sumpah Pemuda 1928
Kata Kunci: Kongres Pemuda II, Sumpah Pemuda, persatuan bangsa, nasionalisme, kebangkitan nasional

Pada awal abad ke-20, muncul berbagai organisasi pergerakan nasional seperti Budi Utomo, Sarekat Islam, dan Perhimpunan Indonesia yang menandai kebangkitan kesadaran nasional. Puncak dari kesadaran untuk bersatu sebagai satu bangsa, satu tanah air, dan satu bahasa diwujudkan dalam Kongres Pemuda II pada tahun 1928, yang melahirkan Sumpah Pemuda. Peristiwa ini menjadi tonggak penting lahirnya nasionalisme Indonesia, karena mempersatukan berbagai suku, agama, dan daerah dalam semangat kebangsaan yang sama.

Pembahasan Opsi Salah:
Opsi A salah, karena Proklamasi Kemerdekaan merupakan puncak perjuangan nasionalisme, bukan awal kebangkitannya.
Opsi C salah, karena Reformasi 1998 berhubungan dengan pembaruan sistem pemerintahan, bukan lahirnya nasionalisme.
Opsi D salah, karena BPUPKI dibentuk menjelang kemerdekaan untuk menyusun dasar negara, bukan simbol awal nasionalisme.
Opsi E salah, karena Gerakan Non-Blok adalah kerja sama internasional, bukan peristiwa kebangkitan nasional Indonesia.

Carcep:
Kongres Pemuda II tahun 1928 yang menghasilkan Sumpah Pemuda menjadi tonggak lahirnya nasionalisme Indonesia, karena menegaskan tekad persatuan dalam satu bangsa, satu tanah air, dan satu bahasa Indonesia.`,
        tingkat: 'mudah',
        status: 'direview',
      },
      {
        nomor: 2,
        tipe: 'pg',
        pertanyaan: `Penghargaan terhadap jasa pahlawan mencerminkan sikap nasionalisme yang menempatkan sejarah dan pengorbanan para pendahulu sebagai teladan dalam membangun bangsa. Sikap ini tidak hanya mengenang masa lalu, tetapi juga membentuk identitas dan karakter bangsa. Pernyataan “Bangsa yang besar adalah bangsa yang menghargai jasa Pahlawannya” memiliki makna bahwa…`,
        opsi: [
          { label: 'A', teks: `Pahlawan harus dijadikan panutan semata` },
          { label: 'B', teks: `Penghargaan terhadap sejarah memperkuat nasionalisme` },
          { label: 'C', teks: `Penghargaan pahlawan hanya tugas pemerintah` },
          { label: 'D', teks: `Setiap generasi wajib mengulang perjuangan fisik` },
          { label: 'E', teks: `Peringatan hari pahlawan bersifat simbolis` },
        ],
        kunci: 'B',
        pembahasan: `Konsep: Nasionalisme
Kata Kunci: penghargaan, jasa pahlawan, identitas bangsa, nasionalisme

Pembahasan:
Penghargaan terhadap jasa pahlawan memperkuat rasa nasionalisme karena menempatkan sejarah dan pengorbanan para pendahulu sebagai teladan dalam membangun bangsa. Dengan menghargai pahlawan, masyarakat belajar menghormati nilai perjuangan dan menumbuhkan identitas serta karakter kebangsaan.

Pembahasan Opsi Salah:
Opsi A salah karena pahlawan bukan sekadar panutan, tetapi juga penguat nilai nasionalisme.
Opsi C salah karena penghargaan terhadap pahlawan bukan hanya tugas pemerintah, tetapi tanggung jawab seluruh warga.
Opsi D salah karena bukan berarti generasi sekarang harus mengulang perjuangan fisik, melainkan meneladani semangatnya.
Opsi E salah karena peringatan hari pahlawan lebih dari simbol, memiliki fungsi edukatif dan pembentukan karakter.

Cara cepat: Menghargai jasa pahlawan berarti menjaga ingatan kolektif bangsa dan memperkuat jati diri nasional, sehingga generasi berikutnya memiliki arah dan nilai dalam membangun Indonesia.`,
        tingkat: 'mudah',
        status: 'direview',
      },
      {
        nomor: 3,
        tipe: 'pg',
        pertanyaan: `Indonesia dikenal sebagai negara multikultural dengan ratusan suku, agama, dan bahasa daerah. Tantangan nasionalisme di era modern adalah menjaga persatuan di tengah keberagaman tersebut. Cara paling tepat untuk memperkuat nasionalisme multikultural di lingkungan masyarakat adalah…`,
        opsi: [
          { label: 'A', teks: `Mengutamakan budaya suku mayoritas sebagai identitas nasional` },
          { label: 'B', teks: `Menyeragamkan seluruh budaya daerah agar tidak ada perbedaan mencolok` },
          { label: 'C', teks: `Menghargai dan melestarikan perbedaan sebagai kekayaan bangsa yang memperkuat persatuan` },
          { label: 'D', teks: `Membatasi interaksi antar etnis agar menghindari konflik` },
          { label: 'E', teks: `Menghapus bahasa daerah demi mempermudah komunikasi nasional` },
        ],
        kunci: 'C',
        pembahasan: `Konsep yang digunakan: Nasionalisme multikultural
Kata Kunci: Keberagaman, Toleransi, Persatuan

Nasionalisme di negara multikultural diwujudkan melalui penghargaan terhadap perbedaan yang ada. Menghormati keberagaman dan menjadikannya sumber kekuatan bangsa merupakan kunci menjaga persatuan Indonesia.

Alasan opsi lain salah:
Opsi A salah karena menimbulkan diskriminasi.
Opsi B salah karena menyeragamkan berarti meniadakan keragaman.
Opsi D salah karena justru memperlebar jarak sosial.
Opsi E salah karena bahasa daerah adalah identitas budaya.

Tips & Trick :
Nasionalisme multikultural sama dengan Bhinneka Tunggal Ika, berbeda tapi tetap satu.`,
        tingkat: 'sedang',
        status: 'direview',
      },
      {
        nomor: 4,
        tipe: 'pg',
        pertanyaan: `Beberapa konten viral menunjukkan bahwa media sosial kerap menjadi arena konflik SARA (Suku, Agama, Ras dan Antar-golongan) yang diduga akan melemahkan persatuan bangsa. Tindakan yang paling tepat untuk memperkuat nasionalisme dalam situasi ini adalah…`,
        opsi: [
          { label: 'A', teks: `Mengabaikan semua konten yang memicu konflik agar tidak muncul di timeline` },
          { label: 'B', teks: `Membalas konten provokatif dengan konten sejenis agar tingkatan engagement naik` },
          { label: 'C', teks: `Membuat sensor ketat terhadap seluruh media sosial agar bebas konflik` },
          { label: 'D', teks: `Menoleransi komentar kebencian sebagai bagian dari kebebasan berekspresi` },
          { label: 'E', teks: `Mengedukasi diri agar memahami dampak negatif ujaran kebencian terhadap persatuan` },
        ],
        kunci: 'E',
        pembahasan: `[Draf tim: pembahasan soal ini belum ada di dokumen riset sumber. Teks di bawah disusun dari isi soal dan perlu ditinjau sebelum dipakai.]

Konsep: Nasionalisme di era digital, menjaga persatuan dari ujaran kebencian dan konflik SARA
Kata Kunci: media sosial, konflik SARA, ujaran kebencian, persatuan bangsa, nasionalisme

Konten viral yang memicu konflik SARA di media sosial dapat melemahkan persatuan bangsa. Tindakan yang paling tepat untuk memperkuat nasionalisme adalah membangun pemahaman, yaitu mengedukasi diri agar memahami dampak negatif ujaran kebencian terhadap persatuan, sehingga seseorang tidak ikut menyebarkan atau terprovokasi dan dapat menjadi teladan di lingkungannya.

Pembahasan Opsi Salah:
Opsi A salah, karena mengabaikan konten yang memicu konflik hanya menghindar dan tidak memperkuat nasionalisme.
Opsi B salah, karena membalas konten provokatif dengan konten sejenis justru memperluas konflik demi engagement.
Opsi C salah, karena sensor ketat terhadap seluruh media sosial berlebihan dan membatasi kebebasan yang sah.
Opsi D salah, karena menoleransi komentar kebencian berarti membiarkan perpecahan terjadi.

Carcep:
Untuk soal nasionalisme di media sosial, pilih tindakan yang membangun pemahaman dan menjaga persatuan, bukan yang mengabaikan, membalas dengan kebencian, membatasi secara berlebihan, atau membiarkan.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 5,
        tipe: 'pg',
        pertanyaan: `Sebuah survei sekolah menemukan: 40% siswa bangga memakai batik saat acara resmi; 65% aktif ikut upacara; 72% mampu menulis bahasa Indonesia baku; namun 58% pernah menyebarkan tautan berita yang kemudian terbukti hoaks. Intervensi paling prioritas untuk memperkuat identitas nasional sekaligus menutup celah utama pada data adalah …`,
        opsi: [
          { label: 'A', teks: `Kelas etika bermedia dan cek fakta terintegrasi dalam pelajaran bahasa Indonesia.` },
          { label: 'B', teks: `Wajib batik harian untuk seluruh siswa selama sebulan.` },
          { label: 'C', teks: `Penambahan jam upacara bendera menjadi dua kali seminggu.` },
          { label: 'D', teks: `Lomba pidato bahasa daerah agar siswa mencintai budaya lokal.` },
          { label: 'E', teks: `Sosialisasi seremonial tentang sejarah Sumpah Pemuda.` },
        ],
        kunci: 'A',
        pembahasan: `Dari data survei, tiga aspek identitas nasional sudah relatif kuat: penggunaan batik (40%), keikutsertaan upacara (65%), dan kemampuan menulis bahasa Indonesia baku (72%). Celah terbesar justru ada pada perilaku digital: 58% siswa pernah menyebarkan hoaks. Untuk memperkuat identitas nasional secara relevan dan solutif, intervensi harus diarahkan pada penguatan literasi digital dan etika bermedia.

Mengintegrasikan cek fakta dan etika bermedia dalam pelajaran bahasa Indonesia tidak hanya memperbaiki kelemahan terbesar, tetapi juga memperkuat fungsi bahasa Indonesia dalam konteks modern.

Konsep: Identitas nasional dan literasi digital
Kata Kunci: hoaks, etika bermedia, bahasa Indonesia, intervensi relevan

Pembahasan Opsi Salah:
Opsi B salah karena masalah utama bukan pada frekuensi memakai batik, melainkan perilaku bermedia.
Opsi C salah karena upacara sudah tinggi partisipasinya dan tidak berkaitan langsung dengan penyebaran hoaks.
Opsi D salah karena kampanye budaya lokal tidak menyelesaikan persoalan literasi digital.
Opsi E salah karena sosialisasi seremonial bersifat pasif dan tidak menyentuh perilaku faktual.

Carcep: Penguatan identitas nasional di era digital bukan hanya soal simbol, tetapi kemampuan menyaring informasi agar tidak menjadi penyebar hoaks.`,
        tingkat: 'sulit',
        status: 'direview',
      },
      {
        nomor: 6,
        tipe: 'pg',
        pertanyaan: `Bangsa Indonesia memiliki karakteristik kebersamaan budaya, etnis, agama, adat istiadat, dan bahasa yang tersebar dari Sabang sampai Merauke. Perilaku yang sesuai dengan upaya menjaga kebhinekaan dalam bingkai persatuan dan kesatuan untuk menghadapi karakteristik tersebut adalah …`,
        opsi: [
          { label: 'A', teks: `Menggunakan bahasa dari daerah masing-masing` },
          { label: 'B', teks: `Bangga menggunakan pakaian-pakaian adat dari daerahnya` },
          { label: 'C', teks: `Menghormati adat istiadat budaya masyarakat di daerah` },
          { label: 'D', teks: `Menghindari kerja sama dengan orang lain yang berbeda etnis` },
          { label: 'E', teks: `Bersikap sopan terhadap orang lain yang berasal dari daerah yang sama` },
        ],
        kunci: 'C',
        pembahasan: `Konsep Soal: Pemahaman tentang perilaku menjaga kebhinekaan dalam bingkai persatuan dan kesatuan di tengah keberagaman budaya, etnis, agama, adat, dan bahasa di Indonesia
Kata Kunci : Kebhinekaan, Persatuan dan Kesatuan, Toleransi, Menghormati adat dan budaya lain

Menghormati adat istiadat budaya masyarakat di daerah. Pilihan ini mencerminkan sikap toleransi dan penghormatan terhadap keberagaman yang ada di Indonesia. Dengan menghormati adat istiadat dan budaya masyarakat di berbagai daerah, kita menunjukkan penghargaan terhadap kebhinekaan dan memperkuat persatuan dalam bingkai NKRI. Sikap ini membantu membangun kerukunan di tengah perbedaan, yang merupakan fondasi penting dalam menjaga persatuan bangsa.

Alasan Opsi Lain Yang Salah :
A. Menggunakan bahasa dari daerah masing-masing. Menggunakan bahasa daerah merupakan bentuk pelestarian budaya lokal, namun perilaku ini tidak secara langsung mencerminkan upaya menjaga persatuan dan kebhinekaan di tengah keberagaman. Lebih relevan jika bahasa tersebut digunakan bersama dengan Bahasa Indonesia sebagai bahasa pemersatu.
B. Bangga menggunakan pakaian-pakaian adat dari daerahnya. Kebanggaan terhadap pakaian adat menunjukkan rasa cinta terhadap budaya sendiri, tetapi ini tidak mencakup sikap menghargai perbedaan atau kebersamaan dengan orang lain dari budaya yang berbeda. Jadi, ini belum menunjukkan usaha menjaga kebhinekaan dalam bingkai persatuan.
D. Menghindari kerja sama dengan orang lain yang berbeda etnis. Pilihan ini bertentangan dengan semangat kebhinekaan dan persatuan. Menghindari kerja sama hanya karena perbedaan etnis menunjukkan sikap eksklusif dan diskriminatif yang dapat merusak persatuan bangsa.
E. Bersikap sopan terhadap orang lain yang berasal dari daerah yang sama. Sikap sopan kepada orang dari daerah yang sama adalah hal baik, tetapi tidak relevan dalam konteks menjaga kebhinekaan. Sikap menjaga kebhinekaan harus mencakup toleransi dan penghargaan terhadap orang-orang dari berbagai daerah, etnis, dan budaya yang berbeda.

Tips & Trik:
Jika soal membahas perbedaan budaya, agama, atau etnis, pilih jawaban yang mengandung kata “menghormati”, “menghargai”, atau “toleransi.” Ingat semboyan Bhinneka Tunggal Ika = Berbeda-beda tetapi tetap satu. Hindari pilihan yang bersifat eksklusif atau membeda-bedakan.`,
        tingkat: 'sulit',
        status: 'direview',
      },
      {
        nomor: 7,
        tipe: 'pg',
        pertanyaan: `Sebuah pemerintah daerah merancang kampanye “Cinta Produk Nusantara” dengan 4 kebijakan berikut:

(1) Kuota minimal 60% pengadaan pemda berasal dari UMKM lokal, dengan pengecualian jika mutu tak memenuhi standar nasional.
(2) Larangan total penggunaan istilah serapan asing pada materi promosi daerah.
(3) Inkubasi desain batik daerah bekerja sama dengan kampus untuk ekspor.
(4) Pelatihan cek fakta dan literasi digital bagi pelaku UMKM.

Kebijakan yang paling benar dengan nasionalisme rasional dan modern sekaligus adalah …`,
        opsi: [
          { label: 'A', teks: `(1) saja` },
          { label: 'B', teks: `(1) dan (3)` },
          { label: 'C', teks: `(2) dan (3)` },
          { label: 'D', teks: `(1), (3), dan (4)` },
          { label: 'E', teks: `(2), (3), dan (4)` },
        ],
        kunci: 'D',
        pembahasan: `Tingkat kesulitan: HOTS

Nasionalisme rasional-modern berarti mencintai produk dan budaya bangsa tanpa menutup diri dari inovasi, standar mutu, dan perkembangan global. Setiap kebijakan berikut diuji dengan kriteria itu:

(1) Mendukung UMKM lokal tetapi tetap membuka ruang jika mutu belum memenuhi standar nasional. Ini mencerminkan nasionalisme rasional karena tidak memaksakan produk lokal tanpa kualitas.
(2) Larangan total istilah asing menunjukkan sikap kaku dan tertutup, tidak sesuai dengan nasionalisme modern yang selektif dan adaptif.
(3) Kolaborasi desain batik dengan kampus untuk ekspor mencerminkan inovasi, pengembangan budaya, dan keterbukaan global.
(4) Literasi digital dan cek fakta memperkuat daya saing dan mencegah manipulasi di era global.

Kebijakan yang memenuhi prinsip nasionalisme rasional dan modern adalah (1), (3), dan (4).

Konsep: Nasionalisme rasional-modern
Kata Kunci: mutu, inovasi, literasi digital, ekspor, keterbukaan

Pembahasan Opsi Salah:
Opsi A salah karena hanya memasukkan aspek mutu, tidak menyentuh inovasi dan modernisasi.
Opsi B salah karena belum mencakup penguatan kapasitas digital UMKM.
Opsi C salah karena poin (2) bersifat tertutup dan tidak rasional.
Opsi E salah karena memasukkan poin (2) yang bertentangan dengan keterbukaan modern.

Carcep: Nasionalisme saat ini bukan soal menolak asing, tetapi memastikan produk lokal naik kelas lewat mutu, inovasi, dan kesiapan menghadapi dunia global.`,
        tingkat: 'sulit',
        status: 'direview',
      },
      {
        nomor: 8,
        tipe: 'pg',
        pertanyaan: `Pada masa pergerakan nasional, organisasi Jong Sumatera Bond turut berperan dalam memperkuat rasa persatuan di antara para pemuda dari berbagai daerah di Sumatera. Nilai nasionalisme yang dapat diteladani dari semangat para anggotanya untuk diterapkan oleh generasi muda masa kini adalah …`,
        opsi: [
          { label: 'A', teks: `Menonjolkan identitas daerah masing-masing sebagai bentuk kebanggaan lokal` },
          { label: 'B', teks: `Mengutamakan kerja sama lintas suku dan budaya demi kemajuan bangsa` },
          { label: 'C', teks: `Memperjuangkan kepentingan kelompok sendiri agar lebih dikenal secara nasional` },
          { label: 'D', teks: `Menghindari keterlibatan dalam kegiatan sosial yang bersifat lintas daerah` },
          { label: 'E', teks: `Membangun organisasi yang hanya berfokus pada kebudayaan daerah tertentu` },
        ],
        kunci: 'B',
        pembahasan: `Tingkat kesulitan: HOTS

Organisasi Jong Sumatera Bond menunjukkan semangat persatuan dan kerja sama antarpemuda dari berbagai daerah. Nilai nasionalisme yang dapat diteladani adalah kemampuan mengutamakan kepentingan bangsa dan kerja sama lintas suku atau budaya untuk mencapai tujuan bersama, bukan sekadar menonjolkan kepentingan daerah sendiri. Opsi B mencerminkan sikap ini, yang relevan diterapkan oleh generasi muda masa kini untuk memperkuat persatuan dan kemajuan bangsa.

Konsep: Nasionalisme dan Persatuan Bangsa
Kata Kunci: kerja sama, lintas suku, lintas budaya, kepentingan bangsa, persatuan

Pembahasan Opsi Salah:
Opsi A salah karena menonjolkan identitas daerah saja dapat menimbulkan fragmentasi dan mengurangi rasa persatuan nasional.
Opsi C salah karena memperjuangkan kepentingan kelompok sendiri mengabaikan nilai kebersamaan dan nasionalisme.
Opsi D salah karena menghindari keterlibatan sosial lintas daerah menunjukkan sikap apatis, bukan nasionalisme.
Opsi E salah karena fokus hanya pada kebudayaan daerah tertentu dapat menimbulkan eksklusivitas dan mengurangi semangat persatuan.

Carcep: Nasionalisme generasi muda ditunjukkan melalui kerja sama lintas suku dan budaya, mengutamakan kepentingan bangsa di atas kepentingan daerah atau kelompok.`,
        tingkat: 'sulit',
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Integritas` },
    soal: [
      {
        nomor: 9,
        tipe: 'pg',
        pertanyaan: `Dalam pertemuan pertama TKR tanggal 12 November 1945, Jenderal Soedirman terpilih menjadi Panglima Angkatan Perang. Jenderal Soedirman unggul dari seniornya Oerip Soemohardjo. Namun, sebagai bentuk hormatnya, Jenderal Soedirman menyerahkan jabatan tersebut kepada Oerip Soemohardjo. Selain tidak disetujui oleh peserta pertemuan, Oerip Soemohardjo juga tidak ingin menerima jabatan tersebut. Ia menyetujui Jenderal Soedirman sebagai pucuk pimpinan pasukan perang Indonesia sesuai hasil pertemuan tersebut. Ia berpendirian bahwa keharmonisan kalangan tentara lebih utama dari jabatan yang diemban. Wujud sikap integritas kedua tokoh militer tersebut terlihat pada …`,
        opsi: [
          { label: 'A', teks: `Penghormatan terhadap jasa dan perjuangan yang dilakukan oleh kalangan senior.` },
          { label: 'B', teks: `Menghargai dan menjunjung tinggi hasil musyawarah sesuai mufakat.` },
          { label: 'C', teks: `Mengedepankan kepentingan bangsa dan negara dengan mendukung keharmonisan internal perangkat negara.` },
          { label: 'D', teks: `Mendukung pimpinan yang bijak dan kharismatik dalam organisasi perang.` },
          { label: 'E', teks: `Semangat kebersamaan dalam membangun bangsa dan tetap menjaga persatuan dan kesatuan bangsa.` },
        ],
        kunci: 'C',
        pembahasan: `Konsep Soal : Soal ini menguji pemahaman tentang nilai integritas dalam konteks perjuangan tokoh bangsa. Integritas bukan sekadar kejujuran, tetapi juga konsistensi antara ucapan, hati, dan tindakan yang berpihak pada kepentingan bangsa di atas kepentingan pribadi.

Kata Kunci : Tidak ingin menerima jabatan, Keharmonisan kalangan tentara lebih utama, Sebagai bentuk hormat, Menunjukkan bahwa keduanya menomorsatukan kepentingan bersama (bangsa dan persatuan) daripada ambisi pribadi terhadap jabatan.

Jenderal Soedirman tidak ambisi terhadap jabatan dan menghormati seniornya. Oerip Soemohardjo tidak ingin menyalahi hasil keputusan musyawarah dan lebih mementingkan keharmonisan dalam tubuh tentara. Keduanya menunjukkan integritas tinggi, yakni mengutamakan kepentingan bangsa dan keharmonisan organisasi militer di atas ego pribadi.

Alasan Opsi Lain Salah:
Opsi A salah karena Penghormatan terhadap jasa dan perjuangan yang dilakukan oleh kalangan senior tidak mencakup sikap Oerip Soemohardjo. Jadi belum mewakili “kedua tokoh”.
Opsi B salah karena Menghargai dan menjunjung tinggi hasil musyawarah sesuai mufakat lebih menggambarkan Oerip Soemohardjo saja, bukan keduanya.
Opsi D salah karena Mendukung pimpinan yang bijak dan kharismatik dalam organisasi perang terlalu menekankan pada karakter pemimpin, bukan pada nilai integritas pribadi.
Opsi E salah karena Semangat kebersamaan dalam membangun bangsa dan tetap menjaga persatuan dan kesatuan bangsa tidak menonjolkan aspek integritas dalam konteks pengambilan keputusan dan moralitas individu.

Tips & Trick :
Cari kata kunci : Biasanya soal integritas mengandung kata seperti:“menolak jabatan”, “tidak mementingkan diri”, “konsisten”, “jujur”, “setia pada hasil keputusan”, atau “demi kepentingan bangsa” Artinya integritas.

Rumus cepat mengenali soal integritas : Konsistensi + Kejujuran + Kepentingan umum di atas kepentingan pribadi`,
        tingkat: 'mudah',
        status: 'direview',
      },
      {
        nomor: 10,
        tipe: 'pg',
        pertanyaan: `Pada tahun 1945, Ir. Soekarno dengan tegas menyampaikan pidato “Lahirnya Pancasila” yang menjadi dasar negara Indonesia. Dalam pidatonya, beliau menunjukkan keberanian dan integritas tinggi dalam memimpin bangsa menuju kemerdekaan meskipun menghadapi berbagai tantangan besar, baik dari dalam maupun luar negeri.
Nilai integritas yang dapat diambil dan diterapkan dalam kehidupan berbangsa dan bernegara adalah…`,
        opsi: [
          { label: 'A', teks: `Menyerahkan segala tanggung jawab kepada pihak yang lebih berwenang` },
          { label: 'B', teks: `Berani bersikap tegas meskipun di bawah tekanan demi kebenaran` },
          { label: 'C', teks: `Mengedepankan emosi untuk memperjuangkan keadilan` },
          { label: 'D', teks: `Menunggu arahan dari pihak lain sebelum bertindak` },
          { label: 'E', teks: `Melakukan kompromi dengan pihak yang merugikan bangsa demi keamanan` },
        ],
        kunci: 'B',
        pembahasan: `Konsep yang digunakan : Nilai integritas dan keteguhan sikap dalam perjuangan kemerdekaan
Kata Kunci : Keberanian, Ketegasan, Kebenaran, Konsistensi
Ir. Soekarno menunjukkan integritas tinggi dengan tetap teguh memperjuangkan kemerdekaan meskipun berada di bawah tekanan penjajah dan tantangan politik. Integritas berarti kesesuaian antara pikiran, perkataan, dan perbuatan yang berpihak pada kebenaran dan nilai moral, meskipun berisiko.

Alasan opsi lain salah :
Opsi A salah karena menyerahkan tanggung jawab kepada pihak lain menunjukkan sikap pasif, bukan integritas.
Opsi C salah karena integritas menuntut rasionalitas, bukan tindakan emosional.
Opsi D salah karena menunggu arahan bertentangan dengan sifat tegas dan berani.
Opsi E salah karena kompromi terhadap hal yang merugikan bangsa berarti mengorbankan prinsip kebenaran.

Tips & Trick :
Ingat, integritas berarti berani memegang kebenaran dan nilai moral meskipun dalam tekanan besar.`,
        tingkat: 'mudah',
        status: 'direview',
      },
      {
        nomor: 11,
        tipe: 'pg',
        pertanyaan: `Ketika R.A. Kartini memperjuangkan hak pendidikan bagi perempuan pada masa penjajahan, ia menghadapi banyak penolakan dari lingkungan yang masih berpandangan sempit tentang peran wanita. Namun, ia tetap teguh memperjuangkan cita-citanya dengan cara yang santun dan penuh tanggung jawab.

Nilai yang dapat diteladani dari perjuangan R.A. Kartini tersebut adalah…`,
        opsi: [
          { label: 'A', teks: `Berjuang hanya jika mendapat dukungan dari masyarakat luas` },
          { label: 'B', teks: `Konsisten memperjuangkan kebenaran meskipun menghadapi tekanan dan penolakan` },
          { label: 'C', teks: `Menyesuaikan prinsip agar diterima oleh semua kalangan` },
          { label: 'D', teks: `Mengutamakan kepentingan pribadi agar tetap dihormati` },
          { label: 'E', teks: `Menghindari perdebatan dengan cara meninggalkan perjuangan` },
        ],
        kunci: 'B',
        pembahasan: `R.A. Kartini menunjukkan integritas dan keteguhan prinsip dalam memperjuangkan hak pendidikan bagi perempuan di tengah masyarakat yang masih berpandangan sempit. Ia tidak menyerah meskipun menghadapi tekanan sosial dan penolakan dari lingkungan sekitarnya. Tindakannya mencerminkan keberanian moral, konsistensi terhadap kebenaran, serta komitmen terhadap nilai keadilan dan kesetaraan. Integritas dalam perjuangan Kartini tampak dari kemampuannya memegang teguh keyakinan tanpa kehilangan kesantunan dan tanggung jawab moral, sehingga perjuangannya menjadi inspirasi bagi kemajuan bangsa, terutama dalam bidang pendidikan dan emansipasi wanita.

Konsep: Integritas dan Keteguhan dalam Memperjuangkan Kebenaran
Kata Kunci: konsisten, keberanian moral, keadilan, kesetaraan, tanggung jawab

Pembahasan Opsi Salah:
Opsi A salah karena perjuangan sejati tidak menunggu dukungan luas, melainkan berawal dari keyakinan pribadi terhadap kebenaran.
Opsi C salah karena menyesuaikan prinsip demi penerimaan umum menunjukkan ketidakteguhan moral dan lemahnya integritas.
Opsi D salah karena mengutamakan kepentingan pribadi justru bertentangan dengan semangat perjuangan Kartini yang berorientasi pada kemaslahatan masyarakat.
Opsi E salah karena meninggalkan perjuangan berarti mengabaikan tanggung jawab moral terhadap perubahan sosial yang diperjuangkan.

Carcep: Integritas tercermin dari keberanian untuk konsisten memperjuangkan nilai kebenaran dan keadilan, meskipun harus menghadapi tekanan dan penolakan dari lingkungan sekitar.`,
        tingkat: 'sedang',
        status: 'direview',
      },
      {
        nomor: 12,
        tipe: 'pg',
        pertanyaan: `Pada masa awal kemerdekaan, Sutan Sjahrir dikenal sebagai sosok pemimpin yang menjunjung tinggi integritas dalam diplomasi, terutama saat menghadapi Belanda di meja perundingan. Sikap integritas yang dapat diteladani dari beliau adalah…`,
        opsi: [
          { label: 'A', teks: `Menyembunyikan fakta agar posisi Indonesia tidak melemah di hadapan Belanda` },
          { label: 'B', teks: `Tetap jujur dan konsisten menyuarakan kebenaran meskipun posisinya sulit` },
          { label: 'C', teks: `Mengalah demi menjaga hubungan baik dengan pihak Belanda` },
          { label: 'D', teks: `Mengutamakan kepentingan kelompok politiknya` },
          { label: 'E', teks: `Menyerahkan seluruh keputusan pada pihak militer` },
        ],
        kunci: 'B',
        pembahasan: `Konsep yang digunakan : Integritas dalam diplomasi dan kepemimpinan moral
Kata Kunci : Kejujuran, Konsistensi, Keberanian Moral

Sjahrir dikenal sebagai tokoh yang berintegritas tinggi karena tetap berpegang pada nilai kejujuran dan idealisme bangsa Indonesia dalam diplomasi internasional. Ia menolak politik tipu daya, dan lebih memilih jalur diplomasi yang bermartabat untuk menunjukkan karakter bangsa yang beradab.

Alasan opsi lain salah :
Opsi A salah karena menyembunyikan fakta melanggar kejujuran.
Opsi C salah karena mengalah tanpa prinsip bukan bentuk integritas.
Opsi D salah karena integritas mendahulukan bangsa, bukan golongan.
Opsi E salah karena tanggung jawab pemimpin diplomasi tidak bisa dilepaskan.

Tips & Trick :
Diplomasi berintegritas berlandaskan moral dan kebenaran, bukan kepentingan jangka pendek.`,
        tingkat: 'sedang',
        status: 'direview',
      },
      {
        nomor: 13,
        tipe: 'pg',
        pertanyaan: `Pada masa pendudukan Jepang, Ir. Soekarno menunjukkan integritasnya dengan tetap memperjuangkan kepentingan bangsa Indonesia melalui berbagai organisasi bentukan Jepang, seperti Putera dan BPUPKI. Tindakan Soekarno tersebut mencerminkan bahwa…`,
        opsi: [
          { label: 'A', teks: `Integritas pemimpin ditunjukkan dengan mengikuti semua kebijakan pemerintah penjajah demi keselamatan bangsa` },
          { label: 'B', teks: `Kepemimpinan yang berintegritas berarti mampu memanfaatkan setiap peluang untuk kepentingan rakyat, tanpa mengkhianati tujuan kemerdekaan` },
          { label: 'C', teks: `Perjuangan kemerdekaan hanya bisa dilakukan melalui perlawanan bersenjata terhadap penjajah` },
          { label: 'D', teks: `Kerja sama dengan penjajah merupakan bentuk pengkhianatan terhadap bangsa sendiri` },
          { label: 'E', teks: `Pemimpin yang baik adalah yang menolak semua bentuk kerja sama dengan pihak asing` },
        ],
        kunci: 'B',
        pembahasan: `Konsep Soal : Menilai makna integritas nasional yang ditunjukkan oleh tokoh bangsa dalam menjaga komitmen terhadap tujuan kemerdekaan, meskipun berada dalam tekanan atau situasi sulit.

Kata Kunci : Ir. Soekarno, pendudukan Jepang, organisasi Putera dan BPUPKI, perjuangan kemerdekaan, konsistensi dan tanggung jawab.

Ir. Soekarno menunjukkan integritasnya melalui kemampuan menyesuaikan strategi perjuangan tanpa meninggalkan tujuan utama yaitu kemerdekaan Indonesia. Walaupun Jepang berusaha memanfaatkan pengaruh Soekarno untuk kepentingannya, beliau tetap menggunakan posisi tersebut untuk mempersiapkan kemerdekaan melalui wadah seperti BPUPKI yang kemudian melahirkan dasar negara.
Tindakan ini menunjukkan bahwa seorang pemimpin berintegritas mampu bersikap realistis, menggunakan peluang yang ada, namun tetap setia pada nilai dan tujuan bangsa.

Pilihan B paling tepat karena mencerminkan bahwa integritas berarti memanfaatkan setiap peluang untuk kepentingan rakyat tanpa mengkhianati prinsip perjuangan.

Alasan Opsi Lain yang Salah :
Opsi A Salah, karena Soekarno tidak sekadar mengikuti kebijakan penjajah, melainkan menggunakannya untuk kepentingan bangsa.
Opsi C Salah, karena perjuangan tidak selalu harus bersenjata; strategi diplomasi dan politik juga merupakan bentuk perjuangan yang berintegritas.
Opsi D Salah, karena kerja sama tidak selalu berarti pengkhianatan jika tujuannya untuk kemerdekaan.
Opsi E Salah, karena menolak semua bentuk kerja sama justru dapat menghambat strategi perjuangan yang cerdas dan adaptif.

Tips & Trick :
Jika soal menyinggung tokoh bangsa seperti Soekarno, Hatta, Ki Hajar Dewantara, atau Soetomo, perhatikan konteks perjuangannya.
Kata “integritas” berarti konsistensi antara nilai, prinsip, dan tindakan, meskipun dalam kondisi sulit.`,
        tingkat: 'sulit',
        status: 'direview',
      },
      {
        nomor: 14,
        tipe: 'pg',
        pertanyaan: `Pada 1948, Jenderal Sudirman dalam keadaan sakit paru-paru stadium lanjut ditawari Belanda perawatan terbaik di Eropa dengan syarat menghentikan perang gerilya dan mengakui Negara Indonesia Timur. Beliau menolak keras sambil tetap memimpin pasukan dari tandu. Integritas luar biasa ini paling mencerminkan pengamalan pilar negara berupa…`,
        opsi: [
          { label: 'A', teks: `Sila ke-2 Pancasila dan integritas total demi martabat serta kedaulatan NKRI` },
          { label: 'B', teks: `Kepentingan kesehatan pribadi di atas perjuangan kemerdekaan bangsa` },
          { label: 'C', teks: `Penerimaan tawaran Belanda demi kedamaian sementara di Jawa` },
          { label: 'D', teks: `Kesediaan berkhianat demi perawatan medis modern` },
          { label: 'E', teks: `Pengutamaan kenyamanan pribadi daripada tugas panglima` },
        ],
        kunci: 'A',
        pembahasan: `Konsep yang digunakan:
Integritas moral, martabat manusia, kedaulatan negara, komitmen pada kemerdekaan, nilai kemanusiaan.

Kata Kunci:
Integritas, martabat, kedaulatan, kemanusiaan, keteguhan perjuangan.

Penolakan Jenderal Sudirman terhadap tawaran Belanda, meski dalam keadaan sakit berat, menunjukkan integritas moral dan komitmen total terhadap martabat bangsa serta kedaulatan negara. Sikapnya mencerminkan pengamalan sila ke-2 Pancasila, yaitu menjunjung nilai kemanusiaan yang adil dan beradab, sekaligus menjaga kehormatan bangsa dengan tidak tunduk pada tawaran yang mengancam kemerdekaan. Keteguhannya memimpin perang dari tandu menunjukkan bahwa kepentingan bangsa dan nilai kemanusiaan ditempatkan di atas kepentingan pribadi.

Pembahasan opsi yang salah:
B. Mengutamakan kesehatan pribadi bertentangan dengan tindakan Sudirman yang justru mengutamakan bangsa.
C. Menerima tawaran Belanda tidak sejalan dengan perjuangannya mempertahankan kedaulatan.
D. Berkhianat demi perawatan medis modern berlawanan dengan integritas dan komitmen Sudirman.
E. Mengutamakan kenyamanan pribadi tidak sesuai dengan kenyataannya yang tetap memimpin perang dari tandu.`,
        tingkat: 'sulit',
        status: 'direview',
      },
      {
        nomor: 15,
        tipe: 'pg',
        pertanyaan: `Pasal 33 ayat (4) UUD 1945 menegaskan bahwa perekonomian nasional diselenggarakan berdasarkan demokrasi ekonomi dengan prinsip kebersamaan, efisiensi berkeadilan, berkelanjutan, berwawasan lingkungan, serta menjaga keseimbangan kemajuan dan kesatuan ekonomi nasional. Nilai integritas yang terkandung dalam pasal tersebut adalah…`,
        opsi: [
          { label: 'A', teks: `Negara wajib mengelola perekonomian dengan jujur, adil, dan bebas dari praktik korupsi.` },
          { label: 'B', teks: `Perekonomian dijalankan secara mandiri tanpa campur tangan negara lain.` },
          { label: 'C', teks: `Negara memberikan peluang yang sama bagi semua rakyat untuk berusaha.` },
          { label: 'D', teks: `Rakyat didorong untuk bekerja keras dan pantang menyerah dalam berwirausaha.` },
          { label: 'E', teks: `Pemerintah bertanggung jawab penuh atas keberhasilan usaha rakyat tanpa melibatkan pihak swasta.` },
        ],
        kunci: 'A',
        pembahasan: `Tingkat kesulitan: HOTS

Konsep: Integritas dalam pengelolaan negara = kejujuran, keadilan, bebas dari KKN, demi tercapainya demokrasi ekonomi sesuai UUD 1945.
Kata kunci: demokrasi ekonomi, efisiensi berkeadilan, berkelanjutan, integritas dalam pengelolaan ekonomi.

Pembahasan
Pasal ini menuntut pengelolaan ekonomi nasional dengan prinsip kebersamaan & keadilan → integritas tercermin dalam kejujuran & bebas KKN.

Opsi salah:
B: Kemandirian ekonomi penting, tapi bukan inti integritas.
C: Kesetaraan peluang benar, tapi lebih ke asas keadilan sosial.
D: Kerja keras = etos individu, bukan integritas negara.
E: Usaha rakyat tetap bisa melibatkan swasta, tidak hanya pemerintah.

Cara cepat: Cari opsi yang memuat “jujur, adil, bebas KKN” → inti nilai integritas.`,
        tingkat: 'sulit',
        status: 'direview',
      },
      {
        nomor: 16,
        tipe: 'pg',
        pertanyaan: `Pada tanggal 20 Mei 1908, Soetomo mendirikan organisasi "Budi Utomo" dan menjadi organisasi modern pertama yang ada di Indonesia. Budi Utomo bertujuan memajukan bangsa Indonesia menjadi bangsa yang bermartabat dan mempertinggi cita-cita kemanusiaan. Perjuangan yang dilakukan Soetomo melalui Budi Utomo dalam kerangka integritas menunjukkan makna bahwa…`,
        opsi: [
          { label: 'A', teks: `Organisasi modern menjadi faktor utama yang paling penting dan efektif untuk melakukan perlawanan terhadap penjajah` },
          { label: 'B', teks: `Perjuangan mencapai kemerdekaan dan cita-cita bersama lebih mudah dicapai jika terorganisir dengan baik dan terarah` },
          { label: 'C', teks: `Organisasi Budi Utomo merupakan organisasi modern pertama khusus untuk para bangsawan dan berpendidikan` },
          { label: 'D', teks: `Perlawanan terhadap pemerintah penjajahan Belanda tidak cukup hanya dengan menjalankan organisasi modern` },
          { label: 'E', teks: `Budi Utomo merupakan organisasi yang diinisiasi dan menjadi fokus oleh para dokter untuk kepentingan rakyat` },
        ],
        kunci: 'B',
        pembahasan: `Tingkat kesulitan: HOTS

Konsep Soal: Soal ini menguji pemahaman tentang nilai integritas dan semangat kebangsaan dalam perjuangan organisasi Budi Utomo sebagai tonggak lahirnya pergerakan nasional Indonesia.
Kata Kunci: Budi Utomo (1908), Organisasi modern pertama, Integritas & kebersamaan, Perjuangan terarah dan terorganisir

Organisasi Budi Utomo didirikan oleh Soetomo dan rekan-rekannya pada tanggal 20 Mei 1908 dengan tujuan untuk memajukan pendidikan, meningkatkan kesejahteraan, serta memperjuangkan hak-hak rakyat Indonesia di bawah penjajahan Belanda. Budi Utomo merupakan organisasi modern pertama di Indonesia yang berusaha mempersatukan kaum terpelajar untuk memperjuangkan cita-cita bersama dalam satu kerangka organisasi yang terstruktur.
Melalui organisasi ini, Soetomo dan anggota lainnya ingin menunjukkan bahwa perjuangan yang dilakukan dengan terorganisir akan lebih efektif dan terarah, memungkinkan mereka untuk mencapai tujuan bersama dengan lebih baik. Ini menunjukkan bahwa adanya suatu organisasi memungkinkan adanya pembagian tugas, struktur yang jelas, serta fokus yang terarah, sehingga perjuangan mereka dapat dilaksanakan dengan lebih efisien.
Pilihan B mencerminkan konsep ini, yaitu bahwa perjuangan mencapai kemerdekaan dan cita-cita bersama lebih mudah dicapai jika terorganisir dengan baik dan terarah.

Alasan Opsi Lain Yang Salah :
A. Menyatakan bahwa organisasi modern adalah faktor utama untuk melawan penjajah, namun Budi Utomo tidak secara langsung berjuang dengan cara melawan fisik atau kekuatan militer terhadap penjajah, melainkan berfokus pada pendidikan dan pengembangan masyarakat sehingga opsi A kurang tepat.
C. Menyatakan bahwa Budi Utomo hanya untuk para bangsawan dan berpendidikan. Meskipun pada awalnya didirikan oleh kaum terpelajar, tujuannya lebih luas untuk masyarakat sehingga opsi C kurang tepat.
D. Menyatakan bahwa perlawanan tidak cukup hanya dengan organisasi modern, namun ini kurang sesuai karena pertanyaan berfokus pada makna integritas Budi Utomo.
E. Menyatakan bahwa Budi Utomo difokuskan oleh para dokter untuk kepentingan rakyat, namun pada kenyataannya organisasi ini tidak hanya diisi oleh para dokter, tetapi juga kaum intelektual dari berbagai bidang.

Tips & Trik:
1. Jika soal menyinggung organisasi pergerakan nasional, perhatikan tujuan dan cara perjuangan bukan sekadar siapa pendirinya.
2. Kata kunci seperti “integritas”, “terorganisir”, dan “cita-cita bersama” biasanya mengarah pada nilai kebersamaan dan tanggung jawab kolektif.
3. Bedakan antara organisasi sosial-edukatif (seperti Budi Utomo) dan organisasi perjuangan bersenjata karena pendekatan dan maknanya berbeda.`,
        tingkat: 'sulit',
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Bela Negara` },
    soal: [
      {
        nomor: 17,
        tipe: 'pg',
        pertanyaan: `Indonesia mencapai kemerdekaan pada 17 Agustus 1945 telah melewati perjuangan yang sangat panjang. Meskipun demikian, persoalan dan tantangan masih banyak baik dalam hal kedaulatan negara dan kemajuan bangsa. Tentu saja dibutuhkan semangat dan keyakinan yang kuat. Keyakinan dan tidak putus asa dalam menghadapi persoalan bangsa dan negara merupakan cerminan salah satu bentuk bela negara, yaitu …`,
        opsi: [
          { label: 'A', teks: `Rela berkorban untuk kepentingan bangsa dan negara` },
          { label: 'B', teks: `Semangat dalam mewujudkan kehidupan negara yang berdaulat, adil, dan makmur` },
          { label: 'C', teks: `Kesadaran dan toleransi dalam kehidupan berbangsa dan bernegara` },
          { label: 'D', teks: `Kesetiaan kepada Pancasila dan UUD 1945` },
          { label: 'E', teks: `Rasa cinta tanah air` },
        ],
        kunci: 'B',
        pembahasan: `Konsep Soal: Soal ini menguji pemahaman mengenai nilai-nilai bela negara, yaitu sikap, semangat, dan perilaku warga negara dalam mempertahankan dan memajukan bangsa.

Kata Kunci : Keyakinan, Tidak putus asa, Menghadapi persoalan bangsa dan negara

Kalimat dalam soal menekankan keyakinan, semangat, dan keteguhan menghadapi tantangan bangsa. Sikap tersebut mencerminkan semangat bela negara yang berorientasi pada mewujudkan kehidupan bangsa yang berdaulat dan sejahtera. Dengan kata lain, tidak hanya membela dalam arti fisik, tetapi juga berjuang secara moral dan mental agar negara tetap maju.

Alasan Opsi Lain Salah:
A. Rela berkorban untuk kepentingan bangsa dan negara, salah karena ini menekankan pengorbanan pribadi (nyawa, waktu, tenaga), bukan semangat pantang menyerah seperti yang disebut dalam soal.
C. Kesadaran dan toleransi dalam kehidupan berbangsa dan bernegara, salah karena lebih menekankan sikap sosial dan harmoni antarwarga, bukan semangat perjuangan menghadapi tantangan nasional.
D. Kesetiaan kepada Pancasila dan UUD 1945, salah karena menunjukkan komitmen ideologis dan konstitusional, tetapi bukan sikap pantang menyerah atau semangat juang.
E. Rasa cinta tanah air, salah karena cinta tanah air lebih mengacu pada perasaan dan loyalitas terhadap negara, bukan semangat pantang menyerah dalam menghadapi tantangan.

Tips & Trick :
1. Ingat 5 Nilai Dasar Bela Negara (UU No. 23 Tahun 2019)
2. Hindari jawaban yang hanya bersifat “emosional” tanpa tindakan nyata.
Biasanya, jawaban yang benar mengandung makna aktif, seperti semangat, berjuang, berkontribusi, atau membangun bangsa.`,
        tingkat: 'mudah',
        status: 'direview',
      },
      {
        nomor: 18,
        tipe: 'pg',
        pertanyaan: `Sekelompok pelajar di Kabupaten Malang membuat proyek dokumenter tentang sejarah perjuangan rakyat di daerah mereka untuk menumbuhkan rasa cinta tanah air. Kegiatan tersebut merupakan bentuk penerapan unsur bela negara yaitu …`,
        opsi: [
          { label: 'A', teks: `Kesadaran berbangsa dan bernegara` },
          { label: 'B', teks: `Cinta tanah air` },
          { label: 'C', teks: `Yakin akan ideologi Pancasila` },
          { label: 'D', teks: `Rela berkorban untuk bangsa dan negara` },
          { label: 'E', teks: `Memiliki kemampuan awal bela negara` },
        ],
        kunci: 'B',
        pembahasan: `Konsep : Bela negara non-fisik, cinta tanah air, penguatan wawasan kebangsaan
Kata Kunci : Dokumenter sejarah, perjuangan rakyat, cinta tanah air, bela negara

Pembahasan :
Proyek dokumenter tentang sejarah perjuangan rakyat di daerah mereka bertujuan menumbuhkan rasa cinta tanah air melalui pemahaman sejarah lokal dan penghayatan nilai perjuangan. Kegiatan ini termasuk bentuk bela negara non-fisik karena menumbuhkan kebanggaan, rasa memiliki, dan kepedulian terhadap bangsa melalui penelusuran sejarah dan budaya.

Pembahasan Opsi Salah :
Opsi A salah karena kesadaran berbangsa dan bernegara berkaitan dengan pemahaman hak dan kewajiban sebagai warga negara, bukan fokus pada penguatan kecintaan terhadap sejarah lokal.
Opsi C salah karena yakin akan ideologi Pancasila mencerminkan keyakinan ideologis, bukan aktivitas yang berbasis sejarah perjuangan daerah.
Opsi D salah karena rela berkorban menekankan kesiapan mengorbankan tenaga, waktu, atau bahkan jiwa demi bangsa.
Opsi E salah karena kemampuan awal bela negara berkaitan dengan kemampuan fisik dan pengetahuan awal pertahanan, bukan aktivitas dokumenter.

Cara cepat : Menggali dan mendokumentasikan sejarah perjuangan daerah membantu menumbuhkan kecintaan pada tanah air, yang merupakan salah satu unsur utama bela negara.`,
        tingkat: 'mudah',
        status: 'direview',
      },
      {
        nomor: 19,
        tipe: 'pg',
        pertanyaan: `Pada tanggal 10 November 1945 seluruh rakyat Surabaya menolak menyerahkan diri dan memutuskan perang melawan Sekutu yang kemudian diperingati sebagai Hari Pahlawan. Peristiwa tersebut memberikan inspirasi agar kita ...`,
        opsi: [
          { label: 'A', teks: `Dapat mewarisi semangat kepahlawanan dalam mempertahankan NKRI` },
          { label: 'B', teks: `Terus bersemangat membangun dan mengisi kemerdekaan` },
          { label: 'C', teks: `Mengambil hikmah dari peristiwa 10 November 1945` },
          { label: 'D', teks: `Meneladani semangat Bung Tomo sebagai pahlawan nasional` },
          { label: 'E', teks: `Mampu menangkap pesan heroik pada peristiwa 10 November 1945` },
        ],
        kunci: 'A',
        pembahasan: `Konsep Soal : Soal ini menguji pemahaman nilai-nilai perjuangan dan semangat nasionalisme yang lahir dari peristiwa bersejarah (10 November 1945) dalam konteks membangun karakter bangsa masa kini.

Kata Kunci : Hari Pahlawan, Semangat kepahlawanan, Mempertahankan NKRI

Hari Pahlawan setiap 10 November bukan sekadar memperingati peristiwa sejarah, tetapi juga menanamkan nilai-nilai nasionalisme dan semangat perjuangan kepada generasi penerus agar terus menjaga keutuhan NKRI, mencerminkan semangat kepahlawanan yang diwarisi dan diterapkan dalam menjaga serta mempertahankan keutuhan Negara Kesatuan Republik Indonesia (NKRI). Semangat ini menjadi dasar pembentukan karakter nasional yang kuat dan cinta tanah air.

Alasan Opsi Lain Salah:
Opsi B salah karena Terus bersemangat membangun dan mengisi kemerdekaan hanya menekankan semangat membangun, tidak menyinggung semangat kepahlawanan dan mempertahankan NKRI.
Opsi C salah karena Mengambil hikmah dari peristiwa 10 November 1945 terlalu umum, hanya “mengambil hikmah” tanpa implementasi nyata dari semangat perjuangan
Opsi D salah karena Meneladani semangat Bung Tomo sebagai pahlawan nasional terlalu spesifik pada sosok Bung Tomo, padahal peristiwa ini merupakan perjuangan seluruh rakyat.
Opsi E Mampu menangkap pesan heroik pada peristiwa 10 November 1945 terlalu pasif, hanya “menangkap pesan heroik” tanpa makna tindakan nyata untuk mempertahankan NKRI.

Tips & Trick :
1. Perhatikan kata kunci historis, seperti tanggal, peristiwa, atau tokoh nasional.
2. Jika soal menyinggung perjuangan rakyat atau kemerdekaan, maka jawaban biasanya berkaitan dengan nasionalisme, semangat bela negara, atau mempertahankan NKRI.
3. Hindari jawaban yang hanya bersifat pasif (seperti “mengambil hikmah” atau “menangkap pesan”) karena soal jenis ini menekankan pada aksi nyata dan nilai perjuangan.`,
        tingkat: 'sedang',
        status: 'direview',
      },
      {
        nomor: 20,
        tipe: 'pg',
        pertanyaan: `Pada pelatihan Bela Negara yang digelar di Lanud Adisutjipto Agustus 2025, mahasiswa diajarkan nilai-nilai Pancasila seperti cinta tanah air, disiplin, dan penguatan identitas kebangsaan. Di saat yang sama, berita menyebutkan bahwa TNI AD memiliki program “Pendidikan Karakter, Disiplin, dan Bela Negara” bersama Pemprov Jawa Barat untuk anak-anak tertentu. Berdasarkan dua kegiatan tersebut, nilai Pancasila yang paling erat kaitannya dengan semangat berkorban demi pertahanan dan keutuhan NKRI yang ditanamkan dalam program bela negara adalah ...`,
        opsi: [
          { label: 'A', teks: `Ketuhanan Yang Maha Esa` },
          { label: 'B', teks: `Kemanusiaan yang Adil dan Beradab` },
          { label: 'C', teks: `Persatuan Indonesia` },
          { label: 'D', teks: `Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan` },
          { label: 'E', teks: `Keadilan Sosial bagi Seluruh Rakyat Indonesia` },
        ],
        kunci: 'C',
        pembahasan: `Konsep: Pancasila, Bela Negara, Persatuan dan Keutuhan NKRI
Kata Kunci: persatuan, keutuhan, bela negara, identitas kebangsaan

Pembahasan:
Program bela negara baik untuk mahasiswa maupun peserta didik lain, bertujuan menanamkan sikap rela berkorban, cinta tanah air, disiplin, dan kesiapan menjaga keutuhan NKRI. Nilai Pancasila yang paling erat dengan semangat mempertahankan negara adalah Sila Ketiga: Persatuan Indonesia, karena sila ini menekankan pentingnya menjaga integrasi, solidaritas kebangsaan, dan kesediaan membela tanah air dari berbagai ancaman. Itulah nilai inti yang menjadi landasan moral bela negara.

Pembahasan Opsi Salah:
Opsi A menekankan nilai ketuhanan, tidak spesifik terkait bela negara
Opsi B terkait kemanusiaan, tetapi bukan inti dari semangat pertahanan negara.
Opsi D menekankan prinsip musyawarah, tidak berkaitan langsung dengan keutuhan NKRI.
Opsi E terkait pemerataan dan keadilan sosial, bukan aspek pertahanan dan kesatuan.

Cara cepat: Semangat bela negara berpijak pada Sila Ketiga yakni Persatuan Indonesia, karena pertahanan negara berdiri di atas komitmen menjaga keutuhan bangsa.`,
        tingkat: 'sedang',
        status: 'direview',
      },
      {
        nomor: 21,
        tipe: 'pg',
        pertanyaan: `Indonesia mencapai kemerdekaan pada 17 Agustus 1945 telah melewati perjuangan yang sangat panjang. Meskipun demikian, persoalan dan tantangan masih banyak baik dalam hal kedaulatan negara dan kemajuan bangsa. Tentu saja dibutuhkan semangat dan keyakinan yang kuat. Keyakinan dan tidak putus asa dalam menghadapi persoalan bangsa dan negara merupakan cerminan salah satu bela negara, yaitu .......`,
        opsi: [
          { label: 'A', teks: `Rela berkorban untuk kepentingan bangsa dan negara` },
          { label: 'B', teks: `Semangat dalam mewujudkan kehidupan negara yang berdaulat, adil, dan makmur` },
          { label: 'C', teks: `Kesadaran dan toleransi dalam kehidupan berbangsa dan bernegara` },
          { label: 'D', teks: `Kesetiaan kepada Pancasila dan UUD 1945` },
          { label: 'E', teks: `Rasa cinta tanah air` },
        ],
        kunci: 'B',
        pembahasan: `[Catatan tim: teks soal, opsi, dan kunci (B) nomor ini sama dengan Bela Negara 1 (nomor 17); yang berbeda hanya pembahasan dan tingkat kesulitannya. Kemungkinan teks soal di riset salah salin. Perlu soal pengganti dari tim riset.]

Konsep Soal : Soal ini menguji pemahaman makna bela negara dalam konteks semangat juang, pantang menyerah, dan optimisme terhadap masa depan bangsa.

Kata Kunci : Keyakinan dan tidak putus asa, Persoalan bangsa dan negara, Semangat juang dan keuletan

Bela negara tidak hanya berarti angkat senjata, tetapi juga mencakup sikap mental dan moral warga negara dalam membangun bangsa. Berdasarkan UU No. 23 Tahun 2019 tentang Pengelolaan Sumber Daya Nasional untuk Pertahanan Negara, elemen bela negara meliputi : Cinta tanah air, Kesadaran berbangsa dan bernegara, Yakin pada ideologi Pancasila, Rela berkorban untuk bangsa dan negara, Kemampuan awal bela negara. Dalam konteks soal ini, sikap pantang menyerah, optimis, dan berkeyakinan kuat menunjukkan semangat dalam mewujudkan cita-cita nasional : “Masyarakat adil dan makmur berdasarkan Pancasila dan UUD 1945.”

Alasan Opsi Lain Salah:
Opsi A salah karena Rela berkorban untuk kepentingan bangsa dan negara berfokus pada pengorbanan diri, bukan semangat dan keyakinan.
Opsi C salah karena Kesadaran dan toleransi dalam kehidupan berbangsa lebih menekankan aspek sosial dan persatuan, bukan keteguhan dalam menghadapi tantangan.
Opsi D salah karena Kesetiaan kepada Pancasila dan UUD 1945 menunjukkan loyalitas ideologis, tetapi tidak menggambarkan semangat juang yang dimaksud dalam soal.
Opsi E salah karena Rasa cinta tanah air merupakan dasar dari bela negara, namun soal menekankan pada semangat pantang menyerah, bukan sekadar rasa cinta.

Tips & Trick :
Perhatikan kata emosional seperti “tidak putus asa”, “optimis”, “semangat”. Biasanya jawabannya berkaitan dengan semangat juang atau pembangunan nasional.
Jika soal menyinggung perjuangan, cita-cita, atau kemajuan bangsa, arahkan jawaban ke semangat mewujudkan negara berdaulat, adil, dan makmur.
Ingat bahwa bela negara bersifat dinamis, bisa dalam bidang pendidikan, ekonomi, sosial, hingga teknologi.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      {
        nomor: 22,
        tipe: 'pg',
        pertanyaan: `Dalam proses menuju Perundingan Roem–Royen (1949), delegasi Indonesia tetap bersedia berunding meskipun mendapat tekanan diplomatik dari negara lain dan adanya ketidakpuasan sebagian kelompok di dalam negeri. Namun, keputusan tetap dilakukan demi memulihkan integritas pemerintahan Republik Indonesia secara internasional. Sikap ini mencerminkan nilai bela negara pada aspek …`,
        opsi: [
          { label: 'A', teks: `Setia pada Pancasila dengan menjunjung tinggi nilai kemanusiaan universal dalam diplomasi` },
          { label: 'B', teks: `Kesadaran berbangsa dan bernegara melalui upaya mengakomodasi semua kelompok politik` },
          { label: 'C', teks: `Cinta tanah air melalui sikap menerima tekanan demi menjaga hubungan internasional` },
          { label: 'D', teks: `Rela berkorban untuk bangsa dan negara melalui penempatan kepentingan nasional di atas kepentingan golongan` },
          { label: 'E', teks: `Kemampuan awal bela negara melalui kecermatan membaca peta diplomasi global` },
        ],
        kunci: 'D',
        pembahasan: `Konsep yang digunakan:
Bela negara, pengorbanan untuk bangsa, kepentingan nasional, integritas pemerintahan, diplomasi internasional.

Kata kunci:
Perundingan Roem–Royen, kepentingan nasional, pengorbanan, integritas, diplomasi.

Delegasi Indonesia dalam Perundingan Roem–Royen menunjukkan rela berkorban untuk bangsa dan negara dengan menempatkan kepentingan nasional di atas kepentingan golongan. Meskipun ada tekanan diplomatik dari negara lain dan ketidakpuasan internal, keputusan tetap diambil untuk memulihkan integritas pemerintahan Republik Indonesia di mata internasional, mencerminkan pengabdian total dan pengutamaan kepentingan negara.

Pembahasan opsi yang salah:
A. Menekankan Pancasila dan kemanusiaan universal, tetapi tidak spesifik pada pengorbanan demi kepentingan negara.
B. Mengakomodasi semua kelompok politik relevan, tetapi inti bela negara adalah menempatkan kepentingan nasional di atas golongan.
C. Cinta tanah air melalui penerimaan tekanan internasional kurang menekankan pengorbanan internal untuk kepentingan negara.
E. Kecermatan membaca peta diplomasi global hanya aspek kemampuan, bukan inti pengorbanan dan kepentingan nasional.`,
        tingkat: 'sulit',
        status: 'direview',
      },
      {
        nomor: 23,
        tipe: 'pg',
        pertanyaan: `Bangsa Indonesia menghadapi tantangan globalisasi yang dapat melemahkan ketahanan ideologi nasional. Berikut ini yang tidak termasuk strategi tepat untuk mengatasi ancaman di bidang ideologi adalah ….`,
        opsi: [
          { label: 'A', teks: `Menjadikan Pancasila sebagai pedoman hidup bangsa dalam menghadapi pengaruh luar` },
          { label: 'B', teks: `Mengaktualisasikan nilai Pancasila dalam seluruh aspek penyelenggaraan negara` },
          { label: 'C', teks: `Mengembangkan pemahaman ideologi secara terbuka dan dinamis agar sesuai zaman` },
          { label: 'D', teks: `Menanamkan nilai Pancasila melalui pendidikan formal maupun nonformal bagi seluruh warga` },
          { label: 'E', teks: `Menerapkan ideologi negara secara kaku dan absolut tanpa menyesuaikan dengan perkembangan masyarakat` },
        ],
        kunci: 'E',
        pembahasan: `Tingkat kesulitan: HOTS

Konsep yang digunakan:
Bela negara nonmiliter di bidang ideologi, yaitu menjaga agar Pancasila tetap hidup, kontekstual, dan mampu menjadi filter nilai dari luar. Strategi menghadapi ancaman ideologi bukan dengan memaksakan secara kaku, melainkan melalui aktualisasi, pendidikan, dan relevansi nilai Pancasila.

Kata kunci: ancaman ideologi, ketahanan nasional, aktualisasi Pancasila, pendidikan, dinamis, fleksibel.

Pembahasan jawaban benar:
Opsi E paling tepat sebagai jawaban salah, karena menerapkan ideologi secara kaku dan absolut justru berisiko membuat ideologi negara kehilangan relevansi dengan perkembangan masyarakat. Pancasila perlu dikontekstualisasikan agar tetap mampu menjawab tantangan zaman.

Pembahasan opsi salah:
Opsi A benar, Pancasila harus menjadi pedoman menghadapi pengaruh global. Opsi B benar, nilai Pancasila wajib hadir dalam setiap bidang penyelenggaraan negara. Opsi C benar, karena ideologi negara perlu aktual agar tidak usang. Opsi D benar, pendidikan adalah cara utama menanamkan Pancasila sejak dini.

Carcep:
Kalau soal menyinggung “strategi menghadapi ancaman ideologi”, langsung cari opsi yang terasa ekstrem/kaku/tertutup, karena strategi yang tepat selalu menekankan aktualisasi, relevansi, dan pendidikan ideologi, bukan penerapan absolut yang statis.`,
        tingkat: 'sulit',
        status: 'direview',
      },
      {
        nomor: 24,
        tipe: 'pg',
        pertanyaan: `Dalam beberapa tahun terakhir, sejumlah daerah di Indonesia mengalami krisis air bersih akibat alih fungsi hutan dan pencemaran sungai oleh aktivitas industri. Kondisi ini tidak hanya mengganggu kesehatan masyarakat, tetapi juga memicu konflik sosial dan mengancam keberlanjutan ekonomi lokal. Pemerintah pusat dan daerah kemudian menegaskan bahwa perlindungan lingkungan hidup merupakan bagian dari kepentingan strategis nasional. Jika dikaitkan dengan konsep bela negara di bidang lingkungan, makna utama dari perlindungan lingkungan dalam kasus tersebut adalah…`,
        opsi: [
          { label: 'A', teks: `Menjadikan pelestarian lingkungan sebagai tanggung jawab eksklusif pemerintah karena warga negara tidak memiliki kewenangan hukum.` },
          { label: 'B', teks: `Mengalihkan isu kerusakan lingkungan menjadi persoalan teknis semata tanpa keterkaitan dengan ketahanan nasional.` },
          { label: 'C', teks: `Memahami lingkungan hidup sebagai aset strategis bangsa yang harus dijaga untuk menjamin keberlangsungan hidup dan kedaulatan negara.` },
          { label: 'D', teks: `Membatasi aktivitas ekonomi masyarakat demi menjaga lingkungan tanpa mempertimbangkan kebutuhan pembangunan nasional.` },
          { label: 'E', teks: `Menempatkan kepentingan ekologis di atas kepentingan sosial dan ekonomi secara mutlak dalam setiap kebijakan publik.` },
        ],
        kunci: 'C',
        pembahasan: `Tingkat kesulitan: HOTS

Konsep: Bela Negara di Bidang Lingkungan
Kata Kunci: Perlindungan lingkungan, kepentingan strategis nasional, ketahanan nasional, aset strategis bangsa, keberlanjutan

Pembahasan:
Kasus krisis air bersih akibat alih fungsi hutan dan pencemaran sungai menunjukkan bahwa kerusakan lingkungan tidak hanya berdampak pada aspek ekologis, tetapi juga kesehatan masyarakat, stabilitas sosial, dan keberlanjutan ekonomi lokal. Oleh karena itu, dalam konteks bela negara di bidang lingkungan, perlindungan lingkungan dimaknai sebagai upaya menjaga lingkungan hidup sebagai aset strategis bangsa. Lingkungan yang lestari menjadi prasyarat bagi keberlangsungan hidup masyarakat, ketahanan nasional, serta kedaulatan negara. Pernyataan ini sejalan dengan pandangan bahwa bela negara tidak selalu berbentuk fisik atau militer, tetapi juga melalui tindakan menjaga sumber daya alam demi kepentingan nasional jangka panjang.

Pembahasan Opsi Salah:
Opsi A: Keliru, karena bela negara di bidang lingkungan menuntut peran aktif seluruh warga negara, bukan hanya pemerintah.
Opsi B: Tidak tepat, sebab kerusakan lingkungan berkaitan langsung dengan ketahanan nasional dan tidak dapat dipersempit menjadi persoalan teknis semata.
Opsi D: Kurang tepat, karena perlindungan lingkungan dalam bela negara tidak berarti meniadakan aktivitas ekonomi, melainkan menyeimbangkannya dengan prinsip keberlanjutan pembangunan nasional.
Opsi E: Keliru, karena kebijakan publik harus menyeimbangkan kepentingan ekologis, sosial, dan ekonomi, bukan mengutamakan salah satunya secara mutlak.

Cara cepat: Bela negara di bidang lingkungan menegaskan bahwa lingkungan hidup adalah aset strategis bangsa yang harus dilindungi bersama demi menjamin keberlangsungan hidup, stabilitas nasional, dan kedaulatan negara.`,
        tingkat: 'sulit',
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Pilar Negara` },
    soal: [
      {
        nomor: 25,
        tipe: 'pg',
        pertanyaan: `Semenjak Indonesia merdeka, berbagai upaya dilakukan untuk menegakkan supremasi hukum dan perlindungan HAM. Namun, terdapat kasus-kasus yang menimbulkan pelanggaran terhadap hak warga negara, termasuk hak atas pendidikan, pekerjaan, dan perlindungan diri.

Berikut ini yang termasuk pelanggaran HAM karena membatasi hak warga negara untuk memperoleh pekerjaan adalah…`,
        opsi: [
          { label: 'A', teks: `Larangan seorang warga mengakses sekolah negeri karena latar belakang sosial` },
          { label: 'B', teks: `Pemecatan seorang pegawai karena menyuarakan kritik terhadap kebijakan pemerintah` },
          { label: 'C', teks: `Kewajiban mengikuti pendidikan dasar tanpa biaya` },
          { label: 'D', teks: `Larangan mengikuti upacara bendera di sekolah` },
          { label: 'E', teks: `Pemerintah menyediakan beasiswa bagi warga kurang mampu` },
        ],
        kunci: 'B',
        pembahasan: `Pelanggaran HAM yang membatasi hak warga negara untuk memperoleh pekerjaan tercermin pada kasus pemecatan seorang pegawai karena menyuarakan kritik terhadap kebijakan pemerintah. Hak atas pekerjaan termasuk dalam hak ekonomi, sosial, dan budaya yang dijamin oleh HAM, yaitu setiap orang berhak atas pekerjaan dan mendapatkan perlakuan adil di tempat kerja. Pemecatan yang bersifat diskriminatif atau represif terhadap kebebasan berpendapat melanggar prinsip perlindungan hak warga negara.

Konsep: Hak Asasi Manusia dan Hak atas Pekerjaan
Kata Kunci: hak atas pekerjaan, diskriminasi, kebebasan berpendapat, perlindungan HAM

Pembahasan Opsi Salah:
Opsi A salah karena larangan mengakses sekolah terkait pendidikan, bukan pekerjaan.
Opsi C salah karena kewajiban pendidikan dasar tanpa biaya justru mendukung hak pendidikan, bukan membatasi pekerjaan.
Opsi D salah karena larangan mengikuti upacara bendera berkaitan dengan hak berpartisipasi, bukan hak atas pekerjaan.
Opsi E salah karena pemberian beasiswa mendukung hak warga, bukan pelanggaran HAM.

Carcep: Hak atas pekerjaan termasuk hak dasar yang dilindungi HAM, dan pembatasan atau diskriminasi terhadap hak ini, misalnya pemecatan karena kritik, merupakan pelanggaran yang nyata.`,
        tingkat: 'mudah',
        status: 'direview',
      },
      {
        nomor: 26,
        tipe: 'pg',
        pertanyaan: `Pasal 31 UUD 1945 mengatur tentang …`,
        opsi: [
          { label: 'A', teks: `Hak hidup` },
          { label: 'B', teks: `Kebebasan beragama` },
          { label: 'C', teks: `Pendidikan` },
          { label: 'D', teks: `Persamaan di depan hukum` },
          { label: 'E', teks: `Kebebasan informasi` },
        ],
        kunci: 'C',
        pembahasan: `Pasal 31 UUD 1945 mengatur tentang hak warga negara atas pendidikan dan kewajiban negara dalam menyelenggarakan sistem pendidikan nasional. Pasal ini menegaskan bahwa setiap warga negara berhak mendapat pendidikan dan pemerintah wajib membiayai pendidikan dasar serta memajukan ilmu pengetahuan dan teknologi.

Konsep: Hak konstitusional atas pendidikan
Kata Kunci: pendidikan, hak warga negara, kewajiban negara

Pembahasan Opsi Salah:
Opsi A salah karena hak hidup diatur dalam Pasal 28A.
Opsi B salah karena kebebasan beragama diatur dalam Pasal 29.
Opsi D salah karena persamaan di depan hukum diatur dalam Pasal 27 ayat (1).
Opsi E salah karena kebebasan informasi lebih terkait dengan Pasal 28F.

Carcep: Memahami pasal pendidikan penting agar kita tahu bahwa negara wajib menjamin akses belajar bagi seluruh warga tanpa kecuali.`,
        tingkat: 'mudah',
        status: 'direview',
      },
      {
        nomor: 27,
        tipe: 'pg',
        pertanyaan: `Ir. Soekarno adalah proklamator kemerdekaan Indonesia yang merumuskan Pancasila pada 1 Juni 1945. Beliau berhasil mempersatukan golongan nasionalis, agama, dan sosialis dalam satu ideologi negara. Nilai yang paling mencerminkan sila ke-3 “Persatuan Indonesia” dari perjuangan Soekarno adalah…`,
        opsi: [
          { label: 'A', teks: `Memaksa semua golongan menerima hanya satu aliran ideologi tanpa kompromi` },
          { label: 'B', teks: `Menyatukan berbagai aliran politik dan agama dalam rumusan Pancasila yang inklusif` },
          { label: 'C', teks: `Memberikan kedudukan istimewa hanya kepada kelompok nasionalis sekuler` },
          { label: 'D', teks: `Menghapus identitas agama dan suku demi satu identitas buatan` },
          { label: 'E', teks: `Mengutamakan kelompok tertentu untuk menguasai pemerintahan baru` },
        ],
        kunci: 'B',
        pembahasan: `Konsep yang digunakan:
Persatuan Indonesia, inklusivitas, integrasi nasional, penyatuan berbagai golongan.

Kata Kunci:
Persatuan, inklusif, integrasi, keberagaman, Pancasila.

Soekarno mampu menyatukan berbagai perbedaan ideologi seperti nasionalis, agamis, dan sosialis ke dalam satu dasar negara yang dapat diterima seluruh golongan. Rumusan Pancasila yang ia ajukan bersifat inklusif sehingga menjadi landasan pemersatu bangsa. Hal ini paling mencerminkan sila ke-3 yaitu Persatuan Indonesia, yang menekankan pentingnya persatuan dalam keberagaman.

Pembahasan opsi yang salah:
A. Memaksa satu aliran tanpa kompromi tidak mencerminkan persatuan karena menolak keberagaman pandangan.
C. Memberikan kedudukan istimewa kepada satu golongan akan menimbulkan perpecahan dan tidak sesuai dengan nilai persatuan.
D. Menghapus identitas agama dan suku berarti meniadakan keberagaman yang justru menjadi bagian dari kekuatan persatuan bangsa.
E. Mengutamakan kelompok tertentu untuk menguasai pemerintahan dapat menciptakan ketidakadilan dan memperlemah persatuan nasional.`,
        tingkat: 'sedang',
        status: 'direview',
      },
      {
        nomor: 28,
        tipe: 'pg',
        pertanyaan: `Seorang kepala daerah ingin menerapkan kebijakan berbasis hukum dan konstitusi tetapi tetap menghormati aspirasi masyarakat. Langkah ini merupakan penerapan pilar negara…`,
        opsi: [
          { label: 'A', teks: `Pancasila` },
          { label: 'B', teks: `UUD 1945` },
          { label: 'C', teks: `NKRI` },
          { label: 'D', teks: `Bhinneka Tunggal Ika` },
          { label: 'E', teks: `Ketetapan MPR` },
        ],
        kunci: 'B',
        pembahasan: `Konsep yang digunakan : Fungsi UUD 1945 sebagai landasan hukum tertinggi dalam penyelenggaraan negara.
Kata Kunci : Kebijakan, konstitusi, dasar hukum.

UUD 1945 sebagai pilar negara mengatur semua aktivitas penyelenggaraan negara, termasuk kebijakan pemerintah daerah. Kepala daerah yang menyusun kebijakan berdasarkan hukum dan konstitusi secara langsung menerapkan pilar UUD 1945, karena ini menjamin legitimasi hukum dan kepatuhan terhadap norma negara.

Alasan opsi lain salah :
Opsi A salah karena Pancasila adalah dasar nilai, bukan aturan hukum operasional.
Opsi C salah karena NKRI menekankan kesatuan wilayah, bukan legalitas kebijakan.
Opsi D salah karena Bhinneka Tunggal Ika terkait persatuan dalam keberagaman, bukan landasan hukum.
Opsi E salah karena Ketetapan MPR adalah produk hukum, bukan pilar utama.

Tips & Trick :
Jika soal menekankan “kebijakan berbasis hukum dan konstitusi”, jawabannya pasti UUD 1945.`,
        tingkat: 'sedang',
        status: 'direview',
      },
      {
        nomor: 29,
        tipe: 'pg',
        pertanyaan: `Pasal 29 ayat (2) UUD 1945 menjamin kemerdekaan beragama bagi setiap penduduk. Pasal ini merupakan pengejawantahan langsung dari pilar…`,
        opsi: [
          { label: 'A', teks: `Bentuk Negara Kesatuan Republik Indonesia` },
          { label: 'B', teks: `Sila ke-3 Persatuan Indonesia saja` },
          { label: 'C', teks: `Sila ke-5 Keadilan Sosial` },
          { label: 'D', teks: `Bhinneka Tunggal Ika dan sila ke-1 Pancasila` },
          { label: 'E', teks: `Sistem ekonomi kerakyatan` },
        ],
        kunci: 'D',
        pembahasan: `Konsep yang digunakan:
Ketuhanan Yang Maha Esa, kebebasan beragama, toleransi, Bhinneka Tunggal Ika.

Kata Kunci:
Kebebasan beragama, ketuhanan, keberagaman, toleransi.

Pasal 29 ayat (2) UUD 1945 menjamin kebebasan setiap penduduk untuk memeluk agama dan beribadah menurut keyakinannya. Jaminan ini merupakan perwujudan langsung dari sila ke-1 "Ketuhanan Yang Maha Esa" yang menegaskan bahwa negara menghormati dan melindungi kehidupan beragama. Selain itu, penghormatan terhadap perbedaan keyakinan juga sejalan dengan prinsip Bhinneka Tunggal Ika yang menekankan persatuan dalam keberagaman.

Pembahasan opsi yang salah:
A. Bentuk NKRI tidak secara langsung membahas kebebasan beragama.
B. Sila ke-3 lebih terkait persatuan, bukan jaminan kemerdekaan beragama.
C. Sila ke-5 berhubungan dengan keadilan sosial, bukan kebebasan beragama.
E. Sistem ekonomi kerakyatan tidak relevan dengan isu kemerdekaan beragama.`,
        tingkat: 'sulit',
        status: 'direview',
      },
      {
        nomor: 30,
        tipe: 'pg',
        pertanyaan: `Dalam situasi konflik antarumat beragama, pemerintah pusat menerapkan pendekatan mediasi dan dialog antar komunitas untuk mencegah eskalasi. Strategi ini menunjukkan penerapan pilar negara…`,
        opsi: [
          { label: 'A', teks: `Pancasila` },
          { label: 'B', teks: `UUD 1945` },
          { label: 'C', teks: `NKRI` },
          { label: 'D', teks: `Bhinneka Tunggal Ika` },
          { label: 'E', teks: `Ketetapan MPR` },
        ],
        kunci: 'D',
        pembahasan: `Konsep yang digunakan : Pelaksanaan nilai persatuan dan toleransi antarumat beragama dalam kehidupan berbangsa.
Kata Kunci : Konflik agama, mediasi, persatuan, toleransi.

Bhinneka Tunggal Ika menekankan bahwa perbedaan agama, suku, dan budaya harus dipandang sebagai kekayaan, bukan sumber konflik. Pendekatan mediasi dan dialog mencerminkan semangat menghormati keberagaman sambil menjaga persatuan nasional.

Alasan opsi lain salah :
Opsi A salah karena Pancasila lebih luas, bukan fokus pada konflik agama secara spesifik.
Opsi B salah karena UUD 1945 mengatur hukum, bukan langsung mediasi sosial.
Opsi C salah karena NKRI menekankan kesatuan wilayah, bukan hubungan sosial.
Opsi E salah karena Ketetapan MPR bukan pilar utama.

Tips & Trick :
Kalau soal menyebut perbedaan agama dan upaya menjaga persatuan, jawaban tepat selalu Bhinneka Tunggal Ika.`,
        tingkat: 'sulit',
        status: 'direview',
      },
      {
        nomor: 31,
        tipe: 'pg',
        pertanyaan: `Menjelang Pemilu Daerah 2025, beberapa lembaga mencatat meningkatnya polarisasi masyarakat akibat penyebaran narasi provokatif di media sosial. Sejumlah ahli menilai kondisi ini mengancam persatuan nasional dan melemahkan pemerataan akses informasi yang adil. Mereka menekankan bahwa negara harus bertindak sesuai pokok pikiran dalam Pembukaan UUD 1945. Langkah yang paling sesuai dengan pokok pikiran persatuan dan keadilan sosial adalah…`,
        opsi: [
          { label: 'A', teks: `Membentuk tim sensor digital nasional yang memiliki kewenangan penuh untuk menghapus seluruh konten politik yang dianggap sensitif tanpa mekanisme keberatan` },
          { label: 'B', teks: `Mengembangkan ekosistem literasi digital yang terintegrasi meliputi verifikasi informasi berbasis AI, pelatihan literasi di sekolah dan desa, serta keterlibatan publik dalam melaporkan konten provokatif` },
          { label: 'C', teks: `Memberikan fasilitas promosi digital hanya kepada kelompok masyarakat yang dianggap dapat menjaga stabilitas politik demi mengurangi konflik` },
          { label: 'D', teks: `Membiarkan arus informasi berjalan secara bebas tanpa regulasi, dengan asumsi masyarakat akan membentuk “keseimbangan narasi” secara alami` },
          { label: 'E', teks: `Menunda penyelenggaraan Pemilu Daerah sampai kondisi polarisasi mereda untuk mencegah konflik yang lebih besar` },
        ],
        kunci: 'B',
        pembahasan: `Tingkat kesulitan: HOTS

Konsep: Pokok pikiran Pembukaan UUD 1945 (persatuan dan keadilan sosial)
Kata Kunci: persatuan nasional, keadilan sosial, literasi digital, pemerataan akses informasi, peran negara dan masyarakat

Pembahasan:
Pokok pikiran dalam Pembukaan UUD 1945 menegaskan bahwa negara berkewajiban melindungi seluruh bangsa Indonesia, memajukan kesejahteraan umum, serta mewujudkan keadilan sosial bagi seluruh rakyat. Dalam konteks meningkatnya polarisasi akibat narasi provokatif di media sosial, langkah yang sesuai dengan prinsip persatuan dan keadilan sosial bukanlah pembatasan sepihak atau diskriminatif, melainkan penguatan kapasitas masyarakat secara merata. Pengembangan ekosistem literasi digital yang terintegrasi, melalui verifikasi informasi, pendidikan literasi di berbagai lapisan masyarakat, serta pelibatan publik mencerminkan upaya negara menjaga persatuan sekaligus menjamin akses informasi yang adil dan bertanggung jawab bagi seluruh warga.

Pembahasan Opsi Salah:
Opsi A: Sensor tanpa mekanisme keberatan berpotensi melanggar keadilan dan hak warga negara.
Opsi C: Pemberian fasilitas hanya kepada kelompok tertentu bertentangan dengan prinsip keadilan sosial dan kesetaraan.
Opsi D: Pembiaran tanpa regulasi mengabaikan tanggung jawab negara dalam menjaga persatuan bangsa.
Opsi E: Penundaan pemilu bertentangan dengan prinsip kedaulatan rakyat dan demokrasi.

Cara cepat: Persatuan dan keadilan sosial diwujudkan melalui kebijakan inklusif yang memperkuat literasi dan akses informasi masyarakat secara merata, bukan melalui pembatasan sepihak atau diskriminasi.`,
        tingkat: 'sulit',
        status: 'direview',
      },
      {
        nomor: 32,
        tipe: 'pg',
        pertanyaan: `Dalam sidang PPKI disepakati siapa yang berhak menjadi warga negara Indonesia yang tertulis dalam pasal 26 ayat (1) dan (2) . Tidak hanya bangsa Indonesia asli, bangsa lain yang disahkan UU juga berhak menjadi warga negara. Bagaimana nilai persatuan tergambar pada perumusan hal tersebut?`,
        opsi: [
          { label: 'A', teks: `Bangsa yang diakomodasi sebagai warga terbatas pada yang ikut berjuang pada periode kemerdekaan` },
          { label: 'B', teks: `Perumus UUD 1945 memikirkan secara seksama untuk melibatkan seluruh komponen perjuangan` },
          { label: 'C', teks: `Pasal mengenai warga negara dibebas dalam tataran hukum internasional` },
          { label: 'D', teks: `Persyaratan menjadi warga negara ditetapkan dengan UU` },
          { label: 'E', teks: `Persatuan di antara orang Indonesia asli bersifat fundamental pada perumusan tersebut` },
        ],
        kunci: 'B',
        pembahasan: `Tingkat kesulitan: HOTS

Soal ini membahas nilai persatuan dalam perumusan Pasal 26 ayat (1) dan (2) UUD 1945, yang mengatur tentang warga negara Indonesia (WNI). Nilai ini tercermin dari semangat menyatukan berbagai golongan dan etnis dalam satu kesatuan bangsa.
Kata Kunci: Pasal 26 UUD 1945, Warga negara dan penduduk, Nilai persatuan, Perumus UUD 1945, Keterlibatan semua komponen bangsa.

Pasal 26 ayat (1) dan (2) UUD 1945 menyatakan bahwa yang menjadi warga negara Indonesia adalah orang-orang Indonesia asli dan orang-orang dari bangsa lain yang disahkan dengan undang-undang. Ketentuan ini menunjukkan bahwa Indonesia sebagai negara yang baru merdeka tidak hanya mengakui orang Indonesia asli sebagai warga negara, tetapi juga memberikan kesempatan kepada orang-orang dari bangsa lain yang telah berperan dalam perjuangan dan pembangunan Indonesia, asalkan memenuhi persyaratan yang ditetapkan.
Ketentuan ini mencerminkan nilai persatuan karena para perumus UUD 1945 mempertimbangkan pentingnya melibatkan semua pihak yang turut berkontribusi bagi bangsa, terlepas dari asal-usul etnis mereka. Dengan mengakui mereka sebagai warga negara, UUD 1945 menekankan pentingnya menyatukan semua komponen masyarakat yang berada di wilayah Indonesia dalam kerangka persatuan nasional.

Perumus UUD 1945 memikirkan secara seksama untuk melibatkan seluruh komponen perjuangan
Pernyataan ini tepat karena para perumus UUD 1945 mempertimbangkan keterlibatan berbagai komponen bangsa, termasuk dari kelompok etnis non-pribumi yang turut berkontribusi dalam kehidupan bangsa. Hal ini mencerminkan upaya untuk mewujudkan persatuan nasional yang melibatkan seluruh elemen masyarakat Indonesia.

Alasan Opsi Lain Salah:
A. Bangsa yang diakomodasi sebagai warga terbatas pada yang ikut berjuang pada periode kemerdekaan Pernyataan ini terlalu sempit. UUD 1945 tidak secara eksplisit membatasi hak menjadi warga negara hanya pada mereka yang ikut berjuang di masa kemerdekaan. Sebaliknya, hal ini diatur lebih lanjut dalam undang-undang yang mempertimbangkan kontribusi dan integrasi ke dalam masyarakat Indonesia.
C. Pasal mengenai warga negara dibebas dalam tataran hukum internasional. Pernyataan ini tidak relevan, karena pasal tersebut tidak berhubungan dengan hukum internasional, melainkan dengan prinsip kedaulatan dan persatuan nasional di dalam negeri.
D. Persyaratan menjadi warga negara ditetapkan dengan UU. Pernyataan ini benar secara prosedural, namun tidak menggambarkan nilai persatuan yang tercermin dalam kebijakan ini. Undang-Undang memang menetapkan persyaratan, tetapi bukan itulah aspek yang menonjol dalam hal persatuan.
E. Persatuan di antara orang Indonesia asli bersifat fundamental pada perumusan tersebut. Pernyataan ini tidak mencerminkan pandangan yang luas mengenai persatuan dalam keberagaman. Pasal ini bukan hanya tentang persatuan orang Indonesia asli, tetapi juga melibatkan warga negara dari berbagai latar belakang etnis untuk membentuk bangsa yang bersatu.

Tips & Trik:
Ingat rumus singkat: “Pasal 26 = Persatuan dalam Keberagaman.” Artinya, UUD 1945 mengakui bahwa warga negara tidak hanya pribumi, tapi juga bangsa lain yang disahkan oleh UU.`,
        tingkat: 'sulit',
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Bahasa Negara` },
    soal: [
      {
        nomor: 33,
        tipe: 'pg',
        pertanyaan: `Contoh kalimat efektif adalah …`,
        opsi: [
          { label: 'A', teks: `Para peserta-peserta dimohon untuk segera berkumpul bersama` },
          { label: 'B', teks: `Rapat tersebut akan segera dilaksanakan dalam waktu dekat` },
          { label: 'C', teks: `Diadakan pelatihan yang mana tujuannya untuk meningkatkan mutu` },
          { label: 'D', teks: `Panitia membagikan formulir kepada seluruh peserta` },
          { label: 'E', teks: `Kami akan mencoba untuk dapat menyelesaikan tugas ini` },
        ],
        kunci: 'D',
        pembahasan: `Kalimat efektif harus memenuhi kaidah kehematan, kelogisan, kejelasan, dan tidak ada pemborosan kata. Kalimat “Panitia membagikan formulir kepada seluruh peserta” jelas, ringkas, dan langsung menunjukkan subjek, predikat, dan objek tanpa kata mubazir.

Konsep: Kalimat efektif
Kata Kunci: jelas, logis, hemat kata

Pembahasan Opsi Salah:
Opsi A salah karena terjadi pengulangan kata (para peserta-peserta) dan frasa berlebihan (segera berkumpul bersama).
Opsi B salah karena frasa akan segera dilaksanakan dalam waktu dekat tidak hemat dan mengandung pengulangan makna.
Opsi C salah karena penggunaan frasa yang mana tidak diperlukan dan membuat kalimat kurang lugas.
Opsi E salah karena frasa akan mencoba untuk dapat menyelesaikan terlalu panjang dan tidak efisien.

Carcep: Kalimat efektif menyampaikan pesan secara langsung, jelas, dan tanpa kata yang tidak perlu.`,
        tingkat: 'mudah',
        status: 'direview',
      },
      {
        nomor: 34,
        tipe: 'pg',
        pertanyaan: `Tingkat kemiskinan di Indonesia mengalami penurunan secara bertahap dalam beberapa tahun terakhir. Pemerintah melalui program-program bantuan sosial, seperti Program Keluarga Harapan (PKH) dan Bantuan Pangan Non-Tunai (BPNT), berupaya meningkatkan kesejahteraan masyarakat miskin. Selain itu, peningkatan akses pendidikan dan lapangan kerja juga menjadi faktor penting dalam menurunkan angka kemiskinan.

Makna kata “kesejahteraan” dalam paragraf di atas adalah…`,
        opsi: [
          { label: 'A', teks: `Keadaan masyarakat yang hidup layak dan terpenuhi kebutuhannya` },
          { label: 'B', teks: `Bantuan finansial yang diberikan pemerintah kepada masyarakat` },
          { label: 'C', teks: `Jumlah pendapatan yang diperoleh individu dalam satu bulan` },
          { label: 'D', teks: `Tingkat pendidikan masyarakat di suatu wilayah` },
          { label: 'E', teks: `Program bantuan sosial dari pemerintah untuk kelompok tertentu` },
        ],
        kunci: 'A',
        pembahasan: `Dalam konteks paragraf, kata “kesejahteraan” merujuk pada keadaan masyarakat yang hidup layak dan terpenuhi kebutuhannya, termasuk akses terhadap pendidikan, pekerjaan, dan kebutuhan dasar. Program bantuan sosial seperti PKH dan BPNT disebut sebagai upaya pemerintah untuk meningkatkan kesejahteraan, tetapi kesejahteraan itu sendiri mencakup kondisi hidup yang lebih luas, bukan hanya bantuan finansial atau program tertentu.

Konsep: Kesejahteraan Masyarakat
Kata Kunci: kesejahteraan, hidup layak, terpenuhi kebutuhan, bantuan sosial, pendidikan

Pembahasan Opsi Salah:
Opsi B salah karena bantuan finansial hanyalah salah satu upaya meningkatkan kesejahteraan, bukan makna kesejahteraan itu sendiri.
Opsi C salah karena jumlah pendapatan hanya salah satu indikator, bukan keseluruhan makna kesejahteraan.
Opsi D salah karena pendidikan hanyalah salah satu aspek kesejahteraan, bukan pengertian utamanya.
Opsi E salah karena program bantuan sosial adalah sarana, bukan definisi kesejahteraan.

Carcep: Kesejahteraan masyarakat berarti kondisi hidup yang layak, terpenuhi kebutuhan dasar, dan memiliki kesempatan untuk meningkatkan kualitas hidup, sementara program pemerintah merupakan upaya untuk mencapainya.`,
        tingkat: 'mudah',
        status: 'direview',
      },
      {
        nomor: 35,
        tipe: 'pg',
        pertanyaan: `Kalimat berikut digunakan dalam laporan resmi pemerintah:

“Panitia akan segera menyelesaikan dan mengerjakan penyusunan laporan kegiatan yang sudah dilaksanakan.”

Kalimat di atas tidak efektif. Perbaikannya yang paling tepat adalah…`,
        opsi: [
          { label: 'A', teks: `Panitia segera menyelesaikan laporan kegiatan.` },
          { label: 'B', teks: `Panitia akan menyusun dan mengerjakan laporan kegiatan.` },
          { label: 'C', teks: `Panitia sudah melaksanakan penyusunan laporan kegiatan.` },
          { label: 'D', teks: `Laporan kegiatan segera dikerjakan panitia.` },
          { label: 'E', teks: `Panitia akan mengerjakan laporan yang sudah dilaksanakan.` },
        ],
        kunci: 'A',
        pembahasan: `Kalimat asli tidak efektif karena mengandung pengulangan dan kata-kata yang berlebihan seperti “menyelesaikan dan mengerjakan” serta “penyusunan laporan kegiatan yang sudah dilaksanakan.” Kalimat efektif harus hemat, jelas, dan memiliki struktur subjek–predikat–objek yang tepat. Opsi A “Panitia segera menyelesaikan laporan kegiatan” memenuhi kriteria tersebut karena singkat, lugas, dan tidak mengubah makna utama dari kalimat asli.

Konsep: Kalimat Efektif dalam Bahasa Indonesia
Kata Kunci: kehematan, kejelasan makna, struktur S–P–O

Pembahasan Opsi Salah:
Opsi B salah karena mengandung pengulangan makna “menyusun dan mengerjakan” yang membuat kalimat boros.
Opsi C salah karena mengubah makna waktu, seolah kegiatan sudah selesai padahal konteksnya masih akan dilakukan.
Opsi D salah karena menggunakan bentuk pasif, sementara kalimat laporan resmi lebih baik menggunakan bentuk aktif agar jelas siapa pelakunya.
Opsi E salah karena tidak logis, sebab “laporan” tidak bisa “dilaksanakan.”

Carcep: Kalimat efektif harus menghindari kata yang berlebihan dan mempertahankan makna utama dengan struktur yang ringkas serta jelas.`,
        tingkat: 'sedang',
        status: 'direview',
      },
      {
        nomor: 36,
        tipe: 'pg',
        pertanyaan: `Di beberapa kota besar, masyarakat semakin bergantung pada transportasi daring. Layanan ini mempermudah mobilitas, tetapi juga menimbulkan masalah baru, seperti kemacetan dan persaingan tidak sehat dengan transportasi konvensional. Pemerintah dituntut mencari regulasi yang adil agar kedua moda transportasi dapat berjalan berdampingan.

Kesimpulan yang paling tepat dari teks tersebut adalah…`,
        opsi: [
          { label: 'A', teks: `Transportasi daring lebih bermanfaat daripada transportasi konvensional.` },
          { label: 'B', teks: `Pemerintah perlu membuat regulasi yang adil agar transportasi berjalan seimbang.` },
          { label: 'C', teks: `Kemacetan dan persaingan tidak sehat adalah dampak dari transportasi daring.` },
          { label: 'D', teks: `Masyarakat kota besar semakin bergantung pada transportasi daring.` },
          { label: 'E', teks: `Transportasi konvensional harus digantikan oleh transportasi daring.` },
        ],
        kunci: 'B',
        pembahasan: `Konsep: Kesimpulan harus sesuai isi, tidak menyimpang atau menyempitkan.
Kata Kunci: regulasi adil – pemerintah – transportasi berjalan berdampingan.

Pembahasan Jawaban Benar: Opsi B paling tepat karena sesuai inti paragraf: solusi yang dibutuhkan adalah regulasi adil, bukan sekadar masalah atau perbandingan transportasi.

Pembahasan Opsi Lainnya:
A dan E terlalu berpihak; C hanya detail; D hanya data, bukan kesimpulan.

Carcep: Jika paragraf berakhir dengan “pemerintah dituntut…” → biasanya kesimpulan = peran/solusi pemerintah.`,
        tingkat: 'sedang',
        status: 'direview',
      },
      {
        nomor: 37,
        tipe: 'pg',
        pertanyaan: `Bacalah teks berikut:

Banyak sekolah di daerah pedalaman Indonesia masih kekurangan guru dan fasilitas belajar. Kondisi ini berakibat pada rendahnya mutu pendidikan dan memperlebar kesenjangan kualitas sumber daya manusia dengan daerah perkotaan. Untuk mengatasi hal tersebut, pemerintah meluncurkan program pengiriman guru ke daerah 3T (terdepan, terluar, tertinggal). Namun, program ini belum sepenuhnya efektif karena keterbatasan anggaran dan minimnya insentif bagi tenaga pendidik.

Jika Anda diminta memberikan kesimpulan kritis dari paragraf tersebut, pernyataan yang paling tepat adalah…`,
        opsi: [
          { label: 'A', teks: `Pemerintah gagal meningkatkan mutu pendidikan di daerah 3T.` },
          { label: 'B', teks: `Program pengiriman guru 3T tidak efektif karena anggaran terlalu kecil.` },
          { label: 'C', teks: `Kesenjangan pendidikan masih menjadi tantangan besar meskipun ada program pemerintah.` },
          { label: 'D', teks: `Sekolah di perkotaan lebih maju daripada sekolah di pedalaman.` },
          { label: 'E', teks: `Mutu pendidikan rendah disebabkan kekurangan guru di semua daerah.` },
        ],
        kunci: 'C',
        pembahasan: `[Draf tim: pembahasan soal ini belum ada di dokumen riset sumber. Teks di bawah disusun dari isi soal dan perlu ditinjau sebelum dipakai.]

Konsep: Menarik kesimpulan kritis dari paragraf
Kata Kunci: kesimpulan kritis, kesenjangan pendidikan, program pemerintah, daerah 3T

Paragraf menyebut sekolah di daerah pedalaman kekurangan guru dan fasilitas sehingga mutu pendidikan rendah dan kesenjangan dengan perkotaan melebar. Pemerintah sudah meluncurkan program pengiriman guru ke daerah 3T, tetapi belum sepenuhnya efektif karena keterbatasan anggaran dan minimnya insentif. Kesimpulan kritis yang paling tepat merangkum persoalan dan upaya sekaligus: kesenjangan pendidikan masih menjadi tantangan besar meskipun sudah ada program pemerintah.

Pembahasan Opsi Salah:
Opsi A salah, karena terlalu menyimpulkan: teks menyebut program belum sepenuhnya efektif, bukan gagal.
Opsi B salah, karena hanya mengambil satu penyebab (anggaran) dan mengabaikan penyebab lain yang disebut teks, yaitu minimnya insentif.
Opsi D salah, karena hanya detail perbandingan dan tidak merangkum persoalan serta upaya pemerintah.
Opsi E salah, karena teks hanya membahas daerah pedalaman, bukan semua daerah, dan kekurangan guru bukan satu-satunya penyebab.

Carcep:
Kesimpulan kritis yang baik merangkum inti persoalan dan upaya yang sudah ada, tanpa menyimpulkan berlebihan (gagal, semua daerah) dan tanpa mengambil satu detail saja.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      {
        nomor: 38,
        tipe: 'pg',
        pertanyaan: `Hubungan objek pada kalimat "Seorang petugas pemadam kebakaran pergi menggunakan mobil pemadam dan selang air digunakan untuk memadamkan titik api" setara dengan ...`,
        opsi: [
          { label: 'A', teks: `Seorang pemain basket akan pergi bertanding dengan menaiki bus tim dan lapangan pertandingannya sudah disiapkan oleh panitia` },
          { label: 'B', teks: `Seorang nelayan akan berlayar dengan perahu dan jala untuk menangkap ikan di laut` },
          { label: 'C', teks: `Seorang guru terbiasa menggunakan spidol dan papan tulis untuk mengajar di kelas` },
          { label: 'D', teks: `Sebuah kipas angin menghasilkan angin dan remote digunakan untuk mempercepat laju anginnya` },
          { label: 'E', teks: `Seorang polisi memakai senjata api dan borgol digunakan untuk menangkap penjahat` },
        ],
        kunci: 'B',
        pembahasan: `Konsep Soal : Soal ini termasuk analogi hubungan objek (alat dan fungsi). Tujuannya adalah mengidentifikasi hubungan logis antara dua alat atau benda yang digunakan dalam pekerjaan atau aktivitas tertentu.

Kata Kunci : Mobil pemadam = alat transportasi, Selang air = alat utama menjalankan tugas, Petugas pemadam kebakaran = profesi yang menggunakan kedua alat tersebut untuk satu tujuan, yaitu memadamkan api

Pada kalimat “Seorang petugas pemadam kebakaran pergi menggunakan mobil pemadam dan selang air digunakan untuk memadamkan titik api,” terdapat dua alat utama yang digunakan untuk menjalankan tugas:
1. Mobil pemadam yaitu alat transportasi untuk menuju lokasi kebakaran.
2. Selang air yaitu alat utama untuk memadamkan api.

Hubungan yang serupa adalah nelayan dengan perahu dan jala, yaitu:
3. Perahu yaitu alat transportasi menuju laut.
4. Jala yaitu alat utama untuk menjalankan tugas menangkap ikan.

Alasan opsi lain salah :
Opsi A salah karena Bus memang alat transportasi, tapi lapangan bukan alat yang digunakan oleh pemain, melainkan tempat pertandingan. Hubungannya tidak setara.
Opsi C salah karena Keduanya adalah alat kerja, tidak ada unsur alat transportasi, jadi pola hubungannya berbeda.
Opsi D salah karena Kedua benda ini saling berkaitan secara fungsi, tapi tidak menunjukkan hubungan profesi dan alat kerja.
Opsi E salah karena Kedua alat digunakan dalam satu aktivitas, tapi tidak ada alat transportasi seperti pada kalimat soal.

Tips & Trick :
1. Identifikasi hubungan dasar pada kalimat pertama (misalnya: alat & fungsinya, sebab & akibat, tempat & kegiatan, profesi & alat kerja).
2. Tentukan pola hubungan, misalnya: alat transportasi + alat utama tugas.
3. Cari pasangan yang memiliki struktur hubungan yang sama.
4. Eliminasi pilihan yang hanya memiliki kemiripan kata tetapi tidak sepadan secara logis.`,
        tingkat: 'sulit',
        status: 'direview',
      },
      {
        nomor: 39,
        tipe: 'pg',
        pertanyaan: `Dalam era globalisasi, arus budaya asing semakin mudah masuk ke Indonesia melalui media sosial, film, dan musik. Walaupun memberi manfaat berupa wawasan baru, masuknya budaya asing juga menimbulkan tantangan bagi generasi muda dalam menjaga identitas nasional. Oleh karena itu, peran pendidikan sangat penting untuk memperkuat jati diri bangsa di tengah derasnya pengaruh global.

Kesimpulan yang paling tepat adalah…`,
        opsi: [
          { label: 'A', teks: `Budaya asing sebaiknya dilarang masuk ke Indonesia.` },
          { label: 'B', teks: `Generasi muda harus menolak semua bentuk budaya asing.` },
          { label: 'C', teks: `Pendidikan berperan penting menjaga identitas bangsa di tengah globalisasi.` },
          { label: 'D', teks: `Globalisasi hanya membawa dampak negatif bagi Indonesia.` },
          { label: 'E', teks: `Media sosial menjadi penyebab utama lunturnya identitas bangsa.` },
        ],
        kunci: 'C',
        pembahasan: `Tingkat kesulitan: HOTS

Konsep: Kesimpulan harus mencerminkan solusi utama yang ditawarkan teks.
Kata Kunci: identitas bangsa – pendidikan – globalisasi.

Pembahasan Jawaban Benar: Opsi C paling tepat karena sesuai dengan bagian akhir paragraf yang menekankan pentingnya pendidikan sebagai solusi.

Pembahasan Opsi Lainnya:
A & B bersifat ekstrem (melarang/menolak semua).
D bertentangan dengan teks karena globalisasi juga memberi manfaat.
E hanya mengambil satu detail, bukan kesimpulan utama.
Carcep: Kalau paragraf ditutup dengan “oleh karena itu…” → biasanya jawaban ada pada kalimat terakhir.`,
        tingkat: 'sulit',
        status: 'direview',
      },
      {
        nomor: 40,
        tipe: 'pg',
        pertanyaan: `Perhatikan kalimat berikut:
“Setiap warga negara Indonesia wajib menjunjung tinggi bahasa Indonesia sebagai bahasa nasional.”

Fungsi kata menjunjung tinggi pada kalimat tersebut bermakna …`,
        opsi: [
          { label: 'A', teks: `Menghormati dan menggunakan bahasa Indonesia secara konsisten.` },
          { label: 'B', teks: `Mengutamakan bahasa daerah daripada bahasa Indonesia.` },
          { label: 'C', teks: `Meningkatkan jumlah kosakata bahasa Indonesia dalam kehidupan sehari-hari.` },
          { label: 'D', teks: `Mengembangkan bahasa Indonesia menjadi bahasa internasional.` },
          { label: 'E', teks: `Menghapus penggunaan bahasa asing di media sosial.` },
        ],
        kunci: 'A',
        pembahasan: `Tingkat kesulitan: HOTS

Konsep yang digunakan : Ungkapan idiomatik dalam bahasa Indonesia.
Kata Kunci : Menjunjung tinggi = menghormati dan mematuhi.

Ungkapan menjunjung tinggi bermakna menghormati dan melaksanakan sesuatu dengan sungguh-sungguh. Dalam konteks ini, berarti menghormati bahasa Indonesia dengan cara menggunakan dan melestarikannya sesuai fungsinya sebagai bahasa nasional.

Alasan opsi lain salah:
Opsi B salah, karena bertentangan dengan semangat penggunaan bahasa Indonesia.
Opsi C salah, karena makna menjunjung tinggi tidak berarti memperbanyak kosakata.
Opsi D salah, karena bukan berarti menjadikannya internasional.
Opsi E salah, karena maknanya terlalu sempit.

Tips & Trick :
Menjunjung tinggi yaitu menghormati dan mengamalkan nilai atau aturan yang berlaku.`,
        tingkat: 'sulit',
        status: 'direview',
      },
    ],
  },
];
