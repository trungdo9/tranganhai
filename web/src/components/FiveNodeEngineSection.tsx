"use client";

import React, { useState } from "react";
import {
  Database,
  Search,
  Bot,
  FileCheck2,
  BarChart3,
  RotateCcw,
  CheckCircle2,
  ArrowDown,
  Layers,
} from "lucide-react";

interface NodeItem {
  code: string;
  name: string;
  role: string;
  modules: string[];
  summary: string;
  items: string[];
  cols: [string, string][];
  icon: React.ElementType;
}

export default function FiveNodeEngineSection() {
  const [layout, setLayout] = useState<"flow" | "stack">("flow");
  const [activeNodeIdx, setActiveNodeIdx] = useState(0);

  const nodes: NodeItem[] = [
    {
      code: "N1",
      name: "Master RAG Lake",
      role: "Gốc rễ tri thức",
      modules: ["Core"],
      summary: "Bộ não tri thức số của doanh nghiệp — sạch, có cấu trúc, không ảo giác.",
      items: [
        "Số hóa Excel gộp ô, TDS, catalogue",
        "Khử ảo giác bằng Deterministic SQL",
        "Cấp tri thức cho toàn bộ cỗ máy",
      ],
      cols: [
        ["Dữ liệu vào", "Bảng giá Excel gộp ô, TDS, catalogue, tiêu chuẩn ASTM / QCVN"],
        ["Bộ máy xử lý", "OCR multimodal, gỡ gộp ô, vector hóa kép, Deterministic SQL"],
        ["Kết quả bàn giao", "Kho tri thức có kiểm chứng — giá lấy từ CSDL gốc, không để AI tính nhẩm"],
      ],
      icon: Database,
    },
    {
      code: "N2",
      name: "Flow Content & GEO",
      role: "Kênh thu hút",
      modules: ["M1", "M2"],
      summary: "Hiện diện ngay trong câu trả lời của ChatGPT, Gemini và Perplexity.",
      items: [
        "16 – 24 bài E-E-A-T mỗi tháng",
        "Phủ sóng ChatGPT / Gemini / Perplexity",
        "Chăm sóc 1 – 3+ web vệ tinh",
      ],
      cols: [
        ["Dữ liệu vào", "Tri thức kỹ thuật từ Node 1 và từ khóa ngành"],
        ["Bộ máy xử lý", "16 – 24 bài E-E-A-T mỗi tháng, phân luồng đa site độc bản"],
        ["Kết quả bàn giao", "Khách B2B chất lượng cao vào hệ sinh thái website"],
      ],
      icon: Search,
    },
    {
      code: "N3",
      name: "Tiếp đón 24/7 & CRM",
      role: "Bộ lọc & giữ chân",
      modules: ["M3", "M5"],
      summary: "Không bỏ lỡ khách hỏi lúc nửa đêm hay cuối tuần.",
      items: [
        "Chatbot tư vấn kỹ thuật 24/7",
        "Thu SĐT/Zalo, chấm điểm Lead",
        "Đồng bộ Deal vào MISA AMIS, Brevo",
      ],
      cols: [
        ["Dữ liệu vào", "Khách truy cập Website, Fanpage, Zalo OA 24/7"],
        ["Bộ máy xử lý", "Bot trả lời thông số từ Node 1, chấm điểm và gắn tag Lead"],
        ["Kết quả bàn giao", "Deal tự động vào MISA AMIS / Brevo kèm lịch sử trò chuyện"],
      ],
      icon: Bot,
    },
    {
      code: "N4",
      name: "Sales & Báo giá nhanh",
      role: "Cỗ máy chốt đơn",
      modules: ["M4", "M6", "M7"],
      summary: "Chu kỳ báo giá rút từ vài ngày xuống vài phút.",
      items: [
        "Dự toán BOQ vật tư trong 2 phút",
        "PDF Typst + VietQR trong 8 giây",
        "Nhân viên duyệt 10 giây rồi gửi",
      ],
      cols: [
        ["Dữ liệu vào", "Lead từ Node 3 kèm ngữ cảnh, danh mục vật tư của dự án"],
        ["Bộ máy xử lý", "Bóc tách quy cách, dự toán BOQ 2 phút, PDF Typst + VietQR 8 giây"],
        ["Kết quả bàn giao", "Báo giá gửi đi sau 10 giây kiểm tra của nhân viên"],
      ],
      icon: FileCheck2,
    },
    {
      code: "N5",
      name: "Executive BI Dashboard",
      role: "Kiểm soát & tối ưu",
      modules: ["M0"],
      summary: "Ban Giám Đốc nhìn toàn cảnh kinh doanh trên một trang.",
      items: [
        "Báo cáo 1 trang thời gian thực",
        "Traffic → Lead → Báo giá → Doanh thu",
        "Tối ưu ngược chính sách giá Node 1",
      ],
      cols: [
        ["Dữ liệu vào", "Số liệu thực tế từ bốn node phía trước"],
        ["Bộ máy xử lý", "Phát hiện điểm nghẽn, mô phỏng kịch bản What-If"],
        ["Kết quả bàn giao", "Báo cáo 1 trang realtime, phản hồi ngược tối ưu giá tại Node 1"],
      ],
      icon: BarChart3,
    },
  ];

  const links = [
    "Node 1 → Node 2 · cấp tri thức sạch để viết bài chuyên môn",
    "Node 2 → Node 3 · kéo khách tiềm năng vào kênh tiếp đón",
    "Node 3 → Node 4 · chuyển Lead kèm toàn bộ ngữ cảnh trò chuyện",
    "Node 4 → Node 5 · ghi nhận kết quả chốt đơn vào báo cáo",
    "Node 5 → Node 1 · vòng lặp khép kín, tối ưu ngược chính sách giá & danh mục",
  ];

  const activeNode = nodes[activeNodeIdx];

  return (
    <section id="day-chuyen" className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-8 lg:px-10 text-center">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs font-bold uppercase tracking-[0.11em] text-indigo-600 bg-indigo-50 px-3.5 py-1 rounded-full border border-indigo-100">
            DÂY CHUYỀN VẬN HÀNH KHÉP KÍN
          </span>
          <h2 className="mt-3.5 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Tự Động Hóa Quy Trình Bán Hàng Bằng Dây Chuyền 5 Node
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Một cỗ máy duy nhất, năm mắt xích khép kín — dữ liệu sạch nuôi nội dung, nội dung nuôi lead, lead nuôi báo giá, báo giá nuôi báo cáo.
          </p>
        </div>

        {/* Layout Switcher Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex gap-1 p-1 bg-slate-200/80 rounded-full border border-slate-300/70 text-xs sm:text-sm font-semibold shadow-xs">
            <button
              type="button"
              onClick={() => setLayout("flow")}
              className={`px-4 py-2 rounded-full transition-all cursor-pointer ${
                layout === "flow"
                  ? "bg-white text-indigo-700 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Bố cục A · Luồng ngang 5 node
            </button>
            <button
              type="button"
              onClick={() => setLayout("stack")}
              className={`px-4 py-2 rounded-full transition-all cursor-pointer ${
                layout === "stack"
                  ? "bg-white text-indigo-700 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Bố cục B · Thẻ node xếp chồng
            </button>
          </div>
        </div>

        {/* LAYOUT A: INTERACTIVE 5-NODE FLOW */}
        {layout === "flow" && (
          <div className="space-y-6">
            {/* 5 Nodes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 text-left">
              {nodes.map((node, idx) => {
                const isSelected = idx === activeNodeIdx;
                const Icon = node.icon;
                return (
                  <button
                    key={node.code}
                    type="button"
                    onClick={() => setActiveNodeIdx(idx)}
                    className={`rounded-2xl border p-4 sm:p-5 flex flex-col justify-between text-left transition-all cursor-pointer relative overflow-hidden ${
                      isSelected
                        ? "bg-white border-indigo-600 shadow-md ring-2 ring-indigo-500/20"
                        : "bg-white/80 border-slate-200 hover:border-indigo-200 hover:bg-white shadow-xs"
                    }`}
                  >
                    {/* Top Accent Line for Selected */}
                    {isSelected && (
                      <span className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-indigo-600 to-teal-500" />
                    )}

                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                            isSelected
                              ? "bg-indigo-600 text-white"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {node.code}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          {node.role}
                        </span>
                      </div>

                      <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-1.5 mb-2">
                        <Icon className={`h-4 w-4 ${isSelected ? "text-indigo-600" : "text-slate-500"}`} />
                        <span>{node.name}</span>
                      </h3>

                      <ul className="space-y-1.5 text-xs text-slate-600 mb-4 font-normal">
                        {node.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-1.5">
                            <span className="text-indigo-500 mt-0.5">•</span>
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold">
                      <span className={isSelected ? "text-indigo-600" : "text-slate-400"}>
                        {isSelected ? "Đang chọn xem" : "Bấm để xem"}
                      </span>
                      <span className="font-mono text-[10px] text-slate-400">
                        {node.modules.join(", ")}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Pipeline Connection Graphic */}
            <div className="relative py-4 hidden lg:block">
              {/* Main connecting track */}
              <div className="h-0.5 w-[84%] mx-auto bg-gradient-to-r from-indigo-500 via-teal-500 to-indigo-500 rounded-full" />
              
              {/* Micro-flow labels */}
              <div className="grid grid-cols-4 w-[84%] mx-auto mt-2 text-[10.5px] font-semibold text-slate-600">
                <span className="text-left">Nuôi nội dung chuyên môn</span>
                <span className="text-center">Kéo khách tiềm năng</span>
                <span className="text-center">Chuyển Lead &amp; ngữ cảnh</span>
                <span className="text-right text-[#0D9488]">Ghi nhận kết quả chốt đơn</span>
              </div>

              {/* Loopback Arrow */}
              <div className="mt-3 flex justify-center">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-xs font-semibold text-[#0D9488]">
                  <RotateCcw className="h-3.5 w-3.5" />
                  Vòng lặp khép kín — Node 5 tối ưu ngược chính sách giá &amp; danh mục tại Node 1
                </span>
              </div>
            </div>

            {/* Selected Node Details Inspector Card */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 text-left shadow-xs">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-indigo-50 text-indigo-700 border border-indigo-100">
                    {activeNode.code}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900">
                    Chi Tiết Vận Hành: {activeNode.name}
                  </h4>
                </div>
                <span className="text-xs font-semibold text-slate-500">
                  Vai trò: <strong className="text-slate-800">{activeNode.role}</strong>
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    DỮ LIỆU VÀO (INPUT)
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    {activeNode.cols[0][1]}
                  </p>
                </div>
                <div className="space-y-1.5 md:border-l border-slate-200/80 md:pl-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    BỘ MÁY XỬ LÝ (ENGINE)
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    {activeNode.cols[1][1]}
                  </p>
                </div>
                <div className="space-y-1.5 md:border-l border-slate-200/80 md:pl-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700">
                    KẾT QUẢ BÀN GIAO (OUTPUT)
                  </span>
                  <p className="text-xs sm:text-sm text-slate-900 leading-relaxed font-medium">
                    {activeNode.cols[2][1]}
                  </p>
                </div>
              </div>
            </div>
            
            <p className="text-center text-xs text-slate-400">
              Nhấp vào từng node phía trên để xem chi tiết dữ liệu vào, bộ máy xử lý và kết quả bàn giao.
            </p>
          </div>
        )}

        {/* LAYOUT B: STACK OF 5 FULL-WIDTH NODES */}
        {layout === "stack" && (
          <div className="space-y-4 text-left">
            {nodes.map((n, idx) => (
              <React.Fragment key={n.code}>
                <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                    
                    {/* Left Meta Info */}
                    <div className="lg:col-span-4 space-y-2.5">
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-sm font-bold h-8 w-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
                          {n.code}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          {n.role}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 leading-snug">
                        {n.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {n.summary}
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {n.modules.map((m) => (
                          <span
                            key={m}
                            className="font-mono text-[10px] font-semibold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-100"
                          >
                            Module {m}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right 3 Cols: Input, Engine, Output */}
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-5 lg:border-l border-slate-200/80 lg:pl-8">
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          Dữ liệu vào
                        </span>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {n.cols[0][1]}
                        </p>
                      </div>
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          Bộ máy xử lý
                        </span>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {n.cols[1][1]}
                        </p>
                      </div>
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700">
                          Kết quả bàn giao
                        </span>
                        <p className="text-xs sm:text-sm text-slate-900 font-medium leading-relaxed">
                          {n.cols[2][1]}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Connecting Arrow */}
                {idx < nodes.length - 1 && (
                  <div className="flex items-center gap-3 px-6 text-xs text-indigo-600 font-semibold">
                    <ArrowDown className="h-4 w-4 shrink-0 text-indigo-500" />
                    <span>{links[idx]}</span>
                    <span className="h-px flex-1 bg-gradient-to-r from-indigo-200 to-transparent" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
