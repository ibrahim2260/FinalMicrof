import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Press Releases — Microf News & Announcements",
  description: "Official press releases and news from Microf, LLC — the lease-to-own HVAC and water heater financing company.",
  alternates: { canonical: "https://www.microf.com/about/press-releases" },
};

const releases = [
  {
    date: "2024-06-01",
    title: "Microf Expands Dealer Network to 1,000+ HVAC Contractors Nationwide",
    summary: "Microf, LLC announces it has surpassed 1,000 active dealer partners across its 43-state service area, providing lease-to-own HVAC and water heater financing to more homeowners than ever before.",
    // TODO: Add full press release content and replace with actual releases
  },
  {
    date: "2024-03-15",
    title: "Microf Launches Enhanced Dealer Portal with Real-Time Application Tracking",
    summary: "The new dealer portal provides HVAC contractors with real-time visibility into customer applications, funding status, and performance reporting — all from one streamlined dashboard.",
  },
  {
    date: "2023-11-01",
    title: "Microf Named Member of the Year by Regional HVAC Association",
    summary: "TODO: Confirm this award with client before publishing. Replace with actual award/recognition details.",
  },
];

export default function PressReleasesPage() {
  return (
    <>
      <PageHero
        eyebrow="News & press"
        headline="Press releases & announcements."
        subhead="Official news from Microf, LLC. For media inquiries, contact us at the information below."
        primaryCta={undefined}
        breadcrumbs={[{ label: "About", href: "/about" }, { label: "Press Releases" }]}
        variant="light"
      />

      <main id="main-content">
        <section className="section-pad" style={{ background: "var(--color-white)" }}>
          <div className="container-tight max-w-3xl mx-auto">
            <div className="space-y-6">
              {releases.map(({ date, title, summary }) => (
                <article key={title} className="rounded-2xl p-7 card-lift" style={{ background: "var(--color-paper)", border: "1px solid var(--color-line)" }}>
                  <time className="text-xs font-semibold uppercase tracking-widest block mb-3" style={{ color: "var(--color-brand-500)" }}>
                    {new Date(date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                  </time>
                  <h2 className="text-xl font-bold mb-3" style={{ color: "var(--color-ink)", fontSize: "1.125rem" }}>{title}</h2>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-slate)" }}>{summary}</p>
                </article>
              ))}
            </div>

            <div className="mt-16 pt-10 text-center" style={{ borderTop: "1px solid var(--color-line)" }}>
              <p className="text-sm mb-2" style={{ color: "var(--color-slate)" }}>Media inquiries</p>
              <a href="mailto:press@microf.com" className="font-semibold" style={{ color: "var(--color-brand-500)" }}>
                press@microf.com {/* TODO: confirm media contact email with client */}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
