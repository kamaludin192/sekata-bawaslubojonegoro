<?php
header('Content-Type: application/json; charset=utf-8');
require_once __DIR__ . '/../includes/security.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    echo json_encode([
        'status' => 'ok',
        'csrf_token' => generateCsrfToken(),
        'user' => $_SESSION['user'] ?? null
    ]);
    exit;
}

if ($method === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    $action = $input['action'] ?? 'login';

    if ($action === 'logout') {
        session_unset();
        session_destroy();
        echo json_encode(['status' => 'ok', 'message' => 'Berhasil keluar sistem']);
        exit;
    }

    $email = trim($input['email'] ?? '');
    $password = $input['password'] ?? '';

    $stmt = $pdo->prepare("
        SELECT u.*, d.nama_divisi 
        FROM users u 
        LEFT JOIN divisi d ON u.divisi_id = d.id 
        WHERE u.email = :email AND u.is_active = 1 LIMIT 1
    ");
    $stmt->execute([':email' => $email]);
    $user = $stmt->fetch();

    if (!$user || !password_verify($password, $user['password_hash'])) {
        http_response_code(401);
        echo json_encode(['status' => 'error', 'message' => 'Email atau kata sandi tidak valid.']);
        exit;
    }

    session_regenerate_id(true);
    $_SESSION['last_activity'] = time();
    $_SESSION['user'] = [
        'id' => $user['id'],
        'nama_lengkap' => $user['nama_lengkap'],
        'jabatan' => $user['jabatan'],
        'email' => $user['email'],
        'role' => $user['role'],
        'divisi_id' => $user['divisi_id'],
        'nama_divisi' => $user['nama_divisi'] ?? 'Lintas Divisi'
    ];

    $pdo->prepare("UPDATE users SET last_login = NOW() WHERE id = ?")->execute([$user['id']]);

    echo json_encode([
        'status' => 'ok',
        'user' => $_SESSION['user'],
        'csrf_token' => generateCsrfToken()
    ]);
    exit;
}
