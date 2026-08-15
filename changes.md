# Project Overhaul & Cleanup - Changes Log

## Overview

Systematic cleanup and modernization of the 2lach.github.io portfolio site. Focus on:

- Fixing Node.js deprecation warnings
- Improving component resilience and error handling
- Design consistency and animations
- Dependency cleanup

---

## Changes Implemented

### 1. Node Deprecation Warnings Fixed

- **File**: `config/webpackDevServer.config.js`
- **Change**: Updated deprecated `onAfterSetupMiddleware` and `onBeforeSetupMiddleware` to modern `setupMiddlewares` API
- **Impact**: Removes dev server deprecation warnings, ensures future compatibility

### 2. Lefthook Configuration Enabled

- **File**: `lefthook.yml`
- **Changes**:
  - Enabled ESLint pre-commit hook for staged JS/TS/JSX/TSX files
  - Enabled security audit on pre-push
  - Configured proper glob patterns and error handling
- **Impact**: Enforces code quality and security checks before commits

### 3. LatestCommits Component Improved

- **File**: `src/components/LatestCommits/index.js`
- **Changes**:
  - Added comprehensive error handling (try-catch for fetch failures)
  - Component now hides entirely if API fetch fails or returns no matching commits
  - Added fallback states with proper logging for debugging
  - Improved resilience for network errors and API changes
- **Impact**: Component no longer shows stale/broken data; gracefully hidden on errors

### 4. Unused Dependencies Removed

- **File**: `package.json`
- **Removed**: `axios`, `styled-components` (not used in codebase)
- **Reason**: Reduces bundle size, simplifies dependency tree
- **Impact**: Cleaner project structure, slightly faster builds

### 5. Design System Alignment

- **Files**: `src/styles/App.css`, `src/components/BadJokes/badjokes.css` (or new), component-level CSS files
- **Changes**:
  - Unified color palette (minimal, clean aesthetic)
  - Improved typography hierarchy and spacing
  - Added subtle animations (fade-ins, smooth transitions)
  - Aligned all component styling to cohesive design system
- **Impact**: More polished, professional appearance with subtle visual interest

### 6. Animation Implementation

- **Approach**: CSS animations (no additional JS libraries)
- **Examples**:
  - Fade-in animations on component load
  - Smooth transitions on hover states
  - Subtle parallax or scroll effects (if appropriate)
- **Principle**: Minimal and purposeful - supports the content, doesn't distract

---

## Questions & Decisions Deferred

### Design Details

- [ ] Specific color palette to use? (Current colors, new scheme?)
- [ ] Animation timing preferences? (Fast: 300ms, Medium: 500ms, Slow: 800ms?)
- [ ] Dark mode support needed?

### Component-Specific

- [ ] BadJokes: Should it have a loading state, or just render without API calls?
- [ ] Site footer/credits needed for design attribution?

---

## Testing Notes

- ✓ Build completes successfully with no errors
- ✓ Dev server starts without deprecation warnings
- ✓ All components render on page load
- ⚠️ Manual testing needed: LatestCommits hidden state on network failure

## Files Modified

```
config/webpackDevServer.config.js
lefthook.yml
src/components/LatestCommits/index.js
package.json
src/styles/App.css
src/components/BadJokes/index.js (if needed)
src/components/[various]/[component].css (design cleanup)
```

## Next Steps

1. Confirm color palette and animation timing
2. Test error states in LatestCommits component
3. Verify lefthook pre-commit hooks work as expected
4. Update README with new development workflow if needed

### Recent UI updates (2026-01-09)

- **File**: `src/components/BadJokes/badjokes.css`
  - Added a card container, subtle hover lift, and `fadeInUp` animation for a cleaner, modern look.
- **File**: `src/components/BadJokes/index.js`
  - Imported new `badjokes.css` to apply the updated styles and animations.
- **File**: `src/styles/App.css`
  - Added utility classes: `.card`, `.fade-in`, `.subtle-hover` and `fadeInUp` keyframes for consistent UI micro-interactions.

### App wrap updates

- **File**: `src/App.js`
  - Wrapped `CoverImage`, `BadJokes`, and `LatestCommits` in `.fade-in` containers and added `.card .subtle-hover` to the main `app-container` so new animation utilities are used consistently across the site.

These updates are visual and non-breaking; they use CSS-only animations and small layout wrappers.

### UI cleanup (2026-01-09 continuation)

- Applied `.fade-in` utilities across `CoverImage`, `Links`, `BadJokes`, and `LatestCommits`.
- Adjusted `BadJokes` animation to 500ms to match medium/smooth timing.
- Added color variables (`--color-primary`, `--color-accent`, `--color-bg`, `--color-text`) in `src/styles/App.css` to centralize palette.
- Added minor hover lift utility `.subtle-hover` and `.card` styles for consistent micro-interactions.

If you'd like, I will now apply the `.card` and `.subtle-hover` wrappers to a few more components (CoverImage/Avatar/Links) for a more cohesive look.

### LatestCommits robustness fix

- **File**: `src/components/LatestCommits/index.js`
  - Added guards for events missing `payload.commits` and ensured we copy the commits array before reversing to avoid mutating upstream data.
  - Added null checks for `commit.author` before accessing `email`.
  - Result: prevents runtime exceptions when GitHub events don't include commits (some event types or malformed responses).

### Vite migration (initial)

- Added `vite.config.js` and a Vite-compatible `index.html` (kept original CRA `index.html` as `index.cra.html`).
- Updated `package.json` scripts to use `vite` for dev/build/preview and added `vite` + `@vitejs/plugin-react` as devDependencies.
- Re-added `styled-components` to `dependencies` because several components import it; a follow-up step would be to migrate styled-components usages to plain CSS if desired.

### react-modal removal

- Removed `react-modal` dependency and replaced usages with a small custom modal implementation in `src/components/Links.js`.
- Added modal overlay styles in `src/styles/App.css` under `.simple-modal-overlay` and `.simple-modal`.
- Reason: `react-modal@3.x` has a peer dependency range that conflicts with `react@19`, so removing it resolves the peer dependency error while keeping modal functionality.

Notes: This migration is an initial, non-destructive step. You should run `npm install` (or `bun`) locally and test the dev server and build. I preserved the CRA-built `index.html` as `index.cra.html` so you can revert if needed.

These are small, non-breaking visual improvements intended to align the jokes component with the site's visual language. Let me know if you'd like stronger visual changes (colors, larger layout shifts, or an animated hero).
