import { Route, Routes } from 'react-router'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import ProjectDetailPage from './pages/ProjectDetailPage'

// The route table is the map of the whole site. The pathless <Route> wraps
// every page in <Layout> (navbar + <main>); each page renders where Layout
// places <Outlet />. "/projects/:slug" is ONE route serving every project:
// the slug in the URL selects which project's data to show.
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
