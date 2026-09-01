"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, ShieldCheck, Sparkles, Clock, Lock, MessageCircle, PhoneCall, ArrowRight } from "lucide-react";

export default function LeadFormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    company: "",
    industry: "Hóa chất / Môi trường",
    websiteCount: "1 - 3 Website",
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
        setErrorMsg("Có lỗi xảy ra trong quá trình gửi. Vui lòng thử lại hoặc gọi trực tiếp.");
      }
    } catch (err) {
      setErrorMsg("Kết nối mạng không ổn định. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="dang-ky" className="py-14 sm:py-20 bg-gradient-to-b from-[#F8FAFC] to-[#EEF2F6]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-2xl shadow-slate-200/60 text-left">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-black text-[#0D9488] border border-emerald-200 mb-3">
              <Sparkles className="h-4 w-4" />
              <span>TÀI TRỢ MIỄN PHÍ 100% PHÍ THIẾT LẬP (TIẾT KIỆM 35 TRIỆU)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1E293B] tracking-tight">
              Đăng Ký Khảo Sát Quy Trình Vận Hành & Live Demo
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Trang Anh sẽ phân tích trực tiếp trên <strong>file Excel và đoạn chat Zalo mẫu</strong> của doanh nghiệp bạn trong 45 phút.
            </p>
            
            {/* Scarcity Badge */}
            <div className="mt-3 inline-block rounded-lg bg-amber-50 px-3 py-1 text-xs font-bold text-amber-800 border border-amber-200">
              🔥 Ưu đãi The Ultimate 0-Setup: <strong>Chỉ còn 6 suất</strong> ưu tiên trong tháng này.
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Quick Zalo Contact Option */}
            <div className="lg:col-span-5 rounded-2xl bg-[#F8FAFC] p-6 border border-slate-200 text-left space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600">
                <MessageCircle className="h-4 w-4" />
                <span>KẾT NỐI TRỰC TIẾP KỸ SƯ</span>
              </div>
              
              <h3 className="text-lg font-bold text-[#1E293B]">
                Ngại Điền Form? Chat Zalo Ngay Để Gửi File Dò Thử!
              </h3>
              
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Gửi thẳng 1 trang bảng giá Excel hoặc hình chụp catalogue qua Zalo. Kỹ sư Trang Anh sẽ bóc tách và gửi lại bản Demo Báo Giá trong 5 phút.
              </p>

              <div className="space-y-2.5 pt-2">
                <a
                  href="https://zalo.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#0068FF] py-3 text-xs sm:text-sm font-black text-white shadow hover:bg-[#0052cc] transition-all"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Chat Zalo Với Kỹ Sư Trưởng</span>
                </a>

                <a
                  href="tel:0912345678"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-white border border-slate-300 py-3 text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all"
                >
                  <PhoneCall className="h-4 w-4 text-[#0D9488]" />
                  <span>Gọi Hotline: 0912 345 678</span>
                </a>
              </div>

              <div className="pt-2 text-[11px] text-slate-400 space-y-1">
                <p>✓ Phản hồi trong vòng 5 phút trên Zalo</p>
                <p>✓ Bảo mật 100% theo Luật Dữ Liệu 91/2025</p>
                <p>✓ Không spam, không chèo kéo</p>
              </div>
            </div>

            {/* Right: Registration Form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="rounded-2xl bg-emerald-50 p-8 text-center border border-emerald-200">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-[#0D9488] mb-3" />
                  <h3 className="text-xl font-bold text-emerald-950 mb-2">
                    Đăng Ký Thành Công!
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                    Cảm ơn <strong>{formData.fullName}</strong>. Kỹ sư tư vấn của Trang Anh sẽ liên hệ qua Zalo số <strong>{formData.phone}</strong> trong vòng 2 giờ để gửi Bản Khảo Sát Quy Trình và chốt lịch Live Demo.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
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
                    <label className="block text-xs font-bold text-[#1E293B] uppercase tracking-wide mb-1">
                      Họ và Tên Quản lý / Giám đốc <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Ví dụ: Nguyễn Văn Tuấn (Giám đốc)"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs sm:text-sm text-[#1E293B] focus:border-[#4F46E5] focus:outline-none focus:ring-2 focus:ring-indigo-100 transition-all"
                      required
                    />
                  </div>

                  {/* Phone / Zalo */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-[#1E293B] uppercase tracking-wide mb-1">
                        Số Điện Thoại / Zalo <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="Ví dụ: 0912 345 678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs sm:text-sm text-[#1E293B] focus:border-[#4F46E5] focus:outline-none focus:ring-2 focus:ring-indigo-100 transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1E293B] uppercase tracking-wide mb-1">
                        Tên Doanh Nghiệp <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Ví dụ: Thiết bị Nước Xuyên Việt"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs sm:text-sm text-[#1E293B] focus:border-[#4F46E5] focus:outline-none focus:ring-2 focus:ring-indigo-100 transition-all"
                        required
                      />
                    </div>
                  </div>

                  {/* Industry & Website Scale */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-[#1E293B] uppercase tracking-wide mb-1">
                        Lĩnh vực hoạt động
                      </label>
                      <select
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-xs sm:text-sm text-[#1E293B] focus:border-[#4F46E5] focus:outline-none focus:ring-2 focus:ring-indigo-100 bg-white"
                      >
                        <option value="Hóa chất / Môi trường / Nước">Hóa chất / Môi trường / Lọc nước</option>
                        <option value="Van vòi / Đường ống / M&E">Van công nghiệp / Co ống / M&E</option>
                        <option value="Thiết bị điện & Cơ khí">Thiết bị điện & Tự động hóa</option>
                        <option value="Vật tư công nghiệp khác">Vật tư công nghiệp khác</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1E293B] uppercase tracking-wide mb-1">
                        Số lượng Website hiện có
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
                      className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#0D9488] py-3.5 text-xs sm:text-sm font-bold text-white shadow-teal hover:bg-[#0f766e] hover:shadow-xl transition-all disabled:opacity-50 active:scale-95 cursor-pointer"
                    >
                      <Send className="h-4 w-4" />
                      <span>{loading ? "Đang Gửi Dữ Liệu..." : "GỬI THÔNG TIN — NHẬN BÁO CÁO KHẢO SÁT MIỄN PHÍ"}</span>
                    </button>
                  </div>

                  {/* Security guarantee */}
                  <div className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-1.5 pt-1">
                    <Lock className="h-3 w-3 text-slate-400" />
                    <span>Cam kết bảo mật dữ liệu theo Luật 91/2025/QH15. Không làm phiền.</span>
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
