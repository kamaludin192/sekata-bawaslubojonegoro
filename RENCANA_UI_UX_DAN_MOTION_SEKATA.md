# Master Rencana UI/UX & Motion Kelembagaan — SEKATA
**Badan Pengawas Pemilihan Umum Kabupaten Bojonegoro (v4.0-PARIPURNA)**

> **Status Keseluruhan:**
> - **Tahap 1 — Halaman Login (`login.html`):** **Selesai Dieksekusi & Terverifikasi** (Motion pra-login, state error/offline, dan pemolesan visual).
> - **Tahap 2 — Workspace Utama & Validasi QR (`index.html`, `verifikasi.html`, `app.js`, `main.css`):** **Selesai Dieksekusi & Terverifikasi** (`impeccable detect --json` = `[]`, 0 temuan).

---

## 1. Arah Sistem Desain Instansi (Acuan `ui-ux-pro-max` & `impeccable`)

Mengacu pada profil **Government / Public Service** dan pairing tipografi **Financial Trust** agar seluruh halaman SEKATA tampil konsisten, berwibawa, dan bebas kesan template generik:

| Elemen Sistem | Nilai / Standar yang Ditetapkan | Alasan & Makna Kelembagaan |
|---|---|---|
| **Tipografi Utama** | `IBM Plex Sans` (UI, judul, isi) + `IBM Plex Mono` (`tabular-nums` untuk rupiah, kode kegiatan, NIP, tenggat) | Tegas, berwibawa, dan sangat akurat untuk tabel angka keuangan serta dokumen kedinasan. |
| **Warna Utama** | Navy Kedinasan `#0F172A` (Tirai `#0B1120`) & Marun Bawaslu `#881337` (Hover `#700F2D`) | Menjaga identitas resmi Bawaslu tanpa gradasi mencolok atau pola dekoratif berlebihan. |
| **Aksen & Semantik** | Emas Kehormatan `#B45309` / `#D97706`, Hijau Realisasi `#047857`, Peringatan `#B45309`, Error `#BE123C` | Kontras teks ≥ 4.5:1 pada mode terang maupun mode gelap. |
| **Permukaan (*Surface*)** | Kanvas `#F6F7F9`, Kartu `#FFFFFF` berbatas `1px solid #E2E8F0`; Dark Mode `#0B1120` & kartu `#111827` berbatas `#1F2937` | Bersih, tidak menyilaukan saat rapat pleno, dan bebas bayangan berlebih. |
| **Ikon & Aksesibilitas** | Ikon SVG konsisten, `focus-visible` ring `#881337`, tanpa emoji sebagai ikon, dan jalur `prefers-reduced-motion` | Ramah navigasi keyboard, layar sentuh, pembaca layar, serta kondisi koneksi lambat/terputus. |

---

## 2. Tahap 1 — Halaman Login, Motion Pra-Login & Ketahanan (`login.html`) ✅ *Sudah Dieksekusi*

