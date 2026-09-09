---
title: "Luật 91/2025/QH15 Và AI Agent Doanh Nghiệp: Checklist Tuân Thủ Cho SME"
meta_description: "Luật 91/2025/QH15 và AI Agent doanh nghiệp: rủi ro dán dữ liệu lên AI công cộng, mức phạt tới 5% doanh thu, và checklist tự đánh giá tuân thủ cho SME."
slug: luat-91-2025-ai-agent-doanh-nghiep
target_keyword: "Luật 91/2025/QH15 và AI Agent doanh nghiệp"
row_id: 19
cluster_level: Cluster
priority: P0
legal_review_required: true
status: draft
word_count: 2269
schema_notes: "Note: TechArticle/DefinedTerm JSON-LD nên được sinh ở Stage 4 (seo-schema skill) khi có CMS target xác nhận — bản nháp này chưa nhúng JSON-LD sống. Bài đáp ứng Giao thức 2 (context hub §7.3): có 2 bảng thông số thực chứng bên dưới."
geo_notes: "GEO/AI-search: mỗi H2 mở bằng câu trả lời trực tiếp; định nghĩa rõ thuật ngữ pháp lý khi xuất hiện lần đầu; nguồn số liệu trích dẫn theo tên văn bản luật cụ thể; FAQ dùng H3 dạng câu hỏi cho AI-Overview/featured-snippet."
open_questions:
  - "HUMAN LEGAL SIGN-OFF REQUIRED before this article leaves draft status — content covers Luật 91/2025/QH15 compliance obligations."
  - "Bài chỉ dùng các chi tiết pháp lý đã có trong marketing-context.md (mức phạt 5% doanh thu, tên Luật 91/2025/QH15 và Nghị định 356/2025/NĐ-CP). Mọi điều khoản cụ thể khác (định nghĩa dữ liệu cá nhân, thời hạn xử lý vi phạm, cơ quan thực thi, ngưỡng quy mô doanh nghiệp áp dụng) đều đánh dấu [NEEDS DATA — cần đối chiếu văn bản luật gốc trước khi xuất bản] và KHÔNG được xuất bản nếu chưa có luật sư/chuyên viên pháp chế rà soát."
  - "Chưa có văn bản hướng dẫn thi hành chi tiết hoặc án lệ thực tế về mức phạt áp dụng cho SME quy mô nhỏ — cần cập nhật khi có dữ liệu."
---

# Luật 91/2025/QH15 Và AI Agent Doanh Nghiệp: Checklist Tuân Thủ Cho SME

> **Bài viết mang tính tham khảo vận hành, không thay thế tư vấn pháp lý chuyên môn.** Mọi quyết định tuân thủ cụ thể cần được rà soát bởi luật sư hoặc chuyên viên pháp chế trước khi áp dụng.

**Luật 91/2025/QH15 và AI Agent doanh nghiệp** là mối liên hệ mà nhiều SME Việt Nam chưa lường hết: khi nhân viên dán bảng giá, thông tin khách hàng hoặc dữ liệu nội bộ vào một công cụ AI công cộng để nhờ soạn thảo nhanh, hành vi đó có thể chạm vào phạm vi điều chỉnh của Luật Bảo vệ Dữ liệu Cá nhân 91/2025/QH15 — với mức phạt có thể lên đến **5% doanh thu** của doanh nghiệp. Bài viết này tổng hợp những gì đã được xác nhận trong hồ sơ tuân thủ của TRANG ANH AI, và cung cấp một checklist tự đánh giá vận hành cho SME trước khi triển khai AI Agent.

## Luật 91/2025/QH15 và Nghị định 356/2025/NĐ-CP quy định gì

Luật Bảo vệ Dữ liệu Cá nhân 91/2025/QH15, được hướng dẫn thi hành bởi Nghị định 356/2025/NĐ-CP, là khung pháp lý hiện hành tại Việt Nam điều chỉnh việc thu thập, xử lý và bảo vệ dữ liệu cá nhân — bao gồm dữ liệu khách hàng mà doanh nghiệp B2B thu thập trong quá trình bán hàng (tên, số điện thoại, địa chỉ, mã số thuế của đối tác).

Điểm mà mọi SME cần nắm trước tiên: khung pháp lý này đặt ra chế tài xử phạt có thể lên tới **5% doanh thu** đối với hành vi vi phạm quy định về bảo vệ dữ liệu cá nhân. Đây là con số duy nhất về mức phạt mà tài liệu hồ sơ nội bộ của chúng tôi xác nhận được từ nguồn có căn cứ.

