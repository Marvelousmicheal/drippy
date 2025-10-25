import Benefits from "@/components/benefits";
import Cta from "@/components/cta";
import Explore from "@/components/explore";
import Faq from "@/components/faq";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Header from "@/components/header";

import HeroSection from "@/components/hero-section";
import Platform from "@/components/platform";
import LaunchTimer from "@/components/stats";
import Testimonials from "@/components/testimonials";

const sliderImages = [
  {
    src: "/Hero1.png",
    alt: "The Future of Fashion Commerce",
    title: "THE FUTURE OF FASHION COMMERCE",
    description: "Sell. Shop. Create. All in one place.",
  },
  {
    src: "/Hero2.png",
    alt: "Empowering Fashion Creators",
    title: "EMPOWERING FASHION CREATORS",
    description: "Turning creativity into commerce.",
  },
  {
    src: "/Hero3.png",
    alt: "Fashion Innovation",
    title: "Evolving your Shopping Experience",
    description: "Seamless journeys from scroll to purchase.",
  },
]

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div id="hero-section">
          <HeroSection images={sliderImages} autoPlayInterval={5000} />
        </div>
        <div id="about">
          <LaunchTimer />
        </div>
        <div id="features">
          <Features />
        </div>
        <div id="explore">
          <Explore />
        </div>
        <div id="benefits">
          <Benefits />
        </div>
        <div id="platform">
          <Platform />
        </div>
        <Testimonials />
        <Cta />
        <Faq />
      </main>
      <Footer />

    </>
  );
}