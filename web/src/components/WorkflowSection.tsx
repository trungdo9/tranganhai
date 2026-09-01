"use client";

import React from "react";
import { CheckCircle2, Database, Settings, Zap, GraduationCap, ArrowRight } from "lucide-react";

export default function WorkflowSection() {
  const steps = [
    {
      week: "TUẦN 1",
      icon: Database,
      title: "1. Chuẩn Hóa Dữ Liệu",
      desc: "Bóc tách Excel gộp ô, số hóa TDS/CO-CQ thành CSDL chuẩn xác 100%.",
      deliverable: "Bộ não tri thức số chuẩn xác 100%",
      owner: "Trang Anh làm 90%",
    },
    {
      icon: Settings,
      week: "TUẦN 2",
      title: "2. Cài Đặt Hạ Tầng",
      desc: "Thiết lập cỗ máy AI trên tài khoản Enterprise chính chủ của doanh nghiệp.",
      deliverable: "Hạ tầng bảo mật Luật 91/2025",
      owner: "Trang Anh làm 90%",
    },
    {
      icon: Zap,
      week: "TUẦN 3",
      title: "3. Căn Chỉnh Luồng",
      desc: "Kiểm thử tư vấn 24/7, dự toán BOQ 2p, báo giá VietQR và Dashboard CEO.",
      deliverable: "Luồng tác nghiệp & Dashboard live",
      owner: "Đồng hành căn chỉnh",
    },
    {
      icon: GraduationCap,
      week: "TUẦN 4",
      title: "4. Đào Tạo & Chuyển Giao",
      desc: "Đào tạo nhân viên duyệt 10s, lãnh đạo xem số liệu. Bàn giao quy trình SOP.",
      deliverable: "Doanh nghiệp tự chủ 100%",
      owner: "Chuyển giao toàn quyền",
    },
  ];

  return (
    <section id="quy-trinh" className="py-16 sm:py-24 bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#4F46E5] bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
            QUY TRÌNH ĐỒNG HÀNH & CHUYỂN GIAO TỰ CHỦ
          </span>
          <h2 className="mt-3.5 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E293B] tracking-tight">
            Lộ Trình 4 Tuần: Bàn Giao Cỗ Máy Tự Chủ
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Trang Anh gánh 90% khối lượng kỹ thuật trên hạ tầng chính chủ và chuyển giao tự chủ sau 4 tuần.
          </p>
        </div>

        {/* 4 Clean Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-6xl mx-auto">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 text-left shadow-xs flex flex-col justify-between hover:border-indigo-200 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="rounded-lg bg-[#1E293B] px-2.5 py-1 text-xs font-bold text-white">
                      {s.week}
                    </span>
                    <span className="text-[11px] font-semibold text-[#0D9488] bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-100">
                      {s.owner}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-2.5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-50 text-[#4F46E5]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-[#1E293B]">
                      {s.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-100 text-[11px] font-semibold text-slate-700 flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#0D9488] shrink-0" />
                  <span>Bàn giao: {s.deliverable}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Speed & Autonomy Note */}
        <div className="mt-10 text-center text-xs text-slate-500 font-medium max-w-2xl mx-auto">
          ⏱️ Thay vì kéo dài 3–6 tháng như các dự án triển khai phần mềm cồng kềnh truyền thống, <strong className="text-slate-800 font-bold">Trang Anh AI bàn giao trọn gói cỗ máy vận hành chỉ sau 4 tuần</strong> (trực tiếp trải nghiệm Live Demo trên dữ liệu thật ngay từ Ngày 1).
        </div>

      </div>
    </section>
  );
}
