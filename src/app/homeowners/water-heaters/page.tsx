import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import CTABand from "@/components/sections/CTABand";
import FAQ from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "Water Heater Financing — Lease-to-Own Tank & Tankless Water Heaters",
  description:
    "No credit check water heater financing. Lease-to-own tank, tankless, gas, and electric water heaters through participating contractors. Flexible payments, real-time approval.",
  alternates: { canonical: "https://www.microf.com/homeowners/water-heaters" },
};

const types = [
  { title: "Traditional tank water heaters", body: "Gas and electric storage tank units — the most common residential water heater type." },
  { title: "Tankless / on-demand", body: "Heat water instantly without a storage tank. Energy efficient and space saving." },
  { title: "Hybrid heat pump water heaters", body: "Up to 3x more efficient than conventional electric models using heat pump technology." },
  { title: "Gas & propane models", body: "High-capacity gas water heaters for homes with higher hot water demand." },
];

const faqs = [
  { question: "What types of water heaters does Microf finance?", answer: "Microf covers a wide range of residential water heaters including traditional storage tank units, tankless/on-demand models, and hybrid heat pump water heaters — both gas and electric. Equipment must be installed through a participating contractor." },
  { question: "How quickly can I get a new water heater installed?", answer: "Once approved, your contractor receives an instant notification. In many cases, installation can be completed the same day — especially for emergency replacements." },
  { question: "Is a credit check required?", answer: "No. Microf's lease-to-own program does not require a hard credit check. We welcome applicants with all credit backgrounds." },
  { question: "Who installs the water heater?", answer: "Installation is performed by participating Microf contractors. Your contractor applies on your behalf or guides you through the process directly." },
  { question: "What happens at the end of my lease?", answer: "Once all scheduled payments are complete, the water heater is yours — no additional fees or paperwork required." },
];

export default function WaterHeatersPage() {
  return (
    <>
      <PageHero
        eyebrow="Water heater financing"
        headline="Hot water shouldn't be a luxury."
        subhead="Lease-to-own tank, tankless, and hybrid water heaters through participating contractors. No credit check, real-time decisions, flexible monthly payments."
        breadcrumbs={[{ label: "Homeowners", href: "/homeowners" }, { label: "Water Heater Financing" }]}
        variant="dark"
      />

      <main id="main-content">
        {/* Types covered */}
        <section className="section-pad" style={{ background: "var(--color-white)" }}>
          <div className="container-tight">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--color-brand-500)" }}>What we cover</span>
              <h2 className="text-balance">All major water heater types</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {types.map(({ title, body }) => (
                <div key={title} className="flex gap-4 p-6 rounded-2xl" style={{ background: "var(--color-paper)", border: "1px solid var(--color-line)" }}>
                  <div className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center" style={{ background: "var(--color-brand-100)" }}>
                    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
                      <path d="M3 8l4 4 6-6" stroke="var(--color-brand-500)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold mb-1" style={{ color: "var(--color-ink)", fontSize: "0.9375rem" }}>{title}</p>
                    <p className="text-sm" style={{ color: "var(--color-slate)" }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Microf for water heaters */}
        <section className="section-pad" style={{ background: "var(--color-brand-900)" }}>
          <div className="container-tight">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--color-brand-400)" }}>The Microf advantage</span>
                <h2 className="mb-6 text-balance" style={{ color: "white", fontWeight: 800 }}>When cold water hits, Microf moves fast.</h2>
                <p className="leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
                  A failed water heater isn&apos;t something you can plan around. Microf&apos;s real-time approval process means you can go from application to installation in hours — not days.
                </p>
                <p className="leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                  No credit check. No waiting. Just a simple application and a fast decision so your home can get back to normal.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "Minutes", label: "Average approval time" },
                  { num: "No", label: "Credit check required" },
                  { num: "43", label: "States served" },
                  { num: "100%", label: "Ownership at term end" },
                ].map(({ num, label }) => (
                  <div key={label} className="rounded-2xl p-6 text-center" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <p className="text-3xl font-extrabold mb-1" style={{ color: "var(--color-brand-400)", fontFamily: "var(--font-display)" }}>{num}</p>
                    <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.45)" }}>{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-pad" style={{ background: "var(--color-white)" }}>
          <div className="container-tight max-w-3xl mx-auto">
            <h2 className="text-center mb-12 text-balance">Water heater financing questions</h2>
            <FAQ faqs={faqs} />
          </div>
        </section>

        <CTABand
          headline="Get hot water back today."
          body="No credit check. Apply in minutes. Have a new water heater installed — often the same day."
          phone="855-642-7631"
        />

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
