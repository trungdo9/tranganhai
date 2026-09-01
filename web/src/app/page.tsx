import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import PainPointsSection from "@/components/PainPointsSection";
import CoreValueSection from "@/components/CoreValueSection";
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
      {/* 1. Sticky Navigation */}
      <Header />

      <main className="flex-1">
        {/* Section 1: Hero Section với Mockup Báo Giá Zalo 8s & Trust Partner Bar */}
        <HeroSection />

        {/* Section 2: Thực trạng & 4 Cái Bẫy Khi Dùng Phần Mềm Rời Rạc */}
        <StatsSection />

        {/* Section 3: Bức Tranh 3 Nỗi Đau Vận Hành B2B & Biểu Đồ So Sánh TCO */}
        <PainPointsSection />

        {/* Section 4: Bộ Ba Trụ Cột Vận Hành Thực Chiến (Zalo 8s, Data Lake, Dashboard) */}
        <CoreValueSection />

        {/* Section 5: Ứng Dụng Thực Tế Theo Ngành B2B Tabs */}
        <IndustryUseCases />

        {/* Section 6: Lộ Trình 4 Tuần: Đồng Hành Kiến Trúc & Chuyển Giao Tự Chủ */}
        <WorkflowSection />

        {/* Section 7: Bảng Giá Vận Hành Theo Luồng & The Ultimate 0-Setup Offer */}
        <PricingSection />

        {/* Section 8: Lá Chắn Pháp Lý & FAQ Accordion Bẻ Gãy Hoài Nghi */}
        <LegalFaqSection />

        {/* Section 9: Form Đăng Ký Khảo Sát Quy Trình, Live Demo & Chat Zalo Kỹ Sư Trực Tiếp */}
        <LeadFormSection />
      </main>

      {/* Floating Zalo & Hotline Quick Conversion Widget */}
      <FloatingLeadWidget />

      {/* Footer */}
      <Footer />
    </div>
  );
}
