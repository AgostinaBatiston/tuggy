(function() {
    function $(selector) {
        return document.querySelector(selector);
    }


    function Carrito() {
        this.catalogo = [
            { id: 'P01', nombre: "Batman y robin", imagen: "batman_robin.jpg", detalles: "Peluches pequeños pintados a mano. Medidas: 12x7cm", precio: 750 },
            { id: 'P02', nombre: "Bts", imagen: "bts.jpg", detalles: "Llaverito de personajes de bts pintados a mano. Medidas: 5x5cm", precio: 250 },
            { id: 'P03', nombre: "Charmander", imagen: "charmander.jpg", detalles: "Peluche pequeño. Medidas: 12x7cm", precio: 400 },
            { id: 'P04', nombre: "Cubone", imagen: "cubone.jpg", detalles: "Peluche pequeño. Medidas: 12x7cm", precio: 400 },
            { id: 'P05', nombre: "Edward y Alphonse", imagen: "EdYAl.jpg", detalles: "Peluches pequeños pintados a mano. Medidas: 12x7cm", precio: 750 },
            { id: 'P06', nombre: "Flash", imagen: "flash.jpg", detalles: "Llavero de personaje pequeño. Medidas: 12x7cm", precio: 430 },
            { id: 'P07', nombre: "Gollum", imagen: "gollum.jpg", detalles: "Peluche mediano. Medidas: 20x13cm", precio: 650 },
            { id: 'P08', nombre: "Harry potter", imagen: "HP.jpg", detalles: "Peluche pequeño. Medidas: 12x7cm", precio: 400 },
            { id: 'P09', nombre: "Iron-man", imagen: "ironman.jpg", detalles: "Peluche pequeño. Medidas: 12x7cm", precio: 400 },
            { id: 'P010', nombre: "Hello Kitty", imagen: "kitty.jpg", detalles: "Peluche pequeño. Medidas: 12x7cm", precio: 400 },
            { id: 'P011', nombre: "Mazinger", imagen: "mazinger.jpg", detalles: "Peluche mediano. Medidas: 20x13cm", precio: 650 },
            { id: 'P012', nombre: "Gato/a", imagen: "oggy.jpg", detalles: "LLaverito de gato/a personalizado. Medidas: 6x6cm", precio: 350 },
            { id: 'P013', nombre: "Perro/a", imagen: "ovejero.jpg", detalles: "LLaverito de perro/a personalizado. Medidas: 6x6cm", precio: 400 },
            { id: 'P014', nombre: "Pidgeotto", imagen: "pidgeotto.jpg", detalles: "Peluche pequeño. Medidas: 12x7cm", precio: 400 },
            { id: 'P015', nombre: "Pokemones", imagen: "pokemones.jpg", detalles: "LLaveritos de pokemones a elección. Medidas: 7x7,50cm", precio: 300 },
            { id: 'P016', nombre: "Rick", imagen: "Rick.jpg", detalles: "Llavero de personaje pequeño. Medidas: 12x7cm", precio: 430 },
            { id: 'P017', nombre: "Spider-man", imagen: "spiderman.jpg", detalles: "Peluche pequeño. Medidas: 12x7cm", precio: 400 },
            { id: 'P018', nombre: "Squirtle", imagen: "squirtle.jpg", detalles: "Peluche pequeño. Medidas: 12x7cm", precio: 400 },
            { id: 'P019', nombre: "Taki y Mitsuha", imagen: "yourName.jpg", detalles: "Peluches pequeños pintados a mano. Medidas: 12x7cm", precio: 750 },
            { id: 'P020', nombre: "Thomas Shelby", imagen: "Llavero.jpg", detalles: "Llavero pequeño. Medidas: 12x7cm", precio: 430 }
        ];
        this.constructor = function() {
            if (!localStorage.getItem("carrito")) {
                localStorage.setItem('carrito', '[]');
            }
            this.getCarrito = JSON.parse(localStorage.getItem("carrito"));
            this.agregarItem = function(item) {
                for (i of this.catalogo) {
                    if (i.id === item) {
                        var registro = i
                    }
                }
                if (!registro) {
                    return
                }

                for (i of this.getCarrito) {
                    if (i.id === item) {
                        i.cantidad++;
                        console.log(this.getCarrito);
                        localStorage.setItem("carrito", JSON.stringify(this.getCarrito))
                        return;
                    }
                }
                registro.cantidad = 1;
                this.getCarrito.push(registro);
                console.log(this.getCarrito);
                localStorage.setItem("carrito", JSON.stringify(this.getCarrito));
            }
            this.getTotal = function() {
                var total = 0;
                for (i of this.getCarrito) {
                    total += parseFloat(i.cantidad) * parseFloat(i.precio);
                }
                return total;
            }
            this.eliminarItem = function(item) {
                for (var i in this.getCarrito) {
                    if (this.getCarrito[i].id === item) {
                        this.getCarrito.splice(i, 1);
                    }
                }
                localStorage.setItem("carrito", JSON.stringify(this.getCarrito));
            }
        }
    }

    function Carrito_View() {
        this.renderCatalogo = function() {
            var template = ``;
            for (var i in carrito.catalogo) {
                template += `
            <div class="column is-one-quarter">
                <div class="card">
                    <div class="card-image">
                        <img src="./css/imagenes/${carrito.catalogo[i].imagen}" alt="Placeholder">
                    </div>
                    <div class="card-content">
                        <h2 class="title is-3">${carrito.catalogo[i].nombre}</h2>
                        <p>${carrito.catalogo[i].detalles}</p>
                        <br>
                        <h3 class="subtitle is-4">Precio: <strong>$${carrito.catalogo[i].precio}</strong></h3>
                    </div>
                    <div class="card-footer">
                        <a href="#" class="card-footer-item" id="addItem" data-producto="${carrito.catalogo[i].id}">Agregar al Carrito</a>
                    </div>
                    </div>
                </div>
           `;

            }
            $("#catalogo").innerHTML = template;


        }
        this.showModal = function() {
            $("#modal").classList.toggle('is-active');
            this.renderCarrito();
        }
        this.hideModal = function(ev) {
            if (ev.target.classList.contains("toggle")) {
                this.showModal();
            }
        }
        this.renderCarrito = function() {
            if (carrito.getCarrito.length <= 0) {
                var template = `<div class="is-12"><p class="title is-1 has-text-centered">No haz agregado Productos</p></div><br>`;
                $("#productosCarrito").innerHTML = template;
            } else {
                $("#productosCarrito").innerHTML = "";
                var template = ``
                for (i of carrito.getCarrito) {
                    template += `
                    <div class="columns">
                    <div class="column is-3">
                    <figure>
                    <img src="./css/imagenes/${i.imagen}" alt="">
                    </figure>
                    </div>
                    <div class="column is-3">${i.nombre}</div>
                    <div class="column is-2 has-text-centered">$${i.precio}</div>
                    <div class="column is-1 has-text-centered">${i.cantidad}</div>
                    <div class="column is-2 has-text-centered"><strong><i>${i.cantidad * i.precio}</i></strong></div>
                    <div class="column is-1"><p class="field"><a href="#" class="button is-danger"><span class="icon"><i class="fa fa-trash-o" id="deleteProducto" data-producto="${i.id}"></i></span></a></p></div>
                    </div>
                    `;
                }
                $("#productosCarrito").innerHTML = template;
            }
            $("#totalCarrito > strong").innerHTML = "$" + carrito.getTotal();
        }
        this.totalProductos = function() {
            var total = carrito.getCarrito.length;
            console.log(total);
            $("#totalProductos > strong").innerHTML = total
        }
    }


    var carrito = new Carrito();
    var carrito_view = new Carrito_View();

    document.addEventListener('DOMContentLoaded', function() {
        carrito.constructor();
        carrito_view.renderCatalogo();
        carrito_view.totalProductos();
    });

    $("#btn_carrito").addEventListener("click", function() {
        carrito_view.showModal();

    });
    $("#modal").addEventListener("click", function(ev) {
        carrito_view.hideModal(ev);
    })

    $("#catalogo").addEventListener("click", function(ev) {
        ev.preventDefault();
        if (ev.target.id === "addItem") {
            var id = ev.target.dataset.producto;
            carrito.agregarItem(id);
        }
        alert("Se ha agregado el producto al carrito");

        carrito_view.totalProductos();
    });

    $("#productosCarrito").addEventListener("click", function(ev) {
        ev.preventDefault();
        if (ev.target.id === "deleteProducto") {
            carrito.eliminarItem(ev.target.dataset.producto);
            carrito_view.renderCarrito();
            carrito_view.totalProductos();
        }
    })

})();