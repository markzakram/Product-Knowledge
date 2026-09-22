import type { Kelompok } from '@/lib/skema';

/**
 * Contoh soal SKD CPNS, diambil dari Markaz paket "02 Tryout Tryout SKD".
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
Yang merupakan pengaruh positif pasca amandemen UUD 1945 ditunjukkan oleh nomor...`,
      opsi: [
        { label: 'A', teks: `1 dan 2` },
        { label: 'B', teks: `2 dan 3` },
        { label: 'C', teks: `3 dan 4` },
        { label: 'D', teks: `1 dan 3` },
        { label: 'E', teks: `2 dan 4` },
      ],
      kunci: 'A',
      pembahasan: `Pembahasan :
Jawaban yang paling tepat adalah Opsi A yaitu 1 dan 2
Beberapa pengaruh positif pasca amandemen UUD 1945 adalah sebagai berikut:
a. Mempertegas Indonesia adalah sebagai negara hukum
b. Presiden tidak lagi memegang kekuasaan membentuk Undang Undang, tetapi hanya berhak mengajukan dan membahas Rancangan Undang-Undang.
c. Periode Lembaga Kepresidenan dibatasi hingga 2 periode.
d. Presiden dan Wakil Presiden merupakan satu pasangan dan dipilih langsung oleh rakyat.
e. Presiden tidak lagi bertanggung jawab terhadap MPR karena MPR tidak lagi merupakan sebagai lembaga pelaksana kedaulatan rakyat.
f. MPR tidak lagi sebagai lembaga tertinggi negara.
g. DPR menjadi lembaga yang lebih supreme, karena kewenangan DPR lebih besar dan hegemoninya lebih dominan.`,
      status: 'direview',
    },
    {
      nomor: 4,
      tipe: 'pg',
      pertanyaan: `Presiden memiliki hak prerogatif, yaitu memberikan grasi, rehabilitasi, amnesti, dan abolisi yang tercantum dalam UUD 1945 ....`,
      opsi: [
        { label: 'A', teks: `Pasal 13` },
        { label: 'B', teks: `Pasal 14` },
        { label: 'C', teks: `Pasal 15` },
        { label: 'D', teks: `Pasal 17` },
        { label: 'E', teks: `Pasal 18` },
      ],
      kunci: 'B',
      pembahasan: `Pembahasan :
Jawaban yang paling tepat adalah Opsi B yaitu Pasal 14
Pasal 14 berisi:
a. Presiden memberi grasi dan rehabilitasi dengan memperhatikan pertimbangan Mahkamah Agung.
b. Presiden memberi amnesti dan abolisi dengan memperhatikan pertimbangan DPR.`,
      status: 'direview',
    },
    {
      nomor: 5,
      tipe: 'pg',
      pertanyaan: `Bunyi lengkap kalimat Bhinneka Tunggal Ika dapat ditemukan dalan kitab...`,
      opsi: [
        { label: 'A', teks: `Bhismaparwa` },
        { label: 'B', teks: `Mahabharata` },
        { label: 'C', teks: `Ramayana` },
        { label: 'D', teks: `Sutasoma` },
        { label: 'E', teks: `Adiparwa` },
      ],
      kunci: 'D',
      pembahasan: `Pembahasan Pada mulanya..
Bhinneka Tunggal Ika Tan Hana Dharma Mangrwa.
Dalam kitab Sutasoma
Berbeda-beda tetap satu,
tak ada kebenaran yang mendua
Kalimat Bhinneka Tunggal Ika mulanya diciptakan sebagai bentuk dari rasa toleransi seorang Mpu Tantular dalam kitab sutasoma Dimana, Mpu Tantular merupakan seseorang yang menganut Buddha Tantrayana dan hidup di lingkungan kerajaan Majapahit yang memiliki corak Hindu-Siwa.
Adanya semboyan itu,
awalnya digunakan oleh Kerajaan Majapahit supaya rakyatnya yang berbeda agama tetap menjunjung tinggi cita-cita bersama dalam memajukan Kerajaan Majapathit
Maka jawaban untuk soal ini adalah yang D, Yaitu Kitab Sutasoma`,
      status: 'direview',
    },
    {
      nomor: 6,
      tipe: 'pg',
      pertanyaan: `Berikut ini yang merupakan bentuk kesatuan hubungan antara Pembukaan UUD 1945 dengan Proklamasi Kemerdekaan RI 17 Agustus 1945 adalah….`,
      opsi: [
        { label: 'A', teks: `Pembukaan UUD 1945 pada hakikatnya merupakan suatu pernyataan kemerdekaan yang lebih terinci dari adanya cita-cita luhur yang menjadi semangat pendorong ditegakkannya kemerdekaan dalam bentuk Negara Indonesia yang merdeka, bersatu, berdaulat, adil dan makmur dengan berdasarkan asas kerohanian Pancasila.` },
        { label: 'B', teks: `Ditetapkannya pembukaan UUD 1945 pada tanggal 16 Agustus 1945 bersama-sama dengan ditetapkannya UUD .` },
        { label: 'C', teks: `Pengangkatan Presiden dan Wakil Presiden serta menteri-menteri sebagai pembantu Presiden setelah diumumkannya Proklamasi Kemerdekaan dan Pembuatan UUD 1945 merupakan realisasi tindak lanjut dari Proklamasi.` },
        { label: 'D', teks: `Disebutkannya kembali pada pernyataan Proklamasi Kemerdekaan dalam alinea keempat Pembukaan yang menunjukkan bahwa antara proklamasi dengan pembukaan merupakan suatu rangkaian yang tidak dapat dipisah-pisahkan.` },
        { label: 'E', teks: `Pembukaan UUD 1945 merupakan suatu pernyataan kemerdekaan yang belum terinci dan mengandung makna cita-cita luhur yang menjadi semangat pendorong ditegakkannya kemerdekaan dalam bentuk Negara Indonesia yang merdeka, bersatu, dan berdaulat dengan berdasarkan asas kerohanian Pancasila` },
      ],
      kunci: 'A',
      pembahasan: `Pembahasan :
Bentuk kesatuan hubungan antara Pembukaan UUD 1945 dengan Proklamasi Kemerdekaan RI 17 Agustus 1945 antara lain: a. Disebutkannya kembali pada pernyataan Proklamasi Kemerdekaan dalam alenia ketiga Pembukaan yang menujukkan bahwa antara proklamasi dengan pembukaan merupakan suatu rangkaian yang tidak dapat dipisah-pisahkan. b. Ditetapkannya pembukaan UUD 1945 pada tanggal 18 Agustus 1945 bersama-sama dengan ditetapkannya UUD. Presiden dan Wakil Presiden merupakan realisasi tindak lanjut dari Proklamasi. c. Pembukaan UUD 1945 pada hakikatnya merupakan suatu pernyataan kemerdekaan yang lebih terinci dari adanya cita-cita luhur yang menjadi semangat pendorong ditegakkannya kemerdekaan dalam bentuk Negara Indonesia yang merdeka, bersatu, berdaulat, adil dan makmur dengan berdasarkan asas kerohanian Pancasila.
Jawaban yang paling tepat adalah Opsi A yaitu Pembukaan UUD 1945 pada hakikatnya merupakan suatu pernyataan kemerdekaan yang lebih terinci dari adanya cita-cita luhur yang menjadi semangat pendorong ditegakkannya kemerdekaan dalam bentuk Negara Indonesia yang merdeka, bersatu, berdaulat, adil dan makmur dengan berdasarkan asas kerohanian Pancasila.`,
      status: 'direview',
    },
    {
      nomor: 7,
      tipe: 'pg',
      pertanyaan: `Contoh pengamalan Pancasila sebagai pandangan hidup bangsa berdasarkan sila keempat adalah ..`,
      opsi: [
        { label: 'A', teks: `Memperlakukan sesama secara adil dan beradab` },
        { label: 'B', teks: `Saling menghormati antar pemeluk agama` },
        { label: 'C', teks: `Menumbuhkan sikap hidup tolong menolong` },
        { label: 'D', teks: `Menjunjung tinggi asas kerakyatan` },
        { label: 'E', teks: `Menempatkan kepentingan umum di atas kepentingan pribadi` },
      ],
      kunci: 'D',
      pembahasan: `Pembahasan :
Jawaban yang paling tepat adalah Opsi D yaitu Menjunjung tinggi asas kerakyatan
Contoh pengamalan sila keempat adalah Menjunjung tinggi asas kerakyatan.`,
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
      nomor: 1,
      tipe: 'pg',
      pertanyaan: `Neurologi : Saraf
Hidrologi : Air
Kardiologi : Otot
Etnologi : Suku
Geologi : Tanah
Yang berbeda dengan yang lain adalah ……`,
      opsi: [
        { label: 'A', teks: `Geologi : Tanah` },
        { label: 'B', teks: `Neurologi : Syaraf` },
        { label: 'C', teks: `Etnologi : Suku` },
        { label: 'D', teks: `Hidrologi : Air` },
        { label: 'E', teks: `Kardiologi : Otot` },
      ],
      kunci: 'E',
      pembahasan: `Pembahasan :
Pada soal diatas terdapat 2 bagian kata, kata bagian kiri adalah ilmu dan yang sebelah kanan adalah objek, Jika kita bedah satu persatu, maka :
Neurologi merupakan ilmu tentang saraf (benar)
Hidrologi merupakan ilmu tentang air (benar)
Etnologi merupakan ilmu tentang suku (benar)
Geologi merupakan ilmu tentang tanah (benar)
Kardiologi merupakan ilmu tentang Otot (salah) karena kardiologi merupakan ilmu tentang jantung.
Maka jawaban yang tepat adalah E. Kardiologi : Otot`,
      status: 'direview',
    },
    {
      nomor: 2,
      tipe: 'pg',
      pertanyaan: `Jagung : Padi
Sandal : Sepatu
Roti : Nasi
Bolpoin : Pensil
Susu : Sereal
Yang berbeda dengan yang lain adalah ……`,
      opsi: [
        { label: 'A', teks: `Roti : Nasi` },
        { label: 'B', teks: `Jagung : Padi` },
        { label: 'C', teks: `Susu : Sereal` },
        { label: 'D', teks: `Bolpoin : Pensil` },
        { label: 'E', teks: `Sandal : Sepatu` },
      ],
      kunci: 'C',
      pembahasan: `Pembahasan :
Pada soal diatas terdapat 2 bagian kata, hubungan antara kata tersebut adalah pengganti maka :
Jagung pengganti padi (benar)
Sandal pengganti sepatu (benar)
Roti pengganti nasi (benar)
Bolpoin pengganti pensil (benar)
Susu pengganti seral (salah) harusnya hubungan antara susu dan seral adalah susu pelengkap seral
Maka jawaban yang tepat adalah C. Susu : Sereal`,
      status: 'direview',
    },
    {
      nomor: 3,
      tipe: 'pg',
      pertanyaan: `Esensial : Vital
Sentral : Lateral
Proksimal : Distal
Natal : Mortal
Diferensial : Integral
Yang berbeda dengan yang lain adalah ……`,
      opsi: [
        { label: 'A', teks: `Esensial : Vital` },
        { label: 'B', teks: `Sentral : Lateral` },
        { label: 'C', teks: `Proksimal : Distal` },
        { label: 'D', teks: `Natal : Mortal` },
        { label: 'E', teks: `Diferensial : Integral` },
      ],
      kunci: 'A',
      pembahasan: `Pembahasan :
Pada soal ini kita akan melihat hubungan antara bagian kata, seperti berikut :
Esensial : Vital (merupakan sinonim)
Sentral : Lateral (merupakan antonim)
Proksimal : Distal (merupakan antonim)
Natal : Mortal (merupakan antonim)
Diferensial : Integral (merupakan antonim)
Maka jawaban yang benar adalah A. Esensial : Vital.`,
      status: 'direview',
    },
    {
      nomor: 4,
      tipe: 'pg',
      pertanyaan: `Jika guru memberikan latihan pengayaan setelah pembelajaran, maka nilai siswa banyak yang meningkat. Jika nilai siswa banyak yang meningkat, maka guru tidak perlu mengadakan ujian remedial bagi siswa. Simpulan yang tepat adalah ….`,
      opsi: [
        { label: 'A', teks: `Jika guru memberikan latihan pengayaan, nilai siswa banyak yang meningkat.` },
        { label: 'B', teks: `Guru memberikan latihan pengayaan jika guru tidak mengadakan remedial.` },
        { label: 'C', teks: `Jika guru memberikan latihan pengayaan , ujian remedial perlu diadakan.` },
        { label: 'D', teks: `Guru tidak mengadakan remedial jika guru memberikan latihan pengayaan.` },
        { label: 'E', teks: `Nilai siswa banyak yang meningkat jika tidak ada ujian remedial.` },
      ],
      kunci: 'D',
      pembahasan: `Pembahasan :
Pada soal diatas terdapat 2 buah pernyataan :
Jika guru memberikan latihan pengayaan setelah pembelajaran, maka nilai siswa banyak yang meningkat.
Jika nilai siswa banyak yang meningkat, maka guru tidak perlu mengadakan ujian remedial bagi siswa.
Pada masing masing parameter terdapat 2 buah kondisi, sekarang kita lihat pada parameter pertama :
Kondisi : guru memberikan latihan pengayaan setelah pembelajaran, kita sebut sebagai p
Kondisi : nilai siswa banyak yang meningkat q
Dari kedua kondisi tersebut maka kita dapat sebuah kesimpulan untuk pernyataan pertama yaitu p q
Sekarang kita lihat pada parameter kedua :
Kondisi : nilai siswa banyak yang meningkat, kita sebut sebagai q
Kondisi : guru tidak perlu mengadakan ujian remedial bagi siswa s
Dari kedua kondisi tersebut maka kita dapat sebuah kesimpulan untuk pernyataan kedua yaitu q s
Maka akan muncul hasil seperti berikut :
Untuk menyelesaikan pernyataan diatas, akan digunakan logika silogisme dimana kita akan saling menghilangkan q dari kedua pernyataan tersebut dan akan menghasilkan pernyataan seperti berikut p s.
q = jika guru memberikan latihan pengayaan
s = Guru tidak mengadakan remedial
Dengan demikian jawaban yang paling tepat adalah opsi D. Guru tidak mengadakan remedial jika guru memberikan latihan pengayaan.`,
      status: 'direview',
    },
    {
      nomor: 5,
      tipe: 'pg',
      pertanyaan: `Jika penggunaan gas CFC di bumi meningkat, maka lapisan ozon semakin rusak. Jika konsentrasi karbon di atmosfer tinggi, maka suhu permukaan bumi bertambah. Saat ini penggunaan gas CFC meningkat atau suhu permukaan bumi tidak bertambah. Simpulan yang tepat adalah ….`,
      opsi: [
        { label: 'A', teks: `Lapisan ozon semakin rusak dan konsentrasi karbon tidak tinggi.` },
        { label: 'B', teks: `Lapisan ozon semakin rusak tetapi konsentrasi karbon tinggi.` },
        { label: 'C', teks: `Lapisan ozon semakin rusak atau konsentrasi karbon tidak tinggi.` },
        { label: 'D', teks: `Lapisan ozon tidak semakin rusak tetapi konsentrasi karbon tidak tinggi.` },
        { label: 'E', teks: `Lapisan ozon semakin rusak atau konsentrasi karbon tinggi.` },
      ],
      kunci: 'C',
      pembahasan: `Pembahasan :
Pada soal diatas terdapat 2 buah pernyataan :
Jika penggunaan gas CFC di bumi meningkat, maka lapisan ozon semakin rusak
Jika konsentrasi karbon di atmosfer tinggi, maka suhu permukaan bumi bertambah.
Pada masing masing parameter terdapat 2 buah kondisi, sekarang kita lihat pada parameter pertama :
Kondisi : penggunaan gas CFC di bumi meningkat, kita sebut sebagai p
Kondisi : lapisan ozon semakin rusak, kita sebut sebagai q
Dari kedua kondisi tersebut maka kita dapat sebuah kesimpulan untuk pernyataan pertama yaitu p q
Sekarang kita lihat pada parameter kedua :
Kondisi : konsentrasi karbon di atmosfer tinggi, kita sebut sebagai r
Kondisi : suhu permukaan bumi bertambah, kita sebut sebagai s
Dari kedua kondisi tersebut maka kita dapat sebuah kesimpulan untuk pernyataan kedua yaitu r s
Kemudian diketahui 2 buah fakta bahwa :
penggunaan gas CFC meningkat, sebagai p
suhu permukaan bumi tidak bertambah, sebagai -s
kedua fakta tersebut dihubungkan dengan kata atau, kita tuliskan v
maka kesimpulannya p v -s
Sekarang kita simpulkan :
Pada bagian pernyataan kita akan lakukan proses untuk mencari hasil untuk fakta dari soal sebagai berikut :
Pernyataan pertama : menggunakan modus ponen
p sebagai sebab, dan q sebagai akibat
Karena pada pernyataan tersebut sebabnya (p) terpenuhi, maka akibatnya (q) akan terjadi.
Pernyataan kedua : menggunakan modus tolen
r sebagai sebab, dan s sebagai akibat
Karena pada pernyataan tersebut akibatnya (-s) tidak terjadi, maka sebabnya (-r) tidak terpenuhi
Maka hasil dari fakta tersebut adalah q v -r :
q = lapisan ozon rusak
v = atau
-r = konsentrasi karbon tidak tinggi
Dengan demikian jawaban yang paling tepat adalah opsi C. Lapisan ozon semakin rusak atau konsentrasi karbon tidak tinggi.`,
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
      nomor: 1,
      tipe: 'skala',
      pertanyaan: `Anda memahami bahwa Pemerintah saat ini tengah fokus untuk mewujudkan birokrasi yang bebas dari paham radikalisme dilakukan lewat penandatanganan Surat Keputusan Bersama (SKB) Penanganan Radikalisme ASN oleh 11 kementerian dan lembaga. Anda diberikan kewenangan oleh Pimpinan untuk menangkal radikalisme di instansi Anda bekerja.
Berikut adalah upaya preventif yang akan Anda lakukan dalam menangkal radikalisme, kecuali?`,
      opsi: [
        { label: 'A', teks: `Mengajak ASN untuk waspada terhadap provokasi dan hasutan` },
        { label: 'B', teks: `Mengedukasi ASN untuk menjalankan aktivitas keagamaan dengan toleran` },
        { label: 'C', teks: `Melakukan upaya deradikalisasi terhadap ASN yang terpapar paham radikalisme` },
        { label: 'D', teks: `Mengadakan workshop atau seminar pencegahan propaganda radikal` },
        { label: 'E', teks: `Mengadakan seminar kebangsaan dan penanaman nilai pancasila kepada ASN yang terpapar paham radikalisme` },
      ],
      kunci: 'C',
      pembahasan: `Mengajak ASN untuk waspada terhadap provokasi dan hasutan ( 1 )
Mengedukasi ASN untuk menjalankan aktivitas keagamaan dengan toleran ( 3 )
Melakukan upaya deradikalisasi terhadap ASN yang terpapar paham radikalisme ( 5 )
Mengadakan workshop atau seminar pencegahan propaganda radikal ( 2 )
Mengadakan seminar kebangsaan dan penanaman nilai pancasila kepada ASN yang terpapar paham radikalisme ( 4 )`,
      status: 'direview',
    },
    {
      nomor: 2,
      tipe: 'skala',
      pertanyaan: `Kemarin, Jumat sore, wilayah tempat tinggal Anda diterpa gempa bumi dengan skala sedang. Akibat peristiwa tersebut. Gereja dekat rumah Anda mengalami kerusakan bangunan. Hari ini pihak Gereja akan merapikan area gereja dari puing-puing karena agar tidak mengganggu ibadah di hari Minggu, dan mempersilahkan warga sekitar yang ingin membantu. Anda libur kerja di akhir pekan (hari Sabtu dan Minggu) dan belum ada agenda. Apa yang akan Anda lakukan?`,
      opsi: [
        { label: 'A', teks: `Membiarkan warga sekitar yang beragama Kristen untuk membantu pihak Gereja` },
        { label: 'B', teks: `Ikut membantu merapikan puing-puing di Gereja akibat gempa` },
        { label: 'C', teks: `Menyebarkan informasi tersebut kepada tetangga saya yang lain yang sempat untuk membantu Gereja` },
        { label: 'D', teks: `Menyampaikan simpati kepada pihak Gereja dan para tetangga yang beragama Kristen atas musibah yang menimpa Gereja` },
        { label: 'E', teks: `Mensuplai alat-alat yang dibutuhkan oleh Gereja untuk merapikan puing-puing akibat gempa` },
      ],
      kunci: 'B',
      pembahasan: `Membiarkan warga sekitar yang beragama Kristen untuk membantu pihak Gereja ( 1 )
Ikut membantu merapikan puing-puing di Gereja akibat gempa ( 5 )
Menyebarkan informasi tersebut kepada tetangga saya yang lain yang sempat untuk membantu Gereja ( 3 )
Menyampaikan simpati kepada pihak Gereja dan para tetangga yang beragama Kristen atas musibah yang menimpa Gereja ( 2 )
Mensuplai alat-alat yang dibutuhkan oleh Gereja untuk merapikan puing-puing akibat gempa ( 4 )`,
      status: 'direview',
    },
    {
      nomor: 3,
      tipe: 'skala',
      pertanyaan: `Anda merupakan seorang musisi yang memiliki studio pribadi di dalam rumah dan memiliki tetangga yang berbeda agama. Anda seorang muslim dan tetangga Anda beragama Hindu. Hari ini tetangga Anda akan merayakan Hari Raya Nyepi. Hal apa yang akan Anda lakukan?`,
      opsi: [
        { label: 'A', teks: `Membiarkannya melaksanakan Hari Raya Nyepi dengan khidmat` },
        { label: 'B', teks: `Menghormati dan menghargai agama yang dianut tetangga saya` },
        { label: 'C', teks: `Tidak memainkan musik untuk sementara waktu demi menjaga ketenangan selama perayaan Hari Raya Nyepi` },
        { label: 'D', teks: `Tetap memainkan musik namun dengan volume yang minimum agar tidak mengganggu perayaan Hari Raya Nyepi` },
        { label: 'E', teks: `Tidak perlu melakukan apa-apa karena bukan Agama saya` },
      ],
      kunci: 'C',
      pembahasan: `Membiarkannya melaksanakan Hari Raya Nyepi dengan khidmat ( 2 )
Menghormati dan menghargai agama yang dianut tetangga saya ( 3 )
Tidak memainkan musik untuk sementara waktu demi menjaga ketenangan selama perayaan Hari Raya Nyepi ( 5 )
Tetap memainkan musik namun dengan volume yang minimum agar tidak mengganggu perayaan Hari Raya Nyepi ( 4 )
Tidak perlu melakukan apa-apa karena bukan Agama saya ( 1 )`,
      status: 'direview',
    },
    {
      nomor: 4,
      tipe: 'skala',
      pertanyaan: `Pagi ini anda meminta bawahan anda untuk melakukan tinjauan ke lokasi proyek yang kebetulan di bawah tanggung jawab anda. Namun lagi-lagi bawahan anda tersebut mengingkari janjinya untuk melakukan tinjauan ke lokasi dengan berbagai alasan yang anda rasa kurang masuk akal. Sedangkan ini merupakan pekerjaan yang sangat penting demi menjaga nama baik perusahaan dan kepercayaan pemakai jasa perusahaan anda sikap anda adalah…`,
      opsi: [
        { label: 'A', teks: `Tidak lagi memberinya maaf karena ini sudah keterlaluan tidak mengindahkan perintah anda padahal itu adalah pekerjaan yang sangat penting` },
        { label: 'B', teks: `Berhenti mempercayainya sejak kejadian pertama hingga selanjutnya` },
        { label: 'C', teks: `Melaporkan hal ini kepada pemilik perusahaan agar mendapatkan hukuman agar dia memahami tugasnya untuk masa yang akan datang` },
        { label: 'D', teks: `Berani berkata tegas dengan menegurnya agar bertanggung jawab` },
        { label: 'E', teks: `Tidak cepat percaya dengannya jika diserahkan tugas lagi untuk kedepannya` },
      ],
      kunci: 'D',
      pembahasan: `Tidak lagi memberinya maaf karena ini sudah keterlaluan tidak mengindahkan perintah anda padahal itu adalah pekerjaan yang sangat penting - Nilai (3)
Berhenti mempercayainya sejak kejadian pertama hingga selanjutnya - Nilai (2)
Melaporkan hal ini kepada pemilik perusahaan agar mendapatkan hukuman agar dia memahami tugasnya untuk masa yang akan datang - Nilai (4)
Berani berkata tegas dengan menegurnya agar bertanggung jawab - Nilai (5)
Tidak cepat percaya dengannya jika diserahkan tugas lagi untuk kedepannya - Nilai (1)
Jawaban yang paling tepat adalah Opsi D yaitu Berani berkata tegas dengan menegurnya agar bertanggung jawab Topik Kemampuan Menggerakkan dan Mengkoordinir Orang lain, Indikator sebagai katalisator yang dapat membawa perubahan dan mengatur bawahan, Permasalahan bawahan yang tidak menjalankan tugasnya dengan berbagai alasan, sebagai seorang atasan anda wajib menegurnya, karena bawahan anda adalah tanggung jawab anda, opsi D adalah yang paling tepat`,
      status: 'direview',
    },
    {
      nomor: 5,
      tipe: 'skala',
      pertanyaan: `Anda bekerja sebagai seorang karyawan di instansi pemerintahan, hari ini adalah hari terakhir anda bekerja, karena anda sudah mengambil cuti selama seminggu kedepan untuk menjenguk orang tua suami/istri anda yang lagi dilanda musibah. Sebelum cuti anda harus menyelesaikan tugas-tugas penting terlebih dahulu. Namun tiba-tiba anda diajak atasan anda untuk menemaninya ke kantin untuk mengobrol mengenai pekerjaan & makan di waktu jam kerja. Hal apa yang akan anda lakukan?`,
      opsi: [
        { label: 'A', teks: `Menyetujui nya dan segera langsung ke kantin` },
        { label: 'B', teks: `Menyelesaikan tugas-tugas penting terlebih dahulu, baru kemudian bergegas menuju ke kantin memenuhi panggilan atasan` },
        { label: 'C', teks: `Menolaknya ke kantin dan mengingatkannya dengan sopan agar menjaga profesionalisme kerja` },
        { label: 'D', teks: `Melaporkannya atasan anda kepada Badan Kepegawaian agar mendapat teguran` },
        { label: 'E', teks: `Meminta tolong rekan kerja lain untuk menggantikan anda menemani atasan di kantin` },
      ],
      kunci: 'C',
      pembahasan: `Menyetujui nya dan segera langsung ke kantin - Nilai (3)
Menyelesaikan tugas-tugas penting terlebih dahulu, baru kemudian bergegas menuju ke kantin memenuhi panggilan atasan - Nilai (4)
Menolaknya ke kantin dan mengingatkannya dengan sopan agar menjaga profesionalisme kerja - Nilai (5)
Melaporkannya atasan anda kepada Badan Kepegawaian agar mendapat teguran - Nilai (1)
Meminta tolong rekan kerja lain untuk menggantikan anda menemani atasan di kantin - Nilai (2)
Jawaban yang paling tepat adalah Opsi C yaitu Menolaknya ke kantin dan mengingatkannya dengan sopan agar menjaga profesionalisme kerja Topik profesionalisme dalam bekerja, indikator tanggung jawab dan kesadaran diri akan peraturan yang ada, anda dihadapkan pada masalah tugas yang harus selesai sebelum anda cuti lalu atasan anda mengajak ke kantin untuk membicarakan pekerjaan sekaligus makan, selesaikan pekerjaan kita.`,
      status: 'direview',
    },
    ],
  },
];
