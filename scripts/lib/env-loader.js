const fs = require('fs');
const path = require('path');

function parseEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return {};
  const content = fs.readFileSync(filePath, 'utf-8');
  const env = {};
  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    let val = trimmed.slice(eqIdx + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    env[key] = val;
  }
  return env;
}

function getEnv(key, defaultValue = '') {
  if (process.env[key]) return process.env[key];

  const envCandidates = [
    path.join(__dirname, '..', '..', '.agents', '.env'),
    path.join(__dirname, '..', '..', '.claude', '.env'),
    path.join(__dirname, '..', '..', '.env'),
    path.join(process.cwd(), '.agents', '.env'),
    path.join(process.cwd(), '.env')
  ];

  for (const envPath of envCandidates) {
    if (fs.existsSync(envPath)) {
      const parsed = parseEnvFile(envPath);
      if (parsed[key]) return parsed[key];
    }
  }

  return defaultValue;
}

module.exports = { getEnv, parseEnvFile };
