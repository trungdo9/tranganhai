import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TRANG ANH AI — Hệ Thống AI Agent Vận Hành & Căn Chỉnh Luồng Doanh Nghiệp B2B",
  description: "Đồng hành kiến trúc & chuyển giao tự chủ cỗ máy AI Agent trên hạ tầng Enterprise chính chủ. Số hóa bộ não tri thức số (Zero Hallucination), tự động hiện diện trên các công cụ Chat AI (GEO), tư vấn 24/7, dự toán BOQ & Báo Cáo Quản Trị 1 Trang cho Ban Lãnh Đạo.",
  keywords: [
    "AI Agent Vận Hành",
    "Workflow Alignment B2B",
    "Bộ Não Tri Thức Số",
    "Generative Engine Optimization",
    "Hiện diện trên ChatGPT Gemini",
    "Số hóa bảng giá B2B",
    "Báo cáo quản trị CEO",
    "Chuyển giao tự chủ 4 tuần",
    "Luật Dữ Liệu 91/2025/QH15",
    "Luật AI 134/2025/QH15",
  ],
  openGraph: {
    title: "TRANG ANH AI — Trang Bị Quy Trình. Tinh Anh Vận Hành.",
    description: "Xóa bỏ điểm nghẽn vận hành. Xây dựng cỗ máy doanh nghiệp tự chủ bằng AI Agent trên hạ tầng chính chủ.",
    url: "https://tranganh.vn",
    siteName: "TRANG ANH AI VIETNAM",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "TRANG ANH AI (Trang Anh Systems Vietnam)",
    "image": "https://tranganh.vn/logo.jpg",
    "description": "Hệ thống AI Agent Vận Hành & Căn Chỉnh Luồng Doanh Nghiệp B2B trên tài khoản Enterprise chính chủ.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "TP. Hồ Chí Minh",
      "addressCountry": "VN"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Gói Nền Tảng (Foundation Operations)",
        "price": "12500000",
        "priceCurrency": "VND"
      },
      {
        "@type": "Offer",
        "name": "Gói Tăng Trưởng (Growth Operations)",
        "price": "24000000",
        "priceCurrency": "VND"
      },
      {
        "@type": "Offer",
        "name": "Gói Toàn Diện (Enterprise Operations)",
        "price": "41500000",
        "priceCurrency": "VND"
      }
    ]
  };

  return (
    <html lang="vi" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#F8FAFC] text-[#1E293B] antialiased">
        {children}
      </body>
    </html>
  );
}
