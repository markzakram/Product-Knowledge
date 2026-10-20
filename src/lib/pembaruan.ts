/**
 * Catatan pembaruan aplikasi, sekaligus satu-satunya sumber nomor versi yang tampil.
 *
 * Terbaru di atas. Tiap rilis: tambahkan entri teratas di sini DAN naikkan
 * `version` di package.json ke angka yang sama. /cek-data menjadi temuan kalau
 * keduanya berbeda. Lencana versi di header, tautan di dasar halaman, dan halaman
 * /pembaruan membaca entri teratas ini, jadi yang tampil selalu sama dengan
 * catatannya.
 *
 * Tulis untuk pembaca CS dan marketing: apa yang berubah bagi mereka, bukan nama
 * berkas atau istilah kode. `tanggal` berformat YYYY-MM-DD; halaman mengubahnya
 * jadi "19 Oktober 2026".
 *
 * Modul ini murni: satu-satunya impor adalah tipe, yang hilang saat dikompilasi.
 */
import type { Temuan } from './data';

export interface Rilis {
  /** Tiga angka dipisah titik, mis. "1.5.0". */
  versi: string;
  /** YYYY-MM-DD. */
  tanggal: string;
  /** Ringkasan satu baris; boleh kosong. */
  judul?: string;
  poin: string[];
}

export const PEMBARUAN: readonly Rilis[] = [
  {
    versi: '1.7.0',
    tanggal: '2026-10-20',
    poin: [
      'JadiPrajurit kini tampil dengan Pa PK TNI 2026: lima tahap seleksi dari pendaftaran online sampai Sidang Pantukhir Pusat, syarat pendidikan dan daftar program studi, materi Mental Ideologi, Psikologi, dan Kesamaptaan Jasmani, serta contoh soal Mental Ideologi.',
      'JadiBUMN kini tampil. Tes Psikologi PT KAI diperkaya dengan materi dan contoh soal Verbal, Hitung Cepat, Matematika Umum, Bangun Ruang, dan Ketelitian (lengkap dengan gambar), ditambah EPPS, Pauli, Wartegg, DAP, dan Baum. Ada juga tes baru "Kumpulan Psikotes" yang isinya sama dengan PsikotesKerja.',
      'JadiPPPK kini tampil dan punya PPPK Sekolah Rakyat 2026: formasi Guru dan Tendik, persyaratan, jadwal, tahapan dan bobot nilai, serta Seleksi Kompetensi Tambahan (psikotes, bahasa Inggris, wawancara). Contoh soalnya menyusul.',
      'JadiPPG kini tampil. PPG Prajabatan 2026 diperbarui: persyaratan, pembiayaan, daftar linearitas 33 bidang studi, serta tahapan administrasi, tes substantif, dan wawancara. PPG Dalam Jabatan ditambah tahap Ujian Kinerja.',
      'Isi baru ini berstatus draf sampai ditelaah tim akademik; beberapa angka masih perlu dicocokkan dengan pengumuman resmi.',
    ],
  },
  {
    versi: '1.6.0',
    tanggal: '2026-10-19',
    poin: [
      'SKD CPNS 2027 dan SKD Sekolah Kedinasan kini berisi satu paket penuh 110 soal (TWK 30, TIU 35, TKP 45) yang disusun dari SKD Generator berdasarkan mapping dan tryout terbaru, jadi simulasi SKD berjalan penuh 100 menit. Soal TIU figural, analogi, dan deret bergambar diambil dari contoh yang sudah ada karena belum tersedia di generator. Materi dan mapping tiap subtes ikut diperbarui.',
      'JadiOJK: PCAM 9 dihapus. Contoh soal PCAM 10 Tahap 1 diganti 22 soal dari Tes OJK Generator (Kemampuan Umum 12, Penalaran Numerik 10), dengan tabel, grafik, dan gambar figural yang sama seperti versi interaktifnya.',
      'Soal-soal baru ini berstatus draf sampai ditelaah tim akademik.',
    ],
  },
  {
    versi: '1.5.0',
    tanggal: '2026-10-19',
    poin: [
      'JadiSekdin dipisah jadi tiga tes (SKD Sekolah Kedinasan, Seleksi Lanjutan IPDN, dan Seleksi Lanjutan PKN STAN); SKD tidak lagi terhitung dua kali',
      'Penilaian TKA diisi dari hasil riset tim. Penilaian JagoTPA juga sudah disiapkan untuk saat JagoTPA ditampilkan.',
      'Yang tampil kini hanya platform yang aplikasinya sudah siap: Cerebrum, JadiASN, JadiSekdin, JadiOJK, JadiPCPM, dan PsikotesKerja. JadiBUMN, JadiPPPK, JagoTPA, dan JadiPPG disimpan dulu.',
      'PsikotesKerja kini berisi tujuh subtes yang tersedia di platform: Deskripsi Diri, Ketelitian, Pauli, EPPS, DAP, Baum, dan Wartegg.',
      'Tes LPS dihapus dari JadiOJK',
      'Halaman tahun: Informasi seleksi tampil penuh di bawah tahapan (rumus ikut tampil rapi), dan panel samping jadi daftar isi',
      'Versi aplikasi kini naik tiap rilis, dan catatannya ada di halaman ini',
    ],
  },
  {
    versi: '1.4.0',
    tanggal: '2026-10-16',
    poin: [
      'Tampilan baru halaman platform (peta tes)',
      'Halaman tahun: lini masa tahapan, ringkasan angka, peringatan status, dan tombol Cetak',
      'Mode simulasi: kerjakan contoh soal dengan waktu seperti ujian, lalu lihat skor, rincian, dan pembahasan',
      'Durasi SKD terbaca 100 menit (satu sesi), bukan 300',
      'Gambar tetap tampil walau penyimpanan cache di perangkat gagal',
    ],
  },
  {
    versi: '1.3.0',
    tanggal: '2026-10-16',
    poin: [
      'Platform baru Cerebrum (TKA SMA 2026 dan UTBK-SNBT 2027) dan PsikotesKerja',
      'JadiASN CPNS 2027 dan JadiOJK PCAM 10',
      'Contoh soal PCPM 41 Tahap 1–3 bergambar (40 soal)',
      'Tipe soal baru: pilihan ganda kategori, uraian, dan soal tanpa jawaban benar',
      'Fitur unduh Kurikulum .docx dan Mapping .xlsx dihapus dulu',
    ],
  },
  {
    versi: '1.2.0',
    tanggal: '2026-09-28',
    poin: ['Bisa dipasang sebagai aplikasi (PWA) dan dibaca offline'],
  },
  {
    versi: '1.1.0',
    tanggal: '2026-09-23',
    poin: [
      'Platform JadiOJK, JadiPPPK, JagoTPA, dan JadiPPG dari tryout Markaz',
      'Rumus tampil rapi (LaTeX)',
      'Halaman Kelengkapan',
      'Saringan Banding tersimpan di alamat sehingga bisa dibagikan',
      'Arti tiap status data dijelaskan',
    ],
  },
  {
    versi: '1.0.0',
    tanggal: '2026-09-22',
    poin: [
      'Rilis pertama dengan platform JadiASN, JadiPCPM, JadiSekdin, dan JadiBUMN',
      'Pencarian dan Banding Subtes',
      'Mode latihan contoh soal, tampilan ponsel, dan tema terang/gelap',
    ],
  },
];

