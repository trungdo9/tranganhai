"use client";

import React from "react";
import { UserX, TimerOff, Gauge } from "lucide-react";

export default function PainPointsSection() {
  const points = [
    {
      num: "01",
      icon: UserX,
      title: 'Tri thức bị "bắt cóc" bởi cá nhân',
      desc: "Bảng giá nằm trên máy cá nhân, quy trình nằm trong đầu người cũ. Một nhân sự kỳ cựu nghỉ việc: mất 3–6 tháng để tuyển và đào tạo lại.",
    },
    {
      num: "02",
      icon: TimerOff,
      title: "Mất khách vì phản hồi chậm trễ",
      desc: "Khách hỏi dự toán, nhân viên mất hàng giờ lục file cũ. 68% người mua B2B chọn đơn vị phản hồi chuyên nghiệp đầu tiên.",
    },
    {
      num: "03",
      icon: Gauge,
      title: "Ban Giám Đốc điều hành bằng cảm tính",
      desc: "Hiệu quả từng kênh phải chờ báo cáo tổng hợp thủ công cuối tháng. Thiếu số liệu tức thì khiến quyết định luôn trễ nhịp.",
    },
  ];

  return (
    <section id="diem-nghen" className="py-16 sm:py-24 bg-gradient-to-br from-[#1E293B] via-[#16233A] to-[#0F172A] text-white">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-8 lg:px-10 text-center">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto mb-12 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.11em] text-rose-300 bg-rose-500/15 px-3.5 py-1 rounded-full border border-rose-500/30">
            3 ĐIỂM NGHẼN VẬN HÀNH B2B
          </span>
          <h2 className="mt-3.5 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Ba &ldquo;Lỗ Rò Rỉ Vận Hành&rdquo; Đang Bào Mòn Biên Lợi Nhuận
          </h2>
        </div>

        {/* 3 Dark Pain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 text-left">
          {points.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-7 backdrop-blur-xs flex flex-col justify-between hover:border-white/20 transition-all shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/15 text-rose-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-sm font-semibold text-slate-400">
                      {p.num}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2 leading-snug">
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

      </div>
    </section>
  );
}
