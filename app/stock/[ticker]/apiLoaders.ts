import { companyProfileResult } from "@/app/type_definitions"

export const api_key = process.env.NEXT_PUBLIC_FH_KEY
const fmp_key = process.env.NEXT_PUBLIC_FMP_KEY

export const base_URL = `https://finnhub.io/api/v1`

export async function companyProfile(symbol: string) {
    const data_request = await fetch(`${base_URL}/stock/profile2?symbol=${symbol}&token=${api_key}`, {
        cache: "force-cache"
    })
    const data: companyProfileResult = await data_request.json()
    return data
}
export async function quoteHL(symbol:string){
    const data_request = await fetch(`${base_URL}/quote?symbol=${symbol}&token=${api_key}` )
    const data = await data_request.json()
    return data
}
export async function earnings(symbol:string) {
    const earn_request = await fetch(`${base_URL}/stock/earnings?symbol=${symbol}&token=${api_key}`, {
        cache: 'force-cache'
    })
    const earn_response = await earn_request.json()
    return earn_response
}

export async function getMarketStatus(){
    const status_request = await fetch(`${base_URL}/stock/market-status?exchange=US&token=${api_key}`)
    const status_response = await status_request.json()
    return status_response
}

export async function deltaPrice(symbol: string){
    const price_change_req = await fetch (`https://financialmodelingprep.com/api/v3/stock-price-change/${symbol}?apikey=${fmp_key}`, {
        cache: 'force-cache'
    })
    const price_change_res = await price_change_req.json()
    return price_change_res
}

export async function companyNews(symbol:string){
    let {date_string_1, date_string_2} = giveDateString(1)
    const news_request = await fetch(`${base_URL}/company-news?symbol=${symbol}&from=${date_string_1}&to=${date_string_2}&token=${api_key}`,{
        cache: 'force-cache'
    })
    const news_response = await news_request.json()
    return news_response
}

export function giveDateString(n: number){
    const curr_date = new Date()
    const curr_stamp= curr_date.getTime()
    const past_date = curr_stamp - (n* 86400 * 1000)
    const lower_date_bound = new Date(past_date)

    function checkValue(input: string | number){
        if(Number(input) < 10){
            return `0${input}`
        }
        else return `${input}`
    }

    if(curr_date.getDay() > 0 || curr_date.getDate() < 6){
    return({
        date_string_1: `${lower_date_bound.getFullYear()}-${checkValue(lower_date_bound.getMonth() + 1)}-${checkValue(lower_date_bound.getUTCDate() )}` ,
        date_string_2: `${curr_date.getFullYear()}-${checkValue(curr_date.getMonth() + 1 ) }-${checkValue(curr_date.getUTCDate())}`
    })
}
    else{
        if(curr_date.getDay() == 0 ){
            let newDateStamp = curr_stamp - (2 * 86400 * 1000)
            let dateToUse = new Date(newDateStamp)
            return({
                date_string_1: `${dateToUse.getFullYear()}-${checkValue(dateToUse.getMonth() + 1)}-${checkValue(dateToUse.getUTCDate() )}`,
                date_string_2: `${dateToUse.getFullYear()}-${checkValue(dateToUse.getMonth() + 1)}-${checkValue(dateToUse.getUTCDate() )}` 
            })
        }
        else{
            let satDateStamp = curr_stamp - (1 * 86400 * 1000)
            let satDateToUse = new Date(satDateStamp)
            return({
                date_string_1: `${satDateToUse.getFullYear()}-${checkValue(satDateToUse.getMonth() + 1)}-${checkValue(satDateToUse.getUTCDate() )}`,
                date_string_2: `${satDateToUse.getFullYear()}-${checkValue(satDateToUse.getMonth() + 1)}-${checkValue(satDateToUse.getUTCDate() )}` 
            })
        }
    }
}

function longTermDate(timeframe: number){
    const curr_date = new Date()
    const curr_stamp= curr_date.getTime()
    const past_date = curr_stamp - (timeframe* 86400 * 1000)
    const lower_date_bound = new Date(past_date)

    function checkValue(input: string | number){
        if(Number(input) < 10){
            return `0${input}`
        }
        else return `${input}`
    }

    return({
        date_string_1: `${lower_date_bound.getFullYear()}-${checkValue(lower_date_bound.getMonth() + 1)}-${checkValue(lower_date_bound.getUTCDate() )}` ,
        date_string_2: `${curr_date.getFullYear()}-${checkValue(curr_date.getMonth() + 1 ) }-${checkValue(curr_date.getUTCDate())}`
    })
}

export async function fetchChartData24H(symbol: string) {
    let {date_string_1, date_string_2

    } = giveDateString(1)
    const stock_data_request = await fetch(`https://financialmodelingprep.com/api/v3/historical-chart/5min/${symbol}?from=${date_string_1}&to=${date_string_2}&apikey=${fmp_key}`)
    const stock_data_response: []= await stock_data_request.json();
    
    return(stock_data_response)
}

export async function fetchDataLongTerm(symbol:string, timeframe:number){
    let {date_string_1, date_string_2} = longTermDate(timeframe)
    const long_term_data = await fetch(`https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?apikey=${fmp_key}&from=${date_string_1}&to=${date_string_2}`)
    const long_term_response = await long_term_data.json()
    return long_term_response
}