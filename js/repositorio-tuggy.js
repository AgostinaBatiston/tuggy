var usuario_email = [];
var usuario_mensaje = [];

function enviar_datos() {

    var email = document.getElementById("emailContacto").value;
    usuario_email.push(email);
    var mensaje = document.getElementById("mensajeContacto").value;
    usuario_mensaje.push(mensaje);
    console.log("Email: " + email + "   Mensaje: " + mensaje);
}









var datos = {
    "productos": [
        { "nombre": "Alphonse y edward", "precio": 900 },
        { "nombre": "Gollum", "precio": 600 },
        { "nombre": "Llaverito", "precio": 300 },
        { "nombre": "Llavero", "precio": 450 },
        { "nombre": "Llavero perro/a", "precio": 500 },
        { "nombre": "Llavero gato/a", "precio": 450 },
    ]
};


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
    constructor(numero_carro) {
        this.numero_carro = numero_carro;
        this.carro = [];
    }

    agregar_compra = function(Producto) {
        this.carro.push(Producto);
    }
    toString = function() {
        return this.numero_carro;
    }
    getPrecio = function() {
        var suma = 0;
        for (var i = 0; i < this.carro.length; i++) {
            suma = suma + this.carro[i].getPrecioFinal();
        }

        return suma;
    }

}


function agregar() {
    var carro_compra = new Carrito_compra();
    for (var i = 0; i < datos.productos.length; i++) {
        carro_compra.agregar_compra(new Producto(datos.productos[i].nombre, datos.productos[i].precio));
    }
    console.log(carro_compra.getPrecio());

}


function sumar_productos() {

    var parrafo = document.createElement("p");

    document.body.appendChild(parrafo);

    for (var i = 0; i < datos.productos.length; i++) {
        var parrafo = document.createElement("p");
        parrafo.innerHTML = "Articulo: " + datos.productos[i].nombre + " Precio: " + datos.productos[i].precio;
        document.body.appendChild(parrafo);
    }
}