import APIRender from "./apiCalls"

export async function generateMetadata({params} : {
    params: Promise<{ticker: string}>
}){
    const ticker = (await params).ticker
    return(
        {
            title: `${ticker.toUpperCase()} Stock Information`
        }
    )
}

export default async function RouteShow({
    params,
}: {
    params: Promise<{ticker: string}>
}){
    const ticker = (await params).ticker
    return(
        <>
       {
            ticker?
        <APIRender symbol={ticker?.toString()} /> : null
}
        </>
    )
}