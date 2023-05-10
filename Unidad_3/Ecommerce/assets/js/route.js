import {renderCategoria} from './categorias.js'

const route = (event) => {
    //Captura el evento Click del link
    event = event || window.event;
    event.preventDefault();
    //Crear un registro en el historial del navegador
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    404: "<h2>Pagina no encontrada<h2>",
    "/": "",
    "/categoria/smartphones": renderCategoria('smartphones'),
    "/categoria/laptops": renderCategoria('laptops'),
    "/categoria/groceries": renderCategoria('groceries'),
    "/carrito": ""
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const $root = document.getElementById("root")
    route.then($html => {
        $root.textContent = "";
        $root.appendChild($html);
    });
};

window.onpopstate = handleLocation;
//Damos acceso global a nuestra funcion route
window.route = route;

handleLocation();

console.log("hola")