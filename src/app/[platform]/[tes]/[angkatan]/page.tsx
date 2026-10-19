import { notFound } from 'next/navigation';
import {
  cariAngkatan, semuaAngkatan, jumlahContoh, tautanPlatform, tautanSubtes,
  angkaId, angkaAngkatan, angkaTahapan, angkatanBisaSimulasi, idInfo, idTahapan, judulAngkatan,
  kodeChipTahapan, labelTahapan, nomorTahapan, ringkasAngka, subtesBisaSimulasi,
  tautanSimulasiAngkatan, tautanSimulasiSubtes,
} from '@/lib/data';
import { LABEL_STATUS } from '@/lib/skema';
import { uraikan } from '@/lib/isi-kaya';
import { Remah, Status, Kosong, LegendaStatus, Ikon, TabelGulir } from '../../../komponen';
import { IsiKaya } from '../../../isi-kaya';
import { Cetak } from '../../../cetak';
// Gaya dan fon rumus KaTeX. Rumusnya sendiri dirender di server.
import 'katex/dist/katex.min.css';

export function generateStaticParams() {
  return semuaAngkatan().map((j) => ({
    platform: j.platform.slug,
    tes: j.tes.kode,
    angkatan: j.angkatan.kode,
  }));
}

interface Ubin {
  label: string;
  nilai: string;
  catatan?: string;
}

/**
 * Ubin angka yang berasal dari jumlah per subtes (soal, durasi).
 *
 * Kalau hanya sebagian subtes yang punya angka, angkanya tetap tampil, karena
 * itulah yang diketahui, disertai berapa subtes yang belum punya. Kalau tak
 * satu pun punya, "—": angka 0 akan terbaca sebagai "tidak ada soal".
 */
function ubinJumlah(label: string, nilai: string, punya: number, semua: number): Ubin {
  if (punya === 0) return { label, nilai: '—' };
  return {
    label,
    nilai,
    catatan: punya < semua ? `(${semua - punya} subtes belum ada angka)` : undefined,
  };
}

interface ButirIsi {
  id: string;
  label: string;
}

interface IsiDaftar {
  tahapan: ButirIsi[];
  info: ButirIsi[];
  adaSumber: boolean;
}

/**
 * Daftar isi halaman angkatan: tahapan, tiap bagian Informasi seleksi, lalu
 * Sumber, masing-masing menaut ke jangkarnya di halaman yang sama.
 *
 * Halaman merendernya dua kali: kartu di kolom samping (layar lebar) dan blok
 * lipat di atas halaman (layar sempit, tempat kolom samping jatuh ke bawah).
 * CSS menyembunyikan salah satunya dengan display: none, yang juga
 * melepaskannya dari pembaca layar dan urutan Tab, jadi hanya satu yang terbaca.
 */
