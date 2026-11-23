import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import { Menu, X } from 'lucide-react'
import Container from '../ui/Container'
import ResumeButton from '../ui/ResumeButton'
import { navItems, sectionIds } from '../../data/navigation'
import { profile } from '../../data/profile'
import { useActiveSection } from '../../hooks/useActiveSection'

// "Saral Raut" -> "SR". Derived from the profile so the logo never goes stale.
const initials = profile.name
  .split(' ')
  .map((word) => word[0])
  .join('')

export default function Navbar() {
  // Only two pieces of state in the whole header:
  const [menuOpen, setMenuOpen] = useState(false) // mobile menu open/closed
  const [scrolled, setScrolled] = useState(false) // has the page left the top?
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const activeId = useActiveSection(sectionIds)

  // Switch to the blurred, bordered style once the visitor scrolls.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Escape closes the mobile menu and returns focus to its button, which is
  // the keyboard behaviour screen-reader and keyboard users expect.
  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-200 ${
        scrolled || menuOpen
          ? 'border-edge bg-surface-alt/85 backdrop-blur'
          : 'border-transparent bg-surface'
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        {/* Logo: returns to the top of the homepage from anywhere */}
        <Link
          to="/#home"
          onClick={closeMenu}
          className="flex min-h-11 items-center gap-3 rounded-lg"
        >
          <span
            aria-hidden="true"
            className="grid h-9 w-9 place-items-center rounded-lg bg-surface-card text-sm font-bold text-accent ring-1 ring-edge"
          >
            {initials}
          </span>
          <span className="sr-only font-semibold text-ink sm:not-sr-only">{profile.name}</span>
        </Link>

        <div className="flex items-center gap-2">
          {/* Desktop navigation (lg and up) */}
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navItems.map(({ id, label }) => {
                const isActive = activeId === id
                return (
                  <li key={id}>
                    <Link
                      to={`/#${id}`}
                      aria-current={isActive ? 'location' : undefined}
                      className={`rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                        isActive ? 'text-accent' : 'text-ink-muted hover:text-ink'
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="hidden lg:block lg:pl-2">
            <ResumeButton size="sm" />
          </div>

          {/* Mobile menu toggle (below lg) */}
          <button
            ref={menuButtonRef}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
            className="grid h-11 w-11 place-items-center rounded-lg text-ink transition-colors hover:bg-surface-card lg:hidden"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile panel. Always in the DOM (so aria-controls is valid) and
          toggled with the `hidden` attribute. */}
      <div id="mobile-menu" hidden={!menuOpen} className="border-t border-edge lg:hidden">
        <Container className="py-4">
          <nav aria-label="Mobile">
            <ul className="flex flex-col">
              {navItems.map(({ id, label }) => {
                const isActive = activeId === id
                return (
                  <li key={id}>
                    <Link
                      to={`/#${id}`}
                      onClick={closeMenu}
                      aria-current={isActive ? 'location' : undefined}
                      className={`flex min-h-11 items-center rounded-md px-3 text-base font-medium transition-colors ${
                        isActive ? 'text-accent' : 'text-ink-muted hover:text-ink'
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
          <div className="mt-4">
            <ResumeButton className="w-full" />
          </div>
        </Container>
      </div>
    </header>
  )
}
