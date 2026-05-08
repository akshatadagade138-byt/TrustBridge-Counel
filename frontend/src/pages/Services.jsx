import ServicesShowcase from "@/components/sections/ServicesShowcase";

export default function Services() {
  return (
    <main data-testid="services-page">
      {/* Page header — DARK band */}
      <section
        className="relative pt-[140px] pb-24 overflow-hidden grain-overlay text-cream"
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
              Services
            </span>
          </div>
          <h1 className="font-serif font-light text-cream text-[48px] sm:text-[64px] md:text-[80px] leading-[1.02] tracking-[-0.01em]">
            Tailored work for the
            <br />
            <span className="italic text-gold">rooms that matter.</span>
          </h1>
          <p className="mt-10 max-w-2xl text-sand/85 text-xl leading-relaxed font-light">
            Three offerings, each shaped around a different audience — but
            anchored in the same disciplined approach to clarity, structure,
            and outcome.
          </p>
        </div>
      </section>

      {/* LIGHT — full showcase */}
      <ServicesShowcase showHeader={false} />
    </main>
  );
}
