# Fix 404 on refresh for the Vercel deployment

## What's happening
The site is a single-page app: React Router handles `/case-study/...` in the browser, but Vercel looks for a real file at that path on the server. The homepage works because `index.html` exists at `/`; every other path returns Vercel's 404 on refresh or direct link.

Note: the Lovable-hosted URL already handles this automatically — this only affects the Vercel deployment.

## The fix
Add a `vercel.json` at the project root that rewrites all non-file requests to `index.html`, so the router can take over.

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

This is a static config file — no app code changes.

## Steps
1. Create `vercel.json` in the project root with the rewrite rule above.
2. Push to GitHub (Lovable syncs automatically if GitHub is connected) so Vercel redeploys.
3. After the deploy finishes, refresh `/case-study/cbana-conference-app` directly to confirm it loads.

## Also worth checking on Vercel
- Framework preset: Vite, build command `npm run build`, output directory `dist`.
- Environment variables from `.env` (`VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`, `VITE_SUPABASE_PROJECT_ID`) must be set in the Vercel project, or backend calls fail in production.