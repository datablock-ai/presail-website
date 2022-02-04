import Head from 'next/head'

import Header from '../components/Header'
import PricingHero from '../components/PricingHero'
import PricingCTA from '../components/PricingCTA'
import Tiers from '../components/Tiers'
import Faq from '../components/Faq'
import Footer from '../components/Footer'


export default function Pricing() {
  return (
    <div>
      <Head>
        <title>Pricing - Presail</title>
      </Head>
      <div className="antialiased">
        <Header />
        <PricingHero />
        <PricingCTA />
        <Tiers />
        <Faq />
        <Footer />
      </div>
    </div>
  )
}
