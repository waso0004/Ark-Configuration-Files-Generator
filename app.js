// ARK Server Config Generator - Main Application

const STORAGE_KEY = 'arkConfigGenerator';
const STORAGE_VERSION = 2; // Increment when data structure changes

// Debounce utility for optimized saving
function debounce(fn, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), delay);
    };
}

const SOURCE_INFO = {
    wiki: {
        label: 'ARK Wiki',
        url: 'https://ark.wiki.gg/wiki/Server_configuration'
    },
    patchNotes: {
        label: 'ASA Patch Notes',
        url: 'https://survivetheark.com/index.php?/forums/topic/708761-asa-pc-patch-notes-client-v7715-server-v7715-updated12202025/'
    }
};

// Minimal reference audit list (from the user's pasted "Server Settings Reference").
// Used to sanity-check that our metadata includes the setting and places it in the correct file/section.
const REFERENCE_EXPECTED_PLACEMENTS = [
    // GameUserSettings.ini
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'ActiveMods' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'ActiveMapMod' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'AdminLogging' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'AllowAnyoneBabyImprintCuddle' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'AllowCaveBuildingPvE' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'AllowCaveBuildingPvP' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'AllowCryoFridgeOnSaddle' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'AllowFlyerCarryPvE' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'AllowHideDamageSourceFromLogs' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'AllowHitMarkers' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'AllowIntegratedSPlusStructures' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'AllowMultipleAttachedC4' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'AllowRaidDinoFeeding' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'AllowTeslaCoilCaveBuildingPVP' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'AllowThirdPersonPlayer' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'AlwaysAllowStructurePickup' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'AlwaysNotifyPlayerLeft' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'ArmadoggoDeathCooldown' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'AutoDestroyDecayedDinos' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'AutoSavePeriodMinutes' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'BanListURL' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'bForceCanRideFliers' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'ClampItemSpoilingTimes' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'ClampResourceHarvestDamage' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'CosmeticWhitelistOverride' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'CosmoWeaponAmmoReloadAmount' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'CryoHospitalHoursToDrainTorpor' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'CryoHospitalHoursToRegenFood' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'CryoHospitalHoursToRegenHP' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'CryoHospitalMatingCooldownReduction' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'CryopodFridgeCooldowntime' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'DayCycleSpeedScale' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'DayTimeSpeedScale' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'DestroyTamesOverTheSoftTameLimit' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'DifficultyOffset' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'DisableCryopodEnemyCheck' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'DisableCryopodFridgeRequirement' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'DisableDinoDecayPvE' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'DisableImprintDinoBuff' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'DisableStructureDecayPvE' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'DisableWeatherFog' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'DontAlwaysNotifyPlayerJoined' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'EnableCryopodNerf' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'EnableExtraStructurePreventionVolumes' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'EnemyAccessBunkerHPThreshold' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'ForceAllStructureLocking' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'ForceExploitedTameDeletion' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'ForceGachaUnhappyInCaves' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'HarvestAmountMultiplier' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'HarvestHealthMultiplier' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'IgnoreLimitMaxStructuresInRangeTypeFlag' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'ItemStackSizeMultiplier' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'KickIdlePlayersPeriod' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'LimitBunkersPerTribe' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'LimitBunkersPerTribeNum' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'MaxCosmoWeaponAmmo' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'MaxPersonalTamedDinos' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'MaxPlatformSaddleStructureLimit' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'MaxTamedDinos' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'MaxTamedDinos_SoftTameLimit' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'MaxTamedDinos_SoftTameLimit_Countdown' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'MaxTrainCars' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'MinDistanceBetweenBunkers' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'NightTimeSpeedScale' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'NonPermanentDiseases' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'OverrideOfficialDifficulty' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'OverrideStructurePlatformPrevention' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'OxygenSwimSpeedStatMultiplier' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'PerPlatformMaxStructuresMultiplier' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'PlatformSaddleBuildAreaBoundsMultiplier' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'PlayerCharacterFoodDrainMultiplier' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'PlayerCharacterHealthRecoveryMultiplier' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'PlayerCharacterStaminaDrainMultiplier' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'PlayerCharacterWaterDrainMultiplier' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'PlayerDamageMultiplier' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'PlayerResistanceMultiplier' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'PreventDiseases' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'PreventMateBoost' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'PreventOfflinePvP' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'PreventOfflinePvPInterval' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'PreventSpawnAnimations' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'PreventTribeAlliances' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'ProximityChat' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'PvEAllowStructuresAtSupplyDrops' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'PvEDinoDecayPeriodMultiplier' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'PvPDinoDecay' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'RaidDinoCharacterFoodDrainMultiplier' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'RandomSupplyCratePoints' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'RCONEnabled' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'RCONPort' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'RCONServerGameLogBuffer' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'ResourcesRespawnPeriodMultiplier' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'ServerAutoForceRespawnWildDinosInterval' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'ServerCrosshair' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'ServerForceNoHUD' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'ServerHardcore' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'ServerPassword' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'serverPVE' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'ShowFloatingDamageText' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'ShowMapPlayerLocation' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'StructurePickupHoldDuration' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'StructurePickupTimeAfterPlacement' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'StructurePreventResourceRadiusMultiplier' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'StructureResistanceMultiplier' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'TamingSpeedMultiplier' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'TheMaxStructuresInRange' },
    // TribeLogDestroyedEnemyStructures removed - belongs in Game.ini only (see gameIni entry at line ~239)
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'TribeNameChangeCooldown' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'UseCharacterTracker' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'WorldBossKingKaijuSpawnTime' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'XPMultiplier' },
    { fileType: 'gameUserSettings', section: 'ServerSettings', key: 'YoungIceFoxDeathCooldown' },

    { fileType: 'gameUserSettings', section: 'SessionSettings', key: 'Port' },
    { fileType: 'gameUserSettings', section: 'SessionSettings', key: 'SessionName' },
    { fileType: 'gameUserSettings', section: '/Script/Engine.GameSession', key: 'MaxPlayers' },
    { fileType: 'gameUserSettings', section: 'MessageOfTheDay', key: 'Message' },
    { fileType: 'gameUserSettings', section: 'MessageOfTheDay', key: 'Duration' },

    // Game.ini (all under [/script/shootergame.shootergamemode])
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'AutoPvEStartTimeSeconds' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'AutoPvEStopTimeSeconds' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'BabyCuddleGracePeriodMultiplier' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'BabyCuddleIntervalMultiplier' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'BabyCuddleLoseImprintQualitySpeedMultiplier' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'BabyFoodConsumptionSpeedMultiplier' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'BabyImprintAmountMultiplier' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'BabyImprintingStatScaleMultiplier' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'BabyMatureSpeedMultiplier' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'bAllowFlyerSpeedLeveling' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'bAllowSpeedLeveling' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'bAllowUnlimitedRespecs' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'bDisableFriendlyFire' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'bDisablePhotoMode' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'bDisableStructurePlacementCollision' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'bIgnoreStructuresPreventionVolumes' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'bPvEDisableFriendlyFire' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'bShowCreativeMode' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'bUseDinoLevelUpAnimations' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'bUseSingleplayerSettings' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'CraftingSkillBonusMultiplier' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'CraftXPMultiplier' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'CropDecaySpeedMultiplier' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'CropGrowthSpeedMultiplier' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'CustomRecipeEffectivenessMultiplier' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'CustomRecipeSkillMultiplier' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'DestroyTamesOverLevelClamp' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'EggHatchSpeedMultiplier' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'GenericXPMultiplier' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'GlobalItemDecompositionTimeMultiplier' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'GlobalSpoilingTimeMultiplier' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'HarvestXPMultiplier' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'KillXPMultiplier' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'LayEggIntervalMultiplier' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'MatingIntervalMultiplier' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'MatingSpeedMultiplier' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'MaxFallSpeedMultiplier' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'MaxTribeLogs' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'MaxNumberOfPlayersInTribe' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'DinoHarvestingDamageMultiplier' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'DinoTurretDamageMultiplier' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'TamedDinoCharacterFoodDrainMultiplier' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'TamedDinoTorporDrainMultiplier' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'WildDinoCharacterFoodDrainMultiplier' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'WildDinoTorporDrainMultiplier' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'SupplyCrateLootQualityMultiplier' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'FishingLootQualityMultiplier' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'bAllowPlatformSaddleMultiFloors' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'PassiveTameIntervalMultiplier' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'PhotoModeRangeLimit' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'PlayerHarvestingDamageMultiplier' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'PoopIntervalMultiplier' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'ResourceNoReplenishRadiusPlayers' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'ResourceNoReplenishRadiusStructures' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'SpecialXPMultiplier' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'TribeTowerBonusMultiplier' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'ValgueroMemorialEntries' },

    // Ragnarok-specific (GameUserSettings.ini [Ragnarok] section)
    { fileType: 'gameUserSettings', section: 'Ragnarok', key: 'AllowMultipleTamedUnicorns' },
    { fileType: 'gameUserSettings', section: 'Ragnarok', key: 'UnicornSpawnInterval' },
    { fileType: 'gameUserSettings', section: 'Ragnarok', key: 'EnableVolcano' },
    { fileType: 'gameUserSettings', section: 'Ragnarok', key: 'VolcanoIntensity' },
    { fileType: 'gameUserSettings', section: 'Ragnarok', key: 'VolcanoInterval' },

    // Additional GUS SessionSettings entries
    { fileType: 'gameUserSettings', section: 'SessionSettings', key: 'QueryPort' },
    { fileType: 'gameUserSettings', section: 'SessionSettings', key: 'MultiHome' },

    // Additional Game.ini entries per reference
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'bLimitTurretsInRange' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'bHardLimitTurretsInRange' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'LimitTurretsNum' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'LimitTurretsRange' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'LimitGeneratorsNum' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'LimitGeneratorsRange' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'LimitNonPlayerDroppedItemsCount' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'LimitNonPlayerDroppedItemsRange' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'BaseHexagonRewardMultiplier' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'HexagonCostMultiplier' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'bDisableGenesisMissions' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'bDisableHexagonStore' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'bGenesisUseStructuresPreventionVolumes' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'bHexStoreAllowOnlyEngramTradeOption' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'bDisableDefaultMapItemSets' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'bDisableWorldBuffs' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'bEnableWorldBuffScaling' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'WorldBuffScalingEfficacy' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'AdjustableMutagenSpawnDelayMultiplier' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'TribeLogDestroyedEnemyStructures' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'bAllowCustomRecipes' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'bAllowUnclaimDinos' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'bAutoPvETimer' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'bAutoPvEUseSystemTime' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'bAutoUnlockAllEngrams' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'bDisableDinoBreeding' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'bDisableDinoRiding' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'bDisableDinoTaming' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'bDisableLootCrates' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'bUseCorpseLocator' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'bUseTameLimitForStructuresOnly' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'bPvEAllowTribeWar' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'bPvEAllowTribeWarCancel' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'bOnlyAllowSpecifiedEngrams' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'bPassiveDefensesDamageRiderlessDinos' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'bFlyerPlatformAllowUnalignedDinoBasing' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'bIncreasePvPRespawnInterval' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'TribeSlotReuseCooldown' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'UseCorpseLifeSpanMultiplier' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'StructureDamageRepairCooldown' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'PvPZoneStructureDamageMultiplier' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'PreventOfflinePvPConnectionInvincibleInterval' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'FastDecayInterval' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'IncreasePvPRespawnIntervalBaseAmount' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'IncreasePvPRespawnIntervalCheckPeriod' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'IncreasePvPRespawnIntervalMultiplier' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'GlobalPoweredBatteryDurabilityDecreasePerSecond' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'FuelConsumptionIntervalMultiplier' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'BaseTemperatureMultiplier' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'HairGrowthSpeedMultiplier' },
    { fileType: 'gameIni', section: '/script/shootergame.shootergamemode', key: 'GlobalCorpseDecompositionTimeMultiplier' },
];

