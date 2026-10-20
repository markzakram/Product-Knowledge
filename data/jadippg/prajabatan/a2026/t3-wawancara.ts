import type { Tahapan } from '@/lib/skema';

export const tahapWawancara: Tahapan = {
  kode: 'wawancara',
  nama: 'Wawancara',
  mode: 'online',
  deskripsi:
    'Tahap III: tes wawancara untuk menggali kompetensi profesional dan personal calon peserta. ' +
    'Dilaksanakan secara daring lewat Google Meet yang terintegrasi dengan SIMPKB.',
  status: 'terkonfirmasi',
  subtes: [
    {
      kode: 'wawancara',
      nama: 'Wawancara',
      waktuMenit: 60,
      bankSoal: false,
      formatKetentuan: `Prinsip pelaksanaan:
- Wawancara dilakukan oleh 2 (dua) orang asesor pada waktu yang bersamaan dan difasilitasi 1 orang pemantau.
- Wawancara bersifat rahasia, sehingga hanya asesor yang diperbolehkan merekam wawancara untuk keperluan dokumentasi.
- Asesor dan calon mahasiswa tidak diperkenankan berkomunikasi secara langsung. Komunikasi dilakukan lewat perantaraan pemantau wawancara.
- Penjadwalan ulang wawancara dimungkinkan hanya untuk SATU kali kesempatan dan karena alasan yang sangat mendesak: kendala listrik dan jaringan internet, musibah (sakit, kerabat meninggal dunia, bencana alam), serta upacara keagamaan.`,
      catatan: 'Wawancara menggali lebih dalam sepuluh kompetensi calon mahasiswa (lihat materi).',
      materi: [
        { nama: 'Building positive working relationship', catatan: 'Membangun hubungan kerja sama positif.' },
        { nama: 'Coaching', catatan: 'Pembinaan.' },
        { nama: 'Compelling communication', catatan: 'Komunikasi yang berbobot.' },
        { nama: 'Continuous learning', catatan: 'Pembelajaran berkelanjutan.' },
        { nama: 'Decision making', catatan: 'Pengambilan keputusan.' },
        { nama: 'Ethical maturity', catatan: 'Kematangan beretika.' },
        { nama: 'Managing work', catatan: 'Pengelolaan kerja.' },
        { nama: 'Mission/purpose', catatan: 'Misi/tujuan.' },
        { nama: 'Resilience', catatan: 'Daya juang/resiliensi.' },
        { nama: 'Valuing differences', catatan: 'Menghargai perbedaan.' },
      ],
    },
  ],
};
