import type { Kelompok } from '@/lib/skema';

/**
 * Contoh soal TKP untuk SKD CPNS 2027, dari "Panduan Produksi TKP SKD CPNS" (PT Cerebrum
 * Edukanesia Nusantara, 2026). Isinya 26 contoh soal, dikelompokkan per aspek seperti di panduan:
 * Pelayanan Publik 5, Jejaring Kerja 3, Sosial Budaya 4, TIK 4, Profesionalisme 5, Anti
 * Radikalisme 5. Nomor soal berurutan 1 sampai 26 di seluruh subtes; di panduan nomornya mulai
 * dari 1 lagi di tiap aspek (judul contoh asli ditulis di baris pertama pembahasan). Jejaring
 * Kerja tidak punya contoh soal 1 di panduan (materi 2.1 tanpa contoh), jadi nomornya mulai dari 2.
 *
 * Soal berskala (tipe 'skala'): kunci adalah opsi berskor 5. Skor tiap opsi (1 sampai 5), Level Bloom,
 * dan Tingkat Kesulitan ditulis di pembahasan, memakai penulisan panduan. Skema hanya punya
 * tingkat mudah/sedang/sulit, jadi soal bertingkat HOTS (24 soal) dan Sulit (2 soal) ditulis 'sulit'.
 *
 * Teks disalin dari panduan tanpa diringkas. Gambar di panduan hanya hiasan latar halaman, tidak dipakai.
 * Contoh nomor 11 (Sosial Budaya, Contoh Soal 3 "Empati, Kepedulian, dan Harmoni Sosial") tidak punya
 * bagian "Cara cepat" di panduan, berbeda dari 25 contoh lainnya. Bagian itu dibiarkan kosong sampai
 * dilengkapi penyusun panduan.
 * Status 'direview': belum ditinjau ulang untuk keperluan etalase.
 */
