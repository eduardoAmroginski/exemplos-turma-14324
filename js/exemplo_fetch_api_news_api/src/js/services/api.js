const API_KEY = "1a9ec140ecc94bee9c1ab040dee469da"

export async function fetchTopHeadlines(){
    try {
        const endpoint = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
        const response = await fetch(endpoint);

        if (!response.ok){
            throw new Error('Erro na requisição');
        }

        const data = await response.json();

        return data.articles

    } catch (error) {
        console.log("Não foi possivel carregar as noticia principais");
    }
}