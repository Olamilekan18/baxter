import { analyst_ratings } from "../../apiLoaders"

type analyst_rating = {
    buy: number,
    hold: number,
    period: string,
    sell: number,
    strongBuy: number, 
    strongSell: number, 
    symbol: string
}

export default async function Analytics({
    params
}: {
    params: Promise<{ticker: string}>
}){
    const ticker= (await params).ticker
    const analysis = await analyst_ratings(ticker)
    const {period, buy, strongBuy, strongSell, hold, sell
    }: analyst_rating = analysis[0]
    const values = Object.values(analysis[0])
    const values_edited = values.filter((value) => typeof value == "number")
    console.log(values_edited)
    const sorted = values_edited.sort((a, b) => b - a)
    function findMatch(){
        const mostRecent = analysis[0]
        let answer = ''
        for (let y in mostRecent){
            if (mostRecent[y] == sorted[0] && typeof mostRecent[y] == 'number'){
                answer = y
            }
        }
        //console.log(answer)
        return answer
    }
    findMatch()
    return(
        <div className="grid p-4 my-1">
            <p className="text-xl underline my-2">Analytics for {ticker} </p>
            <p>Analysis Period: {period}</p>
            <p>Analyst Verdict: <span style={{
                textTransform: 'capitalize'
            }}>{findMatch()}</span> </p>
            <p>Buy Ratings: {buy}</p>
            <p>Sell Ratings: {sell}</p>
               <p>Strong Buy Ratings: {strongBuy}</p>  
                <p>Strong Sell Ratings: {strongSell}</p>
                   <p>Hold Ratings: {hold}</p>
        </div>        
    )
}