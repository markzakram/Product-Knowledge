import { notFound } from 'next/navigation';
import { cariSubtes, semuaSubtes, subtesBisaSimulasi } from '@/lib/data';
import { rencanaSubtes } from '@/lib/rencana-simulasi';
import { Simulasi } from '../../../../../../simulasi/klien';
// Gaya dan fon rumus KaTeX. Rumusnya sendiri dirender di server.
import 'katex/dist/katex.min.css';

/**
 * Simulasi satu subtes. Hanya subtes yang punya soal untuk dikerjakan (bukan
 * `bankSoal: false`, dan bukan hanya soal uraian) yang dibuatkan rutenya; selainnya 404.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return semuaSubtes()
    .filter((j) => subtesBisaSimulasi(j.subtes))
    .map((j) => ({
      platform: j.platform.slug,
      tes: j.tes.kode,
      angkatan: j.angkatan.kode,
      tahapan: j.tahapan.kode,
      subtes: j.subtes.kode,
    }));
}

export default async function HalamanSimulasiSubtes({
  params,
}: {
  params: Promise<{
    platform: string; tes: string; angkatan: string; tahapan: string; subtes: string;
  }>;
}) {
  const p = await params;
  const jalur = cariSubtes(p.platform, p.tes, p.angkatan, p.tahapan, p.subtes);
  if (!jalur || !subtesBisaSimulasi(jalur.subtes)) notFound();
  return <Simulasi {...rencanaSubtes(jalur)} />;
}
