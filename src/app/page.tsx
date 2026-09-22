import { PLATFORM, ringkasPlatform, tautanPlatform } from '@/lib/data';

export default function Beranda() {
  const ringkas = PLATFORM.map((p) => ({ platform: p, r: ringkasPlatform(p) }));
  const terisi = ringkas.filter((x) => x.r.subtes > 0);
  const kosong = ringkas.filter((x) => x.r.subtes === 0);

  return (
    <>
      <h1>Platform</h1>
      <p className="pengantar">
        Informasi seleksi lintas {PLATFORM.length} platform: tahapan, subtes,
        materi, target produksi konten, dan contoh soal beserta pembahasannya.
      </p>

      <p className="judul-bagian">Siap dipakai · {terisi.length}</p>
      <div className="petak">
        {terisi.map(({ platform, r }) => (
          <a key={platform.kode} href={tautanPlatform(platform)} className="kartu">
            <div className="kartu-kepala">
              {platform.logo && (
                // eslint-disable-next-line @next/next/no-img-element
                <img className="logo" src={`/${platform.logo}`} alt="" aria-hidden />
              )}
              <div className="kartu-judul">{platform.nama}</div>
            </div>
            <div className="kartu-kecil" style={{ marginBottom: 12 }}>
              {platform.tes.map((t) => t.nama).join(' · ')}
            </div>
            <div style={{ display: 'flex', gap: 22 }}>
              <div>
                <div className="angka-besar">{r.subtes}</div>
                <div className="kartu-kecil">subtes</div>
              </div>
              <div>
                <div className="angka-besar">{r.soal || '—'}</div>
                <div className="kartu-kecil">contoh soal</div>
              </div>
            </div>
          </a>
        ))}
      </div>

      {kosong.length > 0 && (
        <>
          {/* Platform yang belum terisi tetap ditampilkan — kelengkapannya
              informasi juga — tapi sebagai chip, bukan kartu sebesar yang
              sudah terisi. */}
          <p className="judul-bagian">Belum ada data · {kosong.length}</p>
          <div className="chip-baris">
            {kosong.map(({ platform }) => (
              <span key={platform.kode} className="chip">
                {platform.logo && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img className="logo logo-mini" src={`/${platform.logo}`} alt="" aria-hidden />
                )}
                {platform.nama}
              </span>
            ))}
          </div>
        </>
      )}
    </>
  );
}
