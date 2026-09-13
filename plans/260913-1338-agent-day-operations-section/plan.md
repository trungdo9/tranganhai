# Kế hoạch: Section "Một Ngày Vận Hành Của Đội AI Agent" (trang chủ)

> **Người thực thi:** đọc `#4 Global Constraints` trước khi động vào bất kỳ file nào. Đây là
> kế hoạch **dựng section mới trên trang chủ**, không phải viết bài blog.

**Mục tiêu:** Thêm một section vào trang chủ `tranganhai.vercel.app` mô tả **một ngày vận hành
**một ngày vận hành thật của đội AI Agent** — timeline **6 mốc / 7 khung giờ** từ 02:00 đến 21:00,
mỗi mốc nêu vai trò · việc làm · cổng chặn

**Kiến trúc:** Một React Server Component mới `AgentDaySection.tsx` giữ dữ liệu 7 mốc dưới dạng
mảng typed ngay trong file, render bằng Tailwind theo đúng design system hiện có. Chèn vào
`page.tsx` giữa `IndustryUseCases` và `BlogTeaserSection`. Không thêm file dữ liệu rời, không
thêm dependency, không gọi API.

**Tech stack:** Next.js 14.2.20 (App Router) · React 18 · TypeScript · Tailwind CSS + `lucide-react`

---

## 1. Bối cảnh

Trang chủ hiện có 11 section. Hai section liên quan trực tiếp đã có sẵn:
`FiveNodeEngineSection` (kiến trúc — hệ thống **gồm** những gì) và `IndustryUseCases`
(use case theo ngành — nhưng là mô tả giả định theo đặc điểm ngành). **Chưa có tầng nào trả lời
"một ngày nó chạy ra sao".** Tầng đó hiện chỉ tồn tại trong bài viết
`plans/marketing/tranganhai/articles/nhat-ky-24h-doi-ai-agent-doanh-nghiep-phan-phoi-vat-tu.md`.

Đối thủ trong SERP (amis.misa.vn, callio.vn, cloudgo.vn…) toàn listicle chung chung; không ai có
"một ngày thật của đội agent". Đây là khác biệt hoá, không phải trang trí.

## Global Constraints

- **Ngôn ngữ:** tiếng Việt. Comment mã nguồn viết tiếng Anh, giọng trung tính.
- **Phiên bản:** `next@14.2.20`, React 18, TypeScript. **Không thêm dependency mới.**
- **Giới hạn file:** component mới ≤ 220 dòng; `web/src/app/page.tsx` chỉ được thêm tối đa 3 dòng.
- **Đường dẫn đích:** `web/src/components/AgentDaySection.tsx` (tạo mới) ·
  `web/src/app/page.tsx` (sửa) · `plans/marketing/tranganhai/pipeline.md` (KHÔNG sửa trong plan này).
- **Nguồn số liệu duy nhất:** bài `nhat-ky-24h-doi-ai-agent-doanh-nghiep-phan-phoi-vat-tu.md`.
  Mọi con số trong section phải truy được về bài đó. **Cấm bịa số mới.**
- **Cấm nhận diện khách hàng:** không tên doanh nghiệp, tên người, mã sản phẩm, số SKU, số liên hệ.
- **Ràng buộc đẩy mã:** nhánh mặc định là `master` và bị `protected-branch-guard.cjs` chặn. Agent
  trong repo **commit cục bộ**, người phụ trách đẩy. Ghi rõ ở phase-05.
- **Khung commit:** conventional commit, không nhắc tới AI. Ví dụ
  `feat(landing): them section mot ngay van hanh cua doi AI Agent`.
- **Luật không tạo file thừa:** không tạo script phụ, file dữ liệu rời, hay tài liệu trợ giúp.
  Bản nháp/ghi chú đặt trong `plans/260913-1338-agent-day-operations-section/reports/`.

## 3. Các phase

| # | Phase | File | Trạng thái |
|---|---|---|---|
| 1 | Chốt dữ liệu 6 mốc (7 khung giờ) | `phase-01-data-freeze.md` | done |
| 2 | Dựng component section | `phase-02-build-section.md` | done |
| 3 | Chèn vào trang chủ | `phase-03-wire-homepage.md` | done |
| 4 | SEO · GEO · khả dụng | `phase-04-seo-geo-a11y.md` | done |
| 5 | Kiểm định & phát hành | `phase-05-verify-ship.md` | done |
| 6 | Ghi sổ & cổng kit | `phase-06-record-gate.md` | done |

## 4. Phụ thuộc

- phase-02 cần dữ liệu đã chốt ở phase-01.
- phase-03 cần component export đúng tên `AgentDaySection` (mặc định) từ phase-02.
- phase-04 có thể chạy song song phase-03 về mặt soạn nội dung, nhưng **phải** chèn cùng lúc để
  tránh hai lần sửa `page.tsx`.
- phase-05 là cổng chặn: không phase nào được coi là xong trước khi `npm run build` đạt; phase-06 chạy sau cùng, cần commit hash từ phase-05.

## 5. Phạm vi

| Phương án | Nội dung | Chọn |
|---|---|---|
| A — tối thiểu | Section timeline 7 mốc, chỉ chữ + rail, không ảnh | ✅ **chọn** |
| B — đầy đủ | Thêm ảnh minh hoạ theo từng mốc + bộ lọc theo chu kỳ ngày/tuần | ❌ loại — cần tài sản ảnh chưa tồn tại, vượt phạm vi duyệt |

## Plan Completeness

- [x] **Spec coverage** — 6 mốc (7 khung giờ), mỗi mốc có vai trò + việc làm + cổng chặn; đặt giữa `IndustryUseCases` và `BlogTeaserSection`
- [x] **Placeholder** — không còn từ bị cấm (`TBD`, "handle edge cases", "appropriate error handling", "similar to phase N", "write tests for the above") ngoài khối mã
- [x] **Interfaces** — mỗi phase khai `**Interfaces:**`; phase-02 xuất `AgentDaySection` dạng default export, props rỗng
- [x] **Gate** — mỗi phase có `**Exit gate:**` kèm `<lệnh> → <kết quả mong đợi>`
- [x] **Global constraints** — khối `## 2. Global Constraints` nêu phiên bản, giới hạn dòng, đường dẫn đích, luật nguồn số liệu
- [x] **Scope** — chọn phương án A, loại B kèm lý do ở §5
