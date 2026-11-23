import { Outlet } from 'react-router'
import Footer from './Footer'
import Navbar from './Navbar'
import ScrollToHash from './ScrollToHash'

// The shared frame around every page: skip link, navbar, the <main> landmark
// and the footer. Pages render into <Outlet />, so they never repeat this
// markup (and there is exactly one <main> per page).
export default function Layout() {
  return (
    <>
      {/* First focusable element on the page: lets keyboard users jump past
          the navbar. Invisible until it receives focus. */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:font-semibold focus:text-surface"
      >
        Skip to content
      </a>
      <ScrollToHash />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
