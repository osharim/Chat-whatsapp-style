<?php 
include 'json.php';
header("Cache-Control: no-store, no-cache, must-revalidate");
header("Content-Type: text/html;charset=utf-8");

class Conectar {

     public static function con() {


  

 
    //  $conexion = mysql_connect("localhost", "iselcruc_omar", "nf9ckpg") or
  $conexion = mysql_connect("localhost", "root", "") or
                 
                  die("Error de conexion: " . mysql_error());
     
 mysql_select_db("bindsme") or

   //     mysql_select_db("iselcruc_ejemplo") or
                
                  die("Error de conexion: " . mysql_error());

          mysql_query("SET NAMES 'utf-8'");

 
          return $conexion;
     }

}

//******************************************************************************************************************************************
//******************************************************************************************************************************************
//******************************************************************************************************************************************
//********************                                                                                          ****************************
//********************       CLASE LOGEO  , REGISTRAR USUARIOS , INICIAR SESION , CHECAR DISPONIBILIDAD DE USER ***************************
//********************                                                                                          **************************** 
//******************************************************************************************************************************************
//******************************************************************************************************************************************
//******************************************************************************************************************************************
//********************                                                                                          ****************************
//********************       CLASE LOGEO  , REGISTRAR USUARIOS , INICIAR SESION , CHECAR DISPONIBILIDAD DE USER ***************************
//********************                                                                                          **************************** 
//******************************************************************************************************************************************
//******************************************************************************************************************************************
//******************************************************************************************************************************************



class login{ 

	public function __construct() {
		
		$data = array();
 
	}



//REGISTRO
public 	function sing_up(){

 
	extract($_POST);


	$pss_ = md5( $pss_);

	$sql = "INSERT INTO user values(null , '$user_' , '$pss_' , '" . strtotime(date("Y-m-d H:i:s")) . " ', '$email_' ) ";

 
	mysql_query($sql, Conectar::con());

	$id_user = mysql_insert_id();

	$_SESSION["loged"] = true;
	$_SESSION["username"] = $user_;
	$_SESSION["id_user"] = $id_user;

	header("Location:   ../home");


}
//-----------------------------------------------------------------------------------------------------------------------------------------
//INICIAR SESION
public 	function session(){



	extract($_POST);

	$pss_ = md5( $pss_);

		$sql = "SELECT  
		 		count( id_user ) as is_available , id_user , username
				FROM user
				WHERE username = '$user_'
				AND password = '$pss_' ";


   $response =  mysql_query($sql, Conectar::con());


   while ( $parse = mysql_fetch_array($response)) {
	
   		$data[] = $parse;

   }
 

   if( $data[0]["is_available"]== 1 ){


    $_SESSION["loged"] = true;
	$_SESSION["username"] = $user_;
	$_SESSION["id_user"] =  $data[0]["id_user"];

	header("Location:   ../home");

   }else{


   header("Location:   ../error");

   }


 
}


//-----------------------------------------------------------------------------------------------------------------------------------------
//CHECAR SI EL USUARIO ESTA DISPONIBLE
public 	function check_user_available(){






}


}

//******************************************************************************************************************************************
//******************************************************************************************************************************************
//******************************************************************************************************************************************
//********************                                                                                          ****************************
//********************                            CLASE CHAT , SACAR MSG CHAT POR LIMITE                        ***************************
//********************                                                                                          **************************** 
//******************************************************************************************************************************************
//******************************************************************************************************************************************
//******************************************************************************************************************************************
//********************                                                                                          ****************************
//********************                            CLASE CHAT , SACAR MSG CHAT POR LIMITE                        ***************************
//********************                                                                                          **************************** 
//******************************************************************************************************************************************
//******************************************************************************************************************************************
//******************************************************************************************************************************************


class chat{

 
	public function append_into_db_msg(){

		$MSG = $_POST['msg'];


 
		$UNIX_TIME = parseInt(strtotime(date("Y-m-d H:i:s")))+3600;


		$QUERY  = "INSERT INTO chat values(NULL,1,1,'$MSG' , '" . $UNIX_TIME. "' )  ";

		mysql_query( $QUERY , Conectar::con());



		$id_last_msg = mysql_insert_id();


	    chat::get_msg_from_db_by_limit("justOneMSG" , 1); // obtenemos solo 1 msg

	    notify::set_notify(1,1,$id_last_msg); // metemos la notifycacion |||| pasamos ( user_writer , user_reader , id_chat); 

	}

//***********************************************************************************************************************************.

