<?php
header('Content-Type: application/json; charset=utf-8');
require_once __DIR__ . '/../includes/security.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Metode tidak diizinkan']);
    exit;
}

if (!isset($_FILES['file']) || $_FILES['file']['error'] !== UPLOAD_ERR_OK) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Berkas lampiran tidak ditemukan atau rusak.']);
    exit;
}

$kategori = ($_POST['kategori'] ?? 'spj') === 'pleno' ? 'bukti_pleno' : 'bukti_spj';
$allowedMime = ['application/pdf', 'image/jpeg', 'image/png'];
$finfo = new finfo(FILEINFO_MIME_TYPE);
$mime = $finfo->file($_FILES['file']['tmp_name']);

if (!in_array($mime, $allowedMime, true)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Format file wajib PDF, JPG, atau PNG.']);
    exit;
}

if ($_FILES['file']['size'] > 10 * 1024 * 1024) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Ukuran berkas maksimal 10 MB.']);
    exit;
}

$ext = pathinfo($_FILES['file']['name'], PATHINFO_EXTENSION);
$safeName = date('Ymd_His') . '_' . bin2hex(random_bytes(6)) . '.' . strtolower($ext);
$targetDir = __DIR__ . '/../../uploads/' . $kategori . '/';
$targetPath = $targetDir . $safeName;

if (!move_uploaded_file($_FILES['file']['tmp_name'], $targetPath)) {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Gagal menyimpan berkas di server.']);
    exit;
}

echo json_encode([
    'status' => 'ok',
    'file_path' => 'uploads/' . $kategori . '/' . $safeName,
    'original_name' => basename($_FILES['file']['name'])
]);
