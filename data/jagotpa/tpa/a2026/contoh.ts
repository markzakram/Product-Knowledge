import type { Kelompok } from '@/lib/skema';

/**
 * Contoh soal JagoTPA: 3 soal per materi (45 soal: Verbal 12, Kuantitatif 12,
 * Penalaran 21), diambil dari TPA Generator.
 *
 * Sumber: output/batch-JAGOTPA-2026-10to5latol/batch.json (batch f32479cb45,
 * seed JAGOTPA-2026, profil 10to5latol, dibaca 5 November 2026).
 *
 * Cara memilih (deterministik, tanpa acak):
 *   - Verbal hanya dari soal yang lolos telaah (telaah.keputusan = lolos). Kuantitatif
 *     dan Penalaran tidak punya telaah per soal; yang ditelaah adalah contoh per materi,
 *     dan seluruh materi lulus, jadi semua soalnya layak dipilih.
 *   - Soal bertabel dilewati (tipe Soal tidak punya tabel); hanya Deret Bilangan yang
 *     punya tabel, dan materi itu punya alternatif tanpa tabel.
 *   - Soal yang memuat potongan 5 kata sama dengan soal FR di references/fr, atau
 *     kata ujinya ada di FR, dibuang.
 *   - Dari sisa yang layak, tiap materi diambil tiga soal berurutan menurut nomor
 *     paket: tingkat mudah, sedang, lalu sulit; submateri bergantian bila ada lebih
 *     dari satu, dan famili berbeda bila memungkinkan. Pemahaman Bacaan memakai satu
 *     bacaan pendek yang lolos telaah, dengan tiga soalnya (mudah, sedang, sulit).
 *
 * Gambar soal figural dirender dari SVG generator ke PNG (resvg, zoom 2) di
 * public/gambar/jagotpa/. Tanda $...$ di sumber diubah menjadi rumus \\(...\\), dan
 * penebalan **...** dihapus karena tampilan tidak membacanya.
 *
 * Status 'draft': telaah dikerjakan Claude atas keputusan pemilik, bukan tim independen.
 */

