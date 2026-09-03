"use client";

import React, { useState } from "react";
import { Check, X, Gift, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

export default function PricingSection() {
  const [isQuarterly, setIsQuarterly] = useState(true);

  const plans = [
    {
      name: "Nền tảng",
      tier: "GÓI 1 — FOUNDATION",
      priceMonthly: "12.500.000",
      priceQuarterly: "37.500.000",
      setupFee: "20.000.000 đ",
      equivalentNote: "Tương đương 12.500.000 đ / tháng",
      featured: false,
      cta: "Chọn gói Nền tảng",
      features: [
        { label: "Node 1 · Master RAG Lake (Core tri thức)", included: true },
        { label: "Node 3 · Agent 24/7 + Đồng bộ CRM (M3, M5)", included: true },
        { label: "Báo Cáo Quản Trị 1 Trang (M0)", included: true },
        { label: "Node 4 · Zalo Copilot báo giá 8 giây (M4)", included: false },
        { label: "Node 2 · Flow Content & GEO đa site (M1, M2)", included: false },
      ],
    },
    {
      name: "Tăng trưởng",
      tier: "GÓI 2 — GROWTH",
      ribbon: "ĐƯỢC 85% DOANH NGHIỆP LỰA CHỌN",
      priceMonthly: "24.000.000",
      priceQuarterly: "72.000.000",
      setupFee: "25.000.000 đ",
      equivalentNote: "Tương đương 24.000.000 đ / tháng",
      featured: true,
      cta: "Chọn gói Tăng trưởng",
      features: [
        { label: "Toàn bộ quyền lợi gói Nền tảng", included: true },
        { label: "Node 4 · Zalo Copilot báo giá 8 giây (M4)", included: true },
        { label: "Node 2 · E-E-A-T + GEO, 1-3 satellite site (M1, M2)", included: true },
        { label: "BOQ estimator bóc tách khối lượng (M6)", included: true },
        { label: "Node 4 · Tender copilot hồ sơ thầu (M7)", included: false },
      ],
    },
    {
      name: "Doanh nghiệp",
      tier: "GÓI 3 — ENTERPRISE",
      priceMonthly: "41.500.000",
      priceQuarterly: "124.500.000",
      setupFee: "35.000.000 đ",
      equivalentNote: "Tương đương 41.500.000 đ / tháng",
      featured: false,
      cta: "Đặt buổi tư vấn kiến trúc",
      features: [
        { label: "Toàn bộ 5 Node · 8 module hoàn chỉnh", included: true },
        { label: "Tender copilot (M7) + 3+ satellite site", included: true },
        { label: "Mô phỏng what-if & phát hiện điểm nghẽn nâng cao", included: true },
        { label: "Kiến trúc viên riêng, rà soát ngày 75 (QBR)", included: true },
        { label: "Ưu tiên hỗ trợ khẩn cấp trong 2 giờ", included: true },
      ],
    },
  ];

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488] bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200/80">
            ĐẦU TƯ VẬN HÀNH
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E293B] tracking-tight">
            Ba Mức Retainer. Một Ưu Đãi 0-Setup.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Hợp đồng 6 tháng, trả trước theo quý — Trang Anh AI miễn toàn bộ phí kiến trúc 20–35 triệu. Không cam kết thứ hạng Google rủi ro ngoại cảnh; chỉ cam kết những gì hệ thống kiểm soát được.
          </p>
        </div>

        {/* 0-Setup Offer Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-1.5 text-xs font-semibold text-amber-800 border border-amber-200/80 shadow-2xs">
            <Gift className="h-4 w-4 text-amber-600" />
            <span>
              {isQuarterly
                ? "Ưu đãi 0-Setup: Trả trước theo quý, hợp đồng 6 tháng — miễn toàn bộ phí kiến trúc 20–35 triệu."
                : "Trả trước theo quý để nhận ưu đãi miễn 100% phí thiết lập ban đầu (20–35 triệu)."}
            </span>
          </div>
        </div>

        {/* Billing Cycle Toggle */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <span className={`text-xs sm:text-sm font-semibold ${!isQuarterly ? "text-[#1E293B]" : "text-slate-500"}`}>
            Thanh toán theo tháng
          </span>
          <button
            type="button"
            onClick={() => setIsQuarterly(!isQuarterly)}
            className="relative inline-flex h-6 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-[#4F46E5] transition-colors duration-200 ease-in-out focus:outline-hidden"
          >
            <span
              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                isQuarterly ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>
          <span className={`text-xs sm:text-sm font-semibold flex items-center gap-1.5 ${isQuarterly ? "text-[#4F46E5]" : "text-slate-500"}`}>
            <span>Theo Quý (Tiết kiệm Setup)</span>
            <span className="text-[10px] uppercase font-bold text-white bg-rose-500 px-1.5 py-0.5 rounded-full">Hot</span>
          </span>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, idx) => {
            const price = isQuarterly ? plan.priceQuarterly : plan.priceMonthly;
            const unit = isQuarterly ? "đ / quý" : "đ / tháng";

            return (
              <div
                key={idx}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between text-left transition-all ${
                  plan.featured
                    ? "bg-[#1E293B] text-white shadow-2xl ring-2 ring-[#4F46E5] lg:-translate-y-2"
                    : "bg-white text-slate-800 border border-slate-200 shadow-sm"
                }`}
              >
                {/* Featured Ribbon */}
                {plan.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#0D9488] px-4 py-1 text-[11px] font-bold tracking-wider text-white uppercase shadow-sm">
                    {plan.ribbon}
                  </div>
                )}

                <div>
                  {/* Tier Subtitle */}
                  <span className={`font-mono text-xs uppercase tracking-widest font-semibold ${plan.featured ? "text-indigo-300" : "text-indigo-600"}`}>
                    {plan.tier}
                  </span>

                  {/* Plan Name */}
                  <h3 className={`mt-2 text-2xl font-extrabold ${plan.featured ? "text-white" : "text-[#1E293B]"}`}>
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="mt-5 flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight">
                      {price}
                    </span>
                    <span className={`text-xs font-mono ${plan.featured ? "text-slate-300" : "text-slate-500"}`}>
                      {unit}
                    </span>
                  </div>

                  {/* Setup Fee Note */}
                  <div className="mt-3">
                    {isQuarterly ? (
                      <p className="text-xs font-semibold text-emerald-400 font-mono">
                        Phí kiến trúc {plan.setupFee} → <span className="underline">MIỄN PHÍ</span>
                      </p>
                    ) : (
                      <p className={`text-xs font-mono ${plan.featured ? "text-slate-400" : "text-slate-500"}`}>
                        Phí kiến trúc ban đầu: {plan.setupFee}
                      </p>
                    )}
                    {isQuarterly && (
                      <p className={`text-[11px] mt-0.5 ${plan.featured ? "text-slate-400" : "text-slate-500"}`}>
                        {plan.equivalentNote}
                      </p>
                    )}
                  </div>

                  {/* Features List */}
                  <ul className="mt-8 space-y-3.5 border-t pt-6 border-slate-200/20 text-xs sm:text-sm">
                    {plan.features.map((f, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        {f.included ? (
                          <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        ) : (
                          <X className="h-4 w-4 text-slate-500 shrink-0 mt-0.5 opacity-40" />
                        )}
                        <span className={f.included ? (plan.featured ? "text-slate-200 font-medium" : "text-slate-700") : "text-slate-400 line-through"}>
                          {f.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="mt-8 pt-6 border-t border-slate-200/20">
                  <a
                    href="#dang-ky"
                    className={`w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all shadow-xs ${
                      plan.featured
                        ? "bg-[#0D9488] text-white hover:bg-[#0f766e]"
                        : "bg-[#1E293B] text-white hover:bg-slate-800"
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
