<?php
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$tipocasa = $_POST['tipocasa'];
$ubicacion = $_POST['ubicacion'];
$presupuesto = $_POST['presupuesto'];
$formacompra = $_POST['formacompra'];
$tiempo = $_POST['tiempo'];
$agendar = $_POST['agendar'];
$mensaje = $_POST['mensaje'];

$header = 'From: ' . $email . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por: " . $nombre . " \r\n";
$mensaje .= "\nSu e-mail es: " . $email . " \r\n";
$mensaje .= "Teléfono de contacto: " . $telefono . " \r\n";
$mensaje .= "El tipo de casa que le interesa es: " . $tipocasa . " \r\n";
$mensaje .= "\nLa ubicación donde quiere comprar casa es en: " . $ubicacion . " \r\n";
$mensaje .= "\nCuenta con un presupuesto de: " . $presupuesto . " \r\n";
$mensaje .= "\nForma de compra: " . $formacompra . " \r\n";
$mensaje .= "\nTiempo de compra: " . $tiempo . " \r\n";
$mensaje .= "\nagenda la llamada para: " . $agendar . " \r\n";
$mensaje .= "Mensaje: " . $_POST['mensaje'] . " \r\n";
$mensaje .= "Enviado el: " . date('d/m/Y', time());

$para = 'auxiliar.programacion1@alternativa19delsur.com';
$asunto = 'Mensaje de un posible prospecto';

mail($para, $asunto, utf8_decode($mensaje), $header);

header("Location:index.html");
?>