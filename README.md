Chat application
================

* Primero que nada el DEMO: [bindsme.com](http://bindsme.com/)
* usuario: pulpo
* password: nf9ckpg

para inciar sesion teclea "Enter" , esta funcion reemplaza el boton iniciar sesion :)

El objetivo de esta aplicacion es construir un chat en el cual puedas mantenerte en  contacto con las personas que te interesan.

Caracteristicas Faltantes
=========================

Compartir Imagenes
Compartir Videos


Tecnico
=======

Aplicacion desarrollada en PHP , mysql , Javascript , JQuery  , AJAX , CSS3 , HTML5 , y polling ( tecnica de actualizacion de datos)

IMPORTANTE
=========

Esta aplicacion no esta preparada para modo de produccion, es decir , aun no ha sido optimizada y solo es para aprendizaje


POLLING
=======

Polling es una tecnica en la cual hacemos peticion cada intervalo de tiempo mediante HTTP ( GET/POST ) a un determinado endpoint que nos
respondera con resultados que queramos obtener.

Es decir , hay un objecto AJAX haciendo peticion al servidor cada 1000 MS ( 1 seg) y en espera de una nueva respuesta o 
nuevos datos.


SIMPLIFICADO
============
Un usuario manda mensaje a otro usuario , necesitamos que el chat del otro usuario se actualize en tiempo real , y que 
aparesca si tiene notificaciones. 

Esto en un entorno de produccion es mala idea , mientras haya N conversaciones se haran N peticiones cada X Milisegundos,
eso podria sobresaturar el servidor.

Para un entorno de desarollo ,puedes checar servidores asincronos ,Tornado con python o Node.js con javascript , que este ultimo
mantiene un canal bi-direccional abierto usando Websokets y puede transferir datos en tiempo real.

 

## Instalacion

Obtener el proyecto mediante Git en la carpeta htdocs o www , dependiendo la ruta 
que tiene establecido tu servidor PHP.

```
git clone git@github.com:omarhernandez/Chat-whatsapp-style.git

```

#Instalar Base de datos

```
Importar el archivo bindsme(1).sql ,se encuentra en el directorio principal de la aplicacion

```

#Configuracion de la conexion a la base de datos

Editar en la Conexion de la base de datos que se encuentra en la carpeta class/class.php la linea

```
 user_db = NOMBRE DE BASE DE DATOS
 password = CLAVE DE LA BASE DE DATOS

 $conexion = mysql_connect("localhost", "user_db", "password") or
 
```
 






