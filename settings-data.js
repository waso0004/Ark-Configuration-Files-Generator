// ARK: Survival Ascended Server Settings Data
// Only includes ASA-supported settings with their default values

const gameUserSettings = {
    // General Server Settings
    'server-general': [
        { name: 'SessionName', default: 'My ARK Server', type: 'text', section: 'SessionSettings', description: 'The name of your server as it appears in the server browser.', effect: 'This is what players see when browsing for servers to join.' },
        { name: 'ServerPassword', default: '', type: 'text', description: 'Password required for players to join the server.', effect: 'When set, players must enter this password to connect to your server.' },
        { name: 'ServerAdminPassword', default: '', type: 'text', description: 'Password for server administration and RCON access.', effect: 'Required for using admin commands and RCON connections. Use a strong password.' },
        { name: 'RCONEnabled', default: 'False', type: 'boolean', description: 'Enable Remote Console (RCON) for remote server management.', effect: 'When enabled, allows remote administration of the server via RCON protocol.' },
        { name: 'RCONPort', default: '27020', type: 'integer', description: 'Port used for RCON connections.', effect: 'Change this if port 27020 is already in use or blocked by firewall.' },
        { name: 'MaxPlayers', default: '70', type: 'integer', section: '/Script/Engine.GameSession', description: 'Maximum number of players allowed on the server.', effect: 'Higher values allow more players but increase server resource usage.' },
        { name: 'MessageOfTheDay', default: 'Welcome to the server!', type: 'text', section: 'MessageOfTheDay', sectionKey: 'Message', description: 'Message displayed to players when they join.', effect: 'Players see this message when connecting to the server.' },
        { name: 'MessageDuration', default: '20', type: 'integer', section: 'MessageOfTheDay', sectionKey: 'Duration', description: 'How long the MOTD is displayed in seconds.', effect: 'Higher values keep the welcome message on screen longer.' },
        { name: 'MapPlayerLocation', default: 'False', type: 'boolean', description: 'Show player location on the map.', effect: 'When enabled, players can see their exact position on the in-game map.' },
        { name: 'AllowThirdPersonPlayer', default: 'True', type: 'boolean', description: 'Allow players to use third-person view.', effect: 'When disabled, players are locked to first-person view only.' },
        { name: 'ServerCrosshair', default: 'True', type: 'boolean', description: 'Enable crosshair for all players.', effect: 'When disabled, removes the crosshair for a more immersive experience.' },
        { name: 'ServerHardcore', default: 'False', type: 'boolean', description: 'Enable hardcore mode (permanent death).', effect: 'When enabled, player characters revert to level 1 upon death.' },
        { name: 'globalVoiceChat', default: 'False', type: 'boolean', description: 'Enable global voice chat for all players.', effect: 'When enabled, voice chat is heard server-wide instead of proximity-based.' },
        { name: 'proximityChat', default: 'False', type: 'boolean', description: 'Enable proximity-based voice chat.', effect: 'When enabled, voice chat only works within a certain distance of other players.' },
        { name: 'NoTributeDownloads', default: 'False', type: 'boolean', description: 'Disable downloading characters/dinos from other servers.', effect: 'When enabled, prevents players from transferring in characters, dinos, or items.' },
        { name: 'AllowAnyoneBabyImprintCuddle', default: 'False', type: 'boolean', description: 'Allow any player to imprint on baby dinos.', effect: 'When enabled, any tribe member can perform imprinting, not just the breeder.' },
        { name: 'EnableExtraStructurePreventionVolumes', default: 'False', type: 'boolean', description: 'Enable additional no-build zones.', effect: 'When enabled, adds extra areas where building is restricted.' },
        { name: 'ShowFloatingDamageText', default: 'False', type: 'boolean', description: 'Show floating damage numbers.', effect: 'When enabled, displays RPG-style popup numbers showing damage dealt.' },
        { name: 'ShowMapPlayerLocation', default: 'False', type: 'boolean', description: 'Show player location on the in-game map.', effect: 'When enabled, players can see their position marker on the map.' },
        { name: 'AlwaysNotifyPlayerJoined', default: 'False', type: 'boolean', description: 'Notify all players when someone joins.', effect: 'When enabled, a message is broadcast when any player connects.' },
        { name: 'AlwaysNotifyPlayerLeft', default: 'False', type: 'boolean', description: 'Notify all players when someone leaves.', effect: 'When enabled, a message is broadcast when any player disconnects.' },
        { name: 'AutoSavePeriodMinutes', default: '15.0', type: 'float', description: 'Time in minutes between automatic saves.', effect: 'Lower values mean more frequent saves but may cause brief lag spikes.' },
        { name: 'KickIdlePlayersPeriod', default: '3600', type: 'integer', description: 'Time in seconds before idle players are kicked.', effect: 'Set to 0 to disable. Lower values free up slots faster from AFK players.' },
    ],

    // Rates & Multipliers
    'server-rates': [
        { name: 'DifficultyOffset', default: '1.0', type: 'float', description: 'Server difficulty setting (0.0-1.0).', effect: 'Higher values increase wild dino max level. Set to 1.0 for level 150 max.' },
        { name: 'OverrideOfficialDifficulty', default: '5.0', type: 'float', description: 'Override max wild dino level cap.', effect: '5.0 = level 150 max, 6.0 = level 180, 10.0 = level 300.' },
        { name: 'XPMultiplier', default: '1.0', type: 'float', description: 'Multiplier for experience points gained.', effect: 'Higher values mean faster leveling for players and dinos.' },
        { name: 'TamingSpeedMultiplier', default: '1.0', type: 'float', description: 'Multiplier for taming speed.', effect: 'Higher values mean faster taming. 2.0 = twice as fast.' },
        { name: 'HarvestAmountMultiplier', default: '1.0', type: 'float', description: 'Multiplier for resource harvest amounts.', effect: 'Higher values mean more resources per harvest action.' },
        { name: 'HarvestHealthMultiplier', default: '1.0', type: 'float', description: 'Multiplier for resource node health.', effect: 'Higher values mean resource nodes take more hits to deplete.' },
        { name: 'ResourcesRespawnPeriodMultiplier', default: '1.0', type: 'float', description: 'Multiplier for resource respawn time.', effect: 'Lower values mean faster resource respawning.' },
        { name: 'ResourceNoReplenishRadiusPlayers', default: '1.0', type: 'float', description: 'Radius around players where resources won\'t respawn.', effect: 'Lower values allow resources to spawn closer to players.' },
        { name: 'ResourceNoReplenishRadiusStructures', default: '1.0', type: 'float', description: 'Radius around structures where resources won\'t respawn.', effect: 'Lower values allow resources to spawn closer to bases.' },
        { name: 'ClampResourceHarvestDamage', default: 'False', type: 'boolean', description: 'Clamp maximum harvest damage.', effect: 'When enabled, prevents excessive resource yields from high-damage harvesting.' },
        { name: 'SupplyCrateLootQualityMultiplier', default: '1.0', type: 'float', description: 'Multiplier for supply drop loot quality.', effect: 'Higher values mean better quality items in supply drops.' },
        { name: 'FishingLootQualityMultiplier', default: '1.0', type: 'float', description: 'Multiplier for fishing loot quality.', effect: 'Higher values mean better quality items from fishing.' },
        { name: 'CraftingSkillBonusMultiplier', default: '1.0', type: 'float', description: 'Multiplier for crafting skill bonus.', effect: 'Higher values increase the effectiveness of the crafting skill stat.' },
        { name: 'ItemStackSizeMultiplier', default: '1.0', type: 'float', description: 'Multiplier for item stack sizes.', effect: 'Higher values allow more items per stack, reducing inventory clutter.' },
        { name: 'HexagonRewardMultiplier', default: '1.0', type: 'float', description: 'Multiplier for Hexagon rewards.', effect: 'Higher values mean more Hexagons earned from Genesis missions.' },
    ],

    // Player Settings
    'server-player': [
        { name: 'PlayerDamageMultiplier', default: '1.0', type: 'float', description: 'Multiplier for player damage dealt.', effect: 'Higher values mean players deal more damage with attacks.' },
        { name: 'PlayerResistanceMultiplier', default: '1.0', type: 'float', description: 'Multiplier for player damage resistance.', effect: 'Lower values mean players take less damage (more resistant).' },
        { name: 'PlayerCharacterFoodDrainMultiplier', default: '1.0', type: 'float', description: 'Multiplier for player food consumption rate.', effect: 'Lower values mean players get hungry slower.' },
        { name: 'PlayerCharacterWaterDrainMultiplier', default: '1.0', type: 'float', description: 'Multiplier for player water consumption rate.', effect: 'Lower values mean players get thirsty slower.' },
        { name: 'PlayerCharacterStaminaDrainMultiplier', default: '1.0', type: 'float', description: 'Multiplier for player stamina drain rate.', effect: 'Lower values mean stamina drains slower during activities.' },
        { name: 'PlayerCharacterHealthRecoveryMultiplier', default: '1.0', type: 'float', description: 'Multiplier for player health regeneration.', effect: 'Higher values mean faster natural health recovery.' },
        { name: 'PlayerHarvestingDamageMultiplier', default: '1.0', type: 'float', description: 'Multiplier for player harvesting damage.', effect: 'Higher values mean players gather more resources per hit.' },
        { name: 'MaxFallSpeedMultiplier', default: '1.0', type: 'float', description: 'Multiplier for max fall speed.', effect: 'Higher values increase fall damage; lower values reduce it.' },
        { name: 'OxygenSwimSpeedStatMultiplier', default: '1.0', type: 'float', description: 'Multiplier for oxygen stat swim speed bonus.', effect: 'Higher values make the oxygen stat more effective for swim speed.' },
        { name: 'PreventDiseases', default: 'False', type: 'boolean', description: 'Disable diseases completely.', effect: 'When enabled, players cannot contract diseases like Swamp Fever.' },
        { name: 'NonPermanentDiseases', default: 'False', type: 'boolean', description: 'Make diseases curable.', effect: 'When enabled, diseases can be cured instead of being permanent.' },
        { name: 'bUseSingleplayerSettings', default: 'False', type: 'boolean', description: 'Use singleplayer-balanced settings.', effect: 'When enabled, applies boosted rates designed for solo play.' },
        { name: 'MaxNumberOfPlayersInTribe', default: '0', type: 'integer', description: 'Maximum players per tribe.', effect: 'Set to 0 for unlimited. Lower values create smaller tribe limits.' },
    ],

    // Dinosaur Settings
    'server-dino': [
        { name: 'DinoDamageMultiplier', default: '1.0', type: 'float', description: 'Multiplier for all dino damage.', effect: 'Higher values mean dinos deal more damage with attacks.' },
        { name: 'DinoResistanceMultiplier', default: '1.0', type: 'float', description: 'Multiplier for dino damage resistance.', effect: 'Lower values mean dinos take less damage (more resistant).' },
        { name: 'DinoCharacterFoodDrainMultiplier', default: '1.0', type: 'float', description: 'Multiplier for dino food consumption.', effect: 'Lower values mean dinos get hungry slower.' },
        { name: 'DinoCharacterStaminaDrainMultiplier', default: '1.0', type: 'float', description: 'Multiplier for dino stamina drain.', effect: 'Lower values mean dino stamina drains slower.' },
        { name: 'DinoCharacterHealthRecoveryMultiplier', default: '1.0', type: 'float', description: 'Multiplier for dino health regeneration.', effect: 'Higher values mean faster natural health recovery for dinos.' },
        { name: 'DinoHarvestingDamageMultiplier', default: '3.2', type: 'float', description: 'Multiplier for dino harvesting damage.', effect: 'Higher values mean dinos gather more resources per hit.' },
        { name: 'TamedDinoDamageMultiplier', default: '1.0', type: 'float', description: 'Multiplier for tamed dino damage only.', effect: 'Higher values mean your tamed dinos deal more damage.' },
        { name: 'TamedDinoResistanceMultiplier', default: '1.0', type: 'float', description: 'Multiplier for tamed dino resistance.', effect: 'Lower values mean your tamed dinos take less damage.' },
        { name: 'WildDinoCharacterFoodDrainMultiplier', default: '1.0', type: 'float', description: 'Multiplier for wild dino food drain.', effect: 'Affects how quickly wild dinos lose food (for taming).' },
        { name: 'WildDinoTorporDrainMultiplier', default: '1.0', type: 'float', description: 'Multiplier for wild dino torpor drain.', effect: 'Higher values mean torpor drains faster during taming.' },
        { name: 'DinoTurretDamageMultiplier', default: '1.0', type: 'float', description: 'Multiplier for turret damage to dinos.', effect: 'Higher values make turrets more effective against dinos.' },
        { name: 'RaidDinoCharacterFoodDrainMultiplier', default: '1.0', type: 'float', description: 'Multiplier for Titan food drain.', effect: 'Higher values make Titans starve faster after taming.' },
        { name: 'MaxTamedDinos', default: '5000', type: 'integer', description: 'Max tamed dinos server-wide.', effect: 'Lower values limit total tamed dinos to prevent lag.' },
        { name: 'MaxPersonalTamedDinos', default: '500', type: 'integer', description: 'Max tamed dinos per tribe.', effect: 'Lower values limit how many dinos each tribe can own.' },
        { name: 'AutoDestroyDecayedDinos', default: 'False', type: 'boolean', description: 'Auto-destroy decayed dinos.', effect: 'When enabled, automatically removes dinos that have decayed.' },
        { name: 'AllowFlyingStaminaRecovery', default: 'False', type: 'boolean', description: 'Allow stamina regen while flying.', effect: 'When enabled, flyers regenerate stamina mid-flight.' },
        { name: 'AllowFlyerCarryPvE', default: 'False', type: 'boolean', description: 'Allow flyer pickup in PvE.', effect: 'When enabled, flyers can pick up players and dinos in PvE mode.' },
        { name: 'AllowRaidDinoFeeding', default: 'False', type: 'boolean', description: 'Allow feeding Titans.', effect: 'When enabled, Titans can be fed to prevent starvation decay.' },
        { name: 'DisableImprintDinoBuff', default: 'False', type: 'boolean', description: 'Disable imprint stat bonus.', effect: 'When enabled, imprinted dinos no longer receive stat bonuses.' },
        { name: 'PreventMateBoost', default: 'False', type: 'boolean', description: 'Disable mate boost.', effect: 'When enabled, dinos no longer receive the mate boost buff.' },
    ],

    // Structure Settings
    'server-structure': [
        { name: 'StructureDamageMultiplier', default: '1.0', type: 'float', description: 'Multiplier for damage to structures.', effect: 'Higher values make structures easier to destroy.' },
        { name: 'StructureResistanceMultiplier', default: '1.0', type: 'float', description: 'Multiplier for structure resistance.', effect: 'Lower values make structures harder to destroy.' },
        { name: 'MaxStructuresInRange', default: '10500', type: 'integer', description: 'Max structures in an area.', effect: 'Lower values limit building density to reduce lag.' },
        { name: 'TheMaxStructuresInRange', default: '10500', type: 'integer', description: 'Alternative max structures setting.', effect: 'Same as MaxStructuresInRange; use whichever works for your version.' },
        { name: 'StructurePreventResourceRadiusMultiplier', default: '1.0', type: 'float', description: 'Resource block radius multiplier.', effect: 'Higher values block resources from spawning further from structures.' },
        { name: 'MaxPlatformSaddleStructureLimit', default: '75', type: 'integer', description: 'Max structures on platform saddles.', effect: 'Lower values limit building on platform dinos.' },
        { name: 'PerPlatformMaxStructuresMultiplier', default: '1.0', type: 'float', description: 'Platform structure limit multiplier.', effect: 'Higher values allow more structures on platform saddles.' },
        { name: 'PlatformSaddleBuildAreaBoundsMultiplier', default: '1.0', type: 'float', description: 'Platform build area multiplier.', effect: 'Higher values expand the buildable area on platform saddles.' },
        { name: 'PersonalTamedDinosSaddleStructureCost', default: '19', type: 'integer', description: 'Dino saddle structure cost.', effect: 'Each tamed dino counts as this many structures for limits.' },
        { name: 'StructurePickupTimeAfterPlacement', default: '30.0', type: 'float', description: 'Pickup time window in seconds.', effect: 'Higher values give more time to pick up placed structures.' },
        { name: 'StructurePickupHoldDuration', default: '0.5', type: 'float', description: 'Hold duration to pick up.', effect: 'Higher values require holding longer to pick up structures.' },
        { name: 'BrokenStructureDecayMultiplier', default: '1.0', type: 'float', description: 'Broken structure decay speed.', effect: 'Higher values make damaged structures decay faster.' },
        { name: 'DisableStructurePlacementCollision', default: 'False', type: 'boolean', description: 'Disable placement collision.', effect: 'When enabled, allows overlapping structure placement.' },
        { name: 'DestroyUnconnectedWaterPipes', default: 'False', type: 'boolean', description: 'Auto-destroy loose pipes.', effect: 'When enabled, unconnected water pipes are automatically removed.' },
        { name: 'AllowCrateSpawnsOnTopOfStructures', default: 'False', type: 'boolean', description: 'Allow drops on structures.', effect: 'When enabled, supply drops can spawn on top of player structures.' },
        { name: 'bAllowPlatformSaddleMultiFloors', default: 'False', type: 'boolean', description: 'Allow multi-floor platforms.', effect: 'When enabled, allows building multiple floors on platform saddles.' },
        { name: 'FastDecayUnsnappedCoreStructures', default: 'False', type: 'boolean', description: 'Fast decay for unsnapped cores.', effect: 'When enabled, unsnapped foundations and pillars decay faster.' },
        { name: 'StructureMemoryOptimization', default: 'False', type: 'boolean', description: 'Enable memory optimization.', effect: 'When enabled, reduces memory usage for structures (may affect loading).' },
        { name: 'UseOptimizedHarvestingHealth', default: 'False', type: 'boolean', description: 'Optimized harvest calculations.', effect: 'When enabled, uses optimized math for resource health calculations.' },
    ],

    // PvP/PvE Settings
    'server-pvp': [
        { name: 'ServerPVE', default: 'False', type: 'boolean', description: 'Enable PvE mode.', effect: 'When enabled, disables player vs player combat entirely.' },
        { name: 'DisablePvEGamma', default: 'False', type: 'boolean', description: 'Disable gamma in PvE.', effect: 'When enabled, prevents gamma adjustment in PvE mode.' },
        { name: 'EnablePvPGamma', default: 'False', type: 'boolean', description: 'Enable gamma in PvP.', effect: 'When enabled, allows gamma adjustment in PvP mode.' },
        { name: 'PreventOfflinePvP', default: 'False', type: 'boolean', description: 'Enable offline raid protection.', effect: 'When enabled, tribes become invulnerable when all members are offline.' },
        { name: 'PreventOfflinePvPInterval', default: '900', type: 'float', description: 'Offline protection delay.', effect: 'Seconds after last player logs off before protection activates.' },
        { name: 'PreventTribeAlliances', default: 'False', type: 'boolean', description: 'Disable tribe alliances.', effect: 'When enabled, tribes cannot form alliances with other tribes.' },
        { name: 'PvPStructureDecay', default: 'False', type: 'boolean', description: 'Enable PvP structure decay.', effect: 'When enabled, structures decay over time in PvP mode.' },
        { name: 'PvPDinoDecay', default: 'False', type: 'boolean', description: 'Enable PvP dino decay.', effect: 'When enabled, unclaimed dinos decay over time in PvP mode.' },
        { name: 'bDisableStructureDecayPvE', default: 'False', type: 'boolean', description: 'Disable PvE structure decay.', effect: 'When enabled, structures never decay in PvE mode.' },
        { name: 'bDisableDinoDecayPvE', default: 'False', type: 'boolean', description: 'Disable PvE dino decay.', effect: 'When enabled, unclaimed dinos never decay in PvE mode.' },
        { name: 'PvEStructureDecayPeriodMultiplier', default: '1.0', type: 'float', description: 'PvE structure decay rate.', effect: 'Higher values make structures decay slower in PvE.' },
        { name: 'PvEDinoDecayPeriodMultiplier', default: '1.0', type: 'float', description: 'PvE dino decay rate.', effect: 'Higher values make dinos decay slower in PvE.' },
        { name: 'PvEAllowStructuresAtSupplyDrops', default: 'False', type: 'boolean', description: 'Build near supply drops.', effect: 'When enabled, allows building near supply drop locations in PvE.' },
        { name: 'AllowHitMarkers', default: 'True', type: 'boolean', description: 'Show hit markers.', effect: 'When enabled, displays visual feedback when hitting targets.' },
        { name: 'AllowMultipleAttachedC4', default: 'False', type: 'boolean', description: 'Allow stacking C4.', effect: 'When enabled, multiple C4 can be placed on the same target.' },
        { name: 'ForceFlyerExplosives', default: 'False', type: 'boolean', description: 'Force flyer explosives.', effect: 'When enabled, forces flyers to use explosives for some actions.' },
        { name: 'AllowHideDamageSourceFromLogs', default: 'True', type: 'boolean', description: 'Hide damage source in logs.', effect: 'When enabled, allows hiding who dealt damage in tribe logs.' },
    ],

    // Tek Bunker Settings (Lost Colony)
    'server-bunker': [
        { name: 'LimitBunkersPerTribe', default: 'True', type: 'boolean', description: 'Limit bunkers per tribe.', effect: 'When enabled, restricts how many Tek Bunkers each tribe can own.' },
        { name: 'LimitBunkersPerTribeNum', default: '3', type: 'integer', description: 'Max bunkers per tribe.', effect: 'Sets the maximum number of Tek Bunkers allowed per tribe.' },
        { name: 'AllowBunkersInPreventionZones', default: 'False', type: 'boolean', description: 'Allow bunkers in prevention zones.', effect: 'When enabled, allows Tek Bunkers to be placed in no-build zones.' },
        { name: 'AllowRidingDinosInsideBunkers', default: 'True', type: 'boolean', description: 'Allow riding dinos inside bunkers.', effect: 'When enabled, players can ride dinosaurs inside Tek Bunkers.' },
        { name: 'AllowBunkerModulesAboveGround', default: 'False', type: 'boolean', description: 'Allow bunker modules above ground.', effect: 'When enabled, Tek Bunker modules can be placed above ground level.' },
        { name: 'AllowDinoAIInsideBunkers', default: 'True', type: 'boolean', description: 'Allow dino AI inside bunkers.', effect: 'When enabled, dinosaur AI functions normally inside Tek Bunkers.' },
        { name: 'AllowBunkerModulesInPreventionZones', default: 'False', type: 'boolean', description: 'Allow modules in prevention zones.', effect: 'When enabled, bunker modules can be placed in no-build zones.' },
        { name: 'MinDistanceBetweenBunkers', default: '3000', type: 'float', description: 'Minimum distance between bunkers.', effect: 'Sets the minimum spacing required between Tek Bunkers.' },
        { name: 'EnemyAccessBunkerHPThreshold', default: '0.25', type: 'float', description: 'Enemy access HP threshold.', effect: 'HP percentage at which enemies can access the bunker (0.25 = 25%).' },
        { name: 'BunkerUnderHPThresholdDmgMultiplier', default: '0.05', type: 'float', description: 'Damage multiplier under HP threshold.', effect: 'Damage multiplier applied to bunkers below HP threshold.' },
    ],

    // CryoHospital Settings (Lost Colony)
    'server-cryohospital': [
        { name: 'CryoHospitalHoursToRegenHP', default: '1.0', type: 'float', description: 'Hours to regen HP in CryoHospital.', effect: 'Time in hours for dinos to fully regenerate health in CryoHospital.' },
        { name: 'CryoHospitalHoursToRegenFood', default: '24.0', type: 'float', description: 'Hours to regen food in CryoHospital.', effect: 'Time in hours for dinos to fully regenerate food in CryoHospital.' },
        { name: 'CryoHospitalHoursToDrainTorpor', default: '1.0', type: 'float', description: 'Hours to drain torpor in CryoHospital.', effect: 'Time in hours for dinos to fully drain torpor in CryoHospital.' },
        { name: 'CryoHospitalMatingCooldownReduction', default: '2.0', type: 'float', description: 'Mating cooldown reduction multiplier.', effect: 'Multiplier for how fast mating cooldown is reduced in CryoHospital.' },
    ],

    // Bloodforge Settings (Lost Colony)
    'server-bloodforge': [
        { name: 'BloodforgeReinforceExtraDurability', default: '0.3', type: 'float', description: 'Extra durability from Bloodforge.', effect: 'Additional durability percentage added by Bloodforge reinforcement.' },
        { name: 'BloodforgeReinforceResourceCostMultiplier', default: '3.0', type: 'float', description: 'Resource cost multiplier.', effect: 'Multiplier for resources required to reinforce items in Bloodforge.' },
        { name: 'BloodforgeReinforceSpeedMultiplier', default: '0.1', type: 'float', description: 'Reinforce speed multiplier.', effect: 'Speed multiplier for Bloodforge reinforcement process.' },
    ],

    // Outpost Settings (Lost Colony)
    'server-outpost': [
        { name: 'MaxActiveOutposts', default: '', type: 'integer', description: 'Max active outposts.', effect: 'Maximum number of active outposts allowed per tribe.' },
        { name: 'MaxActiveResourceCaches', default: '', type: 'integer', description: 'Max active resource caches.', effect: 'Maximum number of active resource caches allowed per tribe.' },
        { name: 'MaxActiveCityOutposts', default: '', type: 'integer', description: 'Max active city outposts.', effect: 'Maximum number of active city outposts allowed per tribe.' },
    ],

    // Blueprint & Quality Caps
    'server-blueprints': [
        { name: 'MaxBlueprintDinoLevel', default: '300', type: 'integer', description: 'Max blueprint dino level.', effect: 'Maximum level for Meks and Enforcers when spawned from blueprints.' },
        { name: 'MaxBlueprintDinoQuality', default: '200', type: 'integer', description: 'Max blueprint dino quality.', effect: 'Maximum quality for Mek/Enforcer blueprints and spawner items.' },
        { name: 'MaxBlueprintItemQuality', default: '200', type: 'integer', description: 'Max blueprint item quality.', effect: 'Maximum quality for all item blueprints.' },
        { name: 'MaxBlueprintScoutQuality', default: '2000', type: 'integer', description: 'Max Scout blueprint quality.', effect: 'Maximum quality for Scout weapon and blueprints.' },
    ],

    // Cryopod Settings
    'server-cryopod': [
        { name: 'DisableCryopodEnemyCheck', default: 'False', type: 'boolean', description: 'Disable cryopod enemy check.', effect: 'When enabled, ignores enemy player/structure/dino checks for cryopod deployment.' },
        { name: 'AllowCryoFridgeOnSaddle', default: 'False', type: 'boolean', description: 'Allow cryofridge on saddles.', effect: 'When enabled, allows Cryofridge to be placed on rafts and platform saddles.' },
        { name: 'DisableCryopodFridgeRequirement', default: 'False', type: 'boolean', description: 'Disable cryofridge requirement.', effect: 'When enabled, removes the Cryofridge requirement for releasing cryopodded dinos.' },
        { name: 'CryopodFridgeCooldowntime', default: '90', type: 'integer', description: 'Cryofridge activation timer.', effect: 'Seconds to wait before cryofridge activates after placement.' },
    ],

    // Soft Tame Limit Settings
    'server-tamelimit': [
        { name: 'DestroyTamesOverTheSoftTameLimit', default: 'False', type: 'boolean', description: 'Enable soft tame limit enforcement.', effect: 'When enabled, destroys tames over the soft limit after countdown.' },
        { name: 'MaxTamedDinos_SoftTameLimit', default: '5000', type: 'integer', description: 'Soft tame limit.', effect: 'Server-wide soft tame limit before enforcement kicks in.' },
        { name: 'MaxTamedDinos_SoftTameLimit_CountdownForDeletionDuration', default: '604800', type: 'integer', description: 'Soft limit deletion countdown.', effect: 'Seconds before dinos over soft limit are destroyed (default 7 days).' },
    ],

    // Creature-Specific Settings
    'server-creatures': [
        { name: 'ArmadoggoDeathCooldown', default: '3600', type: 'integer', description: 'Armadoggo companion cooldown.', effect: 'Seconds before Armadoggo (Extinction) can reappear in Companion Mode after taking fatal damage.' },
        { name: 'YoungIceFoxDeathCooldown', default: '3600', type: 'integer', description: 'Veilwyn companion cooldown.', effect: 'Seconds before Veilwyn (Lost Colony) can reappear in Companion Mode after taking fatal damage.' },
        { name: 'ForceGachaUnhappyInCaves', default: 'True', type: 'boolean', description: 'Force Gachas unhappy in caves.', effect: 'When true (default), Gachas are forced to be unhappy inside caves. Set to false to disable this restriction.' },
        { name: 'MaxCosmoWeaponAmmo', default: '', type: 'integer', description: 'Max Cosmo web ammo.', effect: 'Maximum ammo capacity for Cosmo\'s web weapon.' },
        { name: 'CosmoWeaponAmmoReloadAmount', default: '', type: 'integer', description: 'Cosmo ammo reload amount.', effect: 'Amount of ammo Cosmo reloads per interval.' },
        { name: 'WorldBossKingKaijuSpawnTime', default: '19:00:00', type: 'string', description: 'King Titan spawn time.', effect: 'Time of day when King Titan spawns on Extinction (format: HH:MM:SS).' },
    ],

    // Cosmetics & Mods
    'server-cosmetics': [
        { name: 'CosmeticWhitelistOverride', default: '', type: 'string', description: 'Custom cosmetics whitelist URL.', effect: 'URL to override the approved custom cosmetics list for your server.' },
        { name: 'ForceExploitedTameDeletion', default: 'False', type: 'boolean', description: 'Delete exploited tames.', effect: 'When enabled, deletes unintentional tamed creatures and prevents cryopod deployment.' },
    ],

    // PvP-Specific Settings
    'server-pvp-specific': [
        { name: 'AllowTeslaCoilCaveBuildingPVP', default: 'False', type: 'boolean', description: 'Allow Tesla Coil in caves.', effect: 'When enabled, allows Tesla Coil placement inside caves on PvP servers.' },
        { name: 'MaxGateFrameOnSaddles', default: '', type: 'integer', description: 'Max gate frames on saddles.', effect: 'Maximum number of gate frames (and gates) allowed on platform saddles.' },
        { name: 'IgnorePVPMountedWeaponryRestrictions', default: 'False', type: 'boolean', description: 'Ignore mounted weapon restrictions.', effect: 'When enabled, allows weapons on restricted mounts in PvP.' },
    ],

    // Breeding & Taming
    'server-breeding': [
        { name: 'MatingIntervalMultiplier', default: '1.0', type: 'float', description: 'Mating cooldown multiplier.', effect: 'Lower values mean shorter wait between breeding the same dino.' },
        { name: 'MatingSpeedMultiplier', default: '1.0', type: 'float', description: 'Mating speed multiplier.', effect: 'Higher values mean the mating process completes faster.' },
        { name: 'EggHatchSpeedMultiplier', default: '1.0', type: 'float', description: 'Egg hatch speed multiplier.', effect: 'Higher values mean eggs hatch faster.' },
        { name: 'BabyDinoSpeedMultiplier', default: '1.0', type: 'float', description: 'Baby dino movement speed.', effect: 'Higher values make baby dinos move faster.' },
        { name: 'LayEggIntervalMultiplier', default: '1.0', type: 'float', description: 'Egg laying interval.', effect: 'Lower values mean dinos lay eggs more frequently.' },
        { name: 'CropGrowthSpeedMultiplier', default: '1.0', type: 'float', description: 'Crop growth speed.', effect: 'Higher values mean crops grow faster in plots.' },
        { name: 'CropDecaySpeedMultiplier', default: '1.0', type: 'float', description: 'Crop decay speed.', effect: 'Lower values mean crops spoil slower in plots.' },
        { name: 'PoopIntervalMultiplier', default: '1.0', type: 'float', description: 'Poop frequency multiplier.', effect: 'Lower values mean dinos poop more frequently (more fertilizer).' },
        { name: 'DisableDinoBreedingStructures', default: 'False', type: 'boolean', description: 'Disable breeding structures.', effect: 'When enabled, disables structures like the Egg Incubator.' },
    ],

    // Environment & World
    'server-environment': [
        { name: 'DayCycleSpeedScale', default: '1.0', type: 'float', description: 'Day/night cycle speed.', effect: 'Higher values make time pass faster; lower values slow it down.' },
        { name: 'DayTimeSpeedScale', default: '1.0', type: 'float', description: 'Daytime duration multiplier.', effect: 'Lower values make daytime last longer.' },
        { name: 'NightTimeSpeedScale', default: '1.0', type: 'float', description: 'Nighttime duration multiplier.', effect: 'Lower values make nighttime last longer.' },
        { name: 'DisableWeatherFog', default: 'False', type: 'boolean', description: 'Disable fog weather.', effect: 'When enabled, removes fog weather effects from the map.' },
        { name: 'bDisableDynamicMusic', default: 'False', type: 'boolean', description: 'Disable dynamic music.', effect: 'When enabled, turns off context-sensitive music.' },
        { name: 'GlobalSpoilingTimeMultiplier', default: '1.0', type: 'float', description: 'Item spoil time multiplier.', effect: 'Higher values make food and perishables last longer before spoiling.' },
        { name: 'GlobalItemDecompositionTimeMultiplier', default: '1.0', type: 'float', description: 'Dropped item decay time.', effect: 'Higher values mean dropped items last longer before disappearing.' },
        { name: 'GlobalCorpseDecompositionTimeMultiplier', default: '1.0', type: 'float', description: 'Corpse decay time.', effect: 'Higher values mean corpses last longer before disappearing.' },
        { name: 'ClampItemSpoilingTimes', default: 'False', type: 'boolean', description: 'Clamp spoil times.', effect: 'When enabled, prevents extreme spoil time modifications.' },
        { name: 'PreventSpawnAnimations', default: 'False', type: 'boolean', description: 'Skip spawn animations.', effect: 'When enabled, players spawn instantly without the waking animation.' },
        { name: 'RandomSupplyCratePoints', default: 'False', type: 'boolean', description: 'Randomize supply drops.', effect: 'When enabled, supply drops spawn at random locations.' },
        { name: 'CustomRecipeEffectivenessMultiplier', default: '1.0', type: 'float', description: 'Custom recipe effectiveness.', effect: 'Higher values make custom recipes more effective.' },
        { name: 'CustomRecipeSkillMultiplier', default: '1.0', type: 'float', description: 'Custom recipe skill bonus.', effect: 'Higher values increase crafting skill effect on custom recipes.' },
        { name: 'MaxTribeLogs', default: '100', type: 'integer', description: 'Max tribe log entries.', effect: 'Higher values store more tribe log history.' },
        { name: 'TributeItemExpirationSeconds', default: '86400', type: 'integer', description: 'Tribute item expiration.', effect: 'Higher values mean items stay in Obelisk/transmitter longer.' },
        { name: 'TributeDinoExpirationSeconds', default: '86400', type: 'integer', description: 'Tribute dino expiration.', effect: 'Higher values mean dinos stay in Obelisk/transmitter longer.' },
        { name: 'TributeCharacterExpirationSeconds', default: '86400', type: 'integer', description: 'Tribute character expiration.', effect: 'Higher values mean characters stay in Obelisk/transmitter longer.' },
        { name: 'AdminLogging', default: 'False', type: 'boolean', description: 'Log admin commands.', effect: 'When enabled, logs all admin command usage to a file.' },
        { name: 'ShowCreativeMode', default: 'False', type: 'boolean', description: 'Show creative mode option.', effect: 'When enabled, displays creative mode in the game menu.' },
    ],
};

