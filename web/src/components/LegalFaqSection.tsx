"use client";

import React, { useState } from "react";
import { ChevronDown, ShieldCheck, Scale, HelpCircle } from "lucide-react";

export default function LegalFaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Done-With-You nghĩa là doanh nghiệp phải tự làm phần lớn?",
      a: "Không. Trang Anh AI trực tiếp thực hiện 90% khối lượng công việc nặng nhọc nhất trong 4 tuần đầu. Ban Giám Đốc chỉ quyết ba thứ không ai ngoài doanh nghiệp quyết được: dữ liệu gốc, khung giá, và chữ ký phê duyệt.",
    },
    {
      q: "Trong mỗi workflow, phần nào Agent làm và phần nào người làm?",
      a: 'Agent gánh toàn bộ khâu thu gom, bóc tách, tính toán và soạn thảo. Con người chỉ giữ bốn điểm quyết định: nghiệm thu dữ liệu gốc, duyệt nội dung chuyên môn, nhận lead nóng, và phê duyệt giá vượt ngưỡng chiết khấu. Các bước gắn nhãn "Người" trong sơ đồ node chính là bốn điểm đó.',
    },
    {
      q: "Dữ liệu và quy trình thuộc về ai sau khi kết thúc hợp đồng?",
      a: "Thuộc về doanh nghiệp, vĩnh viễn. Toàn bộ hệ thống được cài trên tài khoản Enterprise chính chủ của doanh nghiệp ngay từ tuần 2, tuân thủ Luật Dữ Liệu 91/2025/QH15 và Luật AI 134/2025/QH15. Không có lớp trung gian giữ khóa.",
    },
    {
      q: "AI có thể tính sai giá và làm mất khách không?",
      a: "Kiến trúc cấm AI tính nhẩm. Mọi con số đi qua Động Cơ Tính Giá Chuẩn Xác 100% — một tầng SQL xác định đọc trực tiếp bảng giá đã chuẩn hóa. AI chỉ diễn đạt, không quyết định con số.",
    },
    {
      q: "Có cam kết thứ hạng Google không?",
      a: "Không cam kết thứ hạng Google, vì thứ hạng phụ thuộc yếu tố ngoại cảnh ngoài tầm kiểm soát. Trang Anh AI cam kết những gì hệ thống kiểm soát được: thời gian ra báo giá, thời gian phản hồi lead, độ chuẩn xác tính giá, và số giờ công tiết kiệm mỗi tháng.",
    },
    {
      q: "Ưu đãi 0-Setup áp dụng thế nào?",
      a: "Phí kiến trúc 20–35 triệu (tùy gói) được miễn hoàn toàn khi doanh nghiệp ký hợp đồng 6 tháng và trả trước theo quý. Nghị định 356/2025/NĐ-CP được dẫn chiếu trong phụ lục hợp đồng về xử lý dữ liệu.",
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488] bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200/80">
            MINH BẠCH & PHÁP LÝ
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E293B] tracking-tight">
            Những Câu Ban Giám Đốc Hỏi Trước Khi Ký.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Mọi thắc mắc của bạn về khối lượng công việc, quyền sở hữu dữ liệu và cam kết hợp đồng đều được minh bạch hóa rõ ràng.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white transition-all overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-[#1E293B] pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#4F46E5]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Legal Disclaimer Box */}
        <div className="mt-10 rounded-2xl bg-[#F8FAFC] border border-slate-200 p-4 sm:p-5 flex items-start gap-3 text-xs text-slate-500">
          <ShieldCheck className="h-5 w-5 text-[#0D9488] shrink-0 mt-0.5" />
          <span>
            Hợp đồng dịch vụ của Trang Anh AI có điều khoản bảo mật dữ liệu NDA độc lập, tuân thủ Luật Bảo vệ Dữ liệu Cá nhân 91/2025/QH15, Nghị định 356/2025/NĐ-CP và Luật AI 134/2025/QH15.
          </span>
        </div>

      </div>
    </section>
  );
}
