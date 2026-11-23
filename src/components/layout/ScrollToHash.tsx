import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'

// React Router updates the URL when you click a link like "/#projects", but it
// does not scroll for you. This component does that, and it is what makes
// navbar links work from ANY page (for example from a project detail page
// back to the homepage's Projects section).
//
// It renders nothing. It exists purely for this side effect.
export default function ScrollToHash() {
  const { pathname, hash, key } = useLocation()
  const previousPath = useRef(pathname)

  // `key` changes on every navigation, even to the same URL, so clicking
  // "Projects" twice still scrolls twice.
  useEffect(() => {
    const id = decodeURIComponent(hash.slice(1))

    if (id) {
      // Smooth scrolling and the sticky-navbar offset come from CSS
      // (scroll-behavior and scroll-padding-top in index.css).
      document.getElementById(id)?.scrollIntoView()
    } else if (previousPath.current !== pathname) {
      // Moving to a different page: start at the top, without animating.
      // (On a plain page refresh we do nothing, so the browser restores
      // your scroll position as usual.)
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }

    previousPath.current = pathname
  }, [pathname, hash, key])

  return null
}
