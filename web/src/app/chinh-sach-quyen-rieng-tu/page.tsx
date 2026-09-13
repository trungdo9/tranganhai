import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ShieldCheck,
  Lock,
  Eye,
  Trash2,
  FileCheck,
  Scale,
  Clock,
  ArrowRight,
  Database,
  Cpu,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Chính Sách Quyền Riêng Tư & Bảo Mật Dữ Liệu Ứng Dụng Facebook (Privacy Policy) | Trang Anh AI",
  description:
    "Chính sách bảo mật và quyền riêng tư của Trang Anh AI. Quy định thu thập, sử dụng, lưu trữ và bảo vệ dữ liệu cá nhân theo tiêu chuẩn Facebook Platform và Luật Dữ liệu Việt Nam.",
  alternates: {
    canonical: "https://tranganhai.com/chinh-sach-quyen-rieng-tu",
  },
  openGraph: {
    title: "Chính Sách Quyền Riêng Tư & Bảo Mật Dữ Liệu | Trang Anh AI",
    description:
      "Cam kết bảo vệ dữ liệu cá nhân, quyền riêng tư người dùng Facebook và tuân thủ Luật An ninh mạng, Nghị định 13/2023/NĐ-CP.",
    url: "https://tranganhai.com/chinh-sach-quyen-rieng-tu",
    type: "website",
  },
};

