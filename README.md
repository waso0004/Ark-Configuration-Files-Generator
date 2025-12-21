# ARK: Survival Ascended Server Configuration Generator

A web-based tool for generating server configuration files for ARK: Survival Ascended. No more manually editing INI files or hunting through wiki pages – just adjust the settings you want and download your config files.

## What is this?

If you've ever tried to set up an ARK server, you know the pain of dealing with `GameUserSettings.ini` and `Game.ini`. This tool makes it easy:

- **Browse all the settings** in a clean, organized interface
- **See what each setting does** with helpful tooltips and descriptions
- **Use official rate presets** (1x, 2x, 3x, Smalltribes, Arkpocalypse) as starting points
- **Export your config** as downloadable INI files or copy them to clipboard
- **Import existing configs** to tweak your current setup

## Features

### 🎮 Official Server Presets
One-click presets that match official ARK server rates:
- 1x Default (Official rates)
- 2x Rates (Evolution Event)
- 3x Rates (Boosted)
- 4.5x/4x (Smalltribes)
- 5x Rates (Arkpocalypse)

### 📥 Import Your Existing Config
Already have a server running? Just drag and drop your INI files (or a ZIP containing both) and the tool will load your current settings. When you export, it preserves any custom lines that aren't managed by the tool.

### 📤 Easy Export Options
- Download both files as a ZIP
- Download individual INI files
- Copy to clipboard for quick pasting

### 🔍 Search & Filter
Quickly find the setting you're looking for with the search bar. Settings are organized into logical categories like General, Rates, Player, Dino, Structures, PvP/PvE, Breeding, and Environment.

### 💾 Auto-Save
Your changes are automatically saved to your browser's local storage. Come back later and pick up where you left off.

### 📱 Mobile Friendly
Works on phones and tablets too, so you can tweak your server settings on the go.

## Settings Included

The tool covers all the commonly used ASA settings:

- **General Server** – passwords, player limits, map options, voice chat
- **Rates & Multipliers** – XP, taming, harvesting, loot quality
- **Player Settings** – damage, resistance, food/water drain, health regen
- **Dino Settings** – damage, resistance, taming, limits
- **Structure Settings** – build limits, decay, platform saddles
- **PvP/PvE Settings** – offline protection, alliances, decay options
- **Breeding** – mating, egg hatching, baby maturation, imprinting
- **Environment** – day/night cycle, weather, corpse decay
- **Stat Multipliers** – per-level stats for players and dinos

All settings include descriptions pulled from the official ARK Wiki.

## How to Use

1. **Pick a preset** or start from default 1x rates
2. **Adjust settings** – click on any setting card to see details, use the +/- buttons or type values directly
3. **Search** if you're looking for something specific
4. **Export** when you're done – download the files or copy to clipboard
5. **Upload to your server** – drop the INI files in your server's config folder

## Tech Stack

Just vanilla HTML, CSS, and JavaScript. No frameworks, no build step, no dependencies (except JSZip for ZIP file handling). Open `index.html` in a browser and you're good to go.

## Contributing

Found a bug or want to add a feature? Feel free to open an issue or submit a PR!

## Author

**Krisada Wasoontarajaroen**

---

*This tool is not affiliated with Studio Wildcard or the official ARK: Survival Ascended team. Settings and descriptions are based on the [ARK Official Community Wiki](https://ark.wiki.gg/wiki/Server_configuration).*