function runReferencePlacementAudit() {
    try {
        const index = buildExpectedSettingIndex();
        const missing = [];
        const wrong = [];

        for (const item of REFERENCE_EXPECTED_PLACEMENTS) {
            const keyLower = String(item.key).toLowerCase();
            const metas = index[item.fileType].get(keyLower);
            if (!metas || metas.length === 0) {
                missing.push({ fileType: item.fileType, section: item.section, key: item.key });
                continue;
            }

            const expectedSectionLower = String(item.section).toLowerCase();
            const ok = metas.some(m => m.expectedSectionLower === expectedSectionLower);
            if (!ok) {
                wrong.push({
                    fileType: item.fileType,
                    key: item.key,
                    expectedSection: item.section,
                    foundSections: Array.from(new Set(metas.map(m => m.expectedSection))).join(' OR ')
                });
            }
        }

        if (missing.length || wrong.length) {
            console.groupCollapsed(`Reference placement audit: ${missing.length} missing, ${wrong.length} misplaced`);
            if (missing.length) console.table(missing);
            if (wrong.length) console.table(wrong);
            console.groupEnd();
        }
    } catch (e) {
        console.warn('Reference placement audit failed:', e);
    }
}

function resolveSettingSource(setting) {
    if (!setting) return null;

    if (setting.source && SOURCE_INFO[setting.source]) {
        const { label, url } = SOURCE_INFO[setting.source];
        return {
            label: setting.sourceLabel || label,
            url: setting.sourceUrl || url
        };
    }

    if (setting.sourceLabel || setting.sourceUrl) {
        return {
            label: setting.sourceLabel || 'Source',
            url: setting.sourceUrl || ''
        };
    }

    return null;
}

// Settings that were previously (incorrectly) treated as GameUserSettings.ini options
// but actually belong in Game.ini per the ARK server configuration documentation.
const MIGRATE_GUS_TO_GAMEINI_KEYS = [
    'GlobalSpoilingTimeMultiplier',
    'GlobalItemDecompositionTimeMultiplier',
    'GlobalCorpseDecompositionTimeMultiplier',

    // Breeding/crop/poop multipliers that belong in Game.ini
    'MatingIntervalMultiplier',
    'MatingSpeedMultiplier',
    'EggHatchSpeedMultiplier',
    'LayEggIntervalMultiplier',
    'CropGrowthSpeedMultiplier',
    'CropDecaySpeedMultiplier',
    'PoopIntervalMultiplier',

    // Additional Game.ini-only options from the reference table
    'CraftingSkillBonusMultiplier',
    'CustomRecipeEffectivenessMultiplier',
    'CustomRecipeSkillMultiplier',
    'ResourceNoReplenishRadiusPlayers',
    'ResourceNoReplenishRadiusStructures',
    'PlayerHarvestingDamageMultiplier',
    'bUseSingleplayerSettings',
    'MaxFallSpeedMultiplier'
];

// Renamed keys (historical -> current). Used to migrate localStorage values.
const RENAMED_SETTING_KEYS = [
    { from: 'MapPlayerLocation', to: 'ShowMapPlayerLocation', fileType: 'gameUserSettings' },
    { from: 'ServerPVE', to: 'serverPVE', fileType: 'gameUserSettings' },
    { from: 'proximityChat', to: 'ProximityChat', fileType: 'gameUserSettings' },
    { from: 'bDisableStructureDecayPvE', to: 'DisableStructureDecayPvE', fileType: 'gameUserSettings' },
    { from: 'bDisableDinoDecayPvE', to: 'DisableDinoDecayPvE', fileType: 'gameUserSettings' },
    { from: 'MaxTamedDinos_SoftTameLimit_CountdownForDeletionDuration', to: 'MaxTamedDinos_SoftTameLimit_Countdown', fileType: 'gameUserSettings' }
];

document.addEventListener('DOMContentLoaded', () => {
    // Use requestIdleCallback for non-critical initialization if available
    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
            init();
            // Hide initial loading screen
            const initialLoading = document.getElementById('initialLoading');
            if (initialLoading) initialLoading.style.display = 'none';
            // Show guide card if not dismissed
            initGuideCard();
        }, { timeout: 1000 });
    } else {
        // Fallback for browsers without requestIdleCallback
        setTimeout(() => {
            init();
            // Hide initial loading screen
            const initialLoading = document.getElementById('initialLoading');
            if (initialLoading) initialLoading.style.display = 'none';
            // Show guide card if not dismissed
            initGuideCard();
        }, 0);
    }
});

// Initialize the user guide card
function initGuideCard() {
    const guideOverlay = document.getElementById('guideOverlay');
    const guideClose = document.getElementById('guideClose');
    const guideDontShow = document.getElementById('guideDontShow');
    
    if (!guideOverlay || !guideClose) return;
    
    // Check if user has dismissed the guide before
    const guideDismissed = localStorage.getItem('arkConfigGuideHidden');
    
    if (!guideDismissed) {
        // Show the guide after a short delay for smooth appearance
        setTimeout(() => {
            guideOverlay.style.display = 'flex';
            // Apply translations to guide card
            if (typeof applyTranslations === 'function') {
                applyTranslations();
            }
        }, 300);
    }
    
    // Close button handler
    guideClose.addEventListener('click', () => {
        // Save preference if checkbox is checked
        if (guideDontShow && guideDontShow.checked) {
            localStorage.setItem('arkConfigGuideHidden', 'true');
        }
        // Hide with animation
        guideOverlay.style.animation = 'fadeOut 0.3s ease forwards';
        setTimeout(() => {
            guideOverlay.style.display = 'none';
            guideOverlay.style.animation = '';
        }, 300);
    });
    
    // Close when clicking overlay background
    guideOverlay.addEventListener('click', (e) => {
        if (e.target === guideOverlay) {
            guideClose.click();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && guideOverlay.style.display === 'flex') {
            guideClose.click();
        }
    });
}

