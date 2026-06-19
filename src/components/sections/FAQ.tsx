"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  /* accept both "items" (legacy) and "faqs" (new) */
  items?: FAQItem[];
  faqs?: FAQItem[];
}

export default function FAQ({ items, faqs }: FAQProps) {
  const list = faqs ?? items ?? [];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y" style={{ borderColor: "var(--color-line)" }} role="list">
      {list.map((item, i) => {
        const isOpen = openIndex === i;
        const id = `faq-answer-${i}`;

        return (
          <div key={i} role="listitem">
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-start justify-between gap-4 py-5 text-left cursor-pointer"
              aria-expanded={isOpen}
              aria-controls={id}
            >
              <span
                className="font-semibold text-base leading-snug transition-colors"
                style={{ color: isOpen ? "var(--color-brand-500)" : "var(--color-ink)" }}
              >
                {item.question}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center mt-0.5"
                style={{
                  borderColor: isOpen ? "var(--color-brand-500)" : "var(--color-line)",
                  color: isOpen ? "var(--color-brand-500)" : "var(--color-muted)",
                }}
                aria-hidden="true"
              >
                <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                  <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={id}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                  style={{ overflow: "hidden" }}
                >
                  <p className="pb-5 leading-relaxed pr-10 text-sm" style={{ color: "var(--color-slate)" }}>
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
