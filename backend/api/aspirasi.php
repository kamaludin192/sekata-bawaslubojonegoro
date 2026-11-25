<?php
header('Content-Type: application/json; charset=utf-8');
require_once __DIR__ . '/../includes/security.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $ta = (int)($_GET['ta'] ?? 2026);
    $stmt = $pdo->prepare("
        SELECT a.*, d.nama_divisi AS divisi
        FROM aspirasi_usulan a
        JOIN divisi d ON a.divisi_id = d.id
        WHERE a.tahun_anggaran = ?
        ORDER BY a.dukungan_suara DESC, a.created_at DESC
    ");
    $stmt->execute([$ta]);
    echo json_encode(['status' => 'ok', 'data' => $stmt->fetchAll()]);
    exit;
}

if ($method === 'POST') {
    $user = requireAuth(['Admin', 'Pimpinan', 'Kordiv', 'PIC', 'Operator']);
    $input = json_decode(file_get_contents('php://input'), true);
    if (!verifyCsrfToken($input['csrf_token'] ?? '')) {
        http_response_code(403);
        echo json_encode(['status' => 'error', 'message' => 'Token CSRF tidak valid']);
        exit;
    }

    $action = $input['action'] ?? 'create';
    if ($action === 'upvote') {
        $pdo->prepare("UPDATE aspirasi_usulan SET dukungan_suara = dukungan_suara + 1 WHERE id = ?")->execute([(int)$input['id']]);
        echo json_encode(['status' => 'ok', 'message' => 'Dukungan suara tercatat']);
        exit;
    }

    if ($action === 'update_status') {
        $pdo->prepare("UPDATE aspirasi_usulan SET status_usulan = ? WHERE id = ?")->execute([$input['status_usulan'], (int)$input['id']]);
        echo json_encode(['status' => 'ok', 'message' => 'Status usulan diperbarui']);
        exit;
    }

    $stmt = $pdo->prepare("
        INSERT INTO aspirasi_usulan (kode_usulan, tahun_anggaran, pengusul_nama, divisi_id, kategori, judul_usulan, uraian_pemikiran, rekomendasi_solusi)
        VALUES (:kode, :ta, :pengusul, :divisi_id, :kategori, :judul, :uraian, :solusi)
    ");
    $stmt->execute([
        ':kode' => 'ASP-' . date('YmdHis'),
        ':ta' => (int)($input['tahun_anggaran'] ?? 2026),
        ':pengusul' => $user['nama_lengkap'],
        ':divisi_id' => (int)($input['divisi_id'] ?? 5),
        ':kategori' => $input['kategori'] ?? 'Perbaikan Teknis',
        ':judul' => $input['judul_usulan'],
        ':uraian' => $input['uraian_pemikiran'],
        ':solusi' => $input['rekomendasi_solusi']
    ]);

    echo json_encode(['status' => 'ok', 'message' => 'Pemikiran & usulan berhasil dituangkan']);
    exit;
}
