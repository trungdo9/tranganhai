---
title: "Human-in-the-Loop Là Gì? Cách AI Agent Tuân Thủ Luật AI 134/2025/QH15"
meta_description: "Human-in-the-loop là gì và cách AI Agent tuân thủ Luật AI 134/2025/QH15: SLA Escalation Matrix, nghĩa vụ lưu log, vai trò xác nhận cuối của con người."
slug: human-in-the-loop-luat-ai-134-2025
target_keyword: "Human-in-the-loop trong AI Agent là gì theo Luật AI 134/2025/QH15"
row_id: 4
cluster_level: Cluster
priority: P2
status: draft
word_count: 1917
schema_notes: "TechArticle/DefinedTerm JSON-LD nên sinh ở Stage 4 (seo-schema) khi có CMS target; bài chưa nhúng JSON-LD sống."
geo_notes: "Mỗi H2 mở bằng câu trả lời trực tiếp; SLA Escalation Matrix trình bày dạng mốc thời gian để dễ trích dẫn cho AI Overview/Perplexity."
open_questions:
  - "Context hub chỉ nêu nghĩa vụ human-in-the-loop, nghĩa vụ lưu nhật ký log kỹ thuật, và SLA Escalation Matrix nội bộ của Trang Anh AI — không có văn bản trích dẫn điều khoản/chương/điều cụ thể của Luật AI 134/2025/QH15. Mọi chi tiết điều khoản luật vượt quá mô tả trong context hub được đánh dấu [NEEDS DATA — cần đối chiếu văn bản luật gốc] thay vì suy diễn."
  - "Không có số liệu mức phạt cụ thể theo Luật AI 134/2025/QH15 trong context hub (mức phạt 5% doanh thu được nêu là thuộc Luật 91/2025/QH15 về dữ liệu cá nhân, không phải Luật AI) — không gộp nhầm hai luật, đã tách rõ trong bài."
  - "Bài viết mang tính tham khảo vận hành, không thay thế tư vấn pháp lý chuyên môn — đã ghi rõ disclaimer trong bài theo yêu cầu."
---

# Human-in-the-Loop Là Gì? Cách AI Agent Tuân Thủ Luật AI 134/2025/QH15

**Human-in-the-loop là gì?** Human-in-the-loop là nguyên tắc thiết kế hệ thống AI trong đó con người luôn giữ vai trò xác nhận hoặc phê duyệt cuối cùng trước khi một quyết định hay kết quả do AI tạo ra (báo giá, phản hồi khách hàng, tài liệu kỹ thuật) được chính thức gửi đi, thay vì để AI tự động hoàn toàn. Đây không chỉ là một lựa chọn thiết kế an toàn, mà là yêu cầu vận hành gắn với nghĩa vụ giám sát con người theo Luật Trí tuệ Nhân tạo 134/2025/QH15 tại Việt Nam. Bài viết này giải thích cơ chế human-in-the-loop hoạt động ra sao trong một AI Agent thực tế, và cách một hệ thống như TRANG ANH AI thiết kế để đáp ứng nghĩa vụ này.

> **Bài viết mang tính tham khảo vận hành, không thay thế tư vấn pháp lý chuyên môn.** Doanh nghiệp nên đối chiếu văn bản luật gốc và tham vấn luật sư hoặc chuyên gia pháp lý trước khi áp dụng vào hợp đồng hay quy trình chính thức.

## Vì sao AI Agent cần human-in-the-loop thay vì tự động hoàn toàn?

AI Agent cần human-in-the-loop vì hai lý do song song: rủi ro vận hành thực tế (AI vẫn có thể sai, dù đã qua kiến trúc chống ảo giác) và nghĩa vụ pháp lý theo Luật AI 134/2025/QH15. Trong ngành B2B kỹ thuật, một báo giá gửi sai đơn giá hay một phản hồi kỹ thuật thiếu chính xác gửi thẳng đến khách hàng mà không qua ai kiểm tra có thể gây thiệt hại tài chính hoặc uy tín ngay lập tức — không có "nút undo" sau khi tin nhắn đã gửi.

Nguyên tắc vận hành mà TRANG ANH AI áp dụng: AI Agent chuẩn bị khoảng 95% công việc — tra cứu dữ liệu, tính toán, soạn thảo — còn con người chỉ cần rà soát nhanh (thường trong khoảng 10 giây với các tác vụ đơn giản như báo giá) trước khi bấm gửi. Đây là sự khác biệt giữa "AI hỗ trợ con người ra quyết định nhanh hơn" và "AI tự ra quyết định thay con người" — mô hình Trang Anh AI theo đuổi là mô hình đầu tiên.

## Human-in-the-loop được yêu cầu như thế nào theo Luật AI 134/2025/QH15?

