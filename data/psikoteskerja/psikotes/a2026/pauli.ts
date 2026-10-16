import type { Kelompok, Subtes } from '@/lib/skema';

/**
 * Tes Pauli (Tes Koran): penjumlahan berpasangan turun dari kiri atas, aba-aba "Garis".
 *
 * Dibuat dari draft prototipe "Prototype Tes Pauli.html" (folder Draft Prototype, diubah
 * 20 Agustus 2026): cara pengerjaan, preset rancangan asli (2 halaman x 40 kolom x 50 angka,
 * 60 menit, garis tiap 3 menit), dan empat aspek penilaian. Contoh lajur angka: nomor 1 dari
 * petunjuk prototipe, nomor 2 dibuat untuk ilustrasi (kunci dihitung dengan mod 10).
 * Skor gabungan berbobot di prototipe sengaja tidak dimasukkan: lihat catatan subtes.
 * Boleh disunting tangan.
 */
const contoh: Kelompok[] = [
  {
    soal: [
      {
        nomor: 1,
        tipe: 'isian_singkat',
        pertanyaan: `Lajur contoh dengan 2 angka (dibaca dari atas ke bawah):

7
8

Kerjakan dari angka paling atas ke bawah: jumlahkan dua angka yang berdekatan dan tulis hanya digit terakhir hasilnya. Tulis semua hasilnya berurutan.`,
        kunci: '5',
        pembahasan: `Hasil, berurutan dari angka paling atas ke bawah: 5.
1. 7 + 8 = 15 → tulis 5
Rumus: digit hasil = (angka atas + angka bawah) mod 10; angka 0 dipakai bila jumlahnya persis 10.
Contoh ini sama dengan contoh pada petunjuk "Cara pengerjaan" di prototipe (7 + 8 = 15, tulis 5).`,
        status: 'draft',
      },
      {
        nomor: 2,
        tipe: 'isian_singkat',
        pertanyaan: `Lajur contoh dengan 9 angka (dibaca dari atas ke bawah):

3
9
4
8
6
5
2
8
1

Kerjakan dari angka paling atas ke bawah: jumlahkan dua angka yang berdekatan dan tulis hanya digit terakhir hasilnya. Tulis semua hasilnya berurutan.`,
        kunci: '2 3 2 4 1 7 0 9',
        pembahasan: `Hasil, berurutan dari angka paling atas ke bawah: 2 3 2 4 1 7 0 9.
1. 3 + 9 = 12 → tulis 2
2. 9 + 4 = 13 → tulis 3
3. 4 + 8 = 12 → tulis 2
4. 8 + 6 = 14 → tulis 4
5. 6 + 5 = 11 → tulis 1
6. 5 + 2 = 7
7. 2 + 8 = 10 → tulis 0
8. 8 + 1 = 9
Rumus: digit hasil = (angka atas + angka bawah) mod 10; angka 0 dipakai bila jumlahnya persis 10.
Lajur ini dibuat untuk ilustrasi; lembar sesungguhnya berisi angka acak 1-9 dan puluhan kolom.`,
        status: 'draft',
      },
    ],
  },
];

