import { Link } from 'react-router'
import Container from '../components/ui/Container'

export default function NotFoundPage() {
  return (
    <Container className="py-24">
      <h1 className="text-4xl font-bold text-ink">Page not found</h1>
      <p className="mt-4">The page you are looking for does not exist.</p>
      <Link to="/" className="mt-6 inline-block text-accent underline underline-offset-4">
        Back to home
      </Link>
    </Container>
  )
}
