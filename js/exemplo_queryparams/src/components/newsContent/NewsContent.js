class NewsContent extends HTMLElement {
    set data(article){
        console.log("news ==> ", JSON.stringify(article, null, 2));

        this.innerHTML = `
            <div class="container-news">
                <h1>${article.title}</h1>
                <p>${article.description}</p>
                <p>Author: ${article.author}</p>
                <img src=${article.urlToImage} />
                <a href=${article.url}>Leia a noticia completa</a>
            </div>
        
        `
    }
}

customElements.define("news-content", NewsContent);