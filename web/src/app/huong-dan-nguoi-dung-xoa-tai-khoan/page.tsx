import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DataDeletionForm from "@/components/DataDeletionForm";
import {
  Trash2,
  ShieldCheck,
  Facebook,
  Mail,
  CheckCircle2,
  ArrowRight,
  Clock,
  FileText,
  AlertTriangle,
  Layers,
  Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Hướng Dẫn Xóa Tài Khoản & Dữ Liệu Ứng Dụng Facebook (User Data Deletion) | Trang Anh AI",
  description:
    "Hướng dẫn chi tiết quy trình xóa tài khoản và yêu cầu xóa toàn bộ dữ liệu người dùng khỏi ứng dụng Facebook của Trang Anh AI theo đúng chuẩn Meta Platform Data Deletion Policy.",
  alternates: {
    canonical: "https://tranganhai.com/huong-dan-nguoi-dung-xoa-tai-khoan",
  },
  openGraph: {
    title: "Hướng Dẫn Xóa Dữ Liệu Người Dùng Facebook | Trang Anh AI",
    description:
      "Quy trình từng bước xóa tài khoản, gỡ bỏ ứng dụng Facebook và gửi yêu cầu hủy toàn bộ dữ liệu cá nhân theo chính sách Meta.",
    url: "https://tranganhai.com/huong-dan-nguoi-dung-xoa-tai-khoan",
    type: "website",
  },
};

