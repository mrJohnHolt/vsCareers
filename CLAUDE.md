# CLAUDE.md — Vital Synergy

## Screenshotting / verification

Use Puppeteer (not gstack /browse) to verify page output. Dev server must be running first.

```bash
# Start dev server (background, port 3001)
node serve.mjs

# Take screenshot — saves to ./temporary screenshots/
node screenshot.mjs http://localhost:3001 index
node screenshot.mjs http://localhost:3001/about.html about
```

Then Read the saved PNG to view output.

## Client
- Name: Vital Synergy
- Sector: Recruitment / talent acquisition

## Brand
- Primary colour: #1a2b4a (dark navy)
- Accent colour: #EB5324 (orange)
- Hero accent: #5B8DEF (lighter blue — used for `class="accent--hero"` in headings)
- Fonts: Inter (Google Fonts)
- Logo: no — text-based nav logo

## Site
- Pages: index.html, about.html
- Live URL: n/a (local dev)
- Reference designs: example.jpg (index), aboutExample.jpg (about) — in project root when present

## Notes
- BEM CSS methodology
- Font Awesome 6.5 via CDN
- gstack /browse is blocked by App Control on this machine — always use Puppeteer via screenshot.mjs
