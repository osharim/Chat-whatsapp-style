jQuery(document).ready(function($) {
	


	$.get("class/data.php", function(USER_DATA){  // una vez que traiga los datos que inicie pagina

	window.USER_DATA= USER_DATA;

Chat.INIT_PAGE(); // Ponemos todos los datos dentro de los div etc...

console.dir(window.USER_DATA)


 setInterval(function(){


 Chat.UPDATE_NOTIFY();


 },2400);



//***************************************************************************



//***************************************************************************



//***************************************************************************
//chat.js


//***************************************************************************






        	$(".chat_cmmt").val(window.USER_DATA.USER.username+" escribe algún comentario ... ");

        	$(".chat_cmmt").focus(function(){

        		$(".chat_cmmt").val("");
        	

        	}).blur(function(){

        	$(".chat_cmmt").val(window.USER_DATA.USER.username+" escribe algún comentario .. ");



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

























}, "json") 




 



});
