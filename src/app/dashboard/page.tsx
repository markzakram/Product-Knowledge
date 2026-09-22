import {
  gapProduksi, mappingBelumDiisi, semuaAngkatan, labelTahapan,
  tautanAngkatan, tautanPlatform, tautanSubtes,
} from '@/lib/data';
import { Status, Kosong } from '../komponen';

export default function Dashboard() {
  const gap = gapProduksi();
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
        Rekap kekurangan soal per subtes, diurutkan dari yang paling besar.
        Dijumlahkan per subtes karena angka tersedia di sumbernya sering gabungan
        tryout dan latsol sekaligus; menghitung per baris membuat kekurangannya
        terbaca lebih kecil dari yang sebenarnya.
      </p>

      <dl className="spek">
        <div>
          <dt>Total kurang</dt>
          <dd className={totalKurang > 0 ? 'kurang-positif' : undefined}>{totalKurang}</dd>
        </div>
        <div>
          <dt>Subtes kurang</dt>
          <dd>{gap.length}</dd>
        </div>
        <div>
          <dt>Tersedia belum diisi</dt>
          <dd>{belumDiisi}</dd>
        </div>
      </dl>

      <h2>Kekurangan Soal</h2>
      {gap.length === 0 ? (
        <Kosong
          teks={
            belumDiisi > 0
              ? `Belum ada kekurangan yang bisa dihitung. ${belumDiisi} baris mapping belum diisi angka tersedia-nya.`
              : 'Tidak ada kekurangan soal. Semua target produksi sudah terpenuhi.'
          }
        />
      ) : (
        <div className="tabel-bungkus">
          <table>
            <thead>
              <tr>
                <th>Platform</th>
                <th>Subtes</th>
                <th>Jenis paket</th>
                <th className="angka">Dibutuhkan</th>
                <th className="angka">Tersedia</th>
                <th className="angka">Kurang</th>
                <th>PIC</th>
              </tr>
            </thead>
            <tbody>
              {gap.map((g) => (
                <tr key={tautanSubtes(g)}>
                  <td>
                    <a href={tautanPlatform(g.platform)}>{g.platform.nama}</a>
                    <div className="kartu-kecil">
                      {g.tes.nama} {g.angkatan.nama}
                    </div>
                  </td>
                  <td>
                    <a href={tautanSubtes(g)}>{g.subtes.nama}</a>
                    <div className="kartu-kecil">{labelTahapan(g.angkatan, g.tahapan)}</div>
                  </td>
                  <td>
                    {g.jenis}
                    {g.catatan && <div className="kartu-kecil">{g.catatan}</div>}
                  </td>
                  <td className="angka">{g.dibutuhkan}</td>
                  <td className="angka">{g.tersedia}</td>
                  <td className="angka kurang-positif">{g.kurang}</td>
                  <td>{g.pic || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <h2>Angkatan yang Datanya Belum Lengkap</h2>
      {belumLengkap.length === 0 ? (
        <Kosong teks="Semua tahapan di semua angkatan sudah berstatus terkonfirmasi." />
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
                      {x.tes.nama} {x.angkatan.nama}
                    </a>
                    <div className="kartu-kecil">
                      {x.belum.length} dari {x.angkatan.tahapan.length} tahapan
                    </div>
                  </td>
                  <td>
                    {x.belum.map((t) => (
                      <div key={t.kode} style={{ marginBottom: 3 }}>
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
