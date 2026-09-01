import Hero from "../components/Hero";
import AboutPreview from "../components/AboutPreview";
import ServicesPreview from "../components/ServicesPreview";
import WhyChoose from "../components/WhyChoose";
import Industries from "../components/Industries";
import PortfolioPreview from "../components/PortfolioPreview";
import Process from "../components/Process";
import CTA from "../components/CTA";

function Home() {
 
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <WhyChoose />
      <Industries />
      <PortfolioPreview />
      <Process />
      <CTA />
    </>
  );
}

export default Home;