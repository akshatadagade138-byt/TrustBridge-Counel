import HeroSection from "@/components/sections/HeroSection";
import WhySection from "@/components/sections/WhySection";
import CenterQuote from "@/components/sections/CenterQuote";
import TrustValueGrid from "@/components/sections/TrustValueGrid";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main data-testid="home-page">
      <HeroSection />
      <WhySection />
      <CenterQuote />
      <TrustValueGrid />
      <ContactSection />
    </main>
  );
}
