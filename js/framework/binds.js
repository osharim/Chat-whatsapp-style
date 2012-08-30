
/**
 * FRAMEWORK BINDS
 * Author: Omar S. Hernandez
 *  LICENCE BINDS
 ;-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

 ;-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
 ;-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

OBJECTO:    BOX

INVOQUER : binds.box({   options  });

FUNCIONES:   

  FUNCION                                            DESCRIPCION

  styles ()                                estilo de caja de alerta

  add_block_page()           bloqueamos el navegador con un div

 add_popup_box()             insertamos en box en el navegador

CREADO:                   21-04-2012
MODIFICADO:          - - - - - - - - - -
DESCRIPCION :     CAJA DE ALERTA LA CUAL LE PODEMOS DEFINIR TAMAÑO POSICION CONTENIDO TITULO  - - 
OBSERVACION :    -----------------

;-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
;-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
;-----------------------------------------------------------------------------------------------------------------------------------------------------------------------


OBJECTO:    SEARCH INSTANT

INVOQUER : binds.searchInstant({   options  });

FUNCIONES:   

FUNCION                                                                         DESCRIPCION

      
SET_BLUR_INPUT_FORCE_CREATE_LIST()                     COMPARAMOS LO QUE HAY EN EL INPUT Y LO QUE YA FUE SACADO DE LA DB , SI EXISTE ENTONCES NO CREAMOS NADA , PERO SI NO EXISTE CREAMOS LA LISTA ( ESTE ES UN FIX PARA EL BUG CUANDO APRETAMOS EG. HISTORIA , SI BUSCAMOS HIS, YA NO HACE NADA , CON ESO SE SOLUCIONA

DO_AJAX_REQUEST()                                                 hacemos la llamada ajax para obtener las conincidencias con la consulta

DO_VALIDATE_DATA()                                               verificamos si hay datos y llamamos a la funcion is_keyup_code() 

SET_FORMAT_STRING(data)                                   formatemos data en forma de lista y lo inyectamos en el parent del input 
 
      
 function reprint_list()                                                     dependiendo al contador donde binds.reprint   tiene que ser igual a la lista actual en el each entonces la repintamos

function is_keyup_code()                                             si se apreto las teclas enter (copia el dato de la lista seleccionada y lo pone en el input
                                                                                           arriba (incremente binds.reprint ) abajo   (decremente binds.reprint ) derecha  (incremente binds.reprint )  
                                                                                           izquerda (decremente binds.reprint )y si fue hace 
            
 binds.content_available                                              si al hacer busqueda instantanea no hay resultado alguno entonces  binds.content_available = false :: de lo contrario  binds.content_available = true


CREADO:                   21-04-2012
MODIFICADO:          - - - - - - - - - -
DESCRIPCION :     busqueda instantanea para los inputs que requieran datos , como listas de intereses y el main search instant
OBSERVACION :   falta hacer la busqueda del main search y al seleccionar una lista con caracteres especiales los inserta en html verificar
;-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
;-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
;-----------------------------------------------------------------------------------------------------------------------------------------------------------------------


 
OBJECTO:    GET LIST USER

INVOQUER :binds.getInterestList ({   options  });

FUNCIONES:   

  FUNCION                                            DESCRIPCION


DO_AJAX_REQUEST()                                                  insertamos el id_del usuario y el nombre de la lista via post ( ajax)

SET_FORMAT_STRING(data)                                   formatemos data en forma de lista y lo en el options.append
 
 

CREADO:                   21-04-2012
MODIFICADO:          - - - - - - - - - -
DESCRIPCION :     obtenemos todas las listas de interes y cuantas publicaciones tiene cada lista y las inyectamos en algun contenedor
OBSERVACION :    -----------------

;-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
;-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
;-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
 
OBJECTO:    CREATE INTEREST LIST

INVOQUER :  binds.createInterestList({   options  });

FUNCIONES:   

  FUNCION                                            DESCRIPCION

DO_AJAX_REQUEST()                      insertamos el id_del usuario y el nombre de la lista via post ( ajax)
 
success_created_list()                        funcion que se ejecuta cuando todo ya se proceso osea cuando recivimos el data de ajax le pasamos el id a esta function y procedemos 

CREADO:                   21-04-2012
MODIFICADO:         22-04-2012      log -- success_created_list()   -- 
DESCRIPCION :    al ser llamada este creada una nueva lisa de interes en la DB ( id_user , nombre_lista )
OBSERVACION :    -----------------


;-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
;-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
;-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
 
OBJECTO:     inset publication into interest list   

INVOQUER :  binds.insert_publication_into_interest_list ({   options  });

FUNCIONES:   

  FUNCION                                            DESCRIPCION

 
CREADO:                   22-04-2012
MODIFICADO:          - - - - - - - - - -
DESCRIPCION :    este metodo ingresa  una publicacion en especifico a una lista de interes 
OBSERVACION :    -----------------



 
;-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
;-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
;-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

 
OBJECTO:    ERROR

INVOQUER :    binds.error ({  tittle ,  content  , beforeShow :  function(){         } });

FUNCIONES:   

  FUNCION                                            DESCRIPCION

beforeShow()                                        se ejecuta una funcion si fue defiinida antes de mostrar la ventada de error
 

CREADO:                   21-04-2012
MODIFICADO:          - - - - - - - - - -
DESCRIPCION :    al ser llamado   binds.error  se abre la ventana binds.box y muestra mensaje de error
OBSERVACION :    -----------------


;-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
;-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
;-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
 			
                                   time                                                          : 4,
                                    content                                                   :  "Estamos teniendo problemas con el servicio , vuelve a intentarlo por favor , Gracias",
                                    beforeShow                                           : function(){ } ,
                 
 
                  
 
OBJECTO:      NOTIFY

INVOQUER :     binds.notify ({  DURACION ( time )  ,  content  , beforeShow :  function(){         } });

FUNCIONES:   

  FUNCION                                            DESCRIPCION

beforeShow()                                     
 

CREADO:                   23-04-2012
MODIFICADO:          - - - - - - - - - -
DESCRIPCION :     se muestra un tooltip en la parte posterior con un mensaje de notificacion
OBSERVACION :    -----------------


;-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
;-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
;-----------------------------------------------------------------------------------------------------------------------------------------------------------------------


 
OBJECTO:   TABS

INVOQUER :    binds.Tabs ({  parentID ,   tabs[]  <--  array de objetos [  { tab : "#element"  , contentID : {"#foo"}] });

                           active   : se pasa la clase que se le asignara para que muestre que esta activa

FUNCIONES:   

  FUNCION                                            DESCRIPCION
 

CREADO:                   23-04-2012
MODIFICADO:          - - - - - - - - - -
DESCRIPCION :    al ser llamado   simulamos la paginacion de tabs
OBSERVACION :    -----------------


;-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
;-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
;-----------------------------------------------------------------------------------------------------------------------------------------------------------------------



*/




