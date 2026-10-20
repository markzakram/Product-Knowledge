import type { Tahapan } from '@/lib/skema';

/**
 * Pengolahan nilai sampai pemberkasan. Tidak punya bank soal; aturan
 * kelulusannya ditulis di Informasi seleksi pada halaman angkatan.
 */
export const tahapPengolahanNilai: Tahapan = {
  kode: 'pengolahan-nilai',
  nama: 'Pengolahan Nilai sampai Pemberkasan',
  deskripsi:
    'Hasil seleksi kompetensi tambahan disampaikan Kementerian Sosial kepada ' +
    'BKN. BKN mengintegrasikan nilai seleksi kompetensi CAT dan seleksi ' +
    'kompetensi tambahan, lalu kelulusan ditentukan dari hasil integrasi nilai ' +
    'terbaik.\n\n' +
    'Urutan tahapnya: pengolahan nilai, pengumuman kelulusan, masa sanggah, ' +
    'lalu pengisian daftar riwayat hidup dan pemberkasan. Aturan pemeringkatan ' +
    'dan jadwal tentatifnya ada di Informasi seleksi.',
  status: 'terkonfirmasi',
  subtes: [],
};
