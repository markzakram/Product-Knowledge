import type { Kelompok } from '@/lib/skema';

/**
 * Contoh soal TKA SMA 2026, mata uji Bahasa Inggris: 20 soal dari BAB V (5.3)
 * laporan "Laporan TKA SMA Tahun 2026" (Product Management PT Cerebrum
 * Edukanesia Nusantara, Juni 2026).
 *
 * Ditulis tangan, BUKAN keluaran skrip/ke-data.mjs.
 *
 * Asal tiap bagian:
 *   - bacaan, soal, opsi, kunci, dan tingkat kesulitan: dari dokumen, nomor soal
 *     sama dengan nomor di dokumen; label "Materi" di pembahasan memakai label
 *     kolom Materi di BAB V;
 *   - pembahasan: TIDAK ada di dokumen, jadi disusun ulang dari teks bacaannya
 *     (ditulis dalam bahasa Indonesia, kutipan tetap berbahasa Inggris) dan
 *     berstatus 'draft'. Jangan dinaikkan ke 'direview' atau 'final' sebelum
 *     diperiksa tim akademik.
 *
 * Pemetaan tipe soal: PG = 'pg'; PGK Kategori = 'pg_kategori' (kunci per
 * pernyataan menurut urutan opsi); PGK MCMA = 'pg_kompleks' (kunci berisi semua
 * huruf yang benar). Isi dokumen: 8 PG, 3 PGK Kategori (4, 5, 13), 9 PGK MCMA
 * (1, 3, 6, 8, 10, 15, 17, 18, 20).
 *
 * Di dokumen, setiap soal mengulang bacaannya penuh. Di sini soal yang memakai
 * bacaan yang sama dikelompokkan di bawah satu stimulus, jadi urutan tampilnya
 * per bacaan, bukan menurut nomor. Lima bacaan: infografis "How to Study in the
 * Library" (soal 1, 4, 6, 11, 19), "My Experience as an Intern at a Sports Club"
 * (2, 15, 16), "Social Media Harms Teen Mental Health" (3, 8, 18, 20), "Exploring
 * Bali's Natural Wonders" (5, 12, 17), dan kisah Raja Hung Vuong VI dengan Son
 * Tinh dan Thuy Tinh (7, 9, 10, 13, 14).
 *
 * Catatan sumber: soal 8 dan soal 20 di dokumen identik (pertanyaan, opsi, dan
 * kunci sama). Di tabel soal 5 dokumen, judul kolom pertama tertulis "Conversation"
 * padahal pertanyaannya "Conservation"; di sini dipakai "Conservation". Opsi
 * soal 7 berupa kerangka beberapa baris; setiap barisnya diberi tanda "•" karena
 * tampilan opsi menyatukan baris baru.
 *
 * Gambar: satu berkas, public/gambar/cerebrum/tka-ing-infografis-perpustakaan.png,
 * dipakai lima soal. Gambar itu menjadi bahan soal, bukan bocoran jawaban, jadi
 * dipasang di stimulus. Dipasang lewat field `stimulus.gambar`, bukan penanda
 * ⟦gambar:...⟧ di `isi`: infografisnya tinggi (756 x 1133 px) dan penanda di dalam
 * teks dibatasi tinggi 420 px oleh tampilan, sehingga tulisannya tidak terbaca.
 */

const teksMagang = `Last summer, I had the opportunity to work as an intern at a local sports club. It was my first time working in a professional sports environment, and I was both nervous and excited. The internship went through a few phases, starting from orientation until finally jumping in to help during practices and games.

On my first day, I met the head coach, who welcomed me and explained my tasks. I had to set up cones for drills, bring water for the players, and check the training schedules. The first few days were challenging because I was not used to the morning routine. Every morning I had to wake up early, arrive on time, and follow instructions carefully. I worried about making mistakes, but the coaches were kind and guided me.

In the second month of my internship, I was trained to handle emergency situations. I got the chance to put that knowledge into practice when something unexpected happened. During football practice, a player fell and hurt his ankle. Everyone stopped, and I quickly ran to get the first aid kit. I helped the coach assess the injury and ensured the player stayed calm while we got him seated safely. Luckily, it wasn't serious, but the experience reinforced an important lesson: staying alert and prepared during emergencies can make a big difference.

At the end of my internship, the coaches held an evaluation and reflection session where they shared the results of their feedback. They highlighted my strengths in teamwork, responsibility, and communication, and even gave me a club T-shirt as a gift. I felt proud because I had improved in these areas. It was a great experience, and I hope to work in a sports club again in the future.`;

