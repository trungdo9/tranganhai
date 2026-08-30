# Bản đồ pain point — thư viện dùng chung cho bán hàng & nội dung

**Ngày soạn:** 23/08/2026 · **Vai trò:** nguồn tham chiếu duy nhất về pain point cho mọi tài liệu bán, kịch bản buổi bán, landing page và content.
**Nguồn hợp nhất:**
1. Phân tích trực tiếp từ dự án Xuyên Việt / phân khúc B2B công nghiệp (nhóm A — chi tiết đầy đủ ở [`phong-marketing-ai.md`](phong-marketing-ai.md) §3).
2. [`raw/Chiến Lược AI Doanh Nghiệp Việt.md`](../raw/Chiến%20Lược%20AI%20Doanh%20Nghiệp%20Việt.md) — nghiên cứu thị trường SME Việt Nam về ứng dụng AI (nhóm B, C, D + số liệu nền).

---

## 0. Số liệu nền — ĐÃ KIỂM CHỨNG 23/08/2026

> 🔴 **Đã kiểm chứng bằng nghiên cứu web (3 nhóm độc lập). Kết quả: 3 con số phải loại bỏ, 1 văn bản pháp lý đã hết hiệu lực.**
> **Nguồn dữ kiện đầy đủ + danh sách con số CẤM DÙNG: [`so-lieu-da-kiem-chung.md`](so-lieu-da-kiem-chung.md).** Không đưa con số nào vào tài liệu bán nếu nó không có trong file đó.

| Số liệu dùng được | Nguồn | Ý nghĩa khi bán |
|---|---|---|
| **18%** DN Việt Nam đã ứng dụng AI · **74% / 17% / 9%** (cơ bản / trung cấp / toàn diện) · **55%** vướng thiếu kỹ năng · **24%** tự tin đủ năng lực AI | AWS + Strand Partners, *"Unlocking Vietnam's AI Potential"*, 18/09/2025, n=1.000 lãnh đạo DN (dữ liệu 2024) | "Anh không tụt hậu — đa số mới chạm bề mặt" + lý do done-with-you thắng bán tool |
| **Chỉ 2,2%** DN làm chủ phân tích dữ liệu để ra quyết định · **35,3%** mới chỉ số hóa bản cứng→bản mềm · **48,8%** từng dùng giải pháp CĐS rồi **ngừng** | Báo cáo thường niên Chuyển đổi số DN — Cục Phát triển DN (Bộ KH&ĐT) + GIZ, n≈1.300 | **Bộ ba mạnh nhất.** Con số 48,8% giải thích đúng vì sao khách hoài nghi — dùng mở đầu buổi bán |
| **41%** marketer Việt khó chứng minh ROI từ AI — cao nhất ĐNA | Yandex Ads "Clear Signal", YouGov, n=649, 12/2025 | Chính là pain B3 — nói bằng số của ngành họ |
| Rào cản chi phí **49%** (DN vừa/lớn) hoặc **53,3%** (bán lẻ) | UOB Business Outlook 2026, n=226 · Sapo 30/01/2026, n=15.000 | Lý do có gói mồi + pilot nhỏ |
| **Gần 98%** trong **940.078** DN đang hoạt động là DNNVV (31/12/2024) | Bộ Tài chính / Bộ KH&ĐT | Thị trường đủ rộng cho ngách hẹp |

**❌ Ba con số đã bị loại (đừng dùng lại):** "70% dữ liệu chưa chuẩn hóa" (không có nguồn — thay bằng 2,2% ở trên) · "34% rào cản chi phí" (một nguồn, lệch mọi khảo sát khác) · tên báo cáo *"AI and Digital Transformation Strategies for Vietnamese Enterprises"* (**báo cáo này không tồn tại** — trích dẫn bịa do AI sinh ra).

**⚖️ Căn cứ pháp lý đã cập nhật:** Nghị định 13/2023/NĐ-CP **hết hiệu lực 01/01/2026**. Thay bằng **Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15** + **Nghị định 356/2025/NĐ-CP**. Việt Nam cũng đã có **Luật Trí tuệ nhân tạo số 134/2025/QH15** (hiệu lực 01/03/2026, hạn tuân thủ 01/03/2027). Chi tiết + cách nói đúng: `so-lieu-da-kiem-chung.md` §5.

