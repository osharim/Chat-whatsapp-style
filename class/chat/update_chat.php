<?php 
 include("../class.php");
 session_start();



if ( isset($_POST)){

   $UPDATE_CHAT = new chat();
 switch ($_POST["type_rqs"]) { // type_rqs correspondie al parametro de paginacion

 	case  "true":


		 	$_SESSION["paginacion"] +=5;
 			$_SESSION["get_by_pagination"] = true;

  	    	$UPDATE_CHAT->get_msg_from_db_by_limit("all");
 
 		break;
 	case  "false":
  				$_SESSION["get_by_pagination"] = false;

  	    	$UPDATE_CHAT->get_msg_from_db_by_limit("all");


 		break;
 }

 





}


 

 ?>