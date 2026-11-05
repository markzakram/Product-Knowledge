import type { Kelompok } from '@/lib/skema';

/**
 * Contoh Listening Comprehension: 50 soal dari Toefl Generator
 * (output/uji-nyata/seed-2026), dibuat AI dan belum direview. Audionya suara
 * sintetis (edge-tts), satu berkas per soal di public/audio/toeflacademy/.
 * Part A nomor 1-30, Part B 31-38, Part C 39-50.
 *
 * Part B dan C: percakapan atau kuliah utuh hanya ada di audio soal pertama
 * tiap kelompok empat soal (31, 35, 39, 43, 47); audio tiga soal berikutnya
 * hanya membacakan pertanyaannya. Transkrip lengkap ada di pembahasan.
 */
export const contohListening: Kelompok[] = [
  {
    stimulus: { judul: `Part A: percakapan pendek (soal 1–30)` },
    soal: [
      {
        nomor: 1,
        lesson: 'Part A > Idiom',
        tipe: 'pg',
        pertanyaan: `Listen to the audio carefully.`,
        audio: 'audio/toeflacademy/itp-lc-01.mp3',
        opsi: [
          { label: 'A', teks: `She skipped most of the assigned pages.` },
          { label: 'B', teks: `She left her textbook at home today.` },
          { label: 'C', teks: `She found the material easy to follow.` },
          { label: 'D', teks: `She worked late into the night to finish.` },
        ],
        kunci: 'D',
        pembahasan: `Jawaban: D
Pembahasan:
Transkrip Audio:
MAN: Hey, did you finish the reading for today's discussion?
WOMAN: Barely. I had to burn the midnight oil to get through all three chapters.
NARRATOR: What does the woman mean?
Tipe soal: Idiom. Idiom 'burn the midnight oil' berarti begadang untuk bekerja atau belajar. Wanita itu menyelesaikan bacaannya dengan belajar sampai larut malam.
Opsi A ("She skipped most of the assigned pages.") salah karena wanita itu justru berhasil membaca ketiga bab tersebut.
Opsi B ("She left her textbook at home today.") salah karena tidak ada pembicaraan tentang buku yang tertinggal.
Opsi C ("She found the material easy to follow.") salah karena kata 'Barely' dan begadang menunjukkan bacaannya tidak mudah diselesaikan.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 2,
        lesson: 'Part A > Suggestion',
        tipe: 'pg',
        pertanyaan: `Listen to the audio carefully.`,
        audio: 'audio/toeflacademy/itp-lc-02.mp3',
        opsi: [
          { label: 'A', teks: `Contact the property owner about the problem.` },
          { label: 'B', teks: `Buy some tools to repair the leak herself.` },
          { label: 'C', teks: `Wash the dishes somewhere else for a while.` },
          { label: 'D', teks: `Start looking for a new apartment soon.` },
        ],
        kunci: 'A',
        pembahasan: `Jawaban: A
Pembahasan:
Transkrip Audio:
WOMAN: Our kitchen sink has been leaking all week, and it's getting worse.
MAN: Why don't you send the landlord a message today? Fixing it is his responsibility, not ours.
NARRATOR: What does the man suggest the woman do?
Tipe soal: Saran. Pria itu menyarankan dengan 'Why don't you send the landlord a message', yaitu menghubungi pemilik apartemen karena perbaikan adalah tanggung jawabnya.
Opsi B ("Buy some tools to repair the leak herself.") salah karena pria itu justru mengatakan perbaikan bukan tanggung jawab mereka.
Opsi C ("Wash the dishes somewhere else for a while.") salah karena tidak ada saran untuk mencuci piring di tempat lain.
Opsi D ("Start looking for a new apartment soon.") salah karena pria itu tidak menyarankan pindah tempat tinggal.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 3,
        lesson: 'Part A > Agreement',
        tipe: 'pg',
        pertanyaan: `Listen to the audio carefully.`,
        audio: 'audio/toeflacademy/itp-lc-03.mp3',
        opsi: [
          { label: 'A', teks: `He doubts that dividing the work is a good idea.` },
          { label: 'B', teks: `He thinks the plan would save the group time.` },
          { label: 'C', teks: `He would like to take on more than one chapter.` },
          { label: 'D', teks: `He has already read every chapter on his own.` },
        ],
        kunci: 'A',
        pembahasan: `Jawaban: A
Pembahasan:
Transkrip Audio:
WOMAN: I think we should split the chapters so each of us only summarizes one.
MAN: I'm not so sure about that. We'd all miss the details in the chapters we didn't read.
NARRATOR: What does the man mean?
Tipe soal: Setuju/tidak setuju. Ungkapan 'I'm not so sure about that' menunjukkan ketidaksetujuan. Pria itu khawatir setiap anggota akan melewatkan isi bab yang tidak mereka baca.
Opsi B ("He thinks the plan would save the group time.") salah karena pria itu tidak setuju dan tidak memuji rencana tersebut.
Opsi C ("He would like to take on more than one chapter.") salah karena pria itu tidak menawarkan diri mengerjakan bab tambahan.
Opsi D ("He has already read every chapter on his own.") salah karena tidak disebutkan bahwa ia sudah membaca semua bab.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 4,
        lesson: 'Part A > Implication',
        tipe: 'pg',
        pertanyaan: `Listen to the audio carefully.`,
        audio: 'audio/toeflacademy/itp-lc-04.mp3',
        opsi: [
          { label: 'A', teks: `She plans to buy more paint this afternoon.` },
          { label: 'B', teks: `She'd prefer not to lend her supplies now.` },
          { label: 'C', teks: `She has already completed her own artwork.` },
          { label: 'D', teks: `She doesn't usually work with that medium.` },
        ],
        kunci: 'B',
        pembahasan: `Jawaban: B
Pembahasan:
Transkrip Audio:
MAN: Is it okay if I borrow your oil paints for my project this afternoon?
WOMAN: Well, I've only got a little left of each color, and my own painting's due Friday.
NARRATOR: What does the woman imply?
Tipe soal: Makna tersirat. Wanita itu menolak secara halus dengan menyebut catnya tinggal sedikit dan ia masih harus menyelesaikan lukisannya sendiri sebelum Jumat.
Opsi A ("She plans to buy more paint this afternoon.") salah karena wanita itu tidak menyebut rencana membeli cat.
Opsi C ("She has already completed her own artwork.") salah karena lukisannya justru belum selesai karena tenggatnya hari Jumat.
Opsi D ("She doesn't usually work with that medium.") salah karena ia memiliki cat minyak sehingga ia memang memakainya.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 5,
        lesson: 'Part A > Negative Expression',
        tipe: 'pg',
        pertanyaan: `Listen to the audio carefully.`,
        audio: 'audio/toeflacademy/itp-lc-05.mp3',
        opsi: [
          { label: 'A', teks: `She has never tried the cheaper kind.` },
          { label: 'B', teks: `The famous brands are worth paying more for.` },
          { label: 'C', teks: `The less expensive cereal is just as good.` },
          { label: 'D', teks: `She has stopped eating cereal recently.` },
        ],
        kunci: 'C',
        pembahasan: `Jawaban: C
Pembahasan:
Transkrip Audio:
MAN: These store-brand cereals are half the price. Do you think they taste any worse?
WOMAN: Not in the least. I've been buying them all semester and haven't missed the name brands once.
NARRATOR: What does the woman mean?
Tipe soal: Ungkapan negatif. 'Not in the least' berarti sama sekali tidak; rasanya tidak lebih buruk. Ia sudah membelinya sepanjang semester tanpa merindukan merek terkenal.
Opsi A ("She has never tried the cheaper kind.") salah karena ia justru sudah membelinya sepanjang semester.
Opsi B ("The famous brands are worth paying more for.") salah karena ia tidak merindukan merek terkenal sehingga tidak merasa perlu membayar lebih.
Opsi D ("She has stopped eating cereal recently.") salah karena ia masih rutin membeli sereal.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 6,
        lesson: 'Part A > Idiom',
        tipe: 'pg',
        pertanyaan: `Listen to the audio carefully.`,
        audio: 'audio/toeflacademy/itp-lc-06.mp3',
        opsi: [
          { label: 'A', teks: `The illness should go away by itself with time.` },
          { label: 'B', teks: `He needs to start taking stronger medicine.` },
          { label: 'C', teks: `He has to exercise more to recover quickly.` },
          { label: 'D', teks: `The doctor wants to do more tests on him.` },
        ],
        kunci: 'A',
        pembahasan: `Jawaban: A
Pembahasan:
Transkrip Audio:
WOMAN: You've been coughing all week. Did the doctor tell you what's wrong?
MAN: She said it's just a virus, so I'll have to let it run its course.
NARRATOR: What does the man mean?
Tipe soal: Idiom. Idiom 'let it run its course' berarti membiarkan sesuatu berlangsung sampai selesai dengan sendirinya. Virusnya akan sembuh sendiri seiring waktu.
Opsi B ("He needs to start taking stronger medicine.") salah karena membiarkan penyakit berjalan justru berarti tidak perlu obat yang lebih kuat.
Opsi C ("He has to exercise more to recover quickly.") salah karena kata 'run' tidak berarti berolahraga dalam idiom ini.
Opsi D ("The doctor wants to do more tests on him.") salah karena dokter sudah tahu penyakitnya dan tidak menyebut tes tambahan.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      {
        nomor: 7,
        lesson: 'Part A > Implication',
        tipe: 'pg',
        pertanyaan: `Listen to the audio carefully.`,
        audio: 'audio/toeflacademy/itp-lc-07.mp3',
        opsi: [
          { label: 'A', teks: `He'll need another document besides his ID.` },
          { label: 'B', teks: `The bank doesn't accept student identification.` },
          { label: 'C', teks: `He should come back when it's less crowded.` },
          { label: 'D', teks: `He could apply for the account online instead.` },
        ],
        kunci: 'A',
        pembahasan: `Jawaban: A
Pembahasan:
Transkrip Audio:
MAN: Can I open a checking account today with just my student ID?
WOMAN: You'll want to bring something with your local address on it, like a lease or a utility bill.
NARRATOR: What does the woman imply?
Tipe soal: Makna tersirat. Wanita itu meminta pria membawa dokumen berisi alamat lokal, yang menyiratkan kartu mahasiswa saja tidak cukup untuk membuka rekening.
Opsi B ("The bank doesn't accept student identification.") salah karena kartu mahasiswa tidak ditolak, hanya perlu dilengkapi dokumen lain.
Opsi C ("He should come back when it's less crowded.") salah karena tidak ada pembicaraan tentang bank yang ramai.
Opsi D ("He could apply for the account online instead.") salah karena wanita itu tidak menyarankan pendaftaran daring.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      {
        nomor: 8,
        lesson: 'Part A > Suggestion',
        tipe: 'pg',
        pertanyaan: `Listen to the audio carefully.`,
        audio: 'audio/toeflacademy/itp-lc-08.mp3',
        opsi: [
          { label: 'A', teks: `Study more often with her classmates.` },
          { label: 'B', teks: `Ask her academic advisor for help.` },
          { label: 'C', teks: `Move into a dormitory on campus.` },
          { label: 'D', teks: `Sign up to meet regularly with a partner.` },
        ],
        kunci: 'D',
        pembahasan: `Jawaban: D
Pembahasan:
Transkrip Audio:
WOMAN: It's hard to make friends here since I don't know many people outside my classes.
MAN: You might want to join the conversation partner program. They match international students with locals every week.
NARRATOR: What does the man suggest the woman do?
Tipe soal: Saran. Pria itu menyarankan dengan 'You might want to join' sebuah program yang memasangkan mahasiswa internasional dengan mahasiswa lokal setiap minggu.
Opsi A ("Study more often with her classmates.") salah karena pria itu tidak menyarankan belajar bersama teman sekelas.
Opsi B ("Ask her academic advisor for help.") salah karena tidak ada saran untuk menemui penasihat akademik.
Opsi C ("Move into a dormitory on campus.") salah karena pria itu tidak menyinggung soal asrama.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 9,
        lesson: 'Part A > Feeling',
        tipe: 'pg',
        pertanyaan: `Listen to the audio carefully.`,
        audio: 'audio/toeflacademy/itp-lc-09.mp3',
        opsi: [
          { label: 'A', teks: `She's disappointed with the decision.` },
          { label: 'B', teks: `She's thrilled about the outcome.` },
          { label: 'C', teks: `She's worried about the extra cost.` },
          { label: 'D', teks: `She's indifferent to the change.` },
        ],
        kunci: 'B',
        pembahasan: `Jawaban: B
Pembahasan:
Transkrip Audio:
MAN: Good news. Your request for a single room next semester was approved.
WOMAN: Really? Oh, that's wonderful! I've been hoping for that since last year.
NARRATOR: How does the woman feel about the news?
Tipe soal: Perasaan pembicara. Ucapan 'that's wonderful!' dan fakta bahwa ia sudah mengharapkannya sejak tahun lalu menunjukkan ia sangat senang.
Opsi A ("She's disappointed with the decision.") salah karena permintaannya justru dikabulkan sesuai harapannya.
Opsi C ("She's worried about the extra cost.") salah karena wanita itu tidak menyebut biaya sama sekali.
Opsi D ("She's indifferent to the change.") salah karena reaksinya sangat antusias, bukan acuh.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 10,
        lesson: 'Part A > Implication',
        tipe: 'pg',
        pertanyaan: `Listen to the audio carefully.`,
        audio: 'audio/toeflacademy/itp-lc-10.mp3',
        opsi: [
          { label: 'A', teks: `Some recently installed equipment should work.` },
          { label: 'B', teks: `He should report the problem early next week.` },
          { label: 'C', teks: `The lab is going to close for repairs soon.` },
          { label: 'D', teks: `All the equipment in the room is outdated.` },
        ],
        kunci: 'A',
        pembahasan: `Jawaban: A
Pembahasan:
Transkrip Audio:
MAN: Do you know if any of the headsets here actually work? Mine keeps cutting out.
WOMAN: Hmm, the ones by the window were replaced on Monday.
NARRATOR: What does the woman imply?
Tipe soal: Makna tersirat. Dengan menyebut headset di dekat jendela baru diganti hari Senin, wanita itu menyiratkan headset tersebut masih baru dan kemungkinan berfungsi baik.
Opsi B ("He should report the problem early next week.") salah karena hari Senin adalah waktu penggantian, bukan waktu melapor.
Opsi C ("The lab is going to close for repairs soon.") salah karena tidak ada informasi tentang lab yang akan ditutup.
Opsi D ("All the equipment in the room is outdated.") salah karena sebagian headset justru baru saja diganti.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 11,
        lesson: 'Part A > Implication',
        tipe: 'pg',
        pertanyaan: `Listen to the audio carefully.`,
        audio: 'audio/toeflacademy/itp-lc-11.mp3',
        opsi: [
          { label: 'A', teks: `The cast is not well prepared yet.` },
          { label: 'B', teks: `Some actors should be replaced soon.` },
          { label: 'C', teks: `The script was revised at the last minute.` },
          { label: 'D', teks: `The opening night will be postponed.` },
        ],
        kunci: 'A',
        pembahasan: `Jawaban: A
Pembahasan:
Transkrip Audio:
WOMAN: Do you think we're ready for opening night on Friday?
MAN: Well, half the cast still reads their lines off the script.
NARRATOR: What does the man imply?
Tipe soal: Makna tersirat. Pria mengatakan setengah pemain masih membaca dialog dari naskah. Ini menyiratkan para pemain belum siap untuk pertunjukan hari Jumat.
Opsi B ("Some actors should be replaced soon.") salah karena pria tidak menyarankan agar ada pemain yang diganti.
Opsi C ("The script was revised at the last minute.") salah karena pria tidak menyebut adanya perubahan naskah.
Opsi D ("The opening night will be postponed.") salah karena tidak ada pernyataan bahwa pertunjukan akan diundur.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      {
        nomor: 12,
        lesson: 'Part A > Idiom',
        tipe: 'pg',
        pertanyaan: `Listen to the audio carefully.`,
        audio: 'audio/toeflacademy/itp-lc-12.mp3',
        opsi: [
          { label: 'A', teks: `Her parents are extremely happy.` },
          { label: 'B', teks: `Her parents had a tiring flight.` },
          { label: 'C', teks: `Her parents arrived later than planned.` },
          { label: 'D', teks: `Her parents are worried about her future.` },
        ],
        kunci: 'A',
        pembahasan: `Jawaban: A
Pembahasan:
Transkrip Audio:
MAN: Your parents flew all the way from Ohio to see you graduate?
WOMAN: Yeah, they're on cloud nine. I'm the first in our family to finish college.
NARRATOR: What does the woman mean?
Tipe soal: Idiom. Idiom 'on cloud nine' berarti sangat bahagia. Orang tua wanita sangat senang karena ia orang pertama di keluarganya yang lulus kuliah.
Opsi B ("Her parents had a tiring flight.") salah karena wanita tidak membicarakan rasa lelah akibat penerbangan.
Opsi C ("Her parents arrived later than planned.") salah karena tidak ada keterangan bahwa orang tuanya datang terlambat.
Opsi D ("Her parents are worried about her future.") salah karena idiom tersebut menunjukkan kebahagiaan, bukan kekhawatiran.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 13,
        lesson: 'Part A > Negative Expression',
        tipe: 'pg',
        pertanyaan: `Listen to the audio carefully.`,
        audio: 'audio/toeflacademy/itp-lc-13.mp3',
        opsi: [
          { label: 'A', teks: `She hasn't tried the software yet.` },
          { label: 'B', teks: `The software is too complicated for her.` },
          { label: 'C', teks: `The software is easier than she thought.` },
          { label: 'D', teks: `She needs more training on the software.` },
        ],
        kunci: 'C',
        pembahasan: `Jawaban: C
Pembahasan:
Transkrip Audio:
MAN: Do you think the lab's new software is hard to learn?
WOMAN: It's not nearly as complicated as I expected.
NARRATOR: What does the woman mean?
Tipe soal: Ungkapan negatif. Ungkapan 'not nearly as complicated as I expected' berarti perangkat lunak itu jauh lebih mudah daripada dugaannya.
Opsi A ("She hasn't tried the software yet.") salah karena ucapannya menunjukkan ia sudah mencoba perangkat lunak itu.
Opsi B ("The software is too complicated for her.") salah karena ini kebalikan dari maksud ungkapan negatifnya.
Opsi D ("She needs more training on the software.") salah karena ia tidak menyebut perlu pelatihan tambahan.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 14,
        lesson: 'Part A > Suggestion',
        tipe: 'pg',
        pertanyaan: `Listen to the audio carefully.`,
        audio: 'audio/toeflacademy/itp-lc-14.mp3',
        opsi: [
          { label: 'A', teks: `Come back to the office next week.` },
          { label: 'B', teks: `Ask another professor to sign the form.` },
          { label: 'C', teks: `Drop the form off for his advisor to sign.` },
          { label: 'D', teks: `Email his advisor to set up a meeting.` },
        ],
        kunci: 'C',
        pembahasan: `Jawaban: C
Pembahasan:
Transkrip Audio:
MAN: I need my advisor's signature on this form, but she's not in her office today.
WOMAN: You might want to leave it in her mailbox with a note. She checks it every morning.
NARRATOR: What does the woman suggest the man do?
Tipe soal: Saran. Wanita menyarankan agar pria menaruh formulir di kotak surat dosen pembimbingnya beserta catatan, karena dosen itu memeriksanya setiap pagi.
Opsi A ("Come back to the office next week.") salah karena wanita tidak menyuruhnya kembali minggu depan.
Opsi B ("Ask another professor to sign the form.") salah karena tidak ada saran untuk meminta tanda tangan dosen lain.
Opsi D ("Email his advisor to set up a meeting.") salah karena wanita tidak menyarankan mengirim email atau membuat janji.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 15,
        lesson: 'Part A > Negative Expression',
        tipe: 'pg',
        pertanyaan: `Listen to the audio carefully.`,
        audio: 'audio/toeflacademy/itp-lc-15.mp3',
        opsi: [
          { label: 'A', teks: `She has been waiting for over an hour.` },
          { label: 'B', teks: `She arrived only a short time ago.` },
          { label: 'C', teks: `She doesn't have an appointment today.` },
          { label: 'D', teks: `She would rather see a different doctor.` },
        ],
        kunci: 'B',
        pembahasan: `Jawaban: B
Pembahasan:
Transkrip Audio:
MAN: Have you been waiting long to see Dr. Patel?
WOMAN: Hardly. I just sat down a couple of minutes ago.
NARRATOR: What does the woman mean?
Tipe soal: Ungkapan negatif. Kata 'Hardly' berarti hampir tidak sama sekali; wanita baru duduk beberapa menit lalu, jadi ia belum lama menunggu.
Opsi A ("She has been waiting for over an hour.") salah karena ini bertentangan dengan ucapannya bahwa ia baru duduk.
Opsi C ("She doesn't have an appointment today.") salah karena tidak ada keterangan bahwa ia tidak punya janji.
Opsi D ("She would rather see a different doctor.") salah karena ia tidak menyatakan ingin pindah dokter.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 16,
        lesson: 'Part A > Next Action',
        tipe: 'pg',
        pertanyaan: `Listen to the audio carefully.`,
        audio: 'audio/toeflacademy/itp-lc-16.mp3',
        opsi: [
          { label: 'A', teks: `Examine the machine to find the problem.` },
          { label: 'B', teks: `Give the man a refund for his copies.` },
          { label: 'C', teks: `Show the man how to print single-sided.` },
          { label: 'D', teks: `Call a technician to repair the copier.` },
        ],
        kunci: 'A',
        pembahasan: `Jawaban: A
Pembahasan:
Transkrip Audio:
MAN: Excuse me, the copier on the left keeps jamming whenever I try to print double-sided.
WOMAN: Sorry about that. Let me grab my keys and open it up to take a look.
NARRATOR: What will the woman probably do next?
Tipe soal: Rencana berikutnya. Wanita berkata akan mengambil kuncinya dan membuka mesin untuk melihatnya, jadi ia akan memeriksa mesin fotokopi itu sendiri.
Opsi B ("Give the man a refund for his copies.") salah karena wanita tidak menyebut pengembalian uang.
Opsi C ("Show the man how to print single-sided.") salah karena ia tidak menawarkan cara mencetak satu sisi.
Opsi D ("Call a technician to repair the copier.") salah karena ia akan memeriksanya sendiri, bukan memanggil teknisi.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 17,
        lesson: 'Part A > Idiom',
        tipe: 'pg',
        pertanyaan: `Listen to the audio carefully.`,
        audio: 'audio/toeflacademy/itp-lc-17.mp3',
        opsi: [
          { label: 'A', teks: `He needs to contact the company again soon.` },
          { label: 'B', teks: `He is waiting for the company to respond.` },
          { label: 'C', teks: `He decided not to work for the company.` },
          { label: 'D', teks: `He already accepted a position at the company.` },
        ],
        kunci: 'B',
        pembahasan: `Jawaban: B
Pembahasan:
Transkrip Audio:
WOMAN: How did it go with the recruiter from that design company?
MAN: I gave her my resume and answered all her questions, so the ball's in their court now.
NARRATOR: What does the man mean?
Tipe soal: Idiom. Idiom 'the ball's in their court' berarti giliran pihak lain untuk bertindak. Pria sudah melakukan bagiannya dan kini menunggu keputusan perusahaan.
Opsi A ("He needs to contact the company again soon.") salah karena langkah berikutnya ada pada perusahaan, bukan pada pria.
Opsi C ("He decided not to work for the company.") salah karena pria tidak menyatakan menolak bekerja di sana.
Opsi D ("He already accepted a position at the company.") salah karena belum ada tawaran pekerjaan yang diterima.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      {
        nomor: 18,
        lesson: 'Part A > Feeling',
        tipe: 'pg',
        pertanyaan: `Listen to the audio carefully.`,
        audio: 'audio/toeflacademy/itp-lc-18.mp3',
        opsi: [
          { label: 'A', teks: `She is pleased with the fast delivery.` },
          { label: 'B', teks: `She is relieved the cost was low.` },
          { label: 'C', teks: `She doesn't care how long it takes.` },
          { label: 'D', teks: `She is upset by the time and price.` },
        ],
        kunci: 'D',
        pembahasan: `Jawaban: D
Pembahasan:
Transkrip Audio:
MAN: Did the clerk say how long your package to Japan will take?
WOMAN: Three weeks! And it cost me almost forty dollars. That's ridiculous.
NARRATOR: How does the woman feel about sending the package?
Tipe soal: Perasaan pembicara. Wanita mengeluh pengiriman butuh tiga minggu dan biayanya hampir empat puluh dolar, lalu menyebutnya 'ridiculous', yang menunjukkan ia kesal.
Opsi A ("She is pleased with the fast delivery.") salah karena tiga minggu bukan pengiriman cepat baginya.
Opsi B ("She is relieved the cost was low.") salah karena ia justru mengeluhkan biaya yang mahal.
Opsi C ("She doesn't care how long it takes.") salah karena nada keluhannya menunjukkan ia peduli.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 19,
        lesson: 'Part A > Next Action',
        tipe: 'pg',
        pertanyaan: `Listen to the audio carefully.`,
        audio: 'audio/toeflacademy/itp-lc-19.mp3',
        opsi: [
          { label: 'A', teks: `Ask an agent about the delay.` },
          { label: 'B', teks: `Wait for another announcement.` },
          { label: 'C', teks: `Go to a different boarding area.` },
          { label: 'D', teks: `Get something to eat before boarding.` },
        ],
        kunci: 'C',
        pembahasan: `Jawaban: C
Pembahasan:
Transkrip Audio:
MAN: They just announced that our gate changed from B12 to D4.
WOMAN: D4? That's on the other side of the terminal. We'd better start walking now.
NARRATOR: What will the woman probably do next?
Tipe soal: Rencana berikutnya. Gerbang berubah ke D4 yang letaknya jauh, dan wanita mengajak segera berjalan, jadi ia akan menuju gerbang keberangkatan yang baru.
Opsi A ("Ask an agent about the delay.") salah karena tidak ada penundaan yang disebutkan.
Opsi B ("Wait for another announcement.") salah karena ia ingin segera berjalan, bukan menunggu.
Opsi D ("Get something to eat before boarding.") salah karena ia tidak menyebut ingin makan dulu.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 20,
        lesson: 'Part A > Agreement',
        tipe: 'pg',
        pertanyaan: `Listen to the audio carefully.`,
        audio: 'audio/toeflacademy/itp-lc-20.mp3',
        opsi: [
          { label: 'A', teks: `He didn't hear what the woman said.` },
          { label: 'B', teks: `He thinks the roses looked better before.` },
          { label: 'C', teks: `He agrees the flowers have improved.` },
          { label: 'D', teks: `He hasn't visited the garden this year.` },
        ],
        kunci: 'C',
        pembahasan: `Jawaban: C
Pembahasan:
Transkrip Audio:
WOMAN: The roses in the campus garden look even better this year than last spring.
MAN: You can say that again. The new gardeners must really know what they're doing.
NARRATOR: What does the man mean?
Tipe soal: Setuju/tidak setuju. Ungkapan 'You can say that again' berarti sangat setuju. Pria setuju bahwa mawar tahun ini lebih indah dan memuji para tukang kebun baru.
Opsi A ("He didn't hear what the woman said.") salah karena ungkapan itu bukan permintaan untuk mengulang ucapan.
Opsi B ("He thinks the roses looked better before.") salah karena ini bertentangan dengan persetujuannya.
Opsi D ("He hasn't visited the garden this year.") salah karena komentarnya menunjukkan ia sudah melihat kebun itu.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 21,
        lesson: 'Part A > Wish and Conditional',
        tipe: 'pg',
        pertanyaan: `Listen to the audio carefully.`,
        audio: 'audio/toeflacademy/itp-lc-21.mp3',
        opsi: [
          { label: 'A', teks: `He has eaten the pasta here many times.` },
          { label: 'B', teks: `He regrets not choosing a different dish.` },
          { label: 'C', teks: `He prefers sandwiches to pasta dishes.` },
          { label: 'D', teks: `He plans to order dessert after his meal.` },
        ],
        kunci: 'B',
        pembahasan: `Jawaban: B
Pembahasan:
Transkrip Audio:
WOMAN: Did you try the seafood pasta here? Everyone says it's the best thing on the menu.
MAN: Oh, if only I'd known that before I ordered this burger.
NARRATOR: What does the man mean?
Tipe soal: Pengandaian/keinginan. Ungkapan 'If only I'd known that before I ordered this burger' menyiratkan bahwa pria itu tidak tahu sebelumnya dan sudah memesan burger. Artinya ia menyesal tidak memilih pasta.
Opsi A ("He has eaten the pasta here many times.") salah karena ia justru baru tahu tentang pasta itu, jadi belum pernah memakannya.
Opsi C ("He prefers sandwiches to pasta dishes.") salah karena ia tidak menyatakan lebih suka sandwich, malah menyesali pilihannya.
Opsi D ("He plans to order dessert after his meal.") salah karena tidak ada pembicaraan tentang memesan hidangan penutup.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 22,
        lesson: 'Part A > Agreement',
        tipe: 'pg',
        pertanyaan: `Listen to the audio carefully.`,
        audio: 'audio/toeflacademy/itp-lc-22.mp3',
        opsi: [
          { label: 'A', teks: `He agrees that they made a mistake.` },
          { label: 'B', teks: `He wants to start the experiment over.` },
          { label: 'C', teks: `He forgot to bring his lab manual today.` },
          { label: 'D', teks: `He thinks the amount used was correct.` },
        ],
        kunci: 'D',
        pembahasan: `Jawaban: D
Pembahasan:
Transkrip Audio:
WOMAN: I think we added way too much acid to this solution, don't you?
MAN: I'm not so sure about that. The color looks exactly like the one in the lab manual.
NARRATOR: What does the man mean?
Tipe soal: Setuju/tidak setuju. 'I'm not so sure about that' menunjukkan pria itu tidak setuju. Ia menambahkan bahwa warnanya sama dengan yang ada di panduan, jadi menurutnya takarannya sudah tepat.
Opsi A ("He agrees that they made a mistake.") salah karena ia justru tidak setuju bahwa mereka melakukan kesalahan.
Opsi B ("He wants to start the experiment over.") salah karena ia tidak ingin mengulang percobaan karena menganggap hasilnya sudah benar.
Opsi C ("He forgot to bring his lab manual today.") salah karena ia malah membandingkan warna dengan panduan, jadi panduannya ada.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 23,
        lesson: 'Part A > Wish and Conditional',
        tipe: 'pg',
        pertanyaan: `Listen to the audio carefully.`,
        audio: 'audio/toeflacademy/itp-lc-23.mp3',
        opsi: [
          { label: 'A', teks: `She already bought the screws she needed.` },
          { label: 'B', teks: `She lost the instructions for the shelf.` },
          { label: 'C', teks: `She isn't sure which size to buy.` },
          { label: 'D', teks: `She wants to return her old bookshelf.` },
        ],
        kunci: 'C',
        pembahasan: `Jawaban: C
Pembahasan:
Transkrip Audio:
MAN: Did you find the right size screws for your bookshelf?
WOMAN: I wish I'd brought one of the old ones with me to compare.
NARRATOR: What does the woman mean?
Tipe soal: Pengandaian/keinginan. 'I wish I'd brought one of the old ones' berarti ia tidak membawa contoh sekrup lama. Akibatnya ia tidak yakin ukuran mana yang harus dibeli.
Opsi A ("She already bought the screws she needed.") salah karena ia belum menemukan ukuran yang tepat sehingga belum membeli.
Opsi B ("She lost the instructions for the shelf.") salah karena tidak ada penyebutan tentang petunjuk rak yang hilang.
Opsi D ("She wants to return her old bookshelf.") salah karena yang dimaksud 'old ones' adalah sekrup lama, bukan rak buku.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 24,
        lesson: 'Part A > Wish and Conditional',
        tipe: 'pg',
        pertanyaan: `Listen to the audio carefully.`,
        audio: 'audio/toeflacademy/itp-lc-24.mp3',
        opsi: [
          { label: 'A', teks: `She brought an extra jacket for the trip.` },
          { label: 'B', teks: `She told the driver about the problem earlier.` },
          { label: 'C', teks: `She was not prepared for the low temperature.` },
          { label: 'D', teks: `She prefers traveling in cold weather.` },
        ],
        kunci: 'C',
        pembahasan: `Jawaban: C
