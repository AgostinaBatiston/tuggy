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
        { "nombre": "Alphonse y edward", "precio": 1000, "descuento": 10 },
        { "nombre": "Pidgeotto", "precio": 800, "descuento": 10 },
        { "nombre": "Llaverito", "precio": 450, "descuento": 10 },
        { "nombre": "Llavero", "precio": 550, "descuento": 10 },
        { "nombre": "Llavero perro/a", "precio": 600, "descuento": 10 },
        { "nombre": "Llavero gato/a", "precio": 550, "descuento": 10 },
    ]
};




class Producto {
    constructor(nombre, precio, descuento) {
        this.nombre = nombre;
        this.precio = precio;
        this.descuento = descuento;
    }
    getPrecioFinal = function() {
        return this.precio - this.precio * (this.descuento / 100);
    }
}


class Carrito_compra {
    constructor(numero_carro) {
        this.numero_carro = numero_carro;
        this.carro = [];
    }

    agregar_compra = function(producto) {
        this.carro.push(producto);
    }
    toString = function() {
        return this.numero_carro;
    }
    getPrecio = function() {
        var suma = 0;
        for (var i = 0; i < this.carro.lenght; i++) {
            suma = suma + this.carro[i].getPrecioFinal();
        }

        return suma;
    }

}


function agregar() {
    var carro_compra = new Carrito_compra(1);
    for (var i = 0; i < datos.productos.length; i++) {
        carro_compra.agregar_compra(new Producto(datos.productos[i].nombre, datos.productos[i].precio, datos.productos[i].descuento));
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