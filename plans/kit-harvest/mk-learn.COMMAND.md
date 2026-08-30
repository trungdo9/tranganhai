---
description: Capture a reusable lesson from the current project and route it back to the kit — the fan-in half of the kit lifecycle
argument-hint: add|list|review [target-skill]
---

## Pre-flight (SOFT — deliberate exception to marketing-rules R1)

**`/mk:learn` does NOT hard-fail when `plans/marketing-context.md` is missing.** Warn once, then proceed.

Rationale: a lesson is captured in the 20 seconds after it is learned, or it is lost. Every second of friction lowers capture rate, and a lesson learned in a repo without a marketing hub is still a lesson. This is the second documented exception to R1 after `/mk:plan` — see the patch note in `plans/kit-harvest/README.md`.

## Variables

ACTION: $1 (default: add)
REST: $2..$n (action-specific)
LOG: `plans/kit-learnings.md` (create from the kit template if absent)

## Why this command exists

The kit ships **one-way**: `ck init` copies `.claude/` into a project. Learning flows the other way. Without a return path every project fork diverges, and "each client → lesson → better playbook → next client is cheaper" stays a slogan with no implementation.

**Hard rule this command enforces:** never edit `.claude/` inside a project. Those files are kit-owned and get overwritten on update — an edit there is a lesson deleted with no trace. Everything destined for the kit passes through `plans/kit-learnings.md` → `plans/kit-harvest/` → the upstream ClauKit repo.

## The three layers — only one is loggable

Every artifact a project produces belongs to exactly one layer. The filter question is always the same: **"would this still be true for a different client in a different industry?"**

| Layer | Example | Log it? |
|---|---|---|
| **Client data** | keyword lists, price tables, GSC exports, brand voice | ❌ Never. Stays in the project. Also a PII risk. |
| **Client config** | ICP, industry, report template | ⚠️ Only as a **variable or schema**, never as a value |
| **Method** | *how* to build a taxonomy, *how* to benchmark competitors, a scoring rubric | ✅ This layer only |

## Workflow

### Actions

- **`add`** *(default)* — capture one lesson from the current conversation and append it to LOG.
  1. Infer as much as possible from context. Ask at most **two** questions — never run a full interview.
  2. Classify the layer. If it is not `method`, say so and **do not write an entry**; tell the user where it belongs instead.
  3. Name a `target` — the skill, workflow, or rule that should absorb this. **No target = not a learning**, it is a diary note. Reject it.
  4. Check the target's current content first. If the method is already documented there, say so and skip — a duplicate entry is noise.
  5. Append using the entry format below. Never write PII (marketing-rules R7, automation-rules R4).

- **`list`** — print OPEN entries grouped by target, with `seen-in` counts, so the user can see what is close to the promotion threshold.

- **`review`** — the harvest ritual. Timeboxed, monthly, one person.
  1. Read LOG (and any additional log paths passed in REST).
  2. Group entries by `target`.
  3. Apply the promotion rule below.
  4. For each promotable target: read the current skill, merge the method in, write the result to `plans/kit-harvest/<target>.SKILL.md`, and update the **Provenance** section — source project, date, what was generalized, and any debt carried over.
  5. Mark promoted entries `PROMOTED: <date> → <target>` in LOG. Never delete entries; the log is append-only and its history is the record of how the kit learned.

## Promotion rule — "luật số 2" applied to the kit

> A lesson enters the kit when it has appeared in **≥2 projects**, **or** when it is a `fix` — something in the kit is demonstrably wrong, broken, or missing.

Everything else stays OPEN and waits. This is the same discipline as the tooling rule (only build a tool when ≥2 paying clients need it), and for the same reason: **without it the kit becomes a junk drawer of n=1 hacks frozen into standards.**

A lesson written from research rather than from a completed engagement is a **hypothesis about method, not verified method**. It may still be promoted, but its Provenance must say so plainly, and it must be revisited after the first real run. Losing that distinction destroys the point of the whole mechanism: three months on, nobody can tell which parts of the kit survived contact with a client.

## Entry format

Append to LOG. Terse on purpose — if writing one takes longer than a minute, nobody writes one.

```markdown
### <YYYY-MM-DD> · <target> · method · OPEN
**Seen in:** <project>
**Situation:** <what happened — ≤2 lines>
**Old way failed:** <why the existing approach broke — this line is what makes it a lesson and not a preference>
**New method:** <≤3 lines, imperative>
**Generalizes:** <yes/no + why>
```

Status is one of `OPEN` · `PROMOTED: <date> → <target>` · `PARKED: <reason>`.
Add `· fix` after the layer when the entry reports something broken in the kit — those bypass the ≥2 threshold.
Entries may be written in any language; only text promoted into a skill must be English.

## Reject these — they look like lessons and are not

| Looks like | Actually | Where it belongs |
|---|---|---|
| "X worked really well" | A preference. No failure mode named → nothing to learn from | nowhere |
| Client's price table / keyword list | Client data | stays in the project |
| "For this client we set the tone to formal" | Client config | `plans/marketing-context.md` |
| A hack that only works for this client's CMS | `generalizes: no` | that project's `CLAUDE.md` |
| "Model A beats model B for this" | Tool preference, not method | kit config, not a skill |
| Anything containing a name, email, phone, address | PII | delete it |

## Output

- `add` → one appended entry in `plans/kit-learnings.md`
- `list` → console table, no file written
- `review` → promote-ready files in `plans/kit-harvest/`, LOG entries marked, and a printed promote command per file

## Closing the loop — the falsifiability check

The claim behind this whole mechanism is *"each client is cheaper than the last."* It is testable with a metric the team already tracks: **hours per client**, compared by cohort at the same month of service. Client #1 at month 2 vs client #2 at month 2.

**If hours are not falling after three clients, the harvest ritual is theatre, not a mechanism.** Report that plainly rather than continuing to log.

## Notes

- Concise grammar. No filler.
- PII redaction enforced (automation-rules R4, marketing-rules R7). A learning never needs client identity to be useful.
- Idempotency: re-running `add` on the same conversation must not duplicate an entry — check the last few entries for the same `target` + `situation` before appending.
- Cross-references: `.claude/workflows/marketing-rules.md`, `.claude/workflows/automation-rules.md`, `skills/marketing/kit-builder/SKILL.md`.

## Examples

```
/mk:learn                                  # capture from current context
/mk:learn add seo-cluster                  # capture, target pre-named
/mk:learn list                             # what is open, what is near threshold
/mk:learn review                           # monthly harvest
/mk:learn review ../other-project/plans/kit-learnings.md   # harvest across projects
```