// DOM element cache for frequently accessed elements
const domCache = {
    _cache: new Map(),
    get(selector) {
        if (!this._cache.has(selector)) {
            this._cache.set(selector, document.querySelector(selector));
        }
        return this._cache.get(selector);
    },
    getAll(selector) {
        return document.querySelectorAll(selector);
    },
    clear() {
        this._cache.clear();
    }
};

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

// Track settings that were seen in their correct place in imported files.
// Used to avoid overwriting correct placements with misplaced duplicates.
let importedCorrectPlacements = new Set();

// Load saved state from localStorage
function loadFromStorage() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            const data = JSON.parse(saved);
            // Check version compatibility
            if (data.version && data.version !== STORAGE_VERSION) {
                console.log('Storage version mismatch, migrating data...');
            }
            return data;
        }
    } catch (e) {
        console.warn('Failed to load from localStorage:', e);
        // Clear corrupted data
        try { localStorage.removeItem(STORAGE_KEY); } catch (_) {}
    }
    return null;
}

function stripKeysFromIniContent(iniContent, keysToStrip) {
    if (!iniContent) return iniContent;
    const keysLower = new Set(keysToStrip.map(k => k.toLowerCase()));
    const lines = iniContent.split(/\r?\n/);
    const result = [];

    for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith(';') || trimmed.startsWith('#') || trimmed.startsWith('[')) {
            result.push(line);
            continue;
        }

        const eqIndex = trimmed.indexOf('=');
        if (eqIndex <= 0) {
            result.push(line);
            continue;
        }

        const key = trimmed.substring(0, eqIndex).trim().toLowerCase();
        if (keysLower.has(key)) {
            continue;
        }

        result.push(line);
    }

    return result.join('\n');
}

function migrateSavedState(savedState) {
    if (!savedState) return savedState;

    // Rename keys inside saved currentValues (to avoid losing user edits after metadata fixes).
    if (savedState.currentValues) {
        for (const rule of RENAMED_SETTING_KEYS) {
            const bucket = savedState.currentValues?.[rule.fileType];
            if (!bucket) continue;
            if (bucket[rule.to] === undefined && bucket[rule.from] !== undefined) {
                bucket[rule.to] = bucket[rule.from];
            }
            if (bucket[rule.from] !== undefined) {
                delete bucket[rule.from];
            }
        }

        // One-off cross-file rename: historically we exposed DisableStructurePlacementCollision in GUS,
        // but the reference places bDisableStructurePlacementCollision in Game.ini.
        const gus = savedState.currentValues.gameUserSettings;
        const gameIni = savedState.currentValues.gameIni;
        if (gus && gameIni) {
            if (gameIni.bDisableStructurePlacementCollision === undefined && gus.DisableStructurePlacementCollision !== undefined) {
                gameIni.bDisableStructurePlacementCollision = gus.DisableStructurePlacementCollision;
            }
            if (gus.DisableStructurePlacementCollision !== undefined) {
                delete gus.DisableStructurePlacementCollision;
            }
        }
    }

    // Migrate stored currentValues
    if (savedState.currentValues) {
        const gus = savedState.currentValues.gameUserSettings || {};
        const gameIni = savedState.currentValues.gameIni || {};

        for (const key of MIGRATE_GUS_TO_GAMEINI_KEYS) {
            if (gameIni[key] === undefined && gus[key] !== undefined) {
                gameIni[key] = gus[key];
                delete gus[key];
            }
        }

        savedState.currentValues.gameUserSettings = gus;
        savedState.currentValues.gameIni = gameIni;
    }

    // Strip migrated keys from any saved original GameUserSettings.ini so exports don't preserve them.
    if (savedState.originalFiles?.gameUserSettings) {
        savedState.originalFiles.gameUserSettings = stripKeysFromIniContent(
            savedState.originalFiles.gameUserSettings,
            MIGRATE_GUS_TO_GAMEINI_KEYS
        );
    }

    return savedState;
}

function applyMigratedSettingsFromParsedIni(parsedSettings) {
    // If Game.ini was imported, prefer its values.
    if (originalFiles.gameIni) return;

    const gameIniSettingsLookup = {};
    for (const setting of Object.values(gameIniSettings).flat()) {
        gameIniSettingsLookup[setting.name] = {
            section: setting.section || '/script/shootergame.shootergamemode',
            sectionKey: setting.sectionKey || setting.name
        };
    }

    for (const name of MIGRATE_GUS_TO_GAMEINI_KEYS) {
        const meta = gameIniSettingsLookup[name];
        if (!meta) continue;

        let value = parsedSettings[`${meta.section}:${meta.sectionKey}`];
        if (value === undefined) {
            value = parsedSettings[meta.sectionKey];
        }

        if (value === undefined) continue;

        const input = document.querySelector(`input[data-setting-name="${name}"][data-file-type="gameIni"]`);
        if (!input) continue;

        if (input.type === 'checkbox') {
            input.checked = value === 'True' || value === 'true' || value === '1';
            const label = input.closest('.checkbox-container')?.querySelector('.checkbox-label');
            if (label) label.textContent = input.checked ? 'Enabled' : 'Disabled';
            updateValue(name, input.checked ? 'True' : 'False', 'gameIni');
        } else {
            input.value = value;
            updateValue(name, value, 'gameIni');
        }

        const card = input.closest('.setting-card');
        const defaultValue = input.dataset.default;
        updateCardModifiedState(card, value !== defaultValue);
    }
}

