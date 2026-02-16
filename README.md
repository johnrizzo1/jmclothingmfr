# J. Morales Clothing Manufacturing L.L.C.

Website for J. Morales Clothing Manufacturing L.L.C., a full-service clothing manufacturer.

## Technology Stack

This site is built with [Vite](https://vitejs.dev/), a modern front-end build tool.

## Development

### Prerequisites

- Node.js 24.x or later
- npm

### Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
.
├── index.html          # Main HTML entry point
├── src/
│   ├── js/
│   │   └── main.js     # Main JavaScript module
│   ├── css/
│   │   └── style.css   # Main stylesheet
│   └── data/           # JSON data files (converted from YAML)
│       ├── banner.json
│       ├── feature.json
│       ├── portfolio.json
│       └── ...
├── public/             # Static assets (images, plugins, etc.)
└── vite.config.js      # Vite configuration
```

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `main` branch.

## Content Management

Content is managed through JSON files in the `src/data/` directory. To update content:

1. Edit the relevant JSON file in `src/data/`
2. The changes will be automatically reflected when you rebuild the site

## Migration from Hugo

This site was previously built with Hugo. The migration to Vite involved:

- Converting YAML data files to JSON format
- Creating a dynamic JavaScript module to render content
- Simplifying the build process
- Maintaining all existing functionality and design

The old Hugo configuration files are kept in the repository for reference but are no longer used.
