import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tranganhai.com"),
  title: "Triển khai AI Agent cho doanh nghiệp B2B kỹ thuật | Trang Anh AI",
  description:
    "Trang Anh AI triển khai hệ thống AI Agent vận hành cho doanh nghiệp B2B kỹ thuật Việt Nam: số hóa bảng giá và tài liệu kỹ thuật, chatbot tư vấn 24/7, báo giá tự động kèm VietQR, báo cáo quản trị một trang. Bàn giao trong 4 tuần, trên hạ tầng chính chủ.",
  keywords: [
    "triển khai AI Agent cho doanh nghiệp",
    "AI Agent vận hành doanh nghiệp B2B",
    "tự động hóa quy trình bán hàng bằng AI",
    "giải pháp AI Agent cho SME Việt Nam",
    "báo giá tự động VietQR",
    "Master RAG Lake",
    "Luật Dữ Liệu 91/2025/QH15",
    "Luật AI 134/2025/QH15",
    "Báo cáo quản trị 1 trang CEO",
  ],
  openGraph: {
    title: "Triển khai AI Agent cho doanh nghiệp B2B kỹ thuật | Trang Anh AI",
    description:
      "Hệ thống AI Agent vận hành khép kín 5 Node: dữ liệu sạch, hiện diện trên AI Search, tiếp đón 24/7, báo giá nhanh và báo cáo quản trị một trang. Bàn giao trong 4 tuần.",
    url: "https://tranganhai.com",
    siteName: "Trang Anh AI Vietnam",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/logo-icon.jpg",
        width: 1024,
        height: 1024,
        alt: "Trang Anh AI — Trang bị quy trình. Tinh anh vận hành.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Triển khai AI Agent cho doanh nghiệp B2B kỹ thuật | Trang Anh AI",
    description:
      "Xóa Bỏ Điểm Nghẽn Vận Hành. Tự Chủ Cỗ Máy Doanh Nghiệp Bằng AI Agent Trên Hạ Tầng Chính Chủ.",
    images: ["/logo-icon.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Trang Anh AI",
        "alternateName": "Trang Anh Systems Vietnam",
        "url": "https://tranganhai.com",
        "logo": "https://tranganhai.com/logo-icon.jpg",
        "email": "contact@tranganhai.com",
        "slogan": "Trang bị quy trình. Tinh anh vận hành.",
        "description":
          "Đơn vị triển khai hệ thống AI Agent vận hành và căn chỉnh luồng công việc cho doanh nghiệp B2B kỹ thuật tại Việt Nam.",
        "areaServed": "VN",
      },
      {
        "@type": "Service",
        "serviceType": "Triển khai AI Agent vận hành doanh nghiệp",
        "provider": {
          "@type": "Organization",
          "name": "Trang Anh AI",
        },
        "areaServed": "VN",
        "audience": {
          "@type": "BusinessAudience",
          "name": "Doanh nghiệp B2B kỹ thuật 5-50 nhân sự",
        },
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "AI Agent khác chatbot thông thường ở điểm nào?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Chatbot trả lời theo kịch bản có sẵn. AI Agent đọc dữ liệu gốc của doanh nghiệp, thực hiện chuỗi công việc nhiều bước như tra thông số, lập dự toán, xuất báo giá và ghi dữ liệu vào CRM, rồi chuyển cho nhân viên duyệt.",
            },
          },
          {
            "@type": "Question",
            "name": "Chi phí triển khai AI Agent cho doanh nghiệp vừa và nhỏ được tính thế nào?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Chi phí gồm một sprint kiến trúc 4 tuần và phí đồng hành vận hành theo tháng, báo riêng theo quy mô dữ liệu, số website và số kênh bán hàng sau buổi khám sức khỏe vận hành.",
            },
          },
          {
            "@type": "Question",
            "name": "Dữ liệu nội bộ có bị rò rỉ khi triển khai AI Agent không?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Hệ thống được cài trên tài khoản Enterprise chính chủ của doanh nghiệp, dữ liệu không dùng để huấn luyện AI chung và tuân thủ Luật Dữ liệu 91/2025/QH15.",
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang="vi" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
