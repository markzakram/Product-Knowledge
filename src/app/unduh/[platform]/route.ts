import { PLATFORM, cariPlatform } from '@/lib/data';
import { eksporPlatform } from '@/lib/ekspor';

/**
 * /unduh/<platform>: seluruh isi satu platform sebagai ZIP (Markdown per level,
 * satu Markdown lengkap, data.json, dan aset), untuk bahan knowledge AI.
 * Isinya disusun di lib/ekspor.ts.
 *
 * Dibuat SEKALI saat build, seperti halaman lain: datanya ikut ter-bundle dan
 * hanya berubah lewat deploy. Karena itu berkas di public/ cukup dibaca saat
 * build dan tidak perlu ikut ke fungsi serverless. Platform tanpa tes tidak
 * punya unduhan (dan tak punya tombolnya).
 *
 * Tetap di balik PIN: middleware menjaga semua jalur selain aset login, dan
 * service worker tidak pernah menyimpan /unduh.
 */
export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return PLATFORM.filter((p) => p.tes.length > 0).map((p) => ({ platform: p.slug }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ platform: string }> }) {
  const { platform: slug } = await params;
  const platform = cariPlatform(slug);
  if (!platform || platform.tes.length === 0) {
    return new Response('Platform tidak ditemukan.', { status: 404 });
  }

  const { zip, namaBerkas } = await eksporPlatform(platform);
  const ascii = namaBerkas.replace(/[^A-Za-z0-9._ -]+/g, '-');
  return new Response(new Uint8Array(zip), {
    headers: {
      'Content-Type': 'application/zip',
      'Content-Disposition': `attachment; filename="${ascii}"; filename*=UTF-8''${encodeURIComponent(namaBerkas)}`,
    },
  });
}
