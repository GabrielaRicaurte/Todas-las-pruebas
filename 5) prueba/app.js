// Variables
const selectorPokemon = document.querySelector('#selectorPokemon');
const contenedor = document.querySelector('#contenedor');


document.addEventListener('DOMContentLoaded', () => {
    extraerNpmbrePokemones();
    extraerDatos();
})

// const coloresElementos = { 

// }

function extraerNpmbrePokemones() {
    // const key = `https://pokeapi.co/api/v2/pokemon/?limit=151`;
    const key = `https://pokeapi.co/api/v2/pokemon/?limit=25`;

    fetch(key) 
        .then(respuesta => respuesta.json())
        .then(resultado => iterarNombres(resultado.results));
}

function iterarNombres(nombres) {
    nombres.forEach( nombre => {
        const { name } = nombre;

        // Mostrar nombres en el HTML //

        const nombresPokemon = document.createElement('button');
        // nombresPokemon.type="button";
        nombresPokemon.classList.add('estiloNombrePokemon');
        nombresPokemon.value= name;
        nombresPokemon.textContent = name;

        nombresPokemon.onclick = () => {
            extraerDatos(nombresPokemon.value)
        }

        selectorPokemon.appendChild(nombresPokemon);
    })
}

// Extrae los datos de la Api
function extraerDatos(pokemon) {
    const key = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    fetch(key) 
        .then( respuesta => respuesta.json())
        .then( resultado => {
            mostraResultado(resultado);
        });
}

// Muestra los datos en el HTML
function mostraResultado(resultado) {
    
    const sprite = resultado.sprites.front_default;
    const { name, stats, types } = resultado;
    
    const encabezado = document.createElement('DIV');

    const divImg = document.createElement('DIV');
    divImg.classList.add('grid', 'justify-items-center');
    
    const img = document.createElement('IMG');
    img.classList.add('bg-zinc-600', 'w-6/12', 'rounded-full');
    img.src = sprite;
    divImg.appendChild(img);

    const divNombreTipo = document.createElement('DIV');
    divNombreTipo.classList.add('flex', 'items-center', 'grid')

    const nombre = document.createElement('H1');
    nombre.classList.add('uppercase', 'font-bold', 'text-3xl', 'text-left')
    nombre.textContent = name;
    divNombreTipo.appendChild(nombre);

    types.forEach( type => {
        const tipos = document.createElement('h1');
        tipos.classList.add('uppercase', 'font-bold', 'my-1', 'text-left')
        tipos.textContent = `Type: ${type.type.name}`;
        divNombreTipo.appendChild(tipos);

    })
    
    
    encabezado.appendChild(divImg);
    encabezado.appendChild(divNombreTipo);

    // Mostrar Stats
    stats.forEach(stat => {
        const estadisticasDiv = document.createElement('DIV');
        estadisticasDiv.classList.add('flex', 'grid', 'grid-cols-2', 'p-2', 'border-b');
        estadisticasDiv.innerHTML = `
            <div class="mx-4 my-1 text-left">
                <h1 class="font-bold text-lg">${stat.stat.name}:</h1>
            </div>
            <div class="my-1 mx-4 text-right">
                <h1 class="text-lg">${stat.base_stat}</h1>
            </div>
        `
        
        info.appendChild(estadisticasDiv);
    })


}

// function mostrarStats(stats) {
// }

function limpiarHTML() {

}