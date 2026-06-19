import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Statement — Microf, LLC",
  description: "Microf's Privacy Statement explaining how we collect, use, and protect your personal information.",
  alternates: { canonical: "https://www.microf.com/privacy-statement" },
  robots: { index: true, follow: true },
};

export default function PrivacyStatementPage() {
  return (
    <>
      <Nav />
      <main className="flex-1 pt-16">
        <div className="bg-[var(--color-linen)] py-12">
          <div className="container-tight max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-[var(--color-smoke)]">
                <li><Link href="/" className="hover:text-[var(--color-slate)] transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-[var(--color-slate)] font-medium" aria-current="page">Privacy Statement</li>
              </ol>
            </nav>
            <p className="text-sm font-semibold text-[var(--color-grove)] uppercase tracking-wider mb-3">Legal</p>
            <h1>Privacy Statement</h1>
            <p className="mt-2 text-sm text-[var(--color-smoke)]">Microf, LLC · Last updated: January 2024</p>
          </div>
        </div>

        <article className="bg-white py-12 md:py-16" aria-label="Privacy Statement">
          <div className="container-tight max-w-3xl">
            <div className="space-y-8 text-[var(--color-graphite-70)] leading-relaxed">

              {/* PLACEHOLDER NOTE */}
              <div className="rounded-xl p-5 text-sm" style={{ background: "var(--color-linen)", border: "1px solid rgba(18,52,77,0.08)" }}>
                <strong className="font-semibold text-[var(--color-slate)] block mb-1">⚠ Client action required</strong>
                The full Privacy Statement below is a template framework. Microf&apos;s legal team should review and replace this content with the authoritative Privacy Statement currently published on microf.com, ensuring it reflects current data practices, state-specific rights, and applicable regulations (CCPA, VCDPA, etc.).
              </div>

              <section>
                <h2 className="text-xl font-semibold text-[var(--color-slate)] mb-3">1. Introduction</h2>
                <p>
                  Microf, LLC (&ldquo;Microf,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting the privacy of individuals who visit our website, apply for our lease-to-own programs, and interact with our services. This Privacy Statement explains what information we collect, how we use it, and the choices available to you.
                </p>
                <p className="mt-3">
                  By using our website (microf.com) or our services, you agree to the collection and use of information described in this statement. Our registered address is 2849 Paces Ferry Rd SE, Suite 625, Atlanta, GA 30339. NMLS ID: 1817969.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[var(--color-slate)] mb-3">2. Information We Collect</h2>
                <p>We collect information in the following ways:</p>
                <ul className="mt-3 space-y-2 pl-4">
                  {[
                    "Information you provide directly: name, address, phone number, email address, and other details submitted through applications or contact forms.",
                    "Usage data: pages visited, time on site, referring URL, browser type, and IP address, collected through cookies and analytics tools.",
                    "Communications: records of correspondence when you contact our support team.",
                    "Contractor information: business name, contact details, tax identification, and banking information for contractor partners.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full" style={{ background: "var(--color-grove)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[var(--color-slate)] mb-3">3. How We Use Your Information</h2>
                <p>Microf uses collected information to:</p>
                <ul className="mt-3 space-y-2 pl-4">
                  {[
                    "Process lease applications and manage your lease account.",
                    "Communicate with you regarding your account, payments, or inquiries.",
                    "Operate, maintain, and improve our website and services.",
                    "Comply with legal obligations and regulatory requirements.",
                    "Prevent fraud and protect the security of our systems.",
                    "Market our services (you may opt out of marketing communications at any time).",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full" style={{ background: "var(--color-grove)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[var(--color-slate)] mb-3">4. Cookies and Analytics</h2>
                <p>
                  Our website uses cookies and similar technologies, including Google Tag Manager (container ID: GTM-58VW3ZC), to collect usage data and improve your experience. You may adjust your browser settings to decline cookies; however, some features of our website may not function properly without them.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[var(--color-slate)] mb-3">5. Sharing Your Information</h2>
                <p>
                  We do not sell your personal information to third parties. We may share your information with:
                </p>
                <ul className="mt-3 space-y-2 pl-4">
                  {[
                    "Contractor partners involved in your equipment installation.",
                    "Service providers who assist us in operating our website and business.",
                    "Regulatory bodies and law enforcement when required by law.",
                    "Successors in interest in the event of a merger, acquisition, or sale of assets.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full" style={{ background: "var(--color-grove)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[var(--color-slate)] mb-3">6. Data Retention</h2>
                <p>
                  We retain personal information for as long as necessary to fulfill the purposes described in this statement, comply with legal obligations, resolve disputes, and enforce our agreements.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[var(--color-slate)] mb-3">7. Your Rights</h2>
                <p>
                  Depending on your state of residence, you may have the right to access, correct, or delete personal information we hold about you, or to opt out of certain uses of your information. To exercise these rights, contact us at the address or phone number listed below.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[var(--color-slate)] mb-3">8. Security</h2>
                <p>
                  We implement reasonable administrative, technical, and physical safeguards to protect your personal information. No method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[var(--color-slate)] mb-3">9. Contact Us</h2>
                <p>
                  For questions about this Privacy Statement or to exercise your rights, contact us:
                </p>
                <address className="mt-3 not-italic">
                  <p className="font-semibold text-[var(--color-slate)]">Microf, LLC</p>
                  <p>2849 Paces Ferry Rd SE, Suite 625</p>
                  <p>Atlanta, GA 30339</p>
                  <p className="mt-2">
                    Consumer Support: <a href="tel:8556427631" className="text-[var(--color-grove)] hover:underline">855-642-7631</a>
                  </p>
                  <p>
                    <Link href="/contact" className="text-[var(--color-grove)] hover:underline">Contact Form</Link>
                  </p>
                </address>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[var(--color-slate)] mb-3">10. Changes to This Statement</h2>
                <p>
                  We may update this Privacy Statement from time to time. The revised statement will be posted on this page with an updated effective date. We encourage you to review this statement periodically.
                </p>
              </section>

            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
