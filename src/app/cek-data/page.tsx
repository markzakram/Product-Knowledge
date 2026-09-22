import { PLATFORM, periksaIsi, semuaAngkatan, semuaSubtes, jumlahContoh } from '@/lib/data';

export default function CekData() {
  const temuan = periksaIsi();
  const perJenis = new Map<string, typeof temuan>();
  for (const t of temuan) {
    if (!perJenis.has(t.jenis)) perJenis.set(t.jenis, []);
    perJenis.get(t.jenis)!.push(t);
  }

  const subtes = semuaSubtes();
  const jumlah: [string, number][] = [
    ['Platform', PLATFORM.length],
    ['Tes', PLATFORM.reduce((n, p) => n + p.tes.length, 0)],
    ['Angkatan', semuaAngkatan().length],
    ['Tahapan', semuaAngkatan().reduce((n, j) => n + j.angkatan.tahapan.length, 0)],
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
        menunjuk opsi mana pun, pembahasan kosong, nomor soal ganda, dan angka
        mapping yang tidak konsisten.
      </p>
      <div className="panel">
        <p style={{ margin: 0 }} className="kartu-kecil">
          Relasi putus dan salah ketik nama field tidak diperiksa di sini karena
          sudah mustahil: datanya bersarang dan bertipe, jadi kesalahan seperti
          itu menggagalkan build, bukan diam-diam menghilangkan baris.
        </p>
      </div>

      {temuan.length === 0 ? (
        <div className="panel">
          <p style={{ margin: 0 }}>
            <span className="lencana lencana-hijau">Bersih</span> Tidak ada kunci
            tak cocok, pembahasan kosong, nomor ganda, atau mapping janggal.
          </p>
        </div>
      ) : (
        <>
          <div className="panel panel-peringatan">
            <p style={{ margin: 0 }}>
              <b>{temuan.length} temuan</b> dalam {perJenis.size} jenis. Perbaiki
              di folder <code>data/</code>, lalu commit.
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
                          <a href={t.ke}>{t.lokasi}</a>
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
