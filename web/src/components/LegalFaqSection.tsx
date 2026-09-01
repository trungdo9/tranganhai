"use client";

import React, { useState } from "react";
import { ChevronDown, ShieldCheck, Lock, Scale, HelpCircle } from "lucide-react";

export default function LegalFaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Nói 'Đồng hành kiến trúc & Chuyển giao tự chủ' thì bên tôi có phải làm nhiều việc không?",
      a: "Hoàn toàn KHÔNG! Trang Anh trực tiếp gánh 90% khối lượng kỹ thuật nặng nhọc nhất: bóc tách Excel gộp ô, số hóa hồ sơ kỹ thuật, lập trình CSDL định giá xác định và cài đặt phím tắt Zalo. Doanh nghiệp chỉ cần cung cấp file ban đầu và cử nhân sự tham gia 2 buổi hướng dẫn trong Tuần 4 để nhận bàn giao SOP. Sau 4 tuần, bạn tự chủ làm chủ cỗ máy 100%!",
    },
    {
      q: "Dùng phím tắt Zalo báo giá có bị Zalo khóa tài khoản không?",
      a: "Tuyệt đối an toàn 100%! Khác với các bot lậu can thiệp trái phép vào API ngầm của Zalo (rất dễ bị quét và khóa số vĩnh viễn), giải pháp của Trang Anh hoạt động ở tầng hệ điều hành Desktop (phím tắt thông minh). Nhân viên chỉ cần bấm phím tắt để bóc tách và copy-paste báo giá có kiểm soát của con người (Human-in-the-loop), không vi phạm chính sách Zalo.",
    },
    {
      q: "Nếu bảng giá Excel của tôi bị gộp ô phức tạp thì hệ thống có tính sai giá không?",
      a: "Không bao giờ! Trang Anh áp dụng công nghệ Unmerge & Flattening bảng giá đa tầng kết hợp Cơ sở dữ liệu định giá xác định (Deterministic Pricing). Toàn bộ bảng giá được chuyển đổi thành cơ sở dữ liệu số chuẩn xác. Hệ thống TUYỆT ĐỐI KHÔNG tính nhẩm, đảm bảo độ chuẩn xác 100% đến từng đồng.",
    },
    {
      q: "Nhân viên lớn tuổi không rành công nghệ có dùng được không?",
      a: "Rất dễ dàng! Nhân viên chỉ cần biết 2 thao tác: Bôi đen tin nhắn hỏi giá trên Zalo -> Bấm phím tắt Ctrl + Shift + Q -> Liếc mắt kiểm tra 5 giây và bấm Gửi. Tại Tuần 4, kỹ sư của Trang Anh sẽ kèm cặp 1-1 và bàn giao bộ video hướng dẫn ngắn 3 phút cho từng vị trí.",
    },
    {
      q: "Dữ liệu công ty tôi có bị lộ ra ngoài hoặc đưa lên các nền tảng công cộng không?",
      a: "Không! Hệ thống được thiết lập trực tiếp trên tài khoản Enterprise chính chủ của doanh nghiệp bạn (Google Workspace Enterprise với cam kết Zero-Data-Retention độc lập). Dữ liệu không bao giờ rời khỏi doanh nghiệp, tuân thủ 100% Luật Dữ Liệu 91/2025/QH15 và Nghị định 356/2025/NĐ-CP.",
    },
    {
      q: "Chính sách Cam kết Hoàn tiền tại Ngày 75 (QBR) hoạt động ra sao?",
      a: "Vào ngày thứ 75 của hợp đồng, hai bên tổ chức buổi họp Báo cáo Quản trị Quý (QBR) dài 45 phút. Nếu hệ thống không giúp đội ngũ kinh doanh tiết kiệm tối thiểu 30 giờ làm việc/tháng hoặc lãnh đạo không hài lòng với hiệu suất vận hành, chúng tôi hoàn lại 100% phí tháng tiếp theo và bạn vẫn sở hữu vĩnh viễn toàn bộ dữ liệu đã được làm sạch!",
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488]">
            GIẢI TỎA MỌI HOÀI NGHI
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E293B] tracking-tight">
            Lá Chắn Pháp Lý & Câu Hỏi Thường Gặp
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            Mọi thắc mắc của bạn về an toàn dữ liệu, tính ổn định kỹ thuật và cam kết dịch vụ đều được minh bạch hóa rõ ràng.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Legal Badges Card */}
          <div className="lg:col-span-4 rounded-2xl border border-indigo-100 bg-[#F8FAFC] p-6 sm:p-8 text-left shadow-subtle">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4F46E5] text-white">
                <Scale className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#1E293B]">Chuẩn Mực Pháp Lý 2026</h3>
                <span className="text-xs text-slate-500">Bảo vệ quyền lợi doanh nghiệp</span>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              <div className="rounded-xl bg-white p-4 border border-slate-200 shadow-xs">
                <strong className="block text-[#1E293B] font-bold mb-1">
                  Luật Dữ Liệu 91/2025/QH15
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Bảo vệ dữ liệu cá nhân & bí mật kinh doanh theo Nghị định 356/2025/NĐ-CP. Dữ liệu lưu trữ độc lập trên tài khoản chính chủ của doanh nghiệp bạn.
                </p>
              </div>

              <div className="rounded-xl bg-white p-4 border border-slate-200 shadow-xs">
                <strong className="block text-[#1E293B] font-bold mb-1">
                  Kiểm Duyệt An Toàn 2 Lớp (Human-in-the-loop)
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Hệ thống tự động chuẩn bị dữ liệu 95%, nhân viên kiểm duyệt 5s trước khi gửi, có nhật ký truy vết minh bạch, loại bỏ hoàn toàn rủi ro sai lệch.
                </p>
              </div>

              <div className="rounded-xl bg-white p-4 border border-slate-200 shadow-xs">
                <strong className="block text-[#1E293B] font-bold mb-1">
                  Sở Hữu Tài Sản Trọn Đời
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Khách hàng sở hữu vĩnh viễn toàn bộ kho dữ liệu đã làm sạch, CSDL SQL, các bản báo giá PDF và tài liệu quy trình SOP chuẩn mực.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Accordion FAQ */}
          <div className="lg:col-span-8 space-y-4 text-left">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 bg-white transition-all overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-bold text-sm sm:text-base text-[#1E293B] hover:bg-slate-50 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#4F46E5]" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-[#F8FAFC]">
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
