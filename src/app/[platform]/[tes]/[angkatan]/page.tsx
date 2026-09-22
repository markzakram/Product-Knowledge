import { notFound } from 'next/navigation';
import {
  cariAngkatan, semuaAngkatan, jumlahContoh, tautanPlatform, tautanSubtes,
} from '@/lib/data';
import { Remah, Status, Waktu } from '../../../komponen';

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

  const totalSubtes = angkatan.tahapan.reduce((n, t) => n + t.subtes.length, 0);
  const totalSoal = angkatan.tahapan.reduce(
    (n, t) => n + t.subtes.reduce((m, s) => m + jumlahContoh(s), 0),
    0,
  );

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

      {/* Dokumen dihasilkan dari data yang sama dengan yang ditampilkan di
          halaman ini — bukan berkas terpisah yang bisa ketinggalan zaman. */}
      <div className="unduh-bar">
        <span className="label-mini" style={{ margin: 0 }}>Unduh</span>
        <a className="unduh-tombol" href={`/unduh?jenis=kurikulum&platform=${platform.slug}&tes=${tes.kode}&angkatan=${angkatan.kode}`}>
          Kurikulum <span>.docx</span>
        </a>
        <a className="unduh-tombol" href={`/unduh?jenis=mapping&platform=${platform.slug}&tes=${tes.kode}&angkatan=${angkatan.kode}`}>
          Mapping <span>.xlsx</span>
        </a>
        <span className="kartu-kecil">
          Untuk PDF: buka Kurikulum di Word lalu simpan sebagai PDF, atau cetak
          halaman ini lewat Ctrl+P.
        </span>
      </div>

      <dl className="spek">
        <div>
          <dt>Tahapan</dt>
          <dd>{angkatan.tahapan.length}</dd>
        </div>
        <div>
          <dt>Subtes</dt>
          <dd>{totalSubtes}</dd>
        </div>
        <div>
          <dt>Contoh soal</dt>
          <dd>{totalSoal || '—'}</dd>
        </div>
      </dl>

      <h2>Tahapan Seleksi</h2>
      {/*
        Ditampilkan sebagai urutan bernomor dengan garis penghubung, bukan
        tumpukan kotak seragam. Seleksi itu proses berurutan, jadi bentuknya
        sebaiknya menunjukkan itu.

        Tahapan tanpa subtes TIDAK diberi panel penuh — ia jadi baris ringkas.
        Sebelumnya keadaan kosong memakan ruang sama besar dengan tahapan yang
        berisi materi, sehingga yang penting justru tenggelam.
      */}
      <ol className="tahap-runut">
        {angkatan.tahapan.map((tahapan, i) => {
          const adaSubtes = tahapan.subtes.length > 0;
          return (
            <li key={tahapan.kode} className={`tahap${adaSubtes ? '' : ' tahap-ringkas'}`}>
              <div className="tahap-nomor" aria-hidden>
                {i + 1}
              </div>
              <div className="tahap-isi">
                <div className="tahap-kepala">
                  <h3>{tahapan.nama}</h3>
                  <Status nilai={tahapan.status} />
                  {tahapan.mode && <span className="lencana lencana-abu">{tahapan.mode}</span>}
                  {adaSubtes && (
                    <span className="tahap-hitung">{tahapan.subtes.length} subtes</span>
                  )}
                </div>
                {tahapan.deskripsi && <p className="pra tahap-deskripsi">{tahapan.deskripsi}</p>}

                {adaSubtes && (
                  <div className="tabel-bungkus">
                    <table>
                      <thead>
                        <tr>
                          <th>Subtes</th>
                          <th className="angka">Soal</th>
                          <th className="angka">Waktu</th>
                          <th className="angka">Contoh</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tahapan.subtes.map((subtes) => {
                          const n = jumlahContoh(subtes);
                          return (
                            <tr key={subtes.kode}>
                              <td>
                                <a href={tautanSubtes({ ...jalur, tahapan, subtes })}>
                                  <b>{subtes.nama}</b>
                                </a>
                              </td>
                              <td className="angka">{subtes.jumlahSoal ?? '—'}</td>
                              <td className="angka">
                                <Waktu menit={subtes.waktuMenit} />
                              </td>
                              <td className="angka">
                                {n ? <span className="lencana lencana-hijau">{n}</span> : '—'}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ol>

      {(angkatan.info ?? []).length > 0 && (
        <>
          <h2>Informasi Seleksi</h2>
          {/* Dilipat: isinya panjang (persyaratan 12 poin, jadwal 14 baris) dan
              jarang dibaca utuh, jadi tidak pantas mendorong tahapan ke atas. */}
          {angkatan.info!.map((i) => (
            <details key={i.judul} className="lipat">
              <summary>
                <span>{i.judul}</span>
                <span className="lencana lencana-abu">{i.tipe}</span>
              </summary>
              <p className="pra">{i.isi}</p>
            </details>
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
                    <td>
                      {/* Keandalan diberi warna: 'asumsi' harus terlihat berbeda
                          dari 'resmi', karena itu yang memisahkan fakta dari
                          rekonstruksi tim riset. */}
                      <span
                        className={`lencana ${
                          s.keandalan === 'resmi'
                            ? 'lencana-hijau'
                            : s.keandalan === 'asumsi'
                              ? 'lencana-merah'
                              : 'lencana-kuning'
                        }`}
                      >
                        {s.keandalan}
                      </span>
                    </td>
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