Ngoài phạm vi này — ví dụ định nghĩa chi tiết thế nào là "dữ liệu cá nhân nhạy cảm", ngưỡng quy mô doanh nghiệp nào được miễn trừ một phần nghĩa vụ, thời hạn xử lý khi có yêu cầu xóa dữ liệu, hay cơ quan nào trực tiếp thực thi xử phạt — bài viết này **không tự suy diễn**. Đây là những điểm `[NEEDS DATA — cần đối chiếu văn bản luật gốc trước khi xuất bản]`, và SME nên yêu cầu tư vấn pháp lý chuyên môn đối chiếu trực tiếp văn bản luật gốc và Nghị định 356/2025/NĐ-CP trước khi coi bất kỳ diễn giải nào là căn cứ tuân thủ chính thức.

## Rủi ro cụ thể khi dùng AI công cộng cho dữ liệu nội bộ

Rủi ro lớn nhất trong thực tế vận hành hằng ngày không đến từ hệ thống AI Agent được thiết kế bài bản, mà từ thói quen cá nhân của nhân viên: dán dữ liệu nội bộ lên các công cụ AI công cộng không có cam kết bảo mật doanh nghiệp.

Ví dụ tình huống điển hình: một nhân viên sales nhận tin nhắn Zalo của khách hàng hỏi giá, muốn AI hỗ trợ soạn nhanh nội dung trả lời, nên copy nguyên văn tin nhắn — bao gồm số điện thoại dạng `0xxx-xxx-xxx` và tên công ty khách hàng — dán vào một chatbot AI miễn phí trên trình duyệt. Dữ liệu đó ngay lập tức rời khỏi phạm vi kiểm soát của doanh nghiệp và có thể được bên thứ ba (nhà cung cấp công cụ AI công cộng) lưu trữ hoặc sử dụng cho mục đích huấn luyện mô hình mà doanh nghiệp không hề hay biết.

Đây chính là điểm rủi ro C1 trong bản đồ 4 nhóm nỗi đau vận hành: "dữ liệu nội bộ bị dán tràn lan lên AI công cộng" — không phải một tình huống giả định, mà là hành vi phổ biến khi nhân viên muốn tiết kiệm thời gian mà không có công cụ nội bộ thay thế. Việc thiếu một hệ thống AI Agent chạy trên tài khoản chính chủ, có sẵn dữ liệu tra cứu, chính là lý do nhân viên phải "mượn" công cụ công cộng — và mỗi lần mượn như vậy là một lần rủi ro tuân thủ Luật 91/2025/QH15 phát sinh.

## Giải pháp kiến trúc tuân thủ: Dual-Layer Guardrail & PII Redaction

Giải pháp kiến trúc mà TRANG ANH AI áp dụng để chặn đứng rủi ro này ở nguồn là Giao thức 3 — **Dual-Layer Guardrail & PII Redaction**, gồm hai lớp phòng thủ độc lập:

**Lớp 1 — Policy Boundary (Ranh giới chính sách):** một lớp kiểm duyệt chính sách được đặt trước khi bất kỳ nội dung nào được xử lý qua AI. Lớp này khóa cứng các ranh giới nghiệp vụ (ví dụ mức chiết khấu sàn) và ngăn các yêu cầu vượt khung tự động được xử lý — mọi trường hợp vượt ranh giới được chuyển thẳng về người có thẩm quyền quyết định, thay vì để AI tự xử lý.

**Lớp 2 — PII Redaction (Ẩn danh hóa dữ liệu cá nhân):** trước khi bất kỳ đoạn dữ liệu nào được gửi tới API của mô hình AI để xử lý, hệ thống tự động ẩn danh hóa số điện thoại, Zalo ID, và mã số thuế của khách hàng. Nói cách khác, ngay cả khi AI Agent cần "đọc" nội dung tin nhắn để tra cứu hoặc soạn thảo, các trường dữ liệu định danh cá nhân đã được thay thế bằng placeholder trước khi rời khỏi hệ thống nội bộ.

