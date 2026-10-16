import type { Angkatan } from '@/lib/skema';
import { tahapPsikotes } from './t1-psikotes';

/**
 * Psikotes Kerja tidak punya angkatan: tidak ada seleksi berangkatan di sini.
 * "Angkatan" dipakai sebagai VERSI isinya, mengikuti JagoTPA. Isinya disusun dari
 * draft prototipe (folder Draft Prototype), jadi berstatus 'indikasi' dan semua
 * sumbernya berkeandalan 'asumsi'.
 */
export const psikotes2026: Angkatan = {
  kode: '2026',
  nama: 'Prototipe 2026',
  tahun: 2026,
  status: 'indikasi',
  ringkasan: 'Sepuluh subtes psikotes kerja dalam satu tahapan: empat tes kepribadian, tiga tes kecepatan dan ketelitian, dan tiga tes menggambar. Disusun dari draft prototipe, jadi berstatus indikasi.',
  diperbarui: '2026-10-15',
  info: [
    {
      tipe: 'pendahuluan',
      judul: 'Tentang isi halaman ini',
      isi: `Isi disusun dari draft prototipe sepuluh psikotes kerja (folder Draft Prototype, dibuat Agustus sampai Oktober 2026), bukan dari pengumuman resmi penyelenggara tes. Tiap subtes memuat petunjuk pengerjaan, durasi, jumlah butir, contoh butir, cara penilaian, dan tangkapan layar prototipe.

Dua hal yang perlu diingat: (1) tes kepribadian tidak punya jawaban benar atau salah, jadi contoh butirnya diberi tanda "Tanpa jawaban benar" dan pembahasannya berisi cara skor; (2) prototipe tidak membuat penilaian psikologis, dan interpretasi hasil adalah wewenang psikolog. Bentuk dan pelaksanaan tes sebenarnya dapat berbeda menurut penyelenggara.`,
    },
  ],
  tahapan: [tahapPsikotes],
  sumber: [
    {
      jenis: 'internal',
      judul: 'Draft Prototype: PROTOTIPE-BIG-FIVE.html',
      tanggalAkses: '2026-10-15',
      keandalan: 'asumsi',
      catatan: 'Draft prototipe internal, berkas diubah 5 Oktober 2026. Bersumber dari dokumen "AllPlatform — Riset Tes Psikologi (18)" (12 halaman, dengan bab Rancangan Aplikasi) dan Form Scribd 544007455 untuk teks butir 26-44.',
    },
    {
      jenis: 'internal',
      judul: 'Draft Prototype: PROTOTIPE-EPPS.html',
      tanggalAkses: '2026-10-15',
      keandalan: 'asumsi',
      catatan: 'Draft prototipe internal, berkas diubah 21 Agustus 2026. Bersumber dari dokumen "AllPlatform — Riset Tes Psikologi" (11 halaman). PROTOTIPE-SIMULASI-EPPS.html dan PROTOTIPE-EVALUASI-EPPS.html dipakai sebagai pembanding cara penilaian.',
    },
    {
      jenis: 'internal',
      judul: 'Draft Prototype: PROTOTIPE-PAPI-KOSTICK.html',
      tanggalAkses: '2026-10-15',
      keandalan: 'asumsi',
      catatan: 'Draft prototipe internal, berkas diubah 30 September 2026. Bersumber dari pedoman "AllPlatform - Riset Tes Psikologi (17).pdf" (9 halaman); teks 180 pernyataan dari dokumen lama pdf-papi-kostick_compress.pdf karena pedoman tidak memuat daftar pernyataan.',
    },
    {
      jenis: 'internal',
      judul: 'Draft Prototype: PROTOTIPE-DESKRIPSI-DIRI.html',
      tanggalAkses: '2026-10-15',
      keandalan: 'asumsi',
      catatan: 'Draft prototipe internal, berkas diubah 26 Agustus 2026. Bersumber dari dokumen "AllPlatform — Riset Tes Psikologi".',
    },
    {
      jenis: 'internal',
      judul: 'Draft Prototype: PROTOTIPE-KETELITIAN.html dan PAKET-SOAL-KETELITIAN-01.json',
      tanggalAkses: '2026-10-15',
      keandalan: 'asumsi',
      catatan: 'Draft prototipe internal, berkas diubah 27 Agustus 2026. Bersumber dari "Mapping Ketelitian PT KAI"; contoh soal dari paket KTL-20260827 (90 soal bangkitan pembangkit soal prototipe).',
    },
    {
      jenis: 'internal',
      judul: 'Draft Prototype: PROTOTIPE-KRAEPELIN.html',
      tanggalAkses: '2026-10-15',
      keandalan: 'asumsi',
      catatan: 'Draft prototipe internal, berkas diubah 5 Oktober 2026. Bersumber dari dokumen "AllPlatform — Riset Tes Psikologi" (versi 12 untuk cara pengerjaan, versi 19 untuk bab Rancangan Aplikasi dan skoring).',
    },
    {
      jenis: 'internal',
      judul: 'Draft Prototype: Prototype Tes Pauli.html',
      tanggalAkses: '2026-10-15',
      keandalan: 'asumsi',
      catatan: 'Draft prototipe internal, berkas diubah 20 Agustus 2026. Prototipe tidak menyebut dokumen sumbernya; rumus dan ambang empat aspek sama dengan yang dipakai prototipe Kraepelin.',
    },
    {
      jenis: 'internal',
      judul: 'Draft Prototype: PROTOTIPE-BAUM-TREE.html',
      tanggalAkses: '2026-10-15',
      keandalan: 'asumsi',
      catatan: 'Draft prototipe internal, berkas diubah 27 Agustus 2026. Bersumber dari dokumen "AllPlatform — Riset Tes Psikologi (9)" (bab teori dan bab Rancangan Aplikasi).',
    },
    {
      jenis: 'internal',
      judul: 'Draft Prototype: PROTOTIPE-DRAW-A-PERSON.html',
      tanggalAkses: '2026-10-15',
      keandalan: 'asumsi',
      catatan: 'Draft prototipe internal, berkas diubah 8 September 2026. Bersumber dari dokumen "AllPlatform — Riset Tes Psikologi (8)" (bab teori dan bab Rancangan Aplikasi).',
    },
    {
      jenis: 'internal',
      judul: 'Draft Prototype: PROTOTIPE-WARTEGG.html',
      tanggalAkses: '2026-10-15',
      keandalan: 'asumsi',
      catatan: 'Draft prototipe internal, berkas diubah 26 Agustus 2026. Bersumber dari dokumen "AllPlatform — Riset Tes Psikologi (7)".',
    },
  ],
};
