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
        sectionGeneral: '⚙️ General Server Settings',
        sectionRates: '📈 Rates & Multipliers',
        sectionPlayer: '👤 Player Settings',
        sectionDino: '🦕 Dinosaur Settings',
        sectionStructure: '🏠 Structure Settings',
        sectionPvP: '⚔️ PvP/PvE Settings',
        sectionBunker: '🏰 Tek Bunker Settings',
        sectionCryoHospital: '❄️ CryoHospital Settings',
        sectionBloodforge: '🩸 Bloodforge Settings',
        sectionOutpost: '🏕️ Outpost Settings',
        sectionBlueprints: '📜 Blueprint & Quality Caps',
        sectionCryopod: '🧊 Cryopod Settings',
        sectionTameLimit: '📊 Soft Tame Limit',
        sectionCreatures: '🐾 Creature-Specific Settings',
        sectionCosmetics: '🎨 Cosmetics & Mods',
        sectionPvPSpecific: '⚔️ PvP-Specific',
        sectionEnvironment: '🌍 Environment & World',
        sectionRules: '📋 Server Rules & Misc',
        
        // Section titles (Game.ini)
        sectionGameGeneral: '⚙️ General Game Settings',
        sectionBreeding: '🥚 Breeding Settings',
        sectionSpoiling: '🍖 Spoiling & Decomposition',
        sectionTower: '🗼 Tribe Tower Settings',
        sectionMemorial: '🏛️ Memorial Settings',
        sectionStats: '📊 Stats Multipliers',
        sectionXP: '⭐ XP Multipliers',
        sectionWorld: '🌍 World Settings',
        sectionResources: '💎 Resource Settings',
        sectionHarvesting: '🪓 Harvesting Settings',
        sectionCrafting: '🔧 Crafting Settings',
        sectionGameEnvironment: '🌡️ Environment Settings',
        sectionGamePlatform: '🚢 Platform & Raft Settings',
        sectionGameMissions: '🎯 Mission Settings',
        sectionGameTribelog: '📜 Tribe Log Settings',
        sectionGameAdvanced: '⚡ Advanced Settings',
        
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
        guideTitle: '📖 How to Use This Tool',
        guideStep1Title: '1. Configure Your Settings',
        guideStep1Text: 'Browse through the sections below and adjust any settings you want to change. Use the search bar to quickly find specific settings. Hover over any setting to see a detailed description.',
        guideStep2Title: '2. Use Presets (Optional)',
        guideStep2Text: 'Click on preset buttons above to quickly apply official server rates like Evolution Event (2x) or Smalltribes (4x). You can then customize individual settings further.',
        guideStep3Title: '3. Export Your Configuration',
        guideStep3Text: 'When done, download your configuration files using the export buttons. You can download both files as a ZIP, or copy them directly to clipboard.',
        guideStep4Title: '4. Apply to Your Server',
        guideStep4Text: 'Place the downloaded files in your server\'s configuration folder. For Nitrado or other hosts, paste the settings into your server\'s config panel.',
        guideTip: '💡 Tip: Your settings are auto-saved in your browser. You can also import existing INI files to edit them.',
        guidePathSinglePlayer: '📁 Single Player:',
        guidePathDedicated: '📁 Dedicated Server:',
        guideClose: 'Got it!',
        guideDontShow: 'Don\'t show again',
        
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
        sectionGeneral: '⚙️ Ajustes Generales del Servidor',
        sectionRates: '📈 Tasas y Multiplicadores',
        sectionPlayer: '👤 Ajustes del Jugador',
        sectionDino: '🦕 Ajustes de Dinosaurios',
        sectionStructure: '🏠 Ajustes de Estructuras',
        sectionPvP: '⚔️ Ajustes PvP/PvE',
        sectionBunker: '🏰 Ajustes del Búnker Tek',
        sectionCryoHospital: '❄️ Ajustes de CryoHospital',
        sectionBloodforge: '🩸 Ajustes de Bloodforge',
        sectionOutpost: '🏕️ Ajustes de Puesto Avanzado',
        sectionBlueprints: '📜 Límites de Planos y Calidad',
        sectionCryopod: '🧊 Ajustes de Cryopod',
        sectionTameLimit: '📊 Límite de Domesticados',
        sectionCreatures: '🐾 Ajustes de Criaturas',
        sectionCosmetics: '🎨 Cosméticos y Mods',
        sectionPvPSpecific: '⚔️ PvP Específico',
        sectionEnvironment: '🌍 Entorno y Mundo',
        sectionRules: '📋 Reglas del Servidor',
        
        // Section titles (Game.ini)
        sectionGameGeneral: '⚙️ Ajustes Generales del Juego',
        sectionBreeding: '🥚 Ajustes de Cría',
        sectionSpoiling: '🍖 Descomposición',
        sectionTower: '🗼 Ajustes de Torre de Tribu',
        sectionMemorial: '🏛️ Ajustes de Memorial',
        sectionStats: '📊 Multiplicadores de Estadísticas',
        sectionXP: '⭐ Multiplicadores de XP',
        sectionWorld: '🌍 Ajustes del Mundo',
        sectionResources: '💎 Ajustes de Recursos',
        sectionHarvesting: '🪓 Ajustes de Recolección',
        sectionCrafting: '🔧 Ajustes de Fabricación',
        sectionGameEnvironment: '🌡️ Ajustes de Entorno',
        sectionGamePlatform: '🚢 Ajustes de Plataforma',
        sectionGameMissions: '🎯 Ajustes de Misiones',
        sectionGameTribelog: '📜 Registro de Tribu',
        sectionGameAdvanced: '⚡ Ajustes Avanzados',
        
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
        guideTitle: '📖 Cómo Usar Esta Herramienta',
        guideStep1Title: '1. Configura tus Ajustes',
        guideStep1Text: 'Navega por las secciones de abajo y ajusta los valores que quieras cambiar. Usa la barra de búsqueda para encontrar ajustes rápidamente. Pasa el cursor sobre cualquier ajuste para ver su descripción.',
        guideStep2Title: '2. Usa Preajustes (Opcional)',
        guideStep2Text: 'Haz clic en los botones de preajustes arriba para aplicar tasas oficiales como Evento Evolución (2x) o Smalltribes (4x). Luego puedes personalizar ajustes individuales.',
        guideStep3Title: '3. Exporta tu Configuración',
        guideStep3Text: 'Cuando termines, descarga tus archivos de configuración usando los botones de exportar. Puedes descargar ambos archivos como ZIP, o copiarlos al portapapeles.',
        guideStep4Title: '4. Aplica a tu Servidor',
        guideStep4Text: 'Coloca los archivos descargados en la carpeta de configuración de tu servidor. Para Nitrado u otros hosts, pega los ajustes en el panel de configuración.',
        guideTip: '💡 Consejo: Tus ajustes se guardan automáticamente en tu navegador. También puedes importar archivos INI existentes para editarlos.',
        guidePathSinglePlayer: '📁 Jugador Único:',
        guidePathDedicated: '📁 Servidor Dedicado:',
        guideClose: '¡Entendido!',
        guideDontShow: 'No mostrar de nuevo',
        
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
        sectionGeneral: '⚙️ Paramètres Généraux du Serveur',
        sectionRates: '📈 Taux et Multiplicateurs',
        sectionPlayer: '👤 Paramètres du Joueur',
        sectionDino: '🦕 Paramètres des Dinosaures',
        sectionStructure: '🏠 Paramètres des Structures',
        sectionPvP: '⚔️ Paramètres PvP/PvE',
        sectionBunker: '🏰 Paramètres du Bunker Tek',
        sectionCryoHospital: '❄️ Paramètres CryoHospital',
        sectionBloodforge: '🩸 Paramètres Bloodforge',
        sectionOutpost: '🏕️ Paramètres Avant-poste',
        sectionBlueprints: '📜 Limites des Plans et Qualité',
        sectionCryopod: '🧊 Paramètres Cryopod',
        sectionTameLimit: '📊 Limite de Créatures',
        sectionCreatures: '🐾 Paramètres des Créatures',
        sectionCosmetics: '🎨 Cosmétiques et Mods',
        sectionPvPSpecific: '⚔️ PvP Spécifique',
        sectionEnvironment: '🌍 Environnement et Monde',
        sectionRules: '📋 Règles du Serveur',
        
        // Section titles (Game.ini)
        sectionGameGeneral: '⚙️ Paramètres Généraux du Jeu',
        sectionBreeding: '🥚 Paramètres de Reproduction',
        sectionSpoiling: '🍖 Décomposition',
        sectionTower: '🗼 Paramètres de la Tour de Tribu',
        sectionMemorial: '🏛️ Paramètres du Mémorial',
        sectionStats: '📊 Multiplicateurs de Stats',
        sectionXP: '⭐ Multiplicateurs d\'XP',
        sectionWorld: '🌍 Paramètres du Monde',
        sectionResources: '💎 Paramètres des Ressources',
        sectionHarvesting: '🪓 Paramètres de Récolte',
        sectionCrafting: '🔧 Paramètres de Fabrication',
        sectionGameEnvironment: '🌡️ Paramètres Environnement',
        sectionGamePlatform: '🚢 Paramètres Plateforme',
        sectionGameMissions: '🎯 Paramètres des Missions',
        sectionGameTribelog: '📜 Journal de Tribu',
        sectionGameAdvanced: '⚡ Paramètres Avancés',
        
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
        guideTitle: '📖 Comment Utiliser Cet Outil',
        guideStep1Title: '1. Configurez vos Paramètres',
        guideStep1Text: 'Parcourez les sections ci-dessous et ajustez les paramètres que vous souhaitez modifier. Utilisez la barre de recherche pour trouver rapidement des paramètres. Survolez n\'importe quel paramètre pour voir sa description.',
        guideStep2Title: '2. Utilisez les Préréglages (Optionnel)',
        guideStep2Text: 'Cliquez sur les boutons de préréglages ci-dessus pour appliquer rapidement les taux officiels comme Événement Évolution (2x) ou Smalltribes (4x). Vous pouvez ensuite personnaliser les paramètres.',
        guideStep3Title: '3. Exportez votre Configuration',
        guideStep3Text: 'Quand vous avez terminé, téléchargez vos fichiers de configuration. Vous pouvez télécharger les deux fichiers en ZIP, ou les copier dans le presse-papiers.',
        guideStep4Title: '4. Appliquez à votre Serveur',
        guideStep4Text: 'Placez les fichiers téléchargés dans le dossier de configuration de votre serveur. Pour Nitrado ou autres hébergeurs, collez les paramètres dans le panneau de configuration.',
        guideTip: '💡 Astuce: Vos paramètres sont automatiquement sauvegardés dans votre navigateur. Vous pouvez aussi importer des fichiers INI existants pour les modifier.',
        guidePathSinglePlayer: '📁 Solo :',
        guidePathDedicated: '📁 Serveur Dédié :',
        guideClose: 'Compris!',
        guideDontShow: 'Ne plus afficher',
        
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
        sectionGeneral: '⚙️ Allgemeine Server-Einstellungen',
        sectionRates: '📈 Raten und Multiplikatoren',
        sectionPlayer: '👤 Spieler-Einstellungen',
        sectionDino: '🦕 Dinosaurier-Einstellungen',
        sectionStructure: '🏠 Struktur-Einstellungen',
        sectionPvP: '⚔️ PvP/PvE-Einstellungen',
        sectionBunker: '🏰 Tek-Bunker-Einstellungen',
        sectionCryoHospital: '❄️ CryoHospital-Einstellungen',
        sectionBloodforge: '🩸 Bloodforge-Einstellungen',
        sectionOutpost: '🏕️ Außenposten-Einstellungen',
        sectionBlueprints: '📜 Blaupausen & Qualitätslimits',
        sectionCryopod: '🧊 Cryopod-Einstellungen',
        sectionTameLimit: '📊 Zähmungslimit',
        sectionCreatures: '🐾 Kreatur-Einstellungen',
        sectionCosmetics: '🎨 Kosmetik & Mods',
        sectionPvPSpecific: '⚔️ PvP-Spezifisch',
        sectionEnvironment: '🌍 Umgebung & Welt',
        sectionRules: '📋 Server-Regeln',
        
        // Section titles (Game.ini)
        sectionGameGeneral: '⚙️ Allgemeine Spieleinstellungen',
        sectionBreeding: '🥚 Zucht-Einstellungen',
        sectionSpoiling: '🍖 Verfall & Zersetzung',
        sectionTower: '🗼 Stammes-Turm-Einstellungen',
        sectionMemorial: '🏛️ Denkmal-Einstellungen',
        sectionStats: '📊 Statistik-Multiplikatoren',
        sectionXP: '⭐ XP-Multiplikatoren',
        sectionWorld: '🌍 Welt-Einstellungen',
        sectionResources: '💎 Ressourcen-Einstellungen',
        sectionHarvesting: '🪓 Ernte-Einstellungen',
        sectionCrafting: '🔧 Herstellungs-Einstellungen',
        sectionGameEnvironment: '🌡️ Umgebungs-Einstellungen',
        sectionGamePlatform: '🚢 Plattform-Einstellungen',
        sectionGameMissions: '🎯 Missions-Einstellungen',
        sectionGameTribelog: '📜 Stammesprotokoll',
        sectionGameAdvanced: '⚡ Erweiterte Einstellungen',
        
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
        guideTitle: '📖 So Verwenden Sie Dieses Tool',
        guideStep1Title: '1. Konfigurieren Sie Ihre Einstellungen',
        guideStep1Text: 'Durchsuchen Sie die Abschnitte unten und passen Sie die gewünschten Einstellungen an. Verwenden Sie die Suchleiste, um Einstellungen schnell zu finden. Bewegen Sie den Mauszeiger über eine Einstellung für Details.',
        guideStep2Title: '2. Verwenden Sie Voreinstellungen (Optional)',
        guideStep2Text: 'Klicken Sie auf die Voreinstellungs-Buttons oben, um offizielle Server-Raten wie Evolution Event (2x) oder Smalltribes (4x) anzuwenden. Sie können dann einzelne Einstellungen anpassen.',
        guideStep3Title: '3. Exportieren Sie Ihre Konfiguration',
        guideStep3Text: 'Wenn Sie fertig sind, laden Sie Ihre Konfigurationsdateien herunter. Sie können beide Dateien als ZIP herunterladen oder direkt in die Zwischenablage kopieren.',
        guideStep4Title: '4. Auf Ihren Server Anwenden',
        guideStep4Text: 'Platzieren Sie die heruntergeladenen Dateien im Konfigurationsordner Ihres Servers. Für Nitrado oder andere Hoster fügen Sie die Einstellungen im Config-Panel ein.',
        guideTip: '💡 Tipp: Ihre Einstellungen werden automatisch in Ihrem Browser gespeichert. Sie können auch vorhandene INI-Dateien importieren.',
        guidePathSinglePlayer: '📁 Einzelspieler:',
        guidePathDedicated: '📁 Dedizierter Server:',
        guideClose: 'Verstanden!',
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
        sectionGeneral: '⚙️ Configurações Gerais do Servidor',
        sectionRates: '📈 Taxas e Multiplicadores',
        sectionPlayer: '👤 Configurações do Jogador',
        sectionDino: '🦕 Configurações de Dinossauros',
        sectionStructure: '🏠 Configurações de Estruturas',
        sectionPvP: '⚔️ Configurações PvP/PvE',
        sectionBunker: '🏰 Configurações do Bunker Tek',
        sectionCryoHospital: '❄️ Configurações do CryoHospital',
        sectionBloodforge: '🩸 Configurações do Bloodforge',
        sectionOutpost: '🏕️ Configurações do Posto Avançado',
        sectionBlueprints: '📜 Limites de Projetos e Qualidade',
        sectionCryopod: '🧊 Configurações de Cryopod',
        sectionTameLimit: '📊 Limite de Domesticados',
        sectionCreatures: '🐾 Configurações de Criaturas',
        sectionCosmetics: '🎨 Cosméticos e Mods',
        sectionPvPSpecific: '⚔️ PvP Específico',
        sectionEnvironment: '🌍 Ambiente e Mundo',
        sectionRules: '📋 Regras do Servidor',
        
        // Section titles (Game.ini)
        sectionGameGeneral: '⚙️ Configurações Gerais do Jogo',
        sectionBreeding: '🥚 Configurações de Criação',
        sectionSpoiling: '🍖 Deterioração e Decomposição',
        sectionTower: '🗼 Configurações da Torre da Tribo',
        sectionMemorial: '🏛️ Configurações do Memorial',
        sectionStats: '📊 Multiplicadores de Estatísticas',
        sectionXP: '⭐ Multiplicadores de XP',
        sectionWorld: '🌍 Configurações do Mundo',
        sectionResources: '💎 Configurações de Recursos',
        sectionHarvesting: '🪓 Configurações de Colheita',
        sectionCrafting: '🔧 Configurações de Fabricação',
        sectionGameEnvironment: '🌡️ Configurações de Ambiente',
        sectionGamePlatform: '🚢 Configurações de Plataforma',
        sectionGameMissions: '🎯 Configurações de Missões',
        sectionGameTribelog: '📜 Registro da Tribo',
        sectionGameAdvanced: '⚡ Configurações Avançadas',
        
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
        guideTitle: '📖 Como Usar Esta Ferramenta',
        guideStep1Title: '1. Configure suas Definições',
        guideStep1Text: 'Navegue pelas seções abaixo e ajuste as configurações que deseja alterar. Use a barra de pesquisa para encontrar configurações rapidamente. Passe o mouse sobre qualquer configuração para ver a descrição.',
        guideStep2Title: '2. Use Predefinições (Opcional)',
        guideStep2Text: 'Clique nos botões de predefinição acima para aplicar rapidamente taxas oficiais como Evento Evolução (2x) ou Smalltribes (4x). Você pode personalizar configurações individuais depois.',
        guideStep3Title: '3. Exporte sua Configuração',
        guideStep3Text: 'Quando terminar, baixe seus arquivos de configuração. Você pode baixar ambos os arquivos como ZIP, ou copiá-los para a área de transferência.',
        guideStep4Title: '4. Aplique ao seu Servidor',
        guideStep4Text: 'Coloque os arquivos baixados na pasta de configuração do seu servidor. Para Nitrado ou outros hosts, cole as configurações no painel de configuração.',
        guideTip: '💡 Dica: Suas configurações são salvas automaticamente no navegador. Você também pode importar arquivos INI existentes para editá-los.',
        guidePathSinglePlayer: '📁 Jogador Solo:',
        guidePathDedicated: '📁 Servidor Dedicado:',
        guideClose: 'Entendi!',
        guideDontShow: 'Não mostrar novamente',
        
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
        sectionGeneral: '⚙️ Общие Настройки Сервера',
        sectionRates: '📈 Ставки и Множители',
        sectionPlayer: '👤 Настройки Игрока',
        sectionDino: '🦕 Настройки Динозавров',
        sectionStructure: '🏠 Настройки Строений',
        sectionPvP: '⚔️ Настройки PvP/PvE',
        sectionBunker: '🏰 Настройки Tek Бункера',
        sectionCryoHospital: '❄️ Настройки CryoHospital',
        sectionBloodforge: '🩸 Настройки Bloodforge',
        sectionOutpost: '🏕️ Настройки Аванпоста',
        sectionBlueprints: '📜 Чертежи и Лимиты Качества',
        sectionCryopod: '🧊 Настройки Криопода',
        sectionTameLimit: '📊 Лимит Приручённых',
        sectionCreatures: '🐾 Настройки Существ',
        sectionCosmetics: '🎨 Косметика и Моды',
        sectionPvPSpecific: '⚔️ PvP Специфичное',
        sectionEnvironment: '🌍 Окружение и Мир',
        sectionRules: '📋 Правила Сервера',
        
        // Section titles (Game.ini)
        sectionGameGeneral: '⚙️ Общие Настройки Игры',
        sectionBreeding: '🥚 Настройки Разведения',
        sectionSpoiling: '🍖 Порча и Разложение',
        sectionTower: '🗼 Настройки Башни Племени',
        sectionMemorial: '🏛️ Настройки Мемориала',
        sectionStats: '📊 Множители Статистик',
        sectionXP: '⭐ Множители Опыта',
        sectionWorld: '🌍 Настройки Мира',
        sectionResources: '💎 Настройки Ресурсов',
        sectionHarvesting: '🪓 Настройки Сбора',
        sectionCrafting: '🔧 Настройки Крафта',
        sectionGameEnvironment: '🌡️ Настройки Среды',
        sectionGamePlatform: '🚢 Настройки Платформ',
        sectionGameMissions: '🎯 Настройки Миссий',
        sectionGameTribelog: '📜 Журнал Племени',
        sectionGameAdvanced: '⚡ Расширенные Настройки',
        
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
        guideTitle: '📖 Как Использовать Этот Инструмент',
        guideStep1Title: '1. Настройте Параметры',
        guideStep1Text: 'Просмотрите разделы ниже и измените нужные настройки. Используйте поиск для быстрого поиска. Наведите курсор на любую настройку для просмотра описания.',
        guideStep2Title: '2. Используйте Пресеты (Опционально)',
        guideStep2Text: 'Нажмите на кнопки пресетов выше, чтобы быстро применить официальные ставки, такие как Событие Эволюции (2x) или Smalltribes (4x). Затем вы можете настроить отдельные параметры.',
        guideStep3Title: '3. Экспортируйте Конфигурацию',
        guideStep3Text: 'Когда закончите, скачайте файлы конфигурации. Вы можете скачать оба файла в ZIP или скопировать их в буфер обмена.',
        guideStep4Title: '4. Примените к Серверу',
        guideStep4Text: 'Поместите скачанные файлы в папку конфигурации вашего сервера. Для Nitrado или других хостингов вставьте настройки в панель конфигурации.',
        guideTip: '💡 Совет: Ваши настройки автоматически сохраняются в браузере. Вы также можете импортировать существующие INI файлы для редактирования.',
        guidePathSinglePlayer: '📁 Одиночная игра:',
        guidePathDedicated: '📁 Выделенный сервер:',
        guideClose: 'Понятно!',
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
        sectionGeneral: '⚙️ 常规服务器设置',
        sectionRates: '📈 倍率和乘数',
        sectionPlayer: '👤 玩家设置',
        sectionDino: '🦕 恐龙设置',
        sectionStructure: '🏠 建筑设置',
        sectionPvP: '⚔️ PvP/PvE 设置',
        sectionBunker: '🏰 Tek 掩体设置',
        sectionCryoHospital: '❄️ 冷冻医院设置',
        sectionBloodforge: '🩸 血锻设置',
        sectionOutpost: '🏕️ 前哨站设置',
        sectionBlueprints: '📜 蓝图和品质上限',
        sectionCryopod: '🧊 冷冻舱设置',
        sectionTameLimit: '📊 驯服上限',
        sectionCreatures: '🐾 生物设置',
        sectionCosmetics: '🎨 装饰和模组',
        sectionPvPSpecific: '⚔️ PvP 专属',
        sectionEnvironment: '🌍 环境和世界',
        sectionRules: '📋 服务器规则',
        
        // Section titles (Game.ini)
        sectionGameGeneral: '⚙️ 常规游戏设置',
        sectionBreeding: '🥚 繁殖设置',
        sectionSpoiling: '🍖 腐烂与分解',
        sectionTower: '🗼 部落塔设置',
        sectionMemorial: '🏛️ 纪念碑设置',
        sectionStats: '📊 属性倍率',
        sectionXP: '⭐ 经验倍率',
        sectionWorld: '🌍 世界设置',
        sectionResources: '💎 资源设置',
        sectionHarvesting: '🪓 采集设置',
        sectionCrafting: '🔧 制作设置',
        sectionGameEnvironment: '🌡️ 环境设置',
        sectionGamePlatform: '🚢 平台设置',
        sectionGameMissions: '🎯 任务设置',
        sectionGameTribelog: '📜 部落日志',
        sectionGameAdvanced: '⚡ 高级设置',
        
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
        guideTitle: '📖 如何使用此工具',
        guideStep1Title: '1. 配置您的设置',
        guideStep1Text: '浏览下面的各个部分，调整您想更改的设置。使用搜索栏快速查找特定设置。将鼠标悬停在任何设置上可查看详细说明。',
        guideStep2Title: '2. 使用预设（可选）',
        guideStep2Text: '点击上方的预设按钮快速应用官方服务器倍率，如进化活动（2x）或Smalltribes（4x）。之后您可以进一步自定义各项设置。',
        guideStep3Title: '3. 导出您的配置',
        guideStep3Text: '完成后，使用导出按钮下载配置文件。您可以将两个文件下载为ZIP，或直接复制到剪贴板。',
        guideStep4Title: '4. 应用到您的服务器',
        guideStep4Text: '将下载的文件放入服务器的配置文件夹中。对于Nitrado或其他主机，将设置粘贴到服务器的配置面板中。',
        guideTip: '💡 提示：您的设置会自动保存在浏览器中。您也可以导入现有的INI文件进行编辑。',
        guidePathSinglePlayer: '📁 单人游戏：',
        guidePathDedicated: '📁 专用服务器：',
        guideClose: '知道了！',
        guideDontShow: '不再显示',
        
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
        sectionGeneral: '⚙️ 一般サーバー設定',
        sectionRates: '📈 レートと倍率',
        sectionPlayer: '👤 プレイヤー設定',
        sectionDino: '🦕 恐竜設定',
        sectionStructure: '🏠 建造物設定',
        sectionPvP: '⚔️ PvP/PvE 設定',
        sectionBunker: '🏰 Tek バンカー設定',
        sectionCryoHospital: '❄️ クライオホスピタル設定',
        sectionBloodforge: '🩸 ブラッドフォージ設定',
        sectionOutpost: '🏕️ アウトポスト設定',
        sectionBlueprints: '📜 ブループリントと品質上限',
        sectionCryopod: '🧊 クライオポッド設定',
        sectionTameLimit: '📊 テイム上限',
        sectionCreatures: '🐾 クリーチャー設定',
        sectionCosmetics: '🎨 コスメティックとMOD',
        sectionPvPSpecific: '⚔️ PvP 固有',
        sectionEnvironment: '🌍 環境とワールド',
        sectionRules: '📋 サーバールール',
        
        // Section titles (Game.ini)
        sectionGameGeneral: '⚙️ 一般ゲーム設定',
        sectionBreeding: '🥚 ブリーディング設定',
        sectionSpoiling: '🍖 腐敗と分解',
        sectionTower: '🗼 トライブタワー設定',
        sectionMemorial: '🏛️ メモリアル設定',
        sectionStats: '📊 ステータス倍率',
        sectionXP: '⭐ XP倍率',
        sectionWorld: '🌍 ワールド設定',
        sectionResources: '💎 リソース設定',
        sectionHarvesting: '🪓 収穫設定',
        sectionCrafting: '🔧 クラフト設定',
        sectionGameEnvironment: '🌡️ 環境設定',
        sectionGamePlatform: '🚢 プラットフォーム設定',
        sectionGameMissions: '🎯 ミッション設定',
        sectionGameTribelog: '📜 トライブログ',
        sectionGameAdvanced: '⚡ 詳細設定',
        
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
        guideTitle: '📖 このツールの使い方',
        guideStep1Title: '1. 設定を構成する',
        guideStep1Text: '下のセクションを閲覧し、変更したい設定を調整してください。検索バーを使って特定の設定をすばやく見つけることができます。設定にカーソルを合わせると詳細が表示されます。',
        guideStep2Title: '2. プリセットを使用（オプション）',
        guideStep2Text: '上のプリセットボタンをクリックして、エボリューションイベント（2x）やSmalltribes（4x）などの公式レートを適用できます。その後、個別の設定をカスタマイズできます。',
        guideStep3Title: '3. 設定をエクスポート',
        guideStep3Text: '完了したら、エクスポートボタンで設定ファイルをダウンロードします。両方のファイルをZIPでダウンロードするか、クリップボードに直接コピーできます。',
        guideStep4Title: '4. サーバーに適用',
        guideStep4Text: 'ダウンロードしたファイルをサーバーの設定フォルダに配置します。Nitradoや他のホスティングサービスでは、設定パネルに貼り付けてください。',
        guideTip: '💡 ヒント：設定はブラウザに自動保存されます。既存のINIファイルをインポートして編集することもできます。',
        guidePathSinglePlayer: '📁 シングルプレイヤー：',
        guidePathDedicated: '📁 専用サーバー：',
        guideClose: '了解！',
        guideDontShow: '今後表示しない',
        
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
        sectionGeneral: '⚙️ 일반 서버 설정',
        sectionRates: '📈 배율 및 승수',
        sectionPlayer: '👤 플레이어 설정',
        sectionDino: '🦕 공룡 설정',
        sectionStructure: '🏠 건물 설정',
        sectionPvP: '⚔️ PvP/PvE 설정',
        sectionBunker: '🏰 Tek 벙커 설정',
        sectionCryoHospital: '❄️ 크라이오호스피탈 설정',
        sectionBloodforge: '🩸 블러드포지 설정',
        sectionOutpost: '🏕️ 전초기지 설정',
        sectionBlueprints: '📜 블루프린트 및 품질 상한',
        sectionCryopod: '🧊 크라이오포드 설정',
        sectionTameLimit: '📊 테이밍 제한',
        sectionCreatures: '🐾 생물 설정',
        sectionCosmetics: '🎨 코스메틱 및 모드',
        sectionPvPSpecific: '⚔️ PvP 전용',
        sectionEnvironment: '🌍 환경 및 월드',
        sectionRules: '📋 서버 규칙',
        
        // Section titles (Game.ini)
        sectionGameGeneral: '⚙️ 일반 게임 설정',
        sectionBreeding: '🥚 브리딩 설정',
        sectionSpoiling: '🍖 부패 및 분해',
        sectionTower: '🗼 부족 타워 설정',
        sectionMemorial: '🏛️ 메모리얼 설정',
        sectionStats: '📊 스탯 배율',
        sectionXP: '⭐ 경험치 배율',
        sectionWorld: '🌍 월드 설정',
        sectionResources: '💎 자원 설정',
        sectionHarvesting: '🪓 채집 설정',
        sectionCrafting: '🔧 제작 설정',
        sectionGameEnvironment: '🌡️ 환경 설정',
        sectionGamePlatform: '🚢 플랫폼 설정',
        sectionGameMissions: '🎯 미션 설정',
        sectionGameTribelog: '📜 부족 로그',
        sectionGameAdvanced: '⚡ 고급 설정',
        
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
        guideTitle: '📖 이 도구 사용법',
        guideStep1Title: '1. 설정 구성하기',
        guideStep1Text: '아래 섹션을 탐색하고 변경하려는 설정을 조정하세요. 검색창을 사용하여 특정 설정을 빠르게 찾을 수 있습니다. 설정 위에 마우스를 올리면 자세한 설명을 볼 수 있습니다.',
        guideStep2Title: '2. 프리셋 사용 (선택사항)',
        guideStep2Text: '위의 프리셋 버튼을 클릭하여 에볼루션 이벤트(2x) 또는 Smalltribes(4x)와 같은 공식 서버 배율을 빠르게 적용할 수 있습니다. 그 후 개별 설정을 추가로 사용자 지정할 수 있습니다.',
        guideStep3Title: '3. 설정 내보내기',
        guideStep3Text: '완료되면 내보내기 버튼을 사용하여 설정 파일을 다운로드하세요. 두 파일을 ZIP으로 다운로드하거나 클립보드에 직접 복사할 수 있습니다.',
        guideStep4Title: '4. 서버에 적용',
        guideStep4Text: '다운로드한 파일을 서버의 설정 폴더에 배치하세요. Nitrado 또는 다른 호스팅의 경우 서버 설정 패널에 설정을 붙여넣으세요.',
        guideTip: '💡 팁: 설정은 브라우저에 자동 저장됩니다. 기존 INI 파일을 가져와서 편집할 수도 있습니다.',
        guidePathSinglePlayer: '📁 싱글플레이어:',
        guidePathDedicated: '📁 전용 서버:',
        guideClose: '알겠습니다!',
        guideDontShow: '다시 표시 안 함',
        
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
    'server-general': 'sectionGeneral',
    'server-rates': 'sectionRates',
    'server-player': 'sectionPlayer',
    'server-dino': 'sectionDino',
    'server-structure': 'sectionStructure',
    'server-pvp': 'sectionPvP',
    'server-bunker': 'sectionBunker',
    'server-cryohospital': 'sectionCryoHospital',
    'server-bloodforge': 'sectionBloodforge',
    'server-outpost': 'sectionOutpost',
    'server-blueprints': 'sectionBlueprints',
    'server-cryopod': 'sectionCryopod',
    'server-tamelimit': 'sectionTameLimit',
    'server-creatures': 'sectionCreatures',
    'server-cosmetics': 'sectionCosmetics',
    'server-pvp-specific': 'sectionPvPSpecific',
    'server-environment': 'sectionEnvironment',
    'server-rules': 'sectionRules',
    // Game.ini sections
    'game-general': 'sectionGameGeneral',
    'game-breeding': 'sectionBreeding',
    'game-spoiling': 'sectionSpoiling',
    'game-tower': 'sectionTower',
    'game-memorial': 'sectionMemorial',
    'game-stats': 'sectionStats',
    'game-xp': 'sectionXP',
    'game-world': 'sectionWorld',
    'game-resources': 'sectionResources',
    'game-harvesting': 'sectionHarvesting',
    'game-crafting': 'sectionCrafting',
    'game-environment': 'sectionGameEnvironment',
    'game-platform': 'sectionGamePlatform',
    'game-missions': 'sectionGameMissions',
    'game-tribelog': 'sectionGameTribelog',
    'game-advanced': 'sectionGameAdvanced',
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
    document.querySelectorAll('.section-title').forEach(title => {
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
