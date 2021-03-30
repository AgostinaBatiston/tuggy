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

$('#boton_comprar').click(mostrarAlerta)

function mostrarAlerta() {

    alert('No hiciste ninguna compra');
}


$(".alerta_compra").hide().parent();
$(".boton_producto").click(function() {
    $(".alerta_compra").show();
})

var AgregarBotonesCarrito = document.querySelectorAll(".boton_producto");
AgregarBotonesCarrito.forEach((agregarCarrito) => {
    agregarCarrito.addEventListener('click', clickCarrito);
});

var contenedorDeProductos = document.querySelector('.ContenedorDeProductos');



function clickCarrito(event) {
    var boton = event.target;
    var productoTienda = boton.closest('.productoTienda');

    var producto_titulo = productoTienda.querySelector('.producto_titulo').textContent;
    var precio_producto = productoTienda.querySelector('.precio_producto').textContent;
    var imagenTienda = productoTienda.querySelector('.imagenTienda').src;
    //console.log(precio_producto, producto_titulo, imagenTienda);

    agregarProductosAlCarrito(producto_titulo, precio_producto, imagenTienda);
}

function agregarProductosAlCarrito(producto_titulo, precio_producto, imagenTienda) {
    var div_carrito = document.createElement('div');
    var contenidoCarrito = `
    <div class="row div_carrito">
          <div class="col-6">
              <div class="d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                  <img src=${imagenTienda} class="shopping-cart-image">
                  <h6 class="TituloProductoCarrito text-truncate ml-3 mb-0">${producto_titulo}</h6>
              </div>
          </div>
          <div class="col-2">
              <div class=" d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                  <p class="precio_producto mb-0 PrecioProductoCarrito">${precio_producto}</p>
              </div>
          </div>
          <div class="col-4">
              <div
                  class="d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                  <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                      value="1">

              </div>
          </div>
      </div>`;
    div_carrito.innerHTML = contenidoCarrito;
    contenedorDeProductos.append(div_carrito);
}