const gameIniSettings = {
    // Breeding Settings
    'game-breeding': [
        { name: 'BabyMatureSpeedMultiplier', default: '1.0', type: 'float', description: 'Multiplier for baby maturation speed.', effect: 'Higher values mean faster growth from baby to adult.' },
        { name: 'BabyFoodConsumptionSpeedMultiplier', default: '1.0', type: 'float', description: 'Multiplier for baby food consumption.', effect: 'Higher values mean babies eat food faster (need more food).' },
        { name: 'BabyCuddleIntervalMultiplier', default: '1.0', type: 'float', description: 'Multiplier for imprint cuddle interval.', effect: 'Lower values mean more frequent imprint opportunities.' },
        { name: 'BabyCuddleGracePeriodMultiplier', default: '1.0', type: 'float', description: 'Imprint grace period multiplier.', effect: 'Higher values give more time to complete each imprint.' },
        { name: 'BabyCuddleLoseImprintQualitySpeedMultiplier', default: '1.0', type: 'float', description: 'Imprint quality loss speed.', effect: 'Lower values mean less imprint quality is lost if you miss a cuddle.' },
        { name: 'BabyImprintingStatScaleMultiplier', default: '1.0', type: 'float', description: 'Imprint stat bonus scale.', effect: 'Higher values increase the stat bonus from imprinting.' },
        { name: 'BabyImprintAmountMultiplier', default: '1.0', type: 'float', description: 'Imprint amount per cuddle.', effect: 'Higher values mean each cuddle gives more imprint percentage.' },
        { name: 'MutagenLevelBoost', default: '5', type: 'integer', description: 'Mutagen level boost (wild tames).', effect: 'Higher values give more bonus levels when using Mutagen on wild tames.' },
        { name: 'MutagenLevelBoost_Bred', default: '1', type: 'integer', description: 'Mutagen level boost (bred dinos).', effect: 'Higher values give more bonus levels when using Mutagen on bred dinos.' },
        { name: 'OverrideBondedPassImprintMultiplier', default: '', type: 'float', description: 'Bonded imprint pass multiplier.', effect: 'Percentage of imprint passed to bonded babies (Gigantoraptor).' },
    ],

    // Tribe Tower Settings (Lost Colony)
    'game-tower': [
        { name: 'TribeTowerBonusMultiplier', default: '2.0', type: 'float', description: 'Tribe Tower bonus multiplier.', effect: 'Multiplies the bonus effects from Tribe Towers.' },
    ],

    // World & Camera Settings
    'game-world': [
        { name: 'PhotoModeRangeLimit', default: '3000', type: 'integer', description: 'Photo mode camera range.', effect: 'Higher values allow the photo mode camera to move further.' },
    ],



    // Memorial & Valguero Settings
    'game-memorial': [
        { name: 'ValgueroMemorialEntries', default: '', type: 'string', description: 'Valguero memorial names.', effect: 'List of memorial names separated by semicolons (Name1;Name2;Name3).' },
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
        { name: 'KillXPMultiplier', default: '1.0', type: 'float', description: 'XP from killing creatures.', effect: 'Higher values give more experience points from kills.' },
        { name: 'HarvestXPMultiplier', default: '1.0', type: 'float', description: 'XP from harvesting resources.', effect: 'Higher values give more experience points from gathering.' },
        { name: 'CraftXPMultiplier', default: '1.0', type: 'float', description: 'XP from crafting items.', effect: 'Higher values give more experience points from crafting.' },
        { name: 'GenericXPMultiplier', default: '1.0', type: 'float', description: 'Generic/misc XP sources.', effect: 'Higher values give more experience from miscellaneous sources.' },
        { name: 'SpecialXPMultiplier', default: '1.0', type: 'float', description: 'Special XP sources.', effect: 'Higher values give more experience from special events/actions.' },
    ],

};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { gameUserSettings, gameIniSettings };
}
