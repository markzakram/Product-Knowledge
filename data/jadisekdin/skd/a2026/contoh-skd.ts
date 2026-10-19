import type { Kelompok } from '@/lib/skema';

/**
 * Contoh soal SKD sekolah kedinasan, dari Markaz paket "01 TO SEKOLAH KEDINASAN 2023".
 *
 * Dihasilkan oleh skrip/ke-data.mjs, lalu boleh disunting tangan.
 * Status sengaja 'direview', bukan 'final': isinya berasal dari bank soal
 * produksi dan belum diperiksa ulang untuk keperluan etalase.
 */
/** 5 soal, lanjutan penomoran dari contoh yang sudah ada. */
export const contohTwk: Kelompok[] = [
  {
    soal: [
    {
      nomor: 3,
      tipe: 'pg',
      pertanyaan: `Perhatikan pernyataan berikut ini!
1) Mempertegas Indonesia adalah sebagai negara hukum
2) Presiden tidak lagi memegang kekuasaan membentuk Undang Undang, tetapi hanya berhak mengajukan dan membahas Rancangan Undang-Undang.
3) Periode Lembaga Kepresidenan dibatasi hingga 15 tahun.
4) Presiden dan Wakil Presiden merupakan wakil dari dua pasangan dan dipilih langsung oleh rakyat.
Yang merupakan pengaruh positif pasca amandemen UUD 1945 ditunjukkan oleh nomor….`,
      opsi: [
        { label: 'A', teks: `1 dan 2` },
        { label: 'B', teks: `2 dan 3` },
        { label: 'C', teks: `3 dan 4` },
        { label: 'D', teks: `1 dan 3` },
        { label: 'E', teks: `2 dan 4` },
      ],
      kunci: 'A',
      pembahasan: `Beberapa pengaruh positif pasca amandemen UUD 1945 adalah sebagai berikut: a. Mempertegas Indonesia adalah sebagai negara hukum b. Presiden tidak lagi memegang kekuasaan membentuk Undang-Undang, tetapi hanya berhak mengajukan dan membahas Rancangan Undang-Undang. c. Periode Lembaga Kepresidenan dibatasi hingga 2 periode. d. Presiden dan Wakil Presiden merupakan status pasangan dan dipilih langsung oleh rakyat. e. Presiden tidak lagi bertanggung jawab terhadap MPR karena MPR tidak lagi merupakan sebagai lembaga pelaksana kedaulatan rakyat. f. MPR tidak lagi sebagai lembaga tertinggi negara. g. DPR menjadi lembaga yang lebih supreme, karena kewenangan DPR lebih besar dan hegemoninya lebih dominan.
Jawaban yang paling tepat adalah Opsi A yaitu 1 dan 2`,
      status: 'direview',
    },
    {
      nomor: 4,
      tipe: 'pg',
      pertanyaan: `Indonesia memiliki Lambang Negara Garuda Pancasila yang dicantumkan pada pasal yang diamandemen pada amandemen ke …`,
      opsi: [
        { label: 'A', teks: `Pertama` },
        { label: 'B', teks: `Kedua` },
        { label: 'C', teks: `Ketiga` },
        { label: 'D', teks: `Keempat` },
        { label: 'E', teks: `Tidak berubah` },
      ],
      kunci: 'B',
      pembahasan: `Lambang Negara diatur pada Pasal 36 166A yang merupakan hasil amandemen kedua, yaitu pada tanggal 7-18 Agustus 2000.
Jawaban yang paling tepat adalah Opsi B yaitu Kedua`,
      status: 'direview',
    },
    {
      nomor: 5,
      tipe: 'pg',
      pertanyaan: `Pak Ahmad adalah seorang ASN bagian Pejabat publik di suatu daerah tertentu. Sebagai ASN tentunya pak Ahmad harus menjadi pribadi yang dapat menjadi teladan yang baik bagi masyarakat umum di tempat pak Ahmad mengabdi.
Keutamaan seorang ASN sebagai Pejabat publik harus berintegritas tinggi pada nilai ...`,
      opsi: [
        { label: 'A', teks: `Kejujuran` },
        { label: 'B', teks: `Kedisiplinan` },
        { label: 'C', teks: `Tanggung Jawab` },
        { label: 'D', teks: `Kepedulian` },
        { label: 'E', teks: `Pelayanan Publik` },
      ],
      kunci: 'A',
      pembahasan: `Untuk bisa mengerjakan soal Integritas,
Harus paham 2 poin :
1.Konsep dasar Integritas
2.PermenpanRB No. 38 Tahun 2017
3.Tentang Standar Kompetensi ASN
Berikut ini adalah definisi dari Integritas secara Istilah berdasarkan PermenpanRB No. 38 Tahun 2017
⟦gambar:gambar/jadisekdin/ckeditor_1622336544.png⟧
Sedangkan ini adalah definisi dari integritas secara Bahasa menurut KBBI.
⟦gambar:gambar/jadisekdin/ckeditor_1622336879.png⟧
Implementasi yang paling utama dari Integritas itu adalah KEJUJURAN, maka yang paling tepat adalah jawaban yang A`,
      status: 'direview',
    },
    {
      nomor: 6,
      tipe: 'pg',
      pertanyaan: `Lambang Bhineka Tunggal Ika untuk pertama kali dipakai secara resmi pada tanggal...`,
      opsi: [
        { label: 'A', teks: `11 Februari 1950` },
        { label: 'B', teks: `11 Maret 1950` },
        { label: 'C', teks: `11 April 1950` },
        { label: 'D', teks: `11 Juni 1950` },
        { label: 'E', teks: `11 Juli 1950` },
      ],
      kunci: 'A',
      pembahasan: `Dipakai pertama kali dalam
Sidang Kabinet Indonesia Serikat
11 Februari 1950
Telah ditetapkan melalui
Peraturan Pemerintahan Nomor 66 Tahun 1951
17 Oktober 1951
Telah Dibuat Undang-Undang
28 Oktober 1951
sebagai Lambang Negara.
⟦gambar:gambar/jadisekdin/ckeditor_1624073062.JPG⟧
Semboyan Bhinneka Tunggal Ika pada cakar burung Garuda pada Lambang Negara Indonesia ditetapkan secara resmi menjadi salah satu bagian NKRI.`,
      status: 'direview',
    },
    {
      nomor: 7,
      tipe: 'pg',
      pertanyaan: `Perwujudan kepulauan Nusantara sebagai satu kesatuan politik antara lain memiliki makna bahwa….`,
      opsi: [
        { label: 'A', teks: `Kekuatan ekonomi yang mampu bersaing dalam pasar Internasional` },
        { label: 'B', teks: `Seluruh kekayaan nusantara menjadi modal dan milik bersama Bangsa Indonesia` },
        { label: 'C', teks: `Masyarakat Indonesia adalah satu perikehidupan bangsa` },
        { label: 'D', teks: `Serangan terhadap satu daerah merupakan ancaman bagi daerah lainnya` },
        { label: 'E', teks: `Budaya Indonesia adalah satu dengan corak ragam budaya yang kaya` },
      ],
      kunci: 'B',
      pembahasan: `Kepulauan Nusantara sebagai satu kesatuan politik mengandung arti bahwa kebudayaan wilayah nasinal dengan segala isi dan kekayaannya merupakan satu kesatuan wilayah, wadah, ruang hidup, kesatuan matra seluruh bangsa yang menjadi modal dari milik bersama bangsa Indonesia.
Jawaban yang paling tepat adalah Opsi B yaitu Seluruh kekayaan nusantara menjadi modal dan milik bersama Bangsa Indonesia`,
      status: 'direview',
    },
    ],
  },
];

