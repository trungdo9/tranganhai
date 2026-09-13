import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, FileWarning } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllArticles, getArticleBySlug } from "@/lib/blog";

interface BlogArticlePageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: BlogArticlePageProps): Metadata {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return { title: "Không tìm thấy bài viết | Trang Anh AI" };
  }

  const { title, meta_description } = article.frontmatter;

  return {
    title: `${title} | Trang Anh AI`,
    description: meta_description,
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
    openGraph: {
      title,
      description: meta_description,
      url: `https://tranganhai.com/blog/${article.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: meta_description,
    },
  };
}

export default function BlogArticlePage({ params }: BlogArticlePageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const { frontmatter, content, legalReviewRequired } = article;

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      <Header />

      <main className="flex-1">
        <article className="py-12 sm:py-16">
          <div className="mx-auto max-w-[820px] px-4 sm:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Quay lại Blog
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              {legalReviewRequired && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-semibold text-amber-700 border border-amber-100">
                  <FileWarning className="h-3 w-3" />
                  Đang chờ rà soát pháp lý / giá
                </span>
              )}
              {frontmatter.target_keyword && (
                <span className="inline-flex items-center rounded-full bg-teal-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-teal-700 border border-teal-100">
                  {frontmatter.target_keyword}
                </span>
              )}
            </div>

            <h1 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E293B] tracking-tight leading-tight">
              {frontmatter.title}
            </h1>

            {frontmatter.meta_description && (
              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                {frontmatter.meta_description}
              </p>
            )}

            <div
              className="
                prose prose-slate mt-10 max-w-none
                prose-headings:font-extrabold prose-headings:text-[#1E293B] prose-headings:tracking-tight
                prose-h1:text-3xl prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl
                prose-p:leading-relaxed prose-p:text-slate-700
                prose-a:text-indigo-600 prose-a:font-semibold hover:prose-a:text-indigo-700
                prose-strong:text-[#1E293B]
                prose-blockquote:border-teal-500 prose-blockquote:bg-teal-50/50 prose-blockquote:py-1 prose-blockquote:not-italic prose-blockquote:text-slate-700
                prose-table:text-sm
                prose-th:bg-slate-100 prose-th:text-[#1E293B] prose-th:font-bold
                prose-td:align-top
                prose-code:text-indigo-600 prose-code:bg-indigo-50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
              "
            >
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  a({ href, children }) {
                    const raw = typeof href === "string" ? href : "";
                    // Articles are authored in the repo with relative links to the
                    // sibling markdown file (`[anchor](slug.md)`) — correct inside
                    // the repo, but in the rendered page the browser resolves that
                    // against /blog/<slug> and keeps the .md extension, so every
                    // internal link 404s. Rewrite them to the real route.
                    const isInternalArticleLink =
                      raw.length > 0 &&
                      !/^[a-z][a-z0-9+.-]*:/i.test(raw) && // not http:, mailto:, …
                      !raw.startsWith("#") &&
                      !raw.startsWith("/") &&
                      /\.md(#.*)?$/i.test(raw);

                    if (isInternalArticleLink) {
                      const [file, hash] = raw.split("#");
                      const slug = file.replace(/^\.\//, "").replace(/\.md$/i, "");
                      return (
                        <Link href={hash ? `/blog/${slug}#${hash}` : `/blog/${slug}`}>
                          {children}
                        </Link>
                      );
                    }

                    if (raw.startsWith("#")) {
                      return <a href={raw}>{children}</a>;
                    }

                    return (
                      <a href={raw} target="_blank" rel="noopener noreferrer">
                        {children}
                      </a>
                    );
                  },
                }}
              >
                {content}
              </ReactMarkdown>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
