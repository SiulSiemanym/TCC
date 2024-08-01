/**
 * @param e {HTMLButtonElement}
 */ 
function mudarOpcao(e) {
const pedro = document.querySelectorAll(".nav-link.active")
pedro.forEach(pedo => {
    pedo.classList.remove("active", "bg-dark", "border-dark")
})
const rafael = document.querySelectorAll(".card-body > div")
rafael.forEach(rafa => {
    if (rafa.id === `${e.id}-conteudo`) {
    rafa.classList.remove("d-none")
    rafa.classList.add("d-block")
    }
    else {
    rafa.classList.add("d-none")
    rafa.classList.remove("d-block")

    }
})
e.classList.add("active", "bg-dark", "border-dark")
}
