import type { Kelompok } from '@/lib/skema';

/**
 * Contoh soal PCAM 9 OJK, dari paket tryout Markaz Tahap 1 sampai 3.
 *
 * Paket sumber: "1 Tes Potensi Dasar" (ID 4991), "1 Tes Kemampuan Umum" (ID 4948), "1 Tryout Penalaran Induktif Non-Interaktif" (ID 5063), "1 Tes Kepribadian" (ID 4958).
 *
 * Dihasilkan oleh skrip/ke-data.mjs, lalu boleh disunting tangan.
 * Status sengaja 'direview', bukan 'final': isinya berasal dari bank soal
 * produksi dan belum diperiksa ulang untuk keperluan etalase.
 */
/** 5 soal dari lesson "Kemampuan Umum". */
export const contohKemampuanUmum: Kelompok[] = [
  {
    soal: [
    {
      nomor: 1,
      tipe: 'pg',
      pertanyaan: `⟦gambar:gambar/jadiojk/No._65-32f36352.png⟧`,
      kunci: 'A',
      pembahasan: `Gambar di setiap baris terdiri dari:
• Persegi, segi-enam dan segi-delapan
• Warna putih, hitam-putih dan hitam
• Jika gambar memiliki dua unsur maka keduanya berbentuk sama dan unsur kecil hitam selalu di kiri
Jawaban: A`,
      status: 'direview',
    },
    {
      nomor: 2,
      tipe: 'pg',
      pertanyaan: `⟦gambar:gambar/jadiojk/No._66-d1289970.png⟧`,
      kunci: 'C',
      pembahasan: `Dalam satu baris: unsur di luar persegi panjang adalah lingkaran, segiempat dan segitiga yang terletak di sisi yang sama
Banyak bintang selalu berkurang satu dari kiri kanan dalam sebaris
Bintang di kiri atas selalu berwarna hitam
Jawaban: C`,
      status: 'direview',
    },
    {
      nomor: 3,
      tipe: 'pg',
      pertanyaan: `Ketika ujian akhir olahraga, Paxton berlari keliling lapangan n kali selama 10 menit, sementara Ijah menghabiskan 9 menit 36 detik untuk menempuh jarak yang sama. Jika selisih kecepatan rata-rata keduanya 0,6 km/jam dan panjang lintasan satu keliling adalah 400 meter, berapakah n?`,
      opsi: [
        { label: 'A', teks: `3` },
        { label: 'B', teks: `4` },
        { label: 'C', teks: `5` },
        { label: 'D', teks: `6` },
        { label: 'E', teks: `7` },
      ],
      kunci: 'D',
      pembahasan: `Semakin kecil waktu tempuh untuk jarak yang sama berarti kecepatannya lebih besar. Artinya waktu tempuh dan kecepatan antara dua orang merupakan perbandingan terbalik
(kecepatan
Paxton)/(kecepatan
Ijah) = (waktu
tempuh
Ijah)/(waktu
tempuh
Paxton)
Hitung menggunakan persamaan di atas:
v_(P)/(v_(P) + 0,6) = (9 + ³⁶⁄₆₀)/10
v_(P)/(v_(P) + 0,6) = (⁹⁰⁄₁₀ + ⁶⁄₁₀)/10
v_(P)/(v_(P) + 0,6) = ⁹⁶⁄₁₀₀ = ²⁴⁄₂₅
Selesaikan untuk menghitung v_(P):
25v_(P)= 24v_(P)+ 24 × 0,6
v_(P)= 14,4 km/jam
Kemudian dengan pengetahuan bahwa jarak tempuh sama dengan 400n meter, waktu tempuh 10 menit, dan kecepatan rata-rata 14,4 km/jam untuk Paxton, maka kita bisa menghitung
400n/¹⁰⁄₆₀ = 14400
n = 144 × ¹⁄₆ × ¹⁄₄ = 6`,
      status: 'direview',
    },
    {
      nomor: 4,
      tipe: 'pg',
      pertanyaan: `Bunga hendak mengisi penuh ember silinder berdiameter 49 cm tinggi 80 cm. Sayangnya, keran air terpasang lebih rendah dari tinggi ember sehingga Bunga harus menggunakan gayung. Kebetulan gayung milik Bunga juga berbentuk silinder berdiameter 14 cm dan tinggi 20 cm. Berapa kali Bunga harus mengisi gayung untuk memenuhi embernya? Asumsikan gayung selalu terisi penuh tanpa ada air yang tumpah.`,
      opsi: [
        { label: 'A', teks: `4 kali` },
        { label: 'B', teks: `14 kali` },
        { label: 'C', teks: `28 kali` },
        { label: 'D', teks: `35 kali` },
        { label: 'E', teks: `49 kali` },
      ],
      kunci: 'E',
      pembahasan: `Persamaan untuk menghitung volume silinder adalah πr² t dengan r adalah jari-jari (setengah diameter) dan t adalah tinggi silinder. Namun gayung dan ember sama-sama berbentuk silinder, sehingga memudahkan perhitungan. Kita tidak perlu menghitung volume gayung dan ember secara terpisah, melainkan langsung membandingkan volume keduanya:
V_(ember)/V_(gayung) = (π × r_(ember)² × t_(ember))/(π × r_(gayung)² × t_(gayung)) = (r_(ember)² × t_(ember))/(r_(gayung)² × t_(gayung))
Masukkan ukurannya sehingga:
V_(ember)/V_(gayung) = ((49/2)² × 80)/((14/2)² × 20) = (49² × 4)/14² = (49² × 4)/14² = (7² × 4)/2² = 49
yang artinya perlu 49 kali mengisi penuh gayung untuk memenuhi ember.
Jawaban: E`,
      status: 'direview',
    },
    {
      nomor: 5,
      tipe: 'pg',
      pertanyaan: `Negasi dari invers pernyataan “Jika limbah dibuang ke sungai maka populasi ikan terancam” adalah …`,
      opsi: [
        { label: 'A', teks: `Limbah dibuang ke sungai dan populasi ikan tidak terancam` },
        { label: 'B', teks: `Populasi ikan terancam dan limbah tidak dibuang ke sungai` },
        { label: 'C', teks: `Populasi ikan tidak terancam atau limbah dibuang ke sungai` },
        { label: 'D', teks: `Limbah tidak dibuang ke sungai dan populasi ikan terancam` },
        { label: 'E', teks: `Limbah dibuang ke sungai atau populasi ikan tidak terancam` },
      ],
      kunci: 'D',
      pembahasan: `Jawaban : D. Limbah tidak dibuang ke sungai dan populasi ikan terancam
Pembahasan :
Pernyataan: jika A maka B, memiliki invers: jika –A maka –B
Jika diberikan pernyataan: jika P maka Q, maka negasinya: P dan –Q
Sehingga negasi inversnya adalah: –A dan –(–B) ekuivalen –A dan B
Misalkan:
A : limbah dibuang ke sungai
B : populasi ikan terancam
Kesimpulan: Limbah tidak dibuang ke sungai dan populasi ikan terancam`,
      status: 'direview',
    },
    ],
  },
];

