# Phase 04 — Liên kết nội bộ, SEO/GEO và khả dụng

**Interfaces:** sửa `web/src/components/AgentDaySection.tsx` (thêm import `Link` của `next/link` và
hai liên kết nội bộ ở đoạn kết). Không đổi chữ ký component, không đổi props.

## Context Links

- Bài đích 1: `plans/marketing/tranganhai/articles/ai-agent-theo-ca-truc-mo-hinh-doi-van-hanh.md`
- Bài đích 2: `plans/marketing/tranganhai/articles/nhat-ky-24h-doi-ai-agent-doanh-nghiep-phan-phoi-vat-tu.md`
- Quy ước liên kết: các bài viết dùng `[anchor](slug.md)` vì `react-markdown` đã được vá để viết
  lại thành `/blog/<slug>` (`web/src/app/blog/[slug]/page.tsx`). **Trên trang chủ thì không có lớp
  viết lại đó** — phải dùng `<Link href="/blog/<slug>">` trực tiếp.

## Overview

- **Ngày:** 2026-09-13 · **Ưu tiên:** P1 · **Trạng thái:** pending
- Nối section mới vào mạng liên kết nội bộ của site và bảo đảm cấu trúc ngữ nghĩa cho AI search.

## Key Insights

- **Trang chủ trước đây có 0 liên kết `/blog`.** Khối dẫn bài đã đưa lên 4; section này thêm 2
  liên kết ngữ cảnh (bấm từ đúng mốc đang đọc), giá trị khác hẳn một danh sách bài ở cuối trang.
- **Trên trang chủ phải dùng `next/link`, không dùng cú pháp markdown `.md`.** Đây là bẫy đã gặp
  với các bài viết: href `.md` render thô và trả 404.
- **GEO cần câu trả lời trực tiếp ngay dưới `h2`.** Đoạn dẫn hiện tại mở bằng phủ định
  ("Không phải một con AI trả lời mọi thứ") rồi mới vào nội dung; thêm một câu trả lời thẳng
  "Đội AI Agent trực một ngày gồm 6 mốc…" trước nó để đoạn đầu tự đứng được khi bị trích.
- Icon trong thẻ mốc là trang trí — cần `aria-hidden` để trình đọc màn hình không đọc tên icon
  hai lần.

## Requirements

### Chức năng

- Đoạn dẫn mở bằng một câu trả lời trực tiếp, đủ nghĩa khi bị trích riêng.
- Cuối section có 2 liên kết: một tới bài khung lý thuyết, một tới bài nhật ký đầy đủ.
- Neo `id="van-hanh-mot-ngay"` giữ nguyên (đã có ở phase-02).

### Phi chức năng

- Không đổi cấu trúc `MILESTONES` và không đổi câu chữ đã chốt ở phase-01.
- Icon trang trí có `aria-hidden="true"`; cấp tiêu đề giữ `h2` → `h3`.

## Architecture

```
<section id="van-hanh-mot-ngay">
   ├── h2 + dẫn (câu trả lời trực tiếp ở đầu)
   ├── <ol> 6 mốc  (mỗi <li>: cột giờ · thẻ mốc)
   └── đoạn kết: khẳng định chung + 2 <Link> tới bài chi tiết
```

## Related Code Files

- Sửa: `web/src/components/AgentDaySection.tsx` (dòng import, đoạn dẫn, đoạn kết, thuộc tính icon)
- Đọc để đối chiếu slug: `plans/marketing/tranganhai/articles/`

## Implementation Steps

1. Thêm import ở đầu file:

```tsx
import Link from "next/link";
import { Clock, ShieldCheck } from "lucide-react";
```

2. Thay đoạn dẫn bằng phiên bản mở đầu bằng câu trả lời trực tiếp:

```tsx
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
            Đội AI Agent trực một ngày gồm <strong className="text-slate-800">6 mốc công việc</strong>{" "}
            trải từ 02:00 tới 21:00: nghiên cứu xu hướng, đồng bộ dữ liệu nền, đo thứ hạng, viết nội
            dung, kiểm định và xuất bản, cùng các ca tư vấn khách hàng. Mỗi khung giờ một vai, mỗi vai
            có hạn mức sản lượng và một cổng chặn phải vượt qua trước khi được ghi ra ngoài.
          </p>
```

3. Thêm hai liên kết nội bộ ngay sau đoạn kết, trước thẻ đóng `</div>` của container:

```tsx
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm">
          <Link
            href="/blog/ai-agent-theo-ca-truc-mo-hinh-doi-van-hanh"
            className="font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            Phân tích mô hình ca trực: quota, cổng chặn và luật dừng →
          </Link>
          <Link
            href="/blog/nhat-ky-24h-doi-ai-agent-doanh-nghiep-phan-phoi-vat-tu"
            className="font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            Nhật ký 24 giờ đầy đủ của đội agent →
          </Link>
        </div>
```

4. Thêm `aria-hidden="true"` vào hai icon `Clock` và `ShieldCheck` trong thẻ mốc.
5. Chạy kiểm ở Exit gate.

## Todo List

- [ ] Thêm `import Link from "next/link"`
- [ ] Thay đoạn dẫn bằng phiên bản mở đầu bằng câu trả lời trực tiếp
- [ ] Thêm khối 2 liên kết nội bộ
- [ ] Thêm `aria-hidden="true"` cho `Clock` và `ShieldCheck`
- [ ] Xác nhận 2 href trỏ đúng slug và đều dùng `/blog/` (không có `.md`)

## Success Criteria

- Đoạn dẫn tự đứng được khi bị trích riêng, không bắt đầu bằng phủ định.
- 2 liên kết nội bộ render thành `href="/blog/…"` trong HTML đã build, không có `.md`.
- Cả hai icon đều có `aria-hidden="true"`.

## Risk Assessment

| Rủi ro | Mức | Giảm thiểu |
|---|---|---|
| Dùng cú pháp markdown `.md` trên trang chủ ⇒ href 404 | Trung bình | Bắt buộc `<Link href="/blog/<slug>">`; kiểm bằng lệnh grep href ở phase-05 |
| Slug bị gõ sai ⇒ liên kết chết | Thấp | Đối chiếu từng slug với tên file trong `plans/marketing/tranganhai/articles/` |
| Thêm liên kết làm section dài quá giới hạn dòng | Thấp | Vẫn trong ngân sách 220 dòng; kiểm bằng `wc -l` |

## Security Considerations

- Liên kết nội bộ dùng `next/link`, không mở tab mới, không nhận tham số từ URL.
- Không thêm `target="_blank"` nên không cần `rel="noopener"`.

## Next Steps

- phase-05 kiểm chứng trên HTML đã build rồi mới cho phát hành.

**Exit gate:** `grep -c 'href="/blog/' web/src/components/AgentDaySection.tsx` → trả về `2` và `grep -c 'aria-hidden' web/src/components/AgentDaySection.tsx` → trả về `2`
