import getCategorias from "./categorias.js";
import getTotalProductosCarrito from "./carrito.js";
import { buscarProducto } from "./productos.js";

window.addEventListener("DOMContentLoaded", function () {
  getCategorias();
  getTotalProductosCarrito();
  agregarListeners();
});

function agregarListeners() {
  const $formSearch = document.getElementById("main-search");
  $formSearch.addEventListener("submit", buscarProducto);
}
