---
title: "AI Agent Lập Dự Toán BOQ Vật Tư Kỹ Thuật Nhanh Cho Doanh Nghiệp SME"
meta_description: "AI Agent lập BOQ vật tư kỹ thuật trong 2 phút từ số đo hiện trường, dùng Code Execution tính thủy lực chính xác. Tính năng thuộc gói Enterprise."
slug: ai-agent-lap-boq-vat-tu-ky-thuat
target_keyword: "AI Agent lập BOQ vật tư kỹ thuật"
row_id: 12
cluster_level: Cluster
priority: P2
status: draft
word_count: 1921
schema_notes: "TechArticle + HowTo JSON-LD candidate at Stage 4; no CMS target confirmed, not injected this run"
geo_notes: "Đưa ngay con số '2 phút' và tên cơ chế Code Execution Engine trong đoạn mở đầu để AI search trích dẫn trực tiếp; tách rõ điều kiện gói Enterprise để tránh AI search hiểu nhầm là tính năng phổ cập mọi gói"
open_questions:
  - "Tính năng M6 chỉ có ở Gói 3 (Toàn diện, 41.500.000 VNĐ/tháng) theo bảng §10.1 — bài viết cố tình không mô tả như một tính năng phổ cập cho mọi gói Retainer để tránh gây hiểu lầm thương mại."
  - "Không có case study định lượng (ví dụ % giảm sai sót dự toán) trong marketing-context.md cho module M6 cụ thể — không bịa số, chỉ dùng cơ chế kỹ thuật đã nêu (2 phút, Code Execution)."
  - "Chưa có ảnh chụp màn hình/demo UI thực tế của M6 — cần bổ sung khi có tài sản hình ảnh thật, không dùng ảnh minh họa chung chung."
---

# AI Agent Lập Dự Toán BOQ Vật Tư Kỹ Thuật Nhanh Cho Doanh Nghiệp SME

**AI Agent lập BOQ vật tư kỹ thuật** là một trợ lý tính toán dự toán tự động, nhận số đo hiện trường (lưu lượng, đường kính ống, diện tích bề mặt, tải trọng) rồi xuất ra bảng khối lượng vật tư (Bill of Quantity) hoàn chỉnh trong khoảng 2 phút, thay vì kỹ sư dự toán phải tự tra bảng công thức thủy lực và cộng tay từng dòng vật tư. Tại TRANG ANH AI, năng lực này được gọi là **Engineering BOQ Estimator (M6)** — một trong 8 module chuyên trách thuộc dây chuyền vận hành 5 node, và là module duy nhất chạy trên nền **Code Execution Engine** của Gemini để đảm bảo phép tính không sai lệch do làm tròn thủ công. Bài viết này giải thích cơ chế hoạt động, vì sao cần Code Execution thay vì để AI "tính nhẩm", và ai thực sự có quyền dùng module này trong 3 gói Retainer hiện hành.

## 1. AI Agent lập BOQ hoạt động theo cơ chế nào

AI Agent lập BOQ hoạt động bằng cách chuyển số đo hiện trường thành mã tính toán chạy trực tiếp, thay vì để mô hình ngôn ngữ tự suy luận ra kết quả bằng "cảm giác" xác suất. Đây là điểm khác biệt kỹ thuật quan trọng nhất so với việc dùng một chatbot AI thông thường để hỏi công thức thủy lực.

Cụ thể, module M6 tận dụng **Code Execution Engine** trong nền tảng Google AI Pro (Gemini) — cơ chế cho phép AI Agent tự động chạy mã Python nội bộ để tính toán dự toán BOQ, công thức thủy lực và bảng giá chuẩn xác 100% không qua làm tròn sai lệch. Kỹ sư dự toán chỉ cần cung cấp thông số hiện trường — có thể qua tin nhắn thoại (voice memo) mô tả, ảnh chụp bản vẽ, hoặc số liệu gõ trực tiếp — và AI Agent thực hiện ba bước:

1. **Trích xuất thông số kỹ thuật** từ dữ liệu đầu vào (lưu lượng nước, đường kính ống, chiều dài tuyến, loại vật liệu).
2. **Chạy phép tính thủy lực/khối lượng bằng mã thực thi** (không phải suy luận ngôn ngữ), đảm bảo phép nhân, chia, quy đổi đơn vị chính xác đến từng đơn vị đo.
3. **Tra cứu đơn giá vật tư** từ Master RAG Lake (kho dữ liệu giá sỉ/lẻ đã được số hóa và khóa cứng, xem chi tiết tại [Master RAG Lake là gì](master-rag-lake-la-gi.md)) để ghép ra bảng BOQ hoàn chỉnh kèm thành tiền.

Kết quả là một bảng dự toán BOQ trong khoảng 2 phút, so với việc kỹ sư dự toán truyền thống phải tự tra bảng công thức, tính tay và đối chiếu giá kho — công đoạn thường mất hàng giờ và dễ sai sót khi khối lượng hạng mục lớn.

