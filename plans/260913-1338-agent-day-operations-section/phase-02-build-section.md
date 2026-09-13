# Phase 02 — Dựng component `AgentDaySection.tsx`

**Interfaces:** `export default function AgentDaySection()` — không nhận props. Phase-03 import
`AgentDaySection from "@/components/AgentDaySection"`. Không có state, không `"use client"`, nên
section render tĩnh tại build time.

## Context Links

- Dữ liệu: `plans/260913-1338-agent-day-operations-section/phase-01-data-freeze.md`
- Hệ thống thiết kế tham chiếu: `web/src/components/IndustryUseCases.tsx`,
  `web/src/components/BlogTeaserSection.tsx`
- Luật mã nguồn: `.claude/workflows/development-rules.md` §Code Implementation

## Overview

- **Ngày:** 2026-09-13 · **Ưu tiên:** P1 · **Trạng thái:** pending
- Tạo mới một React Server Component render timeline dọc 6 mốc. Bám đúng palette và thang chữ
  đang dùng trên trang chủ để section không lệch tông.

## Key Insights

- **Dùng grid hai cột thay vì định vị tuyệt đối cho đường trục.** Timeline bằng
  `absolute -left-[7px]` rất dễ lệch 1–2px khi thang chữ đổi ở breakpoint khác. Cột giờ có
  `sm:border-r` vừa tạo đường trục vừa tự co giãn, không cần chỉnh pixel.
- **Section không cần `"use client"`.** Không có state, không sự kiện; để server component giữ
  bundle nhỏ (`IndustryUseCases` phải là client vì có tab, section này thì không).
- **Nhãn giờ dùng `tabular-nums`** để các mốc thẳng cột khi giờ có 4–5 ký tự.
- Cổng chặn hiển thị bằng **một dòng riêng có icon**, không trộn vào đoạn mô tả — đây là thông tin
  người đọc cần quét nhanh, không phải đọc kỹ.

## Requirements

### Chức năng

- Render `<section>` với eyebrow, tiêu đề `h2`, đoạn dẫn, `<ol>` 6 mốc, và một dòng kết.
- Mỗi mốc: nhãn giờ + chu kỳ (cột trái, thẳng phải ở `sm+`), rồi thẻ chứa vai trò · việc làm · cổng chặn.
- Có `id="van-hanh-mot-ngay"` để neo liên kết.

### Phi chức năng

- ≤ 220 dòng. Không dependency mới. Không ảnh. Không fetch.
- `h2` cho tiêu đề section, `h3` cho tên vai trò — giữ đúng cấp tiêu đề của trang.
- Tương phản chữ đạt mức AA: nền thẻ `#F8FAFC`, chữ `slate-700`/`slate-900`, nhấn `teal-700`.

## Architecture

```
MILESTONES: DayMilestone[]  (const, 6 phần tử)
        │
        ▼
<section id="van-hanh-mot-ngay">           nền trắng, viền dưới
   └── container max-w-[1240px]
        ├── eyebrow (span) · h2 · dẫn (p)
        └── <ol>
             └── <li> grid sm:grid-cols-[132px_1fr]
                  ├── cột giờ   → nhãn giờ + chu kỳ, sm:border-r
                  └── thẻ mốc   → h3 vai trò · p việc làm · p cổng chặn
```

`DayMilestone` là interface nội bộ, không export — không có consumer nào khác cần nó.

## Related Code Files

- Tạo: `web/src/components/AgentDaySection.tsx`
- Đọc để bám style: `web/src/components/IndustryUseCases.tsx:76-152`
- Đọc để bám cách đặt tiêu đề/eyebrow: `web/src/components/BlogTeaserSection.tsx`

## Implementation Steps

1. Tạo file `web/src/components/AgentDaySection.tsx` với nội dung đầy đủ dưới đây.

