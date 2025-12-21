// ARK Server Config Generator - Main Application

const STORAGE_KEY = 'arkConfigGenerator';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize the application
    init();
});

// Store current values
let currentValues = {
    gameUserSettings: {},
    gameIni: {}
};

// Store original file content for preserving unmanaged lines
let originalFiles = {
    gameUserSettings: null,
    gameIni: null
};

// Load saved state from localStorage
function loadFromStorage() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            return JSON.parse(saved);
        }
    } catch (e) {
        console.warn('Failed to load from localStorage:', e);
    }
    return null;
}

// Save state to localStorage
function saveToStorage() {
    try {
        const state = {
            currentValues: currentValues,
            originalFiles: originalFiles,
            activeTab: document.querySelector('.tab-btn.active')?.dataset.tab || 'gameusersettings',
            activePreset: document.querySelector('.preset-btn.active')?.dataset.preset || '1x',
            collapsedSections: Array.from(document.querySelectorAll('.section-title.collapsed')).map(el => el.dataset.toggle)
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
        console.warn('Failed to save to localStorage:', e);
    }
}

function getEffectText(setting) {
    const ensureSentence = (text) => {
        if (!text) return text;
        const trimmed = text.trim();
        if (!trimmed) return trimmed;
        return /[.!?]$/.test(trimmed) ? trimmed : `${trimmed}.`;
    };

    if (setting.effect) return ensureSentence(setting.effect);
    if (setting.description) return ensureSentence(setting.description);
    if (setting.type === 'boolean') {
        return 'Enabled turns this feature on; disabled turns it off.';
    }
    if (setting.type === 'integer' || setting.type === 'float') {
        return 'Higher values generally increase this effect; lower values reduce it. Stay within sensible ranges to avoid balance or performance issues.';
    }
    return 'Adjust this value to tune the behavior. Leave default if unsure.';
}

// Preset configurations
const presets = {
    '1x': {
        name: '1x Default',
        settings: {
            'TamingSpeedMultiplier': '1.0',
            'HarvestAmountMultiplier': '1.0',
            'XPMultiplier': '1.0',
            'MatingIntervalMultiplier': '1.0',
            'BabyMatureSpeedMultiplier': '1.0',
            'EggHatchSpeedMultiplier': '1.0',
            'BabyCuddleIntervalMultiplier': '1.0',
            'BabyImprintAmountMultiplier': '1.0',
            'HexagonRewardMultiplier': '1.0'
        }
    },
    '2x': {
        name: '2x Evolution Event',
        settings: {
            'TamingSpeedMultiplier': '2.0',
            'HarvestAmountMultiplier': '2.0',
            'XPMultiplier': '2.0',
            'MatingIntervalMultiplier': '0.5',
            'BabyMatureSpeedMultiplier': '2.0',
            'EggHatchSpeedMultiplier': '2.0',
            'BabyCuddleIntervalMultiplier': '0.6',
            'BabyImprintAmountMultiplier': '2.0',
            'HexagonRewardMultiplier': '1.0'
        }
    },
    '3x': {
        name: '3x Boosted',
        settings: {
            'TamingSpeedMultiplier': '3.0',
            'HarvestAmountMultiplier': '3.0',
            'XPMultiplier': '3.0',
            'MatingIntervalMultiplier': '0.5',
            'BabyMatureSpeedMultiplier': '3.0',
            'EggHatchSpeedMultiplier': '3.0',
            'BabyCuddleIntervalMultiplier': '0.6',
            'BabyImprintAmountMultiplier': '3.0',
            'HexagonRewardMultiplier': '1.0'
        }
    },
    '4x': {
        name: '4.5x/4x Smalltribes',
        settings: {
            'TamingSpeedMultiplier': '4.5',
            'HarvestAmountMultiplier': '4.5',
            'XPMultiplier': '4.5',
            'MatingIntervalMultiplier': '0.5',
            'BabyMatureSpeedMultiplier': '4.0',
            'EggHatchSpeedMultiplier': '4.0',
            'BabyCuddleIntervalMultiplier': '0.6',
            'BabyImprintAmountMultiplier': '4.0',
            'HexagonRewardMultiplier': '1.0'
        }
    },
    '5x': {
        name: '5x Arkpocalypse',
        settings: {
            'TamingSpeedMultiplier': '5.0',
            'HarvestAmountMultiplier': '5.0',
            'XPMultiplier': '5.0',
            'MatingIntervalMultiplier': '0.5',
            'BabyMatureSpeedMultiplier': '5.0',
            'EggHatchSpeedMultiplier': '5.0',
            'BabyCuddleIntervalMultiplier': '0.6',
            'BabyImprintAmountMultiplier': '5.0',
            'HexagonRewardMultiplier': '1.0'
        }
    }
};

function init() {
    // Load saved state first
    const savedState = loadFromStorage();
    
    // Restore original files if they were saved
    if (savedState && savedState.originalFiles) {
        originalFiles = savedState.originalFiles;
    }
    
    // Populate settings from data
    populateSettings(savedState);
    
    // Setup event listeners
    setupTabSwitching();
    setupSectionToggle();
    setupSearch();
    setupUploadButtons();
    setupDownloadButtons();
    setupResetButton();
    setupPresets();
    setupBackToTop();
    
    // Restore UI state after setup
    if (savedState) {
        restoreUIState(savedState);
    }
    
    // Update import status display
    updateImportStatus();
}

function restoreUIState(savedState) {
    // Restore active tab
    if (savedState.activeTab) {
        const tabBtn = document.querySelector(`.tab-btn[data-tab="${savedState.activeTab}"]`);
        if (tabBtn) {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            tabBtn.classList.add('active');
            document.getElementById(savedState.activeTab)?.classList.add('active');
        }
    }
    
    // Restore active preset
    if (savedState.activePreset) {
        document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
        const presetBtn = document.querySelector(`.preset-btn[data-preset="${savedState.activePreset}"]`);
        if (presetBtn) presetBtn.classList.add('active');
    }
    
    // Restore collapsed sections
    if (savedState.collapsedSections) {
        savedState.collapsedSections.forEach(sectionId => {
            const title = document.querySelector(`.section-title[data-toggle="${sectionId}"]`);
            const grid = document.getElementById(sectionId);
            if (title && grid) {
                title.classList.add('collapsed');
                grid.classList.add('collapsed');
            }
        });
    }
}

function populateSettings(savedState) {
    // Use saved values if available
    const savedGameUserSettings = savedState?.currentValues?.gameUserSettings || {};
    const savedGameIni = savedState?.currentValues?.gameIni || {};
    
    // Populate GameUserSettings.ini sections
    for (const [sectionId, settings] of Object.entries(gameUserSettings)) {
        const container = document.getElementById(sectionId);
        if (container) {
            settings.forEach(setting => {
                // Use saved value or default
                const savedValue = savedGameUserSettings[setting.name];
                const settingWithValue = savedValue !== undefined 
                    ? { ...setting, currentValue: savedValue }
                    : setting;
                container.appendChild(createSettingCard(settingWithValue, 'gameUserSettings'));
                currentValues.gameUserSettings[setting.name] = savedValue !== undefined ? savedValue : setting.default;
            });
        }
    }

    // Populate Game.ini sections
    for (const [sectionId, settings] of Object.entries(gameIniSettings)) {
        const container = document.getElementById(sectionId);
        if (container) {
            settings.forEach(setting => {
                // Use saved value or default
                const savedValue = savedGameIni[setting.name];
                const settingWithValue = savedValue !== undefined 
                    ? { ...setting, currentValue: savedValue }
                    : setting;
                container.appendChild(createSettingCard(settingWithValue, 'gameIni'));
                currentValues.gameIni[setting.name] = savedValue !== undefined ? savedValue : setting.default;
            });
        }
    }
}

function createSettingCard(setting, fileType) {
    const card = document.createElement('div');
    card.className = 'setting-card';
    card.dataset.settingName = setting.name.toLowerCase();
    card.dataset.fileType = fileType;

    // Build tooltip content
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';

    const tooltipTitle = document.createElement('div');
    tooltipTitle.className = 'tooltip-title';
    tooltipTitle.textContent = setting.name;
    tooltip.appendChild(tooltipTitle);

    const descSection = document.createElement('div');
    descSection.className = 'tooltip-section';
    const descLabel = document.createElement('div');
    descLabel.className = 'tooltip-label';
    descLabel.textContent = 'What it does';
    const descText = document.createElement('div');
    descText.className = 'tooltip-text';
    descText.textContent = setting.description;
    descSection.appendChild(descLabel);
    descSection.appendChild(descText);
    tooltip.appendChild(descSection);

    const effectSection = document.createElement('div');
    effectSection.className = 'tooltip-section';
    const effectLabel = document.createElement('div');
    effectLabel.className = 'tooltip-label';
    effectLabel.textContent = 'Effect of changing value';
    const effectText = document.createElement('div');
    effectText.className = 'tooltip-text';
    effectText.textContent = getEffectText(setting);
    effectSection.appendChild(effectLabel);
    effectSection.appendChild(effectText);
    tooltip.appendChild(effectSection);

    if (setting.example) {
        const exampleSection = document.createElement('div');
        exampleSection.className = 'tooltip-section';
        const exampleLabel = document.createElement('div');
        exampleLabel.className = 'tooltip-label';
        exampleLabel.textContent = 'Example';
        const exampleText = document.createElement('div');
        exampleText.className = 'tooltip-example';
        exampleText.textContent = setting.example;
        exampleSection.appendChild(exampleLabel);
        exampleSection.appendChild(exampleText);
        tooltip.appendChild(exampleSection);
    }

    if (setting.warning) {
        const warning = document.createElement('div');
        warning.className = 'tooltip-warning';
        warning.textContent = setting.warning;
        tooltip.appendChild(warning);
    }

    const header = document.createElement('div');
    header.className = 'setting-header';

    const name = document.createElement('span');
    name.className = 'setting-name';
    name.textContent = setting.name;

    const defaultBadge = document.createElement('span');
    defaultBadge.className = 'setting-default';
    defaultBadge.textContent = `Default: ${setting.default || '(empty)'}`;

    header.appendChild(name);
    header.appendChild(defaultBadge);

    const description = document.createElement('p');
    description.className = 'setting-description';
    description.textContent = setting.description;

    const inputContainer = document.createElement('div');
    inputContainer.className = 'setting-input-container';

    let input;
    const initialValue = setting.currentValue !== undefined ? setting.currentValue : setting.default;
    const isModified = setting.currentValue !== undefined && setting.currentValue !== setting.default;
    
    if (isModified) {
        card.classList.add('modified');
    }
    
    if (setting.type === 'boolean') {
        const checkboxContainer = document.createElement('div');
        checkboxContainer.className = 'checkbox-container';
        
        input = document.createElement('input');
        input.type = 'checkbox';
        input.className = 'setting-input';
        input.id = `input-${setting.name}`;
        input.checked = initialValue === 'True';
        input.dataset.default = setting.default;
        input.dataset.settingName = setting.name;
        input.dataset.fileType = fileType;

        const label = document.createElement('label');
        label.className = 'checkbox-label';
        label.htmlFor = `input-${setting.name}`;
        label.textContent = input.checked ? 'Enabled' : 'Disabled';

        input.addEventListener('change', (e) => {
            label.textContent = e.target.checked ? 'Enabled' : 'Disabled';
            updateValue(setting.name, e.target.checked ? 'True' : 'False', fileType);
            updateCardModifiedState(card, e.target.checked.toString() !== (setting.default === 'True').toString());
        });

        checkboxContainer.appendChild(input);
        checkboxContainer.appendChild(label);
        inputContainer.appendChild(checkboxContainer);
    } else {
        input = document.createElement('input');
        input.type = setting.type === 'integer' ? 'number' : (setting.type === 'float' ? 'number' : 'text');
        if (setting.type === 'float') {
            input.step = '0.01';
        }
        input.className = 'setting-input';
        input.value = initialValue;
        input.dataset.default = setting.default;
        input.dataset.settingName = setting.name;
        input.dataset.fileType = fileType;
        input.placeholder = `Enter ${setting.type}...`;

        input.addEventListener('input', (e) => {
            updateValue(setting.name, e.target.value, fileType);
            updateCardModifiedState(card, e.target.value !== setting.default);
        });

        // Wrap number inputs with custom styled buttons
        if (setting.type === 'integer' || setting.type === 'float') {
            const wrapper = document.createElement('div');
            wrapper.className = 'number-input-wrapper';
            
            const decrementBtn = document.createElement('button');
            decrementBtn.type = 'button';
            decrementBtn.className = 'number-btn decrement';
            decrementBtn.textContent = '−';
            decrementBtn.title = 'Decrease value';
            decrementBtn.addEventListener('click', () => {
                const step = setting.type === 'float' ? 0.1 : 1;
                const currentVal = parseFloat(input.value) || 0;
                const newVal = setting.type === 'float' 
                    ? (currentVal - step).toFixed(2).replace(/\.?0+$/, '') 
                    : Math.floor(currentVal - step);
                input.value = newVal;
                input.dispatchEvent(new Event('input'));
            });
            
            const incrementBtn = document.createElement('button');
            incrementBtn.type = 'button';
            incrementBtn.className = 'number-btn increment';
            incrementBtn.textContent = '+';
            incrementBtn.title = 'Increase value';
            incrementBtn.addEventListener('click', () => {
                const step = setting.type === 'float' ? 0.1 : 1;
                const currentVal = parseFloat(input.value) || 0;
                const newVal = setting.type === 'float' 
                    ? (currentVal + step).toFixed(2).replace(/\.?0+$/, '') 
                    : Math.floor(currentVal + step);
                input.value = newVal;
                input.dispatchEvent(new Event('input'));
            });
            
            wrapper.appendChild(decrementBtn);
            wrapper.appendChild(input);
            wrapper.appendChild(incrementBtn);
            inputContainer.appendChild(wrapper);
        } else {
            inputContainer.appendChild(input);
        }
    }

    const resetBtn = document.createElement('button');
    resetBtn.className = 'reset-btn';
    resetBtn.textContent = '↺';
    resetBtn.title = 'Reset to default';
    resetBtn.addEventListener('click', () => {
        if (setting.type === 'boolean') {
            input.checked = setting.default === 'True';
            const label = inputContainer.querySelector('.checkbox-label');
            if (label) label.textContent = input.checked ? 'Enabled' : 'Disabled';
        } else {
            input.value = setting.default;
        }
        updateValue(setting.name, setting.default, fileType);
        updateCardModifiedState(card, false);
    });
    inputContainer.appendChild(resetBtn);

    card.appendChild(header);
    card.appendChild(description);
    card.appendChild(tooltip);
    card.appendChild(inputContainer);

    return card;
}

function updateValue(name, value, fileType) {
    if (fileType === 'gameUserSettings') {
        currentValues.gameUserSettings[name] = value;
    } else {
        currentValues.gameIni[name] = value;
    }
    // Save to localStorage on every change
    saveToStorage();
}

function updateCardModifiedState(card, isModified) {
    if (isModified) {
        card.classList.add('modified');
    } else {
        card.classList.remove('modified');
    }
}

function setupTabSwitching() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active from all tabs
            tabButtons.forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

            // Add active to clicked tab
            btn.classList.add('active');
            const tabId = btn.dataset.tab;
            document.getElementById(tabId).classList.add('active');
            
            // Save state
            saveToStorage();
        });
    });
}

