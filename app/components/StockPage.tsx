
import TradePanel from '@/app/components/TradePanel';

type Props = {
  params: {
    symbol: string;
  };
};

export default function StockPage({ params }: Props) {
  return (
    <div className="grid grid-cols-2 gap-6 p-6">
      <TradePanel symbol={params.symbol.toUpperCase()} />
    </div>
  );
}
