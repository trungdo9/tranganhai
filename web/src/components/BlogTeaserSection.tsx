import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { getAllArticles } from "@/lib/blog";

const FEATURED_COUNT = 4;

/**
 * Khoi "Nhat ky van hanh & kien thuc" tren trang chu.
 *
 * Truoc day trang chu KHONG surface bai viet nao — chi Header/Footer co link /blog.
 * Khoi nay keo bai moi nhat tu plans/marketing/tranganhai/articles/ (build-time, cung
 * nguon du lieu voi /blog) nen no tu cap nhat khi them bai, khong phai sua 2 noi.
 */
export default function BlogTeaserSection() {
  const all = getAllArticles();

  const rowId = (article: (typeof all)[number]) =>
    typeof article.frontmatter.row_id === "number" ? article.frontmatter.row_id : 0;

  const featured = [...all]
    .sort(
      (a, b) =>
        rowId(b) - rowId(a) ||
        a.frontmatter.title.localeCompare(b.frontmatter.title, "vi"),
    )
    .slice(0, FEATURED_COUNT);

  if (featured.length === 0) {
    return null;
  }

  return (
    <section
      id="kien-thuc-van-hanh"
      className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200/80"
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-8 lg:px-10">
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold uppercase tracking-[0.11em] text-teal-700 bg-teal-50 px-3.5 py-1 rounded-full border border-teal-100">
            NHẬT KÝ VẬN HÀNH &amp; KIẾN THỨC
          </span>
          <h2 className="mt-3.5 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Đọc Cách Hệ Thống Này Vận Hành Thật, Không Phải Bản Demo
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
            Các bài viết dưới đây mô tả cơ chế kiểm soát của hệ thống: ca trực,
            hạn mức sản lượng, cổng chặn chất lượng và các luật dừng. Số liệu nêu
            trong bài là <strong className="text-slate-800">số thiết kế hệ thống</strong>{" "}
            — không phải con số hiệu quả kinh doanh được suy diễn ra.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {featured.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs hover:border-teal-300 hover:shadow-md transition-all"
            >
              {article.frontmatter.target_keyword && (
                <span className="inline-flex items-center rounded-full bg-teal-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-teal-700 border border-teal-100">
                  {article.frontmatter.target_keyword}
                </span>
              )}
              <h3 className="mt-3 text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-indigo-700 transition-colors">
                {article.frontmatter.title}
              </h3>
              {article.frontmatter.meta_description && (
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-600">
                  {article.frontmatter.meta_description}
                </p>
              )}
              <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600">
                Đọc bài
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-9 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full bg-[#1E293B] px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
          >
            <BookOpen className="h-4 w-4 text-teal-400" />
            Xem tất cả {all.length} bài viết vận hành
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
