import type { Tahapan } from '@/lib/skema';

/**
 * Seleksi Kompetensi Dasar (SKD) 2026.
 *
 * SKD dipakai BERSAMA oleh semua sekolah kedinasan, jadi ia didefinisikan
 * sekali di sini lalu dirujuk dari tiap sekolah. Itu salah satu keuntungan
 * data berupa kode: yang sama benar-benar dibagi, bukan disalin dan berisiko
 * berbeda diam-diam saat salah satunya direvisi.
 *
 * Sumber: JadiSekdin - Riset dan Kurikulum Sekolah Kedinasan SKD.docx
 *         dan Mapping ASN.xlsx (Product Management, April 2026).
 */
export const skd2026: Tahapan = {
  kode: 'skd',
  nama: 'Seleksi Kompetensi Dasar (SKD)',
  mode: 'online',
  deskripsi: `110 soal dikerjakan dalam 100 menit dengan sistem CAT. Ketiga subtes dikerjakan serentak dalam satu sesi, bukan per subtes.

Nilai ambang batas ketentuan umum: TWK 65, TIU 80, TKP 156.
Jalur Afirmasi Kewilayahan: nilai kumulatif SKD 281 dengan TIU minimal 55.`,
  status: 'terkonfirmasi',
  subtes: [
    {
      kode: 'twk',
      nama: 'Tes Wawasan Kebangsaan (TWK)',
      jumlahSoal: 30,
      waktuMenit: 100,
      formatKetentuan: `Pilihan ganda, satu jawaban benar. Waktu 100 menit berlaku untuk ketiga subtes sekaligus, tidak dipisah per subtes.`,
      penilaian: `Benar 5 poin. Salah atau tidak menjawab 0 poin. Skor maksimal 150. Nilai ambang batas 65.`,
      materi: [
      { nama: `Nasionalisme`, catatan: `Peran warga negara, sikap, dan penerapannya untuk mewujudkan kepentingan nasional dengan tetap mempertahankan identitas nasional.` },
      { nama: `Integritas`, catatan: `Menjunjung tinggi kejujuran, ketangguhan, komitmen, dan konsistensi sebagai satu kesatuan sikap.` },
      { nama: `Bela Negara`, catatan: `Kesadaran berbangsa dan bernegara, penghayatan nilai Pancasila, komitmen terhadap NKRI, dan peran aktif menjaga kedaulatan.` },
      { nama: `Pilar Negara`, catatan: `Pemahaman isi dan semangat UUD 1945, Bhinneka Tunggal Ika, dan penerapan sila Pancasila pada peristiwa relevan.` },
      { nama: `Bahasa Negara`, catatan: `Ide pokok, simpulan, makna kata, perbaikan kalimat, dan tata tulis bahasa Indonesia.` },
      ],
      mapping: [
        {
          tipe: 'tryout',
          soalPerPaket: 30,
          dibutuhkan: 900,
          tersedia: 2016,
          status: 'selesai',
          catatan: `Angka dari Mapping ASN.xlsx. Sheet-nya berlabel "15 Paket", tetapi totalnya sama dengan 30 paket (30 soal x 30 = 900). Jumlah paket sengaja dikosongkan sampai maksud sheet itu dipastikan.`,
        },
      ],
      contoh: [
        {
        soal: [
        {          nomor: 1,
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
          tingkat: 'sedang',
          status: 'final',
        },
        {          nomor: 2,
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
          tingkat: 'sedang',
          status: 'final',
        },
        ],
      },
      ],
    },
    {
      kode: 'tiu',
      nama: 'Tes Intelegensia Umum (TIU)',
      jumlahSoal: 35,
      waktuMenit: 100,
      formatKetentuan: `Pilihan ganda, satu jawaban benar. Waktu 100 menit berlaku untuk ketiga subtes sekaligus.`,
      penilaian: `Benar 5 poin. Salah atau tidak menjawab 0 poin. Skor maksimal 175. Nilai ambang batas 80.`,
      materi: [
      { nama: `Verbal`, catatan: `Analogi; silogisme (kesimpulan dari 2-3 premis); analitis (susunan dan posisi, urutan dan peringkat, jadwal, rute dan jalur, logika pernyataan, distribusi dan kategori).` },
      { nama: `Numerik`, catatan: `Berhitung dan persamaan; deret angka; soal cerita (perbandingan senilai dan berbalik, tabel, rata-rata, usia, jarak-kecepatan-waktu, aritmatika sosial); perbandingan kuantitatif.` },
      { nama: `Figural`, catatan: `Analogi; ketidaksamaan; serial (the next box dan kotak 3x3).` },
      ],
      mapping: [
        {
          tipe: 'tryout',
          soalPerPaket: 35,
          dibutuhkan: 1050,
          tersedia: 2088,
          status: 'selesai',
          catatan: `Angka dari Mapping ASN.xlsx sheet "TIU 15 Paket". Totalnya sama dengan 30 paket, bukan 15.`,
        },
      ],
      contoh: [
        {
        soal: [
        {          nomor: 1,
          tipe: 'pg',
          pertanyaan: `Bisnis : strategi : gulung tikar = ... : ... : ...`,
          opsi: [
            { label: 'A', teks: `Sekolah : prestasi : lulus` },
            { label: 'B', teks: `Memasak : resep : gagal` },
            { label: 'C', teks: `Usaha : modal : laba` },
            { label: 'D', teks: `Praktisi : orasi : rapat` },
            { label: 'E', teks: `Pengusaha : pailit : aset` },
          ],
          kunci: 'B',
          pembahasan: `Bisnis : strategi : gulung tikar = ... : ... : ...
Dapat dibaca bersambung dengan cara "kegiatan bisnis yang menggunakan strategi salah dapat menyebabkan gulung tikar (bangkrut)"
Maka memiliki hubungan yang tepat dengan:
Memasak : resep : gagal, dibaca dengan cara "kegiatan memasak yang menggunakan resep salah dapat menyebabkan kegagalan".`,
          tingkat: 'sedang',
          status: 'final',
        },
        {          nomor: 2,
          tipe: 'pg',
          pertanyaan: `Tujuh : Delapan : Lima Belas 
Hubungan kata di atas setara dengan....`,
          opsi: [
            { label: 'A', teks: `Malas : Rajin : Manusia` },
            { label: 'B', teks: `Palu : Obeng : Gergaji` },
            { label: 'C', teks: `Kesuksesan : Konsistensi : Usaha` },
            { label: 'D', teks: `Modal : Keuntungan : Harga Jual` },
            { label: 'E', teks: `Arwana : Koi : Hiu` },
          ],
          kunci: 'D',
          pembahasan: `Konsep yang digunakan: analisis hubungan antar kata
Kata kunci: verbal analogi, penggabungan dan hasil

Pada kata tujuh, delapan dan lima belas berlaku hubungan sebagai berikut:
Penggabungan/ penjumlahan dari bilangan tujuh dan delapan menghasilkan bilangan limabelas. 
Aplikasi dari hubungan yang sama terdapat pada kata modal, keuntungan dan harga jual sebagai berikut:
Penggabungan dari modal dan keuntungan menghasilkan harga jual

Alasan opsi lain salah: 
A. Penggabungan dari malas dan rajin TIDAK menghasilkan manusia
B. Penggabungan dari palu dan obeng TIDAK menghasilkan gergaji
C. Penggabungan dari kesuksesan dan konsistensi TIDAK menghasilkan usaha
E. Penggabungan dari arwana dan koi TIDAK menghasilkan hiu`,
          tingkat: 'sedang',
          status: 'final',
        },
        ],
      },
      ],
    },
    {
      kode: 'tkp',
      nama: 'Tes Karakteristik Pribadi (TKP)',
      jumlahSoal: 45,
      waktuMenit: 100,
      formatKetentuan: `Soal berskala: setiap opsi punya skor, tidak ada opsi yang sepenuhnya salah. Waktu 100 menit berlaku untuk ketiga subtes sekaligus.`,
      penilaian: `Skor per opsi paling rendah 1 dan paling tinggi 5. Tidak menjawab 0. Skor maksimal 225. Nilai ambang batas 156.`,
      catatan: `Seluruh materi mengacu pada nilai dasar ASN, yaitu BerAKHLAK: Berorientasi Pelayanan, Akuntabel, Kompeten, Harmonis, Loyal, Adaptif, dan Kolaboratif.`,
      materi: [
      { nama: `Pelayanan Publik`, catatan: `Konsep dan ruang lingkup, prinsip dan standar, sikap pelayanan prima, pelayanan yang adil dan inklusif, pengambilan keputusan dalam skenario pelayanan.` },
      { nama: `Jejaring Kerja`, catatan: `Konsep dan prinsip jejaring kerja, komunikasi dan koordinasi, kolaborasi dan penyelesaian masalah, pengembangan kemitraan.` },
      { nama: `Sosial Budaya`, catatan: `Konsep dan struktur sosial, adaptasi dalam masyarakat majemuk.` },
      { nama: `Teknologi Informasi dan Komunikasi` },
      { nama: `Profesionalisme` },
      { nama: `Anti Radikalisme` },
      ],
      mapping: [
        {
          tipe: 'tryout',
          soalPerPaket: 45,
          dibutuhkan: 1350,
          tersedia: 1536,
          status: 'selesai',
          catatan: `Angka dari Mapping ASN.xlsx sheet "TKP". Totalnya sama dengan 30 paket, bukan 15.`,
        },
      ],
      contoh: [
        {
        soal: [
        {
          // TKP berskala: tiap opsi punya skor 1-5. `kunci` di sini adalah
          // opsi berskor TERTINGGI, bukan satu-satunya jawaban benar.
          nomor: 1,
          tipe: 'skala',
          pertanyaan: `Atasan memerintahkan Anda untuk melakukan sosialisasi mengenai program pelayanan baru kepada warga. Namun, saat pelaksanaannya Anda merasa waktunya sangat terbatas dan warga kurang antusias dalam menyimak penjelasan yang Anda berikan. Dalam mengatasi situasi tersebut, Anda pun berencana untuk melakukan interaksi secara aktif. Akan tetapi, apabila pemahaman warga yang terbatas juga menjadi hambatan dalam kegiatan sosialisasi tersebut. Sikap Anda seharusnya …`,
          opsi: [
            { label: 'A', teks: `Mencari cara untuk dapat meningkatkan pemahaman warga terhadap materi sosialisasi agar tujuan dari atasan tercapai` },
            { label: 'B', teks: `Mencoba memahami kesulitan yang dialami warga terkait materi sosialisasi dengan membuka sesi tanya jawab` },
            { label: 'C', teks: `Memastikan semua materi sosialisasi sudah tersampaikan kepada warga dan tidak melebihi batas waktu yang ditentukan` },
            { label: 'D', teks: `Menjelaskan dengan bahasa sederhana yang mudah dipahami dan memberikan contoh konkrit sesuai kehidupan sehari-hari` },
            { label: 'E', teks: `Memberi penjelasan ulang pada warga yang belum paham dan lanjut menjelaskan materi setelah semua warga paham` },
          ],
          kunci: 'D',
          pembahasan: `Konsep yang digunakan: Memastikan warga mendapat informasi secara menyeluruh
Kata kunci: Sosialisasi program baru, waktu terbatas, kurangnya pemahaman warga
Pembahasan opsi yang benar:
Dalam memberikan penjelasan mengenai program pelayanan baru pada warga. Menggunakan bahasa yang sederhana dan mudah dipahami menjadi tindakan yang tepat agar informasi terserap dengan cepat oleh warga. Selain itu, adanya pemberian contoh yang sesuai dengan kehidupan sehari-hari dapat memperdalam pemahaman warga terkait hal yang dijelaskan. Dengan begitu, meskipun waktu yang dimiliki terbatas. Akan tetapi, apabila menggunakan cara atau metode yang tepat. Maka, informasi dapat dengan mudah dipahami oleh warga secara menyeluruh.
Jadi, dapat disimpulkan bahwa jawaban yang tepat adalah opsi D (5 poin).
Pembahasan opsi yang salah:
Opsi A mendapat nilai 1 poin karena belum dijelaskan cara yang akan dilakukan seperti apa, karena baru dalam proses mencari cara yang tepat.
Opsi B mendapat nilai 3 poin karena adanya sesi tanya jawab dapat menjadi ruang terbuka untuk warga menyampaikan hal yang belum dipahami. Akan tetapi, cara metode penjelasan yang dilakukan belum pasti akan tetap sama seperti sebelumnya atau tidak.
Opsi C mendapat nilai 4 poin karena menyampaikan materi sesuai waktu yang ditentukan memang sangat penting. Akan tetapi, belum dijelaskan cara atau metode yang dilakukan agar pemahaman warga terhadap program baru tersebut meningkat.
Opsi E mendapat nilai 2 poin karena setiap warga memiliki tingkat pemahaman yang berbeda-beda, sehingga kurang tepat apabila menunggu penjelasan materi dilanjutkan setelah semua warga memahami materi yang disampaikan. Oleh karena itu, diperlukan strategi yang tepat agar informasi yang disampaikan dapat dimengerti dengan baik oleh warga.`,
          tingkat: 'sedang',
          status: 'final',
        },
        {
          // TKP berskala: tiap opsi punya skor 1-5. `kunci` di sini adalah
          // opsi berskor TERTINGGI, bukan satu-satunya jawaban benar.
          nomor: 2,
          tipe: 'skala',
          pertanyaan: `Anda mendapat keluhan dari warga yang berada di daerah terpencil mengenai sulitnya akses untuk menerima pelayanan publik karena lokasi yang jaraknya cukup jauh. Dalam mengatasi masalah ini, Anda sebagai pimpinan unit daerah tersebut sudah mengajukan solusi atas masalah tersebut pada pimpinan pusat agar diadakannya program layanan keliling. Akan tetapi, apabila pimpinan tidak langsung setuju dengan solusi yang Anda berikan. Sikap Anda adalah …`,
          opsi: [
            { label: 'A', teks: `Berusaha menjelaskan secara rinci terkait solusi yang Anda miliki agar dapat dipahami dengan maksimal` },
            { label: 'B', teks: `Bersikap terbuka pada keputusan yang pimpinan berikan dan menyiapkan solusi alternatif lainnya` },
            { label: 'C', teks: `Berusaha dengan maksimal agar solusi tersebut disetujui oleh atasan tanpa memperdulikan hal lainnya` },
            { label: 'D', teks: `Berusaha mencari solusi berdasarkan saran dari pimpinan saja agar tidak membuang banyak waktu` },
            { label: 'E', teks: `Berusaha mencari tahu secara lebih mendalam terkait kesulitan yang dialami warga terpencil` },
          ],
          kunci: 'B',
          pembahasan: `Konsep yang digunakan: Memastikan warga mendapat pelayanan yang dibutuhkan
Kata kunci: Warga daerah terpencil, pengajuan solusi, program layanan keliling.
Pembahasan opsi yang benar:
Salah satu hambatan yang seringkali ditemui oleh warga di daerah terpencil adalah sulitnya akses jalan dan jarak yang cukup jauh. Oleh karena itu, berusaha mencari berbagai solusi alternatif yang dapat membuat warga daerah tersebut mendapatkan haknya merupakan tindakan yang tepat. Meskipun solusi sebelumnya ditolak oleh pimpinan pusat. Akan tetapi, terus berusaha mencari solusi alternatif lain menjadi tindakan yang tepat.
Jadi, dapat disimpulkan bahwa jawaban yang tepat adalah opsi B (5 poin).
Pembahasan opsi yang salah:
Opsi A mendapat nilai 3 poin karena menguasai dengan baik solusi yang Anda miliki tentu sangat penting. Akan tetapi, apabila sebelumnya sudah mengalami penolakan. Maka, tindakan yang seharusnya dilakukan adalah mencari solusi lain yang lebih baik.
Opsi C mendapat nilai 2 poin karena sikap pantang menyerah terhadap solusi yang dimiliki menunjukkan usaha dan kerja keras yang tinggi. Akan tetapi, mempertimbangkan setiap hal dari segala sisi juga diperlukan agar tidak melakukan kesalahan dengan memaksakan kehendak.
Opsi D mendapat nilai 1 poin karena bergantung dengan saran dari atasan saja menunjukkan kurangnya sikap kreatif dalam menemukan solusi. Meskipun pimpinan memiliki kuasa atau tindakan yang akan dilakukan, tetapi setidaknya tunjukkan usaha dengan mengusulkan solusi terbaik.
Opsi E mendapat nilai 4 poin karena adanya usaha untuk memahami lebih dalam kesulitan yang warga terpencil alami merupakan bentuk positif dari tindakan peduli. Akan tetapi, solusi yang tepat untuk mengatasi masalah tersebut lebih penting dibandingkan dengan rasa peduli tanpa adanya usaha.`,
          tingkat: 'sedang',
          status: 'final',
        },
        ],
      },
      ],
    },
  ],
};