// Save state to localStorage (internal - use debouncedSave for frequent updates)
function _saveToStorageImmediate() {
    // Update save status indicator
    const saveStatus = document.getElementById('saveStatus');
    if (saveStatus) {
        saveStatus.textContent = t('saving');
        saveStatus.classList.add('saving');
        saveStatus.classList.remove('saved');
    }
    
    try {
        const state = {
            version: STORAGE_VERSION,
            timestamp: Date.now(),
            currentValues: currentValues,
            originalFiles: originalFiles,
            activeFilter: document.querySelector('.filter-btn.active')?.dataset.filter || 'all',
            activePreset: document.querySelector('.preset-btn.active')?.dataset.preset || '1x',
            collapsedSections: Array.from(document.querySelectorAll('.section-title.collapsed, .subsection-title.collapsed')).map(el => el.dataset.toggle)
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        
        // Show saved status
        if (saveStatus) {
            setTimeout(() => {
                saveStatus.textContent = t('saved');
                saveStatus.classList.remove('saving');
                saveStatus.classList.add('saved');
                // Reset to default state after a moment
                setTimeout(() => {
                    saveStatus.textContent = t('autoSaved');
                    saveStatus.classList.remove('saved');
                }, 2000);
            }, 100);
        }
    } catch (e) {
        console.warn('Failed to save to localStorage:', e);
        // Show error status
        if (saveStatus) {
            saveStatus.textContent = '⚠️ Save failed';
            saveStatus.classList.remove('saving', 'saved');
        }
        // If quota exceeded, try to clear old data
        // If quota exceeded, try to clear old data
        if (e.name === 'QuotaExceededError') {
            try {
                // Keep only essential data
                const minimalState = {
                    version: STORAGE_VERSION,
                    timestamp: Date.now(),
                    currentValues: currentValues
                };
                localStorage.setItem(STORAGE_KEY, JSON.stringify(minimalState));
            } catch (_) {}
        }
    }
}

// Debounced save for frequent updates (like typing)
const debouncedSave = debounce(_saveToStorageImmediate, 300);

// Immediate save for important state changes
function saveToStorage() {
    _saveToStorageImmediate();
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
            'PlayerHarvestingDamageMultiplier': '1.0',
            'DinoHarvestingDamageMultiplier': '3.2',
            'MatingIntervalMultiplier': '1.0',
            'MatingSpeedMultiplier': '1.0',
            'BabyMatureSpeedMultiplier': '1.0',
            'EggHatchSpeedMultiplier': '1.0',
            'BabyCuddleIntervalMultiplier': '1.0',
            'BabyImprintAmountMultiplier': '1.0',
            'PassiveTameIntervalMultiplier': '1.0',
            'LayEggIntervalMultiplier': '1.0',
            'CropGrowthSpeedMultiplier': '1.0',
            'BaseHexagonRewardMultiplier': '1.0'
        }
    },
    '2x': {
        name: '2x Evolution Event',
        settings: {
            'TamingSpeedMultiplier': '2.0',
            'HarvestAmountMultiplier': '2.0',
            'XPMultiplier': '2.0',
            'PlayerHarvestingDamageMultiplier': '2.0',
            'DinoHarvestingDamageMultiplier': '6.4',
            'MatingIntervalMultiplier': '0.5',
            'MatingSpeedMultiplier': '2.0',
            'BabyMatureSpeedMultiplier': '2.0',
            'EggHatchSpeedMultiplier': '2.0',
            'BabyCuddleIntervalMultiplier': '0.5',
            'BabyImprintAmountMultiplier': '2.0',
            'PassiveTameIntervalMultiplier': '0.5',
            'LayEggIntervalMultiplier': '0.5',
            'CropGrowthSpeedMultiplier': '2.0',
            'BaseHexagonRewardMultiplier': '1.0'
        }
    },
    '3x': {
        name: '3x Boosted',
        settings: {
            'TamingSpeedMultiplier': '3.0',
            'HarvestAmountMultiplier': '3.0',
            'XPMultiplier': '3.0',
            'PlayerHarvestingDamageMultiplier': '3.0',
            'DinoHarvestingDamageMultiplier': '9.6',
            'MatingIntervalMultiplier': '0.333',
            'MatingSpeedMultiplier': '3.0',
            'BabyMatureSpeedMultiplier': '3.0',
            'EggHatchSpeedMultiplier': '3.0',
            'BabyCuddleIntervalMultiplier': '0.333',
            'BabyImprintAmountMultiplier': '3.0',
            'PassiveTameIntervalMultiplier': '0.333',
            'LayEggIntervalMultiplier': '0.333',
            'CropGrowthSpeedMultiplier': '3.0',
            'BaseHexagonRewardMultiplier': '1.0'
        }
    },
    '4x': {
        name: '4.5x/4x Smalltribes',
        settings: {
            'TamingSpeedMultiplier': '4.5',
            'HarvestAmountMultiplier': '4.5',
            'XPMultiplier': '4.5',
            'PlayerHarvestingDamageMultiplier': '4.5',
            'DinoHarvestingDamageMultiplier': '14.4',
            'MatingIntervalMultiplier': '0.25',
            'MatingSpeedMultiplier': '4.0',
            'BabyMatureSpeedMultiplier': '4.0',
            'EggHatchSpeedMultiplier': '4.0',
            'BabyCuddleIntervalMultiplier': '0.25',
            'BabyImprintAmountMultiplier': '4.0',
            'PassiveTameIntervalMultiplier': '0.25',
            'LayEggIntervalMultiplier': '0.25',
            'CropGrowthSpeedMultiplier': '4.0',
            'BaseHexagonRewardMultiplier': '1.0'
        }
    },
    '5x': {
        name: '5x Arkpocalypse',
        settings: {
            'TamingSpeedMultiplier': '5.0',
            'HarvestAmountMultiplier': '5.0',
            'XPMultiplier': '5.0',
            'PlayerHarvestingDamageMultiplier': '5.0',
            'DinoHarvestingDamageMultiplier': '16.0',
            'MatingIntervalMultiplier': '0.2',
            'MatingSpeedMultiplier': '5.0',
            'BabyMatureSpeedMultiplier': '5.0',
            'EggHatchSpeedMultiplier': '5.0',
            'BabyCuddleIntervalMultiplier': '0.2',
            'BabyImprintAmountMultiplier': '5.0',
            'PassiveTameIntervalMultiplier': '0.2',
            'LayEggIntervalMultiplier': '0.2',
            'CropGrowthSpeedMultiplier': '5.0',
            'BaseHexagonRewardMultiplier': '1.0'
        }
    }
};

function init() {
    // Initialize language system first
    initLanguage();
    setupLanguageSelector();
    
    // Load saved state first
    const savedState = migrateSavedState(loadFromStorage());
    
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

    // Export UI should reflect whether there's anything to export.
    updateExportSectionVisibility();
    
    // Apply translations after everything is set up
    applyTranslations();

    // Dev-only sanity check (logs to console if anything from the reference is missing/misplaced).
    runReferencePlacementAudit();
}

// Setup language selector dropdown
function setupLanguageSelector() {
    const langSelector = document.getElementById('languageSelector');
    const langToggle = document.getElementById('langToggle');
    const langDropdown = document.getElementById('langDropdown');
    
    if (!langSelector || !langToggle || !langDropdown) return;
    
    // Populate language options
    langDropdown.innerHTML = '';
    for (const [code, name] of Object.entries(availableLanguages)) {
        const option = document.createElement('button');
        option.className = 'lang-option' + (code === currentLanguage ? ' active' : '');
        option.textContent = name;
        option.dataset.lang = code;
        option.addEventListener('click', () => {
            setLanguage(code);
            // Update active state
            langDropdown.querySelectorAll('.lang-option').forEach(opt => {
                opt.classList.toggle('active', opt.dataset.lang === code);
            });
            // Update button text
            const btnText = langToggle.querySelector('.lang-btn-text');
            if (btnText) btnText.textContent = name;
            // Close dropdown
            langSelector.classList.remove('open');
        });
        langDropdown.appendChild(option);
    }
    
    // Toggle dropdown
    langToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        langSelector.classList.toggle('open');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!langSelector.contains(e.target)) {
            langSelector.classList.remove('open');
        }
    });
}

function hasAnyCustomizedSettings() {
    for (const settings of Object.values(gameUserSettings)) {
        for (const setting of settings) {
            const value = currentValues.gameUserSettings[setting.name];
            if (isValueDifferentFromDefault(value, setting.default, setting.type)) {
                return true;
            }
        }
    }

    for (const settings of Object.values(gameIniSettings)) {
        for (const setting of settings) {
            const value = currentValues.gameIni[setting.name];
            if (isValueDifferentFromDefault(value, setting.default, setting.type)) {
                return true;
            }
        }
    }

    return false;
}

function updateExportSectionVisibility() {
    const exportSection = document.getElementById('exportSection');
    if (!exportSection) return;

    const hasOriginals = Boolean(originalFiles.gameUserSettings || originalFiles.gameIni);
    const hasChanges = hasAnyCustomizedSettings();

    // Hide export when there's nothing new to export (no imports + no changes).
    if (!hasOriginals && !hasChanges) {
        exportSection.classList.add('hidden');
    } else {
        exportSection.classList.remove('hidden');
    }
}