binds = new Object();

binds. repint = 0;

binds.content_available = "";
 
binds.force_create_list =true; // sirve para ver si tenemos que crear la lista forsozamente (  al escribir historia si solo escribimos histo o 0 <= string.length no hace nada
  
binds.already_exist_list =false; // checar si la publicacion existe ( evitar multiples llamadas ajax si la publicacion ya existe en la lista )
 
//****************************************************** box ************************************************************************
////****************************************************** box ************************************************************************
//****************************************************** box ************************************************************************

binds.box  = function(prop){

      
                  var centrar =$(window).scrollTop() ; //+  ($(window).height()*.30);
                  var options = $.extend({
			
                                    title:"Omar ",
                                    content: "",
                                    top: "25%",
                                    height : "250",
                                    width : "500",
                                    left: "33%", 
                                    style : true ,
                                    onClose : function(){
                                                      
                                    },
                                    before: function(){
                                                      
                                                      
                                    } ,
                                    
                                    success : function() {
                                                      
                                                      
                                                      
                                    }
                                    
                  },prop);
				
                  options.  before();	 
                  add_block_page();
                  add_popup_box();

                  if ( options.style ) { styles(); }
                  
                  options.success();			
                  $('.bindsbox').fadeIn();
              		 

                  function  styles(){			
                                    $('.bindsbox').css({   // lo de abajo :D
                                                      'position':'absolute', 
                                                      'left':options.left,
                                                      'top':options.top,
                                                      'display':'none',
				 
                                                      //     'border':'1px solid #aaa',
                                                      'padding' :'2px',
                                                      'border-radius':'5px',
                                                      '-moz-border-radius':'5px',
                                                      '-webkit-border-radius':'5px',
                                                      //    'box-shadow' : '1px 1px 11px #444444',
                                                      // 'background': ' url("framework/img/bg_fill.png")  ' ,
                                                      'background' : 'none repeat scroll 0 0 rgba(255, 255, 255, 0.4)',
                                                      'z-index':'2'
                                                                                                               
                                    });
                                    $('.close').css({ // boton cerrar
                                                      /*   'position':'relative',
                  'top':'-25px',
                  'left':'20px',
                  'float':'right',
                  'display':'block',
                  'height':'50px',
                  'width':'50px',
                  'background': 'url(images/close.png) no-repeat'*/
                                                      });
 
                                    var pageHeight = $(window).height();
                                    var pageWidth = $(window).width();

                                    $('.block').css({ // la capa para bloquear
                                                      'position':'absolute',
                                                      'top':centrar+"px",
                                                      'left':'0',
                                                      //   'background': ' url("js/modalbinds/img/bg1.png")  ' ,
                                                      //   'background' :'rgba(255,255,255,.8)',
                                                      'height':'100%',
                                                      'width':'100%',
                                                      'z-index':'2 '
				
                                    });
                                    
                                    
                                    
                                    $('.binds_box').css({ // el contenedor
                                                      //'background':'#fff',
                                                      'height':(options.height ) + 'px',
                                                      'width':(options.width - 50) + 'px',
                                                      'padding':'21px',
                                                      'margin':'4px',
                                                      // 'border-radius':'3px',
                                                      //     '-moz-border-radius':'3px',
                                                      //   '-webkit-border-radius':'3px',
                                                      'z-index':'1 ',
                                                      //   'border' : '1px solid #ccc' ,
                                                      "box-shadow" : "0 1px 3px rgba(34, 25, 25, 0.4)"
                                    });
                  }
		

                  function add_block_page(){
                                    var block_page = $("<div class='block'></div>");
						
                                    $(block_page).appendTo('body');
                  }
		 	

                  function add_popup_box(){
                                    var pop_up = $('<div class="bindsbox"><a   class="close">x'+
                                           
                                                      '    </a><div class="binds_box"><div class="title"> '+ options.title + ' <img id="show-loader-box" src="images/loader/p6.gif"></div>'+
                                                                               
                                                      '       <div class="contentbox"> ' + options.content+ '</div></div></div>');
                                                                                                                              
                                                                            
                                                                                   
                                                                                   
                                    $(pop_up).appendTo('.block').fadeIn("slow");// aparecemos el box
                                     
 
                              
                                      
	
                                    function remove_binds_box(){
                  
                                                      $(".bindsbox").delay(10).fadeOut("slow" , function(){ 
                                                      
                                                                        $(this).remove();
                                                                        $('.block').remove() ;
                                                                        //           $('body').css({'overflow' : "visible"})      
                                                                        $(".tipsy").remove();
                                                
                                                      });
                                                 
                  
                  
                                    }
            
                                    $('.close').click(function(){
                                                      
                                                      remove_binds_box();
                                                      options.onClose();
                                       
                                    });
                  }

                  return this;
};


