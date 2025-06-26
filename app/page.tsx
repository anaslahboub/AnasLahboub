import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Profile from "./components/Profile"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Profile />
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
