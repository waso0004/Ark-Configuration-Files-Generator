/*
  ARK Wiki audit script
  - Downloads https://ark.wiki.gg/wiki/Server_configuration (rendered HTML)
  - Extracts option -> default mappings from table rows
  - Compares against settings-data.js defaults

  Usage:
    node tools/wiki-audit.js
*/

'use strict';

const fs = require('fs');
const path = require('path');
const https = require('https');

const ROOT = path.resolve(__dirname, '..');

function fetchText(url) {
  if (typeof fetch === 'function') {
    return fetch(url, {
      headers: {
        'User-Agent': 'Ark-Config-Generator-Audit/1.0 (+local script)'
      }
    }).then(async (res) => {
      if (!res.ok) {
        const body = await res.text().catch(() => '');
        throw new Error(`HTTP ${res.status} ${res.statusText} for ${url}\n${body.slice(0, 500)}`);
      }
      return res.text();
    });
  }

  return new Promise((resolve, reject) => {
    https
      .get(
        url,
        {
          headers: {
            'User-Agent': 'Ark-Config-Generator-Audit/1.0 (+local script)'
          }
        },
        (res) => {
          const chunks = [];
          res.on('data', (d) => chunks.push(d));
          res.on('end', () => {
            const body = Buffer.concat(chunks).toString('utf8');
            if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
              resolve(body);
            } else {
              reject(new Error(`HTTP ${res.statusCode} for ${url}\n${body.slice(0, 500)}`));
            }
          });
        }
      )
      .on('error', reject);
  });
}

function decodeEntities(input) {
  let s = input;
  s = s
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'");

  // numeric entities
  s = s.replace(/&#(\d+);/g, (_, num) => {
    const code = Number(num);
    if (!Number.isFinite(code)) return _;
    try {
      return String.fromCodePoint(code);
    } catch {
      return _;
    }
  });

  // hex numeric entities
  s = s.replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => {
    const code = parseInt(hex, 16);
    if (!Number.isFinite(code)) return _;
    try {
      return String.fromCodePoint(code);
    } catch {
      return _;
    }
  });

  return s;
}

function stripTags(html) {
  return decodeEntities(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, '')
      .replace(/<style[\s\S]*?<\/style>/gi, '')
      .replace(/<[^>]+>/g, ' ')
  )
    .replace(/\s+/g, ' ')
    .trim();
}

function normalizeDefault(value, type) {
  if (value == null) return '';
  let v = String(value).trim();
  if (!v) return '';

  // Remove surrounding quotes if present
  v = v.replace(/^"([\s\S]*)"$/, '$1').replace(/^'([\s\S]*)'$/, '$1');

  if (type === 'boolean') {
    if (/^true$/i.test(v)) return 'true';
    if (/^false$/i.test(v)) return 'false';
  }

  if (type === 'integer') {
    const n = Number(v);
    if (Number.isFinite(n) && Number.isInteger(n)) return String(n);
    // Handle values like "15.0" in the wiki
    if (/^-?\d+(?:\.0+)?$/.test(v)) return String(parseInt(v, 10));
  }

  if (type === 'float') {
    const n = Number(v);
    if (Number.isFinite(n)) return String(n);
  }

  return v;
}

function numericValue(v) {
  const n = Number(String(v).trim());
  return Number.isFinite(n) ? n : null;
}

function compareDefaults(oursRaw, wikiRaw, type) {
  const ours = normalizeDefault(oursRaw, type);
  const wiki = normalizeDefault(wikiRaw, type);

  if (!wiki) return { match: true, reason: 'wiki_default_empty' };
  if (!ours) return { match: false, ours, wiki, reason: 'ours_default_empty' };

  if (type === 'boolean') {
    return { match: ours === wiki, ours, wiki, reason: ours === wiki ? 'equal' : 'boolean_mismatch' };
  }

  if (type === 'integer' || type === 'float') {
    const a = numericValue(ours);
    const b = numericValue(wiki);
    if (a != null && b != null) {
      const ok = Math.abs(a - b) < 1e-9;
      return { match: ok, ours, wiki, reason: ok ? 'equal_numeric' : 'numeric_mismatch' };
    }
  }

  const ok = ours === wiki;
  return { match: ok, ours, wiki, reason: ok ? 'equal' : 'string_mismatch' };
}

function flattenSettings(settingsObj, fileType) {
  const flattened = [];
  for (const [groupKey, items] of Object.entries(settingsObj)) {
    if (!Array.isArray(items)) continue;
    for (const item of items) {
      if (!item || typeof item !== 'object') continue;
      flattened.push({ fileType, groupKey, ...item });
    }
  }
  return flattened;
}

function extractWikiDefaultsFromHtml(html) {
  const optionToDefault = new Map();

  const rows = html.match(/<tr[\s\S]*?<\/tr>/gi) || [];
  for (const row of rows) {
    const cells = [];
    const cellRegex = /<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi;
    let m;
    while ((m = cellRegex.exec(row))) {
      cells.push(m[1]);
    }

    if (cells.length < 2) continue;

    const optionName = stripTags(cells[0]);
    // Skip header rows / empty
    if (!optionName || /option|setting/i.test(optionName) && optionName.length < 20) continue;

    const defaultValue = stripTags(cells[1]);
    if (!defaultValue && optionToDefault.has(optionName)) continue;

    // Keep first non-empty default
    if (!optionToDefault.has(optionName) || (defaultValue && !optionToDefault.get(optionName))) {
      optionToDefault.set(optionName, defaultValue);
    }
  }

  return optionToDefault;
}

