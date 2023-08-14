function verificarEdad() {
    var edad = parseInt(document.getElementById("Edad").value);

    if (edad >= 18) {
        document.getElementById("edadtex").innerHTML = "Eres mayor de edad.";
    } else {
        document.getElementById("edadtex").innerHTML = "Eres menor de edad.";
    }
}

function ejecutarAccion(opcion) {
    switch (opcion) {
        case 'opcion1':
            document.getElementById("roundedNumber").innerHTML = 'Se seleccionó la opción 1';
            // Aquí puedes realizar las acciones correspondientes para la opción 1
            break;
        case 'opcion2':
            document.getElementById("roundedNumber").innerHTML = 'Se seleccionó la opción 2';
            // Aquí puedes realizar las acciones correspondientes para la opción 2
            break;
        case 'opcion3':
            document.getElementById("roundedNumber").innerHTML = 'Se seleccionó la opción 3';
            // Aquí puedes realizar las acciones correspondientes para la opción 3
            break;
        default:
            document.getElementById("roundedNumber").innerHTML = 'Opción inválida';
            // Acción predeterminada si ninguna opción coincide
            break;
    }
}

function dividir(a, b) {
    try {
        if (b === 0) {
            throw 'Error: No se puede dividir entre cero.';
        }

        document.getElementById("result").innerHTML = a / b;
    } catch (error) {
        alert("No se puede dividir entre 0");
    }
}


function obtenerEdad() {
    try {
        var edadInput = document.getElementById('edadInput');
        var edad = parseInt(edadInput.value);

        var resultado = obtenerEdadPersona(edad);
        document.getElementById("ed").innerHTML = resultado;
    } catch (error) {
        alert('Se produjo un error: ' + error.message);
    }
}

function obtenerEdadPersona(edad) {
    if (isNaN(edad) || edad === 0) {
        throw new Error('La edad proporcionada no es un número válido.');
    }

    return edad;
}

function ejecutarFor() {
    var i;
    var resultado = "";

    for (i = 1; i <= 5; i++) {
        resultado += "Iteración " + i + "<br>";
    }

    document.getElementById("ResultadoFor").innerHTML = resultado;
}

function ejecutarWhile() {
    var i = 1;
    var resultado = "";

    while (i <= 5) {
        resultado += "Iteración " + i + "<br>";
        i++;
    }

    document.getElementById("ResultadoWhile").innerHTML = resultado;
}

function ejecutarDoWhile() {
    var i = 1;
    var resultado = "";

    do {
        resultado += "Iteración " + i + "<br>";
        i++;
    } while (i <= 5);

    document.getElementById("ResultadoDOWHILE").innerHTML = resultado;
}

function cambiarTexto() {
    document.getElementById("parrafo").innerHTML = "Felipe Trejos";
}

function asignacionComparacion() {
    var x = 5;
    var y = "5";
    var resultado = x === y; // false

    document.getElementById("Comparación").innerHTML = resultado;
}

function sumar() {
    var x = 4;
    var y = 4;

    var resultado = x + y;
    document.getElementById("suma").innerHTML = resultado;

}

function operadoresLogicos() {
    var x = 5;
    var y = 3;
    var z = 7;
    var resultado = (x < y) && (y < z); // resultado: false

    document.getElementById("operadoresLogicos").innerHTML = resultado;
}

function utilizarNumber() {
    // Crear una variable de tipo primitivo Number
    var numero = 10;

    // Acceder a las propiedades del objeto Number
    var value = numero.valueOf();
    var str = numero.toString();
    var fixed = numero.toFixed(2);

    // Utilizar los métodos del objeto Number
    var isInteger = Number.isInteger(numero);
    var isNaNValue = Number.isNaN(numero);

    // Realizar operaciones matemáticas
    var suma = numero + 5;
    var multiplicacion = numero * 3;

    // Mostrar los resultados en el HTML
    document.getElementById("value").innerHTML = value;
    document.getElementById("str").innerHTML = str;
    document.getElementById("fixed").innerHTML = fixed;
    document.getElementById("isInteger").innerHTML = isInteger;
    document.getElementById("isNaNValue").innerHTML = isNaNValue;
    document.getElementById("suma").innerHTML = suma;
    document.getElementById("multiplicacion").innerHTML = multiplicacion;
}

function calcularResultados() {
    var randomNumber = Math.floor(Math.random() * 10) + 1;
    document.getElementById("randomNumber").innerHTML = "Número aleatorio: " + randomNumber;

    var absoluteValue = Math.abs(randomNumber);
    document.getElementById("absoluteValue").innerHTML = "Valor absoluto: " + absoluteValue;

    var roundedNumber = Math.ceil(randomNumber);
    document.getElementById("roundedNumber").innerHTML = "Número redondeado: " + roundedNumber;

    var cosineValue = Math.cos(randomNumber);
    document.getElementById("cosineValue").innerHTML = "Coseno: " + cosineValue;
}

