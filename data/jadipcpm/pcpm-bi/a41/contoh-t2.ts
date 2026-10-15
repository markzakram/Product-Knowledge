import type { Kelompok } from '@/lib/skema';

/**
 * Contoh soal PCPM 41 Seleksi Pengetahuan Teknis, cuplikan dari bank soal pejuang.berkarirbi.id
 * (Booster dan Tryout).
 *
 * Dihasilkan oleh skrip/impor-berkarirbi.mjs dan DITIMPA setiap skrip dijalankan:
 * suntingan tangan di berkas ini hilang. Dipasang ke subtes lewat t2-seleksi-pengetahuan-teknis.ts
 * (di `contoh:`, sesudah contoh tulisan tangan); nama ekspornya jangan diubah.
 * Status 'direview': belum diperiksa ulang untuk keperluan etalase.
 */
/** 10 soal "TPU" dari 6 paket Booster dan Tryout. */
export const contohTpuBerkarir: Kelompok[] = [
  {
    soal: [
    {
      nomor: 1,
      tipe: 'pg',
      pertanyaan: `Ketika sebuah negara mengalami penurunan cadangan devisa secara drastis hingga berada di bawah standar kecukupan internasional, dampak langsung yang paling sistemik terhadap stabilitas moneter negara tersebut adalah...`,
      opsi: [
        { label: 'A', teks: `Terjadinya apresiasi mata uang domestik secara tajam karena berkurangnya jumlah mata uang asing yang beredar di pasar spot` },
        { label: 'B', teks: `Penurunan drastis angka inflasi domestik akibat berkurangnya daya beli masyarakat terhadap barang-barang mewah dari luar negeri` },
        { label: 'C', teks: `Keterbatasan kemampuan Bank Sentral dalam melakukan intervensi pasar untuk menjaga stabilitas nilai tukar, yang memicu depresiasi mata uang` },
        { label: 'D', teks: `Meningkatnya skor kredit (sovereign credit rating) negara tersebut di mata lembaga internasional karena dianggap efisien dalam mengelola aset luar negeri.` },
      ],
      kunci: `C`,
      pembahasan: `Cadangan devisa berfungsi sebagai alat bagi Bank Sentral untuk melakukan intervensi. Jika nilai tukar melemah (depresiasi), Bank Sentral akan menjual dolar dari cadangan devisa dan membeli mata uang domestik untuk menyeimbangkan pasar. Jika cadangan menipis, Bank Sentral kehilangan kekuatan untuk mengontrol volatilitas, sehingga mata uang rentan jatuh bebas.

Hal ini kejadian tahun 1997-1998 (makanya disebut krisis moneter) karena Indonesia kehabisan Dollar.`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 2,
      tipe: 'pg',
      pertanyaan: `Produk Domestik Bruto Indonesia didominasi oleh sektor`,
      opsi: [
        { label: 'A', teks: `Perdagangan` },
        { label: 'B', teks: `Pertambangan dan Energi` },
        { label: 'C', teks: `Industri Pengolahan` },
        { label: 'D', teks: `Pertanian` },
      ],
      kunci: `C`,
      pembahasan: `Industri pengolahan saat ini adalah penopang utama PDB Indonesia (2025-2026) dengan kontribusi sebesar 18.5%-19% mencakup manufaktur, hilirisasi, makanan dan tekstil.

Diikuti oleh perdagangan (13%), Pertanian-Kehutanan (12%) dan Pertambangan (10%)`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 3,
      tipe: 'pg',
      pertanyaan: `Pecahan Rp5.000 tahun emisi 2022 memuat gambar pemandangan nusantara.....`,
      opsi: [
        { label: 'A', teks: `Gunung Bromo` },
        { label: 'B', teks: `Pantai Derawan` },
        { label: 'C', teks: `Ngarai Sianok` },
        { label: 'D', teks: `Banda Neira` },
      ],
      kunci: `A`,
      pembahasan: `Dihapalin yaa~

Rp100.000: Raja Ampat (Papua Barat)
Rp50.000: Taman Nasional Komodo (Nusa Tenggara Timur)
Rp20.000: Kepulauan Derawan (Kalimantan Timur)
Rp10.000: Taman Nasional Wakatobi (Sulawesi Tenggara)
Rp5.000: Gunung Bromo (Jawa Timur)
Rp2.000: Ngarai Sianok (Sumatera Barat)
Rp1.000: Banda Neira (Maluku Tengah)`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 4,
      tipe: 'pg',
      pertanyaan: `Dengan adanya perang di Timur Tengah, maka komoditas minyak akan mengalami kelangkaan, hal ini akan berdampak pada...`,
      opsi: [
        { label: 'A', teks: `Meningkatkan inflasi di Indonesia` },
        { label: 'B', teks: `Mengurangi Inflasi di Indonesia` },
        { label: 'C', teks: `Menciptakan risiko sistemik pada perbankan` },
        { label: 'D', teks: `Menciptakan kestabilan harga` },
      ],
      kunci: `A`,
      pembahasan: `Kelangkaan bahan bakar minyak akan menyebabkan peningkatkan harga BBM. Peningkatan harga BBM akan menciptakan Cost Push Inflation dan mendorong inflasi naik di Indonesia.

Secara umum harga logistik dan energi akan meningkat untuk semua sektor barang dan jasa, para produsen akan melimpahkan kenaikan harga ini pada konsumen dan menyebabkan kenaikan harga secara massal atau umum yang biasa disebut dengan inflasi.`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 5,
      tipe: 'pg',
      pertanyaan: `Arus modal masuk dari luar negeri yang diwujudkan dalam bentuk pendirian pabrik, akuisisi perusahaan lokal, atau pembangunan aset riil berwujud fisik di Indonesia dikenal dengan istilah..`,
      opsi: [
        { label: 'A', teks: `Foreign Portfolio Investment` },
        { label: 'B', teks: `Foreign Direct Investment` },
        { label: 'C', teks: `Sovereign Wealth Fund` },
        { label: 'D', teks: `Venture Capital Funding` },
      ],
      kunci: `B`,
      pembahasan: `FDI atau Penanaman Modal Asing (PMA) lebih disukai pemerintah karena bersifat padat karya, transfer ilmu, dan tidak mudah kabur mendadak bila ada guncangan ekonomi, berbeda dengan investasi portofolio (FPI) di bursa saham.`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 6,
      tipe: 'pg',
      pertanyaan: `Salah satu koleksi yang dapat dilihat di Museum Bank Indonesia...`,
      opsi: [
        { label: 'A', teks: `Lukisan Mantan Gubernur BI` },
        { label: 'B', teks: `Senjata Kuno` },
        { label: 'C', teks: `Arca dan prasasti kuno` },
        { label: 'D', teks: `Koleksi numismatik` },
      ],
      kunci: `D`,
      pembahasan: `Koleksi nuiumismatik adalah koleksi uang kuno, Bank Indonesia memiliki lebih dari 60.000 koleksi Uang Kuno!`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 7,
      tipe: 'pg',
      pertanyaan: `Cadangan devisa Indonesia terus digunakan untuk menjaga stabilitas nilai Rupiah, namun sebuah negara tetap perlu menjaga jumlah cadangan devisa mereka sebesar....`,
      opsi: [
        { label: 'A', teks: `3 Bulan Import` },
        { label: 'B', teks: `4 Bulan Import` },
        { label: 'C', teks: `5 Bulan Import` },
        { label: 'D', teks: `6 Bulan Import` },
      ],
      kunci: `A`,
      pembahasan: `Berdasarkan standar kecukupan internasional (yang juga diadopsi oleh Bank Indonesia dan IMF), sebuah negara idealnya menjaga jumlah cadangan devisanya minimal sebesar 3 bulan impor atau minimal 3 bulan impor dan pembayaran utang luar negeri jangka pendek pemerintah.

Indonesia saat ini per Juni 2026, memiliki 146,2 Milliar USD atau setara dengan 5,8 Bulan Import Indonesia serta pembayaran utang luar negeri Indonesia.`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 8,
      tipe: 'pg',
      pertanyaan: `Selisih dari harga pembelian dan penjualan suatu saham disebut dengan...`,
      opsi: [
        { label: 'A', teks: `Dividend` },
        { label: 'B', teks: `Yield` },
        { label: 'C', teks: `Prospektus` },
        { label: 'D', teks: `Capital Gain/Loss` },
      ],
      kunci: `D`,
      pembahasan: `Selisih dari harga pembelian dan penjualan suatu saham disebut dengan Capital Gain (apabila untung) dan Capital Loss (apabila rugi)

Dividend adalah sebagian keuntungan perusahaan yang dibagikan kepada investor
Yield adalah persentase keuntungan total investor dari pembelian saham perusahaan
Prospektus adalah sebuah dokumen yang menunjukan prospek (rencana masa depan) perusahaan.`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 9,
      tipe: 'pg',
      pertanyaan: `Konsep pembangunan Ibu Kota Nusantara (IKN) dirancang dengan memadukan unsur ekologi dan teknologi, yang secara resmi dideklarasikan sebagai...`,
      opsi: [
        { label: 'A', teks: `Transit-Oriented Development` },
        { label: 'B', teks: `Aerotropolis City` },
        { label: 'C', teks: `Eco-Industrial Park` },
        { label: 'D', teks: `Smart Forest City` },
      ],
      kunci: `D`,
      pembahasan: `Pembahasan: Konsep IKN mengedepankan ruang terbuka hijau yang masif (Forest) dipadukan dengan infrastruktur digital modern (Smart).`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 10,
      tipe: 'pg',
      pertanyaan: `Mata uang negara Tiongkok adalah...`,
      opsi: [
        { label: 'A', teks: `Yen` },
        { label: 'B', teks: `Won` },
        { label: 'C', teks: `Yuan` },
        { label: 'D', teks: `Dong` },
      ],
      kunci: `C`,
      pembahasan: `Yuan - Tiongkok
Yen - Jepang
Won - Korea Selatan
Dong - Vietnam`,
      status: 'direview',
    },
    ],
  },
];

