// Chave da API usada para acessar a NewsAPI.
// Ela identifica o usuário e permite fazer requisições.
const API_KEY = "1a9ec140ecc94bee9c1ab040dee469da";

// Função que busca as principais notícias (Top Headlines).
// O "export" permite que a função seja usada em outros arquivos.
export async function fetchTopHeadlines() {
  try {
    // Monta a URL da NewsAPI com o país (us = Estados Unidos)
    // e adiciona a chave da API no final.
    const endpoint = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
    
    // Faz a requisição usando fetch() e espera a resposta.
    const response = await fetch(endpoint);

    // Se a resposta não estiver OK (status 200–299), dispara erro.
    if (!response.ok) {
      throw new Error("Erro na requisição");
    }
    
    // Converte a resposta para JSON.
    const data = await response.json();

    console.log("Noticias: ", data);

    // Retorna apenas a lista de artigos recebidos da API.
    return data.articles;
  } catch (error) {
    // Se der erro na requisição ou conversão, exibe uma mensagem.
    console.log("Não foi possivel carregar as noticia principais");
  }
}

// Função que busca notícias com base em um texto digitado pelo usuário.
export async function fetchSearchEverything(searchText, language = "pt", page = 1) {
  try {
    // Monta a URL da API para buscar notícias contendo o texto pesquisado.
    const endpoint = `https://newsapi.org/v2/everything?q=${searchText}&page=${page}&apiKey=${API_KEY}`;

    // Faz a requisição e espera pela resposta.
    const response = await fetch(endpoint);

    // Se a resposta for inválida, gera erro.
    if (!response.ok) {
      throw new Error("Erro na requisição");
    }
    
    // Converte para JSON.
    const data = await response.json();

    console.log("Noticias: ", JSON.stringify(data, null, 2));

    // Retorna só os artigos encontrados.
    return data.articles;
  } catch (error) {
    // Caso dê erro, mostra mensagem no console.
    console.log("Não foi possivel carregar as noticias pesquisadas");
  }
}

/*
Resumo do funcionamento das funções:

1) Montam a URL do endpoint da NewsAPI.
2) Fazem a requisição HTTP com fetch().
3) Checam se a resposta é válida (response.ok).
4) Convertem o resultado para JSON.
5) Retornam apenas os artigos (data.articles).
6) Em caso de erro, exibem uma mensagem no console.
*/
