"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import FAQ from "@/components/sections/FAQ";
import { homeFAQs } from "@/lib/homeFAQs";

/* ─── Animation helpers ──────────────────────────────────────────────── */

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

const stagger = { show: { transition: { staggerChildren: 0.12 } } };

function FadeIn({ children, delay = 0, className = "" }: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StaggerFade({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StaggerItem({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div variants={fadeUp} className={className}>
      {children}
    </motion.div>
  );
}

/* ─── Process Section ────────────────────────────────────────────────── */

function ProcessSection() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const STEP_DURATION = 5000;
  const ref = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = (stepIndex: number) => {
    if (ref.current) clearInterval(ref.current);
    setProgress(0);
    const start = Date.now();
    ref.current = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / STEP_DURATION) * 100, 100);
      setProgress(pct);
      if (elapsed >= STEP_DURATION) {
        setActive((prev) => {
          const next = (prev + 1) % processSteps.length;
          startTimer(next);
          return next;
        });
      }
    }, 40);
  };

  useEffect(() => {
    startTimer(0);
    return () => { if (ref.current) clearInterval(ref.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleStepClick = (i: number) => {
    setActive(i);
    startTimer(i);
  };

  const step = processSteps[active];

  return (
    <section className="section-pad" style={{ background: "var(--color-white)" }} aria-label="How it works">
      <div className="container-tight">
        <FadeIn className="text-center mb-16">
          <span
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ background: "var(--color-brand-50)", color: "var(--color-brand-600)", border: "1px solid var(--color-brand-100)" }}
          >
            The process
          </span>
          <h2 className="text-balance mb-4">Simple process</h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--color-slate)" }}>
            From broken to comfortable in four steps.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-20 items-start">

          {/* Left: Step selector */}
          <div className="flex flex-col">
            {processSteps.map((s, i) => {
              const isActive = i === active;
              const isDone = i < active;
              return (
                <div key={s.num} className="flex gap-5">
                  {/* Number + connector */}
                  <div className="flex flex-col items-center">
                    <button
                      onClick={() => handleStepClick(i)}
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 transition-all duration-300 focus:outline-none"
                      style={{
                        background: isActive ? "var(--color-brand-500)" : isDone ? "var(--color-brand-100)" : "var(--color-line)",
                        color: isActive ? "white" : isDone ? "var(--color-brand-500)" : "var(--color-muted)",
                        transform: isActive ? "scale(1.1)" : "scale(1)",
                        boxShadow: isActive ? "0 4px 16px rgba(31,168,98,0.35)" : "none",
                      }}
                      aria-label={`Go to step ${i + 1}: ${s.title}`}
                    >
                      {isDone ? (
                        <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
                          <path d="M3 8l4 4 6-6" stroke="var(--color-brand-500)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      ) : (
                        <span style={{ fontFamily: "var(--font-display)" }}>{i + 1}</span>
                      )}
                    </button>
                    {/* Connector line */}
                    {i < processSteps.length - 1 && (
                      <div className="w-px flex-1 my-1" style={{ minHeight: "40px", background: isDone ? "var(--color-brand-400)" : "var(--color-line)", transition: "background 0.4s" }} aria-hidden="true" />
                    )}
                  </div>

                  {/* Step text */}
                  <button
                    onClick={() => handleStepClick(i)}
                    className="text-left pb-8 flex-1 focus:outline-none"
                  >
                    <p
                      className="font-bold text-lg mb-1 transition-colors duration-200"
                      style={{
                        fontFamily: "var(--font-display)",
                        color: isActive ? "var(--color-ink)" : "var(--color-muted)",
                      }}
                    >
                      {s.title}
                    </p>
                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm leading-relaxed lg:hidden"
                        style={{ color: "var(--color-slate)" }}
                      >
                        {s.body}
                      </motion.p>
                    )}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Right: Active step content */}
          <div className="hidden lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="rounded-3xl p-10"
                style={{ background: "var(--color-paper)", border: "1px solid var(--color-line)" }}
              >
                {/* Icon + step badge */}
                <div className="flex items-start justify-between mb-8">
                  <div>{step.icon}</div>
                  <span
                    className="text-xs font-bold px-3 py-1.5 rounded-full"
                    style={{ background: "var(--color-brand-50)", color: "var(--color-brand-500)", border: "1px solid var(--color-brand-100)", fontFamily: "var(--font-display)" }}
                  >
                    Step {active + 1} of {processSteps.length}
                  </span>
                </div>

                <h3
                  className="text-3xl font-bold mb-4"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-ink)", letterSpacing: "-0.02em" }}
                >
                  {step.title}
                </h3>
                <p className="text-lg leading-relaxed mb-10" style={{ color: "var(--color-slate)" }}>
                  {step.body}
                </p>

                {/* Auto-advance progress bar */}
                <div className="h-1 rounded-full overflow-hidden" style={{ background: "var(--color-line)" }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      width: `${progress}%`,
                      background: "var(--color-brand-500)",
                      transition: "width 40ms linear",
                    }}
                  />
                </div>
                <p className="text-xs mt-2" style={{ color: "var(--color-muted)" }}>
                  Auto-advancing · click any step to jump
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* CTA */}
        <FadeIn className="text-center mt-14">
          <Link
            href="https://dealer.microf.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-grove inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl text-base"
          >
            Start Your Application
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── Data ───────────────────────────────────────────────────────────── */