Cơ chế này được thiết kế đồng bộ với ví dụ thực tế trong luồng **[Zalo Copilot báo giá 8 giây](ai-agent-bao-gia-zalo-copilot-8s.md)** — nơi nhân viên sales copy tin nhắn khách hàng vào Copilot để tra giá, nhưng số điện thoại và thông tin định danh của khách được ẩn danh hóa tự động trước khi hệ thống gọi tới mô hình AI xử lý, giữ nguyên tinh thần "an toàn theo thiết kế" thay vì phụ thuộc vào việc nhân viên tự nhớ phải xóa thông tin nhạy cảm.

## Tài khoản Enterprise chính chủ — yêu cầu tuân thủ, không chỉ là tính năng bán hàng

Nguyên tắc nền tảng đầu tiên trong mô hình triển khai của TRANG ANH AI là: hệ thống AI Agent được thiết lập trực tiếp trên tài khoản Enterprise chính chủ của khách hàng (Google Workspace, ChatGPT Team, Claude Team) — không đi qua một tài khoản trung gian do bên triển khai nắm giữ.

Đây không phải là một lời hứa marketing để nghe an tâm hơn, mà là một yêu cầu kiến trúc gắn trực tiếp với tuân thủ Luật 91/2025/QH15: khi dữ liệu nằm trên tài khoản chính chủ của doanh nghiệp, doanh nghiệp giữ quyền kiểm soát, quyền xóa, và quyền audit toàn bộ luồng xử lý dữ liệu cá nhân của chính mình — thay vì phải tin tưởng mù quáng vào chính sách bảo mật của một bên trung gian không rõ trách nhiệm pháp lý khi có sự cố. Nếu một nhà cung cấp AI Agent nào đó yêu cầu doanh nghiệp giao dữ liệu qua tài khoản riêng của họ để "tiện quản lý", đây là một dấu hiệu cảnh báo cần cân nhắc kỹ trước khi ký hợp đồng.

## Checklist tự đánh giá tuân thủ cho SME

Danh sách dưới đây là các hạng mục vận hành suy ra hợp lý từ những nguyên tắc đã nêu ở trên — **không phải danh sách đầy đủ nghĩa vụ pháp lý** theo Luật 91/2025/QH15, và không thay thế một buổi rà soát pháp lý chuyên môn:

1. **Kiểm tra tài khoản AI đang dùng:** Nhân viên trong công ty có đang dùng tài khoản AI công cộng miễn phí (không phải gói doanh nghiệp có cam kết bảo mật) để xử lý dữ liệu khách hàng không?
2. **Rà soát thói quen copy-paste:** Có quy định rõ ràng cấm dán số điện thoại, mã số thuế, tên khách hàng thật vào công cụ AI bên ngoài không?
3. **Xác định chủ sở hữu tài khoản hệ thống:** Hệ thống AI Agent (nếu đã triển khai) chạy trên tài khoản do chính doanh nghiệp sở hữu, hay qua tài khoản trung gian của nhà cung cấp?
4. **Kiểm tra cơ chế ẩn danh hóa:** Có lớp kỹ thuật nào tự động ẩn danh hóa dữ liệu định danh cá nhân trước khi gửi đến mô hình AI xử lý, hay phụ thuộc hoàn toàn vào ý thức thủ công của nhân viên?
5. **Xác nhận vai trò con người trong luồng duyệt:** Mọi đầu ra do AI soạn thảo (báo giá, tin nhắn phản hồi khách hàng) có qua bước xác nhận của con người trước khi gửi đi không? *(liên hệ trực tiếp tới Luật AI 134/2025/QH15 — xem mục kế tiếp)*
6. **Ghi log vận hành:** Doanh nghiệp có lưu lại nhật ký (log) các lần AI xử lý dữ liệu khách hàng để phục vụ tra soát khi cần không?
7. **Đối chiếu văn bản luật gốc:** Đã có buổi rà soát với luật sư hoặc chuyên viên pháp chế đối chiếu trực tiếp Luật 91/2025/QH15 và Nghị định 356/2025/NĐ-CP với thực trạng dữ liệu của doanh nghiệp chưa? *(bước bắt buộc, không thể thay thế bằng bài viết này)*

## Liên hệ với Luật AI 134/2025/QH15 và Human-in-the-loop