/** 5 soal dari lesson "Penalaran Numerik". */
export const contohPenalaranNumerik: Kelompok[] = [
  {
    soal: [
    {
      nomor: 1,
      tipe: 'pg',
      pertanyaan: `Bacalah teks berikut untuk mengerjakan soal ini
⟦gambar:gambar/jadiojk/ckeditor_1663078344-1af00a08.jpg⟧
Tak hanya di Indonesia, kasus positif Covid-19 terus bertambah setiap harinya di beberapa negara Asia Tenggara. Berdasarkan data Worldometer per September 2020, lima negara dengan kasus tertinggi di wilayah tersebut yakni Filipina, Indonesia, Singapura, Malaysia, dan Thailand. Namun, dari kelima negara tersebut Indonesia menjadi "pemimpin" terkait jumlah kasus meninggal akibat Covid-19. Tercatat, total kasus kematian di tanah air mencapai 8.130 kasus.
Kasus kematian Covid-19 terendah yakni Singapura dengan total 27 kasus. Sedangkan, Filipina, Malaysia, dan Thailand mencatat jumlah kasus kematian korban masing-masing adalah 3.890 kasus, 128 kasus, dan 58 kasus.
Sumber: databoks.katadata.co.id
Berdasarkan grafik tersebut, selisih jumlah kasus Covid-19 negara Indonesia dan singapura adalah…`,
      opsi: [
        { label: 'A', teks: `139.945 kasus` },
        { label: 'B', teks: `129.080 kasus` },
        { label: 'C', teks: `193.945 kasus` },
        { label: 'D', teks: `192.800 kasus` },
        { label: 'E', teks: `132.362 kasus` },
      ],
      kunci: 'A',
      pembahasan: `Jawaban: A. 139.945 kasus
Pembahasan:
Kasus Covid-19 negara Indonesia 196.989 dan negara Singapura adalah 57.044. selisih dari kedua negara adalah 139.945 kasus.`,
      status: 'direview',
    },
    {
      nomor: 2,
      tipe: 'pg',
      pertanyaan: `Bacalah teks berikut untuk mengerjakan soal ini!
⟦gambar:gambar/jadiojk/ckeditor_1663146321-3e1c16ef.png⟧
IPrice mencatat terdapat enam e-commerce di bidang elektronik pada kuartal II 2020. Jakarta Notebook mencetak pengunjung web bulanan tertinggi sebanyak 1,2 juta pengunjung pada kuartal II 2020. Laku6 dan PlazaKamera menduduki peringkat selanjutnya dengan pengunjung masing-masing sebanyak 763,2 ribu dan 368,5 ribu.
Sebagai informasi, data ini diperbarui tanggal 21 Juli 2020. Pengunjung bulanan merupakan rata-rata pengunjung website yang bersumber dari SimilarWeb.
Sumber: databoks.katadata.id
Jika ada ROGStore yang ternyata kunjungan web nya lebih besar dari Pemmz namun lebih rendah dari PlazaKamera. Berapa kunjungan web ROGStore yang mungkin?`,
      opsi: [
        { label: 'A', teks: `401.900` },
        { label: 'B', teks: `370.987` },
        { label: 'C', teks: `80.987` },
        { label: 'D', teks: `50.094` },
        { label: 'E', teks: `360.000` },
      ],
      kunci: 'E',
      pembahasan: `Jawaban : E. 360.000
Pembahasan :
Diketahui
K_(Pemmz) = Kunjungan web Pemmz =99.700
K_(PlazaKamera)= Kunjungan web Plaza Kamera =368.500
K_(Pemmz) < K_(ROGStore) < K_(PlazaKamera)
Ditanyakan:
K_(ROGStore) = Kunjungan web ROGStore
Jawab:
K_(Pemmz)< K_(ROGStore) < K_(PlazaKamera)
99.700 < K_(ROGStore) < 368.500
Artinya kunjungan web di ROGStore diantara 99.700 dan 368.500. Yang memenuhi hanya pada option E`,
      status: 'direview',
    },
    {
      nomor: 3,
      tipe: 'pg',
      pertanyaan: `⟦gambar:gambar/jadiojk/ckeditor_1665041597-4e6985c6.jpg⟧
Di Indonesia, taman air modern dimulai dengan kemunculan gelanggang samudera, yang kemudian diikuti oleh demam waterboom. Taman bermain dengan perosotan berkelok yang seru ini bermunculan di banyak daerah, dari kota besar sampai kota-kota kecil, dalam ragam bentuk dan fasilitas yang beraneka. Belakangan, taman air bukan hanya dibangun dengan modal besar, tapi juga diusahakan melalui ikhtiar swadaya masyarakat desa, melalui Bumdes atau kelompok karang taruna, dengan memanfaatkan sumber air lokal: sungai, waduk, bendungan, umbul (mata air), bahkan saluran irigasi dan selokan.
Hasil survei Potensi Desa (Podes) dari Badan Pusat Statistik 2018 mencatat, Indonesia memiliki 114.000 tempat wisata air. Dari 64.174 sungai yang mengalir di negara kita, tiga persen telah dimanfaatkan sebagai tempat wisata. Selain itu, di kelompok danau dan bendungan, dari sekitar 6.430 waduk, 10 persen yang digunakan sebagai tempat wisata. Ada pula wisata air yang dibangun dari embung dan saluran irigasi (43.948 unit), dan air terjun (726 unit).
Dari sisi jumlah, Magelang merupakan kabupaten dengan tempat wisata air paling banyak. Terletak di persimpangan kaki gunung: Sumbing di barat, Telomoyo di utara, Merbabu di timur, dan Merapi di tenggara, Kabupaten Magelang dialiri banyak sekali sumber air, seperti Progo, Kali Oya dan Sungai Pabelan. Tiga kabupaten di belakang Magelang adalah Kuningan (Jawa Barat), Malang (Jawa Timur), dan Sukabumi (Jawa Barat). Sama seperti Magelang, ketiganya berada di kaki gunung dan dilalui banyak aliran sungai.
Sumber: lokadata.id
Berikut pernyataan yang benar mengenai wisata air di Indonesia adalah?`,
      opsi: [
        { label: 'A', teks: `Sungai paling banyak dimanfaatkan sebagai tempat wisata air.` },
        { label: 'B', teks: `Terdapat 1925 wisata air yang dibangun dari aliran sungai.` },
        { label: 'C', teks: `Kab. Kunigan berada di bawah kaki gunung.` },
        { label: 'D', teks: `Terdapat tiga desa di luar Jawa dengan ketiga jenis wisata air tersedia lengkap.` },
        { label: 'E', teks: `Taman air dibangun dengan modal yang besar.` },
      ],
      kunci: 'C',
      pembahasan: `Jawaban: C. Kab. Kunigan berada di bawah kaki gunung.
Pembahasan:
Sungai bukanlah yang paling banyak dimanfaatkan untuk wisata air (sebanyak 64.174×3%≈1925) tetapi embung dan saluran irigasi (sebanyak 43.948 unit) sehingga Jawaban A tidak tepat. Memang benar terdapat sekitar 1925 sungai yang dimanfaatkan sebagai tempat wisata tetapi tidak dinyatakan bahwa satu sungai untuk satu tempat wisata sehingga Jawaban B tidak dapat dipastikan kebenarannya. Pernyataan “Kab. Kuningan berada di bawah kaki gunung” benar sesuai paragraf ketiga (Jawaban C benar). Hanya ada dua desa di luar Jawa dengan wisata air lengkap (Jawaban D salah). Taman air tidak hanya dibangun dengan modal besar sesuai paragraf pertama (Jawaban E salah).`,
      status: 'direview',
    },
    {
      nomor: 4,
      tipe: 'pg',
      pertanyaan: `⟦gambar:gambar/jadiojk/ckeditor_1665040368-93d4c36e.jpg⟧
Di Indonesia, taman air modern dimulai dengan kemunculan gelanggang samudera, yang kemudian diikuti oleh demam waterboom. Taman bermain dengan perosotan berkelok yang seru ini bermunculan di banyak daerah, dari kota besar sampai kota-kota kecil, dalam ragam bentuk dan fasilitas yang beraneka. Belakangan, taman air bukan hanya dibangun dengan modal besar, tapi juga diusahakan melalui ikhtiar swadaya masyarakat desa, melalui Bumdes atau kelompok karang taruna, dengan memanfaatkan sumber air lokal: sungai, waduk, bendungan, umbul (mata air), bahkan saluran irigasi dan selokan.
Hasil survei Potensi Desa (Podes) dari Badan Pusat Statistik 2018 mencatat, Indonesia memiliki 114.000 tempat wisata air. Dari 64.174 sungai yang mengalir di negara kita, tiga persen telah dimanfaatkan sebagai tempat wisata. Selain itu, di kelompok danau dan bendungan, dari sekitar 6.430 waduk, 10 persen yang digunakan sebagai tempat wisata. Ada pula wisata air yang dibangun dari embung dan saluran irigasi (43.948 unit), dan air terjun (726 unit).
Dari sisi jumlah, Magelang merupakan kabupaten dengan tempat wisata air paling banyak. Terletak di persimpangan kaki gunung: Sumbing di barat, Telomoyo di utara, Merbabu di timur, dan Merapi di tenggara, Kabupaten Magelang dialiri banyak sekali sumber air, seperti Progo, Kali Oya dan Sungai Pabelan. Tiga kabupaten di belakang Magelang adalah Kuningan (Jawa Barat), Malang (Jawa Timur), dan Sukabumi (Jawa Barat). Sama seperti Magelang, ketiganya berada di kaki gunung dan dilalui banyak aliran sungai.
Sumber: lokadata.id
Jika tidak ada sungai di Kab. Kuningan, berapa persentase wisata air di Kab. Kuningan yang dibangun menggunakan saluran irigasi dan embung?`,
      opsi: [
        { label: 'A', teks: `30%` },
        { label: 'B', teks: `38%` },
        { label: 'C', teks: `40%` },
        { label: 'D', teks: `68%` },
        { label: 'E', teks: `56%` },
      ],
      kunci: 'E',
      pembahasan: `Pembahasan:
Berdasarkan grafik, presentase wisata air sungai adalah 32% dan persentase wisata air dari irigasi dan embung adalah 38%. Jika tidak ada sungai maka persentase tersisa 68%. Dengan demikian persentase wisata air dari irigasi dan embung menjadi 38%/68% × 100% ≈ 56%
Jawaban: E`,
      status: 'direview',
    },
    {
      nomor: 5,
      tipe: 'pg',
      pertanyaan: `⟦gambar:gambar/jadiojk/ckeditor_1665386277-22503411.jpg⟧
Mereka yang menyandang disabilitas bukan berarti tidak memiliki kesempatan bekerja baik di perusahaan maupun membangun usaha mandiri, bahkan mempekerjakan orang lain.
Pemerintah mengatur soal pekerja disabilitas ini dalam Undang-undang Nomor 8 tahun 2016 tentang penyandang disabilitas. Aturan ini mewajibkan lembaga pemerintah, pemerintah daerah, BUMN/BUMD mempekerjakan paling sedikit 2 persen penyandang disabilitas dari jumlah pegawai, dan minimal 1 persen untuk perusahaan swasta.
Bank Mandiri (Persero), misalnya, hingga akhir Juni 2021 mempekerjakan 41 orang penyandang disabilitas dari total karyawan 38.247. Mereka antara lain bekerja di bagian call center, staf di unit operasi atau administrasi, serta sebagai programmer, system tester atau system analyst di unit kerja Teknologi Informasi.
sumber: lokadata.id
Jumlah penduduk yang bekerja dengan disabilitas sebagai buruh atau karyawan pada tahun 2020 adalah sebanyak … pekerja.`,
      opsi: [
        { label: 'A', teks: `46.540` },
        { label: 'B', teks: `46.538` },
        { label: 'C', teks: `46.440` },
        { label: 'D', teks: `46.544` },
        { label: 'E', teks: `42.220` },
      ],
      kunci: 'A',
      pembahasan: `Jawaban: A. 46.540
PEMBAHASAN
Diketahui:
Total pekerja disabilitas tahun 2020 =225.048 pekerja.
% pekerja disabilitas sebagai buruh atau karyawan tahun 2020 =20,68%
Ditanyakan:
Jumlah pekerja disabilitas sebagai buruh/ karyawan tahun 2020.
Jawab:
Jumlah disabilitas sebagai buruh atau karyawan (2020) = 225.048 × 20,68%
= 225.048 × 20,68/100
= 225.048 × 0,2068
= 46.540pekerja`,
      status: 'direview',
    },
    ],
  },
];

