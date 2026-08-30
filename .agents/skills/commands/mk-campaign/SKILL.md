---
name: mk-campaign
description: Run a full marketing campaign (10-phase pipeline — plan → research → insights → strategy → plan → create → edit → publish → promote → measure → optimize loop) Trigger by asking for /mk:campaign or /mk-campaign.
---

# /mk:campaign Command


## Pre-flight (HARD FAIL)

**If `plans/marketing-context.md` is missing, refuse to run and direct user to `/mk:plan`.**

Per .agents/workflows/marketing-rules.md, every `/mk:` command requires the marketing context hub. The only exception is `/mk:plan` itself.

## Variables

ACTION: $1 (default: default)
REST: $2..$n (action-specific arguments)

## Workflow

Activate campaign-manager agent. Execute .agents/workflows/marketing-workflow.md (10 phases). Confirm with user before each phase transition. Loop Optimize → Strategy as needed.

### Actions

- **`default`** — Full 10-phase marketing workflow
  - skills: `marketing-orchestrator`, `campaign-manager`, `content-strategy`, `ads`, `email-sequence`, `seo-content`, `analytics`

## Output

Results written to `plans/marketing/<campaign-name>/`

## Notes

- Concise grammar in reports. List unresolved questions at end.
- PII redaction enforced for all customer/lead data (see .agents/workflows/automation-rules.md).
- Idempotency: re-runs must not duplicate resources (emails, leads, video assets).
- Cross-references: `.agents/workflows/marketing-rules.md`, `.agents/workflows/automation-rules.md`, `skills/marketing/README.md`.

## Examples

```
<campaign-name> <example-target>
```

