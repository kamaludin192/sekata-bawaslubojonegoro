CREATE DATABASE IF NOT EXISTS sekata_bawaslu_bojonegoro CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE sekata_bawaslu_bojonegoro;

CREATE TABLE divisi (
    id INT AUTO_INCREMENT PRIMARY KEY,
    kode_divisi VARCHAR(20) NOT NULL UNIQUE,
    nama_divisi VARCHAR(100) NOT NULL
);

INSERT INTO divisi (kode_divisi, nama_divisi) VALUES
('SDMO', 'SDMO & Diklat'),
('PP', 'Pencegahan & Parmas'),
('PPL', 'Penanganan Pelanggaran'),
('HPS', 'Hukum & Penyelesaian Sengketa'),
('SEK', 'Sekretariat');

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nip VARCHAR(30) NULL,
    nama_lengkap VARCHAR(120) NOT NULL,
    jabatan VARCHAR(120) NOT NULL DEFAULT 'Staf Pelaksana',
    email VARCHAR(120) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('Admin', 'Pimpinan', 'Kordiv', 'PIC', 'Operator') NOT NULL DEFAULT 'PIC',
    divisi_id INT NULL,
    is_active TINYINT(1) NOT NULL DEFAULT 1,
    last_login DATETIME NULL,
    FOREIGN KEY (divisi_id) REFERENCES divisi(id) ON DELETE SET NULL
);