/** 5 soal dari lesson "Tes Kemampuan Bahasa Inggris". */
export const contohBahasaInggris: Kelompok[] = [
  {
    soal: [
    {
      nomor: 1,
      tipe: 'pg',
      pertanyaan: `Ahead of Kendrick Lamar's headline performance at the Super Bowl half-time show in New Orleans, we explore the rapper's journey from the unforgiving streets of Compton to pop culture ubiquity.
"I'm not sure why I'm infatuated with death?" ponders a fiery and fed-up Kendrick Lamar on fan-favourite song Sing About Me, I'm Dying of Thirst. Sounding like he's on his knees pleading to the man in the sky, the always-probing rapper finally answers his own question: "Maybe it's because I'm a dreamer and sleep is the cousin of death!"
The song considers how an inner-city experience within a racially-divided US tends to be based around constantly grappling with feelings of impending doom: a toxic cycle that's difficult to break free of. Filled with chest-deep empathy; a combination of hyper-animated lyrical perspectives (including a hopeless young man lost in gang activity as well as a sexually-abused girl damaged due to the foster care system); and an underlining morose wit, these raw, confessional lyrics signify why the Compton, Los Angeles rapper is regarded as one of hip-hop's greatest ever songwriters.
The esteemed North Carolina rap producer 9th Wonder – who composed arguably the 20-time-Grammy-winning MC's most experimental song with the three-act psychodrama of DUCKWORTH – told me back in 2023: "Kendrick Lamar is more like a documentarian than an MC. Kendrick chooses to rap about everything and everyone across the social strata. People might call it 'woke' or 'deep', but I think of it as straight-up reporting. Some rappers leave out a certain section of people in their lyrics, right? Well, Kendrick tries to rap from everyone's perspective." (source: https://www.bbc.com/culture/article/20250207-how-kendrick-lamar-came-to-headline-the-super-bowl)
According to 9th Wonder, what makes Kendrick Lamar unique as a rapper?`,
      opsi: [
        { label: 'A', teks: `He focuses only on his personal experiences` },
        { label: 'B', teks: `He primarily creates music for mainstream audiences` },
        { label: 'C', teks: `He raps from multiple perspectives across different social groups` },
        { label: 'D', teks: `He avoids discussing serious social issues in his lyrics` },
        { label: 'E', teks: `He mainly follows traditional hip-hop storytelling methods` },
      ],
      kunci: 'C',
      pembahasan: `Answer: C. He raps from multiple perspectives across different social groups
Penjelasan:
Teks menyatakan bahwa Kendrick Lamar digambarkan sebagai seorang "documentarian" yang memasukkan berbagai sudut pandang sosial dalam liriknya. Jawaban lain tidak sesuai dengan isi teks.`,
      status: 'direview',
    },
    {
      nomor: 2,
      tipe: 'pg',
      pertanyaan: `The hairy frogfish is a type of fish that’s covered in spines. These spines, which resemble strands of hair, allow the marine animal to camouflage itself against coral and seaweed. Found mostly in warm waters around the world, the hairy frogfish can also change its color to blend in with its surroundings.
These animals may be excellent at hiding in plain sight. However they do something that really makes them stand out from a lot of other sea creatures. The fish—which usually grow about four inches long—don’t swim. Instead they walk on their wide fins along the seafloor as they look for snacks to eat.
When it comes to meals, hairy frogfish aren’t too picky. They chow down crustaceans and other fish such as flounder. These guys sometimes sneak up on their prey. But other times they make their prey come to them. Hairy frogfish have a special extra-long spine on their dorsal fins that looks like a worm. By waving this bait back and forth in front of their mouths, they can lure a target within striking distance.
Source: National Geographic
How long do hairy frogfish typically grow?`,
      opsi: [
        { label: 'A', teks: `About 2 inches` },
        { label: 'B', teks: `About 4 inches` },
        { label: 'C', teks: `About 6 inches` },
        { label: 'D', teks: `About 10 inches` },
        { label: 'E', teks: `About 12 inches` },
      ],
      kunci: 'B',
      pembahasan: `Jawaban: Opsi B
Pembahasan:
Opsi A salah karena tidak tepat
Opsi B benar karena hairy frogfish umumnya tumbuh hingga sekitar 4 inci
Opsi C salah karena tidak tepat
Opsi D salah karena tidak tepat
Opsi E salah karena tidak tepat`,
      status: 'direview',
    },
    {
      nomor: 3,
      tipe: 'pg',
      pertanyaan: `In operating theatre D at Glasgow's Royal Infirmary, gynaecological oncologist Dr Kevin Burton is directing four arms of a robot, affectionately named Roxy. The robot's mechanical arms, with surgical instruments attached to them, have been placed inside Dr Burton's patient through small cuts in the abdomen. The surgeon crosses the operating theatre to a console that would look more at home in an arcade and sits down. Dr Burton looks through a viewfinder and, with a joystick and foot pedals, he begins manipulating instruments. He is entirely in control of the robot as he cuts through tissue, avoiding important nerves and blood vessels as he searches deep into the pelvis for potentially cancerous lymph nodes. It is now more than five years since I first witnessed robot surgeons in action at the Golden Jubilee hospital in Clydebank. Surgeons say the contribution of robotic assisted surgery since then cannot be overstated. This week, First Minister John Swinney spoke at Scotland's National Robotarium to pledge that innovation and technology would be one of three key platforms for reforming the NHS. Artificial intelligence is the latest tool to assist with diagnostics, and a new digital app is promised to improve patient access.
Source: BBC
The phrase "the latest tool" in the last paragraph refers to:`,
      opsi: [
        { label: 'A', teks: `The robotic surgical system used by Dr. Burton.` },
        { label: 'B', teks: `The use of artificial intelligence in medical diagnostics.` },
        { label: 'C', teks: `A new type of joystick used in surgery.` },
        { label: 'D', teks: `The National Robotarium in Scotland.` },
        { label: 'E', teks: `The robot's mechanical arms.` },
      ],
      kunci: 'B',
      pembahasan: `Answer: B. The use of artificial intelligence in medical diagnostics.
Explanation:
B (Benar), karena teks menyebutkan bahwa AI adalah alat terbaru yang digunakan untuk membantu diagnosis medis.
A (Salah), karena teks sudah membahas robot bedah sebelumnya, tetapi dalam konteks ini, "the latest tool" mengacu pada AI.
D (Salah), karena National Robotarium disebut sebagai tempat, bukan alat medis terbaru.
C (Salah), karena teks tidak menyebutkan joystick baru sebagai alat terbaru.
E (Salah) meskipun disebutkan dalam teks, tetapi hal tersebut bukanlah hal yang dirujuk dan posisinya ada di awal kalimat.`,
      status: 'direview',
    },
    {
      nomor: 4,
      tipe: 'pg',
      pertanyaan: `In a peaceful neighborhood in South Central Los Angeles, it’s not the palm trees lining the curving streets, nor the view of Downtown skyscrapers seen in between homes that make cars slow down and stop. Their waves and honks are for those working on Asante Microfarm, a yard-turned-garden that feeds the local community. This is Jamiah Hargins’ creation. The founder of Crop Swap LA, his mission is to solve the city’s food crisis, one lawn at a time. Established in 2018, Hargins describes Crop Swap LA as a movement of growing food on unused spaces that creates green jobs and recycles water. Whether it’s a front lawn, backyard, or empty alleyway, micro-farms replace the land. Part-time employees, volunteers, and trainees grow food on the farm and then distribute it to the neighborhood through paid or free memberships depending on need. Fresh fruit, vegetables, herbs, and even homemade goods are provided to locals who might not be able to access such resources.
Asante Microfarm is one of the first Crop Swap LA projects. Meaning “thank you” in Swahili, Asante grows garlic, chives, oregano, rainbow Swiss chard, eggplant, bok choy, tatsoi, basil, thyme, radicchio, green oak, Jericho romaine, butter lettuce, Sakura red cherry tomatoes, Tuscan kale, and a Hood pear tree. No chemicals or pesticides are used, only organic compost and all-natural animal deterrents are applied. Pond making, rainwater capture, and recycling practices are also established, which use 92% less water than traditional lawns. Not only does Hargins utilize regenerative farming practices to grow food sustainably, but the entire operating model is eco-friendly and puts people first.
Crop Swap LA’s distribution methodology is that if one lives within two miles from a micro-farm, they can become a member. This applies to restaurant and catering partners as well, keeping greenhouse gas emissions lower by limiting driving. Also, creating a community hub in the process. Employees are paid a living wage and future plans are to hire those within five miles of their closest farm, so they don’t have to commute across town. Hargins believes, “people have the right to have a job close to home” and hopes this model will become the standard. Future plans for Crop Swap LA and how it creates food security for lower-income and often marginalized communities are endless to Hargins.
Sumber: One Earth
What is the synonym of “deterrents” as used in the passage?`,
      opsi: [
        { label: 'A', teks: `Preventatives` },
        { label: 'B', teks: `Encouragements` },
        { label: 'C', teks: `Invitations` },
        { label: 'D', teks: `Supports` },
        { label: 'E', teks: `Additions` },
      ],
      kunci: 'A',
      pembahasan: `Jawaban: A. Preventatives
Pembahasan: Kata deterrents dalam teks merujuk pada metode alami yang digunakan untuk mencegah hewan merusak tanaman
Sinonim yang paling sesuai adalah opsi A, yaitu preventatives, yang berarti sesuatu yang berfungsi untuk mencegah atau menghalangi terjadinya sesuatu`,
      status: 'direview',
    },
    {
      nomor: 5,
      tipe: 'pg',
      pertanyaan: `The gradual spread of the disease starts to attract the attention of the world's media. In Bangkok, Mladen Antonov, a Bulgarian photographer who works for the agency Agence France Press (AFP), starts to cover the steadily increasing reaction to the disease.
"Thailand took very early measures," Antonov tells the BBC from his home in Hong Kong in late 2024. "Southeast Asia has a big trauma from previous pandemics, the Sars and all these. So they are very, very cautious about all this."
You have to find a way to do it and to be inventive, because it's very repetitive… masks, masks, masks, masks – Mladen Antonov
Antonov says the Thai authorities quickly install body heat monitors in places such as shopping malls. Businesses within the malls, he says, usually pay for the equipment to be installed. The monitors pick up any abnormally high body temperatures, and anyone found to have a fever is reported to the authorities.
"I think it's the 27th of January [when this happens], or something like that. This is just the beginning," says Antonov. "Our job, as journalists for the wire, we had to provide daily [images] of how the world reacts. So I was walking around, going to different places, searching for images to show masks. That was actually what first we start doing, showing pictures with people with masks," he says.
Source: BBC
What does the word "inventive" in the passage most likely mean?`,
      opsi: [
        { label: 'A', teks: `Careless` },
        { label: 'B', teks: `Creative` },
        { label: 'C', teks: `Boring` },
        { label: 'D', teks: `Repetitive` },
        { label: 'E', teks: `Cheerful` },
      ],
      kunci: 'B',
      pembahasan: `Answer: B. Creative
Explanation:
B (Benar), karena "inventive" berarti kreatif atau inovatif, sesuai dengan konteks di mana Antonov harus mencari cara baru untuk mengambil gambar yang menarik meskipun subjeknya sama.
A (Salah), karena "careless" berarti ceroboh, yang tidak sesuai dengan makna dalam teks.
C (Salah), karena "boring" berarti membosankan, yang tidak relevan dengan konteks kata "inventive".
D (Salah), karena "repetitive" berarti berulang-ulang, sedangkan "inventive" justru menekankan inovasi atau kreativitas.
E (Salah) karena “cheerful” memiliki makna ceria.`,
      status: 'direview',
    },
    ],
  },
];

