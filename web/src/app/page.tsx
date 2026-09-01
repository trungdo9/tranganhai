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
      {/* 1. Sticky Navigation Bar */}
      <Header />

      <main className="flex-1">
        {/* Section 1: Hero Section với Bảng Điều Khiển Vận Hành 3 Tầng (Tri Thức - Tác Nghiệp - Báo Cáo CEO) */}
        <HeroSection />

        {/* Section 2: Thực Trạng Thị Trường & 4 Bất Cập Khi Dùng AI Tự Phát */}
        <StatsSection />

        {/* Section 3: Bức Tranh 3 Điểm Nghẽn Vận Hành B2B & Biểu Đồ So Sánh Chi Phí TCO */}
        <PainPointsSection />

        {/* Section 4: Hệ Điều Hành 3 Trụ Cột: Bộ Não Tri Thức & GEO - Luồng Tác Nghiệp - Báo Cáo Quản Trị 1 Trang */}
        <CoreValueSection />

        {/* Section 5: Ứng Dụng Thực Tế May Đo Cho Từng Ngành B2B (Hóa Chất, M&E, Đa Web) */}
        <IndustryUseCases />

        {/* Section 6: Lộ Trình 4 Tuần Done-With-You: Đồng Hành Kiến Trúc & Chuyển Giao Tự Chủ */}
        <WorkflowSection />

        {/* Section 7: Bảng Giá 3 Gói Retainer Minh Bạch & The Ultimate 0-Setup Offer */}
        <PricingSection />

        {/* Section 8: Lá Chắn Pháp Lý & Câu Hỏi Thường Gặp (FAQ) */}
        <LegalFaqSection />

        {/* Section 9: Form Đăng Ký Khám Sức Khỏe Vận Hành & Trải Nghiệm Live Demo 45 Phút */}
        <LeadFormSection />
      </main>

      {/* Floating Quick Action Widget */}
      <FloatingLeadWidget />

      {/* Corporate Footer */}
      <Footer />
    </div>
  );
}
