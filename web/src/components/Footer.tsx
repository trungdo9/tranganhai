"use client";

import React from "react";
import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-slate-400 py-12 sm:py-16 border-t border-slate-800 text-left">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-5">
            <div className="mb-4">
              <Logo variant="dark" size="md" />
            </div>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm mb-4">
              <strong>&ldquo;Trang bị quy trình. Tinh anh vận hành.&rdquo;</strong> <br />
              Hệ thống Tự Động Hóa Vận Hành Doanh Nghiệp & Chuẩn Hóa Luồng Tự Chủ — Đồng hành kiến trúc và chuyển giao SOP trên hạ tầng Enterprise chính chủ của bạn.
            </p>
            <div className="text-xs text-slate-500 space-y-1">
              <p>• Tuân thủ Luật Bảo vệ Dữ liệu Cá nhân 91/2025/QH15</p>
              <p>• Kiểm duyệt an toàn 2 lớp (Human-in-the-loop) theo chuẩn ISO 27001</p>
            </div>
          </div>

          {/* Col 2: Solutions */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Hệ Thống Vận Hành B2B
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#giai-phap" className="hover:text-white transition-colors">Trợ Lý Báo Giá Zalo 8s</a></li>
              <li><a href="#giai-phap" className="hover:text-white transition-colors">Master Data Lake (Kho Dữ Liệu Số)</a></li>
              <li><a href="#giai-phap" className="hover:text-white transition-colors">Executive BI Dashboard Giám Đốc</a></li>
              <li><a href="#giai-phap" className="hover:text-white transition-colors">Hệ Thống Trực Khách 24/7</a></li>
              <li><a href="#giai-phap" className="hover:text-white transition-colors">Xuất Bản Kỹ Thuật Đa Website</a></li>
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div className="md:col-span-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Kết Nối Đồng Hành
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#0D9488] shrink-0 mt-0.5" />
                <span>Trang Anh Systems — TP. Hồ Chí Minh & KCN Đông Nam Bộ</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#0D9488] shrink-0" />
                <span className="font-mono">Hotline / Zalo: (+84) 0912 345 678</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#0D9488] shrink-0" />
                <span>contact@tranganh.vn</span>
              </div>
            </div>
            
            <div className="mt-6 rounded-xl bg-slate-800/80 p-3.5 border border-slate-700 text-xs text-slate-300">
              🛡️ <strong>Chính sách Zero-Data-Retention:</strong> Toàn bộ dữ liệu doanh nghiệp được bảo mật độc lập trên máy chủ chính chủ của khách hàng.
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 TRANG ANH SYSTEMS Vietnam. Mọi quyền được bảo lưu.</p>
          <div className="flex items-center gap-6">
            <a href="#dang-ky" className="hover:text-slate-300 transition-colors">Điều khoản dịch vụ</a>
            <a href="#dang-ky" className="hover:text-slate-300 transition-colors">Chính sách bảo mật dữ liệu</a>
            <a href="#dang-ky" className="hover:text-slate-300 transition-colors">Báo cáo QBR Ngày 75</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