Pembahasan:
Transkrip Audio:
MAN: Aren't you cold? It's freezing on this bus.
WOMAN: If I had known the heater was broken, I would've worn a heavier coat.
NARRATOR: What does the woman mean?
Tipe soal: Pengandaian/keinginan. 'If I had known...' menyiratkan bahwa ia tidak tahu pemanasnya rusak dan tidak memakai mantel tebal. Jadi ia tidak siap menghadapi udara dingin.
Opsi A ("She brought an extra jacket for the trip.") salah karena ia justru menyesal tidak memakai mantel yang lebih tebal.
Opsi B ("She told the driver about the problem earlier.") salah karena ia bahkan tidak tahu sebelumnya bahwa pemanasnya rusak.
Opsi D ("She prefers traveling in cold weather.") salah karena ia tidak menunjukkan menyukai cuaca dingin, malah merasa kedinginan.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 25,
        lesson: 'Part A > Setting',
        tipe: 'pg',
        pertanyaan: `Listen to the audio carefully.`,
        audio: 'audio/toeflacademy/itp-lc-25.mp3',
        opsi: [
          { label: 'A', teks: `In a hotel lobby` },
          { label: 'B', teks: `In a student residence hall` },
          { label: 'C', teks: `In a campus library` },
          { label: 'D', teks: `In an apartment rental office` },
        ],
        kunci: 'B',
        pembahasan: `Jawaban: B
Pembahasan:
Transkrip Audio:
MAN: My roommate sets his alarm so loud that it wakes up everyone on our floor.
WOMAN: Maybe you should talk to the resident assistant. She's right down the hall, next to the laundry room.
NARRATOR: Where does this conversation probably take place?
Tipe soal: Tempat/situasi. Kata kunci 'roommate', 'everyone on our floor', 'resident assistant', dan 'laundry room' menunjukkan percakapan terjadi di asrama mahasiswa.
Opsi A ("In a hotel lobby") salah karena hotel tidak memiliki teman sekamar tetap dan resident assistant.
Opsi C ("In a campus library") salah karena perpustakaan tidak memiliki ruang cuci dan teman sekamar.
Opsi D ("In an apartment rental office") salah karena kantor penyewaan tidak sesuai dengan penyebutan resident assistant di ujung lorong.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 26,
        lesson: 'Part A > Suggestion',
        tipe: 'pg',
        pertanyaan: `Listen to the audio carefully.`,
        audio: 'audio/toeflacademy/itp-lc-26.mp3',
        opsi: [
          { label: 'A', teks: `Skip lunch and eat after his class` },
          { label: 'B', teks: `Get a quicker meal from another section` },
          { label: 'C', teks: `Ask someone in line to save his spot` },
          { label: 'D', teks: `Come back when the line is shorter` },
        ],
        kunci: 'B',
        pembahasan: `Jawaban: B
