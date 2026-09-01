"use client";

import React, { useState } from "react";
import { Check, Zap, Sparkles, ShieldCheck, Layers, ArrowRight, X } from "lucide-react";

export default function PricingSection() {
  const [viewMode, setViewMode] = useState<"workflow" | "cards">("workflow");

  const workflowSteps = [
    {
      step: "01",
      name: "BẢNG GIÁ & DATA",
      pain: "Excel gộp ô, giá nằm trong đầu sếp",
      solution: "Số hóa kho CSDL chuẩn 100% không nhầm giá",
      g1: "01 Bảng giá chuẩn",
      g2: "Đa bảng giá liên tục",
      g3: "Toàn bộ CSDL & HSMT",
      highlight: false,
    },
    {
      step: "02",
      name: "ĐA WEBSITE VỆ TINH",
      pain: "Thuê agency tốn 25tr/tháng ra bài rác",
      solution: "1 Hub xuất bản 16–24 bài kỹ thuật chuẩn SEO",
      g1: "01 Web (8–12 bài)",
      g2: "1–3 Web (16–24 bài)",
      g3: "3–5+ Web (24–40 bài)",
      highlight: false,
    },
    {
      step: "03",
      name: "BÁO GIÁ ZALO 8S",
      pain: "Mất đơn vì báo giá chậm 30 phút",
      solution: "1 Phím tắt Zalo xuất PDF Typst có VietQR trong 8s",
      g1: "—",
      g2: "⚡ BÁO GIÁ ZALO 8S",
      g3: "⚡ Báo giá 8s + Chiết khấu",
      highlight: true,
    },
    {
      step: "04",
      name: "TRỰC KHÁCH 24/7",
      pain: "Ngoài giờ không ai trực, mất cơ hội",
      solution: "Trực Web LiveChat, Fanpage, Zalo OA tự đẩy CRM",
      g1: "Web Chat cơ bản",
      g2: "Web + Fanpage + Zalo OA",
      g3: "Toàn kênh + Chấm điểm Lead",
      highlight: false,
    },
    {
      step: "05",
      name: "DASHBOARD CEO",
      pain: "Sếp mù mờ số liệu, chờ báo cáo 1 tuần",
      solution: "Báo cáo 1-Trang real-time trên mobile cho Giám Đốc",
      g1: "Báo cáo tháng tĩnh",
      g2: "📊 Dashboard Real-time",
      g3: "Dashboard + Mô phỏng What-If",
      highlight: false,
    },
  ];

  const packages = [
    {
      name: "GÓI 1: NỀN TẢNG",
      sub: "Foundation Operations",
      price: "12.500.000",
      setupOld: "20.000.000 đ",
      term: "Thu trước Quý 1: 37.5tr",
      featured: false,
      features: [
        "Quản trị chăm sóc 01 Website chính",
        "Master Data Lake cập nhật catalogue hàng tháng",
        "8 – 12 bài viết kỹ thuật chuẩn SEO",
        "Trực Web LiveChat 24/7 cơ bản",
        "Báo cáo Quản trị CEO 1 trang gửi cuối tháng",
      ],
    },
    {
      name: "GÓI 2: TĂNG TRƯỞNG",
      sub: "Tăng Trưởng Đa Web & Báo Giá 8s",
      price: "24.000.000",
      setupOld: "25.000.000 đ",
      term: "Thu trước Quý 1: 72.0tr",
      featured: true,
      ribbon: "⭐ ĐƯỢC LỰA CHỌN NHIỀU NHẤT",
      features: [
        "Quản trị 1 – 3 Website vệ tinh tập trung",
        "⚡ TRỢ LÝ BÁO GIÁ ZALO 8 GIÂY (Phím tắt 1-chạm)",
        "Master Data Lake phân luồng real-time",
        "16 – 24 bài viết kỹ thuật đa kênh chuẩn SEO",
        "Trực khách 24/7 trên Web + Fanpage + Zalo OA",
        "📊 Executive BI Dashboard 1-Trang trên mobile",
        "Tự động đẩy Lead từ Web sang CRM & Sales",
      ],
    },
    {
      name: "GÓI 3: TOÀN DIỆN",
      sub: "Enterprise Operations",
      price: "41.500.000",
      setupOld: "35.000.000 đ",
      term: "Thu trước Quý 1: 124.5tr",
      featured: false,
      features: [
        "Quản trị 3 – 5+ Website vệ tinh không giới hạn",
        "Toàn bộ quyền lợi Gói Tăng Trưởng",
        "Báo Giá 8s + Chiết khấu đa tầng tự động",
        "Bóc tách Hồ sơ Thầu HSMT trong 30 phút",
        "Tính toán kỹ thuật & Lập dự toán BOQ 2 phút",
        "Dashboard Real-time + Cố vấn 1-1 hàng tháng",
      ],
    },
  ];

  return (
    <section id="bang-gia" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#4F46E5]">
            BẢNG GIÁ & LUỒNG VẬN HÀNH
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E293B] tracking-tight">
            Minh Bạch Chi Phí & Phạm Vi Giải Quyết
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Giải quyết triệt để 5 điểm nghẽn dòng tiền — Cam kết hoàn tiền tại Ngày 75 (QBR).
          </p>

          {/* Toggle View Mode */}
          <div className="mt-6 inline-flex items-center rounded-xl bg-slate-100 p-1 border border-slate-200">
            <button
              onClick={() => setViewMode("workflow")}
              className={`flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs sm:text-sm font-bold transition-all ${
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
              className={`flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs sm:text-sm font-bold transition-all ${
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

        {/* Breakthrough Offer Banner */}
        <div className="mb-10 max-w-4xl mx-auto rounded-2xl border-2 border-[#0D9488] bg-[#F0FDFA] p-5 sm:p-6 text-center shadow-xs">
          <span className="rounded-full bg-[#0D9488] px-3 py-1 text-[11px] font-black text-white uppercase tracking-wider inline-block mb-2">
            🎁 THE ULTIMATE 0-SETUP OFFER
          </span>
          <h3 className="text-lg sm:text-xl font-extrabold text-[#1E293B]">
            TÀI TRỢ MIỄN PHÍ 100% PHÍ THIẾT LẬP (TIẾT KIỆM ĐẾN 35 TRIỆU)
          </h3>
          <p className="mt-1 text-xs text-slate-600">
            Áp dụng khi ký Hợp đồng Retainer 06 tháng (Thu trước theo Quý). Dành cho <strong>20 Doanh nghiệp Tiên phong</strong>.
          </p>
        </div>

        {/* VIEW 1: WORKFLOW MATRIX VIEW */}
        {viewMode === "workflow" && (
          <div className="max-w-5xl mx-auto overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-[#1E293B]">
                    <th className="p-3.5 sm:p-4 font-bold uppercase tracking-wider w-2/5">
                      Luồng Vận Hành & Nỗi Đau
                    </th>
                    <th className="p-3.5 sm:p-4 font-bold uppercase tracking-wider w-1/5 text-center">
                      Gói 1: Nền Tảng <br />
                      <span className="text-xs font-normal text-slate-500">12.5tr/tháng</span>
                    </th>
                    <th className="p-3.5 sm:p-4 font-bold uppercase tracking-wider w-1/5 text-center bg-indigo-50 text-[#4F46E5] border-x border-indigo-200">
                      ⭐ Gói 2: Tăng Trưởng <br />
                      <span className="text-xs font-bold text-[#0D9488]">24tr/tháng (HERO)</span>
                    </th>
                    <th className="p-3.5 sm:p-4 font-bold uppercase tracking-wider w-1/5 text-center">
                      Gói 3: Toàn Diện <br />
                      <span className="text-xs font-normal text-slate-500">41.5tr/tháng</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {workflowSteps.map((wf, idx) => (
                    <tr key={idx} className={`hover:bg-slate-50/80 transition-colors ${wf.highlight ? "bg-amber-50/30" : ""}`}>
                      <td className="p-3.5 sm:p-4 align-top">
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className="flex h-5 w-5 items-center justify-center rounded bg-[#1E293B] text-[10px] font-bold text-white">
                            {wf.step}
                          </span>
                          <span className="font-bold text-[#1E293B] text-xs sm:text-sm">
                            {wf.name}
                          </span>
                          {wf.highlight && (
                            <span className="rounded bg-rose-100 px-1.5 py-0.5 text-[9px] font-bold text-rose-700">
                              Mũi Khoan
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-rose-700 mb-1">
                          <strong>Nỗi đau:</strong> {wf.pain}
                        </div>
                        <div className="text-[11px] text-slate-600">
                          <strong className="text-[#0D9488]">Giải pháp:</strong> {wf.solution}
                        </div>
                      </td>

                      <td className="p-3.5 sm:p-4 align-middle text-center text-xs text-slate-700 font-medium">
                        {wf.g1 === "—" ? <span className="text-slate-300 font-bold">—</span> : wf.g1}
                      </td>

                      <td className="p-3.5 sm:p-4 align-middle text-center text-xs text-[#1E293B] font-bold bg-indigo-50/20 border-x border-indigo-100">
                        {wf.g2}
                      </td>

                      <td className="p-3.5 sm:p-4 align-middle text-center text-xs text-slate-700 font-medium">
                        {wf.g3}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table Footer */}
            <div className="bg-slate-50 p-4 text-center border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-slate-600 font-medium">
                💡 85% Doanh nghiệp lựa chọn <strong>Gói Tăng Trưởng (24tr/tháng)</strong> để kích hoạt Báo Giá Zalo 8s.
              </span>
              <a
                href="#dang-ky"
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#0D9488] px-4 py-2 text-xs font-bold text-white shadow-teal hover:bg-[#0f766e]"
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
                    ? "border-2 border-[#4F46E5] bg-white shadow-brand ring-4 ring-indigo-50 lg:-translate-y-1.5"
                    : "border border-slate-200 bg-[#F8FAFC] shadow-xs"
                }`}
              >
                {pkg.ribbon && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#4F46E5] px-3 py-0.5 text-[10px] font-black text-white uppercase tracking-wider shadow">
                    {pkg.ribbon}
                  </div>
                )}

                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                    {pkg.sub}
                  </span>
                  <h4 className="text-lg font-extrabold text-[#1E293B] mt-0.5">
                    {pkg.name}
                  </h4>

                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-3xl font-black tracking-tight text-[#1E293B]">
                      {pkg.price}
                    </span>
                    <span className="text-xs font-bold text-slate-500">đ / tháng</span>
                  </div>

                  <div className="mt-1 text-xs text-slate-500 font-medium">
                    Phí Setup 4 tuần: <span className="line-through text-slate-400">{pkg.setupOld}</span>{" "}
                    <strong className="text-[#0D9488]">&rarr; MIỄN PHÍ</strong>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    {pkg.term}
                  </div>

                  <div className="mt-5 pt-5 border-t border-slate-200/80 space-y-2.5">
                    {pkg.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <Check className="h-3.5 w-3.5 text-[#0D9488] shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-700 font-medium leading-snug">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3">
                  <a
                    href="#dang-ky"
                    className={`w-full block text-center rounded-xl py-2.5 text-xs font-bold transition-all ${
                      pkg.featured
                        ? "bg-[#4F46E5] text-white shadow hover:bg-indigo-700"
                        : "bg-[#1E293B] text-white hover:bg-slate-800"
                    }`}
                  >
                    Chọn Gói & Đặt Lịch Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Guarantee Banner */}
        <div className="mt-8 rounded-xl bg-slate-50 border border-slate-200 p-3.5 text-center max-w-xl mx-auto flex items-center justify-center gap-2 text-xs text-slate-600 font-medium">
          <ShieldCheck className="h-4 w-4 text-[#0D9488] shrink-0" />
          <span>
            <strong>Bảo Đảm Hoàn Tiền Ngày 75 (QBR):</strong> Không tiết kiệm &ge; 30h/tháng &rarr; Hoàn 100% phí tháng tiếp theo.
          </span>
        </div>

      </div>
    </section>
  );
}
