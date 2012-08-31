<?php 

// ARCHIVO QUE CONTEIEN MODULOS DE 
// VALIDACION
// MANEJO DE HORAS Y FECHAS
 

	class SETTING_DATE{


 

	public function getTime($timestamp) {

 

		$timeAgo = "";
		$days = floor($timestamp / (60 * 60 * 24));
		$remainder = $timestamp % (60 * 60 * 24);
		$hours = floor($remainder / (60 * 60));
		$remainder = $remainder % (60 * 60);
		$minutes = floor($remainder / 60);
		$seconds = $remainder % 60;

		if ($days > 0) {



			$mexico = 21600; // mexico utc-6 hrs 
			$test = $timestamp - $mexico;
			$Numerodia = date("j", $test);
			$dia = date(" N ", $test);
			$mes = date(" n ", $test);
			$hora = date("g:i a ", $test);

			switch ($dia) {

				case 1: {
						$dia = "lunes";
					}break;
				case 2: {
						$dia = "Martes";
					}break;
				case 3: {
						$dia = "Miercoles";
					}break;
				case 4: {
						$dia = "Jueves";
					}break;
				case 5: {
						$dia = "Viernes";
					}break;
				case 6: {
						$dia = "Sabado";
					}break;
				case 7: {
						$dia = "Domingo";
					}break;
			}


			switch ($mes) {

				case 1: {
						$mes = "Enero";
					}break;
				case 2: {
						$mes = "Febrero";
					}break;
				case 3: {
						$mes = "Marzo";
					}break;
				case 4: {
						$mes = "Abril";
					}break;
				case 5: {
						$mes = "Mayo";
					}break;
				case 6: {
						$mes = "Junio";
					}break;
				case 7: {
						$mes = "Julio";
					}break;
				case 8: {
						$mes = "Agosto";
					}break;
				case 9: {
						$mes = "Septiembre";
					}break;
				case 10: {
						$mes = "Octubre";
					}break;
				case 11: {
						$mes = "Nomviembre";
					}break;
				case 12: {
						$mes = "Diciembre";
					}break;
			}




			//   $timeAgo = " El  ".$dia."  ".$Numerodia."  de ". $mes. " a las ".$hora;  con dia

			$timeAgo = $Numerodia . "  de " . $mes . " a las " . $hora; // sin dia
		} else
		if ($days == 0 && $hours == 0 && $minutes == 0) {

			if ($seconds == 1) {
				$timeAgo = "hace " . $seconds . " segundo";
			} else {

				$timeAgo = "hace " . $seconds . " segundos ";
			}
		} else
		if ($hours) {

			if ($hours < 2) {

				$timeAgo = "hace " . $hours . ' hora';
			} else {

				$timeAgo = "hace " . $hours . ' horas';
			}
		} else
		if ($days == 0 && $hours == 0) {

			if ($minutes == 1) {

				$timeAgo = "hace " . $minutes . ' minuto';
			} else {

				$timeAgo = "hace " . $minutes . ' minutos';
			}
		}

		return $timeAgo;
	}















	}





 ?>