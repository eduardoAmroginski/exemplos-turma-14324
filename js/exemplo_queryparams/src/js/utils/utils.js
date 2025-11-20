export default class Utils {
    static getParamFromURL = (paramName) =>{
        const urlParams = new URLSearchParams(window.location.search);
        const newsTitle = urlParams.get(paramName);

        return newsTitle;
    } 

    static filterByTitle = (title) => {
        
    }
    
}