Pembahasan:
Transkrip Audio:
MAN: The line for hot food is so long, and my class starts in fifteen minutes.
WOMAN: Why don't you grab a sandwich from the cold counter? There's hardly anyone over there.
NARRATOR: What does the woman suggest the man do?
Tipe soal: Saran. Wanita itu menyarankan 'Why don't you grab a sandwich from the cold counter?' karena konter itu sepi, sehingga pria bisa makan lebih cepat dari bagian lain.
Opsi A ("Skip lunch and eat after his class") salah karena wanita itu tidak menyarankan untuk tidak makan.
Opsi C ("Ask someone in line to save his spot") salah karena tidak ada saran meminta orang lain menjaga tempat antrean.
Opsi D ("Come back when the line is shorter") salah karena ia menyarankan pindah konter sekarang, bukan kembali nanti.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 27,
        lesson: 'Part A > Implication',
        tipe: 'pg',
        pertanyaan: `Listen to the audio carefully.`,
        audio: 'audio/toeflacademy/itp-lc-27.mp3',
        opsi: [
          { label: 'A', teks: `She has never visited this coffee shop.` },
          { label: 'B', teks: `She finds the place too noisy for studying.` },
          { label: 'C', teks: `She enjoys background sounds while working.` },
          { label: 'D', teks: `She thinks the coffee here is too strong.` },
        ],
        kunci: 'B',
        pembahasan: `Jawaban: B
Pembahasan:
Transkrip Audio:
MAN: Want to study here for the econ exam tonight?
WOMAN: Hmm, have you ever tried to concentrate with that espresso machine going nonstop?
NARRATOR: What does the woman imply?
Tipe soal: Makna tersirat. Pertanyaan retoris tentang mesin espresso yang terus berbunyi menyiratkan bahwa tempat itu terlalu bising untuk berkonsentrasi belajar.
Opsi A ("She has never visited this coffee shop.") salah karena ia tampak sudah tahu suasana tempat itu, jadi pernah datang.
Opsi C ("She enjoys background sounds while working.") salah karena ia justru mengeluhkan suara mesin yang mengganggu konsentrasi.
Opsi D ("She thinks the coffee here is too strong.") salah karena keluhannya tentang suara mesin, bukan rasa kopinya.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      {
        nomor: 28,
        lesson: 'Part A > Idiom',
        tipe: 'pg',
        pertanyaan: `Listen to the audio carefully.`,
        audio: 'audio/toeflacademy/itp-lc-28.mp3',
        opsi: [
          { label: 'A', teks: `She hasn't learned the music yet.` },
          { label: 'B', teks: `She feels the practice room is too chilly.` },
          { label: 'C', teks: `She has decided to cancel her recital.` },
          { label: 'D', teks: `She is nervous about performing publicly.` },
        ],
        kunci: 'D',
        pembahasan: `Jawaban: D
Pembahasan:
Transkrip Audio:
MAN: Are you ready for your piano recital on Friday?
WOMAN: Well, I've got the notes down, but I'm still getting cold feet about playing in front of a crowd.
NARRATOR: What does the woman mean?
Tipe soal: Idiom. Idiom 'getting cold feet' berarti merasa gugup atau ragu. Wanita itu sudah hafal lagunya tetapi gugup tampil di depan penonton.
Opsi A ("She hasn't learned the music yet.") salah karena ia mengatakan sudah menguasai not-notnya.
Opsi B ("She feels the practice room is too chilly.") salah karena 'cold feet' adalah idiom, bukan tentang ruangan yang dingin.
Opsi C ("She has decided to cancel her recital.") salah karena ia hanya merasa gugup, belum memutuskan membatalkan resital.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      {
        nomor: 29,
        lesson: 'Part A > Setting',
        tipe: 'pg',
        pertanyaan: `Listen to the audio carefully.`,
        audio: 'audio/toeflacademy/itp-lc-29.mp3',
        opsi: [
          { label: 'A', teks: `In a lecture hall` },
          { label: 'B', teks: `In a campus bookstore` },
          { label: 'C', teks: `In a student advising center` },
          { label: 'D', teks: `In an instructor's office` },
        ],
        kunci: 'D',
        pembahasan: `Jawaban: D
Pembahasan:
Transkrip Audio:
MAN: Thanks for seeing me, Dr. Harris, because I had a question about my midterm essay grade.
WOMAN: Sure, have a seat. I only have ten minutes before my next class, so let's look at it now.
NARRATOR: Where does this conversation probably take place?
Tipe soal: Tempat/situasi. Mahasiswa berterima kasih karena diterima oleh Dr. Harris untuk membahas nilai esainya, dan dosen mempersilakannya duduk sebelum kelas berikutnya. Ini menunjukkan pertemuan di kantor dosen.
Opsi A ("In a lecture hall") salah karena ruang kuliah tidak cocok untuk pertemuan pribadi membahas nilai.
Opsi B ("In a campus bookstore") salah karena toko buku tidak berkaitan dengan diskusi nilai esai bersama dosen.
Opsi C ("In a student advising center") salah karena pusat bimbingan akademik tidak menangani nilai esai mata kuliah dosen tertentu.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 30,
        lesson: 'Part A > Implication',
        tipe: 'pg',
        pertanyaan: `Listen to the audio carefully.`,
        audio: 'audio/toeflacademy/itp-lc-30.mp3',
        opsi: [
          { label: 'A', teks: `They should look for a different track.` },
          { label: 'B', teks: `The train has been delayed for a while.` },
          { label: 'C', teks: `There is a snack shop near track four.` },
          { label: 'D', teks: `They need to get on the train immediately.` },
        ],
        kunci: 'D',
        pembahasan: `Jawaban: D