/** 10 soal "TPK" dari 6 paket Booster dan Tryout. */
export const contohTpkBerkarir: Kelompok[] = [
  {
    soal: [
    {
      nomor: 1,
      tipe: 'pg',
      pertanyaan: `Meningkatkan nilai GWM akan memberikan dampak-dampak berikut, kecuali ...`,
      opsi: [
        { label: 'A', teks: `Mengurangi jumlah uang yang beredar di masyarakat` },
        { label: 'B', teks: `Menekan jumlah kredit yang dapat diberikan oleh bank` },
        { label: 'C', teks: `Menurunkan tingkat konsumsi dan investasi` },
        { label: 'D', teks: `Meningkatkan likuiditas Bank` },
        { label: 'E', teks: `Mengurangi tekanan inflasi dengan membatasi kredit` },
      ],
      kunci: `D`,
      pembahasan: `Peningkatan nilai GWM akan menurunkan jumlah uang beredar di masyarakat dengan menurunkan likuiditas perbankan sehingga jumlah penyaluran kredit ke masyarakat akan berkurang. Peningkatan GWM juga akan berdampak pada perlambatan ekonomi. sehingga jawaban yang benar D. Meningkatkan Likuiditas Perbankan`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 2,
      tipe: 'pg',
      pertanyaan: `Ketika Pemerintah memutuskan untuk memangkas subsidi dari BBM, implikasi yang tepat di bawah ini, kecuali ...`,
      opsi: [
        { label: 'A', teks: `Harga bahan pokok meningkat` },
        { label: 'B', teks: `Daya beli masyarakat meningkat` },
        { label: 'C', teks: `Menimbulkan adanya tekanan inflasi` },
        { label: 'D', teks: `Berpotensi meningkatkan angka pengangguran` },
        { label: 'E', teks: `Terjadi perlambatan pertumbuhan ekonomi khususnya UMKM` },
      ],
      kunci: `B`,
      pembahasan: `Ketika pemerintah mengurangi subsidi BBM, maka akan terjadi kenaikan pada biaya distribusi, menyebabkan kenaikan harga barang dan jasa, menyebabkan pelaku ekonomi harus melakukan efisiensi seperti PHK atau meningkatkan harga produknya, menyebabkan turunnya daya beli masyarakat.`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 3,
      tipe: 'pg',
      pertanyaan: `Tahapan proses dalam sistem pembayaran yang melibatkan proses verifikasi transaksi dan pemeriksaan ketersediaan dana disebut ...`,
      opsi: [
        { label: 'A', teks: `Otorisasi` },
        { label: 'B', teks: `Kliring` },
        { label: 'C', teks: `Authentication` },
        { label: 'D', teks: `Verifikasi` },
        { label: 'E', teks: `Cost Control` },
      ],
      kunci: `A`,
      pembahasan: `Tahapan yang melibatkan verifikasi transaksi dan pemeriksaan ketersediaan dana adalah Otorisasi. Pada tahap ini, sistem pembayaran memeriksa apakah dana cukup tersedia di rekening pengirim dan apakah transaksi sah untuk diproses lebih lanjut. Jika dana cukup, transaksi akan dilanjutkan ke tahap berikutnya.`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 4,
      tipe: 'pg',
      pertanyaan: `Proses menyembunyikan asal usul uang yang diperoleh secara ilegal agar tampak seolah-olah berasal dari sumber yang sah. Tindakan ini dilakukan untuk menghindari penegakan hukum dan menikmati hasil kejahatan tanpa dicurigai disebut dengan...`,
      opsi: [
        { label: 'A', teks: `Money Washing` },
        { label: 'B', teks: `Money Shifting` },
        { label: 'C', teks: `Money Laundering` },
        { label: 'D', teks: `Money Structuring` },
        { label: 'E', teks: `Money Veiling` },
      ],
      kunci: `C`,
      pembahasan: `Pencucian uang adalah proses menyembunyikan asal usul uang yang diperoleh secara ilegal agar tampak seolah-olah berasal dari sumber yang sah. Tindakan ini dilakukan untuk menghindari penegakan hukum dan menikmati hasil kejahatan tanpa dicurigai.

Tujuan Pencucian Uang:

Menyamarkan asal usul dana ilegal.
Menghindari penegakan hukum dan penyitaan aset.
Memperoleh keuntungan dari hasil kejahatan.
Memasukkan dana ilegal ke dalam sistem keuangan yang sah.`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 5,
      tipe: 'pg',
      pertanyaan: `Instrumen Operasi Pasar Terbuka (OPT) Valas Syariah yang diterbitkan oleh Bank Indonesia dan memiliki fungsi untuk memperdalam pasar keuangan adalah`,
      opsi: [
        { label: 'A', teks: `ORI` },
        { label: 'B', teks: `SUVBI` },
        { label: 'C', teks: `FR` },
        { label: 'D', teks: `PasBI` },
        { label: 'E', teks: `SR` },
      ],
      kunci: `B`,
      pembahasan: `SUVBI (sukuk valas Bank Indonesia) adalah instrumen Operasi Pasar Terbuka (OPT) Valas syariah yang  berperan untuk memperdalam pasar keuangan di Indonesia`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 6,
      tipe: 'pg',
      pertanyaan: `Tujuan utama dari Blueprint Pendalaman Pasar Uang dan Pasar Valuta Asing 2030 yang dibuat oleh Bank Indonesia adalah ...`,
      opsi: [
        { label: 'A', teks: `Mendorong digitalisasi sistem perbankan untuk efisiensi operasional secara menyeluruh` },
        { label: 'B', teks: `Menguatkan pengawasan kredit mikro agar lebih inklusif` },
        { label: 'C', teks: `Meningkatkan pertumbuhan ekonomi dengan memperluas pembiayaan kredit konsumtif` },
        { label: 'D', teks: `Menetapkan target inflasi rendah melalui penyesuaian suku bunga acuan` },
        { label: 'E', teks: `Mengintegrasikan PUVA dengan operasi moneter pro-market` },
      ],
      kunci: `E`,
      pembahasan: `BPPU 2030 dirancang untuk membangun PUVA yang modern dan maju serta terintegrasi dengan operasi moneter pro-market, sehingga mendukung efektivitas transmisi kebijakan moneter dan stabilitas sistem keuangan, bukan fokus pada digitalisasi perbankan secara umum atau pembiayaan konsumtif.

Note: Wajib baca BPPU 2030!`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 7,
      tipe: 'pg',
      pertanyaan: `Berdasarkan Strategy Map Pencegahan dan Pemberantasan Uang Rupiah Palsu, berikut ini yang termasuk ke dalam pilar-pilar strategy tersebut, kecuali ...`,
      opsi: [
        { label: 'A', teks: `Uang Rupiah yang Berkualitas, Terpercaya, Aman & Andal` },
        { label: 'B', teks: `Pengetahuan & Pemahaman Masyarakat Terhadap CIKUR` },
        { label: 'C', teks: `Sanksi Tegas terhadap Pelaku Tindak Pidana UPAL` },
        { label: 'D', teks: `Kampanye Cinta, Bangga, Paham Rupiah` },
        { label: 'E', teks: `Semua benar` },
      ],
      kunci: `D`,
      pembahasan: `Strategy Map Pencegahan & Pe​mberantasan Uang Rupiah Palsu memuat 3 pilar, yaitu,
1. Uang Rupiah yang Berkualitas, Terpercaya, Aman dan Andal,
2. Pengetahuan dan Pemahaman Masyarakat Terhadap CIKUR,
3. Sanksi Tegas terhadap Pelaku Tindak Pidana UPAL`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 8,
      tipe: 'pg',
      pertanyaan: `Berikut ini yang memiliki wewenang dalam mencetak mata uang Rupiah adalah ...`,
      opsi: [
        { label: 'A', teks: `Bank Indonesia` },
        { label: 'B', teks: `Peruri` },
        { label: 'C', teks: `Otoritas Jasa Keuangan` },
        { label: 'D', teks: `Kementerian Keuangan` },
        { label: 'E', teks: `Lembaga Independen di bawah Presiden` },
      ],
      kunci: `A`,
      pembahasan: `Sesuai Undang-Undang Nomor 7 Tahun 2011 tentang Mata Uang, Bank Indonesia diberikan tugas dan kewenangan Pengelolaan Uang Rupiah mulai dari tahapan Perencanaan, Pencetakan, Pengeluaran, Pengedaran, Pencabutan dan Penarikan, sampai dengan Pemusnahan. Bank Indonesia kemudian menunjuk pihak ke-3 yaitu Peruri untuk melakukan pencetakan.

Kata kuncinya adalah Wewenang, karena wewenang mencetak mata uang hanya melekat pada Bank Indonesia. sedangkan Peruri adalah pelaksana pencetakan uang.`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 9,
      tipe: 'pg',
      pertanyaan: `Simpanan yang jumlahnya diatur dan harus dipelihara oleh bank dalam bentuk saldo rekening di Bank Indonesia disebut dengan`,
      opsi: [
        { label: 'A', teks: `Peyangga Likuiditas Makroprudensial` },
        { label: 'B', teks: `Giro Wajib Minimum` },
        { label: 'C', teks: `Gearing Ratio` },
        { label: 'D', teks: `Standing Facilities` },
        { label: 'E', teks: `Capital Adequacy Ratio` },
      ],
      kunci: `B`,
      pembahasan: `Simpanan yang jumlahnya harus dipelihara oleh Bank dalam bentuk saldo rekening giro di Bank Indonesia disebut dengan Giro Wajib Minimum`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 10,
      tipe: 'pg',
      pertanyaan: `Bank Indonesia melalui instrumen makroprudensial yaitu Posisi Devisa Neto, menetapkan kewajiban bank untuk mengelola dan memelihara PDN pada akhir hari kerja pada persentase tertentu. Tujuan dari ketentuan ini adalah untuk ...`,
      opsi: [
        { label: 'A', teks: `Meningkatkan target keuntungan bank dari transaksi valuta asing dibandingkan bulan Desember tahun sebelumnya` },
        { label: 'B', teks: `Memastikan bank memiliki likuiditas yang cukup untuk transaksi valuta asing` },
        { label: 'C', teks: `Mendorong bank untuk melakukan transaksi valuta asing yang lebih spekulatif` },
        { label: 'D', teks: `Meningkatkan jumlah aset valuta asing sebanyak persentase tersebut setiap tahun untuk memperkuat posisi devisa neto negara` },
        { label: 'E', teks: `Memastikan kerugian akibat fluktuasi nilai tukar dapat diserap modal bank tanpa mengganggu kegiatan perbankan` },
      ],
      kunci: `E`,
      pembahasan: `Kebijakan ini mewajibkan bank untuk mengelola dan memelihara PDN pada akhir hari kerja secara keseluruhan maksimal 20% dari modal (berdasarkan kurs penutupan). Dengan ketentuan ini maka diharapkan bahwa kerugian yang muncul karena perubahan kurs masih dapat diserap modal bank dan tidak berpengaruh besar terhadap kegiatan perbankan.`,
      status: 'direview',
    },
    ],
  },
];

