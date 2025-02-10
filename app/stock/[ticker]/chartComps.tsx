import { giveDateString } from "./apiCalls"
import { ALineChart } from "./line"


const fmp_key = process.env.NEXT_PUBLIC_FMP_KEY

export async function fetchChartData(symbol: string) {
    let {date_string_1, date_string_2

    } = giveDateString(1)
    const stock_data_request = await fetch(`https://financialmodelingprep.com/api/v3/historical-chart/5min/${symbol}?from=${date_string_1}&to=${date_string_2}&apikey=${fmp_key}`)
    const stock_data_response: []= await stock_data_request.json();
    
    return(stock_data_response)
}

export default async function LineChart(props: {symbol: string, change: number}){
    const stock_numbers : [] = await fetchChartData(props.symbol.toUpperCase())
    const new_arr = stock_numbers.map(({close}) => close)
    
    return(
        <div className="md:w-[90%] md:h-[87.5%] h-[250px] w-[90vw]">
        <ALineChart data_arr={new_arr} source_array={stock_numbers} color={props.change > 0 ? `green`: `red`} />
        </div>
    )
}