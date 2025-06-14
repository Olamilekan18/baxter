"use client";
import { useEffect, useState } from "react"
import { Holdings, Transaction } from "../components/TradePanel"
import Link from "next/link";
import { itemFilter } from "../stock/watchlist/page";

const Dashboard = () => {
    const [holdings, updateHoldings] = useState<Holdings>({});
    const [balance, updateBalance] = useState<string>('0')
    const [transactions, updateTransactions] = useState<Transaction[]>([])

    useEffect(()=> {
        const storedHoldings = localStorage.getItem("holdings");
        if(storedHoldings){
            try{
                const parsedHoldings = JSON.parse(storedHoldings);
                updateHoldings(parsedHoldings)
            } catch(err){
                console.error(err)
            }
        }
    }, []);

    useEffect(()=> {
        const user_balance = localStorage.getItem('balance') || '10'
        const user_holdings = JSON.parse(localStorage.getItem('holdings') ||
        "{}")
        const user_transactions = JSON.parse(localStorage.getItem('transactions') || '[]')

        updateBalance(user_balance);
        updateTransactions(user_transactions)
        updateHoldings(user_holdings)
    }, []);
    
    return(
        <>
        
        <div className="grid p-2 -my-2 mx-auto">
            <p className="text-3xl my-1">
                Welcome Back, James!
            </p>
            <p className="font-semibold text-xl my-4">Your Balance: USD {balance}</p>

            <div className="grid grid-cols-4">
                <div className="col-span-3">
                    <p>Lorem</p>
                    
                </div>

              <div className="grid col-span-1">
            <p className="my-2 underline">Holdings</p>
           {
            Object.entries(holdings).map(([symbol, shares]) => (
               <div key={symbol}>
                    <Link href={`/stock/${symbol}`} className="hover:underline">
                    {symbol}
                    </Link> : 
                <span>{shares}</span>
               </div>
            ))
           }
        </div>
        </div>

            <p className="text-xl my-2 underline">Transaction History</p>
             <ul className="text-sm space-y-3 pr-4">
            {transactions.map((tx, index) => (
              <li
                key={index}
                className="border-b border-gray-700 py-2 px-4 rounded-lg hover:bg-[#333333] transition-all duration-300"
              >
                <p className="flex justify-between items-center">
                  <span>{tx.type === 'buy' ? '🟢 Buy' : '🔴 Sell'}</span>
                
                  <img src={`https://cdn.brandfetch.io/${itemFilter(
                                  tx.symbol
                                )}/w/400/h/400?c=1idERn_mT3M_sg0-LYT`} className='rounded-full max-h-8' alt={`${tx.symbol} Logo`}/>
                </p>
                 
                <p className="text-gray-400 text-xs text-right">
                     <p className="font-semibold">
                    {tx.quantity} {tx.symbol} @ ${tx.price.toFixed(2)}
                  </p>
                  {new Date(tx.timestamp).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        </div>
        </>
    )
}
export default Dashboard

