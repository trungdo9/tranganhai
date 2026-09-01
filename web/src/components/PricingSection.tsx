"use client";

import React, { useState } from "react";
import { Check, Sparkles, ShieldCheck, Layers, ArrowRight, CheckCircle2 } from "lucide-react";

export default function PricingSection() {
  const [viewMode, setViewMode] = useState<"workflow" | "cards">("workflow");

  const workflowSteps = [
    {
      step: "01",
      name: "Bộ Não Tri Thức Số",
      pain: "Bảng giá gộp ô, dữ liệu nằm trong đầu sếp",
      solution: "Số hóa kho tri thức chuẩn 100%, cấm AI tính nhẩm",
      g1: "01 Bảng giá chuẩn",
      g2: "Đa bảng giá & Catalogue",
      g3: "Toàn bộ CSDL & Hồ sơ thầu",
      highlight: false,
    },
    {
      step: "02",
      name: "Hiện Diện AI Search (GEO)",
      pain: "Tàng hình trên ChatGPT, thuê agency ra bài rác",
      solution: "1 Hub xuất bản 16–24 bài E-E-A-T đa web chuẩn chuyên môn",
      g1: "01 Web (8–12 bài)",
      g2: "1–3 Web (16–24 bài)",
      g3: "3–5+ Web (30+ bài chuyên sâu)",
      highlight: false,
    },
    {
      step: "03",
      name: "Tiếp Đón 24/7 & CRM",
      pain: "Ngoài giờ không ai trực kênh, mất khách tiềm năng",
      solution: "AI trực Web LiveChat, Fanpage, Zalo OA tự bắt Lead & đồng bộ CRM",
      g1: "Web Chat cơ bản",
      g2: "Web + Fanpage + Zalo OA + CRM",
      g3: "Đa kênh toàn diện + Chấm điểm Lead CRM",
      highlight: false,
    },
    {
      step: "04",
      name: "Sales & Báo Giá Nhanh",
      pain: "Mất đơn vì báo giá chậm hàng giờ, tính nhầm chiết khấu",
      solution: "Dự toán BOQ 2 phút & Báo giá PDF VietQR có người duyệt 10s",
      g1: "—",
      g2: "⚡ Dự toán & Báo giá VietQR",
      g3: "⚡ Dự toán nâng cao + Hồ sơ thầu",
      highlight: true,
    },
    {
      step: "05",
      name: "Báo Cáo Quản Trị 1 Trang",
      pain: "CEO mù mờ số liệu, chờ nhân viên tổng hợp vài ngày",
      solution: "Màn hình điều hành thời gian thực trên mobile cho Lãnh Đạo",
      g1: "Báo cáo tháng tóm tắt",
      g2: "📊 Dashboard Real-time (Mobile)",
      g3: "Dashboard + Mô phỏng kịch bản",
      highlight: false,
    },
  ];

  const packages = [
    {
      name: "GÓI 1: NỀN TẢNG",
      sub: "Foundation Operations",
      price: "12.500.000",
      setupOld: "20.000.000 đ",
      term: "Thu trước Quý 1: 37.500.000 đ",
      featured: false,
      features: [
        "Quản trị 01 Website chính",
        "CSDL tri thức cập nhật định kỳ",
        "8–12 bài E-E-A-T tối ưu AI Search",
        "AI LiveChat trực Web 24/7",
        "Báo cáo quản trị gửi cuối tháng",
      ],
    },
    {
      name: "GÓI 2: TĂNG TRƯỞNG",
      sub: "Growth Operations (⭐ HERO)",
      price: "24.000.000",
      setupOld: "25.000.000 đ",
      term: "Thu trước Quý 1: 72.000.000 đ",
      featured: true,
      ribbon: "ĐƯỢC 85% DOANH NGHIỆP LỰA CHỌN",
      features: [
        "Quản trị 1–3 Website vệ tinh",
        "CSDL tri thức cập nhật đa kênh",
        "16–24 bài E-E-A-T phân luồng đa site",
        "⚡ Trợ lý BOQ 2p & Báo giá VietQR",
        "Trực khách 24/7: Web + Fanpage + Zalo",
        "📊 Báo Cáo Quản Trị Real-time (Mobile)",
        "Tự động đồng bộ Deal vào CRM",
      ],
    },
    {
      name: "GÓI 3: TOÀN DIỆN",
      sub: "Enterprise Operations",
      price: "41.500.000",
      setupOld: "35.000.000 đ",
      term: "Thu trước Quý 1: 124.500.000 đ",
      featured: false,
      features: [
        "Quản trị không giới hạn Web vệ tinh",
        "Toàn bộ CSDL & Trợ lý Hồ sơ thầu",
        "30+ bài E-E-A-T kỹ thuật chuyên sâu",
        "⚡ Dự toán công trình & Soạn thầu 30p",
        "CSKH đa kênh toàn diện + Lead Scoring",
        "📊 Dashboard CEO + Mô phỏng What-If",
        "Cố vấn chiến lược định kỳ 1:1 với Ban Giám Đốc",
      ],
    },
  ];

  return (
    <section id="bang-gia" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#4F46E5] bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
            BẢNG GIÁ ĐẦU TƯ MINH BẠCH
          </span>
          <h2 className="mt-3.5 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E293B] tracking-tight">
            Chi Phí Đầu Tư Minh Bạch — Cam Kết Hiệu Quả Vận Hành
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Giải quyết triệt để 5 nút thắt dòng tiền — Cam kết bảo đảm hoàn tiền tại Ngày 75 (QBR).
          </p>

          {/* Toggle View Mode Buttons */}
          <div className="mt-6 inline-flex items-center rounded-xl bg-slate-100/90 p-1 border border-slate-200/80">
            <button
              onClick={() => setViewMode("workflow")}
              className={`flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                viewMode === "workflow"
                  ? "bg-[#1E293B] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Layers className="h-4 w-4" />
              <span>Theo Luồng Vận Hành</span>
            </button>
            <button
              onClick={() => setViewMode("cards")}
              className={`flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                viewMode === "cards"
                  ? "bg-[#1E293B] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Sparkles className="h-4 w-4" />
              <span>Xem Thẻ Giá 3 Gói</span>
            </button>
          </div>
        </div>

        {/* The Ultimate 0-Setup Offer Banner */}
        <div className="mb-12 max-w-4xl mx-auto rounded-2xl border border-teal-300 bg-teal-50/60 p-5 sm:p-6 text-center shadow-xs">
          <span className="rounded-full bg-[#0D9488] px-3.5 py-1 text-[11px] font-bold text-white uppercase tracking-wider inline-block mb-2">
            🎁 THE ULTIMATE 0-SETUP OFFER
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-[#1E293B]">
            TẶNG MIỄN PHÍ 100% PHÍ THIẾT LẬP BAN ĐẦU (TIẾT KIỆM ĐẾN 35 TRIỆU)
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-slate-600">
            Áp dụng khi ký Hợp đồng Retainer 06 tháng (Thu trước theo Quý). Dành giới hạn cho <strong>20 Doanh nghiệp Tiên phong</strong>.
          </p>
        </div>

        {/* VIEW 1: WORKFLOW MATRIX VIEW */}
        {viewMode === "workflow" && (
          <div className="max-w-5xl mx-auto overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200/80 bg-slate-50/80 text-[#1E293B]">
                    <th className="p-4 font-bold uppercase tracking-wider w-2/5">
                      Luồng Vận Hành & Điểm Nghẽn
                    </th>
                    <th className="p-4 font-bold uppercase tracking-wider w-1/5 text-center">
                      Gói 1: Nền Tảng <br />
                      <span className="text-xs font-normal text-slate-500">12.5tr/tháng</span>
                    </th>
                    <th className="p-4 font-bold uppercase tracking-wider w-1/5 text-center bg-indigo-50/70 text-[#4F46E5] border-x border-indigo-100">
                      ⭐ Gói 2: Tăng Trưởng <br />
                      <span className="text-xs font-bold text-[#0D9488]">24tr/tháng (HERO)</span>
                    </th>
                    <th className="p-4 font-bold uppercase tracking-wider w-1/5 text-center">
                      Gói 3: Toàn Diện <br />
                      <span className="text-xs font-normal text-slate-500">41.5tr/tháng</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {workflowSteps.map((wf, idx) => (
                    <tr key={idx} className={`hover:bg-slate-50/60 transition-colors ${wf.highlight ? "bg-amber-50/25" : ""}`}>
                      <td className="p-4 align-top">
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className="flex h-5 w-5 items-center justify-center rounded bg-[#1E293B] text-[10px] font-bold text-white">
                            {wf.step}
                          </span>
                          <span className="font-bold text-[#1E293B] text-xs sm:text-sm">
                            {wf.name}
                          </span>
                          {wf.highlight && (
                            <span className="rounded bg-teal-100 px-1.5 py-0.5 text-[9px] font-bold text-teal-800">
                              Chủ Lực
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-rose-700 mb-0.5 font-medium">
                          <strong>Điểm nghẽn:</strong> {wf.pain}
                        </div>
                        <div className="text-[11px] text-slate-600">
                          <strong className="text-[#0D9488]">Giải pháp:</strong> {wf.solution}
                        </div>
                      </td>

                      <td className="p-4 align-middle text-center text-xs text-slate-700 font-medium">
                        {wf.g1 === "—" ? <span className="text-slate-300 font-bold">—</span> : wf.g1}
                      </td>

                      <td className="p-4 align-middle text-center text-xs text-[#1E293B] font-bold bg-indigo-50/30 border-x border-indigo-100">
                        {wf.g2}
                      </td>

                      <td className="p-4 align-middle text-center text-xs text-slate-700 font-medium">
                        {wf.g3}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table Footer */}
            <div className="bg-slate-50/80 p-4 text-center border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-slate-600 font-medium">
                💡 85% Doanh nghiệp lựa chọn <strong>Gói Tăng Trưởng (24tr/tháng)</strong> để kích hoạt trọn gói cỗ máy vận hành.
              </span>
              <a
                href="#dang-ky"
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#0D9488] px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-[#0f766e]"
              >
                <span>Đăng Ký Tư Vấn</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        )}

        {/* VIEW 2: TRADITIONAL CARDS VIEW */}
        {viewMode === "cards" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`relative rounded-2xl p-6 text-left flex flex-col justify-between transition-all ${
                  pkg.featured
                    ? "border-2 border-[#4F46E5] bg-white shadow-sm ring-4 ring-indigo-50/60 lg:-translate-y-1"
                    : "border border-slate-200/90 bg-[#F8FAFC] shadow-xs"
                }`}
              >
                {pkg.ribbon && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#4F46E5] px-3.5 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider shadow-xs">
                    {pkg.ribbon}
                  </div>
                )}

                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                    {pkg.sub}
                  </span>
                  <h4 className="text-lg font-bold text-[#1E293B] mt-0.5">
                    {pkg.name}
                  </h4>

                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-3xl font-black tracking-tight text-[#1E293B]">
                      {pkg.price}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">đ / tháng</span>
                  </div>

                  <div className="mt-1 text-xs text-slate-500 font-medium">
                    Phí Setup 4 tuần: <span className="line-through text-slate-400">{pkg.setupOld}</span>{" "}
                    <strong className="text-[#0D9488]">&rarr; MIỄN PHÍ</strong>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5 font-medium">
                    {pkg.term}
                  </div>

                  <div className="mt-5 pt-5 border-t border-slate-200/80 space-y-2.5">
                    {pkg.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <Check className="h-3.5 w-3.5 text-[#0D9488] shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-700 font-normal leading-relaxed">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3">
                  <a
                    href="#dang-ky"
                    className={`w-full block text-center rounded-xl py-2.5 text-xs font-semibold transition-all ${
                      pkg.featured
                        ? "bg-[#4F46E5] text-white shadow-xs hover:bg-indigo-700"
                        : "bg-[#1E293B] text-white hover:bg-slate-800"
                    }`}
                  >
                    Chọn Gói & Đặt Lịch Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Guarantee Banner */}
        <div className="mt-10 rounded-xl bg-slate-50 border border-slate-200/80 p-3.5 text-center max-w-xl mx-auto flex items-center justify-center gap-2 text-xs text-slate-600 font-medium">
          <ShieldCheck className="h-4 w-4 text-[#0D9488] shrink-0" />
          <span>
            <strong>Bảo Đảm Hoàn Tiền Ngày 75 (QBR):</strong> Không tiết kiệm &ge; 30h công/tháng &rarr; Hoàn 100% phí tháng tiếp theo.
          </span>
        </div>

      </div>
    </section>
  );
}
