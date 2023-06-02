# Express

<section markdown="1">
<aside markdown="1">
## TABLE OF CONTENTS
- [Express](#express)
- [Caracteristicas](#caracteristicas)
- [Conceptos basicos](#conceptosbasicos)
- [Modulos](#modulosennodejs)
    * [Importar / Exportar] (#importarexportar)
    * [Destructuracion] (#destructuracion)
    * [Modulos principales] (#modulosprincipalesdenodejs)
- [Express](#express)
</aside>

<article markdown="1">
Es el framework mas popular de Node.js  

[Express en npm](https://www.npmjs.com/package/express)  

## Caracteristicas:  
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

## Iniciar proyecto
```
npm init
npm i express
```
## Documentacion
[Doc Oficial](https://expressjs.com/es/api.html)

## Tipos de respuesta
* texto `res.send()`
* estados `res.sendStatus()`
* json `res.json()`
* archivos `res.sendFile()`

## Trabajar con form
`app.use(express.urlencoded({extended: false }))`  

## Request params
```
app.get('/usuario/:id', (req, res) => { 
    let idUsuario = req.params.id;
})

app.get('/ventas/:year/:month', (req, res) => { 
    let year = req.params.year;
    let month = req.params.month;
})

app.get('/ventas/:year/:month', (req, res) => { 
    let {year, month} = req.params;
})
```

## Query Params
```
https://rickandmortyapi.com/api/character?page=2

app.get('/api/character', (req, res) => { 
    let page = req.query.page;
})
```

## Middleware
```
// Middlewa que verifica si el usuario es un administrador.
function isAdmin(req, res, next) {
  if (req.body.isAdmin) {
    next();
  } else {
    res.status(403).send(`Sorry but you are not an admin and you do not have access to route ${req.url}`);
  }
}

// Se agrega el middleware en la aplicación.
app.use(isAdmin);
```

## Servir contenido estatico
`app.use(express.static('./public))`

## EJS
[Documentacion en NPM](https://www.npmjs.com/package/ejs)  
[Documentacion Pagina oficial](https://ejs.co/)

```
Ex: 4

npm in ejs

require('ejs')

1. Crear archivo 'views/index.ejs'
2. Agregar Configuracion

// Config
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

```
** Layouts ** 
```
<%- include('header') -%>
<h1>
  Title
</h1>
<p>
  My page
</p>
<%- include('footer') -%>
```

### Scriptlet
```
<% if (user) { %>
  <h2><%= user.name %></h2>
<% } %>

<ul>
  <% users.forEach(function(user){ %>
    <%- include('user/show', {user: user}); %>
  <% }); %>
</ul>
```

### Otros motores de plantillas
* Handlebars
* pug (antes Jade)

### Base de datos
Conectar bases de datos a las aplicaciones Express se consigue simplemente cargando el controlador (driver) de Node.js adecuado para la base de datos en la aplicación.  

Ejemplos:  
- [Cassandra](https://expressjs.com/es/guide/database-integration.html#cassandra)  
- [MySQL](https://expressjs.com/es/guide/database-integration.html#mysql)  
- [MongoDB](https://expressjs.com/es/guide/database-integration.html#mongo)  
- [Oracle](https://expressjs.com/es/guide/database-integration.html#oracle)  
- [PostgreSQL](https://expressjs.com/es/guide/database-integration.html#postgres)  
- [Redis](https://expressjs.com/es/guide/database-integration.html#redis)  

#### Instalacion del controlador
```shell
npm install mysql2
```
 o  
 ```
npm i mysql2
```
  
(npm documentacion)[https://www.npmjs.com/package/mysql2]


### BD MySQL
Servicio [PlanetScale](https://planetscale.com/) nos permitira tener una bd de MySQL remota, sin la necesidad de instalar nada.

**Registro**  
Tener una cuenta de github [link de Registro](https://auth.planetscale.com/sign-in)   

Crear base de datos **todolist**

Tabla "Usuarios":
| Columna           | Descripción                                  |
|-------------------|----------------------------------------------|
| ID                | Identificador único del usuario              |
| Nombre            | Nombre del usuario                           |
| Correo electrónico | Dirección de correo electrónico del usuario  |
| Contraseña        | Contraseña del usuario para acceder a la aplicación |

Tabla "Listas":
| Columna           | Descripción                                   |
|-------------------|-----------------------------------------------|
| ID                | Identificador único de la lista               |
| ID de Usuario     | Identificador del usuario al que pertenece la lista |
| Nombre            | Nombre de la lista de tareas                  |

Tabla "Tareas":
| Columna                 | Descripción                                  |
|-------------------------|----------------------------------------------|
| ID                      | Identificador único de la tarea              |
| ID de Lista             | Identificador de la lista a la que pertenece la tarea |
| Título                  | Título o nombre de la tarea                  |
| Descripción             | Descripción detallada de la tarea            |
| Fecha de Vencimiento    | Fecha límite para completar la tarea         |
| Completada              | Indicador booleano que indica si la tarea ha sido completada o no |

```
Ex: 5
- Crear archivo bd.js

- importar paquete complatible con promesas
const mysql = require('mysql2/promise')

- crear conexion
// create the connection to database
const connection = mysql.createConnection({
  host: 'URI',
  user: 'root',
  password: '',
  database: 'test',
  ssl: {
    rejectUnauthorized: false
  }
});

const result = await connection.query(SELECT "Hellow World" as Resultado)
console.log(result)

### Cliente mysql
(Descarga)[https://www.mysql.com/products/workbench/]
(Servidor)[https://dev.mysql.com/downloads/mysql/]


## Cors
El uso compartido de recursos entre orígenes (CORS) es un mecanismo para integrar aplicaciones. CORS define una forma con la que las aplicaciones web clientes cargadas en un dominio pueden interactuar con los recursos de un dominio distinto. Esto resulta útil porque las aplicaciones complejas suelen hacer referencia a API y recursos de terceros en el código del cliente. Por ejemplo, la aplicación puede utilizar su navegador para extraer videos de la API de una plataforma de video, utilizar fuentes de una biblioteca pública de fuentes o mostrar datos meteorológicos de una base de datos meteorológica nacional. CORS permite que el navegador del cliente compruebe con los servidores de terceros si la solicitud está autorizada antes de realizar cualquier transferencia de datos.

En el pasado, cuando las tecnologías de Internet aún eran nuevas, se producían problemas de falsificación de solicitudes entre sitios (CSRF). Estos problemas enviaban solicitudes de cliente falsas desde el navegador de la víctima a otra aplicación.

Para usar cors en node podemos hacer uso del paquete cors.

**Instalacion**  

```
npm install cors
```
```
app.use(cors());
```
[Documentacion](https://expressjs.com/en/resources/middleware/cors.html)

## ENV

El uso de **variables de entorno**, o environment, en las aplicaciones web es importante para la separación del código por responsabilidades: no debemos mezclar el código de la aplicación con los valores de configuración.

Las variables de configuración cambiarán generalmente según el entorno de ejecución, esto permitira que el codigo siga funcionando sin hacer modificaciones, y tener almacenadas la configuracion propia de cada entorno (local para desarrollo, remoto para produccion).

Los archivos **.env** se pueden considerar un estándar para el almacenamiento de variables de entorno.

La sintaxis de los .env contiene pares clave (nombre de variable) y valor, separados por un carácter "=". Cada variable en una línea.

Ejemplo:
```console
MODE="development"
HOST="local.desarrolloweb.com"
```
> Los nombre de las variables se suelen poner en mayusculas por convencion.

El archivo .env generalmente lo colocarás en la raíz de tu proyecto, en un archivo sin nombre.

> Otra cosa habitual es que los archivos .env no se compartan atravez del repositorio. Por ejemplo, si usas Git tendrías que poner los archivos .env dentro del **gitignore**.

### Paquete dotenv

[Documentacion package dotenv](https://www.npmjs.com/package/dotenv)  

Este paquete nos permitira leer archivos .env

#### Instalacion
```
npm install dotenv
```

#### Leer archivo .env

Importamos el paquete y lo configuramos. Ahora en `process.env` tiene las llaves y claves definidas en el `.env``

```
require('dotenv').config()

...
process.env.HOST
```
</article>
</section>