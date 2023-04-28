
export default function getCategorias() {
    var xhttp = new XMLHttpRequest();

    xhttp.onload = function() {
        if (this.status == 200) { // Operacion correcta
            var jsonResponse = JSON.parse(xhttp.responseText);
           crearCategorias(jsonResponse);
        }
    }
    
    xhttp.onerror = function() {
        console.log("Ocurrio un error")
    };

    xhttp.open("GET", "https://dummyjson.com/products/categories", true);

    xhttp.send();
}

function crearCategorias(lista) {
    var $fragment = document.createDocumentFragment();

    var $lista = document.getElementById("menu-categorias");

    for(const categoria of lista) {
        var $li = document.createElement("li");
        $li.classList.add('main-nav__submenu-item');

        var $link = document.createElement("a");
        $link.textContent = categoria;

        $li.appendChild($link);
        $fragment.appendChild($li);
    }

    $lista.appendChild($fragment);
}