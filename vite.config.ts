import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// `base` is the URL path the site is served from.
//  - User/organisation site (repo named <username>.github.io): '/'
//  - Project site (any other repo name, e.g. "portfolio"):      '/portfolio/'
// The GitHub Actions workflow (Phase 9) will set VITE_BASE for project sites,
// so local development and the deployed build both work without code changes.
export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [react(), tailwindcss()],
})
