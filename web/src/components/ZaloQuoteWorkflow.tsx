"use client";

import React from "react";
import { MessageSquareText, Database, Calculator, QrCode, Send, FileCheck2, CheckCircle2, FileText, ArrowRight } from "lucide-react";

export default function ZaloQuoteWorkflow() {
  const quoteTrace = [
    {
      time: "00:00",
      icon: MessageSquareText,
      label: 'Sales gõ trên Zalo: "báo giá 5 tấn PAC 30%, giao Long An"',
      note: "Không mở Excel, không hỏi lại kỹ thuật, không chờ ai rảnh.",
      bg: "bg-indigo-50",
      fg: "text-[#4F46E5]",
      border: "border-indigo-100",
    },
    {
      time: "00:01",
      icon: Database,
      label: "Node 1 truy xuất mã hàng và quy cách",
      note: "Đối chiếu catalogue đã chuẩn hóa, tồn kho và điều kiện giao hàng.",
      bg: "bg-indigo-50",
      fg: "text-[#4F46E5]",
      border: "border-indigo-100",
    },
    {
      time: "00:03",
      icon: Calculator,
      label: "Động cơ SQL tính giá, chiết khấu, VAT",
      note: "AI chỉ diễn đạt câu chữ — con số do SQL xác định quyết định.",
      bg: "bg-indigo-50",
      fg: "text-[#4F46E5]",
      border: "border-indigo-100",
    },
    {
      time: "00:06",
      icon: QrCode,
      label: "Sinh PDF báo giá kèm mã VietQR",
      note: "Đúng mẫu nhận diện doanh nghiệp, có điều khoản và hạn hiệu lực.",
      bg: "bg-teal-50",
      fg: "text-[#0D9488]",
      border: "border-teal-100",
    },
    {
      time: "00:08",
      icon: Send,
      label: "Báo giá nằm trong tay khách hàng",
      note: "Đối thủ vẫn đang lục tìm file cũ trong ngày làm việc thứ nhất.",
      bg: "bg-teal-50",
      fg: "text-[#0D9488]",
      border: "border-teal-100",
    },
    {
      time: "+10 giây",
      icon: FileCheck2,
      label: "Giám đốc phê duyệt trên điện thoại",
      note: "Chỉ những đơn vượt ngưỡng chiết khấu sàn mới cần chạm tới bước này.",
      bg: "bg-amber-50",
      fg: "text-amber-700",
      border: "border-amber-100",
    },
  ];

  return (
    <section id="demo" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488] bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200/80">
            WORKFLOW TIÊU BIỂU · M4
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E293B] tracking-tight">
            Một Dòng Tin Trên Zalo. Tám Giây Sau Là PDF Báo Giá.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Đây là đường đi thật của một yêu cầu báo giá qua bốn node — mốc thời gian đo trên hệ thống đã triển khai, không phải kỳ vọng lý thuyết.
          </p>
        </div>

        {/* 2-Column Grid: Timeline Trace vs Zalo Real Screen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: 6 Time Trace Cards */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            {quoteTrace.map((t, idx) => {
              const Icon = t.icon;
              return (
                <div
                  key={idx}
                  className="grid grid-cols-[80px_40px_1fr] sm:grid-cols-[96px_44px_1fr] gap-3 sm:gap-4 items-center p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-[#4F46E5]/40 transition-colors text-left"
                >
                  {/* Timestamp */}
                  <span className="font-mono text-xs sm:text-sm font-semibold text-[#4F46E5]">
                    {t.time}
                  </span>

                  {/* Icon Box */}
                  <span className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${t.bg} border ${t.border} flex items-center justify-center`}>
                    <Icon className={`h-4 w-4 sm:h-5 sm:w-5 ${t.fg}`} />
                  </span>

                  {/* Label & Note */}
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-[#1E293B] leading-snug">
                      {t.label}
                    </p>
                    <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-relaxed">
                      {t.note}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Zalo Copilot Mockup */}
          <div className="lg:col-span-5 rounded-3xl border border-slate-200 bg-slate-50 overflow-hidden shadow-lg">
            <div className="bg-[#1E293B] p-4 text-white flex items-center justify-between border-b border-slate-700">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="font-mono text-xs font-semibold">ZALO COPILOT · M4 ENGINE</span>
              </div>
              <span className="text-[11px] font-mono text-teal-300">00:08s Render</span>
            </div>

            {/* Chat Simulation Content */}
            <div className="p-5 space-y-4 text-left font-sans text-xs">
              
              {/* Sales Input */}
              <div className="flex items-start justify-end gap-2">
                <div className="bg-[#0D9488] text-white p-3 rounded-2xl rounded-tr-xs max-w-[85%] shadow-xs">
                  <p className="font-medium">Báo giá 5 tấn PAC 30% vàng chanh, giao KCN Tân Bình chiều nay</p>
                  <span className="block text-[10px] text-teal-100 text-right mt-1 font-mono">10:15</span>
                </div>
              </div>

              {/* Bot Response */}
              <div className="flex items-start gap-2">
                <div className="h-7 w-7 rounded-lg bg-[#4F46E5] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-1">
                  AI
                </div>
                <div className="bg-white border border-slate-200 p-3.5 rounded-2xl rounded-tl-xs max-w-[90%] shadow-xs space-y-2.5">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <span className="font-bold text-[#1E293B]">HÓA CHẤT TRANG ANH</span>
                    <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">SQL Đã Khóa Giá</span>
                  </div>

                  <div className="space-y-1 text-slate-600 text-[11px]">
                    <p>• <strong>Mã SP:</strong> PAC-30-VC (Vàng chanh)</p>
                    <p>• <strong>Số lượng:</strong> 200 bao x 25kg = 5.000 kg</p>
                    <p>• <strong>Đơn giá sỉ:</strong> 13.500 đ/kg (Đã trừ CK 8%)</p>
                    <p>• <strong>Thành tiền:</strong> 67.500.000 đ (+ VAT 8%)</p>
                    <p className="font-bold text-[#1E293B] pt-1 border-t border-slate-100">
                      Tổng thanh toán: 72.900.000 đ
                    </p>
                  </div>

                  {/* Attached PDF & VietQR preview */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200 p-2.5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-[#4F46E5]" />
                      <div>
                        <p className="font-bold text-[#1E293B] text-[11px]">BaoGia_PAC_5Tan_TanBinh.pdf</p>
                        <p className="text-[10px] text-slate-400">PDF Vector · Có sẵn VietQR</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-[#0D9488] font-bold">1-Chạm Gửi</span>
                  </div>
                </div>
              </div>

              {/* Human Approval Status */}
              <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-2.5 text-[11px] text-emerald-800 flex items-center justify-between">
                <div className="flex items-center gap-1.5 font-semibold">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>Giám đốc kinh doanh đã duyệt (+10s)</span>
                </div>
                <span className="font-mono text-[10px] text-emerald-700">OK ĐÃ KÝ SỐ</span>
              </div>

            </div>

            <div className="p-3.5 border-t border-slate-200 bg-white text-center">
              <p className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                M4 · ZALO COPILOT THỰC CHIẾN
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
