"use client";

import React from "react";
import { CheckCircle2, ArrowRight, Database, Settings, Zap, GraduationCap } from "lucide-react";

export default function WorkflowSection() {
  const steps = [
    {
      week: "TUẦN 1",
      icon: Database,
      title: "Số Hóa Bảng Giá",
      desc: "Trực tiếp bóc tách Excel gộp ô, số hóa TDS catalogue thành CSDL định giá xác định chuẩn 100%.",
      deliverable: "Kho CSDL giá sỉ/lẻ sạch",
      owner: "Trang Anh làm 90%",
    },
    {
      week: "TUẦN 2",
      icon: Settings,
      title: "Cài Đặt Hạ Tầng",
      desc: "Thiết lập môi trường bảo mật độc lập trên tài khoản Google/Cloud chính chủ của doanh nghiệp bạn.",
      deliverable: "Hạ tầng bảo mật Luật 91",
      owner: "Trang Anh làm 90%",
    },
    {
      week: "TUẦN 3",
      icon: Zap,
      title: "Căn Chỉnh Luồng 8s",
      desc: "Kích hoạt phím tắt Zalo 8s cho đội Sales, trực khách 24/7 và Báo Cáo Quản Trị 1-Trang cho Giám Đốc.",
      deliverable: "Báo giá 8s & Dashboard live",
      owner: "Đồng hành căn chỉnh",
    },
    {
      week: "TUẦN 4",
      icon: GraduationCap,
      title: "Bàn Giao Tự Chủ",
      desc: "Kèm cặp 1-1 cho nhân sự Sales, Quản lý dữ liệu và Giám đốc. Bàn giao trọn gói bộ quy trình SOP.",
      deliverable: "Doanh nghiệp tự chủ 100%",
      owner: "Chuyển giao toàn quyền",
    },
  ];

  return (
    <section id="quy-trinh" className="py-14 sm:py-20 bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#4F46E5]">
            QUY TRÌNH CHUYỂN GIAO
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E293B] tracking-tight">
            Lộ Trình 4 Tuần: Đồng Hành & Chuyển Giao
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Trang Anh gánh 90% khối lượng kỹ thuật — Doanh nghiệp tự chủ vận hành 100% sau 4 tuần.
          </p>
        </div>

        {/* 4 Steps Stepper Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-xs flex flex-col justify-between hover:border-indigo-300 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="rounded-lg bg-[#1E293B] px-2.5 py-1 text-xs font-black text-white">
                      {s.week}
                    </span>
                    <span className="text-[10px] font-bold text-[#0D9488] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                      {s.owner}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-[#4F46E5]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="text-base font-bold text-[#1E293B]">
                      {s.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-slate-700 flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#0D9488] shrink-0" />
                  <span>Bàn giao: {s.deliverable}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Speed note */}
        <div className="mt-8 text-center text-xs text-slate-500 font-medium">
          ⏱️ So sánh: FPT Digital (3–6 tháng) • UPTECH (10–16 tuần) • <strong>Trang Anh: 4 Tuần Bàn Giao (Demo Ngày 1)</strong>
        </div>

      </div>
    </section>
  );
}
