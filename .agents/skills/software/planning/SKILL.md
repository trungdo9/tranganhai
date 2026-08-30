---
name: planning
description: Implementation planning specialist skill. Use before significant implementation work to research, analyze trade-offs, and produce step-by-step plans.
---

# Software & Marketing Planning Skill

Use this skill when researching, designing architecture, breaking down epics, or producing structured implementation / marketing execution plans.

## Methodology

Follow the core planning methodology:
1. **Research & Analysis**: Read existing codebase, documentation, and context hub (`plans/marketing-context.md` for marketing).
2. **Decomposition**: Epic → Stories → Tasks with clear acceptance criteria.
3. **Principles**: YAGNI, KISS, DRY.
4. **Output Directory Structure**: Store plans in `plans/` or `plans/marketing/<campaign>/`.
5. **Output Format**: Write clean markdown (`plan.md`). When HTML rendering is requested (`-o html`), follow [references/html-output.md](references/html-output.md).

## Hard Rules

- DO NOT implement during the planning phase — respond with summary + plan file path only.
- List unresolved questions or risks at the end of reports.
