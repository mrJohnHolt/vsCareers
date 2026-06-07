import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const puppeteer = require('L:/gitRepositories/clicklancashire.co.uk/node_modules/puppeteer');

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 900 });
await page.goto('http://localhost:5501', { waitUntil: 'networkidle2' });
await page.screenshot({ path: 'temporary screenshots/screenshot-hero-transition.png', clip: { x: 0, y: 0, width: 1280, height: 900 } });
await browser.close();
console.log('Saved');
