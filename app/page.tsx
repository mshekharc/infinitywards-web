import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Achievements from '@/components/Achievements'
import Interests from '@/components/Interests'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--background)' }}>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Achievements />
      <Interests />
      <Contact />
      <Footer />
    </main>
  )
}
