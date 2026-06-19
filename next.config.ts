import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // ── Legacy Microf URL redirects ───────────────────────────────────
      { source: "/hvac-financing", destination: "/homeowners/hvac", permanent: true },
      { source: "/hvac-financing/", destination: "/homeowners/hvac", permanent: true },
      { source: "/water-heater-financing", destination: "/homeowners/water-heaters", permanent: true },
      { source: "/water-heater-financing/", destination: "/homeowners/water-heaters", permanent: true },
      { source: "/hvac-lease-to-own-challenged-credit", destination: "/homeowners/challenged-credit", permanent: true },
      { source: "/hvac-lease-to-own-challenged-credit/", destination: "/homeowners/challenged-credit", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/about-us/", destination: "/about", permanent: true },
      { source: "/about-us/press-releases", destination: "/about/press-releases", permanent: true },
      { source: "/about-us/press-releases/", destination: "/about/press-releases", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/contact-us/", destination: "/contact", permanent: true },
      { source: "/contractor-testimonials", destination: "/contractors/testimonials", permanent: true },
      { source: "/contractor-testimonials/", destination: "/contractors/testimonials", permanent: true },
      // Long-form contractor "why offer financing" URL from old site
      { source: "/why-offer-hvac-financing-to-your-customers", destination: "/contractors/why-offer-financing", permanent: true },
      { source: "/why-offer-hvac-financing-to-your-customers/", destination: "/contractors/why-offer-financing", permanent: true },
      // Singular → plural path redirects (brief uses /homeowner, /contractor)
      { source: "/homeowner", destination: "/homeowners", permanent: true },
      { source: "/homeowner/:path*", destination: "/homeowners/:path*", permanent: true },
      { source: "/contractor", destination: "/contractors", permanent: true },
      { source: "/contractor/:path*", destination: "/contractors/:path*", permanent: true },
      // Legal page redirects (footer previously linked /privacy and /terms)
      { source: "/privacy", destination: "/privacy-statement", permanent: true },
      { source: "/privacy/", destination: "/privacy-statement", permanent: true },
      { source: "/terms", destination: "/terms-of-use", permanent: true },
      { source: "/terms/", destination: "/terms-of-use", permanent: true },
    ];
  },
};

export default nextConfig;
