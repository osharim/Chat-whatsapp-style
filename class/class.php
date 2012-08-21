<?php 
include 'json.php';
class Conectar {

     public static function con() {


            date_default_timezone_set('America/Mexico_City');

 
    // $conexion = mysql_connect("localhost", "iselcruc_omar", "nf9ckpg") or
   $conexion = mysql_connect("localhost", "root", "") or
                 
                  die("Error de conexion: " . mysql_error());
     
       mysql_select_db("bindsme") or

 //mysql_select_db("iselcruc_ejemplo") or
      //     mysql_select_db("web_isel") or             
                  die("Error de conexion: " . mysql_error());

          mysql_query("SET NAMES 'utf-8'");

 
          return $conexion;
     }

}
//------------------------------------


class chat{

 
	public function append_into_db_msg(){

		$MSG = $_POST['msg'];

		$QUERY  = "INSERT INTO chat values(NULL,1,2,'$MSG' , '" . strtotime(date("Y-m-d H:i:s")) . "' )  ";

		mysql_query( $QUERY , Conectar::con());

	    chat::get_msg_from_db_by_limit("justOneMSG"); // obtenemos solo 1 msg

	}

//***********************************************************************************************************************************.

	public static function get_msg_from_db_by_limit($type){ // obtenemos n mensajes del chat


		$QUERY =  "";


		switch ($type) {
		
		case 'justOneMSG': // obtenemos solo  1 mensaje

		  $QUERY = "SELECT id_user_reader , msg ,( FROM_UNIXTIME(fecha ) ) as fecha from chat where id_user_writer = 1 ORDER BY fecha  DESC LIMIT 1 ";
		

				break;



//***********************************************************************************************************************************



	    case 'all': // todos los mensajes
	    	
	    	$QUERY = "SELECT id_user_reader , msg ,( FROM_UNIXTIME(fecha ) ) as fecha from chat where id_user_writer = 1";


	    	break;


			default:
				# code...
				break;
		}



//***********************************************************************************************************************************


		$response = mysql_query( $QUERY , Conectar::con());


		while ( $parse = mysql_fetch_assoc($response)  ) {
		
			$DATA[]  = $parse;


		}


		echo json_encode(array('response' => $DATA ) );


	}


 

}


































 ?>