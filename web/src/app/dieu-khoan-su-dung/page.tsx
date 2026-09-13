import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  FileText,
  ShieldCheck,
  Scale,
  AlertTriangle,
  HelpCircle,
  Clock,
  ArrowRight,
  CheckCircle2,
  Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Điều Khoản Sử Dụng Dịch Vụ & Ứng Dụng Facebook | Trang Anh AI",
  description:
    "Điều khoản sử dụng dịch vụ nền tảng Trang Anh AI và ứng dụng tích hợp Meta Facebook Platform. Quy định quyền, trách nhiệm, tiêu chuẩn bảo mật và tuân thủ pháp luật.",
  alternates: {
    canonical: "https://tranganhai.com/dieu-khoan-su-dung",
  },
  openGraph: {
    title: "Điều Khoản Sử Dụng Dịch Vụ | Trang Anh AI",
    description:
      "Quy định điều khoản dịch vụ, quyền và trách nhiệm khi sử dụng ứng dụng Facebook, Chatbot AI và nền tảng Trang Anh AI.",
    url: "https://tranganhai.com/dieu-khoan-su-dung",
    type: "website",
  },
};

export default function DieuKhoanSuDungPage() {
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
              <span className="text-slate-800">Điều khoản sử dụng</span>
            </nav>

            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 border border-indigo-100 px-3.5 py-1 text-xs font-semibold text-indigo-700">
              <Scale className="h-3.5 w-3.5" />
              <span>Chính sách pháp lý &amp; Nền tảng Meta Facebook</span>
            </div>

            <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#1E293B] tracking-tight leading-tight">
              Điều Khoản Sử Dụng Dịch Vụ &amp; Ứng Dụng
            </h1>

            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
              Vui lòng đọc kỹ các điều khoản dưới đây trước khi truy cập hoặc sử dụng dịch vụ trên website{" "}
              <strong className="text-slate-800">tranganhai.com</strong>, ứng dụng kết nối Facebook, hệ thống
              Chatbot tương tác và các dịch vụ AI Agent vận hành do{" "}
              <strong className="text-slate-800">Trang Anh AI</strong> phát triển.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100 text-xs text-slate-500">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-slate-400" />
                Cập nhật lần cuối: <strong>{lastUpdated}</strong>
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                Tuân thủ Meta Platform Policy &amp; Luật Dữ liệu Việt Nam
              </span>
            </div>
          </div>
        </section>

        {/* Legal Content Body */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-[1000px] px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              
              {/* Table of Contents - Desktop Sticky */}
              <aside className="lg:col-span-4 hidden lg:block">
                <div className="sticky top-24 rounded-xl border border-slate-200 bg-white p-5 shadow-xs text-xs space-y-3">
                  <h2 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] text-slate-400">
                    Mục lục điều khoản
                  </h2>
                  <nav className="space-y-1.5 text-slate-600">
                    <a href="#dieu-1" className="block py-1 hover:text-indigo-600 transition-colors">
                      1. Giới thiệu &amp; Phạm vi áp dụng
                    </a>
                    <a href="#dieu-2" className="block py-1 hover:text-indigo-600 transition-colors">
                      2. Chấp thuận điều khoản
                    </a>
                    <a href="#dieu-3" className="block py-1 hover:text-indigo-600 transition-colors">
                      3. Tài khoản và Bảo mật
                    </a>
                    <a href="#dieu-4" className="block py-1 hover:text-indigo-600 transition-colors">
                      4. Quy định sử dụng &amp; Hành vi nghiêm cấm
                    </a>
                    <a href="#dieu-5" className="block py-1 hover:text-indigo-600 transition-colors">
                      5. Khuyến cáo dịch vụ AI Agent &amp; Dự toán
                    </a>
                    <a href="#dieu-6" className="block py-1 hover:text-indigo-600 transition-colors">
                      6. Tích hợp Facebook &amp; Dịch vụ bên thứ ba
                    </a>
                    <a href="#dieu-7" className="block py-1 hover:text-indigo-600 transition-colors">
                      7. Quyền sở hữu trí tuệ
                    </a>
                    <a href="#dieu-8" className="block py-1 hover:text-indigo-600 transition-colors">
                      8. Miễn trừ &amp; Giới hạn trách nhiệm
                    </a>
                    <a href="#dieu-9" className="block py-1 hover:text-indigo-600 transition-colors">
                      9. Tạm ngưng và Chấm dứt dịch vụ
                    </a>
                    <a href="#dieu-10" className="block py-1 hover:text-indigo-600 transition-colors">
                      10. Luật áp dụng &amp; Giải quyết tranh chấp
                    </a>
                    <a href="#dieu-11" className="block py-1 hover:text-indigo-600 transition-colors">
                      11. Thông tin liên hệ
                    </a>
                  </nav>

                  <div className="pt-4 border-t border-slate-100 space-y-2">
                    <Link
                      href="/chinh-sach-quyen-rieng-tu"
                      className="block text-indigo-600 hover:underline font-semibold"
                    >
                      Chính sách quyền riêng tư →
                    </Link>
                    <Link
                      href="/huong-dan-nguoi-dung-xoa-tai-khoan"
                      className="block text-rose-600 hover:underline font-semibold"
                    >
                      Hướng dẫn xóa dữ liệu người dùng →
                    </Link>
                  </div>
                </div>
              </aside>

              {/* Main Legal Content */}
              <div className="lg:col-span-8 space-y-10 text-slate-700 text-sm sm:text-[15px] leading-relaxed">
                
                {/* Highlight Notice Box */}
                <div className="rounded-xl border border-blue-200 bg-blue-50/60 p-5">
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                    <div>
                      <h2 className="text-sm font-bold text-indigo-900">
                        Thông báo quan trọng về Ứng dụng kết nối Facebook
                      </h2>
                      <p className="mt-1 text-xs sm:text-sm text-slate-600">
                        Khi bạn tương tác với Fanpage, ứng dụng Facebook hoặc sử dụng tính năng đăng nhập,
                        nhắn tin tự động của Trang Anh AI trên nền tảng Meta, bạn đồng thời đồng ý tuân thủ
                        các Điều khoản nền tảng của Facebook (Meta Platform Terms) và Chính sách nhà phát triển
                        của Meta.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 1 */}
                <article id="dieu-1" className="scroll-mt-24">
                  <h2 className="text-lg font-bold text-[#1E293B] pb-2 border-b border-slate-200">
                    1. Giới thiệu &amp; Phạm vi áp dụng
                  </h2>
                  <div className="mt-3 space-y-2.5">
                    <p>
                      Chào mừng bạn đến với <strong>Trang Anh AI</strong> (thuộc đơn vị Trang Anh Systems Vietnam,
                      sau đây gọi chung là &quot;Trang Anh AI&quot;, &quot;chúng tôi&quot; hoặc &quot;của chúng tôi&quot;).
                    </p>
                    <p>
                      Văn bản Điều khoản Sử dụng này điều chỉnh việc bạn truy cập và sử dụng:
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                      <li>Trang web chính thức tại địa chỉ <code className="text-xs bg-slate-100 px-1 py-0.5 rounded">https://tranganhai.com</code>.</li>
                      <li>Ứng dụng Facebook, Fanpage Messenger Bot, Lead Generation Forms và các webhook kết nối qua Meta Graph API.</li>
                      <li>Hệ thống AI Agent vận hành, trợ lý Zalo Copilot, giải pháp tự động hóa báo giá và phân tích dữ liệu kỹ thuật.</li>
                    </ul>
                  </div>
                </article>

                {/* Section 2 */}
                <article id="dieu-2" className="scroll-mt-24">
                  <h2 className="text-lg font-bold text-[#1E293B] pb-2 border-b border-slate-200">
                    2. Chấp thuận điều khoản
                  </h2>
                  <div className="mt-3 space-y-2.5">
                    <p>
                      Bằng việc truy cập website, bấm nút chấp thuận kết nối ứng dụng Facebook, trò chuyện với
                      hệ thống tự động hoặc gửi biểu mẫu yêu cầu tư vấn, bạn xác nhận rằng bạn đã đọc, hiểu và
                      đồng ý bị ràng buộc bởi toàn bộ các điều khoản này.
                    </p>
                    <p>
                      Nếu bạn không đồng ý với bất kỳ phần nào trong các điều khoản này, vui lòng ngừng sử dụng
                      ngay lập tức và thực hiện theo{" "}
                      <Link
                        href="/huong-dan-nguoi-dung-xoa-tai-khoan"
                        className="text-indigo-600 font-semibold hover:underline"
                      >
                        Hướng dẫn xóa tài khoản &amp; dữ liệu
                      </Link>{" "}
                      để thu hồi quyền truy cập.
                    </p>
                  </div>
                </article>

                {/* Section 3 */}
                <article id="dieu-3" className="scroll-mt-24">
                  <h2 className="text-lg font-bold text-[#1E293B] pb-2 border-b border-slate-200">
                    3. Tài khoản và Bảo mật thông tin
                  </h2>
                  <div className="mt-3 space-y-2.5">
                    <p>
                      Đối với các dịch vụ yêu cầu xác thực qua Facebook Login hoặc thông tin định danh:
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                      <li>Bạn cam kết cung cấp thông tin liên hệ chính xác, hợp pháp và cập nhật.</li>
                      <li>
                        Bạn có trách nhiệm tự bảo vệ mật khẩu, tài khoản mạng xã hội cá nhân và các token xác
                        thực của mình. Chúng tôi không chịu trách nhiệm cho các thiệt hại phát sinh từ việc bạn
                        làm lộ thông tin tài khoản cho bên thứ ba.
                      </li>
                      <li>
                        Nếu phát hiện bất kỳ dấu hiệu truy cập trái phép nào dưới danh nghĩa tài khoản của bạn,
                        bạn cần thông báo ngay lập tức cho chúng tôi qua email:{" "}
                        <a href="mailto:contact@tranganhai.com" className="text-indigo-600 font-medium">
                          contact@tranganhai.com
                        </a>.
                      </li>
                    </ul>
                  </div>
                </article>

                {/* Section 4 */}
                <article id="dieu-4" className="scroll-mt-24">
                  <h2 className="text-lg font-bold text-[#1E293B] pb-2 border-b border-slate-200">
                    4. Quy định sử dụng &amp; Hành vi nghiêm cấm
                  </h2>
                  <div className="mt-3 space-y-2.5">
                    <p>Khi sử dụng ứng dụng và dịch vụ, bạn cam kết <strong>tuyệt đối không</strong> thực hiện các hành vi sau:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="rounded-lg border border-rose-100 bg-rose-50/50 p-3 text-xs text-rose-900">
                        <strong className="block mb-1">Spam &amp; Quá tải hệ thống</strong>
                        Gửi thư rác, tin nhắn lặp đi lặp lại có chủ đích làm nghẽn hạ tầng API hoặc gián đoạn bot.
                      </div>
                      <div className="rounded-lg border border-rose-100 bg-rose-50/50 p-3 text-xs text-rose-900">
                        <strong className="block mb-1">Xâm nhập trái phép</strong>
                        Dò quét lỗ hổng, phát tán mã độc, virus hoặc cố ý can thiệp vào máy chủ lưu trữ.
                      </div>
                      <div className="rounded-lg border border-rose-100 bg-rose-50/50 p-3 text-xs text-rose-900">
                        <strong className="block mb-1">Đảo ngược kỹ thuật (Reverse Eng.)</strong>
                        Dịch ngược mã nguồn, sao chép trái phép kiến trúc prompt, RAG pipeline hoặc dữ liệu nội bộ.
                      </div>
                      <div className="rounded-lg border border-rose-100 bg-rose-50/50 p-3 text-xs text-rose-900">
                        <strong className="block mb-1">Vi phạm tiêu chuẩn Meta &amp; Pháp luật</strong>
                        Đăng tải nội dung xuyên tạc, thù địch, xúc phạm danh dự hoặc vi phạm Tiêu chuẩn cộng đồng Facebook.
                      </div>
                    </div>
                  </div>
                </article>

                {/* Section 5 */}
                <article id="dieu-5" className="scroll-mt-24">
                  <h2 className="text-lg font-bold text-[#1E293B] pb-2 border-b border-slate-200">
                    5. Khuyến cáo dịch vụ AI Agent &amp; Quy trình Báo giá (AI Disclaimer)
                  </h2>
                  <div className="mt-3 space-y-2.5">
                    <p>
                      Trang Anh AI cung cấp giải pháp ứng dụng Trí tuệ nhân tạo (AI Agent) nhằm hỗ trợ doanh nghiệp
                      tự động hóa tra cứu dữ liệu kỹ thuật, tài liệu thông số và lập dự toán sơ bộ.
                    </p>
                    <div className="rounded-lg border border-amber-200 bg-amber-50/70 p-4 text-xs sm:text-sm text-amber-900 space-y-2">
                      <div className="flex items-center gap-2 font-bold">
                        <AlertTriangle className="h-4 w-4 text-amber-700 shrink-0" />
                        <span>Nguyên tắc Human-in-the-loop &amp; Giá trị pháp lý dự toán:</span>
                      </div>
                      <p>
                        Mọi bảng dự toán hoặc câu trả lời từ AI Chatbot/Agent mang tính chất <em>tham khảo nhanh và gợi ý kỹ thuật</em>.
                        Trước khi ký kết hợp đồng thương mại chính thức, thông số vật tư và đơn giá luôn cần được
                        nhân viên phụ trách của doanh nghiệp đối soát và phê duyệt cuối cùng (Human-in-the-loop).
                      </p>
                    </div>
                  </div>
                </article>

                {/* Section 6 */}
                <article id="dieu-6" className="scroll-mt-24">
                  <h2 className="text-lg font-bold text-[#1E293B] pb-2 border-b border-slate-200">
                    6. Tích hợp Facebook &amp; Dịch vụ Bên thứ ba
                  </h2>
                  <div className="mt-3 space-y-2.5">
                    <p>
                      Ứng dụng của chúng tôi có thể sử dụng các giao diện lập trình ứng dụng (APIs) do Meta Platforms Inc.
                      hoặc các nhà cung cấp bên thứ ba phát triển:
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                      <li>
                        Chúng tôi tuân thủ nghiêm ngặt Chính sách dành cho nhà phát triển của Facebook (Meta Developer Policies)
                        và Điều khoản nền tảng Facebook.
                      </li>
                      <li>
                        Chúng tôi không chịu trách nhiệm trong trường hợp dịch vụ bị gián đoạn do sự cố hạ tầng kỹ thuật,
                        thay đổi chính sách API đột xuất hoặc lỗi đường truyền từ phía Meta hay các bên thứ ba khác.
                      </li>
                    </ul>
                  </div>
                </article>

                {/* Section 7 */}
                <article id="dieu-7" className="scroll-mt-24">
                  <h2 className="text-lg font-bold text-[#1E293B] pb-2 border-b border-slate-200">
                    7. Quyền sở hữu trí tuệ
                  </h2>
                  <div className="mt-3 space-y-2.5">
                    <p>
                      Toàn bộ nội dung hiển thị trên hệ thống bao gồm: logo thương hiệu, khẩu hiệu, giao diện người dùng,
                      kiến trúc sơ đồ 5 Node, các bài viết phân tích chuyên sâu, đồ họa và mã nguồn đều thuộc quyền sở hữu
                      trí tuệ độc quyền của Trang Anh AI hoặc được cấp phép hợp pháp.
                    </p>
                    <p>
                      Nghiêm cấm mọi hành vi sao chép, phân phối lại hoặc trích xuất dữ liệu cho mục đích thương mại khi
                      chưa có sự đồng ý bằng văn bản của Trang Anh AI.
                    </p>
                  </div>
                </article>

                {/* Section 8 */}
                <article id="dieu-8" className="scroll-mt-24">
                  <h2 className="text-lg font-bold text-[#1E293B] pb-2 border-b border-slate-200">
                    8. Miễn trừ &amp; Giới hạn trách nhiệm pháp lý
                  </h2>
                  <div className="mt-3 space-y-2.5">
                    <p>
                      Dịch vụ được cung cấp trên cơ sở &quot;nguyên trạng&quot; (as is) và &quot;sẵn có&quot; (as available).
                      Trang Anh AI không cam kết tuyệt đối rằng hệ thống sẽ không bao giờ phát sinh lỗi ngoài ý muốn hoặc
                      hoạt động không gián đoạn trong các tình huống bất khả kháng (thiên tai, sự cố cáp quang biển, lệnh cấm
                      của cơ quan quản lý nhà nước).
                    </p>
                    <p>
                      Trong mọi trường hợp được pháp luật cho phép, Trang Anh AI sẽ không chịu trách nhiệm bồi thường cho
                      bất kỳ thiệt hại gián tiếp, thiệt hại do mất cơ hội kinh doanh hay giảm sút lợi nhuận phát sinh từ
                      việc sử dụng hoặc không thể sử dụng dịch vụ.
                    </p>
                  </div>
                </article>

                {/* Section 9 */}
                <article id="dieu-9" className="scroll-mt-24">
                  <h2 className="text-lg font-bold text-[#1E293B] pb-2 border-b border-slate-200">
                    9. Tạm ngưng và Chấm dứt dịch vụ
                  </h2>
                  <div className="mt-3 space-y-2.5">
                    <p>
                      Trang Anh AI bảo lưu quyền tạm ngừng hoặc khóa vĩnh viễn quyền truy cập của bất kỳ người dùng nào vi phạm
                      các Điều khoản này hoặc có hành vi gian lận, phá hoại mà không cần báo trước.
                    </p>
                    <p>
                      Người dùng có thể chấm dứt thỏa thuận bất kỳ lúc nào bằng cách ngừng sử dụng dịch vụ và gỡ bỏ ứng dụng
                      khỏi tài khoản Facebook theo hướng dẫn tại trang xóa tài khoản của chúng tôi.
                    </p>
                  </div>
                </article>

                {/* Section 10 */}
                <article id="dieu-10" className="scroll-mt-24">
                  <h2 className="text-lg font-bold text-[#1E293B] pb-2 border-b border-slate-200">
                    10. Luật áp dụng &amp; Giải quyết tranh chấp
                  </h2>
                  <div className="mt-3 space-y-2.5">
                    <p>
                      Các Điều khoản Sử dụng này được điều chỉnh và giải thích theo pháp luật nước Cộng hòa Xã hội Chủ nghĩa
                      Việt Nam (bao gồm Luật Giao dịch Điện tử, Luật An toàn Thông tin Mạng, Luật An ninh Mạng 2018 và
                      Luật Bảo vệ Dữ liệu Cá nhân 91/2025/QH15).
                    </p>
                    <p>
                      Mọi tranh chấp phát sinh sẽ được ưu tiên giải quyết thông qua thương lượng hòa giải thiện chí.
                      Trường hợp không đạt được thỏa thuận, tranh chấp sẽ được đưa ra phân xử tại Tòa án có thẩm quyền tại Việt Nam.
                    </p>
                  </div>
                </article>

                {/* Section 11 */}
                <article id="dieu-11" className="scroll-mt-24">
                  <h2 className="text-lg font-bold text-[#1E293B] pb-2 border-b border-slate-200">
                    11. Thông tin liên hệ &amp; Hỗ trợ pháp lý
                  </h2>
                  <div className="mt-4 rounded-xl border border-slate-200 bg-white p-5 shadow-xs space-y-3">
                    <p className="font-semibold text-slate-900">
                      Đơn vị phát triển: TRANG ANH AI (Trang Anh Systems Vietnam)
                    </p>
                    <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5">
                      <li>
                        <strong>Địa chỉ website:</strong>{" "}
                        <a href="https://tranganhai.com" className="text-indigo-600 hover:underline">
                          https://tranganhai.com
                        </a>
                      </li>
                      <li>
                        <strong>Email hỗ trợ &amp; Pháp lý:</strong>{" "}
                        <a href="mailto:contact@tranganhai.com" className="text-indigo-600 hover:underline font-mono">
                          contact@tranganhai.com
                        </a>
                      </li>
                      <li>
                        <strong>Bộ phận chuyên trách:</strong> Phòng Pháp chế &amp; Tuân thủ Nền tảng Dữ liệu
                      </li>
                    </ul>
                  </div>
                </article>

                {/* Bottom Navigation Links */}
                <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <Link
                    href="/chinh-sach-quyen-rieng-tu"
                    className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-semibold text-sm"
                  >
                    <span>Xem tiếp: Chính sách quyền riêng tư</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/huong-dan-nguoi-dung-xoa-tai-khoan"
                    className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-800 font-semibold text-sm"
                  >
                    <span>Hướng dẫn xóa dữ liệu tài khoản</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
