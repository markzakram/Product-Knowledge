# Product Knowledge

Basis pengetahuan produk lintas 12 platform: tahapan seleksi, subtes, materi,
mapping produksi konten, dan contoh soal beserta kunci dan pembahasannya.

**Datanya tinggal di folder `data/` sebagai TypeScript bersarang.** Tidak ada
database, tidak ada spreadsheet, tidak ada kredensial. Isinya ikut ter-bundle
saat build, sehingga halaman-halamannya pra-render jadi HTML statis.

Menambah isi = menulis kode, review lewat PR, commit. Riwayat git yang memegang
catatan siapa mengubah apa dan kenapa.

## Jalan di lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3100. Tidak perlu menyiapkan apa pun dulu.

## Kenapa data di kode, bukan di spreadsheet

| | Spreadsheet | File di repo |
| --- | --- | --- |
| Jejak perubahan | Nama yang dipilih sendiri dari dropdown | Author commit, diff, dan alasannya |
| Sebelum tayang | Langsung live, typo ikut live | Direview lewat PR |
| Relasi putus | Terdeteksi saat dibuka | Mustahil — tidak ada kolom penghubung |
| Salah nama field | Baris hilang diam-diam | Build gagal |
| Yang perlu dirawat | Service account, kuota API, cache, izin sheet | Tidak ada |

Yang dikorbankan: tim non-teknis tidak bisa menyunting sendiri. Itu diterima
karena isinya data referensi yang ditulis sekali per angkatan lalu jarang
berubah — bukan data operasional harian.

## Struktur data

Bersarang, tanpa `*_id` sama sekali:

```
Platform → Tes → Angkatan → Tahapan → Subtes → Kelompok → Soal
                     ↘ Info Seleksi
                     ↘ Sumber
```

Setiap soal tinggal di dalam **Kelompok**. Kelompok memegang satu stimulus
(narasi, passage, atau set gambar) dan soal-soal yang memakainya. Soal yang
berdiri sendiri cukup jadi kelompok tanpa stimulus — seragam begitu supaya tidak
perlu membedakan dua bentuk saat dirender.

Folder di bawah `data/` mengikuti hierarkinya, satu tahapan satu file:

```
data/
  index.ts                             daftar 12 platform
  jadipcpm/
    index.ts                           platform
    pcpm-bi/
      index.ts                         tes
      a41/
        index.ts                       angkatan: info, sumber, urutan tahapan
        t1-seleksi-potensi-dasar.ts
        t2-seleksi-pengetahuan-teknis.ts
        …
  jadisekdin/
    bersama/
      skd-2026.ts                      SKD, dipakai SEMUA sekolah kedinasan
    ipdn/
      index.ts
      a2026/ index.ts, t1-administrasi.ts, t3-tkbi.ts, …
    pkn-stan/
      index.ts
      a2026/ index.ts, t1-administrasi.ts, t3-lanjutan.ts
public/gambar/…                        gambar soal dan stimulus
```

### Tahapan yang dipakai bersama

SKD identik di seluruh sekolah kedinasan, jadi ia ditulis **sekali** di
`data/jadisekdin/bersama/skd-2026.ts` lalu dirujuk dari IPDN dan PKN STAN.
Kalau ketentuan SKD berubah, satu file disunting dan semua sekolah ikut berubah
— tidak ada risiko salah satunya tertinggal.

Karena itu **nomor tahap tidak ditanam di dalam `nama`**. SKD adalah tahap ke-2
di IPDN dan juga di PKN STAN, tapi objeknya sama persis; menulis "Tahap 2" di
namanya akan salah begitu ada sekolah yang menaruhnya di posisi lain. Aplikasi
menomori tahapan dari urutannya lewat `labelTahapan()`.

### Menambah angkatan baru

1. Buat folder di bawah tes-nya, mis. `data/jadipcpm/pcpm-bi/a42/`.
   Cara tercepat: salin folder angkatan sebelumnya, lalu revisi yang berubah.
2. Satu file per tahapan, lalu daftarkan di `index.ts` angkatan itu.
3. Daftarkan angkatan di `index.ts` tes, dan seterusnya sampai `data/index.ts`.
4. `npm run build` — compiler memeriksa bentuknya.
5. Buka `/cek-data` — memeriksa isinya.
6. Commit dan buka PR.

### Setoran lewat Excel

Untuk naskah dari orang non-teknis, Excel tetap bisa dipakai sebagai **format
setoran**. Template-nya ada di root proyek.

```bash
npm run impor -- "Template Spreadsheet Master - Product Knowledge.xlsx" \
  JADIPCPM.PCPMBI.41 data/jadipcpm/pcpm-bi/a41
```