function setupSectionToggle() {
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        title.addEventListener('click', () => {
            const targetId = title.dataset.toggle;
            const target = document.getElementById(targetId);
            
            title.classList.toggle('collapsed');
            target.classList.toggle('collapsed');
            
            // Save state
            saveToStorage();
        });
    });
}

function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const cards = document.querySelectorAll('.setting-card');
        
        // Split query into individual words for flexible matching
        const queryWords = query.split(/\s+/).filter(word => word.length > 0);
        
        cards.forEach(card => {
            const settingName = card.dataset.settingName.toLowerCase();
            const description = card.querySelector('.setting-description').textContent.toLowerCase();
            const searchableText = settingName + ' ' + description;
            
            // Match if all query words are found somewhere in the text
            const matches = query === '' || queryWords.every(word => searchableText.includes(word));
            
            if (matches) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });

        // Show sections that have visible cards
        document.querySelectorAll('.settings-grid').forEach(grid => {
            const visibleCards = grid.querySelectorAll('.setting-card:not(.hidden)');
            const section = grid.closest('.settings-section');
            
            if (visibleCards.length === 0) {
                section.classList.add('hidden');
            } else {
                section.classList.remove('hidden');
            }
        });
    });
}

function setupDownloadButtons() {
    document.getElementById('downloadGameUserSettings').addEventListener('click', () => {
        downloadZipFiles(
            [{ name: 'GameUserSettings.ini', content: generateGameUserSettingsIni() }],
            'GameUserSettings.zip'
        );
        showToast('GameUserSettings.zip downloaded - unzip before placing on your server.');
    });

    document.getElementById('downloadGame').addEventListener('click', () => {
        downloadZipFiles(
            [{ name: 'Game.ini', content: generateGameIni() }],
            'Game.zip'
        );
        showToast('Game.zip downloaded - unzip before placing on your server.');
    });

    document.getElementById('downloadBoth').addEventListener('click', () => {
        downloadZipFiles(
            [
                { name: 'GameUserSettings.ini', content: generateGameUserSettingsIni() },
                { name: 'Game.ini', content: generateGameIni() }
            ],
            'ArkServerConfigs.zip'
        );
        showToast('ArkServerConfigs.zip downloaded - unzip before placing on your server.');
    });

    document.getElementById('copyGameUserSettings').addEventListener('click', () => {
        copyToClipboard(generateGameUserSettingsIni(), 'GameUserSettings.ini');
    });

    document.getElementById('copyGame').addEventListener('click', () => {
        copyToClipboard(generateGameIni(), 'Game.ini');
    });
}

