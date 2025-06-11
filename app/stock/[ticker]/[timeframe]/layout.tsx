import StockPriceComp from "@/app/components/StockPriceComp";
import React from "react";
import Link from "next/link";

export default async function TImeframeLayout({
    children, 
    params
} : {
    children: React.ReactNode,
    params: Promise<{ticker: string, timeframe: number}>
}
)
{
    const ticker = (await params).ticker
    const timeframe = (await params).timeframe
    return(
     <div className="grid">
        <StockPriceComp symbol={ticker} timeframe={timeframe}/>
             <div className='flex p-2'>
                            <Link className='block p-1 hover:text-[#53d22c]' href={`/stock/${ticker}`}>Chart</Link>
                            <Link className={`block p-1 hover:text-[#53d22c]`} 
                            href={`/stock/${ticker}/details/summary` }>
                            Summary</Link>
                            <Link className='block p-1 hover:text-[#53d22c]' href={`/stock/${ticker}/details/financials`}>Financials</Link>
                            <Link className='block p-1 hover:text-[#53d22c]' href={`/stock/${ticker}/details/analytics`}>Analytics </Link>
                             <Link className='block p-1 hover:text-[#53d22c]' href={`/stock/${ticker}/details/news`}>News</Link>
                          </div>
        {children}
     </div>   
    )
}