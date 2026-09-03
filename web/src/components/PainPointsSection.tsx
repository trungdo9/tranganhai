"use client";

import React from "react";
import { TimerOff, Files, MessagesSquare, TrendingUp, CheckCheck, AlertCircle } from "lucide-react";

export default function PainPointsSection() {
  const leaks = [
    {
      icon: TimerOff,
      title: "Báo giá chậm 1–3 ngày",
      problem: "Sales phải dò bảng giá Excel gộp ô, hỏi lại kỹ thuật, rồi chờ giám đốc duyệt qua Zalo.",
      cost: "68% người mua chọn đơn vị phản hồi đầu tiên",
      standard: "Zalo Copilot (M4) sinh PDF báo giá kèm VietQR trong 8 giây, giá lấy từ động cơ SQL xác định — cấm AI tính nhẩm.",
      gain: "Báo giá 8 giây · phê duyệt 10 giây",
    },
    {
      icon: Files,
      title: "Tri thức nằm trong đầu người",
      problem: "MSDS, catalogue, lịch sử dự án rải rác trong ổ đĩa cá nhân và trí nhớ của hai ba nhân sự lâu năm.",
      cost: "Một người nghỉ việc = một phần vận hành dừng lại",
      standard: "Master RAG Lake (Node 1) chuẩn hóa một lần: unmerge Excel, OCR đa thể thức, chunking cha–con, truy vết nguồn từng câu trả lời.",
      gain: "Sở hữu vĩnh viễn dữ liệu sạch",
    },
    {
      icon: MessagesSquare,
      title: "Lead nguội ngoài giờ",
      problem: "Inbox Fanpage và Zalo OA chỉ có người trực giờ hành chính; hỏi giá lúc 21h thì sáng mai mới có câu trả lời.",
      cost: "Chi phí quảng cáo trả cho lead không ai nhận",
      standard: "Agent trực 24/7 (M3), chấm điểm lead (M5) và đồng bộ thẳng vào MISA AMIS / Brevo / Sheets — không nhập tay lần hai.",
      gain: "Phản hồi trong 2 phút, 24/7",
    },
    {
      icon: TrendingUp,
      title: "Điều hành bằng cảm giác",
      problem: "Báo cáo tổng hợp thủ công cuối tháng, số liệu đã cũ 30 ngày khi tới bàn Ban Giám Đốc.",
      cost: "48,8% doanh nghiệp dừng vì vận hành không theo được tăng trưởng",
      standard: "Báo Cáo Quản Trị 1 Trang (M0) realtime, tự nêu tên khâu đang trễ và mô phỏng what-if trước khi quyết.",
      gain: "Tiết kiệm ≥30 giờ công/tháng",
    },
  ];

  return (
    <section id="leak" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3.5 py-1 rounded-full border border-rose-200/80">
            ĐIỂM NGHẼN VẬN HÀNH
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E293B] tracking-tight">
            Không Phải Thiếu Người. Là Quy Trình Đang Rò Rỉ Doanh Thu.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            48,8% doanh nghiệp buộc phải dừng hoạt động vì vận hành không chịu nổi tăng trưởng. Với SME kỹ thuật B2B, rò rỉ nằm đúng ở bốn chỗ dưới đây.
          </p>
          <p className="mt-2 text-xs font-mono text-slate-400">
            Nguồn: Báo cáo Bộ KH&ĐT + GIZ, 2025
          </p>
        </div>

        {/* 4 Cards Grid - 2x2 Clean Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {leaks.map((leak, idx) => {
            const Icon = leak.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs hover:border-slate-300 transition-all text-left"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  
                  {/* Left: Hiện Trạng (Problem & Cost) */}
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wider uppercase text-rose-600 font-semibold">
                        <Icon className="h-3.5 w-3.5" />
                        <span>Hiện trạng</span>
                      </span>
                      <h3 className="mt-2.5 text-lg font-bold text-[#1E293B] tracking-tight">
                        {leak.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed font-normal">
                        {leak.problem}
                      </p>
                    </div>
                    <p className="mt-4 text-xs font-mono font-semibold text-rose-600 bg-rose-50/70 p-2 rounded-lg border border-rose-100">
                      ⚠️ {leak.cost}
                    </p>
                  </div>

                  {/* Right: Chuẩn Trang Anh (Standard & Gain) */}
                  <div className="rounded-xl border border-teal-100 bg-[#F8FAFC] p-4 flex flex-col justify-between h-full">
                    <div>
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wider uppercase text-[#0D9488] font-semibold">
                        <CheckCheck className="h-3.5 w-3.5" />
                        <span>Chuẩn Trang Anh</span>
                      </span>
                      <p className="mt-2 text-sm text-slate-700 leading-relaxed font-medium">
                        {leak.standard}
                      </p>
                    </div>
                    <p className="mt-4 text-xs font-mono font-semibold text-[#0D9488] bg-teal-50 p-2 rounded-lg border border-teal-200/80">
                      ⚡ {leak.gain}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
