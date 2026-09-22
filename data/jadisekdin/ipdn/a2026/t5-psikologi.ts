import type { Tahapan } from '@/lib/skema';

/**
 * Tes Psikologi, Integritas, dan Kejujuran IPDN.
 *
 * Kecermatan tidak punya jumlah soal tetap: durasinya dibatasi per kolom,
 * bukan per soal. Field jumlahSoal sengaja dikosongkan, bukan diisi 0.
 */
export const tahapPsikologi: Tahapan = {
  kode: 'psikologi',
  nama: 'Tes Psikologi, Integritas, dan Kejujuran',
  mode: 'online',
  status: 'terkonfirmasi',
  subtes: [
    {
      kode: 'kecerdasan',
      nama: 'Kecerdasan',
      jumlahSoal: 36,
      waktuMenit: 90,
      materi: [
        { nama: 'Verbal', catatan: 'Sinonim, antonim, analogi 2 kata dan 3 kata' },
        { nama: 'Numerik' },
        { nama: 'Figural' },
      ],
      mapping: [
        { tipe: 'tryout', paket: 10, soalPerPaket: 36, dibutuhkan: 360, status: 'berjalan',
          catatan: 'Sebagian bank soal berbagi dengan JadiASN.' },
        { tipe: 'latsol', paket: 5, soalPerPaket: 10, dibutuhkan: 50, status: 'berjalan' },
      ],
    },
    {
      kode: 'kecermatan',
      nama: 'Kecermatan',
      formatKetentuan: 'Dibatasi waktu per kolom, sekitar 1 menit per kolom, bukan per soal.',
      catatan: 'Jumlah soal tidak tetap karena formatnya berbasis kolom.',
    },
    {
      kode: 'kepribadian',
      nama: 'Kepribadian',
      jumlahSoal: 150,
      waktuMenit: 105,
      mapping: [
        { tipe: 'tryout', paket: 10, soalPerPaket: 150, dibutuhkan: 1500, status: 'berjalan' },
        { tipe: 'latsol', paket: 5, soalPerPaket: 10, dibutuhkan: 50, status: 'berjalan' },
      ],
    },
  ],
};
