<?php
header('Content-Type: application/json; charset=utf-8');
require_once __DIR__ . '/../includes/security.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $ta = (int)($_GET['ta'] ?? 2026);
    $stmt = $pdo->prepare("
        SELECT p.*, d.nama_divisi AS divisi, u.nama_lengkap AS pic, u.email
        FROM keputusan_pleno p
        JOIN divisi d ON p.divisi_id = d.id
        JOIN users u ON p.pic_id = u.id
        WHERE p.tahun_anggaran = ?
        ORDER BY p.tenggat_waktu ASC
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

    if (($input['action'] ?? 'create') === 'complete') {
        $stmt = $pdo->prepare("
            UPDATE keputusan_pleno 
            SET status_tindak_lanjut = 'SELESAI', lampiran_bukti = :bukti, catatan_penyelesaian = :catatan
            WHERE id = :id
        ");
        $stmt->execute([
            ':bukti' => $input['lampiran_bukti'] ?? null,
            ':catatan' => $input['catatan_penyelesaian'] ?? '',
            ':id' => (int)$input['pleno_id']
        ]);
        echo json_encode(['status' => 'ok', 'message' => 'Tindak lanjut pleno diselesaikan']);
        exit;
    }

    $stmt = $pdo->prepare("
        INSERT INTO keputusan_pleno (kode_pleno, tahun_anggaran, nomor_sidang, tanggal_rapat, isi_keputusan, divisi_id, pic_id, tenggat_waktu, status_tindak_lanjut)
        VALUES (:kode, :ta, :sidang, :tgl_rapat, :isi, :divisi_id, :pic_id, :tenggat, 'PROSES')
    ");
    $stmt->execute([
        ':kode' => $input['kode_pleno'],
        ':ta' => (int)($input['tahun_anggaran'] ?? 2026),
        ':sidang' => $input['nomor_sidang'] ?? 'Pleno Rutin #43/2026',
        ':tgl_rapat' => date('Y-m-d'),
        ':isi' => $input['isi_keputusan'],
        ':divisi_id' => (int)$input['divisi_id'],
        ':pic_id' => (int)$input['pic_id'],
        ':tenggat' => $input['tenggat_waktu']
    ]);

    echo json_encode(['status' => 'ok', 'message' => 'Keputusan pleno dicatat']);
    exit;
}
