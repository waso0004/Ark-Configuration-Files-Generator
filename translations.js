// Translation system for ARK Configuration Generator
// Uses navigator.language for non-invasive language detection

const translations = {
    en: {
        // Page title
        pageTitle: 'ARK: Survival Ascended - Server Config Generator',
        
        // Header
        headerTitle: '🦖 ARK: Survival Ascended',
        headerSubtitle: 'Server Configuration Generator',
        
        // Loading
        loadingText: 'Loading settings...',
        
        // Presets section
        presetsTitle: '📋 Official Server Rate Presets',
        preset1xName: '1x Default',
        preset1xDesc: 'Official rates',
        preset2xName: '2x Rates',
        preset2xDesc: 'Evolution Event',
        preset3xName: '3x Rates',
        preset3xDesc: 'Boosted',
        preset4xName: '4.5x / 4x Rates',
        preset4xDesc: 'Smalltribes',
        preset5xName: '5x Rates',
        preset5xDesc: 'Arkpocalypse',
        
        // Export section
        exportTitle: '📤 Export Configuration',
        bothFiles: 'Both Files',
        downloadZip: 'Download ZIP',
        download: 'Download',
        copy: 'Copy',
        
        // Import section
        importTitle: '📥 Import Configuration',
        dropZoneText: 'Drag & drop your INI files here',
        dropZoneSubtext: 'Drop both files at once, or a ZIP • Click to browse',
        uploadZip: 'Upload ZIP',
        upload: 'Upload',
        clearImport: '✕ Clear',
        
        // Controls
        autoSaved: 'Auto-saved',
        saving: 'Saving...',
        saved: '✓ Saved',
        resetToDefaults: '↺ Reset to Defaults',
        searchPlaceholder: 'Search settings...',
        
        // Section titles (GameUserSettings.ini)
        sectionBasic: '🖥️ ARK Server Core',
        sectionAdmin: '🔐 Admin Controls',
        sectionChat: '💬 Survivor Communications',
        sectionGameplay: '🎮 Survival Rules',
        sectionRates: '📈 ARK Multipliers',
        sectionPlayer: '👤 Survivor Settings',
        sectionDino: '🦕 Creature Settings',
        sectionStructure: '🏠 Base Building',
        sectionPvP: '⚔️ Tribal Warfare',
        sectionBlueprints: '📜 Blueprints & Loot Crates',
        sectionCryopod: '🧊 Cryopod Storage',
        sectionTameLimit: '📊 Tame Population',
        sectionCreatures: '🐾 Creature Behavior',
        sectionCosmetics: '🎨 Skins & Mods',
        sectionPvPSpecific: '⚔️ Raid Settings',
        sectionEnvironment: '🌍 ARK World',
        sectionRagnarok: '🌋 Ragnarok ARK',
        sectionValguero: '🏔️ Valguero ARK',
        sectionFjordur: '❄️ Fjordur ARK',
        sectionGenesis: '🌐 Genesis Simulation',
        sectionAberration: '🌌 Aberration ARK',
        sectionExtinction: '🌍 Extinction ARK',
        sectionLostColony: '🚀 Lost Colony ARK',
        
        // Section titles (Lost Colony subsections)
        sectionLCBunker: '🏰 Tek Bunker',
        sectionLCCryoHospital: '❄️ CryoHospital Station',
        sectionLCBloodforge: '🩸 Bloodforge Altar',
        sectionLCOutpost: '🏕️ Forward Outpost',
        sectionLCCreatures: '🦎 LC Creatures',
        
        // Section titles (Basic Server subsections)
        sectionServerIdentity: '🏷️ Server Identity',
        sectionServerPorts: '🔌 Ports & RCON',
        sectionServerMessages: '💾 MOTD & Auto-Save',
        sectionServerMods: '🧩 Mods & Overrides',
        
        // Section titles (Admin subsections)
        sectionAdminLists: '📋 Whitelist & Bans',
        sectionAdminSecurity: '🛡️ Anti-Cheat & Kicks',
        sectionAdminPerformance: '⚡ Server Performance',
        
        // Section titles (Chat subsections)
        sectionChatVoice: '🔊 Proximity Voice',
        sectionChatFiltering: '🔇 Global Chat Filter',
        sectionChatLogging: '📝 Chat History',
        
        // Section titles (Gameplay subsections)
        sectionGameplayCamera: '📷 Third Person & HUD',
        sectionGameplayRules: '📜 Game Rules',
        sectionGameplayTransfers: '🔄 Misc & Transfers',
        
        // Section titles (Dino subsections)
        sectionDinoDamage: '💥 Creature Combat',
        sectionDinoFoodStamina: '🍖 Creature Hunger',
        sectionDinoSpawns: '🥚 Wild Spawns',
        sectionDinoSpecial: '🦅 Flyers & Titans',
        
        // Section titles (Structure subsections)
        sectionStructurePickup: '✋ Structure Pickup',
        sectionStructureDamage: '🔨 Raid Damage',
        sectionStructureDecay: '⏳ Auto-Decay',
        sectionStructurePlatforms: '🎪 Platform Saddles',
        sectionStructureDensity: '📊 Building Limits',
        
        // Section titles (PvP subsections)
        sectionPvPModes: '🎯 PvP/PvE Mode',
        sectionPvPOffline: '🛏️ Offline Raid Protection',
        sectionPvPDecay: '🕐 ORP Decay',
        sectionPvPCombat: '🗡️ Combat Rules',
        sectionPvPTransfers: '🌐 Cross-ARK Transfer',
        sectionPvPTribes: '👥 Tribe Settings',
        
        // Section titles (Rates & Multipliers subsections)
        sectionRatesDifficulty: '⚙️ Difficulty & Max Wild Level',
        sectionRatesTaming: '🦖 Taming Speed',
        sectionRatesHarvesting: '⛏️ Harvest Amount',
        sectionRatesStacking: '📦 Stack Sizes & Weight',
        
        // Section titles (Player Settings subsections)
        sectionPlayerDamage: '💥 Survivor Combat',
        sectionPlayerSurvival: '🍖 Hunger & Thirst',
        sectionPlayerRecovery: '💚 Regeneration',
        sectionPlayerDisease: '🦠 Swamp Fever & Hazards',
        
        // Section titles (Cryopod subsections)
        sectionCryopodDeployment: '📤 Cryo Deploy',
        sectionCryopodSickness: '🤢 Cryo Cooldown',
        sectionCryopodNerf: '⚠️ Cryo Restrictions',
        
        // Section titles (Environment & World subsections)
        sectionEnvironmentDayNight: '🌅 Day/Night Cycle',
        sectionEnvironmentWeather: '🌤️ Weather & Events',
        sectionEnvironmentItems: '📦 Spoil Timers',
        sectionEnvironmentTransfers: '🔄 Transfer Uploads',
        sectionEnvironmentAdmin: '🛡️ Admin & Events',
        
        // Section titles (Stats Multipliers subsections)
        sectionStatsPlayer: '🧑 Survivor Stats',
        sectionStatsTamed: '🦖 Tamed Per Level',
        sectionStatsTamedAdd: '✨ Post-Tame Bonus',
        sectionStatsTamedAffinity: '💯 Taming Effectiveness',
        sectionStatsWild: '🌿 Wild Creature Stats',
        
        // Section titles (Turrets & Generators subsections)
        sectionTurretsLimits: '🎯 Auto Turret Limit',
        sectionTurretsGenerators: '⚡ Generator Limits',
        sectionTurretsPower: '🔋 Battery & Fuel',
        
        // Section titles (Genesis subsections)
        sectionGenesisMissions: '🎯 HLNA Missions',
        sectionGenesisStore: '💎 Hexagon Exchange',
        sectionGenesisWorld: '🌍 Simulation Effects',
        
        // Section titles (Breeding subsections)
        sectionBreedingMating: '💕 Mating Interval',
        sectionBreedingEggs: '🥚 Incubation & Gestation',
        sectionBreedingFarming: '🌾 Crop Plots & Farming',
        sectionBreedingBabies: '🍼 Maturation Speed',
        sectionBreedingImprinting: '🤗 Imprint Bonus',
        
        // Section titles (Taming subsections)
        sectionTamingBasics: '⚙️ Taming Core',
        sectionTamingFoodTorpor: '🍖 Food & Torpor',
        sectionTamingDamageLimits: '⚔️ Dino Damage & Breeding',
        
        // Section titles (Player subsections)
        sectionPlayerLeveling: '📈 Leveling & Stats',
        sectionPlayerFeatures: '🎮 Survivor Features',
        
        // Section titles (Tribe subsections)
        sectionTribeManagement: '📋 Tribe Management',
        sectionTribeWarfare: '⚔️ Tribe Wars & Friendly Fire',
        
        // Section titles (Crafting subsections)
        sectionCraftingSkills: '🎯 Crafting Speed',
        sectionCraftingEngrams: '📜 Engram Points',
        
        // Section titles (Loot subsections)
        sectionLootQuality: '💎 Supply Drop Quality',
        sectionLootResources: '🌲 Resource Nodes',
        
        // Section titles (Structures subsections - Game.ini)
        sectionStructuresPlacement: '📐 Placement Rules',
        sectionStructuresDamageDecay: '🔨 Damage & Decay',
        
        // Section titles (PvP subsections - Game.ini)
        sectionPvPTimers: '⏰ PvE/PvP Timers',
        sectionPvPRespawn: '🔄 Respawn Settings',
        
        // Section titles (Game.ini)
        sectionGameTaming: '🦖 Taming Mechanics',
        sectionGamePlayer: '🧑 Survivor Progression',
        sectionGameTribe: '👥 Tribe System',
        sectionGameCrafting: '🔨 Engrams & Crafting',
        sectionGameLoot: '🎁 Supply Drops & Nodes',
        sectionGameStructures: '🏠 Building & Bases',
        sectionGameTurrets: '🔫 Defense Systems',
        sectionGamePvP: '⚔️ Raid Mechanics',
        sectionGameGenesis: '🌐 Genesis Simulation',
        sectionGameEnvironment: '🌡️ ARK Environment',
        sectionGameAdvanced: '⚙️ Expert Settings',
        sectionBreeding: '🥚 Breeding & Mutations',
        sectionSpoiling: '🍖 Spoil & Decompose',
        sectionTower: '🗼 Tribe Tower Defense',
        sectionMemorial: '🏛️ Survivor Memorial',
        sectionStats: '📊 Stat Multipliers',
        sectionXP: '⭐ XP & Leveling',
        sectionWorld: '🌍 World Rules',
        sectionResources: '💎 Resource Spawns',
        sectionHarvesting: '🪓 Gather Rates',
        sectionGamePlatform: '🚢 Rafts & Platforms',
        sectionGameMissions: '🎯 HLNA Missions',
        sectionGameTribelog: '📜 Tribe Log Events',
        
        // Setting card
        defaultLabel: 'Default:',
        enabled: 'Enabled',
        disabled: 'Disabled',
        
        // Dialogs
        resetConfirmTitle: 'Reset All Settings',
        resetConfirmMessage: 'Are you sure you want to reset all settings to their default values? This cannot be undone.',
        resetConfirmYes: 'Yes, Reset All',
        resetConfirmNo: 'Cancel',
        
        // Notifications
        copiedToClipboard: 'Copied to clipboard!',
        importSuccess: 'Configuration imported successfully!',
        importError: 'Error importing configuration',
        
        // Tooltip labels
        tooltipDescription: 'What it does',
        tooltipEffect: 'Effect of changing value',
        tooltipExample: 'Example',
        tooltipSource: 'Source:',
        
        // Guide card
        guideTitle: '📖 Welcome! Here\'s How to Get Started',
        guideStep1Title: '1. Find and Customize Your Settings',
        guideStep1Text: 'Scroll through the organized sections below to find the settings you want to tweak. Looking for something specific? Use the search bar at the top - it\'s super fast! When you hover over any setting, you\'ll see a helpful tooltip explaining exactly what it does and how different values affect your game.',
        guideStep2Title: '2. Try Quick Presets (Optional)',
        guideStep2Text: 'Want to quickly match official server rates? Click one of the preset buttons above! Choose from Default (1x), Evolution Event (2x), Smalltribes (4.5x/4x), or Arkpocalypse (5x) rates. These give you a great starting point, and you can still fine-tune any individual settings afterward.',
        guideStep3Title: '3. Export Your Configuration Files',
        guideStep3Text: 'Once you\'re happy with your settings, it\'s time to save them! Hit the "Download ZIP" button to get both GameUserSettings.ini and Game.ini in one package. Prefer to copy-paste? Use the individual copy buttons to grab each file\'s contents directly.',
        guideStep4Title: '4. Install on Your Server',
        guideStep4Text: 'For self-hosted servers, drop the downloaded files into your server\'s config folder (paths shown below). Using Nitrado, G-Portal, or another hosting provider? Simply copy and paste the settings into their web-based configuration panel - it\'s that easy!',
        guideTip: '💡 Pro Tip: Don\'t worry about losing your work - all your settings are automatically saved in your browser! You can close this page and come back later. Already have config files? Use the Import feature to load them and make quick edits.',
        guidePathSinglePlayer: '📁 Single Player Path:',
        guidePathDedicated: '📁 Dedicated Server Path:',
        guideClose: 'Let\'s Go!',
        guideDontShow: 'Don\'t show this again',
        
        // Language selector
        languageLabel: '🌐',
    },
    
    es: {
        // Page title
        pageTitle: 'ARK: Survival Ascended - Generador de Configuración',
        
        // Header
        headerTitle: '🦖 ARK: Survival Ascended',
        headerSubtitle: 'Generador de Configuración del Servidor',
        
        // Loading
        loadingText: 'Cargando ajustes...',
        
        // Presets section
        presetsTitle: '📋 Preajustes Oficiales del Servidor',
        preset1xName: '1x Por Defecto',
        preset1xDesc: 'Tasas oficiales',
        preset2xName: '2x Tasas',
        preset2xDesc: 'Evento Evolución',
        preset3xName: '3x Tasas',
        preset3xDesc: 'Aumentado',
        preset4xName: '4.5x / 4x Tasas',
        preset4xDesc: 'Smalltribes',
        preset5xName: '5x Tasas',
        preset5xDesc: 'Arkpocalypse',
        
        // Export section
        exportTitle: '📤 Exportar Configuración',
        bothFiles: 'Ambos Archivos',
        downloadZip: 'Descargar ZIP',
        download: 'Descargar',
        copy: 'Copiar',
        
        // Import section
        importTitle: '📥 Importar Configuración',
        dropZoneText: 'Arrastra y suelta tus archivos INI aquí',
        dropZoneSubtext: 'Suelta ambos archivos a la vez, o un ZIP • Haz clic para explorar',
        uploadZip: 'Subir ZIP',
        upload: 'Subir',
        clearImport: '✕ Limpiar',
        
        // Controls
        autoSaved: 'Guardado auto',
        saving: 'Guardando...',
        saved: '✓ Guardado',
        resetToDefaults: '↺ Restablecer',
        searchPlaceholder: 'Buscar ajustes...',
        
        // Section titles (GameUserSettings.ini)
        sectionBasic: '🖥️ Núcleo del Servidor ARK',
        sectionAdmin: '🔐 Controles de Admin',
        sectionChat: '💬 Comunicación de Supervivientes',
        sectionGameplay: '🎮 Reglas de Supervivencia',
        sectionRates: '📈 Multiplicadores ARK',
        sectionPlayer: '👤 Ajustes de Superviviente',
        sectionDino: '🦕 Ajustes de Criaturas',
        sectionStructure: '🏠 Construcción de Bases',
        sectionPvP: '⚔️ Guerra Tribal',
        sectionBlueprints: '📜 Planos y Cajas de Suministros',
        sectionCryopod: '🧊 Almacenamiento Cryopod',
        sectionTameLimit: '📊 Población de Domesticados',
        sectionCreatures: '🐾 Comportamiento de Criaturas',
        sectionCosmetics: '🎨 Skins y Mods',
        sectionPvPSpecific: '⚔️ Ajustes de Incursión',
        sectionEnvironment: '🌍 Mundo ARK',
        sectionRagnarok: '🌋 ARK Ragnarok',
        sectionValguero: '🏔️ ARK Valguero',
        sectionFjordur: '❄️ ARK Fjordur',
        sectionGenesis: '🌐 Simulación Genesis',
        sectionAberration: '🌌 ARK Aberration',
        sectionExtinction: '🌍 ARK Extinction',
        sectionLostColony: '🚀 ARK Lost Colony',
        
        // Section titles (Lost Colony subsections)
        sectionLCBunker: '🏰 Búnker Tek',
        sectionLCCryoHospital: '❄️ Estación CryoHospital',
        sectionLCBloodforge: '🩸 Altar Bloodforge',
        sectionLCOutpost: '🏕️ Puesto Avanzado',
        sectionLCCreatures: '🦎 Criaturas LC',
        
        // Section titles (Basic Server subsections)
        sectionServerIdentity: '🏷️ Identidad del Servidor',
        sectionServerPorts: '🔌 Conexión y RCON',
        sectionServerMessages: '💾 MOTD y Auto-Guardado',
        sectionServerMods: '🧩 Mods y Anulaciones',
        
        // Section titles (Admin subsections)
        sectionAdminLists: '📋 Lista Blanca y Bans',
        sectionAdminSecurity: '🛡️ Anti-Trampas y Expulsiones',
        sectionAdminPerformance: '⚡ Rendimiento del Servidor',
        
        // Section titles (Chat subsections)
        sectionChatVoice: '🔊 Voz de Proximidad',
        sectionChatFiltering: '🔇 Filtro de Chat Global',
        sectionChatLogging: '📝 Historial de Chat',
        
        // Section titles (Gameplay subsections)
        sectionGameplayCamera: '📷 Tercera Persona y HUD',
        sectionGameplayRules: '📜 Reglas del Juego',
        sectionGameplayTransfers: '🔄 Varios y Transferencias',
        
        // Section titles (Dino subsections)
        sectionDinoDamage: '💥 Combate de Criaturas',
        sectionDinoFoodStamina: '🍖 Hambre de Criaturas',
        sectionDinoSpawns: '🥚 Apariciones Salvajes',
        sectionDinoSpecial: '🦅 Voladores y Titanes',
        
        // Section titles (Structure subsections)
        sectionStructurePickup: '✋ Recogida de Estructuras',
        sectionStructureDamage: '🔨 Daño de Incursión',
        sectionStructureDecay: '⏳ Auto-Deterioro',
        sectionStructurePlatforms: '🎪 Monturas Plataforma',
        sectionStructureDensity: '📊 Límites de Construcción',
        
        // Section titles (PvP subsections)
        sectionPvPModes: '🎯 Modo PvP/PvE',
        sectionPvPOffline: '🛏️ Protección Raid Offline',
        sectionPvPDecay: '🕐 Deterioro ORP',
        sectionPvPCombat: '🗡️ Reglas de Combate',
        sectionPvPTransfers: '🌐 Viaje Cross-ARK',
        sectionPvPTribes: '👥 Ajustes de Tribu',
        
        // Section titles (Rates & Multipliers subsections)
        sectionRatesDifficulty: '⚙️ Dificultad y Nivel Máximo Salvaje',
        sectionRatesTaming: '🦖 Velocidad de Domesticación',
        sectionRatesHarvesting: '⛏️ Cantidad de Recolección',
        sectionRatesStacking: '📦 Tamaño de Pilas y Peso',
        
        // Section titles (Player Settings subsections)
        sectionPlayerDamage: '💥 Combate de Superviviente',
        sectionPlayerSurvival: '🍖 Hambre y Sed',
        sectionPlayerRecovery: '💚 Regeneración',
        sectionPlayerDisease: '🦠 Fiebre del Pantano y Peligros',
        
        // Section titles (Cryopod subsections)
        sectionCryopodDeployment: '📤 Despliegue Cryo',
        sectionCryopodSickness: '🤢 Enfriamiento Cryo',
        sectionCryopodNerf: '⚠️ Restricciones Cryo',
        
        // Section titles (Environment & World subsections)
        sectionEnvironmentDayNight: '🌅 Ciclo Día/Noche',
        sectionEnvironmentWeather: '🌤️ Clima y Eventos',
        sectionEnvironmentItems: '📦 Temporizadores de Deterioro',
        sectionEnvironmentTransfers: '🔄 Descargas de Obelisco',
        sectionEnvironmentAdmin: '🛡️ Admin y Eventos',
        
        // Section titles (Stats Multipliers subsections)
        sectionStatsPlayer: '🧑 Estadísticas de Superviviente',
        sectionStatsTamed: '🦖 Domesticado Por Nivel',
        sectionStatsTamedAdd: '✨ Bonus Post-Domesticación',
        sectionStatsTamedAffinity: '💯 Efectividad de Domesticación',
        sectionStatsWild: '🌿 Estadísticas de Criaturas Salvajes',
        
        // Section titles (Turrets & Generators subsections)
        sectionTurretsLimits: '🎯 Límite de Auto Torretas',
        sectionTurretsGenerators: '⚡ Límites de Generador',
        sectionTurretsPower: '🔋 Batería y Combustible',
        
        // Section titles (Genesis subsections)
        sectionGenesisMissions: '🎯 Misiones HLNA',
        sectionGenesisStore: '💎 Intercambio de Hexágonos',
        sectionGenesisWorld: '🌍 Efectos de Simulación',
        
        // Section titles (Breeding subsections)
        sectionBreedingMating: '💕 Intervalo de Apareamiento',
        sectionBreedingEggs: '🥚 Incubación y Gestación',
        sectionBreedingFarming: '🌾 Parcelas y Granja',
        sectionBreedingBabies: '🍼 Velocidad de Maduración',
        sectionBreedingImprinting: '🤗 Bonus de Impronta',
        
        // Section titles (Taming subsections)
        sectionTamingBasics: '⚙️ Núcleo de Domesticación',
        sectionTamingFoodTorpor: '🍖 Comida y Torpor',
        sectionTamingDamageLimits: '⚔️ Daño de Dino y Cría',
        
        // Section titles (Player subsections)
        sectionPlayerLeveling: '📈 Subida de Nivel y Stats',
        sectionPlayerFeatures: '🎮 Funciones de Superviviente',
        
        // Section titles (Tribe subsections)
        sectionTribeManagement: '📋 Gestión de Tribu',
        sectionTribeWarfare: '⚔️ Guerras y Fuego Amigo',
        
        // Section titles (Crafting subsections)
        sectionCraftingSkills: '🎯 Velocidad de Fabricación',
        sectionCraftingEngrams: '📜 Puntos de Engrama',
        
        // Section titles (Loot subsections)
        sectionLootQuality: '💎 Calidad de Suministros',
        sectionLootResources: '🌲 Nodos de Recursos',
        
        // Section titles (Structures subsections - Game.ini)
        sectionStructuresPlacement: '📐 Reglas de Colocación',
        sectionStructuresDamageDecay: '🔨 Daño y Deterioro',
        
        // Section titles (PvP subsections - Game.ini)
        sectionPvPTimers: '⏰ Temporizadores PvE/PvP',
        sectionPvPRespawn: '🔄 Ajustes de Reaparición',
        
        // Section titles (Game.ini)
        sectionGameTaming: '🦖 Mecánicas de Domesticación',
        sectionGamePlayer: '🧑 Progresión de Superviviente',
        sectionGameTribe: '👥 Sistema de Tribus',
        sectionGameCrafting: '🔨 Engramas y Fabricación',
        sectionGameLoot: '🎁 Suministros y Nodos',
        sectionGameStructures: '🏠 Construcción de Bases',
        sectionGameTurrets: '🔫 Sistemas de Defensa',
        sectionGamePvP: '⚔️ Mecánicas de Incursión',
        sectionGameGenesis: '🌐 Simulación Genesis',
        sectionGameEnvironment: '🌡️ Entorno ARK',
        sectionGameAdvanced: '⚙️ Ajustes Expertos',
        sectionBreeding: '🥚 Cría y Mutaciones',
        sectionSpoiling: '🍖 Deterioro y Descomposición',
        sectionTower: '🗼 Defensa Torre de Tribu',
        sectionMemorial: '🏛️ Memorial de Superviviente',
        sectionStats: '📊 Multiplicadores de Stats',
        sectionXP: '⭐ XP y Subida de Nivel',
        sectionWorld: '🌍 Reglas del Mundo',
        sectionResources: '💎 Aparición de Recursos',
        sectionHarvesting: '🪓 Tasas de Recolección',
        sectionGamePlatform: '🚢 Balsas y Plataformas',
        sectionGameMissions: '🎯 Misiones HLNA',
        sectionGameTribelog: '📜 Eventos del Registro de Tribu',
        
        // Setting card
        defaultLabel: 'Por defecto:',
        enabled: 'Activado',
        disabled: 'Desactivado',
        
        // Dialogs
        resetConfirmTitle: 'Restablecer Todos los Ajustes',
        resetConfirmMessage: '¿Estás seguro de que quieres restablecer todos los ajustes a sus valores por defecto? Esto no se puede deshacer.',
        resetConfirmYes: 'Sí, Restablecer Todo',
        resetConfirmNo: 'Cancelar',
        
        // Notifications
        copiedToClipboard: '¡Copiado al portapapeles!',
        importSuccess: '¡Configuración importada correctamente!',
        importError: 'Error al importar la configuración',
        
        // Tooltip labels
        tooltipDescription: 'Qué hace',
        tooltipEffect: 'Efecto al cambiar el valor',
        tooltipExample: 'Ejemplo',
        tooltipSource: 'Fuente:',
        
        // Guide card
        guideTitle: '📖 ¡Bienvenido! Aquí te explicamos cómo empezar',
        guideStep1Title: '1. Encuentra y personaliza tus ajustes',
        guideStep1Text: 'Explora las secciones organizadas a continuación para encontrar los ajustes que quieras modificar. ¿Buscas algo específico? ¡Usa la barra de búsqueda de arriba, es muy rápida! Cuando pases el cursor sobre cualquier ajuste, verás una descripción útil que explica exactamente qué hace y cómo los diferentes valores afectan tu juego.',
        guideStep2Title: '2. Prueba los preajustes rápidos (Opcional)',
        guideStep2Text: '¿Quieres igualar rápidamente las tasas de los servidores oficiales? ¡Haz clic en uno de los botones de preajuste de arriba! Elige entre Por Defecto (1x), Evento Evolución (2x), Smalltribes (4.5x/4x) o Arkpocalypse (5x). Estos te dan un excelente punto de partida, y aún puedes ajustar cualquier configuración individual después.',
        guideStep3Title: '3. Exporta tus archivos de configuración',
        guideStep3Text: 'Una vez que estés satisfecho con tus ajustes, ¡es hora de guardarlos! Haz clic en "Descargar ZIP" para obtener GameUserSettings.ini y Game.ini en un solo paquete. ¿Prefieres copiar y pegar? Usa los botones de copia individuales para obtener el contenido de cada archivo directamente.',
        guideStep4Title: '4. Instala en tu servidor',
        guideStep4Text: 'Para servidores propios, coloca los archivos descargados en la carpeta de configuración de tu servidor (rutas mostradas abajo). ¿Usas Nitrado, G-Portal u otro proveedor de hosting? Simplemente copia y pega los ajustes en su panel de configuración web - ¡así de fácil!',
        guideTip: '💡 Consejo Pro: ¡No te preocupes por perder tu trabajo - todos tus ajustes se guardan automáticamente en tu navegador! Puedes cerrar esta página y volver más tarde. ¿Ya tienes archivos de configuración? Usa la función Importar para cargarlos y hacer ediciones rápidas.',
        guidePathSinglePlayer: '📁 Ruta Jugador Único:',
        guidePathDedicated: '📁 Ruta Servidor Dedicado:',
        guideClose: '¡Vamos!',
        guideDontShow: 'No mostrar esto de nuevo',
        
        // Language selector
        languageLabel: '🌐',
    },
    
    fr: {
        // Page title
        pageTitle: 'ARK: Survival Ascended - Générateur de Configuration',
        
        // Header
        headerTitle: '🦖 ARK: Survival Ascended',
        headerSubtitle: 'Générateur de Configuration Serveur',
        
        // Loading
        loadingText: 'Chargement des paramètres...',
        
        // Presets section
        presetsTitle: '📋 Préréglages Officiels du Serveur',
        preset1xName: '1x Par Défaut',
        preset1xDesc: 'Taux officiels',
        preset2xName: '2x Taux',
        preset2xDesc: 'Événement Évolution',
        preset3xName: '3x Taux',
        preset3xDesc: 'Boosté',
        preset4xName: '4.5x / 4x Taux',
        preset4xDesc: 'Smalltribes',
        preset5xName: '5x Taux',
        preset5xDesc: 'Arkpocalypse',
        
        // Export section
        exportTitle: '📤 Exporter la Configuration',
        bothFiles: 'Les Deux Fichiers',
        downloadZip: 'Télécharger ZIP',
        download: 'Télécharger',
        copy: 'Copier',
        
        // Import section
        importTitle: '📥 Importer la Configuration',
        dropZoneText: 'Glissez et déposez vos fichiers INI ici',
        dropZoneSubtext: 'Déposez les deux fichiers à la fois, ou un ZIP • Cliquez pour parcourir',
        uploadZip: 'Téléverser ZIP',
        upload: 'Téléverser',
        clearImport: '✕ Effacer',
        
        // Controls
        autoSaved: 'Auto-sauvegardé',
        saving: 'Sauvegarde...',
        saved: '✓ Sauvegardé',
        resetToDefaults: '↺ Réinitialiser',
        searchPlaceholder: 'Rechercher...',
        
        // Section titles (GameUserSettings.ini)
        sectionBasic: '🖥️ Noyau Serveur ARK',
        sectionAdmin: '🔐 Contrôles Admin',
        sectionChat: '💬 Communications Survivants',
        sectionGameplay: '🎮 Règles de Survie',
        sectionRates: '📈 Multiplicateurs ARK',
        sectionPlayer: '👤 Paramètres Survivant',
        sectionDino: '🦕 Paramètres Créatures',
        sectionStructure: '🏠 Construction de Base',
        sectionPvP: '⚔️ Guerre Tribale',
        sectionBlueprints: '📜 Plans et Coffres de Butin',
        sectionCryopod: '🧊 Stockage Cryopod',
        sectionTameLimit: '📊 Population Apprivoisée',
        sectionCreatures: '🐾 Comportement Créatures',
        sectionCosmetics: '🎨 Skins et Mods',
        sectionPvPSpecific: '⚔️ Paramètres Raid',
        sectionEnvironment: '🌍 Monde ARK',
        sectionRagnarok: '🌋 ARK Ragnarok',
        sectionValguero: '🏔️ ARK Valguero',
        sectionFjordur: '❄️ ARK Fjordur',
        sectionGenesis: '🌐 Simulation Genesis',
        sectionAberration: '🌌 ARK Aberration',
        sectionExtinction: '🌍 ARK Extinction',
        sectionLostColony: '🚀 ARK Lost Colony',
        
        // Section titles (Lost Colony subsections)
        sectionLCBunker: '🏰 Bunker Tek',
        sectionLCCryoHospital: '❄️ Station CryoHospital',
        sectionLCBloodforge: '🩸 Autel Bloodforge',
        sectionLCOutpost: '🏕️ Avant-poste Avancé',
        sectionLCCreatures: '🦎 Créatures LC',
        
        // Section titles (Basic Server subsections)
        sectionServerIdentity: '🏷️ Identité Serveur',
        sectionServerPorts: '🔌 Connexion et RCON',
        sectionServerMessages: '💾 MOTD et Auto-Sauvegarde',
        sectionServerMods: '🧩 Mods et Remplacements',
        
        // Section titles (Admin subsections)
        sectionAdminLists: '📋 Liste Blanche et Bans',
        sectionAdminSecurity: '🛡️ Anti-Triche et Expulsions',
        sectionAdminPerformance: '⚡ Performance Serveur',
        
        // Section titles (Chat subsections)
        sectionChatVoice: '🔊 Voix Proximité',
        sectionChatFiltering: '🔇 Filtre Chat Global',
        sectionChatLogging: '📝 Historique Chat',
        
        // Section titles (Gameplay subsections)
        sectionGameplayCamera: '📷 Troisième Personne et HUD',
        sectionGameplayRules: '📜 Règles du Jeu',
        sectionGameplayTransfers: '🔄 Divers et Transferts',
        
        // Section titles (Dino subsections)
        sectionDinoDamage: '💥 Combat Créatures',
        sectionDinoFoodStamina: '🍖 Faim Créatures',
        sectionDinoSpawns: '🥚 Spawns Sauvages',
        sectionDinoSpecial: '🦅 Volants et Titans',
        
        // Section titles (Structure subsections)
        sectionStructurePickup: '✋ Ramassage Structures',
        sectionStructureDamage: '🔨 Dégâts de Raid',
        sectionStructureDecay: '⏳ Auto-Dégradation',
        sectionStructurePlatforms: '🎪 Selles Plateformes',
        sectionStructureDensity: '📊 Limites Construction',
        
        // Section titles (PvP subsections)
        sectionPvPModes: '🎯 Mode PvP/PvE',
        sectionPvPOffline: '🛏️ Protection Raid Hors Ligne',
        sectionPvPDecay: '🕐 Dégradation ORP',
        sectionPvPCombat: '🗡️ Règles de Combat',
        sectionPvPTransfers: '🌐 Voyage Cross-ARK',
        sectionPvPTribes: '👥 Paramètres de Tribu',
        
        // Section titles (Rates & Multipliers subsections)
        sectionRatesDifficulty: '⚙️ Difficulté et Niveau Max Sauvage',
        sectionRatesTaming: '🦖 Vitesse Apprivoisement',
        sectionRatesHarvesting: '⛏️ Quantité Récolte',
        sectionRatesStacking: '📦 Tailles Piles et Poids',
        
        // Section titles (Player Settings subsections)
        sectionPlayerDamage: '💥 Combat Survivant',
        sectionPlayerSurvival: '🍖 Faim et Soif',
        sectionPlayerRecovery: '💚 Régénération',
        sectionPlayerDisease: '🦠 Fièvre des Marais et Dangers',
        
        // Section titles (Cryopod subsections)
        sectionCryopodDeployment: '📤 Déploiement Cryo',
        sectionCryopodSickness: '🤢 Temps de Recharge Cryo',
        sectionCryopodNerf: '⚠️ Restrictions Cryo',
        
        // Section titles (Environment & World subsections)
        sectionEnvironmentDayNight: '🌅 Cycle Jour/Nuit',
        sectionEnvironmentWeather: '🌤️ Météo et Événements',
        sectionEnvironmentItems: '📦 Minuteurs Péremption',
        sectionEnvironmentTransfers: '🔄 Téléchargements Obélisque',
        sectionEnvironmentAdmin: '🛡️ Spawn Admin',
        
        // Section titles (Stats Multipliers subsections)
        sectionStatsPlayer: '🧑 Stats Survivant',
        sectionStatsTamed: '🦖 Apprivoisé Par Niveau',
        sectionStatsTamedAdd: '✨ Bonus Post-Apprivoisement',
        sectionStatsTamedAffinity: '💯 Efficacité Apprivoisement',
        sectionStatsWild: '🌿 Stats Créatures Sauvages',
        
        // Section titles (Turrets & Generators subsections)
        sectionTurretsLimits: '🎯 Limite Auto Tourelles',
        sectionTurretsGenerators: '⚡ Limites Générateurs',
        sectionTurretsPower: '🔋 Batterie et Carburant',
        
        // Section titles (Genesis subsections)
        sectionGenesisMissions: '🎯 Missions HLNA',
        sectionGenesisStore: '💎 Échange Hexagones',
        sectionGenesisWorld: '🌍 Effets Simulation',
        
        // Section titles (Breeding subsections)
        sectionBreedingMating: '💕 Intervalle Accouplement',
        sectionBreedingEggs: '🥚 Incubation et Gestation',
        sectionBreedingFarming: '🌾 Parcelles et Agriculture',
        sectionBreedingBabies: '🍼 Vitesse Maturation',
        sectionBreedingImprinting: '🤗 Bonus Imprégnation',
        
        // Section titles (Taming subsections)
        sectionTamingBasics: '⚙️ Noyau Apprivoisement',
        sectionTamingFoodTorpor: '🍖 Nourriture et Torpeur',
        sectionTamingDamageLimits: '⚔️ Dégâts Dino et Élevage',
        
        // Section titles (Player subsections)
        sectionPlayerLeveling: '📈 Montée de Niveau et Stats',
        sectionPlayerFeatures: '🎮 Fonctionnalités Survivant',
        
        // Section titles (Tribe subsections)
        sectionTribeManagement: '📋 Gouvernance Tribu',
        sectionTribeWarfare: '⚔️ Guerres Tribales et FA',
        
        // Section titles (Crafting subsections)
        sectionCraftingSkills: '🎯 Vitesse de Fabrication',
        sectionCraftingEngrams: '📜 Points Engramme',
        
        // Section titles (Loot subsections)
        sectionLootQuality: '💎 Qualité Drops',
        sectionLootResources: '🌲 Nœuds Ressources',
        
        // Section titles (Structures subsections - Game.ini)
        sectionStructuresPlacement: '📐 Règles Fondations',
        sectionStructuresDamageDecay: '🔨 Dégâts et Dégradation',
        
        // Section titles (PvP subsections - Game.ini)
        sectionPvPTimers: '⏰ Minuteurs Raid',
        sectionPvPRespawn: '🔄 Temps Recharge Lit',
        
        // Section titles (Game.ini)
        sectionGameTaming: '🦖 Mécaniques Apprivoisement',
        sectionGamePlayer: '🧑 Progression Survivant',
        sectionGameTribe: '👥 Système Tribal',
        sectionGameCrafting: '🔨 Engrammes et Fabrication',
        sectionGameLoot: '🎁 Drops et Nœuds',
        sectionGameStructures: '🏠 Construction et Bases',
        sectionGameTurrets: '🔫 Systèmes de Défense',
        sectionGamePvP: '⚔️ Mécaniques Raid',
        sectionGameGenesis: '🌐 Simulation Genesis',
        sectionGameEnvironment: '🌡️ Environnement ARK',
        sectionGameAdvanced: '⚙️ Paramètres Expert',
        sectionBreeding: '🥚 Reproduction et Mutations',
        sectionSpoiling: '🍖 Péremption et Décomposition',
        sectionTower: '🗼 Défense Tour Tribale',
        sectionMemorial: '🏛️ Mémorial Survivant',
        sectionStats: '📊 Multiplicateurs Stats',
        sectionXP: '⭐ XP et Progression',
        sectionWorld: '🌍 Règles du Monde',
        sectionResources: '💎 Spawns Ressources',
        sectionHarvesting: '🪓 Taux de Récolte',
        sectionGamePlatform: '🚢 Radeaux et Plateformes',
        sectionGameMissions: '🎯 Missions HLNA',
        sectionGameTribelog: '📜 Événements Journal Tribu',
        
        // Setting card
        defaultLabel: 'Par défaut:',
        enabled: 'Activé',
        disabled: 'Désactivé',
        
        // Dialogs
        resetConfirmTitle: 'Réinitialiser Tous les Paramètres',
        resetConfirmMessage: 'Êtes-vous sûr de vouloir réinitialiser tous les paramètres à leurs valeurs par défaut? Cette action est irréversible.',
        resetConfirmYes: 'Oui, Tout Réinitialiser',
        resetConfirmNo: 'Annuler',
        
        // Notifications
        copiedToClipboard: 'Copié dans le presse-papiers!',
        importSuccess: 'Configuration importée avec succès!',
        importError: 'Erreur lors de l\'importation',
        
        // Tooltip labels
        tooltipDescription: 'Ce que ça fait',
        tooltipEffect: 'Effet du changement de valeur',
        tooltipExample: 'Exemple',
        tooltipSource: 'Source:',
        
        // Guide card
        guideTitle: '📖 Bienvenue ! Voici comment démarrer',
        guideStep1Title: '1. Trouvez et personnalisez vos paramètres',
        guideStep1Text: 'Parcourez les sections organisées ci-dessous pour trouver les paramètres que vous souhaitez modifier. Vous cherchez quelque chose de précis ? Utilisez la barre de recherche en haut - c\'est super rapide ! Lorsque vous survolez un paramètre, une info-bulle vous expliquera exactement ce qu\'il fait et comment les différentes valeurs affectent votre jeu.',
        guideStep2Title: '2. Essayez les préréglages rapides (Optionnel)',
        guideStep2Text: 'Vous voulez rapidement reproduire les taux des serveurs officiels ? Cliquez sur l\'un des boutons de préréglage ci-dessus ! Choisissez entre Par Défaut (1x), Événement Évolution (2x), Smalltribes (4.5x/4x), ou Arkpocalypse (5x). Ces préréglages vous donnent un excellent point de départ, et vous pouvez toujours ajuster chaque paramètre individuellement ensuite.',
        guideStep3Title: '3. Exportez vos fichiers de configuration',
        guideStep3Text: 'Une fois satisfait de vos paramètres, il est temps de les sauvegarder ! Cliquez sur "Télécharger ZIP" pour obtenir GameUserSettings.ini et Game.ini dans un seul package. Vous préférez copier-coller ? Utilisez les boutons de copie individuels pour récupérer directement le contenu de chaque fichier.',
        guideStep4Title: '4. Installez sur votre serveur',
        guideStep4Text: 'Pour les serveurs auto-hébergés, placez les fichiers téléchargés dans le dossier de configuration de votre serveur (chemins indiqués ci-dessous). Vous utilisez Nitrado, G-Portal ou un autre hébergeur ? Copiez et collez simplement les paramètres dans leur panneau de configuration web - c\'est aussi simple que ça !',
        guideTip: '💡 Astuce Pro : Ne vous inquiétez pas de perdre votre travail - tous vos paramètres sont automatiquement sauvegardés dans votre navigateur ! Vous pouvez fermer cette page et revenir plus tard. Vous avez déjà des fichiers de configuration ? Utilisez la fonction Importer pour les charger et faire des modifications rapides.',
        guidePathSinglePlayer: '📁 Chemin Solo :',
        guidePathDedicated: '📁 Chemin Serveur Dédié :',
        guideClose: 'C\'est parti !',
        guideDontShow: 'Ne plus afficher ceci',
        
        // Language selector
        languageLabel: '🌐',
    },
    
    de: {
        // Page title
        pageTitle: 'ARK: Survival Ascended - Server-Konfigurationsgenerator',
        
        // Header
        headerTitle: '🦖 ARK: Survival Ascended',
        headerSubtitle: 'Server-Konfigurationsgenerator',
        
        // Loading
        loadingText: 'Einstellungen werden geladen...',
        
        // Presets section
        presetsTitle: '📋 Offizielle Server-Voreinstellungen',
        preset1xName: '1x Standard',
        preset1xDesc: 'Offizielle Raten',
        preset2xName: '2x Raten',
        preset2xDesc: 'Evolution Event',
        preset3xName: '3x Raten',
        preset3xDesc: 'Verstärkt',
        preset4xName: '4.5x / 4x Raten',
        preset4xDesc: 'Smalltribes',
        preset5xName: '5x Raten',
        preset5xDesc: 'Arkpocalypse',
        
        // Export section
        exportTitle: '📤 Konfiguration Exportieren',
        bothFiles: 'Beide Dateien',
        downloadZip: 'ZIP Herunterladen',
        download: 'Herunterladen',
        copy: 'Kopieren',
        
        // Import section
        importTitle: '📥 Konfiguration Importieren',
        dropZoneText: 'INI-Dateien hier ablegen',
        dropZoneSubtext: 'Beide Dateien gleichzeitig oder ZIP ablegen • Klicken zum Durchsuchen',
        uploadZip: 'ZIP Hochladen',
        upload: 'Hochladen',
        clearImport: '✕ Löschen',
        
        // Controls
        autoSaved: 'Auto-gespeichert',
        saving: 'Speichern...',
        saved: '✓ Gespeichert',
        resetToDefaults: '↺ Zurücksetzen',
        searchPlaceholder: 'Einstellungen suchen...',
        
        // Section titles (GameUserSettings.ini)
        sectionBasic: '🖥️ ARK Server-Kern',
        sectionAdmin: '🔐 Admin-Kontrollen',
        sectionChat: '💬 Überlebenden-Kommunikation',
        sectionGameplay: '🎮 Überlebensregeln',
        sectionRates: '📈 ARK-Multiplikatoren',
        sectionPlayer: '👤 Überlebenden-Einstellungen',
        sectionDino: '🦕 Kreatur-Einstellungen',
        sectionStructure: '🏠 Basis-Bau',
        sectionPvP: '⚔️ Stammeskrieg',
        sectionBlueprints: '📜 Blaupausen & Versorgungsdrops',
        sectionCryopod: '🧊 Cryopod-Lagerung',
        sectionTameLimit: '📊 Gezähmte Population',
        sectionCreatures: '🐾 Kreatur-Verhalten',
        sectionCosmetics: '🎨 Skins & Mods',
        sectionPvPSpecific: '⚔️ Raid-Einstellungen',
        sectionEnvironment: '🌍 ARK-Welt',
        sectionRagnarok: '🌋 ARK Ragnarok',
        sectionValguero: '🏔️ ARK Valguero',
        sectionFjordur: '❄️ ARK Fjordur',
        sectionGenesis: '🌐 Genesis-Simulation',
        sectionAberration: '🌌 ARK Aberration',
        sectionExtinction: '🌍 ARK Extinction',
        sectionLostColony: '🚀 ARK Lost Colony',
        
        // Section titles (Lost Colony subsections)
        sectionLCBunker: '🏰 Tek-Bunker',
        sectionLCCryoHospital: '❄️ CryoHospital-Station',
        sectionLCBloodforge: '🩸 Bloodforge-Altar',
        sectionLCOutpost: '🏕️ Vorgeschobener Außenposten',
        sectionLCCreatures: '🦎 LC Kreaturen',
        
        // Section titles (Basic Server subsections)
        sectionServerIdentity: '🏷️ Server-Identität',
        sectionServerPorts: '🔌 Verbindung und RCON',
        sectionServerMessages: '💾 MOTD und Auto-Speichern',
        sectionServerMods: '🧩 Mods und Überschreibungen',
        
        // Section titles (Admin subsections)
        sectionAdminLists: '📋 Whitelist und Bans',
        sectionAdminSecurity: '🛡️ Anti-Cheat und Kicks',
        sectionAdminPerformance: '⚡ Server-Leistung',
        
        // Section titles (Chat subsections)
        sectionChatVoice: '🔊 Nähe-Sprache',
        sectionChatFiltering: '🔇 Globaler Chat-Filter',
        sectionChatLogging: '📝 Chat-Verlauf',
        
        // Section titles (Gameplay subsections)
        sectionGameplayCamera: '📷 Dritte Person und HUD',
        sectionGameplayRules: '📜 Spielregeln',
        sectionGameplayTransfers: '🔄 Sonstiges & Transfers',
        
        // Section titles (Dino subsections)
        sectionDinoDamage: '💥 Kreaturkampf',
        sectionDinoFoodStamina: '🍖 Kreatur-Hunger',
        sectionDinoSpawns: '🥚 Wild-Spawns',
        sectionDinoSpecial: '🦅 Flieger und Titanen',
        
        // Section titles (Structure subsections)
        sectionStructurePickup: '✋ Struktur-Aufnahme',
        sectionStructureDamage: '🔨 Raid-Schaden',
        sectionStructureDecay: '⏳ Auto-Verfall',
        sectionStructurePlatforms: '🎪 Plattform-Sättel',
        sectionStructureDensity: '📊 Bau-Limits',
        
        // Section titles (PvP subsections)
        sectionPvPModes: '🎯 PvP/PvE-Modus',
        sectionPvPOffline: '🛏️ Offline-Raid-Schutz',
        sectionPvPDecay: '🕐 ORP-Verfall',
        sectionPvPCombat: '🗡️ Kampfregeln',
        sectionPvPTransfers: '🌐 Cross-ARK-Reisen',
        sectionPvPTribes: '👥 Stammes-Einstellungen',
        
        // Section titles (Rates & Multipliers subsections)
        sectionRatesDifficulty: '⚙️ Schwierigkeit und Max Wild-Level',
        sectionRatesTaming: '🦖 Zähm-Geschwindigkeit',
        sectionRatesHarvesting: '⛏️ Ernte-Menge',
        sectionRatesStacking: '📦 Stapelgrößen und Gewicht',
        
        // Section titles (Player Settings subsections)
        sectionPlayerDamage: '💥 Überlebenden-Kampf',
        sectionPlayerSurvival: '🍖 Hunger und Durst',
        sectionPlayerRecovery: '💚 Regeneration',
        sectionPlayerDisease: '🦠 Sumpffieber und Gefahren',
        
        // Section titles (Cryopod subsections)
        sectionCryopodDeployment: '📤 Kryo-Einsatz',
        sectionCryopodSickness: '🤢 Kryo-Abklingzeit',
        sectionCryopodNerf: '⚠️ Kryo-Einschränkungen',
        
        // Section titles (Environment & World subsections)
        sectionEnvironmentDayNight: '🌅 Tag/Nacht-Zyklus',
        sectionEnvironmentWeather: '🌤️ Wetter und Events',
        sectionEnvironmentItems: '📦 Verfall-Timer',
        sectionEnvironmentTransfers: '🔄 Transfer-Uploads',
        sectionEnvironmentAdmin: '🛡️ Admin & Events',
        
        // Section titles (Stats Multipliers subsections)
        sectionStatsPlayer: '🧑 Überlebenden-Stats',
        sectionStatsTamed: '🦖 Gezähmt Pro Level',
        sectionStatsTamedAdd: '✨ Post-Zähm-Bonus',
        sectionStatsTamedAffinity: '💯 Zähm-Effektivität',
        sectionStatsWild: '🌿 Wilde Kreatur-Stats',
        
        // Section titles (Turrets & Generators subsections)
        sectionTurretsLimits: '🎯 Auto-Geschütz-Limit',
        sectionTurretsGenerators: '⚡ Generator-Limits',
        sectionTurretsPower: '🔋 Batterie und Treibstoff',
        
        // Section titles (Genesis subsections)
        sectionGenesisMissions: '🎯 HLNA-Missionen',
        sectionGenesisStore: '💎 Hexagon-Austausch',
        sectionGenesisWorld: '🌍 Simulations-Effekte',
        
        // Section titles (Breeding subsections)
        sectionBreedingMating: '💕 Paarungs-Intervall',
        sectionBreedingEggs: '🥚 Inkubation und Tragzeit',
        sectionBreedingFarming: '🌾 Anbau-Beete und Landwirtschaft',
        sectionBreedingBabies: '🍼 Reifungs-Geschwindigkeit',
        sectionBreedingImprinting: '🤗 Prägungs-Bonus',
        
        // Section titles (Taming subsections)
        sectionTamingBasics: '⚙️ Zähm-Kern',
        sectionTamingFoodTorpor: '🍖 Nahrung und Betäubung',
        sectionTamingDamageLimits: '⚔️ Dino-Schaden und Zucht',
        
        // Section titles (Player subsections)
        sectionPlayerLeveling: '📈 Levelaufstieg und Stats',
        sectionPlayerFeatures: '🎮 Überlebenden-Funktionen',
        
        // Section titles (Tribe subsections)
        sectionTribeManagement: '📋 Stammes-Verwaltung',
        sectionTribeWarfare: '⚔️ Stammeskriege & Eigenbeschuss',
        
        // Section titles (Crafting subsections)
        sectionCraftingSkills: '🎯 Herstellungs-Geschwindigkeit',
        sectionCraftingEngrams: '📜 Engramm-Punkte',
        
        // Section titles (Loot subsections)
        sectionLootQuality: '💎 Versorgungsdrop-Qualität',
        sectionLootResources: '🌲 Ressourcen-Knoten',
        
        // Section titles (Structures subsections - Game.ini)
        sectionStructuresPlacement: '📐 Platzierungs-Regeln',
        sectionStructuresDamageDecay: '🔨 Schaden & Verfall',
        
        // Section titles (PvP subsections - Game.ini)
        sectionPvPTimers: '⏰ PvE/PvP-Timer',
        sectionPvPRespawn: '🔄 Respawn-Einstellungen',
        
        // Section titles (Game.ini)
        sectionGameTaming: '🦖 Zähm-Mechaniken',
        sectionGamePlayer: '🧑 Überlebenden-Fortschritt',
        sectionGameTribe: '👥 Stammes-System',
        sectionGameCrafting: '🔨 Engramme und Herstellung',
        sectionGameLoot: '🎁 Versorgungsdrops und Knoten',
        sectionGameStructures: '🏠 Bauen und Basen',
        sectionGameTurrets: '🔫 Verteidigungs-Systeme',
        sectionGamePvP: '⚔️ Raid-Mechaniken',
        sectionGameGenesis: '🌐 Genesis-Simulation',
        sectionGameEnvironment: '🌡️ ARK-Umgebung',
        sectionGameAdvanced: '⚙️ Experten-Einstellungen',
        sectionBreeding: '🥚 Zucht und Mutationen',
        sectionSpoiling: '🍖 Verfall und Zersetzung',
        sectionTower: '🗼 Stammes-Turm-Verteidigung',
        sectionMemorial: '🏛️ Überlebenden-Denkmal',
        sectionStats: '📊 Stat-Multiplikatoren',
        sectionXP: '⭐ XP und Stufenaufstieg',
        sectionWorld: '🌍 Welt-Regeln',
        sectionResources: '💎 Ressourcen-Spawns',
        sectionHarvesting: '🪓 Sammel-Raten',
        sectionGamePlatform: '🚢 Flöße und Plattformen',
        sectionGameMissions: '🎯 HLNA-Missionen',
        sectionGameTribelog: '📜 Stammeslog-Ereignisse',
        
        // Setting card
        defaultLabel: 'Standard:',
        enabled: 'Aktiviert',
        disabled: 'Deaktiviert',
        
        // Dialogs
        resetConfirmTitle: 'Alle Einstellungen Zurücksetzen',
        resetConfirmMessage: 'Sind Sie sicher, dass Sie alle Einstellungen auf ihre Standardwerte zurücksetzen möchten? Dies kann nicht rückgängig gemacht werden.',
        resetConfirmYes: 'Ja, Alles Zurücksetzen',
        resetConfirmNo: 'Abbrechen',
        
        // Notifications
        copiedToClipboard: 'In Zwischenablage kopiert!',
        importSuccess: 'Konfiguration erfolgreich importiert!',
        importError: 'Fehler beim Importieren',
        
        // Tooltip labels
        tooltipDescription: 'Was es macht',
        tooltipEffect: 'Auswirkung bei Änderung',
        tooltipExample: 'Beispiel',
        tooltipSource: 'Quelle:',
        
        // Guide card
        guideTitle: '📖 Willkommen! So legst du los',
        guideStep1Title: '1. Finde und passe deine Einstellungen an',
        guideStep1Text: 'Scrolle durch die organisierten Bereiche unten, um die Einstellungen zu finden, die du ändern möchtest. Suchst du etwas Bestimmtes? Nutze die Suchleiste oben - sie ist superschnell! Wenn du mit der Maus über eine Einstellung fährst, erscheint ein hilfreicher Tooltip, der genau erklärt, was sie bewirkt und wie verschiedene Werte dein Spiel beeinflussen.',
        guideStep2Title: '2. Probiere Schnell-Voreinstellungen (Optional)',
        guideStep2Text: 'Möchtest du schnell offizielle Server-Raten übernehmen? Klicke auf einen der Voreinstellungs-Buttons oben! Wähle zwischen Standard (1x), Evolution Event (2x), Smalltribes (4.5x/4x) oder Arkpocalypse (5x). Diese geben dir einen tollen Ausgangspunkt, und du kannst danach immer noch einzelne Einstellungen feinabstimmen.',
        guideStep3Title: '3. Exportiere deine Konfigurationsdateien',
        guideStep3Text: 'Sobald du mit deinen Einstellungen zufrieden bist, ist es Zeit sie zu speichern! Klicke auf "ZIP herunterladen" um GameUserSettings.ini und Game.ini in einem Paket zu erhalten. Lieber kopieren und einfügen? Nutze die einzelnen Kopier-Buttons um den Inhalt jeder Datei direkt zu übernehmen.',
        guideStep4Title: '4. Auf deinem Server installieren',
        guideStep4Text: 'Für selbst gehostete Server lege die heruntergeladenen Dateien im Konfigurationsordner deines Servers ab (Pfade unten gezeigt). Nutzt du Nitrado, G-Portal oder einen anderen Hosting-Anbieter? Kopiere und füge die Einstellungen einfach in deren Web-Konfigurationspanel ein - so einfach ist das!',
        guideTip: '💡 Profi-Tipp: Keine Sorge, deine Arbeit geht nicht verloren - alle deine Einstellungen werden automatisch in deinem Browser gespeichert! Du kannst diese Seite schließen und später wiederkommen. Hast du bereits Konfigurationsdateien? Nutze die Import-Funktion um sie zu laden und schnelle Änderungen vorzunehmen.',
        guidePathSinglePlayer: '📁 Einzelspieler-Pfad:',
        guidePathDedicated: '📁 Dedizierter Server-Pfad:',
        guideClose: 'Los geht\'s!',
        guideDontShow: 'Nicht mehr anzeigen',
        
        // Language selector
        languageLabel: '🌐',
    },
    
    pt: {
        // Page title
        pageTitle: 'ARK: Survival Ascended - Gerador de Configuração',
        
        // Header
        headerTitle: '🦖 ARK: Survival Ascended',
        headerSubtitle: 'Gerador de Configuração do Servidor',
        
        // Loading
        loadingText: 'Carregando configurações...',
        
        // Presets section
        presetsTitle: '📋 Predefinições Oficiais do Servidor',
        preset1xName: '1x Padrão',
        preset1xDesc: 'Taxas oficiais',
        preset2xName: '2x Taxas',
        preset2xDesc: 'Evento Evolução',
        preset3xName: '3x Taxas',
        preset3xDesc: 'Aumentado',
        preset4xName: '4.5x / 4x Taxas',
        preset4xDesc: 'Smalltribes',
        preset5xName: '5x Taxas',
        preset5xDesc: 'Arkpocalypse',
        
        // Export section
        exportTitle: '📤 Exportar Configuração',
        bothFiles: 'Ambos Arquivos',
        downloadZip: 'Baixar ZIP',
        download: 'Baixar',
        copy: 'Copiar',
        
        // Import section
        importTitle: '📥 Importar Configuração',
        dropZoneText: 'Arraste e solte seus arquivos INI aqui',
        dropZoneSubtext: 'Solte ambos os arquivos de uma vez, ou um ZIP • Clique para navegar',
        uploadZip: 'Enviar ZIP',
        upload: 'Enviar',
        clearImport: '✕ Limpar',
        
        // Controls
        autoSaved: 'Auto-salvo',
        saving: 'Salvando...',
        saved: '✓ Salvo',
        resetToDefaults: '↺ Redefinir',
        searchPlaceholder: 'Buscar configurações...',
        
        // Section titles (GameUserSettings.ini)
        sectionBasic: '🖥️ Núcleo do Servidor ARK',
        sectionAdmin: '🔐 Controles de Admin',
        sectionChat: '💬 Comunicações de Sobreviventes',
        sectionGameplay: '🎮 Regras de Sobrevivência',
        sectionRates: '📈 Multiplicadores ARK',
        sectionPlayer: '👤 Configurações do Sobrevivente',
        sectionDino: '🦕 Configurações de Criaturas',
        sectionStructure: '🏠 Construção de Base',
        sectionPvP: '⚔️ Guerra Tribal',
        sectionBlueprints: '📜 Projetos e Caixas de Suprimentos',
        sectionCryopod: '🧊 Armazenamento Cryopod',
        sectionTameLimit: '📊 População Domesticada',
        sectionCreatures: '🐾 Comportamento de Criaturas',
        sectionCosmetics: '🎨 Skins e Mods',
        sectionPvPSpecific: '⚔️ Configurações de Raid',
        sectionEnvironment: '🌍 Mundo ARK',
        sectionRagnarok: '🌋 ARK Ragnarok',
        sectionValguero: '🏔️ ARK Valguero',
        sectionFjordur: '❄️ ARK Fjordur',
        sectionGenesis: '🌐 Simulação Genesis',
        sectionAberration: '🌌 ARK Aberration',
        sectionExtinction: '🌍 ARK Extinction',
        sectionLostColony: '🚀 ARK Lost Colony',
        
        // Section titles (Lost Colony subsections)
        sectionLCBunker: '🏰 Bunker Tek',
        sectionLCCryoHospital: '❄️ Estação CryoHospital',
        sectionLCBloodforge: '🩸 Altar Bloodforge',
        sectionLCOutpost: '🏕️ Posto Avançado',
        sectionLCCreatures: '🦎 Criaturas LC',
        
        // Section titles (Basic Server subsections)
        sectionServerIdentity: '🏷️ Identidade do Servidor',
        sectionServerPorts: '🔌 Conexão e RCON',
        sectionServerMessages: '💾 MOTD e Auto-Salvamento',
        sectionServerMods: '🧩 Mods e Substituições',
        
        // Section titles (Admin subsections)
        sectionAdminLists: '📋 Lista Branca e Banimentos',
        sectionAdminSecurity: '🛡️ Anti-Trapaça e Expulsões',
        sectionAdminPerformance: '⚡ Desempenho do Servidor',
        
        // Section titles (Chat subsections)
        sectionChatVoice: '🔊 Voz por Proximidade',
        sectionChatFiltering: '🔇 Filtro de Chat Global',
        sectionChatLogging: '📝 Histórico de Chat',
        
        // Section titles (Gameplay subsections)
        sectionGameplayCamera: '📷 Terceira Pessoa e HUD',
        sectionGameplayRules: '📜 Regras do Jogo',
        sectionGameplayTransfers: '🔄 Diversos e Transferências',
        
        // Section titles (Dino subsections)
        sectionDinoDamage: '💥 Combate de Criaturas',
        sectionDinoFoodStamina: '🍖 Fome de Criaturas',
        sectionDinoSpawns: '🥚 Spawns Selvagens',
        sectionDinoSpecial: '🦅 Voadores e Titãs',
        
        // Section titles (Structure subsections)
        sectionStructurePickup: '✋ Coleta de Estruturas',
        sectionStructureDamage: '🔨 Dano de Raid',
        sectionStructureDecay: '⏳ Auto-Deterioração',
        sectionStructurePlatforms: '🎪 Selas Plataforma',
        sectionStructureDensity: '📊 Limites de Construção',
        
        // Section titles (PvP subsections)
        sectionPvPModes: '🎯 Modo PvP/PvE',
        sectionPvPOffline: '🛏️ Proteção Raid Offline',
        sectionPvPDecay: '🕐 Deterioração ORP',
        sectionPvPCombat: '🗡️ Regras de Combate',
        sectionPvPTransfers: '🌐 Viagem Cross-ARK',
        sectionPvPTribes: '👥 Configurações de Tribo',
        
        // Section titles (Rates & Multipliers subsections)
        sectionRatesDifficulty: '⚙️ Dificuldade e Nível Máx Selvagem',
        sectionRatesTaming: '🦖 Velocidade de Domesticação',
        sectionRatesHarvesting: '⛏️ Quantidade de Coleta',
        sectionRatesStacking: '📦 Tamanhos de Pilha e Peso',
        
        // Section titles (Player Settings subsections)
        sectionPlayerDamage: '💥 Combate do Sobrevivente',
        sectionPlayerSurvival: '🍖 Fome e Sede',
        sectionPlayerRecovery: '💚 Regeneração',
        sectionPlayerDisease: '🦠 Febre do Pântano e Perigos',
        
        // Section titles (Cryopod subsections)
        sectionCryopodDeployment: '📤 Implantação Cryo',
        sectionCryopodSickness: '🤢 Tempo de Recarga Cryo',
        sectionCryopodNerf: '⚠️ Restrições Cryo',
        
        // Section titles (Environment & World subsections)
        sectionEnvironmentDayNight: '🌅 Ciclo Dia/Noite',
        sectionEnvironmentWeather: '🌤️ Clima e Eventos',
        sectionEnvironmentItems: '📦 Temporizadores de Deterioração',
        sectionEnvironmentTransfers: '🔄 Uploads de Transferência',
        sectionEnvironmentAdmin: '🛡️ Admin e Eventos',
        
        // Section titles (Stats Multipliers subsections)
        sectionStatsPlayer: '🧑 Stats do Sobrevivente',
        sectionStatsTamed: '🦖 Domesticado Por Nível',
        sectionStatsTamedAdd: '✨ Bônus Pós-Domesticação',
        sectionStatsTamedAffinity: '💯 Eficácia de Domesticação',
        sectionStatsWild: '🌿 Stats de Criaturas Selvagens',
        
        // Section titles (Turrets & Generators subsections)
        sectionTurretsLimits: '🎯 Limite de Auto Torretas',
        sectionTurretsGenerators: '⚡ Limites de Gerador',
        sectionTurretsPower: '🔋 Bateria e Combustível',
        
        // Section titles (Genesis subsections)
        sectionGenesisMissions: '🎯 Missões HLNA',
        sectionGenesisStore: '💎 Troca de Hexágonos',
        sectionGenesisWorld: '🌍 Efeitos de Simulação',
        
        // Section titles (Breeding subsections)
        sectionBreedingMating: '💕 Intervalo de Acasalamento',
        sectionBreedingEggs: '🥚 Incubação e Gestação',
        sectionBreedingFarming: '🌾 Parcelas e Agricultura',
        sectionBreedingBabies: '🍼 Velocidade de Maturação',
        sectionBreedingImprinting: '🤗 Bônus de Impressão',
        
        // Section titles (Taming subsections)
        sectionTamingBasics: '⚙️ Núcleo de Domesticação',
        sectionTamingFoodTorpor: '🍖 Comida e Torpor',
        sectionTamingDamageLimits: '⚔️ Dano de Dino e Criação',
        
        // Section titles (Player subsections)
        sectionPlayerLeveling: '📈 Subida de Nível e Stats',
        sectionPlayerFeatures: '🎮 Recursos do Sobrevivente',
        
        // Section titles (Tribe subsections)
        sectionTribeManagement: '📋 Gestão de Tribo',
        sectionTribeWarfare: '⚔️ Guerras e Fogo Amigo',
        
        // Section titles (Crafting subsections)
        sectionCraftingSkills: '🎯 Velocidade de Fabricação',
        sectionCraftingEngrams: '📜 Pontos de Engrama',
        
        // Section titles (Loot subsections)
        sectionLootQuality: '💎 Qualidade de Suprimentos',
        sectionLootResources: '🌲 Nós de Recursos',
        
        // Section titles (Structures subsections - Game.ini)
        sectionStructuresPlacement: '📐 Regras de Posicionamento',
        sectionStructuresDamageDecay: '🔨 Dano e Deterioração',
        
        // Section titles (PvP subsections - Game.ini)
        sectionPvPTimers: '⏰ Temporizadores PvE/PvP',
        sectionPvPRespawn: '🔄 Configurações de Respawn',
        
        // Section titles (Game.ini)
        sectionGameTaming: '🦖 Mecânicas de Domesticação',
        sectionGamePlayer: '🧑 Progressão do Sobrevivente',
        sectionGameTribe: '👥 Sistema Tribal',
        sectionGameCrafting: '🔨 Engramas e Fabricação',
        sectionGameLoot: '🎁 Suprimentos e Nós',
        sectionGameStructures: '🏠 Construção e Bases',
        sectionGameTurrets: '🔫 Sistemas de Defesa',
        sectionGamePvP: '⚔️ Mecânicas de Raid',
        sectionGameGenesis: '🌐 Simulação Genesis',
        sectionGameEnvironment: '🌡️ Ambiente ARK',
        sectionGameAdvanced: '⚙️ Configurações Expert',
        sectionBreeding: '🥚 Reprodução e Mutações',
        sectionSpoiling: '🍖 Deterioração e Decomposição',
        sectionTower: '🗼 Defesa da Torre Tribal',
        sectionMemorial: '🏛️ Memorial do Sobrevivente',
        sectionStats: '📊 Multiplicadores de Stats',
        sectionXP: '⭐ XP e Suba de Nível',
        sectionWorld: '🌍 Regras do Mundo',
        sectionResources: '💎 Spawns de Recursos',
        sectionHarvesting: '🪓 Taxas de Coleta',
        sectionGamePlatform: '🚢 Balsas e Plataformas',
        sectionGameMissions: '🎯 Missões HLNA',
        sectionGameTribelog: '📜 Eventos do Log da Tribo',
        
        // Setting card
        defaultLabel: 'Padrão:',
        enabled: 'Ativado',
        disabled: 'Desativado',
        
        // Dialogs
        resetConfirmTitle: 'Redefinir Todas as Configurações',
        resetConfirmMessage: 'Tem certeza de que deseja redefinir todas as configurações para seus valores padrão? Isso não pode ser desfeito.',
        resetConfirmYes: 'Sim, Redefinir Tudo',
        resetConfirmNo: 'Cancelar',
        
        // Notifications
        copiedToClipboard: 'Copiado para a área de transferência!',
        importSuccess: 'Configuração importada com sucesso!',
        importError: 'Erro ao importar configuração',
        
        // Tooltip labels
        tooltipDescription: 'O que faz',
        tooltipEffect: 'Efeito ao alterar o valor',
        tooltipExample: 'Exemplo',
        tooltipSource: 'Fonte:',
        
        // Guide card
        guideTitle: '📖 Bem-vindo! Veja como começar',
        guideStep1Title: '1. Encontre e personalize suas configurações',
        guideStep1Text: 'Navegue pelas seções organizadas abaixo para encontrar as configurações que deseja modificar. Procurando algo específico? Use a barra de pesquisa no topo - é super rápida! Quando você passar o mouse sobre qualquer configuração, verá uma dica útil explicando exatamente o que ela faz e como diferentes valores afetam seu jogo.',
        guideStep2Title: '2. Experimente predefinições rápidas (Opcional)',
        guideStep2Text: 'Quer igualar rapidamente as taxas dos servidores oficiais? Clique em um dos botões de predefinição acima! Escolha entre Padrão (1x), Evento Evolução (2x), Smalltribes (4.5x/4x) ou Arkpocalypse (5x). Estes dão um ótimo ponto de partida, e você ainda pode ajustar qualquer configuração individual depois.',
        guideStep3Title: '3. Exporte seus arquivos de configuração',
        guideStep3Text: 'Quando estiver satisfeito com suas configurações, é hora de salvá-las! Clique em "Baixar ZIP" para obter GameUserSettings.ini e Game.ini em um único pacote. Prefere copiar e colar? Use os botões de cópia individuais para pegar o conteúdo de cada arquivo diretamente.',
        guideStep4Title: '4. Instale no seu servidor',
        guideStep4Text: 'Para servidores auto-hospedados, coloque os arquivos baixados na pasta de configuração do seu servidor (caminhos mostrados abaixo). Usa Nitrado, G-Portal ou outro provedor de hospedagem? Simplesmente copie e cole as configurações no painel de configuração web deles - é simples assim!',
        guideTip: '💡 Dica Pro: Não se preocupe em perder seu trabalho - todas as suas configurações são salvas automaticamente no seu navegador! Você pode fechar esta página e voltar depois. Já tem arquivos de configuração? Use a função Importar para carregá-los e fazer edições rápidas.',
        guidePathSinglePlayer: '📁 Caminho Jogador Solo:',
        guidePathDedicated: '📁 Caminho Servidor Dedicado:',
        guideClose: 'Vamos lá!',
        guideDontShow: 'Não mostrar isso novamente',
        
        // Language selector
        languageLabel: '🌐',
    },
    
    ru: {
        // Page title
        pageTitle: 'ARK: Survival Ascended - Генератор Конфигурации',
        
        // Header
        headerTitle: '🦖 ARK: Survival Ascended',
        headerSubtitle: 'Генератор Конфигурации Сервера',
        
        // Loading
        loadingText: 'Загрузка настроек...',
        
        // Presets section
        presetsTitle: '📋 Официальные Пресеты Сервера',
        preset1xName: '1x По Умолчанию',
        preset1xDesc: 'Официальные ставки',
        preset2xName: '2x Ставки',
        preset2xDesc: 'Событие Эволюции',
        preset3xName: '3x Ставки',
        preset3xDesc: 'Усиленные',
        preset4xName: '4.5x / 4x Ставки',
        preset4xDesc: 'Smalltribes',
        preset5xName: '5x Ставки',
        preset5xDesc: 'Arkpocalypse',
        
        // Export section
        exportTitle: '📤 Экспорт Конфигурации',
        bothFiles: 'Оба Файла',
        downloadZip: 'Скачать ZIP',
        download: 'Скачать',
        copy: 'Копировать',
        
        // Import section
        importTitle: '📥 Импорт Конфигурации',
        dropZoneText: 'Перетащите INI файлы сюда',
        dropZoneSubtext: 'Перетащите оба файла или ZIP • Нажмите для выбора',
        uploadZip: 'Загрузить ZIP',
        upload: 'Загрузить',
        clearImport: '✕ Очистить',
        
        // Controls
        autoSaved: 'Авто-сохранено',
        saving: 'Сохранение...',
        saved: '✓ Сохранено',
        resetToDefaults: '↺ Сбросить',
        searchPlaceholder: 'Поиск настроек...',
        
        // Section titles (GameUserSettings.ini)
        sectionBasic: '🖥️ Ядро Сервера ARK',
        sectionAdmin: '🔐 Контроль Админа',
        sectionChat: '💬 Связь Выживших',
        sectionGameplay: '🎮 Правила Выживания',
        sectionRates: '📈 Множители ARK',
        sectionPlayer: '👤 Настройки Выжившего',
        sectionDino: '🦕 Настройки Существ',
        sectionStructure: '🏠 Строительство Базы',
        sectionPvP: '⚔️ Племенная Война',
        sectionBlueprints: '📜 Чертежи и Контейнеры',
        sectionCryopod: '🧊 Хранилище Криоподов',
        sectionTameLimit: '📊 Популяция Приручённых',
        sectionCreatures: '🐾 Поведение Существ',
        sectionCosmetics: '🎨 Скины и Моды',
        sectionPvPSpecific: '⚔️ Настройки Рейда',
        sectionEnvironment: '🌍 Мир ARK',
        sectionRagnarok: '🌋 ARK Рагнарок',
        sectionValguero: '🏔️ ARK Вальгеро',
        sectionFjordur: '❄️ ARK Фьордур',
        sectionGenesis: '🌐 Симуляция Genesis',
        sectionAberration: '🌌 ARK Аберрация',
        sectionExtinction: '🌍 ARK Вымирание',
        sectionLostColony: '🚀 ARK Затерянная Колония',
        
        // Section titles (Lost Colony subsections)
        sectionLCBunker: '🏰 Tek Бункер',
        sectionLCCryoHospital: '❄️ Станция CryoHospital',
        sectionLCBloodforge: '🩸 Алтарь Bloodforge',
        sectionLCOutpost: '🏕️ Передовой Аванпост',
        sectionLCCreatures: '🦎 Существа LC',
        
        // Section titles (Basic Server subsections)
        sectionServerIdentity: '🏷️ Идентичность Сервера',
        sectionServerPorts: '🔌 Подключение и RCON',
        sectionServerMessages: '💾 MOTD и Автосохранение',
        sectionServerMods: '🧩 Моды и Переопределения',
        
        // Section titles (Admin subsections)
        sectionAdminLists: '📋 Белый Список и Баны',
        sectionAdminSecurity: '🛡️ Античит и Кики',
        sectionAdminPerformance: '⚡ Производительность Сервера',
        
        // Section titles (Chat subsections)
        sectionChatVoice: '🔊 Голос По Близости',
        sectionChatFiltering: '🔇 Глобальный Фильтр Чата',
        sectionChatLogging: '📝 История Чата',
        
        // Section titles (Gameplay subsections)
        sectionGameplayCamera: '📷 Третье Лицо и HUD',
        sectionGameplayRules: '📜 Правила Игры',
        sectionGameplayTransfers: '🔄 Разное и Трансферы',
        
        // Section titles (Dino subsections)
        sectionDinoDamage: '💥 Бой Существ',
        sectionDinoFoodStamina: '🍖 Голод Существ',
        sectionDinoSpawns: '🥚 Дикие Спавны',
        sectionDinoSpecial: '🦅 Летуны и Титаны',
        
        // Section titles (Structure subsections)
        sectionStructurePickup: '✋ Подбор Структур',
        sectionStructureDamage: '🔨 Урон Рейда',
        sectionStructureDecay: '⏳ Авто-Разрушение',
        sectionStructurePlatforms: '🎪 Платформенные Сёдла',
        sectionStructureDensity: '📊 Лимиты Строительства',
        
        // Section titles (PvP subsections)
        sectionPvPModes: '🎯 Режим PvP/PvE',
        sectionPvPOffline: '🛏️ Защита от Офлайн Рейда',
        sectionPvPDecay: '🕐 Разрушение ORP',
        sectionPvPCombat: '🗡️ Правила Боя',
        sectionPvPTransfers: '🌐 Путешествие Cross-ARK',
        sectionPvPTribes: '👥 Настройки Племени',
        
        // Section titles (Rates & Multipliers subsections)
        sectionRatesDifficulty: '⚙️ Сложность и Макс Уровень Диких',
        sectionRatesTaming: '🦖 Скорость Приручения',
        sectionRatesHarvesting: '⛏️ Количество Сбора',
        sectionRatesStacking: '📦 Размеры Стаков и Вес',
        
        // Section titles (Player Settings subsections)
        sectionPlayerDamage: '💥 Бой Выжившего',
        sectionPlayerSurvival: '🍖 Голод и Жажда',
        sectionPlayerRecovery: '💚 Регенерация',
        sectionPlayerDisease: '🦠 Болотная Лихорадка и Опасности',
        
        // Section titles (Cryopod subsections)
        sectionCryopodDeployment: '📤 Развёртывание Крио',
        sectionCryopodSickness: '🤢 Перезарядка Крио',
        sectionCryopodNerf: '⚠️ Ограничения Крио',
        
        // Section titles (Environment & World subsections)
        sectionEnvironmentDayNight: '🌅 Цикл Дня/Ночи',
        sectionEnvironmentWeather: '🌤️ Погода и События',
        sectionEnvironmentItems: '📦 Таймеры Порчи',
        sectionEnvironmentTransfers: '🔄 Загрузки Трансферов',
        sectionEnvironmentAdmin: '🛡️ Админ и События',
        
        // Section titles (Stats Multipliers subsections)
        sectionStatsPlayer: '🧑 Статы Выжившего',
        sectionStatsTamed: '🦖 Приручённый За Уровень',
        sectionStatsTamedAdd: '✨ Бонус После Приручения',
        sectionStatsTamedAffinity: '💯 Эффективность Приручения',
        sectionStatsWild: '🌿 Статы Диких Существ',
        
        // Section titles (Turrets & Generators subsections)
        sectionTurretsLimits: '🎯 Лимит Автотурелей',
        sectionTurretsGenerators: '⚡ Лимиты Генераторов',
        sectionTurretsPower: '🔋 Батарея и Топливо',
        
        // Section titles (Genesis subsections)
        sectionGenesisMissions: '🎯 Миссии HLNA',
        sectionGenesisStore: '💎 Обмен Гексагонов',
        sectionGenesisWorld: '🌍 Эффекты Симуляции',
        
        // Section titles (Breeding subsections)
        sectionBreedingMating: '💕 Интервал Спаривания',
        sectionBreedingEggs: '🥚 Инкубация и Беременность',
        sectionBreedingFarming: '🌾 Грядки и Фермерство',
        sectionBreedingBabies: '🍼 Скорость Взросления',
        sectionBreedingImprinting: '🤗 Бонус Импринтинга',
        
        // Section titles (Taming subsections)
        sectionTamingBasics: '⚙️ Ядро Приручения',
        sectionTamingFoodTorpor: '🍖 Еда и Оглушение',
        sectionTamingDamageLimits: '⚔️ Урон Дино и Разведение',
        
        // Section titles (Player subsections)
        sectionPlayerLeveling: '📈 Прокачка и Статы',
        sectionPlayerFeatures: '🎮 Функции Выжившего',
        
        // Section titles (Tribe subsections)
        sectionTribeManagement: '📋 Управление Племенем',
        sectionTribeWarfare: '⚔️ Войны и Дружественный Огонь',
        
        // Section titles (Crafting subsections)
        sectionCraftingSkills: '🎯 Скорость Крафта',
        sectionCraftingEngrams: '📜 Очки Энграмм',
        
        // Section titles (Loot subsections)
        sectionLootQuality: '💎 Качество Дропов',
        sectionLootResources: '🌲 Узлы Ресурсов',
        
        // Section titles (Structures subsections - Game.ini)
        sectionStructuresPlacement: '📐 Правила Размещения',
        sectionStructuresDamageDecay: '🔨 Урон и Распад',
        
        // Section titles (PvP subsections - Game.ini)
        sectionPvPTimers: '⏰ Таймеры PvE/PvP',
        sectionPvPRespawn: '🔄 Настройки Возрождения',
        
        // Section titles (Game.ini)
        sectionGameTaming: '🦖 Механики Приручения',
        sectionGamePlayer: '🧑 Прогресс Выжившего',
        sectionGameTribe: '👥 Система Племён',
        sectionGameCrafting: '🔨 Энграммы и Крафт',
        sectionGameLoot: '🎁 Дропы и Узлы',
        sectionGameStructures: '🏠 Строительство и Базы',
        sectionGameTurrets: '🔫 Системы Защиты',
        sectionGamePvP: '⚔️ Механики Рейда',
        sectionGameGenesis: '🌐 Симуляция Genesis',
        sectionGameEnvironment: '🌡️ Окружение ARK',
        sectionGameAdvanced: '⚙️ Экспертные Настройки',
        sectionBreeding: '🥚 Разведение и Мутации',
        sectionSpoiling: '🍖 Порча и Разложение',
        sectionTower: '🗼 Защита Башни Племени',
        sectionMemorial: '🏛️ Мемориал Выжившего',
        sectionStats: '📊 Множители Статов',
        sectionXP: '⭐ XP и Прокачка',
        sectionWorld: '🌍 Правила Мира',
        sectionResources: '💎 Спавны Ресурсов',
        sectionHarvesting: '🪓 Скорости Сбора',
        sectionGamePlatform: '🚢 Плоты и Платформы',
        sectionGameMissions: '🎯 Миссии HLNA',
        sectionGameTribelog: '📜 События Журнала Племени',
        
        // Setting card
        defaultLabel: 'По умолчанию:',
        enabled: 'Включено',
        disabled: 'Отключено',
        
        // Dialogs
        resetConfirmTitle: 'Сбросить Все Настройки',
        resetConfirmMessage: 'Вы уверены, что хотите сбросить все настройки до значений по умолчанию? Это нельзя отменить.',
        resetConfirmYes: 'Да, Сбросить Все',
        resetConfirmNo: 'Отмена',
        
        // Notifications
        copiedToClipboard: 'Скопировано в буфер обмена!',
        importSuccess: 'Конфигурация успешно импортирована!',
        importError: 'Ошибка импорта конфигурации',
        
        // Tooltip labels
        tooltipDescription: 'Что это делает',
        tooltipEffect: 'Эффект при изменении',
        tooltipExample: 'Пример',
        tooltipSource: 'Источник:',
        
        // Guide card
        guideTitle: '📖 Добро пожаловать! Вот как начать',
        guideStep1Title: '1. Найдите и настройте параметры',
        guideStep1Text: 'Просмотрите организованные разделы ниже, чтобы найти настройки, которые хотите изменить. Ищете что-то конкретное? Используйте строку поиска вверху - она супербыстрая! При наведении курсора на любую настройку появится полезная подсказка, объясняющая, что именно она делает и как различные значения влияют на вашу игру.',
        guideStep2Title: '2. Попробуйте быстрые пресеты (Опционально)',
        guideStep2Text: 'Хотите быстро применить официальные серверные рейты? Нажмите на одну из кнопок пресетов выше! Выберите из Стандартных (1x), Событие Эволюции (2x), Smalltribes (4.5x/4x) или Arkpocalypse (5x). Это отличная отправная точка, и вы всё ещё можете тонко настроить любые отдельные параметры после.',
        guideStep3Title: '3. Экспортируйте файлы конфигурации',
        guideStep3Text: 'Когда вы довольны настройками, пора их сохранить! Нажмите "Скачать ZIP", чтобы получить GameUserSettings.ini и Game.ini в одном архиве. Предпочитаете копировать и вставлять? Используйте отдельные кнопки копирования для получения содержимого каждого файла напрямую.',
        guideStep4Title: '4. Установите на ваш сервер',
        guideStep4Text: 'Для собственных серверов поместите скачанные файлы в папку конфигурации вашего сервера (пути показаны ниже). Используете Nitrado, G-Portal или другой хостинг? Просто скопируйте и вставьте настройки в их веб-панель конфигурации - это так просто!',
        guideTip: '💡 Профессиональный совет: Не беспокойтесь о потере работы - все ваши настройки автоматически сохраняются в браузере! Вы можете закрыть эту страницу и вернуться позже. Уже есть файлы конфигурации? Используйте функцию Импорта для их загрузки и быстрого редактирования.',
        guidePathSinglePlayer: '📁 Путь одиночной игры:',
        guidePathDedicated: '📁 Путь выделенного сервера:',
        guideClose: 'Поехали!',
        guideDontShow: 'Больше не показывать',
        
        // Language selector
        languageLabel: '🌐',
    },
    
    zh: {
        // Page title
        pageTitle: 'ARK: Survival Ascended - 服务器配置生成器',
        
        // Header
        headerTitle: '🦖 ARK: Survival Ascended',
        headerSubtitle: '服务器配置生成器',
        
        // Loading
        loadingText: '正在加载设置...',
        
        // Presets section
        presetsTitle: '📋 官方服务器预设',
        preset1xName: '1x 默认',
        preset1xDesc: '官方倍率',
        preset2xName: '2x 倍率',
        preset2xDesc: '进化活动',
        preset3xName: '3x 倍率',
        preset3xDesc: '增强',
        preset4xName: '4.5x / 4x 倍率',
        preset4xDesc: 'Smalltribes',
        preset5xName: '5x 倍率',
        preset5xDesc: 'Arkpocalypse',
        
        // Export section
        exportTitle: '📤 导出配置',
        bothFiles: '两个文件',
        downloadZip: '下载 ZIP',
        download: '下载',
        copy: '复制',
        
        // Import section
        importTitle: '📥 导入配置',
        dropZoneText: '将 INI 文件拖放到此处',
        dropZoneSubtext: '同时放置两个文件或 ZIP • 点击浏览',
        uploadZip: '上传 ZIP',
        upload: '上传',
        clearImport: '✕ 清除',
        
        // Controls
        autoSaved: '自动保存',
        saving: '保存中...',
        saved: '✓ 已保存',
        resetToDefaults: '↺ 重置',
        searchPlaceholder: '搜索设置...',
        
        // Section titles (GameUserSettings.ini)
        sectionBasic: '🖥️ ARK服务器核心',
        sectionAdmin: '🔐 管理员控制',
        sectionChat: '💬 幸存者通讯',
        sectionGameplay: '🎮 生存规则',
        sectionRates: '📈 ARK倍率',
        sectionPlayer: '👤 幸存者设置',
        sectionDino: '🦕 生物设置',
        sectionStructure: '🏠 基地建造',
        sectionPvP: '⚔️ 部落战争',
        sectionBlueprints: '📜 蓝图与补给箱',
        sectionCryopod: '🧊 冷冻舱存储',
        sectionTameLimit: '📊 驯服数量',
        sectionCreatures: '🐾 生物行为',
        sectionCosmetics: '🎨 皮肤与Mod',
        sectionPvPSpecific: '⚔️ 突袭设置',
        sectionEnvironment: '🌍 ARK世界',
        sectionRagnarok: '🌋 ARK仙境',
        sectionValguero: '🏔️ ARK瓦尔盖罗',
        sectionFjordur: '❄️ ARK峯维尔',
        sectionGenesis: '🌐 Genesis模拟',
        sectionAberration: '🌌 ARK畸变',
        sectionExtinction: '🌍 ARK灭绝',
        sectionLostColony: '🚀 ARK失落殖民地',
        
        // Section titles (Lost Colony subsections)
        sectionLCBunker: '🏰 Tek掘体',
        sectionLCCryoHospital: '❄️ 冷冻医院站',
        sectionLCBloodforge: '🩸 血熔炉祭坛',
        sectionLCOutpost: '🏕️ 前哨站',
        sectionLCCreatures: '🦎 LC生物',
        
        // Section titles (Basic Server subsections)
        sectionServerIdentity: '🏷️ 服务器身份',
        sectionServerPorts: '🔌 连接与RCON',
        sectionServerMessages: '💾 MOTD与自动保存',
        sectionServerMods: '🧩 Mod与覆盖',
        
        // Section titles (Admin subsections)
        sectionAdminLists: '📋 白名单与封禁',
        sectionAdminSecurity: '🛡️ 反作弊与踢人',
        sectionAdminPerformance: '⚡ 服务器性能',
        
        // Section titles (Chat subsections)
        sectionChatVoice: '🔊 近距离语音',
        sectionChatFiltering: '🔇 全局聊天过滤',
        sectionChatLogging: '📝 聊天记录',
        
        // Section titles (Gameplay subsections)
        sectionGameplayCamera: '📷 第三人称与HUD',
        sectionGameplayRules: '📜 游戏规则',
        sectionGameplayTransfers: '🔄 杂项与传送',
        
        // Section titles (Dino subsections)
        sectionDinoDamage: '💥 生物战斗',
        sectionDinoFoodStamina: '🍖 生物饥饿',
        sectionDinoSpawns: '🥚 野生生成',
        sectionDinoSpecial: '🦅 飞行生物与泰坦',
        
        // Section titles (Structure subsections)
        sectionStructurePickup: '✋ 结构拾取',
        sectionStructureDamage: '🔨 突袭伤害',
        sectionStructureDecay: '⏳ 自动衰败',
        sectionStructurePlatforms: '🎪 平台鞍',
        sectionStructureDensity: '📊 建造限制',
        
        // Section titles (PvP subsections)
        sectionPvPModes: '🎯 PvP/PvE模式',
        sectionPvPOffline: '🛏️ 离线突袭保护',
        sectionPvPDecay: '🕐 ORP衰败',
        sectionPvPCombat: '🗡️ 战斗规则',
        sectionPvPTransfers: '🌐 跨ARK旅行',
        sectionPvPTribes: '👥 部落设置',
        
        // Section titles (Rates & Multipliers subsections)
        sectionRatesDifficulty: '⚙️ 难度和最高等级',
        sectionRatesTaming: '🦖 驯服倍率',
        sectionRatesHarvesting: '⛏️ 采集倍率',
        sectionRatesStacking: '📦 堆叠和资源设置',
        
        // Section titles (Player Settings subsections)
        sectionPlayerDamage: '💥 伤害和抗性',
        sectionPlayerSurvival: '🍖 食物和水消耗',
        sectionPlayerRecovery: '💚 生命和耐力恢复',
        sectionPlayerDisease: '🦠 疾病和危险',
        
        // Section titles (Cryopod subsections)
        sectionCryopodDeployment: '📤 部署和释放',
        sectionCryopodSickness: '🤢 冷冻舱疾病',
        sectionCryopodNerf: '⚠️ 限制和削弱',
        
        // Section titles (Environment & World subsections)
        sectionEnvironmentDayNight: '🌅 昼夜循环',
        sectionEnvironmentWeather: '🌤️ 天气和事件',
        sectionEnvironmentItems: '📦 物品和腐烂',
        sectionEnvironmentTransfers: '🔄 传送上传',
        sectionEnvironmentAdmin: '🛡️ 管理员与事件',
        
        // Section titles (Stats Multipliers subsections)
        sectionStatsPlayer: '🧑 玩家属性',
        sectionStatsTamed: '🦖 驯服恐龙 (每级)',
        sectionStatsTamedAdd: '✨ 驯服恐龙 (驯服后加成)',
        sectionStatsTamedAffinity: '💯 驯服恐龙 (驯服效率)',
        sectionStatsWild: '🌿 野生恐龙属性',
        
        // Section titles (Turrets & Generators subsections)
        sectionTurretsLimits: '🎯 炮塔限制',
        sectionTurretsGenerators: '⚡ 发电机限制',
        sectionTurretsPower: '🔋 电池与燃料',
        
        // Section titles (Genesis subsections)
        sectionGenesisMissions: '🎯 任务和Tek',
        sectionGenesisStore: '💎 六边形商店',
        sectionGenesisWorld: '🌍 世界效果',
        
        // Section titles (Breeding subsections)
        sectionBreedingMating: '💕 交配间隔',
        sectionBreedingEggs: '🥚 孕育与孕期',
        sectionBreedingFarming: '🌾 种植地与农业',
        sectionBreedingBabies: '🍼 成熟速度',
        sectionBreedingImprinting: '🤗 铭刻加成',
        
        // Section titles (Taming subsections)
        sectionTamingBasics: '⚙️ 驯服核心',
        sectionTamingFoodTorpor: '🍖 食物与眩晕',
        sectionTamingDamageLimits: '⚔️ 恐龙伤害与繁殖',
        
        // Section titles (Player subsections)
        sectionPlayerLeveling: '📈 升级与属性',
        sectionPlayerFeatures: '🎮 幸存者功能',
        
        // Section titles (Tribe subsections)
        sectionTribeManagement: '📋 部落管理',
        sectionTribeWarfare: '⚔️ 部落战争和友军伤害',
        
        // Section titles (Crafting subsections)
        sectionCraftingSkills: '🎯 制作速度',
        sectionCraftingEngrams: '📜 印痕点数',
        
        // Section titles (Loot subsections)
        sectionLootQuality: '💎 补给箱品质',
        sectionLootResources: '🌲 资源节点',
        
        // Section titles (Structures subsections - Game.ini)
        sectionStructuresPlacement: '📐 放置规则',
        sectionStructuresDamageDecay: '🔨 伤害与腐烂',
        
        // Section titles (PvP subsections - Game.ini)
        sectionPvPTimers: '⏰ PvE/PvP计时器',
        sectionPvPRespawn: '🔄 重生设置',
        
        // Section titles (Game.ini)
        sectionGameTaming: '🦖 驯服机制',
        sectionGamePlayer: '🧑 幸存者进度',
        sectionGameTribe: '👥 部落系统',
        sectionGameCrafting: '🔨 印痕与制造',
        sectionGameLoot: '🎁 补给箱与节点',
        sectionGameStructures: '🏠 建设与基地',
        sectionGameTurrets: '🔫 防御系统',
        sectionGamePvP: '⚔️ 突袭机制',
        sectionGameGenesis: '🌐 创世纪模拟',
        sectionGameEnvironment: '🌡️ ARK环境',
        sectionGameAdvanced: '⚙️ 专家设置',
        sectionBreeding: '🥚 繁殖与突变',
        sectionSpoiling: '🍖 腐坏与分解',
        sectionTower: '🗼 部落塔防御',
        sectionMemorial: '🏛️ 幸存者纪念碑',
        sectionStats: '📊 属性倍率',
        sectionXP: '⭐ XP与升级',
        sectionWorld: '🌍 世界规则',
        sectionResources: '💎 资源生成',
        sectionHarvesting: '🪓 采集率',
        sectionGamePlatform: '🚢 筏与平台',
        sectionGameMissions: '🎯 HLNA任务',
        sectionGameTribelog: '📜 部落日志事件',
        
        // Setting card
        defaultLabel: '默认:',
        enabled: '启用',
        disabled: '禁用',
        
        // Dialogs
        resetConfirmTitle: '重置所有设置',
        resetConfirmMessage: '您确定要将所有设置重置为默认值吗？此操作无法撤消。',
        resetConfirmYes: '是，全部重置',
        resetConfirmNo: '取消',
        
        // Notifications
        copiedToClipboard: '已复制到剪贴板！',
        importSuccess: '配置导入成功！',
        importError: '导入配置时出错',
        
        // Tooltip labels
        tooltipDescription: '功能说明',
        tooltipEffect: '更改值的效果',
        tooltipExample: '示例',
        tooltipSource: '来源:',
        
        // Guide card
        guideTitle: '📖 欢迎！以下是开始指南',
        guideStep1Title: '1. 查找并自定义您的设置',
        guideStep1Text: '浏览下方的各个分类区域，找到您想要调整的设置。在找特定内容？使用顶部的搜索栏——超级快速！当您将鼠标悬停在任何设置上时，会显示一个有用的提示，详细解释该设置的作用以及不同数值如何影响您的游戏体验。',
        guideStep2Title: '2. 尝试快速预设（可选）',
        guideStep2Text: '想要快速匹配官方服务器倍率？点击上方的预设按钮！可选择默认（1x）、进化活动（2x）、Smalltribes（4.5x/4x）或Arkpocalypse（5x）倍率。这些预设为您提供了绝佳的起点，之后您仍然可以微调任何单独的设置。',
        guideStep3Title: '3. 导出您的配置文件',
        guideStep3Text: '当您对设置满意后，是时候保存了！点击"下载ZIP"按钮，一次性获取GameUserSettings.ini和Game.ini两个文件。更喜欢复制粘贴？使用单独的复制按钮直接获取每个文件的内容。',
        guideStep4Title: '4. 安装到您的服务器',
        guideStep4Text: '对于自建服务器，将下载的文件放入服务器的配置文件夹（路径如下所示）。使用Nitrado、G-Portal或其他托管服务商？只需将设置复制粘贴到他们的网页配置面板中——就是这么简单！',
        guideTip: '💡 专业提示：不用担心丢失您的工作——所有设置都会自动保存在浏览器中！您可以关闭此页面，稍后再回来继续。已有配置文件？使用导入功能加载它们并快速编辑。',
        guidePathSinglePlayer: '📁 单人游戏路径：',
        guidePathDedicated: '📁 专用服务器路径：',
        guideClose: '开始吧！',
        guideDontShow: '不再显示此内容',
        
        // Language selector
        languageLabel: '🌐',
    },
    
    ja: {
        // Page title
        pageTitle: 'ARK: Survival Ascended - サーバー設定ジェネレーター',
        
        // Header
        headerTitle: '🦖 ARK: Survival Ascended',
        headerSubtitle: 'サーバー設定ジェネレーター',
        
        // Loading
        loadingText: '設定を読み込んでいます...',
        
        // Presets section
        presetsTitle: '📋 公式サーバープリセット',
        preset1xName: '1x デフォルト',
        preset1xDesc: '公式レート',
        preset2xName: '2x レート',
        preset2xDesc: 'エボリューションイベント',
        preset3xName: '3x レート',
        preset3xDesc: 'ブースト',
        preset4xName: '4.5x / 4x レート',
        preset4xDesc: 'Smalltribes',
        preset5xName: '5x レート',
        preset5xDesc: 'Arkpocalypse',
        
        // Export section
        exportTitle: '📤 設定をエクスポート',
        bothFiles: '両方のファイル',
        downloadZip: 'ZIP をダウンロード',
        download: 'ダウンロード',
        copy: 'コピー',
        
        // Import section
        importTitle: '📥 設定をインポート',
        dropZoneText: 'INI ファイルをここにドラッグ＆ドロップ',
        dropZoneSubtext: '両方のファイルまたは ZIP をドロップ • クリックして参照',
        uploadZip: 'ZIP をアップロード',
        upload: 'アップロード',
        clearImport: '✕ クリア',
        
        // Controls
        autoSaved: '自動保存済み',
        saving: '保存中...',
        saved: '✓ 保存済み',
        resetToDefaults: '↺ リセット',
        searchPlaceholder: '設定を検索...',
        
        // Section titles (GameUserSettings.ini)
        sectionBasic: '🖥️ ARKサーバーコア',
        sectionAdmin: '🔐 管理者コントロール',
        sectionChat: '💬 サバイバー通信',
        sectionGameplay: '🎮 サバイバルルール',
        sectionRates: '📈 ARK倍率',
        sectionPlayer: '👤 サバイバー設定',
        sectionDino: '🦕 クリーチャー設定',
        sectionStructure: '🏠 ベース建設',
        sectionPvP: '⚔️ トライブ戦争',
        sectionBlueprints: '📜 ブループリントとルートボックス',
        sectionCryopod: '🧊 クライオポッドストレージ',
        sectionTameLimit: '📊 テイム個体数',
        sectionCreatures: '🐾 クリーチャー行動',
        sectionCosmetics: '🎨 スキンとMOD',
        sectionPvPSpecific: '⚔️ レイド設定',
        sectionEnvironment: '🌍 ARKワールド',
        sectionRagnarok: '🌋 ARKラグナロク',
        sectionValguero: '🏔️ ARKヴァルゲロ',
        sectionFjordur: '❄️ ARKフィヨルドゥル',
        sectionGenesis: '🌐 ジェネシスシミュレーション',
        sectionAberration: '🌌 ARKアベレーション',
        sectionExtinction: '🌍 ARKエクスティンクション',
        sectionLostColony: '🚀 ARKロストコロニー',
        
        // Section titles (Lost Colony subsections)
        sectionLCBunker: '🏰 Tekバンカー',
        sectionLCCryoHospital: '❄️ クライオホスピタルステーション',
        sectionLCBloodforge: '🩸 ブラッドフォージ祢壇',
        sectionLCOutpost: '🏕️ 前線アウトポスト',
        sectionLCCreatures: '🦎 LCクリーチャー',
        
        // Section titles (Basic Server subsections)
        sectionServerIdentity: '🏷️ サーバーアイデンティティ',
        sectionServerPorts: '🔌 接続とRCON',
        sectionServerMessages: '💾 MOTDとオートセーブ',
        sectionServerMods: '🧩 Modとオーバーライド',
        
        // Section titles (Admin subsections)
        sectionAdminLists: '📋 ホワイトリストとBAN',
        sectionAdminSecurity: '🛡️ アンチチートとキック',
        sectionAdminPerformance: '⚡ サーバーパフォーマンス',
        
        // Section titles (Chat subsections)
        sectionChatVoice: '🔊 近接ボイス',
        sectionChatFiltering: '🔇 グローバルチャットフィルター',
        sectionChatLogging: '📝 チャット履歴',
        
        // Section titles (Gameplay subsections)
        sectionGameplayCamera: '📷 サードパーソンとHUD',
        sectionGameplayRules: '📜 ゲームルール',
        sectionGameplayTransfers: '🔄 その他と転送',
        
        // Section titles (Dino subsections)
        sectionDinoDamage: '💥 クリーチャー戦闘',
        sectionDinoFoodStamina: '🍖 クリーチャー空腹',
        sectionDinoSpawns: '🥚 野生スポーン',
        sectionDinoSpecial: '🦅 フライヤーとタイタン',
        
        // Section titles (Structure subsections)
        sectionStructurePickup: '✋ 建造物ピックアップ',
        sectionStructureDamage: '🔨 レイドダメージ',
        sectionStructureDecay: '⏳ オート崩壊',
        sectionStructurePlatforms: '🎪 プラットフォームサドル',
        sectionStructureDensity: '📊 建築制限',
        
        // Section titles (PvP subsections)
        sectionPvPModes: '🎯 PvP/PvEモード',
        sectionPvPOffline: '🛏️ オフラインレイド保護',
        sectionPvPDecay: '🕐 ORP崩壊',
        sectionPvPCombat: '🗡️ 戦闘ルール',
        sectionPvPTransfers: '🌐 クロスARK旅行',
        sectionPvPTribes: '👥 トライブ設定',
        
        // Section titles (Rates & Multipliers subsections)
        sectionRatesDifficulty: '⚙️ 難易度と野生最大レベル',
        sectionRatesTaming: '🦖 テイム速度',
        sectionRatesHarvesting: '⛏️ 採取量',
        sectionRatesStacking: '📦 スタックサイズと重量',
        
        // Section titles (Player Settings subsections)
        sectionPlayerDamage: '💥 サバイバー戦闘',
        sectionPlayerSurvival: '🍖 空腹と渇き',
        sectionPlayerRecovery: '💚 再生',
        sectionPlayerDisease: '🦠 沼地熱と危険',
        
        // Section titles (Cryopod subsections)
        sectionCryopodDeployment: '📤 クライオ展開',
        sectionCryopodSickness: '🤢 クライオクールダウン',
        sectionCryopodNerf: '⚠️ クライオ制限',
        
        // Section titles (Environment & World subsections)
        sectionEnvironmentDayNight: '🌅 昼夜サイクル',
        sectionEnvironmentWeather: '🌤️ 天候とイベント',
        sectionEnvironmentItems: '📦 腐敗タイマー',
        sectionEnvironmentTransfers: '🔄 転送アップロード',
        sectionEnvironmentAdmin: '🛡️ 管理者とイベント',
        
        // Section titles (Stats Multipliers subsections)
        sectionStatsPlayer: '🧑 サバイバーステータス',
        sectionStatsTamed: '🦖 テイム毎レベル',
        sectionStatsTamedAdd: '✨ テイム後ボーナス',
        sectionStatsTamedAffinity: '💯 テイム効率',
        sectionStatsWild: '🌿 野生クリーチャーステータス',
        
        // Section titles (Turrets & Generators subsections)
        sectionTurretsLimits: '🎯 オートタレット制限',
        sectionTurretsGenerators: '⚡ ジェネレーター制限',
        sectionTurretsPower: '🔋 バッテリーと燃料',
        
        // Section titles (Genesis subsections)
        sectionGenesisMissions: '🎯 HLNAミッション',
        sectionGenesisStore: '💎 ヘキサゴン交換',
        sectionGenesisWorld: '🌍 シミュレーションエフェクト',
        
        // Section titles (Breeding subsections)
        sectionBreedingMating: '💕 交配間隔',
        sectionBreedingEggs: '🥚 孕卵と妊娠',
        sectionBreedingFarming: '🌾 作物畑と農業',
        sectionBreedingBabies: '🍼 成熟速度',
        sectionBreedingImprinting: '🤗 刷り込みボーナス',
        
        // Section titles (Taming subsections)
        sectionTamingBasics: '⚙️ テイムコア',
        sectionTamingFoodTorpor: '🍖 食料と気絶値',
        sectionTamingDamageLimits: '⚔️ 恐竜ダメージと繁殖',
        
        // Section titles (Player subsections)
        sectionPlayerLeveling: '📈 レベルアップとステータス',
        sectionPlayerFeatures: '🎮 サバイバー機能',
        
        // Section titles (Tribe subsections)
        sectionTribeManagement: '📋 トライブ管理',
        sectionTribeWarfare: '⚔️ トライブ戦争とFF',
        
        // Section titles (Crafting subsections)
        sectionCraftingSkills: '🎯 製作速度',
        sectionCraftingEngrams: '📜 エングラムポイント',
        
        // Section titles (Loot subsections)
        sectionLootQuality: '💎 サプライドロップ品質',
        sectionLootResources: '🌲 リソースノード',
        
        // Section titles (Structures subsections)
        sectionStructuresPlacement: '📐 配置ルール',
        sectionStructuresDamageDecay: '🔨 ダメージと腐敗',
        
        // Section titles (PvP subsections)
        sectionPvPTimers: '⏰ PvE/PvPタイマー',
        sectionPvPRespawn: '🔄 リスポーン設定',
        
        // Section titles (Game.ini)
        sectionGameTaming: '🦖 テイムメカニクス',
        sectionGamePlayer: '🧑 サバイバー進行',
        sectionGameTribe: '👥 トライブシステム',
        sectionGameCrafting: '🔨 エングラムとクラフト',
        sectionGameLoot: '🎁 サプライドロップとノード',
        sectionGameStructures: '🏠 建設とベース',
        sectionGameTurrets: '🔫 防衛システム',
        sectionGamePvP: '⚔️ レイドメカニクス',
        sectionGameGenesis: '🌐 ジェネシスシミュレーション',
        sectionGameEnvironment: '🌡️ ARK環境',
        sectionGameAdvanced: '⚙️ エキスパート設定',
        sectionBreeding: '🥚 ブリーディングと突然変異',
        sectionSpoiling: '🍖 腐敗と分解',
        sectionTower: '🗼 トライブタワー防衛',
        sectionMemorial: '🏛️ サバイバーメモリアル',
        sectionStats: '📊 ステータス倍率',
        sectionXP: '⭐ XPとレベルアップ',
        sectionWorld: '🌍 ワールドルール',
        sectionResources: '💎 リソーススポーン',
        sectionHarvesting: '🪓 採取レート',
        sectionGamePlatform: '🚢 イカダとプラットフォーム',
        sectionGameMissions: '🎯 HLNAミッション',
        sectionGameTribelog: '📜 トライブログイベント',
        
        // Setting card
        defaultLabel: 'デフォルト:',
        enabled: '有効',
        disabled: '無効',
        
        // Dialogs
        resetConfirmTitle: 'すべての設定をリセット',
        resetConfirmMessage: 'すべての設定をデフォルト値にリセットしてもよろしいですか？この操作は取り消せません。',
        resetConfirmYes: 'はい、すべてリセット',
        resetConfirmNo: 'キャンセル',
        
        // Notifications
        copiedToClipboard: 'クリップボードにコピーしました！',
        importSuccess: '設定のインポートに成功しました！',
        importError: '設定のインポートエラー',
        
        // Tooltip labels
        tooltipDescription: '機能説明',
        tooltipEffect: '値変更の効果',
        tooltipExample: '例',
        tooltipSource: 'ソース:',
        
        // Guide card
        guideTitle: '📖 ようこそ！使い方ガイド',
        guideStep1Title: '1. 設定を見つけてカスタマイズ',
        guideStep1Text: '下にある整理されたセクションをスクロールして、変更したい設定を見つけてください。特定の設定をお探しですか？上部の検索バーを使えば超高速で見つかります！設定にマウスを合わせると、その設定が何をするのか、異なる値がゲームにどう影響するかを詳しく説明するツールチップが表示されます。',
        guideStep2Title: '2. クイックプリセットを試す（オプション）',
        guideStep2Text: '公式サーバーのレートに素早く合わせたいですか？上のプリセットボタンをクリック！デフォルト（1x）、エボリューションイベント（2x）、Smalltribes（4.5x/4x）、Arkpocalypse（5x）から選べます。これらは素晴らしい出発点となり、その後で個別の設定を微調整することもできます。',
        guideStep3Title: '3. 設定ファイルをエクスポート',
        guideStep3Text: '設定に満足したら、保存する時です！「ZIPをダウンロード」をクリックすると、GameUserSettings.iniとGame.iniを一つのパッケージで取得できます。コピー＆ペーストがお好みですか？個別のコピーボタンを使って、各ファイルの内容を直接取得できます。',
        guideStep4Title: '4. サーバーにインストール',
        guideStep4Text: '自己ホスティングサーバーの場合、ダウンロードしたファイルをサーバーの設定フォルダに配置します（パスは下に表示）。Nitrado、G-Portal、または他のホスティングプロバイダーをお使いですか？設定をウェブ設定パネルにコピー＆ペーストするだけ——とても簡単です！',
        guideTip: '💡 プロのヒント：作業を失う心配はありません——すべての設定はブラウザに自動保存されます！このページを閉じて後で戻ってきても大丈夫です。既存の設定ファイルをお持ちですか？インポート機能を使って読み込み、素早く編集できます。',
        guidePathSinglePlayer: '📁 シングルプレイヤーパス：',
        guidePathDedicated: '📁 専用サーバーパス：',
        guideClose: 'さあ始めよう！',
        guideDontShow: 'これを再度表示しない',
        
        // Language selector
        languageLabel: '🌐',
    },
    
    ko: {
        // Page title
        pageTitle: 'ARK: Survival Ascended - 서버 설정 생성기',
        
        // Header
        headerTitle: '🦖 ARK: Survival Ascended',
        headerSubtitle: '서버 설정 생성기',
        
        // Loading
        loadingText: '설정 로딩 중...',
        
        // Presets section
        presetsTitle: '📋 공식 서버 프리셋',
        preset1xName: '1x 기본',
        preset1xDesc: '공식 배율',
        preset2xName: '2x 배율',
        preset2xDesc: '에볼루션 이벤트',
        preset3xName: '3x 배율',
        preset3xDesc: '부스트',
        preset4xName: '4.5x / 4x 배율',
        preset4xDesc: 'Smalltribes',
        preset5xName: '5x 배율',
        preset5xDesc: 'Arkpocalypse',
        
        // Export section
        exportTitle: '📤 설정 내보내기',
        bothFiles: '두 파일 모두',
        downloadZip: 'ZIP 다운로드',
        download: '다운로드',
        copy: '복사',
        
        // Import section
        importTitle: '📥 설정 가져오기',
        dropZoneText: 'INI 파일을 여기에 드래그 앤 드롭',
        dropZoneSubtext: '두 파일을 동시에 또는 ZIP을 드롭 • 클릭하여 찾아보기',
        uploadZip: 'ZIP 업로드',
        upload: '업로드',
        clearImport: '✕ 지우기',
        
        // Controls
        autoSaved: '자동 저장됨',
        saving: '저장 중...',
        saved: '✓ 저장됨',
        resetToDefaults: '↺ 초기화',
        searchPlaceholder: '설정 검색...',
        
        // Section titles (GameUserSettings.ini)
        sectionBasic: '🖥️ ARK 서버 코어',
        sectionAdmin: '🔐 관리자 제어',
        sectionChat: '💬 생존자 통신',
        sectionGameplay: '🎮 생존 규칙',
        sectionRates: '📈 ARK 배율',
        sectionPlayer: '👤 생존자 설정',
        sectionDino: '🦕 생물 설정',
        sectionStructure: '🏠 기지 건설',
        sectionPvP: '⚔️ 부족 전쟁',
        sectionBlueprints: '📜 블루프린트와 보급함',
        sectionCryopod: '🧊 크라이오포드 저장소',
        sectionTameLimit: '📊 테이밍 개체수',
        sectionCreatures: '🐾 생물 행동',
        sectionCosmetics: '🎨 스킨과 모드',
        sectionPvPSpecific: '⚔️ 레이드 설정',
        sectionEnvironment: '🌍 ARK 월드',
        sectionRagnarok: '🌋 ARK 라그나로크',
        sectionValguero: '🏔️ ARK 발게로',
        sectionFjordur: '❄️ ARK 피오르두르',
        sectionGenesis: '🌐 제네시스 시뮬레이션',
        sectionAberration: '🌌 ARK 애버레이션',
        sectionExtinction: '🌍 ARK 익스팅션',
        sectionLostColony: '🚀 ARK 로스트 콜로니',
        
        // Section titles (Lost Colony subsections)
        sectionLCBunker: '🏰 Tek 벙커',
        sectionLCCryoHospital: '❄️ 크라이오호스피탈 스테이션',
        sectionLCBloodforge: '🩸 블러드포지 제단',
        sectionLCOutpost: '🏕️ 전방 전초기지',
        sectionLCCreatures: '🦎 LC 생물',
        
        // Section titles (Basic Server subsections)
        sectionServerIdentity: '🏷️ 서버 아이덴티티',
        sectionServerPorts: '🔌 연결 및 RCON',
        sectionServerMessages: '💾 MOTD 및 자동 저장',
        sectionServerMods: '🧩 모드 및 오버라이드',
        
        // Section titles (Admin subsections)
        sectionAdminLists: '📋 화이트리스트 및 밴',
        sectionAdminSecurity: '🛡️ 안티치트 및 킥',
        sectionAdminPerformance: '⚡ 서버 성능',
        
        // Section titles (Chat subsections)
        sectionChatVoice: '🔊 근접 보이스',
        sectionChatFiltering: '🔇 글로벌 채팅 필터',
        sectionChatLogging: '📝 채팅 기록',
        
        // Section titles (Gameplay subsections)
        sectionGameplayCamera: '📷 3인칭 및 HUD',
        sectionGameplayRules: '📜 게임 규칙',
        sectionGameplayTransfers: '🔄 기타 및 전송',
        
        // Section titles (Dino subsections)
        sectionDinoDamage: '💥 생물 전투',
        sectionDinoFoodStamina: '🍖 생물 배고픔',
        sectionDinoSpawns: '🥚 야생 스폰',
        sectionDinoSpecial: '🦅 비행 생물 및 타이탄',
        
        // Section titles (Structure subsections)
        sectionStructurePickup: '✋ 건물 픽업',
        sectionStructureDamage: '🔨 레이드 피해',
        sectionStructureDecay: '⏳ 자동 부패',
        sectionStructurePlatforms: '🎪 플랫폼 안장',
        sectionStructureDensity: '📊 건축 제한',
        
        // Section titles (PvP subsections)
        sectionPvPModes: '🎯 PvP/PvE 모드',
        sectionPvPOffline: '🛏️ 오프라인 레이드 보호',
        sectionPvPDecay: '🕐 ORP 부패',
        sectionPvPCombat: '🗡️ 전투 규칙',
        sectionPvPTransfers: '🌐 크로스-ARK 여행',
        sectionPvPTribes: '👥 부족 설정',
        
        // Section titles (Rates & Multipliers subsections)
        sectionRatesDifficulty: '⚙️ 난이도 및 야생 최대 레벨',
        sectionRatesTaming: '🦖 테이밍 속도',
        sectionRatesHarvesting: '⛏️ 채집 양',
        sectionRatesStacking: '📦 스택 크기 및 무게',
        
        // Section titles (Player Settings subsections)
        sectionPlayerDamage: '💥 생존자 전투',
        sectionPlayerSurvival: '🍖 배고픔 및 갈증',
        sectionPlayerRecovery: '💚 재생',
        sectionPlayerDisease: '🦠 늘열 및 위험',
        
        // Section titles (Cryopod subsections)
        sectionCryopodDeployment: '📤 크라이오 배치',
        sectionCryopodSickness: '🤢 크라이오 쿨다운',
        sectionCryopodNerf: '⚠️ 크라이오 제한',
        
        // Section titles (Environment & World subsections)
        sectionEnvironmentDayNight: '🌅 주야 주기',
        sectionEnvironmentWeather: '🌤️ 날씨 및 이벤트',
        sectionEnvironmentItems: '📦 부패 타이머',
        sectionEnvironmentTransfers: '🔄 전송 업로드',
        sectionEnvironmentAdmin: '🛡️ 관리자 및 이벤트',
        
        // Section titles (Stats Multipliers subsections)
        sectionStatsPlayer: '🧑 생존자 스탯',
        sectionStatsTamed: '🦖 테이밍 레벨당',
        sectionStatsTamedAdd: '✨ 테이밍 후 보너스',
        sectionStatsTamedAffinity: '💯 테이밍 효율',
        sectionStatsWild: '🌿 야생 생물 스탯',
        
        // Section titles (Turrets & Generators subsections)
        sectionTurretsLimits: '🎯 자동 터렛 제한',
        sectionTurretsGenerators: '⚡ 발전기 제한',
        sectionTurretsPower: '🔋 배터리 및 연료',
        
        // Section titles (Genesis subsections)
        sectionGenesisMissions: '🎯 HLNA 미션',
        sectionGenesisStore: '💎 헥사곤 교환',
        sectionGenesisWorld: '🌍 시뮬레이션 효과',
        
        // Section titles (Breeding subsections)
        sectionBreedingMating: '💕 교배 간격',
        sectionBreedingEggs: '🥚 부화 및 임신',
        sectionBreedingFarming: '🌾 작물밭 및 농업',
        sectionBreedingBabies: '🍼 성숙 속도',
        sectionBreedingImprinting: '🤗 각인 보너스',
        
        // Section titles (Taming subsections)
        sectionTamingBasics: '⚙️ 테이밍 코어',
        sectionTamingFoodTorpor: '🍖 음식 및 기절',
        sectionTamingDamageLimits: '⚔️ 공룡 피해 및 번식',
        
        // Section titles (Player subsections)
        sectionPlayerLeveling: '📈 레벨업 및 스탯',
        sectionPlayerFeatures: '🎮 생존자 기능',
        
        // Section titles (Tribe subsections)
        sectionTribeManagement: '📋 부족 관리',
        sectionTribeWarfare: '⚔️ 부족 전쟁 및 아군 피해',
        
        // Section titles (Crafting subsections)
        sectionCraftingSkills: '🎯 제작 속도',
        sectionCraftingEngrams: '📜 엔그램 포인트',
        
        // Section titles (Loot subsections)
        sectionLootQuality: '💎 보급함 품질',
        sectionLootResources: '🌲 자원 노드',
        
        // Section titles (Structures subsections)
        sectionStructuresPlacement: '📐 배치 규칙',
        sectionStructuresDamageDecay: '🔨 피해 및 부패',
        
        // Section titles (PvP subsections)
        sectionPvPTimers: '⏰ PvE/PvP 타이머',
        sectionPvPRespawn: '🔄 리스폰 설정',
        
        // Section titles (Game.ini)
        sectionGameTaming: '🦖 테이밍 메커니즘',
        sectionGamePlayer: '🧑 생존자 진행',
        sectionGameTribe: '👥 부족 시스템',
        sectionGameCrafting: '🔨 엔그램 및 제작',
        sectionGameLoot: '🎁 보급함 및 노드',
        sectionGameStructures: '🏠 건설 및 기지',
        sectionGameTurrets: '🔫 방어 시스템',
        sectionGamePvP: '⚔️ 레이드 메커니즘',
        sectionGameGenesis: '🌐 제네시스 시뮬레이션',
        sectionGameEnvironment: '🌡️ ARK 환경',
        sectionGameAdvanced: '⚙️ 전문가 설정',
        sectionBreeding: '🥚 브리딩 및 돌연변이',
        sectionSpoiling: '🍖 부패 및 분해',
        sectionTower: '🗼 부족 타워 방어',
        sectionMemorial: '🏛️ 생존자 기념비',
        sectionStats: '📊 스탯 배율',
        sectionXP: '⭐ XP 및 레벨업',
        sectionWorld: '🌍 월드 규칙',
        sectionResources: '💎 자원 스폰',
        sectionHarvesting: '🪓 채집 비율',
        sectionGamePlatform: '🚢 뗏목 및 플랫폼',
        sectionGameMissions: '🎯 HLNA 미션',
        sectionGameTribelog: '📜 부족 로그 이벤트',
        
        // Setting card
        defaultLabel: '기본값:',
        enabled: '활성화',
        disabled: '비활성화',
        
        // Dialogs
        resetConfirmTitle: '모든 설정 초기화',
        resetConfirmMessage: '모든 설정을 기본값으로 초기화하시겠습니까? 이 작업은 취소할 수 없습니다.',
        resetConfirmYes: '예, 모두 초기화',
        resetConfirmNo: '취소',
        
        // Notifications
        copiedToClipboard: '클립보드에 복사되었습니다!',
        importSuccess: '설정을 성공적으로 가져왔습니다!',
        importError: '설정 가져오기 오류',
        
        // Tooltip labels
        tooltipDescription: '기능 설명',
        tooltipEffect: '값 변경 효과',
        tooltipExample: '예시',
        tooltipSource: '출처:',
        
        // Guide card
        guideTitle: '📖 환영합니다! 시작하는 방법입니다',
        guideStep1Title: '1. 설정 찾기 및 커스터마이즈',
        guideStep1Text: '아래의 정리된 섹션들을 스크롤하여 수정하고 싶은 설정을 찾아보세요. 특정 설정을 찾고 계신가요? 상단의 검색창을 사용하세요 - 매우 빠릅니다! 설정 위에 마우스를 올리면 해당 설정이 무엇을 하는지, 다양한 값이 게임에 어떤 영향을 미치는지 자세히 설명하는 툴팁이 나타납니다.',
        guideStep2Title: '2. 빠른 프리셋 사용해보기 (선택사항)',
        guideStep2Text: '공식 서버 배율을 빠르게 적용하고 싶으신가요? 위의 프리셋 버튼 중 하나를 클릭하세요! 기본(1x), 에볼루션 이벤트(2x), Smalltribes(4.5x/4x), Arkpocalypse(5x) 중에서 선택할 수 있습니다. 이것들은 훌륭한 시작점을 제공하며, 이후에도 개별 설정을 미세 조정할 수 있습니다.',
        guideStep3Title: '3. 설정 파일 내보내기',
        guideStep3Text: '설정이 만족스러우면 저장할 시간입니다! "ZIP 다운로드" 버튼을 클릭하여 GameUserSettings.ini와 Game.ini를 한 번에 받으세요. 복사하여 붙여넣기를 선호하시나요? 개별 복사 버튼을 사용하여 각 파일의 내용을 직접 가져올 수 있습니다.',
        guideStep4Title: '4. 서버에 설치',
        guideStep4Text: '자체 호스팅 서버의 경우, 다운로드한 파일을 서버의 설정 폴더에 넣으세요 (경로는 아래 표시). Nitrado, G-Portal 또는 다른 호스팅 제공업체를 사용하시나요? 웹 기반 설정 패널에 설정을 복사하여 붙여넣기만 하면 됩니다 - 정말 간단해요!',
        guideTip: '💡 프로 팁: 작업을 잃어버릴 걱정 마세요 - 모든 설정이 브라우저에 자동 저장됩니다! 이 페이지를 닫았다가 나중에 다시 돌아와도 됩니다. 이미 설정 파일이 있으신가요? 가져오기 기능을 사용하여 불러온 후 빠르게 편집하세요.',
        guidePathSinglePlayer: '📁 싱글플레이어 경로:',
        guidePathDedicated: '📁 전용 서버 경로:',
        guideClose: '시작하기!',
        guideDontShow: '이것을 다시 표시하지 않음',
        
        // Language selector
        languageLabel: '🌐',
    },
};

