'use client'

import Link from "next/link";
import { useEffect, useState } from "react"

export default function StockSearchPage(){
    const [input_value, changeInput] = useState('');
    const [results, setResults] = useState<[]>([])

    useEffect(()=> {
      async function fromFMP(searchTerm: string){
        const string_request = await fetch(`https://financialmodelingprep.com/api/v3/search?query=${searchTerm}&limit=20&exchange=NASDAQ&apikey=33Ed5B4hzl1K7X2XTVZcitdgUGWTZnjZ`)
        const string_response = await string_request.json()
        setResults(string_response)
      }
      if(input_value.length % 3 == 0 && input_value.length > 1){
        fromFMP(input_value)
      }
    }, [input_value])

    return(
        <div className="mx-auto w-11/12 p-1 md:p-2">
        <p className="text-2xl">Search...</p>
        <input type="text" name="name_search" id="nms" placeholder="Enter Stock or Ticker Name Here" className="border-0 outline-none rounded-[2rem] p-2 md:p-4 my-2 md:my-4 w-10/12 text-lg md:text-xl text-black" onChange={(e)=> changeInput(e.target.value)} />
        <div className="search_results">
            <p className="text-md md:text-lg">
                {
                    results.map((item: any) => (
                        <Link href={`/stock/${item.symbol}`} className="block underline" key={item.symbol}>
                            {item.name} ({item.symbol})
                            </Link>
                    ))
                }
            </p>
        </div>
        </div>
    )
}