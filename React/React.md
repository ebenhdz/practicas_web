# React JS

<section markdown="1">
<aside markdown="1">
## TABLE OF CONTENTS
- [Crear Proyecto](#crearproyecto)
- [JSX](#jsx)
- [Componente](#componente)
    * [Estructura] (#estructura)
    * [Retornar muchas etiquetas] (#retornarvariasetiquetas)
- [Snippets (Atajos)](#snippets)
- [Bucles en JSX](#buclesenjsx)
- [Condicionales en JSX](#condicionalesenjsx)
- [Props](#props)
- [PropTypes](#proptypes)
    * [Tipos Basicos] (#tiposbasicos)
- [Hooks](#hooks)
    * [useState](#usestate)
    * [useEffect](#useeffect)
</aside>

<article markdown="1">
[Documentacion Referencia Español](https://es.react.dev/reference/react)  

## Crear Proyecto
[Guia Vite](https://vitejs.dev/guide/)
```shell
npm create vite@latest
```

Luego nos pedira los siguientes datos:
```console
Project name: (Nombre de su proyecto) Ej: mi-proyecto
Select Framework: React
Select Variant: Javascript
```
Posteriormente ejecutamos lo siguiente:
```shell
cd mi-proyecto
npm install
npm run dev
```

Podemos escoger el framework React y nombre del projecto ejecutando vite en una solo linea.

```shell
npm create vite@latest mi-proyecto -- --template react
```



## JSX
En un principio las aplicaciones web estáticas se dividen en archivos, html para el contenido y javascript para la lógica, sin embargo al pasar el tiempo y con las aplicaciones siendo mas interactivas, javascript empezó a definir el contenido y se puso a cargo del HTML.
Por lo que en React la lógica y el contenido viven en el mismo lugar: **Componentes**. Mantenerlos juntos garantiza la permanencia de la sincronización entre ellos entre modificaciones.

JSX es una extensión de sintaxis para JavaScript que permite escribir marcas similares a HTML dentro de una archivo JavaScript. Pero JSX es un poco mas estricto.

Codigo en JSX
```jsx
const element = (
    <h1 className="greeting">
      Hello, world!
    </h1>
);
```
React transforma el codigo JSX a JavaScript para representar nativamente el html.
```js
const element = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
);
```

## Componente
### Estructura

Creamos primer componente, MiComponente.jsx

> jsx en la extension propia de jsx, puede usar tambien .js
```jsx
// importar modulos de react / dependencias
import React from "react"

// Funcion que define el componente
const MiComponente = () => {
    return <p>Este es mi primer componente </p>;
}

// Exportar la funcion
export default MiComponente 
```


Importamos el modulo en App.js
```js
// importar modulos de react / dependencias
import MiComponente from './MiComponente'

function App() {
    return <MiComponente />
}

export default App;

```

### Retornar varias etiquetas
Debemos encapsular las etiquetas dentro de otra, por ejemplo un div, o usar la etiqueta **Fragment** de React `<> </>`.  
El return para devolver multiples lineas, el codigo debe ser envuelto entre `()`

```jsx
const MiComponente = () => {
    return (
        <>
        <p>Este es mi primer componente </p>
        <p>en React JS </p>
        </>
    );
}
```
Ejemplo lista desordenada.
```jsx
const MiComponente = () => {
    return (
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    );
}
```

### Mostrar datos en componente

Si tenemos datos definidos en variables, para mostrarlos necesitamos usar llaves `{}`, estan nos permiten insertar codigo javascript en el componente. 

```jsx
const MiComponente = () => {
    const listaItems = ['Item 1.0', 'Item 2.0', 'Item 3.0'];
    return (
        <ul>
            <li>{listaItems[0]}</li>
            <li>{listaItems[1]}</li>
            <li>{listaItems[2]}</li>
        </ul>
    );
}
```

## Snippets
Los snippets son basicamente atajos, que escribiendo pocas letras nos permiten generar codigo que usamos constantemente.

imr:
```js
import React from 'react'
```

imp: (import)
```js
import moduleName from 'module'
```
imd:  (import destructured)
```js
import { second } from 'first'
```

clg:
```js
console.log(object)
```

rfc: (react functional component)
```jsx
import React from 'react'

export default function NombreComponente() {
  return (
    <div>NombreComponente</div>
  )
}
```

rfce(react functional component w/ export default at the bottom)
```js
import React from 'react'

function SegundoComponente() {
  return (
    <div>SegundoComponente</div>
  )
}

export default SegundoComponente
```

rafce(react component utilizing an arrow function):
```jsx
import React from 'react'

const SegundoComponente = () => {
  return (
    <div>SegundoComponente</div>
  )
}

export default SegundoComponente
```
rafc:
```jsx
import React from 'react'

export const SegundoComponente = () => {
  return (
    <div>SegundoComponente</div>
  )
}
```

## Bucles en JSX
Para recorrer una lista en JSX se hace uso de la funcion **map** y para que react tenga un buen performance se debe incluir el atributo **key**, tambien llamados **props** en React, en la etiqueta que retorne el map, ej: `<li>`

```jsx
const MiComponente = () => {
    const topLibros = [
        'Cien años de soledad', 
        'El teorema Katherine', 
        'Cincuenta sombras de Grey', 
        'Milena o el fémur más bello del mundo', 
        'Adiós a los padres', 
        'A todos los chicos de los que me enamoré'];
    return (
        <ul>
            {
                topLibros.map((libro, index) => {
                    return <li key={index}>{libro}</li>
                })
            }
        </ul>
    );
}
```

## Condicionales en JSX
Podemos hacer uso del **operador ternario**, recordar usar () si tenemos multiples lineas dentro de {}.

```jsx
const MiComponente = () => {
    const topLibros = [
        'Cien años de soledad', 
        'El teorema Katherine', 
        'Cincuenta sombras de Grey'];
    return (
        <ul>
            {
                topLibros.length > 0 ? (
                    topLibros.map((libro, index) => {
                        return <li key={index}>{libro}</li>
                    })
                ) : <p>No hay libros</p>
            }
        </ul>
    );
}
```

## Props
React usa **props** para pasar datos de un Componente padre a componentes hijos. Pueden verse como los atributos de HTML, pero en los props, podemos pasar cualquier valor de JavaScript, incluidos objetos, funciones.

Los props solo existen en la sintaxis de JSX.
Por ejemplo, className, src, alt, width y height son algunos props que puedes pasar a un `<img>`

Ejemplo, crear un boton y pasar el texto y ancho por props.
```jsx
import React from 'react'

export const Boton = (props) => {
  return (
    <Button className="btn btn-primary" width="{props.size}">{props.texto}<Button/>
  );
}
```

Creando boton en App.js
```jsx
// ...
import Boton from './Boton.jsx'

function App() {
    const textoBoton = "Click Aqui";
    // ...
    <Boton size="50px" texto={textoBoton}/>
}
```

> Recordemos que podemos hacer **destructuring** y asi evitar escribir props. para acceder a cada dato.

```jsx
import React from 'react'

export const Boton = ({size, texto}) => {
  return (
    <Button className="btn btn-primary" width="{size}">{texto}<Button/>
  );
}
```

### Default Props
Podemos dejarle valores default a los props en el destructuring, **variable = valorDefault**.
```jsx
import React from 'react'

export const Boton = ({size = '100px', texto = 'Click Aqui'}) => {
  return (
    <Button className="btn btn-primary" width="{size}">{texto}<Button/>
  );
}
```


## PropTypes
PropTypes son simplemente un mecanismo que asegura que el valor pasado a un prop es del tipo de dato correcto.
Antes del lanzamiento de React 15.5.0, PropTypes estaba disponible en el paquete React, pero ahora tenemos que agregar la biblioteca prop-types en nuestro proyecto.

```shell
npm install prop-types --save
```

Antes de usarlo tendremos que importarlo:
```js
import PropTypes from 'prop-types';
```

A menudo se usan después de que el componente finaliza y comienza con el nombre del componente, como se muestra:

```js
import React from 'react';
import { PropTypes } from "prop-types";
 
const Count = (props) => {
  return (
    <>
      .........
    </>
  )
};
 
Count.propTypes = {
  basicObject: PropTypes.object,
  numbers: PropTypes.objectOf(PropTypes.numbers),
  messages: PropTypes.instanceOf(Message),
  contactList: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
}
export default Count;
```

### Tipos basicos
| Tipo | Clase | Ejemplo |
|--------|-----------------|---------|
| String | PropType.string | `"hello"` |
| Object | PropType.object | `{name: "Rohit"}` |
| Number | PropType.number | `10` |
| Boolean | PropType.bool | `true/false` |
| Function | PropType.func | `const say = {console.log("hello")}` |
| Symbol | PropType.symbol | `Symbol("m")` |

## Eventos 
[Documentacion Eventos mouse](https://es.react.dev/reference/react-dom/components/common#mouseevent-handler)

Los manejadores de eventos recibirán un objeto de evento de React. A veces también se le conoce como un «evento sintético».
```
<button onClick={e => {
  console.log(e); // Objeto de evento de React
}} />
```

Ejemplo Click y Doble click
```jsx
const hasDadoClick = (e, nombre) => {
  alert("Has dado click " + nombre)
}

const hasDadoDobleClick = (e) => {
  alert("Has dado doble click")
}

return (
  <button  onClick={ e => hasDadoClick(e, "Benito") }>Click</button>
  <button  onDoubleClick={ hasDadoDobleClick }>Click</button>
)
```

## Hooks

Los Hooks te permiten usar diferentes funciones de React desde tus componentes.
Los Hooks son funciones que te permiten "enganchar" el estado de React y el ciclo de vida desde componentes de función.
Basicamente son funciones que cuando pasa algo, hacen algo.
React proporciona algunos Hooks incorporados como useState. También puedes crear tus propios Hooks.
`useState`, así como cualquier otra función que empiece con »use», es un Hook.

> Un Hook sólo puedes llamarlo en el nivel superior de tu componente o en tus propios Hooks. No puedes llamarlo dentro de bucles o condiciones.

### useState
Los componentes a menudo necesitan cambiar lo que se muestra en pantalla como resultado de una interacción. Escribir dentro de un formulario debería actualizar el campo de texto, hacer clic en «siguiente» en un carrusel de imágenes debería cambiar la imagen que es mostrada; hacer clic en un botón para comprar un producto debería actualizar el carrito de compras. Para eso, los componentes deben recordar cosas. En React, a este tipo de memoria de los componentes se le conoce como estado.

Para actualizar un componente con datos nuevos, deben pasar las siguientes dos cosas:
1. Conservar los datos entre renderizaciones.
2. Provocar que React renderice el componente con nuevos datos (re-renderizado).

El Hook de useState ofrece dos cosas:
1. Una variable de estado para mantener los datos entre renderizados.
2. Una función que setea el estado para actualizar la variable y provocar que React renderice el componente nuevamente.

 
Para agregar una variable de estado, debemos importar el useState de React al inicio del archivo:
```js
import { useState } from 'react';
```

Luego la variable que queremos actualizar, la pasamos a:
```js
let index = 0;
// la remplazamos por:
const [index, setIndex] = useState(0);
```
`index` es una variable de estado y `setIndex` es la función que setea el estado.

> La convención es nombrar estas dos variables como `const [algo, setAlgo]`.  
  El único argumento para `useState` es el **valor inicial** de su variable de estado. En este ejemplo, el valor inicial de index se establece en `0` con `useState(0)`.

y asi se usaria junto a un evento click
```js
function handleClick() {
  setIndex(index + 1);
}
```

El estado es local para una instancia de un componente en la pantalla. En otras palabras, **si renderizas el mismo componente dos veces, ¡cada copia tendrá un estado completamente aislado!** Cambiar uno de ellos no afectará al otro.


La forma sugerida de actualizar useState es usando la funcion callback que tienen los metodos set. Donde obtenes el estado actual y ese es el que actualizamos.
```
setIndex((currentIndex) => currentIndex + 1);
```

### Lazy initialization
Supon que necesitas inicializar el estado con valor accesiendo a localstorage, eso es una operacion costosa.

```jsx
function PrintUserName = () => {
    const [name, setName] = useState(window.localStorage.getItem('name'))
}
```
Lazy initialization nos permite poner ese codigo en una funcion.

```jsx
function PrintUserName = () => {
    const [name, setName] = useState(() => window.localStorage.getItem('name'))
}
```
Crear una funcion es rapido, incluso si la funcion hace computacion cara. Asi que si pasas una funcion a useState, React solo llama a la funcion cuando necesita inicializar el valor. (Cuando el componente es inicialmente renderizado).  
A esto llamamos "Lazy initialization". Es una optimizacion de rendimiento.

## useRef
Cuando quieres que un componente «recuerde» alguna información, pero no quieres que esa información provoque nuevos renderizados, puedes usar una ref.

```jsx
import { useRef } from 'react';

const ref = useRef(0);
```

`useRef` devuelve un objeto como este:

```js
{ 
  current: 0 // El valor que le pasaste a useRef
}
```
Puedes acceder al valor actual de esa ref a través de la propiedad `ref.current`.

Ejemplo:
```jsx
import { useRef } from 'react';

export default function Counter() {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert('Has hecho clic ' + ref.current + ' veces!');
  }

  return (
    <button onClick={handleClick}>
      ¡Clic aquí!
    </button>
  );
}
```
### Cuando usar refs?
- Almacenar identificadores de timeouts
- Almacenar y manipular elementos del DOM
- Almacenar otros objetos que no son necesarios para calcular el JSX.

El caso de uso más común para una ref es acceder a un elemento del DOM. Por ejemplo, esto es útil cuando quieres enfocar un input programáticamente. Cuando pasas una ref a un atributo `ref` en JSX, así `<div ref={myRef}>`, React colocará el elemento del DOM correspondiente en `myRef.current`. 

## useEffect
useEffect es un Hook de React que te permite sincronizar un componente con un sistema externo.
Por ejemplo, es posible que desees controlar un componente que no sea de React en función a un estado de React.

Los Efectos te permiten ejecutar código después del renderizado para que puedas sincronizar tu componente con un sistema fuera de React.

Los Efectos te permiten especificar efectos secundarios que son causados por el renderizado en sí mismo, en lugar de por un evento particular. Enviar un mensaje en el chat es un evento porque es directamente causado por el usuario haciendo clic en un botón. Sin embargo, establecer una conexión a un servidor es un **Efecto** porque debería suceder sin importar qué interacción causó que el componente apareciera. Los efectos se ejecutan al final de la confirmación, después de que la pantalla se actualice. Este es un buen momento para sincronizar los componentes de React con algún sistema externo (como una red o una biblioteca de terceros).  

Para declarar un efecto en tu componente, importa el Hook useEffect desde React, luego llamalo en el nivel superior de tu componente.

```js
import { useEffect } from 'react';

function MyComponent() {
  useEffect(setup, dependencies?)
  // ...
}
```

### Parametros:
* `setup`: Funcion con la logica de tu Efecto. Tu **función de configuración** también puede devolver opcionalmente una función de limpieza. Después de cada renderizado cuando las dependencias hayan cambiado, React ejecutará primero la **función de limpieza** (si la proporcionaste) con los valores antiguos, y luego ejecutará tu **función de configuración** con los nuevos valores.
* `dependencies` **opcionales**: Lista de todos los valores reactivos referenciados dentro del código de configuración. La lista de dependencias debe tener un número constante de elementos y estar escrita en línea como [dep1, dep2, dep3]. React comparará cada dependencia con su valor anterior utilizando el algoritmo de comparación Object.is. Si no se especifican las dependencias en absoluto, su efecto se volverá a ejecutar después de cada renderizado del componente.

### Pasar un array de dependencias 
Si especificas las dependencias, su Efecto se ejecuta después del renderizado inicial y después de los rerenderizados con las dependencias cambiadas.
```jsx
useEffect(() => {
  // ...
}, [a, b]); // Se ejecuta de nuevo si a o b son diferentes
```

### Pasar un array de dependencias vacío 
Si tu efecto realmente no utiliza ningún valor reactivo, sólo se ejecutará después del renderizado inicial.
```jsx
useEffect(() => {
  // ...
}, []); // No se vuelve a ejecutar (excepto una vez más en el modo de desarrollo)
```
### No pasar ningún array de dependencias 
Si no pasas ninguna matriz de dependencia, tu Efecto se ejecuta después de cada renderizado (y rerenderizado) de tu componente.
```jsx
useEffect(() => {
  // ...
}); // Siempre se vuelve a ejecutar
```


## Material UI

### System Properties
[Doc](https://mui.com/system/properties/)

</article>
</section>