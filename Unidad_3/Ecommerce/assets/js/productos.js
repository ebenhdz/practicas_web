import { router } from "./route.js";

export function buscarProducto(event) {
  event.preventDefault();
  var busqueda = event.target.search.value;
  event.target.reset();
  router.navigate('/search?q=' + busqueda)
}

export async function consultarProducto(busqueda) {
  let productos = await axios
    .get('https://dummyjson.com/products/search?q=' + busqueda)
    .then(function (response) {
      // manejar respuesta exitosa
      return renderProductos(response.data.products)
    })
    .catch(function (error) {
      // manejar error
      console.log(error);
    })
  return productos;
}

function renderProductos(productos) {
  const fragment = document.createDocumentFragment();

  const $sectionProductos = document.createElement('section');
  $sectionProductos.classList.add('productos');

  const $template  = document.querySelector('#template-producto');

  for (const producto of productos) {
    const $clonArticulo = $template.content.cloneNode(true);

    $clonArticulo.querySelector('img').src = producto.thumbnail;

    $clonArticulo.querySelector('.producto-nombre').textContent = producto.title;

    $clonArticulo.querySelector('.producto-descripcion').textContent = producto.description;

    $clonArticulo.querySelector('.producto-precio').textContent = "$ " + producto.price;

    $clonArticulo.querySelector('.btn-add-cart').addEventListener('click', agregarProductoCarrito, producto);

    fragment.appendChild($clonArticulo);
  }

  $sectionProductos.appendChild(fragment);

  return $sectionProductos;
}

function agregarProductoCarrito(producto) {
  console.log(producto)
}
