import {
  PLATFORM, SEMUA_PLATFORM, periksaIsi, semuaAngkatan, semuaSubtes, jumlahContoh, tautanPlatform,
} from '@/lib/data';
import { periksaRumus } from '@/lib/isi-kaya';
import { periksaPembaruan } from '@/lib/pembaruan';
import pkg from '../../../package.json';

export default function CekData() {
  const temuan = [...periksaIsi(), ...periksaRumus(), ...periksaPembaruan(pkg.version)];
  const perJenis = new Map<string, typeof temuan>();
  for (const t of temuan) {
    if (!perJenis.has(t.jenis)) perJenis.set(t.jenis, []);
    perJenis.get(t.jenis)!.push(t);
  }

  // Cek Data dipakai penyusun isi, jadi SEMUA platform dihitung di sini, termasuk yang
  // disembunyikan dari pembaca (`tampil: false`). Pemeriksanya (periksaIsi dan
  // periksaRumus) juga memeriksa semuanya.
  const angkatan = semuaAngkatan(SEMUA_PLATFORM);
  const subtes = semuaSubtes(SEMUA_PLATFORM);
  // Halaman platform yang disembunyikan 404, jadi temuannya diberi penanda dan tidak ditautkan.
  const awalanTersembunyi = SEMUA_PLATFORM.filter((p) => p.tampil === false).map(tautanPlatform);
  const tersembunyi = (ke: string) =>
    awalanTersembunyi.some((awal) => ke === awal || ke.startsWith(`${awal}/`) || ke.startsWith(`${awal}#`));
  const jumlah: [string, number][] = [
    ['Platform', SEMUA_PLATFORM.length],
    ['Platform tersembunyi', SEMUA_PLATFORM.length - PLATFORM.length],
    ['Tes', SEMUA_PLATFORM.reduce((n, p) => n + p.tes.length, 0)],
    ['Angkatan', angkatan.length],
    ['Tahapan', angkatan.reduce((n, j) => n + j.angkatan.tahapan.length, 0)],
    ['Subtes', subtes.length],
    ['Materi', subtes.reduce((n, j) => n + (j.subtes.materi ?? []).length, 0)],
    ['Baris mapping', subtes.reduce((n, j) => n + (j.subtes.mapping ?? []).length, 0)],
    ['Kelompok soal', subtes.reduce((n, j) => n + (j.subtes.contoh ?? []).length, 0)],
    ['Contoh soal', subtes.reduce((n, j) => n + jumlahContoh(j.subtes), 0)],
  ];

  return (
    <>
      <h1>Cek Data</h1>
      <p className="pengantar">
        Memeriksa hal yang tidak bisa ditangkap compiler: kunci yang tidak
        menunjuk opsi mana pun, pembahasan kosong, nomor soal ganda, angka
        mapping yang tidak konsisten, rumus LaTeX yang gagal diurai, dan versi
        aplikasi di package.json yang tidak sama dengan catatan pembaruan.
      </p>
      <div className="panel">
        <p style={{ margin: 0 }} className="kartu-kecil">
          Relasi putus dan salah ketik nama field tidak diperiksa di sini karena
          sudah mustahil: datanya bersarang dan bertipe, jadi kesalahan seperti
          itu menggagalkan build, bukan diam-diam menghilangkan baris.
        </p>
        <p style={{ margin: '8px 0 0' }} className="kartu-kecil">
          Semua platform ikut diperiksa dan dihitung di sini, termasuk yang
          disembunyikan dari pembaca (<code>tampil: false</code>). Halaman
          platform itu 404, jadi temuannya diberi penanda dan tidak bertaut.
        </p>
      </div>

      {temuan.length === 0 ? (
        <div className="panel">
          <p style={{ margin: 0 }}>
            <span className="lencana lencana-hijau">Bersih</span> Tidak ada kunci
            tak cocok, pembahasan kosong, nomor ganda, mapping janggal, rumus
            tidak valid, atau versi yang tak cocok dengan catatan pembaruan.
          </p>
        </div>
      ) : (
        <>
          <div className="panel panel-peringatan">
            <p style={{ margin: 0 }}>
              <b>{temuan.length} temuan</b> dalam {perJenis.size} jenis. Perbaiki
              di folder <code>data/</code> (untuk versi: <code>package.json</code>{' '}
              dan <code>src/lib/pembaruan.ts</code>), lalu commit.
            </p>
          </div>
          {[...perJenis.entries()].map(([jenis, daftar]) => (
            <section key={jenis}>
              <h2>
                {jenis} <span className="lencana lencana-merah">{daftar.length}</span>
              </h2>
              <div className="tabel-bungkus">
                <table>
                  <thead>
                    <tr>
                      <th>Lokasi</th>
                      <th>Masalah</th>
                    </tr>
                  </thead>
                  <tbody>
                    {daftar.map((t, i) => (
                      <tr key={i}>
                        <td>
                          {tersembunyi(t.ke) ? (
                            <>
                              {t.lokasi} <span className="lencana lencana-abu">tersembunyi</span>
                            </>
                          ) : (
                            <a href={t.ke}>{t.lokasi}</a>
                          )}
                        </td>
                        <td>{t.pesan}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}
        </>
      )}

      <h2>Jumlah Isi</h2>
      <div className="tabel-bungkus">
        <table>
          <thead>
            <tr>
              <th>Jenis</th>
              <th className="angka">Jumlah</th>
            </tr>
          </thead>
          <tbody>
            {jumlah.map(([nama, n]) => (
              <tr key={nama}>
                <td>{nama}</td>
                <td className="angka">{n}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
