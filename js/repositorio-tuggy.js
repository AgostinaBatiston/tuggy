/*
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
*/



class Producto {
    constructor(datos) {
        this.id = parseInt(datos.id);
        this.producto = datos.producto;
        this.precio = parseInt(datos.precio);
        this.cantidad = 1;

    }
    descuento(resta) {
        this.precio -= resta;
    }

    sumarCantidad() {
        this.cantidad++;
    }
}



/*
class Carrito_compra {
    constructor() {
        //this.numero_carro = numero_carro;
        this.carro = [];
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

    agregar_compra = function(Producto) {
        var selectedProduct = datos[0].productos.find((prod) => Producto == prod.id)
        this.carro.push(selectedProduct);
        this.getPrecio()
    }
    toString = function() {
        return this.numero_carro;
    }
   

}

var carro_compra = new Carrito_compra();

*/


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


let productosSeleccionados = [];
const PREFIJO = "productoID";

let contenedor_productos = document.getElementById("contenidoGenerado");

for (let dato of DATOS) {
    crear_elemento(dato);
}

asociarEventos();




function seleccionarProducto(evento) {

    let buscarProducto = productosSeleccionados.find(elemento => elemento.id == evento.target.id);
    if (buscarProducto == undefined) {
        let productoSeleccionado = DATOS.find(elemento => elemento.id == evento.target.id);
        let nuevoProducto = new Producto(productoSeleccionado);
        nuevoProducto.descuento(50);
        productosSeleccionados.push(nuevoProducto);
    } else {
        buscarProducto.sumarCantidad;
    }

    //console.log(productoSeleccionado);
    console.log(productosSeleccionados);
    agregarCarrito(productosSeleccionados);
}


function agregarCarrito(listado) {
    let padre = document.getElementById("carrito");
    let html = '';
    for (const objeto of listado) {
        html += `   <div class='container'>
                        <div class='row'>
                            <p>${objeto.producto}      ----  ${objeto.precio}</p>
                        </div>
                    </div>
        `;
    }
    padre.innerHTML = html;
}

function asociarEventos() {
    let botones = document.getElementsByClassName("botonCarrito");
    for (const boton of botones) {
        boton.onclick = seleccionarProducto;
    }

}

function crear_elemento(dato) {
    let nuevoElemento = document.createElement("div");
    nuevoElemento.id = PREFIJO + dato.id;
    nuevoElemento.innerHTML = ` <div class='container'>
                                    <div class='row'> 
                                        <div class='productoTienda'>
                                            <h3 class='Titulo_producto'> ${dato.producto} </h3>
                                            <img src= ${dato.imagen} class='seccion__imagen'></img>
                                            <h4> ${dato.precio} </h4>
                                            <button class='btn btn-success ml-auto botonCarrito' id='${dato.id}'>Agregar al carrito</button>
                                        </div>
                                    </div>
                                </div>`


    contenedor_productos.appendChild(nuevoElemento);
}








/*
$('#boton_comprar').click(mostrarAlerta)

function mostrarAlerta() {

    alert('No hiciste ninguna compra');
}


$(".alerta_compra").hide().parent();
$(".boton_producto").click(function() {
    $(".alerta_compra").show();
})
*/