function setupUploadButtons() {
    document.getElementById('uploadGameUserSettings').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            readAndParseIniFile(file, 'gameUserSettings');
        }
        e.target.value = ''; // Reset for re-upload
    });

    document.getElementById('uploadGame').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            readAndParseIniFile(file, 'gameIni');
        }
        e.target.value = '';
    });

    document.getElementById('uploadBoth').addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if (file) {
            await parseZipFile(file);
        }
        e.target.value = '';
    });

    document.getElementById('clearImport').addEventListener('click', () => {
        originalFiles.gameUserSettings = null;
        originalFiles.gameIni = null;
        updateImportStatus();
        saveToStorage();
        showToast('Import cleared - will generate fresh files');
    });

    // Setup drag and drop
    setupDragAndDrop();
}

function setupDragAndDrop() {
    const dropZone = document.getElementById('dropZone');
    
    // Prevent default drag behaviors on the whole document
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        document.body.addEventListener(eventName, (e) => {
            e.preventDefault();
            e.stopPropagation();
        });
    });

    // Highlight drop zone when dragging over it
    ['dragenter', 'dragover'].forEach(eventName => {
        dropZone.addEventListener(eventName, () => {
            dropZone.classList.add('drag-over');
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, () => {
            dropZone.classList.remove('drag-over');
        });
    });

    // Handle dropped files
    dropZone.addEventListener('drop', async (e) => {
        const files = e.dataTransfer.files;
        await handleDroppedFiles(files);
    });

    // Also allow clicking the drop zone to open file picker
    dropZone.addEventListener('click', () => {
        // Create a temporary file input that accepts both .ini and .zip
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.ini,.zip';
        input.multiple = true;
        input.onchange = async (e) => {
            await handleDroppedFiles(e.target.files);
        };
        input.click();
    });
}

