---
name: seo-audit
description: Diagnostic SEO audit — crawl a site, score it against a fixed rubric, benchmark it against 2-3 ranking competitors, and emit a prioritized fix list with falsifiable findings. Produces the artifact that opens a client conversation, and the baseline every later measurement is compared against. Precedes the seo-writing pipeline.
allowed-tools: Read, Write, Bash, Glob, Grep, WebSearch, WebFetch
---

# SEO Audit — Diagnostic Baseline

> An audit is not a list of everything wrong. It is a *diagnosis*: the three things costing this site money, ranked by impact ÷ effort, each next to the competitor who already does it right. Everything else is an appendix.

## When this skill activates

**Implicit:** "audit this site", "why isn't this site ranking", "what's broken on [domain]", "compare us to competitor X", "establish an SEO baseline".
**Explicit:** "Use the seo-audit skill to [task]."
**Routed from:** `/mk:seo audit`, the existing-site playbook Phase 1, [[seo-technical]].
**Feeds:** [[seo-plan]] (prioritization), [[seo-cluster]] (content gap → cluster), [[seo-writing]] (what to write first).

## Scope

Covers:
- Page-level crawl + extraction of on-page signals (headings, meta, schema, links, tracking).
- Site-level inventory from sitemaps — URL count, distribution, indexability blockers, thin content.
- **Scoring against a fixed rubric** so "before" and "after" are comparable numbers, not impressions.
- Competitor benchmark on the *same* checks — the only way a finding becomes persuasive.
- Prioritized fix list (P0/P1/P2 × effort) and an ICE-ranked roadmap.

Does NOT cover:
- Core Web Vitals deep-dive → [[seo-technical]] (audit only records the PSI numbers).
- Keyword volume/difficulty research → research tools, see [[seo-writing]] `references/`.
- Writing the fixes → [[seo-content]], [[seo-writing]].
- Schema authoring → [[seo-schema]] (audit only counts types present and names the gap).

## The three layers — run in this order

Each layer is independently useful. Stop after layer 1 if all you need is a conversation-opener.

| Layer | Input | Method | Output |
|---|---|---|---|
| **1. Page-level** | 4-6 representative URLs (home + one per template) | HTTP fetch + signal extraction | Signal table per URL, `MISSING` flags |
| **2. Site-level** | `sitemap_index.xml` | Parse child sitemaps, dedupe, classify | URL inventory, indexability blockers, thin-content list |
| **3. Competitor** | 2-3 domains ranking for the head term | Layer 1 against each | Comparison table — *"they have it, you don't"* |

Layer 3 is what makes the audit land. A missing `H1` is an abstraction; a missing `H1` *in a column next to a competitor who has one* is a decision.

## Page-level check set

Extract per URL. Any `MISSING` on a required signal is P0.

| Signal | Pass condition | Common failure |
|---|---|---|
| HTTP status | 200, no redirect chain | 301 chains on `/products`, `/contact`, `/about` — each leaks 5-10% link equity |
| Title | 50-60 chars, contains target keyword | Over 60 → truncated in SERP |
| Meta description | 140-160 chars | Absent, or duplicated site-wide |
| **H1** | **Exactly one, contains target keyword** | **Missing on homepage — the single most common critical bug** |
| H2/H3 | ≥3 headings, correct nesting | Zero H2 = no readable outline for the crawler |
| Canonical | Self-referential, absolute | Missing on paginated/filtered URLs |
| Robots meta | `index, follow` on money pages | Accidental `noindex` surviving a staging push |
| Viewport | present | — |
| Schema (JSON-LD) | count the `@type` values present | Foundation types present, *commercial* types absent (see below) |
| Open Graph | title, description, image | — |
| Images | alt coverage % | — |
| **Internal links** | **≥10 on homepage, ≥3 on posts** | **1-2 links — the second most common critical finding** |
| External links | audit if unusually high | 160+ outbound = authority leak |
| Analytics | GA4 / GTM tag present *and firing* | Tag present, not firing |
| HTML entity encoding | headings render as text | `Chuy&ecirc;n s&#7843;n` — crawler reads garbage |

**Schema gap heuristic.** Most sites carry *foundation* types (`WebSite`, `WebPage`, `Organization`, `Article`, `ImageObject`) and are missing the *commercial* types that win SERP real estate: `AggregateRating` + `Review` (stars), `FAQPage` (rich result), `Product` (specs/price/availability), `LocalBusiness` (NAP/hours/geo), `BreadcrumbList`. Count both sets for the client **and each competitor**. The gap is the recommendation.

## On-page scoring rubric (max 100)

Score every page. The aggregate is the site's baseline number and the thing you re-measure after the fix sprint. **Do not invent a new rubric per client** — a rubric is only worth anything if it is the same one next quarter.

