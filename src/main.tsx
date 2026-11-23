import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { LazyMotion, MotionConfig, domAnimation } from 'motion/react'
import '@fontsource-variable/inter'
import './index.css'
import App from './App'

// Providers live here so they wrap the whole app exactly once:
//  - BrowserRouter: clean URLs. `basename` comes from Vite's base setting, so
//    the same config drives both asset paths and routing on GitHub Pages.
//  - MotionConfig reducedMotion="user": every Motion animation automatically
//    disables movement when the visitor prefers reduced motion.
//  - LazyMotion: loads only the animation features we use (domAnimation,
//    ~15 KB) instead of the full library (~35 KB). `strict` makes the build
//    fail loudly if someone uses the heavy `motion.*` components by mistake;
//    use `m.*` instead.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <MotionConfig reducedMotion="user">
        <LazyMotion features={domAnimation} strict>
          <App />
        </LazyMotion>
      </MotionConfig>
    </BrowserRouter>
  </StrictMode>,
)
