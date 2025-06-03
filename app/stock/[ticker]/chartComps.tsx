import { ALineChart } from "./line"
import Link from 'next/link'
import { fetchDataLongTerm, fetchChartData24H, giveDateString } from "./apiLoaders"

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
        <div className="md:w-[75%] h-[350px] w-[90vw]">
        <div className="grid grid-cols-12 gap-x-4">
        <Link href={`/stock/${props.symbol}`} className="md:text-xl md:m-2 p-2 hover:text-[#53D22c]">
        Today
        </Link>
        <Link href={`/stock/${props.symbol}/30`} className="md:text-xl md:m-2 p-2 hover:text-[#53D22c]" id="30">
        1 Month
        </Link>
        <Link href={`/stock/${props.symbol}/365`} className="md:text-xl md:m-2 p-2 hover:text-[#53D22c]" id="365">
        1 Year
        </Link>
        <Link href={`/stock/${props.symbol}/custom?initial=${giveDateString(7).date_string_1}&final=${giveDateString(7).date_string_2}`} className="md:text-xl md:m-2 p-2 hover:text-[#53D22c]" id="custom_timeframe">
        Custom Timeframe
        </Link>
        </div>
        <ALineChart data_arr={new_arr} source_array={stock_numbers} color={props.change > 0 ? `green`: `red`} />
        </div>
    )
}