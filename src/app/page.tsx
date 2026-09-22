import { PLATFORM, ringkasPlatform, tautanPlatform } from '@/lib/data';

export default function Beranda() {
  const terisi = PLATFORM.filter((p) => ringkasPlatform(p).subtes > 0);

  return (
    <>
      <h1>Platform</h1>
      <p className="pengantar">
        {terisi.length} dari {PLATFORM.length} platform sudah terisi datanya. Klik
        salah satu untuk melihat tes, angkatan, tahapan, dan contoh soalnya.
      </p>

      <div className="petak">
        {PLATFORM.map((p) => {
          const r = ringkasPlatform(p);
          const kosong = r.subtes === 0;
          return (
            <a
              key={p.kode}
              href={tautanPlatform(p)}
              className={`kartu${kosong ? ' kartu-kosong' : ''}`}
            >
              <div className="kartu-judul">{p.nama}</div>
              <div className="kartu-kecil">
                {kosong ? (
                  'Belum ada data'
                ) : (
                  <>
                    {r.tes} tes · {r.angkatan} angkatan · {r.subtes} subtes
                    {r.soal > 0 && <> · {r.soal} contoh soal</>}
                  </>
                )}
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
}
