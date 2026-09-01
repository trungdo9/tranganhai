"use client";

import React from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Database, Bot, BarChart3, Droplet, Wrench, Layers, Globe2, FileText, Check, Search } from "lucide-react";

export default function HeroSection() {
  const trustTags = [
    { icon: Droplet, label: "Hóa Chất & Xử Lý Nước" },
    { icon: Wrench, label: "Van Công Nghiệp & M&E" },
    { icon: Layers, label: "Cơ Khí & Tự Động Hóa" },
    { icon: Globe2, label: "Mạng Lưới 1–3+ Web Vệ Tinh" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8FAFC] to-[#F1F5F9] pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Clean Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Clean Eyebrow Badge */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/80 px-3.5 py-1 text-xs font-semibold text-[#4F46E5] shadow-xs">
            <ShieldCheck className="h-3.5 w-3.5 text-[#4F46E5]" />
            <span>AI AGENT OPERATIONS • CHUYỂN GIAO TỰ CHỦ B2B</span>
          </div>
        </div>

        {/* Main Headline & Subtitle */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1E293B] leading-[1.2]">
            Xóa Bỏ Điểm Nghẽn Vận Hành. <br className="hidden sm:inline" />
            Cỗ Máy AI Tự Chủ Trên <span className="text-[#4F46E5]">Hạ Tầng Chính Chủ</span>.
          </h1>
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Dây chuyền 5 Node khép kín: Dữ liệu sạch → Phủ AI Search → Tự động hóa CRM → Báo giá VietQR 8 giây → Dashboard CEO.
          </p>

          {/* Clean Metric Badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold">
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-50 px-3 py-1 text-[#0D9488] border border-emerald-200/70">
              <CheckCircle2 className="h-3.5 w-3.5" /> 5 Node Vận Hành Khép Kín
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-50 px-3 py-1 text-[#4F46E5] border border-indigo-200/70">
              <Sparkles className="h-3.5 w-3.5" /> Hiện Diện AI Search (GEO)
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1 text-slate-700 border border-slate-200/80">
              <ShieldCheck className="h-3.5 w-3.5" /> 100% Hạ Tầng Chính Chủ
            </span>
          </div>

          {/* Primary CTA Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#dang-ky"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#0D9488] px-7 py-3 text-sm sm:text-base font-semibold text-white shadow-sm hover:bg-[#0f766e] transition-all"
            >
              <span>ĐĂNG KÝ LIVE DEMO 45 PHÚT</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#giai-phap"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm sm:text-base font-semibold text-slate-700 hover:bg-slate-50 transition-all"
            >
              <span>Xem Dây Chuyền 5 Node</span>
            </a>
          </div>
        </div>

        {/* VISUAL SHOWCASE: 5-NODE OPERATIONS COMMAND CENTER */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-7 shadow-xl shadow-slate-200/50">
            
            {/* Top Bar of the Mockup */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300"></span>
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300"></span>
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300"></span>
                <span className="ml-2 text-xs font-semibold text-slate-500">Trang Anh Operations Hub • Enterprise Private Workspace</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Trực Tuyến 24/7</span>
              </div>
            </div>

            {/* 5-Node Interconnected Operational Pipeline in Hero */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 text-left">
              
              {/* Node 1 */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-3.5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 mb-1">
                    <span className="text-indigo-600">NODE 01</span>
                    <span>GỐC RỄ</span>
                  </div>
                  <h4 className="text-xs font-bold text-[#1E293B] flex items-center gap-1">
                    <Database className="h-3.5 w-3.5 text-indigo-600 shrink-0" />
                    <span>RAG Data Hub</span>
                  </h4>
                  <p className="text-[11px] text-slate-600 mt-1">
                    Số hóa Excel gộp ô & TDS thành SQL chuẩn 100%.
                  </p>
                </div>
                <div className="mt-2 text-[10px] font-bold text-[#0D9488]">✓ Cấm AI tính nhẩm</div>
              </div>

              {/* Node 2 */}
              <div className="rounded-2xl border border-indigo-100 bg-indigo-50/40 p-3.5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 mb-1">
                    <span className="text-[#4F46E5]">NODE 02</span>
                    <span>THU HÚT</span>
                  </div>
                  <h4 className="text-xs font-bold text-[#1E293B] flex items-center gap-1">
                    <Search className="h-3.5 w-3.5 text-[#4F46E5] shrink-0" />
                    <span>Flow Content</span>
                  </h4>
                  <p className="text-[11px] text-slate-600 mt-1">
                    16–24 bài E-E-A-T/tháng, phủ sóng ChatGPT/Gemini.
                  </p>
                </div>
                <div className="mt-2 text-[10px] font-bold text-[#4F46E5]">✓ AI Search trích dẫn</div>
              </div>

              {/* Node 3 */}
              <div className="rounded-2xl border border-teal-100 bg-teal-50/30 p-3.5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 mb-1">
                    <span className="text-[#0D9488]">NODE 03</span>
                    <span>GIỮ CHÂN</span>
                  </div>
                  <h4 className="text-xs font-bold text-[#1E293B] flex items-center gap-1">
                    <Bot className="h-3.5 w-3.5 text-[#0D9488] shrink-0" />
                    <span>Chatbot & CRM</span>
                  </h4>
                  <p className="text-[11px] text-slate-600 mt-1">
                    Tư vấn 24/7 theo Node 1, tự động đồng bộ Deal CRM.
                  </p>
                </div>
                <div className="mt-2 text-[10px] font-bold text-teal-700">✓ Không sót khách</div>
              </div>

              {/* Node 4 */}
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/30 p-3.5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 mb-1">
                    <span className="text-emerald-700">NODE 04</span>
                    <span>CHỐT ĐƠN</span>
                  </div>
                  <h4 className="text-xs font-bold text-[#1E293B] flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                    <span>Báo Giá VietQR</span>
                  </h4>
                  <p className="text-[11px] text-slate-600 mt-1">
                    Dự toán BOQ 2p & xuất PDF VietQR trong 8 giây.
                  </p>
                </div>
                <div className="mt-2 text-[10px] font-bold text-emerald-700">✓ Nhanh gấp 10 lần</div>
              </div>

              {/* Node 5 */}
              <div className="rounded-2xl border border-slate-700 bg-[#1E293B] text-white p-3.5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 mb-1">
                    <span className="text-emerald-400">NODE 05</span>
                    <span>QUẢN TRỊ</span>
                  </div>
                  <h4 className="text-xs font-bold text-white flex items-center gap-1">
                    <BarChart3 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    <span>Dashboard CEO</span>
                  </h4>
                  <p className="text-[11px] text-slate-300 mt-1">
                    Báo cáo 1 trang thời gian thực: Phễu lead & doanh số.
                  </p>
                </div>
                <div className="mt-2 text-[10px] font-bold text-emerald-400">✓ Quyết định số thật</div>
              </div>

            </div>

          </div>
        </div>

        {/* TRUSTED INDUSTRY PARTNER STRIP */}
        <div className="mt-12 max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
            KIẾN TRÚC ĐO NI ĐÓNG GIÀY CHO CÁC NGÀNH B2B KỸ THUẬT & CÔNG NGHIỆP
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {trustTags.map((tag, idx) => {
              const Icon = tag.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-xs font-semibold text-slate-700 border border-slate-200/80 shadow-xs hover:border-indigo-200 transition-colors"
                >
                  <Icon className="h-3.5 w-3.5 text-[#0D9488]" />
                  <span>{tag.label}</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
