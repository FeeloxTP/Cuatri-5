function buscar() {
    var searchValue = document.getElementById("espacioBuscador").value.toLowerCase();
    var items = document.querySelectorAll("#tienda .item, #tienda .item2"); //sirve para buscar objetos con varias clases

    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var itemNames = item.getAttribute("data-nombre").toLowerCase().split(","); // Obtener la lista de nombres separados por comas por eso es el split
        var found = itemNames.some(function (name) {
            return name.trim().includes(searchValue);
        });

        if (found) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    }
    document.getElementById("espacioBuscador").value = ""; // Limpiar el campo de búsqueda
}


function inicio() {
    window.location.href = "index.html"; // Reemplaza "index.html" con la ruta correcta de tu página de inicio
}



function confirmarDatos() {
    var nombre = document.getElementsByName("nombre")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var fecha = document.getElementsByName("fnace")[0].value;
    var expresionRegular = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (nombre === "") {
        alert("Tiene que digitar su nombre");
        return;
    }
    if (!isNaN(nombre)) {
        alert("No puede ingresar numeros al espacio del nombre");
        return;
    }
    if (email === "") {
        alert("Tiene que ingresar un correo");
        return;
    }

    if (fecha === "") {
        alert("Tiene que ingresar tu fecha de Nacimiento");
        return;
    }


    edadSuficiente();
    acticarBotonCompra();
}

function edadSuficiente() {
    var hoy = new Date();
    var mesActual = new Date();
    var fechaNacimiento = document.getElementsByName("fnace")[0].value;
    var edad = document.getElementsByName("edad")[0];
    var nacimiento = new Date(fechaNacimiento);


    var years = hoy.getFullYear() - nacimiento.getFullYear();

    if (mesActual.getMonth() <= nacimiento.getMonth()) {
        years--;
    }

    if (years >= 18) {
        alert("Cliente con edad suficiente para Comprar");
        edad.value = years;
    } else {
        edad.value = years;
        alert("Cliente no tiene edad suficiente para Comprar");
    }
}

function acticarBotonCompra() {
    var botonDatos = document.getElementById("Confirmar");
    var botonCompra = document.getElementById("realizarCompra");

    botonDatos.addEventListener("click", function () {
        botonCompra.removeAttribute("disabled");
    });
}


//============================================================

function guardarJuego() {
    // Obtén todos los botones de compra
    var botonesCompra = document.getElementsByClassName("botonComprar");

    if (typeof (Storage) !== "undefined") {

        var memRegistro = JSON.parse(localStorage.getItem("memRegistro"));
        //validar si existe juegos en el carrito del local storage
        if (memRegistro != null) {//revisar
            var arreglo = memRegistro;
        } else {
            var arreglo = new Array();//agregarle 
        }

        // Convertimos la colección a un arreglo usando Array.from() o spread operator
        var botonesArray = Array.from(botonesCompra);

        botonesArray.forEach(function (boton) {
            var idBoton = boton.getAttribute("data-nombre");
            var precioProducto = parseFloat(boton.getAttribute("data-precio"));

            var producto = {
                id: idBoton,
                precio: precioProducto
            };

            arreglo.push(producto);
        })

        localStorage.setItem("memRegistro", JSON.stringify(arreglo));// el memRegistro es como el id de ese arreglo que se esta guardando

    }
}




/*function mostrarCarrito() {
    var spiderman = document.getElementById("spiderman");
    var horizon = document.getElementById("horizon");
    var diablo = document.getElementById("diablo");
    var god = document.getElementById("godofwar");
    var assassins = document.getElementById("assassins");
    var fantasy = document.getElementById("fantasy");
    var mortal = document.getElementById("mortal");
    var sekiro = document.getElementById("sekiro");

    var precioTotal = document.getElementById("Precio");
    let precio = 0; //let es mas restringida con la inicializacion, solo se guardara numeros 
    if (typeof (Storage) !== "undefined") {
        var memRegistro = JSON.parse(localStorage.getItem("memRegistro"));
        if (memRegistro != null) {
            memRegistro.forEach(function (mem) {
                if (mem.id === "comprarSpiderman") {
                    spiderman.style.display = "grid";
                    precio += parseFloat(mem.precio);
                }
                if (mem.id === "comprarHorizon") {
                    horizon.style.display = "grid";
                    precio += parseFloat(mem.precio);
                }
                if (mem.id === "sdfsdf") {
                    spiderman.style.display = "grid";
                    precio += parseFloat(mem.precio);
                }
                if (mem.id === "sdfsdf") {
                    spiderman.style.display = "grid";
                    precio += parseFloat(mem.precio);
                }
                if (mem.id === "sdfsdf") {
                    spiderman.style.display = "grid";
                    precio += parseFloat(mem.precio);
                }
                if (mem.id === "sdfsdfsdf") {
                    spiderman.style.display = "grid";
                    precio += parseFloat(mem.precio);
                }
                if (mem.id === "sdfsdfsd") {
                    spiderman.style.display = "grid";
                    precio += parseFloat(mem.precio);

                }
                if (mem.id === "sdfsdf") {
                    spiderman.style.display = "grid";
                    precio += parseFloat(mem.precio);

                }
                if (mem.id === "sdfsdfsdf") {
                    spiderman.style.display = "grid";
                    precio += parseFloat(mem.precio);

                }
            })
        }
        precioTotal.value =precio;
    }
}*/

function limpiarCarrito() {
    localStorage.clear();
    location.reload();
}

//==========================================================================

function contactos() {
    verificarEdad()
}

function verificarEdad() {
    var hoy = new Date();
    var mesActual = new Date();
    var fechaNacimiento = document.getElementsByName("fnace")[0].value;
    var edad = document.getElementsByName("edad")[0];
    var nacimiento = new Date(fechaNacimiento);


    var years = hoy.getFullYear() - nacimiento.getFullYear();

    if (mesActual.getMonth() <= nacimiento.getMonth()) {
        years--;
    }

    if (years >= 18) {
        edad.value = years;
    } else {
        edad.value = years;
    }
}
