# TRANG ANH AI — LANDING PAGE SOURCE CODE
## CHUYÊN TRANG CHUYỂN ĐỔI CAO (B2B HIGH-CONVERTING LANDING PAGE)

Thư mục `web/` chứa toàn bộ mã nguồn Frontend Landing Page của **TRANG ANH AI**, được xây dựng dựa trên:
- **Framework:** Next.js 14+ (App Router, React 18, TypeScript)
- **Styling:** Tailwind CSS v3.4 với bộ màu nhận diện chuẩn **Soft Nordic Tech (60-30-10)**:
  - Base Charcoal (60%): `#1E293B`
  - Brand AI Blue (30%): `#4F46E5`
  - Sage Teal CTA (10%): `#0D9488`
  - Alert Amber: `#F59E0B`
- **Icons:** `lucide-react`
- **Tối ưu:** Chuẩn SEO Schema JSON-LD `ProfessionalService` & `Product`, tương thích tuyệt đối Zalo In-App Browser & Core Web Vitals LCP < 1.2s.

---

## 📁 CẤU TRÚC THƯ MỤC (DIRECTORY STRUCTURE)

```text
web/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── leads/
│   │   │       └── route.ts         # API tiếp nhận Lead & Webhook CRM/Telegram
│   │   ├── globals.css              # Style Tailwind & thanh cuộn tùy chỉnh
│   │   ├── layout.tsx               # Root layout, Metadata & Schema JSON-LD
│   │   └── page.tsx                 # Trang chủ hợp nhất 9 Sections chuyển đổi
│   ├── components/
│   │   ├── Header.tsx               # Thanh điều hướng sticky & nút CTA nhanh
│   │   ├── HeroSection.tsx          # Section 1: Hero + Mockup Zalo Copilot 8s
│   │   ├── StatsSection.tsx         # Section 2: 3 Số liệu uy tín & 4 Bất cập GenAI
│   │   ├── PainPointsSection.tsx    # Section 3: Bức tranh 3 nỗi đau B2B & So sánh TCO
│   │   ├── CoreValueSection.tsx     # Section 4: 3 Trụ cột (Zalo 8s, RAG Lake, Dashboard)
│   │   ├── IndustryUseCases.tsx     # Section 5: Tabs ứng dụng theo ngành B2B
│   │   ├── WorkflowSection.tsx      # Section 6: Lộ trình 4 tuần Đồng Hành & Chuyển Giao
│   │   ├── PricingSection.tsx       # Section 7: Bảng giá 3 gói & The Ultimate 0-Setup
│   │   ├── LegalFaqSection.tsx      # Section 8: Lá chắn Luật 91/Luật 134 & FAQ Accordion
│   │   ├── LeadFormSection.tsx      # Section 9: Form tiếp nhận Lead 4 trường tinh gọn
│   │   └── Footer.tsx               # Chân trang & Thông tin pháp lý bản quyền
│   └── lib/
│       └── utils.ts                 # Helper hàm cn() kết hợp clsx & tailwind-merge
├── package.json
├── tailwind.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── next.config.mjs
```

---

## 🚀 HƯỚNG DẪN CHẠY DỰ ÁN (LOCAL DEVELOPMENT)

1. Cài đặt các thư viện phụ thuộc:
   ```bash
   cd web
   npm install
   ```

2. Chạy môi trường phát triển (Dev server):
   ```bash
   npm run dev
   ```
   Mở trình duyệt tại: [http://localhost:3000](http://localhost:3000)

3. Build bản phát hành (Production build):
   ```bash
   npm run build
   npm run start
   ```

---
*Mã nguồn thuộc bản quyền phát triển của **TRANG ANH AI** (Trang Anh Systems Vietnam).*
