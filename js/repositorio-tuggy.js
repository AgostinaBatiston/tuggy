class ShoppingCart {
    constructor() {
        this.cart = [];
    }
    getAdd = function(prod) {
        this.cart.push(prod);
    }
    getFullCart = function() {
        console.log('Tenés ' + this.cart.length + ' productos en el carrito');
        for (var i = 0; i < this.cart.length; i++) {
            console.log(this.cart[i]);
        }
    }
}
class miProducto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

}

var producto1 = new miProducto('Prod 1', 450);
var producto2 = new miProducto('Prod 2', 800);



/*
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


} */


var listaPrecio = [];
var listaArticulos = [];

function agregar() {
    var precio = parseInt(document.getElementById("precio").value);
    listaPrecio.push(precio);

    var articulo = document.getElementById("articulo").value;
    listaArticulos.push(articulo);


    console.log("Articulo: " + articulo + " Precio :" + precio);

}

function sumar_productos() {
    var total = 0;

    for (var i = 0; i < listaPrecio.length; i++) {
        total = total + listaPrecio[i];
    }

    console.log(total);

    var parrafo = document.createElement("p");

    parrafo.innerHTML = "El total es: " + total;

    document.main.appendChild(parrafo);

    for (var i = 0; i < listaPrecio.length; i++) {
        var parrafo = document.createElement("p");
        parrafo.innerHTML = "Articulo: " + listaArticulos[i] + " Precio :" + listaPrecio[i];
        document.body.appendChild(parrafo);
    }
}