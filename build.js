// Wraps the game page in a full HTML document for hosting outside claude.ai (claude.ai adds this wrapper itself).
// Run: node build.js  ->  dist/index.html
const fs = require('fs');

const src = fs.readFileSync('turf-riot.html', 'utf8');
// The title, meta and font links at the top of the game file belong in <head>; the rest goes in <body>.
const cut = src.indexOf('<style>');
const top = src.slice(0, cut), rest = src.slice(cut);
const head = '<!doctype html><html lang="en"><head><meta charset="utf-8">'
  + '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">'
  + top
  + '<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}'
  + 'body{margin:0;font:14px system-ui,-apple-system,sans-serif}img{max-width:100%}[hidden]{display:none!important}</style>'
  + '</head><body>';

fs.mkdirSync('dist', { recursive: true });
fs.writeFileSync('dist/index.html', head + rest + '</body></html>');
console.log('Built dist/index.html');
