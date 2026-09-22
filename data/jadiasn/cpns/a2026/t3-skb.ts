import type { Tahapan } from '@/lib/skema';

/**
 * Seleksi Kompetensi Bidang.
 *
 * Bentuk SKB berbeda per jabatan dan per instansi, jadi ia tidak punya daftar
 * subtes tetap seperti SKD. Yang dicatat di sini adalah kerangka yang berlaku
 * umum menurut PERMENPANRB No. 6 Tahun 2024 Pasal 34, bukan susunan satu
 * formasi tertentu.
 */
export const tahapSkb: Tahapan = {
  kode: 'skb',
  nama: 'Seleksi Kompetensi Bidang (SKB)',
  deskripsi: `Diikuti peserta yang lulus SKD. Menilai kompetensi jabatan secara spesifik.

Bobot nilai akhir CPNS: SKB 60 persen, SKD 40 persen. SKB menjadi komponen penentu utama kelulusan.`,
  status: 'terkonfirmasi',
  subtes: [
    {
      kode: 'cat-bkn',
      nama: 'SKB dengan CAT BKN',
      formatKetentuan:
        'Metode utama SKB pada Instansi Pusat. Pada Instansi Daerah, bobotnya paling rendah 60 persen dari nilai SKB keseluruhan.',
      penilaian: 'Menyumbang 60 persen dari nilai akhir bersama SKD yang 40 persen.',
      catatan:
        'Materi berbeda setiap tahun dan setiap jabatan, mengikuti kisi-kisi yang diterbitkan instansi. Belum dirinci per formasi.',
    },
    {
      kode: 'tambahan',
      nama: 'SKB Tambahan',
      formatKetentuan: `Instansi Pusat boleh menyelenggarakan paling banyak tiga jenis tes tambahan. Bentuk yang diizinkan menurut Pasal 34:
psikotes; tes potensi akademik; tes kemampuan bahasa asing; tes kesehatan jiwa; tes kesegaran jasmani atau kesamaptaan; tes praktik kerja; uji penambahan nilai dari sertifikat kompetensi; wawancara; dan tes lain sesuai persyaratan jabatan.`,
      penilaian: `Instansi Pusat: bobot kumulatif paling tinggi 50 persen dari nilai SKB. Wawancara paling tinggi 10 persen.
Instansi Daerah: bobot paling tinggi 40 persen dari nilai SKB, dan tidak boleh berupa wawancara.`,
      catatan: 'Sebagian dilaksanakan non-CAT, misalnya tes praktik dan wawancara.',
    },
  ],
};
