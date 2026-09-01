"use client";

import React from "react";
import { Clock, Users, Database, ArrowDownRight, TrendingDown, AlertCircle } from "lucide-react";

export default function PainPointsSection() {
  const pains = [
    {
      icon: Database,
      badge: "ĐỨT GÃY DỮ LIỆU",
      stat: "Mất 3–6 Tháng",
      title: "1. Tri Thức Bị 'Bắt Cóc' Bởi Cá Nhân",
      desc: "Bảng giá, quy trình lưu máy cá nhân. Người cũ nghỉ việc → Mất 3–6 tháng đào tạo lại từ đầu.",
    },
    {
      icon: Clock,
      badge: "MẤT ĐƠN VÀO ĐỐI THỦ",
      stat: "68% Khách Rời Đi",
      title: "2. Mất Khách Vì Phản Hồi Chậm Trễ",
      desc: "68% người mua B2B chọn bên báo giá đầu tiên. Nhân viên lục tìm file cả giờ → Nhường đơn cho đối thủ.",
    },
    {
      icon: Users,
      badge: "THIẾU KIỂM SOÁT",
      stat: "Trễ Quyết Định",
      title: "3. Ban Lãnh Đạo Điều Hành Bằng Cảm Tính",
      desc: "Chờ báo cáo thủ công cuối tháng. Thiếu số liệu thời gian thực → Quyết định kinh doanh luôn trễ nhịp.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#1E293B] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/10 px-3.5 py-1 text-xs font-semibold text-rose-300 border border-rose-500/20 uppercase tracking-wider">
            <AlertCircle className="h-3.5 w-3.5 text-rose-400" />
            <span>3 ĐIỂM NGHẼN VẬN HÀNH B2B</span>
          </div>
          <h2 className="mt-3.5 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            Ba "Lỗ Rò Rỉ Vận Hành" Âm Thầm Bào Mòn Lợi Nhuận
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
            Những điểm nghẽn thực tế khiến doanh nghiệp SME thất thoát doanh thu mỗi ngày.
          </p>
        </div>

        {/* 3 Pain Cards - Clean Dark Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {pains.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-700/80 bg-slate-800/60 p-6 text-left flex flex-col justify-between hover:border-slate-600 transition-all shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-500/15 text-rose-400">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="rounded-md bg-rose-500/10 px-2.5 py-1 text-xs font-semibold text-rose-300 border border-rose-500/20">
                      {p.stat}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* VISUAL COST COMPARISON BAR CHART - CLEAN STYLING */}
        <div className="max-w-3xl mx-auto rounded-2xl border border-slate-700/80 bg-slate-800/80 p-6 sm:p-8 text-left shadow-md">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-300">
              📊 SO SÁNH CHI PHÍ VẬN HÀNH HÀNG THÁNG
            </span>
            <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-bold text-emerald-300 border border-emerald-500/25">
              TIẾT KIỆM ĐẾN 58% CHI PHÍ
            </span>
          </div>

          <div className="space-y-5">
            {/* In-House Bar */}
            <div>
              <div className="flex justify-between text-xs sm:text-sm font-semibold mb-1.5">
                <span className="text-slate-300">Nuôi 3 Nhân Sự In-House (Sales Admin + Kỹ Thuật + Content):</span>
                <span className="text-rose-400 font-mono text-base font-bold">58.500.000 đ/tháng</span>
              </div>
              <div className="h-3.5 w-full rounded-full bg-slate-700/80 overflow-hidden">
                <div className="h-full rounded-full bg-rose-500 w-full" />
              </div>
            </div>

            {/* Trang Anh Bar */}
            <div>
              <div className="flex justify-between text-xs sm:text-sm font-semibold mb-1.5">
                <span className="text-emerald-300">Hệ Thống Vận Hành Trang Anh AI (Gói Tăng Trưởng):</span>
                <span className="text-emerald-400 font-mono text-base font-black">24.000.000 đ/tháng</span>
              </div>
              <div className="h-3.5 w-full rounded-full bg-slate-700/80 overflow-hidden">
                <div className="h-full rounded-full bg-[#0D9488] w-[41%]" />
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-700/80 text-center text-xs text-slate-400 font-normal">
            💡 Tiết kiệm ngay <strong className="text-white font-semibold">34.500.000 đ/tháng</strong> (tương đương 414 triệu/năm) — Tự chủ cỗ máy trên hạ tầng Enterprise chính chủ.
          </div>
        </div>

      </div>
    </section>
  );
}
