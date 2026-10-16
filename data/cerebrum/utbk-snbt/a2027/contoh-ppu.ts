import type { Kelompok } from '@/lib/skema';

/**
 * Contoh soal Pengetahuan dan Pemahaman Umum (PPU) UTBK-SNBT 2027.
 *
 * Sumber: dokumen internal "Contoh Soal UTBK" (bagian PPU, 14 soal). Dokumen itu TIDAK memuat kunci dan
 * pembahasan, jadi semuanya disusun ulang (soal bahasa buatan dipecahkan dengan mencocokkan pola kata)
 * dan berstatus 'draft' sampai diperiksa tim akademik.
 *
 * Soal sumber yang tidak dimasukkan karena kuncinya ambigu (dua pilihan sama-sama dapat dipertahankan):
 * Makna no. 1, 2, 3, 4 dan Morfologi no. 1. Bahasa Panda no. 4 sama dengan no. 1 dengan pilihan sedikit
 * berbeda, jadi tidak diulang. Salah ketik jelas di sumber diperbaiki (mis. "sekedar" menjadi "sekadar").
 */
export const contohPPU: Kelompok[] = [
  // ── Analogi dan Logika: Bahasa Panda ──────────────────────────────────────
  {
    stimulus: {
      judul: 'Bahasa Panda',
      isi: `Adik makan apel = "Ka suta piko mi lo"
Kakak minum susu = "Ze lino rumi mi fa"
Apakah adik minum apel? = "Ka mi lino piko fa"`,
    },
    soal: [
      // contoh hal. 35, Bahasa Panda no. 1
      {
        nomor: 1,
        tipe: 'pg',
        pertanyaan: `Bagaimana mengatakan "Apakah kakak makan susu?" dalam bahasa tersebut?`,
        opsi: [
          { label: 'A', teks: `Ze mi suta rumi lo?` },
          { label: 'B', teks: `Ze mi suta rumi fa?` },
          { label: 'C', teks: `Ka mi suta rumi fa?` },
          { label: 'D', teks: `Ze suta rumi mi lo?` },
          { label: 'E', teks: `Ka lino rumi mi fa?` },
        ],
        kunci: 'A',
        pembahasan: `Submateri: Analogi dan Logika: Bahasa Panda.
Cocokkan kata yang muncul berulang: Ka = adik, Ze = kakak, suta = makan, lino = minum, piko = apel, rumi = susu.
Kalimat pernyataan berpola: pelaku, kata kerja, objek, "mi", penutup. Kalimat tanya ("Apakah ...") memindahkan "mi" ke tepat setelah pelaku: pelaku, "mi", kata kerja, objek, penutup.
Penutup mengikuti kata kerja: makan (suta) berpenutup "lo", sedangkan minum (lino) berpenutup "fa" (kalimat 2 dan 3 sama-sama berkata kerja "minum" dan berpenutup "fa", padahal pelaku dan objeknya berbeda).
"Apakah kakak makan susu?": pelaku kakak = Ze, tanya maka "mi" tepat setelah pelaku, kata kerja makan = suta, objek susu = rumi, penutup makan = lo. Hasilnya: Ze mi suta rumi lo.
Opsi B memakai penutup "fa" (penutup minum). Opsi C memakai pelaku Ka (adik). Opsi D masih berpola pernyataan ("mi" di dekat akhir). Opsi E memakai kata kerja dan pelaku yang salah.
Jawaban: A`,
        status: 'draft',
      },
      // contoh hal. 35, Bahasa Panda no. 2
      {
        nomor: 2,
        tipe: 'pg',
        pertanyaan: `Bagaimana mengatakan "Kakak makan apel" dalam bahasa tersebut?`,
        opsi: [
          { label: 'A', teks: `Ze suta piko mi lo` },
          { label: 'B', teks: `Ze mi suta piko fa` },
          { label: 'C', teks: `Ka suta piko mi lo` },
          { label: 'D', teks: `Ze lino piko mi lo` },
          { label: 'E', teks: `Ka mi lino piko fa` },
        ],
        kunci: 'A',
        pembahasan: `Submateri: Analogi dan Logika: Bahasa Panda.
Cocokkan kata yang muncul berulang: Ka = adik, Ze = kakak, suta = makan, lino = minum, piko = apel, rumi = susu.
Kalimat pernyataan berpola: pelaku, kata kerja, objek, "mi", penutup. Kalimat tanya ("Apakah ...") memindahkan "mi" ke tepat setelah pelaku: pelaku, "mi", kata kerja, objek, penutup.
Penutup mengikuti kata kerja: makan (suta) berpenutup "lo", sedangkan minum (lino) berpenutup "fa" (kalimat 2 dan 3 sama-sama berkata kerja "minum" dan berpenutup "fa", padahal pelaku dan objeknya berbeda).
"Kakak makan apel" adalah kalimat pernyataan: kakak = Ze, makan = suta, apel = piko, lalu "mi" dan penutup makan "lo". Hasilnya: Ze suta piko mi lo.
Opsi B berpola tanya dan berpenutup "fa". Opsi C memakai pelaku Ka (adik). Opsi D memakai kata kerja minum (lino). Opsi E adalah kalimat tanya "Apakah adik minum apel?".
Jawaban: A`,
        status: 'draft',
      },
      // contoh hal. 35, Bahasa Panda no. 3
      {
        nomor: 3,
        tipe: 'pg',
        pertanyaan: `Bagaimana mengatakan "Apakah kakak minum apel?" dalam bahasa tersebut?`,
        opsi: [
          { label: 'A', teks: `Ze lino piko mi lo?` },
          { label: 'B', teks: `Ze mi lino piko fa?` },
          { label: 'C', teks: `Ka mi lino piko fa?` },
          { label: 'D', teks: `Ze mi suta piko fa?` },
          { label: 'E', teks: `Ka suta piko mi lo?` },
        ],
        kunci: 'B',
        pembahasan: `Submateri: Analogi dan Logika: Bahasa Panda.
Cocokkan kata yang muncul berulang: Ka = adik, Ze = kakak, suta = makan, lino = minum, piko = apel, rumi = susu.
Kalimat pernyataan berpola: pelaku, kata kerja, objek, "mi", penutup. Kalimat tanya ("Apakah ...") memindahkan "mi" ke tepat setelah pelaku: pelaku, "mi", kata kerja, objek, penutup.
Penutup mengikuti kata kerja: makan (suta) berpenutup "lo", sedangkan minum (lino) berpenutup "fa" (kalimat 2 dan 3 sama-sama berkata kerja "minum" dan berpenutup "fa", padahal pelaku dan objeknya berbeda).
"Apakah kakak minum apel?": kakak = Ze, "mi" tepat setelah pelaku, minum = lino, apel = piko, penutup minum = fa. Hasilnya: Ze mi lino piko fa.
Opsi A berpola pernyataan dan berpenutup "lo". Opsi C memakai pelaku Ka (adik). Opsi D memakai kata kerja makan (suta). Opsi E adalah pernyataan "adik makan apel".
Jawaban: B`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      // contoh hal. 36, Bahasa Panda no. 5
      {
        nomor: 4,
        tipe: 'pg',
        pertanyaan: `Diketahui beberapa premis berikut:
1. Ibu memasak ikan = Mbg wowo nefurab
2. Ayah memakan ikan = Mbg owi nefurap
3. Ikan dimakan ayah = Owi mbg terfurap
Berdasarkan pola bahasa tersebut, bagaimana cara menyatakan kalimat "Ikan dimasak ibu"?`,
        opsi: [
          { label: 'A', teks: `Wowo mbg terfurab` },
          { label: 'B', teks: `Mbg wowo terfurap` },
          { label: 'C', teks: `Wowo mbg nefurab` },
          { label: 'D', teks: `Mbg wowo nefurap` },
          { label: 'E', teks: `Owi mbg terfurab` },
        ],
        kunci: 'A',
        pembahasan: `Submateri: Analogi dan Logika: Bahasa Panda.
Cocokkan kata yang berulang: ikan = mbg, ibu = wowo, ayah = owi, memasak = furab, memakan = furap.
Kalimat aktif (premis 1 dan 2) berpola: objek, pelaku, "ne" + kata kerja (Mbg wowo nefurab).
Kalimat pasif (premis 3) berpola: pelaku, objek, "ter" + kata kerja (Owi mbg terfurap).
"Ikan dimasak ibu" adalah kalimat pasif: pelaku ibu = wowo, objek ikan = mbg, kata kerja dimasak = terfurab. Hasilnya: Wowo mbg terfurab.
Opsi B dan D memakai kata kerja memakan (furap). Opsi C masih berbentuk aktif. Opsi E memakai pelaku ayah (owi).
Jawaban: A`,
        status: 'draft',
      },
    ],
  },
  {
    soal: [
      // contoh hal. 36, Bahasa Panda no. 6
      {
        nomor: 5,
        tipe: 'pg',
        pertanyaan: `Di bawah ini adalah beberapa kata yang diterjemahkan dari bahasa unik.
Trixdkang bermakna "rumah semut"
Bgwahtrix bermakna "semut merah"
Bgwahbrix bermakna "rambut merah"
Kata yang mungkin bermakna "rumah kucing" adalah ....`,
        opsi: [
          { label: 'A', teks: `Trixbrule` },
          { label: 'B', teks: `Bgwahblax` },
          { label: 'C', teks: `Dkangfund` },
          { label: 'D', teks: `Bquakdkang` },
          { label: 'E', teks: `Bgwahdkang` },
        ],
        kunci: 'D',
        pembahasan: `Submateri: Analogi dan Logika: Bahasa Panda.
"Trixdkang" (rumah semut) dan "Bgwahtrix" (semut merah) sama-sama memuat "trix", jadi trix = semut. Maka dkang = rumah dan bgwah = merah.
"Bgwahbrix" (rambut merah) memuat bgwah = merah, jadi brix = rambut.
Urutan kata dalam sandi terbalik dari bahasa Indonesia: kata keterangan ditulis lebih dulu, kata inti di belakang (rumah semut = trix + dkang; semut merah = bgwah + trix).
Jadi "rumah kucing" = kata untuk "kucing" + dkang. Hanya opsi D (Bquakdkang) yang berakhir "dkang" dan diawali kata lain yang bisa berarti kucing. Opsi E berarti "rumah merah", sedangkan opsi A, B, dan C tidak berakhir "dkang".
Jawaban: D`,
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      judul: 'Bacaan · Kenikmatan Hidup yang Sederhana',
      isi: `(1) Seseorang dapat menemukan kenikmatan hidup dengan cara sederhana. (2) Sebagai contoh, dalam kehidupan sehari-hari kita dapat menikmati berjalan tanpa gangguan dari ponsel. (3) Menikmati hal-hal kecil seperti itu terdengar sepele. (4) Namun, sebenarnya hal tersebut sangat sulit dilakukan karena selalu ada dorongan untuk melakukan kegiatan yang produktif.

(5) Sayangnya, keberadaan teknologi, seperti ponsel pintar dan internet, menghambat banyak orang untuk menikmati kegiatan sederhana tersebut. (6) Meskipun banyak yang menganggap bermain media sosial termasuk kategori kegiatan sederhana, kegiatan tersebut tidak membuat otak berhenti bekerja. (7) Alasannya adalah informasi yang masuk ke otak juga tidak berhenti. (8) Hal itu tentu saja berbeda dengan berjalan keliling kompleks atau sekadar duduk menikmati matahari terbenam.`,
    },
    soal: [
      // contoh hal. 36, Bahasa Panda no. 7
      {
        nomor: 6,
        tipe: 'pg',
        pertanyaan: `Hubungan kata teknologi dan kata internet sama dengan hubungan kata mesin dan kata ...`,
        opsi: [
          { label: 'A', teks: `alat` },
          { label: 'B', teks: `tenaga` },
          { label: 'C', teks: `mobil` },
          { label: 'D', teks: `montir` },
          { label: 'E', teks: `diesel` },
        ],
        kunci: 'E',
        pembahasan: `Submateri: Analogi dan Logika: Bahasa Panda.
Dalam bacaan, internet disebut sebagai contoh teknologi (kalimat 5: "teknologi, seperti ponsel pintar dan internet"). Hubungannya umum ke khusus: internet adalah salah satu jenis teknologi.
Pasangan yang hubungannya sama: mesin dan diesel, karena diesel adalah salah satu jenis mesin.
Opsi A (alat) lebih umum daripada mesin, jadi arah hubungannya terbalik. Opsi B, C, dan D berkaitan dengan mesin tetapi bukan jenis mesin.
Jawaban: E`,
        status: 'draft',
      },
    ],
  },
  // ── Semantik: Sinonim ─────────────────────────────────────────────────────
  {
    stimulus: {
      judul: 'Bacaan · MBG dan Ekonomi-Politik',
      isi: `1) MBG merupakan simbol populisme ekonomi baru di Indonesia. 2) Dengan total anggaran diperkirakan mencapai Rp 185,2 triliun per tahun, MBG bukan hanya sekadar kebijakan gizi, melainkan megaproyek ekonomi-politik yang menautkan tiga simpul kekuasaan sekaligus, yakni negara, korporasi pangan, dan elite politik lokal. 3) Dalam perspektif ekonomi-politik, MBG dapat dibaca sebagai upaya negara untuk menciptakan pasar baru dengan justifikasi moral “perbaikan gizi nasional”. 4) Mekanisme pengadaan MBG memang membuka ruang ekonomi baru yang sangat besar, tetapi juga berpotensi menimbulkan konflik kepentingan. 5) Hal inilah yang perlu diawasi melalui transparansi dan audit publik.

6) Negara memang perlu teknokrat, tetapi teknokrasi tanpa transparansi hanya melahirkan birokrasi yang beku. 7) Negara juga butuh militer, tetapi militer tanpa batas sipil hanya melahirkan ketakutan. 8) Jika MBG benar-benar ingin menyehatkan anak-anak bangsa, hal utama yang harus disembuhkan adalah politik yang lapar kekuasaan, bukan sekadar perut yang kelaparan.

Diadaptasi dari nasional.kompas.com`,
    },
    soal: [
      // contoh hal. 38, Semantik: Sinonim no. 1
      {
        nomor: 7,
        tipe: 'pg',
        pertanyaan: `Kata sipil dalam kalimat (7) memiliki makna yang bertentangan dengan kata ....`,
        opsi: [
          { label: 'A', teks: `tentara` },
          { label: 'B', teks: `warga` },
          { label: 'C', teks: `publik` },
          { label: 'D', teks: `partisan` },
          { label: 'E', teks: `korporasi` },
        ],
        kunci: 'A',
        pembahasan: `Submateri: Semantik: Sinonim.
Soal ini menanyakan lawan makna (antonim).
Pada kalimat (7), "militer tanpa batas sipil", kata sipil berarti warga negara di luar militer. Lawan katanya adalah tentara (anggota militer).
"Warga" justru bersinonim dengan sipil. "Publik", "partisan", dan "korporasi" tidak berlawanan makna dengan sipil.
Jawaban: A`,
        status: 'draft',
      },
      // contoh hal. 39, Teks eksplanatif dan argumentatif no. 1
      {
        nomor: 8,
        tipe: 'pg',
        pertanyaan: `Sikap penulis terhadap mekanisme MBG dalam teks di atas adalah ....`,
        opsi: [
          { label: 'A', teks: `provokatif` },
          { label: 'B', teks: `apresiatif` },
          { label: 'C', teks: `reaktif` },
          { label: 'D', teks: `evaluatif` },
          { label: 'E', teks: `glorifikatif` },
        ],
        kunci: 'D',
        pembahasan: `Submateri: Teks eksplanatif dan argumentatif.
Penulis menimbang dua sisi mekanisme pengadaan MBG: membuka ruang ekonomi baru yang sangat besar, tetapi berpotensi menimbulkan konflik kepentingan sehingga perlu diawasi lewat transparansi dan audit publik (kalimat 4 dan 5).
Sikap yang menilai kelebihan dan kekurangan dengan pertimbangan seperti itu disebut evaluatif.
Provokatif berarti memanas-manasi, apresiatif berarti hanya menghargai, reaktif berarti menanggapi spontan, dan glorifikatif berarti memuliakan secara berlebihan. Tidak satu pun sesuai dengan nada teks.
Jawaban: D`,
        status: 'draft',
      },
    ],
  },
];
