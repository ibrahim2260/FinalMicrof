import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import CTABand from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "About Microf — Lease-to-Own HVAC Financing Company",
  description:
    "Microf, LLC is a lease-to-own financing company headquartered in Atlanta, GA. We provide HVAC and water heater financing to homeowners and dealers across 43 states.",
  alternates: { canonical: "https://www.microf.com/about" },
};

const values = [
  { title: "Access for all", body: "Home comfort is not a luxury. We believe every homeowner deserves a working HVAC system and hot water — regardless of their credit history." },
  { title: "Speed over bureaucracy", body: "Real-time decisions, fast contractor funding, and a simple process. We respect your time." },
  { title: "Transparency first", body: "No hidden fees. No interest rate bait-and-switch. The full cost of ownership is disclosed upfront, every time." },
  { title: "Contractor-first design", body: "Our tools are built for how HVAC businesses actually operate — not how a bank thinks they should." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our company"
        headline="Making home comfort accessible to everyone."
        subhead="Microf, LLC is a lease-to-own financing company dedicated to helping homeowners get the HVAC systems and water heaters they need — regardless of their credit background."
        primaryCta={undefined}
        breadcrumbs={[{ label: "About Microf" }]}
        variant="dark"
      />

      <main id="main-content">
        {/* Mission */}
        <section className="section-pad" style={{ background: "var(--color-white)" }}>
          <div className="container-tight">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--color-brand-500)" }}>Our mission</span>
                <h2 className="mb-6 text-balance">We exist for the homeowner who was told no.</h2>
                <p className="leading-relaxed mb-5" style={{ color: "var(--color-slate)", fontSize: "1.0625rem" }}>
                  When your furnace breaks in January or your water heater stops working on a holiday weekend, &ldquo;apply for a bank loan&rdquo; is not an answer. For millions of American homeowners, the bank will say no — and traditional financing programs will too.
                </p>
                <p className="leading-relaxed mb-5" style={{ color: "var(--color-slate)", fontSize: "1.0625rem" }}>
                  Microf was founded to change that. Our lease-to-own program makes it possible for homeowners with challenged credit, limited credit history, or simply no access to traditional financing to get the equipment they need — quickly, respectfully, and affordably.
                </p>
                <p className="leading-relaxed" style={{ color: "var(--color-slate)", fontSize: "1.0625rem" }}>
                  We serve 43 states through a network of over 1,000 participating HVAC and plumbing contractors.
                  {/* TODO: confirm contractor count with client */}
                </p>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl p-6" style={{ background: "var(--color-brand-50)", border: "1px solid var(--color-brand-100)" }}>
                  <p className="text-3xl font-extrabold mb-1" style={{ color: "var(--color-brand-500)", fontFamily: "var(--font-display)" }}>Atlanta, GA</p>
                  <p className="text-sm" style={{ color: "var(--color-slate)" }}>Headquartered at 2849 Paces Ferry Rd SE, Suite 625</p>
                </div>
                <div className="rounded-2xl p-6" style={{ background: "var(--color-brand-50)", border: "1px solid var(--color-brand-100)" }}>
                  <p className="text-3xl font-extrabold mb-1" style={{ color: "var(--color-brand-500)", fontFamily: "var(--font-display)" }}>NMLS #1817969</p>
                  <p className="text-sm" style={{ color: "var(--color-slate)" }}>Microf, LLC — Nationwide Multistate Licensing System</p>
                </div>
                <div className="rounded-2xl p-6" style={{ background: "var(--color-brand-50)", border: "1px solid var(--color-brand-100)" }}>
                  <p className="text-3xl font-extrabold mb-1" style={{ color: "var(--color-brand-500)", fontFamily: "var(--font-display)" }}>43 states</p>
                  <p className="text-sm" style={{ color: "var(--color-slate)" }}>Available across the continental US (excluding AK, HI, ME, MN, NJ, VT, WI, WY)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-pad" style={{ background: "var(--color-brand-50)" }}>
          <div className="container-tight">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--color-brand-500)" }}>What we believe</span>
              <h2 className="text-balance">Our values</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map(({ title, body }) => (
                <div key={title} className="rounded-2xl p-6 card-lift" style={{ background: "var(--color-white)", border: "1px solid var(--color-line)" }}>
                  <h3 className="font-bold mb-3" style={{ color: "var(--color-ink)", fontSize: "1.0625rem" }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-slate)" }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="section-pad" style={{ background: "var(--color-white)" }}>
          <div className="container-tight">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--color-brand-500)" }}>Our team</span>
              <h2 className="text-balance">Leadership</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {[
                { name: "Zenon Olbrys", title: "Chief Executive Officer", src: "/images/zenon-headshot.jpeg" },
                { name: "John Wheeler", title: "Chief Financial Officer", src: "/images/john-headshot.jpeg" },
                { name: "Jeremy Sykes", title: "Head of Marketing", src: "/images/jeremy-headshot.png" },
              ].map(({ name, title, src }) => (
                <div key={name} className="flex flex-col items-center text-center">
                  <div
                    className="w-40 h-40 rounded-2xl overflow-hidden mb-5"
                    style={{ boxShadow: "var(--shadow-md)" }}
                  >
                    <Image
                      src={src}
                      alt={name}
                      width={160}
                      height={160}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <p className="font-bold text-base mb-1" style={{ color: "var(--color-ink)" }}>{name}</p>
                  <p className="text-sm" style={{ color: "var(--color-slate)" }}>{title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry memberships */}
        <section className="section-pad" style={{ background: "var(--color-brand-900)" }}>
          <div className="container-tight text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: "var(--color-brand-400)" }}>Industry memberships</span>
            <div className="flex flex-wrap justify-center gap-3">
              {["ACCA", "HARDI", "EGIA", "AHR", "BBB", "APRO", "Women in HVACR"].map((org) => (
                <span key={org} className="px-4 py-2 rounded-lg text-sm font-semibold" style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  {org}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Links */}
        <section className="section-pad" style={{ background: "var(--color-white)" }}>
          <div className="container-tight">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              {[
                { href: "/about/press-releases", label: "Press Releases" },
                { href: "/careers", label: "Careers at Microf" },
                { href: "/contact", label: "Contact Us" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="block rounded-2xl py-8 font-semibold card-lift" style={{ background: "var(--color-brand-50)", color: "var(--color-ink)", border: "1px solid var(--color-brand-100)" }}>
                  {label} →
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTABand />
      </main>
      <Footer />
    </>
  );
}
