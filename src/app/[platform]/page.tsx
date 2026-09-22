import { notFound } from 'next/navigation';
import { PLATFORM, cariPlatform, tautanAngkatan } from '@/lib/data';
import { Remah, Status, Kosong } from '../komponen';

export function generateStaticParams() {
  return PLATFORM.map((p) => ({ platform: p.slug }));
}

export default async function HalamanPlatform({
  params,
}: {
  params: Promise<{ platform: string }>;
}) {
  const { platform: slug } = await params;
  const platform = cariPlatform(slug);
  if (!platform) notFound();

  return (
    <>
      <Remah jejak={[{ teks: 'Platform', ke: '/' }, { teks: platform.nama }]} />
      <h1>{platform.nama}</h1>
      {platform.deskripsi && <p className="pengantar">{platform.deskripsi}</p>}

      {platform.tes.length === 0 ? (
        <Kosong teks="Belum ada tes" sebab="Platform ini belum punya tes yang terdaftar." />
      ) : (
        platform.tes.map((tes) => (
          <section key={tes.kode}>
            <h2>{tes.nama}</h2>
            {tes.instansi && (
              <p className="kartu-kecil">
                {tes.instansi}
                {tes.kategori && ` · ${tes.kategori}`}
              </p>
            )}
            {tes.deskripsi && <p className="pengantar">{tes.deskripsi}</p>}

            {tes.angkatan.length === 0 ? (
              <Kosong teks="Belum ada angkatan" sebab="Tes ini belum punya angkatan yang datanya ditulis." />
            ) : (
              <div className="petak">
                {[...tes.angkatan]
                  .sort((a, b) => b.tahun - a.tahun)
                  .map((angkatan) => (
                    <a
                      key={angkatan.kode}
                      href={tautanAngkatan({ platform, tes, angkatan })}
                      className="kartu"
                    >
                      <div className="kartu-judul">
                        {angkatan.nama} ({angkatan.tahun})
                      </div>
                      <div className="kartu-kecil" style={{ marginBottom: 6 }}>
                        {angkatan.tahapan.length} tahapan
                      </div>
                      <Status nilai={angkatan.status} />
                    </a>
                  ))}
              </div>
            )}
          </section>
        ))
      )}
    </>
  );
}
