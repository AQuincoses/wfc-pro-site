import Hero from './sections/Hero'
import Prize from './sections/Prize'
import Tournament from './sections/Tournament'
import WhyCompete from './sections/WhyCompete'
import Commissioner from './sections/Commissioner'
import Highlights from './sections/Highlights'
import Apply from './sections/Apply'
import Footer from './sections/Footer'
import Nav from './sections/Nav'

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--bg-dark)] grid-bg relative">
      <Nav />
      <Hero />
      <Prize />
      <Tournament />
      <WhyCompete />
      <Commissioner />
      <Highlights />
      <Apply />
      <Footer />
    </div>
  )
}
