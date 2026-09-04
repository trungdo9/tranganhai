"use client";

import React from "react";
import { Factory, FileSpreadsheet, Users, FileCheck2, XCircle } from "lucide-react";

export default function TargetAudienceSection() {
  const cards = [
    {
      icon: Factory,
      title: "Ngành kỹ thuật & công nghiệp",
      desc: "Hóa chất, xử lý nước, vật liệu lọc, van & cơ điện M&E, vật tư công nghiệp, bao bì, gia công cơ khí.",
      accent: "iris",
    },
    {
      icon: FileSpreadsheet,
      title: "Danh mục hàng phức tạp",
      desc: "Bảng giá nhiều tầng chiết khấu, catalogue và TDS nằm rải rác trên Excel, Zalo, ổ cứng cá nhân.",
      accent: "iris",
    },
    {
      icon: Users,
      title: "Đội ngũ 5 – 50 nhân sự",
      desc: "Chưa có phòng IT hay phòng marketing riêng, mỗi người kiêm nhiều việc, không muốn tuyển thêm đầu người.",
      accent: "iris",
    },
    {
      icon: FileCheck2,
      title: "Bán hàng bằng báo giá",
      desc: "Mỗi đơn hàng cần dự toán, bóc tách quy cách hoặc hồ sơ thầu — tốc độ phản hồi quyết định việc thắng đơn.",
      accent: "teal",
    },
  ];

  const notFit = [
    "Doanh nghiệp bán lẻ đơn giá cố định, không cần dự toán theo yêu cầu.",
    "Chưa sẵn sàng bàn giao tài liệu gốc và cử một đầu mối đối soát dữ liệu.",
    "Cần cam kết thứ hạng Google — Trang Anh AI không nhận cam kết phụ thuộc yếu tố ngoại cảnh.",
  ];

  return (
    <section id="doi-tuong" className="py-16 sm:py-24 bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-8 lg:px-10 text-center">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto mb-12 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.11em] text-teal-700 bg-teal-50 px-3.5 py-1 rounded-full border border-teal-100">
            ĐỐI TƯỢNG PHÙ HỢP
          </span>
          <h2 className="mt-3.5 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Doanh Nghiệp Nào Nên Triển Khai AI Agent Vận Hành?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Giải pháp AI Agent này dành cho doanh nghiệp B2B kỹ thuật tại Việt Nam, quy mô 5 – 50 nhân sự, bán hàng dựa trên thông số kỹ thuật và báo giá theo yêu cầu.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 text-left mb-6">
          {cards.map((c, idx) => {
            const Icon = c.icon;
            const isTeal = c.accent === "teal";
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs flex flex-col justify-start hover:border-indigo-200 transition-colors"
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl mb-4 ${
                    isTeal
                      ? "bg-teal-50 text-[#0D9488]"
                      : "bg-indigo-50 text-indigo-600"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2 leading-snug">
                  {c.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {c.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Negative Qualification (Chưa phù hợp nếu) */}
        <div className="rounded-2xl border border-slate-200/80 bg-slate-100/90 p-6 sm:p-7 text-left shadow-xs">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-3">
            CHƯA PHÙ HỢP NẾU
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {notFit.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <XCircle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
