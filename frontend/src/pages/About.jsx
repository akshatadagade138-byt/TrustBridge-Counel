import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  GraduationCap,
  Scale,
  Users,
  Building2,
} from "lucide-react";

const PORTRAIT_URL =
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=75";

const CAREER_ARC = [
  {
    plate: "I.",
    period: "The early years",
    title: "Multinational Banking",
    body:
      "A first chapter shaped by precision, structure, and the quiet discipline of working with people whose decisions carried weight.",
  },
  {
    plate: "II.",
    period: "The mid years",
    title: "Head of Marketing",
    body:
      "Leading marketing for a growing enterprise — a school in narrative, persuasion, and the careful choreography of cross-functional teams.",
  },
  {
    plate: "III.",
    period: "The current chapter",
    title: "Law, Mediation & Counselling",
    body:
      "A move into law was not a pivot — it was a return to the underlying question every earlier chapter had been circling: how is this conflict actually being held?",
  },
];

const CREDENTIALS = [
  {
    label: "B.B.M.",
    detail: "Bachelor of Business Management",
    icon: Building2,
  },
  {
    label: "PG · HRM",
    detail: "Postgraduate, Human Resource Management",
    icon: Users,
  },
  { label: "LL.B.", detail: "Bachelor of Laws", icon: Scale },
  {
    label: "Mediation",
    detail: "Formal training in mediation practice",
    icon: GraduationCap,
  },
];

