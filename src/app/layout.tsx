import type { Metadata } from "next";
import Script from "next/script";
import { Urbanist, DM_Sans } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/ui/CookieConsent";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Microf | Lease-to-Own HVAC & Water Heater Financing",
    template: "%s | Microf",
  },
  description:
    "No credit check required. Microf offers flexible lease-to-own financing for HVAC systems and water heaters. Get approved instantly and restore your home's comfort today.",
  keywords: [
    "HVAC financing no credit check",
    "lease to own air conditioner",
    "water heater financing bad credit",
    "HVAC lease to own",
    "furnace financing no credit",
    "lease purchase HVAC",
  ],
  authors: [{ name: "Microf, LLC" }],
  creator: "Microf, LLC",
  metadataBase: new URL("https://www.microf.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.microf.com",
    siteName: "Microf",
    title: "Microf | Lease-to-Own HVAC & Water Heater Financing",
    description:
      "No credit check required. Flexible lease-to-own financing for HVAC systems and water heaters. Get instant approval and restore your home comfort today.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Microf — Lease-to-Own Home Comfort Financing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Microf | Lease-to-Own HVAC & Water Heater Financing",
    description: "No credit check required. Flexible lease-to-own financing for HVAC and water heaters.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${urbanist.variable} ${dmSans.variable} h-full antialiased`}
    >
      <head>
        {/* Google Tag Manager — GTM-58VW3ZC */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-58VW3ZC');`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col grain">
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-58VW3ZC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}

        <CookieConsent />

      </body>
    </html>
  );
}
