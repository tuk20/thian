# Make CBANA case study images work outside Lovable hosting

Short answer: yes, you can drop the PNGs into `src/assets/` on GitHub — but the code also has to change. Right now the case study imports 7 `.asset.json` pointer files whose URLs (`/__l5e/assets-v1/...`) only exist on Lovable's CDN, which is why Vercel shows nothing. Adding image files alone won't help until the imports point at them.

Easiest path: I fetch the 7 images from the CDN, commit them as real files in `src/assets/`, and switch the imports. Then Vercel, Netlify, and Lovable all work.

## What changes

The 7 CBANA images:
- cbana-schedule-lofi.png
- cbana-schedule-hifi.png
- cbana-schedule-screens.png
- cbana-colors.png
- cbana-typography.png
- cbana-logos.png
- cbana-full-flow.png

Steps:
1. Download each image from its current CDN URL into `src/assets/` as a normal file.
2. In `src/pages/CaseStudyCBANA.tsx`, replace the 7 `.asset.json` imports with standard image imports and use the imported value directly instead of `asset.url`.
3. In `src/pages/Index.tsx`, do the same for the works-list preview image (`cbana-full-flow`).
4. Delete the 7 `.asset.json` pointer files.
5. Run the build to confirm every reference resolves, and check the case study in the preview.

## Notes

- Repo grows by roughly the combined size of the 7 images (each is a few hundred KB or less); Vite hashes and bundles them at build time.
- Every other project image (KaterIt, NAIC, etc.) already lives in the repo as a real file, so they're unaffected and already render on Vercel.
- If you'd rather upload the files yourself on GitHub, use exactly the filenames above in `src/assets/` and I'll do steps 2-4 afterwards.
