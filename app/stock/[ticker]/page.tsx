import ChatHead from "@/app/components/stock/chatHead";
import APIRender from "./apiCalls";
import StockPriceComp from "@/app/components/StockPriceComp";

export default async function RouteShow({
  params,
}: {
  params: Promise<{ ticker: string }>;
}) {
  function ShowPageItems() {
    return (
      <>
        <StockPriceComp symbol={ticker} />
        <ChatHead ticker={ticker} />
        <APIRender symbol={ticker} />
      </>
    );
  }

  const ticker = (await params).ticker;
  return <>{ticker ? <ShowPageItems /> : null}</>;
}
