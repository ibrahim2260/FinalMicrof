import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import CTABand from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Why Offer HVAC & Water Heater Financing — The Case for Lease-to-Own",
  description:
    "Learn why offering Microf lease-to-own financing increases HVAC close rates, raises average order value, and turns declined customers into paying jobs. Free to enroll.",
  alternates: { canonical: "https://www.microf.com/contractors/why-offer-financing" },
};

const objections = [
  {
    objection: "My customers say they'll think about it.",
    reality: "They're not thinking — they're financing. When you offer a payment option, the same-day yes rate jumps significantly.",
  },
  {
    objection: "I already use another financing company.",
    reality: "Most programs decline customers with challenged credit. Microf approves the ones your current lender turns down — it's additive, not a replacement.",
  },
  {
    objection: "My customers don't want financing.",
    reality: "Customers who can't pay cash almost always say they'll think about it. A monthly payment option lets them say yes today.",
  },
  {
    objection: "It sounds complicated to set up.",
    reality: "Enrollment is free and takes minutes. Microf training is brief. Most contractors are ready to offer same-day after signing up.",
  },
];

export default function WhyOfferFinancingPage() {
  return (
    <>
      <PageHero
        eyebrow="The business case"
        headline="Financing isn't optional anymore. It's a competitive advantage."
        subhead="Contractors who offer lease-to-own close more jobs, win more replacements, and leave fewer deals on the table. Here's the data."
        primaryCta={{ label: "Become a Partner — Free", href: "/contractors/become-a-partner" }}
        breadcrumbs={[{ label: "Contractors", href: "/contractors" }, { label: "Why Offer Financing" }]}
        variant="green"
      />

      <main id="main-content">
        {/* Core argument */}
        <section className="section-pad" style={{ background: "var(--color-white)" }}>
          <div className="container-tight">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--color-brand-500)" }}>The numbers</span>
                <h2 className="mb-6 text-balance">Every declined financing customer is a lost job.</h2>
                <p className="leading-relaxed mb-5" style={{ color: "var(--color-slate)", fontSize: "1.0625rem" }}>
                  The average HVAC replacement costs $5,000–$12,000. That&apos;s a lot of money for any household to absorb upfront. When customers can&apos;t pay cash and your financing program declines them, they either delay the job — or call a competitor who says yes.
                </p>
                <p className="leading-relaxed" style={{ color: "var(--color-slate)", fontSize: "1.0625rem" }}>
                  Microf&apos;s lease-to-own program is built specifically for customers with challenged credit — the ones traditional lenders won&apos;t approve. Adding Microf means adding a &ldquo;yes&rdquo; where there was previously only &ldquo;no.&rdquo;
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "30%+", label: "Avg. close rate increase", note: "TODO: confirm with client" },
                  { value: "24 hrs", label: "Contractor funding time", note: "" },
                  { value: "$0", label: "Cost to enroll", note: "" },
                  { value: "Minutes", label: "Customer approval time", note: "" },
                ].map(({ value, label, note }) => (
                  <div key={label} className="rounded-2xl p-6 text-center" style={{ background: "var(--color-brand-50)", border: "1px solid var(--color-brand-100)" }}>
                    <p className="text-3xl font-extrabold mb-1" style={{ color: "var(--color-brand-500)", fontFamily: "var(--font-display)" }}>{value}</p>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--color-slate)" }}>{label}</p>
                    {note && <p className="text-xs" style={{ color: "var(--color-muted)" }}>{note}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Objection handling */}
        <section className="section-pad" style={{ background: "var(--color-brand-900)" }}>
          <div className="container-tight">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--color-brand-400)" }}>Objections answered</span>
              <h2 className="text-white text-balance">We&apos;ve heard every reason not to offer financing.</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {objections.map(({ objection, reality }) => (
                <div key={objection} className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <p className="text-sm font-semibold text-white mb-2">&ldquo;{objection}&rdquo;</p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>{reality}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How payment works for contractors */}
        <section className="section-pad" style={{ background: "var(--color-white)" }}>
          <div className="container-tight max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--color-brand-500)" }}>Getting paid</span>
              <h2 className="text-balance">You get paid. Fast.</h2>
            </div>
            <div className="space-y-4">
              {[
                { step: "1", title: "Customer approved", body: "Your customer applies and receives a real-time decision." },
                { step: "2", title: "Installation complete", body: "You complete the installation as normal. No changes to your process." },
                { step: "3", title: "Verify and submit", body: "Submit job completion through the dealer portal or mobile app." },
                { step: "4", title: "Payment deposited", body: "Funds hit your bank account within 24–48 business hours. Reliable, every time." },
              ].map(({ step, title, body }) => (
                <div key={step} className="flex gap-4 p-5 rounded-2xl" style={{ background: "var(--color-paper)", border: "1px solid var(--color-line)" }}>
                  <div className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center font-bold" style={{ background: "var(--color-brand-500)", color: "white", fontFamily: "var(--font-display)" }}>{step}</div>
                  <div>
                    <p className="font-semibold mb-0.5" style={{ color: "var(--color-ink)" }}>{title}</p>
                    <p className="text-sm" style={{ color: "var(--color-slate)" }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABand
          headline="The math is simple. More approvals = more jobs."
          body="Free enrollment. Real-time customer decisions. Contractor funding in 24–48 hours."
          primaryLabel="Enroll Free Today"
          primaryHref="/contractors/become-a-partner"
          primaryExternal={false}
          phone="855-498-8200"
          variant="green"
        />
      </main>
      <Footer />
    </>
  );
}