async function handleDroppedFiles(files) {
    for (const file of files) {
        const fileName = file.name.toLowerCase();
        
        if (fileName.endsWith('.zip')) {
            await parseZipFile(file);
        } else if (fileName.endsWith('.ini')) {
            // Determine file type based on name
            if (fileName.includes('gameusersettings')) {
                readAndParseIniFile(file, 'gameUserSettings');
            } else if (fileName.includes('game')) {
                readAndParseIniFile(file, 'gameIni');
            } else {
                // Ask user or try to detect based on content
                showToast(`Unknown INI file: ${file.name}. Please name it GameUserSettings.ini or Game.ini`);
            }
        } else {
            showToast(`Unsupported file type: ${file.name}`);
        }
    }
}

function updateImportStatus() {
    const statusEl = document.getElementById('importStatus');
    const contentEl = statusEl.querySelector('.import-status-content');
    
    const hasGUS = originalFiles.gameUserSettings !== null;
    const hasGame = originalFiles.gameIni !== null;
    
    if (hasGUS || hasGame) {
        const files = [];
        if (hasGUS) files.push('GameUserSettings.ini');
        if (hasGame) files.push('Game.ini');
        
        contentEl.innerHTML = `
            <strong>📁 Files imported:</strong> ${files.join(', ')}
            <div class="file-list">Downloads will preserve unmanaged settings from your original files</div>
        `;
        statusEl.classList.add('active');
    } else {
        statusEl.classList.remove('active');
    }
}

