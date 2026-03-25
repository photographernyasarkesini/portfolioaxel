import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 3000;

const MIME = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.mjs': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
};

http.createServer((req, res) => {
  let urlPath = decodeURIComponent(req.url.split('?')[0]);

  // API: delete video atau album
  if (req.method === 'POST' && urlPath === '/api/delete') {
    const cors = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' };
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const { type, id } = JSON.parse(body); // type: 'video' | 'album'
        const dataPath = path.join(__dirname, 'data.json');
        const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
        if (type === 'video') {
          const before = data.videos.length;
          data.videos = data.videos.filter(v => v.id !== id);
          if (data.videos.length === before) { res.writeHead(404, cors); res.end(JSON.stringify({ ok: false, error: 'Video not found' })); return; }
        } else if (type === 'album') {
          const before = data.albums.length;
          data.albums = data.albums.filter(a => a.id !== id);
          if (data.albums.length === before) { res.writeHead(404, cors); res.end(JSON.stringify({ ok: false, error: 'Album not found' })); return; }
        } else {
          res.writeHead(400, cors); res.end(JSON.stringify({ ok: false, error: 'Invalid type' })); return;
        }
        fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
        res.writeHead(200, cors);
        res.end(JSON.stringify({ ok: true }));
      } catch (e) {
        res.writeHead(500, cors);
        res.end(JSON.stringify({ ok: false, error: e.message }));
      }
    });
    return;
  }

  // API: set cover thumbnail
  if (req.method === 'POST' && urlPath === '/api/set-cover') {
    const cors = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' };
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const { albumId, cover } = JSON.parse(body);
        const dataPath = path.join(__dirname, 'data.json');
        const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
        const album = data.albums.find(a => a.id === albumId);
        if (!album) { res.writeHead(404, cors); res.end(JSON.stringify({ ok: false, error: 'Album not found' })); return; }
        album.cover = cover;
        fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
        res.writeHead(200, cors);
        res.end(JSON.stringify({ ok: true }));
      } catch (e) {
        res.writeHead(500, cors);
        res.end(JSON.stringify({ ok: false, error: e.message }));
      }
    });
    return;
  }

  if (urlPath === '/') urlPath = '/index.html';

  const filePath = path.join(__dirname, urlPath);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
}).listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