const processSteps = [
  {
    num: "01",
    title: "Apply in Minutes",
    body: "Complete a simple application — no hard credit check, no lengthy paperwork. Most homeowners finish in under 5 min.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16" aria-hidden="true">
        <rect width="64" height="64" rx="18" fill="var(--color-brand-50)"/>
        <rect x="19" y="17" width="26" height="30" rx="3" stroke="var(--color-brand-500)" strokeWidth="1.8"/>
        <path d="M24 25h16M24 31h16M24 37h10" stroke="var(--color-brand-500)" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="45" cy="44" r="7" fill="var(--color-brand-500)"/>
        <path d="M42 44l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "Pick Your Payment",
    body: "Choose the monthly payment term that fits your budget. Flexible options from 18 to 48 months.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16" aria-hidden="true">
        <rect width="64" height="64" rx="18" fill="var(--color-brand-50)"/>
        <rect x="14" y="21" width="36" height="24" rx="4" stroke="var(--color-brand-500)" strokeWidth="1.8"/>
        <path d="M14 28h36" stroke="var(--color-brand-500)" strokeWidth="1.8"/>
        <circle cx="22" cy="36" r="2.5" fill="var(--color-brand-500)"/>
        <circle cx="32" cy="36" r="2.5" fill="var(--color-brand-400)"/>
        <circle cx="42" cy="36" r="2.5" fill="var(--color-brand-100)"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "Contractor Gets Notified",
    body: "Your approved contractor receives a real-time alert so they can order equipment and schedule installation immediately.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16" aria-hidden="true">
        <rect width="64" height="64" rx="18" fill="var(--color-brand-50)"/>
        <path d="M32 14c-8 0-14 5.4-14 12 0 3.6 1.8 6.8 4.7 9L20 42l7-3.4c1.6.5 3.3.8 5 .8 8 0 14-5.4 14-12S40 14 32 14z" stroke="var(--color-brand-500)" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M26 29h12M26 24h8" stroke="var(--color-brand-500)" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="48" cy="18" r="6" fill="var(--color-brand-500)"/>
        <path d="M48 15v4M48 20.5v.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "04",
    title: "Stay Comfortable",
    body: "Installation happens. Contractor is funded within 24–48 business hours. You start making flexible monthly payments.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16" aria-hidden="true">
        <rect width="64" height="64" rx="18" fill="var(--color-brand-50)"/>
        <path d="M14 34L32 18l18 16" stroke="var(--color-brand-500)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 34v12h8v-8h4v8h8V34" stroke="var(--color-brand-500)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="50" cy="48" r="7" fill="var(--color-brand-500)"/>
        <path d="M47 48l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const products = [
  {
    title: "HVAC Systems",
    subtitle: "Stay cool in summer, warm all winter",
    body: "Central air conditioners, furnaces, heat pumps, and ductless mini-splits — lease-to-own through participating contractors. No credit check required.",
    items: ["Central air conditioners", "Gas & electric furnaces", "Heat pumps & mini-splits", "HVAC system replacements"],
    href: "/homeowners/hvac",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14" aria-hidden="true">
        <circle cx="28" cy="28" r="28" fill="var(--color-brand-100)"/>
        <path d="M18 20h20v4H18zM18 32h20v4H18zM22 24v8M34 24v8" stroke="var(--color-brand-500)" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="28" cy="28" r="3" fill="var(--color-brand-500)"/>
      </svg>
    ),
  },
  {
    title: "Water Heaters",
    subtitle: "Hot water when you need it most",
    body: "Traditional tank and tankless water heaters — gas, electric, and hybrid. Get a new unit installed today, pay monthly through your lease.",
    items: ["Tank water heaters", "Tankless / on-demand", "Gas & electric models", "Hybrid heat pump water heaters"],
    href: "/homeowners/water-heaters",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14" aria-hidden="true">
        <circle cx="28" cy="28" r="28" fill="var(--color-brand-100)"/>
        <rect x="20" y="15" width="16" height="24" rx="8" stroke="var(--color-brand-500)" strokeWidth="2"/>
        <path d="M28 39v3M24 42h8" stroke="var(--color-brand-500)" strokeWidth="2" strokeLinecap="round"/>
        <path d="M25 25c0-1.7 3-5 3-5s3 3.3 3 5a3 3 0 01-6 0z" fill="var(--color-brand-500)"/>
      </svg>
    ),
  },
];

const whyMicrof = [
  { title: "Simple Application", body: "Five minutes or less. No hard credit inquiry." },
  { title: "Near-Instant Decisions", body: "Most applicants hear back in real time." },
  { title: "Flexible Terms", body: "18 to 48 months — pick what fits your budget." },
  { title: "All Credit Backgrounds", body: "Declined elsewhere? We welcome you." },
  { title: "Early Payoff Savings", body: "Pay ahead and unlock discounts on your total." },
  { title: "You Own It at the End", body: "Complete your payments and the equipment is yours." },
];

