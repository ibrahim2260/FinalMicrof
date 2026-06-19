"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const events = [
  {
    time: "6:00 PM",
    label: "AC unit stops working",
    sub: "100°F outside. Kids inside.",
    status: "alert",
  },
  {
    time: "6:09 PM",
    label: "Called the bank",
    sub: "Application denied.",
    status: "denied",
  },
  {
    time: "6:17 PM",
    label: "Tried the credit card",
    sub: "Limit too low.",
    status: "denied",
  },
  {
    time: "6:22 PM",
    label: "Applied to Microf",
    sub: "5-minute application. No credit check.",
    status: "pending",
  },
  {
    time: "6:27 PM",
    label: "Approved",
    sub: "Contractor received the green light.",
    status: "approved",
  },
  {
    time: "7:15 PM",
    label: "Installation complete",
    sub: "Family is cool. Problem solved.",
    status: "done",
  },
];

const statusConfig = {
  alert: {
    dot: "#FF6B6B",
    badge: "rgba(255,107,107,0.15)",
    badgeBorder: "rgba(255,107,107,0.35)",
    badgeText: "#FF8F8F",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
        <path d="M8 3v5M8 11v1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  denied: {
    dot: "#FF4444",
    badge: "rgba(255,68,68,0.12)",
    badgeBorder: "rgba(255,68,68,0.3)",
    badgeText: "#FF7070",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
        <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  pending: {
    dot: "#F5A623",
    badge: "rgba(245,166,35,0.12)",
    badgeBorder: "rgba(245,166,35,0.3)",
    badgeText: "#F5C063",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
        <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 5v3.5l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  approved: {
    dot: "#1FA862",
    badge: "rgba(31,168,98,0.15)",
    badgeBorder: "rgba(31,168,98,0.4)",
    badgeText: "#46C381",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
        <path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  done: {
    dot: "#46C381",
    badge: "rgba(70,195,129,0.12)",
    badgeBorder: "rgba(70,195,129,0.3)",
    badgeText: "#7DDBA8",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
        <path d="M2 9l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
};

const DELAYS = [0, 1800, 3400, 5000, 6400, 8000];
const RESET_DELAY = 12000;

export default function MomentGraphic() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    events.forEach((_, i) => {
      timers.push(setTimeout(() => setVisible(i + 1), DELAYS[i]));
    });

    timers.push(
      setTimeout(() => setVisible(0), RESET_DELAY),
      setTimeout(() => setVisible(1), RESET_DELAY + 80),
    );

    return () => timers.forEach(clearTimeout);
  }, [visible === 0 ? 0 : undefined]); // restart loop when reset

  return (
    <div
      className="relative w-full"
      style={{ maxWidth: "380px" }}
      aria-label="Story animation: from AC breakdown to Microf approval"
    >
      {/* Card shell */}
      <div
        className="rounded-3xl overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.09)",
          boxShadow: "0 40px 80px rgba(0,0,0,0.4)",
        }}
      >
        {/* Header bar */}
        <div
          className="flex items-center justify-between px-6 py-4"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full" style={{ background: "#FF5F57" }} aria-hidden="true" />
            <span className="w-2 h-2 rounded-full" style={{ background: "#FEBC2E" }} aria-hidden="true" />
            <span className="w-2 h-2 rounded-full" style={{ background: "#28C840" }} aria-hidden="true" />
          </div>
          <p className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.3)" }}>
            Real-time · Tonight
          </p>
        </div>

        {/* Timeline items */}
        <div className="px-5 py-5 space-y-3" style={{ minHeight: "340px" }}>
          <AnimatePresence initial={false}>
            {events.slice(0, visible).map((evt, i) => {
              const cfg = statusConfig[evt.status as keyof typeof statusConfig];
              const isLast = i === visible - 1;
              return (
                <motion.div
                  key={`${evt.time}-${i}`}
                  initial={{ opacity: 0, y: 14, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-3"
                >
                  {/* Dot + line */}
                  <div className="flex flex-col items-center flex-shrink-0 mt-1">
                    <span
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                      style={{
                        background: cfg.dot,
                        boxShadow: isLast ? `0 0 8px ${cfg.dot}` : "none",
                      }}
                      aria-hidden="true"
                    />
                    {i < visible - 1 && (
                      <span
                        className="w-px mt-1"
                        style={{ height: "28px", background: "rgba(255,255,255,0.08)" }}
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-1">
                    <div className="flex items-center justify-between gap-2 mb-0.5">
                      <p
                        className="text-sm font-semibold leading-snug"
                        style={{ color: isLast ? "white" : "rgba(255,255,255,0.75)" }}
                      >
                        {evt.label}
                      </p>
                      {/* Status badge */}
                      <span
                        className="flex-shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold"
                        style={{
                          background: cfg.badge,
                          border: `1px solid ${cfg.badgeBorder}`,
                          color: cfg.badgeText,
                        }}
                      >
                        <span style={{ color: cfg.badgeText }}>{cfg.icon}</span>
                        {evt.status === "denied" ? "Denied" :
                          evt.status === "alert" ? "Alert" :
                          evt.status === "pending" ? "Processing" :
                          evt.status === "approved" ? "Approved" : "Done"}
                      </span>
                    </div>
                    <p className="text-xs" style={{ color: "rgba(255,255,255,0.38)" }}>
                      {evt.time} · {evt.sub}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Blinking cursor while waiting for next event */}
          {visible < events.length && visible > 0 && (
            <motion.div
              key="cursor"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="flex items-center gap-2 pl-0.5"
            >
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,255,255,0.2)" }} aria-hidden="true" />
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>—</span>
            </motion.div>
          )}
        </div>

        {/* Footer — only shown when approved */}
        <AnimatePresence>
          {visible >= 5 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="px-6 py-4"
              style={{ borderTop: "1px solid rgba(31,168,98,0.2)", background: "rgba(31,168,98,0.07)" }}
            >
              <p className="text-xs font-semibold" style={{ color: "#46C381" }}>
                ✓ Microf processed this in under 5 minutes
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
