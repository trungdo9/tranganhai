import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import CoreValueSection from "@/components/CoreValueSection";
import ZaloQuoteWorkflow from "@/components/ZaloQuoteWorkflow";
import IndustryUseCases from "@/components/IndustryUseCases";
import WorkflowSection from "@/components/WorkflowSection";
import PricingSection from "@/components/PricingSection";
import LegalFaqSection from "@/components/LegalFaqSection";
import LeadFormSection from "@/components/LeadFormSection";
import FloatingLeadWidget from "@/components/FloatingLeadWidget";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      {/* Sticky Navigation Bar with Progress Indicator */}
      <Header />

      <main className="flex-1">
        {/* Section 1: Hero Section (2-Column: Value Proposition & Executive BI Dashboard Card) */}
        <HeroSection />

        {/* Section 2: Điểm Nghẽn Vận Hành (#leak) - 4 Rò Rỉ Doanh Thu Đối Chiếu Hiện Trạng vs Chuẩn Trang Anh */}
        <PainPointsSection />

        {/* Section 3: Cỗ Máy Vòng Kín 5 Node (#engine) - Interactive Stepper với Agent/Người, Input/Output SLA & Modules */}
        <CoreValueSection />

        {/* Section 4: Workflow Tiêu Biểu M4 (#demo) - Một Dòng Tin Trên Zalo, 8 Giây Sau Có Báo Giá PDF & VietQR */}
        <ZaloQuoteWorkflow />

        {/* Section 5: May Đo Thực Chiến Theo Ngành B2B (Hóa chất/Xử lý nước, Van M&E, Đa Website) */}
        <IndustryUseCases />

        {/* Section 6: Lộ Trình 4 Tuần Co-Architecture (#roadmap) - Trang Anh Gánh 90% Kỹ Thuật, Ban Giám Đốc Quyết 3 Điểm */}
        <WorkflowSection />

        {/* Section 7: Đầu Tư Vận Hành (#pricing) - Ba Mức Retainer, Ưu Đãi 0-Setup Miễn 20-35Tr */}
        <PricingSection />

        {/* Section 8: Minh Bạch & Pháp Lý (#faq) - Những Câu Ban Giám Đốc Hỏi Trước Khi Ký */}
        <LegalFaqSection />

        {/* Section 9: Khám Sức Khỏe Vận Hành (#dang-ky) - 2 Giờ Làm Việc Trên Dữ Liệu Thật Của Doanh Nghiệp */}
        <LeadFormSection />
      </main>

      {/* Floating Quick Action Widget */}
      <FloatingLeadWidget />

      {/* Corporate Footer */}
      <Footer />
    </div>
  );
}
