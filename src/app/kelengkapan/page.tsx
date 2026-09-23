import {
  kelengkapan, labelTahapan, tautanAngkatan, tautanPlatform, tautanSubtes,
  type CelahSubtes,
} from '@/lib/data';
import { Status, Kosong, LegendaStatus } from '../komponen';

/**
 * Kelengkapan isi, sebagai daftar kerja.
 *
 * Sebelumnya kekosongan tersebar di puluhan halaman — "Belum ada contoh soal"
 * muncul di 45 dari 57 subtes, tapi tidak ada tempat yang mengumpulkannya.
 * Halaman ini mengubah rasa "masih kurang" jadi backlog yang bisa dibagi ke
 * tim: apa yang kosong, di mana, dan seberapa jauh tiap platform.
 */
function DaftarCelah({ judul, celah, catatan }: { judul: string; celah: CelahSubtes[]; catatan?: string }) {
  if (!celah.length) return null;
  return (
    <div className="celah">
      <div className="celah-kepala">
        <span className="label-mini" style={{ margin: 0 }}>{judul}</span>
        <span className="lencana lencana-abu">{celah.length}</span>
      </div>
      {catatan && <p className="kartu-kecil" style={{ margin: '2px 0 6px' }}>{catatan}</p>}
      <ul>
        {celah.map((c) => (
          <li key={tautanSubtes(c.jalur)}>
            <a href={tautanSubtes(c.jalur)}>{c.jalur.subtes.nama}</a>
            <span className="kartu-kecil">
              {' · '}
              {c.jalur.tes.nama} · {labelTahapan(c.jalur.angkatan, c.jalur.tahapan)}
            </span>
            {c.dipakaiDi > 1 && (
              <span className="lencana lencana-kuning" style={{ marginLeft: 6 }}>
                dipakai {c.dipakaiDi} tes
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function HalamanKelengkapan() {
  const k = kelengkapan();
  const persen = k.total.butuh ? Math.round((k.total.ada / k.total.butuh) * 100) : 0;

  return (
    <>
      <h1>Kelengkapan Isi</h1>
      <p className="pengantar">
        Apa yang masih kosong, di mana, dan seberapa jauh tiap platform. Subtes
        yang dipakai bersama beberapa tes dihitung sekali — mengisinya sekali
        sudah menyelesaikan semuanya.
      </p>

      <div className="lengkap-induk">
        <div className="lengkap-angka">
          <span className="angka-besar">{persen}%</span>
          <span className="kartu-kecil">
            {k.total.ada} dari {k.total.butuh} subtes sudah punya contoh soal
          </span>
        </div>
        <div className="bar-luar" role="img" aria-label={`${persen} persen subtes punya contoh soal`}>
          <div className="bar-dalam" style={{ width: `${persen}%` }} />
        </div>
      </div>

      <dl className="spek">
        <div>
          <dt>Tanpa contoh soal</dt>
          <dd className={k.total.tanpaContoh ? 'kurang-positif' : undefined}>{k.total.tanpaContoh}</dd>
        </div>
        <div>
          <dt>Tanpa materi</dt>
          <dd>{k.total.tanpaMateri}</dd>
        </div>
        <div>
          <dt>Tahapan belum pasti</dt>
          <dd>{k.total.tahapanTidakPasti}</dd>
        </div>
        <div>
          <dt>Platform kosong</dt>
          <dd>{k.kosong.length}</dd>
        </div>
      </dl>

      <h2>Per Platform</h2>
      {k.terisi.length === 0 ? (
        <Kosong teks="Belum ada platform terisi" sebab="Tambahkan data platform di folder data/." />
      ) : (
        k.terisi.map((h) => {
          const p = h.butuh ? Math.round((h.ada / h.butuh) * 100) : 100;
          const beres = !h.tanpaContoh.length && !h.tanpaMateri.length && !h.tahapanTidakPasti.length;
          return (
            <section key={h.platform.kode} className="lengkap-blok">
              <div className="lengkap-kepala">
                {h.platform.logo && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img className="logo" src={`/${h.platform.logo}`} alt="" aria-hidden />
                )}
                <a href={tautanPlatform(h.platform)} className="lengkap-nama">
                  {h.platform.nama}
                </a>
                <span className="kartu-kecil">
                  {h.ada}/{h.butuh} berisi contoh soal
                </span>
                <div className="bar-luar lengkap-bar" aria-hidden>
                  <div className={`bar-dalam${p < 50 ? ' kurang' : ''}`} style={{ width: `${p}%` }} />
                </div>
                <b className="lengkap-persen">{p}%</b>
              </div>

              {beres ? (
                <p className="kartu-kecil" style={{ marginTop: 10 }}>Tidak ada yang perlu dilengkapi.</p>
              ) : (
                <div className="celah-petak">
                  <DaftarCelah judul="Tanpa contoh soal" celah={h.tanpaContoh} />
                  <DaftarCelah judul="Tanpa rincian materi" celah={h.tanpaMateri} />
                  {h.tahapanTidakPasti.length > 0 && (
                    <div className="celah">
                      <div className="celah-kepala">
                        <span className="label-mini" style={{ margin: 0 }}>Tahapan belum pasti</span>
                        <span className="lencana lencana-abu">{h.tahapanTidakPasti.length}</span>
                      </div>
                      <ul>
                        {h.tahapanTidakPasti.map(({ jalur, tahapan }) => (
                          <li key={`${tautanAngkatan(jalur)}-${tahapan.kode}`}>
                            <a href={tautanAngkatan(jalur)}>{tahapan.nama}</a>{' '}
                            <Status nilai={tahapan.status} />
                            <span className="kartu-kecil"> · {jalur.tes.nama}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {h.tanpaBankSoal.length > 0 && (
                <p className="kartu-kecil lengkap-kecuali">
                  Tidak dihitung, karena memang tidak punya butir soal:{' '}
                  {h.tanpaBankSoal.map((c) => c.jalur.subtes.nama).join(', ')}.
                </p>
              )}
            </section>
          );
        })
      )}

      {k.kosong.length > 0 && (
        <>
          <h2>Platform Belum Ada Data</h2>
          <p className="kartu-kecil">
            Butuh dokumen kurikulum sebelum strukturnya bisa ditulis.
          </p>
          <div className="chip-baris">
            {k.kosong.map((p) => (
              <span key={p.kode} className="chip">
                {p.logo && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img className="logo logo-mini" src={`/${p.logo}`} alt="" aria-hidden />
                )}
                {p.nama}
              </span>
            ))}
          </div>
        </>
      )}

      <LegendaStatus
        ada={k.terisi.flatMap((h) => h.tahapanTidakPasti.map((t) => t.tahapan.status))}
      />
    </>
  );
}