---

## 1. Nhóm A — Pain kinh doanh của SME B2B công nghiệp *(nguồn: dự án Xuyên Việt)*

> ⚠️ **Nhóm A có nguồn n=1 — dùng làm giả thuyết, không dùng làm dữ kiện đã xác lập** *(bổ sung 23/08 theo [`doi-chung-chien-luoc.md`](doi-chung-chien-luoc.md) §1.3)*.
>
> Bảy pain dưới đây quan sát được từ **một** doanh nghiệp (Xuyên Việt), và Xuyên Việt đồng thời là proof của H1, cố vấn chuyên môn + khách đầu tiên của H3 — tức toàn bộ nền bằng chứng đang tụ về **một pháp nhân, và là bên liên quan**.
>
> Hệ quả thực tế: quyết định bỏ giai đoạn phỏng vấn (`checklist-kiem-chung.md`, nguyên tắc bản 2) **vẫn đúng**, nhưng đúng vì lý do khác — phỏng vấn đo ý kiến, offer đo hành vi — **không phải** vì "pain đã biết rồi". Vì vậy: giữ nguyên **15 phút khám phá cuối mỗi buổi bán** làm chốt an toàn, và coi mỗi pain nhóm A là điều **cần được xác nhận lại** ở công ty thứ hai, thứ ba. Nếu 3–4 buổi đầu cho thấy pain thật khác hẳn, đó là dữ liệu quan trọng hơn mọi bảng ánh xạ trong file này.

Tóm tắt — chi tiết + góc tấn công từng cái ở `phong-marketing-ai.md` §3:

- **A1** Không tuyển được / không giữ được người marketing
- **A2** Agency viết sáo rỗng — thuê rồi vẫn phải tự làm
- **A3** Doanh thu treo trên quan hệ cá nhân — pipeline vô hình
- **A4** Website có mà như không — từng mất tiền SEO nên hoài nghi
- **A5** Bị ép về cuộc đua giá — không có thế "tư vấn"
- **A6** Khách hàng của họ đã hỏi AI trước — vắng mặt là không tồn tại
- **A7** Mù số liệu — chi marketing như đốt đèn dầu

## 2. Nhóm B — Pain của DN **đã dùng AI nhưng rời rạc**

- **B1 · Bội thực công cụ (tool fatigue):** nhân sự tự phát dùng 5–10 tool lẻ (ChatGPT cá nhân, Midjourney, Canva…), tốn thuê bao hằng tháng, không tool nào nối với tool nào.
- **B2 · Đầu ra chắp vá, lệch brand voice:** "mạnh ai nấy hỏi" → nội dung thiếu nhất quán; sửa tay còn tốn hơn làm truyền thống.
- **B3 · Không đo được ROI:** thấy nhân viên "có dùng AI" nhưng không chỉ ra được doanh thu tăng hay chi phí giảm ở đâu → cảm giác "đầu tư mơ hồ".
- **B4 · "Biết nhưng không biết làm":** biết gõ prompt lẻ, bất lực khi tích hợp vào quy trình lõi (CSKH từ Zalo/Fanpage vào CRM, báo cáo tự động).
- **B5 · Bẫy copy-paste:** có AI nhưng vẫn ngập việc tay giữa Excel cũ và phần mềm quản lý — năng suất không tăng, áp lực dồn lên quản lý cấp trung.

## 3. Nhóm C — Pain **dữ liệu & bảo mật** (cắt ngang mọi nhóm)

- **C1 · Dữ liệu rải rác khắp nơi:** khách hàng trong Excel của sales, lịch sử chat trong Zalo cá nhân/Fanpage, tài chính trong phần mềm kế toán cũ, tài liệu tản mác Drive.
- **C2 · "Nguyên liệu bẩn" khiến AI bất lực:** hỏi AI trên nền dữ liệu đứt gãy → trả lời bịa (hallucination) hoặc chung chung → mất niềm tin vào AI.
- **C3 · Rò rỉ qua AI công cộng:** nhân viên dán bảng lương, danh sách khách, chiến lược lên tài khoản AI miễn phí → rủi ro rò rỉ + vi phạm **Luật Bảo vệ dữ liệu cá nhân 91/2025/QH15** (hiệu lực 01/01/2026). Lưu ý: dùng dịch vụ AI nước ngoài để xử lý dữ liệu cá nhân người Việt **chính là chuyển dữ liệu xuyên biên giới** — cần sự đồng ý của chủ thể dữ liệu, phạt đến 5% doanh thu năm trước.

