import { notFound } from 'next/navigation';
import {
  cariSubtes, semuaSubtes, jumlahContoh, labelTahapan, tetanggaSubtes,
  tautanAngkatan, tautanPlatform, tautanSubtes,
} from '@/lib/data';
import { Remah, Status, Kosong, Waktu } from '../../../../../komponen';
import { DaftarSoal } from '../../../../../soal';

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
  // Bagian "Mapping Produksi Konten" sengaja tidak ditampilkan dulu.
  // Datanya tetap ada di data/ dan tetap dipakai halaman /dashboard;
  // yang dilepas hanya tampilannya di halaman subtes.
  const jalur = cariSubtes(p.platform, p.tes, p.angkatan, p.tahapan, p.subtes);
  if (!jalur) notFound();
  const { platform, tes, angkatan, tahapan, subtes } = jalur;
  const tetangga = tetanggaSubtes(jalur);


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

      <h2>Contoh Soal</h2>
      {(subtes.contoh ?? []).length === 0 ? (
        <Kosong teks="Belum ada contoh soal"
          sebab={subtes.catatan ?? "Contoh soal untuk subtes ini belum dimasukkan."}
        />
      ) : (
        <DaftarSoal contoh={subtes.contoh!} />
      )}

      {/* Navigasi menyamping. Orang meninjau subtes berurutan; tanpa ini tiap
          perpindahan berarti mundur dua kali lewat remah. */}
      <nav className="tetangga" aria-label="Subtes lain di angkatan ini">
        {tetangga.sebelum ? (
          <a className="tetangga-sisi" href={tautanSubtes(tetangga.sebelum)}>
            <span className="tetangga-arah">← Sebelumnya</span>
            <span className="tetangga-nama">{tetangga.sebelum.subtes.nama}</span>
            <span className="tetangga-tahap">
              {labelTahapan(angkatan, tetangga.sebelum.tahapan)}
            </span>
          </a>
        ) : (
          <span className="tetangga-sisi tetangga-mati">Subtes pertama</span>
        )}

        <span className="tetangga-hitung">
          {tetangga.ke} dari {tetangga.dari}
        </span>

        {tetangga.sesudah ? (
          <a className="tetangga-sisi tetangga-kanan" href={tautanSubtes(tetangga.sesudah)}>
            <span className="tetangga-arah">Berikutnya →</span>
            <span className="tetangga-nama">{tetangga.sesudah.subtes.nama}</span>
            <span className="tetangga-tahap">
              {labelTahapan(angkatan, tetangga.sesudah.tahapan)}
            </span>
          </a>
        ) : (
          <span className="tetangga-sisi tetangga-kanan tetangga-mati">Subtes terakhir</span>
        )}
      </nav>
    </>
  );
}