/** Versi yang tampil di aplikasi: rilis teratas. */
export const VERSI_APLIKASI = PEMBARUAN[0].versi;

const BULAN = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
];

/** "2026-10-19" menjadi "19 Oktober 2026". Format yang tak dikenali dikembalikan apa adanya. */
export function tanggalRilis(iso: string): string {
  const m = iso.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  const bulan = m ? BULAN[Number(m[2]) - 1] : undefined;
  return m && bulan ? `${Number(m[3])} ${bulan} ${m[1]}` : iso;
}

const POLA_VERSI = /^\d+\.\d+\.\d+$/;

/** Negatif bila a lebih lama dari b, nol bila sama, positif bila a lebih baru. */
function bandingVersi(a: string, b: string): number {
  const x = a.split('.').map(Number);
  const y = b.split('.').map(Number);
  for (let i = 0; i < 3; i++) if (x[i] !== y[i]) return x[i] - y[i];
  return 0;
}

/** Tanggal yang benar-benar ada di kalender, bukan sekadar berpola YYYY-MM-DD. */
function tanggalSah(iso: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return false;
  const d = new Date(`${iso}T00:00:00Z`);
  return !Number.isNaN(d.getTime()) && d.toISOString().slice(0, 10) === iso;
}

/**
 * Pemeriksa untuk /cek-data. `versiPaket` adalah `version` di package.json.
 *
 * Yang dijaga: versi package.json sama dengan rilis teratas (yang dipakai lencana
 * di header), dan susunan catatannya benar: versi berbentuk x.y.z yang makin kecil
 * ke bawah, tanggal sah yang tidak makin baru ke bawah, dan tiap rilis punya poin.
 */
export function periksaPembaruan(versiPaket: string): Temuan[] {
  const temuan: Temuan[] = [];
  const tambah = (lokasi: string, pesan: string) =>
    temuan.push({ jenis: 'Versi aplikasi', lokasi, ke: '/pembaruan', pesan });

  if (PEMBARUAN.length === 0) {
    tambah('src/lib/pembaruan.ts', 'Catatan pembaruan kosong; harus ada minimal satu rilis.');
    return temuan;
  }

  if (versiPaket !== PEMBARUAN[0].versi) {
    tambah(
      'package.json',
      `Versi di package.json (${versiPaket}) tidak sama dengan rilis teratas di catatan pembaruan (${PEMBARUAN[0].versi}). Naikkan keduanya bersamaan, dan taruh rilis terbaru di urutan paling atas.`,
    );
  }

  PEMBARUAN.forEach((r, i) => {
    const lokasi = `Catatan pembaruan · v${r.versi}`;
    const atas = PEMBARUAN[i - 1];
    const versiSah = POLA_VERSI.test(r.versi);
    if (!versiSah) tambah(lokasi, `Versi "${r.versi}" bukan tiga angka dipisah titik (contoh: 1.5.0).`);
    if (!tanggalSah(r.tanggal)) tambah(lokasi, `Tanggal "${r.tanggal}" bukan tanggal sah berformat YYYY-MM-DD.`);
    if (r.poin.length === 0 || r.poin.some((p) => !p.trim())) tambah(lokasi, 'Rilis tanpa poin, atau ada poin yang kosong.');
    if (atas && versiSah && POLA_VERSI.test(atas.versi) && bandingVersi(r.versi, atas.versi) >= 0) {
      tambah(lokasi, `Versi ${r.versi} harus lebih kecil dari ${atas.versi} di atasnya: rilis terbaru di paling atas.`);
    }
    if (atas && r.tanggal > atas.tanggal) {
      tambah(lokasi, `Tanggal ${r.tanggal} lebih baru dari rilis di atasnya (${atas.tanggal}): rilis terbaru di paling atas.`);
    }
  });
  return temuan;
}
