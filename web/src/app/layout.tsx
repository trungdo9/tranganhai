import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tranganhai.com"),
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
    url: "https://tranganhai.com",
    siteName: "TRANG ANH AI VIETNAM",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "TRANG ANH AI Operations & Workflow Alignment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TRANG ANH AI — Trang Bị Quy Trình. Tinh Anh Vận Hành.",
    description: "Xóa bỏ điểm nghẽn vận hành. Xây dựng cỗ máy doanh nghiệp tự chủ bằng AI Agent trên hạ tầng chính chủ.",
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "TRANG ANH AI (Trang Anh Systems Vietnam)",
      "image": "https://tranganhai.com/logo.jpg",
      "description": "Hệ thống AI Agent Vận Hành & Căn Chỉnh Luồng Doanh Nghiệp B2B trên tài khoản Enterprise chính chủ.",
      "url": "https://tranganhai.com",
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
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Dữ liệu nội bộ và bí mật kinh doanh của công ty tôi có bị rò rỉ hoặc chia sẻ ra ngoài không?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tuyệt đối an toàn 100%! Hệ thống được thiết lập hoàn toàn trên tài khoản Enterprise chính chủ của doanh nghiệp bạn (Google Workspace Enterprise hoặc Private Cloud độc lập). Mọi dữ liệu khách hàng, bảng giá và công thức kỹ thuật đều được bảo vệ theo tiêu chuẩn của Luật Dữ Liệu 91/2025/QH15. Dữ liệu không bao giờ bị dùng để huấn luyện AI chung."
          }
        },
        {
          "@type": "Question",
          "name": "Nói là 'Đồng hành kiến trúc' thì phía doanh nghiệp tôi có phải làm nhiều việc kỹ thuật phức tạp không?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hoàn toàn KHÔNG! Trang Anh AI trực tiếp gánh 90% khối lượng kỹ thuật nặng nhọc nhất trong 4 tuần đầu. Doanh nghiệp chỉ cần cung cấp tài liệu mẫu và tham gia nhận bàn giao quy trình."
          }
        },
        {
          "@type": "Question",
          "name": "Làm sao Ban Giám Đốc đo lường được hiệu quả thực tế (ROI) sau khi đưa hệ thống vào hoạt động?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hiệu quả được chứng minh bằng các con số thực tế ngay trên Báo Cáo Quản Trị 1 Trang: Lượng khách từ AI Search, giờ công lao động được giải phóng (30-40 giờ/tháng) và tốc độ báo giá rút ngắn còn vài giây."
          }
        },
        {
          "@type": "Question",
          "name": "Nếu bảng giá Excel của tôi bị gộp ô phức tạp thì hệ thống có tính sai giá không?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Không bao giờ! Trang Anh AI bóc tách file Excel gộp ô thành cơ sở dữ liệu định giá chuẩn xác. Hệ thống TUYỆT ĐỐI KHÔNG để AI tự tính nhẩm, đảm bảo chuẩn xác 100% từng đồng."
          }
        },
        {
          "@type": "Question",
          "name": "Doanh nghiệp sở hữu những tài sản gì sau khi kết thúc hợp đồng?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Doanh nghiệp sở hữu vĩnh viễn toàn bộ kho dữ liệu đã làm sạch, bài viết đã xuất bản, bản báo giá PDF và bộ tài liệu quy trình chuẩn (SOP)."
          }
        },
        {
          "@type": "Question",
          "name": "Chính sách Cam Kết Đánh Giá Quý Ngày 75 (QBR) và Hoàn tiền được thực hiện thế nào?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vào ngày thứ 75, nếu hệ thống không giúp tiết kiệm tối thiểu 30 giờ công lao động/tháng hoặc không đạt tiêu chuẩn vận hành, Trang Anh AI cam kết hoàn trả 100% chi phí dịch vụ tháng tiếp theo."
          }
        }
      ]
    }
  ];

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
