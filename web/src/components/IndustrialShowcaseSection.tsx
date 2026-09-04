"use client";

import React from "react";
import Image from "next/image";

export default function IndustrialShowcaseSection() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
      caption: "Hệ thống nhà máy & trạm xử lý nước cấp / nước thải",
      tag: "Hóa chất & Xử lý nước",
      className: "md:col-span-2 lg:col-span-5",
    },
    {
      src: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
      caption: "Kho thiết bị van công nghiệp, phụ kiện đường ống",
      tag: "Cơ điện M&E",
      className: "md:col-span-1 lg:col-span-3",
    },
    {
      src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
      caption: "Hiện trường thi công lắp đặt tuyến ống công nghiệp",
      tag: "Hiện trường thi công",
      className: "md:col-span-1 lg:col-span-4",
    },
  ];

  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`group relative h-[240px] sm:h-[280px] rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs ${img.className}`}
            >
              <Image
                src={img.src}
                alt={img.caption}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />
              
              {/* Category Pill & Caption */}
              <div className="absolute inset-x-0 bottom-0 p-4 text-left">
                <span className="inline-block px-2.5 py-0.5 rounded-md bg-white/20 backdrop-blur-xs text-[11px] font-semibold text-white mb-1.5">
                  {img.tag}
                </span>
                <p className="text-xs sm:text-sm font-medium text-white leading-snug">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-3.5 text-center text-xs text-slate-400 font-normal">
          Hình ảnh trực quan thực tế — dễ dàng thay thế bằng hình ảnh nhà máy, kho bãi hoặc dự án của chính doanh nghiệp bạn.
        </p>
      </div>
    </section>
  );
}
