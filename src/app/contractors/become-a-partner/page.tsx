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

const benefits = [
  {
    title: "Dealer portal access",
    body: "Manage applications, track funding status, and support customers from a single clean dashboard.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.75"/>
        <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.75"/>
        <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.75"/>
        <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.75"/>
      </svg>
    ),
  },
  {
    title: "Real-time decisions",
    body: "Your customer applies on-site and gets an instant answer — no callbacks, no delays.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75"/>
        <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Funded in 24–48 hours",
    body: "Submit installation verification and your payment hits your account within 24–48 business hours.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Free — no strings",
    body: "Enrollment is 100% free. No monthly fees, no minimums, no commitment.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" stroke="currentColor" strokeWidth="1.75"/>
      </svg>
    ),
  },
];

const steps = [
  { num: "01", title: "Apply online", body: "Complete the dealer enrollment form at dealer.microf.com. Takes about 10 minutes." },
  { num: "02", title: "Complete training", body: "Short online training to get familiar with the portal and application flow." },
  { num: "03", title: "Sign agreement", body: "Review and sign your dealer agreement electronically — no paperwork." },
  { num: "04", title: "Start closing", body: "Account activated. Present Microf to your next customer and close the job." },
];

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

        {/* ── Main two-column section ───────────────────────── */}
        <section className="section-pad" style={{ background: "var(--color-white)" }}>
          <div className="container-tight">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

              {/* ── Left: What you get ──────────────────────── */}
              <div className="flex flex-col">
                <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--color-brand-500)" }}>
                  What you get
                </span>
                <h2 className="text-balance mb-3" style={{ color: "var(--color-ink)" }}>
                  Everything you need to close more jobs
                </h2>
                <p className="leading-relaxed mb-8" style={{ color: "var(--color-slate)", fontSize: "1.0625rem" }}>
                  Built specifically for HVAC and plumbing contractors — not retrofitted from consumer lending software.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 content-start">
                  {benefits.map(({ title, body, icon }) => (
                    <div
                      key={title}
                      className="rounded-2xl p-5 card-lift"
                      style={{ background: "var(--color-paper)", border: "1px solid var(--color-line)" }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                        style={{ background: "var(--color-brand-100)", color: "var(--color-brand-500)" }}
                      >
                        {icon}
                      </div>
                      <p className="font-bold text-sm mb-1" style={{ color: "var(--color-ink)" }}>{title}</p>
                      <p className="text-xs leading-relaxed" style={{ color: "var(--color-slate)" }}>{body}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Right: How enrollment works ─────────────── */}
              <div
                className="rounded-3xl p-8 lg:p-10 flex flex-col h-full"
                style={{ background: "var(--color-brand-50)", border: "1px solid var(--color-brand-100)" }}
              >
                <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--color-brand-500)" }}>
                  Getting started
                </span>
                <h3 className="font-extrabold text-xl mb-8" style={{ color: "var(--color-ink)", fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>
                  How enrollment works
                </h3>

                <ol className="flex flex-col gap-5" aria-label="Enrollment steps">
                  {steps.map(({ num, title, body }, i) => (
                    <li key={num} className="flex gap-4">
                      {/* Number + connector */}
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-sm flex-shrink-0"
                          style={{
                            background: "var(--color-white)",
                            border: "2px solid var(--color-brand-100)",
                            color: "var(--color-brand-500)",
                            fontFamily: "var(--font-display)",
                            boxShadow: "0 2px 8px rgba(31,168,98,0.10)",
                          }}
                        >
                          {num}
                        </div>
                        {i < steps.length - 1 && (
                          <div className="w-px flex-1 mt-2" style={{ background: "var(--color-brand-100)", minHeight: "24px" }} aria-hidden="true" />
                        )}
                      </div>
                      {/* Content */}
                      <div className="pb-1 pt-1.5">
                        <p className="font-bold text-sm mb-1" style={{ color: "var(--color-ink)" }}>{title}</p>
                        <p className="text-sm leading-relaxed" style={{ color: "var(--color-slate)" }}>{body}</p>
                      </div>
                    </li>
                  ))}
                </ol>

                <div className="mt-auto pt-6" style={{ borderTop: "1px solid var(--color-brand-100)" }}>
                  <Link
                    href="https://dealer.microf.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-grove flex items-center justify-center gap-2 w-full text-white font-bold py-4 rounded-full cursor-pointer text-sm"
                  >
                    Apply to Become a Partner
                    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
                      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                  <p className="text-center text-xs mt-3" style={{ color: "var(--color-muted)" }}>
                    Free enrollment · No minimums · No commitment
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Support callout ──────────────────────────────── */}
        <section className="py-16" style={{ background: "var(--color-brand-900)" }}>
          <div className="container-tight text-center">
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--color-brand-400)" }}>
              Questions before you enroll?
            </p>
            <h2 className="mb-6 text-balance" style={{ color: "white", fontWeight: 800 }}>
              Talk to contractor support
            </h2>
            <a
              href="tel:8554988200"
              className="inline-flex items-center gap-3 font-bold text-2xl hover:text-[var(--color-brand-400)] transition-colors"
              style={{ color: "white", fontFamily: "var(--font-display)" }}
            >
              855-498-8200
            </a>
            <p className="text-sm mt-3" style={{ color: "rgba(255,255,255,0.45)" }}>
              Mon–Fri 8AM–8PM · Sat 9AM–2PM EST
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
