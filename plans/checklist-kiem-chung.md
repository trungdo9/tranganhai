# Checklist kiểm chứng — bằng lời chào hàng

**Cập nhật:** 23/08/2026 (bản 2 — bỏ giai đoạn phỏng vấn riêng theo góp ý team) · **Trạng thái:** chưa bắt đầu
**Nguồn:** [`chien-luoc-khoi-dong.md`](chien-luoc-khoi-dong.md) §5–§7 và [`phong-marketing-ai.md`](phong-marketing-ai.md). Tick trực tiếp vào file; ghi kết luận vào Nhật ký quyết định (`chien-luoc-khoi-dong.md` §8).

**Nguyên tắc của bản 2:** pain đã biết từ dự án Xuyên Việt — không hỏi lại nữa. Ẩn số là **"họ có chịu thay đổi và chi tiền không"**, và thứ duy nhất đo được điều đó là **một lời chào hàng thật, có giá, đặt trên bàn**. Mọi buổi gặp là buổi bán. Dữ liệu kiểm chứng = tỉ lệ chốt + nhật ký từ chối.

**Chuẩn bằng chứng:** chỉ tick "đậu" khi có **người trả tiền**. Lời khen, "hay đấy để anh xem" → ghi vào nhật ký từ chối loại *không khẩn cấp*. Với người quen, chuẩn càng nghiêm vì họ dễ nể nang.

