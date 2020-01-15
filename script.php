<?php
$header  = "From: www.krzysztof-siek.pl \r\n";
$header .= 'MIME-Version: 1.0'."\r\n";
$header .= 'Content-type: text/html; charset=UTF-8'."\r\n";
$to      = 'dalimibiszkopta@gmail.com';
$subject = 'Wiadomość ze strony www.krzysztof-siek.pl';
$from = $_POST['email'];
$name = $_POST['name'];
$message=$_POST['message'];
$emailbody = 
	'Imie: '.$_POST['name']. "\n"
	.'Telefon: '.$_POST['phone']. "\n"
	.' Adres mailowy: '.$_POST['email']. "\n"
	.'Wiadomosc: '.$_POST['message']. "\n";
   if(mail($to, $subject, $emailbody, $header)) 

?>