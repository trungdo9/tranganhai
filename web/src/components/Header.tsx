"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Thực trạng", href: "#thuc-trang" },
    { label: "Điểm nghẽn", href: "#diem-nghen" },
    { label: "5 Node", href: "#day-chuyen" },
    { label: "Đối tượng", href: "#doi-tuong" },
    { label: "Ứng dụng", href: "#ung-dung" },
    { label: "Lộ trình", href: "#lo-trinh" },
    { label: "Hợp tác", href: "#mo-hinh" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/85 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-4 sm:px-8 lg:px-10">
        {/* Brand Logo */}
        <a href="#" className="flex items-center hover:opacity-90 transition-opacity">
          <Logo size={32} />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7 overflow-x-auto no-scrollbar py-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13.5px] font-medium text-slate-700 hover:text-indigo-600 transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button & Mobile Trigger */}
        <div className="flex items-center gap-3">
          <a
            href="#dang-ky"
            className="inline-flex items-center gap-1.5 rounded-lg bg-[#0D9488] px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-[#0f766e] transition-all active:scale-[0.98]"
          >
            <span>Đăng ký Audit</span>
            <ArrowRight className="h-3.5 w-3.5 hidden sm:inline" />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-6 py-4 shadow-lg animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 text-sm font-semibold text-slate-800 hover:text-indigo-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-100">
              <a
                href="#dang-ky"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center rounded-lg bg-[#0D9488] py-2.5 text-sm font-semibold text-white"
              >
                Đăng ký Khám Sức Khỏe Vận Hành
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
