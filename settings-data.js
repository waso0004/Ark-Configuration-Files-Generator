// ARK: Survival Ascended Server Settings Data
// Only includes ASA-supported settings with their default values

const gameUserSettings = {
    // General Server Settings
    'server-general': [
        { name: 'SessionName', default: 'ARK #123456', type: 'text', section: 'SessionSettings', description: 'Server name shown in browser.', effect: 'If no name is provided, default is ARK # + random 6 digits.' },
        { name: 'Port', default: '7777', type: 'integer', section: 'SessionSettings', description: 'Specifies the UDP Game Port.', effect: 'Port used for game connections (default 7777).' },
        { name: 'QueryPort', default: '27015', type: 'integer', section: 'SessionSettings', description: 'Specifies the UDP Steam Query Port.', effect: 'Port used for Steam server browser queries.' },
        { name: 'MultiHome', default: '', type: 'text', section: 'SessionSettings', description: 'Sets MultiHome IP address.', effect: 'Leave empty if not using multihoming.' },
        { name: 'ServerPassword', default: '', type: 'text', description: 'Password required to join the server.', effect: 'If specified, players must provide this password to join.' },
        { name: 'ServerAdminPassword', default: '', type: 'text', description: 'Password for administrator commands on the server.', effect: 'Required for admin commands and RCON connections.' },
        { name: 'RCONEnabled', default: 'False', type: 'boolean', description: 'Enables RCON for remote server management.', effect: 'If True, enables RCON. Requires RCONPort and ServerAdminPassword.' },
        { name: 'RCONPort', default: '27020', type: 'integer', description: 'Specifies the TCP RCON Port.', effect: 'Port for RCON connections (default 27020).' },
        { name: 'RCONServerGameLogBuffer', default: '600.0', type: 'float', description: 'Lines of game logs sent over RCON.', effect: 'Higher sends more lines; lower sends fewer.' },
        { name: 'MaxPlayers', default: '70', type: 'integer', section: '/Script/Engine.GameSession', description: 'Maximum number of players on the server.', effect: 'In ASA, use -WinLiveMaxPlayers command line argument instead.' },
        { name: 'MessageOfTheDay', default: 'Welcome to the server!', type: 'text', section: 'MessageOfTheDay', sectionKey: 'Message', description: 'Message displayed to players on login.', effect: 'Single line string shown when players connect. Use \\n for new lines.' },
        { name: 'MessageDuration', default: '20', type: 'integer', section: 'MessageOfTheDay', sectionKey: 'Duration', description: 'Duration of MOTD display in seconds.', effect: 'How long the message is shown on player login.' },
        { name: 'AllowThirdPersonPlayer', default: 'True', type: 'boolean', description: 'Allows third-person camera view.', effect: 'If False, disables third-person camera on dedicated servers.' },
        { name: 'ServerCrosshair', default: 'True', type: 'boolean', description: 'Enables the crosshair on the server.', effect: 'If False, disables the crosshair.' },
        { name: 'ServerHardcore', default: 'False', type: 'boolean', description: 'Enables Hardcore (death resets to level 1).', effect: 'True enables; False disables.' },
        { name: 'globalVoiceChat', default: 'False', type: 'boolean', description: 'Makes voice chat global.', effect: 'True makes global; False normal.' },
        { name: 'ProximityChat', default: 'False', type: 'boolean', description: 'Limits chat visibility to nearby players when True.', effect: 'True enables proximity chat; False disables.' },
        { name: 'noTributeDownloads', default: 'False', type: 'boolean', description: 'Prevents Cross-ARK data downloads when True.', effect: 'True blocks downloads; False allows.' },
        { name: 'AllowAnyoneBabyImprintCuddle', default: 'False', type: 'boolean', description: 'Allows anyone to do baby care actions, not only the imprinter.', effect: 'True allows anyone; False restricts.' },
        { name: 'EnableExtraStructurePreventionVolumes', default: 'False', type: 'boolean', description: 'Disables building in specific resource-rich areas when True.', effect: 'True enables extra prevention; False disables.' },
        { name: 'AllowCrateSpawnsOnTopOfStructures', default: 'False', type: 'boolean', description: 'Lets supply crates spawn on top of structures.', effect: 'True allows; False prevents.' },
        { name: 'AllowIntegratedSPlusStructures', default: 'True', type: 'boolean', description: 'Enables integrated S+ structures.', effect: 'False disables these structures; True enables.' },
        { name: 'AllowSharedConnections', default: 'False', type: 'boolean', description: 'Allows family sharing players to connect.', effect: 'True allows; False blocks.' },
        { name: 'ShowFloatingDamageText', default: 'False', type: 'boolean', description: 'Enables floating damage numbers.', effect: 'True shows; False hides.' },
        { name: 'ShowMapPlayerLocation', default: 'True', type: 'boolean', description: 'Shows your precise location on your map.', effect: 'False hides; True shows.' },
        { name: 'AlwaysNotifyPlayerLeft', default: 'False', type: 'boolean', description: 'Always shows a notification when someone leaves.', effect: 'True always notifies; False uses normal behavior.' },
        { name: 'DontAlwaysNotifyPlayerJoined', default: 'False', type: 'boolean', description: 'Disables join notifications when True.', effect: 'True disables join notices; False allows.' },
        { name: 'AutoSavePeriodMinutes', default: '15.0', type: 'float', description: 'Sets interval (minutes) for automatic saves.', effect: '0 causes constant saving.' },
        { name: 'AutoRestartIntervalSeconds', default: '', type: 'float', description: 'Time in seconds before automatic server restart.', effect: 'When set, server auto-restarts after specified seconds.' },
        { name: 'KickIdlePlayersPeriod', default: '3600.0', type: 'float', description: 'Time (seconds) before idle players are kicked (with -EnableIdlePlayerKick).', effect: 'Higher kicks later; lower kicks sooner.' },

        { name: 'ActiveMods', default: '', type: 'text', description: 'Sets which mods load and their order (comma-separated IDs).', effect: 'Changing order changes priority (left-most highest).', placeholder: 'Example: 123456789,987654321' },
        { name: 'ActiveMapMod', default: '', type: 'text', description: 'Sets which mod map is loaded (uses the map Mod ID).', effect: 'Changing mod ID changes which map loads.', placeholder: 'Enter Mod ID (e.g., 962796)' },
        { name: 'BanListURL', default: 'https://cdn2.arkdedicated.com/asa/BanList.txt', type: 'text', description: 'Sets the global ban list URL (fetched every 10 minutes).', effect: 'Changing URL changes the ban list source.', placeholder: 'https://cdn2.arkdedicated.com/asa/BanList.txt' },
        { name: 'AdminListURL', default: '', type: 'text', description: 'Alternative to AllowedCheaterAccountIDs.txt using a web resource.', effect: 'The interval at which the server queries is defined by UpdateAllowedCheatersInterval.' },
        { name: 'bFilterCharacterNames', default: 'False', type: 'boolean', description: 'Filters character names using bad/good word lists.', effect: 'True filters; False does not.' },
        { name: 'bFilterChat', default: 'False', type: 'boolean', description: 'Filters chat based on bad/good word lists.', effect: 'True filters; False does not.' },
        { name: 'bFilterTribeNames', default: 'False', type: 'boolean', description: 'Filters tribe names using bad/good word lists.', effect: 'True filters; False does not.' },
        { name: 'LogChatMessages', default: 'False', type: 'boolean', description: 'Enables advanced chat logging.', effect: 'If True, chat logs are saved in ShooterGame/Saved/Logs/ChatLogs/<SessionName>/ in JSON format.' },
        { name: 'ChatLogFileSplitIntervalSeconds', default: '86400', type: 'integer', description: 'Chat log file split interval (seconds).', effect: 'How often to split the chat log file. Minimum is 45 (lower values revert to 45). Set to 0 only in official.' },
        { name: 'ChatLogFlushIntervalSeconds', default: '86400', type: 'integer', description: 'Chat log flush interval (seconds).', effect: 'How often chat log is flushed to file. Minimum is 15 (lower values revert to 15). Set to 0 only in official.' },
        { name: 'ChatLogMaxAgeInDays', default: '5', type: 'integer', description: 'Controls how many days chat logs are kept.', effect: 'Set to a negative value for virtually infinite retention. Set to 0 only in official.' },

        { name: 'TribeNameChangeCooldown', default: '15.0', type: 'float', description: 'Cooldown (minutes) between tribe name changes.', effect: 'Higher increases cooldown; lower decreases.' },
        // TribeLogDestroyedEnemyStructures removed - belongs in Game.ini only (see game-general section)
        { name: 'UseCharacterTracker', default: 'False', type: 'boolean', description: 'Enables character tracking (also via command line).', effect: 'True enables; False disables.' },
        { name: 'ServerAutoForceRespawnWildDinosInterval', default: '0.0', type: 'float', description: 'Forces wild respawn on restart after this many seconds; 0.0 disables.', effect: 'Higher forces more often; 0 disables.' },

        // Additional Server Settings
        { name: 'ImplantSuicideCD', default: '28800', type: 'float', description: 'Defines the time (in seconds) between uses of the implant Respawn feature.', effect: 'Default 28800 = 8 hours cooldown between implant suicide uses.' },
        { name: 'EnableMeshBitingProtection', default: 'True', type: 'boolean', description: 'Enables protection against mesh biting exploits.', effect: 'If False, disables the anti-mesh biting protection system.' },
        { name: 'ServerEnableMeshChecking', default: 'False', type: 'boolean', description: 'Enables mesh checking for foliage repopulation.', effect: 'If True, involved in foliage repopulation. Does nothing if -forcedisablemeshchecking is used.' },
        { name: 'FreezeReaperPregnancy', default: 'False', type: 'boolean', description: 'Freezes Reaper King pregnancy progression.', effect: 'If True, stops the pregnancy timer and XP gains for Reaper King pregnancies.' },
        { name: 'EnableAFKKickPlayerCountPercent', default: '0.0', type: 'float', description: 'Enables idle timeout only when player count reaches this percentage of MaxPlayers.', effect: 'Value from 0.0-1.0 (1.0 = 100%). Official uses 0.89999998.' },
        { name: 'DontRestoreBackup', default: 'False', type: 'boolean', description: 'Prevents automatic backup restoration on corruption.', effect: 'If True and -DisableDupeLogDeletes is present, server will not restore a backup on corrupted save.' },
        { name: 'UseExclusiveList', default: 'False', type: 'boolean', description: 'Enables whitelist-only server access.', effect: 'If True, only players on the exclusive list can join (like -exclusivejoin).' },
        { name: 'UpdateAllowedCheatersInterval', default: '600.0', type: 'float', description: 'Interval (seconds) to query remote admin list updates.', effect: 'Values < 3.0 revert to 3.0.' },
        { name: 'PreventOutOfTribePinCodeUse', default: 'False', type: 'boolean', description: 'Prevents non-tribe players from using PINs on structures.', effect: 'True prevents; False allows.' },

        // Network Stasis Settings
        { name: 'NPCNetworkStasisRangeScalePlayerCountStart', default: '0', type: 'integer', description: 'Min online players to enable NPC stasis range scaling override.', effect: '0 disables.' },
        { name: 'NPCNetworkStasisRangeScalePlayerCountEnd', default: '0', type: 'integer', description: 'Online player count where PercentEnd is reached.', effect: '0 disables.' },
        { name: 'NPCNetworkStasisRangeScalePercentEnd', default: '0.55000001', type: 'float', description: 'Maximum scale percentage when NPCNetworkStasisRangeScalePlayerCountEnd is reached.', effect: 'Used to override NPC Network Stasis Range Scale. Official uses 0.5.' },

        // URL Settings
        { name: 'BadWordListURL', default: 'http://cdn2.arkdedicated.com/asa/badwords.txt', type: 'text', description: 'URL for bad words list.', effect: 'Changing URL changes filtered word list.', placeholder: 'http://cdn2.arkdedicated.com/asa/badwords.txt' },
        { name: 'BadWordWhiteListURL', default: 'http://cdn2.arkdedicated.com/asa/goodwords.txt', type: 'text', description: 'URL for good words list.', effect: 'Changing URL changes allowed words list.', placeholder: 'http://cdn2.arkdedicated.com/asa/goodwords.txt' },
        { name: 'CustomDynamicConfigUrl', default: '', type: 'text', description: 'Link to live dynamicconfig.ini for supported live changes.', effect: 'Changing URL changes live config source. Requires -UseDynamicConfig command line option.' },
        { name: 'CustomLiveTuningUrl', default: '', type: 'text', description: 'Link to live tuning file.', effect: 'Changing URL changes live tuning source.' },
    ],

    // Rates & Multipliers
    'server-rates': [
        { name: 'DifficultyOffset', default: '1.0', type: 'float', description: 'Specifies the difficulty level.', effect: 'Controls creature levels, loot quality, and overall game difficulty.' },
        { name: 'OverrideOfficialDifficulty', default: '0.0', type: 'float', description: 'Overrides the default server difficulty level of 4.', effect: 'Value of 0.0 disables override. Value of 5.0 allows wild creatures to spawn up to level 150.' },
        { name: 'XPMultiplier', default: '1.0', type: 'float', description: 'Scales experience received by players, tribes, and tames.', effect: 'Higher values increase XP amounts for various actions; lower values decrease it.' },
        { name: 'TamingSpeedMultiplier', default: '1.0', type: 'float', description: 'Scales creature taming speed.', effect: 'Higher values make taming faster.' },
        { name: 'HarvestAmountMultiplier', default: '1.0', type: 'float', description: 'Scales yields from all harvesting activities.', effect: 'Higher values increase the amount of materials harvested with each strike (trees, berries, carcasses, rocks, etc.).' },
        { name: 'HarvestHealthMultiplier', default: '1.0', type: 'float', description: 'Scales the health of harvestable objects (trees, rocks, carcasses, etc.).', effect: 'Higher values mean more strikes needed to destroy, resulting in higher overall harvest yields.' },
        { name: 'ResourcesRespawnPeriodMultiplier', default: '1.0', type: 'float', description: 'Scales resource node respawn rate.', effect: 'Lower respawns more often; higher respawns less often.' },
        { name: 'ClampResourceHarvestDamage', default: 'False', type: 'boolean', description: 'Limits damage to resources based on remaining health.', effect: 'If True, may result in reduced resource harvesting using high damage tools or creatures.' },
        { name: 'ItemStackSizeMultiplier', default: '1.0', type: 'float', description: 'Scales global item stack sizes.', effect: 'All default stack sizes are multiplied by this value (excluding items with stack size of 1 by default).' },
    ],

    // Player Settings
    'server-player': [
        { name: 'PlayerDamageMultiplier', default: '1.0', type: 'float', description: 'Scales damage players deal with their attacks.', effect: 'Default value 1 provides normal damage. Higher values increase damage; lower values decrease it.' },
        { name: 'PlayerResistanceMultiplier', default: '1.0', type: 'float', description: 'Scales player resistance (damage taken).', effect: 'Higher decreases resistance (more damage taken); lower increases.' },
        { name: 'PlayerCharacterFoodDrainMultiplier', default: '1.0', type: 'float', description: 'Scales player food consumption.', effect: 'Higher values increase food consumption (players get hungry faster).' },
        { name: 'PlayerCharacterWaterDrainMultiplier', default: '1.0', type: 'float', description: 'Scales player water consumption.', effect: 'Higher values increase water consumption (players get thirsty faster).' },
        { name: 'PlayerCharacterStaminaDrainMultiplier', default: '1.0', type: 'float', description: 'Scales player stamina consumption.', effect: 'Higher values increase stamina consumption (players get tired faster).' },
        { name: 'PlayerCharacterHealthRecoveryMultiplier', default: '1.0', type: 'float', description: 'Scales player health recovery rate.', effect: 'Higher values increase the recovery rate (players heal faster).' },
        { name: 'OxygenSwimSpeedStatMultiplier', default: '1.0', type: 'float', description: 'Sets how swim speed is multiplied by level spent in oxygen.', effect: 'Higher values increase swim speed gain per oxygen level.' },
        { name: 'PreventDiseases', default: 'False', type: 'boolean', description: 'Completely disables diseases on the server.', effect: 'If True, diseases like Swamp Fever are prevented.' },
        { name: 'NonPermanentDiseases', default: 'False', type: 'boolean', description: 'Makes permanent diseases not permanent.', effect: 'If True, players will lose diseases on respawn.' },
    ],

    // Dinosaur Settings
    'server-dino': [
        { name: 'DinoDamageMultiplier', default: '1.0', type: 'float', description: 'Scales damage wild creatures deal with their attacks.', effect: 'Default value 1 provides normal damage. Higher values increase damage; lower values decrease it.' },
        { name: 'DinoResistanceMultiplier', default: '1.0', type: 'float', description: 'Scales resistance of wild creatures (damage taken).', effect: 'Higher decreases resistance (more damage taken); lower increases resistance.' },
        { name: 'DinoCharacterFoodDrainMultiplier', default: '1.0', type: 'float', description: 'Scales creatures food consumption.', effect: 'Higher values increase food consumption (creatures get hungry faster). Also affects taming-times.' },
        { name: 'DinoCharacterStaminaDrainMultiplier', default: '1.0', type: 'float', description: 'Scales creatures stamina consumption.', effect: 'Higher values increase stamina consumption (creatures get tired faster).' },
        { name: 'DinoCharacterHealthRecoveryMultiplier', default: '1.0', type: 'float', description: 'Scales creatures health recovery rate.', effect: 'Higher values increase the recovery rate (creatures heal faster).' },
        { name: 'TamedDinoDamageMultiplier', default: '1.0', type: 'float', description: 'Scales damage tame creatures deal with their attacks.', effect: 'Default value 1 provides normal damage. Higher values increase damage; lower values decrease it.' },
        { name: 'TamedDinoResistanceMultiplier', default: '1.0', type: 'float', description: 'Scales resistance of tamed dinos (damage taken).', effect: 'Higher decreases resistance (more damage taken); lower increases.' },
        { name: 'RaidDinoCharacterFoodDrainMultiplier', default: '1.0', type: 'float', description: 'Affects how quickly food drains on raid dinos (e.g., Titanosaurus).', effect: 'Higher values make raid dinos lose food faster.' },
        { name: 'MaxTamedDinos', default: '5000.0', type: 'float', description: 'Sets the maximum number of tame creatures on a server (global cap).', effect: 'Coded as float but suggested to use an integer.' },
        { name: 'MaxPersonalTamedDinos', default: '0', type: 'integer', description: 'Sets a per-tribe creature tame limit.', effect: 'Official PvE uses 500, PvP uses 300. Default 0 disables the limit.' },
        { name: 'AutoDestroyDecayedDinos', default: 'False', type: 'boolean', description: 'Auto-destroys claimable decayed tames on load.', effect: 'If True, decayed tames are deleted rather than remaining claimable.' },
        { name: 'AllowFlyerCarryPvE', default: 'False', type: 'boolean', description: 'Allows flying creatures to pick up wild creatures in PvE.', effect: 'If True, flyers can carry wild creatures in PvE mode.' },
        { name: 'bForceCanRideFliers', default: 'False', type: 'boolean', description: 'Allows flyers on maps where normally disabled.', effect: 'If True, allows flyers. If False, uses map default. Only exported when enabled.' },
        { name: 'AllowRaidDinoFeeding', default: 'False', type: 'boolean', description: 'Allows Titanosaurs to be permanently tamed.', effect: 'If True, allows Titanosaurs to be fed. Note: The Island only spawns max 3 Titanosaurs.' },
        { name: 'DisableImprintDinoBuff', default: 'False', type: 'boolean', description: 'Disables creature imprinting player Stat Bonus.', effect: 'If True, whomever imprinted on the creature does not get the extra Damage/Resistance buff.' },
        { name: 'PreventMateBoost', default: 'False', type: 'boolean', description: 'Disables creature mate boosting.', effect: 'If True, creatures near a mate will not receive the mate boost buff.' },
        { name: 'DinoCountMultiplier', default: '1.0', type: 'float', description: 'Scales creature spawns.', effect: 'Higher values increase the number of creatures spawned throughout the ARK.' },
        { name: 'AllowFlyingStaminaRecovery', default: 'False', type: 'boolean', description: 'Allows server to recover Stamina when standing on a Flyer.', effect: 'If True, stamina recovers while standing on flying creatures.' },
    ],

    // Structure Settings
    'server-structure': [
        { name: 'AlwaysAllowStructurePickup', default: 'False', type: 'boolean', description: 'Disables the timer on the quick pick-up system.', effect: 'If True, structures can be picked up at any time.' },
        { name: 'AllowCaveBuildingPvE', default: 'False', type: 'boolean', description: 'Allows building in caves when PvE mode is enabled.', effect: 'If True, allows building in caves on PvE servers.' },
        { name: 'AllowCaveBuildingPvP', default: 'True', type: 'boolean', description: 'Allows building in caves when PvP mode is enabled.', effect: 'If False, prevents building in caves on PvP servers.' },
        { name: 'IgnoreLimitMaxStructuresInRangeTypeFlag', default: 'False', type: 'boolean', description: 'Removes the limit of 150 decorative structures (flags, signs, dermis, etc.).', effect: 'If True, no limit on decorative structure count.' },
        { name: 'OverrideStructurePlatformPrevention', default: 'False', type: 'boolean', description: 'Allows turrets to be buildable and functional on platform saddles.', effect: 'If True, turrets and spike structures can be placed on platforms.' },
        { name: 'StructureDamageMultiplier', default: '1.0', type: 'float', description: 'Scales damage structures deal with their attacks (e.g., spiked walls).', effect: 'Higher values increase damage; lower values decrease it.' },
        { name: 'StructureResistanceMultiplier', default: '1.0', type: 'float', description: 'Scales structure resistance (damage taken).', effect: 'Higher decreases resistance (more damage taken); lower increases.' },
        { name: 'MaxStructuresInRange', default: '1300', type: 'integer', description: 'Max structures in range (deprecated).', effect: 'Deprecated. Use TheMaxStructuresInRange instead.' },
        { name: 'TheMaxStructuresInRange', default: '10500', type: 'integer', description: 'Max structures in a certain hard-coded range.', effect: 'Higher allows more; lower allows fewer. Replaces NewMaxStructuresInRange.' },
        { name: 'StructurePreventResourceRadiusMultiplier', default: '1.0', type: 'float', description: 'Multiplies structure resource no-replenish radius (also multiplies Game.ini setting).', effect: 'Higher increases blocked regrowth radius; lower reduces.' },
        { name: 'MaxPlatformSaddleStructureLimit', default: '75', type: 'integer', description: 'Changes the maximum number of platform-creatures/rafts on the ARK.', effect: 'Example: 10 would only allow 10 platform saddles/rafts across the entire ARK.' },
        { name: 'MaxGateFrameOnSaddles', default: '0', type: 'integer', description: 'Defines the maximum gateways allowed on platform saddles.', effect: 'Value of 2 = Official PvP. Set to 0 to prevent gateways (Official PvE). Not retroactive.' },
        { name: 'PerPlatformMaxStructuresMultiplier', default: '1.0', type: 'float', description: 'Scales max number of items placeable on saddles and rafts.', effect: 'Higher value increases (from a percentage scale) the maximum structures allowed.' },
        { name: 'PlatformSaddleBuildAreaBoundsMultiplier', default: '1.0', type: 'float', description: 'Scales the buildable area on platforms.', effect: 'Increasing the number allows structures to be placed further from the platform.' },
        { name: 'PersonalTamedDinosSaddleStructureCost', default: '0', type: 'integer', description: 'Determines tame creature slots a platform saddle (with structures) uses.', effect: 'Amount counted toward tribe tame creature limit for each platform saddle creature.' },
        { name: 'StructurePickupTimeAfterPlacement', default: '30.0', type: 'float', description: 'Amount of time in seconds after placement that quick pick-up is available.', effect: 'Defines the window for structure pickup after placing.' },
        { name: 'StructurePickupHoldDuration', default: '0.5', type: 'float', description: 'Specifies the quick pick-up hold duration.', effect: 'A value of 0 results in instant pick-up.' },
        { name: 'FastDecayUnsnappedCoreStructures', default: 'False', type: 'boolean', description: 'Enables fast decay for unsnapped foundations/pillars/fences/Tek Dedicated Storage.', effect: 'If True, unsnapped core structures will decay after the time stated by FastDecayInterval in Game.ini.' },
        { name: 'OnlyDecayUnsnappedCoreStructures', default: 'False', type: 'boolean', description: 'Only unsnapped core structures will decay.', effect: 'If True, useful for eliminating lone pillar/foundation spam.' },
        { name: 'OnlyAutoDestroyCoreStructures', default: 'False', type: 'boolean', description: 'Prevents non-core/non-foundation structures from auto-destroying.', effect: 'If True, only core structures auto-destroy (others still destroyed if their floor is destroyed). Official PvE uses this.' },
        { name: 'AutoDestroyOldStructuresMultiplier', default: '0.0', type: 'float', description: 'Auto-destroys abandoned structures after enough time (multiplier).', effect: '1.0 enables; higher and lower scale timing. Requires -AutoDestroyStructures command line option.' },
        { name: 'MaxStructuresInSmallRadius', default: '0', type: 'integer', description: 'Maximum structures in a small radius.', effect: 'Limits structure density in the area defined by RadiusStructuresInSmallRadius (0 = disabled).' },
        { name: 'RadiusStructuresInSmallRadius', default: '0.0', type: 'float', description: 'Radius for small structure density check.', effect: 'Defines the area size for MaxStructuresInSmallRadius limit (0 = disabled).' },
        { name: 'MaxStructuresToProcess', default: '0', type: 'integer', description: 'Maximum structures processed per server tick.', effect: 'Limits the batch size for structure processing operations (0 = default).' },
        { name: 'UseOptimizedHarvestingHealth', default: 'False', type: 'boolean', description: 'Uses optimized harvesting health calculations.', effect: 'If True, enables optimized harvesting (may reduce rare resource drops).' },
        { name: 'UseFjordurTraversalBuff', default: 'False', type: 'boolean', description: 'Enables Fjordur realm teleportation.', effect: 'If True, allows using the R key to teleport between realms on Fjordur.' },
    ],

    // PvP/PvE Settings
    'server-pvp': [
        { name: 'serverPVE', default: 'False', type: 'boolean', description: 'Disables PvP and enables PvE.', effect: 'If True, player vs player combat is disabled.' },
        { name: 'DisablePvEGamma', default: 'False', type: 'boolean', description: 'Prevents use of console command gamma in PvE mode.', effect: 'If True, gamma adjustment is disabled in PvE.' },
        { name: 'EnablePvPGamma', default: 'False', type: 'boolean', description: 'Allows use of console command gamma in PvP mode.', effect: 'If True, gamma adjustment is enabled in PvP.' },
        { name: 'PreventOfflinePvP', default: 'False', type: 'boolean', description: 'Enables Offline Raiding Prevention (ORP).', effect: 'If True, tribe characters, creatures, and structures become invulnerable when all tribe members are offline.' },
        { name: 'PreventOfflinePvPInterval', default: '0.0', type: 'float', description: 'Seconds to wait before ORP becomes active for tribe/players.', effect: 'Official PvE uses 10 seconds. Suggested to use an integer.' },
        { name: 'PreventTribeAlliances', default: 'False', type: 'boolean', description: 'Prevents tribes from creating Alliances.', effect: 'If True, the tribe alliance system is disabled.' },
        { name: 'PvPStructureDecay', default: 'False', type: 'boolean', description: 'Enables structures decay on PvP servers while ORP is active.', effect: 'If True, structures can decay even when offline protection is active.' },
        { name: 'PvPDinoDecay', default: 'False', type: 'boolean', description: 'Enables creatures decay in PvP while ORP is active.', effect: 'If True, creatures can decay even when offline protection is active.' },
        { name: 'DisableStructureDecayPvE', default: 'False', type: 'boolean', description: 'Disables the gradual auto-decay of player structures.', effect: 'If True, structures never become demolishable in PvE.' },
        { name: 'DisableDinoDecayPvE', default: 'False', type: 'boolean', description: 'Disables the creature decay in PvE mode.', effect: 'If True, creatures never become claimable in PvE.' },
        { name: 'PvEStructureDecayPeriodMultiplier', default: '1.0', type: 'float', description: 'Scales structure decay times.', effect: 'Setting at 2.0 doubles decay times; 0.5 halves them. Works in both PvP and PvE.' },
        { name: 'PvEDinoDecayPeriodMultiplier', default: '1.0', type: 'float', description: 'Creature PvE auto-decay time multiplier.', effect: 'Requires DisableDinoDecayPvE=False. Scales creature decay period.' },
        { name: 'PvEAllowStructuresAtSupplyDrops', default: 'False', type: 'boolean', description: 'Allows building near supply drop points in PvE mode.', effect: 'If True, structures can be placed near supply drop spawn locations.' },
        { name: 'AllowHitMarkers', default: 'True', type: 'boolean', description: 'Enables optional hit markers for ranged attacks.', effect: 'False disables; True enables.' },
        { name: 'AllowMultipleAttachedC4', default: 'False', type: 'boolean', description: 'Allows more than one C4 attached per creature.', effect: 'True allows; False blocks.' },
        { name: 'AllowHideDamageSourceFromLogs', default: 'True', type: 'boolean', description: 'Hides damage sources in tribe logs when enabled.', effect: 'False shows sources; True hides.' },

        { name: 'ForceAllStructureLocking', default: 'False', type: 'boolean', description: 'Defaults all structures to locked.', effect: 'True locks by default; False does not.' },
        { name: 'ServerForceNoHUD', default: 'False', type: 'boolean', description: 'HUD is always disabled for non-tribe owned NPCs.', effect: 'If True, hides the HUD for non-tribe owned NPCs.' },
        { name: 'PreventDownloadSurvivors', default: 'False', type: 'boolean', description: 'Prevents survivors download from ARK Data in Cross-ARK transfer.', effect: 'If True, players cannot download characters to this server.' },
        { name: 'PreventDownloadItems', default: 'False', type: 'boolean', description: 'Prevents items download from ARK Data in Cross-ARK transfer.', effect: 'If True, players cannot download items to this server.' },
        { name: 'PreventDownloadDinos', default: 'False', type: 'boolean', description: 'Prevents creatures download from ARK Data in Cross-ARK transfer.', effect: 'If True, players cannot download creatures to this server.' },
        { name: 'PreventUploadSurvivors', default: 'False', type: 'boolean', description: 'Prevents survivors upload to ARK Data in Cross-ARK transfer.', effect: 'If True, players cannot upload characters from this server.' },
        { name: 'PreventUploadItems', default: 'False', type: 'boolean', description: 'Prevents items upload to ARK Data in Cross-ARK transfer.', effect: 'If True, players cannot upload items from this server.' },
        { name: 'PreventUploadDinos', default: 'False', type: 'boolean', description: 'Prevents creatures upload to ARK Data in Cross-ARK transfer.', effect: 'If True, players cannot upload creatures from this server.' },
        { name: 'CrossARKAllowForeignDinoDownloads', default: 'False', type: 'boolean', description: 'Enables non-native creatures tribute download on Aberration.', effect: 'If True, allows downloading non-native creatures.' },
        { name: 'AllowTekSuitPowersInGenesis', default: 'False', type: 'boolean', description: 'Enables TEK suit powers in Genesis: Part 1.', effect: 'If True, Tek suit features work normally in Genesis Part 1.' },
        { name: 'MaxHexagonsPerCharacter', default: '2000000000', type: 'integer', description: 'Sets max Hexagons a character can hold.', effect: 'Higher increases max; lower decreases.' },
        { name: 'MinimumDinoReuploadInterval', default: '0.0', type: 'float', description: 'Cooldown (seconds) between creature re-uploads.', effect: 'Higher increases wait; lower decreases.' },
        { name: 'TribeMergeAllowed', default: 'True', type: 'boolean', description: 'Allows tribes to merge.', effect: 'False prevents merging; True allows.' },
        { name: 'TribeMergeCooldown', default: '0.0', type: 'float', description: 'Tribe merge cooldown (seconds).', effect: 'Higher increases cooldown.' },
    ],

    // Ragnarok Settings
    'server-ragnarok': [
        { name: 'AllowMultipleTamedUnicorns', default: 'False', type: 'boolean', section: 'Ragnarok', description: 'Controls unicorn spawns on Ragnarok.', effect: 'False = one unicorn on map at a time. True = one wild and unlimited tamed unicorns.' },
        { name: 'EnableVolcano', default: 'True', type: 'boolean', section: 'Ragnarok', description: 'Controls volcanic activity on Ragnarok.', effect: 'False = disabled (volcano will not become active). True = enabled.' },
        { name: 'UnicornSpawnInterval', default: '24', type: 'integer', section: 'Ragnarok', description: 'Minimum hours before spawning a new Unicorn if killed or tamed.', effect: 'Maximum spawn wait is 2x this value.' },
        { name: 'VolcanoIntensity', default: '1', type: 'float', section: 'Ragnarok', description: 'Controls the intensity of volcanic eruptions.', effect: 'Lower values = more intense. Minimum 0.25. For multiplayer, do not go below 0.5.' },
        { name: 'VolcanoInterval', default: '0', type: 'integer', section: 'Ragnarok', description: 'Time between volcanic eruptions.', effect: '0 = random 5000-15000 seconds. Any number above 0 acts as a multiplier (minimum 0.1).' },
    ],

    // Tek Bunker Settings (Lost Colony)
    'server-bunker': [
        { name: 'LimitBunkersPerTribe', default: 'True', type: 'boolean', description: 'Limits the number of Tek Bunkers per tribe.', effect: 'If True, enforces the LimitBunkersPerTribeNum setting.' },
        { name: 'LimitBunkersPerTribeNum', default: '3', type: 'integer', description: 'Maximum number of Tek Bunkers allowed per tribe.', effect: 'Sets the cap for Tek Bunkers a tribe can own.' },
        { name: 'AllowBunkersInPreventionZones', default: 'False', type: 'boolean', description: 'Allows Tek Bunkers in building prevention zones.', effect: 'If True, bunkers can be placed in normally restricted areas (Lost Colony).' },
        { name: 'AllowRidingDinosInsideBunkers', default: 'True', type: 'boolean', description: 'Allows riding creatures inside Tek Bunkers.', effect: 'If False, players cannot mount creatures while inside a bunker.' },
        { name: 'AllowBunkerModulesAboveGround', default: 'False', type: 'boolean', description: 'Allows Tek Bunker modules to be placed above ground.', effect: 'If True, bunker modules can extend above the surface (Lost Colony).' },
        { name: 'AllowDinoAIInsideBunkers', default: 'True', type: 'boolean', description: 'Allows creature AI to function inside Tek Bunkers.', effect: 'If False, creatures cannot use their AI behaviors inside bunkers.' },
        { name: 'AllowBunkerModulesInPreventionZones', default: 'False', type: 'boolean', description: 'Allows Tek Bunker modules in building prevention zones.', effect: 'If True, bunker modules can be placed in restricted areas (Lost Colony).' },
        { name: 'MinDistanceBetweenBunkers', default: '3000.0', type: 'float', description: 'Minimum distance required between Tek Bunkers.', effect: 'Enforces spacing in game units between bunker placements.' },
        { name: 'EnemyAccessBunkerHPThreshold', default: '0.25', type: 'float', description: 'HP percentage threshold for enemy bunker access.', effect: 'When bunker HP drops below this percentage, enemies can enter.' },
        { name: 'BunkerUnderHPThresholdDmgMultiplier', default: '0.05', type: 'float', description: 'Damage multiplier when bunker is below HP threshold.', effect: 'Reduces damage taken when bunker HP is below the threshold (0.05 = 5% damage).' },
    ],

    // CryoHospital Settings (Lost Colony)
    'server-cryohospital': [
        { name: 'CryoHospitalHoursToRegenHP', default: '1.0', type: 'float', description: 'Time to fully regenerate creature HP in CryoHospital.', effect: 'Hours for a creature to regain full health while in a CryoHospital.' },
        { name: 'CryoHospitalHoursToRegenFood', default: '24.0', type: 'float', description: 'Time to fully regenerate creature food in CryoHospital.', effect: 'Hours for a creature to regain full food while in a CryoHospital.' },
        { name: 'CryoHospitalHoursToDrainTorpor', default: '1.0', type: 'float', description: 'Time to fully drain creature torpor in CryoHospital.', effect: 'Hours for a creature to wake up (torpor reaches 0) in a CryoHospital.' },
        { name: 'CryoHospitalMatingCooldownReduction', default: '2.0', type: 'float', description: 'Mating cooldown reduction multiplier in CryoHospital.', effect: 'How much faster mating cooldown decreases in a CryoHospital (2.0 = 2x faster).' },
    ],

    // Bloodforge Settings (Lost Colony)
    'server-bloodforge': [
        { name: 'BloodforgeReinforceExtraDurability', default: '0.3', type: 'float', description: 'Extra durability bonus from Bloodforge reinforcement.', effect: 'Percentage of durability added when reinforcing items (0.3 = 30% bonus).' },
        { name: 'BloodforgeReinforceResourceCostMultiplier', default: '3.0', type: 'float', description: 'Resource cost multiplier for Bloodforge reinforcement.', effect: 'Scales the resources required for reinforcing items (3.0 = 3x cost).' },
        { name: 'BloodforgeReinforceSpeedMultiplier', default: '0.1', type: 'float', description: 'Speed multiplier for Bloodforge reinforcement process.', effect: 'Scales the time to reinforce items (0.1 = 10% of normal speed).' },
    ],

    // Outpost Settings (Lost Colony)
    'server-outpost': [
        { name: 'MaxActiveOutposts', default: '', type: 'text', description: 'Maximum number of active outposts on the map.', effect: 'Leaving blank disables the limit (Lost Colony).' },
        { name: 'MaxActiveResourceCaches', default: '', type: 'text', description: 'Maximum number of active resource caches on the map.', effect: 'Leaving blank disables the limit (Lost Colony).' },
        { name: 'MaxActiveCityOutposts', default: '', type: 'text', description: 'Maximum number of active city outposts on the map.', effect: 'Leaving blank disables the limit (Lost Colony).' },
    ],

    // Blueprint & Quality Caps
    'server-blueprints': [
        { name: 'MaxBlueprintDinoLevel', default: '300', type: 'integer', description: 'Caps Mek and Enforcer level when spawned.', effect: '> 0 enables cap to this value.' },
        { name: 'MaxBlueprintDinoQuality', default: '200', type: 'integer', description: 'Maximum quality for Mek and Enforcer blueprints.', effect: 'Caps the quality percentage for Mek/Enforcer blueprints.' },
        { name: 'MaxBlueprintItemQuality', default: '200', type: 'integer', description: 'Maximum quality for item blueprints.', effect: 'Caps the quality percentage for all item blueprints.' },
        { name: 'MaxBlueprintScoutQuality', default: '2000', type: 'integer', description: 'Maximum quality for Scout blueprints.', effect: 'Caps the quality percentage for Scout weapon blueprints.' },
    ],

    // Cryopod Settings
    'server-cryopod': [
        { name: 'DisableCryopodEnemyCheck', default: 'False', type: 'boolean', description: 'Allows cryopod use while enemies are nearby when True.', effect: 'True ignores enemy check; False enforces.' },
        { name: 'AllowCryoFridgeOnSaddle', default: 'False', type: 'boolean', description: 'Allows cryofridges on platform saddles and rafts.', effect: 'True allows; False blocks.' },
        { name: 'DisableCryopodFridgeRequirement', default: 'False', type: 'boolean', description: 'Allows releasing cryopods without powered cryofridge range.', effect: 'True removes requirement; False enforces.' },
        { name: 'CryopodFridgeCooldowntime', default: '90', type: 'integer', description: 'Defines a cooldown timer applied to a creature upon release from a cryopod near a cryofridge.', effect: 'Higher (e.g., 300) enforces longer wait before creature can be used; lower (e.g., 10) shortens it; 0 disables this cooldown.' },
        { name: 'EnableCryoSicknessPVE', default: 'False', type: 'boolean', description: 'Enables cryopod cooldown timer when deploying a creature (PvE).', effect: 'True enables cooldown; False disables.' },
        { name: 'CryopodNerfDamageMult', default: '0.0099999998', type: 'float', description: 'Reduces damage after cryopod deploy for duration set by CryopodNerfDuration.', effect: 'Higher reduces less; lower reduces more. Requires CryopodNerfDuration.' },
        { name: 'CryopodNerfDuration', default: '0.0', type: 'integer', description: 'Duration (seconds) cryosickness lasts after deploying from cryopod.', effect: 'Higher lasts longer; 0 disables.' },
        { name: 'CryopodNerfIncomingDamageMultPercent', default: '0.0', type: 'float', description: 'Increases incoming damage after cryopod deploy for CryopodNerfDuration.', effect: 'Higher increases damage taken more; lower less.' },
        { name: 'EnableCryopodNerf', default: 'False', type: 'boolean', description: 'Controls cryopod nerf penalties.', effect: 'Requires CryopodNerfDamageMult and CryopodNerfIncomingDamageMultPercent to be set.' },
    ],

    // Soft Tame Limit Settings
    'server-tamelimit': [
        { name: 'DestroyTamesOverTheSoftTameLimit', default: 'False', type: 'boolean', description: 'Dinos above the Soft Tame Limit will be marked For Cryo with a timer.', effect: 'If True, excess tames are marked for deletion. Use MaxTamedDinos_SoftTameLimit to define the limit.' },
        { name: 'MaxTamedDinos_SoftTameLimit', default: '5000', type: 'integer', description: 'Defines the server-wide soft tame limit.', effect: 'See DestroyTamesOverTheSoftTameLimit for more info.' },
        { name: 'MaxTamedDinos_SoftTameLimit_Countdown', default: '604800', type: 'integer', description: 'Defines time (in seconds) before tame auto-destruction.', effect: 'See DestroyTamesOverTheSoftTameLimit for more info. Default 604800 = 7 days.' },
    ],

    // Creature-Specific Settings
    'server-creatures': [
        { name: 'ArmadoggoDeathCooldown', default: '3600', type: 'float', description: 'Overrides cooldown for Armadoggo to reappear after taking fatal damage.', effect: 'Default is 1 hour (3600 seconds). Must be greater than 0.' },
        { name: 'YoungIceFoxDeathCooldown', default: '3600', type: 'float', description: 'Overrides cooldown for Veilwyn to reappear after taking fatal damage.', effect: 'Default is 1 hour (3600 seconds). Must be greater than 0.' },
        { name: 'ForceGachaUnhappyInCaves', default: 'True', type: 'boolean', description: 'Forces Gachas to become unhappy within caves.', effect: 'If True, Gachas will not produce resources when inside caves.' },
        { name: 'MaxCosmoWeaponAmmo', default: '-1', type: 'float', description: 'Sets maximum ammo for the Cosmo webslinger.', effect: 'Default -1 enables scaling with Cosmo level. Any other value sets a fixed max.' },
        { name: 'CosmoWeaponAmmoReloadAmount', default: '1', type: 'float', description: 'Determines how much ammo is given as the Cosmo webslinger reloads.', effect: 'Amount of ammo restored over time.' },
        { name: 'WorldBossKingKaijuSpawnTime', default: '19:00:00', type: 'string', description: 'Local time for King Titan spawn on Extinction.', effect: 'Sets the in-game time when King Titan spawns (HH:MM:SS format).' },

        { name: 'MaxTrainCars', default: '8', type: 'integer', description: 'Defines the maximum amount of carts a train can have.', effect: 'Limits how many carts can be attached to a single train.' },
    ],

    // Cosmetics & Mods
    'server-cosmetics': [
        { name: 'CosmeticWhitelistOverride', default: '', type: 'string', description: 'URL to a comma-separated list of whitelisted custom cosmetics.', effect: 'Changing URL changes which cosmetics are allowed.' },
        { name: 'ForceExploitedTameDeletion', default: 'True', type: 'boolean', description: 'Enables deletion of unintentional tamed creatures and prevents cryopod deployment.', effect: 'True enables; False disables.' },
        { name: 'AllowDeprecatedStructures', default: 'False', type: 'boolean', description: 'Allows keeping Halloween structures after event ends.', effect: 'True allows; False does not. Deprecated options (might still be effective in ASA).' },
    ],

    // PvP-Specific Settings
    'server-pvp-specific': [
        { name: 'AllowTeslaCoilCaveBuildingPVP', default: 'True', type: 'boolean', description: 'Overrides Tesla Coil placement within caves.', effect: 'If True, Tesla Coils can be placed inside caves on PvP servers.' },
        { name: 'IgnorePVPMountedWeaponryRestrictions', default: 'True', type: 'boolean', description: 'Disables mounted weapon equip restrictions on certain PvP mounts when True.', effect: 'True opts out of restriction. Applies to Rhyniognatha, Megalania, Rock Drake, Ravagers.' },
    ],

    // Environment & World
    'server-environment': [
        { name: 'DayCycleSpeedScale', default: '1.0', type: 'float', description: 'Scales overall day-night cycle speed.', effect: 'Lower slows cycle; higher speeds up.' },
        { name: 'DayTimeSpeedScale', default: '1.0', type: 'float', description: 'Scales day length relative to night.', effect: 'Lower makes days longer.' },
        { name: 'NightTimeSpeedScale', default: '1.0', type: 'float', description: 'Scales night time speed relative to day.', effect: 'Lower makes nights longer.' },
        { name: 'ExtinctionEventTimeInterval', default: '', type: 'text', description: 'Enables extinction mode (ARKpocalypse) with a time interval in seconds.', effect: 'Larger value means longer interval; 2592000 equals 30 days.' },
        { name: 'DisableWeatherFog', default: 'False', type: 'boolean', description: 'Disables fog.', effect: 'True disables fog; False enables.' },
        { name: 'ClampItemSpoilingTimes', default: 'False', type: 'boolean', description: 'Clamps spoiling times to item maximums.', effect: 'True clamps; False does not.' },
        { name: 'ClampItemStats', default: 'False', type: 'boolean', description: 'Enables item stat clamping (see ItemStatClamps).', effect: 'True clamps stats; False does not.' },
        { name: 'SpectatorPassword', default: '', type: 'text', description: 'Password for non-admin spectator mode.', effect: 'Changing password changes who can spectate.' },
        { name: 'PreventSpawnAnimations', default: 'False', type: 'boolean', description: 'Skips wake-up animation on spawn when True.', effect: 'True skips; False plays.' },
        { name: 'RandomSupplyCratePoints', default: 'False', type: 'boolean', description: 'Makes supply drops spawn in random locations.', effect: 'True randomizes; False normal. Known issue note for Ragnarok.' },
        { name: 'TributeItemExpirationSeconds', default: '86400', type: 'integer', description: 'Expiration timer for uploaded items (seconds).', effect: '0 or less reverts to default.' },
        { name: 'TributeDinoExpirationSeconds', default: '86400', type: 'integer', description: 'Expiration timer for uploaded tames (seconds).', effect: '0 or less reverts to default.' },
        { name: 'TributeCharacterExpirationSeconds', default: '0', type: 'integer', description: 'Expiration timer for uploaded survivors (seconds).', effect: 'Default 0 means no expiration.' },
        { name: 'MaxTributeCharacters', default: '10', type: 'integer', description: 'Slots for uploaded characters.', effect: 'Any value less than default will be reverted.' },
        { name: 'MaxTributeDinos', default: '20', type: 'integer', description: 'Slots for uploaded creatures.', effect: 'Any value less than default will be reverted.' },
        { name: 'MaxTributeItems', default: '50', type: 'integer', description: 'Slots for uploaded items and resources.', effect: 'Any value less than default will be reverted.' },
        { name: 'AdminLogging', default: 'False', type: 'boolean', description: 'Logs admin commands to in-game chat.', effect: 'True enables logging; False disables.' },
    ],
};

