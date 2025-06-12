import StockPriceComp from "../StockPriceComp";
import ChatHead from "./chatHead";
export default function ChartHeader({ ticker }: { ticker: string }) {
  return (
    <>
      <StockPriceComp symbol={ticker} />
      <ChatHead ticker={ticker} />
    </>
  );
}
