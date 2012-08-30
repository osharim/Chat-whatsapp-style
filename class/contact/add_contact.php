<?php 
 include("../class.php");
session_start();
 
  $check_if_user_available= new login();

  $check_if_user_available->check_user_available(); 

  if($_SESSION["user_exist"] ){ // si el usuario existe vamos a
  	//guardar este contacto en nuestro direcotiro


	chat::append_into_contact_list();

  }


 ?>