import { useEffect } from "react";
import { useArticles } from "../hooks"

const ReactQuery = () => {
    const { articles } = useArticles()

    useEffect(() => {
        console.log('articles: ', articles?.articles)
    }, [articles]);

    return (
        <main className="ReactQuery">
            <h2>React Query</h2>
            <div>
            {articles?.articles?.map(article => {
                return (
                    <ul>
                        <li>{article?.title}</li>
                    </ul>
                )
            })}
            </div>
        </main>
    )
  }
  
  export default ReactQuery;