"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Droplet, Wrench, Globe2 } from "lucide-react";

export default function IndustryUseCases() {
  const [activeTab, setActiveTab] = useState<"chem" | "valve" | "multi">("chem");

  const tabItems = [
    { id: "chem", label: "Hóa chất & Xử lý nước", icon: Droplet },
    { id: "valve", label: "Van & Cơ điện M&E", icon: Wrench },
    { id: "multi", label: "Đa website vệ tinh", icon: Globe2 },
  ];

  const cases = {
    chem: {
      label: "Hóa chất, vật liệu lọc & xử lý nước",
      image: "/images/usecases/chemical-water.jpg",
      rows: [
        {
          label: "Thu hút",
          body: 'Khách hỏi ChatGPT "So sánh than hoạt tính gáo dừa và than đá trong xử lý nước cấp?" — AI trích dẫn bài phân tích trên website của bạn.',
        },
        {
          label: "Bán hàng",
          body: "Khách gửi ảnh tem bao bì; trợ lý đối chiếu hồ sơ Quatest, chỉ số Iodine, tính thể tích bồn lọc và xuất báo giá kèm VietQR.",
        },
        {
          label: "Quản trị",
          body: "Ban Giám Đốc theo dõi nhu cầu tìm kiếm của các nhà máy công nghiệp theo từng khu vực.",
        },
      ],
    },
    valve: {
      label: "Van, thiết bị công nghiệp & Cơ điện M&E",
      image: "/images/usecases/valves-me.jpg",
      rows: [
        {
          label: "Thu hút",
          body: "Xuất hiện đầu tiên khi kỹ sư tra cứu mặt bích DIN, van điều khiển khí nén, thông số chịu áp PN16.",
        },
        {
          label: "Bán hàng",
          body: "Nhận danh mục dự án hàng chục mã vật tư: tự bóc tách quy cách, kiểm tra tồn kho, lập Bảng dự toán BOQ hoàn chỉnh.",
        },
        {
          label: "Quản trị",
          body: "Nắm tỷ lệ chuyển đổi từ báo giá dự thầu đến khi ký hợp đồng.",
        },
      ],
    },
    multi: {
      label: "Doanh nghiệp vận hành nhiều website vệ tinh",
      image: "/images/usecases/multisite-analytics.jpg",
      rows: [
        {
          label: "Bài toán",
          body: "Muốn mở rộng độ phủ bằng 2 – 3 website vệ tinh nhưng thiếu nhân sự viết bài và lo nội dung trùng lặp.",
        },
        {
          label: "Giải pháp",
          body: "Mô hình Một Trung Tâm — Đa Chi Nhánh: tri thức tập trung, hệ thống tự biên tập nội dung độc bản cho từng site.",
        },
        {
          label: "Kết quả",
          body: "Giảm đáng kể chi phí duy trì đội ngũ nội dung nội bộ.",
        },
      ],
    },
  };

  const currentCase = cases[activeTab];

  return (
    <section id="ung-dung" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-8 lg:px-10 text-center">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-[0.11em] text-teal-700 bg-teal-50 px-3.5 py-1 rounded-full border border-teal-100">
            ỨNG DỤNG THỰC TẾ THEO NGÀNH
          </span>
          <h2 className="mt-3.5 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Ứng Dụng AI Agent Theo Từng Ngành Kỹ Thuật &amp; Công Nghiệp
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabItems.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as "chem" | "valve" | "multi")}
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#1E293B] text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900"
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? "text-teal-400" : "text-slate-500"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Card */}
        <div className="rounded-2xl border border-slate-200/90 bg-[#F8FAFC] p-6 sm:p-8 text-left shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Responsive Industry Image */}
            <div className="lg:col-span-4 relative h-[240px] sm:h-[280px] rounded-xl overflow-hidden border border-slate-200/80 shadow-xs">
              <Image
                src={currentCase.image}
                alt={currentCase.label}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>

            {/* Right: 3 Tiered Case Rows */}
            <div className="lg:col-span-8 space-y-5">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug pb-2 border-b border-slate-200/70">
                {currentCase.label}
              </h3>

              <div className="space-y-4">
                {currentCase.rows.map((row, idx) => (
                  <div key={idx} className="space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700">
                      {row.label}
                    </span>
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-700 font-normal">
                      {row.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
