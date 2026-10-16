import type { Tahapan } from '@/lib/skema';

/**
 * Seleksi Kompetensi Bidang CPNS 2027.
 *
 * Riset 2027 hanya menyebut SKB sebagai tahap setelah SKD ("menilai kompetensi
 * peserta sesuai dengan jabatan atau bidang yang dilamar") dan tidak
 * membahasnya lebih jauh. Selebihnya DISALIN dari a2026 (t3-skb.ts), yang
 * mengacu PERMENPANRB No. 6 Tahun 2024 Pasal 34: bobot nilai akhir, subtes
 * SKB CAT BKN dan SKB Tambahan. Periksa ulang bila ada ketentuan SKB 2027.
 */
export const tahapSkb: Tahapan = {
  kode: 'skb',
  nama: 'Seleksi Kompetensi Bidang (SKB)',
  deskripsi: `Menilai kompetensi peserta sesuai dengan jabatan atau bidang yang dilamar. Diikuti peserta yang lolos SKD: hasil SKD menjadi dasar menentukan peserta yang berhak mengikuti SKB.

Bobot nilai akhir CPNS: SKB 60 persen, SKD 40 persen. SKB menjadi komponen penentu utama kelulusan.

Catatan sumber: riset 2027 tidak membahas SKB lebih jauh. Bobot nilai akhir dan rincian subtes di bawah disalin dari data CPNS 2026 (a2026). Periksa ulang bila ada ketentuan SKB 2027.`,
  status: 'indikasi',
  subtes: [
    {
      kode: 'cat-bkn',
      nama: 'SKB dengan CAT BKN',
      formatKetentuan:
        'Metode utama SKB pada Instansi Pusat. Pada Instansi Daerah, bobotnya paling rendah 60 persen dari nilai SKB keseluruhan.',
      penilaian: 'Menyumbang 60 persen dari nilai akhir bersama SKD yang 40 persen.',
      catatan:
        'Materi berbeda setiap tahun dan setiap jabatan, mengikuti kisi-kisi yang diterbitkan instansi. Belum dirinci per formasi. ' +
        'Sumber: disalin dari a2026; riset 2027 tidak membahas SKB.',
    },
    {
      kode: 'tambahan',
      nama: 'SKB Tambahan',
      formatKetentuan: `Instansi Pusat boleh menyelenggarakan paling banyak tiga jenis tes tambahan. Bentuk yang diizinkan menurut Pasal 34:
psikotes; tes potensi akademik; tes kemampuan bahasa asing; tes kesehatan jiwa; tes kesegaran jasmani atau kesamaptaan; tes praktik kerja; uji penambahan nilai dari sertifikat kompetensi; wawancara; dan tes lain sesuai persyaratan jabatan.`,
      penilaian: `Instansi Pusat: bobot kumulatif paling tinggi 50 persen dari nilai SKB. Wawancara paling tinggi 10 persen.
Instansi Daerah: bobot paling tinggi 40 persen dari nilai SKB, dan tidak boleh berupa wawancara.`,
      catatan:
        'Sebagian dilaksanakan non-CAT, misalnya tes praktik dan wawancara. ' +
        'Sumber: disalin dari a2026; riset 2027 tidak membahas SKB.',
    },
  ],
};
