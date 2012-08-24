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

</head>
<body>
	


<!--   struct_main -->


<div class="struct_main">


<!--     struct_chat -->
	<div class="struct_chat">




 			<!-- .message_chat ESTO CONTIENE LAS CONVERSACIONES -->
 			<div class="message_chat">
 				

	<!-- .user_current_chat -->
	<span class="user_current_chat"> @MaryleHermosa</span>
	<!-- /.user_current_chat -->



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

<!-- 	struct_groups -->

<!-- 	<div class="struct_groups">
	
	<span class="user_current_chat">Groups</span>


</div> -->

<!--   struct_contact -->

<!-- 	<div class="struct_contact">

	<span class="user_current_chat"> Contacts</span>





</div> -->








</div>








<div class="struct_menu"></div>




 

</body>
</html>











<?php 

	include("config_style.php");

 ?>
