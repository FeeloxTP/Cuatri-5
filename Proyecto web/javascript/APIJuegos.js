const apiKey = "bf4137f12548475d927071b3c7d50afd";

const obtenerJuegos = async () => {
    return await fetch("https://api.rawg.io/api/games?platforms=79&page_size=40&key=" + apiKey)
        .then(response => response.json());
};

const obtenerJuegosJSON = async () => {
    let datosJuego;

    await obtenerJuegos()
        .then(function (juegos) {
            datosJuego = juegos;
        });

    return datosJuego.results;
};

// Función asíncrona auto-ejecutable

(async () => {

    // Obtiene un archivo JSON de juegos de forma asíncrona

    let juegosJSON = await obtenerJuegosJSON();

    // Aleatoriza los juegos en el archivo JSON

    const aleatorizar = juegosJSON.sort(() => Math.random() - 0.5);

    // Guardo los juegos aleotoriamente en la variable y Selecciono el primer juego 

    const juegosAleatorios = aleatorizar;
    const juegoParaMostrar = juegosAleatorios[0];

    // Obtiene la fecha de lanzamiento del juego seleccionado

    var fecha = new Date(juegoParaMostrar.released);


    // Actualiza la imagen, título, año y género en el documento HTML con la información del juego seleccionado

    document.getElementById('imagen').src = juegoParaMostrar.background_image;
    document.getElementById('titulo').innerHTML = juegoParaMostrar.name;
    document.getElementById('año').innerHTML = fecha.getFullYear();
    document.getElementById('genero').innerHTML = juegoParaMostrar.genres[0].name;
})();