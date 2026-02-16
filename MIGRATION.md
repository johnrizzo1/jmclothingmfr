# Migration from Hugo to Vite

This document describes the migration from Hugo static site generator to Vite.

## Changes Made

### New Files
- `package.json` - Node.js dependencies and scripts
- `package-lock.json` - Lock file for reproducible builds
- `vite.config.js` - Vite configuration
- `index.html` - Main HTML entry point (root level)
- `src/js/main.js` - Main JavaScript module for dynamic content
- `src/css/style.css` - Main stylesheet (copied from assets)
- `src/data/*.json` - Data files converted from YAML to JSON
- `.github/workflows/vite.yml` - New GitHub Actions workflow for Vite
- `README.md` - Project documentation

### Modified Files
- `.gitignore` - Updated to include node_modules and dist

### Deprecated Files (No Longer Used)
The following Hugo-specific files are no longer used but kept for reference:
- `.hugo_build.lock` - Hugo lock file
- `archetypes/` - Hugo content templates
- `config/` - Hugo configuration files
- `content/` - Hugo content files (now using JSON in src/data)
- `data/` - Hugo data files (converted to JSON)
- `go.mod`, `go.sum` - Hugo Go dependencies
- `hugo_stats.json` - Hugo statistics
- `i18n/` - Hugo internationalization files
- `layouts/` - Hugo templates
- `themes/` - Hugo theme files
- `.github/workflows/hugo.yml` - Old Hugo workflow (replaced by vite.yml)

## Key Differences

### Build Process
- **Hugo**: Uses Hugo CLI to generate static HTML files
- **Vite**: Uses Vite build tool with modern JavaScript bundling

### Content Management
- **Hugo**: YAML data files and Go templates
- **Vite**: JSON data files and JavaScript template literals

### Development Server
- **Hugo**: `hugo server`
- **Vite**: `npm run dev` (with hot module replacement)

### Build Output
- **Hugo**: Outputs to `public/` directory
- **Vite**: Outputs to `dist/` directory

### Deployment
Both use GitHub Actions to deploy to GitHub Pages, but the Vite workflow is simpler and doesn't require installing Hugo, Go, or Dart Sass.

## Benefits of Vite

1. **Faster Development**: Hot module replacement for instant updates
2. **Modern JavaScript**: ES modules and modern bundling
3. **Simpler Dependencies**: Only needs Node.js/npm
4. **Better Performance**: Optimized production builds
5. **Easier Maintenance**: Standard web technologies (HTML, CSS, JS)

## Running the Site

See [README.md](README.md) for instructions on running the site locally.
