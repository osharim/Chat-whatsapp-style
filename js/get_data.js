//  EN ESTE ARCHIVO OBTENEMOS TODAS LAS VARIABLES DE SSESION

$.get("class/data.php", function(USER_DATA){ 

	window.USER_DATA= USER_DATA;

}, "json") 

