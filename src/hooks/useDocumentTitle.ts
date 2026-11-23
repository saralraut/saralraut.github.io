import { useEffect } from 'react'

// A single-page app has one HTML file, so the browser tab would show the same
// title on every route. This sets a page-specific title while the page is
// mounted and puts back whatever title was there before when the visitor
// leaves (the default title lives in index.html, the single source of truth).
export function useDocumentTitle(title: string | undefined) {
  useEffect(() => {
    if (!title) return
    const previous = document.title
    document.title = `${title} | Saral Raut`
    return () => {
      document.title = previous
    }
  }, [title])
}
