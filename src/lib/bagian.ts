import type { Soal } from './skema';

/**
 * Teks soal yang sudah diurai di server: potongan teks biasa, gambar, dan
 * rumus yang SUDAH dirender KaTeX menjadi HTML.
 *
 * Berkas ini hanya berisi tipe, supaya komponen klien bisa memakainya tanpa
 * ikut menarik KaTeX ke bundel browser.
 */
export type Bagian =
  | { jenis: 'teks'; isi: string }
  | { jenis: 'gambar'; src: string }
  | { jenis: 'rumus'; html: string; blok: boolean };

export type SoalSiap = Omit<Soal, 'pertanyaan' | 'opsi' | 'pembahasan'> & {
  pertanyaan: Bagian[];
  opsi?: { label: string; teks: Bagian[] }[];
  pembahasan: Bagian[];
};

export interface KelompokSiap {
  stimulus?: { judul?: string; isi?: Bagian[]; gambar?: string };
  soal: SoalSiap[];
}