INSERT INTO users (nip, nama_lengkap, jabatan, email, password_hash, role, divisi_id) VALUES
('198805122015031002', 'Administrator Sekretariat', 'Kepala Subbagian Administrasi', 'sekretariat@bojonegoro.bawaslu.go.id', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Admin', 5),
('198204102010011001', 'Ketua Bawaslu Bojonegoro', 'Ketua Bawaslu Kabupaten Bojonegoro', 'pimpinan@bojonegoro.bawaslu.go.id', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Pimpinan', NULL),
('198509212014021004', 'Kordiv Pencegahan & Parmas', 'Koordinator Divisi Pencegahan, Parmas & Humas', 'kordiv.pp@bojonegoro.bawaslu.go.id', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Kordiv', 2),
('199207142019031008', 'Ahmad Fauzi, S.H.', 'Analis Hukum & Pengawasan', 'fauzi@bojonegoro.bawaslu.go.id', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'PIC', 2),
('199411032020122011', 'Siti Rahmawati, S.E.', 'Bendahara Pengeluaran Pembantu', 'siti.rahmawati@bojonegoro.bawaslu.go.id', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'PIC', 1);

CREATE TABLE renja_kegiatan (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tahun_anggaran YEAR NOT NULL DEFAULT 2026,
    kode_kegiatan VARCHAR(30) NOT NULL UNIQUE,
    nama_kegiatan VARCHAR(255) NOT NULL,
    kelompok_anggaran ENUM('Operasional', 'Non-Operasional') NOT NULL DEFAULT 'Non-Operasional',
    tipe_kegiatan VARCHAR(100) NOT NULL,
    divisi_id INT NOT NULL,
    tanggal_kegiatan DATE NULL,
    pagu_semula DECIMAL(15,2) NOT NULL DEFAULT 0.00,
    pagu DECIMAL(15,2) NOT NULL DEFAULT 0.00,
    serapan DECIMAL(15,2) NOT NULL DEFAULT 0.00,
    tahap_pencairan ENUM('Belum Diajukan', 'Pengajuan SPJ', 'Verifikasi BPP', 'Terbit SPM', 'Cair SP2D') NOT NULL DEFAULT 'Belum Diajukan',
    status_kegiatan ENUM('BERJALAN', 'TERLAKSANA DAN TERSERAP', 'TERLAKSANA BELUM TERSERAP', 'BELUM TERLAKSANA', 'BELUM TERSERAP', 'POTENSI GESER') NOT NULL DEFAULT 'BELUM TERLAKSANA',
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (divisi_id) REFERENCES divisi(id)
);

CREATE TABLE revisi_pagu_logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    renja_id INT NOT NULL,
    nomor_revisi VARCHAR(80) NOT NULL,
    pagu_sebelum DECIMAL(15,2) NOT NULL,
    pagu_sesudah DECIMAL(15,2) NOT NULL,
    keterangan TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (renja_id) REFERENCES renja_kegiatan(id) ON DELETE CASCADE
);

CREATE TABLE aspirasi_usulan (
    id INT AUTO_INCREMENT PRIMARY KEY,
    kode_usulan VARCHAR(30) NOT NULL UNIQUE,
    tahun_anggaran YEAR NOT NULL DEFAULT 2026,
    pengusul_nama VARCHAR(120) NOT NULL,
    divisi_id INT NOT NULL,
    kategori ENUM('Pergeseran Anggaran', 'Perbaikan Teknis', 'Kendala Lapangan', 'Inovasi Pengawasan') NOT NULL,
    judul_usulan VARCHAR(200) NOT NULL,
    uraian_pemikiran TEXT NOT NULL,
    rekomendasi_solusi TEXT NOT NULL,
    dukungan_suara INT NOT NULL DEFAULT 1,
    status_usulan ENUM('DITAMPUNG', 'MASUK AGENDA PLENO', 'DISETUJUI JADI KEPUTUSAN') NOT NULL DEFAULT 'DITAMPUNG',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (divisi_id) REFERENCES divisi(id)
);

CREATE TABLE approval_perubahan (
    id INT AUTO_INCREMENT PRIMARY KEY,
    kode_pengajuan VARCHAR(30) NOT NULL UNIQUE,
    renja_id INT NOT NULL,
    pemohon_id INT NOT NULL,
    serapan_lama DECIMAL(15,2) NOT NULL,
    serapan_baru DECIMAL(15,2) NOT NULL,
    tahap_baru VARCHAR(50) NOT NULL DEFAULT 'Verifikasi BPP',
    status_baru VARCHAR(50) NOT NULL,
    alasan TEXT NOT NULL,
    lampiran_spj VARCHAR(255) NULL,
    status_approval ENUM('PENDING', 'APPROVED', 'REJECTED') NOT NULL DEFAULT 'PENDING',
    approved_by INT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (renja_id) REFERENCES renja_kegiatan(id) ON DELETE CASCADE
);

CREATE TABLE keputusan_pleno (
    id INT AUTO_INCREMENT PRIMARY KEY,
    kode_pleno VARCHAR(30) NOT NULL UNIQUE,
    tahun_anggaran YEAR NOT NULL DEFAULT 2026,
    nomor_sidang VARCHAR(60) NOT NULL DEFAULT 'Pleno Rutin #42/2026',
    tanggal_rapat DATE NOT NULL,
    isi_keputusan TEXT NOT NULL,
    divisi_id INT NOT NULL,
    pic_id INT NOT NULL,
    tenggat_waktu DATE NOT NULL,
    status_tindak_lanjut ENUM('BELUM SELESAI', 'PROSES', 'SELESAI') NOT NULL DEFAULT 'BELUM SELESAI',
    lampiran_bukti VARCHAR(255) NULL,
    catatan_penyelesaian TEXT NULL,
    reminder_h30_sent TINYINT(1) DEFAULT 0,
    reminder_h7_sent TINYINT(1) DEFAULT 0,
    overdue_escalated TINYINT(1) DEFAULT 0,
    FOREIGN KEY (divisi_id) REFERENCES divisi(id),
    FOREIGN KEY (pic_id) REFERENCES users(id)
);

CREATE TABLE email_logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    jenis_notifikasi VARCHAR(120) NOT NULL,
    email_tujuan VARCHAR(200) NOT NULL,
    referensi_kode VARCHAR(50) NOT NULL,
    status_pengiriman ENUM('TERKIRIM', 'GAGAL') NOT NULL,
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
