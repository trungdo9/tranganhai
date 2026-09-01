"use client";

import React, { useState } from "react";
import { 
  Database, Search, Bot, FileCheck2, BarChart3, 
  ArrowRight, ArrowDown, Check, Sparkles, QrCode, 
  Send, Layers, CheckCircle2, ShieldCheck, ArrowUpRight
} from "lucide-react";

export default function CoreValueSection() {
  const [activeNode, setActiveNode] = useState<number>(0);

  const nodes = [
    {
      id: 0,
      step: "01",
      name: "RAG Data Hub",
      badge: "GỐC RỄ TRI THỨC",
      summary: "Số hóa Excel gộp ô & TDS thành CSDL chuẩn xác 100%.",
      input: "File Excel gộp ô, PDF catalogue, TDS thông số kỹ thuật, hồ sơ CO/CQ.",
      engine: "Unmerge bảng tính, OCR tài liệu scan, chuyển đổi sang SQL Engine định giá.",
      output: "Kho tri thức số chuẩn xác 100%, khử sạch hoàn toàn lỗi ảo giác.",
      nextTarget: "Cấp dữ liệu chuẩn cho Node 2 (Content) & Node 3 (Chatbot)",
      mockupTag: "ZERO HALLUCINATION",
    },
    {
      id: 1,
      step: "02",
      name: "Flow Content & GEO",
      badge: "HIỆN DIỆN THU HÚT",
      summary: "Xuất bản 16–24 bài E-E-A-T/tháng, phủ sóng ChatGPT & Gemini.",
      input: "Dữ liệu kiểm định, bảng quy cách và tài liệu kỹ thuật từ Node 1.",
      engine: "Tạo nội dung chuyên gia, chèn Direct Answer và cấu trúc Schema Entity.",
      output: "16–24 bài độc bản/tháng, tự động phân luồng chăm sóc 1–3+ Web vệ tinh.",
      nextTarget: "Kéo khách hàng B2B truy cập Web & nhắn tin LiveChat tại Node 3",
      mockupTag: "AI SEARCH CITATION",
    },
    {
      id: 2,
      step: "03",
      name: "Tiếp Đón 24/7 & CRM",
      badge: "GIỮ CHÂN & PHÂN LOẠI",
      summary: "AI trực kênh 24/7 giải đáp kỹ thuật, tự động bắt Lead vào CRM.",
      input: "Khách từ AI Search & Web nhắn hỏi thông số, quy cách, tồn kho.",
      engine: "Chatbot RAG tra cứu Node 1, bắt số Zalo, chấm điểm Lead Scoring.",
      output: "Tự động đồng bộ Deal vào CRM (MISA AMIS, Brevo, Sheets) kèm lịch sử chat.",
      nextTarget: "Chuyển giao khách hàng nóng và trọn vẹn ngữ cảnh sang Node 4 cho Sales",
      mockupTag: "REAL-TIME CRM SYNC",
    },
    {
      id: 3,
      step: "04",
      name: "Sales & Báo Giá VietQR",
      badge: "CHỐT ĐƠN THẦN TỐC",
      summary: "Lập dự toán BOQ 2 phút & xuất báo giá PDF VietQR trong 8 giây.",
      input: "Yêu cầu bóc tách danh mục vật tư từ CRM hoặc khách gửi trực tiếp.",
      engine: "Deterministic SQL Pricing (khóa giá từ Node 1) + Typst PDF Engine.",
      output: "Bảng dự toán BOQ + File PDF báo giá chuẩn in ấn kèm mã VietQR thanh toán.",
      nextTarget: "Ghi nhận trạng thái gửi báo giá và doanh số chốt đơn lên Node 5",
      mockupTag: "8S HUMAN-IN-THE-LOOP",
    },
    {
      id: 4,
      step: "05",
      name: "Dashboard CEO",
      badge: "ĐIỀU HÀNH 1 TRANG",
      summary: "Báo cáo thời gian thực: Traffic → Lead CRM → Báo giá → Doanh số.",
      input: "Dữ liệu truy cập (Node 2), Deal CRM (Node 3), giá trị báo giá (Node 4).",
      engine: "Executive BI Engine tổng hợp doanh số, phát hiện điểm nghẽn dòng tiền.",
      output: "Báo Cáo Quản Trị 1 Trang trực quan trên mobile & máy tính cho Ban Giám Đốc.",
      nextTarget: "Phản hồi dữ liệu để Ban Lãnh Đạo tối ưu chính sách giá ngược lại Node 1",
      mockupTag: "REAL-TIME METRICS",
    },
  ];

  return (
    <section id="giai-phap" className="py-16 sm:py-24 bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Clean Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#4F46E5] bg-indigo-50 px-3.5 py-1 rounded-full border border-indigo-100">
            DÂY CHUYỀN VẬN HÀNH 5 NODE
          </span>
          <h2 className="mt-3.5 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E293B] tracking-tight">
            Từ Tri Thức Gốc Đến Doanh Thu Thực Tế
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-600 font-normal">
            Một dây chuyền khép kín, tự động hóa từ khâu làm sạch dữ liệu, thu hút khách hàng đến báo giá và báo cáo tài chính.
          </p>
        </div>

        {/* 1. INTERACTIVE 5-NODE FLOW PIPELINE (VISUAL STEPPER) */}
        <div className="mb-10 max-w-5xl mx-auto">
          <div className="rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-6 shadow-xs">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3">
              {nodes.map((n) => {
                const isActive = activeNode === n.id;
                return (
                  <button
                    key={n.id}
                    onClick={() => setActiveNode(n.id)}
                    className={`relative rounded-2xl p-3.5 text-left transition-all border cursor-pointer flex flex-col justify-between ${
                      isActive
                        ? "bg-[#1E293B] text-white border-[#1E293B] shadow-md scale-102"
                        : "bg-[#F8FAFC] text-slate-700 border-slate-200/80 hover:bg-slate-100/80 hover:border-slate-300"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                          isActive ? "bg-[#0D9488] text-white" : "bg-slate-200 text-slate-700"
                        }`}>
                          NODE {n.step}
                        </span>
                        <span className={`text-[10px] font-bold ${isActive ? "text-teal-400" : "text-slate-400"}`}>
                          {n.id < 4 ? "→" : "↺"}
                        </span>
                      </div>
                      <h4 className={`text-xs sm:text-sm font-bold ${isActive ? "text-white" : "text-[#1E293B]"}`}>
                        {n.name}
                      </h4>
                      <p className={`text-[11px] mt-1 line-clamp-1 font-medium ${isActive ? "text-slate-300" : "text-slate-500"}`}>
                        {n.badge}
                      </p>
                    </div>

                    {isActive && (
                      <div className="mt-3 pt-2 border-t border-slate-700 text-[10px] font-semibold text-teal-300 flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-teal-400 animate-pulse"></span>
                        <span>Đang xem</span>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 2. ACTIVE NODE DEEP-DIVE (CLEAN ARCHITECTURE & LIVE MOCKUP) */}
        <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-xs max-w-5xl mx-auto mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Clean 3-Tier Data Architecture */}
            <div className="lg:col-span-6 space-y-4 text-left">
              <div className="flex items-center gap-2">
                <span className="rounded-md bg-indigo-50 px-2.5 py-1 text-xs font-bold text-[#4F46E5] border border-indigo-100">
                  NODE {nodes[activeNode].step}: {nodes[activeNode].badge}
                </span>
                <span className="text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-semibold">
                  {nodes[activeNode].mockupTag}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#1E293B]">
                {nodes[activeNode].name}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 font-normal">
                {nodes[activeNode].summary}
              </p>

              {/* Clean Structured Box */}
              <div className="space-y-2.5 pt-2">
                <div className="rounded-xl bg-[#F8FAFC] p-3 border border-slate-200/80 text-xs flex items-start gap-3">
                  <span className="font-bold text-slate-500 shrink-0 w-20">Đầu vào:</span>
                  <span className="text-slate-700 font-medium">{nodes[activeNode].input}</span>
                </div>
                <div className="rounded-xl bg-indigo-50/50 p-3 border border-indigo-100 text-xs flex items-start gap-3">
                  <span className="font-bold text-[#4F46E5] shrink-0 w-20">Bộ máy:</span>
                  <span className="text-slate-800 font-medium">{nodes[activeNode].engine}</span>
                </div>
                <div className="rounded-xl bg-emerald-50/50 p-3 border border-emerald-100 text-xs flex items-start gap-3">
                  <span className="font-bold text-[#0D9488] shrink-0 w-20">Đầu ra:</span>
                  <span className="text-slate-800 font-semibold">{nodes[activeNode].output}</span>
                </div>
              </div>

              {/* Next Node Data Transfer Link */}
              <div className="pt-2 text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                <span className="text-[#0D9488]">🔗 Chuyển tiếp:</span>
                <span>{nodes[activeNode].nextTarget}</span>
              </div>
            </div>

            {/* Right Column: Visual UI Mockup (Graphic Focused) */}
            <div className="lg:col-span-6">
              
              {/* Node 1 Mockup: Clean Data DB */}
              {activeNode === 0 && (
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-xs text-left text-xs space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-200 font-bold text-slate-600">
                    <span className="flex items-center gap-1.5"><Database className="h-4 w-4 text-indigo-600" /> CƠ SỞ DỮ LIỆU ĐỊNH GIÁ XÁC ĐỊNH</span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-mono">100% SQL EXACT</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200">
                    <span className="text-[10px] font-bold text-rose-600 block uppercase">Dữ liệu thô ban đầu:</span>
                    <span className="text-slate-600 font-mono text-[11px] block mt-1">Bảng_Giá_2026.xlsx [Gộp 4 ô A1:D4, lỗi công thức #REF!]</span>
                  </div>
                  <div className="flex justify-center text-slate-400">
                    <ArrowDown className="h-4 w-4" />
                  </div>
                  <div className="bg-indigo-50/80 p-3 rounded-xl border border-indigo-100 font-mono text-[11px] text-indigo-950 space-y-1">
                    <div className="text-[10px] font-bold text-[#4F46E5] uppercase">Đã chuẩn hóa thành SQL:</div>
                    <div className="text-slate-800">ITEM_ID: TH-900 • IODINE: 900mg/g • QUY_CACH: 25kg/bao</div>
                    <div className="text-emerald-700 font-bold">GIA_SI: 24.000 đ/kg • GIA_LE: 28.500 đ/kg [LOCKED]</div>
                  </div>
                </div>
              )}

              {/* Node 2 Mockup: AI Search Result */}
              {activeNode === 1 && (
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-xs text-left text-xs space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-200 font-bold text-slate-600">
                    <span className="flex items-center gap-1.5"><Search className="h-4 w-4 text-[#4F46E5]" /> HIỆN DIỆN TRÊN AI SEARCH</span>
                    <span className="text-[10px] bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded font-mono">CHATGPT / GEMINI</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200">
                    <span className="text-[10px] text-slate-400 block font-bold uppercase">Người mua B2B hỏi AI:</span>
                    <p className="font-semibold text-slate-800 mt-1">&ldquo;Bảng thông số than gáo dừa Iodine 900 lọc nước cấp?&rdquo;</p>
                  </div>
                  <div className="bg-emerald-50/80 p-3 rounded-xl border border-emerald-100 text-emerald-950 space-y-1">
                    <span className="text-[10px] font-bold text-[#0D9488] uppercase block">AI trích dẫn website của bạn:</span>
                    <p className="text-slate-700 text-[11px] leading-relaxed">
                      &ldquo;Theo tài liệu kỹ thuật từ <strong>[Doanh Nghiệp Của Bạn]</strong>, than hoạt tính gáo dừa Iodine 900 đạt tiêu chuẩn Quatest 3, độ tro &lt; 3%...&rdquo;
                    </p>
                    <div className="text-[10px] text-teal-700 font-bold pt-1">🔗 Trích dẫn: website-doanhnghiep.vn/tds-than-gao-dua</div>
                  </div>
                </div>
              )}

              {/* Node 3 Mockup: Chatbot & CRM Deal */}
              {activeNode === 2 && (
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-xs text-left text-xs space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-200 font-bold text-slate-600">
                    <span className="flex items-center gap-1.5"><Bot className="h-4 w-4 text-[#4F46E5]" /> CHATBOT 24/7 & CRM SYNC</span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-mono">SYNC 2S</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-2">
                    <div className="bg-slate-100 p-2 rounded-lg text-slate-800 text-[11px]">
                      <strong>Khách:</strong> Có sẵn 5 tấn than gáo dừa Iodine 900 giao về KCN Tân Bình không?
                    </div>
                    <div className="bg-indigo-50 p-2 rounded-lg text-indigo-950 font-medium text-[11px]">
                      <strong>AI Bot:</strong> Dạ sẵn hàng trong kho. Em xin số Zalo để chuyển bảng báo giá chi tiết cho anh ạ!
                    </div>
                  </div>
                  <div className="bg-emerald-50/80 p-2.5 rounded-xl border border-emerald-100 text-[11px] text-emerald-950 flex items-center justify-between font-bold">
                    <span>✓ Tự động tạo Deal MISA AMIS: [5 Tấn Than - Anh Tuấn]</span>
                    <span className="text-[10px] bg-[#0D9488] text-white px-2 py-0.5 rounded">LEAD NÓNG</span>
                  </div>
                </div>
              )}

              {/* Node 4 Mockup: Fast Quote PDF & VietQR */}
              {activeNode === 3 && (
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-xs text-left text-xs space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-200 font-bold text-slate-600">
                    <span className="flex items-center gap-1.5"><FileCheck2 className="h-4 w-4 text-[#0D9488]" /> BÁO GIÁ VECTOR & MÃ VIETQR</span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-mono">XONG TRONG 8S</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase block">Đơn Báo Giá: #TA-2026-084</span>
                      <span className="font-bold text-slate-800 text-sm">120.000.000 VNĐ</span>
                      <span className="text-[10px] text-slate-500 block">5.000 kg Than Iodine 900 bao 25kg</span>
                    </div>
                    <div className="h-12 w-12 rounded-lg bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-700">
                      <QrCode className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="bg-emerald-50/80 p-2.5 rounded-xl border border-emerald-100 text-[11px] text-emerald-950 flex items-center justify-between font-semibold">
                    <span>Nhân viên kiểm tra 10 giây & bấm gửi</span>
                    <span className="text-[10px] bg-[#0D9488] text-white px-2 py-0.5 rounded">HUMAN APPROVE</span>
                  </div>
                </div>
              )}

              {/* Node 5 Mockup: Executive Dashboard */}
              {activeNode === 4 && (
                <div className="rounded-2xl border border-slate-700 bg-[#1E293B] text-white p-5 shadow-xs text-left text-xs space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-700 font-bold">
                    <span className="flex items-center gap-1.5"><BarChart3 className="h-4 w-4 text-emerald-400" /> EXECUTIVE BI DASHBOARD</span>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono">LIVE MOBILE</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-left">
                    <div className="bg-slate-800 p-2.5 rounded-xl border border-slate-700">
                      <span className="text-[10px] text-slate-400 block font-semibold">LEAD TỪ AI SEARCH</span>
                      <span className="text-base font-extrabold text-emerald-400 font-mono">+185 Khách</span>
                    </div>
                    <div className="bg-slate-800 p-2.5 rounded-xl border border-slate-700">
                      <span className="text-[10px] text-slate-400 block font-semibold">TỶ LỆ CHỐT ĐƠN</span>
                      <span className="text-base font-extrabold text-white font-mono">72%</span>
                    </div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 text-[11px]">
                    💡 <strong>Cảnh báo CEO:</strong> Nhu cầu than Iodine 900 tăng 40%; đề xuất cập nhật thêm bảng giá ưu đãi.
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>

        {/* 3. REAL-WORLD WORKFLOW CANVAS: HÀNH TRÌNH 1 ĐƠN HÀNG B2B 120 TRIỆU */}
        <div className="max-w-5xl mx-auto text-left">
          <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold text-[#0D9488] uppercase tracking-wider">
                  QUY TRÌNH THỰC TẾ
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#1E293B] mt-1">
                  Mô Phỏng Dòng Chảy 1 Đơn Hàng B2B Trị Giá 120 Triệu
                </h3>
              </div>
              <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full w-fit">
                ⚡ Hoàn tất trong 10 phút
              </span>
            </div>

            {/* Visual Process Flow (5 Connected Cards) */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-3">
              
              {/* Step 1 */}
              <div className="rounded-2xl bg-slate-50 p-3.5 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="font-mono text-[10px] font-bold text-slate-400">08:30</span>
                    <span className="text-[9px] font-bold bg-indigo-50 text-[#4F46E5] px-1.5 py-0.5 rounded">NODE 1</span>
                  </div>
                  <h5 className="font-bold text-slate-800 text-xs">Tri Thức Gốc</h5>
                  <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                    Nạp bảng giá & chứng thư Quatest. Khóa giá xác định.
                  </p>
                </div>
                <div className="mt-2 text-[10px] font-semibold text-indigo-600">✓ Khử sạch ảo giác</div>
              </div>

              {/* Step 2 */}
              <div className="rounded-2xl bg-indigo-50/40 p-3.5 border border-indigo-100 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="font-mono text-[10px] font-bold text-[#4F46E5]">10:15</span>
                    <span className="text-[9px] font-bold bg-indigo-100 text-[#4F46E5] px-1.5 py-0.5 rounded">NODE 2</span>
                  </div>
                  <h5 className="font-bold text-slate-800 text-xs">AI Search</h5>
                  <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                    Khách hỏi ChatGPT thông số kỹ thuật → AI trích dẫn bài web.
                  </p>
                </div>
                <div className="mt-2 text-[10px] font-semibold text-[#4F46E5]">✓ Thu hút tự nhiên</div>
              </div>

              {/* Step 3 */}
              <div className="rounded-2xl bg-teal-50/40 p-3.5 border border-teal-100 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="font-mono text-[10px] font-bold text-[#0D9488]">10:18</span>
                    <span className="text-[9px] font-bold bg-teal-100 text-[#0D9488] px-1.5 py-0.5 rounded">NODE 3</span>
                  </div>
                  <h5 className="font-bold text-slate-800 text-xs">Tiếp Đón & CRM</h5>
                  <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                    Chatbot tư vấn 3s, xin SĐT và tự tạo Deal trên CRM.
                  </p>
                </div>
                <div className="mt-2 text-[10px] font-semibold text-teal-700">✓ Không sót Lead</div>
              </div>

              {/* Step 4 */}
              <div className="rounded-2xl bg-emerald-50/40 p-3.5 border border-emerald-100 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="font-mono text-[10px] font-bold text-emerald-700">10:25</span>
                    <span className="text-[9px] font-bold bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded">NODE 4</span>
                  </div>
                  <h5 className="font-bold text-slate-800 text-xs">Báo Giá VietQR</h5>
                  <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                    Xuất PDF báo giá 120 triệu có mã QR; sales duyệt 10s.
                  </p>
                </div>
                <div className="mt-2 text-[10px] font-semibold text-emerald-700">✓ 8 Giây xong</div>
              </div>

              {/* Step 5 */}
              <div className="rounded-2xl bg-slate-900 text-white p-3.5 border border-slate-700 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="font-mono text-[10px] font-bold text-emerald-400">14:30</span>
                    <span className="text-[9px] font-bold bg-slate-800 text-emerald-400 px-1.5 py-0.5 rounded">NODE 5</span>
                  </div>
                  <h5 className="font-bold text-white text-xs">Doanh Thu & CEO</h5>
                  <p className="text-[11px] text-slate-300 mt-1 leading-snug">
                    Khách quét VietQR chuyển cọc; Dashboard CEO nhảy số.
                  </p>
                </div>
                <div className="mt-2 text-[10px] font-semibold text-emerald-400">+120 Triệu về két</div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
