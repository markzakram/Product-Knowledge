import { notFound } from 'next/navigation';
import { angkatanBisaSimulasi, cariAngkatan, semuaAngkatan } from '@/lib/data';
import { rencanaAngkatan } from '@/lib/rencana-simulasi';
import { Simulasi } from '../../../../simulasi/klien';
// Gaya dan fon rumus KaTeX. Rumusnya sendiri dirender di server.
import 'katex/dist/katex.min.css';

/**
 * Simulasi seluruh angkatan: subtes berurutan, tiap bagian dengan waktunya sendiri.
 * Hanya angkatan yang punya subtes dengan soal yang dibuatkan rutenya; selainnya 404.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return semuaAngkatan()
    .filter((j) => angkatanBisaSimulasi(j.angkatan))
    .map((j) => ({ platform: j.platform.slug, tes: j.tes.kode, angkatan: j.angkatan.kode }));
}

export default async function HalamanSimulasiAngkatan({
  params,
}: {
  params: Promise<{ platform: string; tes: string; angkatan: string }>;
}) {
  const p = await params;
  const jalur = cariAngkatan(p.platform, p.tes, p.angkatan);
  if (!jalur || !angkatanBisaSimulasi(jalur.angkatan)) notFound();
  return <Simulasi {...rencanaAngkatan(jalur)} />;
}