/** 5 soal dari lesson "Tes Pengetahuan Sektor Jasa Keuangan". */
export const contohSektorJasaKeuangan: Kelompok[] = [
  {
    soal: [
    {
      nomor: 1,
      tipe: 'pg',
      pertanyaan: `Pasal 28 Undang-Undang Nomor 21 Tahun 2011 menegaskan bahwa OJK memiliki kewenangan dalam perlindungan konsumen. Tujuan utama perlindungan konsumen sektor jasa keuangan oleh OJK adalah...`,
      opsi: [
        { label: 'A', teks: `Menjamin keuntungan nasabah.` },
        { label: 'B', teks: `Menjaga agar masyarakat tidak dirugikan oleh kegiatan lembaga jasa keuangan.` },
        { label: 'C', teks: `Mengatur kebijakan moneter nasional.` },
        { label: 'D', teks: `Menentukan suku bunga acuan.` },
        { label: 'E', teks: `Mengatur mekanisme perdagangan internasional.` },
      ],
      kunci: 'B',
      pembahasan: `Jawaban: B. Menjaga agar masyarakat tidak dirugikan oleh kegiatan lembaga jasa keuangan.
Pembahasan:
Pasal 28 UU No. 21 Tahun 2011 menyebutkan bahwa OJK bertugas melaksanakan perlindungan konsumen dan masyarakat di sektor jasa keuangan. Tujuan utamanya adalah memastikan agar masyarakat tidak dirugikan oleh praktik yang tidak sehat, penipuan, atau pelanggaran oleh lembaga keuangan.
Perlindungan ini mencakup edukasi, pengawasan perilaku lembaga keuangan, serta penanganan pengaduan masyarakat terhadap produk dan layanan jasa keuangan.`,
      status: 'direview',
    },
    {
      nomor: 2,
      tipe: 'pg',
      pertanyaan: `Pasal 9 Undang-Undang Nomor 21 Tahun 2011 menjelaskan bahwa OJK berwenang menetapkan peraturan pelaksanaan. Fungsi peraturan tersebut adalah...`,
      opsi: [
        { label: 'A', teks: `Memberikan pedoman teknis bagi lembaga jasa keuangan` },
        { label: 'B', teks: `Menentukan arah kebijakan fiskal nasional.` },
        { label: 'C', teks: `Menetapkan target pertumbuhan ekonomi tahunan.` },
        { label: 'D', teks: `Mengatur tingkat inflasi tahunan.` },
        { label: 'E', teks: `Mengelola cadangan devisa negara.` },
      ],
      kunci: 'A',
      pembahasan: `Jawaban: A. Memberikan pedoman teknis bagi lembaga jasa keuangan
Pembahasan:
Pasal 9 UU No. 21 Tahun 2011 menyebutkan bahwa OJK memiliki wewenang untuk menetapkan peraturan pelaksanaan dari undang-undang di bidang jasa keuangan.
Peraturan ini berfungsi memberikan pedoman teknis bagi lembaga jasa keuangan agar pelaksanaan kegiatan usaha sesuai dengan prinsip kehati-hatian dan peraturan yang berlaku.`,
      status: 'direview',
    },
    {
      nomor: 3,
      tipe: 'pg',
      pertanyaan: `OJK memiliki peran dalam menjaga integritas sistem keuangan nasional. Salah satu cara OJK menjaga integritas tersebut adalah dengan...`,
      opsi: [
        { label: 'A', teks: `Menetapkan kebijakan subsidi ekspor nasional.` },
        { label: 'B', teks: `Menetapkan kebijakan fiskal tahunan pemerintah.` },
        { label: 'C', teks: `Mengatur besaran gaji pegawai lembaga keuangan.` },
        { label: 'D', teks: `Menentukan nilai tukar rupiah terhadap mata uang asing.` },
        { label: 'E', teks: `Melaksanakan pengawasan terhadap kegiatan anti pencucian uang` },
      ],
      kunci: 'E',
      pembahasan: `Jawaban: E. Melaksanakan pengawasan terhadap kegiatan anti pencucian uang
Pembahasan:
OJK berperan penting dalam pengawasan penerapan program Anti Pencucian Uang dan Pencegahan Pendanaan Terorisme (APU PPT) oleh lembaga jasa keuangan.
Tugas ini dilakukan melalui penerbitan POJK Nomor 12/POJK.01/2017 tentang Penerapan Program APU dan PPT di Sektor Jasa Keuangan. OJK memastikan bahwa setiap lembaga keuangan menerapkan prinsip mengenali nasabah (Know Your Customer/KYC) serta melakukan pelaporan transaksi mencurigakan kepada Pusat Pelaporan dan Analisis Transaksi Keuangan (PPATK).
Melalui pengawasan ini, OJK berkontribusi menjaga kepercayaan publik dan mencegah penyalahgunaan sistem keuangan untuk aktivitas ilegal yang dapat mengancam stabilitas ekonomi nasional.`,
      status: 'direview',
    },
    {
      nomor: 4,
      tipe: 'pg',
      pertanyaan: `Tujuan utama OJK melakukan pengawasan terhadap sektor jasa keuangan adalah...`,
      opsi: [
        { label: 'A', teks: `Menjamin kegiatan lembaga keuangan berjalan sehat, stabil, dan sesuai ketentuan yang berlaku secara nasional.` },
        { label: 'B', teks: `Mengatur langsung kegiatan ekspor-impor yang melibatkan lembaga keuangan dan pemerintah pusat.` },
        { label: 'C', teks: `Menentukan arah kebijakan fiskal nasional bersama Kementerian Keuangan setiap tahun.` },
        { label: 'D', teks: `Mengatur pembagian laba antar perusahaan keuangan secara internasional dan domestik.` },
        { label: 'E', teks: `Menetapkan kebijakan moneter yang berhubungan dengan nilai tukar rupiah dan devisa negara.` },
      ],
      kunci: 'A',
      pembahasan: `Jawaban: A. Menjamin kegiatan lembaga keuangan berjalan sehat, stabil, dan sesuai ketentuan yang berlaku secara nasional.
Pembahasan:
OJK melaksanakan fungsi pengawasan untuk memastikan lembaga keuangan beroperasi dengan prinsip kehati-hatian dan tata kelola yang baik.
Tujuan utamanya adalah menjaga stabilitas sistem keuangan nasional agar mampu melindungi konsumen serta mencegah risiko sistemik.
Pengawasan ini juga mendukung pertumbuhan ekonomi berkelanjutan melalui peningkatan kepercayaan publik terhadap sektor keuangan.`,
      status: 'direview',
    },
    {
      nomor: 5,
      tipe: 'pg',
      pertanyaan: `Dalam praktik pasar modal, pihak yang berperan sebagai perantara antara investor dengan perusahaan emiten disebut...`,
      opsi: [
        { label: 'A', teks: `Perusahaan efek.` },
        { label: 'B', teks: `Bursa efek.` },
        { label: 'C', teks: `Kustodian sentral.` },
        { label: 'D', teks: `Lembaga kliring dan penjaminan.` },
        { label: 'E', teks: `Dewan komisioner.` },
      ],
      kunci: 'A',
      pembahasan: `Jawaban: A. Perusahaan efek.
Pembahasan:
Perusahaan efek adalah pihak yang melakukan kegiatan usaha sebagai perantara perdagangan efek, penjamin emisi efek, atau manajer investasi.
Perusahaan efek berperan menjembatani investor dalam membeli atau menjual efek di bursa serta memberikan layanan konsultasi investasi.
OJK mengatur dan mengawasi perusahaan efek melalui POJK Nomor 20/POJK.04/2016 untuk memastikan pelaksanaan kegiatan usaha berjalan sesuai prinsip integritas, profesionalitas, dan perlindungan investor.`,
      status: 'direview',
    },
    ],
  },
];

