import type { Kelompok, Subtes } from '@/lib/skema';

/**
 * Tes Kraepelin (Tes Koran): penjumlahan berpasangan naik dari dasar kolom, aba-aba "Pindah".
 *
 * Dibuat dari draft prototipe PROTOTIPE-KRAEPELIN.html (folder Draft Prototype, diubah
 * 5 Oktober 2026): cara pengerjaan, preset rancangan aplikasi (45 kolom x 60 angka, 30 detik
 * per kolom), dan empat aspek penilaian beserta ambangnya. Contoh lajur angka: nomor 1 dari
 * petunjuk prototipe, nomor 2 dibuat untuk ilustrasi (kunci dihitung dengan mod 10).
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

Kerjakan dari angka paling bawah ke atas: jumlahkan dua angka yang berdekatan dan tulis hanya digit terakhir hasilnya. Tulis semua hasilnya berurutan.`,
        kunci: '5',
        pembahasan: `Hasil, berurutan dari angka paling bawah ke atas: 5.
1. 8 + 7 = 15 → tulis 5
Rumus: digit hasil = (angka atas + angka bawah) mod 10; angka 0 dipakai bila jumlahnya persis 10.
Contoh ini sama dengan contoh pada petunjuk "Cara pengerjaan" di prototipe (7 + 8 = 15, tulis 5).`,
        status: 'draft',
      },
      {
        nomor: 2,
        tipe: 'isian_singkat',
        pertanyaan: `Lajur contoh dengan 9 angka (dibaca dari atas ke bawah):

4
6
9
3
7
2
8
5
1

Kerjakan dari angka paling bawah ke atas: jumlahkan dua angka yang berdekatan dan tulis hanya digit terakhir hasilnya. Tulis semua hasilnya berurutan.`,
        kunci: '6 3 0 9 0 2 5 0',
        pembahasan: `Hasil, berurutan dari angka paling bawah ke atas: 6 3 0 9 0 2 5 0.
1. 1 + 5 = 6
2. 5 + 8 = 13 → tulis 3
3. 8 + 2 = 10 → tulis 0
4. 2 + 7 = 9
5. 7 + 3 = 10 → tulis 0
6. 3 + 9 = 12 → tulis 2
7. 9 + 6 = 15 → tulis 5
8. 6 + 4 = 10 → tulis 0
Rumus: digit hasil = (angka atas + angka bawah) mod 10; angka 0 dipakai bila jumlahnya persis 10.
Lajur ini dibuat untuk ilustrasi; lembar sesungguhnya berisi angka acak 1-9 dan puluhan kolom.`,
        status: 'draft',
      },
    ],
  },
];

export const kraepelin: Subtes = {
  kode: 'kraepelin',
  nama: 'Tes Kraepelin (Tes Koran)',
  waktuMenit: 22.5,
  bankSoal: false,
  formatKetentuan: `Lembar berisi kolom-kolom angka acak 1 sampai 9. Peserta menjumlahkan dua angka yang berdekatan secara vertikal, mulai dari pojok kiri bawah sebuah kolom dan naik ke atas, lalu menulis hanya digit terakhir hasil penjumlahan di kotak di antara kedua angka (7 + 8 = 15, tulis 5). Rumus: digit hasil = (angka atas + angka bawah) mod 10.

Aba-aba: "Mulai", "Pindah", dan "Berhenti". Tiap interval (rancangan: 30 detik per kolom) terdengar "Pindah": kolom yang sedang dikerjakan dikunci, selesai atau tidak, dan peserta berpindah ke dasar kolom berikutnya. Peserta yang selesai lebih dulu berhenti dan menunggu aba-aba. Sel yang terlewat dibiarkan kosong dan tidak dihitung salah.

Rancangan aplikasi (preset prototipe): 45 kolom x 60 angka, yaitu 59 penjumlahan per kolom atau 2.655 sel jawaban, 30 detik per kolom, total 22 menit 30 detik.

Tangkapan layar prototipe:
⟦gambar:gambar/psikoteskerja/kraepelin-awal.webp⟧
Layar awal: cara pengerjaan, pilihan "Kerjakan Sendiri" atau "Mode Simulasi", dan pengaturan lembar (preset rancangan aplikasi, 45 kolom x 60 angka, 22:30). Pilihan simulasi hanya ada di prototipe untuk pengujian.
⟦gambar:gambar/psikoteskerja/kraepelin-mengerjakan.webp⟧
Saat mengerjakan: pengerjaan naik dari dasar kolom (tanda "mulai"), hasil penjumlahan diketik di kotak di antara dua angka; terlihat sisa waktu, jumlah terjawab, dan kolom aktif.`,
  penilaian: `Hasilnya empat aspek yang berdiri sendiri (dokumen sumber tidak menetapkan skor gabungan tunggal), dihitung dari kurva kerja: jumlah jawaban benar per kolom (interval).

Kecepatan = jumlah jawaban terisi / waktu pengerjaan (menit), dalam jawaban per menit.
- Rendah: sampai 13,07 · Cukup Rendah: 13,08-26,13 · Sedang: 26,14-39,20 · Cukup Tinggi: 39,21-52,27 · Tinggi: 52,28-65,33.
Ketelitian = jawaban benar / jawaban yang dikerjakan x 100%.
- Rendah: kurang dari 93,90% · Cukup Rendah: 93,90-95,25% · Sedang: 95,25-97,95% · Cukup Tinggi: 97,95-99,30% · Tinggi: 99,30% ke atas.
Stabilitas = Deviation Rate DR = X̄D / X̄ x 100%, dengan X̄ = rata-rata jawaban benar per kolom dan X̄D = rata-rata selisih mutlak jawaban benar tiap kolom terhadap X̄. Makin kecil makin stabil.
- Tinggi: DR sampai 5% · Cukup Tinggi: 5-7,5% · Sedang: 7,5-12,5% · Cukup Rendah: 12,5-15% · Rendah: di atas 15%.
Performa = m(n - 1) / X̄ x 100%, dengan m = gradien garis regresi Y = mX + c pada kurva kerja (jawaban benar per kolom) dan n = jumlah kolom.
- Cenderung Turun Drastis: sampai -20% · Cenderung Turun: -20% sampai -5% · Cenderung Mendatar: -5% sampai 5% · Cenderung Naik: 5% sampai 20% · Cenderung Naik Drastis: di atas 20%.

Rumus dan seluruh angka ambang di atas diambil prototipe dari bab Rancangan Aplikasi dokumen sumber. Batas atas tabel Kecepatan, Stabilitas, dan Performa bersifat "sampai dengan", sedangkan tabel Ketelitian memakai "kurang dari". Hasilnya indikatif, bukan hasil klinis.

Tangkapan layar hasil di prototipe (diputar otomatis oleh sistem, hanya ilustrasi):
⟦gambar:gambar/psikoteskerja/kraepelin-hasil.webp⟧
Layar hasil: jumlah jawaban benar/salah/tidak dijawab, grafik performa (benar per kolom dengan garis rata-rata), dan empat aspek penilaian.`,
  catatan: `Dokumen sumber menulis rumus ketelitian sebagai "100% - (jumlah soal benar / jumlah soal dikerjakan x 100%)". Tandanya keliru: yang dimaksud adalah 100% dikurangi persentase salah, yang nilainya sama dengan benar / dikerjakan. Baris terakhir tabel kecepatan di sumber memuat keterangan milik baris "Rendah" (salah salin); prototipe memakai kalimat dari panduan skoring Pauli. Prototipe juga menampilkan kalimat umpan balik per kategori (dari sumber), tidak disalin di sini.

Lembar sesungguhnya berisi puluhan kolom angka acak; jumlah kolom, angka per kolom, dan interval dapat diatur di prototipe. Angka 45 x 60 x 30 detik di atas adalah preset rancangan aplikasi.`,
  materi: [
    { nama: 'Kecepatan', catatan: 'Jumlah jawaban terisi dibagi waktu pengerjaan, dalam jawaban per menit.' },
    { nama: 'Ketelitian', catatan: 'Jawaban benar dibagi jawaban yang dikerjakan, dalam persen.' },
    { nama: 'Stabilitas', catatan: 'Deviation Rate: seberapa jauh jawaban benar tiap kolom menyimpang dari rata-ratanya.' },
    { nama: 'Performa', catatan: 'Tren kurva kerja (regresi linear): cenderung naik, mendatar, atau turun sepanjang tes.' },
  ],
  contoh,
};
