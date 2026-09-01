"use client";

import React, { useState } from "react";
import { MessageCircle, Phone, X, Zap, ChevronUp } from "lucide-react";

export default function FloatingLeadWidget() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {/* Mini notification bubble */}
      {showTooltip && (
        <div className="relative rounded-2xl bg-[#1E293B] text-white p-3.5 shadow-2xl border border-slate-700 max-w-xs text-left animate-bounce duration-1000">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-slate-600 text-white hover:bg-slate-500 text-xs"
            aria-label="Đóng thông báo"
          >
            ✕
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">Kỹ Sư Đang Trực Tuyến</span>
          </div>
          <p className="text-xs text-slate-200 font-medium leading-relaxed">
            Cần xem thử báo giá trên <strong>bảng giá Excel thật</strong> của bạn? Chat Zalo ngay để nhận demo trong 5 phút!
          </p>
        </div>
      )}

      {/* Buttons Row */}
      <div className="flex items-center gap-2">
        {/* Hotline Call Button */}
        <a
          href="tel:0912345678"
          className="flex h-12 w-12 sm:h-auto sm:w-auto items-center justify-center gap-2 rounded-full sm:rounded-2xl bg-white px-4 py-3 text-xs font-bold text-[#1E293B] shadow-xl border border-slate-200 hover:bg-slate-50 transition-all hover:scale-105"
          title="Gọi Hotline 0912 345 678"
        >
          <Phone className="h-4 w-4 text-[#0D9488]" />
          <span className="hidden sm:inline font-mono">0912 345 678</span>
        </a>

        {/* Zalo Button */}
        <a
          href="https://zalo.me"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 rounded-full sm:rounded-2xl bg-[#0068FF] px-4 py-3 text-xs sm:text-sm font-black text-white shadow-xl hover:bg-[#0052cc] transition-all hover:scale-105 active:scale-95 shadow-blue-500/30"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="hidden sm:inline">Chat Zalo Báo Giá</span>
        </a>
      </div>
    </div>
  );
}