const teksMediaSosial = `In today's world, social media is a big part of many teenagers' daily lives. While it has some benefits, such as staying connected with friends, meeting new people, and learning about interesting topics, it also brings serious problems. I strongly believe that social media harms teen mental health, and we must pay more attention to this issue before it becomes even worse.

First, social media often makes teenagers compare themselves to others in an unhealthy way. When teens see pictures of people who seem perfect, they feel that they are not good enough. These feelings can lower self-esteem and lead to sadness, anxiety, or even depression. The problem is that many of these online posts are edited, filtered, or fake, but teens still feel pressure to look or live the same way. They may think that their own life is boring or not successful, which is simply not true.

Second, too much time on social media affects sleep and study habits. Many teenagers use their phones late at night, checking messages or watching videos, which reduces sleep time and quality. Without enough sleep, teens cannot focus well in class, and their grades may suffer. This can increase stress and worry about the future, making them feel overwhelmed.

Finally, online bullying, or cyberbullying, is another serious danger. Unlike face-to-face bullying, it can happen at any time and be shared with many people. Victims of cyberbullying often feel alone, scared, and helpless, and in some cases, it leads to serious mental health problems.

In conclusion, although social media has some good uses, its harm to teen mental health is much greater. Teenagers need support from parents, teachers, and society to use it wisely. Schools should teach students how to use social media in healthy ways, and parents should guide their children to take breaks and spend time offline. By doing this, we can help protect young people's mental health in this digital age.`;

const teksBali = `Bali, a beautiful island in Indonesia, is known for its stunning landscapes and rich culture. While many come for the beaches and temples, the island also offers natural attractions that amaze nature lovers from around the world. From national parks and waterfalls to terraced rice fields, Bali is full of natural beauty.

In the west lies West Bali National Park, a peaceful area filled with green forests, calm mangrove swamps, and colorful coral reefs along the sea. The air is fresh, and the scenery feels untouched. One of the park's most special sights is the Bali Starling—a rare white bird with bright blue around its eyes. Its soft song adds magic to the quiet forest. Visitors can walk along clear paths and enjoy the rich variety of plants and animals in this protected area.

Heading north, travelers find the scenic Munduk Waterfall, surrounded by green hills and forests. Water flows gently over rocky cliffs into a cool clear pool. Mist rises into the air, mixing with the calming sound of falling water. The walk to the waterfall passes through narrow paths lined with coffee and clove trees. Their fresh scent fills the air, offering a pleasant and peaceful experience. Munduk is the perfect place to relax and enjoy Bali's natural charm.

Near the cultural center Ubud, the famous Tegalalang rice terraces stretch across the hills in green steps. These terraces are shaped by generations of farmers who work the land by hand. In the morning, mist rises above the fields, and sunlight reflects off the water in the paddies. Farmers in wide-brimmed hats plant rice carefully, their feet sinking into the soft earth. Water flows gently through small canals, keeping the fields healthy and green. The quiet surroundings and slow rhythm of farm life create a peaceful and inspiring scene.

These natural wonders highlight Bali's dedication in preserving its environmental and cultural treasures. By exploring these sites, tourists not only experience the island's scenic beauty but also support ongoing conservation efforts, helping to ensure that Bali's wonders last for future generations.`;

const teksRaja = `King Hung Vuong VI had a beautiful daughter. He did not want her to marry just any prince. So, he made an announcement that he was looking for the right husband for her. Many princes came from faraway lands, but none of them was a good match for the princess.

Son Tinh was the Spirit of the Mountain, and Thuy Tinh was the Spirit of the Waters. One day, they both appeared as young noblemen and asked to marry the princess. They were equally talented, powerful, and respected. The King found it hard to choose, so he decided to give them a test. He said that the one who brought the proper wedding gifts first the next morning would marry his daughter.

The next day, Son Tinh arrived early with his gifts. The King kept his promise and gave the princess to him. Thuy Tinh was angry about losing. He challenged Son Tinh to fight for the princess. But Son Tinh refused, believing he had already won fairly. Furious, Thuy Tinh used his power to call the rivers and streams to rise. Soon, the land was covered with floods that destroyed crops and homes.

Son Tinh stayed calm in his mountain palace. Whenever the water rose, he made his mountains higher. After many days of fighting, Thuy Tinh grew tired and ordered the waters to retreat. Still, he never accepted his defeat. Every year, he tried again to attack, and this is how monsoons came to Vietnam.`;

