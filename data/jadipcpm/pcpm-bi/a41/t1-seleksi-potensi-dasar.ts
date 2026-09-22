import type { Tahapan } from '@/lib/skema';

/** Seleksi Potensi Dasar */
export const tahapT1: Tahapan = {
  kode: 't1',
  nama: `Seleksi Potensi Dasar`,
  mode: 'online',
  deskripsi: `Verbal, Numerical, Digit Symbol, Diagrammatical. Pengerjaan tidak bisa mundur; bisa lanjut jika sudah menjawab.`,
  status: 'terkonfirmasi',
  subtes: [
    {
        kode: 'verbal',
        nama: `Verbal`,
        jumlahSoal: 10,
        waktuMenit: 12,
        formatKetentuan: `Setiap 1 narasi digunakan untuk 2 soal`,
        catatan: `Persis soal PCPM 39`,
        materi: [
          {
            nama: `Jadwal dan urutan`,
          },
          {
            nama: `Susunan dan posisi`,
          },
          {
            nama: `Hubungan kuantitatif`,
          },
        ],
        mapping: [
          {
            tipe: 'tryout',
            paket: 20,
            soalPerPaket: 10,
            dibutuhkan: 200,
            status: 'berjalan',
          },
          {
            tipe: 'latsol',
            paket: 15,
            soalPerPaket: 10,
            dibutuhkan: 150,
            status: 'berjalan',
          },
        ],
        contoh: [
          {
            stimulus: {
              judul: `Pemesanan minuman empat teman`,
              isi: `Empat teman, yaitu Gani, Hana, Ivan, dan Joko, masing-masing memesan minuman berbeda: Kopi, Teh, Jus, dan Susu.

Ketentuan:
- Hana memesan Teh.
- Gani tidak memesan Kopi maupun Jus.
- Ivan memesan Jus.`,
            },
            soal: [
              {
                nomor: 1,
                tipe: 'benar_salah',
                pertanyaan: `Pernyataan: Joko memesan Kopi.`,
                opsi: [
                  { label: 'A', teks: `Benar` },
                  { label: 'B', teks: `Salah` },
                  { label: 'C', teks: `Tidak Dapat Ditentukan` },
                ],
                kunci: `A`,
                pembahasan: `Langkah penyelesaian:
1. Hana memesan Teh dan Ivan memesan Jus (petunjuk langsung).
2. Gani tidak boleh Kopi maupun Jus. Jus sudah dipesan Ivan dan Teh dipesan Hana, sehingga satu-satunya minuman tersisa untuk Gani adalah Susu.
3. Minuman terakhir, Kopi, otomatis menjadi milik Joko.

Hasil akhir: Gani-Susu, Hana-Teh, Ivan-Jus, Joko-Kopi.
Pernyataan bahwa Joko memesan Kopi sesuai hasil. Kesimpulan: BENAR.`,
                tingkat: 'sedang',
                status: 'final',
              },
              {
                nomor: 2,
                tipe: 'benar_salah',
                pertanyaan: `Pernyataan: Gani memesan Kopi.`,
                opsi: [
                  { label: 'A', teks: `Benar` },
                  { label: 'B', teks: `Salah` },
                  { label: 'C', teks: `Tidak Dapat Ditentukan` },
                ],
                kunci: `B`,
                pembahasan: `Langkah penyelesaian sama dengan soal sebelumnya.

Hasil akhir: Gani-Susu, Hana-Teh, Ivan-Jus, Joko-Kopi.
Gani memesan Susu, sedangkan Kopi dipesan Joko. Kesimpulan: pernyataan SALAH.`,
                tingkat: 'sedang',
                status: 'final',
              },
            ],
          },
        ],
      },
    {
        kode: 'numerik',
        nama: `Numerik - Matriks Deret`,
        jumlahSoal: 10,
        waktuMenit: 10,
        formatKetentuan: `Isian singkat`,
        catatan: `Persis soal PCPM 39`,
        materi: [
          {
            nama: `Matriks 3x3`,
            catatan: `5 soal per paket`,
          },
          {
            nama: `Matriks 4x4`,
            catatan: `5 soal per paket`,
          },
        ],
        mapping: [
          {
            tipe: 'tryout',
            paket: 20,
            soalPerPaket: 10,
            dibutuhkan: 200,
            status: 'berjalan',
          },
          {
            tipe: 'latsol',
            paket: 20,
            soalPerPaket: 10,
            dibutuhkan: 200,
            status: 'berjalan',
          },
        ],
        contoh: [
          {
            soal: [
              {
                nomor: 1,
                tipe: 'isian_singkat',
                pertanyaan: `Tentukan bilangan pengganti tanda tanya pada matriks 3x3.`,
                kunci: `27`,
                pembahasan: `Pola: tiap suku sama dengan suku sebelumnya dikali 3, lalu ditambah 2.
Contoh baris lengkap: 29, 89, 269.
Melengkapi sel bertanda tanya: (83 - 2) dibagi 3 sama dengan 27.`,
                tingkat: 'sedang',
                status: 'final',
              },
            ],
          },
        ],
      },
    {
        kode: 'digitsimbol',
        nama: `Digit Simbol`,
        jumlahSoal: 36,
        waktuMenit: 7,
        formatKetentuan: `Menentukan atau mengisikan simbol berdasarkan rangkaian digit`,
        materi: [
          {
            nama: `3 digit`,
            catatan: `4 soal`,
          },
          {
            nama: `4 digit`,
            catatan: `4 soal`,
          },
          {
            nama: `5 digit`,
            catatan: `4 soal`,
          },
          {
            nama: `6 digit`,
            catatan: `4 soal`,
          },
          {
            nama: `7 digit`,
            catatan: `4 soal`,
          },
          {
            nama: `8 digit`,
            catatan: `4 soal`,
          },
          {
            nama: `9 digit`,
            catatan: `12 soal`,
          },
        ],
        mapping: [
          {
            tipe: 'tryout',
            paket: 20,
            soalPerPaket: 36,
            dibutuhkan: 720,
            status: 'berjalan',
          },
          {
            tipe: 'latsol',
            paket: 20,
            soalPerPaket: 36,
            dibutuhkan: 720,
            status: 'berjalan',
          },
        ],
      },
    {
        kode: 'diagrammatical',
        nama: `Diagrammatical`,
        jumlahSoal: 10,
        waktuMenit: 7.5,
        formatKetentuan: `Setiap 2 soal menggunakan pasangan set X dan Y yang sama`,
        materi: [
          {
            nama: `5 pasangan set X dan Y`,
            catatan: `masing-masing 2 soal`,
          },
        ],
        mapping: [
          {
            tipe: 'tryout',
            paket: 20,
            soalPerPaket: 10,
            dibutuhkan: 200,
            status: 'berjalan',
          },
          {
            tipe: 'latsol',
            paket: 15,
            soalPerPaket: 10,
            dibutuhkan: 150,
            status: 'berjalan',
          },
        ],
      },
  ],
};
