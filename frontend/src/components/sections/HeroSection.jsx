import HeroVisual from "@/components/site/HeroVisual";
import { ShieldCheck, Scale, Compass, Heart } from "lucide-react";

const TRUST_BADGES = [
  { label: "Confidential & Secure", icon: ShieldCheck },
  { label: "Neutral & Supportive", icon: Scale },
  { label: "Solution Focused", icon: Compass },
  { label: "Respectful Approach", icon: Heart },
];

export default function HeroSection() {
  const handleBook = (e) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      data-testid="hero-section"
      className="relative min-h-[100vh] pt-[100px] pb-20 overflow-hidden grain-overlay"
      style={{
        background:
          "linear-gradient(180deg, #F7F2EE 0%, #F2EBE3 60%, #ECE2D6 100%)",
      }}
    >
      {/* Ambient color washes */}
      <div
        aria-hidden
        className="absolute -top-32 -left-40 w-[640px] h-[640px] rounded-full blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(closest-side, rgba(216,195,176,0.7), transparent)",
        }}
      />
      <div
        aria-hidden
        className="absolute top-40 right-[-200px] w-[680px] h-[680px] rounded-full blur-3xl opacity-50"
        style={{
          background:
            "radial-gradient(closest-side, rgba(176,141,87,0.25), transparent)",
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14 lg:gap-10 items-center">
        {/* Left content */}
        <div className="lg:col-span-7 animate-fade-up">
          <div className="flex items-center gap-3 mb-8">
            <span className="gold-divider" />
            <span className="eyebrow">Conflict & Communication Strategy</span>
          </div>

          <h1 className="font-serif font-light text-espresso leading-[1.02] tracking-[-0.01em] text-[44px] sm:text-[56px] md:text-[68px] lg:text-[78px]">
            Where Communication
            <br />
            <span className="italic text-walnut">Breaks Down,</span>
            <br />
            I Build <span className="text-gold italic">Alignment.</span>
          </h1>

          <p className="mt-8 max-w-xl text-walnut/85 text-lg md:text-[19px] leading-relaxed font-light">
            From boardrooms to relationships, I work at the intersection of
            conflict, communication, and performance — helping you move from
            tension to clarity with precision.
          </p>

          <p className="mt-6 max-w-xl text-ink/65 text-[15px] leading-relaxed font-light">
            I am a Conflict & Communication Strategist. I help couples,
            corporates, and business leaders identify and resolve the
            communication patterns that create conflict — bringing clarity,
            alignment, and forward movement. My role is to help you understand
            patterns, de-escalate situations, and make clear decisions —
            whether that means repairing the relationship or separating
            without unnecessary damage.
          </p>

          {/* CTA */}
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              onClick={handleBook}
              data-testid="hero-cta-button"
              className="cta-gold font-sans text-[13px] tracking-[0.18em] uppercase rounded-full px-8 py-4"
            >
              Book a Clarity-Communication Session
            </a>
            <a
              href="/services"
              data-testid="hero-secondary-cta"
              className="font-sans text-[13px] tracking-[0.22em] uppercase text-walnut hover:text-espresso transition-colors flex items-center gap-2 px-2 py-2"
            >
              Explore Services <span aria-hidden>→</span>
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-14 flex flex-wrap gap-3">
            {TRUST_BADGES.map(({ label, icon: Icon }) => (
              <div
                key={label}
                data-testid={`trust-badge-${label.toLowerCase().replace(/\s+/g, "-").replace("&", "and")}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-cream/70 backdrop-blur-md border border-espresso/10 text-walnut text-[11px] tracking-[0.22em] uppercase font-light shadow-[0_8px_24px_-18px_rgba(59,42,36,0.3)]"
              >
                <Icon size={14} className="text-gold" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right visual */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-in">
          <HeroVisual />
        </div>
      </div>

      {/* Bottom hairline */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="editorial-divider" />
      </div>
    </section>
  );
}