binds.box.close = function(){
                  
                  $(".bindsbox").fadeOut("slow" , function(){ 
                                    $(this).remove();
                                    $('.block').remove() ;
                                    $('body').css({
                                                      'overflow' : "visible"
                                    }) 
                                    $(".tipsy").remove();
                                                                          
                                    $("#head").fadeIn("slow");
                                    $(".tickerheader").fadeIn("slow");       
                                                                          
                  });
                  
}
//********************************************************************* search instant *************************************************************	
//********************************************************************* search instant *************************************************************
//********************************************************************* search instant *************************************************************
//********************************************************************* search instant *************************************************************
 
binds.searchInstant  = function(prop){

                  jsonVar  =  getGlobalVars();
                  var options = $.extend({ // constuctor
			
                                    data                                                           : "", // datos a enviar
                                    id_element                                               : "", // id del input
                                    id_user                                                      :  jsonVar.user_id_global, // id del usuario para WHERE en SQL
                                    append                                                      : "" , // donde inyectamos el STRINGQUERY OPTIONAL 
                                    url                                                                : "class/instantsearch/searchinstant.php",  //URL AJAX
                                    type                                                              :"" , // TIPO DE CONSULTA GET_LIST O GET_INSTANT_SEARCH.
                                    event                                                            :"",  // evento de la tecla
                                    response                                                     : "" 
                  },prop);
	
 
                  DO_VALIDATE_DATA();
                  SET_BLUR_INPUT_FORCE_CREATE_LIST();
              
              
              
              
              
  
                  function SET_BLUR_INPUT_FORCE_CREATE_LIST(){
                    
                    
                                    binds.force_create_list = true;     // RESTORE VALUES 
                    
                                    $(options.id_element ).blur( function(){
                   
                                                      $(".response_list").hide();
                                                      
                                                      $(".response_list").children().each(function(){
                                                                        
                                                                        
                                                                        
                                                                        if( options.id_element.val().toLowerCase() == $(this).html().toLowerCase()  )  {
                                                                                          
                                                                                          
                                                                                          options.id_element.attr("data_list",  $(this).attr("data-id")); // le pasamos el id de la lista al input para evitar error
                                                                                          
                                                                                          binds.force_create_list =false;           
                                                                        
                                                                        
                                                                        }else{    }   
                                                      
                                                      
                                                      });
 
                                    //  si es true entonces tenemos que crear la lista
 
                                    });
                    
                    
                    
                  }
 
 
                  function DO_AJAX_REQUEST(){	 // hacemos la llamda  ajax		
   
                                    $.ajax({
        
     
                 
                                                      type: "POST",
 
                                                      url: options.url+ "?type="+options.type,
                 
                                                      dataType: "json",
                 
                                                      data : {
                                                                        "q": options.data , 
                                                                        id_data :  ((options.type == "get_list") ? options.id_user : "get__data")
                                                      },
                 
                                                      beforeSend: function(){
                       
                                                                        $("#show-loader-box").show();                       
                                                      } ,
                 
                                                      success:function(data){
                                                                       
                                                                        $("#show-loader-box").hide();         
                                                                        SET_FORMAT_STRING(data)
                                                      },
                 
                                                      error:  function(){
                                                                      
                                                                        binds.error({
                                                                                        
                                                                                          beforeShow  : function(){
                                                                                     
 
                                                                                                            $(".tipsy").remove();
                                                                                                            $("#show-loader-box").hide();         
                                                                                                            $(".bindsbox").remove();
                                                                               
                                                                                          }
                                                                        });
                                                                      
                                    } ,
                        
                        
           
                 
                                    timeout: 5000
                                    });

}
 		
  		 
function  DO_VALIDATE_DATA(){ // hacemos validacion antes de hacer ajax
  


                  if( options.data.length > 0){
 
 
                                    if( is_keyup_code()  ){  // si apreto enter arriba o abajo entonces no haga ajax y formate el string
                       
                                                      reprint_list(); // repintamos la lista seleccioanda
                       
                                    }else{
                       
                                                      DO_AJAX_REQUEST();
                       
                                    }
 
           
 
                  }else{
            
                     
                  }
 
}
		 	
  
function  SET_FORMAT_STRING(data){ // formateamos la cadena
 
            
                  if( data.response.length>0){
                  
                                    $(".response_list").remove();    // quitamos el anterior
              
                                    var  data_found = "";
            
                                    data_found += "<ul class='response_list'>";
                     
                                    $.each(data.response , function (i,item){
 
                                                      data_found += " <li data-id="+item.id_lista+">"+ item.nombre_lista  + "</li>";
  
                                    });
                                    data_found += "</ul>";     
               
                                    $( options.append ).append(data_found);
                                                 
                                    binds. repint = 0;
                                    binds.content_available = true ;
                                    binds.already_exist_list  = false;
                  }else{
  
                                    binds.content_available = false ;
  
                                    $(".response_list").remove();    
                  
                                    var no_data_found = "";
                  
                                    no_data_found += "<ul class='response_list'>";
      
                                    no_data_found += " <li>La lista se creará con el nombre <strong>"+options.data+"</strong> </li>";
 
                                    no_data_found += "</ul>";     
               
                                    $( options.append ).append(no_data_found);
                                                 
                                    binds. repint = 1;
                  }
            

            

}
      
      
function reprint_list(){
            
                  if(   binds.content_available ){ // si hay contenido disponible que  proceda a repintar
 
                                    if(binds. repint == -3){ // si se apreto enter
        
                                                      $( options.id_element  ).val(     $(".response_list").children(".selected_list").html()   );
         
                                                      $( options.id_element  ).attr("data_list" ,   $(".response_list").children(".selected_list").attr("data-id"))
         
                                                      $(".response_list").hide();
                
                                                      binds. repint  = 0 ;
        
                                    }else{
                                                      binds. repint  = (binds. repint  >   $(".response_list").children().length ) ? 0 :   binds. repint ; // para que no se pase del limite

                                                      $(".response_list").children().each(function( this_repint  ) {  // repitamos a todos 
   
              
   
                                                                        if( (this_repint+1)   ==  binds. repint ){
         
                                                                                          $(this).addClass("selected_list");
         
         
                                                                        }
                                                                        else{
                                                                                          $(this).removeClass("selected_list");
                                                                                          this_repint++;  
         
                                                                        }

   
                                                      });
                                    }
 
                  }
}
      
      
function is_keyup_code(){
            
                  // 38 arriba
                  //13 enter
                  // 40 abajo 

                  if( options.event.which == 38 || options.event.which == 40 || options.event.which == 13 || options.event.which == 37 || options.event.which == 39){
      
      
                                    if( options.event.which == 38 || options.event.which == 37 ){ // si es abajo o izquierda
             
                                                      binds. repint  =  (  binds. repint  <=0 ) ? 0 :binds. repint -=1;   
             
                                    }else{
             
                                                      if( options.event.which == 40 || options.event.which == 39) // arriba o derecha
                                                      {
                   
                                                                        binds. repint +=1;  
                   
                   
                                                      }else{
                   
                                                                        if( options.event.which == 13){
                             
              
                                                                                          binds. repint  ="-3"
                             
                                                                        }
                   
                   
                                                      }
                                    }
      
      
      
                                    return true;
      
                  }
            
                  else{
       
       
                                    return false;
                  
                  }
            
}
      
      
      

return this;
};
 
 
//********************************************************************* get list user * las listas de interes    **************************************	
//********************************************************************* get list user * las listas de interes    **************************************
//********************************************************************* get list user * las listas de interes    **************************************
//********************************************************************* get list user * las listas de interes    **************************************
 
 
 
