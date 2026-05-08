/**
 * HeroPortrait — Founder portrait inside an editorial dark-glass frame
 * with a floating quote chip overlay. Uses a placeholder image for now;
 * swap the `imageUrl` value when the founder photo is available.
 */

const PLACEHOLDER_PORTRAIT =
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=75";

export default function HeroPortrait({ imageUrl = PLACEHOLDER_PORTRAIT }) {
  return (
    <div
      data-testid="hero-portrait"
      className="relative w-full aspect-[4/5] md:aspect-[5/6] lg:aspect-[4/5] max-w-[560px]"
    >
      {/* Soft drifting blobs behind */}
      <div
        aria-hidden
        className="absolute -top-10 -left-10 w-[55%] h-[55%] rounded-full blur-3xl opacity-50 animate-drift-slow"
        style={{
          background:
            "radial-gradient(closest-side, rgba(216,195,176,0.55), rgba(216,195,176,0))",
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 right-0 w-[60%] h-[60%] rounded-full blur-3xl opacity-50 animate-drift-reverse"
        style={{
          background:
            "radial-gradient(closest-side, rgba(176,141,87,0.55), rgba(176,141,87,0))",
        }}
      />

      {/* Editorial frame — dark glass */}
      <div
        className="absolute inset-3 md:inset-6 rounded-[36px] border border-cream/15 backdrop-blur-md overflow-hidden shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)]"
        style={{
          background:
            "linear-gradient(160deg, rgba(90,64,52,0.55) 0%, rgba(59,42,36,0.45) 60%, rgba(42,30,25,0.65) 100%)",
        }}
      >
        {/* Image */}
        <img
          src={imageUrl}
          alt="TrustBridge Counsel — founder"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Warm overlay tint to keep cohesion with hero palette */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(59,42,36,0.10) 0%, rgba(59,42,36,0.0) 30%, rgba(31,20,16,0.55) 100%)",
          }}
        />

        {/* Top serif label */}
        <div className="absolute top-6 left-6 text-cream/85">
          <p className="font-serif italic text-[20px] leading-none">II.</p>
          <p className="mt-2 text-[9px] tracking-[0.42em] uppercase text-sand/80 font-light">
            Communication · Clarity
          </p>
        </div>

        {/* Bottom caption */}
        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[10px] tracking-[0.32em] uppercase text-sand/80 font-light">
          <span>Plate 02</span>
          <span className="w-14 h-px bg-gold/70" />
          <span>Founder Study</span>
        </div>
      </div>

      {/* Floating quote chip — editorial pull */}
      <div className="absolute -bottom-10 -left-2 md:-left-8 lg:-left-12 max-w-[300px] bg-espresso/90 backdrop-blur-md border border-cream/10 rounded-2xl px-6 py-5 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.7)]">
        <p className="font-serif italic text-cream text-[17px] leading-[1.4]">
          “Most disputes don’t need a courtroom — they need a{" "}
          <span className="text-gold">bridge.</span>”
        </p>
        <p className="mt-3 text-[10px] tracking-[0.35em] uppercase text-sand/70">
          TrustBridge Counsel
        </p>
      </div>
    </div>
  );
}
