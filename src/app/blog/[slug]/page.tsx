import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { articleSchema, breadcrumbSchema } from "@/lib/jsonld";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://www.microf.com/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.isoDate,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const related = allPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 2);

  /* Simple markdown → HTML: bold, headers, paragraphs */
  function renderContent(md: string): string {
    return md
      .trim()
      .split("\n\n")
      .map((block) => {
        if (block.startsWith("## ")) return `<h2>${block.slice(3)}</h2>`;
        if (block.startsWith("### ")) return `<h3>${block.slice(4)}</h3>`;
        if (block.startsWith("- ")) {
          const items = block.split("\n").map((l) => `<li>${l.replace(/^- /, "").replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")}</li>`).join("");
          return `<ul>${items}</ul>`;
        }
        if (/^\d+\./.test(block)) {
          const items = block.split("\n").map((l) => `<li>${l.replace(/^\d+\. /, "").replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")}</li>`).join("");
          return `<ol>${items}</ol>`;
        }
        if (block.startsWith("> ")) {
          return `<blockquote>${block.slice(2).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")}</blockquote>`;
        }
        if (block.startsWith("---")) return `<hr />`;
        return `<p>${block.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\n/g, " ")}</p>`;
      })
      .join("\n");
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(post)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Blog", href: "/blog" },
              { name: post.title },
            ])
          ),
        }}
      />
      <Nav />
      <main id="main-content">
        {/* Article hero */}
        <section
          className="pt-32 lg:pt-40 pb-16"
          style={{ background: "var(--color-brand-900)" }}
        >
          <div className="container-tight max-w-3xl mx-auto">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-xs">
                <li><Link href="/blog" className="transition-colors" style={{ color: "rgba(255,255,255,0.45)" }}>Blog</Link></li>
                <li className="flex items-center gap-2">
                  <svg viewBox="0 0 8 12" fill="none" className="w-1.5 h-2.5" aria-hidden="true">
                    <path d="M1 1l5 5-5 5" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="font-medium" style={{ color: "rgba(255,255,255,0.7)" }}>{post.category}</span>
                </li>
              </ol>
            </nav>
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: "var(--color-brand-500)", color: "white" }}>
                {post.category}
              </span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>{post.readTime}</span>
            </div>
            <h1 className="text-white mb-6" style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}>
              {post.title}
            </h1>
            <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>{post.excerpt}</p>
            <div className="flex items-center gap-3 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold" style={{ background: "var(--color-brand-500)", color: "white" }}>M</div>
              <div>
                <p className="text-sm font-semibold text-white">{post.author}</p>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>{post.date}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Article body */}
        <section className="section-pad" style={{ background: "var(--color-white)" }}>
          <div className="container-tight">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 items-start">
              {/* Content */}
              <article
                className="prose-microf"
                dangerouslySetInnerHTML={{ __html: renderContent(post.content) }}
                style={{
                  ["--prose-h2-color" as string]: "var(--color-ink)",
                  ["--prose-h3-color" as string]: "var(--color-ink)",
                  ["--prose-body-color" as string]: "var(--color-slate)",
                  ["--prose-strong-color" as string]: "var(--color-ink)",
                  ["--prose-link-color" as string]: "var(--color-brand-500)",
                }}
              />

              {/* Sidebar */}
              <aside className="hidden lg:block sticky top-28">
                <div className="rounded-2xl p-6 mb-6" style={{ background: "var(--color-brand-50)", border: "1px solid var(--color-brand-100)" }}>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--color-brand-500)" }}>Apply Today</p>
                  <p className="text-sm mb-4" style={{ color: "var(--color-slate)" }}>
                    No credit check. Flexible payments. Real-time decisions.
                  </p>
                  <Link href="https://dealer.microf.com/" target="_blank" rel="noopener noreferrer" className="btn-grove block text-center text-white font-semibold py-3 rounded-full text-sm cursor-pointer">
                    Apply Now
                  </Link>
                </div>
                {related.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--color-muted)" }}>Related Articles</p>
                    <div className="space-y-3">
                      {related.map((p) => (
                        <Link key={p.slug} href={`/blog/${p.slug}`} className="block p-4 rounded-xl transition-colors hover:bg-[var(--color-brand-50)]" style={{ border: "1px solid var(--color-line)" }}>
                          <p className="text-sm font-semibold" style={{ color: "var(--color-ink)" }}>{p.title}</p>
                          <p className="text-xs mt-1" style={{ color: "var(--color-muted)" }}>{p.readTime}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </aside>
            </div>
          </div>
        </section>
      </main>

      {/* Article prose styles (scoped) */}
      <style>{`
        .prose-microf h2 { font-family: var(--font-display); font-size: 1.625rem; font-weight: 700; color: var(--color-ink); margin: 2.5rem 0 1rem; line-height: 1.2; }
        .prose-microf h3 { font-family: var(--font-display); font-size: 1.25rem; font-weight: 600; color: var(--color-ink); margin: 2rem 0 0.75rem; }
        .prose-microf p { color: var(--color-slate); line-height: 1.75; margin-bottom: 1.25rem; }
        .prose-microf ul, .prose-microf ol { padding-left: 1.5rem; margin-bottom: 1.25rem; }
        .prose-microf li { color: var(--color-slate); line-height: 1.7; margin-bottom: 0.375rem; }
        .prose-microf ul li { list-style: disc; }
        .prose-microf ol li { list-style: decimal; }
        .prose-microf strong { color: var(--color-ink); font-weight: 600; }
        .prose-microf blockquote { border-left: 3px solid var(--color-brand-500); padding-left: 1.25rem; margin: 1.5rem 0; color: var(--color-slate); font-style: italic; }
        .prose-microf hr { border: none; border-top: 1px solid var(--color-line); margin: 2.5rem 0; }
        .prose-microf a { color: var(--color-brand-500); text-decoration: underline; }
      `}</style>

      <Footer />
    </>
  );
}
