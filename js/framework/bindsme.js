//************************************************************************************
//************************************************************************************
//************************************************************************************
//************************************************************************************
//************************************************************************************
//************************************************************************************
 // METODOS PARA CHAT

$("document").data({"activedScroll":false}); // BANDERA PARA SABER CUANDO YA SE ACTIVO EL SCROLL ( ESTO ES PARA QUE NO SALGAN VARIOS SCROLL AL MISMO TIEMPO)



 var Chat = { // RETORNA EL VALOR DEL MSG A ENVIAR

 	VALUE_MSG : function(){


 		return $(".chat_cmmt").val();

 	} ,

 	GET_STRUCT_MSG :  function(data){   // METODO QUE FORMATEA UNA CADENA DE TEXTO A UNA STRUCTURA EN FORMA DE COMENTARIO

 		DATA =  "";

 		$.each(data.response,function(i,data){

 		DATA += '<ul class="user_ui">';
 		DATA += '<li><img src="img/user.jpg" alt="" width="46">	</li>';
 		DATA += '<li class="msg_chat">'+data.msg+'</li>' ;
	 	DATA += '<li>'+data.fecha+'</li>';
		DATA += '</ul>';


 		});


 		return DATA;
				 
 


 	},

 	append : function(){ // ESTA ESTRUCTURA HACE APPEND AL CHAT



 		
 		this.sendMSGDB(Chat.VALUE_MSG() );

 

 	} ,
//************************************************************************************//************************************************************************************
 	activeScroll :  function(LENGTH_COMMENTS){




 			if(LENGTH_COMMENTS == 6 ){  // SI APENAS SON 7 COMENTARIOS ENTONCES ACTIVAMOS EL SCROLL POR PRIMERA VEZ

  	

  		if ( !$("document").data("activedScroll")){


				 $("#content_1").mCustomScrollbar({
					scrollButtons:{ enable:true }  
				});




  		}


				$("#content_1").mCustomScrollbar("scrollTo","bottom");			


 			}else{ // SI Y A SON MAS ENTONCES OSLO ESCROLEAMOS HACIA EL BOTTOM 

 			 

 				 
 				setTimeout(function(){

 						$("#content_1").mCustomScrollbar("scrollTo","bottom");


 				 },600);

 			} 
 		},
//************************************************************************************//*********//************************************************************************************//*********
 			sendMSGDB : function(MSG){  // SE ENVIA EL MENSAJE ESCRITO POR AJAX




			$.ajax({

			url : "class/chat/append_msg.php" ,


			type: "POST",


			data : { "msg" : MSG } ,


			dataType : "JSON",

			success : function(data){ // se hace append

 
			$(".chat_content").append( Chat.GET_STRUCT_MSG( data ) ); // AGREGAMOS EL NUEVO COMENTARIO EN LA CAJA DE CHAT

			$(".chat_cmmt").val(""); // BORRAMOS EL COMENTARIO EN EL TEXT AREA
 

			}
				,

			beforeSend : function(){
				// se ponen los loader
		


			}


				});


			} ,

	//************************************************************************************//*********//*****************************
	UPDATE_CHAT_BY_LIMIT : function(){ // obtenemos n mensajes  ACTUALIZAMOS EL CHAT!!!!!!!!!!!!!!!!!



			$.ajax({

			url : "class/chat/update_chat.php" ,

 
			dataType : "JSON",

			success : function(data){ // se hace append

 
			$(".chat_content").append( Chat.GET_STRUCT_MSG( data ) ); // AGREGAMOS EL NUEVO COMENTARIO EN LA CAJA DE CHAT

			$(".chat_cmmt").val(""); // BORRAMOS EL COMENTARIO EN EL TEXT AREA
 

			if( $(".chat_content").children().length >=7 ){


					 $("#content_1").mCustomScrollbar({
					scrollButtons:{ enable:true }  
				});


					 $("document").data({"activedScroll":true}); // ACTIVAMOS BANDERA



 				setTimeout(function(){

 						$("#content_1").mCustomScrollbar("scrollTo","bottom"); // SCROLEAMOS HASTA ABAJO DE LA CONVERSACION


 				 },600);



			}



			}
				,

			beforeSend : function(){
				// se ponen los loader
		


			}


				});
		




	}		

		
 

 	}