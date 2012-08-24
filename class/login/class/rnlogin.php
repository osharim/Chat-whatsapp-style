<?php // rnlogin.php

require_once("../../../class/class.php");
session_start();


if (isset($_POST) && !empty($_POST))  
{        
     if(!empty($_POST["user_"]) || !empty( $_POST["pss_"]) ){  
                                   
        
     $initSession = new  login();
     $initSession->session();
 
     }else{
         
          
       echo "wrong";
          
          
    }
 
}
   
 

   
 

 
?>
