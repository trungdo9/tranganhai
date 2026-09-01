"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, FileText, QrCode, Sparkles, Send, Zap, ShieldCheck, Droplet, Wrench, Globe2, Layers } from "lucide-react";

export default function HeroSection() {
  const [activeStep, setActiveStep] = useState<number>(2);

  const trustTags = [
    { icon: Droplet, label: "Hóa Chất & Lọc Nước" },
    { icon: Wrench, label: "Van Công Nghiệp & M&E" },
    { icon: Layers, label: "Cơ Khí & Thiết Bị Điện" },
    { icon: Globe2, label: "Hệ Thống 1–3+ Web Vệ Tinh" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8FAFC] to-[#F1F5F9] pt-8 pb-14 lg:pt-12 lg:pb-20">
      {/* Ambient Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Eyebrow Badge */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/90 px-4 py-1.5 text-xs font-bold text-[#4F46E5] shadow-xs">
            <ShieldCheck className="h-4 w-4 text-[#4F46E5]" />
            <span>HỆ THỐNG VẬN HÀNH B2B • ĐỒNG HÀNH KIẾN TRÚC & CHUYỂN GIAO TỰ CHỦ</span>
          </div>
        </div>

        {/* Main Headline & Subtitle */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#1E293B] leading-[1.18]">
            Báo Giá Trong <span className="text-[#0D9488]">8 Giây</span>. <br />
            Tự Chủ Trên <span className="text-[#4F46E5]">Hạ Tầng Chính Chủ</span>.
          </h1>
          <p className="mt-3.5 text-sm sm:text-base text-slate-600 font-medium max-w-2xl mx-auto">
            Số hóa bảng giá Excel và quy trình kinh doanh thành cỗ máy tự vận hành. Báo giá tức thì trên Zalo, giải phóng 2–3 giờ gõ phím mỗi ngày.
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5 text-xs sm:text-sm font-bold">
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-50 px-3 py-1.5 text-[#0D9488] border border-emerald-200">
              <Zap className="h-4 w-4" /> 8 Giây / Báo Giá
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-50 px-3 py-1.5 text-[#4F46E5] border border-indigo-200">
              <CheckCircle2 className="h-4 w-4" /> Chuẩn Xác 100%
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 border border-slate-200">
              <ShieldCheck className="h-4 w-4" /> Hạ Tầng Chính Chủ
            </span>
          </div>

          {/* Primary CTA Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#dang-ky"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#0D9488] px-8 py-3.5 text-sm sm:text-base font-bold text-white shadow-teal hover:bg-[#0f766e] hover:shadow-xl transition-all active:scale-95"
            >
              <span>ĐĂNG KÝ KHẢO SÁT & LIVE DEMO</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#quy-trinh"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all shadow-xs"
            >
              <span>Xem Lộ Trình 4 Tuần</span>
            </a>
          </div>
        </div>

        {/* VISUAL SHOWCASE: PRODUCT MOCKUP IMAGE & 3-STEP PIPELINE */}
        <div className="mt-10 max-w-5xl mx-auto">
          <div className="rounded-3xl border border-slate-200 bg-white p-3 sm:p-6 shadow-2xl shadow-slate-200/70">
            
            {/* Visual Screenshot of Zalo Quote Mockup */}
            <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-inner group">
              <img
                src="/zalo-quote-mockup.jpg"
                alt="Giao diện mô phỏng trợ lý báo giá Zalo 8 giây và xuất file PDF VietQR"
                className="w-full h-auto object-cover max-h-[460px] transform group-hover:scale-[1.01] transition-transform duration-500"
              />
              
              {/* Overlay Badge for Clarity */}
              <div className="absolute top-3 left-3 bg-[#1E293B]/90 backdrop-blur text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2 border border-slate-700">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Giao diện Trợ Lý Báo Giá Thực Tế</span>
              </div>

              <div className="absolute bottom-3 right-3 bg-[#0D9488]/90 backdrop-blur text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow">
                <Zap className="h-3.5 w-3.5" />
                <span>Xuất PDF Typst + VietQR trong 8 giây</span>
              </div>
            </div>

            {/* Quick 3-Step Process Flow under image */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4 pt-4 border-t border-slate-100 text-left">
              <div className="rounded-xl bg-slate-50 p-3 border border-slate-200">
                <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">BƯỚC 1: KHÁCH NHẮN</span>
                <p className="text-xs text-slate-700 font-semibold leading-snug">
                  Khách nhắn tiếng lóng trên Zalo: <em>&ldquo;Báo giá 10 bao than 6-12&rdquo;</em>.
                </p>
              </div>

              <div className="rounded-xl bg-indigo-50/70 p-3 border border-indigo-100">
                <span className="text-[10px] font-bold text-[#4F46E5] uppercase block mb-1">BƯỚC 2: PHÍM TẮT 8S</span>
                <p className="text-xs text-indigo-950 font-bold leading-snug">
                  Bấm <span className="rounded bg-[#1E293B] text-white px-1.5 py-0.5 text-[10px] font-mono">Ctrl+Shift+Q</span>, hệ thống tra đúng bảng giá sỉ/lẻ.
                </p>
              </div>

              <div className="rounded-xl bg-teal-50/70 p-3 border border-teal-100">
                <span className="text-[10px] font-bold text-[#0D9488] uppercase block mb-1">BƯỚC 3: XUẤT BÁO GIÁ</span>
                <p className="text-xs text-teal-950 font-bold leading-snug">
                  Xuất file PDF Vector chuẩn in ấn có mã VietQR thanh toán tức thì.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* TRUST & INDUSTRY PARTNER STRIP */}
        <div className="mt-12 max-w-4xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
            ĐO NI ĐÓNG GIÀY CHO CÁC DOANH NGHIỆP TRONG CÁC NGÀNH HÀNG KỸ THUẬT B2B
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {trustTags.map((tag, idx) => {
              const Icon = tag.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-xs font-bold text-slate-700 border border-slate-200 shadow-xs hover:border-indigo-300 transition-colors"
                >
                  <Icon className="h-4 w-4 text-[#0D9488]" />
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
