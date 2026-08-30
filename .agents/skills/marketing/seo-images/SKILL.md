---
name: seo-images
description: Image SEO — resolve in-article image placeholders into real images with keyword-rich alt text, descriptive filenames, WebP compression, and lazy loading. Handles featured images and image sitemaps. Powers the media stage of the seo-writing pipeline (Stage 4).
allowed-tools: Read, Write, Glob, Grep, Bash
---

# SEO Images — Alt Text, Compression, Placement

> Images are ranking assets and accessibility requirements, not decoration. Every in-body image needs keyword-aware alt text and a descriptive filename; every image needs compression. This skill turns the writer's `[[IMAGE_REQUEST:slug]]` tags into real, optimized media.

## When this skill activates

**Implicit:** "add images to this article", "write alt text", "optimize these images for SEO", "resolve image placeholders".
**Explicit:** "Use the seo-images skill to [task]."
**Routed from:** [[seo-writing]] Stage 4, `/mk:seo` image actions.

## Scope

Covers:
- Resolving `[[IMAGE_REQUEST:slug]]` placeholder tags → real images.
- Alt text (keyword-aware, specific, describes the image).
- Descriptive filenames from slugs.
- Compression (→ WebP), lazy loading, featured-image selection.
- Image sitemap entries.

Does NOT cover:
- Writing the article body → [[seo-content]].
- The image-generation model itself → [[ai-artist]] / an image-gen MCP.

## Placeholder resolution & Asset Routing (the Stage-4 job)

The writer (Stage 3) appends one `[[IMAGE_REQUEST:keyword-slug]]` per section or directly selects real assets from `wiki/media/image-sitemap.md`.

### 1. Preference Ladder (Asset Sourcing)
| Option | Priority | Source / Tool | When to use |
|---|---|---|---|
| **Media Catalog (Best)** | **#1 (Mandatory Check)** | `wiki/media/image-sitemap.md` / `wiki/media/catalog.json` | Luôn kiểm tra kho 1.400+ ảnh thật của Xuyên Việt theo 10 cụm chủ đề (Than gáo dừa, Modi, Kalimati, Cát thạch anh, Cát Mangan, Birm, Hạt nhựa, PAC, Than tổ ong, Công trình...). |
| **Product & Post Sync** | **#2** | `wiki/products/images/` & `wiki/posts/images/` | Hình ảnh sản phẩm bao bì gốc hoặc bài viết liên quan đã được đồng bộ về local. |
| **AI Generation** | **#3** | `generate_image` | Khi bài viết phân tích khái niệm kỹ thuật trừu tượng mà kho ảnh thực tế chưa có (sơ đồ nguyên lý, biểu đồ hấp phụ). |
| **Skip** | **#4** | Xóa placeholder | Khi không tìm thấy ảnh phù hợp và không cần thiết. |

### 2. Resolution Steps
1. **Extract** every tag: regex `\[\[IMAGE_REQUEST:([a-z0-9-]+)\]\]`.
2. **Search Catalog**: Đọc `wiki/media/catalog.json` hoặc tra cứu bảng theo chủ đề trong `wiki/media/image-sitemap.md`.
3. **Write alt text** — mô tả chính xác nội dung ảnh VÀ chèn từ khóa ngữ cảnh tự nhiên. Tuyệt đối không để trống alt.
4. **Replace** placeholder bằng cú pháp: `![<Alt text mô tả chi tiết>](<URL live CDN/Uploads>)`.
5. **Cleanup sweep** — quét sạch mọi tag `[[IMAGE_REQUEST:...]]` còn sót lại trước khi xuất bản.

## Alt text rules

| Rule | Example |
|---|---|
| Describe what's shown | "Activated-carbon filter cross-section" not "image1" |
| Include the keyword naturally | "…activated carbon water filter…" when relevant |
| Specific, not generic | "barista tamping espresso at 30lb pressure" not "coffee" |
| Never empty, never keyword-stuffed | one natural mention, describing the actual image |

## Optimization checklist

- **Filename** — descriptive, from the slug: `activated-carbon-filter.webp`, not `IMG_2931.jpg`.
- **Format** — WebP (or AVIF) for photos; compress before upload.
- **Dimensions** — right-sized to display; no 4000px hero for a 800px column.
- **Lazy load** — `loading="lazy"` on below-fold images.
- **Featured image** — one hero per article, set as the post's featured image (WordPress) + used for social/OG.

## Key concepts

- **Alt text is dual-purpose** — accessibility (screen readers) first, SEO second. Write for a human who can't see the image; the keyword follows naturally.
- **Filename is a ranking signal** — descriptive filenames help image search; random camera names waste it.
- **Weight is a Core Web Vitals cost** — uncompressed images tank LCP. Compression isn't optional.

## Output

- Optimized images with alt + filenames, embedded in the article markdown (placeholders resolved).
- Featured image set for the post.
- Image-sitemap entries where applicable.

## Cross-references

- [[seo-writing]] — Stage 4 consumes this to resolve placeholders
- [[seo-content]] — writer emits the `[[IMAGE_REQUEST:slug]]` tags in Stage 3
- [[ai-artist]] — image generation backend
- [[seo-technical]] — Core Web Vitals (image weight impacts LCP)
- `.claude/workflows/marketing-rules.md` — content quality rules

## Provenance

Imported from `AgriciDaniel/claude-seo` and adapted for ClauKit. Placeholder-tag resolution matches the seo-writing pipeline's Stage 4 media flow.
