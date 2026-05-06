import { useState } from 'react'
import Nav from './sections/Nav'
import Hero from './sections/Hero'
import SocialProof from './sections/SocialProof'
import Problems from './sections/Problems'
import Features from './sections/Features'
import Comparison from './sections/Comparison'
import Testimonials from './sections/Testimonials'
import Pricing from './sections/Pricing'
import FAQ from './sections/FAQ'
import FinalCTA from './sections/FinalCTA'
import Footer from './sections/Footer'

export default function App() {
  const [done, setDone] = useState(false)
  const onSuccess = () => setDone(true)

  return (
    <div className="min-h-screen">
      <Nav />
      <Hero done={done} onSuccess={onSuccess} />
      <SocialProof />
      <Problems />
      <Features />
      <Comparison />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA done={done} onSuccess={onSuccess} />
      <Footer />
    </div>
  )
}
