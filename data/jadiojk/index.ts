import type { Platform } from '@/lib/skema';
import { pcam } from './pcam';
import { lps } from './lps';

/**
 * JadiOJK.
 *
 * Belum ada dokumen kurikulum untuk platform ini di repo. Strukturnya
 * diturunkan dari paket TRYOUT di Markaz (dibaca 23 September 2026), jadi
 * seluruhnya berstatus 'indikasi' dan sumbernya berkeandalan 'asumsi'.
 * Pengecualian: PCAM 10 (Oktober 2026) disusun dari dokumen riset internal
 * "JadiOJK - Riset PCAM dan MLE OJK 2026", baru Tahap 1 yang lengkap.
 *
 * Yang ditulis hanya siklus terbaru yang tahapannya lengkap: PCAM 9 dan LPS
 * 2025. Markaz juga menyimpan tryout PCS 7, PCS 8, PCT 2, dan Asesmen OJK
 * 2024. Itu siklus lama dan sengaja tidak ditulis, supaya pembaca tidak
 * mengira susunannya masih berlaku.
 */
export const jadiojk: Platform = {
  kode: 'JADIOJK',
  nama: 'JadiOJK',
  slug: 'jadiojk',
  logo: 'logo/icon-jadiojk.png',
  deskripsi: 'Persiapan seleksi rekrutmen Otoritas Jasa Keuangan dan Lembaga Penjamin Simpanan.',
  tes: [pcam, lps],
};
