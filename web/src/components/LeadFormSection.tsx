"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, ShieldCheck, Sparkles, Lock, MessageCircle, PhoneCall, ArrowRight } from "lucide-react";

export default function LeadFormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    company: "",
    industry: "Hóa chất / Môi trường / Nước",
    websiteCount: "1 Website chính",
    honeypot: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;

    if (!formData.fullName || !formData.phone || !formData.company) {
      setErrorMsg("Vui lòng điền đầy đủ các thông tin bắt buộc (*).");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setErrorMsg("Có lỗi xảy ra trong quá trình gửi. Vui lòng thử lại hoặc liên hệ Hotline.");
      }
    } catch (err) {
      setErrorMsg("Kết nối mạng không ổn định. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="dang-ky" className="py-16 sm:py-24 bg-gradient-to-b from-[#F8FAFC] to-[#EEF2F6]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-lg shadow-slate-200/50 text-left">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-bold text-[#0D9488] border border-emerald-200/70 mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              <span>THE ULTIMATE 0-SETUP OFFER: TẶNG 100% PHÍ THIẾT LẬP (TIẾT KIỆM ĐẾN 35 TRIỆU)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E293B] tracking-tight">
              Đăng Ký Khám Sức Khỏe Vận Hành & Live Demo 45 Phút
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Nhận báo cáo phân tích các điểm nghẽn dữ liệu thực tế tại doanh nghiệp của bạn và trực tiếp chứng kiến cỗ máy AI xử lý tài liệu, bóc tách thông số kỹ thuật ngay trên dữ liệu mẫu của bạn.
            </p>
            
            {/* Scarcity Badge */}
            <div className="mt-3.5 inline-block rounded-lg bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800 border border-amber-200/80">
              🔥 Ưu đãi The Ultimate 0-Setup: Giới hạn chỉ còn <strong>6 suất ưu tiên</strong> trong tháng này.
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left: Direct Expert Connect */}
            <div className="lg:col-span-5 rounded-2xl bg-[#F8FAFC] p-6 border border-slate-200/80 text-left space-y-4">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#4F46E5]">
                <MessageCircle className="h-4 w-4" />
                <span>KẾT NỐI TRỰC TIẾP CHUYÊN GIA</span>
              </div>
              
              <h3 className="text-base sm:text-lg font-bold text-[#1E293B]">
                Ngại Điền Form? Kết Nối Trực Tiếp Chuyên Gia Chiến Lược!
              </h3>
              
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Gửi 1 trang bảng giá hoặc tài liệu kỹ thuật mẫu qua Zalo. Chuyên gia của Trang Anh sẽ phân tích nhanh các điểm nghẽn dữ liệu và gửi lại góc nhìn giải pháp trong vòng 15 phút.
              </p>

              <div className="space-y-2.5 pt-2">
                <a
                  href="https://zalo.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#0068FF] py-3 text-xs sm:text-sm font-bold text-white shadow-xs hover:bg-[#0052cc] transition-all"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Chat Zalo Với Chuyên Gia</span>
                </a>

                <a
                  href="tel:0912345678"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-white border border-slate-300 py-3 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all shadow-xs"
                >
                  <PhoneCall className="h-4 w-4 text-[#0D9488]" />
                  <span>Hotline: 0912 345 678</span>
                </a>
              </div>

              <div className="pt-2 text-[11px] text-slate-400 space-y-1">
                <p>✓ Phản hồi nhanh chóng qua Zalo</p>
                <p>✓ Cam kết bảo mật 100% theo Luật Dữ Liệu 91/2025</p>
                <p>✓ Tư vấn đúng trọng tâm, không chèo kéo</p>
              </div>
            </div>

            {/* Right: Registration Form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="rounded-2xl bg-emerald-50/80 p-8 text-center border border-emerald-200">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-[#0D9488] mb-3" />
                  <h3 className="text-lg sm:text-xl font-bold text-emerald-950 mb-2">
                    Đăng Ký Thành Công!
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                    Cảm ơn <strong>{formData.fullName}</strong>. Chuyên gia tư vấn của Trang Anh AI sẽ liên hệ qua Zalo/SĐT <strong>{formData.phone}</strong> trong vòng 2 giờ làm việc để xác nhận thông tin và gửi lịch hẹn Live Demo 45 phút.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  {/* Honeypot field (hidden from humans) */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="website_trap"
                      value={formData.honeypot}
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1E293B] uppercase tracking-wide mb-1">
                      Họ và Tên Lãnh đạo / Người đại diện <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Ví dụ: Nguyễn Văn Tuấn (Giám đốc)"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs sm:text-sm text-[#1E293B] focus:border-[#4F46E5] focus:outline-none focus:ring-2 focus:ring-indigo-100 transition-all bg-white"
                      required
                    />
                  </div>

                  {/* Phone / Zalo */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#1E293B] uppercase tracking-wide mb-1">
                        Số Điện Thoại / Zalo <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="Ví dụ: 0912 345 678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs sm:text-sm text-[#1E293B] focus:border-[#4F46E5] focus:outline-none focus:ring-2 focus:ring-indigo-100 transition-all bg-white"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1E293B] uppercase tracking-wide mb-1">
                        Tên Doanh Nghiệp <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Ví dụ: Thiết bị Nước Xuyên Việt"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs sm:text-sm text-[#1E293B] focus:border-[#4F46E5] focus:outline-none focus:ring-2 focus:ring-indigo-100 transition-all bg-white"
                        required
                      />
                    </div>
                  </div>

                  {/* Industry & Website Scale */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#1E293B] uppercase tracking-wide mb-1">
                        Lĩnh vực hoạt động
                      </label>
                      <select
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-xs sm:text-sm text-[#1E293B] focus:border-[#4F46E5] focus:outline-none focus:ring-2 focus:ring-indigo-100 bg-white"
                      >
                        <option value="Hóa chất / Môi trường / Nước">Hóa chất / Môi trường / Lọc nước</option>
                        <option value="Van vòi / Đường ống / M&E">Van công nghiệp / Co ống / M&E</option>
                        <option value="Thiết bị điện & Tự động hóa">Thiết bị điện & Tự động hóa</option>
                        <option value="Cơ khí & Sản xuất gia công">Cơ khí & Sản xuất gia công</option>
                        <option value="Vật tư công nghiệp khác">Vật tư công nghiệp khác</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1E293B] uppercase tracking-wide mb-1">
                        Quy mô Website hiện có
                      </label>
                      <select
                        value={formData.websiteCount}
                        onChange={(e) => setFormData({ ...formData, websiteCount: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-xs sm:text-sm text-[#1E293B] focus:border-[#4F46E5] focus:outline-none focus:ring-2 focus:ring-indigo-100 bg-white"
                      >
                        <option value="Chưa có website / Đang xây dựng">Chưa có website / Đang làm</option>
                        <option value="1 Website chính">1 Website chính</option>
                        <option value="2 - 3 Website vệ tinh">2 - 3 Website vệ tinh</option>
                        <option value="Trên 3 Website">Trên 3 Website</option>
                      </select>
                    </div>
                  </div>

                  {errorMsg && (
                    <div className="rounded-lg bg-rose-50 p-2.5 text-xs text-rose-700 font-semibold border border-rose-200">
                      {errorMsg}
                    </div>
                  )}

                  {/* Submit CTA */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#0D9488] py-3.5 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-[#0f766e] transition-all disabled:opacity-50 active:scale-95 cursor-pointer"
                    >
                      <Send className="h-4 w-4" />
                      <span>{loading ? "Đang Gửi Dữ Liệu..." : "GỬI THÔNG TIN — NHẬN BÁO CÁO AUDIT & ĐẶT LỊCH LIVE DEMO"}</span>
                    </button>
                  </div>

                  {/* Security guarantee */}
                  <div className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-1.5 pt-1">
                    <Lock className="h-3 w-3 text-slate-400" />
                    <span>Cam kết bảo mật dữ liệu 100% theo Luật 91/2025/QH15.</span>
                  </div>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
