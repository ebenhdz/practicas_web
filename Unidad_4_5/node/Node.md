# Node.js 

<section markdown="1">
<aside markdown="1">
## TABLE OF CONTENT
- [Que es node.js](#queesnode)
- [Caracteristicas](#caracteristicas)
- [Conceptos Importantes](#conceptosimportantes)
- [Ventajas de usar node](#ventajasdeusarnode)
- [¿Que no es node?](#quenoesnode)
- [Instalacion](#instalacion)
- [Modulos](#modulosennodejs)
    * [Importar / Exportar] (#importarexportar)
    * [Destructuracion] (#destructuracion)
    * [Modulos principales] (#modulosprincipalesdenodejs)
- [npm](#npm)
    * [Dependencia](#dependencia)
    * [Crear un paquete](#crearunpaqueteconnpm)
    * [Instalar paquetes externos](#instalarpaquetesexternos)
    * [Desinstalar paquete](#desinstalarpaquete)
    * [Instalar version especifica](#instalarversionespecifica)
    * [devDependencies](#devdependencies)
    * [package-lock.json](#packagelockjson)
- [Eventos](#eventos)
- [Modelo Cliente-Servidor](#modeloclienteservidor)
- [Primer Servidor](#primerservidor)
    * [Modulo HTTP](#modulohttp)
- [Routing](#routing)
- [Express](#express)
</aside>

<article markdown="1">
## Que es node?
![](https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg)  

**Entorno de ejecucion** de Javascript orientado a **eventos asincronos**.  

> **Entorno de ejecucion**  
    Entorno (infraestrutura) en el cual se ejecuta un programa o aplicacion.  

> **Evento asincrono**  
    Evento que se ejecuta independientemente del proceso principal de la aplicacion.  

> **Evento sincrono**  
    Evento que se ejecuta como parte del proceso principal de la aplicacion.  

![](https://javascript.espaciolatino.com/imgs/sincrona.png)
![](https://javascript.espaciolatino.com/imgs/asincrono.png)

## Caracteristicas
- Open-source
- Multiplaforma
- Basado en el motor V8 de Google Chrome

## Conceptos Importantes
- **Arquitectura cliente-servidor**  
Modelo en el cual el servidor envia recursos al dispositivo que los solicita(cliente)
![](https://www.aprenderaprogramar.com/images/stories/Cursos/CU012/CU01208F_2_ajax_tutorial.jpg)

- **Desarrollo front-end**  
Area del desarrollo web que se encarga del desarrollo de los componentes que ve el usuario y con los cuales interactua

- **Desarrollo back-end**  
Area del desarrollo web que se encarga del desarrollo de los servidores y las bases de datos.

Cuando el navegador se comunica con el servidor, no necesariamente esos mensajes van estar en un formato que ambos entiendan.Como cuando hablamos con otra persona de otros pais.  
¿Como se logra la comunicacion? a travez de **protocolos**.

> **Protocolo**
Reglas que permiten que dos entidades de una red se comuniquen
    Procolo HTTP - HTTPS

**API**  
**A**pplication **P**rogramming **I**nterface  
Interfaz de programacion de aplicaciones

![](https://appmaster.io/api/_files/PqV7MuNwv89GrZvBd4LNNK/download/)
Es como un tipo de intermediario entre distintos programas.


![](https://blog.finerioconnect.com/wp-content/uploads/2020/04/como-funciona-una-api.jpg)

![](https://juanda.gitbooks.io/phonegap/content/spa/flujo_web_tradicional.png)

[Mas info SPA](https://juanda.gitbooks.io/phonegap/content/spa/arquitectura_de_un_spa.html)  

## Ventajas de usar node  
Nos permite desarrollar aplicaciones **escalables** y de **tiempo real**.

> **Escalable**.  
Su rendimiento se puede adaptar a medida que crece el uso de la aplicacion y recibe mas solicitudes.

> **Aplicacion de tiempo real**.  
Establece una conexion bidireccional y dinamica entre el servidor y el cliente. Analiza los enventos que ocurren y reacciona de forma casi inmediata.

## ¿Que no es node?
- lenguaje de programacion
- framework
- libreria (biblioteca)

## Instalacion

[Pagina oficial](https://nodejs.org/en)

- comprobar instalacion:  
`node --version`

- primer programa en node:  
`node app.js`


## Modulos en Node.js
Funcionalidad organizada en uno o varias archivos Javascript que puede ser reutilizada en un aplicacion.

### Importar / Exportar

#### CommonJS modules
Los **módulos CommonJS** es un standar de uso para implementar modulos en JavaScript del lado del servidor y forma default de trabajar con modulos en Node.js. Node.js también es compatible con el estándar de **módulos ECMAScript** que utilizan los navegadores.

- Exportar  
```
//saludo.js
function saludar(nombre) {
    return `Hola, ${nombre}`;
}

// Modo 1
module.exports.saludar = saludar;

// Modo 2
module.exports = {
    saludar: saludar
}
```

-Importar (un modulo)
Darle accesos a funciones y elementos definidos en otro modulo.  

```
// app.js
const saludo = require('./saludo')

console.log(saludo.saludar('Adrian'))
```
[Documentacion CommonJs](https://nodejs.org/docs/latest-v18.x/api/modules.html)

### Destructuracion
Es una expresion en javascript que permite extraer los valores de arreglos y objectos en variables.

Podemos usarlo al momento de importar modulos.

`const { saludar, saludarHolaMundo} = require('./saludo');`  

[Documentacion destructuracion](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

### Modulos principales de node js
**Modulo built in (core)**
son modulos que ya viene con node y puedes usar sin instalar.
Utiles para realizar comunes
Modulos:
* http
* https
* fs (file system)
* os (operating system)
* path

#### Modulo console
implementa la funcionalidad similar a la consola del navegador

#### Modulo process
Provee info sobre el proceso donde node se esta ejecutando

#### Modulo OS (operating system)

#### Modulo timers (Temporizador)
Contiene funciones que ejecutan codigo luego de cierto periodo.

`setTimeout(funcion, milisegundos, argumentos)`  
    Ejecuta el codigo despues de un numero de milisegundos, 1 seg = 1000 milisegundos  

`setInterval(function, intervalo, argumentos)`  
    Ejecuta el codigo infinitamente con un tiempo de espera en milisegundos 

`setInmediate(funcion, argumentos)`  
    Ejecuta codigo asincrono en la proxima iteracion del ciclo de eventos (lo mas pronto posible)  

#### Modulo fs
File System  
Contiene funciones para trabajar con el sistema de archivos  
Operacion utiles sobre un archivo:  
* leer
* modificar
* copiar
* eliminar
* cambiar nombre

Todos los metodos son asincronos por defecto. No bloquear la ejecucion del programa.
Pero puedes escoger versiones sincronas de estos metodos (sync)  
```
// funcion asincrona
fs.rename()

// funcion sincrona
fs.renameSync()
```

## NPM
Es el gestor de paquetes mas grande del mundo para node. Tambien es una herramienta para linea de comandos.  

> **Paquete**  
  Archivo o directorio descrito por un archivo package.json.
[npm](https://www.npmjs.com/)  



> **Modulo**  
  Cualquier archivo js o directorio dentro de la carpeta node_modules que puede ser importado con require().  
La carpeta debe tener un **package.json** con la propiedad **main**.  
Solo los modulos que tienen un archivo package.json son paquetes.

### Dependecia
Paquete que otro paquete necesita para funcionar.  

### Crear un paquete con npm
`npm init`
`npm init --yes` // Crea package.json con valores por defecto

### Instalar paquetes externos
1. Buscar el paquete en google: npm express
2.  `npm install express | npm i express
    `   

El paquete lo podemos encontrar en el archivo **package.json** en la propiedad **dependencies**

### Desinstalar paquete
`npm uninstall express`

### Instalar version especifica
`npm install express@4.15.1`

> Normalmente no se comparte la carpeta node_modules, el archivo package.json permite instalar todos los paquetes que sean usado, con el comando `npm install`.  

### devDependencies
Algunas dependencias solo las vamos usar mientras estemos desarrollando la aplicacion, no se necesitan para cuando la aplicacion este funcionando en un entorno de produccion.  
¿Como se instalan?  
`npm install express --save-dev`  
`npm install express -D`  

### package-lock.json
Se genera cuando npm modifica el arbol de node_modules o package.json  
Describe el arbol generado para que en futuras instalaciones puedan generar exactamente el mismo arbol.  
De esta forma otros desarrolladores pueden instalar exactamente las mismas dependencias.

## Eventos
Una accion que se realiza en la aplicacion.  

### Emitters (emisores)
Objetos que emiten eventos nombrados y llaman a funciones especificas. Son instancias de **EventEmitter**.  Esos objetos tienen el metodo **.on()** para asociar una funcion al evento.
y cuando se ejecuta la funcion se le denomina **EventHandler**.  

### Modulo Events
nos permite:  
- Definir
- Emitir
- Escuchar  

`Ex: 8`  

#### Promesas
Objeto que representa el eventual resultado (o error) de una operacion asincrona.
```mermaid
  flowchart TB;
      id1[Promesa]-->id2["`**Pendiente**
      (pending)`"];
      id2-->id3["`**Cumplida**
      (fulfilled)`"];
      id2-->id4["`**Rechazada**
      (rejected)`"];
  style id1 fill:#fff,stroke:#000,stroke-width:4px
  style id2 fill:#ffe992,stroke:#ffd20a,stroke-width:4px
  style id3 fill:#b1c078,stroke:#a2c708,stroke-width:4px
  style id4 fill:#d67478,stroke:#f30305,stroke-width:4px
```

Ese objecto se asocia a una callback function.  
**Funcion callback** es una funcion que se pasa a otra funcion como argumento y luego se ejecuta dentro de la funcion externa.  
Las promesas tienen un metodo **.then()**, con el que podemos decidir que ocurre cuando se completa la promesa (exito o error);  
`Ex 9`  
**.catch()**  
Metodo que se ejecuta si la promesa es rechazada.  

**Encadenar promesas y async await**  
`Ex 10`  


## Modelo cliente-servidor

**Cliente**  
El navegador desde el cual se relizan solicitudes a un servidor.

**Servidor**
Programa que se ejecuta en un servidor fisico para ofrecer un servicio al cliente. Envia informacion.  

Tanto el cliente como el servidor conocen el formato que reciben del otro.  
El **protocolo HTTP** define el formato de los mensajes.  

**protocolo**  
Conjunto de reglas que permiten transmitir informacion entre dispositivos de una red.  

### Solicitudes HTTP
Cuando un cliente le pide informacion a un servidor o desencadena un evento en el servidor para realizar un proceso, esta relizando un **request**.

> Request = Solicitud

Solicitud http (request) tiene todos estos elementos:
- Metodos HTTP
- Camino (path)
- Version de http
- Cabeceras (headers)
- Cuerpo (body)

**Headers**
Proveen informacion adicional sobre la solicitud.  

**Metodo HTTP**  
**Verbo o sustantivo**, indica la intencionde la solicitud.
- GET
- POST
- PUT 
- DELETE

**GET**  
Verbo para solicitud un recurso especifico. Por ejemplo un archivo, HTML o una imagen.  
**POST**
Crear un recurso especifico. Ej: Agregar un usuario nuevo a la base de datos.  
**PUT**  
Modificar un recurso especifico. Ej: Hacer un cambio en la bd.  
**DELETE**
Eliminar un recurso.  

**Body**  
Contienen la informacion enviada a procesar en el servidor.  
No se incluye en todas las solicitudes, solo en POST, PUT.

### Respuestas HTTP
Una vez que el cliente envia su solicitud, el servidor la procesa y le envia al que llamamos Response (respuesta).  
Contiene:
- Codigo de estado
- Texto de estado
- Version de http
- Cabeceras (headers)
- Cuerpo (body)

**body**  
Contiene la **informacion** que debe ser enviada desde el servidor hacia el cliente.  

**Codigos de estado de respuesta**  
Es un numero que indica si se ha completado exitosamente, o no, la solicitud http.  
- Respuestas infomartivas (100-199)
- Respuestas satisfactorias (200-299)
- Redirecciones (300-399)
- Errores de los clientes (400-499)
- Errores de los servidores (500-599)

[Documentacion Codigos de estados](https://developer.mozilla.org/es/docs/Web/HTTP/Status)

**Mas comunes**  
- **200 OK**, La respuesta fue exitosa.
- **400 Bad Request**, El servidor no pudo interpretar la solicitud.
- **404 Not Found**, El servidor no pudo encontrar el recurso solicitado.
- **500 Internal Server Error**, El servidor se encontro con una situacion que no sabe como manejar.  

## Primer servidor
### Modulo http

Este modulo permite transmitir informacion con el protocolo HTTP.

Cuando iniciemos el servidor, estara a la escucha de las solicitudes del cliente y para eso necesitamos un puerto.

**puerto**  
Ubicacion virtual del sistema operativo, en el cual se puede acceder una aplicacion o proceso especifico que se este ejecutando en ese puerto.

`const http = require('http');`  
`Ex 11` 

#### Estructura de una url
**URL**  
Direccion de un recurso en la web  

**https://www.tecsanpedro.edu.mx/sistemas**


| Definicion  | Parte URL |
| -------- | ------ |
| protocolo | https://  |
| subdominio | www |
| dominio | tecsanpedro |
| dominio de nivel superior |edu.mx |
| camino (path) | sistemas |


**subdominio**  
Informacion adicional agregada al inicio del dominio.  
Permite organizar y separar la informacion para distintos propositos.

**dominio**  
Refencia unica a un sitio web en internet.

**camino (path)**  
Archivo o directorio en el servidor web. Puede tener parametros para personlizarlos y forman parte de la URL. Ej: /usuarios/14

**parametros query**  
https://www.fedex.com/fedextrack/**?trknbr=396940489134**  
Son usados para obtener contenido dinamico, por ejemplo, filtrar una lista de datos. Se definen por medio de una clave - valor. Podemos definir varios parametros, separandolos por el simbolo **&**  

google.com/search?q=mermaid&sclient=gws-wiz  

Usualmente usamos estos parametros, para filtrar en las solicitudes **GET** (para obtener recursos especificos)

### Modulo URL

`Ex 12`

## Routing

Manejar las solicitudes del cliente en base a ciertos criterios.

Route = Ruta  

Criterios para la ruta:
- Metodo (Get, post, ...)
- Path

[JSON Formatter](https://chrome.google.com/webstore/search/json)
`Ex 13`  

### Nodemon
Herramienta que reinicia la aplicacion de nodejs cuando detecta algun cambio en los archivos.  

Instalacion  
`npm install -g nodemon`  
Se recomienda instalarlo de manera global para que este disponible el cualquier lado, y no solo para un proyecto especifico.  

Ejecutarlo:  
`nodemon app.js`  


## Express
Es el framework mas popular de Node.js  

[Express en npm](https://www.npmjs.com/package/express)  

Caracteristicas:  
- Routing
- Enfocado en alto rendimiento
- Nos permite desarollar aplicaciones de Node.js mas rapido y codigo mas conciso.
- unopinionated (no dogmatico)

> No dogmatico. Puedes insertar casi cualquier middleware compatible que te guste dentro de la cadena de manejo de la petición, en casi cualquier orden que te apetezca. Puedes estructurar la app en un fichero o múltiples ficheros y usar cualquier estructura de directorios.  

En comparación con otros frameworks como NestJS o AdonisJs, Express no se basa en ninguna estructura o formato. No impone ninguna opinión sobre cómo diseñar los archivos y qué parte de la lógica debería residir en algún lugar específico.

Por ejemplo, si has trabajado con Laravel en PHP, esencialmente toma decisiones sobre dónde colocar los controladores, cómo funcionarán las cosas o qué ORM usar de manera predeterminada.

Express permite al usuario decidir la estructura y el diseño del proyecto. Esto puede ser una espada de doble filo, porque no tener opiniones proporciona flexibilidad, pero si se usa incorrectamente, puede conducir a un desorden de organizacion.

### Conceptos basicos

**CRUD - ABC**   
Operacione que podemos realizar con una base de datos.

* Create (crear)    -> POST
* Read  (leer)      -> GET
* Update (Actualizar) -> PUT
* Delete (eliminar) - DELETE

ABC
> Altas, Bajas, Cambios

**REST**  
Estilo de arquitectura de software para sistemas hipermedia distribuidos como la www.  

**R**epresentational **S**tate **T**ransfer  

**Restful API**  
Es una API basada en REST  

[Mas informacion sobre arquitectura REST](https://medium.com/@diego.coder/introducci%C3%B3n-a-las-apis-rest-6b3ad900acc9)  

**Middleware**
![](https://miro.medium.com/v2/resize:fit:1358/format:webp/1*4nJJgPOnlJwD6s-7ygqgTg.jpeg)

Es una función que se puede ejecutar antes o después del manejo de una ruta. Esta función tiene acceso al objeto Request, Response y la función next().

Las funciones middleware suelen ser utilizadas como mecanismo para verificar niveles de acceso antes de entrar en una ruta, manejo de errores, validación de datos, etc.
</article>
</section>