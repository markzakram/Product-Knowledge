import type { Angkatan } from '@/lib/skema';
import { tahapItp } from './t1-itp';

/**
 * TOEFL ITP bukan seleksi berangkatan: "angkatan" di sini adalah set latihan
 * 2026 dari TOEFL Academy. Format dan skala ITP Level 1 dicocokkan langsung ke
 * halaman ETS (5 Nov 2026); soal contohnya buatan AI (Toefl Generator) dan
 * berstatus draft.
 */
export const itp2026: Angkatan = {
  kode: '2026',
  nama: 'Latihan 2026',
  tahun: 2026,
  status: 'terkonfirmasi',
  ringkasan:
    'Ini latihan TOEFL Academy, bukan seleksi: tiga bagian berurutan (Listening 50 soal, ' +
    'Structure and Written Expression 40 soal, Reading 50 soal) berformat TOEFL ITP Level 1.',
  diperbarui: '2026-11-05',
  info: [
    {
      tipe: 'penilaian',
      judul: 'Cara penilaian TOEFL ITP',
      isi:
        'Tiga bagian dinilai terpisah: Listening Comprehension, Structure and Written Expression, dan Reading Comprehension. ' +
        'Setiap soal pilihan ganda A–D dengan satu jawaban benar. Skor Level 1: Listening 31–68, ' +
        'Structure and Written Expression 31–68, Reading 31–67, total 310–677, hasil konversi ETS. ' +
        'Hasil latihan ini bukan skor resmi.',
    },
  ],
  tahapan: [tahapItp],
  sumber: [
    {
      jenis: 'resmi',
      judul: 'ETS — The TOEFL ITP Assessment Series',
      url: 'https://www.ets.org/toefl/itp/test-content.html',
      tanggalAkses: '2026-11-05',
      keandalan: 'resmi',
      catatan: 'Format, waktu, dan skala TOEFL ITP Level 1 dicocokkan langsung.',
    },
    {
      jenis: 'internal',
      judul: 'Standar Soal TOEFL ITP — TOEFL Academy (Toefl Generator, docs/standar-toefl-itp.md)',
      tanggalAkses: '2026-11-05',
      keandalan: 'asumsi',
      catatan:
        'Sumber rincian materi dan topik grammar. ETS tidak merinci topik, jadi rincian ini bukan dari ETS.',
    },
    {
      jenis: 'internal',
      judul: 'Toefl Generator — batch seed-2026',
      tanggalAkses: '2026-11-05',
      keandalan: 'asumsi',
      catatan:
        'Sumber contoh soal Structure and Written Expression (40) dan Reading (50), dibuat AI, berstatus draft. Contoh Listening belum ada karena Product Knowledge belum punya pemutar audio.',
    },
  ],
};
