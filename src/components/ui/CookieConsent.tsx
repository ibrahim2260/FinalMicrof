"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const accepted = localStorage.getItem("microf_cookie_consent");
      if (!accepted) setVisible(true);
    } catch {
      // localStorage unavailable — don't show banner
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem("microf_cookie_consent", "true");
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      className="fixed bottom-4 left-4 right-4 z-[100] max-w-xl md:left-auto md:right-6 md:bottom-6"
    >
      <div
        className="rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center gap-4"
        style={{
          background: "var(--color-slate)",
          boxShadow: "0 8px 40px rgba(0,0,0,0.30)",
          border: "1px solid rgba(255,255,255,0.10)",
        }}
      >
        <p className="text-sm text-white/75 leading-relaxed flex-1">
          We use cookies and analytics (Google Tag Manager) to improve your experience.{" "}
          <Link href="/privacy-statement" className="underline underline-offset-2 hover:text-white transition-colors">
            Privacy Statement
          </Link>
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={() => setVisible(false)}
            className="text-sm text-white/50 hover:text-white transition-colors px-3 py-2"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="btn-grove text-sm text-white font-semibold px-5 py-2 rounded-full"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
