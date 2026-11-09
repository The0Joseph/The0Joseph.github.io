import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
import ComingSoon from './components/ui/ComingSoon'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ComingSoon/>
        {/* <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact /> */}
      </main>
      <Footer />
    </>
  )
}

export default App
