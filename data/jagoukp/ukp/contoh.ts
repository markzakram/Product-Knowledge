import type { Kelompok } from '@/lib/skema';

/**
 * Contoh soal UKP, per materi, dipakai bersama oleh tiga angkatan.
 *
 * Asal: 56 soal orisinal tulisan tim UKP Generator (data/ukp-kasus), BUKAN salinan
 * bank LatihUKP. Soal yang teksnya mirip bank LatihUKP tidak dibawa.
 *
 * Status 'draft': tarif dan parameter hitungan belum dicek ke peraturan terbaru,
 * jadi belum boleh disampaikan sebagai kepastian sebelum ditelaah.
 *
 * `tingkat` tiap soal adalah tingkat EFEKTIF: yang lebih tinggi antara label soal
 * dan tingkat subtemanya menurut Cakupan Materi BPPK. Soal tampil di angkatan bila
 * tingkat efektifnya tidak lebih tinggi dari tingkat angkatan.
 */
export type TingkatUkp = 'A' | 'B' | 'C';

interface ContohUkp {
  tingkat: TingkatUkp;
  kelompok: Kelompok;
}

const URUT: Record<TingkatUkp, number> = { A: 0, B: 1, C: 2 };

/** Contoh soal untuk satu materi di angkatan itu, dinomori ulang dari 1. */
export function contohUkp(kode: string, tingkat: TingkatUkp): Kelompok[] {
  return (CONTOH[kode] ?? [])
    .filter((c) => URUT[c.tingkat] <= URUT[tingkat])
    .map((c, i) => ({ ...c.kelompok, soal: c.kelompok.soal.map((s) => ({ ...s, nomor: i + 1 })) }));
}

