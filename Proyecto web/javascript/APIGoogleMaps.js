


function initMap() {
    // Crear un nuevo mapa
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 20,
    });

    // Obtener la ubicación del usuario
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            // Centrar el mapa en la ubicación del usuario
            map.setCenter(pos);

            // Crear un marcador en la ubicación del usuario
            var marker = new google.maps.Marker({
                position: pos,
                map: map,
                title: 'Tu ubicación'
            });
        });
    }
}

window.onload = initMap;