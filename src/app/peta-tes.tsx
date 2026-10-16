'use client';

import { useId, useState } from 'react';
import type { StatusData } from '@/lib/skema';
import { Ikon, Kosong, Status } from './komponen';

/**
 * Kartu satu tes di halaman platform ("peta tes"): identitas tes di kiri,
 * susunan tahapan dan subtes di kanan.
 *
 * Tes yang punya lebih dari satu angkatan (CPNS 2026 dan 2027, PCAM 9 dan 10)
 * mendapat pemilih angkatan, dan panel kanan berganti mengikuti pilihannya.
 * Tes dengan satu angkatan tidak perlu pemilih.
 *
 * Semua angka dihitung di server (halaman platform) lalu dikirim sebagai props
 * berupa data polos. Komponen ini sengaja tidak mengimpor `@/lib/data`: modul
 * itu menarik seluruh isi `data/` ke bundel klien hanya untuk menjumlahkan
 * angka yang sudah bisa dijumlahkan di server.
 */

export interface PetaSubtes {
  nama: string;
  /** Kode chip; sudah melewati aturan bentrok dan panjang (`kodeChipTahapan`). */
  chip: string;
  /** "30 soal · 30 mnt"; kosong bila soal dan waktunya tak ada. */
  meta: string;
}

export interface PetaTahapan {
  kode: string;
  nomor: number;
  nama: string;
  status: StatusData;
  /** "4 subtes · 90 soal · 90 menit"; kosong bila tahapan tak punya subtes. */
  ringkas: string;
  /** Subtes yang ditampilkan (paling banyak enam). */
  subtes: PetaSubtes[];
  /** Jumlah subtes yang tak ikut tampil; tautan "+N subtes lainnya" menuju `tautan`. */
  sisa: number;
  tautan: string;
  /** Kartu memenuhi lebar grid, bukan setengahnya. */
  penuh: boolean;
}

export interface PetaAngkatan {
  kode: string;
  nama: string;
  status: StatusData;
  /** Halaman angkatan. */
  tautan: string;
  /** "UTBK-SNBT Tahun 2027": nama yang dibuka tombol utama. */
  judul: string;
  /** "160 soal · 195 menit · 141 contoh soal"; kosong bila angkatan tak punya subtes. */
  total: string;
  tahapan: PetaTahapan[];
}

export interface PetaTesProps {
  nama: string;
  kategori?: string;
  instansi?: string;
  deskripsi?: string;
  /** Terbaru lebih dulu. Boleh kosong: tes yang belum punya angkatan. */
  angkatan: PetaAngkatan[];
  /** Kode angkatan yang terbuka pertama kali. */
  awal?: string;
}

function KartuTahapan({ t, statusAngkatan }: { t: PetaTahapan; statusAngkatan: StatusData }) {
  // Tahapan tanpa subtes jadi satu baris ringkas. Banyak tahapan akhir seleksi
  // (kesehatan, wawancara) memang belum punya subtes; memberinya kartu penuh
  // hanya membuat yang berisi tenggelam di antara kartu kosong.
  if (t.subtes.length === 0) {
    return (
      <div className="peta-tahap peta-tahap-kosong peta-tahap-penuh">
        <span className="peta-tahap-no">Tahap {t.nomor}</span>
        <span className="peta-tahap-nama">{t.nama}</span>
        <Status nilai={t.status} />
        <span className="peta-belum">Belum ada subtes</span>
      </div>
    );
  }

  return (
    <section className={`peta-tahap${t.penuh ? ' peta-tahap-penuh' : ''}`}>
      <div className="peta-tahap-kepala">
        <span className="peta-tahap-no">Tahap {t.nomor}</span>
        {/* Status tahapan ikut tampil bila berbeda dari status angkatannya. Ia
            menentukan apa yang boleh disampaikan ke peserta: Tahap 3 yang masih
            indikasi di angkatan yang terkonfirmasi tak boleh terbaca pasti. Bila
            sama, lencana angkatan di pemilih sudah cukup. */}
        {t.status !== statusAngkatan && <Status nilai={t.status} />}
      </div>
      <h4 className="peta-tahap-nama">{t.nama}</h4>
      <div className="peta-tahap-ringkas">{t.ringkas}</div>
      <ul className="peta-sub-daftar">
        {t.subtes.map((s, i) => (
          <li key={i} className="peta-sub">
            <span className="chip-kode" title={s.nama}>
              {s.chip}
            </span>
            <span className="peta-sub-nama">{s.nama}</span>
            {s.meta && <span className="peta-sub-meta">{s.meta}</span>}
          </li>
        ))}
      </ul>
      {t.sisa > 0 && (
        <a className="peta-sisa" href={t.tautan}>
          +{t.sisa} subtes lainnya
        </a>
      )}
    </section>
  );
}

