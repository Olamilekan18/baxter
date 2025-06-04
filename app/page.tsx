import HomeNav from "./components/HomepageNav";
import { Metadata } from "next";
import Image from "next/image";
import stock_shot from "../public/stock.jpg";
import { FaInstagram, FaMailBulk } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Hero from "./components/home/hero";
export const metadata: Metadata = {
  title: "Baxter: Guided Investments for a Better Today",
};

export default function Home() {
  return (
    <div className="grid w-full">
      <HomeNav />
      <Hero />
      {/* <BodySection />
      <Offerings />
      <CTA_Footer /> */}
    </div>
  );
}

// function Hero() {
//   return (
//     <section id="hero" className="p-2 my-2 md:p-4 md:my-2">
//       <div className="grid text-center justify-items-center">
//         <p className="md:text-[10rem] text-3xl md:text-6xl my-6">
//           Never Make a Wrong Investment Again
//         </p>

//         <div className="grid md:grid-cols-2 items-center justify-items-center">
//           <p className="text-2xl my-4 text-justify indent-4 blurb">
//             Baxter is your ultimate tool for making informed investment
//             decisions. We provide up-to-date stock charts, detailed data, and
//             essential guidance to help you navigate the complexities of the
//             stock market with confidence and security. Our goal is to empower
//             individuals, businesses and corporate bodies to make informed
//             decisions and secure their assets over the short and long term.{" "}
//           </p>
//           <div className="grid justify-items-center">
//             <Image
//               src={stock_shot}
//               alt="Stock Shot"
//               className="rounded-xl w-[75%]"
//             />
//           </div>
//         </div>

//         <span className="justify-self-center bg-pink-700 md:w-2/12 my-4 w-9/12 rounded-[1.75rem] text-center text-2xl hover:font-bold hover:bg-pink-600 transition-all md:hover:w-4/12 p-2">
//           Read More...
//         </span>
//       </div>
//     </section>
//   );
// }

function BodySection() {
  return (
    <section className="p-2 my-2 md:p-4 md:my-2" id="body">
      <div className="grid">
        <p className="md:text-4xl text-2xl">Why Choose Baxter?</p>
        <div className="grid">
          <div>
            <p className="head_p">Intuitive Stock Charts</p>

            <p className="side_p">
              Visualize stock performance with dynamic, interactive charts that
              are easy to customize and understand. Spot trends, compare stocks,
              and track historical data all in one place.{" "}
            </p>

            <p className="head_p">Comprehensive Market Data</p>

            <p className="side_p">
              Stay ahead of the market with up-to-the-minute data, including
              stock prices, volume, earnings, and more. Baxter equips you with
              all the information you need to seize opportunities.{" "}
            </p>

            <p className="head_p">Guided Investments</p>

            <p className="side_p">
              Not sure where to start? Our guided investment tools offer
              personalized insights and curated stock recommendations based on
              your goals and risk tolerance.,
            </p>

            <p className="head_p">Expert Resources</p>

            <p className="side_p">
              Access a wealth of knowledge through our tutorials, webinars, and
              articles created by seasoned investors and market analysts.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Offerings() {
  return (
    <section className="my-2 md:my-4 p-2 md:p-4" id="offerings">
      <div className="grid">
        <p className="text-2xl md:text-5xl font-bold my-2 md:my-4">
          Features that Set Us Apart
        </p>
        <div>
          <p className="head_p">Customisable Dashboards</p>
          <p className="side_p">
            Tailor your experience by adding the charts and data points that
            matter to you!
          </p>

          <p className="head_p">Smart Alerts</p>
          <p className="side_p">
            Get real-time, up-to-date notifications on stock prices, index funds
            and so much more
          </p>

          <p className="head_p">Comparative Analysis Tools</p>
          <p className="side_p">
            Compare multiple stocks side-by-side to male better decisions.
          </p>

          <p className="head_p">Mobile-Friendly</p>
          <p className="side_p">
            Access Baxter on the go and on the job with our responsive design
            and mobile-friendly architecture.
          </p>
        </div>
      </div>
    </section>
  );
}

function CTA_Footer() {
  let date = new Date();
  return (
    <>
      <section className="p-2 my-2 md:p-4 md:my-4 text-center" id="cta">
        <p className="text-2xl md:text-4xl">
          Start Your Investment Journey Today!
        </p>
        <p className="my-2 md:my-4 sm:max-xl:text-xl lg:text-3xl">
          Join the thousands of investors who utilise Baxter to help grow their
          portfolios and trade safely and securely. Whether you're a seasoned
          trader or just starting out, Baxter has all of the tools that you need
          to succeed. Sign up for our free tier{" "}
          <span className="bold">here</span> or our <span>Pro</span> tier here.
        </p>
        <a className="rounded-2xl bg-pink-700 text-white hover:bg-pink-500 p-1 md:p-2 text-2xl md:text-3xl my-2 md:my-4 w-6/12 md:w-4/12 bgrid justify-self-center block">
          Get Started
        </a>
      </section>
      <footer className="grid md:grid-cols-5">
        <div>
          <p className="text-2xl md:text-4xl font-bold">Baxter.</p>
          <p>
            &copy; {date.getFullYear()} Baxter.{" "}
            <a className="inline" href={"https://github.com/vilio316"}>
              vilio316
            </a>
          </p>
        </div>

        <div>
          <p className="link-topic">About Us</p>
          <a>What we Do</a>
          <a>Who We Are</a>
          <a>Our Staff</a>
          <a>Work Policies @ Baxter</a>
          <a>Company Values</a>
        </div>

        <div>
          <p className="link-topic">Careers</p>
          <a>Open Vacancies</a>
          <a>Write for Us</a>
          <a>Requirements for International Staff</a>
          <a>The Management Team</a>
        </div>

        <div>
          <p className="link-topic">Legal</p>
          <a>Terms and Conditions Agreement</a>
          <a>Privacy Policy</a>
          <a>Copyright and Attribution Policy</a>
        </div>

        <div>
          <p className="link-topic">Contact Us</p>
          <p className="text-[1.75rem] my-2 lg:my-4">
            Reach out to us on any of the through the following channels:
          </p>
          <div className="flex gap-x-4 justify-items-center justify-center">
            <FaMailBulk size={"1.75rem"} className="hover:fill-pink-700" />
            <FaInstagram size={"1.75rem"} className="hover:fill-pink-700" />
            <FaGithub size={"1.75rem"} className="hover:fill-gray-700" />
            <FaLinkedin size={"1.75rem"} className="hover:fill-blue-700" />
            <FaXTwitter size={"1.75rem"} />
          </div>
        </div>
      </footer>
    </>
  );
}
