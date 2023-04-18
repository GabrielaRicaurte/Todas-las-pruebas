const compatibleConMando = document.querySelector('#compatibleConMando');
const competitivo = document.querySelector('#competitivo')
const logros = document.querySelector('#logros')
const multijugador = document.querySelector('#multijugador')
const multiplataforma = document.querySelector('#multiplataforma')
const unSoloJugador = document.querySelector('#unSoloJugador')

const prueba = document.querySelector('#prueba')

const contenedor = document.querySelector('#resultado');

const datosBusqueda = {
    compatibleConMando: '',
    competitivo: '',
    logros: '',
    multijugador: '',
    multiplataforma: '',
    unSoloJugador: ''
}

document.addEventListener('DOMContentLoaded', () =>{
    mostrarJuegos(autos);
}); 


compatibleConMando.addEventListener('click', e => {
    if(e.target.checked) {
        datosBusqueda.compatibleConMando = 'Compatible con mando';
        filtrarJuegos();
    }
    else {
        mostrarJuegos(autos);
    }
});

function limpiarHTML() {
    while(contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
}

function mostrarJuegos(autos) {
    limpiarHTML();

    autos.forEach( auto => {
        const autosHTML = document.createElement('h3');
        autosHTML.textContent = `${auto.marca} - ${auto.genero} - ${auto.caracteristicas}`;
        contenedor.appendChild(autosHTML);
    })
}

function noResultado() {
    limpiarHTML();

    const noResultado = document.createElement('div');
    noResultado.textContent = 'No resultado'
    contenedor.appendChild(noResultado);
}

function filtrarJuegos() {
    const resultado = autos.filter( filtrarCompatibleConMando )

    if(resultado.length) {
        mostrarJuegos(resultado)
    } else {
        noResultado();
    }
}

function filtrarCompatibleConMando(auto) {
    const {caracteristicas} = auto;
    const filter = caracteristicas.filter(function (valor) {
        return valor == datosBusqueda.compatibleConMando;
    })

    if(datosBusqueda.compatibleConMando){
        return filter == datosBusqueda.compatibleConMando;
    } 
    return auto;
}