import { notFound } from 'next/navigation';
import {
  PLATFORM, cariPlatform, angkaPlatform, angkatanAwal, angkaAngkatan, angkaTahapan, angkatanBisaSimulasi,
  judulAngkatan, kodeChipTahapan, metaSubtes, ringkasAngka, tautanAngkatan, tautanSimulasiAngkatan,
  tautanTahapan, totalAngka,
  type JalurAngkatan,
} from '@/lib/data';
import { Remah, Kosong } from '../komponen';
import { PetaTes, type PetaAngkatan } from '../peta-tes';

export function generateStaticParams() {
  return PLATFORM.map((p) => ({ platform: p.slug }));
}

/**
 * Tahapan bersubtes menampilkan paling banyak segini baris. Sisanya diringkas
 * jadi tautan "+N subtes lainnya" ke kartu tahapan di halaman angkatan; KAI
 * punya 10 subtes dalam satu tahapan, dan semuanya di sini akan mendorong
 * tahapan lain jauh ke bawah.
 */
const BATAS_SUBTES = 6;

/**
 * Ringkasan satu angkatan untuk kartu peta tes. Berupa data polos (teks dan
 * angka) karena dikirim ke komponen klien, yang sengaja tak mengimpor data.
 */
function ringkasAngkatan(j: JalurAngkatan): PetaAngkatan {
  const { tes, angkatan } = j;

  // Kartu bersubtes dipasangkan berurutan, dua per baris. Kartu yang tak punya
  // pasangan (diapit baris ringkas, atau yang terakhir) dilebarkan penuh;
  // kalau tidak, setengah barisnya kosong.
  const penuh = angkatan.tahapan.map(() => false);
  let menunggu = -1;
  angkatan.tahapan.forEach((t, i) => {
    if (t.subtes.length === 0) {
      penuh[i] = true;
      if (menunggu >= 0) penuh[menunggu] = true;
      menunggu = -1;
    } else if (menunggu >= 0) {
      menunggu = -1;
    } else {
      menunggu = i;
    }
  });
  if (menunggu >= 0) penuh[menunggu] = true;

  return {
    kode: angkatan.kode,
    nama: angkatan.nama,
    status: angkatan.status,
    tautan: tautanAngkatan(j),
    judul: judulAngkatan(tes, angkatan),
    total: totalAngka(angkaAngkatan(angkatan)),
    // Rute simulasi hanya ada bila sedikitnya satu subtesnya punya soal untuk dikerjakan.
    simulasi: angkatanBisaSimulasi(angkatan) ? tautanSimulasiAngkatan(j) : undefined,
    tahapan: angkatan.tahapan.map((t, i) => {
      // Dihitung dari SEMUA subtes tahapan, bukan hanya yang tampil: bentrok di
      // subtes yang tersembunyi tetap mengubah seluruh tahapan jadi nomor, dan
      // kodenya harus sama dengan yang tampil di halaman angkatan.
      const chip = kodeChipTahapan(t.subtes.map((s) => s.nama));
      return {
        kode: t.kode,
        nomor: i + 1,
        nama: t.nama,
        status: t.status,
        ringkas: t.subtes.length ? ringkasAngka(angkaTahapan(t)) : '',
        subtes: t.subtes.slice(0, BATAS_SUBTES).map((s, k) => ({
          nama: s.nama,
          chip: chip[k],
          // Tahapan satu sesi: waktu subtes milik sesi, jadi cukup jumlah soalnya.
          meta: metaSubtes(s, t.waktuBersama),
        })),
        sisa: Math.max(0, t.subtes.length - BATAS_SUBTES),
        tautan: tautanTahapan(j, t),
        penuh: penuh[i],
      };
    }),
  };
}

export default async function HalamanPlatform({
  params,
}: {
  params: Promise<{ platform: string }>;
}) {
  const { platform: slug } = await params;
  const platform = cariPlatform(slug);
  if (!platform) notFound();

  // Per objek unik: SKD yang dirujuk IPDN dan PKN STAN dihitung sekali.
  const angka = angkaPlatform(platform);
  const adaPilihan = platform.tes.some((t) => t.angkatan.length > 1);

  return (
    <>
      <Remah jejak={[{ teks: 'Platform', ke: '/' }, { teks: platform.nama }]} />
      <section className="plat-kepala">
        {platform.logo && (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="logo logo-besar" src={`/${platform.logo}`} alt="" aria-hidden />
        )}
        <div className="plat-teks">
          <h1>{platform.nama}</h1>
          {platform.deskripsi && <p className="plat-deskripsi">{platform.deskripsi}</p>}
        </div>
        {/* Platform tanpa tes tak punya apa pun untuk dihitung; deretan nol
            hanya akan terbaca seperti data yang gagal dimuat. */}
        {platform.tes.length > 0 && (
          <div className="ubin-baris plat-ubin">
            <div className="ubin">
              <div className="ubin-nilai">{angka.tes}</div>
              <div className="ubin-label">tes</div>
            </div>
            <div className="ubin">
              <div className="ubin-nilai">{angka.subtes}</div>
              <div className="ubin-label">subtes</div>
            </div>
            <div className="ubin">
              <div className="ubin-nilai">{angka.contoh || '—'}</div>
              <div className="ubin-label">contoh soal</div>
            </div>
          </div>
        )}
      </section>

      {platform.tes.length === 0 ? (
        <Kosong teks="Belum ada tes" sebab="Platform ini belum punya tes yang terdaftar." />
      ) : (
        <>
          <div className="bagian-kepala">
            <h2>Tes</h2>
            <span className="bagian-ket">
              {adaPilihan
                ? 'Pilih angkatan untuk melihat tahapan, subtes, dan contoh soal'
                : 'Tahapan, subtes, dan contoh soal tiap tes'}
            </span>
          </div>
          <div className="peta-daftar">
            {platform.tes.map((tes) => (
              <PetaTes
                key={tes.kode}
                nama={tes.nama}
                kategori={tes.kategori}
                instansi={tes.instansi}
                deskripsi={tes.deskripsi}
                angkatan={[...tes.angkatan]
                  .sort((a, b) => b.tahun - a.tahun)
                  .map((angkatan) => ringkasAngkatan({ platform, tes, angkatan }))}
                awal={angkatanAwal(tes)?.kode}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}
