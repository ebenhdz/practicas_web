export default function getCategorias() {
  var xhttp = new XMLHttpRequest();

  xhttp.onload = function () {
    if (this.status == 200) {
      // Operacion correcta
      var jsonResponse = JSON.parse(xhttp.responseText);
      crearCategorias(jsonResponse);
    }
  };

  xhttp.onerror = function () {
    console.log("Ocurrio un error");
  };

  xhttp.open("GET", "https://dummyjson.com/products/categories", true);

  xhttp.send();
}

function crearCategorias(lista) {
  var $fragment = document.createDocumentFragment();

  var $lista = document.getElementById("menu-categorias");

  for (const categoria of lista) {
    var $li = document.createElement("li");
    $li.classList.add("main-nav__submenu-item");

    var $link = document.createElement("a");
    $link.textContent = categoria;
    $link.setAttribute("href", "/categoria/" + categoria)
    $link.setAttribute("data-navigo", "")

    /*$link.addEventListener('click', function (event) {
      route(event)
    })}*/

    $li.appendChild($link);
    $fragment.appendChild($li);
  }

  $lista.appendChild($fragment);
}

export async function renderCategoria(categoria) {
  let $productos = await fetch("https://dummyjson.com/products/category/" + categoria)
    .then((res) => res.json())
    .then((res) => templateProductos(res.products));

  const $sectionProductos = document.createElement('section');
  $sectionProductos.classList.add('productos');

  $sectionProductos.appendChild($productos);

  return $sectionProductos;
}

function templateProductos(productos) {
  const fragment = document.createDocumentFragment();
  const $template = document.querySelector("#template-producto");

  for (const producto of productos) {
    const $clonArticulo = $template.content.cloneNode(true);

    $clonArticulo.querySelector("img").src = producto.thumbnail;

    $clonArticulo.querySelector(".producto-nombre").textContent =
      producto.title;

    $clonArticulo.querySelector(".producto-descripcion").textContent =
      producto.description;

    $clonArticulo.querySelector(".producto-precio").textContent =
      "$ " + producto.price;

    $clonArticulo
      .querySelector(".btn-add-cart")
      .addEventListener("click", agregarProductoCarrito, producto);

    fragment.appendChild($clonArticulo);
  }

  return fragment;
}

function agregarProductoCarrito(producto) {
  console.log("Agregado al carrito")
}