// Available languages for the selector
const availableLanguages = {
    en: 'English',
    es: 'Español',
    fr: 'Français',
    de: 'Deutsch',
    pt: 'Português',
    ru: 'Русский',
    zh: '中文',
    ja: '日本語',
    ko: '한국어',
};

// Section ID to translation key mapping
const sectionTranslationMap = {
    // GameUserSettings.ini sections
    'server-basic': 'sectionBasic',
    'server-admin': 'sectionAdmin',
    'server-chat': 'sectionChat',
    'server-gameplay': 'sectionGameplay',
    'server-rates': 'sectionRates',
    'server-player': 'sectionPlayer',
    'server-dino': 'sectionDino',
    'server-structure': 'sectionStructure',
    'server-pvp': 'sectionPvP',
    'server-blueprints': 'sectionBlueprints',
    'server-cryopod': 'sectionCryopod',
    'server-tamelimit': 'sectionTameLimit',
    'server-cosmetics': 'sectionCosmetics',
    'server-pvp-specific': 'sectionPvPSpecific',
    'server-environment': 'sectionEnvironment',
    'server-ragnarok': 'sectionRagnarok',
    'server-valguero': 'sectionValguero',
    'server-fjordur': 'sectionFjordur',
    'server-genesis': 'sectionGenesis',
    'server-aberration': 'sectionAberration',
    'server-extinction': 'sectionExtinction',
    'server-lostcolony': 'sectionLostColony',
    // Lost Colony subsections
    'lostcolony-bunker': 'sectionLCBunker',
    'lostcolony-cryohospital': 'sectionLCCryoHospital',
    'lostcolony-bloodforge': 'sectionLCBloodforge',
    'lostcolony-outpost': 'sectionLCOutpost',
    'lostcolony-creatures': 'sectionLCCreatures',
    // Basic Server subsections
    'server-identity': 'sectionServerIdentity',
    'server-ports': 'sectionServerPorts',
    'server-messages': 'sectionServerMessages',
    'server-mods': 'sectionServerMods',
    // Admin subsections
    'admin-lists': 'sectionAdminLists',
    'admin-security': 'sectionAdminSecurity',
    'admin-performance': 'sectionAdminPerformance',
    // Chat subsections
    'chat-voice': 'sectionChatVoice',
    'chat-filtering': 'sectionChatFiltering',
    'chat-logging': 'sectionChatLogging',
    // Gameplay subsections
    'gameplay-camera': 'sectionGameplayCamera',
    'gameplay-rules': 'sectionGameplayRules',
    'gameplay-transfers': 'sectionGameplayTransfers',
    // Dino subsections
    'dino-damage': 'sectionDinoDamage',
    'dino-food-stamina': 'sectionDinoFoodStamina',
    'dino-spawns': 'sectionDinoSpawns',
    'dino-special': 'sectionDinoSpecial',
    // Structure subsections
    'structure-pickup': 'sectionStructurePickup',
    'structure-damage': 'sectionStructureDamage',
    'structure-decay': 'sectionStructureDecay',
    'structure-platforms': 'sectionStructurePlatforms',
    'structure-density': 'sectionStructureDensity',
    // PvP subsections
    'pvp-modes': 'sectionPvPModes',
    'pvp-offline': 'sectionPvPOffline',
    'pvp-decay': 'sectionPvPDecay',
    'pvp-combat': 'sectionPvPCombat',
    'pvp-transfers': 'sectionPvPTransfers',
    'pvp-tribes': 'sectionPvPTribes',
    // Rates & Multipliers subsections
    'rates-difficulty': 'sectionRatesDifficulty',
    'rates-taming': 'sectionRatesTaming',
    'rates-harvesting': 'sectionRatesHarvesting',
    'rates-stacking': 'sectionRatesStacking',
    // Player Settings subsections
    'player-damage': 'sectionPlayerDamage',
    'player-survival': 'sectionPlayerSurvival',
    'player-recovery': 'sectionPlayerRecovery',
    'player-disease': 'sectionPlayerDisease',
    // Cryopod subsections
    'cryopod-deployment': 'sectionCryopodDeployment',
    'cryopod-sickness': 'sectionCryopodSickness',
    'cryopod-nerf': 'sectionCryopodNerf',
    // Environment & World subsections
    'environment-daynight': 'sectionEnvironmentDayNight',
    'environment-weather': 'sectionEnvironmentWeather',
    'environment-items': 'sectionEnvironmentItems',
    'environment-transfers': 'sectionEnvironmentTransfers',
    'environment-admin': 'sectionEnvironmentAdmin',
    // Stats Multipliers subsections
    'stats-player': 'sectionStatsPlayer',
    'stats-tamed': 'sectionStatsTamed',
    'stats-tamed-add': 'sectionStatsTamedAdd',
    'stats-tamed-affinity': 'sectionStatsTamedAffinity',
    'stats-wild': 'sectionStatsWild',
    // Turrets & Generators subsections
    'turrets-limits': 'sectionTurretsLimits',
    'turrets-generators': 'sectionTurretsGenerators',
    'turrets-power': 'sectionTurretsPower',
    // Genesis subsections
    'genesis-missions': 'sectionGenesisMissions',
    'genesis-store': 'sectionGenesisStore',
    'genesis-world': 'sectionGenesisWorld',
    // Breeding subsections
    'breeding-mating': 'sectionBreedingMating',
    'breeding-eggs': 'sectionBreedingEggs',
    'breeding-farming': 'sectionBreedingFarming',
    'breeding-babies': 'sectionBreedingBabies',
    'breeding-imprinting': 'sectionBreedingImprinting',
    // Taming subsections
    'taming-basics': 'sectionTamingBasics',
    'taming-food-torpor': 'sectionTamingFoodTorpor',
    'taming-damage-limits': 'sectionTamingDamageLimits',
    // Player subsections
    'player-leveling': 'sectionPlayerLeveling',
    'player-features': 'sectionPlayerFeatures',
    // Tribe subsections
    'tribe-management': 'sectionTribeManagement',
    'tribe-warfare': 'sectionTribeWarfare',
    // Crafting subsections
    'crafting-skills': 'sectionCraftingSkills',
    'crafting-engrams': 'sectionCraftingEngrams',
    // Loot subsections
    'loot-quality': 'sectionLootQuality',
    'loot-resources': 'sectionLootResources',
    // Structures subsections (Game.ini)
    'structures-placement': 'sectionStructuresPlacement',
    'structures-damage-decay': 'sectionStructuresDamageDecay',
    // PvP subsections (Game.ini)
    'pvp-timers': 'sectionPvPTimers',
    'pvp-respawn': 'sectionPvPRespawn',
    // Game.ini sections
    'game-taming': 'sectionGameTaming',
    'game-player': 'sectionGamePlayer',
    'game-tribe': 'sectionGameTribe',
    'game-crafting': 'sectionGameCrafting',
    'game-loot': 'sectionGameLoot',
    'game-structures': 'sectionGameStructures',
    'game-turrets': 'sectionGameTurrets',
    'game-pvp': 'sectionGamePvP',
    'game-genesis': 'sectionGameGenesis',
    'game-environment': 'sectionGameEnvironment',
    'game-advanced': 'sectionGameAdvanced',
    'game-breeding': 'sectionBreeding',
    'game-spoiling': 'sectionSpoiling',
    'game-stats': 'sectionStats',
    'game-xp': 'sectionXP',
    'game-world': 'sectionWorld',
    'game-resources': 'sectionResources',
    'game-harvesting': 'sectionHarvesting',
    'game-platform': 'sectionGamePlatform',
    'game-missions': 'sectionGameMissions',
    'game-tribelog': 'sectionGameTribelog',
};

