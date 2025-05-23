import About from "../sections/About"
import Contact from "../sections/Contact"
import Footer from "../sections/Footer"
import Header from "../sections/Header"
import Hero from "../sections/Hero"

function HeroPage() {
  return (
    <main className="overflow-hidden">
    <Header />
    <Hero />
    <About />
    <Contact />
    <Footer />
  </main>
  )
}

export default HeroPage