/** 10 soal "TBI Structure" dari 8 paket Booster dan Tryout. */
export const contohTbiStructureBerkarir: Kelompok[] = [
  {
    soal: [
    {
      nomor: 2,
      tipe: 'pg',
      pertanyaan: `________ the heavy rain and strong winds, the flight was not canceled.`,
      opsi: [
        { label: 'A', teks: `Although` },
        { label: 'B', teks: `Despite` },
        { label: 'C', teks: `Because` },
        { label: 'D', teks: `Since` },
      ],
      kunci: `B`,
      pembahasan: `Kata despite berfungsi sebagai preposisi untuk menunjukkan pertentangan. Kata ini mensyaratkan penggunaannya langsung diikuti oleh frasa kata benda.

Evaluasi Opsi:
A. Salah karena although mensyaratkan klausa lengkap berisi subjek dan predikat.
C. Salah karena because memaparkan penyebab.
D. Salah karena since berfungsi menjelaskan alasan.

Tips: Apabila teks setelah rumpang adalah frasa kata benda murni yang bermakna pertentangan, pilih despite atau in spite of.`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 3,
      tipe: 'pg',
      pertanyaan: `The new software update requires users to ________ their passwords regularly to ensure data security.`,
      opsi: [
        { label: 'A', teks: `changes` },
        { label: 'B', teks: `change` },
        { label: 'C', teks: `changed` },
        { label: 'D', teks: `changing` },
      ],
      kunci: `B`,
      pembahasan: `Kalimat ini menggunakan bentuk infinitive to yang harus diikuti oleh kata kerja bentuk dasar. Kata change adalah kata kerja bentuk dasar yang tepat melengkapi kalimat tersebut.

Evaluasi Opsi:
A. Salah karena changes memiliki akhiran -s yang digunakan untuk subjek tunggal masa kini.
B. Salah karena opsi ini merupakan jawaban benar.
C. Salah karena changed merupakan bentuk lampau.
D. Salah karena changing merupakan bentuk gerund atau present participle.

Tips: Setelah partikel to dalam pola infinitive, selalu gunakan kata kerja bentuk pertama tanpa tambahan apapun.`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 4,
      tipe: 'pg',
      pertanyaan: `Seldom ________ such a dramatic shift in consumer behavior within a single fiscal year.`,
      opsi: [
        { label: 'A', teks: `the analysts have seen before today` },
        { label: 'B', teks: `have seen the analysts before today` },
        { label: 'C', teks: `have the analysts seen before today` },
        { label: 'D', teks: `today have the analysts saw it` },
      ],
      kunci: `C`,
      pembahasan: `Ketika sebuah kalimat secara khusus diawali dengan kata keterangan negatif seperti 'seldom' (jarang), maka struktur kalimatnya wajib mengalami inversi. Pola inversinya adalah menempatkan kata kerja bantu sebelum subjek layaknya sedang membuat kalimat tanya. Pilihan 'have the analysts seen' mengikuti pola 'auxiliary + subject + verb 3' yang diwajibkan secara tata bahasa.

Evaluasi Opsi: A. Salah karena tidak menerapkan aturan inversi sehingga posisinya masih mengikuti susunan kalimat normal., B. Salah karena subjek 'the analysts' diletakkan setelah kata kerja utama 'seen' yang menyalahi pola inversi., D. Salah karena kata kerja utama yang mengikuti 'have' harus selalu berupa verb 3 ('seen'), bukan verb 2 ('saw').

Tips: Jika awal kalimat berupa keterangan negatif seperti seldom, never, rarely, atau little, segera cari jawaban yang memiliki pola seperti kalimat tanya (Auxiliary + Subjek + Verb).`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 5,
      tipe: 'pg',
      pertanyaan: `No sooner ________ the research facility than the fire alarm began to ring loudly.`,
      opsi: [
        { label: 'A', teks: `the scientists entered` },
        { label: 'B', teks: `had scientists entered` },
        { label: 'C', teks: `did scientists enter` },
        { label: 'D', teks: `scientists have entered` },
      ],
      kunci: `B`,
      pembahasan: `Ungkapan "No sooner" harus diikuti inversi past perfect dan berpasangan dengan kata sambung "than". Hal ini menunjukkan dua kejadian yang terjadi hampir bersamaan di masa lampau.

Evaluasi Opsi:
A. Salah karena susunan normal.
C. Salah karena tidak menggunakan "had".
D. Salah karena tenses masa kini.

Tips: Pola baku adalah "No sooner + had + S + V3".`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 6,
      tipe: 'pg',
      pertanyaan: `The tectonic plates _______ the Earth's surface are constantly moving, which results in earthquakes and volcanic activity.`,
      opsi: [
        { label: 'A', teks: `that make up` },
        { label: 'B', teks: `making up` },
        { label: 'C', teks: `make up` },
        { label: 'D', teks: `is made` },
      ],
      kunci: `A`,
      pembahasan: `Kalimat membutuhkan penjelas aktif untuk subjek lempeng tektonik. That make up (yang membentuk) berfungsi sebagai klausa relatif yang menjelaskan subjek.

Evaluasi Opsi:
B. Salah karena making up bisa digunakan tetapi opsi A lebih lengkap dengan konjungsi.
C. Salah karena make up tanpa penghubung akan merusak struktur.
D. Salah karena is made bermakna pasif tunggal.

Tips: Gunakan klausa relatif (that/which) untuk mendefinisikan subjek jamak secara aktif.`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 7,
      tipe: 'pg',
      pertanyaan: `Most of the Earth's freshwater is trapped in glaciers and ice caps, _______ only a small fraction available for human use.`,
      opsi: [
        { label: 'A', teks: `leaves` },
        { label: 'B', teks: `it leaves` },
        { label: 'C', teks: `leave` },
        { label: 'D', teks: `leaving` },
      ],
      kunci: `D`,
      pembahasan: `Kalimat ini membutuhkan struktur yang menunjukkan sisa atau hasil. Leaving (meninggalkan) adalah participle yang menjelaskan konsekuensi dari klausa sebelumnya.

Evaluasi Opsi:
A. Salah karena leaves membutuhkan subjek baru.
B. Salah karena it leaves membutuhkan konjungsi.
C. Salah karena leave adalah bentuk dasar.

Tips: Gunakan Verb-ing sebagai klausa hasil (result clause) yang menjelaskan dampak situasi sebelumnya.`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 8,
      tipe: 'pg',
      pertanyaan: `By the time the archeologists reached the site, the ancient artifacts ________ by vandals.`,
      opsi: [
        { label: 'A', teks: `have been stolen` },
        { label: 'B', teks: `was stolen` },
        { label: 'C', teks: `had been stolen` },
        { label: 'D', teks: `were stolen` },
      ],
      kunci: `C`,
      pembahasan: `Frasa "By the time" diikuti waktu lampau menuntut penggunaan past perfect (had + V3) pada klausa utama. Bentuk pasif "had been stolen" menunjukkan benda tersebut sudah dicuri sebelumnya.

Evaluasi Opsi:
A. Salah karena untuk waktu sekarang.
B. Salah karena subjek jamak.
D. Salah karena tenses tidak menunjukkan urutan waktu.

Tips: Gunakan past perfect untuk kejadian yang selesai sebelum kejadian lampau lainnya.`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 9,
      tipe: 'pg',
      pertanyaan: `It is important that a scientist ________ all experimental results with extreme care.`,
      opsi: [
        { label: 'A', teks: `documents and records` },
        { label: 'B', teks: `document and record` },
        { label: 'C', teks: `will document and record` },
        { label: 'D', teks: `is documenting and recording` },
      ],
      kunci: `B`,
      pembahasan: `Kalimat ini menggunakan pola subjunctive setelah kata sifat "important". Kata kerja harus dalam bentuk dasar (document) tanpa tambahan "-s" meskipun subjeknya tunggal.

Evaluasi Opsi:
A. Salah karena menggunakan "-s" (bukan bentuk dasar).
C. Salah karena modal "will" tidak digunakan.
D. Salah karena bentuk "is documenting" tidak sesuai kaidah subjunctive.

Hilangkan akhiran -s pada kata kerja jika kalimat diawali dengan "It is important that...".`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 10,
      tipe: 'pg',
      pertanyaan: `Neither the department head _______ the administrative assistants were informed about the change in the meeting location.`,
      opsi: [
        { label: 'A', teks: `or were` },
        { label: 'B', teks: `and was` },
        { label: 'C', teks: `nor` },
        { label: 'D', teks: `but also` },
      ],
      kunci: `C`,
      pembahasan: `Pasangan korelatif untuk neither adalah nor. Karena subjek kedua jamak, maka digunakan nor.

Evaluasi Opsi:
A. Salah karena or were pasangannya either.
B. Salah karena and was pasangannya both.
D. Salah karena but also pasangannya not only.

Tips: Selalu pasangkan neither dengan nor.`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 11,
      tipe: 'pg',
      pertanyaan: `The professor requested that each student ________ a unique topic for the final research paper.`,
      opsi: [
        { label: 'A', teks: `chooses and develops a very` },
        { label: 'B', teks: `choose and develop a very` },
        { label: 'C', teks: `chose and developed a very` },
        { label: 'D', teks: `choosing and developing a very` },
      ],
      kunci: `B`,
      pembahasan: `Kata kerja "requested" memicu penggunaan subjunctive mood. Dalam pola ini, kata kerja setelah subjek kedua harus dalam bentuk dasar (bare infinitive) tanpa tambahan "-s" atau "should".

Evaluasi Opsi: A. Salah karena menggunakan akhiran "-s". C. Salah karena menggunakan bentuk lampau. D. Salah karena menggunakan gerund.

Tips: Setelah kata kerja saran/permintaan (suggest, request, insist), gunakan kata kerja bentuk dasar untuk subjek apa pun.`,
      status: 'direview',
    },
    ],
  },
];

