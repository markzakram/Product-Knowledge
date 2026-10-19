# Product Knowledge

Basis pengetahuan produk lintas platform: tahapan seleksi, subtes, materi,
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
  index.ts                             daftar platform (`SEMUA_PLATFORM` dan `PLATFORM`)
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
    skd/
      index.ts                         tes SKD, dipakai SEMUA sekolah kedinasan
      a2026/ index.ts, t2-skd.ts, contoh-skd.ts
    ipdn/
      index.ts                         tes seleksi lanjutan IPDN
      a2026/ index.ts, t3-tkbi.ts, …
    pkn-stan/
      index.ts                         tes seleksi lanjutan PKN STAN
      a2026/ index.ts, t3-lanjutan.ts
public/gambar/…                        gambar soal dan stimulus
```

Chip kode subtes di halaman platform dan angkatan diturunkan dari `nama` (singkatan dalam kurung di akhir nama seperti `Penalaran Umum (PU)`, kalau tidak ada inisial katanya, dan nomor urut 1, 2, 3 untuk seluruh tahapan bila ada chip yang bentrok, lebih dari 4 huruf, atau kosong), bukan dari field `kode` yang hanya dipakai di URL.

Tahapan yang subtesnya dikerjakan serentak dalam satu sesi (seperti SKD: TWK, TIU, dan TKP dalam 100 menit) diberi `waktuBersama: true`. Dengan begitu `waktuMenit` tiap subtes dibaca sebagai waktu sesi dan dihitung sekali, tidak dijumlah. Tanpa penanda itu, durasi SKD terbaca 300 menit.

### Tahapan yang dipakai bersama

SKD identik di seluruh sekolah kedinasan, jadi ia tes sendiri di
`data/jadisekdin/skd/` (SKD Sekolah Kedinasan). IPDN dan PKN STAN hanya memuat
seleksi lanjutannya; seleksi administrasi dan alur lengkapnya ditulis di `info`
tiap sekolah. Kalau ketentuan SKD berubah, satu file disunting. Tautan lama
`/jadisekdin/ipdn/2026/skd/…` dan `/jadisekdin/pkn-stan/2026/skd/…` dialihkan
permanen ke `/jadisekdin/skd/2026/skd/…` di `next.config.mjs`.

Satu objek tahapan atau subtes masih boleh dirujuk oleh lebih dari satu angkatan
(kartu platform, daftar kelengkapan, dan pencarian menghitungnya sekali, sedangkan
total di `/cek-data`, dashboard, dan beranda masih per jalur), tetapi saat ini
tidak ada yang dipakai begitu.

**Nomor tahap tidak ditanam di dalam `nama`.** Angkatan hanya menulis tahapan
yang punya isi, jadi nomor tahap pertamanya belum tentu 1: nomor tiap tahapan
adalah `nomorAwal` angkatan (bawaan 1) ditambah posisinya, dengan SKD memakai
`nomorAwal: 2` dan seleksi lanjutan IPDN dan PKN STAN memakai `nomorAwal: 3`,
mengikuti alur resmi (tahap 1 seleksi administrasi, tahap 2 SKD). Aplikasi
menomori tahapan lewat `nomorTahapan()` dan `labelTahapan()`, bukan dari indeks
array.

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

### Menyembunyikan platform

Platform yang aplikasinya belum siap diberi `tampil: false` di objeknya (mis.
`data/jadibumn/index.ts`). Datanya tetap ada di repo dan tetap diperiksa
`/cek-data`, tetapi tidak muncul di halaman pembaca mana pun (beranda,
pencarian, banding, dashboard, kelengkapan, simulasi) dan rutenya, mis.
`/jadibumn`, 404. Untuk menampilkannya lagi, hapus barisnya; yang sedang
disembunyikan terlihat lewat `grep -rn "tampil: false" data`. Di kode,
`data/index.ts` mengekspor `SEMUA_PLATFORM` (lengkap, dipakai pemeriksa isi) dan
`PLATFORM` (yang tampil, dipakai semua halaman pembaca).

## Halaman

| Rute | Isi |
| --- | --- |
| `/` | Daftar platform yang tampil, dengan penanda mana yang sudah terisi |
| `/<platform>` | Tes dan angkatan, mis. `/jadipcpm` |
| `/<platform>/<tes>/<angkatan>` | Tahapan, lalu info seleksi (tampil penuh di bawah tahapan), lalu sumber. Daftar isi menaut ke tiap bagian: lengket di samping di layar lebar, blok lipat di atas di layar sempit |
| `/<platform>/<tes>/<angkatan>/<tahapan>/<subtes>` | Spesifikasi, materi, mapping, contoh soal |
| `/<platform>/<tes>/<angkatan>/simulasi` | Simulasi seluruh angkatan dari contoh soalnya: subtes berurutan, tiap bagian dengan waktunya sendiri. Hasil dan pembahasan tampil di rute yang sama. Hanya angkatan yang punya subtes dengan soal |
| `/<platform>/<tes>/<angkatan>/<tahapan>/<subtes>/simulasi` | Simulasi satu subtes. Hanya subtes yang punya soal untuk dikerjakan (bukan `bankSoal: false`, bukan hanya uraian) |
| `/cari?q=` | Pencarian lintas semua isi termasuk opsi dan pembahasan soal |
| `/dashboard` | Rekap kekurangan soal dan angkatan yang datanya belum lengkap |
| `/cek-data` | Kunci tak cocok, pembahasan kosong, nomor ganda, mapping janggal, versi yang tak cocok dengan catatan pembaruan |
| `/pembaruan` | Catatan pembaruan: tiap versi aplikasi dengan tanggal dan poin perubahannya, terbaru di atas |

### Mode simulasi

Contoh soal tiap subtes otomatis bisa dikerjakan sebagai simulasi di rute
`…/simulasi`, tanpa menulis apa pun khusus di data; soal `uraian` tidak ikut.
Soal `skala`, soal `tanpaKunci`, dan isian singkat yang kuncinya berupa kalimat
(lebih dari 24 karakter di luar spasi, atau 4 kata atau lebih) tidak dinilai
otomatis: kuncinya tetap tampil di hasil untuk dibandingkan sendiri, jadi tulis
kunci isian sependek mungkin bila ingin ikut dinilai. Bila contoh lebih banyak
dari `jumlahSoal`, soal yang dipakai disebar merata di seluruh daftar, bukan
diambil dari depan (urutan data tetap; kelompok yang stimulusnya berisi teks
atau gambar tetap utuh, jadi jumlahnya bisa lebih dari `jumlahSoal`, sedangkan
kelompok tanpa stimulus atau yang hanya berjudul dipecah per soal); bila lebih
sedikit, semuanya dipakai dan subtesnya berlabel "parsial". Batas waktu = `waktuMenit` ×
(soal yang dipakai ÷ `jumlahSoal`, paling besar 1); tanpa `waktuMenit`
simulasinya stopwatch tanpa batas. Tahapan `waktuBersama` (SKD) menjadi satu
sesi dengan satu timer di simulasi angkatan, dan di simulasi satu subtes
jatahnya porsi dari waktu sesi menurut jumlah soal tahapan itu.

### Versi dan catatan pembaruan

Nomor versi yang tampil (lencana `v…` di header, tautan "Pembaruan · v…" di dasar
tiap halaman, dan halaman `/pembaruan`) dibaca dari entri teratas
`src/lib/pembaruan.ts`, bukan diketik di tempat lain. Tiap rilis:

1. Tambahkan entri di **paling atas** `PEMBARUAN`: `versi`, `tanggal`
   (YYYY-MM-DD), dan `poin` yang ditulis untuk pembaca CS dan marketing.
2. Naikkan `version` di `package.json` ke angka yang sama.
3. Buka `/cek-data`. Ia menjadi temuan kalau versi `package.json` berbeda dari
   entri teratas, atau susunan catatannya salah (versi tidak menurun ke bawah,
   tanggal tidak sah, rilis tanpa poin).

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
   subtes, `paket × soalPerPaket` yang tidak sama dengan `dibutuhkan`, rumus
   LaTeX yang gagal diurai (di soal, penilaian subtes, dan info seleksi), dan
   versi `package.json` yang tidak sama dengan catatan pembaruan.

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
- JadiBeasiswa, JadiPrajurit, dan JadiPolisi belum punya tes sama sekali. Bersama
  platform lain yang aplikasinya belum siap, ketiganya disembunyikan (`tampil: false`)
  dari halaman pembaca.
- Sekolah kedinasan yang belum ditulis: SIPENCATAR (Kemenhub), STIN (BIN),
  Poltek SSN (BSSN), STIS (BPS), STMKG (BMKG), Poltekim/Poltekip.
- Angka mapping SKD CPNS 2026 diambil dari sheet berlabel "15 Paket", tetapi
  totalnya sama dengan 30 paket. Jumlah paket sengaja dikosongkan sampai maksud
  sheet itu dipastikan; catatannya ikut tampil di halaman subtes.
- Contoh soal SKD CPNS 2027 dan SKD Sekolah Kedinasan 2026 adalah satu paket
  110 soal (TWK 30, TIU 35, TKP 45) dari SKD Generator, ditulis sekali di
  `data/jadiasn/cpns/a2027/contoh-skd.ts` dan dipakai bersama kedua angkatan.
  Materi dan mapping keduanya mengikuti Mapping SKD 2027 (3 paket x 30, 35, dan
  45 soal). Hampir semua soalnya berstatus draft; 10 soal TIU (1 analogi kata,
  1 deret angka, 8 figural) berasal dari contoh riset CPNS 2027 karena belum ada
  di tryout generator. Kedua angkatan sengaja tidak punya target di
  `skrip/ke-data.mjs`, supaya paket ini tidak tertimpa data Markaz. Contoh lama
  (soal tulisan tangan, hasil Markaz, dan 125 contoh riset) masih ada di riwayat git.
