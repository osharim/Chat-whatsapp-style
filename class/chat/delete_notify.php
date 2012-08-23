<?php 

 include("../class.php");



if( isset($_POST)){



notify::delete_notify($_POST["writter"] , $_POST["reader"]);


}



 

 ?>