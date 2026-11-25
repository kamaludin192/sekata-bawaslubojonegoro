function safeCreateIcons() {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
    }
}

safeCreateIcons();

const INITIAL_RENJA = [
    {
        id: "RJ-2026-01",
        ta: "2026",
        nama: "Rapat Kerja Teknis Pengawasan Pemutakhiran Data Pemilih Berkelanjutan",
        divisi: "Pencegahan & Parmas",
        kelompok: "Non-Operasional",
        tipe: "Rapat Biasa",
        tanggal: "2026-11-28",
        pagu: 45000000,
        serapan: 42500000,
        tahap: "Cair SP2D",
        status: "TERLAKSANA DAN TERSERAP"
    },
    {
        id: "RJ-2026-02",
        ta: "2026",
        nama: "Supervisi dan Monitoring Penanganan Pelanggaran ke Panwaslu Kecamatan",
        divisi: "Penanganan Pelanggaran",
        kelompok: "Non-Operasional",
        tipe: "Perjalanan Dinas",
        tanggal: "2026-12-03",
        pagu: 32000000,
        serapan: 12000000,
        tahap: "Terbit SPM",
        status: "BERJALAN"
    },
    {
        id: "RJ-2026-03",
        ta: "2026",
        nama: "Bimbingan Teknis Penguatan Kapasitas SDM dan Tata Naskah Kesekretariatan",
        divisi: "SDMO & Diklat",
        kelompok: "Non-Operasional",
        tipe: "Rapat Biasa",
        tanggal: "2026-11-18",
        pagu: 28000000,
        serapan: 0,
        tahap: "Verifikasi BPP",
        status: "TERLAKSANA BELUM TERSERAP"
    },
    {
        id: "RJ-2026-04",
        ta: "2026",
        nama: "Pemeliharaan Rutin Peralatan Kantor, Server Lokal, dan Jaringan Internet",
        divisi: "Sekretariat",
        kelompok: "Operasional",
        tipe: "Operasional Rutin",
        tanggal: null,
        pagu: 24000000,
        serapan: 18500000,
        tahap: "Cair SP2D",
        status: "BERJALAN"
    },
    {
        id: "RJ-2026-05",
        ta: "2026",
        nama: "Sosialisasi Regulasi Penyelesaian Sengketa Proses bagi Pemangku Kepentingan",
        divisi: "Hukum & Penyelesaian Sengketa",
        kelompok: "Non-Operasional",
        tipe: "Rapat Biasa",
        tanggal: "2026-10-15",
        pagu: 35000000,
        serapan: 0,
        tahap: "Belum Diajukan",
        status: "POTENSI GESER"
    },
    {
        id: "RJ-2025-01",
        ta: "2025",
        nama: "Evaluasi Akhir Tahapan Pengawasan Pemilihan Serentak Kabupaten Bojonegoro",
        divisi: "Pencegahan & Parmas",
        kelompok: "Non-Operasional",
        tipe: "Rapat Biasa",
        tanggal: "2025-12-10",
        pagu: 50000000,
        serapan: 49200000,
        tahap: "Cair SP2D",
        status: "TERLAKSANA DAN TERSERAP"
    }
];

const INITIAL_REVISI_PAGU = [
    {
        nomor: "POK-REV-01/2026",
        renjaId: "RJ-2026-01",
        paguLama: 40000000,
        paguBaru: 45000000,
        keterangan: "Penambahan pagu peserta rapat kerja teknis dari efisiensi belanja ATK sekretariat.",
        waktu: "2026-09-14"
    }
];

const INITIAL_ASPIRASI = [
    {
        id: "ASP-2026-01",
        ta: "2026",
        pengusul: "Ahmad Fauzi, S.H.",
        divisi: "Pencegahan & Parmas",
        kategori: "Pergeseran Anggaran",
        judul: "Optimalisasi Sisa Pagu Sosialisasi Hukum untuk Supervisi Kecamatan",
        uraian: "Kegiatan RJ-2026-05 belum terserap hingga pertengahan triwulan IV, sementara kebutuhan supervisi lapangan di kecamatan cukup tinggi.",
        solusi: "Mengusulkan pergeseran sebagian pagu RJ-2026-05 ke pos perjalanan dinas supervisi terpadu pada rapat pleno pekan ini.",
        suara: 5,
        status: "MASUK AGENDA PLENO"
    },
    {
        id: "ASP-2026-02",
        ta: "2026",
        pengusul: "Siti Rahmawati, S.E.",
        divisi: "Sekretariat",
        kategori: "Perbaikan Teknis",
        judul: "Penyeragaman Batas Waktu Penyerahan Kuitansi SPJ Maksimal H+3 Kegiatan",
        uraian: "Sering terjadi keterlambatan penerbitan SPM karena kelengkapan daftar hadir dan dokumentasi baru diserahkan mendekati akhir bulan.",
        solusi: "Menetapkan SOP internal penyerahan berkas SPJ maksimal 3 hari kerja setelah kegiatan selesai.",
        suara: 8,
        status: "DITAMPUNG"
    }
];

const INITIAL_PLENO = [
    {
        id: "PL-2026-01",
        ta: "2026",
        sidang: "Pleno Rutin Mingguan #41/2026",
        tanggalRapat: "2026-11-15",
        isi: "Menyusun rekapitulasi hasil pengawasan pemutakhiran data dan menyampaikan laporan resmi ke Bawaslu Provinsi Jawa Timur.",
        divisi: "Pencegahan & Parmas",
        pic: "Ahmad Fauzi, S.H.",
        email: "fauzi@bojonegoro.bawaslu.go.id",
        deadline: "2026-11-30",
        status: "PROSES",
        buktiNama: null,
        buktiDataUrl: null,
        catatanSelesai: ""
    },
    {
        id: "PL-2026-02",
        ta: "2026",
        sidang: "Pleno Rutin Mingguan #42/2026",
        tanggalRapat: "2026-11-20",
        isi: "Melakukan verifikasi kelengkapan SPJ kegiatan bimtek bulan berjalan sebelum batas akhir pengajuan pencairan.",
        divisi: "SDMO & Diklat",
        pic: "Siti Rahmawati, S.E.",
        email: "siti.rahmawati@bojonegoro.bawaslu.go.id",
        deadline: "2026-12-05",
        status: "BELUM SELESAI",
        buktiNama: null,
        buktiDataUrl: null,
        catatanSelesai: ""
    }
];

const INITIAL_APPROVALS = [
    {
        id: "APR-2026-01",
        renjaId: "RJ-2026-03",
        renjaDivisi: "SDMO & Diklat",
        renjaNama: "Bimbingan Teknis Penguatan Kapasitas SDM dan Tata Naskah Kesekretariatan",
        pemohon: "PIC / Staf Pelaksana",
        serapanLama: 0,
        serapanBaru: 27450000,
        tahapBaru: "Cair SP2D",
        statusBaru: "TERLAKSANA DAN TERSERAP",
        alasan: "Seluruh kuitansi dan daftar hadir peserta telah diverifikasi oleh bendahara pengeluaran pembantu.",
        lampiranNama: "Rekap_SPJ_Bimtek_SDMO_Nov2026.pdf",
        lampiranDataUrl: "SAMPLE_SPJ_DOCUMENT",
        waktu: "2026-11-23 09:40:12",
        statusApproval: "PENDING"
    }
];

const INITIAL_USERS = [
    { id: 1, nip: "198805122015031002", nama: "Administrator Sekretariat", jabatan: "Kepala Subbagian Administrasi", email: "sekretariat@bojonegoro.bawaslu.go.id", role: "Admin", divisi: "Sekretariat", aktif: true },
    { id: 2, nip: "198204102010011001", nama: "Ketua Bawaslu Bojonegoro", jabatan: "Ketua Bawaslu Kab. Bojonegoro", email: "pimpinan@bojonegoro.bawaslu.go.id", role: "Pimpinan", divisi: "Lintas Divisi", aktif: true },
    { id: 3, nip: "198509212014021004", nama: "Kordiv Pencegahan & Parmas", jabatan: "Koordinator Divisi PP & Humas", email: "kordiv.pp@bojonegoro.bawaslu.go.id", role: "Kordiv", divisi: "Pencegahan & Parmas", aktif: true },
    { id: 4, nip: "199207142019031008", nama: "Ahmad Fauzi, S.H.", jabatan: "Analis Hukum & Pengawasan", email: "fauzi@bojonegoro.bawaslu.go.id", role: "PIC", divisi: "Pencegahan & Parmas", aktif: true },
    { id: 5, nip: "199411032020122011", nama: "Siti Rahmawati, S.E.", jabatan: "Bendahara Pengeluaran Pembantu", email: "siti.rahmawati@bojonegoro.bawaslu.go.id", role: "PIC", divisi: "SDMO & Diklat", aktif: true }
];

const INITIAL_LOGS = [
    {
        waktu: "2026-11-23 08:00:04",
        jenis: "Pengingat Tenggat Pleno (H-7)",
        penerima: "fauzi@bojonegoro.bawaslu.go.id",
        referensi: "PL-2026-01",
        status: "TERKIRIM"
    },
    {
        waktu: "2026-11-20 14:15:30",
        jenis: "Penugasan Tindak Lanjut Pleno Baru",
        penerima: "siti.rahmawati@bojonegoro.bawaslu.go.id",
        referensi: "PL-2026-02",
        status: "TERKIRIM"
    }
];

let renjaData = JSON.parse(localStorage.getItem('sekata_v4_renja')) || INITIAL_RENJA;
let revisiPaguData = JSON.parse(localStorage.getItem('sekata_v4_revisi')) || INITIAL_REVISI_PAGU;
let aspirasiData = JSON.parse(localStorage.getItem('sekata_v4_aspirasi')) || INITIAL_ASPIRASI;
let plenoData = JSON.parse(localStorage.getItem('sekata_v4_pleno')) || INITIAL_PLENO;
let approvalData = JSON.parse(localStorage.getItem('sekata_v4_approvals')) || INITIAL_APPROVALS;
let usersData = JSON.parse(localStorage.getItem('sekata_v4_users')) || INITIAL_USERS;
let logsData = JSON.parse(localStorage.getItem('sekata_v4_logs')) || INITIAL_LOGS;

function getActiveTa() {
    return document.getElementById('tahunAnggaranSelector')?.value || '2026';
}

function persistData() {
    localStorage.setItem('sekata_v4_renja', JSON.stringify(renjaData));
    localStorage.setItem('sekata_v4_revisi', JSON.stringify(revisiPaguData));
    localStorage.setItem('sekata_v4_aspirasi', JSON.stringify(aspirasiData));
    localStorage.setItem('sekata_v4_pleno', JSON.stringify(plenoData));
    localStorage.setItem('sekata_v4_approvals', JSON.stringify(approvalData));
    localStorage.setItem('sekata_v4_users', JSON.stringify(usersData));
    localStorage.setItem('sekata_v4_logs', JSON.stringify(logsData));
}

