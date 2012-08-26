jQuery(document).ready(function($) {
	

	$(".add").click(function(){




	 htmlcontent = '<input type="text" class="struct_search  " placeholder="Agrega contacto">';


              binds.box({
                                    title: " Agrega un contacto ejem @usuario ",
                                    height:"101" , 
                                    top : "39% ", 
                                    content : htmlcontent ,

                                     onClose : function(){




                                     }
                  }) ;  

	});







});
