<?php 
session_start();

	if(!$_SESSION["loged"]  || !isset($_SESSION["loged"] ) ){

			header("Location:   ./");
	}

 ?>
<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<meta http-equiv='cache-control' content='no-cache'>
	<META HTTP-EQUIV="Pragma" CONTENT="no-cache">
	<META HTTP-EQUIV="Expires" CONTENT="-1">
	<title>binds</title>

		<link rel="shortcut icon" href="img/icon/power.ico" /> 
		<link rel="stylesheet" href="css/home/skined.css">
		<link rel="stylesheet" href="js/scroll/jquery.mCustomScrollbar.css">
		<link rel="stylesheet" href="js/framework/css/binds.css">
 
		<link rel="stylesheet" href="css/module.css">

 	<script type="text/javascript" src="js/jquery.1.7.js"></script>


 
		<script type="text/javascript" src="js/update_chat.js"></script>
 <script type="text/javascript" src="js/framework/bindsme.js"></script>
	<script type="text/javascript" src="js/chat.js"></script>


	<!-- Get Google CDN's jQuery and jQuery UI with fallback to local -->
	  <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"></script>
	
	<!-- mousewheel plugin -->
	<script src="js/scroll/jquery.mousewheel.min.js"></script>
	<!-- custom scrollbars plugin -->
	<script src="js/scroll/jquery.mCustomScrollbar.js"></script>
	<script type="text/javascript" src="js/init.js"></script>

	

	<script type="text/javascript" src="js/contact/contact_module.js"></script>
	<script type="text/javascript" src="js/framework/binds.js"></script>
	<script type="text/javascript" src="js/contact/add_contact.js"></script>


</head>
<body>
 
<!--   struct_main -->


<div class="struct_main">


<!--     struct_chat -->
	<div class="struct_chat">

<div class="user_current_chat user_current_chat_os ">  </div>	


 			<!-- .message_chat ESTO CONTIENE LAS CONVERSACIONES -->
 			<div class="message_chat">
 				



<!--   CONVERSACION!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->


	<div class="chat">
	


<div id="content_1" class="content ">
 
<span class="chat_content">
	





</span>


 


		</div>
 
	</div>


 <!--   CONVERSACION!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->




 			</div>
 			<!-- /.message_chat -->








<!-- 			struct_msg -->


		<div class="struct_msg"> <!-- AQUI SE ESCRIBE EL COMENTARIO -->
			
			<textarea name="" id=""  class="chat_cmmt"></textarea>

		</div>
	</div>


<!-- .struct_left -->
<div class="struct_left">


 
 	<div class="struct_groups">
	
	<span class="user_current_chat">Storyboard  </span>


    </div> 



 <!--   struct_contact -->

	<div class="struct_contact">

	<span class="user_current_chat"> Contactos  </span>


	<div class="container_data data_contact">
		

<!-- CONTENIDO --> 

     <!-- .search -->
 
 

	<!-- /.search -->	

	</div>
 
</div> 
 <!--   struct_contact -->


<!-- 	struct_groups -->

 	<div class="struct_groups">
	
	<span class="user_current_chat">Mis listas  </span>


    </div> 
	<div class="struct_groups">
	
	<span class="user_current_chat">Mis subscriptores </span>


    </div> 

 

<!-- 	struct_groups -->

 	<div class="struct_groups">
	
	<span class="user_current_chat">Subscripciones </span>


    </div> 

	<div class="struct_groups">
	
	<span class="user_current_chat">Popular </span>


    </div> 




</div>
<!-- /.struct_left -->






</div>








<div class="struct_menu">
	
<span class="loader"><img src="img/loader/p5.gif" alt=""></span>

<div class="logo"></div>

	<div class="struct_bttn">
		
<div class="add_contact uibutton icon add"> Agregar Contacto</div>

<div class="add_contact uibutton icon add_group"> Crear Topico</div>
	
<div class="add_contact uibutton icon upload_image"> Agregar imagen</div>
	
<div class="add_contact uibutton icon upload_video">Agregar video</div>

<div class="add_contact uibutton icon config"> @ <span class="username"></span> </div>


	</div>		
 
	

</div>




 

</body>
</html>











<?php 

	include("config_style.php");

 ?>
