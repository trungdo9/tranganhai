# Kit learnings — <project name>

**What this is.** The fan-in log. The kit ships one-way (`ck init` copies `.claude/` in); lessons flow the other way and need somewhere to land. Written with `/mk:learn`, harvested monthly with `/mk:learn review`.

**Append-only.** Never delete an entry, including rejected ones — the history of what the kit refused to absorb is as useful as what it took.

---

## Two rules

**1. Never edit `.claude/` in this project.** Kit-owned, overwritten on update. An edit there is a lesson deleted with no trace. Route: this file → `plans/kit-harvest/` → upstream ClauKit repo → `ck update`.

**2. Only the `method` layer gets logged.** Filter question: *"would this still be true for a different client in a different industry?"*

| Layer | Example | Log it? |
|---|---|---|
| Client data | keyword lists, price tables, GSC exports | ❌ never (also PII risk) |
| Client config | ICP, industry, report template | ⚠️ only as variable/schema, never a value |
| **Method** | how to build a taxonomy, a scoring rubric, a benchmark procedure | ✅ this layer only |

**Promotion threshold ("luật số 2"):** a lesson enters the kit at **≥2 projects**, or immediately if it is a `fix` — something in the kit demonstrably wrong, broken, or missing. Everything else waits. Without this, the kit becomes a junk drawer of n=1 hacks frozen into standards.

---

## Entry format

```markdown
### <YYYY-MM-DD> · <target-skill> · method · OPEN
**Seen in:** <project>
**Situation:** <what happened — ≤2 lines>
**Old way failed:** <why the existing approach broke — the line that makes this a lesson, not a preference>
**New method:** <≤3 lines, imperative>
**Generalizes:** <yes/no + why>
```

Status: `OPEN` · `PROMOTED: <date> → <target>` · `PARKED: <reason>`
Append `· fix` after the layer for broken-kit entries — they bypass the ≥2 threshold.
Any language is fine here; only text promoted into a skill must be English.

**Do not log:** "X worked well" with no failure named (preference) · client data or config · client-specific hacks (`generalizes: no` → that project's `CLAUDE.md`) · tool/model preferences · anything containing a name, email, phone, or address.

---

## Entries

<!-- Newest first. /mk:learn add appends here. -->

### YYYY-MM-DD · <target-skill> · method · OPEN
**Seen in:** <project>
**Situation:** *(illustrative placeholder — delete on first real entry)*
**Old way failed:**
**New method:**
**Generalizes:**

---

## Promoted — history

| Date | Target | Lesson | Seen in |
|---|---|---|---|
| | | | |

---

## Falsifiability of the mechanism itself

The claim is *"each client is cheaper than the last."* Test it with a metric already tracked: **hours per client, compared by cohort at the same month of service** — client #1 at month 2 vs client #2 at month 2.

| Cohort | Month 2 hours | Month 3 hours |
|---|---:|---:|
| Client #1 | | |
| Client #2 | | |
| Client #3 | | |

**If hours are not falling after three clients, this log is theatre.** Say so and stop logging rather than keeping the ritual alive on faith.
