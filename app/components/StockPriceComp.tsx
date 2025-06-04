import {
  companyNews,
  companyProfile,
  quoteHL,
  earnings,
  deltaPrice,
  getMarketStatus,
} from '../stock/[ticker]/apiLoaders';

import logo_pic from '../../design_assets/SVG.png';
import Image from 'next/image';

export default async function StockPriceComp(props: {
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
      <div className="grid gap-x-4 p-2">
        <div className="md:col-span-1">
          <div className="wrapper">
            <div className="flex gap-x-2 md:gap-x-2 items-center">
              {logo.length < 1 ? (
                <Image src={logo_pic} alt="Fallback Logo" />
              ) : (
                <img
                  src={logo}
                  className="rounded-full p-1 md:p-2 md:w-[80px] md:h-[80px] w-[50px] h-[50px]"
                />
              )}
              <div className="my-1 lg:my-2">
                <p className="text-xl md:text-3xl">
                  {name} ({ticker})
                </p>
                <p className="text-md md:text-lg">{exchange}</p>
              </div>
            </div>
            
            <div className='flex p-2'>
              <a className='block p-1'>Chart</a>
              <a className='block p-1'>Summary</a>
              <a className='block p-1'>Financials</a>
              <a className='block p-1'>Analytics </a>

            </div>


            <p className="text-lg md:text-2xl">
              {currency} {c.toFixed(2)}
              <span
                className={`px-2 md:px-4 text-lg md:text-2xl ${
                  Number(change) < 0 ? 'text-red-700' : 'text-green-700'
                }`}
              >
                {Number(change) > 0 ? '+' : null}
                {Number(change).toFixed(2)} %
              </span>
            </p>
            <p
              className={`md:text-xl ${
                isOpen ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {isOpen ? 'Market Open' : 'Market Closed'}
            </p>
            <p>{holiday ? holiday : ''}</p>
            <span className="capitalize text-2xl">
              {!isOpen ? session : null}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
