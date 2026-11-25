# DOKUMENTASI & PENJELASAN LENGKAP KODE SUMBER
## SEKATA — Sistem Elektronik Keputusan Pleno & Tata Kelola Anggaran
### Bawaslu Kabupaten Bojonegoro — Edisi Paripurna Lengkap (v4.0-PARIPURNA)

---

## 1. Ringkasan Eksekutif & Arsitektur Sistem

**SEKATA** (*Sistem Elektronik Keputusan Pleno & Tata Kelola Anggaran*) adalah sistem informasi internal yang dirancang khusus untuk memenuhi tata kelola anggaran dan pengawalan keputusan pleno di lingkungan **Badan Pengawas Pemilihan Umum (Bawaslu) Kabupaten Bojonegoro**.

Sistem ini memiliki keunggulan arsitektur ganda (**Dual-Mode Architecture**):
1. **Mode Mandiri / Klien Penuh (Client-Side Standalone with LocalStorage):** Dapat berjalan langsung di peramban web (*browser*) tanpa server database aktif, menggunakan `localStorage` dengan data awal (*mock data*) yang lengkap. Sangat andal untuk demonstrasi, simulasi rapat pleno luar kantor, atau lingkungan tanpa jaringan.
2. **Mode Server Penuh (Fullstack Web App via PHP REST API & MySQL):** Siap dihubungkan ke peladen web (Apache/Nginx) dan basis data MySQL/MariaDB dengan proteksi keamanan standar kedinasan (CSRF, enkripsi Bcrypt, PDO Prepared Statements, Session Guard, dan Transaksi Database).

---

## 2. Peta Struktur Direktori & Berkas

```
sekata-bawaslu-bojonegoro-paripurna/
│
├── README.md                          # Dokumentasi ringkas rilis v4.0-PARIPURNA
├── index.html                         # Halaman dashboard utama Single Page Application (SPA)
├── login.html                         # Halaman autentikasi masuk sistem
├── verifikasi.html                    # Halaman verifikasi publik keaslian dokumen via QR-Code
│
├── assets/
│   ├── css/
│   │   └── main.css                   # Berkas CSS kustom (identitas visual, tema gelap, print layout)
│   ├── img/
│   │   ├── logo-bawaslu.png           # Aset resmi lambang Bawaslu Kabupaten Bojonegoro
│   │   └── logo-bawaslu-transparent.png # Versi lambang Bawaslu dengan latar belakang transparan
│   └── js/
│       └── app.js                     # Mesin logika utama frontend (~1.500 baris kode JS)
│
├── backend/
│   ├── config.php                     # Konfigurasi koneksi basis data MySQL via PDO & Sesi
│   ├── cron_reminder_email.php        # Skrip otomatisasi pengingat tenggat pleno (H-30, H-7, Overdue)
│   │
│   ├── includes/
│   │   └── security.php               # Utilitas keamanan (CSRF Token & Otentikasi Berbasis Peran)
│   │
│   └── api/
│       ├── auth.php                   # Endpoint REST API autentikasi (login, logout, session check)
│       ├── approval.php               # Endpoint REST API alur persetujuan perubahan realisasi
│       ├── aspirasi.php               # Endpoint REST API forum usulan jajaran & upvote
│       ├── pleno.php                  # Endpoint REST API pencatatan & penyelesaian keputusan pleno
│       ├── renja.php                  # Endpoint REST API CRUD data RENJA & revisi pagu POK
│       ├── upload_bukti.php           # Endpoint REST API unggah berkas bukti SPJ & pleno aman
│       └── users.php                  # Endpoint REST API manajemen akun pengguna & status aktif
│
└── database/
    └── schema.sql                     # Skrip DDL tabel relasional, foreign key, & data awal
```

---

## 3. Bedah File Basis Data (`database/schema.sql`)