function restoreUIState(savedState) {
    // Restore active filter
    if (savedState.activeFilter) {
        const filterBtn = document.querySelector(`.filter-btn[data-filter="${savedState.activeFilter}"]`);
        if (filterBtn) {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            filterBtn.classList.add('active');
            applyFileFilter(savedState.activeFilter);
        }
    }
    
    // Restore active preset
    if (savedState.activePreset) {
        document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
        const presetBtn = document.querySelector(`.preset-btn[data-preset="${savedState.activePreset}"]`);
        if (presetBtn) presetBtn.classList.add('active');
    }
    
    // Restore collapsed sections (including subsections)
    if (savedState.collapsedSections) {
        savedState.collapsedSections.forEach(sectionId => {
            // Try section-title first, then subsection-title
            const title = document.querySelector(`.section-title[data-toggle="${sectionId}"]`) || 
                         document.querySelector(`.subsection-title[data-toggle="${sectionId}"]`);
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

    // Get translated description and effect if available
    const translatedDescription = getSettingTranslation(setting.name, 'description') || setting.description;
    const translatedEffect = getSettingTranslation(setting.name, 'effect') || getEffectText(setting);

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
    descLabel.dataset.translate = 'tooltipDescription';
    descLabel.textContent = t('tooltipDescription') || 'What it does';
    const descText = document.createElement('div');
    descText.className = 'tooltip-text';
    descText.dataset.settingName = setting.name;
    descText.dataset.field = 'description';
    descText.textContent = translatedDescription;
    descSection.appendChild(descLabel);
    descSection.appendChild(descText);
    tooltip.appendChild(descSection);

    const effectSection = document.createElement('div');
    effectSection.className = 'tooltip-section';
    const effectLabel = document.createElement('div');
    effectLabel.className = 'tooltip-label';
    effectLabel.dataset.translate = 'tooltipEffect';
    effectLabel.textContent = t('tooltipEffect') || 'Effect of changing value';
    const effectText = document.createElement('div');
    effectText.className = 'tooltip-text';
    effectText.dataset.settingName = setting.name;
    effectText.dataset.field = 'effect';
    effectText.textContent = translatedEffect;
    effectSection.appendChild(effectLabel);
    effectSection.appendChild(effectText);
    tooltip.appendChild(effectSection);

    if (setting.example) {
        const exampleSection = document.createElement('div');
        exampleSection.className = 'tooltip-section';
        const exampleLabel = document.createElement('div');
        exampleLabel.className = 'tooltip-label';
        exampleLabel.dataset.translate = 'tooltipExample';
        exampleLabel.textContent = t('tooltipExample') || 'Example';
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
    const defaultText = setting.default || '(empty)';
    
    // Wrap text in span for truncation
    const defaultTextSpan = document.createElement('span');
    const defaultLabelSpan = document.createElement('span');
    defaultLabelSpan.className = 'setting-default-label';
    defaultLabelSpan.textContent = t('defaultLabel') + ' ';
    defaultTextSpan.appendChild(defaultLabelSpan);
    defaultTextSpan.appendChild(document.createTextNode(defaultText));
    defaultBadge.appendChild(defaultTextSpan);
    
    // Create tooltip for default value on hover
    const defaultTooltip = document.createElement('div');
    defaultTooltip.className = 'default-tooltip';
    defaultTooltip.textContent = t('defaultLabel') + ' ' + defaultText;
    defaultBadge.appendChild(defaultTooltip);
    
    defaultBadge.addEventListener('mouseenter', () => {
        defaultTooltip.classList.add('visible');
    });
    defaultBadge.addEventListener('mouseleave', () => {
        defaultTooltip.classList.remove('visible');
    });

    header.appendChild(name);
    header.appendChild(defaultBadge);

    const description = document.createElement('p');
    description.className = 'setting-description';
    description.dataset.settingName = setting.name;
    description.dataset.field = 'description';
    description.textContent = translatedDescription;

    const sourceMeta = resolveSettingSource(setting);
    const sourceEl = document.createElement('div');
    sourceEl.className = 'setting-source';
    if (sourceMeta) {
        const prefix = document.createElement('span');
        prefix.className = 'setting-source-label';
        prefix.textContent = 'Source: ';
        sourceEl.appendChild(prefix);

        if (sourceMeta.url) {
            const link = document.createElement('a');
            link.href = sourceMeta.url;
            link.target = '_blank';
            link.rel = 'noreferrer noopener';
            link.textContent = sourceMeta.label;
            sourceEl.appendChild(link);
        } else {
            const text = document.createElement('span');
            text.textContent = sourceMeta.label;
            sourceEl.appendChild(text);
        }
    }

    const inputContainer = document.createElement('div');
    inputContainer.className = 'setting-input-container';

    const getTextInputConfig = (s) => {
        const rawName = s?.name || '';
        const name = rawName.toLowerCase();
        const defaultValue = s?.default;

        let type = 'text';
        let placeholder = 'Enter a value...';

        // Password-like settings
        if (name.includes('password') || name === 'serverpassword' || name === 'serveradminpassword' || name === 'spectatorpassword') {
            type = 'password';
            placeholder = 'Enter a password...';
        }

        // URLs
        if (name.endsWith('url') || name.includes('url') || name.includes('whitelist')) {
            type = 'text';
            placeholder = 'Enter a URL...';
        }

        // Times
        if (name.includes('time') || (typeof defaultValue === 'string' && /^\d{1,2}:\d{2}:\d{2}$/.test(defaultValue))) {
            type = 'text';
            placeholder = 'Enter time (HH:MM:SS)...';
        }

        // IDs / Mod IDs
        if (name.endsWith('id') || name.includes('mod') || name.includes('mapmod') || name.includes('totalconversion')) {
            type = 'text';
            placeholder = 'Enter an ID...';
        }

        // Names / messages
        if (name === 'sessionname') {
            type = 'text';
            placeholder = 'Enter a server name...';
        }
        if (name.includes('message')) {
            type = 'text';
            placeholder = 'Enter a message...';
        }
        if (name.includes('entries') || name.includes('list')) {
            type = 'text';
            placeholder = 'Enter values...';
        }

        // Allow explicit per-setting overrides in data.
        if (s?.placeholder) {
            placeholder = s.placeholder;
        }
        if (s?.inputType) {
            type = s.inputType;
        }

        return { type, placeholder };
    };

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
        input.id = `input-${fileType}-${setting.name}`;
        input.checked = initialValue === 'True';
        input.dataset.default = setting.default;
        input.dataset.settingName = setting.name;
        input.dataset.fileType = fileType;

        const label = document.createElement('label');
        label.className = 'checkbox-label';
        label.htmlFor = `input-${fileType}-${setting.name}`;
        label.textContent = input.checked ? t('enabled') : t('disabled');

        input.addEventListener('change', (e) => {
            label.textContent = e.target.checked ? t('enabled') : t('disabled');
            updateValue(setting.name, e.target.checked ? 'True' : 'False', fileType);
            updateCardModifiedState(card, e.target.checked.toString() !== (setting.default === 'True').toString());
        });

        checkboxContainer.appendChild(input);
        checkboxContainer.appendChild(label);
        inputContainer.appendChild(checkboxContainer);
    } else {
        input = document.createElement('input');
        if (setting.type === 'integer' || setting.type === 'float') {
            input.type = 'number';
        } else {
            const config = getTextInputConfig(setting);
            input.type = config.type;
        }
        if (setting.type === 'float') {
            input.step = '0.01';
        }
        input.className = 'setting-input';
        input.value = initialValue;
        input.dataset.default = setting.default;
        input.dataset.settingName = setting.name;
        input.dataset.fileType = fileType;
        const textConfig = (setting.type === 'text' || setting.type === 'string') ? getTextInputConfig(setting) : null;
        if (textConfig) {
            input.type = (setting.type === 'integer' || setting.type === 'float') ? input.type : textConfig.type;
            input.placeholder = textConfig.placeholder;
        }

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
        } else if (textConfig && textConfig.type === 'password') {
            const wrapper = document.createElement('div');
            wrapper.className = 'password-input-wrapper';

            const toggleBtn = document.createElement('button');
            toggleBtn.type = 'button';
            toggleBtn.className = 'password-toggle-btn';
            toggleBtn.textContent = 'Show';
            toggleBtn.title = 'Show password';
            toggleBtn.setAttribute('aria-label', 'Show password');
            toggleBtn.setAttribute('aria-pressed', 'false');
            toggleBtn.addEventListener('click', () => {
                const isHidden = input.type === 'password';
                input.type = isHidden ? 'text' : 'password';
                toggleBtn.textContent = isHidden ? 'Hide' : 'Show';
                toggleBtn.title = isHidden ? 'Hide password' : 'Show password';
                toggleBtn.setAttribute('aria-label', isHidden ? 'Hide password' : 'Show password');
                toggleBtn.setAttribute('aria-pressed', isHidden ? 'true' : 'false');
            });

            wrapper.appendChild(input);
            wrapper.appendChild(toggleBtn);
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
    if (sourceMeta) {
        card.appendChild(sourceEl);
    }
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
    // Debounced save to localStorage for better performance during typing
    debouncedSave();

    // Export section should appear once anything is customized.
    updateExportSectionVisibility();
}

function updateCardModifiedState(card, isModified) {
    if (isModified) {
        card.classList.add('modified');
    } else {
        card.classList.remove('modified');
    }
}

function setupTabSwitching() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active from all filter buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            applyFileFilter(filter);
            
            // Save state
            saveToStorage();
        });
    });
}

