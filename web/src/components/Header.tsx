"use client";

import React from "react";
import { ShieldCheck, ArrowRight, PhoneCall, Sparkles } from "lucide-react";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <a href="#" className="hover:opacity-95 transition-opacity flex items-center">
          <Logo size="md" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-7 lg:gap-9 md:flex">
          <a href="#thuc-trang" className="text-xs lg:text-sm font-medium text-slate-600 hover:text-[#4F46E5] transition-colors">
            Thực Trạng
          </a>
          <a href="#giai-phap" className="text-xs lg:text-sm font-medium text-slate-600 hover:text-[#4F46E5] transition-colors">
            Dây Chuyền 5 Node
          </a>
          <a href="#use-cases" className="text-xs lg:text-sm font-medium text-slate-600 hover:text-[#4F46E5] transition-colors">
            Ứng Dụng Ngành
          </a>
          <a href="#quy-trinh" className="text-xs lg:text-sm font-medium text-slate-600 hover:text-[#4F46E5] transition-colors">
            Lộ Trình 4 Tuần
          </a>
          <a href="#bang-gia" className="text-xs lg:text-sm font-medium text-slate-600 hover:text-[#4F46E5] transition-colors">
            Bảng Giá Retainer
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="tel:0912345678"
            className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-100/80 hover:bg-slate-200/80 px-3.5 py-2 rounded-lg transition-colors border border-slate-200/70"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0D9488]"></span>
            </span>
            <PhoneCall className="h-3.5 w-3.5 text-[#0D9488]" />
            <span className="font-mono">0912 345 678</span>
          </a>

          <a
            href="#dang-ky"
            className="inline-flex items-center gap-1.5 rounded-lg bg-[#0D9488] px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#0f766e] active:scale-95"
          >
            <span>Khám Sức Khỏe Vận Hành</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
