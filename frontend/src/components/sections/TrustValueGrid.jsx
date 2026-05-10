import {
  Lock,
  Scale,
  Layers,
  Compass,
  Handshake,
  Eye,
} from "lucide-react";

const VALUES = [
  {
    title: "Confidential & Secure",
    body:
      "Every conversation lives in a closed room. Discretion is not a feature — it is the foundation.",
    icon: Lock,
  },
  {
    title: "Neutral & Unbiased",
    body:
      "No sides taken. No agendas planted. Clarity is the only outcome we are loyal to.",
    icon: Scale,
  },
  {
    title: "Structured & Solution-Focused",
    body:
      "Sessions follow a clear architecture — diagnose patterns, de-escalate, decide.",
    icon: Layers,
  },
  {
    title: "Respectful & Professional",
    body:
      "Adult-to-adult dialogue. No blame work, no theatre — just considered, careful work.",
    icon: Handshake,
  },
  {
    title: "Clarity Over Assumptions",
    body:
      "We replace stories with facts, projections with patterns, and reactions with responses.",
    icon: Eye,
  },
  {
    title: "Real Situations, Real Resolution",
    body:
      "From boardroom standoffs to bedroom silences — practical work for the lives you actually live.",
    icon: Compass,
  },
];

export default function TrustValueGrid() {
  return (
    <section
      data-testid="trust-value-section"
      className="relative py-28 md:py-18 grain-overlay"
      style={{
        background:
          "linear-gradient(180deg, #F7F2EE 0%, #ECE2D6 100%)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-20">
          <h2 className="font-serif font-light text-espresso text-[40px] md:text-[56px] leading-[1.02] tracking-[-0.005em]">
            What You <span className="italic text-walnut">Can</span> Expect.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {VALUES.map(({ title, body, icon: Icon }, idx) => (
            <div
              key={title}
              data-testid={`trust-value-card-${idx}`}
              className="group relative bg-cream/95 rounded-[24px] border border-sand/60 p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_28px_60px_-30px_rgba(59,42,36,0.22)]"
            >
              <div className="flex items-center justify-between mb-7">
                <div className="w-11 h-11 rounded-full flex items-center justify-center bg-ivory border border-sand/70 group-hover:border-gold/50 transition-colors">
                  <Icon size={18} className="text-walnut group-hover:text-gold transition-colors" />
                </div>
                <span className="font-serif italic text-walnut/40 text-base">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="font-serif font-medium text-espresso text-[24px] md:text-[26px] leading-tight mb-3">
                {title}
              </h3>
              <p className="text-walnut/80 text-[15px] leading-relaxed font-light">
                {body}
              </p>

              <div className="editorial-divider opacity-30 mt-8" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
