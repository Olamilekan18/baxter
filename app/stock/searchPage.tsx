'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import ZeroMatch from './zeroMatch';
import data from '@/logos_array';
import logo_pic from '../../design_assets/SVG.png';

const fmp_key = process.env.NEXT_PUBLIC_FMP_KEY;

export default function StockSearchPage() {
  const [input_value, changeInput] = useState('');

  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    function fromFMP(searchTerm: string) {
      const string_response = Array(
        data.filter(
          (item) =>
            item.Ticker.includes(searchTerm.toUpperCase()) ||
            item.Name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      setResults(string_response);
      console.log(string_response);
    }
    if (input_value.length > 1) {
      fromFMP(input_value);
    }
  }, [input_value]);

  return (
    <div className="mx-auto w-11/12 p-1 md:p-2">
      <input
        type="text"
        name="name_search"
        id="nms"
        placeholder="Enter Stock or Ticker Name Here"
        className="border-0 outline-none rounded-[2rem] p-2 md:p-4 my-2 md:my-4 w-10/12 text-lg md:text-2xl text-black"
        onChange={(e) => changeInput(e.target.value)}
      />
      <div className="search_results">
        {results[0] && results[0].length > 0 ? (
          results[0].map((item: any) => (
            <div
              className="grid gap-x-2 grid-cols-12 md:gap-x-4 p-1 md:p-2 my-1 md:my-2 items-center"
              key={item.Ticker}
            >
              <div className="col-span-1">
                {
                  <img
                    src={`https://cdn.brandfetch.io/${item.url}/w/400/h/400?c=1idERn_mT3M_sg0-LYT`}
                    alt={item.Ticker}
                    className="h-[3.5rem] w-[3.5rem] rounded-full object-cover"
                    loading="lazy"
                  />
                }
              </div>

              <Link
                href={`/stock/${item.Ticker}`}
                className="block text-xl md:text-2xl col-span-9"
                key={item.Ticker}
              >
                <p>{item.Ticker}</p>
                <p className="underline">{item.Name}</p>
              </Link>
            </div>
          ))
        ) : input_value.length > 3 ? (
          <ZeroMatch />
        ) : null}
      </div>
    </div>
  );
}
