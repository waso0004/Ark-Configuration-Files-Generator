const fs = require('fs');
const lines = fs.readFileSync('./settings-translations.js', 'utf8').split('\n');

const sections = {
    es: { start: 5, end: 449 },
    fr: { start: 450, end: 911 },
    de: { start: 912, end: 1373 },
    pt: { start: 1374, end: 1835 },
    ru: { start: 1836, end: 2297 },
    zh: { start: 2298, end: 2728 },
    ja: { start: 2729, end: 3164 },
    ko: { start: 3165, end: 3615 }
};

const target = 384;
const pattern = /^\s{8}\w/;

let output = '=== Translation Entry Count ===\n\n';
output += 'Pattern: 8 spaces followed by word character\n';
output += 'Target: ' + target + ' entries per language\n\n';

for (const [lang, range] of Object.entries(sections)) {
    const sectionLines = lines.slice(range.start - 1, range.end);
    const count = sectionLines.filter(line => pattern.test(line)).length;
    const status = count === target ? 'OK' : 'MISMATCH';
    const diff = count - target;
    const diffStr = diff > 0 ? `+${diff}` : diff.toString();
    output += `${lang}: ${count} entries - ${status} (${diffStr})\n`;
}

console.log(output);
