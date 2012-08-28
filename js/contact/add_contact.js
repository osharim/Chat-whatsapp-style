jQuery(document).ready(function($) {
	

	$(".add").click(function(){




	 htmlcontent = '<input type="text" class="struct_search new_contact " placeholder="Agrega contacto">';


              binds.box({
                                    title: " Agrega un contacto ejem @usuario ",
                                    height:"101" , 
                                    top : "39% ", 
                                    content : htmlcontent ,

                                     onClose : function(){




                                     }
                  }) ;  

	});

//***************************************************************
// INPUT PARA AGREGAR UN NUEVO CONTACTO 

     
            $(".new_contact").live("keyup", function(event){

               if (event.which == 13) {
                


 $.ajax({


    url : "class/contact/add_contact.php",

    data : { "key" :  $(".new_contact").val() },

    type : "POST",

    dataType : "JSON",

    success : function(data){

      if (  data.response ){ // si existe el usuario



    $(".data_contact").append(Chat.append_into_contact_list(data) );

    binds.box.close();

      }else{ // no existe el usuario
            

            $(".title").html("Lo sentimos este usuario no existe :(");
      



      }

   
   



    }



 });
              


                }
 

            });



});
