import { notFound } from 'next/navigation';
import { PLATFORM, cariPlatform, jumlahContoh, tautanAngkatan } from '@/lib/data';
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
      <div className="judul-logo">
        {platform.logo && (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="logo logo-besar" src={`/${platform.logo}`} alt="" aria-hidden />
        )}
        <h1>{platform.nama}</h1>
      </div>
      {platform.deskripsi && <p className="pengantar">{platform.deskripsi}</p>}

      {platform.tes.length === 0 ? (
        <Kosong teks="Belum ada tes" sebab="Platform ini belum punya tes yang terdaftar." />
      ) : (
        <>
          <p className="judul-bagian">Tes · {platform.tes.length}</p>
          {/*
            Tiap tes jadi satu blok berisi angkatannya, bukan judul polos
            diikuti satu kartu kecil yang kesepian. Kartu angkatan kini
            membawa angka — tahapan, subtes, contoh soal — supaya sebelum
            diklik sudah kelihatan seberapa lengkap isinya.
          */}
          <div className="tes-daftar">
            {platform.tes.map((tes) => (
              <section key={tes.kode} className="tes-blok">
                <div className="tes-kepala">
                  <h2>{tes.nama}</h2>
                  {tes.kategori && <span className="lencana lencana-aksen">{tes.kategori}</span>}
                </div>
                {tes.instansi && <div className="tes-instansi">{tes.instansi}</div>}
                {tes.deskripsi && <p className="pengantar tes-deskripsi">{tes.deskripsi}</p>}

                {tes.angkatan.length === 0 ? (
                  <Kosong
                    teks="Belum ada angkatan"
                    sebab="Tes ini belum punya angkatan yang datanya ditulis."
                  />
                ) : (
                  <div className="petak">
                    {[...tes.angkatan]
                      .sort((a, b) => b.tahun - a.tahun)
                      .map((angkatan) => {
                        const subtes = angkatan.tahapan.flatMap((t) => t.subtes);
                        const soal = subtes.reduce((n, s) => n + jumlahContoh(s), 0);
                        return (
                          <a
                            key={angkatan.kode}
                            href={tautanAngkatan({ platform, tes, angkatan })}
                            className="kartu"
                          >
                            <div className="kartu-judul">{angkatan.nama}</div>
                            <div className="kartu-kecil" style={{ marginBottom: 12 }}>
                              {angkatan.tahun}
                            </div>
                            <div className="kartu-angka">
                              <div>
                                <div className="angka-besar">{angkatan.tahapan.length}</div>
                                <div className="kartu-kecil">tahapan</div>
                              </div>
                              <div>
                                <div className="angka-besar">{subtes.length}</div>
                                <div className="kartu-kecil">subtes</div>
                              </div>
                              <div>
                                <div className="angka-besar">{soal || '—'}</div>
                                <div className="kartu-kecil">contoh</div>
                              </div>
                            </div>
                            <div style={{ marginTop: 12 }}>
                              <Status nilai={angkatan.status} />
                            </div>
                          </a>
                        );
                      })}
                  </div>
                )}
              </section>
            ))}
          </div>
        </>
      )}
    </>
  );
}
