import NewsItem from "../components/NewsItem"
import { news_general } from "../stock/[ticker]/apiLoaders"
import { newsItem } from "../type_definitions"

export default async function Page(){
    const news: newsItem[] = await news_general()

    return(
        <>
        <h3 className="text-3xl">Market News and Updates</h3>
        {
            news.slice(0, 12).map((article) => <NewsItem object={article} key={article.id}/>)
        }
        </>
    )
}