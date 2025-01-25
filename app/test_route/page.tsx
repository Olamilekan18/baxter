import { ImgShow } from "../img_renderer"

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
        cache: "force-cache"
    })
    const data = await data_request.json()
    return data
}

export default async function APIRender(props: {symbol: string}){
    const symb_result = await companyProfile(props.symbol)
    const price_report = await quoteHL(props.symbol.toLocaleUpperCase())
    console.log(price_report)
    const {c , dp, h, l} = price_report 

    const {country, currency, logo, ticker, name, weburl, pr} = symb_result
    return(
        <>
        <p>{name}</p>
        <p>{ticker}</p>
        <p>{c}</p> <span>{dp} %</span>
        <img src={logo} width={30} height={30} className="rounded-full"/>
        </>
    )

}
