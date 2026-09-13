# Phase 05 — Kiểm định và phát hành

**Interfaces:** không tạo bề mặt mới. Tiêu thụ `AgentDaySection` từ phase-02/04 và bản sửa
`web/src/app/page.tsx` từ phase-03. Không phase nào khác được coi là xong trước khi cổng này đạt.

## Context Links

- Luật kiểm thử: `.claude/workflows/development-rules.md` §Testing Discipline, §Pre-commit/Push Rules
- Cơ chế phát hành: push `master` → Vercel Git Integration tự build (~30–40 giây)
- Ràng buộc đẩy mã: `.claude/hooks/protected-branch-guard.cjs`

## Overview

- **Ngày:** 2026-09-13 · **Ưu tiên:** P1 · **Trạng thái:** pending
- Chạy baseline trước khi sửa, build sau khi sửa, chứng minh trên HTML đã build, rồi để người phụ
  trách đẩy mã và kiểm chứng trên site thật.

## Key Insights

- **Baseline trước, sửa sau.** Ghi lại kết quả build trên cây chưa sửa; nếu build đỏ sẵn thì dừng,
  báo cáo, không sửa tiếp. Không có baseline thì mọi lỗi build về sau đều thành "do tôi".
- 🔴 **Agent trong repo này KHÔNG đẩy được mã.** `protected-branch-guard.cjs` chặn `git push` khi
  HEAD đang ở `master` (`PROTECTED_DEFAULT = ['main','master','staging','uat','production','prod']`)
  và danh sách **cố ý không cấu hình được**. Đường đúng: agent `git add` + `git commit` **cục bộ**,
  rồi báo cáo commit hash cho người phụ trách đẩy. Không dùng `CK_ALLOW_PROTECTED_PUSH=1` trong ca
  tự động.
- **Bằng chứng phải lấy từ HTML đã build**, không phải từ việc "đọc code thấy đúng". Pre-render
  là thứ Vercel sẽ phục vụ.
- **Đo lường trước khi đẩy**: đếm 6 thẻ `h3` và 2 href `/blog/` trong `index.html` của bản build.

## Requirements

### Chức năng

- Baseline build đạt trước khi sửa.
- Sau khi sửa: `tsc --noEmit` sạch và `npm run build` đạt.
- HTML đã build chứa `id="van-hanh-mot-ngay"`, đúng 6 `h3`, đúng 2 `href="/blog/…"`, 0 href `.md`.

### Phi chức năng

- Không tự đẩy `master` từ ca tự động.
- Báo cáo kèm commit hash và số đo thật, không kèm khẳng định chưa kiểm.

## Architecture

```
[trước khi sửa]  npm run build        → ghi kết quả baseline
[đã sửa]         npx tsc --noEmit     → 0 lỗi
                 npm run build        → ✓ Generating static pages (29/29)
                 grep index.html      → section + 6 h3 + 2 link /blog + 0 .md
                 git commit           → CỤC BỘ (không push)
[người phụ trách] git push master     → Vercel build → kiểm trên site thật
```

## Related Code Files

- Đã tạo: `web/src/components/AgentDaySection.tsx`
- Đã sửa: `web/src/app/page.tsx`
- Artefact kiểm: `web/.next/server/app/index.html`

## Implementation Steps

1. **Baseline** — trên cây chưa sửa, chạy `cd web && npm run build` và ghi lại số trang tĩnh.
2. Sau khi hoàn tất phase-02 → phase-04, chạy `cd web && npx tsc --noEmit`.
3. Chạy `cd web && npm run build`.
4. Kiểm artefact:

```bash
cd web
f=.next/server/app/index.html
grep -c 'van-hanh-mot-ngay' "$f"
grep -o '<h3' "$f" | wc -l
grep -o 'href="/blog/[a-z0-9-]*"' "$f" | sort -u | wc -l
grep -c 'href="[^"]*\.md"' "$f"
```

5. **Commit cục bộ, KHÔNG push:**

```bash
cd ..
git add web/src/components/AgentDaySection.tsx web/src/app/page.tsx
git commit -m "feat(landing): them section mot ngay van hanh cua doi AI Agent (timeline 6 moc)"
```

6. Ghi commit hash vào `reports/phase-05-verification.md` kèm output thật của bước 3–4.
7. Báo cáo cho người phụ trách: hash, số đo, và câu "cần người đẩy `git push origin master`".
8. Sau khi đã đẩy, kiểm trên site thật:

```bash
for i in $(seq 1 10); do
  h=$(curl -sL --max-time 25 https://tranganhai.vercel.app/)
  s=$(echo "$h" | grep -c 'van-hanh-mot-ngay')
  n=$(echo "$h" | grep -o 'href="/blog/[a-z0-9-]*"' | sort -u | wc -l)
  echo "lan $i: section=$s link_blog=$n"
  [ "$s" -ge 1 ] && [ "$n" -ge 6 ] && break
  sleep 30
done
```

## Todo List

- [ ] Ghi baseline build trước khi sửa
- [ ] `npx tsc --noEmit` đạt sau khi sửa
- [ ] `npm run build` đạt
- [ ] 4 phép đo artefact đúng kỳ vọng
- [ ] Commit cục bộ (không push from automation)
- [ ] Ghi báo cáo kiểm định vào `reports/`
- [ ] Sau khi người đẩy: xác nhận section + 6 liên kết `/blog` trên site thật

## Success Criteria

- `npm run build` đạt, số trang tĩnh tăng đúng 0 (section nằm trong trang chủ, không thêm route).
- HTML build: `van-hanh-mot-ngay` ≥ 1, `h3` = 6, href `/blog/` ≥ 6 (2 của section + 4 của khối dẫn
  bài), href `.md` = 0.
- Site thật: section hiển thị, liên kết `/blog/…` trả HTTP 200.

## Risk Assessment

| Rủi ro | Mức | Giảm thiểu |
|---|---|---|
| Build đỏ sẵn từ trước | Trung bình | Bước 1 baseline; nếu đỏ, dừng và báo cáo thay vì sửa tiếp |
| Đẩy mã từ ca tự động rồi bị hook chặn và báo sai là "đã phát hành" | Cao | Không đẩy trong ca tự động; báo cáo hash và yêu cầu người đẩy; chỉ tuyên bố phát hành sau khi curl site thật trả 200 |
| Vercel build lỗi do `next` cũ | Thấp | Nếu build Vercel đỏ, deployment cũ vẫn phục vụ; kiểm lại bằng curl thay vì giả định đã lên |

## Security Considerations

- Không đưa token, biến môi trường hay đường dẫn tuyệt đối vào commit hay báo cáo.
- `.env.local` (nếu có) đã bị `.gitignore` chặn; xác nhận không xuất hiện trong `git status` trước khi commit.

## Next Steps

- phase-06 chạy cổng kit và ghi sổ với commit hash từ bước 5.

**Exit gate:** `cd web && npx tsc --noEmit && npm run build` → exit 0 và dòng `✓ Generating static pages (29/29)`
