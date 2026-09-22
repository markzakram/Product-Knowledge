import { notFound } from 'next/navigation';
import {
  cariAngkatan, semuaAngkatan, jumlahContoh, labelTahapan, tautanPlatform, tautanSubtes,
} from '@/lib/data';
import { Remah, Status, Kosong, Waktu } from '../../../komponen';

export function generateStaticParams() {
  return semuaAngkatan().map((j) => ({
    platform: j.platform.slug,
    tes: j.tes.kode,
    angkatan: j.angkatan.kode,
  }));
}

export default async function HalamanAngkatan({
  params,
}: {
  params: Promise<{ platform: string; tes: string; angkatan: string }>;
}) {
  const p = await params;
  const jalur = cariAngkatan(p.platform, p.tes, p.angkatan);
  if (!jalur) notFound();
  const { platform, tes, angkatan } = jalur;

  return (
    <>
      <Remah
        jejak={[
          { teks: 'Platform', ke: '/' },
          { teks: platform.nama, ke: tautanPlatform(platform) },
          { teks: `${tes.nama} ${angkatan.nama}` },
        ]}
      />
      <h1>
        {tes.nama} — {angkatan.nama}
      </h1>
      <p style={{ margin: '2px 0 10px' }}>
        <Status nilai={angkatan.status} />
        <span className="kartu-kecil"> · {angkatan.tahun}</span>
        {angkatan.pic && <span className="kartu-kecil"> · PIC {angkatan.pic}</span>}
        {angkatan.diperbarui && (
          <span className="kartu-kecil"> · diperbarui {angkatan.diperbarui}</span>
        )}
      </p>
      {angkatan.ringkasan && <p className="pengantar">{angkatan.ringkasan}</p>}

      <h2>Tahapan Seleksi</h2>
      {angkatan.tahapan.map((tahapan) => (
        <section key={tahapan.kode} className="panel">
          <h3 style={{ margin: 0 }}>
            {labelTahapan(angkatan, tahapan)} <Status nilai={tahapan.status} />
            {tahapan.mode && <span className="lencana lencana-abu"> {tahapan.mode}</span>}
          </h3>
          {tahapan.deskripsi && (
            <p className="kartu-kecil" style={{ marginTop: 6 }}>
              {tahapan.deskripsi}
            </p>
          )}

          {tahapan.subtes.length === 0 ? (
            <Kosong teks="Belum ada subtes" sebab="Tahapan ini belum dirinci, atau memang bukan tes tertulis." />
          ) : (
            <div className="tabel-bungkus">
              <table>
                <thead>
                  <tr>
                    <th>Subtes</th>
                    <th className="angka">Jumlah soal</th>
                    <th>Waktu</th>
                    <th className="angka">Contoh soal</th>
                  </tr>
                </thead>
                <tbody>
                  {tahapan.subtes.map((subtes) => (
                    <tr key={subtes.kode}>
                      <td>
                        <a href={tautanSubtes({ ...jalur, tahapan, subtes })}>{subtes.nama}</a>
                      </td>
                      <td className="angka">{subtes.jumlahSoal ?? '—'}</td>
                      <td>
                        <Waktu menit={subtes.waktuMenit} />
                      </td>
                      <td className="angka">{jumlahContoh(subtes) || '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      ))}

      {(angkatan.info ?? []).length > 0 && (
        <>
          <h2>Informasi Seleksi</h2>
          {angkatan.info!.map((i) => (
            <section key={i.judul} className="panel">
              <h3 style={{ marginTop: 0 }}>{i.judul}</h3>
              <p className="pra">{i.isi}</p>
            </section>
          ))}
        </>
      )}

      {(angkatan.sumber ?? []).length > 0 && (
        <>
          <h2>Sumber</h2>
          <div className="tabel-bungkus">
            <table>
              <thead>
                <tr>
                  <th>Judul</th>
                  <th>Jenis</th>
                  <th>Keandalan</th>
                  <th>Diakses</th>
                </tr>
              </thead>
              <tbody>
                {angkatan.sumber!.map((s) => (
                  <tr key={s.judul}>
                    <td>
                      {s.url ? (
                        <a href={s.url} target="_blank" rel="noreferrer">
                          {s.judul}
                        </a>
                      ) : (
                        s.judul
                      )}
                      {s.catatan && <div className="kartu-kecil">{s.catatan}</div>}
                    </td>
                    <td>{s.jenis}</td>
                    <td>{s.keandalan}</td>
                    <td>{s.tanggalAkses ?? '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
}
