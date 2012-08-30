 

// ESTA FNCION CONTEINEE UN OBJETO BINDSME QUE COTNIENE METODOS COMO

// VALIDATE QUE SE LE PASA UN ARRAY Y ESTE VERIFICA

// ESTE ES PARA VALIDAR PERO VALIDA COMO LOS HOMBRES

 var bindsme = Object();



bindsme.validate  = function(properties){

      
                  
                  var config = $.extend({
			
                                    onKeyPress : false , // para que  haga el submit al oprimir una tecla

                                    onSend : "", // BOTON QUE AL HACERLE CLICK HARA EL SUBMIT
                                    
                                    form : [], // TIENE LA FORMA

                                   // form : [{  action : "URL a donde apunta el form",

                                  //          object : "CLASE O ID del FORM"

                                  //        }] ,

                                    match_password: false, // BOEEANO QUE DECIDE SI SE TIENE QUE HACER COINCIDIR OSEA COMPARAR CON OTRA CLAVE ESO ES PARA LOS REGISTROS EN 
                                    						// INGRESA CLAVE Y CONFIRMAR CLAVE
                                    live: false,            // SI ES LIVE ENTONCES MONITOREA TODOS LOS INPUTS O TEXT AREA EN REALTIME Y TE DICE SI ESTA BIEN O MAL

                                    dataLive : [0] ,       // AQUI SE LE PASA LAS CLASES  DE LOS OBJETOS PARA MONITOREAR Y QUE QUIERE QUE SE LE HAGA SI ES LIVE:TRUE 

                                    data: [] ,	// AQUI LOS OBJETOS PARA VALIDAR

                                    classError : "error_object" , // CLASE QUE LE PONDRA A LOS INPUT CUANDO HAYA ERRORES
 
                                    
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

      validate.keyPress();
     
			validate.check_if_live_true();
			validate.match_passwordgator();


 	}, 
//-----------------------------------------------------------------------------------------------------------------------------
    conf : [ 

    			{ LIMIT_MATCH_INPUT : 0 , // LIMITE DE INPUTS A HACERLE MATCH

    			LENGTH_CURRENT_MATCH : 0 , // EN QUE MATCH VAMOS 
    			 
          VALID_DATA : false , // FLAG QUE NOS DICE SI YA PODEMOS PROSEGUIR!!! OSEA SI ESTA MAL UN INPUT O TEXTAREA DEL JSON RECIVIDO ENTONCES SE PONE A FALSE Y SI TODO ESTA BIEN ES TRUE
    			
    			 B_MATCH : false // BANDERA QYUE NOS DICE SI COINCIDEN


    			}

    		] 
 ,
//-----------------------------------------------------------------------------------------------------------------------------

 submit : function(){



  $(config.onSend).click(function(){

   validate.do_validate();


  });


 },


keyPress : function(){

 if ( config.onKeyPress){

$(config.onSend).bind("keyup", function(event){

               if (event.which == 13) {
                
 
               
    validate.do_validate();


                }
 

            });
}else{

 validate.submit(); // si no entonces que le de evento de click


}

},

 do_validate : function(){



    validate.check_input_empty(); // VERIFICAMOS SI TODO TIENE DATOS

    NUMBER_ERRORS =   $(config.form[0].object ).find(".error_object").length ;
    
    if(validate.conf[0].VALID_DATA &&  NUMBER_ERRORS === 0  ){ // SI TODO ESA BIEN ENTTONCES ENVIAMOS LOS DATOS !!!!!!!!!!!!!!!!!!!!!!!!!!

    

        $(config.form[0].object ).attr("action", config.form[0].action );
        $(config.form[0].object ).submit();


    }




 }
,
//-----------------------------------------------------------------------------------------------------------------------------

 check_input_empty : function(){


     $.each(config.dataLive ,  function(i){ // CONTAMOS CUANTOS MATCH TIENEN QUE SER



      if( $(config.dataLive[i].object).val().length >2 ){

 
   
             validate.conf[0].VALID_DATA = true; // CUANDO ESTA BIENNNNN!!!!!!!!!!!!!!!!!!!!!!!!!!


      }else{


         $(  config.dataLive[i].object ).addClass(config.classError);



      }

    });
 



 }

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

          		 

				validate.removeWhiteSpace( $(this) );
				 validate.match_password_if_true( $(this));

          		 });

 

          					}break;

//-----------------------------------------------------------------------------------------------------------------------------
          					


          					case  "email" : {


          		$(config.dataLive[i].object).live('focus', function(){

          						
          				 
          		 }).blur(function(){

          		 	 
							 $(this).val(  $(this).val().trim() ); // LE QUITAMOS LOS ESPACIO 
              validate.validateMail($(this));

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

 
        
    re=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/
    
   
   if(    ! re.exec( $(obj).val() )  )    {
     
        
        
      $(obj).addClass(config.classError);   
      
      
      
       }else{


     $(obj).removeClass(config.classError); 
     

 
          }
           
   
   
 


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


			validate.conf[0].B_MATCH = true;

		}else{


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


 