#!/usr/bin/env node

/**
 * Modularization Hook - PostToolUse Command Hook
 *
 * Analyzes files modified via Write/Edit tools and suggests modularization
 * for files exceeding 200 lines of code. Non-blocking implementation.
 *
 * Exit Codes:
 *   0 - Success (non-blocking, allows continuation)
 *   1 - Error (logs but doesn't block)
 */

const fs = require('fs');
const path = require('path');

// Constants
const LOC_THRESHOLD = 200;
const DEBUG = process.env.MODULARIZATION_HOOK_DEBUG === 'true';

/**
 * Conditionally log diagnostic information to stderr without breaking JSON stdout parsing.
 * Keeping logs opt-in avoids noisy transcripts while still letting us validate hook flow.
 */
function debugLog(message) {
  if (DEBUG) {
    console.error(`[modularization-hook] ${message}`);
  }
}

/**
 * Main hook execution
 */
async function main() {
  try {
    const stdin = fs.readFileSync(0, 'utf-8').trim();
    if (!stdin) {
      console.log('{}');
      process.exit(0);
    }

    const payload = JSON.parse(stdin);
    let filePath = '';
    if (payload.toolCall && payload.toolCall.args) {
      filePath = payload.toolCall.args.TargetFile || payload.toolCall.args.file_path || '';
    } else if (payload.tool_input) {
      filePath = payload.tool_input.file_path || '';
    }

    if (!filePath) {
      console.log('{}');
      process.exit(0);
    }

    if (filePath.endsWith('.md') || filePath.endsWith('.txt')) {
      console.log('{}');
      process.exit(0);
    }

    if (!fs.existsSync(filePath)) {
      console.log('{}');
      process.exit(0);
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const lines = fileContent.split('\n').length;

    if (lines > LOC_THRESHOLD) {
      const relativePath = path.relative(process.cwd(), filePath);
      console.error(`[modularization-hook] 📊 File ${relativePath} has ${lines} LOC (threshold: ${LOC_THRESHOLD}). Consider modularizing.`);
    }

    console.log('{}');
    process.exit(0);
  } catch (error) {
    console.log('{}');
    process.exit(0);
  }
}

main();