function readAndParseIniFile(file, fileType) {
    const reader = new FileReader();
    reader.onload = (e) => {
        const content = e.target.result;
        // Store original content
        originalFiles[fileType] = content;
        // Parse and apply settings
        const parsedSettings = parseIniContent(content);
        applyParsedSettings(parsedSettings, fileType);
        updateImportStatus();
        showToast(`${file.name} imported successfully!`);
        saveToStorage();
    };
    reader.onerror = () => {
        showToast(`Failed to read ${file.name}`);
    };
    reader.readAsText(file);
}

async function parseZipFile(file) {
    try {
        const arrayBuffer = await file.arrayBuffer();
        const files = await unzip(new Uint8Array(arrayBuffer));
        
        let foundFiles = 0;
        for (const [filename, content] of Object.entries(files)) {
            const lowerName = filename.toLowerCase();
            if (lowerName.includes('gameusersettings') && lowerName.endsWith('.ini')) {
                originalFiles.gameUserSettings = content;
                const parsedSettings = parseIniContent(content);
                applyParsedSettings(parsedSettings, 'gameUserSettings');
                foundFiles++;
            } else if (lowerName.includes('game') && lowerName.endsWith('.ini') && !lowerName.includes('gameusersettings')) {
                originalFiles.gameIni = content;
                const parsedSettings = parseIniContent(content);
                applyParsedSettings(parsedSettings, 'gameIni');
                foundFiles++;
            }
        }
        
        if (foundFiles > 0) {
            updateImportStatus();
            showToast(`Imported ${foundFiles} file(s) from ZIP!`);
            saveToStorage();
        } else {
            showToast('No valid INI files found in ZIP');
        }
    } catch (err) {
        console.error('ZIP parse error:', err);
        showToast('Failed to parse ZIP file');
    }
}

function parseIniContent(content) {
    const settings = {};
    const lines = content.split(/\r?\n/);
    let currentSection = '';
    
    for (const line of lines) {
        const trimmed = line.trim();
        // Skip empty lines and comments
        if (!trimmed || trimmed.startsWith(';') || trimmed.startsWith('#')) {
            continue;
        }
        
        // Track section headers
        if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
            currentSection = trimmed.slice(1, -1);
            continue;
        }
        
        // Parse key=value pairs
        const eqIndex = trimmed.indexOf('=');
        if (eqIndex > 0) {
            const key = trimmed.substring(0, eqIndex).trim();
            const value = trimmed.substring(eqIndex + 1).trim();
            // Store with section context
            settings[key] = value;
            // Also store section-qualified key for special lookups
            settings[`${currentSection}:${key}`] = value;
        }
    }
    
    return settings;
}

function applyParsedSettings(parsedSettings, fileType) {
    // Build a lookup for settings with their section info
    const settingsLookup = {};
    const allSettings = fileType === 'gameUserSettings' 
        ? Object.values(gameUserSettings).flat()
        : Object.values(gameIniSettings).flat();
    
    for (const setting of allSettings) {
        const section = setting.section || (fileType === 'gameUserSettings' ? 'ServerSettings' : '/script/shootergame.shootergamemode');
        const sectionKey = setting.sectionKey || setting.name;
        settingsLookup[setting.name] = { section, sectionKey };
    }
    
    let appliedCount = 0;
    
    for (const setting of allSettings) {
        const { section, sectionKey } = settingsLookup[setting.name];
        
        // Try section-qualified lookup first, then fallback to key only
        let value = parsedSettings[`${section}:${sectionKey}`];
        if (value === undefined) {
            value = parsedSettings[sectionKey];
        }
        
        if (value !== undefined) {
            const input = document.querySelector(`input[data-setting-name="${setting.name}"][data-file-type="${fileType}"]`);
            if (input) {
                if (input.type === 'checkbox') {
                    input.checked = value === 'True' || value === 'true' || value === '1';
                    const label = input.closest('.checkbox-container')?.querySelector('.checkbox-label');
                    if (label) label.textContent = input.checked ? 'Enabled' : 'Disabled';
                    updateValue(setting.name, input.checked ? 'True' : 'False', fileType);
                } else {
                    input.value = value;
                    updateValue(setting.name, value, fileType);
                }
                
                // Update modified state
                const card = input.closest('.setting-card');
                const defaultValue = input.dataset.default;
                updateCardModifiedState(card, value !== defaultValue);
                appliedCount++;
            }
        }
    }
    
    console.log(`Applied ${appliedCount} managed settings from ${fileType}`);
}

