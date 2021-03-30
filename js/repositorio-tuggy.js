var datos = [{
    "productos": [
        { "id": 1, "nombre": "Alphonse y edward", "precio": 900 },
        { "id": 2, "nombre": "Gollum", "precio": 650 },
        { "id": 3, "nombre": "Llaverito", "precio": 300 },
        { "id": 4, "nombre": "Llavero", "precio": 450 },
        { "id": 5, "nombre": "Llavero perro/a", "precio": 500 },
        { "id": 6, "nombre": "Llavero gato/a", "precio": 450 },
    ]
}];


class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;

    }
    getPrecioFinal = function() {
        return this.precio;
    }
}


class Carrito_compra {
    constructor() {
        //this.numero_carro = numero_carro;
        this.carro = [];
    }

    agregar_compra = function(Producto) {
        var selectedProduct = datos[0].productos.find((prod) => Producto == prod.id)
        this.carro.push(selectedProduct);
        this.getPrecio()
    }
    toString = function() {
        return this.numero_carro;
    }
    getPrecio = function() {
        var suma = 0;
        for (var i = 0; i < this.carro.length; i++) {
            suma = suma + this.carro[i].precio;
        }
        document.getElementById('precio-total').innerText = "$" + suma
            //return suma;
    }

}

var carro_compra = new Carrito_compra();

// function agregar() {

//     for (var i = 0; i < datos.productos.length; i++) {
//         carro_compra.agregar_compra(new Producto(datos.productos[i].nombre, datos.productos[i].precio));
//     }
//     console.log(carro_compra.getPrecio());

// }

/*
function sumar_productos() {

    var parrafo = document.createElement("p");

    document.body.appendChild(parrafo);

    for (var i = 0; i < datos.productos.length; i++) {
        var parrafo = document.createElement("p");
        parrafo.innerHTML = "Articulo: " + datos.productos[i].nombre + " Precio: " + datos.productos[i].precio;
        document.body.appendChild(parrafo);
    }
}
*/

$('#boton_comprar').click(mostrarAlerta)

function mostrarAlerta() {

    alert('No hiciste ninguna compra');
}