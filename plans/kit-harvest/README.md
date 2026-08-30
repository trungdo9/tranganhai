# Kit harvest — vùng staging trước khi đẩy lên ClauKit

**Vì sao có thư mục này.** Kit cài vào project bằng `ck init` là một **bản sao**; `.claude/` thuộc quyền kit và sẽ bị ghi đè khi update. Sửa skill trực tiếp trong `.claude/` của project = mất bài học đó ở lần update sau, không dấu vết. Nên mọi thứ định đẩy ngược lên kit dừng ở đây trước.

**Luồng:** `plans/kit-harvest/*.SKILL.md` → review → copy vào `/e/Projects/ClauKit/skills/marketing/<name>/SKILL.md` → commit ở ClauKit → bump `kit.version` → `ck update` ở các project.

---

## Đang chờ promote

| File | Đích trong ClauKit | Nguồn | Trạng thái |
|---|---|---|---|
| `seo-audit.SKILL.md` | `skills/marketing/seo-audit/SKILL.md` | Harvest từ `plans/marketing/strategy-2026q3/seo-audit.md` + `thanhoattinh.net/seo-master-plan.md` | ✅ Sẵn sàng |
| `mk-learn.COMMAND.md` | `commands/mk/learn.md` | Cơ chế fan-in (mới) | ✅ Sẵn sàng |
| `kit-learnings.TEMPLATE.md` | template kit → đáp xuống `plans/kit-learnings.md` mỗi project | Cơ chế fan-in (mới) | ✅ Sẵn sàng |

```bash
K=e:/Projects/ClauKit
P=e:/Projects/done-with-you/plans/kit-harvest

cp "$P/seo-audit.SKILL.md"        "$K/skills/marketing/seo-audit/SKILL.md"
cp "$P/mk-learn.COMMAND.md"       "$K/commands/mk/learn.md"
cp "$P/kit-learnings.TEMPLATE.md" "$K/templates/kit-learnings.md"   # tạo thư mục nếu chưa có
```

Sau khi promote: bump `kit.version` trong `metadata.json`, ghi CHANGELOG, rồi `ck update` ở các project để bản cài bắt kịp.

### ⚠️ Patch cần duyệt tay: `marketing-rules.md` §1

`/mk:learn` **cố tình vi phạm** luật hard-fail "mọi lệnh `/mk:` đều yêu cầu `plans/marketing-context.md`". Lý do: bài học được ghi trong 20 giây sau khi học được, hoặc mất luôn; mọi giây ma sát đều hạ tỉ lệ ghi, và một bài học phát sinh ở repo chưa có hub vẫn là bài học. Cần thêm vào §1:

```diff
- **Exception:** `/mk:plan` itself, which creates the context hub.
+ **Exceptions:**
+ - `/mk:plan` — creates the context hub.
+ - `/mk:learn` — capture must never be blocked; it warns and proceeds.
+   A lesson is recorded in the 20 seconds after it is learned, or it is lost.
```

---

## Cơ chế fan-in — đã dựng xong

```
Bài học phát sinh trong project
        ↓  /mk:learn add          (20 giây, lọc 3 tầng, phải có target)
plans/kit-learnings.md            (append-only, OPEN)
        ↓  /mk:learn review       (hằng tháng, timebox, một người)
        ↓  ngưỡng: ≥2 project HOẶC là `fix`
plans/kit-harvest/<skill>.SKILL.md
        ↓  cp thủ công (có review)
ClauKit/skills/... → bump version → ck update → về lại các project
```

Nhật ký sống của project này: [`../kit-learnings.md`](../kit-learnings.md) — đã seed 3 entry thật từ dự án Xuyên Việt (2 promoted, 1 open).

**Phép thử để biết cơ chế có thật hay không:** giờ công/khách so theo lứa ở cùng tháng phục vụ. Sau ba khách mà không giảm thì đây là nghi lễ — nói thẳng và dừng.

---

## 🔴 CHẶN — `seo-geo` không harvest được: không có gì để harvest

`seo-geo/SKILL.md` vẫn là template rỗng, **và không thể lấp bằng cách harvest** vì GEO framework không tồn tại ở bất kỳ đâu.

**Đã kiểm tra (23/08/2026):**