Về hình thức nhập liệu, module M6 tận dụng năng lực Native Multimodal của nền tảng Google AI Pro — nghĩa là kỹ sư không bắt buộc phải gõ số liệu vào một biểu mẫu cứng nhắc. Một tin nhắn thoại mô tả hiện trường, một bức ảnh chụp bản vẽ kỹ thuật hoặc sơ đồ CAD, hay một ghi chú viết tay chụp lại đều có thể là điểm bắt đầu, miễn là thông số cốt lõi (lưu lượng, đường kính, chiều dài tuyến, vật liệu) được thể hiện rõ trong dữ liệu đầu vào.

## 2. Vì sao không thể để AI tự tính nhẩm giá và thông số kỹ thuật

Nguyên tắc nền tảng của toàn bộ hệ thống TRANG ANH AI là **tuyệt đối không để LLM tự tính nhẩm giá tiền hoặc thông số kỹ thuật**. Đây không phải một lựa chọn thiết kế tùy ý, mà là yêu cầu bắt buộc trong ngành B2B kỹ thuật, nơi một sai số nhỏ về đường kính ống hay hệ số quy đổi có thể khiến cả công trình thiếu vật tư hoặc đội giá sai hàng chục triệu đồng.

Mô hình ngôn ngữ lớn (LLM) về bản chất dự đoán token tiếp theo dựa trên xác suất — kể cả khi được huấn luyện tốt, LLM vẫn có thể "tính nhầm" các phép toán phức tạp nếu để nó tự suy luận bằng ngôn ngữ. Vì vậy mọi phép nhân/chia chiết khấu và tính toán khối lượng trong hệ thống TRANG ANH AI đều được chuyển thành **truy vấn Structured Query (SQL) hoặc Code Execution chính xác 100% đến từng đồng** — nguyên tắc này áp dụng xuyên suốt cả module báo giá 8 giây ([AI Agent báo giá Zalo Copilot](ai-agent-bao-gia-zalo-copilot-8s.md)) lẫn module lập BOQ M6, chỉ khác ở độ phức tạp: báo giá Zalo tính đơn giá x số lượng, còn BOQ phải giải các công thức thủy lực và khối lượng vật liệu nhiều biến số hơn.

## 3. Module M6 thuộc gói Retainer nào, không phải gói nào cũng có

Cần nói rõ ngay: **Engineering BOQ Estimator (M6) hiện chỉ có trong Gói 3 — Toàn diện (Enterprise Multi-Agent Ecosystem), mức phí 41.500.000 VNĐ/tháng.** Đây không phải tính năng đi kèm ở Gói 1 (Nền tảng, 12.500.000 VNĐ/tháng) hay Gói 2 (Tăng trưởng, 24.000.000 VNĐ/tháng) — cả hai gói này đều để trống mục M6 trong bảng tính năng.

| Gói Retainer | Engineering BOQ Estimator (M6) |
|---|---|
| Gói 1: Nền tảng — 12.500.000 VNĐ/tháng | Không bao gồm |
| Gói 2: Tăng trưởng — 24.000.000 VNĐ/tháng | Không bao gồm |
| Gói 3: Toàn diện — 41.500.000 VNĐ/tháng | Có — kèm AI Tender & Bidding Copilot (M7) |

Lý do M6 được đặt ở tầng cao nhất: module này đòi hỏi Master RAG Lake ở mức độ toàn diện nhất (Master Data Lake + Hybrid Semantic Search) để đảm bảo đơn giá vật tư tra cứu ra luôn khớp với tồn kho và bảng giá mới nhất — nếu dữ liệu nền chưa đủ sâu, bảng BOQ xuất ra dù tính đúng công thức vẫn có thể sai về đơn giá. Doanh nghiệp cân nhắc Gói 3 nên đọc thêm về cơ cấu tính năng đầy đủ tại [Bảng giá & mô hình Retainer AI Agent cho SME](bang-gia-retainer-ai-agent-sme.md).

## 4. Vị trí nhân sự nào được giải phóng khi dùng M6

Người hưởng lợi trực tiếp từ module này là **Kỹ Sư Kỹ Thuật & Dự Toán (Technical Estimator)** — vị trí nhân sự thứ 4 trong ma trận 7 vị trí được TRANG ANH AI hỗ trợ. Trước khi có AI Agent, kỹ sư dự toán phải tự tra bảng công thức tính thể tích, lưu lượng và phụ kiện, đồng thời gánh rủi ro cộng nhầm giá vật tư hay bỏ sót linh kiện trong dự toán — sai sót này thường chỉ phát hiện được sau khi đã gửi báo giá cho khách hoặc thi công dở dang.

Với M6, quy trình đảo ngược: kỹ sư nhập thông số hiện trường, AI Agent tính toán thủy lực và xuất bảng dự toán BOQ hoàn chỉnh trong 2 phút, chuẩn xác 100% theo giá kho bãi hiện hành. Vai trò của kỹ sư chuyển từ "người tính tay" sang "người kiểm tra và phê duyệt" — đúng nguyên tắc Human-in-the-loop mà toàn bộ hệ thống TRANG ANH AI tuân thủ theo [Luật AI 134/2025/QH15](human-in-the-loop-luat-ai-134-2025.md).

