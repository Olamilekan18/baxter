import APIRender from "./apiCalls"

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