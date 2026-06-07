import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const puppeteer = require('L:/gitRepositories/clicklancashire.co.uk/node_modules/puppeteer');

const url = process.argv[2] ?? 'http://localhost:5501';
const selector = process.argv[3] ?? 'main';
const label = process.argv[4] ?? 'section';

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 390, height: 844 });
await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
const el = await page.$(selector);
if (!el) { console.error('Element not found:', selector); await browser.close(); process.exit(1); }
await el.screenshot({ path: `temporary screenshots/screenshot-${label}.png` });
await browser.close();
console.log(`Saved: temporary screenshots/screenshot-${label}.png`);
