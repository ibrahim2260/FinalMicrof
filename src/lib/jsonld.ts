const BASE = "https://www.microf.com";

export const organization = {
  "@context": "https://schema.org",
  "@type": ["Organization", "FinancialService"],
  "@id": `${BASE}/#organization`,
  name: "Microf, LLC",
  alternateName: "Microf",
  url: BASE,
  logo: {
    "@type": "ImageObject",
    url: `${BASE}/images/microf-logo.svg`,
    width: 160,
    height: 40,
  },
  description:
    "Microf provides lease-to-own financing for HVAC systems and water heaters, serving homeowners in 43 states with flexible payment plans and no credit score requirement.",
  telephone: "+18556427631",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+18556427631",
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: "English",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "20:00",
      },
    },
    {
      "@type": "ContactPoint",
      telephone: "+18554988200",
      contactType: "contractor support",
      areaServed: "US",
      availableLanguage: "English",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "2849 Paces Ferry Rd SE, Suite 625",
    addressLocality: "Atlanta",
    addressRegion: "GA",
    postalCode: "30339",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.facebook.com/microfllc",
    "https://www.linkedin.com/company/microf",
  ],
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  knowsAbout: [
    "HVAC Financing",
    "Lease-to-Own",
    "Water Heater Financing",
    "Home Comfort Financing",
  ],
};

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE}/#website`,
    url: BASE,
    name: "Microf",
    description: "Lease-to-Own HVAC & Water Heater Financing",
    publisher: { "@id": `${BASE}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${BASE}/blog?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(items: { name: string; href?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.name,
        ...(item.href ? { item: `${BASE}${item.href}` } : {}),
      })),
    ],
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function articleSchema(post: {
  title: string;
  excerpt: string;
  isoDate: string;
  author: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.isoDate,
    dateModified: post.isoDate,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: { "@id": `${BASE}/#organization` },
    url: `${BASE}/blog/${post.slug}`,
    isPartOf: { "@id": `${BASE}/#website` },
  };
}
