
import HeroSection from "./components/sections/HeroSection";
import UpperBanner from "./components/sections/UpperBanner";
import ClientLogos from "./components/sections/ClientLogos";
import BigStats from "./components/sections/BigStats";
import TestimonialBanner from "./components/sections/TestimonialBanner";
import TeamPreview from "./components/sections/TeamPreview";
import MiddleBanner from "./components/sections/MiddleBanner";
import StickyProcess from "./components/sections/StickyProcess";
import LowerBanner from "./components/sections/LowerBanner";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <div className="font-sans">
      <HeroSection />
      <UpperBanner />
      <ClientLogos />
      <BigStats />
      <TestimonialBanner />
      <TeamPreview />
      <MiddleBanner />
      <StickyProcess />
      <LowerBanner />
      <Footer />
    </div>
  );
}
