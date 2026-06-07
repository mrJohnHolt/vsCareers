import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const puppeteer = require('L:/gitRepositories/clicklancashire.co.uk/node_modules/puppeteer');

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 390, height: 844 });
await page.goto('http://localhost:5501', { waitUntil: 'networkidle2' });
await page.evaluate(() => window.scrollTo(0, 1200));
await new Promise(r => setTimeout(r, 500));
await page.screenshot({ path: 'temporary screenshots/screenshot-scrolled.png' });
await browser.close();
console.log('Saved');
