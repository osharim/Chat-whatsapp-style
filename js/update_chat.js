 
	$.get("class/data.php", function(USER_DATA){  // una vez que traiga los datos que inicie pagina

	window.USER_DATA= USER_DATA;

Chat.INIT_PAGE(); // Ponemos todos los datos dentro de los div etc...



 setInterval(function(){


 Chat.UPDATE_NOTIFY();


 },2400);


}, "json") 


 