Berkas [`schema.sql`](file:///e:/sekata-bawaslu-bojonegoro-paripurna-v4%20(1)/sekata-bawaslu-bojonegoro-paripurna/database/schema.sql) berisi skema relasional lengkap untuk basis data `sekata_bawaslu_bojonegoro` dengan karakter `utf8mb4_unicode_ci`.

### Rincian 8 Tabel Utama:

1. **`divisi`**
   - Menyimpan daftar unit kerja struktural Bawaslu Bojonegoro:
     - `SDMO` (SDMO & Diklat)
     - `PP` (Pencegahan & Parmas)
     - `PPL` (Penanganan Pelanggaran)
     - `HPS` (Hukum & Penyelesaian Sengketa)
     - `SEK` (Sekretariat)

2. **`users`**
   - Menyimpan identitas aparatur, NIP, email dinas, jabatan, peran (*Role*), dan referensi `divisi_id`.
   - Menggunakan `password_hash` standar algoritma Bcrypt (`PASSWORD_BCRYPT`).
   - Kolom `role` berformat ENUM: `'Admin'`, `'Pimpinan'`, `'Kordiv'`, `'PIC'`, `'Operator'`.
   - Kolom `is_active` untuk suspensi akun tanpa menghapus riwayat data.

3. **`renja_kegiatan`**
   - Entitas inti Rencana Kerja dan Anggaran.
   - Kolom penting:
     - `tahun_anggaran`: Mendukung arsip multi-tahun (2025, 2026, 2027).
     - `kode_kegiatan`: Pengenal unik pos anggaran (misal: `RJ-2026-001`).
     - `pagu_semula` & `pagu`: Melacak pagu awal dan pagu terkini hasil revisi DIPA/POK.
     - `serapan`: Nominal realisasi anggaran yang sudah terserap.
     - `tahap_pencairan`: Tahapan perbendaharaan (`Belum Diajukan`, `Pengajuan SPJ`, `Verifikasi BPP`, `Terbit SPM`, `Cair SP2D`).
     - `status_kegiatan`: Status lapangan kegiatan (`BERJALAN`, `TERLAKSANA DAN TERSERAP`, `TERLAKSANA BELUM TERSERAP`, `BELUM TERLAKSANA`, `BELUM TERSERAP`, `POTENSI GESER`).

4. **`revisi_pagu_logs`**
   - *Audit trail* pergeseran anggaran internal / revisi POK.
   - Mencatat relasi `renja_id`, `nomor_revisi`, `pagu_sebelum`, `pagu_sesudah`, dan `keterangan`. Dilengkapi `ON DELETE CASCADE`.

5. **`aspirasi_usulan`**
   - Wadah forum gagasan & *bottom-up planning* dari staf pelaksana ke pimpinan.
   - Kategori usulan: `Pergeseran Anggaran`, `Perbaikan Teknis`, `Kendala Lapangan`, `Inovasi Pengawasan`.
   - Kolom `dukungan_suara` (*upvote*) untuk mengukur tingkat urgensi masalah di lapangan.
   - Kolom `status_usulan`: `DITAMPUNG`, `MASUK AGENDA PLENO`, `DISETUJUI JADI KEPUTUSAN`.

6. **`approval_perubahan`**
   - Pengendali perubahan realisasi anggaran (dua fase persetujuan / *maker-checker*).
   - PIC mengajukan pergeseran realisasi `serapan_lama` ke `serapan_baru` beserta bukti SPJ; Pimpinan/Kordiv/Admin menyetujui (`APPROVED`) atau menolak (`REJECTED`).

7. **`keputusan_pleno`**
   - Menata keputusan musyawarah pimpinan pleno mingguan/khusus.
   - Menghubungkan keputusan dengan PIC penanggung jawab (`pic_id`), divisi pengampu (`divisi_id`), dan batas waktu penuntasan (`tenggat_waktu`).
   - Menyimpan *flag* notifikasi: `reminder_h30_sent`, `reminder_h7_sent`, `overdue_escalated`.

8. **`email_logs`**
   - Catatan rekam jejak pengiriman surel otomatis oleh sistem cron (tujuan, jenis pengingat, kode referensi, status pengiriman).

---

## 4. Bedah File Backend & Lapisan Keamanan

### A. [`backend/config.php`](file:///e:/sekata-bawaslu-bojonegoro-paripurna-v4%20(1)/sekata-bawaslu-bojonegoro-paripurna/backend/config.php)
- Menginisialisasi sesi PHP (`session_start()`).
- Membuka koneksi `PDO` ke basis data MySQL dengan parameter:
  - `PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION` (memicu exception saat terjadi eror query SQL).
  - `PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC` (mengembalikan hasil query sebagai array asosiatif murni).
- Menangani kegagalan koneksi secara elegan dengan respons JSON berstatus HTTP 500.

### B. [`backend/includes/security.php`](file:///e:/sekata-bawaslu-bojonegoro-paripurna-v4%20(1)/sekata-bawaslu-bojonegoro-paripurna/backend/includes/security.php)
Lapisan pertahanan utama API dari serangan siber umum:
1. **CSRF Guard (`generateCsrfToken()` & `verifyCsrfToken()`):**
   - Membuat token kriptografis acak 32-byte (`bin2hex(random_bytes(32))`).
   - Validasi menggunakan `hash_equals()` untuk mencegah serangan *timing attack*.
2. **Session Timeout & Fixation Guard:**
   - Memeriksa `last_activity`. Sesi akan kedaluwarsa otomatis dalam 3.600 detik (1 jam) tidak aktif.
3. **Role-Based Access Control (`requireAuth(array $allowedRoles)`):**
   - Memastikan pemanggil API telah terautentikasi (`$_SESSION['user']`).
   - Melakukan validasi peran (*Role Authorization*). Jika peran pengguna tidak tercantum di `$allowedRoles`, sistem merespons HTTP 403 Forbidden.

### C. [`backend/cron_reminder_email.php`](file:///e:/sekata-bawaslu-bojonegoro-paripurna-v4%20(1)/sekata-bawaslu-bojonegoro-paripurna/backend/cron_reminder_email.php)
Skrip otomatisasi yang dirancang untuk dieksekusi secara berkala (misal via cron job Linux setiap pukul 06.00 WIB):
- Menyeleksi keputusan pleno yang belum berstatus `'SELESAI'`.
- Menghitung sisa hari menuju tenggat waktu (`DateTimeImmutable::diff`):
  - **H-30:** Mengirim pengingat awal ke PIC bersangkutan.
  - **H-7:** Mengirim peringatan mendesak mendekati batas waktu.
  - **Overdue (< 0 hari):** Mengeskalasi pengingat dengan tembusan otomatis (**CC**) ke alamat surel Pimpinan (`pimpinan@bojonegoro.bawaslu.go.id`) dan Sekretariat.
- Mencatat setiap hasil pengiriman ke tabel `email_logs` dan memperbarui status flag pengingat pada tabel `keputusan_pleno`.

---

## 5. Bedah Seluruh Endpoint REST API (`backend/api/`)

| File API | Metode HTTP | Deskripsi & Fitur Keamanan Khusus |
|---|---|---|
| [`auth.php`](file:///e:/sekata-bawaslu-bojonegoro-paripurna-v4%20(1)/sekata-bawaslu-bojonegoro-paripurna/backend/api/auth.php) | `GET` | Mengambil data sesi pengguna aktif & menghasilkan token CSRF baru. |
| | `POST` (login) | Autentikasi email & kata sandi dengan `password_verify`. Memperbarui `last_login`, memanggil `session_regenerate_id(true)` guna menangkal *session fixation*. |
| | `POST` (logout) | Menghancurkan sesi (`session_destroy`). |
| [`renja.php`](file:///e:/sekata-bawaslu-bojonegoro-paripurna-v4%20(1)/sekata-bawaslu-bojonegoro-paripurna/backend/api/renja.php) | `GET` | Mengambil seluruh pos kegiatan terfilter parameter tahun anggaran (`?ta=YYYY`). |
| | `POST` (create) | Menambah kegiatan baru (dibatasi peran Admin, Kordiv, Operator). Dilengkapi *Over-Budget Guard* (`serapan <= pagu`). |
| | `POST` (revisi_pagu) | Mencatat revisi POK dengan **Database Transaction** (`beginTransaction` / `commit`). Menerapkan aturan integritas: pagu baru tidak boleh lebih kecil dari realisasi anggaran yang sudah terserap. |
| [`approval.php`](file:///e:/sekata-bawaslu-bojonegoro-paripurna-v4%20(1)/sekata-bawaslu-bojonegoro-paripurna/backend/api/approval.php) | `GET` | Memuat daftar riwayat pengajuan perubahan realisasi anggaran. |
| | `POST` (create) | Mengajukan perubahan realisasi (status, tahap pencairan, nominal). Dicek terhadap pagu kegiatan. |
| | `POST` (decide) | Verifikasi oleh Admin/Pimpinan/Kordiv. Menggunakan query terkunci `SELECT ... FOR UPDATE` dalam transaksi untuk mencegah *race condition*. Jika `APPROVED`, sistem otomatis memperbarui `serapan`, `tahap_pencairan`, dan `status_kegiatan` pada tabel `renja_kegiatan`. |
| [`aspirasi.php`](file:///e:/sekata-bawaslu-bojonegoro-paripurna-v4%20(1)/sekata-bawaslu-bojonegoro-paripurna/backend/api/aspirasi.php) | `GET` | Mengambil daftar aspirasi per tahun anggaran diurutkan dari dukungan suara terbanyak. |
| | `POST` (create) | Menampung pemikiran, kendala lapangan, atau usulan pergeseran anggaran baru. |
| | `POST` (upvote) | Menambah jumlah `dukungan_suara` (+1). |
| | `POST` (update_status) | Memperbarui status usulan (misal diangkat ke pleno). |
| [`pleno.php`](file:///e:/sekata-bawaslu-bojonegoro-paripurna-v4%20(1)/sekata-bawaslu-bojonegoro-paripurna/backend/api/pleno.php) | `GET` | Memuat daftar keputusan sidang pleno diurutkan tenggat waktu terdekat. |
| | `POST` (create) | Mencatat keputusan sidang pleno baru dengan penugasan ke PIC dan divisi pengampu. |
| | `POST` (complete) | PIC/Admin menyelesaikan tindak lanjut keputusan pleno disertai unggahan berkas bukti dan catatan. |
| [`upload_bukti.php`](file:///e:/sekata-bawaslu-bojonegoro-paripurna-v4%20(1)/sekata-bawaslu-bojonegoro-paripurna/backend/api/upload_bukti.php) | `POST` | Mengunggah lampiran berkas SPJ atau bukti tindak lanjut pleno. Validasi MIME type berbasis konten (`finfo`), membatasi ukuran maksimal 10MB, dan menggunakan nama acak unik ber-timestamp (`date + random_bytes`). |
| [`users.php`](file:///e:/sekata-bawaslu-bojonegoro-paripurna-v4%20(1)/sekata-bawaslu-bojonegoro-paripurna/backend/api/users.php) | `GET` | Memuat daftar aparatur terdaftar. |
| | `POST` (create) | Menambah pengguna baru (khusus Admin) dengan kata sandi terenkripsi. |
| | `POST` (toggle_status)| Mengaktifkan/menonaktifkan akses pengguna. |

---

## 6. Bedah File Antarmuka Pengguna (Frontend HTML)

### A. [`login.html`](file:///e:/sekata-bawaslu-bojonegoro-paripurna-v4%20(1)/sekata-bawaslu-bojonegoro-paripurna/login.html)
- **Tampilan Visual:** Desain dua kolom elegan. Sisi kiri menampilkan identitas khas Bawaslu: palet Merah Marun (`#4C0519`) dan Emas Kehormatan (`#D97706`), ornamen geometris motif daun jati *Jonegoroan*, logo perisai pengawasan, serta tipografi *Plus Jakarta Sans*.
- **Mekanisme Otentikasi Cerdas:**
  - Pertama mencoba mengirimkan kredensial ke API backend (`backend/api/auth.php`).
  - Apabila backend belum terhubung/offline, sistem secara mulus beralih ke simulasi peran lokal (*graceful fallback*), menyimpan peran dan divisi yang dipilih ke `localStorage`, lalu mengarahkan pengguna ke ruang kerja utama `index.html`.

### B. [`index.html`](file:///e:/sekata-bawaslu-bojonegoro-paripurna-v4%20(1)/sekata-bawaslu-bojonegoro-paripurna/index.html)
Merupakan pusat kendali aplikasi dengan struktur Single Page Application (SPA):
- **Bilah Atas Lembaga (`.bawaslu-top-stripe`):** Garis aksen tricolor marun-emas khas Bawaslu.
- **Kop Surat Kedinasan (`.print-only`):** Otomatis muncul saat pengguna mencetak laporan (Ctrl+P atau tombol cetak), lengkap dengan logo, alamat kantor Jl. Pahlawan No. 7 Bojonegoro, dan garis ganda resmi.
- **Bilah Paparan Pleno (`#presentationExitBar`):** Khusus ditampilkan saat proyektor ruang sidang pleno diaktifkan.
- **Sidebar Navigasi:** Berisi 8 tab navigasi kerja, indikator badge notifikasi yang diperbarui secara dinamis, serta panel pengatur Peran Akses (*RBAC switcher*) dan *Divisi Scope*.
- **9 Panel Tab Utama (`.tab-panel`):**
  1. `tab-dashboard`: Kartu ringkasan KPI eksekutif, grafik realisasi per divisi, diagram status kegiatan, dan **Kurva-S RPD Kumulatif**.
  2. `tab-renja`: Tabel kegiatan kerja tahunan, filter pencarian, filter status, filter divisi, penanda pergeseran pagu, progress bar serapan, dan riwayat revisi POK.
  3. `tab-approval`: Antarmuka persetujuan pergeseran SPJ dua arah (*Maker-Checker*).
  4. `tab-aspirasi`: Papan aspirasi dan usulan jajaran, tombol dukungan suara (*upvote*), serta tombol "Angkat ke Agenda Pleno".
  5. `tab-pleno`: Matriks pelacakan keputusan pleno, penanggung jawab, penghitung mundur sisa hari (*countdown badge*), dan tombol penuntasan bukti.
  6. `tab-jadwal`: Kalender visual kegiatan pengawasan dan pleno dalam bentuk matriks waktu.
  7. `tab-users`: Tabel administrasi pengguna dan kewenangan peran akses.
  8. `tab-tautan`: Portal tautan eksternal (Srikandi, SPSE, Bawaslu Jatim) dan modul **Backup & Restore JSON mandiri**.
  9. `tab-logs`: Audit trail dan rekam jejak pengiriman surel otomatis pengingat pleno.
- **11 Modal Dialog Interaktif:**
  - `modalAspirasi`, `modalDimPleno`, `modalRevisiPagu`, `modalBeritaAcara`, `modalUser`, `modalPreviewDoc`, `modalCompletePleno`, `modalImport`, `modalRenja`, `modalEditApproval`, `modalPleno`.

### C. [`verifikasi.html`](file:///e:/sekata-bawaslu-bojonegoro-paripurna-v4%20(1)/sekata-bawaslu-bojonegoro-paripurna/verifikasi.html)
- Halaman validasi publik yang ditautkan ke QR-Code pada setiap lembar laporan resmi yang dicetak dari sistem SEKATA.
- Menerima parameter URL: `?id=...&ta=...&pagu=...&serapan=...`.
- Menampilkan status *"DOKUMEN TERVERIFIKASI SAH"*, nomor sidik jari digital dokumen, tahun anggaran, serta pagu dan serapan sah yang tercatat di pembukuan Sekretariat.

---

## 7. Bedah File Gaya & Estetika (`assets/css/main.css`)

Berkas [`main.css`](file:///e:/sekata-bawaslu-bojonegoro-paripurna-v4%20(1)/sekata-bawaslu-bojonegoro-paripurna/assets/css/main.css) mengimplementasikan kaidah visual sistem:
- **Tipografi:** Mengintegrasikan font `Plus Jakarta Sans` untuk keterbacaan tinggi dan `IBM Plex Mono` untuk angka keuangan, kode kegiatan, dan kode anggaran.
- **Identitas Visual Bawaslu & Bojonegoro:**
  - Kelas `.bawaslu-top-stripe`: Garis gradasi marun ke emas (`#881337 -> #9F1239 -> #D97706`).
  - Kelas `.jonegoroan-pattern`: Pola radial dot emas lembut dan garis silang marun terinspirasi motif geometris daun jati Bojonegoro.
- **Tabel Kepadatan Ganda (`table.table-compact`):** Mengurangi *padding* sel menjadi `0.42rem` dan ukuran teks `11.5px` agar data puluhan pos anggaran dapat dilihat sekaligus dalam satu layar kerja tanpa banyak menggulir.
- **Sticky Header (`.sticky-table thead th`):** Menjaga kepala kolom tabel tetap melayang di posisi atas saat tabel berisikan ratusan baris digulir ke bawah.
- **Mode Paparan Pleno (`body.presentation-mode`):** Menyembunyikan seluruh sidebar navigasi dan topbar, memperluas tabel dan grafik ke layar penuh (*fullscreen*) sehingga ideal untuk proyektor ruang rapat.
- **Mode Gelap Kedinasan (`body.dark-mode`):** Palet warna *slate* gelap (`#0B1120`, `#111827`, `#1E293B`) yang teduh dan ergonomis saat penyusunan laporan pleno larut malam.
- **Aturan Cetak Resmi (`@media print`):** Otomatis menyembunyikan elemen non-cetak (`.no-print`), menampilkan kop surat resmi (`.print-only`), mengatur orientasi kertas menjadi **A4 Landscape** dengan batas tepi *margin* rapi `12mm 14mm`.

---

## 8. Bedah Mendalam Skrip Utama (`assets/js/app.js`)

Berkas [`app.js`](file:///e:/sekata-bawaslu-bojonegoro-paripurna-v4%20(1)/sekata-bawaslu-bojonegoro-paripurna/assets/js/app.js) adalah jantung eksekusi frontend yang terdiri dari 1.499 baris kode JavaScript modular:

### A. Struktur Data Awal (*Seed State*) & Persistensi
Menyediakan koleksi data lengkap untuk 7 modul utama:
- `INITIAL_RENJA`: Data pos anggaran kegiatan per divisi, dilengkapi pagu semula, realisasi, dan tahap pencairan.
- `INITIAL_REVISI_PAGU`: Riwayat pergeseran pagu POK Bawaslu.
- `INITIAL_ASPIRASI`: Gagasan jajaran mengenai kendala lapangan dan usulan teknis.
- `INITIAL_PLENO`: Keputusan pleno dengan status penugasan dan tenggat waktu.
- `INITIAL_APPROVALS`: Pengajuan perubahan pencairan anggaran.
- `INITIAL_USERS`: Akun pejabat dan staf (Admin, Ketua, Kordiv, Analis Hukum, Bendahara).
- `INITIAL_LOGS`: Catatan riwayat aktivitas dan notifikasi sistem.
Setiap perubahan disimpan ke `localStorage` melalui fungsi `persistData()`, serta didukung tombol `resetDemoData()` untuk mengembalikan ke status awal.

### B. Mesin Visualisasi & Grafik (Chart.js)
Fungsi `renderCharts()` mengelola 3 grafik analitik:
1. **Budget Chart (`budgetChartInst`):** Diagram batang vertikal ganda yang membandingkan **Pagu Anggaran vs Realisasi Serapan** untuk 5 divisi kerja secara presisi.
2. **Status Kegiatan Chart (`statusChartInst`):** Diagram donat yang menyajikan proporsi status kegiatan: Berjalan, Terlaksana Terserap, Terlaksana Belum Terserap, Belum Terlaksana, Belum Terserap, dan Potensi Geser.
3. **Kurva-S Rencana Penarikan Dana vs Realisasi (`kurvaSChartInst`):**
   - Garis biru putus-putus (`Rencana Penarikan Dana / RPD Kumulatif`).
   - Garis hijau tebal dengan area arsiran (`Realisasi Aktual Kumulatif`).
   - Memberikan sinyal visual dini jika terjadi deviasi penyerapan anggaran yang lambat dibandingkan rencana triwulanan.

### C. Alur Bisnis: *Over-Budget Guard* & Integritas Anggaran
- Saat menambah kegiatan (`saveRenja`) atau mengajukan perubahan realisasi (`openEditApprovalModal` & `submitApprovalChange`), sistem memblokir tindakan apabila nilai serapan melebihi pagu yang dialokasikan:
  ```javascript
  if (serapan > pagu) {
      showToast("Over-Budget Guard: Nominal serapan awal tidak boleh melebihi pagu!", "error");
      return;
  }
  ```
- Pada modul revisi POK (`submitRevisiPagu`), pagu yang telah direvisi divalidasi tidak boleh diturunkan di bawah angka riil anggaran yang sudah terserap pada kegiatan terkait.

### D. Mesin Musyawarah Aspirasi & DIM Pleno Otomatis
- Setiap staf dapat menyuarakan masukan melalui formulir aspirasi. Jajaran lain dapat memberikan dukungan suara melalui fungsi `upvoteAspirasi(id)`.
- Kordiv/Pimpinan dapat mengklik tombol **"Angkat ke Pleno"** (`angkatKePleno(id)`), yang secara instan menyalin inti masalah menjadi draf keputusan sidang pleno.
- Fitur **Rangkuman Bahan Pleno / DIM (`openRangkumanDimPleno()`):** Mengompilasi seluruh aspirasi jajaran menjadi Matriks Daftar Inventarisasi Masalah (DIM) yang siap diproyeksikan dan dibahas bersama Ketua dan Anggota Bawaslu.

### E. Integrasi Excel (SheetJS) & QR-Code Generator
- **Ekspor Excel (`exportRenjaExcel()`):** Mengonversi data tabel RENJA aktif menjadi berkas spreadsheet `.xlsx` siap unduh dengan format penamaan otomatis `RENJA_Bawaslu_Bojonegoro_TA{TA}.xlsx`.
- **Unduh Format Template (`downloadTemplateExcel()`):** Menyediakan berkas pola untuk mempermudah PIC mengunggah kegiatan secara massal.
- **Impor Excel (`handleExcelUpload()`):** Membaca berkas `.xlsx` atau `.csv` yang diunggah pengguna, memetakan kolom-kolomnya ke struktur RENJA, memvalidasi integritas data, dan menggabungkannya ke sistem.
- **Generator QR-Code Resmi (`printOfficialReport()`):** Menggunakan pustaka `qrcodejs` untuk mencetak QR-Code dinamis di lembar cetak laporan, yang saat dipindai kamera gawai akan langsung membuka laman `verifikasi.html` dengan parameter validasi otentik.

### F. Pencadangan & Pemulihan Mandiri (Backup & Restore)
- `downloadJsonBackup()`: Mengemas seluruh basis data sistem (7 modul) menjadi satu berkas cadangan terenkapsulasi `.JSON`.
- `restoreJsonBackup(event)`: Mengunggah berkas cadangan `.JSON`, memverifikasi struktur berkas, lalu menimpa `localStorage` dan merender ulang seluruh komponen aplikasi tanpa perlu *refresh* halaman.

---

## 9. Matriks Hak Akses & Pembagian Peran Pengguna (RBAC)

| Modul / Fitur | Administrator | Pimpinan | Kordiv | PIC / Staf | Operator |
|---|:---:|:---:|:---:|:---:|:---:|
| **Lihat Dashboard & Kurva-S** | Ya | Ya | Ya | Ya | Ya |
| **Input Kegiatan RENJA Baru** | Ya | Tidak | Ya | Tidak | Ya |
| **Input Revisi Pagu POK** | Ya | Tidak | Ya | Tidak | Ya |
| **Ajukan Perubahan Serapan/SPJ**| Ya | Ya | Ya | Ya | Ya |
| **Setujui / Tolak Approval SPJ**| Ya | Ya | Ya | Tidak | Tidak |
| **Tuangkan Ide di Pojok Aspirasi**| Ya | Ya | Ya | Ya | Ya |
| **Angkat Aspirasi ke Pleno** | Ya | Ya | Ya | Tidak | Tidak |
| **Buat Keputusan Pleno Baru** | Ya | Ya | Ya | Tidak | Tidak |
| **Tindak Lanjut & Bukti Pleno**| Ya | Ya | Ya | Ya | Ya |
| **Unduh Berita Acara Sidang** | Ya | Ya | Ya | Ya | Ya |
| **Manajemen Pengguna (User)** | Ya | Tidak | Tidak | Tidak | Tidak |
| **Ekspor / Impor Excel** | Ya | Ya | Ya | Ya | Ya |
| **Cadangkan / Pulihkan JSON** | Ya | Ya | Tidak | Tidak | Tidak |

---

## 10. Panduan Menjalankan Sistem

### A. Menjalankan Mode Klien (Langsung Pakai)
1. Buka berkas [`login.html`](file:///e:/sekata-bawaslu-bojonegoro-paripurna-v4%20(1)/sekata-bawaslu-bojonegoro-paripurna/login.html) atau [`index.html`](file:///e:/sekata-bawaslu-bojonegoro-paripurna-v4%20(1)/sekata-bawaslu-bojonegoro-paripurna/index.html) menggunakan peramban modern (Google Chrome, Microsoft Edge, atau Mozilla Firefox).
2. Sistem langsung siap digunakan dengan seluruh fitur interaktif aktif berbasis `localStorage`.

### B. Menjalankan Mode Server Penuh (PHP + MySQL)
1. Salin folder `sekata-bawaslu-bojonegoro-paripurna` ke direktori web server (misalnya `htdocs` pada XAMPP/Laragon atau `/var/www/html/` pada Linux).
2. Buka `phpMyAdmin` atau terminal MySQL, lalu impor berkas [`database/schema.sql`](file:///e:/sekata-bawaslu-bojonegoro-paripurna-v4%20(1)/sekata-bawaslu-bojonegoro-paripurna/database/schema.sql).
3. Sesuaikan setelan kredensial basis data pada berkas [`backend/config.php`](file:///e:/sekata-bawaslu-bojonegoro-paripurna-v4%20(1)/sekata-bawaslu-bojonegoro-paripurna/backend/config.php) (`$DB_HOST`, `$DB_USER`, `$DB_PASS`, `$DB_NAME`).
4. Pastikan folder `uploads/bukti_spj/` dan `uploads/bukti_pleno/` memiliki izin tulis (*write permission*).
5. Pasang penugasan *cron job* untuk eksekusi berkala `backend/cron_reminder_email.php`:
   ```bash
   0 6 * * * /usr/bin/php /var/www/html/backend/cron_reminder_email.php > /dev/null 2>&1
   ```
6. Akses aplikasi melalui URL peladen lokal (misal: `http://localhost/sekata-bawaslu-bojonegoro-paripurna/login.html`).

---
*Dokumen ini disusun sebagai panduan arsitektur dan dokumentasi komprehensif kode sumber aplikasi SEKATA Bawaslu Kabupaten Bojonegoro.*
