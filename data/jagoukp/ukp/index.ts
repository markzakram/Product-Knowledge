import type { Tes } from '@/lib/skema';
import { tingkatA } from './tingkat-a';
import { tingkatB } from './tingkat-b';
import { tingkatC } from './tingkat-c';

export const ukp: Tes = {
  kode: 'ukp',
  nama: 'UKP',
  instansi: 'BPPK Kementerian Keuangan',
  kategori: 'Sertifikasi Konsultan Pajak',
  deskripsi:
    'Uji Kompetensi Perpajakan (UKP) BPPK Kementerian Keuangan, pengganti ujian sertifikasi ' +
    'konsultan pajak menurut PMK 55/2026. Ada tiga tingkat (A, B, C) dengan cakupan materi kumulatif.',
  angkatan: [tingkatA, tingkatB, tingkatC],
};
