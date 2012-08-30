<?php 
 session_start();
 
 

if (isset($_SESSION['current_user']))
{
     session_destroy();
	        echo  " <script type='text/javascript'>
                  
                window.location='../../index.php';
              
              </script>" ;
}
else die( "You are not logged in");
?>
