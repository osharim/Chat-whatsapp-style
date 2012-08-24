jQuery(document).ready(function($) {
	
 
	$.get("class/data.php", function(USER_DATA){  // una vez que traiga los datos que inicie pagina

	window.USER_DATA= USER_DATA;


 Chat.UPDATE_CHAT_BY_LIMIT(); // actualizamos el chat al iniciar pagina


 setInterval(function(){


 Chat.UPDATE_NOTIFY();


 },2400);


}, "json") 




});
