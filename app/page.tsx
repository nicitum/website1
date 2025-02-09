import Hero from "./components/Hero"
import Products from "./components/Products"
import Services from "./components/Services"
import Process from "./components/Process"
import Contact from "./components/Contact"

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <Products />
      <Services />
      <Process />
      <Contact />
    </div>
  )
}

