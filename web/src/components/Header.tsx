"use client";

import React from "react";
import { ShieldCheck, Zap, PhoneCall, MessageCircle } from "lucide-react";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E2E8F0] bg-white/95 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <a href="#" className="hover:opacity-90 transition-opacity">
          <Logo size="md" />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden items-center gap-6 lg:gap-8 md:flex">
          <a href="#stats" className="text-sm font-semibold text-slate-600 hover:text-[#4F46E5] transition-colors">
            Đối Trọng Vận Hành
          </a>
          <a href="#giai-phap" className="text-sm font-semibold text-slate-600 hover:text-[#4F46E5] transition-colors">
            Báo Giá Zalo 8s
          </a>
          <a href="#use-cases" className="text-sm font-semibold text-slate-600 hover:text-[#4F46E5] transition-colors">
            Ứng Dụng Ngành
          </a>
          <a href="#quy-trinh" className="text-sm font-semibold text-slate-600 hover:text-[#4F46E5] transition-colors">
            Lộ Trình 4 Tuần
          </a>
          <a href="#bang-gia" className="text-sm font-semibold text-slate-600 hover:text-[#4F46E5] transition-colors">
            Bảng Giá
          </a>
        </nav>

        {/* Hotline & CTA Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="tel:0912345678"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-lg transition-colors border border-slate-200"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <PhoneCall className="h-3.5 w-3.5 text-[#0D9488]" />
            <span className="font-mono">0912 345 678</span>
          </a>

          <a
            href="#dang-ky"
            className="inline-flex items-center gap-2 rounded-lg bg-[#0D9488] px-4 py-2 text-xs sm:text-sm font-bold text-white shadow-teal transition-all hover:bg-[#0f766e] hover:shadow-lg active:scale-95"
          >
            <Zap className="h-4 w-4" />
            <span>Khảo Sát Miễn Phí</span>
          </a>
        </div>
      </div>
    </header>
  );
}