// Simple unzip for reading uploaded ZIPs (store-only, no compression)
async function unzip(data) {
    const files = {};
    const view = new DataView(data.buffer);
    let offset = 0;
    
    while (offset < data.length - 4) {
        const sig = view.getUint32(offset, true);
        if (sig !== 0x04034b50) break; // Local file header signature
        
        const nameLen = view.getUint16(offset + 26, true);
        const extraLen = view.getUint16(offset + 28, true);
        const compSize = view.getUint32(offset + 18, true);
        const filename = new TextDecoder().decode(data.slice(offset + 30, offset + 30 + nameLen));
        
        const dataStart = offset + 30 + nameLen + extraLen;
        const fileData = data.slice(dataStart, dataStart + compSize);
        
        // Only handle store (no compression)
        files[filename] = new TextDecoder().decode(fileData);
        
        offset = dataStart + compSize;
    }
    
    return files;
}

function setupResetButton() {
    document.getElementById('resetAll').addEventListener('click', () => {
        if (confirm('Are you sure you want to reset all settings to their default values?')) {
            const inputs = document.querySelectorAll('.setting-input');
            inputs.forEach(input => {
                const defaultValue = input.dataset.default;
                if (input.type === 'checkbox') {
                    input.checked = defaultValue === 'True';
                    const label = input.closest('.checkbox-container')?.querySelector('.checkbox-label');
                    if (label) label.textContent = input.checked ? 'Enabled' : 'Disabled';
                } else {
                    input.value = defaultValue;
                }
                updateValue(input.dataset.settingName, defaultValue, input.dataset.fileType);
                input.closest('.setting-card').classList.remove('modified');
            });
            
            // Reset preset buttons to 1x
            document.querySelectorAll('.preset-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelector('.preset-btn[data-preset="1x"]').classList.add('active');
            
            // Save state
            saveToStorage();
            
            showToast('All settings reset to defaults!');
        }
    });
}

function setupPresets() {
    const presetButtons = document.querySelectorAll('.preset-btn');
    presetButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const presetKey = btn.dataset.preset;
            applyPreset(presetKey);
            
            // Update active state
            presetButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Save state
            saveToStorage();
        });
    });
}

function applyPreset(presetKey) {
    const preset = presets[presetKey];
    if (!preset) return;

    // Apply each setting in the preset
    for (const [settingName, value] of Object.entries(preset.settings)) {
        // Find the input for this setting
        const input = document.querySelector(`input[data-setting-name="${settingName}"]`);
        if (input) {
            input.value = value;
            
            // Determine file type
            const fileType = input.dataset.fileType;
            updateValue(settingName, value, fileType);
            
            // Update card modified state
            const card = input.closest('.setting-card');
            const defaultValue = input.dataset.default;
            updateCardModifiedState(card, value !== defaultValue);
        }
    }

    showToast(`Applied ${preset.name} preset!`);
}

function setupBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    toggleVisibility();

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function generateGameUserSettingsIni() {
    // Build a map of settings with their section info
    const settingsMeta = {};
    for (const [sectionId, settings] of Object.entries(gameUserSettings)) {
        settings.forEach(setting => {
            settingsMeta[setting.name] = {
                value: currentValues.gameUserSettings[setting.name],
                section: setting.section || 'ServerSettings',
                sectionKey: setting.sectionKey || setting.name
            };
        });
    }

    // If we have an original file, preserve it and only update managed settings
    if (originalFiles.gameUserSettings) {
        return mergeWithOriginalSectioned(originalFiles.gameUserSettings, settingsMeta);
    }

    // Generate fresh file - group by section
    const sections = {};
    for (const [name, meta] of Object.entries(settingsMeta)) {
        if (!sections[meta.section]) {
            sections[meta.section] = [];
        }
        sections[meta.section].push({ key: meta.sectionKey, value: meta.value });
    }

    // Build content with proper section ordering
    let content = '';
    
    // ServerSettings first
    if (sections['ServerSettings']) {
        content += '[ServerSettings]\n';
        sections['ServerSettings'].forEach(s => {
            content += `${s.key}=${s.value}\n`;
        });
        delete sections['ServerSettings'];
    }

    // Then other sections
    for (const [section, settings] of Object.entries(sections)) {
        content += `\n[${section}]\n`;
        settings.forEach(s => {
            content += `${s.key}=${s.value}\n`;
        });
    }

    return content;
}

