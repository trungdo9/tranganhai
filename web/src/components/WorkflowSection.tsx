"use client";

import React from "react";
import { Database, Settings, Zap, GraduationCap, ArrowRight, UserCheck } from "lucide-react";

export default function WorkflowSection() {
  const steps = [
    {
      period: "Tuần 1",
      icon: Database,
      title: "Khám sức khỏe vận hành",
      body: "Bóc tách luồng hiện tại, đo thời gian từng công đoạn, chốt phạm vi module theo điểm nghẽn thật.",
      clientTask: "Ban Giám Đốc: 2 giờ làm việc + quyền truy cập dữ liệu gốc.",
    },
    {
      period: "Tuần 2",
      icon: Settings,
      title: "Dựng Master RAG Lake",
      body: "Chuẩn hóa catalogue và bảng giá, cài động cơ SQL, dựng hạ tầng trên tài khoản Enterprise chính chủ.",
      clientTask: "Ban Giám Đốc: Xác nhận khung giá và quy tắc chiết khấu.",
    },
    {
      period: "Tuần 3",
      icon: Zap,
      title: "Bật Agent trên dữ liệu thật",
      body: "Node 3 và Node 4 chạy song song với quy trình cũ; sales dùng thật, đối chiếu từng báo giá.",
      clientTask: "Hai nhân sự sales tham gia 3 buổi vận hành thử.",
    },
    {
      period: "Tuần 4",
      icon: GraduationCap,
      title: "Chuyển giao & tự chủ",
      body: "Bàn giao tài khoản, SOP và Báo Cáo Quản Trị 1 Trang. Ngày 75 rà soát lại toàn hệ.",
      clientTask: "Ban Giám Đốc: Chữ ký phê duyệt SOP và nghiệm thu.",
    },
  ];

  return (
    <section id="roadmap" className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#4F46E5] bg-indigo-50 px-3.5 py-1 rounded-full border border-indigo-200/80">
            DONE-WITH-YOU
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E293B] tracking-tight">
            4 Tuần Co-Architecture. Trang Anh AI Gánh 90% Khối Lượng Kỹ Thuật.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Ban Giám Đốc chỉ tham gia đúng những điểm mà không ai ngoài doanh nghiệp có thể quyết: dữ liệu gốc, khung giá, và chữ ký phê duyệt.
          </p>
        </div>

        {/* 4 Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between text-left relative overflow-hidden"
              >
                {/* Top Badge */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[#4F46E5] bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-100">
                      {step.period}
                    </span>
                    <div className="h-8 w-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#1E293B] tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {step.body}
                  </p>
                </div>

                {/* Client Task Box */}
                <div className="mt-6 pt-4 border-t border-slate-100 bg-slate-50/80 p-3 rounded-xl border">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-amber-700 font-semibold mb-1">
                    <UserCheck className="h-3.5 w-3.5" />
                    <span>Việc của Doanh Nghiệp:</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-snug">
                    {step.clientTask}
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
