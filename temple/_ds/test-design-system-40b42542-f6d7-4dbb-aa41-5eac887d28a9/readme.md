# TRANG ANH AI — Design System

**Tagline:** *Trang bị quy trình. Tinh anh vận hành.* (Elite Systems. Easy Growth.)
**Positioning:** AI Agent Operations & Workflow Alignment — co-architecture and autonomous transfer (Done-With-You), not tools and not agency work.
**Domain:** tranganhai.com · contact@tranganhai.com · Trang Anh Systems Vietnam.

## 1. Company & product context

Trang Anh AI builds and hands over AI-agent operating systems for Vietnamese B2B technical SMEs
(5–50 staff, 5–100 billion VND revenue): chemicals and water treatment, filtration media, valves and
M&E, industrial supply, packaging, fabrication. The offer is a 4-week co-architecture sprint followed
by a monthly retainer (12.5 / 24 / 41.5 million VND per month), with the "Ultimate 0-Setup Offer"
waiving the 20–35M architecture fee on a 6-month, quarterly-prepaid contract.

The whole product story is one diagram — the **5-Node closed-loop engine**, carrying 8 modules:

| Node | Modules | What it does |
|---|---|---|
| N1 · Master RAG Lake | Core | Excel unmerge, multimodal OCR, deterministic SQL pricing, dual vectorization, parent-child chunking |
| N2 · Flow Content & GEO | M1, M2 | E-E-A-T articles, presence inside ChatGPT/Gemini/Perplexity answers, 1–3+ satellite sites |
| N3 · 24/7 intake & CRM | M3, M5 | LiveChat / Fanpage / Zalo OA bot, lead scoring, CRM sync (MISA AMIS, Brevo, Sheets) |
| N4 · Sales & quoting | M4, M6, M7 | Zalo Copilot 8-second PDF quote + VietQR, BOQ estimator, tender copilot |
| N5 · Executive BI | M0 | One-page realtime CEO report, bottleneck detection, what-if scenarios |

### Surfaces represented here
1. **Marketing landing page** — the 9-section B2B executive conversion page (`ui_kits/landing/`).
2. **Executive BI Dashboard (M0) product surface** — one-page report, quote console, RAG lake registry (`ui_kits/dashboard/`).

### Sources given to build this system
- `uploads/marketing-context.md` — SSOT brand + strategy hub, v2026.3.0 (colour system, 5-node engine, pricing, personas, contract clauses). Originally referenced in the client's repo as `plans/marketing-context.md` under `E:/Projects/done-with-you/`.
- `uploads/landing-page-plan.md` — landing-page master blueprint, full Vietnamese copy for all nine sections, plus tech stack (Next.js 14 App Router + Tailwind + **Lucide Icons** + Framer Motion).
- `uploads/logo-icon.jpg` — the only supplied visual asset (1024×1024 raster app-icon mark). Copied to `assets/logo-icon.jpg`.
- **No codebase, Figma file, font binaries, photography or slide deck was provided.** No component inventory existed, so the primitive set below was authored from the brand guidelines and the two documents' actual UI needs.

## 2. Content fundamentals

**Language.** Vietnamese first, with English terms in parentheses on first mention
("Căn Chỉnh Luồng Vận Hành (Workflow Alignment)"). Never leave a technical term untranslated in
customer-facing copy — the brand keeps a fixed translation table: *Master RAG Lake* → "Bộ Não Tri Thức
Số Doanh Nghiệp (Không Ảo Giác)", *Deterministic SQL Engine* → "Động Cơ Tính Giá Chuẩn Xác 100%
(Cấm AI Đoán Mò)", *Executive BI Dashboard* → "Báo Cáo Quản Trị 1 Trang".

**Voice.** Nhẹ nhàng, tinh tế, thông thái, chuẩn mực, đáng tin cậy, thực tế — calm, precise, senior.
Speaks manager language: cost, revenue, headcount, control. Never hype, never a growth-hacking tone.

**Person.** Third-person self-reference ("Trang Anh AI gánh 90% khối lượng kỹ thuật"), never "chúng
tôi tin rằng…" essays. The reader is addressed as "doanh nghiệp của bạn" / "Ban Giám Đốc" — respectful,
never the familiar "bạn ơi".

**Casing.** Headlines use Vietnamese Title Case With Most Words Capitalised
("Xóa Bỏ Điểm Nghẽn Vận Hành."). Eyebrows are ALL CAPS with wide tracking. Body copy is sentence case.
Never all-caps a full sentence in body text.

**Numbers are the argument.** Every claim carries a figure and a named source: "48,8% doanh nghiệp
buộc phải dừng (Bộ KH&ĐT + GIZ)", "68% người mua B2B chọn đơn vị phản hồi đầu tiên", "báo giá 8 giây",
"tiết kiệm ≥30 giờ công/tháng". Vietnamese number format: thousands separated by periods
(`24.000.000 đ`), decimals by comma (`48,8%`). Currency is `đ` or `VNĐ` after the figure.

