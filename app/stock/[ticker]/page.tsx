import APIRender from "./apiCalls"
import StockPriceComp from "@/app/components/StockPriceComp"
import Link from "next/link"


export default async function RouteShow({
    params,
}: {
    params: Promise<{ticker: string}>
}){
    function ShowPageItems(){

    return(
        <>
          <StockPriceComp symbol={ticker} />
               <div className='flex p-2'>
                            <Link className='block p-1 hover:text-[#53d22c]' href={`/stock/${ticker}`}>Chart</Link>
                            <Link className={`block p-1 hover:text-[#53d22c]`} 
                            href={`/stock/${ticker}/details/summary` }>
                            Summary</Link>
                            <Link className='block p-1 hover:text-[#53d22c]' href={`/stock/${ticker}/details/financials`}>Financials</Link>
                            <Link className='block p-1 hover:text-[#53d22c]' href={`/stock/${ticker}/details/analytics`}>Analytics </Link>
                             <Link className='block p-1 hover:text-[#53d22c]' href={`/stock/${ticker}/details/news`}>News </Link>
                          </div>
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

