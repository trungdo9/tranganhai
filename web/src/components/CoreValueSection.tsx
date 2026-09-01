"use client";

import React, { useState } from "react";
import { Zap, Database, BarChart3, CheckCircle2, ArrowRight, ShieldCheck, FileCheck, RefreshCw, Send, Smartphone } from "lucide-react";

export default function CoreValueSection() {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      id: 0,
      icon: Zap,
      badge: "MŨI KHOAN CHUYỂN ĐỔI",
      name: "1. Báo Giá Zalo 8s",
      title: "Báo Giá Nhanh Gấp 10 Lần Ngay Trên Zalo",
      desc: "Nhân viên bôi đen tin nhắn viết tắt của khách, bấm 1 phím tắt. Hệ thống tự bóc tách mã hàng, tra cứu giá sỉ/lẻ và xuất file PDF Vector có VietQR trong 8 giây.",
      metrics: ["⚡ 8 Giây / Bản báo giá", "🔒 100% An toàn không khóa số", "👁️ Con người duyệt 5s"],
      previewType: "zalo",
    },
    {
      id: 1,
      icon: Database,
      badge: "KHO DỮ LIỆU SỐ",
      name: "2. Master Data Lake",
      title: "Số Hóa Toàn Bộ Bảng Giá & Catalogue",
      desc: "Gom sạch file Excel gộp ô phức tạp, catalogue 300 trang và hồ sơ TDS/CO/CQ vào 1 cơ sở dữ liệu số hóa xác định. Không bao giờ tính nhầm giá.",
      metrics: ["🎯 Chuẩn xác 100% từng đồng", "📂 Bóc tách Excel đa tầng", "🛡️ Dữ liệu chính chủ"],
      previewType: "data",
    },
    {
      id: 2,
      icon: BarChart3,
      badge: "CỐ VẤN CHIẾN LƯỢC",
      name: "3. Dashboard CEO 1-Trang",
      title: "Báo Cáo Quản Trị Thời Gian Thực Trên Mobile",
      desc: "Ban Giám Đốc mở điện thoại là thấy ngay: Doanh thu theo ngày, số lượt báo giá, tỷ lệ chốt đơn của từng sales và cảnh báo hàng tồn kho.",
      metrics: ["📱 1 Màn hình di động", "⏱️ Cập nhật thời gian thực", "💡 Cảnh báo điểm nghẽn"],
      previewType: "dashboard",
    },
  ];

  return (
    <section id="giai-phap" className="py-14 sm:py-20 bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#4F46E5]">
            BỘ 3 CỖ MÁY VẬN HÀNH
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E293B] tracking-tight">
            Ba Trụ Cột Tự Động Hóa Vận Hành
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Cài đặt trực tiếp trên hạ tầng chính chủ — Không bắt nhân viên đổi thói quen.
          </p>
        </div>

        {/* 3 Pillars Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {pillars.map((p) => {
            const Icon = p.icon;
            const isActive = activeTab === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`flex items-center gap-2.5 rounded-xl px-5 py-3 text-xs sm:text-sm font-bold transition-all ${
                  isActive
                    ? "bg-[#1E293B] text-white shadow-md scale-102"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? "text-[#0D9488]" : "text-slate-400"}`} />
                <span>{p.name}</span>
              </button>
            );
          })}
        </div>

        {/* Visual Content Box for Active Pillar */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-subtle text-left max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content (Short & Punchy) */}
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-block rounded-md bg-indigo-50 px-3 py-1 text-xs font-bold text-[#4F46E5]">
                {pillars[activeTab].badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#1E293B]">
                {pillars[activeTab].title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                {pillars[activeTab].desc}
              </p>

              {/* Metric Pills */}
              <div className="space-y-2 pt-2">
                {pillars[activeTab].metrics.map((m, mIdx) => (
                  <div key={mIdx} className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-[#0D9488] shrink-0" />
                    <span>{m}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href="#dang-ky"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#0D9488] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-teal hover:bg-[#0f766e] transition-all"
                >
                  <span>Xem Demo Thực Tế</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right Visual Graphic */}
            <div className="lg:col-span-6">
              {activeTab === 0 && (
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-xs space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500 border-b pb-2">
                    <span>⚡ QUY TRÌNH BÁO GIÁ 8 GIÂY</span>
                    <span className="text-[#0D9488]">NHANH GẤP 10 LẦN</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="bg-white p-2.5 rounded-lg border border-slate-200 text-slate-700 font-medium">
                      <strong>1. Khách nhắn:</strong> &ldquo;Báo giá 10 bao than 6-12&rdquo;
                    </div>
                    <div className="bg-indigo-50 p-2.5 rounded-lg border border-indigo-100 text-[#4F46E5] font-bold">
                      <strong>2. Bấm phím tắt:</strong> [Ctrl + Shift + Q] (Tự tìm giá sỉ)
                    </div>
                    <div className="bg-emerald-50 p-2.5 rounded-lg border border-emerald-100 text-emerald-800 font-bold flex items-center justify-between">
                      <span><strong>3. Xuất file:</strong> PDF in ấn + Mã VietQR</span>
                      <span className="rounded bg-[#0D9488] px-2 py-0.5 text-white text-[10px]">8s XONG</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 1 && (
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-xs space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500 border-b pb-2">
                    <span>📂 SỐ HÓA KHO DỮ LIỆU BẢNG GIÁ</span>
                    <span className="text-[#4F46E5]">CHUẨN XÁC 100%</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-center text-xs">
                    <div className="bg-white p-3 rounded-lg border border-slate-200">
                      <div className="text-slate-400 font-bold text-[10px]">ĐẦU VÀO THÔ</div>
                      <div className="text-rose-600 font-bold mt-1">Excel Gộp Ô & Scan Mờ</div>
                    </div>
                    <div className="bg-indigo-50 p-3 rounded-lg border border-indigo-100">
                      <div className="text-indigo-400 font-bold text-[10px]">ĐẦU RA SỐ HÓA</div>
                      <div className="text-[#4F46E5] font-bold mt-1">CSDL Định Giá Chuẩn</div>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-slate-200 text-xs text-slate-600 text-center font-medium">
                    🛡️ Bảng giá lưu trữ độc lập trên tài khoản của khách hàng
                  </div>
                </div>
              )}

              {activeTab === 2 && (
                <div className="rounded-2xl border border-slate-200 bg-[#1E293B] text-white p-5 shadow-xs space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold border-b border-slate-700 pb-2">
                    <span className="flex items-center gap-1.5"><Smartphone className="h-3.5 w-3.5 text-[#0D9488]" /> EXECUTIVE BI DASHBOARD</span>
                    <span className="text-emerald-400">REAL-TIME</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-left">
                    <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
                      <span className="text-[10px] text-slate-400 font-bold block">DOANH THU THÁNG</span>
                      <span className="text-base font-black text-emerald-400 font-mono">1.250.000.000 đ</span>
                    </div>
                    <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
                      <span className="text-[10px] text-slate-400 font-bold block">BÁO GIÁ ĐÃ GỬI</span>
                      <span className="text-base font-black text-white font-mono">148 lượt (8s)</span>
                    </div>
                  </div>
                  <div className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-xs text-slate-300">
                    📈 Tỷ lệ chốt đơn: <strong>74%</strong> • Phát hiện 3 mã hàng tồn kho
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