const CONTOH: Record<string, ContohUkp[]> = {
  KUP: [
    {
      tingkat: 'A',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'Pembayaran & pelaporan',
            tipe: 'pg',
            pertanyaan: `PT Mitra Selaras memakai tahun buku 1 Juli sampai dengan 30 Juni. Untuk tahun buku yang berakhir 30 Juni 2026, PT Mitra Selaras tidak mengajukan perpanjangan. Batas akhir penyampaian SPT Tahunan PPh Badan untuk tahun buku tersebut adalah ...`,
            opsi: [
              { label: 'A', teks: `31 Oktober 2026` },
              { label: 'B', teks: `30 April 2027` },
              { label: 'C', teks: `30 September 2026` },
              { label: 'D', teks: `31 Desember 2026` },
            ],
            kunci: 'A',
            pembahasan: `Jawaban: A. 31 Oktober 2026
Pembahasan:
1. Batas SPT Tahunan badan: paling lama 4 bulan setelah akhir Tahun Pajak (UU KUP Pasal 3 ayat (3) huruf c).
2. Tahun Pajak mengikuti tahun buku (UU KUP Pasal 1 angka 8): akhir Tahun Pajak 30 Juni 2026.
3. 30 Juni 2026 + 4 bulan = 31 Oktober 2026.
SPT Tahunan PPh badan disampaikan paling lama 4 bulan setelah akhir Tahun Pajak; bila tahun buku tidak sama dengan tahun kalender, akhir Tahun Pajak adalah akhir tahun buku, sehingga batasnya 31 Oktober 2026.
Kenapa pilihan lain salah:
- B: 30 April berlaku bila tahun buku sama dengan tahun kalender; batas dihitung dari akhir tahun buku.
- C: 3 bulan adalah batas SPT Tahunan orang pribadi, bukan badan.
- D: Perpanjangan 2 bulan tidak otomatis; harus diberitahukan dengan penghitungan sementara, dan PT Mitra Selaras tidak mengajukannya.
Dasar hukum: UU KUP Pasal 1 angka 8 dan Pasal 3 ayat (3) huruf c, ayat (4); PMK 81/2024 Pasal 169 dan Pasal 170`,
            tingkat: 'mudah',
            status: 'draft',
          },
        ],
      },
    },
    {
      tingkat: 'A',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'NPWP, PKP & pembukuan',
            tipe: 'pg',
            pertanyaan: `PT Sumber Rejeki menyelenggarakan pembukuan secara elektronik. Buku, catatan, dan dokumen yang menjadi dasar pembukuan, termasuk hasil pengolahan data elektronik, wajib disimpan ...`,
            opsi: [
              { label: 'A', teks: `Selama 5 tahun, mengikuti jangka waktu daluwarsa penetapan pajak` },
              { label: 'B', teks: `Selama 2 tahun sejak SPT Tahunan yang bersangkutan disampaikan` },
              { label: 'C', teks: `Selama 10 tahun, boleh di luar negeri bila server ada di kantor pusat` },
              { label: 'D', teks: `Selama 10 tahun di Indonesia, di tempat kegiatan atau tempat tinggal Wajib Pajak` },
            ],
            kunci: 'D',
            pembahasan: `Jawaban: D. Selama 10 tahun di Indonesia, di tempat kegiatan atau tempat tinggal Wajib Pajak
Pembahasan:
1. Wajib Pajak badan wajib menyelenggarakan pembukuan di Indonesia (UU KUP Pasal 28 ayat (1)).
2. Dokumen dasar pembukuan, termasuk data elektronik, disimpan 10 tahun di Indonesia di tempat kegiatan atau tempat tinggal (ayat (11)).
3. Jangka 10 tahun itu tidak sama dengan daluwarsa penetapan 5 tahun.
Buku, catatan, dan dokumen dasar pembukuan, termasuk hasil pengolahan data elektronik, wajib disimpan selama 10 tahun di Indonesia (UU KUP Pasal 28 ayat (11)).
Kenapa pilihan lain salah:
- A: Daluwarsa penetapan 5 tahun berbeda dengan kewajiban simpan dokumen 10 tahun (UU KUP Pasal 28 ayat (11)).
- B: Tidak ada jangka simpan 2 tahun; kewajibannya 10 tahun.
- C: Dokumen wajib disimpan di Indonesia.
Dasar hukum: UU KUP Pasal 28 ayat (1) dan ayat (11) (UU 28/2007)`,
            tingkat: 'mudah',
            status: 'draft',
          },
        ],
      },
    },
    {
      tingkat: 'A',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'Penagihan & daluwarsa',
            tipe: 'pg',
            pertanyaan: `Surat Paksa atas utang pajak PT Jaya Kencana diberitahukan pada 4 Mei 2026. Bila utang pajak belum juga dilunasi, Surat Perintah Melaksanakan Penyitaan dapat diterbitkan setelah lewat ...`,
            opsi: [
              { label: 'A', teks: `2 × 24 jam sejak Surat Paksa diberitahukan` },
              { label: 'B', teks: `21 hari sejak Surat Paksa diberitahukan` },
              { label: 'C', teks: `7 hari sejak Surat Paksa diberitahukan` },
              { label: 'D', teks: `14 hari sejak Surat Paksa diberitahukan` },
            ],
            kunci: 'A',
            pembahasan: `Jawaban: A. 2 × 24 jam sejak Surat Paksa diberitahukan
Pembahasan:
1. Surat Teguran terbit setelah lewat 7 hari sejak jatuh tempo; Surat Paksa setelah lewat 21 hari sejak Surat Teguran.
2. Setelah Surat Paksa diberitahukan, penanggung pajak diberi waktu 2 × 24 jam untuk melunasi.
3. Lewat 2 × 24 jam tanpa pelunasan → Surat Perintah Melaksanakan Penyitaan dapat diterbitkan.
Penyitaan dilaksanakan bila utang pajak tidak dilunasi dalam 2 × 24 jam sejak Surat Paksa diberitahukan; urutannya Teguran (+7 hari) → Surat Paksa (+21 hari) → sita (+2 × 24 jam) → pengumuman lelang (+14 hari) → lelang (+14 hari).
Kenapa pilihan lain salah:
- B: 21 hari adalah jeda Surat Teguran ke Surat Paksa.
- C: 7 hari adalah jeda jatuh tempo ke Surat Teguran.
- D: 14 hari adalah jeda penyitaan ke pengumuman lelang, dan pengumuman ke lelang.
Dasar hukum: UU 19/1997 s.t.d.d. UU 19/2000 (PPSP); PMK 61/2023 Pasal 6`,
            tingkat: 'sedang',
            status: 'draft',
          },
        ],
      },
    },
    {
      tingkat: 'A',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'Penagihan & daluwarsa',
            tipe: 'pg',
            pertanyaan: `SKPKB PPh Badan PT Mega Jaya terbit pada 10 Maret 2021. Karena tidak dilunasi, Surat Paksa diberitahukan kepada penanggung pajak pada 2 Februari 2022. Tidak ada pengakuan utang dan penyidikan. Hak melakukan penagihan atas SKPKB tersebut daluwarsa pada ...`,
            opsi: [
              { label: 'A', teks: `10 Maret 2026` },
              { label: 'B', teks: `2 Februari 2027` },
              { label: 'C', teks: `10 Maret 2031` },
              { label: 'D', teks: `2 Februari 2032` },
            ],
            kunci: 'B',
            pembahasan: `Jawaban: B. 2 Februari 2027
Pembahasan:
1. Hak penagihan daluwarsa 5 tahun sejak penerbitan SKPKB (UU KUP Pasal 22 ayat (1)).
2. Daluwarsa tertangguh bila diterbitkan Surat Paksa; dihitung sejak tanggal pemberitahuan Surat Paksa (Pasal 22 ayat (2) beserta Penjelasan).
3. 2 Februari 2022 + 5 tahun = 2 Februari 2027.
Daluwarsa penagihan 5 tahun sejak SKPKB terbit, tetapi tertangguh bila Surat Paksa diterbitkan: dihitung 5 tahun sejak tanggal pemberitahuan Surat Paksa, yaitu 2 Februari 2022 + 5 tahun = 2 Februari 2027.
Kenapa pilihan lain salah:
- A: Mengabaikan penangguhan: setelah Surat Paksa, daluwarsa dihitung 5 tahun sejak tanggal pemberitahuan Surat Paksa.
- C: Memakai 10 tahun; jangka 10 tahun hanya untuk utang tahun pajak 2007 ke bawah.
- D: Memakai 10 tahun sejak Surat Paksa; jangkanya tetap 5 tahun, hanya titik awalnya yang bergeser.
Dasar hukum: UU KUP Pasal 22 ayat (1) dan ayat (2) beserta Penjelasan (UU 28/2007); PMK 61/2023 Pasal 141 dan Pasal 142`,
            tingkat: 'sulit',
            status: 'draft',
          },
        ],
      },
    },
    {
      tingkat: 'A',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'Banding, gugatan & PK',
            tipe: 'pg',
            pertanyaan: `Atas SKPKB PPh Badan, PT Arta Guna melunasi Rp100.000.000 yang disetujuinya sebelum mengajukan keberatan. Keberatan ditolak, lalu perusahaan mengajukan banding. Putusan Banding menolak banding sehingga pajak terutang tetap Rp500.000.000. Denda Pasal 27 ayat (5d) UU KUP yang dikenakan adalah ...`,
            opsi: [
              { label: 'A', teks: `Rp400.000.000` },
              { label: 'B', teks: `Rp300.000.000` },
              { label: 'C', teks: `Rp240.000.000` },
              { label: 'D', teks: `Rp120.000.000` },
            ],
            kunci: 'C',
            pembahasan: `Jawaban: C. Rp240.000.000
Pembahasan:
1. Banding ditolak atau dikabulkan sebagian → denda 60% (UU KUP Pasal 27 ayat (5d)).
2. Dasar denda = Rp500.000.000 − Rp100.000.000 = Rp400.000.000.
3. Denda = 60% × Rp400.000.000 = Rp240.000.000; denda keberatan tidak dikenakan karena WP mengajukan banding.
Denda banding = 60% × (pajak menurut Putusan Banding − pajak yang dibayar sebelum keberatan) = 60% × (Rp500.000.000 − Rp100.000.000) = Rp240.000.000.
Kenapa pilihan lain salah:
- A: Memakai denda 100% sebelum UU HPP; sejak UU HPP dendanya 60%.
- B: Tidak mengurangkan pajak yang dibayar sebelum keberatan (60% × Rp500.000.000).
- D: Memakai denda keberatan 30%; atas Putusan Banding yang menolak, dendanya 60%.
Dasar hukum: UU KUP Pasal 27 ayat (5d) s.t.d.d. UU 7/2021 (HPP)`,
            tingkat: 'sedang',
            status: 'draft',
          },
        ],
      },
    },
    {
      tingkat: 'A',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'Surat ketetapan & STP',
            tipe: 'pg',
            pertanyaan: `PT Laut Biru melaporkan SPT Tahunan PPh Badan lebih bayar Rp90.000.000. Hasil pemeriksaan menunjukkan PPh terutang Rp410.000.000 dan kredit pajak Rp455.000.000. Ketetapan yang diterbitkan adalah ...`,
            opsi: [
              { label: 'A', teks: `SKPKB sebesar Rp45.000.000 karena lebih bayar berkurang` },
              { label: 'B', teks: `SKPN karena lebih bayar menurut SPT tidak disetujui seluruhnya` },
              { label: 'C', teks: `SKPLB sebesar Rp90.000.000 sesuai SPT` },
              { label: 'D', teks: `SKPLB sebesar Rp45.000.000` },
            ],
            kunci: 'D',
            pembahasan: `Jawaban: D. SKPLB sebesar Rp45.000.000
Pembahasan:
1. Kredit pajak > pajak terutang → SKPLB; sama → SKPN; kredit < terutang → SKPKB.
2. Menurut pemeriksaan: Rp455.000.000 − Rp410.000.000 = lebih bayar Rp45.000.000.
3. Lebih bayar menurut SPT Rp90.000.000 berkurang, tetapi ketetapannya tetap SKPLB Rp45.000.000.
Kredit pajak Rp455.000.000 lebih besar daripada pajak terutang Rp410.000.000, sehingga diterbitkan SKPLB sebesar kelebihan menurut pemeriksaan, Rp45.000.000 (UU KUP Pasal 17 ayat (1)).
Kenapa pilihan lain salah:
- A: Koreksi yang hanya mengurangi lebih bayar tetap menghasilkan SKPLB, bukan SKPKB.
- B: SKPN hanya bila pajak terutang sama dengan kredit pajak.
- C: SKPLB diterbitkan sebesar kelebihan menurut pemeriksaan.
Dasar hukum: UU KUP Pasal 13 ayat (1), Pasal 17 ayat (1), dan Pasal 17A ayat (1)`,
            tingkat: 'sedang',
            status: 'draft',
          },
        ],
      },
    },
    {
      tingkat: 'A',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'Pemeriksaan, restitusi & pidana',
            tipe: 'pg',
            pertanyaan: `Permohonan pengembalian kelebihan pembayaran pajak PT Sinar Pagi (bukan Wajib Pajak kriteria tertentu atau persyaratan tertentu) diterima lengkap pada 3 Maret 2025. Sampai 3 Maret 2026 DJP belum menerbitkan surat ketetapan pajak, dan tidak ada pemeriksaan bukti permulaan. Akibatnya ...`,
            opsi: [
              { label: 'A', teks: `Permohonan dianggap dikabulkan; SKPLB wajib terbit paling lambat 3 April 2026` },
              { label: 'B', teks: `Permohonan dianggap ditolak; perusahaan dapat mengajukan keberatan` },
              { label: 'C', teks: `Jangka waktu pemeriksaan diperpanjang 6 bulan secara otomatis` },
              { label: 'D', teks: `Permohonan dianggap dikabulkan; SKPLB wajib terbit paling lambat 3 Maret 2027` },
            ],
            kunci: 'A',
            pembahasan: `Jawaban: A. Permohonan dianggap dikabulkan; SKPLB wajib terbit paling lambat 3 April 2026
Pembahasan:
1. Pemeriksaan atas permohonan restitusi diselesaikan dengan SKP paling lama 12 bulan sejak permohonan lengkap (Pasal 17B ayat (1)).
2. Lewat 12 bulan tanpa keputusan → permohonan dianggap dikabulkan; SKPLB terbit paling lama 1 bulan kemudian (ayat (2)).
3. 3 Maret 2026 + 1 bulan = 3 April 2026; bila SKPLB terlambat, WP berhak atas imbalan bunga.
SKP atas permohonan restitusi wajib terbit paling lama 12 bulan sejak permohonan diterima lengkap; bila lewat, permohonan dianggap dikabulkan dan SKPLB diterbitkan paling lama 1 bulan kemudian, yaitu 3 April 2026 (UU KUP Pasal 17B ayat (1) dan (2)).
Kenapa pilihan lain salah:
- B: Lewat 12 bulan tanpa keputusan berarti permohonan dianggap dikabulkan (UU KUP Pasal 17B ayat (2)).
- C: UU KUP tidak memberi perpanjangan otomatis; permohonan dianggap dikabulkan.
- D: SKPLB diterbitkan paling lama 1 bulan setelah jangka 12 bulan berakhir.
Dasar hukum: UU KUP Pasal 17B ayat (1) dan ayat (2) s.t.d.t.d. UU 6/2023`,
            tingkat: 'sedang',
            status: 'draft',
          },
        ],
      },
    },
    {
      tingkat: 'C',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'Pembayaran & pelaporan',
            tipe: 'pg',
            pertanyaan: `PT Cahaya Persada terlambat menyampaikan tiga SPT untuk Masa Pajak Mei 2026: SPT Masa PPN, SPT Masa PPh Unifikasi, dan SPT Masa PPh Pasal 21/26. Ketiga SPT tidak diperpanjang dan tidak ada keadaan kahar. Jumlah denda Pasal 7 UU KUP yang ditagih atas keterlambatan tersebut adalah ...`,
            opsi: [
              { label: 'A', teks: `Rp700.000` },
              { label: 'B', teks: `Rp1.500.000` },
              { label: 'C', teks: `Rp300.000` },
              { label: 'D', teks: `Rp1.000.000` },
            ],
            kunci: 'A',
            pembahasan: `Jawaban: A. Rp700.000
Pembahasan:
1. SPT Masa PPN terlambat: denda Rp500.000.
2. SPT Masa PPh Unifikasi dan SPT Masa PPh 21/26 termasuk SPT Masa lainnya: masing-masing Rp100.000.
3. Jumlah = Rp700.000; denda tetap per SPT, tidak dihitung per hari atau per bulan.
Denda per SPT: Masa PPN Rp500.000, SPT Masa lainnya Rp100.000 masing-masing, sehingga Rp500.000 + Rp100.000 + Rp100.000 = Rp700.000.
Kenapa pilihan lain salah:
- B: Mengenakan Rp500.000 untuk semua SPT; Rp500.000 hanya untuk SPT Masa PPN.
- C: Mengenakan Rp100.000 untuk semua SPT; SPT Masa PPN didenda Rp500.000.
- D: Rp1.000.000 adalah denda SPT Tahunan PPh badan, bukan SPT Masa.
Dasar hukum: UU KUP Pasal 7 ayat (1); UU KUP Pasal 14 ayat (1) huruf c`,
            tingkat: 'sedang',
            status: 'draft',
          },
        ],
      },
    },
  ],
  OP: [
    {
      tingkat: 'A',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'PTKP, tarif & PPh terutang',
            tipe: 'pg',
            pertanyaan: `Tn. Fajar menjalankan usaha dengan pembukuan. Rugi fiskal Tahun Pajak 2021 Rp80.000.000. Penghasilan neto fiskal (sebelum kompensasi) Tahun Pajak 2022 Rp20.000.000, 2023 Rp15.000.000, 2024 Rp10.000.000, dan 2025 Rp30.000.000. Tidak ada kerugian tahun lain. Sisa kerugian 2021 yang masih dapat dikompensasikan dengan penghasilan Tahun Pajak 2026 adalah ...`,
            opsi: [
              { label: 'A', teks: `Rp5.000.000` },
              { label: 'B', teks: `Rp80.000.000` },
              { label: 'C', teks: `Rp0` },
              { label: 'D', teks: `Rp35.000.000` },
            ],
            kunci: 'A',
            pembahasan: `Jawaban: A. Rp5.000.000
Pembahasan:
1. Rugi 2021 dapat dikompensasikan mulai 2022 berturut-turut sampai 5 tahun, yaitu sampai 2026 (UU PPh Pasal 6 ayat (2)).
2. Laba tahun antara wajib dipakai: 2022 Rp20 juta, 2023 Rp15 juta, 2024 Rp10 juta, 2025 Rp30 juta = Rp75 juta.
3. Sisa = Rp80 juta − Rp75 juta = Rp5.000.000, masih dapat dipakai pada 2026 (tahun kelima).
Rugi 2021 dikompensasikan berturut-turut mulai 2022 sampai paling lama 2026: Rp80 juta − (20 + 15 + 10 + 30) juta = Rp5.000.000 masih tersisa untuk 2026.
Kenapa pilihan lain salah:
- B: Melewatkan laba tahun antara; kompensasi wajib dilakukan berturut-turut setiap tahun.
- C: Menganggap kerugian hangus; 2026 masih tahun kelima sejak 2022.
- D: Tidak memakai laba 2025 untuk kompensasi.
Dasar hukum: UU PPh Pasal 6 ayat (2) s.t.d.d. UU 36/2008`,
            tingkat: 'sedang',
            status: 'draft',
          },
        ],
      },
    },
    {
      tingkat: 'A',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'PPh final UMKM (peredaran bruto tertentu)',
            tipe: 'pg',
            pertanyaan: `Ny. Ratna, Wajib Pajak orang pribadi yang memenuhi syarat PPh final 0,5% pada 2026 berdasarkan peredaran bruto 2025, mencatat peredaran bruto kumulatif 2026 melewati Rp4,8 miliar pada Agustus 2026. Perlakuan PPh atas peredaran bruto September–Desember 2026 adalah ...`,
            opsi: [
              { label: 'A', teks: `Tetap PPh final 0,5% sampai akhir 2026; mulai 2027 dikenai tarif umum` },
              { label: 'B', teks: `Dikenai tarif umum Pasal 17 sejak September 2026` },
              { label: 'C', teks: `PPh final 0,5% hanya sampai omzet Rp4,8 miliar; kelebihannya dikenai tarif umum` },
              { label: 'D', teks: `Tetap PPh final 0,5% pada 2027 karena OP tidak dibatasi jangka waktu` },
            ],
            kunci: 'A',
            pembahasan: `Jawaban: A. Tetap PPh final 0,5% sampai akhir 2026; mulai 2027 dikenai tarif umum
Pembahasan:
1. Kelayakan 2026 diuji dari omzet 2025, dan Ny. Ratna memenuhi syarat.
2. Omzet 2026 melewati Rp4,8 miliar pada Agustus: PPh final 0,5% tetap berlaku sampai akhir 2026 (PP 55/2022 s.t.d.d. PP 20/2026).
3. Mulai 2027 dikenai tarif umum dan tidak dapat kembali ke PPh final.
Kelayakan PPh final diuji dari peredaran bruto tahun sebelumnya; bila omzet tahun berjalan melewati Rp4,8 miliar, WP tetap dikenai 0,5% sampai akhir tahun itu dan mulai tahun berikutnya dikenai tarif umum.
Kenapa pilihan lain salah:
- B: Tarif umum tidak langsung berlaku di bulan omzet melewati Rp4,8 miliar; perubahan berlaku tahun berikutnya.
- C: 0,5% tetap berlaku atas seluruh omzet tahun berjalan, termasuk bagian di atas Rp4,8 miliar.
- D: Tanpa batas jangka waktu tetap mensyaratkan omzet tahun sebelumnya tidak lebih dari Rp4,8 miliar; omzet 2026 sudah melewatinya.
Dasar hukum: PP 55/2022 Pasal 58 ayat (1) dan Pasal 61 s.t.d.d. PP 20/2026`,
            tingkat: 'sedang',
            status: 'draft',
          },
        ],
      },
    },
    {
      tingkat: 'A',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'Kredit pajak, PPh 25/29 & SPT Tahunan OP',
            tipe: 'pg',
            pertanyaan: `Menurut SPT Tahunan 2025, PPh terutang Sdr. Hendra (bukan OP pengusaha tertentu) Rp48.000.000. Kredit pajaknya: PPh 21 Rp6.000.000, PPh 23 Rp6.000.000, dan angsuran PPh 25 yang dibayar selama 2025 Rp24.000.000. Angsuran PPh Pasal 25 per bulan untuk 2026 setelah SPT disampaikan adalah ...`,
            opsi: [
              { label: 'A', teks: `Rp1.000.000` },
              { label: 'B', teks: `Rp4.000.000` },
              { label: 'C', teks: `Rp3.000.000` },
              { label: 'D', teks: `Rp3.500.000` },
            ],
            kunci: 'C',
            pembahasan: `Jawaban: C. Rp3.000.000
Pembahasan:
1. Dasar angsuran: PPh terutang SPT tahun lalu dikurangi PPh 21, 22, 23, dan 24 (UU PPh Pasal 25 ayat (1)).
2. PPh 25 yang dibayar tahun lalu tidak ikut dikurangkan.
3. (Rp48.000.000 − Rp6.000.000 − Rp6.000.000) ÷ 12 = Rp3.000.000.
Angsuran PPh 25 = (PPh terutang − PPh 21 − PPh 23) ÷ 12 = (Rp48.000.000 − Rp12.000.000) ÷ 12 = Rp3.000.000; PPh 25 tahun lalu tidak dikurangkan.
Kenapa pilihan lain salah:
- A: Ikut mengurangkan PPh 25 tahun lalu; rumus angsuran hanya mengurangkan PPh 21, 22, 23, dan 24.
- B: Tidak mengurangkan kredit PPh 21 dan PPh 23.
- D: Hanya mengurangkan PPh 21; PPh 23 juga dikurangkan.
Dasar hukum: UU PPh Pasal 25 ayat (1) s.t.d.d. UU 36/2008; PMK 81/2024 Pasal 226`,
            tingkat: 'sedang',
            status: 'draft',
          },
        ],
      },
    },
    {
      tingkat: 'A',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'Subjek pajak & kewajiban subjektif',
            tipe: 'pg',
            pertanyaan: `Mr. Lars, warga negara Swedia, tiba di Indonesia pada 1 Maret 2026 untuk bekerja di Jakarta dan kembali ke Swedia pada 30 September 2026 (214 hari). Ia tidak berniat menetap. Status subjek pajak Mr. Lars untuk Tahun Pajak 2026 adalah ...`,
            opsi: [
              { label: 'A', teks: `Subjek pajak luar negeri, karena ia warga negara asing` },
              { label: 'B', teks: `Subjek pajak luar negeri, karena tidak berada di Indonesia 12 bulan penuh` },
              { label: 'C', teks: `Subjek pajak dalam negeri, hanya bila ia sudah memiliki NPWP` },
              { label: 'D', teks: `Subjek pajak dalam negeri, karena lebih dari 183 hari dalam 12 bulan` },
            ],
            kunci: 'D',
            pembahasan: `Jawaban: D. Subjek pajak dalam negeri, karena lebih dari 183 hari dalam 12 bulan
Pembahasan:
1. Kriteria subjek pajak dalam negeri orang pribadi bersifat alternatif: bertempat tinggal, lebih dari 183 hari dalam 12 bulan, atau berniat bertempat tinggal (UU PPh Pasal 2 ayat (3) huruf a).
2. 1 Maret–30 September 2026 = 214 hari, lebih dari 183 hari.
3. Mr. Lars subjek pajak dalam negeri; gajinya dipotong PPh 21, bukan PPh 26.
Orang pribadi yang berada di Indonesia lebih dari 183 hari dalam jangka waktu 12 bulan adalah subjek pajak dalam negeri, tanpa melihat kewarganegaraan; 214 hari > 183 hari.
Kenapa pilihan lain salah:
- A: Kewarganegaraan tidak menentukan; yang diuji tempat tinggal, lebih dari 183 hari, atau niat.
- B: Ujinya lebih dari 183 hari dalam jangka waktu 12 bulan, bukan 12 bulan penuh.
- C: Status subjek pajak ditentukan fakta keberadaan, bukan NPWP.
Dasar hukum: UU PPh Pasal 2 ayat (3) huruf a s.t.d.d. UU 36/2008`,
            tingkat: 'mudah',
            status: 'draft',
          },
        ],
      },
    },
    {
      tingkat: 'A',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'Pemajakan penghasilan keluarga',
            tipe: 'pg',
            pertanyaan: `Ny. Rina menikah dengan Tn. Darma sejak 2020, tanpa perjanjian pisah harta dan tidak hidup berpisah. Pada 2026 Ny. Rina bekerja sebagai pegawai tetap pada satu pemberi kerja yang memotong PPh 21, dan juga mengelola butik sendiri. Perlakuan penghasilan Ny. Rina dalam SPT Tahunan 2026 adalah ...`,
            opsi: [
              { label: 'A', teks: `Gaji dan penghasilan butik seluruhnya digabung dengan Tn. Darma` },
              { label: 'B', teks: `Hanya penghasilan butik yang digabung; gajinya tidak digabung` },
              { label: 'C', teks: `Tidak digabung, karena gajinya sudah dipotong PPh Pasal 21` },
              { label: 'D', teks: `Dilaporkan sendiri oleh Ny. Rina karena ia menjalankan usaha` },
            ],
            kunci: 'A',
            pembahasan: `Jawaban: A. Gaji dan penghasilan butik seluruhnya digabung dengan Tn. Darma
Pembahasan:
1. Penghasilan istri pada dasarnya digabung dengan suami (UU PPh Pasal 8 ayat (1)).
2. Pengecualian: penghasilan semata-mata dari satu pemberi kerja yang telah dipotong PPh 21.
3. Ny. Rina juga punya butik → syarat "semata-mata" tidak terpenuhi → gaji dan butik digabung.
Penghasilan istri dianggap penghasilan suami, kecuali semata-mata diterima dari satu pemberi kerja yang telah dipotong PPh 21; karena Ny. Rina juga punya butik, seluruh penghasilannya, termasuk gaji, digabung dengan Tn. Darma (UU PPh Pasal 8 ayat (1)).
Kenapa pilihan lain salah:
- B: Pengecualian hanya bila penghasilan istri semata-mata dari satu pemberi kerja; karena ada butik, seluruhnya digabung.
- C: Pemotongan PPh 21 tidak cukup bila istri juga punya penghasilan lain.
- D: Pelaporan terpisah untuk hidup berpisah, pisah harta, atau istri yang memilih menjalankan hak dan kewajiban sendiri.
Dasar hukum: UU PPh Pasal 8 ayat (1) beserta Penjelasan s.t.d.t.d. UU 6/2023`,
            tingkat: 'sedang',
            status: 'draft',
          },
        ],
      },
    },
  ],
  PP: [
    {
      tingkat: 'A',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'Natura & kenikmatan',
            tipe: 'pg',
            pertanyaan: `Sepanjang 2026 PT Graha Mulia menyediakan apartemen bagi manajer pemasarannya (tempat tinggal individual) dengan nilai sewa Rp5.000.000 per bulan selama 12 bulan. Tidak ada natura lain. Nilai natura tempat tinggal yang menjadi objek PPh Pasal 21 manajer tersebut untuk Tahun 2026 adalah ...`,
            opsi: [
              { label: 'A', teks: `Rp60.000.000` },
              { label: 'B', teks: `Rp36.000.000` },
              { label: 'C', teks: `Rp24.000.000` },
              { label: 'D', teks: `Rp57.000.000` },
            ],
            kunci: 'B',
            pembahasan: `Jawaban: B. Rp36.000.000
Pembahasan:
1. Sejak UU HPP natura merupakan objek PPh penerima, kecuali yang dikecualikan (PMK 66/2023).
2. Tempat tinggal individual dikecualikan sampai Rp2.000.000 per bulan; kelebihannya objek.
3. (Rp5.000.000 − Rp2.000.000) × 12 bulan = Rp36.000.000.
Tempat tinggal individual dikecualikan sampai Rp2.000.000 per bulan; objek PPh 21 = (Rp5.000.000 − Rp2.000.000) × 12 = Rp36.000.000.
Kenapa pilihan lain salah:
- A: Seluruh nilai sewa dianggap objek; tempat tinggal individual dikecualikan sampai Rp2.000.000 per bulan.
- C: Itu bagian yang dikecualikan (Rp2.000.000 × 12), bukan yang menjadi objek.
- D: Memakai batas bingkisan Rp3.000.000 per tahun; untuk tempat tinggal individual batasnya Rp2.000.000 per bulan.
Dasar hukum: UU PPh Pasal 4 ayat (1) huruf a s.t.d.d. UU 7/2021 (HPP); PMK 66/2023 Lampiran huruf A`,
            tingkat: 'sedang',
            status: 'draft',
          },
        ],
      },
    },
    {
      tingkat: 'A',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'PPh 21: pemotong, penerima & objek',
            tipe: 'pg',
            pertanyaan: `Untuk Masa Pajak Maret 2026, Sdr. Bima (pegawai tetap) menerima gaji Rp12.000.000 dan tunjangan transportasi Rp1.500.000. Pemberi kerja juga membayar iuran JKK Rp29.000, JKM Rp36.000, BPJS Kesehatan bagian pemberi kerja Rp540.000, dan iuran JHT bagian pemberi kerja Rp444.000. Penghasilan bruto Sdr. Bima untuk penghitungan PPh Pasal 21 Masa Maret 2026 adalah ...`,
            opsi: [
              { label: 'A', teks: `Rp14.549.000` },
              { label: 'B', teks: `Rp13.500.000` },
              { label: 'C', teks: `Rp14.105.000` },
              { label: 'D', teks: `Rp13.565.000` },
            ],
            kunci: 'C',
            pembahasan: `Jawaban: C. Rp14.105.000
Pembahasan:
1. Bruto pegawai tetap mencakup gaji, tunjangan, serta iuran JKK, JKM, dan jaminan kesehatan yang dibayar pemberi kerja.
2. Iuran JHT dan JP bagian pemberi kerja tidak termasuk penghasilan bruto.
3. Rp12.000.000 + Rp1.500.000 + Rp29.000 + Rp36.000 + Rp540.000 = Rp14.105.000.
Bruto = gaji Rp12.000.000 + tunjangan Rp1.500.000 + JKK Rp29.000 + JKM Rp36.000 + BPJS Kesehatan pemberi kerja Rp540.000 = Rp14.105.000; iuran JHT bagian pemberi kerja tidak termasuk.
Kenapa pilihan lain salah:
- A: Ikut menambahkan iuran JHT bagian pemberi kerja; iuran itu tidak termasuk penghasilan bruto.
- B: Hanya gaji dan tunjangan; JKK, JKM, dan BPJS Kesehatan yang dibayar pemberi kerja termasuk bruto.
- D: Tidak memasukkan BPJS Kesehatan bagian pemberi kerja, padahal iuran jaminan kesehatan termasuk bruto.
Dasar hukum: PMK 168/2023 Pasal 5 ayat (2) dan ayat (3)`,
            tingkat: 'sedang',
            status: 'draft',
          },
        ],
      },
    },
    {
      tingkat: 'A',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'PPh 21 pegawai tetap',
            tipe: 'pg',
            pertanyaan: `Sdri. Laras mulai bekerja sebagai pegawai tetap pada 1 Juli 2026 dengan gaji Rp15.000.000 per bulan, tanpa penghasilan lain, dan sebelumnya tidak bekerja pada tahun itu. Biaya jabatan yang dapat dikurangkan dalam penghitungan PPh Pasal 21 Masa Pajak Terakhir (Desember 2026) adalah ...`,
            opsi: [
              { label: 'A', teks: `Rp4.500.000` },
              { label: 'B', teks: `Rp6.000.000` },
              { label: 'C', teks: `Rp1.200.000` },
              { label: 'D', teks: `Rp3.000.000` },
            ],
            kunci: 'D',
            pembahasan: `Jawaban: D. Rp3.000.000
Pembahasan:
1. Bruto Juli–Desember = Rp15.000.000 × 6 = Rp90.000.000; 5% = Rp4.500.000.
2. Batas biaya jabatan Rp500.000 per bulan bekerja: Rp500.000 × 6 = Rp3.000.000.
3. Yang dikurangkan adalah yang lebih kecil: Rp3.000.000.
Biaya jabatan = 5% × bruto, paling banyak Rp500.000 × jumlah bulan bekerja: min(5% × Rp90.000.000; Rp500.000 × 6) = min(Rp4.500.000; Rp3.000.000) = Rp3.000.000.
Kenapa pilihan lain salah:
- A: 5% × bruto tanpa batas; biaya jabatan paling banyak Rp500.000 per bulan bekerja.
- B: Memakai batas setahun penuh padahal ia hanya bekerja 6 bulan.
- C: Itu batas biaya pensiun Rp200.000 × 6 bulan, bukan biaya jabatan.
Dasar hukum: UU PPh Pasal 21 ayat (3) s.t.d.d. UU 36/2008; PMK 168/2023 Pasal 10`,
            tingkat: 'sulit',
            status: 'draft',
          },
        ],
      },
    },
    {
      tingkat: 'C',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'PPh Pasal 26 & BUT',
            tipe: 'pg',
            pertanyaan: `Kencana Holdings Ltd, Wajib Pajak luar negeri tanpa BUT di Indonesia, menjual seluruh sahamnya pada PT Tirta Utama (tidak tercatat di bursa) kepada PT Samudra Jaya dengan harga Rp4.000.000.000. Harga perolehan saham tersebut Rp2.500.000.000, dan menurut P3B yang berlaku hak pemajakan atas penghasilan ini ada pada Indonesia. PPh Pasal 26 yang wajib dipotong PT Samudra Jaya adalah ...`,
            opsi: [
              { label: 'A', teks: `Rp200.000.000` },
              { label: 'B', teks: `Rp800.000.000` },
              { label: 'C', teks: `Rp300.000.000` },
              { label: 'D', teks: `Rp4.000.000` },
            ],
            kunci: 'A',
            pembahasan: `Jawaban: A. Rp200.000.000
Pembahasan:
1. Perkiraan penghasilan neto = 25% × harga jual = Rp1.000.000.000.
2. PPh 26 = 20% × Rp1.000.000.000 = Rp200.000.000 (efektif 5% × harga jual), final.
3. Pemotongnya pembeli dalam negeri, PT Samudra Jaya.
Penjualan saham perseroan tidak tercatat oleh WPLN: 20% × perkiraan neto 25% × harga jual = 5% × Rp4.000.000.000 = Rp200.000.000, final.
Kenapa pilihan lain salah:
- B: Mengalikan 20% dengan harga jual; dasarnya perkiraan neto 25% dari harga jual.
- C: Mengalikan 20% dengan keuntungan riil; ketentuannya memakai perkiraan neto, bukan keuntungan.
- D: 0,1% adalah PPh final penjualan saham di bursa, bukan saham perseroan tidak tercatat.
Dasar hukum: UU PPh Pasal 26 ayat (2) dan (3); PMK 81/2024 Pasal 238–240`,
            tingkat: 'sedang',
            status: 'draft',
          },
        ],
      },
    },
  ],
  PPN: [
    {
      tingkat: 'A',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'Objek PPN & saat terutang',
            tipe: 'pg',
            pertanyaan: `PT Karya Mandiri adalah PKP produsen peralatan dapur. Pada Masa Pajak Mei 2026 terjadi empat peristiwa berikut. Peristiwa yang TIDAK termasuk penyerahan Barang Kena Pajak menurut UU PPN adalah ...`,
            opsi: [
              { label: 'A', teks: `Penyerahan barang dagangan kepada makelar sebagaimana dimaksud dalam KUHD` },
              { label: 'B', teks: `Pemakaian sendiri peralatan hasil produksi untuk dapur kantor perusahaan` },
              { label: 'C', teks: `Pemberian cuma-cuma peralatan hasil produksi kepada pelanggan saat promosi` },
              { label: 'D', teks: `Penyerahan barang dagangan kepada pedagang perantara untuk dijual kembali` },
            ],
            kunci: 'A',
            pembahasan: `Jawaban: A. Penyerahan barang dagangan kepada makelar sebagaimana dimaksud dalam KUHD
Pembahasan:
1. Pasal 1A ayat (1) memperluas pengertian penyerahan BKP, antara lain penyerahan kepada pedagang perantara atau melalui juru lelang serta pemakaian sendiri dan/atau pemberian cuma-cuma.
2. Pasal 1A ayat (2) mengecualikan antara lain penyerahan BKP kepada makelar sebagaimana dimaksud dalam KUHD dan penyerahan BKP untuk jaminan utang-piutang.
3. Makelar bertindak atas nama prinsipal dengan imbalan provisi, sehingga penyerahan kepadanya belum merupakan penyerahan BKP.
Penyerahan BKP kepada makelar sebagaimana dimaksud dalam KUHD tidak termasuk penyerahan BKP (UU PPN Pasal 1A ayat (2)); pemakaian sendiri, pemberian cuma-cuma, dan penyerahan kepada pedagang perantara termasuk penyerahan (ayat (1)).
Kenapa pilihan lain salah:
- B: Pemakaian sendiri BKP termasuk penyerahan (Pasal 1A ayat (1)) dan terutang PPN dengan DPP nilai lain.
- C: Pemberian cuma-cuma BKP termasuk penyerahan (Pasal 1A ayat (1)).
- D: Penyerahan kepada pedagang perantara atau melalui juru lelang termasuk penyerahan; yang dikecualikan adalah penyerahan kepada makelar KUHD.
Dasar hukum: UU PPN Pasal 1A ayat (1) dan ayat (2) s.t.d.t.d. UU 6/2023`,
            tingkat: 'mudah',
            status: 'draft',
          },
        ],
      },
    },
    {
      tingkat: 'A',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'Objek PPN & saat terutang',
            tipe: 'pg',
            pertanyaan: `PT Bumi Sentosa (PKP) menerima uang muka Rp150.000.000 pada 22 Juni 2026 atas pesanan mesin pengemas. Mesin diserahkan kepada pembeli pada 6 Agustus 2026 dan sisa harga dilunasi pada 15 September 2026. PPN atas uang muka tersebut terutang pada Masa Pajak ...`,
            opsi: [
              { label: 'A', teks: `Agustus 2026, saat mesin diserahkan` },
              { label: 'B', teks: `Juni 2026, saat uang muka diterima` },
              { label: 'C', teks: `September 2026, saat harga dilunasi` },
              { label: 'D', teks: `Juli 2026, sebulan setelah uang muka` },
            ],
            kunci: 'B',
            pembahasan: `Jawaban: B. Juni 2026, saat uang muka diterima
Pembahasan:
1. Saat terutang PPN pada dasarnya saat penyerahan BKP (Pasal 11 ayat (1)).
2. Bila pembayaran diterima sebelum penyerahan, saat terutangnya saat pembayaran (Pasal 11 ayat (2)); Faktur Pajak juga dibuat saat uang muka diterima.
3. Uang muka diterima 22 Juni 2026 → Masa Pajak Juni 2026; sisa harga terutang Masa Agustus 2026 saat penyerahan.
Bila pembayaran diterima sebelum penyerahan, PPN terutang pada saat pembayaran (UU PPN Pasal 11 ayat (2)); PPN atas uang muka terutang Masa Pajak Juni 2026, sedangkan sisanya terutang saat mesin diserahkan.
Kenapa pilihan lain salah:
- A: Atas pembayaran yang diterima sebelum penyerahan, PPN terutang saat pembayaran (Pasal 11 ayat (2)), bukan saat penyerahan.
- C: PPN tidak memakai prinsip kas; pelunasan tidak menentukan saat terutang.
- D: Bulan berikutnya adalah batas setor dan lapor SPT Masa PPN, bukan saat terutang.
Dasar hukum: UU PPN Pasal 11 ayat (1) dan ayat (2); PP 44/2022 Pasal 23`,
            tingkat: 'mudah',
            status: 'draft',
          },
        ],
      },
    },
    {
      tingkat: 'A',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'PKP, pemungut PPN & SPT Masa PPN',
            tipe: 'pg',
            pertanyaan: `PT Logam Raya (PKP) menyerahkan suku cadang kepada sebuah BUMN yang menjadi Pemungut PPN. Nilai pembayaran seluruhnya Rp8.880.000, sudah termasuk PPN Rp880.000. Perlakuan PPN atas penyerahan tersebut adalah ...`,
            opsi: [
              { label: 'A', teks: `PPN dipungut oleh BUMN, lalu disetor dan dilaporkan BUMN sebagai Pemungut PPN` },
              { label: 'B', teks: `PPN tidak terutang karena nilai pembayaran di bawah Rp10.000.000` },
              { label: 'C', teks: `PPN dipungut sendiri oleh PT Logam Raya, lalu disetor dan dilaporkan dalam SPT Masa PPN-nya` },
              { label: 'D', teks: `PPN disetor BUMN dengan SSP atas nama PT Logam Raya tanpa Faktur Pajak` },
            ],
            kunci: 'C',
            pembahasan: `Jawaban: C. PPN dipungut sendiri oleh PT Logam Raya, lalu disetor dan dilaporkan dalam SPT Masa PPN-nya
Pembahasan:
1. BUMN termasuk Pemungut PPN yang memungut, menyetor, dan melaporkan PPN atas penyerahan oleh rekanan PKP (UU PPN Pasal 16A).
2. Pemungut tidak memungut PPN bila jumlah pembayaran, termasuk PPN, tidak lebih dari Rp10.000.000 (PMK 81/2024).
3. Rp8.880.000 ≤ Rp10.000.000 → PPN dipungut sendiri oleh PT Logam Raya dan dilaporkan dalam SPT Masa PPN-nya.
Pembayaran Rp8.880.000 (termasuk PPN) tidak lebih dari Rp10.000.000, sehingga BUMN tidak memungut; PPN Rp880.000 dipungut sendiri oleh PT Logam Raya sebagai PKP penjual.
Kenapa pilihan lain salah:
- A: Pemungut tidak memungut bila jumlah pembayaran, termasuk PPN, tidak lebih dari Rp10.000.000.
- B: Batas Rp10 juta hanya menentukan siapa yang memungut; PPN tetap terutang.
- D: Rekanan tetap membuat Faktur Pajak; untuk pembayaran sampai Rp10 juta PPN dipungut sendiri oleh rekanan.
Dasar hukum: UU PPN Pasal 16A ayat (1); PMK 81/2024 Pasal 291 dan Pasal 292`,
            tingkat: 'sedang',
            status: 'draft',
          },
        ],
      },
    },
    {
      tingkat: 'A',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'Faktur Pajak & nota retur',
            tipe: 'pg',
            pertanyaan: `PT Sari Wangi (PKP) menyerahkan BKP kepada PT Teguh Abadi (PKP) pada 10 Januari 2026, tetapi baru membuat Faktur Pajak pada 15 Mei 2026. Akibat bagi PT Teguh Abadi atas PPN yang tercantum dalam faktur tersebut adalah ...`,
            opsi: [
              { label: 'A', teks: `Dapat dikreditkan pada Masa Pajak Mei 2026, yaitu masa saat faktur itu dibuat` },
              { label: 'B', teks: `Dapat dikreditkan pada Masa Pajak Januari 2026 dengan membetulkan SPT Masa PPN` },
              { label: 'C', teks: `Dapat dikreditkan setelah PT Sari Wangi membayar denda 1% dari DPP faktur itu` },
              { label: 'D', teks: `Tidak dapat dikreditkan, karena dokumen itu tidak diperlakukan sebagai Faktur Pajak` },
            ],
            kunci: 'D',
            pembahasan: `Jawaban: D. Tidak dapat dikreditkan, karena dokumen itu tidak diperlakukan sebagai Faktur Pajak
Pembahasan:
1. Faktur Pajak seharusnya dibuat saat penyerahan, 10 Januari 2026; jangka 3 bulan berakhir 10 April 2026.
2. Faktur baru dibuat 15 Mei 2026, lewat 3 bulan → tidak diperlakukan sebagai Faktur Pajak (PMK 81/2024 Pasal 384).
3. PPN di dalamnya tidak dapat dikreditkan PT Teguh Abadi; PT Sari Wangi dianggap tidak membuat Faktur Pajak dan didenda 1% dari DPP (UU KUP Pasal 14 ayat (4)).
Faktur Pajak yang dibuat setelah lewat 3 bulan sejak saat seharusnya dibuat tidak diperlakukan sebagai Faktur Pajak; PPN-nya tidak dapat dikreditkan pembeli, dan penjual dikenai denda 1% dari DPP.
Kenapa pilihan lain salah:
- A: Faktur dibuat lewat 3 bulan sejak saat seharusnya, sehingga bukan Faktur Pajak dan PPN-nya tidak dapat dikreditkan.
- B: Masalahnya bukan masa pengkreditan; dokumen itu tidak diperlakukan sebagai Faktur Pajak.
- C: Denda 1% DPP dikenakan kepada penjual dan tidak memulihkan hak pengkreditan pembeli.
Dasar hukum: PMK 81/2024 Pasal 382 ayat (2) dan Pasal 384; UU KUP Pasal 14 ayat (1) huruf d dan ayat (4)`,
            tingkat: 'sedang',
            status: 'draft',
          },
        ],
      },
    },
    {
      tingkat: 'A',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'Faktur Pajak & nota retur',
            tipe: 'pg',
            pertanyaan: `PT Andalas (PKP) menjual BKP kepada PT Borneo (PKP) pada Masa Pajak Maret 2026 dengan PPN Rp12.000.000, yang dikreditkan PT Borneo pada masa itu. Pada 8 Mei 2026 PT Borneo mengembalikan sebagian barang dengan PPN Rp3.000.000 dan membuat nota retur elektronik. Perlakuan PPN yang benar adalah ...`,
            opsi: [
              { label: 'A', teks: `PK PT Andalas dan PM PT Borneo Masa Pajak Mei 2026 masing-masing dikurangi Rp3.000.000` },
              { label: 'B', teks: `PT Andalas dan PT Borneo sama-sama membetulkan SPT Masa PPN Maret 2026` },
              { label: 'C', teks: `PT Andalas membuat Faktur Pajak pengganti Masa Maret 2026 dengan PPN Rp9.000.000` },
              { label: 'D', teks: `Hanya PK PT Andalas Masa Mei 2026 yang dikurangi Rp3.000.000; PM PT Borneo tetap` },
            ],
            kunci: 'A',
            pembahasan: `Jawaban: A. PK PT Andalas dan PM PT Borneo Masa Pajak Mei 2026 masing-masing dikurangi Rp3.000.000
Pembahasan:
1. Pengembalian BKP dicatat dengan nota retur elektronik yang dibuat pembeli saat barang dikembalikan.
2. PPN atas barang yang diretur mengurangi PK penjual dan PM pembeli pada masa retur (Pasal 5A ayat (1)).
3. Masa Mei 2026: PK PT Andalas −Rp3.000.000 dan PM PT Borneo −Rp3.000.000; SPT Masa Maret 2026 tidak dibetulkan.
PPN atas BKP yang dikembalikan mengurangi PK penjual dan PM pembeli pada Masa Pajak terjadinya pengembalian (UU PPN Pasal 5A), yaitu Mei 2026, berdasarkan nota retur elektronik dari pembeli.
Kenapa pilihan lain salah:
- B: Retur dikurangkan pada Masa Pajak terjadinya pengembalian, bukan dengan membetulkan masa penjualan.
- C: Faktur pengganti untuk kesalahan isi faktur; pengembalian barang memakai nota retur.
- D: Nota retur mengurangi PK penjual dan PM pembeli pada masa yang sama.
Dasar hukum: UU PPN Pasal 5A ayat (1); PMK 81/2024 Pasal 286 dan Pasal 288`,
            tingkat: 'sedang',
            status: 'draft',
          },
        ],
      },
    },
    {
      tingkat: 'A',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'PPN besaran tertentu',
            tipe: 'pg',
            pertanyaan: `CV Roda Prima adalah PKP pedagang kendaraan bermotor bekas yang memakai PPN besaran tertentu. Pada Masa Pajak Juni 2026 ia menjual sebuah mobil bekas dengan harga jual Rp180.000.000 (tidak termasuk PPN). PPN yang wajib dipungut atas penjualan mobil tersebut adalah ...`,
            opsi: [
              { label: 'A', teks: `Rp19.800.000` },
              { label: 'B', teks: `Rp1.980.000` },
              { label: 'C', teks: `Rp21.600.000` },
              { label: 'D', teks: `Rp2.160.000` },
            ],
            kunci: 'B',
            pembahasan: `Jawaban: B. Rp1.980.000
Pembahasan:
1. PKP pedagang kendaraan bermotor bekas memungut PPN dengan besaran tertentu (UU PPN Pasal 9A).
2. Besaran tertentu = 10% × 11/12 × 12% = 1,1% dari harga jual.
3. 1,1% × Rp180.000.000 = Rp1.980.000; Pajak Masukan yang terkait tidak dapat dikreditkan.
PPN besaran tertentu kendaraan bermotor bekas = 1,1% × harga jual = 1,1% × Rp180.000.000 = Rp1.980.000.
Kenapa pilihan lain salah:
- A: Memakai mekanisme umum 12% × 11/12; kendaraan bekas oleh pedagang memakai besaran tertentu 1,1%.
- C: Memakai 12% × harga jual penuh.
- D: Memakai 1,2% (rumusan tanpa 11/12); besaran tertentu sekarang 10% × 11/12 × 12% = 1,1%.
Dasar hukum: UU PPN Pasal 9A ayat (1); PMK 65/PMK.03/2022 s.t.d.d. PMK 11/2025`,
            tingkat: 'mudah',
            status: 'draft',
          },
        ],
      },
    },
    {
      tingkat: 'A',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'Fasilitas PPN',
            tipe: 'pg',
            pertanyaan: `PT Nusa Tirta (PKP) memiliki dua lini penjualan: lini I mendapat fasilitas PPN tidak dipungut, sedangkan lini II mendapat fasilitas PPN dibebaskan. Perlakuan Pajak Masukan yang berkaitan langsung dengan kedua lini tersebut adalah ...`,
            opsi: [
              { label: 'A', teks: `PM lini I tidak dapat dikreditkan; PM lini II dapat dikreditkan` },
              { label: 'B', teks: `PM kedua lini dapat dikreditkan karena sama-sama fasilitas PPN` },
              { label: 'C', teks: `PM lini I dapat dikreditkan; PM lini II tidak dapat dikreditkan` },
              { label: 'D', teks: `PM kedua lini tidak dapat dikreditkan karena tidak ada PPN dipungut` },
            ],
            kunci: 'C',
            pembahasan: `Jawaban: C. PM lini I dapat dikreditkan; PM lini II tidak dapat dikreditkan
Pembahasan:
1. Fasilitas tidak dipungut: PPN terutang tetapi tidak dipungut; PM yang berkaitan tetap dapat dikreditkan.
2. Fasilitas dibebaskan: PPN tidak terutang; PM yang berkaitan tidak dapat dikreditkan.
3. Kedua penyerahan tetap dibuatkan Faktur Pajak dengan keterangan fasilitasnya.
Pajak Masukan atas penyerahan yang mendapat fasilitas tidak dipungut dapat dikreditkan (UU PPN Pasal 16B ayat (2)), sedangkan Pajak Masukan atas penyerahan yang dibebaskan tidak dapat dikreditkan (ayat (3)).
Kenapa pilihan lain salah:
- A: Akibat kedua fasilitas terbalik (UU PPN Pasal 16B ayat (2) dan ayat (3)).
- B: PM atas penyerahan yang dibebaskan tidak dapat dikreditkan (Pasal 16B ayat (3)).
- D: PM atas penyerahan yang tidak dipungut tetap dapat dikreditkan (Pasal 16B ayat (2)).
Dasar hukum: UU PPN Pasal 16B ayat (1), (2), dan (3) s.t.d.d. UU 7/2021 (HPP)`,
            tingkat: 'mudah',
            status: 'draft',
          },
        ],
      },
    },
    {
      tingkat: 'C',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'Pengkreditan Pajak Masukan',
            tipe: 'pg',
            pertanyaan: `PT Lintas Bahari (PKP) menerima Faktur Pajak masukan atas pembelian bahan baku yang dibuat pada Maret 2026. Pajak Masukan itu belum dikreditkan pada SPT Masa PPN Maret 2026, belum dibebankan sebagai biaya, dan tidak dikapitalisasi. Masa Pajak paling akhir yang masih dapat dipakai untuk mengkreditkan Pajak Masukan tersebut adalah ...`,
            opsi: [
              { label: 'A', teks: `Masa Pajak Juni 2026` },
              { label: 'B', teks: `Masa Pajak Mei 2026` },
              { label: 'C', teks: `Masa Pajak Desember 2026 (akhir tahun buku)` },
              { label: 'D', teks: `Hanya Masa Pajak Maret 2026` },
            ],
            kunci: 'A',
            pembahasan: `Jawaban: A. Masa Pajak Juni 2026
Pembahasan:
1. Masa Faktur Pajak dibuat: Maret 2026.
2. Paling lama 3 Masa Pajak setelah berakhirnya masa itu: April, Mei, dan Juni 2026 (UU PPN Pasal 9 ayat (9)).
3. Syarat lain terpenuhi (belum dibiayakan/dikapitalisasi), jadi batas akhirnya Masa Pajak Juni 2026.
Pajak Masukan dapat dikreditkan paling lama 3 Masa Pajak setelah berakhirnya masa Faktur Pajak dibuat: April, Mei, Juni 2026.
Kenapa pilihan lain salah:
- B: Menghitung tiga masa mulai dari masa faktur itu sendiri (Maret–Mei); hitungan dimulai setelah masa faktur berakhir.
- C: Tidak ada ketentuan pengkreditan sampai akhir tahun buku; batasnya 3 Masa Pajak.
- D: Pajak Masukan boleh dikreditkan pada masa berbeda, paling lama 3 Masa Pajak berikutnya.
Dasar hukum: UU PPN Pasal 9 ayat (9) s.t.d.d. UU 7/2021 (HPP); PMK 81/2024 Pasal 376 ayat (1)–(3)`,
            tingkat: 'sedang',
            status: 'draft',
          },
        ],
      },
    },
    {
      tingkat: 'C',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'Pengkreditan Pajak Masukan',
            tipe: 'pg',
            pertanyaan: `CV Arta Gemilang seharusnya dikukuhkan sebagai PKP sejak Masa Pajak Juli 2026, tetapi baru dikukuhkan pada Oktober 2026. Pajak Keluaran yang seharusnya dipungut untuk Masa Juli–September 2026 sebesar Rp150.000.000, sedangkan PPN dalam Faktur Pajak pembelian pada masa yang sama Rp90.000.000. Pajak Masukan yang dapat dikreditkan untuk Masa Juli–September 2026 adalah ...`,
            opsi: [
              { label: 'A', teks: `Rp120.000.000` },
              { label: 'B', teks: `Rp0` },
              { label: 'C', teks: `Rp150.000.000` },
              { label: 'D', teks: `Rp90.000.000` },
            ],
            kunci: 'A',
            pembahasan: `Jawaban: A. Rp120.000.000
Pembahasan:
1. Masa Juli–September 2026 adalah masa sejak seharusnya dikukuhkan sampai sebelum dikukuhkan.
2. Pajak Masukan masa itu memakai pedoman pengkreditan 80% dari Pajak Keluaran yang seharusnya dipungut (UU PPN Pasal 9 ayat (9a)).
3. 80% × Rp150.000.000 = Rp120.000.000; PPN dalam faktur pembelian masa itu tidak dikreditkan sendiri.
Pajak Masukan untuk masa sebelum pengukuhan dikreditkan dengan pedoman 80% × Pajak Keluaran yang seharusnya dipungut: 80% × Rp150.000.000 = Rp120.000.000.
Kenapa pilihan lain salah:
- B: Aturan lama (Pasal 9 ayat (8) huruf a) melarang pengkreditan PM sebelum PKP; ketentuan itu dihapus UU HPP.
- C: Mengkreditkan seluruh Pajak Keluaran; pedomannya 80%.
- D: Memakai PPN dalam faktur pembelian; untuk masa sebelum pengukuhan, PM diganti pedoman 80% dari PK.
Dasar hukum: UU PPN Pasal 9 ayat (9a), (9b), (9c) s.t.d.d. UU 7/2021 (HPP); PMK 81/2024 Pasal 378 ayat (1)–(7)`,
            tingkat: 'sulit',
            status: 'draft',
          },
        ],
      },
    },
  ],
  BM: [
    {
      tingkat: 'A',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'Tarif, saat & pihak terutang',
            tipe: 'pg',
            pertanyaan: `CV Sentosa menerima pelunasan piutang Rp8.000.000 dari PT Cahaya Abadi. CV Sentosa membuat dan menandatangani kuitansi, lalu menyerahkannya kepada PT Cahaya Abadi. Para pihak tidak membuat kesepakatan lain. Pihak yang terutang Bea Meterai atas kuitansi tersebut adalah ...`,
            opsi: [
              { label: 'A', teks: `PT Cahaya Abadi, sebagai pihak yang menerima dokumen` },
              { label: 'B', teks: `CV Sentosa, sebagai pihak yang membuat dan menandatangani dokumen` },
              { label: 'C', teks: `CV Sentosa dan PT Cahaya Abadi, masing-masing separuh tarif` },
              { label: 'D', teks: `Tidak ada, karena kuitansi pelunasan piutang bukan objek Bea Meterai` },
            ],
            kunci: 'A',
            pembahasan: `Jawaban: A. PT Cahaya Abadi, sebagai pihak yang menerima dokumen
Pembahasan:
1. Kuitansi yang menyebut penerimaan uang lebih dari Rp5.000.000 adalah objek Bea Meterai (UU 10/2020 Pasal 3 ayat (2)).
2. Dokumen sepihak terutang oleh pihak yang menerima dokumen (Pasal 9), bila tidak ada kesepakatan lain.
3. Kuitansi diserahkan kepada PT Cahaya Abadi → PT Cahaya Abadi terutang Bea Meterai Rp10.000.
Kuitansi adalah dokumen yang dibuat sepihak, sehingga Bea Meterai terutang oleh pihak yang menerima dokumen, yaitu PT Cahaya Abadi (UU 10/2020 Pasal 9); nilainya Rp8.000.000 > Rp5.000.000 sehingga merupakan objek.
Kenapa pilihan lain salah:
- B: Dokumen sepihak terutang oleh penerima dokumen, bukan pembuatnya (UU 10/2020 Pasal 9).
- C: Bea Meterai tidak dibagi; kuitansi adalah dokumen sepihak yang terutang oleh penerimanya.
- D: Dokumen yang menyebut penerimaan uang lebih dari Rp5.000.000 merupakan objek Bea Meterai.
Dasar hukum: UU 10/2020 Pasal 3 ayat (2) dan Pasal 9`,
            tingkat: 'mudah',
            status: 'draft',
          },
        ],
      },
    },
    {
      tingkat: 'A',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'Pemungut & pembayaran',
            tipe: 'pg',
            pertanyaan: `PT Bank Arta Sejahtera ditetapkan sebagai Pemungut Bea Meterai atas dokumen cek dan bilyet giro. Bea Meterai yang dipungut atas dokumen Masa Pajak Maret 2026 wajib disetor dan SPT Masa Bea Meterainya dilaporkan paling lambat ...`,
            opsi: [
              { label: 'A', teks: `20 April 2026` },
              { label: 'B', teks: `15 April 2026` },
              { label: 'C', teks: `30 April 2026` },
              { label: 'D', teks: `10 April 2026` },
            ],
            kunci: 'B',
            pembahasan: `Jawaban: B. 15 April 2026
Pembahasan:
1. Pemungut Bea Meterai memungut Bea Meterai atas dokumen tertentu dari pihak terutang (UU 10/2020 Pasal 10).
2. Setoran dan SPT Masa Bea Meterai paling lambat tanggal 15 bulan berikutnya (PMK 78/2024).
3. Masa Maret 2026 → 15 April 2026; tanggal itu hari kerja, jadi tidak bergeser.
Pemungut Bea Meterai menyetor dan melaporkan SPT Masa Bea Meterai paling lambat tanggal 15 bulan berikutnya: Masa Maret 2026 → 15 April 2026 (hari Rabu).
Kenapa pilihan lain salah:
- A: Tanggal 20 adalah batas lapor SPT Masa PPh; pemungut Bea Meterai menyetor dan melapor paling lambat tanggal 15.
- C: Akhir bulan berikutnya adalah batas SPT Masa PPN.
- D: Tanggal 10 adalah batas setor PPh Masa sebelum 2024, bukan batas pemungut Bea Meterai.
Dasar hukum: UU 10/2020 Pasal 10 dan Pasal 11; PMK 78/2024 Pasal 55–65`,
            tingkat: 'mudah',
            status: 'draft',
          },
        ],
      },
    },
    {
      tingkat: 'C',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'Objek & pengecualian',
            tipe: 'pg',
            pertanyaan: `Semua dokumen berikut bernilai lebih dari Rp5.000.000. Dokumen yang tidak dikenai Bea Meterai adalah ...`,
            opsi: [
              { label: 'A', teks: `Tanda terima gaji karyawan sebesar Rp8.000.000` },
              { label: 'B', teks: `Kuitansi pelunasan piutang dagang sebesar Rp8.000.000` },
              { label: 'C', teks: `Surat perjanjian sewa kendaraan senilai Rp8.000.000` },
              { label: 'D', teks: `Akta jual beli tanah di hadapan PPAT senilai Rp800.000.000` },
            ],
            kunci: 'A',
            pembahasan: `Jawaban: A. Tanda terima gaji karyawan sebesar Rp8.000.000
Pembahasan:
1. UU 10/2020 Pasal 7 menyebut dokumen yang tidak dikenai Bea Meterai, antara lain tanda terima gaji, uang tunggu, pensiun, dan tunjangan.
2. Dokumen Pasal 7 tetap tidak dikenai walaupun nominalnya di atas Rp5.000.000.
Tanda terima gaji dan pembayaran lain terkait hubungan kerja termasuk dokumen yang tidak dikenai Bea Meterai (UU 10/2020 Pasal 7), berapa pun nilainya.
Kenapa pilihan lain salah:
- B: Kuitansi penerimaan uang bernilai lebih dari Rp5.000.000 adalah objek Bea Meterai (Pasal 3 ayat (2) huruf g).
- C: Surat perjanjian adalah objek Bea Meterai tanpa batas nominal (Pasal 3 ayat (2) huruf a).
- D: Akta PPAT adalah objek Bea Meterai (Pasal 3 ayat (2) huruf d).
Dasar hukum: UU 10/2020 Pasal 3 ayat (2) dan Pasal 7`,
            tingkat: 'mudah',
            status: 'draft',
          },
        ],
      },
    },
  ],
  AKT: [
    {
      tingkat: 'B',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'Aspek pajak aset, piutang & persediaan',
            tipe: 'pg',
            pertanyaan: `Secara komersial, PT Pangan Lestari menilai persediaan dengan metode LIFO dan membentuk penyisihan penurunan nilai persediaan ke nilai realisasi neto Rp75.000.000. Perlakuan fiskal yang benar dalam rekonsiliasi adalah ...`,
            opsi: [
              { label: 'A', teks: `LIFO tetap diterima asal diterapkan taat asas; penyisihan boleh dibiayakan` },
              { label: 'B', teks: `Harga pokok dihitung ulang dengan rata-rata atau FIFO; penyisihan dikoreksi positif` },
              { label: 'C', teks: `LIFO tetap diterima asal diterapkan taat asas; penyisihan dikoreksi positif` },
              { label: 'D', teks: `Harga pokok dihitung ulang dengan rata-rata atau FIFO; penyisihan boleh dibiayakan` },
            ],
            kunci: 'B',
            pembahasan: `Jawaban: B. Harga pokok dihitung ulang dengan rata-rata atau FIFO; penyisihan dikoreksi positif
Pembahasan:
1. Harga pokok fiskal memakai harga perolehan dengan rata-rata atau FIFO, diterapkan taat asas.
2. Selisih harga pokok LIFO dengan rata-rata/FIFO dikoreksi dalam rekonsiliasi.
3. Penyisihan penurunan nilai ke nilai realisasi neto Rp75.000.000 dikoreksi positif.
Fiskal menilai persediaan berdasarkan harga perolehan dengan rata-rata atau FIFO (UU PPh Pasal 10 ayat (6)); LIFO tidak diperkenankan. Penyisihan penurunan nilai persediaan tidak boleh dikurangkan (Pasal 9 ayat (1) huruf c), sehingga dikoreksi positif.
Kenapa pilihan lain salah:
- A: LIFO tidak diperkenankan, dan penyisihan penurunan nilai persediaan tidak boleh dikurangkan.
- C: Fiskal hanya mengenal rata-rata atau FIFO (UU PPh Pasal 10 ayat (6)).
- D: Penyisihan penurunan nilai persediaan tidak boleh dikurangkan (Pasal 9 ayat (1) huruf c).
Dasar hukum: UU PPh Pasal 10 ayat (6); UU PPh Pasal 9 ayat (1) huruf c`,
            tingkat: 'sedang',
            status: 'draft',
          },
        ],
      },
    },
    {
      tingkat: 'B',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'Aspek pajak aset, piutang & persediaan',
            tipe: 'pg',
            pertanyaan: `PT Mitra Dagang (bukan bank atau lembaga pembiayaan) membebankan dalam laba rugi 2025: (1) pembentukan CKPN piutang usaha Rp80.000.000; (2) penghapusan piutang Rp30.000.000 yang hanya didukung memo direksi (debiturnya bukan debitur kecil); (3) penghapusan piutang Rp20.000.000 yang perkaranya telah diserahkan ke Pengadilan Negeri dan daftarnya diserahkan ke DJP. Koreksi fiskal positif atas ketiga beban tersebut adalah ...`,
            opsi: [
              { label: 'A', teks: `Rp80.000.000` },
              { label: 'B', teks: `Rp130.000.000` },
              { label: 'C', teks: `Rp110.000.000` },
              { label: 'D', teks: `Rp30.000.000` },
            ],
            kunci: 'C',
            pembahasan: `Jawaban: C. Rp110.000.000
Pembahasan:
1. Cadangan/CKPN piutang usaha selain bank dan lembaga pembiayaan tertentu tidak boleh dikurangkan: koreksi Rp80.000.000.
2. Penghapusan piutang boleh dibiayakan bila dibebankan di laba rugi, daftarnya diserahkan ke DJP, dan ada bukti penagihan; memo direksi tidak cukup: koreksi Rp30.000.000.
3. Butir (3) memenuhi syarat. Koreksi positif = Rp80.000.000 + Rp30.000.000 = Rp110.000.000.
CKPN Rp80.000.000 tidak boleh dikurangkan dan penghapusan Rp30.000.000 tanpa bukti penagihan tidak memenuhi syarat, sehingga koreksi positif Rp110.000.000; penghapusan Rp20.000.000 memenuhi syarat dan tetap menjadi biaya.
Kenapa pilihan lain salah:
- A: Hanya mengoreksi CKPN; penghapusan piutang tanpa bukti penagihan juga tidak boleh dibiayakan.
- B: Mengoreksi seluruh beban; penghapusan butir (3) memenuhi syarat Pasal 6 ayat (1) huruf h.
- D: CKPN bagi usaha selain bank dan lembaga pembiayaan tidak boleh dikurangkan (Pasal 9 ayat (1) huruf c).
Dasar hukum: UU PPh Pasal 6 ayat (1) huruf h dan Pasal 9 ayat (1) huruf c s.t.d.d. UU 7/2021 (HPP); PP 55/2022 Pasal 19`,
            tingkat: 'sulit',
            status: 'draft',
          },
        ],
      },
    },
    {
      tingkat: 'B',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'Organisasi nirlaba',
            tipe: 'pg',
            pertanyaan: `Yayasan Pendidikan Cendekia (nirlaba, terdaftar pada instansi yang membidanginya) memperoleh sisa lebih Rp800.000.000 pada Tahun 2022. Selama 2023–2026 yayasan menanamkan Rp650.000.000 dalam sarana dan prasarana pendidikan di Indonesia dan melaporkannya dalam SPT. Perlakuan atas sisa lebih Rp150.000.000 yang tidak ditanamkan adalah ...`,
            opsi: [
              { label: 'A', teks: `Menjadi objek PPh pada Tahun Pajak 2027, setelah jangka 4 tahun berakhir` },
              { label: 'B', teks: `Seluruh sisa lebih Rp800.000.000 menjadi objek PPh Tahun Pajak 2022` },
              { label: 'C', teks: `Tetap dikecualikan dari objek selama yayasan bersifat nirlaba` },
              { label: 'D', teks: `Menjadi objek PPh pada Tahun Pajak 2026, saat jangka 4 tahun berakhir` },
            ],
            kunci: 'D',
            pembahasan: `Jawaban: D. Menjadi objek PPh pada Tahun Pajak 2026, saat jangka 4 tahun berakhir
Pembahasan:
1. Sisa lebih badan nirlaba pendidikan yang terdaftar dikecualikan dari objek bila ditanamkan dalam sarana dan prasarana pendidikan paling lama 4 tahun.
2. Sisa lebih 2022 → jangka penanaman sampai 2026.
3. Bagian yang tidak ditanamkan, Rp150.000.000, menjadi objek pada akhir Tahun Pajak 2026 dan dikoreksi dalam SPT 2026.
Sisa lebih Tahun 2022 dikecualikan sebesar yang ditanamkan dalam sarana dan prasarana paling lama 4 tahun (sampai 2026); sisa Rp150.000.000 yang tidak ditanamkan menjadi objek PPh pada Tahun Pajak 2026.
Kenapa pilihan lain salah:
- A: Pola aturan lama; kini sisa yang tidak ditanamkan menjadi objek pada akhir tahun pajak saat jangka 4 tahun berakhir.
- B: Yang menjadi objek hanya bagian yang tidak ditanamkan dalam 4 tahun.
- C: Pengecualian hanya sebesar yang ditanamkan dalam jangka 4 tahun.
Dasar hukum: UU PPh Pasal 4 ayat (3) huruf m s.t.d.d. UU 7/2021 (HPP); PP 55/2022 Pasal 14`,
            tingkat: 'sedang',
            status: 'draft',
          },
        ],
      },
    },
    {
      tingkat: 'C',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'Jurnal PPh & PPN',
            tipe: 'pg',
            pertanyaan: `PT Harmoni Teguh menyetor angsuran PPh Pasal 25 Masa Juli 2026 sebesar Rp45.000.000 pada 14 Agustus 2026. Jurnal yang tepat saat penyetoran adalah ...`,
            opsi: [
              { label: 'A', teks: `Dr Pajak dibayar di muka – PPh 25 Rp45.000.000; Cr Kas Rp45.000.000` },
              { label: 'B', teks: `Dr Beban pajak penghasilan Rp45.000.000; Cr Kas Rp45.000.000` },
              { label: 'C', teks: `Dr Utang PPh Pasal 25 Rp45.000.000; Cr Kas Rp45.000.000` },
              { label: 'D', teks: `Dr Kas Rp45.000.000; Cr Pajak dibayar di muka – PPh 25 Rp45.000.000` },
            ],
            kunci: 'A',
            pembahasan: `Jawaban: A. Dr Pajak dibayar di muka – PPh 25 Rp45.000.000; Cr Kas Rp45.000.000
Pembahasan:
1. PPh 25 dibayar sebelum PPh terutang tahun itu diketahui, jadi merupakan kredit pajak tahun berjalan.
2. Saat setor: Dr Pajak dibayar di muka – PPh 25; Cr Kas.
3. Di akhir tahun, saldo ini dikurangkan dari utang PPh badan; beban pajak diakui lewat penghitungan PPh terutang, bukan saat angsuran.
Angsuran PPh 25 adalah pembayaran di muka atas PPh badan tahun berjalan, sehingga dicatat sebagai aset (pajak dibayar di muka) yang nanti mengurangi utang PPh badan.
Kenapa pilihan lain salah:
- B: Angsuran bukan beban; beban pajak kini diakui dari PPh terutang akhir tahun.
- C: Tidak ada utang PPh 25 yang dicatat sebelumnya; angsuran disetor dari kas sebagai pembayaran di muka.
- D: Jurnalnya terbalik; penyetoran mengurangi kas.
Dasar hukum: UU PPh Pasal 25 dan Pasal 28 ayat (1) huruf d; PSAK 212 (Pajak Penghasilan)`,
            tingkat: 'mudah',
            status: 'draft',
          },
        ],
      },
    },
    {
      tingkat: 'C',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'Merger & likuidasi',
            tipe: 'pg',
            pertanyaan: `PT Armada Jaya dilikuidasi pada 2026. Mesin produksi dengan nilai sisa buku fiskal Rp1.200.000.000 dan harga pasar Rp1.700.000.000 dialihkan kepada pemegang saham sebagai pembagian sisa kekayaan. Tidak ada penetapan lain dari Menteri Keuangan. Penghasilan PT Armada Jaya dari pengalihan mesin tersebut adalah ...`,
            opsi: [
              { label: 'A', teks: `Rp500.000.000` },
              { label: 'B', teks: `Rp0` },
              { label: 'C', teks: `Rp1.700.000.000` },
              { label: 'D', teks: `Rp1.200.000.000` },
            ],
            kunci: 'A',
            pembahasan: `Jawaban: A. Rp500.000.000
Pembahasan:
1. Nilai pengalihan harta dalam likuidasi adalah jumlah yang seharusnya menurut harga pasar (UU PPh Pasal 10 ayat (3)).
2. Keuntungan karena likuidasi merupakan penghasilan (Pasal 4 ayat (1) huruf d angka 3).
3. Rp1.700.000.000 − Rp1.200.000.000 = Rp500.000.000.
Pengalihan harta dalam likuidasi dinilai dengan harga pasar (UU PPh Pasal 10 ayat (3)); keuntungan = Rp1.700.000.000 − Rp1.200.000.000 = Rp500.000.000.
Kenapa pilihan lain salah:
- B: Pengalihan harta dalam likuidasi memakai harga pasar, sehingga selisihnya dengan nilai sisa buku menjadi penghasilan.
- C: Penghasilan adalah selisih harga pasar dengan nilai sisa buku fiskal, bukan seluruh harga pasar.
- D: Nilai sisa buku bukan penghasilan; yang menjadi penghasilan adalah keuntungan di atasnya.
Dasar hukum: UU PPh Pasal 10 ayat (3); UU PPh Pasal 4 ayat (1) huruf d angka 3`,
            tingkat: 'sedang',
            status: 'draft',
          },
        ],
      },
    },
  ],
  BDN: [
    {
      tingkat: 'B',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'Subjek, objek & pengecualian objek',
            tipe: 'pg',
            pertanyaan: `Pada 2026 PT Sinar Andalas (Wajib Pajak badan dalam negeri) menerima dividen Rp250.000.000 dari PT Kencana Agri (Wajib Pajak badan dalam negeri). Kepemilikan PT Sinar Andalas pada PT Kencana Agri 8%. Perlakuan PPh atas dividen tersebut bagi PT Sinar Andalas adalah ...`,
            opsi: [
              { label: 'A', teks: `Objek PPh tarif umum, karena kepemilikannya di bawah 25%` },
              { label: 'B', teks: `Bukan objek PPh; seluruhnya dikeluarkan dari penghitungan PKP` },
              { label: 'C', teks: `Dikenai PPh final 10% yang dipotong PT Kencana Agri` },
              { label: 'D', teks: `Bukan objek PPh hanya bila diinvestasikan kembali di Indonesia` },
            ],
            kunci: 'B',
            pembahasan: `Jawaban: B. Bukan objek PPh; seluruhnya dikeluarkan dari penghitungan PKP
Pembahasan:
1. Dividen dalam negeri yang diterima badan dalam negeri bukan objek PPh.
2. Sejak UU HPP tidak ada syarat kepemilikan minimal atau asal laba ditahan.
3. Rp250.000.000 dikeluarkan dari PKP (koreksi negatif bila sudah masuk laba komersial).
Dividen dari dalam negeri yang diterima Wajib Pajak badan dalam negeri dikecualikan dari objek PPh tanpa syarat persentase kepemilikan (UU PPh Pasal 4 ayat (3) huruf f angka 1 s.t.d.d. UU HPP); dalam rekonsiliasi dikoreksi negatif.
Kenapa pilihan lain salah:
- A: Syarat kepemilikan 25% adalah aturan lama; kini dividen dalam negeri bagi badan dikecualikan tanpa syarat kepemilikan.
- C: PPh final 10% untuk dividen orang pribadi yang tidak diinvestasikan; dividen kepada badan dalam negeri bukan objek.
- D: Syarat investasi untuk orang pribadi dan dividen luar negeri, bukan dividen dalam negeri yang diterima badan.
Dasar hukum: UU PPh Pasal 4 ayat (3) huruf f angka 1 s.t.d.d. UU 7/2021 (HPP)`,
            tingkat: 'mudah',
            status: 'draft',
          },
        ],
      },
    },
    {
      tingkat: 'B',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'Biaya boleh & tidak boleh dikurangkan',
            tipe: 'pg',
            pertanyaan: `PT Rekayasa Prima membebankan biaya jamuan relasi bisnis Rp60.000.000 pada 2025. Semua jamuan berkaitan dengan kegiatan mendapatkan, menagih, dan memelihara penghasilan, tetapi Rp20.000.000 di antaranya tidak dibuatkan daftar nominatif. Koreksi fiskal positif atas biaya jamuan tersebut adalah ...`,
            opsi: [
              { label: 'A', teks: `Rp60.000.000` },
              { label: 'B', teks: `Rp0` },
              { label: 'C', teks: `Rp20.000.000` },
              { label: 'D', teks: `Rp40.000.000` },
            ],
            kunci: 'C',
            pembahasan: `Jawaban: C. Rp20.000.000
Pembahasan:
1. Entertainment terkait 3M boleh dibiayakan bila dibuat daftar nominatif dan dilampirkan pada SPT Tahunan.
2. Bagian berdaftar nominatif Rp40.000.000 tetap biaya.
3. Bagian tanpa daftar nominatif Rp20.000.000 dikoreksi positif.
Biaya entertainment boleh dikurangkan bila terkait 3M dan didukung daftar nominatif yang dilampirkan pada SPT; bagian tanpa daftar nominatif Rp20.000.000 dikoreksi positif.
Kenapa pilihan lain salah:
- A: Entertainment yang terkait 3M dan didukung daftar nominatif tetap boleh dikurangkan.
- B: Biaya tanpa daftar nominatif tidak boleh dikurangkan walaupun terkait 3M.
- D: Yang dikoreksi bagian tanpa daftar nominatif, bukan bagian yang berdaftar.
Dasar hukum: UU PPh Pasal 6 ayat (1) huruf a; SE-27/PJ.22/1986`,
            tingkat: 'mudah',
            status: 'draft',
          },
        ],
      },
    },
    {
      tingkat: 'B',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'Kompensasi kerugian fiskal',
            tipe: 'pg',
            pertanyaan: `PT Bahari Sentosa mempunyai sisa rugi fiskal Tahun 2020 Rp150.000.000 dan rugi fiskal Tahun 2022 Rp100.000.000. Penghasilan neto fiskal Tahun 2025 Rp200.000.000, tanpa fasilitas Pasal 31A. PKP Tahun 2025 dan sisa kerugian yang masih dapat dikompensasikan ke Tahun 2026 adalah ...`,
            opsi: [
              { label: 'A', teks: `PKP Rp0; sisa rugi 2020 Rp50.000.000 dibawa ke 2026` },
              { label: 'B', teks: `PKP Rp100.000.000; tidak ada sisa rugi` },
              { label: 'C', teks: `PKP Rp0; sisa rugi Rp50.000.000 hangus` },
              { label: 'D', teks: `PKP Rp0; sisa rugi 2022 Rp50.000.000 dibawa ke 2026` },
            ],
            kunci: 'D',
            pembahasan: `Jawaban: D. PKP Rp0; sisa rugi 2022 Rp50.000.000 dibawa ke 2026
Pembahasan:
1. Kerugian dikompensasikan mulai tahun berikutnya sampai 5 tahun (UU PPh Pasal 6 ayat (2)); rugi terlama dipakai lebih dulu.
2. Rp200.000.000 − rugi 2020 Rp150.000.000 = Rp50.000.000; dikurangi rugi 2022 Rp50.000.000 → PKP Rp0.
3. Sisa rugi 2022 Rp50.000.000 masih dapat dipakai pada 2026–2027.
Rugi 2020 dapat dikompensasikan 2021–2025 dan dipakai lebih dulu (Rp150.000.000), lalu rugi 2022 Rp50.000.000 sehingga PKP 2025 Rp0; sisa rugi 2022 Rp50.000.000 dibawa ke 2026 (batasnya 2027).
Kenapa pilihan lain salah:
- A: Rugi terlama dipakai lebih dulu, dan rugi 2020 hanya dapat dikompensasikan sampai 2025.
- B: Menganggap rugi 2020 hangus pada 2024; jangka 5 tahun dihitung mulai tahun berikutnya (2021–2025).
- C: Rugi 2022 masih dapat dikompensasikan sampai 2027, jadi sisanya tidak hangus.
Dasar hukum: UU PPh Pasal 6 ayat (2) s.t.d.d. UU 7/2021 (HPP) beserta Penjelasan`,
            tingkat: 'sulit',
            status: 'draft',
          },
        ],
      },
    },
  ],
  BTI: [
    {
      tingkat: 'B',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'Bentuk usaha tetap (BUT)',
            tipe: 'pg',
            pertanyaan: `Dua tenaga ahli Norvik AS, badan dari negara yang tidak memiliki P3B dengan Indonesia, memberikan jasa konsultansi kepada PT Sinar Logam di Batam selama tepat 60 hari dalam jangka waktu 12 bulan. Tidak ada tempat usaha tetap atau agen di Indonesia. Status Norvik AS menurut UU PPh adalah ...`,
            opsi: [
              { label: 'A', teks: `Bukan BUT, karena jasa harus diberikan lebih dari 60 hari dalam 12 bulan` },
              { label: 'B', teks: `BUT, karena jasa sudah diberikan 60 hari dalam 12 bulan` },
              { label: 'C', teks: `BUT, karena setiap pemberian jasa di Indonesia membentuk BUT` },
              { label: 'D', teks: `Bukan BUT, karena batas BUT jasa lebih dari 183 hari` },
            ],
            kunci: 'A',
            pembahasan: `Jawaban: A. Bukan BUT, karena jasa harus diberikan lebih dari 60 hari dalam 12 bulan
Pembahasan:
1. BUT jasa menurut UU PPh: pemberian jasa oleh pegawai atau orang lain lebih dari 60 hari dalam 12 bulan.
2. Jasa Norvik AS tepat 60 hari, belum lebih dari 60 hari → bukan BUT.
3. Tanpa BUT dan tanpa P3B, imbalan jasa dipotong PPh Pasal 26.
Pemberian jasa membentuk BUT bila dilakukan lebih dari 60 hari dalam jangka waktu 12 bulan (UU PPh Pasal 2 ayat (5)); tepat 60 hari belum memenuhi, sehingga imbalannya dipotong PPh Pasal 26.
Kenapa pilihan lain salah:
- B: Syaratnya lebih dari 60 hari; tepat 60 hari belum memenuhi.
- C: BUT jasa memerlukan jangka waktu lebih dari 60 hari dalam 12 bulan.
- D: 183 hari adalah uji subjek pajak orang pribadi, bukan BUT jasa.
Dasar hukum: UU PPh Pasal 2 ayat (5) beserta Penjelasan s.t.d.t.d. UU 6/2023; UU PPh Pasal 26 ayat (1)`,
            tingkat: 'sedang',
            status: 'draft',
          },
        ],
      },
    },
    {
      tingkat: 'B',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'Hubungan istimewa, harga perolehan & persediaan',
            tipe: 'pg',
            pertanyaan: `PT Alfa memiliki 80% saham PT Beta, dan PT Beta memiliki 40% saham PT Gama. PT Alfa tidak memiliki saham PT Gama secara langsung, dan tidak ada hubungan penguasaan atau keluarga lain. Hubungan antara PT Alfa dan PT Gama menurut UU PPh adalah ...`,
            opsi: [
              { label: 'A', teks: `Tidak ada hubungan istimewa, karena PT Alfa tidak memiliki saham PT Gama langsung` },
              { label: 'B', teks: `Ada hubungan istimewa, karena penyertaan tidak langsung PT Alfa pada PT Gama 32%` },
              { label: 'C', teks: `Tidak ada hubungan istimewa, karena kepemilikannya di bawah batas 50%` },
              { label: 'D', teks: `Ada hubungan istimewa hanya bila PT Alfa menguasai direksi PT Gama` },
            ],
            kunci: 'B',
            pembahasan: `Jawaban: B. Ada hubungan istimewa, karena penyertaan tidak langsung PT Alfa pada PT Gama 32%
Pembahasan:
1. Kriteria kepemilikan: penyertaan langsung atau tidak langsung paling rendah 25% (UU PPh Pasal 18 ayat (4) huruf a).
2. Penyertaan tidak langsung dihitung berantai: 80% × 40% = 32%.
3. 32% ≥ 25% → PT Alfa dan PT Gama mempunyai hubungan istimewa.
Hubungan istimewa ada bila penyertaan langsung atau tidak langsung paling rendah 25%; penyertaan tidak langsung PT Alfa pada PT Gama = 80% × 40% = 32%.
Kenapa pilihan lain salah:
- A: Penyertaan tidak langsung ikut dihitung: 80% × 40% = 32%.
- C: Batas hubungan istimewa 25%; 50% adalah ambang CFC.
- D: Penguasaan adalah kriteria alternatif; penyertaan tidak langsung 32% sudah cukup.
Dasar hukum: UU PPh Pasal 18 ayat (4) huruf a beserta Penjelasan s.t.d.d. UU 7/2021 (HPP)`,
            tingkat: 'sedang',
            status: 'draft',
          },
        ],
      },
    },
    {
      tingkat: 'B',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'Angsuran PPh Pasal 25 & SPT Tahunan PPh Badan',
            tipe: 'pg',
            pertanyaan: `PT Delta Samudra didirikan dan terdaftar pada Maret 2025, sehingga angsuran PPh Pasal 25 Tahun 2025 nihil. SPT Tahunan 2025 (Maret–Desember, 10 bulan) menunjukkan PPh terutang Rp200.000.000 dengan kredit PPh Pasal 22 dan 23 seluruhnya Rp50.000.000. Angsuran PPh Pasal 25 per bulan Tahun 2026 sesudah SPT disampaikan adalah ...`,
            opsi: [
              { label: 'A', teks: `Rp12.500.000` },
              { label: 'B', teks: `Rp20.000.000` },
              { label: 'C', teks: `Rp15.000.000` },
              { label: 'D', teks: `Rp0` },
            ],
            kunci: 'C',
            pembahasan: `Jawaban: C. Rp15.000.000
Pembahasan:
1. Wajib Pajak baru: angsuran PPh 25 pada tahun terdaftar nihil.
2. Sesudah SPT pertama disampaikan, dasar angsuran dibagi jumlah bulan bagian tahun pajak (10 bulan).
3. (Rp200.000.000 − Rp50.000.000) ÷ 10 = Rp15.000.000.
Sesudah SPT pertama yang meliputi bagian tahun pajak, angsuran = (PPh terutang − kredit) ÷ jumlah bulan bagian tahun pajak = (Rp200.000.000 − Rp50.000.000) ÷ 10 = Rp15.000.000.
Kenapa pilihan lain salah:
- A: Membagi 12; SPT pertama hanya meliputi 10 bulan, sehingga pembaginya 10.
- B: Tidak mengurangkan kredit PPh Pasal 22 dan 23.
- D: Angsuran nihil hanya pada tahun terdaftar; sesudah SPT pertama angsuran dihitung.
Dasar hukum: UU PPh Pasal 25 ayat (1) dan ayat (7) huruf a; PMK 81/2024 Pasal 237`,
            tingkat: 'sulit',
            status: 'draft',
          },
        ],
      },
    },
    {
      tingkat: 'C',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'Subjek pajak badan & kewajiban subjektif',
            tipe: 'pg',
            pertanyaan: `PT Sulawesi Mineral didirikan dan berkedudukan di Makassar; seluruh sahamnya dimiliki badan Korea Selatan. Pada 2026 perusahaan memperoleh laba usaha dalam negeri dan laba cabang di Filipina. Kedudukan PT Sulawesi Mineral sebagai subjek pajak adalah ...`,
            opsi: [
              { label: 'A', teks: `Subjek pajak luar negeri, karena seluruh sahamnya dimiliki badan asing` },
              { label: 'B', teks: `Subjek pajak dalam negeri, tetapi hanya atas penghasilan dari Indonesia` },
              { label: 'C', teks: `BUT dari pemegang sahamnya di Korea Selatan` },
              { label: 'D', teks: `Subjek pajak dalam negeri; laba dalam negeri dan laba cabang Filipina dipajaki` },
            ],
            kunci: 'D',
            pembahasan: `Jawaban: D. Subjek pajak dalam negeri; laba dalam negeri dan laba cabang Filipina dipajaki
Pembahasan:
1. Subjek pajak badan dalam negeri: didirikan ATAU bertempat kedudukan di Indonesia.
2. Wajib Pajak dalam negeri dikenai pajak atas penghasilan dari Indonesia dan luar Indonesia (UU PPh Pasal 4 ayat (1)).
3. Laba cabang Filipina digabung dalam SPT; pajak di Filipina dikreditkan dengan batas Pasal 24.
Badan yang didirikan atau bertempat kedudukan di Indonesia adalah subjek pajak dalam negeri (UU PPh Pasal 2 ayat (3) huruf b) dan dipajaki atas penghasilan dari seluruh dunia; kepemilikan asing tidak mengubahnya. Pajak di Filipina dapat dikreditkan menurut Pasal 24.
Kenapa pilihan lain salah:
- A: Badan yang didirikan atau berkedudukan di Indonesia adalah subjek dalam negeri walaupun pemiliknya asing.
- B: Wajib Pajak dalam negeri dipajaki atas penghasilan dari Indonesia maupun luar Indonesia.
- C: PT yang didirikan di Indonesia adalah badan tersendiri, bukan BUT pemegang sahamnya.
Dasar hukum: UU PPh Pasal 2 ayat (3) huruf b; UU PPh Pasal 4 ayat (1) s.t.d.d. UU 7/2021 (HPP)`,
            tingkat: 'mudah',
            status: 'draft',
          },
        ],
      },
    },
    {
      tingkat: 'C',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'CFC: saat diperolehnya dividen',
            tipe: 'pg',
            pertanyaan: `PT Lembah Hijau (35%) dan PT Pesisir Indah (20%), keduanya Wajib Pajak dalam negeri, bersama-sama memiliki 55% saham Orion Ltd., badan usaha luar negeri yang sahamnya tidak diperdagangkan di bursa. Batas waktu penyampaian SPT Orion Ltd. untuk Tahun Pajak 2025 di negaranya adalah 31 Maret 2026. Dividen atas penyertaan itu dianggap diperoleh pada ...`,
            opsi: [
              { label: 'A', teks: `31 Juli 2026` },
              { label: 'B', teks: `31 Maret 2026` },
              { label: 'C', teks: `30 Juni 2026` },
              { label: 'D', teks: `31 Juli 2025` },
            ],
            kunci: 'A',
            pembahasan: `Jawaban: A. 31 Juli 2026
Pembahasan:
1. Ambang CFC: penyertaan paling rendah 50%, sendiri atau bersama Wajib Pajak dalam negeri lain: 35% + 20% = 55%.
2. Saat diperolehnya dividen: akhir bulan keempat setelah batas waktu SPT badan luar negeri itu.
3. 31 Maret 2026 + 4 bulan → 31 Juli 2026; dilaporkan dalam SPT Tahunan 2026.
Penyertaan bersama Wajib Pajak dalam negeri 55% (≥ 50%) pada badan usaha luar negeri nonbursa membuat dividen dianggap diperoleh pada akhir bulan keempat setelah batas SPT badan itu: 31 Maret 2026 → 31 Juli 2026.
Kenapa pilihan lain salah:
- B: Memakai tanggal batas SPT itu sendiri; dividen dianggap diperoleh akhir bulan keempat setelahnya.
- C: Menghitung 3 bulan; yang benar akhir bulan keempat setelah batas SPT.
- D: Akhir bulan ketujuh setelah tahun pajak hanya dipakai bila tidak ada batas SPT; yang dipakai batas SPT 31 Maret 2026.
Dasar hukum: UU PPh Pasal 18 ayat (2) s.t.d.d. UU 7/2021 (HPP); PMK 107/PMK.03/2017 s.t.d.d. PMK 93/PMK.03/2019 Pasal 2`,
            tingkat: 'sulit',
            status: 'draft',
          },
        ],
      },
    },
  ],
  PBB: [
    {
      tingkat: 'C',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'Pembayaran, jatuh tempo & denda',
            tipe: 'pg',
            pertanyaan: `PT Rimba Lestari menerima SPPT PBB-P5L sektor perkebunan dengan PBB terutang Rp100.000.000 dan melunasinya tepat 3 bulan setelah tanggal jatuh tempo. Denda administrasi yang ditagih dengan STP PBB adalah ...`,
            opsi: [
              { label: 'A', teks: `Rp6.000.000` },
              { label: 'B', teks: `Rp3.030.000` },
              { label: 'C', teks: `Rp2.000.000` },
              { label: 'D', teks: `Rp48.000.000` },
            ],
            kunci: 'A',
            pembahasan: `Jawaban: A. Rp6.000.000
Pembahasan:
1. PBB yang tidak dibayar pada jatuh tempo dikenai denda administrasi 2% sebulan (UU PBB Pasal 11 ayat (3)).
2. Terlambat 3 bulan: 2% × Rp100.000.000 × 3 = Rp6.000.000, ditagih dengan STP PBB.
Denda PBB = 2% sebulan × pokok yang terlambat × jumlah bulan sejak jatuh tempo (maks 24 bulan): 2% × Rp100.000.000 × 3 = Rp6.000.000.
Kenapa pilihan lain salah:
- B: Memakai tarif bunga KMK UU KUP; denda PBB diatur UU PBB, yaitu 2% sebulan.
- C: Hanya menghitung satu bulan; denda dihitung untuk setiap bulan keterlambatan.
- D: Mengenakan 24 bulan; 24 bulan adalah batas maksimum, bukan jumlah tetap.
Dasar hukum: UU PBB Pasal 11 ayat (3) s.t.d.d. UU 12/1994; PMK 186/PMK.03/2019 Pasal 40 ayat (11) s.t.d.d. PMK 234/PMK.03/2022`,
            tingkat: 'mudah',
            status: 'draft',
          },
        ],
      },
    },
    {
      tingkat: 'C',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'Keberatan & upaya hukum non-keberatan',
            tipe: 'pg',
            pertanyaan: `PT Sawit Makmur menerima SPPT PBB-P5L sektor perkebunan Tahun 2026 pada 10 Maret 2026. Perusahaan menilai NJOP bumi per meter persegi dalam SPPT terlalu tinggi. Pernyataan yang benar mengenai upaya yang dapat ditempuh adalah ...`,
            opsi: [
              { label: 'A', teks: `Keberatan paling lambat 10 Juni 2026; pembayaran PBB ditunda sampai keputusan terbit` },
              { label: 'B', teks: `Keberatan paling lambat 10 Juni 2026; pengajuannya tidak menunda kewajiban membayar PBB` },
              { label: 'C', teks: `Permohonan pembetulan, karena penilaian NJOP termasuk kesalahan tulis` },
              { label: 'D', teks: `Keberatan paling lambat 10 April 2026, satu bulan sejak SPPT diterima` },
            ],
            kunci: 'B',
            pembahasan: `Jawaban: B. Keberatan paling lambat 10 Juni 2026; pengajuannya tidak menunda kewajiban membayar PBB
Pembahasan:
1. Penilaian NJOP adalah materi penetapan, sehingga upayanya keberatan, bukan pembetulan.
2. Keberatan diajukan dalam 3 bulan sejak SPPT diterima: 10 Maret 2026 → 10 Juni 2026.
3. Pengajuan keberatan tidak menunda kewajiban membayar PBB.
Keberatan PBB atas materi penetapan diajukan paling lama 3 bulan sejak SPPT diterima (10 Juni 2026) dan tidak menunda kewajiban membayar pajak (UU PBB Pasal 15).
Kenapa pilihan lain salah:
- A: Keberatan tidak menunda kewajiban membayar pajak (UU PBB Pasal 15).
- C: Pembetulan untuk salah tulis, hitung, atau penerapan ketentuan; keberatan atas penilaian NJOP adalah materi penetapan.
- D: Jangka keberatan PBB 3 bulan sejak SPPT diterima.
Dasar hukum: UU PBB Pasal 15; PMK 118/2024 Pasal 9`,
            tingkat: 'mudah',
            status: 'draft',
          },
        ],
      },
    },
    {
      tingkat: 'C',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'Objek & subjek PBB-P5L',
            tipe: 'pg',
            pertanyaan: `Di areal perkebunan PT Agro Lestari, bangunan pabrik pengolahan kelapa sawit selesai dibangun dan mulai dipakai pada September 2026. Bangunan pabrik tersebut dikenai PBB-P5L untuk pertama kali pada ...`,
            opsi: [
              { label: 'A', teks: `Tahun Pajak 2026, dihitung penuh sejak bangunan dipakai` },
              { label: 'B', teks: `Tahun Pajak 2026, proporsional untuk September–Desember` },
              { label: 'C', teks: `Tahun Pajak 2027, menurut keadaan objek pada 1 Januari 2027` },
              { label: 'D', teks: `Tahun Pajak 2027, menurut keadaan objek saat SPPT diterbitkan` },
            ],
            kunci: 'C',
            pembahasan: `Jawaban: C. Tahun Pajak 2027, menurut keadaan objek pada 1 Januari 2027
Pembahasan:
1. Subjek PBB adalah pihak yang nyata memiliki, menguasai, atau memanfaatkan bumi/bangunan (UU PBB Pasal 4 ayat (1)).
2. PBB terutang menurut keadaan objek pada 1 Januari tahun pajak (Pasal 8 ayat (2)).
3. Pada 1 Januari 2026 bangunan belum ada; pertama kali dinilai menurut keadaan 1 Januari 2027.
Saat yang menentukan PBB terutang adalah keadaan objek pada 1 Januari tahun pajak (UU PBB Pasal 8 ayat (2)); bangunan mulai ada September 2026, sehingga dikenai PBB mulai Tahun Pajak 2027.
Kenapa pilihan lain salah:
- A: PBB terutang menurut keadaan objek pada 1 Januari tahun pajak; pada 1 Januari 2026 bangunan belum ada.
- B: PBB tidak dihitung proporsional per bulan; saat yang menentukan adalah 1 Januari.
- D: Keadaan objek yang dipakai adalah 1 Januari, bukan tanggal terbit SPPT.
Dasar hukum: UU PBB Pasal 4 ayat (1) dan Pasal 8 ayat (2)`,
            tingkat: 'sedang',
            status: 'draft',
          },
        ],
      },
    },
  ],
  INT: [
    {
      tingkat: 'C',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'P3B: hak pemajakan & Formulir DGT',
            tipe: 'pg',
            pertanyaan: `PT Musik Nusantara membayar royalti Rp400.000.000 kepada Melodie BV, perusahaan Belanda. Tarif royalti dalam P3B Indonesia–Belanda 10%. Formulir DGT yang diserahkan Melodie BV tidak disahkan pejabat berwenang Belanda dan tidak dilampiri surat keterangan domisili. PPh Pasal 26 yang harus dipotong adalah ...`,
            opsi: [
              { label: 'A', teks: `Rp40.000.000` },
              { label: 'B', teks: `Rp0` },
              { label: 'C', teks: `Rp60.000.000` },
              { label: 'D', teks: `Rp80.000.000` },
            ],
            kunci: 'D',
            pembahasan: `Jawaban: D. Rp80.000.000
Pembahasan:
1. Tarif P3B hanya dipakai bila Formulir DGT memenuhi syarat, antara lain disahkan pejabat berwenang negara mitra atau dilampiri surat keterangan domisili (PMK 112/2025).
2. Formulir DGT Melodie BV tidak memenuhi syarat → tarif UU PPh Pasal 26 sebesar 20%.
3. 20% × Rp400.000.000 = Rp80.000.000.
Formulir DGT yang tidak disahkan pejabat berwenang dan tanpa surat keterangan domisili tidak sah, sehingga manfaat P3B tidak diberikan: PPh Pasal 26 = 20% × Rp400.000.000 = Rp80.000.000.
Kenapa pilihan lain salah:
- A: Memakai tarif P3B 10%; Formulir DGT yang tidak sah membuat tarif kembali ke UU PPh 20%.
- B: Royalti boleh dipajaki negara sumber; tanpa DGT sah tarifnya 20%.
- C: Tidak ada tarif 15% untuk kasus ini; tanpa DGT sah berlaku tarif UU PPh 20%.
Dasar hukum: UU PPh Pasal 26 ayat (1); PMK 112/2025 Pasal 8 dan Pasal 9`,
            tingkat: 'sedang',
            status: 'draft',
          },
        ],
      },
    },
    {
      tingkat: 'C',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'P3B: hak pemajakan & Formulir DGT',
            tipe: 'pg',
            pertanyaan: `Hikari Air Co., maskapai penduduk Jepang dengan Formulir DGT yang sah, memperoleh penghasilan dari angkutan kargo udara internasional Denpasar–Osaka. Berdasarkan P3B Indonesia–Jepang, hak pemajakan atas laba tersebut ...`,
            opsi: [
              { label: 'A', teks: `Hanya ada pada Jepang sebagai negara domisili maskapai` },
              { label: 'B', teks: `Ada pada Indonesia melalui PPh Pasal 26 sebesar 20%` },
              { label: 'C', teks: `Ada pada Indonesia dengan tarif terbatas sesuai P3B` },
              { label: 'D', teks: `Ada pada kedua negara; Jepang mengkreditkan pajak Indonesia` },
            ],
            kunci: 'A',
            pembahasan: `Jawaban: A. Hanya ada pada Jepang sebagai negara domisili maskapai
Pembahasan:
1. P3B membagi hak pemajakan per jenis penghasilan; laba penerbangan internasional diatur dalam Pasal 8.
2. Pasal 8 ayat (1): laba itu hanya dipajaki di negara domisili perusahaan.
3. Dengan Formulir DGT sah, Indonesia tidak memungut pajak atas laba Hikari Air Co.
Laba pengoperasian pesawat udara dalam lalu lintas internasional hanya dipajaki di negara domisili perusahaan (P3B Indonesia–Jepang Pasal 8 ayat (1)), sehingga Indonesia tidak memajakinya bila Formulir DGT sah.
Kenapa pilihan lain salah:
- B: Laba pengoperasian pesawat dalam lalu lintas internasional hanya dipajaki di negara domisili.
- C: Tarif terbatas berlaku untuk dividen, bunga, dan royalti, bukan laba penerbangan internasional.
- D: P3B memberi hak pemajakan hanya kepada negara domisili untuk laba ini.
Dasar hukum: P3B Indonesia–Jepang Pasal 8 ayat (1); PMK 112/2025 Pasal 21`,
            tingkat: 'mudah',
            status: 'draft',
          },
        ],
      },
    },
    {
      tingkat: 'C',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'Transfer pricing, TP Doc, MAP & APA',
            tipe: 'pg',
            pertanyaan: `Data Tahun Pajak 2025 PT Mitra Global: peredaran bruto Rp40 miliar; penjualan barang kepada pihak afiliasi Rp15 miliar; pembayaran jasa manajemen kepada pihak afiliasi Rp6 miliar; tidak ada afiliasi di yurisdiksi bertarif lebih rendah. Kewajiban dokumentasi harga transfer PT Mitra Global untuk Tahun Pajak 2026 adalah ...`,
            opsi: [
              { label: 'A', teks: `Tidak wajib, karena peredaran bruto tidak melebihi Rp50 miliar` },
              { label: 'B', teks: `Wajib dokumen induk dan dokumen lokal, karena jasa afiliasi lebih dari Rp5 miliar` },
              { label: 'C', teks: `Tidak wajib, karena transaksi barang afiliasi tidak melebihi Rp20 miliar` },
              { label: 'D', teks: `Wajib laporan per negara (CbCR) saja, tanpa dokumen induk dan lokal` },
            ],
            kunci: 'B',
            pembahasan: `Jawaban: B. Wajib dokumen induk dan dokumen lokal, karena jasa afiliasi lebih dari Rp5 miliar
Pembahasan:
1. Kriteria (data tahun sebelumnya, alternatif): bruto > Rp50 miliar; barang afiliasi > Rp20 miliar; jasa, bunga, barang tidak berwujud, atau lainnya masing-masing > Rp5 miliar; atau afiliasi di yurisdiksi bertarif lebih rendah.
2. Bruto Rp40 miliar dan barang Rp15 miliar belum memenuhi, tetapi jasa Rp6 miliar > Rp5 miliar.
3. PT Mitra Global wajib menyelenggarakan dokumen induk dan dokumen lokal (tersedia paling lama 4 bulan setelah akhir tahun pajak).
Dokumen induk dan lokal wajib bila salah satu kriteria tahun sebelumnya terpenuhi; transaksi jasa afiliasi Rp6 miliar melebihi Rp5 miliar, walaupun bruto dan transaksi barang di bawah ambangnya (PMK 172/2023 Pasal 16).
Kenapa pilihan lain salah:
- A: Kriterianya alternatif; cukup satu kriteria terpenuhi.
- C: Ambang jasa (lebih dari Rp5 miliar) diuji tersendiri dan sudah terpenuhi.
- D: CbCR untuk entitas induk dengan peredaran bruto konsolidasi paling sedikit Rp11 triliun.
Dasar hukum: PMK 172/2023 Pasal 16 ayat (2) dan ayat (3)`,
            tingkat: 'sedang',
            status: 'draft',
          },
        ],
      },
    },
    {
      tingkat: 'C',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'Transfer pricing, TP Doc, MAP & APA',
            tipe: 'pg',
            pertanyaan: `PT Sentosa Global (tahun buku sama dengan tahun kalender) ingin mengajukan APA unilateral untuk periode Tahun Pajak 2028–2032. Permohonan APA tersebut harus diajukan dalam jangka waktu ...`,
            opsi: [
              { label: 'A', teks: `Juli sampai dengan Desember 2027` },
              { label: 'B', teks: `Kapan saja sebelum 1 Januari 2028` },
              { label: 'C', teks: `Januari sampai dengan Juni 2027` },
              { label: 'D', teks: `Bersamaan dengan SPT Tahunan 2027` },
            ],
            kunci: 'C',
            pembahasan: `Jawaban: C. Januari sampai dengan Juni 2027
Pembahasan:
1. Periode APA paling lama 5 tahun pajak: 2028–2032 memenuhi.
2. Permohonan diajukan 12 sampai 6 bulan sebelum periode APA dimulai (PMK 172/2023 Pasal 56).
3. 1 Januari 2028 − 12 bulan = Januari 2027; − 6 bulan = Juni 2027.
Permohonan APA diajukan paling cepat 12 bulan dan paling lambat 6 bulan sebelum periode APA dimulai; periode mulai 1 Januari 2028, sehingga jendelanya Januari–Juni 2027. Periode 2028–2032 (5 tahun pajak) masih dalam batas.
Kenapa pilihan lain salah:
- A: Permohonan diajukan paling cepat 12 bulan dan paling lambat 6 bulan sebelum periode APA dimulai (1 Januari 2028).
- B: Ada jendela waktu: 12 sampai 6 bulan sebelum periode APA dimulai.
- D: Permohonan APA diajukan sebelum periode APA dimulai, tidak bersama SPT.
Dasar hukum: UU PPh Pasal 18 ayat (3a) s.t.d.d. UU 7/2021 (HPP); PMK 172/2023 Pasal 56`,
            tingkat: 'sulit',
            status: 'draft',
          },
        ],
      },
    },
    {
      tingkat: 'C',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'Pertukaran informasi, bantuan penagihan & pajak minimum global',
            tipe: 'pg',
            pertanyaan: `Peredaran bruto konsolidasi grup PMN tempat PT Andalan Prima menjadi entitas konstituen (dalam juta euro): 2022: 690; 2023: 780; 2024: 720; 2025: 760. Penerapan pajak minimum global (PMK 136/2024) bagi grup tersebut untuk Tahun Pajak 2026 adalah ...`,
            opsi: [
              { label: 'A', teks: `Tidak berlaku, karena ambang tidak terpenuhi 4 tahun berturut-turut` },
              { label: 'B', teks: `Tidak berlaku, karena peredaran bruto 2024 di bawah EUR750 juta` },
              { label: 'C', teks: `Berlaku hanya bila peredaran bruto konsolidasi lebih dari Rp11 triliun` },
              { label: 'D', teks: `Berlaku, karena ambang EUR750 juta terpenuhi pada 2 dari 4 tahun pajak sebelumnya` },
            ],
            kunci: 'D',
            pembahasan: `Jawaban: D. Berlaku, karena ambang EUR750 juta terpenuhi pada 2 dari 4 tahun pajak sebelumnya
Pembahasan:
1. Uji ambang memakai 4 tahun pajak sebelum tahun pengenaan: 2022–2025.
2. Yang mencapai EUR750 juta: 2023 (780) dan 2025 (760) → 2 dari 4 tahun.
3. Pajak minimum global berlaku bagi grup itu untuk Tahun Pajak 2026.
Pajak minimum global berlaku bila peredaran bruto konsolidasi grup paling sedikit EUR750 juta pada paling sedikit 2 dari 4 tahun pajak sebelumnya; 2023 (780) dan 2025 (760) memenuhi, sehingga berlaku untuk 2026.
Kenapa pilihan lain salah:
- A: Syaratnya paling sedikit 2 dari 4 tahun pajak sebelumnya, tidak harus berturut-turut.
- B: Ambang tidak diuji pada satu tahun saja; 2023 dan 2025 sudah memenuhi.
- C: Rp11 triliun adalah ambang laporan per negara (CbCR).
Dasar hukum: PMK 136/2024 Pasal 2 ayat (1)`,
            tingkat: 'sedang',
            status: 'draft',
          },
        ],
      },
    },
    {
      tingkat: 'C',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'P3B: bentuk usaha tetap',
            tipe: 'pg',
            pertanyaan: `Kontraktor penduduk Jepang dengan Formulir DGT yang sah membangun gudang di Cikarang dari 1 Februari sampai 15 Juli 2026 (165 hari). Tidak ada proyek lain dan tidak ada pihak erat terkait di lokasi itu. Menurut P3B Indonesia–Jepang, status kontraktor tersebut adalah ...`,
            opsi: [
              { label: 'A', teks: `Bukan BUT; laba usahanya hanya dipajaki di Jepang` },
              { label: 'B', teks: `BUT, karena UU PPh tidak membatasi jangka waktu proyek konstruksi` },
              { label: 'C', teks: `BUT, karena kegiatannya lebih dari 60 hari dalam 12 bulan` },
              { label: 'D', teks: `Bukan BUT, tetapi pembayarannya dipotong PPh Pasal 26 sebesar 20%` },
            ],
            kunci: 'A',
            pembahasan: `Jawaban: A. Bukan BUT; laba usahanya hanya dipajaki di Jepang
Pembahasan:
1. UU PPh menyebut proyek konstruksi sebagai BUT tanpa batas waktu, tetapi dengan P3B dan DGT sah berlaku uji P3B.
2. P3B Indonesia–Jepang Pasal 5 ayat (3): proyek konstruksi menjadi BUT bila lebih dari 6 bulan.
3. 1 Februari–15 Juli 2026 = 165 hari, belum lebih dari 6 bulan → bukan BUT; laba usaha hanya dipajaki di Jepang.
P3B Indonesia–Jepang menetapkan proyek konstruksi sebagai BUT hanya bila berlangsung lebih dari 6 bulan; 165 hari belum melewati 6 bulan, sehingga tidak ada BUT dan laba usahanya hanya dipajaki di Jepang (Pasal 7 ayat (1)).
Kenapa pilihan lain salah:
- B: Dengan P3B dan Formulir DGT sah, uji waktu P3B yang dipakai: lebih dari 6 bulan.
- C: 60 hari adalah uji BUT jasa menurut UU PPh, bukan uji proyek konstruksi dalam P3B.
- D: Tanpa BUT, laba usaha dilindungi Pasal 7 P3B dan tidak dipotong PPh Pasal 26.
Dasar hukum: P3B Indonesia–Jepang Pasal 5 ayat (3) dan Pasal 7 ayat (1); PMK 112/2025 Pasal 22`,
            tingkat: 'sulit',
            status: 'draft',
          },
        ],
      },
    },
    {
      tingkat: 'C',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'P3B: bentuk usaha tetap',
            tipe: 'pg',
            pertanyaan: `Perusahaan penduduk Jepang membuka kantor di Medan yang semata-mata membeli biji kopi untuk dikirim ke kantor pusatnya. Kantor itu tidak menjual, tidak menutup kontrak penjualan, dan tidak ada pihak erat terkait yang menjalankan kegiatan pelengkap di Indonesia. Menurut P3B Indonesia–Jepang, kantor tersebut ...`,
            opsi: [
              { label: 'A', teks: `BUT, karena kantor termasuk bentuk BUT dalam Pasal 2 ayat (5) UU PPh` },
              { label: 'B', teks: `Bukan BUT, karena kegiatannya semata-mata pembelian yang bersifat penunjang` },
              { label: 'C', teks: `BUT, karena kantor itu beroperasi lebih dari 6 bulan` },
              { label: 'D', teks: `Bukan BUT, asalkan nilai pembelian setahun tidak melebihi Rp4,8 miliar` },
            ],
            kunci: 'B',
            pembahasan: `Jawaban: B. Bukan BUT, karena kegiatannya semata-mata pembelian yang bersifat penunjang
Pembahasan:
1. Pasal 5 ayat (4) P3B mengecualikan antara lain tempat usaha yang semata-mata untuk membeli barang atau mengumpulkan informasi.
2. Setelah MLI Pasal 13, pengecualian berlaku bila kegiatannya bersifat persiapan atau penunjang dan tidak dipecah dengan pihak erat terkait.
3. Kantor Medan hanya membeli untuk kantor pusat → bukan BUT.
Tempat usaha yang semata-mata dipakai untuk membeli barang bagi perusahaan dikecualikan dari BUT bila bersifat persiapan atau penunjang dan tidak dipecah dengan pihak erat terkait (P3B Indonesia–Jepang Pasal 5 ayat (4) jo. MLI Pasal 13).
Kenapa pilihan lain salah:
- A: Bila P3B berlaku, pengecualian BUT mengikuti P3B; kegiatan semata-mata membeli barang dikecualikan.
- C: Uji 6 bulan untuk proyek konstruksi; tempat usaha diuji dari sifat kegiatannya.
- D: Tidak ada ambang nilai; yang diuji sifat kegiatan persiapan atau penunjang.
Dasar hukum: P3B Indonesia–Jepang Pasal 5 ayat (4) jo. MLI Pasal 13; PMK 112/2025 Pasal 22`,
            tingkat: 'sedang',
            status: 'draft',
          },
        ],
      },
    },
    {
      tingkat: 'C',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'Metode penghindaran pajak berganda',
            tipe: 'pg',
            pertanyaan: `PT Dirga Persada (Wajib Pajak dalam negeri) memperoleh penghasilan dari Malaysia yang telah dipajaki di sana. Metode penghindaran pajak berganda yang diterapkan Indonesia atas penghasilan tersebut adalah ...`,
            opsi: [
              { label: 'A', teks: `Kredit penuh: seluruh pajak Malaysia dikreditkan berapa pun jumlahnya` },
              { label: 'B', teks: `Pembebasan: penghasilan dari Malaysia dikeluarkan dari PKP` },
              { label: 'C', teks: `Kredit biasa: penghasilan tetap masuk PKP, kredit paling banyak PPh Indonesia atasnya` },
              { label: 'D', teks: `Pembebasan dengan progresi: dibebaskan, tetapi dipakai menentukan tarif` },
            ],
            kunci: 'C',
            pembahasan: `Jawaban: C. Kredit biasa: penghasilan tetap masuk PKP, kredit paling banyak PPh Indonesia atasnya
Pembahasan:
1. Wajib Pajak dalam negeri dipajaki atas penghasilan seluruh dunia (UU PPh Pasal 4 ayat (1)).
2. Pajak luar negeri dikreditkan (Pasal 24 ayat (1)) dengan batas PPh Indonesia atas penghasilan itu (ayat (2)).
3. Itulah metode kredit biasa (ordinary credit), bukan kredit penuh atau pembebasan.
Indonesia memakai metode kredit biasa: penghasilan luar negeri tetap dimasukkan ke PKP, dan pajak luar negeri dikreditkan paling banyak sebesar PPh Indonesia atas penghasilan itu (UU PPh Pasal 24 ayat (1) dan (2)).
Kenapa pilihan lain salah:
- A: Indonesia membatasi kredit sebesar PPh Indonesia atas penghasilan itu (Pasal 24).
- B: Indonesia memajaki penghasilan seluruh dunia; penghasilan luar negeri tetap dipajaki lalu pajaknya dikreditkan.
- D: Itu metode pembebasan dengan progresi, bukan yang dipakai Indonesia.
Dasar hukum: UU PPh Pasal 4 ayat (1) dan Pasal 24 ayat (1)–(2)`,
            tingkat: 'mudah',
            status: 'draft',
          },
        ],
      },
    },
    {
      tingkat: 'C',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'P3B: residensi & tie breaker',
            tipe: 'pg',
            pertanyaan: `Tn. Kenji Mori menjadi penduduk Indonesia karena berada di Indonesia lebih dari 183 hari, dan juga penduduk Jepang menurut hukum Jepang. Untuk keperluan P3B Indonesia–Jepang, status residensi Tn. Kenji Mori ditentukan dengan ...`,
            opsi: [
              { label: 'A', teks: `Uji rumah tinggal tetap, lalu pusat kepentingan vital` },
              { label: 'B', teks: `Kewarganegaraan, sehingga ia penduduk Jepang` },
              { label: 'C', teks: `Uji 183 hari, sehingga ia penduduk Indonesia` },
              { label: 'D', teks: `Persetujuan bersama pejabat berwenang kedua negara` },
            ],
            kunci: 'D',
            pembahasan: `Jawaban: D. Persetujuan bersama pejabat berwenang kedua negara
Pembahasan:
1. Residensi ganda terjadi karena kedua negara menganggapnya penduduk menurut hukum domestik masing-masing.
2. Tie breaker mengikuti teks Pasal 4 P3B yang bersangkutan; tidak ada urutan uji tunggal.
3. P3B Indonesia–Jepang Pasal 4 ayat (2): diputus melalui persetujuan bersama.
Pasal 4 ayat (2) P3B Indonesia–Jepang menyerahkan residensi ganda orang pribadi kepada persetujuan bersama pejabat berwenang kedua negara, tanpa urutan uji fakta yang dapat diterapkan sepihak.
Kenapa pilihan lain salah:
- A: Urutan uji itu ada di P3B lain (misalnya Belanda); P3B Jepang langsung menyerahkan ke persetujuan bersama.
- B: Kewarganegaraan tidak dipakai dalam P3B Indonesia–Jepang untuk orang pribadi.
- C: 183 hari adalah uji domestik; residensi ganda diputus menurut Pasal 4 P3B.
Dasar hukum: P3B Indonesia–Jepang Pasal 4 ayat (2)`,
            tingkat: 'sulit',
            status: 'draft',
          },
        ],
      },
    },
    {
      tingkat: 'C',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'Anti-penghindaran P3B: treaty shopping, beneficial owner, PPT',
            tipe: 'pg',
            pertanyaan: `Harmoni BV, badan penduduk Belanda dengan Formulir DGT yang sah secara formal, menerima royalti dari PT Suara Indah. Menurut laporan keuangan nonkonsolidasinya, 65% penghasilan Harmoni BV dipakai untuk memenuhi kewajiban kepada pemegang sahamnya di negara yang tidak memiliki P3B dengan Indonesia. Perlakuan atas royalti tersebut adalah ...`,
            opsi: [
              { label: 'A', teks: `Harmoni BV bukan beneficial owner; manfaat P3B tidak diberikan dan dipotong tarif UU PPh` },
              { label: 'B', teks: `Harmoni BV beneficial owner karena pemilik hak secara hukum; tarif P3B berlaku` },
              { label: 'C', teks: `Tarif P3B tetap berlaku karena Formulir DGT sudah sah secara formal` },
              { label: 'D', teks: `Royalti dibebaskan dari PPh di Indonesia karena dipajaki di Belanda` },
            ],
            kunci: 'A',
            pembahasan: `Jawaban: A. Harmoni BV bukan beneficial owner; manfaat P3B tidak diberikan dan dipotong tarif UU PPh
Pembahasan:
1. Manfaat tarif P3B atas royalti hanya untuk beneficial owner.
2. Badan bukan BO bila memakai lebih dari 50% penghasilannya untuk memenuhi kewajiban kepada pihak lain (PMK 112/2025 Pasal 19 ayat (2)).
3. 65% > 50% → Harmoni BV bukan BO → PPh Pasal 26 dengan tarif UU PPh.
Badan yang memakai lebih dari 50% penghasilannya untuk memenuhi kewajiban kepada pihak lain bukan beneficial owner (PMK 112/2025 Pasal 19), sehingga manfaat P3B tidak diberikan dan royalti dipotong PPh Pasal 26 dengan tarif UU PPh.
Kenapa pilihan lain salah:
- B: Pemilik secara hukum belum tentu beneficial owner; badan yang memakai lebih dari 50% penghasilannya untuk kewajiban pihak lain bukan BO.
- C: Formulir DGT yang sah secara formal tidak cukup bila penerima bukan beneficial owner.
- D: Royalti boleh dipajaki negara sumber; tanpa BO, tarif kembali ke UU PPh.
Dasar hukum: PMK 112/2025 Pasal 19; UU PPh Pasal 26 ayat (1a)`,
            tingkat: 'sulit',
            status: 'draft',
          },
        ],
      },
    },
    {
      tingkat: 'C',
      kelompok: {
        soal: [
          {
            nomor: 1,
            lesson: 'Ruang lingkup & dasar P3B',
            tipe: 'pg',
            pertanyaan: `Terumbu Pte. Ltd., badan penduduk Singapura tanpa BUT di Indonesia, pada 2026 menerima bunga pinjaman Rp75.000.000 dari PT Laut Indah (Wajib Pajak dalam negeri) dan imbalan jasa Rp120.000.000 dari klien di Thailand atas jasa yang dikerjakan di Thailand. Penghasilan Terumbu Pte. Ltd. yang dapat dikenai PPh Indonesia adalah ...`,
            opsi: [
              { label: 'A', teks: `Bunga dan imbalan jasa dari Thailand` },
              { label: 'B', teks: `Hanya bunga dari PT Laut Indah` },
              { label: 'C', teks: `Tidak ada, karena ia Wajib Pajak luar negeri` },
              { label: 'D', teks: `Hanya imbalan jasa dari Thailand` },
            ],
            kunci: 'B',
            pembahasan: `Jawaban: B. Hanya bunga dari PT Laut Indah
Pembahasan:
1. Wajib Pajak dalam negeri dipajaki atas penghasilan seluruh dunia; Wajib Pajak luar negeri hanya atas penghasilan dari Indonesia.
2. Bunga dibayar PT Laut Indah (Wajib Pajak dalam negeri) → bersumber dari Indonesia, dipotong PPh Pasal 26 (dibatasi tarif P3B bila DGT sah).
3. Imbalan dari klien Thailand atas jasa di Thailand tidak bersumber dari Indonesia.
Wajib Pajak luar negeri hanya dikenai PPh atas penghasilan yang bersumber dari Indonesia (UU PPh Pasal 2 ayat (4) dan Pasal 26); bunga dari PT Laut Indah bersumber dari Indonesia, sedangkan imbalan dari klien Thailand tidak.
Kenapa pilihan lain salah:
- A: Wajib Pajak luar negeri hanya dipajaki atas penghasilan yang bersumber dari Indonesia.
- C: Wajib Pajak luar negeri tetap dipajaki atas penghasilan dari Indonesia melalui PPh Pasal 26.
- D: Jasa yang dikerjakan di Thailand untuk klien Thailand tidak bersumber dari Indonesia.
Dasar hukum: UU PPh Pasal 2 ayat (4) huruf d; UU PPh Pasal 26 ayat (1)`,
            tingkat: 'mudah',
            status: 'draft',
          },
        ],
      },
    },
  ],
};
