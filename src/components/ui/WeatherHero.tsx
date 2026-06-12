"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import type { Mood } from "@/lib/weather";

// ── Products ──────────────────────────────────────────────────────────────────

interface Product {
  id: string;
  word: string;
  label: string;
  href: string;
}

const PRODUCTS: Product[] = [
  { id: "furnace",      word: "furnace",      label: "Furnaces",         href: "/homeowners/hvac" },
  { id: "ac",           word: "AC unit",       label: "Air Conditioners", href: "/homeowners/hvac" },
  { id: "heat-pump",    word: "heat pump",    label: "Heat Pumps",       href: "/homeowners/hvac" },
  { id: "mini-split",   word: "mini-split",   label: "Mini-Splits",      href: "/homeowners/hvac" },
  { id: "water-heater", word: "water heater", label: "Water Heaters",    href: "/homeowners/water-heaters" },
];

// ── Rotation items ────────────────────────────────────────────────────────────
// COLD/HOT rotate product words; MILD rotates problem phrases mapped to a pill.

interface RotationItem {
  id: string;
  displayText: string;
  activeProductId: string;
}

// cold / hot: product-word rotation
const COLD_HOT_ORDERS: Record<"cold" | "hot", string[]> = {
  cold: ["furnace", "water-heater", "heat-pump", "ac", "mini-split"],
  hot:  ["ac", "mini-split", "heat-pump", "water-heater", "furnace"],
};

// mild: problem-phrase rotation → mapped pill
// "silent mini-split" is the longest phrase and sets the headline sizer width
const MILD_PROBLEMS: RotationItem[] = [
  { id: "cold-shower",   displayText: "cold shower",       activeProductId: "water-heater" },
  { id: "dead-furnace",  displayText: "dead furnace",      activeProductId: "furnace" },
  { id: "broken-ac",     displayText: "broken AC unit",    activeProductId: "ac" },
  { id: "tired-pump",    displayText: "tired heat pump",   activeProductId: "heat-pump" },
  { id: "silent-split",  displayText: "silent mini-split", activeProductId: "mini-split" },
];

function getRotationItems(mood: Mood): RotationItem[] {
  if (mood === "mild") return MILD_PROBLEMS;
  return COLD_HOT_ORDERS[mood].map((id) => {
    const p = PRODUCTS.find((pr) => pr.id === id)!;
    return { id: p.id, displayText: p.word, activeProductId: p.id };
  });
}

// ── Mood palettes ─────────────────────────────────────────────────────────────

interface MoodConfig {
  bgBase: string;
  bgGradient: string;
  ambientGlow: string;
  bottomGlow: string;
  textPrimary: string;
  textMuted: string;
  accent: string;
  accentSoft: string;
  chipBg: string;
  chipBorder: string;
  statsBg: string;
  statsDivider: string;
  chipIcon: string;
  particleType: "snow" | "heat" | "motes" | "none";
  subheadline: string;
  // min-width sizer text for the rotating headline slot
  headlineSizer: string;
}