/** 5 soal dari lesson "Tes Penalaran Induktif Non-Interaktif". */
export const contohPenalaranInduktif: Kelompok[] = [
  {
    soal: [
    {
      nomor: 1,
      tipe: 'pg',
      pertanyaan: `⟦gambar:gambar/jadiojk/62f181752e1b741d03bfd6eed6682295-260a8ee1.webp⟧
Use the image at the top of the page to determine the correct response option from the listed below. Select the response choice that replaces the question mark. If no question mark exists, you are to select the response choice that comes next in the sequence.
⟦gambar:gambar/jadiojk/67d94afcbfaac56b43af58f52f9d03b6-edcec0ec.webp⟧`,
      kunci: 'B',
      pembahasan: `Jawaban:
Pembahasan:
Masing-masing kotak memiliki beberapa bangun datar yang memiliki pola.
1. Lingkaran besar dengan lingkaran kecil di dalamnya. Kedua bangun datar tersebut memiliki urutan pola:
Kiri bawah → kanan bawah → kiri atas → kanan atas
Selain itu, dapat dilihat bahwa lingkaran kecil memiliki pola:
Hitam → putih → hitam → putih
Artinya di pola kelima akan memiliki bentuk lingkaran besar di kiri bawah dengan lingkaran kecil hitam
2. Kotak kecil hitam
Tiga pola pertama: Kanan tengah → kanan atas → kanan bawah
Pola keempat: kiri tengah
Pola kelima kemungkinan akan mengikuti pola kedua namun mengubah posisinya dari kanan ke kiri.
Jadi, pola kelima di posisi kiri atas.
3. Kotak besar
Kiri atas → kiri tengah → kiri bawah → tengah bawah
Dengan empat pola pertama seperti di atas, terlihat bahwa kotak besar berpindah secara perlahan berlawanan arah jarum jam. Jadi, kemungkinan terbesar pola kelima berada di kanan bawah.`,
      status: 'direview',
    },
    {
      nomor: 2,
      tipe: 'pg',
      pertanyaan: `⟦gambar:gambar/jadiojk/d76556bfc684354e1fb1ebdb6c06de30-fe75c4a9.webp⟧
Use the image at the top of the page to determine the correct response option from the listed below. Select the response choice that replaces the question mark. If no question mark exists, you are to select the response choice that comes next in the sequence.
⟦gambar:gambar/jadiojk/e7b1e10078e1eceec93dc833896f7a6f-e5a7c7cd.webp⟧`,
      kunci: 'D',
      pembahasan: `Jawaban: D
Pembahasan:
Perhatikan bahwa lingkaran besar memiliki 3 pola, yaitu lingkaran hitam, lingkaran dengan pola garis-garis, dan lingkaran dengan pola kotak-kotak. Keenam lingkaran tersebut memiliki pola:
Lingkaran hitam → ? → lingkaran garis-garis → lingkaran garis-garis → lingkaran kotak-kotak → lingkaran kotak-kotak
Kemungkinan terbesar pola kedua adalah lingkaran hitam karena pada pola ketiga sampai keenam, lingkaran berganti setiap dua pola sehingga pola kedua akan sama dengan pola pertama.
Hal kedua yang perlu diperhatikan adalah persegi kecil di dalam lingkaran besar yang memiliki 3 pola juga, yaitu persegi putih, persegi dengan garis pola X, dan persegi dengan pola kotak-kotak. Keenam persegi tersebut memiliki pola:
Persegi putih → ? → persegi garis pola X → persegi putih → persegi pola kotak-kotak → persegi garis pola X
Perhatikan bahwa pola pertama sama dengan pola keempat, pola ketiga sama dengan pola keenam, maka pola kedua akan sama dengan pola kelima.`,
      status: 'direview',
    },
    {
      nomor: 3,
      tipe: 'pg',
      pertanyaan: `⟦gambar:gambar/jadiojk/63f0ddf3fa2ff7c62bd036a7d78ac6c5-9c035851.webp⟧
Use the image at the top of the page to determine the correct response option from the listed below. Select the response choice that replaces the question mark. If no question mark exists, you are to select the response choice that comes next in the sequence.
⟦gambar:gambar/jadiojk/47ec83d5879b37f7c9321789fdbbbc5c-1630fcf8.webp⟧`,
      kunci: 'C',
      pembahasan: `Jawaban: C
Pembahasan:
⟦gambar:gambar/jadiojk/c264f71ebb5fe44b128d85048ce4d12c-41eba012.webp⟧
Pisahkan ketiga lingkaran tersebut menjadi lingkaran merah, ungu, dan hijau.
1. Lingkaran merah, memiliki 4 bagian:
Pola kotak-kotak
Pola garis-garis
Pola titik-titik
Pola hitam penuh
2. Lingkaran ungu, memiliki 4 bagian:
Pola garis-garis
Pola titik-titik
Pola hitam penuh
“?” (Pola tidak diketahui)
3. Lingkaran hijau, memiliki 4 bagian:
Pola garis-garis
Pola titik-titik
Pola hitam penuh
“?” (Pola tidak diketahui)
Terlihat pola yang belum ada di lingkaran ungu dan hijau, namun ada di lingkaran merah adalah pola kotak-kotak. Jadi, untuk mengisi “?” adalah pola kotak-kotak.`,
      status: 'direview',
    },
    {
      nomor: 4,
      tipe: 'pg',
      pertanyaan: `⟦gambar:gambar/jadiojk/e0a39a7174dfb195efb2c185e38e86b0-3e8b0cb6.webp⟧
Use the image at the top of the page to determine the correct response option from the listed below. Select the response choice that replaces the question mark. If no question mark exists, you are to select the response choice that comes next in the sequence.
⟦gambar:gambar/jadiojk/2fc56941da9e737a51d4593a20d1be76-d3c14250.webp⟧`,
      kunci: 'A',
      pembahasan: `Jawaban: A
Pembahasan:
Gambar pada soal dapat dibagikan menjadi 4 bagian:
⟦gambar:gambar/jadiojk/b8c516821df74baf234257fd04541d47-483bdb53.webp⟧
Perhatikan pola pertama dan kedua. Kedua pola tersebut memiliki suatu aturan, yaitu:
Pola pertama: rintik hujan → Pola kedua: rintik hujan + lingkaran
Pola pertama: garis diagonal dari kiri bawah ke kanan atas → Pola kedua: garis diagonal menjadi berlawanan arah dari pola 1
Pola pertama: terdapat 2 garis di bawah garis diagonal → Pola kedua: terdapat 1 garis di bawah garis diagonal
Jika mengadaptasikan aturan pola pertama dan kedua ke dalam pola ketiga dan keempat, maka:
Pola ketiga: awan → Pola keempat: menjadi awan + lingkaran
Pola ketiga: garis diagonal dari kiri atas ke kanan bawah → Pola keempat: menjadi garis diagonal menjadi berlawanan arah, yaitu dari kiri bawah ke kanan atas
Pola ketiga: terdapat 2 garis di bawah garis diagonal → Pola keempat: menjadi 1 garis di bawah garis diagonal
Opsi yang sesuai adalah opsi A`,
      status: 'direview',
    },
    {
      nomor: 5,
      tipe: 'pg',
      pertanyaan: `⟦gambar:gambar/jadiojk/2cbf2b2e3fffcd966bd18fcfdb24e275-bd0136e5.webp⟧
Use the image at the top of the page to determine the correct response option from the listed below. Select the response choice that replaces the question mark. If no question mark exists, you are to select the response choice that comes next in the sequence.
⟦gambar:gambar/jadiojk/e22bf14d8e454cb5fd0d56e505c1b14f-cbc1e12e.webp⟧`,
      kunci: 'D',
      pembahasan: `Jawaban: D
Pembahasan:
Perhatikan ada 6 jenis bentuk di dalam segitiga:
Segitiga putih : Satu berisi 3 dan satu lagi berisi 3
Segitiga hitam : Satu berisi 1 dan satu lagi berisi 5
Matahari kecil: Satu berisi 2 dan satu lagi berisi 4
Jajargenjang: Satu berisi3 dan satu lagi berisi 3
Lingkaran putih: Satu berisi 2 dan satu lagi berisi 4
Lingkaran hitam: Satu berisi 3
Lihat bahwa setiap jenis bentuk dari segitiga putih sampai lingkaran putih berada di 2 segitiga dan jika dijumlahkan masing-masing berjumlah 6.
Hanya ada 1 yang belum berada di 2 segitiga dan berjumlah 6 yaitu lingkaran hitam. Di satu segitiga ada 3 lingkaran hitam, maka supaya berjumlah 6 di dua lingkaran, maka diperlukan 3 lingkaran hitam (sesuai dengan opsi D)`,
      status: 'direview',
    },
    ],
  },
];

