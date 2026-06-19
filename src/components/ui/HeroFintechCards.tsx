"use client";

import { motion } from "framer-motion";

export default function HeroFintechCards() {
  return (
    <div className="relative w-full" style={{ height: "420px", maxWidth: "380px" }}>

      {/* Card 1 — Approval */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: [0, -10, 0] }}
        transition={{
          opacity: { duration: 0.7, delay: 0.1 },
          y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0 },
        }}
        style={{
          position: "absolute", top: 0, left: 0, right: 0,
          rotate: "-2deg",
          background: "rgba(31,168,98,0.12)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(31,168,98,0.4)",
          boxShadow: "0 24px 64px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.10)",
          borderRadius: "20px",
          padding: "20px 24px",
        }}
      >
        <div className="flex items-center gap-3 mb-3">
          {/* Pulse dot */}
          <span className="relative flex-shrink-0 w-2.5 h-2.5">
            <span className="absolute inset-0 rounded-full animate-ping" style={{ background: "rgba(31,168,98,0.5)" }} />
            <span className="relative w-2.5 h-2.5 rounded-full block" style={{ background: "#1FA862" }} />
          </span>
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#46C381" }}>
            Application Approved
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-bold" style={{ background: "rgba(31,168,98,0.25)", color: "#46C381" }}>
            S
          </div>
          <div>
            <p className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.95)" }}>Sarah M.</p>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>just now · Raleigh, NC</p>
          </div>
          <div className="ml-auto">
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
              <circle cx="12" cy="12" r="10" stroke="rgba(31,168,98,0.4)" strokeWidth="1.5"/>
              <path d="M7.5 12l3 3 5.5-5.5" stroke="#1FA862" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Card 2 — Payment */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: [0, -10, 0] }}
        transition={{
          opacity: { duration: 0.7, delay: 0.25 },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
        }}
        style={{
          position: "absolute", top: "145px", left: "20px", right: "-20px",
          rotate: "1.5deg",
          background: "rgba(255,255,255,0.06)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow: "0 20px 56px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.08)",
          borderRadius: "20px",
          padding: "20px 24px",
        }}
      >
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
          Your monthly payment
        </p>
        <div className="flex items-end gap-1 mb-3">
          <span style={{ fontSize: "2.75rem", fontWeight: 800, lineHeight: 1, color: "white", fontFamily: "var(--font-display)", letterSpacing: "-0.04em" }}>
            $89
          </span>
          <span className="text-base font-semibold mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>/mo</span>
        </div>
        <div className="flex items-center gap-4 text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
          <span>24 months</span>
          <span style={{ color: "rgba(255,255,255,0.2)" }}>·</span>
          <span>0 hard inquiries</span>
          <span style={{ color: "rgba(255,255,255,0.2)" }}>·</span>
          <span style={{ color: "#46C381" }}>No credit check</span>
        </div>
      </motion.div>

      {/* Card 3 — Trust */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: [0, -10, 0] }}
        transition={{
          opacity: { duration: 0.7, delay: 0.4 },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
        }}
        style={{
          position: "absolute", top: "295px", left: 0, right: "20px",
          rotate: "-1deg",
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 16px 48px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.05)",
          borderRadius: "20px",
          padding: "18px 24px",
        }}
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1 mb-1" aria-label="4.8 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <svg key={i} viewBox="0 0 16 16" className="w-4 h-4" aria-hidden="true">
                  <path d="M8 1l1.9 3.9L14 5.8l-3 2.9.7 4.1L8 10.6l-3.7 2.2.7-4.1-3-2.9 4.1-.9L8 1z" fill="#1FA862"/>
                </svg>
              ))}
              <span className="text-sm font-bold ml-1.5" style={{ color: "white" }}>4.8</span>
            </div>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>2,400+ homeowners approved</p>
          </div>
          <div className="text-right">
            <p className="text-xs font-semibold" style={{ color: "rgba(255,255,255,0.6)" }}>43 states</p>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>served</p>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
