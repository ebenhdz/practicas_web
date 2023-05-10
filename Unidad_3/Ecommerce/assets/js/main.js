import getCategorias from "./categorias.js";
import getTotalProductosCarrito from "./carrito.js";
import { buscarProducto } from "./productos.js";

window.addEventListener("DOMContentLoaded", function () {
  getCategorias();
  getTotalProductosCarrito();
  agregarListeners();
  initRouter()
});


function initRouter() {
  const router = new Navigo('/', true);

  window.router = router; // Solamente para testing

  let {href: currentURL, origin: host } = window.location;
  console.log("currentURL", currentURL)
  console.log("host", host)
  let currentPath = currentURL.replace(host, '');
  console.log("currentPath", currentPath)

  router.on('/search', ({ data, params, queryString}) => {
    console.log(data)
    if(params) {
      if(params.q) {
        let busqueda = params.q; // ?q=iphone { q: 'iphone'}
        console.log(params.q); 
      }
    }
  });
  router.on('/categoria/:categoria', ({ data }) => {
    console.log(data); // { categoria: 'xxx'}
  });
  router.on('/about', () => {
    console.log("path about")
    document.querySelector('main').innerHTML = '<h2 style="margin-top: 100px">About<h2>'
  });

  // with the notFound method
  router.notFound(() => {
      document.querySelector('main').innerHTML = '<h2 style="margin-top: 100px">Page not found<h2>'
  });

  router.resolve(currentPath)

  /*
    Cambios:
    router.navigate('') cuando se realize una busqueda
  */
}

function agregarListeners() {
  const $formSearch = document.getElementById("main-search");
  $formSearch.addEventListener("submit", buscarProducto);
}
