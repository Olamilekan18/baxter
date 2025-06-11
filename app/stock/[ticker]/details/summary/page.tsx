import { companyProfile, fetchFinancials, quoteHL } from "../../apiLoaders"

export default async function FinancialsPage({params} : {
    params: Promise<{ticker: string, followUp: string}>
}){
    const ticker = (await params).ticker
     const priceReport = await quoteHL(ticker)
    const companyProfileRes  = await companyProfile(ticker)
    const financials = await fetchFinancials(ticker)
    const {metric  } = financials
    const {beta, epsAnnual, peAnnual} = metric
    const {name,currency, marketCapitalization, finnhubIndustry }= companyProfileRes
    const {c, h, l, pc, t, o } = priceReport
    return(

        <div>
            <p>About {name}. </p>
            <div className="grid grid-cols-3">
                <div>
                    <p>Open: {o}</p>
                    <p>Close: {c}</p>
                    <p>52 Week High: {metric['52WeekHigh']}</p>
                    <p>52 Week Low: {metric['52WeekLow']}</p>
                    <p>Beta: {beta}</p>
                    <p>EPS: {epsAnnual}</p>
                    <p>P/E : {peAnnual}</p>
                    <p>Market Cap. : {(marketCapitalization / 1000000).toFixed(2) + "T"}</p>
                </div>

            </div>
        </div>
    )
}