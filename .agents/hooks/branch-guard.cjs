#!/usr/bin/env node

/**
 * branch-guard.cjs — PreToolUse hook (matcher: Bash). Refuses a git command
 * that would move HEAD while another live session shares the working tree.
 *
 * WHY A HOOK. The verdict already existed in `scripts/ck/branch-guard.cjs` and
 * was registered nowhere: `.agents/settings.json` listed `scout-block` and
 * `guard-destructive` only, and the sole instruction to use it was one line of
 * prose in `.agents/commands/ck/git.md` ("Before running one, check it"). So the
 * gate fired exactly when the model chose to run it — which is not a gate, and
 * `guard-destructive`'s own suite asserts `git checkout -b feat/x` is benign, so
 * nothing else stopped it either. A shared HEAD is a mechanical invariant; it
 * needs a mechanical check.
 *
 * FAILS OPEN, deliberately and in three ways: an unparseable payload, a missing
 * checks module (a project that installed `.agents/` without `scripts/ck/`), and
 * an unreadable claim registry all exit 0. This hook adds a refusal to a
 * previously-allowed action, so a bug in it must not become a new way for work
 * to fail. The refusal is narrow and the override is documented in the message.
 *
 * Exit: 0 = allow · 2 = deny (reason on stderr, shown to the model)
 */

const fs = require('fs');
const path = require('path');

/** Where `scripts/ck/` sits relative to this hook, in the repo and in an install. */
function loadGuard() {
  try {
    return require(path.join(__dirname, '..', '..', 'scripts', 'ck', 'branch-guard.cjs'));
  } catch {
    return null;
  }
}

function main() {
  let payload;
  try {
    payload = JSON.parse(fs.readFileSync(0, 'utf-8'));
  } catch {
    console.log(JSON.stringify({ decision: 'allow' }));
    process.exit(0); // cannot see the command
  }
  
  let command = '';
  if (payload && payload.toolCall && payload.toolCall.args) {
    command = payload.toolCall.args.CommandLine || payload.toolCall.args.command || '';
  } else if (payload && payload.tool_input) {
    command = payload.tool_input.command || '';
  }

  if (typeof command !== 'string' || !command.trim()) {
    console.log(JSON.stringify({ decision: 'allow' }));
    process.exit(0);
  }

  if (process.env.CK_AUTO_MODE === '1' || process.env.AGY_AUTO_MODE === '1') {
    console.log(JSON.stringify({ decision: 'allow' }));
    process.exit(0);
  }

  const guard = loadGuard();
  if (!guard) {
    console.log(JSON.stringify({ decision: 'allow' }));
    process.exit(0);
  }

  const cwd = (payload.toolCall && payload.toolCall.args && payload.toolCall.args.Cwd) || payload.cwd || process.cwd();
  let res;
  try {
    const ops = guard.classifyCommand(command);
    if (!ops.length) {
      console.log(JSON.stringify({ decision: 'allow' }));
      process.exit(0);
    }
    res = guard.assess(ops, guard.foreignSessions(cwd), false);
  } catch {
    console.log(JSON.stringify({ decision: 'allow' }));
    process.exit(0);
  }

  if (res.verdict === 'DENY') {
    const reason = `BLOCKED (shared HEAD): ${res.reason}`;
    console.log(JSON.stringify({ decision: 'deny', reason: reason }));
    console.error(reason);
    process.exit(2);
  }
  
  for (const n of res.notes.filter(n => n.startsWith('note:'))) {
    console.error(`[branch-guard] ${n}`);
  }
  console.log(JSON.stringify({ decision: 'allow' }));
  process.exit(0);
}

if (require.main === module) main();

module.exports = { loadGuard };