// Función para explicar el objeto Date en JavaScript
function explicarDate() {
    // Crear un nuevo objeto Date con la fecha y hora actuales
    var fechaActual = new Date();

    // Obtener los componentes individuales de la fecha actual
    var año = fechaActual.getFullYear();
    var mes = fechaActual.getMonth() + 1; // Los meses comienzan en 0, por lo que se suma 1
    var dia = fechaActual.getDate();
    var hora = fechaActual.getHours();
    var minutos = fechaActual.getMinutes();
    var segundos = fechaActual.getSeconds();

    // Crear una cadena de texto con la fecha y hora actual formateada
    var fechaFormateada = dia + "/" + mes + "/" + año;
    var horaFormateada = hora + ":" + minutos + ":" + segundos;

    // Mostrar la fecha y hora formateadas en la consola
    console.log("Fecha actual: " + fechaFormateada);
    console.log("Hora actual: " + horaFormateada);

    // Mostrar la fecha y hora formateadas en el documento HTML
    document.getElementById("fecha-actual").textContent = fechaFormateada;
    document.getElementById("hora-actual").textContent = horaFormateada;
}

// Función para explicar las cadenas literales en JavaScript
function explicarCadenasLiterales() {
    // Ejemplo de cadena literal con interpolación de variables
    var nombre = "Felipe";
    var edad = 19;
    var mensaje = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;

    // Mostrar el mensaje en el documento HTML
    document.getElementById("mensaje").textContent = mensaje;
}

// Función para explicar el objeto String en JavaScript
function explicarString() {
    // Ejemplo de uso del objeto String
    var texto = "¡Hola, mundo!";

    // Obtener la longitud del texto
    var longitud = texto.length;

    // Convertir el texto a mayúsculas
    var textoMayusculas = texto.toUpperCase();



    // Mostrar los resultados en el documento HTML
    document.getElementById("texto-original").textContent = texto;
    document.getElementById("longitud").textContent = longitud;
    document.getElementById("texto-mayusculas").textContent = textoMayusculas;
}

// Función para explicar los arreglos en JavaScript
function explicarArreglos() {
    // Ejemplo de uso de un arreglo
    var frutas = ["manzana", "banana", "naranja", "pera"];

    // Obtener la longitud del arreglo
    var longitud = frutas.length;

    // Acceder a elementos individuales del arreglo
    var primeraFruta = frutas[0];
    var ultimaFruta = frutas[frutas.length - 1];

    // Mostrar los resultados en el documento HTML
    document.getElementById("arreglo-frutas").textContent = frutas.join(", ");
    document.getElementById("longitud-arreglo").textContent = longitud;
    document.getElementById("primera-fruta").textContent = primeraFruta;
    document.getElementById("ultima-fruta").textContent = ultimaFruta;
}

// Función para explicar los arreglos tipados en JavaScript
function explicarArreglosTipados() {
    // Ejemplo de uso de un arreglo tipado
    var arreglo = new Uint8Array([1, 2, 3, 4, 5]);

    // Acceder a elementos individuales del arreglo
    var primerElemento = arreglo[0];
    var ultimoElemento = arreglo[arreglo.length - 1];

    // Mostrar los resultados en el documento HTML
    document.getElementById("arreglo-tipado").textContent = arreglo;
    document.getElementById("primer-elemento").textContent = primerElemento;
    document.getElementById("ultimo-elemento").textContent = ultimoElemento;
}

// Función para encontrar elementos HTML por ID en JavaScript
function encontrarElementoPorId() {
    // Encontrar el elemento HTML por su ID
    var elemento = document.getElementById("mi-elemento");

    // Verificar si se encontró el elemento
    if (elemento) {
        // Modificar el contenido del elemento encontrado
        elemento.textContent = "¡Elemento encontrado!";
        elemento.style.color = "blue";
    } else {
        console.log("No se encontró ningún elemento con el ID especificado.");
    }
}

// Función para encontrar elementos HTML por nombre de etiqueta en JavaScript
function encontrarElementosPorEtiqueta() {
    // Encontrar elementos HTML por el nombre de la etiqueta
    var elementos = document.getElementsByTagName("p");

    // Recorrer los elementos encontrados y modificar su estilo
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.color = "red";
        elementos[i].style.fontWeight = "bold";
    }
}

// Función para encontrar elementos HTML por nombre de clase de etiqueta en JavaScript
function encontrarElementosPorClase() {
    // Encontrar elementos HTML por el nombre de clase de etiqueta
    var elementos = document.getElementsByClassName("rojo");

    // Recorrer los elementos encontrados y modificar su estilo
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.backgroundColor = "yellow";
        elementos[i].style.fontWeight = "bold";
    }
}

// Función para encontrar elementos HTML mediante selectores CSS en JavaScript
function encontrarElementosPorSelector() {
    // Encontrar elementos HTML mediante selectores CSS
    var elementos = document.querySelectorAll(".selectores");

    // Recorrer los elementos encontrados y modificar su estilo
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.color = "red";
        elementos[i].style.fontWeight = "bold";
    }
}

// Función para encontrar elementos HTML por colecciones de objetos en JavaScript
function encontrarElementosPorColeccion() {
    // Encontrar elementos HTML por colecciones de objetos
    var elementos = document.querySelectorAll(".lista");

    // Recorrer los elementos encontrados y modificar su contenido
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].textContent = "Elemento " + (i + 12);
    }
}