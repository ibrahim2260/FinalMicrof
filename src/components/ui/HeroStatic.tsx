"use client";

import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const CYCLING_WORDS = ["furnace", "AC unit", "water heater", "heat pump", "mini-split"];

const heroStats: { label: string; value: string }[] = [
  { label: "States served", value: "43" },
  { label: "Application time", value: "< 5 min" },
  { label: "Hard credit checks", value: "Zero" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.10 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export function HeroStatic() {
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    const id = setInterval(() => setWordIdx((i) => (i + 1) % CYCLING_WORDS.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="relative isolate overflow-hidden min-h-screen flex items-center"
      style={{ background: "var(--color-slate)" }}
      role="region"
      aria-label="Microf — lease-to-own home comfort financing"
    >
      {/* Subtle radial gradient for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 20% 50%, rgba(26,92,56,0.07) 0%, transparent 60%), " +
            "radial-gradient(ellipse 60% 80% at 80% 20%, rgba(18,52,77,0.8) 0%, transparent 70%)",
        }}
      />

      {/* 72° watermark — the signature element */}
      <div
        className="watermark-72 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none"
        aria-hidden="true"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(220px, 32vw, 520px)",
          fontWeight: 700,
          lineHeight: 0.85,
          color: "rgba(255,255,255,0.07)",
          letterSpacing: "-0.04em",
          transform: "translateY(-50%) translateX(8%)",
          userSelect: "none",
        }}
      >
        72°
      </div>

      {/* Main content — left-aligned */}
      <div className="relative z-10 container-tight w-full py-32 lg:py-40">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <motion.p
            variants={itemVariants}
            className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em]"
            style={{
              color: "rgba(255,255,255,0.65)",
              letterSpacing: "0.22em",
            }}
          >
            <span
              className="inline-block w-5 h-px"
              style={{ background: "rgba(26,92,56,0.8)" }}
              aria-hidden="true"
            />
            Lease-to-own home comfort financing
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="mb-6 font-bold tracking-tight"
            style={{
              fontSize: "clamp(2.6rem, 6.5vw, 5rem)",
              lineHeight: 1.05,
              fontFamily: "var(--font-display)",
              color: "#FFFFFF",
            }}
          >
            {"Your "}

            {/* CSS-grid sizer keeps the widest word's width so headline never reflows */}
            <span aria-live="off" style={{ display: "inline-grid", verticalAlign: "baseline" }}>
              <span
                aria-hidden="true"
                style={{ visibility: "hidden", gridRow: 1, gridColumn: 1 }}
              >
                water heater
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={CYCLING_WORDS[wordIdx]}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.30, ease: [0.21, 0.47, 0.32, 0.98] }}
                  style={{
                    gridRow: 1,
                    gridColumn: 1,
                    display: "inline-block",
                    color: "#5BC48A",
                  }}
                >
                  {CYCLING_WORDS[wordIdx]}
                </motion.span>
              </AnimatePresence>
            </span>

            {" quit."}
            <br />
            <span style={{ color: "rgba(255,255,255,0.90)" }}>
              Your comfort shouldn&apos;t.
            </span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            variants={itemVariants}
            className="mb-10 text-lg md:text-xl leading-relaxed max-w-2xl"
            style={{ color: "rgba(255,255,255,0.72)" }}
          >
            Flexible lease-to-own payments for HVAC systems and water heaters.
            Near-instant decisions, no hard credit check — so your contractor
            can get to work today.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="mb-12 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="https://dealer.microf.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-grove inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-full text-base"
            >
              Apply in Minutes
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/contractors"
              className="inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
              style={{ border: "1px solid rgba(255,255,255,0.25)" }}
            >
              Partner With Us
            </Link>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            variants={itemVariants}
            className="inline-grid grid-cols-3 rounded-2xl px-6 py-5 gap-6 backdrop-blur-sm"
            style={{
              background: "rgba(10,28,42,0.65)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            {heroStats.map((stat, i) => (
              <div key={stat.label} className="text-center">
                {i > 0 && (
                  <div
                    className="hidden"
                    aria-hidden="true"
                  />
                )}
                <div
                  className="text-2xl md:text-3xl font-semibold mb-1"
                  style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
                >
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.50)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
