import Head from 'next/head'

import Header from '../components/Header'
import Hero from '../components/projects/Hero'
import SmallClients from '../components/SmallClients'
import Explainer from '../components/launchpad/Explainer'
import Faq from '../components/launchpad/Faq'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Hamza from '../components/Hamza'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Presail for Web 3.0 Projects</title>
      </Head> 
      <div className="antialiased selection:bg-main selection:text-white">
        <Header />
        <Hero />
        <SmallClients />
        <Explainer />
        <Faq />
        <Contact />
        <Footer />
        <Hamza />
      </div>
    </div>
  )
}
