"use client";

import React from "react";
import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-slate-400 py-14 sm:py-20 border-t border-slate-800 text-left">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-5">
            <div className="mb-4">
              <Logo variant="dark" size="md" />
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm mb-4 font-normal">
              <strong className="text-white font-semibold">&ldquo;Trang bị quy trình. Tinh anh vận hành.&rdquo;</strong> <br />
              Hệ Thống AI Agent Vận Hành & Căn Chỉnh Luồng Doanh Nghiệp B2B — Đồng hành kiến trúc và chuyển giao quy trình SOP trên hạ tầng Enterprise chính chủ.
            </p>
            <div className="text-xs text-slate-500 space-y-1">
              <p>• Tuân thủ Luật Bảo vệ Dữ liệu Cá nhân 91/2025/QH15 & Nghị định 356/2025</p>
              <p>• Cơ chế Kiểm duyệt Con người (Human-in-the-loop) theo Luật AI 134/2025/QH15</p>
            </div>
          </div>

          {/* Col 2: Solutions */}
          <div className="md:col-span-3">
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-4">
              Hệ Điều Hành AI B2B
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#engine" className="hover:text-white transition-colors">Node 1 · Master RAG Lake (Core)</a></li>
              <li><a href="#engine" className="hover:text-white transition-colors">Node 2 · Flow Content &amp; GEO (M1, M2)</a></li>
              <li><a href="#engine" className="hover:text-white transition-colors">Node 3 · Tiếp Nhận 24/7 &amp; CRM (M3, M5)</a></li>
              <li><a href="#demo" className="hover:text-white transition-colors">Node 4 · Zalo Copilot Báo Giá 8s (M4)</a></li>
              <li><a href="#engine" className="hover:text-white transition-colors">Node 5 · Báo Cáo Quản Trị 1 Trang (M0)</a></li>
              <li><a href="#roadmap" className="hover:text-white transition-colors">Lộ Trình 4 Tuần Co-Architecture</a></li>
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div className="md:col-span-4">
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-4">
              Kết Nối Đồng Hành
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#0D9488] shrink-0 mt-0.5" />
                <span>Trang Anh Systems — TP. Hồ Chí Minh & KCN Trọng Điểm</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#0D9488] shrink-0" />
                <span className="font-mono">Hotline / Zalo: (+84) 0912 345 678</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#0D9488] shrink-0" />
                <span>contact@tranganhai.com</span>
              </div>
            </div>
            
            <div className="mt-6 rounded-xl bg-slate-800/80 p-3.5 border border-slate-700/80 text-xs text-slate-300">
              🛡️ <strong>Chính sách Zero-Data-Retention:</strong> Toàn bộ dữ liệu doanh nghiệp được mã hóa và lưu trữ độc lập trên tài khoản chính chủ của khách hàng.
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 TRANG ANH SYSTEMS Vietnam. Mọi quyền được bảo lưu.</p>
          <div className="flex items-center gap-6">
            <a href="#dang-ky" className="hover:text-slate-300 transition-colors">Điều khoản dịch vụ</a>
            <a href="#dang-ky" className="hover:text-slate-300 transition-colors">Chính sách bảo mật dữ liệu</a>
            <a href="#dang-ky" className="hover:text-slate-300 transition-colors">Đánh giá QBR Ngày 75</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
