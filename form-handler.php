<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$fname   = htmlspecialchars(trim($_POST['fname']   ?? ''), ENT_QUOTES, 'UTF-8');
$lname   = htmlspecialchars(trim($_POST['lname']   ?? ''), ENT_QUOTES, 'UTF-8');
$email   = filter_var(trim($_POST['email']         ?? ''), FILTER_VALIDATE_EMAIL);
$message = htmlspecialchars(trim($_POST['message'] ?? ''), ENT_QUOTES, 'UTF-8');

if (empty($fname) || empty($lname) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'All fields are required']);
    exit;
}

if (!$email) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit;
}

$recipient = 'burgosmariana.mb@gmail.com';
$subject   = 'New contact from: ' . $fname . ' ' . $lname;

$body  = "=== NEW CONTACT FORM SUBMISSION ===\n\n";
$body .= "Name: "  . $fname . " " . $lname . "\n";
$body .= "Email: " . $email . "\n";
$body .= "Date: "  . date('d/m/Y H:i:s') . "\n";
$body .= "IP: "    . $_SERVER['REMOTE_ADDR'] . "\n";
$body .= "\n--- MESSAGE ---\n";
$body .= $message . "\n";
$body .= "\n=== END SUBMISSION ===\n";

$headers  = "From: noreply@marianaburgos.com.br\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

$emailSent = mail($recipient, $subject, $body, $headers);

header('Content-Type: application/json');

if ($emailSent) {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Message sent successfully! I will get back to you soon.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send message. Please try again later.']);
}

exit;
?>