/** 12 soal Verbal: Sinonim, Antonim, Analogi, Pemahaman Bacaan. */
export const contohVerbal: Kelompok[] = [
  {
    soal: [
      // Sinonim
      {
        nomor: 1,
        tipe: 'pg',
        pertanyaan: `Pilih kata yang maknanya SETARA dengan kata berhuruf KAPITAL berikut.
CACI`,
        opsi: [
          { label: 'A', teks: `keluh` },
          { label: 'B', teks: `tegur` },
          { label: 'C', teks: `cerca` },
          { label: 'D', teks: `puji` },
          { label: 'E', teks: `bantah` },
        ],
        kunci: 'C',
        pembahasan: `Konsep: Caci (n) bermakna cela, cerca, atau damprat, yaitu ucapan kasar yang menghina.
Kata Kunci: caci = cela, cerca
Langkah:
1. Pahami caci sebagai ucapan yang menghina atau mencela.
2. Cari opsi dengan makna celaan yang sama kerasnya.
3. Cerca sesuai.
Jawaban: C. cerca
Pembahasan Opsi Lain:
A. Keluh adalah ungkapan susah atau sakit hati, bukan ucapan yang mencela orang lain.
B. Tegur adalah peringatan atau sapaan yang mengingatkan, tanpa maksud menghina.
D. Puji adalah ungkapan penghargaan. Maknanya berlawanan dengan caci.
E. Bantah berarti sanggahan atau penolakan atas pendapat, bukan celaan yang kasar.
Jebakan Soal: Tegur dan bantah sama-sama berupa ucapan yang tidak menyenangkan, tetapi tidak bermaksud menghina.
Cara Cepat: Caci maki sama dengan cerca, yaitu celaan.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 2,
        tipe: 'pg',
        pertanyaan: `Pilih kata yang maknanya SETARA dengan kata berhuruf KAPITAL berikut.
JAMAK`,
        opsi: [
          { label: 'A', teks: `rapi` },
          { label: 'B', teks: `ganjil` },
          { label: 'C', teks: `sahih` },
          { label: 'D', teks: `lazim` },
          { label: 'E', teks: `ramai` },
        ],
        kunci: 'D',
        pembahasan: `Konsep: Jamak sebagai kata sifat berarti lazim, tidak aneh, lumrah, atau wajar. Contohnya pada kalimat 'Hal itu sudah jamak terjadi'. Kata ini berbeda dengan jamak sebagai kata benda dalam tata bahasa, yaitu bentuk yang menyatakan lebih dari satu.
Kata Kunci: jamak (a) = lazim, lumrah
Langkah:
1. Tentukan kelas kata. Semua opsi adalah kata sifat, jadi yang diuji adalah makna jamak sebagai kata sifat.
2. Jamak sebagai kata sifat berarti tidak aneh atau biasa terjadi.
3. Opsi yang bermakna biasa atau umum adalah lazim.
4. Ganjil adalah lawan katanya, sedangkan ramai, rapi, dan sahih tidak bermakna biasa.
Jawaban: D. lazim
Pembahasan Opsi Lain:
A. Rapi berarti teratur dan bersih. Kata ini tidak berkaitan dengan kebiasaan atau kewajaran.
B. Ganjil berarti aneh atau tidak biasa. Maknanya justru berlawanan dengan jamak.
C. Sahih berarti sah atau benar. Sesuatu yang sahih belum tentu biasa atau umum terjadi.
E. Ramai terkait dengan jamak sebagai bentuk 'banyak' dalam tata bahasa. Namun, jamak sebagai kata sifat berarti biasa atau tidak aneh, bukan banyak orang.
Jebakan Soal: Makna jamak sebagai 'banyak' dalam tata bahasa mendorong orang memilih ramai.
Cara Cepat: Uji dengan kalimat 'Itu sudah jamak terjadi'. Kata yang dapat menggantikannya tanpa mengubah makna adalah lazim.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 3,
        tipe: 'pg',
        pertanyaan: `Pilih kata yang maknanya SETARA dengan kata berhuruf KAPITAL berikut.
KAMIL`,
        opsi: [
          { label: 'A', teks: `mulia` },
          { label: 'B', teks: `agung` },
          { label: 'C', teks: `suci` },
          { label: 'D', teks: `kekal` },
          { label: 'E', teks: `sempurna` },
        ],
        kunci: 'E',
        pembahasan: `Konsep: Kamil berarti sempurna. Kata ini berasal dari bahasa Arab kāmil, seperti dalam ungkapan insan kamil 'manusia sempurna'.
Kata Kunci: kamil = sempurna
Langkah:
1. Ingat ungkapan 'insan kamil' yang berarti manusia sempurna.
2. Cari opsi yang bermakna utuh tanpa kekurangan.
3. Sempurna tepat, sedangkan mulia, agung, dan suci adalah sifat luhur yang tidak sama dengan sempurna.
Jawaban: E. sempurna
Pembahasan Opsi Lain:
A. Mulia berarti tinggi kedudukan atau budinya, bukan tanpa cela atau kekurangan.
B. Agung berarti besar atau luhur, bukan utuh tanpa kekurangan.
C. Suci berarti bersih dari dosa atau noda, bukan lengkap tanpa kekurangan.
D. Kekal berarti abadi atau tidak berubah, menyangkut waktu, bukan kesempurnaan.
Jebakan Soal: Konteks keagamaan membuat mulia, agung, atau suci terasa cocok, padahal makna intinya berbeda.
Cara Cepat: Kamil sekeluarga dengan kata 'kamal' dan 'akmal', yang semuanya bermakna kesempurnaan.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      // Antonim
      {
        nomor: 4,
        tipe: 'pg',
        pertanyaan: `Pilih kata yang maknanya BERKEBALIKAN dengan kata berhuruf KAPITAL berikut.
ENCER`,
        opsi: [
          { label: 'A', teks: `kental` },
          { label: 'B', teks: `cair` },
          { label: 'C', teks: `hangat` },
          { label: 'D', teks: `harum` },
          { label: 'E', teks: `keruh` },
        ],
        kunci: 'A',
        pembahasan: `Konsep: Encer (adjektiva) berarti cair dan tidak kental. Secara kiasan, encer juga dipakai untuk pikiran yang cerdas, misalnya otaknya encer. Lawan kata untuk makna dasarnya adalah kental.
Kata Kunci: encer = tidak kental
Langkah:
1. Makna KBBI untuk encer sudah memuat frasa tidak kental.
2. Coret cair karena bersinonim dengan encer.
3. Coret hangat, harum, dan keruh karena masing-masing menyatakan suhu, bau, dan kejernihan.
4. Lawan encer adalah kental.
Jawaban: A. kental
Pembahasan Opsi Lain:
B. Cair berarti berwujud zat alir dan tidak padat. Kata ini bersinonim dengan encer.
C. Hangat menyatakan suhu, bukan tingkat kekentalan suatu cairan.
D. Harum menyatakan bau, bukan kekentalan.
E. Keruh berarti tidak jernih. Kata ini menyangkut kejernihan, bukan kekentalan.
Jebakan Soal: Keruh sering muncul dalam konteks air sehingga terasa berlawanan, padahal air keruh pun bisa encer.
Cara Cepat: Encer = tidak kental, jadi lawannya kental.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 5,
        tipe: 'pg',
        pertanyaan: `Pilih kata yang maknanya BERKEBALIKAN dengan kata berhuruf KAPITAL berikut.
LUMRAH`,
        opsi: [
          { label: 'A', teks: `umum` },
          { label: 'B', teks: `tenang` },
          { label: 'C', teks: `santun` },
          { label: 'D', teks: `wajar` },
          { label: 'E', teks: `ganjil` },
        ],
        kunci: 'E',
        pembahasan: `Konsep: Lumrah (adjektiva) berarti biasa atau lazim. Lawan katanya adalah ganjil, yang dalam arti ini bermakna aneh atau tidak biasa.
Kata Kunci: lumrah = biasa, lazim
Langkah:
1. Pahami bahwa lumrah berarti biasa atau lazim.
2. Cari opsi yang bermakna tidak biasa atau aneh.
3. Wajar dan umum bermakna sama dengan lumrah.
4. Santun dan tenang tidak menyangkut kelaziman.
5. Ganjil berarti aneh atau luar biasa, jadi kata inilah lawannya.
Jawaban: E. ganjil
Pembahasan Opsi Lain:
A. Umum berarti lazim atau berlaku bagi banyak orang. Maknanya searah dengan lumrah.
B. Tenang menyatakan keadaan diam atau tidak gelisah dan tidak berlawanan dengan biasa.
C. Santun menyatakan kehalusan budi bahasa, bukan kelaziman.
D. Wajar berarti biasa atau sebagaimana mestinya. Kata ini bersinonim dengan lumrah.
Jebakan Soal: Ganjil sering hanya dikaitkan dengan bilangan sehingga terlewat. Padahal, ganjil juga bermakna aneh.
Cara Cepat: Lumrah sama dengan biasa, dan lawannya aneh atau ganjil.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 6,
        tipe: 'pg',
        pertanyaan: `Pilih kata yang maknanya BERKEBALIKAN dengan kata berhuruf KAPITAL berikut.
MORTALITAS`,
        opsi: [
          { label: 'A', teks: `kematian` },
          { label: 'B', teks: `migrasi` },
          { label: 'C', teks: `morbiditas` },
          { label: 'D', teks: `natalitas` },
          { label: 'E', teks: `mobilitas` },
        ],
        kunci: 'D',
        pembahasan: `Konsep: Mortalitas berarti angka kematian dalam suatu populasi. Kata ini diserap dari bahasa Latin mors, mortis, 'kematian'. Lawannya natalitas, yaitu angka kelahiran, dari bahasa Latin natalis, 'berkaitan dengan kelahiran'.
Kata Kunci: mortalitas = angka kematian; natalitas = angka kelahiran
Langkah:
1. Kenali mortalitas sebagai istilah demografi untuk angka kematian.
2. Cari istilah demografi yang menyatakan kebalikannya, yaitu kelahiran.
3. Natalitas berarti angka kelahiran, sehingga menjadi lawan kata mortalitas.
4. Morbiditas, mobilitas, dan migrasi memang istilah kependudukan atau kesehatan, tetapi tidak menyatakan kelahiran.
Jawaban: D. natalitas
Pembahasan Opsi Lain:
A. Mortalitas memang berarti angka kematian. Kata ini sinonim, bukan lawan kata.
B. Bermakna perpindahan penduduk dari satu tempat ke tempat lain. Kata ini tidak berlawanan dengan kematian.
C. Bermakna angka kesakitan dalam suatu populasi. Kata ini berkerabat dengan istilah kesehatan, tetapi bukan lawan dari kematian.
E. Bermakna kesiapan bergerak atau perpindahan penduduk. Kata ini tidak berlawanan dengan angka kematian.
Jebakan Soal: Morbiditas bunyinya mirip mortalitas dan sama-sama istilah kesehatan, sehingga mudah disangka berlawanan.
Cara Cepat: Hubungkan mort- dengan 'mati' dan nat- dengan 'lahir'.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      // Analogi
      {
        nomor: 7,
        tipe: 'pg',
        pertanyaan: `Pilih kata atau pasangan kata yang hubungannya paling serupa dengan pasangan kata berikut.
BIOSKOP : MENONTON = Lumbung : ...`,
        opsi: [
          { label: 'A', teks: `menanam` },
          { label: 'B', teks: `menyimpan` },
          { label: 'C', teks: `menjemur` },
          { label: 'D', teks: `menumbuk` },
          { label: 'E', teks: `memanen` },
        ],
        kunci: 'B',
        pembahasan: `Konsep: Hubungan tempat dan kegiatan utama yang dilakukan di tempat itu.
Kata Kunci: Lumbung adalah bangunan tempat menyimpan padi.
Langkah:
1. Bioskop adalah tempat orang menonton film, jadi hubungannya tempat dan kegiatan utamanya.
2. Cari kegiatan utama yang dilakukan di lumbung.
3. Lumbung dibangun untuk menyimpan padi atau hasil panen.
4. Kegiatan lain memang berkaitan dengan padi, tetapi terjadi di tempat lain.
Jawaban: B. menyimpan
Pembahasan Opsi Lain:
A. Menanam padi dilakukan di sawah, sehingga kegiatan ini bukan pasangan tempat lumbung.
C. Padi dijemur di halaman atau lantai jemur sebelum masuk lumbung, bukan di dalam lumbung.
D. Kegiatan menumbuk padi dilakukan di lesung, bukan kegiatan yang menjadi fungsi lumbung.
E. Memanen dilakukan di sawah, dan hasilnya baru dibawa ke lumbung untuk disimpan.
Jebakan Soal: Semua opsi berkaitan dengan padi, sehingga mudah memilih kegiatan pertanian yang hanya berdekatan konteksnya.
Cara Cepat: Buat kalimat: "Bioskop adalah tempat untuk menonton." Lalu "Lumbung adalah tempat untuk menyimpan."`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 8,
        tipe: 'pg',
        pertanyaan: `Pilih kata atau pasangan kata yang hubungannya paling serupa dengan pasangan kata berikut.
FILOLOGI : NASKAH KUNO = ...`,
        opsi: [
          { label: 'A', teks: `Seismograf : Getaran` },
          { label: 'B', teks: `Kartografi : Peta` },
          { label: 'C', teks: `Arkeolog : Artefak` },
          { label: 'D', teks: `Virus : Virologi` },
          { label: 'E', teks: `Biologi : Genetika` },
        ],
        kunci: 'B',
        pembahasan: `Konsep: Filologi adalah ilmu yang mengkaji naskah kuno. Kartografi adalah ilmu tentang pembuatan dan pengkajian peta.
Kata Kunci: ilmu lalu objek kajian
Langkah:
1. Rumuskan hubungan soal: filologi adalah ilmu yang mengkaji naskah kuno.
2. Uji setiap pasangan: kartografi adalah ilmu yang mengkaji peta. Urutan dan hubungannya sama.
3. Arkeolog adalah orangnya, bukan ilmunya. Biologi dan genetika adalah ilmu induk dan cabangnya.
4. Virus dan virologi berurutan terbalik, sedangkan seismograf adalah alat.
Jawaban: B. Kartografi : Peta
Pembahasan Opsi Lain:
A. Seismograf adalah alat pencatat getaran, jadi hubungannya alat dan hal yang dicatatnya.
C. Arkeolog adalah ahli atau orangnya, bukan nama cabang ilmu.
D. Virologi memang mengkaji virus, tetapi urutannya terbalik: objek dulu, baru ilmunya.
E. Genetika adalah cabang biologi, jadi hubungannya ilmu induk dan cabangnya, bukan ilmu dan objeknya.
Jebakan Soal: Pasangan arkeolog dan artefak tampak sejajar karena sama-sama berkaitan dengan peninggalan masa lalu, padahal arkeolog adalah ahli, bukan ilmu.
Cara Cepat: Periksa apakah kata pertama adalah nama ilmu, biasanya berakhiran -logi atau -grafi, dan apakah kata kedua adalah objeknya.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 9,
        tipe: 'pg',
        pertanyaan: `Pilih kata atau pasangan kata yang hubungannya paling serupa dengan pasangan kata berikut.
KOKON : SUTRA = Kaolin : ...`,
        opsi: [
          { label: 'A', teks: `porselen` },
          { label: 'B', teks: `kaca` },
          { label: 'C', teks: `arang` },
          { label: 'D', teks: `aspal` },
          { label: 'E', teks: `gips` },
        ],
        kunci: 'A',
        pembahasan: `Konsep: Pasangan pertama menghubungkan bahan baku dengan hasil olahannya: kokon ulat sutra dipintal menjadi benang sutra. Kaolin adalah tanah liat putih yang halus dan menjadi bahan utama porselen.
Kata Kunci: kaolin = tanah liat putih bahan porselen
Langkah:
1. Pahami hubungan pasangan pertama: kokon diolah menjadi sutra.
2. Tentukan hasil olahan utama kaolin.
3. Kaolin dibakar pada suhu tinggi menjadi porselen, sehingga pasangannya sejajar.
Jawaban: A. porselen
Pembahasan Opsi Lain:
B. Kaca dibuat terutama dari pasir silika, bukan dari kaolin.
C. Arang dihasilkan dari pembakaran kayu atau tempurung tanpa banyak udara, bukan dari kaolin.
D. Aspal dihasilkan dari sisa pengolahan minyak bumi atau dari aspal alam, bukan dari kaolin.
E. Gips dibuat dari mineral gipsum. Gipsum dan kaolin sama-sama berwarna putih, tetapi keduanya berbeda.
Jebakan Soal: Kaca dan gips menjebak karena bahan bakunya juga mineral berwarna terang, tetapi bahan bakunya bukan kaolin.
Cara Cepat: Kaolin adalah tanah liat putih, dan keramik putih halus dari tanah liat itu adalah porselen.`,
        tingkat: 'sulit',
        status: 'draft',
      },
    ],
  },
  // Pemahaman Bacaan: Tetes demi Tetes di Langit-Langit Gua
  {
    stimulus: {
      judul: `Tetes demi Tetes di Langit-Langit Gua`,
      isi: `1) Stalaktit yang menggantung di langit-langit gua kapur berawal dari air hujan. Saat merembes melalui tanah, air menyerap karbon dioksida dari sisa pembusukan tumbuhan sehingga berubah menjadi asam lemah yang mampu melarutkan batu kapur. Ketika tetesan itu muncul di langit-langit gua yang udaranya lebih miskin karbon dioksida, gas tersebut lepas dari air, dan kalsit pun mengendap membentuk cincin tipis. Cincin demi cincin menyusun tabung berongga yang disebut sedotan soda. Jika rongga itu tersumbat, air beralih mengalir di permukaan luar sehingga tabung menebal menjadi kerucut.

2) Selama empat tahun, tim ahli karst yang dipimpin Wiradana Susetyo memantau dua belas stalaktit di Gua Lawang Sela dengan lempeng kaca yang dipasang di bawah ujungnya. Laju pertumbuhan rata-ratanya hanya 0,13 milimeter per tahun. Namun, pada musim kemarau, lajunya hampir dua kali lipat dibandingkan dengan laju pada musim hujan. Pada musim hujan, pertukaran udara antara gua dan permukaan melemah sehingga karbon dioksida menumpuk di dalam lorong. Sebaliknya, pada malam-malam kemarau, udara luar yang dingin turun ke dalam gua dan mendorong udara lorong keluar.

3) Temuan itu menjadi pertimbangan bagi pengelola wisata. Di lorong yang dibuka untuk umum, embusan napas ratusan pengunjung pada hari libur menaikkan kadar karbon dioksida hingga tiga kali kadar normal. Tim mendapati beberapa ujung stalaktit di lorong tersebut tidak bertambah panjang, bahkan sebagian tetesan justru melarutkan kembali kalsit yang telah terbentuk. Sejak itu, pengelola membatasi kunjungan menjadi empat puluh orang per jam.`,
    },
    soal: [
      {
        nomor: 10,
        tipe: 'pg',
        pertanyaan: `Simpulan yang paling tepat dari bacaan tersebut adalah ...`,
        opsi: [
          { label: 'A', teks: `Pembatasan jumlah pengunjung membuat stalaktit tumbuh dua kali lebih cepat.` },
          { label: 'B', teks: `Air hujan yang bersifat asam lambat laun merusak stalaktit di langit-langit gua.` },
          { label: 'C', teks: `Kadar karbon dioksida udara gua memengaruhi cepat lambatnya pertumbuhan stalaktit.` },
          { label: 'D', teks: `Stalaktit tumbuh paling cepat di gua yang tertutup rapat dari udara luar.` },
          { label: 'E', teks: `Bentuk akhir stalaktit ditentukan oleh panjangnya musim kemarau di permukaan tanah.` },
        ],
        kunci: 'C',
        pembahasan: `Konsep: Menarik simpulan yang mencakup gagasan seluruh paragraf.
Kata Kunci: karbon dioksida pada paragraf 1, 2, dan 3
Langkah:
1. Paragraf 1: kalsit mengendap ketika karbon dioksida lepas ke udara gua.
2. Paragraf 2: laju berubah menurut musim karena kadar karbon dioksida lorong berbeda.
3. Paragraf 3: napas pengunjung menaikkan karbon dioksida dan menghentikan pertumbuhan.
4. Benang merahnya adalah pengaruh kadar karbon dioksida terhadap pertumbuhan stalaktit.
Jawaban: C. Kadar karbon dioksida udara gua memengaruhi cepat lambatnya pertumbuhan stalaktit.
Pembahasan Opsi Lain:
A. Teks tidak melaporkan hasil pembatasan kunjungan; angka dua kali lipat merujuk pada perbandingan musim.
B. Teks menyebut asam lemah melarutkan batu kapur di atas gua sebagai bahan pembentuk stalaktit, bukan sebagai perusaknya.
D. Bertentangan dengan paragraf 2, karena pertumbuhan justru lebih cepat saat udara luar masuk dan menggantikan udara lorong.
E. Bentuk stalaktit ditentukan oleh tersumbat atau tidaknya rongga, bukan oleh panjang musim kemarau.
Jebakan Soal: Opsi pembatasan pengunjung terasa logis, tetapi hasilnya tidak disebut dalam teks.
Cara Cepat: Cari unsur yang muncul di setiap paragraf, yaitu karbon dioksida.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 11,
        tipe: 'pg',
        pertanyaan: `Menurut paragraf 1, apa yang membuat sedotan soda berubah bentuk menjadi kerucut?`,
        opsi: [
          { label: 'A', teks: `Rongganya tersumbat sehingga air mengalir di permukaan luar tabung.` },
          { label: 'B', teks: `Tetesan air tertahan lebih lama di dalam rongga tabung yang sempit.` },
          { label: 'C', teks: `Air rembesan membawa asam yang lebih kuat ke langit-langit gua.` },
          { label: 'D', teks: `Cincin kalsit baru terbentuk lebih lebar daripada cincin sebelumnya.` },
          { label: 'E', teks: `Kadar karbon dioksida di udara gua naik sehingga tabung menebal.` },
        ],
        kunci: 'A',
        pembahasan: `Konsep: Menemukan rincian tersurat dengan menghubungkan istilah sedotan soda dan tabung berongga.
Kata Kunci: sedotan soda, tersumbat, permukaan luar, kerucut
Langkah:
1. Pahami bahwa sedotan soda adalah tabung berongga dari tumpukan cincin kalsit.
2. Cari kalimat yang menjelaskan perubahan tabung menjadi kerucut: bila rongga tersumbat, air mengalir di permukaan luar.
3. Pilih opsi yang memuat dua unsur itu: rongga tersumbat dan aliran di permukaan luar.
Jawaban: A. Rongganya tersumbat sehingga air mengalir di permukaan luar tabung.
Pembahasan Opsi Lain:
B. Teks tidak menyebut tetesan tertahan di rongga; yang disebut adalah rongga tersumbat sehingga air beralih ke luar.
C. Teks hanya menyebut asam lemah yang melarutkan batu kapur dan tidak mengaitkan kekuatan asam dengan perubahan bentuk.
D. Teks tidak membandingkan lebar cincin; penebalan terjadi karena aliran air pindah ke permukaan luar.
E. Kenaikan karbon dioksida justru menghambat pengendapan menurut paragraf 3, bukan menyebabkan penebalan.
Jebakan Soal: Opsi tentang karbon dioksida terdengar ilmiah dan memakai kata menebal, padahal faktor itu tidak dikaitkan dengan bentuk kerucut.
Cara Cepat: Pindai kata kerucut di paragraf 1, lalu baca klausa syarat sebelumnya.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 12,
        tipe: 'pg',
        pertanyaan: `Berdasarkan paragraf 1 dan 2, mengapa stalaktit di Gua Lawang Sela tumbuh lebih cepat pada musim kemarau?`,
        opsi: [
          { label: 'A', teks: `Tetesan air lebih jarang jatuh sehingga kalsit sempat mengeras di ujung tabung.` },
          { label: 'B', teks: `Tanah di atas gua mengering sehingga air rembesan membawa kalsit lebih banyak.` },
          { label: 'C', teks: `Pertukaran udara melemah sehingga karbon dioksida tertahan lebih lama di lorong.` },
          { label: 'D', teks: `Udara dingin dari permukaan mendinginkan tetesan sehingga kalsit lebih cepat mengendap.` },
          { label: 'E', teks: `Udara lorong lebih miskin karbon dioksida sehingga gas itu mudah lepas dari tetesan.` },
        ],
        kunci: 'E',
        pembahasan: `Konsep: Menyimpulkan alasan dengan menggabungkan mekanisme pengendapan di paragraf 1 dan data musiman di paragraf 2.
Kata Kunci: lebih miskin karbon dioksida, lepas dari air, mendorong udara lorong keluar
Langkah:
1. Paragraf 1: kalsit mengendap ketika karbon dioksida lepas dari tetesan ke udara gua yang lebih miskin gas itu.
2. Paragraf 2: pada malam kemarau, udara dingin dari luar mendorong udara lorong keluar, sedangkan pada musim hujan karbon dioksida menumpuk.
3. Simpulkan bahwa pada kemarau kadar karbon dioksida lorong lebih rendah sehingga gas lebih mudah lepas dan kalsit lebih cepat mengendap.
Jawaban: E. Udara lorong lebih miskin karbon dioksida sehingga gas itu mudah lepas dari tetesan.
Pembahasan Opsi Lain:
A. Teks tidak membahas frekuensi tetesan pada musim kemarau; ini informasi tambahan.
B. Kandungan kalsit dalam air rembesan menurut musim tidak disebut dalam teks.
C. Pertukaran udara yang melemah terjadi pada musim hujan, sehingga opsi ini salah rujukan.
D. Udara dingin disebut berperan mendorong udara lorong keluar, bukan mendinginkan tetesan; sebab-akibatnya tidak didukung.
Jebakan Soal: Opsi udara dingin terlihat paling dekat dengan kalimat teks, tetapi peran udara dingin di teks adalah mengganti udara lorong, bukan mendinginkan tetesan.
Cara Cepat: Tanyakan apa yang membuat kalsit mengendap menurut paragraf 1, lalu cari kondisi kemarau yang mendukung syarat itu.`,
        tingkat: 'sulit',
        status: 'draft',
      },
    ],
  },
];

/** 12 soal Kuantitatif: Hitung Menghitung, Deret Bilangan, Komparasi Kuantitatif, Soal Cerita. */
export const contohKuantitatif: Kelompok[] = [
  {
    soal: [
      // Hitung Menghitung
      {
        nomor: 1,
        tipe: 'pg',
        pertanyaan: `Nilai \\(x\\) berbanding lurus dengan \\(y\\), dan \\(x = 13\\) jika \\(y = 10\\). Jika \\(x = 17\\), maka \\(y\\) = …`,
        opsi: [
          { label: 'A', teks: `\\(14\\)` },
          { label: 'B', teks: `\\(\\frac{131}{17}\\)` },
          { label: 'C', teks: `\\(\\frac{170}{13}\\)` },
          { label: 'D', teks: `\\(\\frac{171}{13}\\)` },
          { label: 'E', teks: `\\(\\frac{130}{17}\\)` },
        ],
        kunci: 'C',
        pembahasan: `Konsep: Pada hubungan berbanding lurus, hasil bagi y dan x tetap.
Langkah:
1. Perbandingan: \\(\\frac{y}{17} = \\frac{10}{13}\\).
2. Maka \\(y\\) = \\(\\frac{170}{13}\\).
Jawaban: C. \\(\\frac{170}{13}\\)
Pembahasan Opsi Lain:
A. Tidak tepat karena selisih nilai x ditambahkan langsung ke y
B. Tidak tepat karena hasil kali awal tidak dihitung dengan benar
D. Tidak tepat karena perbandingan tidak disusun dengan benar
E. Tidak tepat karena rumus untuk hubungan terbalik yang dipakai`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 2,
        tipe: 'pg',
        pertanyaan: `Jika \\(2p + 2q = 8\\) dan \\(p - q = 0\\), maka \\(p^2 + q^2\\) = …`,
        opsi: [
          { label: 'A', teks: `4` },
          { label: 'B', teks: `8` },
          { label: 'C', teks: `6` },
          { label: 'D', teks: `7` },
          { label: 'E', teks: `9` },
        ],
        kunci: 'B',
        pembahasan: `Konsep: Selesaikan sistem dua persamaan dengan eliminasi atau substitusi.
Langkah:
1. Dari persamaan kedua, \\(p = q + 0\\).
2. Substitusikan ke persamaan pertama, sehingga \\(p = 2\\) dan \\(q = 2\\).
3. Maka \\(p^2 + q^2\\) = 8.
Jawaban: B. 8
Pembahasan Opsi Lain:
A. Tidak tepat karena operasi yang diminta tertukar
C. Tidak tepat karena hasil eliminasi kurang tepat
D. Tidak tepat karena nilai 7 tidak diperoleh dari langkah hitung yang benar
E. Tidak tepat karena nilai 9 tidak diperoleh dari langkah hitung yang benar`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 3,
        tipe: 'pg',
        pertanyaan: `Jika x, y, dan z adalah bilangan kelipatan 3 berurutan dengan \\(x < y < z\\), maka …`,
        opsi: [
          { label: 'A', teks: `\\(x + y + z = 12\\)` },
          { label: 'B', teks: `\\(x - y = 3\\)` },
          { label: 'C', teks: `\\(x + y = z\\)` },
          { label: 'D', teks: `\\(y = \\frac{x - z}{2}\\)` },
          { label: 'E', teks: `\\(x + z = 2y\\)` },
        ],
        kunci: 'E',
        pembahasan: `Konsep: Bilangan kelipatan 3 berurutan berselisih tetap 3.
Langkah:
1. Tulis y = x + 3 dan z = x + 6.
2. Substitusikan ke setiap opsi; yang berlaku untuk semua nilai x adalah \\(x + z = 2y\\).
Jawaban: E. \\(x + z = 2y\\)
Pembahasan Opsi Lain:
A. Tidak tepat karena jumlahnya bergantung pada bilangan yang dipilih
B. Tidak tepat karena x lebih kecil, jadi selisihnya negatif
C. Tidak tepat karena hanya benar untuk nilai tertentu
D. Tidak tepat karena seharusnya penjumlahan di pembilang, bukan pengurangan
Cara Cepat: Uji dengan satu contoh tiga bilangan, lalu uji lagi dengan contoh lain.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      // Deret Bilangan
      {
        nomor: 4,
        tipe: 'pg',
        pertanyaan: `Bilangan berikutnya pada barisan 640, 320, 1.280, 640, 2.560, … adalah …`,
        opsi: [
          { label: 'A', teks: `2.564` },
          { label: 'B', teks: `1.280` },
          { label: 'C', teks: `10.240` },
          { label: 'D', teks: `640` },
          { label: 'E', teks: `2.558` },
        ],
        kunci: 'B',
        pembahasan: `Konsep: Operasi bagi dan kali muncul bergantian dengan bilangan tetap.
Langkah:
1. Polanya bagi 2, kali 4, bagi 2, kali 4.
2. Berikutnya bagi 2: 2.560 : 2 = 1.280.
Jawaban: B. 1.280
Pembahasan Opsi Lain:
A. Tidak tepat karena perkalian diganti penjumlahan
C. Tidak tepat karena operasi perkalian terulang, padahal gilirannya pembagian
D. Tidak tepat karena bilangan pembagi yang dipakai keliru
E. Tidak tepat karena pembagian diganti pengurangan`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 5,
        tipe: 'pg',
        pertanyaan: `Bilangan yang tepat untuk mengisi bagian kosong pada barisan XIV, XVIII, XXII, XXVI, __, XXXIV adalah …`,
        opsi: [
          { label: 'A', teks: `XXXIV` },
          { label: 'B', teks: `XXX` },
          { label: 'C', teks: `XXVI` },
          { label: 'D', teks: `XXXI` },
          { label: 'E', teks: `XXIX` },
        ],
        kunci: 'B',
        pembahasan: `Konsep: Ubah angka Romawi ke angka biasa, cari pola, lalu ubah kembali.
Langkah:
1. Dalam angka biasa: 14, 18, 22, 26, __, 34.
2. Selisihnya 4, sehingga bagian kosong 30 = XXX.
Jawaban: B. XXX
Pembahasan Opsi Lain:
A. Tidak tepat karena itu suku sesudah bagian kosong
C. Tidak tepat karena itu suku sebelum bagian kosong
D. Tidak tepat karena selisih barisan dihitung kurang teliti
E. Tidak tepat karena selisih barisan dihitung kurang teliti`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 6,
        tipe: 'pg',
        pertanyaan: `Unsur pertama pada barisan 5, 9, 17, 33, … yang lebih besar dari 150 adalah …`,
        opsi: [
          { label: 'A', teks: `258` },
          { label: 'B', teks: `256` },
          { label: 'C', teks: `129` },
          { label: 'D', teks: `257` },
          { label: 'E', teks: `513` },
        ],
        kunci: 'D',
        pembahasan: `Konsep: Selisih antarsuku dikali 2, lalu barisan diteruskan sampai melewati batas.
Langkah:
1. Barisan lengkapnya 5, 9, 17, 33, 65, 129, 257.
2. Unsur pertama yang melewati 150 adalah 257.
Jawaban: D. 257
Pembahasan Opsi Lain:
A. Tidak tepat karena hasil hitung akhir kurang teliti
B. Tidak tepat karena hasil hitung akhir kurang teliti
C. Tidak tepat karena bilangan itu belum melewati 150
E. Tidak tepat karena ada unsur yang lebih kecil dan sudah melewati batas`,
        tingkat: 'sulit',
        status: 'draft',
      },
      // Komparasi Kuantitatif
      {
        nomor: 7,
        tipe: 'pg',
        pertanyaan: `Jika \\(x = y - 4\\) dan \\(3 < y < 6\\), maka …`,
        opsi: [
          { label: 'A', teks: `\\(x < y\\)` },
          { label: 'B', teks: `\\(x = 6\\)` },
          { label: 'C', teks: `\\(2x > y\\)` },
          { label: 'D', teks: `\\(x > y\\)` },
          { label: 'E', teks: `\\(x < -1\\)` },
        ],
        kunci: 'A',
        pembahasan: `Konsep: Selisih dua bilangan yang tetap menentukan urutannya.
Langkah:
1. Karena \\(x = y - 4\\) dan 4 positif, \\(x\\) selalu lebih kecil dari \\(y\\).
Jawaban: A. \\(x < y\\)
Pembahasan Opsi Lain:
B. Tidak tepat karena pernyataan ini gagal, misalnya pada \\(y = 3,1, x = −0,9\\)
C. Tidak tepat karena pernyataan ini gagal, misalnya pada \\(y = 3,1, x = −0,9\\)
D. Tidak tepat karena pernyataan ini gagal, misalnya pada \\(y = 3,1, x = −0,9\\)
E. Tidak tepat karena pernyataan ini gagal, misalnya pada \\(y = 3,1, x = −0,9\\)
Cara Cepat: Rentang y tidak perlu dipakai untuk menjawab.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 8,
        tipe: 'pg',
        pertanyaan: `Pertidaksamaan \\(4 - 3x > 4 - 3y\\) pasti terpenuhi jika …`,
        opsi: [
          { label: 'A', teks: `x dan y bilangan positif` },
          { label: 'B', teks: `x lebih besar daripada y` },
          { label: 'C', teks: `x lebih kecil daripada y` },
          { label: 'D', teks: `x sama dengan y` },
          { label: 'E', teks: `x dan y bilangan negatif` },
        ],
        kunci: 'C',
        pembahasan: `Konsep: Membagi kedua ruas dengan bilangan negatif membalik arah pertidaksamaan.
Langkah:
1. Kurangi kedua ruas dengan 4: \\(-3x > -3y\\).
2. Bagi kedua ruas dengan \\(-3\\), sehingga tanda berbalik: \\(x < y\\).
3. Syarat itu berarti x lebih kecil daripada y.
Jawaban: C. x lebih kecil daripada y
Pembahasan Opsi Lain:
A. Tidak tepat karena tanda bilangan saja tidak menentukan mana yang lebih besar
B. Tidak tepat karena arah pertidaksamaan tidak dibalik saat dibagi bilangan negatif
D. Tidak tepat karena kedua ruas menjadi sama, padahal yang diminta pertidaksamaan
E. Tidak tepat karena tanda bilangan saja tidak menentukan mana yang lebih besar`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 9,
        tipe: 'pg',
        pertanyaan: `Misalkan \\(a\\) dan \\(b\\) bilangan positif, \\(r = ab\\), dan \\(s = a + b\\). Maka …`,
        opsi: [
          { label: 'A', teks: `\\(r^2 < s\\)` },
          { label: 'B', teks: `\\(r > s\\)` },
          { label: 'C', teks: `\\(r < s\\)` },
          { label: 'D', teks: `\\(s^2 < r + s\\)` },
          { label: 'E', teks: `\\(r < s^2\\)` },
        ],
        kunci: 'E',
        pembahasan: `Konsep: Bandingkan dengan menjabarkan kuadrat jumlah.
Langkah:
1. \\(s^2 = a^2 + 2ab + b^2\\).
2. Karena \\(a\\) dan \\(b\\) positif, \\(s^2 - r = a^2 + ab + b^2 > 0\\).
3. Jadi \\(r < s^2\\).
Jawaban: E. \\(r < s^2\\)
Pembahasan Opsi Lain:
A. Tidak tepat karena pernyataan ini gagal, misalnya pada \\(a = 3, b = 3, r = 9, s = 6\\)
B. Tidak tepat karena pernyataan ini gagal, misalnya pada \\(a = 0,5, b = 0,5, r = 0,25, s = 1\\)
C. Tidak tepat karena pernyataan ini gagal, misalnya pada \\(a = 3, b = 3, r = 9, s = 6\\)
D. Tidak tepat karena pernyataan ini gagal, misalnya pada \\(a = 1, b = 1, r = 1, s = 2\\)`,
        tingkat: 'sulit',
        status: 'draft',
      },
      // Soal Cerita
      {
        nomor: 10,
        tipe: 'pg',
        pertanyaan: `Sebuah kelas berisi 50 siswa, dan setiap siswa mengikuti sedikitnya satu klub. Sebanyak 33 siswa mengikuti klub pramuka dan 29 siswa mengikuti klub PMR. Banyak siswa yang mengikuti kedua klub adalah …`,
        opsi: [
          { label: 'A', teks: `21` },
          { label: 'B', teks: `17` },
          { label: 'C', teks: `13` },
          { label: 'D', teks: `12` },
          { label: 'E', teks: `62` },
        ],
        kunci: 'D',
        pembahasan: `Konsep: \\(n(A \\cap B) = n(A) + n(B) - n(A \\cup B)\\).
Langkah:
1. Jumlah keduanya: 33 + 29 = 62.
2. Kelebihannya dari 50 adalah irisan: 62 − 50 = 12.
Jawaban: D. 12
Pembahasan Opsi Lain:
A. Tidak tepat karena yang dihitung siswa yang hanya mengikuti klub pramuka
B. Tidak tepat karena yang dihitung siswa yang hanya mengikuti klub PMR
C. Tidak tepat karena hasil hitung kurang teliti
E. Tidak tepat karena kedua klub dijumlahkan tanpa mengurangi banyak siswa`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 11,
        tipe: 'pg',
        pertanyaan: `Zahra makan \\(\\frac{3}{5}\\) bagian martabak. Wulan makan \\(\\frac{3}{5}\\) dari sisanya. Bagian yang tersisa untuk Putri adalah …`,
        opsi: [
          { label: 'A', teks: `40%` },
          { label: 'B', teks: `18%` },
          { label: 'C', teks: `16%` },
          { label: 'D', teks: `84%` },
          { label: 'E', teks: `24%` },
        ],
        kunci: 'C',
        pembahasan: `Konsep: Pecahan "dari sisanya" dihitung terhadap sisa, bukan terhadap keseluruhan.
Langkah:
1. Sisa setelah Zahra: \\(\\frac{2}{5}\\).
2. Wulan makan \\(\\frac{3}{5}\\) dari \\(\\frac{2}{5}\\), sehingga sisa \\(\\frac{4}{25}\\).
3. Dalam persen: 16%.
Jawaban: C. 16%
Pembahasan Opsi Lain:
A. Tidak tepat karena bagian yang dimakan Wulan belum dikurangkan
B. Tidak tepat karena nilai 18% tidak diperoleh dari langkah hitung yang benar
D. Tidak tepat karena yang dihitung bagian yang sudah dimakan
E. Tidak tepat karena yang dihitung bagian yang dimakan Wulan`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 12,
        tipe: 'pg',
        pertanyaan: `Jika panjang sisi sebuah persegi ditambah 6 cm, luasnya bertambah 336 cm². Luas persegi semula adalah …`,
        opsi: [
          { label: 'A', teks: `336 cm²` },
          { label: 'B', teks: `961 cm²` },
          { label: 'C', teks: `676 cm²` },
          { label: 'D', teks: `625 cm²` },
          { label: 'E', teks: `576 cm²` },
        ],
        kunci: 'D',
        pembahasan: `Konsep: \\((s + k)^2 - s^2 = 2sk + k^2\\).
Langkah:
1. \\(2s \\times 6 + 6^2 = 336\\).
2. \\(12s = 300\\), jadi \\(s = 25\\).
3. Luas semula 625 cm².
Jawaban: D. 625 cm²
Pembahasan Opsi Lain:
A. Tidak tepat karena yang dihitung pertambahan luas
B. Tidak tepat karena yang dihitung luas persegi setelah diperbesar
C. Tidak tepat karena panjang sisi kurang tepat
E. Tidak tepat karena panjang sisi kurang tepat`,
        tingkat: 'sulit',
        status: 'draft',
      },
    ],
  },
];

/** 21 soal Penalaran: Verbal Silogisme, Verbal Analitis, Rotasi Kubus, Visualisasi Kubus, Jaring-jaring Kubus, Kotak 3x3, The Next Box. */
export const contohPenalaran: Kelompok[] = [
  {
    soal: [
      // Verbal Silogisme
      {
        nomor: 1,
        tipe: 'pg',
        pertanyaan: `Pilihlah kesimpulan yang paling tepat dari premis berikut.
Semua apoteker adalah lulusan farmasi.
Semua pengelola klinik adalah apoteker.`,
        opsi: [
          { label: 'A', teks: `Beberapa pengelola klinik bukan apoteker` },
          { label: 'B', teks: `Tidak ada pengelola klinik yang merupakan apoteker` },
          { label: 'C', teks: `Semua pengelola klinik adalah lulusan farmasi` },
          { label: 'D', teks: `Tidak ada lulusan farmasi yang merupakan pengelola klinik` },
          { label: 'E', teks: `Semua lulusan farmasi adalah pengelola klinik` },
        ],
        kunci: 'C',
        pembahasan: `Konsep: Kesimpulan yang sah harus benar pada setiap keadaan yang memenuhi semua premis.
Langkah:
1. Hubungkan kedua premis lewat istilah yang sama, yaitu apoteker.
2. Kesimpulan yang pasti: Semua pengelola klinik adalah lulusan farmasi.
Jawaban: C. Semua pengelola klinik adalah lulusan farmasi
Pembahasan Opsi Lain:
A. Tidak tepat karena simpulan "Beberapa pengelola klinik bukan apoteker" tidak selalu berlaku pada semua keadaan yang memenuhi premis
B. Tidak tepat karena simpulan "Tidak ada pengelola klinik yang merupakan apoteker" tidak selalu berlaku pada semua keadaan yang memenuhi premis
D. Tidak tepat karena simpulan "Tidak ada lulusan farmasi yang merupakan pengelola klinik" tidak selalu berlaku pada semua keadaan yang memenuhi premis
E. Tidak tepat karena simpulan "Semua lulusan farmasi adalah pengelola klinik" tidak selalu berlaku pada semua keadaan yang memenuhi premis
Cara Cepat: Gambar dua premis sebagai diagram Venn, lalu uji setiap opsi.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 2,
        tipe: 'pg',
        pertanyaan: `Jika pernyataan "Tidak ada penyuluh yang merupakan aparatur desa" salah, maka pernyataan yang pasti benar adalah …`,
        opsi: [
          { label: 'A', teks: `Beberapa penyuluh adalah aparatur desa` },
          { label: 'B', teks: `Tidak dapat ditarik kesimpulan` },
          { label: 'C', teks: `Tidak ada penyuluh yang merupakan aparatur desa` },
          { label: 'D', teks: `Semua penyuluh adalah aparatur desa` },
          { label: 'E', teks: `Tidak ada aparatur desa yang merupakan penyuluh` },
        ],
        kunci: 'A',
        pembahasan: `Konsep: Ingkaran "semua" adalah "beberapa bukan", dan ingkaran "beberapa" adalah "tidak ada".
Langkah:
1. Ingkarannya: Beberapa penyuluh adalah aparatur desa.
Jawaban: A. Beberapa penyuluh adalah aparatur desa
Pembahasan Opsi Lain:
B. Tidak tepat karena ada pernyataan lain yang pasti benar
C. Tidak tepat karena pernyataan ini tidak selalu berlaku pada keadaan yang memenuhi soal
D. Tidak tepat karena pernyataan ini tidak selalu berlaku pada keadaan yang memenuhi soal
E. Tidak tepat karena pernyataan ini tidak selalu berlaku pada keadaan yang memenuhi soal
Jebakan Soal: Ingkaran "semua" bukan "tidak ada".`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 3,
        tipe: 'pg',
        pertanyaan: `Perhatikan penalaran berikut.
Semua auditor adalah akuntan.
Beberapa anggota asosiasi profesi adalah akuntan.
Jadi: Beberapa anggota asosiasi profesi adalah auditor.
Penalaran di atas …`,
        opsi: [
          { label: 'A', teks: `Tak dapat ditentukan benar atau salah` },
          { label: 'B', teks: `Benar` },
          { label: 'C', teks: `Salah pada premis mayor` },
          { label: 'D', teks: `Salah pada premis minor` },
          { label: 'E', teks: `Salah pada kesimpulan` },
        ],
        kunci: 'E',
        pembahasan: `Konsep: Premis diterima sebagai benar; yang dinilai adalah apakah kesimpulan pasti mengikuti premis.
Langkah:
1. Ada keadaan yang memenuhi kedua premis tetapi kesimpulannya salah.
2. Jadi kesalahannya ada pada kesimpulan.
Jawaban: E. Salah pada kesimpulan
Pembahasan Opsi Lain:
A. Tidak tepat karena kesimpulan tidak mengikuti premis, jadi bisa ditentukan
B. Tidak tepat karena kesimpulan tidak mengikuti premis, jadi bisa ditentukan
C. Tidak tepat karena premis diterima sebagai benar dalam soal jenis ini
D. Tidak tepat karena premis diterima sebagai benar dalam soal jenis ini`,
        tingkat: 'sulit',
        status: 'draft',
      },
      // Verbal Analitis
      {
        nomor: 4,
        tipe: 'pg',
        pertanyaan: `Lima roti, yaitu K, L, M, R, dan S, dibandingkan dengan keterangan berikut:
1. Roti R lebih lama diproduksi daripada roti L.
2. Roti S lebih lama diproduksi daripada roti R.
3. Roti K lebih lama diproduksi daripada roti L.
4. Roti M lebih lama diproduksi daripada roti S.
5. Roti M lebih lama diproduksi daripada roti K.
6. Roti K lebih lama diproduksi daripada roti S.
Roti yang paling lama diproduksi adalah …`,
        opsi: [
          { label: 'A', teks: `Roti S` },
          { label: 'B', teks: `Roti K` },
          { label: 'C', teks: `Roti L` },
          { label: 'D', teks: `Roti R` },
          { label: 'E', teks: `Roti M` },
        ],
        kunci: 'E',
        pembahasan: `Konsep: Susun semua keterangan menjadi satu rantai urutan.
Langkah:
1. Rantai yang diperoleh, dari terbesar ke terkecil: M > K > S > R > L.
2. Jawabannya M.
Jawaban: E. Roti M
Pembahasan Opsi Lain:
A. Tidak tepat karena urutan S berada di posisi ke-3 dari yang terbesar
B. Tidak tepat karena urutan K berada di posisi ke-2 dari yang terbesar
C. Tidak tepat karena urutan L berada di posisi ke-5 dari yang terbesar
D. Tidak tepat karena urutan R berada di posisi ke-4 dari yang terbesar`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 5,
        tipe: 'pg',
        pertanyaan: `Berikut jadwal kegiatan di gedung olahraga:
Judo: Senin, Sabtu.
Renang: Senin, Rabu, Jumat.
Futsal: Senin, Rabu.
Basket: Selasa, Rabu.
Pada suatu hari, terlihat ada yang membawa bola basket dan ada yang membawa kacamata renang. Hari itu adalah …`,
        opsi: [
          { label: 'A', teks: `Hari Kamis` },
          { label: 'B', teks: `Hari Rabu` },
          { label: 'C', teks: `Hari Sabtu` },
          { label: 'D', teks: `Hari Selasa` },
          { label: 'E', teks: `Hari Jumat` },
        ],
        kunci: 'B',
        pembahasan: `Konsep: Cari hari yang termasuk dalam jadwal kedua kegiatan.
Langkah:
1. Jadwal basket: Selasa, Rabu.
2. Jadwal renang: Senin, Rabu, Jumat.
3. Hari yang sama hanya Rabu.
Jawaban: B. Hari Rabu
Pembahasan Opsi Lain:
A. Tidak tepat karena pada hari Kamis, basket dan renang tidak sama-sama berlangsung
C. Tidak tepat karena pada hari Sabtu, basket dan renang tidak sama-sama berlangsung
D. Tidak tepat karena pada hari Selasa, basket dan renang tidak sama-sama berlangsung
E. Tidak tepat karena pada hari Jumat, basket dan renang tidak sama-sama berlangsung`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 6,
        tipe: 'pg',
        pertanyaan: `Bima akan mengambil 4 dari 7 mata kuliah, yaitu Fisika, Kimia, Statistika, Musik, Mengarang, Sejarah, Bahasa Inggris. Mata kuliah sains adalah Fisika, Kimia, Statistika, dan Bima wajib mengambil tepat 2 mata kuliah sains. Jadwal yang bentrok: Musik dengan Kimia; Musik dengan Sejarah; Fisika dengan Mengarang.
Jika Bima mengambil Musik, tiga mata kuliah lainnya adalah …`,
        opsi: [
          { label: 'A', teks: `Fisika, Statistika, Bahasa Inggris` },
          { label: 'B', teks: `Fisika, Mengarang, Sejarah` },
          { label: 'C', teks: `Kimia, Statistika, Mengarang` },
          { label: 'D', teks: `Kimia, Mengarang, Bahasa Inggris` },
          { label: 'E', teks: `Kimia, Statistika, Sejarah` },
        ],
        kunci: 'A',
        pembahasan: `Konsep: Coret mata kuliah yang bentrok, lalu penuhi syarat jumlah mata kuliah sains.
Langkah:
1. Musik menyingkirkan mata kuliah yang bentrok dengannya.
2. Pilih mata kuliah sains yang tersisa, lalu lengkapi sampai empat.
3. Hasilnya Fisika, Statistika, Bahasa Inggris.
Jawaban: A. Fisika, Statistika, Bahasa Inggris
Pembahasan Opsi Lain:
B. Tidak tepat karena Musik bentrok dengan Sejarah
C. Tidak tepat karena Musik bentrok dengan Kimia
D. Tidak tepat karena Musik bentrok dengan Kimia
E. Tidak tepat karena Musik bentrok dengan Kimia`,
        tingkat: 'sulit',
        status: 'draft',
      },
      // Rotasi Kubus
      {
        nomor: 7,
        tipe: 'pg',
        pertanyaan: `Perhatikan kubus berikut. Setiap sisinya bertanda berbeda. Gambar mana yang mungkin merupakan kubus yang sama setelah diputar?
⟦gambar:gambar/jagotpa/to1-p31-soal-1.png⟧`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jagotpa/to1-p31-opsi-a.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jagotpa/to1-p31-opsi-b.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jagotpa/to1-p31-opsi-c.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jagotpa/to1-p31-opsi-d.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jagotpa/to1-p31-opsi-e.png⟧` },
        ],
        kunci: 'B',
        pembahasan: `Konsep: Memutar kubus mengubah letak sisi, tetapi tidak mengubah sisi yang bertetangga dan arah tanda terhadap sisi tetangganya.
Langkah:
1. Catat kubus utama: tiga garis di sisi atas, bidang abu-abu setengah sisi di sisi kiri, dan batang tegak di sisi kanan.
2. Pada opsi B, tiga garis berpindah dari sisi atas ke sisi kanan, bidang abu-abu setengah sisi berpindah dari sisi kiri ke sisi atas, dan batang tegak berpindah dari sisi kanan ke sisi kiri.
3. Perubahan itu berasal dari satu putaran yang sama, dan arah setiap tanda sesuai dengan putaran tersebut.
Jawaban: B.
Pembahasan Opsi Lain:
A. Arah tiga garis berubah terhadap sisi di sebelahnya, padahal putaran kubus tidak mengubah hubungan arah itu.
C. Letak bidang abu-abu setengah sisi dan tiga garis tertukar, sehingga tidak ada putaran yang menghasilkan susunan ini.
D. Arah bidang abu-abu setengah sisi berubah terhadap sisi di sebelahnya, padahal putaran kubus tidak mengubah hubungan arah itu.
E. Letak batang tegak dan tiga garis tertukar, sehingga tidak ada putaran yang menghasilkan susunan ini.
Jebakan Soal: Opsi yang tandanya benar belum tentu sah. Periksa juga urutan sisi dan arah tandanya.
Cara Cepat: Mulai dari tanda yang arahnya paling jelas, lalu periksa tetangganya pada opsi.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 8,
        tipe: 'pg',
        pertanyaan: `Perhatikan kubus berikut. Setiap sisinya bertanda berbeda. Gambar mana yang mungkin merupakan kubus yang sama setelah diputar?
⟦gambar:gambar/jagotpa/to1-p32-soal-1.png⟧`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jagotpa/to1-p32-opsi-a.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jagotpa/to1-p32-opsi-b.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jagotpa/to1-p32-opsi-c.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jagotpa/to1-p32-opsi-d.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jagotpa/to1-p32-opsi-e.png⟧` },
        ],
        kunci: 'A',
        pembahasan: `Konsep: Memutar kubus mengubah letak sisi, tetapi tidak mengubah sisi yang bertetangga dan arah tanda terhadap sisi tetangganya.
Langkah:
1. Catat kubus utama: tiga titik di sisi atas, batang tegak di sisi kiri, dan bidang abu-abu setengah sisi di sisi kanan.
2. Pada opsi A, batang tegak berpindah dari sisi kiri ke sisi atas dan bidang abu-abu setengah sisi tetap di sisi kanan, tetapi ikut berputar.
3. Perubahan itu berasal dari satu putaran yang sama, dan arah setiap tanda sesuai dengan putaran tersebut.
4. Tiga garis menempati sisi yang semula tidak terlihat, jadi tidak bertentangan dengan kubus utama.
Jawaban: A.
Pembahasan Opsi Lain:
B. Letak batang tegak dan bidang abu-abu setengah sisi tertukar, sehingga tidak ada putaran yang menghasilkan susunan ini.
C. Arah bidang abu-abu setengah sisi berubah terhadap sisi di sebelahnya, padahal putaran kubus tidak mengubah hubungan arah itu.
D. Arah bidang abu-abu setengah sisi berubah terhadap sisi di sebelahnya, padahal putaran kubus tidak mengubah hubungan arah itu.
E. Letak tiga garis dan bidang abu-abu setengah sisi tertukar, sehingga tidak ada putaran yang menghasilkan susunan ini.
Jebakan Soal: Opsi yang tandanya benar belum tentu sah. Periksa juga urutan sisi dan arah tandanya.
Cara Cepat: Mulai dari tanda yang arahnya paling jelas, lalu periksa tetangganya pada opsi.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 9,
        tipe: 'pg',
        pertanyaan: `Perhatikan kubus berikut. Setiap sisinya bertanda berbeda. Gambar mana yang mungkin merupakan kubus yang sama setelah diputar?
⟦gambar:gambar/jagotpa/to1-p34-soal-1.png⟧`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jagotpa/to1-p34-opsi-a.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jagotpa/to1-p34-opsi-b.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jagotpa/to1-p34-opsi-c.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jagotpa/to1-p34-opsi-d.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jagotpa/to1-p34-opsi-e.png⟧` },
        ],
        kunci: 'E',
        pembahasan: `Konsep: Memutar kubus mengubah letak sisi, tetapi tidak mengubah sisi yang bertetangga dan arah tanda terhadap sisi tetangganya.
Langkah:
1. Catat kubus utama: titik hitam-putih di sisi atas, bidang abu-abu setengah sisi di sisi kiri, dan dua titik di sisi kanan.
2. Pada opsi E, titik hitam-putih berpindah dari sisi atas ke sisi kanan dan dua titik berpindah dari sisi kanan ke sisi atas.
3. Perubahan itu berasal dari satu putaran yang sama, dan arah setiap tanda sesuai dengan putaran tersebut.
4. Bentuk siku menempati sisi yang semula tidak terlihat, jadi tidak bertentangan dengan kubus utama.
Jawaban: E.
Pembahasan Opsi Lain:
A. Arah dua titik berubah terhadap sisi di sebelahnya, padahal putaran kubus tidak mengubah hubungan arah itu.
B. Letak dua titik dan bentuk siku tertukar, sehingga tidak ada putaran yang menghasilkan susunan ini.
C. Letak dua titik dan titik hitam-putih tertukar, sehingga tidak ada putaran yang menghasilkan susunan ini.
D. Arah titik hitam-putih berubah terhadap sisi di sebelahnya, padahal putaran kubus tidak mengubah hubungan arah itu.
Jebakan Soal: Opsi yang tandanya benar belum tentu sah. Periksa juga urutan sisi dan arah tandanya.
Cara Cepat: Mulai dari tanda yang arahnya paling jelas, lalu periksa tetangganya pada opsi.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      // Visualisasi Kubus
      {
        nomor: 10,
        tipe: 'pg',
        pertanyaan: `Tiga gambar berikut menunjukkan kubus yang sama dari sudut pandang berbeda. Setiap sisinya bertanda berbeda. Gambar apa yang tepat untuk sisi bertanda tanya pada kubus ketiga?
⟦gambar:gambar/jagotpa/to1-p37-soal-1.png⟧`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jagotpa/to1-p37-opsi-a.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jagotpa/to1-p37-opsi-b.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jagotpa/to1-p37-opsi-c.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jagotpa/to1-p37-opsi-d.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jagotpa/to1-p37-opsi-e.png⟧` },
        ],
        kunci: 'A',
        pembahasan: `Konsep: Beberapa tampilan kubus yang sama dapat digabung untuk mengetahui letak semua tanda. Tanda yang muncul pada dua tampilan menjadi patokan.
Langkah:
1. Tanda yang muncul pada kubus pertama dan kedua, yaitu tiga garis dan lingkaran putih, dipakai sebagai patokan untuk menggabungkan kedua tampilan.
2. Dari penggabungan itu, sisi yang berhadapan dapat ditentukan: batang tegak dengan bidang abu-abu segitiga.
3. Kubus ketiga memperlihatkan lingkaran putih di sisi kiri dan batang tegak di sisi kanan. Putar kubus gabungan ke kedudukan itu.
4. Sisi atas kemudian berisi tiga garis, dengan arah seperti pada gambar berikut.
⟦gambar:gambar/jagotpa/to1-p37-bahas-1.png⟧
Jawaban: A.
Pembahasan Opsi Lain:
B. Bidang abu-abu segitiga berhadapan dengan batang tegak yang tampak, sehingga tersembunyi pada kedudukan ini.
C. Lingkaran putih sudah tampak pada sisi kiri di kubus yang sama, dan setiap sisi bertanda berbeda.
D. Tandanya benar, yaitu tiga garis, tetapi arahnya tidak sesuai dengan kedudukan sisi itu pada kubus.
E. Batang tegak sudah tampak pada sisi kanan di kubus yang sama, dan setiap sisi bertanda berbeda.
Jebakan Soal: Selain tandanya, arah tanda juga harus cocok dengan kedudukan kubus ketiga.
Cara Cepat: Coret dulu tanda yang sudah tampak pada kubus ketiga dan tanda yang berhadapan dengan sisi bertanda tanya.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 11,
        tipe: 'pg',
        pertanyaan: `Tiga gambar berikut menunjukkan kubus yang sama dari sudut pandang berbeda. Setiap sisinya bertanda berbeda. Gambar apa yang tepat untuk sisi bertanda tanya pada kubus ketiga?
⟦gambar:gambar/jagotpa/to1-p36-soal-1.png⟧`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jagotpa/to1-p36-opsi-a.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jagotpa/to1-p36-opsi-b.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jagotpa/to1-p36-opsi-c.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jagotpa/to1-p36-opsi-d.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jagotpa/to1-p36-opsi-e.png⟧` },
        ],
        kunci: 'E',
        pembahasan: `Konsep: Beberapa tampilan kubus yang sama dapat digabung untuk mengetahui letak semua tanda. Tanda yang muncul pada dua tampilan menjadi patokan.
Langkah:
1. Tanda yang muncul pada kubus pertama dan kedua, yaitu tiga garis, dipakai sebagai patokan untuk menggabungkan kedua tampilan.
2. Dari penggabungan itu, sisi yang berhadapan dapat ditentukan: dua titik dengan bidang abu-abu segitiga dan kotak hitam dengan bentuk siku.
3. Kubus ketiga memperlihatkan kotak hitam di sisi atas dan dua titik di sisi kanan. Putar kubus gabungan ke kedudukan itu.
4. Sisi kiri kemudian berisi tiga garis, dengan arah seperti pada gambar berikut.
⟦gambar:gambar/jagotpa/to1-p36-bahas-1.png⟧
Jawaban: E.
Pembahasan Opsi Lain:
A. Bentuk siku berhadapan dengan kotak hitam yang tampak, sehingga tersembunyi pada kedudukan ini.
B. Tandanya benar, yaitu tiga garis, tetapi arahnya tidak sesuai dengan kedudukan sisi itu pada kubus.
C. Kotak hitam sudah tampak pada sisi atas di kubus yang sama, dan setiap sisi bertanda berbeda.
D. Dua titik sudah tampak pada sisi kanan di kubus yang sama, dan setiap sisi bertanda berbeda.
Jebakan Soal: Selain tandanya, arah tanda juga harus cocok dengan kedudukan kubus ketiga.
Cara Cepat: Coret dulu tanda yang sudah tampak pada kubus ketiga dan tanda yang berhadapan dengan sisi bertanda tanya.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 12,
        tipe: 'pg',
        pertanyaan: `Tiga gambar berikut menunjukkan kubus yang sama dari sudut pandang berbeda. Setiap sisinya bertanda berbeda. Gambar apa yang tepat untuk sisi bertanda tanya pada kubus ketiga?
⟦gambar:gambar/jagotpa/to1-p39-soal-1.png⟧`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jagotpa/to1-p39-opsi-a.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jagotpa/to1-p39-opsi-b.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jagotpa/to1-p39-opsi-c.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jagotpa/to1-p39-opsi-d.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jagotpa/to1-p39-opsi-e.png⟧` },
        ],
        kunci: 'C',
        pembahasan: `Konsep: Beberapa tampilan kubus yang sama dapat digabung untuk mengetahui letak semua tanda. Tanda yang muncul pada dua tampilan menjadi patokan.
Langkah:
1. Tanda yang muncul pada kubus pertama dan kedua, yaitu bentuk siku, dipakai sebagai patokan untuk menggabungkan kedua tampilan.
2. Dari penggabungan itu, sisi yang berhadapan dapat ditentukan: bidang abu-abu segitiga dengan batang tegak dan bidang abu-abu setengah sisi dengan panah.
3. Kubus ketiga memperlihatkan bidang abu-abu segitiga di sisi atas dan bidang abu-abu setengah sisi di sisi kiri. Putar kubus gabungan ke kedudukan itu.
4. Sisi kanan kemudian berisi bentuk siku, dengan arah seperti pada gambar berikut.
⟦gambar:gambar/jagotpa/to1-p39-bahas-1.png⟧
Jawaban: C.
Pembahasan Opsi Lain:
A. Tandanya benar, yaitu bentuk siku, tetapi arahnya tidak sesuai dengan kedudukan sisi itu pada kubus.
B. Tandanya benar, yaitu bentuk siku, tetapi arahnya tidak sesuai dengan kedudukan sisi itu pada kubus.
D. Tandanya benar, yaitu bentuk siku, tetapi arahnya tidak sesuai dengan kedudukan sisi itu pada kubus.
E. Bidang abu-abu setengah sisi sudah tampak pada sisi kiri di kubus yang sama, dan setiap sisi bertanda berbeda.
Jebakan Soal: Selain tandanya, arah tanda juga harus cocok dengan kedudukan kubus ketiga.
Cara Cepat: Coret dulu tanda yang sudah tampak pada kubus ketiga dan tanda yang berhadapan dengan sisi bertanda tanya.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      // Jaring-jaring Kubus
      {
        nomor: 13,
        tipe: 'pg',
        pertanyaan: `Jaring-jaring di sebelah kiri dilipat ke belakang dengan gambar berada di sisi luar sehingga membentuk kubus di sebelah kanan. Gambar apa yang tepat untuk sisi bertanda tanya?
⟦gambar:gambar/jagotpa/to1-p41-soal-1.png⟧`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jagotpa/to1-p41-opsi-a.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jagotpa/to1-p41-opsi-b.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jagotpa/to1-p41-opsi-c.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jagotpa/to1-p41-opsi-d.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jagotpa/to1-p41-opsi-e.png⟧` },
        ],
        kunci: 'D',
        pembahasan: `Konsep: Lipat jaring-jaring dalam pikiran dengan satu persegi sebagai alas. Sisi yang berhadapan tidak pernah terlihat bersamaan, dan arah tanda mengikuti lipatan.
Langkah:
1. Pasangan sisi berhadapan pada jaring-jaring ini: bidang abu-abu setengah sisi dengan panah, tiga garis dengan batang tegak, dan bentuk siku dengan dua titik.
2. Kubus memperlihatkan bentuk siku di sisi kiri dan bidang abu-abu setengah sisi di sisi kanan, sehingga pasangan berhadapan keduanya, yaitu dua titik dan panah, tersembunyi.
3. Sisi bertanda tanya hanya mungkin berisi tiga garis atau pasangan berhadapannya. Urutan sisi di sudut kubus menentukan bahwa sisi atas berisi tiga garis, dengan arah seperti pada gambar berikut.
⟦gambar:gambar/jagotpa/to1-p41-bahas-1.png⟧
Jawaban: D.
Pembahasan Opsi Lain:
A. Bentuk siku sudah tampak pada sisi kiri di kubus yang sama, dan setiap sisi bertanda berbeda.
B. Batang tegak berhadapan dengan sisi bertanda tanya, sehingga tidak mungkin mengisinya.
C. Bidang abu-abu setengah sisi sudah tampak pada sisi kanan di kubus yang sama, dan setiap sisi bertanda berbeda.
E. Tandanya benar, yaitu tiga garis, tetapi arahnya tidak sesuai dengan kedudukan sisi itu pada kubus.
Jebakan Soal: Tanda yang benar dengan arah yang salah tetap keliru, jadi perhatikan arah lipatan.
Cara Cepat: Tentukan dulu pasangan sisi yang berhadapan. Biasanya dua opsi langsung gugur.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 14,
        tipe: 'pg',
        pertanyaan: `Jaring-jaring di sebelah kiri dilipat ke belakang dengan gambar berada di sisi luar sehingga membentuk kubus di sebelah kanan. Gambar apa yang tepat untuk sisi bertanda tanya?
⟦gambar:gambar/jagotpa/to1-p42-soal-1.png⟧`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jagotpa/to1-p42-opsi-a.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jagotpa/to1-p42-opsi-b.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jagotpa/to1-p42-opsi-c.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jagotpa/to1-p42-opsi-d.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jagotpa/to1-p42-opsi-e.png⟧` },
        ],
        kunci: 'A',
        pembahasan: `Konsep: Lipat jaring-jaring dalam pikiran dengan satu persegi sebagai alas. Sisi yang berhadapan tidak pernah terlihat bersamaan, dan arah tanda mengikuti lipatan.
Langkah:
1. Pasangan sisi berhadapan pada jaring-jaring ini: batang tegak dengan segitiga hitam, bidang abu-abu setengah sisi dengan panah, dan dua titik dengan bidang abu-abu segitiga.
2. Kubus memperlihatkan bidang abu-abu setengah sisi di sisi atas dan batang tegak di sisi kanan, sehingga pasangan berhadapan keduanya, yaitu panah dan segitiga hitam, tersembunyi.
3. Sisi bertanda tanya hanya mungkin berisi dua titik atau pasangan berhadapannya. Urutan sisi di sudut kubus menentukan bahwa sisi kiri berisi dua titik, dengan arah seperti pada gambar berikut.
⟦gambar:gambar/jagotpa/to1-p42-bahas-1.png⟧
Jawaban: A.
Pembahasan Opsi Lain:
B. Bidang abu-abu segitiga berhadapan dengan sisi bertanda tanya, sehingga tidak mungkin mengisinya.
C. Tandanya benar, yaitu dua titik, tetapi arahnya tidak sesuai dengan kedudukan sisi itu pada kubus.
D. Bidang abu-abu setengah sisi sudah tampak pada sisi atas di kubus yang sama, dan setiap sisi bertanda berbeda.
E. Batang tegak sudah tampak pada sisi kanan di kubus yang sama, dan setiap sisi bertanda berbeda.
Jebakan Soal: Tanda yang benar dengan arah yang salah tetap keliru, jadi perhatikan arah lipatan.
Cara Cepat: Tentukan dulu pasangan sisi yang berhadapan. Biasanya dua opsi langsung gugur.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 15,
        tipe: 'pg',
        pertanyaan: `Jaring-jaring di sebelah kiri dilipat ke belakang dengan gambar berada di sisi luar sehingga membentuk kubus di sebelah kanan. Gambar apa yang tepat untuk sisi bertanda tanya?
⟦gambar:gambar/jagotpa/to1-p43-soal-1.png⟧`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jagotpa/to1-p43-opsi-a.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jagotpa/to1-p43-opsi-b.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jagotpa/to1-p43-opsi-c.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jagotpa/to1-p43-opsi-d.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jagotpa/to1-p43-opsi-e.png⟧` },
        ],
        kunci: 'E',
        pembahasan: `Konsep: Lipat jaring-jaring dalam pikiran dengan satu persegi sebagai alas. Sisi yang berhadapan tidak pernah terlihat bersamaan, dan arah tanda mengikuti lipatan.
Langkah:
1. Pasangan sisi berhadapan pada jaring-jaring ini: segitiga hitam dengan dua titik, bentuk siku dengan bidang abu-abu segitiga, dan titik hitam-putih dengan panah.
2. Kubus memperlihatkan bentuk siku di sisi atas dan titik hitam-putih di sisi kiri, sehingga pasangan berhadapan keduanya, yaitu bidang abu-abu segitiga dan panah, tersembunyi.
3. Sisi bertanda tanya hanya mungkin berisi segitiga hitam atau pasangan berhadapannya. Urutan sisi di sudut kubus menentukan bahwa sisi kanan berisi segitiga hitam, dengan arah seperti pada gambar berikut.
⟦gambar:gambar/jagotpa/to1-p43-bahas-1.png⟧
Jawaban: E.
Pembahasan Opsi Lain:
A. Tandanya benar, yaitu segitiga hitam, tetapi arahnya tidak sesuai dengan kedudukan sisi itu pada kubus.
B. Dua titik berhadapan dengan sisi bertanda tanya, sehingga tidak mungkin mengisinya.
C. Tandanya benar, yaitu segitiga hitam, tetapi arahnya tidak sesuai dengan kedudukan sisi itu pada kubus.
D. Tandanya benar, yaitu segitiga hitam, tetapi arahnya tidak sesuai dengan kedudukan sisi itu pada kubus.
Jebakan Soal: Tanda yang benar dengan arah yang salah tetap keliru, jadi perhatikan arah lipatan.
Cara Cepat: Tentukan dulu pasangan sisi yang berhadapan. Biasanya dua opsi langsung gugur.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      // Kotak 3x3
      {
        nomor: 16,
        tipe: 'pg',
        pertanyaan: `Pilih gambar yang tepat untuk menggantikan tanda tanya pada matriks berikut.
⟦gambar:gambar/jagotpa/to1-p46-soal-1.png⟧`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jagotpa/to1-p46-opsi-a.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jagotpa/to1-p46-opsi-b.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jagotpa/to1-p46-opsi-c.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jagotpa/to1-p46-opsi-d.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jagotpa/to1-p46-opsi-e.png⟧` },
        ],
        kunci: 'C',
        pembahasan: `Konsep: Setiap baris dan kolom memuat bentuk atau warna yang sama, masing-masing tepat satu kali.
Langkah:
1. Pada objek di tengah, setiap baris dan kolom memuat tiga bentuk berbeda tepat satu kali.
2. Seluruh bentuk tanpa isian. Bentuk yang dicari adalah bentuk yang belum muncul pada baris dan kolom posisi kosong.
3. Posisi kosong berada di baris 2, kolom 1. Cocokkan unsur yang belum muncul dari kedua arah.
4. Gambar 1 menerapkan pola tersebut pada bagian yang kosong; jawaban ditandai dengan bingkai hijau.
⟦gambar:gambar/jagotpa/to1-p46-bahas-1.png⟧
Jawaban: C.
Pembahasan Opsi Lain:
A. Soal memakai bentuk kosong; pilihan ini menambahkan isian yang tidak mengikuti pola.
B. Bentuk di tengah berulang dalam baris atau kolom yang sama.
D. Soal memakai bentuk kosong; pilihan ini menambahkan isian yang tidak mengikuti pola.
E. Bentuk di tengah berulang dalam baris atau kolom yang sama.
Cara Cepat: Cari unsur yang belum muncul pada baris dan kolom kotak kosong.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 17,
        tipe: 'pg',
        pertanyaan: `Pilih gambar yang tepat untuk menggantikan tanda tanya pada matriks berikut.
⟦gambar:gambar/jagotpa/to1-p49-soal-1.png⟧`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jagotpa/to1-p49-opsi-a.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jagotpa/to1-p49-opsi-b.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jagotpa/to1-p49-opsi-c.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jagotpa/to1-p49-opsi-d.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jagotpa/to1-p49-opsi-e.png⟧` },
        ],
        kunci: 'C',
        pembahasan: `Konsep: Ciri gambar, termasuk jumlah unsur kecil pada setiap baris, mengikuti aturan yang berlaku pada seluruh baris atau kolom.
Langkah:
1. Setiap kanal pada kotak mengikuti satu aturan. Kotak yang hilang berada pada baris 1, kolom 1 (Gambar 1; baris dan kolom yang dipakai aturan diarsir biru). Aturan yang terbaca dari delapan kotak yang terlihat, beserta nilainya pada baris atau kolom kotak itu (Gambar 2):
• Warna wadah: maju 1 langkah pada urutan warna putih → abu-abu → hitam (lalu kembali ke putih) setiap pindah satu kolom ke kanan; pada baris 1 dari kiri ke kanan: putih (kotak yang dicari) → abu-abu → hitam.
• Titik di tengah bidang: kotak ketiga pada tiap baris ada titik bila tepat satu dari dua kotak pertamanya bertitik; pada baris 1 dari kiri ke kanan: tanpa titik (kotak yang dicari), dengan titik, dengan titik.
• Letak kotak kecil di pojok: setiap baris dan setiap kolom memuat ketiga nilai (kiri-atas, kiri-bawah, kanan-atas) tepat satu kali; pada baris 1 dari kiri ke kanan: kiri-atas (kotak yang dicari), kiri-bawah, kanan-atas.
2. Menerapkan setiap aturan pada kotak baris 1, kolom 1 memberi: putih, tanpa titik, kiri-atas.
⟦gambar:gambar/jagotpa/to1-p49-bahas-1.png⟧
⟦gambar:gambar/jagotpa/to1-p49-bahas-2.png⟧
Jawaban: C.
Pembahasan Opsi Lain:
A. Letak kotak kecil di pojok kanan-atas padahal seharusnya kiri-atas.
B. Letak kotak kecil di pojok kiri-bawah padahal seharusnya kiri-atas.
D. Warna wadah abu-abu padahal seharusnya putih; titik di tengah bidang dengan titik padahal seharusnya tanpa titik.
E. Warna wadah abu-abu padahal seharusnya putih.
Cara Cepat: Hitung jumlah unsur per baris lebih dulu karena paling mudah diperiksa.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 18,
        tipe: 'pg',
        pertanyaan: `Pilih gambar yang tepat untuk menggantikan tanda tanya pada matriks berikut.
⟦gambar:gambar/jagotpa/to1-p57-soal-1.png⟧`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jagotpa/to1-p57-opsi-a.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jagotpa/to1-p57-opsi-b.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jagotpa/to1-p57-opsi-c.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jagotpa/to1-p57-opsi-d.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jagotpa/to1-p57-opsi-e.png⟧` },
        ],
        kunci: 'C',
        pembahasan: `Konsep: Kotak ketiga diperoleh dari operasi pada dua kotak sebelumnya, seperti penggabungan atau pengurangan unsur.
Langkah:
1. Pada setiap baris, gambar ketiga merupakan gambar pertama setelah semua unsur gambar kedua dihilangkan.
2. Periksa dua baris yang lengkap terlebih dahulu. Terapkan operasi yang sama pada baris 1. Perhatikan garis, bingkai, titik, dan bentuk kecil secara terpisah.
3. Gambar 1 menerapkan pola tersebut pada bagian yang kosong; jawaban ditandai dengan bingkai hijau.
⟦gambar:gambar/jagotpa/to1-p57-bahas-1.png⟧
Jawaban: C.
Pembahasan Opsi Lain:
A. Ada unsur tambahan yang tidak diperoleh dari operasi kedua kotak.
B. Ada unsur tambahan yang tidak diperoleh dari operasi kedua kotak.
D. Satu unsur gambar yang seharusnya tetap ada dihilangkan.
E. Ada unsur tambahan yang tidak diperoleh dari operasi kedua kotak.
Cara Cepat: Uji operasinya pada baris yang lengkap, lalu terapkan pada baris yang kosong.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      // The Next Box
      {
        nomor: 19,
        tipe: 'pg',
        pertanyaan: `Pilih kotak yang melanjutkan deret gambar berikut.
⟦gambar:gambar/jagotpa/to1-p65-soal-1.png⟧`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jagotpa/to1-p65-opsi-a.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jagotpa/to1-p65-opsi-b.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jagotpa/to1-p65-opsi-c.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jagotpa/to1-p65-opsi-d.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jagotpa/to1-p65-opsi-e.png⟧` },
        ],
        kunci: 'A',
        pembahasan: `Konsep: Corak berpindah antarbagian gambar dengan arah dan langkah yang tetap.
Langkah:
1. Setiap kotak berisi persegi yang dibagi menjadi 8 segitiga; tiap bagian berisi satu corak. Bagian dinomori 1 sampai 8 searah jarum jam seperti pada Gambar 2.
• Semua corak berpindah 2 bagian berlawanan arah jarum jam setiap kotak, sedangkan coraknya sendiri tidak berubah.
• Contohnya corak hitam penuh berada di bagian 8 (kotak 1), 6 (kotak 2), 4 (kotak 3), dan 2 (kotak 4).
2. Gambar 1 menandai jejak corak hitam penuh (garis jingga) dari kotak ke kotak; busur berpanah menunjukkan arah dan banyak bagian perpindahannya, dan kotak terakhir berlatar hijau muda adalah jawabannya.
3. Gambar 2 menerapkan aturan itu pada kotak 4: semua corak berpindah 2 bagian berlawanan arah jarum jam.
4. Jadi kotak berikutnya: bagian 1 hitam berbulatan putih, bagian 2 putih polos, bagian 3 bertitik-titik, bagian 4 putih berbintang, bagian 5 berkotak-kotak, bagian 6 berkotak-kotak miring, bagian 7 putih berbintang, bagian 8 hitam penuh.
⟦gambar:gambar/jagotpa/to1-p65-bahas-1.png⟧
⟦gambar:gambar/jagotpa/to1-p65-bahas-2.png⟧
Jawaban: A.
Pembahasan Opsi Lain:
B. Corak berpindah dua kali langkah (4 bagian), padahal hanya 2 bagian.
C. Corak hanya berpindah 1 bagian, padahal seharusnya 2 bagian berlawanan arah jarum jam.
D. Corak berpindah 3 bagian, padahal dari kotak 4 ke kotak berikutnya corak berpindah 2 bagian berlawanan arah jarum jam.
E. Corak berpindah ke arah sebaliknya (searah jarum jam), padahal arah perpindahannya berlawanan arah jarum jam.
Cara Cepat: Ikuti satu corak yang paling mudah dikenali, misalnya hitam penuh, dari kotak ke kotak.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 20,
        tipe: 'pg',
        pertanyaan: `Pilih kotak yang melanjutkan deret gambar berikut.
⟦gambar:gambar/jagotpa/to1-p61-soal-1.png⟧`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jagotpa/to1-p61-opsi-a.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jagotpa/to1-p61-opsi-b.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jagotpa/to1-p61-opsi-c.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jagotpa/to1-p61-opsi-d.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jagotpa/to1-p61-opsi-e.png⟧` },
        ],
        kunci: 'C',
        pembahasan: `Konsep: Setiap ciri gambar, seperti bentuk wadah, warna, dan jumlah unsur kecil, berubah menurut aturannya sendiri.
Langkah:
1. Perhatikan perubahan tiap kanal dari kotak ke kotak. Gambar 1 menuliskan nilai tiap kanal pada kotak 1 sampai 5 sebagai pola sejajar, lalu meneruskannya ke kotak 6 (kolom hijau):
• Bentuk wadah: berulang setiap 2 kotak (persegi, lingkaran). Kotak 1-5: persegi, lingkaran, persegi, lingkaran, persegi; maka kotak berikutnya: lingkaran.
• Jumlah kotak kecil: berkurang satu pada setiap kotak. Kotak 1-5: 5, 4, 3, 2, 1; maka kotak berikutnya: 0.
• Warna wadah: bergeser ke warna dua tingkat berikutnya pada urutan putih, abu-abu, hitam (lalu kembali ke putih) pada setiap kotak. Kotak 1-5: hitam, abu-abu, putih, hitam, abu-abu; maka kotak berikutnya: putih.
2. Pada pola yang berulang, kotak yang bergaris jingga berada pada urutan yang sama dengan kotak 6, jadi nilainya sama dengan kotak 6.
3. Kotak pengganti tanda tanya (kotak ke-6) memenuhi semua aturan: lingkaran, 0, putih.
⟦gambar:gambar/jagotpa/to1-p61-bahas-1.png⟧
Jawaban: C.
Pembahasan Opsi Lain:
A. Jumlah kotak kecil 4 padahal seharusnya 0.
B. Bentuk wadah persegi padahal seharusnya lingkaran; jumlah kotak kecil 3 padahal seharusnya 0.
D. Jumlah kotak kecil 3 padahal seharusnya 0.
E. Jumlah kotak kecil 1 padahal seharusnya 0; bentuk wadah persegi padahal seharusnya lingkaran.
Cara Cepat: Periksa satu ciri pada satu waktu, lalu coret opsi yang menyalahi ciri itu.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 21,
        tipe: 'pg',
        pertanyaan: `Pilih kotak yang melanjutkan deret gambar berikut.
⟦gambar:gambar/jagotpa/to1-p62-soal-1.png⟧`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jagotpa/to1-p62-opsi-a.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jagotpa/to1-p62-opsi-b.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jagotpa/to1-p62-opsi-c.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jagotpa/to1-p62-opsi-d.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jagotpa/to1-p62-opsi-e.png⟧` },
        ],
        kunci: 'A',
        pembahasan: `Konsep: Banyak objek atau ukuran dan arah objek berubah dengan langkah tetap pada setiap kotak.
Langkah:
1. Jumlah belah ketupat berkurang satu setiap kotak.
2. Jumlah segitiga bertambah 2 setiap kotak. Hitung kedua jenis objek secara terpisah.
3. Panah juga berputar 135 derajat searah jarum jam setiap kotak.
4. Gambar 1 menerapkan pola tersebut pada bagian yang kosong; jawaban ditandai dengan bingkai hijau.
⟦gambar:gambar/jagotpa/to1-p62-bahas-1.png⟧
Jawaban: A.
Pembahasan Opsi Lain:
B. Jumlah belah ketupat tidak sesuai dengan perubahan pada deret.
C. Jumlah belah ketupat tidak sesuai dengan perubahan pada deret.
D. Jumlah segitiga tidak sesuai dengan perubahan pada deret.
E. Jumlah objek benar, tetapi putaran panah tidak sesuai.
Cara Cepat: Tulis jumlah atau arah pada tiap kotak sebagai barisan angka, lalu teruskan barisan itu.`,
        tingkat: 'sulit',
        status: 'draft',
      },
    ],
  },
];