function resetDemoData() {
    if (confirm("Kembalikan seluruh data simulasi ke kondisi awal?")) {
        ['sekata_v4_renja', 'sekata_v4_revisi', 'sekata_v4_aspirasi', 'sekata_v4_pleno', 'sekata_v4_approvals', 'sekata_v4_users', 'sekata_v4_logs'].forEach(k => localStorage.removeItem(k));
        renjaData = JSON.parse(JSON.stringify(INITIAL_RENJA));
        revisiPaguData = JSON.parse(JSON.stringify(INITIAL_REVISI_PAGU));
        aspirasiData = JSON.parse(JSON.stringify(INITIAL_ASPIRASI));
        plenoData = JSON.parse(JSON.stringify(INITIAL_PLENO));
        approvalData = JSON.parse(JSON.stringify(INITIAL_APPROVALS));
        usersData = JSON.parse(JSON.stringify(INITIAL_USERS));
        logsData = JSON.parse(JSON.stringify(INITIAL_LOGS));
        refreshAll();
        showToast("Data simulasi telah diatur ulang.", "info");
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('sekata_dark_mode', isDark ? '1' : '0');
    document.getElementById('btnDarkMode').innerHTML = isDark ? `<i data-lucide="sun" class="w-4 h-4 text-amber-400"></i>` : `<i data-lucide="moon" class="w-4 h-4"></i>`;
    safeCreateIcons();
    renderCharts();
}

function togglePresentationMode() {
    document.body.classList.toggle('presentation-mode');
    document.getElementById('presTaLabel').textContent = getActiveTa();
    setTimeout(() => renderCharts(), 150);
}

function toggleTableDensity() {
    const tbl = document.getElementById('renjaTable');
    const btn = document.getElementById('btnDensity');
    tbl.classList.toggle('table-compact');
    const isCompact = tbl.classList.contains('table-compact');
    btn.querySelector('span').textContent = isCompact ? 'Lega' : 'Ringkas';
}

function changeTahunAnggaran() {
    const ta = getActiveTa();
    document.getElementById('printTaBadge').textContent = `TA ${ta}`;
    document.getElementById('jadwalTaBadge').textContent = `TA ${ta}`;
    refreshAll();
    showToast(`Menampilkan data Tahun Anggaran ${ta}.`, "info");
}

function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    const styles = {
        success: 'bg-slate-900 text-white border-l-4 border-emerald-400',
        info: 'bg-slate-900 text-white border-l-4 border-sky-400',
        warning: 'bg-slate-900 text-white border-l-4 border-amber-400',
        error: 'bg-slate-900 text-white border-l-4 border-rose-500'
    };
    const el = document.createElement('div');
    el.className = `${styles[type] || styles.info} px-4 py-3 rounded-lg shadow-lg text-xs font-medium flex items-center gap-2.5 pointer-events-auto max-w-sm transition-all duration-200`;
    el.innerHTML = `<span>${message}</span>`;
    container.appendChild(el);
    setTimeout(() => {
        el.classList.add('opacity-0');
        setTimeout(() => el.remove(), 200);
    }, 3600);
}

const formatRp = (val) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);

const getStatusBadge = (status) => {
    const map = {
        "BERJALAN": "bg-sky-50 text-sky-700 border-sky-200",
        "TERLAKSANA DAN TERSERAP": "bg-emerald-50 text-emerald-700 border-emerald-200",
        "TERLAKSANA BELUM TERSERAP": "bg-amber-50 text-amber-800 border-amber-200",
        "BELUM TERLAKSANA": "bg-slate-100 text-slate-700 border-slate-200",
        "POTENSI GESER": "bg-rose-50 text-rose-700 border-rose-200"
    };
    return map[status] || "bg-slate-100 text-slate-700 border-slate-200";
};

const getTahapBadge = (tahap) => {
    const map = {
        "Belum Diajukan": "bg-slate-100 text-slate-600",
        "Pengajuan SPJ": "bg-sky-50 text-sky-700",
        "Verifikasi BPP": "bg-amber-50 text-amber-800",
        "Terbit SPM": "bg-indigo-50 text-indigo-700",
        "Cair SP2D": "bg-emerald-50 text-emerald-700 font-semibold"
    };
    return map[tahap] || "bg-slate-100 text-slate-600";
};

function printOfficialReport(title) {
    const ta = getActiveTa();
    const taRenja = renjaData.filter(r => (r.ta || '2026') === ta);
    document.getElementById('printReportTitle').textContent = `${title} — TA ${ta}`;
    const now = new Date();
    const nowStr = now.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    const timeCode = now.toISOString().replace(/[-:T.Z]/g, '').slice(0, 14);
    const totalPagu = taRenja.reduce((a, b) => a + b.pagu, 0);
    const totalSerapan = taRenja.reduce((a, b) => a + b.serapan, 0);
    const docHash = `BWS-BJN-${timeCode}`;

    document.getElementById('printTimestamp').textContent = `Dicetak: ${nowStr}`;
    document.getElementById('printDateSign').textContent = `Bojonegoro, ${nowStr}`;
    document.getElementById('printQrHash').textContent = `ID: ${docHash}`;

    const verifyUrl = `${window.location.origin}${window.location.pathname.replace('index.html', '')}verifikasi.html?id=${docHash}&ta=${ta}&pagu=${totalPagu}&serapan=${totalSerapan}`;
    const qrContainer = document.getElementById('printQrCode');
    qrContainer.innerHTML = "";
    if (typeof QRCode !== 'undefined') {
        new QRCode(qrContainer, {
            text: verifyUrl,
            width: 72,
            height: 72
        });
    }
    setTimeout(() => window.print(), 150);
}

