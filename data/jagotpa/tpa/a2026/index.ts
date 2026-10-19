import type { Angkatan } from '@/lib/skema';
import { tahapTpa } from './t1-tpa';

/**
 * TPA bukan seleksi berangkatan, jadi "angkatan" di sini adalah FORMAT soal
 * yang berlaku: susunan tryout "Tes Potensi Akademik Part 2" (Juni 2026).
 * Susunan itu sama persis dengan Part 1 (Februari 2026), jadi dianggap stabil.
 */
export const tpa2026: Angkatan = {
  kode: '2026',
  nama: 'Format 2026',
  tahun: 2026,
  status: 'indikasi',
  ringkasan:
    'Satu sesi tes berisi tiga subtes: Verbal, Kuantitatif, dan Penalaran, ' +
    'total 250 soal di paket tryout.',
  diperbarui: '2026-10-19',
  info: [
    {
      tipe: 'penilaian',
      judul: 'Cara skor TPA (hasil rekonstruksi riset)',
      isi: `- Skor mentah tiap subtes adalah jumlah jawaban benar: Verbal 0–90, Kuantitatif 0–90, Penalaran 0–70.
- Skor subtes diubah ke skala 20–80 dengan rumus \\(S = 50 + 10 \\times \\frac{X - \\mu}{\\sigma}\\). μ adalah rata-rata skor mentah dan σ adalah simpangan bakunya. Rata-rata skor subtes adalah 50.
- Total 200–800 dihitung dari rata-rata ketiga skor subtes, dengan bobot sama, dikali 10: \\(\\text{Total} = \\frac{S_1 + S_2 + S_3}{3} \\times 10\\). Rata-rata total adalah 500.
- Menurut dokumen riset, penyelenggara merahasiakan μ dan σ. Angka di Product Knowledge adalah hasil rekonstruksi, bukan rumus resmi.`,
    },
    {
      tipe: 'penilaian',
      judul: 'Yang belum pasti dalam skor TPA',
      isi: `- Status: hasil rekonstruksi riset. Belum ada pengumuman atau dokumen resmi penyelenggara yang memuat rumus ini. Jangan disampaikan ke peserta sebagai kepastian.
- μ dan σ hanya berasal dari satu sampel dan satu perkiraan jawaban benar. Perkiraan itu belum diuji, jadi angka hasil rekonstruksi bisa meleset beberapa poin.
- Menurut dokumen riset, skor dinormalisasi ulang tiap jadwal ujian, jadi angka dari satu jadwal belum tentu berlaku untuk jadwal lain.
- Menurut dokumen riset, sertifikat resmi tidak mencantumkan total dari penjumlahan skor subtes. Rumus total di atas adalah perkiraan.
- Ambang nilai lulus tidak tercantum dalam dokumen ini. Jangan menyebut angka ambang tanpa sumber resmi.`,
    },
  ],
  tahapan: [tahapTpa],
  sumber: [
    {
      jenis: 'internal',
      judul: 'Markaz — paket tryout "Tes Potensi Akademik Part 2" dan "Part 1"',
      tanggalAkses: '2026-09-23',
      keandalan: 'asumsi',
      catatan:
        'Struktur dan jumlah soal diturunkan dari susunan paket tryout, bukan ' +
        'dari dokumen kurikulum atau pengumuman resmi.',
    },
    {
      jenis: 'internal',
      judul: 'Sistem Skoring Tes - TPA (dokumen riset internal)',
      tanggalAkses: '2026-10-19',
      keandalan: 'asumsi',
      catatan:
        'Rekayasa balik dari satu sampel skor-T dan satu perkiraan skor mentah pribadi penyusun, ' +
        'tanpa dokumen resmi penyelenggara. Dua asumsi belum diuji: selisih skor terkecil setara ' +
        'satu jawaban benar, dan rumus yang sama berlaku untuk semua jadwal. Berkas sampel yang ' +
        'disebut dokumen tidak ikut dalam PDF dan belum diperiksa, begitu pula rujukan web di ' +
        'dalamnya (CEEB, UPAP UGM).',
    },
  ],
};
