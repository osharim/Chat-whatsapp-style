<?php
require_once("../../../class/class.php");
session_start();



if (isset($_POST) && !empty($_POST))  // isset si la var esta definida y si post no esta vacia
{
         
 
 $newSingup = new login();
 $newSingup->sing_up();
         
    
   
}

?>
