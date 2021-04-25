/*
$.getJSON("data/productos.json", function(datos, estado) {
    for (let producto of datos) {
        $("#contenidoGenerado").append(crearComponente(producto));
    }
})


//  FUNCION QUE AGREGA UN PRODUCTO
function crearComponente(producto) {
    return `<div class="column column-25">
                <div class='container'>
                    <div class='row'> 
                        <div class='productoTienda'>
                            <h3 class='Titulo_producto'> ${producto.producto} </h3>
                            <img src= ${producto.imagen} class='seccion__imagen'></img>
                            <h4> ${producto.precio} </h4>
                            <button class='btn btn-success ml-auto botonCarrito' id='${producto.id}'>Agregar al carrito</button>
                        </div>
                    </div>
                </div>
            </div>`;
}

*/