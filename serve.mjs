import { createServer } from 'node:http';
import { readFile, access } from 'node:fs/promises';
import { extname, join } from 'node:path';

const mimes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
};

const ROOT = process.cwd();

async function fileExists(p) {
  try { await access(p); return true; } catch { return false; }
}

createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost:3000');
  let pathname = url.pathname === '/' ? '/index.html' : url.pathname;
  const filepath = join(ROOT, pathname);
  const ext = extname(filepath).toLowerCase();
  const mime = mimes[ext] || 'text/html; charset=utf-8';

  try {
    if (await fileExists(filepath) && ext) {
      const data = await readFile(filepath);
      res.writeHead(200, { 'Content-Type': mime });
      res.end(data);
    } else {
      const index = await readFile(join(ROOT, 'index.html'));
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(index);
    }
  } catch {
    res.writeHead(500);
    res.end('Server error');
  }
}).listen(3001, () => console.log('Server running at http://localhost:3001'));
