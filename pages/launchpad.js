import Head from 'next/head'

import Header from '../components/Header'
import Hero from '../components/launchpad/Hero'
import Explainer from '../components/launchpad/Explainer'
import Faq from '../components/launchpad/Faq'
import CTA from '../components/launchpad/CTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Presail</title>
      </Head> 
      <div className="antialiased selection:bg-main selection:text-white">
        <Header />
        <Hero />
        <Explainer />
        <Faq />
        <CTA />
        <Footer />
      </div>
    </div>
  )
}
