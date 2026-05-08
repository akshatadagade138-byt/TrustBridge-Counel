import HeroVisual from "@/components/site/HeroVisual";
import { ShieldCheck, Scale, Compass, Heart, ArrowUpRight } from "lucide-react";

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
      className="relative min-h-[100vh] pt-[110px] pb-24 overflow-hidden grain-overlay text-cream"
      style={{
        background:
          "radial-gradient(ellipse at 25% 0%, #4A3328 0%, #2F2019 55%, #1F1410 100%)",
      }}
    >
      {/* Vertical left rail */}
      <div
        aria-hidden
        className="hidden md:block absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 text-[10px] tracking-[0.5em] uppercase text-sand/45 font-light pointer-events-none"
        style={{ writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)" }}
      >
        EST · COUNSEL · MEDIATION · STRATEGY
      </div>

      {/* Ambient color washes */}
      <div
        aria-hidden
        className="absolute -top-32 -left-40 w-[640px] h-[640px] rounded-full blur-3xl opacity-35"
        style={{
          background:
            "radial-gradient(closest-side, rgba(176,141,87,0.55), transparent)",
        }}
      />
      <div
        aria-hidden
        className="absolute top-40 right-[-200px] w-[680px] h-[680px] rounded-full blur-3xl opacity-30"
        style={{
          background:
            "radial-gradient(closest-side, rgba(216,195,176,0.45), transparent)",
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-[-200px] left-1/3 w-[520px] h-[520px] rounded-full blur-3xl opacity-25"
        style={{
          background:
            "radial-gradient(closest-side, rgba(176,141,87,0.5), transparent)",
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14 lg:gap-10 items-center">
        {/* Left content */}
        <div className="lg:col-span-7 animate-fade-up">
          <div className="flex items-center gap-3 mb-10">
            <span className="w-14 h-px bg-gold" />
            <span className="text-[11px] tracking-[0.42em] uppercase text-sand/85 font-light">
              Conflict & Communication Strategy
            </span>
          </div>

          <h1 className="font-serif font-light text-cream leading-[1.0] tracking-[-0.015em] text-[44px] sm:text-[58px] md:text-[72px] lg:text-[84px]">
            Where Communication
            <br />
            <span className="italic text-gold">Breaks Down,</span>
            <br />
            I Build <span className="italic text-sand">Alignment.</span>
          </h1>

          <p className="mt-10 max-w-xl text-sand/85 text-lg md:text-[19px] leading-relaxed font-light">
            From boardrooms to relationships, I work at the intersection of
            conflict, communication, and performance — helping you move from
            tension to clarity with precision.
          </p>

          <p className="mt-6 max-w-xl text-cream/65 text-[15px] leading-relaxed font-light">
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
              className="cta-gold inline-flex items-center gap-3 font-sans text-[13px] tracking-[0.14em] rounded-full px-8 py-4"
            >
              Book a Clarity-Communication Session
              <ArrowUpRight size={16} strokeWidth={1.6} />
            </a>
            <a
              href="/services"
              data-testid="hero-secondary-cta"
              className="cta-outline-cream font-sans text-[13px] tracking-[0.14em] rounded-full px-8 py-4 inline-flex items-center gap-2"
            >
              Explore our philosophy
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-14 flex flex-wrap gap-3">
            {TRUST_BADGES.map(({ label, icon: Icon }) => (
              <div
                key={label}
                data-testid={`trust-badge-${label.toLowerCase().replace(/\s+/g, "-").replace("&", "and")}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-cream/[0.05] backdrop-blur-md border border-cream/15 text-cream/85 text-[11px] tracking-[0.22em] uppercase font-light"
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

      {/* Bottom keyword strip */}
      <div className="relative mt-20 max-w-[1280px] mx-auto px-6 lg:px-10">
        <div
          className="h-px w-full mb-6"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(216,195,176,0.25), transparent)",
          }}
        />
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-[11px] tracking-[0.45em] uppercase text-sand/55 font-light">
          <span>Mediation</span>
          <span className="w-1 h-1 rounded-full bg-gold/80" />
          <span>Counsel</span>
          <span className="w-1 h-1 rounded-full bg-gold/80" />
          <span>Strategy</span>
          <span className="w-1 h-1 rounded-full bg-gold/80" />
          <span>Boardroom</span>
          <span className="w-1 h-1 rounded-full bg-gold/80" />
          <span>Family</span>
          <span className="w-1 h-1 rounded-full bg-gold/80" />
          <span>Couples</span>
        </div>
      </div>
    </section>
  );
}
