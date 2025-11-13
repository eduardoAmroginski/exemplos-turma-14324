const containerElement = document.getElementsByClassName("container")[0];

containerElement.textContent = "Novo conteúdo";

containerElement.innerHTML += "<h1 class='invisivel'>Meu titulo</h1>"

const h1Element = document.getElementsByTagName("h1")[0];

h1Element.classList.add("destaque")
h1Element.classList.remove("invisivel")