**Negation-first framing.** The brand defines itself by what it refuses: "Không bán công cụ rời rạc,
không làm hộ rỗng ruột", "không cam kết thứ hạng Google rủi ro ngoại cảnh", "cấm AI tính nhẩm".
Pair every refusal with the standard that replaces it.

**Structural habits.** Two-column contrast tables (problem → Trang Anh standard); numbered nodes and
modules used as proper nouns ("Node 4", "M7"); time promises everywhere (4 tuần, 8 giây, 10 giây,
2 phút, ngày 75, 2 giờ làm việc); legal citations spelled out in full
("Luật Dữ Liệu 91/2025/QH15", "Nghị định 356/2025/NĐ-CP", "Luật AI 134/2025/QH15").

**Emoji.** The internal planning documents use section emoji (🎨 🏛️ 📝 🎁 🔒). In shipped UI they are
**not** used — the shield, lock, gift and clock ideas become Lucide icons instead. The one exception
the source itself makes is the ⭐ marker on the featured plan, which we render as a "Gói chủ lực" badge.

**Sample copy.**
- Hero H1: "Xóa Bỏ Điểm Nghẽn Vận Hành. Xây Dựng Cỗ Máy Doanh Nghiệp Tự Chủ Bằng AI Agent Trên Hạ Tầng Chính Chủ."
- CTA: "ĐĂNG KÝ KHÁM SỨC KHỎE VẬN HÀNH & LIVE DEMO TRÊN DỮ LIỆU THẬT"
- Trust line: "🔒 Cài đặt 100% trên tài khoản Enterprise chính chủ • Tuân thủ Luật Dữ Liệu 91/2025/QH15 • Sở hữu vĩnh viễn quy trình & dữ liệu sạch."
- Objection answer: "**Không.** Trang Anh AI trực tiếp thực hiện 90% khối lượng công việc nặng nhọc nhất trong 4 tuần đầu."

## 3. Visual foundations

**Palette — "Soft Nordic Tech", ratio 60/30/10.** Deep Slate Charcoal `#1E293B` (60%) is the base:
all headings, dark sections, and the calm authority of the brand. Brand AI Blue / Soft Iris `#4F46E5`
(30%) marks anything the system does — agents, flow lines, node numbers, product actions. Sage Teal
`#0D9488` (10%) is reserved for conversion and growth: every CTA, every rising KPI, every done state.
Warm Amber `#F59E0B` flags offers and contract notes; a rose ramp flags legal risk and lost revenue.
Soft Mist White `#F8FAFC` is the page, pure white the cards, `#E2E8F0` every hairline.
Full ramps live in `tokens/colors.css`; only two background colours appear per page (mist + one dark section).

**Type.** Be Vietnam Pro throughout (300–800), IBM Plex Mono for every number, price, module code and
technical ID. Scale: hero 60/800, H2 38/700, H3 24/600, lead 17/1.65, body 15/1.65, caption 13, eyebrow
12 uppercase at 0.11em tracking. Headings are tightly tracked (−0.022em); Vietnamese diacritics need the
generous 1.65 body leading — never tighten body text below 1.5.
**Substitution flagged:** no font binaries were supplied. Be Vietnam Pro and IBM Plex Mono are Google
Fonts stand-ins chosen for complete Vietnamese diacritic coverage. Send the real files if the brand owns any.

**Spacing & layout.** 4px grid; 1200px container with 40px gutters, 760px for reading columns; 96px
section rhythm (64px for tighter sections); 24px card padding, 32px for featured cards; controls at
32/40/52px. The dashboard uses a 248px dark sidebar and a 64px topbar. Fixed elements: the landing
nav is sticky and translucent; the dashboard sidebar and topbar are fixed, content scrolls.

**Corners.** 10px controls, 14px cards, 20px large panels/hero mockups, pill badges, 22.4% squircle for
the logo tile. Nothing is fully square; nothing is a blob.

**Cards.** White, 14px radius, 1px `#E2E8F0` border, soft shadow. Emphasis is a 3px iris→teal gradient
hairline across the top edge (one card per group, the Growth plan), or a switch to the dark gradient
surface. **Never a coloured left border.**

**Shadows.** Cool, slate-tinted, never black: xs 1px hairline through xl 28px/60px at 13% for the hero
mockup. CTAs carry a coloured glow (`--shadow-accent`, `--shadow-brand`). Inner shadows are used only
as hairline insets, never for skeuomorphic depth.

**Backgrounds.** No photography was supplied, so surfaces are flat colour: mist page, white cards, and
Deep Slate sections. The dark sections carry two very soft radial glows (iris top-right, teal
bottom-left, ~30% and ~24% alpha) — the only gradient wash in the system. The iris→teal linear gradient
is brand-sanctioned because it is read directly off the supplied logo mark, but it is restricted to
3px hairlines, node chips, gradient text on the hero H1, and the thumbnail — never a full-section wash.
A bottom protection gradient (`--gradient-protect-bottom`) exists for the day real imagery arrives.

