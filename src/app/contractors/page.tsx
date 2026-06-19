import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import CTABand from "@/components/sections/CTABand";
import ContractorDashboard from "@/components/ui/ContractorDashboard";

export const metadata: Metadata = {
  title: "HVAC Contractor Financing Partner — Grow Your Business with Microf",
  description:
    "Close more HVAC and water heater jobs with Microf's lease-to-own financing program. Higher approval rates, contractor funding in 24–48 hours, free enrollment.",
  alternates: { canonical: "https://www.microf.com/contractors" },
};

const benefits = [
  { title: "More approvals, more closes", body: "Offer financing to customers who don't qualify for traditional loans. Microf's lease-to-own program approves customers that banks turn down." },
  { title: "Funded in 24–48 hours", body: "Once installation is verified, your contractor payment is deposited within 24–48 business hours — no waiting around." },
  { title: "Free to enroll", body: "Joining the Microf dealer network costs nothing. Sign up, complete brief training, and start offering next-day." },
  { title: "Real-time customer decisions", body: "Your customer applies on-site and gets an instant decision. No delays, no waiting for callbacks." },
  { title: "Easy dealer portal", body: "Manage applications, track funding, and support customers from one clean dashboard." },
  { title: "Dedicated contractor support", body: "A direct contractor support line staffed by real people. Call us — we pick up." },
];

const steps = [
  { num: "01", title: "Enroll for free", body: "Complete a quick enrollment application and brief training. No cost, no commitment." },
  { num: "02", title: "Present to customers", body: "When a customer can't pay upfront, offer Microf as a payment option on the spot." },
  { num: "03", title: "Customer applies", body: "Your customer completes a simple application. Real-time decision in minutes." },
  { num: "04", title: "You get paid", body: "Complete the installation and funding hits your account within 24–48 business hours." },
];

const stats = [
  { value: "24–48 hrs", label: "Contractor funding" },
  { value: "Free", label: "Enrollment cost" },
  { value: "1,000+", label: "Active partners" },
  { value: "30%+", label: "Avg. close rate lift" }, // TODO: confirm with client
];

export default function ContractorsPage() {
  return (
    <>
      <PageHero
        eyebrow="For HVAC contractors"
        headline="Stop losing jobs to financing declines."
        subhead="Join the Microf dealer network and offer lease-to-own financing to every customer — even those with challenged credit. Close more jobs, get funded faster."
        primaryCta={{ label: "Become a Partner — Free", href: "/contractors/become-a-partner" }}
        secondaryCta={{ label: "Contractor Login", href: "https://dealer.microf.com/", external: true }}
        breadcrumbs={[{ label: "Contractors" }]}
        variant="green"
        rightSlot={<ContractorDashboard />}
      />

      <main id="main-content">
        {/* Stats bar */}
        <section style={{ background: "var(--color-brand-900)" }}>
          <div className="container-tight py-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:divide-x divide-white/15">
              {stats.map(({ value, label }) => (
                <div key={label} className="text-center lg:px-6">
                  <p className="text-2xl font-extrabold text-white mb-0.5" style={{ fontFamily: "var(--font-display)" }}>{value}</p>
                  <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.45)" }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-pad" style={{ background: "var(--color-white)" }}>
          <div className="container-tight">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--color-brand-500)" }}>The Microf advantage</span>
              <h2 className="text-balance">Built for contractors who want to close more</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map(({ title, body }) => (
                <div key={title} className="rounded-2xl p-6 card-lift" style={{ background: "var(--color-paper)", border: "1px solid var(--color-line)" }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-4" style={{ background: "var(--color-brand-100)" }}>
                    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
                      <path d="M3 8l4 4 6-6" stroke="var(--color-brand-500)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-base font-bold mb-2" style={{ color: "var(--color-ink)" }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-slate)" }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How enrollment works */}
        <section className="section-pad" style={{ background: "var(--color-brand-50)" }}>
          <div className="container-tight">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--color-brand-500)" }}>Getting started</span>
              <h2 className="text-balance">From enrollment to first deal in 4 steps</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map(({ num, title, body }) => (
                <div key={num} className="rounded-2xl p-6 text-center" style={{ background: "var(--color-white)", border: "1px solid var(--color-line)" }}>
                  <span className="inline-block text-3xl font-extrabold mb-4" style={{ color: "var(--color-brand-100)", fontFamily: "var(--font-display)" }}>{num}</span>
                  <h3 className="font-bold mb-2" style={{ color: "var(--color-ink)", fontSize: "1rem" }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-slate)" }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="section-pad" style={{ background: "var(--color-brand-900)" }}>
          <div className="container-tight max-w-3xl mx-auto text-center">
            <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 mx-auto mb-6 opacity-40" aria-hidden="true">
              <path d="M10 28c0-6.627 4.477-12 10-12v4c-3.314 0-6 2.686-6 6v8H6V28h4zM30 28c0-6.627 4.477-12 10-12v4c-3.314 0-6 2.686-6 6v8H26V28h4z" fill="white"/>
            </svg>
            <blockquote>
              <p className="text-xl leading-relaxed text-white mb-8">
                &ldquo;Microf has closed at least 30% more of my installs this year. Customers who used to walk away because of financing now say yes. The portal is clean, funding hits fast, and their contractor support team actually picks up the phone.&rdquo;
              </p>
            </blockquote>
            <p className="font-semibold text-white">Derek W.</p>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>HVAC Contractor, Owner — Charlotte, NC</p>
            <div className="flex justify-center gap-0.5 mt-3">
              {[...Array(5)].map((_, i) => (
                <svg key={i} viewBox="0 0 16 16" fill="var(--color-brand-500)" className="w-4 h-4" aria-hidden="true">
                  <path d="M8 1l1.85 3.75L14 5.5l-3 2.92.71 4.08L8 10.5l-3.71 1.96L5 8.42 2 5.5l4.15-.75L8 1z"/>
                </svg>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/contractors/testimonials" className="text-sm font-semibold" style={{ color: "var(--color-brand-400)" }}>
                Read more contractor stories →
              </Link>
            </div>
          </div>
        </section>

        {/* Secondary links */}
        <section className="section-pad" style={{ background: "var(--color-white)" }}>
          <div className="container-tight">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {[
                { title: "Why offer financing?", body: "The data on close rates, average order value, and customer retention when you offer lease-to-own at the point of decision.", href: "/contractors/why-offer-financing", cta: "See the case for financing" },
                { title: "Contractor success stories", body: "Real results from HVAC and plumbing contractors who've grown their business with Microf.", href: "/contractors/testimonials", cta: "Read contractor stories" },
              ].map(({ title, body, href, cta }) => (
                <div key={title} className="rounded-3xl p-8 lg:p-10 card-lift" style={{ background: "var(--color-brand-50)", border: "1px solid var(--color-brand-100)" }}>
                  <h3 className="text-xl font-bold mb-3" style={{ color: "var(--color-ink)" }}>{title}</h3>
                  <p className="leading-relaxed mb-6" style={{ color: "var(--color-slate)" }}>{body}</p>
                  <Link href={href} className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all" style={{ color: "var(--color-brand-500)" }}>
                    {cta}
                    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
                      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABand
          headline="Ready to close more jobs?"
          body="Free enrollment, real-time decisions, and contractor funding in 24–48 business hours."
          primaryLabel="Become a Partner — Free"
          primaryHref="/contractors/become-a-partner"
          primaryExternal={false}
          secondaryLabel="Call Contractor Support"
          secondaryHref="tel:8554988200"
          phone="855-498-8200"
          variant="dark"
        />
      </main>
      <Footer />
    </>
  );
}
