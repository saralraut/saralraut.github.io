// Builds the URL for a file in /public (e.g. the resume PDF).
// BASE_URL is "/" today, but would be "/repo-name/" for a project site on
// GitHub Pages. Going through this helper means links never break if the
// hosting path changes.
export function assetUrl(path: string): string {
  return import.meta.env.BASE_URL + path.replace(/^\//, '')
}