// Current language
let currentLanguage = 'en';

// Detect browser language (non-invasive)
function detectLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    const langCode = browserLang.split('-')[0].toLowerCase();
    
    // Check if we support this language
    if (translations[langCode]) {
        return langCode;
    }
    
    return 'en'; // Default to English
}

// Get translation
function t(key) {
    const lang = translations[currentLanguage] || translations.en;
    return lang[key] || translations.en[key] || key;
}

// Set language
function setLanguage(langCode) {
    if (translations[langCode]) {
        currentLanguage = langCode;
        localStorage.setItem('arkConfigLang', langCode);
        // Reload page to ensure all text updates properly
        // LocalStorage is already saved, so language persists across reload
        location.reload();
    }
}

// Helper function to find a setting by name in the settings data
function findSettingByName(name) {
    // Check if settingsData exists (loaded from settings-data.js)
    if (typeof settingsData === 'undefined') return null;
    
    // Search in GameUserSettings.ini sections
    for (const section of settingsData.gameUserSettings || []) {
        const setting = section.settings.find(s => s.name === name);
        if (setting) return setting;
    }
    
    // Search in Game.ini sections
    for (const section of settingsData.game || []) {
        const setting = section.settings.find(s => s.name === name);
        if (setting) return setting;
    }
    
    return null;
}

