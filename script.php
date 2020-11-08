<?php
$header  = "From: www.krzysztof-siek.pl \r\n";
$header .= 'MIME-Version: 1.0'."\r\n";
$header .= 'Content-type: text/html; charset=UTF-8'."\r\n";
$to      = 'dalimibiszkopta@gmail.com';
$subject = 'Message from your internet site www.krzysztof-siek.pl';
$from = $_POST['emailVal'];
$name = $_POST['nameVal'];
$message = $_POST['messageVal'];
$emailbody = 
	'Imie: '.$_POST['name']. "\n"
	.' Adres mailowy: '.$_POST['email']. "\n"
	.'Wiadomosc: '.$_POST['message']. "\n";
   if(mail($to, $subject, $emailbody, $header)) 
{
   
   echo "<script> window.location = \"index.html\" </script>";
}
?>