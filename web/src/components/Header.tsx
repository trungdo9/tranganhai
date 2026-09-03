"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, PhoneCall } from "lucide-react";
import Logo from "./Logo";

export default function Header() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "leak", label: "Điểm nghẽn", href: "#leak" },
    { id: "engine", label: "Cỗ máy 5 Node", href: "#engine" },
    { id: "demo", label: "Workflow báo giá", href: "#demo" },
    { id: "roadmap", label: "Lộ trình 4 tuần", href: "#roadmap" },
    { id: "pricing", label: "Đầu tư", href: "#pricing" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <a href="#" className="hover:opacity-95 transition-opacity flex items-center">
          <Logo size="md" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-6 lg:gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="inline-flex items-center gap-1.5 text-xs lg:text-sm font-medium text-slate-600 hover:text-[#4F46E5] transition-colors"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-slate-300"></span>
              <span>{link.label}</span>
            </a>
          ))}
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

      {/* Subtle Scroll Progress Bar */}
      <div className="h-[2px] w-full bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-[#4F46E5] to-[#0D9488] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  );
}
