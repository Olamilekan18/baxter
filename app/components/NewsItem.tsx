import { newsItem } from "../type_definitions"

export default function NewsItem(props: {
    object: newsItem
}){
    let object = props.object
    let {id, image, headline, datetime, url, source, summary} = object
    let dateVal = new Date(datetime*1000)
    return(
         <div key={id} className="md:grid-cols-4 grid gap-x-2 md:gap-x-4 p-2 md:p-4 items-center">
                        <div className="md:col-span-3">
                            <a className="text-xl md:text-2xl font-bold hover:underline block" href={url} target="_blank">{headline}</a>
                            <span className="text-[1.25rem]">{dateVal.toDateString()}</span> | <span className="text-[1.25rem]">{source}</span>
                            <p className="my-1 md:my-2 text-xl">
                                {summary}
                            </p>
                        </div>
                        {String(image).length > 0?
                        <div className="md:col-span-1 justify-items-center grid">
                            <img src={image} alt={`Image for Article ID: ${id}`} className="h-[10rem] w-[90%] object-cover rounded-[1.25rem]" loading="lazy" />
                            </div> : null }

                    </div>
    )
}