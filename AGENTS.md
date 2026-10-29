# Project Notes

## Images
- Store images as real binary files in `src/assets/` and import them directly. Never use `.asset.json` CDN pointers: they don't resolve to real bytes in this project's deployments (see plan "make-cbana-case-study-images-work-outside-lovable-hosting", 2026-08-06).

## Favicon
- The favicon is `public/favicon.png` (a pencil stationery mark, matches the vintage book theme), declared in `index.html`. Do not reintroduce `public/favicon.ico`.
