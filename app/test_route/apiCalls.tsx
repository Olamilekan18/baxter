const api_key = process.env.NEXT_PUBLIC_FH_KEY

async function companyProfile(symbol: string) {
    const data_request = await fetch(`https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${api_key}`, {
        cache: "force-cache"
    })
    const data = await data_request.json()
    return data
}
async function quoteHL(symbol:string){
    const data_request = await fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${api_key}`, {
    })
    const data = await data_request.json()
    return data
}

export default async function APIRender(props: {symbol: string}){
    const symb_result = await companyProfile(props.symbol)
    const price_report = await quoteHL(props.symbol.toLocaleUpperCase())
    const {c , dp, h, l} = price_report 

    const {country, currency, logo, ticker, name, weburl, pr} = symb_result
    return(
        <>
        <p>{country}</p>
        <p>{name}</p>
        <img src={logo} width={30} height={30} className="rounded-full"/>
        <p>{ticker}</p>
        <p>{c}</p> <span className={
            Number(dp) < 0? 'text-red-700' : 'text-green-700'
        }>{dp} %</span>
        
        </>
    )

}