## 5. Muốn triển khai M6 thì bắt đầu từ đâu

M6 không phải module đứng độc lập — nó phụ thuộc vào nền tảng Master RAG Lake đã được xây dựng ổn định (thường hoàn tất ở Tuần 1 trong [lộ trình 4 tuần Done-With-You](lo-trinh-4-tuan-trien-khai-ai-agent-done-with-you.md)) và vào việc doanh nghiệp đã cam kết Gói 3. Với doanh nghiệp đang cân nhắc giữa các gói, bước hợp lý là bắt đầu từ một buổi đánh giá dữ liệu và quy trình dự toán hiện tại, để xác định liệu khối lượng và độ phức tạp BOQ có đủ lớn để việc đầu tư Gói 3 mang lại giá trị tương xứng hay không — thay vì mua Enterprise ngay từ đầu khi chưa cần đến.

Một dấu hiệu thực tế để tự đánh giá: nếu bộ phận kỹ thuật của doanh nghiệp đang lập dự toán BOQ thủ công nhiều lần mỗi tuần, cho các hạng mục có tính lặp lại về công thức (đường ống, bể chứa, hệ thống lọc) nhưng khác nhau về thông số đầu vào, đây chính là loại khối lượng công việc mà Code Execution Engine phát huy giá trị rõ nhất — vì phần công thức được viết một lần, sau đó chạy lại chính xác với bất kỳ bộ thông số mới nào. Ngược lại, nếu tần suất lập BOQ thấp hoặc mỗi dự án có kết cấu tính toán hoàn toàn khác nhau không lặp lại, giá trị đầu tư Gói 3 riêng cho mục đích này sẽ thấp hơn.

## Câu hỏi thường gặp

**AI Agent lập BOQ có thay thế hoàn toàn kỹ sư dự toán không?**
Không. Nguyên tắc Human-in-the-loop yêu cầu kỹ sư dự toán vẫn phải kiểm tra và duyệt bảng BOQ trước khi gửi cho khách hàng hoặc đưa vào hồ sơ thầu. AI Agent đảm nhiệm phần tính toán và tra cứu tốn thời gian, con người giữ vai trò xác nhận cuối cùng.

**Vì sao không dùng ChatGPT hoặc Gemini thông thường để tính BOQ thay vì trả phí module riêng?**
Vì các công cụ AI phổ thông không có Master RAG Lake được huấn luyện riêng theo catalogue, bảng giá và tiêu chuẩn kỹ thuật (QCVN/ASTM) của từng doanh nghiệp — chúng có thể tính đúng công thức thủy lực chung nhưng không biết đơn giá vật tư thực tế của doanh nghiệp, dẫn đến bảng BOQ không dùng được trực tiếp cho báo giá.

**Có thể nâng cấp từ Gói 1 hoặc Gói 2 lên Gói 3 để dùng M6 không?**
Về nguyên tắc có thể nâng cấp gói Retainer; điều kiện và quy trình chuyển đổi cụ thể (thời điểm áp dụng, cách tính lại phí Setup nếu có) nên được xác nhận trực tiếp trong buổi tư vấn, vì marketing-context.md hiện chưa công bố chính sách nâng cấp gói giữa hợp đồng.

## Kết luận

AI Agent lập BOQ vật tư kỹ thuật không phải một tính năng "AI tính nhanh cho vui" — nó là một quy trình Code Execution có kiểm soát, chạy trên nền tảng dữ liệu Master RAG Lake đã được số hóa sạch, và chỉ có ở Gói 3 (Toàn diện, 41.500.000 VNĐ/tháng) vì đòi hỏi độ sâu dữ liệu tương ứng. Doanh nghiệp có khối lượng dự toán lớn, tần suất báo giá kỹ thuật cao nên đánh giá xem gói này có phù hợp với quy mô vận hành hiện tại hay chưa.

Để xác định liệu doanh nghiệp bạn đã sẵn sàng cho Gói 3 và module BOQ, hoặc nên bắt đầu từ gói nhỏ hơn, bước đầu tiên nên là **Buổi 1: AI Readiness Audit miễn phí** với đội ngũ TRANG ANH AI.

Xem thêm bức tranh tổng quan tại [AI Agent cho doanh nghiệp SME Việt Nam](ai-agent-cho-doanh-nghiep-sme-viet-nam.md) và cách triển khai đầy đủ tại [Cách triển khai AI Agent cho doanh nghiệp SME ngành kỹ thuật, phân phối vật tư](cach-trien-khai-ai-agent-sme-nganh-ky-thuat.md).

---

**Về tác giả:** Bài viết được biên soạn bởi Đội ngũ Giải pháp TRANG ANH AI.