const gameIniSettings = {
    // Game Mode & Multipliers
    'game-general': [
        { name: 'AutoPvEStartTimeSeconds', default: '0.0', type: 'float', description: 'States when PvE mode should start in a PvPvE server.', effect: 'Valid values 0-86400. Requires bAutoPvETimer, bAutoPvEUseSystemTime, and AutoPvEStopTimeSeconds.' },
        { name: 'AutoPvEStopTimeSeconds', default: '0.0', type: 'float', description: 'States when PvE mode should end in a PvPvE server.', effect: 'Valid values 0-86400. Requires bAutoPvETimer, bAutoPvEUseSystemTime, and AutoPvEStartTimeSeconds.' },

        { name: 'bAllowSpeedLeveling', default: 'False', type: 'boolean', description: 'Allows players and non-flyers to level Movement Speed.', effect: 'If True, Movement Speed stat can be upgraded.' },
        { name: 'bAllowFlyerSpeedLeveling', default: 'False', type: 'boolean', description: 'Allows flyer creatures to level Movement Speed.', effect: 'In ASA, requires bAllowSpeedLeveling to also be True.' },
        { name: 'bAllowUnlimitedRespecs', default: 'False', type: 'boolean', description: 'Allows more than one Mindwipe Tonic use without 24h cooldown.', effect: 'If True, removes the cooldown between Mindwipe uses.' },
        { name: 'bAllowCustomRecipes', default: 'True', type: 'boolean', description: 'Enables or disables custom Recipe/Cooking System.', effect: 'If False, disables custom RP-oriented recipes (including Skill-Based results).' },
        { name: 'bAllowUnclaimDinos', default: 'True', type: 'boolean', description: 'Allows players to unclaim tame creatures.', effect: 'If False, prevents players from unclaiming tames.' },
        { name: 'bAutoPvETimer', default: 'False', type: 'boolean', description: 'Enables PvE mode in a PvPvE server at pre-specified times.', effect: 'bAutoPvEUseSystemTime determines time type. AutoPvEStartTimeSeconds/AutoPvEStopTimeSeconds set begin/end.' },
        { name: 'bAutoPvEUseSystemTime', default: 'False', type: 'boolean', description: 'PvE mode times refer to server system time instead of in-game world time.', effect: 'If True, relies on real-world server time. Requires bAutoPvETimer and start/stop times.' },
        { name: 'bAutoUnlockAllEngrams', default: 'False', type: 'boolean', description: 'Unlocks all Engrams available.', effect: 'If True, ignores OverrideEngramEntries and OverrideNamedEngramEntries.' },
        { name: 'bDisableDinoBreeding', default: 'False', type: 'boolean', description: 'Prevents tames from being bred.', effect: 'If True, tames cannot breed.' },
        { name: 'bDisableDinoRiding', default: 'False', type: 'boolean', description: 'Prevents players from riding tames.', effect: 'If True, players cannot ride tames.' },
        { name: 'bDisableDinoTaming', default: 'False', type: 'boolean', description: 'Prevents players from taming wild creatures.', effect: 'If True, players cannot tame creatures.' },
        { name: 'bDisableLootCrates', default: 'False', type: 'boolean', description: 'Prevents spawning of Loot Crates.', effect: 'If True, Loot Crates do not spawn (artifact crates still spawn).' },
        { name: 'bDisableFriendlyFire', default: 'False', type: 'boolean', description: 'Prevents Friendly-Fire among tribe mates/tames/structures.', effect: 'If True, tribe mates cannot damage each other.' },
        { name: 'bPvEDisableFriendlyFire', default: 'False', type: 'boolean', description: 'Disables Friendly-Fire among tribe mates/tames/structures in PvE servers.', effect: 'If True, tribe mates cannot damage each other in PvE.' },
        { name: 'bDisablePhotoMode', default: 'False', type: 'boolean', description: 'Defines if photo mode is allowed or not.', effect: 'If True, Photo Mode is disabled.' },
        { name: 'bDisableStructurePlacementCollision', default: 'False', type: 'boolean', description: 'Allows structures to clip into terrain.', effect: 'If True, structures can be placed inside terrain.' },
        { name: 'bIgnoreStructuresPreventionVolumes', default: 'False', type: 'boolean', description: 'Enables building where it is normally blocked (obelisks, portals, mission volumes).', effect: 'True allows building in those blocked areas; False keeps blocks. Genesis: Part 1 note.' },

        { name: 'bShowCreativeMode', default: 'False', type: 'boolean', description: 'Adds a button to the pause menu to enable/disable creative mode.', effect: 'If True, shows Creative Mode toggle in pause menu.' },
        { name: 'bUseCorpseLocator', default: 'True', type: 'boolean', description: 'Shows green light beam at dead body location.', effect: 'If False, prevents survivors from seeing the corpse locator beam.' },
        { name: 'bUseDinoLevelUpAnimations', default: 'True', type: 'boolean', description: 'Enables level-up animation for tame creatures.', effect: 'If False, tame creatures on level-up will not perform the related animation.' },
        { name: 'bUseSingleplayerSettings', default: 'False', type: 'boolean', description: 'All game settings will be balanced for individual player experience.', effect: 'If True, applies Single Player Settings (useful for small player counts).' },
        { name: 'bUseTameLimitForStructuresOnly', default: 'False', type: 'boolean', description: 'Makes Tame Units only apply to Platforms with Structures and Rafts.', effect: 'If True, effectively disables Tame Units for tames without Platform Structures.' },
        { name: 'bPvEAllowTribeWar', default: 'True', type: 'boolean', description: 'Allows Tribes to officially declare war on each other.', effect: 'If False, disables capability for mutually-agreed Tribe War.' },
        { name: 'bPvEAllowTribeWarCancel', default: 'False', type: 'boolean', description: 'Allows cancellation of agreed-upon war before it starts.', effect: 'If True, allows wars to be cancelled before starting.' },
        { name: 'bOnlyAllowSpecifiedEngrams', default: 'False', type: 'boolean', description: 'Engrams not in OverrideEngramEntries or OverrideNamedEngramEntries will be hidden.', effect: 'If True, items and blueprints based on hidden engrams will be removed.' },
        { name: 'bPassiveDefensesDamageRiderlessDinos', default: 'False', type: 'boolean', description: 'Allows spike walls to damage wild/riderless creatures.', effect: 'If True, passive defenses damage wild and riderless creatures.' },
        { name: 'bAllowPlatformSaddleMultiFloors', default: 'False', type: 'boolean', description: 'Allows multiple platform floors.', effect: 'If True, enables building multiple floors on platform saddles.' },
        { name: 'bFlyerPlatformAllowUnalignedDinoBasing', default: 'False', type: 'boolean', description: 'Quetz platforms allow any non-allied tame to base on them while flying.', effect: 'If True, non-allied creatures can stand on flying platforms.' },
        { name: 'bIncreasePvPRespawnInterval', default: 'True', type: 'boolean', description: 'Enables extra PvP respawn time scaling.', effect: 'False disables extra respawn scaling; True enables. Related: IncreasePvPRespawnIntervalBaseAmount, Multiplier, CheckPeriod.' },

        { name: 'CraftingSkillBonusMultiplier', default: '1.0', type: 'float', description: 'Scales the bonus received from upgrading the Crafting Skill.', effect: 'Higher values increase the quality boost from crafting skill.' },
        { name: 'CustomRecipeEffectivenessMultiplier', default: '1.0', type: 'float', description: 'Scales the effectiveness of custom recipes.', effect: 'Higher values increase (by percentage) their effectiveness.' },
        { name: 'CustomRecipeSkillMultiplier', default: '1.0', type: 'float', description: 'Scales effect of players crafting speed level used as base for custom recipe formula.', effect: 'Higher values increase (by percentage) the effect.' },

        { name: 'DestroyTamesOverLevelClamp', default: '0', type: 'integer', description: 'Tames exceeding this level will be deleted on server start.', effect: 'Official servers use 450. Value of 0 disables.' },

        { name: 'ConfigAddNPCSpawnEntriesContainer', default: '', type: 'text', description: 'Add creatures to spawn containers (advanced).', effect: 'Structured config entry for adding creatures. See wiki for format.', placeholder: 'Advanced: see wiki format' },
        { name: 'ConfigSubtractNPCSpawnEntriesContainer', default: '', type: 'text', description: 'Remove creatures from spawn containers (advanced).', effect: 'Structured config entry for removing creatures. See wiki for format.', placeholder: 'Advanced: see wiki format' },
        { name: 'ExcludeItemIndices', default: '', type: 'text', description: 'Exclude items from supply crates by index (advanced).', effect: 'Structured config entry for item exclusion. See wiki for format.', placeholder: 'Advanced: see wiki format' },
        { name: 'HarvestResourceItemAmountClassMultipliers', default: '', type: 'text', description: 'Scale harvest amounts for specific resources (advanced).', effect: 'Structured config entry for resource multipliers. See wiki for format.', placeholder: 'Advanced: see wiki format' },
        { name: 'OverrideNamedEngramEntries', default: '', type: 'text', description: 'Override engram visibility, level, or cost (advanced).', effect: 'Structured config entry for engram modifications. See wiki for format.', placeholder: 'Advanced: see wiki format' },
        { name: 'PassiveTameIntervalMultiplier', default: '1.0', type: 'float', description: 'Scales the interval between passive taming feedings.', effect: 'Higher values mean longer wait between feedings; lower values speed up passive taming.' },

        { name: 'HairGrowthSpeedMultiplier', default: '0', type: 'float', description: 'Scales hair growth speed.', effect: 'Higher values increase speed of growth. ASE default is 1.0, ASA default is 0.' },

        { name: 'PlayerHarvestingDamageMultiplier', default: '1.0', type: 'float', description: 'Scales player harvesting damage (harvest speed).', effect: 'Higher increases speed; lower decreases.' },
        { name: 'MaxFallSpeedMultiplier', default: '1.0', type: 'float', description: 'Defines falling speed multiplier at which players start taking fall damage.', effect: 'Higher values = longer falls without damage. Does not affect gravity scale.' },
        { name: 'ResourceNoReplenishRadiusPlayers', default: '1.0', type: 'float', description: 'Controls how close resources can regrow near players.', effect: 'Higher increases no-regrow distance; lower reduces.' },
        { name: 'ResourceNoReplenishRadiusStructures', default: '1.0', type: 'float', description: 'Controls how close resources can regrow near structures.', effect: 'Higher increases no-regrow distance; lower reduces.' },

        { name: 'MaxTribeLogs', default: '400', type: 'integer', description: 'Maximum number of entries in the tribe log.', effect: 'Default is 400. Higher values allow more log history.' },
        { name: 'MaxNumberOfPlayersInTribe', default: '0', type: 'integer', description: 'Sets max survivors allowed in a tribe.', effect: '1 disables tribes; 0 means no limit.' },
        { name: 'TribeSlotReuseCooldown', default: '0.0', type: 'float', description: 'Locks a tribe slot for specified seconds.', effect: 'E.g., 3600 = if a survivor leaves, their slot cannot be taken or rejoined for 1 hour. Official Small Tribes use this.' },

        { name: 'DinoHarvestingDamageMultiplier', default: '3.2', type: 'float', description: 'Scales tame damage vs harvestables (harvest speed).', effect: 'Higher increases harvesting speed; lower decreases.' },
        { name: 'DinoTurretDamageMultiplier', default: '1.0', type: 'float', description: 'Scales damage done by Turrets towards a creature.', effect: 'Higher values increase (by percentage) turret damage to dinos.' },
        { name: 'TamedDinoCharacterFoodDrainMultiplier', default: '1.0', type: 'float', description: 'Scales how fast tame creatures consume food.', effect: 'Higher values increase food consumption.' },
        { name: 'TamedDinoTorporDrainMultiplier', default: '1.0', type: 'float', description: 'Scales how fast tamed creatures lose torpor.', effect: 'Higher values make torpor drop faster.' },
        { name: 'WildDinoCharacterFoodDrainMultiplier', default: '1.0', type: 'float', description: 'Scales how fast wild creatures consume food.', effect: 'Higher values increase food consumption.' },
        { name: 'WildDinoTorporDrainMultiplier', default: '1.0', type: 'float', description: 'Scales how fast wild creatures lose torpor.', effect: 'Higher values make torpor drop faster.' },

        { name: 'SupplyCrateLootQualityMultiplier', default: '1.0', type: 'float', description: 'Increases quality of items in supply crates.', effect: 'Valid values 1.0-5.0. Quality also depends on Difficulty Offset.' },
        { name: 'FishingLootQualityMultiplier', default: '1.0', type: 'float', description: 'Sets quality of items that have quality when fishing.', effect: 'Valid values 1.0-5.0.' },

        { name: 'UseCorpseLifeSpanMultiplier', default: '1.0', type: 'float', description: 'Modifies corpse and dropped box lifespan.', effect: 'Higher values make them last longer.' },
        { name: 'StructureDamageRepairCooldown', default: '180', type: 'integer', description: 'Cooldown period on structure repair from the last time damaged.', effect: 'Set to 180 seconds by default, 0 to disable.' },
        { name: 'PvPZoneStructureDamageMultiplier', default: '6.0', type: 'float', description: 'Scales structure damage taken within caves.', effect: 'Lower means less damage; higher means more.' },
        { name: 'PreventOfflinePvPConnectionInvincibleInterval', default: '5.0', type: 'float', description: 'Time in seconds a player cannot take damage after logging in.', effect: 'Provides brief invincibility on connection.' },
        { name: 'FastDecayInterval', default: '43200', type: 'integer', description: 'Specifies decay period for Fast Decay structures (pillars, lone foundations).', effect: 'Value in seconds. FastDecayUnsnappedCoreStructures must be True.' },
        { name: 'IncreasePvPRespawnIntervalBaseAmount', default: '60.0', type: 'float', description: 'Sets additional PvP respawn time in seconds.', effect: 'Scales with IncreasePvPRespawnIntervalMultiplier when killed by a team within IncreasePvPRespawnIntervalCheckPeriod.' },
        { name: 'IncreasePvPRespawnIntervalCheckPeriod', default: '300.0', type: 'float', description: 'Amount of time in seconds within which a player respawn time increases.', effect: 'Used with IncreasePvPRespawnIntervalBaseAmount and IncreasePvPRespawnIntervalMultiplier.' },
        { name: 'IncreasePvPRespawnIntervalMultiplier', default: '2.0', type: 'float', description: 'Multiplies the additional respawn penalty.', effect: 'Scales with IncreasePvPRespawnIntervalBaseAmount when killed by a team within IncreasePvPRespawnIntervalCheckPeriod.' },
        { name: 'GlobalPoweredBatteryDurabilityDecreasePerSecond', default: '3.0', type: 'float', description: 'Rate of charge battery usage per second.', effect: 'Higher values drain batteries faster.' },
        { name: 'FuelConsumptionIntervalMultiplier', default: '1.0', type: 'float', description: 'Scales the time between fuel consumption ticks.', effect: 'Higher values make fuel last longer.' },
        { name: 'BaseTemperatureMultiplier', default: '1.0', type: 'float', description: 'Scales the base temperature of the map.', effect: 'Lower values make the map colder; higher values make it hotter.' },

        // Turret & Generator Limits (Game.ini per reference)
        { name: 'bLimitTurretsInRange', default: 'True', type: 'boolean', description: 'Enables/Disables the turret limit in a specific range.', effect: 'If False, removes the turret limit radius check.' },
        { name: 'bHardLimitTurretsInRange', default: 'False', type: 'boolean', description: 'Enables retroactive turret hard limit (100 turrets within 10k unit radius).', effect: 'If True, turrets placed over this limit are subject to the retroactive removal behavior.' },
        { name: 'LimitTurretsNum', default: '100', type: 'integer', description: 'Max turrets allowed in the defined area.', effect: 'Higher allows more; lower allows fewer. Includes Plant Species X.' },
        { name: 'LimitTurretsRange', default: '10000.0', type: 'float', description: 'Sets the range for the turret limit check.', effect: 'Used with LimitTurretsNum. Default is 10000 units.' },
        { name: 'LimitGeneratorsNum', default: '3', type: 'integer', description: 'Sets the limit of generators in a specified range.', effect: 'Used with LimitGeneratorsRange. Default is 3.' },
        { name: 'LimitGeneratorsRange', default: '15000', type: 'integer', description: 'Sets the range for the generator limit check.', effect: 'Used with LimitGeneratorsNum. Default is 15000 units.' },
        { name: 'LimitNonPlayerDroppedItemsCount', default: '0', type: 'integer', description: 'Limits the number of dropped items in a range.', effect: 'Used with LimitNonPlayerDroppedItemsRange. 0 = disabled.' },
        { name: 'LimitNonPlayerDroppedItemsRange', default: '0', type: 'integer', description: 'Sets the range for the dropped item limit check.', effect: 'Used with LimitNonPlayerDroppedItemsCount. 0 = disabled.' },

        // Hexagon Settings (Game.ini per reference)
        { name: 'BaseHexagonRewardMultiplier', default: '1.0', type: 'float', description: 'Scales mission score hexagon rewards and Club Ark token rewards (ASA).', effect: 'Higher values grant more Hexagons/Club Ark Tokens.' },
        { name: 'HexagonCostMultiplier', default: '1.0', type: 'float', description: 'Scales Hexagon store costs and Club Ark token costs (ASA).', effect: 'Higher values increase costs.' },

        // Genesis Settings (Game.ini per reference)
        { name: 'bDisableGenesisMissions', default: 'False', type: 'boolean', description: 'Disables Genesis missions.', effect: 'If True, missions are unavailable on Genesis maps.' },
        { name: 'bDisableHexagonStore', default: 'False', type: 'boolean', description: 'Disables the Hexagon/Club Ark store.', effect: 'If True, the store cannot be accessed.' },
        { name: 'bGenesisUseStructuresPreventionVolumes', default: 'False', type: 'boolean', description: 'Controls building restrictions in Genesis Part 1 mission areas.', effect: 'If True, disables building in mission areas.' },
        { name: 'bHexStoreAllowOnlyEngramTradeOption', default: 'False', type: 'boolean', description: 'Restricts Hexagon store to Engrams only.', effect: 'If True, only Engrams can be traded.' },
        { name: 'bDisableDefaultMapItemSets', default: 'False', type: 'boolean', description: 'Disables default spawn items (e.g., Tek Suit on Gen 2).', effect: 'If True, players do not spawn with map-specific default items.' },
        { name: 'bDisableWorldBuffs', default: 'False', type: 'boolean', description: 'Disables world effects from Genesis Part 2 missions.', effect: 'If True, mission world buffs are disabled.' },
        { name: 'bEnableWorldBuffScaling', default: 'False', type: 'boolean', description: 'Enables scaling of Genesis Part 2 mission world effects.', effect: 'If True, buffs scale based on WorldBuffScalingEfficacy.' },
        { name: 'WorldBuffScalingEfficacy', default: '1.0', type: 'float', description: 'Sets how effective mission world buff scaling is.', effect: '0.5 is 50% less; 100 is 100x more.' },

        // Mutagen Settings
        { name: 'AdjustableMutagenSpawnDelayMultiplier', default: '1.0', type: 'float', description: 'Scales Mutagen spawn delay.', effect: 'Higher increases respawn interval; lower decreases. Map-specific: Genesis.' },

        // Tribe Log Settings
        { name: 'TribeLogDestroyedEnemyStructures', default: 'False', type: 'boolean', description: 'Logs enemy structure destruction in tribe logs.', effect: 'If True, logs when tribe members destroy enemy structures.' },

        // Teleport Locations (Advanced)
        { name: 'CheatTeleportLocations', default: '', type: 'text', description: 'Defines custom named teleport locations for admins.', effect: 'Adds locations for the cheat TP <Name> command.', placeholder: '(TeleportName="Name",TeleportLocation=(X=0,Y=0,Z=0))' },
    ],

    // Breeding Settings
    'game-breeding': [
        { name: 'MatingIntervalMultiplier', default: '1.0', type: 'float', description: 'Scales time between mating attempts.', effect: 'Lower decreases interval; higher increases.' },
        { name: 'MatingSpeedMultiplier', default: '1.0', type: 'float', description: 'Scales how fast mating completes.', effect: 'Higher increases speed; lower decreases.' },
        { name: 'EggHatchSpeedMultiplier', default: '1.0', type: 'float', description: 'Scales time for fertilized eggs to hatch.', effect: 'Higher decreases hatch time; lower increases.' },
        { name: 'LayEggIntervalMultiplier', default: '1.0', type: 'float', description: 'Controls how often female dinosaurs lay eggs.', effect: 'Lower (e.g., 0.5) makes them lay eggs more frequently; higher (e.g., 2.0) makes it take longer.' },
        { name: 'CropGrowthSpeedMultiplier', default: '1.0', type: 'float', description: 'Scales crop growth speed in plots.', effect: 'Higher increases growth speed.' },
        { name: 'CropDecaySpeedMultiplier', default: '1.0', type: 'float', description: 'Scales the rate at which crops grow and decay.', effect: 'Higher speeds up crop growth and decay; lower slows it down, giving you more time.' },
        { name: 'PoopIntervalMultiplier', default: '1.0', type: 'float', description: 'Determines how often dinos and players produce feces.', effect: 'Lower (e.g., 0.5) means more frequent pooping; higher (e.g., 2.0) means less frequent.' },
        { name: 'BabyMatureSpeedMultiplier', default: '1.0', type: 'float', description: 'Scales baby maturation speed.', effect: 'Higher reduces time to grow; lower increases time.' },
        { name: 'BabyFoodConsumptionSpeedMultiplier', default: '1.0', type: 'float', description: 'Scales how fast baby tames eat.', effect: 'Lower decreases food eaten; higher increases.' },
        { name: 'BabyCuddleIntervalMultiplier', default: '1.0', type: 'float', source: 'wiki', description: 'Adjusts the time between required imprinting actions (cuddles, feeding, etc.) for baby dinos.', effect: 'Lower (e.g., 0.1) shortens the interval, requiring more frequent cuddles but potentially allowing faster imprinting; higher (e.g., 2.0) lengthens it, making cuddles less frequent.' },
        { name: 'BabyCuddleGracePeriodMultiplier', default: '1.0', type: 'float', description: 'Scales how long you can delay a cuddle before imprint quality starts dropping.', effect: 'Higher gives more grace time; lower gives less.' },
        { name: 'BabyCuddleLoseImprintQualitySpeedMultiplier', default: '1.0', type: 'float', description: 'Scales how fast imprint quality drops after the grace period.', effect: 'Higher drops faster; lower drops slower.' },
        { name: 'BabyImprintingStatScaleMultiplier', default: '1.0', type: 'float', description: 'Scales how much imprint quality affects stats.', effect: '0 disables the system; higher increases stat impact.' },
        { name: 'BabyImprintAmountMultiplier', default: '1.0', type: 'float', description: 'Scales how much imprint % you gain per care action.', effect: 'Higher gives more % per care; lower gives less.' },
        { name: 'MutagenLevelBoost', default: '', type: 'integer', description: 'Sets how many levels Mutagen adds to tames with wild ancestry.', effect: 'Higher adds more levels; lower adds fewer. Map-specific: Genesis.' },
        { name: 'MutagenLevelBoost_Bred', default: '', type: 'integer', description: 'Sets how many levels Mutagen adds to bred tames.', effect: 'Higher adds more levels; lower adds fewer. Map-specific: Genesis.' },
    ],

    // Spoiling & Decomposition
    'game-spoiling': [
        { name: 'GlobalSpoilingTimeMultiplier', default: '1.0', type: 'float', description: 'Scales spoiling time of perishables globally.', effect: 'Higher prolongs time; lower shortens.' },
        { name: 'GlobalItemDecompositionTimeMultiplier', default: '1.0', type: 'float', description: 'Scales decay time of dropped items and loot bags.', effect: 'Higher prolongs time; lower shortens.' },
        { name: 'GlobalCorpseDecompositionTimeMultiplier', default: '1.0', type: 'float', description: 'Scales corpse decay time globally.', effect: 'Higher prolongs time; lower shortens.' },
    ],

    // Tribe Tower Settings (Lost Colony)
    'game-tower': [
        { name: 'TribeTowerBonusMultiplier', default: '2.0', type: 'float', description: 'Scales the buff provided by Tribe Towers.', effect: 'Higher values increase the strength of Tribe Tower bonuses (Lost Colony feature).' },
    ],

    // World & Camera Settings
    'game-world': [
        { name: 'PhotoModeRangeLimit', default: '3000', type: 'integer', description: 'Maximum distance for photo mode camera.', effect: 'Limits how far the camera can travel from the player in photo mode.' },
    ],



    // Memorial & Valguero Settings
    'game-memorial': [
        { name: 'ValgueroMemorialEntries', default: '', type: 'string', description: 'Names displayed on the Valguero Memorial.', effect: 'Adds custom names to the interactive memorial on Valguero. Separate names with semicolons.', placeholder: 'Enter names separated by ;' },
    ],

    // Stats Multipliers
    'game-stats': [
        { name: 'PerLevelStatsMultiplier_Player[0]', default: '1.0', type: 'float', description: 'Player Health per level.', effect: 'Higher values give more health per level up.' },
        { name: 'PerLevelStatsMultiplier_Player[1]', default: '1.0', type: 'float', description: 'Player Stamina per level.', effect: 'Higher values give more stamina per level up.' },
        { name: 'PerLevelStatsMultiplier_Player[2]', default: '1.0', type: 'float', description: 'Player Torpidity per level.', effect: 'Higher values give more torpidity per level up.' },
        { name: 'PerLevelStatsMultiplier_Player[3]', default: '1.0', type: 'float', description: 'Player Oxygen per level.', effect: 'Higher values give more oxygen per level up.' },
        { name: 'PerLevelStatsMultiplier_Player[4]', default: '1.0', type: 'float', description: 'Player Food per level.', effect: 'Higher values give more food capacity per level up.' },
        { name: 'PerLevelStatsMultiplier_Player[5]', default: '1.0', type: 'float', description: 'Player Water per level.', effect: 'Higher values give more water capacity per level up.' },
        { name: 'PerLevelStatsMultiplier_Player[6]', default: '1.0', type: 'float', description: 'Player Temperature per level.', effect: 'Higher values give more temperature resistance per level up.' },
        { name: 'PerLevelStatsMultiplier_Player[7]', default: '1.0', type: 'float', description: 'Player Weight per level.', effect: 'Higher values give more carry weight per level up.' },
        { name: 'PerLevelStatsMultiplier_Player[8]', default: '1.0', type: 'float', description: 'Player Melee Damage per level.', effect: 'Higher values give more melee damage per level up.' },
        { name: 'PerLevelStatsMultiplier_Player[9]', default: '1.0', type: 'float', description: 'Player Movement Speed per level.', effect: 'Higher values give more speed per level up.' },
        { name: 'PerLevelStatsMultiplier_Player[10]', default: '1.0', type: 'float', description: 'Player Fortitude per level.', effect: 'Higher values give more fortitude per level up.' },
        { name: 'PerLevelStatsMultiplier_Player[11]', default: '1.0', type: 'float', description: 'Player Crafting Speed per level.', effect: 'Higher values give more crafting speed per level up.' },
        { name: 'PerLevelStatsMultiplier_DinoTamed[0]', default: '0.2', type: 'float', description: 'Tamed Dino Health per level.', effect: 'Higher values give tamed dinos more health per level up.' },
        { name: 'PerLevelStatsMultiplier_DinoTamed[1]', default: '1.0', type: 'float', description: 'Tamed Dino Stamina per level.', effect: 'Higher values give tamed dinos more stamina per level up.' },
        { name: 'PerLevelStatsMultiplier_DinoTamed[2]', default: '1.0', type: 'float', description: 'Tamed Dino Torpidity per level.', effect: 'Higher values give tamed dinos more torpidity per level up.' },
        { name: 'PerLevelStatsMultiplier_DinoTamed[3]', default: '1.0', type: 'float', description: 'Tamed Dino Oxygen per level.', effect: 'Higher values give tamed dinos more oxygen per level up.' },
        { name: 'PerLevelStatsMultiplier_DinoTamed[4]', default: '1.0', type: 'float', description: 'Tamed Dino Food per level.', effect: 'Higher values give tamed dinos more food capacity per level up.' },
        { name: 'PerLevelStatsMultiplier_DinoTamed[7]', default: '1.0', type: 'float', description: 'Tamed Dino Weight per level.', effect: 'Higher values give tamed dinos more carry weight per level up.' },
        { name: 'PerLevelStatsMultiplier_DinoTamed[8]', default: '0.17', type: 'float', description: 'Tamed Dino Melee per level.', effect: 'Higher values give tamed dinos more melee damage per level up.' },
        { name: 'PerLevelStatsMultiplier_DinoTamed[9]', default: '1.0', type: 'float', description: 'Tamed Dino Speed per level.', effect: 'Higher values give tamed dinos more speed per level up.' },
        { name: 'PerLevelStatsMultiplier_DinoTamed_Add[0]', default: '0.14', type: 'float', description: 'Tamed Dino Health add-on.', effect: 'Higher values add more base health when dino is tamed.' },
        { name: 'PerLevelStatsMultiplier_DinoTamed_Add[1]', default: '1.0', type: 'float', description: 'Tamed Dino Stamina add-on.', effect: 'Higher values add more base stamina when dino is tamed.' },
        { name: 'PerLevelStatsMultiplier_DinoTamed_Add[2]', default: '1.0', type: 'float', description: 'Tamed Dino Torpidity add-on.', effect: 'Higher values add more base torpidity when dino is tamed.' },
        { name: 'PerLevelStatsMultiplier_DinoTamed_Add[3]', default: '1.0', type: 'float', description: 'Tamed Dino Oxygen add-on.', effect: 'Higher values add more base oxygen when dino is tamed.' },
        { name: 'PerLevelStatsMultiplier_DinoTamed_Add[4]', default: '1.0', type: 'float', description: 'Tamed Dino Food add-on.', effect: 'Higher values add more base food when dino is tamed.' },
        { name: 'PerLevelStatsMultiplier_DinoTamed_Add[7]', default: '1.0', type: 'float', description: 'Tamed Dino Weight add-on.', effect: 'Higher values add more base weight when dino is tamed.' },
        { name: 'PerLevelStatsMultiplier_DinoTamed_Add[8]', default: '0.14', type: 'float', description: 'Tamed Dino Melee add-on.', effect: 'Higher values add more base melee when dino is tamed.' },
        { name: 'PerLevelStatsMultiplier_DinoTamed_Add[9]', default: '1.0', type: 'float', description: 'Tamed Dino Speed add-on.', effect: 'Higher values add more base speed when dino is tamed.' },
        { name: 'PerLevelStatsMultiplier_DinoTamed_Affinity[0]', default: '0.44', type: 'float', description: 'Tamed Dino Health taming bonus.', effect: 'Higher values give more health bonus from taming effectiveness.' },
        { name: 'PerLevelStatsMultiplier_DinoTamed_Affinity[1]', default: '1.0', type: 'float', description: 'Tamed Dino Stamina taming bonus.', effect: 'Higher values give more stamina bonus from taming effectiveness.' },
        { name: 'PerLevelStatsMultiplier_DinoTamed_Affinity[2]', default: '1.0', type: 'float', description: 'Tamed Dino Torpidity taming bonus.', effect: 'Higher values give more torpidity bonus from taming effectiveness.' },
        { name: 'PerLevelStatsMultiplier_DinoTamed_Affinity[3]', default: '1.0', type: 'float', description: 'Tamed Dino Oxygen taming bonus.', effect: 'Higher values give more oxygen bonus from taming effectiveness.' },
        { name: 'PerLevelStatsMultiplier_DinoTamed_Affinity[4]', default: '1.0', type: 'float', description: 'Tamed Dino Food taming bonus.', effect: 'Higher values give more food bonus from taming effectiveness.' },
        { name: 'PerLevelStatsMultiplier_DinoTamed_Affinity[7]', default: '1.0', type: 'float', description: 'Tamed Dino Weight taming bonus.', effect: 'Higher values give more weight bonus from taming effectiveness.' },
        { name: 'PerLevelStatsMultiplier_DinoTamed_Affinity[8]', default: '0.44', type: 'float', description: 'Tamed Dino Melee taming bonus.', effect: 'Higher values give more melee bonus from taming effectiveness.' },
        { name: 'PerLevelStatsMultiplier_DinoTamed_Affinity[9]', default: '1.0', type: 'float', description: 'Tamed Dino Speed taming bonus.', effect: 'Higher values give more speed bonus from taming effectiveness.' },
        { name: 'PerLevelStatsMultiplier_DinoWild[0]', default: '1.0', type: 'float', description: 'Wild Dino Health per level.', effect: 'Higher values give wild dinos more health per level.' },
        { name: 'PerLevelStatsMultiplier_DinoWild[1]', default: '1.0', type: 'float', description: 'Wild Dino Stamina per level.', effect: 'Higher values give wild dinos more stamina per level.' },
        { name: 'PerLevelStatsMultiplier_DinoWild[2]', default: '1.0', type: 'float', description: 'Wild Dino Torpidity per level.', effect: 'Higher values give wild dinos more torpidity per level.' },
        { name: 'PerLevelStatsMultiplier_DinoWild[3]', default: '1.0', type: 'float', description: 'Wild Dino Oxygen per level.', effect: 'Higher values give wild dinos more oxygen per level.' },
        { name: 'PerLevelStatsMultiplier_DinoWild[4]', default: '1.0', type: 'float', description: 'Wild Dino Food per level.', effect: 'Higher values give wild dinos more food per level.' },
        { name: 'PerLevelStatsMultiplier_DinoWild[7]', default: '1.0', type: 'float', description: 'Wild Dino Weight per level.', effect: 'Higher values give wild dinos more weight per level.' },
        { name: 'PerLevelStatsMultiplier_DinoWild[8]', default: '1.0', type: 'float', description: 'Wild Dino Melee per level.', effect: 'Higher values give wild dinos more melee damage per level.' },
        { name: 'PerLevelStatsMultiplier_DinoWild[9]', default: '1.0', type: 'float', description: 'Wild Dino Speed per level.', effect: 'Higher values give wild dinos more movement speed per level.' },
    ],

    // XP & Leveling
    'game-xp': [
        { name: 'KillXPMultiplier', default: '1.0', type: 'float', description: 'Scales kill XP.', effect: 'Higher values increase XP gained from kills.' },
        { name: 'HarvestXPMultiplier', default: '1.0', type: 'float', description: 'Scales harvest XP.', effect: 'Higher values increase XP gained from harvesting.' },
        { name: 'CraftXPMultiplier', default: '1.0', type: 'float', description: 'Scales crafting XP.', effect: 'Higher values increase XP gained from crafting.' },
        { name: 'GenericXPMultiplier', default: '1.0', type: 'float', description: 'Scales generic XP.', effect: 'Higher values increase passive/generic XP gains.' },
        { name: 'SpecialXPMultiplier', default: '1.0', type: 'float', description: 'Scales special XP.', effect: 'Higher values increase special action XP.' },
    ],

};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { gameUserSettings, gameIniSettings };
}
