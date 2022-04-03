import Head from 'next/head'

import Header from '../components/Header'
import Hero from '../components/communities/Hero'
import SmallClients from '../components/SmallClients'
import HowToPresail from '../components/communities/HowToPresail';
import Explainer from '../components/launchpad/Explainer'
import Faq from '../components/launchpad/Faq'
import CTA from '../components/launchpad/CTA'
import Footer from '../components/Footer'
import Hamza from '../components/Hamza'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Presail for Public Communities</title>
      </Head> 
      <div className="antialiased selection:bg-main selection:text-white">
        <Header />
        <Hero />
        <HowToPresail />



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
