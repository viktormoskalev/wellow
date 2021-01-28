<?php
$to = "neonchilkk@gmail.com";
$subject ='Order';
$message .= "from WelloW \r\n";
$message .= "Mail: ".$_POST['desc']. "\r\n";
$message .= "Name: ".$_POST['name']. "\r\n";
$message .= "Role ".$_POST['phone']. "\r\n"; 
$headers  = 'MIME-Version: 1.0' . "\r\n"; 
  $headers .= 'Content-type: text/html; charset=utf-8'."\r\n"; 
  if (mail($to,$subject,$message,"from:smartUa")) {
    echo 'good';
    echo $to,$subject,$message ;
  } else {
    echo 'error';
  }

?>