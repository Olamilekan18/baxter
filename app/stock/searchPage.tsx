'use client'

import Link from "next/link";
import { useEffect, useState } from "react"
import ZeroMatch from "./zeroMatch";

const fmp_key = process.env.NEXT_PUBLIC_FMP_KEY

export default function StockSearchPage(){
    const [input_value, changeInput] = useState('');
    const [results, setResults] = useState<[]>([])

    useEffect(()=> {
      async function fromFMP(searchTerm: string){
        const string_request = await fetch(`https://financialmodelingprep.com/api/v3/search?query=${searchTerm}&limit=20&exchange=NASDAQ&apikey=${fmp_key}`)
        const string_response = await string_request.json()
        setResults(string_response)
      }
      if(input_value.length % 3 == 0 && input_value.length > 1){
        fromFMP(input_value)
      }
    }, [input_value])

    return(
        <div className="mx-auto w-11/12 p-1 md:p-2">
        <p className="md:text-4xl font-bold">Search...</p>
        <input type="text" name="name_search" id="nms" placeholder="Enter Stock or Ticker Name Here" className="border-0 outline-none rounded-[2rem] p-2 md:p-4 my-2 md:my-4 w-10/12 text-lg md:text-2xl text-black" onChange={(e)=> changeInput(e.target.value)} />
        <div className="search_results">
                {results.length > 0 ?
                    results.filter((item : any) => item.stockExchange == 'NASDAQ Global Select' || "NASDAQ Global Market").map((item: any) => (
                        <div className="grid gap-x-2 grid-cols-12 md:gap-x-4 p-1 md:p-2 my-1 md:my-2 items-center" key={item.symbol}>
                        <div className="col-span-1">
                        <img src={`https://financialmodelingprep.com/image-stock/${item.symbol}.png`} alt={item.name} 
                        className="h-[3.5rem] w-[3.5rem] rounded-full object-cover" loading="lazy"/>
                        </div>

                        <Link href={`/stock/${item.symbol}`} className="block underline text-xl md:text-2xl col-span-9" key={item.symbol}>
                            {item.name}
                            </Link>
                        <div className="col-span-2">
                            <p className="font-bold text-lg md:text-xl">{item.symbol}</p>
                            <p>{item.stockExchange}</p>
                        </div>    
                        </div>
                    )): 
                      input_value.length > 3?
                      <ZeroMatch/>: null
                }
        </div>
        </div>
    )
}