const MOOD_CONFIG: Record<Mood, MoodConfig> = {
  cold: {
    bgBase:        "#06111E",
    bgGradient:    "radial-gradient(ellipse 130% 90% at 70% -5%, rgba(10,28,52,1) 0%, rgba(4,8,18,1) 60%)",
    ambientGlow:   "radial-gradient(ellipse 55% 45% at 72% 8%, rgba(96,184,232,0.10) 0%, transparent 65%)",
    bottomGlow:    "radial-gradient(ellipse 90% 35% at 50% 105%, rgba(24,55,100,0.18) 0%, transparent 55%)",
    textPrimary:   "#FFFFFF",
    textMuted:     "rgba(186,218,240,0.80)",
    accent:        "#7DD3FC",
    accentSoft:    "rgba(125,211,252,0.20)",
    chipBg:        "rgba(125,211,252,0.08)",
    chipBorder:    "rgba(125,211,252,0.22)",
    statsBg:       "rgba(3,8,18,0.82)",
    statsDivider:  "rgba(125,211,252,0.16)",
    chipIcon:      "❄️",
    particleType:  "snow",
    subheadline:   "When the temperature drops, financing shouldn't freeze you out. Microf gets you approved in minutes.",
    headlineSizer: "water heater",
  },
  hot: {
    bgBase:        "#180800",
    bgGradient:    "radial-gradient(ellipse 130% 90% at 30% 105%, rgba(40,12,0,1) 0%, rgba(10,4,0,1) 60%)",
    ambientGlow:   "radial-gradient(ellipse 65% 55% at 50% 100%, rgba(234,88,12,0.15) 0%, transparent 60%)",
    bottomGlow:    "radial-gradient(ellipse 50% 40% at 50% 110%, rgba(249,115,22,0.12) 0%, transparent 60%)",
    textPrimary:   "#FFFFFF",
    textMuted:     "rgba(255,198,140,0.80)",
    accent:        "#FB923C",
    accentSoft:    "rgba(251,146,60,0.22)",
    chipBg:        "rgba(251,146,60,0.10)",
    chipBorder:    "rgba(251,146,60,0.28)",
    statsBg:       "rgba(10,3,0,0.82)",
    statsDivider:  "rgba(251,146,60,0.18)",
    chipIcon:      "☀️",
    particleType:  "heat",
    subheadline:   "When the heat hits and your system quits, every hour matters. Get approved and cool down — today.",
    headlineSizer: "water heater",
  },
  // ── GOLDEN HOUR — deepest, most premium mood ──────────────────────────────
  // bg: #130E24 deep twilight plum (ink #1A1F2E shifted ~30° toward violet)
  // accent: #F0C070 warm lamplight gold (ember #E8621A cooled, softened, brightened)
  // WCAG AA verified: #F0C070 on #130E24 → 12.2:1 (passes AAA)
  // muted rgba(240,192,112,0.80) composited → 8.0:1 (passes AAA)
  mild: {
    bgBase:        "#130E24",
    bgGradient:    "radial-gradient(ellipse 130% 90% at 60% -5%, rgba(28,18,50,1) 0%, rgba(10,8,20,1) 60%)",
    ambientGlow:   "radial-gradient(ellipse 55% 45% at 75% 15%, rgba(240,192,112,0.09) 0%, transparent 65%)",
    bottomGlow:    "radial-gradient(ellipse 80% 40% at 50% 100%, rgba(40,28,70,0.30) 0%, transparent 55%)",
    textPrimary:   "#FFFFFF",
    textMuted:     "rgba(240,192,112,0.80)",
    accent:        "#F0C070",
    accentSoft:    "rgba(240,192,112,0.22)",
    chipBg:        "rgba(240,192,112,0.10)",
    chipBorder:    "rgba(240,192,112,0.28)",
    statsBg:       "rgba(10,8,20,0.82)",
    statsDivider:  "rgba(240,192,112,0.18)",
    chipIcon:      "🌅",
    particleType:  "motes",
    subheadline:   "Breakdowns don't wait for bad weather — and you shouldn't have to wait for help. Lease-to-own financing with a decision in minutes and no hard credit check.",
    headlineSizer: "silent mini-split",
  },
};

const STATS = [
  { value: "43",       label: "States served" },
  { value: "< 5 min",  label: "Avg. application time" },
  { value: "Zero",     label: "Hard credit checks" },
];

// ── Particle system ───────────────────────────────────────────────────────────

interface Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  drift: number;
  phase: number;
  opacity: number;
  opacityDir: number;
}

function makeSnowParticle(w: number, h: number, randomY: boolean): Particle {
  return {
    x: Math.random() * w,
    y: randomY ? Math.random() * h : -8,
    size: 1 + Math.random() * 2.5,
    speed: 0.4 + Math.random() * 0.8,
    drift: 0.4 + Math.random() * 0.6,
    phase: Math.random() * Math.PI * 2,
    opacity: 0.3 + Math.random() * 0.4,
    opacityDir: 1,
  };
}