export function PetaTes({ nama, kategori, instansi, deskripsi, angkatan, awal }: PetaTesProps) {
  const [dipilih, setDipilih] = useState(awal);
  const idPanel = useId();
  const aktif: PetaAngkatan | undefined = angkatan.find((a) => a.kode === dipilih) ?? angkatan[0];
  const banyak = angkatan.length > 1;

  // Urutan di DOM mengikuti urutan di layar lebar (identitas, angkatan, tombol,
  // lalu panel) supaya urutan fokus papan ketik masuk akal. Di ponsel panel
  // dipindah ke atas tombol lewat grid-template-areas, bukan lewat DOM.
  return (
    <article className="peta">
      <div className="peta-info">
        {kategori && <span className="lencana lencana-aksen lencana-besar">{kategori}</span>}
        <div>
          <h3>{nama}</h3>
          {instansi && <div className="peta-instansi">{instansi}</div>}
        </div>
        {deskripsi && <p className="peta-deskripsi">{deskripsi}</p>}
      </div>

      {aktif && (
        <>
          <div className="peta-tahun">
            <div className="label-mini">Angkatan</div>
            {banyak ? (
              <div className="peta-tab-baris" role="group" aria-label={`Angkatan ${nama}`}>
                {angkatan.map((a) => (
                  <button
                    key={a.kode}
                    type="button"
                    className="peta-tab"
                    aria-pressed={a.kode === aktif.kode}
                    aria-controls={idPanel}
                    onClick={() => setDipilih(a.kode)}
                  >
                    {a.nama}
                    <Status nilai={a.status} />
                  </button>
                ))}
              </div>
            ) : (
              <div className="peta-tab-baris">
                <span className="peta-tab peta-tab-tunggal">
                  {aktif.nama}
                  <Status nilai={aktif.status} />
                </span>
              </div>
            )}
          </div>

          <div className="peta-aksi tanpa-cetak">
            <a className="aksi aksi-utama" href={aktif.tautan}>
              Buka {aktif.judul}
              <Ikon nama="panah" />
            </a>
          </div>
        </>
      )}

      <div className="peta-panel" id={idPanel}>
        {aktif ? (
          <>
            <div className="peta-panel-kepala">
              {/* Hanya judul ini yang diumumkan pembaca layar saat angkatan
                  berganti; membacakan seluruh panel akan terlalu bising. */}
              <span className="label-mini" aria-live={banyak ? 'polite' : undefined}>
                Susunan tes {aktif.nama}
              </span>
              {aktif.total && <span className="peta-total">{aktif.total}</span>}
            </div>
            {aktif.tahapan.length === 0 ? (
              <Kosong
                teks="Belum ada tahapan"
                sebab="Angkatan ini belum punya tahapan yang datanya ditulis."
              />
            ) : (
              <div className="peta-tahap-petak">
                {aktif.tahapan.map((t) => (
                  <KartuTahapan key={t.kode} t={t} statusAngkatan={aktif.status} />
                ))}
              </div>
            )}
          </>
        ) : (
          <Kosong
            teks="Belum ada angkatan"
            sebab="Tes ini belum punya angkatan yang datanya ditulis."
          />
        )}
      </div>
    </article>
  );
}
