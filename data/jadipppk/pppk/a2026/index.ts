import type { Angkatan } from '@/lib/skema';
import { tahapSeleksiKompetensi } from './t1-seleksi-kompetensi';

/**
 * PPPK 2026.
 *
 * Disusun dari paket tryout Markaz yang AKTIF, bukan dari dokumen kurikulum:
 *   - "Tryout PPPK 2026" (Februari 2026): Manajerial 25, Sosiokultural 20,
 *     Wawancara 10. Susunannya sama dengan "Tryout PPPK 2025".
 *   - "Selkom Mansoswan" (Juni 2026): manajerial dan sosial kultural digabung
 *     jadi 45 soal, ditambah wawancara 10 — total yang sama.
 *   - Tryout teknis per jabatan, dikelompokkan per bidang ("PENDIDIKAN,
 *     PELATIHAN, DAN PENELITIAN", "KESEHATAN DAN MEDIS", dan seterusnya):
 *     90 soal per paket di semua jabatan yang diperiksa.
 *
 * Kategori "Selkom Teknis ..." (Juni 2026, satu per jabatan) sengaja tidak
 * dijadikan acuan: seluruhnya NONAKTIF saat dibaca, jadi belum dijual.
 *
 * Hanya tahap seleksi kompetensi yang ditulis, karena hanya tahap itu yang
 * punya tryout. Seleksi administrasi dan tahapan lain tidak tercatat di
 * Markaz, jadi tidak diisi dengan dugaan.
 */
export const pppk2026: Angkatan = {
  kode: '2026',
  nama: 'Formasi 2026',
  tahun: 2026,
  status: 'indikasi',
  ringkasan:
    'Yang tercatat baru tahap seleksi kompetensi: kompetensi teknis sesuai ' +
    'jabatan (90 soal), manajerial (25), sosial kultural (20), dan wawancara (10).',
  diperbarui: '2026-09-23',
  tahapan: [tahapSeleksiKompetensi],
  sumber: [
    {
      jenis: 'internal',
      judul: 'Markaz — paket tryout "Tryout PPPK 2026", "Selkom Mansoswan", dan tryout teknis per bidang',
      tanggalAkses: '2026-09-23',
      keandalan: 'asumsi',
      catatan:
        'Struktur dan jumlah soal diturunkan dari susunan paket tryout, bukan ' +
        'dari dokumen kurikulum atau pengumuman resmi.',
    },
  ],
};
