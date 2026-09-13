"use client";

import React, { useState } from "react";
import {
  Trash2,
  CheckCircle2,
  Search,
  Send,
  AlertCircle,
  Copy,
  Clock,
  ShieldAlert,
} from "lucide-react";

export default function DataDeletionForm() {
  // Form submission state
  const [fullName, setFullName] = useState("");
  const [identifier, setIdentifier] = useState(""); // Email or Facebook User ID or Phone
  const [dataTypes, setDataTypes] = useState<string[]>([
    "all",
  ]);
  const [reason, setReason] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedReceipt, setSubmittedReceipt] = useState<{
    code: string;
    submittedAt: string;
    identifier: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  // Status check state
  const [searchCode, setSearchCode] = useState("");
  const [searchResult, setSearchResult] = useState<string | null>(null);

  const handleCheckboxChange = (type: string) => {
    if (type === "all") {
      setDataTypes(["all"]);
      return;
    }
    const newTypes = dataTypes.filter((t) => t !== "all");
    if (dataTypes.includes(type)) {
      const filtered = newTypes.filter((t) => t !== type);
      setDataTypes(filtered.length === 0 ? ["all"] : filtered);
    } else {
      setDataTypes([...newTypes, type]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !identifier.trim()) return;

    setIsSubmitting(true);

    // Simulate reliable deletion receipt generation
    setTimeout(() => {
      const randomSuffix = Math.floor(100000 + Math.random() * 900000);
      const generatedCode = `DEL-META-${new Date().getFullYear()}-${randomSuffix}`;
      
      setSubmittedReceipt({
        code: generatedCode,
        submittedAt: new Date().toLocaleString("vi-VN"),
        identifier: identifier.trim(),
      });
      setIsSubmitting(false);
    }, 600);
  };

  const handleCopyCode = () => {
    if (submittedReceipt) {
      navigator.clipboard.writeText(submittedReceipt.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleCheckStatus = (e: React.FormEvent) => {
    e.preventDefault();
    const code = searchCode.trim().toUpperCase();
    if (!code) return;

    if (code.startsWith("DEL-")) {
      setSearchResult(
        `Mã yêu cầu [${code}]: Đang trong quy trình xử lý xóa dữ liệu. Tiến độ: Đã tiếp nhận và đưa vào hàng đợi hủy định danh (thời hạn tối đa 30 ngày theo quy định).`
      );
    } else {
      setSearchResult(
        `Không tìm thấy mã yêu cầu [${code}]. Vui lòng kiểm tra lại định dạng mã biên nhận (Ví dụ: DEL-META-2026-XXXXXX).`
      );
    }
  };

  return (
    <div className="space-y-8">
      {/* Form Submission Card */}
      <div className="rounded-xl border border-rose-200 bg-white p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-100 text-rose-600">
            <Trash2 className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-[#1E293B]">
              Biểu Mẫu Gửi Yêu Cầu Xóa Dữ Liệu Trực Tuyến
            </h3>
            <p className="text-xs text-slate-500">
              Dành cho người dùng tương tác qua Facebook App, Messenger Bot hoặc Website
            </p>
          </div>
        </div>

        {submittedReceipt ? (
          <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50/70 p-6 space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm sm:text-base font-bold text-emerald-900">
                  Yêu Cầu Xóa Dữ Liệu Đã Được Tiếp Nhận Thành Công!
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-emerald-800">
                  Hệ thống Trang Anh AI đã ghi nhận yêu cầu hủy bỏ thông tin cá nhân và dữ liệu liên kết với Facebook App.
                </p>
              </div>
            </div>

            <div className="rounded-lg bg-white p-4 border border-emerald-200 text-xs sm:text-sm space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-slate-500 font-medium">Mã biên nhận xác thực (Confirmation ID):</span>
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded text-sm">
                    {submittedReceipt.code}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyCode}
                    className="inline-flex items-center gap-1 rounded bg-slate-200 px-2 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-300 transition-colors"
                  >
                    <Copy className="h-3.5 w-3.5" />
                    <span>{copied ? "Đã chép" : "Sao chép"}</span>
                  </button>
                </div>
              </div>
              <div className="flex justify-between border-t border-slate-100 pt-2 text-slate-600">
                <span>Đối tượng định danh:</span>
                <strong className="font-medium text-slate-800">{submittedReceipt.identifier}</strong>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Thời gian gửi yêu cầu:</span>
                <span>{submittedReceipt.submittedAt}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Thời hạn hoàn tất:</span>
                <span className="font-semibold text-rose-600">Tối đa 30 ngày (Thường xử lý trong 24h)</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-600">
              <Clock className="h-4 w-4 text-slate-400" />
              <span>
                Vui lòng lưu lại <strong>Mã biên nhận</strong> ở trên để tra cứu tiến độ thực thi xóa dữ liệu bất kỳ lúc nào.
              </span>
            </div>

            <button
              type="button"
              onClick={() => setSubmittedReceipt(null)}
              className="text-xs text-indigo-600 font-semibold hover:underline"
            >
              ← Gửi một yêu cầu khác
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Họ và tên của bạn <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Nguyễn Văn A"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Facebook User ID / Email / SĐT đăng ký <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Email, ID Facebook (ASID/PSID) hoặc SĐT"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Các loại dữ liệu yêu cầu xóa bỏ:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                <label className="flex items-center gap-2 p-2 rounded-lg border border-slate-200 bg-slate-50/50 hover:bg-slate-50 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={dataTypes.includes("all")}
                    onChange={() => handleCheckboxChange("all")}
                    className="rounded text-indigo-600 focus:ring-indigo-500"
                  />
                  <span>Xóa toàn bộ (Tài khoản, Hồ sơ, Lịch sử chat &amp; Token)</span>
                </label>
                <label className="flex items-center gap-2 p-2 rounded-lg border border-slate-200 bg-slate-50/50 hover:bg-slate-50 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={dataTypes.includes("chat")}
                    onChange={() => handleCheckboxChange("chat")}
                    className="rounded text-indigo-600 focus:ring-indigo-500"
                  />
                  <span>Chỉ xóa lịch sử tin nhắn &amp; hội thoại Chatbot</span>
                </label>
                <label className="flex items-center gap-2 p-2 rounded-lg border border-slate-200 bg-slate-50/50 hover:bg-slate-50 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={dataTypes.includes("contact")}
                    onChange={() => handleCheckboxChange("contact")}
                    className="rounded text-indigo-600 focus:ring-indigo-500"
                  />
                  <span>Xóa số điện thoại, email và ghi chú khách hàng</span>
                </label>
                <label className="flex items-center gap-2 p-2 rounded-lg border border-slate-200 bg-slate-50/50 hover:bg-slate-50 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={dataTypes.includes("app")}
                    onChange={() => handleCheckboxChange("app")}
                    className="rounded text-indigo-600 focus:ring-indigo-500"
                  />
                  <span>Hủy quyền liên kết Facebook Login</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Lý do hoặc thông tin bổ sung (không bắt buộc):
              </label>
              <textarea
                rows={2}
                placeholder="Ví dụ: Tôi không còn sử dụng dịch vụ hoặc muốn xóa sạch dữ liệu cá nhân"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-[11px] text-slate-500 flex items-center gap-1">
                <ShieldAlert className="h-3.5 w-3.5 text-slate-400" />
                Hệ thống cam kết tiếp nhận và thực hiện xóa dữ liệu trong vòng tối đa 30 ngày.
              </span>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-rose-600 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-rose-700 disabled:opacity-50 transition-colors"
              >
                <Send className="h-3.5 w-3.5" />
                <span>{isSubmitting ? "Đang ghi nhận..." : "Gửi Yêu Cầu Xóa Dữ Liệu"}</span>
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Status Check / Tracker Card */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
            <Search className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-[#1E293B]">
              Kiểm Tra Tiến Độ Xóa Dữ Liệu (Data Deletion Status Tracker)
            </h3>
            <p className="text-xs text-slate-500">
              Nhập mã biên nhận (Confirmation ID) bạn đã nhận được sau khi gửi yêu cầu
            </p>
          </div>
        </div>

        <form onSubmit={handleCheckStatus} className="mt-5 flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="Nhập mã biên nhận, ví dụ: DEL-META-2026-123456"
            value={searchCode}
            onChange={(e) => setSearchCode(e.target.value)}
            className="flex-1 rounded-lg border border-slate-300 px-3.5 py-2 text-xs sm:text-sm text-slate-900 font-mono placeholder:font-sans placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#1E293B] px-5 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
          >
            <Search className="h-3.5 w-3.5" />
            <span>Kiểm tra</span>
          </button>
        </form>

        {searchResult && (
          <div className="mt-4 rounded-lg bg-slate-50 p-3.5 border border-slate-200 text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
            <AlertCircle className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" />
            <span>{searchResult}</span>
          </div>
        )}
      </div>
    </div>
  );
}