Pembahasan:
Transkrip Audio:
MAN: Do you think we have time to grab a snack before the train leaves?
WOMAN: The board says it's boarding at track four right now.
NARRATOR: What does the woman imply?
Tipe soal: Makna tersirat. Wanita itu menjawab bahwa penumpang sedang naik kereta saat ini, yang menyiratkan tidak ada waktu membeli camilan dan mereka harus segera naik.
Opsi A ("They should look for a different track.") salah karena jalur yang disebut sudah jelas, tidak perlu mencari jalur lain.
Opsi B ("The train has been delayed for a while.") salah karena kereta justru sedang menaikkan penumpang, bukan tertunda.
Opsi C ("There is a snack shop near track four.") salah karena tidak ada penyebutan toko camilan di dekat jalur tersebut.`,
        tingkat: 'sedang',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Part B: percakapan panjang (soal 31–38; percakapan ada di audio soal 31 dan 35)` },
    soal: [
      {
        nomor: 31,
        lesson: 'Part B > Main Topic',
        tipe: 'pg',
        pertanyaan: `Listen to the audio carefully.`,
        audio: 'audio/toeflacademy/itp-lc-31.mp3',
        opsi: [
          { label: 'A', teks: `The responsibilities the man has on the student council` },
          { label: 'B', teks: `A student's effort to organize recycling in their residence hall` },
          { label: 'C', teks: `A new university policy about throwing away garbage` },
          { label: 'D', teks: `Several ways to cut down on waste in the dining hall` },
        ],
        kunci: 'B',
        pembahasan: `Jawaban: B
Pembahasan:
Transkrip Audio:
MAN: Hey, Lisa. What's all that paperwork?
WOMAN: Oh, hi, Kevin. It's a proposal for the housing office. I want to start a recycling program here in our dorm.
MAN: Really? Don't we already have recycling on campus?
WOMAN: Only in the academic buildings. Here, everything goes into the same dumpster. Our floor alone throws out about forty plastic bottles a day.
MAN: Wow, that's a lot. So what's your plan?
WOMAN: I'd like to put three bins in each lounge: one for paper, one for plastic, and one for cans. The housing office said they'd pay for the bins if I can show students are interested.
MAN: How are you going to prove that?
WOMAN: I'm collecting signatures. I need at least two hundred by the end of the month.
MAN: How many do you have so far?
WOMAN: Just about sixty. Most people agree it's a good idea, but it's hard to catch them when they're home.
MAN: Well, I'm on the dorm council, and we have a meeting on every floor next Tuesday night. Almost everybody shows up because we hand out free pizza.
WOMAN: Seriously? Could I come and talk about the project?
MAN: I don't see why not. Just bring your petition and a few extra pens.
NARRATOR: What are the speakers mainly discussing?
Tipe soal: Topik percakapan. Sejak awal wanita menyatakan ingin memulai program daur ulang di asramanya, lalu seluruh percakapan membahas rencana, syarat, dan cara mendapatkan dukungan untuk proyek itu.
Bukti: "I want to start a recycling program here in our dorm."
Opsi A ("The responsibilities the man has on the student council") salah karena keanggotaan pria di dewan asrama hanya disebut sekilas sebagai cara membantu wanita.
Opsi C ("A new university policy about throwing away garbage") salah karena tidak ada aturan baru universitas yang dibahas dalam percakapan.
Opsi D ("Several ways to cut down on waste in the dining hall") salah karena ruang makan dan sisa makanan sama sekali tidak dibicarakan.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 32,
        lesson: 'Part B > Detail',
        tipe: 'pg',
        pertanyaan: `Listen to the audio carefully.`,
        audio: 'audio/toeflacademy/itp-lc-32.mp3',
        opsi: [
          { label: 'A', teks: `Cover the cost of the recycling containers` },
          { label: 'B', teks: `Hire extra staff to empty the dumpster` },
          { label: 'C', teks: `Offer her a part-time position on campus` },
          { label: 'D', teks: `Give her more time to finish the proposal` },
        ],
        kunci: 'A',
        pembahasan: `Jawaban: A
Pembahasan:
Transkrip Audio:
MAN: Hey, Lisa. What's all that paperwork?
WOMAN: Oh, hi, Kevin. It's a proposal for the housing office. I want to start a recycling program here in our dorm.
MAN: Really? Don't we already have recycling on campus?
WOMAN: Only in the academic buildings. Here, everything goes into the same dumpster. Our floor alone throws out about forty plastic bottles a day.
MAN: Wow, that's a lot. So what's your plan?
WOMAN: I'd like to put three bins in each lounge: one for paper, one for plastic, and one for cans. The housing office said they'd pay for the bins if I can show students are interested.
MAN: How are you going to prove that?
WOMAN: I'm collecting signatures. I need at least two hundred by the end of the month.
MAN: How many do you have so far?
WOMAN: Just about sixty. Most people agree it's a good idea, but it's hard to catch them when they're home.
MAN: Well, I'm on the dorm council, and we have a meeting on every floor next Tuesday night. Almost everybody shows up because we hand out free pizza.
WOMAN: Seriously? Could I come and talk about the project?
MAN: I don't see why not. Just bring your petition and a few extra pens.
NARRATOR: According to the woman, what will the housing office do if she shows that students support her idea?
Tipe soal: Detail. Wanita mengatakan kantor perumahan akan membayar tempat sampah daur ulang jika ia bisa membuktikan minat mahasiswa, artinya mereka akan menanggung biaya wadahnya.
Bukti: "The housing office said they'd pay for the bins if I can show students are interested."
Opsi B ("Hire extra staff to empty the dumpster") salah karena tidak ada rencana mempekerjakan petugas tambahan yang disebutkan.
Opsi C ("Offer her a part-time position on campus") salah karena wanita tidak pernah menyebut tawaran pekerjaan dari kantor perumahan.
Opsi D ("Give her more time to finish the proposal") salah karena tenggat akhir bulan terkait tanda tangan, bukan perpanjangan dari kantor perumahan.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 33,
        lesson: 'Part B > Detail',
        tipe: 'pg',
        pertanyaan: `Listen to the audio carefully.`,
        audio: 'audio/toeflacademy/itp-lc-33.mp3',
        opsi: [
          { label: 'A', teks: `A minimum of 200` },
          { label: 'B', teks: `Around 40` },
          { label: 'C', teks: `Around 60` },
          { label: 'D', teks: `More than 300` },
        ],
        kunci: 'A',
        pembahasan: `Jawaban: A
Pembahasan:
Transkrip Audio:
MAN: Hey, Lisa. What's all that paperwork?
WOMAN: Oh, hi, Kevin. It's a proposal for the housing office. I want to start a recycling program here in our dorm.
MAN: Really? Don't we already have recycling on campus?
WOMAN: Only in the academic buildings. Here, everything goes into the same dumpster. Our floor alone throws out about forty plastic bottles a day.
MAN: Wow, that's a lot. So what's your plan?
WOMAN: I'd like to put three bins in each lounge: one for paper, one for plastic, and one for cans. The housing office said they'd pay for the bins if I can show students are interested.
MAN: How are you going to prove that?
WOMAN: I'm collecting signatures. I need at least two hundred by the end of the month.
MAN: How many do you have so far?
WOMAN: Just about sixty. Most people agree it's a good idea, but it's hard to catch them when they're home.
MAN: Well, I'm on the dorm council, and we have a meeting on every floor next Tuesday night. Almost everybody shows up because we hand out free pizza.
WOMAN: Seriously? Could I come and talk about the project?
MAN: I don't see why not. Just bring your petition and a few extra pens.
NARRATOR: How many signatures does the woman need to collect?
Tipe soal: Detail. Wanita menyebut ia membutuhkan sedikitnya dua ratus tanda tangan sebelum akhir bulan.
Bukti: "I need at least two hundred by the end of the month."
Opsi B ("Around 40") salah karena empat puluh adalah jumlah botol plastik yang dibuang setiap hari di lantainya.
Opsi C ("Around 60") salah karena enam puluh adalah jumlah tanda tangan yang sudah ia kumpulkan sejauh ini.
Opsi D ("More than 300") salah karena angka tiga ratus tidak pernah disebutkan dalam percakapan.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 34,
        lesson: 'Part B > Inference',
        tipe: 'pg',
        pertanyaan: `Listen to the audio carefully.`,
        audio: 'audio/toeflacademy/itp-lc-34.mp3',
        opsi: [
          { label: 'A', teks: `Submit her finished proposal to the housing office` },
          { label: 'B', teks: `Ask residents at floor meetings to sign her petition` },
          { label: 'C', teks: `Buy food for the members of the dorm council` },
          { label: 'D', teks: `Count the bottles thrown away on her floor` },
        ],
        kunci: 'B',
        pembahasan: `Jawaban: B
Pembahasan:
Transkrip Audio:
MAN: Hey, Lisa. What's all that paperwork?
WOMAN: Oh, hi, Kevin. It's a proposal for the housing office. I want to start a recycling program here in our dorm.
MAN: Really? Don't we already have recycling on campus?
WOMAN: Only in the academic buildings. Here, everything goes into the same dumpster. Our floor alone throws out about forty plastic bottles a day.
MAN: Wow, that's a lot. So what's your plan?
WOMAN: I'd like to put three bins in each lounge: one for paper, one for plastic, and one for cans. The housing office said they'd pay for the bins if I can show students are interested.
MAN: How are you going to prove that?
WOMAN: I'm collecting signatures. I need at least two hundred by the end of the month.
MAN: How many do you have so far?
WOMAN: Just about sixty. Most people agree it's a good idea, but it's hard to catch them when they're home.
MAN: Well, I'm on the dorm council, and we have a meeting on every floor next Tuesday night. Almost everybody shows up because we hand out free pizza.
WOMAN: Seriously? Could I come and talk about the project?
MAN: I don't see why not. Just bring your petition and a few extra pens.
NARRATOR: What will the woman probably do next Tuesday?
Tipe soal: Inferensi/rencana. Pria mengundang wanita ke rapat lantai hari Selasa yang dihadiri hampir semua penghuni dan menyuruhnya membawa petisi serta pulpen, sehingga tersirat ia akan mengumpulkan tanda tangan di sana.
Bukti: "Just bring your petition and a few extra pens."
Opsi A ("Submit her finished proposal to the housing office") salah karena proposal baru bisa diproses setelah tanda tangan terkumpul, dan tidak ada rencana menyerahkannya Selasa.
Opsi C ("Buy food for the members of the dorm council") salah karena pizza disediakan oleh dewan asrama, bukan dibeli oleh wanita.
Opsi D ("Count the bottles thrown away on her floor") salah karena penghitungan botol sudah ia lakukan sebelumnya, bukan rencana hari Selasa.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      {
        nomor: 35,
        lesson: 'Part B > Main Topic',
        tipe: 'pg',
        pertanyaan: `Listen to the audio carefully.`,
        audio: 'audio/toeflacademy/itp-lc-35.mp3',
        opsi: [
          { label: 'A', teks: `Why the man was fined by campus police this morning` },
          { label: 'B', teks: `Which parking area is closest to the main library` },
          { label: 'C', teks: `How students can use the free campus shuttle service` },
          { label: 'D', teks: `How the man can obtain permission to park on campus` },
        ],
        kunci: 'D',
        pembahasan: `Jawaban: D
Pembahasan:
Transkrip Audio:
MAN: Hey, Lisa. You drive to campus, right? How did you get a parking permit? I just got another ticket this morning.
WOMAN: Oh no. Yeah, I applied online through the transportation office website back in August.
MAN: Online? I thought you had to go to the office in person.
WOMAN: Not anymore. You just fill out a form, upload your car registration, and pay the fee.
MAN: How much was it?
WOMAN: It's a hundred and twenty dollars for the semester if you park in the commuter lots. The garage near the library costs almost twice that.
MAN: Hmm, the commuter lots are pretty far from my classes, though.
WOMAN: True, but there's a free shuttle that runs every ten minutes. It drops you off right in front of the science building.
MAN: That's actually where most of my labs are. Are there still permits left, though? It's already October.
WOMAN: The garage sold out weeks ago, but I heard the commuter lots usually have spots until the end of the semester.
MAN: Great. I'll do it as soon as I get home tonight. Anything else I should know?
WOMAN: Just make sure you have a scan of your registration ready. My form got rejected the first time because I forgot it.
NARRATOR: What are the speakers mainly discussing?
Tipe soal: Topik percakapan. Pria bertanya bagaimana cara mendapatkan izin parkir, dan seluruh percakapan membahas cara mendaftar, biaya, lokasi, serta ketersediaan izin tersebut.
Bukti: "How did you get a parking permit? I just got another ticket this morning."
Opsi A ("Why the man was fined by campus police this morning") salah karena tilang hanya disebut sekilas sebagai alasan pria bertanya, bukan topik utama.
Opsi B ("Which parking area is closest to the main library") salah karena garasi dekat perpustakaan hanya disebut saat membandingkan harga.
Opsi C ("How students can use the free campus shuttle service") salah karena shuttle hanya detail pendukung tentang lokasi parkir komuter.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 36,
        lesson: 'Part B > Detail',
        tipe: 'pg',
        pertanyaan: `Listen to the audio carefully.`,
        audio: 'audio/toeflacademy/itp-lc-36.mp3',
        opsi: [
          { label: 'A', teks: `By visiting the transportation office during business hours` },
          { label: 'B', teks: `By mailing a paper form to the campus police` },
          { label: 'C', teks: `By asking an academic advisor to approve it` },
          { label: 'D', teks: `By submitting the request through a website` },
        ],
        kunci: 'D',
        pembahasan: `Jawaban: D
Pembahasan:
Transkrip Audio:
MAN: Hey, Lisa. You drive to campus, right? How did you get a parking permit? I just got another ticket this morning.
WOMAN: Oh no. Yeah, I applied online through the transportation office website back in August.
MAN: Online? I thought you had to go to the office in person.
WOMAN: Not anymore. You just fill out a form, upload your car registration, and pay the fee.
MAN: How much was it?
WOMAN: It's a hundred and twenty dollars for the semester if you park in the commuter lots. The garage near the library costs almost twice that.
MAN: Hmm, the commuter lots are pretty far from my classes, though.
WOMAN: True, but there's a free shuttle that runs every ten minutes. It drops you off right in front of the science building.
MAN: That's actually where most of my labs are. Are there still permits left, though? It's already October.
WOMAN: The garage sold out weeks ago, but I heard the commuter lots usually have spots until the end of the semester.
MAN: Great. I'll do it as soon as I get home tonight. Anything else I should know?
WOMAN: Just make sure you have a scan of your registration ready. My form got rejected the first time because I forgot it.
NARRATOR: According to the woman, how does a student apply for a permit?
Tipe soal: Detail. Wanita mengatakan ia mendaftar secara online melalui situs kantor transportasi, dan menegaskan bahwa tidak perlu datang langsung lagi.
Bukti: "Yeah, I applied online through the transportation office website back in August."
Opsi A ("By visiting the transportation office during business hours") salah karena wanita menyatakan datang langsung ke kantor sudah tidak diperlukan.
Opsi B ("By mailing a paper form to the campus police") salah karena tidak ada penyebutan pengiriman formulir lewat pos.
Opsi C ("By asking an academic advisor to approve it") salah karena penasihat akademik sama sekali tidak disebut.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 37,
        lesson: 'Part B > Detail',
        tipe: 'pg',
        pertanyaan: `Listen to the audio carefully.`,
        audio: 'audio/toeflacademy/itp-lc-37.mp3',
        opsi: [
          { label: 'A', teks: `It is less expensive than the commuter lots.` },
          { label: 'B', teks: `It is served by a shuttle every ten minutes.` },
          { label: 'C', teks: `Its permits are no longer available.` },
          { label: 'D', teks: `It is reserved only for faculty members.` },
        ],
        kunci: 'C',
        pembahasan: `Jawaban: C
Pembahasan:
Transkrip Audio:
MAN: Hey, Lisa. You drive to campus, right? How did you get a parking permit? I just got another ticket this morning.
WOMAN: Oh no. Yeah, I applied online through the transportation office website back in August.
MAN: Online? I thought you had to go to the office in person.
WOMAN: Not anymore. You just fill out a form, upload your car registration, and pay the fee.
MAN: How much was it?
WOMAN: It's a hundred and twenty dollars for the semester if you park in the commuter lots. The garage near the library costs almost twice that.
MAN: Hmm, the commuter lots are pretty far from my classes, though.
WOMAN: True, but there's a free shuttle that runs every ten minutes. It drops you off right in front of the science building.
MAN: That's actually where most of my labs are. Are there still permits left, though? It's already October.
WOMAN: The garage sold out weeks ago, but I heard the commuter lots usually have spots until the end of the semester.
MAN: Great. I'll do it as soon as I get home tonight. Anything else I should know?
WOMAN: Just make sure you have a scan of your registration ready. My form got rejected the first time because I forgot it.
NARRATOR: What does the woman say about the garage near the library?
Tipe soal: Detail. Wanita mengatakan izin untuk garasi sudah habis terjual beberapa minggu lalu, sehingga tidak bisa dibeli lagi.
Bukti: "The garage sold out weeks ago, but I heard the commuter lots usually have spots until the end of the semester."
Opsi A ("It is less expensive than the commuter lots.") salah karena wanita menyebut garasi justru hampir dua kali lebih mahal.
Opsi B ("It is served by a shuttle every ten minutes.") salah karena shuttle dikaitkan dengan lahan parkir komuter, bukan garasi.
Opsi D ("It is reserved only for faculty members.") salah karena tidak ada informasi bahwa garasi khusus untuk dosen.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 38,
        lesson: 'Part B > Inference',
        tipe: 'pg',
        pertanyaan: `Listen to the audio carefully.`,
        audio: 'audio/toeflacademy/itp-lc-38.mp3',
        opsi: [
          { label: 'A', teks: `He will probably pay extra for a garage permit.` },
          { label: 'B', teks: `He intends to apply in person at the office tomorrow.` },
          { label: 'C', teks: `He will likely choose a cheaper, more distant lot.` },
          { label: 'D', teks: `He has decided to stop driving to campus altogether.` },
        ],
        kunci: 'C',
        pembahasan: `Jawaban: C
Pembahasan:
Transkrip Audio:
MAN: Hey, Lisa. You drive to campus, right? How did you get a parking permit? I just got another ticket this morning.
WOMAN: Oh no. Yeah, I applied online through the transportation office website back in August.
MAN: Online? I thought you had to go to the office in person.
WOMAN: Not anymore. You just fill out a form, upload your car registration, and pay the fee.
MAN: How much was it?
WOMAN: It's a hundred and twenty dollars for the semester if you park in the commuter lots. The garage near the library costs almost twice that.
MAN: Hmm, the commuter lots are pretty far from my classes, though.
WOMAN: True, but there's a free shuttle that runs every ten minutes. It drops you off right in front of the science building.
MAN: That's actually where most of my labs are. Are there still permits left, though? It's already October.
WOMAN: The garage sold out weeks ago, but I heard the commuter lots usually have spots until the end of the semester.
MAN: Great. I'll do it as soon as I get home tonight. Anything else I should know?
WOMAN: Just make sure you have a scan of your registration ready. My form got rejected the first time because I forgot it.
NARRATOR: What can be inferred about the man?
Tipe soal: Inferensi/rencana. Setelah tahu shuttle dari lahan komuter berhenti di gedung sains tempat sebagian besar praktikumnya, dan garasi sudah habis, pria langsung berkata akan mendaftar malam itu, sehingga ia kemungkinan memilih lahan komuter yang lebih murah meski jauh.
Bukti: "That's actually where most of my labs are."
Opsi A ("He will probably pay extra for a garage permit.") salah karena izin garasi sudah habis terjual sehingga tidak mungkin dibeli.
Opsi B ("He intends to apply in person at the office tomorrow.") salah karena pria berencana mendaftar online di rumah malam ini.
Opsi D ("He has decided to stop driving to campus altogether.") salah karena pria justru berencana membeli izin parkir untuk terus menyetir.`,
        tingkat: 'sulit',
        status: 'draft',
      },
    ],
  },
  {
    stimulus: { judul: `Part C: kuliah (soal 39–50; kuliah ada di audio soal 39, 43, dan 47)` },
    soal: [
      {
        nomor: 39,
        lesson: 'Part C > Main Topic',
        tipe: 'pg',
        pertanyaan: `Listen to the audio carefully.`,
        audio: 'audio/toeflacademy/itp-lc-39.mp3',
        opsi: [
          { label: 'A', teks: `How chocolate developed from an ancient beverage into a common food` },
          { label: 'B', teks: `Why the Aztecs preferred cacao to other crops in the region` },
          { label: 'C', teks: `How modern factories separate cocoa butter from cacao beans` },
          { label: 'D', teks: `Which spices give chocolate its most popular flavors today` },
        ],
        kunci: 'A',
        pembahasan: `Jawaban: A
Pembahasan:
Transkrip Audio:
PROFESSOR: Good morning, everyone. Today I want to talk about something I think you'll all enjoy: the history of chocolate. Now, most of you probably picture a sweet candy bar. But for most of its history, chocolate wasn't sweet at all, and it wasn't something you ate. It was something you drank.
PROFESSOR: The story starts in Central America more than three thousand years ago. The Olmec, and later the Maya, harvested beans from the cacao tree. They roasted and ground the beans, then mixed them with water, chili peppers, and cornmeal. The result was a bitter, frothy drink that was often used in religious ceremonies.
PROFESSOR: The Aztecs valued cacao so highly that they actually used the beans as money. You could buy a turkey or a rabbit with a certain number of beans. So, in a sense, they really did have money growing on trees.
PROFESSOR: When Spanish explorers brought cacao back to Europe in the sixteenth century, the drink didn't catch on right away. Europeans found it far too bitter. Well, the Spanish fixed that by adding sugar and cinnamon, and suddenly it became fashionable among wealthy families.
PROFESSOR: Still, chocolate stayed a luxury for about two hundred years. That changed in 1828, when a Dutch chemist named Coenraad van Houten invented a press that separated cocoa butter from the beans. This made cocoa powder cheaper and easier to work with, and it eventually led to the first solid chocolate bars.
PROFESSOR: Next time, we'll look at that pressing process more closely, because it's a great example of how food chemistry shapes what we eat.
NARRATOR: What is the lecture mainly about?
Tipe soal: Topik kuliah. Profesor menelusuri sejarah cokelat dari minuman pahit bangsa Olmec dan Maya, lalu Aztec, Eropa, hingga munculnya cokelat batangan. Jadi topik utamanya adalah perkembangan cokelat dari minuman kuno menjadi makanan umum.
Bukti: "But for most of its history, chocolate wasn't sweet at all, and it wasn't something you ate. It was something you drank."
Opsi B ("Why the Aztecs preferred cacao to other crops in the region") salah karena aztec hanya dibahas sebagai satu bagian dan tidak ada perbandingan dengan tanaman lain.
Opsi C ("How modern factories separate cocoa butter from cacao beans") salah karena proses pemisahan cocoa butter hanya disebut sebagai penemuan tahun 1828, bukan di pabrik modern.
Opsi D ("Which spices give chocolate its most popular flavors today") salah karena rempah seperti cabai dan kayu manis hanya disebut sekilas, bukan fokus kuliah.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 40,
        lesson: 'Part C > Detail',
        tipe: 'pg',
        pertanyaan: `Listen to the audio carefully.`,
        audio: 'audio/toeflacademy/itp-lc-40.mp3',
        opsi: [
          { label: 'A', teks: `To pay for goods they wanted` },
          { label: 'B', teks: `To feed their turkeys and rabbits` },
          { label: 'C', teks: `To treat a variety of illnesses` },
          { label: 'D', teks: `To decorate their royal temples` },
        ],
        kunci: 'A',
        pembahasan: `Jawaban: A
Pembahasan:
Transkrip Audio:
PROFESSOR: Good morning, everyone. Today I want to talk about something I think you'll all enjoy: the history of chocolate. Now, most of you probably picture a sweet candy bar. But for most of its history, chocolate wasn't sweet at all, and it wasn't something you ate. It was something you drank.
PROFESSOR: The story starts in Central America more than three thousand years ago. The Olmec, and later the Maya, harvested beans from the cacao tree. They roasted and ground the beans, then mixed them with water, chili peppers, and cornmeal. The result was a bitter, frothy drink that was often used in religious ceremonies.
PROFESSOR: The Aztecs valued cacao so highly that they actually used the beans as money. You could buy a turkey or a rabbit with a certain number of beans. So, in a sense, they really did have money growing on trees.
PROFESSOR: When Spanish explorers brought cacao back to Europe in the sixteenth century, the drink didn't catch on right away. Europeans found it far too bitter. Well, the Spanish fixed that by adding sugar and cinnamon, and suddenly it became fashionable among wealthy families.
PROFESSOR: Still, chocolate stayed a luxury for about two hundred years. That changed in 1828, when a Dutch chemist named Coenraad van Houten invented a press that separated cocoa butter from the beans. This made cocoa powder cheaper and easier to work with, and it eventually led to the first solid chocolate bars.
PROFESSOR: Next time, we'll look at that pressing process more closely, because it's a great example of how food chemistry shapes what we eat.
NARRATOR: According to the professor, what did the Aztecs use cacao beans for?
Tipe soal: Detail. Profesor menyatakan bangsa Aztec memakai biji kakao sebagai uang, misalnya untuk membeli kalkun atau kelinci. Artinya biji itu digunakan untuk membayar barang.
Bukti: "The Aztecs valued cacao so highly that they actually used the beans as money."
Opsi B ("To feed their turkeys and rabbits") salah karena kalkun dan kelinci adalah barang yang dibeli dengan biji kakao, bukan diberi makan biji kakao.
Opsi C ("To treat a variety of illnesses") salah karena profesor tidak menyebut penggunaan kakao sebagai obat.
Opsi D ("To decorate their royal temples") salah karena profesor tidak menyebut kakao dipakai untuk menghias kuil.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 41,
        lesson: 'Part C > Detail',
        tipe: 'pg',
        pertanyaan: `Listen to the audio carefully.`,
        audio: 'audio/toeflacademy/itp-lc-41.mp3',
        opsi: [
          { label: 'A', teks: `They served it chilled instead of hot` },
          { label: 'B', teks: `They blended it with fresh milk` },
          { label: 'C', teks: `They sweetened it and flavored it with spice` },
          { label: 'D', teks: `They took out the chili peppers` },
        ],
        kunci: 'C',
        pembahasan: `Jawaban: C
Pembahasan:
Transkrip Audio:
PROFESSOR: Good morning, everyone. Today I want to talk about something I think you'll all enjoy: the history of chocolate. Now, most of you probably picture a sweet candy bar. But for most of its history, chocolate wasn't sweet at all, and it wasn't something you ate. It was something you drank.
PROFESSOR: The story starts in Central America more than three thousand years ago. The Olmec, and later the Maya, harvested beans from the cacao tree. They roasted and ground the beans, then mixed them with water, chili peppers, and cornmeal. The result was a bitter, frothy drink that was often used in religious ceremonies.
PROFESSOR: The Aztecs valued cacao so highly that they actually used the beans as money. You could buy a turkey or a rabbit with a certain number of beans. So, in a sense, they really did have money growing on trees.
PROFESSOR: When Spanish explorers brought cacao back to Europe in the sixteenth century, the drink didn't catch on right away. Europeans found it far too bitter. Well, the Spanish fixed that by adding sugar and cinnamon, and suddenly it became fashionable among wealthy families.
PROFESSOR: Still, chocolate stayed a luxury for about two hundred years. That changed in 1828, when a Dutch chemist named Coenraad van Houten invented a press that separated cocoa butter from the beans. This made cocoa powder cheaper and easier to work with, and it eventually led to the first solid chocolate bars.
PROFESSOR: Next time, we'll look at that pressing process more closely, because it's a great example of how food chemistry shapes what we eat.
NARRATOR: According to the professor, how did the Spanish make the drink more appealing?
Tipe soal: Detail. Orang Eropa menganggap minuman itu terlalu pahit, lalu orang Spanyol menambahkan gula dan kayu manis. Gula memberi rasa manis dan kayu manis adalah rempah, sesuai opsi C.
Bukti: "Well, the Spanish fixed that by adding sugar and cinnamon, and suddenly it became fashionable among wealthy families."
Opsi A ("They served it chilled instead of hot") salah karena suhu penyajian minuman tidak pernah disebut.
Opsi B ("They blended it with fresh milk") salah karena susu tidak disebut sebagai tambahan oleh orang Spanyol.
Opsi D ("They took out the chili peppers") salah karena profesor tidak mengatakan orang Spanyol membuang cabai dari minuman itu.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 42,
        lesson: 'Part C > Inference',
        tipe: 'pg',
        pertanyaan: `Listen to the audio carefully.`,
        audio: 'audio/toeflacademy/itp-lc-42.mp3',
        opsi: [
          { label: 'A', teks: `It was designed to make chocolate drinks more bitter` },
          { label: 'B', teks: `It was created mainly for use in religious rituals` },
          { label: 'C', teks: `It helped chocolate reach people beyond the wealthy` },
          { label: 'D', teks: `It was rejected by most chocolate makers in Europe` },
        ],
        kunci: 'C',
        pembahasan: `Jawaban: C
Pembahasan:
Transkrip Audio:
PROFESSOR: Good morning, everyone. Today I want to talk about something I think you'll all enjoy: the history of chocolate. Now, most of you probably picture a sweet candy bar. But for most of its history, chocolate wasn't sweet at all, and it wasn't something you ate. It was something you drank.
PROFESSOR: The story starts in Central America more than three thousand years ago. The Olmec, and later the Maya, harvested beans from the cacao tree. They roasted and ground the beans, then mixed them with water, chili peppers, and cornmeal. The result was a bitter, frothy drink that was often used in religious ceremonies.
PROFESSOR: The Aztecs valued cacao so highly that they actually used the beans as money. You could buy a turkey or a rabbit with a certain number of beans. So, in a sense, they really did have money growing on trees.
PROFESSOR: When Spanish explorers brought cacao back to Europe in the sixteenth century, the drink didn't catch on right away. Europeans found it far too bitter. Well, the Spanish fixed that by adding sugar and cinnamon, and suddenly it became fashionable among wealthy families.
PROFESSOR: Still, chocolate stayed a luxury for about two hundred years. That changed in 1828, when a Dutch chemist named Coenraad van Houten invented a press that separated cocoa butter from the beans. This made cocoa powder cheaper and easier to work with, and it eventually led to the first solid chocolate bars.
PROFESSOR: Next time, we'll look at that pressing process more closely, because it's a great example of how food chemistry shapes what we eat.
NARRATOR: What does the professor imply about van Houten's invention?
Tipe soal: Inferensi/tujuan pembicara. Profesor mengatakan cokelat tetap menjadi barang mewah selama dua ratus tahun sampai penemuan van Houten membuatnya lebih murah. Tersirat bahwa penemuan itu membuat cokelat terjangkau oleh orang selain kalangan kaya.
Bukti: "This made cocoa powder cheaper and easier to work with, and it eventually led to the first solid chocolate bars."
Opsi A ("It was designed to make chocolate drinks more bitter") salah karena penemuan itu justru membuat bubuk kakao lebih mudah diolah, bukan lebih pahit.
Opsi B ("It was created mainly for use in religious rituals") salah karena upacara keagamaan dikaitkan dengan bangsa Olmec dan Maya, bukan dengan penemuan van Houten.
Opsi D ("It was rejected by most chocolate makers in Europe") salah karena tidak ada pernyataan bahwa pembuat cokelat menolak penemuan itu; malah penemuan itu melahirkan cokelat batangan.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      {
        nomor: 43,
        lesson: 'Part C > Main Topic',
        tipe: 'pg',
        pertanyaan: `Listen to the audio carefully.`,
        audio: 'audio/toeflacademy/itp-lc-43.mp3',
        opsi: [
          { label: 'A', teks: `Why Earth's magnetic field is slowly getting weaker` },
          { label: 'B', teks: `Which countries offer the best views for aurora photography` },
          { label: 'C', teks: `How scientists predict the timing of large solar storms` },
          { label: 'D', teks: `How particles from the sun produce a glowing display in the sky` },
        ],
        kunci: 'D',
        pembahasan: `Jawaban: D
Pembahasan:
Transkrip Audio:
PROFESSOR: Good morning, everyone. Last week we talked about the solar wind, so today I want to connect that idea to something many of you have probably seen in photos: the northern lights, also called the aurora borealis. They're beautiful, but what actually causes them?
PROFESSOR: Well, it all starts with the sun. The sun is constantly releasing a stream of charged particles, mostly electrons and protons. That's the solar wind. These particles travel through space, and some of them reach Earth, usually a couple of days after leaving the sun.
PROFESSOR: Now, Earth has a magnetic field that acts like a shield. It pushes most of those particles away. But near the North and South Poles, the field lines curve down toward the surface, so some particles get funneled into the upper atmosphere there. That's why you see auroras mainly at high latitudes, in places like Alaska, Norway, and northern Canada.
PROFESSOR: When those particles slam into gas atoms high in the atmosphere, they give the atoms extra energy. The atoms then release that energy as light. The color depends on the gas. Oxygen usually produces green, which is the most common color, while nitrogen tends to give off blue or purple.
PROFESSOR: Here's something interesting. When the sun is especially active, like during a big solar storm, it sends out far more particles than usual. During those events, the aurora can be seen much farther south than normal. So keep an eye on the space weather forecasts. You might get lucky someday, even without traveling to the Arctic.
NARRATOR: What is the lecture mainly about?
Tipe soal: Topik kuliah. Profesor membuka kuliah dengan pertanyaan tentang penyebab northern lights, lalu menjelaskan prosesnya dari partikel matahari, medan magnet Bumi, hingga atom gas yang memancarkan cahaya. Jadi topik utamanya adalah bagaimana partikel dari matahari menghasilkan aurora.
Bukti: "They're beautiful, but what actually causes them?"
Opsi A ("Why Earth's magnetic field is slowly getting weaker") salah karena profesor tidak pernah menyebut medan magnet Bumi melemah.
Opsi B ("Which countries offer the best views for aurora photography") salah karena negara-negara hanya disebut sebagai contoh lokasi, bukan fokus kuliah.
Opsi C ("How scientists predict the timing of large solar storms") salah karena prakiraan cuaca antariksa hanya disinggung singkat di akhir kuliah.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 44,
        lesson: 'Part C > Detail',
        tipe: 'pg',
        pertanyaan: `Listen to the audio carefully.`,
        audio: 'audio/toeflacademy/itp-lc-44.mp3',
        opsi: [
          { label: 'A', teks: `Earth's oceans` },
          { label: 'B', teks: `Our nearest star` },
          { label: 'C', teks: `The moon's surface` },
          { label: 'D', teks: `Distant galaxies` },
        ],
        kunci: 'B',
        pembahasan: `Jawaban: B
Pembahasan:
Transkrip Audio:
PROFESSOR: Good morning, everyone. Last week we talked about the solar wind, so today I want to connect that idea to something many of you have probably seen in photos: the northern lights, also called the aurora borealis. They're beautiful, but what actually causes them?
PROFESSOR: Well, it all starts with the sun. The sun is constantly releasing a stream of charged particles, mostly electrons and protons. That's the solar wind. These particles travel through space, and some of them reach Earth, usually a couple of days after leaving the sun.
PROFESSOR: Now, Earth has a magnetic field that acts like a shield. It pushes most of those particles away. But near the North and South Poles, the field lines curve down toward the surface, so some particles get funneled into the upper atmosphere there. That's why you see auroras mainly at high latitudes, in places like Alaska, Norway, and northern Canada.
PROFESSOR: When those particles slam into gas atoms high in the atmosphere, they give the atoms extra energy. The atoms then release that energy as light. The color depends on the gas. Oxygen usually produces green, which is the most common color, while nitrogen tends to give off blue or purple.
PROFESSOR: Here's something interesting. When the sun is especially active, like during a big solar storm, it sends out far more particles than usual. During those events, the aurora can be seen much farther south than normal. So keep an eye on the space weather forecasts. You might get lucky someday, even without traveling to the Arctic.
NARRATOR: According to the professor, where do the particles that cause the northern lights come from?
Tipe soal: Detail. Profesor menyatakan bahwa matahari terus-menerus melepaskan aliran partikel bermuatan yang disebut angin matahari. Matahari adalah bintang terdekat kita, jadi opsi C benar.
Bukti: "The sun is constantly releasing a stream of charged particles, mostly electrons and protons."
Opsi A ("Earth's oceans") salah karena lautan Bumi tidak disebut sebagai sumber partikel.
Opsi C ("The moon's surface") salah karena bulan sama sekali tidak dibahas dalam kuliah.
Opsi D ("Distant galaxies") salah karena profesor tidak menyebut galaksi lain sebagai sumber partikel.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 45,
        lesson: 'Part C > Detail',
        tipe: 'pg',
        pertanyaan: `Listen to the audio carefully.`,
        audio: 'audio/toeflacademy/itp-lc-45.mp3',
        opsi: [
          { label: 'A', teks: `The air near the poles is much thinner` },
          { label: 'B', teks: `Earth's magnetic field guides particles toward the polar regions` },
          { label: 'C', teks: `Polar skies contain less pollution and artificial light` },
          { label: 'D', teks: `The sun shines for longer periods near the poles` },
        ],
        kunci: 'B',
        pembahasan: `Jawaban: B
Pembahasan:
Transkrip Audio:
PROFESSOR: Good morning, everyone. Last week we talked about the solar wind, so today I want to connect that idea to something many of you have probably seen in photos: the northern lights, also called the aurora borealis. They're beautiful, but what actually causes them?
PROFESSOR: Well, it all starts with the sun. The sun is constantly releasing a stream of charged particles, mostly electrons and protons. That's the solar wind. These particles travel through space, and some of them reach Earth, usually a couple of days after leaving the sun.
PROFESSOR: Now, Earth has a magnetic field that acts like a shield. It pushes most of those particles away. But near the North and South Poles, the field lines curve down toward the surface, so some particles get funneled into the upper atmosphere there. That's why you see auroras mainly at high latitudes, in places like Alaska, Norway, and northern Canada.
PROFESSOR: When those particles slam into gas atoms high in the atmosphere, they give the atoms extra energy. The atoms then release that energy as light. The color depends on the gas. Oxygen usually produces green, which is the most common color, while nitrogen tends to give off blue or purple.
PROFESSOR: Here's something interesting. When the sun is especially active, like during a big solar storm, it sends out far more particles than usual. During those events, the aurora can be seen much farther south than normal. So keep an eye on the space weather forecasts. You might get lucky someday, even without traveling to the Arctic.
NARRATOR: According to the professor, why are auroras seen mainly at high latitudes?
Tipe soal: Detail. Profesor menjelaskan bahwa garis medan magnet Bumi melengkung ke bawah di dekat kutub sehingga partikel diarahkan masuk ke atmosfer atas di sana. Itulah alasan aurora terutama terlihat di lintang tinggi.
Bukti: "But near the North and South Poles, the field lines curve down toward the surface, so some particles get funneled into the upper atmosphere there."
Opsi A ("The air near the poles is much thinner") salah karena ketebalan udara di kutub tidak disebut sebagai penyebab.
Opsi C ("Polar skies contain less pollution and artificial light") salah karena polusi dan cahaya buatan tidak dibahas oleh profesor.
Opsi D ("The sun shines for longer periods near the poles") salah karena lamanya sinar matahari di kutub tidak berkaitan dengan penjelasan profesor.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 46,
        lesson: 'Part C > Inference',
        tipe: 'pg',
        pertanyaan: `Listen to the audio carefully.`,
        audio: 'audio/toeflacademy/itp-lc-46.mp3',
        opsi: [
          { label: 'A', teks: `They need special equipment to notice the aurora` },
          { label: 'B', teks: `They usually see a purple aurora instead of a green one` },
          { label: 'C', teks: `They can only experience the aurora through photographs` },
          { label: 'D', teks: `They might occasionally see the aurora when the sun is very active` },
        ],
        kunci: 'D',
        pembahasan: `Jawaban: D
