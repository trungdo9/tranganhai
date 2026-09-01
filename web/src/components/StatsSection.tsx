"use client";

import React from "react";
import { Check, X, ShieldCheck, Database, Search, Users } from "lucide-react";

export default function StatsSection() {
  const stats = [
    { number: "48,8%", label: "Doanh nghiệp từng ứng dụng CĐS buộc phải dừng do quá phức tạp", source: "Bộ KH&ĐT + GIZ" },
    { number: "41%", label: "Quản lý B2B khó chứng minh hiệu quả tài chính (ROI) từ AI", source: "Yandex Ads + YouGov" },
    { number: "50%", label: "Quyết định kinh doanh B2B sẽ do AI Agent hỗ trợ vào năm 2027", source: "Gartner Research" },
  ];

  const comparisons = [
    {
      icon: Database,
      title: "1. Độ Chuẩn Xác Dữ Liệu & Giá Bán",
      oldWay: "AI tự đoán thông số, tính nhẩm đơn giá gây rủi ro đền hợp đồng.",
      newWay: "SQL Database khóa giá chuẩn xác 100%, tuyệt đối cấm AI tính nhẩm.",
    },
    {
      icon: Search,
      title: "2. Khả Năng Hiện Diện Trên Chat AI (GEO)",
      oldWay: "Viết bài spam từ khóa cũ; hoàn toàn tàng hình khi khách hỏi ChatGPT.",
      newWay: "Xuất bản bài E-E-A-T từ dữ liệu thật, được ChatGPT & Gemini trích dẫn.",
    },
    {
      icon: ShieldCheck,
      title: "3. An Toàn Dữ Liệu & Pháp Lý",
      oldWay: "Dán bảng giá lên AI công cộng, đối mặt án phạt theo Luật 91/2025.",
      newWay: "Cài đặt độc lập 100% trên hạ tầng Enterprise chính chủ của doanh nghiệp.",
    },
    {
      icon: Users,
      title: "4. Tính Ứng Dụng Trong Vận Hành",
      oldWay: "Mua phần mềm SaaS rời rạc, nhân sự kháng cự và quay lại làm thủ công.",
      newWay: "AI chuẩn bị 95% công việc, nhân sự chỉ mất 10 giây kiểm tra và bấm duyệt.",
    },
  ];

  return (
    <section id="thuc-trang" className="py-16 sm:py-24 bg-white border-y border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#4F46E5] bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
            THỰC TRẠNG THỊ TRƯỜNG & 4 BẤT CẬP GENAI
          </span>
          <h2 className="mt-3.5 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E293B] tracking-tight">
            Tại Sao 48,8% Doanh Nghiệp Từng Dùng AI Phải Dừng Lại?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Doanh nghiệp B2B không thiếu tool AI. Thứ đang thiếu là cỗ máy dữ liệu chuẩn kết nối thông suốt Tiếp thị, Kỹ thuật và Bán hàng.
          </p>
        </div>

        {/* 3 Metric Cards - Clean Minimalist Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {stats.map((s, idx) => (
            <div key={idx} className="rounded-2xl border border-slate-200/80 bg-[#F8FAFC] p-6 text-left shadow-xs flex flex-col justify-between">
              <div>
                <div className="text-4xl sm:text-5xl font-extrabold text-[#1E293B] tracking-tight">
                  {s.number}
                </div>
                <p className="mt-2.5 text-xs sm:text-sm font-medium text-slate-700 leading-relaxed">
                  {s.label}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] font-semibold text-slate-400">
                Nguồn: {s.source}
              </div>
            </div>
          ))}
        </div>

        {/* Clean 4-Card Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {comparisons.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-xs text-left hover:border-indigo-200 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-[#4F46E5]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-[#1E293B]">
                      {c.title}
                    </h3>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm">
                    {/* Old Flawed Way */}
                    <div className="flex items-start gap-2.5 rounded-xl bg-rose-50/60 p-3 border border-rose-100 text-rose-950">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-700 font-bold text-xs mt-0.5">
                        <X className="h-3 w-3" />
                      </span>
                      <div>
                        <strong className="text-rose-800 font-semibold block text-xs">Cách làm tự phát trước đây:</strong>
                        <span className="text-slate-600 font-normal leading-relaxed">{c.oldWay}</span>
                      </div>
                    </div>

                    {/* New Trang Anh Way */}
                    <div className="flex items-start gap-2.5 rounded-xl bg-emerald-50/70 p-3 border border-emerald-100 text-emerald-950">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[#0D9488] font-bold text-xs mt-0.5">
                        <Check className="h-3 w-3" />
                      </span>
                      <div>
                        <strong className="text-[#0D9488] font-semibold block text-xs">Chuẩn mực Trang Anh AI:</strong>
                        <span className="text-slate-700 font-medium leading-relaxed">{c.newWay}</span>
                      </div>
                    </div>
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
