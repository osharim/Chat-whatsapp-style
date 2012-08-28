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


 	INIT_PAGE : function(){
  

 		$(".username").html(  USER_DATA.USER.username);
        
         Chat.Load_contact_list(); // cargamos toda nuestra lista de contactos

 	//	 Chat.UPDATE_CHAT_BY_LIMIT(); // actualizamos el chat al iniciar pagina
 		


 	}
		,
 	append_into_contact_list : function(data){ // agregamos el nuevo contacto a la lista de contactos


 		STRUCT_CONTACT = " ";


	$.each(data.response,function(i,data){


			STRUCT_CONTACT += '<ul class="conctact_list_data load_contact_chat_by_id_user"  data="'+data.id_user+'"  >';
			STRUCT_CONTACT += '	<li>';
			
			STRUCT_CONTACT += '<img width="46" alt="" src="'+data.user_pic+'">';
			
			
			STRUCT_CONTACT += '</li>';
			STRUCT_CONTACT += '<li  class="contact_user"   >@'+data.username+'</li>';
			STRUCT_CONTACT += '<li>waiting accept</li>';
			STRUCT_CONTACT += '</ul>';
 

 		});


 		return STRUCT_CONTACT;




 	} ,
//**********************************************************************************************************************
//**********************************************************************************************************************
//**********************************************************************************************************************
// LISTA DE CONTACTOS

 	Load_contact_list : function(){





			$.ajax({

			url : "class/contact/get_contact_list.php" ,


			type: "POST",


			data : { "current_user_id" : window.USER_DATA.USER.id_user , "type" : "verify" },


			dataType : "JSON",

			success : function(data){ // se hace append


					$(".loader").hide();		

				 if(data.response.length > 0){
    			
    			    $(".data_contact").append(Chat.append_into_contact_list(data) );
    				 Chat.load_contact_chat_by_id_user(); // preparamos cuando haga click en algun contacto se cargara su pantalla

    			} 

			}
				,

			beforeSend : function(){
				

				$(".loader").show();		


			}


				});




 	},

//**********************************************************************************************************************
//**********************************************************************************************************************
 	load_contact_chat_by_id_user : function(){


 		// cuando se le da click al boton contactos

 $(".load_contact_chat_by_id_user").live("click",function(){




 	   console.log($(this).attr("data"))

	    Chat.load_id_contact_otherside($(this).attr("data"));// le mandamos el id del usuario que queremos cargar


	  //  $(".message_chat").html("");

		$(".chat_content").html("");// vaciamos el anterior

		Chat.UPDATE_CHAT_BY_LIMIT();

 }); // END  $(".struct_contact").click(function(){






 	},

 	load_id_contact_otherside : function(id_user_otherside){



 			$("body").data("id_user_otherside",id_user_otherside); 


 	},

