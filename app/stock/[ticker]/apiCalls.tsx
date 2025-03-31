
import LineChart from "./chartComps"
import { companyNews, companyProfile, quoteHL, earnings, deltaPrice, getMarketStatus } from "./apiLoaders"

export default async function APIRender(props: {symbol: string, timeframe? : number }){
    const symb_result = await companyProfile(props.symbol)
    const price_report = await quoteHL(props.symbol.toLocaleUpperCase())
    const earningsData = await earnings(props.symbol.toUpperCase())
    const newsReports = await companyNews(props.symbol.toUpperCase())
    const filteredNewsReports = newsReports.filter((report) => report.image.length > 1)
    const priceChanges = await deltaPrice(props.symbol.toUpperCase())
    const usable = priceChanges[0]
    const {holiday, isOpen, session} = await getMarketStatus()
    const oneChange = usable['1D']
    const monthChange = usable['1M']
    const yearToDay = usable['1Y']
    let change
    if (props.timeframe && props.timeframe == 30){
        change = monthChange
    }
    else if(props.timeframe && props.timeframe == 365){
        change = yearToDay
    }
    else{
        change = oneChange
    }

    const {c} = price_report 
    const {currency, logo, ticker, name, marketCapitalization, exchange} = symb_result
    return(
        <>
        <div className="grid md:grid-cols-3 gap-x-4 p-2">
        <div className="md:col-span-1">
        <div className="wrapper">
        <div className="flex gap-x-2 md:gap-x-4 items-center">
        <img src={logo} className="rounded-full p-1 md:p-2 md:w-[80px] md:h-[80px] w-[50px] h-[50px]"/>
        <div className="my-2 lg:my-4">
        <p className="text-xl md:text-4xl">{ticker}</p>
        <p className="text-xl md:text-2xl">{name}</p>
        </div>
        </div>
       
        <p className="text-md md:text-lg">{exchange}</p>
        <p className="text-lg md:text-2xl">{currency} {c.toFixed(2)}   
            <span className={`px-2 md:px-4 text-lg md:text-2xl ${
            Number(change) < 0? 'text-red-700' : 'text-green-700'
        }`}>
           {Number(change) > 0? "+": null} 
           {Number(change).toFixed(2)} %</span></p> 
           <p
        className={`md:text-2xl ${isOpen ? 'text-green-600' : 'text-red-600'}`}
        >{isOpen? "Market Open" : "Market Closed"}</p>
        <p>{holiday ? holiday: ''}</p>
        <p className="capitalize text-2xl">{!isOpen ? session: null}</p>
       </div>

       <div>
        <p className="my-1 md:my-2 text-xl md:text-2xl underline">
            Company Details
        </p>
        <p className="text-md md:text-xl">Market Capitalisation: {currency} {
            marketCapitalization > 1000000 ? (marketCapitalization / 1000000).toFixed(2) : (marketCapitalization / 1000).toFixed(2)} {marketCapitalization > 1000000 ? "trillion" : "billion"}
  </p>

        <p className="earnings_analysis text-xl md:text-2xl my-1 md:my-2 underline">
            Earnings
            </p>
            <div className="text-lg md:text-xl">
            {
                earningsData.map((item: {
                    quarter: string | number, 
                    year: string | number,
                    surprisePercent: number,
                    actual: number
                }) => (
                    <div key={`${item.quarter} ${item.year}`}>
                        <p className="text-justify">Q{item.quarter} {item.year} : {`$${item.actual.toFixed(2)}`} (<span className={`${item.surprisePercent > 0? 'text-green-700': 'text-red-700'}`}>
                            {item.surprisePercent > 0 ? `+`: ''}{`${item.surprisePercent.toFixed(2)}%`} </span>)</p>
                    </div>
                ))
            }
            </div>
       </div>
    </div>

    <div className="graphs md:col-span-2 my-1 md:my-2">
             <LineChart symbol={props.symbol} change={change} timeframe={props.timeframe}/>
    </div>
    </div>

{filteredNewsReports.length > 0 ?
    <div className="company_news_data grid col-span-1">
        <div>
            <p className="text-lg md:text-4xl my-4">
                Latest Company News
            </p>
            {
                filteredNewsReports.slice(0,15).map(
                    ({ headline, datetime , source, summary, url, image, id}) => {
                        const dateVal =  new Date(datetime * 1000)

                    return(
                    <div key={id} className="md:grid-cols-4 grid gap-x-2 md:gap-x-4 p-2 md:p-4 items-center">
                        
                        {String(image).length > 0?
                        <div className="md:col-span-1 justify-items-center grid">
                            <img src={image} alt={`Image for Article ID: ${id}`} className="h-[10rem] w-[90%] object-cover rounded-[1.25rem]" loading="lazy" />
                            </div> : null }

                        <div className="md:col-span-3">
                            <a className="text-xl md:text-2xl font-bold hover:underline block" href={url} target="_blank">{headline}</a>
                            <span className="text-[1.25rem]">{dateVal.toDateString()}</span> | <span className="text-[1.25rem]">{source}</span>
                            <p className="my-1 md:my-2 text-xl">
                                {summary}
                            </p>
                        </div>

                    </div>
                    )
}
                )
            }
        </div>
    </div>  : null }
        </>
    )
}


 
