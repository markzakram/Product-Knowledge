/**
 * Index soal: pohon category > lesson dari label `lesson` tiap soal.
 *
 * Berkas ini murni (tanpa impor data, KaTeX, atau fs), jadi aman dipakai server,
 * pemeriksa isi, dan komponen klien. Halaman subtes membangun pohonnya di server
 * lalu mengirim hasilnya sebagai props polos.
 */

/** Bentuk minimal yang dibutuhkan; cocok untuk Kelompok mentah maupun KelompokSiap. */
export interface KelompokIndeks {
  stimulus?: { judul?: string; isi?: unknown[]; gambar?: string };
  soal: { nomor: number; lesson?: string }[];
}

export interface ItemIndeks {
  nama: string;
  jumlah: number;
  /** Id elemen tujuan lompat, tanpa "#". */
  ke: string;
}

export interface KategoriIndeks extends ItemIndeks {
  lesson: ItemIndeks[];
}

/** Minimal soal dan category agar index berguna; di bawahnya halaman tak diubah. */
export const MIN_SOAL_INDEKS = 10;
export const MIN_KATEGORI_INDEKS = 2;
export const NAMA_LAINNYA = 'Lainnya';

/** Kelompok hanya dibungkus .kelompok (dan bisa jadi tujuan lompat) bila punya stimulus tampil. */
export function adaStimulus(k: Pick<KelompokIndeks, 'stimulus'>): boolean {
  const s = k.stimulus;
  return !!s && !!(s.isi?.length || s.gambar || s.judul);
}

/** Memecah "Category > Lesson > ..." menjadi segmen yang sudah dirapikan (kosong tetap kosong). */
export function segmenLesson(lesson: string): string[] {
  return lesson.split('>').map((s) => s.trim());
}

/**
 * Pohon index, atau [] bila subtes tak layak diberi index (kurang dari 10 soal,
 * kurang dari 2 category, atau tak ada soal yang berlabel).
 *
 * Hanya dua tingkat: segmen ketiga dan seterusnya digabung ke lesson. Urutan
 * mengikuti kemunculan pertama di data. Soal tanpa label di subtes yang sebagian
 * berlabel masuk "Lainnya".
 */
export function bangunIndeks(kelompok: KelompokIndeks[]): KategoriIndeks[] {
  let total = 0;
  let berlabel = 0;
  for (const k of kelompok) {
    for (const s of k.soal) {
      total++;
      if (s.lesson?.trim()) berlabel++;
    }
  }
  if (total < MIN_SOAL_INDEKS || berlabel === 0) return [];

  const pohon: KategoriIndeks[] = [];
  const perNama = new Map<string, KategoriIndeks>();

  kelompok.forEach((k, indeks) => {
    const bungkus = adaStimulus(k);
    k.soal.forEach((s, urut) => {
      const segmen = segmenLesson(s.lesson ?? '').filter(Boolean);
      const kategori = segmen[0] ?? NAMA_LAINNYA;
      const lesson = segmen[1];
      // Judul dan stimulus ikut terlihat bila soal pertama kelompok yang dituju.
      const ke = bungkus && urut === 0 ? `kelompok-${indeks}` : `soal-${s.nomor}`;

      let kat = perNama.get(kategori);
      if (!kat) {
        kat = { nama: kategori, jumlah: 0, ke, lesson: [] };
        perNama.set(kategori, kat);
        pohon.push(kat);
      }
      kat.jumlah++;

      if (lesson) {
        let les = kat.lesson.find((l) => l.nama === lesson);
        if (!les) {
          les = { nama: lesson, jumlah: 0, ke };
          kat.lesson.push(les);
        }
        les.jumlah++;
      }
    });
  });

  return pohon.length >= MIN_KATEGORI_INDEKS ? pohon : [];
}
