import LineChart from './chartComps';
import {
  companyNews,
  companyProfile,
  quoteHL,
  earnings,
  deltaPrice,
  getMarketStatus,
} from './apiLoaders';
import NewsItem from '@/app/components/NewsItem';
import TradePanel from '@/app/components/TradePanel';

export default async function APIRender(props: {
  symbol: string;
  timeframe?: number;
}) {
  const symb_result = await companyProfile(props.symbol);
  const price_report = await quoteHL(props.symbol.toLocaleUpperCase());
  const earningsData = await earnings(props.symbol.toUpperCase());
  const newsReports = await companyNews(props.symbol.toUpperCase());
  const filteredNewsReports = newsReports.filter(
    (report) => report.image.length > 1
  );
  const priceChanges = await deltaPrice(props.symbol.toUpperCase());
  const usable = priceChanges[0];
  const { holiday, isOpen, session } = await getMarketStatus();
  const oneChange = usable['1D'];
  const monthChange = usable['1M'];
  const yearToDay = usable['1Y'];
  const threeMonthChange = usable['3M'];
  const sixMonthChange = usable['6M'];

  let change;
  if (props.timeframe && props.timeframe == 30) {
    change = monthChange;
  } else if (props.timeframe && props.timeframe == 365) {
    change = yearToDay;
  } else if (props.timeframe && props.timeframe == 90) {
    change = threeMonthChange;
  } else if (props.timeframe && props.timeframe == 180) {
    change = sixMonthChange;
  } else {
    change = oneChange;
  }

  const { c } = price_report;
  const { currency, logo, ticker, name, marketCapitalization, exchange } =
    symb_result;
  return (
    <>
      {/* <div>
        <p className="my-1 md:my-2 text-xl md:text-2xl underline">
            Company Details
        </p>
        <p className="text-md md:text-xl">Market Cap: {currency} {
            marketCapitalization > 1000000 ? (marketCapitalization / 1000000).toFixed(2) : (marketCapitalization / 1000).toFixed(2)} {marketCapitalization > 1000000 ? "trillion" : "billion"}
  </p>

        <p className="earnings_analysis text-xl md:text-2xl my-1 md:my-2 underline">
            Earnings
            </p>
            <div className="text-lg md:text-xl">
            {
                earningsData.map((item: {
                    quarter: string | number, 
                    year: string | number,
                    surprisePercent: number,
                    actual: number
                }) => (
                    <div key={`${item.quarter} ${item.year}`}>
                        <p className="text-justify">Q{item.quarter} {item.year} : {`$${item.actual.toFixed(2)}`} (<span className={`${item.surprisePercent > 0? 'text-green-700': 'text-red-700'}`}>
                            {item.surprisePercent > 0 ? `+`: ''}{`${item.surprisePercent.toFixed(2)}%`} </span>)</p>
                    </div>
                ))
            }
            </div>
       </div> */}

      <div className="grid grid-cols-4">
        <div className="graphs md:col-span-3 my-1 md:my-2">
          <LineChart
            symbol={props.symbol}
            change={change}
            timeframe={props.timeframe}
          />
        </div>

        <div>
          <TradePanel symbol={props.symbol.toUpperCase()} />
        </div>
      </div>

      {/* 
{filteredNewsReports.length > 0 ?
    <div className="company_news_data grid col-span-1">
        <div>
            <p className="text-lg md:text-4xl my-4">
                Latest Company News
            </p>
            {
                filteredNewsReports.slice(0,15).map(
                   (article) => <NewsItem object={article} key={article.id}/>
                )
            }
        </div>
    </div>  : null }
    */}
    </>
  );
}
