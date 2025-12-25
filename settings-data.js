// ARK: Survival Ascended Server Settings Data
// Only includes ASA-supported settings with their default values

const gameUserSettings = {
    // Basic Server Settings (name, ports, passwords, RCON)
    'server-identity': [
        { name: 'SessionName', default: 'ARK #123456', type: 'text', section: 'SessionSettings', description: 'The name of your server as it appears in the server browser. This is what players see when searching for servers to join.', effect: 'Empty = generates random name like "ARK #123456". Choose something descriptive to help players find your server.' },
        { name: 'ServerPassword', default: '', type: 'text', description: 'Password that players must enter to join your server. Creates a private server that only people with the password can access.', effect: 'Empty = public server (anyone can join). Any value = private server requiring password entry.' },
        { name: 'ServerAdminPassword', default: '', type: 'text', description: 'Password required to use admin/cheat commands and connect via RCON. Keep this secret - anyone with it has full server control.', effect: 'Required for admin commands (enablecheats). Also used for RCON authentication. Choose a strong, unique password.' },
        { name: 'MaxPlayers', default: '70', type: 'integer', section: '/Script/Engine.GameSession', description: 'Maximum number of players that can be connected to the server simultaneously. Note: In ASA, the -WinLiveMaxPlayers command line is preferred.', effect: 'Higher = more players allowed but more server resources needed. 70 is Official default.' },
    ],

    'server-ports': [
        { name: 'Port', default: '7777', type: 'integer', section: 'SessionSettings', description: 'The UDP port used for game client connections. Players connect to this port to join your server. Must be open in your firewall.', effect: 'Default 7777. Change if running multiple servers or if port is blocked. Players use this port to connect directly.' },
        { name: 'QueryPort', default: '27015', type: 'integer', section: 'SessionSettings', description: 'The UDP port used by Steam for server browser queries. This allows your server to appear in the server list and respond to ping requests.', effect: 'Default 27015. Must be different from game Port and open in firewall for server browser visibility.' },
        { name: 'MultiHome', default: '', type: 'text', section: 'SessionSettings', description: 'Binds the server to a specific IP address when your machine has multiple network interfaces. Useful for servers with multiple IPs or VPN setups.', effect: 'Empty = binds to all available IPs. Set to specific IP to restrict which network interface the server uses.' },
        { name: 'RCONEnabled', default: 'False', type: 'boolean', description: 'Enables Remote Console (RCON) protocol for remote server administration. Allows running commands from external tools without being in-game.', effect: 'True = RCON enabled (requires RCONPort and ServerAdminPassword); False = RCON disabled.' },
        { name: 'RCONPort', default: '27020', type: 'integer', description: 'The TCP port used for RCON connections. RCON tools connect to this port to send remote commands to your server.', effect: 'Default 27020. Must be open in firewall and different from other ports. Only needed if RCONEnabled is True.' },
        { name: 'RCONServerGameLogBuffer', default: '600.0', type: 'float', description: 'Controls how many lines of game log history are available through RCON. Useful for monitoring server activity remotely.', effect: 'Higher values = more log history available; lower values = less memory used. 600 lines is default.' },
    ],

    'server-messages': [
        { name: 'MessageOfTheDay', default: 'Welcome to the server!', type: 'text', section: 'MessageOfTheDay', sectionKey: 'Message', description: 'A welcome message displayed to players when they connect to the server. Great for sharing rules, Discord links, or server information.', effect: 'Displayed on login for the duration set by MessageDuration. Use \\n for line breaks.' },
        { name: 'MessageDuration', default: '20', type: 'integer', section: 'MessageOfTheDay', sectionKey: 'Duration', description: 'How long in seconds the Message of the Day is displayed on screen when players connect to the server.', effect: 'Higher = message stays longer; 0 = message may not show. 20 seconds is default.' },
        { name: 'AutoSavePeriodMinutes', default: '15.0', type: 'float', description: 'How often the server automatically saves the world in minutes. More frequent saves protect against data loss but can cause brief lag spikes.', effect: '15 = saves every 15 minutes (default). Lower = safer but more lag; 0 = constant saving (not recommended).' },
        { name: 'AutoRestartIntervalSeconds', default: '', type: 'float', description: 'Automatically restarts the server after the specified number of seconds. Useful for scheduled restarts to clear memory and apply updates.', effect: 'Empty = no auto-restart. 86400 = daily restart. Server shuts down and must be restarted by external script/service.' },
    ],

    'server-mods': [
        { name: 'ActiveMods', default: '', type: 'text', description: 'Comma-separated list of mod IDs to load. Mods add new content, creatures, items, and features. Order matters - leftmost mods have highest priority.', effect: 'Empty = no mods. Example: "123456,789012" loads two mods with first having priority in conflicts.', placeholder: 'Example: 123456789,987654321' },
        { name: 'ActiveMapMod', default: '', type: 'text', description: 'The mod ID for a custom map to load instead of official maps. Changes the entire game world to a community-created map.', effect: 'Empty = use official map (set via command line). Enter mod ID to load that map instead.', placeholder: 'Enter Mod ID (e.g., 962796)' },
        { name: 'CustomDynamicConfigUrl', default: '', type: 'text', description: 'URL to a remotely hosted dynamicconfig.ini file that the server periodically fetches. Allows live configuration changes without restart.', effect: 'Empty = no remote config. Requires -UseDynamicConfig command line. Server polls this URL for config updates.' },
        { name: 'CustomLiveTuningUrl', default: '', type: 'text', description: 'URL to a remotely hosted live tuning file for real-time balance adjustments. Allows adjusting rates and settings without server restart.', effect: 'Empty = no live tuning. Server fetches this file to apply live balance changes.' },
    ],

    // Admin & Security Settings
    'admin-lists': [
        { name: 'BanListURL', default: 'https://cdn2.arkdedicated.com/asa/BanList.txt', type: 'text', description: 'URL to a text file containing banned player IDs. The server automatically fetches this list every 10 minutes and prevents listed players from joining.', effect: 'Default uses official Wildcard ban list. Custom URL = use your own ban list. Banned players are kicked on connection.', placeholder: 'https://cdn2.arkdedicated.com/asa/BanList.txt' },
        { name: 'AdminListURL', default: '', type: 'text', description: 'URL to a remotely hosted admin list file, providing an alternative to the local AllowedCheaterAccountIDs.txt. Easier to manage admins across multiple servers.', effect: 'Empty = use local file only. Server fetches this URL at intervals set by UpdateAllowedCheatersInterval.' },
        { name: 'UpdateAllowedCheatersInterval', default: '600.0', type: 'float', description: 'How often in seconds the server checks the AdminListURL for updates to the admin list. More frequent checks mean faster admin changes but more network requests.', effect: '600 = check every 10 minutes (default). Minimum is 3 seconds (values below 3 are set to 3).' },
        { name: 'UseExclusiveList', default: 'False', type: 'boolean', description: 'Enables whitelist mode where only players on an approved list can join. Everyone else is rejected regardless of password. Same as -exclusivejoin command line.', effect: 'True = whitelist-only server (must be on approved list); False = anyone can join (if they have password).' },
        { name: 'AllowSharedConnections', default: 'False', type: 'boolean', description: 'Allows players using Steam Family Sharing to connect. Family Sharing lets multiple Steam accounts play games owned by one account.', effect: 'True = Family Sharing accounts allowed; False = only accounts that own the game directly can join.' },
    ],

    'admin-security': [
        { name: 'KickIdlePlayersPeriod', default: '3600.0', type: 'float', description: 'Time in seconds before an idle (AFK) player is automatically kicked from the server. Requires -EnableIdlePlayerKick command line argument to function.', effect: 'Default 3600 = 1 hour AFK limit. Lower = kick sooner; higher = more tolerance. Requires command line flag.' },
        { name: 'EnableAFKKickPlayerCountPercent', default: '0.0', type: 'float', description: 'Only enables AFK kicking when server population reaches this percentage of MaxPlayers. Prevents kicking when server has room, kicks only when crowded.', effect: '0 = always kick AFK; 0.9 = only kick when server is 90% full. Official uses ~0.9 to free slots when needed.' },
        { name: 'DontRestoreBackup', default: 'False', type: 'boolean', description: 'Prevents the server from automatically restoring from backup when save corruption is detected. Only use if you have your own backup solution.', effect: 'True = no automatic backup restore (risky); False = automatic restore on corruption. Use with -DisableDupeLogDeletes.' },
        { name: 'EnableMeshBitingProtection', default: 'True', type: 'boolean', description: 'Enables protection against mesh biting exploits where creatures can attack through terrain. An important anti-cheat measure for base protection.', effect: 'True = mesh bite protection active (recommended); False = disables protection (not recommended).' },
    ],

    'admin-performance': [
        { name: 'ServerEnableMeshChecking', default: 'False', type: 'boolean', description: 'Enables mesh checking used for foliage repopulation calculations. Part of the terrain/environment system. Disabled by -forcedisablemeshchecking flag.', effect: 'True = mesh checking enabled; False = disabled. Primarily affects foliage systems.' },
        { name: 'UseCharacterTracker', default: 'False', type: 'boolean', description: 'Enables character position tracking system for anti-cheat and debugging purposes. Can also be enabled via command line argument.', effect: 'True = character tracking enabled; False = disabled. May have minor performance impact.' },
        { name: 'NPCNetworkStasisRangeScalePlayerCountStart', default: '0', type: 'integer', description: 'Minimum number of online players required before NPC stasis range scaling kicks in. Stasis range affects how far creatures are simulated from players.', effect: '0 = disabled (no scaling). Set to player count threshold to begin performance optimization scaling.' },
        { name: 'NPCNetworkStasisRangeScalePlayerCountEnd', default: '0', type: 'integer', description: 'Player count at which the maximum stasis range scaling (PercentEnd) is reached. Creates a gradual scaling curve between Start and End.', effect: '0 = disabled. Set to max player count for full scaling effect. Works with PlayerCountStart.' },
        { name: 'NPCNetworkStasisRangeScalePercentEnd', default: '0.55000001', type: 'float', description: 'The maximum percentage to scale the NPC stasis range when player count reaches PlayerCountEnd. Lower values reduce creature simulation distance for performance.', effect: '0.5 = reduce stasis range to 50% at max players. Official uses 0.5 for performance optimization.' },
    ],

    // Chat & Communication Settings
    'chat-voice': [
        { name: 'globalVoiceChat', default: 'False', type: 'boolean', description: 'Makes voice chat audible to all players on the server regardless of distance. By default, voice chat is proximity-based and only heard by nearby players.', effect: 'True = everyone hears all voice chat; False = voice only heard by nearby players.' },
        { name: 'ProximityChat', default: 'False', type: 'boolean', description: 'Restricts text chat to only be visible to players within a certain distance. Creates more immersive local communication instead of server-wide chat.', effect: 'True = text chat only visible to nearby players; False = text chat visible to everyone.' },
        { name: 'AlwaysNotifyPlayerLeft', default: 'False', type: 'boolean', description: 'Shows a server message whenever any player disconnects from the server. By default, leave notifications may be suppressed in some situations.', effect: 'True = always show "Player left" messages; False = normal notification behavior.' },
        { name: 'DontAlwaysNotifyPlayerJoined', default: 'False', type: 'boolean', description: 'Hides the server message that appears when players join the server. Useful for high-traffic servers where join spam is annoying.', effect: 'True = hide "Player joined" messages; False = show join notifications normally.' },
    ],

    'chat-filtering': [
        { name: 'bFilterCharacterNames', default: 'False', type: 'boolean', description: 'Automatically filters inappropriate character names using the bad/good word lists. Names containing bad words are blocked or censored.', effect: 'True = character names are filtered; False = any name allowed.' },
        { name: 'bFilterChat', default: 'False', type: 'boolean', description: 'Automatically filters inappropriate words in text chat using the bad/good word lists. Filtered words are replaced with asterisks or blocked.', effect: 'True = chat messages are filtered; False = no chat filtering.' },
        { name: 'bFilterTribeNames', default: 'False', type: 'boolean', description: 'Automatically filters inappropriate tribe names using the bad/good word lists. Tribe names containing bad words are blocked or censored.', effect: 'True = tribe names are filtered; False = any tribe name allowed.' },
        { name: 'BadWordListURL', default: 'http://cdn2.arkdedicated.com/asa/badwords.txt', type: 'text', description: 'URL to a text file containing words that should be filtered/blocked. Used by the chat and name filtering systems when enabled.', effect: 'Default uses official list. Custom URL = use your own word list. Words in list are blocked/censored.', placeholder: 'http://cdn2.arkdedicated.com/asa/badwords.txt' },
        { name: 'BadWordWhiteListURL', default: 'http://cdn2.arkdedicated.com/asa/goodwords.txt', type: 'text', description: 'URL to a text file containing words that should always be allowed, even if they might trigger the bad word filter. Exceptions to filtering.', effect: 'Default uses official list. Custom URL = define your own allowed exceptions.', placeholder: 'http://cdn2.arkdedicated.com/asa/goodwords.txt' },
    ],

    'chat-logging': [
        { name: 'LogChatMessages', default: 'False', type: 'boolean', description: 'Enables detailed chat logging to files for moderation purposes. Logs are saved in JSON format in the ChatLogs folder, organized by server name.', effect: 'True = chat saved to ShooterGame/Saved/Logs/ChatLogs/<SessionName>/; False = no chat logging.' },
        { name: 'ChatLogFileSplitIntervalSeconds', default: '86400', type: 'integer', description: 'How often in seconds to create a new chat log file. Splits logs into manageable files instead of one massive file.', effect: 'Default 86400 = new file daily. Minimum 45 seconds. Lower values create more files.' },
        { name: 'ChatLogFlushIntervalSeconds', default: '86400', type: 'integer', description: 'How often in seconds chat messages are written from memory to the log file. More frequent flushes prevent data loss but increase disk writes.', effect: 'Default 86400 = flush daily. Minimum 15 seconds. Lower = more frequent writes, less data loss risk.' },
        { name: 'ChatLogMaxAgeInDays', default: '5', type: 'integer', description: 'How many days to keep chat log files before automatically deleting them. Helps manage disk space used by chat logs.', effect: 'Default 5 = keep 5 days of logs. Negative values = keep forever. 0 = Official only setting.' },
    ],

    // Gameplay Options
    'gameplay-camera': [
        { name: 'AllowThirdPersonPlayer', default: 'True', type: 'boolean', description: 'Allows players to switch to third-person camera view using the default K key. Third-person provides better situational awareness but some consider it an advantage in PvP.', effect: 'True = third-person camera available; False = locked to first-person only.' },
        { name: 'ServerCrosshair', default: 'True', type: 'boolean', description: 'Shows a targeting crosshair on the screen to help aim ranged weapons and tools. Disabling creates a more immersive/challenging experience.', effect: 'True = crosshair visible; False = no crosshair (must aim without assistance).' },
        { name: 'ShowFloatingDamageText', default: 'False', type: 'boolean', description: 'Displays damage numbers floating above targets when you deal damage. Provides clear combat feedback showing exactly how much damage each hit deals.', effect: 'True = damage numbers visible; False = no damage number display.' },
        { name: 'ShowMapPlayerLocation', default: 'True', type: 'boolean', description: 'Shows your exact position on the map with a marker. Without this, players must navigate using landmarks and GPS coordinates only.', effect: 'True = player location shown on map; False = must navigate without map marker.' },
    ],

    'gameplay-rules': [
        { name: 'ServerHardcore', default: 'False', type: 'boolean', description: 'Enables Hardcore mode where death resets your character to level 1. You keep your tribe membership but lose all levels, engrams, and stats permanently.', effect: 'True = death resets to level 1 (high stakes); False = normal respawn with XP penalty.' },
        { name: 'ImplantSuicideCD', default: '28800', type: 'float', description: 'Sets the cooldown in seconds between uses of the implant "Respawn" suicide feature. This prevents abuse of fast respawning to teleport across the map.', effect: 'Default 28800 = 8 hours between implant suicides. Lower values allow more frequent use; 0 removes the cooldown entirely.' },
        { name: 'AllowCrateSpawnsOnTopOfStructures', default: 'False', type: 'boolean', description: 'Allows supply drops (beacons) to spawn on top of player structures. By default, structures block supply drop spawns in their area.', effect: 'True = drops can appear on structures; False = structures block nearby drop spawns.' },
        { name: 'AllowIntegratedSPlusStructures', default: 'True', type: 'boolean', description: 'Enables the integrated Structures Plus (S+) building pieces that were added to the base game. These include improved versions of vanilla structures with quality-of-life features.', effect: 'True = S+ structures available; False = only vanilla structures available.' },
        { name: 'EnableExtraStructurePreventionVolumes', default: 'False', type: 'boolean', description: 'Blocks building in additional resource-rich areas beyond the default prevention zones. Protects important resource spawns from being blocked by structures.', effect: 'True = extra building restrictions; False = only default prevention zones apply.' },
        { name: 'TribeNameChangeCooldown', default: '15.0', type: 'float', description: 'Sets the cooldown time in minutes between tribe name changes. Prevents frequent name changes that could be used to confuse other players.', effect: 'Higher values = longer wait between name changes. Default 15 minutes.' },
        { name: 'PreventOutOfTribePinCodeUse', default: 'False', type: 'boolean', description: 'Prevents players outside your tribe from using PIN codes to access your structures. Normally, sharing a PIN allows anyone to use locked containers and doors.', effect: 'True = PIN codes only work for tribe members; False = anyone with the PIN can access.' },
    ],

    'gameplay-transfers': [
        { name: 'noTributeDownloads', default: 'False', type: 'boolean', description: 'Completely disables all Cross-ARK downloads from Obelisks and Transmitters. More restrictive than individual download prevention settings.', effect: 'True = all transfers blocked; False = transfers allowed (subject to other settings).' },
        { name: 'ServerAutoForceRespawnWildDinosInterval', default: '0.0', type: 'float', description: 'Forces all wild creatures to respawn when the server restarts if the specified number of seconds has passed. Useful for refreshing creature populations periodically.', effect: '0 = disabled; 86400 = respawn wilds if server has been up for 24+ hours. Clears stuck or problematic wild spawns.' },
        { name: 'FreezeReaperPregnancy', default: 'False', type: 'boolean', description: 'Stops the Reaper King pregnancy timer from progressing. The embryo will not grow and the player will not gain XP from it until this is disabled.', effect: 'True = pregnancy frozen (useful for timing births); False = pregnancy progresses normally.' },
        { name: 'AllowAnyoneBabyImprintCuddle', default: 'False', type: 'boolean', description: 'Allows any tribe member to perform imprinting care actions, not just the original imprinter. Normally only the person who claimed the baby can imprint it.', effect: 'True = anyone in tribe can imprint; False = only the claimer can imprint (imprint bonus still goes to claimer).' },
    ],

    // Rates & Multipliers - Difficulty & XP
    'rates-difficulty': [
        { name: 'DifficultyOffset', default: '1.0', type: 'float', description: 'Controls the overall difficulty of the game by scaling wild creature levels and loot quality. A value of 1.0 (with default OverrideOfficialDifficulty) means wild creatures can spawn up to level 120.', effect: 'Higher values increase max wild creature levels and improve loot quality. Combined with OverrideOfficialDifficulty, determines the level cap formula.' },
        { name: 'OverrideOfficialDifficulty', default: '0.0', type: 'float', description: 'Overrides the internal difficulty value that determines maximum wild creature levels. The default difficulty is 4, which caps wild creatures at level 120. Setting this to 5.0 raises the cap to level 150.', effect: '0.0 uses the default (level 120 cap). 5.0 = level 150 cap. 10.0 = level 300 cap. Higher values allow higher level wild spawns.' },
        { name: 'XPMultiplier', default: '1.0', type: 'float', description: 'Multiplies all experience points gained by players and their tamed creatures. Affects kills, harvesting, crafting, and other XP sources.', effect: '2.0 = double XP rate; 0.5 = half XP rate. Higher values speed up leveling progression.' },
    ],

    'rates-taming': [
        { name: 'TamingSpeedMultiplier', default: '1.0', type: 'float', description: 'Multiplies the speed at which creatures are tamed. Affects both knockout and passive taming by reducing the number of feedings required.', effect: '2.0 = taming completes twice as fast; 10.0 is common for boosted servers. Does not affect taming effectiveness calculations.' },
    ],

    'rates-harvesting': [
        { name: 'HarvestAmountMultiplier', default: '1.0', type: 'float', description: 'Multiplies the amount of resources gathered from each harvest action. Applies to everything: trees, rocks, bushes, corpses, and other harvestables.', effect: '2.0 = double resources per hit; 5.0 = five times normal yield. Very high values can cause inventory overflow.' },
        { name: 'HarvestHealthMultiplier', default: '1.0', type: 'float', description: 'Multiplies the health of harvestable objects like trees, rocks, and corpses. Objects with more health require more hits to destroy but yield more total resources.', effect: '2.0 = objects take twice as many hits, yielding more total resources. Useful when combined with HarvestAmountMultiplier for balanced gathering.' },
        { name: 'ResourcesRespawnPeriodMultiplier', default: '1.0', type: 'float', description: 'Scales how long resources take to respawn after being harvested. Affects trees, rocks, bushes, and other respawning nodes.', effect: '0.5 = resources respawn twice as fast; 2.0 = takes twice as long to respawn. Lower values keep areas resource-rich.' },
        { name: 'ClampResourceHarvestDamage', default: 'False', type: 'boolean', description: 'When enabled, prevents "overkill" harvesting where high-damage creatures would otherwise get extra resources from destroying objects in one hit.', effect: 'True limits resources to what the object health would naturally provide. False allows powerful creatures to get bonus resources from overkill damage.' },
        { name: 'UseOptimizedHarvestingHealth', default: 'False', type: 'boolean', description: 'Enables an optimized calculation method for harvesting health calculations. May improve server performance but could affect certain resource drops.', effect: 'True = optimized harvesting calculations; False = standard calculations.' },
    ],

    'rates-stacking': [
        { name: 'ItemStackSizeMultiplier', default: '1.0', type: 'float', description: 'Multiplies the maximum stack size for all stackable items. Items that normally stack to 100 would stack to 200 at 2.0. Does not affect items that cannot stack (stack size of 1).', effect: '2.0 = double stack sizes; 10.0 = ten times normal stacks. Reduces inventory management but may affect game balance.' },
    ],

    // Player Settings - Damage & Resistance
    'player-damage': [
        { name: 'PlayerDamageMultiplier', default: '1.0', type: 'float', description: 'Multiplies all damage dealt by players, including melee attacks and tools. Does not affect weapon damage from firearms or mounted weapons.', effect: '2.0 = players deal double melee damage; 0.5 = half damage. Useful for adjusting player vs creature balance.' },
        { name: 'PlayerResistanceMultiplier', default: '1.0', type: 'float', description: 'Scales how much damage players receive from all sources. Note: This works inversely - higher values mean MORE damage taken.', effect: '2.0 = players take double damage (less resistant); 0.5 = players take half damage (more resistant). Affects survivability significantly.' },
    ],

    'player-survival': [
        { name: 'PlayerCharacterFoodDrainMultiplier', default: '1.0', type: 'float', description: 'Scales how quickly players lose food (get hungry). Affects the rate at which the food stat depletes over time and during activities.', effect: '0.5 = players get hungry half as fast; 2.0 = twice as fast. Lower values reduce the survival grind.' },
        { name: 'PlayerCharacterWaterDrainMultiplier', default: '1.0', type: 'float', description: 'Scales how quickly players lose water (get thirsty). Affects hydration depletion during normal activity and in hot environments.', effect: '0.5 = players get thirsty half as fast; 2.0 = twice as fast. Important for desert and hot biome balance.' },
        { name: 'PlayerCharacterStaminaDrainMultiplier', default: '1.0', type: 'float', description: 'Scales how quickly players lose stamina when sprinting, swimming, or performing stamina-consuming actions.', effect: '0.5 = stamina drains half as fast (can sprint longer); 2.0 = drains twice as fast. Affects exploration and combat endurance.' },
    ],

    'player-recovery': [
        { name: 'PlayerCharacterHealthRecoveryMultiplier', default: '1.0', type: 'float', description: 'Scales how quickly players naturally regenerate health over time when not taking damage and when their food is above the healing threshold.', effect: '2.0 = health regenerates twice as fast; 0.5 = half as fast. Does not affect healing from consumables or medical items.' },
        { name: 'OxygenSwimSpeedStatMultiplier', default: '1.0', type: 'float', description: 'Scales how much each point invested in the Oxygen stat increases swimming speed. By default, each oxygen point adds a small swim speed bonus.', effect: '2.0 = double the swim speed bonus per oxygen level; 0 = oxygen provides no swim speed bonus at all.' },
    ],

    'player-disease': [
        { name: 'PreventDiseases', default: 'False', type: 'boolean', description: 'Completely disables all diseases on the server, including Swamp Fever (Mega Rabies) and other contagious conditions. Players cannot catch or spread diseases.', effect: 'True = no diseases exist on the server; False = diseases function normally and can spread between players.' },
        { name: 'NonPermanentDiseases', default: 'False', type: 'boolean', description: 'Makes normally permanent diseases like Swamp Fever curable by dying and respawning. Without this, the only cure is the Lesser Antidote consumable.', effect: 'True = diseases are removed upon death; False = diseases persist through death and require proper cures.' },
    ],

    // Cryopod Settings - Deployment
    'cryopod-deployment': [
        { name: 'DisableCryopodEnemyCheck', default: 'False', type: 'boolean', description: 'When enabled, players can deploy creatures from cryopods even when enemies are nearby. By default, the game prevents cryopod use in combat situations.', effect: 'True allows cryopod use during combat; False enforces the default enemy proximity check.' },
        { name: 'AllowCryoFridgeOnSaddle', default: 'False', type: 'boolean', description: 'Allows Cryofridges to be placed and powered on platform saddles (like Quetzal or Brontosaurus platforms) and rafts.', effect: 'True allows mobile cryofridge setups; False restricts cryofridges to ground placement only.' },
        { name: 'DisableCryopodFridgeRequirement', default: 'False', type: 'boolean', description: 'Removes the requirement to be near a powered Cryofridge when deploying creatures from cryopods. Normally, deploying without a nearby cryofridge causes cryosickness.', effect: 'True allows deployment anywhere without penalty; False requires proximity to powered cryofridge.' },
    ],

    'cryopod-sickness': [
        { name: 'CryopodFridgeCooldowntime', default: '90', type: 'integer', description: 'Sets how long (in seconds) a creature cannot be used after being released from a cryopod when near a powered Cryofridge. This is the standard cryosickness duration.', effect: 'Higher values (e.g., 300) mean longer waits; lower values (e.g., 10) allow faster use; 0 disables this cooldown entirely.' },
        { name: 'EnableCryoSicknessPVE', default: 'False', type: 'boolean', description: 'Enables the cryopod cooldown timer (cryosickness) on PvE servers. By default, PvE servers do not have cryosickness penalties.', effect: 'True enables cryosickness on PvE; False keeps PvE cryopod use penalty-free.' },
    ],

    'cryopod-nerf': [
        { name: 'EnableCryopodNerf', default: 'False', type: 'boolean', description: 'Activates the cryopod nerf system that penalizes freshly deployed creatures. When enabled, creatures deal reduced damage and take increased damage for a short time after deployment. This prevents instant combat deployment tactics.', effect: 'True enables the nerf system (requires CryopodNerfDamageMult and CryopodNerfIncomingDamageMultPercent to be configured); False disables all cryopod deployment penalties.' },
        { name: 'CryopodNerfDamageMult', default: '0.0099999998', type: 'float', description: 'Reduces the damage output of creatures immediately after cryopod deployment. This is a percentage multiplier - a value of 0.01 means the creature deals only 1% of normal damage. Official servers use 0.1 (10% damage).', effect: 'Lower values reduce damage more severely; 0.1 = 10% damage output; 1.0 = full damage. Requires CryopodNerfDuration to be set.' },
        { name: 'CryopodNerfDuration', default: '0.0', type: 'integer', description: 'Sets how long (in seconds) the cryopod nerf penalties (reduced damage dealt, increased damage taken) last after deploying a creature. Official servers use 10 seconds.', effect: 'Higher values extend the penalty duration; 0 disables the cryopod nerf system entirely.' },
        { name: 'CryopodNerfIncomingDamageMultPercent', default: '0.0', type: 'float', description: 'Increases the damage taken by creatures immediately after cryopod deployment. This is an additive percentage - a value of 0.25 means 25% more damage taken. Official servers use 0.25.', effect: 'Higher values make deployed creatures more vulnerable; 0.25 = 25% extra damage taken; 0 = no extra damage.' },
    ],

    // Environment & World - Day/Night
    'environment-daynight': [
        { name: 'DayCycleSpeedScale', default: '1.0', type: 'float', description: 'Scales the overall speed of the complete day-night cycle. Affects both daytime and nighttime proportionally.', effect: '2.0 = days pass twice as fast; 0.5 = days last twice as long. Affects resource respawns tied to day cycles.' },
        { name: 'DayTimeSpeedScale', default: '1.0', type: 'float', description: 'Scales specifically how fast daytime passes relative to nighttime. Allows making days longer or shorter without affecting night length.', effect: '0.5 = daytime lasts twice as long; 2.0 = daytime passes twice as fast. Useful for extended daylight hours.' },
        { name: 'NightTimeSpeedScale', default: '1.0', type: 'float', description: 'Scales specifically how fast nighttime passes relative to daytime. Allows making nights shorter without affecting day length.', effect: '2.0 = nights pass twice as fast; 0.5 = nights last twice as long. Popular to speed up nights for visibility.' },
    ],

    'environment-weather': [
        { name: 'DisableWeatherFog', default: 'False', type: 'boolean', description: 'Disables the fog weather effect that reduces visibility. Fog can significantly impact gameplay, especially in PvP situations.', effect: 'True = no fog ever; False = normal fog weather patterns.' },
        { name: 'PreventSpawnAnimations', default: 'False', type: 'boolean', description: 'Skips the wake-up animation when players spawn or respawn. Provides faster respawn experience but removes some immersion.', effect: 'True = instant spawn (no wake-up animation); False = normal spawn animation plays.' },
        { name: 'RandomSupplyCratePoints', default: 'False', type: 'boolean', description: 'Makes supply drops spawn at random locations instead of fixed beacon spawn points. Creates unpredictable loot opportunities.', effect: 'True = randomized drop locations; False = drops spawn at predetermined points. May have issues on some maps.' },
    ],

    'environment-items': [
        { name: 'ClampItemSpoilingTimes', default: 'False', type: 'boolean', description: 'Limits item spoiling times to their maximum values even when preservation methods would extend them further. Prevents indefinite preservation.', effect: 'True = spoiling times capped; False = preservation stacks can extend times indefinitely.' },
        { name: 'ClampItemStats', default: 'False', type: 'boolean', description: 'Enables the item stat clamping system that limits how powerful item stats can become. Works with ItemStatClamps settings.', effect: 'True = item stats are limited; False = items can reach any stat value.' },
    ],

    'environment-transfers': [
        { name: 'TributeItemExpirationSeconds', default: '86400', type: 'integer', description: 'Sets how long in seconds items remain in the cross-ARK upload system before expiring. Items not downloaded within this time are lost.', effect: 'Default 86400 = 24 hours. Higher values give more time; 0 or negative uses default.' },
        { name: 'TributeDinoExpirationSeconds', default: '86400', type: 'integer', description: 'Sets how long in seconds uploaded creatures remain in the cross-ARK transfer system before expiring. Creatures not downloaded within this time are lost.', effect: 'Default 86400 = 24 hours. Higher values give more time; 0 or negative uses default.' },
        { name: 'TributeCharacterExpirationSeconds', default: '0', type: 'integer', description: 'Sets how long in seconds uploaded characters remain in the cross-ARK transfer system. Default 0 means characters never expire.', effect: '0 = characters never expire; positive values set expiration in seconds.' },
        { name: 'MaxTributeCharacters', default: '10', type: 'integer', description: 'Sets the maximum number of characters that can be stored in the cross-ARK upload system simultaneously. Cannot be reduced below default.', effect: 'Higher values allow more character storage; values below 10 revert to default.' },
        { name: 'MaxTributeDinos', default: '20', type: 'integer', description: 'Sets the maximum number of creatures that can be stored in the cross-ARK upload system simultaneously. Cannot be reduced below default.', effect: 'Higher values allow more creature storage; values below 20 revert to default.' },
        { name: 'MaxTributeItems', default: '50', type: 'integer', description: 'Sets the maximum number of item stacks that can be stored in the cross-ARK upload system simultaneously. Cannot be reduced below default.', effect: 'Higher values allow more item storage; values below 50 revert to default.' },
    ],

    'environment-admin': [
        { name: 'ExtinctionEventTimeInterval', default: '', type: 'text', description: 'Enables ARKpocalypse mode where the server periodically wipes and restarts fresh. The value is the time in seconds between extinction events.', effect: 'Empty = disabled; 2592000 = 30-day wipe cycle. Server completely resets when timer expires.' },
        { name: 'SpectatorPassword', default: '', type: 'text', description: 'Sets a password that allows non-admin players to enter spectator mode. Useful for tournaments or content creation without full admin access.', effect: 'Empty = spectator requires admin; any value = that password enables spectator mode.' },
        { name: 'AdminLogging', default: 'False', type: 'boolean', description: 'Broadcasts admin command usage to all players in the server chat. Provides transparency for admin actions on the server.', effect: 'True = admin commands are announced in chat; False = admin commands are silent.' },
    ],

    // Dinosaur Settings
    'dino-damage': [
        { name: 'DinoDamageMultiplier', default: '1.0', type: 'float', description: 'Multiplies damage dealt by wild creatures. Affects how dangerous wild dinosaurs are to players, tames, and structures.', effect: '2.0 = wild creatures deal double damage; 0.5 = half damage. Important for PvE difficulty balancing.' },
        { name: 'DinoResistanceMultiplier', default: '1.0', type: 'float', description: 'Scales how much damage wild creatures receive. Works inversely - higher values mean MORE damage taken by wild creatures.', effect: '2.0 = wild creatures take double damage (easier to kill); 0.5 = half damage (tankier). Affects taming knockout speed.' },
        { name: 'TamedDinoDamageMultiplier', default: '1.0', type: 'float', description: 'Multiplies damage dealt by tamed creatures specifically. Stacks with other damage modifiers. Does not affect wild creature damage.', effect: '2.0 = tamed creatures deal double damage; useful for making tames more combat-effective.' },
        { name: 'TamedDinoResistanceMultiplier', default: '1.0', type: 'float', description: 'Scales how much damage tamed creatures receive. Works inversely - higher values mean MORE damage taken.', effect: '0.5 = tames take half damage (tankier); 2.0 = tames take double damage (more fragile).' },
    ],

    'dino-food-stamina': [
        { name: 'DinoCharacterFoodDrainMultiplier', default: '1.0', type: 'float', description: 'Scales how quickly all creatures (wild and tamed) consume food. For wild creatures, this affects knockout taming speed since faster food drain means more frequent feeding.', effect: '2.0 = creatures get hungry twice as fast (faster knockout taming); 0.5 = half as fast (slower taming).' },
        { name: 'DinoCharacterStaminaDrainMultiplier', default: '1.0', type: 'float', description: 'Scales how quickly creatures lose stamina when running, flying, or performing stamina-consuming actions.', effect: '0.5 = creatures can run/fly longer before resting; 2.0 = creatures tire twice as fast.' },
        { name: 'DinoCharacterHealthRecoveryMultiplier', default: '1.0', type: 'float', description: 'Scales the natural health regeneration rate for all creatures. Affects how quickly wounded creatures heal over time.', effect: '2.0 = creatures heal twice as fast; 0.5 = heal half as fast. Important for post-combat recovery.' },
        { name: 'RaidDinoCharacterFoodDrainMultiplier', default: '1.0', type: 'float', description: 'Scales food consumption specifically for "raid" dinosaurs like the Titanosaur. These creatures normally cannot be fed and starve after taming.', effect: '2.0 = raid dinos starve twice as fast; 0.5 = half as fast. Only relevant if AllowRaidDinoFeeding is disabled.' },
    ],

    'dino-spawns': [
        { name: 'MaxTamedDinos', default: '5000.0', type: 'float', description: 'Sets the absolute maximum number of tamed creatures allowed on the entire server. When this cap is reached, no new taming can occur until creatures are killed or cryopodded.', effect: 'Higher values allow more tames but increase server load. Lower values force players to manage their tame populations.' },
        { name: 'MaxPersonalTamedDinos', default: '0', type: 'integer', description: 'Sets a per-tribe limit on how many tamed creatures a tribe can own. This is separate from the global MaxTamedDinos server cap.', effect: '0 = no tribe limit (uses global cap only). Official PvE uses 500; Official PvP uses 300. Platform saddle creatures may count extra.' },
        { name: 'AutoDestroyDecayedDinos', default: 'False', type: 'boolean', description: 'Automatically deletes tamed creatures that have reached the "claimable" decay state when the server restarts. Without this, decayed tames remain claimable by any player.', effect: 'True = decayed tames are deleted on restart; False = decayed tames become claimable by anyone.' },
        { name: 'DinoCountMultiplier', default: '1.0', type: 'float', description: 'Scales the number of wild creatures that spawn across the map. Affects creature density and how populated the world feels.', effect: '2.0 = double the wild creatures; 0.5 = half as many spawns. High values may impact server performance.' },
    ],

    'dino-special': [
        { name: 'AllowFlyerCarryPvE', default: 'False', type: 'boolean', description: 'Allows flying creatures like Argentavis and Quetzal to pick up wild creatures while in PvE mode. By default, flyer carry is disabled in PvE to prevent griefing.', effect: 'True = flyers can grab wild dinos in PvE; False = flyer carrying is disabled in PvE mode.' },
        { name: 'bForceCanRideFliers', default: 'False', type: 'boolean', description: 'Overrides map-specific flying restrictions (like Aberration) to allow flyer riding. Some maps disable flying creatures by design.', effect: 'True = flyers can be ridden on all maps; False = respects map-specific flying restrictions.' },
        { name: 'AllowRaidDinoFeeding', default: 'False', type: 'boolean', description: 'Allows Titanosaurs (raid dinosaurs) to be fed after taming, making them permanent tames. By default, Titanosaurs cannot eat and eventually starve.', effect: 'True = Titanosaurs can be fed and kept permanently; False = Titanosaurs will starve. Note: Maps have limited Titanosaur spawns.' },
        { name: 'DisableImprintDinoBuff', default: 'False', type: 'boolean', description: 'Disables the combat bonus that imprinted creatures receive when ridden by their imprinter. Normally, 100% imprint gives +30% damage and +30% resistance when the imprinter rides.', effect: 'True = no rider imprint bonus (imprint only affects base stats); False = imprinters get combat bonuses on their imprinted creatures.' },
        { name: 'PreventMateBoost', default: 'False', type: 'boolean', description: 'Disables the mate boost buff that creatures receive when near an opposite-gender mate of the same species. Mate boost normally provides +33% damage resistance.', effect: 'True = creatures do not receive mate boost; False = mate boost functions normally.' },
        { name: 'AllowFlyingStaminaRecovery', default: 'False', type: 'boolean', description: 'Allows players standing on flying creatures (not mounted) to regenerate stamina. By default, being on a flyer prevents stamina recovery.', effect: 'True = stamina regenerates while standing on flyers; False = must land or dismount to regenerate stamina.' },
    ],

    // Structure Settings
    'structure-pickup': [
        { name: 'AlwaysAllowStructurePickup', default: 'False', type: 'boolean', description: 'Allows structures to be picked up at any time after placement, bypassing the normal pickup timer. By default, structures can only be picked up within a short window after placing.', effect: 'True = pick up structures anytime; False = only during the pickup timer window after placement.' },
        { name: 'StructurePickupTimeAfterPlacement', default: '30.0', type: 'float', description: 'Sets how long in seconds after placing a structure that it can be picked up using the quick pickup feature. After this window, structures are permanent unless demolished.', effect: 'Higher values = longer pickup window; 0 = no pickup period (instant permanent).' },
        { name: 'StructurePickupHoldDuration', default: '0.5', type: 'float', description: 'Sets how long in seconds you must hold the interact key to pick up a structure. Prevents accidental pickups during normal interaction.', effect: '0 = instant pickup; higher values require longer hold time.' },
    ],

    'structure-damage': [
        { name: 'StructureDamageMultiplier', default: '1.0', type: 'float', description: 'Multiplies damage dealt by defensive structures like spike walls and turrets. Affects how dangerous your base defenses are to attackers.', effect: '2.0 = defenses deal double damage; 0.5 = half damage. Important for base defense balance.' },
        { name: 'StructureResistanceMultiplier', default: '1.0', type: 'float', description: 'Scales how much damage structures receive. Works inversely - higher values mean MORE damage taken. Critical for raid balance in PvP.', effect: '0.5 = structures take half damage (harder to raid); 2.0 = double damage (easier to raid).' },
        { name: 'StructurePreventResourceRadiusMultiplier', default: '1.0', type: 'float', description: 'Scales the radius around structures where resources cannot respawn. Structures naturally block resource regrowth in their vicinity.', effect: '2.0 = double the no-respawn radius; 0.5 = half the radius. Affects resource availability near bases.' },
    ],

    'structure-decay': [
        { name: 'FastDecayUnsnappedCoreStructures', default: 'False', type: 'boolean', description: 'Enables rapid decay for core structures (foundations, pillars, fence supports, Tek Storage) that are not snapped to other structures. Combats pillar spam.', effect: 'True = unsnapped core structures decay quickly; False = normal decay timers apply.' },
        { name: 'OnlyDecayUnsnappedCoreStructures', default: 'False', type: 'boolean', description: 'Restricts the decay system to only affect unsnapped core structures. Connected structures will not decay even if their owner is inactive.', effect: 'True = only lone pillars/foundations decay; False = all structures can decay normally.' },
        { name: 'OnlyAutoDestroyCoreStructures', default: 'False', type: 'boolean', description: 'When decay triggers auto-destruction, only core structures (foundations, pillars) are destroyed. Attached structures remain until their support is destroyed.', effect: 'True = only foundations auto-destruct (others fall when support goes); False = all structures auto-destruct.' },
        { name: 'AutoDestroyOldStructuresMultiplier', default: '0.0', type: 'float', description: 'Enables automatic destruction of abandoned structures after extended decay. Requires -AutoDestroyStructures command line flag to function.', effect: '0 = disabled; 1.0 = enabled with default timing; higher values scale the destruction timer.' },
    ],

    'structure-platforms': [
        { name: 'OverrideStructurePlatformPrevention', default: 'False', type: 'boolean', description: 'Allows turrets and spike walls to be placed on platform saddles (Quetzal, Bronto, etc.) and rafts. By default, these defensive structures are blocked on mobile platforms.', effect: 'True = turrets/spikes allowed on platforms; False = defensive structures blocked on platforms.' },
        { name: 'MaxPlatformSaddleStructureLimit', default: '75', type: 'integer', description: 'Sets the server-wide limit on platform saddle creatures (Quetzal, Bronto, Paracer, etc.) and rafts that can exist simultaneously. Not per-tribe.', effect: 'Higher allows more mobile bases; lower reduces platform spam. This is a global server limit.' },
        { name: 'MaxGateFrameOnSaddles', default: '0', type: 'integer', description: 'Limits how many gateway structures can be placed on a single platform saddle. Gateways are often used for turret towers and defensive builds.', effect: '0 = no gateways on platforms (Official PvE); 2 = Official PvP limit. Not retroactive to existing structures.' },
        { name: 'PerPlatformMaxStructuresMultiplier', default: '1.0', type: 'float', description: 'Scales the maximum number of structures that can be placed on each platform saddle and raft. The base limit varies by platform type.', effect: '2.0 = double structures per platform; 0.5 = half. Affects mobile base building capacity.' },
        { name: 'PlatformSaddleBuildAreaBoundsMultiplier', default: '1.0', type: 'float', description: 'Scales how far from the platform center structures can be placed. Allows structures to extend further beyond the visible platform area.', effect: 'Higher values = larger building area; can allow structures to float far from the platform.' },
        { name: 'PersonalTamedDinosSaddleStructureCost', default: '0', type: 'integer', description: 'Sets how many tame slots a platform saddle creature with structures counts as toward the tribe tame limit. Encourages efficient platform usage.', effect: '0 = counts as 1 tame; 19 = counts as 20 tames. Penalizes excessive platform saddle usage.' },
    ],

    'structure-density': [
        { name: 'AllowCaveBuildingPvE', default: 'False', type: 'boolean', description: 'Allows players to build structures inside caves when the server is in PvE mode. By default, cave building is restricted in PvE to prevent blocking resources and artifacts.', effect: 'True = cave building allowed in PvE; False = caves are no-build zones in PvE.' },
        { name: 'AllowCaveBuildingPvP', default: 'True', type: 'boolean', description: 'Allows players to build structures inside caves when the server is in PvP mode. Cave bases are common defensive positions in PvP due to limited entry points.', effect: 'True = cave building allowed in PvP; False = caves are no-build zones in PvP.' },
        { name: 'IgnoreLimitMaxStructuresInRangeTypeFlag', default: 'False', type: 'boolean', description: 'Removes the 150-structure limit for decorative items like flags, signs, trophy mounts, and other non-essential structures within an area.', effect: 'True = no limit on decorative structures; False = enforces 150 decorative item cap per area.' },
        { name: 'MaxStructuresInRange', default: '1300', type: 'integer', description: 'Legacy setting for maximum structures allowed in an area. Deprecated in favor of TheMaxStructuresInRange. May still affect some calculations.', effect: 'Deprecated - use TheMaxStructuresInRange instead.' },
        { name: 'TheMaxStructuresInRange', default: '10500', type: 'integer', description: 'Sets the maximum number of structures allowed within a hard-coded range. Once reached, no new structures can be placed in that area until some are demolished.', effect: 'Higher values allow denser building; lower values limit base sizes. Very high values may affect performance.' },
        { name: 'MaxStructuresInSmallRadius', default: '0', type: 'integer', description: 'Sets the maximum structures allowed in a small radius defined by RadiusStructuresInSmallRadius. Used to prevent extreme structure density.', effect: '0 = disabled; positive values enforce density limits. Works with RadiusStructuresInSmallRadius.' },
        { name: 'RadiusStructuresInSmallRadius', default: '0.0', type: 'float', description: 'Defines the radius in game units for the small structure density check. Works with MaxStructuresInSmallRadius to prevent structure spam.', effect: '0 = disabled; positive values define the check radius. Smaller radius = more localized limits.' },
        { name: 'MaxStructuresToProcess', default: '0', type: 'integer', description: 'Limits how many structures the server processes per tick for decay and other calculations. Used to prevent performance issues on heavily built servers.', effect: '0 = default processing; positive values cap per-tick processing. May delay decay checks.' },
        { name: 'MaxTrainCars', default: '8', type: 'integer', description: 'Sets the maximum number of train cars that can be connected to a single train locomotive. Trains are a transport feature in some ARK maps.', effect: 'Higher values = longer trains; lower values limit train length.' },
    ],

    // PvP/PvE Settings
    'pvp-modes': [
        { name: 'serverPVE', default: 'False', type: 'boolean', description: 'Switches the server to PvE (Player vs Environment) mode. In PvE, players cannot damage each other, their tames, or their structures. Tribes can still declare mutual wars.', effect: 'True = PvE mode (no player combat); False = PvP mode (full player combat enabled).' },
        { name: 'DisablePvEGamma', default: 'False', type: 'boolean', description: 'Prevents players from using the "gamma" console command to brighten nights in PvE mode. Gamma adjustment can make night-time visibility trivial.', effect: 'True = gamma command blocked in PvE; False = players can adjust gamma freely.' },
        { name: 'EnablePvPGamma', default: 'False', type: 'boolean', description: 'Allows players to use the "gamma" console command in PvP mode. By default, gamma is disabled in PvP to prevent unfair night vision advantages.', effect: 'True = gamma command allowed in PvP; False = gamma blocked to maintain night-time difficulty.' },
        { name: 'PreventTribeAlliances', default: 'False', type: 'boolean', description: 'Disables the tribe alliance system that allows multiple tribes to cooperate without friendly fire. Alliances share vision and cannot damage allied structures/tames.', effect: 'True = no alliances allowed; False = tribes can form alliances.' },
        { name: 'AllowHitMarkers', default: 'True', type: 'boolean', description: 'Shows visual hit indicators when ranged attacks successfully hit a target. Useful feedback for combat, but some prefer a more hardcore experience without them.', effect: 'True = hit markers appear on successful hits; False = no visual feedback on hits.' },
    ],

    'pvp-offline': [
        { name: 'PreventOfflinePvP', default: 'False', type: 'boolean', description: 'Enables Offline Raid Protection (ORP). When all tribe members log off, their structures and creatures become invulnerable after a delay, preventing offline raiding.', effect: 'True = ORP enabled (offline tribes are protected); False = bases can be raided anytime.' },
        { name: 'PreventOfflinePvPInterval', default: '0.0', type: 'float', description: 'Sets the delay in seconds before Offline Raid Protection activates after all tribe members disconnect. Prevents log-off abuse during active raids.', effect: '0 = instant protection; 900 (15 min) is common. Official PvE uses 10 seconds.' },
        { name: 'PvPStructureDecay', default: 'False', type: 'boolean', description: 'Allows structures to decay even while Offline Raid Protection is active. Without this, ORP completely freezes decay timers.', effect: 'True = structures can become claimable/demolishable while ORP is active; False = ORP pauses decay.' },
        { name: 'PvPDinoDecay', default: 'False', type: 'boolean', description: 'Allows tamed creatures to decay (become claimable) even while Offline Raid Protection is active. Normally ORP prevents creature decay.', effect: 'True = creatures can become claimable while tribe is offline; False = ORP protects creatures from decay.' },
    ],

    'pvp-decay': [
        { name: 'DisableStructureDecayPvE', default: 'False', type: 'boolean', description: 'Completely disables structure decay in PvE mode. Structures will never become demolishable regardless of how long the owner is offline.', effect: 'True = structures never decay (may cause server clutter); False = normal decay timers apply.' },
        { name: 'DisableDinoDecayPvE', default: 'False', type: 'boolean', description: 'Completely disables creature decay in PvE mode. Tames will never become claimable regardless of how long the owner is offline.', effect: 'True = creatures never become claimable; False = normal decay allows others to claim abandoned tames.' },
        { name: 'PvEStructureDecayPeriodMultiplier', default: '1.0', type: 'float', description: 'Scales how long it takes for structures to become demolishable. Works in both PvP and PvE modes. Different structure types have different base decay times.', effect: '2.0 = structures take twice as long to decay; 0.5 = decay happens twice as fast.' },
        { name: 'PvEDinoDecayPeriodMultiplier', default: '1.0', type: 'float', description: 'Scales how long it takes for tamed creatures to become claimable after their tribe stops refreshing them. Requires DisableDinoDecayPvE to be False.', effect: '2.0 = creatures take twice as long to become claimable; 0.5 = half the time.' },
        { name: 'PvEAllowStructuresAtSupplyDrops', default: 'False', type: 'boolean', description: 'Allows players to build structures near supply drop (beacon) spawn locations in PvE mode. By default, these areas are protected to ensure everyone can access drops.', effect: 'True = building allowed near drops; False = building blocked around beacon spawn points.' },
    ],

    'pvp-combat': [
        { name: 'AllowMultipleAttachedC4', default: 'False', type: 'boolean', description: 'Allows multiple C4 explosive charges to be attached to a single creature. By default, only one C4 can be placed on a creature at a time.', effect: 'True = multiple C4 can be stacked on creatures; False = one C4 per creature limit.' },
        { name: 'AllowHideDamageSourceFromLogs', default: 'True', type: 'boolean', description: 'When enabled, tribe logs hide who caused damage to tribe structures and creatures. This prevents tracking raiders through logs.', effect: 'True = damage sources hidden in logs; False = logs show who attacked your stuff.' },
        { name: 'ForceAllStructureLocking', default: 'False', type: 'boolean', description: 'Makes all newly placed structures default to the locked state. Players must manually unlock doors and containers they want others to access.', effect: 'True = all structures start locked; False = structures start unlocked.' },
        { name: 'ServerForceNoHUD', default: 'False', type: 'boolean', description: 'Hides the floating name and level HUD that appears when looking at creatures not owned by your tribe. Makes identifying wild/enemy creatures harder.', effect: 'True = no HUD for non-tribe creatures; False = normal creature HUD display.' },
    ],

    'pvp-transfers': [
        { name: 'PreventDownloadSurvivors', default: 'False', type: 'boolean', description: 'Prevents players from downloading their characters from the cross-ARK transfer system (Obelisks, Transmitters). Characters can be uploaded but not brought to this server.', effect: 'True = cannot bring characters to this server; False = character downloads allowed.' },
        { name: 'PreventDownloadItems', default: 'False', type: 'boolean', description: 'Prevents players from downloading items from the cross-ARK transfer system. Items stored in Obelisks or Transmitters cannot be retrieved on this server.', effect: 'True = cannot bring items to this server; False = item downloads allowed.' },
        { name: 'PreventDownloadDinos', default: 'False', type: 'boolean', description: 'Prevents players from downloading tamed creatures from the cross-ARK transfer system. Creatures uploaded elsewhere cannot be retrieved on this server.', effect: 'True = cannot bring creatures to this server; False = creature downloads allowed.' },
        { name: 'PreventUploadSurvivors', default: 'False', type: 'boolean', description: 'Prevents players from uploading their characters to the cross-ARK transfer system from this server. Characters stay locked to this server.', effect: 'True = characters cannot be uploaded; False = character uploads allowed.' },
        { name: 'PreventUploadItems', default: 'False', type: 'boolean', description: 'Prevents players from uploading items to the cross-ARK transfer system from this server. Items cannot leave this server via Obelisks or Transmitters.', effect: 'True = items cannot be uploaded; False = item uploads allowed.' },
        { name: 'PreventUploadDinos', default: 'False', type: 'boolean', description: 'Prevents players from uploading tamed creatures to the cross-ARK transfer system from this server. Creatures stay locked to this server.', effect: 'True = creatures cannot be uploaded; False = creature uploads allowed.' },
        { name: 'MinimumDinoReuploadInterval', default: '0.0', type: 'float', description: 'Sets a cooldown in seconds before a creature can be uploaded again after being downloaded. Prevents rapid creature shuffling between servers.', effect: '0 = no cooldown; 43200 (12 hours) is common. Higher values discourage frequent server-hopping with tames.' },
    ],

    'pvp-tribes': [
        { name: 'TribeMergeAllowed', default: 'True', type: 'boolean', description: 'Allows two tribes to merge into one, combining all members, structures, and creatures. The merged tribe uses one of the original tribe names.', effect: 'True = tribe merging enabled; False = tribes cannot merge.' },
        { name: 'TribeMergeCooldown', default: '0.0', type: 'float', description: 'Sets a cooldown in seconds before a tribe can perform another merge after merging. Prevents rapid tribe restructuring.', effect: '0 = no cooldown between merges; higher values enforce waiting periods.' },
    ],

    // Ragnarok Settings
    'server-ragnarok': [
        { name: 'AllowMultipleTamedUnicorns', default: 'False', type: 'boolean', section: 'Ragnarok', description: 'Controls the Unicorn spawning rules on Ragnarok. By default, only one wild Unicorn can exist at a time, making them rare and valuable.', effect: 'False = only one wild Unicorn; True = allows one wild plus unlimited tamed Unicorns to coexist.' },
        { name: 'EnableVolcano', default: 'True', type: 'boolean', section: 'Ragnarok', description: 'Controls whether the volcanic eruption events occur on Ragnarok. The volcano periodically becomes active, making the area dangerous with lava and meteor strikes.', effect: 'True = volcano erupts periodically; False = volcano is always dormant and safe to build near.' },
        { name: 'UnicornSpawnInterval', default: '24', type: 'integer', section: 'Ragnarok', description: 'Sets the minimum hours before a new wild Unicorn can spawn after the previous one was tamed or killed. Actual spawn may take up to 2x this time.', effect: 'Lower values = more frequent Unicorn opportunities; 24 hours default, max wait is 48 hours.' },
        { name: 'VolcanoIntensity', default: '1', type: 'float', section: 'Ragnarok', description: 'Controls how intense and dangerous volcanic eruptions are. Lower values create more intense eruptions with more projectiles and damage.', effect: '1.0 = normal intensity; 0.5 = more intense (use carefully on multiplayer); minimum 0.25.' },
        { name: 'VolcanoInterval', default: '0', type: 'integer', section: 'Ragnarok', description: 'Sets the time between volcanic eruptions. A value of 0 uses random intervals between approximately 83 and 250 minutes.', effect: '0 = random 5000-15000 second intervals; positive values act as multipliers (minimum 0.1).' },
    ],

    // Valguero Settings
    'server-valguero': [
        { name: 'ValgueroMemorialEntries', default: '', type: 'string', description: 'Adds custom names to the interactive memorial monument on Valguero. This is a community feature to honor players or add personal touches to the map.', effect: 'Names separated by semicolons will appear on the memorial. Example: "PlayerOne;PlayerTwo;GuildName"' },
    ],

    // Fjordur Settings
    'server-fjordur': [
        { name: 'UseFjordurTraversalBuff', default: 'False', type: 'boolean', description: 'Enables the realm teleportation ability on Fjordur, allowing players to press R to travel between the main world, Asgard, Jotunheim, and Vanaheim.', effect: 'True = realm teleportation enabled; False = must use terminals to travel between realms.' },
    ],

    // Genesis Settings
    'server-genesis': [
        { name: 'AllowTekSuitPowersInGenesis', default: 'False', type: 'boolean', description: 'Enables TEK suit abilities (flight, dash, underwater breathing) on Genesis: Part 1. By default, TEK suit powers are disabled on this map for balance.', effect: 'True = TEK suits work normally on Genesis Part 1; False = TEK suit abilities are disabled.' },
        { name: 'MaxHexagonsPerCharacter', default: '2000000000', type: 'integer', description: 'Sets the maximum Hexagons (Genesis currency) a single character can hold. Hexagons are earned from missions and spent in the HLNA store.', effect: 'Default is 2 billion; Official uses 2,500,000. Lower values limit wealth accumulation.' },
    ],

    // Aberration Settings
    'server-aberration': [
        { name: 'CrossARKAllowForeignDinoDownloads', default: 'False', type: 'boolean', description: 'Allows downloading non-native creatures from other ARKs to Aberration. By default, only Aberration-native creatures can be transferred in.', effect: 'True = any creature can be downloaded; False = only Aberration creatures allowed (maintains map balance).' },
        { name: 'MaxCosmoWeaponAmmo', default: '-1', type: 'float', description: 'Sets the maximum ammo capacity for the Cosmo (Astrodelphis-like creature) web slinger attack. The -1 default makes it scale with Cosmo level.', effect: '-1 = ammo scales with level; positive values set a fixed maximum regardless of level.' },
        { name: 'CosmoWeaponAmmoReloadAmount', default: '1', type: 'float', description: 'Sets how much ammo regenerates over time for the Cosmo web slinger. Controls how quickly the attack becomes available again after use.', effect: 'Higher values = faster ammo regeneration; 1 is the default regeneration rate.' },
    ],

    // Extinction Settings
    'server-extinction': [
        { name: 'WorldBossKingKaijuSpawnTime', default: '19:00:00', type: 'string', description: 'Sets the in-game time when the King Titan world boss spawns on Extinction. The King Titan is a massive, challenging encounter.', effect: 'Format is HH:MM:SS. Default 19:00:00 (7 PM). Changing this affects when players can attempt the fight.' },
        { name: 'ForceGachaUnhappyInCaves', default: 'True', type: 'boolean', description: 'Forces Gacha creatures to become unhappy when inside caves, preventing them from producing resources. Gachas normally produce items when happy.', effect: 'True = Gachas cannot farm in caves; False = Gachas work normally in caves.' },
        { name: 'ArmadoggoDeathCooldown', default: '3600', type: 'float', description: 'Sets the respawn cooldown in seconds for the Armadoggo (shoulder pet) after it takes fatal damage protecting its owner. It returns after this time.', effect: 'Default 3600 = 1 hour until Armadoggo returns. Must be greater than 0.' },
    ],

    // Lost Colony - Tek Bunker Settings
    'lostcolony-bunker': [
        { name: 'LimitBunkersPerTribe', default: 'True', type: 'boolean', description: 'Enables a per-tribe limit on Tek Bunker ownership on the Lost Colony map. When enabled, tribes can only own up to the number specified by LimitBunkersPerTribeNum.', effect: 'True = tribe bunker limits enforced; False = unlimited bunkers per tribe.' },
        { name: 'LimitBunkersPerTribeNum', default: '3', type: 'integer', description: 'Sets the maximum number of Tek Bunkers a single tribe can own on Lost Colony when LimitBunkersPerTribe is enabled.', effect: 'Default 3 bunkers per tribe. Higher = more bunkers allowed; lower = stricter limits.' },
        { name: 'AllowBunkersInPreventionZones', default: 'False', type: 'boolean', description: 'Allows Tek Bunker cores to be placed in areas normally restricted from building on the Lost Colony map, such as near important resources or spawn points.', effect: 'True = bunker cores can be placed anywhere; False = bunkers blocked in prevention zones.' },
        { name: 'AllowRidingDinosInsideBunkers', default: 'True', type: 'boolean', description: 'Allows players to mount and ride their tamed creatures while inside a Tek Bunker interior. Disabling can affect bunker defense strategies.', effect: 'True = can mount creatures inside bunkers; False = must dismount before entering.' },
        { name: 'AllowBunkerModulesAboveGround', default: 'False', type: 'boolean', description: 'Allows Tek Bunker expansion modules to extend above ground level on Lost Colony. By default, bunker modules must remain underground.', effect: 'True = modules can build above surface; False = modules must stay underground.' },
        { name: 'AllowDinoAIInsideBunkers', default: 'True', type: 'boolean', description: 'Allows tamed creatures inside Tek Bunkers to use their AI behaviors (wandering, attacking, mating, etc.). Disabling freezes creature AI inside bunkers.', effect: 'True = creatures behave normally inside bunkers; False = creature AI disabled in bunkers.' },
        { name: 'AllowBunkerModulesInPreventionZones', default: 'False', type: 'boolean', description: 'Allows Tek Bunker expansion modules (not cores) to extend into building prevention zones on Lost Colony.', effect: 'True = modules can extend into restricted areas; False = modules blocked by prevention zones.' },
        { name: 'MinDistanceBetweenBunkers', default: '3000.0', type: 'float', description: 'Sets the minimum distance in game units between Tek Bunker cores. Prevents bunkers from being placed too close together on Lost Colony.', effect: 'Higher values spread bunkers further apart; lower values allow closer placement. 3000 = ~30 foundations.' },
        { name: 'EnemyAccessBunkerHPThreshold', default: '0.25', type: 'float', description: 'The bunker health percentage at which enemies can enter. Once bunker HP drops below this threshold, the protective barrier fails and enemies can breach.', effect: '0.25 = enemies enter at 25% HP or below. Higher = breachable at higher HP; lower = must damage more to breach.' },
        { name: 'BunkerUnderHPThresholdDmgMultiplier', default: '0.05', type: 'float', description: 'Damage multiplier applied to bunkers once they drop below the HP threshold. Reduces incoming damage to prevent instant destruction after breach.', effect: '0.05 = bunker takes only 5% damage when below threshold. Higher = more damage; lower = more resistant.' },
    ],

    // Lost Colony - CryoHospital Settings
    'lostcolony-cryohospital': [
        { name: 'CryoHospitalHoursToRegenHP', default: '1.0', type: 'float', description: 'Sets how many real-time hours it takes for a creature stored in a CryoHospital to fully regenerate from 0 to 100% health. Faster than natural healing.', effect: 'Lower values = faster HP recovery; 1.0 = full heal in 1 hour. Useful for quickly healing wounded creatures.' },
        { name: 'CryoHospitalHoursToRegenFood', default: '24.0', type: 'float', description: 'Sets how many real-time hours it takes for a creature stored in a CryoHospital to fully regenerate from 0 to 100% food. Slower than HP recovery by default.', effect: 'Lower values = faster food recovery; 24.0 = full food in 24 hours. Saves on feeding starving creatures.' },
        { name: 'CryoHospitalHoursToDrainTorpor', default: '1.0', type: 'float', description: 'Sets how many real-time hours it takes for an unconscious creature in a CryoHospital to fully drain torpor and wake up (torpor reaches 0).', effect: 'Lower values = creatures wake faster; 1.0 = fully awake in 1 hour. Useful for knocked-out tames.' },
        { name: 'CryoHospitalMatingCooldownReduction', default: '2.0', type: 'float', description: 'Multiplier for how much faster mating cooldowns decrease while a creature is stored in a CryoHospital compared to standing outside.', effect: '2.0 = cooldown decreases 2x faster; higher = even faster cooldown reduction. Speeds up breeding programs.' },
    ],

    // Lost Colony - Bloodforge Settings
    'lostcolony-bloodforge': [
        { name: 'BloodforgeReinforceExtraDurability', default: '0.3', type: 'float', description: 'The percentage of extra durability added to items when reinforced at the Bloodforge station on Lost Colony. Reinforcement extends item lifespan.', effect: '0.3 = 30% extra durability; higher = more bonus durability. Affects how long reinforced items last.' },
        { name: 'BloodforgeReinforceResourceCostMultiplier', default: '3.0', type: 'float', description: 'Multiplier for the resource cost of reinforcing items at the Bloodforge. Higher values make reinforcement more expensive.', effect: '3.0 = 3x normal resource cost; higher = more expensive; 1.0 = base cost.' },
        { name: 'BloodforgeReinforceSpeedMultiplier', default: '0.1', type: 'float', description: 'Multiplier for how long the Bloodforge reinforcement process takes. Lower values mean slower reinforcement (more time required).', effect: '0.1 = takes 10x longer (only 10% speed); higher = faster reinforcement; 1.0 = normal speed.' },
    ],

    // Lost Colony - Outpost Settings
    'lostcolony-outpost': [
        { name: 'MaxActiveOutposts', default: '', type: 'integer', description: 'Sets the maximum number of Outpost capture points that can be active simultaneously on the Lost Colony map. Outposts are contestable objectives.', effect: 'Empty = no limit (all outposts active). Set a number to limit active outposts at any time.' },
        { name: 'MaxActiveResourceCaches', default: '', type: 'integer', description: 'Sets the maximum number of Resource Cache locations that can be active simultaneously on Lost Colony. Resource caches provide bonus materials.', effect: 'Empty = no limit. Set a number to limit how many resource caches spawn at once.' },
        { name: 'MaxActiveCityOutposts', default: '', type: 'integer', description: 'Sets the maximum number of City Outposts that can be active simultaneously on Lost Colony. City outposts are larger, more valuable capture points.', effect: 'Empty = no limit. Set a number to limit active city outposts for balanced competition.' },
    ],

    // Lost Colony - Creature Settings
    'lostcolony-creatures': [
        { name: 'YoungIceFoxDeathCooldown', default: '3600', type: 'float', description: 'Sets the respawn cooldown in seconds for Veilwyn (the Ice Fox shoulder pet) after it takes fatal damage while protecting its owner. The pet returns after this time.', effect: 'Default 3600 = 1 hour until Veilwyn returns. Lower = faster respawn; must be greater than 0.' },
    ],

    // Blueprint & Quality Caps
    'server-blueprints': [
        { name: 'MaxBlueprintDinoLevel', default: '300', type: 'integer', description: 'Caps the maximum level that Meks and Enforcers can spawn at when crafted from blueprints. These Extinction creatures spawn at levels based on blueprint quality.', effect: '0 = no cap; 300 = max level 300 when spawned. Prevents overpowered crafted creatures.' },
        { name: 'MaxBlueprintDinoQuality', default: '200', type: 'integer', description: 'Caps the maximum quality percentage that Mek and Enforcer blueprints can have. Quality affects the stats of the crafted creature.', effect: '200 = max 200% quality blueprints. Lower = weaker max blueprints; higher = allows stronger blueprints.' },
        { name: 'MaxBlueprintItemQuality', default: '200', type: 'integer', description: 'Caps the maximum quality percentage for all item blueprints (weapons, armor, tools, saddles). Quality affects crafted item stats.', effect: '200 = max 200% quality. Prevents absurdly powerful crafted gear from high-quality blueprints.' },
        { name: 'MaxBlueprintScoutQuality', default: '2000', type: 'integer', description: 'Caps the maximum quality percentage specifically for Scout (surveillance drone) blueprints from Extinction. Scouts have higher default quality caps.', effect: '2000 = max 2000% quality Scouts. Lower = weaker Scouts; Scouts are support creatures.' },
    ],

    // Cryopod Settings (removed - now split into subsections above)

    // Soft Tame Limit Settings
    'server-tamelimit': [
        { name: 'DestroyTamesOverTheSoftTameLimit', default: 'False', type: 'boolean', description: 'When the server exceeds the soft tame limit, excess creatures will be marked "For Cryo" with a warning icon and countdown timer. If not cryopodded before the timer expires, they are automatically destroyed. Events are logged in tribe logs.', effect: 'True enables the soft limit enforcement system; False disables automatic tame destruction. Use MaxTamedDinos_SoftTameLimit to set the threshold.' },
        { name: 'MaxTamedDinos_SoftTameLimit', default: '5000', type: 'integer', description: 'Sets the server-wide soft tame limit threshold. Unlike the hard tame cap, the soft limit allows new tames but marks excess creatures for cryopodding. This prevents server lockout while encouraging tame management.', effect: 'Higher values allow more tames before warnings appear; lower values enforce stricter limits. Works with DestroyTamesOverTheSoftTameLimit.' },
        { name: 'MaxTamedDinos_SoftTameLimit_Countdown', default: '604800', type: 'integer', description: 'Sets how long (in seconds) players have to cryopod marked creatures before they are automatically destroyed. Default is 604800 seconds (7 days).', effect: 'Higher values give more time to respond; lower values force faster action. 604800 = 7 days, 86400 = 1 day.' },
    ],

    // Cosmetics & Mods
    'server-cosmetics': [
        { name: 'CosmeticWhitelistOverride', default: '', type: 'string', description: 'URL to a text file containing a comma-separated list of approved custom cosmetic item IDs. Only cosmetics on this list will be allowed on the server.', effect: 'Empty = use default cosmetics. Custom URL = restrict to whitelisted cosmetics only.' },
        { name: 'ForceExploitedTameDeletion', default: 'True', type: 'boolean', description: 'Enables automatic deletion of creatures that were tamed through exploits or bugs. Also prevents these creatures from being deployed from cryopods.', effect: 'True = exploited tames are deleted/blocked; False = exploited tames remain (not recommended).' },
        { name: 'AllowDeprecatedStructures', default: 'False', type: 'boolean', description: 'Allows seasonal event structures (like Halloween decorations) to remain placeable after the event ends. Normally these become unavailable.', effect: 'True = event structures usable year-round; False = event structures only during events.' },
    ],

    // PvP-Specific Settings
    'server-pvp-specific': [
        { name: 'AllowTeslaCoilCaveBuildingPVP', default: 'True', type: 'boolean', description: 'Allows Tesla Coils to be placed inside caves on PvP servers. Tesla Coils are powerful electrical defense structures that stun and damage nearby enemies.', effect: 'True = Tesla Coils allowed in caves; False = Tesla Coils blocked in cave building zones.' },
        { name: 'IgnorePVPMountedWeaponryRestrictions', default: 'True', type: 'boolean', description: 'Disables restrictions on equipping weapons while mounted on certain creatures in PvP. Affected creatures include Rhyniognatha, Megalania, Rock Drake, and Ravagers.', effect: 'True = can use weapons on these mounts; False = weapon use restricted on these specific creatures.' },
    ],

    // Environment & World (removed - now using subsections above in the rates/player sections)
};

