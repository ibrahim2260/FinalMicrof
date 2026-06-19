import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import CTABand from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Contractor Testimonials — Real Results from Microf Partners",
  description:
    "Hear from HVAC and plumbing contractors who've grown their business with Microf lease-to-own financing. Real stories, real results.",
  alternates: { canonical: "https://www.microf.com/contractors/testimonials" },
};

const testimonials = [
  {
    quote: "Microf has closed at least 30% more of my installs this year. Customers who used to walk away because of financing now say yes. The portal is clean, funding hits fast, and their contractor support team actually picks up the phone.",
    name: "Derek W.",
    role: "HVAC Contractor, Owner",
    location: "Charlotte, NC",
    stars: 5,
    highlight: "30% more closed installs",
  },
  {
    quote: "I was skeptical at first — tried two other financing companies with mediocre results. Microf's approval rates are genuinely better, and the 24–48 hour funding commitment is real. It's become standard in every proposal I write.",
    name: "Lisa P.",
    role: "Plumbing & HVAC Contractor",
    location: "Denver, CO",
    stars: 5,
    highlight: "Standard in every proposal",
  },
  {
    quote: "The customers we were losing before — the ones other programs kept declining — those are now booked jobs. Microf is the first financing program I've used where the approval rate actually matches what they promised.",
    name: "Marcus A.",
    role: "HVAC Service Company",
    location: "Atlanta, GA",
    stars: 5,
    highlight: "Approval rates match promises",
  },
  {
    quote: "Our average ticket went up after we added Microf. Customers choose the better system when they can spread the cost over time instead of worrying about sticker shock.",
    name: "Tony R.",
    role: "HVAC Contractor",
    location: "Tampa, FL",
    stars: 5,
    highlight: "Higher average ticket",
  },
  {
    quote: "Enrollment took maybe 20 minutes. Within a week we had our first funded job. The training is clear and the support team has been responsive every time I've called.",
    name: "Sarah M.",
    role: "HVAC Business Owner",
    location: "Columbus, OH",
    stars: 5,
    highlight: "First funded job within a week",
  },
  {
    quote: "I've worked with financing programs that felt like they were designed against the contractor. Microf is different — the dealer portal is intuitive, the timeline is transparent, and the funding is reliable.",
    name: "James K.",
    role: "HVAC & Plumbing",
    location: "Nashville, TN",
    stars: 5,
    highlight: "Designed for the contractor",
  },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 16 16" fill="var(--color-brand-500)" className="w-4 h-4" aria-hidden="true">
          <path d="M8 1l1.85 3.75L14 5.5l-3 2.92.71 4.08L8 10.5l-3.71 1.96L5 8.42 2 5.5l4.15-.75L8 1z"/>
        </svg>
      ))}
    </div>
  );
}

export default function ContractorTestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Contractor stories"
        headline="Real results from partners in the field."
        subhead="Hear directly from HVAC and plumbing contractors who have grown their business, increased close rates, and simplified their financing process with Microf."
        primaryCta={{ label: "Become a Partner — Free", href: "/contractors/become-a-partner" }}
        breadcrumbs={[{ label: "Contractors", href: "/contractors" }, { label: "Contractor Stories" }]}
        variant="dark"
      />

      <main id="main-content">
        {/* Testimonial grid */}
        <section className="section-pad" style={{ background: "var(--color-white)" }}>
          <div className="container-tight">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {testimonials.map(({ quote, name, role, location, stars, highlight }) => (
                <div key={name} className="rounded-2xl p-7 flex flex-col card-lift" style={{ background: "var(--color-paper)", border: "1px solid var(--color-line)" }}>
                  <Stars count={stars} />
                  {/* Highlight badge */}
                  <div className="inline-block mt-4 mb-4 px-3 py-1 rounded-full text-xs font-semibold" style={{ background: "var(--color-brand-100)", color: "var(--color-brand-500)" }}>
                    {highlight}
                  </div>
                  <blockquote className="flex-1">
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-slate)" }}>
                      &ldquo;{quote}&rdquo;
                    </p>
                  </blockquote>
                  <div className="mt-6 pt-5 flex items-center gap-3" style={{ borderTop: "1px solid var(--color-line)" }}>
                    <div className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-bold"
                      style={{ background: "var(--color-brand-500)", color: "white" }}>
                      {name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: "var(--color-ink)" }}>{name}</p>
                      <p className="text-xs" style={{ color: "var(--color-muted)" }}>{role} · {location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-xs mt-10" style={{ color: "var(--color-muted)" }}>
              TODO: Confirm all quotes with clients before launch. Collect additional testimonials and photos.
            </p>
          </div>
        </section>

        <CTABand
          headline="Join 1,000+ contractors growing with Microf."
          body="Free enrollment. Real-time customer decisions. Funding in 24–48 business hours."
          primaryLabel="Become a Partner — Free"
          primaryHref="/contractors/become-a-partner"
          primaryExternal={false}
          phone="855-498-8200"
          variant="green"
        />
      </main>
      <Footer />
    </>
  );
}
