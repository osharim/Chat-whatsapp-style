<?php
session_start();
	

  $_SESSION["paginacion"] = 0;
  echo json_encode(array('USER' => $_SESSION ));

  ?>
 