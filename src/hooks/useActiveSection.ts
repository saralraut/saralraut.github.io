import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

// Returns the id of the section currently "in focus" while scrolling, so the
// Navbar can highlight the matching link.
//
// How: an IntersectionObserver reports when a section crosses a thin band
// near the upper-middle of the viewport (40%–45% from the top, set by
// rootMargin). Whichever section is in that band is the active one. This is
// far cheaper than listening to every scroll event and measuring positions.
export function useActiveSection(ids: readonly string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null)
  const { pathname } = useLocation()

  // `pathname` is a dependency because navigating to another page replaces the
  // section elements; we must observe the new ones.
  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)

    if (elements.length === 0) {
      setActiveId(null)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [ids, pathname])

  return activeId
}