export const contohBahasaInggris: Kelompok[] = [
  // ── Bacaan 1: infografis perpustakaan (soal 1, 4, 6, 11, 19) ──────────
  {
    stimulus: {
      judul: 'Infografis "How to Study in the Library"',
      gambar: 'gambar/cerebrum/tka-ing-infografis-perpustakaan.png',
    },
    soal: [
      {
        nomor: 1,
        tipe: 'pg_kompleks',
        tingkat: 'mudah',
        pertanyaan: `How can we decide a certain table is perfect for studying according to the text?

There is more than one correct answer. Click on every correct answer!`,
        opsi: [
          { label: 'A', teks: `It has good lighting` },
          { label: 'B', teks: `It provides white noise` },
          { label: 'C', teks: `It is located near the entrance` },
          { label: 'D', teks: `It is far from the toilet` },
          { label: 'E', teks: `It provides stationery` },
        ],
        kunci: 'A, D',
        pembahasan: `Materi: Pemahaman Tekstual · Menemukan/mengidentifikasi informasi. Tipe: PGK MCMA.
Bahan soal adalah infografis di atas. Langkah 2 ("Choose quiet spot"): "Find a table with good light and little noise. Avoid sitting too close to the entrance or the restroom."
A. Benar: "good light" = good lighting.
D. Benar: dianjurkan menghindari tempat dekat restroom, yaitu jauh dari toilet.
B. Salah: yang dianjurkan "little noise" (sedikit bising), bukan white noise.
C. Salah: justru dianjurkan menghindari tempat dekat pintu masuk.
E. Salah: alat tulis dibawa sendiri (langkah 1: "Bring your books, notes, stationery, and water"), bukan disediakan oleh meja.
Jawaban: A, D`,
        status: 'draft',
      },
      {
        nomor: 4,
        tipe: 'pg_kategori',
        tingkat: 'mudah',
        pertanyaan: `The following activities are suggested in the infographic. Categorize them as either preparation or breaks during study.`,
        opsi: [
          { label: 'A', teks: `Standing up` },
          { label: 'B', teks: `Bringing a book` },
          { label: 'C', teks: `Doing stretch` },
        ],
        kategori: ['Preparation', 'Breaks'],
        kunci: 'Breaks, Preparation, Breaks',
        pembahasan: `Materi: Pemahaman Tekstual · Mengklasifikasi. Tipe: PGK Kategori.
Langkah 5 ("Take short breaks"): "After one hour, stand up, stretch, or walk for five minutes." Jadi standing up dan doing stretch termasuk Breaks.
Langkah 1 ("Prepare your materials"): "Bring your books, notes, stationery, and water." Jadi bringing a book termasuk Preparation.
Jawaban: A. Breaks; B. Preparation; C. Breaks`,
        status: 'draft',
      },
      {
        nomor: 6,
        tipe: 'pg_kompleks',
        tingkat: 'mudah',
        pertanyaan: `Which actions show disrespect for other students?

There is more than one correct answer. Click on every correct answer!`,
        opsi: [
          { label: 'A', teks: `Speaking loudly to friends.` },
          { label: 'B', teks: `Keeping the phone silent.` },
          { label: 'C', teks: `Eating snacks at the desk.` },
          { label: 'D', teks: `Playing music in the corner.` },
          { label: 'E', teks: `Moving chairs noisily.` },
        ],
        kunci: 'A, C, D, E',
        pembahasan: `Materi: Pemahaman Tekstual · Mengklasifikasi. Tipe: PGK MCMA.
Langkah 4 ("Follow library rules"): "Speak softly, keep your phone on silent, and do not eat inside. Respect other students."
A. Benar: berbicara keras melanggar "speak softly".
C. Benar: makan di meja melanggar "do not eat inside".
D dan E. Benar: memutar musik dan menggeser kursi dengan berisik mengganggu ketenangan perpustakaan, jadi tidak menghormati siswa lain.
B. Salah: menyenyapkan ponsel justru yang dianjurkan.
Jawaban: A, C, D, E`,
        status: 'draft',
      },
      {
        nomor: 11,
        tipe: 'pg',
        tingkat: 'mudah',
        pertanyaan: `Who needs to read this infographic?`,
        opsi: [
          { label: 'A', teks: `The students of that school` },
          { label: 'B', teks: `People who happen to visit the school` },
          { label: 'C', teks: `The librarian of another school` },
          { label: 'D', teks: `The headmaster of that school` },
          { label: 'E', teks: `Parents who come to pick up their kids` },
        ],
        kunci: 'A',
        pembahasan: `Materi: Pemahaman Inferensial · Menyimpulkan topik, makna, target pembaca, atau pesan moral.
Infografis berjudul "How to Study in the Library" dan dibuka dengan "Follow these steps to use your time well": isinya langkah-langkah belajar di perpustakaan sekolah. Yang memerlukannya adalah siswa sekolah itu sendiri (A). Pengunjung lain, pustakawan sekolah lain, kepala sekolah, dan orang tua penjemput bukan pengguna perpustakaan untuk belajar.
Jawaban: A`,
        status: 'draft',
      },
      {
        nomor: 19,
        tipe: 'pg',
        tingkat: 'mudah',
        pertanyaan: `You find this infographic in front of your school library. What will you do before your next visit to the library?`,
        opsi: [
          { label: 'A', teks: `Making sure that I bring my water bottle and lunch with me.` },
          { label: 'B', teks: `Bringing the books and stationery that I will use.` },
          { label: 'C', teks: `Organizing the book that I borrowed from the library.` },
          { label: 'D', teks: `Walking for five minutes so I can focus more when studying.` },
          { label: 'E', teks: `Making sure you look fresh because you will meet other students.` },
        ],
        kunci: 'B',
        pembahasan: `Materi: Evaluasi dan Apresiasi · Menanggapi isi teks.
Yang dilakukan SEBELUM kunjungan berikutnya adalah persiapan: langkah 1 ("Prepare your materials"): "Bring your books, notes, stationery, and water." Opsi B sesuai (buku dan alat tulis).
A menambahkan makan siang, yang tidak disebut (dan makan di dalam dilarang); C (menata buku) adalah langkah 6, dilakukan sebelum pulang; D (berjalan lima menit) adalah istirahat di langkah 5, dilakukan saat belajar; E tidak ada di infografis.
Jawaban: B`,
        status: 'draft',
      },
    ],
  },

  // ── Bacaan 2: magang di klub olahraga (soal 2, 15, 16) ────────────────
  {
    stimulus: { judul: 'My Experience as an Intern at a Sports Club', isi: teksMagang },
    soal: [
      {
        nomor: 2,
        tipe: 'pg',
        tingkat: 'mudah',
        pertanyaan: `During the internship, what did the writer do every morning?`,
        opsi: [
          { label: 'A', teks: `Made schedules and explained them to the coaches.` },
          { label: 'B', teks: `Played football with the team and got the first aid kit.` },
          { label: 'C', teks: `Prepared a club gift, guided the coaches, and gave t-shirts.` },
          { label: 'D', teks: `Woke up early, arrived on time, and followed the instructions.` },
          { label: 'E', teks: `Set up cones, brought water, and checked emergency schedules.` },
        ],
        kunci: 'D',
        pembahasan: `Materi: Pemahaman Tekstual · Menemukan/mengidentifikasi informasi.
Paragraf kedua menyebut kegiatan rutin pagi: "Every morning I had to wake up early, arrive on time, and follow instructions carefully." Itu sama dengan opsi D.
A tidak disebut. B dan C bukan kegiatan tiap pagi (mengambil kotak P3K terjadi sekali saat latihan; kaus klub diberikan di akhir magang). E mencampur tugas hari pertama (menyiapkan kerucut, membawa air, memeriksa jadwal latihan) dengan "emergency schedules" yang tidak disebut.
Jawaban: D`,
        status: 'draft',
      },
      {
        nomor: 15,
        tipe: 'pg_kompleks',
        tingkat: 'sedang',
        pertanyaan: `What are the best words to describe the writer's personality during the internship?

There is more than one correct answer. Click on every correct answer!`,
        opsi: [
          { label: 'A', teks: `Careful and ready to help` },
          { label: 'B', teks: `Confident and enjoys working alone` },
          { label: 'C', teks: `Responsible and willing to learn` },
          { label: 'D', teks: `Friendly and works well with others` },
          { label: 'E', teks: `Creative and likes to try new things` },
        ],
        kunci: 'A, C, D',
        pembahasan: `Materi: Pemahaman Inferensial · Menyimpulkan karakter tokoh. Tipe: PGK MCMA.
A. Benar: ia mengikuti instruksi "carefully" dan segera berlari mengambil kotak P3K (ready to help).
C. Benar: pelatih menyoroti kekuatannya dalam "responsibility", dan ia dilatih menangani keadaan darurat lalu mempraktikkannya (willing to learn).
D. Benar: ia disebut kuat dalam "teamwork" dan "communication", serta bekerja bersama pelatih.
B. Salah: ia merasa "nervous" di awal dan bekerja dalam tim, bukan menikmati bekerja sendiri.
E. Salah: tidak ada petunjuk bahwa ia kreatif atau suka mencoba hal baru.
Jawaban: A, C, D`,
        status: 'draft',
      },
      {
        nomor: 16,
        tipe: 'pg',
        tingkat: 'mudah',
        pertanyaan: `What will the writer most likely do after finishing the internship?`,
        opsi: [
          { label: 'A', teks: `Considering a career in a sports medicine` },
          { label: 'B', teks: `Stop working and focus only on school` },
          { label: 'C', teks: `Look for another chance to work in a sports club` },
          { label: 'D', teks: `Study medicine to become a doctor` },
          { label: 'E', teks: `Train as a professional football player` },
        ],
        kunci: 'C',
        pembahasan: `Materi: Pemahaman Inferensial · Memprediksi hasil cerita/tindakan berikutnya.
Kalimat penutup teks: "It was a great experience, and I hope to work in a sports club again in the future." Tindakan yang paling mungkin: mencari kesempatan lain untuk bekerja di klub olahraga (C).
A dan D tidak didukung teks (ia tidak menyebut minat pada kedokteran olahraga atau kedokteran); B bertentangan dengan harapannya bekerja lagi; E tidak disebut.
Jawaban: C`,
        status: 'draft',
      },
    ],
  },

  // ── Bacaan 3: media sosial dan kesehatan mental (soal 3, 8, 18, 20) ───
  {
    stimulus: { judul: 'Social Media Harms Teen Mental Health', isi: teksMediaSosial },
    soal: [
      {
        nomor: 3,
        tipe: 'pg_kompleks',
        tingkat: 'sedang',
        pertanyaan: `What will happen if teenagers have poor sleep quality?

There is more than one correct answer. Click on every correct answer!`,
        opsi: [
          { label: 'A', teks: `Teenagers' grades could drop.` },
          { label: 'B', teks: `Teens struggle to focus in class.` },
          { label: 'C', teks: `Teens are likely to feel stressed.` },
          { label: 'D', teks: `Teenagers will be more confident` },
          { label: 'E', teks: `Teens will become mentally strong.` },
        ],
        kunci: 'A, B, C',
        pembahasan: `Materi: Pemahaman Tekstual · Menemukan/mengidentifikasi informasi. Tipe: PGK MCMA.
Paragraf ketiga: "Without enough sleep, teens cannot focus well in class, and their grades may suffer. This can increase stress and worry about the future, making them feel overwhelmed."
A. Benar (grades may suffer). B. Benar (cannot focus well in class). C. Benar (increase stress and worry).
D dan E. Salah: teks menggambarkan dampak negatif, bukan peningkatan rasa percaya diri atau ketangguhan mental.
Jawaban: A, B, C`,
        status: 'draft',
      },
      {
        nomor: 8,
        tipe: 'pg_kompleks',
        tingkat: 'sulit',
        pertanyaan: `Which of the following additional facts would most likely make the text more persuasive?

There is more than one correct answer. Click on every correct answer!`,
        opsi: [
          { label: 'A', teks: `Research data showing the number of teenagers experiencing anxiety or depression because of social media.` },
          { label: 'B', teks: `Personal stories from teenagers who feel happier after reducing their social media use.` },
          { label: 'C', teks: `Statistics about how many teenagers use social media every day.` },
          { label: 'D', teks: `A list of the most popular social media platforms among teenagers.` },
          { label: 'E', teks: `Expert opinions from doctors or psychologists about the dangers of social media for mental health.` },
        ],
        kunci: 'A, B, E',
        pembahasan: `Materi: Pemahaman Inferensial · Menyimpulkan detail pendukung. Tipe: PGK MCMA.
Teks adalah esai argumentatif dengan klaim bahwa media sosial merusak kesehatan mental remaja. Fakta tambahan yang paling memperkuat klaim itu adalah bukti dan otoritas:
A. Benar: data riset tentang remaja yang cemas atau depresi karena media sosial.
B. Benar: kisah remaja yang lebih bahagia setelah mengurangi media sosial mendukung klaim bahwa media sosial berdampak buruk.
E. Benar: pendapat dokter atau psikolog adalah dukungan ahli.
C dan D. Salah: statistik jumlah pengguna harian dan daftar platform populer hanya menggambarkan penggunaan, tidak menunjukkan adanya bahaya.
Catatan: soal ini identik dengan Soal 20 di dokumen sumber.
Jawaban: A, B, E`,
        status: 'draft',
      },
      {
        nomor: 18,
        tipe: 'pg_kompleks',
        tingkat: 'sedang',
        pertanyaan: `Which statements from the text support the author's argument that social media harms teen mental health?

There is more than one correct answer. Click on every correct answer!`,
        opsi: [
          { label: 'A', teks: `"When teens see pictures of people who seem perfect, they feel that they are not good enough."` },
          { label: 'B', teks: `"Many teenagers use their phones late at night, which reduces sleep time and quality."` },
          { label: 'C', teks: `"Schools should teach students how to use social media in healthy ways."` },
          { label: 'D', teks: `"Social media helps teens stay connected with friends and learn about interesting topics."` },
          { label: 'E', teks: `"Victims of cyberbullying often feel alone, scared, and helpless."` },
        ],
        kunci: 'A, B, E',
        pembahasan: `Materi: Evaluasi dan Apresiasi · Menilai kesesuaian. Tipe: PGK MCMA.
Pernyataan yang mendukung argumen harus menunjukkan dampak buruk media sosial:
A. Benar: membandingkan diri dengan orang lain membuat remaja merasa tidak cukup baik (harga diri turun, sedih, cemas).
B. Benar: memakai ponsel larut malam mengurangi waktu dan kualitas tidur.
E. Benar: korban cyberbullying merasa sendirian, takut, dan tidak berdaya.
C. Salah: ini saran (rekomendasi), bukan bukti bahaya.
D. Salah: ini manfaat media sosial, bukan dukungan bagi argumen penulis.
Jawaban: A, B, E`,
        status: 'draft',
      },
      {
        nomor: 20,
        tipe: 'pg_kompleks',
        tingkat: 'sulit',
        pertanyaan: `Which of the following additional facts would most likely make the text more persuasive?

There is more than one correct answer. Click on every correct answer!`,
        opsi: [
          { label: 'A', teks: `Research data showing the number of teenagers experiencing anxiety or depression because of social media.` },
          { label: 'B', teks: `Personal stories from teenagers who feel happier after reducing their social media use.` },
          { label: 'C', teks: `Statistics about how many teenagers use social media every day.` },
          { label: 'D', teks: `A list of the most popular social media platforms among teenagers.` },
          { label: 'E', teks: `Expert opinions from doctors or psychologists about the dangers of social media for mental health.` },
        ],
        kunci: 'A, B, E',
        pembahasan: `Materi: Evaluasi dan Apresiasi · Menanggapi isi teks. Tipe: PGK MCMA.
Soal ini identik dengan Soal 8 di dokumen sumber (pertanyaan, opsi, dan kunci sama), hanya berada di kelompok materi yang berbeda.
Teks adalah esai argumentatif. Fakta tambahan yang paling memperkuatnya adalah bukti dan otoritas:
A. Benar: data riset tentang remaja yang cemas atau depresi karena media sosial.
B. Benar: kisah remaja yang lebih bahagia setelah mengurangi media sosial.
E. Benar: pendapat dokter atau psikolog.
C dan D. Salah: statistik pengguna harian dan daftar platform populer hanya menggambarkan penggunaan, tidak menunjukkan bahaya.
Jawaban: A, B, E`,
        status: 'draft',
      },
    ],
  },

  // ── Bacaan 4: keajaiban alam Bali (soal 5, 12, 17) ────────────────────
  {
    stimulus: { judul: `Exploring Bali's Natural Wonders`, isi: teksBali },
    soal: [
      {
        nomor: 5,
        tipe: 'pg_kategori',
        tingkat: 'sedang',
        pertanyaan: `What is the main purpose of visiting these places: to support conservation or to relax?
Click Conservation or Relaxation for each place!`,
        opsi: [
          { label: 'A', teks: `Munduk Waterfall` },
          { label: 'B', teks: `West Bali National Park` },
          { label: 'C', teks: `Tegalalang Rice Terraces` },
        ],
        kategori: ['Conservation', 'Relaxation'],
        kunci: 'Relaxation, Conservation, Relaxation',
        pembahasan: `Materi: Pemahaman Tekstual · Mengklasifikasi. Tipe: PGK Kategori.
A. Relaxation: "Munduk is the perfect place to relax and enjoy Bali's natural charm."
B. Conservation: West Bali National Park digambarkan sebagai "protected area" dengan hutan, mangrove, terumbu karang, dan burung Bali Starling yang langka, yaitu kawasan yang dilindungi.
C. Relaxation: "The quiet surroundings and slow rhythm of farm life create a peaceful and inspiring scene."
Catatan: di dokumen, judul kolom pertama tabelnya tertulis "Conversation" (salah ketik); pertanyaan dan kuncinya memakai "Conservation".
Jawaban: A. Relaxation; B. Conservation; C. Relaxation`,
        status: 'draft',
      },
      {
        nomor: 12,
        tipe: 'pg',
        tingkat: 'sedang',
        pertanyaan: `The text mainly talks about Bali's ...`,
        opsi: [
          { label: 'A', teks: `wildlife species and nature lovers` },
          { label: 'B', teks: `unique cultural treasures and sites.` },
          { label: 'C', teks: `stunning nature and remarkable sites.` },
          { label: 'D', teks: `generations and cultural conservation.` },
          { label: 'E', teks: `scenic beauty and local farming practices.` },
        ],
        kunci: 'C',
        pembahasan: `Materi: Pemahaman Inferensial · Menyimpulkan topik, makna, target pembaca, atau pesan moral.
Teks membuka dengan Bali yang dikenal karena "stunning landscapes and rich culture", lalu menyoroti atraksi alamnya ("natural attractions"): West Bali National Park, Munduk Waterfall, dan Tegalalang rice terraces, dan menutup dengan "natural wonders". Pokok bahasannya: alam yang memukau dan tempat-tempat yang menakjubkan (C).
A terlalu sempit (hanya satu burung), B salah (budaya bukan fokus), D dan E hanya menyentuh sebagian isi.
Jawaban: C`,
        status: 'draft',
      },
      {
        nomor: 17,
        tipe: 'pg_kompleks',
        tingkat: 'sedang',
        pertanyaan: `Which parts of the text best support the description of Bali as a "Bali is full of natural beauty"?

There is more than one correct answer. Click on every correct answer!`,
        opsi: [
          { label: 'A', teks: `A peaceful area filled with green forests, calm mangrove swamps, and colorful coral reefs along the sea.` },
          { label: 'B', teks: `These terraces are shaped by generations of farmers who work the land by hand.` },
          { label: 'C', teks: `Water flows gently over rocky cliffs into a cool, clear pool. Mist rises into the air, mixing with the calming sound of falling water.` },
          { label: 'D', teks: `In the morning, mist rises above the fields, and sunlight reflects off the water in the paddies.` },
          { label: 'E', teks: `Farmers in wide-brimmed hats plant rice carefully, their feet sinking into the soft earth.` },
        ],
        kunci: 'A, C, D',
        pembahasan: `Materi: Evaluasi dan Apresiasi · Menilai kesesuaian. Tipe: PGK MCMA.
Bagian yang paling mendukung "full of natural beauty" adalah yang menggambarkan pemandangan alamnya:
A. Benar: hutan hijau, rawa mangrove, dan terumbu karang berwarna-warni.
C. Benar: air terjun yang mengalir ke kolam jernih, kabut, dan suara air.
D. Benar: kabut dan sinar matahari yang memantul di sawah.
B dan E. Salah: keduanya tentang kegiatan petani (bentuk terasering oleh tangan manusia, menanam padi), bukan keindahan alam itu sendiri.
Jawaban: A, C, D`,
        status: 'draft',
      },
    ],
  },

  // ── Bacaan 5: Raja Hung Vuong VI (soal 7, 9, 10, 13, 14) ──────────────
  {
    stimulus: { judul: 'Cerita tentang Raja Hung Vuong VI, Son Tinh, dan Thuy Tinh', isi: teksRaja },
    soal: [
      {
        nomor: 7,
        tipe: 'pg',
        tingkat: 'sedang',
        pertanyaan: `Which of the following outlines shows the correct main points of the story?`,
        opsi: [
          {
            label: 'A',
            teks: `• King Hung Vuong VI wanted the best husband for his daughter.
• Many princes came but none was suitable.
• Son Tinh and Thuy Tinh both wanted to marry her.
• The King gave them a test.
• Thuy Tinh arrived first with the wedding gifts.
• The princess was given to Thuy Tinh.`,
          },
          {
            label: 'B',
            teks: `• King Hung Vuong VI had a beautiful daughter.
• He announced he was looking for the right husband.
• Son Tinh and Thuy Tinh appeared and asked to marry her.
• The King gave them a test with wedding gifts.
• Son Tinh arrived first and married the princess.
• Thuy Tinh attacked with floods but was defeated.`,
          },
          {
            label: 'C',
            teks: `• King Hung Vuong VI asked his daughter to choose her husband.
• The princess liked both Son Tinh and Thuy Tinh.
• The King delayed his decision for many days.
• Finally, he asked them to fight each other.
• Thuy Tinh lost the battle and left the land.
• The country never suffered from floods again.`,
          },
          {
            label: 'D',
            teks: `• King Hung Vuong VI searched for a husband for his daughter.
• Son Tinh and Thuy Tinh wanted to marry her.
• The King gave them a challenge.
• Thuy Tinh lost the test and became angry.
• He called the waters to rise and destroy the land.
• Son Tinh drowned in the floods.`,
          },
          {
            label: 'E',
            teks: `• The King wanted a nobleman for his daughter.
• He invited many princes to the palace.
• Son Tinh and Thuy Tinh competed for the princess.
• Son Tinh refused the challenge of gifts.
• The King chose Thuy Tinh as the winner.
• Thuy Tinh ruled peacefully without floods.`,
          },
        ],
        kunci: 'B',
        pembahasan: `Materi: Pemahaman Tekstual · Membuat kerangka.
Poin utama cerita berurutan: (1) Raja ingin suami yang tepat bagi putrinya; (2) Son Tinh dan Thuy Tinh melamar; (3) Raja memberi ujian hadiah pernikahan; (4) Son Tinh datang lebih dulu dan menikahi sang putri; (5) Thuy Tinh marah dan menyerang dengan banjir tetapi gagal; setelah berhari-hari ia lelah dan memerintahkan air untuk surut. Kerangka B memuat urutan ini dengan benar.
A salah (Thuy Tinh datang lebih dulu), C salah (Raja tidak menunda, tidak mengadu mereka berperang, dan banjir tetap datang tiap tahun), D salah (Thuy Tinh tidak kalah dalam ujian; Son Tinh tidak tenggelam), E salah (Son Tinh tidak menolak ujian hadiah, Raja memilih Son Tinh, dan Thuy Tinh justru menyerang).
Jawaban: B`,
        status: 'draft',
      },
      {
        nomor: 9,
        tipe: 'pg',
        tingkat: 'mudah',
        pertanyaan: `What does the phrase "kept his promise" in the text mean?`,
        opsi: [
          { label: 'A', teks: `Forgot about his decision.` },
          { label: 'B', teks: `Changed his mind about the wedding.` },
          { label: 'C', teks: `Did what he had promised to do.` },
          { label: 'D', teks: `Delayed the marriage for many days.` },
          { label: 'E', teks: `The King asked the princes to bring more gifts.` },
        ],
        kunci: 'C',
        pembahasan: `Materi: Pemahaman Inferensial · Menyimpulkan topik, makna, target pembaca, atau pesan moral.
Raja sebelumnya berjanji bahwa yang lebih dulu membawa hadiah pernikahan akan menikahi putrinya. Son Tinh datang lebih dulu, lalu "The King kept his promise and gave the princess to him": Raja menepati janji, yaitu melakukan apa yang telah ia janjikan (C). Opsi lain bertentangan dengan alur cerita.
Jawaban: C`,
        status: 'draft',
      },
      {
        nomor: 10,
        tipe: 'pg_kompleks',
        tingkat: 'sedang',
        pertanyaan: `What is the main lesson of the story?

There is more than one correct answer. Click on every correct answer!`,
        opsi: [
          { label: 'A', teks: `Accept defeat gracefully to prevent harm to others.` },
          { label: 'B', teks: `Be fair and follow the agreed rules in competitions.` },
          { label: 'C', teks: `Choose peaceful solutions rather than angry reactions.` },
          { label: 'D', teks: `Prepare honestly and present your gifts properly.` },
          { label: 'E', teks: `Respect leaders' decisions and community agreements.` },
        ],
        kunci: 'A, B',
        pembahasan: `Materi: Pemahaman Inferensial · Menyimpulkan topik, makna, target pembaca, atau pesan moral. Tipe: PGK MCMA.
Konflik cerita: Son Tinh menang secara adil, tetapi Thuy Tinh tidak menerima kekalahan ("he never accepted his defeat") dan membalas dengan banjir yang merusak tanaman dan rumah. Pesan yang paling langsung:
A. Benar: menerima kekalahan dengan lapang dada agar tidak merugikan orang lain.
B. Benar: bersikap adil dan menaati aturan yang disepakati dalam persaingan ("believing he had already won fairly").
C, D, dan E tidak dipilih oleh kunci dokumen. C (memilih solusi damai) dan E (menghormati keputusan pemimpin) juga masuk akal sebagai pesan cerita, jadi butir ini sebaiknya ditinjau tim akademik; D (menyiapkan hadiah dengan jujur) bukan pesan yang menonjol.
Jawaban: A, B`,
        status: 'draft',
      },
      {
        nomor: 13,
        tipe: 'pg_kategori',
        tingkat: 'mudah',
        pertanyaan: `After reading the text, we can see that Son tinh and Thuy tinh are different, but they also have some similarities. Decide if each trait shows a similarity or a difference.`,
        opsi: [
          { label: 'A', teks: `Both are not humans` },
          { label: 'B', teks: `They can control the elements` },
          { label: 'C', teks: `They love the king's daughter` },
        ],
        kategori: ['Similarity', 'Difference'],
        kunci: 'Similarity, Similarity, Difference',
        pembahasan: `Materi: Pemahaman Inferensial · Menyimpulkan perbandingan. Tipe: PGK Kategori.
A. Similarity: keduanya roh ("Spirit of the Mountain" dan "Spirit of the Waters"), bukan manusia, meski tampil sebagai bangsawan muda.
B. Similarity: keduanya menguasai alam (Son Tinh meninggikan gunung, Thuy Tinh memanggil sungai dan aliran air).
C. Kunci dokumen: Difference. Catatan: teks menyebut keduanya sama-sama melamar sang putri ("they both appeared as young noblemen and asked to marry the princess"), yang lebih menunjukkan kesamaan, dan tidak ada kalimat yang menyatakan salah satunya tidak mencintainya. Kunci C tampak janggal dan perlu dikonfirmasi tim akademik.
Jawaban (menurut kunci dokumen): A. Similarity; B. Similarity; C. Difference`,
        status: 'draft',
      },
      {
        nomor: 14,
        tipe: 'pg',
        tingkat: 'mudah',
        pertanyaan: `Why did Thuy Tinh attack Son Tinh after the wedding?`,
        opsi: [
          { label: 'A', teks: `He was jealous of Son Tinh's victory` },
          { label: 'B', teks: `He believed the King had lied to him.` },
          { label: 'C', teks: `He thought the princess loved him more.` },
          { label: 'D', teks: `He wanted to show off his power to the king.` },
          { label: 'E', teks: `He had promised to fight until death.` },
        ],
        kunci: 'A',
        pembahasan: `Materi: Pemahaman Inferensial · Menyimpulkan hubungan sebab-akibat.
Sebabnya tertulis di teks: "Thuy Tinh was angry about losing" dan "Still, he never accepted his defeat". Ia menyerang karena marah dan iri atas kemenangan Son Tinh (A). Teks tidak menyebut Raja berbohong (B), sang putri lebih mencintainya (C), keinginan pamer kekuatan kepada Raja (D), atau sumpah bertarung sampai mati (E).
Jawaban: A`,
        status: 'draft',
      },
    ],
  },
];