function writeReport(reportPath, data) {
  fs.writeFileSync(reportPath, data, 'utf8');
}

async function main() {
  const settingsDataPath = path.join(ROOT, 'settings-data.js');

  // Load settings-data.js in Node
  const { gameUserSettings, gameIniSettings } = require(settingsDataPath);

  const flattened = [
    ...flattenSettings(gameUserSettings, 'GameUserSettings.ini'),
    ...flattenSettings(gameIniSettings, 'Game.ini')
  ];

  const byName = new Map();
  const duplicates = [];
  for (const s of flattened) {
    if (!s.name) continue;
    if (byName.has(s.name)) {
      duplicates.push(s.name);
      continue;
    }
    byName.set(s.name, s);
  }

  const settingsInFile = Array.from(byName.values());

  const wikiUrl = 'https://ark.wiki.gg/wiki/Server_configuration?action=render';
  console.log(`Downloading wiki page: ${wikiUrl}`);
  const html = await fetchText(wikiUrl);
  console.log(`Downloaded ${Math.round(html.length / 1024)} KB`);

  const wikiMap = extractWikiDefaultsFromHtml(html);
  console.log(`Parsed ${wikiMap.size} option rows from wiki`);

  const missingOnWiki = [];
  const mismatchedDefaults = [];
  const matched = [];

  for (const s of settingsInFile) {
    const wikiDefault = wikiMap.get(s.name);
    if (wikiDefault == null) {
      missingOnWiki.push(s);
      continue;
    }

    const result = compareDefaults(s.default, wikiDefault, s.type);
    if (!result.match) {
      mismatchedDefaults.push({
        name: s.name,
        fileType: s.fileType,
        groupKey: s.groupKey,
        type: s.type,
        ours: result.ours,
        wiki: result.wiki,
        reason: result.reason
      });
    } else {
      matched.push(s);
    }
  }

  mismatchedDefaults.sort((a, b) => a.name.localeCompare(b.name));
  missingOnWiki.sort((a, b) => a.name.localeCompare(b.name));

  const reportLines = [];
  reportLines.push('# ARK Wiki Discrepancy Report');
  reportLines.push('');
  reportLines.push(`Generated: ${new Date().toISOString()}`);
  reportLines.push('');
  reportLines.push('## Summary');
  reportLines.push(`- Settings in generator (unique names): ${settingsInFile.length}`);
  reportLines.push(`- Wiki options parsed: ${wikiMap.size}`);
  reportLines.push(`- Found on wiki: ${matched.length + mismatchedDefaults.length}`);
  reportLines.push(`- Not found on wiki: ${missingOnWiki.length}`);
  reportLines.push(`- Default mismatches (found on wiki): ${mismatchedDefaults.length}`);
  reportLines.push(`- Duplicate names in generator: ${new Set(duplicates).size}`);
  reportLines.push('');

  if (mismatchedDefaults.length) {
    reportLines.push('## Default mismatches');
    reportLines.push('These settings exist on the wiki, but `default` differs.');
    reportLines.push('');
    reportLines.push('| Setting | File | Group | Type | Generator default | Wiki default | |');
    reportLines.push('|---|---|---|---|---:|---:|---|');
    for (const m of mismatchedDefaults) {
      reportLines.push(
        `| ${m.name} | ${m.fileType} | ${m.groupKey} | ${m.type} | ${String(m.ours).replace(/\|/g, '\\|')} | ${String(m.wiki).replace(/\|/g, '\\|')} | |`
      );
    }
    reportLines.push('');
  }

  if (missingOnWiki.length) {
    reportLines.push('## Not found on the wiki');
    reportLines.push('These settings are present in the generator but were not found in the wiki table (could be ASA-only / patch-notes-only, or the wiki uses a different name).');
    reportLines.push('');
    reportLines.push('| Setting | File | Group | Type | Generator default | |');
    reportLines.push('|---|---|---|---|---:|---|');
    for (const m of missingOnWiki) {
      reportLines.push(`| ${m.name} | ${m.fileType} | ${m.groupKey} | ${m.type} | ${String(m.default).replace(/\|/g, '\\|')} | |`);
    }
    reportLines.push('');
  }

  if (duplicates.length) {
    reportLines.push('## Duplicate setting names (generator)');
    reportLines.push(Array.from(new Set(duplicates)).sort().map((n) => `- ${n}`).join('\n'));
    reportLines.push('');
  }

  const reportPath = path.join(ROOT, 'wiki-audit-report.md');
  writeReport(reportPath, reportLines.join('\n'));

  console.log('');
  console.log('Done. Report written to:');
  console.log(reportPath);
  console.log('');
  console.log(`Mismatches: ${mismatchedDefaults.length}`);
  console.log(`Missing on wiki: ${missingOnWiki.length}`);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
