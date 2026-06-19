import type { Metadata } from "next";
import HomePageContent from "./HomePageContent";
import { organization, websiteSchema, faqSchema } from "@/lib/jsonld";
import { homeFAQs } from "@/lib/homeFAQs";

export const metadata: Metadata = {
  title: "Microf | Lease-to-Own HVAC & Water Heater Financing",
  description:
    "No credit check required. Microf offers flexible lease-to-own financing for HVAC systems and water heaters. Get approved in minutes and restore your home comfort today.",
  alternates: { canonical: "https://www.microf.com" },
  openGraph: {
    title: "Microf | Lease-to-Own HVAC & Water Heater Financing",
    description:
      "No credit check required. Flexible lease-to-own financing for HVAC and water heaters. Real-time approval. 43 states served.",
    url: "https://www.microf.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Microf — Lease-to-Own Home Comfort Financing",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(homeFAQs)) }}
      />
      <HomePageContent />
    </>
  );
}
