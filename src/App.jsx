import Hero from './sections/Hero'
import Prize from './sections/Prize'
import Tournament from './sections/Tournament'
import WhyCompete from './sections/WhyCompete'
import Highlights from './sections/Highlights'
import Apply from './sections/Apply'
import Footer from './sections/Footer'
import Nav from './sections/Nav'

function Divider() {
  return (
    <div className="max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--bg-dark)] grid-bg relative">
      <Nav />
      <Hero />
      <Divider />
      <Prize />
      <Divider />
      <Tournament />
      <Divider />
      <WhyCompete />
      <Divider />
      <Highlights />
      <Divider />
      <Apply />
      <Footer />
    </div>
  )
}