/** 5 soal, lanjutan penomoran dari contoh yang sudah ada. */
export const contohTiu: Kelompok[] = [
  {
    soal: [
    {
      nomor: 3,
      tipe: 'pg',
      pertanyaan: `Elang : Kelinci
Ular : Katak
Singa : Rusa
Belalang : Kupu-kupu
Trenggiling : Semut
Yang berbeda dengan yang lain adalah ……`,
      opsi: [
        { label: 'A', teks: `Ular : Katak` },
        { label: 'B', teks: `Belalang : Kupu-kupu` },
        { label: 'C', teks: `Elang : Kelinci` },
        { label: 'D', teks: `Trenggiling : Semut` },
        { label: 'E', teks: `Singa : Rusa` },
      ],
      kunci: 'B',
      pembahasan: `Jawaban yang tepat untuk soal ini adalah jawaban yang (B)
Pembahasan:
Jika diperhatikan, hubungan kata 1 dan kata 2 adalah Kata pertama memangsa kata kedua .
Sehingga yang berbeda dengan yang lain adalah Opsi B (Belalang : Kupu-kupu)`,
      status: 'direview',
    },
    {
      nomor: 4,
      tipe: 'pg',
      pertanyaan: `Motor : Ayam
Bus : Gajah
Becak : Kerbau
Sepeda : Bebek
Mobil : Kambing
Yang berbeda dengan yang lain adalah ……`,
      opsi: [
        { label: 'A', teks: `Becak : Kerbau` },
        { label: 'B', teks: `Mobil : Kambing` },
        { label: 'C', teks: `Sepeda : Bebek` },
        { label: 'D', teks: `Bus : Gajah` },
        { label: 'E', teks: `Motor : Ayam` },
      ],
      kunci: 'A',
      pembahasan: `Jawaban yang tepat untuk soal ini adalah jawaban yang (A)
Pembahasan:
Jika diperhatikan, hubungan kata 1 dan kata 2 adalah Jumlah roda pada kata pertama dan jumlah kaki pada kata kedua .
Sehingga yang berbeda dengan yang lain adalah Opsi A (Becak : Kerbau)`,
      status: 'direview',
    },
    {
      nomor: 5,
      tipe: 'pg',
      pertanyaan: `Pesantren : Surau
Sawah : Gubuk
Hotel : Kolam
Gunung : Vila
Pantai : Resort
Yang berbeda dengan yang lain adalah ……`,
      opsi: [
        { label: 'A', teks: `Sawah : Gubuk` },
        { label: 'B', teks: `Gunung : Vila` },
        { label: 'C', teks: `Pantai : Resort` },
        { label: 'D', teks: `Hotel : Kolam` },
        { label: 'E', teks: `Pesantren : Surau` },
      ],
      kunci: 'D',
      pembahasan: `Jawaban yang tepat untuk soal ini adalah jawaban yang (D)
Pembahasan:
Jika diperhatikan, hubungan kata 1 dan kata 2 adalah Kata kedua adalah bangunan(berbentuk rumah) di kata pertama .
Sehingga yang berbeda dengan yang lain adalah Opsi D (Hotel : Kolam)`,
      status: 'direview',
    },
    {
      nomor: 6,
      tipe: 'pg',
      pertanyaan: `Jika petani tidak gagal panen kedelai, maka harga kedelai tidak akan naik. Tidak benar bahwa harga kedelai naik, produk tempe mudah dijumpai. Saat ini produk tempe sulit dijumpai di pasar.`,
      opsi: [
        { label: 'A', teks: `Harga kedelai tidak naik, namun produk tempe sulit dijumpai.` },
        { label: 'B', teks: `Harga kedelai tidak naik.` },
        { label: 'C', teks: `Petani gagal panen kedelai.` },
        { label: 'D', teks: `Petani tidak gagal panen kedelai.` },
        { label: 'E', teks: `Tidak dapat disimpulkan` },
      ],
      kunci: 'C',
      pembahasan: `Pembahasan:
Misal: p = gagal panen
q = harga kedelai naik
r = produk tempe mudah dijumpai
Sehingga di pernyataan pertama dapat dituliskan
1~p&#8594;~q
Lalu pada pernyataan kedua dapat dituliskan
2~q&#8594;r
Kemudian dengan menggunakan Silogisme :
1~p&#8594;~q
2~q&#8594;r
Disini ~q saling dihilangkan sehingga diperoleh pernyataan &#8756;~p&#8594;r.
Selanjutnya ditemukan fakta pada kalimat Saat ini produk tempe sulit dijumpai di pasar , dan dapat dituliskan dengan ~r.
Kemudian dengan menggunakan Modus Tollen :
1~p&#8594;r
2~r
Diperoleh &#8756;~~p=p
Sehingga jawaban yang tepat adalah Opsi C (Petani gagal panen kedelai).`,
      status: 'direview',
    },
    {
      nomor: 7,
      tipe: 'pg',
      pertanyaan: `Pemerintah tidak perlu melakukan impor beras jika panen padi petani melimpah atau cadangan beras di penyimpanan Bulog mencukupi. Namun ternyata saat ini pemerintah melalui Kementerian Perdagangan bersiap melakukan impor beras. Simpulan yang tepat adalah ……`,
      opsi: [
        { label: 'A', teks: `Petani mengalami gagal panen meskipun cadangan beras masih cukup.` },
        { label: 'B', teks: `Cadangan beras penyimpanan Bulog masih cukup dan petani tidak gagal panen.` },
        { label: 'C', teks: `Panen padi petani tidak melimpah dan cadangan beras tidak mencukupi.` },
        { label: 'D', teks: `Cadangan beras Bulog tidak mencukupi atau petani gagal panen padi.` },
        { label: 'E', teks: `Petani berhasil panen padi meskipun cadangan beras Bulog tidak mencukupi.` },
      ],
      kunci: 'C',
      pembahasan: `Pembahasan:
Misal: p= panen padi petani melimpah
q= cadangan beras mencukupi
r= pemerintah impor beras
Sehingga di pernyataan pertama dapat dituliskan
1&#160;p&#8744;q&#8594;~r
Selanjutnya ditemukan fakta pada kalimat Namun ternyata saat ini pemerintah melalui Kementerian Perdagangan bersiap melakukan impor beras , dan dapat dituliskan dengan r.
Kemudian dengan menggunakan Modus Tollen :
1&#160;&#160;p&#8744;q&#8594;~r
2&#160;&#160;r
Diperoleh &#8756;~p&#8744;q=~p&#8743;~q
Sehingga jawaban yang tepat adalah Opsi C (Panen padi petani tidak melimpah dan cadangan beras tidak mencukupi).`,
      status: 'direview',
    },
    ],
  },
];

