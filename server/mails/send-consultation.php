<?php
/**
 * Handles submissions from the "Request a Consultation" form on contact.html.
 * Validates and sanitizes the incoming data, then sends an email to the
 * company inbox with the submitter set as the Reply-To address.
 */

header('Content-Type: application/json');

const RECIPIENT_EMAIL = 'info@onesnzeros.net';
const SENDER_EMAIL = 'no-reply@onesnzeros.net';
const SENDER_NAME = 'Ones and Zeros Website';

function respond(int $statusCode, array $payload): void
{
    http_response_code($statusCode);
    echo json_encode($payload);
    exit;
}

function sanitizeField(string $value): string
{
    $value = trim($value);
    // Strip carriage returns / newlines to prevent email header injection.
    return preg_replace('/[\r\n]+/', ' ', $value);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['success' => false, 'error' => 'Method not allowed.']);
}

$name = sanitizeField($_POST['name'] ?? '');
$company = sanitizeField($_POST['company'] ?? '');
$email = sanitizeField($_POST['email'] ?? '');
$phone = sanitizeField($_POST['phone'] ?? '');
$industry = sanitizeField($_POST['industry'] ?? '');
$message = trim($_POST['message'] ?? '');

if ($name === '' || $email === '' || $message === '') {
    respond(422, ['success' => false, 'error' => 'Please fill in your name, email, and message.']);
}

$email = filter_var($email, FILTER_SANITIZE_EMAIL);
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(422, ['success' => false, 'error' => 'Please provide a valid email address.']);
}

$subject = 'New Consultation Request from ' . $name;

$bodyLines = [
    'A new consultation request has been submitted on the website.',
    '',
    'Name: ' . $name,
    'Company: ' . ($company !== '' ? $company : 'N/A'),
    'Email: ' . $email,
    'Phone: ' . ($phone !== '' ? $phone : 'N/A'),
    'Industry: ' . ($industry !== '' ? $industry : 'N/A'),
    '',
    'Message:',
    $message,
];
$body = implode("\n", $bodyLines);

$headers = [
    'From: ' . SENDER_NAME . ' <' . SENDER_EMAIL . '>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
];

$sent = mail(RECIPIENT_EMAIL, $subject, $body, implode("\r\n", $headers));

if (!$sent) {
    respond(500, ['success' => false, 'error' => 'We could not send your message. Please try again later.']);
}

respond(200, ['success' => true]);
