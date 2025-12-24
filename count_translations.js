const fs = require('fs');
const content = fs.readFileSync('./settings-translations.js', 'utf8');

const languages = ['es', 'fr', 'de', 'pt', 'ru', 'zh', 'ja', 'ko'];
const results = {};

for (const lang of languages) {
    const langPattern = new RegExp(`^\\s{4}${lang}:\\s*\\{`, 'm');
    const langMatch = content.search(langPattern);
    
    if (langMatch === -1) {
        results[lang] = 'NOT FOUND';
        continue;
    }
    
    let endIndex = content.length;
    for (const otherLang of languages) {
        if (otherLang === lang) continue;
        const otherPattern = new RegExp(`^\\s{4}${otherLang}:\\s*\\{`, 'm');
        const otherMatch = content.slice(langMatch + 1).search(otherPattern);
        if (otherMatch !== -1 && langMatch + 1 + otherMatch < endIndex) {
            endIndex = langMatch + 1 + otherMatch;
        }
    }
    
    const langSection = content.slice(langMatch, endIndex);
    const settingMatches = langSection.match(/^\s{8}[\w\[\]]+:\s*\{/gm);
    results[lang] = settingMatches ? settingMatches.length : 0;
}

let output = '\n=== Translation Count per Language ===\n\nTarget: 384 settings\n\n';
let allComplete = true;

for (const [lang, count] of Object.entries(results)) {
    const status = count === 384 ? 'COMPLETE' : `MISSING ${384 - count}`;
    output += `${lang}: ${count} - ${status}\n`;
    if (count !== 384) allComplete = false;
}

output += '\n' + (allComplete ? 'All languages complete!' : 'Some languages have missing translations.');

fs.writeFileSync('./translation_count.txt', output);
console.log('Results written to translation_count.txt');
