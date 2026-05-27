<?php
$to = 'burgosmariana.mb@gmail.com';
$subject = 'Test Email from marianaburgos.com.br';
$message = 'If you receive this, mail() is working!';

$headers = "From: test@marianaburgos.com.br\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$result = mail($to, $subject, $message, $headers);

if ($result) {
    echo "✅ SUCCESS: mail() returned TRUE";
    echo "\n\nEmail foi enviado para o sistema.";
    echo "\nVerifique seu email (ou pasta de spam).";
} else {
    echo "❌ FAILURE: mail() returned FALSE";
    echo "\n\nPHP mail() não está funcionando na Hostinger.";
    echo "\nVocê precisa contatar o suporte Hostinger.";
}
?>