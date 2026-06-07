import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const puppeteer = require('L:/gitRepositories/clicklancashire.co.uk/node_modules/puppeteer');

const url = process.argv[2] ?? 'http://localhost:5501';
const label = process.argv[3] ?? 'menu';

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 390, height: 844 });
await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
await page.click('.nav__hamburger');
await new Promise(r => setTimeout(r, 400));
await page.screenshot({ path: `temporary screenshots/screenshot-${label}.png` });
await browser.close();
console.log(`Saved: temporary screenshots/screenshot-${label}.png`);
