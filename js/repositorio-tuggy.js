alert("Bienvenidos a Tuggy peluches! :D");
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

function ordenar(arreglo, criterio) {
    if (criterio == 'a')
        console.log(arreglo.sort(
            function(a, b) {
                if (a.precio > b.precio)
                    return 1;
                if (a.precio < b.precio)
                    return -1;
                return 0;
            }
        ));

    if (criterio == 'd')
        console.log(arreglo.sort(
            function(a, b) {
                if (a.precio > b.precio)
                    return -1;
                if (a.precio < b.precio)
                    return 1;
                return 0;
            }
        ));
}


var producto1 = new miProducto('Prod 1', $800);
var producto2 = new miProducto('Prod 2', $450);


var carrito = new ShoppingCart();



carrito.getAdd(producto1);

carrito.getAdd(producto2);

var arreglo = [producto1, producto2];

ordenar(arreglo, 'd');



carrito.getFullCart();