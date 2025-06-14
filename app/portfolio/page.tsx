
"use client";

import { useEffect, useState } from "react";

type Holdings = {
  [symbol: string]: number;
};

type Transaction = {
  type: "buy" | "sell";
  symbol: string;
  amount: number;
  date: string;
};

const PortfolioPage = () => {
  const [holdings, setHoldings] = useState<Holdings>({});
  const [balance, setBalance] = useState<string>("0");
   const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const storedHoldings = localStorage.getItem("holdings");

    if (storedHoldings) {
      try {
        const parsedHoldings = JSON.parse(storedHoldings);
        setHoldings(parsedHoldings);
      } catch (err) {
        console.error("Error parsing holdings:", err);
      }
    }
  }, []);

  useEffect(() => {
    const storedBalance = localStorage.getItem("balance") || "0";
    const storedHoldings = JSON.parse(localStorage.getItem("holdings") || "{}");
    const storedTransactions = JSON.parse(localStorage.getItem("transactions") || "[]");


    setBalance(storedBalance);
    setHoldings(storedHoldings);
    setTransactions(storedTransactions);
  }, []);

  return (
    <main className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">📊 User Dashboard</h1>

      <h3 className="text-lg font-semibold mt-4">Holdings</h3>
      <ul className="list-disc ml-6">
        {Object.keys(holdings).length === 0 && <li>No holdings found</li>}
        {Object.entries(holdings).map(([symbol, shares]) => (
          <li key={symbol}>
            {symbol}: {shares} shares
          </li>
        ))}
      </ul>
      <div className="bg-white rounded-xl shadow p-4 mb-6">
         <h2 className="text-lg font-semibold text-gray-700">💰 Balance</h2>
         <p className="text-xl text-green-600 font-bold">${balance}</p>
      </div>
    </main>
  );
};

export default PortfolioPage;

