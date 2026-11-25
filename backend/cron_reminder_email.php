<?php
require_once __DIR__ . '/config.php';

$APP_BASE_URL = 'https://sekata.bojonegoro.bawaslu.go.id/index.html?tab=pleno';

$stmt = $pdo->query("
    SELECT p.*, u.nama_lengkap, u.email, d.nama_divisi
    FROM keputusan_pleno p
    JOIN users u ON p.pic_id = u.id
    JOIN divisi d ON p.divisi_id = d.id
    WHERE p.status_tindak_lanjut != 'SELESAI'
");

$today = new DateTimeImmutable('today');

foreach ($stmt->fetchAll() as $row) {
    $deadline = new DateTimeImmutable($row['tenggat_waktu']);
    $diffDays = (int)$today->diff($deadline)->format('%r%a');

    $triggerType = null;
    if ($diffDays === 30 && !$row['reminder_h30_sent']) {
        $triggerType = 'H-30';
    } elseif ($diffDays === 7 && !$row['reminder_h7_sent']) {
        $triggerType = 'H-7';
    } elseif ($diffDays < 0 && !$row['overdue_escalated']) {
        $triggerType = 'OVERDUE_ESCALATION';
    }

    if ($triggerType !== null) {
        $subject = "[SEKATA Bawaslu Bojonegoro] Pengingat Tindak Lanjut Pleno ({$triggerType}) - {$row['kode_pleno']}";
        $body = "Yth. {$row['nama_lengkap']} ({$row['nama_divisi']}),

"
              . "Mengingatkan tindak lanjut keputusan {$row['nomor_sidang']} ({$row['kode_pleno']}):
"
              . ""{$row['isi_keputusan']}"

"
              . "Batas Waktu Penyelesaian: {$row['tenggat_waktu']}.
"
              . "Tautan Aksi Langsung: {$APP_BASE_URL}&kode={$row['kode_pleno']}

"
              . "Sekretariat Bawaslu Kabupaten Bojonegoro";

        $headers = "From: SEKATA Bawaslu Bojonegoro <sekata@bojonegoro.bawaslu.go.id>
"
                 . "Reply-To: sekretariat@bojonegoro.bawaslu.go.id
";

        if ($triggerType === 'OVERDUE_ESCALATION') {
            $headers .= "Cc: pimpinan@bojonegoro.bawaslu.go.id, sekretariat@bojonegoro.bawaslu.go.id
";
        }
        $headers .= "Content-Type: text/plain; charset=UTF-8";

        $sent = @mail($row['email'], $subject, $body, $headers);

        $logStmt = $pdo->prepare("
            INSERT INTO email_logs (jenis_notifikasi, email_tujuan, referensi_kode, status_pengiriman)
            VALUES (:jenis, :tujuan, :ref, :status)
        ");
        $logStmt->execute([
            ':jenis' => "Pengingat Pleno ({$triggerType})",
            ':tujuan' => $row['email'] . ($triggerType === 'OVERDUE_ESCALATION' ? ' + CC Pimpinan' : ''),
            ':ref' => $row['kode_pleno'],
            ':status' => $sent ? 'TERKIRIM' : 'GAGAL'
        ]);

        if ($triggerType === 'H-30') {
            $pdo->prepare("UPDATE keputusan_pleno SET reminder_h30_sent = 1 WHERE id = ?")->execute([$row['id']]);
        } elseif ($triggerType === 'H-7') {
            $pdo->prepare("UPDATE keputusan_pleno SET reminder_h7_sent = 1 WHERE id = ?")->execute([$row['id']]);
        } elseif ($triggerType === 'OVERDUE_ESCALATION') {
            $pdo->prepare("UPDATE keputusan_pleno SET overdue_escalated = 1 WHERE id = ?")->execute([$row['id']]);
        }
    }
}