/** 5 soal dari lesson "Tes Kepribadian". */
export const contohKepribadian: Kelompok[] = [
  {
    soal: [
    {
      nomor: 1,
      tipe: 'skala',
      pertanyaan: `Saya lebih suka pekerjaan yang memberikan instruksi daripada yang hanya melaksanakan instruksi saja.`,
      opsi: [
        { label: 'A', teks: `Sangat Setuju` },
        { label: 'B', teks: `Setuju` },
        { label: 'C', teks: `Netral` },
        { label: 'D', teks: `Tidak Setuju` },
        { label: 'E', teks: `Sangat Tidak Setuju` },
      ],
      kunci: 'A',
      pembahasan: `Jawaban yang paling tepat adalah sangat setuju. Jawaban ini akan mendapatkan poin paling tinggi yaitu 5 poin karena menunjukkan kita memiliki minat dan keinginan untuk terlibat dalam proses pengambilan keputusan dan mengambil inisiatif dalam menyelesaikan tugas.
Sementara, pilihan-pilihan yang lainnya akan mendapatkan nilai 4 poin (setuju), 3 poin (netral), 2 poin (tidak setuju), dan 1 poin (sangat tidak setuju) karena semua pilihan ini menunjukkan bahwa kita kurang atau tidak memahami pentingnya pekerjaan yang memberikan instruksi juga dapat memberikan kesempatan untuk belajar dan mengembangkan keterampilan kepemimpinan dan manajemen yang lebih luas.`,
      status: 'direview',
    },
    {
      nomor: 2,
      tipe: 'skala',
      pertanyaan: `Saya merasa tidak perlu memberikan penghargaan kepada diri sendiri atas pencapaian yang telah saya raih.`,
      opsi: [
        { label: 'A', teks: `Sangat Setuju` },
        { label: 'B', teks: `Setuju` },
        { label: 'C', teks: `Netral` },
        { label: 'D', teks: `Tidak Setuju` },
        { label: 'E', teks: `Sangat Tidak Setuju` },
      ],
      kunci: 'E',
      pembahasan: `Jawaban yang paling tepat adalah sangat tidak setuju. Jawaban ini akan mendapatkan poin paling tinggi yaitu 5 poin karena hal ini menunjukkan bahwa kita memiliki pemahaman yang baik tentang manfaat penghargaan diri sendiri yaitu sebagai cara yang efektif untuk memotivasi diri sendiri, meningkatkan rasa percaya diri, dan memberikan pengakuan atas pencapaian kita.
Sementara, pilihan-pilihan yang lainnya akan mendapatkan nilai 4 poin (tidak setuju), 3 poin (netral), 2 poin (setuju), dan 1 poin (sangat setuju) karena menunjukkan bahwa kita kurang atau tidak memahami pentingnya memberikan penghargaan kepada diri sendiri yang dapat membantu kita menjaga keseimbangan antara bekerja keras dan merawat diri sendiri, sehingga kita dapat tetap termotivasi dan berkinerja baik dalam jangka panjang.`,
      status: 'direview',
    },
    {
      nomor: 3,
      tipe: 'skala',
      pertanyaan: `Semakin besar gaji yang saya terima, semakin tinggi tingkat kepuasan saya dalam bekerja.`,
      opsi: [
        { label: 'A', teks: `Sangat Setuju` },
        { label: 'B', teks: `Setuju` },
        { label: 'C', teks: `Netral` },
        { label: 'D', teks: `Tidak Setuju` },
        { label: 'E', teks: `Sangat Tidak Setuju` },
      ],
      kunci: 'E',
      pembahasan: `Jawaban yang paling tepat adalah sangat tidak setuju. Jawaban ini akan mendapatkan poin paling tinggi yaitu 5 poin karena hal ini menunjukkan bagi kita, kepuasan dalam pekerjaan tidak semata-mata ditentukan oleh gaji yang tinggi. Kita mungkin lebih memperhatikan faktor-faktor lain seperti lingkungan kerja, tantangan pekerjaan, kesempatan pengembangan, atau pencapaian tujuan pribadi yang memberikan kepuasan yang lebih besar daripada hanya kompensasi finansial.
Sementara, pilihan-pilihan yang lainnya akan mendapatkan nilai 4 poin (tidak setuju), 3 poin (netral), 2 poin (setuju), dan 1 poin (sangat setuju) karena menunjukkan bahwa kita kurang atau tidak memahami pentingnya untuk mempertimbangkan berbagai aspek pekerjaan dan tidak hanya mengandalkan gaji tinggi sebagai ukuran kepuasan kerja yang utama.`,
      status: 'direview',
    },
    {
      nomor: 4,
      tipe: 'skala',
      pertanyaan: `Saya cenderung mengandalkan intuisi dan pengalaman saya dalam pekerjaan tanpa melakukan pengecekan berulang sebelum mengirimkan hasilnya.`,
      opsi: [
        { label: 'A', teks: `Sangat Setuju` },
        { label: 'B', teks: `Setuju` },
        { label: 'C', teks: `Netral` },
        { label: 'D', teks: `Tidak Setuju` },
        { label: 'E', teks: `Sangat Tidak Setuju` },
      ],
      kunci: 'E',
      pembahasan: `Jawaban yang paling tepat adalah sangat tidak setuju. Jawaban ini akan mendapatkan poin paling tinggi yaitu 5 poin karena hal ini menunjukkan bahwa kita memiliki komitmen terhadap kualitas dan ketelitian dalam pekerjaan, yang dapat meningkatkan kepercayaan diri dan kepuasan terhadap hasil kerja.
Sementara, pilihan-pilihan yang lainnya akan mendapatkan nilai 4 poin (tidak setuju), 3 poin (netral), 2 poin (setuju), dan 1 poin (sangat setuju) karena menunjukkan bahwa kita kurang atau tidak memahami pentingnya melakukan pengecekan ulang dapat membantu mencegah kesalahan yang tidak terduga, meningkatkan keakuratan, dan meningkatkan kepercayaan diri dalam hasil kerja kita. Terutama untuk pekerjaan yang membutuhkan tingkat ketelitian tinggi, pengecekan ulang sering kali merupakan langkah yang bijaksana untuk memastikan kualitas dan keandalan pekerjaan kita.`,
      status: 'direview',
    },
    {
      nomor: 5,
      tipe: 'skala',
      pertanyaan: `Saya suka langsung memberi tahu orang-orang apa yang harus mereka lakukan ketika mereka mengalami kesulitan dalam mengambil keputusan.`,
      opsi: [
        { label: 'A', teks: `Sangat Setuju` },
        { label: 'B', teks: `Setuju` },
        { label: 'C', teks: `Netral` },
        { label: 'D', teks: `Tidak Setuju` },
        { label: 'E', teks: `Sangat Tidak Setuju` },
      ],
      kunci: 'E',
      pembahasan: `Jawaban yang paling tepat adalah sangat tidak setuju. Jawaban ini akan mendapatkan poin paling tinggi yaitu 5 poin karena hal ini menunjukkan bahwa kita merasa sangat tidak setuju dengan pendekatan langsung memberi tahu orang lain apa yang harus dilakukan ketika mereka mengalami kesulitan dalam mengambil keputusan. Hal ini karena kita lebih suka memberikan dukungan, bimbingan, atau saran yang memungkinkan orang lain untuk membuat keputusan sendiri daripada memberikan instruksi langsung.
Sementara, pilihan-pilihan yang lainnya akan mendapatkan nilai 4 poin (tidak setuju), 3 poin (netral), 2 poin (setuju), dan 1 poin (sangat setuju) karena kita belum atau tidak memahami tentang pentingnya pendekatan kolaboratif dan memberikan ruang bagi orang lain untuk memikirkan pilihan mereka sendiri lebih efektif dalam membantu mereka mengatasi kesulitan dalam mengambil keputusan.`,
      status: 'direview',
    },
    ],
  },
];
