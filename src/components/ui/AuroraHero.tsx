"use client";

import React from "react";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

export function AuroraHero() {
  return (
    <section
      className="relative overflow-hidden min-h-[85vh] flex items-center"
      style={{ background: "#070E17" }}
      aria-label="Homeowners hero"
    >
      {/* ── Aurora blobs — grove-palette re-skin ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">

        {/* Blob 1 — slate blue, top-left */}
        <div
          className="absolute rounded-full"
          style={{
            width: 700, height: 560,
            top: "-10%", left: "5%",
            background: "radial-gradient(ellipse at center, rgba(18,52,77,0.70) 0%, transparent 70%)",
            filter: "blur(72px)",
            animation: "aurora1 9s ease-in-out infinite alternate",
          }}
        />

        {/* Blob 2 — grove green, right */}
        <div
          className="absolute rounded-full"
          style={{
            width: 580, height: 460,
            top: "5%", right: "-5%",
            background: "radial-gradient(ellipse at center, rgba(26,92,56,0.50) 0%, transparent 70%)",
            filter: "blur(80px)",
            animation: "aurora2 7s ease-in-out infinite alternate-reverse",
          }}
        />

        {/* Blob 3 — lighter grove, bottom-left */}
        <div
          className="absolute rounded-full"
          style={{
            width: 640, height: 500,
            bottom: "0%", left: "10%",
            background: "radial-gradient(ellipse at center, rgba(26,92,56,0.35) 0%, transparent 70%)",
            filter: "blur(90px)",
            animation: "aurora3 11s ease-in-out infinite alternate",
          }}
        />

        {/* Blob 4 — pale grove, bottom-right */}
        <div
          className="absolute rounded-full"
          style={{
            width: 520, height: 340,
            bottom: "10%", right: "10%",
            background: "radial-gradient(ellipse at center, rgba(91,196,138,0.22) 0%, transparent 70%)",
            filter: "blur(80px)",
            animation: "aurora4 8s ease-in-out infinite alternate-reverse",
          }}
        />

        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 30%, rgba(7,14,23,0.55) 100%)",
          }}
        />
      </div>

      {/* ── Hero content ── */}
      <div className="relative z-10 container-tight w-full py-24 md:py-32">
        <div className="max-w-2xl">

          <FadeIn>
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="font-medium" style={{ color: "rgba(255,255,255,0.75)" }} aria-current="page">
                  Homeowners
                </li>
              </ol>
            </nav>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-wider"
              style={{
                background: "rgba(26,92,56,0.18)",
                border: "1px solid rgba(91,196,138,0.35)",
                color: "#5BC48A",
              }}
            >
              No credit check required
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1
              className="mb-5"
              style={{
                color: "#FFFFFF",
                textShadow: "0 2px 20px rgba(0,0,0,0.5)",
              }}
            >
              Broken equipment,{" "}
              <span
                style={{
                  color: "#5BC48A",
                  textShadow: "0 0 32px rgba(26,92,56,0.55)",
                }}
              >
                tight budget.
              </span>
              <br />
              We&apos;ve got you.
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p
              className="text-lg leading-relaxed mb-8"
              style={{ color: "rgba(255,255,255,0.72)" }}
            >
              When your AC dies in August or your furnace quits in January,
              you don&apos;t have time to wait — and you shouldn&apos;t have
              to. Microf&apos;s lease-to-own program gets you approved fast,
              without a credit check, so your contractor can get to work.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://dealer.microf.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-grove inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-full text-base"
              >
                Apply Now — Free &amp; Fast
                <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/homeowners/hvac"
                className="inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-full transition-all hover:bg-white/10 text-base"
                style={{
                  border: "1.5px solid rgba(255,255,255,0.25)",
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                Browse HVAC Options
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p
              className="mt-6 text-xs font-medium"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              All credit backgrounds welcome · Near-instant decisions · 43 states
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
