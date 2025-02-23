
import LineChart from "./chartComps"

export const api_key = process.env.NEXT_PUBLIC_FH_KEY
const fmp_key = process.env.NEXT_PUBLIC_FMP_KEY

export const base_URL = `https://finnhub.io/api/v1`

export async function companyProfile(symbol: string) {
    const data_request = await fetch(`${base_URL}/stock/profile2?symbol=${symbol}&token=${api_key}`, {
        cache: "force-cache"
    })
    const data = await data_request.json()
    return data
}
export async function quoteHL(symbol:string){
    const data_request = await fetch(`${base_URL}/quote?symbol=${symbol}&token=${api_key}` )
    const data = await data_request.json()
    return data
}
export async function earnings(symbol:string) {
    const earn_request = await fetch(`${base_URL}/stock/earnings?symbol=${symbol}&token=${api_key}`, {
        cache: 'force-cache'
    })
    const earn_response = await earn_request.json()
    return earn_response
}

export async function getMarketStatus(){
    const status_request = await fetch(`${base_URL}/stock/market-status?exchange=US&token=${api_key}`)
    const status_response = await status_request.json()
    return status_response
}

async function deltaPrice(symbol: string){
    const price_change_req = await fetch (`https://financialmodelingprep.com/api/v3/stock-price-change/${symbol}?apikey=${fmp_key}`, {
        cache: 'force-cache'
    })
    const price_change_res = await price_change_req.json()
    return price_change_res
}

export async function companyNews(symbol:string){
    let {date_string_1, date_string_2} = giveDateString(1)
    const news_request = await fetch(`${base_URL}/company-news?symbol=${symbol}&from=${date_string_1}&to=${date_string_2}&token=${api_key}`,{
        cache: 'force-cache'
    })
    const news_response = await news_request.json()
    return news_response
}

export function giveDateString(n: number){
    const curr_date = new Date()
    const curr_stamp= curr_date.getTime()
    const past_date = curr_stamp - (n* 86400 * 1000)
    const lower_date_bound = new Date(past_date)

    function checkValue(input: string | number){
        if(Number(input) < 10){
            return `0${input}`
        }
        else return `${input}`
    }

    if(curr_date.getDay() > 0 || curr_date.getDate() < 6){
    return({
        date_string_1: `${lower_date_bound.getFullYear()}-${checkValue(lower_date_bound.getMonth() + 1)}-${checkValue(lower_date_bound.getUTCDate() )}` ,
        date_string_2: `${curr_date.getFullYear()}-${checkValue(curr_date.getMonth() + 1 ) }-${checkValue(curr_date.getUTCDate())}`
    })
}
    else{
        if(curr_date.getDay() == 0 ){
            let newDateStamp = curr_stamp - (2 * 86400 * 1000)
            let dateToUse = new Date(newDateStamp)
            return({
                date_string_1: `${dateToUse.getFullYear()}-${checkValue(dateToUse.getMonth() + 1)}-${checkValue(dateToUse.getUTCDate() )}`,
                date_string_2: `${dateToUse.getFullYear()}-${checkValue(dateToUse.getMonth() + 1)}-${checkValue(dateToUse.getUTCDate() )}` 
            })
        }
        else{
            let satDateStamp = curr_stamp - (1 * 86400 * 1000)
            let satDateToUse = new Date(satDateStamp)
            return({
                date_string_1: `${satDateToUse.getFullYear()}-${checkValue(satDateToUse.getMonth() + 1)}-${checkValue(satDateToUse.getUTCDate() )}`,
                date_string_2: `${satDateToUse.getFullYear()}-${checkValue(satDateToUse.getMonth() + 1)}-${checkValue(satDateToUse.getUTCDate() )}` 
            })
        }
    }
}

export default async function APIRender(props: {symbol: string, timeframe? : number }){
    const symb_result = await companyProfile(props.symbol)
    const price_report = await quoteHL(props.symbol.toLocaleUpperCase())
    const earningsData = await earnings(props.symbol.toUpperCase())
    const newsReports: [] = await companyNews(props.symbol.toUpperCase())
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
    const {currency, logo, ticker, name, marketCapitalization} = symb_result
    return(
        <>
        <div className="grid md:grid-cols-3 gap-x-4 p-2">
        <div className="md:col-span-1">
        <div className="wrapper">
        <div className="flex gap-x-2 md:gap-x-4 items-center">
        <img src={logo} className="rounded-full p-1 md:p-2 md:w-[75px] md:h-[75px] w-[50px] h-[50px]"/>
        <p className="text-xl md:text-2xl">{name}</p>
        </div>
        <p className="text-xl md:text-4xl">{ticker}</p>
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
        <p>{session}</p>
       </div>

       <div>
        <p className="my-1 md:my-2 text-xl md:text-2xl">
            Company Details
        </p>
        <p className="text-md md:text-2xl">Market Capitalisation: {currency} {marketCapitalization.toFixed(2) > 1000000 ? (marketCapitalization/ 1000000).toFixed(2): (marketCapitalization/1000).toFixed(2)} {marketCapitalization > 1000000? "trillion": "billion"} </p>

       
        <p className="earnings_analysis text-lg md:text-3xl my-1 md:my-2">
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
                        <p className="text-justify">Q{item.quarter} {item.year} : {item.actual} ( <span className={`${item.surprisePercent > 0? 'text-green-700': 'text-red-700'}`}>
                            {item.surprisePercent > 0 ? `+`: ''}
                            {`${item.surprisePercent.toFixed(2)}%`} </span>)</p>
                    </div>
                ))
            }
            </div>
       </div>
    </div>

    <div className="graphs md:col-span-2 my-2 md:my-4">
             <LineChart symbol={props.symbol} change={change} timeframe={props.timeframe}/>
    </div>
    </div>

    <div className="company_news_data grid col-span-1">
        <div>
            <p className="text-lg md:text-4xl my-4">
                Latest Company News
            </p>
            {
                newsReports.slice(0, 10).map(
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
    </div>

    
        </>
    )
}


 
