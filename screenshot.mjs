import { createRequire } from 'node:module';
import { existsSync, mkdirSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const require = createRequire(import.meta.url);
const puppeteer = require('L:/gitRepositories/clicklancashire.co.uk/node_modules/puppeteer');

const url = process.argv[2] ?? 'http://localhost:5501';
const label = process.argv[3];
const dir = './temporary screenshots';

if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

const n = readdirSync(dir).filter(f => f.endsWith('.png')).length + 1;
const filename = label ? `screenshot-${n}-${label}.png` : `screenshot-${n}.png`;
const filepath = join(dir, filename);

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 900 });
await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await new Promise(r => setTimeout(r, 2000));
await page.evaluate(() => window.scrollTo(0, 0));
await new Promise(r => setTimeout(r, 500));
await page.screenshot({ path: filepath, fullPage: true });
await browser.close();
console.log(`Saved: ${filepath}`);
