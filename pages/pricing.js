import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/pricing/Hero'
import CTA from '../components/pricing/CTA'
import Premium from '../components/pricing/Premium'
import SmallClients from '../components/SmallClients'
import Footer from '../components/Footer'
import Hamza from '../components/Hamza'

export default function Pricing() {
  return (
    <div>
      <Head>
        <title>Pricing - Presail</title>
        <meta property="og:title" content="Our price is simple: 0.25% of funds raised. Raise funds in crypto, organize, and distribute tokens - all in one place." key="title" />
      </Head>
      <div className="antialiased selection:bg-main selection:text-white">
        <Header />
        <Hero />
        <Premium />
        <SmallClients />
        <CTA />
        <Footer />
        <Hamza />
      </div>
    </div>
  )
}
