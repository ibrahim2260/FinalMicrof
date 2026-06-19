import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import CTABand from "@/components/sections/CTABand";
import FAQ from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "HVAC Financing for Challenged Credit — Lease-to-Own with No Credit Check",
  description:
    "Microf offers lease-to-own HVAC and water heater financing for homeowners with challenged or no credit. No hard credit check. Plain-language process. Real-time decisions.",
  alternates: { canonical: "https://www.microf.com/homeowners/challenged-credit" },
};

const faqs = [
  { question: "Will applying affect my credit score?", answer: "No. Microf's lease-to-own program does not require a hard credit inquiry, so applying will not impact your credit score in any way." },
  { question: "What if I've been rejected by other financing companies?", answer: "Microf is specifically designed for situations where traditional financing isn't an option. We make decisions based on factors beyond a credit score." },
  { question: "Is this a loan?", answer: "No. Microf offers lease-to-own (rental-purchase) agreements, not loans. This means no interest rate in the traditional sense and no credit check. The total cost of acquiring ownership through leasing is higher than cash — this is disclosed upfront." },
  { question: "How is this different from a payday loan or high-interest financing?", answer: "Microf is not a lender and charges no interest rate. It is a lease-to-own program where you make regular payments and own the equipment at the end of your term. Early payoff discounts are available." },
  { question: "Do I need any documentation to apply?", answer: "The application is simple and straightforward. Your contractor can walk you through the process at the point of decision. Most applicants receive a decision within minutes." },
];

export default function ChallengedCreditPage() {
  return (
    <>
      <PageHero
        eyebrow="For challenged credit"
        headline="We say yes when others say no."
        subhead="Microf's lease-to-own program was built for homeowners with challenged credit, no credit, or a history of financing declines. A broken HVAC or water heater shouldn't mean suffering in the heat or cold."
        breadcrumbs={[{ label: "Homeowners", href: "/homeowners" }, { label: "Challenged Credit" }]}
        variant="dark"
        badge="No credit check required"
      />

      <main id="main-content">
        {/* Empathetic content */}
        <section className="section-pad" style={{ background: "var(--color-white)" }}>
          <div className="container-tight">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="mb-6 text-balance">We understand how stressful this is.</h2>
                <p className="leading-relaxed mb-5" style={{ color: "var(--color-slate)", fontSize: "1.0625rem" }}>
                  Your HVAC system breaks down in July. Your water heater stops working in the middle of winter. You call your bank or a financing company — and they say no.
                </p>
                <p className="leading-relaxed mb-5" style={{ color: "var(--color-slate)", fontSize: "1.0625rem" }}>
                  That&apos;s exactly the situation Microf exists to solve. Our lease-to-own agreements are available regardless of your credit score — and applying won&apos;t affect your score at all.
                </p>
                <p className="leading-relaxed mb-8" style={{ color: "var(--color-slate)", fontSize: "1.0625rem" }}>
                  The process is simple, dignified, and fast. Most customers receive a decision within minutes.
                </p>
                <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl" style={{ background: "var(--color-brand-50)", border: "1px solid var(--color-brand-100)" }}>
                  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 flex-shrink-0" aria-hidden="true">
                    <circle cx="10" cy="10" r="9" stroke="var(--color-brand-500)" strokeWidth="1.5"/>
                    <path d="M7 10l2 2 4-4" stroke="var(--color-brand-500)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
                    No hard credit check — your credit score is not affected
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold mb-6" style={{ fontSize: "1.125rem", color: "var(--color-ink)" }}>What makes Microf different</h3>
                {[
                  { title: "Not a loan", body: "Microf offers a rental-purchase agreement — not traditional financing. No interest rate, no loan approval required." },
                  { title: "No credit check", body: "We don't run a hard inquiry on your credit. All backgrounds are welcome." },
                  { title: "Fast decisions", body: "Applying takes minutes and most customers get a real-time response." },
                  { title: "Flexible payments", body: "Monthly payments are structured to fit real budgets. Early payoff is available and saves you money." },
                  { title: "Dignity first", body: "We treat every applicant with respect. Being declined elsewhere doesn't define you here." },
                ].map(({ title, body }) => (
                  <div key={title} className="flex gap-4 p-5 rounded-2xl" style={{ background: "var(--color-paper)", border: "1px solid var(--color-line)" }}>
                    <div className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5" style={{ background: "var(--color-brand-500)" }}>
                      <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3" aria-hidden="true">
                        <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-0.5" style={{ color: "var(--color-ink)" }}>{title}</p>
                      <p className="text-sm" style={{ color: "var(--color-slate)" }}>{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Legal note section */}
        <section className="py-10 px-6" style={{ background: "var(--color-brand-50)", borderTop: "1px solid var(--color-line)" }}>
          <div className="container-tight max-w-3xl mx-auto">
            <h3 className="font-semibold mb-3" style={{ color: "var(--color-ink)", fontSize: "0.9375rem" }}>Important disclosure</h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-slate)" }}>
              The advertised service is a lease-to-own or rental-purchase agreement provided by Microf, LLC, or its affiliates. Acquiring ownership by leasing costs more than the retailer&apos;s cash price. Leasing is available on select items at participating locations only. Not available in AK, HI, ME, MN, NJ, VT, WI, WY.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-pad" style={{ background: "var(--color-white)" }}>
          <div className="container-tight max-w-3xl mx-auto">
            <h2 className="text-center mb-12 text-balance">Plain-language answers</h2>
            <FAQ faqs={faqs} />
          </div>
        </section>

        <CTABand
          headline="Your home deserves comfort — regardless of your credit."
          body="Apply in minutes. No hard credit check. A real decision, fast."
          phone="855-642-7631"
        />
      </main>
      <Footer />
    </>
  );
}
