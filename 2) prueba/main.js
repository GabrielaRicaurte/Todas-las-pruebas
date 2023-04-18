
checkboxPrueba.addEventListener('click', () => {
    
    const checkboxPrueba = document.querySelector('#checkboxPrueba');
    const checked = checkboxPrueba.getAttribute("aria-checked");

    if( checked === "false" ){

        checkboxPrueba.setAttribute("aria-checked", "true");
        const icon = document.querySelector('#icon');
        icon.classList.remove('hidden')

    } else {

        checkboxPrueba.setAttribute("aria-checked", "false");
        icon.classList.add('hidden')
    }
})