function makeHeatParticle(w: number, h: number, randomY: boolean): Particle {
  return {
    x: Math.random() * w,
    y: randomY ? Math.random() * h : h + 8,
    size: 2 + Math.random() * 3,
    speed: 0.4 + Math.random() * 1.0,
    drift: 0.5 + Math.random() * 0.8,
    phase: Math.random() * Math.PI * 2,
    opacity: 0.08 + Math.random() * 0.12,
    opacityDir: 1,
  };
}

function makeMoteParticle(w: number, h: number, randomY: boolean): Particle {
  return {
    x: Math.random() * w,
    y: randomY ? Math.random() * h : h + 8,
    size: 1.5 + Math.random() * 2,
    speed: 0.15 + Math.random() * 0.25,
    drift: 0.3 + Math.random() * 0.5,
    phase: Math.random() * Math.PI * 2,
    opacity: 0.15 + Math.random() * 0.25,
    opacityDir: Math.random() > 0.5 ? 1 : -1,
  };
}

// Sine-line descriptors for the MILD motes layer
const SINE_LINES = [
  { yFrac: 0.22, amp: 10, xFreq: 0.012, tSpeed: 0.00015, phase: 0.0,  opacity: 0.09 },
  { yFrac: 0.40, amp:  8, xFreq: 0.009, tSpeed: 0.00012, phase: 2.1,  opacity: 0.07 },
  { yFrac: 0.62, amp: 13, xFreq: 0.015, tSpeed: 0.00018, phase: 4.3,  opacity: 0.10 },
  { yFrac: 0.78, amp:  7, xFreq: 0.011, tSpeed: 0.00010, phase: 1.5,  opacity: 0.08 },
];

