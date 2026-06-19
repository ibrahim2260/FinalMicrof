import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import CTABand from "@/components/sections/CTABand";
import FAQ from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "HVAC Financing & Leasing — Lease-to-Own Air Conditioners, Furnaces & Heat Pumps",
  description:
    "No credit check HVAC financing. Lease-to-own central air conditioners, furnaces, and heat pumps through participating contractors. Real-time approval and flexible payments.",
  alternates: { canonical: "https://www.microf.com/homeowners/hvac" },
};

const covered = [
  { title: "Central air conditioners", body: "Stay cool all summer with a new AC unit — no credit check required." },
  { title: "Gas & electric furnaces", body: "Keep your home warm through winter with a reliable furnace replacement." },
  { title: "Heat pumps", body: "Efficient heating and cooling in a single system — ideal year-round comfort." },
  { title: "Ductless mini-splits", body: "Flexible, room-by-room climate control without ductwork." },
];

const faqs = [
  { question: "What HVAC equipment does Microf cover?", answer: "Microf covers residential HVAC systems including central air conditioners, gas and electric furnaces, heat pumps, and ductless mini-split systems. Equipment must be installed through a participating Microf contractor." },
  { question: "Can I get financing if my HVAC broke down suddenly?", answer: "Yes — that's exactly who Microf is designed for. Emergency HVAC replacements are common, and our real-time approval process means you can get approved and have installation scheduled quickly." },
  { question: "Is a credit check required?", answer: "No hard credit check is required. Our lease-to-own agreements are available regardless of your credit background." },
  { question: "How do I find a participating contractor?", answer: "Ask your HVAC contractor if they are enrolled in the Microf dealer program. If not, encourage them to visit our Contractors page — enrollment is free." },
  { question: "What happens when my lease is paid off?", answer: "Once you've completed all scheduled payments, the HVAC equipment belongs to you. No additional steps required." },
];

export default function HVACPage() {
  return (
    <>
      <PageHero
        eyebrow="HVAC financing"
        headline="A new HVAC system — without the credit barrier."
        subhead="Lease-to-own air conditioners, furnaces, and heat pumps through participating HVAC contractors. No credit check required. Real-time decisions."
        breadcrumbs={[{ label: "Homeowners", href: "/homeowners" }, { label: "HVAC Financing" }]}
        variant="dark"
      />

      <main id="main-content">
        {/* What's covered */}
        <section className="section-pad" style={{ background: "var(--color-white)" }}>
          <div className="container-tight">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--color-brand-500)" }}>Equipment covered</span>
              <h2 className="text-balance">All major HVAC systems covered</h2>
              <p className="mt-4 text-lg max-w-xl mx-auto" style={{ color: "var(--color-slate)" }}>
                Whether it&apos;s a summer emergency or a planned upgrade, Microf has a lease option for your equipment.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {covered.map(({ title, body }) => (
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

        {/* How lease-to-own works */}
        <section className="section-pad" style={{ background: "var(--color-brand-50)" }}>
          <div className="container-tight">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--color-brand-500)" }}>How it works</span>
                <h2 className="mb-6 text-balance">Lease-to-own explained simply</h2>
                <p className="leading-relaxed mb-6" style={{ color: "var(--color-slate)" }}>
                  A lease-to-own agreement is not a traditional loan. You make monthly payments for the duration of your term, and at the end you own the equipment outright. There&apos;s no interest rate in the conventional sense — the total cost of ownership through leasing is disclosed upfront.
                </p>
                <p className="leading-relaxed mb-8" style={{ color: "var(--color-slate)" }}>
                  The key difference: no credit check. Whether you have great credit, no credit, or challenged credit, Microf gives you a real decision in minutes — without affecting your credit score.
                </p>
                <Link href="https://dealer.microf.com/" target="_blank" rel="noopener noreferrer" className="btn-grove inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full text-sm cursor-pointer">
                  Apply for HVAC Financing
                  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Early payoff discounts", body: "Pay off your lease ahead of schedule and reduce your total cost." },
                  { label: "No hard credit inquiry", body: "Applying will not affect your credit score." },
                  { label: "Flexible monthly terms", body: "Payment options designed to fit your actual budget." },
                  { label: "Full ownership at term end", body: "The equipment is yours, free and clear, when the lease is complete." },
                ].map(({ label, body }) => (
                  <div key={label} className="flex gap-4 p-5 rounded-2xl" style={{ background: "var(--color-white)", border: "1px solid var(--color-line)" }}>
                    <div className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5" style={{ background: "var(--color-brand-500)" }}>
                      <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3" aria-hidden="true">
                        <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-0.5" style={{ color: "var(--color-ink)" }}>{label}</p>
                      <p className="text-sm" style={{ color: "var(--color-slate)" }}>{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-pad" style={{ background: "var(--color-white)" }}>
          <div className="container-tight max-w-3xl mx-auto">
            <h2 className="text-center mb-12 text-balance">HVAC financing questions</h2>
            <FAQ faqs={faqs} />
          </div>
        </section>

        <CTABand
          headline="Replace your HVAC system today."
          body="Apply in minutes. No credit check. Get approved and have a new system installed — often the same day."
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