binds.getInterestList = function(prop){

                  jsonVar  =  getGlobalVars();
              
                  var options = $.extend({ // constuctor
			
                                    id_user                                                      :  jsonVar.user_id_global, // id del usuario para WHERE en SQL
                                    append                                                      : "", // donde inyectamos el STRINGQUERY OPTIONAL 
                                    url                                                                : "class/Interest_list_user/interestlist.php",
                                    type                                                                : "get_intereset_list"
                                   
                  },prop);
	

      
                  DO_AJAX_REQUEST();
 
                  function DO_AJAX_REQUEST(){	 // hacemos la llamda  ajax		
   
                                    $.ajax({
        
     
                 
                                                      type: "POST",
 
                                                      url: options.url+ "?type="+options.type,
                 
                                                      dataType: "json",
                 
                                                      data : {
                                                                       
                                                                        id_data :   options.id_user 
                                                      },
                 
                                                      beforeSend: function(){
                       
                                                      //    $("#showcomentreply").show();                       
                                                      } ,
                 
                                                      success:function(data){
                                                                       
                                                                        //  $("#showcomentreply").hide();         
                                                                        SET_FORMAT_STRING_LIST(data)
                                                                       
                                                      },
                 
                                                      error:     function(){
                                                                        binds.error()
                                                                        } ,
                 
                                                      timeout: 5000
                                    });

                  }
 		
  		 

		 	
  
                  function  SET_FORMAT_STRING_LIST(data){ // formateamos la cadena
 
             
            
                                    if( data.response.length>0){
                  
                  
                                                      jsonVar  =  getGlobalVars();
                  
                                                      $(".response_list").remove();    // quitamos el anterior
                                                      
                                                      $( options.append ).html("");
                                                     
                                                      var  data_found = "";
                                                      
                                                                     $.each(data.response , function (i,item){
                                                     
                                                     
                                                                        data_found = ""; 
                                                     
                                                                        single =  ( item. counts == 1 )  ? "publicacion"  : "publicaciones";
 
                                                                        data_found += ' <div class="UIlist-topic" data="'+item.id_lista+'">';
            
                                                                        //  data_found += " <div   class='UIlist-topic-count' data-id="+item.id_lista+"> "+ item. counts +" "+single +"  </div>";
                                                  
                                                                        data_found += ' <div class="change_image"></div>   <a href="./'+ jsonVar.user_id_global+'-'+item.id_lista+'"><div class="image-list">  </div> </a>   ';     
                                                     
                                                                        data_found += ' <div class="UIlist-topic-name"> <span class="data-name">'+ SUB_STR(18,item.nombre_lista)  + '  </span><div class="statList">          '+ item. counts +' </div></div> ';     
                                                  
                                                                        data_found += "</div>";     
 
                                                                        $( options.append ).append( $( data_found ).delay( i  * 130).fadeTo('slow',1)  );
                                                      });
         
                                    // $( options.append ).html(data_found);
                  
                  
                                    }else{
  
                                                      $(".response_list").remove();    
                  
                                                      var no_data_found = "";
                  
                                                      no_data_found += "<ul class='response_list'>";
      
                                                      no_data_found += " <li>Aun no has creado ninguna lista  <strong>aqui algo para crear lista </strong></li>";
 
                                                      no_data_found += "</ul>";     
               
                                                      $( options.append ).html(no_data_found);
               
                                    }
  
                  }
                  
                  function SUB_STR(length , datastring){
                                    
                               
                                    val =  ( datastring.length >= 18 ) ? "..." :"";
                                    
                                    return  datastring.substr(0,length)+val; 
                                    
                  }
      
 

                  return this;
};
//********************************************************************* create list user * las listas de interes    **************************************	
//********************************************************************* create list user * las listas de interes    **************************************
//********************************************************************* create list user * las listas de interes    **************************************
//********************************************************************* create list user * las listas de interes    **************************************
 

 
binds.createInterestList = function(prop){

                  jsonVar  =  getGlobalVars();
              
                  var options = $.extend({ // constuctor
			
                                    id_user                                                     :  jsonVar.user_id_global, // id del usuario 
                                    url                                                               : "class/Interest_list_user/interestlist.php",
                                    type                                                            : "set_list_int" , // introducir nueva lista 
                                    data                                                            : "" ,
                                    new_id_list                                                : "" ,
                                    success_created_list                            : function(){}
                                   
                                    
              
                  },prop);
	

      
                  DO_AJAX_REQUEST();
                  options. success_created_list();
                  function DO_AJAX_REQUEST(){	 // hacemos la llamda  ajax		
   
                                    $.ajax({
        
     
                 
                                                      type: "POST",
 
                                                      url: options.url+ "?type="+options.type,
                 
                                                      dataType: "json",
                 
                                                      data : {
                                                                       
                                                                        id_user :   options.id_user  , 
                                                                        data : options.data 
                                                      },
                 
                                                      beforeSend: function(){
                       
                                                      //    $("#showcomentreply").show();                       
                                                      } ,
                 
                                                      success:function(data){
                                       
                                                                        options .new_id_list    =  data.response ;
               
                                                                        options.success_created_list();
                                                                             $("#show-loader-box").hide();
                    
                                                      },
                 
                                                      error:    function(){
                                                                        binds.error()
                                                                        },
                 
                                                      timeout: 5000
                                    });

                  }
 		
  		 
 

                  return this;
};

