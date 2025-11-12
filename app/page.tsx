
import HeroSection from "./components/Home/HeroSection";
import UpperBanner from "./components/Home/UpperBanner";
import TestimonialBanner from "./components/Home/TestimonialBanner";
import MiddleBanner from "./components/Home/MiddleBanner";
import ContentSection from "./components/Home/ContentSection";
import LowerBanner from "./components/Home/LowerBanner";
import PlatformSection from "./components/Home/PlatformSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="font-sans">
      <HeroSection />
      <UpperBanner />
      <TestimonialBanner />
      <MiddleBanner />
      <ContentSection />
      <LowerBanner />
      <PlatformSection />
      <Footer />
    </div>
  );
}
