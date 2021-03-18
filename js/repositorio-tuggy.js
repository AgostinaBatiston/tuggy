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