**Cam kết vs giả định *(bổ sung 23/08 — nguyên tắc #6)*:** các ô trong checklist này là **cam kết** — đầu vào team kiểm soát được, trượt cái nào là lỗi thực thi. Còn MRR, số khách chốt, tỉ lệ chốt, giờ công, tỉ lệ giữ chân là **giả định đang kiểm chứng** ([`phong-marketing-ai.md`](phong-marketing-ai.md) §9) — sai thì học, không phải trượt. Đừng lẫn hai loại: chỉ tiêu trượt thì người ta tự trách, giả định sai thì người ta học được.

---

## Giai đoạn −1 — Điều kiện tiên quyết: kit hoàn thiện *(chốt 23/08)*

> Workstream riêng, **không tính vào ngân sách giờ công của Giai đoạn 0**. Chưa xong thì **dời ngày bắt đầu chào hàng** — không vừa bán vừa xây. Xem `chien-luoc-khoi-dong.md` §0 "Giả định nền" để biết cái gì sập nếu bỏ qua bước này.

- [ ] Mọi skill dùng trong giao hàng H1 có phương pháp thật, không còn placeholder.
- [ ] **`scripts/seo-audit.js <url>` chạy được** — không có nó thì audit ≤2 ngày công không đạt, và audit là mũi nhọn bán hàng.
- [ ] Chạy thử toàn pipeline trên **1 site nháp** từ audit → cluster → brief → bài → publish, bấm giờ thật.
- [ ] Số giờ đo được ở lần chạy thử này là **baseline giờ công/khách** — điền vào bảng giả định `phong-marketing-ai.md` §9.

---

## Giai đoạn 0A — Ngày 1–2: bốn phép thử rẻ nhất, làm TRƯỚC mọi việc khác *(bổ sung 23/08)*

> Sắp theo *chi phí thấp nhất để lật đổ giả định lớn nhất*. Mỗi ô dưới đây tốn từ 1 giờ đến nửa buổi, và mỗi ô đều có thể thay đổi toàn bộ Giai đoạn 0B.

- [x] ~~**Case study thanhoattinh CÓ SỐ hay KHÔNG?**~~ → **ĐÃ TRẢ LỜI 23/08: nhánh "số còn non".** Có số kỹ thuật (on-page **52,1/100** · **823** URL · PSI **93–97**, LCP ≤2,3s, CLS 0 · **14/14** H1 · **46/46** canonical), **không** có traffic/thứ hạng/lead — KPI table ghi `unknown`, chưa từng chụp baseline nên không dựng lại hồi tố được. Execution dừng ở 5/10 workstream từ 260616. **Hành động đã chốt:** đóng khung case study thành *"chẩn đoán có phương pháp + sửa lỗi đã verify"*, **đôn audit-về-chính-khách + demo lên làm vũ khí số 1**. Chi tiết: `phong-marketing-ai.md` §1.
  - [ ] **Việc còn lại:** viết case study 1 trang theo khung mới (không chờ số kinh doanh nữa — sẽ không có).
  - [ ] **Xin quyền GSC/GA4 của khách pilot NGAY buổi onboarding** — đây là bài học từ chính dự án này.
- [ ] **Danh sách 10–15 công ty quen** *(2 giờ)*: tên · ngành · người quyết định · độ thân (1–3) · kênh liên hệ. Xếp theo độ thân × độ khớp ngách. **Đây là mẫu số của mọi kill criteria** — nếu thực tế chỉ có 7 công ty và 3 sai chân dung thì mọi ngưỡng "/10" phải viết lại. Đánh dấu công ty nào là **quan hệ cấp 2** (được giới thiệu, không phải bạn thân).
- [ ] **Gọi 10 cuộc × 3 phút — sàng lọc + phân offer** *(nửa buổi)*. Ba câu:
  1. *"Website bên anh giờ còn dùng để bán không, hay chỉ để đó?"* → tín hiệu **H1**
  2. *"**Bảng giá của anh đang nằm ở đâu — Excel, phần mềm, hay sales tự nhớ và tự thương lượng?**"* → **điều kiện tiên quyết của H2**. Nếu giá nằm trong **đầu sales** (thương lượng theo khách/sản lượng/quan hệ — rất phổ biến ở phân phối vật tư công nghiệp) thì agent **không có gì để tra**, H2 chết vì lý do căn bản hơn nhiều so với chuyện tích hợp kênh.
  3. *"Một ngày sales soạn bao nhiêu báo giá?"* → tiết kiệm 10–20 phút/lượt chỉ thành tiền khi có nhiều lượt.
  - [ ] Kết quả: `___` công ty H1-first · `___` công ty H2-first · **`___` công ty có bảng giá dạng số** · lượng báo giá/ngày trung bình `___`
  - *Không còn hỏi "Zalo OA hay Zalo cá nhân" — H2 đã định vị lại thành **trợ lý báo giá** (sales tự bấm gửi) nên v1 không đụng tới API Zalo. Chân tự động hóa kênh đẩy sang v2 theo luật số 2.*
- [ ] **Điền §0 runway** trong `chien-luoc-khoi-dong.md`: tiền mặt · burn/tháng · số tháng chịu được nếu doanh thu = 0 · Xuyên Việt còn trả tiền không · ngưỡng buộc phải nhận việc ngoài. **Không có nó thì mọi kill criteria chỉ là lý thuyết** — thực tế người ta pivot khi hết tiền.

**Xong Giai đoạn 0A khi:** tick đủ 4 ô. Nếu **<3 công ty có bảng giá dạng số** → bỏ demo H2, sửa Giai đoạn 0B trước khi bắt đầu nó. Nếu **danh sách ra ít hơn 10 công ty đúng chân dung** → viết lại mẫu số của toàn bộ kill criteria trước khi gặp ai.

---

## Giai đoạn 0B — Chuẩn bị vũ khí bán (ngày 3–14)

- [ ] **Case study thanhoattinh 1 trang — khung "chẩn đoán có phương pháp"** *(nhánh đã chốt ở GĐ0A, không còn phải chọn)*. Nội dung: audit 3 tầng + benchmark 3 đối thủ → rubric chấm on-page thang 100, baseline đo được **52,1** → triage P0/P1/P2 → **14/14 H1 · 46/46 canonical · PSI 93–97 · LCP ≤2,3s · CLS 0** đã verify. **Không in con số traffic/thứ hạng/lead nào** — không có, và bịa ra là mất uy tín ngay ở buổi đầu. Câu chốt: *"đây là cách bên em chẩn đoán và sửa; số kinh doanh thì em đo trên chính site của anh, từ ngày đầu."*
- [ ] **Audit pipeline chuẩn hóa** chạy ≤2 ngày công/công ty (SEO + AI visibility + keyword gap). Test bằng 1 công ty trong danh sách.
- [ ] **Demo H2 "trợ lý báo giá" — CÓ ĐIỀU KIỆN:** chỉ xây nếu GĐ0A cho ra **≥3 công ty có bảng giá dạng số** và đủ lượng báo giá/ngày. **1–2 ngày công.** Luồng demo 5 phút: **dán tin hỏi giá vào** → agent bóc sản phẩm/số lượng/quy cách → tra bảng giá mẫu (Excel giả lập) + tồn → **xuất báo giá đúng template** → ghi log + đặt nhắc follow-up. Kết câu: ***"anh vẫn là người bấm gửi."*** *Đây là "cho xem" thay cho "hỏi họ có đau không".*
  - [ ] **Không đạt điều kiện** → bỏ qua ô này, dồn ngày công cho audit pipeline + case study, và ghi vào kill criteria H2 (điều kiện tiên quyết không thỏa: giá nằm trong đầu sales → không có gì để tra).
  - [ ] **Ba câu chốt phải nói trong demo** — mỗi câu gỡ một ràng buộc: ① *"không cần đổi cách anh đang nhắn Zalo"* (thoát API) · ② *"người gửi vẫn là sales của anh"* (thỏa human-in-the-loop của Luật AI **bằng thiết kế**) · ③ *"agent không tự báo giá cho khách anh — nó soạn, anh duyệt"* (xóa objection lớn nhất).
- [ ] **Tự tuân thủ Luật AI cho hệ thống của chính team:** gán nhãn nội dung AI máy đọc được · thông báo người dùng đang tương tác với AI · lưu log + tài liệu kỹ thuật · human-in-the-loop. **Ân hạn 01/03/2027 chỉ dành cho hệ thống chạy trước 01/03/2026 — mọi agent giao từ nay phải tuân thủ ngay.** Chi phí bắt buộc dù sao, đồng thời là **proof duy nhất của H4**.
- [ ] **Điều khoản hợp đồng** (`phong-marketing-ai.md` §4): trần trách nhiệm = phí 3 tháng gần nhất · khách duyệt trước khi xuất bản · sở hữu nội dung · loại trừ ý kiến pháp lý · nghĩa vụ gán nhãn AI thuộc bên nào.
- [ ] **Demo content 30 giây:** nhập thông tin doanh nghiệp của khách → xuất 5 bài đúng brand voice. Chuẩn bị sẵn trên marketing-kit, chỉ cần thay input theo từng công ty.
- [ ] **One-pager + bảng giá** (bậc thang gói trong `phong-marketing-ai.md` §4) + điều khoản pilot người quen (giảm 30–40%, thời hạn 3 tháng, đổi case study + 2 referral). **Ghi rõ mục bảo mật:** triển khai trên tài khoản Claude/ChatGPT Team chính chủ của khách.
- [ ] **Đọc [`painpoint-map.md`](painpoint-map.md)** — cả team nắm 4 nhóm pain (A: kinh doanh B2B công nghiệp · B: dùng AI rời rạc · C: dữ liệu & bảo mật · D: chưa dùng AI) và bảng ánh xạ pain → offer → góc nói.
- [ ] **Đọc [`so-lieu-da-kiem-chung.md`](so-lieu-da-kiem-chung.md)** — bắt buộc trước khi in bất kỳ con số nào. Nắm: 3 con số bị loại · căn cứ pháp lý mới (Luật 91/2025, NĐ 356/2025, Luật AI 134/2025) · bộ số ROI dùng được (+15% năng suất CSKH, −18% thời gian/bài, 5–15% chi tiêu marketing) · neo giá thị trường thật.
- [ ] **Rà soát toàn bộ tài liệu bán:** không còn con số nào thuộc danh sách cấm dùng; không còn chỗ nào viện dẫn Nghị định 13/2023; không còn tuyên bố "tiết kiệm 70%" / "cắt giảm 40–60%" / "giải phóng 80%".
- [ ] **Kịch bản buổi bán 60 phút — MỘT OFFER** cả team thử vai 1 lần: đưa audit in sẵn → khoảnh khắc ChatGPT → **một** demo (content nếu H1-first, H2 nếu H2-first) → lá bài bảo mật → chào pilot có giá → 15 phút khám phá (bộ câu hỏi §7). Góc nói cho từng pain: [`painpoint-map.md`](painpoint-map.md) §5.
  - *Vì sao bỏ chào kép (sửa 23/08):* kịch bản 8 mục của bản cũ cần **58–68 phút chưa tính một giây nào cho khách nói** và chưa tính 10 phút trà nước mở đầu. Nặng hơn: khách xem hai hệ thống thì không đánh giá được hệ nào → "để anh suy nghĩ", rồi bị ghi nhầm vào nhật ký từ chối loại ① trong khi nguyên nhân thật là "chào rối quá". Và tỉ lệ chốt **theo từng offer** — đầu ra chính của Giai đoạn 1 — không tính được nếu mỗi buổi chào cả hai.
  - Demo còn lại **giữ trong túi**, chỉ mở ra khi khách tự nêu đúng pain đó.

**Xong Giai đoạn 0B khi:** tick đủ **11 ô** *(sửa 23/08 — bản cũ ghi "6 ô" trong khi danh sách có 10, cổng thoát mơ hồ)* **và** đặt được ≥5 lịch gặp.

---

## Giai đoạn 1 — Chào hàng (tuần 3–6): 8–10 buổi bán

**Chia mẫu trước khi bắt đầu** *(từ cuộc gọi sàng lọc ở GĐ0A)*: ~5 công ty **H1-first** · ~5 công ty **H2-first** · trong đó **≥3 buổi phải là quan hệ cấp 2** (được giới thiệu, chưa từng ăn cơm chung — đây là mẫu duy nhất phản ánh thị trường, người quen thân chỉ cho ra tín hiệu nể nang).

Mỗi buổi, tick đủ **6 việc** *(sửa 23/08 — bản cũ ghi "5 việc" trong khi danh sách có 6)*:

- [ ] Buổi 1 · [ ] Buổi 2 · [ ] Buổi 3 · [ ] Buổi 4 · [ ] Buổi 5 · [ ] Buổi 6 · [ ] Buổi 7 · [ ] Buổi 8 · [ ] Buổi 9 · [ ] Buổi 10

Trong từng buổi:
1. Đưa **bản audit in sẵn về chính công ty họ** — mở đầu bằng "3 thứ đang mất tiền", không thuyết trình về mình.
2. **Khoảnh khắc ChatGPT:** hỏi AI về ngành họ ngay tại bàn — họ có được nhắc tên không.
3. **MỘT demo, theo offer đã phân trước** *(sửa 23/08 — bản cũ là "demo kép")*: H1-first → content 30 giây (nhập thông tin DN của chính họ → 5 bài đúng brand voice, hiệu ứng "Aha"). H2-first → trợ lý báo giá 5 phút: **dán tin hỏi giá vào → báo giá hoàn chỉnh đúng template**, kết bằng *"anh vẫn là người bấm gửi"*. **Demo còn lại giữ trong túi**, chỉ mở khi khách tự nêu đúng pain đó.
4. **Lá bài bảo mật:** triển khai trên **tài khoản chính chủ của khách** (Claude Team / ChatGPT Team) — dữ liệu không rời tài khoản DN. Căn cứ đúng: **Luật BVDLCN 91/2025/QH15 + Nghị định 356/2025** (❌ KHÔNG nói "Nghị định 13/2023" — đã hết hiệu lực 01/01/2026). Nói chủ động, đừng đợi bị hỏi. **Không bán bằng sợ hãi** — DN nhỏ có miễn trừ 5 năm; kịch bản nói đúng ở [`so-lieu-da-kiem-chung.md`](so-lieu-da-kiem-chung.md) §5.2.
5. **Chào pilot có giá ngay tại bàn — MỘT offer duy nhất, đã chọn trước** — không ra về mà chưa đưa offer. Mục tiêu cả vòng: **≥1 khách trả giá niêm yết**, không giảm.
6. **15 phút khám phá** (bộ câu hỏi §7) + xin 1–2 giới thiệu. ❌ **Không hỏi câu Luật AI trong buổi này** — đã chuyển sang cuộc gọi follow-up sau khi khách đã quyết (`chien-luoc-khoi-dong.md` §7): hỏi ở đây vừa làm nhiễu dữ liệu H4, vừa trao cho khách lý do hoàn hảo để hoãn chính offer vừa chào.

Sau từng buổi (trong 24h):
- [ ] Ghi kết quả: chốt / hẹn bước tiếp / từ chối. Ghi rõ **offer nào đã chào** và **quan hệ cấp 1 hay cấp 2**.
- [ ] Nếu từ chối → điền **nhật ký từ chối** (bảng dưới), xếp đúng 1 trong 6 loại.

Sau khi khách đã quyết (chốt hoặc từ chối) — **cuộc gọi follow-up kiểm chứng H4**:
- [ ] Hỏi: *"Anh có biết Việt Nam đã có Luật Trí tuệ nhân tạo, hạn tuân thủ tháng 3 sang năm không?"* → rồi: *"Bên anh có muốn em rà soát xem hệ thống hiện tại đang thiếu gì không?"*
- [ ] Ghi **hành vi**, không ghi cảm xúc: có chủ động hỏi bước tiếp theo không · có nhận lịch rà soát **có tính phí** (2–3 triệu) không. Đếm: `___/10`

**Đọc nhật ký từ chối ngay sau buổi thứ 4** — không đợi hết 10. Nửa đầu mẫu là lúc sửa còn kịp và còn rẻ.

**Việc chạy song song (1 buổi, chi phí ≈ 0):**
- [ ] **Buổi làm việc với Xuyên Việt cho H3:** nghe quy trình soạn báo cáo quan trắc/giám sát — đo % giờ công là soạn thảo lặp lại; nếu ≥30% → làm 1 báo cáo mẫu từ dữ liệu thật cho họ chấm.

### Nhật ký từ chối (điền sau mỗi buổi không chốt)

| Buổi | Công ty | Offer đã chào (H1/H2) | Quan hệ cấp 1/2 | Lý do từ chối (1/6 loại) | Nguyên văn câu nói của họ |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |

*6 loại: ① không khẩn cấp ("để từ từ") · ② không tin kết quả · ③ không có ngân sách · ④ chê giá · ⑤ sai người quyết định · ⑥ sai pain.*

**Luật đọc nhật ký *(sửa 23/08 — bản cũ đặt ngưỡng ≥70%)*:** với 10 buổi, chốt 2 thì còn 8 lời từ chối chia vào 6 loại — ngưỡng 70% đòi **6/8 rơi đúng một ô**, tức cơ chế học duy nhất thay thế cho phỏng vấn được thiết kế để **không bao giờ nổ**. Ngưỡng đúng với cỡ mẫu này:

- **Kích hoạt khi loại đứng đầu có ≥3 lần VÀ gấp đôi loại thứ hai.**
- **Nguyên văn câu nói của khách là dữ liệu chính**, tỉ lệ chỉ là dữ liệu phụ — với n=8 thì đọc 8 câu nói thật cho nhiều thông tin hơn mọi phép chia.
- Hướng sửa: ① → đổi cách mở đầu cho đau hơn · ② → case study thêm số, pilot nhỏ hơn · ④ → xem lại gói/neo giá · ⑤ → hẹn lại đúng người · ⑥ → đổi offer H1↔H2.

---

## Giai đoạn 2 — Giao pilot trả phí (tuần 5–8)

- [ ] **2–3 pilot H1:** hợp đồng quý · thu trước tháng đầu · giá pilot có thời hạn ghi trong hợp đồng.
- [ ] **1 pilot H2 trợ lý báo giá** (nếu có công ty đưa bảng giá + template): 5–15 triệu, đúng 1 quy trình, tiêu chí thành công định trước bằng số — vd: **≥80% báo giá agent soạn được sales gửi đi mà không sửa gì đáng kể** · thời gian từ lúc nhận tin đến lúc gửi báo giá giảm còn `___` phút. *Không đo bằng "phản hồi tự động <15 phút" nữa — người gửi là sales, nên thước đo là **thời gian soạn**, không phải độ trễ máy.*
- [ ] **Ghi giờ công thật từng khách từ ngày đầu** — số quyết định kịch bản H1+.
- [ ] **Đo baseline khách quan TRƯỚC khi bắt đầu** (buổi onboarding): số bài xuất bản/tuần · số báo giá/ngày · thời gian phản hồi trung bình · số lead/tháng. **Không dùng cảm nhận của khách làm thước đo** — METR đo được khoảng cách **39 điểm phần trăm** giữa cảm nhận và thực tế (người dùng tin mình nhanh hơn 20% trong khi thực tế chậm hơn 19%). Không có baseline thì không có case study, và chính team sẽ tin vào con số sai.
- [ ] SOP giao việc: onboarding 1 buổi phỏng vấn chuyên môn → lịch nội dung → báo cáo tháng 1 trang.
- [ ] Xin mỗi khách 2 referral khi giao báo cáo tháng đầu.

---

## Cổng quyết định (đối chiếu, không du di)

### Ngày 45
- [ ] Có ≥1 pilot trả phí chưa? **Chưa** → đọc nhật ký từ chối, sửa đúng loại chiếm đa số (offer/giá/wedge) **trước khi** gặp tiếp — không lặp lại nguyên công thức cũ.

### Ngày 90 — cổng vận hành + quyết định hướng đi
- [ ] **Gate H1:** ≥2 khách trả phí + ≥1 referral ấm → tăng tốc · 1 khách → sửa giá/phạm vi · 0 khách → đổi công thức.
- [ ] **Cổng vận hành H1+ (đo được ngay tại ngày 90):**
  - [ ] Giờ công/khách gói Nền ≤ 20h/tháng **và giảm dần**
  - [ ] ≥ 1 công cụ tích hợp được ≥ 2 khách cùng dùng (luật số 2)
  - [ ] **0 khách bỏ giữa chừng**
- [ ] **Kiểm tra chuẩn bằng chứng:** doanh thu từ **bên liên quan (Xuyên Việt) không tính** vào mẫu số · có **≥1 khách trả giá niêm yết** không · đã đủ **≥3 buổi quan hệ cấp 2** chưa (deal từ bạn thân chỉ tính **nửa tín hiệu**).
- [ ] **Kill criteria — đối chiếu từng dòng:**

| Giả thuyết | Chết nếu | Kết luận thực tế (điền sau) |
|---|---|---|
| H1 | **0/10** công ty nhận pilot trả phí sau khi xem audit về chính họ. *(1/10 = lặp một vòng, không giết — thống nhất với `phong-marketing-ai.md` §6)* | |
| H2 | **<3 công ty có bảng giá dạng số + đủ lượng báo giá/ngày** ở sàng lọc GĐ0A — giá nằm trong đầu sales thì agent không có gì để tra *(sửa 23/08: đây mới là điều kiện tiên quyết thật, không phải "có Zalo OA")*; hoặc sau 8–10 buổi có demo: không ai chịu đưa bảng giá để pilot, hoặc <2/10 muốn bước tiếp; hoặc pilot cho thấy **>50% báo giá agent soạn vẫn phải sửa tay đáng kể** trước khi gửi | |
| H3 | Bên tư vấn **không dám ký lên bản nháp do máy soạn** *(hỏi trách nhiệm trước, đo % sau)*; hoặc soạn thảo lặp lại <30% giờ công | |
| **H4** | **<2/10** công ty **chủ động hỏi bước tiếp theo** hoặc **đồng ý đặt lịch rà soát tuân thủ có tính phí** ở cuộc gọi follow-up; hoặc không tìm được đối tác luật *(sửa 23/08: bản cũ đo **nhận thức** với toán tử AND nên H4 sống sót trong đúng kịch bản tệ nhất — 4/10 biết luật mà 0/10 quan tâm)* | |

### Ngày ~150 — cổng H1+ *(tách ra 23/08)*
- [ ] **Giữ ≥ 2/3 khách pilot sau khi hết hợp đồng quý đầu** → đạt cả cổng ngày 90 và cổng này thì H1+ là hướng chính, H2 thành lớp expand.

> **Vì sao tách:** pilot bắt đầu tuần 5–8 (ngày 35–56), nên "sau quý đầu" của hợp đồng quý rơi vào **ngày 125–146**. Tại ngày 90 chưa khách nào đi qua điểm quyết định gia hạn — điều kiện giữ chân đặt ở đó là **không thể đánh giá**.

- [ ] Ghi toàn bộ kết luận vào Nhật ký quyết định (`chien-luoc-khoi-dong.md` §8) và cập nhật bảng điểm §4.

---

## Theo dõi hằng tuần (điền mỗi thứ Sáu)

| Tuần | Buổi chào lũy kế | Pilot chốt (H1/H2) | Lý do từ chối phổ biến nhất | Giờ công/khách | Referral nhận | Ghi chú |
|---|---|---|---|---|---|---|
| 1 | | | | | | |
| 2 | | | | | | |
| 3 | | | | | | |
| 4 | | | | | | |
| 5 | | | | | | |
| 6 | | | | | | |
| 7 | | | | | | |
| 8 | | | | | | |
