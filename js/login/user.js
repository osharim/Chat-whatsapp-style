 jQuery(document).ready(function($) {
 	

 	$(".logo").hide().fadeIn(1500);

 	SYNCHRONIZED_ONE_CLICK_REGISTER = false; // PARA PRIMER CLICK MUESTRE MAS FUNCIONES SEGUNDO CLIK VALiDE Y REGISTRE
 	INPUT_CONFIRM_PASSWORD =  '	<input type="password" class="data_user"  placeholder = "confirmar contraseña"> ';
 	MESSAGE_SING_UP = "<span class='msg' >Llena estos campos de registro   </span>";


 	$(".sing_in").bind("click" , function(){ // LOGEARSE

 			console.log("init session")

 	});

//***************************************************


 	$(".sing_up").bind("click" , function(){ // REGISTRARSE

 		

 		if(!SYNCHRONIZED_ONE_CLICK_REGISTER){



 		$(".struct_session").append($(INPUT_CONFIRM_PASSWORD).hide().fadeIn("fast",function(){


 			$(".struct_session").append($(MESSAGE_SING_UP).hide().fadeIn("fast") );

 			$(".sing_up").html("Registrarme");

 		}));
 		SYNCHRONIZED_ONE_CLICK_REGISTER = true ; // SE DIO CLCCK EN REGISTRAR Y AHORA YA NO SE MOSTRARA EL FORM SI NO QUE VALIDARA Y REGISTRARA


 

 		}else{ // VALIDAR Y REGISTRAR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!








 		}


 

 	});







 });
 