// Helper function to get effect text from a setting (mirrors getEffectText in app.js)
function getEffectTextFromSetting(setting) {
    // Use the main getEffectText function if available (from app.js)
    if (typeof getEffectText === 'function') {
        return getEffectText(setting);
    }
    
    // Fallback logic
    if (setting.effect) return setting.effect;
    
    // Generate default effect based on type
    if (setting.type === 'boolean') {
        return 'Enables or disables this feature.';
    } else if (setting.type === 'number' || setting.type === 'float') {
        if (setting.name.toLowerCase().includes('multiplier')) {
            return 'Higher increases the multiplied value; lower decreases it.';
        }
        return 'Adjusts the numeric value.';
    }
    return 'Changes the setting value.';
}

// Apply translations to the page
function applyTranslations() {
    // Update page title
    document.title = t('pageTitle');
    
    // Update header
    const headerTitle = document.querySelector('.header-content h1');
    const headerSubtitle = document.querySelector('.header-content p');
    if (headerTitle) headerTitle.textContent = t('headerTitle');
    if (headerSubtitle) headerSubtitle.textContent = t('headerSubtitle');
    
    // Update loading text
    const loadingText = document.querySelector('#loadingIndicator p');
    if (loadingText) loadingText.textContent = t('loadingText');
    
    // Update presets section
    const presetsTitle = document.querySelector('.preset-section h3');
    if (presetsTitle) presetsTitle.textContent = t('presetsTitle');
    
    // Update preset buttons
    const presetBtns = document.querySelectorAll('.preset-btn');
    const presetKeys = ['1x', '2x', '3x', '4x', '5x'];
    presetBtns.forEach((btn, index) => {
        const nameSpan = btn.querySelector('.preset-name');
        const descSpan = btn.querySelector('.preset-desc');
        if (nameSpan && presetKeys[index]) {
            nameSpan.textContent = t(`preset${presetKeys[index]}Name`);
        }
        if (descSpan && presetKeys[index]) {
            descSpan.textContent = t(`preset${presetKeys[index]}Desc`);
        }
    });
    
    // Update export section
    const exportTitle = document.querySelector('#exportSection h3');
    if (exportTitle) exportTitle.textContent = t('exportTitle');
    
    // Update export buttons
    const downloadBoth = document.querySelector('#downloadBoth');
    if (downloadBoth) {
        const name = downloadBoth.querySelector('.action-name');
        const desc = downloadBoth.querySelector('.action-desc');
        if (name) name.textContent = t('bothFiles');
        if (desc) desc.textContent = t('downloadZip');
    }
    
    const downloadGUS = document.querySelector('#downloadGameUserSettings');
    if (downloadGUS) {
        const desc = downloadGUS.querySelector('.action-desc');
        if (desc) desc.textContent = t('download');
    }
    
    const downloadGame = document.querySelector('#downloadGame');
    if (downloadGame) {
        const desc = downloadGame.querySelector('.action-desc');
        if (desc) desc.textContent = t('download');
    }
    
    const copyGUS = document.querySelector('#copyGameUserSettings');
    if (copyGUS) {
        const desc = copyGUS.querySelector('.action-desc');
        if (desc) desc.textContent = t('copy');
    }
    
    const copyGame = document.querySelector('#copyGame');
    if (copyGame) {
        const desc = copyGame.querySelector('.action-desc');
        if (desc) desc.textContent = t('copy');
    }
    
    // Update import section
    const importTitle = document.querySelector('#importSection h3');
    if (importTitle) importTitle.textContent = t('importTitle');
    
    const dropText = document.querySelector('.drop-text');
    const dropSubtext = document.querySelector('.drop-subtext');
    if (dropText) dropText.textContent = t('dropZoneText');
    if (dropSubtext) dropSubtext.textContent = t('dropZoneSubtext');
    
    const uploadBothLabel = document.querySelector('#uploadBothLabel');
    if (uploadBothLabel) {
        const name = uploadBothLabel.querySelector('.action-name');
        const desc = uploadBothLabel.querySelector('.action-desc');
        if (name) name.textContent = t('uploadZip');
        if (desc) desc.textContent = t('bothFiles');
    }
    
    const uploadGUSLabel = document.querySelector('#uploadGameUserSettingsLabel');
    if (uploadGUSLabel) {
        const desc = uploadGUSLabel.querySelector('.action-desc');
        if (desc) desc.textContent = t('upload');
    }
    
    const uploadGameLabel = document.querySelector('#uploadGameLabel');
    if (uploadGameLabel) {
        const desc = uploadGameLabel.querySelector('.action-desc');
        if (desc) desc.textContent = t('upload');
    }
    
    const clearImportBtn = document.querySelector('#clearImport');
    if (clearImportBtn) clearImportBtn.textContent = t('clearImport');
    
    // Update controls
    const saveStatus = document.querySelector('#saveStatus');
    if (saveStatus && !saveStatus.classList.contains('saving') && !saveStatus.classList.contains('saved')) {
        saveStatus.textContent = t('autoSaved');
    }
    
    const resetBtn = document.querySelector('#resetAll');
    if (resetBtn) resetBtn.textContent = t('resetToDefaults');
    
    const searchInput = document.querySelector('#searchInput');
    if (searchInput) searchInput.placeholder = t('searchPlaceholder');
    
    // Update elements with data-i18n attribute (for guide card and other translatable elements)
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (key) {
            const translation = t(key);
            if (translation) {
                el.textContent = translation;
            }
        }
    });
    
    // Update section titles
    document.querySelectorAll('.section-title, .subsection-title').forEach(title => {
        const toggleId = title.getAttribute('data-toggle');
        if (toggleId && sectionTranslationMap[toggleId]) {
            const span = title.querySelector('span:first-child');
            if (span) {
                span.textContent = t(sectionTranslationMap[toggleId]);
            }
        }
    });
    
    // Update setting cards (enabled/disabled labels)
    document.querySelectorAll('.checkbox-label').forEach(label => {
        const input = label.previousElementSibling;
        if (input && input.type === 'checkbox') {
            label.textContent = input.checked ? t('enabled') : t('disabled');
        }
    });
    
    // Update default labels
    document.querySelectorAll('.setting-default-label').forEach(label => {
        label.textContent = t('defaultLabel') + ' ';
    });
    
    // Update tooltip labels (What it does, Effect of changing value)
    document.querySelectorAll('.tooltip-label[data-translate]').forEach(label => {
        const key = label.dataset.translate;
        if (key) {
            label.textContent = t(key);
        }
    });
    
    // Update setting descriptions and tooltip text
    document.querySelectorAll('[data-setting-name][data-field]').forEach(el => {
        const settingName = el.dataset.settingName;
        const field = el.dataset.field;
        if (settingName && field) {
            // Try to get translation
            const translated = getSettingTranslation(settingName, field);
            if (translated) {
                el.textContent = translated;
            } else {
                // Fall back to original English from settings data
                const setting = findSettingByName(settingName);
                if (setting) {
                    if (field === 'description') {
                        el.textContent = setting.description;
                    } else if (field === 'effect') {
                        el.textContent = getEffectTextFromSetting(setting);
                    }
                }
            }
        }
    });
    
    // Update language selector button text
    const langBtn = document.querySelector('#languageSelector .lang-btn-text');
    if (langBtn) {
        langBtn.textContent = availableLanguages[currentLanguage];
    }
}

// Initialize language on page load
function initLanguage() {
    // Check for saved language preference
    const savedLang = localStorage.getItem('arkConfigLang');
    if (savedLang && translations[savedLang]) {
        currentLanguage = savedLang;
    } else {
        // Auto-detect from browser
        currentLanguage = detectLanguage();
    }
    
    applyTranslations();
}