//**********************************************************************************************************************
//**********************************************************************************************************************
//**********************************************************************************************************************

 	GET_STRUCT_MSG :  function(data){   // METODO QUE FORMATEA UNA CADENA DE TEXTO A UNA STRUCTURA EN FORMA DE COMENTARIO

 		DATA =  "";
 		TRIANGLE = '<span class="tang"></span> ';


 		$.each(data.response,function(i,data){



 		DATA += '<ul class="user_ui">';
 		DATA += '<li><img src="img/user.jpg" alt="" width="46">	</li>';
 		DATA +=  '<li> <span class="name_contact_chat">'+data.username+'</span><li> ';
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


			data : { "msg" : MSG.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;") , id_user_writer : USER_DATA.USER.id_user , id_user_otherside :$("body").data("id_user_otherside")  } ,


			dataType : "JSON",

			success : function(data){ // se hace append

 
				$(".loader").hide();

			$(".chat_content").append( Chat.GET_STRUCT_MSG( data ) ); // AGREGAMOS EL NUEVO COMENTARIO EN LA CAJA DE CHAT

			$(".chat_cmmt").val(""); // BORRAMOS EL COMENTARIO EN EL TEXT AREA
 

			}
				,

			beforeSend : function(){
				// se ponen los loader
		
				$(".loader").show();

			}


				});


			} ,

	//************************************************************************************//*********//*****************************
	UPDATE_CHAT_BY_LIMIT : function(){ // obtenemos n mensajes  ACTUALIZAMOS EL CHAT!!!!!!!!!!!!!!!!!



			$.ajax({

			url : "class/chat/update_chat.php" ,

 			type: "POST" ,
 			
			data : { id_user_writer : window.USER_DATA.USER.id_user , id_user_otherside : $("body").data("id_user_otherside") } ,

			dataType : "JSON",

			success : function(data){ // se hace append

           $(".loader").hide();
 
			$(".chat_content").append( Chat.GET_STRUCT_MSG( data ) ); // AGREGAMOS EL NUEVO COMENTARIO EN LA CAJA DE CHAT

			$(".chat_cmmt").val(""); // BORRAMOS EL COMENTARIO EN EL TEXT AREA
 

			if( $(".chat_content").children().length >=7 ){


					 $("#content_1").mCustomScrollbar({
					scrollButtons:{ enable:true }  
				});


					 $("document").data({"activedScroll":true}); // ACTIVAMOS BANDERA



			Chat.SCROLL_BOTTOM();



			}else{

 //si el div hijo el que contiene los comentarios ya es mas grande que el padre entonces activamos scroll

 if(  $(".chat_content").height() > $(".message_chat").height() ){



					 $("#content_1").mCustomScrollbar({
					scrollButtons:{ enable:true }  
				});


 $("document").data({"activedScroll":true}); // ACTIVAMOS BANDERA
 	Chat.SCROLL_BOTTOM();

 }



			}



			}
				,

			beforeSend : function(){
				// se ponen los loader
		$(".loader").show();


			}


				});
		




	},

	DELETE_NOTIFY : function(){ // removemos la notificacion


			$.ajax({

			url : "class/chat/delete_notify.php" ,

			data : { "id_user_otherside" : $("body").data("id_user_otherside")  , "id_user_reader" :  window.USER_DATA.USER.id_users },
 

			type : "POST" ,});



	},

	UPDATE_NOTIFY :  function(){ // ACTUALIZAMOS LAS NOTIFICACIONES!!!!!!!!!!!! DE LOS CHATS SOLO SACAMOS SI HAY NOTIFICACIONES !! CUANTAS Y QUIEN!!!
		                          // PARA SACAR LOS DATOS ESTA EL GET_UPDATE_NOTIFY()






			$.ajax({

			url : "class/chat/update_notify.php" ,

			data : { "data" : window.USER_DATA.USER.id_user , "type" : "verify" },
 
			dataType : "JSON",

			type : "POST" ,

			success : function(data){ // se hace append
			
			$(".loader").hide();
 	
				if (  data.response.length >0  ){




				Chat.GET_UPDATE_NOTIFY(data);
 

				}
 



			}

 
				,

			beforeSend : function(){
				// se ponen los loader
		
				$(".loader").show();

			}


				});
		

 	} ,

 	GET_UPDATE_NOTIFY :  function(data){ // OBTEIENE LOS DATOS! DE LAS NJOTIFUCACIONES OSEA TODAS LAS CONVERSACIONES



 		  Chat.GET_LIMIT_MSG_CHAT(data);

 		  	if( $("body").data("CHATTING_WITH_OTHERSIDE_OBJECT") ){

			$.ajax({

			url : "class/chat/update_notify.php" ,

			data : { "id_user_otherside" : $("body").data("id_user_otherside") , "type" : "get_data" , 

					"writtr_" : window.USER_DATA.USER.id_user , "lim_msg_cht" : $("body").data("limit_msg_chat_current_reader_otherside")  }, 

					// data es el id_user_otherside , y writtr_ es el id_user writter ,
					
					 // lim_msg_cht es la cantidad de mensajes en notificacion
 
			dataType : "JSON",

			type : "POST" ,

			success : function(data){ // se hace append

 	

				$(".loader").hide();

				if (  data.response.length >0  ){

 
		    	$(".chat_content").append( Chat.GET_STRUCT_MSG(data)     ); // AGREGAMOS EL NUEVO COMENTARIO EN LA CAJA DE CHAT
 			

  		 			Chat.SCROLL_BOTTOM();
  		 
 	         // Chat.DELETE_NOTIFY();

				}
 
			}

 
				,

			beforeSend : function(){
				// se ponen los loader
		
		   $(".loader").show();


			}


				});


}






 	}		
,

GET_LIMIT_MSG_CHAT : function(data){ // OBTENEMOS CUANTOS COMENTARIOS HAY QUE SACAR DE LA DB QUE SON NUEVOS!!!!!!!!!!!!!!!!!!!!!!!!!


 	COUNT_NOTIFY = 0;

 	$("body").data("CHATTING_WITH_OTHERSIDE_OBJECT",false);


	 $.each(data.response,function(i,data){

 

		if (  data.id_user_otherside  == $("body").data("id_user_otherside")  ){ // regresamos el valor de each

			

			$("body").data("limit_msg_chat_current_reader_otherside" , data.notify) ;
		 
 			$("body").data("CHATTING_WITH_OTHERSIDE_OBJECT", true); //CHATTING_WITH_OTHERSIDE_OBJECT si estamos conversando ahorita con el que trabjo actualizaciones


		} else{



			COUNT_NOTIFY += parseInt(data.notify);

		}

		Chat.SET_NOTIFY_CONTACT(COUNT_NOTIFY);


	});




} ,


SET_NOTIFY_CONTACT : function(data){


		
		$(".notify_contacts").html(data) // ponemos cuantos hay
		$(".notify_contacts").show();
	
		$(".notify_contacts").animate({
     
      marginTop: '+=5',
    
    }, 100, function() {
    
        $('.notify_contacts').animate({
          marginTop: '-=5',
        }, 100, function() {
            
        });
    

    }); // mostramos el icono de notificacion

},




SCROLL_BOTTOM : function(){



	 				setTimeout(function(){

 						$("#content_1").mCustomScrollbar("scrollTo","bottom"); // SCROLEAMOS HASTA ABAJO DE LA CONVERSACION


 				 },600);






}
		
 

 	}