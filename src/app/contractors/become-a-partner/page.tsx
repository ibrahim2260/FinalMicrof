import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Become a Microf Dealer Partner — Free HVAC Financing Enrollment",
  description:
    "Enroll in Microf's contractor dealer network for free. Offer lease-to-own HVAC and water heater financing to every customer. Real-time decisions and 24–48 hr funding.",
  alternates: { canonical: "https://www.microf.com/contractors/become-a-partner" },
};

export default function BecomeAPartnerPage() {
  return (
    <>
      <PageHero
        eyebrow="Dealer enrollment"
        headline="Start offering financing in a day — for free."
        subhead="Enroll in the Microf dealer network at no cost. Complete brief training, get access to the dealer portal, and start offering lease-to-own to your customers immediately."
        primaryCta={{ label: "Apply to Become a Partner", href: "https://dealer.microf.com/", external: true }}
        breadcrumbs={[{ label: "Contractors", href: "/contractors" }, { label: "Become a Partner" }]}
        variant="green"
      />

      <main id="main-content">
        {/* What you get */}
        <section className="section-pad" style={{ background: "var(--color-white)" }}>
          <div className="container-tight">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="mb-6 text-balance">Everything you need to close more jobs</h2>
                <p className="leading-relaxed mb-8" style={{ color: "var(--color-slate)", fontSize: "1.0625rem" }}>
                  When you enroll as a Microf dealer, you get instant access to a program built specifically for HVAC and plumbing contractors — not retrofitted from consumer lending software.
                </p>
                <div className="space-y-4">
                  {[
                    { title: "Dealer portal access", body: "Manage applications, track funding status, and support customers from a single dashboard." },
                    { title: "Real-time application tool", body: "Present financing to customers on-site. They apply, get a decision in minutes, and installation moves forward." },
                    { title: "Dedicated contractor support", body: "A direct line to Microf contractor support. Real people, real answers." },
                    { title: "No cost, no commitment", body: "Enrollment is 100% free. No monthly fees, no minimums." },
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

              {/* Enrollment steps */}
              <div className="rounded-3xl p-8 lg:p-10" style={{ background: "var(--color-brand-50)", border: "1px solid var(--color-brand-100)" }}>
                <h3 className="font-bold text-xl mb-6" style={{ color: "var(--color-ink)" }}>How enrollment works</h3>
                <ol className="space-y-6" aria-label="Enrollment steps">
                  {[
                    { num: 1, title: "Apply online", body: "Complete the dealer enrollment form at dealer.microf.com. It takes about 10 minutes." },
                    { num: 2, title: "Complete brief training", body: "Short online training to get familiar with the portal and application process." },
                    { num: 3, title: "Sign dealer agreement", body: "Review and sign your dealer agreement electronically." },
                    { num: 4, title: "Start offering today", body: "Your account is activated. Present Microf to your next customer and close more jobs." },
                  ].map(({ num, title, body }) => (
                    <li key={num} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-sm" style={{ background: "var(--color-brand-500)", color: "white", fontFamily: "var(--font-display)" }}>{num}</div>
                      <div>
                        <p className="font-semibold text-sm mb-0.5" style={{ color: "var(--color-ink)" }}>{title}</p>
                        <p className="text-sm" style={{ color: "var(--color-slate)" }}>{body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <div className="mt-8 pt-6" style={{ borderTop: "1px solid var(--color-brand-100)" }}>
                  <Link
                    href="https://dealer.microf.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-grove block w-full text-center text-white font-bold py-4 rounded-full cursor-pointer"
                  >
                    Apply to Become a Partner →
                  </Link>
                  <p className="text-center text-xs mt-3" style={{ color: "var(--color-muted)" }}>
                    Free enrollment · No minimums · No commitment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support callout */}
        <section className="py-16" style={{ background: "var(--color-brand-900)" }}>
          <div className="container-tight text-center">
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--color-brand-400)" }}>Questions before you enroll?</p>
            <h2 className="text-white mb-6 text-balance">Talk to contractor support</h2>
            <a href="tel:8554988200" className="inline-flex items-center gap-3 text-white font-bold text-2xl hover:text-[var(--color-brand-400)] transition-colors" style={{ fontFamily: "var(--font-display)" }}>
              855-498-8200
            </a>
            <p className="text-sm mt-3" style={{ color: "rgba(255,255,255,0.5)" }}>Mon–Fri 8AM–8PM · Sat 9AM–2PM EST</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