	public static function get_msg_from_db_by_limit($type){ // obtenemos n mensajes del chat

		extract($_POST);
 


		$QUERY =  "";


		switch ($type) {
		
		case 'justOneMSG': // obtenemos solo  1 mensaje

		  $QUERY = "SELECT id_user_reader , msg ,( FROM_UNIXTIME(fecha ) ) as fecha from chat where id_user_writer = $id_user_writer ORDER BY fecha  DESC LIMIT 1 "; // (Id_user_reader, $limit_msg_chat )
		

				break;



//***********************************************************************************************************************************



	    case 'all': // todos los mensajes
	    	
	    	$QUERY = "SELECT id_user_reader , msg ,( FROM_UNIXTIME(fecha ) ) as fecha from chat where id_user_writer = $id_user_writer";


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



if( isset($DATA)   ){

echo json_encode(array('response' => $DATA)); // si hay datos regresamos las notificaciones!!!


} else{


$response = array('response' => false );

echo json_encode($response); // no regresamos nada!!!!



}


	}


 

}


function parseInt($string) {
// return intval($string);
if(preg_match('/(\d+)/', $string, $array)) {
return $array[1];
} else {
return 0;
}
} 


//******************************************************************************************************************************************
//******************************************************************************************************************************************
//******************************************************************************************************************************************
//********************                                                                                          ****************************
//**********      CLASE NOTIFICACIONES , ELIMINAR , INSERTAR , OBTENER  Y OBTENER LOS DATOS DE LAS NOTIFICACIONES     ***************************
//********************                                                                                          **************************** 
//******************************************************************************************************************************************
//******************************************************************************************************************************************
//******************************************************************************************************************************************
//********************                                                                                          ****************************
//*************   CLASE NOTIFICACIONES , ELIMINAR , INSERTAR , OBTENER  Y OBTENER LOS DATOS DE LAS NOTIFICACIONES     ***************************
//********************                                                                                          **************************** 
//******************************************************************************************************************************************
//******************************************************************************************************************************************
//******************************************************************************************************************************************



class notify{




public static function delete_notify ($id_user_writer , $id_user_reader){




		 $QUERY  = " delete from notify where id_user_reader = $id_user_reader and id_user_writer=$id_user_writer "; // insertamos la notificacion

 

		mysql_query( $QUERY , Conectar::con());





}

//*****************************************************************************************


public static function set_notify($user_writer, $user_reader , $id_chat){




		 $QUERY  = "INSERT INTO notify values(NULL,'$user_writer', '$user_reader' ,'$id_chat' )  "; // insertamos la notificacion

		mysql_query( $QUERY , Conectar::con());

 
}

//*****************************************************************************************



public function get_notify($id_user_reader){ // checamos las notificaciones



  //DONDE id_user_reader = al usuario actual !!!


$QUERY = " SELECT count(id_chat)as notify , id_user_writer from notify where id_user_reader = $id_user_reader   group by id_user_writer";

 
$response = mysql_query( $QUERY , Conectar::con());



    while($parse = mysql_fetch_assoc($response)){


      $DATA[] = $parse;


    }

if( isset($DATA)   ){

echo json_encode(array('response' => $DATA)); // si hay datos regresamos las notificaciones!!!


} else{


$response = array('response' => false );

echo json_encode($response); // no regresamos nada!!!!



}
}



//*****************************************************************************************



public function get_notify_data($id_user_writer , $id_user_reader , $limit_msg_chat ){ // OBTENEMOS LOS COMENTARIOS NUEVOS!!!!!

 
$QUERY = "SELECT id_user_reader , msg ,( FROM_UNIXTIME(fecha ) ) as fecha from chat where id_user_writer = $id_user_writer ORDER BY fecha  DESC LIMIT $limit_msg_chat ";

 
$response = mysql_query( $QUERY , Conectar::con());


 
    while($parse = mysql_fetch_assoc($response)){


      $DATA[] = $parse;


    }

if( isset($DATA)   ){

echo json_encode(array('response' => $DATA)); // si hay datos regresamos las notificaciones!!!


} else{


$response = array('response' => false );

echo json_encode($response); // no regresamos nada!!!!



}



 
 
}


 



}
























 ?>