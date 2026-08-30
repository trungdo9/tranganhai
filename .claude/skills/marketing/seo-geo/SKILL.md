---
name: seo-geo
description: Generative Engine Optimization for AI search (ChatGPT, Perplexity, Claude). Replaces geo.
allowed-tools: Read, Write, Glob, Grep
---

# Seo Geo — Generative Engine Optimization (AI Search Citation)

> Tối ưu hóa nội dung để được trích dẫn (citations) bởi các mô hình AI Search hàng đầu: Google Gemini Search Generative Experience (SGE), OpenAI ChatGPT Search, Perplexity AI, Claude.

---

## When this skill activates

**Implicit:** when optimizing technical articles, definitions, FAQs, or data tables for AI search engine citations.
**Explicit:** "Use the seo-geo skill to [task]."

## Scope

This skill covers:
- **Direct Answer Blocks (Đoạn trả lời trực diện):** Định nghĩa 40–60 từ ngay dưới H2.
- **Entity & Technical Term Density:** Nhận diện và chuẩn hóa các thực thể ngành (ASTM D4607, EBCT, Iodine, VOCs, QCVN).
- **FAQPage Schema & Question Structuring:** Câu hỏi tự nhiên sát với user search intent.
- **Tabular Data & Comparative Matrices:** Bảng thông số, ma trận ưu/nhược điểm giúp AI trích xuất dễ dàng.

---

## 🎯 BẢNG CHECKLIST TỐI ƯU GEO / AI SEARCH

- [ ] **1. Direct Answer Block (Đoạn trả lời trực diện):**
  - Đặt 1 đoạn văn từ 40–60 từ ngay dưới thẻ H2 đầu tiên hoặc các H2 câu hỏi.
  - Cung cấp câu trả lời chính xác, định nghĩa trực diện không vòng vo.
- [ ] **2. Bảng thông số kỹ thuật (Data Tables):**
  - Trình bày tối thiểu 1–2 bảng HTML table có định lượng rõ ràng (đơn vị đo: mg/g, m/h, bar, mm, kg/m³).
  - Tiêu đề cột rõ ràng để AI crawler trích xuất cấu trúc Entity.
- [ ] **3. Câu hỏi FAQ thực tế (FAQPage Schema):**
  - Tối thiểu 3–5 câu hỏi mang tính thực chiến (thay thế, xử lý sự cố, tiêu chuẩn chất lượng).
  - Tích hợp Schema JSON-LD `FAQPage` chuẩn xác đã kiểm tra qua Google Rich Results Test.
- [ ] **4. Thẩm quyền chuyên gia & Nguồn tin cậy (E-E-A-T):**
  - Dẫn nguồn tiêu chuẩn kiểm định quốc tế (ASTM, ISO, NSF) và quy chuẩn Việt Nam (QCVN).
  - Gắn liên kết DoFollow đến các tài nguyên chuyên ngành uy tín.
- [ ] **5. UX & Định dạng ngắn gọn:**
  - Đoạn văn ngắn 2–3 câu, sử dụng in đậm (`**keyword/entity**`) tại các thuật ngữ then chốt để AI hiểu trọng tâm bài viết.

---

## Output

- `plans/marketing/<campaign>/seo-geo.md` — Phân tích GEO & báo cáo tối ưu hóa AI Search.

