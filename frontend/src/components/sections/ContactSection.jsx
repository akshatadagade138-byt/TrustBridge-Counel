import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

const SUBJECTS = [
  "Couples / Relationship",
  "Corporate / Boardroom",
  "Founder & Co-founder",
  "Family / Inheritance",
  "Other",
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: SUBJECTS[0],
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please share your name, email, and a brief message.");
      return;
    }
    setSubmitting(true);
    // Static for now — request will be wired to a Google Sheet endpoint later.
    await new Promise((r) => setTimeout(r, 700));
    toast.success("Thank you — your request has been received in confidence.", {
      description: "We will reach out within one business day.",
    });
    setForm({
      name: "",
      email: "",
      phone: "",
      subject: SUBJECTS[0],
      message: "",
    });
    setSubmitting(false);
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-28 md:py-36 overflow-hidden grain-overlay"
      style={{
        background:
          "linear-gradient(180deg, #ECE2D6 0%, #F7F2EE 100%)",
      }}
    >
      <div
        aria-hidden
        className="absolute -top-32 -right-40 w-[640px] h-[640px] rounded-full blur-3xl opacity-50"
        style={{
          background:
            "radial-gradient(closest-side, rgba(176,141,87,0.25), transparent)",
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14">
        {/* Left — editorial intro */}
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 mb-6">
            <span className="gold-divider" />
            <span className="eyebrow">Book a Consultation</span>
          </div>
          <h2 className="font-serif font-light text-espresso text-[40px] md:text-[54px] leading-[1.04] tracking-[-0.005em]">
            A quiet room.
            <br />
            A clear <span className="italic text-walnut">conversation.</span>
            <br />
            A considered <span className="text-gold italic">next step.</span>
          </h2>

          <p className="mt-7 text-walnut/85 text-lg leading-relaxed font-light max-w-md">
            Share a little about your situation. Every enquiry is treated with
            full confidentiality. We will respond personally within one
            business day.
          </p>

          <div className="mt-12 space-y-5">
            {[
              ["Confidential", "Conversations stay between us. Always."],
              ["Neutral", "No sides. No advice-giving. Only structure."],
              ["Practical", "Useful within the first session, not the tenth."],
            ].map(([k, v]) => (
              <div key={k} className="flex items-start gap-4">
                <span className="mt-2 w-6 h-px bg-gold shrink-0" />
                <div>
                  <p className="font-serif italic text-espresso text-lg">{k}.</p>
                  <p className="text-walnut/75 text-sm font-light">{v}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            data-testid="contact-form"
            className="relative bg-cream/90 backdrop-blur-md border border-sand/60 rounded-[28px] p-8 md:p-12 shadow-[0_30px_80px_-40px_rgba(59,42,36,0.25)]"
          >
            <p className="font-serif italic text-walnut/60 text-base mb-10">
              In confidence —
            </p>

            <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
              <FieldUnderline
                id="contact-name"
                label="Your name"
                value={form.name}
                onChange={update("name")}
                placeholder="First & last name"
                required
              />
              <FieldUnderline
                id="contact-email"
                label="Email"
                type="email"
                value={form.email}
                onChange={update("email")}
                placeholder="you@example.com"
                required
              />
              <FieldUnderline
                id="contact-phone"
                label="Phone (optional)"
                value={form.phone}
                onChange={update("phone")}
                placeholder="+1 555 000 0000"
              />
              <div className="flex flex-col">
                <label
                  htmlFor="contact-subject"
                  className="eyebrow text-walnut mb-3"
                >
                  Nature of conversation
                </label>
                <select
                  id="contact-subject"
                  data-testid="contact-subject"
                  value={form.subject}
                  onChange={update("subject")}
                  className="bg-transparent border-b border-espresso/20 focus:border-gold outline-none py-3 font-light text-ink text-[15px] tracking-wide cursor-pointer"
                >
                  {SUBJECTS.map((s) => (
                    <option key={s} value={s} className="bg-cream text-ink">
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-10">
              <label
                htmlFor="contact-message"
                className="eyebrow text-walnut mb-3 block"
              >
                What would clarity look like for you?
              </label>
              <textarea
                id="contact-message"
                data-testid="contact-message"
                value={form.message}
                onChange={update("message")}
                rows={5}
                required
                placeholder="A short paragraph is plenty."
                className="w-full bg-transparent border-b border-espresso/20 focus:border-gold outline-none py-3 font-light text-ink text-[15px] leading-relaxed resize-none"
              />
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-between gap-6">
              <p className="text-[11px] tracking-[0.28em] uppercase text-mocha font-light">
                Confidential · Encrypted · Never shared
              </p>
              <button
                type="submit"
                disabled={submitting}
                data-testid="contact-submit-button"
                className="cta-gold inline-flex items-center gap-3 font-sans text-[13px] tracking-[0.18em] uppercase rounded-full px-8 py-4 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? "Sending…" : "Request Consultation"}
                <ArrowRight size={16} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function FieldUnderline({ id, label, value, onChange, placeholder, type = "text", required }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="eyebrow text-walnut mb-3">
        {label}
      </label>
      <input
        id={id}
        data-testid={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="bg-transparent border-b border-espresso/20 focus:border-gold outline-none py-3 font-light text-ink text-[15px] tracking-wide placeholder:text-walnut/30"
      />
    </div>
  );
}
