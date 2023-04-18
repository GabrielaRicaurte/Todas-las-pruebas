let contador = 0;
const valor = document.querySelector('#valor');
const decremento = document.querySelector('#decremento');
const incremento = document.querySelector('#incremento');

decremento.addEventListener('click', () => {
    contador--;
    valor.textContent = contador;
})
incremento.addEventListener('click', () => {
    contador++;
    valor.textContent = contador;
})