export const contohTkp: Kelompok[] = [
  {
    stimulus: { judul: `Pelayanan Publik` },
    soal: [
      {
        nomor: 1,
        tipe: 'skala',
        pertanyaan: `Sebuah unit layanan memiliki kanal pengaduan resmi, tetapi partisipasi masyarakat masih rendah meskipun keluhan tentang layanan cukup banyak. Pimpinan meminta Anda meningkatkan penggunaan kanal tersebut tanpa sekadar mengejar angka laporan. Tindakan yang paling tepat adalah ...`,
        opsi: [
          { label: 'A', teks: `Menyelenggarakan edukasi singkat tentang cara menyampaikan dan memantau aduan, bekerja sama dengan perwakilan komunitas, serta memastikan ada umpan balik atas setiap laporan.` },
          { label: 'B', teks: `Mengirim pesan massal agar masyarakat lebih sering melapor dan membentuk tim pencatat, meskipun tidak semua laporan dapat segera ditindaklanjuti.` },
          { label: 'C', teks: `Memprioritaskan hanya laporan yang dianggap berdampak besar agar beban kerja tetap terkendali.` },
          { label: 'D', teks: `Membuka jalur komunikasi khusus untuk tokoh masyarakat yang dinilai paling kooperatif.` },
          { label: 'E', teks: `Menunda peningkatan partisipasi agar tidak menimbulkan ekspektasi baru dari masyarakat.` },
        ],
        kunci: 'A',
        pembahasan: `Contoh Soal 1 – Konsep Dasar dan Ruang Lingkup Pelayanan Publik
Level Bloom: C5 - Mengevaluasi
Tingkat Kesulitan: HOTS

Konsep yang digunakan: Partisipasi masyarakat, pengelolaan pengaduan, orientasi pengguna, dan perbaikan berkelanjutan.
Kata kunci: edukasi, kanal pengaduan, tindak lanjut, umpan balik, partisipasi setara

Opsi A paling lengkap karena tidak hanya menaikkan jumlah laporan, tetapi membangun kemampuan masyarakat menggunakan kanal, memperluas akses secara setara, dan menjaga kepercayaan melalui umpan balik. Tindakan tersebut memperlakukan pengaduan sebagai bagian dari siklus perbaikan layanan, bukan sekadar indikator administratif.

Pembahasan setiap opsi:
A (5 poin): Paling partisipatif, edukatif, setara, dan berorientasi pada tindak lanjut.
B (4 poin): Meningkatkan akses dan pencatatan, tetapi berisiko menurunkan kepercayaan jika tindak lanjut tidak jelas.
C (2 poin): Efisien bagi organisasi, tetapi mengabaikan kesetaraan dan dapat mengecilkan keluhan yang dianggap tidak penting.
D (1 poin): Menciptakan jalur istimewa dan bertentangan dengan prinsip akses yang setara.
E (3 poin): Menjaga stabilitas operasional, tetapi pasif dan tidak menjawab kebutuhan masyarakat.

Cara cepat: Untuk isu partisipasi, pilih respons yang membuka akses, mendidik pengguna, dan menjamin tindak lanjut; bukan sekadar menambah saluran atau mengejar angka.`,
        tingkat: 'sulit',
        status: 'direview',
      },
      {
        nomor: 2,
        tipe: 'skala',
        pertanyaan: `Sistem antrean daring mengalami keterlambatan sinkronisasi. Beberapa warga yang sudah mengambil nomor daring tidak muncul dalam daftar ketika tiba di kantor. Mereka khawatir dianggap tidak hadir, sementara antrean manual sudah mengular. Tindakan yang paling tepat adalah ...`,
        opsi: [
          { label: 'A', teks: `Meminta seluruh warga mengulang antrean secara manual agar data ditata kembali dari awal.` },
          { label: 'B', teks: `Memasukkan warga ke antrean manual berdasarkan perkiraan nomor yang mereka sebutkan.` },
          { label: 'C', teks: `Menjelaskan gangguan secara terbuka, memverifikasi bukti nomor antrean daring, lalu menempatkan mereka sesuai urutan bukti tersebut.` },
          { label: 'D', teks: `Meminta warga menunggu sampai sistem pulih sambil tetap mengambil nomor antrean manual.` },
          { label: 'E', teks: `Mengutamakan antrean manual karena sistem daring sedang bermasalah.` },
        ],
        kunci: 'C',
        pembahasan: `Contoh Soal 2 – Prinsip dan Standar Pelayanan Publik
Level Bloom: C4 - Menganalisis
Tingkat Kesulitan: HOTS

Konsep yang digunakan: Keterbukaan, verifikasi, kepastian proses, keadilan antrean, dan kontinuitas layanan.
Kata kunci: gangguan sinkronisasi, bukti antrean, transparansi, urutan, adil

Opsi C menjaga hak warga yang telah mengikuti prosedur daring tanpa merugikan warga lain. Verifikasi bukti mencegah manipulasi, penjelasan terbuka mengurangi kecurigaan, dan penempatan sesuai urutan mempertahankan keadilan proses.

Pembahasan setiap opsi:
A (1 poin): Menghapus hak antrean yang telah diperoleh dan berpotensi memicu konflik.
B (3 poin): Memberi solusi cepat, tetapi perkiraan tanpa bukti rawan tidak akurat dan tidak akuntabel.
C (5 poin): Paling transparan, dapat diverifikasi, adil, dan menjaga pelayanan tetap berjalan.
D (2 poin): Pasif, menggandakan beban warga, dan tidak memberi kepastian.
E (4 poin): Praktis untuk menjaga alur manual, tetapi mengabaikan hak pengguna kanal daring.

Cara cepat: Jika tersedia bukti proses, respons terbaik mengakui bukti tersebut, menjelaskan gangguan, dan menjaga urutan secara adil.`,
        tingkat: 'sulit',
        status: 'direview',
      },
      {
        nomor: 3,
        tipe: 'skala',
        pertanyaan: `Anda sedang memproses permohonan yang mendesak. Aplikasi layanan tiba-tiba sangat lambat sehingga penyelesaian satu dokumen memerlukan waktu lebih lama. Pengguna mulai gelisah dan terus menanyakan kapan proses selesai. Sikap Anda adalah ...`,
        opsi: [
          { label: 'A', teks: `Meminta pengguna tidak banyak bertanya karena pertanyaan tersebut menambah tekanan kerja.` },
          { label: 'B', teks: `Menunjukkan seluruh layar sistem agar pengguna melihat sendiri bahwa aplikasi sedang bermasalah.` },
          { label: 'C', teks: `Mengalihkan pembicaraan ke topik lain agar pengguna tidak terlalu memikirkan keterlambatan.` },
          { label: 'D', teks: `Meminta pengguna meninggalkan berkas dan berjanji menghubungi setelah sistem kembali lancar.` },
          { label: 'E', teks: `Tetap tenang, meminta maaf atas kendala, menjelaskan situasi seperlunya, dan memberikan estimasi waktu tunggu yang realistis.` },
        ],
        kunci: 'E',
        pembahasan: `Contoh Soal 3 – Sikap Pelayanan Prima dan Kepuasan Masyarakat
Level Bloom: C4 - Menganalisis
Tingkat Kesulitan: HOTS

Konsep yang digunakan: Pelayanan prima, manajemen ekspektasi, komunikasi, dan keamanan informasi.
Kata kunci: sistem lambat, pengguna gelisah, permintaan maaf, estimasi realistis

Opsi E memenuhi kebutuhan emosional dan informasional pengguna sekaligus menjaga profesionalisme. Petugas tidak menyalahkan pengguna, tidak membuka data yang tidak perlu, dan tidak memberikan janji pasti yang belum dapat dijamin.

Pembahasan setiap opsi:
A (1 poin): Tidak empatik dan berpotensi memperburuk konflik.
B (4 poin): Transparan, tetapi memperlihatkan layar internal dapat menimbulkan risiko keamanan atau kerahasiaan.
C (2 poin): Menghindari inti masalah dan tidak memberikan kepastian.
D (3 poin): Praktis, tetapi memindahkan beban dan belum tentu sesuai kebutuhan pengguna.
E (5 poin): Paling seimbang dalam empati, informasi, kepastian, dan profesionalisme.

Cara cepat: Pada gangguan layanan, cari opsi yang memadukan permintaan maaf, penjelasan yang cukup, estimasi realistis, dan perlindungan informasi.`,
        tingkat: 'sulit',
        status: 'direview',
      },
      {
        nomor: 4,
        tipe: 'skala',
        pertanyaan: `Anda bertugas di loket prioritas untuk lansia, ibu hamil, dan penyandang disabilitas. Seorang warga yang tidak termasuk kategori prioritas meminta dilayani di loket tersebut karena sedang terburu-buru. Ia mengancam akan mengajukan laporan jika permintaannya ditolak. Tindakan paling tepat adalah ...`,
        opsi: [
          { label: 'A', teks: `Menjelaskan tujuan loket prioritas, meminta pengertian, dan menawarkan bantuan pengecekan awal tanpa memotong antrean.` },
          { label: 'B', teks: `Meminta warga tetap menggunakan jalur reguler dan menegaskan aturan secara singkat.` },
          { label: 'C', teks: `Melayani warga tersebut di loket prioritas agar konflik tidak membesar.` },
          { label: 'D', teks: `Mengarahkan warga kepada petugas lain agar Anda tidak menghadapi komplain.` },
          { label: 'E', teks: `Meminta warga menulis keluhan terlebih dahulu sebelum diarahkan ke jalur reguler.` },
        ],
        kunci: 'A',
        pembahasan: `Contoh Soal 4 – Pelayanan yang Adil, Inklusif, dan Tidak Diskriminatif
Level Bloom: C4 - Menganalisis
Tingkat Kesulitan: HOTS

Konsep yang digunakan: Kesetaraan, keadilan, loket prioritas, komunikasi persuasif, dan anti-favoritisme.
Kata kunci: bukan kategori prioritas, ancaman laporan, aturan, solusi alternatif

Opsi A mempertahankan fungsi loket prioritas dan tidak mengorbankan hak kelompok rentan. Pada saat yang sama, petugas tidak bersikap kaku karena tetap menawarkan bantuan yang tidak mengubah urutan antrean. Respons ini membedakan akomodasi yang sah dari perlakuan istimewa karena tekanan.

Pembahasan setiap opsi:
A (5 poin): Paling adil, empatik, dan tetap konsisten dengan tujuan loket prioritas.
B (4 poin): Sesuai aturan, tetapi kurang membantu dan dapat terasa kaku.
C (1 poin): Mengorbankan hak pengguna prioritas dan memberi insentif pada ancaman.
D (2 poin): Menghindari tanggung jawab serta memindahkan konflik.
E (3 poin): Menjaga prosedur, tetapi menambah langkah yang tidak perlu dan belum menyelesaikan kebutuhan.

Cara cepat: Untuk konflik jalur prioritas, pilih opsi yang melindungi hak kelompok sasaran dan menawarkan bantuan lain tanpa memotong antrean.`,
        tingkat: 'sulit',
        status: 'direview',
      },
      {
        nomor: 5,
        tipe: 'skala',
        pertanyaan: `Petugas layanan perjalanan menemukan dokumen identitas seorang pengguna sedikit rusak pada bagian sudut, tetapi data utama masih terbaca. Aturan menyatakan dokumen rusak dapat ditolak oleh otoritas tujuan. Pengguna memohon karena harus menghadiri pemakaman orang tuanya dan tidak memiliki waktu mengurus dokumen baru. Tindakan yang sebaiknya dilakukan adalah ...`,
        opsi: [
          { label: 'A', teks: `Mengizinkan pengguna melanjutkan proses karena kondisi kedukaan merupakan alasan kemanusiaan.` },
          { label: 'B', teks: `Menolak secara tegas tanpa penjelasan tambahan karena aturan harus dipatuhi.` },
          { label: 'C', teks: `Membantu pengguna berkoordinasi dengan otoritas dokumen dan penyedia layanan untuk memastikan apakah tingkat kerusakan masih dapat diterima.` },
          { label: 'D', teks: `Menyarankan pengguna memperbaiki bagian yang rusak secara mandiri agar tidak terlihat.` },
          { label: 'E', teks: `Langsung meminta pimpinan membuat pengecualian khusus agar pengguna dapat berangkat.` },
        ],
        kunci: 'C',
        pembahasan: `Contoh Soal 5 – Pengambilan Keputusan dalam Skenario Pelayanan Publik
Level Bloom: C5 – Mengevaluasi
Tingkat Kesulitan: HOTS

Konsep yang digunakan: Kepatuhan, empati, batas kewenangan, koordinasi, risiko, dan solusi sah.
Kata kunci: dokumen rusak, keadaan mendesak, otoritas berwenang, koordinasi

Opsi C paling proporsional. Petugas tidak mengambil risiko dengan mengizinkan atau menolak secara sepihak. Koordinasi dengan pihak yang memiliki kewenangan memberi peluang solusi yang sah, melindungi pengguna dari masalah di tujuan, dan tetap menunjukkan empati terhadap kondisi mendesak.

Pembahasan setiap opsi:
A (2 poin): Empatik, tetapi melampaui kewenangan dan dapat menimbulkan risiko lebih besar bagi pengguna.
B (3 poin): Patuh aturan, tetapi terlalu kaku dan tidak mencoba mencari solusi.
C (5 poin): Paling legal, empatik, solutif, dan sesuai batas kewenangan.
D (1 poin): Mendorong manipulasi dokumen dan bertentangan dengan integritas.
E (4 poin): Berusaha membantu melalui eskalasi, tetapi melewati koordinasi teknis yang seharusnya dilakukan terlebih dahulu.

Cara cepat: Ketika aturan dan kondisi kemanusiaan bertentangan, cari opsi yang tidak melanggar aturan tetapi aktif menghubungkan pengguna dengan pihak berwenang.`,
        tingkat: 'sulit',
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Jejaring Kerja` },
    soal: [
      {
        nomor: 6,
        tipe: 'skala',
        pertanyaan: `Koordinasi lintas bagian sering terlambat karena informasi penting hanya diketahui sebagian pegawai atau baru dibagikan setelah diminta. Sikap yang paling tepat untuk mendukung kerja tim adalah ...`,
        opsi: [
          { label: 'A', teks: `Membagikan informasi hanya sejauh berkaitan langsung dengan tugas pribadi.` },
          { label: 'B', teks: `Menyampaikan informasi kepada beberapa rekan yang dianggap paling membutuhkan tanpa menunggu permintaan.` },
          { label: 'C', teks: `Menyebarkan informasi yang dibutuhkan melalui saluran internal yang sesuai dan membuka ruang klarifikasi bagi pihak terkait.` },
          { label: 'D', teks: `Menyimpan informasi sampai atasan atau rekan meminta secara eksplisit.` },
          { label: 'E', teks: `Menunggu rapat formal berikutnya agar seluruh informasi disampaikan dalam satu forum.` },
        ],
        kunci: 'C',
        pembahasan: `Contoh Soal 2 – Komunikasi, Koordinasi, dan Berbagi Informasi
Level Bloom: C4 – Menganalisis
Tingkat Kesulitan: HOTS

Konsep yang digunakan: Keterbukaan informasi, koordinasi proaktif, akurasi, dan akses pihak relevan
Kata kunci: silo informasi, saluran internal, proaktif, klarifikasi, kebutuhan akses

Opsi C paling tepat karena memastikan informasi tersedia bagi seluruh pihak relevan, tidak bergantung pada kedekatan personal, dan tetap menggunakan saluran internal yang dapat dipertanggungjawabkan. Ruang klarifikasi juga mengurangi risiko salah tafsir dan mempercepat koordinasi.

Pembahasan setiap opsi:
A (2 poin): Berbagi secara sangat terbatas sehingga kebutuhan lintas bagian dan tujuan bersama dapat terabaikan.
B (4 poin): Proaktif dan membantu, tetapi masih selektif sehingga belum menjamin akses informasi yang merata.
C (5 poin): Proaktif, inklusif, menggunakan kanal yang tepat, dan menyediakan ruang untuk memastikan pemahaman.
D (1 poin): Pasif dan menciptakan hambatan informasi yang dapat memperlambat pekerjaan.
E (3 poin): Menjaga keteraturan, tetapi terlalu lambat untuk kebutuhan informasi yang memengaruhi pekerjaan berjalan.

Cara cepat: Pilih respons yang membuat informasi akurat tersedia bagi semua pihak relevan melalui jalur yang tepat, bukan hanya kepada orang tertentu atau setelah diminta.`,
        tingkat: 'sulit',
        status: 'direview',
      },
      {
        nomor: 7,
        tipe: 'skala',
        pertanyaan: `Dua anggota tim memiliki cara kerja berbeda dan mulai saling menyalahkan atas keterlambatan target. Ketegangan mulai memengaruhi anggota lain. Tindakan yang paling tepat adalah ...`,
        opsi: [
          { label: 'A', teks: `Meminta keduanya menyelesaikan masalah sendiri agar anggota lain tidak terlibat.` },
          { label: 'B', teks: `Menegur keduanya di depan tim agar menjadi pelajaran bersama.` },
          { label: 'C', teks: `Mengundang keduanya berdiskusi secara pribadi untuk menggali akar masalah dan merumuskan solusi bersama.` },
          { label: 'D', teks: `Menunda pembahasan konflik agar tim berfokus dahulu pada pekerjaan yang mendesak.` },
          { label: 'E', teks: `Mengganti salah satu anggota yang dianggap paling banyak menimbulkan masalah.` },
        ],
        kunci: 'C',
        pembahasan: `Contoh Soal 3 – Kolaborasi dan Penyelesaian Masalah dalam Tim
Level Bloom: C5 – Mengevaluasi
Tingkat Kesulitan: HOTS

Konsep yang digunakan: Mediasi konflik, komunikasi terbuka, objektivitas, dan tanggung jawab bersama
Kata kunci: saling menyalahkan, mediasi privat, akar masalah, solusi bersama, tindak lanjut

Opsi C paling tepat karena menyediakan ruang aman untuk mendengar fakta dan perspektif kedua pihak tanpa mempermalukan mereka. Penyelesaian tidak berhenti pada meredakan emosi, tetapi mengarah pada akar masalah, kesepakatan kerja, serta tanggung jawab atas tindak lanjut.

Pembahasan setiap opsi:
A (2 poin): Memberi ruang mandiri, tetapi terlalu pasif ketika konflik sudah memengaruhi tim dan membutuhkan fasilitasi.
B (1 poin): Mempermalukan pihak di depan umum, meningkatkan defensif, dan dapat merusak kepercayaan tim.
C (5 poin): Empatik, objektif, langsung menangani akar masalah, dan melibatkan kedua pihak dalam solusi.
D (3 poin): Menjaga fokus jangka pendek, tetapi membiarkan konflik berlarut dan mengganggu produktivitas berikutnya.
E (4 poin): Tegas dan dapat menghentikan gangguan, tetapi terlalu drastis tanpa pemeriksaan menyeluruh dan upaya perbaikan.

Cara cepat: Saat konflik interpersonal muncul, pilih mediasi yang objektif dan privat, gali akar masalah, susun solusi bersama, lalu pastikan komitmen tindak lanjut.`,
        tingkat: 'sulit',
        status: 'direview',
      },
      {
        nomor: 8,
        tipe: 'skala',
        pertanyaan: `Dalam proyek lintas organisasi, seorang rekan memiliki koneksi luas dengan pihak eksternal yang relevan. Dukungan koneksi tersebut dapat mempercepat proyek, tetapi pendekatan yang terlalu langsung dapat menimbulkan kesan bahwa hubungan itu hanya dimanfaatkan. Tindakan yang paling tepat adalah ...`,
        opsi: [
          { label: 'A', teks: `Segera meminta rekan mengenalkan Anda kepada semua pihak yang relevan.` },
          { label: 'B', teks: `Mendiskusikan tujuan dan kebutuhan proyek secara terbuka, kemudian meminta dukungan koneksinya secara proporsional dengan tetap menjaga hubungan profesional.` },
          { label: 'C', teks: `Mengandalkan jalur formal antarorganisasi agar hubungan pribadi tidak pernah digunakan.` },
          { label: 'D', teks: `Menunggu sampai rekan tersebut menawarkan bantuan koneksi atas inisiatifnya sendiri.` },
          { label: 'E', teks: `Menggunakan jalur lain dan tidak melibatkan rekan tersebut untuk menghindari kemungkinan salah paham.` },
        ],
        kunci: 'B',
        pembahasan: `Contoh Soal 4 – Pengembangan Hubungan Kerja dan Kemitraan Produktif
Level Bloom: C5 – Mengevaluasi
Tingkat Kesulitan: HOTS

Konsep yang digunakan: Etika pemanfaatan jejaring, transparansi tujuan, kepercayaan, dan profesionalisme hubungan
Kata kunci: koneksi eksternal, tujuan proyek, manfaat, batas profesional, kepercayaan

Opsi B paling tepat karena tidak memperlakukan koneksi rekan sebagai sumber daya yang dapat diambil begitu saja. Pembicaraan terbuka memberi konteks, memungkinkan rekan menilai relevansi dan risiko, serta menjaga kesukarelaan dan kepercayaan. Dukungan jejaring tetap dimanfaatkan, tetapi secara etis dan proporsional.

Pembahasan setiap opsi:
A (2 poin): Proaktif, tetapi terlalu langsung dan berisiko menimbulkan kesan memanfaatkan hubungan pribadi.
B (5 poin): Transparan, strategis, menghargai rekan, dan memanfaatkan jejaring secara etis untuk tujuan bersama.
C (4 poin): Menjaga profesionalisme, tetapi terlalu membatasi potensi sinergi yang sebenarnya dapat digunakan secara sah.
D (3 poin): Menghargai kenyamanan rekan, tetapi terlalu pasif dan dapat membuat peluang kerja sama hilang.
E (1 poin): Menghindari kolaborasi tanpa mencoba komunikasi, sehingga sumber daya relevan tidak dimanfaatkan.

Cara cepat: Ketika menggunakan koneksi pihak lain, jelaskan tujuan dan konteks terlebih dahulu, minta dukungan secara wajar, serta jaga kesukarelaan dan batas profesional.`,
        tingkat: 'sulit',
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Sosial Budaya` },
    soal: [
      {
        nomor: 9,
        tipe: 'skala',
        pertanyaan: `Sebagian warga menganggap kegiatan budaya daerah tidak lagi relevan bagi generasi muda dan mengusulkan agar kegiatan tersebut diganti sepenuhnya dengan acara modern. Sebagai koordinator kegiatan, tindakan yang paling tepat adalah ...`,
        opsi: [
          { label: 'A', teks: `Mengganti seluruh kegiatan budaya dengan acara modern agar partisipasi meningkat.` },
          { label: 'B', teks: `Mempertahankan kegiatan budaya tanpa perubahan karena tradisi tidak boleh disesuaikan.` },
          { label: 'C', teks: `Mengajak warga dan generasi muda berdialog, menjelaskan fungsi budaya sebagai identitas bersama, lalu merancang format yang lebih relevan tanpa menghilangkan unsur utamanya.` },
          { label: 'D', teks: `Menyerahkan keputusan sepenuhnya kepada tokoh budaya karena mereka paling memahami tradisi.` },
          { label: 'E', teks: `Menjalankan dua kegiatan secara terpisah agar kelompok tradisional dan modern tidak perlu berinteraksi.` },
        ],
        kunci: 'C',
        pembahasan: `Contoh Soal 1 – Konsep Dasar, Unsur, dan Struktur Sosial Budaya
Level Bloom: C4 – Menganalisis
Tingkat Kesulitan: HOTS

Konsep yang digunakan: Nilai budaya, identitas bersama, partisipasi, dan adaptasi bentuk kegiatan
Kata kunci: identitas, generasi muda, dialog, pelestarian, relevansi, partisipasi

Opsi C paling tepat karena memahami bahwa budaya berfungsi sebagai identitas dan sumber kebersamaan, tetapi bentuk penyajiannya dapat berkembang. Dialog membantu menghindari pemaksaan dari kelompok tradisional maupun modern, sedangkan penyesuaian format menjaga keberlanjutan tanpa menghilangkan substansi budaya.

Pembahasan setiap opsi:
A (1 poin): Responsif terhadap minat baru, tetapi menghapus fungsi identitas dan mengabaikan kelompok yang masih memaknai tradisi.
B (3 poin): Menjaga budaya, tetapi terlalu kaku dan tidak membuka ruang adaptasi maupun partisipasi generasi muda.
C (5 poin): Memahami fungsi budaya, melibatkan pihak terkait, dan menyeimbangkan pelestarian dengan perubahan.
D (4 poin): Menghormati legitimasi tokoh budaya, tetapi terlalu menyerahkan keputusan dan belum melibatkan kelompok terdampak secara luas.
E (2 poin): Menghindari konflik jangka pendek, tetapi memperlebar jarak sosial dan tidak membangun identitas bersama.

Cara cepat: Pilih tindakan yang menjaga makna budaya, melibatkan kelompok terkait, dan menyesuaikan bentuk secara wajar; bukan menghapus tradisi atau membekukannya.`,
        tingkat: 'sulit',
        status: 'direview',
      },
      {
        nomor: 10,
        tipe: 'skala',
        pertanyaan: `Anda ditugaskan di daerah yang memiliki tradisi kuat. Anda diundang menghadiri acara yang mengharuskan tamu mengenakan pakaian tradisional, tetapi Anda tidak memiliki pakaian tersebut. Tindakan yang paling tepat adalah ...`,
        opsi: [
          { label: 'A', teks: `Datang dengan pakaian kasual karena kehadiran lebih penting daripada aturan pakaian.` },
          { label: 'B', teks: `Menolak undangan agar tidak dianggap tidak menghormati aturan pakaian.` },
          { label: 'C', teks: `Meminta panitia mengubah aturan pakaian karena tidak semua tamu memilikinya.` },
          { label: 'D', teks: `Menghubungi panitia untuk menjelaskan kondisi, memahami ketentuan, dan mencari alternatif pakaian yang sopan serta sesuai.` },
          { label: 'E', teks: `Meminta rekan lain menggantikan kehadiran Anda agar tidak menimbulkan masalah.` },
        ],
        kunci: 'D',
        pembahasan: `Contoh Soal 2 – Adaptasi dalam Masyarakat Majemuk
Level Bloom: C4 – Menganalisis
Tingkat Kesulitan: HOTS

Konsep yang digunakan: Adaptasi, komunikasi lintas budaya, penghormatan simbol, dan solusi proporsional
Kata kunci: pakaian tradisional, undangan, komunikasi, alternatif, menghargai tradisi

Opsi D paling tepat karena tidak mengabaikan simbol budaya dan tidak pula menghindari interaksi. Komunikasi dengan panitia memberi kesempatan memahami makna ketentuan serta menemukan alternatif yang tetap menghormati acara. Respons ini adaptif, realistis, dan menjaga hubungan sosial.

Pembahasan setiap opsi:
A (1 poin): Tetap hadir, tetapi mengutamakan kenyamanan pribadi dan berisiko dianggap mengabaikan makna simbolik acara.
B (3 poin): Menghindari pelanggaran, tetapi memilih mundur sebelum mencari solusi atau berkomunikasi.
C (2 poin): Mengusulkan perubahan demi akses, tetapi tidak proporsional karena meminta seluruh acara menyesuaikan kondisi pribadi.
D (5 poin): Terbuka, menghormati ketentuan, mencari pemahaman, dan menemukan penyesuaian yang realistis.
E (4 poin): Menjaga keterwakilan dan menghindari kesalahan, tetapi mengalihkan tanggung jawab serta kehilangan kesempatan beradaptasi langsung.

Cara cepat: Saat menghadapi kebiasaan yang belum dipahami, jangan langsung menolak atau mengabaikan. Klarifikasi, pahami maknanya, lalu cari penyesuaian yang sopan dan proporsional.`,
        tingkat: 'sulit',
        status: 'direview',
      },
      {
        nomor: 11,
        tipe: 'skala',
        pertanyaan: `Dalam kelompok diskusi, seorang anggota dari latar belakang suku yang berbeda tampak kurang diterima oleh sebagian anggota lain dan jarang diberi kesempatan berbicara. Respons yang paling tepat adalah ...`,
        opsi: [
          { label: 'A', teks: `Fokus menyelesaikan tugas agar perbedaan tidak menghambat target kelompok.` },
          { label: 'B', teks: `Membiarkan anggota tersebut menyesuaikan diri sendiri agar tidak memperbesar masalah.` },
          { label: 'C', teks: `Menjaga jarak agar Anda tidak ikut dianggap berbeda oleh anggota lain.` },
          { label: 'D', teks: `Mendekati anggota tersebut secara personal dan menunjukkan dukungan saat diskusi.` },
          { label: 'E', teks: `Mengajak seluruh anggota menghargai keberagaman dan mengatur diskusi agar semua orang mendapat ruang berkontribusi.` },
        ],
        kunci: 'E',
        pembahasan: `Contoh Soal 3 – Empati, Kepedulian, dan Harmoni Sosial
Level Bloom: C5 – Mengevaluasi
Tingkat Kesulitan: HOTS

Konsep yang digunakan: Inklusivitas, empati aktif, kesetaraan partisipasi, dan harmoni kelompok
Kata kunci: eksklusi, suku, ruang bicara, dukungan, kelompok, kesetaraan

Opsi E paling tepat karena tidak hanya mendukung individu yang terdampak, tetapi memperbaiki dinamika kelompok. Ajakan menghargai keberagaman disertai pengaturan kesempatan berbicara membuat perubahan dapat diamati dan mencegah eksklusi berulang. Tindakan ini menjaga martabat tanpa mempermalukan pihak tertentu.

Pembahasan setiap opsi:
A (3 poin): Menjaga fokus tugas, tetapi mengabaikan masalah sosial yang dapat terus merusak kerja sama.
B (2 poin): Menghindari konfrontasi, tetapi membebankan seluruh proses adaptasi kepada pihak yang sudah kurang diterima.
C (1 poin): Memperkuat eksklusi dan menunjukkan kepedulian yang rendah terhadap ketidakadilan.
D (4 poin): Memberi dukungan nyata dan positif, tetapi belum memperbaiki perilaku kelompok secara keseluruhan.
E (5 poin): Empatik, inklusif, menyentuh akar dinamika kelompok, dan menciptakan kesempatan partisipasi yang setara.`,
        tingkat: 'sulit',
        status: 'direview',
      },
      {
        nomor: 12,
        tipe: 'skala',
        pertanyaan: `Sebagian warga menolak rencana pembangunan fasilitas umum karena lokasinya dianggap terlalu dekat dengan tempat yang memiliki nilai sakral. Izin administratif sudah tersedia dan jadwal proyek terbatas. Langkah yang paling tepat adalah ...`,
        opsi: [
          { label: 'A', teks: `Melanjutkan pembangunan karena seluruh izin sudah terpenuhi.` },
          { label: 'B', teks: `Mengajak warga, tokoh terkait, dan tim proyek berdialog untuk memetakan nilai yang dipersoalkan serta mencari alternatif lokasi atau rancangan yang dapat diterima.` },
          { label: 'C', teks: `Membiarkan penolakan karena perbedaan pendapat merupakan hal biasa dalam pembangunan.` },
          { label: 'D', teks: `Menghentikan proyek dan menyerahkan keputusan sepenuhnya kepada atasan.` },
          { label: 'E', teks: `Memperkecil bangunan agar terlihat tidak terlalu mengganggu tanpa membahas persoalan dengan warga.` },
        ],
        kunci: 'B',
        pembahasan: `Contoh Soal 4 – Perubahan Sosial Budaya dan Penyelesaian Konflik
Level Bloom: C5 – Mengevaluasi
Tingkat Kesulitan: HOTS

Konsep yang digunakan: Perubahan sosial, partisipasi masyarakat, nilai sakral, mediasi, dan solusi integratif
Kata kunci: pembangunan, penolakan, lokasi sakral, dialog, alternatif, kesepakatan

Opsi B paling tepat karena mengakui bahwa izin administratif belum otomatis menyelesaikan legitimasi sosial. Dialog representatif membantu memahami nilai sakral, memeriksa ruang kompromi, dan mencari alternatif yang tetap memenuhi tujuan pembangunan. Pendekatan ini mencegah pemaksaan sekaligus tidak menghentikan perubahan tanpa upaya solusi.

Pembahasan setiap opsi:
A (1 poin): Patuh prosedur, tetapi mengabaikan dampak sosial dan berpotensi memperbesar konflik.
B (5 poin): Partisipatif, menghargai nilai lokal, tetap berorientasi solusi, dan menyeimbangkan pembangunan dengan harmoni.
C (2 poin): Tidak memperkeruh secara langsung, tetapi pasif dan mengabaikan tanggung jawab menyelesaikan konflik.
D (4 poin): Berhati-hati dan mencegah eskalasi, tetapi mengalihkan tanggung jawab serta belum membangun solusi bersama.
E (3 poin): Memberi penyesuaian teknis, tetapi belum menyentuh akar persoalan dan berisiko dianggap sepihak.

Cara cepat: Dalam konflik perubahan dan budaya, jangan hanya melihat izin atau solusi teknis. Pahami nilai yang dipersoalkan, libatkan pihak terdampak, lalu cari solusi integratif dan dapat ditindaklanjuti.`,
        tingkat: 'sulit',
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Teknologi Informasi dan Komunikasi` },
    soal: [
      {
        nomor: 13,
        tipe: 'skala',
        pertanyaan: `Anda harus menganalisis data interaksi pelanggan dalam jumlah besar dan menyelesaikan laporan dalam dua hari. Anda telah terbiasa menggunakan aplikasi analisis yang resmi, aman, dan sesuai kebutuhan. Tindakan paling tepat adalah ...`,
        opsi: [
          { label: 'A', teks: `Meminta perpanjangan waktu sebelum mencoba mengolah data karena jumlahnya sangat besar.` },
          { label: 'B', teks: `Mengolah seluruh data secara manual agar proses sepenuhnya berada dalam kendali Anda.` },
          { label: 'C', teks: `Menggunakan aplikasi tersebut, memeriksa sampel dan hasil akhirnya, lalu mendokumentasikan proses sebelum menyerahkan laporan.` },
          { label: 'D', teks: `Mencoba aplikasi lain yang lebih baru tanpa memeriksa keamanan dan keandalannya.` },
          { label: 'E', teks: `Membagi data secara acak kepada beberapa rekan agar cepat selesai tanpa menyamakan metode pengolahan.` },
        ],
        kunci: 'C',
        pembahasan: `Contoh Soal 1 – Konsep Dasar dan Pemanfaatan TIK dalam Pekerjaan
Level Bloom: C3 – Menerapkan
Tingkat Kesulitan: Sulit

Konsep yang digunakan: Pemanfaatan TIK yang produktif, aman, dan akurat
Kata kunci: alat resmi, data besar, efisiensi, validasi, dokumentasi

Opsi C paling tepat karena teknologi digunakan untuk menjawab kebutuhan nyata, tetapi hasilnya tidak diterima secara otomatis. Pemeriksaan sampel, validasi akhir, dan dokumentasi menjaga akurasi serta membuat proses dapat ditelusuri. Tindakan ini menyeimbangkan kecepatan, mutu, dan akuntabilitas.

Pembahasan setiap opsi:
A (3 poin): Berhati-hati dan komunikatif, tetapi meminta tambahan waktu sebelum mencoba solusi yang tersedia menunjukkan pemecahan masalah yang belum optimal.
B (4 poin): Aman dan dapat dikendalikan, tetapi sangat tidak efisien serta rawan kesalahan ketika alat resmi yang tepat sudah tersedia.
C (5 poin): Memanfaatkan alat yang sesuai, memvalidasi hasil, dan menjaga keterlacakan proses.
D (1 poin): Menggunakan alat yang belum dinilai aman dan andal dapat membahayakan data serta kualitas hasil.
E (2 poin): Pembagian tanpa metode dan koordinasi yang sama berisiko menghasilkan data tidak konsisten dan sulit dipertanggungjawabkan.

Cara cepat: Pilih tindakan yang memakai alat yang tepat sekaligus memeriksa hasil. Cepat tanpa validasi bukan pemanfaatan TIK yang bertanggung jawab.`,
        tingkat: 'sulit',
        status: 'direview',
      },
      {
        nomor: 14,
        tipe: 'skala',
        pertanyaan: `Sebuah proyek melibatkan beberapa tim di lokasi berbeda. Revisi dokumen sering terlambat diterima, laporan progres tidak sinkron, dan sebagian anggota belum terbiasa menggunakan perangkat kolaborasi. Langkah strategis paling tepat adalah ...`,
        opsi: [
          { label: 'A', teks: `Menunjuk satu penghubung di setiap lokasi untuk mengirim pembaruan secara manual setiap hari.` },
          { label: 'B', teks: `Menyusun panduan kerja digital dan meminta setiap tim mempelajarinya secara mandiri.` },
          { label: 'C', teks: `Menambah rapat video secara rutin agar setiap tim dapat melaporkan perkembangan.` },
          { label: 'D', teks: `Menerapkan platform kolaborasi resmi secara bertahap, menetapkan alur pembaruan, dan mendampingi pengguna sampai informasi terintegrasi.` },
          { label: 'E', teks: `Mengirim tim pemantau ke setiap lokasi untuk mengumpulkan seluruh laporan sebelum dikonsolidasikan.` },
        ],
        kunci: 'D',
        pembahasan: `Contoh Soal 2 – Konsep Dasar dan Pemanfaatan TIK dalam Pekerjaan
Level Bloom: C5 – Mengevaluasi
Tingkat Kesulitan: HOTS

Konsep yang digunakan: Integrasi informasi dan kolaborasi digital
Kata kunci: platform resmi, sinkronisasi, pendampingan, perubahan bertahap, keterlacakan

Opsi D paling tepat karena menyelesaikan akar masalah berupa informasi yang terpencar dan kesiapan pengguna yang tidak sama. Platform resmi membentuk satu sumber informasi, sedangkan alur pembaruan dan pendampingan memastikan sistem benar-benar digunakan. Penerapan bertahap mengurangi resistensi serta menjaga pekerjaan tetap berjalan.

Pembahasan setiap opsi:
A (3 poin): Membantu komunikasi dasar, tetapi proses manual tetap rentan terlambat, tidak konsisten, dan bergantung pada individu.
B (2 poin): Panduan berguna, tetapi tanpa sistem dan pendampingan tidak menjamin perubahan praktik.
C (4 poin): Rapat video mempercepat komunikasi, tetapi tidak cukup membangun satu sumber data dan pembaruan waktu nyata.
D (5 poin): Menggabungkan integrasi sistem, alur kerja, penerapan bertahap, dan pendampingan pengguna.
E (1 poin): Pengumpulan fisik menambah beban dan tidak menyelesaikan keterlambatan serta ketidaksinkronan informasi.

Cara cepat: Untuk masalah informasi yang terpecah, pilih solusi yang membangun satu sistem, aturan penggunaan, dan pendampingan, bukan hanya menambah komunikasi.`,
        tingkat: 'sulit',
        status: 'direview',
      },
      {
        nomor: 15,
        tipe: 'skala',
        pertanyaan: `Organisasi Anda memperoleh akses awal ke sistem pelaporan yang diperkirakan akan menjadi standar dalam waktu dekat. Sistem tersebut belum diwajibkan. Sebagian rekan memilih bertahan dengan cara manual, sedangkan pimpinan belum memberi arahan khusus. Sikap paling tepat adalah ...`,
        opsi: [
          { label: 'A', teks: `Mengajak rekan mendiskusikan apakah sistem perlu digunakan sekarang atau menunggu arahan resmi.` },
          { label: 'B', teks: `Mempelajari sistem untuk kepentingan sendiri tanpa membahasnya dengan rekan agar tidak dianggap memaksakan.` },
          { label: 'C', teks: `Mulai menggunakan sistem pada tugas sendiri dan membiarkan rekan menentukan pilihannya masing-masing.` },
          { label: 'D', teks: `Mempelajari dan menguji sistem pada pekerjaan yang sesuai, mencatat hasilnya, lalu mengusulkan sesi berbagi dan penerapan bertahap kepada pimpinan.` },
          { label: 'E', teks: `Menunggu sampai sistem diwajibkan agar tidak menimbulkan kebingungan bagi tim.` },
        ],
        kunci: 'D',
        pembahasan: `Contoh Soal 3 – Adaptasi terhadap Perubahan Teknologi
Level Bloom: C5 – Mengevaluasi
Tingkat Kesulitan: HOTS

Konsep yang digunakan: Adaptasi proaktif dan pengelolaan perubahan

Kata kunci: pembelajaran mandiri, uji coba, bukti, berbagi praktik, koordinasi, penerapan bertahap

Opsi D paling tepat karena menunjukkan inisiatif tanpa melampaui kewenangan. Peserta belajar dan mencoba pada ruang yang sesuai, menghasilkan bukti, berbagi pengetahuan, serta mengoordinasikan penerapan dengan pimpinan. Perubahan tidak dipaksakan, tetapi dipersiapkan agar tim tidak tertinggal ketika sistem benar-benar digunakan.

Pembahasan setiap opsi:
A (3 poin): Diskusi dapat mengurangi resistensi, tetapi tanpa pembelajaran dan uji coba perubahan mudah berhenti sebagai wacana.
B (2 poin): Belajar sendiri adalah langkah awal yang baik, tetapi manfaatnya tidak membantu kesiapan tim.
C (4 poin): Sudah menunjukkan inisiatif dan memberi contoh, tetapi perubahan dibiarkan berjalan sendiri tanpa pengelolaan kolektif.
D (5 poin): Menggabungkan belajar, uji coba terkontrol, bukti, berbagi praktik, dan koordinasi penerapan.
E (1 poin): Menunggu sampai diwajibkan membuat tim berpotensi tidak siap dan menunjukkan sikap pasif terhadap perubahan yang sudah jelas arahnya.

Cara cepat: Adaptasi terbaik bukan sekadar memakai sistem baru. Pelajari, uji dengan aman, buktikan manfaatnya, berbagi, lalu koordinasikan penerapannya.`,
        tingkat: 'sulit',
        status: 'direview',
      },
      {
        nomor: 16,
        tipe: 'skala',
        pertanyaan: `Anda menerima e-mail dari alamat yang sangat mirip dengan alamat resmi organisasi. Pesan tersebut meminta dokumen berisi data pribadi melalui sebuah tautan. Beberapa rekan hampir membuka tautan itu, sedangkan Anda menduga pesan tersebut merupakan phishing. Tindakan paling tepat adalah ...`,
        opsi: [
          { label: 'A', teks: `Membuka tautan pada perangkat kerja untuk memastikan apakah permintaan tersebut benar.` },
          { label: 'B', teks: `Tidak membuka atau meneruskan tautan, menyimpan pesan sebagai bukti, mengingatkan rekan, dan melaporkannya melalui kanal keamanan yang ditetapkan.` },
          { label: 'C', teks: `Menghapus e-mail tersebut dari kotak masuk agar Anda tidak salah membukanya.` },
          { label: 'D', teks: `Meneruskan e-mail kepada seluruh rekan dengan pesan agar mereka berhati-hati.` },
          { label: 'E', teks: `Menghubungi pengirim melalui nomor atau alamat resmi yang sudah dikenal untuk memverifikasi permintaan, lalu melaporkan jika terbukti palsu.` },
        ],
        kunci: 'B',
        pembahasan: `Contoh Soal 4 – Etika, Keamanan, dan Tanggung Jawab Digital
Level Bloom: C4 – Menganalisis
Tingkat Kesulitan: HOTS

Konsep yang digunakan: Pencegahan phishing dan penanganan insiden
Kata kunci: verifikasi, tidak membuka tautan, bukti, peringatan, pelaporan, kanal resmi

Opsi B paling tepat karena menghentikan risiko langsung, melindungi rekan, mempertahankan bukti, dan meneruskan penanganan kepada pihak yang berwenang. Tindakan tersebut tidak mencoba membuktikan ancaman dengan cara berbahaya dan tidak menyebarkan tautan ke lebih banyak orang.

Pembahasan setiap opsi:
A (1 poin): Membuka tautan untuk menguji kebenaran dapat mengaktifkan malware atau mencuri kredensial.
B (5 poin): Mengendalikan risiko, menjaga bukti, memberi peringatan aman, dan mengikuti jalur penanganan resmi.
C (3 poin): Mengurangi risiko pribadi, tetapi tidak melindungi rekan, menghilangkan jejak, dan tidak memungkinkan penanganan organisasi.
D (2 poin): Niatnya memperingatkan, tetapi meneruskan tautan memperluas paparan dan meningkatkan kemungkinan ada yang membukanya.
E (4 poin): Verifikasi melalui kanal terpisah merupakan tindakan aman dan cermat, tetapi laporan serta peringatan dapat terlambat ketika rekan sudah berisiko.

Cara cepat: Pada pesan mencurigakan: jangan klik, jangan teruskan, jaga bukti, lindungi orang lain, dan laporkan melalui kanal resmi.`,
        tingkat: 'sulit',
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Profesionalisme` },
    soal: [
      {
        nomor: 17,
        tipe: 'skala',
        pertanyaan: `Sebagai anggota baru dalam tim, Anda menemukan kesalahan angka pada laporan yang disusun oleh rekan senior. Jika dibiarkan, kesalahan tersebut dapat memengaruhi keputusan berikutnya, tetapi koreksi akan membuat sebagian laporan perlu direvisi. Apa tindakan paling tepat?`,
        opsi: [
          { label: 'A', teks: `Menegur rekan senior di depan tim agar semua orang mengetahui kesalahan tersebut.` },
          { label: 'B', teks: `Membiarkan kesalahan karena menghormati pengalaman dan posisi rekan senior.` },
          { label: 'C', teks: `Memeriksa kembali temuan, menyampaikan bukti dan dampaknya secara sopan kepada pihak terkait, serta mengusulkan langkah revisi.` },
          { label: 'D', teks: `Menunggu sampai atasan menemukan kesalahan tersebut agar Anda tidak dianggap mencampuri pekerjaan orang lain.` },
          { label: 'E', teks: `Memperbaiki angka secara diam-diam agar laporan segera selesai tanpa mempermalukan rekan senior.` },
        ],
        kunci: 'C',
        pembahasan: `Contoh Soal 1 – Konsep Dasar, Ciri, dan Etika Profesional
Level Bloom: C4 – Menganalisis
Tingkat Kesulitan: HOTS

Konsep yang digunakan: Objektivitas, etika komunikasi, akurasi, dan perbaikan berbasis bukti
Kata kunci: kesalahan data, senioritas, verifikasi, komunikasi sopan, revisi

Opsi C paling tepat karena menggabungkan verifikasi, keberanian menyampaikan masalah, penghormatan kepada pihak lain, serta orientasi pada solusi. Profesionalisme tidak berarti diam demi senioritas dan tidak pula membenarkan perubahan tanpa koordinasi. Temuan perlu dipastikan, dikomunikasikan melalui cara yang tepat, dan diikuti rencana perbaikan yang dapat dipertanggungjawabkan.

Pembahasan setiap opsi:
A - Skor 1: Menjaga akurasi, tetapi mempermalukan pihak lain dan dapat membuat komunikasi defensif.
B - Skor 2: Menghormati senioritas, tetapi membiarkan risiko dan mengabaikan tanggung jawab atas kualitas.
C - Skor 5: Memverifikasi, berkomunikasi etis, dan menawarkan solusi yang menjaga akurasi serta hubungan kerja.
D - Skor 3: Menghindari kesalahan tindakan, tetapi terlalu pasif dan membiarkan dampak berkembang.
E - Skor 4: Berorientasi perbaikan, tetapi tidak transparan dan mengubah dokumen tanpa koordinasi.

Cara cepat: Ketika menemukan kesalahan, pilih respons yang memeriksa bukti, menyampaikan dengan hormat, dan membawa solusi; bukan diam, mempermalukan, atau mengubah diam-diam.`,
        tingkat: 'sulit',
        status: 'direview',
      },
      {
        nomor: 18,
        tipe: 'skala',
        pertanyaan: `Tim Anda mendapat tekanan untuk memublikasikan laporan secepat mungkin. Beberapa bagian belum diverifikasi sepenuhnya dan pimpinan meminta agar laporan tetap diterbitkan demi menjaga citra bahwa target telah tercapai. Tindakan Anda adalah...`,
        opsi: [
          { label: 'A', teks: `Menerbitkan laporan sesuai arahan karena pimpinan bertanggung jawab atas keputusan akhir.` },
          { label: 'B', teks: `Menolak seluruh pekerjaan dan meminta nama Anda dihapus dari tim.` },
          { label: 'C', teks: `Menjelaskan risiko secara berbasis data, mengusulkan verifikasi minimum pada bagian kritis, dan menyepakati waktu publikasi yang realistis.` },
          { label: 'D', teks: `Menerbitkan laporan lalu memperbaiki kesalahan setelah ada tanggapan pembaca.` },
          { label: 'E', teks: `Menunda publikasi tanpa memberi penjelasan kepada pihak yang menunggu.` },
        ],
        kunci: 'C',
        pembahasan: `Contoh Soal 2 – Konsep Dasar, Ciri, dan Etika Profesional
Level Bloom: C5 – Mengevaluasi
Tingkat Kesulitan: HOTS

Konsep yang digunakan: Etika profesional, keberanian menyampaikan risiko, dan keseimbangan mutu-waktu
Kata kunci: tekanan target, verifikasi, publikasi, risiko, komunikasi

Opsi C mempertahankan standar tanpa mengabaikan kebutuhan waktu. Tindakan ini tidak sekadar menolak arahan, tetapi menunjukkan bagian yang berisiko, menawarkan langkah minimum yang dapat menjaga keandalan, dan membangun kesepakatan yang jelas. Profesionalisme menuntut keberanian menyampaikan fakta sekaligus kemampuan mencari jalan keluar yang operasional.

Pembahasan setiap opsi:
A - Skor 2: Patuh pada arahan, tetapi melepaskan tanggung jawab profesional atas kualitas informasi.
B - Skor 1: Menolak risiko, tetapi tidak menyelesaikan tugas dan tidak menawarkan perbaikan.
C - Skor 5: Menjaga akurasi, berkomunikasi berbasis bukti, dan menawarkan solusi proporsional.
D - Skor 3: Memenuhi target, tetapi menjadikan publik sebagai penguji dan berisiko merusak kepercayaan.
E - Skor 4: Melindungi mutu, tetapi kurang akuntabel karena menunda tanpa komunikasi dan rencana.

Cara cepat: Jika target berbenturan dengan standar, jangan hanya patuh atau menolak. Jelaskan risiko dan tawarkan cara paling aman untuk tetap bergerak.`,
        tingkat: 'sulit',
        status: 'direview',
      },
      {
        nomor: 19,
        tipe: 'skala',
        pertanyaan: `Anda diminta menandatangani laporan yang disusun oleh rekan kerja. Waktu penyerahan hampir tiba, tetapi Anda belum memeriksa seluruh data dan rekan tersebut meyakinkan bahwa semuanya sudah benar. Apa tindakan paling tepat?`,
        opsi: [
          { label: 'A', teks: `Menandatangani laporan karena rekan kerja sudah memberikan jaminan.` },
          { label: 'B', teks: `Menunda tanda tangan tanpa menjelaskan alasan atau rencana pemeriksaan.` },
          { label: 'C', teks: `Melakukan pemeriksaan terarah pada data kritis dan bukti pendukung sebelum menandatangani, lalu mencatat koreksi jika ditemukan.` },
          { label: 'D', teks: `Menolak menandatangani dan menyerahkan seluruh tanggung jawab kepada atasan.` },
          { label: 'E', teks: `Meminta rekan lain menyatakan bahwa laporan benar tanpa melakukan pemeriksaan sendiri.` },
        ],
        kunci: 'C',
        pembahasan: `Contoh Soal 3 – Tanggung Jawab, Akuntabilitas, dan Disiplin Kerja
Level Bloom: C3 – Menerapkan
Tingkat Kesulitan: Sulit

Konsep yang digunakan: Akuntabilitas dokumen, verifikasi, dan tanggung jawab penandatangan
Kata kunci: tanda tangan, laporan, verifikasi, bukti, akuntabilitas

Opsi C paling tepat karena tanda tangan menunjukkan penerimaan tanggung jawab. Pemeriksaan tidak harus mengulang seluruh pekerjaan secara tidak efisien, tetapi harus cukup untuk memastikan bagian kritis, sumber data, dan konsistensi laporan. Koreksi perlu dicatat agar proses dapat ditelusuri.

Pembahasan setiap opsi:
A - Skor 3: Menjaga hubungan dan kecepatan, tetapi mengandalkan kepercayaan tanpa verifikasi.
B - Skor 4: Berhati-hati, tetapi tidak akuntabel karena tidak menjelaskan alasan, prioritas, atau tindak lanjut.
C - Skor 5: Melakukan verifikasi proporsional dan menjaga jejak koreksi sebelum menerima tanggung jawab.
D - Skor 1: Menghindari risiko dengan melepaskan tugas yang telah diamanatkan.
E - Skor 2: Mencari konfirmasi, tetapi tetap tidak menjalankan tanggung jawab verifikasi sendiri.

Cara cepat: Sebelum menandatangani, cari tindakan yang memberi keyakinan berbasis bukti dan jejak pemeriksaan; bukan sekadar percaya, menunda, atau melempar tugas.`,
        tingkat: 'sulit',
        status: 'direview',
      },
      {
        nomor: 20,
        tipe: 'skala',
        pertanyaan: `Pukul 10.00 Anda sedang menyusun laporan audit yang harus diunggah paling lambat pukul 17.00. Beberapa menit kemudian, atasan meminta bahan presentasi untuk rapat pukul 12.00. Seorang rekan yang kompeten sedang tersedia untuk membantu bagian rutin laporan. Apa langkah paling tepat?`,
        opsi: [
          { label: 'A', teks: `Menghentikan laporan dan mengerjakan presentasi tanpa menyusun rencana untuk laporan audit.` },
          { label: 'B', teks: `Meminta atasan menunda presentasi karena laporan audit memiliki batas sistem.` },
          { label: 'C', teks: `Mengonfirmasi prioritas, menyusun rencana waktu, mengerjakan bagian presentasi yang mendesak, mendelegasikan bagian rutin laporan dengan instruksi dan checkpoint yang jelas, lalu memverifikasi hasil.` },
          { label: 'D', teks: `Mengerjakan kedua tugas secara paralel tanpa komunikasi agar tidak terlihat kesulitan.` },
          { label: 'E', teks: `Mengalihkan seluruh presentasi kepada rekan dan tetap mengerjakan laporan audit.` },
        ],
        kunci: 'C',
        pembahasan: `Contoh Soal 4 – Kualitas Kinerja, Penyelesaian Masalah, dan Pengembangan Kompetensi
Level Bloom: C5 – Mengevaluasi
Tingkat Kesulitan: HOTS

Konsep yang digunakan: Prioritisasi strategis, delegasi, koordinasi, dan akuntabilitas hasil
Kata kunci: dua tenggat, urgensi, delegasi, checkpoint, verifikasi

Opsi C paling tepat karena tidak memilih salah satu tugas secara impulsif. Respons tersebut memastikan kejelasan prioritas, membagi pekerjaan berdasarkan kompetensi, menjaga komunikasi, dan tetap menempatkan tanggung jawab akhir pada pemilik tugas. Delegasi menjadi profesional ketika instruksi, batas, waktu, dan verifikasi hasil jelas.

Pembahasan setiap opsi:
A - Skor 3: Responsif terhadap tugas mendesak, tetapi tidak mengelola risiko laporan yang memiliki tenggat pasti.
B - Skor 2: Menjaga laporan, tetapi terlalu kaku dan belum mencoba mengelola sumber daya yang tersedia.
C - Skor 5: Menggabungkan prioritas, komunikasi, delegasi terkontrol, dan verifikasi hasil.
D - Skor 1: Terlihat bekerja keras, tetapi tanpa rencana dan komunikasi berisiko menurunkan kualitas keduanya.
E - Skor 4: Memanfaatkan rekan, tetapi sepenuhnya mengalihkan instruksi langsung dan lemah pada koordinasi tanggung jawab.

Cara cepat: Pada konflik banyak tugas, pilih opsi yang mengklarifikasi prioritas, membagi pekerjaan secara tepat, dan tetap memantau mutu serta tenggat.`,
        tingkat: 'sulit',
        status: 'direview',
      },
      {
        nomor: 21,
        tipe: 'skala',
        pertanyaan: `Organisasi mulai menerapkan sistem administrasi digital, sedangkan kemampuan Anda dalam pengelolaan dokumen digital masih terbatas. Pekerjaan utama juga cukup padat. Tindakan yang paling tepat adalah...`,
        opsi: [
          { label: 'A', teks: `Menyusun jadwal belajar singkat, mengikuti pelatihan yang relevan, mempraktikkan pada tugas berisiko rendah, dan meminta umpan balik tanpa mengabaikan pekerjaan utama.` },
          { label: 'B', teks: `Menunggu sampai organisasi memberikan pelatihan resmi kepada seluruh pegawai.` },
          { label: 'C', teks: `Tetap menggunakan cara lama karena hasilnya selama ini sudah diterima.` },
          { label: 'D', teks: `Meminta rekan yang lebih mahir mengerjakan seluruh bagian digital untuk Anda.` },
          { label: 'E', teks: `Menunda belajar sampai beban kerja benar-benar kosong.` },
        ],
        kunci: 'A',
        pembahasan: `Contoh Soal 5 – Kualitas Kinerja, Penyelesaian Masalah, dan Pengembangan Kompetensi
Level Bloom: C5 – Mengevaluasi
Tingkat Kesulitan: HOTS

Konsep yang digunakan: Pengembangan kompetensi, manajemen belajar, praktik terkontrol, dan umpan balik
Kata kunci: kesenjangan kompetensi, sistem baru, pelatihan, praktik, waktu belajar

Opsi A paling tepat karena mengubah kesenjangan kemampuan menjadi rencana belajar yang terukur dan terkait pekerjaan. Belajar tidak dilakukan secara abstrak atau menunggu kondisi sempurna, tetapi dijadwalkan, diterapkan bertahap, dan dievaluasi melalui umpan balik. Pekerjaan utama tetap dijaga sehingga pengembangan diri tidak menjadi alasan mengabaikan tanggung jawab.

Pembahasan setiap opsi:
A - Skor 5: Proaktif, realistis, langsung diterapkan, dan tetap menjaga pekerjaan utama.
B - Skor 3: Mengandalkan dukungan organisasi yang mungkin bermanfaat, tetapi terlalu pasif.
C - Skor 2: Menjaga kelancaran jangka pendek, tetapi menolak tuntutan perubahan dan membatasi kinerja.
D - Skor 1: Menyelesaikan tugas sementara, tetapi melepaskan tanggung jawab belajar dan membangun ketergantungan.
E - Skor 4: Mempertimbangkan beban kerja, tetapi menunggu waktu kosong membuat pengembangan terus tertunda.

Cara cepat: Jika ada kesenjangan kemampuan, pilih respons yang membuat rencana belajar, mencoba secara aman, meminta umpan balik, dan tetap memenuhi tugas.`,
        tingkat: 'sulit',
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Anti Radikalisme` },
    soal: [
      {
        nomor: 22,
        tipe: 'skala',
        pertanyaan: `Dalam rapat penentuan penerima bantuan, seorang anggota mengusulkan agar warga dari kelompok tertentu tidak diprioritaskan karena dianggap “tidak sejalan” dengan lingkungan mayoritas. Data kebutuhan menunjukkan beberapa warga dari kelompok tersebut justru termasuk yang paling membutuhkan. Sikap Anda adalah ...`,
        opsi: [
          { label: 'A', teks: `Menolak usulan tersebut secara tegas tanpa memberikan penjelasan agar rapat segera kembali ke agenda.` },
          { label: 'B', teks: `Meminta pembahasan ditunda sampai situasi lebih tenang agar tidak terjadi perdebatan.` },
          { label: 'C', teks: `Menegaskan bahwa bantuan harus diberikan berdasarkan kriteria objektif, menjelaskan risiko diskriminasi, dan mengarahkan rapat menilai data kebutuhan seluruh warga.` },
          { label: 'D', teks: `Menerima sebagian usulan agar keputusan dapat disepakati oleh mayoritas anggota rapat.` },
          { label: 'E', teks: `Mencatat keberatan pribadi, tetapi mengikuti keputusan mayoritas karena forum memiliki kewenangan.` },
        ],
        kunci: 'C',
        pembahasan: `Contoh Soal 1 – Konsep Dasar Anti Radikalisme
Level Bloom: C4 – Menganalisis
Tingkat Kesulitan: HOTS

Konsep yang digunakan: Non-diskriminasi, keadilan sosial, komunikasi asertif, dan keputusan berbasis bukti
Kata kunci: bantuan, kelompok berbeda, mayoritas, kriteria objektif, diskriminasi

Opsi C paling tepat karena tidak sekadar menolak, tetapi mengembalikan keputusan pada kriteria yang sah dan kebutuhan nyata. Respons ini mencegah pengucilan berbasis identitas, menjaga wibawa forum, dan memberi dasar yang dapat dipertanggungjawabkan.

Pembahasan setiap opsi:
A - Skor 4: Tegas dan menolak diskriminasi, tetapi tanpa penjelasan dapat menimbulkan resistensi dan tidak memperbaiki cara berpikir forum.
B - Skor 3: Menunda dapat meredakan ketegangan, tetapi belum menyelesaikan inti diskriminasi dan berisiko menunda hak warga.
C - Skor 5: Adil, berbasis data, komunikatif, dan langsung mengarahkan forum pada keputusan yang objektif.
D - Skor 1: Mengompromikan hak warga dan melegitimasi diskriminasi demi kesepakatan.
E - Skor 2: Menghindari tanggung jawab moral dan membiarkan keputusan tidak adil terjadi.

Cara cepat: Pada usulan yang mendiskriminasi, pilih respons yang mengembalikan keputusan pada kriteria objektif, menjelaskan prinsip keadilan, dan mengarahkan tindakan nyata.`,
        tingkat: 'sulit',
        status: 'direview',
      },
      {
        nomor: 23,
        tipe: 'skala',
        pertanyaan: `Anda menerima undangan webinar dari akun yang tidak dikenal. Deskripsinya menggunakan bahasa perubahan yang umum, tetapi lampiran promosi memuat ajakan merendahkan kelompok tertentu, melarang peserta mempertanyakan materi, dan mengarahkan ke kanal lain yang tidak terverifikasi. Beberapa rekan berniat mengikuti karena penasaran. Tindakan Anda adalah ...`,
        opsi: [
          { label: 'A', teks: `Mengikuti webinar untuk memastikan sendiri apakah materinya benar-benar berbahaya.` },
          { label: 'B', teks: `Meneruskan undangan kepada rekan lain dengan pesan agar mereka berhati-hati.` },
          { label: 'C', teks: `Mengabaikan undangan karena Anda tidak berniat mengikutinya.` },
          { label: 'D', teks: `Menyimpan informasi yang diperlukan, mengingatkan rekan agar tidak mengaksesnya, dan melaporkan akun atau tautan melalui kanal keamanan yang sesuai.` },
          { label: 'E', teks: `Menulis komentar publik yang menuduh penyelenggara sebagai kelompok radikal agar orang lain tidak ikut.` },
        ],
        kunci: 'D',
        pembahasan: `Contoh Soal 2 – Ciri-Ciri dan Bentuk Paparan Radikalisme
Level Bloom: C5 – Mengevaluasi
Tingkat Kesulitan: HOTS

Konsep yang digunakan: Identifikasi propaganda, keselamatan digital, pencegahan amplifikasi, dan pelaporan proporsional
Kata kunci: akun tidak dikenal, propaganda, larangan bertanya, kanal tidak terverifikasi, keamanan

Opsi D paling tepat karena bukti dalam stimulus sudah menunjukkan risiko yang lebih dari sekadar pendapat kontroversial. Respons tersebut tidak menambah paparan, melindungi rekan, menjaga bukti minimum yang diperlukan, dan menyerahkan penanganan kepada kanal yang berwenang.

Pembahasan setiap opsi:
A - Skor 1: Meningkatkan paparan dan risiko tanpa kewenangan investigasi.
B - Skor 2: Berniat memperingatkan, tetapi justru memperluas jangkauan tautan dan kemungkinan akses.
C - Skor 3: Menghindari risiko pribadi, tetapi tidak melindungi rekan atau mencegah penyebaran.
D - Skor 5: Aman, proporsional, mencegah amplifikasi, dan menggunakan kanal yang tepat.
E - Skor 4: Berupaya memperingatkan publik, tetapi tuduhan terbuka dapat memicu konflik, salah informasi, atau eskalasi.

Cara cepat: Jika konten berisiko sudah cukup jelas, jangan menguji sendiri atau meneruskan. Hentikan penyebaran, lindungi orang lain, dan gunakan kanal resmi.`,
        tingkat: 'sulit',
        status: 'direview',
      },
      {
        nomor: 24,
        tipe: 'skala',
        pertanyaan: `Panitia kegiatan komunitas berencana mengundang pembicara yang pernah beberapa kali menyampaikan ujaran kebencian terhadap kelompok tertentu. Kegiatan belum diumumkan dan panitia masih terbuka terhadap masukan. Langkah Anda adalah ...`,
        opsi: [
          { label: 'A', teks: `Meminta aparat mengawasi kegiatan sejak awal agar panitia merasa jera.` },
          { label: 'B', teks: `Mengimbau masyarakat untuk tidak hadir tanpa menghubungi panitia.` },
          { label: 'C', teks: `Menghubungi panitia, menyampaikan rekam jejak dan risikonya secara objektif, serta mengusulkan narasumber lain yang lebih kredibel dan inklusif.` },
          { label: 'D', teks: `Membiarkan kegiatan berjalan dengan menghadirkan pembicara penyeimbang agar semua pandangan terwakili.` },
          { label: 'E', teks: `Menyarankan kegiatan dibatalkan sepenuhnya tanpa menawarkan alternatif.` },
        ],
        kunci: 'C',
        pembahasan: `Contoh Soal 3 – Sikap Pencegahan dan Penolakan terhadap Radikalisme
Level Bloom: C5 – Mengevaluasi
Tingkat Kesulitan: HOTS

Konsep yang digunakan: Pencegahan dini, komunikasi persuasif, solusi alternatif, dan proporsionalitas
Kata kunci: pembicara, ujaran kebencian, kegiatan belum diumumkan, alternatif narasumber

Opsi C paling tepat karena masalah masih dapat dicegah melalui komunikasi langsung dan solusi konkret. Tindakan ini menutup ruang penyebaran kebencian tanpa mempermalukan panitia atau menimbulkan konflik yang tidak perlu.

Pembahasan setiap opsi:
A - Skor 2: Terlalu cepat melibatkan aparat pada situasi yang masih dapat ditangani secara persuasif.
B - Skor 3: Mengurangi audiens, tetapi tidak menyelesaikan sumber masalah dan berpotensi menimbulkan rumor.
C - Skor 5: Preventif, berbasis bukti, komunikatif, dan menawarkan solusi yang dapat diterapkan.
D - Skor 1: Tetap memberi ruang pada ujaran kebencian dan menganggapnya setara dengan perbedaan pendapat biasa.
E - Skor 4: Tegas mencegah risiko, tetapi tidak memberi alternatif dan dapat memicu resistensi panitia.

Cara cepat: Pada tahap awal, utamakan pencegahan yang langsung menyasar sumber risiko dan menyediakan alternatif yang aman.`,
        tingkat: 'sulit',
        status: 'direview',
      },
      {
        nomor: 25,
        tipe: 'skala',
        pertanyaan: `Seorang rekan memberi tahu bahwa dalam grup percakapan internal kantor berulang kali muncul pesan yang merendahkan kelompok tertentu dan mengajak anggota menolak bekerja sama dengan mereka. Beberapa anggota merasa tidak nyaman, tetapi takut menanggapi. Anda tidak menjadi anggota grup tersebut. Tindakan Anda adalah ...`,
        opsi: [
          { label: 'A', teks: `Meminta rekan meneruskan seluruh pesan ke grup lain agar lebih banyak orang mengetahui masalahnya.` },
          { label: 'B', teks: `Bergabung ke grup untuk memantau percakapan dan mencari siapa yang paling aktif.` },
          { label: 'C', teks: `Mengabaikan karena Anda tidak melihat pesan tersebut secara langsung.` },
          { label: 'D', teks: `Meminta rekan menyimpan bukti yang relevan, mendukung pihak yang terdampak, dan menggunakan kanal internal yang berwenang untuk pemeriksaan serta tindak lanjut.` },
          { label: 'E', teks: `Menghubungi pengirim pesan secara pribadi dan menuntut mereka meminta maaf di grup.` },
        ],
        kunci: 'D',
        pembahasan: `Contoh Soal 4 – Respons di Lingkungan Kerja dan Digital
Level Bloom: C5 – Mengevaluasi
Tingkat Kesulitan: HOTS

Konsep yang digunakan: Ujaran kebencian berulang, perlindungan pelapor, bukti, dan kanal internal
Kata kunci: grup internal, pesan berulang, diskriminasi, takut menanggapi, kanal resmi

Opsi D paling tepat karena peserta tidak perlu menyusup atau berkonfrontasi sendiri. Informasi sudah menunjukkan pola berulang dan dampak pada lingkungan kerja, sehingga penanganan formal yang menjaga bukti serta perlindungan pihak terdampak lebih tepat.

Pembahasan setiap opsi:
A - Skor 1: Memperluas penyebaran konten dan meningkatkan risiko bagi pihak terdampak.
B - Skor 2: Menambah paparan dan melampaui peran peserta tanpa menyelesaikan masalah.
C - Skor 3: Berhati-hati terhadap informasi tidak langsung, tetapi terlalu pasif ketika terdapat pola dan pihak terdampak.
D - Skor 5: Melindungi pihak terdampak, menjaga bukti, dan menggunakan kewenangan organisasi.
E - Skor 4: Menunjukkan keberanian dan koreksi, tetapi berisiko memicu konfrontasi dan pembalasan tanpa perlindungan.

Cara cepat: Pada pola berulang di lingkungan kerja, jangan menyebarkan atau menyusup. Lindungi pelapor, jaga bukti minimum, dan gunakan kanal organisasi.`,
        tingkat: 'sulit',
        status: 'direview',
      },
      {
        nomor: 26,
        tipe: 'skala',
        pertanyaan: `Anda melihat rekan mengunggah komentar yang menyinggung kelompok agama tertentu. Unggahan belum menyebar luas, tidak mengandung ancaman, dan sebelumnya rekan tersebut tidak pernah melakukan hal serupa. Respons Anda adalah ...`,
        opsi: [
          { label: 'A', teks: `Mengajak rekan berbicara secara pribadi, menjelaskan dampak unggahan, meminta klarifikasi, dan mendorongnya memperbaiki atau menghapus konten.` },
          { label: 'B', teks: `Melaporkan langsung kepada pihak berwenang agar ada efek jera.` },
          { label: 'C', teks: `Menegur keras di kolom komentar agar publik mengetahui bahwa Anda tidak setuju.` },
          { label: 'D', teks: `Menyampaikan unggahan tersebut kepada banyak rekan agar mereka ikut menasihati.` },
          { label: 'E', teks: `Membiarkan karena unggahan dibuat melalui akun pribadi.` },
        ],
        kunci: 'A',
        pembahasan: `Contoh Soal 5 – Respons di Lingkungan Sosial dan Digital
Level Bloom: C4 – Menganalisis
Tingkat Kesulitan: HOTS

Konsep yang digunakan: Komunikasi personal, klarifikasi, koreksi proporsional, dan etika digital
Kata kunci: unggahan pertama, belum meluas, tanpa ancaman, pembicaraan pribadi

Opsi A paling tepat karena tingkat risiko masih memungkinkan koreksi personal yang aman. Respons tersebut menjaga martabat, membuka ruang klarifikasi, dan langsung mengurangi dampak melalui perbaikan atau penghapusan konten. Eskalasi dapat dilakukan jika perilaku berulang atau memburuk.

Pembahasan setiap opsi:
A - Skor 5: Proporsional, edukatif, menjaga martabat, dan berorientasi pada perbaikan langsung.
B - Skor 3: Menunjukkan kepedulian, tetapi terlalu cepat untuk kejadian pertama tanpa ancaman dan tanpa upaya klarifikasi.
C - Skor 2: Menolak ujaran, tetapi mempermalukan rekan dan berpotensi memperluas konflik.
D - Skor 1: Menyebarkan konten dan membuka peluang gosip atau perundungan.
E - Skor 4: Menghormati ruang pribadi, tetapi mengabaikan dampak publik dari unggahan; masih kurang aktif dibanding komunikasi personal.

Cara cepat: Risiko rendah dan kejadian pertama biasanya ditangani dengan klarifikasi personal yang tegas dan edukatif; eskalasi dilakukan bila ada pengulangan atau ancaman.`,
        tingkat: 'sulit',
        status: 'direview',
      },
    ],
  },
];
