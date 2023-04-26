//import aboutPage from './pages/about.html';

const route = (event) => {
    //Captura el evento Click del link
    event = event || window.event;
    event.preventDefault();
    //Crear un registro en el historial del navegador
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    404: "/pages/404.html",
    "/": "/pages/index.html",
    "/about": document.getElementsByTagName("link")[0].import,
    "/lorem": "/pages/lorem.html"
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    console.log(route);
    if(path == "/about") var html = route;
    else var html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
//Damos acceso global a nuestra funcion route
window.route = route;

if ("import" in document.createElement("link")) {
    // HTML5 Imports are supported.
    console.log("soportado");
  }
  else console.log("no sopora");

//handleLocation();