import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileWarning } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllArticles } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Trang Anh AI — Kiến thức triển khai AI Agent cho SME Việt Nam",
  description:
    "Bài viết chuyên sâu về AI Agent, chi phí triển khai, mô hình vận hành và bảng giá dành cho doanh nghiệp SME kỹ thuật, công nghiệp, phân phối tại Việt Nam.",
  openGraph: {
    title: "Blog | Trang Anh AI",
    description:
      "Kiến thức triển khai AI Agent vận hành cho doanh nghiệp SME kỹ thuật Việt Nam.",
    url: "https://tranganhai.com/blog",
    type: "website",
  },
};

export default function BlogIndexPage() {
  const articles = getAllArticles();

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      <Header />

      <main className="flex-1">
        <section className="border-b border-slate-200 bg-white py-14 sm:py-20">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-8 lg:px-10 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.11em] text-indigo-600 bg-indigo-50 px-3.5 py-1 rounded-full border border-indigo-100">
              KIẾN THỨC VẬN HÀNH AI AGENT
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E293B] tracking-tight leading-tight">
              Blog Trang Anh AI
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-slate-600 leading-relaxed">
              Hướng dẫn triển khai AI Agent, chi phí, mô hình Retainer và các
              câu chuyện vận hành thực tế dành cho doanh nghiệp SME kỹ thuật,
              công nghiệp, phân phối tại Việt Nam.
            </p>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-8 lg:px-10">
            {articles.length === 0 ? (
              <p className="text-center text-slate-500 text-sm">
                Chưa có bài viết nào được đăng tải. Vui lòng quay lại sau.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {articles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-md hover:border-indigo-200 transition-all"
                  >
                    {article.legalReviewRequired && (
                      <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-semibold text-amber-700 border border-amber-100">
                        <FileWarning className="h-3 w-3" />
                        Đang chờ rà soát pháp lý / giá
                      </span>
                    )}

                    {article.frontmatter.target_keyword && (
                      <span className="mb-3 inline-flex w-fit items-center rounded-full bg-teal-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-teal-700 border border-teal-100">
                        {article.frontmatter.target_keyword}
                      </span>
                    )}

                    <h2 className="text-base sm:text-lg font-bold text-[#1E293B] leading-snug group-hover:text-indigo-600 transition-colors">
                      {article.frontmatter.title}
                    </h2>

                    <p className="mt-2.5 text-sm text-slate-600 leading-relaxed line-clamp-4">
                      {article.frontmatter.meta_description}
                    </p>

                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600">
                      Đọc bài viết
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
