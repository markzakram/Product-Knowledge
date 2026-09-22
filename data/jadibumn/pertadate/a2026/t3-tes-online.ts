import type { Tahapan } from '@/lib/skema';

/**
 * Tes Online Pertadate — satu-satunya tahapan dengan materi pembelajaran.
 *
 * Status 'indikasi', dan ini bukan kehati-hatian berlebihan. Dokumen risetnya
 * menyatakan: "Tidak ditemukan informasi terperinci mengenai jenis instrumen
 * psikotes yang digunakan. Simulasi berikut disusun berdasarkan hasil analisis
 * tim riset terhadap berbagai jenis psikotes yang pernah digunakan oleh vendor
 * rekrutmen Pertamina." Sheet mapping-nya bahkan diberi label "BELUM FIX,
 * MASIH PROSES DI RISET" di baris pertama.
 *
 * Artinya struktur di bawah adalah rekonstruksi tim riset, bukan pengumuman
 * resmi Pertamina. Jangan disampaikan ke peserta sebagai kepastian.
 */
export const tahapTesOnline: Tahapan = {
  kode: 'tes-online',
  nama: 'Tes Online',
  mode: 'online',
  deskripsi: `Terdiri dari Cognitive Agility Test, Personality & Well-being Test, English Comprehension Test, dan Game-Based Assessment.

Struktur ini rekonstruksi tim riset dari psikotes yang pernah dipakai vendor rekrutmen Pertamina, bukan pengumuman resmi.`,
  status: 'indikasi',
  subtes: [
    {
      kode: 'cat-identifikasi-data',
      nama: 'Cognitive Agility - Identifikasi Data',
      jumlahSoal: 12,
      waktuMenit: 10,
      penilaian: '(jumlah benar / jumlah soal) x 100',
      materi: [
        { nama: 'Kalender' },
        { nama: 'Satuan Waktu' },
        { nama: 'Ketelitian' },
        { nama: 'Deret Angka' },
        { nama: 'Berhitung - Perbandingan Bilangan' },
      ],
      mapping: [
        { tipe: 'tryout', paket: 5, soalPerPaket: 12, dibutuhkan: 60, status: 'belum_mulai',
          catatan: 'Sebagian besar submateri belum ada di SIADU.' },
      ],
    },
    {
      kode: 'cat-pemecahan-masalah',
      nama: 'Cognitive Agility - Pemecahan Masalah',
      jumlahSoal: 14,
      waktuMenit: 14,
      penilaian: '(jumlah benar / jumlah soal) x 100',
      materi: [{ nama: 'Verbal Silogisme', catatan: 'Logika kuantor' }],
      mapping: [
        { tipe: 'tryout', paket: 5, soalPerPaket: 14, dibutuhkan: 70, status: 'belum_mulai' },
      ],
    },
    {
      kode: 'cat-perbendaharaan-kata',
      nama: 'Cognitive Agility - Perbendaharaan Kata',
      jumlahSoal: 18,
      waktuMenit: 16,
      penilaian: '(jumlah benar / jumlah soal) x 100',
      mapping: [
        { tipe: 'tryout', paket: 5, soalPerPaket: 18, dibutuhkan: 90, status: 'belum_mulai' },
      ],
    },
    {
      kode: 'cat-pengolahan-data',
      nama: 'Cognitive Agility - Pengolahan Data',
      jumlahSoal: 16,
      waktuMenit: 20,
      penilaian: '(jumlah benar / jumlah soal) x 100',
      mapping: [
        { tipe: 'tryout', paket: 5, soalPerPaket: 16, dibutuhkan: 80, status: 'belum_mulai' },
      ],
    },
    {
      kode: 'personality',
      nama: 'Personality & Well-being Test',
      formatKetentuan: 'Inventori kepribadian, tidak ada jawaban benar atau salah.',
      catatan: 'Jumlah soal dan alokasi waktu belum ada di dokumen sumber.',
      materi: [
        { nama: 'Personality Traits' },
        { nama: 'Work Behavior' },
        { nama: 'Workplace Well-being Battery' },
        { nama: 'Work Value' },
      ],
    },
    {
      kode: 'ect-reading',
      nama: 'English Comprehension - Reading Comprehension',
      jumlahSoal: 15,
      waktuMenit: 25,
    },
    {
      kode: 'ect-structure',
      nama: 'English Comprehension - Structure',
      jumlahSoal: 15,
      waktuMenit: 15,
    },
    {
      kode: 'ect-dialogue',
      nama: 'English Comprehension - Dialogue Completion',
      jumlahSoal: 15,
      waktuMenit: 10,
    },
    {
      kode: 'ect-listening',
      nama: 'English Comprehension - Listening',
      jumlahSoal: 15,
      waktuMenit: 15,
      catatan: 'Butuh berkas audio; belum ada di repo.',
    },
    {
      kode: 'gba',
      nama: 'Game-Based Assessment (GBA)',
      formatKetentuan: 'Pertamina Net Zero. Peserta mengunduh aplikasi tersendiri.',
      catatan: 'Bukan soal pilihan ganda, tidak punya bank soal.',
    },
  ],
};