## 4. Nhóm D — Pain của DN **chưa dùng AI / ngần ngại**

- **D1 · Kháng cự ngầm:** nhân viên và quản lý cấp trung sợ AI thay mình → không hợp tác khi thử nghiệm.
- **D2 · "Biết quan trọng nhưng không biết bắt đầu từ đâu":** ngộp thuật ngữ (LLM, Agentic, fine-tuning), không biết nghiệp vụ nào của mình nên áp dụng trước để khỏi "ném tiền qua cửa sổ".
- **D3 · Ảo giác chi phí:** nghĩ AI là cuộc chơi trăm triệu–tỷ đồng của tập đoàn, phải có đội lập trình riêng.

---

## 5. Ánh xạ pain → offer & góc nói trong buổi bán

| Pain | Offer đáp ứng | Góc nói tại bàn |
|---|---|---|
| A1–A7 | H1 Phòng Marketing AI | Xem `phong-marketing-ai.md` §3 (kịch bản đầy đủ) |
| B1, B3 | Audit "khám sức khỏe" | "Em cộng thử tiền thuê bao tool lẻ mỗi tháng của bên anh — và chỉ ra nó đang không nối thành quy trình nào" + báo cáo ROI 1 trang/tháng |
| B4, B5 | **H2 trợ lý báo giá** *(định vị lại 23/08)* | Không giải thích — **demo**: dán tin hỏi giá vào → báo giá hoàn chỉnh đúng template trước mắt họ. Chốt bằng ba câu, mỗi câu gỡ một ràng buộc: *"không cần đổi cách anh đang nhắn Zalo"* · *"người gửi vẫn là sales của anh"* · *"agent soạn, anh duyệt — nó không tự báo giá cho khách anh"*. Điều kiện tiên quyết phải sàng lọc trước: **bảng giá có ở dạng số không** (nếu giá nằm trong đầu sales thì không có gì để tra) |
| B2 | H1 + demo content | Demo 30 giây: nhập thông tin DN của chính họ → 5 bài đúng brand voice (hiệu ứng "Aha") |
| C1, C2 | Tuần 1–2 của quy trình bàn giao (khảo sát + gom dữ liệu sạch) | "Agent cắm là chạy sẽ bịa — nên bước đầu của bên em luôn là gom dữ liệu của anh về một mối" |
| **C3** | **Lá bài bảo mật** — triển khai trên **tài khoản chính chủ của khách** (Claude Team / ChatGPT Team): dữ liệu không rời tài khoản DN. Căn cứ: **Luật BVDLCN 91/2025/QH15 + Nghị định 356/2025** (KHÔNG phải NĐ 13/2023 — đã hết hiệu lực) | Objection-killer dùng trong **mọi** buổi bán. **Không bán bằng sợ hãi**: DN nhỏ/startup được miễn DPIA & DPO trong 5 năm (đến 01/01/2031) — trừ khi xử lý dữ liệu nhạy cảm (nay gồm cả **thông tin tài chính, dữ liệu hành vi, ảnh CCCD**) hoặc dữ liệu của số lượng lớn chủ thể. Nghĩa vụ **xin đồng ý khi chuyển dữ liệu ra nước ngoài thì không được miễn** — phạt đến 5% doanh thu. Kịch bản nói đúng: `so-lieu-da-kiem-chung.md` §5.2 |
| **Mới — tuân thủ Luật AI** | Dịch vụ kỹ thuật: phân loại hệ thống AI theo 3 mức rủi ro · gán nhãn nội dung AI **định dạng máy đọc được** · lưu log + tài liệu kỹ thuật · giữ human-in-the-loop | **Luật Trí tuệ nhân tạo 134/2025/QH15** hiệu lực 01/03/2026; hệ thống AI đã chạy phải tuân thủ đầy đủ trước **01/03/2027** (01/09/2027 với tài chính/y tế/giáo dục). Còn ~6 tháng — áp lực thời gian **thật, có căn cứ pháp lý**, không cần thổi phồng. Phần lớn nghĩa vụ là việc kỹ thuật → đúng sở trường team. **Giới hạn:** team không phải hãng luật — chỉ nhận phần triển khai, phần ý kiến pháp lý cần đối tác luật |
| D1 | Đào tạo chuyển giao trong gói | Thông điệp "AI đỡ việc tay — người của anh lên vai quản trị AI", nhân viên là người được giải phóng, không phải bị thay |
| D2, D3 | Gói mồi giá thấp + demo tại bàn | "Không cần hiểu công nghệ — anh chỉ cần xem 30 giây này" + pilot nhỏ phạm vi 1 quy trình |

