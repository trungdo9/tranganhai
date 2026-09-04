"use client";

import React, { useState } from "react";
import { Gift, Check, ArrowRight, Sparkles } from "lucide-react";

export default function PricingSection() {
  const [showPricing, setShowPricing] = useState(false);

  const tiers = [
    {
      tier: "Gói 1 — Foundation",
      name: "Nền tảng",
      price: showPricing ? "12.500.000 đ/tháng" : "Báo giá theo quy mô",
      setupNote: showPricing ? "Miễn phí 20M Setup khi trả theo quý" : "Khảo sát sau buổi Audit",
      cta: "Nhận phạm vi chi tiết",
      featured: false,
      features: [
        "01 website chính",
        "8 – 12 bài E-E-A-T / tháng",
        "Master RAG Lake cập nhật hàng tháng",
        "LiveChat website cơ bản",
        "Báo cáo tóm tắt hàng tháng",
        "SLA hỗ trợ 48 giờ làm việc",
      ],
    },
    {
      tier: "Gói 2 — Growth",
      name: "Tăng trưởng",
      price: showPricing ? "24.000.000 đ/tháng" : "Báo giá theo quy mô",
      setupNote: showPricing ? "Miễn phí 25M Setup khi trả theo quý" : "Khảo sát sau buổi Audit",
      cta: "Gói chủ lực — nhận phạm vi",
      featured: true,
      badge: "GÓI CHỦ LỰC (85% DN LỰA CHỌN)",
      features: [
        "1 – 3 website vệ tinh",
        "16 – 24 bài E-E-A-T đa site / tháng",
        "Master RAG Lake real-time đa kênh",
        "LiveChat Web + Fanpage + Zalo OA",
        "Báo Cáo Quản Trị 1 Trang real-time",
        "Zalo Copilot báo giá PDF 8 giây",
        "SLA 24 giờ + họp QBR mỗi quý",
      ],
    },
    {
      tier: "Gói 3 — Enterprise",
      name: "Toàn diện",
      price: showPricing ? "41.500.000 đ/tháng" : "Báo giá theo quy mô",
      setupNote: showPricing ? "Miễn phí 35M Setup khi trả theo quý" : "Khảo sát sau buổi Audit",
      cta: "Nhận phạm vi chi tiết",
      featured: false,
      features: [
        "3 – 5+ website vệ tinh",
        "30+ bài E-E-A-T + tài liệu kỹ thuật",
        "Master Lake + Hybrid Semantic Search",
        "CSKH đa kênh + tự phân loại Deal",
        "Dashboard + mô phỏng What-If",
        "Báo giá 8s + chiết khấu đa tầng",
        "BOQ thủy lực & HSĐXKT trong 30 phút",
        "Hỗ trợ ưu tiên 4 giờ + cố vấn 1-1",
      ],
    },
  ];

  return (
    <section id="mo-hinh" className="py-16 sm:py-24 bg-gradient-to-br from-[#1E293B] via-[#16233A] to-[#0F172A] text-white">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-8 lg:px-10 text-center">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto mb-6">
          <span className="text-xs font-bold uppercase tracking-[0.11em] text-indigo-300 bg-white/5 px-3.5 py-1 rounded-full border border-white/15">
            MÔ HÌNH HỢP TÁC
          </span>
          <h2 className="mt-3.5 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Ba Mức Phạm Vi Triển Khai — Chi Phí Báo Riêng Theo Quy Mô
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            Sprint kiến trúc 4 tuần, sau đó đồng hành vận hành theo tháng. Phạm vi công việc rõ ràng ngay từ đầu; mức đầu tư được báo riêng sau buổi khám sức khỏe vận hành.
          </p>
        </div>

        {/* Pricing Mode Toggle */}
        <div className="flex justify-center mb-8">
          <button
            type="button"
            onClick={() => setShowPricing(!showPricing)}
            className="text-xs font-semibold text-slate-400 hover:text-white underline underline-offset-4 cursor-pointer transition-colors"
          >
            {showPricing ? "← Xem chế độ Báo giá theo quy mô" : "Hiển thị khung Retainer tham khảo →"}
          </button>
        </div>

        {/* Ultimate 0-Setup Offer Banner */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold shadow-xs">
            <Gift className="h-4 w-4 text-amber-400 shrink-0" />
            <span>
              Ultimate 0-Setup Offer — miễn phí kiến trúc khi cam kết 6 tháng, thu trước theo quý · giới hạn nhóm doanh nghiệp tiên phong
            </span>
          </div>
        </div>

        {/* 3 Scope Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left items-stretch">
          {tiers.map((t, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all relative overflow-hidden ${
                t.featured
                  ? "bg-white text-slate-900 shadow-2xl ring-2 ring-indigo-500"
                  : "bg-white/[0.05] text-white border border-white/10 hover:border-white/20"
              }`}
            >
              {/* Featured Ribbon */}
              {t.featured && (
                <div className="absolute top-0 inset-x-0 bg-gradient-to-r from-indigo-600 via-indigo-500 to-teal-600 text-white text-[10.5px] font-bold text-center py-1 tracking-wider uppercase">
                  {t.badge}
                </div>
              )}

              <div className={t.featured ? "pt-3" : ""}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {t.tier}
                  </span>
                </div>

                <h3 className={`text-xl font-bold mb-3 ${t.featured ? "text-slate-900" : "text-white"}`}>
                  {t.name}
                </h3>

                <div className="pb-4 mb-5 border-b border-slate-200/40">
                  <div className={`font-mono text-2xl font-black ${t.featured ? "text-indigo-600" : "text-teal-400"}`}>
                    {t.price}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1 font-normal">
                    {t.setupNote}
                  </div>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm mb-6">
                  {t.features.map((f, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <Check className={`h-4 w-4 shrink-0 mt-0.5 ${t.featured ? "text-[#0D9488]" : "text-teal-400"}`} />
                      <span className={t.featured ? "text-slate-700" : "text-slate-300"}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#dang-ky"
                className={`w-full inline-flex items-center justify-center gap-2 rounded-xl py-3 text-xs sm:text-sm font-semibold transition-all text-center ${
                  t.featured
                    ? "bg-[#0D9488] hover:bg-[#0f766e] text-white shadow-md shadow-teal-900/20"
                    : "bg-white/10 hover:bg-white/15 text-white border border-white/20"
                }`}
              >
                <span>{t.cta}</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        {/* QBR Day 75 Guarantee Note */}
        <p className="mt-10 max-w-3xl mx-auto text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
          🛡️ Buổi rà soát QBR vào ngày thứ 75: nếu hệ thống không đạt các tiêu chuẩn vận hành hai bên đã thống nhất, doanh nghiệp được hoàn chi phí dịch vụ của tháng tiếp theo và giữ toàn bộ dữ liệu đã làm sạch.
        </p>

      </div>
    </section>
  );
}
