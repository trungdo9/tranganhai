# Antigravity Marketing Kit Rules & Guidelines

**Domain:** Marketing Kit + Automation (`/mk:` namespace) — applies across all marketing skills, agents, commands, and workflows.

## 1. Required Hub Context (`plans/marketing-context.md`)

Every `/mk:` command and marketing workflow MUST verify the existence of `plans/marketing-context.md` before proceeding.
- If absent: Output "❌ Marketing context not found at plans/marketing-context.md" and direct the user to `/mk:plan` (or `/mk-plan`).
- Exception: `/mk:plan` itself, which bootstraps the context hub.

## 2. Content Quality & Principles

- **No fluff**: Cut filler ("in today's fast-paced world..."). Every sentence must provide tangible value.
- **No hallucinated metrics**: Never fabricate statistics, CTRs, or case numbers. Mark unverified claims as `[NEEDS DATA]`.
- **Brand voice first**: Align tone, terminology, and forbidden words with `plans/marketing-context.md`.
- **Quality Gates**: Pass Copy quality, SEO E-E-A-T, CRO 25-point checklist, and Brand voice alignment.

## 3. Automation, Privacy & MCP Rules

- **MCP First**: Check MCP skill wrappers (`mcp-ga4`, `mcp-gsc`, `mcp-sendgrid`, `mcp-resend`, `mcp-reviewweb`, `mcp-wordpress`) before direct API calls. Use manual fallback if unavailable.
- **Data Privacy / PII**: Never commit raw PII (emails, phone numbers, customer names) to disk or logs. Always redact.
- **Idempotency**: All campaign runs must be re-runnable without duplicating outreach or assets (use `campaign + step + recipient-id`, never timestamp in keys).

## 4. Cross-References

- Rules: `.agents/rules/marketing-rules.md`, `.agents/rules/automation-rules.md`, `.agents/rules/cro-framework.md`
- Workflows: `.agents/workflows/marketing-workflow.md`, `.agents/workflows/seo-workflow.md`, etc.
- Skills: `.agents/skills/marketing/`, `.agents/skills/automation/`, `.agents/skills/integrations/`
