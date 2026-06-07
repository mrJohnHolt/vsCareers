# CLAUDE.md — Vital Synergy

## Screenshotting / verification

Use Puppeteer (not gstack /browse) to verify page output. User views pages via VS Code Live Server on **port 5501**. serve.mjs is a fallback local server on port 3001.

```bash
# Desktop screenshot (1280px) — saves to ./temporary screenshots/
node screenshot.mjs http://localhost:5501 index
node screenshot.mjs http://localhost:5501/about.html about

# Mobile screenshot (390px) — saves to ./temporary screenshots/
node screenshot-mobile.mjs http://localhost:5501 mobile-index
node screenshot-mobile.mjs http://localhost:5501/about.html mobile-about
```

Then Read the saved PNG to view output. Always use port 5501.

## Client
- Name: Vital Synergy
- Sector: Recruitment / talent acquisition

## Brand
- Deep Blue: #124B8A — buttons, UI, primary brand surface (--cl-primary)
- Sky Blue: #2196D4 — secondary UI, accent--hero (--cl-secondary)
- Indigo: #2F3382 — dark sections, footer, platform preview (--cl-deep)
- Vital Orange: #EB5324 — accent only, dividers, small highlights (--cl-accent)
- Text: #000000 — all body/heading text
- Muted text: #444444
- Display font: Bebas Neue (Google Fonts) — h1 hero titles, uppercase
- Body font: Nunito (Google Fonts) — h2, h3, body, captions
- Logo: img/Vital synergy logo EE - Transparent.png

## Site
- Pages: index.html, about.html
- Live URL: n/a (local dev)
- Reference designs: example.jpg (index), aboutExample.jpg (about) — in project root when present

## Notes
- BEM CSS methodology
- Font Awesome 6.5 via CDN
- gstack /browse is blocked by App Control on this machine — always use Puppeteer via screenshot.mjs
- Mobile navigation: hamburger menu only. No bottom navigation bar on this project.
