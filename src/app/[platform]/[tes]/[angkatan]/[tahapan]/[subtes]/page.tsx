import { notFound } from 'next/navigation';
import {
  cariSubtes, semuaSubtes, jumlahContoh, judulAngkatan, labelTahapan, tetanggaSubtes,
  angkaTahapan, durasiTahapan, kodeChipTahapan, metaSubtesIndeks, angkaId, tautanAngkatan, tautanPlatform, tautanSubtes,
} from '@/lib/data';
import { Remah, Status, Kosong, Waktu, Ikon } from '../../../../../komponen';
import { siapkanKelompok, uraikan } from '@/lib/isi-kaya';
import { IsiKaya } from '../../../../../isi-kaya';
import { DaftarSoal } from '../../../../../soal';
import { IndeksSoal } from '../../../../../indeks-soal';
import { bangunIndeks } from '@/lib/indeks-soal';
// Gaya dan fon rumus KaTeX. Rumusnya sendiri dirender di server.
import 'katex/dist/katex.min.css';

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
  const kelompok = siapkanKelompok(subtes.contoh ?? []);
  // Index soal: kosong bila soal terlalu sedikit atau category kurang dari dua.
  const indeks = bangunIndeks(kelompok);
  const daftarSubtes = tahapan.subtes.map((s) => ({
    nama: s.nama,
    jumlah: jumlahContoh(s),
    meta: metaSubtesIndeks(s, tahapan),
    href: tautanSubtes({ ...jalur, subtes: s }),
    aktif: s === subtes,
  }));
  const adaSamping = indeks.length > 0 || daftarSubtes.length > 1;
  // Waktu yang berlaku untuk subtes ini: miliknya sendiri, atau waktu sesi bersama.
  const sesi = tahapan.waktuBersama ? durasiTahapan(tahapan) : null;
  const waktuSesi = sesi && sesi.tanpaMenit === 0 ? sesi.menit : undefined;
  // Tahapan satu sesi: "satu sesi 100 menit bersama TIU dan TKP (110 soal)"; kode chip
  // subtes lain, atau "N subtes lain" bila kodenya angka. Total soal sesi hanya bila ada.
  let sesiTeks = '';
  if (waktuSesi !== undefined) {
    const chip = kodeChipTahapan(tahapan.subtes.map((s) => s.nama));
    const lain = tahapan.subtes.flatMap((s, k) => (s === subtes ? [] : [chip[k]]));
    const angkaSesi = angkaTahapan(tahapan);
    const daftar =
      lain.length === 0
        ? ''
        : /^\d+$/.test(lain[0])
          ? ` bersama ${lain.length} subtes lain`
          : ` bersama ${lain.length > 1 ? `${lain.slice(0, -1).join(', ')} dan ${lain[lain.length - 1]}` : lain[0]}`;
    const total =
      lain.length > 0 && angkaSesi.subtes > angkaSesi.tanpaSoal
        ? ` (${angkaSesi.soal}${angkaSesi.tanpaSoal ? '+' : ''} soal)`
        : '';
    sesiTeks = `satu sesi ${angkaId(waktuSesi)} menit${daftar}${total}`;
  }
  const ringkasan = [
    subtes.jumlahSoal === undefined ? '' : `${subtes.jumlahSoal} soal`,
    tahapan.waktuBersama
      ? sesiTeks
      : subtes.waktuMenit === undefined
        ? ''
        : `${angkaId(subtes.waktuMenit)} menit`,
  ]
    .filter(Boolean)
    .join(' · ');

  return (
    <>
      <Remah
        jejak={[
          { teks: 'Platform', ke: '/' },
          { teks: platform.nama, ke: tautanPlatform(platform) },
          { teks: judulAngkatan(tes, angkatan), ke: tautanAngkatan(jalur) },
          { teks: labelTahapan(angkatan, tahapan) },
          { teks: subtes.nama },
        ]}
      />
      <div className={`subtes-tata${adaSamping ? '' : ' subtes-tata-tunggal'}`}>
        <div className="subtes-utama">
          <h1>{subtes.nama}</h1>
          <p style={{ margin: '2px 0 10px' }}>
            <Status nilai={tahapan.status} />
            <span className="kartu-kecil"> · {labelTahapan(angkatan, tahapan)}</span>
          </p>
          <p className="kartu-kecil" style={{ margin: '0 0 10px' }}>
            {ringkasan || 'Jumlah soal dan waktu belum diketahui'}
          </p>

          <dl className="spek">
            <div>
              <dt>Jumlah soal</dt>
              {subtes.jumlahSoal === undefined ? (
                <dd className="belum-tahu">belum diketahui</dd>
              ) : (
                <dd>{subtes.jumlahSoal}</dd>
              )}
            </div>
            <div>
              <dt>Waktu</dt>
              {waktuSesi !== undefined ? (
                <dd>
                  {angkaId(waktuSesi)} menit, satu sesi
                </dd>
              ) : subtes.waktuMenit !== undefined ? (
                <dd>
                  <Waktu menit={subtes.waktuMenit} />
                </dd>
              ) : (
                <dd className="belum-tahu">belum diketahui</dd>
              )}
            </div>
            <div>
              <dt>Contoh soal</dt>
              <dd>{jumlahContoh(subtes) || '—'}</dd>
            </div>
          </dl>

          {subtes.formatKetentuan && (
            <div className="panel">
              <div className="stimulus-label">Format dan ketentuan</div>
              {/* Lewat uraikan(): boleh memuat gambar (mis. tangkapan layar bentuk tes). */}
              <p className="pra" style={{ marginTop: 4 }}>
                <IsiKaya bagian={uraikan(subtes.formatKetentuan)} />
              </p>
            </div>
          )}
          {subtes.penilaian && (
            <div className="panel">
              <div className="stimulus-label">Penilaian</div>
              <p className="pra" style={{ marginTop: 4 }}>
                <IsiKaya bagian={uraikan(subtes.penilaian)} />
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

          <div className="kepala-contoh">
            <h2>Contoh Soal</h2>
        </div>
        {/* Layar sempit: kolom samping dibuang CSS, index pindah ke blok lipat ini. */}
        {indeks.length > 0 && <IndeksSoal varian="atas" subtes={daftarSubtes} isi={indeks} />}
        {(subtes.contoh ?? []).length === 0 ? (
          <Kosong teks="Belum ada contoh soal"
            sebab={subtes.catatan ?? "Contoh soal untuk subtes ini belum dimasukkan."}
          />
        ) : (
          <DaftarSoal contoh={kelompok} />
        )}
        </div>

        {adaSamping && <IndeksSoal varian="samping" subtes={daftarSubtes} isi={indeks} />}
      </div>

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
