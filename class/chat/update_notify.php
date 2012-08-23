 <?php 

 include("../class.php");



 if (isset($_POST) ) {


  $UPDATE_CHAT_NOTIFY = new notify();



 	switch ($_POST["type"]) { // DE QUE TIPO ES EL QUERY A ESTE ARCHIVO ; PUEDE SER VERIFI O GET_DATA
 							// VERIFY SOLO CHECA SI HAY CAMBIOS OSEA NOTIFICACIONEs
 							// GET_DATA TRAE LOS CAMBIOS SI LOS HAY

 		case 'verify':
 			 






  $UPDATE_CHAT_NOTIFY->get_notify($_POST["data"]); // aqui se pasa el usuario que queremos obtener las notificaciones


 




 			break;
 		

//*********************************************************************

		case 'get_data':




	$UPDATE_CHAT_NOTIFY->get_notify_data($_POST["data"],$_POST["writtr_"],$_POST["lim_msg_cht"]);



	break;




 		default:
 		 
 			break;
 	}


 	# code...
 }


  ?>