# Vajax Overhaul

A collection of Stash plugins for the Vajax Overhaul project. This "overhaul" is meant to change most of the already existing functionalities and to add new features. Plugins can work separately - no need to use every plugin if not needed.

## Plugins at a glance

| Plugin                  | Type      | Summary                                                    |
| ----------------------- | --------- | ---------------------------------------------------------- |
| **Vajax Battles**       | UI + Backend | Competitive rating system based on head-to-head matchups |
| **Vajax Better Scenes** | UI + Backend | Full scene page replacement with a custom player, queue, and O-tracking |
| **Vajax Homepage**      | UI        | Complete replacement for Stash's default FrontPage         |
| **Vajax Stats**         | UI        | Extended statistics dashboard for every category           |

## Available Plugins

### Vajax Battles

A competitive rating system for Stash items. Users compare two items side by side and select a winner, gradually building a personal ranking for scenes, images, performers, studios, groups, and galleries.

**Features**

- Category-based battles for scenes, images, performers, studios, groups, and galleries
- A scoring algorithm with configurable maximum points, leniency, and streak modifiers
- Local leaderboards with podium display and filterable lists
- Detailed statistics with timeline charts, category breakdowns, and per-item history
- Optional performer bonus system for scenes and images
- Synchronization of scores to Stash rating100 values
- Persistent storage on the Stash server so statistics are shared across devices
- Extensive customization options for display, filtering, and battle rules

---

### Vajax Better Scenes

A full replacement for Stash's built-in scene page. The plugin hides the default layout and renders its own React interface for the player, sidepanel, and modals, while keeping data synchronized with Stash through its GraphQL API.

**Features**

- **Custom scene page** – Replaces Stash's default scene layout entirely with a modern two-column grid: player on the left, details sidepanel on the right
- **Modern video player** – Built-in `<video>` element with a custom control bar, timeline hover previews, and O-count markers on the progress track
- **Two-tier queue system** – A per-tab *Session Queue* that plays before Stash's own URL-derived queue, plus Stash's filtered/random queue; both are merged into a single playback order with cursor-based navigation
- **O Count tracking** – Records O timestamps in a sidecar JSON file on the server, synced to Stash's native `o_counter` and `o_history`, with an inline timeline editor
- **Play session tracking** – Accrues real playback time (excluding seeks and pauses), fires a play count at 25% of the video duration, and syncs durations to Stash
- **Below-player carousels** – Tabbed section with Next On Queue, Recommendations, This Performer (one row per performer), and an interactive O Count Map with hover thumbnails
- **Modals** – File Info, Markers, Edit (performers, tags, studios, galleries, groups, URLs, Stash IDs, custom fields), Queue, History (per-day grouping + live session), Settings, For Nerds, and Help
- **Right-click context menus** – Different menus for the player while playing vs. paused, plus page-wide and scene-card menus with copy actions, favorite toggles, and per-queue removal
- **For Nerds dashboard** – Live graphs for bitrate, stereo audio spectrum, and frame rate/dropped frames, plus detailed playback and codec stats
- **Fullscreen support** – Persists across scene changes on desktop, Android Chrome, and iOS Safari (with native `webkitEnterFullscreen` fallback)
- **Hover previews** – Video previews on scene cards after a short hover delay
- **Performer cards** – Rich demographic and body details; compact 2-column layout with hover-to-expand when a scene has more than four performers
- **Keyboard shortcuts** – Playback, seeking, volume, O recording, seek-to-percent, and fullscreen
- **Themeable** – Every color, spacing, shadow, and typography token is exposed as a `--vajax-bs-*` CSS variable that can be overridden from any theme plugin
- **Layout persistence** – Sidepanel view, queue behaviors, session queue, and below-player tab are saved to `localStorage` / `sessionStorage`

**Requirements**

- Python 3.8 or later (for the O-timestamp backend)

---

### Vajax Homepage

A complete replacement for Stash's default FrontPage. The plugin hides the built-in landing content and renders a customizable dashboard below the navbar, built entirely in React with no backend component.

**Dependencies**

- CommunityScriptsUILibrary

**Features**