function generateGameIni() {
    // Get all managed setting names
    const managedSettings = {};
    for (const [sectionId, settings] of Object.entries(gameIniSettings)) {
        settings.forEach(setting => {
            managedSettings[setting.name] = currentValues.gameIni[setting.name];
        });
    }

    // If we have an original file, preserve it and only update managed settings
    if (originalFiles.gameIni) {
        return mergeWithOriginal(originalFiles.gameIni, managedSettings);
    }

    // Generate fresh file
    let content = '[/script/shootergame.shootergamemode]\n';
    for (const [name, value] of Object.entries(managedSettings)) {
        content += `${name}=${value}\n`;
    }

    return content;
}

function mergeWithOriginal(originalContent, managedSettings) {
    const lines = originalContent.split(/\r?\n/);
    const updatedSettings = new Set(); // Track which settings we've updated
    const result = [];
    
    for (const line of lines) {
        const trimmed = line.trim();
        
        // Keep empty lines, comments, and section headers as-is
        if (!trimmed || trimmed.startsWith(';') || trimmed.startsWith('#') || trimmed.startsWith('[')) {
            result.push(line);
            continue;
        }
        
        // Check if this is a key=value pair we manage
        const eqIndex = trimmed.indexOf('=');
        if (eqIndex > 0) {
            const key = trimmed.substring(0, eqIndex).trim();
            
            if (managedSettings.hasOwnProperty(key)) {
                // Replace with our value
                result.push(`${key}=${managedSettings[key]}`);
                updatedSettings.add(key);
            } else {
                // Keep original line (unmanaged setting)
                result.push(line);
            }
        } else {
            // Not a key=value line, keep as-is
            result.push(line);
        }
    }
    
    // Add any managed settings that weren't in the original file
    const missedSettings = Object.entries(managedSettings)
        .filter(([key]) => !updatedSettings.has(key));
    
    if (missedSettings.length > 0) {
        // Find the last section header to add settings under it
        // Or add at the end if no section
        let insertIndex = result.length;
        for (let i = result.length - 1; i >= 0; i--) {
            if (result[i].trim().startsWith('[')) {
                insertIndex = i + 1;
                break;
            }
        }
        
        for (const [key, value] of missedSettings) {
            result.splice(insertIndex, 0, `${key}=${value}`);
            insertIndex++;
        }
    }
    
    return result.join('\n');
}

function mergeWithOriginalSectioned(originalContent, settingsMeta) {
    const lines = originalContent.split(/\r?\n/);
    const updatedSettings = new Set();
    const result = [];
    let currentSection = '';
    
    // Build a lookup by sectionKey for each section
    const sectionKeyLookup = {};
    for (const [name, meta] of Object.entries(settingsMeta)) {
        const section = meta.section;
        const key = meta.sectionKey;
        if (!sectionKeyLookup[section]) {
            sectionKeyLookup[section] = {};
        }
        sectionKeyLookup[section][key] = { name, value: meta.value };
    }
    
    for (const line of lines) {
        const trimmed = line.trim();
        
        // Track section headers
        if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
            currentSection = trimmed.slice(1, -1);
            result.push(line);
            continue;
        }
        
        // Keep empty lines and comments as-is
        if (!trimmed || trimmed.startsWith(';') || trimmed.startsWith('#')) {
            result.push(line);
            continue;
        }
        
        // Check if this is a key=value pair we manage in the current section
        const eqIndex = trimmed.indexOf('=');
        if (eqIndex > 0) {
            const key = trimmed.substring(0, eqIndex).trim();
            
            // Check if this key in this section is one we manage
            if (sectionKeyLookup[currentSection] && sectionKeyLookup[currentSection][key]) {
                const meta = sectionKeyLookup[currentSection][key];
                result.push(`${key}=${meta.value}`);
                updatedSettings.add(meta.name);
            } else {
                // Keep original line (unmanaged setting)
                result.push(line);
            }
        } else {
            result.push(line);
        }
    }
    
    // Add any managed settings that weren't in the original file
    // Group by section
    const missedBySection = {};
    for (const [name, meta] of Object.entries(settingsMeta)) {
        if (!updatedSettings.has(name)) {
            if (!missedBySection[meta.section]) {
                missedBySection[meta.section] = [];
            }
            missedBySection[meta.section].push({ key: meta.sectionKey, value: meta.value });
        }
    }
    
    // Find or create sections for missed settings
    for (const [section, settings] of Object.entries(missedBySection)) {
        // Check if section exists in result
        const sectionHeader = `[${section}]`;
        let sectionIndex = result.findIndex(line => line.trim() === sectionHeader);
        
        if (sectionIndex === -1) {
            // Section doesn't exist, add it at the end
            result.push('');
            result.push(sectionHeader);
            for (const s of settings) {
                result.push(`${s.key}=${s.value}`);
            }
        } else {
            // Section exists, find where to insert (after section header, before next section)
            let insertIndex = sectionIndex + 1;
            while (insertIndex < result.length) {
                const line = result[insertIndex].trim();
                if (line.startsWith('[') && line.endsWith(']')) {
                    break;
                }
                insertIndex++;
            }
            // Insert before the next section or at end of file
            for (let i = settings.length - 1; i >= 0; i--) {
                result.splice(insertIndex, 0, `${settings[i].key}=${settings[i].value}`);
            }
        }
    }
    
    return result.join('\n');
}