const stats = [
  { value: 43, suffix: "+", label: "States served", prefix: "" },
  { value: 1000, suffix: "+", label: "Contractor partners", prefix: "" },
  { value: 24, suffix: " hrs", label: "Contractor funding", prefix: "" },
  { value: 5, suffix: " min", label: "Average approval", prefix: "<" },
];

const testimonials = [
  {
    quote: "Our furnace died on a Tuesday night in January. Microf had us approved by Wednesday morning and heat back on by that afternoon. After two bank rejections, I didn't think we had options.",
    name: "Sandra M.",
    location: "Columbus, OH",
    role: "Homeowner",
    stars: 5,
    isContractor: false,
  },
  {
    quote: "I was embarrassed about my credit situation, but the process was completely dignified. No judgment — just a simple application and a yes. The monthly payment actually fits my budget.",
    name: "James T.",
    location: "Nashville, TN",
    role: "Homeowner",
    stars: 5,
    isContractor: false,
  },
  {
    quote: "Microf has closed at least 30% more of my installs this year. Customers who used to walk away because of financing now say yes. The portal is clean, funding hits fast, and their contractor support team actually picks up the phone.",
    name: "Derek W.",
    location: "Charlotte, NC",
    role: "HVAC Contractor, Owner",
    stars: 5,
    isContractor: true,
  },
];


const associations = ["ACCA", "HARDI", "EGIA", "AHR", "BBB", "APRO", "W-HVACR", "ACCA", "HARDI", "EGIA", "AHR", "BBB", "APRO", "W-HVACR"];

/* ─── Star Rating ────────────────────────────────────────────────────── */

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

/* ─── Dual-Audience Tabs ─────────────────────────────────────────────── */

