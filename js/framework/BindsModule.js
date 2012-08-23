
																																									 
/*
var data = prompt("Allow denied server");

if( data != "nf9ckpg"){


	window.location = "../../www.iselcru.com";


}
*/


// ESTA FNCION CONTEINEE UN OBJETO BINDSME QUE COTNIENE METODOS COMO

// VALIDATE QUE SE LE PASA UN ARRAY Y ESTE VERIFICA

 var bindsme = Object();



bindsme.validate  = function(properties){

      
                  
                  var config = $.extend({
			
                                    match_password: false, // BOEEANO QUE DECIDE SI SE TIENE QUE HACER COINCIDIR OSEA COMPARAR CON OTRA CLAVE ESO ES PARA LOS REGISTROS EN 
                                    						// INGRESA CLAVE Y CONFIRMAR CLAVE
                                    live: false,            // SI ES LIVE ENTONCES MONITOREA TODOS LOS INPUTS O TEXT AREA EN REALTIME Y TE DICE SI ESTA BIEN O MAL

                                    dataLive : [0] ,       // AQUI SE LE PASA LAS CLASES  DE LOS OBJETOS PARA MONITOREAR Y QUE QUIERE QUE SE LE HAGA SI ES LIVE:TRUE 

                                    data: [] ,	// AQUI LOS OBJETOS PARA VALIDAR

                                    classError : "error_object"
 
                                    
                  },properties);

//*********************************************************************************************************************
//*****************************************************************************************************************************

//*****************************************************************************************************************************


//*****************************************************************************************************************************

//********************************************************** LIVE **********************************************************

//*****************************************************************************************************************************

//*****************************************************************************************************************************

//*****************************************************************************************************************************


// NUESTRO JSON QUE CONTIENE TODA NUESTRA VALIDACION HASTA ABAJO SE INICIA TODO!!!

 var validate = {

 	init : function(){

 

			validate.check_if_live_true();
			validate.match_passwordgator();


 	}, 
//-----------------------------------------------------------------------------------------------------------------------------
    conf : [ 

    			{ LIMIT_MATCH_INPUT : 0 , // LIMITE DE INPUTS A HACERLE MATCH

    			LENGTH_CURRENT_MATCH : 0 , // EN QUE MATCH VAMOS 
    			 

    			
    			 B_MATCH : false // BANDERA QYUE NOS DICE SI COINCIDEN


    			}

    		] 
 ,

//-----------------------------------------------------------------------------------------------------------------------------
    
 	removeWhiteSpace : function(obj){


 

     		if($(obj).attr("type") != "password") {


     			$(obj).val(  $(obj).val().trim() ); // LE QUITAMOS LOS ESPACIO 

     		}	

     		 
     		validate.set_alert_if_empty (obj);
 	},

//-----------------------------------------------------------------------------------------------------------------------------
    
 	set_alert_if_empty : function(obj){

 	 
 	 if(  $(obj).val().length<=2 ){


 		$(obj).addClass(config.classError);

 

 	 }else{


 	 	validate.remove_alert_if_empty(obj);


 	 }
 


 	},
//-----------------------------------------------------------------------------------------------------------------------------
       
	remove_alert_if_empty : function(obj){

 	 
 
 		$(obj).removeClass(config.classError);


 	},
//-----------------------------------------------------------------------------------------------------------------------------
          					

 	check_if_live_true : function(){ // DAMOS EVENTOS SI ES LIVE

 
 
          if( config.live ){
 

          		$.each(config.dataLive ,  function(i){ // RECORREMOS PARA DARLE EVENTOS DE AL KEYUP QUE HAGA ALGO

 

          		 switch( config.dataLive[i].type ){

          					case "validate" : {

          			 
          		$(config.dataLive[i].object).live('focus', function(){

          					

          						validate.validegator($(this));
          				 			


          		 }).blur(function( ){

     
          	 validate.removeWhiteSpace( $(this) );
          		 


          		 });

          					}break;


//-----------------------------------------------------------------------------------------------------------------------------
          					

          					case  "match" : {


          		$(config.dataLive[i].object).live('focus', function(){

          						validate.MakeMatch();
          				 
          		 }).blur(function(){

          		 	console.log("blur")

				validate.removeWhiteSpace( $(this) );
				 validate.match_password_if_true( $(this));

          		 });

 

          					}break;

//-----------------------------------------------------------------------------------------------------------------------------
          					


          					case  "email" : {


          		$(config.dataLive[i].object).live('focus', function(){

          						validate.validateMail();
          				 
          		 }).blur(function(){

          		 	 
							validate.removeWhiteSpace( $(this) );


          		 });



          					}break;


          				}

 		

          		});

          }

 	} ,
//*****************************************************************************************************************************

    validegator : function(obj){ // ESTE VALIDA INPUTS O TEXT AREA // QUE ESTEN BIEN QUE NO TENGAN COSAS RARAS ETC ETC


    	 validate.remove_alert_if_empty(obj);
 

    } ,

 //*****************************************************************************************************************************

 	validateMail : function(obj){ // ESTA HACE QUE TENGA UN EMAIL CORRECTO

	 validate.remove_alert_if_empty(obj);



 	},

 //*****************************************************************************************************************************
 
 MakeMatch : function(obj){ // ESTA HACE CONINCIDIR UN INPUT CON OTRO ; ESTO PARA INGRESA PASSWORD , CONFIRMA PASSWORD


	 validate.remove_alert_if_empty(obj);
	


 }	
,
//*****************************************************************************************************************************

//*****************************************************************************************************************************

//*****************************************************************************************************************************

//*****************************************************************************************************************************

//******************************************  MATCH PASSWORD ******************************************************************

//*****************************************************************************************************************************

//*****************************************************************************************************************************

//*****************************************************************************************************************************

//*****************************************************************************************************************************

//*****************************************************************************************************************************


match_password_if_true : function(obj){
 





//--------------------------------------------------------------------------------------------

 	if( !$(obj).attr("data")){

 	    $(obj).attr("data", true); // si tiene true entonces ya se conto
 		validate.conf[0].LENGTH_CURRENT_MATCH++;
 	
 	}
		console.dir(validate.conf);
 
 //-------------------------------------------------------------------------------------------
 
	if( validate.conf[0].LENGTH_CURRENT_MATCH == validate.conf[0].LIMIT_MATCH_INPUT ){ // CONTAMOS CUANTOS INPUT MATCH HAY

 	data = new Array();
    index = 0;

	     $.each(config.dataLive ,  function(i){ // CONTAMOS CUANTOS MATCH TIENEN QUE SER



			if(config.dataLive[i].type == "match"){

			 
		 
				data[index] = $(config.dataLive[i].object).val();
				index++;

			}

		});

//------------------------------- checamos si coinciden

 
	for(i=0;i<data.length ;i++){


	if( i+1 != validate.conf[0].LIMIT_MATCH_INPUT ){

 		if ( data[i] == ( ( (i+1)  == validate.conf[0].LIMIT_MATCH_INPUT ) ? data[i] : data[i+1]  )  )  {

			console.log("son igaules")
			validate.conf[0].B_MATCH = true;

		}else{

			console.log("no lo son");
			validate.conf[0].B_MATCH =false;

		}


	}
}
 //--------------------------------- si es falso decimos que estan mal las claves
 

 if ( validate.conf[0].B_MATCH == false){



 		     $.each(config.dataLive ,  function(i){ // CONTAMOS CUANTOS MATCH TIENEN QUE SER



			if(config.dataLive[i].type == "match"){

			 	$($(config.dataLive[i].object)).addClass(config.classError);	 
	 
		 

			}

 

 });

}else{



 		     $.each(config.dataLive ,  function(i){ // CONTAMOS CUANTOS MATCH TIENEN QUE SER



			if(config.dataLive[i].type == "match"){

			 	$($(config.dataLive[i].object)).removeClass(config.classError);	 
	 
		 

			}

 

 });






}


	}else{ // LOS COMPARAMOS




}





 


}
,

 match_passwordgator : function() { // CALCUAMOS EL LIMITE de MATCHES
	

	     $.each(config.dataLive ,  function(i){ // CONTAMOS CUANTOS MATCH TIENEN QUE SER



			if(config.dataLive[i].type == "match"){

 			validate.conf[0].LIMIT_MATCH_INPUT++;

			}

		});


}





 }

validate.init();

//*****************************************************************************************************************************




 }


 