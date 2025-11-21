// Importa o componente Web Custom Element "CardNews"
import "../components/cardNews/CardNews.js";

// Importa a função que busca as notícias principais (top headlines) da NewsAPI
import { fetchSearchEverything, fetchTopHeadlines } from "./services/api.js";

// Quando a página termina de carregar (evento onload do window),
// a função 'setCardsTopHeadlines' é executada para exibir as notícias.
window.onload = () => {
  setCardsTopHeadlines();
};

// Função assíncrona responsável por buscar as notícias e
// criar os cards dinamicamente na página.
const setCardsTopHeadlines = async () => {
  // Obtém a referência do container onde os cards serão adicionados.
  const containerCards = document.getElementById("container-cards");

  // Faz a requisição à API e aguarda o retorno da lista de artigos.
  const articles = await fetchTopHeadlines();

  // const articles = await fetchSearchEverything("tecnologia");

  // Percorre cada artigo retornado pela API.
  articles.forEach((article) => {
    // Cria um novo elemento customizado <card-news>.
    const card = document.createElement("card-news");

    // Passa os dados do artigo para o componente por meio do setter "data".
    card.data = article;

    // Adiciona o card preenchido dentro do container principal.
    containerCards.appendChild(card);
  });
};

// Explicação Geral
// - O código utiliza módulos ES6 (import/export) para organizar as responsabilidades:
//  - CardNews.js define o componente visual do card de notícia.
//  - api.js é responsável por buscar os dados da NewsAPI.
//  - Este arquivo (provavelmente main.js, index.js ou script.js) integra os dois, montando os cards na tela.
// - O uso de window.onload garante que o DOM já esteja totalmente carregado antes de tentar acessar elementos com getElementById.
// - A função setCardsTopHeadlines() segue um padrão assíncrono, usando await para lidar com a promessa retornada pela função fetchTopHeadlines().
// - O uso de Web Components (card-news) permite um código mais modular, reutilizável e organizado, separando a estrutura HTML de cada notícia em seu próprio componente.
