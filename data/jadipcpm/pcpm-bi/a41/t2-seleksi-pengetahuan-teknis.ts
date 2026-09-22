import type { Tahapan } from '@/lib/skema';

/** Seleksi Pengetahuan Teknis */
export const tahapT2: Tahapan = {
  kode: 't2',
  nama: `Seleksi Pengetahuan Teknis`,
  mode: 'online',
  deskripsi: `Pengetahuan Umum, Kebanksentralan, dan Bahasa Inggris.`,
  status: 'terkonfirmasi',
  subtes: [
    {
        kode: 'tpu',
        nama: `Pengetahuan Umum (TPU)`,
        jumlahSoal: 50,
        waktuMenit: 30,
        materi: [
          {
            nama: `Wawasan Kebangsaan dan Ketatanegaraan`,
          },
          {
            nama: `Sejarah, Geografi, dan Kebudayaan`,
          },
          {
            nama: `Pemerintahan dan Kebijakan Publik`,
          },
          {
            nama: `Ekonomi`,
          },
          {
            nama: `Keuangan dan Perbankan`,
          },
          {
            nama: `Bank Indonesia`,
          },
          {
            nama: `Pengetahuan Internasional`,
          },
          {
            nama: `Isu Aktual dan Perkembangan Kontemporer`,
          },
        ],
        mapping: [
          {
            tipe: 'tryout',
            paket: 10,
            soalPerPaket: 50,
            dibutuhkan: 500,
            tersedia: 555,
            status: 'berjalan',
            catatan: `Angka tersedia di sumber masih gabungan tryout dan latsol, perlu dipisah saat migrasi.`,
          },
          {
            tipe: 'latsol',
            paket: 5,
            soalPerPaket: 10,
            dibutuhkan: 50,
            status: 'berjalan',
          },
        ],
      },
    {
        kode: 'tpk',
        nama: `Kebanksentralan (TPK)`,
        jumlahSoal: 70,
        waktuMenit: 40,
        materi: [
          {
            nama: `Kelembagaan dan Regulasi Bank Indonesia`,
          },
          {
            nama: `Kebijakan Moneter`,
          },
          {
            nama: `Kebijakan Makroprudensial dan Stabilitas Sistem Keuangan`,
          },
          {
            nama: `Sistem Pembayaran dan Pengelolaan Uang Rupiah`,
          },
        ],
        mapping: [
          {
            tipe: 'tryout',
            paket: 10,
            soalPerPaket: 70,
            dibutuhkan: 700,
            tersedia: 525,
            status: 'berjalan',
            catatan: `Angka tersedia di sumber masih gabungan tryout dan latsol, perlu dipisah saat migrasi.`,
          },
          {
            tipe: 'latsol',
            paket: 5,
            soalPerPaket: 10,
            dibutuhkan: 50,
            status: 'berjalan',
          },
        ],
      },
    {
        kode: 'tbistructure',
        nama: `Bahasa Inggris - Structure`,
        jumlahSoal: 20,
        waktuMenit: 12.5,
        mapping: [
          {
            tipe: 'tryout',
            paket: 10,
            soalPerPaket: 20,
            dibutuhkan: 200,
            tersedia: 125,
            status: 'berjalan',
            catatan: `Angka tersedia di sumber masih gabungan tryout dan latsol, perlu dipisah saat migrasi.`,
          },
          {
            tipe: 'latsol',
            paket: 5,
            soalPerPaket: 10,
            dibutuhkan: 50,
            status: 'berjalan',
          },
        ],
        contoh: [
          {
            soal: [
              {
                nomor: 1,
                tipe: 'pg',
                pertanyaan: `The economist __________ research on inflation expectations won the award will deliver the keynote address.`,
                opsi: [
                  { label: 'A', teks: `who` },
                  { label: 'B', teks: `which` },
                  { label: 'C', teks: `whose` },
                  { label: 'D', teks: `whom` },
                ],
                kunci: `C`,
                pembahasan: `Kata ganti relatif harus menunjukkan kepemilikan atas kata benda research, sehingga digunakan whose.

Evaluasi opsi:
A. Salah, who menggantikan subjek orang, bukan menyatakan kepemilikan.
B. Salah, which digunakan untuk benda dan tidak menyatakan kepemilikan.
D. Salah, whom menggantikan objek orang, bukan menyatakan kepemilikan.

Tips: bila setelah rumpang langsung muncul kata benda tanpa artikel, pertimbangkan whose.`,
                tingkat: 'sedang',
                status: 'final',
              },
            ],
          },
        ],
      },
    {
        kode: 'tbiwritten',
        nama: `Bahasa Inggris - Written Expression`,
        jumlahSoal: 20,
        waktuMenit: 12.5,
        mapping: [
          {
            tipe: 'tryout',
            paket: 10,
            soalPerPaket: 20,
            dibutuhkan: 200,
            tersedia: 124,
            status: 'berjalan',
            catatan: `Angka tersedia di sumber masih gabungan tryout dan latsol, perlu dipisah saat migrasi.`,
          },
          {
            tipe: 'latsol',
            paket: 5,
            soalPerPaket: 10,
            dibutuhkan: 50,
            status: 'berjalan',
          },
        ],
      },
    {
        kode: 'tbireading',
        nama: `Bahasa Inggris - Reading Comprehension`,
        jumlahSoal: 20,
        waktuMenit: 20,
        mapping: [
          {
            tipe: 'tryout',
            paket: 10,
            soalPerPaket: 20,
            dibutuhkan: 200,
            tersedia: 254,
            status: 'berjalan',
            catatan: `Angka tersedia di sumber masih gabungan tryout dan latsol, perlu dipisah saat migrasi.`,
          },
          {
            tipe: 'latsol',
            paket: 5,
            soalPerPaket: 10,
            dibutuhkan: 50,
            status: 'berjalan',
          },
        ],
      },
  ],
};
