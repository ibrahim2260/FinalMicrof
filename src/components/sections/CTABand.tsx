import Link from "next/link";

interface CTABandProps {
  headline?: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  primaryExternal?: boolean;
  secondaryLabel?: string;
  secondaryHref?: string;
  phone?: string;
  /** "green" = brand-500 bg | "dark" = brand-900 bg */
  variant?: "green" | "dark";
}

export default function CTABand({
  headline = "Ready to get comfortable?",
  body = "Apply in minutes. No credit check. Get real comfort in your home — on a payment that fits your budget.",
  primaryLabel = "Apply Now — No Credit Check",
  primaryHref = "https://dealer.microf.com/",
  primaryExternal = true,
  secondaryLabel,
  secondaryHref,
  phone,
  variant = "green",
}: CTABandProps) {
  const isDark = variant === "dark";

  return (
    <section
      className="section-pad"
      style={{ background: isDark ? "var(--color-brand-900)" : "var(--color-brand-500)" }}
      aria-label="Call to action"
    >
      <div className="container-tight text-center">
        <h2 className="text-balance mb-4" style={{ fontWeight: 800, color: "white" }}>
          {headline}
        </h2>
        {body && (
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
            {body}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryHref}
            target={primaryExternal ? "_blank" : undefined}
            rel={primaryExternal ? "noopener noreferrer" : undefined}
            className="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-full text-base cursor-pointer transition-all hover:-translate-y-1"
            style={{
              background: "white",
              color: isDark ? "var(--color-ink)" : "var(--color-brand-900)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
            }}
          >
            {primaryLabel}
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-full text-base border-2 border-white/30 hover:border-white/60 hover:bg-white/10 transition-all cursor-pointer"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
        {phone && (
          <p className="text-xs mt-8" style={{ color: "rgba(255,255,255,0.55)" }}>
            Questions? Call us at{" "}
            <a href={`tel:${phone.replace(/\D/g, "")}`} className="underline hover:text-white transition-colors">
              {phone}
            </a>
          </p>
        )}
      </div>
    </section>
  );
}
