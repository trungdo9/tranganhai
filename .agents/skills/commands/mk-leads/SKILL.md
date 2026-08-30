---
name: mk-leads
description: Lead generation pipeline (5-phase — generate → qualify → nurture → convert → retain) Trigger by asking for /mk:leads or /mk-leads.
---

# /mk:leads Command


## Pre-flight (HARD FAIL)

**If `plans/marketing-context.md` is missing, refuse to run and direct user to `/mk:plan`.**

Per .agents/workflows/marketing-rules.md, every `/mk:` command requires the marketing context hub. The only exception is `/mk:plan` itself.

## Variables

ACTION: $1 (default: default)
REST: $2..$n (action-specific arguments)

## Workflow

Activate email-specialist + crm-specialist agents. Execute .agents/workflows/sales-workflow.md (5 phases). PII redaction enforced.

### Actions

- **`default`** — Full 5-phase lead pipeline
  - skills: `cold-email`, `prospecting`, `email-specialist`, `crm-specialist`, `customer-research`

## Output

Results written to `plans/marketing/<campaign>/leads.csv (PII-redacted)`

## Notes

- Concise grammar in reports. List unresolved questions at end.
- PII redaction enforced for all customer/lead data (see .agents/workflows/automation-rules.md).
- Idempotency: re-runs must not duplicate resources (emails, leads, video assets).
- Cross-references: `.agents/workflows/marketing-rules.md`, `.agents/workflows/automation-rules.md`, `skills/marketing/README.md`.

## Examples

```
<icp-description> <example-target>
```

