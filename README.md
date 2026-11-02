# Turf Riot

A top-down team arena brawler that runs in the browser: eight classes, five maps, four game modes, loot and league levels.

## Files

- `turf-riot.html`: the whole game (styles, markup and script in one file).
- `build.js`: wraps the game in a full web page at `dist/index.html` for hosting.
- `vercel.json`: tells Vercel to run the build and serve `dist/`.

## Run it locally

```bash
node build.js
open dist/index.html
```

## Hosting

Vercel builds and deploys automatically on every push to `main`.

Outside claude.ai the game plays fully against bots, and league progress saves in the browser. Online lobbies, party queues and account-saved progress use claude.ai features, so they only work in the claude.ai version for now. Hosting them here needs a realtime game server and sign-in of our own.
