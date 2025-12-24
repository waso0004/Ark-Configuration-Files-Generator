const fs = require('fs');

// Read the files
const settingsDataContent = fs.readFileSync('./settings-data.js', 'utf8');
const translationsContent = fs.readFileSync('./settings-translations.js', 'utf8');

// Extract setting names from settings-data.js
const settingNames = new Set();
const namePattern = /name:\s*['"]([^'"]+)['"]/g;
let match;
while ((match = namePattern.exec(settingsDataContent)) !== null) {
    settingNames.add(match[1]);
}

console.log('=== English Source Settings ===');
console.log('Total settings in settings-data.js:', settingNames.size);
console.log('');

// Languages to check
const languages = ['es', 'fr', 'de', 'pt', 'ru', 'zh', 'ja', 'ko'];
const languageNames = {
    es: 'Spanish', 
    fr: 'French', 
    de: 'German', 
    pt: 'Portuguese', 
    ru: 'Russian', 
    zh: 'Chinese', 
    ja: 'Japanese', 
    ko: 'Korean'
};

// For each language, extract translated keys
languages.forEach(lang => {
    // Find the start of this language section
    const langStartPattern = new RegExp(`\\n\\s{4}${lang}:\\s*\\{`);
    const langStartMatch = langStartPattern.exec(translationsContent);
    
    if (langStartMatch) {
        const startIndex = langStartMatch.index;
        
        // Find next language section or end of object
        let endIndex = translationsContent.length;
        languages.forEach(otherLang => {
            if (otherLang !== lang) {
                const otherPattern = new RegExp(`\\n\\s{4}${otherLang}:\\s*\\{`);
                const otherMatch = otherPattern.exec(translationsContent);
                if (otherMatch && otherMatch.index > startIndex && otherMatch.index < endIndex) {
                    endIndex = otherMatch.index;
                }
            }
        });
        
        // Also check for the closing of the main object
        const closingPattern = /\n\s*\};\s*$/;
        const closingMatch = closingPattern.exec(translationsContent);
        if (closingMatch && closingMatch.index > startIndex && closingMatch.index < endIndex) {
            endIndex = closingMatch.index;
        }
        
        const langSection = translationsContent.substring(startIndex, endIndex);
        
        // Extract all setting keys from this section
        const translatedKeys = new Set();
        
        // Match setting names - they appear as: SettingName: { or 'SettingName': {
        const keyPattern = /^\s{8}['"]?([A-Za-z0-9_\[\]]+)['"]?\s*:\s*\{/gm;
        let keyMatch;
        while ((keyMatch = keyPattern.exec(langSection)) !== null) {
            translatedKeys.add(keyMatch[1]);
        }
        
        // Find missing settings
        const missing = [];
        settingNames.forEach(name => {
            if (!translatedKeys.has(name)) {
                missing.push(name);
            }
        });
        
        // Sort missing alphabetically
        missing.sort();
        
        console.log(`=== ${lang.toUpperCase()} (${languageNames[lang]}) ===`);
        console.log('Translated settings:', translatedKeys.size);
        console.log('Missing settings:', missing.length);
        if (missing.length > 0 && missing.length <= 50) {
            console.log('Missing:', missing.join(', '));
        } else if (missing.length > 50) {
            console.log('First 50 missing:', missing.slice(0, 50).join(', '));
        }
        console.log('');
    } else {
        console.log(`Language ${lang} not found in translations file`);
    }
});

// Check breeding settings specifically
console.log('=== Breeding/Imprinting Settings Check ===');
const breedingSettings = ['BabyImprintingStatScaleMultiplier', 'BabyImprintAmountMultiplier', 'MutagenLevelBoost', 'MutagenLevelBoost_Bred'];
breedingSettings.forEach(setting => {
    console.log(`${setting}: ${settingNames.has(setting) ? 'Present in English source' : 'MISSING from English source'}`);
});
console.log('');

// Check if these breeding settings are in each language
console.log('=== Breeding Settings per Language ===');
languages.forEach(lang => {
    const langStartPattern = new RegExp(`\\n\\s{4}${lang}:\\s*\\{`);
    const langStartMatch = langStartPattern.exec(translationsContent);
    
    if (langStartMatch) {
        const startIndex = langStartMatch.index;
        let endIndex = translationsContent.length;
        languages.forEach(otherLang => {
            if (otherLang !== lang) {
                const otherPattern = new RegExp(`\\n\\s{4}${otherLang}:\\s*\\{`);
                const otherMatch = otherPattern.exec(translationsContent);
                if (otherMatch && otherMatch.index > startIndex && otherMatch.index < endIndex) {
                    endIndex = otherMatch.index;
                }
            }
        });
        
        const langSection = translationsContent.substring(startIndex, endIndex);
        
        const found = [];
        const notFound = [];
        breedingSettings.forEach(setting => {
            const settingPattern = new RegExp(`['"]?${setting}['"]?\\s*:`);
            if (settingPattern.test(langSection)) {
                found.push(setting);
            } else {
                notFound.push(setting);
            }
        });
        
        console.log(`${lang.toUpperCase()}: ${found.length}/4 breeding settings`);
        if (notFound.length > 0) {
            console.log(`  Missing: ${notFound.join(', ')}`);
        }
    }
});
