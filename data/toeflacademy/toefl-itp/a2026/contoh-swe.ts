import type { Kelompok } from '@/lib/skema';

/**
 * Contoh Structure and Written Expression: paket 1 seed-2026 dari Toefl Generator
 * (output/seed-2026/batch.json), dibuat AI dan belum direview. Nomor 1-15
 * Structure, 16-40 Written Expression.
 */
export const contohStructure: Kelompok[] = [
  {
    soal: [
      {
        nomor: 1,
        lesson: 'Structure > Verbs',
        tipe: 'pg',
        pertanyaan: `The city council has decided ___ a new park near the river.`,
        opsi: [
          { label: 'A', teks: `to build` },
          { label: 'B', teks: `build` },
          { label: 'C', teks: `building` },
          { label: 'D', teks: `built` },
        ],
        kunci: 'A',
        pembahasan: `Jawaban: A
Pembahasan:
Soal ini menguji gerund dan infinitive. 'Decide' diikuti to infinitive: decide + to V1.
Rumus: avoid, consider, enjoy, suggest, recommend, look forward to, be used to + V-ing; decide, plan, hope, agree, be allowed + to V1.
Opsi B ("build") salah karena perlu 'to' sebelum verb dasar.
Opsi C ("building") salah karena 'decide' diikuti to infinitive.
Opsi D ("built") salah karena V3 tidak dipakai setelah 'decide'.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 2,
        lesson: 'Structure > Nouns, Pronouns, and Word Forms',
        tipe: 'pg',
        pertanyaan: `Only ___ students passed the advanced calculus exam this year.`,
        opsi: [
          { label: 'A', teks: `an` },
          { label: 'B', teks: `a little` },
          { label: 'C', teks: `a few` },
          { label: 'D', teks: `much` },
        ],
        kunci: 'C',
        pembahasan: `Jawaban: C
Pembahasan:
Soal ini menguji noun dan quantifier (countable/uncountable). 'Students' adalah countable noun jamak, jadi memakai 'a few'.
Rumus: much/little/less + uncountable; many/few/fewer + countable jamak; countable tunggal butuh artikel.
Opsi A ("an") salah karena artikel 'an' tidak dipakai sebelum kata benda jamak.
Opsi B ("a little") salah karena 'a little' untuk uncountable noun, padahal 'students' bisa dihitung.
Opsi D ("much") salah karena 'much' untuk uncountable noun.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 3,
        lesson: 'Structure > Nouns, Pronouns, and Word Forms',
        tipe: 'pg',
        pertanyaan: `The scientist explained the theory very ___.`,
        opsi: [
          { label: 'A', teks: `clearly` },
          { label: 'B', teks: `clear` },
          { label: 'C', teks: `clarity` },
          { label: 'D', teks: `clearness` },
        ],
        kunci: 'A',
        pembahasan: `Jawaban: A
Pembahasan:
Soal ini menguji word form (bentuk kata). Kata setelah 'very' di sini menerangkan cara menjelaskan (verb), jadi memakai adverb: clearly.
Rumus: adjective menerangkan noun; adverb menerangkan verb atau adjective; noun dipakai setelah artikel/possessive dan sebelum 'of'.
Opsi B ("clear") salah karena yang diterangkan adalah verb 'explained', jadi butuh adverb.
Opsi C ("clarity") salah karena noun tidak bisa menerangkan verb.
Opsi D ("clearness") salah karena noun tidak bisa menerangkan verb.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 4,
        lesson: 'Structure > Clauses and Sentence Patterns',
        tipe: 'pg',
        pertanyaan: `The report shows ___ most parents support the new park.`,
        opsi: [
          { label: 'A', teks: `what` },
          { label: 'B', teks: `who` },
          { label: 'C', teks: `that` },
          { label: 'D', teks: `which` },
        ],
        kunci: 'C',
        pembahasan: `Jawaban: C
Pembahasan:
Soal ini menguji noun clause. Klausa 'most parents support the new park' sudah lengkap, jadi dihubungkan dengan 'that'.
Rumus: noun clause memakai urutan pernyataan: kata tanya/that/whether + subjek + verb.
Opsi A ("what") salah karena 'what' tidak dipakai sebelum klausa lengkap.
Opsi B ("who") salah karena 'who' tidak cocok karena klausa sudah punya subjek.
Opsi D ("which") salah karena 'which' tidak dipakai sebagai penghubung setelah 'shows'.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 5,
        lesson: 'Structure > Verbs',
        tipe: 'pg',
        pertanyaan: `The new train station ___ by a team of local engineers in 2021.`,
        opsi: [
          { label: 'A', teks: `was designing` },
          { label: 'B', teks: `has designed` },
          { label: 'C', teks: `was designed` },
          { label: 'D', teks: `designed` },
        ],
        kunci: 'C',
        pembahasan: `Jawaban: C
Pembahasan:
Soal ini menguji passive voice (kalimat pasif). Bangunan itu dirancang oleh tim insinyur, jadi kalimatnya pasif. Tahun 2021 menandai lampau: was + V3.
Rumus: pasif = be + V3 (past participle); pelaku boleh disebut dengan 'by'.
Opsi A ("was designing") salah karena past continuous aktif, bukan pasif.
Opsi B ("has designed") salah karena bentuk aktif dan tense tidak sesuai dengan tahun 2021.
Opsi D ("designed") salah karena subjek menerima aksi dan ada 'by ...', jadi perlu bentuk pasif.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 6,
        lesson: 'Structure > Clauses and Sentence Patterns',
        tipe: 'pg',
        pertanyaan: `The small cottage ___ the famous poet was born has become a popular tourist destination.`,
        opsi: [
          { label: 'A', teks: `which` },
          { label: 'B', teks: `where` },
          { label: 'C', teks: `what` },
          { label: 'D', teks: `who` },
        ],
        kunci: 'B',
        pembahasan: `Jawaban: B
Pembahasan:
Soal ini menguji adjective clause (klausa relatif). Klausa 'the famous poet was born' sudah lengkap dan menerangkan tempat, jadi memakai 'where'.
Rumus: who = orang (subjek); whom = orang (objek); which/that = benda; whose = kepemilikan + noun; where = tempat dengan klausa lengkap.
Opsi A ("which") salah karena 'which' memerlukan preposisi ('in which') karena klausa sudah lengkap.
Opsi C ("what") salah karena 'what' tidak dipakai sebagai penghubung adjective clause.
Opsi D ("who") salah karena 'who' untuk orang.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 7,
        lesson: 'Structure > Verbs',
        tipe: 'pg',
        pertanyaan: `Professor Novak ___ the same textbook since she began teaching in 2011.`,
        opsi: [
          { label: 'A', teks: `has used` },
          { label: 'B', teks: `is used` },
          { label: 'C', teks: `had been use` },
          { label: 'D', teks: `uses` },
        ],
        kunci: 'A',
        pembahasan: `Jawaban: A
Pembahasan:
Soal ini menguji pemilihan tense berdasarkan penanda waktu. 'Since she began teaching in 2011' menandai rentang waktu hingga sekarang, jadi memakai present perfect aktif: has used.
Rumus: since/for + rentang hingga sekarang → present perfect; by the time + past → past perfect; ago/last + waktu lampau → simple past; by + waktu mendatang → future perfect.
Opsi B ("is used") salah karena bentuk pasif tidak cocok; profesor yang memakai buku.
Opsi C ("had been use") salah karena bentuk tidak gramatikal dan tense tidak sesuai.
Opsi D ("uses") salah karena 'since' memerlukan present perfect, bukan simple present.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 8,
        lesson: 'Structure > Verbs',
        tipe: 'pg',
        pertanyaan: `If the city had more funding, it ___ more public clinics.`,
        opsi: [
          { label: 'A', teks: `will build` },
          { label: 'B', teks: `would build` },
          { label: 'C', teks: `builds` },
          { label: 'D', teks: `would have built` },
        ],
        kunci: 'B',
        pembahasan: `Jawaban: B
Pembahasan:
Soal ini menguji conditional sentence (kalimat pengandaian). 'If ... had' (past) adalah conditional tipe 2: would + V1.
Rumus: tipe 1: If + present, will + V1; tipe 2: If + past, would + V1; tipe 3: If + had V3, would have + V3.
Opsi A ("will build") salah karena 'had' di klausa if menandai tipe 2, jadi memakai 'would'.
Opsi C ("builds") salah karena simple present tidak cocok.
Opsi D ("would have built") salah karena bentuk tipe 3 untuk kejadian lampau.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 9,
        lesson: 'Structure > Verbs',
        tipe: 'pg',
        pertanyaan: `The list of approved thesis titles ___ posted on the department website every semester.`,
        opsi: [
          { label: 'A', teks: `have` },
          { label: 'B', teks: `is` },
          { label: 'C', teks: `being` },
          { label: 'D', teks: `are` },
        ],
        kunci: 'B',
        pembahasan: `Jawaban: B
Pembahasan:
Soal ini menguji subject-verb agreement (kesesuaian subjek dan kata kerja). Subjek inti adalah 'list' (tunggal), dan daftar itu dipasang oleh orang lain, jadi kalimatnya pasif: is + V3.
Rumus: subjek tunggal + verb tunggal; subjek jamak + verb jamak. Frasa sisipan tidak mengubah subjek inti.
Opsi A ("have") salah karena 'have posted' bukan bentuk pasif dan tidak sesuai dengan subjek tunggal.
Opsi C ("being") salah karena 'being' tidak bisa menjadi predikat utama.
Opsi D ("are") salah karena subjek intinya 'list' tunggal; 'thesis titles' hanya bagian frasa preposisi.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 10,
        lesson: 'Structure > Clauses and Sentence Patterns',
        tipe: 'pg',
        pertanyaan: `Each year, thousands of geese ___ south to escape the cold winter.`,
        opsi: [
          { label: 'A', teks: `travels` },
          { label: 'B', teks: `travel` },
          { label: 'C', teks: `traveling` },
          { label: 'D', teks: `to travel` },
        ],
        kunci: 'B',
        pembahasan: `Jawaban: B
Pembahasan:
Soal ini menguji kelengkapan kalimat (subjek dan verb utama). Kalimat butuh verb utama yang sesuai dengan subjek jamak: travel.
Rumus: setiap kalimat butuh satu subjek dan satu verb utama; klausa tambahan perlu kata penghubung.
Opsi A ("travels") salah karena subjek 'thousands of geese' jamak.
Opsi C ("traveling") salah karena V-ing tanpa to be tidak bisa menjadi verb utama.
Opsi D ("to travel") salah karena to infinitive tidak bisa menjadi verb utama.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 11,
        lesson: 'Structure > Nouns, Pronouns, and Word Forms',
        tipe: 'pg',
        pertanyaan: `The department changed ___ admission policy last year.`,
        opsi: [
          { label: 'A', teks: `it` },
          { label: 'B', teks: `their` },
          { label: 'C', teks: `it's` },
          { label: 'D', teks: `its` },
        ],
        kunci: 'D',
        pembahasan: `Jawaban: D
Pembahasan:
Soal ini menguji pronoun (kata ganti). Sebelum kata benda 'admission policy' dibutuhkan possessive yang sesuai dengan 'department' (tunggal): its.
Rumus: pronoun harus sesuai dengan kata yang dirujuk (jumlah) dan fungsinya (subjek, objek, possessive).
Opsi A ("it") salah karena sebelum kata benda dibutuhkan bentuk kepemilikan.
Opsi B ("their") salah karena 'department' tunggal, jadi possessive-nya 'its'.
Opsi C ("it's") salah karena 'it's' adalah singkatan 'it is'.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 12,
        lesson: 'Structure > Nouns, Pronouns, and Word Forms',
        tipe: 'pg',
        pertanyaan: `Many undergraduates are interested ___ studying abroad after graduation.`,
        opsi: [
          { label: 'A', teks: `to` },
          { label: 'B', teks: `on` },
          { label: 'C', teks: `for` },
          { label: 'D', teks: `in` },
        ],
        kunci: 'D',
        pembahasan: `Jawaban: D
Pembahasan:
Soal ini menguji preposisi yang berpasangan tetap. Pasangan tetap: interested in + V-ing.
Rumus: depend on, interested in, capable of, similar to, famous for, arrive at/in.
Opsi A ("to") salah karena 'interested' berpasangan dengan 'in'.
Opsi B ("on") salah karena 'interested' berpasangan dengan 'in'.
Opsi C ("for") salah karena 'interested' berpasangan dengan 'in'.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 13,
        lesson: 'Structure > Clauses and Sentence Patterns',
        tipe: 'pg',
        pertanyaan: `Most of the photographs ___ in the exhibition were created by local artists.`,
        opsi: [
          { label: 'A', teks: `display` },
          { label: 'B', teks: `displaying` },
          { label: 'C', teks: `displayed` },
          { label: 'D', teks: `are displayed` },
        ],
        kunci: 'C',
        pembahasan: `Jawaban: C
Pembahasan:
Soal ini menguji reduced clause (klausa yang diringkas dengan participle). 'Displayed in the exhibition' adalah ringkasan dari 'which are displayed ...' (pasif), jadi memakai V3.
Rumus: aktif → V-ing; pasif → V3; subjek klausa yang diringkas harus sama dengan subjek klausa utama.
Opsi A ("display") salah karena verb dasar tidak bisa menerangkan kata benda.
Opsi B ("displaying") salah karena karya seni dipajang (pasif), jadi memakai V3.
Opsi D ("are displayed") salah karena membuat dua predikat tanpa kata penghubung.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      {
        nomor: 14,
        lesson: 'Structure > Clauses and Sentence Patterns',
        tipe: 'pg',
        pertanyaan: `The new policy was popular with residents; ___, it was criticized by several historians.`,
        opsi: [
          { label: 'A', teks: `despite` },
          { label: 'B', teks: `because` },
          { label: 'C', teks: `although` },
          { label: 'D', teks: `however` },
        ],
        kunci: 'D',
        pembahasan: `Jawaban: D
Pembahasan:
Soal ini menguji kata penghubung (conjunction dan connector). Dua kalimat yang maknanya berlawanan dihubungkan dengan '; however,'.
Rumus: although/because + klausa; despite/because of + frasa benda; '; however,' menghubungkan dua kalimat.
Opsi A ("despite") salah karena 'despite' harus diikuti frasa benda.
Opsi B ("because") salah karena makna sebab tidak cocok.
Opsi C ("although") salah karena 'although' tidak dipakai setelah titik koma untuk menghubungkan dua kalimat.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      {
        nomor: 15,
        lesson: 'Structure > Clauses and Sentence Patterns',
        tipe: 'pg',
        pertanyaan: `Not only ___ the cost of the repair work, but it also delayed its completion.`,
        opsi: [
          { label: 'A', teks: `the storm did increase` },
          { label: 'B', teks: `the storm increased` },
          { label: 'C', teks: `increased the storm` },
          { label: 'D', teks: `did the storm increase` },
        ],
        kunci: 'D',
        pembahasan: `Jawaban: D
Pembahasan:
Soal ini menguji inversi setelah keterangan negatif atau terbatas. 'Not only' di awal kalimat diikuti inversi: did + subjek + V1.
Rumus: never, rarely, not only, only after di awal kalimat → auxiliary + subjek + verb.
Opsi A ("the storm did increase") salah karena auxiliary harus mendahului subjek.
Opsi B ("the storm increased") salah karena setelah 'not only' di awal kalimat diperlukan inversi.
Opsi C ("increased the storm") salah karena urutan kata salah.`,
        tingkat: 'sulit',
        status: 'draft',
      },
    ],
  },
];

export const contohWrittenExpression: Kelompok[] = [
  {
    soal: [
      {
        nomor: 16,
        lesson: 'Written Expression > Passive Voice',
        tipe: 'pg',
        pertanyaan: `The memoir(A) was(B) translate(C) into more than forty languages(D).`,
        opsi: [
          { label: 'A', teks: `memoir` },
          { label: 'B', teks: `was` },
          { label: 'C', teks: `translate` },
          { label: 'D', teks: `languages` },
        ],
        kunci: 'C',
        pembahasan: `Jawaban: C
Pembahasan:
Soal ini menguji passive voice (kalimat pasif). Bagian C ("translate") salah; bentuk yang benar adalah "translated". Pasif memerlukan be + V3, jadi 'translate' harus 'translated'.
Rumus: pasif = be + V3 (past participle); pelaku boleh disebut dengan 'by'.
Bagian lain (A "memoir", B "was", D "languages") sudah benar.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 17,
        lesson: 'Written Expression > Tenses and Agreement',
        tipe: 'pg',
        pertanyaan: `The scientists in the field camp carefully records(A) the air pressure(B) every(C) hour during(D) the experiment.`,
        opsi: [
          { label: 'A', teks: `records` },
          { label: 'B', teks: `pressure` },
          { label: 'C', teks: `every` },
          { label: 'D', teks: `during` },
        ],
        kunci: 'A',
        pembahasan: `Jawaban: A
Pembahasan:
Soal ini menguji subject-verb agreement (kesesuaian subjek dan kata kerja). Bagian A ("records") salah; bentuk yang benar adalah "record". Subjek 'scientists' jamak, jadi verb-nya tidak memakai -s.
Rumus: subjek tunggal + verb tunggal; subjek jamak + verb jamak. Frasa sisipan tidak mengubah subjek inti.
Bagian lain (B "pressure", C "every", D "during") sudah benar.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 18,
        lesson: 'Written Expression > Pronoun',
        tipe: 'pg',
        pertanyaan: `The hotel(A) announced that(B) their(C) profits had increased(D) last year.`,
        opsi: [
          { label: 'A', teks: `hotel` },
          { label: 'B', teks: `that` },
          { label: 'C', teks: `their` },
          { label: 'D', teks: `increased` },
        ],
        kunci: 'C',
        pembahasan: `Jawaban: C
Pembahasan:
Soal ini menguji pronoun (kata ganti). Bagian C ("their") salah; bentuk yang benar adalah "its". Kata yang dirujuk ('hotel') tunggal dan bukan orang, jadi possessive-nya 'its'.
Rumus: pronoun harus sesuai dengan kata yang dirujuk (jumlah) dan fungsinya (subjek, objek, possessive).
Bagian lain (A "hotel", B "that", D "increased") sudah benar.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 19,
        lesson: 'Written Expression > Tenses and Agreement',
        tipe: 'pg',
        pertanyaan: `Scientists discover(A) the new(B) species in(C) the rainforest two years ago(D).`,
        opsi: [
          { label: 'A', teks: `discover` },
          { label: 'B', teks: `new` },
          { label: 'C', teks: `in` },
          { label: 'D', teks: `ago` },
        ],
        kunci: 'A',
        pembahasan: `Jawaban: A
Pembahasan:
Soal ini menguji pemilihan tense berdasarkan penanda waktu. Bagian A ("discover") salah; bentuk yang benar adalah "discovered". 'Two years ago' menandai simple past.
Rumus: since/for + rentang hingga sekarang → present perfect; by the time + past → past perfect; ago/last + waktu lampau → simple past; by + waktu mendatang → future perfect.
Bagian lain (B "new", C "in", D "ago") sudah benar.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 20,
        lesson: 'Written Expression > Preposition',
        tipe: 'pg',
        pertanyaan: `The results of the experiment(A) are similar with(B) those(C) of earlier research(D).`,
        opsi: [
          { label: 'A', teks: `experiment` },
          { label: 'B', teks: `with` },
          { label: 'C', teks: `those` },
          { label: 'D', teks: `research` },
        ],
        kunci: 'B',
        pembahasan: `Jawaban: B
Pembahasan:
Soal ini menguji preposisi yang berpasangan tetap. Bagian B ("with") salah; bentuk yang benar adalah "to". Pasangan tetap: similar to.
Rumus: depend on, interested in, capable of, similar to, famous for, arrive at/in.
Bagian lain (A "experiment", C "those", D "research") sudah benar.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 21,
        lesson: 'Written Expression > Clauses and Conjunctions',
        tipe: 'pg',
        pertanyaan: `Although(A) the high(B) cost, the plan(C) was approved(D).`,
        opsi: [
          { label: 'A', teks: `Although` },
          { label: 'B', teks: `high` },
          { label: 'C', teks: `plan` },
          { label: 'D', teks: `approved` },
        ],
        kunci: 'A',
        pembahasan: `Jawaban: A
Pembahasan:
Soal ini menguji kata penghubung (conjunction dan connector). Bagian A ("Although") salah; bentuk yang benar adalah "Despite". 'The high cost' adalah frasa benda, jadi memakai 'despite'.
Rumus: although/because + klausa; despite/because of + frasa benda; '; however,' menghubungkan dua kalimat.
Bagian lain (B "high", C "plan", D "approved") sudah benar.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 22,
        lesson: 'Written Expression > Clauses and Conjunctions',
        tipe: 'pg',
        pertanyaan: `The architect which(A) designed(B) the bridge(C) has won(D) several awards.`,
        opsi: [
          { label: 'A', teks: `which` },
          { label: 'B', teks: `designed` },
          { label: 'C', teks: `bridge` },
          { label: 'D', teks: `won` },
        ],
        kunci: 'A',
        pembahasan: `Jawaban: A
Pembahasan:
Soal ini menguji adjective clause (klausa relatif). Bagian A ("which") salah; bentuk yang benar adalah "who". Untuk orang dipakai 'who', bukan 'which'.
Rumus: who = orang (subjek); whom = orang (objek); which/that = benda; whose = kepemilikan + noun; where = tempat dengan klausa lengkap.
Bagian lain (B "designed", C "bridge", D "won") sudah benar.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 23,
        lesson: 'Written Expression > Word Form',
        tipe: 'pg',
        pertanyaan: `The team worked very(A) hard(B) to finish the presentation(C) quick(D).`,
        opsi: [
          { label: 'A', teks: `very` },
          { label: 'B', teks: `hard` },
          { label: 'C', teks: `presentation` },
          { label: 'D', teks: `quick` },
        ],
        kunci: 'D',
        pembahasan: `Jawaban: D
Pembahasan:
Soal ini menguji word form (bentuk kata). Bagian D ("quick") salah; bentuk yang benar adalah "quickly". Kata yang menerangkan verb 'finish' harus adverb: quickly.
Rumus: adjective menerangkan noun; adverb menerangkan verb atau adjective; noun dipakai setelah artikel/possessive dan sebelum 'of'.
Bagian lain (A "very", B "hard", C "presentation") sudah benar.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 24,
        lesson: 'Written Expression > Clauses and Conjunctions',
        tipe: 'pg',
        pertanyaan: `The author(A), whom(B) poems have been translated into many languages(C), will visit(D) the campus next week.`,
        opsi: [
          { label: 'A', teks: `author` },
          { label: 'B', teks: `whom` },
          { label: 'C', teks: `languages` },
          { label: 'D', teks: `visit` },
        ],
        kunci: 'B',
        pembahasan: `Jawaban: B
Pembahasan:
Soal ini menguji adjective clause (klausa relatif). Bagian B ("whom") salah; bentuk yang benar adalah "whose". Karya itu milik pengarang; kepemilikan memakai 'whose' + kata benda.
Rumus: who = orang (subjek); whom = orang (objek); which/that = benda; whose = kepemilikan + noun; where = tempat dengan klausa lengkap.
Bagian lain (A "author", C "languages", D "visit") sudah benar.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 25,
        lesson: 'Written Expression > Pronoun',
        tipe: 'pg',
        pertanyaan: `The committee gave(A) we(B) two(C) weeks(D) to prepare the speech.`,
        opsi: [
          { label: 'A', teks: `gave` },
          { label: 'B', teks: `we` },
          { label: 'C', teks: `two` },
          { label: 'D', teks: `weeks` },
        ],
        kunci: 'B',
        pembahasan: `Jawaban: B
Pembahasan:
Soal ini menguji pronoun (kata ganti). Bagian B ("we") salah; bentuk yang benar adalah "us". Setelah verb 'gave' dibutuhkan object pronoun: us.
Rumus: pronoun harus sesuai dengan kata yang dirujuk (jumlah) dan fungsinya (subjek, objek, possessive).
Bagian lain (A "gave", C "two", D "weeks") sudah benar.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 26,
        lesson: 'Written Expression > Comparison',
        tipe: 'pg',
        pertanyaan: `This strategy(A) is as(B) effective(C) than(D) the traditional one.`,
        opsi: [
          { label: 'A', teks: `strategy` },
          { label: 'B', teks: `as` },
          { label: 'C', teks: `effective` },
          { label: 'D', teks: `than` },
        ],
        kunci: 'D',
        pembahasan: `Jawaban: D
Pembahasan:
Soal ini menguji comparison (perbandingan). Bagian D ("than") salah; bentuk yang benar adalah "as". Perbandingan setara memakai 'as ... as', bukan 'as ... than'.
Rumus: comparative: -er/more ... than; superlative: the -est/the most; kesetaraan: as ... as.
Bagian lain (A "strategy", B "as", C "effective") sudah benar.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 27,
        lesson: 'Written Expression > Gerund and Infinitive',
        tipe: 'pg',
        pertanyaan: `After(A) finishing(B) the trial run, the researchers suggested(C) to repeat(D) the study next year.`,
        opsi: [
          { label: 'A', teks: `After` },
          { label: 'B', teks: `finishing` },
          { label: 'C', teks: `suggested` },
          { label: 'D', teks: `to repeat` },
        ],
        kunci: 'D',
        pembahasan: `Jawaban: D
Pembahasan:
Soal ini menguji gerund dan infinitive. Bagian D ("to repeat") salah; bentuk yang benar adalah "repeating". 'Suggest' diikuti gerund (V-ing).
Rumus: avoid, consider, enjoy, suggest, recommend, look forward to, be used to + V-ing; decide, plan, hope, agree, be allowed + to V1.
Bagian lain (A "After", B "finishing", C "suggested") sudah benar.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 28,
        lesson: 'Written Expression > Gerund and Infinitive',
        tipe: 'pg',
        pertanyaan: `The company plans expanding(A) its operations(B) to three(C) new(D) cities.`,
        opsi: [
          { label: 'A', teks: `expanding` },
          { label: 'B', teks: `operations` },
          { label: 'C', teks: `three` },
          { label: 'D', teks: `new` },
        ],
        kunci: 'A',
        pembahasan: `Jawaban: A
Pembahasan:
Soal ini menguji gerund dan infinitive. Bagian A ("expanding") salah; bentuk yang benar adalah "to expand". 'Plan' diikuti to infinitive.
Rumus: avoid, consider, enjoy, suggest, recommend, look forward to, be used to + V-ing; decide, plan, hope, agree, be allowed + to V1.
Bagian lain (B "operations", C "three", D "new") sudah benar.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 29,
        lesson: 'Written Expression > Parallel Structure',
        tipe: 'pg',
        pertanyaan: `Hiking(A), swimming(B), and to ride(C) bicycles are popular activities(D) in the park.`,
        opsi: [
          { label: 'A', teks: `Hiking` },
          { label: 'B', teks: `swimming` },
          { label: 'C', teks: `to ride` },
          { label: 'D', teks: `activities` },
        ],
        kunci: 'C',
        pembahasan: `Jawaban: C
Pembahasan:
Soal ini menguji parallel structure (kesejajaran bentuk). Bagian C ("to ride") salah; bentuk yang benar adalah "riding". Unsur yang dihubungkan 'and' harus sejajar: hiking, swimming, riding.
Rumus: unsur yang dihubungkan and/or/but, both...and, not only...but also harus berbentuk sama.
Bagian lain (A "Hiking", B "swimming", D "activities") sudah benar.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 30,
        lesson: 'Written Expression > Passive Voice',
        tipe: 'pg',
        pertanyaan: `The ancient(A) tools were(B) finding(C) by a farmer while he was plowing(D) his field.`,
        opsi: [
          { label: 'A', teks: `ancient` },
          { label: 'B', teks: `were` },
          { label: 'C', teks: `finding` },
          { label: 'D', teks: `plowing` },
        ],
        kunci: 'C',
        pembahasan: `Jawaban: C
Pembahasan:
Soal ini menguji passive voice (kalimat pasif). Bagian C ("finding") salah; bentuk yang benar adalah "found". Benda itu ditemukan oleh petani, jadi pasif: were + V3.
Rumus: pasif = be + V3 (past participle); pelaku boleh disebut dengan 'by'.
Bagian lain (A "ancient", B "were", D "plowing") sudah benar.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 31,
        lesson: 'Written Expression > Parallel Structure',
        tipe: 'pg',
        pertanyaan: `The new software is faster(A), cheaper(B), and more reliability(C) than(D) the old one.`,
        opsi: [
          { label: 'A', teks: `faster` },
          { label: 'B', teks: `cheaper` },
          { label: 'C', teks: `more reliability` },
          { label: 'D', teks: `than` },
        ],
        kunci: 'C',
        pembahasan: `Jawaban: C
Pembahasan:
Soal ini menguji parallel structure (kesejajaran bentuk). Bagian C ("more reliability") salah; bentuk yang benar adalah "more reliable". Unsur sejajar harus sama-sama adjective: faster, cheaper, more reliable.
Rumus: unsur yang dihubungkan and/or/but, both...and, not only...but also harus berbentuk sama.
Bagian lain (A "faster", B "cheaper", D "than") sudah benar.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 32,
        lesson: 'Written Expression > Word Form',
        tipe: 'pg',
        pertanyaan: `The discovery of aspirin had a significance(A) impact(B) on modern(C) medicine(D).`,
        opsi: [
          { label: 'A', teks: `significance` },
          { label: 'B', teks: `impact` },
          { label: 'C', teks: `modern` },
          { label: 'D', teks: `medicine` },
        ],
        kunci: 'A',
        pembahasan: `Jawaban: A
Pembahasan:
Soal ini menguji word form (bentuk kata). Bagian A ("significance") salah; bentuk yang benar adalah "significant". Kata sebelum noun 'impact' harus adjective: significant.
Rumus: adjective menerangkan noun; adverb menerangkan verb atau adjective; noun dipakai setelah artikel/possessive dan sebelum 'of'.
Bagian lain (B "impact", C "modern", D "medicine") sudah benar.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 33,
        lesson: 'Written Expression > Conditional',
        tipe: 'pg',
        pertanyaan: `If I were(A) the principal, I will(B) improve(C) public transportation(D).`,
        opsi: [
          { label: 'A', teks: `were` },
          { label: 'B', teks: `will` },
          { label: 'C', teks: `improve` },
          { label: 'D', teks: `transportation` },
        ],
        kunci: 'B',
        pembahasan: `Jawaban: B
Pembahasan:
Soal ini menguji conditional sentence (kalimat pengandaian). Bagian B ("will") salah; bentuk yang benar adalah "would". 'If I were' adalah conditional tipe 2, jadi memakai 'would'.
Rumus: tipe 1: If + present, will + V1; tipe 2: If + past, would + V1; tipe 3: If + had V3, would have + V3.
Bagian lain (A "were", C "improve", D "transportation") sudah benar.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 34,
        lesson: 'Written Expression > Noun and Quantifier',
        tipe: 'pg',
        pertanyaan: `The scientists(A) did not have(B) many(C) time to complete the survey(D).`,
        opsi: [
          { label: 'A', teks: `scientists` },
          { label: 'B', teks: `have` },
          { label: 'C', teks: `many` },
          { label: 'D', teks: `survey` },
        ],
        kunci: 'C',
        pembahasan: `Jawaban: C
Pembahasan:
Soal ini menguji noun dan quantifier (countable/uncountable). Bagian C ("many") salah; bentuk yang benar adalah "much". 'Time' di sini uncountable, jadi memakai 'much'.
Rumus: much/little/less + uncountable; many/few/fewer + countable jamak; countable tunggal butuh artikel.
Bagian lain (A "scientists", B "have", D "survey") sudah benar.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 35,
        lesson: 'Written Expression > Preposition',
        tipe: 'pg',
        pertanyaan: `The region(A) is famous of(B) its ancient(C) bridges(D).`,
        opsi: [
          { label: 'A', teks: `region` },
          { label: 'B', teks: `of` },
          { label: 'C', teks: `ancient` },
          { label: 'D', teks: `bridges` },
        ],
        kunci: 'B',
        pembahasan: `Jawaban: B
Pembahasan:
Soal ini menguji preposisi yang berpasangan tetap. Bagian B ("of") salah; bentuk yang benar adalah "for". Pasangan tetap: famous for.
Rumus: depend on, interested in, capable of, similar to, famous for, arrive at/in.
Bagian lain (A "region", C "ancient", D "bridges") sudah benar.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 36,
        lesson: 'Written Expression > Conditional',
        tipe: 'pg',
        pertanyaan: `If the team(A) had(B) started earlier(C), they would finish(D) the project on time.`,
        opsi: [
          { label: 'A', teks: `team` },
          { label: 'B', teks: `had` },
          { label: 'C', teks: `earlier` },
          { label: 'D', teks: `would finish` },
        ],
        kunci: 'D',
        pembahasan: `Jawaban: D
Pembahasan:
Soal ini menguji conditional sentence (kalimat pengandaian). Bagian D ("would finish") salah; bentuk yang benar adalah "would have finished". 'If ... had started' adalah tipe 3, jadi memakai 'would have + V3'.
Rumus: tipe 1: If + present, will + V1; tipe 2: If + past, would + V1; tipe 3: If + had V3, would have + V3.
Bagian lain (A "team", B "had", C "earlier") sudah benar.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      {
        nomor: 37,
        lesson: 'Written Expression > Tenses and Agreement',
        tipe: 'pg',
        pertanyaan: `By the time(A) the conference ends(B), the organizers(C) will collect(D) feedback from over five hundred participants.`,
        opsi: [
          { label: 'A', teks: `time` },
          { label: 'B', teks: `ends` },
          { label: 'C', teks: `organizers` },
          { label: 'D', teks: `will collect` },
        ],
        kunci: 'D',
        pembahasan: `Jawaban: D
Pembahasan:
Soal ini menguji pemilihan tense berdasarkan penanda waktu. Bagian D ("will collect") salah; bentuk yang benar adalah "will have collected". 'By the time ... ends' menandai kegiatan yang selesai sebelum titik di masa depan, jadi memakai future perfect.
Rumus: since/for + rentang hingga sekarang → present perfect; by the time + past → past perfect; ago/last + waktu lampau → simple past; by + waktu mendatang → future perfect.
Bagian lain (A "time", B "ends", C "organizers") sudah benar.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      {
        nomor: 38,
        lesson: 'Written Expression > Noun and Quantifier',
        tipe: 'pg',
        pertanyaan: `Less(A) people attended(B) the lecture(C) than expected(D).`,
        opsi: [
          { label: 'A', teks: `Less` },
          { label: 'B', teks: `attended` },
          { label: 'C', teks: `lecture` },
          { label: 'D', teks: `expected` },
        ],
        kunci: 'A',
        pembahasan: `Jawaban: A
Pembahasan:
Soal ini menguji noun dan quantifier (countable/uncountable). Bagian A ("Less") salah; bentuk yang benar adalah "Fewer". 'People' adalah countable noun, jadi memakai 'fewer', bukan 'less'.
Rumus: much/little/less + uncountable; many/few/fewer + countable jamak; countable tunggal butuh artikel.
Bagian lain (B "attended", C "lecture", D "expected") sudah benar.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      {
        nomor: 39,
        lesson: 'Written Expression > Tenses and Agreement',
        tipe: 'pg',
        pertanyaan: `The findings(A) of the two trials suggests(B) that the therapy is effective(C) for most(D) patients.`,
        opsi: [
          { label: 'A', teks: `findings` },
          { label: 'B', teks: `suggests` },
          { label: 'C', teks: `effective` },
          { label: 'D', teks: `most` },
        ],
        kunci: 'B',
        pembahasan: `Jawaban: B
Pembahasan:
Soal ini menguji subject-verb agreement (kesesuaian subjek dan kata kerja). Bagian B ("suggests") salah; bentuk yang benar adalah "suggest". Subjek inti 'findings' jamak, jadi verb tanpa -s.
Rumus: subjek tunggal + verb tunggal; subjek jamak + verb jamak. Frasa sisipan tidak mengubah subjek inti.
Bagian lain (A "findings", C "effective", D "most") sudah benar.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      {
        nomor: 40,
        lesson: 'Written Expression > Comparison',
        tipe: 'pg',
        pertanyaan: `Of the three(A) models(B), the second(C) one is more practical(D) and the least expensive.`,
        opsi: [
          { label: 'A', teks: `three` },
          { label: 'B', teks: `models` },
          { label: 'C', teks: `second` },
          { label: 'D', teks: `more practical` },
        ],
        kunci: 'D',
        pembahasan: `Jawaban: D
Pembahasan:
Soal ini menguji comparison (perbandingan). Bagian D ("more practical") salah; bentuk yang benar adalah "the most practical". Membandingkan lebih dari dua hal memakai superlative: the most practical.
Rumus: comparative: -er/more ... than; superlative: the -est/the most; kesetaraan: as ... as.
Bagian lain (A "three", B "models", C "second") sudah benar.`,
        tingkat: 'sulit',
        status: 'draft',
      },
    ],
  },
];
