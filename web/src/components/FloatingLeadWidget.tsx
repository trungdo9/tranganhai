"use client";

import React, { useState } from "react";
import { MessageCircle, Phone, X } from "lucide-react";

export default function FloatingLeadWidget() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2.5">
      {/* Clean Subtle Notification Bubble */}
      {showTooltip && (
        <div className="relative rounded-2xl bg-[#1E293B] text-white p-3.5 shadow-xl border border-slate-700 max-w-xs text-left">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white text-xs transition-colors"
            aria-label="Đóng thông báo"
          >
            ✕
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">Chuyên Gia Đang Trực Tuyến</span>
          </div>
          <p className="text-xs text-slate-200 font-normal leading-relaxed">
            Cần xem thử demo trên <strong>tài liệu mẫu của doanh nghiệp bạn</strong>? Chat Zalo ngay để kết nối chuyên gia!
          </p>
        </div>
      )}

      {/* Action Buttons Row */}
      <div className="flex items-center gap-2">
        {/* Hotline Call Button */}
        <a
          href="tel:0912345678"
          className="flex h-11 w-11 sm:h-auto sm:w-auto items-center justify-center gap-2 rounded-full sm:rounded-xl bg-white px-3.5 py-2.5 text-xs font-semibold text-[#1E293B] shadow-md border border-slate-200/90 hover:bg-slate-50 transition-all hover:scale-102"
          title="Hotline: 0912 345 678"
        >
          <Phone className="h-3.5 w-3.5 text-[#0D9488]" />
          <span className="hidden sm:inline font-mono">0912 345 678</span>
        </a>

        {/* Zalo Button */}
        <a
          href="https://zalo.me"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 rounded-full sm:rounded-xl bg-[#0068FF] px-4 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md hover:bg-[#0052cc] transition-all hover:scale-102 active:scale-95"
        >
          <MessageCircle className="h-4 w-4" />
          <span className="hidden sm:inline">Kết Nối Zalo</span>
        </a>
      </div>
    </div>
  );
}
