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
        <div className="md:w-[90%] md:h-[87.5%] h-[225px] w-[90vw]">
        <p className="md:text-2xl">{props.timeframe? `Stock Movements (${props.timeframe} Days)`: `Stock Movements (1 Day)`}</p>
        <Link href={`/stock/${props.symbol}`} className="md:text-xl md:m-2 p-2 hover:text-pink-600">
        24H
        </Link>
        <Link href={`/stock/${props.symbol}/30`} className="md:text-xl md:m-2 p-2 hover:text-pink-600" id="30">
        1 Month
        </Link>
        <Link href={`/stock/${props.symbol}/365`} className="md:text-xl md:m-2 p-2 hover:text-pink-600" id="365">
        1 Year
        </Link>
        <Link href={`/stock/${props.symbol}/custom?initial=${giveDateString(7).date_string_1}&final=${giveDateString(7).date_string_2}`} className="md:text-xl md:m-2 p-2 hover:text-pink-600" id="365">
        Custom Timeframe
        </Link>
        <ALineChart data_arr={new_arr} source_array={stock_numbers} color={props.change > 0 ? `green`: `red`} />
        </div>
    )
}