export default function About() {
  return (
    <main data-testid="about-page" className="bg-ivory">
      {/* SECTION 1 — DARK header */}
      <section
        className="relative pt-[140px] pb-32 overflow-hidden grain-overlay text-cream"
        style={{
          background:
            "radial-gradient(ellipse at 25% 0%, #4A3328 0%, #2F2019 55%, #1F1410 100%)",
        }}
      >
        <div
          aria-hidden
          className="absolute -top-32 left-1/4 w-[640px] h-[640px] rounded-full blur-3xl opacity-30"
          style={{
            background:
              "radial-gradient(closest-side, rgba(176,141,87,0.55), transparent)",
          }}
        />

        <div className="relative max-w-[1100px] mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-14 h-px bg-gold" />
            <span className="text-[11px] tracking-[0.42em] uppercase text-sand/85 font-light">
              About the Founder
            </span>
          </div>
          <h1 className="font-serif font-light text-cream text-[48px] sm:text-[64px] md:text-[84px] leading-[1.0] tracking-[-0.015em]">
            Pinkey <span className="italic text-gold">B.</span>
          </h1>
          <p className="mt-5 font-serif italic text-sand/85 text-[22px] md:text-[28px] tracking-tight">
            Conflict & Communication Strategist · Mediator · Counsel
          </p>

          <p className="mt-12 max-w-2xl text-sand/85 text-xl leading-relaxed font-light">
            For close to fifteen years, I have worked at the intersection of
            business, behaviour, and the law — quietly building a practice for
            the moments where clarity matters most.
          </p>
        </div>
      </section>

      {/* SECTION 2 — LIGHT lead */}
      <section
        data-testid="about-lead"
        className="relative py-28 md:py-36 grain-overlay"
        style={{
          background:
            "linear-gradient(180deg, #F7F2EE 0%, #ECE2D6 100%)",
        }}
      >
        <div className="max-w-[1180px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14 items-start">
          {/* Portrait */}
          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[4/5] max-w-[520px]">
              <div
                aria-hidden
                className="absolute -top-6 -left-6 w-[60%] h-[60%] rounded-full blur-3xl opacity-50"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(176,141,87,0.5), transparent)",
                }}
              />
              <div className="relative rounded-[28px] overflow-hidden border border-sand/60 shadow-[0_30px_60px_-30px_rgba(59,42,36,0.25)]">
                <img
                  src={PORTRAIT_URL}
                  alt="Pinkey B. — Founder, TrustBridge Counsel"
                  loading="lazy"
                  className="w-full h-full object-cover aspect-[4/5]"
                />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-[10px] tracking-[0.32em] uppercase text-cream/85 font-light">
                  <span>Plate 01</span>
                  <span className="w-12 h-px bg-gold" />
                  <span>Founder</span>
                </div>
              </div>

              {/* Floating credential chip */}
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-cream/95 backdrop-blur-md border border-sand/60 rounded-2xl px-5 py-4 shadow-[0_18px_40px_-20px_rgba(59,42,36,0.3)]">
                <p className="text-[10px] tracking-[0.32em] uppercase text-mocha font-light">
                  15+ Years
                </p>
                <p className="font-serif italic text-espresso text-base mt-1">
                  Practice & Counsel
                </p>
              </div>
            </div>
          </div>

          {/* Lead body */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="gold-divider" />
              <span className="eyebrow">Background</span>
            </div>
            <h2 className="font-serif font-light text-espresso text-[36px] md:text-[50px] leading-[1.05] tracking-[-0.005em]">
              Fifteen years of decoding
              <br />
              <span className="italic text-walnut">human behaviour.</span>
            </h2>

            <div className="mt-10 space-y-7 text-ink/85 text-[17px] font-light leading-[1.85] max-w-2xl">
              <p>
                My practice has lived at the meeting point of business
                development, training, public relations, human resource
                management, counselling, and mediation. The work has always
                been the same in essence — listen carefully, name what is
                actually happening, and help people move forward with
                dignity.
              </p>
              <p>
                Strong interpersonal instincts and a steady, persistent care
                for the work are what I bring to every room. They are also,
                quietly, what has carried me here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — DARK career arc */}
      <section
        data-testid="about-career"
        className="relative py-28 md:py-36 overflow-hidden grain-overlay text-cream"
        style={{
          background:
            "radial-gradient(ellipse at 75% 0%, #4A3328 0%, #2F2019 55%, #1F1410 100%)",
        }}
      >
        <div
          aria-hidden
          className="absolute -top-40 left-1/3 w-[640px] h-[640px] rounded-full blur-3xl opacity-25"
          style={{
            background:
              "radial-gradient(closest-side, rgba(176,141,87,0.55), transparent)",
          }}
        />

        <div className="relative max-w-[1180px] mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-20">
            <div className="md:col-span-7">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-14 h-px bg-gold" />
                <span className="text-[11px] tracking-[0.42em] uppercase text-sand/85 font-light">
                  The Arc
                </span>
              </div>
              <h2 className="font-serif font-light text-cream text-[40px] md:text-[58px] leading-[1.05] tracking-[-0.005em]">
                A journey across three
                <br />
                <span className="italic text-gold">disciplines.</span>
              </h2>
            </div>
            <div className="md:col-span-5">
              <p className="text-sand/85 text-lg leading-relaxed font-light max-w-md">
                Banking taught me precision. Marketing taught me narrative.
                Law gave me a frame. Together they shaped a single, quiet
                conviction — that communication, well held, prevents almost
                everything that follows.
              </p>
            </div>
          </div>

          <ol className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {CAREER_ARC.map(({ plate, period, title, body }, idx) => (
              <li
                key={title}
                data-testid={`about-arc-${idx}`}
                className="relative rounded-[28px] p-9 md:p-10 backdrop-blur-md"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(216,195,176,0.08) 0%, rgba(90,64,52,0.18) 100%)",
                  border: "1px solid rgba(250,248,246,0.10)",
                }}
              >
                <div className="font-serif italic text-gold text-2xl mb-6">
                  {plate}
                </div>
                <p className="text-[10px] tracking-[0.32em] uppercase text-sand/70 font-light mb-3">
                  {period}
                </p>
                <h3 className="font-serif text-cream text-[26px] md:text-[28px] leading-tight font-medium mb-5">
                  {title}
                </h3>
                <p className="text-cream/75 text-[15px] font-light leading-relaxed">
                  {body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SECTION 4 — LIGHT credentials */}
      <section
        data-testid="about-credentials"
        className="relative py-28 md:py-36 grain-overlay"
        style={{
          background:
            "linear-gradient(180deg, #FAF8F6 0%, #F0E7DA 100%)",
        }}
      >
        <div className="max-w-[1180px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14 items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <span className="gold-divider" />
              <span className="eyebrow">Education & Training</span>
            </div>
            <h2 className="font-serif font-light text-espresso text-[36px] md:text-[50px] leading-[1.05] tracking-[-0.005em]">
              A frame built across
              <br />
              <span className="italic text-walnut">law, business, & people.</span>
            </h2>
            <p className="mt-7 text-walnut/85 text-lg leading-relaxed font-light max-w-md">
              The combination is intentional. Each discipline lends a
              different lens — together they make it possible to read a
              situation properly before recommending what to do with it.
            </p>
          </div>

          <div className="lg:col-span-7">
            <ul className="grid sm:grid-cols-2 gap-5">
              {CREDENTIALS.map(({ label, detail, icon: Icon }, idx) => (
                <li
                  key={label}
                  data-testid={`about-credential-${idx}`}
                  className="group bg-cream/95 rounded-[24px] border border-sand/60 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_24px_60px_-30px_rgba(59,42,36,0.22)]"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-full flex items-center justify-center bg-ivory border border-sand/70 group-hover:border-gold/50 transition-colors">
                      <Icon size={18} className="text-walnut group-hover:text-gold transition-colors" />
                    </div>
                    <span className="font-serif italic text-walnut/40 text-base">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="font-serif text-espresso text-[24px] leading-tight font-medium">
                    {label}
                  </p>
                  <p className="mt-2 text-walnut/75 text-sm font-light leading-relaxed">
                    {detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 5 — DARK philosophy pull quote */}
      <section
        data-testid="about-philosophy"
        className="relative py-32 md:py-44 overflow-hidden grain-overlay text-cream"
        style={{
          background:
            "radial-gradient(ellipse at center, #4A3328 0%, #2F2019 55%, #1A0F0C 100%)",
        }}
      >
        <div
          aria-hidden
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full blur-3xl opacity-25"
          style={{
            background:
              "radial-gradient(closest-side, rgba(176,141,87,0.6), transparent)",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center items-center gap-4 mb-12">
            <span className="w-10 h-px bg-gold/70" />
            <span className="text-[10px] tracking-[0.42em] uppercase text-sand/80 font-light">
              Philosophy
            </span>
            <span className="w-10 h-px bg-gold/70" />
          </div>

          <p className="font-serif text-cream font-light italic text-[28px] sm:text-[36px] md:text-[44px] leading-[1.25] tracking-[-0.005em]">
            “I work at the intersection of{" "}
            <span className="text-gold not-italic">conflict</span>,{" "}
            <span className="text-gold not-italic">communication</span>, and{" "}
            <span className="text-gold not-italic">law</span>. My approach
            goes beyond surface-level resolution — I focus on the patterns,
            emotions, and miscommunication that drive conflict.”
          </p>

          <div className="editorial-divider opacity-30 mt-16 mb-10 max-w-md mx-auto" />

          <p className="text-sand/80 text-[16px] md:text-[18px] font-light leading-relaxed max-w-2xl mx-auto">
            With a foundation in legal reasoning and a strategic communication
            lens, I help individuals and professionals move from reaction to
            clarity — and from escalation to structured resolution.
          </p>
        </div>
      </section>

      {/* SECTION 6 — LIGHT scope + closing */}
      <section
        data-testid="about-scope"
        className="relative py-28 md:py-36 grain-overlay"
        style={{
          background:
            "linear-gradient(180deg, #F7F2EE 0%, #ECE2D6 100%)",
        }}
      >
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-7">
              <div className="flex items-center gap-3 mb-5">
                <span className="gold-divider" />
                <span className="eyebrow">Scope of Practice</span>
              </div>
              <h2 className="font-serif font-light text-espresso text-[36px] md:text-[50px] leading-[1.05] tracking-[-0.005em]">
                Beyond couples —
                <br />
                <span className="italic text-walnut">into the rooms where work happens.</span>
              </h2>
              <div className="mt-8 space-y-5 text-ink/85 text-[17px] font-light leading-[1.85] max-w-2xl">
                <p>
                  My work extends beyond couples and the impact their dynamics
                  have on children, into resolving workplace conflicts —
                  across employer–employee relationships, team leads, and
                  inter-team coordination.
                </p>
                <p>
                  I also help businesses improve communication and alignment,
                  to lift overall performance.
                </p>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="bg-espresso text-cream rounded-[28px] p-9 md:p-10 shadow-[0_30px_60px_-30px_rgba(59,42,36,0.4)] relative overflow-hidden">
                <div
                  aria-hidden
                  className="absolute -top-20 -right-20 w-[200px] h-[200px] rounded-full blur-3xl opacity-50"
                  style={{
                    background:
                      "radial-gradient(closest-side, rgba(176,141,87,0.6), transparent)",
                  }}
                />
                <p className="relative eyebrow text-sand/70 mb-6">The Goal</p>
                <p className="relative font-serif italic text-cream text-[24px] md:text-[28px] leading-snug">
                  Resolve conflict early — before it becomes legal, emotional,
                  or relational damage — through clear and effective
                  communication.
                </p>
                <Link
                  to="/#contact"
                  data-testid="about-final-cta"
                  className="cta-gold cta-pulse group relative inline-flex items-center gap-3 mt-10 font-sans text-[13px] font-medium tracking-[0.14em] rounded-full pl-7 pr-6 py-4"
                >
                  <span>Begin a Conversation</span>
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-espresso text-cream transition-transform duration-500 group-hover:translate-x-1">
                    <ArrowUpRight size={12} strokeWidth={1.8} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
