import HomeNav from "./components/HomepageNav";
import { Metadata } from "next";
import Image from "next/image";
import stock_shot from '../public/stock.jpg'
import APIRender from "./test_route/page";

export const metadata : Metadata = {
  title: 'Baxter: Guided Investments for a Better Today'
}


export default function Home() {
  return (
    <div className="grid w-11/12 mx-auto">
      <HomeNav/>
      <Hero/>
      <APIRender symbol="NVDA"/>
      <BodySection/>
    </div>
  );
}

function Hero(){
  return(
    <section id="hero" className="p-2 my-2 md:p-4 md:my-2">
    <div className="grid text-center justify-items-center">
      <p className="md:text-[10rem] text-6xl my-6">
        Never Make a Wrong Investment Again
      </p>

      <div className="grid md:grid-cols-2 items-center justify-items-center">
      <p className="text-2xl my-4 text-justify indent-4">Baxter is your ultimate tool for making informed investment decisions. We provide up-to-date stock charts, detailed data, and essential guidance to help you navigate the complexities of the stock market with confidence and security. Our goal is to empower individuals, businesses and corporate bodies to make informed decisions and secure their assets over the short and long term. </p>
      <div className="grid justify-items-center">
        <Image src={stock_shot} alt="Stock Shot" className="rounded-xl w-[75%]"/>
      </div>
      </div>

      <span className="justify-self-center bg-pink-700 md:w-2/12 my-4 w-9/12 rounded-[1.75rem] text-center text-2xl hover:font-bold hover:bg-pink-600 transition-all md:hover:w-4/12 p-2">
        Read More...
      </span>
    </div>
    </section>
  )
}

function BodySection(){
  return(
    <section className="p-2 my-2 md:p-4 md:my-2">
      <div className="grid">
        <p className="md:text-4xl text-2xl">
          Why Choose Baxter?
        </p>
        <div className="grid grid-cols-2">
          <div>
          <p>Intuitive Stock Charts</p>

<p>Visualize stock performance with dynamic, interactive charts that are easy to customize and understand. Spot trends, compare stocks, and track historical data all in one place. </p>

<p>Comprehensive Market Data</p>

<p>Stay ahead of the market with up-to-the-minute data, including stock prices, volume, earnings, and more. Baxter equips you with all the information you need to seize opportunities. </p>

<p>Guided Investments</p>

<p>Not sure where to start? Our guided investment tools offer personalized insights and curated stock recommendations based on your goals and risk tolerance.,</p>

<p>Expert Resources</p>

<p>Access a wealth of knowledge through our tutorials, webinars, and articles created by seasoned investors and market analysts. </p>
          </div>
        </div>

      </div>
    </section>
  )
}