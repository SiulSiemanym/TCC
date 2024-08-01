document.addEventListener("click", function(event) {
    var menu = document.getElementById("menu-configuracoes");
    var imagem = document.getElementById("imagem");
    if (event.target !== menu && event.target !== imagem) {
      menu.style.display = "none";
    }
});