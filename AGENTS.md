# Agent Instructions — Artist Website Generation

When the user requests to create or personalize an artist website (e.g. *"use the GitHub October artist template to make a website for [artist name]..."*):

## 1. Non-Negotiable Contract
Always follow `AI_STUDIO_RULES.md`. Preserve the template layout, styles, components, and animations. Only update configuration and assets.

## 2. Multi-Agent Parallel Execution (Fast Turnaround)
Never serialize discography research and link fetching in a single thread. Always split the work across concurrent subagents:

- **Lead Agent (Orchestrator)**:
  - Clones `ArtistWebsiteTemplateOctober` into `scratch/[ArtistName]`.
  - Configures `metadata.json`, `index.html`, and `wrangler.jsonc`.
  - Sets up GitHub repo `zjpujols-source/[ArtistName]` and Cloudflare secrets (`CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`).
  - Concurrently spawns workers using `invoke_subagent`:
    * **Worker 1 (Newest Releases)**: Finds 3 newest releases + downloads 1000x1000 covers to `public/covers/` + harvests streaming URLs across all 13 platforms.
    * **Worker 2 (Top Hits)**: Finds 2 all-time top stream releases + downloads 1000x1000 covers + harvests streaming URLs.
    * **Worker 3 (Socials & Videos)**: Formats YouTube music/performance videos and validates social links.
  - Injects aggregated data into `src/config/artistConfig.ts`.
  - Runs `npm run build` and deploys via `npx wrangler deploy`.

## 3. Mobile Camera Roll Video Workflow
The user uploads their hero background video clip after site creation from their phone's camera roll.
- Do NOT block initial setup or fail waiting for local video files.
- The initial site deploys with `public/hero-poster.jpg`.
- When GitHub secrets are set, mobile camera-roll uploads push to GitHub and Cloudflare deploys automatically.
