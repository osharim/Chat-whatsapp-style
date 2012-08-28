 

        $("document").ready(function(){


        	$(".chat_cmmt").val(window.USER_DATA.USER.username+" escribe algún comentario ... ")

        	$(".chat_cmmt").focus(function(){

        		$(".chat_cmmt").val("");
        	

        	}).blur(function(){

        	$(".chat_cmmt").val(window.USER_DATA.USER.username+" escribe algún comentario .. ")



        	})


     
						$(".chat_cmmt").bind("keyup", function(event){

							 if (event.which == 13) {
								
 
							 

							 Chat.append(); //LO INTRODUCIMOS EN EL CHAT


  							LENGTH_COMMENTS =  $(".chat_content").children().length; // CONTAMOS CUANTOS COMENTARIOS TIENE EL CHAT

							 if (  LENGTH_COMMENTS  >= 6 ){

							 Chat.activeScroll(LENGTH_COMMENTS);


							 }




								}
 

						});



		}); 






		



