# AI Coding Agent Instructions for 2lach.github.io

## Project Overview

Personal portfolio website built with React (v19) using Create React App. The site is a static GitHub Pages deployment with lazy-loaded components and a service worker for offline capability. Deployed builds are tagged with build numbers (e.g., `build-39`) in the repository root.

## Architecture & Key Patterns

### Component Structure

- **Lazy-loaded pages**: `BadJokes`, `CoverImage`, `Links`, `Avatar`, `HelloWorld` imported with `React.lazy()` in `App.js` and wrapped with `<Suspense>` fallback
- **Class components** predominate (legacy pattern) - e.g., `CookieConsent`, `LatestCommits`, `BadJokes`
- **Component organization**: Each major component has its own folder with `index.js` and optional `.css` file (e.g., `src/components/LatestCommits/`)
- **Entry point**: `src/index.js` → `src/App.js` (uses `styles/App.css` not root `App.css`)

### External APIs & Data Flow

- **GitHub API**: `LatestCommits` component fetches user's public events from `https://api.github.com/users/2lach/events/public` to display latest commits
- **Filtering logic**: Searches for `PushEvent` type and filters commits by email `stefanlachmann@hotmail.com`
- **Fetch pattern**: Direct fetch calls in `componentDidMount()`, no centralized API client

### Browser Storage & Consent

- **Cookie management**: Custom `setCookie()` and `checkConsent()` utilities in `CookieConsent.js` (not external library)
- **Pattern**: Checks `document.cookie` with regex for consent key before rendering consent banner
- **Expiry**: Hardcoded to 365 days regardless of `days` parameter

### Styling

- **CSS files co-located with components**: `component.css` files in same directory as component
- **Root styles**: `src/index.css` for global, `src/styles/App.css` for app-level
- **No CSS-in-JS library used** (despite styled-components in dependencies)
- **Prettier config**: 180 char print width, semicolons enabled, trailing commas ES5

### Service Worker & PWA

- **Files**: `src/service-worker.js`, `src/serviceWorkerRegistration.js`, `public/manifest.json`
- **Registration**: Called from `src/index.js` via `reportWebVitals()`
- **Workbox**: Configured in webpack for production builds

## Build & Deployment Workflow

### Development

- **Commands**:
  - `yarn start` - dev server via react-scripts
  - `yarn build` - production build to `build/` folder
  - `yarn test` - run tests with react-scripts

### Build Numbering System

- Manual build increment system: `build-1`, `build-2`, etc.
- **Script**: `deploy.sh` automates build, version increment, and git ops
- **Process**: Build on `development` branch → `build-XX` folder created → committed → pushed
- **Cherry-pick deployment**: Latest build committed to master branch, files moved to repo root for serving

### Pre-commit Hooks

- **Lefthook** configured in `lefthook.yml` (disabled)
- **Intended hooks**: ESLint on staged JS/TS/JSX/TSX files, security audit on push
- **Current state**: Both commented out, not enforced

## Testing Patterns

- **Framework**: Jest + React Testing Library (from react-scripts)
- **File pattern**: `component.test.js` co-located with component
- **Mocking approach**:
  - Mock `Math.random()` with `jest.spyOn()` for quote selection
  - Mock global `fetch()` for API testing in `LatestCommits`
  - Pattern: restore with `jest.restoreAllMocks()` or specific `.mockRestore()`
- **Assertions**: Uses `@testing-library/react` queries (`screen.getByText()`) and `@testing-library/jest-dom` matchers (`toBeInTheDocument()`)

## Project-Specific Conventions

### Naming & Organization

- **Private package**: `"private": true` in package.json prevents npm publishing
- **Version tracking**: `version.txt` file (purpose unclear, separate from package.json version)
- **State files**: `notes/` folder contains `deploy.md` (deployment notes) and `todos.md` (task tracking)

### Configuration Files

- **Webpack**: Custom config in `config/webpack.config.js` - don't edit without understanding CRA's build system
- **ESLint**: Extends `react-app` and `react-app/jest` (from react-scripts)
- **Paths**: All paths resolved via `config/paths.js`

### Special Files

- **`suppressConsole`**: Custom utility (component) in `src/components/supressConsole/index.js` - likely disables console output in production
- **`CNAME`**: GitHub Pages custom domain configuration
- **Deployed files**: Root-level `index.html`, `service-worker.js`, `asset-manifest.json` are served directly (copied from build)

## Common Tasks & Gotchas

1. **Adding new pages**: Use lazy loading pattern with `React.lazy()` and `<Suspense>` wrapper
2. **Updating GA/analytics**: Check `reportWebVitals.js` integration
3. **Cookie-related features**: Use existing `setCookie()` and `checkConsent()` utilities
4. **API calls**: Use direct `fetch()` in component lifecycle methods, not axios (axios in deps but unused)
5. **CSS changes**: Keep styles co-located in component folders; avoid touching `src/styles/App.css` for component-specific styling
6. **Build deployment**: Never commit to master directly; use cherry-pick workflow from development branch builds

## Tools & Dependencies

- **React**: v19.2.1 (latest at time of this config)
- **Icons**: react-icons for HiCheckCircle, IoIosCloseCircle
- **Modal**: react-modal (dependency installed, usage pattern unclear)
- **Unused**: axios (installed but fetch is used instead)
- **Build tool**: Create React App (react-scripts v5.0.1) - ejection possible but not done

## File Reference Guide

- Route to component structure: `src/components/{ComponentName}/index.js`
- Build artifacts: `build-XX/static/` (JS in `js/`, CSS in `css/`)
- Deployment template: `public/` folder (manifests, base index.html)
- Config hooks: `config/webpack.config.js`, `config/getHttpsConfig.js`, `config/modules.js`
