import type { Tes } from '@/lib/skema';
import { psikotes as psikotesKerja } from '../../psikoteskerja/psikotes';

/**
 * Kumpulan Psikotes di JadiBUMN.
 *
 * Isinya sama dengan Psikotes Kerja (EPPS, Deskripsi Diri, Ketelitian, Pauli, Baum, DAP,
 * Wartegg), karena materi psikotes untuk seleksi BUMN memang sama. Tes dan angkatannya
 * DIIMPOR dari data/psikoteskerja/psikotes, bukan disalin, jadi perubahan di sana ikut
 * terbaca di sini. Gambar tetap di public/gambar/psikoteskerja/.
 *
 * Tiap subtes dan soal adalah objek yang sama dengan milik Psikotes Kerja. Itu disengaja
 * dan sudah ditangani pemeriksa (Cek Data memeriksanya sekali, Kelengkapan menghitungnya
 * per platform).
 */
export const psikotes: Tes = { ...psikotesKerja };
