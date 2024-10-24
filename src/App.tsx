import './App.css'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/hero'
import { Projects } from './components/Projects'
import { Service } from './components/Service'
import { Skills } from './components/Skills'

function App() {

  return (
    <main>
      <Hero />
      <About />
      <Service />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
