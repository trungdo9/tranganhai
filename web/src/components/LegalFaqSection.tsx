"use client";

import React, { useState } from "react";
import { ChevronDown, ShieldCheck, Scale, FileText } from "lucide-react";

export default function LegalFaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "AI Agent khác chatbot thông thường ở điểm nào?",
      a: "Chatbot trả lời theo kịch bản dựng sẵn. AI Agent đọc dữ liệu gốc của doanh nghiệp và thực hiện chuỗi công việc nhiều bước: tra thông số kỹ thuật, lập dự toán, xuất báo giá, ghi dữ liệu vào CRM — rồi chuyển lại cho nhân viên kiểm tra và duyệt.",
    },
    {
      q: "Chi phí triển khai AI Agent cho doanh nghiệp vừa và nhỏ được tính thế nào?",
      a: "Chi phí gồm sprint kiến trúc 4 tuần và phí đồng hành vận hành theo tháng. Mức đầu tư phụ thuộc quy mô dữ liệu, số website và số kênh bán hàng, được báo riêng sau buổi khám sức khỏe vận hành.",
    },
    {
      q: "Dữ liệu nội bộ và bí mật kinh doanh có bị rò rỉ không?",
      a: "Không. Hệ thống được thiết lập hoàn toàn trên tài khoản Enterprise chính chủ của doanh nghiệp. Dữ liệu khách hàng, bảng giá và công thức kỹ thuật được mã hóa theo Luật Dữ Liệu 91/2025/QH15; doanh nghiệp sở hữu vĩnh viễn dữ liệu và quy trình đã chuẩn hóa.",
    },
    {
      q: "Doanh nghiệp có phải cử người làm nhiều việc kỹ thuật phức tạp không?",
      a: "Không. Trang Anh AI đảm nhận phần việc kỹ thuật nặng nhất trong 4 tuần đầu. Nhân sự của bạn cung cấp file mẫu, cử một đầu mối đối soát dữ liệu và tham gia 2 buổi nhận bàn giao ở tuần thứ 4. Vận hành hàng ngày chỉ là kiểm tra bản nháp và bấm duyệt.",
    },
    {
      q: "Ban Giám Đốc đo lường hiệu quả bằng cách nào?",
      a: "Bằng số liệu trên Báo Cáo Quản Trị 1 Trang: khách tiềm năng đến từ công cụ tìm kiếm và Chat AI, số giờ công được giải phóng, và thời gian phản hồi báo giá. Các chỉ số này được chốt cùng doanh nghiệp ngay ở tuần 1 để có mốc so sánh.",
    },
    {
      q: "Chính sách QBR ngày 75 và hoàn phí thực hiện thế nào?",
      a: "Ngày thứ 75 của hợp đồng, hai bên họp đánh giá kết quả. Nếu hệ thống không đạt các tiêu chuẩn vận hành đã thống nhất, Trang Anh AI hoàn chi phí dịch vụ của tháng tiếp theo và doanh nghiệp vẫn giữ toàn bộ cơ sở dữ liệu đã làm sạch.",
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Heading & Legal Foundations */}
          <div className="lg:col-span-5 text-left space-y-5">
            <span className="text-xs font-bold uppercase tracking-[0.11em] text-indigo-600 bg-indigo-50 px-3.5 py-1 rounded-full border border-indigo-100">
              MINH BẠCH PHÁP LÝ
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Câu Hỏi Thường Gặp Khi Triển Khai AI Agent
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Luật Dữ Liệu 91/2025/QH15 · Nghị định 356/2025/NĐ-CP · Luật AI 134/2025/QH15 · Cam kết QBR ngày 75.
            </p>

            <div className="pt-3 space-y-3">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200/80">
                <ShieldCheck className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-700 leading-relaxed">
                  Cài đặt độc lập 100% trên hạ tầng Enterprise chính chủ của doanh nghiệp bạn.
                </span>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200/80">
                <Scale className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-700 leading-relaxed">
                  Cơ chế Kiểm duyệt con người (Human-in-the-loop) loại trừ hoàn toàn sai sót pháp lý.
                </span>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200/80">
                <FileText className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-700 leading-relaxed">
                  Doanh nghiệp sở hữu vĩnh viễn cơ sở dữ liệu đã làm sạch và tài liệu quy trình SOP.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion List */}
          <div className="lg:col-span-7 space-y-3 text-left">
            {faqs.map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/90 bg-[#F8FAFC] overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left font-semibold text-sm sm:text-base text-slate-900 cursor-pointer hover:text-indigo-600 transition-colors"
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-indigo-600" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-0 text-xs sm:text-sm leading-relaxed text-slate-600 font-normal border-t border-slate-200/60 pt-3">
                      {item.a}
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
