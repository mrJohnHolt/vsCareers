import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const puppeteer = require('L:/gitRepositories/clicklancashire.co.uk/node_modules/puppeteer');

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 900 });
await page.goto('http://localhost:5501', { waitUntil: 'networkidle2' });

const scrollY = await page.evaluate(() => {
  const el = document.getElementById('disciplines-list');
  return el ? el.getBoundingClientRect().top + window.scrollY - 80 : 0;
});
console.log('Scrolling to:', scrollY);
await page.evaluate((y) => window.scrollTo(0, y), scrollY);
await new Promise(r => setTimeout(r, 800));
await page.screenshot({ path: 'temporary screenshots/screenshot-disciplines-desktop.png' });
await browser.close();
console.log('Saved: temporary screenshots/screenshot-disciplines-desktop.png');
