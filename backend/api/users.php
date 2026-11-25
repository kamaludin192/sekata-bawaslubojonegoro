<?php
header('Content-Type: application/json; charset=utf-8');
require_once __DIR__ . '/../includes/security.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $stmt = $pdo->query("
        SELECT u.id, u.nip, u.nama_lengkap, u.jabatan, u.email, u.role, u.divisi_id, u.is_active, d.nama_divisi
        FROM users u
        LEFT JOIN divisi d ON u.divisi_id = d.id
        ORDER BY u.id ASC
    ");
    echo json_encode(['status' => 'ok', 'data' => $stmt->fetchAll()]);
    exit;
}

if ($method === 'POST') {
    $user = requireAuth(['Admin']);
    $input = json_decode(file_get_contents('php://input'), true);
    if (!verifyCsrfToken($input['csrf_token'] ?? '')) {
        http_response_code(403);
        echo json_encode(['status' => 'error', 'message' => 'Token CSRF tidak valid']);
        exit;
    }

    $action = $input['action'] ?? 'create';
    if ($action === 'toggle_status') {
        $pdo->prepare("UPDATE users SET is_active = NOT is_active WHERE id = ?")->execute([(int)$input['user_id']]);
        echo json_encode(['status' => 'ok', 'message' => 'Status akun diperbarui']);
        exit;
    }

    $hash = password_hash($input['password'] ?? 'Bawaslu2026!', PASSWORD_BCRYPT);
    $stmt = $pdo->prepare("
        INSERT INTO users (nip, nama_lengkap, jabatan, email, password_hash, role, divisi_id)
        VALUES (:nip, :nama, :jabatan, :email, :hash, :role, :divisi_id)
    ");
    $stmt->execute([
        ':nip' => $input['nip'] ?? null,
        ':nama' => $input['nama_lengkap'],
        ':jabatan' => $input['jabatan'] ?? 'Staf Pelaksana',
        ':email' => $input['email'],
        ':hash' => $hash,
        ':role' => $input['role'] ?? 'PIC',
        ':divisi_id' => !empty($input['divisi_id']) ? (int)$input['divisi_id'] : null
    ]);
    echo json_encode(['status' => 'ok', 'message' => 'Pengguna baru berhasil ditambahkan']);
    exit;
}
