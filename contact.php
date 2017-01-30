<?php $name = $_POST['name'];
$email = $_POST['email'];
$number = $_POST['phone'];
$message = $_POST['message'];
$formcontent="From: $name \n Message: $message";
$recipient = "naman@outlook.in";
$subject = "Naman: Contact Message";
$mailheader = "From: $email - $number\r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
header('Location: index.html');
?>
