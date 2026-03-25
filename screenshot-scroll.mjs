import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const screenshotDir = path.join(__dirname, 'temporary screenshots');
if (!fs.existsSync(screenshotDir)) fs.mkdirSync(screenshotDir, { recursive: true });

const url = process.argv[2] || 'http://localhost:3000';
const scrollPct = parseFloat(process.argv[3] || '0.25');
const label = process.argv[4] || 'scrolled';

const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
await new Promise(r => setTimeout(r, 1500));

// Get scroll container scrollable height
const scrollH = await page.evaluate(() => {
  const c = document.getElementById('heroScrollContainer');
  return c ? c.offsetHeight - window.innerHeight : document.body.scrollHeight - window.innerHeight;
});
const scrollY = Math.round(scrollH * scrollPct);
await page.evaluate((y) => window.scrollTo(0, y), scrollY);
await new Promise(r => setTimeout(r, 600));

const filename = `screenshot-scroll-${label}.png`;
const outPath = path.join(screenshotDir, filename);
await page.screenshot({ path: outPath, fullPage: false });
await browser.close();
console.log('Saved: temporary screenshots/' + filename, '(scrollY:', scrollY, ')');
