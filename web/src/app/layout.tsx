import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TRANG ANH — Hệ Thống Tự Động Hóa Vận Hành & Chuẩn Hóa Quy Trình B2B",
  description: "Trang bị cỗ máy tự động hóa trên hạ tầng chính chủ. Trợ lý xuất báo giá chuẩn xác trong 8 giây trên Zalo, số hóa bảng giá Excel sạch 100% và chuyển giao tự chủ sau 4 tuần.",
  keywords: [
    "Tự động hóa doanh nghiệp",
    "Báo giá Zalo 8 giây",
    "Số hóa bảng giá Excel",
    "Chuẩn hóa quy trình B2B",
    "Phần mềm báo giá Zalo",
    "Chuyển giao tự chủ vận hành",
    "Báo cáo quản trị CEO",
    "Luật 91/2025/QH15",
  ],
  openGraph: {
    title: "TRANG ANH — Trang Bị Quy Trình. Tinh Anh Vận Hành.",
    description: "Báo giá chuẩn xác trong 8 giây. Tự chủ vận hành doanh nghiệp trên hạ tầng chính chủ. Tiết kiệm 2-3 giờ làm việc mỗi ngày.",
    url: "https://tranganh.vn",
    siteName: "TRANG ANH SYSTEMS",
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
    "name": "TRANG ANH SYSTEMS",
    "image": "https://tranganh.vn/logo.jpg",
    "description": "Hệ thống Tự Động Hóa Vận Hành Doanh Nghiệp & Chuẩn Hóa Quy Trình Tự Chủ trên tài khoản chính chủ.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "TP. Hồ Chí Minh",
      "addressCountry": "VN"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Gói Nền Tảng",
        "price": "12500000",
        "priceCurrency": "VND"
      },
      {
        "@type": "Offer",
        "name": "Gói Tăng Trưởng",
        "price": "24000000",
        "priceCurrency": "VND"
      },
      {
        "@type": "Offer",
        "name": "Gói Toàn Diện",
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