//********************************************************************* inset publication into interest list    **************************************	
//********************************************************************* inset publication into interest list    **************************************
//********************************************************************* inset publication into interest list    **************************************	
//********************************************************************* inset publication into interest list    **************************************
 
binds.insert_publication_into_interest_list  =  function(prop){

 
              
                  var options = $.extend({ // constuctor
			
                                    url                                                                      : "class/Interest_list_user/interestlist.php",
                                    type                                                                    : "insert_into_list" , // introducir nueva lista 
                                    id_post                                                              : "",
                                    id_lista                                                              : "" ,
                                    type_post                                                          : "" ,
                                    check_clone_publication                          : function(){
                                   
         
                                                      $.ajax({
                                                                        type: "POST",
 
                                                                        url: options.url+ "?type=c_c_pb", // check clone publication
                 
                                                                        dataType: "json",
                 
                                                                        data : {
                                                                       
                                                                                          id_post :   options.id_post     ,     
                                                                                          id_lista:   options.id_lista ,     
                                                                                          type_post :   options. type_post
                                                  
                                                                        },
                 
                                                                        beforeSend: function(){
                   
                                                                                          $("#show-loader-box").show();        
                   
                                                                        } ,
                 
                                                                        success:function(data){
                                       
                                                                                          $("#show-loader-box").hide();    
                                                      
                                                      
                                                                                          if( data.response ){
                                                                        
                                                                                                            $(".title").html("La publicacion  ya existe en esta lista ");    
                                                                                                            binds.already_exist_list = true ;
                                                                        
                                                                                          }else{
                                                                                                            DO_AJAX_REQUEST();     
                                                                                                            binds.notify({
                                                                                                                              content : " Se ha guardado tu publicacion "
                                                                                                            });      
                                                                                                            binds.already_exist_list = false;
                                                                                          }
 
                               
                                                                        },
                 
                                                                        error:    function(){
                                                                                          binds.error()
                                                                                          },
                 
                                                                        timeout: 5000
                                                      });

 
                                    }
                  },prop);
 
 
if(  ! binds.force_create_list){        // si no se creo la lista forsozamente entonces  que cheque si existen clones , pero si se creo forsozamente no tiene contenidos entonces no hace                                                                             //mos nada (parte del problema de historia . his.. creating his and appending publication
                                    
                  options.check_clone_publication();
}else{
                                    
                                    
                  DO_AJAX_REQUEST();           
                        
} 
 
         
 
       
 
function DO_AJAX_REQUEST(){	 // hacemos la llamda  ajax		
   
                  $.ajax({
        
     
                 
                                    type: "POST",
 
                                    url: options.url+ "?type="+options.type,
                 
                                    dataType: "json",
                 
                                    data : {
                                                                       
                                                      id_post :   options.id_post     ,     
                                                      id_lista:   options.id_lista ,     
                                                      type_post :   options. type_post
                                                  
                                    },
                 
                                    beforeSend: function(){
                   
                                                      $("#show-loader-box").show();        
                   
                                    } ,
                 
                                    success:function(){
                                       
                                                      $("#show-loader-box").hide();        
                                                              
                                           
                                                      $(".bindsbox").delay(500).fadeOut("slow" , function(){ 
                                                      
                                                                        $(this).remove();
                                                                        $('.block').remove() ;
                                                                        $('body').css({
                                                                                          'overflow' : "visible"
                                                                        }) 
                                                                        $(".tipsy").remove();
                                                      });
                                                      
                                             
                                             
                
                                    },
                 
                                    error:    function(){
                                                      binds.error()
                                                      },
                 
                                    timeout: 5000
                  });

}
 		
  		 
 

return this;
};
 