/** 10 soal "TBI Written Expression" dari 8 paket Booster dan Tryout. */
export const contohTbiWrittenBerkarir: Kelompok[] = [
  {
    soal: [
    {
      nomor: 1,
      tipe: 'pg',
      pertanyaan: `The committee members ? that the new marketing director ? a thorough ? of the current consumer trends before ? the campaign.`,
      opsi: [
        { label: 'A', teks: `suggested` },
        { label: 'B', teks: `performs` },
        { label: 'C', teks: `analysis` },
        { label: 'D', teks: `launching` },
      ],
      kunci: `B`,
      pembahasan: `Performs salah karena mengikuti kata kerja suggested dalam struktur subjunctive. Kata kerja dalam klausa that harus berbentuk dasar, yaitu perform.

Kalimat yang benar: The committee members suggested that the new marketing director perform a thorough analysis.

Evaluasi Opsi:
A Benar. Kata kerja masa lampau untuk melaporkan saran.
C Benar. Kata benda tunggal sebagai objek.
D Benar. Gerund digunakan setelah preposisi before.`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 2,
      tipe: 'pg',
      pertanyaan: `University undergraduate students ? scheduled lectures ? papers and ? experiments to ? demanding science course.`,
      opsi: [
        { label: 'A', teks: `must regularly attend` },
        { label: 'B', teks: `submit comprehensive research` },
        { label: 'C', teks: `completing challenging laboratory` },
        { label: 'D', teks: `successfully pass the` },
      ],
      kunci: `C`,
      pembahasan: `completing challenging laboratory salah karena susunan aksi tidak sejajar secara tata bahasa. Kata kerja sebelumnya menggunakan bentuk dasar murni. Bentuk yang tepat adalah complete.

Kalimat yang benar: University undergraduate students must regularly attend scheduled lectures submit comprehensive research papers and complete challenging laboratory experiments to successfully pass the demanding science course.

Evaluasi Opsi
A Benar. Ini adalah kombinasi kata kerja bantu kewajiban dan keterangan frekuensi.
B Benar. Ini adalah kata kerja bentuk dasar yang meneruskan deretan tugas mahasiswa.
D Benar. Ini adalah frasa infinitif yang menyatakan tujuan akhir pendidikan.`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 3,
      tipe: 'pg',
      pertanyaan: `? business strategy developed by the ? ? increase market share while simultaneously ? costs and improving customer service.`,
      opsi: [
        { label: 'A', teks: `A comprehensive` },
        { label: 'B', teks: `executive board` },
        { label: 'C', teks: `aim to` },
        { label: 'D', teks: `reducing production` },
      ],
      kunci: `C`,
      pembahasan: `Opsi C salah karena aim adalah kata kerja jamak. Subjek kalimat adalah strategy yang bersifat tunggal sehingga kata kerja haruslah aims.

Kalimat yang benar: A comprehensive business strategy developed by the executive board aims to increase market share while simultaneously reducing production costs and improving the overall quality of customer service.

Evaluasi Opsi
A Benar. Adjective ini memberikan deskripsi mendalam pada strategi.
B Benar. Frasa benda ini merujuk pada pembuat keputusan.
D Benar. Frasa gerund ini menjelaskan upaya efisiensi.`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 4,
      tipe: 'pg',
      pertanyaan: `? ? sandy beaches and crystal-clear waters ? enthusiastic international tourists during ?.`,
      opsi: [
        { label: 'A', teks: `The tropical island destination` },
        { label: 'B', teks: `who boasts pristine` },
        { label: 'C', teks: `attracts thousands of` },
        { label: 'D', teks: `the peak summer holiday season` },
      ],
      kunci: `B`,
      pembahasan: `who boasts pristine salah karena kata ganti orang tidak boleh mewakili lokasi. Destinasi pulau adalah entitas geografis tak hidup. Kata ganti relatif yang tepat adalah which atau that.

Kalimat yang benar: The tropical island destination which boasts pristine sandy beaches and crystal-clear waters attracts thousands of enthusiastic international tourists during the peak summer holiday season.

Evaluasi Opsi
A Benar. Ini adalah frasa subjek tunggal sentral penunjuk wilayah pariwisata memikat.
C Benar. Ini adalah kata kerja tunggal yang padu dengan subjek tunggal pulau.
D Benar. Ini adalah rangkaian deskriptor waktu yang memperjelas durasi keramaian wisata.`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 5,
      tipe: 'pg',
      pertanyaan: `Many contemporary artists ? ? into their work, creating a unique fusion that ? both local and ?.`,
      opsi: [
        { label: 'A', teks: `choose to incorporate` },
        { label: 'B', teks: `traditional cultural symbols` },
        { label: 'C', teks: `resonates to` },
        { label: 'D', teks: `international audiences` },
      ],
      kunci: `C`,
      pembahasan: `Resonates to salah karena preposisi yang tepat setelah kata kerja resonate untuk menunjukkan kecocokan perasaan adalah with.

Kalimat yang benar: Many contemporary artists choose to incorporate traditional cultural symbols, creating a unique fusion that resonates with local audiences.

Evaluasi Opsi:
A Benar. Infinitive setelah kata kerja choose.
B Benar. Frasa benda sebagai objek dari incorporate.
D Benar. Objek jamak dari preposisi.`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 6,
      tipe: 'pg',
      pertanyaan: `? regarding industrial waste disposal aim to reduce ? ? practices across all modern ?.`,
      opsi: [
        { label: 'A', teks: `Strict government regulations` },
        { label: 'B', teks: `environmental pollute and` },
        { label: 'C', teks: `promote sustainable manufacturing` },
        { label: 'D', teks: `chemical production facilities` },
      ],
      kunci: `B`,
      pembahasan: `environmental pollute and salah karena kata kerja tidak bisa menjadi objek langsung. Setelah kata sifat environmental dibutuhkan sebuah nomina utuh. Kata benda yang tepat adalah pollution.

Kalimat yang benar: Strict government regulations regarding industrial waste disposal aim to reduce environmental pollution and promote sustainable manufacturing practices across all modern chemical production facilities.

Evaluasi Opsi
A Benar. Ini adalah subjek jamak utuh di awal kalimat utama yang formal.
C Benar. Ini adalah verba bentuk dasar yang mengamankan integritas struktur paralel kalimat.
D Benar. Ini adalah frasa kata benda penunjuk jenis pabrik yang tersusun rapi.`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 7,
      tipe: 'pg',
      pertanyaan: `Financial analysts ? that the company's stock price ? stable provided that the market ? show signs of ? recovery.`,
      opsi: [
        { label: 'A', teks: `suggest` },
        { label: 'B', teks: `will remain` },
        { label: 'C', teks: `continue to` },
        { label: 'D', teks: `steady` },
      ],
      kunci: `C`,
      pembahasan: `Continue salah karena subjek klausa adalah the market (tunggal). Maka kata kerja yang benar adalah continues.

Kalimat yang benar: Financial analysts suggest that the company's stock price will remain stable provided that the market continues to show signs of steady recovery.

Evaluasi Opsi:
A Benar. Kata kerja jamak sesuai subjek analysts.
B Benar. Bentuk masa depan setelah klausa that.
D Benar. Kata sifat menerangkan kata benda recovery.`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 8,
      tipe: 'pg',
      pertanyaan: `? recent economic recession the ? successfully ? market share and ? profits this quarter.`,
      opsi: [
        { label: 'A', teks: `Despite of the` },
        { label: 'B', teks: `innovative technology company` },
        { label: 'C', teks: `maintained its global` },
        { label: 'D', teks: `reported substantial financial` },
      ],
      kunci: `A`,
      pembahasan: `Despite of the salah karena preposisi ini mengandung elemen ganda yang mubazir. Kata despite tidak pernah diikuti oleh preposisi of. Kata yang tepat adalah Despite.

Kalimat yang benar: Despite the recent economic recession the innovative technology company successfully maintained its global market share and reported substantial financial profits this quarter.

Evaluasi Opsi
B Benar. Ini adalah subjek tunggal kalimat utama dengan rangkaian kata sifat murni.
C Benar. Ini adalah kata kerja lampau transitif yang diikuti frasa kepemilikan.
D Benar. Ini adalah predikat paralel kedua yang merinci pencapaian finansial perusahaan.`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 9,
      tipe: 'pg',
      pertanyaan: `Environmentalists are ? about the ? of biodiversity ? the Amazon rainforest, ? a critical carbon sink for the planet.`,
      opsi: [
        { label: 'A', teks: `deeply concerned` },
        { label: 'B', teks: `rapid loss` },
        { label: 'C', teks: `at` },
        { label: 'D', teks: `which serves as` },
      ],
      kunci: `C`,
      pembahasan: `At salah karena preposisi ini biasanya digunakan untuk titik lokasi yang spesifik. Untuk wilayah geografis yang luas seperti hutan, preposisi yang tepat adalah in.

Kalimat yang benar: Environmentalists are deeply concerned about the rapid loss of biodiversity in the Amazon rainforest, which serves as a critical carbon sink for the planet.

Evaluasi Opsi:
A Benar. Adverbia deeply menerangkan partisip concerned dengan tepat.
B Benar. Frasa kata benda sebagai objek dari preposisi about.
D Benar. Frasa kerja yang berarti "berfungsi sebagai".`,
      status: 'direview',
    },
    ],
  },
  {
    soal: [
    {
      nomor: 10,
      tipe: 'pg',
      pertanyaan: `Quantum computing researchers focus on developing algorithms that can process complex data sets ? than traditional computers, ? ? of ?.`,
      opsi: [
        { label: 'A', teks: `more efficiently` },
        { label: 'B', teks: `thereby revolutionizing` },
        { label: 'C', teks: `the entire field` },
        { label: 'D', teks: `computationally science` },
      ],
      kunci: `D`,
      pembahasan: `Computationally salah karena kata keterangan (adverb). Untuk menerangkan kata benda "science", dibutuhkan kata sifat (adjective). Kata sifat yang tepat adalah computational.

Kalimat yang benar: Quantum computing researchers focus on developing algorithms that can process complex data sets more efficiently, thereby revolutionizing the entire field of computational science.

Evaluasi Opsi:
A Benar. Bentuk komparatif adverbia untuk menerangkan cara kerja.
B Benar. Partisip yang menunjukkan konsekuensi aksi.
C Benar. Frasa kata benda sebagai objek.`,
      status: 'direview',
    },
    ],
  },
];

