"use client";

import React from "react";
import {
  Lock,
  ShieldCheck,
  KeyRound,
  FileSpreadsheet,
  FileText,
  BookMarked,
  Search,
  MessagesSquare,
  Calculator,
  FileCheck2,
  ArrowRight,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1E293B] via-[#16233A] to-[#0F172A] py-16 sm:py-24 text-white">
      {/* Background Mesh Grid Pattern */}
      <span className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(120%_90%_at_70%_10%,#000_0%,transparent_72%)] pointer-events-none" />

      {/* Dynamic Light Sheen & Ambient Glows */}
      <span className="absolute inset-0 overflow-hidden pointer-events-none">
        <span className="animate-hero-sheen absolute -top-[20%] -left-[30%] w-[60%] h-[140%] rotate-[14deg] bg-gradient-to-r from-transparent via-indigo-400/10 to-transparent" />
      </span>
      <span className="animate-glow-a absolute -top-[180px] -right-[120px] w-[620px] h-[620px] rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.32)_0%,rgba(79,70,229,0)_65%)] pointer-events-none" />
      <span className="animate-glow-b absolute -bottom-[220px] -left-[140px] w-[560px] h-[560px] rounded-full bg-[radial-gradient(circle,rgba(13,148,136,0.22)_0%,rgba(13,148,136,0)_68%)] pointer-events-none" />

      <div className="relative mx-auto max-w-[1240px] px-4 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Core Positioning & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
            
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1 text-xs font-semibold tracking-[0.11em] uppercase text-indigo-200 backdrop-blur-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400 animate-pulse" />
              ĐỒNG HÀNH KIẾN TRÚC & CHUYỂN GIAO
            </div>

            {/* Main Title H1 */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.12] tracking-tight text-white">
              Xóa Bỏ Điểm Nghẽn Vận Hành. <br />
              <span className="bg-gradient-to-r from-[#A5B4FC] via-[#818CF8] to-[#5EEAD4] bg-clip-text text-transparent">
                Tự Chủ Cỗ Máy Doanh Nghiệp.
              </span>
            </h1>

            {/* Lead Paragraph */}
            <p className="text-base sm:text-lg leading-relaxed text-slate-300 font-normal max-w-xl">
              Triển khai AI Agent vận hành cho doanh nghiệp B2B kỹ thuật — bàn giao trong 4 tuần, trên hạ tầng chính chủ.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
              <a
                href="#dang-ky"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#0D9488] px-6 py-3.5 text-sm sm:text-base font-semibold text-white shadow-md shadow-teal-900/30 hover:bg-[#0f766e] transition-all active:scale-[0.98]"
              >
                <span>Đăng ký Khám Sức Khỏe Vận Hành</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#day-chuyen"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3.5 text-sm sm:text-base font-semibold text-white hover:bg-white/10 transition-all active:scale-[0.98]"
              >
                <span>Xem dây chuyền 5 Node</span>
              </a>
            </div>

            {/* Trust Assurance Pills */}
            <div className="flex flex-wrap gap-2.5 pt-2 text-xs text-slate-300">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                <Lock className="h-3.5 w-3.5 text-teal-400" />
                Hạ tầng chính chủ
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                <ShieldCheck className="h-3.5 w-3.5 text-teal-400" />
                Luật 91/2025/QH15
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                <KeyRound className="h-3.5 w-3.5 text-teal-400" />
                Sở hữu dữ liệu & quy trình
              </span>
            </div>
          </div>

          {/* Right Column: Hero Operations Mockup (Báo Cáo Quản Trị 1 Trang · M0) */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-2xl border border-slate-700/80 bg-white text-slate-800 shadow-2xl shadow-black/40 overflow-hidden text-left">
              
              {/* Mockup Header Bar */}
              <div className="flex items-center justify-between border-b border-slate-200 bg-slate-100 px-4 py-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  <span className="ml-2 font-mono text-[11px] font-semibold text-slate-500">
                    Báo Cáo Quản Trị 1 Trang · M0
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-teal-700">
                  <span className="h-2 w-2 rounded-full bg-teal-600 animate-pulse" />
                  <span>Realtime</span>
                </div>
              </div>

              {/* Mockup Body Content - 3 Tiers */}
              <div className="p-4 sm:p-5 space-y-4">
                
                {/* Tầng 1: Master RAG Lake */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Tầng 1 · Master RAG Lake
                  </span>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2.5 rounded-lg border border-slate-200 bg-[#F8FAFC] px-3 py-2 text-xs font-medium text-slate-800">
                      <FileSpreadsheet className="h-4 w-4 text-teal-600 shrink-0" />
                      <span className="truncate">Bảng giá 2026 — Hóa chất.xlsx</span>
                      <span className="ml-auto font-mono text-[10px] text-slate-400 shrink-0">
                        Đã gỡ gộp ô
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 rounded-lg border border-slate-200 bg-[#F8FAFC] px-3 py-2 text-xs font-medium text-slate-800">
                      <FileText className="h-4 w-4 text-teal-600 shrink-0" />
                      <span className="truncate">TDS than hoạt tính gáo dừa.pdf</span>
                      <span className="ml-auto font-mono text-[10px] text-slate-400 shrink-0">
                        Đã OCR
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 rounded-lg border border-slate-200 bg-[#F8FAFC] px-3 py-2 text-xs font-medium text-slate-800">
                      <BookMarked className="h-4 w-4 text-indigo-600 shrink-0" />
                      <span className="truncate">QCVN 01-1:2018/BYT</span>
                      <span className="ml-auto font-mono text-[10px] text-slate-400 shrink-0">
                        Đã gán nhãn
                      </span>
                    </div>
                  </div>
                </div>

                {/* Tầng 2: Khối tác nghiệp */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Tầng 2 · Khối tác nghiệp
                  </span>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="flex flex-col items-center justify-center gap-1 rounded-lg border border-indigo-100 bg-indigo-50/70 p-2 text-center">
                      <Search className="h-4 w-4 text-indigo-600" />
                      <span className="text-[10px] font-bold text-indigo-700 leading-tight">
                        AI Search
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1 rounded-lg border border-indigo-100 bg-indigo-50/70 p-2 text-center">
                      <MessagesSquare className="h-4 w-4 text-indigo-600" />
                      <span className="text-[10px] font-bold text-indigo-700 leading-tight">
                        LiveChat 24/7
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1 rounded-lg border border-indigo-100 bg-indigo-50/70 p-2 text-center">
                      <Calculator className="h-4 w-4 text-indigo-600" />
                      <span className="text-[10px] font-bold text-indigo-700 leading-tight">
                        Dự toán BOQ
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1 rounded-lg border border-teal-200 bg-teal-50/80 p-2 text-center">
                      <FileCheck2 className="h-4 w-4 text-teal-700" />
                      <span className="text-[10px] font-bold text-teal-700 leading-tight">
                        Duyệt 10s
                      </span>
                    </div>
                  </div>
                </div>

                {/* Tầng 3: Báo Cáo Quản Trị 1 Trang */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Tầng 3 · Báo Cáo Quản Trị 1 Trang
                  </span>
                  <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-[#F8FAFC] px-3.5 py-3">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                      <span>Traffic</span>
                      <span className="text-indigo-400">→</span>
                      <span>Lead</span>
                      <span className="text-indigo-400">→</span>
                      <span>Báo giá</span>
                      <span className="text-indigo-400">→</span>
                      <span className="text-[#0D9488]">Doanh thu</span>
                    </div>
                    <span className="font-mono text-[10px] text-slate-400 hidden sm:inline">
                      Số liệu thật DN
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
