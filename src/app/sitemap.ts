import type { MetadataRoute } from "next";

const BASE = "https://www.microf.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: MetadataRoute.Sitemap = [
    // Core
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    // Homeowner
    { url: `${BASE}/homeowners`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/homeowners/hvac`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/homeowners/water-heaters`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/homeowners/challenged-credit`, lastModified: now, changeFrequency: "monthly", priority: 0.80 },
    // Contractor
    { url: `${BASE}/contractors`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/contractors/why-offer-financing`, lastModified: now, changeFrequency: "monthly", priority: 0.80 },
    { url: `${BASE}/contractors/testimonials`, lastModified: now, changeFrequency: "monthly", priority: 0.70 },
    { url: `${BASE}/contractors/become-a-partner`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    // Company
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.70 },
    { url: `${BASE}/about/press-releases`, lastModified: now, changeFrequency: "weekly", priority: 0.60 },
    { url: `${BASE}/careers`, lastModified: now, changeFrequency: "weekly", priority: 0.60 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.65 },
    // Blog
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.75 },
    { url: `${BASE}/blog/lease-to-own-helping-contractors-reach-underserved-homeowners`, lastModified: now, changeFrequency: "yearly", priority: 0.60 },
    { url: `${BASE}/blog/hvac-financing-no-credit-check-explained`, lastModified: now, changeFrequency: "yearly", priority: 0.60 },
    { url: `${BASE}/blog/how-to-close-more-hvac-sales-with-financing`, lastModified: now, changeFrequency: "yearly", priority: 0.60 },
    // Legal
    { url: `${BASE}/privacy-statement`, lastModified: now, changeFrequency: "yearly", priority: 0.30 },
    { url: `${BASE}/terms-of-use`, lastModified: now, changeFrequency: "yearly", priority: 0.30 },
  ];

  return routes;
}
