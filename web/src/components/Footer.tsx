"use client";

import React from "react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#1E293B] via-[#16233A] to-[#0F172A] text-slate-400 pt-16 pb-8 border-t border-slate-800 text-left">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Logo onDark={true} tagline={true} size={36} />
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal max-w-sm pt-2">
              Đối tác triển khai Hệ thống AI Agent Vận Hành Tự Chủ, kiến trúc dữ liệu RAG và căn chỉnh luồng doanh nghiệp.
            </p>
          </div>

          {/* Col 2: Solutions */}
          <div className="lg:col-span-3 space-y-3">
            <span className="block text-xs font-bold uppercase tracking-wider text-white">
              GIẢI PHÁP
            </span>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#day-chuyen" className="hover:text-white transition-colors">
                  Master RAG Lake
                </a>
              </li>
              <li>
                <a href="#day-chuyen" className="hover:text-white transition-colors">
                  Hiện diện AI Search (GEO)
                </a>
              </li>
              <li>
                <a href="#day-chuyen" className="hover:text-white transition-colors">
                  Zalo Copilot báo giá 8s
                </a>
              </li>
              <li>
                <a href="#day-chuyen" className="hover:text-white transition-colors">
                  Executive BI Dashboard
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Focus Industries */}
          <div className="lg:col-span-3 space-y-3">
            <span className="block text-xs font-bold uppercase tracking-wider text-white">
              NGÀNH TRỌNG TÂM
            </span>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#ung-dung" className="hover:text-white transition-colors">
                  Hóa chất &amp; Xử lý nước
                </a>
              </li>
              <li>
                <a href="#ung-dung" className="hover:text-white transition-colors">
                  Van &amp; Cơ điện M&amp;E
                </a>
              </li>
              <li>
                <a href="#ung-dung" className="hover:text-white transition-colors">
                  Vật tư công nghiệp
                </a>
              </li>
              <li>
                <a href="#ung-dung" className="hover:text-white transition-colors">
                  Doanh nghiệp đa website
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Compliance */}
          <div className="lg:col-span-2 space-y-3">
            <span className="block text-xs font-bold uppercase tracking-wider text-white">
              TUÂN THỦ
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>Luật Dữ liệu 91/2025/QH15</li>
              <li>Nghị định 356/2025/NĐ-CP</li>
              <li>Luật AI 134/2025/QH15</li>
              <li>Human-in-the-loop</li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 TRANG ANH AI VIETNAM (Trang Anh Systems). Bản quyền thuộc đơn vị phát triển.</p>
          <a href="https://tranganhai.com" className="font-mono text-slate-400 hover:text-white transition-colors">
            tranganhai.com
          </a>
        </div>
      </div>
    </footer>
  );
}
