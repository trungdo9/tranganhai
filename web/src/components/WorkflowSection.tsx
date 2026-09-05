"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function WorkflowSection() {
  const steps = [
    {
      period: "Tuần 1",
      title: "Khảo sát & chuẩn hóa dữ liệu",
      body: "Tiếp nhận bảng giá Excel, catalogue, tài liệu kỹ thuật; gỡ gộp ô và số hóa thành bộ não tri thức sạch.",
      note: "DN cần: bàn giao tài liệu + cử 1 đầu mối đối soát",
    },
    {
      period: "Tuần 2",
      title: "Cài đặt trên tài khoản chính chủ",
      body: "Thiết lập cỗ máy trên workspace Enterprise riêng; cài giọng văn thương hiệu, luồng xuất bản và Chatbot 24/7.",
      note: "Trang Anh thiết lập 100% hạ tầng bảo mật",
    },
    {
      period: "Tuần 3",
      title: "Căn chỉnh luồng vận hành thực tế",
      body: "Kiểm thử hỏi đáp kỹ thuật, lập dự toán và báo giá; kết nối dữ liệu về Báo Cáo Quản Trị 1 Trang.",
      note: "Hai bên cùng rà soát kịch bản thực tế",
    },
    {
      period: "Tuần 4",
      title: "Đào tạo nhân sự & bàn giao SOP",
      body: "Hai buổi đào tạo thực chiến: nhân viên duyệt việc trong 10 giây, Ban Giám Đốc khai thác số liệu báo cáo.",
      note: "Bàn giao: DN làm chủ 100% hệ thống, ký nghiệm thu",
    },
  ];

  return (
    <section id="lo-trinh" className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-8 lg:px-10 text-center">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs font-bold uppercase tracking-[0.11em] text-indigo-600 bg-indigo-50 px-3.5 py-1 rounded-full border border-indigo-100">
            LỘ TRÌNH DONE-WITH-YOU
          </span>
          <h2 className="mt-3.5 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Lộ Trình Triển Khai AI Agent Trong 4 Tuần
          </h2>
        </div>

        {/* Handover Meeting Image Banner */}
        <div className="relative h-[200px] sm:h-[260px] max-w-4xl mx-auto rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs mb-10">
          <Image
            src="/images/workflow/handover-meeting.jpg"
            alt="Buổi đào tạo & bàn giao hệ thống tuần 4"
            fill
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-5">
            <span className="text-xs font-semibold text-white bg-slate-900/60 px-3 py-1 rounded-md backdrop-blur-xs">
              Buổi đào tạo thực chiến &amp; bàn giao quyền làm chủ cỗ máy tại Tuần 4
            </span>
          </div>
        </div>

        {/* 4 Steps Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 text-left">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs flex flex-col justify-between hover:border-indigo-200 transition-colors"
            >
              <div>
                <span className="inline-block font-mono text-xs font-bold px-2.5 py-1 rounded bg-[#1E293B] text-white mb-3">
                  {step.period}
                </span>

                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-4">
                  {step.body}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-start gap-1.5 text-[11px] font-semibold text-slate-700">
                <CheckCircle2 className="h-3.5 w-3.5 text-teal-600 shrink-0 mt-0.5" />
                <span>{step.note}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
