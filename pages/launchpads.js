import Head from 'next/head'

import Header from '../components/Header'
import Hero from '../components/launchpad/Hero'
import SmallClients from '../components/SmallClients'
import Explainer from '../components/launchpad/Explainer'
import Faq from '../components/launchpad/Faq'
import CTA from '../components/launchpad/CTA'
import Footer from '../components/Footer'
import Hamza from '../components/Hamza'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Presail for Web3.0 launchpads</title>
      </Head> 
      <div className="antialiased selection:bg-main selection:text-white">
        <Header />
        <Hero />
        <SmallClients />
        <Explainer />
        <Faq />
        <CTA />
        <Footer />
        <Hamza />
      </div>
    </div>
  )
}
