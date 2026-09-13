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
                  Kho Dữ Liệu &amp; Bảng Giá Gốc
                </a>
              </li>
              <li>
                <a href="#day-chuyen" className="hover:text-white transition-colors">
                  Thu Hút Google &amp; AI Search
                </a>
              </li>
              <li>
                <a href="#demo" className="hover:text-white transition-colors">
                  Báo Giá Đa Kênh Tức Thì 8s
                </a>
              </li>
              <li>
                <a href="#day-chuyen" className="hover:text-white transition-colors">
                  Báo Cáo Quản Trị Realtime
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-white transition-colors">
                  Blog &amp; Kiến Thức Vận Hành
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

          {/* Col 4: Compliance & Legal */}
          <div className="lg:col-span-2 space-y-3">
            <span className="block text-xs font-bold uppercase tracking-wider text-white">
              PHÁP LÝ &amp; TUÂN THỦ
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="/dieu-khoan-su-dung" className="hover:text-white transition-colors">
                  Điều khoản sử dụng
                </a>
              </li>
              <li>
                <a href="/chinh-sach-quyen-rieng-tu" className="hover:text-white transition-colors">
                  Chính sách quyền riêng tư
                </a>
              </li>
              <li>
                <a href="/huong-dan-nguoi-dung-xoa-tai-khoan" className="hover:text-rose-400 transition-colors">
                  Xóa tài khoản &amp; Dữ liệu
                </a>
              </li>
              <li className="pt-1 text-[11px] text-slate-500">Luật Dữ liệu 91/2025/QH15</li>
              <li className="text-[11px] text-slate-500">Nghị định 13/2023/NĐ-CP</li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Legal links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 TRANG ANH AI VIETNAM (Trang Anh Systems). Bản quyền thuộc đơn vị phát triển.</p>
          <div className="flex items-center gap-3 text-xs">
            <a href="/dieu-khoan-su-dung" className="hover:text-slate-300 transition-colors">
              Điều khoản
            </a>
            <span>•</span>
            <a href="/chinh-sach-quyen-rieng-tu" className="hover:text-slate-300 transition-colors">
              Quyền riêng tư
            </a>
            <span>•</span>
            <a href="/huong-dan-nguoi-dung-xoa-tai-khoan" className="hover:text-slate-300 transition-colors">
              Xóa dữ liệu
            </a>
            <span>•</span>
            <a href="https://tranganhai.com" className="font-mono text-slate-400 hover:text-white transition-colors">
              tranganhai.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