function DaftarIsi({ isi }: { isi: IsiDaftar }) {
  return (
    <ol className="toc">
      <li>
        <a className="toc-grup" href="#tahapan">
          Tahapan seleksi
        </a>
        {isi.tahapan.length > 0 && (
          <ol className="toc-anak">
            {isi.tahapan.map((b) => (
              <li key={b.id}>
                <a href={`#${b.id}`}>{b.label}</a>
              </li>
            ))}
          </ol>
        )}
      </li>
      {isi.info.length > 0 && (
        <li>
          <a className="toc-grup" href="#informasi">
            Informasi seleksi
          </a>
          <ol className="toc-anak">
            {isi.info.map((b) => (
              <li key={b.id}>
                <a href={`#${b.id}`}>{b.label}</a>
              </li>
            ))}
          </ol>
        </li>
      )}
      {isi.adaSumber && (
        <li>
          <a className="toc-grup" href="#sumber">
            Sumber
          </a>
        </li>
      )}
    </ol>
  );
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

  const angka = angkaAngkatan(angkatan);
  const ubin: Ubin[] = [
    { label: 'Tahapan', nilai: String(angkatan.tahapan.length) },
    { label: 'Subtes', nilai: String(angka.subtes) },
    ubinJumlah('Soal ujian', String(angka.soal), angka.subtes - angka.tanpaSoal, angka.subtes),
    ubinJumlah(
      'Durasi', `${angkaId(angka.menit)} mnt`, angka.subtes - angka.tanpaMenit, angka.subtes,
    ),
    { label: 'Contoh soal', nilai: angka.contoh ? String(angka.contoh) : '—' },
  ];

  const info = angkatan.info ?? [];
  const sumber = angkatan.sumber ?? [];
  const statusSemua = [angkatan.status, ...angkatan.tahapan.map((t) => t.status)];

  // Daftar isi hanya menaut ke bagian yang memang tampil: tahapan, tiap Informasi
  // seleksi, dan Sumber (kalau ada).
  const isi: IsiDaftar = {
    tahapan: angkatan.tahapan.map((t) => ({ id: idTahapan(t), label: labelTahapan(angkatan, t) })),
    info: info.map((i, k) => ({ id: idInfo(k + 1, i.judul), label: i.judul })),
    adaSumber: sumber.length > 0,
  };
  const adaDaftarIsi = isi.tahapan.length > 0 || isi.info.length > 0 || isi.adaSumber;
  // LegendaStatus sendiri diam kalau semuanya terkonfirmasi.
  const adaLegenda = statusSemua.some((s) => s !== 'terkonfirmasi');
  // Kolom samping hanya ada kalau ada isinya: daftar isi atau legenda.
  const adaSamping = adaDaftarIsi || adaLegenda;
  const label = LABEL_STATUS[angkatan.status];

  const meta = [
    String(angkatan.tahun),
    angkatan.pic && `PIC ${angkatan.pic}`,
    angkatan.diperbarui && `diperbarui ${angkatan.diperbarui}`,
  ]
    .filter(Boolean)
    .join(' · ');

  return (
    <>
      <Remah
        jejak={[
          { teks: 'Platform', ke: '/' },
          { teks: platform.nama, ke: tautanPlatform(platform) },
          { teks: judulAngkatan(tes, angkatan) },
        ]}
      />

      <section className="ang-kepala">
        <div className="ang-kepala-teks">
          {tes.kategori && <span className="lencana lencana-aksen lencana-besar">{tes.kategori}</span>}
          <div className="ang-judul">
            <h1>{judulAngkatan(tes, angkatan)}</h1>
            <Status nilai={angkatan.status} />
          </div>
          <p className="ang-meta">{meta}</p>
          {angkatan.ringkasan && <p className="ang-ringkasan">{angkatan.ringkasan}</p>}
        </div>
        <div className="ang-aksi">
          <Cetak />
          {/* Hanya bila ada subtes yang punya soal untuk dikerjakan; selainnya rutenya tak ada. */}
          {angkatanBisaSimulasi(angkatan) && (
            <a className="aksi aksi-utama tanpa-cetak" href={tautanSimulasiAngkatan(jalur)}>
              <Ikon nama="putar" ukuran={16} />
              Mulai simulasi
            </a>
          )}
        </div>
      </section>

      <div className="ubin-baris ang-ubin">
        {ubin.map((u) => (
          <div key={u.label} className="ubin">
            <div className="ubin-label">{u.label}</div>
            <div className="ubin-nilai">{u.nilai}</div>
            {u.catatan && <div className="ubin-catatan">{u.catatan}</div>}
          </div>
        ))}
      </div>

      {/* Isi `arti` dan `boleh` apa adanya dari LABEL_STATUS: itulah yang
          memisahkan fakta dari rekonstruksi, dan yang menentukan boleh
          tidaknya disampaikan ke peserta. */}
      {angkatan.status !== 'terkonfirmasi' && (
        <div
          className={`banner ${angkatan.status === 'indikasi' ? 'banner-kuning' : 'banner-abu'}`}
          role="note"
        >
          <Ikon nama="info" />
          <span>
            <b>{label.teks}:</b> {label.arti} {label.boleh}
          </span>
        </div>
      )}

      {/* Daftar isi untuk layar sempit, tempat kolom samping jatuh ke bawah
          halaman. Di layar lebar blok ini disembunyikan CSS (display: none) dan
          daftar isi yang sama tampil di kolom samping, lengket di sisi kanan. */}
      {adaDaftarIsi && (
        <details className="toc-atas tanpa-cetak">
          <summary>Daftar isi</summary>
          <nav aria-label="Daftar isi">
            <DaftarIsi isi={isi} />
          </nav>
        </details>
      )}

      <div className={`ang-tata${adaSamping ? '' : ' ang-tata-tunggal'}`}>
        <div className="ang-utama">
          <div className="bagian-kepala" id="tahapan">
            <h2>Tahapan seleksi</h2>
          </div>
          {/*
            Seleksi itu proses berurutan, jadi digambar berurutan: lingkaran
            bernomor dengan garis penghubung, satu kartu per tahapan.

            Tahapan tanpa subtes tetap punya kartu, hanya isinya ringkas
            (deskripsi dan keterangan belum ada subtes) dan lingkarannya
            diredupkan. Tak ada kartu yang menyala penuh tapi kosong.
          */}
          {angkatan.tahapan.length === 0 ? (
            <Kosong teks="Belum ada tahapan" sebab="Angkatan ini belum punya tahapan yang datanya ditulis." />
          ) : (
            <ol className="lini">
              {angkatan.tahapan.map((tahapan) => {
                const adaSubtes = tahapan.subtes.length > 0;
                const adaSimulasi = tahapan.subtes.some(subtesBisaSimulasi);
                const chip = kodeChipTahapan(tahapan.subtes.map((s) => s.nama));
                return (
                  <li key={tahapan.kode} className={`lini-butir${adaSubtes ? '' : ' lini-kosong'}`}>
                    <div className="lini-jalur" aria-hidden>
                      <div className="lini-nomor">{nomorTahapan(angkatan, tahapan)}</div>
                      <div className="lini-garis" />
                    </div>
                    <div className="lini-kartu" id={idTahapan(tahapan)}>
                      <div className="lini-kepala">
                        <h3>{tahapan.nama}</h3>
                        <Status nilai={tahapan.status} />
                        {tahapan.mode && (
                          <span className="lencana lencana-abu lencana-mode">{tahapan.mode}</span>
                        )}
                        {adaSubtes && (
                          <span className="lini-ringkas">
                            {ringkasAngka(angkaTahapan(tahapan))}
                          </span>
                        )}
                      </div>
                      {tahapan.deskripsi && (
                        <p className="pra lini-deskripsi">{tahapan.deskripsi}</p>
                      )}

                      {adaSubtes ? (
                        <TabelGulir kelas="tabel-subtes">
                          <table>
                            <thead>
                              <tr>
                                <th>Subtes</th>
                                <th>Soal</th>
                                <th>Waktu</th>
                                <th>Contoh soal</th>
                                {adaSimulasi && (
                                  <th className="tanpa-cetak">
                                    <span className="sr-saja">Simulasi</span>
                                  </th>
                                )}
                                <th>
                                  <span className="sr-saja">Buka</span>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {tahapan.subtes.map((subtes, k) => {
                                const n = jumlahContoh(subtes);
                                const tautan = tautanSubtes({ ...jalur, tahapan, subtes });
                                return (
                                  <tr key={subtes.kode}>
                                    <td className="sub-sel">
                                      <a className="sub-tautan" href={tautan}>
                                        <span className="chip-kode" title={subtes.nama}>
                                          {chip[k]}
                                        </span>
                                        <b>{subtes.nama}</b>
                                      </a>
                                    </td>
                                    <td>{subtes.jumlahSoal ?? '—'}</td>
                                    {/* Tahapan satu sesi: waktu milik sesi, bukan subtes
                                        ini; angkanya ada di ringkasan tahapan. */}
                                    <td className={tahapan.waktuBersama ? 'waktu-bersama' : undefined}>
                                      {tahapan.waktuBersama
                                        ? 'Satu sesi'
                                        : subtes.waktuMenit === undefined
                                          ? '—'
                                          : `${angkaId(subtes.waktuMenit)} mnt`}
                                    </td>
                                    <td className={n ? 'contoh-ada' : 'contoh-belum'}>
                                      {n ? `${n} soal` : 'Belum ada'}
                                    </td>
                                    {adaSimulasi && (
                                      <td className="sub-sim tanpa-cetak">
                                        {subtesBisaSimulasi(subtes) && (
                                          <a
                                            href={tautanSimulasiSubtes({ ...jalur, tahapan, subtes })}
                                            aria-label={`Simulasi ${subtes.nama}`}
                                          >
                                            Simulasi
                                          </a>
                                        )}
                                      </td>
                                    )}
                                    <td className="sub-panah">
                                      {/* Panah ikut bisa diketuk, tapi tak jadi
                                          perhentian fokus kedua untuk subtes yang sama. */}
                                      <a href={tautan} tabIndex={-1} aria-hidden>
                                        <Ikon nama="kanan" />
                                      </a>
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </TabelGulir>
                      ) : (
                        <p className="lini-belum">Belum ada subtes</p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>
          )}

          {/* Informasi seleksi tampil penuh di bawah tahapan, bukan dilipat di kolom
              samping: isinya panjang (persyaratan belasan poin, jadwal belasan baris)
              dan di kolom sempit sulit dibaca. Tiap judul punya jangkar (idInfo) yang
              dituju daftar isi. Isinya lewat uraikan(), seperti penilaian di halaman
              subtes, jadi boleh memuat rumus LaTeX (\( … \)) dan gambar; baris baru
              dan butir "- " tetap terbaca karena .pra memakai pre-wrap. */}
          {info.length > 0 && (
            <section className="ang-bagian" id="informasi">
              <div className="bagian-kepala">
                <h2>Informasi seleksi</h2>
              </div>
              {info.map((i, k) => (
                <div key={`${k}-${i.judul}`} className="info-kartu" id={idInfo(k + 1, i.judul)}>
                  <div className="info-kepala">
                    <h3>{i.judul}</h3>
                    <span className="lencana lencana-abu">{i.tipe}</span>
                  </div>
                  <p className="pra info-isi">
                    <IsiKaya bagian={uraikan(i.isi)} />
                  </p>
                </div>
              ))}
            </section>
          )}

          {/* Di dalam kolom utama, bukan di bawah kedua kolom: daftar isi yang
              lengket tetap menyertai pembaca sampai bagian paling akhir. */}
          {sumber.length > 0 && (
            <section className="ang-bagian sumber" id="sumber">
              <div className="bagian-kepala">
                <h2>Sumber</h2>
              </div>
              <div className="sumber-kartu">
                <TabelGulir>
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
                      {sumber.map((s) => (
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
                </TabelGulir>
              </div>
            </section>
          )}
        </div>

        {adaSamping && (
          <aside
            className={`ang-samping${adaLegenda ? '' : ' ang-samping-hanya-toc'}`}
            aria-label="Informasi tambahan"
          >
            {adaDaftarIsi && (
              <nav className="ang-samping-kartu toc-samping tanpa-cetak" aria-label="Daftar isi">
                <div className="label-mini toc-judul">Daftar isi</div>
                <DaftarIsi isi={isi} />
              </nav>
            )}
            <LegendaStatus ada={statusSemua} />
          </aside>
        )}
      </div>
    </>
  );
}
