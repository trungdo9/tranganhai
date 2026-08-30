# Stage 4 — On-Page Optimization + Media

**Goal:** take the `writing_completed` draft → generate meta (title tag, description, slug, tags), run keyword-density + truth-only checks, resolve image placeholders into real images with alt text, attach a featured image, and optionally add schema. End at `ready_to_publish`.

**Entry:** next `writing_completed` row. **Exit:** same row, status `ready_to_publish`, with `slug`, `description`, `tags`, `image_url`, media resolved.

## Steps

1. **Lock:** set status `optimizing`.

2. **Run the On-Page Optimizer prompt** (below) on the draft → `{ meta_description, slug, tags }`.

3. **Keyword density check** (deterministic, not AI): count primary-keyword occurrences ÷ word count.
   - Target band: **0.8%–2.5%**. Below → the writing under-uses the keyword; above → stuffing.
   - Out of band → rewrite the 1–2 weakest passages to add/remove natural mentions (don't keyword-stuff to hit a number).

4. **Resolve images** (consume the `[[IMAGE_REQUEST:slug]]` tags from Stage 3):
   - Extract every tag via regex `\[\[IMAGE_REQUEST:([a-z0-9-]+)\]\]`.
   - For each: generate or source an image (see below), write SEO alt text (keyword + specific, per [[seo-images]]), replace the tag with `![alt](url)`.
   - **Cleanup:** any tag left unresolved → delete it (never ship a raw `[[IMAGE_REQUEST:...]]`). Regex-sweep at the end.

5. **Featured image:** generate/source one hero image for the article title; store as `image_url` (prepended to the body or set as the post's featured image at publish).

6. **Schema (optional but recommended):** via [[seo-schema]], generate JSON-LD (`Article` + `FAQPage` if the article has an FAQ section). Store alongside for the publish step. For AI-search visibility, also apply [[seo-geo]] structuring (clear definitions, extractable answers, entity clarity).

7. **Final truth-only pass:** re-scan for placeholder names / invented stats / meta-talk (Stage 3 rules). Any hit → fix before advancing.

8. **Store** `slug`, `description` (meta), `tags`, `image_url`, optimized `full_content_markdown`; set status `ready_to_publish`.

## On-Page Optimizer prompt

```
### ROLE
Senior SEO On-Page Optimizer. Maximize visibility via high-CTR meta, clean URL,
semantic tags, and RankMath 100/100 + GEO compliance.

### INPUT
- Target keyword: {keyword}
- Title (H1): {title}
- Content preview: {first ~1500 chars of markdown}

### TASKS
1. META DESCRIPTION — 150–160 chars, keyword near the start, high-CTR,
   action-oriented, no fluff.
2. URL SLUG — lowercase, unaccented ASCII ("đ"→"d", "á"→"a"), spaces→hyphens,
   drop stop words, no special chars. Short but meaningful (under 68 chars).
3. TAGS — max 6, in {language}, each ≥3 words/syllables. LSI satellites of the
   main keyword (support it, don't drift). Prefer proper nouns / locations /
   technical terms actually in the text. FORBIDDEN: generic tags like "news",
   "latest", "update", "good article".

### OUTPUT — valid JSON:
{ "meta_description": "...", "slug": "...", "tags": ["...", "..."] }
```

## Image sourcing options (in order of preference)

| Option | When | How |
|---|---|---|
| **Media Catalog (Best)** | **Luôn ưu tiên số 1** | Tra cứu từ `wiki/media/image-sitemap.md` & `wiki/media/catalog.json` (kho 1.400+ ảnh thật của Xuyên Việt). Lấy URL CDN/Uploads và Alt text chuẩn. |
| Local Sync Assets | Ảnh sản phẩm / bài viết liên quan | Lấy từ `wiki/products/images/` hoặc `wiki/posts/images/` |
| AI generation | Hình minh họa khái niệm trừu tượng/sơ đồ kỹ thuật | `generate_image` / [[ai-artist]] với prompt = keyword + slug |
| Fallback / Cleanup | Không có ảnh phù hợp | Xóa tag placeholder, không để sót `[[IMAGE_REQUEST:...]]` |

Always: descriptive filename from the slug, **alt text with the keyword** (never empty alt), compress before upload. See [[seo-images]].

---

## 🎯 BẢNG CHECKLIST RANKMATH SEO (SCORE 100/100) & GEO OPTIMIZATION

Mọi bài viết xuất bản lên site phải được đối soát qua toàn bộ các tiêu chí RankMath & GEO sau:

### 1. Basic SEO & Focus Keyword
- [ ] **Từ khóa chính trong Tiêu đề SEO:** Tiêu đề SEO (`rank_math_title`) bắt buộc chứa Focus Keyword.
- [ ] **Từ khóa chính ở đầu Tiêu đề SEO:** Đặt Focus Keyword xuất hiện ở 50% độ dài đầu của Title (Front-loading).
- [ ] **Từ khóa chính trong Mô tả Meta SEO:** Mô tả Meta (`rank_math_description`) chứa Focus Keyword ngay câu đầu (150–160 ký tự).
- [ ] **Từ khóa chính trong URL Slug:** Slug chứa Focus Keyword chính xác, không dấu, ngăn cách bằng dấu `-`.
- [ ] **Độ dài URL tối ưu:** URL ngắn gọn, thân thiện (lý tưởng ≤ 68–75 ký tự).
- [ ] **Từ khóa chính xuất hiện ở đầu nội dung:** Focus Keyword xuất hiện ngay trong 10% đầu bài viết (đoạn sapo / 100 từ đầu).
- [ ] **Từ khóa chính trong nội dung:** Phân bổ Focus Keyword tự nhiên xuyên suốt thân bài.
- [ ] **Từ khóa chính trong tiêu đề phụ (H2, H3, H4):** Xuất hiện trong ít nhất 1–2 thẻ Heading phụ.
- [ ] **Mật độ từ khóa chuẩn (Keyword Density):** Duy trì trong dải **0.8% – 1.5%** (nhắm đến ~1.0%), không spam (> 2.5%).

### 2. Content Length & Readability / UX
- [ ] **Độ dài nội dung chuẩn:** Độ dài bài viết đạt từ **600 – 2.500 từ** theo tiêu chuẩn phân tầng (Thông tin: 1.500–2.500 từ; Giao dịch: 1.000–1.800 từ; Kỹ thuật chuyên sâu L2: 2.000+ từ).
- [ ] **Đoạn văn ngắn gọn, súc tích:** Chia nhỏ đoạn văn (2–3 câu/đoạn, dưới 100 từ), tránh các khối chữ dày đặc gây mỏi mắt.
- [ ] **Sử dụng Mục lục (Table of Contents):** Phân chia rõ ràng cấu trúc bài viết để người đọc và bot dễ điều hướng.
- [ ] **Tiêu đề SEO thu hút (Số & Power Words):** Tiêu đề chứa số liệu hoặc từ khóa định dạng tăng CTR (ví dụ: *[Bảng Kỹ Thuật 2026]*, *4 Dấu Hiệu*, *10 Kích Thước*).

### 3. Media & Alt Text
- [ ] **Hình ảnh & Video đa phương tiện:** Chèn tối thiểu 2–4 hình ảnh chất lượng cao hoặc sơ đồ minh họa.
- [ ] **Văn bản thay thế (Alt Text) chứa từ khóa:** Tất cả thẻ `<img>` phải có `alt="..."` chứa từ khóa chính hoặc từ khóa LSI mô tả chính xác ngữ cảnh ảnh.

### 4. Linking Structure (Internal & External)
- [ ] **Liên kết nội bộ (Internal Links):** Tối thiểu 3–5 liên kết nội bộ theo mô hình Silo (trỏ lên Pillar, trỏ về HUB và sản phẩm liên quan).
- [ ] **Liên kết tài nguyên bên ngoài (External Links):** Dẫn nguồn tài liệu tham khảo uy tín (tiêu chuẩn quốc tế ASTM, QCVN, viện nghiên cứu).
- [ ] **Liên kết DoFollow chất lượng:** Sử dụng liên kết DoFollow trỏ tới các tài nguyên kỹ thuật bên ngoài có thẩm quyền cao.

### 5. GEO / AI Search Citation Optimization
- [ ] **Direct Answer Block:** Định nghĩa súc tích 40–60 từ ngay dưới thẻ H2 đầu tiên trả lời thẳng vào câu hỏi tìm kiếm.
- [ ] **FAQPage Schema JSON-LD:** Bổ sung khối Schema FAQPage chuẩn Google Rich Results Test để AI trích xuất câu trả lời.
- [ ] **Bảng số liệu & Thông số kỹ thuật:** Trình bày dạng bảng so sánh rõ ràng để AI crawler đọc hiểu cấu trúc thực thể (Entity).

