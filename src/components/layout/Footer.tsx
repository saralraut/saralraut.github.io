import { profile } from '../../data/profile'
import Container from '../ui/Container'

// Shown on every page (it lives in Layout). The year updates itself.
export default function Footer() {
  return (
    <footer className="border-t border-edge bg-surface py-8">
      <Container className="flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>Built with React, TypeScript, and Tailwind CSS</p>
      </Container>
    </footer>
  )
}
