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

(async () => {
    let juegosJSON = await obtenerJuegosJSON();

    const aleatorizar = juegosJSON.sort(() => Math.random() - 0.5);

    const juegosAleatorios = aleatorizar;
    const juegoParaMostrar = juegosAleatorios[0];
    

    var fecha = new Date(juegoParaMostrar.released);
   

    document.getElementById('imagen').src = juegoParaMostrar.background_image;
    document.getElementById('titulo').innerHTML = juegoParaMostrar.name;
    document.getElementById('año').innerHTML = fecha.getFullYear();
    document.getElementById('genero').innerHTML = juegoParaMostrar.genres[0].name;
})();