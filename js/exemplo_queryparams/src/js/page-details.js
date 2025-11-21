import "../components/newsContent/NewsContent.js"
import Utils from "../js/utils/utils.js"
import { fetchSearchEverything } from "./services/api.js";

// Função responsável por carregar os detalhes da notícia na tela
const insertNewsDetails = async () => {

    // Pega o elemento do HTML onde vamos inserir o conteúdo da notícia
    const containerNoticia = document.getElementById("container-noticia");
    
    // Busca o título da notícia que veio pela URL
    // Exemplo de URL: pagina.html?news-title=Noticias+do+dia
    const newsTitle = Utils.getParamFromURL('news-title');

    console.log("newsTitle: ", newsTitle)

    // Faz a requisição para buscar todas as notícias relacionadas ao título
    const articles = await fetchSearchEverything(newsTitle);

    console.log("articles: ", articles)
    
    // Mostra no console qual notícia foi encontrada pelo filtro
    console.log("article filtrado: ", Utils.filterByTitle(newsTitle, articles))

    // Cria o componente de notícia (Web Component <news-content>)
    const newsContent = await document.createElement("news-content");

    // Passa os dados da notícia para dentro do componente
    // Aqui estamos carregando o primeiro artigo encontrado
    newsContent.data = articles[0];

    // Insere o componente dentro da página
    await containerNoticia.appendChild(newsContent);
}

// Executa a função ao carregar o arquivo
await insertNewsDetails()
