"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const homeownersLinks = [
  { href: "/homeowners", label: "Homeowner Overview", desc: "How lease-to-own works for you" },
  { href: "/homeowners/hvac", label: "HVAC Financing", desc: "Air conditioners, furnaces, heat pumps" },
  { href: "/homeowners/water-heaters", label: "Water Heater Financing", desc: "Tank, tankless, gas & electric" },
  { href: "/homeowners/challenged-credit", label: "Challenged Credit", desc: "We say yes when others say no" },
];

const contractorsLinks = [
  { href: "/contractors", label: "Contractor Overview", desc: "Why partner with Microf" },
  { href: "/contractors/why-offer-financing", label: "Why Offer Financing", desc: "Close more jobs, grow revenue" },
  { href: "/contractors/become-a-partner", label: "Become a Partner", desc: "Free enrollment, start today" },
  { href: "/contractors/testimonials", label: "Contractor Stories", desc: "Hear from partners in the field" },
];

const companyLinks = [
  { href: "/about", label: "About Microf" },
  { href: "/about/press-releases", label: "Press Releases" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact Us" },
  { href: "/blog", label: "Blog" },
];

type DropdownKey = "homeowners" | "contractors" | "company" | null;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState<DropdownKey>(null);
  const [mobileExpanded, setMobileExpanded] = useState<DropdownKey>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isHome = pathname === "/";
  // Hero is now light-colored — nav always shows in standard (white bg) style
  const useDarkStyle = !isHome || scrolled || true;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setDropdown(null); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setDropdown(null); setMobileOpen(false); }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  const linkBase = "flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200";
  const linkColor = useDarkStyle
    ? "text-[var(--color-slate)] hover:text-[var(--color-ink)]"
    : "text-white/85 hover:text-white";
  const activeLinkColor = useDarkStyle
    ? "text-[var(--color-brand-500)]"
    : "text-white font-semibold";

  const isActive = (prefix: string) => pathname.startsWith(prefix);

  const ChevronIcon = ({ open }: { open: boolean }) => (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white border-b border-[var(--color-line)] ${
          scrolled
            ? "shadow-[0_2px_20px_rgba(11,20,17,0.06)] backdrop-blur-md"
            : "shadow-none"
        }`}
      >
        <div className="container-tight">
          <nav
            className="flex items-center justify-between h-16 md:h-20"
            aria-label="Main navigation"
            ref={dropdownRef}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0 z-10 group" aria-label="Microf home">
              {/* Show logo image — with white version on dark hero */}
              <Image
                src={useDarkStyle ? "/images/microf-logo.svg" : "/images/microf-logo-white.svg"}
                alt="Microf"
                width={140}
                height={48}
                className="h-9 w-auto object-contain transition-all duration-300"
                priority
              />
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1">
              {/* Homeowners dropdown */}
              <div className="relative">
                <button
                  onClick={() => setDropdown(dropdown === "homeowners" ? null : "homeowners")}
                  aria-expanded={dropdown === "homeowners"}
                  aria-haspopup="true"
                  className={`${linkBase} ${isActive("/homeowners") ? activeLinkColor : linkColor}`}
                  style={{ textShadow: useDarkStyle ? "none" : "0 1px 6px rgba(0,0,0,0.2)" }}
                >
                  Homeowners <ChevronIcon open={dropdown === "homeowners"} />
                </button>

                <AnimatePresence>
                  {dropdown === "homeowners" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.16 }}
                      className="absolute top-full left-0 mt-2 w-72 rounded-2xl bg-white shadow-[0_16px_48px_rgba(11,20,17,0.12)] border border-[var(--color-line)] py-2 overflow-hidden"
                    >
                      {homeownersLinks.map(({ href, label, desc }) => (
                        <Link
                          key={href}
                          href={href}
                          className={`block px-4 py-3 transition-colors hover:bg-[var(--color-brand-50)] ${
                            pathname === href ? "bg-[var(--color-brand-50)]" : ""
                          }`}
                        >
                          <p className={`text-sm font-semibold mb-0.5 ${pathname === href ? "text-[var(--color-brand-500)]" : "text-[var(--color-ink)]"}`}>
                            {label}
                          </p>
                          <p className="text-xs text-[var(--color-slate)]">{desc}</p>
                        </Link>
                      ))}
                      <div className="mx-4 mt-2 mb-2 pt-2 border-t border-[var(--color-line)]">
                        <Link
                          href="https://dealer.microf.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-semibold text-[var(--color-brand-500)] hover:text-[var(--color-brand-600)] transition-colors"
                        >
                          Apply Now
                          <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" aria-hidden="true">
                            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Contractors dropdown */}
              <div className="relative">
                <button
                  onClick={() => setDropdown(dropdown === "contractors" ? null : "contractors")}
                  aria-expanded={dropdown === "contractors"}
                  aria-haspopup="true"
                  className={`${linkBase} ${isActive("/contractors") ? activeLinkColor : linkColor}`}
                  style={{ textShadow: useDarkStyle ? "none" : "0 1px 6px rgba(0,0,0,0.2)" }}
                >
                  Contractors <ChevronIcon open={dropdown === "contractors"} />
                </button>

                <AnimatePresence>
                  {dropdown === "contractors" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.16 }}
                      className="absolute top-full left-0 mt-2 w-72 rounded-2xl bg-white shadow-[0_16px_48px_rgba(11,20,17,0.12)] border border-[var(--color-line)] py-2 overflow-hidden"
                    >
                      {contractorsLinks.map(({ href, label, desc }) => (
                        <Link
                          key={href}
                          href={href}
                          className={`block px-4 py-3 transition-colors hover:bg-[var(--color-brand-50)] ${
                            pathname === href ? "bg-[var(--color-brand-50)]" : ""
                          }`}
                        >
                          <p className={`text-sm font-semibold mb-0.5 ${pathname === href ? "text-[var(--color-brand-500)]" : "text-[var(--color-ink)]"}`}>
                            {label}
                          </p>
                          <p className="text-xs text-[var(--color-slate)]">{desc}</p>
                        </Link>
                      ))}
                      <div className="mx-4 mt-2 mb-2 pt-2 border-t border-[var(--color-line)]">
                        <Link
                          href="https://dealer.microf.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-medium text-[var(--color-slate)] hover:text-[var(--color-ink)] transition-colors"
                        >
                          Dealer Portal Login
                          <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" aria-hidden="true">
                            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Company dropdown */}
              <div className="relative">
                <button
                  onClick={() => setDropdown(dropdown === "company" ? null : "company")}
                  aria-expanded={dropdown === "company"}
                  aria-haspopup="true"
                  className={`${linkBase} ${
                    isActive("/about") || isActive("/careers") || isActive("/contact") || isActive("/blog")
                      ? activeLinkColor
                      : linkColor
                  }`}
                  style={{ textShadow: useDarkStyle ? "none" : "0 1px 6px rgba(0,0,0,0.2)" }}
                >
                  Company <ChevronIcon open={dropdown === "company"} />
                </button>

                <AnimatePresence>
                  {dropdown === "company" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.16 }}
                      className="absolute top-full left-0 mt-2 w-52 rounded-2xl bg-white shadow-[0_16px_48px_rgba(11,20,17,0.12)] border border-[var(--color-line)] py-2 overflow-hidden"
                    >
                      {companyLinks.map(({ href, label }) => (
                        <Link
                          key={href}
                          href={href}
                          className={`block px-4 py-2.5 text-sm font-medium transition-colors hover:bg-[var(--color-brand-50)] ${
                            pathname === href
                              ? "text-[var(--color-brand-500)] bg-[var(--color-brand-50)]"
                              : "text-[var(--color-ink)]"
                          }`}
                        >
                          {label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-2">
              <Link
                href="https://invoicecloud.com/microf"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-medium transition-all duration-200 px-3 py-2 rounded-lg ${linkColor}`}
                style={{ textShadow: useDarkStyle ? "none" : "0 1px 6px rgba(0,0,0,0.2)" }}
              >
                Make a Payment
              </Link>
              <Link
                href="https://dealer.microf.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-grove inline-flex items-center gap-1.5 text-white text-sm font-semibold px-5 py-2.5 rounded-full cursor-pointer"
              >
                Apply Now
                <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" aria-hidden="true">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-xl transition-colors"
              style={{ background: useDarkStyle ? "transparent" : "rgba(255,255,255,0.12)" }}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <span
                className={`block w-5 h-0.5 rounded-full transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`}
                style={{ background: useDarkStyle ? "var(--color-ink)" : "#FFFFFF" }}
              />
              <span
                className={`block w-5 h-0.5 rounded-full transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`}
                style={{ background: useDarkStyle ? "var(--color-ink)" : "#FFFFFF" }}
              />
              <span
                className={`block w-5 h-0.5 rounded-full transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
                style={{ background: useDarkStyle ? "var(--color-ink)" : "#FFFFFF" }}
              />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[min(360px,100vw)] bg-white flex flex-col md:hidden shadow-2xl"
            >
              {/* Drawer header */}
              <div className="h-16 flex items-center justify-between px-5 border-b border-[var(--color-line)]">
                <Link href="/" onClick={() => setMobileOpen(false)} aria-label="Microf home">
                  <Image
                    src="/images/microf-logo.svg"
                    alt="Microf"
                    width={110}
                    height={38}
                    className="h-8 w-auto object-contain"
                  />
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-lg text-[var(--color-slate)] hover:bg-[var(--color-brand-50)] transition-colors"
                  aria-label="Close menu"
                >
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
                    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {/* Drawer nav */}
              <nav className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-1" aria-label="Mobile navigation">
                {[
                  { key: "homeowners" as DropdownKey, label: "Homeowners", links: homeownersLinks },
                  { key: "contractors" as DropdownKey, label: "Contractors", links: contractorsLinks },
                ].map(({ key, label, links }) => (
                  <div key={key}>
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === key ? null : key)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-[var(--color-ink)] hover:bg-[var(--color-brand-50)] transition-colors"
                    >
                      {label}
                      <ChevronIcon open={mobileExpanded === key} />
                    </button>
                    <AnimatePresence>
                      {mobileExpanded === key && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 pb-2 flex flex-col gap-0.5">
                            {links.map(({ href, label: lbl }) => (
                              <Link
                                key={href}
                                href={href}
                                className={`block px-4 py-2.5 rounded-lg text-sm transition-colors ${
                                  pathname === href
                                    ? "bg-[var(--color-brand-100)] text-[var(--color-brand-500)] font-medium"
                                    : "text-[var(--color-slate)] hover:bg-[var(--color-brand-50)]"
                                }`}
                              >
                                {lbl}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                {/* Company group */}
                <div>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === "company" ? null : "company")}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-[var(--color-ink)] hover:bg-[var(--color-brand-50)] transition-colors"
                  >
                    Company
                    <ChevronIcon open={mobileExpanded === "company"} />
                  </button>
                  <AnimatePresence>
                    {mobileExpanded === "company" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pb-2 flex flex-col gap-0.5">
                          {companyLinks.map(({ href, label: lbl }) => (
                            <Link
                              key={href}
                              href={href}
                              className={`block px-4 py-2.5 rounded-lg text-sm transition-colors ${
                                pathname === href
                                  ? "bg-[var(--color-brand-100)] text-[var(--color-brand-500)] font-medium"
                                  : "text-[var(--color-slate)] hover:bg-[var(--color-brand-50)]"
                              }`}
                            >
                              {lbl}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Utility */}
                <div className="mt-2 pt-4 border-t border-[var(--color-line)] flex flex-col gap-1">
                  <Link
                    href="https://dealer.microf.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 rounded-xl text-sm font-medium text-[var(--color-slate)] hover:bg-[var(--color-brand-50)] transition-colors"
                  >
                    Contractor Login
                  </Link>
                  <Link
                    href="https://invoicecloud.com/microf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 rounded-xl text-sm font-medium text-[var(--color-slate)] hover:bg-[var(--color-brand-50)] transition-colors"
                  >
                    Make a Payment
                  </Link>
                </div>
              </nav>

              <div className="p-5 border-t border-[var(--color-line)]">
                <Link
                  href="https://dealer.microf.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-grove block w-full text-center text-white font-semibold py-3.5 rounded-full cursor-pointer"
                >
                  Apply Now — No Credit Check
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
