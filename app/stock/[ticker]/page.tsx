import StockPriceComp from "@/app/components/StockPriceComp"
import APIRender from "./apiCalls"

export default async function RouteShow({
    params,
}: {
    params: Promise<{ticker: string}>
}){
    function ShowPageItems(){

    return(
        <>
        <StockPriceComp symbol={ticker} />
        <APIRender symbol={ticker} />
        </>
    )
}



    const ticker = (await params).ticker
    return(
        <>
       {
            ticker?
        <ShowPageItems />
         : null
}
        </>
    )
}

