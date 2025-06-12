"use client";

import { useState } from 'react';
import TradePanel from './TradePanel';

export default function StockView({ symbol }: { symbol: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Trade Demo Button - shown on mobile */}
      <button 
        onClick={() => setIsOpen(true)}
      className="md:hidden bg-green-500 text-white  px-4 py-2 rounded-lg w-350px text-center mx-auto shadow-lg hover:bg-green-600 transition duration-300 ease-in-out z-50 fixed bottom-1 left-1/2 transform -translate-x-1/2"
      >
        Trade Demo
      </button>

      <div className={`${isOpen ? 'block' : 'hidden'} md:block fixed md:static inset-0 md:inset-auto w-full  md:bg-transparent z-50 md:z-auto p-4 md:p-0`}>
        {isOpen && (
          <button 
            onClick={() => setIsOpen(false)}
            className="md:hidden absolute top-2 right-2 text-xl font-bold text-white "
          >
            ×
          </button>
        )}
        <TradePanel symbol={symbol} />
      </div>
    </div>
  );
}