Argumen terakhir adalah FOLDER angkatan. Skrip menulis `index.ts` plus satu
file per tahapan, lalu **diff-nya direview sebelum commit**. Naskah
masuk lewat jalur yang mereka bisa; yang tayang tetap lewat review.

## Halaman

| Rute | Isi |
| --- | --- |
| `/` | Daftar 12 platform, dengan penanda mana yang sudah terisi |
| `/<platform>` | Tes dan angkatan, mis. `/jadipcpm` |
| `/<platform>/<tes>/<angkatan>` | Tahapan, subtes, info seleksi, sumber |
| `/<platform>/<tes>/<angkatan>/<tahapan>/<subtes>` | Spesifikasi, materi, mapping, contoh soal |
| `/cari?q=` | Pencarian lintas semua isi termasuk opsi dan pembahasan soal |
| `/dashboard` | Rekap kekurangan soal dan angkatan yang datanya belum lengkap |
| `/cek-data` | Kunci tak cocok, pembahasan kosong, nomor ganda, mapping janggal |

## Akses

Satu PIN, semua pengunjung hanya melihat. Penyuntingan ada di git, bukan di
aplikasi, jadi tidak ada peran kedua.

```
VIEW_PIN=   # kosong = gerbang mati, hanya untuk lokal
PIN_SALT=   # teks acak minimal 16 karakter, untuk tanda tangan cookie
```

Perlu dicatat terbuka: PIN bersama tidak bisa dicabut per orang. Kalau ada yang
keluar dari tim, PIN harus diganti untuk semua.

**View-only bukan berarti boleh dilihat siapa saja.** Isinya contoh soal dan
riset kompetitif. Jangan kosongkan `VIEW_PIN` di produksi.

## Deploy ke Vercel

1. Push repo ini ke GitHub.
2. Di Vercel: **Add New Project** → pilih repo-nya. Framework terdeteksi
   otomatis sebagai Next.js.
3. **Project Settings → Environment Variables**: isi `VIEW_PIN` dan `PIN_SALT`.
   Keduanya harus diisi bersamaan. Kalau `VIEW_PIN` diisi tapi `PIN_SALT`
   kosong, PIN yang benar pun ditolak — aplikasi akan mengatakannya, tapi
   lebih baik tidak sampai ke situ.
4. Deploy.

Sudah diuji: clone bersih dari repo ini, `npm install` tanpa lockfile, lalu
`npm run build` — berhasil. Itu persis urutan yang dijalankan Vercel.

Tidak ada kredensial Google, tidak ada spreadsheet yang perlu dibagikan.
Setiap perubahan isi = commit baru = deploy baru.

`package-lock.json` sengaja tidak di-commit, mengikuti keputusan yang sudah
diambil di `task-tracker-vercel`.

## Cara kerja pemeriksaan

Dua lapis, dan keduanya berjalan sebelum apa pun tayang:

1. **Compiler.** Salah nama field, tipe keliru, angkatan yang lupa didaftarkan —
   semuanya menggagalkan `npm run build`.
2. **`/cek-data`.** Yang tidak bisa dilihat compiler: kunci jawaban yang tidak
   menunjuk opsi mana pun, pembahasan kosong, nomor soal ganda dalam satu
   subtes, dan `paket × soalPerPaket` yang tidak sama dengan `dibutuhkan`.

## Catatan angka

Kekurangan soal **dijumlahkan per subtes**, bukan per baris mapping. Angka
`tersedia` di sumber aslinya sering gabungan tryout dan latsol sekaligus;
menghitung per baris membuat TPK PCPM 41 terbaca kurang 175, padahal sebenarnya
225.

## Batas yang diketahui

- Gambar soal belum ada. Field `gambar` sudah disiapkan dan halaman sudah bisa
  merendernya; tinggal menaruh berkasnya di `public/gambar/`.
- Angka `tersedia` untuk Tahap 2 PCPM 41 masih gabungan, ditandai di field
  `catatan` pada mapping-nya.
- Baru 2 dari 12 platform terisi: JadiPCPM dan JadiSekdin.
- Sekolah kedinasan yang belum ditulis: SIPENCATAR (Kemenhub), STIN (BIN),
  Poltek SSN (BSSN), STIS (BPS), STMKG (BMKG), Poltekim/Poltekip.
- Angka mapping SKD diambil dari sheet berlabel "15 Paket", tetapi totalnya
  sama dengan 30 paket. Jumlah paket sengaja dikosongkan sampai maksud sheet
  itu dipastikan; catatannya ikut tampil di halaman subtes.
- Karena SKD dirujuk dua kali, ia terhitung dua kali di rekap `/cek-data` dan
  akan terhitung dua kali di dashboard kalau nanti kekurangannya positif.
  Saat ini ketersediaannya melebihi kebutuhan, jadi belum berdampak.
