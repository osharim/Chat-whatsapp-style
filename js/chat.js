 
		(function($){

        $("document").ready(function(){




						$(".chat_cmmt").bind("keyup", function(event){

							 if (event.which == 13) {
								
 
							 MSG_SEND =  Chat.GET_STRUCT_MSG($(this).val()); // TOMAMOS EL MENSAJE A COMENTAR Y OBTENEMOS EN HTML

							 Chat.append(MSG_SEND); //LO INTRODUCIMOS EN EL CHAT


  							LENGTH_COMMENTS =  $(".chat_content").children().length; // CONTAMOS CUANTOS COMENTARIOS TIENE EL CHAT

							 if (  LENGTH_COMMENTS  >= 6 ){

							 Chat.activeScroll(LENGTH_COMMENTS);


							 }




								}
 

						});
















 // METODOS PARA CHAT





 var Chat = {

 	GET_STRUCT_MSG :  function(MSG){   // METODO QUE FORMATEA UNA CADENA DE TEXTO A UNA STRUCTURA EN FORMA DE COMENTARIO

 		DATA =  "";
 		DATA = '<ul class="user_ui">';
 		DATA += '<li><img src="img/user.jpg" alt="" width="46">	</li>';
 		DATA += '<li class="msg_chat">'+MSG+'</li>' ;
		DATA += '<li>5:00 AM</li>';
		DATA += '</ul';
 		return DATA;
				 
 


 	},

 	append : function(MSG){ // ESTA ESTRUCTURA HACE APPEND AL CHAT



 		$(".chat_content").append(MSG); // AGREGAMOS EL NUEVO COMENTARIO EN LA CAJA DE CHAT
		$(".chat_cmmt").val(""); // BORRAMOS EL COMENTARIO EN EL TEXT AREA
 

 	} ,

 	activeScroll :  function(LENGTH_COMMENTS){




 			if(LENGTH_COMMENTS == 6 ){  // SI APENAS SON 7 COMENTARIOS ENTONCES ACTIVAMOS EL SCROLL POR PRIMERA VEZ

  
				 $("#content_1").mCustomScrollbar({
					scrollButtons:{ enable:true }  
				});
				$("#content_1").mCustomScrollbar("scrollTo","bottom");			


 			}else{ // SI Y A SON MAS ENTONCES OSLO ESCROLEAMOS HACIA EL BOTTOM 

 				if( LENGTH_COMMENTS >= 7)

 				 
 				setTimeout(function(){

 						$("#content_1").mCustomScrollbar("scrollTo","bottom");


 				 },300);

 			}
 		 		

	










 	}



 


 }



 




				}); 
		})(jQuery);