### A. Tesis & Sekuens Motion Pra-Login (`#loginIntroCurtain`)
* **Momen Fokal (*Focal Moment*):** **"Pengesahan Segel & Pembukaan Tirai Ruang Kerja"** (±820 ms, kurva `cubic-bezier(0.16, 1, 0.3, 1)`).
* **Alur Sekuens:**
  1. **0 ms (`<head>`):** Skrip sinkron menandai `js-intro-active` (atau `js-intro-reduced`) serta memasang *watchdog timer* `1.450 ms` agar form tidak pernah terjebak tersembunyi jika skrip terganggu.
  2. **0 – 380 ms:** Tirai obsidian-slate (`#0B1120`) menampilkan lambang resmi [`assets/img/logo-bawaslu.png`](file:///e:/sekata-bawaslu-bojonegoro-paripurna-v4%20(1)/sekata-bawaslu-bojonegoro-paripurna/assets/img/logo-bawaslu.png) (`sekataSealReveal`), garis horizon marun-emas (`sekataLineDraw`), dan teks **SEKATA — Bawaslu Kabupaten Bojonegoro**.
  3. **400 – 820 ms:** Tirai tersingkap ke atas (`translate3d(0, -100%, 0)`), diikuti kemunculan elemen form secara berurutan (`0 ms`–`170 ms` *stagger*). Tersedia tombol **"Lewati (Esc)"** (atau klik tirai / tekan `Escape`, `Enter`, `Space`).
  4. **Submit → Dashboard:** Tombol berubah ke status memproses lalu halaman melakukan transisi keluar `.is-navigating-out` (`220 ms`) menuju [`index.html`](file:///e:/sekata-bawaslu-bojonegoro-paripurna-v4%20(1)/sekata-bawaslu-bojonegoro-paripurna/index.html).
* **Aksesibilitas & Performa:** Hanya menganimasikan properti GPU (`transform`, `opacity`, `clip-path`), serta meniadakan perpindahan spasial pada `@media (prefers-reduced-motion: reduce)`.

### B. State Error, Terputus Jaringan (Offline) & Poles Visual
* **Status Jaringan Real-Time (`#networkStatusBanner`):** Memantau `navigator.onLine`, event `offline`, dan `online` untuk menampilkan banner peringatan koneksi + tombol **"Periksa Ulang Koneksi"** (mengecek keterjangkauan `backend/api/auth.php`), serta notifikasi hijau singkat saat koneksi pulih.
* **Ketahanan Tanpa CDN:** CSS *fallback* lokal pada [`assets/css/main.css`](file:///e:/sekata-bawaslu-bojonegoro-paripurna-v4%20(1)/sekata-bawaslu-bojonegoro-paripurna/assets/css/main.css) dan ikon **inline SVG** menjaga tampilan tetap utuh meski Tailwind/CDN tidak termuat saat offline.
* **Penanganan Error Autentikasi (`#loginErrorBanner` & Validasi Inline):**
  - Menutup celah *silent-bypass*: respons `401` dan `403` diblokir dengan pesan jelas (`sekataErrorShake` `220 ms` + error inline pada kolom terkait) sambil tetap mempertahankan teks email.
  - Untuk kendala jaringan / timeout (`AbortController` `8.000 ms`) / server belum aktif, tersedia dua aksi pemulihan: **"Coba Lagi"** dan **"Masuk Mode Simulasi Lokal (Offline)"**.
  - Dilengkapi toggle lihat/sembunyikan kata sandi dan deteksi *Caps Lock*.
* **Komposisi Visual yang Sudah Dipoles:** Menghapus gradasi ungu-marun dan pola segitiga diagonal, merapikan ukuran logo (`64–76 px`) agar tajam, menggunakan tombol solid `#881337`, menata form dalam kartu putih bersih, serta melipat kontrol *Peran Akses* dan *Unit / Divisi* ke dalam panel `<details>` **"Opsi simulasi peran lokal"** agar pas di desktop (`1280×800`) dan mobile (`390×844`).

---

## 3. Tahap 2 — Penyelarasan Workspace, Tampilan per Role & Validasi QR ✅ *Sudah Dieksekusi*

### A. Diagnosis Kesenjangan Saat Ini
1. **Ketidaksinkronan Visual:** [`index.html`](file:///e:/sekata-bawaslu-bojonegoro-paripurna-v4%20(1)/sekata-bawaslu-bojonegoro-paripurna/index.html), [`verifikasi.html`](file:///e:/sekata-bawaslu-bojonegoro-paripurna-v4%20(1)/sekata-bawaslu-bojonegoro-paripurna/verifikasi.html), dan global `body` di [`assets/css/main.css`](file:///e:/sekata-bawaslu-bojonegoro-paripurna-v4%20(1)/sekata-bawaslu-bojonegoro-paripurna/assets/css/main.css) masih memakai `Plus Jakarta Sans` serta tombol gradasi (`from-[#881337] to-[#0F172A]`), belum seragam dengan [`login.html`](file:///e:/sekata-bawaslu-bojonegoro-paripurna-v4%20(1)/sekata-bawaslu-bojonegoro-paripurna/login.html).
2. **Tampilan Seragam untuk Semua Role:** Seluruh 5 peran (`Admin`, `Pimpinan`, `Kordiv`, `PIC`, `Operator`) melihat susunan beranda dan menu yang sama persis.
3. **Mode Gelap (*Dark Mode*) & Fokus Keyboard:** Badge semantik pastel (`bg-rose-50`, `bg-amber-50`, `bg-emerald-50`, `bg-sky-50`) belum memiliki penyesuaian kontras dark mode, dan input masih memakai `focus:outline-none` polos.
4. **Celah UX Workspace:** Belum ada *empty state* saat filter kosong, modal belum bisa ditutup dengan tombol `Escape`, `tab-tautan` masih memakai `<a href="#">`, tombol **Keluar** belum menghapus sesi `localStorage`, dan belum ada penanda koneksi offline di dashboard.
5. **Validasi QR [`verifikasi.html`](file:///e:/sekata-bawaslu-bojonegoro-paripurna-v4%20(1)/sekata-bawaslu-bojonegoro-paripurna/verifikasi.html):** Selalu menampilkan *"DOKUMEN TERVERIFIKASI SAH"* meskipun dibuka tanpa parameter QR yang valid.

### B. Perubahan Visual, Dark Mode & Aksesibilitas ([`assets/css/main.css`](file:///e:/sekata-bawaslu-bojonegoro-paripurna-v4%20(1)/sekata-bawaslu-bojonegoro-paripurna/assets/css/main.css) & [`index.html`](file:///e:/sekata-bawaslu-bojonegoro-paripurna-v4%20(1)/sekata-bawaslu-bojonegoro-paripurna/index.html))
1. **Penyeragaman Tipografi & Warna:**
   - Mengubah `body` menjadi `'IBM Plex Sans'` + `'IBM Plex Mono'` di [`assets/css/main.css`](file:///e:/sekata-bawaslu-bojonegoro-paripurna-v4%20(1)/sekata-bawaslu-bojonegoro-paripurna/assets/css/main.css) serta memuat font yang sama di [`index.html`](file:///e:/sekata-bawaslu-bojonegoro-paripurna-v4%20(1)/sekata-bawaslu-bojonegoro-paripurna/index.html) dan [`verifikasi.html`](file:///e:/sekata-bawaslu-bojonegoro-paripurna-v4%20(1)/sekata-bawaslu-bojonegoro-paripurna/verifikasi.html).
   - Mengubah 4 tombol CTA bergradasi di [`index.html`](file:///e:/sekata-bawaslu-bojonegoro-paripurna-v4%20(1)/sekata-bawaslu-bojonegoro-paripurna/index.html) serta `.nav-item.active` menjadi warna solid marun `#881337` (`hover:bg-[#700F2D]`).
2. **Perbaikan Kontras Dark Mode (`body.dark-mode`) & Keyboard Focus:**
   - Menyesuaikan warna latar/teks badge pastel (`rose-50`, `amber-50`, `emerald-50`, `sky-50`) dan menyelaraskan tema grafik `Chart.js` saat berpindah tema terang/gelap.
   - Menambahkan aturan `:focus-visible` dan `aria-label` pada tombol ikon-saja, dukungan `Escape` untuk menutup modal aktif, serta mengubah tautan palsu `<a href="#">` di `tab-tautan` menjadi `<button type="button">`.

### C. Tampilan Khusus & Ruang Kerja Adaptif per Role ([`index.html`](file:///e:/sekata-bawaslu-bojonegoro-paripurna-v4%20(1)/sekata-bawaslu-bojonegoro-paripurna/index.html) & [`assets/js/app.js`](file:///e:/sekata-bawaslu-bojonegoro-paripurna-v4%20(1)/sekata-bawaslu-bojonegoro-paripurna/assets/js/app.js))
1. **Identitas Pengguna, Panel Simulasi & Logout Bersih:**
   - Menampilkan kartu identitas pengguna aktif (Email, Peran, dan badge mode: *Server Terhubung* vs *Simulasi Lokal*) di sidebar.
   - Menempatkan `#roleSelector` dan `#activeDivisiScope` dalam panel lipat `<details>` **"Uji Simulasi Peran"** agar tampilan harian tetap bersih.
   - Mengubah link **Keluar** menjadi fungsi `handleLogout()` yang menghapus state sesi di `localStorage` dan memanggil logout `backend/api/auth.php` (bila tersedia) sebelum kembali ke [`login.html`](file:///e:/sekata-bawaslu-bojonegoro-paripurna-v4%20(1)/sekata-bawaslu-bojonegoro-paripurna/login.html).
2. **Blok Ruang Kerja Khusus Peran (`renderRoleWorkspace()`):**
   Menyajikan ringkasan dan aksi cepat yang berbeda sesuai kepentingan tiap peran di layar awal serta menyorot/menyaring menu yang relevan:

| Role | Judul Ruang Kerja | Fokus Konten Utama di Layar Awal | Akses Menu & Aksi Cepat (*Quick Actions*) |
|---|---|---|---|
| **Pimpinan** | *Meja Eksekutif Pimpinan* | • Antrean persetujuan perubahan SPJ berstatus `PENDING`<br>• Keputusan Pleno mendekati tenggat/lewat waktu<br>• Ringkasan serapan lintas divisi & Kurva-S | Fokus ke *Ikhtisar Eksekutif*, *Persetujuan Perubahan*, *Keputusan Pleno*, *Berita Acara*, dan *Mode Paparan Pleno*. Menyembunyikan entri teknis RENJA & Manajemen User. |
| **Kordiv** | *Kendali Divisi Pengampu* | • KPI Pagu & Serapan khusus divisi terkait<br>• Antrean persetujuan anggaran divisinya<br>• Aspirasi divisi yang siap diangkat ke pleno | Mengutamakan scope divisinya. Aksi cepat: *Verifikasi SPJ Divisi*, *Angkat Aspirasi ke Pleno*. |
| **PIC / Staf** | *Daftar Tugas & SPJ Saya* | • Keputusan pleno yang ditugaskan lengkap dengan *countdown* tenggat<br>• Status pengajuan serapan/SPJ pribadi<br>• Akses cepat unggah bukti tindak lanjut | Menonjolkan *Keputusan Pleno*, *Ajukan Serapan*, *Pojok Aspirasi*, dan *Jadwal Kegiatan*. Menyembunyikan kontrol admin/revisi POK. |
| **Operator** | *Operasional Data RENJA & POK* | • Jumlah kegiatan belum terjadwal & pos `POTENSI GESER`<br>• Rekap revisi POK terbaru<br>• Akses cepat tambah pos & impor XLSX | Menonjolkan *Data RENJA & Revisi POK*, *Jadwal Kegiatan*, serta aksi *Tambah Kegiatan*, *Impor XLSX*, *Catat Revisi POK*. |
| **Admin** | *Tata Kelola Sistem Sekretariat* | • Ikhtisar menyeluruh lintas divisi<br>• Ringkasan akun aktif & log pengiriman email terbaru<br>• Peringatan dini deviasi anggaran | Akses penuh ke seluruh 9 tab termasuk *Manajemen Pengguna*, *Portal & Backup JSON*, dan *Audit Trail & Log Email*. |

### D. Empty States, Status Offline Workspace & Validasi QR (`verifikasi.html`)
* **Empty States Informatif (`assets/js/app.js`):** Menampilkan pesan jelas + tombol **"Reset Filter"** saat filter pencarian RENJA, Approval, Aspirasi, atau Pleno tidak menghasilkan data.
* **Indikator Offline Workspace (`index.html`):** Banner informasi saat koneksi terputus di tengah sesi kerja agar pengguna mengetahui data sementara tersimpan lokal.
* **Validasi Parameter Nyata di [`verifikasi.html`](file:///e:/sekata-bawaslu-bojonegoro-paripurna-v4%20(1)/sekata-bawaslu-bojonegoro-paripurna/verifikasi.html):** Membedakan QR dengan register sah (`BWS-BJN-...`) vs parameter kosong/tidak lengkap (status peringatan agar pengguna memindai ulang dokumen resmi), dilengkapi tombol **"Salin ID Dokumen"**, **"Cetak Bukti Validasi"**, dan CSS *fallback* offline.

---

## 4. Batasan yang Dijaga (Tidak Diubah)
* Struktur database ([`database/schema.sql`](file:///e:/sekata-bawaslu-bojonegoro-paripurna-v4%20(1)/sekata-bawaslu-bojonegoro-paripurna/database/schema.sql)) dan endpoint PHP backend (`backend/api/*.php`) tidak diubah.
* Seluruh data *seed* awal (`INITIAL_*`), ekspor/impor Excel (`SheetJS`), QR-Code (`qrcodejs`), serta Backup/Restore `.JSON` tetap dipertahankan penuh.
* Desain [`login.html`](file:///e:/sekata-bawaslu-bojonegoro-paripurna-v4%20(1)/sekata-bawaslu-bojonegoro-paripurna/login.html) yang sudah selesai di Tahap 1 tetap dijaga dan tidak dirombak ulang.

---

## 5. Status & Hasil Verifikasi
* **Verifikasi Tahap 1 (Lulus):** `impeccable shot` (`1280×800` & `390×844`), `impeccable motion-capture` pada alert error (`220 ms` normal vs `0 ms` reduced-motion), dan `impeccable detect --json` menghasilkan `[]` (0 temuan).
* **Verifikasi Tahap 2 (Lulus):**
  1. `impeccable detect --json` pada [`index.html`](file:///e:/sekata-bawaslu-bojonegoro-paripurna-v4%20(1)/sekata-bawaslu-bojonegoro-paripurna/index.html), [`verifikasi.html`](file:///e:/sekata-bawaslu-bojonegoro-paripurna-v4%20(1)/sekata-bawaslu-bojonegoro-paripurna/verifikasi.html), [`login.html`](file:///e:/sekata-bawaslu-bojonegoro-paripurna-v4%20(1)/sekata-bawaslu-bojonegoro-paripurna/login.html), [`assets/css/main.css`](file:///e:/sekata-bawaslu-bojonegoro-paripurna-v4%20(1)/sekata-bawaslu-bojonegoro-paripurna/assets/css/main.css), dan [`assets/js/app.js`](file:///e:/sekata-bawaslu-bojonegoro-paripurna-v4%20(1)/sekata-bawaslu-bojonegoro-paripurna/assets/js/app.js) menghasilkan `[]` (**0 temuan**).
  2. `node --check` pada [`assets/js/app.js`](file:///e:/sekata-bawaslu-bojonegoro-paripurna-v4%20(1)/sekata-bawaslu-bojonegoro-paripurna/assets/js/app.js) lulus tanpa galat sintaks.
  3. Inspeksi visual screenshot ter-render (`impeccable shot`): [`index.html`](file:///e:/sekata-bawaslu-bojonegoro-paripurna-v4%20(1)/sekata-bawaslu-bojonegoro-paripurna/index.html) (`1280×800` & `390×844`) dan [`verifikasi.html`](file:///e:/sekata-bawaslu-bojonegoro-paripurna-v4%20(1)/sekata-bawaslu-bojonegoro-paripurna/verifikasi.html) (kondisi QR valid `BWS-BJN-2026-001` & parameter tidak valid `INVALID` pada `1280×800`).
  4. *Catatan pengecualian pre-existing:* `.impeccable/config.json` mengabaikan peringatan font `Plus Jakarta Sans` pada rule lama jika masih terbaca, sementara seluruh halaman aktif kini menggunakan `IBM Plex Sans` dan `IBM Plex Mono`.
