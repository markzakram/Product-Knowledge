import { notFound } from 'next/navigation';
import {
  cariSubtes, semuaSubtes, jumlahContoh, labelTahapan, tautanAngkatan, tautanPlatform,
} from '@/lib/data';
import { Remah, Status, Kosong, Waktu } from '../../../../../komponen';
import { KartuKelompok } from '../../../../../soal';

export function generateStaticParams() {
  return semuaSubtes().map((j) => ({
    platform: j.platform.slug,
    tes: j.tes.kode,
    angkatan: j.angkatan.kode,
    tahapan: j.tahapan.kode,
    subtes: j.subtes.kode,
  }));
}

export default async function HalamanSubtes({
  params,
}: {
  params: Promise<{
    platform: string; tes: string; angkatan: string; tahapan: string; subtes: string;
  }>;
}) {
  const p = await params;
  const jalur = cariSubtes(p.platform, p.tes, p.angkatan, p.tahapan, p.subtes);
  if (!jalur) notFound();
  const { platform, tes, angkatan, tahapan, subtes } = jalur;

  const mapping = subtes.mapping ?? [];
  const adaTersedia = mapping.some((m) => m.tersedia !== undefined);
  const totalButuh = mapping.reduce((n, m) => n + m.dibutuhkan, 0);
  const totalAda = mapping.reduce((n, m) => n + (m.tersedia ?? 0), 0);

  return (
    <>
      <Remah
        jejak={[
          { teks: 'Platform', ke: '/' },
          { teks: platform.nama, ke: tautanPlatform(platform) },
          { teks: `${tes.nama} ${angkatan.nama}`, ke: tautanAngkatan(jalur) },
          { teks: labelTahapan(angkatan, tahapan) },
          { teks: subtes.nama },
        ]}
      />
      <h1>{subtes.nama}</h1>
      <p style={{ margin: '2px 0 10px' }}>
        <Status nilai={tahapan.status} />
        <span className="kartu-kecil"> · {labelTahapan(angkatan, tahapan)}</span>
      </p>

      <dl className="spek">
        <div>
          <dt>Jumlah soal</dt>
          <dd>{subtes.jumlahSoal ?? '—'}</dd>
        </div>
        <div>
          <dt>Waktu</dt>
          <dd>
            <Waktu menit={subtes.waktuMenit} />
          </dd>
        </div>
        <div>
          <dt>Contoh soal</dt>
          <dd>{jumlahContoh(subtes) || '—'}</dd>
        </div>
      </dl>

      {subtes.formatKetentuan && (
        <div className="panel">
          <div className="stimulus-label">Format dan ketentuan</div>
          <p className="pra" style={{ marginTop: 4 }}>
            {subtes.formatKetentuan}
          </p>
        </div>
      )}
      {subtes.penilaian && (
        <div className="panel">
          <div className="stimulus-label">Penilaian</div>
          <p className="pra" style={{ marginTop: 4 }}>
            {subtes.penilaian}
          </p>
        </div>
      )}
      {subtes.catatan && (
        <div className="panel panel-peringatan">
          <p className="pra" style={{ margin: 0 }}>
            {subtes.catatan}
          </p>
        </div>
      )}

      <h2>Materi</h2>
      {(subtes.materi ?? []).length === 0 ? (
        <Kosong teks="Belum ada rincian materi" sebab="Materi subtes ini belum dipecah di dokumen sumbernya." />
      ) : (
        <ul className="daftar">
          {subtes.materi!.map((m) => (
            <li key={m.nama}>
              {m.nama}
              {m.catatan && <span className="kartu-kecil"> — {m.catatan}</span>}
            </li>
          ))}
        </ul>
      )}

      <h2>Mapping Produksi Konten</h2>
      {mapping.length === 0 ? (
        <Kosong teks="Belum ada target produksi" sebab="Subtes ini belum masuk mapping produksi konten." />
      ) : (
        <>
          <div className="tabel-bungkus">
            <table>
              <thead>
                <tr>
                  <th>Jenis</th>
                  <th className="angka">Paket</th>
                  <th className="angka">Soal/paket</th>
                  <th className="angka">Dibutuhkan</th>
                  <th className="angka">Tersedia</th>
                  <th className="angka">Kurang</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {mapping.map((m) => {
                  const kurang = m.tersedia === undefined ? null : m.dibutuhkan - m.tersedia;
                  return (
                    <tr key={m.tipe}>
                      <td>
                        {m.tipe}
                        {m.catatan && <div className="kartu-kecil">{m.catatan}</div>}
                      </td>
                      <td className="angka">{m.paket ?? '—'}</td>
                      <td className="angka">{m.soalPerPaket ?? '—'}</td>
                      <td className="angka">{m.dibutuhkan}</td>
                      <td className="angka">{m.tersedia ?? '—'}</td>
                      <td className={`angka${(kurang ?? 0) > 0 ? ' kurang-positif' : ''}`}>
                        {kurang ?? '—'}
                      </td>
                      <td>{m.status ?? '—'}</td>
                    </tr>
                  );
                })}
                <tr>
                  <td>
                    <b>Total</b>
                  </td>
                  <td className="angka" />
                  <td className="angka" />
                  <td className="angka">
                    <b>{totalButuh}</b>
                  </td>
                  <td className="angka">
                    <b>{adaTersedia ? totalAda : '—'}</b>
                  </td>
                  <td className={`angka${adaTersedia && totalButuh - totalAda > 0 ? ' kurang-positif' : ''}`}>
                    <b>{adaTersedia ? totalButuh - totalAda : '—'}</b>
                  </td>
                  <td />
                </tr>
              </tbody>
            </table>
          </div>
          {!adaTersedia && (
            <p className="kartu-kecil">
              Kolom tersedia belum diisi, jadi angka kurang belum bisa dihitung.
            </p>
          )}
        </>
      )}

      <h2>Contoh Soal</h2>
      {(subtes.contoh ?? []).length === 0 ? (
        <Kosong teks="Belum ada contoh soal"
          sebab={subtes.catatan ?? "Contoh soal untuk subtes ini belum dimasukkan."}
        />
      ) : (
        subtes.contoh!.map((kelompok, i) => <KartuKelompok key={i} kelompok={kelompok} />)
      )}
    </>
  );
}
