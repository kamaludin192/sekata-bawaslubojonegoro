<?php
header('Content-Type: application/json; charset=utf-8');
require_once __DIR__ . '/../includes/security.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $ta = (int)($_GET['ta'] ?? 2026);
    $stmt = $pdo->prepare("
        SELECT r.*, d.nama_divisi AS divisi 
        FROM renja_kegiatan r
        JOIN divisi d ON r.divisi_id = d.id
        WHERE r.tahun_anggaran = ?
        ORDER BY r.id DESC
    ");
    $stmt->execute([$ta]);
    echo json_encode(['status' => 'ok', 'data' => $stmt->fetchAll()]);
    exit;
}

if ($method === 'POST') {
    $user = requireAuth(['Admin', 'Kordiv', 'Operator']);
    $input = json_decode(file_get_contents('php://input'), true);
    if (!verifyCsrfToken($input['csrf_token'] ?? '')) {
        http_response_code(403);
        echo json_encode(['status' => 'error', 'message' => 'Token CSRF tidak valid']);
        exit;
    }

    $action = $input['action'] ?? 'create';
    if ($action === 'revisi_pagu') {
        $renjaId = (int)$input['renja_id'];
        $paguBaru = (float)$input['pagu_baru'];
        $cur = $pdo->prepare("SELECT pagu, serapan FROM renja_kegiatan WHERE id = ?");
        $cur->execute([$renjaId]);
        $row = $cur->fetch();
        if (!$row || $paguBaru < (float)$row['serapan']) {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Pagu revisi tidak boleh lebih kecil dari realisasi yang sudah terserap.']);
            exit;
        }
        $pdo->beginTransaction();
        $pdo->prepare("INSERT INTO revisi_pagu_logs (renja_id, nomor_revisi, pagu_sebelum, pagu_sesudah, keterangan) VALUES (?, ?, ?, ?, ?)")
            ->execute([$renjaId, $input['nomor_revisi'], $row['pagu'], $paguBaru, $input['keterangan']]);
        $pdo->prepare("UPDATE renja_kegiatan SET pagu = ? WHERE id = ?")->execute([$paguBaru, $renjaId]);
        $pdo->commit();
        echo json_encode(['status' => 'ok', 'message' => 'Revisi pagu POK berhasil dicatat']);
        exit;
    }

    $pagu = (float)($input['pagu'] ?? 0);
    $serapan = (float)($input['serapan'] ?? 0);

    if ($serapan > $pagu) {
        http_response_code(400);
        echo json_encode(['status' => 'error', 'message' => 'Validasi Pagu: Nominal serapan tidak boleh melebihi pagu anggaran.']);
        exit;
    }

    $divisiId = (int)($input['divisi_id'] ?? 5);
    $rawTanggal = trim($input['tanggal'] ?? '');
    $tanggal = ($rawTanggal === '' || strtolower($rawTanggal) === 'belum') ? null : $rawTanggal;

    $stmt = $pdo->prepare("
        INSERT INTO renja_kegiatan 
        (tahun_anggaran, kode_kegiatan, nama_kegiatan, kelompok_anggaran, tipe_kegiatan, divisi_id, tanggal_kegiatan, pagu_semula, pagu, serapan, tahap_pencairan, status_kegiatan)
        VALUES (:ta, :kode, :nama, :kelompok, :tipe, :divisi_id, :tanggal, :pagu_semula, :pagu, :serapan, :tahap, :status)
    ");
    $stmt->execute([
        ':ta' => (int)($input['tahun_anggaran'] ?? 2026),
        ':kode' => $input['kode'],
        ':nama' => $input['nama'],
        ':kelompok' => $input['kelompok'] ?? 'Non-Operasional',
        ':tipe' => $input['tipe'] ?? 'Rapat Biasa',
        ':divisi_id' => $divisiId,
        ':tanggal' => $tanggal,
        ':pagu_semula' => $pagu,
        ':pagu' => $pagu,
        ':serapan' => $serapan,
        ':tahap' => $input['tahap_pencairan'] ?? 'Belum Diajukan',
        ':status' => $input['status'] ?? 'BELUM TERLAKSANA'
    ]);

    echo json_encode(['status' => 'ok', 'message' => 'Kegiatan RENJA berhasil disimpan']);
    exit;
}
