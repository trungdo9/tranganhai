# Content Pipeline — tranganhai (TRANG ANH AI)

Updated: 2026-09-09
Store: `local`
Site: https://tranganhai.vercel.app/ (Next.js/Vercel — not WordPress; publish target TBD, see Open Questions)
Mode run: `write --batch 5` (Stages 3–5 for rows #1, #6, #7, #14, #16), followed by a second run `write` (all remaining backlog) covering rows #2, #3, #4, #5, #8, #9, #10, #11, #12, #13, #15, #17, #18, #19, #20, #21 — completing the full 21-row cluster. **DRAFT-ONLY, both runs — saved as markdown, nothing published to any CMS/WordPress.** Prior `plan` run (Stages 1–2) is superseded by this entry for all 21 rows.

Seed keyword: **"AI Agent cho doanh nghiệp SME Việt Nam"**
Business context: `plans/marketing-context.md` (TRANG ANH AI — AI Agent Operations & Workflow Alignment, ICP = B2B kỹ thuật/công nghiệp SME 5–50 người, 4 personas A–D, 5-node closed-loop engine, 8 modules)
Language: Vietnamese (vi-VN)

---

## Stage 1 — SERP / market scan (informs gap notes below)

Live WebSearch (2026-09-09) on the seed + a cost/deployment variant surfaced the current Vietnamese SERP field:

| Competitor domain | Content pattern |
|---|---|
| amis.misa.vn, callio.vn, cloudgo.vn, phanmemaiagent.net (ViAI), hbr.edu.vn, toponseek.com | Generic "AI Agent là gì / lợi ích / chi phí" listicles and vendor tool round-ups. Aimed at any SME, any industry. |
| tholammkt.com, vneconomy.vn | Workshop/news-style pieces, not evergreen guides. |

**Gaps identified (none of the above cover):**
1. Vertical depth for **B2B kỹ thuật, phân phối vật tư, hóa chất, cơ khí, bao bì, M&E** — all competitor content is industry-agnostic.
2. **Zalo-native quoting workflow** (the actual bottleneck this ICP has — Zalo has no public API) — zero competitor coverage found.
3. **Legal/compliance angle** — Luật Dữ liệu Cá nhân 91/2025/QH15 and Luật AI 134/2025/QH15 as they apply to AI Agent deployment — zero competitor coverage found (both laws are 2026-current and cited in `marketing-context.md` §1.1, §14).
4. **Multi-site / multi-persona operating model** (Persona D — doanh nghiệp sở hữu 3+ website vệ tinh) — not covered elsewhere.
5. Cost content exists (callio.vn) but is generic per-seat SaaS pricing, not the Setup+Retainer / "0-Setup Offer" model this ICP is unfamiliar with.

Marked `[UNVERIFIED — no per-keyword SERP fetch]` on Sub-Pillar/Cluster rows below: Stage 1 ran one aggregate market scan (token-saver), not a full Stage-2 top-10 SERP + skeleton extraction per keyword — that per-article competitor teardown is deferred to Stage 2 at write time (see Open Questions).

---

## Keywords (cluster tree)

Facet coverage: Foundational · Typology · Application · Commercial · Troubleshooting (per [[seo-cluster]]). All nodes filtered against ICP (B2B kỹ thuật SME 5–50 người) and against `excluded_topics` — none found in context hub, so no drops.

| id | level | parent_keyword | keyword | seo_title | search_intent | content_angle | priority | status |
|----|-------|-----------------|---------|-----------|---------------|---------------|----------|--------|
| 1 | Pillar | — | AI Agent cho doanh nghiệp SME Việt Nam | AI Agent Cho Doanh Nghiệp SME Việt Nam: Hướng Dẫn Toàn Diện Triển Khai Hệ Thống Vận Hành Tự Chủ 2026 | Informational | Ultimate Guide | P0 | drafted |
| 2 | Sub-Pillar | AI Agent cho doanh nghiệp SME Việt Nam | AI Agent là gì và khác gì chatbot thông thường | AI Agent Là Gì? Phân Biệt AI Agent Với Chatbot Thông Thường Cho Doanh Nghiệp SME | Informational | Technical/Definitional | P1 | drafted |
| 3 | Cluster | AI Agent là gì và khác gì chatbot thông thường | Master RAG Lake là gì và vì sao SME cần để tránh AI ảo giác | Master RAG Lake Là Gì? Kiến Trúc Chống Ảo Giác AI Cho Dữ Liệu Doanh Nghiệp SME | Informational | Technical | P1 | drafted |
| 4 | Cluster | AI Agent là gì và khác gì chatbot thông thường | Human-in-the-loop trong AI Agent là gì theo Luật AI 134/2025/QH15 | Human-in-the-Loop Là Gì? Cách AI Agent Tuân Thủ Luật AI 134/2025/QH15 | Informational | Technical/Compliance | P2 | drafted |
| 5 | Cluster | AI Agent là gì và khác gì chatbot thông thường | 5 mắt xích vận hành AI Agent B2B khép kín cho doanh nghiệp SME | 5 Mắt Xích Vận Hành AI Agent B2B Khép Kín Cho Doanh Nghiệp SME Là Gì | Informational | Framework | P1 | drafted |
| 6 | Sub-Pillar | AI Agent cho doanh nghiệp SME Việt Nam | Các loại AI Agent doanh nghiệp SME nên triển khai theo từng phòng ban | Các Loại AI Agent Cho Doanh Nghiệp SME: Nên Triển Khai Gì Cho Từng Phòng Ban | Informational/Commercial | Typology/Comparison | P0 | drafted |
| 7 | Cluster | Các loại AI Agent doanh nghiệp SME nên triển khai theo từng phòng ban | AI Agent báo giá Zalo cho sales B2B: cơ chế Zalo Copilot 8 giây | AI Agent Báo Giá Qua Zalo Cho Sales B2B: Cơ Chế Zalo Copilot 8 Giây Là Gì | Commercial | Product-led/How-it-works | P0 | drafted |
| 8 | Cluster | Các loại AI Agent doanh nghiệp SME nên triển khai theo từng phòng ban | AI Chatbot CSKH 24/7 cho doanh nghiệp kỹ thuật, phân phối vật tư | AI Chatbot CSKH 24/7 Cho Doanh Nghiệp Kỹ Thuật, Phân Phối Vật Tư | Commercial | Product-led | P1 | drafted |
| 9 | Cluster | Các loại AI Agent doanh nghiệp SME nên triển khai theo từng phòng ban | Executive BI Dashboard AI cho CEO SME: báo cáo quản trị 1 trang | Executive BI Dashboard AI Cho CEO SME: Báo Cáo Quản Trị 1 Trang Là Gì | Commercial | Product-led | P1 | drafted |
| 10 | Sub-Pillar | AI Agent cho doanh nghiệp SME Việt Nam | Cách triển khai AI Agent cho doanh nghiệp SME ngành kỹ thuật, phân phối vật tư | Cách Triển Khai AI Agent Cho Doanh Nghiệp SME Ngành Kỹ Thuật, Phân Phối Vật Tư | Informational/Transactional | How-to | P1 | drafted |
| 11 | Cluster | Cách triển khai AI Agent cho doanh nghiệp SME ngành kỹ thuật, phân phối vật tư | Lộ trình 4 tuần triển khai AI Agent Done-With-You cho SME | Lộ Trình 4 Tuần Triển Khai AI Agent Done-With-You Cho Doanh Nghiệp SME | Informational | Step-by-step | P1 | drafted |
| 12 | Cluster | Cách triển khai AI Agent cho doanh nghiệp SME ngành kỹ thuật, phân phối vật tư | Ứng dụng AI Agent lập báo giá BOQ vật tư kỹ thuật nhanh | AI Agent Lập Dự Toán BOQ Vật Tư Kỹ Thuật Nhanh Cho Doanh Nghiệp SME | Commercial | Product-led/How-to | P2 | drafted |
| 13 | Cluster | Cách triển khai AI Agent cho doanh nghiệp SME ngành kỹ thuật, phân phối vật tư | Đào tạo nhân sự sử dụng AI Agent: mô hình 3 tầng nhân sự | Đào Tạo Nhân Sự Sử Dụng AI Agent: Mô Hình 3 Tầng Nhân Sự Cho SME | Informational | Framework | P2 | drafted |
| 14 | Sub-Pillar | AI Agent cho doanh nghiệp SME Việt Nam | Chi phí triển khai AI Agent cho SME Việt Nam và cách chọn giải pháp | Chi Phí Triển Khai AI Agent Cho SME Việt Nam Và Cách Chọn Giải Pháp Phù Hợp | Commercial | Buying Guide | P0 | drafted |
| 15 | Cluster | Chi phí triển khai AI Agent cho SME Việt Nam và cách chọn giải pháp | AI Agent Done-With-You vs mua tool SaaS rời rạc: nên chọn gì cho SME | Done-With-You vs SaaS Rời Rạc: Doanh Nghiệp SME Nên Chọn Mô Hình AI Agent Nào | Commercial | Comparison | P1 | drafted |
| 16 | Cluster | Chi phí triển khai AI Agent cho SME Việt Nam và cách chọn giải pháp | Bảng giá và mô hình Retainer AI Agent cho doanh nghiệp SME | Bảng Giá & Mô Hình Retainer AI Agent Cho Doanh Nghiệp SME 2026 | Transactional | Pricing/Decision | P0 | drafted |
| 17 | Cluster | Chi phí triển khai AI Agent cho SME Việt Nam và cách chọn giải pháp | Tiêu chí chọn đối tác triển khai AI Agent cho doanh nghiệp B2B kỹ thuật | 7 Tiêu Chí Chọn Đối Tác Triển Khai AI Agent Cho Doanh Nghiệp B2B Kỹ Thuật | Commercial | Checklist | P1 | drafted |
| 18 | Sub-Pillar | AI Agent cho doanh nghiệp SME Việt Nam | Rủi ro pháp lý và rào cản khi triển khai AI Agent tại doanh nghiệp SME Việt Nam | Rủi Ro Pháp Lý Và Rào Cản Khi Triển Khai AI Agent Tại Doanh Nghiệp SME Việt Nam | Informational | Risk/Compliance Analysis | P1 | drafted |
| 19 | Cluster | Rủi ro pháp lý và rào cản khi triển khai AI Agent tại doanh nghiệp SME Việt Nam | Luật Bảo vệ Dữ liệu Cá nhân 91/2025/QH15 và AI Agent doanh nghiệp | Luật 91/2025/QH15 Và AI Agent Doanh Nghiệp: Checklist Tuân Thủ Cho SME | Informational | Compliance | P0 | drafted |
| 20 | Cluster | Rủi ro pháp lý và rào cản khi triển khai AI Agent tại doanh nghiệp SME Việt Nam | Vì sao nhiều doanh nghiệp Việt Nam dừng dự án chuyển đổi số giữa chừng | Vì Sao Doanh Nghiệp Việt Nam Dừng Dự Án Chuyển Đổi Số Giữa Chừng Và Cách AI Agent Khắc Phục | Informational | Analytical | P2 | drafted |
| 21 | Cluster | Rủi ro pháp lý và rào cản khi triển khai AI Agent tại doanh nghiệp SME Việt Nam | Sai lầm thường gặp khi SME tự triển khai AI Agent (DIY) | 7 Sai Lầm Thường Gặp Khi SME Tự Triển Khai AI Agent (DIY) Và Cách Tránh | Informational | Troubleshooting | P2 | drafted |
| 22 | Cluster | Cách triển khai AI Agent cho doanh nghiệp SME ngành kỹ thuật, phân phối vật tư | AI Agent theo ca trực: mô hình đội vận hành cho doanh nghiệp SME | AI Agent Theo Ca Trực Là Gì? Mô Hình Đội Vận Hành Cho Doanh Nghiệp SME | Informational | Framework/Operating-model | P1 | published |
| 23 | Cluster | Cách triển khai AI Agent cho doanh nghiệp SME ngành kỹ thuật, phân phối vật tư | Đội AI Agent vận hành doanh nghiệp: nhật ký 24 giờ thực tế | Nhật Ký 24 Giờ Của Đội AI Agent Trong Doanh Nghiệp Phân Phối Vật Tư Kỹ Thuật | Informational | Use-case/Walkthrough | P1 | published |

**Cannibalization check:** each row = one distinct intent; no two rows target the same query. Row 7 (Zalo Copilot mechanism) vs row 16 (pricing) vs row 15 (model comparison) are deliberately split — mechanism, price, and buy-vs-build are different search intents even though they touch the same product.

---

## Priority rationale (seo-plan reasoning)

Scored on: (a) fit to core differentiator vs generic competitor content, (b) funnel stage / commercial intent, (c) reusability as a sales-enablement asset (per §15 Founder-Led Sales in context hub).

- **P0 (write first — 5 rows: #1, #6, #7, #14, #16, #19):** Pillar page (must exist before internal-linking any cluster); the two commercial "money" pages (Zalo Copilot mechanism, Retainer pricing) that directly support the Buổi 2 demo / Buổi 2 contract-signing sales motion; the typology sub-pillar (hub for all product-led clusters); the compliance cluster (unique gap #3, zero competitor coverage, and legally topical in 2026).
- **P1 (write second — 8 rows):** supporting definitional/product clusters and the 4-week roadmap — needed to backstop the P0 pages with internal links and depth, lower standalone commercial urgency.
- **P2 (write third — 5 rows):** narrower or more advisory long-tails (BOQ estimator, 3-tier training, DIY mistakes, digital-transformation-stall analysis) — real value but smaller/more niche audience match.

**Recommended first write batch (`write --batch 5`):** #1 (Pillar), #6, #7, #14, #16 — gets the pillar + the two conversion-driving product/pricing pages live with the sub-pillar hub, satisfying the "improve linkable core before breadth" rule.

---

## Articles (production)

`write --batch 5` ran Stages 3–5 (deep write → on-page optimize → internal linking) for the 5 P0 rows. A second `write` run (2026-09-09) completed Stages 2–5 (lightweight outline pass + deep write → on-page optimize → internal linking) for all 16 remaining backlog rows, closing out the full 21-row cluster. **DRAFT-ONLY, both runs: no publish/REST call was made, no WordPress or other CMS touched, `status: draft` in every file's frontmatter.** All files idempotency-checked (none existed before their respective run; the second run did not touch or overwrite any of the first 5 files' content — it only replaced their `(bài viết sắp ra mắt)` placeholder mentions with real internal links now that the target files exist).

| id | keyword_id | slug | title | status | word_count | image_url | publish_url |
|----|-----------|------|-------|--------|-----------|-----------|-------------|
| a1 | 1 | ai-agent-cho-doanh-nghiep-sme-viet-nam | AI Agent Cho Doanh Nghiệp SME Việt Nam: Hướng Dẫn Toàn Diện Triển Khai Hệ Thống Vận Hành Tự Chủ 2026 | drafted (not published) | 2,995 | — (media stage skipped, no `[[IMAGE_REQUEST]]` tags this run) | — |
| a2 | 6 | cac-loai-ai-agent-doanh-nghiep-sme-theo-phong-ban | Các Loại AI Agent Cho Doanh Nghiệp SME: Nên Triển Khai Gì Cho Từng Phòng Ban | drafted (not published) | 2,072 | — | — |
| a3 | 7 | ai-agent-bao-gia-zalo-copilot-8s | AI Agent Báo Giá Qua Zalo Cho Sales B2B: Cơ Chế Zalo Copilot 8 Giây Là Gì | drafted (not published) | 1,796 | — | — |
| a4 | 14 | chi-phi-trien-khai-ai-agent-sme-viet-nam | Chi Phí Triển Khai AI Agent Cho SME Việt Nam Và Cách Chọn Giải Pháp Phù Hợp | drafted (not published) | 2,220 | — | — |
| a5 | 16 | bang-gia-retainer-ai-agent-sme | Bảng Giá & Mô Hình Retainer AI Agent Cho Doanh Nghiệp SME 2026 | drafted (not published) | 1,851 | — | — |
| a6 | 2 | ai-agent-la-gi-khac-gi-chatbot | AI Agent Là Gì? Phân Biệt AI Agent Với Chatbot Thông Thường Cho Doanh Nghiệp SME | drafted (not published) | 2,169 | — | — |
| a7 | 3 | master-rag-lake-la-gi | Master RAG Lake Là Gì? Kiến Trúc Chống Ảo Giác AI Cho Dữ Liệu Doanh Nghiệp SME | drafted (not published) | 2,005 | — | — |
| a8 | 4 | human-in-the-loop-luat-ai-134-2025 | Human-in-the-Loop Là Gì? Cách AI Agent Tuân Thủ Luật AI 134/2025/QH15 | drafted (not published) | 1,917 | — | — |
| a9 | 5 | 5-mat-xich-van-hanh-ai-agent-b2b | 5 Mắt Xích Vận Hành AI Agent B2B Khép Kín Cho Doanh Nghiệp SME Là Gì | drafted (not published) | 2,404 | — | — |
| a10 | 8 | ai-chatbot-cskh-24-7-doanh-nghiep-ky-thuat | AI Chatbot CSKH 24/7 Cho Doanh Nghiệp Kỹ Thuật, Phân Phối Vật Tư | drafted (not published) | 1,957 | — | — |
| a11 | 9 | executive-bi-dashboard-ai-ceo-sme | Executive BI Dashboard AI Cho CEO SME: Báo Cáo Quản Trị 1 Trang Là Gì | drafted (not published) | 1,826 | — | — |
| a12 | 10 | cach-trien-khai-ai-agent-sme-nganh-ky-thuat | Cách Triển Khai AI Agent Cho Doanh Nghiệp SME Ngành Kỹ Thuật, Phân Phối Vật Tư | drafted (not published) | 2,049 | — | — |
| a13 | 11 | lo-trinh-4-tuan-trien-khai-ai-agent-done-with-you | Lộ Trình 4 Tuần Triển Khai AI Agent Done-With-You Cho Doanh Nghiệp SME | drafted (not published) | 2,047 | — | — |
| a14 | 12 | ai-agent-lap-boq-vat-tu-ky-thuat | AI Agent Lập Dự Toán BOQ Vật Tư Kỹ Thuật Nhanh Cho Doanh Nghiệp SME | drafted (not published) | 1,921 | — | — |
| a15 | 13 | dao-tao-nhan-su-ai-agent-3-tang | Đào Tạo Nhân Sự Sử Dụng AI Agent: Mô Hình 3 Tầng Nhân Sự Cho SME | drafted (not published) | 1,873 | — | — |
| a16 | 15 | done-with-you-vs-saas-roi-rac | Done-With-You vs SaaS Rời Rạc: Doanh Nghiệp SME Nên Chọn Mô Hình AI Agent Nào | drafted (not published) | 2,189 | — | — |
| a17 | 17 | tieu-chi-chon-doi-tac-trien-khai-ai-agent | 7 Tiêu Chí Chọn Đối Tác Triển Khai AI Agent Cho Doanh Nghiệp B2B Kỹ Thuật | drafted (not published) | 2,363 | — | — |
| a18 | 18 | rui-ro-phap-ly-rao-can-ai-agent-sme | Rủi Ro Pháp Lý Và Rào Cản Khi Triển Khai AI Agent Tại Doanh Nghiệp SME Việt Nam | drafted (not published) | 2,031 | — | — |
| a19 | 19 | luat-91-2025-ai-agent-doanh-nghiep | Luật 91/2025/QH15 Và AI Agent Doanh Nghiệp: Checklist Tuân Thủ Cho SME | drafted (not published) — **`legal_review_required: true`, hard gate before this leaves draft** | 2,269 | — | — |
| a20 | 20 | vi-sao-doanh-nghiep-dung-du-an-chuyen-doi-so | Vì Sao Doanh Nghiệp Việt Nam Dừng Dự Án Chuyển Đổi Số Giữa Chừng Và Cách AI Agent Khắc Phục | drafted (not published) | 1,741 | — | — |
| a21 | 21 | sai-lam-thuong-gap-sme-tu-trien-khai-ai-agent-diy | 7 Sai Lầm Thường Gặp Khi SME Tự Triển Khai AI Agent (DIY) Và Cách Tránh | drafted (not published) | 2,046 | — | — |
| a22 | 22 | ai-agent-theo-ca-truc-mo-hinh-doi-van-hanh | AI Agent Theo Ca Trực Là Gì? Mô Hình Đội Vận Hành Cho Doanh Nghiệp SME | **published (live)** | 2,285 | — | https://tranganhai.vercel.app/blog/ai-agent-theo-ca-truc-mo-hinh-doi-van-hanh |
| a23 | 23 | nhat-ky-24h-doi-ai-agent-doanh-nghiep-phan-phoi-vat-tu | Nhật Ký 24 Giờ Của Đội AI Agent Trong Doanh Nghiệp Phân Phối Vật Tư Kỹ Thuật | **published (live)** | 2,644 | — | https://tranganhai.vercel.app/blog/nhat-ky-24h-doi-ai-agent-doanh-nghiep-phan-phoi-vat-tu |

Files: `plans/marketing/tranganhai/articles/<slug>.md`

### Per-article open questions / flags (from Stage 3–4 writers)

- **#1 Pillar** — word count 2,995 (~7% over the 2,200–2,800 brief target; flagged, not trimmed, since every section maps to a required brief element). No ROI/payback-time figure exists for VN SMEs — omitted rather than invented. No named case study exists — used generic industry-pattern framing.
- **#6 Sub-Pillar (typology)** — no open questions; all module names/numbers and the 7-position staff table reproduced verbatim from context hub §6/§9.
- **#7 Cluster (Zalo Copilot, flagship)** — HIGH RISK row, by design. No invented numbers beyond the sourced 8-second mechanism, the four ~2-second steps, and the 2–5 second human-review window. `[NEEDS DATA]` explicitly flagged in-article for any quantified before/after business-outcome metric (e.g. quote-cycle-time reduction %, close-rate lift) — none exists in the source, none invented.
- **#14 Sub-Pillar (cost)** — `[competitors unverified: fetch callio.vn skeleton before final publish]` — this run did not do a full competitor-page fetch, only used search-snippet-level positioning per the Stage-1 note; no refund/early-termination policy exists in context hub, stated honestly as "contact for details" rather than invented.
- **#16 Cluster (pricing, highest accuracy risk)** — every VND figure, package name, and contract clause verified cell-by-cell against context hub §10/§10.1/§14; no discrepancies found. No refund policy invented (none documented). **Recommend legal/pricing sign-off before this file moves out of `status: draft`** — flagged twice (in this row and in Open Questions below) given it states real contract terms.
- **#2 Sub-Pillar (AI Agent là gì)** — no quantified hallucination-reduction benchmark exists in the source; no real customer example, so Master RAG Lake / Zalo Copilot are used as illustrative mechanisms instead of a case study.
- **#3 Cluster (Master RAG Lake)** — no quantitative retrieval-accuracy benchmark in the source (kept descriptive, not invented); no real customer example.
- **#4 Cluster (Human-in-the-loop / Luật AI 134)** — legal/compliance content. Two `[NEEDS DATA — cần đối chiếu văn bản luật gốc]` flags added: exact statutory scope of human-in-the-loop under Luật AI 134/2025/QH15, and precise legal log-retention requirements (duration/format/requester) — context hub only documents Trang Anh AI's internal SLA Escalation Matrix and contractual clause 5, not literal statute text. 5%-revenue penalty kept attached only to Luật 91/2025/QH15, not conflated with Luật AI 134. Disclaimer line included.
- **#5 Cluster (5 mắt xích)** — word count 2,404 (~9% over the 1,800–2,200 target; kept for full framework depth rather than trimmed, consistent with how the Pillar handled the same trade-off). No quantified end-to-end ROI across all 5 nodes simultaneously exists in the source.
- **#8 Cluster (CSKH 24/7)** — no sourced quantitative metric for response-time reduction or lead-capture lift vs. a human-only team — omitted rather than invented.
- **#9 Cluster (Executive BI Dashboard)** — What-If Scenario Simulation stated explicitly as Enterprise-tier-only (Gói 3) per §10.1, to avoid over-promising to Gói 1/2 readers. No sourced "CEO time saved per week" figure — omitted.
- **#10 Sub-Pillar (cách triển khai)** — no sourced timeline-slippage rate — not invented.
- **#11 Cluster (lộ trình 4 tuần)** — the Gantt's calendar dates (2026-09-01 onward) in the context hub are illustrative for one project instance — reproduced as day-offsets/durations, not as a universal start-date claim.
- **#12 Cluster (BOQ)** — M6 (BOQ Estimator) is explicitly stated as Enterprise/Gói 3 only (41.500.000 VNĐ/tháng), matching §10.1 exactly — not available in Gói 1/2. No before/after case study exists so none was invented.
- **#13 Cluster (đào tạo 3 tầng)** — no granular breakdown behind the "2 weeks" onboarding figure beyond §9; used relative "Tuần 1–4" framing instead of literal calendar dates.
- **#15 Cluster (DWY vs SaaS)** — the carve-out that micro-teams (<5 người) with low data complexity may be better served by SaaS/DIY is the writer's own honest inference, not literal context-hub language — **recommend sales/marketing confirms this is the official public stance before publishing.**
- **#17 Cluster (tiêu chí chọn đối tác)** — no named case studies or vendor certifications exist in the context hub to cite as harder proof for the "vertical expertise" criterion — flagged for future evidence if available.
- **#18 Sub-Pillar (rủi ro pháp lý hub)** — deliberately avoids repeating legal/vận hành detail already covered in #19/#20/#21 to prevent inconsistent legal claims appearing in multiple places. Disclaimer line included.
- **#19 Cluster (Luật 91/2025/QH15)** — HIGHEST-RISK ROW, by design. Frontmatter carries `legal_review_required: true`. Only the 5%-doanh-thu figure + Luật 91/2025/QH15 + Nghị định 356/2025/NĐ-CP citations are used as specifics; all other legal detail is marked `[NEEDS DATA — cần đối chiếu văn bản luật gốc trước khi xuất bản]`. Placeholder PII format `0xxx-xxx-xxx` used, no real PII. Disclaimer line included. **Gated — do not move out of `status: draft` without named legal sign-off.**
- **#20 Cluster (vì sao dự án CĐS dừng)** — the 48,8%/2,2%/55%/76%/41% figures are market-wide (Bộ KH&ĐT + GIZ / AWS+Strand Partners, n≈1.300 and their respective samples), not SME-B2B-kỹ-thuật-specific — flagged as such rather than implied as segment-specific. 48.8% figure is the same one already used in the Pillar and in `marketing-context.md` §2 — reused, not new.
- **#21 Cluster (sai lầm DIY)** — the 7 mistakes are derived from qualitative pain-point mapping in the context hub (§3, §7.1, §7.3), not a quantitative survey of mistake frequency — no fabricated per-mistake percentages.

### Internal linking notes
All 21 files now exist. Every cross-reference across all 21 articles is a real relative markdown link (`[anchor](slug.md)`, same directory) — the placeholder `(bài viết sắp ra mắt)` mentions that existed in the first 5 files (#1, #6, #7, #14, #16) pointing to rows #2, #4, #5, #8, #9, #10, #11, #14→#15/#17, #18, #19 have all been replaced with real links now that every target file exists. Verified via `grep -l "sắp ra mắt" articles/*.md` returning zero matches post-fix. Hierarchy: Pillar #1 ↔ each of the 5 Sub-Pillars (#2, #6, #10, #14, #18) ↔ their child Clusters, plus deliberate cross-sub-pillar sideways links (e.g. #4 ↔ #19, #5 ↔ #7, #15/#17 ↔ #16, #21 ↔ #3/#17).

---

## Truth-only / compliance notes applied

- No invented statistics were added beyond what `marketing-context.md` already cites with a named source (AWS+Strand Partners, Bộ KH&ĐT+GIZ, UOB, Sapo, Yandex Ads+YouGov) or what this run's own WebSearch surfaced (with sources listed above).
- Cluster #20 references the 48.8%-project-stall figure — this is the *same* figure already cited in `marketing-context.md` §2 (Bộ KH&ĐT + GIZ), reused, not fabricated. Any *new* number a future writer wants to add must be sourced or marked `[NEEDS DATA]`.
- No customer/lead PII involved at plan stage — n/a.
- Site is Vercel/Next.js, not WordPress: `wordpress-rest` publish path does NOT apply here. Publish mechanism is an open question (see below) — flagged now so Stage 6 doesn't assume WP.

---

## Briefs written this run (`briefs/`)

Full Stage-2-style outlines (5 of 21 rows — the P0 set), rest of backlog is cluster-tree-only pending prioritization sign-off:

- `briefs/ai-agent-cho-doanh-nghiep-sme-viet-nam.brief.md` (#1, Pillar)
- `briefs/cac-loai-ai-agent-doanh-nghiep-sme-theo-phong-ban.brief.md` (#6, Sub-Pillar)
- `briefs/ai-agent-bao-gia-zalo-copilot-8s.brief.md` (#7, Cluster — flagship differentiator)
- `briefs/chi-phi-trien-khai-ai-agent-sme-viet-nam.brief.md` (#14, Sub-Pillar)
- `briefs/bang-gia-retainer-ai-agent-sme.brief.md` (#16, Cluster — pricing, high accuracy risk)
- `briefs/luat-91-2025-ai-agent-doanh-nghiep.brief.md` (#19, Cluster — legal/compliance, highest accuracy risk, flags human legal review)

Rows #2–5, #8–13, #15, #17–18, #20–21: a lightweight Stage-2 (outline) pass was done inline at write time for this second run (per the aggregate Stage-1 market scan above, not a fresh full-competitor-teardown per row — see Open Questions item 5), rather than a separate full brief file. All 16 rows are now `status: drafted`; no `status: new` rows remain in the 21-row cluster.

---

## Open questions for human review (STOP HERE)

1. ✅ **RESOLVED 2026-09-13 — publish target IS git-based, and it was already live.**
   `web/src/lib/blog.ts` reads `../plans/marketing/tranganhai/articles/*.md` at build time via `gray-matter`, and `web/src/app/blog/[slug]/page.tsx` calls `generateStaticParams()` over **every** article. So: drop a `.md` into `articles/`, commit, push `master` → Vercel rebuilds → the article is public at `/blog/<slug>`. No CMS, no `wordpress-rest`, no publish step.
   🔴 **Consequence — the draft gate never existed.** `getAllArticles()` says in its own comment: *"Does not filter on `status` — this is a listing feature, not a publish gate."* Verified 2026-09-13: `/blog` lists **all 21 articles** and both gated rows return HTTP 200 (`/blog/bang-gia-retainer-ai-agent-sme` #16, `/blog/luat-91-2025-ai-agent-doanh-nghiep` #19 `legal_review_required: true`). **The two rows this file says must not move out of `status: draft` without named legal sign-off have been publicly live.** `status:` is decorative — treat it as a label, never as a gate.
   ⚠️ Also `generateMetadata` emits canonical/OG against `https://tranganhai.com/...`, a domain with **no DNS records** — every canonical/OG URL on the site points at a dead host. Needs a decision: point DNS at Vercel, or switch the canonical to `tranganhai.vercel.app`.
2. **Confirm 5-sub-pillar / 21-row scope.** This plan intentionally covers all 5 facet frameworks and all 4 personas for a comprehensive cluster. If a narrower first pass is preferred, confirm which sub-pillar(s) to drop or defer.
3. **P0 batch confirmation.** ✅ DONE — `write --batch 5` executed 2026-09-09 for rows #1, #6, #7, #14, #16 (pillar + hub + flagship product + pricing). Draft-only, saved as markdown, nothing published. See "Articles (production)" above for per-article word counts and flags.
   **✅ FULL 21-ROW CLUSTER DONE — second `write` run executed 2026-09-09** completing rows #2, #3, #4, #5, #8, #9, #10, #11, #12, #13, #15, #17, #18, #19, #20, #21. All 21 rows now `status: drafted`, all saved as markdown in `articles/`, nothing published to any CMS/WordPress. Internal-link placeholders in the original 5 files fully resolved to real links now that all 21 files exist.
4. **Legal review gate.** Row #19 (Luật 91/2025/QH15) is compliance content — recommend a named legal reviewer sign off before this one specifically goes to Stage 6, on top of normal editorial review. **`legal_review_required: true` is set in row #19's frontmatter and confirmed present** — this is a hard gate, not a suggestion; do not move #19 out of `status: draft` without named legal sign-off. **Also applies to row #16** (retainer pricing) — every VND figure/contract clause was verified against the source, but recommend a legal/pricing sign-off pass before #16 moves out of `status: draft`, since it states real contract terms (6-month lock, quarterly prepay, 75-day QBR, no documented refund policy). Additionally, row #15's "SaaS/DIY suits micro-teams" carve-out (writer's own inference, not literal context-hub language) should get a marketing/sales sanity-check before publish.
5. **SERP depth for remaining 16 rows.** ✅ DONE for all rows at write-time — a lightweight Stage-2 outline pass (using the Stage-1 aggregate market scan above, not a fresh full-competitor top-10 fetch per keyword) was completed inline for each of the 16 rows during the second `write` run, per the explicit cost-control instruction for this run. Row #14 still specifically needs a live fetch of callio.vn's actual page (only search-snippet-level competitive framing was used) — flagged in that article's frontmatter; this is the one remaining item under this heading.
6. **Publish mechanism still unresolved (see item 1) — all 21 draft files are parked in `articles/` pending an answer.** Neither the `write --batch 5` run nor the second full-backlog `write` run attempted any publish step (no CMS/WordPress/REST call made), per explicit instruction for both runs.
7. **New: legal sign-off is now the single hard blocker before any Stage 6 publish work begins** — rows #16 and #19 both carry real contract/legal claims and must clear a named reviewer first; every other row is editorially ready pending the publish-target decision (item 1).
