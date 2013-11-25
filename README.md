Chat Whatsapp Stle
===================

El objetivo de esta aplicacion es construir un chat en el cual puedas mantenerte en  contacto con ellos.


TECNICO
=======

Esta aplicacion esta desarrollada con PHP , en la base de datos usa MySQL , en el Front-end utilizamos Javascript , AJAX , 
Jquey .

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





 



## Uso

```
python
import vinepy

vine = vinepy.API(username='email@host.com', password='leinternetz')
user = vine.user
followers = user.followers()
timeline = user.timeline()

```
