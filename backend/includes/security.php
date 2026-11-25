<?php
require_once __DIR__ . '/../config.php';

function generateCsrfToken(): string {
    if (empty($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }
    return $_SESSION['csrf_token'];
}

function verifyCsrfToken(?string $token): bool {
    return isset($_SESSION['csrf_token']) && is_string($token) && hash_equals($_SESSION['csrf_token'], $token);
}

function requireAuth(array $allowedRoles = []): array {
    if (isset($_SESSION['last_activity']) && (time() - $_SESSION['last_activity'] > 3600)) {
        session_unset();
        session_destroy();
        http_response_code(401);
        echo json_encode(['status' => 'error', 'message' => 'Sesi kedaluwarsa, silakan masuk kembali.']);
        exit;
    }
    $_SESSION['last_activity'] = time();

    if (empty($_SESSION['user'])) {
        http_response_code(401);
        echo json_encode(['status' => 'error', 'message' => 'Autentikasi diperlukan.']);
        exit;
    }

    $user = $_SESSION['user'];
    if (!empty($allowedRoles) && !in_array($user['role'], $allowedRoles, true)) {
        http_response_code(403);
        echo json_encode(['status' => 'error', 'message' => 'Hak akses ditolak untuk peran Anda.']);
        exit;
    }
    return $user;
}