```tsx
import { Clock, ShieldCheck } from "lucide-react";

interface DayMilestone {
  hours: string;
  cadence: string;
  role: string;
  work: string;
  gate: string;
}

/**
 * 6 moc (7 khung gio) cua mot ngay van hanh that.
 * Nguon su that: plans/marketing/tranganhai/articles/
 *   nhat-ky-24h-doi-ai-agent-doanh-nghiep-phan-phoi-vat-tu.md
 * Moi con so o day la SO THIET KE CA (khung gio, tan suat, tran, so tieu chi) —
 * khong co so lieu ket qua kinh doanh nao duoc suy dien ra.
 */
const MILESTONES: DayMilestone[] = [
  {
    hours: "02:00 · 06:00",
    cadence: "2 lần/tuần · Thứ Tư & Chủ Nhật",
    role: "Nghiên cứu xu hướng tìm kiếm",
    work: "Đo nhu cầu thị trường theo lô từ khoá xoay vòng, kết luận mùa vụ hay suy giảm thật cho từng nhóm nội dung, ghi nhận định trực tiếp vào kế hoạch chiến dịch.",
    gate: "Giãn 120 giây giữa hai từ khoá để không bị chặn tần suất; từ khoá thiếu dữ liệu phải ghi rõ là thiếu, cấm nội suy.",
  },
  {
    hours: "07:00",
    cadence: "Hằng ngày",
    role: "Đồng bộ dữ liệu nền",
    work: "Kéo bảng giá và tồn kho từ hệ thống quản trị về kho dữ liệu chung, rồi đối soát danh bạ khách doanh nghiệp — thêm mới, cập nhật, phân loại theo chức danh.",
    gate: "Giá chỉ có một nguồn chân lý, cấm suy diễn lại giá; không in tên, email hay số điện thoại đầy đủ ra log.",
  },
  {
    hours: "08:30",
    cadence: "2 lần/tuần · Thứ Hai & Thứ Năm",
    role: "Đo thứ hạng & lập kế hoạch",
    work: "Đo vị trí trang đích trên kết quả tìm kiếm, phát hiện và phân xử xung đột trang đích giữa các website cùng doanh nghiệp, đối soát việc còn tồn của chu kỳ trước.",
    gate: "Bắt buộc chạy dry-run trước; cấm gọi lệnh đo thứ hạng trực tiếp vì mỗi lần gọi tốn credit trả tiền.",
  },
  {
    hours: "09:00",
    cadence: "Hằng ngày",
    role: "Viết nội dung chuyên môn",
    work: "Tra kho tri thức trước khi viết, chọn đúng một bài cho lượt này, viết theo quy chuẩn biên tập rồi tự chấm bộ tiêu chí chất lượng của kênh.",
    gate: "Cổng trần tuần (2 bài/tuần) chặn ngay ở bước đầu, trước khi viết một chữ; chỉ dùng số liệu đã được người kiểm chứng.",
  },
  {
    hours: "19:00",
    cadence: "Hằng ngày",
    role: "Kiểm định & xuất bản",
    work: "Quét hàng đợi bản nháp, xử lý tối đa 5 file mỗi ca theo thứ tự cũ nhất trước, chấm bộ 30 tiêu chí, làm giàu nội dung rồi mới xuất bản và thông báo.",
    gate: "Trượt tiêu chí hoặc dry-run còn cảnh báo thì hạ xuống bản nháp và báo cáo; hàng đợi trống thì chỉ báo cáo rồi dừng, không đụng vào file nào.",
  },
  {
    hours: "08:00 → 21:00",
    cadence: "6 khung giờ · Hằng ngày",
    role: "Tư vấn & thu lead đa kênh",
    work: "Nhận yêu cầu khách từ website, fanpage, email và kênh nhắn tin; tra thông số kỹ thuật từ kho dữ liệu chung, phân loại mức độ sẵn sàng giao dịch và soạn phản hồi.",
    gate: "Không tự chốt giá, không tự chốt đơn, không cam kết thời gian giao hàng — chạm tới giá hoặc chốt đơn là chuyển cho người thật.",
  },
];

export default function AgentDaySection() {
  return (
    <section
      id="van-hanh-mot-ngay"
      className="py-16 sm:py-24 bg-white border-b border-slate-200/80"
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-8 lg:px-10">
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold uppercase tracking-[0.11em] text-teal-700 bg-teal-50 px-3.5 py-1 rounded-full border border-teal-100">
            MỘT NGÀY VẬN HÀNH THẬT
          </span>
          <h2 className="mt-3.5 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Đội AI Agent Trực Một Ngày Như Thế Nào?
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
            Không phải một con AI trả lời mọi thứ. Đây là lịch trực của một đội agent: mỗi khung giờ
            một vai, mỗi vai có hạn mức sản lượng và một cổng chặn phải vượt qua trước khi được ghi
            ra ngoài.
          </p>
        </div>

        <ol className="space-y-5 sm:space-y-6">
          {MILESTONES.map((milestone) => (
            <li
              key={milestone.role}
              className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-x-6 gap-y-2.5"
            >
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 sm:flex-col sm:items-end sm:justify-start sm:text-right sm:border-r sm:border-slate-200 sm:pr-6 sm:pt-1">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-[#1E293B] px-2.5 py-1 text-[11px] font-bold text-white tabular-nums">
                  <Clock className="h-3 w-3 text-teal-400" />
                  {milestone.hours}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                  {milestone.cadence}
                </span>
              </div>

              <div className="rounded-2xl border border-slate-200/90 bg-[#F8FAFC] p-5 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {milestone.role}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-700">
                  {milestone.work}
                </p>
                <p className="mt-3 flex items-start gap-1.5 text-xs leading-relaxed text-teal-800">
                  <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-600" />
                  <span>
                    <strong className="font-semibold">Cổng chặn:</strong> {milestone.gate}
                  </span>
                </p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-8 text-xs sm:text-sm leading-relaxed text-slate-600 max-w-3xl">
          Cả 6 mốc trên chạy trên <strong className="text-slate-800">một khung vận hành duy nhất</strong>,
          dùng chung cho nhiều ngành khác nhau: chỉ đổi định nghĩa vai và hạn mức, giữ nguyên cách
          kiểm soát. Mọi con số nêu ở đây là số thiết kế ca trực — không phải con số hiệu quả kinh
          doanh được suy diễn ra.
        </p>
      </div>
    </section>
  );
}
```

