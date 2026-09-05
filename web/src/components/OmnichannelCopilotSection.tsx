"use client";

import React, { useState } from "react";
import {
  Globe,
  Mail,
  MessageCircle,
  Database,
  Calculator,
  QrCode,
  Send,
  FileCheck2,
  CheckCircle2,
  FileText,
  ShieldCheck,
  Building2,
  ArrowRight,
  Clock,
  Sparkles,
} from "lucide-react";

export default function OmnichannelCopilotSection() {
  const [activeChannel, setActiveChannel] = useState<"web" | "email" | "zalo">("web");

  const speedTrace = [
    {
      time: "00:00",
      icon: Send,
      label: "Khách hoặc Sales gửi yêu cầu qua kênh tùy chọn",
      note: "Tiếp nhận đồng thời qua Website LiveChat, Email dự án hoặc tin nhắn Zalo.",
      bg: "bg-indigo-50",
      fg: "text-[#4F46E5]",
      border: "border-indigo-100",
    },
    {
      time: "00:01",
      icon: Database,
      label: "AI tra cứu kho dữ liệu gốc & quy cách",
      note: "Đối chiếu mã hàng, quy cách đóng bao, tiêu chuẩn Quatest và bảng giá gốc.",
      bg: "bg-indigo-50",
      fg: "text-[#4F46E5]",
      border: "border-indigo-100",
    },
    {
      time: "00:03",
      icon: Calculator,
      label: "Thuật toán khóa giá tự tính đơn giá, chiết khấu & VAT",
      note: "Cấm AI tính nhẩm: Mọi con số đều khóa chặt vào ma trận bảng tính của doanh nghiệp.",
      bg: "bg-indigo-50",
      fg: "text-[#4F46E5]",
      border: "border-indigo-100",
    },
    {
      time: "00:06",
      icon: QrCode,
      label: "Sinh file PDF báo giá vector chuẩn in ấn kèm mã VietQR",
      note: "Đúng nhận diện thương hiệu, có đầy đủ điều khoản giao nhận và hạn bảo lưu giá.",
      bg: "bg-teal-50",
      fg: "text-[#0D9488]",
      border: "border-teal-100",
    },
    {
      time: "00:08",
      icon: Sparkles,
      label: "Báo giá nằm trong tay khách hàng",
      note: "Khách nhận phản hồi chuyên nghiệp ngay lập tức trên đúng kênh họ vừa gửi.",
      bg: "bg-teal-50",
      fg: "text-[#0D9488]",
      border: "border-teal-100",
    },
    {
      time: "+10 giây",
      icon: FileCheck2,
      label: "Nhân sự hoặc Ban Giám Đốc bấm duyệt trên điện thoại",
      note: "Cơ chế Human-in-the-loop: Kiểm soát 100% rủi ro, chỉ phát hành sau khi có con người duyệt.",
      bg: "bg-amber-50",
      fg: "text-amber-700",
      border: "border-amber-100",
    },
  ];

  return (
    <section id="demo" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-8 lg:px-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.11em] text-teal-700 bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200/80">
            MÔ PHỎNG VẬN HÀNH ĐA KÊNH · TỰ CHỦ HẠ TẦNG
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Một Bộ Não Trung Tâm. Tiếp Đón &amp; Báo Giá Đa Kênh Trong 8 Giây.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Dù đối tác của bạn gửi yêu cầu qua <strong>Website LiveChat</strong>, <strong>Email dự án</strong> hay <strong>Zalo</strong> — cỗ máy AI trên hạ tầng chính chủ đều bóc tách dữ liệu gốc, tính đúng đơn giá và xuất báo giá PDF kèm VietQR tức thì.
          </p>
        </div>

        {/* 2-Column Grid: Timeline Trace vs Interactive Omnichannel Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 6 Time Trace Cards */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                QUY TRÌNH XỬ LÝ 8 GIÂY KHÉP KÍN
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700">
                <Clock className="h-3.5 w-3.5" />
                Đo thực tế trên hệ thống
              </span>
            </div>

            {speedTrace.map((t, idx) => {
              const Icon = t.icon;
              return (
                <div
                  key={idx}
                  className="grid grid-cols-[68px_38px_1fr] sm:grid-cols-[84px_42px_1fr] gap-3 sm:gap-4 items-center p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 shadow-xs hover:border-indigo-300 transition-colors text-left"
                >
                  {/* Timestamp */}
                  <span className="font-mono text-xs sm:text-sm font-bold text-indigo-600">
                    {t.time}
                  </span>

                  {/* Icon Box */}
                  <span className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${t.bg} border ${t.border} flex items-center justify-center shrink-0`}>
                    <Icon className={`h-4 w-4 sm:h-5 sm:w-5 ${t.fg}`} />
                  </span>

                  {/* Label & Note */}
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                      {t.label}
                    </p>
                    <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-relaxed font-normal">
                      {t.note}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Omnichannel Simulation Box */}
          <div className="lg:col-span-5 rounded-3xl border border-slate-200/90 bg-white overflow-hidden shadow-xl text-left">
            
            {/* Channel Tabs Bar */}
            <div className="bg-[#1E293B] p-3 text-white">
              <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-700/80">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-xs font-bold tracking-tight">
                    BỘ NÃO XỬ LÝ TRUNG TÂM
                  </span>
                </div>
                <span className="text-[10px] font-mono text-teal-300 bg-teal-950/60 px-2 py-0.5 rounded border border-teal-500/30">
                  Hạ tầng chính chủ
                </span>
              </div>

              {/* 3 Interactive Channel Buttons */}
              <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-900/60 rounded-xl border border-slate-700/60 text-xs font-medium">
                <button
                  type="button"
                  onClick={() => setActiveChannel("web")}
                  className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg transition-all cursor-pointer ${
                    activeChannel === "web"
                      ? "bg-[#0D9488] text-white shadow-xs font-semibold"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  <Globe className="h-3.5 w-3.5" />
                  <span className="truncate">Website Live</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveChannel("email")}
                  className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg transition-all cursor-pointer ${
                    activeChannel === "email"
                      ? "bg-[#0D9488] text-white shadow-xs font-semibold"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span className="truncate">Email RFQ</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveChannel("zalo")}
                  className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg transition-all cursor-pointer ${
                    activeChannel === "zalo"
                      ? "bg-[#0D9488] text-white shadow-xs font-semibold"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  <span className="truncate">Zalo Chat</span>
                </button>
              </div>
            </div>

            {/* CHANNEL CONTENT 1: WEBSITE LIVECHAT & PORTAL */}
            {activeChannel === "web" && (
              <div className="p-4 sm:p-5 space-y-3.5 bg-[#F8FAFC]">
                <div className="flex items-center justify-between text-[11px] text-slate-500 pb-2 border-b border-slate-200">
                  <span className="font-semibold text-slate-700">Cổng tiếp đón Web Portal 24/7</span>
                  <span className="font-mono text-teal-600 font-bold">Khách vãng lai B2B</span>
                </div>

                {/* Visitor Message */}
                <div className="flex justify-end">
                  <div className="bg-[#0D9488] text-white p-3 rounded-2xl rounded-tr-xs max-w-[90%] text-xs shadow-xs">
                    <p className="font-medium leading-relaxed">
                      Chào công ty, tôi bên BQL cấp nước Long An. Bên bạn có sẵn 5 tấn PAC 30% vàng chanh không? Cho tôi xin bảng test Quatest và báo giá gấp về KCN Thuận Đạo.
                    </p>
                    <span className="block text-[10px] text-teal-100 text-right mt-1 font-mono">14:02</span>
                  </div>
                </div>

                {/* AI Assistant Instant Reply */}
                <div className="flex items-start gap-2">
                  <div className="h-7 w-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    AI
                  </div>
                  <div className="bg-white border border-slate-200 p-3.5 rounded-2xl rounded-tl-xs max-w-[92%] shadow-xs space-y-2 text-xs">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                      <span className="font-bold text-slate-900 text-[11.5px]">Trợ Lý Kỹ Thuật Trang Anh</span>
                      <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                        Đã Khóa Giá CSDL
                      </span>
                    </div>

                    <p className="text-slate-600 leading-relaxed text-[11px]">
                      Dạ chào Quý công ty! Hàng <strong>PAC 30% vàng chanh (Xuất xứ VN)</strong> đang có sẵn kho Long An. Đạt chuẩn <strong>QCVN 01-1:2018/BYT</strong> và hồ sơ Quatest 3 mới nhất:
                    </p>

                    <div className="bg-slate-50 p-2 rounded-lg border border-slate-200 text-[10.5px] space-y-1 text-slate-700 font-mono">
                      <p>• Quy cách: 200 bao x 25kg = 5.000 kg</p>
                      <p>• Đơn giá sỉ: 13.500 đ/kg (Đã trừ CK 8%)</p>
                      <p className="font-bold text-slate-900 pt-0.5 border-t border-slate-200">
                        • Tổng thanh toán: 72.900.000 đ (gồm VAT 8%)
                      </p>
                    </div>

                    {/* Attached Quotation & VietQR */}
                    <div className="rounded-xl bg-indigo-50/70 border border-indigo-100 p-2.5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-indigo-600 shrink-0" />
                        <div>
                          <p className="font-bold text-slate-900 text-[11px] truncate max-w-[170px]">
                            BaoGia_PAC_LongAn.pdf
                          </p>
                          <p className="text-[10px] text-slate-500">Kèm Quatest &amp; VietQR đặt cọc</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-indigo-600 bg-white px-2 py-1 rounded border border-indigo-200">
                        Tải PDF
                      </span>
                    </div>
                  </div>
                </div>

                {/* Human Approved Verification */}
                <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-2.5 text-[11px] text-emerald-800 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 font-semibold">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>Trưởng phòng kinh doanh đã duyệt (+10s)</span>
                  </div>
                  <span className="font-mono text-[10px] font-bold text-emerald-700">ĐÃ GHI CRM</span>
                </div>
              </div>
            )}

            {/* CHANNEL CONTENT 2: B2B EMAIL RFQ */}
            {activeChannel === "email" && (
              <div className="p-4 sm:p-5 space-y-3 bg-[#F8FAFC]">
                <div className="flex items-center justify-between text-[11px] text-slate-500 pb-2 border-b border-slate-200">
                  <span className="font-semibold text-slate-700">Hộp thư Procurement / Dự án B2B</span>
                  <span className="font-mono text-indigo-600 font-bold">Mail Server Riêng</span>
                </div>

                {/* Incoming Email Card */}
                <div className="rounded-xl bg-white border border-slate-200 p-3 space-y-1.5 text-xs shadow-xs">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold text-slate-800">Từ: procurement@duan-tanbinh.vn</p>
                      <p className="text-[11px] text-slate-500 font-mono">Tiêu đề: [RFQ-2026] Yêu cầu chào giá 5 tấn PAC 30%</p>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">09:15 AM</span>
                  </div>
                  <p className="text-slate-600 text-[11px] leading-relaxed pt-1 border-t border-slate-100">
                    &quot;Kính gửi Quý công ty, đề nghị gửi bản chào giá chính thức kèm chứng chỉ chất lượng cho lô vật tư PAC 30% giao về KCN Tân Bình trong tuần này...&quot;
                  </p>
                </div>

                {/* AI Draft & Auto Action */}
                <div className="rounded-xl bg-white border border-slate-200 p-3.5 space-y-2 text-xs shadow-xs">
                  <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
                    <span className="font-bold text-teal-800 flex items-center gap-1">
                      <Sparkles className="h-3.5 w-3.5 text-teal-600" />
                      AI Đã Soạn Thảo Bản Nháp Phản Hồi
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                      Sau 00:08s
                    </span>
                  </div>

                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    AI đã đọc file đính kèm, đối chiếu tồn kho và chuẩn bị sẵn email phản hồi trang trọng: Thư chào giá + File PDF đính kèm đúng mã số thuế &amp; VietQR doanh nghiệp.
                  </p>

                  <div className="rounded-lg bg-slate-50 border border-slate-200 p-2 flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-rose-600" />
                      <span className="font-medium text-slate-800">HoSoChaoGia_PAC_TanBinh.pdf</span>
                    </div>
                    <span className="text-[10px] font-mono text-teal-700 font-bold">Vector 8 Trang</span>
                  </div>
                </div>

                {/* Human Approval Status */}
                <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-2.5 text-[11px] text-emerald-800 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 font-semibold">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>Giám đốc kinh doanh duyệt &amp; ký số (+10s)</span>
                  </div>
                  <span className="font-mono text-[10px] font-bold text-emerald-700">ĐÃ GỬI MAIL</span>
                </div>
              </div>
            )}

            {/* CHANNEL CONTENT 3: ZALO & MESSAGING */}
            {activeChannel === "zalo" && (
              <div className="p-4 sm:p-5 space-y-3.5 bg-[#F8FAFC]">
                <div className="flex items-center justify-between text-[11px] text-slate-500 pb-2 border-b border-slate-200">
                  <span className="font-semibold text-slate-700">Zalo OA &amp; Kênh Nhắn Tin Tức Thì</span>
                  <span className="font-mono text-blue-600 font-bold">Đồng bộ Zalo Official</span>
                </div>

                {/* Sales/Customer Input */}
                <div className="flex justify-end">
                  <div className="bg-[#0068FF] text-white p-3 rounded-2xl rounded-tr-xs max-w-[85%] text-xs shadow-xs">
                    <p className="font-medium leading-relaxed">
                      Báo giá 5 tấn PAC 30% vàng chanh, giao KCN Tân Bình chiều nay nhé
                    </p>
                    <span className="block text-[10px] text-blue-100 text-right mt-1 font-mono">10:15</span>
                  </div>
                </div>

                {/* AI Assistant Output */}
                <div className="flex items-start gap-2">
                  <div className="h-7 w-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    AI
                  </div>
                  <div className="bg-white border border-slate-200 p-3.5 rounded-2xl rounded-tl-xs max-w-[90%] shadow-xs space-y-2 text-xs">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                      <span className="font-bold text-slate-900 text-[11.5px]">HÓA CHẤT TRANG ANH</span>
                      <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                        SQL Khóa Giá
                      </span>
                    </div>

                    <div className="space-y-1 text-slate-600 text-[11px]">
                      <p>• <strong>Mã SP:</strong> PAC-30-VC (Vàng chanh xuất xứ VN)</p>
                      <p>• <strong>Số lượng:</strong> 200 bao x 25kg = 5.000 kg</p>
                      <p>• <strong>Đơn giá sỉ:</strong> 13.500 đ/kg (Đã trừ CK 8%)</p>
                      <p className="font-bold text-slate-900 pt-1 border-t border-slate-100">
                        Tổng thanh toán: 72.900.000 đ (gồm VAT 8%)
                      </p>
                    </div>

                    {/* Attached PDF & VietQR */}
                    <div className="rounded-xl bg-slate-50 border border-slate-200 p-2.5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-indigo-600 shrink-0" />
                        <div>
                          <p className="font-bold text-slate-900 text-[11px] truncate max-w-[160px]">
                            BaoGia_PAC_5Tan.pdf
                          </p>
                          <p className="text-[10px] text-slate-400">PDF Vector · Có sẵn VietQR</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-[#0D9488] font-bold">1-Chạm Gửi</span>
                    </div>
                  </div>
                </div>

                {/* Human Approved Verification */}
                <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-2.5 text-[11px] text-emerald-800 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 font-semibold">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>Giám đốc kinh doanh đã duyệt (+10s)</span>
                  </div>
                  <span className="font-mono text-[10px] font-bold text-emerald-700">OK ĐÃ KÝ SỐ</span>
                </div>
              </div>
            )}

            {/* Bottom Proof Assurance Bar */}
            <div className="p-3 border-t border-slate-200 bg-white flex items-center justify-between text-xs text-slate-600">
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <ShieldCheck className="h-4 w-4 text-teal-600" />
                <span>Không phụ thuộc nền tảng bên thứ ba</span>
              </span>
              <span className="font-mono text-[11px] text-slate-400">No Vendor Lock-in</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
