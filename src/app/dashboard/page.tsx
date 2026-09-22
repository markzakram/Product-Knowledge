import {
  gapProduksi, mappingBelumDiisi, semuaAngkatan, semuaSubtes, labelTahapan,
  tautanAngkatan, tautanSubtes,
} from '@/lib/data';
import { Status, Kosong } from '../komponen';

/** Subtes yang targetnya sudah terpenuhi — ditampilkan sebagai pembanding. */
function sudahCukup() {
  return semuaSubtes()
    .map((j) => {
      const mapping = j.subtes.mapping ?? [];
      if (!mapping.some((m) => m.tersedia !== undefined)) return null;
      const dibutuhkan = mapping.reduce((n, m) => n + m.dibutuhkan, 0);
      const tersedia = mapping.reduce((n, m) => n + (m.tersedia ?? 0), 0);
      return dibutuhkan - tersedia > 0 ? null : { ...j, dibutuhkan, tersedia };
    })
    .filter((x): x is NonNullable<typeof x> => x !== null);
}

function Bar({
  nama, konteks, ke, tersedia, dibutuhkan,
}: {
  nama: string; konteks: string; ke: string; tersedia: number; dibutuhkan: number;
}) {
  const kurang = dibutuhkan - tersedia;
  // Batangnya dipotong di 100%: surplus tidak perlu digambar melebihi penuh,
  // yang penting terbaca "sudah cukup".
  const persen = dibutuhkan === 0 ? 100 : Math.min(100, (tersedia / dibutuhkan) * 100);
  return (
    <div className="bar-baris">
      <div className="bar-nama">
        <a href={ke}>{nama}</a>
        <small>{konteks}</small>
      </div>
      <div
        className="bar-luar"
        role="img"
        aria-label={`${tersedia} dari ${dibutuhkan} soal tersedia`}
      >
        <div
          className={`bar-dalam${kurang > 0 ? ' kurang' : ''}`}
          style={{ width: `${persen}%` }}
        />
      </div>
      <div className="bar-angka">
        {tersedia.toLocaleString('id-ID')} / {dibutuhkan.toLocaleString('id-ID')} ·{' '}
        {kurang > 0 ? (
          <b className="kurang-positif">−{kurang.toLocaleString('id-ID')}</b>
        ) : (
          <b style={{ color: 'var(--ok)' }}>cukup</b>
        )}
      </div>
    </div>
  );
}

export default function Dashboard() {
  const gap = gapProduksi();
  const cukup = sudahCukup();
  const totalKurang = gap.reduce((n, g) => n + g.kurang, 0);
  const belumDiisi = mappingBelumDiisi();

  const belumLengkap = semuaAngkatan()
    .map((j) => ({
      ...j,
      belum: j.angkatan.tahapan.filter((t) => t.status !== 'terkonfirmasi'),
    }))
    .filter((x) => x.belum.length > 0);

  return (
    <>
      <h1>Dashboard Produksi</h1>
      <p className="pengantar">
        Kekurangan soal dijumlahkan per subtes, bukan per baris mapping, karena
        angka tersedia di sumbernya sering gabungan tryout dan latsol sekaligus.
      </p>

      <dl className="spek">
        <div>
          <dt>Total kurang</dt>
          <dd className={totalKurang > 0 ? 'kurang-positif' : undefined}>
            {totalKurang.toLocaleString('id-ID')}
          </dd>
        </div>
        <div>
          <dt>Subtes kurang</dt>
          <dd>{gap.length}</dd>
        </div>
        <div>
          <dt>Sudah cukup</dt>
          <dd style={{ color: 'var(--ok)' }}>{cukup.length}</dd>
        </div>
        <div>
          <dt>Belum diisi</dt>
          <dd>{belumDiisi}</dd>
        </div>
      </dl>

      <h2>Kekurangan Soal</h2>
      {gap.length === 0 ? (
        <Kosong
          teks="Tidak ada kekurangan soal"
          sebab={
            belumDiisi > 0
              ? `${belumDiisi} baris mapping belum diisi angka tersedia-nya, jadi belum semuanya bisa dihitung.`
              : 'Semua target produksi sudah terpenuhi.'
          }
        />
      ) : (
        <div style={{ marginTop: 6 }}>
          {gap.map((g) => (
            <Bar
              key={tautanSubtes(g)}
              nama={g.subtes.nama}
              konteks={`${g.platform.nama} · ${g.angkatan.nama} · ${labelTahapan(g.angkatan, g.tahapan)}`}
              ke={tautanSubtes(g)}
              tersedia={g.tersedia}
              dibutuhkan={g.dibutuhkan}
            />
          ))}
        </div>
      )}

      {cukup.length > 0 && (
        <>
          <h2>Sudah Terpenuhi</h2>
          <div style={{ marginTop: 6 }}>
            {cukup.map((g) => (
              <Bar
                key={tautanSubtes(g)}
                nama={g.subtes.nama}
                konteks={`${g.platform.nama} · ${g.angkatan.nama} · ${labelTahapan(g.angkatan, g.tahapan)}`}
                ke={tautanSubtes(g)}
                tersedia={g.tersedia}
                dibutuhkan={g.dibutuhkan}
              />
            ))}
          </div>
        </>
      )}

      <h2>Angkatan yang Datanya Belum Lengkap</h2>
      {belumLengkap.length === 0 ? (
        <Kosong
          teks="Semua tahapan sudah terkonfirmasi"
          sebab="Tidak ada angkatan yang menyisakan tahapan berstatus indikasi atau belum ada data."
        />
      ) : (
        <div className="tabel-bungkus">
          <table>
            <thead>
              <tr>
                <th>Angkatan</th>
                <th>Tahapan belum terkonfirmasi</th>
                <th>PIC</th>
                <th>Diperbarui</th>
              </tr>
            </thead>
            <tbody>
              {belumLengkap.map((x) => (
                <tr key={tautanAngkatan(x)}>
                  <td>
                    <a href={tautanAngkatan(x)}>
                      <b>
                        {x.tes.nama} {x.angkatan.nama}
                      </b>
                    </a>
                    <div className="kartu-kecil">
                      {x.belum.length} dari {x.angkatan.tahapan.length} tahapan
                    </div>
                  </td>
                  <td>
                    {x.belum.map((t) => (
                      <div key={t.kode} style={{ marginBottom: 4 }}>
                        <Status nilai={t.status} /> {t.nama}
                      </div>
                    ))}
                  </td>
                  <td>{x.angkatan.pic || '—'}</td>
                  <td>{x.angkatan.diperbarui || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