| Check | Points |
|---|---:|
| Title contains target keyword | 15 |
| First 100 chars contain target keyword | 15 |
| Word count ≥ 800 (300-800 → 8) | 15 |
| Slug contains target keyword | 10 |
| H1 present | 10 |
| H1 contains target keyword | 10 |
| Internal links ≥ 3 (1-2 → 5) | 10 |
| Excerpt / meta description present | 5 |
| ≥1 image with alt | 5 |
| Heading count ≥ 3 | 5 |

Report as a **distribution, not a mean**. An `avg 52.1` hides that static pages sit at 30-50 while recent posts sit at 50-60 — and those two groups need different fixes.

## Prioritization

Two passes, because *what to fix* and *what to fund* are different questions.

**Pass 1 — triage by severity × effort.** Every finding gets P0/P1/P2 and an hour estimate:

- **P0** — broken, cheap, high impact. Missing H1 (30 min), redirect chains (1-2 hr), entity encoding (30 min), internal linking (2 hr). Week 1.
- **P1** — competitive gaps that exist but are unbuilt. Commercial schema (2-3 hr), FAQ schema (4-6 hr), thin homepage (3-4 hr), author bio / E-E-A-T (1-2 hr).
- **P2** — anything with real cost or a long tail. CWV work, outbound link audit, sitemap hygiene, Google Business Profile.

**Pass 2 — ICE for the roadmap.** Impact × Confidence ÷ Effort, for everything beyond the quick wins. Quick wins never need ICE — if it is 30 minutes and it is broken, fix it.

## Falsifiability — required for every major finding

Each headline claim carries the condition that would prove it wrong and the measurement that settles it. Without this, an audit is opinion with tables.

```
Finding:      Missing H1 on homepage suppresses topical relevance
Falsified if: H1 added, 6 weeks pass, no impression change for head terms in GSC
Measured by:  GSC impressions for the 10 target terms, before/after
```

Say so plainly when a claim **cannot** be measured with the access available. An audit that records `baseline: unknown — needs GSC` is more useful than one that guesses, and it converts directly into an access request.

## Output

`plans/marketing/<site>/seo-audit.md`, in this order:

1. **TL;DR** — score /10, one sentence of diagnosis, **top 5 quick wins**. Most readers read only this.
2. Per-URL signal tables (layer 1).
3. Competitor comparison table (layer 3) — same rows, one column per domain.
4. Action items grouped P0/P1/P2, each with effort + impact + note.
5. Schema strategy — types present, types to add, which competitor already has each.
6. Content gaps — current vs competitor vs target.
7. Unresolved questions + access needed.

Two modes, same content:
- **Internal** — the full document; feeds [[seo-plan]] and the execution tracker.
- **Client-facing diagnostic** — sections 1, 3 and 4 only. Printed, handed over before any pitch. The competitor column does the persuading.

## Key concepts

- **Baseline before treatment.** The most valuable output is often not the fix list — it is the number you can re-measure. Record it even when it is ugly, and record `unknown` when it is unknown.
- **The competitor column is the argument.** Findings stated in absolute terms get deferred; the same finding stated as a gap against a named competitor gets scheduled.
- **Quick wins buy the mandate.** 30-45 days of P0 fixes on a neglected site typically move organic traffic with no new content, and that movement is what funds the content programme.

## Cross-references

- `plans/marketing-context.md` — required hub (target keywords, ICP, competitor list)
- [[seo-plan]] — turns the fix list into a sequenced roadmap
- [[seo-technical]] — owns CWV, crawl budget, rendering
- [[seo-schema]] — authors the JSON-LD this audit says is missing
- [[seo-cluster]] — consumes the content-gap section
- `.claude/workflows/seo-workflow.md` — where audit sits in the loop

## Provenance

Originally imported from `AgriciDaniel/claude-seo` as a stub — frontmatter and section skeleton only, no method.

**Filled 23/08/2026 by harvesting a real engagement:** `plans/marketing/strategy-2026q3/seo-audit.md` and `plans/marketing/thanhoattinh.net/seo-master-plan.md` (thanhoattinh.net, B2B industrial, 823 URLs, 260607–260616).

Generalized from that engagement: the max-100 on-page rubric (master plan §2.2 — measured avg 52.1 across 14 pages + 600 posts + 100 products); the P0/P1/P2 × effort triage (15 action items); the schema gap method (8 types present vs 14 target, benchmarked against 3 competitors); the falsifiability checklist (§9); the three-layer order.

**Known debt carried over — fix on next use.** The layer-1 crawl was a per-client script (`scripts/seo-audit-thanhoattinh.js`), which is now a dead link from the audit document and was never generalized. The kit needs one `scripts/seo-audit.js <url>...` covering the check-set table above. Until that exists, layer 1 is manual and the "≤2 person-days per audit" target is not reachable.
