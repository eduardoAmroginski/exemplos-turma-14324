import "../components/newsContent/NewsContent.js"
import Utils from "../js/utils/utils.js"
import { fetchSearchEverything } from "./services/api.js";


window.onload = async () => {

    await insertNewsDetails()

}


const insertNewsDetails = async () => {
    const containerNoticia = document.getElementById("container-noticia");
    
    const newsTitle = Utils.getParamFromURL('news-title');

    console.log("newsTitle: ", newsTitle)

    const article = await fetchSearchEverything(newsTitle);

    console.log("article: ", article)

    const newsContent = await document.createElement("news-content");
    newsContent.data = article[0];

    await containerNoticia.appendChild(newsContent);
}