- **Hero section** – Full-width banner that cycles through blurred scene previews and screenshots with a live O-count badge and title overlay
- **Animated greeting** – Typewriter, fade, or static greeting that personalizes the hero with the Stash username and a rotating set of themed suffixes
- **Search bar** – Scene search with `/` keyboard shortcut that forwards the query to Stash's scene list
- **Mood quick picks** – One-click random selections from scene and image filters (Quick, Long, Highly Rated, Unwatched, No O's, Random), color-coded by content type
- **Saved Filters** – All saved filters from every category, color-coded and icon-labeled by mode (scenes, performers, studios, tags, groups, galleries, images)
- **This Week** – Play count, O count, day streak, and new additions for the last 7 days
- **Continue Watching** – Scenes started but not finished, with progress bars
- **Recently Added** – Latest scenes with hover-preview video, performers, studio, play count, and O-count badges
- **Performer Spotlight** – Random featured performer with portrait image, stats, and demographics
- **Favorites** – Favorite performers, studios, and tags as avatar rows and tag chips
- **Activity heatmap** – GitHub-style 365-day play history with intensity levels and summary numbers
- **Category grids** – Recently added images (masonry using natural aspect ratios), studios, galleries, and groups

**Layout Editor**

Every panel can be rearranged, removed, or added through an in-place editor:

- Drag-and-drop reordering with visual drop targets
- Move up/down buttons for keyboard accessibility
- Add or remove any panel from the registry
- Layout persisted to browser localStorage
- Reset to default layout with one click

**Theme Editor**

A live theme panel with sliders and toggles for:

- Masonry column count (1–3, with automatic fallback on narrow viewports)
- Panel padding, column gap, and card gap
- Hero height, blur strength, brightness, title text, and title size
- Greeter on/off, animation style (typewriter, fade, static), speed, and custom text
- Every color, radius, shadow, and spacing token exposed as a CSS variable that can be overridden via `:root`

**Keyboard Shortcuts**

- `/` – Focus the search bar
- `R` – Jump to a random scene
- `Esc` – Clear the search and blur

---

### Vajax Stats

A statistics dashboard plugin for [Stash](https://stashapp.cc/) that extends the built-in stats page with charts, coverage reports, activity timelines, and detailed per-category breakdowns.

**Dependencies**

- CommunityScriptsUILibrary

**Features**

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

---

## Patch Notes

### Vajax Better Scenes - v1.2

**Two-tier queue system**

- Added a **Session Queue** - a per-tab, in-memory queue that plays *before* Stash's own URL-derived queue. Cleared automatically when the browser tab closes.
- Session queue entries support **duplicates** - the same scene can be added multiple times.
- Queue items from the Session Queue are **play-once**: once played, they are removed from the session.
- Unified merged playback order: `[Stash up to current] → [session items] → [rest of Stash]`, driven by a cursor that tracks which instance is playing when the same scene ID appears multiple times.
- Queue modal now renders **two separate panels**: a highlighted Session Queue panel (with its own count and clear button) and a Stash Queue panel.
- Clear buttons for the two queues are independent - clearing the session queue does not touch the Stash queue, and vice versa.

**Queue behaviors**

- **Autoplay on Queue** - start playback automatically when the scene advances via queue, without affecting manual navigation.

**Play session tracking**

- Playback time accrues only while the video is genuinely playing - seeks, scrubs, and pauses contribute nothing.
- **Play count fires mid-playback** the moment 25% of the video duration has been watched.
- Play **duration** streams to Stash every 10 media-seconds and on pause / end / unmount.
- Whole-video loop and A/B loop both end the session cleanly and start fresh, so each loop iteration counts as a new session.
- The History modal now shows a **This Session** panel with a live progress bar toward the 25% threshold and the current session's duration.

**History modal**

- Play history is now grouped by calendar day. Each row shows the number of plays for that day and an estimated duration.
- Expanding a day reveals the individual play times as plain text joined by ` – `, keeping the list compact even with many entries per day.
- New aggregate rows: **Total play count**, **Total play duration** (with a live badge when a session is in progress), and **Active days**.

**Scene cards**

- Added **hover previews** - a short hover delay swaps the thumbnail for the scene's preview video.
- Native browser tooltips removed in favour of the preview overlay.
- Right-click menu now includes **Open in New Tab**, **Add Next to Queue**, **Add Last to Queue**, and **Remove from Session / Stash Queue** (only shown when the scene is actually in the corresponding queue).
- Middle-click and Ctrl/Cmd-click open in a new tab natively.

**Fullscreen**

- Fullscreen **persists across scene changes** during queue-driven navigation.
- Automatic fullscreen re-entry if the browser exits fullscreen on a source change.

**Player controls**

- Auto-hide after **1 second of inactivity** - both the control bar and the cursor disappear.
- Click or move to reveal again.

**Context menus**

- Different menu when playing vs. paused:
  - **Playing** → Pause, Record O, Queue, Settings, For Nerds, Help, copy actions, Fullscreen.
  - **Paused** → same as above plus page-level actions (Play, Copy scene URL/ID/title/path, Favorite Performer submenu, Edit scene, Mark as organized, Open screenshot).
- Submenu support for the **Favorite Performer** action when a scene has multiple performers, including bulk *Favorite all* / *Unfavorite all*.


**Video player settings**

- New **Autoplay on open** toggle in Player Settings - plays the video as soon as the scene loads.

**Under the hood**

- SPA navigation via `history.pushState` for queue-driven scene changes, preserving the video element, cursor position, and fullscreen state.
- Stale `onRefresh` calls from the previous scene are discarded to avoid clobbering the new scene's state.
- React ErrorBoundary added around the scene page so backend errors never blank the UI.

---

## Installation

### Adding the source

1. Open Stash and navigate to **Settings → Plugins**.
2. Select the **Available Plugins** tab.
3. Click **Add Source**.
4. Enter the following URL: https://vibingsGit.github.io/vajax-overhaul/main/index.yml
5. Click **Reload** to fetch the plugin list.

### Installing a plugin

1. In the **Available Plugins** list, locate the desired plugin (for example, Vajax Better Scenes).
2. Click **Install** next to the plugin.
3. Restart Stash or reload plugins from the Settings page.

Each plugin can be installed or removed independently. Installing one plugin does not affect the others.

## Requirements

- Stash version **0.24.0** or later
- **Python 3.8** or later for plugins that include a backend component (Vajax Battles, Vajax Better Scenes)
- [CommunityScriptsUILibrary](https://github.com/stashapp/CommunityScripts) for Vajax Stats and Vajax Homepage

## Updating Plugins

Stash checks the source URL periodically for new versions. When an update is available it appears in the **Available Plugins** list. Click **Update** to install the latest version. Existing data stored on the server is preserved across updates unless a migration is explicitly required.

## Why AI usage?

Because I suck at coding and thinking for my own behalf…
DeepSeek was used in the creation of these plugins and human touches were made afterwards.

## Contributing

The Vajax Overhaul project is maintained by a single individual and their vision. Bug fixes and proposals are welcome.

## License

Each plugin is released under the MIT License unless otherwise stated in its individual directory.
