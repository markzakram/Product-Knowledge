import type { Subtes } from '@/lib/skema';
import { contohUkp, type TingkatUkp } from './contoh';

/**
 * Subtes UKP = materi ujian menurut dokumen Cakupan Materi Uji Kompetensi
 * Perpajakan (BPPK, 14 Okt 2026), bersifat kumulatif: Tingkat B memuat semua
 * materi Tingkat A, Tingkat C memuat semua materi Tingkat B. Daftar subtema
 * dicocokkan per butir dokumen itu (UKP Generator, data/bppk-cakupan.json).
 *
 * `mulai` adalah tingkat pertama tempat materi itu muncul; tiap subtema punya
 * tingkat terendah tempat topiknya disebut di dokumen.
 */
interface MateriUkp {
  kode: string;
  nama: string;
  mulai: TingkatUkp;
  subtema: [nama: string, tingkat: TingkatUkp][];
}

const MATERI: MateriUkp[] = [
  {
    kode: 'kup',
    nama: 'KUP, PPSP & Pengadilan Pajak (KUP)',
    mulai: 'A',
    subtema: [
      ['NPWP, PKP & pembukuan', 'A'],
      ['Pembayaran & pelaporan', 'A'],
      ['Surat ketetapan & STP', 'A'],
      ['Sanksi administrasi', 'A'],
      ['Pembetulan, keberatan & pengurangan/pembatalan', 'A'],
      ['Banding, gugatan & PK', 'A'],
      ['Penagihan & daluwarsa', 'A'],
      ['Pemeriksaan, restitusi & pidana', 'A'],
    ],
  },
  {
    kode: 'op',
    nama: 'PPh Orang Pribadi & SPT PPh OP (OP)',
    mulai: 'A',
    subtema: [
      ['Subjek pajak & kewajiban subjektif', 'A'],
      ['NPWP & pendaftaran', 'A'],
      ['PTKP, tarif & PPh terutang', 'A'],
      ['Pemajakan penghasilan keluarga', 'A'],
      ['NPPN & pembukuan', 'A'],
      ['PPh final UMKM (peredaran bruto tertentu)', 'A'],
      ['Kredit pajak, PPh 25/29 & SPT Tahunan OP', 'A'],
    ],
  },
  {
    kode: 'pp',
    nama: 'PPh Pemotongan/Pemungutan (PP)',
    mulai: 'A',
    subtema: [
      ['PPh 21: pemotong, penerima & objek', 'A'],
      ['PPh 21 pegawai tetap', 'A'],
      ['PPh 21 selain pegawai tetap & PPh 21 final', 'A'],
      ['Natura & kenikmatan', 'A'],
      ['PPh Pasal 22 & PPh Pasal 23', 'A'],
      ['PPh final Pasal 4 ayat (2)', 'A'],
      ['PPh Pasal 26 & BUT', 'A'],
      ['Tata cara penyetoran & pelaporan', 'A'],
    ],
  },
  {
    kode: 'ppn',
    nama: 'PPN & SPT PPN (PPN)',
    mulai: 'A',
    subtema: [
      ['Objek PPN & saat terutang', 'A'],
      ['DPP & tarif PPN', 'A'],
      ['PPN besaran tertentu', 'A'],
      ['Faktur Pajak & nota retur', 'A'],
      ['Pengkreditan Pajak Masukan', 'A'],
      ['PKP, pemungut PPN & SPT Masa PPN', 'A'],
      ['Fasilitas PPN', 'A'],
    ],
  },
  {
    kode: 'bm',
    nama: 'Bea Meterai (BM)',
    mulai: 'A',
    subtema: [
      ['Objek & pengecualian', 'A'],
      ['Tarif, saat & pihak terutang', 'A'],
      ['Pemungut & pembayaran', 'A'],
      ['Sanksi, kedaluwarsa & pidana', 'A'],
    ],
  },
  {
    kode: 'akt',
    nama: 'Akuntansi Perpajakan (AKT)',
    mulai: 'B',
    subtema: [
      ['Jurnal PPh & PPN', 'B'],
      ['Rekonsiliasi fiskal: beda tetap & beda temporer', 'B'],
      ['Pajak tangguhan (PSAK 212)', 'B'],
      ['Aspek pajak aset, piutang & persediaan', 'B'],
      ['Jasa konstruksi', 'C'],
      ['Organisasi nirlaba', 'B'],
      ['Bank & lembaga pembiayaan', 'C'],
      ['Merger & likuidasi', 'C'],
    ],
  },
  {
    kode: 'bdn',
    nama: 'PPh Badan Dalam Negeri (BDN)',
    mulai: 'B',
    subtema: [
      ['Subjek, objek & pengecualian objek', 'B'],
      ['Biaya boleh & tidak boleh dikurangkan', 'B'],
      ['Harga perolehan, penyusutan & amortisasi', 'B'],
      ['Kompensasi kerugian fiskal', 'B'],
      ['Tarif, Pasal 31E & fasilitas', 'B'],
      ['Kredit pajak, PPh 25 & SPT Tahunan', 'B'],
    ],
  },
  {
    kode: 'bti',
    nama: 'PPh Badan Transaksi Internasional (BTI)',
    mulai: 'B',
    subtema: [
      ['Subjek pajak badan & kewajiban subjektif', 'C'],
      ['Bentuk usaha tetap (BUT)', 'B'],
      ['Tarif PPh badan (PMA/BUT), Pasal 31E & branch profit tax', 'C'],
      ['Hubungan istimewa, harga perolehan & persediaan', 'B'],
      ['Pembatasan biaya pinjaman (thin capitalization)', 'C'],
      ['CFC: saat diperolehnya dividen', 'C'],
      ['Penghasilan luar negeri & kredit PPh Pasal 24', 'C'],
      ['Angsuran PPh Pasal 25 & SPT Tahunan PPh Badan', 'B'],
    ],
  },
  {
    kode: 'pbb',
    nama: 'PBB-P5L (PBB)',
    mulai: 'C',
    subtema: [
      ['Objek & subjek PBB-P5L', 'C'],
      ['Pengenaan PBB: NJOP, NJOPTKP, NJKP, tarif', 'C'],
      ['Pendaftaran, SPOP & SPPT', 'C'],
      ['Pembayaran, jatuh tempo & denda', 'C'],
      ['Keberatan & upaya hukum non-keberatan', 'C'],
    ],
  },
  {
    kode: 'int',
    nama: 'Pajak Internasional (INT)',
    mulai: 'C',
    subtema: [
      ['Ruang lingkup & dasar P3B', 'C'],
      ['P3B: residensi & tie breaker', 'C'],
      ['P3B: bentuk usaha tetap', 'C'],
      ['P3B: hak pemajakan & Formulir DGT', 'C'],
      ['Metode penghindaran pajak berganda', 'C'],
      ['Anti-penghindaran P3B: treaty shopping, beneficial owner, PPT', 'C'],
      ['Transfer pricing, TP Doc, MAP & APA', 'C'],
      ['Pertukaran informasi, bantuan penagihan & pajak minimum global', 'C'],
    ],
  },
];

const URUT: Record<TingkatUkp, number> = { A: 0, B: 1, C: 2 };

/** Sesi ujian daring CAT yang sama untuk semua materi: 210 menit. */
export function subtesUkp(tingkat: TingkatUkp): Subtes[] {
  return MATERI.filter((m) => URUT[m.mulai] <= URUT[tingkat]).map((m) => {
    const ada = m.subtema.filter(([, t]) => URUT[t] <= URUT[tingkat]);
    const campur = ada.some(([, t]) => t !== ada[0][1]);
    return {
      kode: m.kode,
      nama: m.nama,
      waktuMenit: 210,
      catatan: m.mulai === 'A' ? undefined : `Materi ini mulai diujikan di Tingkat ${m.mulai}.`,
      materi: ada.map(([nama, t]) => ({
        nama,
        catatan: campur && t !== m.mulai ? `mulai Tingkat ${t}` : undefined,
      })),
      contoh: contohUkp(m.kode.toUpperCase(), tingkat),
    };
  });
}
