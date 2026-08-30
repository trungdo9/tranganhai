# Kit learnings — done-with-you

**Đây là gì.** Nhật ký fan-in. Kit chảy một chiều (`ck init` copy `.claude/` vào project); bài học chảy ngược lại và cần chỗ đáp. Ghi bằng `/mk:learn`, thu hoạch hằng tháng bằng `/mk:learn review`.

**Append-only.** Không xoá entry nào, kể cả entry bị từ chối — lịch sử những gì kit *không* nhận cũng có giá trị ngang những gì nó nhận.

---

## Hai luật

**1. Không bao giờ sửa `.claude/` trong project này.** Thư mục đó thuộc quyền kit và bị ghi đè khi update — sửa ở đó là xoá bài học không dấu vết. Đường đi đúng: file này → `plans/kit-harvest/` → repo ClauKit upstream → `ck update`.

**2. Chỉ tầng `method` được ghi.** Câu hỏi lọc: *"điều này còn đúng với một khách khác, ngành khác không?"*

| Tầng | Ví dụ | Ghi? |
|---|---|---|
| Dữ liệu khách | danh sách từ khoá, bảng giá, export GSC | ❌ không bao giờ (còn là rủi ro PII) |
| Cấu hình khách | ICP, ngành, template báo cáo | ⚠️ chỉ dưới dạng biến/schema, không phải giá trị |
| **Phương pháp** | cách dựng taxonomy, một rubric chấm điểm, quy trình benchmark | ✅ chỉ tầng này |

**Ngưỡng promote ("luật số 2"):** một bài học vào kit khi đã gặp ở **≥2 project**, hoặc ngay lập tức nếu là `fix` — thứ trong kit đang sai, gãy, hoặc thiếu rành rành. Còn lại nằm chờ. Không có luật này, kit thành ngăn kéo rác chứa n=1 hack đóng băng thành chuẩn.

**Không ghi:** "X chạy tốt" mà không nêu cách cũ hỏng ở đâu (đó là sở thích) · dữ liệu/cấu hình khách · hack chỉ đúng cho một khách (`generalizes: no` → `CLAUDE.md` của project đó) · sở thích tool/model · bất cứ thứ gì chứa tên, email, số điện thoại, địa chỉ.

---

## Entries

<!-- Mới nhất trước. /mk:learn add append vào đây. -->

### 2026-08-23 · kit-builder · method · fix · OPEN
**Seen in:** done-with-you (1)
**Situation:** `seo-geo/SKILL.md` sẽ được viết bằng R&D chứ không harvest từ engagement, vì GEO chưa từng chạy cho khách nào. Kit hiện không có cách phân biệt skill "đã qua thực chiến" với skill "viết từ nghiên cứu".
**Old way failed:** Mục Provenance của các skill import sẵn chỉ ghi nguồn import, không ghi **trạng thái bằng chứng**. Sau vài tháng không ai còn phân biệt được phần nào trong kit đã va chạm với khách thật — mất luôn ý nghĩa của cả cơ chế fan-in.
**New method:** Provenance của mọi skill phải mang một nhãn trạng thái: `verified` (harvest từ engagement đã chạy) · `hypothesis` (viết từ R&D, chưa chạy thật) · `stub`. Skill `hypothesis` phải được review lại sau lần chạy thật đầu tiên, và ghi ngày review vào chính mục đó.
**Generalizes:** Có — áp cho mọi skill trong kit, không riêng seo-geo. Là `fix` nên đủ điều kiện promote ngay dù mới thấy ở 1 project.

### 2026-08-23 · seo-audit · method · PROMOTED: 2026-08-23 → seo-audit
**Seen in:** thanhoattinh.net (1) — promote sớm vì là `fix`
**Situation:** Script crawl của audit viết theo tên khách: `scripts/seo-audit-thanhoattinh.js`.
**Old way failed:** Không tái dùng được ở khách sau; file không được tổng quát hoá, bị bỏ lại, và link trỏ tới nó trong `seo-audit.md` giờ là dead link. Hệ quả kinh doanh: mục tiêu "audit ≤2 ngày công" — vốn là mũi nhọn bán hàng — không đạt được vì tầng 1 vẫn phải làm tay.
**New method:** Một script dùng chung `scripts/seo-audit.js <url>...` nhận URL làm tham số. **Tên khách chỉ được xuất hiện trong đường dẫn output, không bao giờ trong tên file code.**
**Generalizes:** Có — mọi skill có phần chạy script đều dính đúng lỗi này.

### 2026-08-23 · seo-audit · method · PROMOTED: 2026-08-23 → seo-audit
**Seen in:** thanhoattinh.net (1) — promote sớm vì là `fix`
**Situation:** Dự án chạy 5/10 workstream, sửa được 14/14 H1 và 46/46 canonical, PSI 93–97 — nhưng KPI table ghi `baseline: unknown` cho traffic, thứ hạng và lead.
**Old way failed:** Can thiệp trước khi chụp baseline. Công sức bỏ ra **không quy đổi được thành bằng chứng bán hàng**, và không dựng lại được kể cả hồi tố. Một quý làm việc thật mà không có case study kết quả.
**New method:** Chụp baseline khách quan **trước** mọi can thiệp, ngay buổi onboarding. Ghi cả những chỉ số không đo được là `unknown` kèm lý do — một audit ghi `baseline: unknown — cần quyền GSC` hữu ích hơn một audit đoán số, và nó biến thành yêu cầu cấp quyền cụ thể.
**Generalizes:** Có — mọi engagement, mọi skill. Đã encode thành mục "Baseline before treatment" trong `seo-audit/SKILL.md` và luật đo baseline ở `checklist-kiem-chung.md` GĐ2.

---

## Promoted — lịch sử

| Ngày | Target | Bài học | Seen in |
|---|---|---|---|
| 2026-08-23 | `seo-audit` | Script phải nhận URL làm tham số; tên khách không nằm trong tên file code | thanhoattinh.net |
| 2026-08-23 | `seo-audit` | Chụp baseline trước can thiệp; ghi `unknown` kèm lý do thay vì đoán | thanhoattinh.net |

---

## Falsifiability của chính cơ chế này

Tuyên bố cần chứng minh: *"khách sau rẻ hơn khách trước."* Đo bằng chỉ số team đã có — **giờ công/khách, so theo lứa ở cùng tháng phục vụ**: khách #1 ở tháng 2 so với khách #2 ở tháng 2.

| Lứa | Giờ tháng 2 | Giờ tháng 3 |
|---|---:|---:|
| Khách #1 | | |
| Khách #2 | | |
| Khách #3 | | |

**Sau ba khách mà giờ công không giảm thì nhật ký này là nghi lễ, không phải cơ chế.** Nói thẳng ra và dừng ghi, đừng nuôi nghi lễ bằng niềm tin.
