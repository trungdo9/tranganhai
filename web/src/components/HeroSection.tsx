"use client";

import React from "react";
import { ArrowRight, Lock, Sparkles, Building2, FileSearch, Users2 } from "lucide-react";

export default function HeroSection() {
  const metrics = [
    { label: "Thời gian ra báo giá", value: "8", unit: "giây", delta: "−99%", deltaTone: "green" },
    { label: "Giờ công tiết kiệm / tháng", value: "30", unit: "giờ", delta: "+30 giờ", deltaTone: "green" },
    { label: "Lead phản hồi trong 2 phút", value: "100", unit: "%", delta: "24/7", deltaTone: "teal" },
    { label: "Độ chuẩn xác tính giá", value: "100", unit: "%", delta: "SQL", deltaTone: "green" },
  ];

  return (
    <section id="hero" className="relative overflow-hidden bg-[#F8FAFC] pt-10 pb-16 lg:pt-16 lg:pb-20 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* 2-Column Desktop Grid (1.05fr : 0.95fr) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Headline, Narrative & CTAs */}
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-indigo-50 px-3.5 py-1 text-xs font-semibold text-[#4F46E5] uppercase tracking-wider shadow-2xs">
              <Sparkles className="h-3.5 w-3.5 text-[#4F46E5]" />
              <span>AI Agent Operations · Done-With-You</span>
            </div>

            <h1 className="mt-5 text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight text-[#1E293B] leading-[1.12]">
              Xóa Bỏ Điểm Nghẽn Vận Hành. Xây Dựng{" "}
              <span className="bg-gradient-to-r from-[#4F46E5] to-[#0D9488] bg-clip-text text-transparent">
                Cỗ Máy Doanh Nghiệp Tự Chủ
              </span>{" "}
              Bằng AI Agent Trên Hạ Tầng Chính Chủ.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
              Trang Anh AI co-architecture cùng Ban Giám Đốc trong 4 tuần — không bán công cụ rời rạc, không làm hộ rỗng ruột. Hết sprint, doanh nghiệp của bạn sở hữu vĩnh viễn quy trình, dữ liệu sạch và toàn bộ AI Agent đang chạy.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href="#dang-ky"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0D9488] px-6 py-3.5 text-sm sm:text-base font-semibold text-white shadow-sm hover:bg-[#0f766e] transition-all"
              >
                <span>Đăng ký khám sức khỏe vận hành & live demo</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#engine"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm sm:text-base font-semibold text-slate-700 hover:bg-slate-50 transition-all"
              >
                <span>Xem cỗ máy 5 Node</span>
              </a>
            </div>

            {/* Trust Subtext */}
            <div className="mt-7 pt-6 border-t border-slate-200/80 flex items-start gap-2.5 text-xs text-slate-500 leading-relaxed">
              <Lock className="h-4 w-4 text-[#0D9488] shrink-0 mt-0.5" />
              <span>
                Cài đặt 100% trên tài khoản Enterprise chính chủ • Tuân thủ Luật Dữ Liệu 91/2025/QH15 & Luật AI 134/2025/QH15 • Sở hữu vĩnh viễn quy trình & dữ liệu sạch.
              </span>
            </div>
          </div>

          {/* Right Column: Executive BI Dashboard Mockup Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-6 sm:p-7 bg-[#1E293B] text-white shadow-2xl shadow-slate-900/15 border border-slate-700/80 overflow-hidden">
              {/* Subtle Iris & Teal Glows */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(79,70,229,0.25),transparent_70%),radial-gradient(ellipse_at_bottom_left,rgba(13,148,136,0.20),transparent_70%)] pointer-events-none" />

              <div className="relative">
                {/* Header Bar */}
                <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-700/80">
                  <span className="font-mono text-xs uppercase tracking-widest text-indigo-300 font-semibold">
                    M0 · BÁO CÁO QUẢN TRỊ 1 TRANG
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs text-teal-300 font-medium">
                    <span className="h-2 w-2 rounded-full bg-teal-400 animate-ping"></span>
                    <span>realtime</span>
                  </span>
                </div>

                {/* 2x2 Metric Cards Grid */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  {metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-slate-700/80 bg-slate-800/80 p-3.5 text-left flex flex-col justify-between"
                    >
                      <span className="text-xs text-slate-400 font-normal leading-tight">{m.label}</span>
                      <div className="mt-2 flex items-baseline justify-between">
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">{m.value}</span>
                          <span className="text-xs text-slate-300 font-mono">{m.unit}</span>
                        </div>
                        <span className="text-[11px] font-mono font-semibold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                          {m.delta}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottleneck Alert Box */}
                <div className="mt-4 rounded-xl bg-slate-800/90 border border-amber-500/30 p-3.5 text-xs leading-relaxed text-slate-300">
                  <span className="text-amber-400 font-semibold uppercase tracking-wider mr-1.5">⚡ Điểm nghẽn tuần này:</span>
                  <span>Xác nhận BOQ chờ 3,4 ngày — vượt ngưỡng 1 ngày. Node 4 đề xuất chuyển 12 hồ sơ sang tender copilot (M7).</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Real Imagery & Proof Strip */}
        <div className="mt-14 pt-10 border-t border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Strip 1 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs flex items-center gap-3.5">
              <div className="h-10 w-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#4F46E5] shrink-0">
                <Building2 className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-[#1E293B]">Nhà Máy & Kho Bãi B2B</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Dữ liệu bốc dỡ, tồn kho thực chứng</p>
              </div>
            </div>

            {/* Strip 2 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs flex items-center gap-3.5">
              <div className="h-10 w-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-[#0D9488] shrink-0">
                <FileSearch className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-[#1E293B]">Kỹ Thuật Tra Cứu TDS & MSDS</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Bóc tách thông số Quatest/ASTM</p>
              </div>
            </div>

            {/* Strip 3 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs flex items-center gap-3.5">
              <div className="h-10 w-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
                <Users2 className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-[#1E293B]">Họp Điều Hành Ban Giám Đốc</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Xem Báo cáo quản trị 1 trang realtime</p>
              </div>
            </div>

          </div>
          <p className="mt-3 text-center font-mono text-[11px] text-slate-400">
            Hệ thống triển khai trực tiếp trên môi trường vận hành thực tế · Chuẩn hình ảnh công nghiệp kỹ thuật, không dùng stock ảnh ảo giác.
          </p>
        </div>

      </div>
    </section>
  );
}
