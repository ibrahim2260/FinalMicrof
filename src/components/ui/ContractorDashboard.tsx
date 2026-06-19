"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const JOBS = [
  { initial: "M", name: "Marcus R.", job: "HVAC Replacement",  amount: "$4,200", status: "approved"  },
  { initial: "D", name: "Diana C.",  job: "Heat Pump Install",  amount: "$3,800", status: "reviewing" },
  { initial: "T", name: "Tom H.",    job: "Furnace + AC",       amount: "$5,100", status: "funded"    },
  { initial: "S", name: "Sarah M.",  job: "AC Replacement",     amount: "$3,200", status: "funded"    },
] as const;

type Status = "reviewing" | "approved" | "funded";

const STATUS_CONFIG: Record<Status, { label: string; bg: string; border: string; color: string; dot: string }> = {
  reviewing: { label: "Reviewing", bg: "rgba(245,166,35,0.15)", border: "rgba(245,166,35,0.40)", color: "#F5C063", dot: "#F5A623" },
  approved:  { label: "Approved",  bg: "rgba(31,168,98,0.18)",  border: "rgba(31,168,98,0.50)",  color: "#46C381", dot: "#1FA862" },
  funded:    { label: "Funded ✓",  bg: "rgba(31,168,98,0.28)",  border: "rgba(31,168,98,0.70)",  color: "#7DDBA8", dot: "#46C381" },
};

const AVATAR_COLORS: Record<string, { bg: string; color: string }> = {
  M: { bg: "rgba(31,168,98,0.25)",  color: "#46C381" },
  D: { bg: "rgba(245,166,35,0.20)", color: "#F5C063" },
  T: { bg: "rgba(31,168,98,0.25)",  color: "#7DDBA8" },
  S: { bg: "rgba(31,168,98,0.25)",  color: "#46C381" },
};

const DELAYS    = [0, 1400, 2800, 4200];
const FOOTER_MS = 5600;
const RESET_MS  = 9000;

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function ContractorDashboard() {
  const [visible, setVisible]       = useState(0);
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    DELAYS.forEach((delay, i) => {
      timers.push(setTimeout(() => setVisible(i + 1), delay));
    });

    timers.push(setTimeout(() => setShowFooter(true),  FOOTER_MS));
    timers.push(setTimeout(() => { setVisible(0); setShowFooter(false); }, RESET_MS));
    timers.push(setTimeout(() => setVisible(1), RESET_MS + 80));

    return () => timers.forEach(clearTimeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible === 0 ? 0 : undefined]);

  return (
    <div
      className="relative w-full"
      style={{ maxWidth: "400px" }}
      aria-label="Microf Dealer Portal — live application feed"
    >
      {/* Fixed-height card — never grows, so it never stretches the hero section */}
      <div
        style={{
          height: "358px",
          display: "flex",
          flexDirection: "column",
          borderRadius: "24px",
          overflow: "hidden",
          background: "rgba(8,41,31,0.88)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow: "0 40px 96px rgba(0,0,0,0.45), inset 0 0 0 1px rgba(255,255,255,0.04)",
        }}
      >
        {/* ── Header bar ───────────────────────────── */}
        <div
          className="flex items-center justify-between px-5 py-3.5 flex-shrink-0"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FF5F57" }} aria-hidden="true" />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FEBC2E" }} aria-hidden="true" />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#28C840" }} aria-hidden="true" />
          </div>
          <p className="text-xs font-mono tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.28)" }}>
            Microf Dealer Portal
          </p>
        </div>

        {/* ── Section label ────────────────────────── */}
        <div
          className="flex items-center justify-between px-5 py-2.5 flex-shrink-0"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.35)" }}>
            Recent Applications
          </p>
          <span className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: "#46C381" }}>
            <span className="relative flex w-1.5 h-1.5" aria-hidden="true">
              <span className="absolute inset-0 rounded-full animate-ping" style={{ background: "rgba(31,168,98,0.6)" }} />
              <span className="relative w-1.5 h-1.5 rounded-full" style={{ background: "#1FA862" }} />
            </span>
            Live
          </span>
        </div>

        {/* ── Job rows — flex-1 so they fill the remaining space ── */}
        <div
          className="flex-1 overflow-hidden px-4 py-3 flex flex-col gap-2"
          style={{ minHeight: 0 }}
        >
          <AnimatePresence initial={false}>
            {JOBS.slice(0, visible).map((job, i) => {
              const cfg    = STATUS_CONFIG[job.status as Status];
              const avatar = AVATAR_COLORS[job.initial] ?? { bg: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)" };

              return (
                <motion.div
                  key={`${job.name}-${i}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.45, ease: EASE }}
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 flex-shrink-0"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {/* Avatar */}
                  <div
                    className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold"
                    style={{ background: avatar.bg, color: avatar.color }}
                    aria-hidden="true"
                  >
                    {job.initial}
                  </div>

                  {/* Name + job */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold leading-snug truncate" style={{ color: "rgba(255,255,255,0.90)" }}>
                      {job.name}
                    </p>
                    <p className="text-xs truncate" style={{ color: "rgba(255,255,255,0.38)" }}>
                      {job.job}
                    </p>
                  </div>

                  {/* Amount */}
                  <p className="text-sm font-bold flex-shrink-0" style={{ color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-display)" }}>
                    {job.amount}
                  </p>

                  {/* Status badge */}
                  <motion.span
                    initial={{ scale: 0.85, opacity: 0 }}
                    animate={
                      job.status === "approved"
                        ? { scale: [0.85, 1.12, 1], opacity: 1 }
                        : { scale: 1, opacity: 1 }
                    }
                    transition={{ duration: 0.5, ease: EASE }}
                    className="flex-shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold"
                    style={{ background: cfg.bg, border: `1px solid ${cfg.border}`, color: cfg.color }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: cfg.dot }} aria-hidden="true" />
                    {cfg.label}
                  </motion.span>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Blinking cursor while waiting */}
          {visible < JOBS.length && visible > 0 && (
            <motion.div
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.1, repeat: Infinity }}
              className="flex items-center gap-2 px-3 flex-shrink-0"
              aria-hidden="true"
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.18)" }} />
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.18)" }}>—</span>
            </motion.div>
          )}
        </div>

        {/* ── Footer — fixed slot at bottom, fades in ── */}
        <div className="flex-shrink-0" style={{ height: "48px", position: "relative", overflow: "hidden" }}>
          <AnimatePresence>
            {showFooter && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="absolute inset-0 flex items-center gap-2 px-5"
                style={{
                  borderTop: "1px solid rgba(31,168,98,0.22)",
                  background: "rgba(31,168,98,0.08)",
                }}
              >
                <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
                  <circle cx="10" cy="10" r="9" stroke="#46C381" strokeWidth="1.5"/>
                  <path d="M10 6v4l2.5 2.5" stroke="#46C381" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <p className="text-xs font-semibold" style={{ color: "#46C381" }}>
                  7 jobs funded this week · <span style={{ color: "#7DDBA8" }}>$29,400 deposited</span>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