Theo mô tả trong khung vận hành của TRANG ANH AI, Luật Trí tuệ Nhân tạo 134/2025/QH15 đặt ra yêu cầu về sự giám sát của con người (human-in-the-loop) đối với các quyết định do AI đưa ra có ảnh hưởng đến khách hàng hoặc đối tác, đi kèm với nghĩa vụ lưu trữ nhật ký log kỹ thuật đầy đủ và cung cấp công cụ gán nhãn máy đọc cho nội dung do AI tạo ra. Cụ thể, khách hàng (doanh nghiệp sử dụng hệ thống) có nghĩa vụ kiểm tra xác nhận lần cuối các bản báo giá, hồ sơ thầu, bài viết do AI soạn thảo trước khi phát hành chính thức; đơn vị triển khai hệ thống chịu trách nhiệm cung cấp công cụ gán nhãn và lưu log đầy đủ để phục vụ truy vết khi cần.

**[NEEDS DATA — cần đối chiếu văn bản luật gốc]** — Bài viết này trình bày yêu cầu ở mức nguyên tắc vận hành theo mô tả trong tài liệu nội bộ của Trang Anh AI. Các chi tiết cụ thể hơn về điều khoản, chương, mức phạt, hoặc phạm vi áp dụng chính xác của Luật AI 134/2025/QH15 cần được đối chiếu trực tiếp với văn bản luật gốc và cơ quan quản lý trước khi doanh nghiệp dùng làm căn cứ pháp lý chính thức.

## SLA Escalation Matrix giải quyết điểm nghẽn con người trong human-in-the-loop như thế nào?

SLA Escalation Matrix (ma trận leo thang mức dịch vụ) giải quyết một rủi ro thực tế của mô hình human-in-the-loop: nếu nhân viên phụ trách duyệt bận việc hoặc không có mặt, khách hàng có thể bị bỏ rơi quá lâu, phá vỡ lợi thế tốc độ mà AI Agent tạo ra. TRANG ANH AI thiết lập cơ chế leo thang theo 3 mốc thời gian cụ thể:

- **Mốc 0–3 phút:** Nhân viên phụ trách nhận thông báo 1-chạm để duyệt và gửi báo giá/phản hồi.
- **Mốc 3–7 phút:** Nếu chưa duyệt, hệ thống tự động gửi cảnh báo nhắc việc qua Zalo cấp 1.
- **Sau 7 phút:** Hệ thống tự động leo thang quyền duyệt lên cấp Trưởng phòng, hoặc gửi trước một bản dự thảo thông số kỹ thuật sơ bộ cho khách hàng — với cam kết vận hành là khách hàng không bao giờ bị bỏ rơi quá 10 phút.

Cơ chế này trực tiếp phục vụ nghĩa vụ giám sát con người: thay vì loại bỏ con người khỏi vòng lặp để tăng tốc độ (điều có thể vi phạm nguyên tắc human-in-the-loop), hệ thống đảm bảo luôn có một người chịu trách nhiệm duyệt, chỉ thay đổi ai là người đó khi cần thiết để không làm chậm trễ khách hàng quá lâu.

## Nghĩa vụ lưu nhật ký log và trách nhiệm pháp lý được phân chia ra sao?

Theo điều khoản hợp đồng vận hành của TRANG ANH AI, trách nhiệm được phân chia rõ giữa hai bên: khách hàng (doanh nghiệp) có nghĩa vụ kiểm tra xác nhận lần cuối trước khi phát hành nội dung do AI soạn thảo; TRANG ANH AI chịu trách nhiệm cung cấp công cụ gán nhãn máy đọc và lưu trữ nhật ký log kỹ thuật đầy đủ, phục vụ mục đích truy vết và tuân thủ. Về giới hạn trách nhiệm pháp lý, tổng nghĩa vụ bồi thường trong mọi trường hợp không vượt quá tổng giá trị phí dịch vụ khách hàng đã thanh toán trong 3 tháng gần nhất — đây là điều khoản hợp đồng dân sự giữa hai bên, không phải quy định của Luật AI 134/2025/QH15.

**[NEEDS DATA — cần đối chiếu văn bản luật gốc]** — Phạm vi chính xác của "nhật ký log kỹ thuật" theo yêu cầu luật định (thời gian lưu trữ tối thiểu, định dạng bắt buộc, cơ quan có quyền yêu cầu truy xuất) chưa được nêu chi tiết trong tài liệu nội bộ và cần đối chiếu văn bản luật gốc trước khi cam kết với khách hàng ở mức độ pháp lý chính thức.

## Human-in-the-loop khác gì với việc dán dữ liệu khách hàng vào AI công khai (Luật 91/2025/QH15)?

Human-in-the-loop (Luật AI 134/2025/QH15) và bảo vệ dữ liệu cá nhân (Luật 91/2025/QH15) là hai nghĩa vụ pháp lý khác nhau nhưng thường bị nhầm lẫn khi nói về "rủi ro pháp lý AI" nói chung. Human-in-the-loop liên quan đến việc ai là người chịu trách nhiệm xác nhận cuối cùng cho một quyết định do AI đưa ra; bảo vệ dữ liệu cá nhân liên quan đến việc dữ liệu khách hàng (số điện thoại, mã số thuế) có bị đưa ra ngoài phạm vi kiểm soát của doanh nghiệp hay không — ví dụ khi nhân viên dán thông tin khách hàng vào một công cụ AI công khai không có cam kết bảo mật.

