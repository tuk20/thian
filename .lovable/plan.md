# Replace Community House Winnetka with CBANA Conference App

## What changes

- The Community House Winnetka case study is removed entirely (page, route, and its entry in Selected Works).
- A new CBANA Conference App case study takes its place, listed **first** in Selected Works.
- The new page reuses the exact layout of the existing case studies: left section nav, back link, hero with tags, and the same five sections (Project Overview, Research & Discovery, Design Process, Solution, Reflection), styled with the same cards, callout boxes, and bullet styling.

## Content mapping from your doc

| Page section | Doc content |
|---|---|
| Hero | Title "CBANA Conference App", subtitle about the 8th Conference native app, tags: Mobile App, Visual Identity, UX Design |
| Project Overview | Overview paragraph + meta block (Client, Project, Role, Timeline, Team, Tools) + Role & Responsibilities bullets |
| Research & Discovery | The Challenge (brought on for print identity, app 70% built solo, the conversation with the developer, agreeing to take the Schedule screen) + the three Goals |
| Design Process | Process steps 1–5: From Print Identity to Product Conversation, Scoping a Focused Contribution, Low-Fi First, Iterating to High-Fidelity, Handoff & Implementation |
| Solution | Design Deep Dive: The Schedule Screen + Visual & Brand System + Outcome & Impact (launched July 23–26, 2026 on iOS and Android) |
| Reflection | Reflection text on scope, communication, and flexibility |

## Handling the unfinished parts

Your doc has bracketed `[ADD: ...]` notes in the Schedule deep dive, Visual & Brand System, Challenges & Trade-offs, and Outcome bullets. I'll write those sections as clean draft prose using only material already in the doc (the current-sessions dashboard idea, simplified typography for legibility across ages, joining three weeks out, solo-developer constraints, keeping the conference color thread). Nothing invented — no fake metrics, quotes, or store links. You can revise the wording later.

Challenges & Trade-offs will live as a styled callout inside Solution so the five-section layout stays consistent with your other case studies.

## Images

Image slots are marked in your doc: Schedule wireframes, Schedule final UI, annotated Schedule rationale, style guide sheet, app icon + splash, and key screens flow. I'll build these as sized placeholder frames with captions in the right positions, plus a cover image slot for the Works list. When you send the images, I'll drop them straight into those slots.

## Technical notes

- Delete `src/pages/CaseStudyCommunityHouse.tsx`; add `src/pages/CaseStudyCBANA.tsx`.
- In `src/App.tsx`: remove the `/case-study/community-house-winnetka` route, add `/case-study/cbana-conference-app`.
- In `src/pages/Index.tsx`: replace the Winnetka entry in `works` and move it to index 0 (Industry: "Non-profit / Conference", Timeline: "(Mar - Jul 2026)").
- Winnetka image assets stay in `src/assets` unused for now, in case you want them back.
