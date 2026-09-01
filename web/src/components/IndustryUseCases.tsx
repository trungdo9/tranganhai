"use client";

import React, { useState } from "react";
import { Droplet, Wrench, Globe2, CheckCircle2, ArrowRight, Zap, Sparkles } from "lucide-react";

export default function IndustryUseCases() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      name: "Hóa Chất & Xử Lý Nước",
      icon: Droplet,
      title: "Ngành Hóa Chất, Môi Trường & Vật Liệu Lọc",
      speedBefore: "Mất 4–6 Giờ",
      speedAfter: "Tức thì (Real-time)",
      points: [
        "Hiện diện AI Search: ChatGPT trích dẫn bài viết website làm câu trả lời chuẩn.",
        "Tra cứu TDS & tính bồn lọc: Nắm trọn tiêu chuẩn Quatest, tính thể tích bồn lọc trong 2 phút.",
        "Báo giá VietQR tức thì: Xuất file PDF Vector theo quy cách bao/phuy kèm mã QR trong vài giây.",
      ],
    },
    {
      id: 1,
      name: "Van & Phụ Kiện Cơ Điện M&E",
      icon: Wrench,
      title: "Ngành Van Công Nghiệp, Đường Ống & Thiết Bị Cơ Điện",
      speedBefore: "Mất 1–2 Ngày",
      speedAfter: "2 Phút (BOQ Chuẩn)",
      points: [
        "Hiện diện chuyên ngành: Đứng đầu khi kỹ sư tìm kiếm tiêu chuẩn mặt bích DIN/BS, van inox 316.",
        "Lập BOQ vật tư 2 phút: Tự động bóc tách danh mục công trình và áp đúng giá sỉ.",
        "Hỗ trợ hồ sơ thầu: Bóc tách yêu cầu kỹ thuật HSMT, rút ngắn 70% thời gian làm hồ sơ.",
      ],
    },
    {
      id: 2,
      name: "Doanh Nghiệp Đa Website Vệ Tinh",
      icon: Globe2,
      title: "Chủ Doanh Nghiệp Sở Hữu Mạng Lưới Từ 1 Đến 3+ Website",
      speedBefore: "Tốn 35tr/tháng nuôi team",
      speedAfter: "1 Trung Tâm Duy Nhất",
      points: [
        "1 Kho tri thức — Đa website: Tự động phân luồng bài viết độc bản cho 1–3+ web vệ tinh.",
        "16–24 Bài E-E-A-T/tháng: Cung cấp nội dung chuyên gia, nuôi dưỡng khách hàng B2B.",
        "Tiết kiệm 80% chi phí: Thay thế việc thuê nhiều agency hay phòng marketing cồng kềnh.",
      ],
    },
  ];

  return (
    <section id="use-cases" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488] bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
            ỨNG DỤNG THỰC CHIẾN THEO NGÀNH
          </span>
          <h2 className="mt-3.5 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E293B] tracking-tight">
            Kiến Trúc May Đo Cho Từng Ngành B2B
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Giải quyết đặc thù bảng giá, tài liệu kỹ thuật và hành vi tìm kiếm riêng biệt của từng lĩnh vực.
          </p>
        </div>

        {/* Clean Minimalist Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-10">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 rounded-xl px-4 sm:px-5 py-3 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#1E293B] text-white shadow-sm"
                    : "bg-slate-100/80 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900"
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? "text-[#0D9488]" : "text-slate-500"}`} />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Box - Clean Card */}
        <div className="rounded-3xl border border-slate-200/90 bg-[#F8FAFC] p-6 sm:p-10 text-left max-w-4xl mx-auto shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-slate-200/80 pb-4">
            <h3 className="text-lg sm:text-xl font-bold text-[#1E293B]">
              {tabs[activeTab].title}
            </h3>
            
            {/* Speed Comparison Badge */}
            <div className="flex items-center gap-2 text-xs font-semibold">
              <span className="rounded-lg bg-rose-50 px-2.5 py-1 text-rose-700 border border-rose-100 line-through">
                {tabs[activeTab].speedBefore}
              </span>
              <span className="text-slate-400">→</span>
              <span className="rounded-lg bg-emerald-50 px-2.5 py-1 text-emerald-800 border border-emerald-200 flex items-center gap-1 font-bold">
                <Zap className="h-3 w-3 text-[#0D9488]" /> {tabs[activeTab].speedAfter}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            {tabs[activeTab].points.map((pt, pIdx) => (
              <div key={pIdx} className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 text-[#0D9488] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                  {pt}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-4 border-t border-slate-200/80 flex justify-end">
            <a
              href="#dang-ky"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0D9488] hover:text-[#0f766e] transition-colors"
            >
              <span>Nhận buổi khảo sát & demo cho ngành của bạn</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