export default function HuongDanXoaTaiKhoanPage() {
  const lastUpdated = "13 tháng 03, 2026";

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-slate-200 bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-[1000px] px-4 sm:px-8">
            {/* Breadcrumb */}
            <nav className="mb-4 flex items-center gap-2 text-xs font-medium text-slate-500">
              <Link href="/" className="hover:text-indigo-600 transition-colors">
                Trang chủ
              </Link>
              <span>/</span>
              <span className="text-slate-800">Hướng dẫn xóa dữ liệu người dùng</span>
            </nav>

            <div className="inline-flex items-center gap-2 rounded-full bg-rose-50 border border-rose-100 px-3.5 py-1 text-xs font-semibold text-rose-700">
              <Trash2 className="h-3.5 w-3.5" />
              <span>Facebook User Data Deletion Instructions URL</span>
            </div>

            <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#1E293B] tracking-tight leading-tight">
              Hướng Dẫn Xóa Tài Khoản &amp; Dữ Liệu Người Dùng
            </h1>

            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
              Trang Anh AI hoàn toàn tôn trọng quyền riêng tư và quyền kiểm soát dữ liệu cá nhân của bạn.
              Trang này cung cấp hướng dẫn chi tiết theo chuẩn xét duyệt ứng dụng của Facebook (Meta Platform
              Terms &amp; Data Protection Assessment) và Luật Bảo vệ Dữ liệu Cá nhân Việt Nam.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100 text-xs text-slate-500">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-slate-400" />
                Cập nhật lần cuối: <strong>{lastUpdated}</strong>
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                Tuân thủ Điều 17 Nghị định 13/2023/NĐ-CP &amp; Chính sách Meta Graph API
              </span>
            </div>
          </div>
        </section>

        {/* Instructions Body */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-[1000px] px-4 sm:px-8 space-y-12">
            
            {/* Quick Overview Callout */}
            <div className="rounded-xl border border-indigo-100 bg-indigo-50/50 p-5 sm:p-6 text-slate-700 text-xs sm:text-sm leading-relaxed">
              <h2 className="text-base font-bold text-[#1E293B] flex items-center gap-2 mb-2">
                <Layers className="h-5 w-5 text-indigo-600" />
                Tổng quan về dữ liệu ứng dụng Facebook thu thập
              </h2>
              <p>
                Khi bạn kết nối hoặc nhắn tin với Fanpage/Chatbot của Trang Anh AI thông qua Facebook, ứng dụng
                chỉ lưu trữ các dữ liệu cần thiết phục vụ việc hỗ trợ kỹ thuật: ID người dùng ẩn danh (ASID/PSID),
                họ tên hiển thị công khai, email liên hệ (nếu bạn đồng ý cấp quyền) và nội dung trao đổi hỏi đáp.
              </p>
              <p className="mt-2 font-medium text-indigo-900">
                Bạn có toàn quyền yêu cầu xóa bỏ hoàn toàn các thông tin này bất kỳ lúc nào qua 2 phương thức dưới đây.
              </p>
            </div>

            {/* Method 1: Delete via Facebook Settings */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#1E293B]">
                    Phương Thức 1: Gỡ Ứng Dụng &amp; Xóa Dữ Liệu Trực Tiếp Trên Facebook (Khuyên Dùng)
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Cách nhanh nhất để tự động thu hồi quyền và kích hoạt cơ chế xóa dữ liệu từ máy chủ Facebook
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Step 1 */}
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs flex gap-3.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-700">
                    1
                  </span>
                  <div className="space-y-1 text-xs sm:text-sm">
                    <h3 className="font-bold text-slate-900">Vào phần Cài Đặt Facebook</h3>
                    <p className="text-slate-600">
                      Đăng nhập tài khoản Facebook của bạn. Nhấp vào ảnh đại diện góc trên cùng bên phải, chọn{" "}
                      <strong>Cài đặt &amp; quyền riêng tư</strong> (Settings &amp; Privacy) &gt; chọn <strong>Cài đặt</strong> (Settings).
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs flex gap-3.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-700">
                    2
                  </span>
                  <div className="space-y-1 text-xs sm:text-sm">
                    <h3 className="font-bold text-slate-900">Chọn Ứng Dụng &amp; Trang Web</h3>
                    <p className="text-slate-600">
                      Ở thanh menu bên trái, tìm và chọn mục <strong>Ứng dụng và trang web</strong> (Apps and Websites).
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs flex gap-3.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-700">
                    3
                  </span>
                  <div className="space-y-1 text-xs sm:text-sm">
                    <h3 className="font-bold text-slate-900">Tìm Ứng Dụng Trang Anh AI</h3>
                    <p className="text-slate-600">
                      Tìm kiếm ứng dụng <strong>Trang Anh AI</strong> (hoặc tên giải pháp liên kết) trong danh mục
                      ứng dụng đang hoạt động.
                    </p>
                  </div>
                </div>

                {/* Step 4 & 5 */}
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs flex gap-3.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-700">
                    4
                  </span>
                  <div className="space-y-1 text-xs sm:text-sm">
                    <h3 className="font-bold text-slate-900">Nhấn &quot;Gỡ&quot; &amp; Tích Chọn Xóa Dữ Liệu</h3>
                    <p className="text-slate-600">
                      Bấm nút <strong>Gỡ</strong> (Remove). Đánh dấu vào ô vuông xác nhận yêu cầu xóa các hoạt động,
                      bài viết và dữ liệu, sau đó nhấn <strong>Gỡ</strong> lần nữa để hoàn tất.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-4 text-xs sm:text-sm text-emerald-900 flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Cơ chế tự động qua Meta Data Deletion Callback:</strong> Khi bạn gỡ ứng dụng trên Facebook,
                  máy chủ của Meta sẽ tự động gửi một tín hiệu (signed_request) đến webhook xử lý dữ liệu của Trang Anh AI.
                  Hệ thống của chúng tôi sẽ lập tức vô hiệu hóa token và đưa toàn bộ bản ghi người dùng vào quy trình xóa vĩnh viễn.
                </div>
              </div>
            </div>

            {/* Method 2: Direct Request Form */}
            <div className="space-y-6 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-rose-600 text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#1E293B]">
                    Phương Thức 2: Gửi Yêu Cầu Xóa Dữ Liệu Trực Tuyến Đến Trang Anh AI
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Nếu bạn không truy cập được Facebook hoặc muốn yêu cầu xóa trực tiếp từ cơ sở dữ liệu của chúng tôi
                  </p>
                </div>
              </div>

              {/* Client Component with interactive form & status code tracker */}
              <DataDeletionForm />
            </div>

            {/* Method 3: Email fallback */}
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-[#1E293B]">
                    Phương Thức 3: Gửi Thư Điện Tử Trực Tiếp Đến Bộ Phận Dữ Liệu (Email Request)
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Dành cho các trường hợp đặc biệt cần hỗ trợ văn bản pháp lý
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs space-y-3 text-xs sm:text-sm text-slate-700">
                <p>
                  Bạn có thể gửi email trực tiếp từ địa chỉ email bạn đã sử dụng khi đăng ký hoặc tương tác với bot:
                </p>
                <div className="rounded-lg bg-slate-50 p-4 border border-slate-200 font-mono text-xs space-y-1 text-slate-800">
                  <p><strong>Gửi đến:</strong> contact@tranganhai.com</p>
                  <p><strong>Tiêu đề thư:</strong> [Yêu Cầu Xóa Dữ Liệu Facebook App] - Họ và tên của bạn</p>
                  <p><strong>Nội dung:</strong> Tôi yêu cầu xóa toàn bộ thông tin cá nhân và lịch sử hội thoại liên kết với Facebook ID / Email: [Điền email hoặc ID của bạn].</p>
                </div>
                <p className="text-slate-500">
                  Đội ngũ kỹ thuật của Trang Anh AI sẽ gửi email phản hồi xác nhận tiếp nhận trong vòng <strong>24 giờ làm việc</strong>.
                </p>
              </div>
            </div>

            {/* Data Retention & SLA Specs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200">
              {/* Box 1: What is deleted */}
              <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-3">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Trash2 className="h-4 w-4 text-rose-600" />
                  Dữ liệu bị xóa bỏ vĩnh viễn
                </h3>
                <ul className="text-xs sm:text-sm text-slate-600 space-y-2 list-disc pl-5">
                  <li>Mã định danh người dùng Facebook (App-Scoped User ID / PSID).</li>
                  <li>Tên, hình ảnh đại diện và địa chỉ email thu thập từ Facebook Login.</li>
                  <li>Toàn bộ nhật ký tin nhắn, lịch sử hỏi đáp với AI Chatbot.</li>
                  <li>Mọi mã Access Token và phiên đăng nhập đã liên kết.</li>
                  <li>Thông tin số điện thoại người dùng đã gửi qua chatbot (nếu có).</li>
                </ul>
              </div>

              {/* Box 2: Retention Exceptions */}
              <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-3">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Lock className="h-4 w-4 text-amber-600" />
                  Trường hợp ngoại lệ theo luật định
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Theo Điều 17 Nghị định 13/2023/NĐ-CP và Luật Kế toán Việt Nam, một số dữ liệu sẽ không thể xóa ngay nếu:
                </p>
                <ul className="text-xs sm:text-sm text-slate-600 space-y-2 list-disc pl-5">
                  <li>Doanh nghiệp đã phát sinh hợp đồng dịch vụ chính thức hoặc hóa đơn tài chính đã xuất.</li>
                  <li>Dữ liệu phục vụ việc điều tra theo văn bản yêu cầu của cơ quan an ninh hoặc viện kiểm sát.</li>
                </ul>
              </div>
            </div>

            {/* Bottom Links */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link
                href="/dieu-khoan-su-dung"
                className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-semibold text-sm"
              >
                <span>Xem Điều khoản sử dụng</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/chinh-sach-quyen-rieng-tu"
                className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-semibold text-sm"
              >
                <span>Xem Chính sách quyền riêng tư</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
