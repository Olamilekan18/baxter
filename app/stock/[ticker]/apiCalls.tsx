const api_key = process.env.NEXT_PUBLIC_FH_KEY

async function companyProfile(symbol: string) {
    const data_request = await fetch(`https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${api_key}`, {
        cache: "force-cache"
    })
    const data = await data_request.json()
    return data
}
async function quoteHL(symbol:string){
    const data_request = await fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${api_key}` 
    )
    const data = await data_request.json()
    return data
}

export default async function APIRender(props: {symbol: string }){
    const symb_result = await companyProfile(props.symbol)
    const price_report = await quoteHL(props.symbol.toLocaleUpperCase())
    const {c , dp} = price_report 

    const {currency, logo, ticker, name, marketCapitalization} = symb_result
    return(
        <>
        <div className="w-11/12 p-2 md:p-4">
        <div className="wrapper">
        <div className="flex gap-x-2 md:gap-x-4 items-center">
        <img src={logo} width={50} height={50} className="rounded-full p-2 md:p-4"/>
        <p>{name}</p>
        </div>
        <p>{ticker}</p>
        <p>{currency} {c.toFixed(2)}   <span className={`px-2 md:px-4 ${
            Number(dp) < 0? 'text-red-700' : 'text-green-700'
        }`}>
           {Number(dp) > 0? "+": null} 
           {Number(dp).toFixed(2)} %</span></p> 
       </div>

       <div>
        <p className="my-2 md:my-4 text-xl md:text-2xl">
            Company Details
        </p>
        <p>Market Capitalisation: {currency} {marketCapitalization.toFixed(2) > 1000000 ? (marketCapitalization/ 1000000).toFixed(2): (marketCapitalization/1000).toFixed(2)} {marketCapitalization > 1000000? "trillion": "billion"} </p>
       </div>
       </div>
        </>
    )
}
 
