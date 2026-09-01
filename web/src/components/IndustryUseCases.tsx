"use client";

import React, { useState } from "react";
import { Droplet, Wrench, Globe2, CheckCircle2, ArrowRight, Clock, Zap } from "lucide-react";

export default function IndustryUseCases() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      name: "Hóa Chất & Lọc Nước",
      icon: Droplet,
      title: "Ngành Hóa Chất, Môi Trường & Vật Liệu Lọc",
      speedBefore: "25 Phút",
      speedAfter: "8 Giây",
      points: [
        "Bóc tách tiếng lóng Zalo: Tự động hiểu 'than gd 6-12', 'hạt cation C100E', 'PAC vàng', 'màng RO 8040'.",
        "Tra cứu TDS & CO/CQ trong 5 giây: Nắm trọn thông số kỹ thuật, nguồn gốc xuất xứ, kiểm định Quatest.",
        "Lập dự toán BOQ trong 2 phút: Nhập lưu lượng công trình, hệ thống tự động tính khối lượng vật liệu.",
      ],
    },
    {
      id: 1,
      name: "Van & Phụ Kiện M&E",
      icon: Wrench,
      title: "Ngành Van Công Nghiệp, Đường Ống & Cơ Điện",
      speedBefore: "30 Phút",
      speedAfter: "8 Giây",
      points: [
        "Bóc tách chuẩn kỹ thuật: Phân biệt chính xác chuẩn áp lực PN10/PN16, mặt bích BS/DIN, gang/inox.",
        "Bóc tách hồ sơ thầu HSMT trong 30 phút: Xuất Ma trận tuân thủ tiêu chuẩn cho dự án nhà máy.",
        "Định giá chiết khấu đại lý linh hoạt: Áp dụng chiết khấu cấp 1, cấp 2 tự động theo dự án.",
      ],
    },
    {
      id: 2,
      name: "Doanh Nghiệp Đa Website",
      icon: Globe2,
      title: "Chủ Doanh Nghiệp Sở Hữu Từ 1 Đến 3+ Website Vệ Tinh",
      speedBefore: "Tốn 35tr/tháng",
      speedAfter: "1 Hub Duy Nhất",
      points: [
        "Quản trị tập trung 1–3+ site vệ tinh: Phân luồng dữ liệu tự động, không sợ trùng lặp nội dung.",
        "Xuất bản 16–24 bài viết kỹ thuật/tháng: Nội dung chuyên sâu chuẩn ngành phục vụ khách hàng B2B.",
        "Chuẩn hóa dữ liệu tìm kiếm số: Tăng tỷ lệ khách hàng B2B tìm thấy doanh nghiệp trên Google.",
      ],
    },
  ];

  return (
    <section id="use-cases" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488]">
            ỨNG DỤNG THỰC CHIẾN
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E293B] tracking-tight">
            Đo Ni Đóng Giày Cho Từng Ngành B2B
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Nắm vững đặc thù bảng giá và thuật ngữ kỹ thuật riêng biệt của từng lĩnh vực.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 rounded-xl px-5 py-3 text-xs sm:text-sm font-bold transition-all ${
                  isActive
                    ? "bg-[#1E293B] text-white shadow-md scale-102"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? "text-[#0D9488]" : "text-slate-500"}`} />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Box */}
        <div className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-6 sm:p-10 text-left max-w-4xl mx-auto shadow-subtle">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-slate-200 pb-4">
            <h3 className="text-lg sm:text-xl font-extrabold text-[#1E293B]">
              {tabs[activeTab].title}
            </h3>
            
            {/* Speed Badge */}
            <div className="flex items-center gap-2 text-xs font-bold">
              <span className="rounded-lg bg-rose-100 px-2.5 py-1 text-rose-700 line-through">
                {tabs[activeTab].speedBefore}
              </span>
              <span className="text-slate-400">→</span>
              <span className="rounded-lg bg-emerald-100 px-2.5 py-1 text-emerald-800 flex items-center gap-1 font-black">
                <Zap className="h-3 w-3" /> {tabs[activeTab].speedAfter}
              </span>
            </div>
          </div>

          <div className="space-y-3.5">
            {tabs[activeTab].points.map((pt, pIdx) => (
              <div key={pIdx} className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 text-[#0D9488] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                  {pt}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200 flex justify-end">
            <a
              href="#dang-ky"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0D9488] hover:underline"
            >
              <span>Nhận demo giải pháp cho ngành của bạn</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