const gameIniSettings = {
    // Taming - Core Settings
    'taming-basics': [
        { name: 'PassiveTameIntervalMultiplier', default: '1.0', type: 'float', description: 'Scales the time between feeding intervals for passive taming. Passive tames require waiting between each feeding for the creature to become hungry again.', effect: '0.5 = creatures accept food twice as often (faster passive taming); 2.0 = twice as long between feedings.' },
        { name: 'bDisableDinoTaming', default: 'False', type: 'boolean', description: 'Completely prevents all creature taming on the server. Wild creatures cannot be knocked out for taming or passive tamed.', effect: 'True = no taming allowed (pure survival mode); False = normal taming enabled.' },
        { name: 'bDisableDinoRiding', default: 'False', type: 'boolean', description: 'Prevents players from mounting and riding any tamed creatures, even with saddles equipped. Tames can still follow and attack.', effect: 'True = creatures cannot be ridden; False = normal riding with saddles.' },
        { name: 'bAllowUnclaimDinos', default: 'True', type: 'boolean', description: 'Allows players to unclaim their tamed creatures, returning them to an unowned state where anyone can claim them.', effect: 'True = unclaiming allowed; False = tames cannot be voluntarily released.' },
        { name: 'DestroyTamesOverLevelClamp', default: '0', type: 'integer', description: 'Automatically deletes any tamed creatures exceeding this level when the server starts. Used to remove illegitimately leveled creatures.', effect: '0 = disabled; 450 = Official servers (destroys tames over level 450). Affects creatures on server load.' },
        { name: 'bUseDinoLevelUpAnimations', default: 'True', type: 'boolean', description: 'Enables the visual animation that plays when tamed creatures level up. Disabling provides a minor convenience improvement.', effect: 'True = level-up animation plays; False = creatures level up without animation.' },
    ],

    // Taming - Food & Torpor
    'taming-food-torpor': [
        { name: 'WildDinoCharacterFoodDrainMultiplier', default: '1.0', type: 'float', description: 'Scales how quickly wild creatures lose food when knocked unconscious during taming. Faster food drain means more frequent feeding during knockout taming.', effect: '2.0 = wild creatures get hungry twice as fast (faster knockout taming); 0.5 = half as fast.' },
        { name: 'WildDinoTorporDrainMultiplier', default: '1.0', type: 'float', description: 'Scales how quickly unconscious wild creatures lose torpor during taming. Faster torpor drain requires more narcotics to keep them asleep.', effect: '2.0 = torpor drops twice as fast (need more narcotics); 0.5 = easier to maintain unconscious state.' },
        { name: 'TamedDinoCharacterFoodDrainMultiplier', default: '1.0', type: 'float', description: 'Scales how quickly your tamed creatures consume food from their inventory or feeding troughs. Affects long-term food maintenance costs.', effect: '0.5 = tames eat half as often (less food upkeep); 2.0 = double food consumption.' },
        { name: 'TamedDinoTorporDrainMultiplier', default: '1.0', type: 'float', description: 'Scales how quickly tamed creatures lose torpor when knocked unconscious by enemy players or wild creatures.', effect: '2.0 = tames wake up faster when knocked out; 0.5 = stay unconscious longer.' },
    ],

    // Taming - Damage & Limits
    'taming-damage-limits': [
        { name: 'DinoHarvestingDamageMultiplier', default: '3.2', type: 'float', description: 'Multiplies damage tamed creatures deal to harvestable objects (trees, rocks, corpses). Higher damage means faster resource gathering with tames.', effect: '5.0 = tames harvest ~56% faster than default 3.2; affects gathering efficiency with creatures like Ankylosaurus.' },
        { name: 'DinoTurretDamageMultiplier', default: '1.0', type: 'float', description: 'Scales the damage auto turrets deal specifically to creatures. Separate from general turret damage settings.', effect: '2.0 = turrets deal double damage to dinos; important for base defense balance against tame raids.' },
        { name: 'bDisableDinoBreeding', default: 'False', type: 'boolean', description: 'Completely disables creature breeding on the server. Tames cannot mate and no eggs or babies will be produced.', effect: 'True = breeding disabled (no mutations, no imprinting); False = normal breeding enabled.' },
        { name: 'bUseTameLimitForStructuresOnly', default: 'False', type: 'boolean', description: 'Makes the tame unit system only count platform saddle creatures with structures and rafts. Regular tames do not count toward tribe limits.', effect: 'True = only platforms count toward tame limit; False = all tames count toward the limit.' },
    ],

    // Player - Leveling & Stats
    'player-leveling': [
        { name: 'bAllowSpeedLeveling', default: 'False', type: 'boolean', description: 'Allows players and land-based tamed creatures to level up their Movement Speed stat. By default, movement speed cannot be increased through leveling.', effect: 'True = movement speed can be leveled up; False = movement speed is locked at base value.' },
        { name: 'bAllowFlyerSpeedLeveling', default: 'False', type: 'boolean', description: 'Allows flying creatures to level up their Movement Speed stat. Requires bAllowSpeedLeveling to also be enabled in ASA.', effect: 'True = flyers can level speed; False = flyer speed locked. Must enable bAllowSpeedLeveling first.' },
        { name: 'bAllowUnlimitedRespecs', default: 'False', type: 'boolean', description: 'Removes the 24-hour cooldown between Mindwipe Tonic uses. Normally players can only reset their stats once per day.', effect: 'True = unlimited mindwipes anytime; False = 24-hour cooldown between mindwipes.' },
        { name: 'PlayerHarvestingDamageMultiplier', default: '1.0', type: 'float', description: 'Multiplies damage players deal to harvestable objects when gathering resources by hand or with tools. Affects gathering speed.', effect: '2.0 = harvest twice as fast by hand/tools; does not affect creature harvesting.' },
        { name: 'MaxFallSpeedMultiplier', default: '1.0', type: 'float', description: 'Scales the falling speed threshold at which players start taking fall damage. Does not change gravity, only the damage threshold.', effect: '2.0 = can fall twice as far without taking damage; useful for building and exploration.' },
        { name: 'HairGrowthSpeedMultiplier', default: '0', type: 'float', description: 'Scales how quickly player and creature hair grows. Hair can be harvested for crafting certain items. ASA default is 0 (disabled).', effect: '1.0 = normal ASE growth rate; 0 = hair does not grow (ASA default). Higher = faster growth.' },
    ],

    // Player - Gameplay Features
    'player-features': [
        { name: 'bUseCorpseLocator', default: 'True', type: 'boolean', description: 'Shows a green light beam shooting into the sky at your death location, helping you find your corpse and retrieve your items.', effect: 'True = corpse beam visible; False = must find corpse without visual aid.' },
        { name: 'bShowCreativeMode', default: 'False', type: 'boolean', description: 'Adds a Creative Mode toggle button to the pause menu, allowing easy access to god mode, infinite stats, and instant crafting.', effect: 'True = Creative Mode accessible from menu; False = requires admin commands to enable.' },
        { name: 'bUseSingleplayerSettings', default: 'False', type: 'boolean', description: 'Applies "Single Player Settings" that rebalance the game for solo or small group play. Includes faster taming, breeding, and adjusted difficulty.', effect: 'True = enables solo-friendly rate adjustments; useful for private servers with few players.' },
        { name: 'bDisablePhotoMode', default: 'False', type: 'boolean', description: 'Disables the Photo Mode feature that allows players to take cinematic screenshots with a free-floating camera.', effect: 'True = photo mode disabled; False = photo mode available.' },
    ],

    // Tribe Settings - Management
    'tribe-management': [
        { name: 'MaxTribeLogs', default: '400', type: 'integer', description: 'Sets the maximum number of entries stored in the tribe log. The tribe log records events like taming, deaths, structure destruction, and member activity.', effect: 'Higher = more log history kept; 400 is default. Very high values may increase memory usage.' },
        { name: 'MaxNumberOfPlayersInTribe', default: '0', type: 'integer', description: 'Limits the maximum number of players that can be members of a single tribe. Used to enforce small tribe gameplay modes.', effect: '0 = unlimited members; 1 = solo only (no tribes); 6 = Official Small Tribes limit.' },
        { name: 'TribeSlotReuseCooldown', default: '0.0', type: 'float', description: 'When a player leaves or is kicked from a tribe, their slot is locked for this many seconds. Prevents rapid tribe member cycling.', effect: '0 = no cooldown; 3600 = 1 hour cooldown. Used on Official Small Tribes to prevent slot abuse.' },
        { name: 'TribeLogDestroyedEnemyStructures', default: 'False', type: 'boolean', description: 'Records in the tribe log when tribe members destroy structures belonging to enemy tribes. Useful for tracking raid activity.', effect: 'True = log enemy structure destruction; False = only log own tribe events.' },
    ],

    // Tribe Settings - Warfare
    'tribe-warfare': [
        { name: 'bPvEAllowTribeWar', default: 'True', type: 'boolean', description: 'Allows tribes on PvE servers to mutually declare war on each other, temporarily enabling PvP between the warring tribes.', effect: 'True = tribe wars allowed (both tribes must agree); False = no wars possible on PvE.' },
        { name: 'bPvEAllowTribeWarCancel', default: 'False', type: 'boolean', description: 'Allows tribes to cancel a declared war before it officially begins. Without this, once war is agreed upon, it cannot be stopped.', effect: 'True = wars can be cancelled before starting; False = agreed wars are final.' },
        { name: 'bDisableFriendlyFire', default: 'False', type: 'boolean', description: 'Prevents tribe members from damaging each other, their tames, or their structures. Eliminates accidental or intentional friendly fire.', effect: 'True = no friendly fire damage; False = tribe members can damage each other.' },
        { name: 'bPvEDisableFriendlyFire', default: 'False', type: 'boolean', description: 'Specifically disables friendly fire between tribe members on PvE servers. Separate from the general friendly fire setting.', effect: 'True = no friendly fire on PvE servers; False = friendly fire possible on PvE.' },
    ],

    // Crafting - Skills
    'crafting-skills': [
        { name: 'CraftingSkillBonusMultiplier', default: '1.0', type: 'float', description: 'Scales the quality bonus players receive when crafting items based on their Crafting Skill stat. Higher crafting skill normally produces better quality items.', effect: '2.0 = double the quality bonus from crafting skill; 0.5 = half the bonus. Affects crafted item stats.' },
        { name: 'bAllowCustomRecipes', default: 'True', type: 'boolean', description: 'Enables the custom recipe system where players can create personalized food recipes in cooking pots. Custom recipes can provide various buffs.', effect: 'True = custom recipe crafting enabled; False = custom recipe system disabled.' },
        { name: 'CustomRecipeEffectivenessMultiplier', default: '1.0', type: 'float', description: 'Scales the effectiveness (healing, buffs, duration) of custom-crafted recipes. Affects how powerful player-made food items are.', effect: '2.0 = custom recipes twice as effective; 0.5 = half effectiveness.' },
        { name: 'CustomRecipeSkillMultiplier', default: '1.0', type: 'float', description: 'Scales how much the player\'s Crafting Skill stat affects custom recipe quality. Higher skill normally produces better custom recipes.', effect: '2.0 = crafting skill has double impact on recipes; 0.5 = half impact.' },
    ],

    // Crafting - Engrams
    'crafting-engrams': [
        { name: 'bAutoUnlockAllEngrams', default: 'False', type: 'boolean', description: 'Automatically unlocks all engrams for all players without needing to spend engram points. Players can craft everything from level 1.', effect: 'True = all engrams unlocked for free; False = must learn engrams normally.' },
        { name: 'bOnlyAllowSpecifiedEngrams', default: 'False', type: 'boolean', description: 'Hides all engrams except those specified in OverrideEngramEntries/OverrideNamedEngramEntries. Items from hidden engrams are also removed.', effect: 'True = whitelist mode (only specified engrams exist); False = all engrams available.' },
        { name: 'OverrideNamedEngramEntries', default: '', type: 'text', description: 'Advanced configuration to override specific engrams by name - changing visibility, level requirements, or engram point costs. See wiki for syntax.', effect: 'Allows fine-grained control over individual engrams. Complex syntax - refer to ARK wiki.', placeholder: 'Advanced: see wiki format' },
    ],

    // Loot - Quality
    'loot-quality': [
        { name: 'SupplyCrateLootQualityMultiplier', default: '1.0', type: 'float', description: 'Multiplies the quality of items found in supply drops (beacons). Higher values mean better loot from the colored supply crates that fall from the sky.', effect: 'Range 1.0-5.0. Higher = better quality gear. Also affected by DifficultyOffset.' },
        { name: 'FishingLootQualityMultiplier', default: '1.0', type: 'float', description: 'Multiplies the quality of items obtained from fishing. Fishing can yield blueprints and other valuable items when using the fishing rod.', effect: 'Range 1.0-5.0. Higher = better quality fishing rewards.' },
        { name: 'bDisableLootCrates', default: 'False', type: 'boolean', description: 'Prevents regular supply drops (beacons) from spawning across the map. Artifact crates in caves are unaffected and still spawn normally.', effect: 'True = no supply drops spawn; False = normal beacon spawning.' },
        { name: 'ExcludeItemIndices', default: '', type: 'text', description: 'Advanced configuration to exclude specific items from appearing in supply crate loot tables by their item index numbers.', effect: 'Removes specified items from beacon loot pools. Refer to ARK wiki for item indices.', placeholder: 'Advanced: see wiki format' },
    ],

    // Loot - Resources
    'loot-resources': [
        { name: 'ResourceNoReplenishRadiusPlayers', default: '1.0', type: 'float', description: 'Scales the radius around players where resources (trees, rocks, bushes) cannot respawn. Players naturally block resource regrowth nearby.', effect: 'Higher = larger no-respawn zone around players; lower = resources respawn closer to players.' },
        { name: 'ResourceNoReplenishRadiusStructures', default: '1.0', type: 'float', description: 'Scales the radius around structures where resources cannot respawn. Building naturally blocks resource regrowth in the surrounding area.', effect: 'Higher = larger no-respawn zone around buildings; lower = resources respawn closer to structures.' },
        { name: 'HarvestResourceItemAmountClassMultipliers', default: '', type: 'text', description: 'Advanced configuration to set individual harvest multipliers for specific resource types. Allows customizing yields for specific materials.', effect: 'Complex syntax for per-resource multipliers. Refer to ARK wiki for format.', placeholder: 'Advanced: see wiki format' },
    ],

    // Structures - Placement
    'structures-placement': [
        { name: 'bDisableStructurePlacementCollision', default: 'False', type: 'boolean', description: 'Allows structures to be placed overlapping with terrain and rocks. Normally, structures cannot clip into the environment geometry.', effect: 'True = structures can clip into terrain; False = normal collision prevents clipping.' },
        { name: 'bIgnoreStructuresPreventionVolumes', default: 'False', type: 'boolean', description: 'Allows building in areas normally blocked by prevention volumes, such as near Obelisks, mission areas on Genesis, and portal locations.', effect: 'True = can build in normally restricted areas; False = prevention zones enforced.' },
        { name: 'bAllowPlatformSaddleMultiFloors', default: 'False', type: 'boolean', description: 'Allows building multiple vertical floors on platform saddles (Quetzal, Bronto, Paracer, etc.). By default, platform building is height-restricted.', effect: 'True = multi-story platform buildings allowed; False = height restrictions apply.' },
        { name: 'bFlyerPlatformAllowUnalignedDinoBasing', default: 'False', type: 'boolean', description: 'Allows creatures from any tribe to stand on flying platform saddles (like Quetzal platforms) while airborne. Normally only allied creatures can base.', effect: 'True = any creature can stand on flying platforms; False = only allied creatures.' },
    ],

    // Structures - Damage & Decay
    'structures-damage-decay': [
        { name: 'bPassiveDefensesDamageRiderlessDinos', default: 'False', type: 'boolean', description: 'Allows passive defenses like spike walls to damage wild creatures and tames without riders. Normally, spikes only damage ridden/attacking creatures.', effect: 'True = spikes hurt all nearby creatures; False = spikes only damage attackers/ridden.' },
        { name: 'StructureDamageRepairCooldown', default: '180', type: 'integer', description: 'Sets how many seconds must pass after a structure takes damage before it can be repaired. Prevents instant repair during raids.', effect: '180 = 3 minute repair cooldown (default); 0 = instant repair allowed; higher = longer wait.' },
        { name: 'PvPZoneStructureDamageMultiplier', default: '6.0', type: 'float', description: 'Multiplies damage dealt to structures inside caves. Caves are designated as PvP zones with increased structure vulnerability for balance.', effect: '6.0 = structures take 6x damage in caves (default). Higher = more vulnerable; lower = tankier.' },
        { name: 'FastDecayInterval', default: '43200', type: 'integer', description: 'Sets how quickly in seconds structures flagged for fast decay (unsnapped pillars, solo foundations) become demolishable. Requires FastDecayUnsnappedCoreStructures.', effect: '43200 = 12 hours fast decay. Lower = faster cleanup; higher = more time before decay.' },
    ],

    // Turret Limits
    'turrets-limits': [
        { name: 'bLimitTurretsInRange', default: 'True', type: 'boolean', description: 'Enables the turret limit system that restricts how many turrets can be placed within a certain radius of each other. Prevents excessive turret stacking.', effect: 'True = turret limits enforced; False = unlimited turrets in any area.' },
        { name: 'bHardLimitTurretsInRange', default: 'False', type: 'boolean', description: 'Enforces a hard cap of 100 turrets within 10,000 units. When enabled, turrets placed over this limit may be subject to removal during server maintenance.', effect: 'True = turrets exceeding limit may be destroyed; False = soft limit only (placement blocked but existing turrets remain).' },
        { name: 'LimitTurretsNum', default: '100', type: 'integer', description: 'Sets the maximum number of turrets (including Plant Species X) allowed within the radius defined by LimitTurretsRange.', effect: 'Higher allows more turrets per area; Official uses 100. Affects defensive density.' },
        { name: 'LimitTurretsRange', default: '10000.0', type: 'float', description: 'Sets the radius in game units within which the turret limit is checked. Works with LimitTurretsNum to define turret density rules.', effect: '10000 units is roughly 100 meters/foundations. Larger radius = more spread required.' },
    ],

    // Generator Limits
    'turrets-generators': [
        { name: 'LimitGeneratorsNum', default: '3', type: 'integer', description: 'Sets the maximum number of electrical generators allowed within the radius defined by LimitGeneratorsRange. Prevents generator spam.', effect: 'Higher allows more generators per area; 3 is default/Official value.' },
        { name: 'LimitGeneratorsRange', default: '15000', type: 'integer', description: 'Sets the radius in game units within which the generator limit is checked. Works with LimitGeneratorsNum.', effect: '15000 units is roughly 150 meters. Larger radius spreads out required generator placement.' },
        { name: 'LimitNonPlayerDroppedItemsCount', default: '0', type: 'integer', description: 'Sets the maximum number of items dropped by creatures (poop, eggs, death loot) allowed within the range. Helps with server performance.', effect: '0 = disabled; positive values limit creature-dropped items per area.' },
        { name: 'LimitNonPlayerDroppedItemsRange', default: '0', type: 'integer', description: 'Sets the radius for checking non-player dropped item counts. Works with LimitNonPlayerDroppedItemsCount.', effect: '0 = disabled; positive values define the check radius in game units.' },
    ],

    // Power & Fuel
    'turrets-power': [
        { name: 'GlobalPoweredBatteryDurabilityDecreasePerSecond', default: '3.0', type: 'float', description: 'Sets how much durability charge batteries lose per second when powering structures. Charge batteries are portable power sources.', effect: 'Higher values drain batteries faster; lower values make batteries last longer.' },
        { name: 'FuelConsumptionIntervalMultiplier', default: '1.0', type: 'float', description: 'Scales the interval between fuel consumption ticks for all fuel-burning structures (generators, forges, campfires, etc.).', effect: '2.0 = fuel lasts twice as long; 0.5 = fuel consumed twice as fast.' },
        { name: 'TribeTowerBonusMultiplier', default: '2.0', type: 'float', description: 'Scales the stat bonuses provided by Tribe Towers to nearby tribe members and creatures. Tribe Towers are a defensive/buff structure.', effect: 'Higher values increase the buff strength; Official PvP uses 2.0.' },
    ],

    // PvP Settings - Timers
    'pvp-timers': [
        { name: 'AutoPvEStartTimeSeconds', default: '0.0', type: 'float', description: 'Sets the time of day when PvE mode automatically begins on a hybrid PvPvE server. Allows scheduled peaceful periods where players cannot damage each other or raid bases.', effect: 'Value in seconds (0-86400 representing 24 hours). 21600 = 6:00 AM; 43200 = noon; 64800 = 6:00 PM. Requires bAutoPvETimer enabled.' },
        { name: 'AutoPvEStopTimeSeconds', default: '0.0', type: 'float', description: 'Sets the time of day when PvE mode automatically ends and PvP resumes on a hybrid PvPvE server. Marks the transition back to full PvP gameplay.', effect: 'Value in seconds (0-86400 representing 24 hours). Combined with AutoPvEStartTimeSeconds to define the PvE window. Requires bAutoPvETimer enabled.' },
        { name: 'bAutoPvETimer', default: 'False', type: 'boolean', description: 'Enables scheduled PvE/PvP cycling on the server. Creates a hybrid server that switches between PvE and PvP modes based on time settings.', effect: 'True = enable scheduled mode switching; False = server stays in its base PvP or PvE mode. Use with AutoPvEStartTimeSeconds and AutoPvEStopTimeSeconds.' },
        { name: 'bAutoPvEUseSystemTime', default: 'False', type: 'boolean', description: 'Determines whether the PvE timer uses real-world server clock time or in-game world time. Affects predictability for players in different time zones.', effect: 'True = uses server\'s real clock (consistent real-world schedule); False = uses in-game day/night cycle (varies with day speed settings).' },
    ],

    // PvP Settings - Respawn
    'pvp-respawn': [
        { name: 'bIncreasePvPRespawnInterval', default: 'True', type: 'boolean', description: 'Enables escalating respawn penalties when repeatedly killed by the same enemy tribe. Designed to prevent endless revenge spawning during raids.', effect: 'True = respawn time increases after repeated deaths to same attackers; False = constant respawn time regardless of death source.' },
        { name: 'IncreasePvPRespawnIntervalBaseAmount', default: '60.0', type: 'float', description: 'Sets the base amount of additional respawn time (in seconds) added when killed repeatedly by the same tribe within the check period.', effect: '60 = adds 1 minute per qualifying death; 120 = adds 2 minutes. Multiplied by IncreasePvPRespawnIntervalMultiplier for each death in the period.' },
        { name: 'IncreasePvPRespawnIntervalCheckPeriod', default: '300.0', type: 'float', description: 'Sets the time window (in seconds) during which deaths to the same tribe count toward increasing respawn penalties. Deaths outside this window reset the counter.', effect: '300 = 5-minute window; 600 = 10-minute window. Shorter windows are more forgiving; longer windows increase raid defense penalties.' },
        { name: 'IncreasePvPRespawnIntervalMultiplier', default: '2.0', type: 'float', description: 'Multiplies the respawn penalty for each consecutive death to the same tribe. Creates exponentially increasing respawn times during sustained combat.', effect: '2.0 = penalty doubles each death (60s → 120s → 240s); 1.5 = 50% increase per death. Higher values strongly discourage repeated rushing.' },
        { name: 'PreventOfflinePvPConnectionInvincibleInterval', default: '5.0', type: 'float', description: 'Sets how long (in seconds) a player is invincible after logging into the server. Prevents players from being killed before their game fully loads.', effect: '5.0 = 5 seconds of spawn protection; 10.0 = 10 seconds. Helps prevent "login camping" exploits on PvP servers.' },
    ],

    // Genesis - Missions
    'genesis-missions': [
        { name: 'bDisableGenesisMissions', default: 'False', type: 'boolean', description: 'Completely disables the mission system on Genesis maps. Missions are instanced challenges that reward Hexagons for purchasing items and creatures.', effect: 'True = missions cannot be started (removes a major Genesis feature); False = missions available normally.' },
        { name: 'AllowTekSuitPowersInGenesis', default: 'False', type: 'boolean', description: 'Enables Tek suit special abilities on Genesis: Part 1. By default, Genesis 1 disables Tek suit flying and other powers to maintain map balance.', effect: 'True = Tek suit abilities work normally; False = Tek suit powers disabled on Genesis Part 1 (official default for balance).' },
        { name: 'bGenesisUseStructuresPreventionVolumes', default: 'False', type: 'boolean', description: 'Enables no-build zones around mission terminals and areas on Genesis Part 1. Prevents players from blocking or interfering with mission content.', effect: 'True = cannot build near mission areas; False = building allowed anywhere (may cause mission access issues).' },
    ],

    // Genesis - Hexagon Store
    'genesis-store': [
        { name: 'bDisableHexagonStore', default: 'False', type: 'boolean', description: 'Disables access to the Hexagon Store (Genesis) or Club Ark Store (ASA). These stores let players spend earned currency on items, creatures, and cosmetics.', effect: 'True = store interface cannot be opened; False = store accessible. Players can still earn Hexagons/tokens but cannot spend them.' },
        { name: 'MaxHexagonsPerCharacter', default: '2000000000', type: 'integer', description: 'Sets the maximum number of Hexagons (Genesis) or Club Ark Tokens (ASA) a single character can hold. Prevents unlimited currency hoarding.', effect: 'Default ~2 billion allows essentially unlimited accumulation. Lower values cap earnings (e.g., 1000000 = 1 million max).' },
        { name: 'bHexStoreAllowOnlyEngramTradeOption', default: 'False', type: 'boolean', description: 'Restricts the Hexagon/Club Ark store to only sell Engrams. Removes ability to purchase items, resources, and creatures directly.', effect: 'True = only Engrams available (more progression-focused); False = full store inventory including tames and items.' },
        { name: 'BaseHexagonRewardMultiplier', default: '1.0', type: 'float', description: 'Scales the amount of Hexagons (Genesis) or Club Ark Tokens (ASA) earned from completing missions. Affects overall economy pacing.', effect: '2.0 = double currency rewards; 0.5 = half rewards. Higher values let players access store items faster.' },
        { name: 'HexagonCostMultiplier', default: '1.0', type: 'float', description: 'Scales the prices of items in the Hexagon Store (Genesis) or Club Ark Store (ASA). Adjusts how expensive purchases are.', effect: '2.0 = items cost twice as much; 0.5 = half price. Balance with BaseHexagonRewardMultiplier for desired economy.' },
    ],

    // Genesis - World Effects
    'genesis-world': [
        { name: 'bDisableDefaultMapItemSets', default: 'False', type: 'boolean', description: 'Disables map-specific starting equipment that some maps give to new spawns. For example, Genesis Part 2 gives players a Tek Suit on spawn.', effect: 'True = players spawn with only default inventory; False = players receive map-specific starter items (like Gen2 Tek Suit).' },
        { name: 'bDisableWorldBuffs', default: 'False', type: 'boolean', description: 'Disables the global world buff effects that completing Genesis Part 2 missions provides to all players on the server.', effect: 'True = mission completions don\'t grant server-wide buffs; False = completing missions applies temporary buffs to everyone.' },
        { name: 'bEnableWorldBuffScaling', default: 'False', type: 'boolean', description: 'Enables custom scaling of Genesis Part 2 world buff effects. Allows servers to increase or decrease the impact of mission completion rewards.', effect: 'True = world buffs are modified by WorldBuffScalingEfficacy; False = world buffs use default strength.' },
        { name: 'WorldBuffScalingEfficacy', default: '1.0', type: 'float', description: 'Multiplies the effectiveness of Genesis Part 2 world buffs when scaling is enabled. Adjusts how powerful the server-wide mission rewards are.', effect: '0.5 = buffs are 50% as strong; 2.0 = double strength buffs; 0 = effectively disables buffs. Requires bEnableWorldBuffScaling.' },
        { name: 'AdjustableMutagenSpawnDelayMultiplier', default: '1.0', type: 'float', description: 'Scales how long it takes for Mutagen bulbs to respawn after being harvested in Genesis Part 2. Mutagen is used for creature mutations and upgrades.', effect: '0.5 = Mutagen respawns twice as fast; 2.0 = takes twice as long. Lower values make Mutagen more abundant.' },
    ],

    // Environment & World (Game.ini)
    'game-environment': [
        { name: 'UseCorpseLifeSpanMultiplier', default: '1.0', type: 'float', description: 'Scales how long player and creature corpses persist before disappearing, along with death caches and dropped item bags. Affects loot recovery time.', effect: '2.0 = corpses/bags last twice as long; 0.5 = half as long. Higher values give more time to recover items after death.' },
        { name: 'BaseTemperatureMultiplier', default: '1.0', type: 'float', description: 'Scales the base ambient temperature across the entire map. Affects how hot or cold biomes feel and impacts player/creature temperature regulation.', effect: '0.5 = map is significantly colder everywhere; 2.0 = much hotter. Affects hypothermia/hyperthermia risk and resource needs.' },
    ],

    // Advanced Configuration
    'game-advanced': [
        { name: 'ConfigAddNPCSpawnEntriesContainer', default: '', type: 'text', description: 'Advanced setting to inject additional creatures into existing spawn containers. Allows adding custom dinos to specific map regions without replacing existing spawns.', effect: 'Uses complex structured format - see ARK wiki for syntax. Each entry specifies spawn container, creature blueprint, weight, and spawn parameters.', placeholder: 'Advanced: see wiki format' },
        { name: 'ConfigSubtractNPCSpawnEntriesContainer', default: '', type: 'text', description: 'Advanced setting to remove specific creatures from spawn containers. Useful for disabling unwanted creatures from certain map areas.', effect: 'Uses complex structured format - see ARK wiki for syntax. Removes specified creature blueprints from targeted spawn containers.', placeholder: 'Advanced: see wiki format' },
        { name: 'CheatTeleportLocations', default: '', type: 'text', description: 'Defines custom named teleport destinations that server admins can use with the "cheat TP" command. Useful for quickly traveling to base locations or event areas.', effect: 'Adds named locations usable via "cheat TP LocationName". Multiple entries can be defined for different destinations.', placeholder: '(TeleportName="Name",TeleportLocation=(X=0,Y=0,Z=0))' },
    ],

    // Breeding - Mating
    'breeding-mating': [
        { name: 'MatingIntervalMultiplier', default: '1.0', type: 'float', description: 'Scales the cooldown time between breeding attempts for creatures. After mating, creatures cannot breed again until this cooldown expires.', effect: '0.5 = creatures can breed twice as often; 2.0 = twice as long between breeding. Lower values speed up breeding programs.' },
        { name: 'MatingSpeedMultiplier', default: '1.0', type: 'float', description: 'Scales how quickly the mating progress bar fills when two creatures are breeding. Does not affect gestation or egg incubation time.', effect: '2.0 = mating completes twice as fast; 0.5 = takes twice as long. Only affects the initial pairing process.' },
    ],

    // Breeding - Eggs & Hatching
    'breeding-eggs': [
        { name: 'EggHatchSpeedMultiplier', default: '1.0', type: 'float', description: 'Scales how quickly fertilized eggs hatch. Also affects the gestation time for live-bearing creatures like mammals.', effect: '10.0 = eggs hatch 10x faster; common for boosted servers. Affects both egg incubation and pregnancy duration.' },
        { name: 'LayEggIntervalMultiplier', default: '1.0', type: 'float', description: 'Scales how frequently female creatures lay unfertilized eggs. These eggs are used for kibble crafting and some taming methods.', effect: '0.5 = eggs laid twice as often; 2.0 = half as often. Affects kibble farm productivity.' },
    ],

    // Breeding - Crops & Farming
    'breeding-farming': [
        { name: 'CropGrowthSpeedMultiplier', default: '1.0', type: 'float', description: 'Scales how quickly crops grow from seed to harvestable in crop plots. Affects all farming including vegetables and plant species.', effect: '2.0 = crops grow twice as fast; useful for establishing farms quickly.' },
        { name: 'CropDecaySpeedMultiplier', default: '1.0', type: 'float', description: 'Scales the rate at which fully grown crops decay and need replanting. Higher values make crops die faster after reaching maturity.', effect: '0.5 = crops last twice as long; 2.0 = crops decay twice as fast. Balance with growth speed for farm management.' },
        { name: 'PoopIntervalMultiplier', default: '1.0', type: 'float', description: 'Scales how frequently creatures and players produce feces. Feces are important for fertilizer production in composting bins.', effect: '0.5 = pooping twice as often (more fertilizer); 2.0 = half as often. Affects fertilizer supply for farms.' },
    ],

    // Breeding - Baby Maturation
    'breeding-babies': [
        { name: 'BabyMatureSpeedMultiplier', default: '1.0', type: 'float', description: 'Scales how quickly baby creatures grow to adulthood after hatching/birth. The maturation phase is typically the longest part of breeding.', effect: '10.0 = babies mature 10x faster (common on boosted servers). Significantly reduces the real-time investment in breeding.' },
        { name: 'BabyFoodConsumptionSpeedMultiplier', default: '1.0', type: 'float', description: 'Scales how quickly baby creatures consume food from troughs or their inventory. Babies eat much faster than adults and require constant food supply.', effect: '0.5 = babies eat half as often (easier to keep fed); 2.0 = eat twice as fast. Lower values reduce the burden of baby care.' },
    ],

    // Breeding - Imprinting
    'breeding-imprinting': [
        { name: 'BabyCuddleIntervalMultiplier', default: '1.0', type: 'float', source: 'wiki', description: 'Scales the time between required imprinting care actions (cuddles, walks, feeding requests). Imprinting provides stat bonuses and rider bonuses at 100%.', effect: '0.1 = imprint requests 10x more often (faster total imprinting); 2.0 = twice as long between requests. Adjust alongside BabyMatureSpeedMultiplier for balance.' },
        { name: 'BabyCuddleGracePeriodMultiplier', default: '1.0', type: 'float', description: 'Scales the grace period after an imprint request before imprint quality starts degrading. Missing the window reduces final imprint percentage.', effect: '2.0 = twice as long to respond before penalty; 0.5 = half the grace time. More forgiving for busy players.' },
        { name: 'BabyCuddleLoseImprintQualitySpeedMultiplier', default: '1.0', type: 'float', description: 'Scales how quickly imprint quality drops after missing the grace period for a care request. Faster drop means missing requests is more punishing.', effect: '0.5 = imprint drops half as fast (more forgiving); 2.0 = drops twice as fast (harsh penalty for missed cuddles).' },
        { name: 'BabyImprintingStatScaleMultiplier', default: '1.0', type: 'float', description: 'Scales how much the imprint percentage affects the creature\'s stats. At 100% imprint, creatures normally get +20% to most stats.', effect: '0 = imprinting provides no stat bonus; 2.0 = double the stat bonus from imprinting. Does not affect rider bonus.' },
        { name: 'BabyImprintAmountMultiplier', default: '1.0', type: 'float', description: 'Scales how much imprint percentage is gained per successful care action. Higher values mean fewer cuddles needed for 100% imprint.', effect: '2.0 = gain twice as much imprint per cuddle; useful when BabyCuddleIntervalMultiplier is also adjusted.' },
        { name: 'MutagenLevelBoost', default: '', type: 'integer', description: 'Sets how many bonus levels Mutagen adds when used on a creature with wild ancestry (first generation tames). Only works on Genesis maps.', effect: 'Higher values add more levels. Empty uses default Genesis behavior. Mutagen provides permanent level boosts.' },
        { name: 'MutagenLevelBoost_Bred', default: '', type: 'integer', description: 'Sets how many bonus levels Mutagen adds when used on a bred creature (not first generation). Bred creatures typically get fewer levels from Mutagen.', effect: 'Higher values add more levels. Empty uses default Genesis behavior. Separate from wild-ancestry boost.' },
    ],

    // Spoiling & Decomposition
    'game-spoiling': [
        { name: 'GlobalSpoilingTimeMultiplier', default: '1.0', type: 'float', description: 'Scales how long perishable items like raw meat, berries, and organic polymer take to spoil in inventories and containers. Affects food management strategies.', effect: '2.0 = food lasts twice as long before spoiling; 0.5 = spoils twice as fast. Higher values reduce the urgency of food preservation.' },
        { name: 'GlobalItemDecompositionTimeMultiplier', default: '1.0', type: 'float', description: 'Scales how long dropped item bags and loot caches persist on the ground before despawning. Affects item recovery after accidental drops or deaths.', effect: '2.0 = dropped items last twice as long; 0.5 = despawn twice as fast. Higher values give more time to retrieve dropped gear.' },
        { name: 'GlobalCorpseDecompositionTimeMultiplier', default: '1.0', type: 'float', description: 'Scales how long creature and player corpses remain in the world before decomposing. Corpses can be harvested for resources and contain inventories.', effect: '2.0 = corpses last twice as long; 0.5 = decompose twice as fast. Higher values give more time to harvest or loot bodies.' },
    ],

    // World & Camera Settings
    'game-world': [
        { name: 'PhotoModeRangeLimit', default: '3000', type: 'integer', description: 'Sets the maximum distance (in Unreal units) that the photo mode camera can travel away from the player character. Affects cinematic screenshot capabilities.', effect: '3000 = default range; 10000 = much further camera movement for sweeping shots; 1000 = restricted close-up only. Higher values enable better landscape photography.' },
    ],

    // Stats Multipliers - Player
    'stats-player': [
        { name: 'PerLevelStatsMultiplier_Player[0]', default: '1.0', type: 'float', description: 'Scales how much Health a player gains when spending a level-up point in Health. Health determines how much damage a player can take before dying.', effect: '2.0 = double Health per point invested; 0.5 = half. Higher values make players tankier per level.' },
        { name: 'PerLevelStatsMultiplier_Player[1]', default: '1.0', type: 'float', description: 'Scales how much Stamina a player gains per level-up point. Stamina is consumed by sprinting, jumping, swimming, and melee attacks.', effect: '2.0 = double Stamina per point; 0.5 = half. Higher values allow more sustained physical activity.' },
        { name: 'PerLevelStatsMultiplier_Player[2]', default: '1.0', type: 'float', description: 'Scales how much Torpidity capacity a player gains per level-up point. Higher Torpidity makes players harder to knock unconscious with tranquilizers.', effect: '2.0 = double Torpidity per point; 0.5 = half. Mainly affects resistance to knockout effects.' },
        { name: 'PerLevelStatsMultiplier_Player[3]', default: '1.0', type: 'float', description: 'Scales how much Oxygen capacity a player gains per level-up point. Oxygen determines underwater breath duration and affects swimming speed.', effect: '2.0 = double Oxygen per point; 0.5 = half. Higher values enable longer underwater exploration.' },
        { name: 'PerLevelStatsMultiplier_Player[4]', default: '1.0', type: 'float', description: 'Scales how much Food capacity a player gains per level-up point. Food depletes over time and must be replenished by eating.', effect: '2.0 = double Food capacity per point; 0.5 = half. Higher values mean less frequent eating required.' },
        { name: 'PerLevelStatsMultiplier_Player[5]', default: '1.0', type: 'float', description: 'Scales how much Water capacity a player gains per level-up point. Water depletes over time (faster in hot biomes) and requires regular drinking.', effect: '2.0 = double Water capacity per point; 0.5 = half. Higher values reduce hydration management burden.' },
        { name: 'PerLevelStatsMultiplier_Player[6]', default: '1.0', type: 'float', description: 'Scales how much Temperature resistance a player gains per level-up point. This stat is typically not used in standard gameplay.', effect: '2.0 = double Temperature per point; 0.5 = half. Temperature effects are usually handled by Fortitude instead.' },
        { name: 'PerLevelStatsMultiplier_Player[7]', default: '1.0', type: 'float', description: 'Scales how much Weight (carry capacity) a player gains per level-up point. Weight determines how much inventory a player can hold before becoming encumbered.', effect: '2.0 = double Weight per point; 0.5 = half. Higher values significantly improve resource gathering and hauling.' },
        { name: 'PerLevelStatsMultiplier_Player[8]', default: '1.0', type: 'float', description: 'Scales how much Melee Damage bonus a player gains per level-up point. Affects damage dealt with fists, melee weapons, and harvesting yields.', effect: '2.0 = double Melee per point; 0.5 = half. Higher values make melee combat and manual harvesting more effective.' },
        { name: 'PerLevelStatsMultiplier_Player[9]', default: '1.0', type: 'float', description: 'Scales how much Movement Speed bonus a player gains per level-up point. Affects walking, running, and swimming velocity.', effect: '2.0 = double Speed per point; 0.5 = half. Higher values allow faster travel and better kiting ability.' },
        { name: 'PerLevelStatsMultiplier_Player[10]', default: '1.0', type: 'float', description: 'Scales how much Fortitude a player gains per level-up point. Fortitude provides resistance to weather effects, torpor, and diseases.', effect: '2.0 = double Fortitude per point; 0.5 = half. Higher values improve survival in extreme temperatures and against knockout attacks.' },
        { name: 'PerLevelStatsMultiplier_Player[11]', default: '1.0', type: 'float', description: 'Scales how much Crafting Skill bonus a player gains per level-up point. Crafting Skill improves crafted item quality and custom recipe effectiveness.', effect: '2.0 = double Crafting Skill per point; 0.5 = half. Higher values produce better quality crafted gear.' },
    ],

    // Stats Multipliers - Tamed Dino (Per Level)
    'stats-tamed': [
        { name: 'PerLevelStatsMultiplier_DinoTamed[0]', default: '0.2', type: 'float', description: 'Scales Health gained when leveling up a tamed creature. Default 0.2 means tamed dinos get 20% of their wild per-level gain when you level them.', effect: '1.0 = tamed dinos gain same Health per level as wild equivalents; 0.5 = half the wild rate. Higher values make leveling dino Health more impactful.' },
        { name: 'PerLevelStatsMultiplier_DinoTamed[1]', default: '1.0', type: 'float', description: 'Scales Stamina gained when leveling up a tamed creature. Stamina affects how long creatures can sprint, fly, or swim before resting.', effect: '2.0 = double Stamina per point invested; 0.5 = half. Higher values improve creature endurance.' },
        { name: 'PerLevelStatsMultiplier_DinoTamed[2]', default: '1.0', type: 'float', description: 'Scales Torpidity capacity gained when leveling up a tamed creature. Determines how much knockout damage a tamed creature can resist.', effect: '2.0 = double Torpidity per point; 0.5 = half. Higher values make tames harder to knock out.' },
        { name: 'PerLevelStatsMultiplier_DinoTamed[3]', default: '1.0', type: 'float', description: 'Scales Oxygen capacity gained when leveling up a tamed creature. Oxygen determines underwater breath duration for non-aquatic creatures.', effect: '2.0 = double Oxygen per point; 0.5 = half. Higher values enable longer underwater dino exploration.' },
        { name: 'PerLevelStatsMultiplier_DinoTamed[4]', default: '1.0', type: 'float', description: 'Scales Food capacity gained when leveling up a tamed creature. Larger Food pools mean less frequent feeding required.', effect: '2.0 = double Food per point; 0.5 = half. Higher values reduce tame maintenance.' },
        { name: 'PerLevelStatsMultiplier_DinoTamed[7]', default: '1.0', type: 'float', description: 'Scales Weight (carry capacity) gained when leveling up a tamed creature. Weight determines how much inventory a dino can carry.', effect: '2.0 = double Weight per point; 0.5 = half. Higher values improve dinos as pack mules.' },
        { name: 'PerLevelStatsMultiplier_DinoTamed[8]', default: '0.17', type: 'float', description: 'Scales Melee Damage gained when leveling up a tamed creature. Default 0.17 significantly limits post-tame melee scaling compared to wild levels.', effect: '1.0 = same melee scaling as wild; 0.5 = half wild rate. Higher values make leveling dino damage more rewarding.' },
        { name: 'PerLevelStatsMultiplier_DinoTamed[9]', default: '1.0', type: 'float', description: 'Scales Movement Speed gained when leveling up a tamed creature. Affects ground, swimming, and flying velocity improvements.', effect: '2.0 = double Speed per point; 0.5 = half. Higher values allow faster travel mounts.' },
    ],

    // Stats Multipliers - Tamed Dino (Post-Tame Bonus)
    'stats-tamed-add': [
        { name: 'PerLevelStatsMultiplier_DinoTamed_Add[0]', default: '0.14', type: 'float', description: 'Scales the bonus Health added to a creature immediately after taming (post-tame bonus). This is separate from wild levels and taming effectiveness bonuses.', effect: '1.0 = full post-tame Health bonus; 0 = no bonus Health on tame. Affects the "free" stats creatures gain from being tamed.' },
        { name: 'PerLevelStatsMultiplier_DinoTamed_Add[1]', default: '1.0', type: 'float', description: 'Scales the bonus Stamina added to a creature immediately after taming. Part of the inherent stat boost creatures receive from domestication.', effect: '2.0 = double post-tame Stamina bonus; 0.5 = half. Affects initial tamed creature endurance.' },
        { name: 'PerLevelStatsMultiplier_DinoTamed_Add[2]', default: '1.0', type: 'float', description: 'Scales the bonus Torpidity added to a creature immediately after taming. Affects initial knockout resistance of newly tamed creatures.', effect: '2.0 = double post-tame Torpidity bonus; 0.5 = half.' },
        { name: 'PerLevelStatsMultiplier_DinoTamed_Add[3]', default: '1.0', type: 'float', description: 'Scales the bonus Oxygen added to a creature immediately after taming. Affects initial underwater breath capacity of newly tamed creatures.', effect: '2.0 = double post-tame Oxygen bonus; 0.5 = half.' },
        { name: 'PerLevelStatsMultiplier_DinoTamed_Add[4]', default: '1.0', type: 'float', description: 'Scales the bonus Food capacity added to a creature immediately after taming. Affects how much food newly tamed creatures can store.', effect: '2.0 = double post-tame Food bonus; 0.5 = half.' },
        { name: 'PerLevelStatsMultiplier_DinoTamed_Add[7]', default: '1.0', type: 'float', description: 'Scales the bonus Weight added to a creature immediately after taming. Affects initial carry capacity of newly tamed creatures.', effect: '2.0 = double post-tame Weight bonus; 0.5 = half.' },
        { name: 'PerLevelStatsMultiplier_DinoTamed_Add[8]', default: '0.14', type: 'float', description: 'Scales the bonus Melee Damage added to a creature immediately after taming. Default 0.14 limits the post-tame melee boost.', effect: '1.0 = full post-tame Melee bonus; 0 = no bonus damage on tame. Significantly affects tamed dino power.' },
        { name: 'PerLevelStatsMultiplier_DinoTamed_Add[9]', default: '1.0', type: 'float', description: 'Scales the bonus Movement Speed added to a creature immediately after taming. Affects initial speed of newly tamed creatures.', effect: '2.0 = double post-tame Speed bonus; 0.5 = half.' },
    ],

    // Stats Multipliers - Tamed Dino (Taming Effectiveness Bonus)
    'stats-tamed-affinity': [
        { name: 'PerLevelStatsMultiplier_DinoTamed_Affinity[0]', default: '0.44', type: 'float', description: 'Scales the Health bonus gained from taming effectiveness. Higher taming effectiveness (perfect tames) grants bonus levels, and this affects how much Health those levels provide.', effect: '1.0 = full effectiveness Health bonus; 0 = no bonus from effectiveness. Rewards careful, high-quality tames.' },
        { name: 'PerLevelStatsMultiplier_DinoTamed_Affinity[1]', default: '1.0', type: 'float', description: 'Scales the Stamina bonus gained from taming effectiveness. Affects how much bonus Stamina creatures gain from achieving high taming effectiveness.', effect: '2.0 = double Stamina from effectiveness bonus; 0.5 = half.' },
        { name: 'PerLevelStatsMultiplier_DinoTamed_Affinity[2]', default: '1.0', type: 'float', description: 'Scales the Torpidity bonus gained from taming effectiveness. Affects how much bonus Torpidity creatures gain from high effectiveness tames.', effect: '2.0 = double Torpidity from effectiveness bonus; 0.5 = half.' },
        { name: 'PerLevelStatsMultiplier_DinoTamed_Affinity[3]', default: '1.0', type: 'float', description: 'Scales the Oxygen bonus gained from taming effectiveness. Affects how much bonus Oxygen creatures gain from high effectiveness tames.', effect: '2.0 = double Oxygen from effectiveness bonus; 0.5 = half.' },
        { name: 'PerLevelStatsMultiplier_DinoTamed_Affinity[4]', default: '1.0', type: 'float', description: 'Scales the Food capacity bonus gained from taming effectiveness. Affects how much bonus Food creatures gain from high effectiveness tames.', effect: '2.0 = double Food from effectiveness bonus; 0.5 = half.' },
        { name: 'PerLevelStatsMultiplier_DinoTamed_Affinity[7]', default: '1.0', type: 'float', description: 'Scales the Weight bonus gained from taming effectiveness. Affects how much bonus carry capacity creatures gain from high effectiveness tames.', effect: '2.0 = double Weight from effectiveness bonus; 0.5 = half.' },
        { name: 'PerLevelStatsMultiplier_DinoTamed_Affinity[8]', default: '0.44', type: 'float', description: 'Scales the Melee Damage bonus gained from taming effectiveness. Default 0.44 limits how much damage boost comes from perfect tames.', effect: '1.0 = full effectiveness Melee bonus; 0 = no damage bonus from effectiveness. Major impact on tamed dino power.' },
        { name: 'PerLevelStatsMultiplier_DinoTamed_Affinity[9]', default: '1.0', type: 'float', description: 'Scales the Movement Speed bonus gained from taming effectiveness. Affects how much bonus Speed creatures gain from high effectiveness tames.', effect: '2.0 = double Speed from effectiveness bonus; 0.5 = half.' },
    ],

    // Stats Multipliers - Wild Dino
    'stats-wild': [
        { name: 'PerLevelStatsMultiplier_DinoWild[0]', default: '1.0', type: 'float', description: 'Scales how much Health wild creatures gain per wild level. Higher level wild dinos will have more Health based on this multiplier.', effect: '2.0 = wild dinos have double Health per level (much tankier); 0.5 = half Health. Affects taming difficulty and wild threat level.' },
        { name: 'PerLevelStatsMultiplier_DinoWild[1]', default: '1.0', type: 'float', description: 'Scales how much Stamina wild creatures gain per wild level. Affects how long wild creatures can chase, flee, or fight.', effect: '2.0 = wild dinos have double Stamina per level; 0.5 = half. Affects wild creature endurance in combat.' },
        { name: 'PerLevelStatsMultiplier_DinoWild[2]', default: '1.0', type: 'float', description: 'Scales how much Torpidity wild creatures gain per wild level. Affects how much tranquilizer it takes to knock out wild creatures for taming.', effect: '2.0 = wild dinos have double Torpidity (harder to knockout); 0.5 = half (easier to tranq).' },
        { name: 'PerLevelStatsMultiplier_DinoWild[3]', default: '1.0', type: 'float', description: 'Scales how much Oxygen wild creatures gain per wild level. Affects how long wild creatures can stay underwater.', effect: '2.0 = wild dinos have double Oxygen per level; 0.5 = half.' },
        { name: 'PerLevelStatsMultiplier_DinoWild[4]', default: '1.0', type: 'float', description: 'Scales how much Food capacity wild creatures gain per wild level. Affects how long wild creatures can go without eating and taming food requirements.', effect: '2.0 = wild dinos have double Food per level (longer tames); 0.5 = half.' },
        { name: 'PerLevelStatsMultiplier_DinoWild[7]', default: '1.0', type: 'float', description: 'Scales how much Weight wild creatures gain per wild level. Primarily affects what wild creatures can pick up and carry.', effect: '2.0 = wild dinos have double Weight per level; 0.5 = half.' },
        { name: 'PerLevelStatsMultiplier_DinoWild[8]', default: '1.0', type: 'float', description: 'Scales how much Melee Damage wild creatures gain per wild level. Higher level wild dinos will hit significantly harder.', effect: '2.0 = wild dinos deal double damage per level (very dangerous); 0.5 = half damage. Major difficulty adjustment.' },
        { name: 'PerLevelStatsMultiplier_DinoWild[9]', default: '1.0', type: 'float', description: 'Scales how much Movement Speed wild creatures gain per wild level. Affects how fast wild creatures can chase or flee.', effect: '2.0 = wild dinos are twice as fast per level; 0.5 = half speed.' },
    ],

    // XP & Leveling
    'game-xp': [
        { name: 'KillXPMultiplier', default: '1.0', type: 'float', description: 'Scales experience points earned from killing creatures. Includes both wild and tamed creature kills. Major source of combat-focused leveling.', effect: '2.0 = double XP from kills; 0.5 = half. Higher values make combat-based leveling faster.' },
        { name: 'HarvestXPMultiplier', default: '1.0', type: 'float', description: 'Scales experience points earned from harvesting resources like trees, rocks, and corpses. Steady XP source during normal gameplay activities.', effect: '2.0 = double XP from harvesting; 0.5 = half. Higher values reward resource gathering more.' },
        { name: 'CraftXPMultiplier', default: '1.0', type: 'float', description: 'Scales experience points earned from crafting items and structures. Crafting can be a significant XP source, especially for expensive items.', effect: '2.0 = double XP from crafting; 0.5 = half. Higher values make crafting-focused leveling viable.' },
        { name: 'GenericXPMultiplier', default: '1.0', type: 'float', description: 'Scales passive and miscellaneous experience gains not covered by other categories. Includes tribe shared XP and various minor XP sources.', effect: '2.0 = double passive/generic XP; 0.5 = half. Affects background leveling speed.' },
        { name: 'SpecialXPMultiplier', default: '1.0', type: 'float', description: 'Scales experience points from special actions and events like explorer notes, boss kills, and mission completions. Often provides large one-time XP bonuses.', effect: '2.0 = double XP from special sources; 0.5 = half. Affects milestone-based leveling.' },
    ],

};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { gameUserSettings, gameIniSettings };
}