//********************************************************************* error box binds    **************************************
//********************************************************************* error box binds    **************************************
//********************************************************************* error box binds    **************************************
binds.error = function(prop){
                  
                  
                  var options = $.extend({ // constuctor
			
                                    title                                                          :"Hubo un inconveniente",
                                    content                                                   :  "<storng>Estamos teniendo problemas con el servicio , vuelve a intentarlo por favor , Gracias",
                                    beforeShow                                           : function(){ }
              
                  },prop);
                  
                  
                  options.beforeShow();  // ejecutamos la funcion antes de mostrar el box
                  
                  binds.box({
                                    title: options.title ,
                                    height:"73" , 
                                    top : "39% ", 
                                    content : options.content
                  }) ;  
                  
                  
}

//********************************************************************* notify box binds    **************************************	
//********************************************************************* notify box binds    **************************************
//********************************************************************* notify box binds    **************************************
//********************************************************************* notify box binds    **************************************
binds.notify = function(prop){
                  
                  
                  var options = $.extend({ // constuctor
			
                                    time                                                          : 4,
                                    content                                                   :  "Estamos teniendo problemas con el servicio , vuelve a intentarlo por favor , Gracias",
                                    beforeShow                                           : function(){ } ,
                                    top :                                               $(window).scrollTop() +60 //+  ($(window).height()*.30);
                  },prop);
                  
 
                  showNotiffybox();  // mostramos la notificacion
         
            

                  function showNotiffybox(){

                                     (   ($(".notification_box").length == 0 ? options.top : options.top + (  33 * $(".notification_box").length) )+"px" )


                                    if(  $(".notification_box").length == 6){
                     
                     
                     
                     
                                    }else{
 
                                                      var  structNotify= "";
                               
                                                      structNotify= "<div class='notification_box'>  ";
                                
                                                      structNotify += options.content ;
                               
                                                      structNotify += "</div> ";
                                                   
                                                      $('body').append($(structNotify).css({
                                                                        'display' : 'none' , 
                                                                        "top" :    (      $(".notification_box").length == 0 ? 60 :60 + (  33 * $(".notification_box").length) )+"px"    
                                    
                                                      } ).fadeIn("slow" ).delay( options.time *1000).fadeOut("slow" , function(){ 
                                    
                                    
                                                                        $(this).remove();

                                                      }));
             
                                    }
                  }       
                  
}
//*************************************************  TABS*************************************************************************************
//*************************************************  TABS*************************************************************************************
//*************************************************  TABS*************************************************************************************
//*************************************************  TABS*************************************************************************************

