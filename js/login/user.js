 jQuery(document).ready(function($) {
 	

 	$(".logo").hide().fadeIn(1500);

 	SYNCHRONIZED_ONE_CLICK_REGISTER = false; // PARA PRIMER CLICK MUESTRE MAS FUNCIONES SEGUNDO CLIK VALiDE Y REGISTRE
 	
 	INPUT_CONFIRM_PASSWORD =  '	<input type="password" class="data_user confr_"  placeholder = "confirmar contraseña"> ';
 	
 	INPUT_EMAIL = '	<input type="text" class="data_user email_"  placeholder = "Ingresa tu email">';
 	
 	MESSAGE_SING_UP = "<span class='msg' >! Gracias! Ahora Llena estos campos de registro   </span>";


 	$(".sing_in").bind("click" , function(){ // LOGEARSE

 			console.log("init session")

 	});

//***************************************************


 	$(".sing_up").bind("click" , function(){ // REGISTRARSE

 		

 		if(!SYNCHRONIZED_ONE_CLICK_REGISTER){



 		$(".struct_login").append($(INPUT_CONFIRM_PASSWORD).hide().fadeIn("fast",function(){




 			$(".struct_login").append($(INPUT_EMAIL).hide().fadeIn("fast") );

 			$(".struct_login").append($(MESSAGE_SING_UP).hide().fadeIn("fast") );



 			$(".sing_up").html("Registrarme");

 			 $(".struct_login").attr("action","./data/register");



 			bindsme.validate({ // PONEMOS EN LIVE LA VALIDACION PARA QUE EMPIEZE A MONITOREAR

 				live : true ,

 				match_password  : true ,

 				dataLive : [{ object: ".user_" , type : "validate" } ,

 						    { object:  ".pss_" , type :  "match" } ,

 						    {object:   ".confr_" , type :  "match" } ,

 						    {object:   ".email_" , type :  "email" }  ]

 			});
 		 


 		}));
 		SYNCHRONIZED_ONE_CLICK_REGISTER = true ; // SE DIO CLCCK EN REGISTRAR Y AHORA YA NO SE MOSTRARA EL FORM SI NO QUE VALIDARA Y REGISTRARA


 

 		}else{ // VALIDAR Y REGISTRAR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


 			$(".struct_login").submit();




 		}


 

 	});







 });
 