export default function ChinhSachQuyenRiengTuPage() {
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
              <span className="text-slate-800">Chính sách quyền riêng tư</span>
            </nav>

            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-100 px-3.5 py-1 text-xs font-semibold text-emerald-700">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Facebook Privacy Policy &amp; Data Protection Compliance</span>
            </div>

            <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#1E293B] tracking-tight leading-tight">
              Chính Sách Quyền Riêng Tư &amp; Bảo Mật Dữ Liệu
            </h1>

            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
              Trang Anh AI cam kết bảo vệ sự riêng tư và dữ liệu cá nhân của người dùng khi truy cập website,
              sử dụng ứng dụng Facebook hoặc tương tác với hệ thống AI Agent của chúng tôi. Chính sách này
              giải thích minh bạch cách chúng tôi thu thập, sử dụng và bảo vệ dữ liệu của bạn.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100 text-xs text-slate-500">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-slate-400" />
                Cập nhật lần cuối: <strong>{lastUpdated}</strong>
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5">
                <Lock className="h-3.5 w-3.5 text-indigo-600" />
                Tuân thủ Nghị định 13/2023/NĐ-CP &amp; Luật Dữ liệu 91/2025/QH15
              </span>
            </div>
          </div>
        </section>

        {/* Policy Body */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-[1000px] px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              
              {/* Sidebar / Quick Index */}
              <aside className="lg:col-span-4 hidden lg:block">
                <div className="sticky top-24 rounded-xl border border-slate-200 bg-white p-5 shadow-xs text-xs space-y-3">
                  <h2 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] text-slate-400">
                    Nội dung chính sách
                  </h2>
                  <nav className="space-y-1.5 text-slate-600">
                    <a href="#muc-1" className="block py-1 hover:text-indigo-600 transition-colors">
                      1. Đơn vị thu thập &amp; Xử lý dữ liệu
                    </a>
                    <a href="#muc-2" className="block py-1 hover:text-indigo-600 transition-colors">
                      2. Dữ liệu thu thập từ Facebook &amp; Dịch vụ
                    </a>
                    <a href="#muc-3" className="block py-1 hover:text-indigo-600 transition-colors">
                      3. Mục đích sử dụng dữ liệu
                    </a>
                    <a href="#muc-4" className="block py-1 hover:text-indigo-600 transition-colors">
                      4. Nguyên tắc AI &amp; Huấn luyện mô hình
                    </a>
                    <a href="#muc-5" className="block py-1 hover:text-indigo-600 transition-colors">
                      5. Lưu trữ &amp; Biện pháp bảo mật
                    </a>
                    <a href="#muc-6" className="block py-1 hover:text-indigo-600 transition-colors">
                      6. Chia sẻ dữ liệu với bên thứ ba
                    </a>
                    <a href="#muc-7" className="block py-1 hover:text-indigo-600 transition-colors">
                      7. Quyền của người dùng &amp; Xóa dữ liệu
                    </a>
                    <a href="#muc-8" className="block py-1 hover:text-indigo-600 transition-colors">
                      8. Cookies &amp; Công nghệ theo dõi
                    </a>
                    <a href="#muc-9" className="block py-1 hover:text-indigo-600 transition-colors">
                      9. Tiếp nhận khiếu nại &amp; Liên hệ DPO
                    </a>
                  </nav>

                  <div className="pt-4 border-t border-slate-100 space-y-2">
                    <Link
                      href="/huong-dan-nguoi-dung-xoa-tai-khoan"
                      className="block text-rose-600 hover:underline font-semibold"
                    >
                      Hướng dẫn xóa dữ liệu người dùng →
                    </Link>
                    <Link
                      href="/dieu-khoan-su-dung"
                      className="block text-indigo-600 hover:underline font-semibold"
                    >
                      Điều khoản sử dụng dịch vụ →
                    </Link>
                  </div>
                </div>
              </aside>

              {/* Main Policy Content */}
              <div className="lg:col-span-8 space-y-10 text-slate-700 text-sm sm:text-[15px] leading-relaxed">
                
                {/* Meta App Review Highlight */}
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-5">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h2 className="text-sm font-bold text-emerald-950">
                        Cam kết minh bạch với Người dùng &amp; Đội ngũ xét duyệt Facebook
                      </h2>
                      <p className="mt-1 text-xs sm:text-sm text-emerald-900/90">
                        Trang Anh AI chỉ yêu cầu những quyền hạn tối thiểu (Least Privilege) từ Facebook Graph API
                        phục vụ trực tiếp cho tính năng trả lời tự động và hỗ trợ kỹ thuật khách hàng.
                        Chúng tôi không bao giờ bán hoặc chia sẻ thông tin này cho bất kỳ mạng lưới quảng cáo nào khác.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 1 */}
                <article id="muc-1" className="scroll-mt-24">
                  <h2 className="text-lg font-bold text-[#1E293B] pb-2 border-b border-slate-200">
                    1. Đơn vị thu thập &amp; Xử lý dữ liệu
                  </h2>
                  <div className="mt-3 space-y-2.5">
                    <p>
                      Đơn vị kiểm soát và xử lý dữ liệu (Data Controller &amp; Data Processor):
                    </p>
                    <div className="rounded-lg bg-slate-50 p-4 border border-slate-200 text-xs sm:text-sm space-y-1 text-slate-800">
                      <p><strong>Tên tổ chức:</strong> TRANG ANH AI (Trang Anh Systems Vietnam)</p>
                      <p><strong>Website:</strong> <a href="https://tranganhai.com" className="text-indigo-600 hover:underline">https://tranganhai.com</a></p>
                      <p><strong>Email đầu mối bảo vệ dữ liệu (DPO):</strong> contact@tranganhai.com</p>
                      <p><strong>Lĩnh vực hoạt động:</strong> Triển khai hệ thống AI Agent vận hành &amp; Kiến trúc dữ liệu doanh nghiệp</p>
                    </div>
                  </div>
                </article>

                {/* Section 2 */}
                <article id="muc-2" className="scroll-mt-24">
                  <h2 className="text-lg font-bold text-[#1E293B] pb-2 border-b border-slate-200">
                    2. Dữ liệu thu thập từ Facebook &amp; Quá trình sử dụng Dịch vụ
                  </h2>
                  <div className="mt-3 space-y-3">
                    <p>Tùy theo cách bạn tương tác với chúng tôi, các dữ liệu sau có thể được tiếp nhận:</p>
                    
                    <div className="space-y-3 text-xs sm:text-sm">
                      <div className="rounded-lg border border-slate-200 bg-white p-4">
                        <strong className="text-slate-900 block mb-1">
                          a. Dữ liệu từ Ứng dụng Facebook &amp; Meta APIs:
                        </strong>
                        <ul className="list-disc pl-5 space-y-1 text-slate-600">
                          <li>Mã định danh người dùng do ứng dụng tạo (App-Scoped User ID - ASID hoặc Page-Scoped User ID - PSID).</li>
                          <li>Họ tên công khai và ảnh đại diện (avatar) của tài khoản Facebook.</li>
                          <li>Địa chỉ email cá nhân (chỉ khi người dùng chủ động cho phép thông qua hộp thoại Facebook Login).</li>
                          <li>Nội dung tin nhắn trao đổi giữa bạn và Fanpage Trang Anh AI qua Facebook Messenger.</li>
                        </ul>
                      </div>

                      <div className="rounded-lg border border-slate-200 bg-white p-4">
                        <strong className="text-slate-900 block mb-1">
                          b. Dữ liệu do người dùng chủ động cung cấp trên Website:
                        </strong>
                        <ul className="list-disc pl-5 space-y-1 text-slate-600">
                          <li>Họ và tên, tên doanh nghiệp, số điện thoại Zalo khi gửi yêu cầu Audit hoặc tư vấn giải pháp.</li>
                          <li>Nội dung mô tả quy trình làm việc, tài liệu kỹ thuật hoặc câu hỏi báo giá gửi qua biểu mẫu.</li>
                        </ul>
                      </div>

                      <div className="rounded-lg border border-slate-200 bg-white p-4">
                        <strong className="text-slate-900 block mb-1">
                          c. Dữ liệu kỹ thuật &amp; Nhật ký truy cập (Log Data):
                        </strong>
                        <ul className="list-disc pl-5 space-y-1 text-slate-600">
                          <li>Địa chỉ IP, loại trình duyệt, hệ điều hành, thời gian gửi tin nhắn và mã trạng thái phản hồi của bot.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>

                {/* Section 3 */}
                <article id="muc-3" className="scroll-mt-24">
                  <h2 className="text-lg font-bold text-[#1E293B] pb-2 border-b border-slate-200">
                    3. Mục đích sử dụng dữ liệu &amp; Cơ sở pháp lý
                  </h2>
                  <div className="mt-3 space-y-2.5">
                    <p>Chúng tôi xử lý thông tin người dùng cho các mục đích chính đáng sau:</p>
                    <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                      <li>
                        <strong>Phản hồi &amp; Tư vấn tự động:</strong> Sử dụng AI Agent để tiếp đón, tra cứu thông số kỹ thuật
                        và giải đáp câu hỏi của bạn trên Messenger/Website 24/7.
                      </li>
                      <li>
                        <strong>Lập dự toán &amp; Báo giá nhanh:</strong> Tính toán báo giá sơ bộ dựa trên thông tin khối lượng
                        và loại vật tư bạn yêu cầu.
                      </li>
                      <li>
                        <strong>Chăm sóc khách hàng có kiểm soát (Human-in-the-loop):</strong> Kết nối nhân viên tư vấn chuyên môn
                        khi yêu cầu vượt quá khả năng tự động của hệ thống.
                      </li>
                      <li>
                        <strong>Bảo đảm an ninh hệ thống:</strong> Ngăn chặn thư rác, tin nhắn tự động phá hoại (spam) và tuân thủ
                        Tiêu chuẩn cộng đồng của Facebook.
                      </li>
                    </ul>
                  </div>
                </article>

                {/* Section 4 */}
                <article id="muc-4" className="scroll-mt-24">
                  <h2 className="text-lg font-bold text-[#1E293B] pb-2 border-b border-slate-200">
                    4. Nguyên tắc AI &amp; Cam kết Huấn luyện Mô hình
                  </h2>
                  <div className="mt-3 space-y-3">
                    <div className="rounded-xl border border-indigo-200 bg-indigo-50/70 p-4 space-y-2 text-xs sm:text-sm text-indigo-950">
                      <div className="flex items-center gap-2 font-bold text-indigo-900">
                        <Cpu className="h-4 w-4 text-indigo-600" />
                        <span>Chính sách Zero Public AI Training:</span>
                      </div>
                      <p>
                        Trang Anh AI cam kết <strong>không sử dụng</strong> các đoạn hội thoại riêng tư, thông tin liên hệ,
                        hoặc dữ liệu nội bộ mà người dùng cung cấp qua Messenger/Website để huấn luyện (train) các mô hình
                        trí tuệ nhân tạo công cộng mở. Toàn bộ quá trình xử lý ngôn ngữ chỉ nhằm mục đích suy luận theo ngữ cảnh (Inference)
                        để trả lời trực tiếp phiên trò chuyện hiện tại.
                      </p>
                    </div>
                  </div>
                </article>

                {/* Section 5 */}
                <article id="muc-5" className="scroll-mt-24">
                  <h2 className="text-lg font-bold text-[#1E293B] pb-2 border-b border-slate-200">
                    5. Lưu trữ &amp; Biện pháp bảo mật dữ liệu
                  </h2>
                  <div className="mt-3 space-y-2.5">
                    <p>Trang Anh AI áp dụng các tiêu chuẩn an toàn thông tin hàng đầu:</p>
                    <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                      <li>
                        <strong>Mã hóa toàn diện:</strong> Toàn bộ dữ liệu truyền tải qua Internet đều được mã hóa bằng chuẩn
                        SSL/TLS 256-bit. Dữ liệu lưu trữ trong cơ sở dữ liệu được mã hóa ở trạng thái nghỉ (Encryption-at-Rest).
                      </li>
                      <li>
                        <strong>Kiểm soát truy cập:</strong> Chỉ những nhân sự được phân công trách nhiệm hỗ trợ kỹ thuật mới
                        được cấp quyền truy cập theo nguyên tắc tối thiểu (Least Privilege).
                      </li>
                      <li>
                        <strong>Hạ tầng đám mây tin cậy:</strong> Hệ thống được triển khai trên hạ tầng máy chủ bảo mật cao,
                        có sao lưu định kỳ và tường lửa chống tấn công từ chối dịch vụ (DDoS protection).
                      </li>
                    </ul>
                  </div>
                </article>

                {/* Section 6 */}
                <article id="muc-6" className="scroll-mt-24">
                  <h2 className="text-lg font-bold text-[#1E293B] pb-2 border-b border-slate-200">
                    6. Chia sẻ dữ liệu với bên thứ ba
                  </h2>
                  <div className="mt-3 space-y-2.5">
                    <p>
                      Chúng tôi cam kết <strong>không bán, không cho thuê và không chia sẻ</strong> thông tin cá nhân của bạn
                      cho bất kỳ bên thứ ba nào vì mục đích tiếp thị hoặc quảng cáo kiếm tiền.
                    </p>
                    <p>Dữ liệu chỉ có thể được chuyển giao trong các trường hợp giới hạn sau:</p>
                    <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                      <li>
                        <strong>Đối tác hạ tầng kỹ thuật:</strong> Các nhà cung cấp máy chủ đám mây (Cloud hosting, cơ sở dữ liệu)
                        được ràng buộc bởi thỏa thuận bảo mật dữ liệu nghiêm ngặt.
                      </li>
                      <li>
                        <strong>Nhà cung cấp nền tảng Facebook/Meta:</strong> Đồng bộ dữ liệu tương tác qua Webhook theo đúng
                        giao thức quy định của Meta Platform.
                      </li>
                      <li>
                        <strong>Yêu cầu pháp lý bắt buộc:</strong> Khi có văn bản yêu cầu chính thức từ cơ quan quản lý nhà nước
                        hoặc tòa án có thẩm quyền theo quy định của pháp luật Việt Nam.
                      </li>
                    </ul>
                  </div>
                </article>

                {/* Section 7 */}
                <article id="muc-7" className="scroll-mt-24">
                  <h2 className="text-lg font-bold text-[#1E293B] pb-2 border-b border-slate-200">
                    7. Quyền của người dùng &amp; Hướng dẫn xóa dữ liệu
                  </h2>
                  <div className="mt-3 space-y-3">
                    <p>
                      Theo quy định của Luật Bảo vệ Dữ liệu Cá nhân và Chính sách Nhà phát triển Meta, bạn có đầy đủ các quyền sau:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                      <div className="p-3 rounded-lg border border-slate-200 bg-white">
                        <strong className="text-slate-900 block mb-0.5">Quyền được biết &amp; truy cập:</strong>
                        Bạn có quyền yêu cầu trích xuất danh sách thông tin chúng tôi đang lưu trữ về bạn.
                      </div>
                      <div className="p-3 rounded-lg border border-slate-200 bg-white">
                        <strong className="text-slate-900 block mb-0.5">Quyền đính chính:</strong>
                        Bạn có quyền yêu cầu cập nhật, chỉnh sửa thông tin liên hệ không chính xác.
                      </div>
                      <div className="p-3 rounded-lg border border-slate-200 bg-white">
                        <strong className="text-slate-900 block mb-0.5">Quyền rút lại sự đồng ý:</strong>
                        Bạn có thể thu hồi quyền truy cập ứng dụng Facebook bất kỳ lúc nào.
                      </div>
                      <div className="p-3 rounded-lg border border-rose-200 bg-rose-50/50">
                        <strong className="text-rose-900 block mb-0.5">Quyền xóa dữ liệu (Erasure):</strong>
                        Yêu cầu xóa toàn bộ lịch sử tin nhắn, thông tin định danh và tài khoản vĩnh viễn.
                      </div>
                    </div>

                    <div className="rounded-lg bg-slate-100 p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
                      <span>Bạn muốn yêu cầu xóa ngay dữ liệu Facebook của mình?</span>
                      <Link
                        href="/huong-dan-nguoi-dung-xoa-tai-khoan"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-rose-600 px-4 py-2 text-xs font-semibold text-white hover:bg-rose-700 transition-colors shrink-0"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                        <span>Xem hướng dẫn xóa dữ liệu</span>
                      </Link>
                    </div>
                  </div>
                </article>

                {/* Section 8 */}
                <article id="muc-8" className="scroll-mt-24">
                  <h2 className="text-lg font-bold text-[#1E293B] pb-2 border-b border-slate-200">
                    8. Cookie &amp; Công nghệ theo dõi
                  </h2>
                  <div className="mt-3 space-y-2.5">
                    <p>
                      Website tranganhai.com sử dụng cookie và các công nghệ lưu trữ trình duyệt cơ bản nhằm:
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                      <li>Ghi nhớ các tùy chọn giao diện và trạng thái phiên làm việc của người dùng.</li>
                      <li>Thu thập số liệu thống kê ẩn danh về lưu lượng truy cập để cải thiện tốc độ và chất lượng trang web.</li>
                    </ul>
                    <p>
                      Bạn hoàn toàn có thể vô hiệu hóa hoặc xóa cookie bất cứ lúc nào thông qua phần cài đặt trình duyệt của mình.
                    </p>
                  </div>
                </article>

                {/* Section 9 */}
                <article id="muc-9" className="scroll-mt-24">
                  <h2 className="text-lg font-bold text-[#1E293B] pb-2 border-b border-slate-200">
                    9. Cơ chế tiếp nhận khiếu nại &amp; Liên hệ DPO
                  </h2>
                  <div className="mt-3 space-y-3">
                    <p>
                      Nếu bạn có bất kỳ câu hỏi, góp ý hoặc muốn khiếu nại về cách xử lý dữ liệu cá nhân,
                      vui lòng liên hệ với Cán bộ chuyên trách Bảo vệ Dữ liệu (DPO) của chúng tôi:
                    </p>
                    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs text-xs sm:text-sm space-y-2">
                      <p>
                        <strong>Đầu mối tiếp nhận:</strong> Ban Pháp chế &amp; Bảo vệ Dữ liệu Cá nhân
                      </p>
                      <p>
                        <strong>Email:</strong>{" "}
                        <a href="mailto:contact@tranganhai.com" className="text-indigo-600 font-mono font-medium hover:underline">
                          contact@tranganhai.com
                        </a>
                      </p>
                      <p>
                        <strong>Địa chỉ website:</strong>{" "}
                        <a href="https://tranganhai.com" className="text-indigo-600 hover:underline">
                          https://tranganhai.com
                        </a>
                      </p>
                      <p className="text-slate-500 pt-1">
                        Chúng tôi cam kết xem xét và phản hồi văn bản chính thức cho mọi khiếu nại trong vòng{" "}
                        <strong>7 ngày làm việc</strong> kể từ ngày tiếp nhận.
                      </p>
                    </div>
                  </div>
                </article>

                {/* Bottom Navigation Links */}
                <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <Link
                    href="/dieu-khoan-su-dung"
                    className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-semibold text-sm"
                  >
                    <span>Xem Điều khoản sử dụng dịch vụ</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/huong-dan-nguoi-dung-xoa-tai-khoan"
                    className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-800 font-semibold text-sm"
                  >
                    <span>Xem Hướng dẫn xóa dữ liệu người dùng</span>
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
