import type { Tahapan } from '@/lib/skema';
import { contohStructure, contohWrittenExpression } from './contoh-swe';
import { contohReading } from './contoh-rc';
import { contohListening } from './contoh-lc';

const TOPIK_GRAMMAR =
  'subject-verb agreement, tenses, passive voice, gerund/infinitive, adjective clause, reduced clause, ' +
  'noun clause, parallel structure, comparison, inversion, conditional, word form, noun & quantifier, ' +
  'preposition, conjunction, sentence completeness, pronoun';

export const tahapItp: Tahapan = {
  kode: 'itp',
  nama: 'Tes ITP (tiga bagian berurutan)',
  status: 'terkonfirmasi',
  subtes: [
    {
      kode: 'lc',
      nama: 'Listening Comprehension (LC)',
      jumlahSoal: 50,
      waktuMenit: 35,
      penilaian:
        'Setiap soal pilihan ganda A–D dengan satu jawaban benar. Skor bagian Listening 31–68, hasil konversi ETS.',
      catatan:
        'Audio contoh berupa suara sintetis (edge-tts), dan bebas diputar ulang serta dijeda. Di tes asli audio hanya diputar sekali. Audio tidak tersedia offline. Pada Part B dan C, percakapan atau kuliahnya hanya ada di audio soal pertama tiap kelompok empat soal; audio soal berikutnya hanya membacakan pertanyaannya.',
      materi: [
        {
          nama: 'Part A: percakapan pendek (soal 1–30)',
          catatan:
            '30 percakapan 2 orang, 1 soal per percakapan. Jenis soal bervariasi: makna tersirat, saran, idiom, kalimat negatif, pengandaian, perasaan pembicara, rencana berikutnya. Rincian ini dari standar internal; ETS tidak merinci topik.',
        },
        {
          nama: 'Part B: percakapan panjang (soal 31–38)',
          catatan: '2 percakapan × 4 soal.',
        },
        {
          nama: 'Part C: kuliah atau monolog (soal 39–50)',
          catatan: '3 kuliah × 4 soal.',
        },
      ],
      contoh: contohListening,
    },
    {
      kode: 'swe',
      nama: 'Structure dan Written Expression (SWE)',
      jumlahSoal: 40,
      waktuMenit: 25,
      penilaian:
        'Setiap soal pilihan ganda A–D dengan satu jawaban benar. Skor bagian Structure and Written Expression 31–68, hasil konversi ETS.',
      materi: [
        {
          nama: 'Structure: melengkapi kalimat (15)',
          catatan:
            'Soal 1–15. Satu rumpang ditulis ___; tiga pengecoh menguji kesalahan umum seperti bentuk kata kerja, jumlah, urutan kata, dan klausa ganda. Topik grammar yang disebar: ' +
            TOPIK_GRAMMAR +
            '. Rincian topik dari standar internal; ETS tidak merinci topik.',
        },
        {
          nama: 'Written Expression: mencari kesalahan (25)',
          catatan:
            'Soal 16–40. Empat bagian kalimat ditandai huruf tepat sesudahnya, misalnya works(B); tepat satu bagian salah. Topik grammar sama dengan Structure. Rincian topik dari standar internal; ETS tidak merinci topik.',
        },
      ],
      contoh: [...contohStructure, ...contohWrittenExpression],
    },
    {
      kode: 'rc',
      nama: 'Reading Comprehension (RC)',
      jumlahSoal: 50,
      waktuMenit: 55,
      penilaian:
        'Setiap soal pilihan ganda A–D dengan satu jawaban benar. Skor bagian Reading 31–67, hasil konversi ETS.',
      materi: [
        {
          nama: '5 teks akademik',
          catatan:
            'Tiap teks 250–350 kata dengan 8–12 soal. Rincian ini dari standar internal; ETS tidak merinci topik.',
        },
        {
          nama: 'Tipe soal',
          catatan:
            'Main idea, detail, inference, vocabulary, reference, author\'s purpose, NOT/EXCEPT, dan organisasi teks. Soal tone/attitude paling banyak 2 per paket. Soal vocabulary dan reference menyebut paragrafnya.',
        },
      ],
      contoh: contohReading,
    },
  ],
};
