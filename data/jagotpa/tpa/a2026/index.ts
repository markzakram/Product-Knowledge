import type { Angkatan } from '@/lib/skema';
import { tahapTpa } from './t1-tpa';

/**
 * TPA bukan seleksi berangkatan, jadi "angkatan" di sini adalah FORMAT soal
 * yang berlaku: susunan tryout "Tes Potensi Akademik Part 2" (Juni 2026).
 * Susunan itu sama persis dengan Part 1 (Februari 2026), jadi dianggap stabil.
 * Kuota per materi, paket tryout dan latsol, serta contoh soal berasal dari
 * TPA Generator (batch JAGOTPA-2026, 5 November 2026).
 */
export const tpa2026: Angkatan = {
  kode: '2026',
  nama: 'Format 2026',
  tahun: 2026,
  status: 'indikasi',
  ringkasan:
    'Satu sesi tes berisi tiga subtes: Verbal, Kuantitatif, dan Penalaran, ' +
    'total 250 soal di paket tryout. Tersedia 10 paket tryout (250 soal) dan ' +
    '5 paket latsol (50 soal, tiap subtes 18/18/14 soal), total 2.750 soal.',
  diperbarui: '2026-11-05',
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
        'dari dokumen kurikulum atau pengumuman resmi. Contoh soal dari paket ini sudah ' +
        'diganti dengan contoh dari TPA Generator (5 November 2026).',
    },
    {
      jenis: 'internal',
      judul: 'TPA Generator — batch JAGOTPA-2026 (profil 10to5latol)',
      tanggalAkses: '2026-11-05',
      keandalan: 'asumsi',
      catatan:
        'Batch f32479cb45, seed JAGOTPA-2026: 10 tryout + 5 latsol, 2.750 soal. Sumber kuota ' +
        'materi, mapping, dan 45 contoh soal. Soal Verbal dari AI dan soal Kuantitatif/Penalaran ' +
        'dari famili generator; telaah dikerjakan Claude atas keputusan pemilik, bukan tim independen, ' +
        'jadi contoh berstatus draft. Hal yang belum selesai menurut LAPORAN-QC.md: uji impor ke SiAdu ' +
        'belum dilakukan, audit 40 gambar soal figural FR belum dilakukan, dan 109 kunci Antonim ' +
        'tidak tercatat di data KBBI (kuncinya terlihat benar, tetapi perlu dilihat penelaah).',
    },
    {
      jenis: 'internal',
      judul: 'Riset dan Kurikulum TPA Bappenas 2026 (dokumen riset internal)',
      tanggalAkses: '2026-11-05',
      keandalan: 'asumsi',
      catatan:
        'Dasar blueprint materi dan kuota di TPA Generator. Bukan dokumen resmi penyelenggara.',
    },
    {
      jenis: 'internal',
      judul: 'Sheet JAGO TPA (latsol 18/18/14)',
      tanggalAkses: '2026-11-05',
      keandalan: 'asumsi',
      catatan:
        'Dasar ukuran paket latsol: 18 soal Verbal, 18 Kuantitatif, 14 Penalaran per paket.',
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