Pembahasan:
Transkrip Audio:
PROFESSOR: Good morning, everyone. Last week we talked about the solar wind, so today I want to connect that idea to something many of you have probably seen in photos: the northern lights, also called the aurora borealis. They're beautiful, but what actually causes them?
PROFESSOR: Well, it all starts with the sun. The sun is constantly releasing a stream of charged particles, mostly electrons and protons. That's the solar wind. These particles travel through space, and some of them reach Earth, usually a couple of days after leaving the sun.
PROFESSOR: Now, Earth has a magnetic field that acts like a shield. It pushes most of those particles away. But near the North and South Poles, the field lines curve down toward the surface, so some particles get funneled into the upper atmosphere there. That's why you see auroras mainly at high latitudes, in places like Alaska, Norway, and northern Canada.
PROFESSOR: When those particles slam into gas atoms high in the atmosphere, they give the atoms extra energy. The atoms then release that energy as light. The color depends on the gas. Oxygen usually produces green, which is the most common color, while nitrogen tends to give off blue or purple.
PROFESSOR: Here's something interesting. When the sun is especially active, like during a big solar storm, it sends out far more particles than usual. During those events, the aurora can be seen much farther south than normal. So keep an eye on the space weather forecasts. You might get lucky someday, even without traveling to the Arctic.
NARRATOR: What does the professor imply about people who live far from the Arctic?
Tipe soal: Inferensi/tujuan pembicara. Profesor menyebut bahwa saat badai matahari besar, aurora bisa terlihat jauh lebih ke selatan, lalu menyarankan mahasiswa memantau prakiraan cuaca antariksa. Ini menyiratkan bahwa orang yang tinggal jauh dari Arktik sesekali bisa melihat aurora saat aktivitas matahari tinggi.
Bukti: "You might get lucky someday, even without traveling to the Arctic."
Opsi A ("They need special equipment to notice the aurora") salah karena profesor tidak menyebut perlunya peralatan khusus.
Opsi B ("They usually see a purple aurora instead of a green one") salah karena warna aurora dikaitkan dengan jenis gas, bukan lokasi pengamat.
Opsi C ("They can only experience the aurora through photographs") salah karena profesor justru menyiratkan mereka bisa melihatnya secara langsung.`,
        tingkat: 'sulit',
        status: 'draft',
      },
      {
        nomor: 47,
        lesson: 'Part C > Main Topic',
        tipe: 'pg',
        pertanyaan: `Listen to the audio carefully.`,
        audio: 'audio/toeflacademy/itp-lc-47.mp3',
        opsi: [
          { label: 'A', teks: `The reasons synthetic rubber replaced the natural kind` },
          { label: 'B', teks: `The early growth of the automobile industry in Europe` },
          { label: 'C', teks: `The rise of the rubber trade and its move to new regions` },
          { label: 'D', teks: `The causes of forest loss in the Amazon region today` },
        ],
        kunci: 'C',
        pembahasan: `Jawaban: C
