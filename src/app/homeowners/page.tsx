import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import HeroFintechCards from "@/components/ui/HeroFintechCards";
import CTABand from "@/components/sections/CTABand";
import FAQ from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "Homeowner Financing — Lease-to-Own HVAC & Water Heaters",
  description:
    "No credit check required. Lease-to-own HVAC systems and water heaters for homeowners. Real-time approval, flexible payments, and full ownership at the end of your term.",
  alternates: { canonical: "https://www.microf.com/homeowners" },
};

const howItWorksSteps = [
  { step: "1", title: "Apply online", body: "Complete a quick application — no hard credit check, no paperwork. Get a real-time decision in minutes." },
  { step: "2", title: "Choose your payment", body: "Select a monthly payment option that works for your budget. Flexible terms available." },
  { step: "3", title: "Installation scheduled", body: "Your contractor gets an instant alert. Installation can often happen the same day." },
  { step: "4", title: "You own it", body: "Complete your lease term and the equipment is yours — no strings attached." },
];

const benefits = [
  { title: "No credit check", body: "We welcome all credit backgrounds. A difficult credit history isn't a barrier with Microf." },
  { title: "Real-time decisions", body: "Most applicants get a response in minutes — so your contractor can move forward without delay." },
  { title: "Flexible payments", body: "Monthly lease payments designed to fit your actual budget, not what a bank thinks you can afford." },
  { title: "Early payoff discounts", body: "Want to pay it off faster and save money? Microf offers early payoff discounts on all leases." },
  { title: "Full ownership", body: "Complete your term and the equipment is 100% yours. Build equity in your home comfort system." },
  { title: "Equipment covered", body: "HVAC systems, furnaces, heat pumps, and water heaters — all covered through participating contractors." },
];

const faqs = [
  { question: "Do I need good credit to qualify?", answer: "No. Microf's lease-to-own agreements do not require a traditional credit check. We serve homeowners with all credit backgrounds, including those who have been declined by banks." },
  { question: "How long does the application take?", answer: "Most applicants complete the form in under 5 minutes and receive a real-time decision within minutes." },
  { question: "What's the difference between a lease and a loan?", answer: "A lease-to-own agreement is not a loan. There is no interest rate in the traditional sense, and no hard credit inquiry. You make monthly lease payments, and once the term is complete, you own the equipment outright. The total cost of acquiring ownership through leasing is higher than a cash purchase, which is disclosed upfront." },
  { question: "Can I pay off my lease early?", answer: "Yes. Microf offers early payoff discounts that reduce the total amount you pay. Contact your account manager or call consumer support for your current payoff quote." },
  { question: "Which states are eligible?", answer: "Microf currently operates in 43 states. The program is not available in Alaska, Hawaii, Maine, Minnesota, New Jersey, Vermont, Wisconsin, or Wyoming." },
];

