// Single source of truth for the page's sections. The Navbar builds its links
// from this list, and the scroll-highlighting hook watches the same ids, so
// adding or reordering a section is a one-line change here.
export interface NavItem {
  /** Must match the `id` attribute of the section on the page */
  id: string
  label: string
}

export const navItems: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'beyond-work', label: 'Beyond Work' },
  { id: 'contact', label: 'Contact' },
]

// Sections watched for the active-link highlight. "home" is the hero, which
// has no nav link of its own (the logo returns to it).
export const sectionIds: readonly string[] = ['home', ...navItems.map((item) => item.id)]
