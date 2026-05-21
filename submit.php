<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit;
}

$to      = 'sales@imagefoundry.co.uk';
$name    = strip_tags(trim($_POST['name'] ?? ''));
$role    = strip_tags(trim($_POST['role'] ?? ''));
$company = strip_tags(trim($_POST['company'] ?? ''));
$email   = filter_var(trim($_POST['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$project = strip_tags(trim($_POST['project'] ?? ''));

if (!$name || !$role || !$company || !$email || !$project) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'All fields are required.']);
    exit;
}

$boundary = md5(uniqid(time()));
$subject  = "Setpiece brief — {$project} ({$company})";

$body  = "Name: {$name}\r\n";
$body .= "Role: {$role}\r\n";
$body .= "Company: {$company}\r\n";
$body .= "Email: {$email}\r\n";
$body .= "Project: {$project}\r\n";

$headers  = "From: Setpiece <noreply@imagefoundry.co.uk>\r\n";
$headers .= "Reply-To: {$name} <{$email}>\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/mixed; boundary=\"{$boundary}\"\r\n";

$message  = "--{$boundary}\r\n";
$message .= "Content-Type: text/plain; charset=UTF-8\r\n\r\n";
$message .= $body . "\r\n";

$files = $_FILES['images'] ?? null;
if ($files && is_array($files['name'])) {
    foreach ($files['name'] as $i => $filename) {
        if ($files['error'][$i] !== UPLOAD_ERR_OK) continue;

        $tmp      = $files['tmp_name'][$i];
        $mime     = mime_content_type($tmp);
        $allowed  = ['image/jpeg', 'image/png', 'image/tiff', 'image/webp'];

        if (!in_array($mime, $allowed)) continue;
        if ($files['size'][$i] > 52428800) continue; // 50MB

        $data      = chunk_split(base64_encode(file_get_contents($tmp)));
        $safename  = basename($filename);

        $message .= "--{$boundary}\r\n";
        $message .= "Content-Type: {$mime}; name=\"{$safename}\"\r\n";
        $message .= "Content-Transfer-Encoding: base64\r\n";
        $message .= "Content-Disposition: attachment; filename=\"{$safename}\"\r\n\r\n";
        $message .= $data . "\r\n";
    }
}

$message .= "--{$boundary}--";

if (mail($to, $subject, $message, $headers)) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Mail failed. Please try again.']);
}
