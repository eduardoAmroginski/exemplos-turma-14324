import "../components/cardNews/CardNews.js"
import { fetchGeneralTopHeadlines } from "./services/api.js";

window.onload = () => {
 
    setCardsTopHeadlines();

}


const setCardsTopHeadlines = async () => {
    const containerCards = document.getElementById("container-cards");
    const articles = await fetchGeneralTopHeadlines();

    articles.forEach(article => {
        const card = document.createElement("card-news");
        card.data = article;
        containerCards.appendChild(card);
    });
}