import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import OurWorks from "@/components/sections/services/web-dev/OurWorks";
import WhyUs from "@/components/sections/WhyUs";
import DigitalGrowthEcosystem from "@/components/sections/DigitalGrowthEcosystem";
import FAQ from "@/components/sections/FAQ";
import LogoCloud from "@/components/sections/LogoCloud";
import Contact from "@/components/sections/Contact";
import CircularGallery from "@/components/CircularGallery";

export default function Home() {
  return (
    <>
      <Hero />
      <div>
        <div className="relative z-10">
          <About />
          <Services />
          <OurWorks />
          <WhyUs />
          <DigitalGrowthEcosystem />
          <FAQ />
          <LogoCloud />
          <Contact />
          <section className="w-full h-[350px] sm:h-[600px]">
            <CircularGallery />
          </section>
        </div>
      </div>
    </>
  );
}