**Transparency & blur.** Used in exactly two places: the sticky landing nav
(`--glass-light` + 14px blur) and translucent white fills (`rgba(255,255,255,.04–.10)`) for cards and
buttons on dark sections. Never blur over content that must be read.

**Motion.** Fast and restrained. 120ms for hover/press, 200ms base, 320ms for panels, 520ms
`cubic-bezier(.16,1,.3,1)` for on-scroll reveals (fade + 12px rise, once, never looping). No bounce, no
spring overshoot, no parallax, no auto-playing carousels. `prefers-reduced-motion` zeroes every duration
via the token file.

**States.** Hover lifts 2px and brightens 6% (filled) or tints to mist and darkens the border
(outlined); press scales to 0.98 with no lift; focus is a 3px iris ring at 32% alpha (rose on invalid);
disabled is 45% opacity with no pointer. Interactive cards lift 2px into the lg shadow. Links are iris,
underlined with a 3px offset on hover only.

**Imagery direction (for when assets exist).** Cool, desaturated, daylight-industrial: real Vietnamese
plants, valves, filtration skids, warehouse and meeting-room scenes — no stock handshakes, no
purple-lit "AI brains", no 3D robots. Slight grain acceptable; heavy filters not. Diagrams over photos
wherever a process is being explained.

## 4. Iconography

- **System: Lucide** — specified by the source's own tech stack (Next.js + Tailwind + Lucide Icons).
  Loaded from CDN (`unpkg.com/lucide@0.474.0`) in both UI kits; there was no icon font, sprite or SVG
  set in the provided material to copy in, so nothing was substituted or hand-drawn.
- **Style:** 2px stroke, round caps, 16px inline / 17–19px feature / 13px inside badges. Icons inherit
  `currentColor`; iris for system functions, teal for completion and CTA, amber for warnings, rose for risk.
- **Recurring glyphs:** `shield-check` and `lock` (compliance, data ownership), `stethoscope` (AI Readiness
  Audit), `zap` / `timer-off` (speed), `database` / `files` / `file-spreadsheet` (RAG Lake), `search` (GEO),
  `messages-square` (24/7 intake), `calculator` (BOQ), `gavel` (tender), `file-check-2` (10-second approval),
  `layout-dashboard` / `trending-up` (Executive BI), `gift` (0-Setup Offer), `qr-code` (VietQR).
- **Emoji:** planning-doc only, never in shipped UI (see Content fundamentals).
- **Unicode as icon:** only the bullet `•` inside node lists and the `→` arrow in translation/flow copy.
- **Logo:** `assets/logo-icon.jpg` — the supplied raster TA-monogram-with-rising-arrow squircle. Used as
  given, at 22.4% radius; **no vector version, no wordmark file, and no dark/mono variant was supplied**,
  so the wordmark is set in Be Vietnam Pro 700 next to the tile (see `components/core/Logo.jsx`).
  Nothing here is redrawn from memory.

## 5. Index

**Root**
- `styles.css` — the only file consumers link; @import list.
- `thumbnail.html` — homepage tile.
- `readme.md`, `SKILL.md` — this guide and the Agent-Skills wrapper.
- `assets/logo-icon.jpg` — brand mark (only supplied asset).

**Tokens** (`tokens/`): `fonts.css`, `colors.css` (191 tokens total), `typography.css`, `spacing.css`,
`radius.css`, `shadows.css`, `motion.css`, `base.css`.

**Foundation cards** (`guidelines/`, 21 cards): Brand — logo mark, wordmark & tagline, gradients.
Colors — 60/30/10 ratio, slate / iris / teal ramps, notice & risk, text, surfaces, data-viz.
Type — display, body & lead, eyebrow, mono numerals, weights. Spacing — scale, layout rhythm, radii,
elevation, motion & states.

**Components** (`components/`, 16 primitives, each with `.d.ts` + `.prompt.md`):
- `core/` — Button, Badge, Card, Logo
- `forms/` — Field, Input, Select, Checkbox
- `navigation/` — Tabs
- `disclosure/` — Accordion
- `data/` — MetricCard, DataTable
- `marketing/` — SectionHeading, PricingCard, StepTimeline, NodeCard

**Intentional additions** (no source component inventory existed; these exist because the two source
documents demand them): `Logo` wraps the supplied raster mark so it is never re-drawn; `NodeCard`
renders the 5-Node engine, the brand's central diagram; `StepTimeline` renders the 4-week Done-With-You
roadmap; `SectionHeading` carries the mandatory data-source credit line; `PricingCard` encodes the
three-retainer + 0-Setup offer structure.

**UI kits**
- `ui_kits/landing/` — 9-section marketing landing page (see its README).
- `ui_kits/dashboard/` — Executive BI Dashboard, quote console, RAG Lake (see its README, including the provenance caveat).

**Not built** (no source material): slide template, email templates, mobile app surfaces, Zalo OA
chat UI, photography library, vector logo variants.
