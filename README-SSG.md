# SSR/SSG Implementation

This project now includes server-side rendering (SSR) and static site generation (SSG) for optimal SEO and performance.

## Overview

- **Entry Server**: `src/entry-server.tsx` - Server-side rendering with ReactDOMServer
- **SSG Build**: `scripts/build-ssg.js` - Generates static HTML files for all routes
- **Diagnostics**: Browser-accessible endpoints to verify rendering

## Pre-rendered Routes

The following routes are pre-built as static HTML files:

- `/` - Homepage with full content
- `/services` - Services overview page  
- `/services/adults` - Adult therapy services
- `/insights` - Mental health insights hub
- `/insights/anxiety-basics` - Anxiety disorder guide
- `/online-therapy` - Online therapy services
- `/couples-therapy` - Couples counseling
- `/teen-therapy` - Teen mental health services

## Build Process

### Production Build
```bash
node build-production.js
```

This runs the complete SSG build process:
1. Builds client bundle with Vite
2. Builds server bundle for SSR  
3. Renders all routes server-side
4. Generates static HTML files
5. Creates diagnostic endpoints
6. Updates sitemap.xml and robots.txt

### Manual SSG Build
```bash
node scripts/build-ssg.js
```

### Serve with Diagnostics
```bash
node scripts/serve-diagnostics.js
```

## Diagnostic Endpoints

### HTML Verification: `/__diagnostics/html`
Returns the exact HTML served for the homepage as plain text. Use this to verify:
- Real content is in HTML (not just script tags)
- H1 and first paragraph are present
- Meta tags are properly set

### SEO Analysis: `/__diagnostics/seo`  
Returns JSON with SEO analysis:
```json
{
  "env": "production|preview",
  "robots_mode": "indexable|noindex", 
  "canonical_for_home": "https://mentalspacetherapy.lovable.app/",
  "has_h1_on_home": true,
  "first_paragraph_present": true,
  "jsonld_types_found_on_home": ["MedicalOrganization", "MedicalClinic"]
}
```

## Environment Detection

- **Production**: `mentalspacetherapy.lovable.app` → `index, follow`
- **Preview/Dev**: Other domains → `noindex, nofollow`

## Acceptance Tests

✅ **View Source Test**: View page source for `/` shows H1 and first paragraph in HTML  
✅ **Diagnostic HTML**: `/__diagnostics/html` shows same content as view source  
✅ **SEO Verification**: `/__diagnostics/seo` returns `has_h1_on_home: true` and JSON-LD types  

## Files Created/Modified

- `src/entry-server.tsx` - SSR entry point
- `vite.config.ssr.ts` - SSR build configuration  
- `scripts/build-ssg.js` - Static site generation
- `scripts/serve-diagnostics.js` - Development diagnostics server
- `src/pages/Services.tsx` - Services overview page
- `src/pages/Insights.tsx` - Insights hub page
- Updated `src/App.tsx` with new routes
- Updated `public/sitemap.xml` with new routes
- Updated `public/robots.txt` to block diagnostics

## How It Works

1. **Server Rendering**: `entry-server.tsx` uses `ReactDOMServer.renderToString()` with `StaticRouter`
2. **Static Generation**: Build script renders each route and saves as `route/index.html`  
3. **Diagnostics**: Static files contain analysis data for browser verification
4. **Environment Detection**: Robots meta tag set based on hostname/environment variables

This ensures search engines get fully rendered HTML while maintaining SPA functionality for users.