Hai nghĩa vụ này cần được xử lý đồng thời trong một hệ thống AI Agent: dữ liệu phải được xử lý trên tài khoản chính chủ của doanh nghiệp (đáp ứng Luật 91/2025/QH15), đồng thời mọi đầu ra ảnh hưởng đến khách hàng phải qua xác nhận của con người (đáp ứng Luật AI 134/2025/QH15). Phân tích đầy đủ về Luật 91/2025/QH15 áp dụng cho AI Agent doanh nghiệp được trình bày trong bài **[Luật 91/2025/QH15 và AI Agent doanh nghiệp](luat-91-2025-ai-agent-doanh-nghiep.md)**, còn bức tranh tổng thể về rủi ro pháp lý khi triển khai AI Agent được trình bày trong bài **[Rủi ro pháp lý và rào cản khi triển khai AI Agent](rui-ro-phap-ly-rao-can-ai-agent-sme.md)**.

## Human-in-the-loop vận hành cụ thể ra sao trong Zalo Copilot?

Zalo Copilot là ví dụ vận hành cụ thể nhất của human-in-the-loop trong thực tế: sau khi Agent tra cứu Master RAG Lake, tính giá và render file báo giá PDF, hệ thống dừng lại và chờ nhân viên Sales rà soát khoảng 2–5 giây trước khi bấm gửi cho khách hàng qua Zalo — AI không bao giờ tự động gửi thẳng. Cơ chế đầy đủ 4 bước, từ lúc nhận tin nhắn khách hàng đến lúc nhân viên bấm gửi, được trình bày trong bài **[AI Agent báo giá Zalo Copilot 8 giây](ai-agent-bao-gia-zalo-copilot-8s.md)**. Nền tảng dữ liệu chính xác đứng sau cơ chế xác nhận này là Master RAG Lake, được giải thích trong bài **[Master RAG Lake là gì](master-rag-lake-la-gi.md)**.

## Câu hỏi thường gặp

### Human-in-the-loop có làm chậm tốc độ vận hành của AI Agent không?

Không đáng kể nếu thiết kế đúng — bước xác nhận của con người trong mô hình Zalo Copilot chỉ mất khoảng 2–5 giây vì AI đã chuẩn bị sẵn 95% công việc, con người chỉ cần rà soát chứ không phải tự làm lại từ đầu. SLA Escalation Matrix cũng đảm bảo nếu người duyệt chậm trễ, hệ thống tự động leo thang thay vì để khách hàng chờ vô thời hạn.

### Nếu doanh nghiệp bỏ qua human-in-the-loop, hệ thống có tự động vận hành nhanh hơn không?

Có thể nhanh hơn trong ngắn hạn nhưng đi kèm rủi ro pháp lý (không tuân thủ nghĩa vụ giám sát theo Luật AI 134/2025/QH15) và rủi ro vận hành thực tế (gửi nhầm giá hoặc thông tin sai mà không ai phát hiện trước khi khách hàng nhận được). TRANG ANH AI không cung cấp tùy chọn bỏ qua bước xác nhận cuối cho các đầu ra có ảnh hưởng trực tiếp đến khách hàng.

### Doanh nghiệp cần đọc văn bản luật gốc ở đâu để hiểu đầy đủ Luật AI 134/2025/QH15?

Bài viết này chỉ trình bày các nguyên tắc vận hành liên quan mà TRANG ANH AI áp dụng, không phải toàn văn hay diễn giải pháp lý đầy đủ của luật. Doanh nghiệp nên tra cứu văn bản luật gốc trên cổng thông tin của cơ quan nhà nước có thẩm quyền hoặc tham vấn luật sư chuyên trách để có căn cứ pháp lý chính thức.

## Kết luận

Human-in-the-loop là nguyên tắc bắt buộc con người giữ quyền xác nhận cuối cùng cho mọi quyết định AI đưa ra có ảnh hưởng đến khách hàng, được cụ thể hóa trong vận hành bằng cơ chế SLA Escalation Matrix (chống nghẽn người duyệt) và nghĩa vụ lưu nhật ký log kỹ thuật. Đây là yêu cầu song hành với việc tuân thủ Luật AI 134/2025/QH15 tại Việt Nam, và là lý do một AI Agent vận hành nghiêm túc không bao giờ thiết kế để tự động gửi kết quả mà không qua bước kiểm tra của con người.

Bước tiếp theo: đăng ký **Buổi 1 — AI Readiness Audit miễn phí** để được tư vấn cách thiết kế quy trình human-in-the-loop phù hợp với quy mô đội ngũ của doanh nghiệp bạn.

---

**Về tác giả**: Bài viết được biên soạn bởi Đội ngũ Giải pháp TRANG ANH AI, đơn vị triển khai Hệ thống AI Agent Vận Hành Tự Chủ cho doanh nghiệp SME Việt Nam.
