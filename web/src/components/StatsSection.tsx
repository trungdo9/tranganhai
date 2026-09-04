"use client";

import React from "react";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

export default function StatsSection() {
  const kpis = [
    {
      value: "18%",
      desc: "doanh nghiệp đã tiếp cận AI, chỉ 1% đạt độ trưởng thành vận hành",
    },
    {
      value: "76%",
      desc: "không tự tin vào năng lực tự triển khai nội bộ",
    },
    {
      value: "2,2%",
      desc: "làm chủ được dữ liệu để ra quyết định",
    },
    {
      value: "41%",
      desc: "quản lý Việt Nam khó chứng minh ROI từ AI",
    },
  ];

  const contrastRows = [
    {
      problem: "AI tự bịa thông số & tính nhẩm sai đơn giá chiết khấu.",
      solution: "Cấm AI tính nhẩm: mọi phép tính giá khóa chặt vào CSDL gốc.",
    },
    {
      problem: "Tàng hình trước ChatGPT, Gemini, Perplexity khi khách tra cứu.",
      solution: "Bài viết chuyên gia sinh từ dữ liệu công ty, tối ưu để Chat AI trích dẫn.",
    },
    {
      problem: "Nhân viên dán bảng giá mật lên AI công cộng — rủi ro pháp lý.",
      solution: "Hạ tầng Enterprise độc lập: dữ liệu không rời doanh nghiệp.",
    },
    {
      problem: "Mua nhiều phần mềm nhưng nhân viên vẫn quay về Zalo và Excel.",
      solution: "Nhúng vào quy trình có sẵn: hệ thống chuẩn bị sẵn bản nháp, nhân viên kiểm tra rồi bấm duyệt.",
    },
  ];

  return (
    <section id="thuc-trang" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-8 lg:px-10 text-center">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto mb-12 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.11em] text-indigo-600 bg-indigo-50 px-3.5 py-1 rounded-full border border-indigo-100">
            THỰC TRẠNG THỊ TRƯỜNG
          </span>
          <h2 className="mt-3.5 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            48,8% Doanh Nghiệp Ứng Dụng Công Nghệ Buộc Phải Dừng Lại
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Doanh nghiệp B2B không thiếu công cụ AI. Thứ đang thiếu là nền tảng dữ liệu chuẩn xác và một quy trình vận hành gắn kết.
          </p>
          <p className="mt-2 text-xs font-medium text-slate-400">
            Nguồn: Báo cáo Thường niên Chuyển Đổi Số — Bộ Kế Hoạch &amp; Đầu Tư phối hợp cùng GIZ (n≈1.300)
          </p>
        </div>

        {/* 4 KPI Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 text-left">
          {kpis.map((kpi, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200/90 bg-[#F8FAFC] p-6 shadow-xs flex flex-col justify-start hover:border-indigo-200 transition-colors"
            >
              <div className="font-mono text-3xl sm:text-4xl font-extrabold text-indigo-600 tracking-tight">
                {kpi.value}
              </div>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600 font-normal">
                {kpi.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 2-Column Contrast Table */}
        <div className="rounded-2xl border border-slate-200/90 bg-white shadow-xs overflow-hidden text-left">
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-2 bg-slate-100/80 border-b border-slate-200/80">
            <div className="px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-500">
              4 BẤT CẬP CỦA AI TỰ PHÁT
            </div>
            <div className="px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-teal-700 md:border-l border-slate-200/80">
              CHUẨN MỰC CỦA TRANG ANH AI
            </div>
          </div>

          {/* Table Rows */}
          {contrastRows.map((row, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-1 md:grid-cols-2 ${
                idx < contrastRows.length - 1 ? "border-b border-slate-200/70" : ""
              }`}
            >
              {/* Flaw */}
              <div className="flex items-start gap-3 p-4 sm:p-5 bg-white">
                <AlertTriangle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  {row.problem}
                </span>
              </div>

              {/* Standard */}
              <div className="flex items-start gap-3 p-4 sm:p-5 bg-[#F8FAFC] md:border-l border-slate-200/70">
                <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                  {row.solution}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
