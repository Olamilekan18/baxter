export type companyProfileResult = {
    country: string,
    currency: string,
    exchange: string,
    ipo: string,
    marketCapitalization: number,
    name: string,
    phone: string, 
    shareOutstanding: number,
    ticker: string,
    weburl: string, 
    logo: string,
    finnhubIndustry: string
}

export type quoteResult = {
    c: number,
    h: number,
    l: number,
    o: number,
    pc: number,
    t: number 
}

export type earningsResult = {
    actual: number,
    estimate: number,
    period: string,
    quarter: number,
    surprise: number,
    surprisePercent: number, 
    symbol: string,
    year: number
}[]

export type marketStatusResult = {
    exchange: string,
    holiday: string | null,
    isOpen: boolean,
    session: string | null,
    timezone: string,
    t: number
  }

export type companyNewsResult = {
    category: string,
    datetime: number,
    headline: string,
    id: number,
    image: string,
    related: string,
    source: string,
    summary: string,
    url: string,
  }[]