/** 5 soal, lanjutan penomoran dari contoh yang sudah ada. */
export const contohTkp: Kelompok[] = [
  {
    soal: [
    {
      nomor: 3,
      tipe: 'skala',
      pertanyaan: `Anda memiliki seorang teman yang dulunya merupakan simpatisan HTI. Anda mengetahui bahwa Pemerintah telah membubarkan HTI pada 19 Juli 2017 lalu karena dinilai bertentangan dengan Pancasila dan UUD 1945. Saat ini teman Anda masih intens menyisipkan narasi-narasi propaganda tentang konsep HTI di postingan media sosialnya. Apa sikap yang akan Anda ambil?`,
      opsi: [
        { label: 'A', teks: `Membuat postingan tandingan di media sosial saya seputar bahayanya konsep yang ditawarkan HTI karena mengancam persatuan dan menyindir teman saya agar dia sadar.` },
        { label: 'B', teks: `Memblocknya di media sosial agar tidak terpengaruh propaganda tentang HTI.` },
        { label: 'C', teks: `Tidak tergesa-gesa merespon dan mengamati Iebih lanjut. jika masih dilakukan secara konsisten baru saya tegur dan saya ajak berdiskusi kontra-HTI secara bil hikmah.` },
        { label: 'D', teks: `Menegurnya secara Iangsung dan menyisipkan pemahaman kontra-HTI secara bil hikmah saat berdiskusi.` },
        { label: 'E', teks: `Meninggalkan komentar di postingan teman saya berupa narasi kontra-HTI secara bil hikmah.` },
      ],
      kunci: 'D',
      pembahasan: `Membuat postingan tandingan di media sosial saya seputar bahayanya konsep yang ditawarkan HTI karena mengancam persatuan dan menyindir teman saya agar dia sadar.( 3 )
Memblocknya di media sosial agar tidak terpengaruh propaganda tentang HTI. ( 2 )
Tidak tergesa-gesa merespon dan mengamati Iebih lanjut. jika masih dilakukan secara konsisten baru saya tegur dan saya ajak berdiskusi kontra-HTI secara bil hikmah. ( 1 )
Menegurnya secara Iangsung dan menyisipkan pemahaman kontra-HTI secara bil hikmah saat berdiskusi. ( 5 )
Meninggalkan komentar di postingan teman saya berupa narasi kontra-HTI secara bil hikmah. ( 4 )`,
      status: 'direview',
    },
    {
      nomor: 4,
      tipe: 'skala',
      pertanyaan: `Anda baru saja menyaksikan video pada kanal YouTube Sekretariat Presiden. Di dalam video ini, Presiden Joko Widodo menyoroti sejumlah ancaman di ruang digital, mulai dari penyebaran hoaks hingga radikalisme berbasis digital. Presiden meminta publik mengisi ruang digital dengan konten yang positif. Sebagai ASN, tindakan apa yang akan Anda lakukan?`,
      opsi: [
        { label: 'A', teks: `Tetap aktif di media sosial dan membentengi diri agar terhindar dari paham radikalisme.` },
        { label: 'B', teks: `Lebih mawas diri dan turut membantu mengedukasi masyarakat untuk mewaspadai radikalisme berbasis digital dan mengisi ruang digital dengan konten yang positif.` },
        { label: 'C', teks: `Menghindari media sosial karena takut terpapar paham radikalisme.` },
        { label: 'D', teks: `Fokus menjalankan tanggung jawab pekerjaan dan mendukung upaya pemerintah melawan radikalisme.` },
        { label: 'E', teks: `Menggelar diskusi dengan teman sesama ASN agar bisa deteksi dini jika ada teman yang terpapar radikalisme.` },
      ],
      kunci: 'B',
      pembahasan: `Tetap aktif di media sosial dan membentengi diri agar terhindar dari paham radikalisme. ( 4 )
Lebih mawas diri dan turut membantu mengedukasi masyarakat untuk mewaspadai radikalisme berbasis digital dan mengisi ruang digital dengan konten yang positif. ( 5 )
Menghindari media sosial karena takut terpapar paham radikalisme. ( 1 )
Fokus menjalankan tanggung jawab pekerjaan dan mendukung upaya pemerintah melawan radikalisme. ( 3 )
Menggelar diskusi dengan teman sesama ASN agar bisa deteksi dini jika ada teman yang terpapar radikalisme. ( 2 )`,
      status: 'direview',
    },
    {
      nomor: 5,
      tipe: 'skala',
      pertanyaan: `Anda tergabung dalam grup whatsapp yang saat ini sedang ramai oleh isu yang mengarah ke ujaran kebencian pada etnis tertentu ( Benih-Benih Radikalisme ). Pada awalnya ada salah satu anggota grup yang mernbagikan pesan broadcast ke grup kemudian ditanggapi oleh sebagian besar anggota di grup whatsapp. Diawali dengan diskusi, kemudian berakhir dengan keluarnya hujatan pada etnis tertentu. Dalam situasi ini, apa sikap Anda?`,
      opsi: [
        { label: 'A', teks: `Tidak ikut-ikutan karena belum mengetahui kebenaran informasi dan hanya menjadi "silent reader" di grup whatsapp tersebut` },
        { label: 'B', teks: `Langsung keluar dari grup whatsapp karena konten yang dibahas tidak sesuai dengan marwah Pancasila` },
        { label: 'C', teks: `Tidak Iangsung percaya pada informasi yang di share oleh anggota grup dan mencari tahu kebenaran info yang di share di grup whatsapp di kanal berita terpercaya` },
        { label: 'D', teks: `Mencoba menguji kebenaran informasi yang dibagikan dan berusaha melakukan "cooling-down" agar pembahasan di grup tidak semakin panas` },
        { label: 'E', teks: `Menguji kebenaran informasi yang dibagikan dan mengingatkan anggota grup untuk tidak tergesa-gesa dalam mempercayai informasi yang beredar dan menguji kebenaran informasi terlebih dahulu, serta tidak melakukan respon yang mengarah pada ujaran kebencian` },
      ],
      kunci: 'E',
      pembahasan: `Tidak ikut-ikutan karena belum mengetahui kebenaran informasi dan hanya menjadi "silent reader" di grup whatsapp tersebut ( 2 )
Langsung keluar dari grup whatsapp karena konten yang dibahas tidak sesuai dengan marwah Pancasila ( 1 )
Tidak Iangsung percaya pada informasi yang di share oleh anggota grup dan mencari tahu kebenaran info yang di share di grup whatsapp di kanal berita terpercaya ( 3 )
Mencoba menguji kebenaran informasi yang dibagikan dan berusaha melakukan "cooling-down" agar pembahasan di grup tidak semakin panas ( 4 )
Menguji kebenaran informasi yang dibagikan dan mengingatkan anggota grup untuk tidak tergesa-gesa dalam mempercayai informasi yang beredar dan menguji kebenaran informasi terlebih dahulu, serta tidak melakukan respon yang mengarah pada ujaran kebencian ( 5 )`,
      status: 'direview',
    },
    {
      nomor: 6,
      tipe: 'skala',
      pertanyaan: `Anda bersama salah satu rekan kerja melakukan kunjungan ke kantor klien. Pada saat kunjungan tersebut Anda melihat ada salah satu klien yang terlihat kurang profesional dan kurang cakap dalam perundingan kerjasama. Padahal Anda perlu banyak informasi dan data mengenai program kerjasama yang akan segera disepakati. Sikap Anda pada situasi tersebut adalah …..`,
      opsi: [
        { label: 'A', teks: `Meminta rekan kerja saya untuk mahir serta mampu bernegosiasi dengan klien tersebut. Berharap akan mendapatkan sisi keuntungan yang lebih dari keadaan klien yang kurang cakap dalam perundingan` },
        { label: 'B', teks: `Menyampaikan kepada atasan mengenai klien tersebut kepada atasan untuk dijadikan salah satu pertimbangan untuk melanjutkan program kerjasama untuk periode selanjutnya` },
        { label: 'C', teks: `Membatalkan kesepakatan kerjasama yang telah terjalin, untuk program yang telah terlanjur berjalan bisa diberikan kepada pihak lain dan saya akan menyarankan klien tersebut untuk mencari mitra kerjasama yang lain` },
        { label: 'D', teks: `Berusaha dan mencoba tetap mencari informasi penting meskipun saya yakin untuk membatalkan kerjasama dengan mitra tersebut` },
        { label: 'E', teks: `Berusaha untuk tidak terlalu kaku dan arogan dalam menggali informasi dari klien tersebut sehingga ia tidak gugup dan bisa berunding secara profesional` },
      ],
      kunci: 'E',
      pembahasan: `Meminta rekan kerja saya untuk mahir serta mampu bernegosiasi dengan klien tersebut. Berharap akan mendapatkan sisi keuntungan yang lebih dari keadaan klien yang kurang cakap dalam perundingan - Nilai (1)
Menyampaikan kepada atasan mengenai klien tersebut kepada atasan untuk dijadikan salah satu pertimbangan untuk melanjutkan program kerjasama untuk periode selanjutnya - Nilai (4)
Membatalkan kesepakatan kerjasama yang telah terjalin, untuk program yang telah terlanjur berjalan bisa diberikan kepada pihak lain dan saya akan menyarankan klien tersebut untuk mencari mitra kerjasama yang lain - Nilai (2)
Berusaha dan mencoba tetap mencari informasi penting meskipun saya yakin untuk membatalkan kerjasama dengan mitra tersebut - Nilai (3)
Berusaha untuk tidak terlalu kaku dan arogan dalam menggali informasi dari klien tersebut sehingga ia tidak gugup dan bisa berunding secara profesional - Nilai (5)
Topik Indikator Jejaring Kerja. Mengembbangkan keinginan dan kemampuan CPNS yang kuat untuk memperkuat dan memperluas jaringan kerja dengan baik. Mitra jaringan kerja bisa bermacam-macam mulai dari masyarakat, institusi dalam negeri dan institusi luar negeri Jawaban yang paling tepat adalah Opsi E yaitu Berusaha untuk tidak terlalu kaku dan arogan dalam menggali informasi dari klien tersebut sehingga ia tidak gugup dan bisa berunding secara profesional`,
      status: 'direview',
    },
    {
      nomor: 7,
      tipe: 'skala',
      pertanyaan: `Anda seorang aparatur sipil negara (ASN) pada suatu kementerian. Anda ditugaskan oleh atasan unit Anda untuk melaksanakan suatu program kerja yang tidak Anda inginkan. Namun atasan Anda tetap meminta untuk tetap melaksanakannya. Hal yang akan Anda lakukan pada situasi tersebut adalah …..`,
      opsi: [
        { label: 'A', teks: `Meninggalkan program tersebut karena saya seorang pribadi yang hanya mau melaksanakan sesuai keinginan dan tidak ingin melakukan sebuah kegiatan yang bertentangan dengan hati nurani saya` },
        { label: 'B', teks: `Mengungkapkan ketidaksetujuan saya disertai dengan alasan kepada atasan tersebut, namun program tersebut tetap dilaksanakan karena sudah menjadi kewajiban dan komitmen saya sebagai abdi negara untuk menjalankan program kantor` },
        { label: 'C', teks: `Tetap menjalankan program tersebut meskipun ada rasa ragu-ragu, namun tetap dilaksanakan karena perintah atasan harus tetap dijalankan sekalipun bertentangan dengan hati nurani.` },
        { label: 'D', teks: `Mengungkapkan ketidaksetujuan saya kepada rekan kerja lain. Berharap ada beberapa rekan kerja yang memiliki pemahaman yang sama sehingga mengajukan keberatan kepada atasan. Masukan beberapa orang memiliki berpeluang dipertimbangkan oleh atasan` },
        { label: 'E', teks: `Tidak berkomentar apapun terkait program tersebut. Berusaha menjalankan sepenuh hati program tersebut dengan sebaik mungkin karena telah menjadi komitmen awal akan menjalankan kewajiban secara optimal bila diterima menjadi ASN.` },
      ],
      kunci: 'E',
      pembahasan: `Meninggalkan program tersebut karena saya seorang pribadi yang hanya mau melaksanakan sesuai keinginan dan tidak ingin melakukan sebuah kegiatan yang bertentangan dengan hati nurani saya - Nilai (1)
Mengungkapkan ketidaksetujuan saya disertai dengan alasan kepada atasan tersebut, namun program tersebut tetap dilaksanakan karena sudah menjadi kewajiban dan komitmen saya sebagai abdi negara untuk menjalankan program kantor - Nilai (3)
Tetap menjalankan program tersebut meskipun ada rasa ragu-ragu, namun tetap dilaksanakan karena perintah atasan harus tetap dijalankan sekalipun bertentangan dengan hati nurani. - Nilai (4)
Mengungkapkan ketidaksetujuan saya kepada rekan kerja lain. Berharap ada beberapa rekan kerja yang memiliki pemahaman yang sama sehingga mengajukan keberatan kepada atasan. Masukan beberapa orang memiliki berpeluang dipertimbangkan oleh atasan - Nilai (2)
Tidak berkomentar apapun terkait program tersebut. Berusaha menjalankan sepenuh hati program tersebut dengan sebaik mungkin karena telah menjadi komitmen awal akan menjalankan kewajiban secara optimal bila diterima menjadi ASN. - Nilai (5)
Topik Indikator Kemampuan mengendalikan diri Untuk melihat kemampuan CPNS dalam mengendalikan dirinya saat menghadapi suatu masalah atau kondisi yang tidak sesuai dengan keinginannya Jawaban yang paling tepat adalah Opsi E yaitu Tidak berkomentar apapun terkait program tersebut. Berusaha menjalankan sepenuh hati program tersebut dengan sebaik mungkin karena telah menjadi komitmen awal akan menjalankan kewajiban secara optimal bila diterima menjadi ASN.`,
      status: 'direview',
    },
    ],
  },
];
