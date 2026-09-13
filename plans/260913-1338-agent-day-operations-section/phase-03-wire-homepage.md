# Phase 03 — Chèn section vào trang chủ

**Interfaces:** dùng `AgentDaySection` (default export, không props) từ phase-02. Sửa
`web/src/app/page.tsx`: thêm 1 dòng import và 2 dòng JSX. Không đổi thứ tự các section khác.

## Context Links

- Component nguồn: `web/src/components/AgentDaySection.tsx` (phase-02)
- Bố cục hiện tại: `web/src/app/page.tsx` — 11 section, `IndustryUseCases` ở vị trí 7,
  `BlogTeaserSection` ở 7B, `WorkflowSection` ở 8
- Lý do chèn: use case theo ngành (`IndustryUseCases`) là mô tả giả định; section mới là bằng
  chứng vận hành. Đặt ngay sau để trả lời câu hỏi mà section trước gợi ra.

## Overview

- **Ngày:** 2026-09-13 · **Ưu tiên:** P1 · **Trạng thái:** pending
- Chèn section mới vào giữa `IndustryUseCases` và `BlogTeaserSection`, không di chuyển section nào.

## Key Insights

- **Không chèn sau `BlogTeaserSection`.** Khối dẫn bài là "đọc sâu thêm"; nếu timeline nằm sau nó
  thì mạch đọc thành *ứng dụng theo ngành → đọc bài khác → vận hành thật*, ngắt mạch.
- **Chỉ 3 dòng thay đổi.** Mọi thứ khác giữ nguyên; `page.tsx` hiện 68 dòng và phải giữ dưới 75.
- **Đổi thứ tự section không nằm trong phạm vi này** — num bố cục là quyết định của chủ dự án, đã
  chốt tại `plans/landing-page-plan.md`.

## Requirements

### Chức năng

- `AgentDaySection` render ngay sau `<IndustryUseCases />`, trước `<BlogTeaserSection />`.
- Comment định vị theo đúng phong cách đang dùng trong file (`{/* Section N: … */}`).

### Phi chức năng

- `page.tsx` ≤ 75 dòng sau khi sửa. Không sửa section nào khác. Không đổi props.

## Architecture

```
<main>
  …
  <IndustryUseCases />        ← vị trí 7
  <AgentDaySection />         ← MỚI, vị trí 7B
  <BlogTeaserSection />       ← đổi số ghi chú từ 7B thành 7C
  <WorkflowSection />         ← vị trí 8
  …
</main>
```

Component là server component nên không cần bọc `Suspense` hay client boundary.

## Related Code Files

- Sửa: `web/src/app/page.tsx` (thêm 1 import, 3 dòng JSX)
- Không sửa: mọi component khác trong `web/src/components/`

## Implementation Steps

1. Mở `web/src/app/page.tsx`, thêm import ngay sau dòng `IndustryUseCases`:

```tsx
import IndustryUseCases from "@/components/IndustryUseCases";
import AgentDaySection from "@/components/AgentDaySection";
import BlogTeaserSection from "@/components/BlogTeaserSection";
```

2. Chèn section vào JSX và đánh lại số ghi chú của khối dẫn bài:

```tsx
        {/* Section 7: Ứng Dụng Thực Tế May Đo Theo Từng Ngành Kỹ Thuật */}
        <IndustryUseCases />

        {/* Section 7B: Một Ngày Vận Hành Thật Của Đội AI Agent */}
        <AgentDaySection />

        {/* Section 7C: Nhật Ký Vận Hành & Kiến Thức — kéo bài mới nhất từ articles/ */}
        <BlogTeaserSection />
```

3. Kiểm số dòng và thứ tự ở Exit gate.

## Todo List

- [ ] Thêm dòng import `AgentDaySection`
- [ ] Chèn `<AgentDaySection />` giữa `IndustryUseCases` và `BlogTeaserSection`
- [ ] Đổi ghi chú `Section 7B` của khối dẫn bài thành `Section 7C`
- [ ] Xác nhận `wc -l web/src/app/page.tsx` ≤ 75
- [ ] Xác nhận thứ tự xuất hiện đúng bằng lệnh grep

## Success Criteria

- Trang chủ render section mới ở đúng vị trí giữa hai section đã nêu.
- `page.tsx` không vượt 75 dòng; không section nào khác bị đổi nội dung.

## Risk Assessment

| Rủi ro | Mức | Giảm thiểu |
|---|---|---|
| Chèn sai vị trí làm đứt mạch nội dung | Thấp | Kiểm thứ tự bằng `grep -n` ở Exit gate |
| Xung đột với `BlogTeaserSection` cùng sửa `page.tsx` | Thấp | Sửa trong cùng một commit, không tách nhánh |

## Security Considerations

- Không có bề mặt mới: không thêm route, không thêm API, không nhận dữ liệu ngoài.

## Next Steps

- phase-04 thêm liên kết nội bộ và neo điều hướng vào chính component này.

**Exit gate:** `grep -n 'IndustryUseCases\|AgentDaySection\|BlogTeaserSection' web/src/app/page.tsx` → 6 dòng, theo đúng thứ tự IndustryUseCases < AgentDaySection < BlogTeaserSection
