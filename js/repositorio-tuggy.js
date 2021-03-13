var lista = document.createElement("div");
lista.classList.add("mi_lista");
document.body.appendChild(lista);

for (var i = 0; i < 10; i++) {
    var producto = document.createElement("p");
    producto.innerHTML = "Producto " + i;
    if (i % 2 == 0) {
        var bold = document.createElement("b");
        bold.appendChild(producto);
        lista.appendChild(bold);
    } else {
        lista.appendChild(producto);
    }


}