| Nơi tìm | Kết quả |
|---|---|
| `ClauKit/plans/marketing/thanhoattinh.net/` (4 file) | Không có nội dung GEO |
| `ClauKit/plans/marketing/strategy-2026q3/` (20 file) | Không có nội dung GEO |
| `ClauKit/skills/marketing/seo-geo/SKILL.md` | Template rỗng, còn nguyên `[Core capability 1]` |
| `/e/Projects/thanhoattinh.net/` | Chỉ là cây file WordPress, không có artifact agent |
| grep `GEO\|AI Overview\|Perplexity\|answer engine` toàn bộ plans | 2 hit, cả hai đều **không phải** GEO — xem dưới |

**Hai hit đó là gì:**

1. `seo-master-plan.md` §7.3 **Backlog (H2/Q4 2026+)**: *"AI-search optimization (GEO — Perplexity/ChatGPT citations, dùng `seo-geo` skill)"* → GEO là **việc chưa làm**, và dòng này trỏ ngược vào chính cái skill đang rỗng. Vòng tròn.
2. `dev-implementation-guide.md`: `"geo": {"@type": "GeoCoordinates", "latitude": "10.8231"}` → đây là **toạ độ địa lý trong schema LocalBusiness**, không liên quan gì tới Generative Engine Optimization.

**Thứ duy nhất có thật:** `.claude/agents/marketing/seo-geo.md` (3.1KB, có nội dung) — nhưng đó là **định nghĩa vai trò agent**, không phải phương pháp. Nó liệt kê `[[seo-geo]]` trong "Skills you activate", tức agent đang gọi vào một skill rỗng.

### Hệ quả với tài liệu chiến lược — phải sửa

[`phong-marketing-ai.md`](../phong-marketing-ai.md) đang khẳng định hai điều không đứng được:

- §1 liệt kê *"GEO framework"* trong danh sách tài sản đã giao cho Xuyên Việt → **chưa giao**.
- §2: *"GEO tiếng Việt gần như chưa có ai bán... team đã có sẵn geo-framework để chứng minh"* → **không có sẵn**. Vế đầu (thị trường trống) có thể vẫn đúng; vế sau (mình đã có) thì không.

GEO cũng là một trong các điểm khác biệt chống lại lập luận "1Office đã có agent" và đang đỡ cho gói Tăng trưởng 20–30tr. **Không được đem GEO ra bán trong 8–10 buổi chào hàng cho tới khi có phương pháp thật.**

### ✅ Đã quyết 23/08 — đường 3 ngay + đường 2 song song

Team chốt giả định nền **"bộ kit đã hoàn thiện"** (`chien-luoc-khoi-dong.md` §0), tức `seo-geo/SKILL.md` sẽ được viết như một phần của workstream hoàn thiện kit — **không chờ harvest**. Nhưng skill hoàn thiện chỉ cho **năng lực**, không cho **bằng chứng**. Hai việc tách biệt, và đã áp vào tài liệu:

| Việc | Trạng thái |
|---|---|
| **Viết `seo-geo/SKILL.md`** (R&D, không phải harvest) | Thuộc Giai đoạn −1 của [`checklist-kiem-chung.md`](../checklist-kiem-chung.md) — điều kiện tiên quyết, ngoài phạm vi 90 ngày |
| **Rút lời hứa GEO khỏi vòng chào hàng này** | ✅ Đã sửa `phong-marketing-ai.md` §2 — "khoảnh khắc ChatGPT" giữ nguyên nhưng đóng vai **phép chẩn đoán**; §4 — GEO trong gói Tăng trưởng bán theo **cam kết quy trình**, không cam kết kết quả |
| **Chạy GEO thật trên thanhoattinh** (backlog §7.3 vốn đã định làm) | ⏳ Song song. Đo tỉ lệ được ChatGPT/Perplexity trích dẫn trên bộ câu hỏi định trước → can thiệp → đo lại. **Đây mới là chuyến harvest thật cho `seo-geo`** — và ra case study cùng lúc |

**Ranh giới phải giữ:** skill viết bằng R&D là **giả thuyết về phương pháp**, không phải phương pháp đã kiểm chứng. Ghi rõ điều đó trong mục Provenance của skill, và cập nhật lại sau lần chạy thật đầu tiên. Nếu không, đúng ba tháng nữa sẽ không ai phân biệt được phần nào trong kit đã qua thực chiến và phần nào chưa — mất luôn ý nghĩa của cả cơ chế fan-in này.
