import type { Tahapan } from '@/lib/skema';

export const tahapUkin: Tahapan = {
  kode: 'ukin',
  nama: 'Ujian Kinerja (Ukin)',
  deskripsi:
    'Ujian Kinerja pada UKPPPG, terdiri atas penilaian perangkat pembelajaran dan penilaian video ' +
    'praktik pembelajaran. Dokumen riset mendaftar ujian ini sebagai komponen kedua UKPPPG, dan ' +
    'tidak menjelaskan urutan pelaksanaan, jadwal, maupun durasinya.',
  status: 'terkonfirmasi',
  subtes: [
    {
      kode: 'perangkat-pembelajaran',
      nama: 'Penilaian Perangkat Pembelajaran',
      bankSoal: false,
      formatKetentuan:
        'Penilaian terhadap perangkat pembelajaran yang mendukung proses dalam praktik ' +
        'pembelajaran, berupa instrumen, dokumen, dan alat pembantu seperti peraga, termasuk ' +
        'Rancangan Pembelajaran/Modul Ajar/Rencana Pelaksanaan Layanan (untuk Bimbingan Konseling).',
    },
    {
      kode: 'video-praktik',
      nama: 'Penilaian Video Praktik Pembelajaran',
      bankSoal: false,
      formatKetentuan:
        'Penilaian terhadap kompetensi peserta PPG dalam melaksanakan pembelajaran yang efektif di ' +
        'kelas, melalui praktik pembelajaran secara riil yang diunggah melalui platform ujian. ' +
        'Video yang direkam dan diunggah bukan berasal dari video praktik saat PPL atau tugas ' +
        'perkuliahan lainnya.',
      catatan:
        'Untuk Bimbingan dan Konseling, penilaian praktik dibuat menjadi 2 bagian yang terpisah: ' +
        'video praktik layanan bimbingan klasikal dan video praktik layanan konseling individual.',
    },
  ],
};
