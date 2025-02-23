import { giveDateString } from "./apiCalls"
import { ALineChart } from "./line"
import Link from 'next/link'

function longTermDate(timeframe: number){
    const curr_date = new Date()
    const curr_stamp= curr_date.getTime()
    const past_date = curr_stamp - (timeframe* 86400 * 1000)
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



const fmp_key = process.env.NEXT_PUBLIC_FMP_KEY

export async function fetchChartData24H(symbol: string) {
    let {date_string_1, date_string_2

    } = giveDateString(1)
    const stock_data_request = await fetch(`https://financialmodelingprep.com/api/v3/historical-chart/5min/${symbol}?from=${date_string_1}&to=${date_string_2}&apikey=${fmp_key}`)
    const stock_data_response: []= await stock_data_request.json();
    
    return(stock_data_response)
}

export async function fetchDataLongTerm(symbol:string, timeframe:number){
    let {date_string_1, date_string_2} = longTermDate(timeframe)
    console.log(date_string_1, date_string_2)

    const long_term_data = await fetch(`https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?apikey=${fmp_key}&from=${date_string_1}&to=${date_string_2}`)
    const long_term_response = await long_term_data.json()
    return long_term_response
}

export default async function LineChart(props: {symbol: string, change: number, timeframe?: number }){
    let stock_numbers, new_arr

    if(!props.timeframe){
    stock_numbers = await fetchChartData24H(props.symbol.toUpperCase())
    new_arr = stock_numbers.map(({close}) => close)
    }

    if(props.timeframe && props.timeframe > 1){
        let LTD = await fetchDataLongTerm(props.symbol, props.timeframe)
        stock_numbers = LTD.historical
        new_arr = stock_numbers.map(({close} : {close: number}) => close)
    }
    
    return(
        <div className="md:w-[90%] md:h-[87.5%] h-[250px] w-[90vw]">
        <Link href={`/stock/${props.symbol}`} className="md:text-xl md:m-2 p-2 ">
        24H
        </Link>
        <Link href={`/stock/${props.symbol}/30`} className="md:text-xl md:m-2 p-2">
        1M
        </Link>
        <Link href={`/stock/${props.symbol}/365`} className="md:text-xl md:m-2 p-2">
        YTD
        </Link>
        <ALineChart data_arr={new_arr} source_array={stock_numbers} color={props.change > 0 ? `green`: `red`} />
        </div>
    )
}