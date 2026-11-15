# Explore Console + Unified Navigation — Design

Date: 2026-11-15

## Intent

`/explore` was a link directory: 13 cards across 4 modes that all jumped to separate pages. The goal is for the explore page to surface everything itself — an archive console where any section can be read inline, without a page navigation — plus a unified, calmer navigation system across the site.

## Approaches considered

1. **Archive console + full-screen inline viewer (chosen).** The console swaps card groups instantly per mode; clicking a card opens a viewer overlay that fetches the section's real page and renders its content in place. Zero content duplication, sections remain real pages, hash-based deep links, browser back closes the viewer.
2. In-place accordion expansion — rejected: heavy sections (martial arts, mind) would make one endless page.
3. Hover preview popovers — rejected: content still lives behind navigation, which is the problem being solved.

## Design

### Archive console (`src/pages/explore.astro`)

- Mode rail (Body / Mind / Tools / Roots) as `role="tablist"`; desktop sticky vertical rail, mobile horizontal chip row. Arrow keys move selection.
- Cards are real `<a href>` links (no-JS and middle-click still navigate). A left click is intercepted and opens the viewer.
- Viewer: fixed overlay (`role="dialog" aria-modal`), header with close / index / prev / next / full-page link, reading-progress line, scrollable content pane, footer keyboard hints.
- Content loading: `fetch(BASE_URL + '/' + path + '/')` → `DOMParser` → extract `main` → `div.min-h-screen` → sanitized `body`; strip `script`, `nav`, `.mobile-overlay`, background overlay divs; copy the page's stylesheet links and inline styles into the document head once (deduped) so Astro scoped styles apply; results cached in a Map; hover preloads.
- History: open sets `location.hash = '#/<path>'`; ESC/✕/back-button close via `history.back()` when we pushed; popstate/hashchange is the single sync point; `/explore/#/exercise` deep-links straight into the viewer.
- Keyboard: ESC close, ←/→ prev/next section, Tab focus-trapped inside the viewer. `prefers-reduced-motion` disables animations.

### Unified navigation

- `src/components/Navigation.astro` (fixed top bar, home): `~/adineo` wordmark; home/about/explore links with animated underline driven by the existing scroll-spy; explore ▾ flyout with all 19 sections grouped into create/learn/body/mind/tools/roots shelves; 2px scroll-progress line; `scrolled` state; grouped mobile menu.
- `src/components/PageNavigation.astro` (subpage strip, same `currentPage` prop): breadcrumb `~ / explore / section` (explore crumb only for archive sections); `sections ▾` grouped dropdown replacing the emoji "more ▾"; grouped mobile sidebar; keyboard/click-outside/ESC handling; `anatomy` added to the index.

## Constraints honored

- Dual deploy targets: all fetch/link paths derived from `import.meta.env.BASE_URL`; verified against the GitHub Pages rewrite script.
- Gruvbox palette, monospace aesthetic, vanilla client scripts, scoped styles only — no new dependencies, no framework islands.
- No comments in any edited file.

## Verification

`npm run build` (133 pages) and `npm run build:github` both pass. Browser-verified on desktop and mobile viewports: mode switching, viewer open/close (click, ESC, back button), deep link, prev/next, flyout, breadcrumb, sections dropdown, mobile rail and menus.
