<?php
header('Content-Type: application/json; charset=utf-8');
require_once __DIR__ . '/../includes/security.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $stmt = $pdo->query("
        SELECT a.*, r.kode_kegiatan, r.nama_kegiatan, r.pagu, u.nama_lengkap AS pemohon
        FROM approval_perubahan a
        JOIN renja_kegiatan r ON a.renja_id = r.id
        JOIN users u ON a.pemohon_id = u.id
        ORDER BY a.created_at DESC
    ");
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

    if ($action === 'decide') {
        if (!in_array($user['role'], ['Admin', 'Pimpinan', 'Kordiv'], true)) {
            http_response_code(403);
            echo json_encode(['status' => 'error', 'message' => 'Hanya Pimpinan/Kordiv/Admin yang dapat menyetujui.']);
            exit;
        }
        $aprId = (int)$input['approval_id'];
        $decision = $input['decision'] === 'APPROVED' ? 'APPROVED' : 'REJECTED';

        $pdo->beginTransaction();
        $stmt = $pdo->prepare("SELECT * FROM approval_perubahan WHERE id = ? FOR UPDATE");
        $stmt->execute([$aprId]);
        $apr = $stmt->fetch();

        if ($apr && $apr['status_approval'] === 'PENDING') {
            $pdo->prepare("UPDATE approval_perubahan SET status_approval = ?, approved_by = ? WHERE id = ?")
                ->execute([$decision, $user['id'], $aprId]);

            if ($decision === 'APPROVED') {
                $pdo->prepare("UPDATE renja_kegiatan SET serapan = ?, tahap_pencairan = ?, status_kegiatan = ? WHERE id = ?")
                    ->execute([$apr['serapan_baru'], $apr['tahap_baru'], $apr['status_baru'], $apr['renja_id']]);
            }
        }
        $pdo->commit();
        echo json_encode(['status' => 'ok', 'message' => "Pengajuan {$decision}"]);
        exit;
    }

    $renjaStmt = $pdo->prepare("SELECT pagu FROM renja_kegiatan WHERE id = ?");
    $renjaStmt->execute([(int)$input['renja_id']]);
    $renjaRow = $renjaStmt->fetch();
    if ($renjaRow && (float)$input['serapan_baru'] > (float)$renjaRow['pagu']) {
        http_response_code(400);
        echo json_encode(['status' => 'error', 'message' => 'Over-Budget Guard: Nominal serapan baru melebihi pagu kegiatan.']);
        exit;
    }

    $stmt = $pdo->prepare("
        INSERT INTO approval_perubahan 
        (kode_pengajuan, renja_id, pemohon_id, serapan_lama, serapan_baru, tahap_baru, status_baru, alasan, lampiran_spj)
        VALUES (:kode, :renja_id, :pemohon_id, :lama, :baru, :tahap_baru, :status_baru, :alasan, :lampiran)
    ");
    $stmt->execute([
        ':kode' => 'APR-' . date('YmdHis'),
        ':renja_id' => (int)$input['renja_id'],
        ':pemohon_id' => $user['id'],
        ':lama' => (float)$input['serapan_lama'],
        ':baru' => (float)$input['serapan_baru'],
        ':tahap_baru' => $input['tahap_baru'] ?? 'Verifikasi BPP',
        ':status_baru' => $input['status_baru'],
        ':alasan' => $input['alasan'],
        ':lampiran' => $input['lampiran_spj'] ?? null
    ]);

    echo json_encode(['status' => 'ok', 'message' => 'Usulan perubahan dikirim']);
    exit;
}