function readFileAsDataUrl(file) {
    return new Promise((resolve, reject) => {
        if (!file) { resolve(null); return; }
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

function openDocumentPreview(title, subtitle, dataUrl) {
    document.getElementById('previewDocTitle').textContent = title;
    document.getElementById('previewDocSubtitle').textContent = subtitle;
    const body = document.getElementById('previewDocBody');

    if (dataUrl === "SAMPLE_SPJ_DOCUMENT") {
        body.innerHTML = `
            <div class="bg-white p-8 rounded border border-slate-300 shadow-xs max-w-xl w-full text-xs space-y-4 text-slate-800">
                <div class="border-b-2 border-slate-900 pb-3 text-center">
                    <p class="font-bold uppercase">Ringkasan Bukti Pertanggungjawaban (SPJ)</p>
                    <p class="text-[11px] text-slate-500">Sekretariat Bawaslu Kabupaten Bojonegoro</p>
                </div>
                <div class="grid grid-cols-2 gap-2 text-[11px]">
                    <p><span class="text-slate-500">Nomor SPM/Kuitansi:</span> <strong>048/SPJ-SDMO/XI/2026</strong></p>
                    <p><span class="text-slate-500">Nominal Verifikasi:</span> <strong class="font-mono">Rp 27.450.000</strong></p>
                    <p><span class="text-slate-500">Verifikator BPP:</span> <strong>Terverifikasi Lengkap</strong></p>
                    <p><span class="text-slate-500">Kelengkapan:</span> <strong>Daftar Hadir, Kuitansi, Dokumentasi</strong></p>
                </div>
                <div class="p-3 bg-emerald-50 border border-emerald-200 rounded text-emerald-800 text-[11px]">
                    Berkas fisik telah diperiksa dan sesuai dengan ketentuan pertanggungjawaban keuangan negara.
                </div>
            </div>
        `;
    } else if (dataUrl && dataUrl.startsWith("data:image/")) {
        body.innerHTML = `<img src="${dataUrl}" alt="Lampiran Bukti" class="max-h-[65vh] rounded shadow-sm object-contain">`;
    } else if (dataUrl && dataUrl.startsWith("data:application/pdf")) {
        body.innerHTML = `<iframe src="${dataUrl}" class="w-full h-[65vh] rounded border border-slate-300"></iframe>`;
    } else {
        body.innerHTML = `<p class="text-xs text-slate-500">Berkas lampiran tersimpan: <code>${dataUrl}</code></p>`;
    }
    openModal('modalPreviewDoc');
}

function openBeritaAcaraPleno() {
    const ta = getActiveTa();
    const taPleno = plenoData.filter(p => (p.ta || '2026') === ta);
    const todayStr = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    const rowsHtml = taPleno.map((p, i) => `
        <tr>
            <td style="border:1px solid #334155; padding:6px; text-align:center;">${i + 1}</td>
            <td style="border:1px solid #334155; padding:6px;"><strong>${p.id}</strong><br><small>${p.sidang || 'Pleno Rutin'}</small></td>
            <td style="border:1px solid #334155; padding:6px;">${p.isi}</td>
            <td style="border:1px solid #334155; padding:6px;">${p.pic} (${p.divisi})</td>
            <td style="border:1px solid #334155; padding:6px; text-align:center;">${p.deadline}</td>
            <td style="border:1px solid #334155; padding:6px; text-align:center;">${p.status}</td>
        </tr>
    `).join('');

    document.getElementById('beritaAcaraContent').innerHTML = `
        <div id="baPrintableArea" class="space-y-4">
            <div class="flex items-center justify-between border-b-2 border-slate-900 pb-3 gap-4">
                <div class="w-16 h-16 flex items-center justify-center shrink-0">
                    <img src="assets/img/logo-bawaslu.png" alt="Logo Bawaslu Bojonegoro" class="w-full h-full object-contain">
                </div>
                <div class="text-center flex-1">
                    <p class="font-bold uppercase text-sm">Badan Pengawas Pemilihan Umum Kabupaten Bojonegoro</p>
                    <p class="text-[11px] text-slate-600">Jl. Pahlawan No. 7, Bojonegoro • Jawa Timur</p>
                    <p class="font-bold uppercase underline mt-2 text-sm">BERITA ACARA KEPUTUSAN RAPAT PLENO</p>
                    <p class="font-mono text-[11px]">Nomor: 043/BA-PLENO/K.JI-03/XI/${ta}</p>
                </div>
                <div class="w-16 shrink-0"></div>
            </div>
            <p>Pada hari ini, tanggal <strong>${todayStr}</strong>, bertempat di Kantor Bawaslu Kabupaten Bojonegoro, telah dilaksanakan Rapat Pleno Pimpinan Bawaslu Kabupaten Bojonegoro dengan pokok-pokok keputusan dan penugasan tindak lanjut sebagai berikut:</p>
            <table style="width:100%; border-collapse:collapse; font-size:11px;">
                <thead>
                    <tr style="background:#F1F5F9;">
                        <th style="border:1px solid #334155; padding:6px;">No</th>
                        <th style="border:1px solid #334155; padding:6px;">Register</th>
                        <th style="border:1px solid #334155; padding:6px;">Keputusan / Arahan Pleno</th>
                        <th style="border:1px solid #334155; padding:6px;">PIC & Divisi</th>
                        <th style="border:1px solid #334155; padding:6px;">Tenggat</th>
                        <th style="border:1px solid #334155; padding:6px;">Status</th>
                    </tr>
                </thead>
                <tbody>${rowsHtml}</tbody>
            </table>
            <p>Demikian Berita Acara Rapat Pleno ini dibuat untuk dilaksanakan dengan penuh tanggung jawab oleh masing-masing penanggung jawab.</p>
            <div class="grid grid-cols-2 gap-8 pt-6 text-center">
                <div>
                    <p class="font-bold">Ketua Bawaslu Kabupaten Bojonegoro</p>
                    <div class="h-16"></div>
                    <p class="font-bold underline">( ................................................ )</p>
                </div>
                <div>
                    <p class="font-bold">Kepala Sekretariat Bawaslu Kab. Bojonegoro</p>
                    <div class="h-16"></div>
                    <p class="font-bold underline">( ................................................ )</p>
                </div>
            </div>
        </div>
    `;
    openModal('modalBeritaAcara');
}

function downloadBeritaAcaraDoc() {
    const content = document.getElementById('baPrintableArea').innerHTML;
    const html = `<html><head><meta charset='utf-8'></head><body style="font-family:'Bookman Old Style','Times New Roman',serif;font-size:12pt;">${content}</body></html>`;
    const blob = new Blob(['﻿', html], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Berita_Acara_Pleno_Bawaslu_Bojonegoro_${getActiveTa()}.doc`;
    link.click();
    URL.revokeObjectURL(url);
    showToast("File Berita Acara Rapat Pleno (.DOC) berhasil diunduh.", "success");
}

function downloadJsonBackup() {
    const payload = {
        exported_at: new Date().toISOString(),
        instansi: "Bawaslu Kabupaten Bojonegoro",
        renjaData,
        revisiPaguData,
        aspirasiData,
        plenoData,
        approvalData,
        usersData,
        logsData
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Backup_SEKATA_Bojonegoro_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("Berkas cadangan sistem (.JSON) berhasil diunduh.", "success");
}

function restoreJsonBackup(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const parsed = JSON.parse(e.target.result);
            if (!parsed.renjaData || !parsed.plenoData) throw new Error("Format tidak valid");
            renjaData = parsed.renjaData;
            revisiPaguData = parsed.revisiPaguData || [];
            aspirasiData = parsed.aspirasiData || [];
            plenoData = parsed.plenoData;
            approvalData = parsed.approvalData || [];
            usersData = parsed.usersData || INITIAL_USERS;
            logsData = parsed.logsData || [];
            persistData();
            refreshAll();
            showToast("Data cadangan berhasil dipulihkan ke sistem!", "success");
        } catch (err) {
            showToast("Gagal memulihkan data: berkas JSON tidak sesuai format SEKATA.", "error");
        }
    };
    reader.readAsText(file);
}

const ROLE_META = {
    Admin: {
        label: "Administrator Sistem",
        navTitle: "Ikhtisar Eksekutif",
        pageTitle: "Tata Kelola Sistem & Ikhtisar Anggaran",
        tabs: ["dashboard", "renja", "approval", "aspirasi", "pleno", "jadwal", "users", "tautan", "logs"]
    },
    Pimpinan: {
        label: "Pimpinan Bawaslu",
        navTitle: "Meja Eksekutif Pimpinan",
        pageTitle: "Meja Eksekutif Pimpinan — Pengesahan & Pengawasan",
        tabs: ["dashboard", "approval", "pleno", "aspirasi", "renja", "jadwal", "tautan"]
    },
    Kordiv: {
        label: "Koordinator Divisi",
        navTitle: "Kendali Divisi",
        pageTitle: "Kendali Divisi Pengampu & Verifikasi Anggaran",
        tabs: ["dashboard", "renja", "approval", "aspirasi", "pleno", "jadwal"]
    },
    PIC: {
        label: "PIC / Staf Pelaksana",
        navTitle: "Tugas & SPJ Saya",
        pageTitle: "Ruang Kerja Staf — Tindak Lanjut Pleno & Pengajuan SPJ",
        tabs: ["dashboard", "pleno", "approval", "aspirasi", "jadwal", "renja"]
    },
    Operator: {
        label: "Operator Data RENJA",
        navTitle: "Operasional RENJA & POK",
        pageTitle: "Operasional Data RENJA, Jadwal & Revisi POK",
        tabs: ["dashboard", "renja", "jadwal", "approval", "pleno", "aspirasi", "tautan"]
    }
};

let activeTabId = 'dashboard';

function switchTab(tabId) {
    const panel = document.getElementById(`tab-${tabId}`);
    const navBtn = document.querySelector(`.nav-item[data-tab="${tabId}"]`);
    if (!panel || !navBtn) return;

    activeTabId = tabId;
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.add('hidden'));
    panel.classList.remove('hidden');

    document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
    navBtn.classList.add('active');

    const role = document.getElementById('roleSelector')?.value || 'Admin';
    const roleCfg = ROLE_META[role] || ROLE_META.Admin;
    const meta = {
        dashboard: [roleCfg.navTitle, roleCfg.pageTitle],
        renja: ["Data RENJA & Revisi POK", "Manajemen Rencana Kerja, SP2D & Revisi Anggaran"],
        approval: ["Persetujuan Perubahan", "Verifikasi & Persetujuan Perubahan Data"],
        aspirasi: ["Pojok Aspirasi & Usulan", "Ruang Tuang Pemikiran Jajaran & Matriks Pleno"],
        pleno: ["Keputusan Pleno", "Register Keputusan Rapat Pleno & Berita Acara"],
        jadwal: ["Jadwal Kegiatan", "Kalender & Agenda Pelaksanaan Kegiatan"],
        users: ["Manajemen Pengguna", "Pengelolaan Akun Pegawai & Hak Akses Divisi"],
        tautan: ["Portal & Backup Data", "Direktori Layanan Internal & Pencadangan Sistem"],
        logs: ["Audit Trail & Log Email", "Rekam Jejak Aktivitas & Pengiriman Email"]
    };
    document.getElementById('breadcrumbCurrent').textContent = meta[tabId][0];
    document.getElementById('pageTitle').textContent = meta[tabId][1];
    document.getElementById('sidebar').classList.add('-translate-x-full');
}

async function handleLogout() {
    ['sekata_pro_role', 'sekata_pro_email', 'sekata_pro_divisi', 'sekata_csrf', 'sekata_auth_mode'].forEach(k => localStorage.removeItem(k));
    try {
        const controller = new AbortController();
        const tid = setTimeout(() => controller.abort(), 1200);
        await fetch('backend/api/auth.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'logout' }),
            signal: controller.signal
        });
        clearTimeout(tid);
    } catch (_) {}
    window.location.href = 'login.html';
}

function getDeadlineCountdown(deadlineStr) {
    if (!deadlineStr) return { text: 'Tanpa Tenggat', cls: 'bg-slate-100 text-slate-600 border-slate-200' };
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const target = new Date(`${deadlineStr}T00:00:00`);
    const diffDays = Math.round((target - today) / 86400000);
    if (diffDays < 0) return { text: `Terlambat ${Math.abs(diffDays)} hari`, cls: 'bg-rose-50 text-rose-700 border-rose-200' };
    if (diffDays === 0) return { text: 'Jatuh Tempo Hari Ini', cls: 'bg-rose-50 text-rose-700 border-rose-200' };
    if (diffDays <= 7) return { text: `H-${diffDays}`, cls: 'bg-amber-50 text-amber-800 border-amber-200' };
    return { text: `H-${diffDays}`, cls: 'bg-sky-50 text-sky-700 border-sky-200' };
}

function renderRoleWorkspace() {
    const container = document.getElementById('roleWorkspaceSection');
    if (!container) return;

    const ta = getActiveTa();
    const role = document.getElementById('roleSelector').value;
    const divScope = document.getElementById('activeDivisiScope').value;
    const taRenja = renjaData.filter(r => (r.ta || '2026') === ta);
    const taPleno = plenoData.filter(p => (p.ta || '2026') === ta);
    const taAspirasi = aspirasiData.filter(a => (a.ta || '2026') === ta);
    const pendingApprovals = approvalData.filter(a => a.statusApproval === 'PENDING');
    const activePleno = taPleno.filter(p => p.status !== 'SELESAI');

    if (role === 'Pimpinan') {
        const aprRows = pendingApprovals.slice(0, 3).map(apr => `
            <div class="py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div class="min-w-0">
                    <p class="font-mono text-[11px] font-semibold text-slate-800">${apr.id} • ${apr.renjaDivisi}</p>
                    <p class="text-xs font-medium text-slate-900 truncate">${apr.renjaNama}</p>
                    <p class="text-[11px] text-slate-500 font-mono">${formatRp(apr.serapanLama)} → <strong class="text-emerald-700">${formatRp(apr.serapanBaru)}</strong></p>
                </div>
                <div class="flex items-center gap-1.5 shrink-0">
                    <button type="button" onclick="processApproval('${apr.id}', 'APPROVED')" class="px-2.5 py-1 rounded bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-semibold">Setujui</button>
                    <button type="button" onclick="switchTab('approval')" class="px-2.5 py-1 rounded border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 text-[11px] font-semibold">Detail</button>
                </div>
            </div>
        `).join('') || `<p class="text-xs text-slate-500 py-2">Tidak ada usulan perubahan SPJ yang menunggu pengesahan saat ini.</p>`;

        const plenoRows = activePleno.slice(0, 3).map(pl => {
            const cd = getDeadlineCountdown(pl.deadline);
            return `
                <div class="py-2.5 flex items-center justify-between gap-2">
                    <div class="min-w-0">
                        <p class="text-xs font-medium text-slate-900 truncate">${pl.isi}</p>
                        <p class="text-[11px] text-slate-500">${pl.pic} • ${pl.divisi}</p>
                    </div>
                    <span class="font-mono text-[10px] font-semibold px-2 py-0.5 rounded border shrink-0 ${cd.cls}">${cd.text}</span>
                </div>
            `;
        }).join('') || `<p class="text-xs text-slate-500 py-2">Seluruh keputusan pleno telah tuntas dilaksanakan.</p>`;

        container.innerHTML = `
            <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-4 border-b border-slate-200/80">
                <div>
                    <h2 class="font-bold text-slate-900">Pengesahan Strategis & Pengawasan Pleno (TA ${ta})</h2>
                    <p class="text-xs text-slate-500 mt-1"><span class="font-semibold text-rose-900">Meja Eksekutif Pimpinan</span> • Terdapat <strong>${pendingApprovals.length} pengajuan SPJ</strong> menunggu persetujuan dan <strong>${activePleno.length} tindak lanjut pleno</strong> aktif.</p>
                </div>
                <div class="flex flex-wrap items-center gap-2 shrink-0">
                    <button type="button" onclick="switchTab('approval')" class="px-3 py-1.5 rounded-lg bg-[#881337] hover:bg-[#700F2D] text-white text-xs font-semibold">Tinjau Persetujuan (${pendingApprovals.length})</button>
                    <button type="button" onclick="openBeritaAcaraPleno()" class="px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold">Berita Acara Pleno</button>
                    <button type="button" onclick="togglePresentationMode()" class="px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold">Mode Paparan</button>
                </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
                <div>
                    <div class="flex items-center justify-between text-xs pb-2 border-b border-slate-100"><strong class="text-slate-800">Antrean Persetujuan Perubahan</strong><button type="button" onclick="switchTab('approval')" class="text-[11px] font-semibold text-rose-800 hover:underline">Lihat Semua</button></div>
                    <div class="divide-y divide-slate-200/80">${aprRows}</div>
                </div>
                <div>
                    <div class="flex items-center justify-between text-xs pb-2 border-b border-slate-100"><strong class="text-slate-800">Tindak Lanjut Pleno Terdekat</strong><button type="button" onclick="switchTab('pleno')" class="text-[11px] font-semibold text-rose-800 hover:underline">Buka Register</button></div>
                    <div class="divide-y divide-slate-200/80">${plenoRows}</div>
                </div>
            </div>
        `;
    } else if (role === 'Kordiv') {
        const targetDiv = divScope === 'ALL' ? 'Pencegahan & Parmas' : divScope;
        const divRenja = taRenja.filter(r => r.divisi === targetDiv);
        const divPagu = divRenja.reduce((a, b) => a + b.pagu, 0);
        const divSerapan = divRenja.reduce((a, b) => a + b.serapan, 0);
        const divPct = divPagu > 0 ? ((divSerapan / divPagu) * 100).toFixed(1) : '0.0';
        const divApr = pendingApprovals.filter(a => a.renjaDivisi === targetDiv);
        const divAsp = taAspirasi.filter(a => a.divisi === targetDiv && a.status === 'DITAMPUNG');

        const aspHtml = divAsp.slice(0, 3).map(asp => `
            <div class="py-2.5 flex items-center justify-between gap-2">
                <div class="min-w-0">
                    <p class="text-xs font-semibold text-slate-900 truncate">${asp.judul}</p>
                    <p class="text-[11px] text-slate-500">Pengusul: ${asp.pengusul} • ${asp.suara} dukungan</p>
                </div>
                <button type="button" onclick="angkatKePleno('${asp.id}')" class="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-semibold shrink-0">Angkat ke Pleno</button>
            </div>
        `).join('') || `<p class="text-xs text-slate-500 py-2">Belum ada aspirasi baru dari divisi ${targetDiv} yang menunggu diagendakan.</p>`;

        container.innerHTML = `
            <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-4 border-b border-slate-200/80">
                <div>
                    <h2 class="font-bold text-slate-900">Divisi ${targetDiv} — Serapan ${divPct}% (${formatRp(divSerapan)} / ${formatRp(divPagu)})</h2>
                    <p class="text-xs text-slate-500 mt-1"><span class="font-semibold text-sky-800">Kendali Divisi Pengampu</span> • ${divRenja.length} kegiatan terdaftar • ${divApr.length} verifikasi SPJ menunggu keputusan Anda.</p>
                </div>
                <div class="flex flex-wrap items-center gap-2 shrink-0">
                    <button type="button" onclick="switchTab('approval')" class="px-3 py-1.5 rounded-lg bg-[#881337] hover:bg-[#700F2D] text-white text-xs font-semibold">Verifikasi SPJ Divisi (${divApr.length})</button>
                    <button type="button" onclick="switchTab('renja')" class="px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold">Lihat RENJA Divisi</button>
                </div>
            </div>
            <div class="mt-4">
                <div class="flex items-center justify-between text-xs pb-2 border-b border-slate-100"><strong class="text-slate-800">Usulan Aspirasi Divisi Siap Diagendakan Pleno</strong><button type="button" onclick="switchTab('aspirasi')" class="text-[11px] font-semibold text-rose-800 hover:underline">Buka Pojok Aspirasi</button></div>
                <div class="divide-y divide-slate-200/80">${aspHtml}</div>
            </div>
        `;
    } else if (role === 'PIC') {
        const scopedPleno = activePleno.filter(p => divScope === 'ALL' || p.divisi === divScope);
        const scopedRenja = taRenja.filter(r => divScope === 'ALL' || r.divisi === divScope);
        const taskHtml = scopedPleno.slice(0, 3).map(pl => {
            const cd = getDeadlineCountdown(pl.deadline);
            return `
                <div class="py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div class="min-w-0">
                        <div class="flex items-center gap-2 text-[11px]">
                            <span class="font-mono font-bold text-slate-800">${pl.id}</span>
                            <span class="font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border ${cd.cls}">${cd.text}</span>
                        </div>
                        <p class="text-xs font-medium text-slate-900 mt-0.5">${pl.isi}</p>
                        <p class="text-[11px] text-slate-500">PIC: ${pl.pic} (${pl.divisi})</p>
                    </div>
                    <button type="button" onclick="openCompletePlenoModal('${pl.id}')" class="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-semibold shrink-0">Unggah Bukti & Selesai</button>
                </div>
            `;
        }).join('') || `<p class="text-xs text-emerald-700 font-medium py-2">Seluruh tugas tindak lanjut pleno pada cakupan Anda sudah selesai.</p>`;

        container.innerHTML = `
            <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-4 border-b border-slate-200/80">
                <div>
                    <h2 class="font-bold text-slate-900">Daftar Tugas Pleno & Pengajuan SPJ (${divScope === 'ALL' ? 'Semua Divisi' : divScope})</h2>
                    <p class="text-xs text-slate-500 mt-1"><span class="font-semibold text-emerald-800">Ruang Kerja Pelaksana (PIC)</span> • Terdapat <strong>${scopedPleno.length} tugas pleno aktif</strong> dan <strong>${scopedRenja.length} pos kegiatan</strong> dalam cakupan Anda.</p>
                </div>
                <div class="flex flex-wrap items-center gap-2 shrink-0">
                    <button type="button" onclick="switchTab('renja')" class="px-3 py-1.5 rounded-lg bg-[#881337] hover:bg-[#700F2D] text-white text-xs font-semibold">Ajukan Serapan / SPJ</button>
                    <button type="button" onclick="openModal('modalAspirasi')" class="px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold">Tuangkan Usulan</button>
                </div>
            </div>
            <div class="mt-4">
                <div class="flex items-center justify-between text-xs pb-2 border-b border-slate-100"><strong class="text-slate-800">Tugas Tindak Lanjut Pleno Menunggu Bukti</strong><button type="button" onclick="switchTab('pleno')" class="text-[11px] font-semibold text-rose-800 hover:underline">Lihat Semua</button></div>
                <div class="divide-y divide-slate-200/80">${taskHtml}</div>
            </div>
        `;
    } else if (role === 'Operator') {
        const noDateItems = taRenja.filter(r => !r.tanggal);
        const geserItems = taRenja.filter(r => r.status === 'POTENSI GESER');
        const opItems = [...noDateItems, ...geserItems].filter((item, idx, self) => self.findIndex(x => x.id === item.id) === idx).slice(0, 3);
        const opHtml = opItems.map(item => `
            <div class="py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div class="min-w-0">
                    <p class="font-mono text-[11px] font-semibold text-slate-700">${item.id} • ${item.divisi}</p>
                    <p class="text-xs font-medium text-slate-900 truncate">${item.nama}</p>
                    <p class="text-[11px] text-amber-800">${!item.tanggal ? 'Tanggal pelaksanaan belum ditentukan' : 'Status: POTENSI GESER'}</p>
                </div>
                <div class="flex items-center gap-1.5 shrink-0">
                    <button type="button" onclick="openRevisiPaguModal('${item.id}')" class="px-2.5 py-1 rounded border border-amber-300 bg-amber-50 hover:bg-amber-100 text-amber-900 text-[11px] font-semibold">Catat POK</button>
                    <button type="button" onclick="openEditApprovalModal('${item.id}')" class="px-2.5 py-1 rounded border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 text-[11px] font-semibold">Update</button>
                </div>
            </div>
        `).join('') || `<p class="text-xs text-emerald-700 font-medium py-2">Seluruh pos RENJA TA ${ta} sudah terjadwal dan tidak ada indikasi pergeseran.</p>`;

        container.innerHTML = `
            <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-4 border-b border-slate-200/80">
                <div>
                    <h2 class="font-bold text-slate-900">Kebersihan Data Anggaran & Jadwal (TA ${ta})</h2>
                    <p class="text-xs text-slate-500 mt-1"><span class="font-semibold text-amber-800">Operasional Data RENJA & POK</span> • <strong>${noDateItems.length} kegiatan</strong> belum terjadwal • <strong>${geserItems.length} pos</strong> berstatus Potensi Geser • <strong>${revisiPaguData.length} catatan</strong> revisi POK.</p>
                </div>
                <div class="flex flex-wrap items-center gap-2 shrink-0">
                    <button type="button" onclick="openModal('modalRenja')" class="px-3 py-1.5 rounded-lg bg-[#881337] hover:bg-[#700F2D] text-white text-xs font-semibold">+ Tambah RENJA</button>
                    <button type="button" onclick="openModal('modalImport')" class="px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold">Impor XLSX</button>
                    <button type="button" onclick="exportRenjaExcel()" class="px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold">Unduh Rekap</button>
                </div>
            </div>
            <div class="mt-4">
                <div class="flex items-center justify-between text-xs pb-2 border-b border-slate-100"><strong class="text-slate-800">Pos Memerlukan Kelengkapan Jadwal atau Revisi POK</strong><button type="button" onclick="switchTab('jadwal')" class="text-[11px] font-semibold text-rose-800 hover:underline">Buka Jadwal</button></div>
                <div class="divide-y divide-slate-200/80">${opHtml}</div>
            </div>
        `;
    } else {
        const activeUsers = usersData.filter(u => u.aktif).length;
        const latestLog = logsData[0];
        container.innerHTML = `
            <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                <div>
                    <h2 class="font-bold text-slate-900">Kendali Penuh Administrator — Bawaslu Kab. Bojonegoro</h2>
                    <p class="text-xs text-slate-500 mt-1"><span class="font-semibold text-slate-800">Tata Kelola Sistem Sekretariat</span> • <strong>${activeUsers}/${usersData.length} akun pegawai</strong> aktif • <strong>${pendingApprovals.length} persetujuan</strong> tertunda • Log terakhir: ${latestLog ? latestLog.jenis : '-'}</p>
                </div>
                <div class="flex flex-wrap items-center gap-2 shrink-0">
                    <button type="button" onclick="switchTab('users')" class="px-3 py-1.5 rounded-lg bg-[#881337] hover:bg-[#700F2D] text-white text-xs font-semibold">Kelola Pengguna</button>
                    <button type="button" onclick="downloadJsonBackup()" class="px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold">Unduh Backup (.JSON)</button>
                    <button type="button" onclick="switchTab('logs')" class="px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold">Audit Trail</button>
                </div>
            </div>
        `;
    }
    safeCreateIcons();
}

function changeRole() {
    const role = document.getElementById('roleSelector').value;
    const divScope = document.getElementById('activeDivisiScope').value;
    localStorage.setItem('sekata_pro_role', role);
    localStorage.setItem('sekata_pro_divisi', divScope);

    const roleCfg = ROLE_META[role] || ROLE_META.Admin;
    const scopeText = divScope === 'ALL' ? '' : ` • ${divScope}`;
    document.getElementById('roleIndicator').innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-rose-700"></span><span>${roleCfg.label}${scopeText}</span>`;

    const activeEmail = localStorage.getItem('sekata_pro_email') || 'sekretariat@bojonegoro.bawaslu.go.id';
    const authMode = localStorage.getItem('sekata_auth_mode') === 'server' ? 'Server' : 'Lokal';
    const roleLabelEl = document.getElementById('activeUserRoleLabel');
    const emailEl = document.getElementById('activeUserEmail');
    const modeEl = document.getElementById('activeAuthModeBadge');
    const navDashLabel = document.getElementById('navDashboardLabel');
    if (roleLabelEl) roleLabelEl.textContent = roleCfg.label;
    if (emailEl) emailEl.textContent = activeEmail;
    if (modeEl) modeEl.textContent = authMode;
    if (navDashLabel) navDashLabel.textContent = roleCfg.navTitle;

    const btnAdd = document.getElementById('btnAddRenja');
    const btnImport = document.getElementById('btnImportExcel');
    const btnAddPleno = document.getElementById('btnAddPleno');
    if (role === 'Pimpinan' || role === 'PIC') {
        btnAdd.classList.add('hidden');
        btnImport.classList.add('hidden');
    } else {
        btnAdd.classList.remove('hidden');
        btnImport.classList.remove('hidden');
    }
    if (btnAddPleno) {
        btnAddPleno.classList.toggle('hidden', role === 'PIC');
    }

    const tabNavMap = {
        renja: 'navRenjaBtn',
        approval: 'navApprovalBtn',
        aspirasi: 'navAspirasiBtn',
        pleno: 'navPlenoBtn',
        jadwal: 'navJadwalBtn',
        users: 'navUsersBtn',
        tautan: 'navTautanBtn',
        logs: 'navLogsBtn'
    };
    Object.keys(tabNavMap).forEach(tabKey => {
        const el = document.getElementById(tabNavMap[tabKey]);
        if (el) {
            el.classList.toggle('hidden', !roleCfg.tabs.includes(tabKey));
        }
    });
    const adminGroupLabel = document.getElementById('navAdminGroupLabel');
    if (adminGroupLabel) {
        const anyAdminVisible = ['users', 'tautan', 'logs'].some(t => roleCfg.tabs.includes(t));
        adminGroupLabel.classList.toggle('hidden', !anyAdminVisible);
    }

    if (!roleCfg.tabs.includes(activeTabId)) {
        switchTab('dashboard');
    } else if (activeTabId === 'dashboard') {
        document.getElementById('breadcrumbCurrent').textContent = roleCfg.navTitle;
        document.getElementById('pageTitle').textContent = roleCfg.pageTitle;
    }

    renderRoleWorkspace();
    renderRenjaTable();
    renderApprovals();
    renderPleno();
    renderAspirasi();
}

let budgetChartInst = null;
let statusChartInst = null;
let kurvaSChartInst = null;

function renderCharts() {
    const ta = getActiveTa();
    const taRenja = renjaData.filter(r => (r.ta || '2026') === ta);
    const totalPagu = taRenja.reduce((a, b) => a + b.pagu, 0);
    const totalSerapan = taRenja.reduce((a, b) => a + b.serapan, 0);
    const currentPct = totalPagu > 0 ? Number(((totalSerapan / totalPagu) * 100).toFixed(1)) : 0;
    const isDark = document.body.classList.contains('dark-mode');
    const gridColor = isDark ? '#1E293B' : '#F1F5F9';
    const tickColor = isDark ? '#94A3B8' : '#475569';

    // Kurva-S Chart
    const months = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
    const targetRpd = [5, 12, 20, 28, 36, 45, 54, 63, 72, 82, 91, 100];
    const aktualSerapan = ta === '2025'
        ? [6, 14, 22, 31, 40, 49, 58, 67, 76, 85, 93, currentPct]
        : [4.2, 10.5, 18.0, 24.5, 31.0, 38.2, 41.0, 42.5, 43.0, 44.0, currentPct, null];

    const ctxS = document.getElementById('kurvaSChart').getContext('2d');
    if (kurvaSChartInst) kurvaSChartInst.destroy();
    kurvaSChartInst = new Chart(ctxS, {
        type: 'line',
        data: {
            labels: months,
            datasets: [
                {
                    label: 'Target RPD Kumulatif (%)',
                    data: targetRpd,
                    borderColor: '#D97706',
                    borderDash: [5, 5],
                    backgroundColor: 'transparent',
                    tension: 0.3,
                    pointRadius: 3
                },
                {
                    label: 'Realisasi Aktual (%)',
                    data: aktualSerapan,
                    borderColor: '#9F1239',
                    backgroundColor: 'rgba(159, 18, 57, 0.1)',
                    fill: true,
                    tension: 0.3,
                    borderWidth: 2.5,
                    pointRadius: 4,
                    pointBackgroundColor: '#9F1239'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { position: 'bottom', labels: { color: tickColor, boxWidth: 12, font: { size: 11, family: 'IBM Plex Sans' } } } },
            scales: {
                y: { beginAtZero: true, max: 100, grid: { color: gridColor }, ticks: { color: tickColor, font: { size: 10, family: 'IBM Plex Mono' }, callback: v => v + '%' } },
                x: { grid: { display: false }, ticks: { color: tickColor, font: { size: 11, family: 'IBM Plex Sans' } } }
            }
        }
    });

    // Bar Chart per Divisi
    const divisions = ["Pencegahan & Parmas", "Penanganan Pelanggaran", "SDMO & Diklat", "Hukum & Penyelesaian Sengketa", "Sekretariat"];
    const paguVals = divisions.map(d => taRenja.filter(r => r.divisi === d).reduce((a, b) => a + b.pagu, 0));
    const serapanVals = divisions.map(d => taRenja.filter(r => r.divisi === d).reduce((a, b) => a + b.serapan, 0));

    const ctx1 = document.getElementById('budgetChart').getContext('2d');
    if (budgetChartInst) budgetChartInst.destroy();
    budgetChartInst = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ["Pencegahan", "Penanganan", "SDMO & Diklat", "Hukum & Sengketa", "Sekretariat"],
            datasets: [
                { label: 'Pagu Anggaran', data: paguVals, backgroundColor: '#CBD5E1', borderRadius: 4, barPercentage: 0.65 },
                { label: 'Realisasi Serapan', data: serapanVals, backgroundColor: '#881337', borderRadius: 4, barPercentage: 0.65 }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { position: 'bottom', labels: { color: tickColor, boxWidth: 12, font: { size: 11, family: 'IBM Plex Sans' } } } },
            scales: {
                y: { beginAtZero: true, grid: { color: gridColor }, ticks: { color: tickColor, font: { size: 10, family: 'IBM Plex Mono' }, callback: v => (v / 1000000) + ' Jt' } },
                x: { grid: { display: false }, ticks: { color: tickColor, font: { size: 11, family: 'IBM Plex Sans' } } }
            }
        }
    });

    // Doughnut Status
    const statuses = ["BERJALAN", "TERLAKSANA DAN TERSERAP", "TERLAKSANA BELUM TERSERAP", "BELUM TERLAKSANA", "POTENSI GESER"];
    const counts = statuses.map(s => taRenja.filter(r => r.status === s).length);

    const ctx2 = document.getElementById('statusChart').getContext('2d');
    if (statusChartInst) statusChartInst.destroy();
    statusChartInst = new Chart(ctx2, {
        type: 'doughnut',
        data: {
            labels: statuses,
            datasets: [{
                data: counts,
                backgroundColor: ['#0284C7', '#059669', '#D97706', '#94A3B8', '#9F1239'],
                borderWidth: 2,
                borderColor: isDark ? '#111827' : '#FFFFFF'
            }]
        },
        options: { responsive: true, maintainAspectRatio: false, cutout: '72%', plugins: { legend: { display: false } } }
    });
}

function renderDashboard() {
    const ta = getActiveTa();
    const taRenja = renjaData.filter(r => (r.ta || '2026') === ta);
    const taPleno = plenoData.filter(p => (p.ta || '2026') === ta);
    const taAspirasi = aspirasiData.filter(a => (a.ta || '2026') === ta);

    const totalPagu = taRenja.reduce((a, b) => a + b.pagu, 0);
    const totalSerapan = taRenja.reduce((a, b) => a + b.serapan, 0);
    const totalSisa = totalPagu - totalSerapan;
    const persen = totalPagu > 0 ? ((totalSerapan / totalPagu) * 100).toFixed(1) : 0;

    const todayStr = new Date().toISOString().slice(0, 10);
    const warningItems = taRenja.filter(r => r.status === 'POTENSI GESER' || (r.tanggal && r.tanggal < todayStr && r.serapan === 0));
    const banner = document.getElementById('earlyWarningBanner');
    if (warningItems.length > 0) {
        banner.classList.remove('hidden');
        document.getElementById('earlyWarningText').textContent = `Terdapat ${warningItems.length} pos kegiatan (${warningItems.map(i => i.id).join(', ')}) yang melewati jadwal atau berstatus POTENSI GESER dengan serapan Rp 0.`;
    } else {
        banner.classList.add('hidden');
    }

    document.getElementById('kpiPagu').textContent = formatRp(totalPagu);
    document.getElementById('kpiCountKegiatan').textContent = `${taRenja.length} Pos Kegiatan (TA ${ta})`;
    document.getElementById('kpiSerapan').textContent = formatRp(totalSerapan);
    document.getElementById('kpiPersen').textContent = `${persen}%`;
    document.getElementById('kpiProgressBar').style.width = `${Math.min(persen, 100)}%`;
    document.getElementById('kpiSisa').textContent = formatRp(totalSisa);

    const activePleno = taPleno.filter(p => p.status !== 'SELESAI');
    document.getElementById('kpiPlenoAktif').textContent = `${activePleno.length} Aktif`;
    document.getElementById('badgePleno').textContent = activePleno.length;
    document.getElementById('badgeAspirasi').textContent = taAspirasi.length;

    const pendingApr = approvalData.filter(a => a.statusApproval === 'PENDING').length;
    document.getElementById('badgeApproval').textContent = pendingApr;

    const statuses = [
        { key: "BERJALAN", color: "#0284C7" },
        { key: "TERLAKSANA DAN TERSERAP", color: "#059669" },
        { key: "TERLAKSANA BELUM TERSERAP", color: "#D97706" },
        { key: "BELUM TERLAKSANA", color: "#94A3B8" },
        { key: "POTENSI GESER", color: "#9F1239" }
    ];
    const totalCount = taRenja.length;
    document.getElementById('statusBreakdownList').innerHTML = statuses.map(s => {
        const cnt = taRenja.filter(r => r.status === s.key).length;
        const pctStatus = totalCount > 0 ? Math.round((cnt / totalCount) * 100) : 0;
        return `
            <div class="flex items-center justify-between text-xs py-1">
                <div class="flex items-center gap-2 min-w-0 pr-2">
                    <span class="w-2 h-2 rounded-full shrink-0" style="background-color:${s.color}"></span>
                    <span class="text-slate-600 truncate">${s.key}</span>
                </div>
                <span class="font-mono font-semibold text-slate-900 shrink-0">${cnt} <span class="text-[10px] font-normal text-slate-400">(${pctStatus}%)</span></span>
            </div>
        `;
    }).join('');

    document.getElementById('dashboardPlenoList').innerHTML = activePleno.slice(0, 2).map(p => `
        <div class="py-2 flex items-center justify-between gap-2">
            <div class="min-w-0">
                <span class="font-mono font-semibold text-[11px] text-slate-800">${p.id}</span>
                <p class="text-xs text-slate-700 truncate">${p.isi}</p>
            </div>
            <span class="font-mono text-[10px] font-semibold text-rose-700 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded shrink-0">${p.deadline}</span>
        </div>
    `).join('') || `<p class="text-xs text-slate-400">Seluruh tindak lanjut pleno telah selesai.</p>`;

    const kelompokList = ["Non-Operasional", "Operasional"];
    document.getElementById('kelompokAnggaranSummary').innerHTML = kelompokList.map(klp => {
        const items = taRenja.filter(r => (r.kelompok || "Non-Operasional") === klp);
        const paguK = items.reduce((a, b) => a + b.pagu, 0);
        const serapK = items.reduce((a, b) => a + b.serapan, 0);
        const pctK = paguK > 0 ? ((serapK / paguK) * 100).toFixed(1) : 0;
        return `
            <div class="py-2.5 first:pt-0">
                <div class="flex justify-between items-center text-xs mb-1">
                    <span class="font-bold text-slate-800">Anggaran ${klp}</span>
                    <span class="font-mono font-semibold text-slate-700">${pctK}%</span>
                </div>
                <div class="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mb-1.5">
                    <div class="h-full bg-rose-800 rounded-full" style="width: ${pctK}%"></div>
                </div>
                <div class="flex justify-between text-[11px] text-slate-500 font-mono">
                    <span>Serapan: ${formatRp(serapK)}</span>
                    <span>Pagu: ${formatRp(paguK)}</span>
                </div>
            </div>
        `;
    }).join('');

    renderCharts();
    renderRoleWorkspace();
}

function resetRenjaFilters() {
    document.getElementById('searchRenja').value = '';
    document.getElementById('filterDivisi').value = 'ALL';
    document.getElementById('filterStatus').value = 'ALL';
    renderRenjaTable();
    showToast("Filter data RENJA telah diatur ulang.", "info");
}

function renderRenjaTable() {
    const ta = getActiveTa();
    const q = document.getElementById('searchRenja').value.toLowerCase();
    const divF = document.getElementById('filterDivisi').value;
    const stF = document.getElementById('filterStatus').value;
    const role = document.getElementById('roleSelector').value;
    const divScope = document.getElementById('activeDivisiScope').value;

    const rows = renjaData.filter(item => {
        const mTa = (item.ta || '2026') === ta;
        const mText = item.nama.toLowerCase().includes(q) || item.id.toLowerCase().includes(q);
        const mDiv = divF === 'ALL' || item.divisi === divF;
        const mSt = stF === 'ALL' || item.status === stF;
        return mTa && mText && mDiv && mSt;
    });

    const tbody = document.getElementById('renjaTableBody');
    if (rows.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="10" class="py-10 px-4">
                    <div class="empty-state-box max-w-md mx-auto">
                        <p class="text-xs font-semibold text-slate-800">Tidak ada kegiatan RENJA yang sesuai</p>
                        <p class="text-[11px] text-slate-500 mt-1">Ubah kata kunci pencarian, filter divisi/status, atau beralih ke Tahun Anggaran lain.</p>
                        <button type="button" onclick="resetRenjaFilters()" class="mt-3 px-3 py-1.5 rounded-lg bg-[#881337] hover:bg-[#700F2D] text-white text-xs font-semibold">Reset Filter</button>
                    </div>
                </td>
            </tr>
        `;
    } else {
        tbody.innerHTML = rows.map(item => {
        const sisa = item.pagu - item.serapan;
        const pct = item.pagu > 0 ? ((item.serapan / item.pagu) * 100).toFixed(1) : 0;
        const tglHtml = item.tanggal
            ? `<span class="font-mono text-slate-700">${item.tanggal}</span>`
            : `<span class="inline-block px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200 text-[11px] font-medium">Belum ditentukan</span>`;

        const allowedByDiv = divScope === 'ALL' || item.divisi === divScope || role === 'Admin';
        let actionHtml = `<span class="text-[11px] text-slate-400">Hanya Lihat</span>`;
        if (role !== 'Pimpinan' && allowedByDiv) {
            actionHtml = `
                <div class="inline-flex items-center gap-1">
                    <button onclick="openEditApprovalModal('${item.id}')" class="px-2 py-1 text-[11px] font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-md transition-colors">Serapan</button>
                    ${(role === 'Admin' || role === 'Operator') ? `<button onclick="openRevisiPaguModal('${item.id}')" class="px-2 py-1 text-[11px] font-semibold text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-md transition-colors" title="Catat Revisi POK">POK</button>` : ''}
                </div>
            `;
        }

        const tahapVal = item.tahap || 'Belum Diajukan';

        return `
            <tr class="hover:bg-slate-50/90 transition-colors">
                <td class="py-3 px-4 font-mono text-[11px] font-semibold text-slate-600 whitespace-nowrap">${item.id}</td>
                <td class="py-3 px-4 font-medium text-slate-900 max-w-xs">${item.nama}</td>
                <td class="py-3 px-4">
                    <p class="font-semibold text-slate-800">${item.divisi}</p>
                    <p class="text-[11px] text-slate-500">${item.kelompok || 'Non-Operasional'} • ${item.tipe}</p>
                </td>
                <td class="py-3 px-4 whitespace-nowrap">${tglHtml}</td>
                <td class="py-3 px-4 text-right font-mono text-slate-800 whitespace-nowrap">${formatRp(item.pagu)}</td>
                <td class="py-3 px-4 text-right whitespace-nowrap">
                    <p class="font-mono font-medium text-emerald-700">${formatRp(item.serapan)}</p>
                    <div class="flex items-center justify-end gap-1.5 mt-1">
                        <div class="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                            <div class="h-full bg-emerald-600 rounded-full" style="width:${Math.min(pct, 100)}%"></div>
                        </div>
                        <span class="font-mono text-[10px] text-slate-500">${pct}%</span>
                    </div>
                </td>
                <td class="py-3 px-4 text-right font-mono text-slate-800 whitespace-nowrap">${formatRp(sisa)}</td>
                <td class="py-3 px-4 whitespace-nowrap">
                    <span class="inline-block px-2 py-0.5 rounded text-[10px] ${getTahapBadge(tahapVal)}">${tahapVal}</span>
                </td>
                <td class="py-3 px-4 whitespace-nowrap">
                    <span class="inline-block px-2 py-0.5 rounded border text-[10px] font-semibold ${getStatusBadge(item.status)}">${item.status}</span>
                </td>
                <td class="py-3 px-4 text-center no-print whitespace-nowrap">${actionHtml}</td>
            </tr>
        `;
    }).join('');
    }

    document.getElementById('revisiPaguHistoryList').innerHTML = revisiPaguData.map(rev => `
        <div class="py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
                <span class="font-mono font-bold text-rose-900">${rev.nomor}</span>
                <span class="text-slate-400 mx-1">•</span>
                <span class="font-mono font-semibold text-slate-800">${rev.renjaId}</span>
                <p class="text-slate-600 mt-0.5">${rev.keterangan}</p>
            </div>
            <div class="text-right font-mono text-[11px] shrink-0">
                <span class="line-through text-slate-400">${formatRp(rev.paguLama)}</span> →
                <strong class="text-slate-900">${formatRp(rev.paguBaru)}</strong>
            </div>
        </div>
    `).join('') || `<p class="text-xs text-slate-400">Belum ada riwayat pergeseran pagu POK.</p>`;
}

function openRevisiPaguModal(id) {
    const item = renjaData.find(r => r.id === id);
    if (!item) return;
    document.getElementById('revRenjaId').value = item.id;
    document.getElementById('revRenjaNama').textContent = `${item.id} — ${item.nama}`;
    document.getElementById('revPaguSekarang').textContent = `Pagu Saat Ini: ${formatRp(item.pagu)} (Terserap: ${formatRp(item.serapan)})`;
    document.getElementById('revPaguBaru').value = item.pagu;
    openModal('modalRevisiPagu');
}

function submitRevisiPagu(e) {
    e.preventDefault();
    const id = document.getElementById('revRenjaId').value;
    const item = renjaData.find(r => r.id === id);
    const paguBaru = Number(document.getElementById('revPaguBaru').value);
    if (paguBaru < item.serapan) {
        showToast("Pagu revisi tidak boleh lebih kecil dari realisasi yang sudah terserap!", "error");
        return;
    }
    revisiPaguData.unshift({
        nomor: document.getElementById('revNomor').value,
        renjaId: item.id,
        paguLama: item.pagu,
        paguBaru: paguBaru,
        keterangan: document.getElementById('revKeterangan').value,
        waktu: new Date().toISOString().slice(0, 10)
    });
    item.pagu = paguBaru;
    closeModal('modalRevisiPagu');
    e.target.reset();
    persistData();
    refreshAll();
    showToast("Revisi pagu POK & riwayat pergeseran berhasil dicatat.", "success");
}

function renderAspirasi() {
    const ta = getActiveTa();
    const items = aspirasiData.filter(a => (a.ta || '2026') === ta);
    const container = document.getElementById('aspirasiCardsContainer');
    if (items.length === 0) {
        container.innerHTML = `
            <div class="md:col-span-2 empty-state-box">
                <p class="text-xs font-semibold text-slate-800">Belum ada usulan atau pemikiran pada TA ${ta}</p>
                <p class="text-[11px] text-slate-500 mt-1">Staf dan koordinator divisi dapat menuangkan kendala lapangan maupun usulan pergeseran anggaran.</p>
                <button type="button" onclick="openModal('modalAspirasi')" class="mt-3 px-3.5 py-1.5 rounded-lg bg-[#881337] hover:bg-[#700F2D] text-white text-xs font-semibold">Tuangkan Usulan Pertama</button>
            </div>
        `;
        return;
    }
    container.innerHTML = items.map(asp => `
        <div class="bg-white p-5 rounded-xl border border-slate-200/90 flex flex-col justify-between gap-4">
            <div>
                <div class="flex items-center justify-between text-xs mb-2">
                    <span class="font-mono font-bold text-rose-900">${asp.id} <span class="font-normal text-slate-400">• ${asp.kategori}</span></span>
                    <span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-sky-50 text-sky-800 border border-sky-200">${asp.status}</span>
                </div>
                <h4 class="font-bold text-xs text-slate-900 mb-1.5">${asp.judul}</h4>
                <p class="text-xs text-slate-600 leading-relaxed mb-2.5">${asp.uraian}</p>
                <p class="text-[11px] text-slate-700 pt-2 border-t border-slate-100">
                    <strong>Rekomendasi Solusi:</strong> ${asp.solusi}
                </p>
            </div>
            <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span class="text-slate-500">Oleh: <strong class="text-slate-800">${asp.pengusul}</strong> (${asp.divisi})</span>
                <div class="flex items-center gap-2">
                    <button onclick="upvoteAspirasi('${asp.id}')" class="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold flex items-center gap-1">
                        <i data-lucide="thumbs-up" class="w-3 h-3 text-rose-800"></i> ${asp.suara}
                    </button>
                    <button onclick="angkatKePleno('${asp.id}')" class="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold">
                        Angkat ke Pleno
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    safeCreateIcons();
}

function saveAspirasi(e) {
    e.preventDefault();
    aspirasiData.unshift({
        id: `ASP-${getActiveTa()}-0${aspirasiData.length + 1}`,
        ta: getActiveTa(),
        pengusul: document.getElementById('aspPengusul').value,
        divisi: document.getElementById('aspDivisi').value,
        kategori: document.getElementById('aspKategori').value,
        judul: document.getElementById('aspJudul').value,
        uraian: document.getElementById('aspUraian').value,
        solusi: document.getElementById('aspSolusi').value,
        suara: 1,
        status: "DITAMPUNG"
    });
    closeModal('modalAspirasi');
    e.target.reset();
    persistData();
    refreshAll();
    showToast("Pemikiran & usulan Anda berhasil dituangkan ke Pojok Aspirasi.", "success");
}

function upvoteAspirasi(id) {
    const item = aspirasiData.find(a => a.id === id);
    if (item) {
        item.suara += 1;
        persistData();
        renderAspirasi();
    }
}

function angkatKePleno(id) {
    const item = aspirasiData.find(a => a.id === id);
    if (!item) return;
    item.status = "MASUK AGENDA PLENO";
    document.getElementById('plenoIsi').value = `[Tindak Lanjut Usulan ${item.id} - ${item.divisi}] ${item.judul}: ${item.solusi}`;
    document.getElementById('plenoDivisi').value = item.divisi;
    persistData();
    renderAspirasi();
    openModal('modalPleno');
}

function openRangkumanDimPleno() {
    const ta = getActiveTa();
    const items = aspirasiData.filter(a => (a.ta || '2026') === ta);
    document.getElementById('dimPlenoContent').innerHTML = `
        <table class="w-full text-left border-collapse border border-slate-300">
            <thead>
                <tr class="bg-slate-100">
                    <th class="border border-slate-300 p-2">Kode & Divisi</th>
                    <th class="border border-slate-300 p-2">Pokok Pemikiran / Masalah</th>
                    <th class="border border-slate-300 p-2">Rekomendasi Solusi</th>
                    <th class="border border-slate-300 p-2 text-center">Dukungan</th>
                </tr>
            </thead>
            <tbody>
                ${items.map(a => `
                    <tr>
                        <td class="border border-slate-300 p-2"><strong>${a.id}</strong><br>${a.divisi}<br><span class="text-[10px] text-slate-500">(${a.pengusul})</span></td>
                        <td class="border border-slate-300 p-2"><strong>${a.judul}</strong><br>${a.uraian}</td>
                        <td class="border border-slate-300 p-2">${a.solusi}</td>
                        <td class="border border-slate-300 p-2 text-center font-mono font-bold">${a.suara} suara</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
    openModal('modalDimPleno');
}

function openEditApprovalModal(id) {
    const item = renjaData.find(r => r.id === id);
    if (!item) return;
    document.getElementById('editRenjaId').value = item.id;
    document.getElementById('editRenjaPagu').value = item.pagu;
    document.getElementById('editRenjaPaguLabel').textContent = formatRp(item.pagu);
    document.getElementById('editRenjaNama').textContent = `${item.id} — ${item.nama}`;
    document.getElementById('editSerapanBaru').value = item.serapan;
    document.getElementById('editTahapBaru').value = item.tahap || "Pengajuan SPJ";
    document.getElementById('editStatusBaru').value = item.status;
    openModal('modalEditApproval');
}

async function submitChangeRequest(e) {
    e.preventDefault();
    const id = document.getElementById('editRenjaId').value;
    const paguLimit = Number(document.getElementById('editRenjaPagu').value);
    const serapanBaru = Number(document.getElementById('editSerapanBaru').value);

    if (serapanBaru > paguLimit) {
        showToast(`Over-Budget Guard: Nominal serapan (${formatRp(serapanBaru)}) melebihi batas pagu kegiatan (${formatRp(paguLimit)})!`, "error");
        return;
    }

    const item = renjaData.find(r => r.id === id);
    const role = document.getElementById('roleSelector').value;
    const tahapBaru = document.getElementById('editTahapBaru').value;
    const statusBaru = document.getElementById('editStatusBaru').value;
    const alasan = document.getElementById('editAlasan').value;
    const fileInput = document.getElementById('editSpjFile');
    const fileObj = fileInput.files[0];
    const dataUrl = await readFileAsDataUrl(fileObj);

    if (role === 'Admin') {
        item.serapan = serapanBaru;
        item.tahap = tahapBaru;
        item.status = statusBaru;
        logsData.unshift({
            waktu: new Date().toISOString().replace('T', ' ').slice(0, 19),
            jenis: `Pembaruan RENJA & Tahap ${tahapBaru} (Admin)`,
            penerima: "admin@bojonegoro.bawaslu.go.id",
            referensi: item.id,
            status: "TERCATAT"
        });
        showToast("Perubahan data RENJA & tahapan keuangan berhasil disimpan.", "success");
    } else {
        const aprId = `APR-2026-0${approvalData.length + 1}`;
        approvalData.unshift({
            id: aprId,
            renjaId: item.id,
            renjaDivisi: item.divisi,
            renjaNama: item.nama,
            pemohon: role,
            serapanLama: item.serapan,
            serapanBaru: serapanBaru,
            tahapBaru: tahapBaru,
            statusBaru: statusBaru,
            alasan: alasan,
            lampiranNama: fileObj ? fileObj.name : null,
            lampiranDataUrl: dataUrl,
            waktu: new Date().toISOString().replace('T', ' ').slice(0, 19),
            statusApproval: "PENDING"
        });
        logsData.unshift({
            waktu: new Date().toISOString().replace('T', ' ').slice(0, 19),
            jenis: "Notifikasi Pengajuan Persetujuan Perubahan",
            penerima: "pimpinan@bojonegoro.bawaslu.go.id",
            referensi: aprId,
            status: "TERKIRIM"
        });
        showToast("Usulan perubahan & lampiran SPJ dikirim untuk persetujuan.", "info");
    }

    closeModal('modalEditApproval');
    e.target.reset();
    persistData();
    refreshAll();
}

function renderApprovals() {
    const role = document.getElementById('roleSelector').value;
    const divScope = document.getElementById('activeDivisiScope').value;
    const container = document.getElementById('approvalListContainer');
    if (approvalData.length === 0) {
        container.innerHTML = `
            <div class="empty-state-box">
                <p class="text-xs font-semibold text-slate-800">Belum ada pengajuan perubahan realisasi</p>
                <p class="text-[11px] text-slate-500 mt-1">Setiap usulan pembaruan serapan SPJ/SP2D dari divisi akan tampil di sini untuk diverifikasi.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = approvalData.map(apr => {
        const badge = {
            PENDING: "bg-amber-50 text-amber-800 border-amber-200",
            APPROVED: "bg-emerald-50 text-emerald-700 border-emerald-200",
            REJECTED: "bg-rose-50 text-rose-700 border-rose-200"
        }[apr.statusApproval];

        const canApprove = (role === 'Admin' || role === 'Pimpinan') ||
                           (role === 'Kordiv' && (divScope === 'ALL' || divScope === apr.renjaDivisi));

        const lampiranBtn = apr.lampiranNama ? `
            <button onclick="openDocumentPreview('Lampiran Bukti SPJ — ${apr.id}', '${apr.lampiranNama}', '${apr.lampiranDataUrl}')"
                class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-rose-50 hover:bg-rose-100 text-rose-900 border border-rose-200 text-[11px] font-semibold mt-1.5 transition-colors">
                <i data-lucide="file-text" class="w-3.5 h-3.5"></i>
                Pratinjau SPJ (${apr.lampiranNama})
            </button>
        ` : '';

        return `
            <div class="bg-white p-5 rounded-xl border border-slate-200/90 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div class="space-y-1">
                    <div class="flex flex-wrap items-center gap-2 text-[11px]">
                        <span class="font-mono font-bold text-slate-900">${apr.id}</span>
                        <span class="text-slate-400">•</span>
                        <span class="text-slate-600">Pemohon: <strong>${apr.pemohon}</strong> (${apr.waktu})</span>
                        <span class="px-2 py-0.5 rounded border font-semibold ${badge}">${apr.statusApproval}</span>
                    </div>
                    <h4 class="font-bold text-xs text-slate-900">${apr.renjaId} — ${apr.renjaNama}</h4>
                    <p class="text-xs text-slate-600">
                        Serapan: <span class="font-mono line-through text-slate-400">${formatRp(apr.serapanLama)}</span> → 
                        <strong class="font-mono text-emerald-700">${formatRp(apr.serapanBaru)}</strong> 
                        <span class="mx-1.5 text-slate-300">|</span> 
                        Tahap Keuangan: <strong>${apr.tahapBaru || 'Verifikasi BPP'}</strong>
                    </p>
                    <p class="text-xs text-slate-500">Keterangan: "${apr.alasan}"</p>
                    <div>${lampiranBtn}</div>
                </div>

                <div class="flex items-center gap-2 shrink-0">
                    ${apr.statusApproval === 'PENDING' && canApprove ? `
                        <button onclick="processApproval('${apr.id}', 'APPROVED')" class="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors">
                            Setujui
                        </button>
                        <button onclick="processApproval('${apr.id}', 'REJECTED')" class="px-3.5 py-1.5 rounded-lg bg-white hover:bg-rose-50 text-rose-700 border border-rose-300 text-xs font-semibold transition-colors">
                            Tolak
                        </button>
                    ` : ''}
                </div>
            </div>
        `;
    }).join('');
    safeCreateIcons();
}

function processApproval(aprId, decision) {
    const apr = approvalData.find(a => a.id === aprId);
    if (!apr) return;
    apr.statusApproval = decision;

    if (decision === 'APPROVED') {
        const target = renjaData.find(r => r.id === apr.renjaId);
        if (target) {
            target.serapan = apr.serapanBaru;
            target.tahap = apr.tahapBaru || target.tahap;
            target.status = apr.statusBaru;
        }
    }

    logsData.unshift({
        waktu: new Date().toISOString().replace('T', ' ').slice(0, 19),
        jenis: `Notifikasi Hasil Persetujuan (${decision})`,
        penerima: "pic@bojonegoro.bawaslu.go.id",
        referensi: apr.id,
        status: "TERKIRIM"
    });

    persistData();
    refreshAll();
    showToast(`Pengajuan ${apr.id} telah diproses (${decision}) & notifikasi email dikirim.`, "success");
}

function renderUsers() {
    document.getElementById('usersTableBody').innerHTML = usersData.map(u => `
        <tr class="hover:bg-slate-50/80">
            <td class="py-3 px-4">
                <p class="font-bold text-slate-900">${u.nama}</p>
                <p class="font-mono text-[11px] text-slate-500">NIP. ${u.nip || '-'}</p>
            </td>
            <td class="py-3 px-4 text-slate-700">${u.jabatan}</td>
            <td class="py-3 px-4 font-mono text-[11px] text-rose-900">${u.email}</td>
            <td class="py-3 px-4">
                <span class="font-semibold text-slate-800">${u.role}</span>
                <span class="text-slate-400">•</span>
                <span class="text-slate-600">${u.divisi}</span>
            </td>
            <td class="py-3 px-4">
                <span class="px-2 py-0.5 rounded text-[10px] font-semibold border ${u.aktif ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-slate-100 text-slate-500 border-slate-200'}">
                    ${u.aktif ? 'AKTIF' : 'NONAKTIF'}
                </span>
            </td>
            <td class="py-3 px-4 text-center">
                <button onclick="toggleUserActive(${u.id})" class="px-2.5 py-1 rounded border border-slate-300 hover:bg-slate-100 text-[11px] font-semibold text-slate-700">
                    ${u.aktif ? 'Nonaktifkan' : 'Aktifkan'}
                </button>
            </td>
        </tr>
    `).join('');
}

function saveUser(e) {
    e.preventDefault();
    usersData.push({
        id: usersData.length + 1,
        nip: document.getElementById('userNip').value,
        nama: document.getElementById('userNama').value,
        jabatan: document.getElementById('userJabatan').value,
        email: document.getElementById('userEmail').value,
        role: document.getElementById('userRole').value,
        divisi: document.getElementById('userDivisi').value,
        aktif: true
    });
    closeModal('modalUser');
    e.target.reset();
    persistData();
    renderUsers();
    showToast("Akun pegawai baru berhasil ditambahkan.", "success");
}

function toggleUserActive(id) {
    const u = usersData.find(item => item.id === id);
    if (u) {
        u.aktif = !u.aktif;
        persistData();
        renderUsers();
        showToast(`Status akun ${u.nama} diperbarui.`, "info");
    }
}

function handleExcelUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        const wb = XLSX.read(new Uint8Array(e.target.result), { type: 'array' });
        const rows = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
        if (rows.length === 0) {
            showToast("Berkas spreadsheet tidak memiliki baris data.", "error");
            return;
        }

        let count = 0;
        const ta = getActiveTa();
        rows.forEach((r, idx) => {
            const rawTgl = r.Tanggal ? String(r.Tanggal).trim() : "";
            const parsedTgl = (!rawTgl || rawTgl.toLowerCase() === "belum") ? null : rawTgl;
            const pagu = Number(r.Pagu || 0);
            const serapan = Math.min(Number(r.Serapan || 0), pagu);
            renjaData.unshift({
                id: r.Kode || `RJ-${ta}-IMP-${idx + 1}`,
                ta: ta,
                nama: r["Nama Kegiatan"] || r.Kegiatan || "Kegiatan RENJA",
                divisi: r.Divisi || "Sekretariat",
                kelompok: r.Kelompok || "Non-Operasional",
                tipe: r.Tipe || "Rapat Biasa",
                tanggal: parsedTgl,
                pagu: pagu,
                serapan: serapan,
                tahap: r.Tahap || "Belum Diajukan",
                status: (r.Status || "BELUM TERLAKSANA").toUpperCase()
            });
            count++;
        });

        logsData.unshift({
            waktu: new Date().toISOString().replace('T', ' ').slice(0, 19),
            jenis: `Impor Spreadsheet RENJA (${count} Pos)`,
            penerima: document.getElementById('roleSelector').value,
            referensi: file.name,
            status: "BERHASIL"
        });

        closeModal('modalImport');
        event.target.value = "";
        persistData();
        refreshAll();
        showToast(`Berhasil mengimpor ${count} pos kegiatan dari ${file.name}.`, "success");
    };
    reader.readAsArrayBuffer(file);
}

function exportRenjaExcel() {
    const ta = getActiveTa();
    const taRenja = renjaData.filter(r => (r.ta || '2026') === ta);
    const data = taRenja.map(item => ({
        "Tahun Anggaran": ta,
        "Kode": item.id,
        "Nama Kegiatan": item.nama,
        "Divisi": item.divisi,
        "Kelompok Anggaran": item.kelompok || "Non-Operasional",
        "Tipe Kegiatan": item.tipe,
        "Tanggal": item.tanggal || "Belum ditentukan",
        "Pagu (Rp)": item.pagu,
        "Serapan (Rp)": item.serapan,
        "Sisa Anggaran (Rp)": item.pagu - item.serapan,
        "Persentase (%)": item.pagu > 0 ? Number(((item.serapan / item.pagu) * 100).toFixed(2)) : 0,
        "Tahap Keuangan": item.tahap || "Belum Diajukan",
        "Status": item.status
    }));
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, `RENJA_${ta}`);
    XLSX.writeFile(wb, `Rekap_RENJA_Bawaslu_Bojonegoro_${ta}.xlsx`);
    showToast("Berkas Excel rekapitulasi RENJA berhasil diunduh.", "success");
}

function downloadTemplateExcel() {
    const sample = [
        { "Kode": "RJ-2026-10", "Nama Kegiatan": "Rapat Koordinasi Pengawasan Tahapan", "Divisi": "Pencegahan & Parmas", "Kelompok": "Non-Operasional", "Tipe": "Rapat Biasa", "Tanggal": "2026-12-12", "Pagu": 25000000, "Serapan": 10000000, "Tahap": "Terbit SPM", "Status": "BERJALAN" },
        { "Kode": "RJ-2026-11", "Nama Kegiatan": "Belanja Operasional Pemeliharaan Kendaraan Dinas", "Divisi": "Sekretariat", "Kelompok": "Operasional", "Tipe": "Operasional Rutin", "Tanggal": "belum", "Pagu": 18000000, "Serapan": 0, "Tahap": "Belum Diajukan", "Status": "BELUM TERLAKSANA" }
    ];
    const ws = XLSX.utils.json_to_sheet(sample);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Template_RENJA");
    XLSX.writeFile(wb, "Template_RENJA_Bawaslu_Bojonegoro.xlsx");
}

function renderJadwal() {
    const ta = getActiveTa();
    const taRenja = renjaData.filter(r => (r.ta || '2026') === ta);
    const scheduled = taRenja.filter(r => r.tanggal !== null);
    const unscheduled = taRenja.filter(r => r.tanggal === null);

    document.getElementById('scheduledEventsList').innerHTML = scheduled.map(ev => `
        <div class="py-3 first:pt-0 flex items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors">
            <div class="flex items-center gap-3.5">
                <div class="px-3 py-2 rounded-lg bg-rose-950 text-white text-center shrink-0">
                    <span class="block font-mono text-[10px] text-amber-300">${ev.tanggal.slice(0,7)}</span>
                    <span class="block font-mono font-bold text-sm leading-tight">${ev.tanggal.slice(8,10)}</span>
                </div>
                <div>
                    <h4 class="font-semibold text-xs text-slate-900">${ev.nama}</h4>
                    <p class="text-[11px] text-slate-500 mt-0.5">${ev.divisi} • ${ev.tipe}</p>
                </div>
            </div>
            <span class="px-2 py-0.5 rounded border text-[10px] font-semibold shrink-0 ${getStatusBadge(ev.status)}">${ev.status}</span>
        </div>
    `).join('') || `<div class="empty-state-box"><p class="text-xs text-slate-500">Belum ada kegiatan terjadwal pada Tahun Anggaran ${ta}.</p></div>`;

    document.getElementById('unscheduledEventsList').innerHTML = unscheduled.map(ev => `
        <div class="py-2.5 first:pt-0">
            <div class="flex items-center justify-between text-[10px] mb-1">
                <span class="font-mono font-bold text-amber-900">${ev.id}</span>
                <span class="text-amber-800 font-semibold">${ev.divisi}</span>
            </div>
            <p class="text-xs font-medium text-slate-800">${ev.nama}</p>
        </div>
    `).join('') || `<p class="text-xs text-emerald-700 font-medium">Seluruh kegiatan TA ${ta} sudah memiliki tanggal definitif.</p>`;
}

function renderPleno() {
    const ta = getActiveTa();
    const taPleno = plenoData.filter(p => (p.ta || '2026') === ta);
    const container = document.getElementById('plenoCardsContainer');
    if (taPleno.length === 0) {
        container.innerHTML = `
            <div class="md:col-span-2 empty-state-box">
                <p class="text-xs font-semibold text-slate-800">Belum ada register keputusan pleno pada TA ${ta}</p>
                <p class="text-[11px] text-slate-500 mt-1">Catat keputusan rapat pleno agar penanggung jawab dan tenggat waktu dapat dipantau.</p>
            </div>
        `;
        return;
    }
    container.innerHTML = taPleno.map(pl => {
        const isDone = pl.status === 'SELESAI';
        const cd = getDeadlineCountdown(pl.deadline);
        const buktiBtn = pl.buktiNama ? `
            <button onclick="openDocumentPreview('Bukti Tindak Lanjut Pleno — ${pl.id}', '${pl.buktiNama}', '${pl.buktiDataUrl}')"
                class="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-[11px] font-semibold">
                <i data-lucide="file-check" class="w-3.5 h-3.5"></i>
                Lihat Bukti (${pl.buktiNama})
            </button>
        ` : '';

        return `
            <div class="bg-white p-5 rounded-xl border ${isDone ? 'border-emerald-200' : 'border-slate-200/90'} flex flex-col justify-between gap-4">
                <div>
                    <div class="flex items-center justify-between text-xs mb-1.5">
                        <span class="font-mono font-bold text-slate-900">${pl.id} <span class="font-normal text-slate-400">• ${pl.tanggalRapat}</span></span>
                        <div class="flex items-center gap-1.5">
                            ${!isDone ? `<span class="font-mono text-[10px] font-semibold px-2 py-0.5 rounded border ${cd.cls}">${cd.text}</span>` : ''}
                            <span class="px-2 py-0.5 rounded text-[10px] font-semibold border ${isDone ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-amber-50 text-amber-800 border-amber-200'}">${pl.status}</span>
                        </div>
                    </div>
                    <p class="text-[11px] font-semibold text-rose-900 mb-2">${pl.sidang || 'Pleno Rutin Mingguan'}</p>
                    <p class="text-xs font-medium text-slate-800 leading-relaxed">${pl.isi}</p>
                    ${pl.catatanSelesai ? `<p class="text-[11px] text-slate-500 mt-2 italic">Hasil: "${pl.catatanSelesai}"</p>` : ''}
                    ${buktiBtn}
                </div>
                <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs no-print">
                    <div>
                        <p class="text-slate-600">PIC: <strong class="text-slate-900">${pl.pic}</strong> (${pl.divisi})</p>
                        <p class="font-mono text-[11px] text-rose-700 mt-0.5">Tenggat: ${pl.deadline}</p>
                    </div>
                    ${!isDone ? `
                        <button onclick="openCompletePlenoModal('${pl.id}')" class="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-colors">
                            Unggah Bukti & Selesai
                        </button>
                    ` : `<span class="text-emerald-700 font-semibold text-xs">Tuntas Terverifikasi</span>`}
                </div>
            </div>
        `;
    }).join('');
    safeCreateIcons();
}

function openCompletePlenoModal(id) {
    const item = plenoData.find(p => p.id === id);
    if (!item) return;
    document.getElementById('completePlenoId').value = item.id;
    document.getElementById('completePlenoLabel').textContent = `${item.id} — PIC: ${item.pic}`;
    openModal('modalCompletePleno');
}

async function submitCompletePleno(e) {
    e.preventDefault();
    const id = document.getElementById('completePlenoId').value;
    const item = plenoData.find(p => p.id === id);
    const catatan = document.getElementById('completePlenoCatatan').value;
    const fileObj = document.getElementById('completePlenoFile').files[0];
    const dataUrl = await readFileAsDataUrl(fileObj);

    if (item) {
        item.status = "SELESAI";
        item.catatanSelesai = catatan;
        item.buktiNama = fileObj ? fileObj.name : "Bukti_Pleno.pdf";
        item.buktiDataUrl = dataUrl;

        logsData.unshift({
            waktu: new Date().toISOString().replace('T', ' ').slice(0, 19),
            jenis: "Penyelesaian Tindak Lanjut & Arsip Bukti Pleno",
            penerima: item.email,
            referensi: item.id,
            status: "SELESAI"
        });
    }

    closeModal('modalCompletePleno');
    e.target.reset();
    persistData();
    refreshAll();
    showToast(`Tindak lanjut ${id} ditandai selesai beserta dokumen bukti.`, "success");
}

function renderLogs() {
    document.getElementById('logsTableBody').innerHTML = logsData.map(l => `
        <tr>
            <td class="py-2.5 px-4 font-mono text-[11px] text-slate-500 whitespace-nowrap">${l.waktu}</td>
            <td class="py-2.5 px-4 font-medium text-slate-900">${l.jenis}</td>
            <td class="py-2.5 px-4 font-mono text-[11px] text-rose-900">${l.penerima}</td>
            <td class="py-2.5 px-4 font-mono text-[11px] text-slate-600">${l.referensi}</td>
            <td class="py-2.5 px-4">
                <span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">${l.status}</span>
            </td>
        </tr>
    `).join('');
}

function saveRenja(e) {
    e.preventDefault();
    const pagu = Number(document.getElementById('inputPagu').value);
    const serapan = Number(document.getElementById('inputSerapan').value);
    if (serapan > pagu) {
        showToast("Over-Budget Guard: Nominal serapan awal tidak boleh melebihi pagu!", "error");
        return;
    }

    const ta = getActiveTa();
    const tgl = document.getElementById('inputTanggal').value;
    renjaData.unshift({
        id: `RJ-${ta}-0${renjaData.length + 1}`,
        ta: ta,
        nama: document.getElementById('inputNama').value,
        divisi: document.getElementById('inputDivisi').value,
        kelompok: document.getElementById('inputKelompok').value,
        tipe: document.getElementById('inputTipe').value,
        tanggal: tgl ? tgl : null,
        pagu: pagu,
        serapan: serapan,
        tahap: document.getElementById('inputTahap').value,
        status: document.getElementById('inputStatus').value
    });
    closeModal('modalRenja');
    e.target.reset();
    persistData();
    refreshAll();
    showToast("Pos kegiatan RENJA berhasil ditambahkan.", "success");
}

function savePleno(e) {
    e.preventDefault();
    const ta = getActiveTa();
    const idBaru = `PL-${ta}-0${plenoData.length + 1}`;
    const pic = document.getElementById('plenoPic').value;
    const email = document.getElementById('plenoEmail').value;

    plenoData.unshift({
        id: idBaru,
        ta: ta,
        sidang: document.getElementById('plenoSidang').value,
        tanggalRapat: new Date().toISOString().slice(0, 10),
        isi: document.getElementById('plenoIsi').value,
        divisi: document.getElementById('plenoDivisi').value,
        pic: pic,
        email: email,
        deadline: document.getElementById('plenoDeadline').value,
        status: "PROSES",
        buktiNama: null,
        buktiDataUrl: null,
        catatanSelesai: ""
    });

    logsData.unshift({
        waktu: new Date().toISOString().replace('T', ' ').slice(0, 19),
        jenis: "Notifikasi Penugasan Pleno Baru",
        penerima: email,
        referensi: idBaru,
        status: "TERKIRIM"
    });

    closeModal('modalPleno');
    e.target.reset();
    persistData();
    refreshAll();
    showToast(`Keputusan pleno dicatat & email penugasan dikirim ke ${email}.`, "success");
}

function openModal(id) { document.getElementById(id).classList.remove('hidden'); }
function closeModal(id) { document.getElementById(id).classList.add('hidden'); }

document.getElementById('openSidebar').addEventListener('click', () => document.getElementById('sidebar').classList.remove('-translate-x-full'));
document.getElementById('closeSidebar').addEventListener('click', () => document.getElementById('sidebar').classList.add('-translate-x-full'));

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.fixed.inset-0:not(.hidden)').forEach(modal => {
            if (modal.id && modal.id.startsWith('modal')) {
                closeModal(modal.id);
            }
        });
    }
});

function syncWorkspaceOfflineBanner() {
    const banner = document.getElementById('workspaceOfflineBanner');
    if (!banner) return;
    banner.classList.toggle('is-hidden', navigator.onLine);
}

window.addEventListener('online', () => {
    syncWorkspaceOfflineBanner();
    showToast("Koneksi internet kembali tersambung.", "success");
});
window.addEventListener('offline', () => {
    syncWorkspaceOfflineBanner();
    showToast("Jaringan terputus. Perubahan data tetap tersimpan lokal.", "warning");
});

function refreshAll() {
    renderDashboard();
    renderRenjaTable();
    renderApprovals();
    renderAspirasi();
    renderJadwal();
    renderPleno();
    renderUsers();
    renderLogs();
}

const savedRole = localStorage.getItem('sekata_pro_role');
const savedDiv = localStorage.getItem('sekata_pro_divisi');
if (savedRole) document.getElementById('roleSelector').value = savedRole;
if (savedDiv) document.getElementById('activeDivisiScope').value = savedDiv;
if (localStorage.getItem('sekata_dark_mode') === '1') {
    document.body.classList.add('dark-mode');
    document.getElementById('btnDarkMode').innerHTML = `<i data-lucide="sun" class="w-4 h-4 text-amber-400"></i>`;
}

syncWorkspaceOfflineBanner();
changeRole();
refreshAll();