Hai khung pháp lý này vận hành song song và bổ trợ nhau trong ngữ cảnh AI Agent doanh nghiệp: Luật 91/2025/QH15 kiểm soát **cách dữ liệu cá nhân được xử lý**, còn Luật AI 134/2025/QH15 đặt ra yêu cầu về **sự giám sát của con người** đối với quyết định do AI đưa ra. Một hệ thống để AI tự động gửi báo giá hoặc phản hồi khách hàng mà không qua xác nhận của người là điểm rủi ro liên quan tới Luật AI 134/2025/QH15, tách biệt nhưng liên đới với rủi ro dữ liệu cá nhân đã nêu ở trên.

Cơ chế cụ thể để đảm bảo con người luôn ở vị trí kiểm soát cuối — bao gồm SLA nhắc việc và leo thang khi nhân sự chậm duyệt — được trình bày chi tiết trong bài **[Human-in-the-loop và Luật AI 134/2025](human-in-the-loop-luat-ai-134-2025.md)**.

## Câu hỏi thường gặp

### SME dưới 20 người có bắt buộc tuân thủ Luật 91/2025/QH15 không?

`[NEEDS DATA — cần đối chiếu văn bản luật gốc trước khi xuất bản]`. Tài liệu nội bộ hiện có không xác nhận ngưỡng quy mô doanh nghiệp nào được miễn trừ nghĩa vụ tuân thủ. Nguyên tắc vận hành an toàn là: bất kỳ doanh nghiệp nào thu thập và xử lý dữ liệu cá nhân của khách hàng — bất kể quy mô — nên chủ động rà soát tuân thủ thay vì giả định mình được miễn trừ.

### Mức phạt tối đa theo Luật 91/2025/QH15 là bao nhiêu?

Mức phạt có thể lên đến **5% doanh thu** của doanh nghiệp vi phạm — đây là con số đã được xác nhận trong hồ sơ tuân thủ tham chiếu. Cơ chế tính toán cụ thể (doanh thu tính theo kỳ nào, áp dụng cho hành vi vi phạm cụ thể ra sao) `[NEEDS DATA — cần đối chiếu văn bản luật gốc trước khi xuất bản]`.

### AI Agent có tự động giúp doanh nghiệp "tuân thủ 100%" Luật 91/2025/QH15 không?

Không có hệ thống công nghệ nào tự động đảm bảo tuân thủ pháp lý 100%. Một kiến trúc AI Agent thiết kế đúng (tài khoản chính chủ, ẩn danh hóa dữ liệu, human-in-the-loop) làm giảm đáng kể các điểm rủi ro vận hành phổ biến nhất, nhưng tuân thủ pháp lý đầy đủ luôn cần đi kèm rà soát của luật sư hoặc chuyên viên pháp chế.

## Kết luận

Rủi ro tuân thủ Luật 91/2025/QH15 trong vận hành AI Agent không nằm ở bản thân công nghệ AI, mà ở thói quen xử lý dữ liệu thiếu kiểm soát — điển hình là việc dán dữ liệu nội bộ lên công cụ AI công cộng. Ba nguyên tắc kiến trúc — tài khoản chính chủ, ẩn danh hóa dữ liệu hai lớp, và con người xác nhận cuối cùng — là nền tảng vận hành hợp lý, nhưng **không thay thế được** một buổi rà soát pháp lý chuyên môn đối chiếu trực tiếp văn bản luật gốc với thực trạng cụ thể của từng doanh nghiệp.

Bước đầu tiên hợp lý: dùng checklist 7 mục ở trên để tự đánh giá sơ bộ hiện trạng, sau đó đăng ký **Buổi 1 — AI Readiness Audit miễn phí** để rà soát chi tiết cùng đội ngũ kỹ thuật, song song với việc chủ động liên hệ tư vấn pháp lý chuyên môn.

Xem thêm bức tranh tổng thể về rủi ro pháp lý và rào cản triển khai tại bài **[Rủi ro pháp lý và rào cản khi triển khai AI Agent tại SME](rui-ro-phap-ly-rao-can-ai-agent-sme.md)**, hoặc quay lại bài tổng quan **[AI Agent cho doanh nghiệp SME Việt Nam](ai-agent-cho-doanh-nghiep-sme-viet-nam.md)**.

---

**Về tác giả**: Bài viết được biên soạn bởi Đội ngũ Giải pháp TRANG ANH AI, đơn vị triển khai Hệ thống AI Agent Vận Hành Tự Chủ cho doanh nghiệp SME Việt Nam. Nội dung pháp lý trong bài mang tính tham khảo vận hành, đã được đánh dấu rõ các điểm cần rà soát pháp lý chuyên môn trước khi áp dụng.
