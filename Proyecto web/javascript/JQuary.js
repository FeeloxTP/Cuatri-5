$(document).ready(function () {
    function actualizarVisibilidad() {
        if (window.matchMedia("(max-width: 768px)").matches) {
            // Pantalla pequeña (versión para celular)
            $('.item2').hide();
            $('#botonMostrar').show();
            $('#botonOcultar').hide();
        } else {
            // Pantalla grande (versión para computadora)
            $('.item2').show();
            $('#botonMostrar').hide();
            $('#botonOcultar').hide();
        }
    }

    // Llamamos a la función al cargar el documento para ajustar la visibilidad inicialmente
    actualizarVisibilidad();

    // Agregamos el evento para el botón
    $('#botonMostrar').click(function () {
        $('.item2').show();
        $('#botonMostrar').hide();
        $('#botonOcultar').show();
    });


    // Agregamos el evento para el botón
    $('#botonOcultar').click(function () {
        $('.item2').hide();
        $('#botonMostrar').show();
        $('#botonOcultar').hide();
    });

    // Agregamos el evento para ajustar la visibilidad al cambiar el tamaño de la pantalla
    $(window).resize(function () {
        actualizarVisibilidad();
    });
});


//funciones para el carrito 
// Contenido del archivo "script.js"
$(document).ready(function () {
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
                if (mem.id === "comprarDiablo") {
                    diablo.style.display = "grid";
                    precio += parseFloat(mem.precio);
                }
                if (mem.id === "comprargod") {
                    god.style.display = "grid";
                    precio += parseFloat(mem.precio);
                }
                if (mem.id === "comprarAssassins") {
                    assassins.style.display = "grid";
                    precio += parseFloat(mem.precio);
                }
                if (mem.id === "comprarFantasy") {
                    fantasy.style.display = "grid";
                    precio += parseFloat(mem.precio);
                }
                if (mem.id === "comprarMortal") {
                    mortal.style.display = "grid";
                    precio += parseFloat(mem.precio);

                }
                if (mem.id === "comprarSekiro") {
                    sekiro.style.display = "grid";
                    precio += parseFloat(mem.precio);

                }
            })
        }
        precioTotal.value = precio.toFixed(2);
    }
});

/*$('#realizarCompra').click(function () {
    localStorage.clear();
    location.reload();
});
*/