---

## 6. Điều chỉnh chiến lược rút ra từ file raw *(đã đồng bộ vào các tài liệu liên quan)*

1. **Thêm "lá bài bảo mật" vào mọi buổi bán và one-pager** — triển khai trên tài khoản chính chủ của khách. Đây vừa là objection-killer (C3), vừa là khác biệt cấu trúc so với đối thủ. **Kiểm chứng 23/08 xác nhận đây là lựa chọn kiến trúc đúng cho chính team, không chỉ là lời chào hàng:** nếu team xử lý dữ liệu khách trên tài khoản của mình, team thành đơn vị "kinh doanh dịch vụ xử lý dữ liệu cá nhân" → **mất miễn trừ SME** → buộc phải có DPO đủ tiêu chuẩn + nộp DPIA cho A05 Bộ Công an + cập nhật mỗi 6 tháng. Chi phí tuân thủ thật cho một team 3 người.
2. **Thêm demo content 30 giây vào kịch bản buổi bán** (bên cạnh demo H2): nhập thông tin doanh nghiệp của chính khách → 5 bài đúng brand voice ngay trước mắt. Content là thứ nhìn thấy bằng mắt — "wow factor" nhanh nhất.
3. **Gói mồi 2 mức:** người quen = buổi khám 45–60 phút **miễn phí** kèm audit rút gọn in sẵn (đổi case study + referral); khách lạnh inbound về sau = thu phí tượng trưng **490k–990k** để lọc người nghiêm túc. Audit đầy đủ 5–8 triệu giữ nguyên cho ai cần bản sâu (hoặc gộp vào tháng đầu retainer).
4. **Khung bàn giao pilot 4 tuần** (dùng làm SOP onboarding): T1 bảo mật + chốt workflow → T2 gom dữ liệu + "dạy việc" AI theo brand voice → T3 tích hợp kênh + chạy thử → T4 đào tạo nhân sự thành "nhà quản trị AI" + bàn giao SOP. *(Lưu ý 23/08: đừng hứa "tích hợp Zalo OA" ở T3 khi chưa kiểm tra khách có OA đã xác minh — Zalo cá nhân không có API chính thức, OA thì vướng cửa sổ phản hồi/hạn mức/ZNS tính phí. Mặc định T3 là gom kênh về một mối theo cách thủ công có hỗ trợ, tự động hóa kênh chỉ khi khách có OA thật và trả tiền yêu cầu — luật số 2.)*
5. **Ghi nhận ICP mở rộng về sau** (bán lẻ, F&B, bất động sản — theo file raw): pain nhóm B/C/D là **segment-agnostic**, nên tài sản bán hàng xây hôm nay dùng lại được khi mở rộng. Beachhead **vẫn giữ B2B công nghiệp** vì đường vào ấm là lợi thế số 1 của team hiện tại.
6. **Hai kênh không mâu thuẫn:** file raw đề xuất inbound (landing page + SEO + Google Ads) vì giả định "không có quan hệ"; thực tế team **có** mạng lưới đủ cho 8–10 buổi chào đầu. → Trình tự: warm outbound trước (checklist hiện tại), landing page dựng song song bằng chính marketing-kit (mục "dogfooding công khai" trong GTM) — nội dung landing lấy thẳng từ bản đồ pain này.
