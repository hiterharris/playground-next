import { useState, useEffect } from "react";

const useStripe = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('http://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=c32de463ef6544e7ad7edba84af91d52')
            .then(response => response.json())
            .then(data => setArticles(data))
            .catch(error => console.log("Error fetching articles: ", error))
    }, []);

    return { articles }
}

export default useStripe;