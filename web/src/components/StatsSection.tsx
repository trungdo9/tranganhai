"use client";

import React from "react";
import { Check, X, ArrowRight, ShieldCheck, Zap, Database, MessageSquare } from "lucide-react";

export default function StatsSection() {
  const stats = [
    { number: "50%", label: "Quyết định vận hành sẽ được tự động hóa vào 2027", source: "Gartner" },
    { number: "48,8%", label: "Doanh nghiệp từng bỏ cuộc vì phần mềm quá phức tạp", source: "Bộ KH&ĐT + GIZ" },
    { number: "68%", label: "Khách hàng B2B chuyển sang đối thủ vì chờ giá quá 30p", source: "Khảo sát thị trường" },
  ];

  const comparisons = [
    {
      icon: MessageSquare,
      title: "Tốc Độ Báo Giá",
      oldWay: "Mở Excel dò tay, tính nhẩm chiết khấu mất 15–30 phút",
      newWay: "1 Phím tắt Zalo, xuất file PDF có VietQR trong 8 giây",
    },
    {
      icon: Database,
      title: "Quản Trị Bảng Giá",
      oldWay: "File Excel gộp ô hỗn loạn, sếp đi vắng là cả công ty tắc",
      newWay: "Kho CSDL số hóa chuẩn xác 100%, khử sạch hoàn toàn sai số",
    },
    {
      icon: ShieldCheck,
      title: "An Toàn Dữ Liệu",
      oldWay: "Nhân viên dán bừa lên web ngoài, vi phạm Luật 91/2025",
      newWay: "Cài đặt độc lập 100% trên hạ tầng Enterprise chính chủ",
    },
    {
      icon: Zap,
      title: "Thói Quen Làm Việc",
      oldWay: "Mua app mới phức tạp, bắt nhân viên học lại dẫn đến bỏ xó",
      newWay: "Giữ nguyên 100% thói quen dùng Zalo hàng ngày của sales",
    },
  ];

  return (
    <section id="stats" className="py-14 sm:py-20 bg-white border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#4F46E5]">
            THỰC TRẠNG & ĐỐI TRỌNG
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E293B] tracking-tight">
            Chuyển Đổi Thực Tế: Cũ vs Mới
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Loại bỏ quy trình thủ công chậm chạp để tăng tốc độ chốt đơn gấp 10 lần.
          </p>
        </div>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((s, idx) => (
            <div key={idx} className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 text-left shadow-xs">
              <div className="text-4xl font-black text-[#1E293B] tracking-tight">
                {s.number}
              </div>
              <p className="mt-2 text-xs sm:text-sm font-semibold text-slate-700 leading-snug">
                {s.label}
              </p>
              <div className="mt-3 text-[11px] font-bold text-slate-400">
                Nguồn: {s.source}
              </div>
            </div>
          ))}
        </div>

        {/* Visual Before vs After Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {comparisons.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs text-left hover:border-indigo-200 transition-all"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-[#4F46E5]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-base font-bold text-[#1E293B]">
                    {c.title}
                  </h3>
                </div>

                <div className="space-y-2.5 text-xs sm:text-sm">
                  {/* Old Way */}
                  <div className="flex items-start gap-2.5 rounded-xl bg-rose-50/70 p-3 border border-rose-100 text-rose-950">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-200 text-rose-700 font-bold text-xs">
                      ✕
                    </span>
                    <div>
                      <strong className="text-rose-800 font-bold block text-xs">Trước đây (Thủ công):</strong>
                      <span className="text-slate-600 font-medium">{c.oldWay}</span>
                    </div>
                  </div>

                  {/* New Way */}
                  <div className="flex items-start gap-2.5 rounded-xl bg-emerald-50/80 p-3 border border-emerald-100 text-emerald-950">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-200 text-[#0D9488] font-bold text-xs">
                      ✓
                    </span>
                    <div>
                      <strong className="text-[#0D9488] font-bold block text-xs">Giải pháp Trang Anh:</strong>
                      <span className="text-slate-700 font-semibold">{c.newWay}</span>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
