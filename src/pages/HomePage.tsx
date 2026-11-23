import About from '../sections/About'
import BeyondWork from '../sections/BeyondWork'
import Contact from '../sections/Contact'
import Education from '../sections/Education'
import Experience from '../sections/Experience'
import Hero from '../sections/Hero'
import Projects from '../sections/Projects'
import Skills from '../sections/Skills'

// The homepage is just an ordered list of sections. Reordering or removing one
// is a one-line change here (and in src/data/navigation.ts for the navbar).
// Section backgrounds alternate: About (alt), Skills (base), Experience (alt),
// Projects (base), Education (alt), Beyond Work (base), Contact (alt).
export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <BeyondWork />
      <Contact />
    </>
  )
}
