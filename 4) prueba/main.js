let contador = 0;
const valor = document.querySelector('#valor');
document.querySelector('#decremento').addEventListener('click', decremento);
document.querySelector('#incremento').addEventListener('click', incremento);

function decremento(e) {
    contador--;
    e.target.removeEventListener(e.type, decremento);
    valor.textContent = contador;

}

function incremento(e) {
    contador++;
    e.target.removeEventListener(e.type, incremento);
    valor.textContent = contador;
}

// Seleccionamos un elemento, un evento y damos nombre a la función
document.getElementById("prueba2").addEventListener("click", desarrollogeek);
// creamos la función "desarrollogeek"
function desarrollogeek(e) {
    // removemos el evento
    e.target.removeEventListener(e.type, desarrollogeek);
    // Después ingresamos un código a ejecutar
    alert("Hola, soy una alerta que sólo aparecerá 1 vez al dar clic.");
}