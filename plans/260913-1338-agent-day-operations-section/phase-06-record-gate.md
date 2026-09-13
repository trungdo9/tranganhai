# Phase 06 — Cổng kit và ghi sổ

**Interfaces:** none — phase cuối, chỉ chạy cổng kiểm và ghi lại kết quả. Tiêu thụ commit hash do
phase-05 tạo ra.

## Context Links

- Cổng lint plan: `.claude/scripts/ck/plan-lint.cjs`
- Cổng sức khoẻ workspace: `.claude/scripts/ck/workspace-health.cjs`
- Nhật ký: `.claude/commands/ck/journal.md`
- Báo cáo kiểm định: `plans/260913-1338-agent-day-operations-section/reports/phase-05-verification.md`

## Overview

- **Ngày:** 2026-09-13 · **Ưu tiên:** P1 · **Trạng thái:** pending
- Chạy các cổng cơ học của kit, cập nhật trạng thái phase trong `plan.md`, và để lại báo cáo kết
  thúc để lần sau đọc lại biết việc đã xong tới đâu.

## Key Insights

- **`plan-lint` là cổng bàn giao, không phải gợi ý.** Nó kiểm sự tồn tại của khối ràng buộc toàn
  cục, `**Exit gate:**` có kết quả mong đợi, `**Interfaces:**` ở mỗi phase, và không còn từ bị cấm.
  Một phase thiếu `**Exit gate:**` khiến lần chạy tiếp theo không tự suy ra được phase đó đã xong.
- **`workspace-health` có 2 mục FAIL sẵn từ trước** (`root backup`, `router size`) — chúng **không
  do thay đổi này gây ra**. Ghi rõ trong báo cáo để lần sau không truy sai nguồn.
- **Cập nhật trạng thái trong `plan.md` là phần của định nghĩa hoàn thành**, không phải việc phụ:
  bảng §3 là nơi duy nhất cho biết phase nào đã xong.

## Requirements

### Chức năng

- `plan-lint` đạt (exit 0) trên thư mục plan.
- `workspace-health` chạy được; ghi lại số mục pass và 2 mục FAIL có sẵn.
- `plan.md` §3 đổi trạng thái 6 phase từ `pending` sang `done`.
- Báo cáo kết thúc ghi: commit hash, hash ảnh chụp cây làm việc, số đo artefact, URL đã kiểm.

### Phi chức năng

- Không thêm file ngoài `reports/` của chính plan này.
- Báo cáo không chứa khẳng định chưa kiểm; mục nào chưa kiểm thì ghi rõ là chưa.

## Architecture

```
plan dir
 ├── plan.md                     ← cập nhật cột Trạng thái
 ├── phase-01…06-*.md            ← nguồn cho plan-lint
 └── reports/
      ├── phase-01-source-mapping.md      (phase-01)
      ├── phase-05-verification.md        (phase-05)
      └── phase-06-closing-report.md      (phase này)
```

## Related Code Files

- Sửa: `plans/260913-1338-agent-day-operations-section/plan.md` (cột trạng thái §3)
- Tạo: `plans/260913-1338-agent-day-operations-section/reports/phase-06-closing-report.md`
- Không sửa: mọi file trong `.claude/` (thuộc quyền kit, bị ghi đè khi cập nhật)

## Implementation Steps

1. Chạy cổng lint plan:

```bash
node .claude/scripts/ck/plan-lint.cjs plans/260913-1338-agent-day-operations-section
```

2. Nếu có vi phạm, sửa **file kế hoạch** (không sửa script) rồi chạy lại tới khi exit 0.
3. Chạy cổng sức khoẻ và ghi lại số mục:

```bash
node .claude/scripts/ck/workspace-health.cjs
```

4. Đổi 6 dòng trạng thái ở `plan.md` §3 từ `pending` sang `done`.
5. Viết `reports/phase-06-closing-report.md` với nội dung: commit hash · 4 số đo artefact ·
   kết quả hai cổng · 2 mục FAIL có sẵn của `workspace-health` kèm ghi chú "không do thay đổi này" ·
   URL site thật đã kiểm · việc còn lại (nếu chưa đẩy mã thì ghi rõ đang chờ người đẩy).
6. Kiểm lại toàn bộ sổ bằng Exit gate.

## Todo List

- [ ] `plan-lint` exit 0
- [ ] `workspace-health` chạy xong, số mục pass đã ghi lại
- [ ] 6 dòng trạng thái ở `plan.md` §3 đã đổi thành `done`
- [ ] `reports/phase-06-closing-report.md` đã viết, có commit hash và số đo thật
- [ ] Đã ghi rõ 2 mục FAIL có sẵn của `workspace-health` là không do thay đổi này
- [ ] Đã ghi rõ trạng thái đẩy mã (chờ người đẩy, hay đã lên sóng)

## Success Criteria

- `plan-lint` exit 0 trên thư mục plan.
- Không còn dòng `pending` trong bảng trạng thái của `plan.md`.
- Báo cáo kết thúc trả lời được: đã đổi gì · kiểm bằng gì · còn gì chờ người.

## Risk Assessment

| Rủi ro | Mức | Giảm thiểu |
|---|---|---|
| Sửa script lint để "cho qua" | Trung bình | Cấm rõ ở bước 2: chỉ sửa file kế hoạch; script thuộc quyền kit |
| Báo cáo khẳng định đã phát hành khi chưa đẩy mã | Cao | Bắt buộc ghi trạng thái đẩy ở bước 5; chỉ ghi "đã lên sóng" khi có kết quả curl 200 |
| Nhầm 2 mục FAIL có sẵn thành lỗi mới | Trung bình | Ghi chú tường minh ở bước 5 |

## Security Considerations

- Không dán nội dung `.env`, token hay URL nội bộ vào báo cáo.
- Không sửa file trong `.claude/` — đó là bề mặt của kit, mọi thay đổi ở đó sẽ bị ghi đè và mất dấu vết.

## Next Steps

- Việc tiếp theo nằm ngoài plan này: thêm hotline/Zalo làm kênh liên hệ dự phòng cạnh form, và
  chốt `TELEGRAM_BOT_TOKEN` + `TELEGRAM_CHAT_ID` trên Vercel để form lead gửi được thông báo.

**Exit gate:** `node .claude/scripts/ck/plan-lint.cjs plans/260913-1338-agent-day-operations-section` → exit 0 và `grep -c 'pending' plans/260913-1338-agent-day-operations-section/plan.md` → trả về 0
