import StockPriceComp from "@/app/components/StockPriceComp";
import React from "react";

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
        {children}
     </div>   
    )
}