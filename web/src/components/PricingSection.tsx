"use client";

import React, { useState } from "react";
import { Gift, Check, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

export default function PricingSection() {
  const [showPricing, setShowPricing] = useState(true);

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
        "8 – 12 bài E-E-A-T đa kênh / tháng",
        "Kho dữ liệu & bảng giá gốc cập nhật hàng tháng",
        "LiveChat website & tiếp đón cơ bản",
        "Báo cáo quản trị tóm tắt hàng tháng",
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
        "Kho dữ liệu trung tâm real-time đa kênh",
        "Tiếp đón đa kênh: Web + Fanpage + Zalo OA + Email",
        "Báo Cáo Quản Trị 1 Trang real-time",
        "Báo giá đa kênh PDF vector 8s kèm VietQR",
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
        "Kho dữ liệu trung tâm + tra cứu thông số đa tầng",
        "CSKH đa kênh + tự phân loại Deal vào CRM",
        "Dashboard + mô phỏng kịch bản What-If",
        "Báo giá 8s + chiết khấu đa tầng phức tạp",
        "Dự toán BOQ & lập hồ sơ kỹ thuật trong 30 phút",
        "Hỗ trợ ưu tiên 4 giờ + cố vấn chiến lược 1-1",
      ],
    },
  ];

  return (
    <section id="mo-hinh" className="py-16 sm:py-24 bg-gradient-to-br from-[#1E293B] via-[#16233A] to-[#0F172A] text-white">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-8 lg:px-10 text-center">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto mb-6">
          <span className="text-xs font-bold uppercase tracking-[0.11em] text-indigo-300 bg-white/5 px-3.5 py-1 rounded-full border border-white/15">
            MÔ HÌNH HỢP TÁC &amp; CHI PHÍ
          </span>
          <h2 className="mt-3.5 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Ba Mức Phạm Vi Triển Khai — Minh Bạch Ngân Sách Đầu Tư
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            Sprint kiến trúc 4 tuần, sau đó đồng hành vận hành theo tháng. Phạm vi công việc rõ ràng ngay từ đầu; mức đầu tư chính xác sẽ được xác nhận sau buổi khám sức khỏe vận hành.
          </p>
        </div>

        {/* Pricing Mode Toggle */}
        <div className="flex justify-center mb-8">
          <button
            type="button"
            onClick={() => setShowPricing(!showPricing)}
            className="text-xs font-semibold text-slate-400 hover:text-white underline underline-offset-4 cursor-pointer transition-colors"
          >
            {showPricing ? "← Chuyển chế độ: Báo giá theo quy mô" : "Hiển thị khung Retainer tham khảo →"}
          </button>
        </div>

        {/* Ultimate 0-Setup Offer Banner */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold shadow-xs">
            <Gift className="h-4 w-4 text-amber-400 shrink-0" />
            <span>
              The Ultimate 0-Setup Offer — Miễn phí 100% phí setup kiến trúc (20M–35M) khi cam kết 6 tháng trả trước theo quý · Dành cho nhóm doanh nghiệp tiên phong
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
        <div className="mt-10 max-w-3xl mx-auto rounded-2xl bg-white/[0.04] border border-white/10 p-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal flex items-start gap-3 text-left">
          <ShieldCheck className="h-5 w-5 text-teal-400 shrink-0 mt-0.5" />
          <span>
            <strong>🛡️ Cam kết QBR ngày thứ 75:</strong> Nếu hệ thống không đạt các tiêu chuẩn vận hành hai bên đã thống nhất tại hợp đồng, Trang Anh AI hoàn 100% chi phí dịch vụ của tháng tiếp theo và doanh nghiệp vẫn giữ lại toàn bộ cơ sở dữ liệu đã làm sạch cùng tài liệu quy trình SOP.
          </span>
        </div>

      </div>
    </section>
  );
}
