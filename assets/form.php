<?php
$name = $_POST['name'];
$email = $_POST['email'];
$url = $_POST['url'];
$message = $_POST['message'];

$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$url = htmlspecialchars($url);
$message = htmlspecialchars($message);

$name = urldecode($name);
$email = urldecode($email);
$url = urldecode($url);
$message = urldecode($message);

$name = trim($name);
$email = trim($email);
$url = trim($url);
$message = trim($message);


if (mail("dmitrij.klimenkoff7@gmail.com", "Заявка с сайта", "Имя:" . $name . ". E-mail: " . $email, "From: dmitrij.klimenkoff7@gmail.com \r\n")) {
    echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}