export default function HomeownersPage() {
  return (
    <>
      <PageHero
        eyebrow="For homeowners"
        headline="Home comfort shouldn't depend on your credit score."
        subhead="Lease-to-own HVAC systems and water heaters with no credit check required. Real-time approval, flexible monthly payments, and full ownership at the end of your term."
        breadcrumbs={[{ label: "Homeowners" }]}
        variant="dark"
        rightSlot={<HeroFintechCards />}
      />

      <main id="main-content">

        {/* ── We understand the moment ─────────────────────────── */}
        <section className="section-pad" style={{ background: "var(--color-brand-50)" }}>
          <div className="container-tight">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

              {/* Left: copy */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "var(--color-brand-500)", letterSpacing: "0.15em" }}>
                  We understand the moment
                </p>
                <h2
                  className="text-balance mb-10"
                  style={{
                    color: "var(--color-ink)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    lineHeight: 1.1,
                    letterSpacing: "-0.03em",
                    fontWeight: 800,
                  }}
                >
                  It&apos;s 6pm. The AC just went out.
                </h2>

                <div className="space-y-6">
                  <p className="text-base leading-relaxed" style={{ color: "var(--color-slate)" }}>
                    You&apos;ve got kids in the house and it&apos;s 100 degrees outside. Your AC dies. You call your HVAC contractor, and they can replace the unit — but it&apos;s going to cost $4,000 to $6,000 that you don&apos;t have sitting in a checking account right now.
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: "var(--color-slate)" }}>
                    You try the bank — denied. You try the credit card — limit too low. You feel stuck. You feel embarrassed.
                  </p>
                  <p
                    className="text-lg leading-relaxed font-semibold"
                    style={{
                      color: "var(--color-ink)",
                      borderLeft: "3px solid var(--color-brand-500)",
                      paddingLeft: "1.25rem",
                    }}
                  >
                    You&apos;re not stuck. You&apos;re exactly who Microf was built for.
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: "var(--color-slate)" }}>
                    A five-minute application. No hard credit check. Near-instant approval. Your contractor gets the green light — and your family gets cool.
                  </p>
                </div>
              </div>

              {/* Right: video */}
              <div className="flex justify-center lg:justify-end">
                <div
                  className="w-full"
                  style={{
                    maxWidth: "440px",
                    borderRadius: "24px",
                    overflow: "hidden",
                    boxShadow: "0 24px 64px rgba(11,20,17,0.12), 0 0 0 1px var(--color-brand-100)",
                  }}
                >
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full block"
                  >
                    <source src="/videos/moment.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Benefits grid */}
        <section className="section-pad" style={{ background: "var(--color-white)" }}>
          <div className="container-tight">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--color-brand-500)" }}>Why homeowners choose Microf</span>
              <h2 className="text-balance">Everything you need. Nothing you don&apos;t.</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* How it works */}
        <section className="section-pad" style={{ background: "var(--color-brand-50)" }}>
          <div className="container-tight">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--color-brand-500)" }}>The process</span>
              <h2 className="text-balance">Simple from start to finish</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {howItWorksSteps.map(({ step, title, body }) => (
                <div key={step} className="text-center">
                  <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-lg" style={{ background: "var(--color-brand-500)", color: "white", fontFamily: "var(--font-display)" }}>
                    {step}
                  </div>
                  <h3 className="font-bold mb-2" style={{ color: "var(--color-ink)", fontSize: "1rem" }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-slate)" }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="section-pad" style={{ background: "var(--color-white)" }}>
          <div className="container-tight">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--color-brand-500)" }}>What we finance</span>
              <h2 className="text-balance">HVAC &amp; water heater financing</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {[
                { title: "HVAC Systems", body: "Central air conditioners, furnaces, heat pumps, and ductless mini-splits. All residential HVAC replacements through participating contractors.", href: "/homeowners/hvac", cta: "HVAC financing details" },
                { title: "Water Heaters", body: "Tank and tankless water heaters, gas and electric. Get a new unit installed today and pay monthly through your lease agreement.", href: "/homeowners/water-heaters", cta: "Water heater financing details" },
              ].map(({ title, body, href, cta }) => (
                <div key={title} className="rounded-3xl p-8 lg:p-10 card-lift" style={{ background: "var(--color-brand-50)", border: "1px solid var(--color-brand-100)" }}>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: "var(--color-ink)" }}>{title}</h3>
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

        {/* Challenged credit */}
        <section className="section-pad" style={{ background: "var(--color-brand-900)" }}>
          <div className="container-tight">
            <div className="max-w-2xl mx-auto text-center">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--color-brand-400)" }}>For challenged credit</span>
              <h2 className="mb-4 text-balance" style={{ color: "white", fontWeight: 800, letterSpacing: "-0.03em" }}>Been turned down before? We say yes.</h2>
              <p className="mb-8" style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.125rem", lineHeight: 1.65 }}>
                Microf was built for homeowners that traditional lenders overlook. No credit check means no hard inquiry — your score stays intact while you get the comfort you need.
              </p>
              <Link href="/homeowners/challenged-credit" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: "var(--color-brand-400)" }}>
                Learn about challenged credit financing
                <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-pad" style={{ background: "var(--color-white)" }}>
          <div className="container-tight max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-balance">Common questions</h2>
            </div>
            <FAQ faqs={faqs} />
          </div>
        </section>

        <CTABand phone="855-642-7631" />

        <div className="py-4 px-6" style={{ background: "var(--color-brand-50)", borderTop: "1px solid var(--color-line)" }}>
          <p className="text-xs text-center max-w-4xl mx-auto" style={{ color: "var(--color-muted)" }}>
            The advertised service is lease-to-own or a rental- or lease-purchase agreement provided by Microf, LLC, or its affiliates. Acquiring ownership by leasing costs more than the retailer's cash price.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
