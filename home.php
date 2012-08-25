<?php 
session_start();

	if(!$_SESSION["loged"]   ){

			header("Location:   ./");
	}

 ?>
<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<title></title>


		<link rel="stylesheet" href="css/home/skined.css">
		<link rel="stylesheet" href="js/scroll/jquery.mCustomScrollbar.css">
		<link rel="stylesheet" href="js/framework/css/binds.css">
 
 	<script type="text/javascript" src="js/jquery.1.7.js"></script>


 
	 <script type="text/javascript" src="js/get_data.js"></script>



	<!-- Get Google CDN's jQuery and jQuery UI with fallback to local -->
	  <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"></script>
	
	<!-- mousewheel plugin -->
	<script src="js/scroll/jquery.mousewheel.min.js"></script>
	<!-- custom scrollbars plugin -->
	<script src="js/scroll/jquery.mCustomScrollbar.js"></script>
	<script type="text/javascript" src="js/init.js"></script>

	 <script type="text/javascript" src="js/framework/bindsme.js"></script>
	<script type="text/javascript" src="js/chat.js"></script>
	<script type="text/javascript" src="js/update_chat.js"></script>
	<script type="text/javascript" src="js/contact/contact_module.js"></script>
	<script type="text/javascript" src="js/framework/binds.js"></script>
	<script type="text/javascript" src="js/contact/add_contact.js"></script>


</head>
<body>
			binds.notify({
         content : "Ahroa espera a que te Acepte :)"
        });  



<!--   struct_main -->


<div class="struct_main">


<!--     struct_chat -->
	<div class="struct_chat">




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


 


 <!--   struct_contact -->

	<div class="struct_contact">

	<span class="user_current_chat"> Contactos <div class="notify blue">23</div>	</span>


	<div class="container_data data_contact">
		

<!-- CONTENIDO --> 

     <!-- .search -->
 
	
 

	<!-- /.search -->	

	</div>
 
</div> 
 <!--   struct_contact -->


<!-- 	struct_groups -->

 	<div class="struct_groups">
	
	<span class="user_current_chat">Grupos <div class="notify red">2</div></span>


    </div> 


<!-- 	struct_groups -->

 	<div class="struct_groups">
	
	<span class="user_current_chat">Albumes <div class="notify gray">1</div></span>


    </div> 






</div>
<!-- /.struct_left -->






</div>








<div class="struct_menu">
	
	<div class="struct_bttn">
		
<div class="add_contact uibutton icon add"> Agregar Contacto</div>

<div class="add_contact uibutton icon add_group"> Crear grupo</div>
	
<div class="add_contact uibutton icon upload_image"> Agregar imagen</div>
	
<div class="add_contact uibutton icon upload_video">Agregar video</div>

<div class="add_contact uibutton icon config"> Configurar @ <span class="username"></span> </div>


	</div>		
 
	

</div>




 

</body>
</html>











<?php 

	include("config_style.php");

 ?>