binds.Tabs = function(prop){
                  
                  
                  var options = $.extend({ // constuctor
                                    active                                                 : "", // clase cuando estan activas las tabs
                                    tabs                                                   :  [] ,
                                    success                                            : function(){} ,
                                    before                                               : function(){},
                                    target                                                  :""
                  },prop);
                  
                  // options.before();
                  
                  SET_EVENT_HANDLER_TABS(); // le damos eventos click a todos las tabs
                    
         
                  //   options.success();
 
                  function SET_EVENT_HANDLER_TABS(){
 
                                    $.each( options.tabs , function(i){
 
                                                      $(options.tabs[i].tab).bind("click",function(){ // le damos evento a la tab de CLICK
                                                     
                                        
                                                                        CHECK_BEFORE_SHOW(options.tabs[i].content) // checamos que todos esten ocultos menos el que se quiere ver
                                                                        
                                                                        $(options.tabs[i].content).show(); // mostramos el que se quiere ver
                                                                        $(options.tabs[i].tab).addClass(options.active);
                                                                        options.before();
                                                                        location.hash = '/!/'+$(this).attr("path").substr(2,$(this).attr("path").length);
                                                                        window.history.pushState(options.tabs[i].content, "Titulo",$(this).attr("path").substr(2,$(this).attr("path").length));
                                                      });
          
  
                                    })
 
                                    function    CHECK_BEFORE_SHOW(current_tab_select){
                                             
            
                                                      $.each(options.tabs , function(i){
                              
 
                                                                        if( $(options.tabs[i].content).is(":visible")  &&  options.tabs[i].content != current_tab_select   )     {
                                                         
                                                                                          $(options.tabs[i].content).hide();
                                                                                          $(options.tabs[i].tab).removeClass(options.active)
                                                                        }         
 
                                                      });
 
                                    }
           
                  }
                  
}

