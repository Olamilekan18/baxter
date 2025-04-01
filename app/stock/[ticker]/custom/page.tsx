import Form from 'next/form'
import { ALineChart } from '../line'
import Link from 'next/link'

const fmp_key = process.env.NEXT_PUBLIC_FMP_KEY

export default async function Page(
    {
        params, searchParams
    }: {
        params: Promise<{ticker: string}>, 
        searchParams: Promise<{initial: string, final: string}>
    }
){

    const ticker = (await params).ticker
    const {initial, final} = (await searchParams)
    console.log(initial, final)

    const customRangeRequest = await fetch(`https://financialmodelingprep.com/api/v3/historical-price-full/${ticker}?apikey=${fmp_key}&from=${initial}&to=${final}`)
    const customRangeData = await customRangeRequest.json()
    const historical_data = customRangeData.historical
    const prices: number[] = historical_data.map(({close}: {close: number}) => close)

    function percentChange(){
        const b = prices[0]
        const a = prices[prices.length -1]
        const percentage = 100 *(b - a) / a

        return percentage.toFixed(2)
    }

    return(
        <>
        <p className="text-3xl font-bold my-4">
            <Link href={`/stock/${ticker}`}>{ticker}</Link> Stock Prices for Custom Time Range ({initial} To {final})
        </p>
        <div className='grid grid-cols-4 gap-x-4 items-center'>
        <Form action={`/stock/${ticker}/custom/`} className='col-span-1'>
        <label htmlFor="init">Set Start Date: </label>
        <input type="date" name="initial" id="init" className='block my-2 text-black p-1 text-2xl h-8'/>
        <label htmlFor="fin">Set End Date: </label>
        <input type="date" name="final" id="fin" className='block my-2 text-black p-1 text-2xl h-8'/>
        <button type="submit">Submit!</button>
        </Form>

        <div className='h-[400px] w-[90%] grid col-span-3'>
        <p>Current Price: ${prices[0]}</p>
        <p>Change: {percentChange()}%</p>

        <ALineChart data_arr={prices} source_array={historical_data} color={prices[0] < prices[prices.length-1] ? 'red' : 'green'}/>
        </div>
        </div>
        </>
    )
}

