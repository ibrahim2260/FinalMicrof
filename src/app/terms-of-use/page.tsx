import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms of Use — Microf, LLC",
  description: "Terms of Use for the Microf website and services, including lease-to-own program terms.",
  alternates: { canonical: "https://www.microf.com/terms-of-use" },
  robots: { index: true, follow: true },
};

export default function TermsOfUsePage() {
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
                <li className="text-[var(--color-slate)] font-medium" aria-current="page">Terms of Use</li>
              </ol>
            </nav>
            <p className="text-sm font-semibold text-[var(--color-grove)] uppercase tracking-wider mb-3">Legal</p>
            <h1>Terms of Use</h1>
            <p className="mt-2 text-sm text-[var(--color-smoke)]">Microf, LLC · Last updated: January 2024</p>
          </div>
        </div>

        <article className="bg-white py-12 md:py-16" aria-label="Terms of Use">
          <div className="container-tight max-w-3xl">
            <div className="space-y-8 text-[var(--color-graphite-70)] leading-relaxed">

              {/* PLACEHOLDER NOTE */}
              <div className="rounded-xl p-5 text-sm" style={{ background: "var(--color-linen)", border: "1px solid rgba(18,52,77,0.08)" }}>
                <strong className="font-semibold text-[var(--color-slate)] block mb-1">⚠ Client action required</strong>
                The Terms of Use below are a framework template. Microf&apos;s legal team should replace this content with the authoritative Terms of Use currently in use by Microf, LLC, reviewed by counsel for compliance with applicable federal and state laws.
              </div>

              <section>
                <h2 className="text-xl font-semibold text-[var(--color-slate)] mb-3">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using the Microf website (microf.com) and any related services, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website or services. These Terms apply to all visitors, users, and contractor partners.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[var(--color-slate)] mb-3">2. Use of the Website</h2>
                <p>You agree to use this website only for lawful purposes and in a manner consistent with all applicable laws and regulations. You may not:</p>
                <ul className="mt-3 space-y-2 pl-4">
                  {[
                    "Use the website in any way that violates applicable federal, state, or local law.",
                    "Transmit any unsolicited or unauthorized advertising or promotional material.",
                    "Attempt to gain unauthorized access to any part of the website or its related systems.",
                    "Impersonate or attempt to impersonate Microf, a Microf employee, another user, or any other person.",
                    "Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full" style={{ background: "var(--color-grove)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[var(--color-slate)] mb-3">3. Lease-to-Own Disclosure</h2>
                <p>
                  The advertised service is a lease-to-own or rental- or lease-purchase agreement provided by Microf, LLC, or its affiliates. Acquiring ownership by leasing costs more than the retailer&apos;s cash price. Leasing is available on select items at participating locations only.
                </p>
                <p className="mt-3">
                  Microf&apos;s lease-to-own program is not available in the following states: Alaska, Hawaii, Maine, Minnesota, New Jersey, Vermont, Wisconsin, or Wyoming.
                </p>
                <p className="mt-3">
                  <strong className="font-semibold text-[var(--color-slate)]">Note:</strong> Microf is aware of inconsistencies in state exclusion lists on prior versions of this website. The authoritative exclusion list should be confirmed with Microf&apos;s legal and compliance team before publishing.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[var(--color-slate)] mb-3">4. Intellectual Property</h2>
                <p>
                  The content on this website, including text, graphics, logos, and images, is the property of Microf, LLC and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from any content on this website without prior written permission from Microf.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[var(--color-slate)] mb-3">5. Disclaimer of Warranties</h2>
                <p>
                  This website and its content are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without any warranties of any kind, express or implied. Microf does not warrant that the website will be available, error-free, or free of viruses or other harmful components.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[var(--color-slate)] mb-3">6. Limitation of Liability</h2>
                <p>
                  To the fullest extent permitted by law, Microf, LLC and its affiliates, officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website or our services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[var(--color-slate)] mb-3">7. Third-Party Links</h2>
                <p>
                  This website may contain links to third-party websites, including our dealer portal (dealer.microf.com), payment portal (InvoiceCloud), and social media platforms. These links are provided for convenience only. Microf does not endorse and is not responsible for the content, privacy policies, or practices of any third-party websites.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[var(--color-slate)] mb-3">8. Governing Law</h2>
                <p>
                  These Terms of Use shall be governed by and construed in accordance with the laws of the State of Georgia, without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[var(--color-slate)] mb-3">9. Changes to These Terms</h2>
                <p>
                  Microf reserves the right to modify these Terms of Use at any time. Changes will be posted on this page with an updated effective date. Your continued use of the website following any changes constitutes your acceptance of the revised terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[var(--color-slate)] mb-3">10. Contact</h2>
                <address className="not-italic">
                  <p className="font-semibold text-[var(--color-slate)]">Microf, LLC</p>
                  <p>2849 Paces Ferry Rd SE, Suite 625</p>
                  <p>Atlanta, GA 30339</p>
                  <p className="mt-2">NMLS ID: 1817969</p>
                  <p className="mt-2">
                    Consumer Support: <a href="tel:8556427631" className="text-[var(--color-grove)] hover:underline">855-642-7631</a>
                  </p>
                </address>
              </section>

              <div className="pt-6 border-t border-slate-100">
                <p className="text-sm">
                  See also: <Link href="/privacy-statement" className="text-[var(--color-grove)] hover:underline">Privacy Statement</Link>
                </p>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
