import { Metadata } from "next";
import StockSearchPage from "./searchPage";
import StockHomeNav from "../components/stock/stockNav";

export const metadata: Metadata = {
  title: "Baxter | Stock Search Tool",
};

export default async function Page() {
  return (
    <>
      <StockHomeNav />
      <StockSearchPage />
    </>
  );
}
