class CardNews extends HTMLElement {
    set data(article) {

        console.log("news ==> ", JSON.stringify(article, null, 2));

      this.innerHTML = `
      <a href=${article.url}>
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
  
  customElements.define("card-news", CardNews);
  