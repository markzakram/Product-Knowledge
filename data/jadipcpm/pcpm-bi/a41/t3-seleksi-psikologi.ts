import type { Tahapan } from '@/lib/skema';

/** Seleksi Psikologi */
export const tahapT3: Tahapan = {
  kode: 't3',
  nama: `Seleksi Psikologi`,
  mode: 'online',
  deskripsi: `Ketelitian, Leaderless Group Discussion, dan Wawancara Psikologi. Retest TPU atau TPK terindikasi pernah dilakukan pada PCPM 35 dan 36, tidak selalu ada tiap angkatan.`,
  status: 'indikasi',
  subtes: [
    {
        kode: 'ketelitian',
        nama: `Ketelitian`,
        jumlahSoal: 500,
        waktuMenit: 15,
        formatKetentuan: `Selang-seling antara Angka Hilang dan Huruf Duplikat`,
        materi: [
          {
            nama: `Angka Hilang`,
            catatan: `selang-seling`,
          },
          {
            nama: `Huruf Duplikat`,
            catatan: `selang-seling`,
          },
        ],
      },
    {
        kode: 'lgd',
        nama: `Leaderless Group Discussion (LGD)`,
        catatan: `Belum ada data jumlah soal dan waktu`,
      },
    {
        kode: 'wawancara',
        nama: `Wawancara Psikologi`,
        catatan: `Belum ada data jumlah soal dan waktu`,
      },
  ],
};
