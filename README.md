# Saral Raut: Portfolio

A static portfolio and digital resume built with React, TypeScript, Vite and Tailwind CSS.

## Run locally

Requires Node.js 20.19+ (or 22.12+) and npm.

```bash
npm install        # install dependencies (first time only)
npm run dev        # start the dev server, opens at http://localhost:5173
npm run typecheck  # check TypeScript types
npm run build      # type-check and create the production build in dist/
npm run preview    # serve the production build locally
```

## Where things live

| Path | Purpose |
|---|---|
| `src/data/` | **All portfolio content.** The only folder you edit regularly. |
| `src/types/portfolio.ts` | The shape of that content (TypeScript types). |
| `src/index.css` | Design tokens (colours, font) and global base styles. |
| `src/pages/` | One file per route. |
| `src/sections/` | Homepage sections (Hero so far; the rest arrive in later phases). |
| `src/components/layout/` | Page frame: `Layout`, `Navbar`, `ScrollToHash`. |
| `src/components/ui/` | Small reusable pieces: `Button`, `Container`, `SocialLinks`, icons. |
| `src/hooks/` | Reusable logic, e.g. `useActiveSection` (nav highlight on scroll). |
| `src/lib/` | Tiny helpers, e.g. `assetUrl` for links to files in `public/`. |
| `public/` | Files served as-is: favicon, `resume.pdf`. |
| `vite.config.ts` | Build config, including the GitHub Pages `base` path. |

## Updating content (no code changes needed)

| To change... | Edit |
|---|---|
| Name, intro, About text, "open to" roles, links, email | `src/data/profile.ts` |
| Skills / "currently learning" | `src/data/skills.ts` |
| Jobs | `src/data/experience.ts` |
| Projects (add repo/demo links, highlights, write-ups, screenshots) | `src/data/projects.ts` |
| Education | `src/data/education.ts` |
| Interests and videos | `src/data/interests.ts` |
| Navbar links / section order | `src/data/navigation.ts` and `src/pages/HomePage.tsx` |
| **Resume** | Replace `public/resume.pdf` (keep the file name) |

A project gets a "View Details" page automatically once it has `highlights` or `details`.
Links and sections only appear when their data exists, so empty fields never show as blanks.

## Deployment

The site deploys itself: every push to `main` runs `.github/workflows/deploy.yml`,
which installs, type-checks, builds, copies `index.html` to `404.html` (so links such
as `/projects/animal-species-classification` still open the app on GitHub Pages) and
publishes `dist/`.

### One-time setup

1. Create a **public** repository named exactly `saralraut.github.io` (no README, no .gitignore).
2. In this folder run:
   ```bash
   git init -b main
   git add .
   git commit -m "Initial portfolio"
   git remote add origin https://github.com/saralraut/saralraut.github.io.git
   git push -u origin main
   ```
3. On GitHub: **Settings > Pages > Build and deployment > Source: GitHub Actions**.
4. Open the **Actions** tab, wait for "Deploy to GitHub Pages" to turn green
   (about a minute), then visit https://saralraut.github.io/

If the first run fails on the `deploy` step, step 3 was not saved yet: set it, then
use **Re-run all jobs**.

### Notes

- A `username.github.io` repo is served from the site root, so Vite's `base` stays `/`.
  A differently named repo would need `VITE_BASE=/repo-name/` at build time.
- Canonical URL, sitemap, `robots.txt` and the social preview tags in `index.html` and
  `public/` all assume `https://saralraut.github.io/`. Change them together if the address changes.
- Deep links return HTTP 404 under the hood (a GitHub Pages limitation) but render
  normally in the browser, which is why the sitemap lists only the homepage.