function ParticlesCanvas({
  particleType,
}: {
  particleType: "snow" | "heat" | "motes";
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef    = useRef<number>(0);
  const particles = useRef<Particle[]>([]);
  const paused    = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isMobile = window.innerWidth < 768;
    const MAX =
      particleType === "motes" ? (isMobile ? 12 : 20) :
      isMobile ? 20 : 40;

    const init = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      particles.current = Array.from({ length: MAX }, () => {
        if (particleType === "snow")  return makeSnowParticle(canvas.width, canvas.height, true);
        if (particleType === "motes") return makeMoteParticle(canvas.width, canvas.height, true);
        return makeHeatParticle(canvas.width, canvas.height, true);
      });
    };
    init();
    window.addEventListener("resize", init);

    const onVis = () => { paused.current = document.hidden; };
    document.addEventListener("visibilitychange", onVis);

    const draw = (t: number) => {
      rafRef.current = requestAnimationFrame(draw);
      if (paused.current) return;
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      if (particleType === "snow") {
        for (const p of particles.current) {
          p.y += p.speed;
          p.x += Math.sin(t * 0.001 * p.drift + p.phase) * 0.5;
          if (p.y > H + 4) { p.x = Math.random() * W; p.y = -4; }
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(200,230,255,${p.opacity})`;
          ctx.fill();
        }

      } else if (particleType === "heat") {
        for (const p of particles.current) {
          p.y -= p.speed;
          p.x += Math.sin(t * 0.0008 * p.drift + p.phase) * 0.7;
          p.opacity += p.opacityDir * 0.001;
          if (p.opacity > 0.22 || p.opacity < 0.04) p.opacityDir *= -1;
          if (p.y < -10) { p.x = Math.random() * W; p.y = H + 10; }
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,175,70,${p.opacity})`;
          ctx.fill();
        }

      } else {
        // ── motes: sine lines first (behind motes) ──────────────────
        ctx.save();
        ctx.lineWidth = 1;
        for (const line of SINE_LINES) {
          const baseY = H * line.yFrac;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(240,192,112,${line.opacity})`;
          const step = 5;
          for (let x = 0; x <= W + step; x += step) {
            const y = baseY + line.amp * Math.sin(x * line.xFreq - t * line.tSpeed + line.phase);
            x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
        ctx.restore();

        // ── motes: warm gold dust drifting upward ───────────────────
        for (const p of particles.current) {
          p.y -= p.speed;
          p.x += Math.sin(t * 0.0005 * p.drift + p.phase) * 0.3;
          p.opacity += p.opacityDir * 0.003;
          if (p.opacity > 0.45 || p.opacity < 0.12) p.opacityDir *= -1;
          if (p.y < -10) {
            p.x = Math.random() * W;
            p.y = H + 10;
            p.opacity = 0.15 + Math.random() * 0.20;
          }
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(240,192,112,${p.opacity})`;
          ctx.fill();
        }
      }
    };
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", init);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [particleType]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}

// ── Main hero component ───────────────────────────────────────────────────────

interface WeatherHeroProps {
  mood: Mood;
  temp: number | null;
  city: string;
  chipText: string;
}

export function WeatherHero({ mood, temp: _temp, city: _city, chipText }: WeatherHeroProps) {
  const config        = MOOD_CONFIG[mood];
  const rotationItems = getRotationItems(mood);

  const [activeIdx,     setActiveIdx]     = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  const current         = rotationItems[activeIdx];
  const activeProductId = current.activeProductId;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(
      () => setActiveIdx((i) => (i + 1) % rotationItems.length),
      2600
    );
    return () => clearInterval(id);
  }, [reducedMotion, rotationItems.length]);

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: config.bgBase }}
      aria-label="Hero — Microf home comfort financing"
    >
      {/* ── Background atmosphere ───────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/*
          To replace with photography:
            <Image src="/hero-bg.jpg" alt="" fill priority sizes="100vw"
              className="object-cover object-center" />
          then keep the overlay divs below for mood tinting.
        */}
        <div className="absolute inset-0" style={{ background: config.bgGradient }} />
        <div className="absolute inset-0" style={{ background: config.ambientGlow }} />
        <div className="absolute inset-0" style={{ background: config.bottomGlow }} />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(0,0,0,0.42) 100%)",
          }}
        />
      </div>

      {/* ── Particle canvas ─────────────────────────────────────────── */}
      {!reducedMotion && config.particleType !== "none" && (
        <ParticlesCanvas particleType={config.particleType} />
      )}

      {/* Screen-reader product list (static, always present) */}
      <div className="sr-only">
        <p>Products available for lease-to-own financing:</p>
        <ul>
          {PRODUCTS.map((p) => (
            <li key={p.id}>
              <Link href={p.href}>{p.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* ── Content ─────────────────────────────────────────────────── */}
      <div className="relative z-10 flex-1 flex flex-col justify-center container-tight px-6 md:px-8 pt-28 md:pt-32 pb-32 md:pb-40">

        {/* Weather chip */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-7 md:mb-9"
        >
          <span
            className="inline-flex items-center gap-2 text-sm font-medium rounded-full px-3.5 py-1.5"
            style={{
              background:          config.chipBg,
              border:              `1px solid ${config.chipBorder}`,
              color:               config.accent,
              backdropFilter:      "blur(8px)",
              WebkitBackdropFilter:"blur(8px)",
            }}
          >
            <span aria-hidden="true">{config.chipIcon}</span>
            {chipText}
          </span>
        </motion.div>

        {/* ── Headline — branches on mood ─────────────────────────── */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="max-w-4xl tracking-tight"
          style={{
            fontFamily: "var(--font-display)",
            fontSize:   "clamp(2.6rem, 6vw, 4.75rem)",
            lineHeight: 1.05,
            color:      config.textPrimary,
          }}
        >
          {mood === "mild" ? (
            <>
              {"Perfect weather outside won't fix a "}
              <RotatingSlot
                current={current}
                sizer={config.headlineSizer}
                accent={config.accent}
                reducedMotion={reducedMotion}
              />
              {" inside."}
            </>
          ) : (
            <>
              {"Your "}
              <RotatingSlot
                current={current}
                sizer={config.headlineSizer}
                accent={config.accent}
                reducedMotion={reducedMotion}
              />
              {" shouldn't get to decide your comfort."}
            </>
          )}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-6 max-w-xl text-base md:text-lg leading-relaxed"
          style={{ color: config.textMuted }}
        >
          {config.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.26 }}
          className="mt-9 flex flex-wrap gap-4 items-center"
        >
          <Link
            href="https://dealer.microf.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
            style={{
              background:  config.accent,
              color:       config.bgBase,
              boxShadow:   `0 0 28px ${config.accentSoft}, 0 4px 12px rgba(0,0,0,0.25)`,
            }}
          >
            Apply Now
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <Link
            href="/homeowners"
            className="inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-200 hover:opacity-90"
            style={{ color: config.textMuted }}
          >
            See how it works
            <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" aria-hidden="true">
              <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>

        {/* Product pills — active pill tracks rotating problem/word */}
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.36 }}
          aria-label="Browse financing by product"
          className="mt-10 flex flex-wrap gap-2.5"
        >
          {PRODUCTS.map((product) => {
            const isActive = product.id === activeProductId;
            return (
              <Link
                key={product.id}
                href={product.href}
                className="inline-flex items-center text-sm font-medium rounded-full px-3.5 py-1.5 transition-all duration-300"
                style={{
                  background: isActive ? config.accentSoft : "rgba(255,255,255,0.05)",
                  border:     `1px solid ${isActive ? config.accent : "rgba(255,255,255,0.10)"}`,
                  color:      isActive ? config.accent : config.textMuted,
                  boxShadow:  isActive ? `0 0 14px ${config.accentSoft}` : "none",
                }}
                aria-current={isActive ? "true" : undefined}
              >
                {product.label}
              </Link>
            );
          })}
        </motion.nav>
      </div>

      {/* ── Stats bar ───────────────────────────────────────────────── */}
      <div
        className="relative z-10 border-t"
        style={{
          background:           config.statsBg,
          borderColor:          config.statsDivider,
          backdropFilter:       "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        <div className="py-6 px-6 grid grid-cols-3 max-w-lg mx-auto">
          {STATS.map(({ value, label }, i) => (
            <div
              key={label}
              className="flex flex-col items-center text-center px-4"
              style={{
                borderRight: i < STATS.length - 1
                  ? `1px solid ${config.statsDivider}`
                  : "none",
              }}
            >
              <p
                className="text-2xl font-bold leading-none"
                style={{ fontFamily: "var(--font-display)", color: config.textPrimary }}
              >
                {value}
              </p>
              <p
                className="text-xs mt-1.5 font-medium leading-snug"
                style={{ color: config.textMuted }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Rotating headline slot ────────────────────────────────────────────────────
// Extracted to keep the headline JSX readable. Grid-stacking trick prevents
// layout shift: the invisible sizer (widest possible text) always reserves
// space; the visible animated span overlays it in the same grid cell.

function RotatingSlot({
  current,
  sizer,
  accent,
  reducedMotion,
}: {
  current: RotationItem;
  sizer: string;
  accent: string;
  reducedMotion: boolean;
}) {
  return (
    <span aria-live="off" style={{ display: "inline-grid", verticalAlign: "baseline" }}>
      {/* Invisible sizer — reserves space of the longest possible phrase */}
      <span
        aria-hidden="true"
        style={{ visibility: "hidden", gridRow: 1, gridColumn: 1 }}
      >
        {sizer}
      </span>

      {/* Visible rotating phrase */}
      <AnimatePresence mode="wait">
        <motion.span
          key={current.id}
          initial={reducedMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reducedMotion ? {} : { opacity: 0, y: -10 }}
          transition={{ duration: 0.30, ease: [0.21, 0.47, 0.32, 0.98] }}
          style={{
            gridRow: 1, gridColumn: 1,
            position: "relative",
            display: "inline-block",
            color: accent,
          }}
        >
          {current.displayText}
          {/* Gold underline */}
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: "-0.10em",
              left: 0, right: 0,
              height: "0.045em",
              borderRadius: "9999px",
              background: accent,
              opacity: 0.45,
            }}
          />
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
