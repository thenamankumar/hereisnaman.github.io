<?php

	$name = trim($_POST['name']);
	$email = trim($_POST['email']);
	$message = trim($_POST['message']);
	
	$emailTo = 'me@namankumar.me'; //Put your own email address here
	$subject = 'Message from your website.';
	$body = "Name: $name \n\nEmail: $email \n\nMessage:\n$message";
	$headers = 'From: '.$email."\r\n" .
        'Reply-To: '.$email."\r\n";

    $mail=mail($emailTo, $subject, $body, $headers);
    if($mail){
        $emailSent = true;
	    echo ('success');
	}
?>
