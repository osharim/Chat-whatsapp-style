<?php 
session_start();
$_SESSION["loged"] = false;	
 
 ?>
<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<title></title>
 	
 
 		<link rel="stylesheet" href="css/module.css">
		<link rel="stylesheet" href="css/index/skined.css">
		<script type="text/javascript" src="js/jquery.1.7.js"></script>
		<script type="text/javascript" src="js/framework/BindsModule.js"></script>
    	<script type="text/javascript" src="js/login/user.js"></script>


</head>
<body>
	


	<div class="struct_page">
		<div class="logo"></div>
		<div class="struct_session">
			

<!--  inputs de clave y usuario -->

	<form  method="POST" class="struct_login">

 	<input name="user_" type="text" class="data_user user_" placeholder = " Usuario">

 	<input name="pss_" type="password" class="data_user pss_"  placeholder = " contraseña">
</form>

		</div>


<!--  Botones de sesion -->

	    <ul class="login">
			<li class="button_blue sing_in">Entrar</li>
			<li class="button_gray sing_up">Crear Cuenta</li>
		</ul>




	
	</div>



</body>
</html>
<?php 

	include("config_style.php");

 ?>
