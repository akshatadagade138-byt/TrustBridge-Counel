import HeroSection from "@/components/sections/HeroSection";
import WhySection from "@/components/sections/WhySection";
import CenterQuote from "@/components/sections/CenterQuote";
import TrustValueGrid from "@/components/sections/TrustValueGrid";
import WhoThisIsFor from "@/components/sections/WhoThisIsFor";
import ServicesShowcase from "@/components/sections/ServicesShowcase";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main data-testid="home-page">
      {/* DARK */}
      <HeroSection />
      {/* LIGHT */}
      <WhySection />
      {/* DARK */}
      <CenterQuote />
      {/* LIGHT */}
      <TrustValueGrid />
      {/* DARK */}
      <WhoThisIsFor />
      {/* LIGHT */}
      <ServicesShowcase />
      {/* DARK */}
      <ContactSection />
    </main>
  );
}
