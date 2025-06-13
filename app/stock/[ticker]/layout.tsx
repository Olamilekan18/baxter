import StockPriceComp from "@/app/components/StockPriceComp";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ticker: string }>;
}) {
  const ticker = (await params).ticker;
  return {
    title: `${ticker.toUpperCase()} Stock Information`,
  };
}

export default async function HouseLayout({
  children,} : {
  children: React.ReactNode;}
) {

  return (
    <div className={`p-1 md:p-2 mx-1 md:mx-2`}>
      <div className="grid">

        {children}
      </div>
    </div>
  );
}
