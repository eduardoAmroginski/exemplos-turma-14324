// Define uma classe que representa o componente <news-content>.
// Ela estende HTMLElement, ou seja, se comporta como um elemento HTML personalizado.
class NewsContent extends HTMLElement {

    // Setter chamado "data". Ele é ativado quando fazemos:
    // newsContent.data = algumObjetoDeNoticia;
    set data(article) {

        // Mostra no console os dados da notícia recebidos.
        console.log("news ==> ", JSON.stringify(article, null, 2));

        // Define o conteúdo HTML que será exibido dentro do componente.
        // Aqui usamos template strings para inserir os dados da notícia.
        this.innerHTML = `
            <div class="container-news">
                <h1>${article.title}</h1>
                <p>${article.description}</p>
                <p>Author: ${article.author}</p>

                <!-- Exibe a imagem da notícia -->
                <img src="${article.urlToImage}" />

                <!-- Link para a notícia completa -->
                <a href="${article.url}">Leia a noticia completa</a>
            </div>
        `;
    }
}

// Registra o novo elemento personalizado chamado <news-content>.
// A partir daqui, ele pode ser usado no HTML como se fosse uma tag normal.
customElements.define("news-content", NewsContent);