Pembahasan:
Transkrip Audio:
PROFESSOR: Okay, everyone, let's get started. Today I want to talk about something you probably use every day without thinking about it: natural rubber. Its history is a great example of how one commodity can make a region rich, and then leave it behind just as fast.
PROFESSOR: Natural rubber comes from latex, a milky liquid collected from the rubber tree, which is native to the Amazon rain forest. Indigenous peoples there used it for centuries to make balls and waterproof containers. But for a long time, Europeans found it pretty useless. It got sticky in hot weather and cracked in the cold.
PROFESSOR: That changed in 1839, when Charles Goodyear discovered that heating rubber with sulfur made it strong and stable at any temperature. We call that process vulcanization. Then bicycles and automobiles came along, and they all needed tires. Demand just exploded.
PROFESSOR: For a while, Brazil had almost a monopoly. The city of Manaus, deep in the jungle, became so wealthy that it built a grand opera house. But collecting latex there was slow, because wild rubber trees grow far apart, and workers had to walk miles between them.
PROFESSOR: Meanwhile, in 1876, an Englishman named Henry Wickham shipped thousands of rubber seeds to London. The seedlings were later sent to British colonies in Asia, where they were planted in neat rows on huge plantations. Workers could tap hundreds of trees in a single morning.
PROFESSOR: Well, you can guess what happened. By about 1913, Asian plantations were producing more rubber than Brazil, at a much lower price. The Amazon boom collapsed. Today, the biggest producers are Thailand and Indonesia. Next time, we'll see how synthetic rubber changed the market again.
NARRATOR: What is the lecture mainly about?
Tipe soal: Topik kuliah. Profesor menjelaskan sejarah karet alam: dari Amazon, ledakan permintaan, monopoli Brasil, hingga produksi berpindah ke perkebunan Asia. Jadi topik utamanya adalah perkembangan perdagangan karet dan perpindahannya ke wilayah lain.
Bukti: "Its history is a great example of how one commodity can make a region rich, and then leave it behind just as fast."
Opsi A ("The reasons synthetic rubber replaced the natural kind") salah karena karet sintetis hanya disebut sekilas sebagai topik pertemuan berikutnya.
Opsi B ("The early growth of the automobile industry in Europe") salah karena mobil hanya disebut sebagai penyebab naiknya permintaan ban, bukan topik utama.
Opsi D ("The causes of forest loss in the Amazon region today") salah karena kerusakan hutan Amazon sama sekali tidak dibahas.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 48,
        lesson: 'Part C > Detail',
        tipe: 'pg',
        pertanyaan: `Listen to the audio carefully.`,
        audio: 'audio/toeflacademy/itp-lc-48.mp3',
        opsi: [
          { label: 'A', teks: `It reacted badly to changes in temperature.` },
          { label: 'B', teks: `It was too costly to transport from Brazil.` },
          { label: 'C', teks: `It could be harvested only once each year.` },
          { label: 'D', teks: `It caused health problems for its collectors.` },
        ],
        kunci: 'A',
        pembahasan: `Jawaban: A
Pembahasan:
Transkrip Audio:
PROFESSOR: Okay, everyone, let's get started. Today I want to talk about something you probably use every day without thinking about it: natural rubber. Its history is a great example of how one commodity can make a region rich, and then leave it behind just as fast.
PROFESSOR: Natural rubber comes from latex, a milky liquid collected from the rubber tree, which is native to the Amazon rain forest. Indigenous peoples there used it for centuries to make balls and waterproof containers. But for a long time, Europeans found it pretty useless. It got sticky in hot weather and cracked in the cold.
PROFESSOR: That changed in 1839, when Charles Goodyear discovered that heating rubber with sulfur made it strong and stable at any temperature. We call that process vulcanization. Then bicycles and automobiles came along, and they all needed tires. Demand just exploded.
PROFESSOR: For a while, Brazil had almost a monopoly. The city of Manaus, deep in the jungle, became so wealthy that it built a grand opera house. But collecting latex there was slow, because wild rubber trees grow far apart, and workers had to walk miles between them.
PROFESSOR: Meanwhile, in 1876, an Englishman named Henry Wickham shipped thousands of rubber seeds to London. The seedlings were later sent to British colonies in Asia, where they were planted in neat rows on huge plantations. Workers could tap hundreds of trees in a single morning.
PROFESSOR: Well, you can guess what happened. By about 1913, Asian plantations were producing more rubber than Brazil, at a much lower price. The Amazon boom collapsed. Today, the biggest producers are Thailand and Indonesia. Next time, we'll see how synthetic rubber changed the market again.
NARRATOR: According to the professor, what was the problem with rubber before 1839?
Tipe soal: Detail. Profesor mengatakan karet menjadi lengket saat panas dan retak saat dingin, artinya karet bermasalah ketika suhu berubah. Masalah ini baru teratasi lewat vulkanisasi tahun 1839.
Bukti: "It got sticky in hot weather and cracked in the cold."
Opsi B ("It was too costly to transport from Brazil.") salah karena biaya pengiriman dari Brasil tidak pernah disebut sebagai masalah.
Opsi C ("It could be harvested only once each year.") salah karena tidak ada informasi tentang panen hanya sekali setahun.
Opsi D ("It caused health problems for its collectors.") salah karena bahaya kesehatan bagi pengumpul getah tidak disebutkan.`,
        tingkat: 'sedang',
        status: 'draft',
      },
      {
        nomor: 49,
        lesson: 'Part C > Detail',
        tipe: 'pg',
        pertanyaan: `Listen to the audio carefully.`,
        audio: 'audio/toeflacademy/itp-lc-49.mp3',
        opsi: [
          { label: 'A', teks: `A long railway leading to the coast` },
          { label: 'B', teks: `A modern university for local students` },
          { label: 'C', teks: `A busy seaport for exporting goods` },
          { label: 'D', teks: `A large theater for musical shows` },
        ],
        kunci: 'D',
        pembahasan: `Jawaban: D
Pembahasan:
Transkrip Audio:
PROFESSOR: Okay, everyone, let's get started. Today I want to talk about something you probably use every day without thinking about it: natural rubber. Its history is a great example of how one commodity can make a region rich, and then leave it behind just as fast.
PROFESSOR: Natural rubber comes from latex, a milky liquid collected from the rubber tree, which is native to the Amazon rain forest. Indigenous peoples there used it for centuries to make balls and waterproof containers. But for a long time, Europeans found it pretty useless. It got sticky in hot weather and cracked in the cold.
PROFESSOR: That changed in 1839, when Charles Goodyear discovered that heating rubber with sulfur made it strong and stable at any temperature. We call that process vulcanization. Then bicycles and automobiles came along, and they all needed tires. Demand just exploded.
PROFESSOR: For a while, Brazil had almost a monopoly. The city of Manaus, deep in the jungle, became so wealthy that it built a grand opera house. But collecting latex there was slow, because wild rubber trees grow far apart, and workers had to walk miles between them.
PROFESSOR: Meanwhile, in 1876, an Englishman named Henry Wickham shipped thousands of rubber seeds to London. The seedlings were later sent to British colonies in Asia, where they were planted in neat rows on huge plantations. Workers could tap hundreds of trees in a single morning.
PROFESSOR: Well, you can guess what happened. By about 1913, Asian plantations were producing more rubber than Brazil, at a much lower price. The Amazon boom collapsed. Today, the biggest producers are Thailand and Indonesia. Next time, we'll see how synthetic rubber changed the market again.
NARRATOR: What did the city of Manaus build with its wealth?
Tipe soal: Detail. Profesor menyebut Manaus menjadi sangat kaya sehingga membangun gedung opera megah, yaitu teater besar untuk pertunjukan musik.
Bukti: "The city of Manaus, deep in the jungle, became so wealthy that it built a grand opera house."
Opsi A ("A long railway leading to the coast") salah karena rel kereta api tidak disebutkan dalam kuliah.
Opsi B ("A modern university for local students") salah karena universitas tidak pernah disebut.
Opsi C ("A busy seaport for exporting goods") salah karena pelabuhan tidak disebut sebagai bangunan yang didirikan Manaus.`,
        tingkat: 'mudah',
        status: 'draft',
      },
      {
        nomor: 50,
        lesson: 'Part C > Inference',
        tipe: 'pg',
        pertanyaan: `Listen to the audio carefully.`,
        audio: 'audio/toeflacademy/itp-lc-50.mp3',
        opsi: [
          { label: 'A', teks: `The Asian trees produced a better type of latex.` },
          { label: 'B', teks: `Growing trees close together cut production costs.` },
          { label: 'C', teks: `The Brazilian government stopped rubber exports.` },
          { label: 'D', teks: `Workers in Brazil refused to keep collecting latex.` },
        ],
        kunci: 'B',
        pembahasan: `Jawaban: B
Pembahasan:
Transkrip Audio:
PROFESSOR: Okay, everyone, let's get started. Today I want to talk about something you probably use every day without thinking about it: natural rubber. Its history is a great example of how one commodity can make a region rich, and then leave it behind just as fast.
PROFESSOR: Natural rubber comes from latex, a milky liquid collected from the rubber tree, which is native to the Amazon rain forest. Indigenous peoples there used it for centuries to make balls and waterproof containers. But for a long time, Europeans found it pretty useless. It got sticky in hot weather and cracked in the cold.
PROFESSOR: That changed in 1839, when Charles Goodyear discovered that heating rubber with sulfur made it strong and stable at any temperature. We call that process vulcanization. Then bicycles and automobiles came along, and they all needed tires. Demand just exploded.
PROFESSOR: For a while, Brazil had almost a monopoly. The city of Manaus, deep in the jungle, became so wealthy that it built a grand opera house. But collecting latex there was slow, because wild rubber trees grow far apart, and workers had to walk miles between them.
PROFESSOR: Meanwhile, in 1876, an Englishman named Henry Wickham shipped thousands of rubber seeds to London. The seedlings were later sent to British colonies in Asia, where they were planted in neat rows on huge plantations. Workers could tap hundreds of trees in a single morning.
PROFESSOR: Well, you can guess what happened. By about 1913, Asian plantations were producing more rubber than Brazil, at a much lower price. The Amazon boom collapsed. Today, the biggest producers are Thailand and Indonesia. Next time, we'll see how synthetic rubber changed the market again.
NARRATOR: What can be inferred about why Asian plantations outcompeted Brazil?
Tipe soal: Inferensi/tujuan pembicara. Di Amazon pohon tumbuh berjauhan sehingga pengumpulan lambat, sedangkan di Asia pohon ditanam berbaris rapat sehingga pekerja bisa menyadap ratusan pohon dalam satu pagi. Tersirat bahwa efisiensi ini membuat karet Asia jauh lebih murah dan mengalahkan Brasil.
Bukti: "Workers could tap hundreds of trees in a single morning."
Opsi A ("The Asian trees produced a better type of latex.") salah karena kualitas getah tidak dibandingkan; pohonnya berasal dari bibit Amazon yang sama.
Opsi C ("The Brazilian government stopped rubber exports.") salah karena tidak ada informasi tentang larangan ekspor oleh pemerintah Brasil.
Opsi D ("Workers in Brazil refused to keep collecting latex.") salah karena penolakan pekerja Brasil tidak pernah disebutkan.`,
        tingkat: 'sedang',
        status: 'draft',
      },
    ],
  },
];