function replaceStringUrl(name){
                      
 
                  //     name = name.toLowerCase();
                  //      name =   name.split("-").join("")  ;
                  //      name =   name.split("  ").join(" ")  ;
 
                  return   name.split(" ").join("-");
                 
                     
}
                  
                  
                  
      				  
//************************************************** U P L O A D   I M A G E ****************************************************************************
//************************************************** U P L O A D   I M A G E ****************************************************************************
//************************************************** U P L O A D   I M A G E ****************************************************************************

binds.UploadMedia = function(prop){
      var options = $.extend({
            Type                          : '',
            //idForm                            : '',
            idAppend                      : '',
            phpFileTreatment        : "class/image_verification_Upload.php"
      },prop);
      
      if (options.Type === "Imagen"){
            INSERT_IFRAMEIMAGE_UPLOAD();}
      else{
            INSERT_IFRAMEVIDEO_UPLOAD();
      }
      
      
      function INSERT_IFRAMEIMAGE_UPLOAD(){
            var iframeStr =   '<iframe id="frm_pic" name="iframeUpload" class="frm_upload">';
            $('body').append(iframeStr);
        
            $(prop.idAppend).append("<div id='picLoadContainer'><img id ='image_file' width='210'/></div>");
                        
            $(options.idForm).attr('action',options.phpFileTreatment);  //comprueba si es imagen
            $(options.idForm).attr('target','iframeUpload');            
            $(options.idForm).submit();
      }
      
      function INSERT_IFRAMEVIDEO_UPLOAD(){
            var iframeStr =   '<iframe id="frm_vid" name="iframeUpload" class="frm_upload">';
            $('body').append(iframeStr);
            $(options.idAppend).append("<div id='vidLoadContainer'></div>");

            $(options.idForm).attr('action',options.phpFileTratment);  //comprueba si es imagen
            $(options.idForm).attr('target','iframeUpload');            
            $(options.idForm).submit();
      }
}