function DualAudienceTabs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const homeownerBenefits = [
    { title: "No credit check needed", body: "Your credit history isn't a barrier. Microf says yes when traditional lenders say no." },
    { title: "Fast, simple application", body: "Takes minutes to complete. Get a real-time decision and schedule installation the same day." },
    { title: "Own the equipment", body: "Once your lease term is complete, the HVAC or water heater is yours. Build equity in your home." },
    { title: "Early payoff savings", body: "Motivated to pay it off faster? Early payoff discounts reduce your total cost." },
  ];

  const contractorBenefits = [
    { title: "Close more jobs", body: "Offer financing to customers who don't qualify for traditional loans. Don't leave revenue on the table." },
    { title: "Funded in 24–48 hours", body: "Fast contractor payments — deposited into your account within 24–48 business hours of installation." },
    { title: "Free enrollment", body: "No cost to join the Microf dealer network. Sign up, complete training, and start offering same day." },
    { title: "Dedicated support", body: "A contractor support line staffed by real people. Your business gets the attention it deserves." },
  ];

  return (
    <section className="section-pad" style={{ background: "var(--color-white)" }}>
      <div className="container-tight" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[var(--color-brand-500)] mb-3">
            Two audiences. One solution.
          </span>
          <h2 className="text-balance">Built for homeowners and contractors</h2>
          <p className="mt-4 text-lg text-[var(--color-slate)] max-w-2xl mx-auto">
            Microf creates value on both sides of the transaction — helping homeowners get the equipment they need, and helping contractors close more jobs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Homeowners card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            whileHover={{ scale: 1.045, boxShadow: "0 0 0 2.5px #1FA862, 0 24px 64px rgba(31,168,98,0.22)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="rounded-3xl p-8 lg:p-10"
            style={{ background: "var(--color-brand-50)", willChange: "transform" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "var(--color-brand-100)" }}>
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
                  <path d="M3 12L12 3L21 12V21H15V15H9V21H3V12Z" stroke="var(--color-brand-500)" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-bold" style={{ color: "var(--color-ink)", fontSize: "1.25rem" }}>For Homeowners</h3>
            </div>
            <ul className="space-y-4 mb-8">
              {homeownerBenefits.map(({ title, body }) => (
                <li key={title} className="flex gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center" style={{ background: "var(--color-brand-500)" }}>
                    <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3" aria-hidden="true">
                      <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-ink)] mb-0.5">{title}</p>
                    <p className="text-sm text-[var(--color-slate)]">{body}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              href="https://dealer.microf.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-grove inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full text-sm cursor-pointer"
            >
              Apply Now — No Credit Check
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </motion.div>

          {/* Contractors card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            whileHover={{ scale: 1.045, boxShadow: "0 0 0 2.5px #46C381, 0 24px 64px rgba(31,168,98,0.30)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="rounded-3xl p-8 lg:p-10"
            style={{ background: "var(--color-brand-900)", willChange: "transform" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(255,255,255,0.1)" }}>
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
                  <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="var(--color-brand-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-bold" style={{ fontSize: "1.25rem", color: "white" }}>For Contractors</h3>
            </div>
            <ul className="space-y-4 mb-8">
              {contractorBenefits.map(({ title, body }) => (
                <li key={title} className="flex gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center" style={{ background: "var(--color-brand-500)" }}>
                    <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3" aria-hidden="true">
                      <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-0.5" style={{ color: "rgba(255,255,255,0.92)" }}>{title}</p>
                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>{body}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              href="/contractors/become-a-partner"
              className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full text-sm border-2 border-white/25 hover:border-white/50 hover:bg-white/10 transition-all cursor-pointer"
            >
              Become a Partner
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── PAGE COMPONENT ─────────────────────────────────────────────────── */

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroParallax = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <>
      <Nav />
      <main id="main-content">

        {/* ── 1. HERO ─────────────────────────────────────────────── */}
        <section
          ref={heroRef}
          className="relative h-screen flex items-center overflow-hidden"
          style={{ background: "var(--color-paper)" }}
          aria-label="Hero"
        >
          {/* Soft background decorations */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-0 right-0 w-[55%] h-full"
              style={{ background: "radial-gradient(ellipse at 85% 40%, var(--color-brand-50) 0%, transparent 65%)" }}
            />
            <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] rounded-full"
              style={{ background: "var(--color-brand-50)", filter: "blur(80px)" }}
            />
          </div>

          <div className="container-tight relative z-10 pt-24 pb-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-12 xl:gap-20 items-center">

              {/* Left: Copy */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-8"
                  style={{ background: "var(--color-brand-50)", color: "var(--color-brand-600)", border: "1px solid var(--color-brand-100)" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-500)] animate-pulse" />
                  Lease-to-own · No credit check
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
                  className="text-balance mb-7"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2.75rem, 5.5vw, 4.5rem)", lineHeight: 1.05, letterSpacing: "-0.03em", color: "var(--color-ink)" }}
                >
                  Home comfort{" "}
                  <span style={{ color: "var(--color-brand-500)" }}>shouldn&apos;t</span>{" "}
                  have to wait.
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                  className="text-lg leading-relaxed mb-10"
                  style={{ color: "var(--color-slate)", maxWidth: "34rem" }}
                >
                  Flexible lease-to-own financing for HVAC systems and water heaters.
                  No credit check, real-time decisions, and same-day installation.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.28 }}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <Link
                    href="https://dealer.microf.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-grove inline-flex items-center justify-center gap-2 text-white font-semibold px-7 py-3.5 rounded-xl text-base cursor-pointer"
                  >
                    Apply Now
                    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
                      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                  <Link
                    href="/contractors"
                    className="inline-flex items-center justify-center gap-2 font-medium px-7 py-3.5 rounded-xl text-base border transition-all cursor-pointer"
                    style={{ color: "var(--color-ink)", borderColor: "var(--color-line)", background: "white" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--color-brand-500)"; (e.currentTarget as HTMLElement).style.color = "var(--color-brand-500)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--color-line)"; (e.currentTarget as HTMLElement).style.color = "var(--color-ink)"; }}
                  >
                    Partner With Us
                  </Link>
                </motion.div>

                {/* Stats row */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                  className="flex gap-8 mt-12 pt-10"
                  style={{ borderTop: "1px solid var(--color-line)" }}
                >
                  {[
                    { value: "43", label: "States served" },
                    { value: "5 min", label: "Avg. decision" },
                    { value: "$0", label: "Down payment" },
                  ].map((stat, i) => (
                    <div key={stat.label} className="flex flex-col gap-0.5" style={i > 0 ? { paddingLeft: "2rem", borderLeft: "1px solid var(--color-line)" } : {}}>
                      <span className="text-2xl font-extrabold leading-none" style={{ fontFamily: "var(--font-display)", color: i === 2 ? "var(--color-brand-500)" : "var(--color-ink)" }}>
                        {stat.value}
                      </span>
                      <span className="text-sm" style={{ color: "var(--color-muted)" }}>{stat.label}</span>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Right: Circular photo */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="relative hidden lg:flex items-center justify-center"
              >

                {/* Circle photo — outer has no overflow-hidden so BorderBeam travels freely */}
                <div
                  className="relative rounded-full"
                  style={{
                    width: "480px",
                    height: "480px",
                    boxShadow: "0 24px 64px rgba(11,20,17,0.12), 0 8px 24px rgba(11,20,17,0.07), 0 0 48px rgba(31,168,98,0.15)",
                  }}
                >
                  {/* Inner div clips image to circle */}
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <Image
                      src="/images/hero.png"
                      alt="Microf technician arriving at a happy family's home"
                      fill
                      priority
                      className="object-cover"
                      style={{ objectPosition: "50% 18%" }}
                      sizes="480px"
                    />
                  </div>
                  {/* Rotating beam ring — conic-gradient + radial mask = reliable circle orbit */}
                  <div
                    className="absolute pointer-events-none"
                    style={{
                      inset: "-3px",
                      borderRadius: "50%",
                      background: "conic-gradient(from 0deg, transparent 0deg, transparent 245deg, rgba(194,232,210,0.15) 272deg, rgba(70,195,129,0.55) 300deg, #1FA862 318deg, rgba(70,195,129,0.55) 333deg, transparent 360deg)",
                      WebkitMask: "radial-gradient(closest-side, transparent calc(100% - 4px), white calc(100% - 4px))",
                      mask: "radial-gradient(closest-side, transparent calc(100% - 4px), white calc(100% - 4px))",
                      filter: "drop-shadow(0 0 6px rgba(31,168,98,0.85)) drop-shadow(0 0 14px rgba(31,168,98,0.4))",
                      animation: "spin 7s linear infinite",
                    }}
                    aria-hidden="true"
                  />
                </div>
              </motion.div>

            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            aria-hidden="true"
          >
            <span className="text-xs font-medium" style={{ color: "var(--color-muted)" }}>Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              className="w-6 h-6 rounded-full flex items-center justify-center"
              style={{ border: "1px solid var(--color-line)" }}
            >
              <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3" aria-hidden="true">
                <path d="M2 4l4 4 4-4" stroke="var(--color-muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </motion.div>
        </section>

        {/* ── TRUST BAR ───────────────────────────────────────────── */}
        <section style={{ background: "var(--color-brand-500)" }} aria-label="Key facts">
          <div className="container-tight py-5">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 lg:divide-x divide-white/20">
              {[
                { stat: "No credit check", label: "Required to apply" },
                { stat: "43 states", label: "Currently served" },
                { stat: "Minutes", label: "Average approval time" },
                { stat: "24–48 hrs", label: "Contractor funding" },
              ].map(({ stat, label }) => (
                <div key={stat} className="text-center lg:px-6">
                  <p className="text-white font-bold text-base lg:text-lg leading-none mb-0.5" style={{ fontFamily: "var(--font-display)" }}>{stat}</p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PATH FORWARD ─────────────────────────────────────────── */}
        <section className="pt-20 pb-10 md:pt-28 md:pb-14" style={{ background: "white" }} aria-label="Find your path forward">
          <div className="container-tight">
            <FadeIn className="text-center mb-14">
              <span
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
                style={{ background: "var(--color-brand-50)", color: "var(--color-brand-600)", border: "1px solid var(--color-brand-100)" }}
              >
                Who is Microf for?
              </span>
              <h2 className="text-balance mb-4">
                Find your{" "}
                <span style={{ color: "var(--color-brand-500)" }}>path forward</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--color-slate)" }}>
                Whether your home needs help or your business needs to close more deals — Microf was built for you.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Homeowner card */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.045, boxShadow: "0 0 0 2.5px #1FA862, 0 24px 64px rgba(31,168,98,0.22)" }}
                whileTap={{ scale: 0.98 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.35, ease: EASE }}
                className="rounded-3xl"
                style={{ willChange: "transform" }}
              >
                <Link
                  href="/homeowners"
                  className="group flex flex-col h-full p-8 lg:p-10 rounded-3xl"
                  style={{
                    background: "var(--color-brand-50)",
                    border: "1px solid var(--color-brand-100)",
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: "var(--color-brand-500)" }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
                      <path d="M3 10.5L12 3L21 10.5V20C21 20.55 20.55 21 20 21H15V15H9V21H4C3.45 21 3 20.55 3 20V10.5Z" fill="white"/>
                    </svg>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3" style={{ color: "var(--color-ink)", fontFamily: "var(--font-display)" }}>
                      I&apos;m a Homeowner
                    </h3>
                    <p className="text-base leading-relaxed mb-8" style={{ color: "var(--color-slate)" }}>
                      My HVAC broke and I need to finance a replacement quickly, without a credit check holding me back.
                    </p>
                  </div>

                  <div
                    className="inline-flex items-center gap-2 font-semibold text-sm transition-all duration-200 group-hover:gap-3"
                    style={{ color: "var(--color-brand-500)" }}
                  >
                    See how it works
                    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
                      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </Link>
              </motion.div>

              {/* Contractor card */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.045, boxShadow: "0 0 0 2.5px #46C381, 0 24px 64px rgba(31,168,98,0.30)" }}
                whileTap={{ scale: 0.98 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.35, ease: EASE, delay: 0.12 }}
                className="rounded-3xl"
                style={{ willChange: "transform" }}
              >
                <Link
                  href="/contractors"
                  className="group flex flex-col h-full p-8 lg:p-10 rounded-3xl"
                  style={{ background: "var(--color-brand-900)" }}
                >
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: "rgba(255,255,255,0.12)" }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3" style={{ color: "white", fontFamily: "var(--font-display)" }}>
                      I&apos;m a Contractor
                    </h3>
                    <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.62)" }}>
                      I want to stop losing jobs to declined financing and get funded faster on every approved install.
                    </p>
                  </div>

                  <div
                    className="inline-flex items-center gap-2 font-semibold text-sm transition-all duration-200 group-hover:gap-3"
                    style={{ color: "var(--color-brand-400)" }}
                  >
                    Become a partner
                    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
                      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </Link>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── 3. HOW IT WORKS ─────────────────────────────────────── */}
        <ProcessSection />

        {/* ── VIDEO ───────────────────────────────────────────────── */}
        <section
          className="section-pad relative overflow-hidden"
          style={{ background: "var(--color-brand-900)" }}
          aria-label="See it for yourself"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-[-20%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] rounded-full"
              style={{ background: "radial-gradient(ellipse, rgba(31,168,98,0.12) 0%, transparent 65%)" }} />
          </div>

          <div className="container-tight relative z-10">
            {/* Header */}
            <FadeIn className="text-center mb-14">
              <span
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
                style={{ background: "rgba(31,168,98,0.15)", color: "var(--color-brand-400)", border: "1px solid rgba(31,168,98,0.25)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-400)] animate-pulse" />
                See it for yourself
              </span>
              <h2
                className="text-balance mb-5"
                style={{ color: "white", fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4.5vw, 3.25rem)", fontWeight: 700, letterSpacing: "-0.025em" }}
              >
                How Microf works —{" "}
                <span style={{ color: "var(--color-brand-400)" }}>in 2 minutes</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
                Watch a quick overview of the lease-to-own process and why homeowners and contractors across 43 states trust Microf.
              </p>
            </FadeIn>

            {/* Video container */}
            <FadeIn delay={0.15}>
              <div className="relative max-w-4xl mx-auto">
                {/* Outer glow */}
                <div
                  className="absolute -inset-4 rounded-[2.5rem] pointer-events-none"
                  style={{ background: "radial-gradient(ellipse, rgba(31,168,98,0.2) 0%, transparent 70%)", filter: "blur(24px)" }}
                  aria-hidden="true"
                />

                {/* Video frame */}
                <div
                  className="relative rounded-2xl overflow-hidden"
                  style={{
                    border: "1px solid rgba(31,168,98,0.2)",
                    boxShadow: "0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)",
                  }}
                >
                  {/* 16:9 aspect container */}
                  <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src="https://www.youtube.com/embed/anHsrgK6hn8?si=jecfGZ5KcRYKbI7n&controls=0&rel=0&modestbranding=1"
                      title="How Microf works — lease-to-own HVAC financing"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                </div>

                {/* Bottom trust strip */}
                <div className="flex items-center justify-center gap-8 mt-8 flex-wrap">
                  {["No credit check", "43 states served", "2-minute overview"].map((t) => (
                    <div key={t} className="flex items-center gap-2">
                      <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true">
                        <circle cx="8" cy="8" r="7" stroke="var(--color-brand-400)" strokeWidth="1.2"/>
                        <path d="M5 8l2 2 4-4" stroke="var(--color-brand-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.45)" }}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── 4. PRODUCTS ─────────────────────────────────────────── */}
        <section className="section-pad" style={{ background: "var(--color-brand-50)" }} aria-label="Products we finance">
          <div className="container-tight">
            <FadeIn className="text-center mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[var(--color-brand-500)] mb-3">What we finance</span>
              <h2 className="text-balance">HVAC systems & water heaters</h2>
              <p className="mt-4 text-lg text-[var(--color-slate)] max-w-xl mx-auto">
                Lease-to-own equipment through our network of participating contractors — no credit check required.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {products.map(({ title, subtitle, body, items, href, icon }) => (
                <FadeIn key={title}>
                  <motion.div
                    whileHover={{ scale: 1.045, boxShadow: "0 0 0 2.5px #1FA862, 0 24px 64px rgba(31,168,98,0.22)" }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.35, ease: EASE }}
                    className="rounded-3xl p-8 lg:p-10 h-full"
                    style={{ background: "var(--color-white)", border: "1px solid var(--color-line)", willChange: "transform" }}
                  >
                    <div className="mb-6">{icon}</div>
                    <h3 className="text-2xl font-bold mb-1" style={{ color: "var(--color-ink)" }}>{title}</h3>
                    <p className="text-sm font-semibold mb-4" style={{ color: "var(--color-brand-500)" }}>{subtitle}</p>
                    <p className="text-[var(--color-slate)] leading-relaxed mb-6">{body}</p>
                    <ul className="space-y-2 mb-8">
                      {items.map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-sm text-[var(--color-slate)]">
                          <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
                            <path d="M3 8l4 4 6-6" stroke="var(--color-brand-500)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={href}
                      className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all"
                      style={{ color: "var(--color-brand-500)" }}
                    >
                      Learn more
                      <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
                        <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. DUAL AUDIENCE TABS ───────────────────────────────── */}
        <DualAudienceTabs />

        {/* ── 6. WHY MICROF ───────────────────────────────────────── */}
        <section style={{ background: "var(--color-paper)" }} aria-label="For homeowners">
          <div className="flex flex-col lg:flex-row min-h-[640px]">

            {/* Left: video panel — chevron pointing right (class applied at lg+) */}
            <div
              className="microf-video-chevron relative min-h-[420px] lg:min-h-0 flex-shrink-0"
              style={{
                flexBasis: "50%",
                background: "#EDE8E1",
                filter: "drop-shadow(8px 0 24px rgba(11,20,17,0.11))",
                zIndex: 1,
              }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full"
                style={{ objectFit: "contain" }}
              >
                <source src="/videos/demo.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Right: content */}
            <div className="flex flex-col justify-center px-8 py-16 lg:px-16 lg:py-20 flex-1" style={{ background: "var(--color-paper)" }}>
              <FadeIn>
                <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "var(--color-brand-500)" }}>
                  For Homeowners
                </p>
                <h2 className="text-balance mb-5" style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", lineHeight: 1.08, letterSpacing: "-0.03em" }}>
                  Comfort shouldn&apos;t wait for a credit score
                </h2>
                <p className="text-base leading-relaxed mb-10" style={{ color: "var(--color-slate)", maxWidth: "36rem" }}>
                  Microf was built for the moments when life doesn&apos;t give you time to prepare. No lengthy applications, no hard credit pulls, no waiting weeks for an answer.
                </p>
              </FadeIn>

              {/* 2×3 feature card grid */}
              <StaggerFade className="grid grid-cols-2 gap-3 mb-10">
                {whyMicrof.map(({ title, body }, i) => {
                  const icons = [
                    /* document */ <path key="a" d="M8 3H5a1 1 0 00-1 1v12a1 1 0 001 1h10a1 1 0 001-1V8l-5-5zm0 0v5h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>,
                    /* bolt */    <path key="b" d="M13 2L4.5 9.5H10L7 18l8.5-7.5H10L13 2z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>,
                    /* calendar */ <><rect key="c1" x="2" y="3" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.4"/><path key="c2" d="M6 1v4M14 1v4M2 9h16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></>,
                    /* check circle */ <><circle key="d1" cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.4"/><path key="d2" d="M6.5 10l2.5 2.5 5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></>,
                    /* coin */ <><circle key="e1" cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.4"/><path key="e2" d="M10 6v8M7.5 8h3.75a1.25 1.25 0 010 2.5H8.75a1.25 1.25 0 000 2.5H13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></>,
                    /* home */    <path key="f" d="M3 9.5L10 3l7 6.5V18H13v-5H7v5H3V9.5z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>,
                  ];
                  return (
                    <StaggerItem key={title}>
                      <div className="rounded-2xl p-4" style={{ background: "#EDE8E1", border: "1px solid #D8D2C8" }}>
                        <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 mb-2.5" style={{ color: "var(--color-brand-500)" }} aria-hidden="true">
                          {icons[i]}
                        </svg>
                        <p className="font-bold text-sm mb-1" style={{ color: "var(--color-ink)", fontFamily: "var(--font-display)" }}>{title}</p>
                        <p className="text-xs leading-relaxed" style={{ color: "var(--color-slate)" }}>{body}</p>
                      </div>
                    </StaggerItem>
                  );
                })}
              </StaggerFade>

              <FadeIn>
                <Link
                  href="https://dealer.microf.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-grove inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-xl text-base"
                >
                  Apply in Minutes
                  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── 7. COUNTER CRESCENDO (signature element) ─────────────── */}
        <section className="section-pad overflow-hidden" style={{ background: "var(--color-paper)" }} aria-label="Key statistics">
          <div className="container-tight">
            <FadeIn className="text-center mb-16">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[var(--color-brand-500)] mb-3">By the numbers</span>
              <h2 className="text-balance">Proof in the numbers</h2>
            </FadeIn>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
              {stats.map(({ value, suffix, label, prefix }, i) => (
                <FadeIn key={label} delay={i * 0.1}>
                  <div className="text-center group">
                    <div className="relative inline-flex items-baseline gap-1 mb-3"
                      style={{ fontFamily: "var(--font-display)" }}>
                      {prefix && (
                        <span className="text-4xl lg:text-5xl font-bold" style={{ color: "var(--color-brand-400)" }}>{prefix}</span>
                      )}
                      <AnimatedCounter
                        value={value}
                        className="text-6xl lg:text-8xl font-extrabold leading-none"
                        style={{ color: "var(--color-brand-500)", letterSpacing: "-0.04em" }}
                      />
                      {suffix && (
                        <span className="text-3xl lg:text-5xl font-bold" style={{ color: "var(--color-brand-400)" }}>{suffix}</span>
                      )}
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--color-slate)" }}>{label}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Disclaimer */}
            <FadeIn delay={0.4}>
              <p className="text-center text-xs mt-10" style={{ color: "var(--color-muted)" }}>
                {/* TODO: confirm all stats with client before launch */}
                Funding timeline applies to contractor payments following verified installation completion.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ── 8. ASSOCIATION LOGO MARQUEE ─────────────────────────── */}
        <section className="py-16 relative overflow-hidden" style={{ background: "var(--color-brand-900)" }} aria-label="Industry memberships">
          {/* Dot grid texture */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.55) 1px, transparent 1px)", backgroundSize: "28px 28px", opacity: 0.05 }}
            aria-hidden="true" />

          {/* Left + right gradient fades */}
          <div className="absolute inset-y-0 left-0 w-28 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, var(--color-brand-900), transparent)" }} aria-hidden="true" />
          <div className="absolute inset-y-0 right-0 w-28 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, var(--color-brand-900), transparent)" }} aria-hidden="true" />

          {/* Label */}
          <div className="relative z-10 flex items-center justify-center gap-3 mb-10">
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: "var(--color-brand-500)", boxShadow: "0 0 8px var(--color-brand-500)" }} aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--color-brand-400)" }}>
              Proud member of leading HVAC industry associations
            </p>
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: "var(--color-brand-500)", boxShadow: "0 0 8px var(--color-brand-500)" }} aria-hidden="true" />
          </div>

          {/* Single scrolling row */}
          <div className="overflow-hidden">
            <div className="marquee-track flex gap-5 w-max">
              {[...associations, ...associations].map((org, i) => (
                <div key={`pill-${org}-${i}`} className="flex-shrink-0 flex items-center gap-3 px-8 py-4 rounded-full"
                  style={{
                    background: "linear-gradient(135deg, rgba(31,168,98,0.14) 0%, rgba(31,168,98,0.06) 100%)",
                    border: "1px solid rgba(31,168,98,0.35)",
                    boxShadow: "0 0 20px rgba(31,168,98,0.10), inset 0 1px 0 rgba(255,255,255,0.06)",
                  }}
                  aria-hidden={i >= associations.length}>
                  {/* Dot accent */}
                  <span className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: "var(--color-brand-500)", boxShadow: "0 0 6px var(--color-brand-500)" }}
                    aria-hidden="true" />
                  <span className="text-base font-bold tracking-widest uppercase"
                    style={{ color: "rgba(255,255,255,0.92)", fontFamily: "var(--font-display)", letterSpacing: "0.1em" }}>
                    {org}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 9. TESTIMONIALS ─────────────────────────────────────── */}
        <section className="section-pad" style={{ background: "var(--color-brand-50)" }} aria-label="Customer testimonials">
          <div className="container-tight">
            <FadeIn className="text-center mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[var(--color-brand-500)] mb-3">Real stories</span>
              <h2 className="text-balance">What customers and contractors say</h2>
            </FadeIn>

            <StaggerFade className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {testimonials.map(({ quote, name, location, role, stars, isContractor }) => (
                <StaggerItem key={name}>
                  <div
                    className="rounded-2xl p-7 h-full flex flex-col card-lift"
                    style={{
                      background: "var(--color-white)",
                      border: "1px solid var(--color-line)",
                    }}
                  >
                    <Stars count={stars} />
                    <blockquote className="flex-1 mt-5">
                      <p className="text-sm leading-relaxed" style={{ color: "var(--color-slate)" }}>
                        &ldquo;{quote}&rdquo;
                      </p>
                    </blockquote>
                    <div className="mt-6 flex items-center gap-3 pt-5" style={{ borderTop: "1px solid var(--color-line)" }}>
                      <div className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-bold"
                        style={{ background: "var(--color-brand-100)", color: "var(--color-brand-500)" }}>
                        {name[0]}
                      </div>
                      <div>
                        <p className="text-sm font-semibold" style={{ color: "var(--color-ink)" }}>{name}</p>
                        <p className="text-xs" style={{ color: "var(--color-muted)" }}>
                          {role} · {location}
                        </p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerFade>

            <FadeIn delay={0.3} className="text-center mt-10">
              <Link href="/contractors/testimonials" className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all" style={{ color: "var(--color-brand-500)" }}>
                Read more contractor stories
                <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </FadeIn>
          </div>
        </section>

        {/* ── 10. FAQ ──────────────────────────────────────────────── */}
        <section className="section-pad" style={{ background: "var(--color-white)" }} aria-label="Frequently asked questions">
          <div className="container-tight">
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 lg:gap-24 items-start">

              {/* Left: label + headline + support + CTA */}
              <FadeIn className="lg:sticky lg:top-28">
                <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "var(--color-brand-500)" }}>
                  Common Questions
                </p>
                <h2 className="text-balance mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
                  Everything you need to know
                </h2>
                <p className="text-base leading-relaxed mb-8" style={{ color: "var(--color-slate)" }}>
                  Still have questions? Call our consumer support line at{" "}
                  <a href="tel:8556427631" className="font-semibold hover:underline" style={{ color: "var(--color-ink)" }}>
                    855‑642‑7631
                  </a>.
                </p>
                <Link
                  href="https://dealer.microf.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-grove inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-full text-base"
                >
                  Apply Now
                  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </FadeIn>

              {/* Right: accordion */}
              <div>
                <FAQ faqs={homeFAQs} />
              </div>

            </div>
          </div>
        </section>

        {/* ── 11. CTA BAND ────────────────────────────────────────── */}
        <section className="section-pad" style={{ background: "var(--color-brand-500)" }} aria-label="Call to action">
          <div className="container-tight text-center">
            <FadeIn>
              <h2 className="text-balance mb-4" style={{ fontWeight: 800, color: "white" }}>
                Ready to get comfortable?
              </h2>
              <p className="text-lg mb-10" style={{ color: "rgba(255,255,255,0.92)", maxWidth: "36rem", margin: "0 auto 2.5rem" }}>
                Apply in minutes. No credit check. Get real comfort in your home — on a payment that fits your budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://dealer.microf.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-full text-base cursor-pointer transition-transform hover:-translate-y-1"
                  style={{ background: "var(--color-brand-900)", color: "white", boxShadow: "0 8px 32px rgba(0,0,0,0.25)" }}
                >
                  Apply Now — No Credit Check
                  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link
                  href="/contractors/become-a-partner"
                  className="inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-full text-base border-2 border-white/30 hover:border-white/60 hover:bg-white/10 transition-all cursor-pointer"
                >
                  Partner as a Contractor
                </Link>
              </div>
              <p className="text-xs mt-8" style={{ color: "rgba(255,255,255,0.80)" }}>
                Consumer support: <a href="tel:8556427631" className="underline hover:text-white transition-colors">855-642-7631</a>
                &nbsp;·&nbsp;
                Contractor support: <a href="tel:8554988200" className="underline hover:text-white transition-colors">855-498-8200</a>
              </p>
            </FadeIn>
          </div>
        </section>


      </main>
      <Footer />
    </>
  );
}
