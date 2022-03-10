# API-NODEJS-MYSQL-VILLAMAR
 Api simple desarrollada en node js y express
En esta ocasión crearemos una API-NODEJS-MYSQL-VILLAMAR, para poder utilizar en nuestros proyectos de React JS u otro framework.
Utilizaré en mi caso un servidor de desarrollo local como Xampp para la base de datos así como también el editor de texto Visual Studio Code

1.- Crearemos una carpeta en este caso API-NODEJS-MYSQL-VILLAMAR.
2.- Añadiremos la carpeta creada a Visual Studio Code.
3.- Luego abriremos la carpeta en la vista del terminal
4.- Una vez abierta procederemos a ejecutar el comando 

npm init -y

5.- Crearemos un archivo llamado server.js
6.- Ejecutaremos el comando 

npm install express

7.- Ejecutaremos el siguiente comando 

npm i nodemon --save-dev

8.- Una  vez realizado modificaremos el archivo

package.json en scripts añadiremos la siguiente propiedad
 
"start":"nodemon server.js"

Donde server.js es nuestro archivo de arranque de la misma forma modificaremos la propiedad main cambiando el archivo index por server.js

"main":"server.js"

10.- Ahora ejecutaremos el servidor con el comando 

npm run start

11.- Ahora ejecutaremos el comando 

npm i mysql express-myconnection

12. Crearemos un archivo llamado rutas en el cual colocaremos las acciones de la api y referenciaremos a traves del archivo principal servidor.js

13. Las solicitudes http las haremos a través de la extensión de visual studio code Rest Client