export const pauli: Subtes = {
  kode: 'pauli',
  nama: 'Tes Pauli (Tes Koran)',
  waktuMenit: 60,
  bankSoal: false,
  formatKetentuan: `Lembar berisi kolom-kolom angka acak 1 sampai 9. Peserta menjumlahkan dua angka yang berdekatan secara vertikal, mulai dari pojok kiri atas sebuah kolom dan turun ke bawah, lalu menulis hanya digit terakhir hasil penjumlahan di kotak di antara kedua angka (7 + 8 = 15, tulis 5; digit hasil = (angka atas + angka bawah) mod 10). Setelah satu kolom selesai peserta lanjut ke kolom berikutnya, lalu ke halaman berikutnya.

Aba-aba: "Mulai", "Garis", dan "Stop". Tiap interval terdengar "Garis": sebuah garis ditandai pada posisi terakhir dan pengerjaan terus berlanjut (tidak pindah kolom). Garis-garis itu membagi hasil menjadi interval untuk kurva kerja.

Rancangan prototipe: 2 halaman, tiap halaman 40 kolom x 50 angka (49 penjumlahan per kolom, jadi 3.920 sel jawaban), 60 menit, garis tiap 3 menit (20 interval).

Tangkapan layar prototipe:
⟦gambar:gambar/psikoteskerja/pauli-awal.webp⟧
Layar awal: cara pengerjaan, pilihan "Kerjakan Sendiri" atau "Mode Simulasi", dan pengaturan lembar (preset rancangan asli: 2 halaman, 60 menit). Pilihan simulasi hanya ada di prototipe untuk pengujian.
⟦gambar:gambar/psikoteskerja/pauli-mengerjakan.webp⟧
Saat mengerjakan: pengerjaan turun dari kiri atas; hasil penjumlahan diketik di kotak di antara dua angka.`,
  penilaian: `Empat aspek yang sama dengan Tes Kraepelin, dihitung dari kurva kerja berupa jumlah jawaban benar per interval (garis).

Kecepatan = jumlah jawaban terisi / waktu pengerjaan (menit), dalam jawaban per menit.
- Rendah: sampai 13,07 · Cukup Rendah: 13,08-26,13 · Sedang: 26,14-39,20 · Cukup Tinggi: 39,21-52,27 · Tinggi: 52,28-65,33.
Ketelitian = jawaban benar / jawaban yang dikerjakan x 100%.
- Rendah: kurang dari 93,90% · Cukup Rendah: 93,90-95,25% · Sedang: 95,25-97,95% · Cukup Tinggi: 97,95-99,30% · Tinggi: 99,30% ke atas.
Stabilitas = Deviation Rate DR = X̄D / X̄ x 100%, dengan X̄ = rata-rata jawaban benar per interval dan X̄D = rata-rata selisih mutlak jawaban benar tiap interval terhadap X̄. Makin kecil makin stabil.
- Tinggi: DR sampai 5% · Cukup Tinggi: 5-7,5% · Sedang: 7,5-12,5% · Cukup Rendah: 12,5-15% · Rendah: di atas 15%.
Performa = m(n - 1) / X̄ x 100%, dengan m = gradien garis regresi Y = mX + c pada kurva kerja (jawaban benar per interval) dan n = jumlah interval.
- Cenderung Turun Drastis: sampai -20% · Cenderung Turun: -20% sampai -5% · Cenderung Mendatar: -5% sampai 5% · Cenderung Naik: 5% sampai 20% · Cenderung Naik Drastis: di atas 20%.

Hasilnya indikatif, bukan hasil klinis.

Tangkapan layar hasil di prototipe (diputar otomatis oleh sistem, hanya ilustrasi):
⟦gambar:gambar/psikoteskerja/pauli-hasil.webp⟧
Layar hasil: jumlah jawaban benar/salah/tidak dijawab, skor persen, dan kurva kerja (benar per interval dengan garis rata-rata).`,
  catatan: `Prototipe Pauli juga menampilkan "skor akhir gabungan" berbobot (35% ketelitian, 30% kecepatan, 20% stabilitas, 15% performa) dengan pita Istimewa sampai Perlu Ditingkatkan. Bobot dan pita itu tidak muncul di prototipe Kraepelin, yang menyatakan bahwa dokumen sumber tidak menetapkan skor gabungan. Perlakukan sebagai buatan prototipe, bukan ketentuan sumber; tangkapan layar hasil di atas sengaja dipotong agar tidak memperlihatkannya.

Jumlah halaman, kolom, angka per kolom, durasi, dan interval garis dapat diatur di prototipe; angka di atas adalah preset rancangan asli. Rumus dan ambang empat aspek sama dengan yang dipakai prototipe Kraepelin.`,
  materi: [
    { nama: 'Kecepatan', catatan: 'Jumlah jawaban terisi dibagi waktu pengerjaan, dalam jawaban per menit.' },
    { nama: 'Ketelitian', catatan: 'Jawaban benar dibagi jawaban yang dikerjakan, dalam persen.' },
    { nama: 'Stabilitas', catatan: 'Deviation Rate: seberapa jauh jawaban benar tiap interval menyimpang dari rata-ratanya.' },
    { nama: 'Performa', catatan: 'Tren kurva kerja (regresi linear): cenderung naik, mendatar, atau turun sepanjang tes.' },
  ],
  contoh,
};
