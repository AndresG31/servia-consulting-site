
import HeroSection from "./components/sections/HeroSection";
import UpperBanner from "./components/sections/UpperBanner";
import TestimonialBanner from "./components/sections/TestimonialBanner";
import MiddleBanner from "./components/sections/MiddleBanner";
import ContentSection from "./components/sections/ContentSection";
import LowerBanner from "./components/sections/LowerBanner";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <div className="font-sans">
      <HeroSection />
      <UpperBanner />
      <TestimonialBanner />
      <MiddleBanner />
      <ContentSection />
      <LowerBanner />
      <Footer />
    </div>
  );
}
