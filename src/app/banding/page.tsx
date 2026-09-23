import { semuaSubtes, jumlahContoh, labelTahapan, tautanSubtes } from '@/lib/data';
import { TabelBanding, type BarisSubtes, type SaringanAwal } from './tabel';
import { LegendaStatus } from '../komponen';

/**
 * Banding lintas platform.
 *
 * Alasan produk ini ada adalah menjawab pertanyaan menyilang — "platform mana
 * saja yang punya tes Bahasa Inggris?", "berapa ambang batas TKP di tiap
 * platform?". Sampai sekarang itu hanya bisa dijawab dengan membuka satu per
 * satu. Halaman ini menaruh seluruh subtes dalam satu tabel yang bisa disaring.
 *
 * Subtes yang dipakai bersama SENGAJA tidak digabung di sini, berbeda dengan
 * di halaman pencarian. Justru perbandingannya yang dicari: TKP muncul di
 * JadiASN dengan ambang batas 166 dan di JadiSekdin dengan 156, dan keduanya
 * harus terlihat berdampingan.
 */
/**
 * Saringan dibaca DI SERVER lalu diserahkan sebagai nilai awal. Kalau dibaca
 * di klien, server merender tabel tanpa saringan dulu lalu klien menyaringnya:
 * tabelnya berkedip dan React memperingatkan hydration mismatch. Dengan cara
 * ini HTML pertama yang dikirim sudah tersaring — tautan yang dibagikan
 * langsung menampilkan hasil yang dimaksud.
 */
export default async function HalamanBanding({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const sp = await searchParams;
  const awal: SaringanAwal = {
    q: sp.q ?? '',
    platform: sp.platform ?? '',
    status: sp.status ?? '',
    urut: sp.urut ?? '',
    contoh: sp.contoh === '1',
  };
  const baris: BarisSubtes[] = semuaSubtes().map((j) => ({
    platform: j.platform.nama,
    slugPlatform: j.platform.slug,
    logo: j.platform.logo ?? '',
    tes: j.tes.nama,
    angkatan: j.angkatan.nama,
    tahapan: labelTahapan(j.angkatan, j.tahapan),
    namaTahapan: j.tahapan.nama,
    subtes: j.subtes.nama,
    jumlahSoal: j.subtes.jumlahSoal ?? null,
    waktuMenit: j.subtes.waktuMenit ?? null,
    contoh: jumlahContoh(j.subtes),
    status: j.tahapan.status,
    penilaian: j.subtes.penilaian ?? '',
    materi: (j.subtes.materi ?? []).map((m) => m.nama).join(' · '),
    ke: tautanSubtes(j),
  }));

  return (
    <>
      <h1>Banding Subtes</h1>
      <p className="pengantar">
        Seluruh subtes dari semua platform dalam satu tabel. Dipakai untuk
        menjawab pertanyaan menyilang — subtes mana yang muncul di banyak
        platform, dan di mana ketentuannya berbeda.
      </p>
      <LegendaStatus ada={baris.map((b) => b.status)} />
      <TabelBanding baris={baris} awal={awal} />
    </>
  );
}
