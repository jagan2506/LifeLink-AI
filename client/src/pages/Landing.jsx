import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Stats from "../components/Stats";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import TrustedBy from "../components/TrustedBy";

function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Stats />
      <Footer />
      <TrustedBy />
      <CTA />
    </>
  );
}

export default Landing;