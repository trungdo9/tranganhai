import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  tagline?: boolean;
  size?: number;
  onDark?: boolean;
}

export default function Logo({
  className = "",
  tagline = false,
  size = 32,
  onDark = false,
}: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* 22.4% Squircle Logo Icon */}
      <div
        className="relative overflow-hidden shrink-0 border border-slate-200/40 shadow-xs"
        style={{
          width: size,
          height: size,
          borderRadius: `${size * 0.224}px`,
        }}
      >
        <Image
          src="/logo-icon.jpg"
          alt="Trang Anh AI Logo"
          width={size}
          height={size}
          className="object-cover w-full h-full"
          priority
        />
      </div>

      {/* Typography Wordmark */}
      <div className="flex flex-col text-left">
        <span
          className={`font-extrabold tracking-tight leading-none ${
            onDark ? "text-white" : "text-slate-900"
          }`}
          style={{ fontSize: Math.max(14, size * 0.48) }}
        >
          TRANG ANH <span className="text-[#0D9488]">AI</span>
        </span>
        {tagline && (
          <span
            className={`text-[11px] font-medium tracking-normal mt-1 ${
              onDark ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Trang bị quy trình. Tinh anh vận hành.
          </span>
        )}
      </div>
    </div>
  );
}
