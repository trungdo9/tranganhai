"use client";

import React, { useState } from "react";
import { ChevronDown, ShieldCheck, Scale, HelpCircle, Lock } from "lucide-react";

export default function LegalFaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Dữ liệu nội bộ và bí mật kinh doanh của công ty tôi có bị rò rỉ hoặc chia sẻ ra ngoài không?",
      a: "Tuyệt đối an toàn 100%! Hệ thống được thiết lập hoàn toàn trên tài khoản Enterprise chính chủ của doanh nghiệp bạn (Google Workspace Enterprise hoặc Private Cloud độc lập). Mọi dữ liệu khách hàng, bảng giá và công thức kỹ thuật đều được bảo vệ theo tiêu chuẩn của Luật Dữ Liệu 91/2025/QH15. Dữ liệu không bao giờ bị dùng để huấn luyện AI chung.",
    },
    {
      q: "Nói là 'Đồng hành kiến trúc' thì phía doanh nghiệp tôi có phải làm nhiều việc kỹ thuật phức tạp không?",
      a: "Hoàn toàn KHÔNG! Trang Anh AI trực tiếp gánh 90% khối lượng kỹ thuật nặng nhọc nhất trong 4 tuần đầu (bóc tách file Excel gộp ô, chuẩn hóa dữ liệu, cài đặt hệ thống, kết nối luồng tác nghiệp). Doanh nghiệp chỉ cần cung cấp tài liệu mẫu hiện có và cử nhân sự tham gia 2 buổi nhận bàn giao quy trình ở tuần thứ 4. Quy trình tác nghiệp hàng ngày được thiết kế sao cho nhân viên chỉ cần 10 giây để kiểm tra và bấm duyệt.",
    },
    {
      q: "Làm sao Ban Giám Đốc đo lường được hiệu quả thực tế (ROI) sau khi đưa hệ thống vào hoạt động?",
      a: "Hiệu quả được chứng minh bằng các con số thực tế ngay trên Báo Cáo Quản Trị 1 Trang: (1) Số lượng khách hàng tiềm năng đến từ các công cụ tìm kiếm và Chat AI (GEO); (2) Số giờ công lao động được giải phóng cho đội ngũ bán hàng và kỹ thuật (tiết kiệm tối thiểu 30-40 giờ/tháng); (3) Tốc độ phản hồi báo giá rút ngắn từ nhiều giờ xuống còn vài giây.",
    },
    {
      q: "Nếu bảng giá Excel của tôi bị gộp ô phức tạp thì hệ thống có tính sai giá không?",
      a: "Không bao giờ! Trang Anh AI áp dụng quy trình xử lý dữ liệu đặc biệt để bóc tách các file Excel nhiều tầng gộp ô, chuyển hóa thành cơ sở dữ liệu định giá chuẩn xác. Hệ thống TUYỆT ĐỐI KHÔNG để AI tự tính nhẩm, đảm bảo độ chuẩn xác 100% đến từng đồng theo đúng chính sách giá sỉ/lẻ của công ty.",
    },
    {
      q: "Doanh nghiệp sở hữu những tài sản gì sau khi kết thúc hợp đồng?",
      a: "Doanh nghiệp sở hữu vĩnh viễn toàn bộ kho dữ liệu đã được làm sạch, các bài viết kỹ thuật đã xuất bản, các bản dự toán/báo giá PDF đã tạo và bộ tài liệu quy trình chuẩn (SOP) đã được chuyển giao cho nhân sự nội bộ.",
    },
    {
      q: "Chính sách Cam Kết Đánh Giá Quý Ngày 75 (QBR) và Hoàn tiền được thực hiện thế nào?",
      a: "Vào ngày thứ 75 của hợp đồng, hai bên tổ chức buổi họp Đánh giá Hiệu Quả Quý (QBR) dài 45 phút. Nếu hệ thống không giúp tiết kiệm tối thiểu 30 giờ công lao động mỗi tháng hoặc không đạt các tiêu chuẩn vận hành đã thống nhất, Trang Anh AI cam kết hoàn trả 100% chi phí dịch vụ của tháng tiếp theo, và doanh nghiệp vẫn giữ lại toàn bộ cơ sở dữ liệu đã chuẩn hóa.",
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488] bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
            MINH BẠCH PHÁP LÝ & CAM KẾT
          </span>
          <h2 className="mt-3.5 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E293B] tracking-tight">
            Lá Chắn Pháp Lý & Giải Đáp Băn Khoăn
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Mọi thắc mắc của bạn về an toàn dữ liệu, tính ổn định kỹ thuật và cam kết dịch vụ đều được minh bạch hóa rõ ràng.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: Clean Legal Badges Card */}
          <div className="lg:col-span-4 rounded-2xl border border-slate-200/90 bg-[#F8FAFC] p-6 sm:p-7 text-left shadow-xs">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#4F46E5] text-white">
                <Scale className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[#1E293B]">Chuẩn Mực Pháp Lý 2026</h3>
                <span className="text-xs text-slate-500">Bảo vệ quyền lợi doanh nghiệp</span>
              </div>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm text-slate-700">
              <div className="rounded-xl bg-white p-4 border border-slate-200/80 shadow-xs">
                <strong className="block text-[#1E293B] font-bold mb-1">
                  Luật Dữ Liệu 91/2025/QH15
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Bảo vệ dữ liệu cá nhân & bí mật kinh doanh theo Nghị định 356/2025/NĐ-CP. Dữ liệu lưu trữ độc lập trên tài khoản chính chủ của doanh nghiệp bạn.
                </p>
              </div>

              <div className="rounded-xl bg-white p-4 border border-slate-200/80 shadow-xs">
                <strong className="block text-[#1E293B] font-bold mb-1">
                  Kiểm Duyệt Con Người (Human-in-the-loop)
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Hệ thống tự động chuẩn bị dữ liệu 95%, nhân viên kiểm duyệt 10s trước khi gửi, tuân thủ Luật AI 134/2025/QH15, loại bỏ hoàn toàn rủi ro sai lệch.
                </p>
              </div>

              <div className="rounded-xl bg-white p-4 border border-slate-200/80 shadow-xs">
                <strong className="block text-[#1E293B] font-bold mb-1">
                  Sở Hữu Tài Sản Trọn Đời
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Khách hàng sở hữu vĩnh viễn toàn bộ kho dữ liệu đã làm sạch, các bài viết đã xuất bản và bộ tài liệu quy trình SOP chuẩn mực.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Clean Minimalist Accordion FAQ */}
          <div className="lg:col-span-8 space-y-3 text-left">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/90 bg-white transition-all overflow-hidden shadow-xs"
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-xs sm:text-sm text-[#1E293B] hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span className="pr-4">{faq.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#4F46E5]" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-[#F8FAFC]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
