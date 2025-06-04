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
        <div className="md:w-[85%] h-[350px] w-[90vw]">
        <div className="flex gap-x-2">
        <Link href={`/stock/${props.symbol}`} className="grid md:text-xl md:m-2 p-2 hover:text-[#53D22c]">
        Today
        </Link>
        <Link href={`/stock/${props.symbol}/30`} className={`grid md:text-xl rounded-[8px] md:m-2 p-2 hover:text-[#53D22c] ${props.timeframe?"underline bg-[#53D22c]": ''}`} id="30">
        1M
        </Link>
        <Link href={`/stock/${props.symbol}/90`} className="grid md:text-xl md:m-2 p-2 hover:text-[#53D22c]" id="30">
        3M
        </Link>
         <Link href={`/stock/${props.symbol}/180`} className="grid md:text-xl md:m-2 p-2 hover:text-[#53D22c]" id="30">
        6M
        </Link>
        <Link href={`/stock/${props.symbol}/365`} className="grid md:text-xl md:m-2 p-2 hover:text-[#53D22c]" id="365">
        1Y
        </Link>
        
        </div>
        <ALineChart data_arr={new_arr} source_array={stock_numbers} color={props.change > 0 ? `green`: `red`} />
        </div>
    )
}