function applyFileFilter(filter) {
    const sections = document.querySelectorAll('.settings-section');
    const fileHeaders = document.querySelectorAll('.file-section-header');
    
    if (filter === 'all') {
        // Show all sections and headers
        sections.forEach(section => section.classList.remove('filter-hidden'));
        fileHeaders.forEach(header => header.classList.remove('hidden'));
    } else {
        // Filter sections based on data-file attribute
        sections.forEach(section => {
            const sectionId = section.querySelector('.section-title')?.dataset.toggle || '';
            const isGameIni = sectionId.startsWith('game-');
            const isGameUserSettings = !isGameIni;
            
            if (filter === 'game' && isGameIni) {
                section.classList.remove('filter-hidden');
            } else if (filter === 'gameusersettings' && isGameUserSettings) {
                section.classList.remove('filter-hidden');
            } else {
                section.classList.add('filter-hidden');
            }
        });
        
        // Show/hide file headers
        fileHeaders.forEach(header => {
            const headerFile = header.dataset.file;
            if (headerFile === filter) {
                header.classList.remove('hidden');
            } else {
                header.classList.add('hidden');
            }
        });
        
        // Scroll to the first visible section
        const firstVisible = document.querySelector('.file-section-header:not(.hidden)');
        if (firstVisible) {
            firstVisible.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}

function setupSectionToggle() {
    // Handle main section titles
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

    // Handle subsection titles (for nested sections like Lost Colony)
    const subsectionTitles = document.querySelectorAll('.subsection-title');
    subsectionTitles.forEach(title => {
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
    
    // Cache all cards and their searchable text for faster filtering
    let cardCache = null;
    const buildCardCache = () => {
        const cards = document.querySelectorAll('.setting-card');
        cardCache = Array.from(cards).map(card => ({
            element: card,
            searchText: (card.dataset.settingName + ' ' + 
                        card.querySelector('.setting-description').textContent).toLowerCase()
        }));
    };
    
    // Build cache on first search
    const performSearch = (query) => {
        if (!cardCache) buildCardCache();
        
        const queryWords = query.split(/\s+/).filter(word => word.length > 0);
        
        // Use requestAnimationFrame for smoother UI updates
        requestAnimationFrame(() => {
            cardCache.forEach(({ element, searchText }) => {
                const matches = query === '' || queryWords.every(word => searchText.includes(word));
                element.classList.toggle('hidden', !matches);
            });

            // Show subsections that have visible cards
            document.querySelectorAll('.subsection').forEach(subsection => {
                const grid = subsection.querySelector('.settings-grid');
                if (grid) {
                    const hasVisibleCards = grid.querySelector('.setting-card:not(.hidden)') !== null;
                    subsection.classList.toggle('hidden', !hasVisibleCards);
                }
            });

            // Show sections that have visible cards (including checking nested subsections)
            // But don't un-hide sections that are filter-hidden
            document.querySelectorAll('.settings-section:not(.filter-hidden)').forEach(section => {
                const directGrid = section.querySelector(':scope > .settings-grid');
                const mapSubsections = section.querySelector('.map-subsections');
                
                let hasVisibleContent = false;
                
                // Check direct settings grid
                if (directGrid) {
                    hasVisibleContent = directGrid.querySelector('.setting-card:not(.hidden)') !== null;
                }
                
                // Check nested subsections
                if (mapSubsections) {
                    hasVisibleContent = mapSubsections.querySelector('.subsection:not(.hidden)') !== null;
                }
                
                section.classList.toggle('hidden', !hasVisibleContent);
            });
        });
    };
    
    // Debounced search for better performance while typing
    const debouncedSearch = debounce((query) => performSearch(query), 150);
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        debouncedSearch(query);
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
        importedCorrectPlacements = new Set();
        updateImportStatus();
        updateExportSectionVisibility();
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
        const rawContent = e.target.result;
        // Parse and apply settings
        const parsedSettings = parseIniContent(rawContent);
        console.log(`Parsed ${Object.keys(parsedSettings).length} keys from ${file.name}:`, Object.keys(parsedSettings).slice(0, 20));
        applyParsedSettings(parsedSettings, fileType);

        // Validate and stage fixes for misplaced settings.
        validateImportedIniPlacement(rawContent, fileType, file.name);
        applyMisplacedImportedSettings(rawContent, fileType);

        // If these keys were in a GameUserSettings.ini, migrate them to Game.ini.
        if (fileType === 'gameUserSettings') {
            applyMigratedSettingsFromParsedIni(parsedSettings);
            // Store original content but strip migrated keys so exports won't preserve them in the wrong file.
            originalFiles[fileType] = stripKeysFromIniContent(rawContent, MIGRATE_GUS_TO_GAMEINI_KEYS);
        } else {
            // Store original content as-is
            originalFiles[fileType] = rawContent;
        }

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
                const parsedSettings = parseIniContent(content);
                applyParsedSettings(parsedSettings, 'gameUserSettings');

                validateImportedIniPlacement(content, 'gameUserSettings', filename);
                applyMisplacedImportedSettings(content, 'gameUserSettings');

                // Migrate and then store stripped original to prevent wrong-file preservation.
                applyMigratedSettingsFromParsedIni(parsedSettings);
                originalFiles.gameUserSettings = stripKeysFromIniContent(content, MIGRATE_GUS_TO_GAMEINI_KEYS);

                foundFiles++;
            } else if (lowerName.includes('game') && lowerName.endsWith('.ini') && !lowerName.includes('gameusersettings')) {
                originalFiles.gameIni = content;
                const parsedSettings = parseIniContent(content);
                applyParsedSettings(parsedSettings, 'gameIni');

                validateImportedIniPlacement(content, 'gameIni', filename);
                applyMisplacedImportedSettings(content, 'gameIni');
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

            // Case-insensitive aliases (INI keys are effectively case-insensitive in practice)
            const keyLower = key.toLowerCase();
            const sectionLower = String(currentSection || '').toLowerCase();
            if (settings[keyLower] === undefined) {
                settings[keyLower] = value;
            }
            if (settings[`${sectionLower}:${keyLower}`] === undefined) {
                settings[`${sectionLower}:${keyLower}`] = value;
            }
        }
    }
    
    return settings;
}

function parseIniOccurrences(content) {
    const occurrences = [];
    const lines = String(content || '').split(/\r?\n/);
    let currentSection = '';

    for (let i = 0; i < lines.length; i++) {
        const rawLine = lines[i];
        const trimmed = rawLine.trim();

        if (!trimmed || trimmed.startsWith(';') || trimmed.startsWith('#')) {
            continue;
        }

        if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
            currentSection = trimmed.slice(1, -1);
            continue;
        }

        const eqIndex = trimmed.indexOf('=');
        if (eqIndex <= 0) continue;

        const key = trimmed.substring(0, eqIndex).trim();
        const value = trimmed.substring(eqIndex + 1).trim();
        occurrences.push({
            section: currentSection,
            key,
            value,
            line: i + 1
        });
    }

    return occurrences;
}

function buildExpectedSettingIndex() {
    const byFile = {
        gameUserSettings: new Map(),
        gameIni: new Map()
    };

    const add = (fileType, setting) => {
        const section = (setting.section || (fileType === 'gameUserSettings' ? 'ServerSettings' : '/script/shootergame.shootergamemode'));
        const key = (setting.sectionKey || setting.name);
        const keyLower = String(key).toLowerCase();
        const list = byFile[fileType].get(keyLower) || [];
        list.push({
            name: setting.name,
            type: setting.type,
            defaultValue: setting.default,
            expectedSection: String(section),
            expectedSectionLower: String(section).toLowerCase(),
            key
        });
        byFile[fileType].set(keyLower, list);
    };

    for (const settings of Object.values(gameUserSettings)) {
        for (const setting of settings) {
            add('gameUserSettings', setting);
        }
    }

    for (const settings of Object.values(gameIniSettings)) {
        for (const setting of settings) {
            add('gameIni', setting);
        }
    }

    return byFile;
}

function resolveExpectedPlacementForOccurrence(sourceFileType, occ, expectedIndex) {
    const keyLower = String(occ.key).toLowerCase();
    const sectionLower = String(occ.section).toLowerCase();

    const sameFile = expectedIndex[sourceFileType];
    const metasSame = sameFile.get(keyLower);
    if (metasSame && metasSame.length > 0) {
        const meta = metasSame.find(m => m.expectedSectionLower === sectionLower) || metasSame[0];
        return { fileType: sourceFileType, meta };
    }

    const otherFileType = sourceFileType === 'gameUserSettings' ? 'gameIni' : 'gameUserSettings';
    const metasOther = expectedIndex[otherFileType].get(keyLower);
    if (metasOther && metasOther.length > 0) {
        return { fileType: otherFileType, meta: metasOther[0] };
    }

    return null;
}

function applyMisplacedImportedSettings(content, sourceFileType) {
    const occurrences = parseIniOccurrences(content);
    if (occurrences.length === 0) return;

    const expectedIndex = buildExpectedSettingIndex();

    // First pass: record settings found in their correct location in this imported file.
    for (const occ of occurrences) {
        const resolved = resolveExpectedPlacementForOccurrence(sourceFileType, occ, expectedIndex);
        if (!resolved) continue;

        const sectionLower = String(occ.section).toLowerCase();
        if (resolved.fileType === sourceFileType && resolved.meta.expectedSectionLower === sectionLower) {
            importedCorrectPlacements.add(`${resolved.fileType}:${resolved.meta.name}`);
        }
    }

    // Second pass: apply misplaced known settings into their expected UI inputs,
    // but do not overwrite a value we already saw correctly placed.
    for (const occ of occurrences) {
        const resolved = resolveExpectedPlacementForOccurrence(sourceFileType, occ, expectedIndex);
        if (!resolved) continue;

        const expectedFileType = resolved.fileType;
        const meta = resolved.meta;

        const sectionLower = String(occ.section).toLowerCase();
        const isMisplaced = expectedFileType !== sourceFileType || meta.expectedSectionLower !== sectionLower;
        if (!isMisplaced) continue;

        if (importedCorrectPlacements.has(`${expectedFileType}:${meta.name}`)) {
            continue;
        }

        const input = document.querySelector(`input[data-setting-name="${meta.name}"][data-file-type="${expectedFileType}"]`);
        if (!input) continue;

        const value = occ.value;
        if (input.type === 'checkbox') {
            input.checked = value === 'True' || value === 'true' || value === '1';
            const label = input.closest('.checkbox-container')?.querySelector('.checkbox-label');
            if (label) label.textContent = input.checked ? 'Enabled' : 'Disabled';
            updateValue(meta.name, input.checked ? 'True' : 'False', expectedFileType);
        } else {
            input.value = value;
            updateValue(meta.name, value, expectedFileType);
        }

        const card = input.closest('.setting-card');
        const defaultValue = input.dataset.default;
        updateCardModifiedState(card, String(value) !== String(defaultValue));
    }
}

function validateImportedIniPlacement(content, fileType, displayName = '') {
    try {
        const occurrences = parseIniOccurrences(content);
        if (occurrences.length === 0) return;

        const index = buildExpectedSettingIndex();
        const sameFile = index[fileType];
        const otherFile = fileType === 'gameUserSettings' ? index.gameIni : index.gameUserSettings;
        const otherFileLabel = fileType === 'gameUserSettings' ? 'Game.ini' : 'GameUserSettings.ini';

        const issues = [];

        for (const occ of occurrences) {
            const keyLower = String(occ.key).toLowerCase();
            const sectionLower = String(occ.section).toLowerCase();

            const expectedSame = sameFile.get(keyLower);
            if (expectedSame && expectedSame.length > 0) {
                // Validate section placement (when a setting is known to this file)
                // If multiple metas share a key, accept if any expected section matches.
                const ok = expectedSame.some(m => m.expectedSectionLower === sectionLower);
                if (!ok) {
                    const expectedSections = Array.from(new Set(expectedSame.map(m => m.expectedSection)));
                    issues.push({
                        type: 'Wrong section',
                        key: occ.key,
                        foundSection: occ.section || '(no section)',
                        expected: expectedSections.join(' OR '),
                        line: occ.line
                    });
                }
                continue;
            }

            const expectedOther = otherFile.get(keyLower);
            if (expectedOther && expectedOther.length > 0) {
                const expectedSections = Array.from(new Set(expectedOther.map(m => m.expectedSection)));
                issues.push({
                    type: 'Wrong file',
                    key: occ.key,
                    foundSection: occ.section || '(no section)',
                    expected: `${otherFileLabel} (${expectedSections.join(' OR ')})`,
                    line: occ.line
                });
            }
        }

        if (issues.length > 0) {
            const label = displayName ? ` (${displayName})` : '';
            console.groupCollapsed(`INI placement check${label}: ${issues.length} issue(s)`);
            console.table(issues);
            console.groupEnd();

            // Keep the toast short; details go to console.
            showToast(`Imported ${displayName || 'INI'} with ${issues.length} placement issue(s). Check console for details.`);
        }
    } catch (e) {
        console.warn('INI placement validation failed:', e);
    }
}

function computeImportPlacementRelocations() {
    const expectedIndex = buildExpectedSettingIndex();

    const makeRelocationBucket = () => ({ removals: new Map(), additions: [] });
    const relocations = {
        gameUserSettings: makeRelocationBucket(),
        gameIni: makeRelocationBucket()
    };

    const addRemoval = (bucket, section, key) => {
        const sectionLower = String(section || '').toLowerCase();
        const keyLower = String(key).toLowerCase();
        if (!bucket.removals.has(sectionLower)) {
            bucket.removals.set(sectionLower, new Set());
        }
        bucket.removals.get(sectionLower).add(keyLower);
    };

    const addAddition = (bucket, section, key, value, settingName) => {
        bucket.additions.push({ section, key, value, settingName });
    };

    const processFile = (content, sourceFileType) => {
        if (!content) return;
        const occurrences = parseIniOccurrences(content);
        for (const occ of occurrences) {
            const resolved = resolveExpectedPlacementForOccurrence(sourceFileType, occ, expectedIndex);
            if (!resolved) continue;

            const expectedFileType = resolved.fileType;
            const meta = resolved.meta;
            const foundSectionLower = String(occ.section).toLowerCase();
            const expectedSectionLower = meta.expectedSectionLower;

            const isMisplaced = expectedFileType !== sourceFileType || expectedSectionLower !== foundSectionLower;
            if (!isMisplaced) continue;

            // Remove the misplaced line from its current location.
            addRemoval(relocations[sourceFileType], occ.section, occ.key);

            // Add it to the correct location in the correct file.
            const input = document.querySelector(`input[data-setting-name="${meta.name}"][data-file-type="${expectedFileType}"]`);
            const value = input
                ? (input.type === 'checkbox' ? (input.checked ? 'True' : 'False') : input.value)
                : occ.value;
            addAddition(relocations[expectedFileType], meta.expectedSection, meta.key, value, meta.name);
        }
    };

    processFile(originalFiles.gameUserSettings, 'gameUserSettings');
    processFile(originalFiles.gameIni, 'gameIni');

    return relocations;
}

function applyRelocationsToIniLines(lines, relocationsForFile) {
    if (!relocationsForFile) return lines;

    const removals = relocationsForFile.removals;
    const additions = relocationsForFile.additions;

    const isSectionHeader = (trimmed) => trimmed.startsWith('[') && trimmed.endsWith(']');

    // 1) Remove misplaced key=value lines
    const cleaned = [];
    let currentSection = '';

    for (const line of lines) {
        const trimmed = line.trim();

        if (isSectionHeader(trimmed)) {
            currentSection = trimmed.slice(1, -1);
            cleaned.push(line);
            continue;
        }

        if (!trimmed || trimmed.startsWith(';') || trimmed.startsWith('#')) {
            cleaned.push(line);
            continue;
        }

        const eqIndex = trimmed.indexOf('=');
        if (eqIndex <= 0) {
            cleaned.push(line);
            continue;
        }

        const key = trimmed.substring(0, eqIndex).trim();
        const keyLower = key.toLowerCase();
        const sectionLower = String(currentSection || '').toLowerCase();
        const sectionRemovals = removals.get(sectionLower);
        if (sectionRemovals && sectionRemovals.has(keyLower)) {
            continue;
        }

        cleaned.push(line);
    }

    if (!additions || additions.length === 0) {
        return cleaned;
    }

    // 2) Insert (or replace) additions in their expected sections
    const out = cleaned.slice();
    const normalizeSection = (s) => String(s || '').toLowerCase();

    const findSectionHeaderIndex = (section) => {
        const header = `[${section}]`;
        return out.findIndex(l => l.trim() === header);
    };

    const findSectionEndIndex = (headerIndex) => {
        let idx = headerIndex + 1;
        while (idx < out.length) {
            const t = out[idx].trim();
            if (t.startsWith('[') && t.endsWith(']')) break;
            idx++;
        }
        return idx;
    };

    const upsertInSection = (section, key, value) => {
        const headerIndex = findSectionHeaderIndex(section);
        const headerLine = `[${section}]`;

        let startIndex = headerIndex;
        if (startIndex === -1) {
            // Create section at end
            if (out.length > 0 && out[out.length - 1].trim() !== '') {
                out.push('');
            }
            out.push(headerLine);
            out.push(`${key}=${value}`);
            return;
        }

        const endIndex = findSectionEndIndex(startIndex);
        const keyLower = String(key).toLowerCase();
        let firstMatchIndex = -1;

        // Scan section for existing key; replace first, remove duplicates.
        for (let i = startIndex + 1; i < endIndex; i++) {
            const trimmed = out[i].trim();
            if (!trimmed || trimmed.startsWith(';') || trimmed.startsWith('#')) continue;
            const eqIndex = trimmed.indexOf('=');
            if (eqIndex <= 0) continue;
            const existingKeyLower = trimmed.substring(0, eqIndex).trim().toLowerCase();
            if (existingKeyLower === keyLower) {
                if (firstMatchIndex === -1) {
                    firstMatchIndex = i;
                } else {
                    out.splice(i, 1);
                    i--;
                }
            }
        }

        if (firstMatchIndex !== -1) {
            out[firstMatchIndex] = `${key}=${value}`;
        } else {
            // Insert just before next section header
            out.splice(endIndex, 0, `${key}=${value}`);
        }
    };

    // De-dupe additions by (section,key) keeping last.
    const seen = new Map();
    for (const add of additions) {
        const s = add.section;
        const k = add.key;
        const mapKey = `${normalizeSection(s)}:${String(k).toLowerCase()}`;
        seen.set(mapKey, add);
    }

    for (const add of seen.values()) {
        upsertInSection(add.section, add.key, add.value);
    }

    return out;
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
    
    // Build a lowercase map of all parsed keys for case-insensitive matching
    const parsedLowerMap = {};
    for (const key of Object.keys(parsedSettings)) {
        parsedLowerMap[key.toLowerCase()] = parsedSettings[key];
    }
    
    let appliedCount = 0;
    let resetToDefaultCount = 0;
    
    for (const setting of allSettings) {
        const { section, sectionKey } = settingsLookup[setting.name];

        const sectionLower = String(section || '').toLowerCase();
        const sectionKeyLower = String(sectionKey || '').toLowerCase();
        
        // Try section-qualified lookup first, then fallback to key only
        let value = parsedSettings[`${section}:${sectionKey}`];
        if (value === undefined) {
            value = parsedSettings[sectionKey];
        }

        // Case-insensitive fallbacks using lowercase map
        if (value === undefined) {
            value = parsedLowerMap[`${sectionLower}:${sectionKeyLower}`];
        }
        if (value === undefined) {
            value = parsedLowerMap[sectionKeyLower];
        }
        
        const input = document.querySelector(`input[data-setting-name="${setting.name}"][data-file-type="${fileType}"]`);
        if (!input) continue;
        
        // If setting was found in the file, use that value; otherwise reset to default
        const finalValue = value !== undefined ? value : setting.default;
        const isFromFile = value !== undefined;
        
        if (input.type === 'checkbox') {
            input.checked = finalValue === 'True' || finalValue === 'true' || finalValue === '1';
            const label = input.closest('.checkbox-container')?.querySelector('.checkbox-label');
            if (label) label.textContent = input.checked ? 'Enabled' : 'Disabled';
            updateValue(setting.name, input.checked ? 'True' : 'False', fileType);
        } else {
            input.value = finalValue;
            updateValue(setting.name, finalValue, fileType);
        }
        
        // Update modified state - only modified if value differs from default
        const card = input.closest('.setting-card');
        updateCardModifiedState(card, finalValue !== setting.default);
        
        if (isFromFile) {
            appliedCount++;
        } else {
            resetToDefaultCount++;
        }
    }
    
    console.log(`Applied ${appliedCount} settings from ${fileType}, reset ${resetToDefaultCount} to defaults`);
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
    const relocations = computeImportPlacementRelocations();

    // Build a map of settings with their section info
    const settingsMeta = {};
    for (const [sectionId, settings] of Object.entries(gameUserSettings)) {
        settings.forEach(setting => {
            const value = currentValues.gameUserSettings[setting.name];
            settingsMeta[setting.name] = {
                value,
                defaultValue: setting.default,
                type: setting.type,
                section: setting.section || 'ServerSettings',
                sectionKey: setting.sectionKey || setting.name
            };
        });
    }

    // If we have an original file, preserve it and only update managed settings
    if (originalFiles.gameUserSettings) {
        const merged = mergeWithOriginalSectioned(originalFiles.gameUserSettings, settingsMeta, { appendMissing: true });
        const fixedLines = applyRelocationsToIniLines(merged.split(/\r?\n/), relocations.gameUserSettings);
        return normalizeIniSpacing(fixedLines.join('\n'));
    }

    // Generate fresh file - group by section
    const sections = {};
    for (const [name, meta] of Object.entries(settingsMeta)) {
        if (!isValueDifferentFromDefault(meta.value, meta.defaultValue, meta.type)) {
            continue;
        }
        if (!sections[meta.section]) {
            sections[meta.section] = [];
        }
        sections[meta.section].push({ key: meta.sectionKey, value: meta.value });
    }

    // If we imported the other file and need to move settings into this file,
    // include those moved settings even if they match defaults.
    for (const add of relocations.gameUserSettings.additions) {
        if (!sections[add.section]) sections[add.section] = [];
        // Avoid duplicates: replace any existing entry for the same key.
        sections[add.section] = sections[add.section].filter(s => String(s.key).toLowerCase() !== String(add.key).toLowerCase());
        sections[add.section].push({ key: add.key, value: add.value });
    }

    // If the user didn't customize anything, generate nothing.
    if (Object.keys(sections).length === 0) {
        return '';
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

    return normalizeIniSpacing(content);
}

function normalizeIniSpacing(content) {
    if (!content) return content;

    const lines = content.split(/\r?\n/);

    const isComment = (trimmed) => trimmed.startsWith(';') || trimmed.startsWith('#');
    const isSectionHeader = (trimmed) => trimmed.startsWith('[') && trimmed.endsWith(']');
    const isKeyValue = (trimmed) => {
        if (!trimmed) return false;
        if (isComment(trimmed) || isSectionHeader(trimmed)) return false;
        const eqIndex = trimmed.indexOf('=');
        return eqIndex > 0;
    };

    const getLastNonEmptyType = (out) => {
        for (let i = out.length - 1; i >= 0; i--) {
            const t = out[i].trim();
            if (!t) continue;
            if (isSectionHeader(t)) return 'section';
            if (isComment(t)) return 'comment';
            if (isKeyValue(t)) return 'key';
            return 'other';
        }
        return 'none';
    };

    const peekNextNonEmptyType = (startIndex) => {
        for (let j = startIndex; j < lines.length; j++) {
            const t = lines[j].trim();
            if (!t) continue;
            if (isSectionHeader(t)) return 'section';
            if (isComment(t)) return 'comment';
            if (isKeyValue(t)) return 'key';
            return 'other';
        }
        return 'none';
    };

    const out = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const trimmed = line.trim();

        if (isSectionHeader(trimmed)) {
            // Add a single blank line before a new section if the previous non-empty line was a setting.
            const prevType = getLastNonEmptyType(out);
            if (prevType === 'key' && out.length > 0 && out[out.length - 1].trim() !== '') {
                out.push('');
            }
            out.push(line);
            continue;
        }

        if (!trimmed) {
            const prevType = getLastNonEmptyType(out);
            const nextType = peekNextNonEmptyType(i + 1);

            // Remove blank lines that split continuous key/value blocks.
            if (prevType === 'key' && nextType === 'key') {
                continue;
            }

            // Collapse multiple blank lines.
            if (out.length > 0 && out[out.length - 1].trim() === '') {
                continue;
            }

            out.push('');
            continue;
        }

        out.push(line);
    }

    // Trim trailing blank lines.
    while (out.length > 0 && out[out.length - 1].trim() === '') {
        out.pop();
    }

    return out.join('\n');
}

function generateGameIni() {
    const relocations = computeImportPlacementRelocations();

    // Get all managed setting names
    const managedSettings = {};
    for (const [sectionId, settings] of Object.entries(gameIniSettings)) {
        settings.forEach(setting => {
            const value = currentValues.gameIni[setting.name];
            if (isValueDifferentFromDefault(value, setting.default, setting.type)) {
                managedSettings[setting.name] = value;
            }
        });
    }

    // If we have an original file, preserve it and only update managed settings
    if (originalFiles.gameIni) {
        const merged = mergeWithOriginal(originalFiles.gameIni, managedSettings, { appendMissing: true });
        const fixedLines = applyRelocationsToIniLines(merged.split(/\r?\n/), relocations.gameIni);
        return fixedLines.join('\n');
    }

    // If we imported the other file and need to move settings into this file,
    // include those moved settings even if they match defaults.
    for (const add of relocations.gameIni.additions) {
        managedSettings[add.key] = add.value;
    }

    // If the user didn't customize anything, generate nothing.
    const entries = Object.entries(managedSettings);
    if (entries.length === 0) {
        return '';
    }

    // Generate fresh file
    let content = '[/script/shootergame.shootergamemode]\n';
    for (const [name, value] of entries) {
        content += `${name}=${value}\n`;
    }

    return content;
}

function isValueDifferentFromDefault(value, defaultValue, type) {
    // Treat undefined as "not set"; this generator initializes currentValues
    // to defaults, but this keeps the helper safe.
    if (value === undefined) return false;

    // Booleans are stored as strings "True"/"False".
    if (type === 'boolean') {
        const v = String(value).trim().toLowerCase();
        const d = String(defaultValue).trim().toLowerCase();
        return v !== d;
    }

    if (type === 'integer') {
        const v = Number.parseInt(String(value).trim(), 10);
        const d = Number.parseInt(String(defaultValue).trim(), 10);
        if (Number.isNaN(v) || Number.isNaN(d)) {
            return String(value) !== String(defaultValue);
        }
        return v !== d;
    }

    if (type === 'float') {
        const v = Number.parseFloat(String(value).trim());
        const d = Number.parseFloat(String(defaultValue).trim());
        if (Number.isNaN(v) || Number.isNaN(d)) {
            return String(value) !== String(defaultValue);
        }
        return v !== d;
    }

    // Strings/text: keep exact compare (empty string counts as default).
    return String(value) !== String(defaultValue);
}

function mergeWithOriginal(originalContent, managedSettings, options = {}) {
    const { appendMissing = true } = options;
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
    
    // Optionally add managed settings that weren't in the original file
    if (appendMissing) {
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
    }
    
    return result.join('\n');
}

function mergeWithOriginalSectioned(originalContent, settingsMeta, options = {}) {
    const { appendMissing = true } = options;
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
    
    // Optionally add managed settings that weren't in the original file
    if (appendMissing) {
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
