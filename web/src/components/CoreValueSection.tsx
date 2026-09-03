"use client";

import React, { useState } from "react";
import {
  Database,
  Search,
  Bot,
  Zap,
  BarChart3,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  RefreshCw,
  CornerDownLeft,
  FileSpreadsheet,
  ScanText,
  Boxes,
  ShieldCheck,
  FileText,
  BadgeCheck,
  Globe,
  MessagesSquare,
  ListChecks,
  Target,
  UserCheck,
  MessageSquareText,
  Calculator,
  FileCheck2,
  Plug,
  Ruler,
  Siren,
  GitCompare,
} from "lucide-react";

export default function CoreValueSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const nodeData = [
    {
      index: 1,
      name: "Master RAG Lake",
      role: "Gốc rễ tri thức",
      modules: ["Core"],
      moduleLine: "Core",
      blurb:
        "Bộ Não Tri Thức Số Doanh Nghiệp (Không Ảo Giác). Toàn bộ catalogue, bảng giá, MSDS và hồ sơ thầu được chuẩn hóa một lần, dùng lại ở cả bốn node còn lại.",
      promise: "Không ảo giác · nguồn truy vết từng câu trả lời",
      slotHint: "Bảng giá Excel gộp ô & tài liệu TDS số hóa vào SQL Database",
      input: "Excel gộp ô, PDF scan, ảnh nhãn, hồ sơ thầu cũ nằm rải rác",
      output: "Tri thức truy vấn được, mỗi câu trả lời có dẫn nguồn",
      sla: "tra cứu < 1 phút",
      loop: "Câu hỏi mới của thị trường và kết quả bán hàng thật được ghi lại, bổ sung vào lake ở lần chuẩn hóa kế tiếp.",
      flow: [
        { step: "BƯỚC 1", icon: FileSpreadsheet, label: "Thu gom & unmerge", note: "Bóc bảng gộp ô, tách sheet, gom về một nguồn duy nhất.", actor: "Agent" },
        { step: "BƯỚC 2", icon: ScanText, label: "OCR đa thể thức", note: "PDF scan, ảnh nhãn, bản vẽ → văn bản có cấu trúc.", actor: "Agent" },
        { step: "BƯỚC 3", icon: Boxes, label: "Chunking cha–con", note: "Chia đoạn nhỏ nhưng giữ ngữ cảnh tài liệu gốc.", actor: "Agent" },
        { step: "BƯỚC 4", icon: ShieldCheck, label: "Nghiệm thu dữ liệu", note: "Kỹ thuật doanh nghiệp xác nhận mã hàng và khung giá.", actor: "Người" },
      ],
      items: [
        { code: "INGEST", label: "Excel unmerge + OCR đa thể thức", note: "Bảng gộp ô, PDF scan, ảnh nhãn — bóc thành dữ liệu có cấu trúc." },
        { code: "SQL", label: "Động Cơ Tính Giá Chuẩn Xác 100%", note: "Cấm AI đoán mò: mọi con số đi qua SQL xác định." },
        { code: "VECTOR", label: "Vector hóa song song", note: "Hai không gian embedding cho tiếng Việt kỹ thuật và mã hàng." },
        { code: "CHUNK", label: "Chunking cha–con", note: "Trả về đúng đoạn, giữ nguyên ngữ cảnh tài liệu gốc." },
      ],
    },
    {
      index: 2,
      name: "Flow Content & GEO",
      role: "Hiện diện trong câu trả lời AI",
      modules: ["M1", "M2"],
      moduleLine: "M1 · M2",
      blurb:
        "Doanh nghiệp xuất hiện ngay trong câu trả lời của ChatGPT, Gemini và Perplexity — nơi người mua B2B kỹ thuật thực sự bắt đầu tìm nhà cung cấp.",
      promise: "1–3+ satellite site · không cam kết thứ hạng rủi ro ngoại cảnh",
      slotHint: "Ảnh chụp câu trả lời AI có trích dẫn tên thương hiệu",
      input: "Câu hỏi thật của thị trường + tri thức đã chuẩn hóa từ Node 1",
      output: "Được trích dẫn khi người mua hỏi trợ lý AI về ngành",
      sla: "1–3+ satellite site",
      loop: "Chủ đề nào tạo ra lead thật sẽ được ưu tiên viết sâu hơn ở chu kỳ sau; phần còn lại bị cắt.",
      flow: [
        { step: "BƯỚC 1", icon: Search, label: "Khai thác chủ đề", note: "Lấy câu hỏi thực khách hàng hay hỏi sales và kỹ thuật.", actor: "Agent" },
        { step: "BƯỚC 2", icon: FileText, label: "Viết chuẩn E-E-A-T", note: "Số liệu và mã hàng lấy từ RAG Lake nên luôn khớp thực tế.", actor: "Agent" },
        { step: "BƯỚC 3", icon: BadgeCheck, label: "Kỹ thuật duyệt nội dung", note: "Chuyên gia của doanh nghiệp xác nhận đúng chuyên môn.", actor: "Người" },
        { step: "BƯỚC 4", icon: Globe, label: "Xuất bản & tối ưu GEO", note: "Đưa lên satellite site, tối ưu để AI trích dẫn được.", actor: "Agent" },
      ],
      items: [
        { code: "M1", label: "Bài viết chuẩn E-E-A-T", note: "Viết từ RAG Lake nên số liệu và mã hàng luôn khớp thực tế." },
        { code: "M2", label: "GEO — Generative Engine Optimization", note: "Tối ưu để được trích dẫn trong câu trả lời AI, không chỉ SERP." },
        { code: "SAT", label: "Hệ satellite site", note: "1–3+ site chuyên đề theo dòng sản phẩm chủ lực." },
        { code: "LOOP", label: "Nội dung nuôi lại tri thức", note: "Câu hỏi thị trường quay về làm giàu Node 1." },
      ],
    },
    {
      index: 3,
      name: "Tiếp nhận 24/7 & CRM",
      role: "Không để lead nguội",
      modules: ["M3", "M5"],
      moduleLine: "M3 · M5",
      blurb:
        "68% người mua B2B chọn đơn vị phản hồi đầu tiên. Agent trực LiveChat, Fanpage và Zalo OA suốt 24/7, chấm điểm rồi đẩy thẳng vào CRM.",
      promise: "Phản hồi trong 2 phút · 24/7, kể cả ngoài giờ",
      slotHint: "Ảnh chụp inbox Zalo OA / Fanpage có Agent đang trả lời",
      input: "Tin nhắn LiveChat, Fanpage, Zalo OA — bất kể giờ nào",
      output: "Lead đã chấm điểm nằm trong CRM, có người phụ trách",
      sla: "phản hồi < 2 phút",
      loop: "Lead thắng và lead mất đều được gắn nhãn, dùng để hiệu chỉnh tiêu chí chấm điểm tháng sau.",
      flow: [
        { step: "BƯỚC 1", icon: MessagesSquare, label: "Agent trả lời tức thì", note: "Trả lời bằng dữ liệu thật từ RAG Lake, không kịch bản cứng.", actor: "Agent" },
        { step: "BƯỚC 2", icon: ListChecks, label: "Khai thác nhu cầu", note: "Hỏi đủ mã hàng, sản lượng, thời điểm cần và địa điểm giao.", actor: "Agent" },
        { step: "BƯỚC 3", icon: Target, label: "Chấm điểm lead (M5)", note: "Phân loại theo ngành, sản lượng và độ nóng của nhu cầu.", actor: "Agent" },
        { step: "BƯỚC 4", icon: UserCheck, label: "Sales nhận lead nóng", note: "Cảnh báo SLA ping trực tiếp nếu quá ngưỡng chờ.", actor: "Người" },
      ],
      items: [
        { code: "M3", label: "Bot LiveChat / Fanpage / Zalo OA", note: "Trả lời bằng dữ liệu thật, không kịch bản cứng." },
        { code: "M5", label: "Lead scoring", note: "Phân loại theo ngành, sản lượng và độ nóng của nhu cầu." },
        { code: "SYNC", label: "Đồng bộ CRM", note: "MISA AMIS, Brevo, Google Sheets — không nhập tay lần hai." },
        { code: "SLA", label: "Cảnh báo SLA", note: "Lead nóng quá ngưỡng chờ sẽ ping trực tiếp sales lead." },
      ],
    },
    {
      index: 4,
      name: "Bán hàng & báo giá",
      role: "Chốt đơn trong ngày",
      modules: ["M4", "M6", "M7"],
      moduleLine: "M4 · M6 · M7",
      blurb:
        "Sales gõ một dòng trên Zalo, nhận lại PDF báo giá kèm VietQR trong 8 giây. BOQ và hồ sơ thầu có copilot riêng.",
      promise: "Báo giá 8 giây · phê duyệt 10 giây",
      slotHint: "Báo giá PDF Vector kèm mã VietQR sinh từ Zalo Copilot",
      input: "Yêu cầu báo giá, bảng vật tư của khách, hồ sơ mời thầu",
      output: "PDF báo giá kèm VietQR đã được giám đốc phê duyệt",
      sla: "báo giá 8 giây",
      loop: "Tỷ lệ thắng theo từng mức chiết khấu chảy về Node 5 rồi về Node 1 để siết lại khung giá.",
      flow: [
        { step: "BƯỚC 1", icon: MessageSquareText, label: "Sales gõ một dòng", note: 'Ví dụ: "báo giá 5 tấn PAC 30% giao Long An".', actor: "Người" },
        { step: "BƯỚC 2", icon: Database, label: "Truy xuất mã hàng", note: "Đối chiếu tồn kho, quy cách và điều kiện giao từ RAG Lake.", actor: "Agent" },
        { step: "BƯỚC 3", icon: Calculator, label: "Động cơ SQL tính giá", note: "Cấm AI tính nhẩm: giá, chiết khấu, VAT do SQL quyết.", actor: "Agent" },
        { step: "BƯỚC 4", icon: FileCheck2, label: "Giám đốc duyệt 10 giây", note: "Duyệt hoặc trả lại ngay trên điện thoại, PDF gửi khách.", actor: "Người" },
      ],
      items: [
        { code: "M4", label: "Zalo Copilot báo giá", note: "PDF + VietQR sinh tự động, giá lấy từ động cơ SQL." },
        { code: "M6", label: "BOQ estimator", note: "Bóc tách khối lượng từ bảng vật tư của khách." },
        { code: "M7", label: "Tender copilot", note: "Soát hồ sơ thầu theo checklist pháp lý và kỹ thuật." },
        { code: "APPROVE", label: "Phê duyệt 10 giây", note: "Giám đốc duyệt hoặc trả lại ngay trên điện thoại." },
      ],
    },
    {
      index: 5,
      name: "Báo Cáo Quản Trị 1 Trang",
      role: "Điều hành bằng số",
      modules: ["M0"],
      moduleLine: "M0",
      blurb:
        "Executive BI Dashboard realtime: một trang duy nhất cho Ban Giám Đốc, tự chỉ ra điểm nghẽn tuần này và mô phỏng what-if trước khi ra quyết định.",
      promise: "Realtime · phát hiện bottleneck tự động",
      slotHint: "Báo cáo quản trị 1 trang trên điện thoại của Ban Giám Đốc",
      input: "Toàn bộ dữ liệu vận hành sinh ra ở Node 1 → Node 4",
      output: "Một trang quyết định: điểm nghẽn có tên, có ngưỡng",
      sla: "realtime",
      loop: "Quyết định của Ban Giám Đốc được ghi lại kèm kết quả sau đó — đây là dữ liệu đắt nhất chảy về Node 1.",
      flow: [
        { step: "BƯỚC 1", icon: Plug, label: "Thu chỉ số từ 4 node", note: "Pipeline, báo giá, lead, tồn kho về cùng một khung nhìn.", actor: "Agent" },
        { step: "BƯỚC 2", icon: Ruler, label: "So ngưỡng công đoạn", note: "Mỗi công đoạn có ngưỡng thời gian đã thống nhất từ tuần 1.", actor: "Agent" },
        { step: "BƯỚC 3", icon: Siren, label: "Nêu tên khâu đang trễ", note: "Không đưa biểu đồ để tự đoán — chỉ rõ khâu vượt ngưỡng.", actor: "Agent" },
        { step: "BƯỚC 4", icon: GitCompare, label: "Mô phỏng what-if", note: "Thêm một sales, đổi khung giá — thấy tác động trước khi làm.", actor: "Người" },
      ],
      items: [
        { code: "M0", label: "Báo cáo 1 trang realtime", note: "Doanh thu, pipeline, tải vận hành trên cùng một khung nhìn." },
        { code: "BOTTLE", label: "Phát hiện điểm nghẽn", note: "So ngưỡng theo từng công đoạn, nêu tên khâu đang trễ." },
        { code: "WHATIF", label: "Mô phỏng what-if", note: "Thêm một sales, đổi khung giá — thấy tác động trước khi làm." },
        { code: "FEED", label: "Đóng vòng lặp", note: "Kết quả thật chảy về Node 1, cỗ máy tự khôn lên." },
      ],
    },
  ];

  const active = nodeData[activeIdx];

  return (
    <section id="engine" className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#4F46E5] bg-indigo-50 px-3.5 py-1 rounded-full border border-indigo-200/80">
            KIẾN TRÚC LÕI
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E293B] tracking-tight">
            Một Cỗ Máy Vòng Kín 5 Node, Gánh 8 Module.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Không phải tập hợp công cụ rời rạc. Dữ liệu chạy một chiều từ tri thức → hiện diện → tiếp nhận → chốt đơn → báo cáo, rồi quay lại làm giàu tri thức. Chọn một node để xem workflow bên trong.
          </p>
        </div>

        {/* 5-Node Interactive Selector Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 max-w-5xl mx-auto">
          {nodeData.map((node, i) => {
            const isSelected = activeIdx === i;
            return (
              <React.Fragment key={node.index}>
                <button
                  type="button"
                  onClick={() => setActiveIdx(i)}
                  className={`flex-1 w-full text-left rounded-xl p-3.5 transition-all border ${
                    isSelected
                      ? "bg-white border-[#4F46E5] shadow-md shadow-indigo-100 ring-2 ring-[#4F46E5]/10 -translate-y-0.5"
                      : "bg-white/70 border-slate-200 hover:border-slate-300 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className={isSelected ? "font-bold text-[#4F46E5]" : "text-slate-400"}>
                      NODE 0{node.index}
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 font-sans">
                      {node.modules.join(", ")}
                    </span>
                  </div>
                  <h4 className="mt-1 text-xs sm:text-sm font-bold text-[#1E293B] truncate">
                    {node.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 truncate mt-0.5">
                    {node.role}
                  </p>
                </button>

                {i < nodeData.length - 1 && (
                  <ChevronRight className="hidden sm:block h-4 w-4 text-slate-300 shrink-0" />
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Closed Loop Badge */}
        <div className="mt-4 flex items-center justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-xs text-slate-700">
            <RefreshCw className="h-3.5 w-3.5 text-[#4F46E5] animate-spin-slow" />
            <span>
              <strong>Vòng kín:</strong> Kết quả thật ở Node 5 chảy ngược về Node 1 — mỗi tháng cỗ máy trả lời chính xác hơn tháng trước.
            </span>
          </div>
        </div>

        {/* Active Node Detail Card - Dark Theme */}
        <div className="mt-6 max-w-6xl mx-auto rounded-3xl bg-[#1E293B] text-white p-6 sm:p-8 lg:p-10 shadow-2xl border border-slate-700/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Column: Node Overview & Controller */}
            <div className="lg:col-span-4 text-left">
              <span className="font-mono text-xs tracking-wider text-indigo-300 uppercase font-semibold">
                N{active.index} · {active.moduleLine}
              </span>
              <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {active.name}
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
                {active.blurb}
              </p>
              <p className="mt-4 font-mono text-xs text-teal-300 font-semibold bg-teal-500/10 p-2.5 rounded-xl border border-teal-500/20">
                ⚡ {active.promise}
              </p>

              {/* Visual Slot Placeholder */}
              <div className="mt-5 rounded-2xl border border-slate-700 bg-slate-800/80 p-4 text-xs text-slate-400">
                <span className="font-mono text-[11px] text-slate-500 uppercase tracking-wider block mb-1">Mô phỏng giao diện</span>
                <p className="text-slate-300 italic">{active.slotHint}</p>
              </div>

              {/* Prev / Next Navigation Buttons */}
              <div className="mt-6 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setActiveIdx((prev) => (prev + nodeData.length - 1) % nodeData.length)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs text-slate-200 border border-white/10 transition-colors"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>Node trước</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveIdx((prev) => (prev + 1) % nodeData.length)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs text-slate-200 border border-white/10 transition-colors"
                >
                  <span>Node sau</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Right Column: Workflow Steps (Agent vs Human) + Modules */}
            <div className="lg:col-span-8 text-left">
              
              <div className="flex items-center justify-between mb-3">
                <p className="font-mono text-xs uppercase tracking-wider text-slate-400 font-semibold">
                  Workflow bên trong node
                </p>
                <div className="flex items-center gap-3 text-[11px] font-mono">
                  <span className="inline-flex items-center gap-1 text-indigo-300">
                    <span className="h-2 w-2 rounded-full bg-indigo-400"></span> Agent (Tự động)
                  </span>
                  <span className="inline-flex items-center gap-1 text-amber-300">
                    <span className="h-2 w-2 rounded-full bg-amber-400"></span> Người (Phê duyệt)
                  </span>
                </div>
              </div>

              {/* 3-Part Flow Container (Input -> 4 Steps -> Output) */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-stretch">
                
                {/* Input Box */}
                <div className="md:col-span-3 rounded-2xl border border-dashed border-rose-400/40 bg-rose-500/10 p-3.5 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-rose-300 font-semibold">
                      ĐẦU VÀO
                    </span>
                    <p className="mt-2 text-xs text-slate-200 leading-relaxed">
                      {active.input}
                    </p>
                  </div>
                </div>

                {/* 4 Steps in Center */}
                <div className="md:col-span-6 grid grid-cols-2 gap-2.5">
                  {active.flow.map((f, fIdx) => {
                    const FIcon = f.icon;
                    const isHuman = f.actor === "Người";
                    return (
                      <div
                        key={fIdx}
                        className="rounded-xl border border-slate-700/90 bg-slate-800/90 p-3 flex flex-col justify-between text-left"
                      >
                        <div className="flex items-center justify-between gap-1.5">
                          <FIcon className="h-3.5 w-3.5 text-indigo-300 shrink-0" />
                          <span
                            className={`font-mono text-[9.5px] px-2 py-0.5 rounded-full font-semibold ${
                              isHuman
                                ? "bg-amber-400/15 text-amber-300 border border-amber-400/30"
                                : "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                            }`}
                          >
                            {f.actor}
                          </span>
                        </div>
                        <div className="mt-2">
                          <span className="font-mono text-[10px] text-slate-400">{f.step}</span>
                          <p className="text-xs font-bold text-white leading-tight mt-0.5">{f.label}</p>
                          <p className="text-[11px] text-slate-400 leading-snug mt-1">{f.note}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Output Box */}
                <div className="md:col-span-3 rounded-2xl border border-teal-400/40 bg-teal-500/15 p-3.5 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-teal-300 font-semibold">
                      ĐẦU RA
                    </span>
                    <p className="mt-2 text-xs text-white font-medium leading-relaxed">
                      {active.output}
                    </p>
                  </div>
                  <p className="mt-2 font-mono text-[11px] font-semibold text-teal-300 bg-teal-900/40 p-1.5 rounded border border-teal-500/30">
                    ⏱️ SLA: {active.sla}
                  </p>
                </div>

              </div>

              {/* Loop Bar */}
              <div className="mt-3.5 flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300">
                <CornerDownLeft className="h-3.5 w-3.5 text-teal-400 shrink-0" />
                <span className="leading-snug">{active.loop}</span>
              </div>

              {/* Technical Modules Grid */}
              <div className="mt-6 pt-5 border-t border-slate-700/80">
                <p className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-3 font-semibold">
                  Module & năng lực kỹ thuật
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {active.items.map((item, itIdx) => (
                    <div
                      key={itIdx}
                      className="rounded-xl border border-white/10 bg-white/5 p-3.5"
                    >
                      <span className="font-mono text-[11px] text-indigo-300 font-semibold">{item.code}</span>
                      <p className="text-xs font-bold text-white mt-1">{item.label}</p>
                      <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">{item.note}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
