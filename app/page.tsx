import HomeNav from "./components/HomepageNav";
import { Metadata } from "next";
import { FaInstagram, FaMailBulk } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Hero from "./components/home/hero";
import BodySection from "./components/home/body";
import Footer from "./components/footer";
import AboutUs from "./components/home/aboutUs";
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
      <Footer />
      {/* <Offerings />
      <CTA_Footer /> */}
    </div>
  );
}


function Offerings() {}

function CTA_Footer() {}