/** 10 soal "TBI Reading Comprehension" dari 2 paket Booster dan Tryout. */
export const contohTbiReadingBerkarir: Kelompok[] = [
  {
    stimulus: { isi: `The 1977 discovery of hydrothermal vents along the Galapagos Rift transformed the biological sciences by revealing ecosystems that operate independently of solar energy. These deep-sea vents occur at divergent plate boundaries where cold seawater seeps into the crust, is heated by magma, and then expelled back into the ocean. This mineral-rich fluid creates a chemical environment that supports life in the total darkness of the abyss. Unlike most terrestrial life, which relies on the sun, these communities are founded on chemosynthesis. This process allows specialized microorganisms to generate energy by oxidizing inorganic compounds such as hydrogen sulfide.

The biological diversity found around these vents is characterized by highly specialized organisms that have adapted to extreme pressure and toxic chemical concentrations. Giant tube worms, for instance, have evolved a unique symbiotic relationship with sulfur-oxidizing bacteria. These worms "lack" a traditional digestive system and instead possess a specialized organ called a trophosome, which houses the bacteria. In exchange for a stable environment and chemical transport, the bacteria provide the worms with the organic nutrients required for survival. This mutualistic interaction represents a remarkable evolutionary adaptation to one of the most hostile environments on the planet.

Beyond their biological significance, hydrothermal vents offer critical insights into the geological history of the Earth and the potential for life on other planets. The chemical interactions at these sites resemble the conditions thought to have existed on the early Earth, leading many astrobiologists to suggest that life may have originated in such environments. Furthermore, the presence of similar geothermal activity on moons like Europa or Enceladus raises the possibility of finding extraterrestrial life within our own solar system. Ongoing exploration continues to refine our models of planetary habitability and the fundamental limits of life.` },
    soal: [
    {
      nomor: 1,
      tipe: 'pg',
      pertanyaan: `The word "lack" in the second paragraph is closest in meaning to...`,
      opsi: [
        { label: 'A', teks: `possess` },
        { label: 'B', teks: `improve` },
        { label: 'C', teks: `design` },
        { label: 'D', teks: `absence` },
      ],
      kunci: `D`,
      pembahasan: `Kata "lack" merujuk pada ketiadaan atau tidak adanya sistem pencernaan tradisional pada cacing tabung.

Kutipan Teks: "These worms 'lack' a traditional digestive system..."

Evaluasi:
A. Salah, "possess" adalah antonim.
B. Salah, "improve" berarti meningkatkan.
C. Salah, tidak relevan dengan ketiadaan organ fisik.`,
      status: 'direview',
    },
    {
      nomor: 2,
      tipe: 'pg',
      pertanyaan: `Where do hydrothermal vents typically occur?`,
      opsi: [
        { label: 'A', teks: `At divergent tectonic plate boundaries.` },
        { label: 'B', teks: `In the shallow waters of the tropics.` },
        { label: 'C', teks: `On the peaks of active land volcanoes.` },
        { label: 'D', teks: `Far away from any magma or heat source.` },
      ],
      kunci: `A`,
      pembahasan: `Lihat kutipan paragraf pertama occur at divergent plate boundaries. Ini adalah lokasi geologis spesifik yang disebutkan.

Evaluasi Opsi.
B Salah. Teks menyebutkan kedalaman laut yang gelap bukan permukaan dangkal.
C Salah. Teks menyebutkan mid-ocean ridges bukan daratan tropis.
D Salah. Magma justru merupakan sumber panas di bawah ventilasi tersebut.

Tips. Carilah istilah geologi seperti plate boundaries untuk menemukan jawaban yang tepat.`,
      status: 'direview',
    },
    {
      nomor: 3,
      tipe: 'pg',
      pertanyaan: `The word "their" in the third paragraph refers to...`,
      opsi: [
        { label: 'A', teks: `The astrobiologists studying the sea.` },
        { label: 'B', teks: `The planet Earth and its rocky history.` },
        { label: 'C', teks: `The deep-sea hydrothermal vent systems.` },
        { label: 'D', teks: `The moons Europa and Enceladus alone.` },
      ],
      kunci: `C`,
      pembahasan: `Kata "their" merujuk pada subjek jamak di awal kalimat yang memiliki signifikansi biologis, yaitu ventilasi hidrotermal.

Kutipan Teks: "Beyond 'their' biological significance, hydrothermal vents offer..."

Evaluasi:
A. Salah, astrobiologis adalah orang yang meneliti.
B. Salah, Bumi adalah lokasi sistem tersebut.
D. Salah, kedua bulan tersebut disebutkan sebagai perbandingan di kalimat selanjutnya.`,
      status: 'direview',
    },
    {
      nomor: 4,
      tipe: 'pg',
      pertanyaan: `What would be the most suitable title for this passage?`,
      opsi: [
        { label: 'A', teks: `The Role of Sunlight in Deep Oceans.` },
        { label: 'B', teks: `Ancient Voyages Across the Galapagos.` },
        { label: 'C', teks: `The Digestive Evolution of Tube Worms.` },
        { label: 'D', teks: `Hydrothermal Vents and the Basis of Life.` },
      ],
      kunci: `D`,
      pembahasan: `Judul ini paling tepat karena mencakup penemuan, mekanisme kemosintesis (biologi), dan implikasinya bagi asal-usul kehidupan.

Kutipan Teks: "Ongoing exploration continues to refine our models of planetary habitability and the fundamental limits of life."

Evaluasi:
A. Salah, matahari tidak berperan di sini.
B. Salah, perjalanan sejarah bukan fokus utama.
C. Salah, terlalu sempit."`,
      status: 'direview',
    },
    {
      nomor: 5,
      tipe: 'pg',
      pertanyaan: `It can be inferred that the trophosome is essential because...`,
      opsi: [
        { label: 'A', teks: `It captures light for the tube worms.` },
        { label: 'B', teks: `It allows for bacterial nutrient production.` },
        { label: 'C', teks: `It protects the worm from hot magma.` },
        { label: 'D', teks: `It helps the worm fight toxic chemicals.` },
      ],
      kunci: `B`,
      pembahasan: `Trophosome sangat krusial karena di sanalah bakteri pengoksidasi sulfur memproduksi nutrisi organik untuk cacing.

Kutipan Teks: "...possess a specialized organ called a trophosome, which houses the bacteria... provide the worms with the organic nutrients..."

Evaluasi:
A. Salah, tidak ada cahaya di laut dalam.
C. & D. Salah, fungsi utamanya adalah metabolisme nutrisi, bukan perlindungan fisik.`,
      status: 'direview',
    },
    ],
  },
  {
    stimulus: { isi: `The Abbasid Caliphate established the House of Wisdom in Baghdad during the late eighth century marking a watershed moment in human history. This institution served as the intellectual epicenter for the Islamic Golden Age. Caliph Harun al-Rashid initially founded it as a private royal library to safeguard his collection of Persian manuscripts. However his successor Al-Ma'mun exponentially expanded its scope and transformed it into a public academy. This expansion formally initiated a rigorous translation movement aimed at preserving classical antiquity from permanent eradication.

Eminent scholars from diverse cultural and linguistic backgrounds converged at this grand academy. Their primary collective objective was to translate monumental works of Greek Indian and Persian origins into the Arabic language. They meticulously transcribed seminal texts encompassing classical philosophy advanced mathematics and clinical medicine. The philosophical treaties of Aristotle and Plato were heavily scrutinized and rescued from historical obscurity. The rigorous translation process necessitated not merely linguistic mastery but rather a profound comprehension of complex theoretical and empirical paradigms.

Furthermore the scholars at the House of Wisdom did not merely copy existing knowledge but actively generated original intellectual contributions. They synthesized diverse ancient traditions to formulate groundbreaking theories in algebra and optics. The famous polymath Al-Khwarizmi developed revolutionary mathematical concepts within these walls. His foundational algorithms later became the bedrock of modern computer science. This vibrant synthesis of global knowledge transformed Baghdad into the most scientifically advanced metropolis of the medieval era.

The enduring legacy of the House of Wisdom extended far beyond the borders of the Abbasid empire. The meticulously translated Arabic manuscripts eventually reached medieval Europe via ancient trade routes traversing Al-Andalus and Sicily. European scholars subsequently translated these vital texts directly into Latin. This intricate cross cultural transmission of classical knowledge fundamentally catalyzed the European Renaissance. By diligently safeguarding ancient wisdom the House of Wisdom undeniably shaped the modern intellectual trajectory of the entire world.` },
    soal: [
    {
      nomor: 6,
      tipe: 'pg',
      pertanyaan: `What is the author's main point in the passage?`,
      opsi: [
        { label: 'A', teks: `The life and rule of Caliph Harun al-Rashid.` },
        { label: 'B', teks: `The role and legacy of the House of Wisdom.` },
        { label: 'C', teks: `The early history of the Islamic Golden Age.` },
        { label: 'D', teks: `The translation of Arabic manuscripts to Latin.` },
      ],
      kunci: `B`,
      pembahasan: `Lihat kutipan dari teks pada kalimat The Abbasid Caliphate established the House of Wisdom in Baghdad during the late eighth century marking a watershed moment in human history. Teks ini secara keseluruhan membahas pendirian dan pengaruh institusi tersebut. Dalam konteks ini teks memaparkan sejarah lengkap Baitul Hikmah.

Evaluasi Opsi
A Salah. Kehidupan Khalifah Harun al-Rashid hanya menjadi detail kecil pendukung.
B Benar. Opsi ini merangkum seluruh gagasan utama teks dengan sangat tepat.
C Salah. Sejarah awal Zaman Keemasan Islam terlalu luas untuk teks ini.
D Salah. Penerjemahan ke bahasa Latin hanya dibahas pada paragraf terakhir.

Tips Anda perlu membaca kalimat pertama setiap paragraf untuk menemukan subjek utama.`,
      status: 'direview',
    },
    {
      nomor: 7,
      tipe: 'pg',
      pertanyaan: `According to the passage what did Al-Ma'mun do to the institution?`,
      opsi: [
        { label: 'A', teks: `He expanded it into a large public academy.` },
        { label: 'B', teks: `He built it to store his own Persian texts.` },
        { label: 'C', teks: `He relocated it to the ancient European land.` },
        { label: 'D', teks: `He restricted it to Arabic scholars strictly.` },
      ],
      kunci: `A`,
      pembahasan: `Lihat kutipan dari teks pada kalimat However his successor Al-Ma'mun exponentially expanded its scope and transformed it into a public academy. Teks menyebutkan tindakan penerus tersebut secara jelas. Dalam konteks ini dia mengubah perpustakaan pribadi menjadi akademi publik.

Evaluasi Opsi
A Benar. Opsi ini menyajikan informasi faktual yang sesuai persis dengan bacaan teks.
B Salah. Harun al-Rashid adalah tokoh yang membangun fasilitas untuk naskah Persia.
C Salah. Teks tidak pernah menyebutkan relokasi akademi ke benua Eropa kuno.
D Salah. Teks menyebutkan bahwa sarjana dari berbagai latar belakang berkumpul.

Tips Anda cukup memindai nama tokoh spesifik di dalam teks untuk menemukan fakta.`,
      status: 'direview',
    },
    {
      nomor: 8,
      tipe: 'pg',
      pertanyaan: `The word "eradication" in paragraph 1 is closest in meaning to`,
      opsi: [
        { label: 'A', teks: `Sudden and wide popularity.` },
        { label: 'B', teks: `Careful and deep inspection.` },
        { label: 'C', teks: `Massive global expansion.` },
        { label: 'D', teks: `Complete total destruction.` },
      ],
      kunci: `D`,
      pembahasan: `Lihat kutipan dari teks pada kalimat This expansion formally initiated a rigorous translation movement aimed at preserving classical antiquity from permanent eradication. Kata eradication berarti pemusnahan atau kehancuran. Dalam konteks ini gerakan penerjemahan bertujuan menyelamatkan pengetahuan kuno dari kepunahan.

Evaluasi Opsi
A Salah. Popularitas luas dan tiba tiba memiliki makna yang sangat berlawanan.
B Salah. Inspeksi mendalam tidak sesuai dengan konteks penyelamatan pengetahuan klasik.
C Salah. Ekspansi global besar besaran tidak menggambarkan ancaman hilangnya naskah kuno.
D Benar. Opsi ini mencerminkan arti kehancuran atau pemusnahan total.

Tips Anda bisa menebak makna kata dari tujuan perlindungan benda yang terancam punah.`,
      status: 'direview',
    },
    {
      nomor: 9,
      tipe: 'pg',
      pertanyaan: `The word "Their" in paragraph 2 refers to...`,
      opsi: [
        { label: 'A', teks: `The Greek and Indian origins.` },
        { label: 'B', teks: `The eminent diverse scholars.` },
        { label: 'C', teks: `The classical philosophy texts.` },
        { label: 'D', teks: `The complex empirical paradigms.` },
      ],
      kunci: `B`,
      pembahasan: `Lihat kutipan dari teks pada kalimat Eminent scholars from diverse cultural and linguistic backgrounds converged at this grand academy. Their primary collective objective was to translate monumental works. Kata Their menunjuk pada subjek jamak di kalimat sebelumnya. Dalam konteks ini subjek tersebut adalah para sarjana.

Evaluasi Opsi
A Salah. Asal usul Yunani dan India adalah sumber bahasa naskah yang diterjemahkan.
B Benar. Opsi ini secara tepat mewakili kelompok orang yang memiliki tujuan kolektif.
C Salah. Teks filsafat klasik adalah objek yang dikerjakan oleh para subjek tersebut.
D Salah. Paradigma empiris kompleks adalah hal yang harus dipahami oleh penerjemah.

Tips Anda perlu membaca kalimat persis sebelum kata rujukan muncul untuk menemukan subjek.`,
      status: 'direview',
    },
    {
      nomor: 10,
      tipe: 'pg',
      pertanyaan: `It can be inferred from the passage that the European Renaissance...`,
      opsi: [
        { label: 'A', teks: `Began entirely without external assistance.` },
        { label: 'B', teks: `Destroyed the original Greek and Roman texts.` },
        { label: 'C', teks: `Relied on translated ancient knowledge texts.` },
        { label: 'D', teks: `Occurred before the rise of Abbasid empires.` },
      ],
      kunci: `C`,
      pembahasan: `Lihat kutipan dari teks pada kalimat This intricate cross cultural transmission of classical knowledge fundamentally catalyzed the European Renaissance. Teks menyatakan transmisi pengetahuan klasik memicu renaisans. Dalam konteks ini kita dapat menyimpulkan bahwa kebangkitan Eropa bergantung pada naskah terjemahan tersebut.

Evaluasi Opsi
A Salah. Teks justru membuktikan bahwa Eropa menerima bantuan pengetahuan dari luar.
B Salah. Para penerjemah menjaga dan melestarikan naskah asli Yunani dan Romawi kuno.
C Benar. Opsi ini merupakan kesimpulan logis dari kata memicu atau mengkatalisasi.
D Salah. Teks menyatakan bahwa proses ini terjadi setelah naskah tiba dari kekaisaran.

Tips Anda harus menarik kesimpulan logis berdasarkan hubungan sebab akibat di dalam teks.`,
      status: 'direview',
    },
    ],
  },
];