function downloadZipFiles(files, zipName) {
    const zipBytes = createZip(files);
    const blob = new Blob([zipBytes], { type: 'application/zip' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = zipName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Revoke object URL after a tick to avoid memory leaks
    setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function copyToClipboard(text, label) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text)
            .then(() => showToast(`${label} copied to clipboard`))
            .catch(() => fallbackCopy(text, label));
    } else {
        fallbackCopy(text, label);
    }
}

function fallbackCopy(text, label) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand('copy');
        showToast(`${label} copied to clipboard`);
    } catch (e) {
        showToast(`Copy failed for ${label}`);
    }
    document.body.removeChild(textarea);
}

// Legacy helper removed in favor of downloadZipFiles

function createZip(files) {
    // Minimal ZIP (no compression, store only)
    const encoder = new TextEncoder();
    const chunks = [];
    const centralDir = [];
    let offset = 0;
    const now = new Date();
    const dosTime = toDosTime(now);
    const dosDate = toDosDate(now);

    files.forEach(file => {
        const data = encoder.encode(file.content);
        const crc = crc32(data);
        const nameBytes = encoder.encode(file.name);

        const localHeader = new Uint8Array(30 + nameBytes.length);
        const dv = new DataView(localHeader.buffer);
        dv.setUint32(0, 0x04034b50, true); // local file header signature
        dv.setUint16(4, 20, true); // version needed
        dv.setUint16(6, 0, true); // general purpose bit flag
        dv.setUint16(8, 0, true); // compression = 0 (store)
        dv.setUint16(10, dosTime, true);
        dv.setUint16(12, dosDate, true);
        dv.setUint32(14, crc >>> 0, true);
        dv.setUint32(18, data.length, true); // compressed size
        dv.setUint32(22, data.length, true); // uncompressed size
        dv.setUint16(26, nameBytes.length, true);
        dv.setUint16(28, 0, true); // extra length
        localHeader.set(nameBytes, 30);

        chunks.push(localHeader, data);

        const central = new Uint8Array(46 + nameBytes.length);
        const cdv = new DataView(central.buffer);
        cdv.setUint32(0, 0x02014b50, true); // central file header signature
        cdv.setUint16(4, 20, true); // version made by
        cdv.setUint16(6, 20, true); // version needed
        cdv.setUint16(8, 0, true); // flags
        cdv.setUint16(10, 0, true); // compression
        cdv.setUint16(12, dosTime, true);
        cdv.setUint16(14, dosDate, true);
        cdv.setUint32(16, crc >>> 0, true);
        cdv.setUint32(20, data.length, true);
        cdv.setUint32(24, data.length, true);
        cdv.setUint16(28, nameBytes.length, true);
        cdv.setUint16(30, 0, true); // extra
        cdv.setUint16(32, 0, true); // comment
        cdv.setUint16(34, 0, true); // disk number start
        cdv.setUint16(36, 0, true); // internal attrs
        cdv.setUint32(38, 0, true); // external attrs
        cdv.setUint32(42, offset, true); // relative offset
        central.set(nameBytes, 46);

        centralDir.push(central);

        offset += localHeader.length + data.length;
    });

    const centralDirSize = centralDir.reduce((sum, c) => sum + c.length, 0);
    const centralDirOffset = offset;

    const end = new Uint8Array(22);
    const edv = new DataView(end.buffer);
    edv.setUint32(0, 0x06054b50, true); // end of central dir signature
    edv.setUint16(4, 0, true); // disk number
    edv.setUint16(6, 0, true); // disk where central dir starts
    edv.setUint16(8, files.length, true); // entries on this disk
    edv.setUint16(10, files.length, true); // total entries
    edv.setUint32(12, centralDirSize, true);
    edv.setUint32(16, centralDirOffset, true);
    edv.setUint16(20, 0, true); // comment length

    const totalSize = offset + centralDirSize + end.length;
    const out = new Uint8Array(totalSize);
    let pos = 0;
    chunks.forEach(c => { out.set(c, pos); pos += c.length; });
    centralDir.forEach(c => { out.set(c, pos); pos += c.length; });
    out.set(end, pos);

    return out;
}

function crc32(bytes) {
    let crc = ~0;
    for (let i = 0; i < bytes.length; i++) {
        crc ^= bytes[i];
        for (let j = 0; j < 8; j++) {
            crc = (crc >>> 1) ^ (0xEDB88320 & -(crc & 1));
        }
    }
    return ~crc >>> 0;
}

function toDosTime(date) {
    return (date.getHours() << 11) | (date.getMinutes() << 5) | (date.getSeconds() / 2 | 0);
}

function toDosDate(date) {
    return ((date.getFullYear() - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate();
}

function uint8ToBase64(bytes) {
    let binary = '';
    for (let i = 0; i < bytes.length; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
}

function showToast(message) {
    // Remove existing toast if any
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 10);

    // Remove after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
