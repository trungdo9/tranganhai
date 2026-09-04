import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import PainPointsSection from "@/components/PainPointsSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import IndustrialShowcaseSection from "@/components/IndustrialShowcaseSection";
import FiveNodeEngineSection from "@/components/FiveNodeEngineSection";
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
        {/* Section 1: Hero Section với Bảng Điều Khiển Vận Hành M0 Realtime */}
        <HeroSection />

        {/* Section 2: Thực Trạng Thị Trường & Bảng Đối Chiếu 4 Bất Cập AI Tự Phát */}
        <StatsSection />

        {/* Section 3: Ba Lỗ Rò Rỉ Vận Hành Đang Bào Mòn Biên Lợi Nhuận */}
        <PainPointsSection />

        {/* Section 4: Đối Tượng Phù Hợp & Nhóm Chưa Phù Hợp */}
        <TargetAudienceSection />

        {/* Section 5: Bằng Chứng Trực Quan / Hình Ảnh Hiện Trường Công Nghiệp */}
        <IndustrialShowcaseSection />

        {/* Section 6: Dây Chuyền 5 Node Vận Hành Khép Kín (Chế độ Luồng ngang & Xếp chồng) */}
        <FiveNodeEngineSection />

        {/* Section 7: Ứng Dụng Thực Tế May Đo Theo Từng Ngành Kỹ Thuật */}
        <IndustryUseCases />

        {/* Section 8: Lộ Trình 4 Tuần Done-With-You Bàn Giao Tự Chủ */}
        <WorkflowSection />

        {/* Section 9: Mô Hình Hợp Tác, 3 Gói Retainer & The Ultimate 0-Setup Offer */}
        <PricingSection />

        {/* Section 10: Minh Bạch Pháp Lý & Câu Hỏi Thường Gặp (FAQ) */}
        <LegalFaqSection />

        {/* Section 11: Đăng Ký Khám Sức Khỏe Vận Hành & Live Demo 45 Phút */}
        <LeadFormSection />
      </main>

      {/* Floating Quick Action Widget */}
      <FloatingLeadWidget />

      {/* Corporate Footer */}
      <Footer />
    </div>
  );
}