2. Lưu file và chạy kiểm kiểu ở Exit gate.
3. Đếm số dòng: `wc -l` phải ≤ 220.
4. Xác nhận không có chuỗi `"use client"`, không import ngoài `lucide-react`.

## Todo List

- [ ] Tạo `web/src/components/AgentDaySection.tsx` với nội dung ở bước 1
- [ ] Xác nhận 6 phần tử trong `MILESTONES`
- [ ] Xác nhận `grep -c '"use client"'` trả về 0
- [ ] Xác nhận `wc -l` ≤ 220
- [ ] Chạy `npx tsc --noEmit` đạt

## Success Criteria

- File tồn tại, export default đúng tên, `tsc --noEmit` không lỗi.
- 6 mốc render đủ 5 trường, không trường nào rỗng.
- Không có `"use client"`, không dependency mới, không ảnh.

## Risk Assessment

| Rủi ro | Mức | Giảm thiểu |
|---|---|---|
| Cột giờ lệch ở màn hẹp | Trung bình | `grid-cols-1` ở mobile, chỉ bật 2 cột từ `sm:`; cột giờ `flex-wrap` để nhãn dài tự xuống dòng |
| Nhãn giờ dài làm vỡ cột 140px | Thấp | Rút gọn nhãn còn `02:00 · 06:00`; phần chu kỳ nằm ở dòng dưới |
| Icon `lucide-react` bị tree-shake sai | Thấp | Chỉ import hai icon đã dùng, giống các component khác trong repo |

## Security Considerations

- Không có đầu vào người dùng, không có `dangerouslySetInnerHTML`; chuỗi render qua JSX nên được escape tự động.
- Không đưa đường dẫn tuyệt đối của máy cá nhân vào nội dung hiển thị.

## Next Steps

- phase-03 import component này và chèn vào `web/src/app/page.tsx`.

**Exit gate:** `cd web && npx tsc --noEmit` → exit 0, không dòng lỗi nào
