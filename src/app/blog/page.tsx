import type { Metadata } from "next";
import type React from "react";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — HVAC Financing Guides for Homeowners & Contractors",
  description:
    "Practical guides and insights on lease-to-own HVAC financing for homeowners and contractor partners from the Microf team.",
  alternates: { canonical: "https://www.microf.com/blog" },
};

const categoryStyle: Record<string, { bg: string; color: string }> = {
  Contractors: { bg: "var(--color-brand-900)", color: "white" },
  Homeowners: { bg: "var(--color-brand-500)", color: "white" },
};

const categoryIllustration: Record<string, React.ReactNode> = {
  Contractors: (
    <svg viewBox="0 0 80 80" fill="none" className="w-16 h-16 opacity-30" aria-hidden="true">
      <path d="M20 60V40M32 60V28M44 60V36M56 60V20" stroke="white" strokeWidth="5" strokeLinecap="round"/>
      <path d="M12 68h56" stroke="white" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  ),
  Homeowners: (
    <svg viewBox="0 0 80 80" fill="none" className="w-16 h-16 opacity-30" aria-hidden="true">
      <path d="M12 36L40 12l28 24" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 36v28h40V36" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="32" y="48" width="16" height="16" rx="2" stroke="white" strokeWidth="3"/>
    </svg>
  ),
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero
        eyebrow="Resources"
        headline="Guides for homeowners and contractors."
        subhead="Practical articles on lease-to-own HVAC financing — how it works, why it matters, and how contractors use it to grow."
        primaryCta={undefined}
        breadcrumbs={[{ label: "Blog" }]}
        variant="dark"
      />

      <main id="main-content">
        <section className="section-pad" style={{ background: "var(--color-white)" }}>
          <div className="container-tight">
            {/* Featured post */}
            {featured && (
              <Link href={`/blog/${featured.slug}`} className="group block mb-10">
                <article className="rounded-3xl overflow-hidden card-lift" style={{ background: "var(--color-brand-50)", border: "1px solid var(--color-brand-100)" }}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Featured image */}
                    <div
                      className="aspect-[16/9] lg:aspect-auto min-h-52 lg:min-h-64 flex items-center justify-center rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none"
                      style={{ background: featured.category === "Homeowners" ? "var(--color-brand-500)" : "var(--color-brand-900)" }}
                    >
                      {categoryIllustration[featured.category]}
                    </div>
                    <div className="p-8 lg:p-10 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold"
                          style={{ ...(categoryStyle[featured.category] ?? { bg: "var(--color-brand-100)", color: "var(--color-brand-500)" }), background: categoryStyle[featured.category]?.bg }}>
                          {featured.category}
                        </span>
                        <span className="text-xs" style={{ color: "var(--color-muted)" }}>{featured.readTime}</span>
                      </div>
                      <h2 className="text-2xl font-bold mb-3 text-balance group-hover:text-[var(--color-brand-500)] transition-colors" style={{ color: "var(--color-ink)" }}>
                        {featured.title}
                      </h2>
                      <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--color-slate)" }}>{featured.excerpt}</p>
                      <div className="flex items-center gap-2">
                        <p className="text-xs font-semibold" style={{ color: "var(--color-ink)" }}>{featured.author}</p>
                        <span style={{ color: "var(--color-line)" }}>·</span>
                        <p className="text-xs" style={{ color: "var(--color-muted)" }}>{featured.date}</p>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            )}

            {/* Rest of posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rest.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                  <article className="rounded-2xl overflow-hidden h-full flex flex-col card-lift" style={{ background: "var(--color-paper)", border: "1px solid var(--color-line)" }}>
                    <div
                      className="aspect-[16/9] flex items-center justify-center"
                      style={{ background: post.category === "Homeowners" ? "var(--color-brand-500)" : "var(--color-brand-900)" }}
                    >
                      {categoryIllustration[post.category]}
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold"
                          style={{ background: categoryStyle[post.category]?.bg ?? "var(--color-brand-100)", color: categoryStyle[post.category]?.color ?? "var(--color-brand-500)" }}>
                          {post.category}
                        </span>
                        <span className="text-xs" style={{ color: "var(--color-muted)" }}>{post.readTime}</span>
                      </div>
                      <h3 className="font-bold mb-2 flex-1 text-balance group-hover:text-[var(--color-brand-500)] transition-colors" style={{ color: "var(--color-ink)", fontSize: "1rem" }}>
                        {post.title}
                      </h3>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--color-slate)" }}>
                        {post.excerpt.slice(0, 120)}...
                      </p>
                      <p className="text-xs" style={{ color: "var(--color-muted)" }}>{post.date}</p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
