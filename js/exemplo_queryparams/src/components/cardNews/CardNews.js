// Define uma classe chamada "CardNews" que estende HTMLElement,
// permitindo criar um novo tipo de elemento HTML personalizado.
class CardNews extends HTMLElement {
  // Define um "setter" chamado "data".
  // Esse método é chamado automaticamente quando alguém faz:
  //   elemento.data = { ...dadosDaNoticia }
  set data(article) {
    // Exibe no console o objeto de artigo recebido, formatado em JSON,
    // útil para depuração (ver os dados que estão sendo passados para o componente).
    console.log("news ==> ", JSON.stringify(article, null, 2));

    // Define o conteúdo HTML interno (innerHTML) do componente.
    // Cria uma estrutura de cartão com link, título, descrição e autor da notícia.
    this.innerHTML = `
      <a href='./src/pages/details.html?news-title=${article.title}'>
        <div class='card'>
          <div class='card-body text-center'>
            <h5 class='card-title'>${article.title}</h5>
            <p class='card-text'>${article.description}</p>
            <p class='text-muted'>${article.author}</p>
          </div>
        </div>
      </a>`;
  }
}

// Registra o novo elemento personalizado no navegador,
// permitindo usá-lo no HTML como <card-news></card-news>.
customElements.define("card-news", CardNews);

// Resumo do que o código faz:
// - Cria um Web Component reutilizável chamado <card-news>.
// - Esse componente exibe um cartão de notícia com:
//  - título (article.title),
//  - descrição (article.description),
//  - autor (article.author),
//  - e link para a notícia completa (article.url).
// O conteúdo é atualizado automaticamente quando se define a propriedade .data.
