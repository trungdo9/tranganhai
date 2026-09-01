import React from "react";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
}

export default function Logo({
  className = "",
  showTagline = true,
  size = "md",
  variant = "light",
}: LogoProps) {
  const iconSizes = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  };

  const textSizes = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-xl",
  };

  const isDark = variant === "dark";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* SVG Geometric Monogram Mark: T & A interlocking */}
      <div className={`relative flex ${iconSizes[size]} items-center justify-center rounded-xl ${isDark ? "bg-white/10 border border-white/20" : "bg-[#0F172A]"} p-2 shadow-md shadow-slate-900/20`}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
          <defs>
            <linearGradient id="ta-blue-teal" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4F46E5" />
              <stop offset="100%" stopColor="#0D9488" />
            </linearGradient>
            <linearGradient id="ta-teal-light" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0D9488" />
              <stop offset="100%" stopColor="#14B8A6" />
            </linearGradient>
          </defs>

          {/* Letter T: Foundation Beam (Trang bị - Structural Architecture) */}
          <path
            d="M15 28 C15 25 17 23 20 23 L80 23 C83 23 85 25 85 28 L85 34 C85 36 83 37 80 37 L57 37 L57 82 C57 85 55 87 52 87 L48 87 C45 87 43 85 43 82 L43 37 L20 37 C17 37 15 36 15 34 Z"
            fill="#E2E8F0"
            opacity="0.95"
          />

          {/* Letter A & Upward Arrow (Tinh anh - Autonomous Operations) */}
          <path
            d="M50 15 L78 68 L64 68 L50 40 L36 68 L22 68 Z"
            fill="url(#ta-blue-teal)"
          />

          {/* Dynamic Growth Arrow Apex */}
          <path
            d="M50 12 L60 28 L53 26 L53 45 L47 45 L47 26 L40 28 Z"
            fill="url(#ta-teal-light)"
          />

          {/* Center Connection Node */}
          <circle cx="50" cy="56" r="4.5" fill="#0D9488" />
        </svg>
      </div>

      {/* Typography Wordmark */}
      <div className="text-left">
        <span className={`block font-extrabold leading-tight tracking-tight ${isDark ? "text-white" : "text-[#1E293B]"} ${textSizes[size]}`}>
          TRANG ANH <span className="text-[#0D9488]">SYSTEMS</span>
        </span>
        {showTagline && (
          <span className={`block text-[10px] sm:text-[11px] font-bold tracking-wider uppercase ${isDark ? "text-slate-400" : "text-slate-500"}`}>
            Trang bị quy trình • Tinh anh vận hành
          </span>
        )}
      </div>
    </div>
  );
}
