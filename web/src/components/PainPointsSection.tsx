"use client";

import React from "react";
import { Clock, Users, Database, ArrowDownRight, TrendingDown } from "lucide-react";

export default function PainPointsSection() {
  const pains = [
    {
      icon: Clock,
      badge: "MẤT ĐƠN HÀNG",
      stat: "68% Rời Đi",
      title: "Chậm 30 Phút Là Mất Khách",
      desc: "Khách hỏi giá trên Zalo lúc 9h sáng. Sales loay hoay mở Excel dò giá, tính chiết khấu đến 9h30 mới gửi thì khách đã chốt bên khác.",
    },
    {
      icon: Users,
      badge: "LÃNG PHÍ QUỸ LƯƠNG",
      stat: "19.3Tr / Nhân Sự",
      title: "Nuôi Người Đắt & Dễ Mất Quy Trình",
      desc: "Lương 12tr thực chi 19.3tr (BHXH, quản lý, thiết bị). Đào tạo 6 tháng vừa thạo việc thì nghỉ, mang theo toàn bộ khách và dữ liệu.",
    },
    {
      icon: Database,
      badge: "DỮ LIỆU TẢN MÁC",
      stat: "90% Trong Đầu Sếp",
      title: "Sếp Đi Vắng Là Cả Công Ty Đình Trệ",
      desc: "Bảng giá nằm ở file Excel gộp ô rối rắm, catalogue scan mờ. Chỉ có sếp mới nhớ giá chiết khấu, nhân viên không dám tự chốt.",
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#1E293B] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="rounded-full bg-rose-500/20 px-3.5 py-1 text-xs font-bold text-rose-300 border border-rose-500/30 uppercase">
            3 NÚT THẮT DÒNG TIỀN B2B
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            Doanh Nghiệp Đang Mất Tiền Ở Đâu?
          </h2>
          <p className="mt-2 text-slate-300 text-sm">
            Những điểm nghẽn âm thầm bào mòn lợi nhuận mỗi ngày mà báo cáo tài chính không thể hiện.
          </p>
        </div>

        {/* 3 Pain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {pains.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-700 bg-slate-800/80 p-6 text-left flex flex-col justify-between hover:border-slate-500 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/20 text-rose-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-md bg-rose-500/10 px-2.5 py-1 text-xs font-black text-rose-400 border border-rose-500/20">
                      {p.stat}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
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

        {/* VISUAL COST COMPARISON BAR CHART */}
        <div className="max-w-3xl mx-auto rounded-2xl border border-slate-700 bg-slate-800/90 p-6 sm:p-8">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-300">
              📊 SO SÁNH CHI PHÍ VẬN HÀNH THÁNG
            </span>
            <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-black text-emerald-300 border border-emerald-500/30">
              TIẾT KIỆM 58% CHI PHÍ
            </span>
          </div>

          <div className="space-y-5 text-left">
            {/* In-House Bar */}
            <div>
              <div className="flex justify-between text-xs sm:text-sm font-bold mb-1.5">
                <span className="text-slate-300">Nuôi 3 Nhân Sự In-House (Sales Admin + Kỹ Thuật + IT):</span>
                <span className="text-rose-400 font-mono text-base">58.500.000 đ/tháng</span>
              </div>
              <div className="h-4 w-full rounded-full bg-slate-700 overflow-hidden">
                <div className="h-full rounded-full bg-rose-500 w-full" />
              </div>
            </div>

            {/* Trang Anh Bar */}
            <div>
              <div className="flex justify-between text-xs sm:text-sm font-bold mb-1.5">
                <span className="text-emerald-300">Gói Tăng Trưởng Trang Anh (Trọn Gói 4 Tuần & Duy Trì):</span>
                <span className="text-emerald-400 font-mono text-base font-black">24.000.000 đ/tháng</span>
              </div>
              <div className="h-4 w-full rounded-full bg-slate-700 overflow-hidden">
                <div className="h-full rounded-full bg-[#0D9488] w-[41%]" />
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-700 text-center text-xs text-slate-400 font-medium">
            💡 Tiết kiệm ngay <strong>34.500.000 đ/tháng</strong> (414 triệu/năm) — Vận hành tự chủ trên hạ tầng chính chủ.
          </div>
        </div>

      </div>
    </section>
  );
}
