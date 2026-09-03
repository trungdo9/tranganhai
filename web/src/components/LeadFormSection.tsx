"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, Mail, Phone, Building2 } from "lucide-react";

export default function LeadFormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    company: "",
    bottleneck: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Đã có lỗi xảy ra. Vui lòng liên hệ hotline: 0912 345 678");
      }
    } catch {
      alert("Không thể kết nối máy chủ. Vui lòng liên hệ hotline: 0912 345 678");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="dang-ky" className="relative overflow-hidden bg-[#1E293B] text-white py-16 sm:py-24">
      {/* Background Radial Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(79,70,229,0.25),transparent_70%),radial-gradient(ellipse_at_bottom_left,rgba(13,148,136,0.20),transparent_70%)] pointer-events-none" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Heading */}
        <span className="text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-500/10 px-3.5 py-1 rounded-full border border-teal-500/20">
          BƯỚC TIẾP THEO
        </span>
        <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
          Khám Sức Khỏe Vận Hành. 2 Giờ Làm Việc, Trên Dữ Liệu Thật Của Bạn.
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
          Buổi audit kết thúc bằng một bản đồ điểm nghẽn và một live demo báo giá 8 giây chạy trên chính bảng giá của doanh nghiệp bạn — trước khi bàn tới hợp đồng.
        </p>

        {/* Action Form or Success State */}
        <div className="mt-10 max-w-xl mx-auto rounded-3xl bg-slate-800/80 border border-slate-700/80 p-6 sm:p-8 shadow-2xl backdrop-blur-xs text-left">
          {submitted ? (
            <div className="text-center py-6 space-y-3">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Đăng Ký Thành Công!</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm mx-auto">
                Chuyên gia kiến trúc của Trang Anh AI sẽ liên hệ với bạn trong vòng 2 giờ làm việc để chuẩn bị dữ liệu mẫu cho buổi Live Demo.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Họ và tên của bạn *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Nguyễn Văn A (CEO / Giám đốc kinh doanh)"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full rounded-xl bg-slate-900/90 border border-slate-700 px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-hidden focus:border-[#0D9488]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Số điện thoại / Zalo *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0912 345 678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-xl bg-slate-900/90 border border-slate-700 px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-hidden focus:border-[#0D9488]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Tên doanh nghiệp *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Công ty TNHH Thiết Bị..."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full rounded-xl bg-slate-900/90 border border-slate-700 px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-hidden focus:border-[#0D9488]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Điểm nghẽn vận hành lớn nhất cần giải quyết ngay
                </label>
                <input
                  type="text"
                  placeholder="Ví dụ: Báo giá chậm làm mất đơn, bảng giá Excel quá nhiều mã..."
                  value={formData.bottleneck}
                  onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                  className="w-full rounded-xl bg-slate-900/90 border border-slate-700 px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-hidden focus:border-[#0D9488]"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#0D9488] hover:bg-[#0f766e] text-white py-3 text-sm font-semibold transition-all shadow-md active:scale-98"
              >
                <span>{loading ? "Đang gửi đăng ký..." : "ĐĂNG KÝ KHÁM SỨC KHỎE VẬN HÀNH & LIVE DEMO"}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}

          {/* Quick Direct Contacts */}
          <div className="mt-6 pt-5 border-t border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <a href="mailto:contact@tranganhai.com" className="hover:text-white transition-colors flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-[#0D9488]" />
              <span>contact@tranganhai.com</span>
            </a>
            <a href="tel:0912345678" className="hover:text-white transition-colors flex items-center gap-1.5 font-mono">
              <Phone className="h-3.5 w-3.5 text-[#0D9488]" />
              <span>Hotline / Zalo: 0912 345 678</span>
            </a>
          </div>
        </div>

        {/* Footer Authority Note */}
        <p className="mt-10 font-mono text-xs text-slate-400">
          Trang Anh Systems Vietnam · tranganhai.com · Luật AI 134/2025/QH15 · Nghị định 356/2025/NĐ-CP
        </p>

      </div>
    </section>
  );
}
