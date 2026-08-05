import { About } from '../components/About'
import { Benefits } from '../components/Benefits'
import { Hero } from '../components/Hero'
import { Instagram } from '../components/Instagram'
import { Newsletter } from '../components/Newsletter'
import { Ritual } from '../components/Ritual'

export function Home({ heroImage, ritualImage, instagramImages, isSubscribed, onProductsClick, onSubscribe }) {
  return (
    <>
      <Hero image={heroImage} onCtaClick={onProductsClick} />
      <Benefits />
      <About />
      <Ritual image={ritualImage} />
      <Instagram images={instagramImages} />
      <Newsletter isSubscribed={isSubscribed} onSubscribe={onSubscribe} />
    </>
  )
}
