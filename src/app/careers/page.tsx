import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import CTABand from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Careers at Microf — Join Our Team",
  description:
    "Explore career opportunities at Microf, LLC. We're a fintech company making home comfort financing accessible to all Americans. Based in Atlanta, GA.",
  alternates: { canonical: "https://www.microf.com/careers" },
};

const benefits = [
  { title: "Mission-driven work", body: "Every product decision has a real impact on real people who need home comfort and can't access traditional financing." },
  { title: "Competitive compensation", body: "Market-rate salaries, performance bonuses, and equity participation for key roles. TODO: confirm benefit details with HR." },
  { title: "Full benefits", body: "Health, dental, and vision coverage. 401(k) with company match. TODO: confirm benefit details with HR." },
  { title: "Remote flexibility", body: "Flexible work arrangements for most roles. Our Atlanta HQ is home base — not a requirement." },
];

const openRoles = [
  { title: "Collections Specialist", dept: "Finance", location: "Atlanta, GA", type: "Full-time" },
  { title: "Dealer Success Manager", dept: "Sales", location: "Remote", type: "Full-time" },
  { title: "Customer Support Specialist", dept: "Support", location: "Atlanta, GA", type: "Full-time" },
  { title: "Credit & Risk Analyst", dept: "Finance", location: "Atlanta, GA", type: "Full-time" },
];
// TODO: Replace with live job openings from ATS (Greenhouse, Lever, etc.) — confirm ATS with client

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Join our team"
        headline="Build the future of home comfort financing."
        subhead="Microf is a fintech company with a real social mission — making heating, cooling, and hot water accessible to every American household. Come build something that matters."
        primaryCta={undefined}
        breadcrumbs={[{ label: "Careers" }]}
        variant="dark"
      />

      <main id="main-content">
        {/* Culture / Benefits */}
        <section className="section-pad" style={{ background: "var(--color-white)" }}>
          <div className="container-tight">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--color-brand-500)" }}>Why Microf</span>
              <h2 className="text-balance">Work that makes a difference</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map(({ title, body }) => (
                <div key={title} className="rounded-2xl p-6 card-lift" style={{ background: "var(--color-paper)", border: "1px solid var(--color-line)" }}>
                  <h3 className="font-bold mb-2" style={{ color: "var(--color-ink)", fontSize: "1rem" }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-slate)" }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open roles */}
        <section className="section-pad" style={{ background: "var(--color-brand-50)" }}>
          <div className="container-tight max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--color-brand-500)" }}>Open positions</span>
              <h2 className="text-balance">Current openings</h2>
              <p className="mt-3 text-sm" style={{ color: "var(--color-muted)" }}>
                TODO: Connect to live ATS for real-time job listings. Confirm ATS provider with client.
              </p>
            </div>
            <div className="space-y-4">
              {openRoles.map(({ title, dept, location, type }) => (
                <div key={title} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl card-lift" style={{ background: "var(--color-white)", border: "1px solid var(--color-line)" }}>
                  <div>
                    <p className="font-semibold" style={{ color: "var(--color-ink)" }}>{title}</p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--color-muted)" }}>{dept} · {location} · {type}</p>
                  </div>
                  <button
                    className="flex-shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-full transition-all"
                    style={{ background: "var(--color-brand-100)", color: "var(--color-brand-500)" }}
                    aria-label={`Apply for ${title}`}
                  >
                    Apply
                    <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" aria-hidden="true">
                      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
            <p className="text-center text-sm mt-10" style={{ color: "var(--color-slate)" }}>
              Don&apos;t see the right role?{" "}
              <a href="mailto:careers@microf.com" className="font-semibold" style={{ color: "var(--color-brand-500)" }}>
                Send us your resume
              </a>
              {/* TODO: confirm careers email with client */}
            </p>
          </div>
        </section>

        <CTABand
          headline="Questions about working at Microf?"
          body="Reach out to our recruiting team — we'd love to hear from you."
          primaryLabel="Contact Us"
          primaryHref="/contact"
          primaryExternal={false}
          variant="dark"
        />
      </main>
      <Footer />
    </>
  );
}
