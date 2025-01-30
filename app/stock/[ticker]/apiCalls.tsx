const api_key = process.env.NEXT_PUBLIC_FH_KEY

const base_URL = `https://finnhub.io/api/v1`

export async function companyProfile(symbol: string) {
    const data_request = await fetch(`${base_URL}/stock/profile2?symbol=${symbol}&token=${api_key}`, {
        cache: "force-cache"
    })
    const data = await data_request.json()
    return data
}
export async function quoteHL(symbol:string){
    const data_request = await fetch(`${base_URL}/quote?symbol=${symbol}&token=${api_key}` 
    )
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

function giveDateString(){
    const curr_date = new Date()
    const curr_stamp= curr_date.getTime()
    const past_date = curr_stamp - 604800000
    const lower_date_bound = new Date(past_date)

    function checkValue(input: string | number){
        if(Number(input) < 10){
            return `0${input}`
        }
        else return `${input}`
    }

    return({
        date_string_1: `${lower_date_bound.getFullYear()}-${checkValue(lower_date_bound.getMonth() + 1)}-${checkValue(lower_date_bound.getUTCDate() )}` ,
        date_string_2: `${curr_date.getFullYear()}-${checkValue(curr_date.getMonth() + 1 ) }-${checkValue(curr_date.getUTCDate())}`
    })
}

export default async function APIRender(props: {symbol: string }){
    const symb_result = await companyProfile(props.symbol)
    const price_report = await quoteHL(props.symbol.toLocaleUpperCase())
    const earningsData = await earnings(props.symbol.toUpperCase())
    const {c , dp} = price_report 

    const {currency, logo, ticker, name, marketCapitalization} = symb_result
    return(
        <>
        <div className="w-11/12 p-2 md:p-4">
        <div className="wrapper">
        <div className="flex gap-x-2 md:gap-x-4 items-center">
        <img src={logo} className="rounded-full p-1 md:p-2 md:w-[75px] md:h-[75px] w-[50px] h-[50px]"/>
        <p className="text-xl md:text-2xl">{name}</p>
        </div>
        <p className="text-xl md:text-2xl">{ticker}</p>
        <p className="text-md md:text-lg">{currency} {c.toFixed(2)}   
            <span className={`px-2 md:px-4  text-md ${
            Number(dp) < 0? 'text-red-700' : 'text-green-700'
        }`}>
           {Number(dp) > 0? "+": null} 
           {Number(dp).toFixed(2)} %</span></p> 
       </div>

       <div>
        <p className="my-1 md:my-2 text-xl md:text-2xl">
            Company Details
        </p>
        <p className="text-md md:text-lg">Market Capitalisation: {currency} {marketCapitalization.toFixed(2) > 1000000 ? (marketCapitalization/ 1000000).toFixed(2): (marketCapitalization/1000).toFixed(2)} {marketCapitalization > 1000000? "trillion": "billion"} </p>

        <p className="earnings_analysis text-md md:text-lg">
            Earnings
            </p>
            <div>
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
                            {item.surprisePercent.toFixed(2)} </span>)</p>
                    </div>
                ))
            }
            </div>
       </div>
       </div>
        </>
    )
}
 
