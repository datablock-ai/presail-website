import Head from 'next/head'
import Image from 'next/image'

import Header from '../components/Header'
import PricingHero from '../components/PricingHero'
import Tiers from '../components/Tiers'
import Faq from '../components/Faq'
import Footer from '../components/Footer'


export default function Pricing() {
  return (
    <div className="antialiased">
      <Header />
      <PricingHero />
      <Tiers />
      <Faq />
      <Footer />
    </div>
  )
}
