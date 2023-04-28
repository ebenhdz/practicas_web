import getCategorias from './categorias.js';
import getTotalProductosCarrito from './carrito.js';

window.addEventListener('DOMContentLoaded', function(){
    getCategorias();
    getTotalProductosCarrito();
});