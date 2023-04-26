
export default function getCategorias() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           console.log(xhttp.responseText);
        }
    };

    xhttp.open("GET", "https://dummyjson.com/products/categories", true);

    xhttp.send();
}