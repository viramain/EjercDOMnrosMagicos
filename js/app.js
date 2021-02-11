// verifica que el numero ingresado este entre 0 y 100
function validaNro(numero) {
    if (numero.value.trim() != "" && !isNaN(numero.value) && numero.value >= 0 && numero.value <= 100) {
        numero.className = "form-control is-valid";
    } else {
        numero.className = "form-control is-invalid";
    }
}

//Genera numero aleatorio entre 0 y 100 (NUMERO MAGICO)
function generaNro(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// compara el nro aleatorio con el ingresado
function comparaNros() {
    let ingresado = document.getElementById("ingrNro ").value
    let aleatorio = generaNro(0, 100);
    imprimeResultado(aleatorio, ingresado);
    // Cada vez que termina el juego, poner focus en boton COMENZAR
    document.getElementById("botonComenzar").focus();
}

// Ir al campo para ingresar numero
function getFocus() {
    // inicializa en cero el numero a ingresar
    document.getElementById("ingrNro ").value = 0;
    // pone el cursor en el campo para ingresar numero
    document.getElementById("ingrNro ").select();
    // vacia el mensaje del resultado
    borraResultado();
}

// Imprime resultado
function imprimeResultado(aleatorio, ingresado) {
    if (aleatorio == ingresado) {
        document.getElementById("textoResultado ").innerHTML += `<div class="alert alert-warning " role="alert ">
        El número ingresado es IGUAL que el número mágico ${aleatorio}</div>`;
    } else {
        if (ingresado > aleatorio) {
            document.getElementById("textoResultado ").innerHTML += `<div class="alert alert-warning " role="alert ">
        El número ingresado es MAYOR que el número mágico ${aleatorio}</div>`;
        } else {
            document.getElementById("textoResultado ").innerHTML += `<div class="alert alert-warning " role="alert ">
        El número ingresado es MENOR que el número mágico ${aleatorio}</div>`;
        }
    }
}

function borraResultado() {
    document.getElementById("textoResultado ").innerHTML = "";
}