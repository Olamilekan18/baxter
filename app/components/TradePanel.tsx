'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { isMarketOpen } from '@/app/components/time';

type Props = {
  symbol: string;
};

type Holdings = {
  [symbol: string]: number;
};

type Transaction = {
  symbol: string;
  quantity: number;
  price: number;
  type: 'buy' | 'sell';
  timestamp: string;
};

export default function TradePanel({ symbol }: Props) {
  const API_KEY = process.env.NEXT_PUBLIC_FH_KEY;

  const [marketPrice, setMarketPrice] = useState<number | null>(null);
  const [quantity, setQuantity] = useState<number | ''>('');
  const [balance, setBalance] = useState<number>(1_000_000);
  const [holdings, setHoldings] = useState<Holdings>({});
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [message, setMessage] = useState<string | null>(null);
  const [marketOpen, setMarketOpen] = useState<boolean>(true);

  useEffect(() => {
    const checkMarket = () => setMarketOpen(isMarketOpen());
    checkMarket();
    const interval = setInterval(checkMarket, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedBalance = localStorage.getItem('balance');
      const storedHoldings = localStorage.getItem('holdings');
      const storedTransactions = localStorage.getItem('transactions');

      if (storedBalance) setBalance(parseFloat(storedBalance));
      if (storedHoldings) setHoldings(JSON.parse(storedHoldings));
      if (storedTransactions) setTransactions(JSON.parse(storedTransactions));
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('balance', balance.toString());
    }
  }, [balance]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('holdings', JSON.stringify(holdings));
    }
  }, [holdings]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('transactions', JSON.stringify(transactions));
    }
  }, [transactions]);

  useEffect(() => {
    const fetchPrice = async () => {
      if (!API_KEY) {
        console.error('Missing API key');
        return;
      }
      try {
        const res = await axios.get(
          `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`
        );
        setMarketPrice(res.data.c);
      } catch (error) {
        console.error('Error fetching market price:', error);
      }
    };

    fetchPrice();
  }, [symbol]);

  const estimatedCost =
    marketPrice && typeof quantity === 'number' ? quantity * marketPrice : 0;

  const resetForm = () => setQuantity('');

  const handleBuy = () => {
    if (!marketPrice || typeof quantity !== 'number' || quantity <= 0) {
      setMessage('Enter a valid quantity to buy.');
      return;
    }
    if (estimatedCost > balance) {
      setMessage('❌ Insufficient balance to buy.');
      return;
    }
    const timestamp = new Date().toISOString();
    setBalance(prev => prev - estimatedCost);
    setHoldings(prev => ({
      ...prev,
      [symbol]: (prev[symbol] || 0) + quantity
    }));
    setTransactions(prev => [
      { symbol, quantity, price: marketPrice, type: 'buy', timestamp },
      ...prev
    ]);
    setMessage(`✅ Bought ${quantity} ${symbol} at $${marketPrice.toFixed(2)} each.`);
    resetForm();
  };

  const handleSell = () => {
    if (!marketPrice || typeof quantity !== 'number' || quantity <= 0) {
      setMessage('Enter a valid quantity to sell.');
      return;
    }
    const holdingQty = holdings[symbol] || 0;
    if (quantity > holdingQty) {
      setMessage(`❌ Not enough holdings to sell. You have ${holdingQty} ${symbol}.`);
      return;
    }
    const timestamp = new Date().toISOString();
    setBalance(prev => prev + estimatedCost);
    setHoldings(prev => ({
      ...prev,
      [symbol]: holdingQty - quantity
    }));
    setTransactions(prev => [
      { symbol, quantity, price: marketPrice, type: 'sell', timestamp },
      ...prev
    ]);
    setMessage(`✅ Sold ${quantity} ${symbol} at $${marketPrice.toFixed(2)} each.`);
    resetForm();
  };

  return (
    <div className="bg-[#121212] text-white p-6 rounded-2xl shadow-md">
      <p className="mb-4">
        🕒 Market Status:{' '}
        <span className={marketOpen ? 'text-green-500' : 'text-red-500'}>
          {marketOpen ? 'Open' : 'Closed'}
        </span>
      </p>

      <h2 className="text-xl font-semibold mb-4">Trade {symbol}</h2>

      <div className="space-y-2 mb-6">
        <p>💰 <strong>Balance:</strong> ${balance.toLocaleString()}</p>
        <p>📈 <strong>Market Price:</strong> {marketPrice ? `$${marketPrice.toFixed(2)}` : 'Loading...'}</p>
        <p>📦 <strong>Holdings:</strong> {holdings[symbol] || 0} {symbol}</p>
      </div>

      <div className="mb-4">
        <label className="block mb-1">Quantity</label>
        <input
          type="number"
          value={quantity}
          min={0}
          max={1000}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="w-full p-2 rounded bg-[#1e1e1e] text-white border border-gray-600"
        />
      </div>

      <p className="mb-4">Estimated {quantity ? 'Value' : 'Cost'}: ${estimatedCost.toFixed(2)}</p>

      <div className="flex gap-4">
        <button
          onClick={handleBuy}
          disabled={!marketOpen}
          className={`px-4 py-2 rounded w-full ${
            marketOpen ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-600 cursor-not-allowed'
          }`}
        >
          Buy
        </button>

        <button
          onClick={handleSell}
          disabled={!marketOpen}
          className={`px-4 py-2 rounded w-full ${
            marketOpen ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-600 cursor-not-allowed'
          }`}
        >
          Sell
        </button>
      </div>

      {message && <p className="mt-4 text-sm text-yellow-300">{message}</p>}

      <div className="mt-8">
        <h3 className="text-lg font-bold mb-2">🧾 Transaction History</h3>
        {transactions.length === 0 ? (
          <p>No transactions yet.</p>
        ) : (
          <ul className="text-sm space-y-1 max-h-60 overflow-y-auto pr-2">
            {transactions.map((tx, index) => (
              <li key={index} className="border-b border-gray-700 py-1">
                {tx.type === 'buy' ? '🟢 Buy' : '🔴 Sell'} {tx.quantity} {tx.symbol} at ${tx.price.toFixed(2)} on {new Date(tx.timestamp).toLocaleString()}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
