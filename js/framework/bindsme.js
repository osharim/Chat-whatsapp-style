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
 		TRIANGLE = '<span class="tang"></span> ';


 		$.each(data.response,function(i,data){



 		DATA += '<ul class="user_ui">';
 		DATA += '<li><img src="img/user.jpg" alt="" width="46">	</li>';
 		DATE = '<span clasS="date">'+data.fecha+'</span>'
 		DATA += '<li class="msg_chat">'+TRIANGLE+data.msg+DATE+'  </li>' ;
 
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

 			 

 				 
 				Chat.SCROLL_BOTTOM();

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

 			type: "POST" ,
 			
			data : { id_user_writer : window.USER_DATA.USER.id_user   } ,

			dataType : "JSON",

			success : function(data){ // se hace append

 
			$(".chat_content").append( Chat.GET_STRUCT_MSG( data ) ); // AGREGAMOS EL NUEVO COMENTARIO EN LA CAJA DE CHAT

			$(".chat_cmmt").val(""); // BORRAMOS EL COMENTARIO EN EL TEXT AREA
 

			if( $(".chat_content").children().length >=7 ){


					 $("#content_1").mCustomScrollbar({
					scrollButtons:{ enable:true }  
				});


					 $("document").data({"activedScroll":true}); // ACTIVAMOS BANDERA



			Chat.SCROLL_BOTTOM();



			}



			}
				,

			beforeSend : function(){
				// se ponen los loader
		


			}


				});
		




	},

	DELETE_NOTIFY : function(){ // removemos la notificacion


			$.ajax({

			url : "class/chat/delete_notify.php" ,

			data : { "writter" : window.USER_DATA.USER.id_user , "reader" : 1 },
 

			type : "POST" });



	},

	UPDATE_NOTIFY :  function(){ // ACTUALIZAMOS LAS NOTIFICACIONES!!!!!!!!!!!! DE LOS CHATS SOLO SACAMOS SI HAY NOTIFICACIONES !! CUANTAS Y QUIEN!!!
		                          // PARA SACAR LOS DATOS ESTA EL GET_UPDATE_NOTIFY()






			$.ajax({

			url : "class/chat/update_notify.php" ,

			data : { "data" : window.USER_DATA.USER.id_user , "type" : "verify" },
 
			dataType : "JSON",

			type : "POST" ,

			success : function(data){ // se hace append

 	
				if (  data.response.length >0  ){



				Chat.GET_UPDATE_NOTIFY(data);
 

				}
 



			}

 
				,

			beforeSend : function(){
				// se ponen los loader
		


			}


				});
		

 	} ,

 	GET_UPDATE_NOTIFY :  function(data){ // OBTEIENE LOS DATOS! DE LAS NJOTIFUCACIONES OSEA TODAS LAS CONVERSACIONES


 			$("body").data("id_user_writer",1); 

 		  Chat.GET_LIMIT_MSG_CHAT(data);


			$.ajax({

			url : "class/chat/update_notify.php" ,

			data : { "data" : 1  , "type" : "get_data" , "writtr_" : window.USER_DATA.USER.id_user , "lim_msg_cht" : $("body").data("limit_msg_chat_current_writter")  }, // data es el id_user_reader , y writtr_ es el id_user writter ,
																						  // lim_msg_cht es la cantidad de mensajes en notificacion
 
			dataType : "JSON",

			type : "POST" ,

			success : function(data){ // se hace append

 	
				if (  data.response.length >0  ){

 
		    	$(".chat_content").append( Chat.GET_STRUCT_MSG(data)     ); // AGREGAMOS EL NUEVO COMENTARIO EN LA CAJA DE CHAT
 			

  		 			Chat.SCROLL_BOTTOM();
  		 			console.log("ya borralo!")
 	          // Chat.DELETE_NOTIFY();

				}
 



			}

 
				,

			beforeSend : function(){
				// se ponen los loader
		


			}


				});









 	}		
,

GET_LIMIT_MSG_CHAT : function(data){ // OBTENEMOS CUANTOS COMENTARIOS HAY QUE SACAR DE LA DB QUE SON NUEVOS!!!!!!!!!!!!!!!!!!!!!!!!!


 

	 $.each(data.response,function(i,data){

	 

		if (  data.id_user_writer  == $("body").data("id_user_writer")  ){ // regresamos el valor de each

			

			$("body").data("limit_msg_chat_current_writter" , data.notify) ;
		 
 


		}




	});




} ,


SCROLL_BOTTOM : function(){



	 				setTimeout(function(){

 						$("#content_1").mCustomScrollbar("scrollTo","bottom"); // SCROLEAMOS HASTA ABAJO DE LA CONVERSACION


 				 },600);






}
		
 

 	}