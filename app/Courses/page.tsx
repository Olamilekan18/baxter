'use client';

import { useState, useEffect } from 'react';
import CourseCard from '../Courses/components/CourseCard';
import StockHomeNav from '../components/stock/stockNav';
import Footer from '../components/footer';

type Course = {
  id: string;
  title: string;
  youtubeurl: string;
  content: string;
  duration?: string;
};

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function CoursesPage() {
  const [progress, setProgress] = useState<Record<string, number>>({});
  const [courses, setCourses] = useState<Course[]>([]);
  const [watchProgress, setWatchProgress] = useState(0)

  useEffect(() => {
    const courseData = [
      {
        title: 'How To Invest Like the Best',
        youtubeurl: 'https://www.youtube.com/watch?v=ZwXVy-Kee-8',
        content:
          '#### What you will learn\n• The four habits shared by elite investors.\n• How diversification, compounding, and psychology work together.\n• A simple blueprint for creating your own lifetime investing plan.\n\n#### Key concepts explained\n1. **Pay-yourself-first** – Treat investing as a non-negotiable bill. Automate transfers the morning your salary arrives so saving is effortless.\n2. **Emergency fund first** – Park 3–6 months of expenses in a high-yield account to avoid panic-selling when life happens.\n3. **Asset allocation** – Split money between equities, bonds, and cash using an age-based glide path (e.g., 110 − your age = % in stocks).\n4. **Time in the market > timing the market** – Missing just the 10 best trading days per decade typically halves total returns.\n\n#### Step-by-step blueprint\n1. Open a low-cost brokerage and a separate savings account.\n2. Calculate your “investable surplus” (income − essential bills − emergency fund contribution).\n3. Set up an automatic monthly purchase into a broad index ETF (e.g., S&P 500) and a local-market fund for geographic balance.\n4. Rebalance annually: sell overweight winners, buy laggards to restore target percentages.\n5. Review goals each January—then ignore day-to-day noise.\n\n#### Real-world case study\nWarren Buffett’s 1988 Coca-Cola buy: $1 billion turned into $20 billion+ by 2025—almost entirely through reinvested dividends and patient holding.\n\n#### Activity\nWrite your own one-page “Investment Policy Statement” covering risk tolerance, target allocation, and automatic contribution size. Share with a study buddy for accountability.\n\n#### Common pitfalls\n✘ Trading every headline.  \n✘ Concentrating in a single hot sector.  \n✘ Investing before building an emergency cushion.\n\n#### Takeaway\nElite investors are methodical, boring, and relentlessly long-term. Adopt their systems, not their stock picks.',
      },
      {
        title: 'Why Should I Invest?',
        youtubeurl: 'https://www.youtube.com/watch?v=8g9F91inwOU',
        content:
          '#### What you’ll learn\n• How inflation quietly erodes idle cash.  \n• The math of compound growth (Rule of 72).  \n• Historical returns of stocks vs. bonds vs. savings accounts.\n\n#### Key concepts explained\n1. **Inflation** – At 3 % inflation, ₦1 000 today buys only ₦744 worth of goods in 10 years. Investing must outpace this.\n2. **Compounding** – Earnings are reinvested so growth accelerates. The Rule of 72 estimates doubling time: 72 ÷ annual % return.\n3. **Opportunity cost** – Every naira left dormant forfeits potential gains.\n\n#### Historical perspective\n• Average annual real (after-inflation) return 1926-2024:  \n – U.S. stocks ~7 %  \n – Government bonds ~2 %  \n – Cash ~0 %  \nA long-term stock investor saw purchasing power quadruple every 20–25 years; a saver barely kept up.\n\n#### Worked example\nInvest ₦100 000 yearly at 8 %. Years to ₦10 million (future naira): ~18. Stop after the first five years and leave the money to grow: final pot halves to ~₦5 million—showing the cost of delaying.\n\n#### Interactive exercise\nOpen any compound-interest calculator and test how delaying by 5 or 10 years changes your results. Screenshot the graph for your notes.\n\n#### Common pitfalls\n✘ Confusing high nominal returns with high real returns (always subtract inflation).  \n✘ Thinking investing is “too risky” but ignoring the guaranteed loss of purchasing power in cash.\n\n#### Takeaway\nInvesting turns time into a money-making ally; procrastination turns it into your biggest expense.',
      },
      {
        title:
          'How to Invest In Nigerian Stock Market and Earn Passive Income ',
        youtubeurl: 'https://youtu.be/xyuDYPvOyYk?si=wjug0H9XfF98NOBt',
        content:
          'How to Invest In Nigerian Stock Market and Earn Passive Income ',
      },
      {
        title: 'What Is a Stock?',
        youtubeurl: 'https://www.youtube.com/watch?v=dGBpjtrAIW8',
        content:
          '#### What you’ll learn\n• The legal meaning of “share of ownership.”  \n• How common vs. preferred shares differ.  \n• Ways shareholders can earn returns.\n\n#### Share structure 101\n| Type | Rights | Typical Owners |\n|------|--------|----------------|\n| **Common** | Vote, potential dividends, last in liquidation | Public investors |\n| **Preferred** | No vote, fixed dividends, priority in liquidation | Institutions, income seekers |\n\n#### Rights embedded in a share\n1. **Voting** – Elect board members, approve mergers.  \n2. **Dividends** – Cash or stock payouts (not guaranteed).  \n3. **Residual claim** – Receive assets if the company is liquidated (after creditors).\n\n#### Order of claims in liquidation\nCreditors → Bondholders → Preferred → Common. Common shareholders therefore demand higher expected returns.\n\n#### Example: Apple Inc.\n• 16 billion diluted shares outstanding. Buying 1 share ≈ 0.000000006 % of Apple. Yet over 20 years, that sliver compounded 25 x in price plus dividends.\n\n#### Quiz\nTrue/False – A company must distribute profits as dividends. (False.)\n\n#### Takeaway\nOwning stock makes you a business partner, with the same exposure to both profits and pitfalls.',
      },
      {
        title: 'What Is an ETF?',
        youtubeurl: 'https://www.youtube.com/watch?v=jmvtdsd3-gM',
        content:
          '#### What you’ll learn\n• How ETFs marry diversification with stock-like convenience.  \n• The mechanics of the creation-redemption process that keeps prices in line.  \n• Cost, tax, and liquidity considerations.\n\n#### Anatomy of an ETF\n1. **Basket** – Holds dozens to thousands of securities following an index (e.g., S&P 500) or theme (e.g., clean energy).  \n2. **Share** – Trades intraday on an exchange at market prices.  \n3. **Authorized Participants (APs)** – Large institutions that swap baskets for ETF shares, arbitraging away pricing gaps.\n\n#### Passive vs. active ETFs\n• **Passive** – Track an index; lower fees (often 0.03 %–0.10 %).  \n• **Active** – Portfolio manager aims to outperform; higher fees (0.5 %+), may have higher turnover.\n\n#### Tracking error\nSmall difference between ETF return and index return caused by fees, sampling, or cash drag. Look for < 0.2 % annually.\n\n#### Expense ratio impact\nPaying 1 % vs. 0.05 % on a ₦5 million portfolio over 30 years (8 % growth) costs ≈ ₦3 million in lost gains—nearly as much as your original investment!\n\n#### Activity\nCompare two ETFs that track the same index but charge different fees. Use an online calculator to estimate 20-year cost difference.\n\n#### Takeaway\nETFs give small investors instant diversification, but fees and liquidity require a quick check before clicking “buy.”',
      },
      {
        title: 'What Is the Stock Market?',
        youtubeurl: 'https://www.youtube.com/watch?v=riliQVx2A_w',
        content:
          '#### What you’ll learn\n• How exchanges, brokers, and clearinghouses interact.  \n• The flow of an order from your phone to the market.  \n• Key terms: bid, ask, spread, market maker.\n\n#### Market plumbing in 60 seconds\n1. Place a **market order** in your broker app.  \n2. Order routes to an exchange (e.g., NYSE).  \n3. A **market maker** matches your buy with someone’s sell and quotes two prices: **bid** (buy) and **ask** (sell).  \n4. After execution, the trade clears through a clearinghouse (DTCC) on **T+2** (moving to T+1 in 2025).\n\n#### Types of orders\n| Order | When to use |\n|-------|-------------|\n| Market | Immediate fill, price uncertainty |\n| Limit  | Control price, no guarantee of fill |\n| Stop-loss | Exit automatically if price drops below X |\n\n#### After-hours & pre-market\nLower liquidity widens spreads; beginners should stick to regular hours.\n\n#### Circuit breakers\nIf an index drops 7 %, 13 %, or 20 % in a single day, exchanges pause trading to calm panic.\n\n#### Activity\nLook up today’s bid-ask spread for two large-cap stocks and two thinly traded small-caps. Notice the cost of illiquidity.\n\n#### Takeaway\nThe stock market is a sophisticated but highly efficient auction. Understanding its mechanics helps you trade with confidence and lower costs.',
      },
      {
        title: 'What Are Stock Indexes?',
        youtubeurl: 'https://www.youtube.com/watch?v=RTM3L6V2tWs',
        content:
          '#### What you’ll learn\n• The purpose of indexes as economic thermometers.  \n• Different weighting schemes and how they affect performance.  \n• How index rebalancing works.\n\n#### Weighting methods\n| Method | Example | Quirk |\n|--------|---------|-------|\n| Market-cap | S&P 500 | Bigger companies dominate |\n| Price-weight | Dow Jones 30 | $400 stock moves index more than $40 stock |\n| Equal-weight | RSP ETF | Small stocks get same weight as giants |\n\n#### Rebalancing\nMost indexes revisit weights quarterly; some (e.g., Nasdaq-100) limit single-company weightings to maintain diversification.\n\n#### Using indexes\n1. **Benchmark** – Compare your portfolio to the S&P 500 or a local index.  \n2. **Invest** – Buy index funds/ETFs that replicate the basket.  \n3. **Trade derivatives** – Futures and options on indexes help hedge risk (advanced).\n\n#### Activity\nPick any index and list its top 10 holdings and percentages. How concentrated is it? Would you feel comfortable having 40 % in the top two names?\n\n#### Takeaway\nIndexes simplify market noise into a single number—but the recipe (weighting) changes the flavor of that number.',
      },
      {
        title: 'What Are IPOs?',
        youtubeurl: 'https://www.youtube.com/watch?v=AojpE4ctvm0',
        content:
          '#### What you’ll learn\n• Step-by-step journey from private startup to publicly traded giant.  \n• Pricing mechanics and the “first-day pop.”  \n• How lock-ups and quiet periods protect early investors.\n\n#### IPO timeline\n1. Board votes to pursue an IPO; hire investment banks as **underwriters**.  \n2. File an S-1 prospectus; disclose financials, risks, use of proceeds.  \n3. **Roadshow** – management pitches to institutional investors.  \n4. Price range set; underwriters allocate shares.  \n5. Shares debut; trading begins on the exchange.  \n6. **Lock-up period** (90–180 days) restricts insiders from selling en masse.\n\n#### Why IPOs are often under-priced\nBanks aim for a successful first-day market; a 10–20 % “pop” rewards early buyers but leaves cash on the table for the company.\n\n#### Alternatives to traditional IPO\n• **Direct listing** – skips underwriters; price set purely by market.  \n• **SPAC merger** – go public via a shell company.  \n• **Crowd-funded IPO** – sell small blocks to retail investors pre-listing.\n\n#### Activity\nDownload any recent S-1 filing (e.g., Airbnb 2020) and highlight: revenue growth, net loss, and stated “use of proceeds.”\n\n#### Takeaway\nAn IPO is a pivotal publicity and fundraising event—not an automatic bargain. Always read the prospectus.',
      },
      {
        title: 'Bull vs. Bear Markets',
        youtubeurl: 'https://www.youtube.com/watch?v=g776g7Q9LaE',
        content:
          '#### What you’ll learn\n• Statistical definitions vs. psychological reality of market cycles.  \n• Economic indicators that often precede bulls and bears.  \n• Portfolio moves to consider in each phase.\n\n#### Market cycle psychology\n1. **Optimism → Euphoria** (Bull) – valuations stretch, IPOs boom.  \n2. **Anxiety → Capitulation** (Bear) – prices free-fall, news feels apocalyptic.  \n3. **Despair → Hope** – smart money re-enters, cycle resets.\n\n#### Economic clues\n| Indicator | Bull Signal | Bear Signal |\n|-----------|------------|-------------|\n| GDP | Rising > 3 % | Contracting |\n| Unemployment | Falling | Rising sharply |\n| Yield curve | Normal/steep | Inverted |\n\n#### Strategies\n• **Bull** – Dollar-cost average, ride winners, but rebalance to avoid concentration.  \n• **Bear** – Revisit emergency fund, maintain long horizon, harvest tax losses, consider adding defensive sectors (consumer staples, utilities).\n\n#### Historical examples\n• Dot-com Bust 2000-2002: −49 % S&P 500.  \n• Global Financial Crisis 2008-2009: −56 %.  \n• COVID-19 Crash 2020: −34 % in 33 days—fastest bear ever, followed by record bull.\n\n#### Activity\nChart the S&P 500 over the past 25 years and mark bull and bear phases; note average length and magnitude.\n\n#### Takeaway\nBull and bear markets are inevitable. Building a rules-based response plan beats guessing when the next turn arrives.',
      },
      {
        title: 'Market Capitalization',
        youtubeurl: 'https://www.youtube.com/watch?v=RhdhCckqKU0',
        content:
          '#### What you’ll learn\n• How to compute market cap and why it matters.  \n• The difference between market cap and enterprise value.  \n• How cap buckets map to risk and return.\n\n#### Market cap formula\nShare Price × Shares Outstanding = Market Capitalization.\n\n#### Enterprise value (EV)\nEV = Market Cap + Total Debt − Cash. EV reflects *total* price to buy the company, important for takeovers and valuation.\n\n#### Cap buckets & style boxes\n| Bucket | Cap Range | Typical Traits |\n|--------|-----------|----------------|\n| Mega | > $200 B | Stable, global, dividend payers |\n| Large | $10 B–$200 B | Blue-chips, broad analyst coverage |\n| Mid | $2 B–$10 B | Growth runway, medium volatility |\n| Small | $300 M–$2 B | Higher growth & risk |\n| Micro | < $300 M | Illiquid, speculative |\n\n#### Free-float adjustment\nIndexes often exclude insider-controlled shares to better reflect actual tradeable supply.\n\n#### Activity\nPick three companies of different cap sizes. Calculate market cap, EV, and dividend yield. Which looks riskiest? Why?\n\n#### Takeaway\nMarket cap is a fast size gauge, but enterprise value and free-float give deeper insight into market perception and deal pricing.',
      },
      {
        title: 'Growth vs. Value Stocks',
        youtubeurl: 'https://www.youtube.com/watch?v=hG26kX3rNbM',
        content:
          '#### What you’ll learn\n• Fundamental differences between growth and value investing styles.  \n• Metrics screens to identify each.  \n• How style rotation influences performance.\n\n#### Growth profile\n• Revenue & EPS growth ≥ 15 % YoY.  \n• High P/E, P/S, PEG ratios (> 2).  \n• Often reinvest earnings; low or no dividends.  \n• Examples: cloud-software, biotech startups.\n\n#### Value profile\n• Low P/E (below sector average), high dividend yield.  \n• Stable cash flows; often mature industries.  \n• May face temporary challenges that depress price.  \n• Examples: banks trading at 0.8 × book value.\n\n#### PEG ratio (P/E ÷ Growth rate)\nA growth stock with P/E 40 and 40 % growth has PEG = 1 → fairly priced by this measure.\n\n#### Style rotation\nOver long horizons value and growth deliver similar returns but at different times. 2020-2023 favored growth; 2024-2025 value rebounded as rates rose.\n\n#### Activity\nScreen 20 stocks for P/E and five-year EPS growth. Classify each as growth, value, or blend.\n\n#### Takeaway\nOwning both styles helps balance economic cycles and investor sentiment swings.',
      },
      {
        title: 'Do’s & Don’ts of Investing',
        youtubeurl: 'https://www.youtube.com/watch?v=sqAhnZRjLaI',
        content:
          '#### What you’ll learn\n• Behavioral biases that wreck portfolios.  \n• Proven habits that compound returns.  \n• A checklist to audit your own behavior.\n\n#### Do’s\n✔ Diversify across sectors, geographies, and asset classes.  \n✔ Keep costs low (seek ETFs < 0.15 % expense ratio).  \n✔ Reinvest dividends automatically.  \n✔ Document each trade’s thesis in a journal.\n\n#### Don’ts\n✘ React emotionally to headlines (loss aversion).  \n✘ Chase meme stocks or tips without research (FOMO).  \n✘ Ignore taxes and transaction fees.  \n✘ Borrow excessively to invest.\n\n#### Behavioral biases in action\n• **Overconfidence** – Assuming your pick is “obvious,” skipping diversification.  \n• **Recency bias** – Expecting yesterday’s winner to soar forever.  \n• **Confirmation bias** – Only reading news that supports your view.\n\n#### Self-audit checklist\n1. Did I diversify adequately?  \n2. Do I know my expense ratios?  \n3. Is my thesis written down?  \n4. Have I set an exit plan (time or fundamental)?\n\n#### Takeaway\nMastering your own psychology often beats mastering complex models.',
      },
      {
        title: 'How To Make Money in the Stock Market',
        youtubeurl: 'https://www.youtube.com/watch?v=0-7LT3SM3yk',
        content:
          '#### What you’ll learn\n• The components of total return.  \n• Income strategies beyond simple buy-and-hold.  \n• How taxes influence net gains.\n\n#### Total return formula\nPrice Appreciation + Dividends + Other cash distributions − Taxes − Fees.\n\n#### Dividend Reinvestment Plans (DRIPs)\nAutomatically convert cash dividends into additional shares—boosts compounding and dollar-cost averages purchase price.\n\n#### Covered-call income (advanced)\nSell call options on a stock you own to collect premium; caps upside but generates cash flow.\n\n#### Tax efficiency tips (generalized)\n• Hold > 1 year to qualify for lower capital-gains tax rates (jurisdiction dependent).  \n• Use tax-advantaged retirement accounts when available.  \n• Harvest losses to offset gains.\n\n#### Worked scenario\n₦1 million in a 3 % dividend stock reinvested and 6 % price growth → 9 % total return ≈ ₦90 000 first year, and more each subsequent year as the base compounds.\n\n#### Activity\nUse an online DRIP calculator to see 10-, 20-, and 30-year outcomes for a dividend aristocrat of your choice.\n\n#### Takeaway\nUnderstanding—and reinvesting—every component of return is the fastest legal way to snowball wealth.',
      },
      {
        title: 'Earnings Per Share (EPS)',
        youtubeurl: 'https://www.youtube.com/watch?v=x_0xwmvJraw',
        content:
          '#### What you’ll learn\n• How basic vs. diluted EPS are calculated.  \n• Why share buybacks often boost EPS.  \n• Limits of EPS as a stand-alone metric.\n\n#### Calculating basic EPS\n(Net Profit − Preferred Dividends) ÷ Weighted-average shares.\n\n#### Diluted EPS\nAccounts for options, warrants, and convertible securities that could become common shares. Provides a conservative profitability view.\n\n#### Buyback effect\nReducing share count via buybacks lifts EPS even if profit is flat—important to separate *real* growth from “per-share” optics.\n\n#### Red flags\n• EPS up but revenue flat → may rely on buybacks or cost-cutting.  \n• One-time gains (asset sales) inflating net income.  \n• Seasonal businesses—compare to same quarter last year, not prior quarter.\n\n#### Activity\nFind a company whose EPS rose last year but whose total profit fell—explain why in one paragraph.\n\n#### Takeaway\nEPS is a powerful snapshot but only when paired with revenue, cash flow, and share-count trends.',
      },
      {
        title: 'Price-to-Earnings (P/E) Ratio',
        youtubeurl: 'https://www.youtube.com/watch?v=YZ3cfUef-Z4',
        content:
          '#### What you’ll learn\n• Trailing vs. forward P/E.  \n• Sector-specific ‘normal’ ranges.  \n• When a low P/E is *not* a bargain.\n\n#### Variants\n| Variant | Formula | Use |\n|---------|---------|-----|\n| **Trailing-12-month** | Price ÷ last 12 mo EPS | Widely cited |\n| **Forward** | Price ÷ next-year EPS estimate | Growth forecasting |\n| **CAPE (Shiller)** | Price ÷ 10-yr inflation-adjusted EPS | Smooths cycles |\n\n#### Danger zones\n• Low P/E with shrinking sales (value trap).  \n• Very high P/E in cyclical firms near peak earnings (energy, semiconductors).\n\n#### PEG ratio refresher\nPEG < 1 can indicate undervaluation relative to growth; > 2 may imply overpricing.\n\n#### Activity\nCompare the forward P/E of two rival firms. How much extra are investors willing to pay for the faster-growing company? Is the premium justified?\n\n#### Takeaway\nP/E is a quick filter—pass candidates through deeper analyses before buying.',
      },
      {
        title: 'How To Start Day Trading As A Beginner In 2025',
        youtubeurl: 'https://youtu.be/xHU5MHuUSKI?si=9mLpLWi-sZAGrc-5',
        content: 'How To Start Day Trading As A Beginner In 2025',
      },
      {
        title: 'Debt-to-Equity (D/E) Ratio',
        youtubeurl: 'https://www.youtube.com/watch?v=L7GoNXTXC_0',
        content:
          '#### What you’ll learn\n• How leverage amplifies both gains and losses.  \n• Sector norms for D/E.  \n• Complementary leverage metrics.\n\n#### Interpreting D/E\nD/E = Total Liabilities ÷ Shareholders’ Equity.  \n> 1 means more debt than equity; < 1 means majority equity financing.\n\n#### Sector context\n| Sector | Typical D/E |\n|--------|-------------|\n| Utilities | 1.0–2.5 |\n| Tech | 0.2–0.8 |\n| Financials | Varies; regulation caps ratios |\n\n#### Supporting ratios\n• **Interest-coverage** = EBIT ÷ Interest Expense (> 5 is healthy).  \n• **Debt/EBITDA** (< 3 preferred for non-utilities).\n\n#### Example\nCompany A: D/E = 2 → interest-coverage = 1.5 → red flag; even small earnings drop may jeopardize bond covenants.\n\n#### Activity\nChoose a favorite company; compare its D/E, interest-coverage, and debt/EBITDA to sector averages. Summarize risk in three sentences.\n\n#### Takeaway\nLeverage can turbocharge returns or sink a firm; use multiple ratios and sector benchmarks to judge prudently.',
      },
      {
        title: 'How To Know What Stocks to Buy',
        youtubeurl: 'https://www.youtube.com/watch?v=m0WJmgwMmH8',
        content:
          '#### What you’ll learn\n• A repeatable five-step research process.  \n• Qualitative vs. quantitative filters.  \n• Tools for building and tracking a watch-list.\n\n#### Five-step process\n1. **Understand the business** – Read the 10-K summary; explain revenue drivers like you’re teaching a friend.\n2. **Check financial strength** – Look for rising revenue, healthy gross margin, low leverage.\n3. **Value the company** – Compare P/E, EV/EBITDA, and discounted cash-flow (DCF) to peers.\n4. **Assess moat & management** – Search for network effects, patents, cost advantages; review CEO tenure and insider ownership.\n5. **Identify catalysts** – New product cycles, regulatory approvals, or margin expansion that could unlock value.\n\n#### Quantitative screens\n| Metric | Minimum | Why |\n|--------|---------|-----|\n| ROE | > 15 % | Capital efficiency |\n| Gross Margin | > 40 % | Pricing power |\n| Debt/EBITDA | < 2 | Balance-sheet safety |\n\n#### Tools\n• Free: Yahoo Finance, Finviz screener, annual-report PDFs.  \n• Premium: Morningstar, Value Line for deeper analytics.\n\n#### Activity\nSelect two companies in the same industry. Complete the five-step checklist and decide which offers a better risk-adjusted opportunity.\n\n#### Takeaway\nStock picking is detective work—blend numbers, narrative, and catalysts to build conviction before you click “buy.”',
      },
    ].map((course) => ({
      ...course,
      id: course.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, ''),
    }));

    setCourses(courseData);
    // Load progress from localStorage
    const savedProgress = localStorage.getItem('courseProgress');
    if (savedProgress) setProgress(JSON.parse(savedProgress));
  }, []);

  useEffect(() => {
    const watched = JSON.parse(localStorage.getItem('watchedVideos') || '[]');
    setWatchProgress((watched.length / courses.length) * 100);
  }, [courses.length]);

  const trackProgress = (courseId: string) => {
    const newProgress = {
      ...progress,
      [courseId]: Math.min((progress[courseId] || 0) + 25, 100),
    };
    setProgress(newProgress);
    localStorage.setItem('courseProgress', JSON.stringify(newProgress));
  };

  return (
    <div className="min-h-screen bg-131712">
      <StockHomeNav />
      <header className="bg-primary text-white py-8">
        <div className="container mt-10 text-center mx-auto px-4">
          <h1 className="text-3xl font-bold">Investment Courses</h1>
          <p className="mt-2">Track your learning journey</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              //   progress={progress[course.id] || 0}
              //   onTrackProgress={() => trackProgress(course.id)}
            />
          ))}
        </div>
              <div className="text-right text-sm mt-3 ">{Math.round(watchProgress)}% completed</div>
      </main>
      <Footer />
    </div>
  );
}
