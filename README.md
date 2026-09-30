# Vajax Overhaul

A colelction of Stash plugins for Vajax Overhaul project. This "overhaul" is meant to change most of the already existing functionalities and to add new features. Plugins can work separately so no need to use every plugin if not needed.

## Available Plugins

### Vajax Battles

A competitive rating system for Stash items. Users compare two items side by side and select a winner, gradually building a personal ranking for scenes, images, performers, studios, groups, and galleries.

Core features include:

- Category-based battles for scenes, images, performers, studios, groups, and galleries
- A scoring algorithm with configurable maximum points, leniency, and streak modifiers
- Local leaderboards with podium display and filterable lists
- Detailed statistics with timeline charts, category breakdowns, and per-item history
- Optional performer bonus system for scenes and images
- Synchronization of scores to Stash rating100 values
- Persistent storage on the Stash server so statistics are shared across devices
- Extensive customization options for display, filtering, and battle rules

### Vajax Stats

A statistics dashboard plugin for [Stash](https://stashapp.cc/) that extends the built-in stats page with charts, coverage reports, activity timelines, and detailed per-category breakdowns.

> Statistics AddOn for extended view of your Stash Stats.

#### Features

- **Overview** – Library-wide hero numbers, recent additions, and top performers
- **Health** – StashID coverage and missing-metadata reports across all categories
- **Activity** – Recently added timelines, play counts, O counts, and highlight numbers
- **O Stats** – Deep dive into O history: streaks, gaps, distribution by weekday/hour, and top scenes
- **Top Rated** – Top 10 highest-rated items per category
- **Scenes** – Resolution, size, duration, codec, bitrate, framerate, rating, and coverage breakdowns
- **Performers** – Gender, age, ethnicity, country, height, hair/eye color, and scene participation
- **Studios** – Scene counts, ratings, parent relationships, and StashID coverage
- **Tags** – Scene counts, parent relationships, scene marker usage, and StashID coverage
- **Groups** – Scene/performer counts, ratings, durations, and StashID coverage
- **Galleries** – Image counts, ratings, top photographers, and added timeline
- **Images** – Resolution, size, orientation, ratings, top photographers, and added timeline

Each category tab has **clickable stat cards** that dynamically swap the chart below, plus **latest/oldest** and **top-N** lists with sort toggles.

## Installation

### Adding the source

1. Open Stash and navigate to Settings, then Plugins.
2. Select the Available Plugins tab.
3. Click Add Source.
4. Enter the following URL:

   https://vibingsGit.github.io/vajax-overhaul/main/index.yml

5. Click Reload to fetch the plugin list.

### Installing a plugin

1. In the Available Plugins list, locate the desired plugin (for example, Vajax Battles).
2. Click Install next to the plugin.
3. Restart Stash or reload the plugins from the Settings page.

Each plugin can be installed or removed independently. Installing one plugin does not affect the others.

## Requirements

- Stash version 0.24.0 or later
- Python 3.8 or later for plugins that include a backend component

## Updating Plugins

Stash checks the source URL periodically for new versions. When an update is available, it appears in the Available Plugins list. Click Update to install the latest version. Existing data stored on the server is preserved across updates unless a migration is explicitly required.

## Why AI usage?

Because I suck at coding and thinking for my own behalf...
DeepSeek was used in creation of these plugins and human touches were made afterwards.

## Contributing

Vajax Overhaul project is maintained by single individual and their vision. Bug fixes and proposals are welcomed.

## License

Each plugin is released under the MIT License unless otherwise stated in its individual directory.
