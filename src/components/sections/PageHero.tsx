"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Nav from "@/components/layout/Nav";

interface BreadcrumbItem { label: string; href?: string }

interface PageHeroProps {
  eyebrow?: string;
  headline: string;
  subhead?: string;
  /** Primary CTA — defaults to Apply Now if not provided */
  primaryCta?: { label: string; href: string; external?: boolean };
  secondaryCta?: { label: string; href: string; external?: boolean };
  breadcrumbs?: BreadcrumbItem[];
  /** "dark" = brand-900 bg (homeowner empathy), "green" = brand-500 (contractor revenue), "light" = paper bg */
  variant?: "dark" | "green" | "light";
  /** Badge text displayed above headline */
  badge?: string;
  /** Optional right-column visual (e.g. floating cards). When provided, layout switches to 2-col on lg+. */
  rightSlot?: React.ReactNode;
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function PageHero({
  eyebrow,
  headline,
  subhead,
  primaryCta = { label: "Apply Now — No Credit Check", href: "https://dealer.microf.com/", external: true },
  secondaryCta,
  breadcrumbs,
  variant = "dark",
  badge,
  rightSlot,
}: PageHeroProps) {
  const isDark = variant === "dark" || variant === "green";

  const bgStyle =
    variant === "dark"
      ? { background: "var(--color-brand-900)" }
      : variant === "green"
      ? { background: "var(--color-brand-500)" }
      : { background: "var(--color-paper)", borderBottom: "1px solid var(--color-line)" };

  return (
    <>
      <Nav />
      <section
        className="relative pt-32 lg:pt-40 pb-16 lg:pb-24 overflow-hidden"
        style={bgStyle}
        aria-label="Page hero"
      >
        {/* Subtle background shape */}
        {isDark && (
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10"
              style={{ background: "radial-gradient(ellipse at top right, var(--color-brand-500), transparent 70%)" }} />
          </div>
        )}

        <div className={`container-tight relative z-10 ${rightSlot ? "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center" : ""}`}>
          <div>
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 flex-wrap">
                <li>
                  <Link href="/" className="text-xs transition-colors" style={{ color: isDark ? "rgba(255,255,255,0.45)" : "var(--color-muted)" }}>
                    Home
                  </Link>
                </li>
                {breadcrumbs.map(({ label, href }) => (
                  <li key={label} className="flex items-center gap-2">
                    <svg viewBox="0 0 8 12" fill="none" className="w-1.5 h-2.5" aria-hidden="true">
                      <path d="M1 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: isDark ? "rgba(255,255,255,0.25)" : "var(--color-line)" }}/>
                    </svg>
                    {href ? (
                      <Link href={href} className="text-xs transition-colors" style={{ color: isDark ? "rgba(255,255,255,0.45)" : "var(--color-muted)" }}>
                        {label}
                      </Link>
                    ) : (
                      <span className="text-xs font-medium" style={{ color: isDark ? "rgba(255,255,255,0.7)" : "var(--color-slate)" }}>{label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {/* Badge */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
              style={{
                background: isDark ? "rgba(255,255,255,0.1)" : "var(--color-brand-100)",
                color: isDark ? "var(--color-brand-400)" : "var(--color-brand-500)",
                border: isDark ? "1px solid rgba(255,255,255,0.1)" : "none",
              }}
            >
              {badge}
            </motion.div>
          )}

          {/* Eyebrow */}
          {eyebrow && !badge && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: isDark ? "var(--color-brand-400)" : "var(--color-brand-500)" }}
            >
              {eyebrow}
            </motion.p>
          )}

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.05 }}
            className="text-balance mb-6"
            style={{
              color: isDark ? "white" : "var(--color-ink)",
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 5.5vw, 4.25rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: "800px",
            }}
          >
            {headline}
          </motion.h1>

          {/* Subhead */}
          {subhead && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
              className="text-lg leading-relaxed mb-10"
              style={{ color: isDark ? "rgba(255,255,255,0.7)" : "var(--color-slate)", maxWidth: "640px" }}
            >
              {subhead}
            </motion.p>
          )}

          {/* CTAs */}
          {(primaryCta || secondaryCta) && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  target={primaryCta.external ? "_blank" : undefined}
                  rel={primaryCta.external ? "noopener noreferrer" : undefined}
                  className={`inline-flex items-center justify-center gap-2 font-semibold px-7 py-3.5 rounded-full text-sm cursor-pointer transition-all hover:-translate-y-0.5 ${
                    variant === "green"
                      ? "bg-white text-[var(--color-brand-900)] shadow-[0_8px_32px_rgba(0,0,0,0.15)] hover:shadow-xl"
                      : "btn-grove text-white"
                  }`}
                >
                  {primaryCta.label}
                  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  target={secondaryCta.external ? "_blank" : undefined}
                  rel={secondaryCta.external ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center justify-center gap-2 font-medium px-7 py-3.5 rounded-full text-sm cursor-pointer transition-all"
                  style={isDark
                    ? { color: "white", border: "1px solid rgba(255,255,255,0.25)" }
                    : { color: "var(--color-brand-500)", border: "1px solid var(--color-brand-500)" }}
                >
                  {secondaryCta.label}
                </Link>
              )}
            </motion.div>
          )}
          </div>{/* end left column */}

          {/* Right column — hidden on mobile */}
          {rightSlot && (
            <div className="hidden lg:flex items-center justify-center py-8">
              {rightSlot}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
