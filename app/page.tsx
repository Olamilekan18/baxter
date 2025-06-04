import HomeNav from "./components/HomepageNav";
import { Metadata } from "next";
import { FaInstagram, FaMailBulk } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Hero from "./components/home/hero";
import BodySection from "./components/home/body";
import Footer from "./components/footer";
import AboutUs from "./components/home/aboutUs";
import Features from "./components/home/features";
export const metadata: Metadata = {
  title: "Baxter: Guided Investments for a Better Today",
};

export default function Home() {
  return (
    <div className="grid w-full">
      <HomeNav />
      <Hero />
      <AboutUs />
      <BodySection />
      <Features />
      <Footer />
    </div>
  );
}

// function CTA_Footer(){
//   let date = new Date()
//   return(
//     <>
//     <section className="p-2 my-2 md:p-4 md:my-4 text-center" id="cta" >
//       <p className="text-2xl md:text-4xl">
//         Start Your Investment Journey Today!
//       </p>
//       <p className="my-2 md:my-4 sm:max-xl:text-xl lg:text-3xl">
//         Join the thousands of investors who utilise Baxter to help grow their portfolios and trade safely and securely. Whether you're a seasoned trader or just starting out, Baxter has all of the tools that you need to succeed. Sign up for our free tier <span className="bold">here</span> or our <span>Pro</span> tier here.
//       </p>
//       <a className="rounded-2xl bg-pink-700 text-white hover:bg-pink-500 p-1 md:p-2 text-2xl md:text-3xl my-2 md:my-4 w-6/12 md:w-4/12 bgrid justify-self-center block">Get Started</a>
//     </section>
//     <footer className="grid md:grid-cols-5">
//       <div>
//         <p className="text-2xl md:text-4xl font-bold">
//           Baxter.
//         </p>
//         <p>&copy; {date.getFullYear()} Baxter. <a className="inline" href={'https://github.com/vilio316'}>vilio316</a></p>
//       </div>

//       <div>
//         <p className="link-topic">About Us</p>
//         <a>
//           What we Do
//         </a>
//         <a>
//           Who We Are
//         </a>
//         <a>
//           Our Staff
//         </a>
//         <a>
//           Work Policies @ Baxter
//         </a>
//         <a>Company Values</a>

//       </div>

//       <div>
//       <p className="link-topic">
//         Careers
//       </p>
//       <a>
//         Open Vacancies
//       </a>
//       <a>
//         Write for Us
//       </a>
//       <a>
//         Requirements for International Staff
//       </a>
//       <a>
//         The Management Team
//       </a>
//       </div>

//       <div>
//         <p className="link-topic">
//           Legal
//         </p>
//         <a>Terms and Conditions Agreement</a>
//         <a>Privacy Policy</a>
//         <a>Copyright and Attribution Policy</a>
//       </div>

//       <div>
//         <p className="link-topic">Contact Us</p>
//         <p className="text-[1.75rem] my-2 lg:my-4">Reach out to us on any of the through the following channels:</p>
//         <div className="flex gap-x-4 justify-items-center justify-center">
//           <FaMailBulk  size={'1.75rem'} className="hover:fill-pink-700"/>
//           <FaInstagram  size={'1.75rem'} className="hover:fill-pink-700" />
//           <FaGithub size={'1.75rem'} className="hover:fill-gray-700"/>
//           <FaLinkedin size={'1.75rem'} className="hover:fill-blue-700" />
//           <FaXTwitter size={'1.75rem'} />
//         </div>
//       </div>
//     </footer>
//     </>
//   )
// }
