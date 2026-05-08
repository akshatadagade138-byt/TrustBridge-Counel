/**
 * HeroVisual — Pure SVG abstract composition for the right side of the hero.
 *
 * Concept: "two voices meeting" — two arcing fields that converge into a
 * single luminous bridge of light. Translucent layered forms in warm tones
 * with floating editorial accents.
 */
export default function HeroVisual() {
  return (
    <div
      data-testid="hero-abstract-visual"
      className="relative w-full aspect-[4/5] md:aspect-[5/6] lg:aspect-[4/5] max-w-[640px]"
    >
      {/* Soft drifting blobs behind */}
      <div
        aria-hidden
        className="absolute -top-10 -left-10 w-[55%] h-[55%] rounded-full blur-3xl opacity-70 animate-drift-slow"
        style={{
          background:
            "radial-gradient(closest-side, rgba(216,195,176,0.9), rgba(216,195,176,0))",
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 right-0 w-[60%] h-[60%] rounded-full blur-3xl opacity-60 animate-drift-reverse"
        style={{
          background:
            "radial-gradient(closest-side, rgba(176,141,87,0.5), rgba(176,141,87,0))",
        }}
      />
      <div
        aria-hidden
        className="absolute top-1/3 left-1/4 w-[45%] h-[45%] rounded-full blur-3xl opacity-40 animate-drift-slow"
        style={{
          background:
            "radial-gradient(closest-side, rgba(139,107,92,0.55), rgba(139,107,92,0))",
        }}
      />

      {/* Editorial frame */}
      <div className="absolute inset-3 md:inset-6 rounded-[36px] border border-espresso/10 backdrop-blur-[2px] bg-ivory/40 overflow-hidden">
        <svg
          viewBox="0 0 600 720"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden
        >
          <defs>
            <linearGradient id="goldLine" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#B08D57" stopOpacity="0" />
              <stop offset="50%" stopColor="#B08D57" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#B08D57" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="walnutWash" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5A4034" stopOpacity="0.10" />
              <stop offset="100%" stopColor="#5A4034" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FAF8F6" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#FAF8F6" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="archFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#D8C3B0" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#8B6B5C" stopOpacity="0.10" />
            </linearGradient>
          </defs>

          {/* Ambient wash */}
          <rect width="600" height="720" fill="url(#walnutWash)" />

          {/* Two arching fields converging */}
          <path
            d="M-60,520 C120,260 220,180 320,360 C420,540 520,560 660,420"
            stroke="#5A4034"
            strokeOpacity="0.18"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M-40,460 C140,220 260,180 320,340 C400,520 520,500 640,360"
            stroke="#5A4034"
            strokeOpacity="0.12"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M-20,580 C160,340 260,260 320,400 C400,580 520,600 660,500"
            stroke="#5A4034"
            strokeOpacity="0.10"
            strokeWidth="1.2"
            fill="none"
          />

          {/* Sculptural arch (architectural element) */}
          <path
            d="M150,700 L150,360 C150,250 230,180 300,180 C370,180 450,250 450,360 L450,700 Z"
            fill="url(#archFill)"
            opacity="0.85"
          />
          {/* Inner arch outline */}
          <path
            d="M180,700 L180,365 C180,265 245,210 300,210 C355,210 420,265 420,365 L420,700"
            stroke="#3B2A24"
            strokeOpacity="0.18"
            strokeWidth="1.2"
            fill="none"
          />

          {/* Central luminous bridge — gold thread */}
          <path
            d="M40,520 C180,400 250,380 300,380 C350,380 420,400 560,520"
            stroke="url(#goldLine)"
            strokeWidth="1.6"
            fill="none"
          />
          <path
            d="M40,540 C180,430 250,410 300,410 C350,410 420,430 560,540"
            stroke="url(#goldLine)"
            strokeOpacity="0.6"
            strokeWidth="1"
            fill="none"
          />

          {/* Soft center glow */}
          <circle cx="300" cy="380" r="120" fill="url(#centerGlow)" />

          {/* Editorial dots — small punctuation */}
          <circle cx="300" cy="380" r="4" fill="#B08D57" />
          <circle cx="120" cy="180" r="2" fill="#3B2A24" opacity="0.4" />
          <circle cx="500" cy="220" r="2" fill="#3B2A24" opacity="0.4" />
          <circle cx="80" cy="420" r="1.5" fill="#3B2A24" opacity="0.3" />
          <circle cx="540" cy="460" r="1.5" fill="#3B2A24" opacity="0.3" />

          {/* Vertical thin grid lines (editorial) */}
          {[120, 240, 360, 480].map((x) => (
            <line
              key={x}
              x1={x}
              y1="40"
              x2={x}
              y2="700"
              stroke="#3B2A24"
              strokeOpacity="0.05"
              strokeWidth="1"
            />
          ))}

          {/* Top serif label */}
          <text
            x="48"
            y="78"
            fill="#5A4034"
            fontFamily="Cormorant Garamond, serif"
            fontStyle="italic"
            fontSize="22"
            opacity="0.7"
          >
            II.
          </text>
          <text
            x="48"
            y="108"
            fill="#8B6B5C"
            fontFamily="Manrope, sans-serif"
            fontSize="9"
            letterSpacing="3"
            opacity="0.7"
          >
            COMMUNICATION · CLARITY
          </text>

          {/* Bottom serif label removed — caption sits at the bottom row */}
        </svg>

        {/* Floating editorial caption */}
        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs tracking-[0.32em] uppercase text-walnut/70 font-light">
          <span>Plate 02</span>
          <span className="gold-divider" />
          <span>Bridge Study</span>
        </div>
      </div>

      {/* Outer floating chip */}
      <div className="absolute -bottom-6 -left-2 md:-left-6 bg-cream/85 backdrop-blur-md border border-espresso/10 rounded-full px-5 py-2 shadow-[0_18px_40px_-20px_rgba(59,42,36,0.4)]">
        <p className="text-[10px] tracking-[0.32em] uppercase text-walnut">
          From Tension <span className="text-gold">→</span> To Clarity
        </p>
      </div>
    </div>
  );
}
