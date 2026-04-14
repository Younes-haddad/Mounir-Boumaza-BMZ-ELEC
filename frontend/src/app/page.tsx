import Hero from "@/components/sections/Hero"
import Services from "@/components/sections/Services"
import About from "@/components/sections/About"
import Contact from "@/components/sections/Contact"
import Footer from "@/components/layout/Footer"

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
    </main>
  )
}
