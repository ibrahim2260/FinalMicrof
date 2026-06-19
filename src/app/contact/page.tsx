import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Microf — Consumer & Contractor Support",
  description:
    "Reach Microf consumer support at 855-642-7631 or contractor support at 855-498-8200. Mon–Fri 8AM–8PM, Sat 9AM–2PM EST. Or use our online contact form.",
  alternates: { canonical: "https://www.microf.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        headline="We're here when you need us."
        subhead="Consumer support, contractor support, or general inquiries — we have a team ready to help."
        primaryCta={undefined}
        breadcrumbs={[{ label: "Contact Us" }]}
        variant="light"
      />

      <main id="main-content">
        <section className="section-pad" style={{ background: "var(--color-white)" }}>
          <div className="container-tight">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Contact info */}
              <div>
                <div className="space-y-8">
                  {/* Consumer */}
                  <div className="rounded-2xl p-7" style={{ background: "var(--color-brand-50)", border: "1px solid var(--color-brand-100)" }}>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "var(--color-brand-100)" }}>
                        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
                          <path d="M3 12L12 3L21 12V21H15V15H9V21H3V12Z" stroke="var(--color-brand-500)" strokeWidth="1.5" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h2 className="font-bold" style={{ color: "var(--color-ink)", fontSize: "1.0625rem" }}>Consumer Support</h2>
                    </div>
                    <a href="tel:8556427631" className="block text-3xl font-extrabold mb-1 hover:text-[var(--color-brand-600)] transition-colors" style={{ color: "var(--color-brand-500)", fontFamily: "var(--font-display)" }}>
                      855-642-7631
                    </a>
                    <p className="text-sm" style={{ color: "var(--color-slate)" }}>
                      Mon–Fri 8AM–8PM EST · Sat 9AM–2PM EST
                    </p>
                    <p className="text-xs mt-3" style={{ color: "var(--color-muted)" }}>
                      For homeowners with questions about their lease, application status, or account.
                    </p>
                  </div>

                  {/* Contractor */}
                  <div className="rounded-2xl p-7" style={{ background: "var(--color-brand-900)" }}>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(255,255,255,0.1)" }}>
                        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
                          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="var(--color-brand-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h2 className="font-bold text-white" style={{ fontSize: "1.0625rem" }}>Contractor Support</h2>
                    </div>
                    <a href="tel:8554988200" className="block text-3xl font-extrabold mb-1 hover:text-[var(--color-brand-400)] transition-colors text-white" style={{ fontFamily: "var(--font-display)" }}>
                      855-498-8200
                    </a>
                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                      Mon–Fri 8AM–8PM EST · Sat 9AM–2PM EST
                    </p>
                    <p className="text-xs mt-3" style={{ color: "rgba(255,255,255,0.4)" }}>
                      For enrolled dealers with questions about applications, funding, and the dealer portal.
                    </p>
                  </div>

                  {/* Address */}
                  <div className="rounded-2xl p-6" style={{ background: "var(--color-paper)", border: "1px solid var(--color-line)" }}>
                    <p className="text-sm font-semibold mb-1" style={{ color: "var(--color-ink)" }}>Headquarters</p>
                    <address className="not-italic text-sm" style={{ color: "var(--color-slate)" }}>
                      2849 Paces Ferry Rd SE, Suite 625<br />
                      Atlanta, GA 30339
                    </address>
                    <p className="text-xs mt-2" style={{ color: "var(--color-muted)" }}>NMLS ID 1817969</p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--color-ink)" }}>Send us a message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
