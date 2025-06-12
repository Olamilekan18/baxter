import APIRender from "./apiCalls";
import ChartHeader from "@/app/components/stock/chartHeader";

export default async function RouteShow({
  params,
}: {
  params: Promise<{ ticker: string }>;
}) {
  function ShowPageItems() {
    return (
      <>
        <ChartHeader ticker={ticker} />
        <APIRender symbol={ticker} />
      </>
    );
  }

  const ticker = (await params).ticker;
  return <>{ticker ? <ShowPageItems /> : null}</>;
}
