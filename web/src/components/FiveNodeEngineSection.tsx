"use client";

import React, { useState, useEffect } from "react";
import {
  Database,
  Search,
  Bot,
  FileCheck2,
  BarChart3,
  RotateCcw,
  CheckCircle2,
  ArrowRight,
  Play,
  Pause,
  Layers,
  Sparkles,
  ShieldAlert,
  FileText,
  FileSpreadsheet,
  Link2,
  Eye,
  CheckSquare,
  Globe,
  Sliders,
  ChevronDown,
} from "lucide-react";

interface NodeItem {
  id: number;
  code: string;
  name: string;
  role: string;
  tagline: string;
  items: string[];
  inputData: string;
  engineProcess: string;
  outputResult: string;
  payloadBadge: string;
  icon: React.ElementType;
}

export default function FiveNodeEngineSection() {
  const [activeNodeIdx, setActiveNodeIdx] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationStep, setSimulationStep] = useState<number | null>(null);
  const [showContentSubGraph, setShowContentSubGraph] = useState(false);

  const nodes: NodeItem[] = [
    {
      id: 1,
      code: "Node 1",
      name: "Kho Dữ Liệu & Bảng Giá Trung Tâm",
      role: "Gốc Rễ Tri Thức",
      tagline: "Số hóa và bảo vệ tài sản dữ liệu của doanh nghiệp trên hạ tầng chính chủ.",
      items: [
        "Hệ thống tri thức tự lưu trữ (self-hosted) bảo mật 100%",
        "Chuẩn hóa bảng giá Excel gộp ô, catalogue, TDS, Quatest",
        "Khóa thuật toán tính giá: Tuyệt đối cấm AI tính nhẩm",
      ],
      inputData: "Tài liệu kỹ thuật, bảng giá Excel nhiều tầng chiết khấu, catalogue, tiêu chuẩn ASTM/QCVN",
      engineProcess: "Bộ lọc làm sạch dữ liệu, khử ảo giác, khóa cứng công thức đơn giá vào CSDL gốc",
      outputResult: "Kho tri thức trung tâm bảo mật, sẵn sàng cấp ngữ cảnh chuẩn xác cho toàn bộ quy trình",
      payloadBadge: "Bảng_giá_2026.xlsx (Đã khóa giá)",
      icon: Database,
    },
    {
      id: 2,
      code: "Node 2",
      name: "Kênh Thu Hút Google & AI Search",
      role: "Kênh Thu Hút",
      tagline: "Đưa thương hiệu xuất hiện tự động khi người mua B2B tra cứu trên Google, ChatGPT & Gemini.",
      items: [
        "Sản xuất 16 – 24 bài chuyên gia E-E-A-T mỗi tháng",
        "Tối ưu trích dẫn trên ChatGPT / Gemini / Perplexity",
        "Chăm sóc và phân luồng độc bản cho 1 – 3+ website vệ tinh",
      ],
      inputData: "Hồ sơ kỹ thuật từ Node 1 và bộ từ khóa tìm kiếm của các nhà máy công nghiệp",
      engineProcess: "Dây chuyền sản xuất nội dung chuyên sâu 6 bước có chốt chặn SEO Audit 100/100 điểm",
      outputResult: "Khách hàng B2B chất lượng cao chủ động tìm đến hệ sinh thái website của doanh nghiệp",
      payloadBadge: "16-24 bài E-E-A-T/tháng · Có Sub-Graph ▾",
      icon: Search,
    },
    {
      id: 3,
      code: "Node 3",
      name: "Tiếp Đón & Phân Loại Đa Kênh 24/7",
      role: "Bộ Lọc & Giữ Chân",
      tagline: "Không bỏ lỡ khách hàng tiềm năng dù họ gửi yêu cầu lúc nửa đêm hay ngày lễ.",
      items: [
        "Trợ lý AI tư vấn kỹ thuật chính xác theo thông số Node 1",
        "Thu thập SĐT/Zalo, chấm điểm mức độ tiềm năng (Lead Scoring)",
        "Tự động tạo Deal và đồng bộ lịch sử vào CRM (MISA AMIS, Brevo)",
      ],
      inputData: "Yêu cầu từ khách hàng qua Website LiveChat, Fanpage, Email và Zalo OA 24/7",
      engineProcess: "Nhận diện nhu cầu vật tư, tra cứu thông số từ Node 1 và phân loại khách hàng",
      outputResult: "Cơ hội bán hàng (Deal) tự động đổ về CRM kèm đầy đủ thông tin bóc tách ban đầu",
      payloadBadge: "Lead: Cty Cấp Nước Long An (Điểm: 95/100)",
      icon: Bot,
    },
    {
      id: 4,
      code: "Node 4",
      name: "Tự Động Dự Toán & Báo Giá 8 Giây",
      role: "Cỗ Máy Chốt Đơn",
      tagline: "Rút ngắn chu kỳ phản hồi từ vài giờ/vài ngày xuống còn 8 giây, chốt đơn thần tốc.",
      items: [
        "Tự động lập dự toán BOQ vật tư trong 2 phút",
        "Sinh file PDF vector chuẩn in ấn kèm mã VietQR trong 8 giây",
        "Nhân sự / Ban Giám Đốc chỉ cần duyệt 10 giây trước khi gửi",
      ],
      inputData: "Yêu cầu từ Node 3 kèm ngữ cảnh danh mục vật tư cần báo giá của dự án",
      engineProcess: "Bóc tách quy cách, tính đơn giá chiết khấu theo số lượng, sinh file PDF và mã QR",
      outputResult: "File báo giá chuyên nghiệp có logo và mã VietQR được gửi tới khách sau 10s duyệt",
      payloadBadge: "BaoGia_PAC_5Tan_72.9M.pdf (Kèm VietQR)",
      icon: FileCheck2,
    },
    {
      id: 5,
      code: "Node 5",
      name: "Báo Cáo Quản Trị 1 Trang Realtime",
      role: "Kiểm Soát & Tối Ưu",
      tagline: "Ban Giám Đốc điều hành dựa trên số liệu dòng tiền thời gian thực, không chờ đợi báo cáo giấy.",
      items: [
        "Màn hình số liệu 1 trang thời gian thực dành riêng cho lãnh đạo",
        "Đo lường dòng tiền: Lượng truy cập → Khách liên hệ → Báo giá → Doanh thu",
        "Hồi tiếp tối ưu: Phản hồi ngược giúp tinh chỉnh chính sách giá tại Node 1",
      ],
      inputData: "Số liệu thực tế được ghi nhận tự động từ bốn node phía trước trong dây chuyền",
      engineProcess: "Tổng hợp chỉ số ROI, phát hiện điểm nghẽn chuyển đổi, mô phỏng kịch bản What-If",
      outputResult: "Báo cáo 1 trang thời gian thực, tự động đề xuất tối ưu giá bán dựa trên tỷ lệ thắng đơn",
      payloadBadge: "Dashboard Realtime: Traffic ➔ Tiền về TK",
      icon: BarChart3,
    },
  ];

  // 6 Stages of Content Production Sub-Workflow (Ported from n8n seo-writing engine)
  const contentStages = [
    {
      stage: 1,
      name: "Tri Thức Gốc & Từ Khóa",
      desc: "Nạp hồ sơ TDS, bảng test Quatest, catalogue từ Node 1 để sinh Topic Cluster từ khóa chuyên ngành.",
      icon: Database,
      badge: "Không rỗng",
    },
    {
      stage: 2,
      name: "Quét SERP & Đối Thủ",
      desc: "Cào top 10 Google để tìm Content Gap (khoảng trống nội dung đối thủ bỏ sót) và lập dàn ý E-E-A-T.",
      icon: Search,
      badge: "Phân tích SERP",
    },
    {
      stage: 3,
      name: "Viết Sâu Từng Đề Mục",
      desc: "Deep-writing từng thẻ H2. Khóa thuật toán không bịa thông số; tự động chèn bảng quy cách thực nghiệm.",
      icon: FileText,
      badge: "Cấm bịa số liệu",
    },
    {
      stage: 4,
      name: "Tối Ưu Schema & Ảnh",
      desc: "Gắn Schema JSON-LD TechArticle, DefinedTerm, tối ưu Meta Description và thẻ Alt ảnh kỹ thuật.",
      icon: Sliders,
      badge: "Schema KDD",
    },
    {
      stage: 5,
      name: "Liên Kết Silo Nội Bộ",
      desc: "Đan chéo liên kết nội bộ tự động theo cấu trúc cụm chủ đề Pillar / Cluster, dẫn dắt người đọc tới form báo giá.",
      icon: Link2,
      badge: "Internal Link",
    },
    {
      stage: 6,
      name: "SEO Audit 100/100 Điểm",
      desc: "Chấm điểm tự động qua 7 tiêu chí khắt khe. Phải đạt ≥ 95–100/100 điểm mới được xuất bản lên web & AI Search.",
      icon: CheckSquare,
      badge: "Gate 100/100đ",
    },
  ];

  // Simulation Sequence Effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isSimulating) {
      const step = simulationStep === null ? 0 : (simulationStep + 1) % 5;
      setSimulationStep(step);
      setActiveNodeIdx(step);
      if (step === 1) {
        setShowContentSubGraph(true);
      }
      timer = setTimeout(() => {
        if (step === 4) {
          setIsSimulating(false);
          setSimulationStep(null);
        }
      }, 2200);
    }
    return () => clearTimeout(timer);
  }, [isSimulating, simulationStep]);

  const toggleSimulation = () => {
    if (isSimulating) {
      setIsSimulating(false);
      setSimulationStep(null);
    } else {
      setIsSimulating(true);
      setSimulationStep(0);
      setActiveNodeIdx(0);
    }
  };

  const activeNode = nodes[activeNodeIdx];

  return (
    <section id="day-chuyen" className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-8 lg:px-10 text-center">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs font-bold uppercase tracking-[0.11em] text-indigo-600 bg-indigo-50 px-3.5 py-1 rounded-full border border-indigo-100">
            SƠ ĐỒ WORKFLOW-GRAPH VẬN HÀNH KHÉP KÍN
          </span>
          <h2 className="mt-3.5 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Dây Chuyền 5 Node Vận Hành Tự Động Hóa B2B
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Dữ liệu sạch nuôi nội dung, nội dung kéo khách tiềm năng, khách nuôi báo giá, báo giá nuôi doanh thu và hồi tiếp tối ưu. Một cỗ máy liền mạch trên hạ tầng chính chủ.
          </p>
        </div>

        {/* WORKFLOW CANVAS CONTAINER */}
        <div className="relative rounded-3xl border border-slate-300/80 bg-white p-4 sm:p-7 shadow-xl overflow-hidden text-left mb-8">
          
          {/* Blueprint Dot-Grid Background */}
          <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] opacity-45 pointer-events-none" />

          {/* Canvas Header Control Bar */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-700">
                Live Workflow Canvas · 5 Node Engine
              </span>
              <span className="hidden sm:inline-block text-[11px] font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 border border-slate-200">
                Self-Hosted
              </span>
            </div>

            {/* Interactive Simulation Controls */}
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={toggleSimulation}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all shadow-xs cursor-pointer ${
                  isSimulating
                    ? "bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100"
                    : "bg-[#0D9488] text-white hover:bg-[#0f766e]"
                }`}
              >
                {isSimulating ? (
                  <>
                    <Pause className="h-3.5 w-3.5" />
                    <span>Dừng mô phỏng</span>
                  </>
                ) : (
                  <>
                    <Play className="h-3.5 w-3.5 fill-current" />
                    <span>▶ Chạy mô phỏng luồng (Simulate Pipeline)</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => {
                  setShowContentSubGraph(!showContentSubGraph);
                  setActiveNodeIdx(1);
                }}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                  showContentSubGraph
                    ? "bg-indigo-50 border-indigo-200 text-indigo-700"
                    : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                }`}
              >
                <Layers className="h-3.5 w-3.5 text-indigo-600" />
                <span>Sub-Graph Content 6 Bước</span>
              </button>
            </div>
          </div>

          {/* SIMULATION LIVE TICKER BANNER */}
          {isSimulating && (
            <div className="relative z-10 mb-6 p-3 rounded-xl bg-gradient-to-r from-indigo-50 via-teal-50 to-indigo-50 border border-teal-200 flex items-center justify-between text-xs animate-in fade-in slide-in-from-top-2">
              <div className="flex items-center gap-2 font-medium text-slate-800">
                <span className="h-2 w-2 rounded-full bg-teal-600 animate-pulse" />
                <span>
                  <strong>Đang mô phỏng {nodes[simulationStep ?? 0].code}:</strong> {nodes[simulationStep ?? 0].tagline}
                </span>
              </div>
              <span className="font-mono text-[11px] font-bold text-teal-700 bg-white/80 px-2 py-0.5 rounded border border-teal-200">
                Bước {(simulationStep ?? 0) + 1}/5
              </span>
            </div>
          )}

          {/* 5 NODES GRAPH CARDS */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-stretch">
            {nodes.map((node, idx) => {
              const isSelected = idx === activeNodeIdx;
              const isSimActive = simulationStep === idx;
              const Icon = node.icon;

              return (
                <div
                  key={node.code}
                  onClick={() => {
                    setActiveNodeIdx(idx);
                    if (idx === 1) setShowContentSubGraph(true);
                  }}
                  className={`group relative rounded-2xl border p-4 flex flex-col justify-between text-left transition-all cursor-pointer bg-white ${
                    isSelected || isSimActive
                      ? "border-indigo-600 shadow-lg ring-2 ring-indigo-500/20 translate-y-[-2px]"
                      : "border-slate-200/90 hover:border-indigo-200 hover:shadow-md"
                  }`}
                >
                  {/* Top Accent Gradient on Active */}
                  {(isSelected || isSimActive) && (
                    <span className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-indigo-600 via-teal-500 to-indigo-600 rounded-t-2xl" />
                  )}

                  {/* Visual Node Input Port Pin (Left) */}
                  <span
                    className={`hidden lg:block absolute -left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full border-2 border-white transition-all shadow-xs ${
                      isSelected || isSimActive
                        ? "bg-indigo-600 ring-2 ring-indigo-400"
                        : "bg-slate-300 group-hover:bg-indigo-400"
                    }`}
                    title="Input Port"
                  />

                  {/* Visual Node Output Port Pin (Right) */}
                  <span
                    className={`hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full border-2 border-white transition-all shadow-xs ${
                      isSelected || isSimActive
                        ? "bg-teal-500 ring-2 ring-teal-300"
                        : "bg-slate-300 group-hover:bg-teal-400"
                    }`}
                    title="Output Port"
                  />

                  <div>
                    {/* Header: Code & Role */}
                    <div className="flex items-center justify-between mb-2.5">
                      <span
                        className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                          isSelected || isSimActive
                            ? "bg-indigo-600 text-white"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {node.code}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        {node.role}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-sm sm:text-[14.5px] font-bold text-slate-900 flex items-start gap-1.5 mb-2 leading-snug">
                      <Icon className={`h-4 w-4 shrink-0 mt-0.5 ${isSelected || isSimActive ? "text-indigo-600" : "text-slate-500"}`} />
                      <span>{node.name}</span>
                    </h3>

                    {/* Bullet Points */}
                    <ul className="space-y-1.5 text-xs text-slate-600 mb-4 font-normal">
                      {node.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-1.5">
                          <span className="text-indigo-500 mt-0.5 text-[10px]">●</span>
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Active Payload Simulation Pill */}
                  <div className="pt-2.5 border-t border-slate-100 mt-2">
                    <div className="rounded-lg bg-slate-50 border border-slate-200/80 p-1.5 text-[10.5px] font-mono text-slate-600 truncate flex items-center justify-between">
                      <span className="truncate">{node.payloadBadge}</span>
                      <span className="text-teal-600 shrink-0 font-bold ml-1">✓</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* DYNAMIC SVG BEZIER PATHS WITH ANIMATED FLOWING LIGHT BEAMS */}
          <div className="relative py-6 hidden lg:block">
            <svg
              className="w-full h-16 overflow-visible"
              viewBox="0 0 1000 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Linear gradient for main forward pipeline */}
                <linearGradient id="pipeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4F46E5" />
                  <stop offset="50%" stopColor="#0D9488" />
                  <stop offset="100%" stopColor="#4F46E5" />
                </linearGradient>

                {/* Flowing glow pulse filter */}
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Base connecting line */}
              <path
                d="M 100 32 L 900 32"
                stroke="#E2E8F0"
                strokeWidth="4"
                strokeLinecap="round"
              />

              {/* Animated flowing dash beam */}
              <path
                d="M 100 32 L 900 32"
                stroke="url(#pipeGrad)"
                strokeWidth="3.5"
                strokeDasharray="12 12"
                strokeLinecap="round"
                className="animate-[dash_1.5s_linear_infinite]"
              />

              {/* 5 Interconnected Junction Circles with Ripple */}
              {[100, 300, 500, 700, 900].map((x, i) => {
                const isActive = i === activeNodeIdx || i === simulationStep;
                return (
                  <g key={x}>
                    <circle
                      cx={x}
                      cy="32"
                      r={isActive ? 7 : 5}
                      fill={isActive ? "#0D9488" : "#4F46E5"}
                      stroke="#FFFFFF"
                      strokeWidth="2.5"
                      className="transition-all duration-300"
                    />
                    {isActive && (
                      <circle
                        cx={x}
                        cy="32"
                        r="12"
                        fill="none"
                        stroke="#0D9488"
                        strokeWidth="1.5"
                        opacity="0.6"
                        className="animate-ping"
                      />
                    )}
                  </g>
                );
              })}

              {/* Curved Feedback Loop Path (Node 5 -> Node 1) */}
              <path
                d="M 900 38 C 900 75, 100 75, 100 38"
                stroke="#CBD5E1"
                strokeWidth="2"
                strokeDasharray="6 6"
                fill="none"
              />
            </svg>

            {/* Stage Flow Captions under Nodes */}
            <div className="grid grid-cols-4 w-[84%] mx-auto -mt-3 text-[11px] font-semibold text-slate-600">
              <span className="text-left">Dữ liệu sạch nuôi bài viết</span>
              <span className="text-center">Kéo khách vào tiếp đón</span>
              <span className="text-center">Chuyển Lead vào dự toán</span>
              <span className="text-right text-[#0D9488]">Ghi nhận doanh thu Dashboard</span>
            </div>

            {/* Closed Loop Banner */}
            <div className="mt-4 flex justify-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-xs font-semibold text-[#0D9488]">
                <RotateCcw className="h-3.5 w-3.5" />
                Vòng lặp tự động khép kín — Số liệu chốt đơn Node 5 tối ưu ngược chính sách giá tại Node 1
              </span>
            </div>
          </div>

          {/* ACTIVE NODE DETAILS INSPECTION PANEL */}
          <div className="relative z-10 rounded-2xl border border-slate-200/90 bg-[#F8FAFC] p-5 sm:p-7 text-left shadow-xs mt-3">
            <div className="flex flex-wrap items-center justify-between pb-3.5 mb-4 border-b border-slate-200 gap-2">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-indigo-50 text-indigo-700 border border-indigo-100">
                  {activeNode.code}
                </span>
                <h4 className="text-base sm:text-lg font-bold text-slate-900">
                  Chi Tiết Vận Hành: {activeNode.name}
                </h4>
              </div>
              <span className="text-xs font-semibold text-slate-500">
                Vai trò chính: <strong className="text-slate-800">{activeNode.role}</strong>
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  DỮ LIỆU ĐẦU VÀO (INPUT)
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  {activeNode.inputData}
                </p>
              </div>

              <div className="space-y-1.5 md:border-l border-slate-200 md:pl-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  BỘ MÁY XỬ LÝ (ENGINE)
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  {activeNode.engineProcess}
                </p>
              </div>

              <div className="space-y-1.5 md:border-l border-slate-200 md:pl-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700">
                  KẾT QUẢ BÀN GIAO (OUTPUT)
                </span>
                <p className="text-xs sm:text-sm text-slate-900 leading-relaxed font-medium">
                  {activeNode.outputResult}
                </p>
              </div>
            </div>
          </div>

          {/* PHƯƠNG ÁN A: CONTENT PRODUCTION SUB-WORKFLOW GRAPH (WHEN NODE 2 IS ACTIVE OR EXPANDED) */}
          {showContentSubGraph && (
            <div className="relative z-10 mt-6 rounded-2xl border-2 border-indigo-200 bg-gradient-to-br from-indigo-50/40 via-white to-teal-50/30 p-5 sm:p-7 text-left shadow-sm animate-in fade-in slide-in-from-top-3">
              
              {/* Sub-Graph Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-indigo-100">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-indigo-700 uppercase tracking-wider bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200 mb-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-indigo-600" />
                    <span>DÂY CHUYỀN SẢN XUẤT NỘI DUNG CHUYÊN GIA (PORT TỪ N8N SEO PIPELINE)</span>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900">
                    6 Giai Đoạn Xuất Bản E-E-A-T Chuẩn Mực — Cấm AI Tự Bịa Số Liệu
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 font-normal">
                    Quy trình kiểm soát chất lượng nghiêm ngặt: Mỗi bài viết đều trích xuất trực tiếp từ TDS &amp; tiêu chuẩn kỹ thuật gốc, được chấm điểm SEO Audit trước khi xuất bản.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setShowContentSubGraph(false)}
                  className="text-xs font-semibold text-slate-400 hover:text-slate-700 underline cursor-pointer"
                >
                  Thu gọn Sub-Graph ✕
                </button>
              </div>

              {/* 6 Sub-Graph Connected Nodes Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
                {contentStages.map((stg, sIdx) => {
                  const StgIcon = stg.icon;
                  return (
                    <div
                      key={stg.stage}
                      className="relative rounded-xl border border-indigo-100 bg-white p-3.5 shadow-xs flex flex-col justify-between hover:border-indigo-300 transition-colors"
                    >
                      {/* Connection arrow between stages */}
                      {sIdx < contentStages.length - 1 && (
                        <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-indigo-300">
                          <ArrowRight className="h-3.5 w-3.5" />
                        </div>
                      )}

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-700">
                            Giai đoạn {stg.stage}
                          </span>
                          <span className="text-[9.5px] font-mono text-teal-700 font-bold bg-teal-50 px-1.5 py-0.5 rounded">
                            {stg.badge}
                          </span>
                        </div>

                        <h5 className="text-xs font-bold text-slate-900 flex items-center gap-1 mb-1.5">
                          <StgIcon className="h-3.5 w-3.5 text-indigo-600 shrink-0" />
                          <span>{stg.name}</span>
                        </h5>

                        <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
                          {stg.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Trust Callout */}
              <div className="mt-4 p-3 rounded-xl bg-white border border-indigo-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0" />
                  <span>
                    <strong>Không dùng prompt viết bài đại trà:</strong> Bài viết được viết sâu từng thẻ H2 dựa trên dữ liệu thật, tối ưu để ChatGPT, Gemini và Perplexity trích dẫn.
                  </span>
                </div>
                <span className="font-mono text-[11px] text-indigo-600 font-bold">
                  Princeton KDD-GEO Benchmark
                </span>
              </div>

            </div>
          )}

        </div>

        <p className="text-center text-xs text-slate-400">
          Nhấp vào bất kỳ Node nào phía trên để xem chi tiết luồng dữ liệu, hoặc bấm &quot;Chạy mô phỏng luồng&quot; để trải nghiệm tự động.
        </p>

      </div>
    </section>
  );
}
