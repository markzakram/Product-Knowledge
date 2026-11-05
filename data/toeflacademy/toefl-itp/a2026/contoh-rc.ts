import type { Kelompok } from '@/lib/skema';

/**
 * Contoh Reading Comprehension: 5 teks x 10 soal dari Toefl Generator
 * (output/uji-nyata/seed-2026), dibuat AI dan belum direview.
 */
export const contohReading: Kelompok[] = [
  {
    stimulus: {
      judul: `The Dawn of Electronic Computing`,
      isi: `Before the middle of the twentieth century, the word "computer" referred not to a machine but to a person. Teams of human computers, often working with mechanical calculators, spent long hours solving equations for engineers, astronomers, and military planners. As problems grew more complex, especially during the Second World War, the demand for faster calculation exceeded what human workers could supply. This pressure encouraged researchers in several countries to explore whether electronic circuits could perform arithmetic automatically.

The earliest electronic computers relied on vacuum tubes, glass devices that could switch an electric current on and off thousands of times per second. Because they had no moving parts, they operated far more quickly than the gears and relays found in earlier calculating machines. One of the best-known examples, ENIAC, was completed in the United States shortly after the war. It contained thousands of tubes, occupied an entire room, and consumed enough electricity to generate considerable heat. Engineers had to replace failed tubes regularly, since a single burned-out component could halt an entire calculation.

Programming these machines was also a demanding task. Early computers had no keyboards or screens; instead, operators instructed them by setting switches and connecting cables by hand. Preparing a new problem could take days, even though the machine itself might solve it in minutes. To reduce this delay, researchers developed the stored-program concept, in which instructions were kept in the computer's memory alongside the data. This idea allowed a machine to move from one task to another simply by loading a new set of instructions.

Although the first electronic computers were large, costly, and difficult to maintain, they demonstrated that complex calculations could be automated on a scale never before possible. In the following decade, the transistor began to replace the vacuum tube, making computers smaller and more dependable. Nevertheless, many of the basic principles established by those early room-sized machines continue to shape the design of modern devices.`,
    },
    soal: [
      {
        nomor: 1,
        lesson: 'The Dawn of Electronic Computing',
        tipe: 'pg',
        pertanyaan: `What does the passage mainly discuss?`,
        opsi: [
          { label: 'A', teks: `The working methods of human computers before the war` },
          { label: 'B', teks: `The origins, limitations, and influence of early electronic computers` },
          { label: 'C', teks: `The invention of the transistor and its effect on industry` },
          { label: 'D', teks: `The history of calculating devices from ancient times to today` },
        ],
        kunci: 'B',
        pembahasan: `Jawaban: B
Pembahasan:
Tipe soal: Main idea. Teks membahas latar belakang munculnya komputer elektronik (paragraf 1), cara kerja dan kendalanya (paragraf 2-3), serta pengaruhnya hingga kini (paragraf 4). Opsi B merangkum seluruh isi tersebut.
Bukti: "Although the first electronic computers were large, costly, and difficult to maintain, they demonstrated that complex calculations could be automated on a scale never before possible."
Opsi A ("The working methods of human computers before the war") salah karena terlalu sempit karena human computers hanya dibahas di paragraf 1.
Opsi C ("The invention of the transistor and its effect on industry") salah karena terlalu sempit karena transistor hanya disebut sekilas di paragraf 4.
Opsi D ("The history of calculating devices from ancient times to today") salah karena terlalu luas karena teks tidak membahas alat hitung sejak zaman kuno.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 2,
        lesson: 'The Dawn of Electronic Computing',
        tipe: 'pg',
        pertanyaan: `It can be inferred from paragraph 1 that the word "computer"`,
        opsi: [
          { label: 'A', teks: `has changed in meaning over time` },
          { label: 'B', teks: `was first used by military planners` },
          { label: 'C', teks: `originally described a mechanical calculator` },
          { label: 'D', teks: `was rarely used before the Second World War` },
        ],
        kunci: 'A',
        pembahasan: `Jawaban: A
Pembahasan:
Tipe soal: Inference. Teks menyatakan bahwa sebelum pertengahan abad ke-20 kata "computer" merujuk pada manusia, bukan mesin. Karena kini kata itu merujuk pada mesin, dapat disimpulkan maknanya telah berubah.
Bukti: "Before the middle of the twentieth century, the word "computer" referred not to a machine but to a person."
Opsi B ("was first used by military planners") salah karena teks tidak menyebut siapa yang pertama kali memakai kata tersebut.
Opsi C ("originally described a mechanical calculator") salah karena bertentangan dengan teks karena kata itu awalnya merujuk pada manusia.
Opsi D ("was rarely used before the Second World War") salah karena tidak didukung teks; justru kata itu sudah dipakai untuk menyebut manusia penghitung.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 3,
        lesson: 'The Dawn of Electronic Computing',
        tipe: 'pg',
        pertanyaan: `The word "they" in the phrase "Because they had no moving parts" in paragraph 2 refers to`,
        opsi: [
          { label: 'A', teks: `gears` },
          { label: 'B', teks: `electric currents` },
          { label: 'C', teks: `vacuum tubes` },
          { label: 'D', teks: `calculating machines` },
        ],
        kunci: 'C',
        pembahasan: `Jawaban: C
Pembahasan:
Tipe soal: Reference. Kalimat sebelumnya membahas vacuum tubes sebagai perangkat kaca yang menyalakan dan mematikan arus. Benda yang tidak memiliki bagian bergerak dan lebih cepat daripada gears dan relays adalah vacuum tubes.
Bukti: "The earliest electronic computers relied on vacuum tubes, glass devices that could switch an electric current on and off thousands of times per second. Because they had no moving parts"
Opsi A ("gears") salah karena gears justru dibandingkan dengan "they" sebagai alat yang lebih lambat.
Opsi B ("electric currents") salah karena arus listrik adalah sesuatu yang dialihkan oleh tabung, bukan benda yang dibicarakan.
Opsi D ("calculating machines") salah karena calculating machines adalah mesin lama yang memiliki gears dan relays, bukan yang tanpa bagian bergerak.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 4,
        lesson: 'The Dawn of Electronic Computing',
        tipe: 'pg',
        pertanyaan: `All of the following are mentioned as characteristics of ENIAC EXCEPT that it`,
        opsi: [
          { label: 'A', teks: `contained thousands of tubes` },
          { label: 'B', teks: `was designed to break enemy codes` },
          { label: 'C', teks: `filled an entire room` },
          { label: 'D', teks: `produced a great deal of heat` },
        ],
        kunci: 'B',
        pembahasan: `Jawaban: B
Pembahasan:
Tipe soal: NOT/EXCEPT. Teks menyebut ENIAC berisi ribuan tabung, memenuhi satu ruangan, dan menghasilkan panas yang besar. Teks tidak menyebut bahwa ENIAC dirancang untuk memecahkan kode musuh.
Bukti: "It contained thousands of tubes, occupied an entire room, and consumed enough electricity to generate considerable heat."
Opsi A ("contained thousands of tubes") salah karena disebut langsung dalam teks ("contained thousands of tubes").
Opsi C ("filled an entire room") salah karena disebut dalam teks ("occupied an entire room").
Opsi D ("produced a great deal of heat") salah karena disebut dalam teks ("generate considerable heat").`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 5,
        lesson: 'The Dawn of Electronic Computing',
        tipe: 'pg',
        pertanyaan: `It can be inferred from paragraph 2 that keeping ENIAC in operation required`,
        opsi: [
          { label: 'A', teks: `frequent attention from engineers` },
          { label: 'B', teks: `a building kept at extremely low temperatures` },
          { label: 'C', teks: `far less electricity than earlier machines` },
          { label: 'D', teks: `daily oiling of its moving parts` },
        ],
        kunci: 'A',
        pembahasan: `Jawaban: A
Pembahasan:
Tipe soal: Inference. Karena tabung sering rusak dan harus diganti secara rutin oleh insinyur, dapat disimpulkan bahwa ENIAC membutuhkan perhatian teknisi secara terus-menerus agar tetap berjalan.
Bukti: "Engineers had to replace failed tubes regularly, since a single burned-out component could halt an entire calculation."
Opsi B ("a building kept at extremely low temperatures") salah karena teks hanya menyebut panas yang dihasilkan, bukan bangunan bersuhu sangat rendah.
Opsi C ("far less electricity than earlier machines") salah karena bertentangan dengan teks yang menyebut konsumsi listriknya besar.
Opsi D ("daily oiling of its moving parts") salah karena bertentangan dengan teks karena tabung vakum tidak memiliki bagian bergerak.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 6,
        lesson: 'The Dawn of Electronic Computing',
        tipe: 'pg',
        pertanyaan: `The word "demanding" in paragraph 3 is closest in meaning to`,
        opsi: [
          { label: 'A', teks: `rewarding` },
          { label: 'B', teks: `unusual` },
          { label: 'C', teks: `brief` },
          { label: 'D', teks: `difficult` },
        ],
        kunci: 'D',
        pembahasan: `Jawaban: D
Pembahasan:
Tipe soal: Vocabulary in context. Kalimat berikutnya menjelaskan bahwa pemrograman dilakukan secara manual dan bisa memakan waktu berhari-hari, sehingga "demanding" berarti sulit atau berat.
Bukti: "Programming these machines was also a demanding task. Early computers had no keyboards or screens; instead, operators instructed them by setting switches and connecting cables by hand."
Opsi A ("rewarding") salah karena konteks menekankan kesulitan, bukan hasil yang memuaskan.
Opsi B ("unusual") salah karena teks tidak menekankan keanehan tugas tersebut, melainkan beratnya.
Opsi C ("brief") salah karena bertentangan dengan konteks karena persiapannya bisa memakan waktu berhari-hari.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 7,
        lesson: 'The Dawn of Electronic Computing',
        tipe: 'pg',
        pertanyaan: `Why does the author mention that preparing a new problem "could take days" while the machine "might solve it in minutes" in paragraph 3?`,
        opsi: [
          { label: 'A', teks: `To emphasize the remarkable speed of early electronic computers` },
          { label: 'B', teks: `To show that human computers were faster than electronic ones` },
          { label: 'C', teks: `To suggest that early computers could solve only one problem` },
          { label: 'D', teks: `To explain the delay that led to the stored-program concept` },
        ],
        kunci: 'D',
        pembahasan: `Jawaban: D
Pembahasan:
Tipe soal: Author's purpose. Perbandingan waktu persiapan dan waktu penyelesaian menunjukkan adanya hambatan besar dalam pemrograman. Kalimat berikutnya langsung menyatakan bahwa konsep stored-program dikembangkan untuk mengurangi penundaan ini.
Bukti: "Preparing a new problem could take days, even though the machine itself might solve it in minutes. To reduce this delay, researchers developed the stored-program concept"
Opsi A ("To emphasize the remarkable speed of early electronic computers") salah karena kecepatan mesin memang tersirat, tetapi fokus perbandingan adalah lamanya persiapan yang menjadi masalah.
Opsi B ("To show that human computers were faster than electronic ones") salah karena teks tidak membandingkan kecepatan human computers dengan mesin pada bagian ini.
Opsi C ("To suggest that early computers could solve only one problem") salah karena teks tidak menyatakan mesin hanya bisa menyelesaikan satu masalah; masalahnya adalah lamanya mengganti tugas.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      {
        nomor: 8,
        lesson: 'The Dawn of Electronic Computing',
        tipe: 'pg',
        pertanyaan: `According to the passage, the stored-program concept made it possible for a computer to`,
        opsi: [
          { label: 'A', teks: `change tasks without being rewired by hand` },
          { label: 'B', teks: `keep its instructions apart from its data` },
          { label: 'C', teks: `operate without any memory at all` },
          { label: 'D', teks: `display results on keyboards and screens` },
        ],
        kunci: 'A',
        pembahasan: `Jawaban: A
Pembahasan:
Tipe soal: Detail. Dengan konsep stored-program, mesin dapat berpindah tugas hanya dengan memuat instruksi baru, tidak lagi dengan mengatur sakelar dan kabel secara manual.
Bukti: "This idea allowed a machine to move from one task to another simply by loading a new set of instructions."
Opsi B ("keep its instructions apart from its data") salah karena bertentangan dengan teks yang menyebut instruksi disimpan bersama data ("alongside the data").
Opsi C ("operate without any memory at all") salah karena bertentangan dengan teks karena instruksi justru disimpan di memori.
Opsi D ("display results on keyboards and screens") salah karena teks hanya menyebut komputer awal tidak punya keyboard atau layar, bukan bahwa konsep ini memungkinkannya.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 9,
        lesson: 'The Dawn of Electronic Computing',
        tipe: 'pg',
        pertanyaan: `According to paragraph 4, what was one result of using the transistor in place of the vacuum tube?`,
        opsi: [
          { label: 'A', teks: `Computers became more compact and reliable.` },
          { label: 'B', teks: `Computers required more tubes than before.` },
          { label: 'C', teks: `Computers grew larger but much cheaper.` },
          { label: 'D', teks: `Computers needed more frequent repairs.` },
        ],
        kunci: 'A',
        pembahasan: `Jawaban: A
Pembahasan:
Tipe soal: Detail. Teks menyatakan transistor membuat komputer "smaller and more dependable", yang diparafrasekan menjadi lebih ringkas dan andal.
Bukti: "the transistor began to replace the vacuum tube, making computers smaller and more dependable"
Opsi B ("Computers required more tubes than before.") salah karena bertentangan karena transistor menggantikan tabung, bukan menambah jumlahnya.
Opsi C ("Computers grew larger but much cheaper.") salah karena bertentangan karena komputer menjadi lebih kecil, dan soal harga tidak disebut.
Opsi D ("Computers needed more frequent repairs.") salah karena bertentangan karena komputer justru menjadi lebih andal.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 10,
        lesson: 'The Dawn of Electronic Computing',
        tipe: 'pg',
        pertanyaan: `The author's attitude toward the first electronic computers can best be described as`,
        opsi: [
          { label: 'A', teks: `dismissive` },
          { label: 'B', teks: `enthusiastic` },
          { label: 'C', teks: `balanced` },
          { label: 'D', teks: `indifferent` },
        ],
        kunci: 'C',
        pembahasan: `Jawaban: C
Pembahasan:
Tipe soal: Tone/attitude. Penulis menyebut kelemahan komputer awal (besar, mahal, sulit dirawat) sekaligus mengakui pencapaian dan pengaruhnya. Sikap yang menimbang sisi positif dan negatif ini paling tepat disebut seimbang.
Bukti: "Although the first electronic computers were large, costly, and difficult to maintain, they demonstrated that complex calculations could be automated on a scale never before possible."
Opsi A ("dismissive") salah karena penulis justru mengakui pentingnya komputer awal bagi perangkat modern.
Opsi B ("enthusiastic") salah karena penulis juga menyoroti banyak kelemahan sehingga tidak sepenuhnya antusias.
Opsi D ("indifferent") salah karena penulis menunjukkan penilaian yang jelas, bukan sikap acuh.`,
        tingkat: 'sulit',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      judul: `The Endowment Effect`,
      isi: `Imagine being handed a coffee mug and then asked how much money you would accept to sell it. Now imagine being asked how much you would pay to buy the same mug. According to traditional economic theory, the two amounts should be roughly equal, since the mug is identical in both cases. Yet in many classroom experiments, people who own the mug typically demand far more to give it up than buyers are willing to pay for it. Psychologists and economists call this tendency the endowment effect: the habit of valuing an object more highly simply because it belongs to us.

One leading explanation for this pattern is loss aversion. Research suggests that the pain of losing something is felt more strongly than the pleasure of gaining something of equal worth. For an owner, selling the mug is framed as a loss, so it requires greater compensation. For a buyer, the mug is merely a possible gain, and gains carry less emotional weight.

A second explanation focuses on identity. Possessions often become linked to a person's sense of self, and they can serve as reminders of experiences, relationships, or achievements. When this happens, an item acquires a personal meaning that a stranger cannot see. Notably, the effect can appear after only a few minutes of ownership, which suggests that the attachment does not depend on long familiarity.

The endowment effect has practical consequences. Homeowners frequently set asking prices above what the market will support, and investors may hold on to declining stocks longer than is wise. Businesses, for their part, take advantage of the bias by offering free trials, knowing that customers who have used a product for a while are often reluctant to return it. Recognizing the effect will not eliminate it, but it can help people make more deliberate choices about what to keep and what to let go.`,
    },
    soal: [
      {
        nomor: 11,
        lesson: 'The Endowment Effect',
        tipe: 'pg',
        pertanyaan: `What does the passage mainly discuss?`,
        opsi: [
          { label: 'A', teks: `The history of classroom experiments involving coffee mugs` },
          { label: 'B', teks: `The reasons homeowners often overprice the houses they sell` },
          { label: 'C', teks: `The methods businesses use to design effective free trials` },
          { label: 'D', teks: `The tendency to overvalue possessions, its causes, and its effects` },
        ],
        kunci: 'D',
        pembahasan: `Jawaban: D
Pembahasan:
Tipe soal: Main idea. Teks memperkenalkan endowment effect (paragraf 1), menjelaskan dua penyebabnya (paragraf 2 dan 3), lalu dampak praktisnya (paragraf 4). Opsi B merangkum keseluruhan struktur itu.
Bukti: "Psychologists and economists call this tendency the endowment effect: the habit of valuing an object more highly simply because it belongs to us."
Opsi A ("The history of classroom experiments involving coffee mugs") salah karena eksperimen cangkir hanya contoh pembuka di paragraf 1, bukan sejarahnya yang dibahas.
Opsi B ("The reasons homeowners often overprice the houses they sell") salah karena harga rumah hanya salah satu contoh dampak di paragraf 4.
Opsi C ("The methods businesses use to design effective free trials") salah karena uji coba gratis hanya disebut sekilas sebagai contoh di paragraf 4.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 12,
        lesson: 'The Endowment Effect',
        tipe: 'pg',
        pertanyaan: `The word "demand" in paragraph 1 is closest in meaning to`,
        opsi: [
          { label: 'A', teks: `argue about` },
          { label: 'B', teks: `ask for` },
          { label: 'C', teks: `give away` },
          { label: 'D', teks: `pay out` },
        ],
        kunci: 'B',
        pembahasan: `Jawaban: B
Pembahasan:
Tipe soal: Vocabulary in context. Pemilik cangkir meminta jumlah uang yang lebih besar untuk melepaskannya, sehingga "demand" berarti "ask for" (meminta).
Bukti: "people who own the mug typically demand far more to give it up than buyers are willing to pay for it"
Opsi A ("argue about") salah karena konteksnya tentang meminta harga, bukan memperdebatkan sesuatu.
Opsi C ("give away") salah karena pemilik justru menerima uang, bukan memberikannya.
Opsi D ("pay out") salah karena yang membayar adalah pembeli, bukan pemilik.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 13,
        lesson: 'The Endowment Effect',
        tipe: 'pg',
        pertanyaan: `The word "merely" in paragraph 2 is closest in meaning to`,
        opsi: [
          { label: 'A', teks: `clearly` },
          { label: 'B', teks: `certainly` },
          { label: 'C', teks: `rarely` },
          { label: 'D', teks: `only` },
        ],
        kunci: 'D',
        pembahasan: `Jawaban: D
Pembahasan:
Tipe soal: Vocabulary in context. Bagi pembeli, cangkir itu hanya sekadar kemungkinan keuntungan, sehingga "merely" bermakna "only".
Bukti: "For a buyer, the mug is merely a possible gain"
Opsi A ("clearly") salah karena "clearly" berarti jelas, tidak menunjukkan makna pembatasan.
Opsi B ("certainly") salah karena "certainly" berarti pasti, bertentangan dengan kata "possible".
Opsi C ("rarely") salah karena "rarely" berarti jarang, tidak cocok dengan konteks kalimat.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 14,
        lesson: 'The Endowment Effect',
        tipe: 'pg',
        pertanyaan: `According to paragraph 2, owners require a higher price for the mug because they`,
        opsi: [
          { label: 'A', teks: `expect its market value to rise in the near future` },
          { label: 'B', teks: `experience giving it up as a painful loss` },
          { label: 'C', teks: `believe that buyers can easily afford to pay more` },
          { label: 'D', teks: `feel more pleasure from money than from objects` },
        ],
        kunci: 'B',
        pembahasan: `Jawaban: B
Pembahasan:
Tipe soal: Detail. Paragraf 2 menyatakan bahwa bagi pemilik, menjual cangkir dipandang sebagai kerugian, dan rasa sakit kehilangan lebih kuat daripada senangnya mendapat sesuatu, sehingga mereka meminta kompensasi lebih besar.
Bukti: "For an owner, selling the mug is framed as a loss, so it requires greater compensation."
Opsi A ("expect its market value to rise in the near future") salah karena teks tidak menyebut harapan kenaikan nilai pasar.
Opsi C ("believe that buyers can easily afford to pay more") salah karena kemampuan membayar pembeli tidak dibahas.
Opsi D ("feel more pleasure from money than from objects") salah karena teks membahas rasa sakit kehilangan, bukan kesenangan terhadap uang.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 15,
        lesson: 'The Endowment Effect',
        tipe: 'pg',
        pertanyaan: `The word "they" in paragraph 3 refers to`,
        opsi: [
          { label: 'A', teks: `experiences` },
          { label: 'B', teks: `relationships` },
          { label: 'C', teks: `possessions` },
          { label: 'D', teks: `achievements` },
        ],
        kunci: 'C',
        pembahasan: `Jawaban: C
Pembahasan:
Tipe soal: Reference. Yang dapat berfungsi sebagai pengingat adalah barang milik (possessions), subjek klausa sebelumnya.
Bukti: "Possessions often become linked to a person's sense of self, and they can serve as reminders of experiences, relationships, or achievements."
Opsi A ("experiences") salah karena experiences adalah hal yang diingatkan, bukan yang menjadi pengingat.
Opsi B ("relationships") salah karena relationships juga merupakan hal yang diingatkan oleh barang.
Opsi D ("achievements") salah karena achievements adalah objek pengingat, bukan pengingatnya.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 16,
        lesson: 'The Endowment Effect',
        tipe: 'pg',
        pertanyaan: `It can be inferred from paragraph 3 that a buyer`,
        opsi: [
          { label: 'A', teks: `usually values an item more after learning its history` },
          { label: 'B', teks: `tends to feel attached to items only after many years` },
          { label: 'C', teks: `often shares the same memories as the item's owner` },
          { label: 'D', teks: `is unlikely to pay extra for an item's personal meaning` },
        ],
        kunci: 'D',
        pembahasan: `Jawaban: D
Pembahasan:
Tipe soal: Inference. Karena makna pribadi suatu barang tidak terlihat oleh orang lain, pembeli tidak akan menghargai makna itu dan kemungkinan besar tidak mau membayar lebih untuknya.
Bukti: "an item acquires a personal meaning that a stranger cannot see"
Opsi A ("usually values an item more after learning its history") salah karena teks tidak membahas pengaruh mengetahui sejarah barang terhadap pembeli.
Opsi B ("tends to feel attached to items only after many years") salah karena teks justru menyatakan keterikatan bisa muncul hanya dalam beberapa menit.
Opsi C ("often shares the same memories as the item's owner") salah karena makna pribadi itu justru tidak dapat dilihat oleh orang asing.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 17,
        lesson: 'The Endowment Effect',
        tipe: 'pg',
        pertanyaan: `According to paragraph 4, investors affected by the endowment effect may`,
        opsi: [
          { label: 'A', teks: `keep losing stocks for too long` },
          { label: 'B', teks: `sell rising stocks too quickly` },
          { label: 'C', teks: `buy stocks above market prices` },
          { label: 'D', teks: `refuse to invest in new firms` },
        ],
        kunci: 'A',
        pembahasan: `Jawaban: A
Pembahasan:
Tipe soal: Detail. Teks menyebut investor bisa mempertahankan saham yang nilainya turun lebih lama dari yang bijak, yang diparafrasekan dalam opsi A.
Bukti: "investors may hold on to declining stocks longer than is wise"
Opsi B ("sell rising stocks too quickly") salah karena teks tidak menyebut menjual saham yang naik.
Opsi C ("buy stocks above market prices") salah karena harga di atas pasar dikaitkan dengan pemilik rumah, bukan pembelian saham.
Opsi D ("refuse to invest in new firms") salah karena investasi pada perusahaan baru tidak dibahas.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 18,
        lesson: 'The Endowment Effect',
        tipe: 'pg',
        pertanyaan: `According to the passage, businesses offer free trials because`,
        opsi: [
          { label: 'A', teks: `customers rarely trust products they have not seen advertised` },
          { label: 'B', teks: `trial periods reduce the costs of producing new products` },
          { label: 'C', teks: `people who have used a product often prefer not to return it` },
          { label: 'D', teks: `buyers expect to receive gifts before making a purchase` },
        ],
        kunci: 'C',
        pembahasan: `Jawaban: C
Pembahasan:
Tipe soal: Detail. Perusahaan memanfaatkan kecenderungan pelanggan yang sudah memakai produk untuk enggan mengembalikannya.
Bukti: "knowing that customers who have used a product for a while are often reluctant to return it"
Opsi A ("customers rarely trust products they have not seen advertised") salah karena kepercayaan pada iklan tidak disebut dalam teks.
Opsi B ("trial periods reduce the costs of producing new products") salah karena biaya produksi tidak dibahas sama sekali.
Opsi D ("buyers expect to receive gifts before making a purchase") salah karena teks tidak menyebut harapan pembeli akan hadiah.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 19,
        lesson: 'The Endowment Effect',
        tipe: 'pg',
        pertanyaan: `It can be inferred from the passage that homeowners who set high asking prices`,
        opsi: [
          { label: 'A', teks: `have better information about market values than buyers do` },
          { label: 'B', teks: `likely perceive the sale of their homes as a loss to be offset` },
          { label: 'C', teks: `are deliberately exploiting the loss aversion of their buyers` },
          { label: 'D', teks: `have usually lived in their homes for only a short time` },
        ],
        kunci: 'B',
        pembahasan: `Jawaban: B
Pembahasan:
Tipe soal: Inference. Pemilik rumah adalah contoh endowment effect di paragraf 4, dan paragraf 2 menjelaskan bahwa pemilik memandang penjualan sebagai kerugian yang perlu kompensasi lebih besar. Jadi harga tinggi itu kemungkinan mencerminkan anggapan kerugian tersebut.
Bukti: "For an owner, selling the mug is framed as a loss, so it requires greater compensation. ... Homeowners frequently set asking prices above what the market will support"
Opsi A ("have better information about market values than buyers do") salah karena teks justru menyiratkan harga mereka melebihi nilai pasar, bukan lebih akurat.
Opsi C ("are deliberately exploiting the loss aversion of their buyers") salah karena yang mengalami loss aversion adalah pemilik sendiri, dan teks tidak menyebut kesengajaan memanfaatkan pembeli.
Opsi D ("have usually lived in their homes for only a short time") salah karena teks hanya menyebut efek bisa muncul cepat, bukan bahwa pemilik rumah baru sebentar tinggal.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      {
        nomor: 20,
        lesson: 'The Endowment Effect',
        tipe: 'pg',
        pertanyaan: `How is the information in the passage organized?`,
        opsi: [
          { label: 'A', teks: `Two competing theories are compared, and one is shown to be incorrect.` },
          { label: 'B', teks: `A tendency is illustrated, two explanations are given, and its effects are noted.` },
          { label: 'C', teks: `A common problem is described, and several solutions are evaluated.` },
          { label: 'D', teks: `An experiment is described, and its methods are criticized in detail.` },
        ],
        kunci: 'B',
        pembahasan: `Jawaban: B
Pembahasan:
Tipe soal: Organization. Paragraf 1 menggambarkan kecenderungan lewat contoh cangkir, paragraf 2 dan 3 memberi dua penjelasan, dan paragraf 4 menyebut dampak praktisnya.
Bukti: "One leading explanation for this pattern is loss aversion. ... A second explanation focuses on identity. ... The endowment effect has practical consequences."
Opsi A ("Two competing theories are compared, and one is shown to be incorrect.") salah karena kedua penjelasan disajikan berdampingan tanpa ada yang dinyatakan salah.
Opsi C ("A common problem is described, and several solutions are evaluated.") salah karena teks tidak mengevaluasi serangkaian solusi, hanya menyebut manfaat menyadari efek tersebut.
Opsi D ("An experiment is described, and its methods are criticized in detail.") salah karena eksperimen hanya contoh pembuka dan metodenya tidak dikritik.`,
        tingkat: 'sulit',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      judul: `The Art of Ukiyo-e`,
      isi: `During the Edo period, which lasted from the early 1600s until the mid-1800s, a distinctive art form flourished in the expanding cities of Japan. Known as ukiyo-e, or "pictures of the floating world," these woodblock prints at first celebrated the pleasures of urban life, such as kabuki theater, elegant entertainers, and seasonal festivals. Unlike paintings, which were usually one-of-a-kind works commissioned by the wealthy, prints could be made in large quantities. As a result, they sold at modest prices and found buyers among ordinary merchants and craftspeople.

Creating a single print was a collaborative effort that involved several specialists. A publisher typically chose the subject and financed the project. An artist then drew the design in ink on thin paper, which was pasted face down onto a block of smooth wood, usually cherry. Next, a carver cut through the paper and removed the wood around the drawn lines, leaving the image raised on the surface. For color prints, additional blocks were carved, one for each color. Finally, a printer brushed water-based pigments onto the blocks and pressed paper against them by hand, aligning each sheet carefully so that every color fell in exactly the right place.

Over time, the range of subjects broadened. In the nineteenth century, landscape prints became especially popular, partly because travel within Japan had grown more common and people wanted images of famous places. Katsushika Hokusai produced a celebrated series of views of Mount Fuji, while Utagawa Hiroshige depicted the rest stations along a major highway between Edo and Kyoto.

When Japan opened its ports to Western trade in the mid-nineteenth century, ukiyo-e prints began to reach Europe in large numbers. Artists in Paris were struck by their flat areas of bright color, bold outlines, and unusual viewpoints, which differed sharply from the realistic shading favored in European painting. Vincent van Gogh, for example, collected these prints and even copied several of them. In this way, an art form created for ordinary Japanese city dwellers helped shape modern Western art.`,
    },
    soal: [
      {
        nomor: 21,
        lesson: 'The Art of Ukiyo-e',
        tipe: 'pg',
        pertanyaan: `What does the passage mainly discuss?`,
        opsi: [
          { label: 'A', teks: `The history, production, and influence of Japanese woodblock prints` },
          { label: 'B', teks: `The methods carvers used to cut images into cherry wood` },
          { label: 'C', teks: `The differences between Japanese and European painting styles` },
          { label: 'D', teks: `The careers of two famous Japanese landscape artists` },
        ],
        kunci: 'A',
        pembahasan: `Jawaban: A
Pembahasan:
Tipe soal: Main idea. Teks membahas asal-usul ukiyo-e (paragraf 1), proses pembuatannya (paragraf 2), perkembangan tema (paragraf 3), dan pengaruhnya di Barat (paragraf 4). Opsi B merangkum seluruh bagian tersebut.
Bukti: "Creating a single print was a collaborative effort that involved several specialists. ... Over time, the range of subjects broadened. ... an art form created for ordinary Japanese city dwellers helped shape modern Western art."
Opsi B ("The methods carvers used to cut images into cherry wood") salah karena terlalu sempit karena hanya menyangkut satu tahap proses di paragraf 2.
Opsi C ("The differences between Japanese and European painting styles") salah karena terlalu sempit karena perbandingan gaya hanya disinggung di paragraf 4.
Opsi D ("The careers of two famous Japanese landscape artists") salah karena terlalu sempit karena Hokusai dan Hiroshige hanya disebut sebagai contoh di paragraf 3.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 22,
        lesson: 'The Art of Ukiyo-e',
        tipe: 'pg',
        pertanyaan: `The word "they" in paragraph 1 refers to`,
        opsi: [
          { label: 'A', teks: `paintings` },
          { label: 'B', teks: `the wealthy` },
          { label: 'C', teks: `cities` },
          { label: 'D', teks: `prints` },
        ],
        kunci: 'D',
        pembahasan: `Jawaban: D
Pembahasan:
Tipe soal: Reference. Kalimat sebelumnya menyatakan bahwa prints dapat dibuat dalam jumlah besar, sehingga "they" yang dijual dengan harga murah merujuk pada prints.
Bukti: "prints could be made in large quantities. As a result, they sold at modest prices"
Opsi A ("paintings") salah karena paintings justru digambarkan sebagai karya unik untuk orang kaya, bukan yang dijual murah.
Opsi B ("the wealthy") salah karena the wealthy adalah pemesan lukisan, bukan sesuatu yang dijual.
Opsi C ("cities") salah karena cities disebut di kalimat pertama dan tidak mungkin dijual dengan harga murah.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 23,
        lesson: 'The Art of Ukiyo-e',
        tipe: 'pg',
        pertanyaan: `According to paragraph 1, why were ukiyo-e prints available to ordinary people?`,
        opsi: [
          { label: 'A', teks: `They were commissioned by wealthy merchants for public display.` },
          { label: 'B', teks: `They could be produced in great numbers and sold cheaply.` },
          { label: 'C', teks: `They were given away free of charge at seasonal festivals.` },
          { label: 'D', teks: `They were painted by hand as unique works of art.` },
        ],
        kunci: 'B',
        pembahasan: `Jawaban: B
Pembahasan:
Tipe soal: Detail. Teks menyebut prints dibuat dalam jumlah besar sehingga harganya terjangkau dan dibeli pedagang serta perajin biasa. Opsi A adalah parafrase dari hal ini.
Bukti: "prints could be made in large quantities. As a result, they sold at modest prices and found buyers among ordinary merchants and craftspeople"
Opsi A ("They were commissioned by wealthy merchants for public display.") salah karena pemesanan oleh orang kaya adalah ciri lukisan, bukan prints.
Opsi C ("They were given away free of charge at seasonal festivals.") salah karena festival hanya disebut sebagai tema gambar, bukan tempat membagikan prints secara gratis.
Opsi D ("They were painted by hand as unique works of art.") salah karena karya unik buatan tangan adalah ciri lukisan yang dibandingkan dengan prints.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 24,
        lesson: 'The Art of Ukiyo-e',
        tipe: 'pg',
        pertanyaan: `Which of the following is NOT mentioned as part of the process of making a print?`,
        opsi: [
          { label: 'A', teks: `Choosing the subject and paying for the work` },
          { label: 'B', teks: `Drawing the design in ink on thin paper` },
          { label: 'C', teks: `Pressing paper against the blocks by hand` },
          { label: 'D', teks: `Framing the finished print for sale` },
        ],
        kunci: 'D',
        pembahasan: `Jawaban: D
Pembahasan:
Tipe soal: NOT/EXCEPT. Paragraf 2 menyebut tugas penerbit, seniman, pemahat, dan pencetak, tetapi tidak pernah menyebut pembingkaian hasil cetakan.
Bukti: "A publisher typically chose the subject and financed the project. ... An artist then drew the design in ink on thin paper ... pressed paper against them by hand"
Opsi A ("Choosing the subject and paying for the work") salah karena disebut sebagai tugas penerbit yang memilih tema dan membiayai proyek.
Opsi B ("Drawing the design in ink on thin paper") salah karena disebut sebagai tugas seniman yang menggambar dengan tinta di kertas tipis.
Opsi C ("Pressing paper against the blocks by hand") salah karena disebut sebagai tugas pencetak yang menekan kertas ke balok dengan tangan.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 25,
        lesson: 'The Art of Ukiyo-e',
        tipe: 'pg',
        pertanyaan: `It can be inferred from paragraph 2 that the artist's original drawing`,
        opsi: [
          { label: 'A', teks: `was kept by the publisher as a valuable record` },
          { label: 'B', teks: `was copied onto several blocks by the artist` },
          { label: 'C', teks: `was printed in color before any carving began` },
          { label: 'D', teks: `was destroyed during the carving process` },
        ],
        kunci: 'D',
        pembahasan: `Jawaban: D
Pembahasan:
Tipe soal: Inference. Gambar asli ditempel di balok kayu, lalu pemahat memotong menembus kertas dan membuang kayu di sekitarnya. Dengan demikian, gambar asli pasti rusak dalam proses pemahatan.
Bukti: "which was pasted face down onto a block of smooth wood, usually cherry. Next, a carver cut through the paper and removed the wood around the drawn lines"
Opsi A ("was kept by the publisher as a valuable record") salah karena gambar asli ditempel dan dipotong di balok, jadi tidak mungkin disimpan utuh oleh penerbit.
Opsi B ("was copied onto several blocks by the artist") salah karena seniman tidak memahat balok; balok tambahan dipahat oleh pemahat.
Opsi C ("was printed in color before any carving began") salah karena pewarnaan dilakukan oleh pencetak setelah balok selesai dipahat.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      {
        nomor: 26,
        lesson: 'The Art of Ukiyo-e',
        tipe: 'pg',
        pertanyaan: `The word "aligning" in paragraph 2 is closest in meaning to`,
        opsi: [
          { label: 'A', teks: `positioning` },
          { label: 'B', teks: `drying` },
          { label: 'C', teks: `folding` },
          { label: 'D', teks: `coloring` },
        ],
        kunci: 'A',
        pembahasan: `Jawaban: A
Pembahasan:
Tipe soal: Vocabulary in context. Pencetak mengatur letak setiap lembar dengan cermat agar setiap warna jatuh tepat di tempatnya, sehingga "aligning" berarti menempatkan atau memosisikan (positioning).
Bukti: "aligning each sheet carefully so that every color fell in exactly the right place"
Opsi B ("drying") salah karena mengeringkan kertas tidak membuat warna jatuh di tempat yang tepat.
Opsi C ("folding") salah karena melipat kertas tidak sesuai dengan tujuan menempatkan warna secara tepat.
Opsi D ("coloring") salah karena pewarnaan dilakukan pada balok, bukan makna dari mengatur letak lembar kertas.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 27,
        lesson: 'The Art of Ukiyo-e',
        tipe: 'pg',
        pertanyaan: `According to paragraph 3, one reason landscape prints became popular was that`,
        opsi: [
          { label: 'A', teks: `kabuki theater had lost much of its audience in the cities` },
          { label: 'B', teks: `publishers refused to finance prints of urban entertainers` },
          { label: 'C', teks: `more people traveled and wanted pictures of well-known sites` },
          { label: 'D', teks: `Hokusai trained many younger artists to draw mountains` },
        ],
        kunci: 'C',
        pembahasan: `Jawaban: C
Pembahasan:
Tipe soal: Detail. Teks menyatakan perjalanan di Jepang makin umum dan orang menginginkan gambar tempat terkenal. Opsi B adalah parafrase dari alasan tersebut.
Bukti: "partly because travel within Japan had grown more common and people wanted images of famous places"
Opsi A ("kabuki theater had lost much of its audience in the cities") salah karena teks tidak menyebut teater kabuki kehilangan penonton.
Opsi B ("publishers refused to finance prints of urban entertainers") salah karena teks tidak menyebut penerbit menolak membiayai gambar penghibur.
Opsi D ("Hokusai trained many younger artists to draw mountains") salah karena teks hanya menyebut Hokusai membuat seri pemandangan Gunung Fuji, bukan melatih seniman muda.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 28,
        lesson: 'The Art of Ukiyo-e',
        tipe: 'pg',
        pertanyaan: `According to paragraph 4, which feature of ukiyo-e attracted artists in Paris?`,
        opsi: [
          { label: 'A', teks: `The realistic shading of figures` },
          { label: 'B', teks: `The large size of the sheets` },
          { label: 'C', teks: `The use of rich oil paints` },
          { label: 'D', teks: `The flat areas of bright color` },
        ],
        kunci: 'D',
        pembahasan: `Jawaban: D
Pembahasan:
Tipe soal: Detail. Teks menyebut seniman Paris terkesan oleh bidang warna cerah yang datar, garis tegas, dan sudut pandang tak biasa, sesuai dengan opsi D.
Bukti: "Artists in Paris were struck by their flat areas of bright color, bold outlines, and unusual viewpoints"
Opsi A ("The realistic shading of figures") salah karena bayangan realistis justru disebut sebagai ciri lukisan Eropa yang berbeda dari ukiyo-e.
Opsi B ("The large size of the sheets") salah karena ukuran lembar cetakan tidak disebut dalam teks.
Opsi C ("The use of rich oil paints") salah karena cat minyak tidak disebut; pencetak memakai pigmen berbahan dasar air.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 29,
        lesson: 'The Art of Ukiyo-e',
        tipe: 'pg',
        pertanyaan: `The word "struck" in paragraph 4 is closest in meaning to`,
        opsi: [
          { label: 'A', teks: `injured` },
          { label: 'B', teks: `confused` },
          { label: 'C', teks: `bored` },
          { label: 'D', teks: `impressed` },
        ],
        kunci: 'D',
        pembahasan: `Jawaban: D
Pembahasan:
Tipe soal: Vocabulary in context. Para seniman bahkan mengoleksi dan meniru prints tersebut, menunjukkan mereka sangat terkesan, sehingga "struck" berarti impressed.
Bukti: "Artists in Paris were struck by their flat areas of bright color ... Vincent van Gogh, for example, collected these prints and even copied several of them."
Opsi A ("injured") salah karena makna harfiah terluka secara fisik tidak sesuai dengan konteks seni.
Opsi B ("confused") salah karena seniman yang bingung tidak akan mengoleksi dan meniru prints tersebut.
Opsi C ("bored") salah karena rasa bosan bertentangan dengan tindakan mengoleksi dan meniru prints.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 30,
        lesson: 'The Art of Ukiyo-e',
        tipe: 'pg',
        pertanyaan: `How is the information in the passage organized?`,
        opsi: [
          { label: 'A', teks: `Several theories about the origin of ukiyo-e are compared.` },
          { label: 'B', teks: `The steps of carving are ranked from simplest to hardest.` },
          { label: 'C', teks: `An art form's origins, production, and influence are described in turn.` },
          { label: 'D', teks: `Two famous artists are contrasted to show changing tastes.` },
        ],
        kunci: 'C',
        pembahasan: `Jawaban: C
Pembahasan:
Tipe soal: Organization. Teks berturut-turut memperkenalkan asal-usul ukiyo-e, menjelaskan proses pembuatannya, perkembangan temanya, lalu pengaruhnya pada seni Barat, sesuai dengan opsi C.
Bukti: "Known as ukiyo-e, or "pictures of the floating world," ... Creating a single print was a collaborative effort ... Over time, the range of subjects broadened. ... helped shape modern Western art."
Opsi A ("Several theories about the origin of ukiyo-e are compared.") salah karena teks tidak membandingkan berbagai teori tentang asal-usul ukiyo-e.
Opsi B ("The steps of carving are ranked from simplest to hardest.") salah karena tahapan pembuatan disajikan berurutan, bukan diurutkan dari termudah ke tersulit, dan hanya di satu paragraf.
Opsi D ("Two famous artists are contrasted to show changing tastes.") salah karena hokusai dan Hiroshige hanya disebut sebagai contoh, bukan dikontraskan.`,
        tingkat: 'sedang',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      judul: `Guiding Lights: A History of Lighthouses`,
      isi: `For as long as people have traveled by sea, they have needed ways to avoid dangerous coasts at night. The earliest aids to navigation were simply fires built on hilltops or beaches. As sea trade expanded in the ancient Mediterranean, these fires were moved onto tall stone towers. The most famous was the Pharos of Alexandria in Egypt, which was counted among the Seven Wonders of the Ancient World. Its name became so closely linked with lighthouses that the word for "lighthouse" in several European languages still comes from it.

For centuries, however, the light itself remained weak. Lighthouses burned wood, coal, or candles, and later oil lamps. Much of this light was wasted because it scattered in all directions instead of traveling out to sea. A breakthrough came in the early nineteenth century, when the French physicist Augustin Fresnel designed a new lens. It surrounded a lamp with rings of glass prisms that bent and concentrated the light into a single powerful beam. Lighthouses fitted with this lens could be seen much farther away, and the design spread to coastlines around the world.

Even the best lens needed constant care. Lighthouse keepers, who often lived in remote locations, refilled the fuel, cleaned soot from the glass, and trimmed the wicks so the flame burned brightly all night. Because many coastlines looked alike, each lighthouse was also given a distinctive identity. By day, towers were painted with patterns such as stripes or bands; by night, each light flashed in its own rhythm. These signals told sailors which lighthouse they were looking at and, therefore, where they were.

In the twentieth century, electric lamps replaced oil, and automatic systems allowed lights to operate without resident keepers. Later, radio beacons and satellite navigation gave ships more precise ways to determine their position. As a result, many lighthouses were taken out of service. Even so, some still serve as backup aids, and others have been preserved as museums that attract visitors interested in maritime history.`,
    },
    soal: [
      {
        nomor: 31,
        lesson: 'Guiding Lights: A History of Lighthouses',
        tipe: 'pg',
        pertanyaan: `What does the passage mainly discuss?`,
        opsi: [
          { label: 'A', teks: `The scientific principles behind the Fresnel lens` },
          { label: 'B', teks: `The daily duties of lighthouse keepers in remote areas` },
          { label: 'C', teks: `The growth of sea trade in the ancient Mediterranean` },
          { label: 'D', teks: `The development of lighthouses from ancient fires to modern times` },
        ],
        kunci: 'D',
        pembahasan: `Jawaban: D
Pembahasan:
Tipe soal: Main idea. Teks menelusuri sejarah mercusuar dari api di bukit dan Pharos (paragraf 1), lensa Fresnel (paragraf 2), penjaga dan identitas mercusuar (paragraf 3), hingga otomatisasi dan pelestarian di abad ke-20 (paragraf 4). Opsi C merangkum seluruh perkembangan itu.
Bukti: "The earliest aids to navigation were simply fires built on hilltops or beaches."
Opsi A ("The scientific principles behind the Fresnel lens") salah karena terlalu sempit karena lensa Fresnel hanya dibahas di paragraf 2.
Opsi B ("The daily duties of lighthouse keepers in remote areas") salah karena terlalu sempit karena tugas penjaga hanya dibahas di sebagian paragraf 3.
Opsi C ("The growth of sea trade in the ancient Mediterranean") salah karena perdagangan laut hanya disebut sekilas sebagai latar belakang di paragraf 1.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 32,
        lesson: 'Guiding Lights: A History of Lighthouses',
        tipe: 'pg',
        pertanyaan: `It can be inferred from paragraph 1 that the move from open fires to stone towers was encouraged by`,
        opsi: [
          { label: 'A', teks: `the discovery of new materials for building towers` },
          { label: 'B', teks: `competition among rulers to build famous monuments` },
          { label: 'C', teks: `the invention of more powerful lenses for lamps` },
          { label: 'D', teks: `an increase in the number of ships carrying goods` },
        ],
        kunci: 'D',
        pembahasan: `Jawaban: D
Pembahasan:
Tipe soal: Inference. Teks mengaitkan pemindahan api ke menara dengan berkembangnya perdagangan laut. Perdagangan yang meluas berarti makin banyak kapal pengangkut barang yang membutuhkan panduan, sehingga opsi A dapat disimpulkan.
Bukti: "As sea trade expanded in the ancient Mediterranean, these fires were moved onto tall stone towers."
Opsi A ("the discovery of new materials for building towers") salah karena teks tidak menyebut penemuan bahan bangunan baru.
Opsi B ("competition among rulers to build famous monuments") salah karena teks tidak membahas persaingan para penguasa.
Opsi C ("the invention of more powerful lenses for lamps") salah karena lensa baru muncul jauh kemudian, yaitu pada awal abad ke-19.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 33,
        lesson: 'Guiding Lights: A History of Lighthouses',
        tipe: 'pg',
        pertanyaan: `According to paragraph 1, the Pharos of Alexandria`,
        opsi: [
          { label: 'A', teks: `was regarded as one of the great marvels of the ancient world` },
          { label: 'B', teks: `was the first lighthouse to use a glass lens` },
          { label: 'C', teks: `was built on the site of an earlier beach fire` },
          { label: 'D', teks: `was named after a European word for a lighthouse` },
        ],
        kunci: 'A',
        pembahasan: `Jawaban: A
Pembahasan:
Tipe soal: Detail. Teks menyatakan Pharos termasuk Tujuh Keajaiban Dunia Kuno, yang diparafrasekan dalam opsi D sebagai salah satu keajaiban besar dunia kuno.
Bukti: "which was counted among the Seven Wonders of the Ancient World"
Opsi B ("was the first lighthouse to use a glass lens") salah karena lensa kaca baru dikembangkan Fresnel pada abad ke-19.
Opsi C ("was built on the site of an earlier beach fire") salah karena teks tidak menyebut Pharos dibangun di bekas lokasi api pantai.
Opsi D ("was named after a European word for a lighthouse") salah karena justru kata Eropa untuk mercusuar berasal dari nama Pharos, bukan sebaliknya.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 34,
        lesson: 'Guiding Lights: A History of Lighthouses',
        tipe: 'pg',
        pertanyaan: `According to paragraph 2, early light sources were inefficient because`,
        opsi: [
          { label: 'A', teks: `their fuel was too expensive to obtain regularly` },
          { label: 'B', teks: `their glass prisms bent the light in the wrong direction` },
          { label: 'C', teks: `their light spread out instead of being directed seaward` },
          { label: 'D', teks: `their flames usually went out before the night ended` },
        ],
        kunci: 'C',
        pembahasan: `Jawaban: C
Pembahasan:
Tipe soal: Detail. Teks menjelaskan cahaya sumber lama terbuang karena menyebar ke segala arah, bukan mengarah ke laut. Opsi B adalah parafrase dari pernyataan ini.
Bukti: "Much of this light was wasted because it scattered in all directions instead of traveling out to sea."
Opsi A ("their fuel was too expensive to obtain regularly") salah karena teks tidak membahas mahalnya bahan bakar.
Opsi B ("their glass prisms bent the light in the wrong direction") salah karena prisma kaca adalah bagian lensa Fresnel yang justru memperbaiki masalah ini.
Opsi D ("their flames usually went out before the night ended") salah karena teks tidak menyebut api padam sebelum malam berakhir.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 35,
        lesson: 'Guiding Lights: A History of Lighthouses',
        tipe: 'pg',
        pertanyaan: `The word "concentrated" in paragraph 2 is closest in meaning to`,
        opsi: [
          { label: 'A', teks: `focused` },
          { label: 'B', teks: `heated` },
          { label: 'C', teks: `divided` },
          { label: 'D', teks: `softened` },
        ],
        kunci: 'A',
        pembahasan: `Jawaban: A
Pembahasan:
Tipe soal: Vocabulary in context. Prisma mengumpulkan cahaya yang tadinya menyebar menjadi satu berkas kuat, sehingga "concentrated" berarti memfokuskan (focused).
Bukti: "bent and concentrated the light into a single powerful beam"
Opsi B ("heated") salah karena konteksnya tentang arah cahaya, bukan suhu.
Opsi C ("divided") salah karena membagi cahaya bertentangan dengan hasil berupa satu berkas tunggal.
Opsi D ("softened") salah karena melembutkan cahaya bertentangan dengan berkas yang kuat.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 36,
        lesson: 'Guiding Lights: A History of Lighthouses',
        tipe: 'pg',
        pertanyaan: `Why does the author mention that "many coastlines looked alike" in paragraph 3?`,
        opsi: [
          { label: 'A', teks: `To explain why each lighthouse needed a way to be identified` },
          { label: 'B', teks: `To explain why keepers had to live in remote locations` },
          { label: 'C', teks: `To explain why the flames had to burn brightly all night` },
          { label: 'D', teks: `To suggest that lighthouses were less useful on some coasts` },
        ],
        kunci: 'A',
        pembahasan: `Jawaban: A
Pembahasan:
Tipe soal: Author's purpose. Penulis menyebut kemiripan garis pantai sebagai alasan setiap mercusuar diberi identitas khas, yang kemudian dijelaskan berupa pola cat dan irama kedipan agar pelaut tahu mercusuar mana yang mereka lihat.
Bukti: "Because many coastlines looked alike, each lighthouse was also given a distinctive identity."
Opsi B ("To explain why keepers had to live in remote locations") salah karena lokasi terpencil penjaga disebut terpisah dan tidak dikaitkan dengan kemiripan pantai.
Opsi C ("To explain why the flames had to burn brightly all night") salah karena nyala terang sepanjang malam terkait tugas memotong sumbu, bukan kemiripan pantai.
Opsi D ("To suggest that lighthouses were less useful on some coasts") salah karena teks tidak menyatakan mercusuar kurang berguna di pantai tertentu.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      {
        nomor: 37,
        lesson: 'Guiding Lights: A History of Lighthouses',
        tipe: 'pg',
        pertanyaan: `The word "distinctive" in paragraph 3 is closest in meaning to`,
        opsi: [
          { label: 'A', teks: `recognizable` },
          { label: 'B', teks: `permanent` },
          { label: 'C', teks: `official` },
          { label: 'D', teks: `complex` },
        ],
        kunci: 'A',
        pembahasan: `Jawaban: A
Pembahasan:
Tipe soal: Vocabulary in context. Identitas khas itu dibuat agar setiap mercusuar bisa dibedakan dan dikenali oleh pelaut, sehingga "distinctive" paling dekat dengan "recognizable".
Bukti: "each lighthouse was also given a distinctive identity"
Opsi B ("permanent") salah karena konteksnya tentang membedakan mercusuar, bukan tentang sifat yang tetap.
Opsi C ("official") salah karena teks tidak menekankan identitas resmi.
Opsi D ("complex") salah karena pola seperti garis atau pita tidak digambarkan sebagai rumit.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 38,
        lesson: 'Guiding Lights: A History of Lighthouses',
        tipe: 'pg',
        pertanyaan: `The word "they" in paragraph 3 refers to`,
        opsi: [
          { label: 'A', teks: `towers` },
          { label: 'B', teks: `signals` },
          { label: 'C', teks: `sailors` },
          { label: 'D', teks: `patterns` },
        ],
        kunci: 'C',
        pembahasan: `Jawaban: C
Pembahasan:
Tipe soal: Reference. Pihak yang melihat mercusuar dan perlu mengetahui posisinya adalah pelaut, yang disebut tepat sebelum kata "they".
Bukti: "These signals told sailors which lighthouse they were looking at and, therefore, where they were."
Opsi A ("towers") salah karena menara adalah benda yang dilihat, bukan yang melihat.
Opsi B ("signals") salah karena sinyal adalah alat pemberi informasi, bukan yang menerima informasi.
Opsi D ("patterns") salah karena pola cat tidak bisa melihat mercusuar.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 39,
        lesson: 'Guiding Lights: A History of Lighthouses',
        tipe: 'pg',
        pertanyaan: `According to paragraph 4, why were many lighthouses taken out of service?`,
        opsi: [
          { label: 'A', teks: `Electric lamps proved too costly to maintain.` },
          { label: 'B', teks: `Keepers were no longer willing to live in them.` },
          { label: 'C', teks: `Ships gained better tools for finding their location.` },
          { label: 'D', teks: `Museums wanted to use the buildings for exhibits.` },
        ],
        kunci: 'C',
        pembahasan: `Jawaban: C
Pembahasan:
Tipe soal: Detail. Frasa "As a result" menunjukkan banyak mercusuar dinonaktifkan karena radio beacon dan navigasi satelit memberi kapal cara lebih akurat menentukan posisi, sesuai opsi C.
Bukti: "Later, radio beacons and satellite navigation gave ships more precise ways to determine their position. As a result, many lighthouses were taken out of service."
Opsi A ("Electric lamps proved too costly to maintain.") salah karena teks tidak menyebut lampu listrik mahal dirawat.
Opsi B ("Keepers were no longer willing to live in them.") salah karena penjaga tidak lagi diperlukan karena sistem otomatis, bukan karena menolak tinggal.
Opsi D ("Museums wanted to use the buildings for exhibits.") salah karena penggunaan sebagai museum adalah akibat, bukan penyebab penonaktifan.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 40,
        lesson: 'Guiding Lights: A History of Lighthouses',
        tipe: 'pg',
        pertanyaan: `All of the following are mentioned as twentieth-century developments EXCEPT`,
        opsi: [
          { label: 'A', teks: `the replacement of oil lamps with electric ones` },
          { label: 'B', teks: `the operation of lights without resident keepers` },
          { label: 'C', teks: `the creation of a larger version of the Fresnel lens` },
          { label: 'D', teks: `the use of radio beacons for navigation` },
        ],
        kunci: 'C',
        pembahasan: `Jawaban: C
Pembahasan:
Tipe soal: NOT/EXCEPT. Paragraf 4 menyebut lampu listrik, sistem otomatis tanpa penjaga, dan radio beacon. Versi lensa Fresnel yang lebih besar tidak pernah disebut.
Bukti: "electric lamps replaced oil ... automatic systems allowed lights to operate without resident keepers ... radio beacons and satellite navigation"
Opsi A ("the replacement of oil lamps with electric ones") salah karena disebut dalam "electric lamps replaced oil".
Opsi B ("the operation of lights without resident keepers") salah karena disebut dalam "automatic systems allowed lights to operate without resident keepers".
Opsi D ("the use of radio beacons for navigation") salah karena disebut dalam "radio beacons and satellite navigation".`,
        tingkat: 'sedang',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      judul: `Living Light in the Deep Sea`,
      isi: `Sunlight fades rapidly as it passes through seawater, and below a depth of a few hundred meters the ocean is almost completely dark. Yet many animals living there, including fish, squid, shrimp, and jellyfish, are capable of bioluminescence, the production of light by a living organism. In most cases, the light results from a chemical reaction in which a compound called luciferin combines with oxygen with the help of an enzyme called luciferase. This reaction releases energy mainly as light rather than heat. Some animals make these chemicals themselves, while others house glowing bacteria in special organs.

Deep-sea animals use their light in a variety of ways. The anglerfish, for example, dangles a glowing lure in front of its mouth to attract curious prey. Certain shrimp defend themselves by releasing a cloud of luminous fluid that startles an attacker, much as some squid in shallower waters squirt dark ink to confuse predators. Perhaps the most subtle use is counterillumination. The hatchetfish produces a faint glow along its underside that matches the dim light filtering down from above. To a predator looking up from below, the fish's outline seems to disappear. Light also helps some species recognize and attract mates.

Most deep-sea bioluminescence is blue or blue-green. These colors travel farthest through seawater, and many deep-sea animals have eyes that are sensitive only to blue light. A few dragonfish, however, have evolved an unusual advantage. In addition to blue light, they produce red light, which most of their prey cannot detect. These fish can therefore illuminate nearby animals without revealing their own presence, much like a hunter using an invisible searchlight.

Studying these animals has long been a challenge. Many are so fragile that they are damaged or killed when nets drag them to the surface, and their light displays often change or stop under bright laboratory conditions. For this reason, researchers increasingly rely on submersibles and remotely operated vehicles equipped with cameras sensitive to very low light. Even so, the meaning of many glowing displays remains unknown, and scientists continue to discover new luminous species.`,
    },
    soal: [
      {
        nomor: 41,
        lesson: 'Living Light in the Deep Sea',
        tipe: 'pg',
        pertanyaan: `What does the passage mainly discuss?`,
        opsi: [
          { label: 'A', teks: `The chemical reaction between luciferin and oxygen` },
          { label: 'B', teks: `How deep-sea animals produce light and the ways they use it` },
          { label: 'C', teks: `The equipment scientists use to explore the deep ocean` },
          { label: 'D', teks: `The reasons sunlight cannot reach the deep sea` },
        ],
        kunci: 'B',
        pembahasan: `Jawaban: B
Pembahasan:
Tipe soal: Main idea. Teks menjelaskan cara hewan laut dalam menghasilkan cahaya (paragraf 1), berbagai kegunaannya (paragraf 2 dan 3), serta tantangan penelitiannya (paragraf 4). Opsi B merangkum keseluruhan isi tersebut.
Bukti: "Yet many animals living there, including fish, squid, shrimp, and jellyfish, are capable of bioluminescence ... Deep-sea animals use their light in a variety of ways."
Opsi A ("The chemical reaction between luciferin and oxygen") salah karena terlalu sempit karena reaksi kimia hanya dibahas di paragraf 1.
Opsi C ("The equipment scientists use to explore the deep ocean") salah karena terlalu sempit karena peralatan penelitian hanya disebut di paragraf 4.
Opsi D ("The reasons sunlight cannot reach the deep sea") salah karena hanya menjadi latar pembuka di kalimat pertama, bukan fokus teks.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 42,
        lesson: 'Living Light in the Deep Sea',
        tipe: 'pg',
        pertanyaan: `All of the following are mentioned as uses of bioluminescence EXCEPT`,
        opsi: [
          { label: 'A', teks: `attracting prey` },
          { label: 'B', teks: `keeping the body warm` },
          { label: 'C', teks: `surprising attackers` },
          { label: 'D', teks: `hiding the body's outline` },
        ],
        kunci: 'B',
        pembahasan: `Jawaban: B
Pembahasan:
Tipe soal: NOT/EXCEPT. Teks menyebut cahaya dipakai untuk menarik mangsa, mengejutkan penyerang, dan menyamarkan siluet tubuh. Menghangatkan tubuh tidak disebut; justru teks menyatakan reaksi ini melepaskan energi terutama sebagai cahaya, bukan panas.
Bukti: "to attract curious prey ... a cloud of luminous fluid that startles an attacker ... the fish's outline seems to disappear"
Opsi A ("attracting prey") salah karena disebut dalam contoh anglerfish yang memakai umpan bercahaya untuk menarik mangsa.
Opsi C ("surprising attackers") salah karena disebut dalam contoh udang yang melepaskan cairan bercahaya untuk mengejutkan penyerang.
Opsi D ("hiding the body's outline") salah karena disebut dalam contoh hatchetfish yang siluetnya seolah menghilang.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 43,
        lesson: 'Living Light in the Deep Sea',
        tipe: 'pg',
        pertanyaan: `Why does the author mention squid that "squirt dark ink" in paragraph 2?`,
        opsi: [
          { label: 'A', teks: `To show that squid are among the animals capable of bioluminescence` },
          { label: 'B', teks: `To compare the shrimp's defense to a more familiar way of escaping predators` },
          { label: 'C', teks: `To explain how shrimp manage to produce their luminous fluid` },
          { label: 'D', teks: `To argue that ink is a more effective defense than light` },
        ],
        kunci: 'B',
        pembahasan: `Jawaban: B
Pembahasan:
Tipe soal: Author's purpose. Frasa "much as" menunjukkan perbandingan: pertahanan udang dengan cairan bercahaya disamakan dengan cara cumi-cumi menyemprotkan tinta, perilaku yang lebih dikenal pembaca.
Bukti: "Certain shrimp defend themselves by releasing a cloud of luminous fluid that startles an attacker, much as some squid in shallower waters squirt dark ink to confuse predators."
Opsi A ("To show that squid are among the animals capable of bioluminescence") salah karena cumi-cumi bercahaya memang disebut di paragraf 1, tetapi tinta di sini dipakai sebagai pembanding, bukan contoh bioluminesensi.
Opsi C ("To explain how shrimp manage to produce their luminous fluid") salah karena teks tidak menjelaskan cara udang membuat cairan bercahayanya.
Opsi D ("To argue that ink is a more effective defense than light") salah karena penulis tidak membandingkan keefektifan tinta dan cahaya.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      {
        nomor: 44,
        lesson: 'Living Light in the Deep Sea',
        tipe: 'pg',
        pertanyaan: `According to the passage, the glow on the hatchetfish's underside helps the fish`,
        opsi: [
          { label: 'A', teks: `blend in with the light coming from the surface` },
          { label: 'B', teks: `attract mates swimming below it` },
          { label: 'C', teks: `lure prey toward its mouth` },
          { label: 'D', teks: `warn other hatchetfish of danger` },
        ],
        kunci: 'A',
        pembahasan: `Jawaban: A
Pembahasan:
Tipe soal: Detail. Cahaya di bagian bawah tubuh hatchetfish menyamai cahaya redup dari atas sehingga siluetnya tak terlihat oleh predator di bawah. Opsi C memparafrasekan hal ini.
Bukti: "The hatchetfish produces a faint glow along its underside that matches the dim light filtering down from above."
Opsi B ("attract mates swimming below it") salah karena menarik pasangan disebut sebagai kegunaan cahaya pada spesies lain, bukan fungsi cahaya hatchetfish.
Opsi C ("lure prey toward its mouth") salah karena memancing mangsa ke mulut adalah fungsi umpan anglerfish.
Opsi D ("warn other hatchetfish of danger") salah karena teks tidak menyebut cahaya hatchetfish sebagai tanda bahaya bagi sesamanya.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 45,
        lesson: 'Living Light in the Deep Sea',
        tipe: 'pg',
        pertanyaan: `It can be inferred from paragraph 3 that the dragonfish's red light would be less useful if`,
        opsi: [
          { label: 'A', teks: `the dragonfish's prey were able to see red light` },
          { label: 'B', teks: `the dragonfish continued to produce blue light as well` },
          { label: 'C', teks: `blue light traveled farther through seawater` },
          { label: 'D', teks: `the dragonfish's prey lived in large groups` },
        ],
        kunci: 'A',
        pembahasan: `Jawaban: A
Pembahasan:
Tipe soal: Inference. Keunggulan cahaya merah terletak pada kenyataan bahwa mangsa tidak dapat melihatnya. Jika mangsa mampu melihat cahaya merah, dragonfish akan ketahuan sehingga cahayanya kurang berguna.
Bukti: "they produce red light, which most of their prey cannot detect. These fish can therefore illuminate nearby animals without revealing their own presence"
Opsi B ("the dragonfish continued to produce blue light as well") salah karena dragonfish memang sudah menghasilkan cahaya biru juga, dan hal itu tidak mengurangi keunggulan cahaya merahnya.
Opsi C ("blue light traveled farther through seawater") salah karena cahaya biru memang sudah paling jauh merambat dan hal ini tidak berkaitan dengan kegunaan cahaya merah.
Opsi D ("the dragonfish's prey lived in large groups") salah karena teks tidak menyinggung apakah mangsa hidup berkelompok.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      {
        nomor: 46,
        lesson: 'Living Light in the Deep Sea',
        tipe: 'pg',
        pertanyaan: `The word "detect" in paragraph 3 is closest in meaning to`,
        opsi: [
          { label: 'A', teks: `produce` },
          { label: 'B', teks: `notice` },
          { label: 'C', teks: `avoid` },
          { label: 'D', teks: `reflect` },
        ],
        kunci: 'B',
        pembahasan: `Jawaban: B
Pembahasan:
Tipe soal: Vocabulary in context. Kalimat berikutnya menyatakan dragonfish dapat menyinari hewan lain tanpa ketahuan, artinya mangsa tidak bisa melihat atau menyadari cahaya merah. "Detect" berarti menyadari atau menangkap, sama dengan "notice".
Bukti: "they produce red light, which most of their prey cannot detect"
Opsi A ("produce") salah karena yang menghasilkan cahaya merah adalah dragonfish, bukan mangsanya.
Opsi C ("avoid") salah karena menghindari tidak cocok karena mangsa justru tidak menyadari keberadaan cahaya itu.
Opsi D ("reflect") salah karena memantulkan cahaya tidak berkaitan dengan kemampuan mangsa melihat cahaya merah.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 47,
        lesson: 'Living Light in the Deep Sea',
        tipe: 'pg',
        pertanyaan: `According to paragraph 4, why do researchers increasingly rely on submersibles?`,
        opsi: [
          { label: 'A', teks: `Nets have become too expensive to use in deep water.` },
          { label: 'B', teks: `Submersibles can bring living animals safely to the surface.` },
          { label: 'C', teks: `Many deep-sea animals are harmed when they are brought up.` },
          { label: 'D', teks: `Bright laboratory lights tend to damage sensitive cameras.` },
        ],
        kunci: 'C',
        pembahasan: `Jawaban: C
Pembahasan:
Tipe soal: Detail. Frasa "For this reason" merujuk pada fakta bahwa banyak hewan rusak atau mati ketika ditarik jaring ke permukaan dan pertunjukan cahayanya berubah di laboratorium. Opsi D memparafrasekan alasan tersebut.
Bukti: "Many are so fragile that they are damaged or killed when nets drag them to the surface ... For this reason, researchers increasingly rely on submersibles"
Opsi A ("Nets have become too expensive to use in deep water.") salah karena teks tidak menyebut biaya jaring.
Opsi B ("Submersibles can bring living animals safely to the surface.") salah karena teks tidak menyatakan kapal selam membawa hewan ke permukaan; kapal selam dipakai untuk merekam di laut dalam.
Opsi D ("Bright laboratory lights tend to damage sensitive cameras.") salah karena cahaya terang laboratorium disebut mengganggu pertunjukan cahaya hewan, bukan merusak kamera.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 48,
        lesson: 'Living Light in the Deep Sea',
        tipe: 'pg',
        pertanyaan: `The word "fragile" in paragraph 4 is closest in meaning to`,
        opsi: [
          { label: 'A', teks: `ancient` },
          { label: 'B', teks: `delicate` },
          { label: 'C', teks: `rare` },
          { label: 'D', teks: `aggressive` },
        ],
        kunci: 'B',
        pembahasan: `Jawaban: B
Pembahasan:
Tipe soal: Vocabulary in context. Hewan yang mudah rusak atau mati ketika ditarik ke permukaan adalah hewan yang rapuh. "Fragile" berarti rapuh, sepadan dengan "delicate".
Bukti: "Many are so fragile that they are damaged or killed when nets drag them to the surface"
Opsi A ("ancient") salah karena usia hewan tidak berkaitan dengan mudahnya mereka rusak.
Opsi C ("rare") salah karena kelangkaan tidak menjelaskan mengapa hewan rusak saat ditarik jaring.
Opsi D ("aggressive") salah karena sifat agresif bertentangan dengan konteks hewan yang mudah rusak.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 49,
        lesson: 'Living Light in the Deep Sea',
        tipe: 'pg',
        pertanyaan: `Which of the following can be inferred from paragraph 4?`,
        opsi: [
          { label: 'A', teks: `Laboratory studies have produced no useful information about bioluminescence.` },
          { label: 'B', teks: `Submersibles have allowed scientists to explain the meaning of most glowing displays.` },
          { label: 'C', teks: `Observing deep-sea animals in their own environment gives a more accurate picture of their light displays.` },
          { label: 'D', teks: `Deep-sea animals permanently lose their ability to glow once they are captured.` },
        ],
        kunci: 'C',
        pembahasan: `Jawaban: C
Pembahasan:
Tipe soal: Inference. Karena pertunjukan cahaya berubah atau berhenti di laboratorium, peneliti beralih mengamati hewan di habitatnya dengan kamera khusus. Ini menyiratkan bahwa pengamatan di lingkungan asli memberi gambaran yang lebih akurat.
Bukti: "their light displays often change or stop under bright laboratory conditions. For this reason, researchers increasingly rely on submersibles and remotely operated vehicles equipped with cameras sensitive to very low light"
Opsi A ("Laboratory studies have produced no useful information about bioluminescence.") salah karena terlalu ekstrem karena teks hanya menyebut kendala laboratorium, bukan bahwa laboratorium tidak menghasilkan apa pun.
Opsi B ("Submersibles have allowed scientists to explain the meaning of most glowing displays.") salah karena bertentangan dengan teks yang menyatakan makna banyak pertunjukan cahaya masih belum diketahui.
Opsi D ("Deep-sea animals permanently lose their ability to glow once they are captured.") salah karena teks hanya menyebut pertunjukan cahaya sering berubah atau berhenti, tidak hilang secara permanen.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      {
        nomor: 50,
        lesson: 'Living Light in the Deep Sea',
        tipe: 'pg',
        pertanyaan: `The tone of the passage can best be described as`,
        opsi: [
          { label: 'A', teks: `admiring` },
          { label: 'B', teks: `skeptical` },
          { label: 'C', teks: `objective` },
          { label: 'D', teks: `dismissive` },
        ],
        kunci: 'C',
        pembahasan: `Jawaban: C
Pembahasan:
Tipe soal: Tone/attitude. Penulis menyajikan fakta tentang cara kerja, kegunaan, dan penelitian bioluminesensi secara netral tanpa pujian berlebihan atau kritik, sehingga nadanya objektif.
Bukti: "Deep-sea animals use their light in a variety of ways."
Opsi A ("admiring") salah karena meskipun topiknya menarik, penulis tidak menggunakan bahasa pujian atau kekaguman.
Opsi B ("skeptical") salah karena penulis tidak meragukan fakta atau temuan yang disampaikan.
Opsi D ("dismissive") salah karena penulis tidak meremehkan topik; ia menjelaskannya secara serius dan rinci.`,
        tingkat: 'sulit',
        status: 'draft',
      },
    ],
  },
];
